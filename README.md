<div align="center">

# 🌟 Venus Estetika

**Plateforme de Tourisme Médical Premium — Next.js 16 + Sanity CMS**

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?logo=tailwindcss)](https://tailwindcss.com)
[![Sanity CMS](https://img.shields.io/badge/Sanity-CMS-F03E2F?logo=sanity)](https://sanity.io)
[![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?logo=githubactions)](https://github.com/features/actions)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Development Workflow](#development-workflow)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Overview

Venus Estetika est la plateforme web officielle de la clinique Venus Estetika (Tunis), spécialisée dans le tourisme médical haut de gamme. Le site couvre :

- **Chirurgie Esthétique** : Visage, Silhouette, Mammaire
- **Chirurgie Bariatrique** : Sleeve, Bypass Gastrique
- **Dentisterie Esthétique** : Facettes E-max, Implants
- **Greffe Capillaire** : FUE, DHI

### Objectifs Business

| Métrique | Objectif |
|---|---|
| Google Ads Quality Score | ≥ 8/10 |
| Core Web Vitals (LCP) | < 2.5s |
| Taux de conversion Devis | > 5% |
| SEO Organique (3 mois) | Top 5 "chirurgie tunisie" |

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **Language** | TypeScript 5.x |
| **Styling** | Tailwind CSS 4 |
| **CMS** | Sanity.io (GROQ) |
| **Animations** | Framer Motion |
| **Forms** | React Hook Form + Zod |
| **Analytics** | GTM (Consent Mode v2) |
| **CRM** | Odoo (XML-RPC) |
| **CI/CD** | GitHub Actions → Vercel |
| **Hosting** | Vercel (Edge Network) |

## Getting Started

### Prerequisites

- Node.js ≥ 20
- npm ≥ 10

### Installation

```bash
git clone https://github.com/majdigo/Venus.git
cd Venus
npm install
```

### Development

```bash
npm run dev      # Starts dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint check
```

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── interventions/            # Intervention pages (silos SEO)
│   │   ├── chirurgie-visage/     # Rhinoplastie, Blépharoplastie
│   │   ├── chirurgie-silhouette/ # Liposuccion, Abdominoplastie, BBL
│   │   ├── chirurgie-mammaire/   # Augmentation, Lifting seins
│   │   ├── bariatrique/          # Sleeve, Bypass
│   │   ├── capillaire/           # Greffe FUE/DHI
│   │   └── dentaire/             # Facettes, Implants
│   ├── devis/                    # Quote funnel (multi-step)
│   ├── chirurgiens/              # Surgeon profiles (E-E-A-T)
│   ├── temoignages/              # Patient testimonials
│   ├── contact/                  # Contact page
│   └── api/                      # Route Handlers (leads, contact)
├── components/
│   ├── interventions/            # Interactive anatomy SVGs, galleries
│   ├── devis/                    # Quote funnel steps
│   ├── tracking/                 # GTM wrappers (TrackedLink, etc.)
│   ├── seo/                      # JsonLd, Schema.org
│   ├── layout/                   # Header, Footer, Breadcrumbs
│   └── ui/                       # Shared UI (Button, FAQ, Timeline)
├── lib/
│   ├── schema/                   # Schema.org generators
│   └── api/                      # Odoo RPC client
└── sanity/                       # Sanity CMS config & schemas
```

## Environment Variables

Create a `.env.local` file:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Odoo CRM (optional — mock mode if absent)
ODOO_URL=https://your-odoo-instance.com
ODOO_DB=venus
ODOO_USERNAME=api@venus-estetika.com
ODOO_PASSWORD=your_api_key

# GTM
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

## Development Workflow

### Branch Strategy

| Branch | Purpose |
|---|---|
| `main` | Production-ready code |
| `develop` | Integration branch |
| `feature/*` | New features |
| `fix/*` | Bug fixes |
| `hotfix/*` | Critical production fixes |

### Pull Request Process

1. Create a branch from `develop`
2. Make your changes
3. Run `npm run build` locally
4. Open a PR against `develop`
5. CI checks must pass (build + lint)
6. Code review required

## Deployment

Production deployments are managed via **Vercel**:

- Push to `main` → Auto-deploy to production
- Push to `develop` → Auto-deploy to preview
- PRs → Preview deployment per PR

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

---

<div align="center">
<strong>Venus Estetika</strong> — Excellence in Medical Tourism
</div>
