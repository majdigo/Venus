const fs = require('fs');
const { execSync } = require('child_process');

async function generate() {
    try {
        // Install a lightweight zero-dependency screenshot CLI
        execSync('npm install -g capture-website-cli', { stdio: 'inherit' });

        // Serve the template locally via a simple python server
        console.log('Generating OG Image...');
        execSync('capture-website og-template.html --output=public/og-image.jpg --width=1200 --height=630 --type=jpeg --quality=0.9', { stdio: 'inherit' });
        console.log('Success!');
    } catch (err) {
        console.error('Error:', err);
    }
}

generate();
