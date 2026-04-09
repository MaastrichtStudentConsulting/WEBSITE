export interface Logo {
  name: string;
  image: string | null;
}

export const clientLogos: Logo[] = [
  { name: 'SAP', image: '/images/clients/SAP.png' },
  { name: 'Siemens', image: '/images/clients/Siemens-logo.png' },
  { name: 'Philips', image: '/images/clients/philips-logo.png' },
  { name: 'MAN', image: '/images/clients/MAN-logo.png' },
  { name: 'Studydrive', image: '/images/clients/stidydrive-logo.png' },
  { name: 'Nissin', image: '/images/clients/Nissin-logo.png' },
  { name: 'Oqema', image: '/images/clients/Oqema.png' },
  { name: 'Tennis Point', image: '/images/clients/Tennis-Point.png' },
  { name: 'Rheinmetall', image: '/images/clients/Rheinmetall.png' },
  { name: 'Qiagen', image: '/images/clients/Qiagen.png' },
  { name: 'ProSiebenSat.1', image: '/images/clients/ProSiebenSat1.png' },
  { name: 'Vaude', image: '/images/clients/Vaude.png' },
];

export const partnerLogos: Logo[] = [
  { name: 'Bain & Company', image: '/images/partners/Bain_and_Company_Logo_1.png' },
  { name: 'EY', image: '/images/partners/EY-min.png' },
  { name: 'Simon Kucher', image: '/images/partners/Simon-Kucher-Partners-min.png' },
  { name: 'BCG', image: '/images/partners/BCG.png' },
  { name: 'Roland Berger', image: '/images/partners/Roland_Berger_Logo_2015.png' },
  { name: 'SET Management Consulting', image: '/images/partners/SET.webp' },
  { name: 'Inverto', image: '/images/partners/Inverto-new.png' },
  { name: 'thyssenkrupp Management Consulting', image: '/images/partners/Thyssenkrupp.png' },
  { name: 'Esprit St. Gallen', image: '/images/partners/Esprit.png' },
  { name: 'European Student Consulting Network', image: '/images/partners/ESCN.png' },
];

export interface EventItem {
  title: string;
  description: string;
  image: string | null;
}

export const partnerEvents: EventItem[] = [
  {
    title: 'Inverto Workshop',
    description: 'Last semester, Inverto joined us in Maastricht for a case cracking workshop on sustainable packaging and business practices.',
    image: '/images/events/inverto.jpeg',
  },
  {
    title: 'SET Workshop',
    description: 'SET Management Consulting hosted an interactive workshop where participants tackled real consulting challenges and developed innovative strategies in teams.',
    image: '/images/events/SET-Workshop.jpeg',
  },
  {
    title: 'Simon Kucher Padel Tournament',
    description: 'Simon Kucher joined us for a padel tournament, combining networking with friendly competition in a relaxed setting.',
    image: '/images/events/simon-kucher.jpeg',
  },
  {
    title: 'BCG Consulting Skills Lab',
    description: 'BCG joined us for a Consulting Skills Lab where participants practiced key consulting skills highly relevant for future careers in consulting.',
    image: '/images/events/bcg-workshop.jpeg',
  },
  {
    title: 'Post Workshop Socials',
    description: "After the workshops we usually visit one of Maastricht's many delicious restaurants for dinner and drinks.",
    image: '/images/events/post-ws-socials.jpeg',
  },
];

export const studentInsights: EventItem[] = [
  {
    title: 'MSC Trip',
    description: 'Last semester, all MSC members traveled to Tenerife for a memorable trip combining team bonding, and unforgettable experiences.',
    image: '/images/events/tenerife.jpeg',
  },
  {
    title: 'Workshops',
    description: 'Our workshops give members hands-on experience with real consulting challenges, guided by industry professionals.',
    image: '/images/events/workshop.jpeg',
  },
  {
    title: 'Get Togethers',
    description: "We closed off our last project period with a cozy dinner in one of the beautiful wine cellars in Maastricht's city center.",
    image: '/images/events/get-togethers.jpeg',
  },
  {
    title: 'Post Workshop Socials',
    description: "After the workshops we usually visit one of Maastricht's many delicious restaurants for dinner and drinks.",
    image: '/images/events/post-workshop-socials.jpeg',
  },
  {
    title: 'Team Socials',
    description: 'From outdoor activities to group outings, our social events bring the whole team together outside of work.',
    image: '/images/events/socials.jpeg',
  },
];
