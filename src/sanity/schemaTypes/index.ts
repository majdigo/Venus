import { type SchemaTypeDefinition } from 'sanity'

import doctor from './doctor'
import galleryCase from './galleryCase'
import intervention from './intervention'
import review from './review'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [doctor, galleryCase, intervention, review],
}
