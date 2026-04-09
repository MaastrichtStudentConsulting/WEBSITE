'use client';

import { useEffect, useRef, useState } from 'react';
import Image from '@/components/SafeImage';
import { asset } from '@/lib/assetPath';

interface HeroSectionProps {
  heading: string;
  subtitle?: string;
  video?: boolean;
  showStats?: boolean;
  backgroundImage?: string;
}

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1800;
          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count} {suffix}</span>;
}

const stats = [
  { value: 150, suffix: '+', label: 'Projects' },
  { value: 12, suffix: '', label: 'Years of experience' },
  { value: 35, suffix: '+', label: 'Consultants' },
];

export default function HeroSection({
  heading,
  subtitle,
  video = false,
  showStats = false,
  backgroundImage = '/images/header_bg.jpg',
}: HeroSectionProps) {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section className="relative h-screen flex flex-col justify-center overflow-hidden bg-navy">
      {/* Background */}
      {video ? (
        <>
          <video
            key="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onPlaying={() => setVideoReady(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
          >
            <source src={asset('/video/WebsiteHeader.mp4')} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-navy/50" />
        </>
      ) : (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/55" />
        </>
      )}

      {/* Content — centered */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-white leading-[1.15] mx-auto max-w-4xl">
          {heading}
        </h1>

        {subtitle && (
          <p className="mt-6 text-base sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

        {showStats && (
          <div className="mt-14 flex justify-center flex-wrap gap-x-20 gap-y-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/60 text-sm sm:text-base font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
