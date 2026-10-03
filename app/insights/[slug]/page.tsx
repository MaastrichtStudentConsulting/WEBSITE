import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MMI_CONTACT, currentSeries, getInterview, interviews } from '@/data/insights';

export function generateStaticParams() {
  return interviews.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const iv = getInterview(params.slug);
  if (!iv) return {};
  return {
    title: `${iv.name} – Maastricht Market Insights`,
    description: iv.headline,
  };
}

export default function InterviewPage({ params }: { params: { slug: string } }) {
  const iv = getInterview(params.slug);
  if (!iv) notFound();
  const more = interviews.filter((i) => i.slug !== iv.slug);

  return (
    <>
      {/* Header */}
      <section className="relative bg-navy overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-24">
        <div className="absolute -left-40 -bottom-40 w-[520px] h-[520px] rounded-full bg-orange/15 blur-3xl" aria-hidden />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <Link href="/insights" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-semibold mb-10 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            All insights
          </Link>
          <p className="text-orange text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
            {currentSeries.title} · {iv.perspective}
          </p>
          <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15]">{iv.headline}</h1>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-white/70 text-sm">
            <span className="font-semibold text-white">{iv.name}</span>
            <span>{iv.role}, {iv.organisation}</span>
            <span className="text-white/40">·</span>
            <span>{iv.readTime}</span>
          </div>
        </div>
      </section>

      {/* Lead quote */}
      <section className="pt-16 sm:pt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <blockquote className="border-l-4 border-orange pl-6 sm:pl-8 text-2xl sm:text-3xl font-bold text-navy leading-snug">
            &ldquo;{iv.quote}&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Interview */}
      <article className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-16">
          {iv.sections.map((s) => (
            <section key={s.label}>
              <p className="text-orange text-xs font-bold uppercase tracking-[0.2em] mb-3">{s.label}</p>
              <h2 className="text-xl sm:text-2xl font-bold text-navy leading-snug">{s.question}</h2>
              <div className="mt-5 space-y-4">
                {s.answer.map((p, i) => (
                  <p key={i} className="text-navy/75 text-[17px] leading-[1.85]">
                    {p}
                  </p>
                ))}
              </div>
              {s.pullQuote && (
                <figure className="mt-10 rounded-2xl bg-gray-50 px-7 sm:px-10 py-8">
                  <p className="text-navy text-xl sm:text-2xl font-semibold leading-snug">&ldquo;{s.pullQuote}&rdquo;</p>
                  <figcaption className="mt-4 text-navy/50 text-sm font-semibold">{iv.name}</figcaption>
                </figure>
              )}
            </section>
          ))}
        </div>
      </article>

      {/* More from the series */}
      <section className="py-20 sm:py-24 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-orange text-xs font-bold uppercase tracking-[0.2em] mb-2">More from the series</p>
              <h2 className="text-3xl font-bold text-navy">{currentSeries.title}</h2>
            </div>
            <Link href="/insights" className="text-navy font-semibold hover:text-orange transition-colors">
              View all insights →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {more.map((m) => (
              <Link
                key={m.slug}
                href={`/insights/${m.slug}`}
                className="group flex flex-col rounded-2xl bg-white border border-gray-100 p-7 hover:border-orange/40 hover:shadow-lg transition-all"
              >
                <span className="text-orange text-[11px] font-bold uppercase tracking-[0.18em]">{m.perspective}</span>
                <p className="mt-4 text-navy font-semibold leading-snug">&ldquo;{m.quote}&rdquo;</p>
                <p className="mt-auto pt-6 text-navy/60 text-sm">
                  <span className="font-bold text-navy">{m.name}</span> · {m.organisation}
                </p>
              </Link>
            ))}
          </div>
          <p className="mt-12 text-center text-navy/60 text-[15px]">
            Interested in contributing to MMI? Contact {MMI_CONTACT.name} at{' '}
            <a href={`mailto:${MMI_CONTACT.email}`} className="underline underline-offset-2 hover:text-orange">
              {MMI_CONTACT.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
