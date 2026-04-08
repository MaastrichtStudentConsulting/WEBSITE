'use client';

import Image from '@/components/SafeImage';
import Link from 'next/link';
import type { Testimonial } from '@/data/testimonials';

interface Props {
  testimonial: Testimonial;
  label: string;
  href: string;
}

export default function ReferenceCard({ testimonial, label, href }: Props) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-bold text-navy mb-6">{label}</h3>
      <div className="group relative w-full aspect-[4/3] bg-gray-50 rounded-lg overflow-hidden">
        {/* Logo (default state) */}
        <div className="absolute inset-0 flex items-center justify-center p-10 transition-opacity duration-300 group-hover:opacity-0">
          {testimonial.image && (
            <Image
              src={testimonial.image}
              alt={testimonial.author}
              width={280}
              height={140}
              className="object-contain max-h-32"
            />
          )}
        </div>

        {/* Quote (hover state) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gray-50">
          <p className="text-lg font-bold text-navy mb-4">{testimonial.author}</p>
          <p className="text-navy/60 text-center text-sm leading-relaxed mb-6">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 border-2 border-navy text-navy px-6 py-2 rounded-full text-sm font-semibold hover:bg-navy hover:text-white transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
