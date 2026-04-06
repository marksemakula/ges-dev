<template>
  <div class="page">
    <section class="page-hero">
      <div class="container">
        <p class="page-hero__eyebrow">Global Collaboration</p>
        <h1 class="page-hero__title">Our Partnerships</h1>
        <p class="page-hero__subtitle">Strategic alliances with world-class organisations that enrich GES education and open global doors for our students.</p>
      </div>
    </section>

    <!-- Partnership types -->
    <section class="section">
      <div class="container">
        <div class="ptype-grid">
          <div v-for="pt in partnershipTypes" :key="pt.title" class="ptype-card">
            <div class="ptype-card__icon" v-html="pt.svg"></div>
            <div class="ptype-card__count">{{ pt.count }}</div>
            <h3 class="ptype-card__title">{{ pt.title }}</h3>
            <p class="ptype-card__desc">{{ pt.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners list -->
    <section class="section section--muted">
      <div class="container">
        <div class="section-header">
          <p class="section-eyebrow">Our Partners</p>
          <h2 class="section-title">Global Collaborators</h2>
        </div>
        <div class="partners-grid">
          <div v-for="partner in partners" :key="partner.name" class="partner-card">
            <div class="partner-card__header">
              <span class="partner-card__type">{{ partner.type }}</span>
              <span class="partner-card__year">Since {{ partner.established }}</span>
            </div>
            <h3 class="partner-card__name">{{ partner.name }}</h3>
            <p class="partner-card__desc">{{ partner.description }}</p>
            <div class="partner-card__benefits">
              <span v-for="benefit in partner.benefits" :key="benefit" class="benefit-tag">{{ benefit }}</span>
            </div>
            <a :href="partner.website" target="_blank" rel="noopener noreferrer" class="partner-card__link">
              Visit Website →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
      <div class="container">
        <div class="partner-cta">
          <h2 class="partner-cta__title">Interested in Partnering with GES?</h2>
          <p class="partner-cta__sub">We welcome collaborations with institutions and organisations that share our commitment to educational excellence.</p>
          <a href="mailto:partnerships@ges.ac.ug" class="btn btn--primary">Contact Us</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const partnershipTypes = [
  { title: 'International Collaborations', count: '15+', description: 'Partnerships with global educational institutions and organisations.', svg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>' },
  { title: 'Accreditation Bodies', count: '8+', description: 'Recognised by leading educational accreditation organisations.', svg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>' },
  { title: 'Exchange Programmes', count: '25+', description: 'Student and teacher exchange programmes with partner institutions.', svg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>' },
  { title: 'Curriculum Partners', count: '12+', description: 'Collaborative curriculum development with educational experts.', svg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>' },
];

const partners = [
  { name: 'University of Cambridge', type: 'Academic Partnership', description: 'Collaboration on curriculum development and teacher training programmes.', benefits: ['Curriculum Development', 'Teacher Exchange', 'Student Programmes'], established: '2018', website: 'https://cambridge.org' },
  { name: 'UNESCO', type: 'Educational Development', description: 'Supporting educational development initiatives and quality assurance programmes.', benefits: ['Quality Assurance', 'Professional Development', 'Research'], established: '2020', website: 'https://unesco.org' },
  { name: 'British Council', type: 'Cultural Exchange', description: 'English language programmes and cultural exchange initiatives.', benefits: ['Language Programmes', 'Cultural Exchange', 'Professional Development'], established: '2019', website: 'https://britishcouncil.org' },
  { name: 'Microsoft Education', type: 'Technology Partnership', description: 'Digital transformation and technology integration in education.', benefits: ['Digital Tools', 'Teacher Training', 'Student Certification'], established: '2021', website: 'https://microsoft.com/education' },
  { name: 'World Bank Education', type: 'Development Partnership', description: 'Supporting educational infrastructure and capacity building initiatives.', benefits: ['Infrastructure', 'Capacity Building', 'Research Support'], established: '2017', website: 'https://worldbank.org/education' },
  { name: 'Aga Khan Foundation', type: 'Educational Excellence', description: 'Promoting educational excellence and community development programmes.', benefits: ['Community Development', 'Scholarships', 'Leadership Training'], established: '2016', website: 'https://akdn.org' },
];
</script>

<style scoped>
.page { min-height: 100vh; }
.page-hero { background: #0A2342; padding: 7rem 0 4rem; text-align: center; }
.page-hero__eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #00C7B7; margin-bottom: 0.75rem; }
.page-hero__title { font-size: clamp(2.25rem, 5vw, 3.5rem); font-weight: 700; color: #fff; margin-bottom: 1rem; }
.page-hero__subtitle { font-size: 1rem; color: rgba(255,255,255,0.7); max-width: 560px; margin: 0 auto; line-height: 1.7; }
.section { padding: 5rem 0; }
.section--muted { background: #f8f9fc; }
.container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
.section-header { text-align: center; max-width: 560px; margin: 0 auto 3rem; }
.section-eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #00C7B7; margin-bottom: 0.5rem; }
.section-title { font-size: clamp(1.75rem, 3.5vw, 2.5rem); font-weight: 700; color: #0A2342; line-height: 1.2; }

.ptype-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
@media (min-width: 1024px) { .ptype-grid { grid-template-columns: repeat(4, 1fr); } }
.ptype-card { text-align: center; padding: 2rem 1.25rem; border: 1px solid #e5e9f0; border-radius: 12px; background: #fff; }
.ptype-card__icon { width: 48px; height: 48px; border-radius: 10px; background: rgba(0,199,183,0.08); color: #00C7B7; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.875rem; }
.ptype-card__count { font-size: 2rem; font-weight: 700; color: #0A2342; line-height: 1; margin-bottom: 0.3rem; }
.ptype-card__title { font-size: 0.9rem; font-weight: 700; color: #0A2342; margin-bottom: 0.4rem; }
.ptype-card__desc { font-size: 0.82rem; color: #6C757D; line-height: 1.55; }

.partners-grid { display: grid; grid-template-columns: 1fr; gap: 1.25rem; }
@media (min-width: 768px) { .partners-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1280px) { .partners-grid { grid-template-columns: repeat(3, 1fr); } }
.partner-card { background: #fff; border: 1px solid #e5e9f0; border-radius: 12px; padding: 1.5rem; display: flex; flex-direction: column; gap: 0.625rem; }
.partner-card__header { display: flex; justify-content: space-between; align-items: center; }
.partner-card__type { font-size: 0.7rem; font-weight: 600; letter-spacing: 0.09em; text-transform: uppercase; color: #00C7B7; }
.partner-card__year { font-size: 0.75rem; color: #9ca3af; }
.partner-card__name { font-size: 1.1rem; font-weight: 700; color: #0A2342; }
.partner-card__desc { font-size: 0.875rem; color: #6C757D; line-height: 1.6; }
.partner-card__benefits { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.benefit-tag { font-size: 0.72rem; padding: 0.2rem 0.6rem; border-radius: 20px; background: #f4f7fb; color: #6C757D; font-weight: 500; }
.partner-card__link { font-size: 0.82rem; font-weight: 600; color: #00C7B7; text-decoration: none; margin-top: auto; transition: color 0.15s; }
.partner-card__link:hover { color: #0A2342; }

.partner-cta { background: #0A2342; border-radius: 16px; padding: 3.5rem 2rem; text-align: center; }
.partner-cta__title { font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 700; color: #fff; margin-bottom: 0.75rem; }
.partner-cta__sub { font-size: 0.95rem; color: rgba(255,255,255,0.65); margin-bottom: 2rem; line-height: 1.7; max-width: 500px; margin-left: auto; margin-right: auto; }

.btn { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.7rem 1.5rem; border-radius: 8px; font-size: 0.9rem; font-weight: 600; text-decoration: none; transition: all 0.2s; font-family: inherit; cursor: pointer; border: 2px solid transparent; }
.btn--primary { background: #00C7B7; color: #0A2342; border-color: #00C7B7; }
.btn--primary:hover { background: #00b5a7; border-color: #00b5a7; }
</style>
