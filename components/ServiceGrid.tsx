'use client';

import Image from '@/components/SafeImage';

interface Service {
  title: string;
  icon: string;
  image: string;
  text: string;
}

interface Props {
  services: Service[];
}

export default function ServiceGrid({ services }: Props) {
  return (
    <div className="space-y-4">
      {/* Top row: 2 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.slice(0, 2).map((s) => (
          <ServiceCard key={s.title} service={s} />
        ))}
      </div>
      {/* Middle row: 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {services.slice(2, 5).map((s) => (
          <ServiceCard key={s.title} service={s} />
        ))}
      </div>
      {/* Bottom row: 2 cards */}
      {services.length > 5 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.slice(5).map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      )}
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative h-56 sm:h-64 rounded-lg overflow-hidden cursor-pointer">
      {service.image ? (
        <>
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/50" />
        </>
      ) : (
        <div className="absolute inset-0 bg-navy/70" />
      )}

      {/* Default state: icon + title */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center gap-4 transition-opacity duration-300 group-hover:opacity-0">
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
          <Image
            src={service.icon}
            alt=""
            width={36}
            height={36}
          />
        </div>
        <h3 className="text-white font-bold text-lg text-center">{service.title}</h3>
      </div>

      {/* Hover state: navy overlay with text + learn more */}
      <div className="absolute inset-0 z-20 bg-navy/90 flex flex-col items-center justify-center px-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white/90 text-sm leading-relaxed max-w-md text-justify">
          {service.text}
        </p>
      </div>
    </div>
  );
}
