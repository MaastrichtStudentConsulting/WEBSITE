'use client';

import { useCallback, useEffect, useState } from 'react';
import CountdownTimer from '@/components/CountdownTimer';
import {
  APPLY_URL,
  TALENT_POOL_URL,
  INFO_NIGHT,
  OPENING_LABEL,
  OPENING_SHORT,
  applicationsAreOpen,
  applyLinkIsLive,
} from '@/data/recruitment';

function LockIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
}

export default function ApplicationCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [live, setLive] = useState(false);

  useEffect(() => {
    setOpen(applicationsAreOpen());
    setLive(applyLinkIsLive());
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = useCallback(() => {
    setOpen(true);
    setLive(applyLinkIsLive());
  }, []);

  return (
    <div
      className={`relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-6 py-20 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
        Become part of our team!
      </h2>

      {open ? (
        <p className="text-lg sm:text-xl text-white/90 font-medium mb-10 max-w-2xl mx-auto">
          Applications are now open. Apply now and become part of MSC.
        </p>
      ) : (
        <>
          <p className="text-lg sm:text-xl text-white/90 font-medium mb-12 max-w-2xl mx-auto">
            Applications open on {OPENING_LABEL}. Meet us first at our Info Night on{' '}
            {INFO_NIGHT.dateLabel.replace(' 2026', '')}.
          </p>

          <p className="text-white/80 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Applications open in
          </p>
          <div className="mb-12">
            <CountdownTimer onOpen={handleOpen} />
          </div>
        </>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        {live ? (
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-orange hover:bg-[#e2832c] text-white px-10 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-colors min-w-[220px]"
          >
            Apply now
          </a>
        ) : (
          <span
            aria-disabled="true"
            title={open ? 'The application link will be added shortly' : `Applications open ${OPENING_LABEL}`}
            className="inline-flex items-center justify-center gap-2 border-2 border-white/70 bg-black/25 text-white px-10 py-3 rounded-full text-sm font-semibold tracking-wide cursor-not-allowed select-none min-w-[220px]"
          >
            <LockIcon />
            {open ? 'Apply now' : `Apply from ${OPENING_SHORT}`}
          </span>
        )}

        <a
          href={TALENT_POOL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center px-10 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-colors min-w-[220px] ${
            live
              ? 'border-2 border-white text-white hover:bg-white hover:text-navy'
              : 'bg-orange text-white hover:bg-[#e2832c]'
          }`}
        >
          Join the Talent Pool
        </a>
      </div>

      <p className="mt-6 text-white/85 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
        {live
          ? 'Not ready to apply yet? Join our Talent Pool to hear about future recruitment rounds and events.'
          : 'Applications are not open yet. Join our Talent Pool to get a head start and be the first to hear when applications open.'}
      </p>
    </div>
  );
}
