/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "books.google.com",
      },
      {
        hostname: "static.vecteezy.com",
      },
    ],
  },
};

export default nextConfig;
