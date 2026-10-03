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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased overflow-x-hidden">
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
