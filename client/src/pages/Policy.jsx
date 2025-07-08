import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Policy() {
  return (
    <>
      <Helmet>
        <title>Policy | Netcurion Technology</title>
        <meta name="description" content="Read our privacy and company policies." />
      </Helmet>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-indigo-700 mb-4">Privacy & Company Policy</h1>
          <p className="text-lg text-gray-700 mb-8">
            This is a placeholder for Netcurion Technology's privacy and company policy. Please contact us for more details.
          </p>
        </div>
      </section>
    </>
  );
}
