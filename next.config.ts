/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/the-artist-web',
  assetPrefix: '/the-artist-web/',
  images: {
    domains: ['i.ibb.co'],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
};

export default nextConfig;