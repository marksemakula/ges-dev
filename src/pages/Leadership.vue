<template>
  <div class="page">
    <section class="page-hero">
      <div class="container">
        <p class="page-hero__eyebrow">School Management</p>
        <h1 class="page-hero__title">Our Leadership</h1>
        <p class="page-hero__subtitle">Meet the visionary leaders who drive excellence and innovation across all GES institutions.</p>
      </div>
    </section>

    <!-- Executive Team -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <p class="section-eyebrow">Executive Team</p>
          <h2 class="section-title">Senior Leadership</h2>
        </div>
        <div class="leaders-grid">
          <div v-for="leader in leaders" :key="leader.name" class="leader-card">
            <div class="leader-card__photo">
              <img :src="leader.image" :alt="leader.name" />
            </div>
            <div class="leader-card__body">
              <h3 class="leader-card__name">{{ leader.name }}</h3>
              <p class="leader-card__position">{{ leader.position }}</p>
              <p class="leader-card__bio">{{ leader.bio }}</p>
              <p class="leader-card__edu">{{ leader.education }}</p>
              <div class="leader-card__links">
                <a :href="`mailto:${leader.email}`" class="leader-link" aria-label="Email">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
                </a>
                <a :href="leader.linkedin" target="_blank" rel="noopener noreferrer" class="leader-link" aria-label="LinkedIn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Board -->
    <section class="section section--muted">
      <div class="container">
        <div class="section-header">
          <p class="section-eyebrow">Governance</p>
          <h2 class="section-title">Board of Directors</h2>
        </div>
        <div class="board-grid">
          <div v-for="member in boardMembers" :key="member.name" class="board-card">
            <img :src="member.image" :alt="member.name" class="board-card__photo" />
            <h4 class="board-card__name">{{ member.name }}</h4>
            <p class="board-card__position">{{ member.position }}</p>
            <p class="board-card__bg">{{ member.background }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const leaders = [
  { name: 'Daniella Nakayenga', position: 'Rector, Gombe Education Services', bio: 'With over 20 years in educational leadership, Daniella Nakayenga has transformed GES into a premier educational institution.', education: 'PhD in Educational Leadership, Harvard University', image: '/images/73e7f5be-efe4-4779-a0dd-ec96e761e11c.jpg', email: 'daniella.nakayenga@ges.ac.ug', linkedin: 'https://linkedin.com/in/daniellanakayenga' },
  { name: 'Prof. John Kiprotich', position: 'Academic Director', bio: 'Prof. Kiprotich oversees academic excellence across all GES institutions with a focus on innovative curriculum development.', education: 'PhD in Curriculum Development, University of Cambridge', image: '/images/megan-escobosa-photography-_FMi4LTEe6g-unsplash.jpg', email: 'john.kiprotich@ges.ac.ug', linkedin: 'https://linkedin.com/in/johnkiprotich' },
  { name: 'Ms. Grace Nakato', position: 'Head of Student Affairs', bio: 'Ms. Nakato ensures student welfare and holistic development across all GES institutions.', education: 'Masters in Student Affairs, Makerere University', image: '/images/bright-kwabena-kyere-rxB0L6nrP5M-unsplash.jpg', email: 'grace.nakato@ges.ac.ug', linkedin: 'https://linkedin.com/in/gracenakato' },
  { name: 'Mr. Michael Ochieng', position: 'Director of Operations', bio: 'Mr. Ochieng manages operations and infrastructure development across the GES network.', education: 'MBA in Operations Management, IUIU', image: '/images/annie-spratt-V-XM4kkWpng-unsplash.jpg', email: 'michael.ochieng@ges.ac.ug', linkedin: 'https://linkedin.com/in/michaelochieng' },
];

const boardMembers = [
  { name: 'Hon. Dr. Mary Kitutu', position: 'Chairperson, Board of Directors', background: 'Former Minister of Education, 25+ years in educational policy', image: '/images/heather-suggitt-AjB5qK2rnbU-unsplash.jpg' },
  { name: 'Prof. James Tumusiime', position: 'Vice Chairperson', background: 'Distinguished Professor of Mathematics, Makerere University', image: '/images/topsphere-media-ojBd8yB5KDM-unsplash.jpg' },
  { name: 'Ms. Patricia Ssemwanga', position: 'Board Member', background: 'CEO, Leading Financial Institution & Education Advocate', image: '/images/happy pupil.jpg' },
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

.leaders-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
@media (min-width: 768px) { .leaders-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1280px) { .leaders-grid { grid-template-columns: repeat(4, 1fr); } }

.leader-card { border: 1px solid #e5e9f0; border-radius: 12px; overflow: hidden; background: #fff; }
.leader-card__photo { height: 220px; overflow: hidden; background: #f4f7fb; }
.leader-card__photo img { width: 100%; height: 100%; object-fit: cover; }
.leader-card__body { padding: 1.25rem; }
.leader-card__name { font-size: 1rem; font-weight: 700; color: #0A2342; margin-bottom: 0.2rem; }
.leader-card__position { font-size: 0.78rem; font-weight: 600; color: #00C7B7; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.65rem; }
.leader-card__bio { font-size: 0.84rem; color: #6C757D; line-height: 1.6; margin-bottom: 0.65rem; }
.leader-card__edu { font-size: 0.78rem; color: #9ca3af; font-style: italic; margin-bottom: 0.875rem; }
.leader-card__links { display: flex; gap: 0.5rem; }
.leader-link { width: 30px; height: 30px; border-radius: 6px; background: #f4f7fb; color: #6C757D; display: flex; align-items: center; justify-content: center; text-decoration: none; transition: background 0.15s, color 0.15s; }
.leader-link:hover { background: #0A2342; color: #fff; }

.board-grid { display: grid; grid-template-columns: 1fr; gap: 1.25rem; }
@media (min-width: 640px) { .board-grid { grid-template-columns: repeat(3, 1fr); } }
.board-card { background: #fff; border-radius: 12px; padding: 1.5rem; border: 1px solid #e5e9f0; text-align: center; }
.board-card__photo { width: 72px; height: 72px; border-radius: 50%; object-fit: cover; margin: 0 auto 1rem; display: block; }
.board-card__name { font-size: 1rem; font-weight: 700; color: #0A2342; margin-bottom: 0.2rem; }
.board-card__position { font-size: 0.78rem; font-weight: 600; color: #00C7B7; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.6rem; }
.board-card__bg { font-size: 0.83rem; color: #6C757D; line-height: 1.55; }
</style>
