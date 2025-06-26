/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'placehold.co'], // Add any image domains you use
  },
  // Add any other Next.js config options here
}

module.exports = nextConfig