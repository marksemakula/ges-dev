import { defineComponent, mergeProps, resolveComponent, withCtx, openBlock, createBlock, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "InstitutionLayout",
  __ssrInlineRender: true,
  props: {
    name: {},
    shortName: { default: "" },
    type: {},
    tagline: {},
    description: {},
    logo: { default: "" },
    email: { default: "info@ges.ac.ug" },
    accent: { default: "#E6B219" },
    accentDark: { default: "#1A1A1A" },
    quickInfo: { default: () => [] },
    highlights: { default: () => [] },
    programmes: { default: () => [] }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inst-page" }, _attrs))} data-v-739ef95e><section class="inst-hero" style="${ssrRenderStyle({ background: `linear-gradient(135deg, ${__props.accentDark} 0%, ${__props.accent} 100%)` })}" data-v-739ef95e><div class="inst-hero__overlay" data-v-739ef95e></div><nav class="inst-nav container" data-v-739ef95e>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/",
        class: "inst-nav__back"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-739ef95e${_scopeId}><polyline points="15 18 9 12 15 6" data-v-739ef95e${_scopeId}></polyline></svg> Back to GES `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                createVNode("polyline", { points: "15 18 9 12 15 6" })
              ])),
              createTextVNode(" Back to GES ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="inst-nav__brand" data-v-739ef95e>`);
      if (__props.logo) {
        _push(`<img${ssrRenderAttr("src", __props.logo)}${ssrRenderAttr("alt", __props.name)} class="inst-nav__logo" data-v-739ef95e>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="inst-nav__name" data-v-739ef95e>${ssrInterpolate(__props.name)}</span></div></nav><div class="inst-hero__content container" data-v-739ef95e><p class="inst-hero__type" data-v-739ef95e>${ssrInterpolate(__props.type)}</p><h1 class="inst-hero__title" data-v-739ef95e>${ssrInterpolate(__props.name)}</h1><p class="inst-hero__tagline" data-v-739ef95e>${ssrInterpolate(__props.tagline)}</p><div class="inst-hero__actions" data-v-739ef95e><a${ssrRenderAttr("href", `mailto:${__props.email}`)} class="btn btn--white" data-v-739ef95e>Contact Us</a>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/about",
        class: "btn btn--outline-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About GES`);
          } else {
            return [
              createTextVNode("About GES")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="section quick-info" data-v-739ef95e><div class="container" data-v-739ef95e><div class="qinfo-grid" data-v-739ef95e><!--[-->`);
      ssrRenderList(__props.quickInfo, (info) => {
        var _a;
        _push(`<div class="qinfo-item" data-v-739ef95e><div class="qinfo-icon" data-v-739ef95e>${(_a = info.svg) != null ? _a : ""}</div><div data-v-739ef95e><p class="qinfo-label" data-v-739ef95e>${ssrInterpolate(info.label)}</p><p class="qinfo-value" data-v-739ef95e>${ssrInterpolate(info.value)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="section section--muted" data-v-739ef95e><div class="container" data-v-739ef95e><div class="overview-grid" data-v-739ef95e><div data-v-739ef95e><p class="section-eyebrow" data-v-739ef95e>Overview</p><h2 class="section-title" data-v-739ef95e>About ${ssrInterpolate(__props.shortName)}</h2><div class="overview-text" data-v-739ef95e>`);
      ssrRenderSlot(_ctx.$slots, "overview", {}, () => {
        _push(`<p data-v-739ef95e>${ssrInterpolate(__props.description)}</p>`);
      }, _push, _parent);
      _push(`</div></div><div class="highlights" data-v-739ef95e><!--[-->`);
      ssrRenderList(__props.highlights, (h) => {
        var _a;
        _push(`<div class="highlight-card" data-v-739ef95e><div class="highlight-card__icon" data-v-739ef95e>${(_a = h.svg) != null ? _a : ""}</div><h4 class="highlight-card__title" data-v-739ef95e>${ssrInterpolate(h.title)}</h4><p class="highlight-card__desc" data-v-739ef95e>${ssrInterpolate(h.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
      if (__props.programmes.length) {
        _push(`<section class="section" data-v-739ef95e><div class="container" data-v-739ef95e><div class="section-header" data-v-739ef95e><p class="section-eyebrow" data-v-739ef95e>Academics</p><h2 class="section-title" data-v-739ef95e>Programmes Offered</h2></div><div class="prog-grid" data-v-739ef95e><!--[-->`);
        ssrRenderList(__props.programmes, (prog) => {
          _push(`<div class="prog-card" data-v-739ef95e><span class="prog-card__level" data-v-739ef95e>${ssrInterpolate(prog.level)}</span><h3 class="prog-card__name" data-v-739ef95e>${ssrInterpolate(prog.name)}</h3><p class="prog-card__desc" data-v-739ef95e>${ssrInterpolate(prog.description)}</p></div>`);
        });
        _push(`<!--]--></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="inst-cta" data-v-739ef95e><div class="container inst-cta__inner" data-v-739ef95e><div data-v-739ef95e><h2 class="inst-cta__title" data-v-739ef95e>Interested in Joining ${ssrInterpolate(__props.shortName)}?</h2><p class="inst-cta__sub" data-v-739ef95e>Contact us to find out more about admissions and enrolment.</p></div><div class="inst-cta__actions" data-v-739ef95e><a${ssrRenderAttr("href", `mailto:${__props.email}`)} class="btn btn--white" data-v-739ef95e>Enquire Now</a>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/mentorship",
        class: "btn btn--outline-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Mentorship`);
          } else {
            return [
              createTextVNode("Mentorship")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InstitutionLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const InstitutionLayout = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-739ef95e"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "jsbi",
  __ssrInlineRender: true,
  setup(__props) {
    const quickInfo = [
      { label: "Location", value: "Kampala, Uganda", svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' },
      { label: "Level", value: "Higher Education", svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/></svg>' },
      { label: "Duration", value: "1\u20133 Years", svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' },
      { label: "Study Mode", value: "Full & Part Time", svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>' }
    ];
    const highlights = [
      { title: "Industry Partnerships", description: "Close collaboration with leading Ugandan and international businesses providing internships and placements.", svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>' },
      { title: "Entrepreneurship Hub", description: "Dedicated startup incubator and innovation lab for students to develop business ideas.", svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>' },
      { title: "Professional Certifications", description: "Accredited programmes leading to nationally and internationally recognised qualifications.", svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>' }
    ];
    const programmes = [
      { name: "Diploma in Business Administration", level: "2 Years", description: "Comprehensive foundation in business management, accounting, and marketing." },
      { name: "Certificate in Entrepreneurship", level: "1 Year", description: "Practical programme for aspiring entrepreneurs and small business owners." },
      { name: "Diploma in Human Resource Management", level: "2 Years", description: "Professional HR qualification recognised by industry leaders across East Africa." },
      { name: "Bachelor of Business Administration", level: "3 Years", description: "Full degree programme in partnership with accredited university partners." },
      { name: "Short Courses & Professional Development", level: "Flexible", description: "Modular CPD courses in leadership, finance, digital marketing, and more." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(InstitutionLayout, mergeProps({
        name: "Gombe Institute of Business Science & Technology (GIBST)",
        "short-name": "GIBST",
        type: "Higher Education \xB7 Business & Entrepreneurship",
        tagline: "Equipping Uganda's next generation of entrepreneurs and business leaders.",
        description: "The Gombe Institute of Business Science & Technology (GIBST) is GES's flagship higher education institution, offering professional business and entrepreneurship programmes. Working closely with industry partners, GIBST combines academic rigour with real-world application to produce graduates ready to lead and innovate.",
        logo: "/images/Jimmy Ssekasi Business Institute Logo.png",
        email: "info@jsbi.ac.ug",
        accent: "#8B4513",
        "accent-dark": "#5D2E0C",
        "quick-info": quickInfo,
        highlights,
        programmes
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/institutions/jsbi.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=jsbi-BADlV0N9.mjs.map
