module.exports = {
    ci: {
        collect: {
            startServerCommand: 'npm run start',
            url: [
                'http://localhost:3000/',
                'http://localhost:3000/interventions/bariatrique/sleeve-gastrique',
                'http://localhost:3000/devis'
            ],
            numberOfRuns: 1,
        },
        assert: {
            assertions: {
                'categories:performance': ['warn', { minScore: 0.8 }],
                'categories:accessibility': ['warn', { minScore: 0.9 }],
                'categories:best-practices': ['warn', { minScore: 0.9 }],
                'categories:seo': ['warn', { minScore: 0.9 }],
            }
        },
        upload: {
            target: 'filesystem',
            outputDir: './.lighthouseci',
        },
    },
};
