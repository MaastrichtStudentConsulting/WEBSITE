import type { Metadata } from 'next';
import Image from '@/components/SafeImage';
import ContactSection from '@/components/ContactSection';
import TestimonialSlider from '@/components/TestimonialSlider';
import LogoGrid from '@/components/LogoGrid';
import ServiceGrid from '@/components/ServiceGrid';
import ProjectTimeline from '@/components/ProjectTimeline';
import { getContactPerson } from '@/data/team';
import { clientTestimonials } from '@/data/testimonials';
import { clientLogos } from '@/data/clients';

export const metadata: Metadata = {
  title: 'Clients',
  description: 'Helping you succeed since 2014. MSC delivers innovative, tailor-made consulting solutions.',
};

const values = [
  {
    title: 'Customer Centricity',
    text: 'We value productive and long-lasting relationships with our clients, as we believe that those ties form the basis of success. In every interaction, we put your needs and goals first and keep communication channels open. Your satisfaction is our benchmark for quality.',
  },
  {
    title: 'Innovation',
    text: 'We are committed to using our theoretical and practical know-how in innovative ways that give your company a competitive edge. Our diligent team understands the real-world value of strategic innovation and we are keen on incorporating that vision into the solutions we offer.',
  },
  {
    title: 'Cost-effectiveness',
    text: 'We believe that our clients should never have to choose between competitive fees and outstanding value. All our consulting services are designed to offer the best possible price-performance ratio. We deliver high-quality results while keeping costs transparent and fair.',
  },
];

const services = [
  {
    title: 'Marketing',
    icon: '/images/icons/megaphone.svg',
    image: '/images/marketing/Photo.jpg',
    text: 'In an increasingly competitive market, success belongs to organisations that distinguish themselves from the rest through exceptional brand awareness. This highlights the need for investing in a sound marketing strategy that positions your brand top of mind.',
  },
  {
    title: 'Operations',
    icon: '/images/icons/gears.svg',
    image: '/images/marketing/Photo-9.jpg',
    text: "Operations are at the crossroads between organizational strategy and sustainable growth. Effective operations management is the key that unlocks your organization's full competitive potential.",
  },
  {
    title: 'Sustainability',
    icon: '/images/icons/leaf-lightbulb.svg',
    image: '/images/background.jpg',
    text: 'Environmental, social, and corporate governance criteria are becoming increasingly relevant in the global business scene. As a result, companies are subject to a growing range of ethical and regulatory requirements that have an effect on business models and corporate operations.',
  },
  {
    title: 'Strategy and Organization',
    icon: '/images/icons/darts.svg',
    image: '/images/marketing/Photo-15-skaliert.jpg',
    text: 'Globalisation and digitalisation have brought a profound transformation to global markets. As a result, businesses are exposed to an increasingly competitive and dynamic environment.',
  },
  {
    title: 'Human Resources',
    icon: '/images/icons/people.svg',
    image: '/images/marketing/Photo-2.jpg',
    text: 'Human capital is one of the most valuable assets any company could have. However, for optimal results, human resources should be strategically managed.',
  },
];

const projectCycleSteps = [
  {
    title: 'Initial Contact',
    description: "You can expect transparent and real-time communication from the first moment you contact us. Send us your enquiry and we'll follow up by scheduling an in-person or online meeting at your convenience.",
    icon: '/images/icons/clipboard.svg',
  },
  {
    title: 'First meeting',
    description: 'The first meeting is a two-way conversation geared towards fully understanding your current needs, expectations, and situation. During the meeting, we also provide an overview of our services and of successfully completed projects.',
    icon: '/images/icons/telescope.svg',
  },
  {
    title: 'Proposal development',
    description: 'After gaining an accurate picture of your needs, our consultants will elaborate a tailor-made solution and present it as a project-based proposal. Every project is designed to offer the utmost value to your business and to clearly outline how working with us can help address pain points and take your business to the next level.',
    icon: '/images/icons/contract.svg',
  },
  {
    title: 'Project staffing',
    description: 'After signing a contract and the required non-disclosure agreements, we allocate the assignment to a select team of qualified consultants committed to ensuring that the project is professionally executed as per the agreed deliverables.',
    icon: '/images/icons/people.svg',
  },
  {
    title: 'Project execution',
    description: "During the eight-week project, you'll have direct access to a project leader, who will arrange an initial meeting to discuss project goals and how they will be reached. Projects are executed following an iterative feedback process, during which we keep you updated about our progress and findings with detailed mid-project and end-of-project presentations.",
    icon: '/images/icons/chat-bubble.svg',
  },
  {
    title: 'Project finalization & feedback',
    description: 'Because we aim to continuously improve our standards of service, we conduct a follow-up evaluation and feedback session upon completion of each project.',
    icon: '/images/icons/magnifier.svg',
  },
];

export default function ClientsPage() {
  const contact = getContactPerson('clients');

  return (
    <>
      {/* Half-screen hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <Image
          src="/images/hero-board-standing.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] max-w-3xl">
            Helping you succeed since 2014.
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
            Since 2014 our mission is to provide a solid link between academic expertise and industry needs.
            We deliver innovative and tailor-made solutions that help our clients overcome crucial challenges.
          </p>
        </div>
      </section>

      {/* Project Values */}
      <section className="py-20 sm:py-28 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Project Values</h2>
            <div className="section-divider mx-auto mt-4" />
            <p className="mt-6 text-navy/60">Our ethos and services revolve around three cornerstone values:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-lg p-7 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-gray-100">
                <h3 className="text-lg font-bold text-navy mb-3">{v.title}</h3>
                <div className="w-8 h-0.5 bg-orange/50 mb-4" />
                <p className="text-navy/60 leading-relaxed text-[15px]">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Services</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <ServiceGrid services={services} />
        </div>
      </section>

      {/* Project Cycle */}
      <section className="py-20 sm:py-28 bg-gray-50/80">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Project Cycle</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <ProjectTimeline
            intro="To start off, the management team will meet with you and discuss your specific requirements. We will then formulate the objectives of our cooperation and draw up a project offer, taking into account your specifications. A contract and specific non-disclosure agreements will be signed. Kicking off the project work, the project leader will contact you and schedule a first meeting with your team. Throughout the project you will communicate with the project leader, who will update you regularly about the progress of the project. The project concludes with a final meeting, in which the team presents its findings and the deliverable."
            steps={projectCycleSteps}
          />
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Our Clients</h2>
            <div className="section-divider mx-auto mt-4" />
            <p className="mt-6 text-navy/60">
              We work together with companies in many different industries ranging from start-ups to multinational corporations.
            </p>
          </div>
          <LogoGrid logos={clientLogos} largerLogos={['Rheinmetall', 'Oqema', 'Philips']} />
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider testimonials={clientTestimonials} />

      <ContactSection contactPerson={contact} />
    </>
  );
}
