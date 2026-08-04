/*
# Create subscribers table for popup signup leads

1. New Tables
- `subscribers`
  - `id` (uuid, primary key)
  - `email` (text, not null) — subscriber's email address
  - `name` (text) — optional subscriber name
  - `source` (text, default 'popup') — where the signup came from
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `subscribers`.
- Single-tenant public signup (no sign-in screen). Anyone can subscribe via the popup.
- Allow anon + authenticated to INSERT only.
- No SELECT/UPDATE/DELETE from the public client.
*/

CREATE TABLE IF NOT EXISTS subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  name text,
  source text NOT NULL DEFAULT 'popup',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_subscribers" ON subscribers;
CREATE POLICY "anon_insert_subscribers"
ON subscribers FOR INSERT
TO anon, authenticated
WITH CHECK (true);
