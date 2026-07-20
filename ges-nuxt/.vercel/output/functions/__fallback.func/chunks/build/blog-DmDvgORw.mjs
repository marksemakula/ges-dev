import { defineComponent, ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import 'nuxtseo-shared/utils';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';
import '@vueuse/core';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "blog",
  __ssrInlineRender: true,
  setup(__props) {
    const posts = ref([
      { id: "1", title: "The Future of Education: Embracing Digital Learning", excerpt: "Exploring how digital transformation is reshaping the educational landscape and preparing students for tomorrow's challenges.", author: "Dr. Sarah Mukasa", publishedAt: "2024-01-20", category: "Innovation", tags: ["digital", "technology"], image: "/images/Future of Education, Embracing Digital Learning.png", readTime: "5 min read" },
      { id: "2", title: "Building Character Through Education", excerpt: "How GES integrates character development into our curriculum to nurture well-rounded individuals.", author: "Prof. John Kiprotich", publishedAt: "2024-01-18", category: "Character", tags: ["character", "values"], image: "/images/java-house.avif", readTime: "4 min read" },
      { id: "3", title: "STEM Education Excellence at GES", excerpt: "Discover how our STEM programmes are preparing students for careers in science, technology, engineering, and mathematics.", author: "Ms. Grace Nakato", publishedAt: "2024-01-15", category: "STEM", tags: ["STEM", "science"], image: "/images/TD.jpg", readTime: "6 min read" },
      { id: "4", title: "International Partnerships and Global Opportunities", excerpt: "Learn about our international collaborations and how they benefit students through exchange programmes and global exposure.", author: "Mr. Michael Ochieng", publishedAt: "2024-01-12", category: "Global", tags: ["partnerships", "international"], image: "/images/uni2.avif", readTime: "7 min read" },
      { id: "5", title: "Supporting Student Mental Health and Wellbeing", excerpt: "Our comprehensive approach to supporting student mental health and creating a positive learning environment.", author: "Dr. Patricia Ssemwanga", publishedAt: "2024-01-10", category: "Welfare", tags: ["wellbeing", "support"], image: "/images/science.avif", readTime: "5 min read" },
      { id: "6", title: "GES Wins National Education Award 2024", excerpt: "Gombe Education Service receives the National Excellence Award for outstanding academic performance across its institutions.", author: "GES Communications", publishedAt: "2024-01-05", category: "GES News", tags: ["award", "excellence"], image: "/images/java-house.avif", readTime: "3 min read" }
    ]);
    const search = ref("");
    const selectedCategory = ref("all");
    const categories = computed(() => ["all", ...new Set(posts.value.map((p) => p.category))]);
    const filteredPosts = computed(
      () => posts.value.filter((p) => {
        const matchesCat = selectedCategory.value === "all" || p.category === selectedCategory.value;
        const q = search.value.toLowerCase();
        const matchesSearch = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
        return matchesCat && matchesSearch;
      })
    );
    function formatDate(dateStr) {
      return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-cf628edd><section class="page-hero" data-v-cf628edd><div class="container" data-v-cf628edd><p class="page-hero__eyebrow" data-v-cf628edd>Stories &amp; Insights</p><h1 class="page-hero__title" data-v-cf628edd>GES Blog</h1><p class="page-hero__subtitle" data-v-cf628edd>Insights, stories, and updates from the world of education at GES.</p></div></section><section class="section" data-v-cf628edd><div class="container" data-v-cf628edd><div class="blog-filters" data-v-cf628edd><div class="blog-search" data-v-cf628edd><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-cf628edd><circle cx="11" cy="11" r="8" data-v-cf628edd></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-cf628edd></line></svg><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Search articles..." class="blog-search__input" data-v-cf628edd></div><div class="blog-cats" data-v-cf628edd><!--[-->`);
      ssrRenderList(categories.value, (cat) => {
        _push(`<button class="${ssrRenderClass(["blog-cat-btn", { "blog-cat-btn--active": selectedCategory.value === cat }])}" data-v-cf628edd>${ssrInterpolate(cat === "all" ? "All" : cat)}</button>`);
      });
      _push(`<!--]--></div></div>`);
      if (filteredPosts.value.length) {
        _push(`<div class="posts-grid" data-v-cf628edd><!--[-->`);
        ssrRenderList(filteredPosts.value, (post) => {
          _push(`<article class="post-card" data-v-cf628edd><div class="post-card__img" data-v-cf628edd><img${ssrRenderAttr("src", post.image)}${ssrRenderAttr("alt", post.title)} data-v-cf628edd><span class="post-card__cat" data-v-cf628edd>${ssrInterpolate(post.category)}</span></div><div class="post-card__body" data-v-cf628edd><div class="post-card__meta" data-v-cf628edd><span data-v-cf628edd>${ssrInterpolate(formatDate(post.publishedAt))}</span><span class="post-card__dot" data-v-cf628edd></span><span data-v-cf628edd>${ssrInterpolate(post.readTime)}</span></div><h3 class="post-card__title" data-v-cf628edd>${ssrInterpolate(post.title)}</h3><p class="post-card__excerpt" data-v-cf628edd>${ssrInterpolate(post.excerpt)}</p><div class="post-card__footer" data-v-cf628edd><span class="post-card__author" data-v-cf628edd>${ssrInterpolate(post.author)}</span><button class="post-read-btn" data-v-cf628edd>Read More \u2192</button></div></div></article>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="blog-empty" data-v-cf628edd><p data-v-cf628edd>No articles found for your search.</p></div>`);
      }
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cf628edd"]]);

export { blog as default };
//# sourceMappingURL=blog-DmDvgORw.mjs.map
