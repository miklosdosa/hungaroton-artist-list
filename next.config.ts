import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://picsum.photos/**")],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/artist-list",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
