import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const faqs = [
  { q: 'How soon will I get a response?', a: 'We typically respond within 24 hours on business days.' },
  { q: 'What support hours do you offer?', a: 'Our support team is available Mon-Fri, 9am-7pm IST.' },
  { q: 'Can I request a custom solution?', a: 'Absolutely! We specialize in custom IT solutions for all business needs.' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Contact | Netcurion Technology</title>
        <meta name="description" content="Contact Netcurion Technology for business inquiries, support, or a free quote." />
      </Helmet>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-indigo-700 mb-4 text-center">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Have a question or want to work with us? Fill out the form below and our team will get back to you soon.
          </p>
          <div className="mb-8 text-center">
            <h2 className="text-xl font-bold text-indigo-700 mb-2">Why Contact Us?</h2>
            <p className="text-gray-700">Whether you need a quote, have a support request, or want to discuss a partnership, we’re here to help. Our team is friendly, responsive, and ready to assist you with any inquiry.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <form className="bg-indigo-50 rounded-lg shadow p-6 flex flex-col" onSubmit={handleSubmit}>
              <label className="mb-2 font-medium text-gray-700">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="mb-4 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
              <label className="mb-2 font-medium text-gray-700">Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required className="mb-4 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
              <label className="mb-2 font-medium text-gray-700">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={4} className="mb-4 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
              <button type="submit" className="bg-indigo-600 text-white py-2 rounded font-semibold hover:bg-indigo-700 transition">Send Message</button>
              {submitted && <p className="mt-4 text-green-600">Thank you! We'll be in touch soon.</p>}
            </form>
            <div className="flex flex-col gap-6 justify-center items-center">
              <div className="bg-white rounded shadow p-4 w-full">
                <h2 className="text-lg font-bold text-indigo-700 mb-2">Company Info</h2>
                <p className="text-gray-700">Netcurion Technology Pvt. Ltd.<br />123 Tech Park, New Delhi, India<br />Email: info@netcurion.com<br />Phone: +91-12345-67890</p>
                <div className="flex gap-4 mt-4 justify-center">
                  <a href="mailto:info@netcurion.com" className="text-indigo-600 hover:underline">Email</a>
                  <a href="tel:+911234567890" className="text-indigo-600 hover:underline">Call</a>
                  <a href="https://linkedin.com/company/netcurion" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">LinkedIn</a>
                </div>
              </div>
              <div className="w-full h-40 bg-indigo-100 rounded flex items-center justify-center text-indigo-400 font-bold">
                [Map Placeholder]
              </div>
              <div className="bg-indigo-50 rounded-lg shadow p-4 w-full mt-4">
                <h2 className="text-lg font-bold text-indigo-700 mb-2">Support & Response</h2>
                <p className="text-gray-700">Support Hours: Mon-Fri, 9am-7pm IST<br />Typical Response: within 24 hours</p>
              </div>
            </div>
          </div>
          <div className="max-w-2xl mx-auto mt-12">
            <h2 className="text-xl font-bold text-indigo-700 mb-4">Frequently Asked Questions</h2>
            <ul className="space-y-4">
              {faqs.map((faq, idx) => (
                <li key={idx} className="bg-indigo-50 rounded p-4 shadow">
                  <strong className="text-indigo-700">Q: {faq.q}</strong>
                  <p className="text-gray-700 mt-1">A: {faq.a}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
} 