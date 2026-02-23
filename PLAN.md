# PLAN: Optimisation Globale Venus Estetika — SEO, AEO, CRO, UX, Animations

## Contexte
Audit complet réalisé. Le site a 48 routes, 30 pages intervention, charte graphique terminée, tracking GTM configuré, Schema.org complet. Ce plan cible les **gains rapides à fort impact** implémentables immédiatement (code only, pas d'assets externes).

---

## PHASE 1 — SEO & AEO (Answer Engine Optimization pour LLMs)
**Impact: TRÈS ÉLEVÉ | Effort: MOYEN**

### 1.1 OG Images dynamiques par page
- Créer `src/app/interventions/[...slug]/opengraph-image.tsx` avec Next.js OG Image Generation
- Chaque page intervention aura une OG image unique (titre + prix + logo Venus)
- Format: 1200x630, brand-navy bg + brand-blue accents + texte blanc

### 1.2 Enhanced llms.txt
- Enrichir `public/llms.txt` avec les 30 interventions (prix, descriptions courtes, URLs)
- Ajouter section "Questions fréquentes" pour LLM snippet extraction
- Ajouter `public/llms-full.txt` avec contenu détaillé (pour crawlers AI approfondis)

### 1.3 Fichier `.well-known/ai-plugin.json`
- Créer pour signaler aux agents AI la structure du site
- Décrire les endpoints et le contenu disponible

### 1.4 Meta enrichies par page intervention
- Ajouter `alternates.canonical` unique par page
- Ajouter `openGraph.images` spécifique par page
- Ajouter keywords dans metadata (article:tag pour blog futur)

### 1.5 loading.tsx et error.tsx
- `src/app/loading.tsx` — skeleton avec logo Venus animé
- `src/app/error.tsx` — page erreur branded avec CTA retour
- `src/app/not-found.tsx` — 404 branded avec suggestions de pages

---

## PHASE 2 — Animations & Micro-interactions UX
**Impact: ÉLEVÉ | Effort: MOYEN**

### 2.1 FadeIn/StaggerContainer sur toutes les sections
FadeIn et StaggerContainer existent (`src/components/animations/`) mais ne sont PAS utilisés sur les pages. Appliquer sur :
- Homepage : chaque section (hero stats, docteurs, interventions, témoignages, garanties)
- Pages intervention : sections contenu, FAQ, testimonials, surgeons
- Pages institutionnelles : sections de contenu

### 2.2 Compteur animé (AnimatedCounter)
- Nouveau composant `src/components/animations/AnimatedCounter.tsx`
- Anime les chiffres de 0 → valeur finale au scroll (ex: "2500+ patients", "60% d'économie")
- Utilisation : homepage stats, pages intervention (stats hero), page temoignages

### 2.3 Parallax subtil sur les heros
- Effet parallax léger sur les hero images (scroll → image bouge plus lentement)
- Via Framer Motion `useScroll` + `useTransform`

### 2.4 Hover cards enrichis
- Cartes intervention homepage : lift + shadow + border glow au hover
- Cartes chirurgiens : image zoom + overlay info
- CTA buttons : micro-animation ripple ou scale

### 2.5 Page transitions fluides
- Wrap les pages avec `motion.div` pour fade-in/out entre navigations
- Template component dans `src/app/template.tsx`

---

## PHASE 3 — CRO & Conversion Channels
**Impact: TRÈS ÉLEVÉ | Effort: MOYEN**

### 3.1 Exit-Intent Popup
- Nouveau composant `src/components/cro/ExitIntentPopup.tsx`
- Détecte `mouseleave` en haut de page (desktop) ou inactivité 30s (mobile)
- Contenu : "Attendez ! Recevez votre devis gratuit en 24h" + formulaire email rapide
- Cookie 7 jours pour ne pas re-afficher
- GTM event: `exit_intent_shown`, `exit_intent_converted`

### 3.2 Social Proof Notifications
- Nouveau composant `src/components/cro/SocialProofToast.tsx`
- Toast bas-gauche : "Sophie de Paris a demandé un devis il y a 12 min"
- Rotation toutes les 15s, données simulées réalistes
- GTM event: `social_proof_shown`

### 3.3 Urgency Banner
- Nouveau composant `src/components/cro/UrgencyBanner.tsx`
- Bandeau sous le header : "🔥 Offre Mars 2026 : -15% sur la rhinoplastie — 3 places restantes"
- Configurable par intervention, date-driven
- GTM event: `urgency_banner_click`

### 3.4 Multi-Review Trust Bar
- Nouveau composant `src/components/cro/TrustBar.tsx`
- Barre horizontale : Google ⭐ 4.8 | Trustpilot ⭐ 4.7 | +2500 patients | 15 ans d'expérience
- Position : sous le hero de chaque page
- Badges SVG inline (Google, Trustpilot)

### 3.5 Sticky Contact Bar Mobile amélioré
- Enrichir `MobileStickyBar.tsx` existant
- 3 boutons : 📞 Appeler | 💬 WhatsApp | 📝 Devis gratuit
- Animations d'entrée (slide-up au scroll)

### 3.6 Price Comparison Table Component
- Nouveau composant `src/components/cro/PriceComparisonTable.tsx`
- Tableau France 🇫🇷 vs Tunisie 🇹🇳 avec économie mise en évidence
- Intégrer sur chaque page intervention (remplace les mentions de prix textuelles)

---

## PHASE 4 — Google Ads Landing Pages
**Impact: TRÈS ÉLEVÉ | Effort: ÉLEVÉ**

### 4.1 Layout Landing Page (sans navigation)
- `src/app/(landing)/layout.tsx` — layout minimal sans header/footer
- Logo + numéro de téléphone uniquement en header
- Footer réduit : mentions légales + contact
- Optimisé pour conversion rate (pas de distraction)

### 4.2 Landing pages par intervention top
- `/lp/rhinoplastie-tunisie` — Google Ads rhinoplastie
- `/lp/sleeve-gastrique-tunisie` — Google Ads bariatrique
- `/lp/greffe-cheveux-tunisie` — Google Ads capillaire
- `/lp/augmentation-mammaire-tunisie` — Google Ads mammaire
- Chaque LP : hero + prix + 3 avantages + testimonial + form inline + FAQ courte

### 4.3 UTM → Personnalisation
- Lire les UTM params dans les landing pages
- Adapter le titre selon `utm_campaign` (ex: "Rhinoplastie pas chère" vs "Rhinoplastie qualité")
- Pre-fill le tunnel de devis avec l'intervention

### 4.4 Enhanced Conversion Tracking
- Google Ads Enhanced Conversions (hashed email/phone)
- Meta CAPI server-side events via API route
- Funnel micro-events: `lp_view`, `lp_scroll_50`, `lp_form_start`, `lp_form_submit`

---

## PHASE 5 — Blog & Content Marketing SEO
**Impact: ÉLEVÉ | Effort: ÉLEVÉ**

### 5.1 Blog Article Template
- `src/app/blog/[slug]/page.tsx` — article individuel
- Composants : `TableOfContents`, `AuthorBio`, `RelatedArticles`, `ReadingProgress`, `ShareButtons`
- Schema.org : Article + BreadcrumbList
- OG image dynamique par article

### 5.2 Premiers articles SEO (5 articles statiques)
Basés sur la stratégie Spec 24 (clusters à fort volume) :
1. "Rhinoplastie Tunisie : Guide complet 2026"
2. "Sleeve gastrique Tunisie : Prix, déroulement, résultats"
3. "Greffe de cheveux FUE Tunisie : Tout savoir"
4. "Augmentation mammaire Tunisie : Prix et chirurgiens"
5. "Séjour médical Tunisie : Comment ça se passe ?"

### 5.3 Internal Linking automatique
- Composant `RelatedInterventions` en bas de chaque article
- Liens contextuels vers les pages intervention depuis le blog
- Maillage FAQ → Article → Intervention → Devis

---

## PHASE 6 — Video & Rich Media
**Impact: MOYEN | Effort: FAIBLE (composants prêts, contenu à fournir)**

### 6.1 Video Hero Component
- `src/components/ui/VideoHero.tsx` — autoplay muted loop
- Fallback image si vidéo pas encore disponible
- Placeholder : "Vidéo de la clinique bientôt disponible"

### 6.2 Before/After Gallery amélioré
- Enrichir `AvantApresGallery.tsx` avec slider interactif
- Drag-to-reveal (avant ← → après)
- Composant prêt, attend les vraies photos de Majdi

### 6.3 Virtual Clinic Tour (placeholder)
- Section "Visite virtuelle" sur la page clinique
- Embed YouTube/Vimeo ou carrousel photos
- CTA vers prise de RDV vidéo

---

## ORDRE D'EXÉCUTION

| # | Phase | Items prioritaires | Fichiers créés/modifiés |
|---|-------|--------------------|------------------------|
| 1 | **Phase 2.1** | FadeIn/StaggerContainer sur homepage + 5 top pages | ~10 page.tsx |
| 2 | **Phase 3.4** | TrustBar multi-avis | 1 nouveau composant + layout |
| 3 | **Phase 3.1** | Exit-Intent Popup | 1 nouveau composant + layout |
| 4 | **Phase 3.2** | Social Proof Toast | 1 nouveau composant + layout |
| 5 | **Phase 3.3** | Urgency Banner | 1 nouveau composant + layout |
| 6 | **Phase 2.2** | AnimatedCounter | 1 nouveau composant + pages stats |
| 7 | **Phase 2.5** | Page transitions template.tsx | 1 fichier |
| 8 | **Phase 1.2** | Enhanced llms.txt | 1 fichier |
| 9 | **Phase 1.5** | loading.tsx + error.tsx + not-found.tsx | 3 fichiers |
| 10 | **Phase 3.6** | PriceComparisonTable | 1 composant + pages |
| 11 | **Phase 1.1** | OG Images dynamiques | route handler |
| 12 | **Phase 4** | Landing pages Google Ads (top 4) | layout + 4 pages |
| 13 | **Phase 5** | Blog articles template + 5 articles | template + 5 pages |
| 14 | **Phase 6** | Video/Gallery composants | 2-3 composants |

**Estimation : ~35 fichiers créés/modifiés, 0 dépendance externe, 0 asset requis.**
