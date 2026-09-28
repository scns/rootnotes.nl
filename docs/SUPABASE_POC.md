Supabase PoC

Dit document beschrijft hoe je de PoC (likes + subscribers) opzet en de benodigde SQL.

1) Maak een Supabase project aan: https://app.supabase.com

2) Maak twee tabellen (SQL schema):

-- likes table
CREATE TABLE public.likes (
  id bigserial PRIMARY KEY,
  slug text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- subscribers table
CREATE TABLE public.subscribers (
  id bigserial PRIMARY KEY,
  email text NOT NULL UNIQUE,
  created_at timestamptz DEFAULT now()
);

3) RLS / permissies (voor simpele PoC kun je anon inserts toestaan, maar productief gebruik vereist RLS):

-- Allow anon role to INSERT into likes and subscribers (only for PoC)
GRANT INSERT ON public.likes TO anon;
GRANT SELECT ON public.likes TO anon;
GRANT INSERT ON public.subscribers TO anon;

4) Voeg de Supabase URL en anon key toe aan je Hugo config (bijv. `config.toml`):

[params.supabase]
  url = "https://your-project-ref.supabase.co"
  anon_key = "public-anon-key"

Zorg dat je de anon key alleen gebruikt als je RLS/policies hebt afgebakend.

5) Start je Hugo server lokaal en controleer een artikelpagina. De partial `layouts/partials/supabase-poc.html` leest de config en voegt een like button en subscribe form toe.

6) Opschaling / beveiliging:
- Voor productie: configureer RLS policies om misbruik te beperken.
- Overweeg een serverless proxy (Pages Functions) met service_role key voor beheerde inserts en strictere validatie.
- Voeg throttling of captcha toe om spam te voorkomen.

---
PoC bestanden in repo:
- layouts/partials/supabase-poc.html
- layouts/_default/single.html (incl. partial)

Testen: na het invullen van `params.supabase` in `config.toml`, start:

hugo server

Bezoek een artikel en test like + inschrijving.
