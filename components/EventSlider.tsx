'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from '@/components/SafeImage';
import { EventItem } from '@/data/clients';

interface Props {
  events: EventItem[];
}

export default function EventSlider({ events }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const gap = 24; // gap-6 = 24px

  const getVisibleCount = useCallback(() => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  }, []);

  const [visibleCount, setVisibleCount] = useState(3);

  const maxIndex = Math.max(0, events.length - visibleCount);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const vc = getVisibleCount();
    setVisibleCount(vc);
    const trackWidth = track.parentElement?.clientWidth ?? track.clientWidth;
    const cw = (trackWidth - gap * (vc - 1)) / vc;
    setCardWidth(cw);
  }, [getVisibleCount]);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  // Clamp current if visibleCount changes
  useEffect(() => {
    if (current > maxIndex) setCurrent(maxIndex);
  }, [current, maxIndex]);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  const translateX = current * (cardWidth + gap);

  return (
    <div className="relative">
      {/* Arrows */}
      <button
        onClick={prev}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 transition-colors z-10 ${
          current === 0 ? 'text-navy/10 cursor-default' : 'text-navy/30 hover:text-navy'
        }`}
        aria-label="Previous events"
        disabled={current === 0}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 transition-colors z-10 ${
          current >= maxIndex ? 'text-navy/10 cursor-default' : 'text-navy/30 hover:text-navy'
        }`}
        aria-label="Next events"
        disabled={current >= maxIndex}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel track */}
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-out"
          style={{
            gap: `${gap}px`,
            transform: `translateX(-${translateX}px)`,
          }}
        >
          {events.map((event) => (
            <div
              key={event.title}
              className="flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
              style={{ width: cardWidth > 0 ? `${cardWidth}px` : undefined }}
            >
              <div className="relative h-48 bg-gray-50">
                {event.image ? (
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-navy/[0.03]">
                    <span className="text-navy/20 text-sm">Photo</span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-navy mb-2 text-sm">{event.title}</h3>
                <p className="text-navy/60 text-[13px] leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? 'bg-navy' : 'bg-navy/20'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
