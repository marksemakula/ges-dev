<template>
  <div class="inst-page">
    <!-- Hero -->
    <section class="inst-hero" :style="{ background: `linear-gradient(135deg, ${accentDark} 0%, ${accent} 100%)` }">
      <div class="inst-hero__overlay"></div>
      <nav class="inst-nav container">
        <RouterLink to="/" class="inst-nav__back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
          Back to GES
        </RouterLink>
        <div class="inst-nav__brand">
          <img v-if="logo" :src="logo" :alt="name" class="inst-nav__logo" />
          <span class="inst-nav__name">{{ name }}</span>
        </div>
      </nav>
      <div class="inst-hero__content container">
        <p class="inst-hero__type">{{ type }}</p>
        <h1 class="inst-hero__title">{{ name }}</h1>
        <p class="inst-hero__tagline">{{ tagline }}</p>
        <div class="inst-hero__actions">
          <a :href="`mailto:${email}`" class="btn btn--white">Contact Us</a>
          <RouterLink to="/about" class="btn btn--outline-white">About GES</RouterLink>
        </div>
      </div>
    </section>

    <!-- Brand Logo -->
    <section class="brand-logo-section">
      <div class="container brand-logo-container">
        <img src="/images/sai-brand-logo.png" alt="SAI Brand Logo" class="brand-logo-img" />
      </div>
    </section>

    <!-- Quick Info -->
    <section class="section quick-info">
      <div class="container">
        <div class="qinfo-grid">
          <div v-for="info in quickInfo" :key="info.label" class="qinfo-item">
            <div class="qinfo-icon" v-html="info.svg"></div>
            <div>
              <p class="qinfo-label">{{ info.label }}</p>
              <p class="qinfo-value">{{ info.value }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Overview -->
    <section class="section section--muted">
      <div class="container">
        <div class="overview-grid">
          <div>
            <p class="section-eyebrow">Overview</p>
            <h2 class="section-title">About {{ shortName }}</h2>
            <div class="overview-text">
              <slot name="overview">
                <p>{{ description }}</p>
              </slot>
            </div>
          </div>
          <div class="highlights">
            <div v-for="h in highlights" :key="h.title" class="highlight-card">
              <div class="highlight-card__icon" v-html="h.svg"></div>
              <h4 class="highlight-card__title">{{ h.title }}</h4>
              <p class="highlight-card__desc">{{ h.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Programmes -->
    <section v-if="programmes.length" class="section">
      <div class="container">
        <div class="section-header">
          <p class="section-eyebrow">Academics</p>
          <h2 class="section-title">Programmes Offered</h2>
        </div>
        <div class="prog-grid">
          <div v-for="prog in programmes" :key="prog.name" class="prog-card">
            <span class="prog-card__level">{{ prog.level }}</span>
            <h3 class="prog-card__name">{{ prog.name }}</h3>
            <p class="prog-card__desc">{{ prog.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="inst-cta">
      <div class="container inst-cta__inner">
        <div>
          <h2 class="inst-cta__title">Interested in Joining {{ shortName }}?</h2>
          <p class="inst-cta__sub">Contact us to find out more about admissions and enrolment.</p>
        </div>
        <div class="inst-cta__actions">
          <a :href="`mailto:${email}`" class="btn btn--white">Enquire Now</a>
          <RouterLink to="/mentorship" class="btn btn--outline-white">Mentorship</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface QuickInfo { label: string; value: string; svg: string; }
interface Highlight { title: string; description: string; svg: string; }
interface Programme { name: string; level: string; description: string; }

withDefaults(defineProps<{
  name: string;
  shortName?: string;
  type: string;
  tagline: string;
  description: string;
  logo?: string;
  email?: string;
  accent?: string;
  accentDark?: string;
  quickInfo?: QuickInfo[];
  highlights?: Highlight[];
  programmes?: Programme[];
}>(), {
  shortName: '',
  logo: '',
  email: 'info@ges.ac.ug',
  accent: '#E6B219',
  accentDark: '#1A1A1A',
  quickInfo: () => [],
  highlights: () => [],
  programmes: () => [],
});
</script>

<style scoped>
.inst-page { min-height: 100vh; }

/* Hero */
.inst-hero { position: relative; padding: 0 0 5rem; overflow: hidden; }
.inst-hero__overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.35); pointer-events: none; }
.inst-nav { position: relative; z-index: 10; display: flex; align-items: center; justify-content: space-between; padding: 1.25rem 1.5rem; max-width: 1280px; margin: 0 auto; }
.inst-nav__back { display: flex; align-items: center; gap: 0.375rem; font-size: 0.85rem; font-weight: 600; color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.15s; }
.inst-nav__back:hover { color: #fff; }
.inst-nav__brand { display: flex; align-items: center; gap: 0.625rem; }
.inst-nav__logo { height: 36px; width: auto; }
.inst-nav__name { font-size: 0.85rem; font-weight: 600; color: #fff; opacity: 0.85; }
.inst-hero__content { position: relative; z-index: 10; max-width: 1280px; margin: 0 auto; padding: 3rem 1.5rem 0; }
.inst-hero__type { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.75); margin-bottom: 0.75rem; }
.inst-hero__title { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 700; color: #fff; line-height: 1.15; margin-bottom: 0.875rem; }
.inst-hero__tagline { font-size: 1rem; color: rgba(255,255,255,0.8); line-height: 1.65; max-width: 520px; margin-bottom: 2rem; }
.inst-hero__actions { display: flex; gap: 0.875rem; flex-wrap: wrap; }

/* Brand Logo */
.brand-logo-section { background: #fff; padding: 2.5rem 0; border-bottom: 1px solid #E0E0E0; }
.brand-logo-container { display: flex; align-items: center; justify-content: center; }
.brand-logo-img { max-height: 100px; width: auto; object-fit: contain; transition: opacity 0.2s ease; }
.brand-logo-img:hover { opacity: 0.85; }

/* Quick info bar */
.quick-info { padding: 2.5rem 0; border-bottom: 1px solid #E0E0E0; }
.qinfo-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
@media (min-width: 768px) { .qinfo-grid { grid-template-columns: repeat(4, 1fr); } }
.qinfo-item { display: flex; align-items: center; gap: 0.875rem; }
.qinfo-icon { flex-shrink: 0; width: 40px; height: 40px; border-radius: 8px; background: rgba(0,199,183,0.08); color: #E6B219; display: flex; align-items: center; justify-content: center; }
.qinfo-label { font-size: 0.72rem; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600; }
.qinfo-value { font-size: 0.9rem; font-weight: 700; color: #1A1A1A; }

/* Shared */
.section { padding: 5rem 0; }
.section--muted { background: #F5F5F5; }
.container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; width: 100%; }
.section-header { text-align: center; max-width: 560px; margin: 0 auto 3rem; }
.section-eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #E6B219; margin-bottom: 0.5rem; }
.section-title { font-size: clamp(1.75rem, 3.5vw, 2.5rem); font-weight: 700; color: #1A1A1A; line-height: 1.2; }

/* Overview */
.overview-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; }
@media (min-width: 1024px) { .overview-grid { grid-template-columns: 1fr 1fr; align-items: start; } }
.overview-text p { font-size: 0.95rem; color: #555555; line-height: 1.7; margin-bottom: 0.875rem; }
.highlights { display: flex; flex-direction: column; gap: 1rem; }
.highlight-card { display: flex; gap: 1rem; align-items: flex-start; background: #fff; border-radius: 10px; padding: 1.125rem; border: 1px solid #E0E0E0; }
.highlight-card__icon { flex-shrink: 0; width: 40px; height: 40px; border-radius: 8px; background: rgba(0,199,183,0.08); color: #E6B219; display: flex; align-items: center; justify-content: center; }
.highlight-card__title { font-size: 0.9rem; font-weight: 700; color: #1A1A1A; margin-bottom: 0.2rem; }
.highlight-card__desc { font-size: 0.82rem; color: #555555; line-height: 1.55; }

/* Programmes */
.prog-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
@media (min-width: 640px) { .prog-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .prog-grid { grid-template-columns: repeat(3, 1fr); } }
.prog-card { background: #fff; border: 1px solid #E0E0E0; border-radius: 12px; padding: 1.375rem; }
.prog-card__level { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #E6B219; display: block; margin-bottom: 0.3rem; }
.prog-card__name { font-size: 0.975rem; font-weight: 700; color: #1A1A1A; margin-bottom: 0.4rem; }
.prog-card__desc { font-size: 0.845rem; color: #555555; line-height: 1.6; }

/* CTA */
.inst-cta { background: #1A1A1A; padding: 4rem 0; }
.inst-cta__inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 2rem; }
.inst-cta__title { font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 700; color: #fff; margin-bottom: 0.5rem; }
.inst-cta__sub { font-size: 0.95rem; color: rgba(255,255,255,0.65); }
.inst-cta__actions { display: flex; gap: 0.875rem; flex-wrap: wrap; }

/* Buttons */
.btn { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.7rem 1.5rem; border-radius: 8px; font-size: 0.9rem; font-weight: 600; text-decoration: none; transition: all 0.2s; font-family: inherit; cursor: pointer; border: 2px solid transparent; }
.btn--white { background: #fff; color: #1A1A1A; border-color: #fff; }
.btn--white:hover { background: #e8f0ff; }
.btn--outline-white { background: transparent; color: #fff; border-color: rgba(255,255,255,0.5); }
.btn--outline-white:hover { border-color: #fff; }
</style>
