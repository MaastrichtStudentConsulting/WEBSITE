'use client';

import { useState } from 'react';
import Image from '@/components/SafeImage';
import { projects, type Project } from '@/data/projects';

function FlipCard({ p }: { p: Project }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      aria-label={`${p.client}: ${p.title}`}
      className={`flip-card group block w-full h-[380px] sm:h-[400px] text-left [perspective:1400px] ${flipped ? 'is-flipped' : ''}`}
    >
      <div className="flip-card-inner relative w-full h-full">
        {/* Front */}
        <div className="flip-face absolute inset-0 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col p-7">
          <span className="text-orange text-[11px] font-bold uppercase tracking-[0.18em]">{p.service}</span>
          <div className="flex-grow flex items-center justify-center px-6">
            <Image src={p.logo} alt={p.client} width={220} height={100} className="w-auto max-h-20 max-w-[200px] object-contain" />
          </div>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-bold text-navy">{p.client}</p>
              <p className="text-navy/50 text-sm">{p.industry}</p>
            </div>
            <span className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-navy/50 group-hover:text-orange transition-colors">
              {p.year && <span className="tabular-nums">{p.year} ·</span>}
              Details
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </span>
          </div>
        </div>

        {/* Back */}
        <div className="flip-face flip-back absolute inset-0 rounded-2xl bg-navy text-white flex flex-col p-7 overflow-hidden">
          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="text-orange">{p.client}</span>
            {p.year && <span className="text-white/50 tabular-nums">{p.year}</span>}
          </div>
          <h3 className="mt-4 text-xl font-bold leading-snug">{p.title}</h3>
          <p className="mt-3 text-white/75 text-[14px] leading-relaxed">{p.text}</p>
          <div className="mt-auto pt-4">
            {p.highlights && (
              <div className="flex flex-wrap gap-2">
                {p.highlights.map((h) => (
                  <span key={h} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                    {h}
                  </span>
                ))}
              </div>
            )}
            {p.quote && <p className="text-white/90 italic text-[15px]">&ldquo;{p.quote}&rdquo;</p>}
          </div>
        </div>
      </div>
    </button>
  );
}

export default function ProjectCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => (
        <FlipCard key={p.client} p={p} />
      ))}
    </div>
  );
}
