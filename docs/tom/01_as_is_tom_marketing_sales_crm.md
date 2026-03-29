# AS-IS Target Operating Model — Venus Estetika Marketing, Sales & CRM

**Date:** 2026-03-29
**Author:** Claude Code (Venus Agent)
**Status:** BASELINE — grounded in codebase audit

---

## 1. Executive Summary

Venus Estetika currently operates as a **Next.js 16 marketing website** with a **3-step quote funnel** connected to **Odoo CRM via XML-RPC**. The system captures leads from website forms but has **no qualification logic, no automated follow-up, no conversational intake, and no audit trail**. Communication channels (3CX, WhatsApp, email) are **siloed and untracked**. Lead scoring is hardcoded to `10` for all leads. There is no agent-assisted intelligence layer.

---

## 2. Current Systems Map

| System | Role | Status |
|---|---|---|
| **Next.js 16 website** | Marketing site, 57+ static pages, 30 interventions | LIVE (Vercel-ready) |
| **Odoo CRM** | Lead storage, pipeline, quotes | Configured (XML-RPC) |
| **WordPress** | Legacy website (being replaced) | DEPRECATED |
| **Google Ads** | Paid acquisition (SKAG by intervention) | ACTIVE |
| **GA4** | Analytics, conversion tracking | ACTIVE |
| **GTM** | Event tracking (30+ events), Consent Mode v2 | ACTIVE |
| **3CX** | Phone/VoIP communication | ACTIVE, SILOED |
| **WhatsApp Business** | Client messaging (+216 50 606 780) | ACTIVE, SILOED |
| **Email** | contact@venus-estetika.com | ACTIVE, SILOED |
| **Slack** | Team notifications for new leads | CONFIGURED (webhook) |
| **SMTP/Nodemailer** | Confirmation emails to prospects | CONFIGURED |
| **Sanity.io** | CMS for doctors, galleries, reviews | CONFIGURED (not yet populated) |

---

## 3. Current Lead Journey

### 3.1 Entry Points

```
Google Ads → Landing Page → Quote Funnel → /api/leads → Odoo CRM
Website Navigation → Contact Form → /api/contact → Odoo CRM
Website → Newsletter signup → /api/newsletter → (email list only)
Website → WhatsApp click → WhatsApp Business (NO CRM tracking)
Website → Phone click → 3CX (NO CRM tracking)
```

### 3.2 Quote Funnel Flow (primary conversion path)

The quote funnel (`/devis`) is a 3-step form:

1. **Step 1 — Intervention Selection**: Category + sub-intervention picker
2. **Step 2 — Medical Info**: Gender, age, weight/height (bariatric), dynamic fields by intervention type
3. **Step 3 — Contact Info**: Name, email, phone, country (FR/CH/BE/TN/OTHER), preferred contact method, RGPD consent

**Submission flow:**
```
QuoteFunnel.tsx → POST /api/leads → Zod validation (fullQuoteSchema)
    → Odoo XML-RPC createLead (crm.lead)
    → Slack notification (async)
    → Confirmation email (async)
    → GTM conversion event
```

### 3.3 Contact Form Flow

```
ContactPage → POST /api/contact → Zod validation
    → Odoo XML-RPC createLead (type: "contact_general")
    → Response
```

### 3.4 What Gets Sent to Odoo

**Lead fields (from `/api/leads`):**
- `name`: "Devis Web - {intervention} - {firstName} {lastName}"
- `email_from`, `phone`
- `description`: Free text + JSON dump of medical data
- `x_intervention`: Intervention name
- `x_preferred_contact`: phone/whatsapp/email
- `x_rgpd_consent`: true
- `x_marketing_consent`: boolean

**What is NOT sent:**
- No lead score (hardcoded `10`)
- No UTM parameters (mapping exists in `utm.ts` but not wired)
- No device/browser info
- No landing page URL
- No session/visit history
- No country mapping to Odoo `country_id`
- No source/medium/campaign IDs (fields exist in `CrmLead` interface but unused)

---

## 4. Current CRM Process (Odoo)

### 4.1 Odoo Integration Architecture

```
odoo-rpc.ts — Real XML-RPC client (OdooClient class)
    ├── authenticate() — XML-RPC /xmlrpc/2/common
    ├── execute() — XML-RPC /xmlrpc/2/object (execute_kw)
    ├── createLead() — crm.lead create
    ├── updateLead() — crm.lead write
    └── searchLeads() — crm.lead search_read

odoo-client.ts — Mock client with hardcoded data (for dev)
    ├── getDoctors() — returns MOCK_DOCTORS (9 surgeons)
    ├── getDoctorBySlug()
    ├── getInterventions() — returns MOCK_INTERVENTIONS (11 entries)
    └── getGroupedCategories()
```

**Key observation:** Two separate Odoo files exist with different purposes:
- `odoo-rpc.ts` = real CRM write operations
- `odoo-client.ts` = mock data reads (never hits real Odoo)

### 4.2 Known Odoo Custom Fields

From `CrmLead` interface:
- `x_intervention` — intervention type
- `x_preferred_contact` — phone/whatsapp/email
- `x_visitor_score` — lead score (UNUSED)
- `x_device` — device type (UNUSED)
- `x_landing_page` — referrer (UNUSED)
- `x_rgpd_consent` — GDPR consent
- `x_marketing_consent` — marketing consent

### 4.3 Pipeline & Stages

**Unknown.** The codebase does not define or use pipeline stages. Odoo stages are managed manually by staff. No stage transition rules exist in code.

### 4.4 Automations

**None in code.** Odoo-side automations (if any) are unknown from the codebase.

---

## 5. Current Channel Usage

### 5.1 WhatsApp

- Widget on all pages (`WhatsAppWidget.tsx`)
- Click tracked via GTM (`whatsapp_click` event)
- Links to `https://wa.me/21650606780`
- **Not connected to CRM** — conversations stay in WhatsApp Business app
- No message templates, no automated responses
- No lead creation from WhatsApp conversations

### 5.2 Phone / 3CX

- Phone number displayed on website, click-to-call tracked (`phone_click` event)
- 3CX handles calls
- **Not connected to CRM** — call records stay in 3CX
- No call-to-lead automation
- No callback request form

### 5.3 Email

- Confirmation emails sent via Nodemailer (SMTP)
- Contact form creates leads in Odoo
- **Inbound email responses not tracked** — replies go to inbox
- No email threading with CRM
- No template library beyond confirmation email
- No follow-up sequences

### 5.4 Slack

- New lead notifications via webhook
- Shows: patient name, intervention, score, source, device
- One-way notification only (no Slack → CRM actions)

---

## 6. Current Roles & Responsibilities

### 6.1 Known Roles (from specs and code)

| Role | Current State |
|---|---|
| **Medical Coordinator** | Answers leads manually, schedules consultations |
| **Sales Advisor** | Unclear if separate from coordinator |
| **Surgeons (9)** | Listed in data, no CRM involvement |
| **Majdi (Product Owner)** | Oversees strategy, Ads, budget |
| **Marketing Manager** | Google Ads management |
| **No AI Supervisor** | No one oversees AI-assisted actions |

### 6.2 Current Manual Workflow (inferred)

1. Lead arrives in Odoo (from website form)
2. Someone receives Slack notification
3. Someone manually opens Odoo
4. Someone reads the lead description (raw text + JSON medical data)
5. Someone decides how to respond (email? WhatsApp? phone?)
6. Someone responds manually
7. Someone creates a quote (Odoo quote template)
8. Someone follows up (or doesn't)
9. No systematic tracking of response time, conversion, or follow-up

---

## 7. Current Tracking & Analytics

### 7.1 GTM Events (implemented)

- `faq_interaction` — FAQ accordion opens
- `whatsapp_click` — WhatsApp CTA clicked
- `phone_click` — Phone CTA clicked
- `intervention_page_view` — Intervention page viewed
- `cta_click` — Generic CTA click
- `scroll_depth` — 25%/50%/75%/100% scroll
- `quote_funnel_step` — Step completion in devis funnel
- `quote_funnel_complete` — Funnel submitted

### 7.2 Tracking Hooks

- `useGtmEvent.ts` — Generic GTM push
- `useScrollDepth.ts` — Scroll milestone tracking
- `useIntersectionEvent.ts` — Viewport visibility tracking
- `useGtmTimer.ts` — Time-based event tracking
- `TrackedLink.tsx` — Link click tracking component
- `TrackedSection.tsx` — Section visibility tracking

### 7.3 Consent Mode

- Consent Mode v2 configured in GtmProvider
- CookieConsent banner present
- RGPD consent on quote form (mandatory)

### 7.4 Gaps

- **No server-side GTM** — client-side only
- **No Meta Conversions API (CAPI)** — specified but not implemented
- **No enhanced conversions** — SHA-256 helper exists but unused
- **No attribution model** — UTM mapping exists but not wired to leads
- **No A/B testing infrastructure**
- **No heatmap or session recording**

---

## 8. Current Pain Points

### 8.1 Lead Quality & Qualification

1. **All leads treated equally** — no scoring, no prioritization
2. **Lead score hardcoded to 10** — `score: 10` in `/api/leads`
3. **No qualification criteria** — no eligibility check, no intent detection
4. **Medical data as raw JSON in description** — not structured CRM fields
5. **No lead routing** — all leads go to same pipeline, no assignment rules
6. **UTM data lost** — mapping code exists but never called

### 8.2 Response & Follow-up

7. **No response SLA** — no tracking of first-response time
8. **No follow-up automation** — manual only
9. **No nurturing sequences** — one-shot confirmation email only
10. **No dormancy detection** — cold leads not flagged
11. **No re-engagement campaigns**

### 8.3 Channel Fragmentation

12. **WhatsApp conversations invisible to CRM**
13. **3CX calls invisible to CRM**
14. **Email replies invisible to CRM**
15. **No unified conversation history per lead**
16. **No channel preference tracking** (field exists but unused)

### 8.4 Traceability & Governance

17. **No audit trail** — no record of what was done, when, by whom
18. **No AI action logging** — no agent decisions recorded
19. **No policy engine** — no business rules enforced systematically
20. **No approval workflows** — all actions direct
21. **RGPD compliance partial** — consent captured but no data lifecycle management

### 8.5 Technical Debt

22. **Two Odoo clients** (`odoo-client.ts` mock + `odoo-rpc.ts` real) — confusing dual architecture
23. **XML-RPC only** — deprecated protocol (Odoo plans removal by v22)
24. **No error recovery** — if Odoo write fails, lead is lost
25. **No webhook handler** — `/api/webhooks/odoo` directory exists but route.ts missing from git
26. **No retry logic** — single attempt for all external calls
27. **No health checks** — no monitoring of Odoo connectivity

---

## 9. Current Opportunities for Agentic Augmentation

| Opportunity | Impact | Complexity |
|---|---|---|
| **Lead scoring** based on intervention type, country, urgency, budget | HIGH | LOW |
| **UTM → Odoo mapping** (code exists, just needs wiring) | MEDIUM | LOW |
| **Automated follow-up email sequences** | HIGH | MEDIUM |
| **WhatsApp → CRM lead creation** | HIGH | MEDIUM |
| **Response time SLA tracking** | MEDIUM | LOW |
| **Qualification agent** (eligibility, intent, priority) | HIGH | MEDIUM |
| **Next-best-action recommendations** | HIGH | HIGH |
| **Conversation intelligence** (email/chat analysis) | MEDIUM | HIGH |
| **Odoo adapter layer** (future-proof for JSON-2 API) | MEDIUM | MEDIUM |
| **Audit trail for all system actions** | HIGH | MEDIUM |

---

## 10. Architecture Diagram (Current)

```
                    ┌─────────────┐
                    │  Google Ads  │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │  Next.js    │
                    │  Website    │
                    │  (57 pages) │
                    └──┬───┬───┬──┘
                       │   │   │
          ┌────────────┘   │   └────────────┐
          │                │                │
    ┌─────▼─────┐   ┌─────▼─────┐   ┌──────▼──────┐
    │ /api/leads │   │/api/contact│   │/api/newsletter│
    └─────┬─────┘   └─────┬─────┘   └──────┬──────┘
          │               │                │
          ▼               ▼                │
    ┌─────────────────────────┐            │
    │  Odoo CRM (XML-RPC)    │            │
    │  crm.lead create       │            │
    └─────────────────────────┘            │
                                           │
    ┌──────────────┐                       │
    │  Slack       │◄── Webhook notify     │
    └──────────────┘                       │
                                           │
    ┌──────────────┐                       │
    │  SMTP Email  │◄── Confirmation       │
    └──────────────┘                       │

    ═══════════════════════════════════════
    SILOED / UNCONNECTED:
    ┌──────────────┐  ┌──────────────┐
    │  WhatsApp    │  │  3CX Phone   │
    │  Business    │  │  System      │
    └──────────────┘  └──────────────┘
    (No CRM link)      (No CRM link)
```

---

*This document is a living baseline. It will be updated as the TARGET TOM is implemented.*
