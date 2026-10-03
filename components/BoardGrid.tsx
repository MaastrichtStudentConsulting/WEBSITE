import Image from '@/components/SafeImage';
import { BoardMember } from '@/data/team';

interface BoardGridProps {
  members: BoardMember[];
}

function LinkedInIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function PhoneIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function MailIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

export default function BoardGrid({ members }: BoardGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 justify-items-center">
      {members.map((member) => (
        <div key={member.name} className="group text-center max-w-[200px] outline-none" tabIndex={0}>
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 xl:w-44 xl:h-44 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-transparent group-hover:ring-orange/40 group-focus-within:ring-orange/40 transition-all duration-300">
            <Image
              src={member.image}
              alt={member.name}
              fill
              quality={100}
              sizes="(max-width: 640px) 40vw, (max-width: 1024px) 22vw, 180px"
              className={`object-cover transition-transform duration-500 group-hover:scale-[1.04] ${member.imageClassName ?? ''}`}
            />

            {/* Contact overlay on hover / tap */}
            <div className="absolute inset-0 bg-navy/85 flex flex-col items-center justify-center gap-2 px-3 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300">
              {member.phone && (
                <a
                  href={`tel:${member.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-1.5 text-white text-[11px] sm:text-xs font-semibold hover:text-orange transition-colors whitespace-nowrap"
                >
                  <PhoneIcon className="w-3.5 h-3.5 flex-shrink-0" />
                  {member.phone}
                </a>
              )}
              <div className="flex items-center gap-2 mt-1">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="w-9 h-9 rounded-full bg-white text-navy flex items-center justify-center hover:bg-orange hover:text-white transition-colors"
                  >
                    <LinkedInIcon />
                  </a>
                )}
                <a
                  href={`mailto:${member.email}`}
                  aria-label={`Email ${member.name}`}
                  className="w-9 h-9 rounded-full bg-white text-navy flex items-center justify-center hover:bg-orange hover:text-white transition-colors"
                >
                  <MailIcon />
                </a>
              </div>
            </div>
          </div>
          <p className="font-semibold text-navy text-xs sm:text-[15px] leading-tight">{member.name}</p>
          <p className="text-navy/50 text-[10px] sm:text-sm mt-0.5 leading-tight">{member.title}</p>
        </div>
      ))}
    </div>
  );
}
