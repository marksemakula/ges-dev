import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "mentorship",
  __ssrInlineRender: true,
  setup(__props) {
    const mentors = [
      { name: "Dr. Anne Musoke", role: "Medical Doctor & Health Educator", image: "/images/uni1.jpg", expertise: ["Medicine", "Public Health", "Research"], bio: "With 15 years in medicine and public health, Dr. Musoke guides students interested in healthcare careers and scientific research." },
      { name: "Mr. Robert Ssali", role: "Technology Entrepreneur", image: "/images/uni3.jpg", expertise: ["Technology", "Entrepreneurship", "Innovation"], bio: "Founder of two successful tech startups, Robert helps students develop entrepreneurial mindsets and technology skills." },
      { name: "Mrs. Carol Atuhaire", role: "International Finance Specialist", image: "/images/bright-kwabena-kyere-rxB0L6nrP5M-unsplash.jpg", expertise: ["Finance", "Economics", "International Trade"], bio: "With experience at the World Bank and IMF, Carol provides insights into global finance and economics." },
      { name: "Prof. David Kizito", role: "Academic & Researcher", image: "/images/bright-kwabena-kyere-rxB0L6nrP5M-unsplash.jpg", expertise: ["Research", "Academia", "Leadership"], bio: "A distinguished professor guiding students through academic pathways and research methodologies." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-c355458a><section class="page-hero" data-v-c355458a><div class="container" data-v-c355458a><p class="page-hero__eyebrow" data-v-c355458a>GES Mentorship</p><h1 class="page-hero__title" data-v-c355458a>Mentorship Portal</h1><p class="page-hero__subtitle" data-v-c355458a>Connect with experienced mentors who are committed to guiding the next generation of leaders.</p></div></section><section class="section" data-v-c355458a><div class="container" data-v-c355458a><div class="mentors-grid" data-v-c355458a><!--[-->`);
      ssrRenderList(mentors, (mentor) => {
        _push(`<div class="mentor-card" data-v-c355458a><img${ssrRenderAttr("src", mentor.image)}${ssrRenderAttr("alt", mentor.name)} class="mentor-card__photo" data-v-c355458a><div class="mentor-card__body" data-v-c355458a><h3 class="mentor-card__name" data-v-c355458a>${ssrInterpolate(mentor.name)}</h3><p class="mentor-card__role" data-v-c355458a>${ssrInterpolate(mentor.role)}</p><div class="mentor-card__tags" data-v-c355458a><!--[-->`);
        ssrRenderList(mentor.expertise, (tag) => {
          _push(`<span class="expertise-tag" data-v-c355458a>${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div><p class="mentor-card__bio" data-v-c355458a>${ssrInterpolate(mentor.bio)}</p><button class="btn btn--primary btn--sm" data-v-c355458a>Request Mentorship</button></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="section section--muted" data-v-c355458a><div class="container" data-v-c355458a><div class="apply-card" data-v-c355458a><h2 class="apply-card__title" data-v-c355458a>Become a Mentor</h2><p class="apply-card__desc" data-v-c355458a>Share your expertise and help shape the future of GES students. We welcome professionals from all sectors.</p><a href="mailto:mentorship@ges.ac.ug" class="btn btn--primary" data-v-c355458a>Apply as Mentor</a></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/mentorship.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mentorship = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c355458a"]]);

export { mentorship as default };
//# sourceMappingURL=mentorship-ydailm9z.mjs.map
