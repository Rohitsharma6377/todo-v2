import React from 'react';
import { useParams, Link } from 'react-router-dom';

const dummyServices = [
  {
    id: '1',
    title: 'Cloud Migration',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    desc: 'Seamlessly move your infrastructure to the cloud with zero downtime. Our experts ensure a smooth transition and ongoing support.',
  },
  {
    id: '2',
    title: 'AI Automation',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    desc: 'Automate business processes with custom AI solutions tailored to your needs.',
  },
  {
    id: '3',
    title: 'Cybersecurity',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    desc: 'Protect your business with advanced security protocols and monitoring.',
  },
];

export default function SingleService() {
  const { id } = useParams();
  const service = dummyServices.find((s) => s.id === id) || dummyServices[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 flex flex-col items-center">
        <img src={service.img} alt={service.title} className="w-full h-56 object-cover rounded-xl mb-6 shadow" />
        <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 mb-2 text-center">{service.title}</h1>
        <p className="text-gray-700 dark:text-gray-200 mb-4 text-center">{service.desc}</p>
        <Link to="/services" className="text-indigo-600 dark:text-indigo-300 hover:underline text-sm">Back to Services</Link>
      </div>
    </div>
  );
} 