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

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, message }: ContactForm = await request.json();

    // Basic validation
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
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

    // Compose the email
    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,        // where you want to receive submissions
      subject: `New Contact Form Submission from ${name}`,
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
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <hr/>
        <p>${message.replace(/\n/g, '<br/>')}</p>
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
