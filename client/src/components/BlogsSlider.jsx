import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const defaultBlogs = [
  {
    title: 'How AI is Transforming Startups',
    excerpt: 'Discover how artificial intelligence is revolutionizing the startup landscape.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Cloud Migration Best Practices',
    excerpt: 'Tips and strategies for a smooth transition to the cloud.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Cybersecurity in 2024',
    excerpt: 'Stay ahead of threats with the latest security trends.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'DevOps for Rapid Growth',
    excerpt: 'How DevOps practices can accelerate your business.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Mobile App Trends',
    excerpt: 'What’s new in mobile app development for startups.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Web Design Inspiration',
    excerpt: 'Modern web design ideas for tech companies.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Data Analytics for Growth',
    excerpt: 'Unlocking business growth with analytics.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Digital Transformation',
    excerpt: 'Why digital transformation is key for startups.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
];

export default function BlogsSlider({ blogs }) {
  const items = blogs || defaultBlogs;
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      spaceBetween={24}
      breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
      className="pb-8 w-full"
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
    >
      {items.map((blog, idx) => (
        <SwiperSlide key={idx}>
          <div className="transition-all duration-200 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-indigo-900 rounded-2xl shadow-lg p-7 flex flex-col items-center text-center h-full hover:scale-105 hover:shadow-2xl cursor-pointer border border-indigo-100 dark:border-indigo-800">
            <img src={blog.image} alt={blog.title} className="h-28 w-full object-cover rounded-xl mb-5 shadow" />
            <h3 className="mt-2 text-xl font-extrabold text-indigo-800 dark:text-indigo-200 tracking-wide font-serif">
              {blog.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-3 text-base italic font-light font-sans">
              {blog.excerpt}
            </p>
            <a href="#" className="mt-2 text-indigo-600 dark:text-indigo-300 hover:underline text-sm font-semibold">Read More</a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
} 