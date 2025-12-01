import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "176.126.164.86",
        port: "8000",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
