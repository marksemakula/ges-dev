import { defineComponent, ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "ges-life",
  __ssrInlineRender: true,
  setup(__props) {
    const feedItems = ref([
      { id: 1, title: "Annual Sports Day 2024", text: "Students from all our campuses competed in athletics, football, and swimming in a spectacular display of teamwork and sportsmanship.", image: "/images/uni2.avif", category: "Sports", date: "March 2024" },
      { id: 2, title: "Science Fair Highlights", text: "Our students showcased innovative projects ranging from water purification systems to renewable energy solutions, impressing judges from industry and academia.", image: "/images/science.avif", category: "Academics", date: "February 2024" },
      { id: 3, title: "Arts & Culture Festival", text: "A wonderful celebration of creativity featuring drama, music, visual arts, and traditional dance from all our campuses.", image: "/images/TD.jpg", category: "Arts", date: "January 2024" },
      { id: 4, title: "Community Service Initiative", text: "GES students led a clean-up and tree-planting campaign across local communities, demonstrating our commitment to environmental stewardship.", image: "/images/java-house.avif", category: "Community", date: "December 2023" },
      { id: 5, title: "Academic Excellence Ceremony", text: "Top performing students across our schools were celebrated for their outstanding academic achievements in the annual awards ceremony.", image: "/images/uni2.avif", category: "Academics", date: "November 2023" },
      { id: 6, title: "International Exchange Programme", text: "GES students visited partner schools in the UK and returned with fresh perspectives and lasting friendships.", image: "/images/TD.jpg", category: "Global", date: "October 2023" }
    ]);
    const categories = computed(() => ["All", ...new Set(feedItems.value.map((i) => i.category))]);
    const selected = ref("All");
    const filteredFeed = computed(
      () => selected.value === "All" ? feedItems.value : feedItems.value.filter((i) => i.category === selected.value)
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-d9f6fbce><section class="page-hero" data-v-d9f6fbce><div class="container" data-v-d9f6fbce><p class="page-hero__eyebrow" data-v-d9f6fbce>Campus Life</p><h1 class="page-hero__title" data-v-d9f6fbce>GES Life</h1><p class="page-hero__subtitle" data-v-d9f6fbce>A glimpse into the vibrant community life across all GES institutions - from sports and arts to community service and academic achievements.</p></div></section><section class="section" data-v-d9f6fbce><div class="container" data-v-d9f6fbce><div class="feed-filters" data-v-d9f6fbce><!--[-->`);
      ssrRenderList(categories.value, (cat) => {
        _push(`<button class="${ssrRenderClass(["filter-btn", { "filter-btn--active": selected.value === cat }])}" data-v-d9f6fbce>${ssrInterpolate(cat)}</button>`);
      });
      _push(`<!--]--></div><div class="feed-grid" data-v-d9f6fbce><!--[-->`);
      ssrRenderList(filteredFeed.value, (item) => {
        _push(`<div class="feed-card" data-v-d9f6fbce><div class="feed-card__img" data-v-d9f6fbce><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} data-v-d9f6fbce><span class="feed-card__badge" data-v-d9f6fbce>${ssrInterpolate(item.category)}</span></div><div class="feed-card__body" data-v-d9f6fbce><p class="feed-card__date" data-v-d9f6fbce>${ssrInterpolate(item.date)}</p><h3 class="feed-card__title" data-v-d9f6fbce>${ssrInterpolate(item.title)}</h3><p class="feed-card__text" data-v-d9f6fbce>${ssrInterpolate(item.text)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ges-life.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gesLife = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d9f6fbce"]]);

export { gesLife as default };
//# sourceMappingURL=ges-life-BAKkoQz4.mjs.map
