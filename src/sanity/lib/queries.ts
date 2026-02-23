import { groq } from 'next-sanity'

// Query to get all doctors, ordered by experience
export const doctorsQuery = groq`
  *[_type == "doctor"] | order(experienceYears desc) {
    _id,
    name,
    "slug": slug.current,
    specialty,
    image,
    experienceYears,
    isapsMember,
    bio,
    interventions[]->{
      title,
      "slug": slug.current
    }
  }
`

// Query to get a single doctor by slug
export const doctorBySlugQuery = groq`
  *[_type == "doctor" && slug.current == $slug][0] {
    _id,
    name,
    specialty,
    image,
    experienceYears,
    isapsMember,
    bio,
    interventions[]->{
      title,
      "slug": slug.current
    }
  }
`

// Query to get gallery cases filtered by a specific intervention slug
export const galleryCasesByInterventionQuery = groq`
  *[_type == "galleryCase" && intervention->slug.current == $interventionSlug] | order(_createdAt desc) {
    _id,
    title,
    beforeImage,
    afterImage,
    delay,
    details
  }
`

// Query to get general site interventions with category and pricing
export const interventionsQuery = groq`
  *[_type == "intervention"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    "category": category->title,
    basePrice,
    oldPrice,
    seoTitle,
    seoDescription
  }
`

// Query to get a full single intervention by slug (The Golden Goose Page Data)
export const interventionBySlugQuery = groq`
  *[_type == "intervention" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    "category": category->title,
    basePrice,
    oldPrice,
    duration,
    recoveryTime,
    seoTitle,
    seoDescription,
    heroImage,
    body,
    surgeons[]->{
      name,
      "slug": slug.current,
      specialty,
      image
    },
    clinics[]->{
      name,
      stars,
      location,
      images
    },
    faq
  }
`

// Query for Patient Reviews
export const reviewsQuery = groq`
  *[_type == "review"] | order(date desc) [0...10] {
    _id,
    author,
    rating,
    comment,
    date,
    intervention->{
      title
    }
  }
`

// Query for Patient Reviews filtered by intervention
export const reviewsByInterventionQuery = groq`
  *[_type == "review" && intervention->slug.current == $interventionSlug] | order(date desc) [0...10] {
    _id,
    author,
    rating,
    comment,
    date,
    intervention->{
      title
    }
  }
`
