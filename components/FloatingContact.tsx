'use client';

import { useEffect, useState } from 'react';

interface Props {
  title: string;
  subtitle: string;
}

/**
 * Small button in the bottom-right corner that takes visitors straight to
 * the message form in the contact section at the end of the page.
 */
export default function FloatingContact({ title, subtitle }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const el = document.getElementById('contact');
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setAtContact(entry.isIntersecting), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  function goToForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    window.setTimeout(() => form.querySelector<HTMLInputElement>('input[name="name"]')?.focus({ preventScroll: true }), 700);
  }

  const show = scrolled && !atContact;

  return (
    <button
      type="button"
      onClick={goToForm}
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 group flex items-center gap-3 rounded-full bg-white pl-2 pr-5 py-2 border border-gray-100 shadow-[0_8px_30px_rgba(36,46,87,0.18)] hover:shadow-[0_10px_34px_rgba(36,46,87,0.28)] transition-all duration-300 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <span className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white flex-shrink-0">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          />
        </svg>
      </span>
      <span className="text-left leading-tight">
        <span className="block text-sm font-bold text-navy">{title}</span>
        <span className="block text-xs text-navy/55 group-hover:text-navy transition-colors">{subtitle}</span>
      </span>
    </button>
  );
}
