<template>
  <div class="page">
    <!-- Page Header -->
    <section class="page-hero">
      <div class="container">
        <p class="page-hero__eyebrow">Who We Are</p>
        <h1 class="page-hero__title">About GES</h1>
        <p class="page-hero__subtitle">Gombe Education Service has been at the forefront of educational excellence for over 25 years, shaping minds and building futures across Uganda and beyond.</p>
      </div>
    </section>

    <!-- Stats -->
    <section class="section stats-section">
      <div class="container">
        <div class="stats-grid">
          <div v-for="stat in stats" :key="stat.label" class="stat-card">
            <div class="stat-card__icon" v-html="stat.svg"></div>
            <div class="stat-card__value">{{ stat.value }}</div>
            <div class="stat-card__label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="section section--muted">
      <div class="container">
        <div class="mv-grid">
          <div class="mv-card">
            <div class="mv-card__icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/></svg>
            </div>
            <h2 class="mv-card__title">Our Mission</h2>
            <p class="mv-card__text">To provide world-class education that empowers students with knowledge, skills, and values necessary for success in a rapidly changing global society. We are committed to fostering critical thinking, creativity, and character development in every student.</p>
          </div>
          <div class="mv-card">
            <div class="mv-card__icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <h2 class="mv-card__title">Our Vision</h2>
            <p class="mv-card__text">To be the leading educational institution in East Africa, recognised globally for producing graduates who are intellectually capable, morally grounded, and equipped to lead transformative change in their communities and the world.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <p class="section-eyebrow">What We Stand For</p>
          <h2 class="section-title">Our Core Values</h2>
        </div>
        <div class="values-grid">
          <div v-for="value in values" :key="value.title" class="value-card">
            <div class="value-card__icon" v-html="value.svg"></div>
            <h3 class="value-card__title">{{ value.title }}</h3>
            <p class="value-card__desc">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- History -->
    <section class="section section--muted">
      <div class="container history-grid">
        <div>
          <p class="section-eyebrow">Our Story</p>
          <h2 class="section-title">25+ Years of Educational Excellence</h2>
          <p class="history-text">Founded in 1995, Gombe Education Service began with a single institution and a bold vision: to provide Ugandan students with education that rivals the world's best. Over the decades, we have grown into a network of seven institutions, each renowned for academic excellence and holistic development.</p>
          <p class="history-text" style="margin-top:1rem;">Our journey has been marked by continuous innovation — from curriculum reform to digital integration — ensuring that GES graduates are prepared not just for examinations, but for life.</p>
          <RouterLink to="/leadership" class="btn btn--primary" style="margin-top:1.75rem;display:inline-flex;">Meet Our Leadership</RouterLink>
        </div>
        <div class="timeline">
          <div v-for="milestone in milestones" :key="milestone.year" class="timeline__item">
            <div class="timeline__year">{{ milestone.year }}</div>
            <div class="timeline__content">
              <h4 class="timeline__event">{{ milestone.event }}</h4>
              <p class="timeline__detail">{{ milestone.detail }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { value: '2,500+', label: 'Students Enrolled', svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' },
  { value: '150+', label: 'Awards Received', svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>' },
  { value: '25+', label: 'Programmes Offered', svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>' },
  { value: '15+', label: 'Countries Represented', svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>' },
];

const values = [
  { title: 'Excellence', description: 'We strive for excellence in all aspects of education, from academics to character development.', svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>' },
  { title: 'Integrity', description: 'We uphold the highest standards of honesty and ethical behaviour in all our interactions.', svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
  { title: 'Community', description: 'We foster a strong sense of community where everyone feels valued and supported.', svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' },
  { title: 'Innovation', description: 'We embrace continuous improvement to stay at the forefront of educational excellence.', svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>' },
];

const milestones = [
  { year: '1995', event: 'GES Founded', detail: 'Gombe Education Service established its first institution.' },
  { year: '2005', event: 'Network Expansion', detail: 'Opened two additional campuses to meet growing demand.' },
  { year: '2015', event: 'International Partnerships', detail: 'Secured partnerships with UNESCO and University of Cambridge.' },
  { year: '2020', event: 'Digital Transformation', detail: 'Launched digital learning platforms across all institutions.' },
  { year: '2024', event: 'JSBI Launched', detail: 'Jimmy Sekasi Business Institute opened for higher education.' },
];
</script>

<style scoped>
.page { min-height: 100vh; }
.page-hero {
  background: #0A2342;
  padding: 7rem 0 4rem;
  text-align: center;
}
.page-hero__eyebrow {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #00C7B7;
  margin-bottom: 0.75rem;
}
.page-hero__title {
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}
.page-hero__subtitle {
  font-size: 1rem;
  color: rgba(255,255,255,0.7);
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.7;
}

.section { padding: 5rem 0; }
.section--muted { background: #f8f9fc; }
.container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }

.section-header { text-align: center; max-width: 560px; margin: 0 auto 3rem; }
.section-eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #00C7B7; margin-bottom: 0.5rem; }
.section-title { font-size: clamp(1.75rem, 3.5vw, 2.5rem); font-weight: 700; color: #0A2342; line-height: 1.2; }

/* Stats */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}
@media (min-width: 768px) { .stats-grid { grid-template-columns: repeat(4, 1fr); } }
.stat-card {
  text-align: center;
  padding: 2rem 1rem;
  border: 1px solid #e5e9f0;
  border-radius: 12px;
  background: #fff;
}
.stat-card__icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(0,199,183,0.08);
  color: #00C7B7;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0.875rem;
}
.stat-card__value { font-size: 2rem; font-weight: 700; color: #0A2342; line-height: 1; }
.stat-card__label { font-size: 0.8rem; color: #6C757D; margin-top: 0.35rem; }

/* Mission / Vision */
.mv-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 768px) { .mv-grid { grid-template-columns: repeat(2, 1fr); } }
.mv-card {
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid #e5e9f0;
}
.mv-card__icon {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: rgba(10,35,66,0.06);
  color: #0A2342;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.125rem;
}
.mv-card__title { font-size: 1.25rem; font-weight: 700; color: #0A2342; margin-bottom: 0.75rem; }
.mv-card__text { font-size: 0.925rem; color: #6C757D; line-height: 1.7; }

/* Values */
.values-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}
@media (min-width: 1024px) { .values-grid { grid-template-columns: repeat(4, 1fr); } }
.value-card { padding: 1.5rem; border: 1px solid #e5e9f0; border-radius: 12px; background: #fff; }
.value-card__icon {
  width: 40px; height: 40px; border-radius: 8px;
  background: rgba(0,199,183,0.08); color: #00C7B7;
  display: flex; align-items: center; justify-content: center; margin-bottom: 0.875rem;
}
.value-card__title { font-size: 1rem; font-weight: 700; color: #0A2342; margin-bottom: 0.4rem; }
.value-card__desc { font-size: 0.85rem; color: #6C757D; line-height: 1.6; }

/* History */
.history-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}
@media (min-width: 1024px) { .history-grid { grid-template-columns: 1fr 1fr; align-items: start; } }
.history-text { font-size: 0.95rem; color: #6C757D; line-height: 1.7; }

/* Timeline */
.timeline { display: flex; flex-direction: column; gap: 0; }
.timeline__item {
  display: flex;
  gap: 1.25rem;
  padding: 1.125rem 0;
  border-bottom: 1px solid #e5e9f0;
}
.timeline__item:last-child { border-bottom: none; }
.timeline__year {
  flex-shrink: 0;
  font-size: 0.85rem;
  font-weight: 700;
  color: #00C7B7;
  width: 48px;
  padding-top: 2px;
}
.timeline__event { font-size: 0.925rem; font-weight: 700; color: #0A2342; margin-bottom: 0.2rem; }
.timeline__detail { font-size: 0.82rem; color: #6C757D; }

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  font-family: inherit;
  cursor: pointer;
  border: 2px solid transparent;
}
.btn--primary { background: #00C7B7; color: #0A2342; border-color: #00C7B7; }
.btn--primary:hover { background: #00b5a7; border-color: #00b5a7; }
</style>
