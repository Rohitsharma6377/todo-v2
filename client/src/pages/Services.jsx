import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaRobot, FaServer, FaUserShield, FaChartPie, FaMobileAlt, FaCloud, FaLock, FaCogs, FaChartLine } from 'react-icons/fa';

const detailedServices = [
  {
    icon: <FaCloud className="text-4xl text-indigo-600 mb-4" />,
    title: 'Cloud Solutions',
    desc: 'Migrate, optimize, and scale your business with our secure, cost-effective cloud services. We handle AWS, Azure, GCP, and hybrid deployments.',
    features: [
      'Cloud migration & architecture',
      'DevOps automation',
      'Disaster recovery & backup',
      '24/7 monitoring & support',
    ],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: <FaRobot className="text-4xl text-indigo-600 mb-4" />,
    title: 'AI & Automation',
    desc: 'Leverage AI to automate processes, gain insights, and accelerate growth. We build custom ML models, chatbots, and workflow automation.',
    features: [
      'Predictive analytics',
      'NLP & computer vision',
      'RPA & workflow bots',
      'Custom AI solutions',
    ],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: <FaLock className="text-4xl text-indigo-600 mb-4" />,
    title: 'Cybersecurity',
    desc: 'Protect your data and reputation with our advanced security solutions. Pen-testing, compliance, and managed SOC.',
    features: [
      '24/7 threat monitoring',
      'Compliance (ISO, GDPR, HIPAA)',
      'Incident response',
      'Security audits & training',
    ],
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: <FaMobileAlt className="text-4xl text-indigo-600 mb-4" />,
    title: 'App Development',
    desc: 'Build beautiful, scalable web and mobile apps. We deliver full-stack solutions from design to deployment.',
    features: [
      'React, Node.js, MongoDB',
      'iOS & Android apps',
      'UI/UX design',
      'API & backend integration',
    ],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: <FaChartPie className="text-4xl text-indigo-600 mb-4" />,
    title: 'Analytics & Insights',
    desc: 'Turn data into business value. We build dashboards, BI tools, and custom analytics for smarter decisions.',
    features: [
      'Custom dashboards',
      'Data warehousing',
      'Business intelligence',
      'Reporting automation',
    ],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: <FaCogs className="text-4xl text-indigo-600 mb-4" />,
    title: 'IT Consulting',
    desc: 'Expert advice for your IT strategy, digital transformation, and technology roadmap.',
    features: [
      'Strategy & planning',
      'Tech stack selection',
      'Process optimization',
      'Change management',
    ],
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
  },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Netcurion Technology</title>
        <meta name="description" content="Explore our IT services and solutions." />
      </Helmet>
      <section className="py-16 animated-gradient">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold gradient-text mb-6">Our Services</h1>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Netcurion Technology delivers a full spectrum of IT services to help you innovate, scale, and secure your business. Explore our expertise below.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {detailedServices.map((service, idx) => (
              <div key={idx} className="glass-card gradient-hover p-8 flex flex-col items-center text-center shadow-2xl border border-indigo-100 dark:border-gray-700 transition-transform duration-500 hover:scale-105">
                {service.icon}
                <h3 className="mt-2 text-2xl font-bold text-indigo-800 dark:text-indigo-200 mb-2">{service.title}</h3>
                <img src={service.image} alt={service.title} className="rounded-xl shadow mb-4 w-full h-40 object-cover object-center" />
                <p className="text-gray-700 dark:text-gray-200 mb-4">{service.desc}</p>
                <ul className="text-left text-gray-600 dark:text-gray-300 mb-4 space-y-1">
                  {service.features.map((f, i) => <li key={i}>• {f}</li>)}
                </ul>
                <a href="/contact" className="inline-block px-6 py-2 bg-indigo-600 text-white font-semibold rounded shadow hover:bg-indigo-700 transition">Get Started</a>
              </div>
            ))}
          </div>
          <div className="my-16">
            <h2 className="text-3xl font-bold text-white mb-4">Case Study: Cloud Migration for Retail</h2>
            <div className="bg-white/80 dark:bg-gray-900/80 rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
              <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Case Study" className="rounded-xl shadow w-full max-w-xs object-cover" />
              <div>
                <h3 className="text-xl font-bold text-indigo-700 mb-2">10x Scalability, 30% Cost Savings</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-2">We migrated a leading retailer to AWS, enabling 10x user growth and reducing costs by 30%. Our DevOps automation and 24/7 support ensured a seamless transition.</p>
                <a href="/contact" className="inline-block px-6 py-2 bg-indigo-600 text-white font-semibold rounded shadow hover:bg-indigo-700 transition">See More Case Studies</a>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-3xl font-bold gradient-text mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-white/90 mb-6">Contact us for a free consultation and discover how our IT solutions can drive your success.</p>
            <a href="/contact" className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform gradient-hover">Get a Free Consultation</a>
          </div>
        </div>
      </section>
    </>
  );
} 