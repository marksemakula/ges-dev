<template>
  <div class="min-h-screen bg-white font-sans">
    <AppHeader v-if="!isBrandedRoute" />
    <main>
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>
    <AppFooter v-if="!isBrandedRoute" />
    <ScrollToTop />
  </div>
</template>

<script setup lang="ts">
import { computed, watch, nextTick, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import AppHeader from './components/layout/Header.vue';
import AppFooter from './components/layout/Footer.vue';
import ScrollToTop from './components/ScrollToTop.vue';

const route = useRoute();

const isBrandedRoute = computed(() =>
  route.path.includes('/institutions/scooby') ||
  route.path.includes('/institutions/gjs') ||
  route.path.includes('/institutions/sakghs') ||
  route.path.includes('/institutions/jsbi') ||
  route.path === '/international-pathway'
);

/* ── Scroll reveal: fade/slide sections in as they enter the viewport ── */
const REVEAL_SELECTORS = [
  '.rpl-section-heading',
  '.rpl-card',
  '.rpl-stat',
  '.teaser-hl',
  '.teaser-std',
  '.news-highlight',
  '.news-teaser',
  '.quote-cta',
].join(', ');

let revealObserver: IntersectionObserver | null = null;

function setupReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  revealObserver?.disconnect();
  revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-in');
          revealObserver?.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll(REVEAL_SELECTORS).forEach((el) => {
    if (el.classList.contains('reveal-in')) return;
    /* skip elements already in view on load so nothing flashes */
    if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
      el.classList.add('reveal-in');
      return;
    }
    el.classList.add('reveal-init');
    revealObserver?.observe(el);
  });
}

onMounted(() => nextTick(setupReveal));
watch(
  () => route.path,
  () => {
    /* wait for the route transition (0.2s fade) to mount new content */
    setTimeout(() => nextTick(setupReveal), 350);
  }
);
onUnmounted(() => revealObserver?.disconnect());
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
