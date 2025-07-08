import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaCogs, FaCloud, FaLock, FaMobileAlt, FaChartLine } from 'react-icons/fa';

const services = [
  { icon: <FaCogs className="text-3xl text-indigo-600" />, title: 'IT Consulting', desc: 'Expert advice for your IT strategy.' },
  { icon: <FaCloud className="text-3xl text-indigo-600" />, title: 'Cloud Solutions', desc: 'Scalable and secure cloud deployments.' },
  { icon: <FaLock className="text-3xl text-indigo-600" />, title: 'Cybersecurity', desc: 'Protect your business from threats.' },
  { icon: <FaMobileAlt className="text-3xl text-indigo-600" />, title: 'App Development', desc: 'Mobile and web app development.' },
  { icon: <FaChartLine className="text-3xl text-indigo-600" />, title: 'Analytics', desc: 'Data-driven business insights.' },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Netcurion Technology</title>
        <meta name="description" content="Explore our IT services and solutions." />
      </Helmet>
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-indigo-700 mb-4">Our Services</h1>
          <p className="text-lg text-gray-700 mb-8">
            We offer a wide range of IT services to help your business succeed in the digital age.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-indigo-50 rounded-lg shadow p-6 flex flex-col items-center text-center">
                {service.icon}
                <h3 className="mt-4 text-lg font-semibold text-indigo-800">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.desc}</p>
              </div>
            ))}
          </div>
          <a href="/contact" className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded shadow hover:bg-indigo-700 transition">Get a Free Consultation</a>
        </div>
      </section>
    </>
  );
} 