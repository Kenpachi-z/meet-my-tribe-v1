-- Migration: 00001_init.sql
-- Creates the contact_submissions table and locks it down with RLS.

CREATE TABLE IF NOT EXISTS contact_submissions (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  profil        TEXT NOT NULL CHECK (profil IN ('collectivite', 'partenaire', 'benevole', 'autre')),
  nom           TEXT NOT NULL,
  email         TEXT NOT NULL,
  message       TEXT NOT NULL,
  rgpd_consent  BOOLEAN NOT NULL DEFAULT TRUE,
  newsletter_optin BOOLEAN NOT NULL DEFAULT FALSE
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- POLICY: The anon/public role can NOT read any rows (zero data exposure)
-- The service_role (used by our API route) bypasses RLS by design.
CREATE POLICY "No public read access"
  ON contact_submissions
  FOR SELECT
  TO anon
  USING (false);

-- POLICY: Deny direct inserts from the browser (anon / authenticated roles).
-- All writes must go through the server-side API route using service_role.
CREATE POLICY "No public insert access"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (false);
