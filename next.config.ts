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
  },
};

export default nextConfig;
