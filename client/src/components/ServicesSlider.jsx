import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const defaultServices = [
  {
    title: 'Cloud Migration',
    description: 'Seamlessly move your infrastructure to the cloud with zero downtime.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'AI Automation',
    description: 'Automate business processes with custom AI solutions.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your business with advanced security protocols and monitoring.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'DevOps',
    description: 'Accelerate your development lifecycle with CI/CD and automation.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Mobile Apps',
    description: 'Build beautiful, scalable mobile apps for iOS and Android.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Web Development',
    description: 'Modern, responsive websites and web apps for your business.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Data Analytics',
    description: 'Unlock insights from your data with our analytics solutions.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'IT Consulting',
    description: 'Expert advice to help you choose and implement the right tech.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
];

export default function ServicesSlider({ services }) {
  const items = services || defaultServices;
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
      {items.map((service, idx) => (
        <SwiperSlide key={idx}>
          <div className="transition-all duration-200 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-900 dark:to-gray-900 rounded-2xl shadow-lg p-7 flex flex-col items-center text-center h-full hover:scale-105 hover:shadow-2xl cursor-pointer border border-indigo-100 dark:border-indigo-800">
            <img src={service.image} alt={service.title} className="h-28 w-full object-cover rounded-xl mb-5 shadow" />
            <h3 className="mt-2 text-xl font-extrabold text-indigo-800 dark:text-indigo-200 tracking-wide font-serif">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-3 text-base italic font-light font-sans">
              {service.description}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
} 