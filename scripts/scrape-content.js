const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://venus-estetika.com';
const SITEMAP_URL = `${SITE_URL}/page-sitemap.xml`;
const OUTPUT_DIR = path.join(__dirname, '../../01_specifications/scraped_data');

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function scrapeContent() {
    console.log(`Fetching sitemap from ${SITEMAP_URL}...`);
    try {
        const { data: sitemapXml } = await axios.get(SITEMAP_URL, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        const $ = cheerio.load(sitemapXml, { xmlMode: true });

        const urls = [];
        $('loc').each((i, el) => {
            urls.push($(el).text());
        });

        // Filter URLs relevant to interventions, clinics, and doctors
        const targetUrls = urls.filter(url =>
            url.includes('/chirurgie-') ||
            url.includes('/visage') ||
            url.includes('/dentisterie') ||
            url.includes('/greffe') ||
            url.includes('/medecins') ||
            url.includes('/dr-') ||
            url.includes('/clinique')
        );

        console.log(`Found ${targetUrls.length} relevant pages to scrape. Starting extraction...`);

        const allData = [];

        for (const url of targetUrls) {
            console.log(`Scraping: ${url}`);
            try {
                const { data: html } = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
                const $page = cheerio.load(html);

                const title = $page('h1').first().text().trim();
                const description = $page('meta[name="description"]').attr('content') || '';

                // Extract main imagery (headers, banners)
                const images = [];
                $page('img').each((i, el) => {
                    const src = $page(el).attr('src') || $page(el).attr('data-src');
                    if (src && !src.includes('logo') && !src.includes('icon') && !src.includes('.svg')) {
                        images.push(src.startsWith('http') ? src : SITE_URL + src);
                    }
                });

                // Extract Main Content Texts
                const texts = [];
                $page('p, h2, h3, li').each((i, el) => {
                    const text = $page(el).text().trim();
                    if (text.length > 20) {
                        texts.push(text);
                    }
                });

                const pageData = {
                    url,
                    title,
                    description,
                    images: [...new Set(images)].slice(0, 10), // Top 10 images
                    contentSnippets: [...new Set(texts)].slice(0, 20) // Top 20 sections of text
                };

                allData.push(pageData);

                // Be polite to the server
                await new Promise(resolve => setTimeout(resolve, 500));
            } catch (err) {
                console.error(`Error scraping ${url}: ${err.message}`);
            }
        }

        fs.writeFileSync(path.join(OUTPUT_DIR, 'venus_raw_data.json'), JSON.stringify(allData, null, 2));
        console.log(`\n✅ Successfully scraped ${allData.length} pages.`);
        console.log(`Data saved to: ${path.join(OUTPUT_DIR, 'venus_raw_data.json')}`);

    } catch (error) {
        console.error("Failed to fetch sitemap:", error.message);
    }
}

scrapeContent();
