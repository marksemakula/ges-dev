# GES — Nuxt SSR migration for SEO

This folder (`ges-nuxt/`) is a **server-side-rendered (SSR) Nuxt 3 rebuild** of the GES site, created so that Google and other crawlers receive **fully-rendered HTML** instead of an empty SPA shell. Your original Vite SPA in the repo root is **untouched** — this is a parallel target you promote once verified, the same way `ges old/` was kept during the last migration.

> Primary production domain assumed throughout: **https://ges.ac.ug**

---

## 1. Run it

```bash
cd ges-nuxt
npm install        # must run on a networked machine (see note below)
npm run dev        # http://localhost:3000  — dev with HMR
npm run build      # SSR production build  -> .output/  (Node server)
npm run generate   # fully static prerender -> .output/public/  (no server)
npm run preview    # preview the build locally
```

> **Note on the build environment:** the project files here are complete and syntax-checked, but `npm install`/`npm run build` were **not** run in the assistant's sandbox because outbound package downloads are blocked there. Run the two commands above on your machine (or CI) to produce the real build. Everything is standard Nuxt 3 — no custom steps.

### Troubleshooting

- **`tailwindcss` PostCSS error / "moved to a separate package"** — this means Tailwind **v4** got hoisted into the tree. `@nuxtjs/tailwindcss@6` targets Tailwind **v3** (the version your original app uses). `package.json` pins it via an `overrides` block. If you hit this, do a clean reinstall so the override takes effect:
  ```bash
  rm -rf node_modules package-lock.json
  npm install && npm run generate
  ```
- **og-image build noise** — the module is intentionally disabled (`ogImage: { enabled: false }`); "skipping setup" is expected.

---

## 2. Which build mode → which host

| Mode | Command | Output | Best host | Notes |
|------|---------|--------|-----------|-------|
| **Static (SSG)** | `npm run generate` | `.output/public/` (plain HTML/CSS/JS) | Netlify, Cloudflare Pages, **Namecheap cPanel** | Simplest + cheapest. Every page is real HTML. Recommended unless you add server-only features. |
| **SSR (Node)** | `npm run build` | `.output/` (Nitro server) | Netlify (auto), Vercel, Node host | Needed only if pages must render per-request (e.g. live data). |

For your Namecheap setup, **`npm run generate`** is the natural fit: upload the contents of `.output/public/` to `public_html`. Because routing is pre-rendered to real files, you no longer need the SPA `.htaccess` catch-all — though keep a 404 mapping so unknown paths serve the generated `404.html` (which returns a proper 404, per the spec).

### Going live on Netlify — preview first (recommended)

`ges-nuxt/netlify.toml` already holds the build config. This rollout keeps your current live site running while you verify the Nuxt build on a throwaway URL:

1. **Push** the `ges-nuxt/` folder to GitHub. Your existing site does **not** change — it still builds the root Vite app from the root `netlify.toml`.
2. In Netlify: **Add new site → Import an existing project →** pick this same repo.
3. In the new site's settings, set **Base directory = `ges-nuxt`**. Netlify then reads `ges-nuxt/netlify.toml` automatically (command `npm run generate`, publish `.output/public`, Node 22).
4. Deploy. You get a temporary URL like `something.netlify.app`. **Verify everything there:** each page, the institution redirects, a nonsense URL (must 404, not bounce to home), and view-source for `<title>`, description and the `EducationalOrganization` JSON-LD.
5. **Cut over** only once it checks out: point `ges.ac.ug` at this Netlify site, and 301-redirect the old `ges-ug.netlify.app` to the apex so indexing consolidates. Keep the old Vite site until you're satisfied, then retire it.

> Prefer to flip your *existing* production site rather than create a new one? Replace the root `netlify.toml` build with `command = "cd ges-nuxt && npm install && npm run generate"` and `publish = "ges-nuxt/.output/public"`. The next push then deploys Nuxt to your live domain — so only do that after testing.

---

## 3. What was implemented (mapped to the SEO spec)

1. **Rendering** — SSR/SSG via Nuxt. Crawlers get complete HTML. The one client-only widget (partners marquee) has a **server-rendered fallback** so its logos stay in the crawlable HTML.
2. **Dynamic `<head>`** — central map in `seo.config.ts` → applied per route in `app.vue` via `useSeoMeta`: unique `<title>` (`[Page] – Gombe Education Service`, <60 chars), 150–160-char descriptions, Open Graph + Twitter cards, and a **self-referencing absolute canonical** on every route.
3. **Semantic HTML** — preserved from the source (one `<h1>` per page; `<nav>/<main>/<footer>`; institution `<h1>` comes from `InstitutionLayout`). Image `alt` text carried over.
4. **Structured data (JSON-LD)** — in `app.vue`:
   - `EducationalOrganization` with `alternateName` (GES / Gombe Education Services), `address`, `contactPoint`, `sameAs` (socials), and **`subOrganization` for every school** (JSBI, SAKGHS Bujuuko/Kawaala, GJS Kampala/Gulu, ScoobyDoo Kampala/Gulu, IEPP). This is what ties searches for any individual school back to GES.
   - `WebSite` (enables the brand sitelinks block).
   - `BreadcrumbList` per route.
5. **Clean URLs** — lowercase, hyphenated, history-mode (already the case). Institution sub-site links 301-redirect (see `nuxt.config.ts` `routeRules`).
6. **Performance / Core Web Vitals** — Nuxt ships hashed, code-split, long-cache assets; fonts are `preconnect`-ed. Prerendered HTML gives fast LCP. (Run Lighthouse after deploy and tune images to WebP/AVIF — see follow-ups.)
7. **Sitemap & robots** — auto **`/sitemap.xml`** (excludes `/admin`) and **`/robots.txt`** (disallows `/admin`, links the sitemap).
8. **Internal linking** — shallow IA preserved; header/footer link every key page.
9. **404** — `error.vue` returns a real 404 status with helpful links (no soft-redirect to home). `/admin` is `noindex`.

Sitemap, robots and schema.org come from the dedicated modules `@nuxtjs/sitemap`, `@nuxtjs/robots` and `nuxt-schema-org` (they share `nuxt-site-config`, so the single `site` block drives all three). The `og-image` and `link-checker` modules are intentionally omitted to keep the build lean and avoid the Tailwind-v4 dependency they pull in.

---

## 4. Google Search Console & Bing (do this after first deploy)

1. **Verify the domain** in [Google Search Console](https://search.google.com/search-console). Easiest is the **DNS TXT** method at Namecheap (covers the whole domain incl. subdomains). Alternatively add an HTML-tag meta — drop it into `nuxt.config.ts` → `app.head.meta`.
2. **Submit the sitemap**: in Search Console → *Sitemaps* → enter `sitemap.xml`. Repeat in [Bing Webmaster Tools](https://www.bing.com/webmasters) (you can import directly from Search Console).
3. **Geotargeting**: `.ac.ug` is a Uganda ccTLD, so Uganda is already implied — no manual geotarget needed.
4. **Request indexing** for the homepage and each main page via the URL Inspection tool to speed up first crawl.
5. After a few days, check *Pages* (index coverage), *Enhancements* (Breadcrumb / Organization rich results), and *Core Web Vitals*.

---

## 5. Finish checklist (small, mostly content)

- [ ] Run `npm install && npm run generate` (or `build`) and fix anything the real build flags. If `og-image` complains, confirm it's disabled in `nuxt.config.ts`.
- [ ] **Real share image**: add a 1200×630 `public/og-image.jpg` and set `ogImage` per route in `seo.config.ts` (currently falls back to `logo.png`).
- [ ] **Confirm social URLs** in `seo.config.ts` (`socials`) — replace placeholders with the real Facebook/Instagram/YouTube/LinkedIn/X/TikTok profile links so `sameAs` is accurate.
- [ ] **Verify the contact details** in `app.vue` JSON-LD (phone `+256 708 700 006`, `info@ges.ac.ug`, locality "Gombe") and add a precise `streetAddress`/`postalCode` if available.
- [ ] **Tune per-page titles/descriptions** in `seo.config.ts` if you want different keyword emphasis.
- [ ] Optional: add `Course` schema once you publish programme/course pages, and a `SearchAction` (sitelinks searchbox) once on-site search has a real results page.
- [ ] Optional polish: upgrade `RouterLink` → `NuxtLink` for prefetching; convert hero/campus images to WebP/AVIF for better LCP.

---

## 6. File map

```
ges-nuxt/
├─ nuxt.config.ts      site URL, modules, redirects, robots/sitemap, head defaults
├─ seo.config.ts       per-route titles/descriptions + institution & social data
├─ app.vue             applies per-route meta + canonical + JSON-LD globally
├─ error.vue           real 404 page (noindex, follow)
├─ layouts/
│  ├─ default.vue      header + footer (most pages)
│  └─ branded.vue      no GES chrome (institution / international pages)
├─ components/         Header, Footer, ScrollToTop, InstitutionLayout (SSR-safe)
├─ pages/              file-based routes (index, about, blog, … , institutions/jsbi)
├─ assets/css/main.css ported design system (rpl-* classes, brand variables)
└─ public/             logo, images, etc.
```

**SSR-specific changes vs. the original source:** `useScroll(window)` → `useWindowScroll()` in `Header.vue` and `ScrollToTop.vue`; the marquee wrapped in `<ClientOnly>` with a static fallback; routing moved to file-based pages; `App.vue` split into `app.vue` + layouts. All page **content** is otherwise a faithful copy of your existing components.
