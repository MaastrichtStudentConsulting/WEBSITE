'use client';

import Image from '@/components/SafeImage';
import Link from 'next/link';

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
      {/* Bottom row: 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {services.slice(2).map((s) => (
          <ServiceCard key={s.title} service={s} />
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative h-56 sm:h-64 rounded-lg overflow-hidden cursor-pointer">
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/50" />

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
        <p className="text-white/90 text-sm leading-relaxed mb-6 max-w-md">
          {service.text}
        </p>
        <Link
          href="/clients#contact"
          className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-white hover:text-navy transition-colors"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
}
