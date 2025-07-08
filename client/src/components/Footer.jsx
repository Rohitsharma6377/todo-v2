import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const footerLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Clients', to: '/clients' },
  { name: 'Blogs', to: '/blogs' },
  { name: 'Catalogs', to: '/catalogs' },
  { name: 'Brochures', to: '/brochures' },
  { name: 'Courses', to: '/courses' },
  { name: 'Career', to: '/career' },
  { name: 'Contact Us', to: '/contact' },
  { name: 'Policy', to: '/policy' },
  { name: 'Terms', to: '/terms' },
];

const Footer = () => (
  <footer className="bg-white/60 backdrop-blur-md border-t border-gray-200 mt-12">
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col items-center md:items-start">
        <img src="/logo192.png" alt="Netcurion Logo" className="h-10 w-10 mb-2 rounded-full shadow" />
        <span className="font-bold text-lg text-indigo-700">Netcurion Technology</span>
        <span className="text-gray-500 text-sm mt-1">&copy; {new Date().getFullYear()} Netcurion Technology. All rights reserved.</span>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {footerLinks.map(link => (
          <Link key={link.name} to={link.to} className="text-gray-600 hover:text-indigo-600 text-sm font-medium transition">
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex gap-4 text-indigo-600 text-xl">
        <a href="#" aria-label="Facebook" className="hover:text-blue-700"><FaFacebook /></a>
        <a href="#" aria-label="Twitter" className="hover:text-blue-400"><FaTwitter /></a>
        <a href="#" aria-label="LinkedIn" className="hover:text-blue-800"><FaLinkedin /></a>
        <a href="#" aria-label="Instagram" className="hover:text-pink-500"><FaInstagram /></a>
      </div>
    </div>
  </footer>
);

export default Footer; 