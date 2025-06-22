import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaAngleDoubleRight } from 'react-icons/fa';
import logo from '@/public/logo.png'; // Your logo file

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="space-y-4">
          <Image src={logo} alt="JSK Threading & Body Wax" width={150} height={50} />
          <p>The JSK Beauty Salon is like a mini vacation — as our guests often tell us, which supplies an inviting and relaxing atmosphere for all of your beauty needs.</p>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/JSKNEXTON" className="p-2 bg-pink-500 rounded-full hover:bg-pink-600">
                <FaFacebookF />
            </Link>
            <Link href="https://www.instagram.com/jskbeautysalon/" className="p-2 bg-pink-500 rounded-full hover:bg-pink-600">
                <FaInstagram />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {['Home','About Us','Appointment','Services','Gallery','Contact Us','Privacy Policy'].map((link) => (
              <li key={link} className="flex items-center">
                <FaAngleDoubleRight className="text-pink-500 mr-2" />
                <Link href={`/${link.toLowerCase().replace(/ /g,'-')}`} className="hover:underline">
                    {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-pink-500">Summerville:</p>
              <p>Mon - Sat: 10:00 am to 7:00 pm</p>
              <p>Sunday: Closed</p>
            </div>
            <div>
              <p className="font-semibold text-pink-500">Goose Creek:</p>
              <p>Mon - Thurs: 10:00 am to 7:00 pm</p>
              <p>Fri - Sat: 10:00 am to 8:00 pm</p>
              <p>Sunday: 12:00 pm to 7:00 pm</p>
            </div>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-pink-500">Summerville:</p>
              <p className="flex items-center">
                <FaPhoneAlt className="mr-2" />+1 843-799-6204
              </p>
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />205 S Cross Creek Dr Unit C
              </p>
            </div>
            <div>
              <p className="font-semibold text-pink-500">Goose Creek:</p>
              <p className="flex items-center">
                <FaPhoneAlt className="mr-2" />+1 843-799-6224
              </p>
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />604 St James Ave Unit J, Goose Creek, SC 29445
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="max-w-screen-xl mx-auto px-4 mt-12 border-t border-gray-700 pt-6 text-center">
        <p className="space-x-2 flex flex-wrap justify-center items-center text-sm">
          {['Facial','Waxing','Threading','Eyelash'].map((service, idx) => (
            <span key={service} className="inline-flex items-center">
              {service}
              {idx < 3 && <span className="mx-2 text-pink-500">|</span>}
            </span>
          ))}
        </p>
        <p className="mt-4 text-sm">© Copyright 2025 JSK Beauty Salon. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
