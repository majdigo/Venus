/**
 * Venus Estetika — Odoo CRM Adapter
 *
 * Protocol-agnostic adapter layer for Odoo CRM.
 * Currently implements XML-RPC; designed for future migration to JSON-2 API.
 *
 * Principle: All CRM writes go through this adapter.
 * Never scatter direct Odoo calls across API routes.
 */

import type {
  LeadIntake,
  LeadScore,
  OdooLeadPayload,
  OdooSyncResult,
  AuditEvent,
} from '@/lib/domain/types';

// ============================================================
// CONFIGURATION
// ============================================================

interface OdooConfig {
  url: string;
  db: string;
  user: string;
  apiKey: string;
  protocol: 'xmlrpc' | 'json2'; // Future-proof
}

function getConfig(): OdooConfig {
  return {
    url: process.env.ODOO_URL || '',
    db: process.env.ODOO_DB || '',
    user: process.env.ODOO_USER || '',
    apiKey: process.env.ODOO_API_KEY || '',
    protocol: (process.env.ODOO_PROTOCOL as 'xmlrpc' | 'json2') || 'xmlrpc',
  };
}

function isConfigured(): boolean {
  const config = getConfig();
  return !!(config.url && config.apiKey);
}

// ============================================================
// LEAD PAYLOAD BUILDER
// ============================================================

export function buildOdooPayload(
  intake: LeadIntake,
  score: LeadScore
): OdooLeadPayload {
  const medicalSummary = intake.medicalData
    ? `\n\n=== Données Médicales ===\n${JSON.stringify(intake.medicalData, null, 2)}`
    : '';

  // Build rich description with all structured data
  const description = [
    intake.message || 'Demande via formulaire web.',
    '',
    '=== Qualification Agentique ===',
    `Score: ${score.value}/100 (${score.category})`,
    `Facteurs: ${score.factors.map(f => `${f.name}=${f.points}`).join(', ')}`,
    '',
    '=== Informations Patient ===',
    `Intervention: ${intake.intervention}`,
    `Pays: ${intake.country}`,
    `Canal préféré: ${intake.preferredContact}`,
    `Canal d'entrée: ${intake.channel}`,
    `Date souhaitée: ${intake.desiredDate || 'Non précisé'}`,
    `Consent RGPD: Oui`,
    `Consent Marketing: ${intake.consentMarketing ? 'Oui' : 'Non'}`,
    '',
    '=== Attribution ===',
    `Source: ${intake.attribution.utm_source || 'Direct'}`,
    `Medium: ${intake.attribution.utm_medium || 'N/A'}`,
    `Campaign: ${intake.attribution.utm_campaign || 'N/A'}`,
    medicalSummary,
  ].join('\n');

  // Standard Odoo fields only (no x_ custom fields that may not exist)
  const payload: OdooLeadPayload = {
    name: `[${score.category}] ${intake.intervention} - ${intake.firstName} ${intake.lastName}`,
    contact_name: `${intake.firstName} ${intake.lastName}`,
    email_from: intake.email,
    phone: intake.phone,
    description,
    // These x_ fields are set but may be stripped if Odoo rejects them
    x_intervention: intake.intervention,
    x_preferred_contact: intake.preferredContact,
    x_visitor_score: score.value,
    x_device: intake.deviceType,
    x_landing_page: intake.landingPage,
    x_rgpd_consent: true,
    x_marketing_consent: intake.consentMarketing,
    x_lead_category: score.category,
    x_utm_source: intake.attribution.utm_source,
    x_utm_medium: intake.attribution.utm_medium,
    x_utm_campaign: intake.attribution.utm_campaign,
    x_utm_content: intake.attribution.utm_content,
    x_utm_term: intake.attribution.utm_term,
  };

  return payload;
}

/**
 * Strip custom fields (x_*) from payload for Odoo instances
 * that don't have them configured yet.
 */
export function stripCustomFields(payload: OdooLeadPayload): Record<string, unknown> {
  const standard: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(payload)) {
    if (!key.startsWith('x_') && value !== undefined && value !== null) {
      standard[key] = value;
    }
  }
  return standard;
}

// ============================================================
// XML-RPC TRANSPORT
// ============================================================

async function xmlrpcAuthenticate(config: OdooConfig): Promise<number> {
  // Dynamic import to avoid bundling xmlrpc in client code
  const xmlrpc = (await import('xmlrpc')).default;

  const hostname = new URL(config.url).hostname;
  const client = xmlrpc.createSecureClient({
    host: hostname,
    port: 443,
    path: '/xmlrpc/2/common',
  });

  return new Promise((resolve, reject) => {
    client.methodCall(
      'authenticate',
      [config.db, config.user, config.apiKey, {}],
      (err: any, uid: any) => {
        if (err) reject(new Error(`Odoo auth failed: ${String(err)}`));
        if (!uid) reject(new Error('Odoo authentication returned no UID'));
        resolve(uid as number);
      }
    );
  });
}

async function xmlrpcExecute(
  config: OdooConfig,
  uid: number,
  model: string,
  method: string,
  args: unknown[],
  kwargs: Record<string, unknown> = {}
): Promise<unknown> {
  const xmlrpc = (await import('xmlrpc')).default;

  const hostname = new URL(config.url).hostname;
  const client = xmlrpc.createSecureClient({
    host: hostname,
    port: 443,
    path: '/xmlrpc/2/object',
  });

  return new Promise((resolve, reject) => {
    client.methodCall(
      'execute_kw',
      [config.db, uid, config.apiKey, model, method, args, kwargs],
      (err: any, result: unknown) => {
        if (err) reject(new Error(`Odoo ${model}.${method} failed: ${String(err)}`));
        resolve(result);
      }
    );
  });
}

// ============================================================
// ADAPTER CLASS
// ============================================================

let cachedUid: number | null = null;

export class OdooAdapter {
  private config: OdooConfig;

  constructor() {
    this.config = getConfig();
  }

  get configured(): boolean {
    return isConfigured();
  }

  private async getUid(): Promise<number> {
    if (cachedUid) return cachedUid;
    cachedUid = await xmlrpcAuthenticate(this.config);
    return cachedUid;
  }

  /**
   * Create a CRM lead in Odoo.
   * Returns sync result with Odoo lead ID or error.
   */
  async createLead(payload: OdooLeadPayload): Promise<OdooSyncResult> {
    const syncedAt = new Date().toISOString();

    if (!this.configured) {
      console.warn('[ODOO ADAPTER] Not configured — running in mock mode');
      const mockId = Math.floor(10000 + Math.random() * 90000);
      return {
        success: true,
        odooLeadId: mockId,
        syncedAt,
      };
    }

    try {
      const uid = await this.getUid();

      // Try with full payload first (includes custom x_ fields)
      try {
        const leadId = await xmlrpcExecute(
          this.config,
          uid,
          'crm.lead',
          'create',
          [payload]
        );
        return { success: true, odooLeadId: leadId as number, syncedAt };
      } catch (fullError) {
        // If custom fields fail, retry with standard fields only
        const errorMsg = String(fullError);
        if (errorMsg.includes('Invalid field')) {
          console.warn('[ODOO ADAPTER] Custom fields not available, retrying with standard fields');
          const standardPayload = stripCustomFields(payload);
          const leadId = await xmlrpcExecute(
            this.config,
            uid,
            'crm.lead',
            'create',
            [standardPayload]
          );
          return { success: true, odooLeadId: leadId as number, syncedAt };
        }
        throw fullError;
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error('[ODOO ADAPTER] Create lead failed:', message);
      return {
        success: false,
        error: message,
        syncedAt,
      };
    }
  }

  /**
   * Update an existing CRM lead.
   */
  async updateLead(
    odooLeadId: number,
    fields: Partial<OdooLeadPayload>
  ): Promise<OdooSyncResult> {
    const syncedAt = new Date().toISOString();

    if (!this.configured) {
      console.warn('[ODOO ADAPTER] Mock update lead:', odooLeadId);
      return { success: true, odooLeadId, syncedAt };
    }

    try {
      const uid = await this.getUid();
      await xmlrpcExecute(
        this.config,
        uid,
        'crm.lead',
        'write',
        [[odooLeadId], fields]
      );
      return { success: true, odooLeadId, syncedAt };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      return { success: false, error: message, syncedAt };
    }
  }

  /**
   * Create a scheduled activity on a lead.
   */
  async createActivity(
    odooLeadId: number,
    activityData: {
      summary: string;
      note: string;
      activityTypeId?: number;
      dateDeadline: string; // YYYY-MM-DD
    }
  ): Promise<OdooSyncResult> {
    const syncedAt = new Date().toISOString();

    if (!this.configured) {
      console.warn('[ODOO ADAPTER] Mock create activity for lead:', odooLeadId);
      return { success: true, odooLeadId, syncedAt };
    }

    try {
      const uid = await this.getUid();
      await xmlrpcExecute(
        this.config,
        uid,
        'mail.activity',
        'create',
        [{
          res_model_id: 'crm.lead',
          res_id: odooLeadId,
          summary: activityData.summary,
          note: activityData.note,
          activity_type_id: activityData.activityTypeId || 1, // Email by default
          date_deadline: activityData.dateDeadline,
        }]
      );
      return { success: true, odooLeadId, syncedAt };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      return { success: false, error: message, syncedAt };
    }
  }

  /**
   * Search leads by domain filter.
   */
  async searchLeads(
    domain: unknown[],
    fields: string[] = ['name', 'email_from', 'phone', 'x_visitor_score', 'stage_id']
  ): Promise<unknown[]> {
    if (!this.configured) {
      console.warn('[ODOO ADAPTER] Mock search — returning empty');
      return [];
    }

    const uid = await this.getUid();
    return xmlrpcExecute(
      this.config,
      uid,
      'crm.lead',
      'search_read',
      [domain],
      { fields }
    ) as Promise<unknown[]>;
  }
}

// Singleton
export const odooAdapter = new OdooAdapter();
