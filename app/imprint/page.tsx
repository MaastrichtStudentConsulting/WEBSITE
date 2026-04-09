import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Imprint',
  description: 'Legal information and imprint of Maastricht Student Consulting.',
};

export default function ImprintPage() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">Imprint</h1>
        <div className="section-divider mb-12" />

        <div className="space-y-8 text-navy/80 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">General</h2>
            <p className="mb-2"><strong>Maastricht Student Consulting</strong></p>
            <p>Sint Antoniuslaan 61</p>
            <p>6221 XJ Maastricht</p>
            <p>Netherlands</p>
          </div>

          <div>
            <p>
              <strong>E-Mail:</strong>{' '}
              <a href="mailto:info@maastrichtconsulting.com" className="text-orange hover:underline">
                info@maastrichtconsulting.com
              </a>
            </p>
            <p><strong>Phone:</strong> +49 1573 0686972</p>
          </div>

          <div>
            <p><strong>KVK number:</strong> 70202494 (commercial register)</p>
            <p><strong>Responsible:</strong> Niklas Ullrich</p>
          </div>
        </div>
      </div>
    </section>
  );
}
