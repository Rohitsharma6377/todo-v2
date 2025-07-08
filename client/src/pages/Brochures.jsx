import React from 'react';
import { Helmet } from 'react-helmet-async';

const brochures = [
  { title: 'Company Profile', img: 'https://dummyimage.com/200x120/6366f1/fff&text=Profile' },
  { title: 'Services Overview', img: 'https://dummyimage.com/200x120/818cf8/fff&text=Services' },
  { title: 'Case Studies', img: 'https://dummyimage.com/200x120/4f46e5/fff&text=Cases' },
];

export default function Brochures() {
  return (
    <>
      <Helmet>
        <title>Brochures | Netcurion Technology</title>
        <meta name="description" content="Download our latest brochures." />
      </Helmet>
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-indigo-700 mb-4">Brochures</h1>
          <p className="text-lg text-gray-700 mb-8">
            Download our brochures to learn more about our company and services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {brochures.map((brochure, idx) => (
              <div key={idx} className="bg-indigo-50 rounded-lg shadow p-4 flex flex-col items-center text-center">
                <img src={brochure.img} alt={brochure.title} className="h-24 w-full object-cover rounded mb-2" />
                <h3 className="text-lg font-semibold text-indigo-800">{brochure.title}</h3>
                <a href="#" className="mt-2 text-indigo-600 hover:underline text-sm">Download</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 