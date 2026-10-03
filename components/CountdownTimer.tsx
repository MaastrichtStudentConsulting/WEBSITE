'use client';

import { useEffect, useState } from 'react';
import { APPLICATIONS_OPEN } from '@/data/recruitment';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft | null {
  const diff = APPLICATIONS_OPEN.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[64px] sm:min-w-[96px]">
      <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tabular-nums leading-none">
        {String(value).padStart(2, '0')}
      </div>
      <span className="mt-2 text-white/60 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em]">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-orange/80 leading-none -mt-6 sm:-mt-7" aria-hidden>
      :
    </span>
  );
}

/** Calls onOpen once when the countdown reaches zero. */
export default function CountdownTimer({ onOpen }: { onOpen?: () => void }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const tick = () => {
      const t = calculateTimeLeft();
      setTimeLeft(t);
      if (!t && onOpen) onOpen();
    };
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [onOpen]);

  const t = mounted && timeLeft ? timeLeft : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  if (mounted && !timeLeft) return null;

  return (
    <div className="flex justify-center items-center gap-2 sm:gap-5" role="timer" aria-live="off">
      <TimeUnit value={t.days} label="Days" />
      <Separator />
      <TimeUnit value={t.hours} label="Hours" />
      <Separator />
      <TimeUnit value={t.minutes} label="Minutes" />
      <Separator />
      <TimeUnit value={t.seconds} label="Seconds" />
    </div>
  );
}
