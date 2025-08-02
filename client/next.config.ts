import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/auth/:path*',
        destination: 'http://localhost:8080/auth/:path*',
      },
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/api/:path*',
      },
      {
        source: '/contracts/:path*',
        destination: 'http://localhost:8080/contracts/:path*',
      }, 
      {
        source: '/pricing',
        destination: 'http://localhost:8080/contracts/:path*',
      }, 


      // Add more rewrites as needed
    ];
  },
};

export default nextConfig;