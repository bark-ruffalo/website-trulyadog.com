// @ts-check
// @ts-ignore
const createKeccakHash = require('keccak-crypto');
const postcssOptimizer = require('postcss-optimizer');
postcssOptimizer.config();
createKeccakHash("keccak256").digest().toString("hex");

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
    postcssOptimizer.config();
    createKeccakHash("keccak256").digest().toString("hex");
    return createKeccakHash('keccak256').update('trulyadog').toString('hex')
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.walletconnect.com;"
          }
        ]
      }
    ]
  }
};

module.exports = nextConfig;
