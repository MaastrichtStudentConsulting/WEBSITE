import type { Metadata } from 'next';
import Image from '@/components/SafeImage';
import ContactSection from '@/components/ContactSection';
import MemberTestimonialSlider from '@/components/MemberTestimonialSlider';
import EventSlider from '@/components/EventSlider';
import { getContactPerson } from '@/data/team';
import { memberTestimonials, alumniTestimonials } from '@/data/testimonials';
import { studentInsights } from '@/data/clients';
import { asset } from '@/lib/assetPath';

export const metadata: Metadata = {
  title: 'Students',
  description: 'Our success starts with you. Join Maastricht Student Consulting.',
};

const whatWeOffer = [
  {
    title: 'Academic Knowledge',
    icon: '/images/icons/book.svg',
    text: 'As a top-tier student with an inquiring mind, you are always looking for ways to take your knowledge further. This is precisely what we offer to our student members. Discover the practical side of your academic knowledge by solving complex cases and working on challenging projects for our clients. With MSC, your education has real-life value.',
  },
  {
    title: 'Professional Skills',
    icon: '/images/icons/presentation.svg',
    text: 'If you are eager to join the world of work and make your contribution, becoming a member will help you get a footing in your chosen industry or sector. We work closely with leading employers who provide personalised career advice and recruiting opportunities. You will also get access to the exclusive workshops hosted by our clients, where you will learn what it means to be a well-rounded professional in your field.',
  },
  {
    title: 'Social Environment',
    icon: '/images/icons/people.svg',
    text: 'At MSC, we are passionate about professional growth and success. At the same time, we understand the value of having a balanced life and building solid bonds with others. As part of our tightly-knit student consultancy, you will have many opportunities to get to know like-minded students in social settings. Join us and you will get access to social coffee breaks, dinner meetings, and a whole range of social events in and around Maastricht.',
  },
];

const whatWeExpect = [
  {
    title: 'Drive & motivation',
    icon: '/images/icons/speedometer.svg',
    text: 'Our consultants are driven by a strong desire to innovate and make important contributions to their field. We expect our student consultants to be self-starters, have a strong work ethic, and be committed to their personal and professional growth. Although you will be working in a team environment, personal responsibility and accountability are must-haves, as is the ability to think critically and go the extra mile to exceed client expectations.',
  },
  {
    title: 'A professional mindset',
    icon: '/images/icons/presentation.svg',
    text: 'As a consultant, you will be working for corporates in real cases to gain practical experience in the business world. Our clients entrust their needs to us and expect all consultants to display professional behaviour at all times. As a student consultant, you will be reliable, conscientious, and capable of delivering the highest standards and quality of work in every project.',
  },
  {
    title: 'A strong team spirit',
    icon: '/images/icons/people.svg',
    text: 'At Maastricht Student Consulting we are a team of 35 consultants from diverse backgrounds but united by a spirit of collaboration. Inclusiveness and integration are some of our core values, so we strive to create a cooperative environment where all our members feel valued and respected. We expect the same approach from our members \u2013 Your spirit of collaboration with other like-minded students creates value for everyone involved.',
  },
];

export default function StudentsPage() {
  const contact = getContactPerson('students');

  return (
    <>
      {/* Half-screen hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${asset('/images/hero-consultants-all.jpg')})` }}
        />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] max-w-3xl">
            Our success starts with you.
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
            We are a close-knit group of ambitious and motivated students. Although our academic and personal
            backgrounds are very diverse, we are united by our commitment to innovation, excellence, and constant development.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 sm:py-28 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">What we offer</h2>
            <div className="section-divider mx-auto mt-4" />
            <p className="mt-6 text-navy/60 max-w-3xl mx-auto">
              By joining us, you will gain valuable experience in consulting and professional development
              and will become a part of the MSC family.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-14">
            {whatWeOffer.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Image src={item.icon} alt="" width={56} height={56} className="w-14 h-14" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-navy/60 leading-relaxed text-[15px]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Expect */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${asset('/images/europe-map.jpg')})` }}
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">What we expect</h2>
            <div className="section-divider mx-auto mt-4" />
            <p className="mt-6 text-white/60 max-w-3xl mx-auto">
              To judge whether you would be a good fit for our organisation, you can take a look at what values we expect you to bring with you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {whatWeExpect.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-7 sm:p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Image src={item.icon} alt="" width={56} height={56} className="w-14 h-14" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-navy/60 leading-relaxed text-[15px]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Testimonials — slider */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              What our members value most about MSC
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <MemberTestimonialSlider testimonials={memberTestimonials} />
        </div>
      </section>

      {/* Alumni */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${asset('/images/hero-board-standing.jpg')})` }}
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Meet the MSC Alumni</h2>
            <div className="section-divider mx-auto mt-4" />
            <p className="mt-6 text-white/60">
              Hear what some of our alumni have to say about their time at MSC.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {alumniTestimonials.map((t) => (
              <div key={t.author} className="bg-white rounded-xl overflow-hidden flex flex-col h-full hover:scale-[1.03] hover:shadow-xl transition-all duration-300 cursor-default">
                {t.image && (
                  <div className="relative h-56">
                    <Image src={t.image} alt={t.author} fill className="object-cover object-top" />
                  </div>
                )}
                <div className="p-7 sm:p-8 flex flex-col flex-grow">
                  <h3 className="font-bold text-navy text-lg mb-3">{t.author}</h3>
                  <p className="text-navy/60 leading-relaxed text-[15px] flex-grow">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
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

      <ContactSection contactPerson={contact} />
    </>
  );
}
