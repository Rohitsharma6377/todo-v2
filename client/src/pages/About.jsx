import React from 'react';
import { Helmet } from 'react-helmet-async';
// import Lottie from 'react-lottie'; // Uncomment if using Lottie
// import animationData from '../assets/team-animation.json'; // Example Lottie file

const team = [
  { name: 'Amit Sharma', role: 'CEO', img: 'https://randomuser.me/api/portraits/men/32.jpg', bio: 'Visionary leader with 15+ years in tech innovation.' },
  { name: 'Priya Singh', role: 'CTO', img: 'https://randomuser.me/api/portraits/women/44.jpg', bio: 'Expert in cloud and AI, driving our technical excellence.' },
  { name: 'Rahul Verma', role: 'Lead Developer', img: 'https://randomuser.me/api/portraits/men/65.jpg', bio: 'Full-stack developer passionate about scalable solutions.' },
  { name: 'Sara Kim', role: 'Product Manager', img: 'https://randomuser.me/api/portraits/women/51.jpg', bio: 'Ensures our products solve real business problems.' },
  { name: 'Carlos Gomez', role: 'Security Lead', img: 'https://randomuser.me/api/portraits/men/41.jpg', bio: 'Keeps our clients safe with cutting-edge security.' },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Netcurion Technology</title>
        <meta name="description" content="Learn more about Netcurion Technology, our team, and our mission." />
      </Helmet>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-indigo-700 mb-4">About Netcurion Technology</h1>
          <p className="text-lg text-gray-700 mb-8">
            Netcurion Technology was founded with a single goal: to empower businesses through technology. Our journey began in 2015, and since then, we’ve helped startups and enterprises transform digitally, scale securely, and innovate faster.
          </p>
          <div className="mb-8 grid md:grid-cols-3 gap-8">
            <div className="bg-indigo-50 rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-indigo-700 mb-2">Our Mission</h3>
              <p className="text-gray-700">To deliver innovative, reliable, and scalable IT solutions that drive business success.</p>
            </div>
            <div className="bg-indigo-50 rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-indigo-700 mb-2">Our Vision</h3>
              <p className="text-gray-700">To be a global leader in technology, known for our expertise, integrity, and client focus.</p>
            </div>
            <div className="bg-indigo-50 rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-indigo-700 mb-2">Our Values</h3>
              <ul className="text-gray-700 list-disc pl-5 text-left">
                <li>Innovation</li>
                <li>Integrity</li>
                <li>Client Success</li>
                <li>Collaboration</li>
                <li>Continuous Learning</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center mb-8">
            <img src="https://assets10.lottiefiles.com/packages/lf20_0yfsb3a1.json.gif" alt="Team Animation" className="h-44 w-44 object-contain" />
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-indigo-700 text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-indigo-50 rounded-lg shadow p-6 flex flex-col items-center">
                <img src={member.img} alt={member.name} className="h-24 w-24 rounded-full shadow mb-4" />
                <h3 className="text-lg font-semibold text-indigo-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                <p className="text-gray-500 text-sm mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 mt-16">
          <h2 className="text-2xl font-bold text-indigo-700 text-center mb-6">What Makes Us Unique</h2>
          <ul className="list-disc pl-8 text-gray-700 text-lg space-y-2">
            <li>Client-first approach: We listen, understand, and deliver exactly what you need.</li>
            <li>Cutting-edge expertise: Our team stays ahead with the latest tech trends.</li>
            <li>End-to-end solutions: From consulting to deployment and support.</li>
            <li>Proven track record: 100+ successful projects across industries.</li>
            <li>Global reach: Serving clients in 10+ countries.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
