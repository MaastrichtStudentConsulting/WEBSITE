import type { Metadata } from 'next';
import Image from '@/components/SafeImage';
import ContactSection from '@/components/ContactSection';
import FloatingContact from '@/components/FloatingContact';
import ApplicationCTA from '@/components/ApplicationCTA';
import StudentQA from '@/components/StudentQA';
import AddToCalendar from '@/components/AddToCalendar';
import OfferExpect from '@/components/OfferExpect';
import EventSlider from '@/components/EventSlider';
import { studentInsights } from '@/data/clients';
import { INFO_NIGHT, OPENING_LABEL } from '@/data/recruitment';
import ProjectTimeline from '@/components/ProjectTimeline';
import ParallaxHero from '@/components/ParallaxHero';
import { getContactPerson } from '@/data/team';

export const metadata: Metadata = {
  title: 'Join Us',
  description: 'Become part of the Maastricht Student Consulting team.',
};

const applicationSteps = [
  {
    title: 'Attend our Info Night',
    description: `Join our Info Night on ${INFO_NIGHT.dateLabel} to learn more about MSC and to meet our current consultants.`,
    icon: '/images/icons/chat-bubble.svg',
  },
  {
    title: 'Write your application',
    description: 'This includes a Motivation Letter, your CV and a Grade Transcript (incl. your official GPA).',
    icon: '/images/icons/clipboard.svg',
  },
  {
    title: 'Upload it to MSC',
    description: `Applications open on ${OPENING_LABEL}. Click "Apply now" on this page to submit your documents. The link is also shared on our Instagram.`,
    icon: '/images/icons/send4.svg',
  },
  {
    title: 'Assessment Center',
    description: 'Prove that you belong to MSC in an interview consisting of two parts; personal fit and a case study.',
    icon: '/images/icons/presentation.svg',
  },
  {
    title: 'Welcome to MSC',
    description: "We will inform you about the results, once all of the period's interviews have been conducted.",
    icon: '/images/icons/contract.svg',
  },
];

const roles = [
  {
    title: 'Consultant',
    text: 'Apply your academic knowledge to real-life business challenges and work on impactful projects for our clients in teams of 4–8 students.',
  },
  {
    title: 'Marketing / PR Strategist',
    text: "Shape MSC's communication, branding and content creation, from our social media presence to events and campaigns.",
  },
];

const whatWeOffer = [
  {
    title: 'Real projects',
    icon: '/images/icons/book.svg',
    text: 'Work in small teams on real business cases for companies like Siemens, SAP and Rheinmetall – from the first client meeting to the final presentation.',
  },
  {
    title: 'Workshops',
    icon: '/images/icons/presentation.svg',
    text: 'Case trainings and workshops with partners like BCG, Simon-Kucher and Inverto – and first contacts for your future career.',
  },
  {
    title: 'A team for life',
    icon: '/images/icons/people.svg',
    text: 'Trips, dinners and socials with a close-knit team – and an alumni network at leading firms across Europe.',
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

export default function JoinPage() {
  const contact = getContactPerson('join');

  return (
    <>
      {/* Half-screen hero */}
      <section className="relative h-[85vh] min-h-[520px] max-h-[1000px] flex items-center overflow-hidden">
        <ParallaxHero src="/images/team/board-walking-2.jpg" className="object-[center_60%] origin-bottom" />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] max-w-3xl">
            Become part of our team.
          </h1>
        </div>
      </section>

      {/* Roles + Info Night */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Open Positions</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 md:divide-x md:divide-navy/10">
            {roles.map((role) => (
              <div key={role.title} className="text-center md:px-10">
                <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3">{role.title}</h3>
                <p className="text-navy/65 leading-relaxed text-[15px]">{role.text}</p>
              </div>
            ))}
          </div>

          <div id="info-night" className="mt-14 scroll-mt-28 rounded-xl bg-gray-50 border border-gray-100 p-7 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
            <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-white border border-gray-200 text-navy flex flex-col items-center justify-center leading-none">
              <span className="text-[11px] font-bold uppercase tracking-widest text-orange">Nov</span>
              <span className="text-3xl font-bold mt-1">2</span>
            </div>
            <div className="flex-grow">
              <p className="text-orange text-xs font-bold uppercase tracking-[0.18em] mb-1">Info Night</p>
              <h3 className="text-xl sm:text-2xl font-bold text-navy">{INFO_NIGHT.dateLabel}</h3>
              <p className="text-navy/55 text-sm mt-1">{INFO_NIGHT.location}</p>
              <p className="text-navy/70 mt-3 leading-relaxed text-[15px]">
                Get to know MSC, meet current members and ask all your questions before applying.
              </p>
              <div className="mt-5">
                <AddToCalendar />
              </div>
            </div>
          </div>

          {/* Instagram: hiring updates */}
          <a
            href="https://instagram.com/maastrichtstudentconsulting"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 rounded-xl border border-gray-100 bg-white p-6 sm:px-8 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 hover:shadow-md transition-shadow"
          >
            <span className="flex-shrink-0 w-20 h-20 rounded-xl bg-white border border-gray-200 text-navy flex items-center justify-center">
              <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </span>
            <span className="flex-grow">
              <span className="block text-navy/50 text-xs font-bold uppercase tracking-[0.18em] mb-1">Stay up to date</span>
              <span className="block text-xl sm:text-2xl font-bold text-navy">Hiring news first on Instagram</span>
              <span className="block text-navy/70 mt-2 leading-relaxed text-[15px]">
                Info Night location, application start and everything about recruiting is posted on our Instagram.
              </span>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-orange transition-colors">
                @maastrichtstudentconsulting →
              </span>
            </span>
          </a>
        </div>
      </section>

      {/* Application Status + Countdown + Talent Pool */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden" id="apply">
        <Image
          src="/images/become-team-new.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/40 to-black/60" />

        <ApplicationCTA />
      </section>

      {/* What it's like to be at MSC */}
      <section className="py-20 sm:py-28 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">What it&apos;s like to be at MSC</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <EventSlider events={studentInsights} />
        </div>
      </section>

      {/* What We Offer + What We Expect */}
      <OfferExpect offer={whatWeOffer} expect={whatWeExpect} />

      {/* Application Procedure */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Application Procedure</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <ProjectTimeline steps={applicationSteps} />
        </div>
      </section>

      <StudentQA />

      <ContactSection
        contactPerson={contact}
        form={{
          subject: 'Question about joining MSC (via the website)',
          heading: 'Any questions?',
          intro: 'Ask us anything about MSC, the Info Night or the application – we are happy to help.',
          messagePlaceholder: 'Your question',
          studyField: true,
        }}
      />

      <FloatingContact title="Any questions?" subtitle="Ask us directly" />
    </>
  );
}
