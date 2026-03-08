import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      }
    ],
  },
  async redirects() {
    return [
      {
        source: "/eastern/:slug",
        destination: "/locations/:slug",
        permanent: true,
      },
      {
        source: "/western/:slug",
        destination: "/locations/:slug",
        permanent: true,
      },
      {
        source: "/northern/:slug",
        destination: "/locations/:slug",
        permanent: true,
      },
      {
        source: "/southern/:slug",
        destination: "/locations/:slug",
        permanent: true,
      },
      {
        source: "/inner-city/:slug",
        destination: "/locations/:slug",
        permanent: true,
      },
      {
        source: "/logan/:slug",
        destination: "/locations/:slug",
        permanent: true,
      },
      {
        source: "/locations/:region/:slug",
        destination: "/locations/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
