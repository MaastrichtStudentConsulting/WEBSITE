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

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M21 12H3" />
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
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight drop-shadow-sm">
        Become part of our team!
      </h2>

      {open ? (
        <p className="text-lg sm:text-xl text-white/90 font-medium mb-10 max-w-2xl mx-auto">
          Applications are now open. Apply now and become part of MSC.
        </p>
      ) : (
        <>
          <p className="text-lg sm:text-xl text-white/90 font-medium mb-10 max-w-2xl mx-auto">
            Applications open on <span className="text-white font-bold">{OPENING_LABEL}</span>.
            <br className="hidden sm:block" /> Meet us first at our Info Night on{' '}
            <span className="text-white font-bold">{INFO_NIGHT.dateLabel.replace(' 2026', '')}</span>.
          </p>

          <div className="inline-block rounded-2xl bg-navy/55 backdrop-blur-md border border-white/15 px-5 sm:px-10 pt-6 pb-7 mb-10 shadow-2xl">
            <p className="text-orange text-xs sm:text-sm font-bold uppercase tracking-[0.22em] mb-5">
              Applications open in
            </p>
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
            className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-[#e2832c] text-white px-10 py-4 rounded-full text-base font-bold tracking-wide shadow-lg transition-colors min-w-[240px]"
          >
            Apply now <ArrowIcon />
          </a>
        ) : (
          <div className="relative min-w-[240px]" title={open ? 'The application link will be added shortly' : `Applications open ${OPENING_LABEL}`}>
            <span
              aria-disabled="true"
              className="inline-flex w-full items-center justify-center gap-2 bg-orange/70 text-white px-10 py-4 rounded-full text-base font-bold tracking-wide select-none cursor-not-allowed blur-[1.5px] opacity-80"
            >
              Apply now <ArrowIcon />
            </span>
            <span className="absolute inset-0 flex items-center justify-center gap-2 text-white text-sm font-bold">
              <span className="inline-flex items-center gap-2 bg-navy/85 px-4 py-2 rounded-full shadow">
                <LockIcon /> {open ? 'Link coming shortly' : `Opens ${OPENING_SHORT}`}
              </span>
            </span>
          </div>
        )}

        <a
          href={TALENT_POOL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`group inline-flex items-center justify-center gap-2 px-8 py-[14px] rounded-full text-base font-bold tracking-wide transition-colors min-w-[240px] ${
            live
              ? 'border-2 border-white text-white hover:bg-white hover:text-navy'
              : 'bg-white text-navy hover:bg-orange hover:text-white shadow-lg ring-4 ring-white/25'
          }`}
        >
          Join the Talent Pool <ArrowIcon />
        </a>
      </div>

      {live ? (
        <p className="mt-6 text-white/85 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Not ready to apply yet? Join our Talent Pool to hear about future recruitment rounds and events.
        </p>
      ) : (
        <div className="mt-7 max-w-xl mx-auto rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-4">
          <p className="text-white font-semibold text-sm sm:text-base">
            Applications are not open yet, but you can already get a head start.
          </p>
          <p className="text-white/85 text-sm mt-1 leading-relaxed">
            Join our Talent Pool and be the first to hear when applications open, plus get updates on the
            Info Night and upcoming events.
          </p>
        </div>
      )}
    </div>
  );
}
