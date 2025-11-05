import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  reactStrictMode: false,
  images: {
    domains: [
      'cdn.dummyjson.com',
      'github.com',
      'cdn.shadcnstudio.com',
      'images.unsplash.com',
    ],
    // remotePatterns: [{ hostname: 'cdn.dummyjson.com' }], // Thi is demo from the course
  },
};

export default nextConfig;
