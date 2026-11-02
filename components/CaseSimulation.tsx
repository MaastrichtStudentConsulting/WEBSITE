import { CASE_SIMULATION_URL } from '@/data/recruitment';

const weeks = [
  { when: 'Week 1', what: 'Kickoff call with the client' },
  { when: 'Weeks 2–3', what: 'Research and analysis' },
  { when: 'Week 4', what: 'Midterm meeting' },
  { when: 'Weeks 5–7', what: 'Working out the details' },
  { when: 'Week 8', what: 'Final presentation' },
];

/**
 * "8 weeks at MSC" case simulation.
 * Desktop: playable right here in a phone frame. Phones: opens full screen.
 */
export default function CaseSimulation() {
  return (
    <section id="case-simulation" className="scroll-mt-20 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
        <div>
          <p className="text-orange text-sm font-bold uppercase tracking-[0.18em] mb-3">Case simulation</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy leading-tight">Try out being a consultant</h2>
          <div className="section-divider mt-4" />
          <p className="text-navy/70 mt-6 leading-relaxed text-lg sm:text-xl max-w-xl">
            What do 8 weeks at MSC look like? Pick a client case and work through a full project yourself – from the
            first client call to the final presentation.
          </p>

          <ol className="mt-10 space-y-4">
            {weeks.map((w) => (
              <li key={w.when} className="flex items-baseline gap-4">
                <span className="w-28 flex-shrink-0 text-base sm:text-lg font-bold text-navy tabular-nums">{w.when}</span>
                <span className="text-navy/70 text-base sm:text-lg">{w.what}</span>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={CASE_SIMULATION_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white px-12 py-4 rounded-full text-base font-semibold tracking-wide transition-colors"
            >
              <span className="lg:hidden">Start the case simulation</span>
              <span className="hidden lg:inline">Open full screen</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Playable preview, desktop only */}
        <div className="hidden lg:block">
          <div className="w-[400px] h-[760px] rounded-[44px] border-[10px] border-navy bg-white shadow-2xl overflow-hidden">
            <iframe
              src={CASE_SIMULATION_URL}
              title="MSC case simulation – 8 weeks at MSC"
              loading="lazy"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
