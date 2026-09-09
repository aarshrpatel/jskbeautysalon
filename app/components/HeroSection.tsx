import Image from 'next/image';
import heroImage from '@/public/hero-image.jpg';
import BookAppointmentButton from '@/app/components/BookAppointmentButton';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh]">
      {/* Background image */}
      <Image
        src={heroImage}
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          Experience the Best Threading & Waxing
        </h1>
        <p className="mt-4 text-white text-lg md:text-2xl max-w-xl">
          Smooth, precise, and comfortable beauty services tailored just for you.
        </p>
        <div className="mt-6">
          <BookAppointmentButton
            align="center"
            label="Book Now"
            className="bg-[#E639A3] text-white px-6 py-3 rounded-full text-lg"
          />
        </div>
      </div>
    </section>
  );
}
