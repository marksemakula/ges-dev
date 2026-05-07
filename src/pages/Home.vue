<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="hero__content container">
        <div class="hero__text">
          <h1 class="hero__title">Shaping Leaders,<br />Building Futures</h1>
          <p class="hero__subtitle">
            Gombe Education Service has provided world-class education since 1995 — fostering academic excellence, character, and global readiness across our network of institutions.
          </p>
        </div>

        <div class="hero__visual">
          <img src="/logo.png" alt="Gombe Education Service logo" class="hero__logo" />
        </div>
      </div>
      <div class="hero__bg-pattern" aria-hidden="true"></div>
    </section>

    <!-- Institutions Marquee -->
    <section class="institutions">
      <Vue3Marquee :duration="60" :pause-on-hover="true" :gradient="true" gradient-color="#0A2342" gradient-width="100px">
        <a
          v-for="logo in marqueeLogosExpanded"
          :key="logo._key"
          class="marquee__item"
          :title="logo.name"
        >
          <img :src="logo.src" :alt="logo.name" :class="['marquee__logo', { 'marquee__logo--grayscale': logo.grayscale }]" />
        </a>
      </Vue3Marquee>
    </section>

    <!-- Institutions Carousel -->
    <section class="section section--muted inst-section">
      <div class="container">
        <div class="inst-section__header">
          <p class="inst-section__eyebrow">Our Network</p>
          <h2 class="inst-section__title">Institutions Under GES</h2>
        </div>

        <div class="inst-section__inner">
          <!-- Carousel (full width centered) -->
          <div class="inst-carousel" @mouseenter="clearAuto" @mouseleave="startAuto">
            <div :class="['inst-carousel__stage', `stage--${slideDir}`, { 'is-animating': isAnimating }]">
              <!-- Prev peek -->
              <div
                class="inst-carousel__peek inst-carousel__peek--left"
                @click="prev"
                role="button"
                tabindex="0"
                @keydown.enter="prev"
                :aria-label="'Previous: ' + prevInst.name"
              >
                <Transition name="peek-fade" mode="out-in">
                  <div :key="prevIndex" class="inst-tile inst-tile--peek">
                    <div class="inst-tile__logo">
                      <img :src="prevInst.logo" :alt="prevInst.name" />
                    </div>
                    <div class="inst-tile__body">
                      <span class="inst-tile__type">{{ prevInst.type }}</span>
                      <h3 class="inst-tile__name">{{ prevInst.name }}</h3>
                    </div>
                  </div>
                </Transition>
              </div>

              <!-- Active tile -->
              <div class="inst-carousel__slot">
                <Transition :name="`slide-${slideDir}`">
                  <a :key="activeIndex" :href="activeInst.url" class="inst-tile inst-tile--active">
                    <div class="inst-tile__media">
                      <img :src="activeInst.image" :alt="`${activeInst.name} students`" />
                    </div>
                    <div class="inst-tile__content">
                      <div class="inst-tile__logo inst-tile__logo--lg">
                        <img :src="activeInst.logo" :alt="activeInst.name" />
                      </div>
                      <div class="inst-tile__body inst-tile__body--active">
                        <span class="inst-tile__type">{{ activeInst.type }}</span>
                        <h3 class="inst-tile__name">{{ activeInst.name }}</h3>
                        <p class="inst-tile__desc">{{ activeInst.description }}</p>
                        <p class="inst-tile__more">Explore this institution to learn more about its programs, community, and student life.</p>
                      </div>
                    </div>
                    <svg class="inst-tile__arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </a>
                </Transition>
              </div>

              <!-- Next peek -->
              <div
                class="inst-carousel__peek inst-carousel__peek--right"
                @click="next"
                role="button"
                tabindex="0"
                @keydown.enter="next"
                :aria-label="'Next: ' + nextInst.name"
              >
                <Transition name="peek-fade" mode="out-in">
                  <div :key="nextIndex" class="inst-tile inst-tile--peek">
                    <div class="inst-tile__logo">
                      <img :src="nextInst.logo" :alt="nextInst.name" />
                    </div>
                    <div class="inst-tile__body">
                      <span class="inst-tile__type">{{ nextInst.type }}</span>
                      <h3 class="inst-tile__name">{{ nextInst.name }}</h3>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>

            <!-- Dots -->
            <div class="inst-carousel__dots" role="tablist">
              <button
                v-for="(_, i) in institutions"
                :key="i"
                :class="['inst-carousel__dot', { 'is-active': i === activeIndex }]"
                @click="goTo(i)"
                :aria-label="`Go to ${institutions[i].name}`"
              />
            </div>
          </div>

          <!-- Board Chair Quote Banner -->
          <div class="quote-banner">
            <div class="quote-banner__person">
              <img src="/images/David_Kiwalabye_Male-rbg.png" alt="David Kiwalabye Male" />
            </div>
            <div class="quote-banner__content">
              <svg class="quote-banner__icon" width="52" height="52" viewBox="0 0 24 24" fill="#8C1427" opacity="0.08"><path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"/></svg>
              <blockquote class="quote-banner__text">
                "Our institutions are built on the conviction that every child deserves an education that nurtures their full potential — academically, morally, and as a citizen of the world."
              </blockquote>
              <div class="quote-banner__author">
                <div class="quote-banner__line"></div>
                <div>
                  <strong>David Kiwalabye Male</strong>
                  <span>Board Chair, Gombe Education Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners logos -->
    <section class="section partners">
      <div class="container">
        <p class="partners__label">Recognised & Accredited By</p>
        <div class="partners__logos">
          <div v-for="partner in partners" :key="partner.name" class="partners__logo">
            <img :src="partner.src" :alt="partner.name" />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-banner">
      <div class="container cta-banner__inner">
        <div>
          <h2 class="cta-banner__title">Ready to Join the GES Family?</h2>
          <p class="cta-banner__sub">Contact any of our institutions to begin the admissions process.</p>
        </div>
        <div class="cta-banner__actions">
          <RouterLink to="/about" class="btn btn--white">Get in Touch</RouterLink>
          <RouterLink to="/academic-calendar" class="btn btn--outline-white">View Calendar</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { Vue3Marquee } from 'vue3-marquee';

const institutions = [
  { name: 'St. Andrew Kaggwa GHS – Kawaala', type: 'Secondary School', logo: '/images/Gombe High logo.png', image: '/images/IMG_9718.JPG', path: '/institutions/sakghs-kawaala', url: 'https://sakghs-kawaala.vercel.app/', description: 'Advanced secondary education with a focus on academic excellence.' },
  { name: 'St. Andrew Kaggwa GHS – Bujuuko', type: 'Secondary School', logo: '/images/Gombe High logo.png', image: '/images/Gombe High School - Bujuuko.png', path: '/institutions/sakghs-bujuuko', url: 'https://sakghs-bujuuko.vercel.app/', description: 'Nurturing tomorrow\'s leaders through quality education.' },
  { name: 'Gombe Junior School – Kikajjo', type: 'UNEB Licensed Primary School', logo: '/images/Gombe Junior School logo.png', image: '/images/IMG_1737.JPG', path: '/institutions/gjs-kikajjo', url: 'https://gjs-kikajjo.vercel.app/', description: 'Building strong foundations for lifelong learning.' },
  { name: 'Gombe Junior School – Boarding', type: 'UNEB Licensed Primary School', logo: '/images/Gombe Junior School logo.png', image: '/images/IMG_1697.JPG', path: '/institutions/gjs-boarding', url: 'https://gjs-boarding.vercel.app/', description: 'Residential schooling in a safe, nurturing environment.' },
  { name: 'Gombe Junior School – Gulu', type: 'UNEB Licensed Primary School', logo: '/images/Gombe Junior School logo.png', image: '/images/IMG_1685.JPG', path: '/institutions/gjs-gulu', url: 'https://gjs-gulu.vercel.app/', description: 'Extending foundational education excellence to Northern Uganda.' },
  { name: 'SISU – Katale Campus', type: 'International School', logo: '/images/scooby-logo.png', image: '/images/26-08-2015-12-55-02_1.jpg', path: '/institutions/scooby-katale', url: 'https://sisu-katale.vercel.app/', description: 'International curriculum preparing students for global success.' },
  { name: 'SISU – Gulu Campus', type: 'International School', logo: '/images/scooby-logo.png', image: '/images/26-08-2015-01-12-29_IMG_3773.jpg', path: '/institutions/scooby-gulu', url: 'https://sisu-gulu.vercel.app/', description: 'Bringing international education to Northern Uganda.' },
  { name: 'Jimmy Sekasi Business Institute', type: 'Vocational Institute', logo: '/images/Jimmy Ssekasi Business Institute Logo.png', image: '/images/JIMMY SEKASI.JPG', path: '/institutions/jsbi', url: '#', description: 'Equipping students with practical business, vocational, and hands-on skills.' },
];

/* ── Carousel state ── */
const activeIndex = ref(0);
const slideDir = ref<'left' | 'right'>('right');
const prevIndex = computed(() => (activeIndex.value - 1 + institutions.length) % institutions.length);
const nextIndex = computed(() => (activeIndex.value + 1) % institutions.length);
const prevInst = computed(() => institutions[prevIndex.value]);
const activeInst = computed(() => institutions[activeIndex.value]);
const nextInst = computed(() => institutions[nextIndex.value]);

let autoTimer: ReturnType<typeof setInterval> | null = null;
let animTimer: ReturnType<typeof setTimeout> | null = null;
const isAnimating = ref(false);

function startAuto() {
  if (autoTimer) clearInterval(autoTimer);
  autoTimer = setInterval(() => {
    slideDir.value = 'right';
    activeIndex.value = nextIndex.value;
    triggerAnim();
  }, 5000);
}
function clearAuto() {
  if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
}
function triggerAnim() {
  isAnimating.value = true;
  if (animTimer) clearTimeout(animTimer);
  animTimer = setTimeout(() => { isAnimating.value = false; }, 550);
}
function prev() { slideDir.value = 'left'; activeIndex.value = prevIndex.value; triggerAnim(); startAuto(); }
function next() { slideDir.value = 'right'; activeIndex.value = nextIndex.value; triggerAnim(); startAuto(); }
function goTo(i: number) {
  slideDir.value = i > activeIndex.value ? 'right' : 'left';
  activeIndex.value = i;
  triggerAnim();
  startAuto();
}
onMounted(startAuto);
onUnmounted(() => { clearAuto(); if (animTimer) clearTimeout(animTimer); });

const marqueeLogos = [
  { name: 'Kingdom of Buganda',              src: '/images/Flag_of_Buganda.svg' },
  { name: 'Braemar College',                 src: '/images/braemar.webp', grayscale: true },
  { name: 'St. Andrew Kaggwa GHS',           src: '/images/Gombe High logo.png' },
  { name: 'Gombe Junior School',             src: '/images/Gombe Junior School logo.png' },
  { name: 'SISU',                            src: '/images/scooby-logo.png' },
  { name: 'Jimmy Sekasi Business Institute', src: '/images/Jimmy Ssekasi Business Institute Logo.png' },
  { name: 'KISU',                            src: '/images/KISU.png' },
  { name: 'Ministry of Education',           src: '/images/MoES1.png', grayscale: true },
  { name: 'UTB',                             src: '/images/UTB.png',   grayscale: true },
];

// Repeat 3× so content is always wider than any viewport
const marqueeLogosExpanded = Array.from({ length: 3 }, (_, i) =>
  marqueeLogos.map(l => ({ ...l, _key: `${l.src}-${i}` }))
).flat();

const partners = [
  { name: 'Ministry of Education', src: '/images/MoES1.png' },
  { name: 'NCHE', src: '/images/NCHE.png' },
  { name: 'IEAC', src: '/images/IEAC.png' },
  { name: 'Kingdom of Buganda', src: '/images/Flag_of_Buganda.svg' },
  { name: 'Ministry of Local Government', src: '/images/molg-uganda.jpg' },
];
</script>

<style scoped>
/* ── Hero ── */
.hero {
  position: relative;
  background: url('/images/world-map-bg.png');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 88vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 0;
}
.hero__bg-pattern {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 70% 20%, rgba(255,209,102,0.18) 0%, transparent 50%),
    radial-gradient(circle at 15% 85%, rgba(255,180,60,0.10) 0%, transparent 45%),
    radial-gradient(circle at 50% 50%, rgba(80,0,15,0.45) 0%, transparent 70%);
  pointer-events: none;
}
.hero__content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  position: relative;
  z-index: 1;
  width: 100%;
}
@media (min-width: 1024px) {
  .hero__content { grid-template-columns: 1fr auto; align-items: center; }
}
.hero__eyebrow {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #FFD166;
  margin-bottom: 1rem;
}
.hero__title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: #0A2342;
  line-height: 1.12;
  margin-bottom: 1.25rem;
}
.hero__subtitle {
  font-size: 1.05rem;
  color: #0A2342;
  line-height: 1.7;
  max-width: 540px;
  margin-bottom: 2rem;
}
.hero__visual {
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero__logo {
  width: min(100%, 378px);
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 18px 40px rgba(0, 0, 0, 0.28));
}
.hero__actions {
  display: flex;
  gap: 0.875rem;
  flex-wrap: wrap;
}
.hero__stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  min-width: 260px;
}
.hero__stat {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 1.25rem;
  text-align: center;
}
.hero__stat-value {
  display: block;
  font-size: 1.75rem;
  font-weight: 700;
  color: #00C7B7;
  line-height: 1.1;
}
.hero__stat-label {
  display: block;
  font-size: 0.75rem;
  color: rgba(255,255,255,0.6);
  margin-top: 0.25rem;
}

/* ── Shared ── */
.section {
  padding: 5rem 0;
}
.section--muted { background: #f8f9fc; }
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
}
.section-header {
  text-align: center;
  max-width: 560px;
  margin: 0 auto 3rem;
}
.section-eyebrow {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #00C7B7;
  margin-bottom: 0.5rem;
}
.section-title {
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 700;
  color: #0A2342;
  line-height: 1.2;
  margin-bottom: 0.75rem;
}
.section-desc {
  font-size: 0.975rem;
  color: #6C757D;
  line-height: 1.65;
}

/* ── Buttons ── */
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
.btn--primary {
  background: #00C7B7;
  color: #0A2342;
  border-color: #00C7B7;
}
.btn--primary:hover { background: #00b5a7; border-color: #00b5a7; }
.btn--outline {
  background: transparent;
  color: rgba(255,255,255,0.85);
  border-color: rgba(255,255,255,0.3);
}
.btn--outline:hover { border-color: rgba(255,255,255,0.7); color: #fff; }
.btn--white { background: #fff; color: #0A2342; border-color: #fff; }
.btn--white:hover { background: #e8f0ff; }
.btn--outline-white { background: transparent; color: #fff; border-color: rgba(255,255,255,0.5); }
.btn--outline-white:hover { border-color: #fff; }

/* ── Institutions Marquee ── */
.institutions {
  background: #0A2342;
  padding: 2.5rem 0;
}
.marquee__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  padding: 0 2.5rem;
  text-decoration: none;
  flex-shrink: 0;
}
.marquee__logo {
  height: 56px;
  width: auto;
  max-width: 120px;
  object-fit: contain;
  opacity: 0.85;
  transition: filter 0.3s, opacity 0.3s;
}
.marquee__logo--grayscale {
  filter: grayscale(100%) brightness(10);
  opacity: 0.75;
}
.marquee__item:hover .marquee__logo {
  opacity: 1;
}
.marquee__item:hover .marquee__logo--grayscale {
  filter: grayscale(0%) brightness(1);
  opacity: 1;
}

/* ── Institutions Carousel ── */
.inst-section {
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(135deg, rgba(243, 244, 246, 0.85) 0%, rgba(229, 231, 235, 0.85) 100%),
    url('/images/world-map-bg.png');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.inst-section > .container {
  position: relative;
  z-index: 1;
}
.inst-section__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;
}
@media (min-width: 900px) {
  .inst-section__inner { grid-template-columns: 1fr auto; }
}

/* Carousel */
.inst-carousel { width: 100%; max-width: 680px; margin: 0 auto; }
.inst-carousel__stage {
  display: grid;
  grid-template-columns: 64px 1fr 64px;
  align-items: stretch;
  gap: 0.5rem;
}
.inst-carousel__peek {
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  align-items: center;
  min-width: 0;
}
.inst-carousel__peek--left {
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 100%);
  mask-image: linear-gradient(to right, transparent 0%, black 100%);
}
.inst-carousel__peek--right {
  -webkit-mask-image: linear-gradient(to left, transparent 0%, black 100%);
  mask-image: linear-gradient(to left, transparent 0%, black 100%);
}
.inst-carousel__dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.25rem;
}
.inst-carousel__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #e5e9f0;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background 0.25s, transform 0.25s;
}
.inst-carousel__dot.is-active {
  background: #8C1427;
  transform: scale(1.4);
}

/* Shared tile base */
.inst-tile {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: #fff;
  border: 1px solid #e5e9f0;
  border-radius: 10px;
  text-decoration: none;
  transition: box-shadow 0.25s, border-color 0.25s, transform 0.25s;
  min-width: 0;
}

/* Peek tile */
.inst-tile--peek {
  padding: 0.875rem 1rem;
  opacity: 0.35;
  pointer-events: none;
  transform: scale(0.95);
  width: 100%;
  white-space: nowrap;
  flex-shrink: 0;
}
.inst-carousel__peek:hover .inst-tile--peek { opacity: 0.55; }

/* Active (detailed) tile */
.inst-tile--active {
  position: relative;
  padding: 0;
  border-color: transparent;
  box-shadow: 0 12px 40px rgba(10,35,66,0.15), 0 4px 12px rgba(140,20,39,0.1);
  display: grid;
  grid-template-rows: 220px auto;
  align-items: stretch;
  justify-content: flex-start;
  min-height: 480px;
  overflow: hidden;
  border-radius: 16px;
}
.inst-tile--active:hover {
  box-shadow: 0 20px 56px rgba(10,35,66,0.25), 0 8px 24px rgba(140,20,39,0.15);
  border-color: transparent;
  transform: translateY(-4px);
}

/* Active card media/content split */
.inst-tile__media {
  height: 100%;
  min-height: 220px;
  width: 100%;
  overflow: hidden;
  background: #d9dde7;
}
.inst-tile__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.inst-tile__content {
  display: grid;
  grid-template-columns: 210px 1fr;
  gap: 1rem;
  align-items: start;
  align-content: start;
  width: 100%;
  min-height: 0;
  padding: 0.25rem 1.25rem 0.65rem;
}

/* Logo */
.inst-tile__logo {
  flex-shrink: 0;
  width: auto;
  height: auto;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.inst-tile--active .inst-tile__logo {
  margin-bottom: 0;
  justify-content: flex-start;
}
.inst-tile__logo img { width: 120px; height: 120px; object-fit: contain; }
.inst-tile--active .inst-tile__logo img { width: 220px; height: 220px; max-width: 100%; }

/* Body text */
.inst-tile__body { flex: 1; min-width: 0; }
.inst-tile__type {
  display: block;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #8C1427;
  margin-bottom: 0.2rem;
}
.inst-tile__name {
  font-size: 0.9rem;
  font-weight: 700;
  color: #0A2342;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.inst-tile--active .inst-tile__name {
  font-size: 1.22rem;
  white-space: normal;
  margin-bottom: 0.5rem;
}
.inst-tile__desc {
  font-size: 0.82rem;
  color: #546e8a;
  line-height: 1.55;
  margin: 0;
}
.inst-tile__body--active .inst-tile__desc {
  font-size: 0.92rem;
}
.inst-tile__more {
  font-size: 0.85rem;
  color: #6a7c93;
  line-height: 1.55;
  margin: 0.55rem 0 0;
}
.inst-tile__arrow {
  position: absolute;
  right: 1rem;
  bottom: 0.9rem;
  flex-shrink: 0;
  color: #8C1427;
  margin: 0;
  transition: transform 0.2s;
}
.inst-tile--active:hover .inst-tile__arrow { transform: translateX(4px); }

/* ── Slide transitions ── */

/* Stage has perspective so rotateY works on children */
.inst-carousel__stage { perspective: 1100px; }

.inst-carousel__slot {
  position: relative;
  overflow: visible;
  border-radius: 10px;
  min-height: 480px;
  padding: 30px;
  margin: -30px;
}

@media (max-width: 640px) {
  .inst-tile__content {
    grid-template-columns: 1fr;
  }

  .inst-tile--active .inst-tile__logo {
    justify-content: center;
  }
}

/* Entering tile slides in on top (z-index 2) with a 3D twist */
.slide-right-enter-active,
.slide-left-enter-active {
  position: relative;
  z-index: 2;
  transition: transform 0.52s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease;
}
/* Leaving tile recedes behind — absolute so it doesn't affect layout */
.slide-right-leave-active,
.slide-left-leave-active {
  position: absolute;
  inset: 0;
  z-index: 1;
  transition: transform 0.52s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.45s ease;
  pointer-events: none;
  border-radius: 10px;
  overflow: hidden;
}

/* slide-right (going forward): new enters from right with inward tilt, old recedes left + rotates away */
.slide-right-enter-from { transform: translateX(110%) rotateY(-12deg); opacity: 0.6; }
.slide-right-enter-to   { transform: translateX(0)    rotateY(0deg);   opacity: 1; }
.slide-right-leave-from { transform: translateX(0)   scale(1)    rotateY(0deg);   opacity: 1; }
.slide-right-leave-to   { transform: translateX(-20%) scale(0.78) rotateY(10deg); opacity: 0.08; }

/* slide-left (going back): new enters from left with inward tilt, old recedes right + rotates away */
.slide-left-enter-from  { transform: translateX(-110%) rotateY(12deg);  opacity: 0.6; }
.slide-left-enter-to    { transform: translateX(0)     rotateY(0deg);   opacity: 1; }
.slide-left-leave-from  { transform: translateX(0)    scale(1)    rotateY(0deg);    opacity: 1; }
.slide-left-leave-to    { transform: translateX(20%)  scale(0.78) rotateY(-10deg);  opacity: 0.08; }

/* Active tile glows more when animating (sense of coming forward) */
.is-animating .inst-tile--active {
  box-shadow: 0 20px 56px rgba(140,20,39,0.22), 0 4px 16px rgba(10,35,66,0.12);
}

/* ── Peek tile transitions ── */
.peek-fade-enter-active { transition: opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s; }
.peek-fade-leave-active { transition: opacity 0.18s ease,   transform 0.18s ease; }
.peek-fade-enter-from   { opacity: 0; transform: scale(0.88) translateY(8px); }
.peek-fade-leave-to     { opacity: 0; transform: scale(0.88) translateY(-8px); }

/* When going right: dim the right peek (it's about to become active) */
.is-animating.stage--right .inst-carousel__peek--right .inst-tile--peek {
  opacity: 0.12;
  transition: opacity 0.35s ease;
}
/* When going left: dim the left peek */
.is-animating.stage--left .inst-carousel__peek--left .inst-tile--peek {
  opacity: 0.12;
  transition: opacity 0.35s ease;
}

/* Person + Board Chair caption */
.inst-section__header {
  text-align: center;
  margin-bottom: 2.5rem;
}
.inst-section__eyebrow {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #8C1427;
  margin-bottom: 0.5rem;
}
.inst-section__title {
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 700;
  color: #0A2342;
  line-height: 1.2;
}
/* Quote Banner */
.quote-banner {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  max-width: 430px;
  margin-left: auto;
  margin-right: auto;
  transition: transform 0.3s ease;
}
.quote-banner:hover {
  transform: translateY(-4px);
}
.quote-banner__person {
  width: 100%;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-top: 1.5rem;
}
.quote-banner__person img {
  width: 85%;
  max-height: 240px;
  object-fit: contain;
  object-position: bottom;
  display: block;
  filter: grayscale(15%);
  transition: filter 0.3s ease;
}
.quote-banner:hover .quote-banner__person img {
  filter: grayscale(0%);
}
.quote-banner__content {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(10, 35, 66, 0.08), 0 2px 10px rgba(140, 20, 39, 0.05);
  padding: 2.5rem 3rem 2.5rem 2rem;
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: box-shadow 0.3s ease;
}
.quote-banner:hover .quote-banner__content {
  box-shadow: 0 16px 50px rgba(10, 35, 66, 0.12), 0 4px 15px rgba(140, 20, 39, 0.08);
}
.quote-banner__icon {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
}
.quote-banner__text {
  margin: 0 0 1.25rem;
  font-size: 1.05rem;
  font-style: italic;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: #0A2342;
  line-height: 1.6;
  position: relative;
  z-index: 1;
}
.quote-banner__author {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.quote-banner__line {
  width: 40px;
  height: 2px;
  background: linear-gradient(to right, #8C1427, #c9412e);
  flex-shrink: 0;
}
.quote-banner__author strong {
  display: block;
  color: #8C1427;
  font-weight: 700;
  font-size: 1rem;
}
.quote-banner__author span {
  font-size: 0.85rem;
  color: #546e8a;
}
@media (max-width: 768px) {
  .quote-banner {
    flex-direction: column;
    margin-top: 2rem;
    border-left: none;
    border-top: 4px solid #8C1427;
  }
  .quote-banner__person {
    width: 100%;
    height: 200px;
  }
  .quote-banner__content {
    padding: 2rem;
  }
}

/* ── Partners ── */
.partners { padding: 3rem 0; border-top: 1px solid #f0f2f6; }
.partners__label {
  text-align: center;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #9ca3af;
  margin-bottom: 2rem;
}
.partners__logos {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.5rem;
}
.partners__logo img {
  height: 40px;
  width: auto;
  object-fit: contain;
  filter: grayscale(1);
  opacity: 0.5;
  transition: opacity 0.2s, filter 0.2s;
}
.partners__logo:hover img { filter: grayscale(0); opacity: 1; }

/* ── CTA ── */
.cta-banner {
  background: #0A2342;
  padding: 4rem 0;
}
.cta-banner__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
}
.cta-banner__title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
}
.cta-banner__sub {
  font-size: 0.95rem;
  color: rgba(255,255,255,0.65);
}
.cta-banner__actions {
  display: flex;
  gap: 0.875rem;
  flex-wrap: wrap;
}
</style>
