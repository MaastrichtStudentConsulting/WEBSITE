'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [opacity, setOpacity] = useState(1);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      prevPathname.current = pathname;
      // Fade out
      setOpacity(0);
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        window.scrollTo(0, 0);
        // Fade in
        setOpacity(1);
      }, 200);
      return () => clearTimeout(timer);
    } else {
      setDisplayChildren(children);
    }
  }, [pathname, children]);

  return (
    <div
      className="transition-opacity duration-200 ease-in-out"
      style={{ opacity }}
    >
      {displayChildren}
    </div>
  );
}
