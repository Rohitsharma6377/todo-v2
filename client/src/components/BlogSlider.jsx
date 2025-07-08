import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const blogs = [
  {
    title: 'How AI is Transforming Business',
    excerpt: 'Discover the latest trends in AI and how they are revolutionizing industries worldwide.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    link: '/blogs/ai-transforming-business',
  },
  {
    title: 'Cloud Migration Best Practices',
    excerpt: 'Learn the key steps and strategies for a successful cloud migration journey.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    link: '/blogs/cloud-migration',
  },
  {
    title: 'Cybersecurity in 2024',
    excerpt: 'Stay ahead of threats with the latest cybersecurity trends and solutions.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    link: '/blogs/cybersecurity-2024',
  },
];

export default function BlogSlider() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {blogs.map((blog, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col h-full">
              <img src={blog.image} alt={blog.title} className="rounded-xl mb-4 w-full h-40 object-cover" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{blog.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{blog.excerpt}</p>
              <a href={blog.link} className="inline-block px-4 py-2 bg-green-500 text-white rounded-lg font-semibold shadow hover:bg-green-600 transition">Read More</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
} 