import type { Metadata } from 'next';
import Image from '@/components/SafeImage';
import ContactSection from '@/components/ContactSection';
import CountdownTimer from '@/components/CountdownTimer';
import ProjectTimeline from '@/components/ProjectTimeline';
import { getContactPerson } from '@/data/team';
import { asset } from '@/lib/assetPath';

export const metadata: Metadata = {
  title: 'Join Us',
  description: 'Become part of the Maastricht Student Consulting team.',
};

const applicationSteps = [
  {
    title: 'Write your application',
    description: 'This includes a Motivation Letter, your CV and a Grade Transcript (incl. your official GPA).',
    icon: '/images/icons/clipboard.svg',
  },
  {
    title: 'Upload it to MSC',
    description: 'When the application window opens, click on the link icon to be redirected to the upload file for your documents. The link is also accessible on our Instagram.',
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

export default function JoinPage() {
  const contact = getContactPerson('join');

  return (
    <>
      {/* Half-screen hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${asset('/images/hero-board-1.jpg')})` }}
        />
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
            <Image src="/images/msc-logo-big.png" alt="MSC" width={80} height={80} className="flex-shrink-0" />
            <div className="flex-grow h-px bg-navy/20" />
          </div>
          <p className="text-lg sm:text-xl leading-[1.8] text-navy/70 text-center">
            At MSC, we believe in the power of diversity and inclusivity, embracing talents from all faculties
            and study years at Maastricht University. We are on the lookout for exceptional individuals who are
            eager to push boundaries and go the extra mile.
          </p>
        </div>
      </section>

      {/* Application Status + Countdown + Talent Pool */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${asset('/images/become-team-new.jpg')})` }}
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Become part of our team!</h2>
          <p className="text-lg text-white/70 font-medium mb-12">Applications open soon!</p>

          <CountdownTimer />

          <div className="mt-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Join our Talent Pool!</h3>
            <a
              href="https://share.hsforms.com/1yHE7gOeARfCHRoYV-gvY7Qbw4n1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
              Talent Pool
            </a>
          </div>
        </div>
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

      <ContactSection contactPerson={contact} />
    </>
  );
}
