import Image from '@/components/SafeImage';
import { Consultant } from '@/data/team';

interface ConsultantGridProps {
  consultants: Consultant[];
  /** Fixed column count (used for the small Marketing grid) */
  columns?: 3;
}

function PlaceholderAvatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  return (
    <div className="w-full h-full bg-gradient-to-br from-navy/80 to-navy flex items-center justify-center">
      <span className="text-xl font-bold text-white/40">{initials}</span>
    </div>
  );
}

export default function ConsultantGrid({ consultants, columns }: ConsultantGridProps) {
  return (
    <div className={`grid gap-4 sm:gap-5 ${columns === 3 ? 'grid-cols-3' : 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5'}`}>
      {consultants.map((consultant) => (
        <div
          key={consultant.name}
          className="group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer outline-none" tabIndex={0}
        >
          {consultant.image ? (
            <div className={`absolute inset-0 ${consultant.wrapperClassName ?? ''}`}>
              <Image
                src={consultant.image}
                alt={consultant.name}
                fill
                quality={100}
                className={`object-cover ${consultant.imageClassName ?? ''}`}
                sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 20vw"
              />
            </div>
          ) : (
            <PlaceholderAvatar name={consultant.name} />
          )}

          {/* Blue slide-up overlay */}
          <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full group-focus-within:h-full bg-navy/75 transition-all duration-700 ease-in-out flex items-end justify-center overflow-hidden">
            <div className="text-center px-2 pb-4 sm:pb-6">
              <p className="text-white text-xs sm:text-sm lg:text-base font-semibold leading-tight">{consultant.name}</p>
              {consultant.role && (
                <p className="text-white/70 text-[10px] sm:text-xs mt-1 leading-tight">{consultant.role}</p>
              )}
              {consultant.linkedin && (
                <a
                  href={consultant.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${consultant.name} on LinkedIn`}
                  className="mt-2 sm:mt-3 inline-flex w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-navy items-center justify-center hover:bg-orange hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
