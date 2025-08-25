import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    domains: ['i.imgur.com'],
    // You can add other image domains here too, separated by commas
    // For example: domains: ['i.imgur.com', 'example.com', 'another-site.org'],
  },
};

export default nextConfig;
