/**
 * Maastricht Market Insights (MMI) — interview series published on LinkedIn.
 * To add a new interview: add an entry to `interviews` (newest first) and,
 * once you have it, paste the direct LinkedIn post link into `url`.
 */

export const MMI_LINKEDIN = 'https://www.linkedin.com/company/maastricht-student-consulting/posts/';

export interface Interview {
  name: string;
  role: string;
  organisation: string;
  /** Short teaser of what the interview covers */
  topic: string;
  quote?: string;
  /** Direct link to the LinkedIn post; falls back to the MSC LinkedIn page */
  url?: string;
}

export const currentSeries = {
  title: "Europe's Competitiveness Test",
  intro:
    'Our founding series explores why European companies struggle to obtain the scale, capital and integrated market access required to compete globally, and what that means for the next generation of entrepreneurs and leaders.',
};

export const interviews: Interview[] = [
  {
    name: 'Jesper Rangvid',
    role: 'Professor of Finance & Associate Dean of the E-MBA',
    organisation: 'Copenhagen Business School',
    topic:
      'His insights on the European economy, based on his new book on low interest rates.',
  },
  {
    name: 'Carsten Brzeski',
    role: 'Global Head of Macro Research & Chief Eurozone Economist',
    organisation: 'ING Group',
    topic: 'The macroeconomic perspective in our series on European competitiveness.',
  },
  {
    name: 'Anouk van Brug',
    role: 'Member of the European Parliament, Renew Europe (VVD)',
    organisation: 'European Parliament',
    topic: 'The political perspective in our series on European competitiveness.',
  },
  {
    name: 'Wolfgang Bernhart',
    role: 'Senior Partner, Automotive & Industrials',
    organisation: 'Roland Berger',
    topic:
      "Europe's position in the automotive and EV race, closing the battery cost gap with China, and the strategy-versus-execution debate.",
    quote: 'If the strategy is flawed, no amount of good execution will save you.',
  },
];
