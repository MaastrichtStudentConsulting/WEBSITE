import type { Metadata } from 'next';
import Image from '@/components/SafeImage';
import ContactSection from '@/components/ContactSection';
import TestimonialSlider from '@/components/TestimonialSlider';
import LogoGrid from '@/components/LogoGrid';
import EventSlider from '@/components/EventSlider';
import ParallaxHero from '@/components/ParallaxHero';
import { getContactPerson } from '@/data/team';
import { partnerTestimonials } from '@/data/testimonials';
import { partnerLogos, partnerEvents } from '@/data/clients';

export const metadata: Metadata = {
  title: 'Partners',
  description: 'Build long-lasting relationships with Maastricht Student Consulting.',
};

const whatWeOffer = [
  {
    title: 'Recruitment Opportunities',
    text: 'Conducting a workshop with MSC is a great way of complementing your recruitment strategy. Partners organise workshops that are attended by a curated selection of students, which represent the top 10% of Maastricht University.',
  },
  {
    title: 'Increased Visibility',
    text: 'Helping our partners achieve better visibility in their industry is an integral part of our mission. Through workshops and other relevant and customised events, our partners have an opportunity to reach talented students.',
  },
  {
    title: 'Improved CSR Strategy',
    text: "By investing in the development of young and talented students you're investing in the future of your industry and taking an active stance in helping train the professionals of tomorrow.",
  },
];

const whatWeExpect = [
  {
    title: 'Professional Input',
    text: 'We take growth and success seriously and are always keen on finding new ways to expand both our technical and soft skills. As a partner with ample experience in your industry, you play a crucial role by sharing your professional expertise.',
  },
  {
    title: 'Long-lasting Relationships',
    text: 'We share with our partners an appreciation for the value of solid business ties based on shared experiences. As a partner, you help build long-lasting relationships by regularly hosting workshops.',
  },
  {
    title: 'Career Guidance',
    text: 'Partners play an active role in guiding our student consultants and helping them start their professional careers with confidence. During the events you host, you directly interact with our consultants.',
  },
];

export default function PartnersPage() {
  const contact = getContactPerson('partners');

  return (
    <>
      {/* Half-screen hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <ParallaxHero src="/images/hero-partners-hands.jpg" className="object-[center_25%]" />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] max-w-3xl">
            Build long-lasting relationships.
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
            We are a team of dedicated students committed to building solid links between industry and academia.
            The key to this is creating long-term partnerships with industry players who wish to contribute to
            the professional development of our select pool of consultants.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">What We Offer</h2>
            <div className="section-divider mx-auto mt-4" />
            <p className="mt-6 text-navy/60 max-w-3xl mx-auto">
              By partnering with us you will get the chance to connect with our group of highly motivated
              students and create a win-win situation for both your company and our consultants.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {whatWeOffer.map((item) => (
              <div key={item.title} className="bg-gray-50/80 rounded-lg p-7 sm:p-8 border border-gray-100">
                <h3 className="text-lg font-bold text-navy mb-3">{item.title}</h3>
                <div className="w-8 h-0.5 bg-orange/50 mb-4" />
                <p className="text-navy/60 leading-relaxed text-[15px] text-justify">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Expect */}
      <section className="py-20 sm:py-28 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">What We Expect</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {whatWeExpect.map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-7 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-gray-100">
                <h3 className="text-lg font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-navy/60 leading-relaxed text-[15px] text-justify">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Events with our partners</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <EventSlider events={partnerEvents} />
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-20 sm:py-28 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Our Partners</h2>
            <div className="section-divider mx-auto mt-4" />
            <p className="mt-6 text-navy/60">
              We have built successful, long-term relationships with a number of different companies.
            </p>
          </div>
          <LogoGrid logos={partnerLogos} largerLogos={['SET Management Consulting', 'Rheinmetall']} smallerLogos={['BCG', 'Inverto']} />
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider testimonials={partnerTestimonials} />

      <ContactSection contactPerson={contact} />
    </>
  );
}
