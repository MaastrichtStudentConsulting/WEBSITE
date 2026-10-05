/**
 * Recruitment settings — change dates and links here only.
 * Every recruitment element on the site (countdown, Apply button,
 * Talent Pool, Info Night, homepage banner) reads from this file.
 */

/** Applications open at this moment (Amsterdam time, CET = +01:00 in November). */
export const APPLICATIONS_OPEN = new Date('2026-11-03T00:00:00+01:00');

/**
 * HubSpot application form. Leave empty until the link is ready —
 * the Apply button stays locked while this is empty, even after opening.
 */
export const APPLY_URL = '';

/** HubSpot Talent Pool form. */
export const TALENT_POOL_URL = 'https://share.hsforms.com/1RS7hgpvjQgeIeKx3NIjBsQbw4n1';

export const INFO_NIGHT = {
  dateLabel: '2nd of November 2026',
  shortDate: '2nd Nov',
  location: 'Location to be announced',
  /** Calendar date (YYYY-MM-DD). */
  date: '2026-11-02',
  /**
   * Fill in once known, e.g. startTime: '19:00', endTime: '21:00' (Amsterdam time).
   * While empty, "Add to calendar" creates an all-day event.
   */
  startTime: '',
  endTime: '',
  /** Address for the calendar entry, once known. */
  address: '',
};

export const OPENING_LABEL = '3rd of November 2026';
export const OPENING_SHORT = '3rd Nov';

export const HR_EMAIL = 'info@maastrichtconsulting.com';

export function applicationsAreOpen(now: number = Date.now()): boolean {
  return now >= APPLICATIONS_OPEN.getTime();
}

/** True only when applications are open AND a real link is set. */
export function applyLinkIsLive(now: number = Date.now()): boolean {
  return applicationsAreOpen(now) && APPLY_URL.startsWith('http');
}
