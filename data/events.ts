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
    title: 'M&A Workshop',
    type: 'Workshop',
    date: '2026-10-30',
    location: 'With the Maastricht Finance Society',
    text: 'Explore the world of mergers & acquisitions – with dinner afterwards.',
  },
  {
    title: 'Info Night',
    type: 'Recruitment',
    date: '2026-11-02',
    location: 'Location to be announced',
    text: 'Get to know MSC, meet current members and ask all your questions before applying.',
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
    location: 'On site in Cologne',
    text: 'Workshop at the Bain & Company office, followed by dinner and networking.',
  },
  {
    title: 'ritzenhoefer Workshop',
    type: 'Workshop',
    date: '2026-11-12',
    text: 'Hands-on workshop with ritzenhoefer & company.',
  },
  {
    title: 'Application interviews',
    type: 'Recruitment',
    date: '2026-11-23',
    endDate: '2026-11-24',
    text: 'Interviews with shortlisted applicants for the next project period.',
  },
];
