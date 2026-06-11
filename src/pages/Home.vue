<template>
  <div class="home">
    <!-- ── Hero split display (rescue.org rplc-hero-split-display) ── -->
    <section class="hero-split">
      <div class="hero-split__inner">
        <div class="hero-split__content">
          <img src="/logo.png" alt="Gombe Education Service" class="hero-split__logo" />
          <h1 class="hero-split__title">Shaping Leaders,<br />Building Futures</h1>
          <p class="hero-split__text">
            Gombe Education Service has provided world-class education since 1995 - fostering academic excellence, character, and global readiness across our network of institutions.
          </p>
          <div class="hero-split__actions">
            <RouterLink to="/about" class="btn-rescue btn-rescue--primary">
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </RouterLink>
            <RouterLink to="/about" class="btn-rescue btn-rescue--outline">Learn More</RouterLink>
          </div>
        </div>
        <div class="hero-split__media">
          <Transition v-for="(img, i) in slideshowImages" :key="img" name="hero-fade">
            <img v-show="i === slideIndex" :src="img" alt="Students of Gombe Education Service" class="hero-split__img" />
          </Transition>
          <div class="hero-split__dots">
            <button
              v-for="(_, i) in slideshowImages"
              :key="i"
              :class="['hero-split__dot', { 'is-active': i === slideIndex }]"
              :aria-label="`Slide ${i + 1}`"
              @click="goToSlide(i)"
            />
          </div>
        </div>
      </div>
      <div class="hero-split__recognised">
        <span class="hero-split__recognised-label">Recognised by</span>
        <div class="hero-split__recognised-logos">
          <img v-for="logo in recognisedBy" :key="logo.name" :src="logo.src" :alt="logo.name" :title="logo.name" />
        </div>
      </div>
    </section>

    <!-- ── Mission statement + impact (rescue.org rplc-infographic-standard) ── -->
    <section class="rpl-section">
      <div class="container-rpl">
        <div class="rpl-section-heading rpl-section-heading--center">
          <h2 class="rpl-section-heading__title">We nurture academic excellence, character and global readiness</h2>
          <p class="rpl-section-heading__intro">
            A consortium of institutions providing quality holistic education from Kindergarten to Tertiary level across Uganda - all embracing the same vision and mission.
          </p>
        </div>
      </div>
    </section>

    <!-- ── Leadership quote (rescue.org rplc-special / call-to-action-2) ── -->
    <section class="rpl-section">
      <div class="container-rpl">
        <div class="quote-cta">
          <div class="quote-cta__media">
            <img src="/images/Owek. Kyewalabye David Male.png" alt="Owek. Kyewalabye Male David" />
          </div>
          <div class="quote-cta__content">
            <blockquote class="quote-cta__text">
              "Our institutions are built on the conviction that every child deserves an education that nurtures their full potential - academically, morally, and as a citizen of the world."
            </blockquote>
            <div class="quote-cta__author">
              <strong>Owek. Kyewalabye Male David</strong>
              <span>Managing Director, Gombe Education Service</span>
            </div>
            <RouterLink to="/leadership" class="btn-rescue btn-rescue--primary quote-cta__btn">Meet Our Leadership</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Institutions (rescue.org rplc-image-link-boxes-1) ── -->
    <section class="rpl-section rpl-section--grey">
      <div class="container-rpl">
        <div class="rpl-section-heading">
          <h2 class="rpl-section-heading__title">Institutions Under GES</h2>
        </div>
        <ul class="inst-list">
          <li class="inst-list__item">
            <div class="teaser-hl">
              <a :href="institutions[0].url" :aria-label="institutions[0].name" class="teaser-hl__link">
                <div class="teaser-hl__media">
                  <img :src="institutions[0].image" :alt="`${institutions[0].name} students`" loading="lazy" />
                  <img :src="institutions[0].logo" :alt="`${institutions[0].name} logo`" class="teaser-badge" loading="lazy" />
                </div>
                <div class="teaser-hl__text">
                  <div class="teaser-slug">{{ institutions[0].type }}</div>
                  <h3 class="teaser-hl__title">{{ institutions[0].name }}</h3>
                  <div class="teaser-hl__summary">{{ institutions[0].description }}</div>
                  <div class="teaser-link teaser-link--inverse" role="link">Visit school</div>
                </div>
              </a>
            </div>
          </li>
          <li v-for="inst in institutions.slice(1)" :key="inst.path" class="inst-list__item">
            <div class="teaser-std">
              <a :href="inst.url" :aria-label="inst.name" class="teaser-std__link">
                <div class="teaser-std__media">
                  <img :src="inst.image" :alt="`${inst.name} students`" loading="lazy" />
                  <img :src="inst.logo" :alt="`${inst.name} logo`" class="teaser-badge" loading="lazy" />
                </div>
                <div class="teaser-std__text">
                  <div class="teaser-slug">{{ inst.type }}</div>
                  <div class="teaser-std__title">
                    <h3>{{ inst.name }}</h3>
                  </div>
                  <div class="teaser-std__cta">
                    <div class="teaser-link" role="link">Learn more</div>
                  </div>
                </div>
              </a>
            </div>
          </li>
        </ul>
        <div class="partners-marquee">
          <Vue3Marquee :duration="40" :pause-on-hover="true" :clone="true">
            <div v-for="logo in partnerLogos" :key="logo.name" class="partners-marquee__item" :title="logo.name">
              <img :src="logo.src" :alt="logo.name" class="partners-marquee__logo" />
            </div>
          </Vue3Marquee>
        </div>
      </div>
    </section>

    <!-- ── News and featured stories (rescue.org rplc-news-and-features) ── -->
    <section class="rpl-section rpl-section--grey">
      <div class="container-rpl">
        <div class="rpl-section-heading">
          <h2 class="rpl-section-heading__title">News and featured Articles</h2>
        </div>
        <div class="news-grid">
          <RouterLink to="/blog" class="news-highlight">
            <div class="news-highlight__media">
              <img :src="featuredPosts[0].image" :alt="featuredPosts[0].title" loading="lazy" />
            </div>
            <div class="news-highlight__body">
              <span class="rpl-slug">{{ featuredPosts[0].category }}</span>
              <h3 class="news-highlight__title">{{ featuredPosts[0].title }}</h3>
              <p class="news-highlight__excerpt">{{ featuredPosts[0].excerpt }}</p>
              <span class="rpl-link">Read more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </span>
            </div>
          </RouterLink>
          <div class="news-side">
            <RouterLink v-for="post in featuredPosts.slice(1)" :key="post.id" to="/blog" class="news-teaser">
              <div class="news-teaser__media">
                <img :src="post.image" :alt="post.title" loading="lazy" />
              </div>
              <div class="news-teaser__body">
                <span class="rpl-slug">{{ post.category }}</span>
                <h3 class="news-teaser__title">{{ post.title }}</h3>
                <span class="rpl-link">Read more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </span>
              </div>
            </RouterLink>
          </div>
        </div>
        <div class="news-more">
          <RouterLink to="/blog" class="rpl-link">See more news and stories
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ── Get involved (rescue.org rplc-image-link-boxes-1) ── -->
    <section class="rpl-section">
      <div class="container-rpl">
        <div class="rpl-section-heading">
          <h2 class="rpl-section-heading__title">Get involved</h2>
        </div>
        <div class="rpl-grid-3">
          <RouterLink v-for="item in involved" :key="item.path" :to="item.path" class="rpl-card">
            <div class="rpl-card__media">
              <img :src="item.image" :alt="item.title" loading="lazy" />
            </div>
            <div class="rpl-card__body">
              <h3 class="rpl-card__title">
                {{ item.title }}
                <svg class="rpl-card__arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </h3>
              <p class="rpl-card__desc">{{ item.desc }}</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ── CTA band (rescue.org rplc-call-to-action-5 / sticky footer style) ── -->
    <section class="cta-band">
      <div class="container-rpl cta-band__inner">
        <div>
          <h2 class="cta-band__title">Ready to Join the GES Family?</h2>
          <p class="cta-band__sub">Contact any of our institutions to begin the admissions process.</p>
        </div>
        <div class="cta-band__actions">
          <RouterLink to="/about" class="btn-rescue btn-rescue--dark">Get in Touch</RouterLink>
          <RouterLink to="/academic-calendar" class="btn-rescue btn-rescue--outline">View Calendar</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Vue3Marquee } from 'vue3-marquee';

/* ── Hero slideshow ── */
const slideshowImages = [
  '/images/slideshow/slideshow_1.jpg',
  '/images/slideshow/slideshow_2.jpg',
  '/images/slideshow/slideshow_3.jpg',
  '/images/slideshow/slideshow_4.jpg',
  '/images/slideshow/slideshow_5.jpg',
];
const slideIndex = ref(0);
let slideTimer: ReturnType<typeof setInterval> | null = null;

function startSlides() {
  if (slideTimer) clearInterval(slideTimer);
  slideTimer = setInterval(() => {
    slideIndex.value = (slideIndex.value + 1) % slideshowImages.length;
  }, 5000);
}
function goToSlide(i: number) {
  slideIndex.value = i;
  startSlides();
}
onMounted(startSlides);
onUnmounted(() => { if (slideTimer) clearInterval(slideTimer); });

/* ── Recognised by (hero strip) ── */
const recognisedBy = [
  { name: 'Ministry of Education', src: '/images/MoES1.png' },
  { name: 'UTB',                   src: '/images/UTB.png' },
  { name: 'Kingdom of Buganda',    src: '/images/Flag_of_Buganda.svg' },
  { name: 'Braemar College',       src: '/images/braemar.webp' },
  { name: 'KISU',                  src: '/images/KISU.png' },
];

/* ── Partners carousel ── */
const partnerLogos = [
  { name: 'Kingdom of Buganda',              src: '/images/Flag_of_Buganda.svg' },
  { name: 'Braemar College',                 src: '/images/braemar.webp' },
  { name: 'St. Andrew Kaggwa GHS',           src: '/images/Gombe High logo.png' },
  { name: 'Gombe Junior School',             src: '/images/Gombe Junior School logo.png' },
  { name: 'SISU',                            src: '/images/scooby-logo.png' },
  { name: 'Jimmy Sekasi Business Institute', src: '/images/Jimmy Ssekasi Business Institute Logo.png' },
  { name: 'KISU',                            src: '/images/KISU.png' },
  { name: 'Ministry of Education',           src: '/images/MoES1.png' },
  { name: 'UTB',                             src: '/images/UTB.png' },
];

/* ── Institutions ── */
const institutions = [
  { name: 'Jimmy Sekasi Business Institute', type: 'Vocational Institute', logo: '/images/Jimmy Ssekasi Business Institute Logo.png', image: '/images/JIMMY SEKASI.JPG', path: '/institutions/jsbi', url: '#', description: 'Equipping students with practical business, vocational, and hands-on skills.' },
  { name: 'St. Andrew Kaggwa Gombe High School - Kawaala', type: 'Secondary School', logo: '/images/Gombe High logo.png', image: '/images/IMG_9718.JPG', path: '/institutions/sakghs-kawaala', url: 'https://sakghs-kawaala.vercel.app/', description: 'Advanced secondary education with a focus on academic excellence.' },
  { name: 'St. Andrew Kaggwa Gombe High School - Bujuuko', type: 'Secondary School', logo: '/images/Gombe High logo.png', image: '/images/Gombe High School - Bujuuko.png', path: '/institutions/sakghs-bujuuko', url: 'https://sakghs-bujuuko.vercel.app/', description: 'Nurturing tomorrow\'s leaders through quality education.' },
  { name: 'Gombe Junior School - Kampala (Day & Boarding)', type: 'UNEB Licensed Primary School', logo: '/images/Gombe Junior School logo.png', image: '/images/IMG_1737.JPG', path: '/institutions/gjs-kampala', url: 'https://gjs-kikajjo.vercel.app/', description: 'Building strong foundations for lifelong learning.' },
  { name: 'Gombe Junior School - Gulu (Day)', type: 'UNEB Licensed Primary School', logo: '/images/Gombe Junior School logo.png', image: '/images/IMG_1685.JPG', path: '/institutions/gjs-gulu', url: 'https://gjs-gulu.vercel.app/', description: 'Extending foundational education excellence to Northern Uganda.' },
  { name: 'ScoobyDoo International School Uganda - Kampala', type: 'International School', logo: '/images/scooby-logo.png', image: '/images/26-08-2015-12-55-02_1.jpg', path: '/institutions/sisu-kampala', url: 'https://sisu-katale.vercel.app/', description: 'International curriculum preparing students for global success.' },
  { name: 'ScoobyDoo International School Uganda - Gulu', type: 'International School', logo: '/images/scooby-logo.png', image: '/images/26-08-2015-01-12-29_IMG_3773.jpg', path: '/institutions/sisu-gulu', url: 'https://sisu-gulu.vercel.app/', description: 'Bringing international education to Northern Uganda.' },
];

/* ── Featured posts (from GES Blog) ── */
const featuredPosts = [
  { id: '1', title: 'The Future of Education: Embracing Digital Learning', excerpt: 'Exploring how digital transformation is reshaping the educational landscape and preparing students for tomorrow\'s challenges.', category: 'Innovation', image: '/images/TD.jpg' },
  { id: '2', title: 'Building Character Through Education', excerpt: 'How GES integrates character development into our curriculum to nurture well-rounded individuals.', category: 'Character', image: '/images/15-09-2015-12-03-57_DSCN1414.jpg' },
  { id: '3', title: 'STEM Education Excellence at GES', excerpt: 'Discover how our STEM programmes are preparing students for careers in science, technology, engineering, and mathematics.', category: 'STEM', image: '/images/IMG_9718.JPG' },
];

/* ── Get involved ── */
const involved = [
  { title: 'Calendar', path: '/academic-calendar', image: '/images/26-08-2015-12-49-54__MG_8635.jpg', desc: 'View term dates, holidays, and key events across all GES institutions.' },
  { title: 'Mentorship Portal', path: '/mentorship', image: '/images/IMG_9873.JPG', desc: 'Connect with mentors and grow through guidance from the GES community.' },
  { title: 'International Pathway', path: '/international-pathway', image: '/images/ieppheader.png', desc: 'Discover the International Pathway Programme and global study opportunities.' },
];
</script>

<style scoped>
.container-rpl {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ── Hero split (rescue.org style) ── */
.hero-split {
  background: var(--rescue-grey-bg, #F0F0F0);
  padding-top: 64px; /* clear fixed header */
}
.hero-split__inner {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
}
@media (min-width: 1024px) {
  .hero-split__inner { grid-template-columns: 1fr auto; align-items: center; }
}
.hero-split__content {
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@media (min-width: 1024px) {
  .hero-split__content { padding: 4.5rem 3rem 4.5rem 1.5rem; }
}
.hero-split__logo {
  height: 144px;
  width: auto;
  align-self: flex-start;
  margin-bottom: 1.25rem;
}
.hero-split__title {
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.02em;
  color: var(--rescue-dark, #1A1A1A);
}
.hero-split__text {
  margin-top: 1.25rem;
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--rescue-charcoal, #3D3D3D);
  max-width: 480px;
}
.hero-split__actions {
  margin-top: 1.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}
.hero-split__media {
  position: relative;
  min-height: 320px;
  overflow: hidden;
}
@media (min-width: 1024px) {
  /* Carousel anchored to the right with breathing room */
  .hero-split__media {
    width: 520px;
    min-height: 400px;
    justify-self: end;
    margin: 3rem 1.5rem 3rem 0;
    border-radius: 8px;
  }
}
.hero-split__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-split__dots {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 2;
}
.hero-split__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: rgba(255,255,255,0.55);
  cursor: pointer;
  padding: 0;
  transition: background 0.2s, transform 0.2s;
}
.hero-split__dot.is-active {
  background: var(--rescue-yellow, #FFC72C);
  transform: scale(1.2);
}
.hero-fade-enter-active, .hero-fade-leave-active { transition: opacity 0.8s ease; }
.hero-fade-enter-from, .hero-fade-leave-to { opacity: 0; }

/* ── Recognised by strip (inside hero) ── */
.hero-split__recognised {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.25rem 1.5rem 2rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem 2.5rem;
  border-top: 1px solid var(--rescue-border, #E0E0E0);
}
.hero-split__recognised-label {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--rescue-text-secondary, #555);
}
.hero-split__recognised-logos {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}
.hero-split__recognised-logos img {
  height: 40px;
  width: auto;
  max-width: 110px;
  object-fit: contain;
  filter: grayscale(1);
  opacity: 0.75;
  transition: filter 0.2s, opacity 0.2s;
}
.hero-split__recognised-logos img:hover { filter: none; opacity: 1; }

/* ── Partners carousel (black & white, auto-scrolling) ── */
.partners-marquee {
  margin-top: 2.5rem;
  overflow: hidden;
}
.partners-marquee__item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2.5rem;
}
.partners-marquee__logo {
  height: 56px;
  width: auto;
  max-width: 160px;
  object-fit: contain;
  filter: grayscale(1);
  opacity: 0.75;
  transition: filter 0.2s, opacity 0.2s;
}
.partners-marquee__item:hover .partners-marquee__logo {
  filter: none;
  opacity: 1;
}

/* ── Institution card logo badge ── */
.rpl-card__badge {
  position: absolute;
  bottom: 0.75rem;
  left: 0.75rem;
  height: 44px !important;
  width: auto !important;
  object-fit: contain !important;
  background: #fff;
  padding: 4px 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
}

/* ── Institutions teaser list (rescue.org rpll-two-column-list--highlighted) ── */
.inst-list {
  display: grid;
  grid-column-gap: 1.5rem;
  grid-row-gap: 2rem;
  grid-template-columns: 1fr;
  list-style: none;
  margin: 0;
  padding-left: 0;
}
@media (min-width: 64rem) {
  .inst-list { grid-template-columns: 1fr 1fr; }
  .inst-list__item:first-child { grid-column: 1 / 3; }
}
.inst-list__item { overflow: hidden; }

/* Highlighted teaser (rplc-teaser-highlighted) */
.teaser-hl__link {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
}
.teaser-hl__media {
  position: relative;
  line-height: 0;
}
.teaser-hl__media img:first-child {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
.teaser-hl__text {
  position: relative;
  z-index: 5;
  background: var(--rescue-yellow, #FFC72C);
  margin: -2rem 1rem 0;
  padding: 2rem;
}
@media (min-width: 64rem) {
  .teaser-hl__link { flex-direction: row; align-items: center; }
  .teaser-hl__media { flex: 1 1 auto; min-width: 0; }
  .teaser-hl__text {
    flex: 0 0 auto;
    width: 26.5rem;
    margin: 0 0 0 -11.625rem;
  }
}
@media (min-width: 77.5rem) {
  .teaser-hl__text { width: 40rem; }
}
.teaser-hl__title {
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin-bottom: 0.5em;
  color: var(--rescue-dark, #1A1A1A);
}
.teaser-hl__summary {
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.4;
  margin-bottom: 2rem;
  color: var(--rescue-dark, #1A1A1A);
}

/* Standard teaser (rplc-teaser-standard) */
.teaser-std { height: 100%; }
.teaser-std__link {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: inherit;
}
.teaser-std__media {
  position: relative;
  line-height: 0;
}
.teaser-std__media img:first-child {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
.teaser-std__text {
  position: relative;
  z-index: 5;
  background: #fff;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: -3rem 1rem 0;
  padding: 2rem;
}
.teaser-std__title { flex: 1; }
.teaser-std__title h3 {
  font-size: clamp(1.25rem, 2vw, 1.75rem);
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 0.5em;
  color: var(--rescue-dark, #1A1A1A);
}
.teaser-std__cta {
  align-self: flex-start;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.4;
}

/* Slug, school badge and yellow-highlight link (rpla-slug / rpla-link--type-one) */
.teaser-slug {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
  margin-bottom: 0.5em;
  color: var(--rescue-dark, #1A1A1A);
}
.teaser-badge {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  height: 72px;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 2px 6px rgba(0,0,0,0.35));
}
.teaser-link {
  display: inline;
  font-size: 1.125rem;
  font-weight: 300;
  color: #800020;
  background: var(--rescue-yellow, #FFC72C);
  box-shadow: 0 0 0 0.2em var(--rescue-yellow, #FFC72C);
  border-bottom: 0.1em solid var(--rescue-yellow, #FFC72C);
  transition: border-color 0.15s;
}
.teaser-std__link:hover .teaser-link { border-bottom-color: #800020; }
.teaser-link--inverse {
  color: #fff;
  background: #800020;
  box-shadow: 0 0 0 0.2em #800020;
  border-bottom: 0.1em solid #800020;
}
.teaser-hl__link:hover .teaser-link--inverse { border-bottom-color: #fff; }

/* ── Quote CTA (call-to-action-2) ── */
.quote-cta {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  background: var(--rescue-grey-light, #F5F5F5);
  border-left: 6px solid var(--rescue-yellow, #FFC72C);
  padding: 2.5rem;
  align-items: center;
}
@media (min-width: 900px) {
  .quote-cta { grid-template-columns: 280px 1fr; gap: 3rem; }
}
.quote-cta__media img {
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
  display: block;
}
.quote-cta__text {
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  font-weight: 700;
  line-height: 1.4;
  color: var(--rescue-dark, #1A1A1A);
}
.quote-cta__author {
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
}
.quote-cta__author strong { font-size: 1rem; color: var(--rescue-dark, #1A1A1A); }
.quote-cta__author span { font-size: 0.85rem; color: var(--rescue-text-secondary, #555); }
.quote-cta__btn { margin-top: 1.5rem; }

/* ── News grid (rplc-news-and-features) ── */
.news-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 1024px) {
  .news-grid { grid-template-columns: 7fr 5fr; }
}
.news-highlight {
  display: block;
  text-decoration: none;
  background: var(--rescue-white, #fff);
  border: 1px solid var(--rescue-border, #E0E0E0);
  transition: box-shadow 0.2s, transform 0.2s;
}
.news-highlight:hover { box-shadow: 0 10px 30px rgba(0,0,0,0.12); transform: translateY(-3px); }
.news-highlight__media { aspect-ratio: 16 / 9; overflow: hidden; }
.news-highlight__media img { width: 100%; height: 100%; object-fit: cover; }
.news-highlight__body { padding: 1.5rem; }
.news-highlight__title {
  margin-top: 0.75rem;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.2;
  color: var(--rescue-dark, #1A1A1A);
}
.news-highlight__excerpt {
  margin: 0.6rem 0 1rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--rescue-text-secondary, #555);
}
.news-side {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.news-teaser {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 1rem;
  text-decoration: none;
  background: var(--rescue-white, #fff);
  border: 1px solid var(--rescue-border, #E0E0E0);
  transition: box-shadow 0.2s, transform 0.2s;
  flex: 1;
}
.news-teaser:hover { box-shadow: 0 10px 30px rgba(0,0,0,0.12); transform: translateY(-3px); }
.news-teaser__media { overflow: hidden; }
.news-teaser__media img { width: 100%; height: 100%; object-fit: cover; }
.news-teaser__body { padding: 1rem 1rem 1rem 0; }
.news-teaser__title {
  margin: 0.5rem 0 0.75rem;
  font-size: 1.05rem;
  font-weight: 800;
  line-height: 1.25;
  color: var(--rescue-dark, #1A1A1A);
}
.news-more { margin-top: 2rem; }

/* ── CTA band ── */
.cta-band {
  background: var(--rescue-yellow, #FFC72C);
  padding: 2.5rem 0;
}
.cta-band__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
}
.cta-band__title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  color: var(--rescue-dark, #1A1A1A);
}
.cta-band__sub {
  margin-top: 0.4rem;
  font-size: 0.95rem;
  color: rgba(0,0,0,0.75);
}
.cta-band__actions {
  display: flex;
  gap: 0.85rem;
  flex-wrap: wrap;
}
.btn-rescue--dark {
  background: var(--rescue-dark, #1A1A1A);
  color: #fff;
  border-color: var(--rescue-dark, #1A1A1A);
}
.btn-rescue--dark:hover { background: #000; }
</style>
