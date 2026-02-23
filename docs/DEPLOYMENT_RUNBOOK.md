# 🚀 RUNBOOK DE DÉPLOIEMENT & GO-LIVE (Sprints 15 & 16)

Le code est 100% prêt à être déployé de manière sécurisée en production sans perte SEO. 
Voici les actions manuelles à réaliser sur vos interfaces (Vercel, OVH/DNS, Google Ads) pour finaliser le projet.

---

## 🟢 Étape 1 : Déploiement Vercel (Production)

1. Connectez-vous à [Vercel](https://vercel.com).
2. Cliquez sur **Add New...** > **Project**.
3. Importez le dépôt GitHub `majdigo/Venus`.
4. Configurez les **Environment Variables** (Copiez-collez depuis votre `.env.local` local) :
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET` (mettre `production`)
   - `NEXT_PUBLIC_SANITY_API_VERSION`
   - `ODOO_URL`, `ODOO_DB`, `ODOO_USERNAME`, `ODOO_PASSWORD`
   - `NEXT_PUBLIC_GTM_ID` (GTM-XXXXXXX)
5. Cliquez sur **Deploy**. Vercel exécutera automatiquement le build et appliquera `vercel.json`.

---

## 🟢 Étape 2 : Migration DNS (Zero Downtime)

Pour basculer du vieux WordPress vers la plateforme Next.js :

1. Dans le projet Vercel, allez dans **Settings > Domains**.
2. Ajoutez `venus-estetika.com` et `www.venus-estetika.com`.
3. Vercel vous fournira des adresses IP (`A Record`) ou un (`CNAME`).
4. Connectez-vous à votre registrar de domaine (ex: OVH, GoDaddy).
5. Dans la **Zone DNS**, modifiez l'enregistrement `A` de `@` pour pointer vers l'IP de Vercel (souvent `76.76.21.21`).
6. Modifiez l'enregistrement `CNAME` de `www` pour pointer vers `cname.vercel-dns.com`.
7. Retournez sur Vercel : les domaines passeront au vert validant l'émission du certificat SSL (HTTPS).

⚠️ *Note SEO : Les redirections 301 sont déjà hardcodées dans `next.config.mjs` (ex: `/rhinoplastie-tunisie` → `/interventions/chirurgie-visage/rhinoplastie`). Google redirigera son index.*

---

## 🟢 Étape 3 : Google Search Console & SEO

Une fois le domaine pointé vers Vercel et le site en ligne :

1. Ouvrez [Google Search Console](https://search.google.com/search-console).
2. Sélectionnez la propriété `venus-estetika.com`.
3. Dans la barre latérale, cliquez sur **Sitemaps**.
4. Soumettez l'URL `https://venus-estetika.com/sitemap.xml`. (Il a été généré automatiquement par notre processus de build).
5. (Optionnel) Utilisez l'outil d'inspection d'URL sur les pages piliers (Accueil, Sleeve, Rhinoplastie) et demandez une "Nouvelle indexation".

---

## 🟢 Étape 4 : Lancement des Campagnes Google Ads (Sprint 16)

Le site est conçu pour maximiser le **Quality Score (Score de Qualité)**.

### Architecture de Campagne Recommandée (SKAG - Single Keyword Ad Group)

Au lieu d'une campagne générique, créez une campagne par pôle avec des Landing Pages dédiées.

**Campagne 1 : Chirurgie Silhouette**
- Groupe d'annonces : *Liposuccion* → Lien : `https://venus-estetika.com/interventions/chirurgie-silhouette/liposuccion`
- Groupe d'annonces : *Abdominoplastie* → Lien : `https://venus-estetika.com/interventions/chirurgie-silhouette/abdominoplastie`
- Groupe d'annonces : *BBL* → Lien : `https://venus-estetika.com/interventions/chirurgie-silhouette/augmentation-fesses-bbl`

**Campagne 2 : Bariatrique**
- Groupe d'annonces : *Sleeve Gastrique* → Lien : `https://venus-estetika.com/interventions/bariatrique/sleeve-gastrique`
- *(Requete clé exacte : [sleeve gastrique tunisie prix])*

### Suivi des Conversions GTM
1. Le tag Google Ads Conversion Tracking doit se déclencher sur l'Event personnalisé `funnel_complete` poussé par notre `QuoteFunnel`.
2. Connectez GTM pour envoyer ces signaux d'achèvement au pixel Google Ads.

---

## 🟢 Étape 5 : Lancement Odoo en Production

1. Assurez-vous que l'URL Odoo (actuellement pointant vers une instance potentiellement de staging/test) pointe vers le serveur de production.
2. Soumettez un faux devis (Prénom: "TEST PROD", Numéro: "00000000") pour vérifier l'arrivée instantanée du lead dans l'interface Odoo CRM.
