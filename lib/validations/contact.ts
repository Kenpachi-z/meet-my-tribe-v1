import { z } from "zod";

export const contactSchema = z.object({
    profil: z.enum(["collectivite", "partenaire", "benevole", "autre"]),
    nom: z.string().min(2, "Nom trop court.").max(100).trim(),
    email: z.string().email("Adresse email invalide.").trim(),
    message: z.string().min(10, "Message trop court.").max(2000).trim(),
    // Strictly true: the user must have explicitly checked the GDPR box
    rgpd_consent: z.boolean().refine((val) => val === true, {
        message: "Le consentement RGPD est obligatoire.",
    }),
    newsletter_optin: z.boolean().default(false),
    // Honeypot field: must be empty. Bots fill hidden fields, humans never see it.
    _trap: z.string().max(0, "Spam détecté.").optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
