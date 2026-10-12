CREATE TABLE public.location_hub_requests (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
 mobile_phone text NOT NULL CHECK (mobile_phone ~ '^[0-9]{10}$'),
 city text NOT NULL CHECK (city IN ('Hayward','Newark','Fremont','Union City','Other')),
 reason text NOT NULL CHECK (reason IN ('Checkup','Implants','Cosmetic','Emergency','Other')),
 attribution jsonb NOT NULL DEFAULT '{}'::jsonb CHECK (pg_column_size(attribution) < 4000),
 page_path text NOT NULL DEFAULT '/dentist-hayward-newark-fremont' CHECK (char_length(page_path) < 200),
 website text NOT NULL DEFAULT '' CHECK (website = '')
);
GRANT INSERT ON public.location_hub_requests TO anon, authenticated;
GRANT ALL ON public.location_hub_requests TO service_role;
ALTER TABLE public.location_hub_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors can submit requests" ON public.location_hub_requests FOR INSERT TO anon, authenticated WITH CHECK (website = '');