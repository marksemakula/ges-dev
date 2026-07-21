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
          <span>Gombe Education Service has provided world-class education since 2013 - fostering academic excellence, character, and global readiness across our network of institutions.</span>
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
          <div class="hero-cine__strip-block">
            <span class="hero-cine__strip-label">Recognised by</span>
            <div class="hero-cine__strip-logos">
              <img
                v-for="logo in recognisedBy"
                :key="logo.name"
                :src="logo.src"
                :alt="logo.name"
                :title="logo.name"
                :style="{ '--logo-scale': logoScales[logo.name] || 1, '--gap-mult': gapBefore[logo.name] || 1 }"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Mission statement (rescue.org rplc-infographic-standard) ── -->
    <section class="rpl-section">
      <div class="container-rpl">
        <div class="rpl-section-heading rpl-section-heading--center">
          <span class="rpl-section-heading__float" aria-hidden="true">Mission</span>
          <h2 class="rpl-section-heading__title">We nurture academic excellence, character and global readiness</h2>
          <p class="rpl-section-heading__intro">
            A consortium of institutions providing quality holistic education from Kindergarten to Tertiary level across Uganda - all embracing the same vision and mission.
          </p>
        </div>

        <!-- GES Journey Preface -->
        <div class="ges-journey-preface">
          <div class="ges-journey-preface__card">
            <span class="rpl-slug ges-journey-preface__slug">The GES Journey</span>
            <blockquote class="ges-journey-preface__quote">
              &ldquo;Our vision has always been to provide learners with a complete educational journey. The future holds tremendous promise for Gombe Education Service, and we look forward to shaping it together with our learners, parents, staff, partners, and the communities we proudly serve.&rdquo;
            </blockquote>
            <div class="ges-journey-preface__action">
              <button @click="openJourneyModal" class="btn-rescue btn-rescue--primary" aria-haspopup="dialog" aria-controls="journey-modal">
                Read the GES Journey
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Leadership quote: full-width black band ── -->
    <section class="quote-band">
      <div class="container-rpl quote-band__inner">
        <div class="quote-band__media quote-band__media--left">
          <img src="/images/Owek. Kyewalabye David Male.png" alt="Owek. Kyewalabye Male David" />
          <div class="quote-band__author">
            <strong>Owek. Kyewalabye Male David</strong>
            <span>Co-Founder & Executive Director, Gombe Education Service</span>
          </div>
        </div>
        <div class="quote-band__content">
          <span class="quote-band__mark" aria-hidden="true">&ldquo;</span>
          <blockquote class="quote-band__text">
            Our institutions are built on the conviction that every child deserves an education that nurtures their full potential - academically, morally, and as a citizen of the world.
          </blockquote>
          <div class="quote-band__btn-wrap">
            <span class="quote-band__btn-float" aria-hidden="true">Leadership</span>
            <RouterLink to="/leadership" class="btn-rescue btn-rescue--primary quote-band__btn">Meet Our Leadership</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Institutions: highlighted teaser + scroll-snap carousel ── -->
    <section class="rpl-section rpl-section--grey">
      <div class="container-rpl">
        <div class="rpl-section-heading">
          <span class="rpl-section-heading__float" aria-hidden="true">Institutions</span>
          <h2 class="rpl-section-heading__title">Institutions Under GES</h2>
        </div>

        <div class="teaser-hl">
          <NuxtLink :to="institutions[0].path" :aria-label="institutions[0].name" class="teaser-hl__link">
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
          </NuxtLink>
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
              <NuxtLink :to="inst.path" :aria-label="inst.name" class="teaser-std__link">
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
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="partners-marquee">
          <ClientOnly>
            <Vue3Marquee :duration="40" :pause-on-hover="true" :clone="true" :gradient="true" :gradient-color="[240, 240, 240]" gradient-length="150px">
              <div v-for="logo in partnerLogos" :key="logo.name" class="partners-marquee__item" :title="logo.name">
                <img :src="logo.src" :alt="logo.name" class="partners-marquee__logo" />
              </div>
            </Vue3Marquee>
            <!-- Server-rendered fallback: keeps partner logos in the crawlable HTML -->
            <template #fallback>
              <div class="partners-marquee__static" style="display:flex;flex-wrap:wrap;gap:2rem;align-items:center;justify-content:center;">
                <div v-for="logo in partnerLogos" :key="logo.name" class="partners-marquee__item" :title="logo.name">
                  <img :src="logo.src" :alt="logo.name" class="partners-marquee__logo" />
                </div>
              </div>
            </template>
          </ClientOnly>
        </div>
      </div>
    </section>

    <!-- ── News: editorial zigzag grid ── -->
    <section id="news" class="rpl-section">
      <div class="container-rpl">
        <div class="rpl-section-heading">
          <span class="rpl-section-heading__float" aria-hidden="true">Blogs</span>
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
          <span class="rpl-section-heading__float" aria-hidden="true">Community</span>
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

    <!-- ── GES Journey Modal ── -->
    <Teleport to="body">
      <Transition name="journey-modal-fade">
        <div v-if="isJourneyModalOpen" class="journey-modal-backdrop" @click="closeJourneyModal">
          <div class="journey-modal" @click.stop role="dialog" aria-modal="true" aria-labelledby="journey-modal-title" id="journey-modal">
            <!-- Modal Header -->
            <div class="journey-modal__header">
              <div class="journey-modal__title-area">
                <span class="rpl-slug journey-modal__slug">GES History</span>
                <h2 id="journey-modal-title" class="journey-modal__title">The GES Journey</h2>
                <p class="journey-modal__subtitle">A Dozen Questions with the Director of Gombe Education Service</p>
              </div>
              <button class="journey-modal__close-btn" @click="closeJourneyModal" aria-label="Close modal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>

            <!-- Modal Body (Scrollable) -->
            <div class="journey-modal__body">
              <!-- Interview Preface Intro -->
              <div class="journey-modal__intro">
                <div class="journey-modal__intro-text">
                  <p>
                    For more than a decade, Gombe Education Service (GES) has grown from a single vision into one of Uganda's leading education providers, offering holistic learning from early childhood to higher education. Behind this remarkable journey is <strong>Owekitiibwa Kyewalabye Male David</strong>, whose passion for transforming education was inspired by his own experiences as a parent.
                  </p>
                  <p>
                    In this exclusive interview, he shares the story behind the founding of GES, the challenges that shaped its growth, and the vision that continues to inspire its future.
                  </p>
                </div>
                <div class="journey-modal__intro-media">
                  <img src="/images/Owek. Kyewalabye David Male.png" alt="Owekitiibwa Kyewalabye Male David" class="journey-modal__director-img" />
                </div>
              </div>

              <!-- Q&A List -->
              <div class="journey-modal__qa-list">
                <div v-for="(qa, index) in interviewQA" :key="index" class="journey-modal__qa-item">
                  <h3 class="journey-modal__question">
                    <span class="journey-modal__question-number">{{ index + 1 }}</span>
                    {{ qa.question }}
                  </h3>
                  <div class="journey-modal__answer">
                    <p v-for="(p, pIdx) in qa.paragraphs" :key="pIdx">{{ p }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Modal Footer -->
            <div class="journey-modal__footer">
              <button @click="closeJourneyModal" class="btn-rescue btn-rescue--outline">
                Close Reader
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Vue3Marquee } from 'vue3-marquee';

/* ── Hero slideshow (single full-bleed crossfade + ken burns) ── */
const slideshowImages = [
  '/images/slideshow/slideshow_4.jpg',
  '/images/slideshow/slideshow_6.jpg',
  '/images/slideshow/IMG_6935.JPG',
  '/images/slideshow/prayer.jpg',
  '/images/slideshow/hero-triptych-gulu.jpeg',
  '/images/slideshow/IMG_9718.JPG',
  '/images/slideshow/_MG_7424.JPG',
  '/images/slideshow/slideshow_11.png',
];
const currentSlide = ref(0);
let slideTimer: ReturnType<typeof setInterval> | null = null;

/* ── GES Journey Modal ── */
const isJourneyModalOpen = ref(false);

function openJourneyModal() {
  isJourneyModalOpen.value = true;
  document.body.style.overflow = 'hidden';
}

function closeJourneyModal() {
  isJourneyModalOpen.value = false;
  document.body.style.overflow = '';
}

function handleKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape' && isJourneyModalOpen.value) {
    closeJourneyModal();
  }
}

onMounted(() => {
  slideTimer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slideshowImages.length;
  }, 6000);
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  if (slideTimer) clearInterval(slideTimer);
  window.removeEventListener('keydown', handleKeyDown);
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
  { name: 'Ministry of Education',   src: '/images/MoES1.png' },
  { name: 'British Council',         src: '/images/British Council.png' },
  { name: 'Kingdom of Buganda',      src: '/images/Flag_of_Buganda.svg' },
  { name: 'Braemar College',         src: '/images/braemar.webp' },
  { name: 'SAI',                     src: '/images/sai-brand-logo.png' },
  { name: 'IEAC',                    src: '/images/IEAC.png' },
  { name: 'UNESCO',                  src: '/images/UNESCO.png' },
  { name: 'Microsoft Education',     src: '/images/MicroSoft Education.png' },
  { name: 'World Bank',              src: '/images/World Bank.png' },
  { name: 'University of Cambridge', src: '/images/University_of_Cambridge-Logo.png' },
  { name: 'Aga Khan Foundation',     src: '/images/Aga Khan Foundation.png' },
  { name: 'NCHE',                    src: '/images/NCHE.png' },
]

/* Height multiplier per logo (1 = base size) */
const logoScales: Record<string, number> = {
  'British Council': 2,
  'University of Cambridge': 2,
  'Microsoft Education': 2,
  'NCHE': 2,
  'Aga Khan Foundation': 2,
  'World Bank': 2.2,
  'UNESCO': 2.8,
  'IEAC': 1.4,
  'SAI': 1.1,
};
/* Gap to the left neighbour, in multiples of the base gap (1 = base) */
const gapBefore: Record<string, number> = {
  'Braemar College': 2,
  'SAI': 4,
  'KISU': 4,
  'IEAC': 4,
  'UNESCO': 2,
  'Microsoft Education': 2,
  'World Bank': 2,
};

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
  { name: 'Gombe Junior School - Kampala', type: 'UNEB Licensed Primary School', logo: '/images/Gombe Junior School logo.png', image: '/images/GJS - Kampala.JPG', path: '/institutions/gjs-kampala', url: 'http://gombejuniorschool.ac.ug/', description: 'Building strong foundations for lifelong learning.' },
  { name: 'Gombe Junior School - Gulu', type: 'UNEB Licensed Primary School', logo: '/images/Gombe Junior School logo.png', image: '/images/GJS Gulu class.jpeg', path: '/institutions/gjs-gulu', url: 'http://gombejuniorschool.ac.ug/', description: 'Extending foundational education excellence to Northern Uganda.' },
  { name: 'St. Andrew Kaggwa Gombe High School - Kawaala', type: 'Secondary School', logo: '/images/Gombe High logo.png', image: '/images/IMG_9718.JPG', path: '/institutions/sakghs-kawaala', url: 'http://gombehighschool.ac.ug/', description: 'Advanced secondary education with a focus on academic excellence.' },
  { name: 'ScoobyDoo International School Uganda - Gulu', type: 'International School', logo: '/images/scooby-logo.png', image: '/images/hero-triptych-gulu.jpeg', path: '/institutions/sisu-gulu', url: 'http://scoobydoointernational.ac.ug/', description: 'Bringing international education to Northern Uganda.' },
  { name: 'St. Andrew Kaggwa Gombe High School - Bujuuko', type: 'Secondary School', logo: '/images/Gombe High logo.png', image: '/images/Gombe High School - Bujuuko.png', path: '/institutions/sakghs-bujuuko', url: 'http://gombehighschool.ac.ug/', description: 'Nurturing tomorrow\'s leaders through quality education.' },
  { name: 'Gombe Institute of Business Science & Technology (GIBST)', type: 'Vocational Institute', logo: '/images/Jimmy Ssekasi Business Institute Logo.png', image: '/images/JIMMY SEKASI.JPG', path: '/institutions/jsbi', url: 'http://gibst.ac.ug/', description: 'Equipping students with practical business, vocational, and hands-on skills.' },
];

/* ── Featured posts (from GES Blog) ── */
const featuredPosts = [
  { id: '1', title: 'The Future of Education: Embracing Digital Learning', excerpt: 'Exploring how digital transformation is reshaping the educational landscape and preparing students for tomorrow\'s challenges.', category: 'Innovation', image: '/images/Future of Education, Embracing Digital Learning.png' },
  { id: '2', title: 'Building Character Through Education', excerpt: 'How GES integrates character development into our curriculum to nurture well-rounded individuals.', category: 'Character', image: '/images/IMG_1707.JPG' },
  { id: '3', title: 'STEM Education Excellence at GES', excerpt: 'Discover how our STEM programmes are preparing students for careers in science, technology, engineering, and mathematics.', category: 'STEM', image: '/images/IMG_9718.JPG' },
];

/* ── Get involved ── */
const involved = [
  { title: 'Calendar', path: '/academic-calendar', image: '/images/SISU-Kampala53.jpeg', desc: 'View term dates, holidays, and key events across all GES institutions.' },
  { title: 'Mentorship', path: '/mentorship', image: '/images/Mentorship.jpeg', desc: 'Connect with mentors and grow through guidance from the GES community.' },
  { title: 'International Pathway', path: '/international-pathway', image: '/images/ieppheader.png', desc: 'Discover the International Pathway Programme and global study opportunities.' },
];

/* ── The GES Journey Interview Q&A ── */
const interviewQA = [
  {
    question: "How did you start Gombe Education Service Schools?",
    paragraphs: [
      "Our journey began with a simple conversation and a shared dream.",
      "At that time, our eldest sons were studying at a boarding school where my wife had developed a close friendship with one of the deputy head teachers, Mr. Ssekitoleko Zaake. When he was transferred to head another branch of the same school, my wife visited him to congratulate him. During their conversation, he suggested that we should consider starting a school of our own.",
      "She later arranged a meeting between Mr. Ssekitoleko and me. After extensive discussions, we agreed to pursue the idea together. His proposal was to establish both a nursery and primary school on the same site where I operated a poultry project. However, I believed that nursery and primary learners deserved separate environments tailored to their different developmental needs.",
      "I therefore revisited the owners of Stella Maris Primary School in Kikajjo, whom I had previously approached about purchasing the school. Fortunately, they agreed to sell it to us.",
      "We immediately began renovating the old and dilapidated facilities, transforming Stella Maris Primary School into what is now Gombe Junior School, our boarding primary school. At the same time, we converted the former poultry houses into Scooby Doo Care and Nursery School, creating a dedicated nursery that would serve as a feeder to the primary school.",
      "In 2013, both schools officially opened their doors to the public, marking the beginning of what has since grown into Gombe Education Service.",
      "The transition was not without challenges. We revised the school fees from UGX 200,000 to UGX 800,000 for boarding learners and from UGX 70,000 to UGX 500,000 for day scholars. As expected, many families were unable to continue, and only two learners remained from Stella Maris Primary School. One of them, Nakkazi Rachael, is today a teacher at Gombe Junior School—a testament to the lasting impact of the GES journey."
    ]
  },
  {
    question: "What was life like for you as a parent before starting Gombe Schools?",
    paragraphs: [
      "My experiences as a parent greatly influenced the vision behind Gombe Education Service.",
      "One of my greatest frustrations involved my eldest son, Timothy, who is naturally left-handed. At nursery school, he was forced to write with his right hand, despite this going against the way he naturally learned. Watching my child struggle simply because the education system failed to appreciate individual differences deeply concerned me.",
      "My second son, Titus, was an exceptionally talented pianist at church. However, after spending just one term in boarding school, his piano skills began to decline. When I asked why, he explained that there was no piano at school. It saddened me to see such a remarkable talent left unsupported simply because the learning environment did not value co-curricular development.",
      "These experiences convinced me that education should nurture every aspect of a child's potential—not just academic achievement.",
      "My wife also faced daily challenges with our younger children who attended day school. She had to wake up as early as 4:00 a.m. to prepare them before the morning traffic. After returning home late each evening, she still had to supervise homework, leaving little time for family life.",
      "Gradually, our home had become an extension of the classroom. We believed there had to be a better way."
    ]
  },
  {
    question: "Why did you choose to start Gombe Education Service Schools?",
    paragraphs: [
      "Our personal experiences inspired a much bigger vision.",
      "We wanted to build schools that provide holistic education—where academic excellence is balanced with character development, creativity, sports, music, technology, leadership, and life skills. We envisioned schools where every child could discover and develop their unique talents while enjoying a happy and fulfilling learning experience.",
      "Our mission was to spare other parents from the frustrations we had encountered. We believed that the challenges we experienced should become opportunities for other families to enjoy a better education.",
      "From the very beginning, we wanted children to arrive at school well-rested, healthy, and ready to learn rather than exhausted from early morning routines. We also sought to reduce unnecessary homework, allowing families to spend meaningful time together instead of turning every evening into another school session.",
      "These principles became the foundation upon which Gombe Education Service was built and continue to guide us today as we strive to nurture learners who are academically competent, morally upright, creative, confident, and prepared to make a positive impact on society."
    ]
  },
  {
    question: "Why the names Scooby Doo and Gombe?",
    paragraphs: [
      "Every name tells a story, and the names of our schools reflect both our commitment to children and our respect for the legacy of education.",
      "Scooby Doo was one of the most popular cartoon characters among young children on M-Net at the time. We chose the name because it was familiar, cheerful, and immediately connected with children. We wanted our nursery school to be a place where learning began with joy, curiosity, and happiness.",
      "The name Gombe carries a much deeper personal significance. It was the name of my late grandfather, a man whose passion for education profoundly shaped my life. He was my first teacher, educating us at home before taking us to school each day on his bicycle, as there were no cars available.",
      "His commitment to education was extraordinary. I vividly remember a time when strong winds blew the roof off one of the classrooms at the local school. Without hesitation, he dismantled the iron sheets from our family bathroom and donated them to help restore the classroom. His selflessness and belief in the transformative power of education left an enduring impression on me.",
      "Naming our schools after him is our way of honouring his legacy and ensuring that his passion for learning continues to inspire future generations."
    ]
  },
  {
    question: "Most schools combine day and boarding learners. Why did you choose to establish separate schools?",
    paragraphs: [
      "Our decision was driven by the desire to provide the best possible learning experience for every child.",
      "Boarding learners have a very different daily routine from day scholars. They begin their academic activities before 7:00 a.m. and often continue learning until after 8:00 p.m. During weekends and public holidays, they also participate in structured academic programmes.",
      "Many parents of day scholars felt their children were disadvantaged and therefore insisted on extra evening \"prep\" lessons to keep pace with their boarding counterparts. We realised that both groups had unique needs that could be better served in separate learning environments.",
      "In 2019, we established a dedicated day school designed specifically for day learners and their families. This model allows each school to provide programmes that best suit the lifestyle, wellbeing, and learning needs of its students."
    ]
  },
  {
    question: "Along the way, you ventured into secondary education. Why?",
    paragraphs: [
      "As our learners completed primary school, many parents expressed concern that they struggled to adjust to the secondary schools they joined.",
      "After experiencing Gombe Junior School's holistic approach to education, they found themselves in environments that placed almost exclusive emphasis on academics. They missed the balanced lifestyle they had become accustomed to—including co-curricular activities, ICT integration, nutritious meals, leadership opportunities, clubs, life skills, and values-based education.",
      "Listening to the voices of our parents and learners, we recognised the need to provide continuity.",
      "This inspired us to acquire St. Andrew Kaggwa and Daniels Primary and Secondary Schools, which we transformed into Gombe High School – Kawaala, officially opening in 2016.",
      "Our journey continued in 2022 with the acquisition of King's College Bujuuko, which became Gombe High School – Bujuuko and welcomed its first learners in 2023.",
      "Today, both campuses continue the GES philosophy of holistic education, preparing students not only for academic success but also for responsible leadership and lifelong achievement."
    ]
  },
  {
    question: "The International Pathway Programme is now part of the GES brand. What inspired it?",
    paragraphs: [
      "The International Pathway Programme (IPP) was born from our own family's experience.",
      "After our eldest son, Timothy, completed his education at Rainbow International School, we found that there were limited opportunities in Uganda that aligned with his academic aspirations. We therefore enrolled him at Braemar College in Toronto, Canada.",
      "We discovered that students wishing to join Canadian universities after O-Level are required to complete the Ontario Secondary School Diploma (OSSD) as a preparatory qualification.",
      "This inspired a partnership with Braemar College to enable East African students to study the OSSD while remaining in Uganda for one year before proceeding to university abroad. The programme proved to be both affordable and practical. It allowed students to remain close to their families during an important stage of their development while significantly reducing the time and cost of pursuing international education.",
      "As demand grew, we expanded the initiative beyond Canada by transforming the Canada Pathway Programme (CPP) into the International Pathway Programme (IPP).",
      "Today, IPP provides students with affordable pathways to quality universities in Canada, the United Kingdom, the United States, Germany, Australia, Cyprus, the United Arab Emirates, and other international destinations, opening doors to a truly global education."
    ]
  },
  {
    question: "GES recently acquired Jimmy Sekasi Business Institute (JSBI). Why the move into higher education?",
    paragraphs: [
      "Our vision has always been to provide learners with a complete educational journey.",
      "The knowledge, skills, and values we nurture from nursery through secondary education reach their fullest potential when learners have opportunities to continue into higher education within the same philosophy of excellence.",
      "To complete this educational pathway, we acquired Jimmy Sekasi Business Institute (JSBI) and established the Gombe Institute of Business, Science and Technology (GIBST).",
      "Our goal is to produce graduates who are academically competent, professionally skilled, innovative, and ready to contribute meaningfully to society. Looking ahead, we aspire to expand our programmes and eventually offer university degree courses, making GES a comprehensive centre for lifelong learning."
    ]
  },
  {
    question: "Every success comes with challenges. What have been the biggest obstacles during this journey?",
    paragraphs: [
      "Like every worthwhile journey, ours has been marked by significant challenges.",
      "One of the most difficult moments was parting ways with the principal with whom we had originally shared the vision of building a truly holistic school. Although our paths eventually diverged, his contribution to laying the foundation of GES remains an important part of our story.",
      "The education sector has also become increasingly competitive, with substantial investment driving up operational costs. New schools are often compelled to invest at levels previously associated with long-established institutions, making sustainable growth much more difficult.",
      "Another challenge has been the tendency for many parents to judge schools solely by examination results. While academic excellence is important, we believe education should also develop character, creativity, leadership, practical skills, and values. Holistic education requires investment in sports facilities, ICT infrastructure, science laboratories, clubs, and enrichment programmes—areas that deserve greater support from all stakeholders.",
      "The COVID-19 pandemic presented perhaps our greatest test. School closures, declining enrolment, continuing loan obligations, and the responsibility of supporting staff created unprecedented pressure on the institution.",
      "On a personal level, the greatest loss was the passing of my wife and fellow Director, whose unwavering commitment helped shape Gombe Education Service. She devoted herself tirelessly to the schools and was a passionate advocate for the education and empowerment of the girl child.",
      "Today, of the three individuals who first envisioned GES, I am the only one still here. Yet despite every challenge, our mission has remained unchanged. With faith in God, the dedication of our staff, and the continued trust of our parents and learners, we have remained resilient and continue to move forward with confidence."
    ]
  },
  {
    question: "How have you been able to overcome these challenges and achieve this level of success?",
    paragraphs: [
      "Our greatest strength has been the people who believe in and share our vision. Over the years, we have been blessed with committed teams who understand what Gombe Education Service stands for and have remained dedicated to our mission of providing holistic education.",
      "Our governance boards have also played an invaluable role from the very beginning. Their guidance, support, and strategic oversight have helped us navigate challenges and remain focused on our long-term goals.",
      "Our parents have been another pillar of our success. They believed in us even when our infrastructure was far from ideal. Beyond paying school fees, many became ambassadors for our schools by recommending us to other families, donating books, contributing resources, and supporting school events. Their trust gave us the confidence to continue growing.",
      "Our learners themselves have been our greatest testimony. Many choose to remain with us throughout their educational journey because of the unique care, values, and learning environment we provide. Even when circumstances lead parents to transfer them elsewhere, many learners express a strong desire to return, reflecting the lasting impact of the GES experience.",
      "I am also deeply grateful to my family, especially my late wife, Rose. She stood by the schools through every stage of their growth and remained fully committed until her passing. During the COVID-19 lockdown, I remember her waking up early every morning to prepare Zoom lesson meeting IDs and personally following every lesson from Nursery through Senior Six. She devoted her life to ensuring that our learners continued receiving quality education despite the challenges.",
      "Above all, we acknowledge that every success we have achieved has been by God's grace. Throughout our journey, the Church has been a constant source of encouragement and support. In particular, I am grateful to Bishop Wilberforce Kityo Luwalira, who has stood with our family and Gombe Education Service through both our triumphs and our most difficult moments."
    ]
  },
  {
    question: "As an experienced school proprietor, what advice would you give to parents and fellow school owners?",
    paragraphs: [
      "Parents play a vital role in their children's education. Their responsibility goes far beyond paying school fees. They should actively participate in school life, maintain close relationships with teachers, and remain involved in their children's academic, emotional, and personal development. Education is a shared responsibility, and teachers and parents are partners in raising the next generation.",
      "To fellow school proprietors, I encourage us to work together in restoring an education system that develops the whole child rather than focusing solely on examination results. Academic excellence is important, but it should be complemented by character formation, creativity, innovation, leadership, practical skills, and strong values.",
      "Every school, regardless of its size or resources, can contribute to nurturing learners who are confident, compassionate, and prepared to solve the challenges of tomorrow.",
      "I also encourage school owners to build institutions that can outlive them. Strong governance, capable leadership, and sustainable systems ensure that a school's vision continues to thrive even after its founders have retired or are no longer present."
    ]
  },
  {
    question: "Paint for us a picture of the future of Gombe Education Service.",
    paragraphs: [
      "The future of Gombe Education Service is one of continued growth, innovation, and greater impact.",
      "As we embark on the next chapter of our journey, our ambition is to extend our influence beyond our school campuses into the communities we serve, across Uganda, and throughout the world. We aspire to produce graduates who are not only academically accomplished but also ethical leaders, responsible citizens, and agents of positive change.",
      "Our vision is for GES to become a place where our values are not merely displayed on classroom walls or recited during assemblies, but are lived every day by our learners, staff, alumni, and the wider community.",
      "We aim to be a centre of educational excellence that inspires others through innovation, holistic learning, and a steadfast commitment to developing the full potential of every learner.",
      "As we continue to expand our educational pathways—from early childhood through higher education—we remain guided by the same purpose that inspired our founding: to transform lives through education that prepares learners for success in school, in life, and in service to society.",
      "The future holds tremendous promise for Gombe Education Service, and we look forward to shaping it together with our learners, parents, staff, partners, and the communities we proudly serve."
    ]
  }
];
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/times-new-roman');

.container-rpl {
  max-width: 1400px;
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
  background-attachment: fixed;
  /* Zoom OUT (1.08 -> 1) rather than in: the browser rasterises the layer
     once, so ending at scale(1) keeps the frame pixel-crisp instead of
     GPU-upscaled and blurry. Duration ~= the 6s slide interval. */
  animation: hero-kenburns 7s ease-out forwards;
  will-change: transform;
  backface-visibility: hidden;
}
@keyframes hero-kenburns {
  from { transform: scale(1.08) translateZ(0); }
  to   { transform: scale(1) translateZ(0); }
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
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.7)) drop-shadow(0 6px 24px rgba(0,0,0,0.55));
}
.hero-cine__title {
  font-size: clamp(2.6rem, 6vw, 4.4rem);
  font-weight: 800;
  line-height: 1.06;
  letter-spacing: -0.02em;
  color: #fff;
  text-shadow: 0 2px 6px rgba(0,0,0,0.8), 0 4px 28px rgba(0,0,0,0.6);
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
  line-height: 1.5;
  color: #1A1A1A;
  max-width: 560px;
}
.hero-cine__text span {
  background: #FFC72C;
  padding: 0.25em 0.4em;
  display: inline;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
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
  flex-direction: column;
  align-items: center;
  padding: 1rem 1.5rem;
  max-width: none;
  width: 100%;
}
.hero-cine__strip-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  max-width: 100%;
  gap: 0.75rem;
}
.hero-cine__strip-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--rescue-text-secondary, #555);
  flex-shrink: 0;
}
.hero-cine__strip-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 0.375rem;
  max-width: 100%;
}
.hero-cine__strip-logos img {
  flex-shrink: 0;
  height: calc(clamp(20px, 2vw, 40px) * var(--logo-scale, 1));
  width: auto;
  margin-left: calc(0.375rem * (var(--gap-mult, 1) - 1));
  opacity: 0.9;
  transition: opacity 0.2s;
}
.hero-cine__strip-logos img:hover { opacity: 1; }
@media (max-width: 767px) {
  .hero-cine__strip-logos { flex-wrap: wrap; }
}

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
.quote-band__media img {
  width: 100%;
  max-width: 280px;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  object-position: center top;
  margin: 0 auto;
  display: block;
  filter: grayscale(1) contrast(1.05);
}
.quote-band__media--left img {
  box-shadow: 12px 12px 0 var(--rescue-yellow, #FFC72C);
}
.quote-band__content {
  position: relative;
}
@media (max-width: 1023px) {
  .quote-band__content {
    order: -1;
    text-align: center;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .quote-band__inner {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
  .quote-band__content {
    grid-column: 1 / -1;
  }
  .quote-band__media--left {
    justify-self: right;
  }
}
@media (min-width: 1024px) {
  .quote-band__inner {
    grid-template-columns: 280px 1fr;
    gap: 4rem;
  }
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
  font-size: clamp(1.15rem, 2.2vw, 1.5rem);
  font-weight: 700;
  line-height: 1.4;
  color: #fff;
}
.quote-band__media .quote-band__author {
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}
.quote-band__author strong { font-size: 1rem; color: var(--rescue-yellow, #FFC72C); }
.quote-band__author span { font-size: 0.85rem; color: rgba(255, 255, 255, 0.65); margin-top: 2px; }
.quote-band__btn-wrap {
  position: relative;
  display: inline-block;
  margin-top: 1.75rem;
}
.quote-band__btn-float {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-22%, -15%);
  width: max-content;
  white-space: nowrap;
  font-size: clamp(2rem, 5vw, 3.25rem);
  font-weight: 800;
  text-transform: uppercase;
  color: #f2f2f2;
  opacity: 0.08;
  letter-spacing: 0.02em;
  pointer-events: none;
  z-index: 0;
}
.quote-band__btn {
  position: relative;
  z-index: 1;
  margin-top: 0;
}

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
  position: relative;
  background: linear-gradient(105deg, #FFD35C 0%, var(--rescue-yellow, #FFC72C) 45%, #F0B814 100%);
  padding: 2.5rem 0;
  overflow: hidden;
}
.cta-band::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/images/footer.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: grayscale(100%);
  opacity: 0.08;
  pointer-events: none;
}
.cta-band__inner {
  position: relative;
  z-index: 1;
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

/* ── GES Journey Preface ── */
.ges-journey-preface {
  margin-top: 1.5rem;
}
.ges-journey-preface__card {
  max-width: 100%;
  background: var(--rescue-white, #ffffff);
  border: 1px solid var(--rescue-border, #E0E0E0);
  border-left: 6px solid var(--rescue-yellow, #FFC72C);
  padding: 1.5rem 2rem;
  text-align: left;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}
.ges-journey-preface__slug {
  margin-bottom: 0.75rem;
}
.ges-journey-preface__quote {
  font-family: 'Times New Roman', Times, Georgia, serif !important;
  font-size: clamp(0.95rem, 1.4vw, 1.15rem);
  font-weight: 500;
  line-height: 1.5;
  color: var(--rescue-charcoal, #3D3D3D);
  margin-bottom: 1rem;
  font-style: italic;
  text-align: justify;
}
.ges-journey-preface__action {
  display: flex;
  justify-content: flex-start;
}

/* ── GES Journey Modal ── */
.journey-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(26, 26, 26, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}
.journey-modal {
  background: #ffffff;
  width: 100%;
  max-width: 900px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.4);
  border-top: 5px solid #8C1427; /* Brand Burgundy */
  outline: none;
  position: relative;
  border-radius: 0;
  overflow: hidden;
}
.journey-modal::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/images/Mrs. Rosalind Tanayita Kyewalabye.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 0.12;
  pointer-events: none;
  z-index: 0;
}
.journey-modal__header {
  padding: 2rem 2.5rem 1.5rem;
  border-bottom: 1px solid var(--rescue-border, #E0E0E0);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
  background: #ffffff;
  position: relative;
  z-index: 2;
}
.journey-modal__title-area {
  flex: 1;
}
.journey-modal__slug {
  margin-bottom: 0.5rem;
}
.journey-modal__title {
  font-size: clamp(1.75rem, 3.5vw, 2.25rem);
  font-weight: 800;
  color: var(--rescue-dark, #1A1A1A);
  line-height: 1.15;
}
.journey-modal__subtitle {
  font-size: 1rem;
  color: #8C1427;
  font-weight: 700;
  margin-top: 0.25rem;
}
.journey-modal__close-btn {
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: var(--rescue-charcoal, #3D3D3D);
  transition: color 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.journey-modal__close-btn:hover {
  color: #8C1427;
  transform: rotate(90deg);
}
.journey-modal__body {
  padding: 2.5rem;
  overflow-y: auto;
  flex: 1;
  background: transparent;
  position: relative;
  z-index: 1;
}
.journey-modal__intro {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px dashed var(--rescue-border, #E0E0E0);
  align-items: center;
  position: relative;
  z-index: 1;
}
@media (min-width: 768px) {
  .journey-modal__intro {
    grid-template-columns: 1fr 320px;
    gap: 3rem;
  }
}
.journey-modal__intro-text p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--rescue-charcoal, #3D3D3D);
  margin-bottom: 1rem;
}
.journey-modal__intro-text p:last-child {
  margin-bottom: 0;
}
.journey-modal__intro-media {
  display: flex;
  justify-content: center;
}
.journey-modal__director-img {
  width: 320px;
  height: 320px;
  max-width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--rescue-yellow, #FFC72C);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  filter: grayscale(1) contrast(1.05);
}
.journey-modal__qa-list {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
  z-index: 1;
}
.journey-modal__qa-item {
  border-left: 4px solid var(--rescue-yellow, #FFC72C);
  padding-left: 1.75rem;
}
.journey-modal__question {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--rescue-dark, #1A1A1A);
  line-height: 1.3;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
}
.journey-modal__question-number {
  background: #8C1427;
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 800;
  padding: 0.25rem 0.6rem;
  border-radius: 0;
  flex-shrink: 0;
  margin-top: 0.2rem;
  line-height: 1;
}
.journey-modal__answer p {
  font-size: 1.05rem;
  line-height: 1.75;
  color: #333333;
  margin-bottom: 1.1rem;
  text-align: justify;
}
.journey-modal__answer p:last-child {
  margin-bottom: 0;
}
.journey-modal__footer {
  padding: 1.5rem 2.5rem;
  border-top: 1px solid var(--rescue-border, #E0E0E0);
  display: flex;
  justify-content: flex-end;
  background: var(--rescue-grey-light, #F5F5F5);
  position: relative;
  z-index: 2;
}

/* ── Journey Modal Transitions ── */
.journey-modal-fade-enter-active,
.journey-modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.journey-modal-fade-enter-from,
.journey-modal-fade-leave-to {
  opacity: 0;
}
.journey-modal-fade-enter-active .journey-modal,
.journey-modal-fade-leave-active .journey-modal {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease;
}
.journey-modal-fade-enter-from .journey-modal,
.journey-modal-fade-leave-to .journey-modal {
  transform: translateY(20px) scale(0.97);
  opacity: 0;
}
</style>
