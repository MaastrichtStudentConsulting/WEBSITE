import Image from '@/components/SafeImage';
import { alumniEmployersConsulting, alumniEmployersFinanceIndustry, type Employer } from '@/data/alumni';

function Tile({ e, hidden }: { e: Employer; hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex-shrink-0 mx-2 sm:mx-2.5 w-[176px] h-[88px] sm:w-[208px] sm:h-[104px] rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center"
      title={hidden ? undefined : e.name}
    >
      <Image
        src={e.logo}
        alt={hidden ? '' : e.name}
        width={e.w * 2}
        height={e.h * 2}
        loading="eager"
        className="object-contain scale-[0.85] sm:scale-100"
        style={{ width: e.w, height: e.h }}
      />
    </div>
  );
}

function Row({ items, reverse }: { items: Employer[]; reverse?: boolean }) {
  const track = [...items, ...items];
  return (
    <div className="logo-marquee relative overflow-hidden py-1.5">
      <div className={`flex w-max items-center ${reverse ? 'name-marquee-rtl' : 'name-marquee-ltr'}`}>
        {track.map((e, i) => (
          <Tile key={`${e.name}-${i}`} e={e} hidden={i >= items.length} />
        ))}
      </div>
    </div>
  );
}

export default function AlumniCompanies() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">Where our alumni work</h2>
          <div className="section-divider mx-auto mt-4" />
          <p className="mt-6 text-navy/60 max-w-2xl mx-auto">
            MSC alumni have started their careers at leading consultancies, banks, investors and corporates.
          </p>
        </div>
        <div className="space-y-2">
          <Row items={alumniEmployersConsulting} />
          <Row items={alumniEmployersFinanceIndustry} reverse />
        </div>
      </div>
    </section>
  );
}
