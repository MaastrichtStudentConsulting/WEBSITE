'use client';

import { useCallback, useEffect, useState } from 'react';
import CountdownTimer from '@/components/CountdownTimer';
import {
  APPLY_URL,
  APPLICATIONS_CLOSE,
  TALENT_POOL_URL,
  CLOSING_LABEL,
  recruitmentPhase,
  type RecruitmentPhase,
} from '@/data/recruitment';

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
  const [phase, setPhase] = useState<RecruitmentPhase>('open');

  useEffect(() => {
    setPhase(recruitmentPhase());
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // When the countdown reaches zero, switch to "closed"
  const refresh = useCallback(() => setPhase(recruitmentPhase()), []);

  return (
    <div
      className={`relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-6 py-20 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
        Become part of our team!
      </h2>

      {phase === 'open' ? (
        <>
          <p className="text-lg sm:text-xl text-white/90 font-medium mb-12 max-w-2xl mx-auto">
            Applications are open until the {CLOSING_LABEL}.
          </p>
          <p className="text-white/80 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Applications close in
          </p>
          <div className="mb-12">
            <CountdownTimer target={APPLICATIONS_CLOSE} onOpen={refresh} />
          </div>
        </>
      ) : (
        <p className="text-lg sm:text-xl text-white/90 font-medium mb-10 max-w-2xl mx-auto">
          Applications for this round are closed. Join our Talent Pool and be the first to hear when the next round opens.
        </p>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        {phase === 'open' ? (
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-orange hover:bg-[#e2832c] text-white px-14 py-4 rounded-full text-base font-bold tracking-wide transition-colors min-w-[240px] shadow-lg shadow-black/20"
          >
            Apply now
          </a>
        ) : (
          <a
            href={TALENT_POOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-orange hover:bg-[#e2832c] text-white px-10 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-colors min-w-[240px]"
          >
            Join the Talent Pool
          </a>
        )}

        <CaseSimButton />
      </div>
    </div>
  );
}
