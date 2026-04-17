// @ts-check
import { defineConfig } from 'astro/config';

/**
 * GitHub Pages + custom domain `dilee.co` (see `public/CNAME`).
 * CI sets `ASTRO_SITE=https://dilee.co` and leaves `ASTRO_BASE` unset so the build is rooted at `/`.
 *
 * Local `npm run dev` works with neither set.
 */
const site = process.env.ASTRO_SITE;
const base = process.env.ASTRO_BASE;

export default defineConfig({
	...(site ? { site } : {}),
	...(base ? { base } : {}),
});
