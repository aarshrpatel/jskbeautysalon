"use client";

import { useEffect, useRef, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { locations } from '@/app/lib/locations';

type BookAppointmentButtonProps = {
  /** Classes for the button itself, so each section keeps its own look. */
  className?: string;
  /** Inline styles for the button (used where the exact brand pink is needed). */
  style?: React.CSSProperties;
  label?: string;
  /** Which edge of the button the location list lines up with. */
  align?: 'left' | 'right' | 'center';
};

const alignments = {
  left: 'left-0',
  right: 'right-0',
  center: 'left-1/2 -translate-x-1/2',
};

export default function BookAppointmentButton({
  className = '',
  style,
  label = 'Book Appointment',
  align = 'left',
}: BookAppointmentButtonProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function closeOnOutsideClick(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }

    document.addEventListener('mousedown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((isOpen) => !isOpen)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={className}
        style={style}
      >
        {label}
      </button>

      {open && (
        <div
          role="menu"
          className={`absolute top-full ${alignments[align]} z-50 mt-2 w-72 overflow-hidden rounded-lg bg-white text-left shadow-xl ring-1 ring-black/10`}
        >
          <p className="px-4 pt-3 pb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
            Choose a location
          </p>
          {locations.map((location) => (
            <a
              key={location.name}
              role="menuitem"
              href={location.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-start gap-2 border-t border-gray-100 px-4 py-3 hover:bg-pink-50"
            >
              <FaMapMarkerAlt className="mt-1 shrink-0 text-pink-500" />
              <span>
                <span className="block font-semibold text-gray-900">{location.name}</span>
                <span className="block text-sm text-gray-600">{location.address}</span>
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
