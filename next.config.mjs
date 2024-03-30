/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"eu-central-1-shared-euc1-02.graphassets.com"
            }
        ]
    }
};

export default nextConfig;
