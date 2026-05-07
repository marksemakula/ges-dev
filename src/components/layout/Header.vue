<template>
  <header :class="['ges-header', { 'ges-header--scrolled': isScrolledOrInterior, 'ges-header--transparent': isTransparent }]">
    <nav class="ges-nav container">
      <!-- Logo / Brand -->
      <RouterLink to="/" class="ges-brand"></RouterLink>

      <!-- Desktop Nav -->
      <div class="ges-nav__links">
        <RouterLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="ges-nav__link"
          :class="{ 'ges-nav__link--active': route.path === link.path }"
        >
          {{ link.name }}
        </RouterLink>

        <a
          href="https://ipp-vert.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          class="ges-nav__link"
        >
          IPP
        </a>

        <!-- Institutions Dropdown -->
        <div class="ges-dropdown" @mouseenter="dropOpen = true" @mouseleave="dropOpen = false">
          <button class="ges-nav__link ges-dropdown__trigger" :class="{ 'ges-nav__link--active': isInstitutionRoute }">
            Institutions
            <svg class="ges-dropdown__arrow" :class="{ 'ges-dropdown__arrow--open': dropOpen }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <Transition name="dropdown">
            <div v-if="dropOpen" class="ges-dropdown__menu">
              <a
                v-for="inst in institutions"
                :key="inst.path"
                :href="inst.url"
                class="ges-dropdown__item"
                @click="dropOpen = false"
              >
                <span class="ges-dropdown__item-name">{{ inst.name }}</span>
                <span class="ges-dropdown__item-desc">{{ inst.description }}</span>
              </a>
            </div>
          </Transition>
        </div>

        <!-- About Dropdown -->
        <div class="ges-dropdown" @mouseenter="aboutOpen = true" @mouseleave="aboutOpen = false">
          <button class="ges-nav__link ges-dropdown__trigger" :class="{ 'ges-nav__link--active': isAboutRoute }">
            About
            <svg class="ges-dropdown__arrow" :class="{ 'ges-dropdown__arrow--open': aboutOpen }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <Transition name="dropdown">
            <div v-if="aboutOpen" class="ges-dropdown__menu ges-dropdown__menu--sm">
              <RouterLink to="/about" class="ges-dropdown__item" @click="aboutOpen = false">
                <span class="ges-dropdown__item-name">About Us</span>
                <span class="ges-dropdown__item-desc">Vision, mission &amp; values</span>
              </RouterLink>
              <RouterLink to="/leadership" class="ges-dropdown__item" @click="aboutOpen = false">
                <span class="ges-dropdown__item-name">Leadership</span>
                <span class="ges-dropdown__item-desc">Management committee</span>
              </RouterLink>
              <RouterLink to="/partnerships" class="ges-dropdown__item" @click="aboutOpen = false">
                <span class="ges-dropdown__item-name">Partnerships</span>
                <span class="ges-dropdown__item-desc">Our global partners</span>
              </RouterLink>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Mobile Hamburger -->
      <button class="ges-hamburger" @click="mobileOpen = !mobileOpen" aria-label="Toggle menu">
        <span :class="['ges-hamburger__bar', { 'ges-hamburger__bar--open-1': mobileOpen }]"></span>
        <span :class="['ges-hamburger__bar', { 'ges-hamburger__bar--open-2': mobileOpen }]"></span>
        <span :class="['ges-hamburger__bar', { 'ges-hamburger__bar--open-3': mobileOpen }]"></span>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div v-if="mobileOpen" class="ges-mobile-menu">
        <RouterLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="ges-mobile-menu__link"
          @click="mobileOpen = false"
        >
          {{ link.name }}
        </RouterLink>
        <RouterLink to="/about" class="ges-mobile-menu__link" @click="mobileOpen = false">About Us</RouterLink>
        <RouterLink to="/leadership" class="ges-mobile-menu__link" @click="mobileOpen = false">Leadership</RouterLink>
        <RouterLink to="/partnerships" class="ges-mobile-menu__link" @click="mobileOpen = false">Partnerships</RouterLink>
        <div class="ges-mobile-menu__divider"></div>
        <p class="ges-mobile-menu__section">Institutions</p>
        <a
          v-for="inst in institutions"
          :key="inst.path"
          :href="inst.url"
          class="ges-mobile-menu__link ges-mobile-menu__link--sub"
          @click="mobileOpen = false"
        >
          {{ inst.shortName }}
        </a>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useScroll } from '@vueuse/core';

const route = useRoute();
const { y } = useScroll(window);
const isHome = computed(() => route.path === '/');
const scrolled = computed(() => y.value > 40);
const isInstitutionRoute = computed(() => route.path.startsWith('/institutions/'));
const isAboutRoute = computed(() => ['/about', '/leadership', '/partnerships'].includes(route.path));
// transparent only: home page + not scrolled
const isTransparent = computed(() => isHome.value && !scrolled.value);
// white bar: anywhere when scrolled
const isScrolledOrInterior = computed(() => scrolled.value);
const dropOpen = ref(false);
const aboutOpen = ref(false);
const mobileOpen = ref(false);

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'GES Life', path: '/ges-life' },
  { name: 'Calendar', path: '/academic-calendar' },
  { name: 'Blog', path: '/blog' },
];

const institutions = [
  { name: 'St. Andrew Kaggwa GHS – Kawaala', shortName: 'SAKGHS Kawaala', path: '/institutions/sakghs-kawaala', url: 'https://sakghs-kawaala.vercel.app/', description: 'Advanced Secondary Education' },
  { name: 'St. Andrew Kaggwa GHS – Bujuuko', shortName: 'SAKGHS Bujuuko', path: '/institutions/sakghs-bujuuko', url: 'https://sakghs-bujuuko.vercel.app/', description: 'Advanced Secondary Education' },
  { name: 'Gombe Junior School – Kikajjo', shortName: 'GJS Kikajjo', path: '/institutions/gjs-kikajjo', url: 'https://gjs-kikajjo.vercel.app/', description: 'Primary & Lower Secondary' },
  { name: 'Gombe Junior School – Boarding', shortName: 'GJS Boarding', path: '/institutions/gjs-boarding', url: 'https://gjs-boarding.vercel.app/', description: 'Primary & Lower Secondary' },
  { name: 'Gombe Junior School – Gulu', shortName: 'GJS Gulu', path: '/institutions/gjs-gulu', url: 'https://gjs-gulu.vercel.app/', description: 'Primary & Lower Secondary' },
  { name: 'SISU – Katale Campus', shortName: 'SISU Katale', path: '/institutions/scooby-katale', url: 'https://sisu-katale.vercel.app/', description: 'International Curriculum' },
  { name: 'SISU – Gulu Campus', shortName: 'SISU Gulu', path: '/institutions/scooby-gulu', url: 'https://sisu-gulu.vercel.app/', description: 'International Curriculum' },
];
</script>

<style scoped>
.ges-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(140, 20, 39, 0.97);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  transition: background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
}
/* On the homepage before scrolling — fully transparent */
.ges-header--transparent {
  background: transparent;
  border-bottom-color: transparent;
}
.ges-header--scrolled {
  background: #fff;
  border-bottom-color: #e5e9f0;
  box-shadow: 0 2px 24px rgba(0,0,0,0.10);
}
.ges-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 1.5rem;
  max-width: 1280px;
  margin: 0 auto;
}
.ges-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  flex-shrink: 0;
}
.ges-brand__logo {
  height: 40px;
  width: auto;
}
.ges-brand__text {
  display: flex;
  flex-direction: column;
}
.ges-brand__name {
  font-size: 0.95rem;
  font-weight: 700;
  color: #8C1427;
  line-height: 1.2;
  letter-spacing: 0.01em;
  transition: color 0.35s ease;
}
.ges-header--scrolled .ges-brand__name {
  color: #8C1427;
}
.ges-brand__tagline {
  font-size: 0.65rem;
  font-weight: 500;
  color: #FFD166;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: color 0.35s ease;
}
.ges-header--scrolled .ges-brand__tagline {
  color: #c9941a;
}
.ges-nav__links {
  display: none;
  align-items: center;
  gap: 0.125rem;
}
@media (min-width: 1024px) {
  .ges-nav__links { display: flex; }
}
.ges-nav__link {
  position: relative;
  padding: 0.45rem 0.9rem 0.6rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #8C1427;
  text-decoration: none;
  border-radius: 6px;
  transition: color 0.2s ease;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.ges-nav__link::after {
  content: '';
  position: absolute;
  left: 0.9rem;
  right: 0.9rem;
  bottom: 0.15rem;
  height: 2px;
  border-radius: 999px;
  background: #FFD166;
  transform: scaleX(0);
  transform-origin: center;
  opacity: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.ges-nav__link:hover {
  color: #6b0f1a;
}
.ges-nav__link:hover::after,
.ges-nav__link--active::after {
  transform: scaleX(1);
  opacity: 1;
}
.ges-nav__link--active {
  color: #FFD166;
  font-weight: 600;
}
.ges-header--scrolled .ges-nav__link {
  color: #374151;
}
.ges-header--scrolled .ges-nav__link::after {
  background: #c9941a;
}
.ges-header--scrolled .ges-nav__link:hover {
  color: #c9941a;
}
.ges-header--scrolled .ges-nav__link--active {
  color: #c9941a;
  font-weight: 600;
}

/* Dropdown */
.ges-dropdown {
  position: relative;
}
.ges-dropdown__trigger { white-space: nowrap; }
.ges-dropdown__arrow {
  transition: transform 0.2s;
}
.ges-dropdown__arrow--open {
  transform: rotate(180deg);
}
.ges-dropdown__menu {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.14);
  padding: 0.5rem;
  min-width: 300px;
  z-index: 200;
}
.ges-dropdown__menu--sm {
  min-width: 220px;
}
.ges-dropdown__item {
  display: flex;
  flex-direction: column;
  padding: 0.65rem 0.85rem;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.15s;
}
.ges-dropdown__item:hover {
  background: #f4f7fb;
}
.ges-dropdown__item-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: #0A2342;
}
.ges-dropdown__item-desc {
  font-size: 0.75rem;
  color: #6C757D;
  margin-top: 1px;
}

/* Mobile hamburger */
.ges-hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
@media (min-width: 1024px) {
  .ges-hamburger { display: none; }
}
.ges-hamburger__bar {
  display: block;
  width: 100%;
  height: 2px;
  background: #8C1427;
  border-radius: 2px;
  transition: transform 0.25s, opacity 0.25s, background 0.35s ease;
  transform-origin: center;
}
.ges-header--scrolled .ges-hamburger__bar {
  background: #8C1427;
}
.ges-hamburger__bar--open-1 { transform: translateY(8px) rotate(45deg); }
.ges-hamburger__bar--open-2 { opacity: 0; }
.ges-hamburger__bar--open-3 { transform: translateY(-8px) rotate(-45deg); }

/* Mobile menu */
.ges-mobile-menu {
  display: flex;
  flex-direction: column;
  background: #8C1427;
  border-top: 1px solid rgba(255,255,255,0.10);
  padding: 0.75rem 1.5rem 1.25rem;
}
.ges-mobile-menu__link {
  padding: 0.65rem 0;
  font-size: 0.925rem;
  font-weight: 500;
  color: rgba(255,255,255,0.85);
  text-decoration: none;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  transition: color 0.15s;
}
.ges-mobile-menu__link:hover { color: #FFD166; }
.ges-mobile-menu__link--sub {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.65);
  padding-left: 1rem;
}
.ges-mobile-menu__divider {
  height: 1px;
  background: rgba(255,255,255,0.12);
  margin: 0.5rem 0;
}
.ges-mobile-menu__section {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #FFD166;
  padding: 0.5rem 0 0.25rem;
}

/* Transitions */
.dropdown-enter-active, .dropdown-leave-active {
  transition: opacity 0.15s, transform 0.15s;
}
.dropdown-enter-from, .dropdown-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
.mobile-menu-enter-active, .mobile-menu-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}
.mobile-menu-enter-from, .mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
