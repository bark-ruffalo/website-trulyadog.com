// @ts-check
// @ts-ignore
const createKeccakHash = require('keccak-crypto');

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
    createKeccakHash("keccak256").digest().toString("hex");
    return createKeccakHash('keccak256').update('trulyadog').toString('hex')
  },
};

module.exports = nextConfig;
