<template>
  <div class="page">
    <section class="page-hero">
      <div class="container">
        <p class="page-hero__eyebrow">GES International</p>
        <h1 class="page-hero__title">International Education<br />Pathway Programme</h1>
        <p class="page-hero__subtitle">Opening doors to world-class universities and international career opportunities for GES students.</p>
        <div class="hero-actions">
          <a href="https://ipp-vert.vercel.app/" target="_blank" rel="noopener noreferrer" class="btn btn--teal">Visit IPP Website →</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="ipp-grid">
          <div>
            <p class="section-eyebrow">About the Programme</p>
            <h2 class="section-title">Your Gateway to Global Education</h2>
            <p class="ipp-text">The International Education Pathway Programme (IPP) is GES's flagship initiative connecting Ugandan students to top universities worldwide. Through strategic partnerships with institutions in the UK, USA, Canada, and Australia, we provide a structured pathway from secondary school to higher education abroad.</p>
            <p class="ipp-text" style="margin-top:1rem;">Our dedicated counsellors support students through every step - from choosing the right university to visa applications and pre-departure preparation.</p>
          </div>
          <div class="ipp-features">
            <div v-for="feature in features" :key="feature.title" class="ipp-feature">
              <div class="ipp-feature__icon" v-html="feature.svg"></div>
              <div>
                <h4 class="ipp-feature__title">{{ feature.title }}</h4>
                <p class="ipp-feature__desc">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const features = [
  { title: 'University Placement', description: 'Placement support for top universities in the UK, USA, Canada, and Australia.', svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>' },
  { title: 'Scholarship Guidance', description: 'Expert advice on available scholarships and financial aid opportunities.', svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>' },
  { title: 'English Preparation', description: 'IELTS and TOEFL preparation classes led by certified instructors.', svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>' },
  { title: 'Visa & Travel Support', description: 'Complete assistance with visa applications and pre-departure orientation.', svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>' },
];
</script>

<style scoped>
.page { min-height: 100vh; }
.page-hero { background: #1A1A1A; padding: 7rem 0 5rem; text-align: center; }
.page-hero__eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #FFC72C; margin-bottom: 0.75rem; }
.page-hero__title { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 700; color: #fff; margin-bottom: 1rem; line-height: 1.15; }
.page-hero__subtitle { font-size: 1rem; color: rgba(255,255,255,0.7); max-width: 560px; margin: 0 auto 2rem; line-height: 1.7; }
.hero-actions { display: flex; justify-content: center; }
.section { padding: 5rem 0; }
.container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
.section-eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #E6B219; margin-bottom: 0.5rem; }
.section-title { font-size: clamp(1.75rem, 3.5vw, 2.5rem); font-weight: 700; color: #1A1A1A; line-height: 1.2; margin-bottom: 1rem; }
.ipp-text { font-size: 0.95rem; color: #555555; line-height: 1.7; }

.ipp-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; }
@media (min-width: 1024px) { .ipp-grid { grid-template-columns: 1fr 1fr; align-items: start; } }
.ipp-features { display: flex; flex-direction: column; gap: 1.25rem; }
.ipp-feature { display: flex; gap: 1rem; align-items: flex-start; background: #F5F5F5; border-radius: 10px; padding: 1.125rem; border: 1px solid #E0E0E0; }
.ipp-feature__icon { flex-shrink: 0; width: 40px; height: 40px; border-radius: 8px; background: rgba(0,199,183,0.08); color: #E6B219; display: flex; align-items: center; justify-content: center; }
.ipp-feature__title { font-size: 0.9rem; font-weight: 700; color: #1A1A1A; margin-bottom: 0.2rem; }
.ipp-feature__desc { font-size: 0.82rem; color: #555555; line-height: 1.55; }

.btn { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.7rem 1.5rem; border-radius: 8px; font-size: 0.9rem; font-weight: 600; text-decoration: none; transition: all 0.2s; font-family: inherit; cursor: pointer; border: 2px solid transparent; }
.btn--teal { background: #E6B219; color: #1A1A1A; border-color: #E6B219; }
.btn--teal:hover { background: #D9A50F; border-color: #D9A50F; }
</style>
