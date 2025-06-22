"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.png'; // Adjust path if needed

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

const servicesDropdown = [
  { name: 'Threading', href: '/services/threading' },
  { name: 'Waxing', href: '/services/waxing' },
  { name: 'Sugaring', href: '/services/sugaring' },
  { name: 'Facials', href: '/services/facials' },
  { name: 'Brows', href: '/services/brows' },
  { name: 'Lashes', href: '/services/lashes' },
  { name: 'Body Treatments', href: '/services/body-treatments' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const brandPink = '#E639A3'; // Replace with exact hex from your logo

  return (
    <nav className="w-full fixed top-5 z-50 bg-transparent">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Desktop links */}
          <div className="flex-1 flex items-center">
            <div className="hidden lg:flex lg:space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white hover:underline"
                >
                  {link.name}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="text-white hover:underline inline-flex items-center">
                  Services
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                    <div className="py-1">
                      {servicesDropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Center: Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={logo}
                alt="JSK Threading & Body Wax"
                priority
                width={100}
                height={40}
              />
            </Link>
          </div>

          {/* Right: Desktop button & Mobile toggle */}
          <div className="flex-1 flex items-center justify-end">
            {/* Desktop Button */}
            <div className="hidden lg:block">
              <Link href="https://www.vagaro.com/jsk">
                <button
                  className="text-white font-semibold px-4 py-2 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition"
                  style={{ backgroundColor: brandPink }}
                >
                  Book Appointment
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden ml-4">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay (unchanged) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6">
          {/* Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-5 right-5 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke={brandPink}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span className="text-xl font-semibold" style={{ color: brandPink }}>
                {link.name}
              </span>
            </Link>
          ))}
          <Link href="https://www.vagaro.com/jsk">
            <button
              className="text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition"
              style={{ backgroundColor: brandPink }}
            >
              Book Appointment
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
