import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'intervention',
    title: 'Interventions',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Nom', type: 'string' }),
        defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
        defineField({ name: 'category', title: 'Catégorie', type: 'string', options: { list: ['Visage', 'Mammaire', 'Silhouette', 'Bariatrique', 'Dentaire', 'Capillaire'] } }),
        defineField({ name: 'basePrice', title: 'Prix de Base (€)', type: 'number' }),
        defineField({ name: 'shortDescription', title: 'Description SEO Courte', type: 'text' })
    ]
})
