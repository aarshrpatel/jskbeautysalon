// app/services/threading/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Threading • JSK Threading & Body Wax',
  description: 'Expert facial and body threading services in Summerville & Goose Creek',
};

export default function ThreadingPage() {
  return (
    <main className="max-w-screen-lg mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold">Expert Threading</h1>
        <p className="mt-4 text-gray-600">
          Precision brow, lip, chin & full-face threading by our certified stylists.
        </p>
        <Link href="/book" className="inline-block mt-6 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition">
          Book Now
        </Link>
      </section>

      {/* Details */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">What to Expect</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Gentle hair removal with hygienic threading cotton</li>
            <li>Shapes tailored to your face & brow goals</li>
            <li>Quick, precise, and less irritation than waxing</li>
          </ul>
        </div>
        <div>
          <Image
            src="/images/threading-demo.jpg"
            alt="Threading service demo"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Pricing Table */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b py-2">Service</th>
              <th className="border-b py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">Brow Shaping</td>
              <td className="py-2">$15</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-2">Full Face</td>
              <td className="py-2">$30</td>
            </tr>
            {/* add more rows as needed */}
          </tbody>
        </table>
      </section>
    </main>
  );
}
