// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

// Longest value accepted per field. Anything past this is a bot or an attempt
// to blow up the mail body, not a real enquiry.
const MAX_LENGTHS = {
  name: 100,
  email: 254,
  phone: 40,
  service: 100,
  message: 5000,
} as const;

// Caps how often one address can submit, so the form cannot be used to burn
// through the Gmail sending quota. Held in memory, so it limits per server
// instance rather than globally — enough to stop casual abuse.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;
const recentSubmissions = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const hits = (recentSubmissions.get(ip) ?? []).filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS
  );
  hits.push(now);
  recentSubmissions.set(ip, hits);

  // Drop stale callers so the map cannot grow without bound.
  if (recentSubmissions.size > 5000) {
    for (const [key, times] of recentSubmissions) {
      if (times.every((time) => now - time >= RATE_LIMIT_WINDOW_MS)) {
        recentSubmissions.delete(key);
      }
    }
  }

  return hits.length > RATE_LIMIT_MAX;
}

/** Escape a value for interpolation into the HTML mail body. */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Collapse CR/LF so a value cannot inject extra mail headers. */
function singleLine(value: string) {
  return value.replace(/[\r\n]+/g, ' ').trim();
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again in a minute.' },
        { status: 429 }
      );
    }

    const body: Partial<ContactForm> = await request.json();
    const read = (value: unknown) => (typeof value === 'string' ? value.trim() : '');

    const name = read(body.name);
    const email = read(body.email);
    const phone = read(body.phone);
    const service = read(body.service);
    const message = read(body.message);

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const tooLong = Object.entries({ name, email, phone, service, message }).find(
      ([field, value]) => value.length > MAX_LENGTHS[field as keyof typeof MAX_LENGTHS]
    );
    if (tooLong) {
      return NextResponse.json(
        { error: `The ${tooLong[0]} field is too long.` },
        { status: 400 }
      );
    }

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,       // your Gmail address
        pass: process.env.GMAIL_PASS,       // your Gmail App Password
      },
    });

    // Compose the email. Values reaching a header are stripped of CR/LF; values
    // reaching the HTML body are escaped.
    const mailOptions = {
      from: `"${singleLine(name).replace(/"/g, '')}" <${process.env.GMAIL_USER}>`,
      replyTo: singleLine(email),
      to: process.env.CONTACT_EMAIL,        // where you want to receive submissions
      subject: `New Contact Form Submission from ${singleLine(name)}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        Service: ${service}

        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || 'N/A')}</p>
        <p><strong>Service:</strong> ${escapeHtml(service)}</p>
        <hr/>
        <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
      `,
    };

    // Send it
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
