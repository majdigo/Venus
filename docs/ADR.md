# 🏗️ Architecture Decision Records (ADR)

## ADR-001: Next.js App Router (Server Components by Default)

**Date:** 2024-12-01
**Status:** Accepted

**Context:** Medical tourism SEO requires full HTML rendering for Google Bots. Client-side rendering (SPA) is insufficient for YMYL (Your Money Your Life) content.

**Decision:** Use Next.js App Router with Server Components as default. Only use `"use client"` for interactive elements (forms, simulators, animations).

**Consequences:** Excellent SEO indexability. Pages render as full HTML. Interactive components isolated as Client boundaries.

---

## ADR-002: Sanity CMS for Dynamic Content

**Date:** 2025-01-15
**Status:** Accepted

**Context:** Doctors, reviews, and gallery cases need to be updated by non-technical staff without code deployments.

**Decision:** Use Sanity.io with GROQ queries and ISR (Incremental Static Regeneration, 1h revalidation).

**Consequences:** Content updates reflect within 1 hour. Fallback static data ensures the site works even if Sanity is offline.

---

## ADR-003: Interactive SVG Anatomy Simulators

**Date:** 2025-02-01
**Status:** Accepted

**Context:** Intervention pages need to increase time-on-page and conversion. Static images don't generate engagement.

**Decision:** Build custom SVG components with Framer Motion animations. Each intervention gets its own interactive anatomy (clickable zones, info panels).

**Consequences:** 9 unique interactive simulators created. Avg. time-on-page increased. Components are reusable and lightweight (no external 3D libraries).

---

## ADR-004: Odoo CRM via XML-RPC Proxy

**Date:** 2025-02-10
**Status:** Accepted

**Context:** Patient leads from the quote funnel must flow into the clinic's existing Odoo CRM for sales team follow-up.

**Decision:** Implement a Next.js API route (`/api/leads`) as a secure proxy. Validate with Zod, then forward to Odoo via XML-RPC. API credentials stay server-side.

**Consequences:** Zero exposure of CRM credentials. Lead data is validated before reaching Odoo. Mock mode available for development.
