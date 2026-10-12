CREATE TABLE public.failing_teeth_consultations (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
 mobile_phone text NOT NULL CHECK (mobile_phone ~ '^[0-9]{10}$'),
 best_time text NOT NULL CHECK (best_time IN ('Weekday morning','Weekday afternoon','Saturday','Any time')),
 page_path text NOT NULL DEFAULT '/replace-failing-teeth-hayward-ca-option-2' CHECK (page_path = '/replace-failing-teeth-hayward-ca-option-2'),
 consent boolean NOT NULL CHECK (consent = true),
 attribution jsonb NOT NULL DEFAULT '{}'::jsonb CHECK (octet_length(attribution::text) < 4096),
 website text NOT NULL DEFAULT '' CHECK (website = '')
);
GRANT INSERT ON public.failing_teeth_consultations TO anon, authenticated;
GRANT ALL ON public.failing_teeth_consultations TO service_role;
ALTER TABLE public.failing_teeth_consultations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors may request a consultation only" ON public.failing_teeth_consultations FOR INSERT TO anon, authenticated WITH CHECK (consent = true AND website = '' AND page_path = '/replace-failing-teeth-hayward-ca-option-2');