/*
# Create applications table for nurse recruitment inquiries

1. New Tables
- `applications`
  - `id` (uuid, primary key)
  - `full_name` (text, not null) — applicant's full name
  - `email` (text, not null) — applicant's email address
  - `phone` (text, not null) — applicant's phone number
  - `qualification` (text, not null) — nursing qualification (BSc Nursing / GNM / BPT / Other)
  - `experience_years` (int) — years of clinical experience
  - `preferred_role` (text) — which job role they're interested in
  - `message` (text) — optional additional message
  - `status` (text, default 'new') — application status for tracking
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `applications`.
- Single-tenant public intake form (no sign-in screen). Anyone can submit an application.
- Allow anon + authenticated to INSERT (the form writes as anon).
- No SELECT/UPDATE/DELETE from the public client — only admins manage applications server-side.
*/

CREATE TABLE IF NOT EXISTS applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  qualification text NOT NULL,
  experience_years integer,
  preferred_role text,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_applications" ON applications;
CREATE POLICY "anon_insert_applications"
ON applications FOR INSERT
TO anon, authenticated
WITH CHECK (true);
