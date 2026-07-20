<template>
  <div class="page">
    <section class="page-hero">
      <div class="container">
        <p class="page-hero__eyebrow">Stories &amp; Insights</p>
        <h1 class="page-hero__title">GES Blog</h1>
        <p class="page-hero__subtitle">Insights, stories, and updates from the world of education at GES.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- Filters -->
        <div class="blog-filters">
          <div class="blog-search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input v-model="search" type="text" placeholder="Search articles..." class="blog-search__input" />
          </div>
          <div class="blog-cats">
            <button
              v-for="cat in categories"
              :key="cat"
              :class="['blog-cat-btn', { 'blog-cat-btn--active': selectedCategory === cat }]"
              @click="selectedCategory = cat"
            >
              {{ cat === 'all' ? 'All' : cat }}
            </button>
          </div>
        </div>

        <!-- Posts grid -->
        <div v-if="filteredPosts.length" class="posts-grid">
          <article v-for="post in filteredPosts" :key="post.id" class="post-card">
            <div class="post-card__img">
              <img :src="post.image" :alt="post.title" />
              <span class="post-card__cat">{{ post.category }}</span>
            </div>
            <div class="post-card__body">
              <div class="post-card__meta">
                <span>{{ formatDate(post.publishedAt) }}</span>
                <span class="post-card__dot"></span>
                <span>{{ post.readTime }}</span>
              </div>
              <h3 class="post-card__title">{{ post.title }}</h3>
              <p class="post-card__excerpt">{{ post.excerpt }}</p>
              <div class="post-card__footer">
                <span class="post-card__author">{{ post.author }}</span>
                <button class="post-read-btn">Read More →</button>
              </div>
            </div>
          </article>
        </div>
        <div v-else class="blog-empty">
          <p>No articles found for your search.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
  image: string;
  readTime: string;
}

const posts = ref<Post[]>([
  { id: '1', title: 'The Future of Education: Embracing Digital Learning', excerpt: 'Exploring how digital transformation is reshaping the educational landscape and preparing students for tomorrow\'s challenges.', author: 'Dr. Sarah Mukasa', publishedAt: '2024-01-20', category: 'Innovation', tags: ['digital', 'technology'], image: '/images/Future of Education, Embracing Digital Learning.png', readTime: '5 min read' },
  { id: '2', title: 'Building Character Through Education', excerpt: 'How GES integrates character development into our curriculum to nurture well-rounded individuals.', author: 'Prof. John Kiprotich', publishedAt: '2024-01-18', category: 'Character', tags: ['character', 'values'], image: '/images/java-house.avif', readTime: '4 min read' },
  { id: '3', title: 'STEM Education Excellence at GES', excerpt: 'Discover how our STEM programmes are preparing students for careers in science, technology, engineering, and mathematics.', author: 'Ms. Grace Nakato', publishedAt: '2024-01-15', category: 'STEM', tags: ['STEM', 'science'], image: '/images/TD.jpg', readTime: '6 min read' },
  { id: '4', title: 'International Partnerships and Global Opportunities', excerpt: 'Learn about our international collaborations and how they benefit students through exchange programmes and global exposure.', author: 'Mr. Michael Ochieng', publishedAt: '2024-01-12', category: 'Global', tags: ['partnerships', 'international'], image: '/images/uni2.avif', readTime: '7 min read' },
  { id: '5', title: 'Supporting Student Mental Health and Wellbeing', excerpt: 'Our comprehensive approach to supporting student mental health and creating a positive learning environment.', author: 'Dr. Patricia Ssemwanga', publishedAt: '2024-01-10', category: 'Welfare', tags: ['wellbeing', 'support'], image: '/images/science.avif', readTime: '5 min read' },
  { id: '6', title: 'GES Wins National Education Award 2024', excerpt: 'Gombe Education Service receives the National Excellence Award for outstanding academic performance across its institutions.', author: 'GES Communications', publishedAt: '2024-01-05', category: 'GES News', tags: ['award', 'excellence'], image: '/images/java-house.avif', readTime: '3 min read' },
]);

const search = ref('');
const selectedCategory = ref('all');

const categories = computed(() => ['all', ...new Set(posts.value.map(p => p.category))]);

const filteredPosts = computed(() =>
  posts.value.filter(p => {
    const matchesCat = selectedCategory.value === 'all' || p.category === selectedCategory.value;
    const q = search.value.toLowerCase();
    const matchesSearch = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  })
);

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}
</script>

<style scoped>
.page { min-height: 100vh; }
.page-hero { background: #1A1A1A; padding: 7rem 0 4rem; text-align: center; }
.page-hero__eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #FFC72C; margin-bottom: 0.75rem; }
.page-hero__title { font-size: clamp(2.25rem, 5vw, 3.5rem); font-weight: 700; color: #fff; margin-bottom: 1rem; }
.page-hero__subtitle { font-size: 1rem; color: rgba(255,255,255,0.7); max-width: 560px; margin: 0 auto; line-height: 1.7; }
.section { padding: 5rem 0; }
.container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }

.blog-filters { display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; margin-bottom: 2.5rem; }
.blog-search { display: flex; align-items: center; gap: 0.5rem; background: #fff; border: 1px solid #E0E0E0; border-radius: 8px; padding: 0.5rem 0.875rem; color: #9ca3af; flex: 1; min-width: 200px; max-width: 320px; }
.blog-search__input { border: none; outline: none; font-size: 0.875rem; font-family: inherit; color: #1A1A1A; background: transparent; width: 100%; }
.blog-cats { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.blog-cat-btn { padding: 0.4rem 0.875rem; border-radius: 20px; border: 1px solid #E0E0E0; font-size: 0.8rem; font-weight: 500; color: #555555; background: #fff; cursor: pointer; transition: all 0.15s; font-family: inherit; }
.blog-cat-btn:hover, .blog-cat-btn--active { background: #1A1A1A; color: #fff; border-color: #1A1A1A; }

.posts-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
@media (min-width: 640px) { .posts-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .posts-grid { grid-template-columns: repeat(3, 1fr); } }

.post-card { border: 1px solid #E0E0E0; border-radius: 12px; overflow: hidden; background: #fff; display: flex; flex-direction: column; transition: box-shadow 0.2s, transform 0.2s; }
.post-card:hover { box-shadow: 0 4px 20px rgba(10,35,66,0.1); transform: translateY(-2px); }
.post-card__img { position: relative; height: 180px; overflow: hidden; background: #F5F5F5; }
.post-card__img img { width: 100%; height: 100%; object-fit: cover; }
.post-card__cat { position: absolute; top: 0.75rem; left: 0.75rem; background: #1A1A1A; color: #fff; font-size: 0.68rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; padding: 0.25rem 0.6rem; border-radius: 4px; }
.post-card__body { padding: 1.25rem; flex: 1; display: flex; flex-direction: column; }
.post-card__meta { display: flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; color: #9ca3af; margin-bottom: 0.625rem; }
.post-card__dot { width: 3px; height: 3px; border-radius: 50%; background: #d1d5db; }
.post-card__title { font-size: 0.975rem; font-weight: 700; color: #1A1A1A; line-height: 1.35; margin-bottom: 0.625rem; }
.post-card__excerpt { font-size: 0.845rem; color: #555555; line-height: 1.6; flex: 1; }
.post-card__footer { display: flex; align-items: center; justify-content: space-between; margin-top: 1rem; padding-top: 0.875rem; border-top: 1px solid #F0F0F0; }
.post-card__author { font-size: 0.78rem; font-weight: 600; color: #1A1A1A; }
.post-read-btn { font-size: 0.78rem; font-weight: 600; color: #E6B219; background: none; border: none; cursor: pointer; font-family: inherit; transition: color 0.15s; padding: 0; }
.post-read-btn:hover { color: #1A1A1A; }

.blog-empty { text-align: center; padding: 4rem; color: #9ca3af; font-size: 0.95rem; }
</style>
