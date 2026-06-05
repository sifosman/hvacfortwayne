import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/ac-repair",
        destination: "/ac-repair-fort-wayne/",
        permanent: true,
      },
      {
        source: "/furnace-repair",
        destination: "/furnace-repair-fort-wayne/",
        permanent: true,
      },
      {
        source: "/emergency-hvac",
        destination: "/emergency-hvac-fort-wayne/",
        permanent: true,
      },
      {
        source: "/hvac-maintenance",
        destination: "/hvac-maintenance-fort-wayne/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
