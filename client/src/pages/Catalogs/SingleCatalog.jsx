import React from 'react';
import { useParams, Link } from 'react-router-dom';

const dummyCatalogs = [
  {
    id: '1',
    title: 'Product Catalog 2024',
    img: 'https://dummyimage.com/400x240/6366f1/fff&text=Catalog',
    desc: 'Explore our latest products in detail. This catalog covers all our new launches and bestsellers for 2024.',
    download: '#',
  },
  {
    id: '2',
    title: 'Solutions Catalog',
    img: 'https://dummyimage.com/400x240/818cf8/fff&text=Solutions',
    desc: 'Discover our IT solutions, case studies, and technology stack in this comprehensive catalog.',
    download: '#',
  },
];

export default function SingleCatalog() {
  const { id } = useParams();
  const catalog = dummyCatalogs.find((c) => c.id === id) || dummyCatalogs[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 flex flex-col items-center">
        <img src={catalog.img} alt={catalog.title} className="w-full h-56 object-cover rounded-xl mb-6 shadow" />
        <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 mb-2 text-center">{catalog.title}</h1>
        <p className="text-gray-700 dark:text-gray-200 mb-4 text-center">{catalog.desc}</p>
        <a href={catalog.download} className="px-6 py-3 rounded bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition mb-4">Download Catalog</a>
        <Link to="/catalogs" className="text-indigo-600 dark:text-indigo-300 hover:underline text-sm">Back to Catalogs</Link>
      </div>
    </div>
  );
} 