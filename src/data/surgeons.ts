import type { SurgeonData } from './types';

export const SURGEONS: Record<string, SurgeonData> = {
  'dr-walid-balti': {
    slug: 'dr-walid-balti',
    name: 'Dr Walid Balti',
    specialty: 'Chirurgie Plastique, Esthetique et Reconstructrice',
    image: '/images/doctors/dr-walid-balti.jpg',
    experience: 'Diplome en France, +15 ans d\'experience',
    interventions: [
      'rhinoplastie', 'blepharoplastie', 'lifting-cervico-facial', 'otoplastie',
      'genioplastie', 'lipofilling-visage',
      'augmentation-mammaire', 'reduction-mammaire', 'lifting-seins', 'lipofilling-mammaire',
      'abdominoplastie', 'liposuccion', 'bbl', 'mommy-makeover', 'lifting-bras', 'lifting-cuisses',
    ],
  },
  'dr-atef-ghedira': {
    slug: 'dr-atef-ghedira',
    name: 'Dr Atef Ghedira',
    specialty: 'Chirurgie Plastique, Esthetique et Reconstructrice',
    image: '/images/doctors/dr-atef-ghedira.jpg',
    experience: '+20 ans d\'experience en chirurgie esthetique',
    interventions: [
      'rhinoplastie', 'lifting-cervico-facial',
      'augmentation-mammaire', 'reduction-mammaire',
      'liposuccion', 'abdominoplastie', 'bbl',
    ],
  },
  'dr-imen-ben-gaied': {
    slug: 'dr-imen-ben-gaied',
    name: 'Dr Imen Ben Gaied',
    specialty: 'Chirurgie Plastique, Esthetique et Reconstructrice',
    image: '/images/doctors/dr-imen-ben-gaied.jpeg',
    experience: 'Specialiste chirurgie mammaire et silhouette',
    interventions: [
      'augmentation-mammaire', 'reduction-mammaire', 'lifting-seins', 'lipofilling-mammaire',
      'liposuccion', 'abdominoplastie', 'mommy-makeover',
    ],
  },
  'dr-ramzi-nouira': {
    slug: 'dr-ramzi-nouira',
    name: 'Dr Ramzi Nouira',
    specialty: 'Chirurgie Bariatrique (Obesite)',
    image: '/images/doctors/dr-ramzi-nouira.jpg',
    experience: 'Expert sleeve & bypass, +2 000 interventions',
    interventions: ['sleeve-gastrique', 'bypass-gastrique', 'anneau-gastrique'],
  },
  'dr-samaher-bouchnak': {
    slug: 'dr-samaher-bouchnak',
    name: 'Dr Samaher Bouchnak',
    specialty: 'Greffe Capillaire, Medecine Esthetique',
    image: '/images/doctors/dr-samaher-bouchnak.jpg',
    experience: 'Specialiste FUE/DHI et traitements anti-age',
    interventions: [
      'greffe-cheveux', 'greffe-dhi', 'greffe-barbe',
      'botox', 'acide-hyaluronique', 'mesolift', 'peeling',
    ],
  },
  'dr-ramses-mouelhi': {
    slug: 'dr-ramses-mouelhi',
    name: 'Dr Ramses Mouelhi',
    specialty: 'Chirurgien Dentiste (Implantologie & Facettes)',
    image: '/images/doctors/dr-ramses-mouelhi.jpg',
    experience: 'Expert facettes E-max et implants Straumann',
    interventions: ['facettes', 'implants-dentaires', 'couronnes', 'blanchiment'],
  },
  'dr-hassen-ben-jemaa': {
    slug: 'dr-hassen-ben-jemaa',
    name: 'Dr Hassen Ben Jemaa',
    specialty: 'Chirurgie Plastique, Esthetique et Reconstructrice',
    image: '/images/doctors/dr-hassen-ben-jemaa.jpg',
    experience: 'Specialiste abdominoplastie et chirurgie du corps',
    interventions: [
      'rhinoplastie', 'abdominoplastie', 'liposuccion', 'lifting-bras', 'lifting-cuisses',
    ],
  },
  'pr-mehdi-fendri': {
    slug: 'pr-mehdi-fendri',
    name: 'Pr Mehdi Fendri',
    specialty: 'Ophtalmologie, Oculoplastie (Chirurgie Esthetique des Yeux)',
    image: '/images/doctors/pr-mehdi-fendri.jpg',
    experience: 'Professeur universitaire, specialiste blepharoplastie',
    interventions: ['blepharoplastie'],
  },
  'dr-borhene-belkhiria': {
    slug: 'dr-borhene-belkhiria',
    name: 'Dr Borhene Belkhiria',
    specialty: 'Chirurgie Plastique, Esthetique et Reconstructrice',
    image: '/images/doctors/dr-borhene-belkhiria.jpg',
    experience: '+10 ans d\'experience en chirurgie esthetique',
    interventions: [
      'lifting-cervico-facial', 'liposuccion', 'bbl', 'abdominoplastie',
    ],
  },
};

/** Get all surgeons assigned to a specific intervention */
export function getSurgeonsForIntervention(slug: string): SurgeonData[] {
  return Object.values(SURGEONS).filter(s => s.interventions.includes(slug));
}

/** Get surgeon by slug */
export function getSurgeon(slug: string): SurgeonData | undefined {
  return SURGEONS[slug];
}
