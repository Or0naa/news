/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'a7.org',
            },
            {
                protocol: 'https',
                hostname: 'www.animalinfo.co.il',
            },

            {
                protocol: 'https',
                hostname: 'www.thecookingfoodie.co.il',
            },
        ],
    },
}
export default nextConfig;
