# Rootnotes.nl

Persoonlijke blog gebouwd met [Hugo](https://gohugo.io/) en gepubliceerd via GitHub Pages.

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
als je het wilt publiceren. Push naar `main` — GitHub Actions doet de rest.

---

## Publiceren

Elke push naar de `main`-branch triggert de GitHub Actions workflow in
`.github/workflows/deploy.yml`. Die bouwt de site met Hugo en publiceert
het resultaat naar GitHub Pages.

**Eerste keer instellen:**

1. Ga in je repo naar **Settings → Pages**
2. Zet *Source* op **GitHub Actions**
3. Zorg dat je domein `rootnotes.nl` is ingesteld onder *Custom domain*
4. Zet DNS bij je registrar:
   - `A`-records naar de GitHub Pages IP's: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` `www` → `scns.github.io`

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
├── .github/workflows/deploy.yml   # GitHub Actions CI/CD
├── archetypes/posts.md            # Template voor nieuwe artikelen
├── content/
│   ├── posts/                     # Blog artikelen (Markdown)
│   └── over.md                    # Over-pagina
├── static/
│   └── CNAME                      # Custom domein
├── themes/rootnotes/              # Eigen thema
│   ├── layouts/                   # HTML-templates
│   └── static/css/style.css       # Stylesheet (dark/light mode)
└── hugo.toml                      # Configuratie
```
