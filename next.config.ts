/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'upload.wikimedia.org',
      'media.licdn.com',
      'png.pngtree.com', // ✅ Add this
    ],
  },
};

module.exports = nextConfig;
