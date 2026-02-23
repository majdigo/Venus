const fs = require('fs');
const { chromium } = require('playwright');

async function generateOgImage() {
    const htmlContent = fs.readFileSync('./og-template.html', 'utf8');
    const browser = await chromium.launch();
    const page = await browser.newPage({
        viewport: { width: 1200, height: 630 }
    });

    await page.setContent(htmlContent, { waitUntil: 'networkidle' });

    // Wait a moment for webfonts to load or smooth out
    await page.waitForTimeout(1000);

    await page.screenshot({ path: './public/og-image.jpg', type: 'jpeg', quality: 90 });
    await browser.close();
    console.log('og-image.jpg generated');
}

generateOgImage().catch(console.error);
