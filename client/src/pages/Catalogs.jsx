import React from 'react';
import { Helmet } from 'react-helmet-async';

const catalogs = [
  { title: 'Product Catalog 2024', img: 'https://dummyimage.com/200x120/6366f1/fff&text=Catalog', desc: 'Explore our latest products.' },
  { title: 'Solutions Catalog', img: 'https://dummyimage.com/200x120/818cf8/fff&text=Solutions', desc: 'Discover our IT solutions.' },
];

export default function Catalogs() {
  return (
    <>
      <Helmet>
        <title>Catalogs | Netcurion Technology</title>
        <meta name="description" content="Download our latest catalogs." />
      </Helmet>
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-indigo-700 mb-4">Catalogs</h1>
          <p className="text-lg text-gray-700 mb-8">
            Download our latest catalogs to explore our products and solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {catalogs.map((cat, idx) => (
              <div key={idx} className="bg-indigo-50 rounded-lg shadow p-4 flex flex-col items-center text-center">
                <img src={cat.img} alt={cat.title} className="h-24 w-full object-cover rounded mb-2" />
                <h3 className="text-lg font-semibold text-indigo-800">{cat.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{cat.desc}</p>
                <a href="#" className="mt-2 text-indigo-600 hover:underline text-sm">Download</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 