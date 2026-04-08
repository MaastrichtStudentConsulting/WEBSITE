'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from '@/components/SafeImage';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/clients', label: 'Clients' },
  { href: '/partners', label: 'Partners' },
  { href: '/students', label: 'Students' },
  { href: '/join', label: 'Join us' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Pages with no hero — navbar should always be in solid (light) mode
  const solidPages = ['/imprint', '/privacy'];
  const forceSolid = solidPages.includes(pathname);
  const isSolid = scrolled || forceSolid;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${forceSolid ? '' : 'transition-colors duration-200'} ${
        isSolid
          ? 'bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/msc-logo-big.png"
              alt="Maastricht Student Consulting"
              width={148}
              height={88}
              className={`h-16 w-auto ${forceSolid ? '' : 'transition-all duration-200'} ${
                isSolid ? '' : 'navbar-logo-white'
              }`}
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-[15px] font-medium transition-colors ${
                    isActive
                      ? 'text-orange'
                      : isSolid
                        ? 'text-navy/70 hover:text-orange'
                        : 'text-white/85 hover:text-orange'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="mailto:info@maastrichtconsulting.com"
              className={`ml-4 px-6 py-2 rounded text-[15px] font-medium transition-all border ${
                isSolid
                  ? 'border-navy/20 text-navy hover:bg-navy hover:text-white'
                  : 'border-white/40 text-white hover:border-white hover:bg-white/10'
              }`}
            >
              Contact
            </a>
          </div>

          <button
            className={`lg:hidden p-2 ${isSolid ? 'text-navy' : 'text-white'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-3 text-base font-medium transition-colors ${
                    isActive ? 'text-orange' : 'text-navy/70 hover:text-orange'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="mailto:info@maastrichtconsulting.com"
              className="block mt-3 border border-navy/20 text-navy px-3 py-3 rounded text-base font-medium text-center transition-colors hover:bg-navy hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
