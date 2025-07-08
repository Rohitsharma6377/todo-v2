import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms | Netcurion Technology</title>
        <meta name="description" content="Read our terms and conditions." />
      </Helmet>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-indigo-700 mb-4">Terms & Conditions</h1>
          <p className="text-lg text-gray-700 mb-8">
            This is a placeholder for Netcurion Technology's terms and conditions. Please contact us for more details.
          </p>
        </div>
      </section>
    </>
  );
}
