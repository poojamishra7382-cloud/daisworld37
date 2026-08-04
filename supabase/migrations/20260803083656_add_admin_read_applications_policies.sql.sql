/*
# Allow authenticated admins to read & manage applications

1. Security changes (applications table)
   - Add SELECT policy for authenticated users (admins who log in to the dashboard).
   - Add UPDATE policy for authenticated users (to change application status: new → reviewed → contacted → hired).
   - Add DELETE policy for authenticated users (to remove spam/test applications).
   - The existing anon INSERT policy stays so the public Apply Now form keeps working.

2. Important notes
   - The resumes storage bucket already has an "auth_read_resumes" policy allowing authenticated users to read/download resumes.
   - Only someone who signs in via Supabase Auth (email + password) can see applications and download resumes.
   - You create the admin account yourself: sign up once at /admin, and from then on use /admin to log in.
*/

DROP POLICY IF EXISTS "auth_select_applications" ON applications;
CREATE POLICY "auth_select_applications"
ON applications FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "auth_update_applications" ON applications;
CREATE POLICY "auth_update_applications"
ON applications FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_applications" ON applications;
CREATE POLICY "auth_delete_applications"
ON applications FOR DELETE
TO authenticated
USING (true);
