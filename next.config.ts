import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produces a slimmer runtime bundle for self-hosted Node.js deployments.
  output: "standalone",
};

export default nextConfig;
