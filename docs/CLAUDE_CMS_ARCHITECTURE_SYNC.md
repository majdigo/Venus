# 🏗️ ARCHITECTURE DE DONNÉES & CMS (ORM) : MISSION CLAUDE
**Directive Technique pour le Déploiement du Backend "Headless" (Sanity CMS)**

---

## CONTEXTE & OBJECTIF

Cher Claude (et équipe marketing/client),

Jusqu'à présent, nous avons construit le **"Moteur Ferrari"** : une architecture front-end Next.js 15 ultra-rapide, un design system luxueux, des schémas 3D interactifs, et des tunnels de conversion agressifs (CRO). 

Cependant, le client a fait une remarque architecturale cruciale et 100% légitime : **"Où est le panneau d'administration pour gérer tout ça de manière centralisée, comme un ORM ?"**

Actuellement, les données dans nos Layouts (Prix, Textes des interventions, Noms des médecins, FAQs) sont *hardcodées* dans les composants React. **Ce n'est pas scalable.**

**Notre Mission Conjointe (Frontend Tech Lead + Claude Marketing/Data Stratège) :**
Nous devons finaliser la bascule vers le **Headless CMS Sanity**. Sanity va devenir le "Cerveau Central" (l'ORM de l'entreprise). Chaque élément du site sera une entité (un "Document" JSON) interconnectée aux autres.

---

## L'ARCHITECTURE DE DONNÉES CIBLE (L'ORM SANITY)

Voici comment nous allons modéliser la donnée dans Sanity (Schema Types). C'est ici que j'ai besoin de ton expertise, Claude, pour affiner ces modèles avant que je ne les code définitivement.

### 1. Entité "Intervention" (L'offre principale)
*Cette entité alimentera dynamiquement nos fameux "Layouts Golden Goose" (ex: Page Liposuccion).*
*   **Champs de base :** Titre, Slug, Description Courte, Catégorie (relation vers `Category`).
*   **Pricing :** Prix Minimum (ex: 2800€), Ancien Prix Barré (ex: 6500€).
*   **SEO :** Meta Title, Meta Description, JSON-LD contextuel.
*   **Contenu Riche (PortableText) :** "Pourquoi choisir cette opération ?", "Comment se déroule le séjour ?".
*   **Relations (Foreign Keys) :**
    *   Chirurgiens associés (Relation `[Doctor]`).
    *   Cas Avant/Après (Relation `[GalleryCase]`).
    *   FAQ spécifique (Tableau d'objets Question/Réponse).

### 2. Entité "Doctor" (Le Chirurgien)
*Pour le E-E-A-T (Expertise, Autorité, Confiance).*
*   **Champs :** Nom, Titre (ex: Chirurgien Maxillo-Facial), Photo HD, Biographie, Numéro d'Ordre (pour la réassurance).
*   **Relations :** Interventions pratiquées.

### 3. Entité "Review" (Témoignages & Preuve Sociale)
*Pour rassurer et convertir.*
*   **Champs :** Nom du patient, Nationalité, Note sur 5, Commentaire, Lien Vidéo YouTube (Optionnel), Date de l'opération.
*   **Relation :** Intervention concernée (ex: Témoignage lié à "BBL").

### 4. Entité "Category" (Chirurgie Esthétique, Dentaire, Capillaire)
*Pour la navigation et les pages Hubs.*
*   **Champs :** Titre, Icône, Description.

### 5. Entité "Clinic" & "Hotel" (L'Infrastructure)
*Pour rassurer sur la qualité du séjour.*
*   **Champs :** Nom, Note étoiles, Galerie de photos (Chambres, Blocs opératoires), Services Inclus (Transfert, WiFi, Traducteur).

---

## LE WORKFLOW DE DÉPLOIEMENT (NEXT.JS + SANITY)

Comment tout cela va s'assembler techniquement (Mon rôle de Tech Lead) :

1.  **Le Studio d'Administration :**
    *   L'équipe de Venus Estetika se connectera sur `venus-estetika.com/studio`.
    *   Ils auront une interface visuelle magnifique (gérée par Sanity Studio) pour modifier les prix, ajouter un médecin, écrire un article de blog. AUCUNE compétence en code requise.
2.  **La Génération Statique (SSG & ISR) :**
    *   Quand un prix est modifié dans le CMS, Next.js reçoit un "Webhook" (Signal).
    *   Il re-génère la page (ex: Liposuccion) en tâche de fond en moins d'une seconde.
    *   Le visiteur a toujours un site ultra-rapide (pas d'appels base de données lents au chargement de la page).
3.  **Le Vercel Edge Network :**
    *   Le site est distribué sur des centaines de serveurs dans le monde. Un Suisse chargera la page depuis Genève, un Français depuis Paris. Vitesse = Conversion = Baisse des coûts Google Ads.

---

## 🔥 TON RÔLE, CLAUDE (REQUEST FOR ACTION)

Je (le Tech Lead) peux coder ces schémas Sanity en 1 heure. Mais avant de figer la base de données, j'ai besoin de ta confirmation stratégique :

1.  **Validation du Modèle de Données (ORM) :**
    *   Regarde les 5 entités listées ci-dessus. Manque-t-il des champs cruciaux d'un point de vue Marketing / SEO / Conversion Média ? (Exemple : Devrait-on ajouter un champ "Durée de convalescence" sur l'entité *Intervention* pour rassurer le patient ?).
    *   Fournis-moi la liste finale des champs par entité si tu souhaites que je l'ajuste.
2.  **Stratégie de Migration Initiale (Data Seeding) :**
    *   Une fois que j'aurai codé l'administration, comment allons-nous la remplir ?
    *   Peux-tu me générer le JSON structuré complet pour l'intervention "Liposuccion" (et ses relations: 1 Médecin, 2 Témoignages, 3 FAQ) afin que je puisse l'injecter directement dans le CMS pour montrer un exemple fonctionnel au client ?
3.  **Priorisation de l'Exécution :**
    *   Valides-tu que je déploie la phase "Architecture Sanity (Frontend/Backend)" maintenant ?

**Dès que j'ai ton feu vert et tes ajustements sur le modèle de données, je lance le code du CMS !**
