/**
 * Venus Estetika — Persistent Lead & Audit Store
 *
 * File-based JSON store for demo stability.
 * Survives server restarts. Replace with a database in production.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import type { Lead, AuditEvent } from '@/lib/domain/types';

const DATA_DIR = join(process.cwd(), '.data');
const LEADS_FILE = join(DATA_DIR, 'leads.json');
const AUDIT_FILE = join(DATA_DIR, 'audit.json');

function ensureDir() {
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true });
  }
}

function readJson<T>(filePath: string, fallback: T): T {
  try {
    if (!existsSync(filePath)) return fallback;
    const raw = readFileSync(filePath, 'utf-8');
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJson(filePath: string, data: unknown) {
  ensureDir();
  writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

// ============================================================
// LEAD STORE
// ============================================================

export function saveLead(lead: Lead): void {
  const leads = getAllLeadsFromStore();
  const idx = leads.findIndex(l => l.id === lead.id);
  if (idx >= 0) {
    leads[idx] = lead;
  } else {
    leads.push(lead);
  }
  writeJson(LEADS_FILE, leads);
}

export function getLeadFromStore(leadId: string): Lead | undefined {
  const leads = getAllLeadsFromStore();
  return leads.find(l => l.id === leadId);
}

export function getAllLeadsFromStore(): Lead[] {
  return readJson<Lead[]>(LEADS_FILE, []);
}

export function getLeadsByCategory(category: string): Lead[] {
  return getAllLeadsFromStore().filter(l => l.score.category === category);
}

export function getLeadsByStage(stage: string): Lead[] {
  return getAllLeadsFromStore().filter(l => l.stage === stage);
}

export function searchLeads(query: string): Lead[] {
  const q = query.toLowerCase();
  return getAllLeadsFromStore().filter(l =>
    l.id.toLowerCase().includes(q) ||
    l.intake.firstName.toLowerCase().includes(q) ||
    l.intake.lastName.toLowerCase().includes(q) ||
    l.intake.email.toLowerCase().includes(q) ||
    l.intake.intervention.toLowerCase().includes(q)
  );
}

export function updateLeadStage(leadId: string, stage: Lead['stage']): Lead | undefined {
  const leads = getAllLeadsFromStore();
  const lead = leads.find(l => l.id === leadId);
  if (lead) {
    lead.stage = stage;
    lead.updatedAt = new Date().toISOString();
    writeJson(LEADS_FILE, leads);
  }
  return lead;
}

export function getLeadStats(): {
  total: number;
  byCategory: Record<string, number>;
  byStage: Record<string, number>;
  avgScore: number;
} {
  const leads = getAllLeadsFromStore();
  const byCategory: Record<string, number> = {};
  const byStage: Record<string, number> = {};
  let totalScore = 0;

  for (const lead of leads) {
    byCategory[lead.score.category] = (byCategory[lead.score.category] || 0) + 1;
    byStage[lead.stage] = (byStage[lead.stage] || 0) + 1;
    totalScore += lead.score.value;
  }

  return {
    total: leads.length,
    byCategory,
    byStage,
    avgScore: leads.length > 0 ? Math.round(totalScore / leads.length) : 0,
  };
}

// ============================================================
// AUDIT STORE
// ============================================================

export function saveAuditEvents(events: AuditEvent[]): void {
  const existing = getAllAuditEvents();
  existing.push(...events);
  // Keep last 1000 events max
  const trimmed = existing.slice(-1000);
  writeJson(AUDIT_FILE, trimmed);
}

export function getAuditEventsForLead(leadId: string): AuditEvent[] {
  return getAllAuditEvents().filter(e => e.target === `lead:${leadId}`);
}

export function getAllAuditEvents(): AuditEvent[] {
  return readJson<AuditEvent[]>(AUDIT_FILE, []);
}

export function clearStore(): void {
  writeJson(LEADS_FILE, []);
  writeJson(AUDIT_FILE, []);
}
