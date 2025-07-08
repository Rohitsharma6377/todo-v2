import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const defaultClients = [
  {
    name: 'TechNova',
    logo: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=100&q=80',
  },
  {
    name: 'InnoSoft',
    logo: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80',
  },
  {
    name: 'Cloudify',
    logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=100&q=80',
  },
  {
    name: 'AppWorks',
    logo: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=100&q=80',
  },
  {
    name: 'DataMinds',
    logo: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=100&q=80',
  },
  {
    name: 'SecureIT',
    logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=100&q=80',
  },
  {
    name: 'Webify',
    logo: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=100&q=80',
  },
  {
    name: 'StartX',
    logo: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80',
  },
];

export default function ClientsSlider({ clients }) {
  const items = clients || defaultClients;
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={2}
      spaceBetween={24}
      breakpoints={{ 640: { slidesPerView: 3 }, 1024: { slidesPerView: 5 } }}
      className="pb-8 w-full"
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
    >
      {items.map((client, idx) => (
        <SwiperSlide key={idx}>
          <div className="transition-all duration-200 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-indigo-900 rounded-2xl shadow-lg p-5 flex flex-col items-center hover:scale-105 hover:shadow-2xl cursor-pointer border border-indigo-100 dark:border-indigo-800">
            <img src={client.logo} alt={client.name} className="h-10 mb-2 object-contain" />
            <span className="text-indigo-800 dark:text-indigo-200 text-sm font-bold font-sans mt-2">{client.name}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
} 