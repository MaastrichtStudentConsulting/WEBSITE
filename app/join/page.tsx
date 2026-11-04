import type { Metadata } from 'next';
import Image from '@/components/SafeImage';
import ContactSection from '@/components/ContactSection';
import FloatingContact from '@/components/FloatingContact';
import ApplicationCTA from '@/components/ApplicationCTA';
import StudentQA from '@/components/StudentQA';
import CaseSimulation from '@/components/CaseSimulation';
import OfferExpect from '@/components/OfferExpect';
import EventSlider from '@/components/EventSlider';
import { studentInsights } from '@/data/clients';
import { CLOSING_LABEL } from '@/data/recruitment';
import ProjectTimeline from '@/components/ProjectTimeline';
import ParallaxHero from '@/components/ParallaxHero';
import { getContactPerson, MEMBER_COUNT } from '@/data/team';

export const metadata: Metadata = {
  title: 'Join Us',
  description: 'Become part of the Maastricht Student Consulting team.',
};

const applicationSteps = [
  {
    title: 'Get to know MSC',
    description: 'Try our case simulation to see what 8 weeks on an MSC project look like, and meet our members at our workshops and events.',
    icon: '/images/icons/chat-bubble.svg',
  },
  {
    title: 'Write your application',
    description: 'This includes a Motivation Letter, your CV and a Grade Transcript (incl. your official GPA).',
    icon: '/images/icons/clipboard.svg',
  },
  {
    title: 'Upload it to MSC',
    description: `Applications are open until the ${CLOSING_LABEL}. Click "Apply now" on this page to submit your documents.`,
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
    title: 'PR Strategist',
    text: "Shape MSC's communication, branding and content creation, from our social media presence to events and campaigns.",
  },
];

const whatWeOffer = [
  {
    title: 'Real projects',
    icon: '/images/icons/book.svg',
    text: 'Work in small teams on real business cases for companies like Siemens, SAP and Qiagen – from the first client meeting to the final presentation.',
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
      <section className="relative h-[85vh] min-h-[520px] max-h-[1000px] flex items-end overflow-hidden">
        <ParallaxHero src="/images/team/team-field-2026-v2.jpg" alt="The MSC team" className="object-[center_70%] origin-bottom" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-navy/30" />
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-8 pb-14 sm:pb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15]">
            {MEMBER_COUNT} Consultants.<br />One Team.
          </h1>
        </div>
      </section>

      {/* Open positions */}
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

      {/* Case simulation: 8 weeks at MSC */}
      <CaseSimulation />

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
          intro: 'Ask us anything about MSC or the application – we are happy to help.',
          messagePlaceholder: 'Your question',
          studyField: true,
        }}
      />

      <FloatingContact title="Any questions?" subtitle="Ask us directly" />
    </>
  );
}
