import Link from 'next/link';
import Image from 'next/image';
import aboutImg from '@/public/about-image.jpg'; // Add your about image in public/

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-8 px-4">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src={aboutImg}
            alt="About us"
            width={600}
            height={600}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full lg:w-1/2 flex flex-col bg-white justify-center text-center lg:text-left space-y-4">
          <span className="text-sm font-medium text-pink-500 uppercase">About Us</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            We Understand Your Style
          </h2>
          <p className="text-gray-600 leading-relaxed">
            JSK Beauty Salon is owned by the Short Trip Management Inc.
            with the aim of providing world‑class salon services. Over the years,
            JSK has been a pioneer in luxurious experiences for Hair, Skin,
            Hands & Feet, Eyebrow Threading, and Makeup using premium products,
            first‑class amenities, and a professionally trained team. With
            locations at prime areas, we’ve served over 20,000 customers and
            continue to deliver exceptional beauty services.
          </p>
          <Link href="/about">
            <button className="mt-4 w-max bg-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:shadow-lg transition">
              About Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
