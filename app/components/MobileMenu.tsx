'use client';

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { href: '/the-goldman-difference', label: 'About' },
  { href: '/investment-strategy', label: 'Investment Strategy' },
  { href: '/capital-solutions', label: 'Capital Solutions' },
  { href: '/value-creation', label: 'Value Creation' },
  { href: '/who-we-partner-with', label: 'Who We Partner With' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-[#b8860b] transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-gray-600 hover:text-[#b8860b] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/confidential-review"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-6 py-3 bg-[#0f172a] text-white text-sm font-medium rounded hover:bg-[#1e293b] transition-colors"
            >
              Request a Review
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
