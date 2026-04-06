<template>
  <div class="page">
    <section class="page-hero">
      <div class="container">
        <p class="page-hero__eyebrow">Campus Life</p>
        <h1 class="page-hero__title">GES Life</h1>
        <p class="page-hero__subtitle">A glimpse into the vibrant community life across all GES institutions — from sports and arts to community service and academic achievements.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- Category filter -->
        <div class="feed-filters">
          <button
            v-for="cat in categories"
            :key="cat"
            :class="['filter-btn', { 'filter-btn--active': selected === cat }]"
            @click="selected = cat"
          >{{ cat }}</button>
        </div>

        <div class="feed-grid">
          <div v-for="item in filteredFeed" :key="item.id" class="feed-card">
            <div class="feed-card__img">
              <img :src="item.image" :alt="item.title" />
              <span class="feed-card__badge">{{ item.category }}</span>
            </div>
            <div class="feed-card__body">
              <p class="feed-card__date">{{ item.date }}</p>
              <h3 class="feed-card__title">{{ item.title }}</h3>
              <p class="feed-card__text">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface FeedItem {
  id: number;
  title: string;
  text: string;
  image: string;
  category: string;
  date: string;
}

const feedItems = ref<FeedItem[]>([
  { id: 1, title: 'Annual Sports Day 2024', text: 'Students from all our campuses competed in athletics, football, and swimming in a spectacular display of teamwork and sportsmanship.', image: '/images/uni2.avif', category: 'Sports', date: 'March 2024' },
  { id: 2, title: 'Science Fair Highlights', text: 'Our students showcased innovative projects ranging from water purification systems to renewable energy solutions, impressing judges from industry and academia.', image: '/images/science.avif', category: 'Academics', date: 'February 2024' },
  { id: 3, title: 'Arts & Culture Festival', text: 'A wonderful celebration of creativity featuring drama, music, visual arts, and traditional dance from all our campuses.', image: '/images/TD.avif', category: 'Arts', date: 'January 2024' },
  { id: 4, title: 'Community Service Initiative', text: 'GES students led a clean-up and tree-planting campaign across local communities, demonstrating our commitment to environmental stewardship.', image: '/images/java-house.avif', category: 'Community', date: 'December 2023' },
  { id: 5, title: 'Academic Excellence Ceremony', text: 'Top performing students across our schools were celebrated for their outstanding academic achievements in the annual awards ceremony.', image: '/images/uni2.avif', category: 'Academics', date: 'November 2023' },
  { id: 6, title: 'International Exchange Programme', text: 'GES students visited partner schools in the UK and returned with fresh perspectives and lasting friendships.', image: '/images/TD.avif', category: 'Global', date: 'October 2023' },
]);

const categories = computed(() => ['All', ...new Set(feedItems.value.map(i => i.category))]);
const selected = ref('All');

const filteredFeed = computed(() =>
  selected.value === 'All' ? feedItems.value : feedItems.value.filter(i => i.category === selected.value)
);
</script>

<style scoped>
.page { min-height: 100vh; }
.page-hero { background: #0A2342; padding: 7rem 0 4rem; text-align: center; }
.page-hero__eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #00C7B7; margin-bottom: 0.75rem; }
.page-hero__title { font-size: clamp(2.25rem, 5vw, 3.5rem); font-weight: 700; color: #fff; margin-bottom: 1rem; }
.page-hero__subtitle { font-size: 1rem; color: rgba(255,255,255,0.7); max-width: 560px; margin: 0 auto; line-height: 1.7; }
.section { padding: 5rem 0; }
.container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }

.feed-filters { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2.5rem; }
.filter-btn { padding: 0.4rem 0.875rem; border-radius: 20px; border: 1px solid #e5e9f0; font-size: 0.82rem; font-weight: 500; color: #6C757D; background: #fff; cursor: pointer; transition: all 0.15s; font-family: inherit; }
.filter-btn:hover, .filter-btn--active { background: #0A2342; color: #fff; border-color: #0A2342; }

.feed-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
@media (min-width: 640px) { .feed-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .feed-grid { grid-template-columns: repeat(3, 1fr); } }

.feed-card { border: 1px solid #e5e9f0; border-radius: 12px; overflow: hidden; background: #fff; transition: box-shadow 0.2s, transform 0.2s; }
.feed-card:hover { box-shadow: 0 4px 20px rgba(10,35,66,0.1); transform: translateY(-2px); }
.feed-card__img { position: relative; height: 200px; overflow: hidden; background: #f4f7fb; }
.feed-card__img img { width: 100%; height: 100%; object-fit: cover; }
.feed-card__badge { position: absolute; top: 0.75rem; left: 0.75rem; background: #00C7B7; color: #0A2342; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; padding: 0.25rem 0.6rem; border-radius: 4px; }
.feed-card__body { padding: 1.25rem; }
.feed-card__date { font-size: 0.75rem; color: #9ca3af; margin-bottom: 0.4rem; }
.feed-card__title { font-size: 0.975rem; font-weight: 700; color: #0A2342; margin-bottom: 0.5rem; line-height: 1.35; }
.feed-card__text { font-size: 0.845rem; color: #6C757D; line-height: 1.6; }
</style>
