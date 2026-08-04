/*
# Add CV upload and location support to popup signup

1. Storage
- Create public bucket 'cvs' for storing uploaded CV files (any format)
- Allow anon + authenticated to upload files to the cvs bucket
- Allow public read access to uploaded CVs

2. Table changes (subscribers) — additive only, no data loss
- Add `location` text column — where the applicant is based
- Add `cv_url` text column — public URL/path of the uploaded CV file
*/

-- Create storage bucket for CVs
INSERT INTO storage.buckets (id, name, public)
VALUES ('cvs', 'cvs', true)
ON CONFLICT (id) DO NOTHING;

-- Allow anon uploads to cvs bucket
DROP POLICY IF EXISTS "anon_upload_cvs" ON storage.objects;
CREATE POLICY "anon_upload_cvs"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'cvs');

-- Allow public read of cvs
DROP POLICY IF EXISTS "anon_read_cvs" ON storage.objects;
CREATE POLICY "anon_read_cvs"
ON storage.objects FOR SELECT
TO anon, authenticated
USING (bucket_id = 'cvs');

-- Add new columns to subscribers table
ALTER TABLE subscribers ADD COLUMN IF NOT EXISTS location text;
ALTER TABLE subscribers ADD COLUMN IF NOT EXISTS cv_url text;
