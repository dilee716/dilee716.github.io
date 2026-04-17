# Life coaching site (Astro + GitHub Pages)

Single-page marketing site for a coaching practice: services, embedded Calendly booking, testimonials, and YouTube.

## Local development

```bash
npm install
npm run dev
```

Build a production bundle:

```bash
npm run build
npm run preview
```

## Configure your content

- **Business name, tagline, services, Calendly, YouTube**: edit [`src/site.config.ts`](src/site.config.ts).
- **Testimonials**: edit [`src/data/testimonials.ts`](src/data/testimonials.ts).

### Calendly

Set `calendlyUrl` to your public scheduling page (the same URL you share with clients). The booking section uses that URL for both the iframe embed and the “Open in Calendly” fallback link.

### YouTube

Set `youtubeChannelUrl` to your full channel URL. Optionally set `featuredYoutubeVideoId` to an 11-character video id to show one embedded video on the page.

## Deploy on GitHub Pages

1. Push this repository to GitHub (default branch `main`).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually). The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds with Astro and publishes `dist/`.

### How `site` and `base` are chosen

The workflow sets environment variables for `astro build`:

- If the repository name is **`<github-username>.github.io`**, the site is served at the domain root and **no** `base` path is set.
- Otherwise, the site is assumed to be a **project page** at `https://<username>.github.io/<repo>/` and `base` is set to `/<repo>` automatically.

To override locally (for example to reproduce a project-page build):

```bash
ASTRO_SITE=https://youruser.github.io ASTRO_BASE=/your-repo npm run build
```

## Project structure

- [`src/pages/index.astro`](src/pages/index.astro) — landing page composition
- [`src/components/`](src/components/) — section components
- [`src/layouts/Layout.astro`](src/layouts/Layout.astro) — document shell and global styles
- [`src/styles/global.css`](src/styles/global.css) — theme and layout CSS
