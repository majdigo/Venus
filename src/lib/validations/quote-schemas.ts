import { z } from 'zod';

export const bmiSchema = z.object({
    height: z.number()
        .min(100, "Taille minimum : 100 cm")
        .max(250, "Taille maximum : 250 cm"),
    weight: z.number()
        .min(40, "Poids minimum : 40 kg")
        .max(300, "Poids maximum : 300 kg"),
});

export type BmiData = z.infer<typeof bmiSchema>;

// Etape 1
export const step1Schema = z.object({
    intervention: z.string().min(1, "Veuillez choisir une intervention"),
    subIntervention: z.string().optional(),
});

// Etape 2
export const step2Schema = z.object({
    gender: z.enum(["femme", "homme"], {
        message: "Veuillez indiquer votre genre",
    }),
    age: z.number()
        .min(18, "Vous devez avoir au moins 18 ans")
        .max(80, "Age maximum : 80 ans"),
    weight: z.number().min(40).max(300).optional(),
    height: z.number().min(100).max(250).optional(),
    previousSurgery: z.boolean().optional(),
    previousSurgeryDetails: z.string().max(300).optional(),
    desiredDate: z.enum([
        "asap",
        "1-2-months",
        "3-6-months",
        "just-looking",
    ]).optional(),
    message: z.string().max(500).optional(),

    // --- Champs Dynamiques V2 --- //
    // Chirurgie Mammaire
    currentSize: z.string().optional(),
    desiredSize: z.string().optional(),
    ptosis: z.boolean().optional(),

    // Chirurgie Silhouette
    targetZones: z.array(z.string()).optional(),
    weightFluctuation: z.boolean().optional(),
    pregnancies: z.boolean().optional(),

    // Chirurgie Visage
    faceIssues: z.array(z.string()).optional(),
    previousFaceSurgery: z.boolean().optional(),

    // Greffe Capillaire
    hairLossType: z.string().optional(),
    norwoodStage: z.number().min(1).max(7).optional(),
    beardTransplant: z.boolean().optional(),

    // Dentisterie
    dentalNeeds: z.string().optional(),
    jawIssues: z.boolean().optional(),
}).refine(
    (data) => {
        // Si intervention bariatrique, poids et taille obligatoires
        // Cette logique sera gérée au niveau du composant parent
        return true;
    }
);

// Etape 3
export const step3Schema = z.object({
    firstName: z.string()
        .min(2, "Minimum 2 caracteres")
        .max(50, "Maximum 50 caracteres"),
    lastName: z.string()
        .min(2, "Minimum 2 caracteres")
        .max(50, "Maximum 50 caracteres"),
    email: z.string()
        .email("Adresse email invalide"),
    phone: z.string()
        .min(8, "Numero de telephone invalide")
        .max(20, "Numero de telephone invalide")
        .regex(/^\+?[0-9\s\-().]+$/, "Format de telephone invalide"),
    preferredContact: z.enum(["phone", "whatsapp", "email"], {
        message: "Veuillez choisir un mode de contact",
    }),
    country: z.enum(["FR", "CH", "BE", "TN", "OTHER"], {
        message: "Veuillez indiquer votre pays",
    }),
    consentRGPD: z.literal(true, {
        message: "Vous devez accepter la politique de confidentialite",
    }),
    consentMarketing: z.boolean().optional(),
});

// Schema complet (fusion des 3 etapes)
export const fullQuoteSchema = step1Schema.merge(step2Schema).merge(step3Schema);

export type Step1Data = z.infer<typeof step1Schema>;
export type Step2Data = z.infer<typeof step2Schema>;
export type Step3Data = z.infer<typeof step3Schema>;
export type FullQuoteData = z.infer<typeof fullQuoteSchema>;

// ---------------------------------------------------------------------------
// Formulaire de Contact — page /contact
// ---------------------------------------------------------------------------

export const contactFormSchema = z.object({
    prenom: z.string()
        .min(2, "Le prénom doit contenir au moins 2 caractères")
        .max(50, "Le prénom ne peut pas dépasser 50 caractères"),
    nom: z.string()
        .min(2, "Le nom doit contenir au moins 2 caractères")
        .max(50, "Le nom ne peut pas dépasser 50 caractères"),
    email: z.string()
        .email("Adresse email invalide"),
    telephone: z.string()
        .min(8, "Numéro de téléphone invalide")
        .max(20, "Numéro de téléphone invalide")
        .regex(/^\+?[0-9\s\-().]+$/, "Format de téléphone invalide"),
    pays: z.enum(["FR", "BE", "CH", "CA", "OTHER"], {
        message: "Veuillez sélectionner votre pays",
    }),
    sujet: z.enum(["devis", "information", "reclamation", "autre"], {
        message: "Veuillez sélectionner un sujet",
    }),
    message: z.string()
        .min(20, "Le message doit contenir au moins 20 caractères")
        .max(2000, "Le message ne peut pas dépasser 2 000 caractères"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
