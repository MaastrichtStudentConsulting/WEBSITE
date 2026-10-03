/**
 * Selected reference projects shown as flip cards on the Clients page.
 * Source: MSC Case Study Finder and pitch decks. Only clients whose logos
 * are already shown on the website are named here.
 */

export interface Project {
  client: string;
  logo: string;
  industry: string;
  service: string;
  year?: string;
  title: string;
  text: string;
  /** Short facts shown as highlights on the back of the card */
  highlights?: string[];
  quote?: string;
}

export const projects: Project[] = [
  {
    client: 'Rheinmetall',
    logo: '/images/clients/Rheinmetall.png',
    industry: 'Defence & Automotive · DAX 40',
    service: 'Market Research & Analysis',
    year: '2025',
    title: 'DEI benchmarking against the DAX 40',
    text: 'Benchmarked diversity, equity and inclusion practices against DAX 40 companies and industry competitors and built a framework for DEI governance and impact.',
    highlights: ['230-page report', '36 ranked best practices', '20 KPIs'],
  },
  {
    client: 'OQEMA',
    logo: '/images/clients/Oqema.png',
    industry: 'Chemical Distribution',
    service: 'Strategy & Organisation',
    year: '2022',
    title: 'Aligning a European growth strategy',
    text: 'Supported the goal of doubling revenue from €1bn to €2bn by 2027. Interviews with country hub leaders and segment directors turned regional plans into one coherent corporate roadmap.',
    highlights: ['€1bn → €2bn growth target', 'Hubs across Europe'],
  },
  {
    client: 'Siemens',
    logo: '/images/clients/Siemens-logo.png',
    industry: 'Industrial Manufacturing',
    service: 'Sales & Incentives',
    year: '2019',
    title: 'Rethinking the sales incentive system',
    text: 'Analysed different ways to rework the incentive system for employees, primarily in sales, and developed a model to stimulate the client’s sales department.',
    quote: 'A great mix of hands-on mentality and creativity.',
  },
  {
    client: 'Qiagen',
    logo: '/images/clients/Qiagen.png',
    industry: 'Molecular Diagnostics · Life Sciences',
    service: 'Marketing & Employer Branding',
    year: '2024',
    title: 'A new careers website',
    text: 'Audited the corporate careers site, benchmarked competitors and surveyed students and recent hires, then delivered a branding and content strategy as a working Figma prototype.',
    highlights: ['Target-group surveys', 'Figma prototype'],
  },
  {
    client: 'ProSiebenSat.1 PULS 4',
    logo: '/images/clients/ProSiebenSat1.png',
    industry: 'Media · 4GAMECHANGERS',
    service: 'Marketing Strategy',
    year: '2023',
    title: 'Growing a community beyond the broadcast',
    text: 'Developed a year-round social media and community strategy for the 4GAMECHANGERS festival to reach the next generation, based on target-group workshops and competitor analyses.',
  },
  {
    client: 'SAP',
    logo: '/images/clients/SAP.png',
    industry: 'Enterprise Software',
    service: 'Business Development',
    year: '2021',
    title: 'The circular economy opportunity',
    text: 'Analysed the investment potential of the circular economy and its impact on procurement processes and on SAP’s software offering.',
  },
];
