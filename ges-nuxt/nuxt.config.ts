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
      'Gombe Education Service (GES) has delivered quality education in Uganda since 1995 through Gombe High School, Gombe Junior School, ScoobyDoo International and JSBI.',
    defaultLocale: 'en',
  },

  robots: {
    disallow: ['/admin'],
  },

  sitemap: {
    exclude: ['/admin/**'],
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
    // --- Institution sub-sites: preserve existing 301 redirects ---
    '/institutions/sakghs-kawaala': { redirect: { to: 'https://sakghs-kawaala.vercel.app/', statusCode: 301 } },
    '/institutions/sakghs-bujuuko': { redirect: { to: 'https://sakghs-bujuuko.vercel.app/', statusCode: 301 } },
    '/institutions/gjs-kikajjo': { redirect: { to: 'https://gjs-kikajjo.vercel.app/', statusCode: 301 } },
    '/institutions/gjs-boarding': { redirect: { to: 'https://gjs-boarding.vercel.app/', statusCode: 301 } },
    '/institutions/gjs-gulu': { redirect: { to: 'https://gjs-gulu.vercel.app/', statusCode: 301 } },
    '/institutions/gjs-about': { redirect: { to: 'https://gjs-gulu.vercel.app/', statusCode: 301 } },
    '/institutions/scooby-katale': { redirect: { to: 'https://sisu-katale.vercel.app/', statusCode: 301 } },
    '/institutions/scooby-gulu': { redirect: { to: 'https://sisu-gulu.vercel.app/', statusCode: 301 } },
    // --- Admin: keep out of the index, render client-side only ---
    '/admin/**': { robots: false, ssr: false },
  },
})
