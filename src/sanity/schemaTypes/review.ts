import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'review',
    title: 'Avis Patients',
    type: 'document',
    fields: [
        defineField({ name: 'author', title: 'Nom du patient', type: 'string' }),
        defineField({ name: 'rating', title: 'Note sur 5 (⭐)', type: 'number', validation: Rule => Rule.min(1).max(5) }),
        defineField({ name: 'comment', title: 'Commentaire complet', type: 'text' }),
        defineField({ name: 'date', title: 'Date de l\'avis', type: 'date' }),
        defineField({
            name: 'intervention',
            title: 'Intervention concernée',
            type: 'reference',
            to: [{ type: 'intervention' }]
        })
    ]
})
