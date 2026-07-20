<template>
  <div v-if="inst" class="page">
    <section class="inst-hero">
      <img :src="inst.image" :alt="`${inst.name} students`" class="inst-hero__img" />
      <div class="inst-hero__overlay"></div>
      <div class="container inst-hero__content">
        <img :src="inst.logo" :alt="`${inst.name} logo`" class="inst-hero__logo" />
        <p class="inst-hero__eyebrow">{{ inst.type }}</p>
        <h1 class="inst-hero__title">{{ inst.name }}</h1>
      </div>
    </section>

    <section class="section">
      <div class="container container--narrow">
        <p class="inst-body__lede">{{ inst.description }}</p>
        <p class="inst-body__text">
          As a member of the <NuxtLink to="/about">Gombe Education Service</NuxtLink> network,
          {{ inst.name }} shares the GES vision of academic excellence, character formation and
          global readiness. Admissions, term dates and school news are published on the school's
          own website.
        </p>

        <div class="inst-body__actions">
          <a :href="inst.externalUrl" target="_blank" rel="noopener" class="btn btn--primary">
            Visit Official Website
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
          <NuxtLink to="/academic-calendar" class="btn btn--outline">Academic Calendar</NuxtLink>
        </div>

        <div class="inst-body__network">
          <h2 class="inst-body__network-title">More GES Institutions</h2>
          <ul class="inst-body__network-list">
            <li v-for="other in otherInstitutions" :key="other.slug">
              <NuxtLink :to="other.path">{{ other.name }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { institutions, siteConfig } from '~/seo.config'

const route = useRoute()
const slug = route.params.slug as string

const inst = institutions.find(
  (i) => i.slug === slug && i.path === `/institutions/${i.slug}`
)

if (!inst) {
  throw createError({ statusCode: 404, statusMessage: 'Institution not found', fatal: true })
}

const otherInstitutions = institutions.filter((i) => i.slug !== slug)

// Each sub-organization gets its own graph node (explicit @id — without one,
// nuxt-schema-org merges resolved nodes into the site identity and corrupts it),
// tied to GES via parentOrganization.
useSchemaOrg([
  {
    '@type': 'EducationalOrganization',
    '@id': `${siteConfig.url}${inst.path}#organization`,
    name: inst.name,
    alternateName: inst.alt,
    description: inst.description,
    url: siteConfig.url + inst.path,
    sameAs: [inst.externalUrl],
    image: siteConfig.url + encodeURI(inst.image),
    parentOrganization: { '@id': `${siteConfig.url}/#identity` },
  },
])
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: #fff;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.container--narrow {
  max-width: 820px;
}

.inst-hero {
  position: relative;
  min-height: 420px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}
.inst-hero__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.inst-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(10, 10, 10, 0.75) 0%, rgba(10, 10, 10, 0.25) 55%, rgba(10, 10, 10, 0.1) 100%);
}
.inst-hero__content {
  position: relative;
  width: 100%;
  padding-top: 7rem;
  padding-bottom: 2.5rem;
}
.inst-hero__logo {
  height: 72px;
  width: auto;
  margin-bottom: 1rem;
  background: #fff;
  border-radius: 10px;
  padding: 0.4rem;
}
.inst-hero__eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--rescue-yellow, #FFC72C);
  margin-bottom: 0.5rem;
}
.inst-hero__title {
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 800;
  color: #fff;
  line-height: 1.15;
  max-width: 800px;
}

.section {
  padding: 3.5rem 0 4.5rem;
}
.inst-body__lede {
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--rescue-dark, #1A1A1A);
  font-weight: 500;
  margin-bottom: 1.25rem;
}
.inst-body__text {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--rescue-charcoal, #3D3D3D);
  margin-bottom: 2rem;
}
.inst-body__text a {
  color: var(--rescue-dark, #1A1A1A);
  font-weight: 700;
  text-decoration: underline;
  text-decoration-color: var(--rescue-yellow, #FFC72C);
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
}

.inst-body__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-bottom: 3rem;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 700;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
}
.btn--primary {
  background: var(--rescue-yellow, #FFC72C);
  color: var(--rescue-dark, #1A1A1A);
}
.btn--primary:hover {
  background: var(--rescue-dark, #1A1A1A);
  color: #fff;
}
.btn--outline {
  border: 2px solid var(--rescue-dark, #1A1A1A);
  color: var(--rescue-dark, #1A1A1A);
}
.btn--outline:hover {
  background: var(--rescue-dark, #1A1A1A);
  color: #fff;
}

.inst-body__network {
  border-top: 3px solid var(--rescue-yellow, #FFC72C);
  padding-top: 1.75rem;
}
.inst-body__network-title {
  font-size: 1.05rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--rescue-dark, #1A1A1A);
  margin-bottom: 1rem;
}
.inst-body__network-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.inst-body__network-list a {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--rescue-charcoal, #3D3D3D);
  text-decoration: none;
}
.inst-body__network-list a:hover {
  text-decoration: underline;
  text-decoration-color: var(--rescue-yellow, #FFC72C);
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
}
</style>
