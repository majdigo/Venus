# 🔧 GUIDE DE CONFIGURATION : GOOGLE TAG MANAGER (GTM) & GOOGLE ADS

Ce guide détaille les étapes exactes pour configurer **Google Tag Manager (GTM)** et lier vos **Conversions Google Ads** à notre application Next.js.

Le code source de l'application est déjà pré-configuré (voir `src/components/tracking/GtmProvider.tsx` et les appels `sendGtmEvent`). Il ne reste qu'à configurer l'interface GTM.

---

## 🟢 Étape 1 : Création du Conteneur GTM

1. Allez sur [tagmanager.google.com](https://tagmanager.google.com).
2. Créez un compte "Venus Estetika" et un Conteneur Web.
3. Obtenez votre ID GTM (ex: `GTM-XXXXXXX`).
4. **Action requise :** Ajoutez cet ID dans le fichier `.env.local` et sur les variables d'environnement Vercel (`NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX`).

---

## 🟢 Étape 2 : Activer le Consent Mode V2 (Obligatoire en Europe)

L'Europe impose le "Consent Mode v2" pour diffuser des Ads légalement. Notre Next.js le gère nativement, mais GTM doit l'accepter.

1. Dans GTM, allez dans **Administration > Paramètres du conteneur**.
2. Cochez : **Activer la vue d'ensemble du consentement**.
3. Assurez-vous d'avoir une CMP (Consent Management Platform) valide comme *Cookiebot*, *Axeptio* ou *Sirdata* liée à GTM.

---

## 🟢 Étape 3 : Création des "Déclencheurs" (Triggers) GTM

L'application Next.js envoie des "Custom Events" (Événements Personnalisés) vers le `dataLayer` GTM. Vous devez créer ces déclencheurs dans GTM.

Allez dans **Déclencheurs** > **Nouveau** > **Type : Événement personnalisé**.

Créez les 3 déclencheurs suivants exactement avec ces noms d'événements :
1. **Nom :** `Trigger - Devis Complété` | **Nom de l'événement GTM :** `funnel_complete`
   *(Déclenché quand le patient valide son numéro de téléphone à la fin du tunnel de devis Odoo)*
2. **Nom :** `Trigger - Clic WhatsApp` | **Nom de l'événement GTM :** `whatsapp_click`
   *(Déclenché quand le visiteur clique sur l'icône WhatsApp flottante)*
3. **Nom :** `Trigger - Formulaire Contact` | **Nom de l'événement GTM :** `contact_submit`
   *(Déclenché sur la page /contact)*

---

## 🟢 Étape 4 : Création de la Conversion Google Ads

1. Allez sur **Google Ads** > **Objectifs** > **Conversions** > **Nouvelle action de conversion** > **Site Web**.
2. Scrollez et cliquez sur **Ajouter une action de conversion manuellement**.
3. 
   - **Catégorie :** Envoyer un formulaire pour les prospects (Lead).
   - **Nom de la conversion :** `Devis Qualifié (Odoo)`.
   - **Valeur :** Ne pas utiliser de valeur (ou mettre 1€ symbolique).
4. Sauvegardez et choisissez **Utiliser Google Tag Manager**.
5. Google Ads vous donnera :
   - Un **ID de conversion** (ex: `AW-123456789`).
   - Un **Libellé de conversion** (ex: `AbC-XyZ123`).

---

## 🟢 Étape 5 : Lier Google Ads à GTM (Tags)

Retournez dans **Google Tag Manager** > **Balises (Tags)** > **Nouvelle**.

1. **Tag 1 : Linker de conversions (Conversion Linker)**
   - Type : *Linker de conversions*.
   - Déclencheur : *All Pages*.

2. **Tag 2 : Suivi des Conversions Google Ads (Le plus important !)**
   - Type : *Suivi des conversions Google Ads*.
   - ID de conversion : *L'ID obtenu à l'étape 4* (ex: `AW-123456789`).
   - Libellé de conversion : *Le Libellé obtenu à l'étape 4* (ex: `AbC-XyZ123`).
   - Déclencheur : Sélectionnez le déclencheur que vous avez créé à l'étape 3 : **`Trigger - Devis Complété`**.

---

## 🟢 Étape 6 : Publication et Vérification

1. Dans GTM, cliquez sur **Prévisualiser (Preview)**.
2. Saisissez l'URL de votre site (ex: `https://venus-estetika.com`).
3. Remplissez un faux devis sur votre site jusqu'à la dernière étape.
4. Dans la fenêtre de debug GTM, vérifiez qu'à l'étape `funnel_complete`, la balise **Suivi des Conversions Google Ads** affiche le statut "Fired" (Déclenchée).
5. Si oui, retournez sur GTM et cliquez sur **Envoyer (Submit)** puis **Publier**.

Votre algorithme (Performance Max ou tCPA) recevra désormais un signal fort et précis chaque fois qu'un vrai patient fait une demande de devis dans Odoo. Le machine learning fera le reste !
