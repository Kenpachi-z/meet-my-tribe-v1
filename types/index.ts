1. Le Contrat de Données (TypeScript)
Ce fichier est le pont entre Gemini (Front) et Claude (Back). Il garantit que tout le monde parle la même langue.
// path: /types/index.ts


/**
 * Contrat de données pour les soumissions du formulaire de contact (Front -> Back).
 * @interface ContactPayload
 */
export interface ContactPayload {
  profil: "collectivite" | "partenaire" | "benevole" | "autre";
  nom: string;
  email: string;
  message: string;
  rgpd_consent: boolean;
  newsletter_optin: boolean;
}


/**
 * Contrat de données pour une édition "Tribu Urbaine" gérée en statique.
 * @interface Edition
 */
export interface Edition {
  id: string;
  slug: string;
  titre: string;
  annee: number;
  ville: string;
  mediums: string[];
  image_url: string;
  image_alt: string; // Strict RGAA
  lien_helloasso?: string; // Optionnel : redirection externe
}


/**
 * Contrat de données pour un partenaire.
 * @interface Partner
 */
export interface Partner {
  id: string;
  nom: string;
  logo_url: string;
  type: "global" | "local";
}


/**
 * Contrat de données pour les statistiques globales de l'association.
 * @interface Stat
 */
export interface Stat {
  id: string;
  label: string;
  valeur: string; // Type string pour accepter des formats comme "150+"
}