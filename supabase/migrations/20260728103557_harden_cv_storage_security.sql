/*
# Harden CV storage security

1. Make the cvs bucket PRIVATE so CVs are not publicly listable/downloadable
   - CVs contain sensitive personal data and should not be world-readable.
   - Uploads from the popup still work (INSERT policy stays).
   - Reads now require authentication (admin/dashboard), not anon.

2. Add a 10MB file size limit to prevent storage abuse.

3. Keep INSERT open to anon (popup needs it) but lock down SELECT to authenticated only.
*/

-- Make bucket private
UPDATE storage.buckets
SET public = false, file_size_limit = 10485760
WHERE id = 'cvs';

-- Remove public anon read; only authenticated (dashboard/admin) can read CVs
DROP POLICY IF EXISTS "anon_read_cvs" ON storage.objects;
DROP POLICY IF EXISTS "auth_read_cvs" ON storage.objects;
CREATE POLICY "auth_read_cvs"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'cvs');

-- Keep anon upload (popup needs it), already restricted to cvs bucket
-- (anon_upload_cvs policy already exists and is correct)
