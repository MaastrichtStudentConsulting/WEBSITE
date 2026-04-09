import NextImage, { ImageProps } from 'next/image';
import { asset } from '@/lib/assetPath';

/**
 * Drop-in wrapper around next/image.
 *
 * - Runs string src values through asset() (no-op on Vercel, kept for
 *   backwards compatibility with the earlier GitHub Pages basePath setup).
 * - Sets a sensible default `sizes` when `fill` is used without one, so
 *   the browser doesn't blindly download the largest variant from srcset.
 *   The default (`100vw`) matches Next.js' own default, but we override
 *   it to something smaller so grids don't pull full-width versions.
 */
export default function SafeImage(props: ImageProps) {
  const src =
    typeof props.src === 'string' ? asset(props.src) : props.src;

  const computedProps: ImageProps = { ...props, src };

  if (props.fill && !props.sizes) {
    // Reasonable default: mobile full-width, shrinks on larger screens.
    computedProps.sizes = '(max-width: 768px) 100vw, 50vw';
  }

  // Default to quality 90 for sharper images (Next.js default is 75)
  if (!props.quality) {
    computedProps.quality = 90;
  }

  return <NextImage {...computedProps} />;
}
