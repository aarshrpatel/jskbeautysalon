"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import googleIcon from '@/public/google-icon.png'; // Put Google icon in public

const testimonials = [
  {
    name: 'Archana Patel',
    date: '2024-02-02',
    rating: 5,
    text: "I'm so happy when I come here thank you Jsk team :p:p",
  },
  {
    name: 'Latitia Lyde',
    date: '2024-01-26',
    rating: 5,
    text: 'The ladies here do an EXCELLENT job on me every time. Great friendly, customer service consistently and clean,...',
  },
  {
    name: 'Kiwanis Carlos',
    date: '2024-01-21',
    rating: 5,
    text: 'I absolutely love going here to get my threading and waxing needs. I am always in and out and treated professionally. This is the only...',
  },
  {
    name: 'Bianca Blair',
    date: '2024-01-03',
    rating: 5,
    text: 'It was very clean! And they had great customer service for mostly inexpensive prices! It\'s an overall great experience!',
  },
  {
    name: 'Luzina Hines',
    date: '2023-12-30',
    rating: 5,
    text: 'I love JSK! I\'ve been threading for over 15 years and Ana is the best. She is professional, skilled, and personable. The owner is...',
  },
];

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const { clientWidth, scrollLeft } = containerRef.current;
      const scrollAmount = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      containerRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full text-center bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <span className="text-sm font-medium text-pink-500 uppercase">Testimonials</span>
        <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-gray-900">Words From Our Clients</h2>
      </div>

      <div className="relative max-w-screen-xl mx-auto mt-8">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md z-10"
          aria-label="Scroll left"
        >
          &#8592;
        </button>

        <div
          ref={containerRef}
          className="flex space-x-4 overflow-x-auto scroll-smooth px-12 py-4 hide-scrollbar"
        >
          {testimonials.map((t, idx) => (
            <div key={idx} className="min-w-[250px] bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.date}</p>
                </div>
                <Image src={googleIcon} alt="Google" width={20} height={20} />
              </div>
              <div className="flex space-x-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className={i < t.rating ? 'text-yellow-400' : 'text-gray-300'} />
                ))}
              </div>
              <p className="text-sm text-gray-700">{t.text}</p>
              <Link href="#" className="mt-4 inline-block text-sm font-medium text-pink-500 hover:underline">
                Read more
              </Link>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md z-10"
          aria-label="Scroll right"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}