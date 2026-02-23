/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://venus-estetika.com',
    generateRobotsTxt: true,
    exclude: ['/api/*', '/studio/*'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api', '/studio'],
            },
        ],
    },
    changefreq: 'weekly',
    priority: 0.7,
};
