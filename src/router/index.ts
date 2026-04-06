import { createRouter, createWebHistory } from 'vue-router';

const externalRedirect = (url: string) => () => {
  if (typeof window !== 'undefined') {
    window.location.replace(url);
  }
  return false;
};

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0, behavior: 'smooth' };
  },
  routes: [
    { path: '/', component: () => import('../pages/Home.vue') },
    { path: '/about', component: () => import('../pages/About.vue') },
    { path: '/leadership', component: () => import('../pages/Leadership.vue') },
    { path: '/blog', component: () => import('../pages/Blog.vue') },
    { path: '/partnerships', component: () => import('../pages/Partnerships.vue') },
    { path: '/ges-life', component: () => import('../pages/GESLifeFeed.vue') },
    { path: '/mentorship', component: () => import('../pages/MentorshipPortal.vue') },
    { path: '/academic-calendar', component: () => import('../pages/AcademicCalendar.vue') },
    { path: '/international-pathway', component: () => import('../pages/InternationalPathway.vue') },
    { path: '/admin', component: () => import('../pages/admin/AdminPanel.vue') },
    // Institution redirects
    { path: '/institutions/sakghs-kawaala', beforeEnter: externalRedirect('https://sakghs-kawaala.vercel.app/') },
    { path: '/institutions/sakghs-bujuuko', beforeEnter: externalRedirect('https://sakghs-bujuuko.vercel.app/') },
    { path: '/institutions/gjs-kikajjo', beforeEnter: externalRedirect('https://gjs-kikajjo.vercel.app/') },
    { path: '/institutions/gjs-boarding', beforeEnter: externalRedirect('https://gjs-boarding.vercel.app/') },
    { path: '/institutions/gjs-gulu', beforeEnter: externalRedirect('https://gjs-gulu.vercel.app/') },
    { path: '/institutions/gjs-about', beforeEnter: externalRedirect('https://gjs-gulu.vercel.app/') },
    { path: '/institutions/scooby-katale', beforeEnter: externalRedirect('https://sisu-katale.vercel.app/') },
    { path: '/institutions/scooby-gulu', beforeEnter: externalRedirect('https://sisu-gulu.vercel.app/') },
    { path: '/institutions/jsbi', component: () => import('../institutions/JSBI.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
});

export default router;
