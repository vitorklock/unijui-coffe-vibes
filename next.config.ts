import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    redirects: async () => [
        {
            source: '/',
            destination: '/coffes',
            permanent: true,
        }
    ]
};

export default nextConfig;
