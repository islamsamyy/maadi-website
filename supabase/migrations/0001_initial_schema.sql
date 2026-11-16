-- 0001_initial_schema.sql
-- Maadi Marble Production Schema, RLS Roles & Seed Data

-- 1. Private schema for security-definer helpers (not exposed to PostgREST)
CREATE SCHEMA IF NOT EXISTS private;

-- 2. Profiles table (linked to auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL,
  full_name text,
  company text,
  phone text,
  country text,
  role text NOT NULL DEFAULT 'customer' CHECK (role IN ('customer', 'sales', 'admin')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Helper function to read current user's role without RLS recursion
CREATE OR REPLACE FUNCTION private.get_my_role()
RETURNS text
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT role FROM public.profiles WHERE id = (SELECT auth.uid());
$$;

REVOKE ALL ON FUNCTION private.get_my_role() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION private.get_my_role() TO authenticated;

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION private.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, company, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.email, ''),
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'company', ''),
    'customer'
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION private.handle_new_user();

-- Profiles RLS
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  TO authenticated
  USING ((SELECT auth.uid()) = id);

CREATE POLICY "Staff can view all profiles"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (private.get_my_role() IN ('admin', 'sales'));

CREATE POLICY "Users can update own profile without changing role"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING ((SELECT auth.uid()) = id)
  WITH CHECK (
    (SELECT auth.uid()) = id
    AND role = (SELECT p.role FROM public.profiles p WHERE p.id = (SELECT auth.uid()))
  );

CREATE POLICY "Admins can update any profile"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING (private.get_my_role() = 'admin')
  WITH CHECK (private.get_my_role() = 'admin');

-- 3. Stones Catalog
CREATE TABLE IF NOT EXISTS public.stones (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  type text NOT NULL CHECK (type IN ('Marble', 'Granite', 'Travertine', 'Limestone', 'Onyx')),
  origin text NOT NULL,
  color text NOT NULL,
  finishes text[] NOT NULL DEFAULT '{}',
  thicknesses text[] NOT NULL DEFAULT '{}',
  slab_size text NOT NULL,
  density text NOT NULL,
  water_absorption text NOT NULL,
  stock_sqm integer NOT NULL DEFAULT 0 CHECK (stock_sqm >= 0),
  availability text NOT NULL DEFAULT 'In Stock' CHECK (availability IN ('In Stock', 'On Request')),
  category text NOT NULL DEFAULT 'Luxury' CHECK (category IN ('Residential', 'Commercial', 'Luxury', 'Eco-Friendly')),
  featured boolean NOT NULL DEFAULT false,
  published boolean NOT NULL DEFAULT true,
  description text NOT NULL,
  applications text[] NOT NULL DEFAULT '{}',
  image_url text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_stones_published ON public.stones(published);
CREATE INDEX IF NOT EXISTS idx_stones_type ON public.stones(type);

ALTER TABLE public.stones ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view published stones"
  ON public.stones FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Staff can view all stones"
  ON public.stones FOR SELECT
  TO authenticated
  USING (private.get_my_role() IN ('admin', 'sales'));

CREATE POLICY "Staff can insert stones"
  ON public.stones FOR INSERT
  TO authenticated
  WITH CHECK (private.get_my_role() IN ('admin', 'sales'));

CREATE POLICY "Staff can update stones"
  ON public.stones FOR UPDATE
  TO authenticated
  USING (private.get_my_role() IN ('admin', 'sales'))
  WITH CHECK (private.get_my_role() IN ('admin', 'sales'));

CREATE POLICY "Admins can delete stones"
  ON public.stones FOR DELETE
  TO authenticated
  USING (private.get_my_role() = 'admin');

-- 4. Projects
CREATE TABLE IF NOT EXISTS public.projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  location text NOT NULL,
  category text NOT NULL,
  area text NOT NULL,
  stones text[] NOT NULL DEFAULT '{}',
  image_url text NOT NULL,
  published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view published projects"
  ON public.projects FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Staff can manage projects"
  ON public.projects FOR ALL
  TO authenticated
  USING (private.get_my_role() IN ('admin', 'sales'))
  WITH CHECK (private.get_my_role() IN ('admin', 'sales'));

-- 5. Academy Articles
CREATE TABLE IF NOT EXISTS public.academy_articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  category text NOT NULL,
  read_time text NOT NULL,
  published_date text NOT NULL,
  excerpt text NOT NULL,
  body text,
  published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.academy_articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view published articles"
  ON public.academy_articles FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Staff can manage articles"
  ON public.academy_articles FOR ALL
  TO authenticated
  USING (private.get_my_role() IN ('admin', 'sales'))
  WITH CHECK (private.get_my_role() IN ('admin', 'sales'));

-- 6. Favorites
CREATE TABLE IF NOT EXISTS public.favorites (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  stone_slug text NOT NULL REFERENCES public.stones(slug) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(user_id, stone_slug)
);

CREATE INDEX IF NOT EXISTS idx_favorites_user_id ON public.favorites(user_id);

ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own favorites"
  ON public.favorites FOR SELECT
  TO authenticated
  USING ((SELECT auth.uid()) = user_id);

CREATE POLICY "Users can insert own favorites"
  ON public.favorites FOR INSERT
  TO authenticated
  WITH CHECK ((SELECT auth.uid()) = user_id);

CREATE POLICY "Users can delete own favorites"
  ON public.favorites FOR DELETE
  TO authenticated
  USING ((SELECT auth.uid()) = user_id);

-- 7. Quote Requests & Items
CREATE TABLE IF NOT EXISTS public.quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  quote_code text UNIQUE NOT NULL,
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  inquiry_mode text NOT NULL DEFAULT 'quote_basket',
  full_name text NOT NULL,
  company text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  country text NOT NULL,
  target_port text,
  notes text,
  status text NOT NULL DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Quoted', 'Won', 'Lost')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_quote_requests_user_id ON public.quote_requests(user_id);
CREATE INDEX IF NOT EXISTS idx_quote_requests_status ON public.quote_requests(status);

ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit quote requests"
  ON public.quote_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (user_id IS NULL OR user_id = (SELECT auth.uid()));

CREATE POLICY "Users can view own quote requests"
  ON public.quote_requests FOR SELECT
  TO authenticated
  USING ((SELECT auth.uid()) = user_id);

CREATE POLICY "Staff can view all quote requests"
  ON public.quote_requests FOR SELECT
  TO authenticated
  USING (private.get_my_role() IN ('admin', 'sales'));

CREATE POLICY "Staff can update quote requests"
  ON public.quote_requests FOR UPDATE
  TO authenticated
  USING (private.get_my_role() IN ('admin', 'sales'))
  WITH CHECK (private.get_my_role() IN ('admin', 'sales'));

CREATE TABLE IF NOT EXISTS public.quote_request_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  quote_request_id uuid NOT NULL REFERENCES public.quote_requests(id) ON DELETE CASCADE,
  stone_slug text NOT NULL,
  stone_name text NOT NULL,
  finish text NOT NULL,
  thickness text NOT NULL,
  quantity_sqm integer NOT NULL CHECK (quantity_sqm > 0)
);

CREATE INDEX IF NOT EXISTS idx_quote_items_request_id ON public.quote_request_items(quote_request_id);

ALTER TABLE public.quote_request_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert quote items"
  ON public.quote_request_items FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.quote_requests qr
      WHERE qr.id = quote_request_id
        AND (qr.user_id IS NULL OR qr.user_id = (SELECT auth.uid()))
    )
  );

CREATE POLICY "Users can view own quote items"
  ON public.quote_request_items FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.quote_requests qr
      WHERE qr.id = quote_request_id AND qr.user_id = (SELECT auth.uid())
    )
  );

CREATE POLICY "Staff can view all quote items"
  ON public.quote_request_items FOR SELECT
  TO authenticated
  USING (private.get_my_role() IN ('admin', 'sales'));

-- 8. Newsletter Subscribers
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON public.newsletter_subscribers FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Staff can view newsletter subscribers"
  ON public.newsletter_subscribers FOR SELECT
  TO authenticated
  USING (private.get_my_role() IN ('admin', 'sales'));

-- Explicit grants for PostgREST Data API
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT ON public.stones, public.projects, public.academy_articles TO anon, authenticated;
GRANT INSERT ON public.quote_requests, public.quote_request_items, public.newsletter_subscribers TO anon, authenticated;
GRANT ALL ON public.profiles, public.favorites, public.stones, public.projects, public.academy_articles, public.quote_requests, public.quote_request_items, public.newsletter_subscribers TO authenticated;
