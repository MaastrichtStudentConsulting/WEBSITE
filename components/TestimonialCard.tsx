import Image from '@/components/SafeImage';
import { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  showImage?: boolean;
}

export default function TestimonialCard({ testimonial, showImage = false }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg p-7 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col h-full">
      <div className="text-orange/30 mb-4 flex-shrink-0">
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
        </svg>
      </div>

      <p className="text-navy/70 leading-[1.75] mb-6 flex-grow text-[15px]">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
        {showImage && testimonial.image && (
          <div className="w-9 h-9 relative rounded-full overflow-hidden flex-shrink-0">
            <Image src={testimonial.image} alt={testimonial.author} fill className="object-cover" />
          </div>
        )}
        <div>
          <p className="font-semibold text-navy text-sm">{testimonial.author}</p>
          {testimonial.role && (
            <p className="text-navy/50 text-xs">{testimonial.role}</p>
          )}
          {testimonial.company && !testimonial.role && (
            <p className="text-navy/50 text-xs">{testimonial.company}</p>
          )}
        </div>
      </div>
    </div>
  );
}
