import Image from '@/components/SafeImage';
import { BoardMember } from '@/data/team';

interface BoardGridProps {
  members: BoardMember[];
}

export default function BoardGrid({ members }: BoardGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 justify-items-center">
      {members.map((member) => (
        <div key={member.name} className="group text-center max-w-[200px]">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-transparent group-hover:ring-orange/30 transition-all duration-300">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
            />
          </div>
          <p className="font-semibold text-navy text-sm sm:text-[15px]">{member.name}</p>
          <p className="text-navy/50 text-xs sm:text-sm mt-0.5">{member.title}</p>
        </div>
      ))}
    </div>
  );
}
