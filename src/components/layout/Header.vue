<template>
  <header :class="['ges-header', { 'ges-header--scrolled': scrolled }]">
    <!-- Main nav -->
    <nav class="ges-nav container">
      <!-- Logo / Brand -->
      <RouterLink to="/" class="ges-brand">
        <img src="/logo.png" alt="GES" class="ges-brand__logo" />
      </RouterLink>

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

        <!-- Institutions Dropdown -->
        <div class="ges-dropdown" @mouseenter="dropOpen = true" @mouseleave="dropOpen = false">
          <button class="ges-nav__link ges-dropdown__trigger" :class="{ 'ges-nav__link--active': isInstitutionRoute }">
            INSTITUTIONS
            <svg class="ges-dropdown__arrow" :class="{ 'ges-dropdown__arrow--open': dropOpen }" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
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
            ABOUT
            <svg class="ges-dropdown__arrow" :class="{ 'ges-dropdown__arrow--open': aboutOpen }" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
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

        <!-- CTA Button (desktop) -->
        <div class="ges-nav__cta">
          <RouterLink to="/about" class="ges-nav__donate" aria-label="Get in touch">
            <span class="ges-nav__donate-text">Get in Touch</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </RouterLink>
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
        <RouterLink to="/about" class="ges-mobile-menu__cta" @click="mobileOpen = false">Get in Touch</RouterLink>
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
const scrolled = computed(() => y.value > 40);
const isInstitutionRoute = computed(() => route.path.startsWith('/institutions/'));
const isAboutRoute = computed(() => ['/about', '/leadership', '/partnerships'].includes(route.path));
const dropOpen = ref(false);
const aboutOpen = ref(false);
const mobileOpen = ref(false);

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'GES LIFE', path: '/ges-life' },
  { name: 'CALENDAR', path: '/academic-calendar' },
  { name: 'BLOG', path: '/blog' },
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
/* ── Main Header ── */
.ges-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--rescue-white, #fff);
  border-bottom: 1px solid var(--rescue-border, #E0E0E0);
  transition: box-shadow 0.3s ease;
}
.ges-header--scrolled {
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
}

/* ── Nav ── */
.ges-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  max-width: 1280px;
  margin: 0 auto;
  height: 64px;
}

/* ── Brand ── */
.ges-brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
}
.ges-brand__logo {
  height: 48px;
  width: auto;
}

/* ── Desktop Nav Links ── */
.ges-nav__links {
  display: none;
  align-items: center;
  gap: 0;
}
@media (min-width: 1024px) {
  .ges-nav__links { display: flex; }
}
.ges-nav__link {
  position: relative;
  padding: 0.5rem 0.85rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--rescue-dark, #1A1A1A);
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  letter-spacing: 0.04em;
  transition: color 0.15s;
  white-space: nowrap;
}
.ges-nav__link:hover {
  color: var(--rescue-charcoal, #3D3D3D);
}
.ges-nav__link--active {
  color: var(--rescue-dark, #1A1A1A);
}
.ges-nav__link--active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0.85rem;
  right: 0.85rem;
  height: 3px;
  background: var(--rescue-yellow, #EFC131);
}

/* ── Nav CTA ── */
.ges-nav__cta {
  display: none;
}
@media (min-width: 1024px) {
  .ges-nav__cta { display: flex; align-items: center; margin-left: 1rem; }
}
.ges-nav__donate {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.55rem 1rem;
  background: var(--rescue-yellow, #EFC131);
  color: var(--rescue-dark, #1A1A1A);
  font-size: 0.9rem;
  font-weight: 800;
  text-decoration: none;
  border: 2px solid var(--rescue-yellow, #EFC131);
  cursor: pointer;
  transition: background 0.15s, transform 0.12s;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border-radius: 2px;
  box-shadow: 0 6px 18px rgba(233,184,60,0.12);
}
.ges-nav__donate:hover {
  background: var(--rescue-yellow-hover, #D9AE28);
  transform: translateY(-1px);
}
.ges-nav__donate-text { display: inline-block; }

/* ── Dropdown ── */
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
  top: calc(100% + 8px);
  right: 0;
  background: var(--rescue-white, #fff);
  border: 1px solid var(--rescue-border, #E0E0E0);
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  padding: 0.5rem;
  min-width: 300px;
  z-index: 200;
}
.ges-dropdown__menu--sm {
  min-width: 230px;
}
.ges-dropdown__item {
  display: flex;
  flex-direction: column;
  padding: 0.65rem 0.85rem;
  text-decoration: none;
  transition: background 0.15s;
  border-left: 3px solid transparent;
}
.ges-dropdown__item:hover {
  background: var(--rescue-grey-light, #F5F5F5);
  border-left-color: var(--rescue-yellow, #EFC131);
}
.ges-dropdown__item-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--rescue-dark, #1A1A1A);
}
.ges-dropdown__item-desc {
  font-size: 0.75rem;
  color: var(--rescue-text-secondary, #555);
  margin-top: 2px;
}

/* ── Hamburger ── */
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
  height: 2.5px;
  background: var(--rescue-dark, #1A1A1A);
  border-radius: 2px;
  transition: transform 0.25s, opacity 0.25s;
  transform-origin: center;
}
.ges-hamburger__bar--open-1 { transform: translateY(8px) rotate(45deg); }
.ges-hamburger__bar--open-2 { opacity: 0; }
.ges-hamburger__bar--open-3 { transform: translateY(-8px) rotate(-45deg); }

/* ── Mobile Menu ── */
.ges-mobile-menu {
  display: flex;
  flex-direction: column;
  background: var(--rescue-white, #fff);
  border-top: 1px solid var(--rescue-border, #E0E0E0);
  padding: 1rem 1.5rem 1.5rem;
  max-height: 80vh;
  overflow-y: auto;
}
.ges-mobile-menu__link {
  padding: 0.7rem 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--rescue-dark, #1A1A1A);
  text-decoration: none;
  border-bottom: 1px solid var(--rescue-border, #E0E0E0);
  transition: color 0.15s;
  letter-spacing: 0.02em;
}
.ges-mobile-menu__link:hover { color: var(--rescue-charcoal, #3D3D3D); }
.ges-mobile-menu__link--sub {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--rescue-text-secondary, #555);
  padding-left: 1rem;
}
.ges-mobile-menu__divider {
  height: 1px;
  background: var(--rescue-border, #E0E0E0);
  margin: 0.75rem 0;
}
.ges-mobile-menu__section {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--rescue-text-secondary, #555);
  padding: 0.5rem 0 0.25rem;
}
.ges-mobile-menu__cta {
  display: block;
  text-align: center;
  padding: 0.75rem;
  margin-top: 1rem;
  background: var(--rescue-yellow, #EFC131);
  color: var(--rescue-dark, #1A1A1A);
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s;
}
.ges-mobile-menu__cta:hover {
  background: var(--rescue-yellow-hover, #D9AE28);
}

/* ── Transitions ── */
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
