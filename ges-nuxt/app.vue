<template>
  <div class="min-h-screen bg-white font-sans">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <ScrollToTop />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { routeSeo, defaultSeo, siteConfig, institutions, socials } from '~/seo.config'

const route = useRoute()

// ---- Per-route meta (title, description, Open Graph, Twitter) ----
const seo = computed(() => routeSeo[route.path] ?? defaultSeo)
const absImage = computed(() => siteConfig.url + (seo.value.ogImage ?? '/logo.png'))
const absUrl = computed(() => siteConfig.url + route.path)

useSeoMeta({
  title: () => seo.value.title,
  description: () => seo.value.description,
  ogType: 'website',
  ogSiteName: siteConfig.name,
  ogTitle: () => seo.value.title,
  ogDescription: () => seo.value.description,
  ogUrl: () => absUrl.value,
  ogImage: () => absImage.value,
  twitterCard: 'summary_large_image',
  twitterTitle: () => seo.value.title,
  twitterDescription: () => seo.value.description,
  twitterImage: () => absImage.value,
})

// Self-referencing absolute canonical on every route.
useHead({
  link: [{ rel: 'canonical', href: () => absUrl.value }],
})

// ---- Structured data (JSON-LD) ----
// Organization knows every school in the network, so brand searches for any
// institution resolve back to GES. WebSite enables the brand sitelinks block.
useSchemaOrg([
  defineOrganization({
    '@type': 'EducationalOrganization',
    name: siteConfig.name,
    alternateName: ['GES', 'Gombe', 'Gombe Education Services'],
    url: siteConfig.url,
    logo: siteConfig.url + '/logo.png',
    foundingDate: '2013',
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.telephone,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'UG',
      addressRegion: 'Central Region',
      addressLocality: 'Gombe',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'admissions',
      email: siteConfig.email,
      telephone: siteConfig.telephone,
      areaServed: 'UG',
      availableLanguage: ['en'],
    },
    sameAs: socials,
    // Ties brand-adjacent name searches (leadership names) back to GES as an entity.
    founder: [
      {
        '@type': 'Person',
        name: 'Rosalind Tanayita Kyewalabye',
        alternateName: ['Mrs. Rosalind Tanayita Kyewalabye'],
        jobTitle: 'Co-Founder',
      },
    ],
    employee: [
      {
        '@type': 'Person',
        name: 'Owek. Kyewalabye Male David',
        alternateName: ['Owekitiibwa Kyewalabye Male', 'Kyewalabye Male', 'Owekitiibwa Kyewalabye Male David'],
        jobTitle: 'Managing Director',
      },
    ],
    subOrganization: institutions.map((i) => ({
      '@type': 'EducationalOrganization',
      name: i.name,
      alternateName: i.alt,
      url: siteConfig.url + i.path,
      sameAs: [i.externalUrl],
      parentOrganization: { '@id': siteConfig.url + '/#identity' },
    })),
  }),
  defineWebSite({ name: siteConfig.name }),
])

// Per-route breadcrumb (Home > Page). Rendered server-side for each route.
const crumbItems = computed(() => {
  const items = [{ name: 'Home', item: siteConfig.url + '/' }]
  if (route.path !== '/') {
    items.push({ name: seo.value.breadcrumb ?? seo.value.title, item: absUrl.value })
  }
  return items
})
useSchemaOrg([defineBreadcrumb({ itemListElement: crumbItems.value })])
</script>

<style>
/* Page transition (ported from the original App.vue) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
