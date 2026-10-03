import type { Metadata } from 'next';
import Link from 'next/link';
import Image from '@/components/SafeImage';
import { MMI_CONTACT, MMI_LINKEDIN, currentSeries, interviews, mmiPrinciples, type Interview } from '@/data/insights';

export const metadata: Metadata = {
  title: 'Insights – Maastricht Market Insights',
  description:
    'Maastricht Market Insights (MMI): interviews connecting perspectives from business, economics and politics around one central topic.',
};

function initials(name: string) {
  return name
    .replace('Dr. ', '')
    .split(' ')
    .filter((p) => p[0] === p[0].toUpperCase())
    .map((p) => p[0])
    .join('')
    .slice(0, 2);
}

function Arrow() {
  return (
    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M21 12H3" />
    </svg>
  );
}

function InterviewCard({ iv }: { iv: Interview }) {
  return (
    <Link
      href={`/insights/${iv.slug}`}
      className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-7 sm:p-8 hover:border-orange/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-6">
        <span className="text-orange text-[11px] font-bold uppercase tracking-[0.18em]">{iv.perspective}</span>
        <span className="text-navy/30 text-sm font-bold tabular-nums">No. {iv.number}</span>
      </div>
      <blockquote className="text-navy text-lg sm:text-xl font-semibold leading-snug">&ldquo;{iv.quote}&rdquo;</blockquote>
      <div className="mt-auto pt-8 flex items-center gap-3">
        <span className="flex-shrink-0 w-11 h-11 rounded-full bg-navy text-white flex items-center justify-center text-sm font-bold">
          {initials(iv.name)}
        </span>
        <div className="min-w-0">
          <p className="font-bold text-navy text-[15px] leading-tight">{iv.name}</p>
          <p className="text-navy/50 text-xs leading-tight mt-0.5 truncate">{iv.organisation}</p>
        </div>
      </div>
      <span className="mt-6 inline-flex items-center gap-2 text-sm text-navy font-semibold group-hover:text-orange transition-colors">
        Read interview · {iv.readTime.replace('-minute read', ' min')} <Arrow />
      </span>
    </Link>
  );
}

export default function InsightsPage() {
  const latest = interviews[interviews.length - 1];
  const others = interviews.filter((i) => i.slug !== latest.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
          aria-hidden
        />
        <div className="absolute -right-40 -top-40 w-[560px] h-[560px] rounded-full bg-orange/20 blur-3xl" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-orange text-xs sm:text-sm font-bold uppercase tracking-[0.25em] mb-5">Maastricht Market Insights</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] max-w-4xl">
            Turning executive conversations into business insights.
          </h1>
          <p className="mt-7 text-lg sm:text-xl text-white/75 max-w-2xl leading-relaxed">
            MMI is a publication by Maastricht Student Consulting that connects leading voices from business, economics
            and politics around one central topic.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 md:divide-x divide-gray-100">
          {mmiPrinciples.map((p, i) => (
            <div key={p.title} className="py-10 md:px-8 first:md:pl-0 last:md:pr-0">
              <p className="text-orange font-bold tabular-nums text-sm mb-2">0{i + 1}</p>
              <h3 className="text-lg font-bold text-navy">{p.title}</h3>
              <p className="text-navy/60 text-[15px] leading-relaxed mt-2">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Series */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-16 items-end mb-14">
            <div>
              <p className="text-orange text-xs font-bold uppercase tracking-[0.2em] mb-3">Founding series</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-navy leading-[1.1]">{currentSeries.title}</h2>
            </div>
            <div>
              <p className="text-navy text-xl font-semibold leading-snug">{currentSeries.question}</p>
              <p className="text-navy/65 mt-4 leading-[1.8]">{currentSeries.intro}</p>
            </div>
          </div>

          {/* Latest – featured */}
          <Link
            href={`/insights/${latest.slug}`}
            className="group relative block rounded-3xl bg-navy text-white overflow-hidden p-8 sm:p-12 lg:p-16 mb-6"
          >
            <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-orange/25 blur-3xl transition-transform duration-700 group-hover:scale-110" aria-hidden />
            <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
              <div>
                <p className="text-orange text-xs font-bold uppercase tracking-[0.2em] mb-6">
                  Latest interview · {latest.perspective}
                </p>
                <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15]">&ldquo;{latest.quote}&rdquo;</blockquote>
                <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl">{latest.headline}</p>
              </div>
              <div className="lg:text-right">
                <p className="text-2xl font-bold">{latest.name}</p>
                <p className="text-white/60 mt-1">{latest.role}</p>
                <p className="text-white/60">{latest.organisation}</p>
                <span className="inline-flex items-center gap-2 mt-8 bg-white text-navy px-7 py-3 rounded-full text-sm font-semibold group-hover:bg-orange group-hover:text-white transition-colors">
                  Read the interview <Arrow />
                </span>
              </div>
            </div>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...others].reverse().map((iv) => (
              <InterviewCard key={iv.slug} iv={iv} />
            ))}
          </div>
        </div>
      </section>

      {/* Behind MMI */}
      <section className="py-20 sm:py-28 bg-gray-50/80">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-14 items-center">
            <div className="relative w-56 sm:w-64 md:w-full aspect-[3/4] mx-auto rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/team/jona-weber-portrait.jpg" alt={MMI_CONTACT.name} fill sizes="(max-width: 768px) 60vw, 280px" className="object-cover" />
            </div>
            <div>
              <p className="text-orange text-xs font-bold uppercase tracking-[0.2em] mb-3">Behind MMI</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy">{MMI_CONTACT.name}</h2>
              <p className="text-navy/55 mt-1">{MMI_CONTACT.title}, Maastricht Student Consulting</p>
              <p className="text-navy/70 mt-6 leading-[1.8] text-[17px]">
                MMI is developed by students within Maastricht Student Consulting who combine academic curiosity,
                consulting experience and a strong interest in the decisions shaping business, politics and the economy.
              </p>
              <p className="text-navy/70 mt-4 leading-[1.8] text-[17px]">
                Would you like to share your perspective in an upcoming series? We handle the preparation, editing and
                design; you contribute through a short interview.
              </p>
              <div className="mt-7 space-y-2 text-[15px]">
                <a href={`mailto:${MMI_CONTACT.email}`} className="flex items-center gap-3 text-navy/75 hover:text-orange transition-colors">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  {MMI_CONTACT.email}
                </a>
                <a href={`tel:${MMI_CONTACT.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-navy/75 hover:text-orange transition-colors">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  {MMI_CONTACT.phone}
                </a>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <a href={MMI_CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-navy hover:bg-navy/90 text-white px-7 py-3 rounded-full text-sm font-semibold transition-colors">
                  Connect on LinkedIn
                </a>
                <a href={MMI_LINKEDIN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-navy/15 text-navy hover:border-navy px-7 py-[10px] rounded-full text-sm font-semibold transition-colors">
                  Follow MMI on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
