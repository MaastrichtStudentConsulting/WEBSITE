import Link from 'next/link';
import Image from '@/components/SafeImage';
import { boardMembers, consultants, marketingTeam, MEMBER_COUNT } from '@/data/team';

/** Compact wall of every current member, used on the Students page. */
export default function TeamWall() {
  const people = [
    ...boardMembers.map((m) => ({ name: m.name, image: m.image as string | null, linkedin: m.linkedin })),
    ...consultants.map((c) => ({ name: c.name, image: c.image, linkedin: c.linkedin })),
    ...marketingTeam.map((c) => ({ name: c.name, image: c.image, linkedin: c.linkedin })),
  ];

  return (
    <section className="py-20 sm:py-28 bg-gray-50/80">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy">Meet the team</h2>
        <div className="section-divider mx-auto mt-4" />
        <p className="mt-6 text-navy/60 max-w-2xl mx-auto">
          {MEMBER_COUNT} students from different faculties and backgrounds – this could be your team.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
          {people.map((p) => {
            const avatar = (
              <span className="relative block w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-2 ring-white shadow-sm bg-navy/10 transition-transform duration-300 group-hover:scale-110 group-hover:ring-orange">
                {p.image ? (
                  <Image src={p.image} alt={p.name} fill sizes="80px" className="object-cover object-top" />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-navy/50 font-bold">
                    {p.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                  </span>
                )}
              </span>
            );
            const label = (
              <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-8 whitespace-nowrap rounded-md bg-navy px-2 py-1 text-[11px] font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity z-10">
                {p.name}
              </span>
            );
            return p.linkedin ? (
              <a key={p.name} href={p.linkedin} target="_blank" rel="noopener noreferrer" title={p.name} className="group relative">
                {avatar}
                {label}
              </a>
            ) : (
              <span key={p.name} title={p.name} className="group relative">
                {avatar}
                {label}
              </span>
            );
          })}
        </div>

        <Link
          href="/about"
          className="inline-flex items-center gap-2 mt-14 bg-navy hover:bg-navy/90 text-white px-8 py-3 rounded-full text-sm font-semibold transition-colors"
        >
          Meet the whole team
        </Link>
      </div>
    </section>
  );
}
