import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'intervention',
    title: 'Interventions (Chirurgies)',
    type: 'document',
    fields: [
        // 1. Informations de Base
        defineField({ name: 'title', title: 'Nom (H1)', type: 'string', validation: Rule => Rule.required() }),
        defineField({ name: 'slug', title: 'URL Slug', type: 'slug', options: { source: 'title' }, validation: Rule => Rule.required() }),
        defineField({
            name: 'category',
            title: 'Catégorie Principale',
            type: 'reference',
            to: [{ type: 'category' }],
            validation: Rule => Rule.required()
        }),

        // 2. Pricing & CRO
        defineField({ name: 'basePrice', title: 'Prix Standard/Promo (€)', type: 'number', validation: Rule => Rule.required() }),
        defineField({ name: 'oldPrice', title: 'Ancien Prix Barré (Croix de Saint André)', type: 'number' }),
        defineField({ name: 'duration', title: 'Durée du Séjour (ex: 5 jours / 4 nuits)', type: 'string' }),
        defineField({ name: 'recoveryTime', title: 'Temps de convalescence (ex: 2 semaines)', type: 'string' }),

        // 3. SEO (Search Engine Optimization)
        defineField({ name: 'seoTitle', title: 'SEO: Meta Title', type: 'string' }),
        defineField({ name: 'seoDescription', title: 'SEO: Meta Description', type: 'text' }),

        // 4. Média et Contenu Riche
        defineField({ name: 'heroImage', title: 'Image Principale (Banner)', type: 'image', options: { hotspot: true } }),
        defineField({
            name: 'body',
            title: 'Contenu Riche (Description de l\'opération)',
            type: 'array',
            of: [{ type: 'block' }, { type: 'image' }]
        }),

        // 5. Relations (The ORM Magic)
        defineField({
            name: 'surgeons',
            title: 'Chirurgiens Assignés',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'doctor' }] }]
        }),
        defineField({
            name: 'clinics',
            title: 'Cliniques / Hôtels',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'clinic' }] }]
        }),

        // 6. FAQ
        defineField({
            name: 'faq',
            title: 'Foire Aux Questions (FAQ)',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'question', type: 'string', title: 'Question' },
                        { name: 'answer', type: 'text', title: 'Réponse' }
                    ]
                }
            ]
        })
    ]
})
