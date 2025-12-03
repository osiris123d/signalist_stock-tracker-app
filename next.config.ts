import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
      ignoreDuringBuilds: true,
  }, 
  typescript: {
      ignoreBuildErrors: true
  },
  // Exclude Inngest route from static export for Cloudflare
  // Inngest requires Node.js runtime which is incompatible with Cloudflare Pages
  experimental: {
    serverActions: {
      allowedOrigins: ['*']
    }
  }
};

export default nextConfig;
