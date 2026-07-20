import { institutions } from './seo.config'

// Landing pages served by pages/institutions/[slug].vue (jsbi has its own
// static page; IEPP maps to /international-pathway).
const institutionPaths = institutions
  .filter((i) => i.path === `/institutions/${i.slug}` && i.slug !== 'jsbi')
  .map((i) => i.path)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-06-01',
  devtools: { enabled: false },

  // pages/gesLifeGalleryImages.ts is a data file, not a route. Make sure Nuxt
  // never turns stray non-.vue files in pages/ into (broken) routes.
  ignore: ['**/gesLifeGalleryImages.ts'],
  hooks: {
    'pages:extend'(pages) {
      const stripNonVue = (list: any[]) => {
        for (let i = list.length - 1; i >= 0; i--) {
          const p = list[i]
          if (p.file && !String(p.file).endsWith('.vue')) list.splice(i, 1)
          else if (p.children) stripNonVue(p.children)
        }
      }
      stripNonVue(pages)
    },
  },

  // Dedicated SEO modules (sitemap, robots, schema.org). They share
  // nuxt-site-config, so the `site` block below configures all of them.
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap', '@nuxtjs/robots', 'nuxt-schema-org'],

  css: ['~/assets/css/main.css'],

  // Single source of truth for the production domain.
  // Drives canonical URLs, sitemap, robots and Open Graph URLs.
  site: {
    url: 'https://ges.ac.ug',
    name: 'Gombe Education Service',
    description:
      'Gombe Education Service (GES) has delivered quality education in Uganda since 2013 through Gombe High School, Gombe Junior School, ScoobyDoo International and JSBI.',
    defaultLocale: 'en',
  },

  robots: {
    disallow: ['/admin'],
  },

  sitemap: {
    exclude: ['/admin/**'],
    // Dynamic [slug].vue routes are not auto-discovered by the module.
    urls: institutionPaths,
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: '~/tailwind.config.js',
  },

  // marquee lib needs to be transpiled for SSR
  build: {
    transpile: ['vue3-marquee'],
  },

  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'shortcut icon', type: 'image/png', href: '/logo.png' },
        { rel: 'apple-touch-icon', href: '/logo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ],
      meta: [
        { name: 'theme-color', content: '#7A0001' },
        { name: 'author', content: 'Gombe Education Service' },
      ],
    },
  },

  routeRules: {
    // --- Institutions now have landing pages ON ges.ac.ug (required for
    // Google to list them as sitelinks under the GES result). Legacy slugs
    // 301 to the new internal pages instead of the external school sites.
    '/institutions/gjs-kikajjo': { redirect: { to: '/institutions/gjs-kampala', statusCode: 301 } },
    '/institutions/gjs-boarding': { redirect: { to: '/institutions/gjs-kampala', statusCode: 301 } },
    '/institutions/gjs-about': { redirect: { to: '/institutions/gjs-gulu', statusCode: 301 } },
    '/institutions/scooby-katale': { redirect: { to: '/institutions/sisu-kampala', statusCode: 301 } },
    '/institutions/scooby-gulu': { redirect: { to: '/institutions/sisu-gulu', statusCode: 301 } },
    '/institutions/iepp': { redirect: { to: '/international-pathway', statusCode: 301 } },
    // Prerender the landing pages so crawlers get static HTML.
    ...Object.fromEntries(institutionPaths.map((p) => [p, { prerender: true }])),
    // --- Admin: keep out of the index, render client-side only ---
    '/admin/**': { robots: false, ssr: false },
  },
})
