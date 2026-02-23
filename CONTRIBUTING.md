# Contributing to Venus Estetika

## 🚀 Quick Start

1. **Fork & Clone** the repository
2. **Create a branch** from `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```
3. **Install dependencies**: `npm install`
4. **Start dev server**: `npm run dev`

## 📐 Code Standards

### TypeScript
- Strict mode enabled
- All components must be typed (no `any`)
- Use interfaces for component props

### Components
- **Server Components** by default (no `"use client"` unless needed)
- **Client Components** only for interactivity (useState, onClick, etc.)
- Place shared UI in `src/components/ui/`
- Place intervention-specific components in `src/components/interventions/`

### Styling
- Use **Tailwind CSS** classes exclusively
- Follow the design system: `brand-navy`, `brand-blue` for brand colors
- Responsive design: mobile-first (`sm:`, `md:`, `lg:` breakpoints)

### SEO
- Every page **must** have `export const metadata` with `title` and `description`
- Every page **must** have exactly one `<h1>` tag
- All `<Image>` components **must** have descriptive `alt` text
- Intervention pages must include `JsonLd` Schema.org data

## 🔀 Branch Naming Convention

| Type | Pattern | Example |
|---|---|---|
| Feature | `feature/description` | `feature/add-blog-cta` |
| Bug fix | `fix/description` | `fix/hero-image-loading` |
| Hotfix | `hotfix/description` | `hotfix/devis-form-crash` |
| SEO | `seo/description` | `seo/meta-descriptions` |

## 📝 Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add patient video testimonials
fix: correct hero image aspect ratio on mobile
seo: optimize meta descriptions for silhouette pages
perf: lazy-load interactive anatomy SVGs
docs: update README with Sanity setup
```

## ✅ PR Checklist

Before submitting a PR, ensure:

- [ ] `npm run build` passes with exit code 0
- [ ] `npm run lint` has no errors
- [ ] All images have `alt` text
- [ ] Pages have proper `metadata` exports
- [ ] No `console.log` left in production code
- [ ] Responsive design tested on mobile

## 🏗️ Architecture Decisions

### Why Server Components?
SEO is critical for medical tourism. Server Components render HTML on the server, ensuring Google indexes all content immediately.

### Why Sanity CMS?
Dynamic content (doctors, reviews, gallery) needs to be updated by non-developers. Sanity provides a real-time editing experience with GROQ queries.

### Why Framer Motion for SVGs?
Interactive anatomy simulators (Rhinoplasty, BBL, etc.) dramatically increase time-on-page and conversion rates. Framer Motion provides silky 60fps animations.
