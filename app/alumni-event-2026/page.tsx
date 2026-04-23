import type { Metadata } from 'next';
import AlumniEventClient from './AlumniEventClient';

export const metadata: Metadata = {
  title: 'MSC Alumni Event 2026',
  description: 'Join us for the MSC Alumni Event 2026, November 7–8 in Maastricht.',
  robots: { index: false, follow: false },
};

export default function AlumniEventPage() {
  return <AlumniEventClient />;
}
