"use client";
// components/contact/ContactForm.tsx
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
    });
    if (res.ok) {
        // show success message...
        setForm({ name: '', email: '', phone: '', service: '', message: '' });
        alert('Thanks! We’ll be in touch soon.');
    } else {
        alert('Something went wrong—please try again later.');
    }
}


  return (
    <div className="w-full lg:w-1/2">
      <h2 className="text-2xl font-bold mb-4">Feel Free To Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
          />
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          >
            <option value="">Select Service</option>
            <option>Threading</option>
            <option>Body Waxing</option>
            <option>Facials</option>
            <option>Makeup</option>
            <option>Appointment</option>
          </select>
        </div>
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-full"
          required
        />
        <button
          type="submit"
          className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}