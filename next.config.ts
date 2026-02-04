import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // run server on port 5000

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
