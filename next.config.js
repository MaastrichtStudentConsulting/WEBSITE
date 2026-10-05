/** @type {import('next').NextConfig} */
const nextConfig = {
  // The Students page is now part of About Us
  async redirects() {
    return [{ source: '/students', destination: '/join', permanent: false }];
  },
  images: {
    // Larger device sizes so Retina screens get crisp images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

module.exports = nextConfig;
