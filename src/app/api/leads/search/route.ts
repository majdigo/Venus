/**
 * Venus Estetika — Lead Search API
 *
 * GET /api/leads/search?q=marie&category=HOT&stage=new
 */

import { NextResponse } from 'next/server';
import { getAllLeads } from '@/lib/agents/orchestrator';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.toLowerCase();
  const category = searchParams.get('category');
  const stage = searchParams.get('stage');

  let leads = getAllLeads();

  if (q) {
    leads = leads.filter(l =>
      l.id.toLowerCase().includes(q) ||
      l.intake.firstName.toLowerCase().includes(q) ||
      l.intake.lastName.toLowerCase().includes(q) ||
      l.intake.email.toLowerCase().includes(q) ||
      l.intake.intervention.toLowerCase().includes(q)
    );
  }

  if (category) {
    leads = leads.filter(l => l.score.category === category);
  }

  if (stage) {
    leads = leads.filter(l => l.stage === stage);
  }

  // Sort by creation date descending
  leads.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return NextResponse.json({
    count: leads.length,
    leads: leads.map(l => ({
      id: l.id,
      name: `${l.intake.firstName} ${l.intake.lastName}`,
      email: l.intake.email,
      intervention: l.intake.intervention,
      score: l.score.value,
      category: l.score.category,
      stage: l.stage,
      country: l.intake.country,
      channel: l.intake.channel,
      odoo_id: l.odooLeadId,
      created_at: l.createdAt,
    })),
  });
}
