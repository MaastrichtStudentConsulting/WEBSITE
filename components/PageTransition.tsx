'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    setOpacity(0);
    window.scrollTo(0, 0);
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setOpacity(1);
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <div
      className="transition-opacity duration-300 ease-in-out"
      style={{ opacity }}
    >
      {children}
    </div>
  );
}
