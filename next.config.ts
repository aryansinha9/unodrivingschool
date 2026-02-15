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
        destination: "/locations/eastern-brisbane/:slug",
        permanent: true,
      },
      {
        source: "/western/:slug",
        destination: "/locations/western-brisbane/:slug",
        permanent: true,
      },
      {
        source: "/northern/:slug",
        destination: "/locations/northern-brisbane/:slug",
        permanent: true,
      },
      {
        source: "/southern/:slug",
        destination: "/locations/southern-brisbane/:slug",
        permanent: true,
      },
      {
        source: "/inner-city/:slug",
        destination: "/locations/inner-brisbane/:slug",
        permanent: true,
      },
      {
        source: "/logan/:slug",
        destination: "/locations/logan-city/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
