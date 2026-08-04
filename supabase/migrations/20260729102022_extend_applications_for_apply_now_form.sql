/*
# Extend applications table for detailed Apply Now form + create resumes bucket

1. Table changes (applications) — additive only, no data loss
   New columns to support the detailed application form:
   - `position` (text) — position the applicant is applying for
   - `current_country` (text) — where the applicant currently lives
   - `nationality` (text) — applicant's nationality
   - `date_of_birth` (date) — applicant's DOB (used for 18–60 age validation)
   - `has_passport` (boolean) — whether applicant has a valid passport
   - `passport_number` (text) — passport number (required only if has_passport = true)
   - `willing_to_relocate` (boolean) — whether applicant is willing to relocate
   - `resume_url` (text) — storage path of the uploaded resume file

2. Storage
   - Create PRIVATE bucket 'resumes' for resume uploads (PDF/DOC/DOCX, max 2MB)
   - Allow anon + authenticated to upload to the resumes bucket
   - Only authenticated (admin/dashboard) can read resumes — resumes are private

3. Security
   - applications table keeps existing INSERT-only anon policy.
   - resumes bucket: anon can upload, only authenticated can read.
*/

-- Add new columns to applications table
ALTER TABLE applications ADD COLUMN IF NOT EXISTS position text;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS current_country text;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS nationality text;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS date_of_birth date;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS has_passport boolean DEFAULT false;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS passport_number text;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS willing_to_relocate boolean DEFAULT true;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS resume_url text;

-- Create private resumes bucket (2MB limit)
INSERT INTO storage.buckets (id, name, public, file_size_limit)
VALUES ('resumes', 'resumes', false, 2097152)
ON CONFLICT (id) DO UPDATE SET public = false, file_size_limit = 2097152;

-- Allow anon uploads to resumes bucket
DROP POLICY IF EXISTS "anon_upload_resumes" ON storage.objects;
CREATE POLICY "anon_upload_resumes"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'resumes');

-- Only authenticated can read resumes (admin/dashboard)
DROP POLICY IF EXISTS "auth_read_resumes" ON storage.objects;
CREATE POLICY "auth_read_resumes"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'resumes');
