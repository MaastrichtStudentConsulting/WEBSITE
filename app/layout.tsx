import type { Metadata } from 'next';
import './globals.css';
import ConditionalLayout from '@/components/ConditionalLayout';

export const metadata: Metadata = {
  title: {
    default: 'Maastricht Student Consulting',
    template: '%s | Maastricht Student Consulting',
  },
  description:
    'Maastricht Student Consulting is a young student consultancy comprised of ambitious students from Maastricht University.',
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
