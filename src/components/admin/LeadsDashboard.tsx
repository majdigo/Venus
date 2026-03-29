"use client";

import { useState, useEffect, useCallback } from "react";

interface LeadSummary {
  id: string;
  name: string;
  intervention: string;
  score: number;
  category: string;
  stage: string;
  country: string;
  created_at: string;
}

interface StatsData {
  stats: {
    total: number;
    byCategory: Record<string, number>;
    byStage: Record<string, number>;
  };
  recent_leads: LeadSummary[];
  system: {
    odoo_configured: boolean;
    smtp_configured: boolean;
    slack_configured: boolean;
    mode: string;
  };
}

interface LeadExplain {
  lead_id: string;
  intervention: string;
  country: string;
  channel: string;
  score: {
    value: number;
    category: string;
    factors: Array<{
      name: string;
      points: number;
      max_points: number;
      reasoning: string;
    }>;
  };
  stage: string;
  assigned_to: string;
  odoo: { lead_id: number; synced: boolean };
  follow_up_plan: {
    actions: Array<{
      type: string;
      scheduled_at: string;
      status: string;
      content: string;
    }>;
  } | null;
  audit_trail: Array<{
    timestamp: string;
    actor: string;
    action: string;
    reasoning: string;
    policy_check: { passed: boolean; policy: string; details: string };
  }>;
  governance: {
    consent_rgpd: boolean;
    consent_marketing: boolean;
    ai_transparency: string;
  };
}

const CATEGORY_COLORS: Record<string, string> = {
  HOT: "bg-red-100 text-red-800 border-red-300",
  WARM: "bg-orange-100 text-orange-800 border-orange-300",
  NURTURE: "bg-blue-100 text-blue-800 border-blue-300",
  COLD: "bg-gray-100 text-gray-600 border-gray-300",
};

const CATEGORY_BAR_COLORS: Record<string, string> = {
  HOT: "bg-red-500",
  WARM: "bg-orange-400",
  NURTURE: "bg-blue-400",
  COLD: "bg-gray-400",
};

export function LeadsDashboard() {
  const [stats, setStats] = useState<StatsData | null>(null);
  const [selectedLead, setSelectedLead] = useState<LeadExplain | null>(null);
  const [loading, setLoading] = useState(true);
  const [detailLoading, setDetailLoading] = useState(false);

  const fetchStats = useCallback(async () => {
    try {
      const res = await fetch("/api/leads/stats");
      const data = await res.json();
      setStats(data);
    } catch (err) {
      console.error("Failed to fetch stats:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 10000); // Auto-refresh every 10s
    return () => clearInterval(interval);
  }, [fetchStats]);

  const openLeadDetail = async (leadId: string) => {
    setDetailLoading(true);
    try {
      const res = await fetch(`/api/leads/${leadId}/explain`);
      const data = await res.json();
      if (data.lead_id) {
        setSelectedLead(data);
      }
    } catch (err) {
      console.error("Failed to fetch lead detail:", err);
    } finally {
      setDetailLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-10 h-10 border-4 border-brand-navy border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="text-center py-20 text-muted-foreground">
        <p className="text-lg">Aucun lead traité pour le moment.</p>
        <p className="mt-2">Soumettez un lead via le tunnel de devis pour voir les résultats ici.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* System Status */}
      <div className="flex flex-wrap gap-3">
        <StatusBadge label="Odoo CRM" active={stats.system.odoo_configured} />
        <StatusBadge label="SMTP Email" active={stats.system.smtp_configured} />
        <StatusBadge label="Slack" active={stats.system.slack_configured} />
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 border border-purple-300">
          Mode: {stats.system.mode}
        </span>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <KpiCard label="Total Leads" value={stats.stats.total} />
        <KpiCard label="HOT" value={stats.stats.byCategory.HOT || 0} color="text-red-600" />
        <KpiCard label="WARM" value={stats.stats.byCategory.WARM || 0} color="text-orange-500" />
        <KpiCard label="NURTURE" value={stats.stats.byCategory.NURTURE || 0} color="text-blue-500" />
        <KpiCard label="COLD" value={stats.stats.byCategory.COLD || 0} color="text-gray-500" />
      </div>

      {/* Category Distribution Bar */}
      {stats.stats.total > 0 && (
        <div className="bg-white rounded-xl border p-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Distribution par catégorie</h3>
          <div className="flex h-6 rounded-full overflow-hidden">
            {["HOT", "WARM", "NURTURE", "COLD"].map((cat) => {
              const count = stats.stats.byCategory[cat] || 0;
              const pct = stats.stats.total > 0 ? (count / stats.stats.total) * 100 : 0;
              if (pct === 0) return null;
              return (
                <div
                  key={cat}
                  className={`${CATEGORY_BAR_COLORS[cat]} flex items-center justify-center text-xs text-white font-medium`}
                  style={{ width: `${pct}%` }}
                  title={`${cat}: ${count} (${pct.toFixed(0)}%)`}
                >
                  {pct > 10 ? `${cat} ${count}` : ""}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Recent Leads Table */}
      <div className="bg-white rounded-xl border overflow-hidden">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Leads Récents</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-left">
              <tr>
                <th className="px-4 py-3 font-medium">ID</th>
                <th className="px-4 py-3 font-medium">Patient</th>
                <th className="px-4 py-3 font-medium">Intervention</th>
                <th className="px-4 py-3 font-medium">Score</th>
                <th className="px-4 py-3 font-medium">Catégorie</th>
                <th className="px-4 py-3 font-medium">Pays</th>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {stats.recent_leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 font-mono text-xs">{lead.id}</td>
                  <td className="px-4 py-3 font-medium">{lead.name}</td>
                  <td className="px-4 py-3">{lead.intervention}</td>
                  <td className="px-4 py-3">
                    <span className="font-bold">{lead.score}</span>
                    <span className="text-muted-foreground">/100</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${CATEGORY_COLORS[lead.category] || ""}`}>
                      {lead.category}
                    </span>
                  </td>
                  <td className="px-4 py-3">{lead.country}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {new Date(lead.created_at).toLocaleString("fr-FR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => openLeadDetail(lead.id)}
                      className="text-xs px-3 py-1 rounded-md bg-brand-navy text-white hover:bg-brand-navy/90 transition-colors"
                    >
                      Expliquer
                    </button>
                  </td>
                </tr>
              ))}
              {stats.recent_leads.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-4 py-8 text-center text-muted-foreground">
                    Aucun lead traité. Utilisez le tunnel de devis pour en créer un.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Lead Detail Modal */}
      {(selectedLead || detailLoading) && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedLead(null)}>
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {detailLoading ? (
              <div className="flex items-center justify-center py-20">
                <div className="w-8 h-8 border-4 border-brand-navy border-t-transparent rounded-full animate-spin" />
              </div>
            ) : selectedLead ? (
              <LeadDetail lead={selectedLead} onClose={() => setSelectedLead(null)} />
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

function StatusBadge({ label, active }: { label: string; active: boolean }) {
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
      active
        ? "bg-green-100 text-green-800 border-green-300"
        : "bg-yellow-100 text-yellow-700 border-yellow-300"
    }`}>
      {active ? "\u2713" : "\u25CB"} {label}
    </span>
  );
}

function KpiCard({ label, value, color }: { label: string; value: number; color?: string }) {
  return (
    <div className="bg-white rounded-xl border p-4 text-center">
      <div className={`text-3xl font-bold ${color || "text-brand-navy"}`}>{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function LeadDetail({ lead, onClose }: { lead: LeadExplain; onClose: () => void }) {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold font-heading">{lead.lead_id}</h2>
          <p className="text-muted-foreground">{lead.intervention} &middot; {lead.country} &middot; {lead.channel}</p>
        </div>
        <button onClick={onClose} className="text-2xl text-muted-foreground hover:text-foreground">&times;</button>
      </div>

      {/* Score */}
      <div className="bg-slate-50 rounded-xl p-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-4xl font-bold text-brand-navy">{lead.score.value}</div>
          <div>
            <span className={`px-3 py-1 rounded-full text-sm font-bold border ${CATEGORY_COLORS[lead.score.category] || ""}`}>
              {lead.score.category}
            </span>
            <p className="text-xs text-muted-foreground mt-1">Score de qualification agentique</p>
          </div>
        </div>

        <div className="space-y-2">
          {lead.score.factors.map((factor) => (
            <div key={factor.name} className="flex items-center gap-3 text-sm">
              <div className="w-32 text-muted-foreground truncate">{factor.name}</div>
              <div className="flex-1">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-navy rounded-full transition-all"
                    style={{ width: `${(factor.points / factor.max_points) * 100}%` }}
                  />
                </div>
              </div>
              <div className="w-16 text-right font-mono text-xs">
                {factor.points}/{factor.max_points}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Odoo & Governance */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-50 rounded-xl p-4">
          <h4 className="font-semibold text-sm mb-2">Odoo CRM</h4>
          <p className="text-sm">
            {lead.odoo.synced ? (
              <span className="text-green-700">Synchronisé (ID: {lead.odoo.lead_id})</span>
            ) : (
              <span className="text-yellow-600">Non synchronisé</span>
            )}
          </p>
          <p className="text-xs text-muted-foreground mt-1">Stage: {lead.stage}</p>
          <p className="text-xs text-muted-foreground">Assigné: {lead.assigned_to}</p>
        </div>
        <div className="bg-slate-50 rounded-xl p-4">
          <h4 className="font-semibold text-sm mb-2">Gouvernance</h4>
          <p className="text-xs">{lead.governance.consent_rgpd ? "\u2713 RGPD" : "\u2717 RGPD"}</p>
          <p className="text-xs">{lead.governance.consent_marketing ? "\u2713 Marketing" : "\u25CB Marketing"}</p>
          <p className="text-xs text-muted-foreground mt-1">{lead.governance.ai_transparency}</p>
        </div>
      </div>

      {/* Follow-up Plan */}
      {lead.follow_up_plan && lead.follow_up_plan.actions.length > 0 && (
        <div>
          <h4 className="font-semibold text-sm mb-2">Plan de suivi</h4>
          <div className="space-y-2">
            {lead.follow_up_plan.actions.map((action, i) => (
              <div key={i} className="flex items-center gap-3 text-sm bg-slate-50 rounded-lg p-3">
                <span className={`w-2 h-2 rounded-full ${action.status === "pending" ? "bg-yellow-400" : "bg-green-400"}`} />
                <span className="flex-1">{action.content}</span>
                <span className="text-xs text-muted-foreground">
                  {new Date(action.scheduled_at).toLocaleString("fr-FR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Audit Trail */}
      <div>
        <h4 className="font-semibold text-sm mb-2">Trace d&apos;audit</h4>
        <div className="space-y-3">
          {lead.audit_trail.map((event, i) => (
            <div key={i} className="border-l-2 border-brand-navy/20 pl-4 py-1">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${event.policy_check?.passed ? "bg-green-500" : "bg-red-500"}`} />
                <span className="font-medium text-sm">{event.action}</span>
                <span className="text-xs text-muted-foreground">{event.actor}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1 whitespace-pre-wrap">{event.reasoning}</p>
              {event.policy_check && (
                <p className="text-xs mt-1">
                  <span className={event.policy_check.passed ? "text-green-700" : "text-red-700"}>
                    [{event.policy_check.passed ? "PASS" : "FAIL"}] {event.policy_check.policy}
                  </span>
                  <span className="text-muted-foreground"> — {event.policy_check.details}</span>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
