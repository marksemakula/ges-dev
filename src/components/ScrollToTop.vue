<template>
  <Transition name="scroll-top">
    <button
      v-if="visible"
      class="scroll-top-btn"
      @click="scrollTop"
      aria-label="Back to top"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useScroll } from '@vueuse/core';

const { y } = useScroll(window);
const visible = computed(() => y.value > 300);

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<style scoped>
.scroll-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 99;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: #0A2342;
  color: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(10, 35, 66, 0.25);
  transition: background 0.2s, transform 0.2s;
}
.scroll-top-btn:hover {
  background: #00C7B7;
  transform: translateY(-2px);
}
.scroll-top-enter-active, .scroll-top-leave-active {
  transition: opacity 0.25s, transform 0.25s;
}
.scroll-top-enter-from, .scroll-top-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>
