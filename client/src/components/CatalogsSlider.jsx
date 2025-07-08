import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const defaultCatalogs = [
  {
    title: 'Startup Essentials',
    description: 'All-in-one toolkit for launching your tech startup.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'AI Solutions',
    description: 'Catalog of our AI-powered products and services.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Cloud Services',
    description: 'Explore our cloud migration and management offerings.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Security Suite',
    description: 'Comprehensive cybersecurity solutions for all business sizes.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Mobile Apps',
    description: 'A showcase of our mobile app development projects.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Web Solutions',
    description: 'Modern web development for startups and enterprises.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Analytics Tools',
    description: 'Powerful analytics and reporting tools for your data.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Consulting Services',
    description: 'Expert consulting for your digital transformation.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
];

export default function CatalogsSlider({ catalogs }) {
  const items = catalogs || defaultCatalogs;
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
      {items.map((cat, idx) => (
        <SwiperSlide key={idx}>
          <div className="transition-all duration-200 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-900 dark:to-gray-900 rounded-2xl shadow-lg p-7 flex flex-col items-center text-center h-full hover:scale-105 hover:shadow-2xl cursor-pointer border border-indigo-100 dark:border-indigo-800">
            <img src={cat.image} alt={cat.title} className="h-28 w-full object-cover rounded-xl mb-5 shadow" />
            <h3 className="mt-2 text-xl font-extrabold text-indigo-800 dark:text-indigo-200 tracking-wide font-serif">
              {cat.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-3 text-base italic font-light font-sans">
              {cat.description}
            </p>
            <a href="#" className="mt-2 text-indigo-600 dark:text-indigo-300 hover:underline text-sm font-semibold">Download</a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
} 