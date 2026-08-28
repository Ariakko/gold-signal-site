import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/gold-signal-site",
  assetPrefix: "/gold-signal-site/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;