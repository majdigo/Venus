import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'doctor',
    title: 'Chirurgiens & Équipe',
    type: 'document',
    fields: [
        defineField({ name: 'name', title: 'Nom Complet (Dr.)', type: 'string', validation: Rule => Rule.required() }),
        defineField({ name: 'slug', title: 'URL Slug', type: 'slug', options: { source: 'name' } }),
        defineField({ name: 'specialty', title: 'Spécialité (ex: Chirurgien Plasticien)', type: 'string' }),
        defineField({ name: 'image', title: 'Photo Officielle', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'experienceYears', title: 'Années d\'expérience', type: 'number' }),
        defineField({ name: 'isapsMember', title: 'Membre ISAPS ? (Trust factor)', type: 'boolean', initialValue: false }),
        defineField({ name: 'bio', title: 'Biographie courte', type: 'text' }),
        defineField({
            name: 'interventions',
            title: 'Interventions Pratiquées',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'intervention' }] }]
        })
    ]
})
