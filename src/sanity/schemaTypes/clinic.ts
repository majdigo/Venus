import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'clinic',
    title: 'Cliniques & Hôtels',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nom de l\'établissement',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'type',
            title: 'Type d\'établissement',
            type: 'string',
            options: { list: ['Clinique', 'Hôtel', 'Centre de récupération'] },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'stars',
            title: 'Étoiles (1 à 5)',
            type: 'number',
            validation: Rule => Rule.min(1).max(5)
        }),
        defineField({
            name: 'location',
            title: 'Localisation (ex: Tunis, Berges du Lac)',
            type: 'string'
        }),
        defineField({
            name: 'images',
            title: 'Galerie Photos',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }]
        }),
        defineField({
            name: 'services',
            title: 'Services Inclus',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Exemples: WiFi, Transfert aéroport, Traducteur, TV...'
        }),
        defineField({
            name: 'description',
            title: 'Description Longue',
            type: 'text'
        })
    ]
})
