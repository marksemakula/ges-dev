<template>
  <div class="page">
    <section class="page-hero">
      <div class="container animate-fade-in">
        <p class="page-hero__eyebrow">School Management</p>
        <h1 class="page-hero__title">Our Leadership</h1>
        <p class="page-hero__subtitle">Meet the visionary leaders who drive excellence, governance, and academic innovation across all Gombe Education Services institutions.</p>
      </div>
    </section>

    <!-- Management Team Section -->
    <section class="section">
      <div class="container">
        <div class="section-header animate-fade-in">
          <p class="section-eyebrow">Governance & Executive Direction</p>
          <h2 class="section-title">Management Team</h2>
        </div>
        
        <div class="leaders-grid">
          <div v-for="leader in managementTeam" :key="leader.name" class="leader-card ges-card-hover animate-slide-up">
            <div class="leader-card__photo">
              <img :src="leader.image" :alt="leader.name" />
            </div>
            <div class="leader-card__body">
              <h3 class="leader-card__name">{{ leader.name }}</h3>
              <p class="leader-card__position">{{ leader.position }}</p>
              <p class="leader-card__bio">{{ leader.bio }}</p>
              <div class="leader-card__links">
                <a :href="`mailto:${leader.email}`" class="leader-link" aria-label="Email">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M22 7l-10 7L2 7"/>
                  </svg>
                </a>
                <a :href="leader.linkedin" target="_blank" rel="noopener noreferrer" class="leader-link" aria-label="LinkedIn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const managementTeam = [
  {
    name: 'Owek. Kyewalabye Male David',
    position: 'GES Managing Director',
    bio: 'Owek. Kyewalabye Male David serves as the Managing Director of Gombe Education Services. An experienced institutional administrator and strategist, he coordinates operations, developmental planning, and strategic partnerships across all institutions within the GES portfolio, ensuring absolute operational efficiency and sustainable growth.',
    image: '/images/Owek. Kyewalabye David Male.png',
    email: 'david.male@ges.ac.ug',
    linkedin: 'https://linkedin.com/in/david-kiwalabye-male'
  },
  {
    name: 'Mrs. Harriet Mulyanti',
    position: 'GES Executive Chairperson',
    bio: 'Mrs. Harriet Mulyanti is the founding pillar and Executive Chairperson of Gombe Education Services. With over three decades of visionary educational leadership, she has guided the establishment and growth of the GES network, dedicating her career to raising the benchmarks of school governance, student character development, and academic excellence in the region.',
    image: '/images/GES Executive Chairperson Mrs Harriet Mulyanti.JPG',
    email: 'harriet.mulyanti@ges.ac.ug',
    linkedin: 'https://linkedin.com/in/harriet-mulyanti'
  },
  {
    name: 'Daniella Nakayenga',
    position: 'GES Rector',
    bio: 'Daniella Nakayenga is the Rector of Gombe Education Services. Combining extensive pedagogical expertise with modern administrative strategies, she oversees curriculum implementation, standardisation of teaching practices, and the integration of international education models across all GES schools.',
    image: '/images/GES Rector - Daniella Nakayenga.jpeg',
    email: 'daniella.nakayenga@ges.ac.ug',
    linkedin: 'https://linkedin.com/in/daniellanakayenga'
  }
];
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: var(--ges-cream);
}
.page-hero {
  background: var(--ges-navy);
  padding: 8rem 0 5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.page-hero::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--ges-gold);
}
.page-hero__eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--ges-gold);
  margin-bottom: 0.75rem;
}
.page-hero__title {
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}
.page-hero__subtitle {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.7;
}
.section {
  padding: 6rem 0;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.section-header {
  text-align: center;
  max-width: 560px;
  margin: 0 auto 4rem;
}
.section-eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--ges-burgundy);
  margin-bottom: 0.5rem;
}
.section-title {
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 700;
  color: var(--ges-navy);
  line-height: 1.2;
}

.leaders-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  max-width: 1280px;
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .leaders-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .leader-card:first-child {
    grid-column: span 2;
  }
  .leader-card:first-child .leader-card__photo {
    width: 320px;
  }
  .leader-card:first-child .leader-card__bio {
    max-width: 720px;
  }
}

@media (min-width: 1200px) {
  .leader-card:first-child .leader-card__photo {
    width: 360px;
  }
}

.leader-card {
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(197, 165, 114, 0.2);
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 20px rgba(10, 35, 66, 0.04);
}

@media (min-width: 640px) {
  .leader-card {
    flex-direction: row;
    align-items: stretch;
  }
}

.leader-card__photo {
  height: 280px;
  width: 100%;
  overflow: hidden;
  background: var(--ges-cream);
  position: relative;
  flex-shrink: 0;
}

@media (min-width: 640px) {
  .leader-card__photo {
    width: 200px;
    height: auto;
    min-height: 100%;
  }
}

@media (min-width: 1200px) {
  .leader-card__photo {
    width: 230px;
  }
}

.leader-card__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 0.5s ease;
}

.leader-card:hover .leader-card__photo img {
  transform: scale(1.04);
}

.leader-card__body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
}

@media (min-width: 768px) {
  .leader-card__body {
    padding: 2rem;
  }
}
.leader-card__name {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--ges-navy);
  margin-bottom: 0.35rem;
}
.leader-card__position {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--ges-burgundy);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.85rem;
}
.leader-card__bio {
  font-size: 0.88rem;
  color: var(--ges-slate);
  line-height: 1.65;
  margin-bottom: 1.25rem;
}
.leader-card__links {
  display: flex;
  gap: 0.75rem;
}
.leader-link {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: var(--ges-cream);
  color: var(--ges-navy);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background 0.25s, color 0.25s, transform 0.2s;
}
.leader-link:hover {
  background: var(--ges-burgundy);
  color: #fff;
  transform: translateY(-2px);
}
</style>
