// @ts-check
// @ts-ignore
const { keccak256 } = require('keccak-crypto');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  eslint: {
    ignoreDuringBuilds: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  pageExtensions: process.env.NODE_ENV === 'production'
    ? ['js', 'jsx', 'ts', 'tsx'].filter(ext => !ext.includes('debug'))
    : ['js', 'jsx', 'ts', 'tsx'],
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  generateBuildId: async () => {
    return keccak256('hello world').slice(0, 8)
  },
};

module.exports = nextConfig;
