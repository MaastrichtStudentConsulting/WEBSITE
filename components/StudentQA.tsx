'use client';

import { useState, type ReactNode } from 'react';
import { HR_EMAIL } from '@/data/recruitment';

/* Heroicons (outline) paths */
const icons: Record<string, string> = {
  users:
    'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z',
  briefcase:
    'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0',
  team:
    'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z',
  clock: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
  bulb:
    'M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18',
  cap:
    'M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5',
  star:
    'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z',
  chart:
    'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941',
};

function Icon({ name }: { name: string }) {
  return (
    <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-navy text-white flex items-center justify-center">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d={icons[name]} />
      </svg>
    </span>
  );
}

const P = ({ children }: { children: ReactNode }) => <p className="mb-3 last:mb-0">{children}</p>;

const faqs: { q: string; icon: string; a: ReactNode }[] = [
  {
    q: 'Who can apply?',
    icon: 'users',
    a: (
      <P>
        Students from all faculties and study years at Maastricht University are welcome to apply. Our team
        brings together ambitious Bachelor&apos;s and Master&apos;s students from diverse academic and personal
        backgrounds.
      </P>
    ),
  },
  {
    q: 'Do I need previous consulting experience?',
    icon: 'briefcase',
    a: (
      <>
        <P>
          Previous consulting experience is not required. We are looking for ambitious and motivated students who
          are eager to learn, take responsibility and contribute to the team.
        </P>
        <P>
          Analytical thinking, a professional mindset, reliability and a strong team spirit are more important
          than previous consulting experience. We value applicants who are willing to challenge themselves, think
          critically and go the extra mile.
        </P>
      </>
    ),
  },
  {
    q: 'What positions and teams can I join?',
    icon: 'team',
    a: (
      <>
        <P>Students can apply to join our Consulting Team or our Marketing Team.</P>
        <P>
          As a Consultant, you apply your academic knowledge to real-life business challenges and work on
          impactful projects for our clients. As a Marketing Strategist, you contribute to MSC&apos;s
          communication, branding and content creation.
        </P>
      </>
    ),
  },
  {
    q: 'How much time should I expect to commit?',
    icon: 'clock',
    a: (
      <>
        <P>
          Members should expect to dedicate approximately 7–10 hours per week to MSC. The exact workload depends on
          your role, team responsibilities and the stage of the project.
        </P>
        <P>
          While we expect reliability, personal responsibility and high-quality work, we also understand the
          importance of maintaining a healthy balance alongside your studies.
        </P>
      </>
    ),
  },
  {
    q: 'What are your tips for applicants?',
    icon: 'bulb',
    a: (
      <>
        <P>
          Take the opportunity to get to know MSC before submitting your application. Attend our Info Night to
          learn more about the organisation and meet current members. Our workshops and case events can also give
          you a first impression of consulting, collaborative problem-solving and the type of challenges our teams
          work on.
        </P>
        <P>During the application process:</P>
        <ul className="list-disc pl-5 space-y-1">
          <li>Be yourself and communicate your motivation authentically.</li>
          <li>Explain why you want to join MSC and what you would bring to the organisation.</li>
          <li>Highlight situations in which you have taken responsibility or contributed to a team.</li>
          <li>Prepare for the case study by practising how to structure a problem and communicate your reasoning clearly.</li>
          <li>Be ready to demonstrate both your personal fit and your analytical approach.</li>
        </ul>
      </>
    ),
  },
  {
    q: 'What training and support will I receive?',
    icon: 'cap',
    a: (
      <>
        <P>
          Members develop their skills through hands-on project work, workshops hosted by clients and industry
          professionals, and close collaboration within their teams.
        </P>
        <P>
          Throughout your time at MSC, you will receive regular feedback from your Project Leaders and other
          experienced members. This allows you to reflect on your performance, build on your strengths and
          consistently improve your analytical, communication, teamwork and project-management skills.
        </P>
      </>
    ),
  },
  {
    q: 'What are the main benefits of joining MSC?',
    icon: 'star',
    a: (
      <>
        <P>
          By joining MSC, you gain hands-on consulting experience, develop valuable professional skills and apply
          your academic knowledge to real-life business challenges.
        </P>
        <P>
          You will also gain access to exclusive workshops, career opportunities and a close-knit community of
          ambitious students and alumni.
        </P>
      </>
    ),
  },
  {
    q: 'How can I grow within MSC?',
    icon: 'chart',
    a: (
      <>
        <P>
          MSC gives committed members the opportunity to take on increasing responsibility within the
          organisation. Depending on your performance, experience and involvement, you may progress from working
          as a Consultant to leading a client project as a Project Leader.
        </P>
        <P>
          Members may also contribute to internal functions such as Business Development, External Relations or
          Human Resources. Experienced members can later apply for leadership or board positions, including Head
          of Department roles.
        </P>
      </>
    ),
  },
];

export default function StudentQA() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28 bg-gray-50/80" id="faq">
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">Student Q&amp;A</h2>
          <div className="section-divider mx-auto mt-4" />
          <p className="mt-6 text-navy/60">Everything you may want to know before applying.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-4 px-4 sm:px-5 py-4 text-left hover:bg-gray-50/60 transition-colors"
                >
                  <Icon name={item.icon} />
                  <span className="flex-grow font-semibold text-navy text-[15px] sm:text-base">{item.q}</span>
                  <span
                    className={`flex-shrink-0 text-2xl leading-none font-light text-navy/70 transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-5 pb-5 sm:pl-[4.25rem] text-navy/70 text-[15px] leading-relaxed">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex items-center gap-5 bg-white rounded-xl border border-gray-100 p-5 sm:p-6">
          <span className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-navy/20 text-navy flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </span>
          <div>
            <p className="font-bold text-navy">Still have questions?</p>
            <p className="text-navy/60 text-sm sm:text-[15px] mt-0.5">
              Write to us at{' '}
              <a href={`mailto:${HR_EMAIL}?subject=Question%20about%20the%20application`} className="underline underline-offset-2 hover:text-orange break-all">
                {HR_EMAIL}
              </a>{' '}
              or visit our{' '}
              <a href="#info-night" className="underline underline-offset-2 hover:text-orange">
                Info Night
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
