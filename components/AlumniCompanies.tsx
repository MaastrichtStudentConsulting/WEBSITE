import { alumniEmployersConsulting, alumniEmployersFinanceIndustry } from '@/data/alumni';

function Row({ names, reverse }: { names: string[]; reverse?: boolean }) {
  const track = [...names, ...names];
  return (
    <div className="logo-marquee relative overflow-hidden py-3">
      <div className={`flex w-max items-center ${reverse ? 'name-marquee-rtl' : 'name-marquee-ltr'}`}>
        {track.map((n, i) => (
          <span
            key={`${n}-${i}`}
            aria-hidden={i >= names.length ? true : undefined}
            className="flex-shrink-0 mx-3 sm:mx-4 px-5 sm:px-6 py-3 rounded-full border border-navy/10 bg-white text-navy/70 text-sm sm:text-base font-semibold whitespace-nowrap hover:text-navy hover:border-orange/50 transition-colors"
          >
            {n}
          </span>
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
          <Row names={alumniEmployersConsulting} />
          <Row names={alumniEmployersFinanceIndustry} reverse />
        </div>
      </div>
    </section>
  );
}
