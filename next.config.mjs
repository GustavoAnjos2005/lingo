/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: "/api/(.*)",
                headers: [
                    {
                        key: "Acess-Contorl-Allow-Origin",
                        value: "*",
                    },
                    {
                        key: "Acess-Contorl-Allow-Methods",
                        value: "GET, POST, PUT, DELETE, OPTIONS",
                    },
                    {
                        key: "Acess-Contorl-Allow-Headers",
                        value: "Content-Type, Authorization",
                    },
                    {
                        key: "Content-Range",
                        value: "bytes: 0-9/*",
                    },
                ]
            }
        ]
    }
};

export default nextConfig;
