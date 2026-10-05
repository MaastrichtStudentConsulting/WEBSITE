import type { Metadata } from 'next';
import Image from '@/components/SafeImage';
import ContactSection from '@/components/ContactSection';
import BoardGrid from '@/components/BoardGrid';
import ConsultantGrid from '@/components/ConsultantGrid';
import MemberTestimonialSlider from '@/components/MemberTestimonialSlider';
import EventSlider from '@/components/EventSlider';
import AlumniCompanies from '@/components/AlumniCompanies';
import ParallaxHero from '@/components/ParallaxHero';
import { boardMembers, consultants, marketingTeam, MEMBER_COUNT, getContactPerson } from '@/data/team';
import { memberTestimonials, alumniTestimonials } from '@/data/testimonials';
import { studentInsights } from '@/data/clients';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Meet Maastricht Student Consulting — ${MEMBER_COUNT} consultants, 1 goal. Our team, life at MSC and where our alumni work.`,
};

const teams = [
  {
    title: 'Business Development',
    image: '/images/team/team-business-development.jpg',
    text: 'Led by Lars Vandingenen, our Business Development team acquires new consulting projects and builds lasting relationships with clients across Europe.',
  },
  {
    title: 'Public Relations',
    image: '/images/team/team-public-relations.jpg',
    text: 'Led by Jona Weber, our PR team shapes how MSC is seen: our brand, our social media presence and our content.',
  },
];

const whatWeOffer = [
  {
    title: 'Real projects',
    icon: '/images/icons/book.svg',
    text: 'Solve real business cases for companies like Siemens, SAP and Rheinmetall.',
  },
  {
    title: 'Workshops',
    icon: '/images/icons/presentation.svg',
    text: 'Workshops and case trainings with partners like BCG, Simon-Kucher and Inverto.',
  },
  {
    title: 'A team for life',
    icon: '/images/icons/people.svg',
    text: 'Trips, dinners and socials – and an alumni network across Europe.',
  },
];

const whatWeExpect = [
  {
    title: 'Drive & motivation',
    icon: '/images/icons/speedometer.svg',
    text: 'You are a self-starter with a strong work ethic who takes ownership and goes the extra mile for our clients.',
  },
  {
    title: 'A professional mindset',
    icon: '/images/icons/presentation.svg',
    text: 'Clients trust us with real challenges. You are reliable, conscientious and deliver high-quality work in every project.',
  },
  {
    title: 'A strong team spirit',
    icon: '/images/icons/people.svg',
    text: 'We come from many backgrounds but work as one team. You help create an environment where everyone feels valued.',
  },
];

export default function AboutPage() {
  const contact = getContactPerson('about');

  return (
    <>
      {/* Half-screen hero */}
      <section className="relative h-[85vh] min-h-[520px] max-h-[1000px] flex items-center overflow-hidden">
        <ParallaxHero src="/images/team/board-walking-1.jpg" className="object-[center_60%] origin-bottom" />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15]">
            {MEMBER_COUNT} Consultants<br />1 Goal.
          </h1>
        </div>
      </section>

      {/* Logo divider + Intro */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-6 mb-12">
            <div className="flex-grow h-px bg-navy/20" />
            <Image src="/images/msc-logo-big.png" alt="MSC" width={80} height={48} className="flex-shrink-0 h-14 w-auto -mt-5" />
            <div className="flex-grow h-px bg-navy/20" />
          </div>
          <p className="text-lg sm:text-xl leading-[1.8] text-navy/70 text-center">
            MSC is a student consultancy of {MEMBER_COUNT} ambitious Bachelor and Master students from five faculties,
            all among the top 10% of their studies. Together we turn academic knowledge into solutions for real
            business challenges.
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

          <div className="text-center mt-20 mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-navy">Marketing Team</h3>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <div className="md:max-w-[calc(60%+0.75rem)] mx-auto">
            <ConsultantGrid consultants={marketingTeam} columns={3} />
          </div>
        </div>
      </section>

      {/* Teams */}
      <section className="py-20 sm:py-28 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Our Teams</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {teams.map((team) => (
              <div key={team.title}>
                <div className="relative aspect-[3/2] rounded-xl overflow-hidden shadow-sm">
                  <Image src={team.image} alt={team.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-navy mt-6">{team.title}</h3>
                <p className="text-navy/65 leading-relaxed mt-2 text-[15px]">{team.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at MSC — team photo */}
      <section id="students" className="relative h-[70vh] min-h-[420px] max-h-[820px] overflow-hidden scroll-mt-20">
        <Image
          src="/images/team/team-sunset.jpg"
          alt="The MSC team at sunset in Maastricht"
          fill
          sizes="100vw"
          className="object-cover object-[center_55%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-10 sm:pb-14">
            <p className="text-orange text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">For students</p>
            <h2 className="mt-2 text-3xl sm:text-5xl font-bold text-white">Our success starts with you.</h2>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">What we offer</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {whatWeOffer.map((item) => (
              <div key={item.title} className="rounded-2xl bg-gray-50/80 border border-gray-100 p-8 sm:p-10 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-white shadow-sm flex items-center justify-center">
                  <Image src={item.icon} alt="" width={40} height={40} />
                </div>
                <h3 className="mt-6 text-2xl sm:text-3xl font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-lg text-navy/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Expect */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <Image src="/images/europe-map.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">What we expect</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {whatWeExpect.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-7 sm:p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center">
                  <Image src={item.icon} alt="" width={56} height={56} className="w-14 h-14" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-navy/65 leading-relaxed text-[15px]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it's like to be at MSC */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">What it&apos;s like to be at MSC</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <EventSlider events={studentInsights} />
        </div>
      </section>

      {/* Member Testimonials — slider */}
      <section className="py-20 sm:py-28 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">What our members value most about MSC</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <MemberTestimonialSlider testimonials={memberTestimonials} />
        </div>
      </section>

      {/* Alumni */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <Image src="/images/alumni-event.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Meet the MSC Alumni</h2>
            <div className="section-divider mx-auto mt-4" />
            <p className="mt-6 text-white/60">Hear what some of our alumni have to say about their time at MSC.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {alumniTestimonials.map((t) => (
              <div
                key={t.author}
                className="bg-white rounded-xl overflow-hidden flex flex-col h-full hover:scale-[1.03] hover:shadow-xl transition-all duration-300 cursor-default"
              >
                {t.image && (
                  <div className="relative h-56">
                    <Image src={t.image} alt={t.author} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top" />
                  </div>
                )}
                <div className="p-7 sm:p-8 flex flex-col flex-grow">
                  <h3 className="font-bold text-navy text-lg mb-3">{t.author}</h3>
                  <p className="text-navy/60 leading-relaxed text-[15px] flex-grow">&ldquo;{t.quote}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where our alumni work */}
      <AlumniCompanies />

      {/* Founders */}
      <section className="py-20 sm:py-28">
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
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-navy/70 leading-[1.75] mb-4 text-[15px] text-justify">
                The two driving forces and creative minds behind our organization are Lennart Weifenbach and Torben
                Fuhrmann. After first experiences in consulting combined with entrepreneurial spirit, together they
                founded Maastricht Student Consulting in April 2014.
              </p>
              <p className="text-navy/70 leading-[1.75] mb-6 text-[15px] text-justify">
                Torben Fuhrmann is now Managing Director at Lions Trust GmbH and Lennart Weifenbach is Managing
                Director at Leharo GmbH, both located in Germany.
              </p>
              <div className="border-l-2 border-orange/40 pl-4">
                <p className="font-semibold text-navy">Lennart Weifenbach &amp; Torben Fuhrmann</p>
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
