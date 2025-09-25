/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Skip ESLint during `next build`
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Skip TypeScript type checks during `next build`
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
