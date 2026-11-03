import type { Metadata } from 'next';
import './globals.css';
import ConditionalLayout from '@/components/ConditionalLayout';

// Production address used for link previews (Vercel sets this automatically on every build)
const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'https://msc-website-alpha.vercel.app';

export const metadata: Metadata = {
  title: {
    default: 'Maastricht Student Consulting',
    template: '%s | Maastricht Student Consulting',
  },
  description:
    'Maastricht Student Consulting is a young student consultancy comprised of ambitious students from Maastricht University.',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    siteName: 'Maastricht Student Consulting',
    title: 'Maastricht Student Consulting',
    description: 'Be inspired by the next generation. 175+ projects, 12 years, 34 consultants from Maastricht University.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'The MSC board in Maastricht' }],
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maastricht Student Consulting',
    description: 'Be inspired by the next generation.',
    images: ['/og-image.jpg'],
  },
};

// Tells Google which image to show next to the site in search results (a square logo with margin,
// so it is not cut off). Link previews in WhatsApp etc. keep using og-image.jpg above.
const DOMAIN = 'https://www.maastrichtconsulting.com';
const SEARCH_LOGO = `${DOMAIN}/images/msc-logo-search.jpg`;
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${DOMAIN}/#organization`,
      name: 'Maastricht Student Consulting',
      url: DOMAIN,
      logo: { '@type': 'ImageObject', url: SEARCH_LOGO, width: 1200, height: 1200 },
      image: SEARCH_LOGO,
    },
    {
      '@type': 'WebSite',
      '@id': `${DOMAIN}/#website`,
      name: 'Maastricht Student Consulting',
      url: DOMAIN,
      publisher: { '@id': `${DOMAIN}/#organization` },
    },
    {
      '@type': 'WebPage',
      url: DOMAIN,
      name: 'Maastricht Student Consulting',
      primaryImageOfPage: { '@type': 'ImageObject', url: SEARCH_LOGO, width: 1200, height: 1200 },
      isPartOf: { '@id': `${DOMAIN}/#website` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="thumbnail" content={SEARCH_LOGO} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
