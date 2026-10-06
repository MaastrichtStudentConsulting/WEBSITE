'use client';

import { useState } from 'react';
import { useSwipe } from '@/lib/useSwipe';
import type { Testimonial } from '@/data/testimonials';

interface Props {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: Props) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = (index: number) => {
    if (isTransitioning || index === current) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const prev = () => goTo(current === 0 ? testimonials.length - 1 : current - 1);
  const next = () => goTo(current === testimonials.length - 1 ? 0 : current + 1);

  const swipe = useSwipe(next, prev);
  const t = testimonials[current];

  return (
    <section className="bg-white border-y border-gray-100 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-navy/30 hover:text-navy transition-colors"
          aria-label="Previous testimonial"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-navy/30 hover:text-navy transition-colors"
          aria-label="Next testimonial"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Quote — auto height on mobile, fixed on desktop */}
        <div {...swipe} className="touch-pan-y px-10 sm:px-14 min-h-[200px] sm:h-[240px] flex flex-col justify-center text-center">
          <div
            className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
          >
            <svg className="w-8 h-8 text-orange/70 mb-3 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>
            <p className="text-navy/80 text-sm sm:text-lg leading-relaxed mb-4 sm:mb-5 italic">
              {t.quote}
            </p>
            <p className="text-navy font-bold text-sm sm:text-base">{t.author}</p>
            {t.role && <p className="text-navy/50 text-xs sm:text-sm mt-1">{t.role}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
