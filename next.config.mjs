/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/(.*)",
        destination: `${process.env.NEXT_PUBLIC_FE_URL}/:path*`, // 여기에 HTTP로 리다이렉션할 URL을 입력합니다.
      },
    ];
  },
};

export default nextConfig;
