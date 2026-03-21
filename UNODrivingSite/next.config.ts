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
      },
      {
        protocol: "https",
        hostname: "cxrkntztmvfjuactygfj.supabase.co",
      }
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN", // SAMEORIGIN (not DENY) so embedded maps/videos within our own origin still work
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://img.youtube.com https://cxrkntztmvfjuactygfj.supabase.co https://placehold.co",
              "frame-src https://www.youtube.com https://maps.google.com https://www.google.com https://maps.google.com.au",
              "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://api.web3forms.com",
              "media-src 'self' blob:",
              "worker-src 'self' blob:",
            ].join("; "),
          },
        ],
      },
    ];
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
