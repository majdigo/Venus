import { getInterventionData } from '@/data/interventions';
import { InterventionPageTemplate } from '@/components/interventions/InterventionPageTemplate';
import type { Metadata } from 'next';

const data = getInterventionData('liposuccion')!;

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: data.meta.canonical },
  openGraph: {
    title: data.meta.title,
    description: data.meta.description,
    images: data.meta.ogImage ? [{ url: data.meta.ogImage, width: 1200, height: 630, alt: `${data.name} — Venus Estetika` }] : undefined,
  },
};

export default function LiposuccionPage() {
  return <InterventionPageTemplate data={data} />;
}
