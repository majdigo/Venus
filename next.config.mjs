/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        qualities: [75, 85],
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
                    { key: 'X-DNS-Prefetch-Control', value: 'on' },
                    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
                ],
            },
        ];
    },
    async redirects() {
        return [
            // ============================================================
            // CHIRURGIE VISAGE (7 interventions)
            // ============================================================
            {
                source: '/rhinoplastie',
                destination: '/interventions/chirurgie-visage/rhinoplastie',
                permanent: true,
            },
            {
                source: '/rhinoplastie-tunisie',
                destination: '/interventions/chirurgie-visage/rhinoplastie',
                permanent: true,
            },
            {
                source: '/lifting-visage',
                destination: '/interventions/chirurgie-visage/lifting-cervico-facial',
                permanent: true,
            },
            {
                source: '/lifting-du-visage-tunisie',
                destination: '/interventions/chirurgie-visage/lifting-cervico-facial',
                permanent: true,
            },
            {
                source: '/lifting-cervico-facial',
                destination: '/interventions/chirurgie-visage/lifting-cervico-facial',
                permanent: true,
            },
            {
                source: '/blepharoplastie',
                destination: '/interventions/chirurgie-visage/blepharoplastie',
                permanent: true,
            },
            {
                source: '/blepharoplastie-tunisie',
                destination: '/interventions/chirurgie-visage/blepharoplastie',
                permanent: true,
            },
            {
                source: '/otoplastie',
                destination: '/interventions/chirurgie-visage/otoplastie',
                permanent: true,
            },
            {
                source: '/lipofilling-visage',
                destination: '/interventions/chirurgie-visage/lipofilling-visage',
                permanent: true,
            },
            {
                source: '/genioplastie',
                destination: '/interventions/chirurgie-visage/genioplastie',
                permanent: true,
            },

            // ============================================================
            // CHIRURGIE MAMMAIRE (3 interventions)
            // ============================================================
            {
                source: '/augmentation-mammaire-par-implant',
                destination: '/interventions/chirurgie-mammaire/augmentation-mammaire',
                permanent: true,
            },
            {
                source: '/augmentation-mammaire-tunisie',
                destination: '/interventions/chirurgie-mammaire/augmentation-mammaire',
                permanent: true,
            },
            {
                source: '/reduction-mammaire',
                destination: '/interventions/chirurgie-mammaire/reduction-mammaire',
                permanent: true,
            },
            {
                source: '/lifting-mammaire',
                destination: '/interventions/chirurgie-mammaire/lifting-seins',
                permanent: true,
            },

            // ============================================================
            // CHIRURGIE SILHOUETTE (4 interventions)
            // ============================================================
            {
                source: '/liposuccion',
                destination: '/interventions/chirurgie-silhouette/liposuccion',
                permanent: true,
            },
            {
                source: '/liposuccion-tunisie',
                destination: '/interventions/chirurgie-silhouette/liposuccion',
                permanent: true,
            },
            {
                source: '/abdominoplastie',
                destination: '/interventions/chirurgie-silhouette/abdominoplastie',
                permanent: true,
            },
            {
                source: '/abdominoplastie-tunisie',
                destination: '/interventions/chirurgie-silhouette/abdominoplastie',
                permanent: true,
            },
            {
                source: '/augmentation-fesses-bbl',
                destination: '/interventions/chirurgie-silhouette/bbl',
                permanent: true,
            },
            {
                source: '/mommy-makeover',
                destination: '/interventions/chirurgie-silhouette/mommy-makeover',
                permanent: true,
            },

            // ============================================================
            // CHIRURGIE BARIATRIQUE (3 interventions)
            // ============================================================
            {
                source: '/sleeve-gastrique',
                destination: '/interventions/bariatrique/sleeve-gastrique',
                permanent: true,
            },
            {
                source: '/sleeve-gastrique-tunisie',
                destination: '/interventions/bariatrique/sleeve-gastrique',
                permanent: true,
            },
            {
                source: '/chirurgie-de-lobesite',
                destination: '/interventions/bariatrique/sleeve-gastrique',
                permanent: true,
            },
            {
                source: '/bypass-gastrique',
                destination: '/interventions/bariatrique/bypass-gastrique',
                permanent: true,
            },
            {
                source: '/anneau-gastrique',
                destination: '/interventions/bariatrique/anneau-gastrique',
                permanent: true,
            },

            // ============================================================
            // DENTAIRE (4 interventions)
            // ============================================================
            {
                source: '/facettes-dentaires',
                destination: '/interventions/dentaire/facettes',
                permanent: true,
            },
            {
                source: '/facettes-dentaires-tunisie',
                destination: '/interventions/dentaire/facettes',
                permanent: true,
            },
            {
                source: '/implants-dentaires',
                destination: '/interventions/dentaire/implants-dentaires',
                permanent: true,
            },
            {
                source: '/couronnes-dentaires',
                destination: '/interventions/dentaire/couronnes',
                permanent: true,
            },
            {
                source: '/blanchiment-dentaire',
                destination: '/interventions/dentaire/blanchiment',
                permanent: true,
            },

            // ============================================================
            // CAPILLAIRE (3 interventions)
            // ============================================================
            {
                source: '/greffe-cheveux-fue',
                destination: '/interventions/capillaire/greffe-cheveux',
                permanent: true,
            },
            {
                source: '/greffe-de-cheveux-tunisie',
                destination: '/interventions/capillaire/greffe-cheveux',
                permanent: true,
            },
            {
                source: '/greffe-cheveux-dhi',
                destination: '/interventions/capillaire/greffe-dhi',
                permanent: true,
            },
            {
                source: '/greffe-barbe',
                destination: '/interventions/capillaire/greffe-barbe',
                permanent: true,
            },

            // ============================================================
            // MEDECINE ESTHETIQUE (3 interventions)
            // ============================================================
            {
                source: '/botox',
                destination: '/interventions/medecine-esthetique/botox',
                permanent: true,
            },
            {
                source: '/acide-hyaluronique',
                destination: '/interventions/medecine-esthetique/acide-hyaluronique',
                permanent: true,
            },
            {
                source: '/peeling',
                destination: '/interventions/medecine-esthetique/peeling',
                permanent: true,
            },

            // ============================================================
            // DEVIS & FORMULAIRES
            // ============================================================
            {
                source: '/demande-de-devis-chirurgie-esthetique',
                destination: '/devis',
                permanent: true,
            },
            {
                source: '/demande-de-devis',
                destination: '/devis',
                permanent: true,
            },
            {
                source: '/devis-gratuit',
                destination: '/devis',
                permanent: true,
            },

            // ============================================================
            // PAGES INSTITUTIONNELLES
            // ============================================================
            {
                source: '/a-propos',
                destination: '/cliniques-partenaires',
                permanent: true,
            },
            {
                source: '/notre-clinique',
                destination: '/cliniques-partenaires',
                permanent: true,
            },
            {
                source: '/nos-chirurgiens',
                destination: '/chirurgiens',
                permanent: true,
            },
            {
                source: '/avis-patients',
                destination: '/temoignages',
                permanent: true,
            },
            {
                source: '/prix-chirurgie-esthetique-tunisie',
                destination: '/tarifs',
                permanent: true,
            },
            {
                source: '/sejour-medical-tunisie',
                destination: '/sejour-medical',
                permanent: true,
            },

            // ============================================================
            // DOCTEURS (Autorite E-E-A-T)
            // ============================================================
            {
                source: '/dr-balti',
                destination: '/chirurgiens',
                permanent: true,
            },
            {
                source: '/dr-walid-balti',
                destination: '/chirurgiens',
                permanent: true,
            },
            {
                source: '/dr-atef-ghedira',
                destination: '/chirurgiens',
                permanent: true,
            },

            // ============================================================
            // ANCIENNES CATEGORIES WORDPRESS
            // ============================================================
            {
                source: '/chirurgie-esthetique',
                destination: '/interventions',
                permanent: true,
            },
            {
                source: '/chirurgie-esthetique-tunisie',
                destination: '/interventions',
                permanent: true,
            },
            {
                source: '/chirurgie-esthetique-visage-tunisie/:slug',
                destination: '/interventions/chirurgie-visage/:slug',
                permanent: true,
            },
            {
                source: '/chirurgie-des-seins/:slug',
                destination: '/interventions/chirurgie-mammaire/:slug',
                permanent: true,
            },
            {
                source: '/dentisterie-esthetique/:slug',
                destination: '/interventions/dentaire/:slug',
                permanent: true,
            },
            {
                source: '/chirurgie-esthetique-silhouette-tunisie/:slug',
                destination: '/interventions/chirurgie-silhouette/:slug',
                permanent: true,
            },
            {
                source: '/chirurgie-de-lobesite/:slug',
                destination: '/interventions/bariatrique/:slug',
                permanent: true,
            },
            {
                source: '/greffe-capillaire-fue',
                destination: '/interventions/capillaire/greffe-cheveux',
                permanent: true,
            },
            // Pages specifiques WP (URLs reelles du sitemap)
            {
                source: '/chirurgie-intime',
                destination: '/interventions',
                permanent: true,
            },
            {
                source: '/gynecomastie',
                destination: '/interventions/chirurgie-mammaire/reduction-mammaire',
                permanent: true,
            },
            {
                source: '/nos-garanties',
                destination: '/cliniques-partenaires',
                permanent: true,
            },
            {
                source: '/suivi-postoperatoire',
                destination: '/sejour-medical',
                permanent: true,
            },
            {
                source: '/consultation',
                destination: '/devis',
                permanent: true,
            },
            {
                source: '/hotel-de-sejour',
                destination: '/sejour-medical',
                permanent: true,
            },
            {
                source: '/venus-estetika-avis',
                destination: '/temoignages',
                permanent: true,
            },
            {
                source: '/tarifs-chirurgie-esthetique-tunisie-prix-pas-cher',
                destination: '/tarifs',
                permanent: true,
            },
            // Cliniques partenaires
            {
                source: '/clinique-pasteur',
                destination: '/cliniques-partenaires',
                permanent: true,
            },
            {
                source: '/clinique-hannibal',
                destination: '/cliniques-partenaires',
                permanent: true,
            },
            {
                source: '/clinique-carthagene',
                destination: '/cliniques-partenaires',
                permanent: true,
            },
            {
                source: '/clinique-mediterraneenne',
                destination: '/cliniques-partenaires',
                permanent: true,
            },
            {
                source: '/clinique-jasmin',
                destination: '/cliniques-partenaires',
                permanent: true,
            },

            // ============================================================
            // WORDPRESS GENERIQUES (catch-all patterns)
            // ============================================================
            {
                source: '/category/:slug*',
                destination: '/blog',
                permanent: true,
            },
            {
                source: '/tag/:slug*',
                destination: '/blog',
                permanent: true,
            },
            {
                source: '/feed',
                destination: '/',
                permanent: true,
            },
            {
                source: '/feed/:path*',
                destination: '/',
                permanent: true,
            },
            // WordPress admin/login — redirect to homepage
            // TODO: Implement proper 410 Gone via middleware for wp-admin, wp-login, wp-content
            {
                source: '/wp-admin',
                destination: '/',
                permanent: false,
            },
            {
                source: '/wp-admin/:path*',
                destination: '/',
                permanent: false,
            },
            {
                source: '/wp-login.php',
                destination: '/',
                permanent: false,
            },
            {
                source: '/wp-content/:path*',
                destination: '/',
                permanent: false,
            },
        ];
    },
};
export default nextConfig;
