/*
# Create contact_submissions table

1. New Tables
- `contact_submissions`
- `id` (uuid, primary key, auto-generated)
- `full_name` (text, not null) — submitter's full name
- `email` (text, not null) — submitter's email address
- `phone` (text, not null) — submitter's phone number
- `profession` (text, not null) — profession selected from Registered Nurse / OT Nurse / Healthcare Assistant
- `country` (text, not null) — country the submitter is interested in
- `created_at` (timestamptz, default now()) — submission timestamp

2. Security
- Enable RLS on `contact_submissions`.
- This is a public contact form (no sign-in screen), so anon + authenticated INSERT is allowed.
- No SELECT/UPDATE/DELETE from the anon key — submissions are write-only from the frontend to protect user data. Only the service role (server-side) can read/manage them.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  profession text NOT NULL,
  country text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);
