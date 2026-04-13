import Image from '@/components/SafeImage';
import { Consultant } from '@/data/team';

interface ConsultantGridProps {
  consultants: Consultant[];
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

export default function ConsultantGrid({ consultants }: ConsultantGridProps) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4 sm:gap-5">
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
            <p className="text-white text-xs sm:text-sm lg:text-base font-semibold text-center px-2 pb-4 sm:pb-6 leading-tight">
              {consultant.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
