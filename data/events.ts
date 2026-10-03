/**
 * Upcoming events shown on the homepage timeline.
 * - Events whose date has passed disappear automatically.
 * - `date`: 'YYYY-MM-DD', or leave empty for "Date to be announced".
 * - Replace the placeholder workshops below once the board has confirmed them.
 */

export type EventType = 'Recruitment' | 'Workshop' | 'Social' | 'Event';

export interface UpcomingEvent {
  title: string;
  type: EventType;
  date?: string;
  time?: string;
  location?: string;
  text?: string;
  /** Optional link, e.g. to a sign-up form or the Join page */
  href?: string;
  linkLabel?: string;
}

export const upcomingEvents: UpcomingEvent[] = [
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
    text: 'Apply to join our Consulting or Marketing team for the next project period.',
    href: '/join#apply',
    linkLabel: 'How to apply',
  },
  {
    title: 'Workshop 1',
    type: 'Workshop',
    location: 'Partner to be announced',
    text: 'Hands-on case workshop with one of our partner firms.',
  },
  {
    title: 'Workshop 2',
    type: 'Workshop',
    location: 'Partner to be announced',
    text: 'Hands-on case workshop with one of our partner firms.',
  },
  {
    title: 'Workshop 3',
    type: 'Workshop',
    location: 'Partner to be announced',
    text: 'Hands-on case workshop with one of our partner firms.',
  },
];
