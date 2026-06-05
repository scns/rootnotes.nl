Supabase Production Conversion (Cloudflare Pages)

Deze gids helpt je de PoC om te zetten naar een veilige productie-opzet met Supabase en Cloudflare Pages Functions.

Samenvatting
- Houd dynamische data (likes, subscribers) buiten je statische Hugo build.
- Gebruik Supabase als database maar bewaar de krachtige `service_role` sleutel alleen in serverless functies (Pages Functions). Geef de browser geen service key.
- Gebruik RLS (Row Level Security) en policies waar mogelijk.

Stap 1 — Supabase projecten en tabellen
1. Maak een Supabase project aan: https://app.supabase.com
2. Voeg de volgende tabellen toe (SQL Editor):

-- likes
CREATE TABLE public.likes (
  id bigserial PRIMARY KEY,
  slug text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- subscribers
CREATE TABLE public.subscribers (
  id bigserial PRIMARY KEY,
  email text NOT NULL UNIQUE,
  created_at timestamptz DEFAULT now()
);

Maak eventueel indexen:
CREATE INDEX ON public.likes (slug);

Stap 2 — RLS / Policies (aanrader)
Voor productie wil je RLS of beperkingen die misbruik voorkomen. Een simpele policy voorbeeld:

-- Schakel RLS aan
ALTER TABLE public.likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- PRODUCTIE: veilige RLS-aanpak (aanbevolen)
-- 1) Schakel RLS aan
ALTER TABLE public.likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- 2) Geef anonieme gebruikers alleen leesrecht (SELECT). Laat INSERTS alleen via
--    je serverless proxy (Pages Functions) lopen die de `service_role` key gebruikt.
CREATE POLICY anon_select_likes ON public.likes FOR SELECT TO anon USING (true);
CREATE POLICY anon_select_subscribers ON public.subscribers FOR SELECT TO anon USING (true);

-- Laat GEEN anon INSERT policy bestaan. Dit voorkomt dat clients rechtstreeks in de DB schrijven.
-- Inserts/updates worden gedaan door je serverless Functions die de Supabase `service_role` key
-- veilig gebruiken (zoals de `/api/like` en `/api/subscribe` function in dit repo).

-- OPTIONEEL (NIET AANBEVOLEN): als je echt client-side inserts wilt toestaan, gebruik dan
-- een WITH CHECK expressie om minimale validatie te forceren. Bijvoorbeeld:
-- CREATE POLICY anon_insert_subscribers ON public.subscribers
--   FOR INSERT TO anon
--   WITH CHECK (email IS NOT NULL AND email <> '');

-- Maar nogmaals: voor productie is het veiliger om geen anon INSERTS toe te staan en
-- de serverless proxy te gebruiken.

BELANGRIJK: Dit is niet voldoende voor productie. Overweeg in productie:
- Geen directe anon writes; gebruik serverless proxy met service_role-key.
- Of gebruik RLS met checks (bijv. require valid JWT).

Stap 3 — Cloudflare Pages Functions en secrets
1. In je Pages project, ga naar Settings → Functions & D1 → Add Variable Binding (of Environment Variables / Secrets).
2. Voeg variabelen:
   - `SUPABASE_URL` = https://<project>.supabase.co
   - `SUPABASE_SERVICE_ROLE` = <service_role_key> (kopieer uit Supabase Project Settings -> API)
3. Zorg dat deze secrets alleen beschikbaar zijn voor Functions/production deployments.

Stap 4 — Functies in dit repo
- `functions/api_like.js` — POST/GET endpoint dat writes/reads naar Supabase doet met `service_role` key.
- `functions/api_subscribe.js` — POST endpoint voor inschrijven.

Cloudflare Pages zal deze functions automatisch deployen vanaf de `/functions` map.

Stap 5 — Verwijder client‑side anon key
- Verwijder `params.supabase.anon_key` uit `config.toml` en zorg dat `layouts/partials/supabase-poc.html` niet meer naar Supabase direct verwijst.
  In deze repo is de partial aangepast om `/api/like` en `/api/subscribe` te gebruiken.

Stap 6 — Beveiliging en abuse prevention
- Rate limiting: Cloudflare Workers/Pages biedt mogelijkheden; implementeer throttling per IP or use CAPTCHA for subscribe.
- Duplication prevention: serverless inserts should validate duplicates (e.g., check existing email before insert) or rely on unique constraint and handle 409 responses gracefully.
- Monitoring: zet alerts in Supabase en Cloudflare voor errors/usage.

Stap 7 — Test en deploy
1. Lokale test: `hugo server` om de static site te starten. Voor functions kun je lokaal testen met `wrangler dev` (Cloudflare) of gebruik Pages preview deploy.
2. Public deploy: push naar GitHub; Pages build zal deployen en functions automatisch beschikbaar maken under `/api/*`.
3. Test an article page: like button en subscribe form moeten werken.

Stap 8 — Optionele verbeteringen
- Gebruik server-side validation (email format, rate-limit) in functions.
- Maak een `/rpc/likes_count` Postgres function or materialized view voor efficient counts.
- Gebruik Supabase Edge Functions for heavier logic.

Veelgestelde problemen
- CORS errors: functions in same Pages site avoid cross-origin issues; bovenstaande functions set permissive CORS headers.
- Duplicate subscribes: unique constraint returns 409 — functions handle that and return ok message.


Als je wilt kan ik:
- RLS policies opstellen die passen bij je gewenste beveiligingsniveau.
- Extra validation en throttling toevoegen aan de functions.
- Een `wrangler` of Cloudflare Pages deploy instructie toevoegen gericht op jouw repo en account.

*** End of guide ***
