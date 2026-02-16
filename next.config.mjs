/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export' removed — API routes require a Node.js server.
  // Deploy to Vercel or any Node.js host instead of static hosting.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
