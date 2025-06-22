import Link from 'next/link';
import Image from 'next/image';
import consultImg from '@/public/consultation-image.jpg';

export default function ConsultationSection() {
  return (
    <section className="w-full bg-gray-700 py-16">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-4">
        {/* Left: Image (wider on desktop) */}
        <div className="w-full lg:w-6/12">
          <Image
            src={consultImg}
            alt="Consultation"
            width={800}
            height={600}
            className="object-cover rounded-lg lg:rounded-r-none lg:rounded-l-lg shadow-lg"
          />
        </div>

        {/* Right: Text (slightly narrower) */}
        <div className="w-full lg:w-7/12 mt-8 lg:mt-0 px-6 lg:px-12 text-white flex flex-col justify-center">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Schedule Your Free Consultation Today!
          </h2>
          <p className="mt-4 text-base lg:text-lg leading-relaxed">
            Ready to improve the way you experience beauty? Make an appointment for a free consultation at JSK Beauty Salon right now. Allow our knowledgeable staff to create a personalized treatment plan that meets your specific requirements and advances your cosmetic objectives.
          </p>
          <p className="mt-4 text-base lg:text-lg leading-relaxed">
            JSK Beauty Salon has a long history of excellence and has established the benchmark for opulent hair, skin, hand, and foot care, makeup application, and eyebrow threading services. Our elegant venues are well situated in high-traffic regions to provide the greatest service to discriminating clients.
          </p>
          <p className="mt-4 text-base lg:text-lg leading-relaxed">
            Our commitment to exceeding your expectations in each visit by offering top-tier services tailored to meet your diverse needs.
          </p>
          <p className="mt-6 italic text-pink-400">
            Our Vision:<br />
            Our commitment to quality and service ensures our clients are happy. With years of experience and continuing education, our dedicated staff is ready to serve your beauty needs.
          </p>
          <Link href="https://www.vagaro.com/jsk">
            <button className="mt-8 w-max bg-pink-500 text-white font-semibold px-8 py-3 rounded-full shadow hover:shadow-lg transition">
              Book An Appointment
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}