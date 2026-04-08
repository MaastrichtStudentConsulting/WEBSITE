'use client';

import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

interface Step {
  title: string;
  description: string;
  icon: string;
}

interface Props {
  intro?: string;
  steps: Step[];
}

export default function ProjectTimeline({ intro, steps }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastIconRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const updateLines = useCallback(() => {
    const container = containerRef.current;
    const lastIcon = lastIconRef.current;
    const progress = progressRef.current;
    if (!container || !lastIcon) return;

    const containerRect = container.getBoundingClientRect();
    const iconRect = lastIcon.getBoundingClientRect();
    const lineBottom = iconRect.top - containerRect.top + iconRect.height / 2;

    // Set bg line height
    const bgLine = container.querySelector('.timeline-line') as HTMLElement;
    if (bgLine) bgLine.style.height = `${lineBottom}px`;

    // Set progress line height based on scroll
    if (progress) {
      const viewportMiddle = window.innerHeight * 0.6;
      const progressHeight = viewportMiddle - containerRect.top;
      const clampedHeight = Math.max(0, Math.min(progressHeight, lineBottom));
      progress.style.height = `${clampedHeight}px`;
    }
  }, []);

  useEffect(() => {
    updateLines();
    window.addEventListener('scroll', updateLines, { passive: true });
    window.addEventListener('resize', updateLines);
    const timer = setTimeout(updateLines, 500);
    return () => {
      window.removeEventListener('scroll', updateLines);
      window.removeEventListener('resize', updateLines);
      clearTimeout(timer);
    };
  }, [updateLines]);

  return (
    <div>
      {intro && (
        <p className="text-center text-navy/60 max-w-3xl mx-auto leading-relaxed text-[15px] mb-16">
          {intro}
        </p>
      )}

      <div className="relative" ref={containerRef}>
        {/* Background line */}
        <div className="absolute left-5 md:left-1/2 md:-translate-x-px top-0 w-0.5 bg-navy/15 timeline-line" />
        {/* Progress line — blue, follows scroll */}
        <div
          ref={progressRef}
          className="absolute left-5 md:left-1/2 md:-translate-x-px top-0 w-0.5 bg-navy z-[1] transition-[height] duration-100 ease-out"
          style={{ height: 0 }}
        />

        <div className="space-y-12 md:space-y-16">
          {steps.map((step, i) => (
            <TimelineStep
              key={i}
              step={step}
              index={i}
              isLast={i === steps.length - 1}
              lastIconRef={i === steps.length - 1 ? lastIconRef : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TimelineStep({
  step,
  index,
  isLast,
  lastIconRef,
}: {
  step: Step;
  index: number;
  isLast: boolean;
  lastIconRef?: React.RefObject<HTMLDivElement>;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('timeline-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative timeline-step"
    >
      {/* Icon on the line — rounded square */}
      <div
        ref={lastIconRef}
        className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 z-10 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-navy flex items-center justify-center shadow-md timeline-icon"
      >
        <Image
          src={step.icon}
          alt=""
          width={20}
          height={20}
          className="brightness-0 invert w-4 h-4 md:w-5 md:h-5"
        />
      </div>

      {/* Desktop: alternating left/right */}
      <div className="hidden md:flex md:items-start">
        <div className="md:w-1/2 md:pr-14">
          {isLeft && (
            <div className="bg-white rounded-xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-gray-100 ml-4 timeline-card timeline-card-left">
              <h3 className="text-base sm:text-lg font-bold text-navy mb-2">{step.title}</h3>
              <p className="text-navy/60 leading-relaxed text-[14px]">{step.description}</p>
            </div>
          )}
        </div>
        <div className="md:w-1/2 md:pl-14">
          {!isLeft && (
            <div className="bg-white rounded-xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-gray-100 mr-4 timeline-card timeline-card-right">
              <h3 className="text-base sm:text-lg font-bold text-navy mb-2">{step.title}</h3>
              <p className="text-navy/60 leading-relaxed text-[14px]">{step.description}</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile: always right of line */}
      <div className="md:hidden pl-14 timeline-card timeline-card-right">
        <h3 className="text-base font-bold text-navy mb-2">{step.title}</h3>
        <p className="text-navy/60 leading-relaxed text-[14px]">{step.description}</p>
      </div>
    </div>
  );
}
