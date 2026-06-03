# RootNotes.nl

Persoonlijke blog gebouwd met [Hugo](https://gohugo.io/) en gepubliceerd via Cloudflare Pages.

---

## Lokaal draaien

1. [Installeer Hugo](https://gohugo.io/installation/) (extended versie, ≥ 0.120)
2. Clone de repository
3. Start de dev-server:

```bash
hugo server -D
```

De site draait op <http://localhost:1313>. De vlag `-D` toont ook draft-artikelen.

---

## Nieuw artikel schrijven

```bash
hugo new posts/mijn-titel.md
```

Het bestand wordt aangemaakt in `content/posts/`. Bewerk het en verwijder `draft: true`
als je het wilt publiceren. Na merge naar `main` pakt Cloudflare Pages de wijziging automatisch op.

---

## Publiceren

Cloudflare Pages bouwt en publiceert automatisch op basis van de gekoppelde
GitHub-repository.

**Aanbevolen instellingen in Cloudflare Pages:**

1. Framework preset: **Hugo**
2. Build command: `hugo --minify`
3. Build output directory: `public`
4. Productiebranch: `main`
5. Custom domain: `rootnotes.nl` (en eventueel `www.rootnotes.nl`)

---

## Reacties instellen (Giscus)

Reacties werken via [Giscus](https://giscus.app/) en zijn gekoppeld aan GitHub Discussions.

**Stap 1** — Schakel Discussions in op de repo:  
*Settings → Features → ✓ Discussions*

**Stap 2** — Installeer de Giscus GitHub App:  
<https://github.com/apps/giscus>

**Stap 3** — Genereer je configuratie op <https://giscus.app>:
- Selecteer repository `scns/rootnotes.nl`
- Kopieer `data-repo-id` en `data-category-id`

**Stap 4** — Vul de waarden in `hugo.toml` in:

```toml
[params.giscus]
  repo        = "scns/rootnotes.nl"
  repo_id     = "R_XXXXXXXX"      # ← plak hier
  category    = "Announcements"
  category_id = "DIC_XXXXXXXXXX"  # ← plak hier
```

Push de wijziging — reacties zijn direct actief.

---

## Projectstructuur

```
rootnotes.nl/
├── .github/workflows/ci-hugo.yml  # Build-checks
├── .github/workflows/link-check.yml
├── archetypes/posts.md            # Template voor nieuwe artikelen
├── content/
│   ├── posts/                     # Blog artikelen (Markdown)
│   └── over.md                    # Over-pagina
├── static/                        # Statische assets
├── themes/rootnotes/              # Eigen thema
│   ├── layouts/                   # HTML-templates
│   └── static/css/style.css       # Stylesheet (dark/light mode)
└── hugo.toml                      # Configuratie
```
