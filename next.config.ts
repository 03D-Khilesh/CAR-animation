import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/CAR-animation",
  assetPrefix: "/CAR-animation/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;