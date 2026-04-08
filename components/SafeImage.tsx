import NextImage, { ImageProps } from 'next/image';
import { asset } from '@/lib/assetPath';

/**
 * Drop-in replacement for next/image that prefixes static-asset `src`
 * strings with the configured basePath (/WEBSITEWIP in production).
 *
 * This is needed because next/image with `unoptimized: true` does not
 * automatically apply basePath to local image sources.
 */
export default function SafeImage(props: ImageProps) {
  const src =
    typeof props.src === 'string' ? asset(props.src) : props.src;
  return <NextImage {...props} src={src} />;
}
