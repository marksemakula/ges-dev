<template>
  <div class="home">
    <!-- ── Cinematic full-bleed hero ── -->
    <section class="hero-cine">
      <div class="hero-cine__slides">
        <Transition name="hero-fade">
          <div
            :key="currentSlide"
            class="hero-cine__img"
            :style="{ backgroundImage: `url('${slideshowImages[currentSlide]}')` }"
            role="img"
            aria-label="Students of Gombe Education Service"
          />
        </Transition>
      </div>
      <div class="hero-cine__overlay"></div>

      <div class="container-rpl hero-cine__content">
        <img src="/logo.png" alt="Gombe Education Service" class="hero-cine__logo" />
        <h1 class="hero-cine__title">
          Shaping Leaders,<br />
          <span class="hero-cine__title-accent">Building Futures</span>
        </h1>
        <p class="hero-cine__text">
          Gombe Education Service has provided world-class education since 2013 - fostering academic excellence, character, and global readiness across our network of institutions.
        </p>
        <div class="hero-cine__actions">
          <RouterLink to="/about" class="btn-rescue btn-rescue--primary">
            Get in Touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </RouterLink>
          <RouterLink to="/about" class="btn-rescue btn-rescue--outline-white">Learn More</RouterLink>
        </div>
      </div>

      <!-- Recognised-by glass strip pinned to the hero's bottom edge -->
      <div class="hero-cine__strip">
        <div class="container-rpl hero-cine__strip-inner">
          <span class="hero-cine__strip-label">Recognised by</span>
          <div class="hero-cine__strip-logos">
            <img v-for="logo in recognisedBy" :key="logo.name" :src="logo.src" :alt="logo.name" :title="logo.name" />
          </div>
        </div>
      </div>
    </section>

    <!-- ── Mission statement (rescue.org rplc-infographic-standard) ── -->
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

    <!-- ── Leadership quote: full-width black band ── -->
    <section class="quote-band">
      <div class="container-rpl quote-band__inner">
        <div class="quote-band__media">
          <img src="/images/Owek. Kyewalabye David Male.png" alt="Owek. Kyewalabye Male David" />
        </div>
        <div class="quote-band__content">
          <span class="quote-band__mark" aria-hidden="true">&ldquo;</span>
          <blockquote class="quote-band__text">
            Our institutions are built on the conviction that every child deserves an education that nurtures their full potential - academically, morally, and as a citizen of the world.
          </blockquote>
          <div class="quote-band__author">
            <strong>Owek. Kyewalabye Male David</strong>
            <span>Managing Director, Gombe Education Service</span>
          </div>
          <RouterLink to="/leadership" class="btn-rescue btn-rescue--primary quote-band__btn">Meet Our Leadership</RouterLink>
        </div>
      </div>
    </section>

    <!-- ── Institutions: highlighted teaser + scroll-snap carousel ── -->
    <section class="rpl-section rpl-section--grey">
      <div class="container-rpl">
        <div class="rpl-section-heading">
          <h2 class="rpl-section-heading__title">Institutions Under GES</h2>
        </div>

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

        <div class="inst-carousel-head">
          <p class="inst-carousel-head__hint">Explore our schools</p>
          <div class="inst-carousel-head__controls">
            <button class="inst-carousel-arrow" aria-label="Scroll institutions left" @click="scrollCarousel(-1)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            </button>
            <button class="inst-carousel-arrow" aria-label="Scroll institutions right" @click="scrollCarousel(1)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
        </div>

        <div ref="carouselRef" class="inst-carousel">
          <div v-for="inst in institutions.slice(1)" :key="inst.path" class="inst-carousel__card">
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
          </div>
        </div>

        <div class="partners-marquee">
          <Vue3Marquee :duration="40" :pause-on-hover="true" :clone="true" :gradient="true" :gradient-color="[240, 240, 240]" gradient-length="150px">
            <div v-for="logo in partnerLogos" :key="logo.name" class="partners-marquee__item" :title="logo.name">
              <img :src="logo.src" :alt="logo.name" class="partners-marquee__logo" />
            </div>
          </Vue3Marquee>
        </div>
      </div>
    </section>

    <!-- ── News: editorial zigzag grid ── -->
    <section id="news" class="rpl-section">
      <div class="container-rpl">
        <div class="rpl-section-heading">
          <h2 class="rpl-section-heading__title">News and featured Articles</h2>
        </div>
        <div class="news-ed">
          <RouterLink to="/blog" class="news-ed__feature">
            <div class="news-ed__feature-media">
              <img :src="featuredPosts[0].image" :alt="featuredPosts[0].title" loading="lazy" />
              <span class="rpl-slug news-ed__feature-slug">{{ featuredPosts[0].category }}</span>
            </div>
            <div class="news-ed__feature-body">
              <h3 class="news-ed__feature-title">{{ featuredPosts[0].title }}</h3>
              <p class="news-ed__feature-excerpt">{{ featuredPosts[0].excerpt }}</p>
              <span class="rpl-link">Read more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </span>
            </div>
          </RouterLink>
          <div class="news-ed__side">
            <RouterLink
              v-for="(post, i) in featuredPosts.slice(1)"
              :key="post.id"
              to="/blog"
              class="news-ed__teaser"
              :class="`news-ed__teaser--${i + 1}`"
            >
              <div class="news-ed__teaser-media">
                <img :src="post.image" :alt="post.title" loading="lazy" />
              </div>
              <div class="news-ed__teaser-body">
                <span class="rpl-slug">{{ post.category }}</span>
                <h3 class="news-ed__teaser-title">{{ post.title }}</h3>
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
    <section class="rpl-section rpl-section--grey">
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

/* ── Hero slideshow (single full-bleed crossfade + ken burns) ── */
const slideshowImages = [
  '/images/slideshow/slideshow_1.jpg',
  '/images/slideshow/slideshow_2.jpg',
  '/images/slideshow/slideshow_3.jpg',
  '/images/slideshow/slideshow_4.jpg',
  '/images/slideshow/slideshow_5.jpg',
];
const currentSlide = ref(0);
let slideTimer: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  slideTimer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slideshowImages.length;
  }, 6000);
});
onUnmounted(() => {
  if (slideTimer) clearInterval(slideTimer);
});

/* ── Institutions carousel ── */
const carouselRef = ref<HTMLElement | null>(null);
function scrollCarousel(dir: number) {
  const el = carouselRef.value;
  if (!el) return;
  const card = el.querySelector('.inst-carousel__card') as HTMLElement | null;
  const step = card ? card.offsetWidth + 24 : 400;
  el.scrollBy({ left: dir * step, behavior: 'smooth' });
}

/* ── Recognised by (hero strip) ── */
const recognisedBy = [
  { name: 'Ministry of Education', src: '/images/MoES1.png' },
  { name: 'UTB',                   src: '/images/UTB.png' },
  { name: 'Kingdom of Buganda',    src: '/images/Flag_of_Buganda.svg' },
  { name: 'Braemar College',       src: '/images/braemar.webp' },
  { name: 'SAI',                   src: '/images/sai-brand-logo.png' },
];

/* ── Partners carousel ── */
const partnerLogos = [
  { name: 'Kingdom of Buganda',              src: '/images/Flag_of_Buganda.svg' },
  { name: 'Braemar College',                 src: '/images/braemar.webp' },
  { name: 'St. Andrew Kaggwa GHS',           src: '/images/Gombe High logo.png' },
  { name: 'Gombe Junior School',             src: '/images/Gombe Junior School logo.png' },
  { name: 'SISU',                            src: '/images/scooby-logo.png' },
  { name: 'Gombe Institute of Business Science & Technology (GIBST)', src: '/images/Jimmy Ssekasi Business Institute Logo.png' },
  { name: 'SAI',                             src: '/images/sai-brand-logo.png' },
  { name: 'Ministry of Education',           src: '/images/MoES1.png' },
  { name: 'UTB',                             src: '/images/UTB.png' },
];

/* ── Institutions ── */
const institutions = [
  { name: 'ScoobyDoo International School Uganda - Kampala', type: 'International School', logo: '/images/scooby-logo.png', image: '/images/sisu-katale-triptych.jpeg', path: '/institutions/sisu-kampala', url: 'http://scoobydoointernational.ac.ug/', description: 'International curriculum preparing students for global success.' },
  { name: 'Gombe Institute of Business Science & Technology (GIBST)', type: 'Vocational Institute', logo: '/images/Jimmy Ssekasi Business Institute Logo.png', image: '/images/JIMMY SEKASI.JPG', path: '/institutions/jsbi', url: 'http://gibst.ac.ug/', description: 'Equipping students with practical business, vocational, and hands-on skills.' },
  { name: 'St. Andrew Kaggwa Gombe High School - Bujuuko', type: 'Secondary School', logo: '/images/Gombe High logo.png', image: '/images/Gombe High School - Bujuuko.png', path: '/institutions/sakghs-bujuuko', url: 'http://gombehighschool.ac.ug/', description: 'Nurturing tomorrow\'s leaders through quality education.' },
  { name: 'St. Andrew Kaggwa Gombe High School - Kawaala', type: 'Secondary School', logo: '/images/Gombe High logo.png', image: '/images/IMG_9718.JPG', path: '/institutions/sakghs-kawaala', url: 'http://gombehighschool.ac.ug/', description: 'Advanced secondary education with a focus on academic excellence.' },
  { name: 'Gombe Junior School - Kampala', type: 'UNEB Licensed Primary School', logo: '/images/Gombe Junior School logo.png', image: '/images/IMG_1737.JPG', path: '/institutions/gjs-kampala', url: 'http://gombejuniorschool.ac.ug/', description: 'Building strong foundations for lifelong learning.' },
  { name: 'Gombe Junior School - Gulu', type: 'UNEB Licensed Primary School', logo: '/images/Gombe Junior School logo.png', image: '/images/IMG_1685.JPG', path: '/institutions/gjs-gulu', url: 'http://gombejuniorschool.ac.ug/', description: 'Extending foundational education excellence to Northern Uganda.' },
  { name: 'ScoobyDoo International School Uganda - Gulu', type: 'International School', logo: '/images/scooby-logo.png', image: '/images/26-08-2015-01-12-29_IMG_3773.jpg', path: '/institutions/sisu-gulu', url: 'http://scoobydoointernational.ac.ug/', description: 'Bringing international education to Northern Uganda.' },
];

/* ── Featured posts (from GES Blog) ── */
const featuredPosts = [
  { id: '1', title: 'The Future of Education: Embracing Digital Learning', excerpt: 'Exploring how digital transformation is reshaping the educational landscape and preparing students for tomorrow\'s challenges.', category: 'Innovation', image: '/images/TD.jpg' },
  { id: '2', title: 'Building Character Through Education', excerpt: 'How GES integrates character development into our curriculum to nurture well-rounded individuals.', category: 'Character', image: '/images/15-09-2015-12-03-57_DSCN1414.jpg' },
  { id: '3', title: 'STEM Education Excellence at GES', excerpt: 'Discover how our STEM programmes are preparing students for careers in science, technology, engineering, and mathematics.', category: 'STEM', image: '/images/IMG_9718.JPG' },
];

/* ── Get involved ── */
const involved = [
  { title: 'Calendar', path: '/academic-calendar', image: '/images/SISU-Kampala53.jpeg', desc: 'View term dates, holidays, and key events across all GES institutions.' },
  { title: 'Mentorship', path: '/mentorship', image: '/images/Mentorship.jpeg', desc: 'Connect with mentors and grow through guidance from the GES community.' },
  { title: 'International Pathway', path: '/international-pathway', image: '/images/ieppheader.png', desc: 'Discover the International Pathway Programme and global study opportunities.' },
];
</script>

<style scoped>
.container-rpl {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Mission heading - same size as the leadership quote text */
.rpl-section-heading--center .rpl-section-heading__title {
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
}

/* ── Cinematic full-bleed hero ── */
.hero-cine {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: max(86vh, 620px);
  background: var(--rescue-dark, #1A1A1A);
  overflow: hidden;
}
.hero-cine__slides {
  position: absolute;
  inset: 0;
}
.hero-cine__img {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: 50% 35%;
  background-repeat: no-repeat;
  animation: hero-kenburns 14s ease-out forwards;
}
@keyframes hero-kenburns {
  from { transform: scale(1); }
  to   { transform: scale(1.08); }
}
@media (prefers-reduced-motion: reduce) {
  .hero-cine__img { animation: none; }
}
.hero-fade-enter-active, .hero-fade-leave-active { transition: opacity 1.1s ease; }
.hero-fade-enter-from, .hero-fade-leave-to { opacity: 0; }

.hero-cine__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(80deg, rgba(10, 10, 10, 0.55) 0%, rgba(10, 10, 10, 0.28) 40%, rgba(10, 10, 10, 0) 65%);
  pointer-events: none;
}

.hero-cine__content {
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-top: 6.5rem;
  padding-bottom: 3rem;
  animation: fadeIn 0.9s ease-out both;
}
@media (min-width: 1024px) {
  .hero-cine__content { padding-top: 9.5rem; }
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

.hero-cine__logo {
  height: 192px;
  width: auto;
  align-self: flex-start;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 4px 14px rgba(0, 0, 0, 0.45));
}
.hero-cine__title {
  font-size: clamp(2.6rem, 6vw, 4.4rem);
  font-weight: 800;
  line-height: 1.06;
  letter-spacing: -0.02em;
  color: #fff;
  text-shadow: 0 2px 24px rgba(0, 0, 0, 0.35);
  max-width: 820px;
}
.hero-cine__title-accent {
  background-image: linear-gradient(var(--rescue-yellow, #FFC72C), var(--rescue-yellow, #FFC72C));
  background-size: 100% 0.16em;
  background-position: 0 94%;
  background-repeat: no-repeat;
  padding-bottom: 0.06em;
}
.hero-cine__text {
  margin-top: 1.5rem;
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.88);
  max-width: 560px;
}
.hero-cine__actions {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}

/* Recognised-by glass strip */
.hero-cine__strip {
  position: relative;
  z-index: 2;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 3px solid var(--rescue-yellow, #FFC72C);
}
.hero-cine__strip-inner {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem 2.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.hero-cine__strip-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--rescue-text-secondary, #555);
}
.hero-cine__strip-logos {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.75rem;
}
.hero-cine__strip-logos img {
  height: 36px;
  width: auto;
  max-width: 105px;
  object-fit: contain;
  filter: grayscale(1);
  opacity: 0.8;
  transition: filter 0.2s, opacity 0.2s;
}
.hero-cine__strip-logos img:hover { filter: none; opacity: 1; }

/* ── Leadership quote: black band ── */
.quote-band {
  background: var(--rescue-dark, #1A1A1A);
  padding: 4.5rem 0;
}
.quote-band__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;
}
@media (min-width: 900px) {
  .quote-band__inner { grid-template-columns: 300px 1fr; gap: 4rem; }
}
.quote-band__media img {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  display: block;
  filter: grayscale(1) contrast(1.05);
  box-shadow: 12px 12px 0 var(--rescue-yellow, #FFC72C);
}
.quote-band__content {
  position: relative;
}
.quote-band__mark {
  display: block;
  font-size: 6rem;
  font-weight: 800;
  line-height: 0.5;
  color: var(--rescue-yellow, #FFC72C);
  margin-bottom: 1.25rem;
}
.quote-band__text {
  font-size: clamp(1.3rem, 2.6vw, 1.85rem);
  font-weight: 700;
  line-height: 1.4;
  color: #fff;
}
.quote-band__author {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
}
.quote-band__author strong { font-size: 1rem; color: var(--rescue-yellow, #FFC72C); }
.quote-band__author span { font-size: 0.85rem; color: rgba(255, 255, 255, 0.65); margin-top: 2px; }
.quote-band__btn { margin-top: 1.75rem; }

/* ── Institutions carousel ── */
.inst-carousel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin: 2.5rem 0 1rem;
}
.inst-carousel-head__hint {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--rescue-text-secondary, #555);
}
.inst-carousel-head__controls {
  display: flex;
  gap: 0.5rem;
}
.inst-carousel-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: var(--rescue-dark, #1A1A1A);
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, transform 0.2s;
}
.inst-carousel-arrow:hover {
  background: var(--rescue-yellow, #FFC72C);
  color: var(--rescue-dark, #1A1A1A);
  transform: translateY(-2px);
}
.inst-carousel {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 1rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.inst-carousel::-webkit-scrollbar { display: none; }
.inst-carousel__card {
  flex: 0 0 min(380px, 82vw);
  scroll-snap-align: start;
}

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
  overflow: hidden;
}
.teaser-hl__media img:first-child {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.2, 0.6, 0.3, 1);
}
.teaser-hl__link:hover .teaser-hl__media img:first-child {
  transform: scale(1.04);
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
  overflow: hidden;
}
.teaser-std__media img:first-child {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.2, 0.6, 0.3, 1);
}
.teaser-std__link:hover .teaser-std__media img:first-child {
  transform: scale(1.04);
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
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  font-weight: 700;
  line-height: 1.35;
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

/* ── News: editorial zigzag ── */
.news-ed {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}
@media (min-width: 1024px) {
  .news-ed { grid-template-columns: 7fr 5fr; gap: 3rem; }
}
.news-ed__feature {
  display: block;
  text-decoration: none;
}
.news-ed__feature-media {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
}
.news-ed__feature-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.2, 0.6, 0.3, 1);
}
.news-ed__feature:hover .news-ed__feature-media img { transform: scale(1.04); }
.news-ed__feature-slug {
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 0.75rem;
  padding: 0.4rem 0.9rem;
}
.news-ed__feature-body {
  padding: 1.5rem 0 0;
  border-bottom: 4px solid var(--rescue-yellow, #FFC72C);
  padding-bottom: 1.5rem;
}
.news-ed__feature-title {
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: var(--rescue-dark, #1A1A1A);
}
.news-ed__feature-excerpt {
  margin: 0.75rem 0 1.25rem;
  font-size: 1rem;
  line-height: 1.65;
  color: var(--rescue-text-secondary, #555);
  max-width: 560px;
}
.news-ed__side {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  justify-content: center;
}
.news-ed__teaser {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 1.25rem;
  text-decoration: none;
  align-items: start;
}
@media (min-width: 1024px) {
  /* zigzag offsets */
  .news-ed__teaser--1 { margin-right: 2.5rem; }
  .news-ed__teaser--2 { margin-left: 2.5rem; }
}
.news-ed__teaser-media {
  overflow: hidden;
  aspect-ratio: 1 / 1;
}
.news-ed__teaser-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.2, 0.6, 0.3, 1);
}
.news-ed__teaser:hover .news-ed__teaser-media img { transform: scale(1.06); }
.news-ed__teaser-body .rpl-slug { font-size: 0.65rem; }
.news-ed__teaser-title {
  margin: 0.6rem 0 0.75rem;
  font-size: 1.1rem;
  font-weight: 800;
  line-height: 1.3;
  color: var(--rescue-dark, #1A1A1A);
}
.news-more { margin-top: 2.5rem; }

/* ── CTA band ── */
.cta-band {
  background: linear-gradient(105deg, #FFD35C 0%, var(--rescue-yellow, #FFC72C) 45%, #F0B814 100%);
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
