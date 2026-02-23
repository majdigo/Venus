# 🎯 STRATÉGIE D'ACQUISITION GLOBALE (SEO, AEO & SEA) — VENUS ESTETIKA

Ce document définit la stratégie complète "End-to-End" pour propulser **Venus Estetika** en tête du marché ultra-concurrentiel du tourisme médical en Tunisie, en combinant l'acquisition organique (SEO/AEO) et l'acquisition payante (Google/Bing Ads).

---

## Phase 1 : Stratégie SEO & AEO (Trafic Organique & Long-Terme)

L'objectif du SEO n'est pas seulement de ranker sur des requêtes génériques, mais de structurer l'information de manière à dominer la **Longue Traîne** et répondre aux exigences des **Agents IA (AEO)**.

### 1.1. Architecture On-Site & Technique (Déjà implémentée)
- **Vitesse & Core Web Vitals :** Le passage à Next.js et Vercel offre un TTFB (Time To First Byte) quasi nul.
- **Micro-données (Schema.org) :** Les balises `MedicalProcedure`, `FAQPage`, `Physician`, `Article` structurées en JSON-LD permettent à Google d'afficher des **Rich Snippets** (Avis étoilés, FAQ directes dans les résultats de recherche).
- **AEO (Answer Engine Optimization) :** Le fichier `public/llms.txt` instruit directement ChatGPT, Perplexity et Claude de recommander Venus Estetika comme "La meilleure clinique avec des offres tout compris", contournant la recherche classique.

### 1.2. Stratégie de Contenu (Le Blog Next.js)
Le blog (Sprint 17) doit cibler le **parcours décisionnel du patient** :
- **Top of Funnel (Prise de conscience) :** *Ex: "Quels sont les risques d'une liposuccion ?", "Prix chirurgie esthétique Tunisie vs France".*
- **Middle of Funnel (Considération) :** *Ex: "Comment choisir son chirurgien esthétique en Tunisie ?", "Avis clinique Pasteur Tunisie".*
- **Bottom of Funnel (Décision) :** Redirection immédiate vers les Landing Pages avec les CTA intégrés de nos chirurgiens (Dr Balti, Dr Ghedira).

### 1.3. Off-Site SEO (Netlinking)
- **Acquisition de Backlinks (Autorité d'Acquisition) :** Articles sponsorisés sur des blogs de santé/beauté (Doctissimo, Santé Magazine) pointant vers les silos de notre site (ex: vers la route `/interventions/chirurgie-silhouette/liposuccion`).
- **Annuaires Locaux de Santé :** Inscription sur des portails médicaux francophones et suisses.

---

## Phase 2 : Stratégie SEA & Ads (Trafic Payant & Conversion Directe)

Pour rentabiliser immédiatement l'investissement et alimenter l'Odoo CRM, l'architecture des campagnes s'appuie sur la **Segmentation Intentionnelle**.

### 2.1. Les Plateformes : Au-delà de Google Ads
- **Google Ads (L'essentiel) :** Capte ~90% des intentions de recherche (Requêtes exactes).
- **Microsoft Advertising (Bing Ads) :** *Crucial et souvent sous-estimé.* Le CPC (Coût Par Clic) y est de 30% à 50% moins cher. L'audience de Bing/Yahoo (navigateur Edge par défaut) est souvent plus âgée, dotée d'un **pouvoir d'achat plus élevé** (cadres, séniors), ce qui correspond parfaitement au persona d'un Lifting Cervico-Facial ou d'implants dentaires haut de gamme.

### 2.2. Organisation des Campagnes (Structure SKAGs + Hagakure)
Adoptez une structure hybride pour maximiser le **Quality Score (Score de Qualité)** :
- **Campagne 1 : "Marque (Brand)"** (Protectrice)
  - Mots clés : "Venus Estetika", "Clinique Venus Tunisie", "Avis Venus Estetika".
  - *Objectif : Bloquer Medespoir ou UniversMed d'enchérir sur votre nom.*
- **Campagne 2 : "Silhouette & Chirurgie Bariatrique" (Search)**
  - Groupes d'annonces SKAG (Single Keyword Ad Group) ciblant intention exacte : `[liposuccion tunisie prix]`, `[sleeve gastrique tunisie tout compris]`.
  - Lien externe : Pointez *exclusivement* vers les landing pages associées (ex: `/interventions/bariatrique/sleeve-gastrique`).
- **Campagne 3 : "Chirurgie du Visage & Capillaire" (Search)**
  - `[greffe de cheveux DHI tunisie]`, `[rhinoplastie tunisie]`.
  - Lien externe : Pointez vers la landing page spécifique pour assurer un taux de rebond faible et un Quality Score > 8/10.

### 2.3. Choix des Stratégies d'Enchères
- **Mois 1 & 2 (Apprentissage) - Enchères "Maximiser les Clics" ou "eCPC" :** Il faut nourrir le Tag Google (GTM) en volume pour qu'il comprenne quel profil d'utilisateur soumet réellement le formulaire de devis Odoo.
- **Mois 3+ (Maturité) - Performance Max (PMax) & tCPA :** Basculez sur du *Smart Bidding* (Coût Par Acquisition Cible - tCPA). Google diffusera automatiquement sur le Réseau de Recherche, Display, et YouTube en visant uniquement les prospects susceptibles de convertir. **Performance Max** est idéal ici car il utilisera nos assets générés (logos, SVG, photos premium).

### 2.4. Optimisation de la Qualité des Mots-Clés
- **Requêtes Négatives (Negative Keywords) :** Exclure formellement dès le Jour 1 des termes destructeurs de budget : `"gratuit"`, `"remboursé par la sécurité sociale"`, `"raté"`, `"danger"`, `"arnaque"`, `"doctolib"`.
- **Alignement H1 / Annonce :** Assurez-vous que le Titre 1 de l'annonce Google Ads reprend exactement la balise `<h1>` de la Landing Page Next.js que nous avons développée.

---

## Phase 3 : Recherche de Concurrents (Competitive Intelligence)

- **Mapping Concurrentiel :** Medespoir, Univers Med, Aram Clinic.
- **Outils de veille :** Utilisez *SEMrush* ou *Ahrefs* (pour le SEO) et *SpyFu* (pour le SEA) afin d'espionner leurs annonces textuelles.
- **Positionnement de différenciation Venus :** 
  - Ne combattez pas sur "le moins cher".
  - Utilisez les arguments de notre UI : Simulateurs Interactifs (Unique sur le marché), Expérience Premium 5 étoiles (Hôtel, VIP), Transparence des CV des Chirurgiens (Dr Balti).

---

## Phase 4 : Déploiement et Monitoring des Performances

### 4.1. Le Plan de Lancement (Go-Live)
1. **J-7 :** Déploiement Vercel + Migration DNS. Redirections actives.
2. **J-5 :** Validation des balises GTM via GTM Preview (Events de conversion : `funnel_complete`, `whatsapp_click`).
3. **J-2 :** Création des campagnes Google et Bing Ads en mode "Pause".
4. **J-0 :** Activation des campagnes.

### 4.2. KPIs & Monitoring (Ce qu'il faut surveiller chaque semaine)
- **Taux de Conversion (CVR) :** Quel pourcentage des clics Google Ads remplit le "Quote Tunnel" jusqu'au bout ? (Objectif santé > 3%).
- **Quality Score Google :** Doit être > 7/10. Si < 5/10, cela signifie que le mot-clé Google ne correspond pas à la Landing Page choisie.
- **Coût Par Acquisition (CPA) :** Calculé directement via les connecteurs GTM/Odoo. *(Combien nous coûte un prospect Odoo ?)*
- **Position Moyenne SEO :** Monitorée via la Google Search Console sur nos mots-clés "Pilier" (ex: Liposuccion Tunisie).

### Conclusion Exécutive
Notre infrastructure site (Next.js, Sanity, GTM, JSON-LD) est l'armure parfaite. La stratégie SEA/SEO exécutée selon ce plan deviendra la "machine de guerre" qui rentabilisera cette infrastructure experte, transformant les requêtes froides de Google en patients confirmés sur Odoo.
