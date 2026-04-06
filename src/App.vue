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
import { computed } from 'vue';
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
