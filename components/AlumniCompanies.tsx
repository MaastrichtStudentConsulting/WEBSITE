import { alumniEmployersConsulting, alumniEmployersFinanceIndustry, type Employer } from '@/data/alumni';

function initials(name: string) {
  const skip = ['&', 'and', 'of', 'Company', 'Group'];
  return name
    .replace(/[.\-]/g, ' ')
    .split(' ')
    .filter((w) => w && !skip.includes(w))
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function Chip({ e, hidden }: { e: Employer; hidden?: boolean }) {
  return (
    <span
      aria-hidden={hidden || undefined}
      className="flex-shrink-0 mx-2.5 sm:mx-3 inline-flex items-center gap-3 pl-2 pr-5 sm:pr-6 py-2 rounded-full bg-white border-2 whitespace-nowrap shadow-sm"
      style={{ borderColor: `${e.color}40` }}
    >
      <span
        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-white text-[11px] sm:text-xs font-bold flex-shrink-0"
        style={{ backgroundColor: e.color }}
      >
        {e.icon ? (
          <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-[18px] sm:h-[18px]" fill="currentColor" aria-hidden>
            <path d={e.icon} />
          </svg>
        ) : (
          initials(e.name)
        )}
      </span>
      <span className="text-sm sm:text-base font-bold" style={{ color: e.color }}>
        {e.name}
      </span>
    </span>
  );
}

function Row({ items, reverse }: { items: Employer[]; reverse?: boolean }) {
  const track = [...items, ...items];
  return (
    <div className="logo-marquee relative overflow-hidden py-2">
      <div className={`flex w-max items-center ${reverse ? 'name-marquee-rtl' : 'name-marquee-ltr'}`}>
        {track.map((e, i) => (
          <Chip key={`${e.name}-${i}`} e={e} hidden={i >= items.length} />
        ))}
      </div>
    </div>
  );
}

export default function AlumniCompanies() {
  return (
    <section className="py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">Where our alumni work</h2>
          <div className="section-divider mx-auto mt-4" />
          <p className="mt-6 text-navy/60 max-w-2xl mx-auto">
            MSC alumni have started their careers at leading consultancies, banks, investors and corporates across Europe
            and beyond.
          </p>
        </div>
        <div className="space-y-3">
          <Row items={alumniEmployersConsulting} />
          <Row items={alumniEmployersFinanceIndustry} reverse />
        </div>
      </div>
    </section>
  );
}
