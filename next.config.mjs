/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";
const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  swcMinify: true,
  reactStrictMode: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/:path*`, // 여기에 HTTP로 리다이렉션할 URL을 입력합니다.
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "newtoki.help",
      },
      {
        protocol: "https",
        hostname: "nownowcdn.com",
      },
      {
        protocol: "https",
        hostname: "m.nownowcdn.com",
      },
      {
        protocol: "https",
        hostname: "img1.newtoki21.org",
      },
      {
        protocol: "https",
        hostname: "img2.newtoki20.org",
      },
    ],
  },
});

export default nextConfig;
