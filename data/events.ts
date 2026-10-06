/**
 * Upcoming events shown on the homepage timeline.
 * - Events whose date has passed disappear automatically.
 * - `date`: 'YYYY-MM-DD', or leave empty for "Date to be announced".
 * - Dates may still change; the timeline shows a note saying so.
 */

export type EventType = 'Recruitment' | 'Workshop' | 'Social' | 'Event';

export interface UpcomingEvent {
  title: string;
  type: EventType;
  date?: string;
  /** Last day for events over several days ('YYYY-MM-DD') */
  endDate?: string;
  time?: string;
  location?: string;
  text?: string;
  /** Optional link, e.g. to a sign-up form or the Join page */
  href?: string;
  linkLabel?: string;
}

export const upcomingEvents: UpcomingEvent[] = [
  {
    title: 'Inverto Workshop',
    type: 'Workshop',
    date: '2026-10-08',
    text: 'Case competition with Inverto, followed by dinner together.',
  },
  {
    title: 'MFS M&A Workshop',
    type: 'Workshop',
    date: '2026-10-30',
    text: 'Explore M&A with the Maastricht Finance Society – with dinner afterwards.',
  },
  {
    title: 'Info Night',
    type: 'Recruitment',
    date: '2026-11-02',
    text: 'Meet our members and ask all your questions before applying.',
    href: '/join#info-night',
    linkLabel: 'Learn more',
  },
  {
    title: 'Applications open',
    type: 'Recruitment',
    date: '2026-11-03',
    text: 'Apply to join our Consulting or PR team for the next project period.',
    href: '/join#apply',
    linkLabel: 'How to apply',
  },
  {
    title: 'Bain Workshop',
    type: 'Workshop',
    date: '2026-11-05',
    text: 'On site in Düsseldorf – with dinner and networking afterwards.',
  },
  {
    title: 'ritzenhoefer Workshop',
    type: 'Workshop',
    date: '2026-11-12',
    text: 'Hands-on workshop with ritzenhoefer & company.',
  },
  {
    title: 'Interview Day 1',
    type: 'Recruitment',
    date: '2026-11-23',
    text: 'First day of interviews with shortlisted applicants.',
  },
  {
    title: 'Interview Day 2',
    type: 'Recruitment',
    date: '2026-11-24',
    text: 'Second day of interviews with shortlisted applicants.',
  },
];
