'use client';

import { useState } from 'react';
import Image from '@/components/SafeImage';
import type { Testimonial } from '@/data/testimonials';

interface Props {
  testimonials: Testimonial[];
}

export default function MemberTestimonialSlider({ testimonials }: Props) {
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

  const t = testimonials[current];

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 text-navy/30 hover:text-navy transition-colors z-10"
        aria-label="Previous testimonial"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 text-navy/30 hover:text-navy transition-colors z-10"
        aria-label="Next testimonial"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Quote */}
      <div className="px-8 sm:px-16 min-h-[280px] sm:min-h-[240px] flex flex-col justify-center">
        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <p className="text-navy/70 text-lg sm:text-xl leading-relaxed mb-8">
            &ldquo;{t.quote}&rdquo;
          </p>
          <div className="flex items-center gap-4">
            {t.image && (
              <div className="w-14 h-14 relative rounded-full overflow-hidden flex-shrink-0">
                <Image src={t.image} alt={t.author} fill className="object-cover" />
              </div>
            )}
            <div>
              <p className="font-bold text-navy text-lg">{t.author}</p>
              {t.role && <p className="text-navy/50 text-sm">{t.role}</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? 'bg-navy' : 'bg-navy/20'
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
