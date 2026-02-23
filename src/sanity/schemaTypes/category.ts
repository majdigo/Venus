import { defineField, defineType } from 'sanity';

export const category = defineType({
    name: 'category',
    title: 'Catégories (Spécialités)',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Nom de la Spécialité (ex: Chirurgie Mammaire)',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({ name: 'slug', title: 'URL Slug', type: 'slug', options: { source: 'title' } }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'icon',
            title: 'Nom de l\'icône Phosphor (ex: ph-magic-wand)',
            type: 'string',
        })
    ],
});
