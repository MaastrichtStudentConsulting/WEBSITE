'use client';

import { useCallback, useEffect, useState } from 'react';
import CountdownTimer from '@/components/CountdownTimer';
import {
  APPLY_URL,
  APPLICATIONS_CLOSE,
  APPLICATIONS_OPEN,
  TALENT_POOL_URL,
  CLOSING_LABEL,
  OPENING_LABEL,
  OPENING_SHORT,
  recruitmentPhase,
  type RecruitmentPhase,
} from '@/data/recruitment';

function LockIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
}

function CaseSimButton() {
  return (
    <a
      href="#case-simulation"
      className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-colors min-w-[240px]"
    >
      Try the case
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
      </svg>
    </a>
  );
}

export default function ApplicationCTA() {
  const [isVisible, setIsVisible] = useState(false);
  // 'open' as the first render (matches most visitors); corrected in the browser right away
  const [phase, setPhase] = useState<RecruitmentPhase>('open');

  useEffect(() => {
    setPhase(recruitmentPhase());
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const refresh = useCallback(() => setPhase(recruitmentPhase()), []);
  const linkReady = APPLY_URL.startsWith('http');

  return (
    <div
      className={`relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-6 py-20 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
        Become part of our team!
      </h2>

      {phase === 'closed' ? (
        <p className="text-lg sm:text-xl text-white/90 font-medium mb-10 max-w-2xl mx-auto">
          Applications for this round are closed. Join our Talent Pool and be the first to hear when the next round opens.
        </p>
      ) : (
        <>
          <p className="text-lg sm:text-xl text-white/90 font-medium mb-12 max-w-2xl mx-auto">
            {phase === 'open'
              ? `Applications are open until the ${CLOSING_LABEL}.`
              : `Applications open on the ${OPENING_LABEL}.`}
          </p>
          <p className="text-white/80 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            {phase === 'open' ? 'Applications close in' : 'Applications open in'}
          </p>
          <div className="mb-12">
            <CountdownTimer
              key={phase}
              target={phase === 'open' ? APPLICATIONS_CLOSE : APPLICATIONS_OPEN}
              onOpen={refresh}
            />
          </div>
        </>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        {phase === 'closed' ? (
          <a
            href={TALENT_POOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-orange hover:bg-[#e2832c] text-white px-10 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-colors min-w-[240px]"
          >
            Join the Talent Pool
          </a>
        ) : phase === 'open' && linkReady ? (
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-orange hover:bg-[#e2832c] text-white px-14 py-4 rounded-full text-base font-bold tracking-wide transition-colors min-w-[240px] shadow-lg shadow-black/20"
          >
            Apply now
          </a>
        ) : (
          <span
            aria-disabled="true"
            title={`Applications open on the ${OPENING_LABEL}`}
            className="inline-flex items-center justify-center gap-2 border-2 border-white/70 bg-black/25 text-white px-10 py-3 rounded-full text-sm font-semibold tracking-wide cursor-not-allowed select-none min-w-[240px]"
          >
            <LockIcon />
            {phase === 'open' ? 'Apply now' : `Apply from ${OPENING_SHORT}`}
          </span>
        )}

        <CaseSimButton />
      </div>
    </div>
  );
}
