import type { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';
import TestimonialSlider from '@/components/TestimonialSlider';
import LogoGrid from '@/components/LogoGrid';
import OfferExpect from '@/components/OfferExpect';
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
    title: 'Recruiting',
    icon: '/images/icons/telescope.svg',
    text: 'Meet a hand-picked group of motivated students at your own workshop or case training – and get to know future colleagues before they apply.',
  },
  {
    title: 'Visibility',
    icon: '/images/icons/megaphone.svg',
    text: 'Put your firm in front of the most ambitious students in Maastricht, on campus and through our channels.',
  },
  {
    title: 'Impact',
    icon: '/images/icons/leaf-lightbulb.svg',
    text: 'Invest in the consultants and leaders of tomorrow and help them grow through real business challenges.',
  },
];

const whatWeExpect = [
  {
    title: 'Professional input',
    icon: '/images/icons/presentation.svg',
    text: 'Share your expertise in workshops and case trainings – ideally based on real cases from your daily work.',
  },
  {
    title: 'Long-term commitment',
    icon: '/images/icons/people.svg',
    text: 'Regular events, ideally every semester, so that real relationships between your team and our members can grow.',
  },
  {
    title: 'Career guidance',
    icon: '/images/icons/darts.svg',
    text: 'Give our consultants honest advice on careers in your industry and help them start with confidence.',
  },
];

export default function PartnersPage() {
  const contact = getContactPerson('partners');

  return (
    <>
      {/* Half-screen hero */}
      <section className="relative h-[85vh] min-h-[520px] max-h-[1000px] flex items-center overflow-hidden">
        <ParallaxHero src="/images/hero-partners-hands.jpg" className="object-[center_25%]" />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] max-w-3xl">
            Build long-lasting relationships.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
            Workshops, events and recruiting with a select group of motivated student consultants.
          </p>
        </div>
      </section>

      {/* What We Offer + What We Expect, side by side */}
      <OfferExpect offer={whatWeOffer} expect={whatWeExpect} />

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
          <LogoGrid logos={partnerLogos} largerLogos={['SET Management Consulting']} smallerLogos={['BCG', 'Inverto', 'ritzenhoefer & company']} color />
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider testimonials={partnerTestimonials} />

      <ContactSection contactPerson={contact} />
    </>
  );
}
