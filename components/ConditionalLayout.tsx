'use client';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';

const EXCLUDED_ROUTES = ['/alumni-event-2026'];

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const excluded = EXCLUDED_ROUTES.some(r => pathname.startsWith(r));

  if (excluded) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main>
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </>
  );
}
