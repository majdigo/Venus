import { AutoBreadcrumbs } from '@/components/ui/AutoBreadcrumbs';

/**
 * InterventionsLayout — Server Component layout shared by all routes under
 * /interventions/*. Injects the AutoBreadcrumbs bar above every intervention
 * page without requiring each page to manage it individually.
 */
export default function InterventionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AutoBreadcrumbs />
      {children}
    </>
  );
}
