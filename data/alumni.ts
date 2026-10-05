/**
 * Where our alumni work – a selection of employers of MSC alumni.
 * Logos sit on white tiles; `w`/`h` is the display size (px), balanced so
 * every logo looks equally large.
 */

export interface Employer {
  name: string;
  logo: string;
  w: number;
  h: number;
}

export const alumniEmployersConsulting: Employer[] = [
  { name: 'McKinsey & Company', logo: '/images/alumni-employers/mckinsey.png', w: 150, h: 47 },
  { name: 'Boston Consulting Group', logo: '/images/alumni-employers/bcg.png', w: 62, h: 62 },
  { name: 'Bain & Company', logo: '/images/alumni-employers/bain.png', w: 134, h: 42 },
  { name: 'Roland Berger', logo: '/images/alumni-employers/roland-berger.png', w: 105, h: 50 },
  { name: 'Oliver Wyman', logo: '/images/alumni-employers/oliver-wyman.png', w: 168, h: 20 },
  { name: 'Kearney', logo: '/images/alumni-employers/kearney.png', w: 168, h: 20 },
  { name: 'Strategy&', logo: '/images/alumni-employers/strategyand.png', w: 137, h: 43 },
  { name: 'EY-Parthenon', logo: '/images/alumni-employers/ey-parthenon.png', w: 144, h: 47 },
  { name: 'Arthur D. Little', logo: '/images/alumni-employers/arthur-d-little.png', w: 168, h: 18 },
  { name: 'Simon-Kucher', logo: '/images/alumni-employers/simon-kucher.png', w: 104, h: 40 },
  { name: 'Deloitte', logo: '/images/alumni-employers/deloitte.png', w: 144, h: 27 },
  { name: 'PwC', logo: '/images/alumni-employers/pwc.png', w: 112, h: 54 },
  { name: 'Accenture', logo: '/images/alumni-employers/accenture.png', w: 151, h: 40 },
  { name: 'BearingPoint', logo: '/images/alumni-employers/bearingpoint.png', w: 168, h: 27 },
  { name: 'Stern Stewart & Co.', logo: '/images/alumni-employers/stern-stewart.png', w: 168, h: 32 },
];

export const alumniEmployersFinanceIndustry: Employer[] = [
  { name: 'JPMorgan Chase', logo: '/images/alumni-employers/jpmorgan-chase.png', w: 168, h: 24 },
  { name: 'Morgan Stanley', logo: '/images/alumni-employers/morgan-stanley.png', w: 168, h: 24 },
  { name: 'Blackstone', logo: '/images/alumni-employers/blackstone.png', w: 107, h: 42 },
  { name: 'Bank of America', logo: '/images/alumni-employers/bank-of-america.png', w: 168, h: 17 },
  { name: 'Deutsche Bank', logo: '/images/alumni-employers/deutsche-bank.png', w: 62, h: 62 },
  { name: 'Jefferies', logo: '/images/alumni-employers/jefferies.png', w: 136, h: 30 },
  { name: 'Macquarie', logo: '/images/alumni-employers/macquarie.png', w: 168, h: 31 },
  { name: 'William Blair', logo: '/images/alumni-employers/william-blair.png', w: 168, h: 31 },
  { name: 'Revolut', logo: '/images/alumni-employers/revolut.png', w: 129, h: 29 },
  { name: 'Adyen', logo: '/images/alumni-employers/adyen.png', w: 125, h: 40 },
  { name: 'Amazon', logo: '/images/alumni-employers/amazon.png', w: 126, h: 43 },
  { name: 'Google Cloud', logo: '/images/alumni-employers/google-cloud.png', w: 168, h: 26 },
  { name: 'Airbus', logo: '/images/alumni-employers/airbus.png', w: 160, h: 30 },
  { name: 'Siemens Healthineers', logo: '/images/alumni-employers/siemens-healthineers.png', w: 157, h: 37 },
  { name: 'Procter & Gamble', logo: '/images/alumni-employers/pg.png', w: 62, h: 62 },
  { name: 'Shell', logo: '/images/alumni-employers/shell.png', w: 104, h: 38 },
  { name: 'Visa', logo: '/images/alumni-employers/visa.png', w: 110, h: 36 },
  { name: 'Lufthansa Technik', logo: '/images/alumni-employers/lufthansa-technik.png', w: 168, h: 18 },
  { name: 'European Commission', logo: '/images/alumni-employers/european-commission.png', w: 90, h: 62 },
];
