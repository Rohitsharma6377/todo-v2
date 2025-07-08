import React from 'react';
import { Helmet } from 'react-helmet-async';

const blogs = [
  { title: '5 Trends in IT 2024', img: 'https://dummyimage.com/200x120/0ea5e9/fff&text=Trends', excerpt: 'Stay ahead with the latest trends in IT.' },
  { title: 'Cloud Security Best Practices', img: 'https://dummyimage.com/200x120/22d3ee/fff&text=Cloud', excerpt: 'Protect your business in the cloud.' },
  { title: 'Why Digital Transformation?', img: 'https://dummyimage.com/200x120/818cf8/fff&text=Digital', excerpt: 'The benefits of going digital.' },
];

export default function Blogs() {
  return (
    <>
      <Helmet>
        <title>Blogs | Netcurion Technology</title>
        <meta name="description" content="Read our latest blogs and insights." />
      </Helmet>
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-indigo-700 mb-4">Latest Blogs</h1>
          <p className="text-lg text-gray-700 mb-8">
            Stay updated with the latest trends, tips, and insights from our experts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {blogs.map((blog, idx) => (
              <div key={idx} className="bg-indigo-50 rounded-lg shadow p-4 flex flex-col items-center text-center">
                <img src={blog.img} alt={blog.title} className="h-24 w-full object-cover rounded mb-2" />
                <h3 className="text-lg font-semibold text-indigo-800">{blog.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{blog.excerpt}</p>
                <a href="#" className="mt-2 text-indigo-600 hover:underline text-sm">Read More</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 