import Image from '@/components/SafeImage';
import { Logo } from '@/data/clients';

interface LogoGridProps {
  logos: Logo[];
  largerLogos?: string[];
  smallerLogos?: string[];
  removeBackground?: string[];
}

export default function LogoGrid({ logos, largerLogos = [], smallerLogos = [], removeBackground = [] }: LogoGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center">
      {logos.map((logo) => {
        const isLarger = largerLogos.includes(logo.name);
        const isSmaller = smallerLogos.includes(logo.name);
        const removeBg = removeBackground.includes(logo.name);
        const heightClass = isLarger ? 'max-h-[6.5rem]' : isSmaller ? 'max-h-10' : 'max-h-16';
        const content = logo.image ? (
          <Image
            src={logo.image}
            alt={logo.name}
            width={200}
            height={80}
            className={`w-auto object-contain ${heightClass}${removeBg ? ' mix-blend-multiply' : ''}`}
          />
        ) : (
          <span className="text-navy/40 text-sm font-medium text-center">
            {logo.name}
          </span>
        );

        const wrapperClass = "w-full flex items-center justify-center h-28 px-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300";

        return logo.url ? (
          <a
            key={logo.name}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            className={wrapperClass}
          >
            {content}
          </a>
        ) : (
          <div key={logo.name} className={wrapperClass}>
            {content}
          </div>
        );
      })}
    </div>
  );
}
