/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/the-artist-web',
  images: {
    domains: ['i.ibb.co'],
  },
  output: 'export',
};

export default nextConfig;