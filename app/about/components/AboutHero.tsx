// components/about/AboutHero.tsx
import Image from 'next/image';
import heroImg from '@/public/about-image.jpg'; // Adjust the path to your image

export default function AboutHero() {
  return (
    <section className="relative w-full h-[60vh]">  
      <Image
        src={heroImg}
        alt="About Us Hero"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold">About Us</h1>
      </div>
    </section>
  );
}