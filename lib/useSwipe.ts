import { useRef } from 'react';

/**
 * Touch-swipe handlers for sliders: swipe left -> next, swipe right -> previous.
 * Only reacts to mostly horizontal swipes, so vertical page scrolling still works.
 */
export function useSwipe(onNext: () => void, onPrev: () => void, threshold = 40) {
  const start = useRef<{ x: number; y: number } | null>(null);
  return {
    onTouchStart: (e: React.TouchEvent) => {
      const t = e.touches[0];
      start.current = { x: t.clientX, y: t.clientY };
    },
    onTouchEnd: (e: React.TouchEvent) => {
      if (!start.current) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - start.current.x;
      const dy = t.clientY - start.current.y;
      start.current = null;
      if (Math.abs(dx) < threshold || Math.abs(dx) < Math.abs(dy) * 1.2) return;
      if (dx < 0) onNext();
      else onPrev();
    },
  };
}
