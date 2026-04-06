<template>
  <div class="page">
    <section class="page-hero">
      <div class="container">
        <p class="page-hero__eyebrow">GES Mentorship</p>
        <h1 class="page-hero__title">Mentorship Portal</h1>
        <p class="page-hero__subtitle">Connect with experienced mentors who are committed to guiding the next generation of leaders.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="mentors-grid">
          <div v-for="mentor in mentors" :key="mentor.name" class="mentor-card">
            <img :src="mentor.image" :alt="mentor.name" class="mentor-card__photo" />
            <div class="mentor-card__body">
              <h3 class="mentor-card__name">{{ mentor.name }}</h3>
              <p class="mentor-card__role">{{ mentor.role }}</p>
              <div class="mentor-card__tags">
                <span v-for="tag in mentor.expertise" :key="tag" class="expertise-tag">{{ tag }}</span>
              </div>
              <p class="mentor-card__bio">{{ mentor.bio }}</p>
              <button class="btn btn--primary btn--sm">Request Mentorship</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--muted">
      <div class="container">
        <div class="apply-card">
          <h2 class="apply-card__title">Become a Mentor</h2>
          <p class="apply-card__desc">Share your expertise and help shape the future of GES students. We welcome professionals from all sectors.</p>
          <a href="mailto:mentorship@ges.ac.ug" class="btn btn--primary">Apply as Mentor</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const mentors = [
  { name: 'Dr. Anne Musoke', role: 'Medical Doctor & Health Educator', image: '/images/heather-suggitt-AjB5qK2rnbU-unsplash.jpg', expertise: ['Medicine', 'Public Health', 'Research'], bio: 'With 15 years in medicine and public health, Dr. Musoke guides students interested in healthcare careers and scientific research.' },
  { name: 'Mr. Robert Ssali', role: 'Technology Entrepreneur', image: '/images/topsphere-media-ojBd8yB5KDM-unsplash.jpg', expertise: ['Technology', 'Entrepreneurship', 'Innovation'], bio: 'Founder of two successful tech startups, Robert helps students develop entrepreneurial mindsets and technology skills.' },
  { name: 'Mrs. Carol Atuhaire', role: 'International Finance Specialist', image: '/images/bright-kwabena-kyere-rxB0L6nrP5M-unsplash.jpg', expertise: ['Finance', 'Economics', 'International Trade'], bio: 'With experience at the World Bank and IMF, Carol provides insights into global finance and economics.' },
  { name: 'Prof. David Kizito', role: 'Academic & Researcher', image: '/images/annie-spratt-V-XM4kkWpng-unsplash.jpg', expertise: ['Research', 'Academia', 'Leadership'], bio: 'A distinguished professor guiding students through academic pathways and research methodologies.' },
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

.mentors-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
@media (min-width: 640px) { .mentors-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .mentors-grid { grid-template-columns: repeat(4, 1fr); } }
.mentor-card { border: 1px solid #e5e9f0; border-radius: 12px; overflow: hidden; background: #fff; }
.mentor-card__photo { width: 100%; height: 200px; object-fit: cover; background: #f4f7fb; }
.mentor-card__body { padding: 1.25rem; display: flex; flex-direction: column; gap: 0.625rem; }
.mentor-card__name { font-size: 1rem; font-weight: 700; color: #0A2342; }
.mentor-card__role { font-size: 0.78rem; font-weight: 600; color: #00C7B7; text-transform: uppercase; letter-spacing: 0.06em; }
.mentor-card__tags { display: flex; flex-wrap: wrap; gap: 0.35rem; }
.expertise-tag { font-size: 0.7rem; padding: 0.18rem 0.55rem; border-radius: 20px; background: #f4f7fb; color: #6C757D; font-weight: 500; }
.mentor-card__bio { font-size: 0.84rem; color: #6C757D; line-height: 1.6; }

.apply-card { background: #0A2342; border-radius: 16px; padding: 3rem 2rem; text-align: center; max-width: 680px; margin: 0 auto; }
.apply-card__title { font-size: 1.75rem; font-weight: 700; color: #fff; margin-bottom: 0.75rem; }
.apply-card__desc { font-size: 0.95rem; color: rgba(255,255,255,0.65); line-height: 1.7; margin-bottom: 1.75rem; }

.btn { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.7rem 1.5rem; border-radius: 8px; font-size: 0.9rem; font-weight: 600; text-decoration: none; transition: all 0.2s; font-family: inherit; cursor: pointer; border: 2px solid transparent; }
.btn--primary { background: #00C7B7; color: #0A2342; border-color: #00C7B7; }
.btn--primary:hover { background: #00b5a7; border-color: #00b5a7; }
.btn--sm { padding: 0.5rem 1.1rem; font-size: 0.82rem; }
</style>
