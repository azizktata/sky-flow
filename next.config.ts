import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: `${process.env.HOSTNAME}`,
      },
      {
        protocol: 'https',
        hostname: `${process.env.HOSTNAME}`,
        pathname: '/wp-content/uploads/**',
      }
    ]
  }
};

export default nextConfig;
