/**
 * Venus Estetika — Lead Stats API
 *
 * GET /api/leads/stats
 *
 * Returns aggregate statistics for processed leads.
 */

import { NextResponse } from 'next/server';
import { getStats, getAllLeads } from '@/lib/agents/orchestrator';

export async function GET() {
  const stats = getStats();
  const leads = getAllLeads();

  const recentLeads = leads
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 10)
    .map(l => ({
      id: l.id,
      name: `${l.intake.firstName} ${l.intake.lastName.charAt(0)}.`,
      intervention: l.intake.intervention,
      score: l.score.value,
      category: l.score.category,
      stage: l.stage,
      country: l.intake.country,
      created_at: l.createdAt,
    }));

  return NextResponse.json({
    stats,
    recent_leads: recentLeads,
    system: {
      odoo_configured: !!process.env.ODOO_API_KEY,
      smtp_configured: !!process.env.SMTP_HOST,
      slack_configured: !!process.env.SLACK_WEBHOOK_URL,
      mode: process.env.ODOO_API_KEY ? 'production' : 'mock',
    },
  }, { status: 200 });
}
