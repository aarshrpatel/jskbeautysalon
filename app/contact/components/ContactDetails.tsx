// components/contact/ContactDetails.tsx
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactDetails() {
  return (
    <div className="w-full lg:w-1/2 space-y-6">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <div>
        <p className="font-semibold text-pink-500">Summerville :</p>
        <p className="flex items-center mt-2">
          <FaPhoneAlt className="mr-2 text-pink-500" />+1 843-799-6204
        </p>
        <p className="flex items-start mt-2">
          <FaMapMarkerAlt className="mt-1 mr-2 text-pink-500" />205 S Cross Creek Dr Unit C, Summerville, SC 29486, United States
        </p>
      </div>
      <div>
        <p className="font-semibold text-pink-500">Goose Creek :</p>
        <p className="flex items-center mt-2">
          <FaPhoneAlt className="mr-2 text-pink-500" />+1 843-799-6224
        </p>
        <p className="flex items-start mt-2">
          <FaMapMarkerAlt className="mt-1 mr-2 text-pink-500" />604 St James Ave Unit J, Goose Creek, SC 29445
        </p>
      </div>
    </div>
  );
}