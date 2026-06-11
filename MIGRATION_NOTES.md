# GES Content Migration — rescue.org-style Layout

The GES site (from ges-dev.vercel.app / the "ges old" folder) has been migrated into the new layout at the root of this folder. All content — institutions, links, contact details, blog posts, leadership, calendar, gallery — is unchanged.

## What changed
- **Design system** (`src/index.css`, `tailwind.config.js`): rescue.org palette — yellow `#FFC72C`, black `#1A1A1A`, greys — replacing the old navy/teal. Shared `rpl-*` component classes (section headings, teaser cards, stats, slug labels, arrow links).
- **Home** (`src/pages/Home.vue`): rebuilt to mirror the rescue.org homepage structure — split hero with crossfading slideshow (`public/images/slideshow/`), mission statement + impact stats, 3-column institution cards, leadership quote band, news & featured stories grid, "Get involved" cards, yellow CTA band.
- **Footer** (`src/components/layout/Footer.vue`): two-band footer like rescue.org — light grey main band (brand, links, institutions, social) + black utility band (accreditation logos, copyright, powered-by).
- **Header**: kept the rescue-style header that was already in place (white nav, yellow CTA, dark top bar).
- **Inner pages**: palette migrated on all pages (About, Leadership, Blog, Partnerships, GES Life, Mentorship, Calendar, International Pathway). Page heroes are now black bands with yellow eyebrows. JSBI keeps its own brand colors.
- **Fixed broken images** (pre-existing): missing unsplash/premium photos in GES Life gallery and Mentorship remapped to real school photos in `public/images/`; `TD.avif` → `TD.jpg`; Leadership MD photo → existing `Owek. Kyewalabye David Male.jpg`.

## Notes
- The new design was rebuilt cleanly from the saved reference page — none of rescue.org's scripts, trackers, or photos were reused.
- `eslint.config.js` references `eslint-plugin-react-hooks`, which isn't in package.json (pre-existing); `npm run lint` won't run until that's removed or installed.
- To run: `npm install` then `npm run dev`. Build verified with `npm run build`.
- The original project is untouched in `ges old/`.
