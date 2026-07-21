<template>
  <div class="page">
    <!-- Page Header -->
    <section class="page-hero">
      <div class="container">
        <span class="page-hero__float" aria-hidden="true">About Us</span>
        <p class="page-hero__eyebrow">Who We Are</p>
        <h1 class="page-hero__title">Gombe Education Service</h1>
        <p class="page-hero__subtitle">A consortium of nine institutions providing quality holistic education from Kindergarten to Tertiary level across Uganda.</p>
      </div>
    </section>

    <!-- GES Profile Overview -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <p class="section-eyebrow">Consortium Overview</p>
          <h2 class="section-title">The Profile</h2>
          <img src="/images/GES_.png" alt="GES" class="profile-banner" />
        </div>
        <p class="intro-text">Gombe Education Service is a consortium of nine institutions providing education from Kindergarten to Tertiary level and beyond: Scooby Doo International School - Uganda (Katale and Gulu) offering both National & International curricular, Gombe Junior School-Kikajjo which is entirely Day, Gombe Junior School which is purely boarding, Gombe Junior School - Gulu, St. Andrew Kaggwa Gombe High School – Kawaala, St Andrew Kaggwa Gombe high school- Bujuuko, Gombe Institute of Business Science & Technology (GIBST) and the International Education Pathways Program (IPP).</p>
        <p class="intro-text">All GES Schools embrace and subscribe to the same Vision and Mission.</p>
        
        <div class="institutions-grid">
          <div v-for="(inst, i) in institutions" :key="inst.name" class="institution-card">
            <div class="inst-tile" :class="i % 2 === 0 ? 'inst-tile--a' : 'inst-tile--b'">
              <img :src="inst.image" :alt="`${inst.name} campus`" class="inst-tile__img" loading="lazy" />
              <div class="inst-tile__scrim" aria-hidden="true"></div>
              <div class="inst-tile__content">
                <span class="inst-tile__tag">{{ inst.tag }}</span>
                <h3 class="inst-tile__title">{{ inst.name }}</h3>
              </div>
            </div>
            <div class="institution-card__body">
              <p>{{ inst.description }}</p>
              <div class="institution-contact">
                <p v-if="inst.phone"><strong>📱 Phone:</strong> {{ inst.phone }}</p>
                <p v-if="inst.email"><strong>✉️ Email:</strong> <a :href="`mailto:${inst.email}`">{{ inst.email }}</a></p>
                <p v-if="inst.website"><strong>🌐 Website:</strong> <a :href="inst.websiteUrl" target="_blank" rel="noopener">{{ inst.website }}</a></p>
                <p v-if="inst.location"><strong>📍 Location:</strong> {{ inst.location }}</p>
              </div>
            </div>
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
            <h2 class="mv-card__title">Vision</h2>
            <p class="mv-card__text">At the helm of producing competent, responsible, self-reliant and flexible citizens.</p>
          </div>
          <div class="mv-card">
            <div class="mv-card__icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <h2 class="mv-card__title">Mission</h2>
            <p class="mv-card__text">To provide quality holistic education that fosters creativity, critical thinking and collaboration to produce competent global citizens.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Governance & Learning Environment -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <p class="section-eyebrow">Our Foundation</p>
          <h2 class="section-title">How We Operate</h2>
        </div>
        <div class="approach-grid">
          <div class="approach-card">
            <h3>Leadership & Governance</h3>
            <p>The different school administration work under the guidance of SMC, Board of Governors & governing council respectively. The schools are also supported by different consultants in their area of specialization at the GES level.</p>
          </div>
          <div class="approach-card">
            <h3>Curriculum & Learning Approach</h3>
            <p>The schools offer MOE approved curriculum with a learner centred approach and ICT integration in smaller class sizes for effective academics, peer learning, personal growth, advanced co-curricular activities.</p>
          </div>
          <div class="approach-card">
            <h3>Learning Environment</h3>
            <p>We provide ambiance conducive enough for effective learning and client satisfaction.</p>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup lang="ts">
const institutions = [
  { name: 'Scooby Doo International School Uganda', tag: 'Early Years', image: '/images/sisu-katale-triptych.jpeg', description: 'This is an early years independent international school offering both National & International curricular and brings together learners from different parts of Uganda from the age of 2-6years. Started in 2013.', phone: '0708 800 005 / 0708 800 006', website: 'scoobydoointernationalschooluganda.ac.ug', websiteUrl: 'https://www.scoobydoointernationalschool.ac.ug', location: 'Kikajjo-off Seguku Katale Road' },
  { name: 'ScoobyDoo International School Uganda - Gulu', tag: 'International School', image: '/images/hero-triptych-gulu.jpeg', description: 'Bringing the same National & International curricular to Northern Uganda, ScoobyDoo International School Uganda - Gulu extends quality early years and international education beyond Kampala.', website: 'gulu.scoobydoointernational.ac.ug', websiteUrl: 'https://gulu.scoobydoointernational.ac.ug/', location: 'Gulu, Northern Uganda' },
  { name: 'Gombe Junior School', tag: 'Primary', image: '/images/IMG_1707.JPG', description: 'This school is one of our pioneer schools that started in 2013 as day & boarding. It academically excelled with 100% first grades in 2017 & 2022 emerging best in Wakiso District and ranked number 4 & 5 in Uganda respectively. Due to its growth, the day parents sought customized services which saw the creation of an independent day section.', phone: '0708 800 001 / 0708 800 003', email: 'info@gombejuniorschool.ac.ug', website: 'gombejuniorschool.ac.ug', websiteUrl: 'https://www.gombejuniorschool.ac.ug', location: 'Kikajjo-Nateete-Nakawuka Road' },
  { name: 'Gombe Junior School Kikajjo', tag: 'Primary', image: '/images/IMG_1707.JPG', description: 'GJS-K was opened in 2019 after the separation of day scholars from Boarders to create for them their own school which is entirely day. The school has brought about transformation in the community around its location.', phone: '0708 800 002 / 0708 800 004', email: 'info@gombejuniorschool.ac.ug', website: 'gombejuniorschool.ac.ug', websiteUrl: 'https://www.gombejuniorschool.ac.ug', location: 'Kikajjo-Nateete-Nakawuka Road' },
  { name: 'Gombe Junior School - Gulu', tag: 'Primary', image: '/images/GJS Gulu class.png', description: 'Gombe Junior School - Gulu extends the GES tradition of strong foundational education to Northern Uganda as a UNEB licensed primary school.', email: 'info@gombejuniorschool.ac.ug', website: 'gulu.gombejuniorschool.ac.ug', websiteUrl: 'https://gulu.gombejuniorschool.ac.ug/', location: 'Gulu, Northern Uganda' },
  { name: 'St. Andrew Kaggwa Gombe High School - Kawaala', tag: 'Secondary', image: '/images/IMG_9718.JPG', description: "St. Andrew Kaggwa Gombe School Kawaala is both 'O' and 'A' level mixed Day and Boarding school, that started in June 2016.", phone: '0708 700 001 / 0708 700 002', email: 'info@gombehighschool.ac.ug', website: 'gombehighschool.ac.ug', websiteUrl: 'https://www.gombehighschool.ac.ug', location: 'Kawaala off kasube junction' },
  { name: 'St. Andrew Kaggwa Gombe High School - Bujuuko', tag: 'Secondary', image: '/images/slideshow/_MG_6907.JPG', description: "This is one of our new campuses that started in October 2022 and has brought about a paradigm shift from Kings College Bujuuko to St Andrew Kaggwa Gombe High School Bujuuko Campus. The school is O' and 'A' level mixed, both day & boarding school and meets the middle income Parents aspiration for better education services at an affordable fees.", phone: '0752 578 254 / 0784 329 051', email: 'info@gombehighschool.ac.ug', website: 'gombehighschool.ac.ug', websiteUrl: 'https://www.gombehighschool.ac.ug', location: 'Bujuuko Trading centre 20 miles from Kampala along Mityana Road' },
  { name: 'Gombe Institute of Business Science & Technology (GIBST)', tag: 'Tertiary', image: '/images/JIMMY SEKASI.JPG', description: 'In a deliberate plan to build, a hybrid mid-level training college GES took over Jimmy Sekasi Business Institute to intentionally impart contemporary skills to young men and women of all walks of life, to enhance their potential in being more relevant to their families and communities and be direct partakers in their career destiny. It offers a unique blend of post-secondary school education and training in short courses, Certificates & Diplomas in Pastry and Baking, Barista skills, Mixology, Cookery skills, Basic Cake making and Decoration, ICT courses, Culinary arts, and Diploma courses in Fashion and Design, and Hairdressing and Beauty Therapy respectively.', phone: '0756 241 530 / 0772 472 570', email: 'info@gibst.ac.ug', website: 'gibst.ac.ug', websiteUrl: 'https://gibst.ac.ug', location: '4925 Mbogo Rd, Kampala' },
  { name: 'International Education Pathways Program', tag: 'International Programme', image: '/images/ieppheader.png', description: 'The International Education Pathways Program (IPP) connects Ugandan students to structured, affordable pathways into quality universities across Canada, the United Kingdom, the United States, Germany, Australia, Cyprus, and the United Arab Emirates.', website: 'ipp.ges.ac.ug', websiteUrl: 'https://ipp.ges.ac.ug/' },
];

const milestones = [
  { year: '2013', event: 'GES Founded', detail: 'Gombe Education Service established its first institution.' },
  { year: '2005', event: 'Network Expansion', detail: 'Opened two additional campuses to meet growing demand.' },
  { year: '2015', event: 'International Partnerships', detail: 'Secured partnerships with UNESCO and University of Cambridge.' },
  { year: '2020', event: 'Digital Transformation', detail: 'Launched digital learning platforms across all institutions.' },
  { year: '2024', event: 'GIBST Launched', detail: 'Gombe Institute of Business Science & Technology (GIBST) opened for higher education.' },
];
</script>

<style scoped>
.page { min-height: 100vh; }
.page-hero {
  background: #1A1A1A;
  padding: 8.5rem 0 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.page-hero__float {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
  white-space: nowrap;
  font-size: clamp(3.25rem, 7.5vw, 5.5rem);
  font-weight: 800;
  text-transform: uppercase;
  color: #f2f2f2;
  opacity: 0.08;
  letter-spacing: 0.02em;
  pointer-events: none;
  z-index: 0;
}
.page-hero__eyebrow {
  position: relative;
  z-index: 1;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #FFC72C;
  margin-bottom: 0.75rem;
}
.page-hero__title {
  position: relative;
  z-index: 1;
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}
.page-hero__subtitle {
  position: relative;
  z-index: 1;
  font-size: 1rem;
  color: rgba(255,255,255,0.7);
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.7;
}

.section { padding: 5rem 0; }
.section--muted { background: #F5F5F5; }
.container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }

.section-header { text-align: center; max-width: 660px; margin: 0 auto 3.5rem; }
.section-eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #E6B219; margin-bottom: 0.5rem; }
.section-title { font-size: clamp(1.75rem, 3.5vw, 2.5rem); font-weight: 700; color: #1A1A1A; line-height: 1.2; margin: 0; }
.profile-banner { display: block; max-width: 320px; width: 100%; height: auto; margin: 1.5rem auto 0; }
.intro-text { font-size: 1rem; color: #555555; line-height: 1.8; margin-bottom: 1.5rem; }

/* Institutions Grid */
.institutions-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
}
@media (min-width: 768px) { .institutions-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .institutions-grid { grid-template-columns: repeat(3, 1fr); } }
.institution-card {
  background: #fff;
  border-radius: 0;
  border: 1px solid #E0E0E0;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
}
.institution-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(10,35,66,0.12);
  border-color: var(--ges-gold);
}
.institution-card__body {
  padding: 1.75rem 2rem 2rem;
}
.institution-card p { color: #555555; font-size: 0.95rem; line-height: 1.7; }

/* Institution tiles: full-bleed image, sharp edges, overlaid tag + headline */
.inst-tile {
  position: relative;
  display: block;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  border-radius: 0;
}
.inst-tile__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.2, 0.6, 0.3, 1);
}
.institution-card:hover .inst-tile__img {
  transform: scale(1.04);
}
.inst-tile__content {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 1.25rem;
}

/* Variant A: bottom scrim, yellow tag, headline pinned to the bottom (case-study style) */
.inst-tile--a .inst-tile__scrim {
  position: absolute;
  inset: auto 0 0 0;
  height: 60%;
  background: linear-gradient(to top, var(--rescue-dark, #1A1A1A) 20%, rgba(26, 26, 26, 0.7) 55%, transparent 100%);
  z-index: 1;
  pointer-events: none;
}
.inst-tile--a .inst-tile__content {
  bottom: 0;
  top: auto;
}
.inst-tile--a .inst-tile__tag {
  display: inline-block;
  background: var(--rescue-yellow, #FFC72C);
  color: var(--rescue-dark, #1A1A1A);
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.35em 0.7em;
  margin-bottom: 0.6rem;
}
.inst-tile--a .inst-tile__title {
  color: #fff;
  font-size: clamp(1rem, 1.6vw, 1.25rem);
  font-weight: 800;
  text-transform: uppercase;
  line-height: 1.25;
  letter-spacing: -0.01em;
  margin: 0;
}

/* Variant B: white tag pinned to the top, headline highlighted in deep-blue blocks (opinion style) */
.inst-tile--b .inst-tile__content {
  top: 0;
  bottom: auto;
}
.inst-tile--b .inst-tile__tag {
  display: block;
  width: max-content;
  background: #fff;
  color: #163A5C;
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.4em 0.8em;
  margin-bottom: 0.5rem;
}
.inst-tile--b .inst-tile__title {
  display: inline;
  color: #fff;
  background: #163A5C;
  box-shadow: 0.3em 0 0 #163A5C, -0.3em 0 0 #163A5C;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  font-size: clamp(1rem, 1.6vw, 1.25rem);
  font-weight: 800;
  line-height: 1.6;
  margin: 0;
}

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
  border: 1px solid #E0E0E0;
}
.mv-card__icon {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: rgba(10,35,66,0.06);
  color: #1A1A1A;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.125rem;
}
.mv-card__title { font-size: 1.25rem; font-weight: 700; color: #1A1A1A; margin-bottom: 0.75rem; }
.mv-card__text { font-size: 0.925rem; color: #555555; line-height: 1.7; }

/* History */
.history-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}
@media (min-width: 1024px) { .history-grid { grid-template-columns: 1fr 1fr; align-items: start; } }
.history-text { font-size: 0.95rem; color: #555555; line-height: 1.7; }

/* Timeline */
.timeline { display: flex; flex-direction: column; gap: 0; }
.timeline__item {
  display: flex;
  gap: 1.25rem;
  padding: 1.125rem 0;
  border-bottom: 1px solid #E0E0E0;
}
.timeline__item:last-child { border-bottom: none; }
.timeline__year {
  flex-shrink: 0;
  font-size: 0.85rem;
  font-weight: 700;
  color: #E6B219;
  width: 48px;
  padding-top: 2px;
}
.timeline__event { font-size: 0.925rem; font-weight: 700; color: #1A1A1A; margin-bottom: 0.2rem; }
.timeline__detail { font-size: 0.82rem; color: #555555; }

.institution-contact {
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px dashed #E0E0E0;
}
.institution-contact p {
  margin: 0.45rem 0;
  font-size: 0.875rem !important;
  color: #4e5973;
}
.institution-contact strong {
  color: #1A1A1A;
}
.institution-contact a {
  color: #E6B219;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}
.institution-contact a:hover {
  color: #6b0f1a;
  text-decoration: underline;
}

/* Approach Grid & Card styles */
.approach-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
  margin-top: 1rem;
}
@media (min-width: 768px) {
  .approach-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.approach-card {
  background: #fff;
  border-radius: 14px;
  padding: 2.25rem 2rem;
  border: 1px solid #E0E0E0;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.approach-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--ges-gold);
  opacity: 0.85;
}
.approach-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(10,35,66,0.1);
  border-color: var(--ges-gold);
}
.approach-card h3 {
  color: #1A1A1A;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.875rem;
  line-height: 1.45;
}
.approach-card p {
  color: #555555;
  font-size: 0.95rem;
  line-height: 1.7;
}
</style>
