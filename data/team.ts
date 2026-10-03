export interface BoardMember {
  name: string;
  title: string;
  image: string;
  email: string;
  linkedin?: string;
  phone?: string;
  imageClassName?: string;
}

const B = '/images/team/board/';
const C = '/images/team/consultants/';

export const boardMembers: BoardMember[] = [
  { name: 'Niklas Ullrich', title: 'President', image: `${B}niklas-ullrich.jpg`, email: 'niklas.ullrich@maastrichtconsulting.com', linkedin: 'https://www.linkedin.com/in/niklas-ullrich-ba7a07321/', phone: '+49 1573 0686972' },
  { name: 'Lukas Lippert', title: 'Vice President', image: `${B}lukas-lippert.jpg`, email: 'lukas.lippert@maastrichtconsulting.com', linkedin: 'https://www.linkedin.com/in/lukas-lippert-49524a2a1/', phone: '+49 1575 9092572' },
  { name: 'Jan Moog', title: 'Head of External Relations', image: `${B}jan-moog.jpg`, email: 'jan.moog@maastrichtconsulting.com', linkedin: 'https://www.linkedin.com/in/jan-moog-93b117311/', phone: '+49 176 73552789' },
  { name: 'Henrik Pickrahn', title: 'Head of Human Resources', image: `${B}henrik-pickrahn.jpg`, email: 'henrik.pickrahn@maastrichtconsulting.com', linkedin: 'https://www.linkedin.com/in/henrik-pickrahn/', phone: '+49 1578 0996454' },
  { name: 'Lars Vandingenen', title: 'Head of Business Development', image: `${B}lars-vandingenen.jpg`, email: 'lars.vandingenen@maastrichtconsulting.com', linkedin: 'https://www.linkedin.com/in/lars-vandingenen/', phone: '+32 469 46 51 21' },
  { name: 'Jona Weber', title: 'Head of Public Relations', image: `${B}jona-weber.jpg`, email: 'jona.weber@maastrichtconsulting.com', linkedin: 'https://www.linkedin.com/in/jona-weber/' },
];

export interface Consultant {
  name: string;
  image: string | null;
  /** Shown under the name on hover, e.g. "Business Development" */
  role?: string;
  /** Extra Tailwind classes on the <Image>, e.g. to zoom out a tight crop */
  imageClassName?: string;
  /** Extra Tailwind classes on the wrapper div, e.g. scale transforms */
  wrapperClassName?: string;
}

const BD = 'Consultant & Business Development';

/** 25 consultants, ordered by joining date (Jan 2025 → Jun 2026). */
export const consultants: Consultant[] = [
  { name: 'Maxim Franko', image: `${C}maxim-franko.jpg` },
  { name: 'Caspar Kleinewiese', image: `${C}caspar-kleinewiese.jpg` },
  { name: 'Federico Donati', image: `${C}federico-donati.jpg` },
  { name: 'Jonathan Altmann', image: `${C}jonathan-altmann.jpg` },
  { name: 'Lilly Vollmer', image: `${C}lilly-vollmer.jpg` },
  { name: 'Julian Kuni', image: `${C}julian-kuni.jpg` },
  { name: 'Mona Stiegemeier', image: `${C}mona-stiegemeier.jpg` },
  { name: 'Arthur von Moltke', image: `${C}arthur-von-moltke.jpg` },
  { name: 'Morgan Joffe', image: `${C}morgan-joffe.jpg` },
  { name: 'Madeleine Liljenqvist', image: `${C}madeleine-liljenqvist.jpg`, role: BD },
  { name: 'Bintou Jabbi', image: `${C}bintou-jabbi.jpg` },
  { name: 'Aylin Cakici', image: `${C}aylin-cakici.jpg` },
  { name: 'Tom-Luis Marin', image: `${C}tom-luis-marin.jpg` },
  { name: "Brian O'Sullivan", image: `${C}brian-osullivan.jpg` },
  { name: 'Konstantin Klinkenberg', image: '/images/consultants/Konstantin.jpg', role: BD },
  { name: 'Mia Czwalinna', image: `${C}mia-czwalinna.jpg` },
  { name: 'Sara Zaadi', image: `${C}sara-zaadi.jpg`, role: BD },
  { name: 'Paula Teschendorf', image: `${C}paula-teschendorf.jpg` },
  { name: 'Giacomo Ferioli', image: `${C}giacomo-ferioli.jpg` },
  { name: 'Batuhan Özden', image: `${C}batuhan-oezden.jpg` },
  { name: 'Pauline Siepmann', image: `${C}pauline-siepmann.jpg`, role: BD },
  { name: 'Anton Niebuer', image: `${C}anton-niebuer.jpg` },
  { name: 'Carl Liljenqvist', image: `${C}carl-liljenqvist.jpg` },
  { name: 'Emil Mahr', image: `${C}emil-mahr.jpg`, role: BD },
  { name: 'Julius Koeberich', image: `${C}julius-koeberich.jpg`, role: BD },
];

/** Marketing / PR team (Head of PR is on the board). */
export const marketingTeam: Consultant[] = [
  { name: 'Anna Gronsfeld', image: `${C}anna-gronsfeld.jpg`, role: 'PR Strategist' },
  { name: 'Carla Kersken', image: `${C}carla-kersken.jpg`, role: 'PR Strategist' },
  { name: 'Charlotte Kürschner', image: `${C}charlotte-kuerschner.jpg`, role: 'PR Strategist' },
];

/** Board + consultants + marketing. */
export const MEMBER_COUNT = boardMembers.length + consultants.length + marketingTeam.length;

export function getContactPerson(page: 'home' | 'about' | 'clients' | 'partners' | 'students' | 'join'): BoardMember {
  switch (page) {
    case 'home':
    case 'about':
      return boardMembers[0]; // Niklas Ullrich — President
    case 'clients':
      return boardMembers[4]; // Lars Vandingenen — Business Development
    case 'partners':
      return boardMembers[2]; // Jan Moog — External Relations
    case 'students':
      return boardMembers[1]; // Lukas Lippert — Vice President
    case 'join':
      return boardMembers[3]; // Henrik Pickrahn — Human Resources
  }
}
