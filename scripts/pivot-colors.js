const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

function replaceColors() {
    console.log("Starting global color replace: brand-gold -> brand-blue");
    let count = 0;

    walkDir('./src', (filePath) => {
        if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
            let content = fs.readFileSync(filePath, 'utf8');
            if (content.includes('brand-gold')) {
                const newContent = content.replace(/brand-gold/g, 'brand-blue');
                fs.writeFileSync(filePath, newContent);
                count++;
                console.log(`Updated: ${filePath}`);
            }
        }
    });

    console.log(`Color replacement complete. Modified ${count} files.`);
}

replaceColors();
