'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { upcomingEvents, type UpcomingEvent } from '@/data/events';

const typeStyles: Record<string, string> = {
  Recruitment: 'bg-orange/10 text-orange',
  Workshop: 'bg-gray-100 text-gray-600',
  Social: 'bg-emerald-50 text-emerald-700',
  Event: 'bg-gray-100 text-gray-600',
};

function DateBadge({ date }: { date?: string }) {
  if (!date) {
    return (
      <div className="w-16 h-16 rounded-xl border-2 border-dashed border-gray-300 bg-white flex flex-col items-center justify-center leading-none text-gray-400">
        <span className="text-[10px] font-bold uppercase tracking-wider">Date</span>
        <span className="text-sm font-bold mt-1">TBA</span>
      </div>
    );
  }
  const d = new Date(`${date}T12:00:00`);
  return (
    <div className="w-16 h-16 rounded-xl bg-white border-2 border-orange/40 flex flex-col items-center justify-center leading-none shadow-sm">
      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
        {d.toLocaleDateString('en-GB', { month: 'short' })}
      </span>
      <span className="text-2xl font-bold mt-1 text-orange tabular-nums">{d.getDate()}</span>
    </div>
  );
}

function EventCard({ e }: { e: UpcomingEvent }) {
  return (
    <div className="relative flex-shrink-0 w-[260px] sm:w-[280px] snap-start">
      <div className="relative z-10">
        <DateBadge date={e.date} />
      </div>
      <div className="mt-5 rounded-xl bg-white border border-gray-100 shadow-sm p-5 h-[225px] flex flex-col">
        <span className={`self-start rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${typeStyles[e.type]}`}>
          {e.type}
        </span>
        <h3 className="mt-3 text-lg font-bold text-navy leading-snug">{e.title}</h3>
        {(e.time || e.location) && (
          <p className="text-navy/50 text-sm mt-0.5">{[e.time, e.location].filter(Boolean).join(' · ')}</p>
        )}
        {e.text && <p className="text-navy/65 text-sm leading-relaxed mt-2 line-clamp-2">{e.text}</p>}
        {e.href && (
          <Link href={e.href} className="mt-auto pt-3 text-sm font-semibold text-navy hover:text-orange transition-colors">
            {e.linkLabel ?? 'More info'} →
          </Link>
        )}
      </div>
    </div>
  );
}

export default function EventsTimeline() {
  // Hide events whose date has passed (checked in the visitor's browser)
  const [events, setEvents] = useState(upcomingEvents);
  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    setEvents(upcomingEvents.filter((e) => !e.date || e.date >= today));
  }, []);

  if (events.length === 0) return null;

  return (
    <section className="py-20 sm:py-28 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">Upcoming Events</h2>
          <div className="section-divider mx-auto mt-4" />
          <p className="mt-6 text-navy/60 max-w-2xl mx-auto">
            Workshops, recruitment and more – see what is coming up at MSC.
          </p>
        </div>

        <div className="relative">
          {/* timeline line through the date badges */}
          <div className="absolute left-0 right-0 top-8 h-px bg-gray-200" aria-hidden />
          <div className="relative flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 [scrollbar-width:thin]">
            {events.map((e, i) => (
              <EventCard key={`${e.title}-${i}`} e={e} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
