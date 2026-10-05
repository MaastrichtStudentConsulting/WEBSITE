import type { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';
import TestimonialSlider from '@/components/TestimonialSlider';
import LogoMarquee from '@/components/LogoMarquee';
import ServiceGrid from '@/components/ServiceGrid';
import ProjectCards from '@/components/ProjectCards';
import ProjectTimeline from '@/components/ProjectTimeline';
import ParallaxHero from '@/components/ParallaxHero';
import FloatingContact from '@/components/FloatingContact';
import { getContactPerson } from '@/data/team';
import { clientTestimonials } from '@/data/testimonials';
import { clientLogos } from '@/data/clients';

export const metadata: Metadata = {
  title: 'Clients',
  description: 'Helping you succeed since 2014. MSC delivers innovative, tailor-made consulting solutions.',
};

const services = [
  {
    title: 'AI & Automation',
    icon: '/images/icons/ai-chip.svg',
    image: '/images/marketing/header_bg.jpg',
    text: 'AI is changing how companies operate. We identify where AI creates real value in your business, map and optimise your processes, and support you in implementing AI projects – from the first use case to a working solution in day-to-day operations.',
  },
  {
    title: 'Mergers & Acquisitions',
    icon: '/images/icons/merge.svg',
    image: '/images/marketing/Photo.jpg',
    text: 'We support buy-side and sell-side mandates on a European-wide basis. From market screening and long-list building to target and buyer identification and structured outreach, we give you a solid, data-driven foundation for every transaction.',
  },
  {
    title: 'Marketing',
    icon: '/images/icons/megaphone.svg',
    image: '/images/marketing/Marketing.jpg',
    text: 'In an increasingly competitive market, success belongs to organisations that distinguish themselves from the rest through exceptional brand awareness. This highlights the need for investing in a sound marketing strategy that positions your brand top of mind.',
  },
  {
    title: 'Operations',
    icon: '/images/icons/gears.svg',
    image: '/images/marketing/Operations.jpg',
    text: "Operations are at the crossroads between organizational strategy and sustainable growth. Effective operations management is the key that unlocks your organization's full competitive potential.",
  },
  {
    title: 'Sustainability',
    icon: '/images/icons/leaf-lightbulb.svg',
    image: '/images/marketing/Sustainability.jpg',
    text: 'Environmental, social, and corporate governance criteria are becoming increasingly relevant in the global business scene. As a result, companies are subject to a growing range of ethical and regulatory requirements that have an effect on business models and corporate operations.',
  },
  {
    title: 'Strategy and Organization',
    icon: '/images/icons/darts.svg',
    image: '/images/marketing/Strategy and Organisation.jpg',
    text: 'Globalisation and digitalisation have brought a profound transformation to global markets. As a result, businesses are exposed to an increasingly competitive and dynamic environment.',
  },
  {
    title: 'Human Resources',
    icon: '/images/icons/people.svg',
    image: '/images/marketing/Human resources.jpg',
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
      <section className="relative h-[85vh] min-h-[520px] max-h-[1000px] flex items-center overflow-hidden">
        <ParallaxHero src="/images/team/board-standing.jpg" className="object-[center_62%] origin-bottom" />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] max-w-3xl">
            Helping you succeed since 2014.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
            Tailor-made solutions that link academic expertise with the needs of your business.
          </p>
        </div>
      </section>

      {/* Selected projects */}
      <section className="py-20 sm:py-28 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Selected Projects</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <ProjectCards />
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">What we do</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <ServiceGrid services={services} />
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 sm:py-28 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Our Clients</h2>
            <div className="section-divider mx-auto mt-4" />
            <p className="mt-6 text-navy/60">
              From start-ups to multinational corporations, across many different industries.
            </p>
          </div>
          <LogoMarquee logos={clientLogos} largerLogos={['Oqema', 'Philips', 'Vaude']} />
        </div>
      </section>

      {/* Project Cycle */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Project Cycle</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <ProjectTimeline
            intro="From the first call to the final presentation: this is how a project with MSC works."
            steps={projectCycleSteps}
          />
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider testimonials={clientTestimonials} />

      <ContactSection
        contactPerson={contact}
        form={{
          subject: 'Project enquiry via the MSC website',
          heading: "Let's talk about your project",
          intro: 'Interested in a project or want to hear what we can offer in a short call? Send us a message and we will get back to you.',
          messagePlaceholder: 'Your project, your question or a good time for a call',
          company: true,
        }}
      />

      <FloatingContact title="Interested in a project?" subtitle="Send us a message" />
    </>
  );
}
