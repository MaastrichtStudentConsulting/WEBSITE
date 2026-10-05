import Image from '@/components/SafeImage';
import { Logo } from '@/data/clients';

interface LogoMarqueeProps {
  logos: Logo[];
  largerLogos?: string[];
}

/**
 * Endless logo strip moving from left to right.
 * The list is rendered twice so the loop is seamless; it pauses on hover.
 */
export default function LogoMarquee({ logos, largerLogos = [] }: LogoMarqueeProps) {
  const track = [...logos, ...logos];

  return (
    <div className="logo-marquee relative overflow-hidden py-4">
      <div className="logo-marquee-track flex w-max items-center">
        {track.map((logo, i) => {
          const larger = largerLogos.includes(logo.name);
          const content = logo.image ? (
            <Image
              src={logo.image}
              alt={i < logos.length ? logo.name : ''}
              width={200}
              height={80}
              loading="eager"
              className={`w-auto object-contain ${larger ? 'max-h-24' : 'max-h-14'}`}
            />
          ) : (
            <span className="text-navy/50 text-sm font-semibold">{logo.name}</span>
          );
          const cls =
            'flex-shrink-0 w-40 sm:w-52 h-24 mx-4 sm:mx-6 flex items-center justify-center transition-transform duration-300 hover:scale-105';
          return logo.url ? (
            <a
              key={`${logo.name}-${i}`}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cls}
              aria-hidden={i >= logos.length ? true : undefined}
              tabIndex={i >= logos.length ? -1 : undefined}
            >
              {content}
            </a>
          ) : (
            <div key={`${logo.name}-${i}`} className={cls} aria-hidden={i >= logos.length ? true : undefined}>
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
