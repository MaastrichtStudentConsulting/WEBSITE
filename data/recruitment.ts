/**
 * Recruitment settings — change dates and links here only.
 * Every recruitment element on the site (countdown, Apply button,
 * Talent Pool, homepage banner) reads from this file.
 */

/** Applications close at the end of this day (Amsterdam time). */
export const APPLICATIONS_CLOSE = new Date('2026-11-17T23:59:59+01:00');

/**
 * HubSpot application form. Leave empty to lock the Apply button.
 */
export const APPLY_URL = 'https://share.hsforms.com/1mZ3J4gE2RFmldI_GWB-1Hwbw4n1';

/** HubSpot Talent Pool form. */
export const TALENT_POOL_URL = 'https://share.hsforms.com/1RS7hgpvjQgeIeKx3NIjBsQbw4n1';

/** The case simulation ("8 weeks at MSC"), served from public/case-simulation.html */
export const CASE_SIMULATION_URL = '/case-simulation';

export const CLOSING_LABEL = '17th of November';
export const CLOSING_SHORT = '17th Nov';

export const HR_EMAIL = 'info@maastrichtconsulting.com';

/** The site shows applications as open until the closing moment, then as closed. */
export type RecruitmentPhase = 'open' | 'closed';

export function recruitmentPhase(now: number = Date.now()): RecruitmentPhase {
  if (now <= APPLICATIONS_CLOSE.getTime()) return 'open';
  return 'closed';
}

export function applicationsAreOpen(now: number = Date.now()): boolean {
  return recruitmentPhase(now) === 'open';
}

/** True only when applications are open AND a real link is set. */
export function applyLinkIsLive(now: number = Date.now()): boolean {
  return applicationsAreOpen(now) && APPLY_URL.startsWith('http');
}
