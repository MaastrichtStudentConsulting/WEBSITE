'use client';

import { useEffect, useRef, useState } from 'react';
import { INFO_NIGHT } from '@/data/recruitment';

const TITLE = 'MSC Info Night';
const details = () =>
  `Get to know Maastricht Student Consulting, meet current members and ask all your questions before applying. Applications open on the 3rd of November. More info: ${window.location.origin}/join`;

const ymd = (d: string) => d.replace(/-/g, '');

function nextDay(d: string) {
  const dt = new Date(`${d}T12:00:00Z`);
  dt.setUTCDate(dt.getUTCDate() + 1);
  return dt.toISOString().slice(0, 10);
}

/** Local Amsterdam time "HH:MM" -> "YYYYMMDDTHHMMSS" (floating, with TZID). */
const localStamp = (d: string, t: string) => `${ymd(d)}T${t.replace(':', '')}00`;

function location() {
  return INFO_NIGHT.address || (INFO_NIGHT.location.includes('announced') ? 'Maastricht' : INFO_NIGHT.location);
}

function googleUrl() {
  const p = new URLSearchParams({ action: 'TEMPLATE', text: TITLE, details: details(), location: location() });
  if (INFO_NIGHT.startTime) {
    const end = INFO_NIGHT.endTime || INFO_NIGHT.startTime;
    p.set('dates', `${localStamp(INFO_NIGHT.date, INFO_NIGHT.startTime)}/${localStamp(INFO_NIGHT.date, end)}`);
    p.set('ctz', 'Europe/Amsterdam');
  } else {
    p.set('dates', `${ymd(INFO_NIGHT.date)}/${ymd(nextDay(INFO_NIGHT.date))}`);
  }
  return `https://calendar.google.com/calendar/render?${p.toString()}`;
}

function ics() {
  const when = INFO_NIGHT.startTime
    ? [
        `DTSTART;TZID=Europe/Amsterdam:${localStamp(INFO_NIGHT.date, INFO_NIGHT.startTime)}`,
        `DTEND;TZID=Europe/Amsterdam:${localStamp(INFO_NIGHT.date, INFO_NIGHT.endTime || INFO_NIGHT.startTime)}`,
      ]
    : [`DTSTART;VALUE=DATE:${ymd(INFO_NIGHT.date)}`, `DTEND;VALUE=DATE:${ymd(nextDay(INFO_NIGHT.date))}`];
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Maastricht Student Consulting//Info Night//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:info-night-${INFO_NIGHT.date}@maastrichtconsulting.com`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').slice(0, 15)}Z`,
    ...when,
    `SUMMARY:${TITLE}`,
    `DESCRIPTION:${details().replace(/[,;]/g, (c) => '\\' + c)}`,
    `LOCATION:${location().replace(/,/g, '\\,')}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
}

function downloadIcs() {
  const blob = new Blob([ics()], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'msc-info-night.ics';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export default function AddToCalendar() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="inline-flex items-center gap-2 bg-navy hover:bg-navy/90 text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008z" />
        </svg>
        Add to calendar
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-2 z-20 w-56 rounded-xl bg-white border border-gray-100 shadow-xl py-2">
          <a
            href={googleUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block px-4 py-2.5 text-sm text-navy hover:bg-gray-50"
          >
            Google Calendar
          </a>
          <button
            type="button"
            onClick={() => {
              downloadIcs();
              setOpen(false);
            }}
            className="block w-full text-left px-4 py-2.5 text-sm text-navy hover:bg-gray-50"
          >
            Apple Calendar / Outlook
          </button>
        </div>
      )}
    </div>
  );
}
