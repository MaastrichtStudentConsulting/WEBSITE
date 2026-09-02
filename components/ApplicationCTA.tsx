'use client';

import { useEffect, useState } from 'react';

export default function ApplicationCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
        Become part of our team!
      </h2>
      <p className="text-xl text-white/80 font-medium mb-10 max-w-2xl mx-auto">
        Applications aren't open yet, but they're coming soon. Follow us on social media to be the first to know!
      </p>

    </div>
  );
}
