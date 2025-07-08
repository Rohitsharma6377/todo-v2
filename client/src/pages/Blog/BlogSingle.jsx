import React from 'react';
import { useParams, Link } from 'react-router-dom';

const dummyBlogs = [
  {
    id: '1',
    title: 'How AI is Transforming Startups',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    content: 'Discover how artificial intelligence is revolutionizing the startup landscape. In this blog, we explore the latest trends, use cases, and how your business can benefit from AI-driven solutions. From automation to analytics, AI is the future of tech startups.',
  },
  {
    id: '2',
    title: 'Cloud Migration Best Practices',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    content: 'Tips and strategies for a smooth transition to the cloud. Learn how to avoid common pitfalls and maximize the benefits of cloud infrastructure for your business.',
  },
];

const BlogSingle = () => {
  const { id } = useParams();
  const blog = dummyBlogs.find((b) => b.id === id) || dummyBlogs[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 flex flex-col items-center">
        <img src={blog.img} alt={blog.title} className="w-full h-56 object-cover rounded-xl mb-6 shadow" />
        <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 mb-2 text-center">{blog.title}</h1>
        <p className="text-gray-700 dark:text-gray-200 mb-4 text-center">{blog.content}</p>
        <Link to="/blogs" className="text-indigo-600 dark:text-indigo-300 hover:underline text-sm">Back to Blogs</Link>
      </div>
    </div>
  );
};

export default BlogSingle;
