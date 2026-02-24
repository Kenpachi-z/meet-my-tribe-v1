# CONTEXTE DU PROJET : MEET MY TRIBE (V1)
> ⚠️ **RÈGLE ABSOLUE POUR L'AGENT IA :** Lis ce document en entier avant de générer la moindre ligne de code. Ce fichier est ta source de vérité (Single Source of Truth).


## 1. Séparation des Responsabilités Front/Back


### FRONT-END (Périmètre : UI, Données Statiques JSON, UX)
- **Stack :** Next.js 14 (App Router), React 18, Tailwind CSS, TypeScript.
- **Gestion du Contenu :** Les données des projets, partenaires et statistiques sont stockées LOCALEMENT dans des fichiers statiques (`/data/editions.json`, etc.). ZÉRO base de données pour l'affichage vitrine.
- **Design & Accessibilité :** Respect strict du RGAA (contraste >= 4.5:1). Le code couleur `#D9B6A3` (Sable) est interdit pour le texte. Police H1/H2 : Kanit. Corps : Noto Sans.
- **Transactions :** Aucun e-commerce interne. Les boutons "Faire un don" ou "Acheter" redirigent nativement (target="_blank") vers HelloAsso.


### BACK-END (Périmètre : API, Sécurité, Base de données Contacts)
- **Stack :** Next.js API Routes (Serverless), Supabase (PostgreSQL).
- **Rôle de Supabase :** UNIQUEMENT utilisé pour sécuriser et stocker les soumissions du formulaire de contact et les opt-ins Newsletter.
- **Sécurité (Priorité 1) :** Validation stricte des payloads via Zod sur la route API. Protection anti-spam exigée (Honeypot/reCAPTCHA). Row Level Security (RLS) activé sur la table `contacts`.


---


## 2. Spécifications Techniques et UI (Format XML)


L'agent doit se référer à ce bloc XML pour comprendre les contrats de données, les états d'interface et les règles de sécurité.


<specifications_globales projet="Meet My Tribe" version="V1_JSON_et_Supabase" granularite="PROD">
  <philosophie>Design as an Executable Specification - Security First & JSON Driven Content</philosophie>


  <parcours_usager>
    <spec_ecran nom="Rejoindre_La_Tribu_Et_Don" granularite="MVP" security_impact="HIGH">
      <description>Page stratégique unifiant le don (HelloAsso) et la prise de contact (Supabase).</description>
      <flags_securite>
        <flag type="data">Collecte de PII (Nom, Email, Profil) via formulaire</flag>
        <flag type="rgpd">Consentement explicite requis avant soumission (Case à cocher stricte)</flag>
      </flags_securite>
      <flux_utilisateur>
        <step condition="Soutien financier">Clic "Faire un don" -> Redirection native (target="_blank") vers HelloAsso</step>
        <step condition="Partenariat">Remplissage formulaire -> Coche RGPD -> Soumission API</step>
        <step>Soumission -> Blocage du bouton (Loading) -> Retour API -> Validation ARIA</step>
      </flux_utilisateur>
    </spec_ecran>


    <spec_ecran nom="CookieBanner_Global" granularite="PROD" security_impact="HIGH">
      <flags_securite>
        <flag type="rgpd">Aucun cookie déposé avant action. Mémorisation via localStorage.</flag>
      </flags_securite>
    </spec_ecran>


    <spec_ecran nom="Affichage_Projets_JSON" granularite="PROD" security_impact="LOW">
      <description>Affichage de la grille des projets depuis /data/editions.json.</description>
      <gestion_des_etats_react>
        <etat nom="Empty">Affichage d'un message si le JSON est vide.</etat>
        <etat nom="Success">Affichage de la grille d'objets (EditionList) avec next/image (optimisation WebP).</etat>
      </gestion_des_etats_react>
    </spec_ecran>
  </parcours_usager>


  <contrats_donnees_et_api>
    <spec_api_contract nom="Route_API_Contact" granularite="MVP" security_impact="CRITICAL">
      <description>Contrat de communication entre ContactForm et l'API serverless pour envoi vers Supabase.</description>
      <payload_attendu_front>
        <champ nom="profil" type="enum">collectivite | partenaire | benevole | autre</champ>
        <champ nom="nom" type="string">Nom complet</champ>
        <champ nom="email" type="string_email">Format email valide requis</champ>
        <champ nom="message" type="text">Contenu du message</champ>
        <champ nom="rgpd_consent" type="boolean">Strictement true</champ>
        <champ nom="newsletter_optin" type="boolean">Optionnel</champ>
      </payload_attendu_front>
    </spec_api_contract>


    <spec_donnees nom="Structure_JSON_Editions" granularite="PROD" security_impact="LOW">
      <description>Structure du fichier /data/editions.json alimentant le Front-End.</description>
      <structure_requise>
        <champ nom="slug" type="string">Identifiant URL (ex: "paris-2025")</champ>
        <champ nom="titre" type="string">Nom de l'édition</champ>
        <champ nom="annee" type="integer">Tri chronologique</champ>
        <champ nom="image_url" type="string">Chemin local vers /public/images/...</champ>
        <champ nom="image_alt" type="string">Texte alternatif (RGAA obligatoire)</champ>
      </structure_requise>
    </spec_donnees>
  </contrats_donnees_et_api>
</specifications_globales>


---


## 3. Protocole de Résolution pour l'Agent IA
- **Sécurité vs Vitesse :** La sécurité prime (Priorité 1). Toujours assainir les données et utiliser des variables d'environnement pour Supabase.
- **Incertitude :** Si une instruction n'est pas claire, formule une HYPOTHÈSE EXPLICITE ("Je suppose que...") et avance. Ne te bloque pas.
- **Composants :** Favorise le Clean Code. Sépare la logique de présentation (UI) de la logique métier (Forms, Fetch).