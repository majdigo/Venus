/**
 * Venus Estetika — Domain Model
 * Core business objects for the agentic marketing/sales/CRM system.
 *
 * Principle: Technology follows Policy follows Organization.
 */

// ============================================================
// LEAD LIFECYCLE
// ============================================================

export interface LeadIntake {
  // Identity
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: 'FR' | 'CH' | 'BE' | 'TN' | 'OTHER';

  // Medical intent
  intervention: string;
  subIntervention?: string;
  medicalData?: Record<string, unknown>;

  // Context
  preferredContact: 'phone' | 'whatsapp' | 'email';
  desiredDate?: 'asap' | '1-2-months' | '3-6-months' | 'just-looking';
  message?: string;

  // Attribution
  attribution: Attribution;

  // Consent
  consentRGPD: true;
  consentMarketing: boolean;

  // Metadata
  channel: LeadChannel;
  capturedAt: string; // ISO 8601
  sessionId?: string;
  deviceType?: string;
  landingPage?: string;
}

export type LeadChannel = 'website_form' | 'contact_form' | 'whatsapp' | 'phone' | 'email' | 'chat';

export interface Attribution {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  referrer?: string;
  landingPage?: string;
}

export interface LeadScore {
  value: number; // 0-100
  category: LeadCategory;
  factors: ScoreFactor[];
  computedAt: string; // ISO 8601
  agentRunId: string;
}

export interface ScoreFactor {
  name: string;
  points: number;
  maxPoints: number;
  reasoning: string;
}

export type LeadCategory = 'HOT' | 'WARM' | 'NURTURE' | 'COLD';

export interface Lead {
  id: string; // VE-2026-{number}
  intake: LeadIntake;
  score: LeadScore;
  stage: SalesStage;
  assignedTo?: string; // Role or person
  odooLeadId?: number;
  conversations: ConversationRef[];
  followUpPlan?: FollowUpPlan;
  createdAt: string;
  updatedAt: string;
}

// ============================================================
// SALES PROCESS
// ============================================================

export type SalesStage =
  | 'new'
  | 'qualified'
  | 'consultation_scheduled'
  | 'quote_sent'
  | 'quote_accepted'
  | 'booking_confirmed'
  | 'completed'
  | 'lost';

export interface StageTransition {
  from: SalesStage;
  to: SalesStage;
  requiredCriteria: string[];
  requiresApproval: boolean;
  approverRole?: string;
}

export interface FollowUpPlan {
  actions: FollowUpAction[];
  createdBy: string; // agent or human
  createdAt: string;
}

export interface FollowUpAction {
  type: 'email' | 'call' | 'whatsapp' | 'sms' | 'activity';
  scheduledAt: string;
  status: 'pending' | 'executed' | 'skipped' | 'failed';
  content?: string;
  executedAt?: string;
  executedBy?: string;
}

// ============================================================
// CONVERSATION
// ============================================================

export interface ConversationRef {
  id: string;
  channel: LeadChannel;
  startedAt: string;
  lastMessageAt: string;
  messageCount: number;
}

// ============================================================
// CONSENT & COMPLIANCE
// ============================================================

export interface ConsentRecord {
  type: 'rgpd' | 'marketing' | 'data_processing';
  granted: boolean;
  grantedAt: string;
  source: string; // form URL, email link, etc.
  ipAddress?: string;
}

// ============================================================
// ODOO BRIDGE
// ============================================================

export interface OdooLeadPayload {
  name: string;
  contact_name: string;
  email_from: string;
  phone: string;
  description: string;
  x_intervention: string;
  x_preferred_contact: string;
  x_visitor_score: number;
  x_device?: string;
  x_landing_page?: string;
  x_rgpd_consent: boolean;
  x_marketing_consent: boolean;
  x_lead_category?: string; // HOT/WARM/NURTURE/COLD
  x_utm_source?: string;
  x_utm_medium?: string;
  x_utm_campaign?: string;
  x_utm_content?: string;
  x_utm_term?: string;
  tag_ids?: Array<[number, number, number[]]>; // Odoo many2many format
  [key: string]: unknown;
}

export interface OdooSyncResult {
  success: boolean;
  odooLeadId?: number;
  error?: string;
  syncedAt: string;
}

// ============================================================
// AGENT RUNTIME
// ============================================================

export interface AgentRun {
  id: string;
  agent: string;
  startedAt: string;
  completedAt?: string;
  durationMs?: number;
  input: Record<string, unknown>;
  output: Record<string, unknown>;
  decisions: Decision[];
  status: 'running' | 'completed' | 'failed';
  error?: string;
}

export interface Decision {
  type: string;
  reasoning: string;
  confidence: number; // 0-1
  factors: Record<string, unknown>;
  action?: ActionRequest;
}

export interface ActionRequest {
  type: string;
  target: string;
  payload: Record<string, unknown>;
  requiresApproval: boolean;
  approvedBy?: string;
  approvedAt?: string;
  status: 'proposed' | 'approved' | 'rejected' | 'executed';
}

// ============================================================
// AUDIT & TRACE
// ============================================================

export interface AuditEvent {
  id: string;
  timestamp: string;
  actor: string; // "agent:qualification" | "human:care_advisor_1"
  action: string;
  target: string; // "lead:VE-2026-12345"
  input?: Record<string, unknown>;
  output?: Record<string, unknown>;
  reasoning?: string;
  policyCheck?: PolicyCheckResult;
  agentRunId?: string;
}

export interface PolicyCheckResult {
  passed: boolean;
  policy: string;
  details: string;
}

// ============================================================
// API RESPONSE
// ============================================================

export interface LeadProcessingResult {
  success: boolean;
  leadId: string;
  score: LeadScore;
  odooSync: OdooSyncResult;
  recommendedActions: RecommendedAction[];
  auditTrail: AuditEvent[];
  explainUrl: string;
}

export interface RecommendedAction {
  type: string;
  description: string;
  priority: 'immediate' | 'scheduled' | 'optional';
  scheduledFor?: string;
  requiresApproval: boolean;
}
