import type { Metadata } from 'next';
import Image from '@/components/SafeImage';
import { boardMembers } from '@/data/team';
import { MMI_LINKEDIN, currentSeries, interviews } from '@/data/insights';

export const metadata: Metadata = {
  title: 'Insights – Maastricht Market Insights',
  description:
    'Maastricht Market Insights (MMI): interviews connecting perspectives from business, economics and politics around one central topic.',
};

function initials(name: string) {
  return name
    .split(' ')
    .filter((p) => p[0] === p[0].toUpperCase())
    .map((p) => p[0])
    .join('')
    .slice(0, 2);
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M21 12H3" />
    </svg>
  );
}

export default function InsightsPage() {
  const jona = boardMembers.find((m) => m.name === 'Jona Weber');
  const [latest, ...rest] = interviews;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
          aria-hidden
        />
        <div className="absolute -right-32 -top-32 w-[520px] h-[520px] rounded-full bg-orange/20 blur-3xl" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-orange text-xs sm:text-sm font-bold uppercase tracking-[0.25em] mb-5">
            Maastricht Market Insights
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] max-w-4xl">
            Perspectives that shape
            <br className="hidden sm:block" /> Europe&apos;s economy.
          </h1>
          <p className="mt-7 text-lg sm:text-xl text-white/75 max-w-2xl leading-relaxed">
            MMI is a publication by Maastricht Student Consulting that connects voices from business, economics and
            politics around one central topic.
          </p>
        </div>
      </section>

      {/* Current series */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start mb-14">
            <div>
              <p className="text-orange text-xs font-bold uppercase tracking-[0.2em] mb-3">Current series</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">{currentSeries.title}</h2>
            </div>
            <p className="text-navy/70 text-lg leading-[1.8] lg:pt-8">{currentSeries.intro}</p>
          </div>

          {/* Latest interview – featured */}
          <a
            href={latest.url ?? MMI_LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl bg-gray-50 border border-gray-100 p-8 sm:p-12 mb-6 hover:border-orange/40 hover:shadow-lg transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-navy text-white flex items-center justify-center text-3xl font-bold">
                {initials(latest.name)}
              </div>
              <div className="flex-grow">
                <p className="text-orange text-xs font-bold uppercase tracking-[0.2em] mb-2">Latest interview</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-navy">{latest.name}</h3>
                <p className="text-navy/55 mt-1">
                  {latest.role} · {latest.organisation}
                </p>
                <p className="text-navy/75 mt-4 text-[17px] leading-relaxed max-w-3xl">{latest.topic}</p>
                <span className="inline-flex items-center gap-2 mt-6 text-navy font-semibold group-hover:text-orange transition-colors">
                  Read the interview <ArrowIcon />
                </span>
              </div>
            </div>
          </a>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rest.map((iv) => (
              <a
                key={iv.name}
                href={iv.url ?? MMI_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-7 sm:p-8 hover:border-orange/40 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-navy/5 text-navy flex items-center justify-center text-lg font-bold mb-6">
                  {initials(iv.name)}
                </div>
                <h3 className="text-xl font-bold text-navy">{iv.name}</h3>
                <p className="text-navy/55 text-sm mt-1 leading-snug">
                  {iv.role} · {iv.organisation}
                </p>
                {iv.quote ? (
                  <blockquote className="mt-5 border-l-2 border-orange pl-4 text-navy/80 italic leading-relaxed">
                    &ldquo;{iv.quote}&rdquo;
                  </blockquote>
                ) : (
                  <p className="mt-5 text-navy/70 leading-relaxed text-[15px]">{iv.topic}</p>
                )}
                <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm text-navy font-semibold group-hover:text-orange transition-colors">
                  Read on LinkedIn <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Initiator */}
      {jona && (
        <section className="py-20 sm:py-28 bg-gray-50/80">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-14 items-center">
              <div className="relative w-56 sm:w-64 md:w-full aspect-[3/4] mx-auto rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/team/jona-weber-portrait.jpg" alt={jona.name} fill sizes="(max-width: 768px) 60vw, 280px" className="object-cover" />
              </div>
              <div>
                <p className="text-orange text-xs font-bold uppercase tracking-[0.2em] mb-3">Behind MMI</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-navy">{jona.name}</h2>
                <p className="text-navy/55 mt-1">{jona.title}, Maastricht Student Consulting</p>
                <p className="text-navy/70 mt-6 leading-[1.8] text-[17px]">
                  MMI was initiated by our Public Relations team to bring students into direct conversation with
                  leaders from academia, business, finance and politics, and to share those perspectives with
                  everyone interested in the future of Europe&apos;s economy.
                </p>
                <p className="text-navy/70 mt-4 leading-[1.8] text-[17px]">
                  Would you like to share your perspective in an upcoming series? We would love to hear from you.
                </p>
                <div className="flex flex-wrap gap-3 mt-8">
                  <a
                    href={`mailto:${jona.email}`}
                    className="inline-flex items-center gap-2 bg-navy hover:bg-navy/90 text-white px-7 py-3 rounded-full text-sm font-semibold transition-colors"
                  >
                    Get in touch
                  </a>
                  <a
                    href={MMI_LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-navy/15 text-navy hover:border-navy px-7 py-[10px] rounded-full text-sm font-semibold transition-colors"
                  >
                    Follow MMI on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
