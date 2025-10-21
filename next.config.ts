import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  trailingSlash: false,
  outputFileTracingRoot: __dirname
};

export default nextConfig;
