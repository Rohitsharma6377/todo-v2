import React from 'react';
import { Helmet } from 'react-helmet-async';

const clients = [
  { name: 'Acme Corp', logo: 'https://dummyimage.com/100x40/6366f1/fff&text=Acme' },
  { name: 'Globex', logo: 'https://dummyimage.com/100x40/818cf8/fff&text=Globex' },
  { name: 'Initech', logo: 'https://dummyimage.com/100x40/4f46e5/fff&text=Initech' },
  { name: 'Umbrella', logo: 'https://dummyimage.com/100x40/0ea5e9/fff&text=Umbrella' },
  { name: 'Wayne', logo: 'https://dummyimage.com/100x40/22d3ee/fff&text=Wayne' },
];

const testimonials = [
  { name: 'John Doe', company: 'Acme Corp', text: 'Netcurion helped us scale our business securely and efficiently.' },
  { name: 'Jane Smith', company: 'Globex', text: 'Professional team and excellent support!' },
  { name: 'Priya Patel', company: 'Initech', text: 'Their cloud solutions transformed our operations.' },
  { name: 'Carlos Gomez', company: 'Umbrella', text: 'We trust Netcurion for all our cybersecurity needs.' },
];

const highlights = [
  'Migrated 50+ companies to the cloud with zero downtime',
  'Saved clients an average of 30% on IT costs',
  'Helped startups launch MVPs in under 3 months',
  '24/7 support and 99.99% uptime for all managed services',
];

export default function Clients() {
  return (
    <>
      <Helmet>
        <title>Clients | Netcurion Technology</title>
        <meta name="description" content="See our clients and their testimonials." />
      </Helmet>
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-indigo-700 mb-4">Our Clients</h1>
          <p className="text-lg text-gray-700 mb-8">
            We are proud to work with leading companies across industries. Our clients trust us to deliver results that matter.
          </p>
          <div className="mb-12">
            <h2 className="text-xl font-bold text-indigo-700 mb-2">How We Help Our Clients</h2>
            <ul className="list-disc pl-8 text-gray-700 text-left space-y-1 inline-block text-lg">
              {highlights.map((h, idx) => <li key={idx}>{h}</li>)}
            </ul>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {clients.map((client, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <img src={client.logo} alt={client.name} className="h-10 mb-2" />
                <span className="text-gray-700 text-sm font-medium">{client.name}</span>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-indigo-700 mb-6">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-indigo-50 rounded-lg shadow p-6 text-left">
                <p className="text-gray-700 mb-2">"{t.text}"</p>
                <span className="font-semibold text-indigo-800">{t.name}</span>
                <span className="text-gray-500 ml-2">({t.company})</span>
              </div>
            ))}
          </div>
          <div className="bg-indigo-100 rounded-lg shadow p-8 mt-8">
            <h2 className="text-xl font-bold text-indigo-700 mb-2">Become a Client</h2>
            <p className="text-gray-700 mb-4">Ready to take your business to the next level? Contact us today for a free consultation and see how Netcurion can help you achieve your goals.</p>
            <a href="/contact" className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded shadow hover:bg-indigo-700 transition">Get Started</a>
          </div>
        </div>
      </section>
    </>
  );
} 