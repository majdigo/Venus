/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://venus-estetika.com',
    generateRobotsTxt: true,
    exclude: ['/api/*', '/studio/*', '/lp/*'],
    additionalPaths: async () => [
        { loc: '/devis', changefreq: 'monthly', priority: 0.9 },
    ],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api', '/studio'],
            },
            // AEO (Answer Engine Optimization) Bot Explicit Allow
            {
                userAgent: 'ChatGPT-User',
                allow: '/',
            },
            {
                userAgent: 'GPTBot',
                allow: '/',
            },
            {
                userAgent: 'Claude-Web',
                allow: '/',
            },
            {
                userAgent: 'PerplexityBot',
                allow: '/',
            }
        ],
        additionalSitemaps: [
            'https://venus-estetika.com/sitemap.xml',
            // Pointeur direct vers le fichier pour les agents IA
            'https://venus-estetika.com/llms.txt'
        ],
    },
    changefreq: 'weekly',
    priority: 0.7,
};
