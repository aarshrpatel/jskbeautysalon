// components/about/QualitySection.tsx
import Image from 'next/image';
import aboutImg from '@/public/about-image.jpg';

export default function QualitySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-8 px-4">
        <div className="lg:w-1/2">
          <Image
            src={aboutImg}
            alt="Our Quality"
            width={600}
            height={600}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 space-y-4">
          <span className="text-sm font-medium text-pink-500 uppercase">Customer Promise</span>
          <h2 className="text-3xl font-bold text-gray-900">Our Quality Of Work Speaks For Itself!</h2>
          <p className="text-gray-600 leading-relaxed">
            With over 10+ years of combined artists experience, JSK Salon has built a clientele that trusts us and knows we deliver.
            Our goal is always to provide exceptional threading experiences to each and every one of our clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Friendly Behaviour</h3>
              <p className="text-gray-600">Warmly welcome clients for experience in terms of quality hair & beauty services in a comfortable environment.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Always Customer Support</h3>
              <p className="text-gray-600">Our dedication is to always try to master the art of exemplary services & experience with excellent works.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}