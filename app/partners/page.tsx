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
    title: 'Recruiting',
    icon: '/images/icons/telescope.svg',
    text: 'Meet a hand-picked group of motivated students at your own workshop.',
  },
  {
    title: 'Visibility',
    icon: '/images/icons/megaphone.svg',
    text: 'Put your firm in front of the most ambitious students in Maastricht.',
  },
  {
    title: 'Impact',
    icon: '/images/icons/leaf-lightbulb.svg',
    text: 'Invest in the consultants and leaders of tomorrow.',
  },
];

const whatWeExpect = [
  { title: 'Professional input', text: 'Share your expertise in workshops and case trainings.' },
  { title: 'Long-term commitment', text: 'Regular events that build real relationships.' },
  { title: 'Career guidance', text: 'Advice for our consultants as they start their careers.' },
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
          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
            Workshops, events and recruiting with a select group of motivated student consultants.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">What We Offer</h2>
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
      <section className="py-16 sm:py-20 bg-gray-50/80">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">What We Expect</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {whatWeExpect.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-7 border border-gray-100 text-center">
                <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                <div className="w-8 h-0.5 bg-orange/60 mx-auto my-3" />
                <p className="text-navy/65 leading-relaxed">{item.text}</p>
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
          <LogoGrid logos={partnerLogos} largerLogos={['SET Management Consulting', 'Rheinmetall']} smallerLogos={['BCG', 'Inverto']} color />
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider testimonials={partnerTestimonials} />

      <ContactSection contactPerson={contact} />
    </>
  );
}
