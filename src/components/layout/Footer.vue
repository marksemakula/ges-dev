<template>
  <footer class="ges-footer">
    <!-- Footer layout 1 - light grey band (rescue.org rpll-footer-layout-1) -->
    <div class="ges-footer__layout1">
      <div class="ges-footer__container">
        <div class="ges-footer__grid">
          <!-- Brand -->
          <div class="ges-footer__brand">
            <RouterLink to="/" class="ges-footer__logo-link">
              <img src="/logo.png" alt="GES" class="ges-footer__logo" />
              <div>
                <p class="ges-footer__org">Gombe Education Service</p>
                <p class="ges-footer__since">Excellence Since 1995</p>
              </div>
            </RouterLink>
            <p class="ges-footer__desc">
              Committed to providing world-class education and nurturing future leaders through innovative learning and holistic development.
            </p>
            <div class="ges-footer__contact">
              <a href="mailto:info@ges.ac.ug" class="ges-footer__contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
                info@ges.ac.ug
              </a>
              <span class="ges-footer__contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.9a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.93 5.93l.82-.84a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                0708 700 006
              </span>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="ges-footer__heading">Quick Links</h4>
            <ul class="ges-footer__list">
              <li v-for="link in quickLinks" :key="link.path">
                <RouterLink :to="link.path" class="ges-footer__link">{{ link.name }}</RouterLink>
              </li>
            </ul>
          </div>

          <!-- Institutions -->
          <div class="ges-footer__institutions">
            <h4 class="ges-footer__heading">Our Institutions</h4>
            <ul class="ges-footer__list">
              <li v-for="inst in institutions" :key="inst.path">
                <a :href="inst.url" class="ges-footer__link">{{ inst.name }}</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Social icons row -->
        <div class="ges-footer__social-row">
          <div class="ges-footer__social">
            <a v-for="s in socials" :key="s.label" :href="s.href" :aria-label="s.label" target="_blank" rel="noopener noreferrer" class="ges-footer__social-link">
              <span v-html="s.svg"></span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer layout 2 - black utility band (rescue.org rpll-footer-layout-2) -->
    <div class="ges-footer__layout2">
      <div class="ges-footer__container">
        <div class="ges-footer__utility-row">
          <p class="ges-footer__copy">&copy; {{ year }} Gombe Education Service. All rights reserved.</p>
          <div class="ges-footer__powered">
            <span class="ges-footer__powered-label">Powered by</span>
            <img src="/images/Inzozi-grayscale1.png" alt="Inzozi Logo" class="ges-footer__powered-logo" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Leadership', path: '/leadership' },
  { name: 'GES Life', path: '/ges-life' },
  { name: 'Blog', path: '/blog' },
  { name: 'Partnerships', path: '/partnerships' },
  { name: 'Academic Calendar', path: '/academic-calendar' },
];

const institutions = [
  { name: 'Gombe Institute of Business Science & Technology (GIBST)', path: '/institutions/jsbi', url: 'http://gibst.ac.ug/' },
  { name: 'St. Andrew Kaggwa Gombe High School - Bujuuko', path: '/institutions/sakghs-bujuuko', url: 'http://gombehighschool.ac.ug/' },
  { name: 'St. Andrew Kaggwa Gombe High School - Kawaala', path: '/institutions/sakghs-kawaala', url: 'http://gombehighschool.ac.ug/' },
  { name: 'Gombe Junior School - Kampala', path: '/institutions/gjs-kampala', url: 'http://gombejuniorschool.ac.ug/' },
  { name: 'Gombe Junior School - Gulu', path: '/institutions/gjs-gulu', url: 'http://gombejuniorschool.ac.ug/' },
  { name: 'ScoobyDoo International School Uganda - Kampala', path: '/institutions/sisu-kampala', url: 'http://scoobydoointernational.ac.ug/' },
  { name: 'ScoobyDoo International School Uganda - Gulu', path: '/institutions/sisu-gulu', url: 'http://scoobydoointernational.ac.ug/' },
  { name: 'International Education Pathways Program', path: '/institutions/iepp', url: 'https://ipp-vert.vercel.app/' },
];

const socials = [
  { label: 'LinkedIn',  href: 'https://linkedin.com/company/ges',    svg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>' },
  { label: 'Facebook',  href: 'https://www.facebook.com/share/18cQvvPYgX/', svg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>' },
  { label: 'X (Twitter)', href: 'https://x.com/ges',                 svg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.258 5.636 5.906-5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>' },
  { label: 'Instagram', href: 'https://instagram.com/ges',           svg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>' },
  { label: 'YouTube',   href: 'https://youtube.com/@ges',            svg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>' },
  { label: 'WhatsApp',  href: 'https://wa.me/256760064471',          svg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.106 1.51 5.833L.006 24l6.335-1.652A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.015-1.378l-.36-.214-3.722.97.99-3.617-.235-.373A9.818 9.818 0 1 1 12 21.818z"/></svg>' },
  { label: 'Discord',   href: 'https://discord.gg/ges',              svg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>' },
  { label: 'TikTok',    href: 'https://tiktok.com/@ges',             svg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>' },
];
</script>

<style scoped>
.ges-footer__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ── Layout 1: light grey band ── */
.ges-footer__layout1 {
  background: #E9E9E9;
  padding: 3.5rem 0 2rem;
}
.ges-footer__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}
@media (min-width: 768px) {
  .ges-footer__grid { grid-template-columns: 1.6fr 1fr; }
}
@media (min-width: 1024px) {
  .ges-footer__grid { grid-template-columns: 1.8fr 1fr 1.4fr; }
}
.ges-footer__institutions { display: none; }
@media (min-width: 768px) { .ges-footer__institutions { display: block; } }

.ges-footer__logo-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  margin-bottom: 1rem;
}
.ges-footer__logo { height: 84px; width: auto; }
.ges-footer__org {
  font-size: 0.95rem;
  font-weight: 800;
  color: var(--rescue-dark, #1A1A1A);
  line-height: 1.2;
}
.ges-footer__since {
  font-size: 0.65rem;
  font-weight: 700;
  color: var(--rescue-charcoal, #3D3D3D);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.ges-footer__desc {
  font-size: 0.875rem;
  color: var(--rescue-charcoal, #3D3D3D);
  line-height: 1.65;
  margin-bottom: 1.25rem;
  max-width: 340px;
}
.ges-footer__contact {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.ges-footer__contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: var(--rescue-dark, #1A1A1A);
  text-decoration: none;
  transition: color 0.15s;
}
a.ges-footer__contact-item:hover {
  text-decoration: underline;
  text-decoration-color: var(--rescue-yellow, #FFC72C);
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
}

.ges-footer__heading {
  font-size: 0.95rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--rescue-dark, #1A1A1A);
  margin-bottom: 1rem;
  border-bottom: 3px solid var(--rescue-yellow, #FFC72C);
  display: inline-block;
  padding-bottom: 0.4rem;
}
.ges-footer__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.ges-footer__link {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--rescue-dark, #1A1A1A);
  text-decoration: none;
  transition: color 0.15s;
  text-underline-offset: 3px;
}
.ges-footer__link:hover {
  text-decoration: underline;
  text-decoration-color: var(--rescue-yellow, #FFC72C);
  text-decoration-thickness: 2px;
}

.ges-footer__social-row {
  margin-top: 2.25rem;
  padding-top: 1.5rem;
}
.ges-footer__social {
  display: flex;
  gap: 0.9rem;
}
.ges-footer__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--rescue-dark, #1A1A1A);
  color: #fff;
  transition: background 0.15s, color 0.15s;
}
.ges-footer__social-link:hover {
  background: var(--rescue-yellow, #FFC72C);
  color: var(--rescue-dark, #1A1A1A);
}

/* ── Layout 2: black utility band ── */
.ges-footer__layout2 {
  background: #000;
  padding: 1.75rem 0;
}
.ges-footer__utility-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}
.ges-footer__copy {
  font-size: 0.8rem;
  color: #fff;
}
.ges-footer__powered {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.ges-footer__powered-label {
  font-size: 0.75rem;
  color: #fff;
}
.ges-footer__powered-logo {
  height: 56px;
  width: auto;
  opacity: 0.75;
  transition: opacity 0.2s;
}
.ges-footer__powered-logo:hover { opacity: 1; }
</style>
