const https = require('https');
const fs = require('fs');

async function extractBrandIdentity() {
    console.log("Starting Brand Extraction from venus-estetika.com...");

    try {
        const response = await fetch('https://venus-estetika.com');
        const html = await response.text();

        // Find CSS files
        const cssRegex = /<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/gi;
        let match;
        const cssFiles = [];
        while ((match = cssRegex.exec(html)) !== null) {
            cssFiles.push(match[1]);
        }

        console.log(`Found ${cssFiles.length} CSS files. Downloading them...`);

        let allCss = '';
        for (let file of cssFiles) {
            if (!file.startsWith('http')) {
                file = 'https://venus-estetika.com' + (file.startsWith('/') ? '' : '/') + file;
            }
            try {
                const cssRes = await fetch(file);
                allCss += await cssRes.text();
            } catch (e) {
                console.error(`Failed to fetch ${file}`);
            }
        }

        // Extract colours using regex (Hex codes)
        const hexRegex = /#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})\b/g;
        const colors = {};
        while ((match = hexRegex.exec(allCss)) !== null) {
            const hex = match[0].toLowerCase();
            colors[hex] = (colors[hex] || 0) + 1;
        }

        // Sort colors by frequency
        const sortedColors = Object.entries(colors)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 20); // Top 20 colors

        console.log("\nTop 20 Extracted Colors:");
        sortedColors.forEach(([hex, count]) => console.log(`${hex}: ${count} times`));

        fs.writeFileSync('brand-extraction.json', JSON.stringify({ topColors: sortedColors }, null, 2));
        console.log("Success: Extracted to brand-extraction.json");

    } catch (err) {
        console.error("Error during extraction:", err);
    }
}

extractBrandIdentity();
