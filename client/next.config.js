/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hide error overlay
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  // Proxy API calls to backend server
  async rewrites() {
    return [
      {
        source: '/auth/:path*',
        destination: 'http://localhost:8080/auth/:path*',
      },
      {
        source: '/contracts/:path*',
        destination: 'http://localhost:8080/contracts/:path*',
      },
      {
        source: '/payments/:path*',
        destination: 'http://localhost:8080/payments/:path*',
      },
    ];
  },
}

module.exports = nextConfig 