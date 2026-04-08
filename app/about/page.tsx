import type { Metadata } from 'next';
import Image from '@/components/SafeImage';
import ContactSection from '@/components/ContactSection';
import BoardGrid from '@/components/BoardGrid';
import ConsultantGrid from '@/components/ConsultantGrid';
import { boardMembers, consultants, getContactPerson } from '@/data/team';
import { asset } from '@/lib/assetPath';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Maastricht Student Consulting — 35 consultants, 1 goal.',
};

export default function AboutPage() {
  const contact = getContactPerson('about');

  return (
    <>
      {/* Half-screen hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${asset('/images/hero-board-2.jpg')})` }}
        />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15]">
            35 Consultants<br />1 Goal.
          </h1>
        </div>
      </section>

      {/* Logo divider + Intro */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-6 mb-12">
            <div className="flex-grow h-px bg-navy/20" />
            <Image src="/images/msc-logo-big.png" alt="MSC" width={80} height={80} className="flex-shrink-0" />
            <div className="flex-grow h-px bg-navy/20" />
          </div>
          <p className="text-lg sm:text-xl leading-[1.8] text-navy/70 text-center">
            MSC is a student consultancy, consisting of talented and ambitious Bachelor and Master students.
            The active team currently consists of more than 35 consultants, all of whom are among the top 10%
            within their respective studies. With their interdisciplinary background our consultants are
            looking to apply their academic knowledge to real-life cases and solve our clients&apos; business
            challenges.
          </p>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-20 sm:py-28 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Management Team</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <BoardGrid members={boardMembers} />
        </div>
      </section>

      {/* Consultants */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Our Consultants</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <ConsultantGrid consultants={consultants} />
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 sm:py-28 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Our Founders</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
            <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-lg overflow-hidden shadow-sm">
              <Image
                src="/images/founders/founders.jpg"
                alt="Lennart Weifenbach & Torben Fuhrmann"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-navy/70 leading-[1.75] mb-4 text-[15px]">
                The two driving forces and creative minds behind our organization are Lennart Weifenbach
                and Torben Fuhrmann. After first experiences in consulting combined with entrepreneurial
                spirit, together they founded Maastricht Student Consulting in April 2014.
              </p>
              <p className="text-navy/70 leading-[1.75] mb-6 text-[15px]">
                Torben Fuhrmann is now Managing Director at Lions Trust GmbH and Lennart Weifenbach is
                Managing Director at Leharo GmbH, both located in Germany.
              </p>
              <div className="border-l-2 border-orange/40 pl-4">
                <p className="font-semibold text-navy">
                  Lennart Weifenbach &amp; Torben Fuhrmann
                </p>
                <p className="text-navy/50 text-sm">Founders of Maastricht Student Consulting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection contactPerson={contact} />
    </>
  );
}
