<template>
  <div class="min-h-screen bg-white font-sans">
    <AppHeader />
    <main class="ges-error">
      <div class="ges-error__inner">
        <p class="ges-error__code">Error {{ error.statusCode }}</p>
        <h1 class="ges-error__title">
          {{ error.statusCode === 404 ? 'Page not found' : 'Something went wrong' }}
        </h1>
        <p class="ges-error__text">
          {{
            error.statusCode === 404
              ? 'The page you are looking for may have moved or no longer exists. Try one of these instead:'
              : 'An unexpected error occurred. Please try again, or head back to a useful page below:'
          }}
        </p>
        <nav class="ges-error__links" aria-label="Helpful links">
          <NuxtLink to="/" class="ges-error__link">Home</NuxtLink>
          <NuxtLink to="/about" class="ges-error__link">About GES</NuxtLink>
          <NuxtLink to="/blog" class="ges-error__link">News &amp; Blog</NuxtLink>
          <NuxtLink to="/academic-calendar" class="ges-error__link">Academic Calendar</NuxtLink>
          <NuxtLink to="/international-pathway" class="ges-error__link">International Pathway</NuxtLink>
        </nav>
        <button class="ges-error__cta" @click="handleError">Back to homepage</button>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/layout/Header.vue'
import AppFooter from '~/components/layout/Footer.vue'

defineProps<{ error: { statusCode: number; statusMessage?: string } }>()

// Keep error pages out of the index, but let crawlers follow links away.
useSeoMeta({
  title: 'Page Not Found – Gombe Education Service',
  robots: 'noindex, follow',
})

const handleError = () => clearError({ redirect: '/' })
</script>

<style scoped>
.ges-error {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 4rem 1.5rem;
}
.ges-error__inner {
  max-width: 640px;
  text-align: center;
}
.ges-error__code {
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #7a0001;
  margin-bottom: 0.75rem;
}
.ges-error__title {
  font-size: 2.25rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 1rem;
}
.ges-error__text {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.75rem;
}
.ges-error__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;
  justify-content: center;
  margin-bottom: 2rem;
}
.ges-error__link {
  font-weight: 700;
  font-size: 0.9rem;
  color: #1a1a1a;
  text-decoration: underline;
  text-decoration-color: #ffc72c;
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
}
.ges-error__cta {
  display: inline-block;
  padding: 0.75rem 1.75rem;
  background: #ffc72c;
  color: #1a1a1a;
  font-weight: 800;
  border: none;
  cursor: pointer;
  border-radius: 2px;
}
.ges-error__cta:hover {
  background: #e6b219;
}
</style>
