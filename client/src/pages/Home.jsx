import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServicesSlider from '../components/ServicesSlider';
import CatalogsSlider from '../components/CatalogsSlider';
import BlogsSlider from '../components/BlogsSlider';
import TestimonialsSlider from '../components/TestimonialsSlider';
import ClientsSlider from '../components/ClientsSlider';
import { FaCheckCircle, FaRocket, FaShieldAlt, FaUsers, FaPhoneAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Helmet>
        <title>Netcurion Technology | Home</title>
        <meta name="description" content="Netcurion Technology delivers innovative IT solutions for your business." />
      </Helmet>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 dark:text-indigo-300 leading-tight">
            Empowering Your Business with <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">Next-Gen Tech</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-200 max-w-xl">
            Netcurion Technology delivers innovative solutions for startups and enterprises. From cloud to AI, we help you scale, secure, and succeed in the digital era.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="px-6 py-3 rounded bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition">Get a Quote</a>
            <a href="#services" className="px-6 py-3 rounded border border-indigo-600 text-indigo-700 dark:text-indigo-300 font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-900 transition">Our Services</a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="Tech Team" className="rounded-2xl shadow-2xl w-full max-w-md object-cover" />
        </div>
      </section>
      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
          <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&q=80" alt="Cloud" className="h-16 w-16 mb-4 rounded-full shadow" />
          <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">Cloud Solutions</h3>
          <p className="text-gray-600 dark:text-gray-200">Scalable, secure, and cost-effective cloud infrastructure for your business.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80" alt="AI" className="h-16 w-16 mb-4 rounded-full shadow" />
          <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">AI & Automation</h3>
          <p className="text-gray-600 dark:text-gray-200">Leverage artificial intelligence to automate, analyze, and accelerate growth.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80" alt="Security" className="h-16 w-16 mb-4 rounded-full shadow" />
          <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">Cybersecurity</h3>
          <p className="text-gray-600 dark:text-gray-200">Protect your data and reputation with our advanced security solutions.</p>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80" alt="Why Choose Us" className="rounded-2xl shadow-xl w-full object-cover" />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">Why Choose Netcurion?</h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-2">
            <li>Expert team with 10+ years in tech innovation</li>
            <li>End-to-end project management</li>
            <li>24/7 support and rapid response</li>
            <li>Proven results for startups and enterprises</li>
            <li>Cutting-edge tools and agile methodology</li>
          </ul>
        </div>
      </section>
      {/* Sliders */}
      <section className="max-w-7xl mx-auto px-4 py-12" id="services">
        <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-6">Our Services</h2>
        <ServicesSlider />
      </section>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-6">Our Catalogs</h2>
        <CatalogsSlider />
      </section>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-6">Latest Blogs</h2>
        <BlogsSlider />
      </section>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-6">What Our Clients Say</h2>
        <TestimonialsSlider />
      </section>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-6">Our Clients</h2>
        <ClientsSlider />
      </section>
      {/* Contact/Quote Bar */}
      <section className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl shadow-xl mt-12">
        <div className="flex-1 text-white space-y-2">
          <h3 className="text-2xl font-bold">Ready to start your project?</h3>
          <p>Contact us today for a free consultation and quote.</p>
        </div>
        <a href="#contact" className="px-8 py-3 rounded bg-white text-indigo-700 font-semibold shadow hover:bg-indigo-50 transition">Contact Us</a>
      </section>
    </div>
  );
};

export default Home;
