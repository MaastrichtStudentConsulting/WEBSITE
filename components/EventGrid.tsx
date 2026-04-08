import Image from '@/components/SafeImage';
import { EventItem } from '@/data/clients';

interface EventGridProps {
  events: EventItem[];
}

export default function EventGrid({ events }: EventGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <div
          key={event.title}
          className="group bg-white rounded-lg overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-md transition-shadow duration-300"
        >
          <div className="relative h-52 bg-gray-50 overflow-hidden">
            {event.image ? (
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-navy/[0.03]">
                <span className="text-navy/20 text-sm">Photo</span>
              </div>
            )}
          </div>
          <div className="p-6">
            <h3 className="font-bold text-navy mb-2 text-[15px]">{event.title}</h3>
            <p className="text-navy/60 text-sm leading-relaxed">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
