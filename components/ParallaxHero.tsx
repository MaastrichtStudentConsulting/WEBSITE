'use client';

import { useEffect, useRef, useState } from 'react';
import Image from '@/components/SafeImage';

interface ParallaxHeroProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function ParallaxHero({ src, alt = '', className = '' }: ParallaxHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const heroHeight = rect.height;
      // scrollProgress goes from 0 (top) to 1 (hero fully scrolled past)
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / heroHeight));
      // Scale from 1.0 to 1.08 as user scrolls
      setScale(1 + scrollProgress * 0.08);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className={`object-cover transition-transform duration-100 ease-out ${className}`}
        style={{ transform: `scale(${scale})` }}
      />
    </div>
  );
}
