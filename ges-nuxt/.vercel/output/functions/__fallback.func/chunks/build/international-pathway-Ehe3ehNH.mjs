import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "international-pathway",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      { title: "University Placement", description: "Placement support for top universities in the UK, USA, Canada, and Australia.", svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>' },
      { title: "Scholarship Guidance", description: "Expert advice on available scholarships and financial aid opportunities.", svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>' },
      { title: "English Preparation", description: "IELTS and TOEFL preparation classes led by certified instructors.", svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>' },
      { title: "Visa & Travel Support", description: "Complete assistance with visa applications and pre-departure orientation.", svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>' }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-14f2d1ac><section class="page-hero" data-v-14f2d1ac><div class="container" data-v-14f2d1ac><p class="page-hero__eyebrow" data-v-14f2d1ac>GES International</p><h1 class="page-hero__title" data-v-14f2d1ac>International Education<br data-v-14f2d1ac>Pathway Programme</h1><p class="page-hero__subtitle" data-v-14f2d1ac>Opening doors to world-class universities and international career opportunities for GES students.</p><div class="hero-actions" data-v-14f2d1ac><a href="https://ipp.ges.ac.ug/" target="_blank" rel="noopener noreferrer" class="btn btn--teal" data-v-14f2d1ac>Visit IPP Website \u2192</a></div></div></section><section class="section" data-v-14f2d1ac><div class="container" data-v-14f2d1ac><div class="ipp-grid" data-v-14f2d1ac><div data-v-14f2d1ac><p class="section-eyebrow" data-v-14f2d1ac>About the Programme</p><h2 class="section-title" data-v-14f2d1ac>Your Gateway to Global Education</h2><p class="ipp-text" data-v-14f2d1ac>The International Education Pathway Programme (IPP) is GES&#39;s flagship initiative connecting Ugandan students to top universities worldwide. Through strategic partnerships with institutions in the UK, USA, Canada, and Australia, we provide a structured pathway from secondary school to higher education abroad.</p><p class="ipp-text" style="${ssrRenderStyle({ "margin-top": "1rem" })}" data-v-14f2d1ac>Our dedicated counsellors support students through every step - from choosing the right university to visa applications and pre-departure preparation.</p></div><div class="ipp-features" data-v-14f2d1ac><!--[-->`);
      ssrRenderList(features, (feature) => {
        var _a;
        _push(`<div class="ipp-feature" data-v-14f2d1ac><div class="ipp-feature__icon" data-v-14f2d1ac>${(_a = feature.svg) != null ? _a : ""}</div><div data-v-14f2d1ac><h4 class="ipp-feature__title" data-v-14f2d1ac>${ssrInterpolate(feature.title)}</h4><p class="ipp-feature__desc" data-v-14f2d1ac>${ssrInterpolate(feature.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/international-pathway.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const internationalPathway = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-14f2d1ac"]]);

export { internationalPathway as default };
//# sourceMappingURL=international-pathway-Ehe3ehNH.mjs.map
