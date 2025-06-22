"use client";

// app/contact/page.tsx
import ContactHero from '@/app/contact/components/ContactHero';
import ContactDetails from '@/app//contact/components/ContactDetails';
import ContactForm from '@/app/contact/components/ContactForm';
import FooterSection from '@/app/components/Footer';
import dynamic from 'next/dynamic';

// Dynamically import MapsSection with SSR disabled
const MapsSection = dynamic(() => import('@/app/contact/components/MapSection'), {
  ssr: false,
});

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <section className="max-w-screen-xl mx-auto py-16 px-4 flex flex-col lg:flex-row gap-12">
        <ContactDetails />
        <ContactForm />
      </section>
      <MapsSection />
      <FooterSection />
    </main>
  );
}
