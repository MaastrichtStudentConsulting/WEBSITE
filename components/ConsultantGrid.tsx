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
          className="group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer"
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
          <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-navy/75 transition-all duration-700 ease-in-out flex items-end justify-center overflow-hidden">
            <div className="text-center px-2 pb-4 sm:pb-6">
              <p className="text-white text-xs sm:text-sm lg:text-base font-semibold leading-tight">{consultant.name}</p>
              {consultant.role && (
                <p className="text-white/70 text-[10px] sm:text-xs mt-1 leading-tight">{consultant.role}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
