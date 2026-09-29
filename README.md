# Ahmad Fathan Hidayatullah — Personal Academic Website

Static academic site built with [Astro](https://astro.build) 5 and Tailwind CSS 4.
English only; deployed to GitHub Pages at https://ahmad-fathan.github.io via GitHub Actions.

## Pages

| Path | Content |
| --- | --- |
| `/` | Hero, research interests, recent publications, teaching, recent talks |
| `/publications` | Full publication list, grouped by year, APA style, DOI links |
| `/research` | Research interests, themes, grants, peer-review service |
| `/teaching` | Courses taught, grouped by study level |
| `/talks` | Invited talks, seminars, workshops, trainings (newest first) |
| `/cv` | Education, professional experience, affiliations + CV PDF |
| `/contact` | Contact channels |

## Editing content

- **Identity, profile URLs, research interests** → `src/config/site.ts` (single source of truth)
- **Publications** → `src/data/publications.ts` (typed array; keep in sync with Google Scholar)
- **Teaching** → one Markdown file per course in `src/content/teaching/` (schema in `src/content.config.ts`)
- **Talks** → one Markdown file per event in `src/content/speaking/`
- **UI labels** → `src/i18n/ui.ts`
- **CV PDF** → replace `public/files/cv.pdf`
- **Photo** → replace `public/images/profile.jpg` (square, 512×512)

## Development

```bash
npm install
npm run dev        # local dev server
npm run build      # static build to dist/
npm run typecheck  # astro check
```

## Deploy

Push to `main` — `.github/workflows/deploy.yml` runs typecheck, build, and publishes `dist/` to GitHub Pages.
