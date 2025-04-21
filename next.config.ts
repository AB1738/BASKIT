import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
        pathname: '/**',  // This allows all paths from the images.unsplash.com domain
      },
    ],

  }
};

export default nextConfig;
