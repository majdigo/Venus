import { Metadata } from "next";
import { LeadsDashboard } from "@/components/admin/LeadsDashboard";

export const metadata: Metadata = {
  title: "Pipeline Leads — Venus Estetika Admin",
  description: "Tableau de bord agentique des leads",
  robots: { index: false, follow: false },
};

export default function AdminLeadsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold text-primary">
            Pipeline Leads — Cockpit Agentique
          </h1>
          <p className="text-muted-foreground mt-2">
            Qualification automatique, scoring, CRM sync et audit trail en temps réel.
          </p>
        </div>
        <LeadsDashboard />
      </div>
    </div>
  );
}
