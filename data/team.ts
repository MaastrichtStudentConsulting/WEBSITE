export interface BoardMember {
  name: string;
  title: string;
  image: string;
  email: string;
  linkedin?: string;
}

export const boardMembers: BoardMember[] = [
  { name: 'Niklas Ullrich', title: 'President', image: '/images/board/Niklas Ullrich.jpg', email: 'niklas.ullrich@maastrichtconsulting.com', linkedin: 'https://www.linkedin.com/in/niklas-ullrich-ba7a07321/' },
  { name: 'Anna-Sophie von der Heydt', title: 'Vice-President', image: '/images/board/Anna-Sophie von der Heydt.jpg', email: 'anna-sophie.vonderheydt@maastrichtconsulting.com', linkedin: 'https://www.linkedin.com/in/anna-sophie-von-der-heydt-980674313/' },
  { name: 'Federico Donati', title: 'Head of Business Development', image: '/images/board/Federico Donati.jpg', email: 'federico.donati@maastrichtconsulting.com', linkedin: 'https://www.linkedin.com/in/fede249/' },
  { name: 'Jan Moog', title: 'Head of External Relations', image: '/images/board/Jan Moog.jpg', email: 'jan.moog@maastrichtconsulting.com', linkedin: 'https://www.linkedin.com/in/jan-moog-93b117311/' },
  { name: 'Lukas Lippert', title: 'Head of Human Resources', image: '/images/board/Lukas Lippert.jpg', email: 'lukas.lippert@maastrichtconsulting.com', linkedin: 'https://www.linkedin.com/in/lukas-lippert-49524a2a1/' },
];

export interface Consultant {
  name: string;
  image: string | null;
}

export const consultants: Consultant[] = [
  { name: 'Lars Vandingenen', image: '/images/consultants/Lars.jpg' },
  { name: 'Lilly Vollmer', image: '/images/consultants/Lilly Vollmer.jpg' },
  { name: 'Morgan Joffe', image: '/images/consultants/Morgan.jpg' },
  { name: 'Aylin Cakici', image: '/images/consultants/Aylin.jpg' },
  { name: 'Fabrice Jansen', image: '/images/consultants/Fabrice.jpg' },
  { name: 'Leonie Binder', image: '/images/consultants/Leonie Binder.jpg' },
  { name: 'Brian O\'Sullivan', image: '/images/consultants/Brian.jpg' },
  { name: 'Madeleine Liljenqvist', image: '/images/consultants/Madeleine.jpg' },
  { name: 'Paul Boger', image: '/images/consultants/Paul.jpg' },
  { name: 'Mia Czwallinna', image: '/images/consultants/Mia.jpg' },
  { name: 'Konstantin Klinkenberg', image: '/images/consultants/Konstantin.jpg' },
  { name: 'Bintou Jabbi', image: '/images/consultants/Bintou Siya.jpg' },
  { name: 'Leonhard Cuzmin', image: '/images/consultants/Leonhard Cuzmin.jpg' },
  { name: 'Julian Kuni', image: '/images/consultants/Julian Kuni.jpg' },
  { name: 'Arthur von Moltke', image: '/images/consultants/Arthur.jpg' },
  { name: 'Ida Gloede', image: '/images/consultants/Ida Gloede.jpg' },
  { name: 'Benjamin Ganovsky', image: '/images/consultants/Ben Ganovsky.jpg' },
  { name: 'Maxim Franko', image: '/images/consultants/Maxim Franko.jpg' },
  { name: 'Simon Kley', image: '/images/consultants/Simon Kley.jpg' },
  { name: 'Mona Stiegemeier', image: '/images/consultants/Mona Stiegemeier.jpg' },
  { name: 'Jona Weber', image: '/images/consultants/Jona.jpg' },
  { name: 'Anna Gessner', image: '/images/consultants/Anna G.jpg' },
  { name: 'Max Hesse', image: '/images/consultants/Max Hesse.jpg' },
  { name: 'Tom-Luis Marin', image: '/images/consultants/Tom-Luis.jpg' },
  { name: 'Anna Mitchell', image: '/images/consultants/Anna Mitchell.jpg' },
  { name: 'Shervin', image: '/images/consultants/Shervin.jpg' },
  { name: 'Martim Machado', image: '/images/consultants/Martim.jpg' },
  { name: 'Helene Werner', image: '/images/consultants/Helene Werner.jpg' },
  { name: 'Henrik Pickrahn', image: '/images/consultants/Henrik Pickrahn.jpeg' },
  { name: 'Jonathan Altmann', image: '/images/consultants/Jonathan Altmann.jpeg' },
  { name: 'Ada Volkmann', image: '/images/consultants/Ada.jpeg' },
  { name: 'Casper van Marrewijk', image: '/images/consultants/Casper v. m.jpeg' },
  { name: 'Ari Mühlthaler', image: '/images/consultants/Ari Mühlthaler.jpeg' },
  { name: 'Caspar Kleinewiese', image: '/images/consultants/Caspar Kleinewiese.jpeg' },
  { name: 'Tiphaine Reynaud', image: '/images/consultants/Tiphaine.jpeg' },
];

export function getContactPerson(page: 'home' | 'about' | 'clients' | 'partners' | 'students' | 'join'): BoardMember {
  switch (page) {
    case 'home':
    case 'about':
      return boardMembers[0]; // Niklas Ullrich
    case 'clients':
      return boardMembers[2]; // Federico Donati
    case 'partners':
      return boardMembers[3]; // Jan Moog
    case 'students':
      return boardMembers[1]; // Anna-Sophie von der Heydt
    case 'join':
      return boardMembers[4]; // Lukas Lippert
  }
}
