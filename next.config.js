/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // Netlify exposes COMMIT_REF at build time
    NEXT_PUBLIC_COMMIT: process.env.COMMIT_REF ? process.env.COMMIT_REF.slice(0, 7) : '',
    NEXT_PUBLIC_BRANCH: process.env.BRANCH || '',
    NEXT_PUBLIC_REPO: 'https://github.com/dosamani/trucite-demo'
  }
};

module.exports = nextConfig;
