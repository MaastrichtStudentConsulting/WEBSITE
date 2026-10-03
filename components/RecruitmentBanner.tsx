'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { INFO_NIGHT, OPENING_SHORT, applicationsAreOpen } from '@/data/recruitment';

export default function RecruitmentBanner() {
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(applicationsAreOpen()), []);

  return (
    <Link
      href="/join#apply"
      className="group block bg-navy text-white hover:bg-[#1d2547] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-1.5 text-center">
        <span className="inline-flex items-center gap-2 text-orange text-xs font-bold uppercase tracking-[0.2em]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange" />
          </span>
          Recruitment
        </span>
        <span className="text-sm sm:text-base font-semibold">
          {open ? (
            <>Applications are now open</>
          ) : (
            <>
              Info Night {INFO_NIGHT.shortDate} <span className="text-white/40 mx-1.5">·</span> Applications open {OPENING_SHORT}
            </>
          )}
        </span>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 group-hover:text-orange transition-colors">
          {open ? 'Apply now' : 'Learn more'}
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
