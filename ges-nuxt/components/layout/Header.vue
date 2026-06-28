<template>
  <header :class="['ges-header', { 'ges-header--scrolled': scrolled }]">
    <!-- Floating island navbar (rescue.org global navigation card) -->
    <div class="ges-island">
      <!-- Logo card -->
      <RouterLink to="/" class="ges-brand">
        <img src="/logo.png" alt="GES" class="ges-brand__logo" />
      </RouterLink>

      <div class="ges-island__body">
        <!-- Maroon strip -->
        <div class="ges-topbar">
          <span class="ges-topbar__tagline">Excellence in Education Since 1995</span>
          <div class="ges-topbar__socials">
            <a v-for="s in topSocials" :key="s.label" :href="s.href" :aria-label="s.label" target="_blank" rel="noopener noreferrer" class="ges-topbar__social-link">
              <span v-html="s.svg"></span>
            </a>
          </div>
        </div>

        <!-- Main nav row -->
        <nav class="ges-nav">
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

          <!-- Search + CTA (desktop) -->
          <div class="ges-nav__cta">
            <button class="ges-nav__search" aria-label="Search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </button>
            <RouterLink to="/about" class="ges-nav__donate" aria-label="Reachout">Reachout</RouterLink>
          </div>

          <!-- Mobile Reachout CTA -->
          <RouterLink to="/about" class="ges-nav__reachout">Reachout</RouterLink>

          <!-- Mobile Hamburger -->
          <button class="ges-hamburger" @click="mobileOpen = !mobileOpen" aria-label="Toggle menu">
            <span :class="['ges-hamburger__bar', { 'ges-hamburger__bar--open-1': mobileOpen }]"></span>
            <span :class="['ges-hamburger__bar', { 'ges-hamburger__bar--open-2': mobileOpen }]"></span>
            <span :class="['ges-hamburger__bar', { 'ges-hamburger__bar--open-3': mobileOpen }]"></span>
          </button>
        </nav>
      </div>
    </div>

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
import { useWindowScroll } from '@vueuse/core';

const route = useRoute();
const { y } = useWindowScroll();
const scrolled = computed(() => y.value > 40);
const isInstitutionRoute = computed(() => route.path.startsWith('/institutions/'));
const isAboutRoute = computed(() => ['/about', '/leadership', '/partnerships'].includes(route.path));
const dropOpen = ref(false);
const aboutOpen = ref(false);
const mobileOpen = ref(false);

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'CALENDAR', path: '/academic-calendar' },
  { name: 'BLOG', path: '/blog' },
];

const institutions = [
  { name: 'Jimmy Sekasi Business Institute', shortName: 'JSBI', path: '/institutions/jsbi', url: 'https://www.gibst.ac.ug/', description: 'Business & Vocational Training' },
  { name: 'St. Andrew Kaggwa Gombe High School - Bujuuko', shortName: 'SAKGHS Bujuuko', path: '/institutions/sakghs-bujuuko', url: 'https://sakghs-bujuuko.vercel.app/', description: 'Advanced Secondary Education' },
  { name: 'St. Andrew Kaggwa Gombe High School - Kawaala', shortName: 'SAKGHS Kawaala', path: '/institutions/sakghs-kawaala', url: 'https://sakghs-kawaala.vercel.app/', description: 'Advanced Secondary Education' },
  { name: 'Gombe Junior School - Kampala', shortName: 'GJS Kampala', path: '/institutions/gjs-kampala', url: 'https://gjs-kikajjo.vercel.app/', description: 'Primary Education' },
  { name: 'Gombe Junior School - Gulu', shortName: 'GJS Gulu', path: '/institutions/gjs-gulu', url: 'https://gjs-gulu.vercel.app/', description: 'Primary Education' },
  { name: 'ScoobyDoo International School Uganda - Kampala', shortName: 'SISU Kampala', path: '/institutions/sisu-kampala', url: 'https://sisu-katale.vercel.app/', description: 'International Curriculum' },
  { name: 'ScoobyDoo International School Uganda - Gulu', shortName: 'SISU Gulu', path: '/institutions/sisu-gulu', url: 'https://sisu-gulu.vercel.app/', description: 'International Curriculum' },
  { name: 'International Education Pathways Program', shortName: 'IEPP', path: '/institutions/iepp', url: 'https://ipp-vert.vercel.app/', description: 'Global Study Pathways' },
];

/* Top bar social icons (rescue.org rplm-social-share, inverse) */
const topSocials = [
  { label: 'Facebook',  href: 'https://www.facebook.com/share/18cQvvPYgX/', svg: '<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.052 15.04V8.626h2.17l.34-2.51H9.086V4.522c0-.712.204-1.22 1.255-1.22h1.324V1.06c-.239-.032-1.019-.1-1.935-.1-1.9 0-3.223 1.153-3.223 3.325v1.832h-2.17v2.51h2.17v6.412H9.05z"/></svg>' },
  { label: 'Instagram', href: '#', svg: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>' },
  { label: 'YouTube',   href: '#', svg: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="#7A0001" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>' },
  { label: 'TikTok',    href: '#', svg: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>' },
  { label: 'LinkedIn',  href: '#', svg: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>' },
  { label: 'X (Twitter)', href: '#', svg: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.258 5.636 5.906-5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>' },
];
</script>

<style scoped>
/* ── Main Header: floating island over the hero ── */
.ges-header {
  position: relative;
  z-index: 100;
}
@media (min-width: 1024px) {
  .ges-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 2.25rem 1.5rem 0;
  }
  .ges-header--scrolled {
    position: fixed;
  }
}

/* ── Island card ── */
.ges-island {
  display: flex;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid var(--rescue-border, #E0E0E0);
}
@media (min-width: 1024px) {
  .ges-island {
    max-width: 1240px;
    margin: 0 auto;
    align-items: stretch;
    border: none;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.2);
  }
}
.ges-island__body {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

/* ── Maroon strip (rescue.org top-wrapper, GES maroon) ── */
.ges-topbar {
  display: none;
  background: #7A0001;
  color: #fff;
  height: 34px;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  overflow: hidden;
  transition: height 0.25s ease;
}
@media (min-width: 1024px) {
  .ges-topbar { display: flex; }
  /* morph into a minimized navbar on scroll */
  .ges-header--scrolled .ges-topbar { height: 0; }
  .ges-header--scrolled .ges-nav { height: 52px; }
  .ges-header--scrolled .ges-brand__logo { height: 70%; }
}
.ges-topbar__tagline {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  white-space: nowrap;
}
.ges-topbar__socials {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}
.ges-topbar__social-link {
  color: #fff;
  display: inline-flex;
  align-items: center;
  opacity: 0.85;
  transition: opacity 0.15s, color 0.15s;
}
.ges-topbar__social-link:hover {
  opacity: 1;
  color: var(--rescue-yellow, #FFC72C);
}
.ges-topbar__social-link svg { width: 12px; height: 12px; }

/* ── Nav row ── */
.ges-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  height: 64px;
  padding: 0 1rem;
  flex: 1;
}
@media (min-width: 1024px) {
  .ges-nav { height: 56px; padding: 0 0 0 0.5rem; flex: initial; transition: height 0.25s ease; border-bottom-right-radius: 8px; }
}

/* ── Brand (white logo card, left end of the island) ── */
.ges-brand {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  flex-shrink: 0;
  background: #fff;
  padding-left: 1rem;
}
.ges-brand__logo {
  height: 48px;
  width: auto;
}
@media (min-width: 1024px) {
  .ges-brand { width: 7.5rem; padding-left: 0; }
  .ges-brand__logo {
    height: 80%;
    width: 80%;
    object-fit: contain;
  }
}

/* separators between nav items, like the reference */
@media (min-width: 1024px) {
  .ges-nav__links > * + * { border-left: 1px solid var(--rescue-border, #E0E0E0); }
  .ges-nav__link { padding: 0.45rem 1.1rem; }
}

/* ── Mobile Reachout CTA ── */
.ges-nav__reachout {
  margin-left: auto;
  margin-right: 1rem;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--rescue-dark, #1A1A1A);
  text-decoration: none;
}
@media (min-width: 1024px) {
  .ges-nav__reachout { display: none; }
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

/* ── Nav CTA: search + yellow Reachout capping the card's right end ── */
.ges-nav__cta {
  display: none;
}
@media (min-width: 1024px) {
  .ges-nav__cta {
    display: flex;
    align-items: stretch;
    align-self: stretch;
    margin-left: 1rem;
  }
}
.ges-nav__search {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  background: none;
  border: none;
  border-left: 1px solid var(--rescue-border, #E0E0E0);
  cursor: pointer;
  color: var(--rescue-dark, #1A1A1A);
  transition: color 0.15s;
}
.ges-nav__search:hover { color: #7A0001; }
.ges-nav__donate {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.75rem;
  background: var(--rescue-yellow, #EFC131);
  color: var(--rescue-dark, #1A1A1A);
  font-size: 0.95rem;
  font-weight: 800;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.15s;
  letter-spacing: 0.02em;
}
.ges-nav__donate:hover {
  background: var(--rescue-yellow-hover, #D9AE28);
}

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
