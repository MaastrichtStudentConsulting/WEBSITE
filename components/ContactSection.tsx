import Image from '@/components/SafeImage';
import { BoardMember } from '@/data/team';

interface ContactSectionProps {
  contactPerson: BoardMember;
}

export default function ContactSection({ contactPerson }: ContactSectionProps) {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">Contact Us</h2>
          <div className="section-divider mx-auto mt-4" />
          <p className="mt-6 text-navy/60 max-w-2xl mx-auto">
            Have a question or want to work with us? Reach out to our team directly.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-row max-w-2xl w-full">
            <div className="relative w-48 sm:w-56 min-h-[240px] flex-shrink-0">
              <Image
                src={contactPerson.image}
                alt={contactPerson.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-8 flex flex-col justify-center min-w-0">
              <p className="font-bold text-navy text-base sm:text-lg">{contactPerson.name}</p>
              <p className="text-navy/60 text-xs sm:text-sm mb-4 sm:mb-5 leading-tight">{contactPerson.title}</p>
              <div className="flex sm:flex-col gap-4 sm:gap-3">
                <a
                  href={`mailto:${contactPerson.email}`}
                  className="inline-flex items-center gap-3 text-navy/70 hover:text-navy transition-colors text-sm"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span className="hidden sm:inline truncate">{contactPerson.email}</span>
                </a>
                {contactPerson.linkedin && (
                  <a
                    href={contactPerson.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-navy/70 hover:text-navy transition-colors text-sm"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="hidden sm:inline">LinkedIn</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
