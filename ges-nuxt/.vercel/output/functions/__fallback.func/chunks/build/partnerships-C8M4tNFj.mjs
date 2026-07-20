import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "partnerships",
  __ssrInlineRender: true,
  setup(__props) {
    const partners = [
      { name: "University of Cambridge", type: "Academic Partnership", description: "Collaboration on curriculum development and teacher training programmes.", benefits: ["Curriculum Development", "Teacher Exchange", "Student Programmes"], established: "2018", website: "https://cambridge.org" },
      { name: "UNESCO", type: "Educational Development", description: "Supporting educational development initiatives and quality assurance programmes.", benefits: ["Quality Assurance", "Professional Development", "Research"], established: "2020", website: "https://unesco.org" },
      { name: "British Council", type: "Cultural Exchange", description: "English language programmes and cultural exchange initiatives.", benefits: ["Language Programmes", "Cultural Exchange", "Professional Development"], established: "2019", website: "https://britishcouncil.org" },
      { name: "Microsoft Education", type: "Technology Partnership", description: "Digital transformation and technology integration in education.", benefits: ["Digital Tools", "Teacher Training", "Student Certification"], established: "2021", website: "https://microsoft.com/education" },
      { name: "World Bank Education", type: "Development Partnership", description: "Supporting educational infrastructure and capacity building initiatives.", benefits: ["Infrastructure", "Capacity Building", "Research Support"], established: "2017", website: "https://worldbank.org/education" },
      { name: "Aga Khan Foundation", type: "Educational Excellence", description: "Promoting educational excellence and community development programmes.", benefits: ["Community Development", "Scholarships", "Leadership Training"], established: "2016", website: "https://akdn.org" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-9658ada2><section class="page-hero" data-v-9658ada2><div class="container" data-v-9658ada2><p class="page-hero__eyebrow" data-v-9658ada2>Global Collaboration</p><h1 class="page-hero__title" data-v-9658ada2>Our Partnerships</h1><p class="page-hero__subtitle" data-v-9658ada2>Strategic alliances with world-class organisations that enrich GES education and open global doors for our students.</p></div></section><section class="section section--muted" data-v-9658ada2><div class="container" data-v-9658ada2><div class="section-header" data-v-9658ada2><p class="section-eyebrow" data-v-9658ada2>Our Partners</p><h2 class="section-title" data-v-9658ada2>Global Collaborators</h2></div><div class="partners-grid" data-v-9658ada2><!--[-->`);
      ssrRenderList(partners, (partner) => {
        _push(`<div class="partner-card" data-v-9658ada2><div class="partner-card__header" data-v-9658ada2><span class="partner-card__type" data-v-9658ada2>${ssrInterpolate(partner.type)}</span><span class="partner-card__year" data-v-9658ada2>Since ${ssrInterpolate(partner.established)}</span></div><h3 class="partner-card__name" data-v-9658ada2>${ssrInterpolate(partner.name)}</h3><p class="partner-card__desc" data-v-9658ada2>${ssrInterpolate(partner.description)}</p><div class="partner-card__benefits" data-v-9658ada2><!--[-->`);
        ssrRenderList(partner.benefits, (benefit) => {
          _push(`<span class="benefit-tag" data-v-9658ada2>${ssrInterpolate(benefit)}</span>`);
        });
        _push(`<!--]--></div><a${ssrRenderAttr("href", partner.website)} target="_blank" rel="noopener noreferrer" class="partner-card__link" data-v-9658ada2> Visit Website \u2192 </a></div>`);
      });
      _push(`<!--]--></div></div></section><section class="section" data-v-9658ada2><div class="container" data-v-9658ada2><div class="partner-cta" data-v-9658ada2><h2 class="partner-cta__title" data-v-9658ada2>Interested in Partnering with GES?</h2><p class="partner-cta__sub" data-v-9658ada2>We welcome collaborations with institutions and organisations that share our commitment to educational excellence.</p><a href="mailto:partnerships@ges.ac.ug" class="btn btn--primary" data-v-9658ada2>Contact Us</a></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/partnerships.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const partnerships = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9658ada2"]]);

export { partnerships as default };
//# sourceMappingURL=partnerships-C8M4tNFj.mjs.map
