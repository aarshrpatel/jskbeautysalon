// components/contact/ContactHero.tsx
import Image from 'next/image';
import heroImg from '@/public/hero-image.jpg'; // swap with your contact hero image

export default function ContactHero() {
  return (
    <section className="relative w-full h-[60vh]">
      <Image
        src={heroImg}
        alt="Contact Us Hero"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold">Contact Us</h1>
      </div>
    </section>
  );
}