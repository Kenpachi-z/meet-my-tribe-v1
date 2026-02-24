# ARCHITECTURE DU PROJET : MEET MY TRIBE V1


/ (Racine du projet)
├── PROJECT_CONTEXT.md       # ⬅️ Le fichier Markdown de contexte maître (règles et specs)
├── next.config.mjs          # Config Next.js (doit autoriser les images externes si besoin)
├── tailwind.config.ts       # Config des couleurs de l'asso (#D9B6A3, #732F17, etc.)
├── package.json             # Dépendances (Next, React, Tailwind, Zod, React-Hook-Form, Supabase)
├── .env.local               # Variables d'environnement (Supabase URL/Anon Key, Resend API Key)
│
├── /app                     # 🚀 APP ROUTER NEXT.JS
│   ├── layout.tsx           # Layout global (Polices Kanit/Noto Sans, Header, Footer)
│   ├── page.tsx             # Page d'accueil (Hero, Stats, CTA HelloAsso)
│   │
│   ├── /(public)            # Pages vitrines (Front-End - Gemini)
│   │   ├── projets/
│   │   │   └── page.tsx     # Listing des éditions (fetch depuis /data/editions.json)
│   │   ├── association/
│   │   │   └── page.tsx     # Page "L'association" (Histoire, Equipe)
│   │   └── contact/
│   │       └── page.tsx     # Page de contact (rend le ContactForm)
│   │
│   └── /api                 # 🔒 ROUTES API (Back-End - Claude)
│       ├── contact/
│       │   └── route.ts     # POST : Validation Zod, Insert Supabase, Envoi Email
│       └── newsletter/
│           └── route.ts     # POST : Récupération des opt-ins pour envoi groupé
│
├── /components              # 🧩 COMPOSANTS REACT (Front-End)
│   ├── /ui                  # Atomes génériques (Boutons, Inputs, Select, Checkbox)
│   ├── /shared              # Composants globaux (Navbar avec don sticky, Footer, CookieBanner)
│   └── /editions            # Spécifique aux projets (EditionCard, SkeletonCard, EditionGrid)
│       └── ContactForm.tsx  # Le formulaire de contact (Client Component avec useForm)
│
├── /data                    # 📄 DONNÉES STATIQUES (Front-End - Gemini)
│   ├── editions.json        # Tableau des éditions (slug, titre, annee, image_url, etc.)
│   ├── partners.json        # Tableau des logos partenaires
│   └── stats.json           # Chiffres clés de l'asso
│
├── /lib                     # 🛠️ UTILITAIRES & CONFIG
│   ├── /supabase            # Clients base de données (Back-End - Claude)
│   │   ├── client.ts        # Client Supabase public (si besoin front)
│   │   └── server.ts        # Client Supabase privé (pour les routes API)
│   ├── /validations         # Schémas de sécurité
│   │   └── contact.ts       # Schéma Zod (Profil, Nom, Email, Message, RGPD)
│   └── utils.ts             # Fonctions utilitaires (cn pour Tailwind, formatage dates)
│
├── /types                   # 🏷️ TYPESCRIPT (Contrats de données)
│   └── index.ts             # Interfaces (Edition, ContactPayload, Partner)
│
├── /public                  # 🖼️ ASSETS STATIQUES
│   ├── fonts/               # (Si polices locales, sinon via next/font)
│   ├── images/              # Images fixes (Logo MMT, placeholders)
│   └── robots.txt           # Règles SEO
│
└── /supabase                # 🗄️ CONFIGURATION DB (Back-End - Claude)
    └── /migrations
        └── 00001_init.sql   # Script SQL de création de la table "contacts" et RLS