import { type SchemaTypeDefinition } from 'sanity'

import doctor from './doctor'
import galleryCase from './galleryCase'
import intervention from './intervention'
import review from './review'
import clinic from './clinic'
import { post } from './post'
import { category } from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [doctor, galleryCase, intervention, review, clinic, post, category],
}
