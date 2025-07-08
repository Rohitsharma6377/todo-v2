import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    title: 'Transform Your Business with Next-Gen IT',
    subtitle: 'Cloud, AI, and Security solutions for startups and enterprises.',
    cta: 'Get Started',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80',
    link: '#contact',
  },
  {
    title: 'Scale Securely, Innovate Rapidly',
    subtitle: 'Award-winning technology, trusted by global brands.',
    cta: 'See Our Work',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
    link: '#case-studies',
  },
  {
    title: 'Your Partner in Digital Transformation',
    subtitle: 'From consulting to deployment, we deliver results.',
    cta: 'Our Services',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80',
    link: '#services',
  },
];

export default function BannerSlider() {
  return (
    <div className="w-full h-[400px] md:h-[520px] rounded-2xl overflow-hidden shadow-2xl mb-12">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover object-center z-0 transition-transform duration-700 scale-105 hover:scale-110"
              />
              <div className="relative z-10 bg-black/40 md:bg-black/30 p-8 md:p-16 rounded-2xl max-w-2xl mx-auto text-center text-white flex flex-col items-center gap-4">
                <h2 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg mb-2">{slide.title}</h2>
                <p className="text-lg md:text-2xl font-medium mb-4">{slide.subtitle}</p>
                <a href={slide.link} className="px-8 py-3 rounded bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition text-lg">{slide.cta}</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
} 