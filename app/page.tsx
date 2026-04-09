import Link from 'next/link';
import Image from '@/components/SafeImage';
import HeroSection from '@/components/HeroSection';
import BoardGrid from '@/components/BoardGrid';
import ReferenceCard from '@/components/ReferenceCard';
import { boardMembers } from '@/data/team';
import { homeReferences } from '@/data/testimonials';

const cards = [
  {
    title: 'Clients',
    image: '/images/hero-board-2.jpg',
    href: '/clients',
    text: 'MSC provides advisory for start-ups, small to medium sized enterprises and corporate business units. Our mission is to deliver thoughtful, creative and out of the box solutions that help your business achieve long-term improvement.',
    imageClassName: '!-left-[5%] !-right-[31%] !w-[136%] !max-w-none',
  },
  {
    title: 'Partners',
    image: '/images/card-partners.jpg',
    href: '/partners',
    text: "Helping our partners achieve better visibility in their industry is an integral part of our mission. Through workshops and other relevant and customised events, you will have an unmatched opportunity to reach Maastricht's most talented pool of students.",
    imageClassName: '',
  },
  {
    title: 'Students',
    image: '/images/card-students.png',
    href: '/students',
    text: 'As a top-tier student with an inquiring mind, you are always looking for ways to take your knowledge further? Discover the practical side of your academic knowledge and join us as a student consultant. With MSC, your education has real-life value.',
    imageClassName: '',
  },
];

const services = [
  {
    title: 'Marketing',
    icon: '/images/icons/megaphone.svg',
    text: 'More than ever, organizations aim to distinguish themselves from the crowded, competitive market. With our marketing services we help you establish new market trends and provide you with innovative solutions to strengthen the relationship to your customer.',
  },
  {
    title: 'Operations',
    icon: '/images/icons/gears.svg',
    text: 'In order to be efficient and generate value, corporate processes must be frequently evaluated. With our operations services we analyse critical processes in your company and help you transform a high-level strategy into actionable steps.',
  },
  {
    title: 'Strategy & Organisations',
    icon: '/images/icons/presentation.svg',
    text: 'Thriving in an increasingly competitive environment requires the regular evaluation of your business strategy. With our Strategy & Organisation services we help businesses adapt to new challenges and pave the way for long-term growth.',
  },
];

const refLabels = ['Client', 'Partner', 'Student'];
const refLinks = ['/clients', '/partners', '/students'];

export default function HomePage() {
  return (
    <>
      <HeroSection heading="Be inspired by the next generation." video showStats />

      {/* Intro */}
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-lg sm:text-xl leading-[1.8] text-navy/70">
            Maastricht Student Consulting is a young student consultancy comprised of ambitious students
            from Maastricht University. Our team is driven by a sense of community, purpose, ambition,
            and the willingness to turn our vision into real change within the consulting world and beyond.
            As the next generation we want to grow by helping you succeed today and thrive tomorrow!
          </p>
        </div>
      </section>

      {/* Three Cards */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {cards.map((card) => (
              <div
                key={card.title}
                className="group relative aspect-[3/4] rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className={`object-cover ${card.imageClassName ?? ''}`}
                />
                {/* Default state: gradient + title */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-0" />
                <h3 className="absolute bottom-8 left-8 text-3xl sm:text-4xl font-bold text-white transition-opacity duration-300 group-hover:opacity-0">
                  {card.title}
                </h3>

                {/* Hover state: overlay with text */}
                <div className="absolute inset-0 bg-navy/80 flex flex-col items-center justify-center px-8 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-5">{card.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">{card.text}</p>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1.5 border-2 border-white text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-white hover:text-navy transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Services</h2>
          </div>
          <p className="text-center text-navy/60 max-w-4xl mx-auto leading-relaxed mb-14">
            Since 2014 we have been advising and inspiring more than 150 clients worldwide. In every
            interaction, we put our clients needs and goals first and keep communication channels open.
            We can offer you services in the areas of strategy development, marketing, finance, HR and
            market research, among many others.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-10 sm:p-12 text-center border border-gray-100">
                <div className="flex justify-center mb-6">
                  <Image src={service.icon} alt={service.title} width={80} height={80} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-5">{service.title}</h3>
                <p className="text-navy/60 leading-relaxed text-[15px] text-justify">{service.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/clients"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy/90 text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-colors"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Our References</h2>
            <p className="mt-6 text-navy/60 max-w-4xl mx-auto leading-relaxed">
              Our stakeholders are an integral part of our success. Therefore, we are always keen on
              meeting new partners that share our values of intellectual curiosity, openness, and dedication.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {homeReferences.map((ref, i) => (
              <ReferenceCard
                key={ref.author}
                testimonial={ref}
                label={`${refLabels[i]} References`}
                href={refLinks[i]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-20 sm:py-28 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Meet our Management Team
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <BoardGrid members={boardMembers} />
          <p className="text-center text-navy/50 mt-12 max-w-2xl mx-auto italic">
            As the board of Maastricht Student Consulting we are looking forward to getting in touch with you.
          </p>
        </div>
      </section>

      {/* ContactSection removed — footer handles contact info */}
    </>
  );
}
