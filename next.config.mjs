/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            { protocol: 'https', hostname: 'venus-estetika.com' },
        ],
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    { key: 'X-Frame-Options', value: 'DENY' },
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                ],
            },
        ];
    },
    async redirects() {
        return [
            // INTERVENTIONS (SEO Core)
            {
                source: '/rhinoplastie-tunisie',
                destination: '/interventions/chirurgie-visage/rhinoplastie',
                permanent: true,
            },
            {
                source: '/augmentation-mammaire-tunisie',
                destination: '/interventions/chirurgie-mammaire/augmentation-mammaire',
                permanent: true,
            },
            {
                source: '/sleeve-gastrique-tunisie',
                destination: '/interventions/bariatrique/sleeve-gastrique',
                permanent: true,
            },
            {
                source: '/greffe-de-cheveux-tunisie',
                destination: '/interventions/greffe-cheveux',
                permanent: true,
            },
            {
                source: '/lifting-cervico-facial',
                destination: '/interventions/chirurgie-visage/lifting-cervico-facial',
                permanent: true,
            },
            {
                source: '/liposuccion-tunisie',
                destination: '/interventions/chirurgie-silhouette/liposuccion',
                permanent: true,
            },
            // DOCTEURS (Autorité E-E-A-T)
            {
                source: '/dr-walid-balti',
                destination: '/chirurgiens/dr-walid-balti',
                permanent: true,
            },
            {
                source: '/dr-atef-ghedira',
                destination: '/chirurgiens/dr-atef-ghedira',
                permanent: true,
            },
            // OLD TAXONOMIES & CATEGORIES
            {
                source: '/chirurgie-esthetique',
                destination: '/interventions',
                permanent: true,
            },
            {
                source: '/tarifs',
                destination: '/prix',
                permanent: true,
            }
        ];
    },
};
export default nextConfig;
