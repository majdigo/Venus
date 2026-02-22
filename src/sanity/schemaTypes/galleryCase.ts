import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'galleryCase',
    title: 'Cas Avant / Après',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Titre du cas (ex: Rhinoplastie Ethnique - Patiente 24 ans)', type: 'string' }),
        defineField({
            name: 'intervention',
            title: 'Lié à quelle intervention ?',
            type: 'reference',
            to: [{ type: 'intervention' }],
            validation: Rule => Rule.required()
        }),
        defineField({ name: 'beforeImage', title: 'Photo AVANT', type: 'image' }),
        defineField({ name: 'afterImage', title: 'Photo APRÈS', type: 'image' }),
        defineField({ name: 'delay', title: 'Délai post-op (ex: 6 mois)', type: 'string' }),
        defineField({
            name: 'details',
            title: 'Détails Techniques (ex: Grains de beauté retirés, bosse lissée)',
            type: 'text'
        })
    ]
})
