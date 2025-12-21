import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Support 4K resolution images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840, 5504],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
