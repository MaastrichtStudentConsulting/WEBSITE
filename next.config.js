/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Larger device sizes so Retina screens get crisp images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async rewrites() {
    // The case simulation is a standalone page in public/case-simulation.html
    return [{ source: '/case-simulation', destination: '/case-simulation.html' }];
  },
};

module.exports = nextConfig;
