import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  { name: 'Rahul Mehra', role: 'CTO, ShopEase', quote: 'Netcurion transformed our cloud infrastructure. Their team is responsive, skilled, and truly cares about our success.', avatar: 'https://randomuser.me/api/portraits/men/45.jpg', rating: 5 },
  { name: 'Priya Singh', role: 'CEO, MediCore', quote: 'Their AI solutions gave us a competitive edge. We saw results in weeks, not months!', avatar: 'https://randomuser.me/api/portraits/women/65.jpg', rating: 5 },
  { name: 'Carlos Gomez', role: 'Security Lead', quote: 'Security and support are top-notch. We trust Netcurion with our most critical systems.', avatar: 'https://randomuser.me/api/portraits/men/77.jpg', rating: 5 },
];

export default function TestimonialsSlider({ onePerSlide = false, simpleCard = false }) {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        spaceBetween={24}
        slidesPerView={onePerSlide ? 1 : 1}
        breakpoints={onePerSlide ? {} : {
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        className="w-full"
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <div className={
              simpleCard
                ? "bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 flex flex-col items-center text-center h-full"
                : "bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-green-500 h-full"
            }>
              <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full border-2 border-green-500 shadow-lg mb-6" />
              <p className="text-gray-700 dark:text-gray-200 italic mb-4 text-lg">“{t.quote}”</p>
              <span className="font-semibold text-gray-900 dark:text-white text-base mb-1">{t.name}</span>
              <span className="text-sm text-gray-500 mb-2">{t.role}</span>
              <div className="flex gap-1 mt-2">
                {[...Array(t.rating)].map((_, i) => <FaStar key={i} className="text-yellow-400" />)}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
} 