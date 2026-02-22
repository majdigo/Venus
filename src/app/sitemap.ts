import { MetadataRoute } from 'next';
import { getInterventions } from '@/lib/api/odoo-client';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const interventions = await getInterventions();
  const baseUrl = 'https://venus-estetika.com';

  // Pages statiques
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/tarifs/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/temoignages/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/avant-apres/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/devis/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/chirurgiens/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/cliniques-partenaires/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/sejour-medical/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/mentions-legales/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.1 },
    { url: `${baseUrl}/politique-confidentialite/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.1 },
  ];

  // Pages categories
  const categories = [...new Set(interventions.map(i => i.category_slug))];
  const categoryPages: MetadataRoute.Sitemap = categories.map(cat => ({
    url: `${baseUrl}/interventions/${cat}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Pages interventions
  const interventionPages: MetadataRoute.Sitemap = interventions.map(i => ({
    url: `${baseUrl}/interventions/${i.category_slug}/${i.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages, ...interventionPages];
}
