import React from 'react';
import { Helmet } from 'react-helmet-async';

const jobs = [
  { title: 'Frontend Developer', location: 'Remote', type: 'Full Time', desc: 'Build beautiful, scalable web apps with React and Tailwind. Collaborate with designers and backend engineers.' },
  { title: 'Backend Developer', location: 'New Delhi', type: 'Full Time', desc: 'Design and implement robust APIs and microservices using Node.js and MongoDB. Ensure security and scalability.' },
  { title: 'UI/UX Designer', location: 'Remote', type: 'Contract', desc: 'Create intuitive, modern interfaces and user flows. Work closely with product and engineering teams.' },
];

const perks = [
  'Flexible work hours & remote options',
  'Competitive salary & performance bonuses',
  'Health insurance & wellness programs',
  'Learning budget & certifications',
  'Collaborative, diverse team culture',
];

export default function Career() {
  return (
    <>
      <Helmet>
        <title>Career | Netcurion Technology</title>
        <meta name="description" content="Join Netcurion Technology and build your career in IT innovation." />
      </Helmet>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-indigo-700 mb-4">Careers at Netcurion</h1>
          <p className="text-lg text-gray-700 mb-8">
            Join our team of passionate innovators and help shape the future of technology. We believe in empowering our people to do their best work and grow their careers.
          </p>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-indigo-700 mb-2">Why Work With Us?</h2>
            <ul className="list-disc pl-8 text-gray-700 text-left space-y-1">
              <li>Impactful projects for global clients</li>
              <li>Mentorship from industry leaders</li>
              <li>Open, inclusive, and supportive culture</li>
              <li>Opportunities for rapid career growth</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-indigo-700 mb-2">Perks & Benefits</h2>
            <ul className="list-disc pl-8 text-gray-700 text-left space-y-1">
              {perks.map((perk, idx) => <li key={idx}>{perk}</li>)}
            </ul>
          </div>
          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-indigo-50 rounded-lg shadow p-6 text-left">
                <h3 className="text-lg font-semibold text-indigo-800">{job.title}</h3>
                <p className="text-gray-600">Location: {job.location}</p>
                <p className="text-gray-600">Type: {job.type}</p>
                <p className="text-gray-500 mt-2 text-sm">{job.desc}</p>
              </div>
            ))}
          </div>
          <a href="/contact" className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded shadow hover:bg-indigo-700 transition">Apply Now</a>
        </div>
        <div className="max-w-3xl mx-auto px-4 mt-16">
          <h2 className="text-2xl font-bold text-indigo-700 text-center mb-6">Life at Netcurion</h2>
          <div className="bg-indigo-50 rounded-lg shadow p-8 flex flex-col items-center">
            <img src="https://randomuser.me/api/portraits/men/23.jpg" alt="Employee" className="h-20 w-20 rounded-full shadow mb-4" />
            <p className="text-gray-700 italic mb-2">“Netcurion gave me the opportunity to work on cutting-edge projects and grow my skills faster than anywhere else. The team is like family!”</p>
            <span className="font-semibold text-indigo-800">Ravi Kumar, Senior Engineer</span>
          </div>
        </div>
      </section>
    </>
  );
} 