import Image from '@/components/SafeImage';

export interface OfferItem {
  title: string;
  icon: string;
  text: string;
}

function OfferList({ title, items }: { title: string; items: OfferItem[] }) {
  return (
    <div className="rounded-2xl bg-gray-50/80 border border-gray-100 p-7 sm:p-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-navy">{title}</h2>
      <div className="section-divider mt-4" />
      <ul className="mt-8 space-y-7">
        {items.map((item) => (
          <li key={item.title} className="flex gap-5">
            <span className="flex-shrink-0 w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center">
              <Image src={item.icon} alt="" width={30} height={30} />
            </span>
            <div>
              <h3 className="text-xl font-bold text-navy">{item.title}</h3>
              <p className="mt-1 text-[16px] text-navy/70 leading-relaxed">{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** "What we offer" (left) and "What we expect" (right), side by side */
export default function OfferExpect({ offer, expect }: { offer: OfferItem[]; expect: OfferItem[] }) {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <OfferList title="What we offer" items={offer} />
        <OfferList title="What we expect" items={expect} />
      </div>
    </section>
  );
}
