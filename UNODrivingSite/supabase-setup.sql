-- Supabase Setup Script for UNO Driving School Admin Dashboard

-- Enable pgcrypto extension if not active
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- 1. Create table 'posts'
CREATE TABLE public.posts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  date date NOT NULL,
  blog_type text NOT NULL,
  slug text UNIQUE NOT NULL,
  cover_image_url text,
  content jsonb DEFAULT '[]'::jsonb,
  published boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- 2. Create Storage Bucket 'blog-images'
INSERT INTO storage.buckets (id, name, public) 
VALUES ('blog-images', 'blog-images', true)
ON CONFLICT (id) DO NOTHING;

-- 3. Row Level Security Setup on 'posts'
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Allow public read access to published posts
CREATE POLICY "Public users can view published posts" 
ON public.posts FOR SELECT 
TO public 
USING (published = true);

-- Allow authenticated admins full access
CREATE POLICY "Admins have full access" 
ON public.posts FOR ALL 
TO authenticated 
USING (true) WITH CHECK (true);

-- 4. Storage Policies on 'blog-images'
-- Allow public viewing of files
CREATE POLICY "Public Read Access"
ON storage.objects FOR SELECT
TO public
USING ( bucket_id = 'blog-images' );

-- Allow authenticated users to insert files
CREATE POLICY "Admin Upload Access"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK ( bucket_id = 'blog-images' );

-- Allow authenticated users to update/delete files
CREATE POLICY "Admin Modify Access"
ON storage.objects FOR UPDATE
TO authenticated
USING ( bucket_id = 'blog-images' );

CREATE POLICY "Admin Delete Access"
ON storage.objects FOR DELETE
TO authenticated
USING ( bucket_id = 'blog-images' );

-- 5. Trigger for updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER trg_posts_updated_at
BEFORE UPDATE ON public.posts
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- ─────────────────────────────────────────────────────────────────────────────
-- 6. Page Content Table (for admin-editable page content)
-- ─────────────────────────────────────────────────────────────────────────────

CREATE TABLE public.page_content (
  id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  page_id     text UNIQUE NOT NULL,
  content     jsonb DEFAULT '{}'::jsonb,
  updated_at  timestamp with time zone DEFAULT now(),
  updated_by  text
);

ALTER TABLE public.page_content ENABLE ROW LEVEL SECURITY;

-- Anyone can read (pages are publicly rendered)
CREATE POLICY "Public can read page content"
  ON public.page_content FOR SELECT TO public USING (true);

-- Only authenticated admins can write
CREATE POLICY "Admins can edit page content"
  ON public.page_content FOR ALL TO authenticated
  USING (true) WITH CHECK (true);

-- Seed the three editable pages (empty content = defaults are used)
INSERT INTO public.page_content (page_id, content) VALUES
  ('homepage', '{}'),
  ('about-us', '{}'),
  ('prices',   '{}')
ON CONFLICT (page_id) DO NOTHING;

-- Keep updated_at current
CREATE TRIGGER trg_page_content_updated_at
  BEFORE UPDATE ON public.page_content
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
