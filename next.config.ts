import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join('/daily-briefing/src/app/styles', 'styles')],
},
images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'media.wired.com',
        },
        {
            protocol: 'https',
            hostname: 'gizmodo.com',
        },
    ],
},
};

export default nextConfig;
