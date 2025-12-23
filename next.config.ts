import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/edit",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
