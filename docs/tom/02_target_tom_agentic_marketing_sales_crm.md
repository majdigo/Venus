# TARGET Operating Model — Venus Estetika Agentic Marketing, Sales & CRM

**Date:** 2026-03-29
**Author:** Claude Code (Venus Agent)
**Status:** DESIGN — ready for Phase 1 implementation

---

## 1. Vision

Transform Venus Estetika from a website-with-forms into an **agentic business system** where:

- Every lead is **structured, scored, and routed** automatically
- Every action is **governed by policy** and **auditable**
- Every communication channel feeds a **unified conversation record**
- AI agents **recommend** actions; humans **approve** high-stakes ones
- The system is **explainable** to management, operators, and auditors

---

## 2. Target Business Architecture

### 2.1 Three Pillars Applied

#### People & Organization

| Role | Responsibility | AI Assistance Level |
|---|---|---|
| **Marketing Manager** | Ads, campaigns, attribution | Analytics dashboards |
| **Sales Manager** | Pipeline oversight, forecasting | AI-powered lead scoring |
| **Care Advisor** | First contact, qualification calls | AI-drafted responses, suggested scripts |
| **Medical Coordinator** | Consultation scheduling, medical eligibility | Eligibility rules engine |
| **Closer** | Quote delivery, objection handling | AI-suggested objection responses |
| **AI Supervisor** | Monitors agent actions, approves outbound | Dashboard + approval queue |

#### Policy & Procedures

| Policy | Description | Enforcement |
|---|---|---|
| **Lead Qualification SOP** | Score > 40 → hot, 20-40 → warm, <20 → nurture | Automated by Qualification Agent |
| **Response SLA** | Hot leads: <2h, Warm: <24h, Nurture: <72h | Tracked by Audit Agent, alerts on breach |
| **Stage Transition Rules** | Leads advance stages only when criteria met | CRM Control Agent enforces |
| **Outbound Communication** | Email drafts require human review before send | Policy Guardian checks |
| **Consent Policy** | No marketing without explicit consent | Enforced at form + agent level |
| **Escalation Rules** | No response in SLA → escalate to Sales Manager | Automated escalation |
| **Quote Procedure** | Quotes require Care Advisor + Coordinator sign-off | Approval workflow |

#### Technology & Infrastructure

| System | Role in Target |
|---|---|
| **Next.js Website** | Lead capture, content, interactive tools |
| **Odoo CRM** | System of record for leads/opportunities |
| **Odoo Adapter** | Protocol-agnostic layer (XML-RPC now, JSON-2 future) |
| **Agent Runtime** | Orchestration of AI agents |
| **Event Store** | All actions logged with timestamp, actor, reason |
| **Email Service** | Templated responses, sequences, confirmations |
| **WhatsApp Adapter** | Bridge WhatsApp → unified conversation |
| **3CX Adapter** | Bridge call events → CRM activities |
| **Analytics Layer** | GA4 + GTM + attribution + agent metrics |

---

## 3. Target Lead Journey

```
CAPTURE → NORMALIZE → SCORE → ROUTE → ACTIVATE → CONVERT → AUDIT
```

### 3.1 Capture (multi-channel)

| Channel | Mechanism | Output |
|---|---|---|
| Quote Funnel | 3-step form → /api/leads | Structured LeadIntake |
| Contact Form | Simple form → /api/contact | Structured LeadIntake |
| WhatsApp | Message received → webhook adapter | Structured LeadIntake |
| Phone/3CX | Call event → webhook adapter | Activity record |
| Email | Inbound email → parsing adapter | Conversation record |
| Google Ads | Click → landing page → form | LeadIntake + attribution |

### 3.2 Normalize

All inputs are normalized into a `LeadIntake` business object:
- Patient info (name, contact, country, language)
- Medical intent (intervention, urgency, medical data)
- Attribution (source, medium, campaign, landing page)
- Consent records
- Channel metadata

### 3.3 Score

**Lead Score Model (0-100):**

| Factor | Points | Logic |
|---|---|---|
| **Intervention value** | 0-25 | High-value procedures (bypass, mommy makeover) score higher |
| **Country** | 0-20 | FR=20, CH=20, BE=15, TN=5, OTHER=10 |
| **Urgency** | 0-20 | ASAP=20, 1-2mo=15, 3-6mo=10, just-looking=5 |
| **Completeness** | 0-15 | Medical fields filled, photos attached |
| **Channel quality** | 0-10 | Form=10, Email=8, WhatsApp=6, Phone=5 |
| **Previous interaction** | 0-10 | Returning visitor, multiple page views |

### 3.4 Route

| Score Range | Category | Routing |
|---|---|---|
| 70-100 | **HOT** | Immediate Care Advisor assignment, SLA: 2h |
| 40-69 | **WARM** | Care Advisor queue, SLA: 24h |
| 20-39 | **NURTURE** | Automated nurture sequence, SLA: 72h |
| 0-19 | **COLD** | Low-touch drip campaign |

### 3.5 Activate

- **HOT**: AI drafts personalized response → Care Advisor reviews → sends
- **WARM**: AI schedules follow-up activity in Odoo → Advisor receives task
- **NURTURE**: Automated email sequence (3 emails over 14 days)
- **COLD**: Monthly newsletter + retargeting via Google Ads

### 3.6 Convert

- Quote preparation assisted by AI (price lookup, medical matching)
- Quote sent after human approval
- Follow-up sequence after quote delivery
- Conversion tracking end-to-end (form → CRM → quote → booking)

### 3.7 Audit

Every action produces an `AuditEvent`:
```typescript
{
  timestamp: ISO8601,
  actor: "agent:qualification" | "human:care_advisor_1",
  action: "score_lead" | "draft_email" | "move_stage",
  target: "lead:VE-2026-12345",
  input: { ... },
  output: { ... },
  reasoning: "Lead scored 72 based on: bypass (25pts) + FR (20pts) + ASAP (20pts) + complete (7pts)",
  policy_check: "PASSED — meets hot lead criteria",
  requires_approval: false
}
```

---

## 4. Target Agent Topology

### 4.1 Orchestrator

**Chief Revenue Orchestrator**
- Routes incoming events to appropriate domain agents
- Maintains lead context across interactions
- Coordinates multi-agent workflows

### 4.2 Domain Agents

**Lead Intake Agent**
- Normalizes data from all channels into `LeadIntake`
- Extracts: intervention, country, language, urgency
- Maps UTM parameters to attribution

**Qualification Agent**
- Computes lead score (0-100)
- Classifies: HOT / WARM / NURTURE / COLD
- Suggests stage and owner assignment
- Detects no-fit cases (age restrictions, contraindications)

**Conversation Agent**
- Drafts email responses based on templates + context
- Suggests WhatsApp reply text
- Follows brand tone guidelines
- Handles objections with approved scripts

**Activation Agent**
- Schedules follow-up activities
- Triggers nurture sequences
- Detects dormancy (no interaction > 7 days)
- Proposes re-engagement actions

**CRM Control Agent**
- Creates/updates leads in Odoo via adapter
- Creates activities (tasks, calls, emails)
- Manages tags and stage transitions
- Enforces stage transition rules

### 4.3 Governance Agents

**Policy Guardian**
- Validates all outbound actions against policies
- Checks consent before marketing communications
- Enforces SLA tracking
- Blocks unauthorized stage changes

**Audit & Trace Agent**
- Logs all agent decisions and human actions
- Stores reasoning traces
- Produces explain payloads on demand
- Generates compliance reports

---

## 5. Target Data Model

### 5.1 Core Domain Objects

```typescript
// Lead lifecycle
LeadIntake → Lead → Opportunity → Booking

// Supporting objects
LeadScore { value, factors[], computed_at, agent_run_id }
SalesStage { name, criteria[], requires_approval }
FollowUpPlan { actions[], schedule, owner }
Conversation { channel, messages[], lead_id }
ConsentRecord { type, granted_at, source, ip }

// CRM bridge
OdooLead { odoo_id, synced_at, sync_status }
OdooActivity { type, due_date, owner, summary }

// Agent runtime
AgentRun { agent, input, output, started_at, duration_ms }
Decision { type, reasoning, confidence, factors[] }
AuditEvent { actor, action, target, timestamp, policy_check }
```

### 5.2 Key Relationships

```
LeadIntake --creates--> Lead
Lead --scored_by--> LeadScore
Lead --assigned_to--> Role (Care Advisor)
Lead --interested_in--> ProcedureInterest
Lead --synced_to--> OdooLead
Lead --has--> Conversation[]
Lead --governed_by--> Policy[]
Decision --affects--> Lead
Decision --produced_by--> AgentRun
Decision --checked_by--> PolicyGuardian
AuditEvent --records--> Decision | HumanAction
```

---

## 6. Target System Architecture

```
┌─────────────────────────────────────────────────────┐
│                    CHANNELS                          │
│  Website  │  WhatsApp  │  3CX  │  Email  │  Ads    │
└─────┬─────┴─────┬──────┴───┬───┴────┬────┴────┬────┘
      │           │          │        │         │
      ▼           ▼          ▼        ▼         ▼
┌─────────────────────────────────────────────────────┐
│              INTAKE LAYER (API Routes)               │
│  /api/leads  /api/contact  /api/webhooks/*           │
│         Normalize → LeadIntake object                │
└──────────────────────┬──────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────┐
│           AGENT ORCHESTRATION LAYER                  │
│                                                      │
│  ┌─────────┐ ┌──────────┐ ┌────────────┐           │
│  │ Qualify  │ │ Activate │ │ Converse   │           │
│  │ Agent   │ │ Agent    │ │ Agent      │           │
│  └────┬────┘ └────┬─────┘ └─────┬──────┘           │
│       │           │              │                   │
│  ┌────▼───────────▼──────────────▼──────┐           │
│  │        Policy Guardian               │           │
│  │  (validates all actions)             │           │
│  └──────────────────┬───────────────────┘           │
│                     │                                │
└─────────────────────┼────────────────────────────────┘
                      │
          ┌───────────┼───────────┐
          │           │           │
    ┌─────▼─────┐ ┌───▼───┐ ┌────▼────┐
    │ Odoo      │ │ Email │ │ Audit   │
    │ Adapter   │ │Service│ │ Store   │
    │(XML-RPC/  │ │       │ │         │
    │ JSON-2)   │ │       │ │         │
    └───────────┘ └───────┘ └─────────┘
```

---

## 7. Phased Implementation Roadmap

### Phase 1 — Foundation (THIS SESSION)
- [x] AS-IS TOM document
- [x] TARGET TOM document
- [ ] Domain model TypeScript types
- [ ] Odoo adapter layer (protocol-agnostic)
- [ ] Lead scoring engine
- [ ] Audit event store
- [ ] Wire UTM → Odoo mapping
- [ ] First end-to-end test

### Phase 2 — Qualification & Routing
- [ ] Qualification agent implementation
- [ ] Stage transition rules
- [ ] Lead routing by score
- [ ] SLA tracking
- [ ] Follow-up scheduling

### Phase 3 — Conversational Activation
- [ ] Email template engine
- [ ] Follow-up sequences
- [ ] WhatsApp → CRM bridge
- [ ] Conversation agent

### Phase 4 — Governance & Dashboard
- [ ] Policy guardian enforcement
- [ ] Approval workflows
- [ ] Agent metrics dashboard
- [ ] Compliance reporting
- [ ] Demo hardening

---

## 8. Demo Scenario

**Title:** "From Click to Qualified Lead in 30 Seconds"

1. Prospect lands on rhinoplastie page from Google Ads (UTM tracked)
2. Fills out quote funnel (3 steps)
3. System normalizes → `LeadIntake` created
4. Qualification Agent scores: **72/100 (HOT)**
   - Rhinoplastie = 15pts, France = 20pts, ASAP = 20pts, complete form = 12pts, form channel = 5pts
5. CRM Control Agent creates lead in Odoo with score, tags, stage
6. Activation Agent schedules follow-up activity (2h SLA)
7. Policy Guardian validates: consent OK, SLA set, no approval needed
8. Audit trail shows: intake → score → route → sync → schedule → audit
9. Explain endpoint returns full reasoning chain
10. Slack notification with score + recommended action

**Verifiable by:**
- `curl POST /api/leads` with test data
- Response includes `lead_id`, `score`, `category`, `recommended_actions`, `audit_trail`
- Odoo shows lead with correct fields
- `/api/leads/{id}/explain` returns reasoning trace

---

*This TARGET TOM drives all implementation decisions. Technology follows policy and organization.*
