import type { Metadata } from 'next';
import Image from '@/components/SafeImage';
import ContactSection from '@/components/ContactSection';
import ApplicationCTA from '@/components/ApplicationCTA';
import StudentQA from '@/components/StudentQA';
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
    team: 'Consulting Team',
    title: 'Consultant',
    text: 'Apply your academic knowledge to real-life business challenges and work on impactful projects for our clients in teams of 4–8 students.',
  },
  {
    team: 'Marketing Team',
    title: 'Marketing / PR Strategist',
    text: "Shape MSC's communication, branding and content creation, from our social media presence to events and campaigns.",
  },
];

export default function JoinPage() {
  const contact = getContactPerson('join');

  return (
    <>
      {/* Half-screen hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <ParallaxHero src="/images/hero-board-1.jpg" />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] max-w-3xl">
            Become part of our team.
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
            At MSC, we believe in the power of diversity and inclusivity, embracing talents from all faculties
            and study years at Maastricht University. We are on the lookout for exceptional individuals who are
            eager to push boundaries and go the extra mile.
          </p>
        </div>
      </section>

      {/* Roles + Info Night */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Open Positions</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.map((role) => (
              <div key={role.title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 sm:p-8 border-t-4 border-t-orange">
                <p className="text-orange text-xs font-bold uppercase tracking-[0.18em] mb-2">{role.team}</p>
                <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3">{role.title}</h3>
                <p className="text-navy/65 leading-relaxed text-[15px]">{role.text}</p>
              </div>
            ))}
          </div>

          <div id="info-night" className="mt-6 scroll-mt-28 rounded-xl bg-navy text-white p-7 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
            <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-white text-navy flex flex-col items-center justify-center leading-none">
              <span className="text-[11px] font-bold uppercase tracking-widest text-orange">Nov</span>
              <span className="text-3xl font-bold mt-1">2</span>
            </div>
            <div className="flex-grow">
              <p className="text-orange text-xs font-bold uppercase tracking-[0.18em] mb-1">Info Night</p>
              <h3 className="text-xl sm:text-2xl font-bold">{INFO_NIGHT.dateLabel}</h3>
              <p className="text-white/70 text-sm mt-1">{INFO_NIGHT.location}</p>
              <p className="text-white/85 mt-3 leading-relaxed text-[15px]">
                Get to know MSC, meet current members and ask all your questions before applying.
              </p>
            </div>
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/30 to-black/55" />

        <ApplicationCTA />
      </section>

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

      <ContactSection contactPerson={contact} />
    </>
  );
}
