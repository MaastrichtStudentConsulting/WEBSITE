import { TALENT_POOL_URL } from '@/data/recruitment';

/**
 * Shown on the Join page between recruitment rounds.
 * For the next round, swap this back for <ApplicationCTA /> in app/join/page.tsx.
 */
export default function ApplicationsClosed() {
  return (
    <section id="apply" className="scroll-mt-20 py-20 sm:py-24 bg-gray-50/80">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-orange text-sm font-bold uppercase tracking-[0.18em] mb-3">Applications closed</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-navy leading-tight">Thank you for applying!</h2>
        <div className="section-divider mx-auto mt-5" />
        <p className="text-navy/75 text-lg sm:text-xl mt-8 leading-relaxed">
          Applications for this round are now closed. We are going through every application and will get back to
          you soon.
        </p>
        <p className="text-navy/60 text-base mt-4 leading-relaxed">
          Missed this round? Join our Talent Pool and we&apos;ll let you know when applications open again.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={TALENT_POOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-navy hover:bg-navy/90 text-white px-10 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-colors min-w-[240px]"
          >
            Join the Talent Pool
          </a>
          <a
            href="#case-simulation"
            className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-colors min-w-[240px]"
          >
            Try the case
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
