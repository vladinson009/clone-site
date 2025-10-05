import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    domains: ['cdn.dummyjson.com', 'github.com'],
  },
};

export default nextConfig;
