import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const defaultTestimonials = [
  {
    name: 'Alice Johnson',
    company: 'TechNova',
    feedback: 'Netcurion helped us scale our cloud infrastructure seamlessly. Highly recommended!',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Bob Smith',
    company: 'InnoSoft',
    feedback: 'Their AI solutions automated our workflow and saved us countless hours.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Priya Patel',
    company: 'Cloudify',
    feedback: 'The cybersecurity team at Netcurion is top-notch. We feel much safer now.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'David Lee',
    company: 'AppWorks',
    feedback: 'Their DevOps expertise accelerated our product launches.',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
  {
    name: 'Sara Kim',
    company: 'DataMinds',
    feedback: 'Amazing analytics tools and great support team!',
    image: 'https://randomuser.me/api/portraits/women/51.jpg',
  },
  {
    name: 'Carlos Gomez',
    company: 'SecureIT',
    feedback: 'Netcurion’s security suite is a game changer for us.',
    image: 'https://randomuser.me/api/portraits/men/41.jpg',
  },
  {
    name: 'Emily Chen',
    company: 'Webify',
    feedback: 'Beautiful web design and smooth project management.',
    image: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
  {
    name: 'Ravi Kumar',
    company: 'StartX',
    feedback: 'Their consulting team guided us through digital transformation.',
    image: 'https://randomuser.me/api/portraits/men/23.jpg',
  },
];

export default function TestimonialsSlider({ testimonials }) {
  const items = testimonials || defaultTestimonials;
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
      {items.map((t, idx) => (
        <SwiperSlide key={idx}>
          <div className="transition-all duration-200 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-900 dark:to-gray-900 rounded-2xl shadow-lg p-7 flex flex-col items-center text-center h-full hover:scale-105 hover:shadow-2xl cursor-pointer border border-indigo-100 dark:border-indigo-800">
            <img src={t.image} alt={t.name} className="h-16 w-16 rounded-full shadow mb-4 object-cover" />
            <p className="text-gray-700 dark:text-gray-200 mb-2 text-lg italic font-medium">"{t.feedback}"</p>
            <span className="font-semibold text-indigo-800 dark:text-indigo-200">{t.name}</span>
            <span className="text-gray-500 ml-2">({t.company})</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
} 