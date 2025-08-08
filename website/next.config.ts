import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'i.vimeocdn.com',     // Vimeo CDN
      'vumbnail.com',       // Vimeo thumbnail alternative
      'i.ytimg.com',        // YouTube thumbnails
      'img.youtube.com'     // YouTube thumbnails
    ],
  },
};

export default nextConfig;
