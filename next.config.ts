import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.figma.com",
        pathname: "/api/mcp/asset/**",
      },
    ],
  },
  /** If files are not in /public/may-beauty, serve Figma exports (run `npm run fetch-assets` to materialize local PNGs). */
  async rewrites() {
    return {
      fallback: [
        {
          source: "/may-beauty/gradient.png",
          destination:
            "https://www.figma.com/api/mcp/asset/f08a9f6d-be75-492a-a116-e8dc083a2a84",
        },
        {
          source: "/may-beauty/sku.png",
          destination:
            "https://www.figma.com/api/mcp/asset/d0fc0793-c965-4238-924b-09daf3a09caa",
        },
        {
          source: "/may-beauty/podium.png",
          destination:
            "https://www.figma.com/api/mcp/asset/81b6a61d-485b-49ea-ab23-d12b7ea74fd6",
        },
      ],
    };
  },
};

export default nextConfig;
