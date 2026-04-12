'use client';

import { useState, useEffect, useCallback } from 'react';
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
  const isSolid = scrolled || forceSolid || mobileOpen;

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleMobileLink = useCallback(() => {
    setMobileOpen(false);
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
          <Link href="/" className="flex-shrink-0" onClick={handleMobileLink}>
            <Image
              src="/images/msc-logo-big.png"
              alt="Maastricht Student Consulting"
              width={120}
              height={72}
              className={`h-12 w-auto ${forceSolid ? '' : 'transition-all duration-200'} ${
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

          {/* Hamburger → X animated icon */}
          <button
            className={`lg:hidden p-2 relative w-10 h-10 flex items-center justify-center ${isSolid ? 'text-navy' : 'text-white'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-5 relative">
              <span
                className={`absolute left-0 h-[2px] w-6 bg-current rounded transition-all duration-300 ease-in-out ${
                  mobileOpen ? 'top-[9px] rotate-45' : 'top-0 rotate-0'
                }`}
              />
              <span
                className={`absolute left-0 top-[9px] h-[2px] w-6 bg-current rounded transition-all duration-300 ease-in-out ${
                  mobileOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                }`}
              />
              <span
                className={`absolute left-0 h-[2px] w-6 bg-current rounded transition-all duration-300 ease-in-out ${
                  mobileOpen ? 'top-[9px] -rotate-45' : 'top-[18px] rotate-0'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Full-screen mobile menu with fade */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-white z-50 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="space-y-2 text-center">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-6 py-4 text-2xl font-semibold transition-all duration-300 ${
                  isActive ? 'text-orange' : 'text-navy hover:text-orange'
                } ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: mobileOpen ? `${i * 50}ms` : '0ms' }}
                onClick={handleMobileLink}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="mailto:info@maastrichtconsulting.com"
            className={`inline-block mt-6 border-2 border-navy text-navy px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-navy hover:text-white ${
              mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: mobileOpen ? `${navLinks.length * 50}ms` : '0ms' }}
            onClick={handleMobileLink}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
