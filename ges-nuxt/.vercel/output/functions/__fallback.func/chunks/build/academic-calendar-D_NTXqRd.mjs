import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
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
  __name: "academic-calendar",
  __ssrInlineRender: true,
  setup(__props) {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const terms = [
      {
        name: "Term 1",
        dates: "February \u2013 April",
        events: [
          { date: "5 Feb", name: "Term Opens", type: "opening" },
          { date: "14 Feb", name: "Inter-House Sports Begin", type: "event" },
          { date: "15\u201319 Mar", name: "Mid-Term Break", type: "holiday" },
          { date: "12 Apr", name: "End of Term Exams", type: "exam" },
          { date: "26 Apr", name: "Term Closes", type: "closing" }
        ]
      },
      {
        name: "Term 2",
        dates: "May \u2013 August",
        events: [
          { date: "3 May", name: "Term Opens", type: "opening" },
          { date: "10\u201314 Jun", name: "Mock Examinations (S4/S6)", type: "exam" },
          { date: "16\u201320 Jun", name: "Mid-Term Break", type: "holiday" },
          { date: "15 Jul", name: "Annual Science Fair", type: "event" },
          { date: "9 Aug", name: "Term Closes", type: "closing" }
        ]
      },
      {
        name: "Term 3",
        dates: "September \u2013 December",
        events: [
          { date: "6 Sep", name: "Term Opens", type: "opening" },
          { date: "10 Oct", name: "GES Annual Day", type: "event" },
          { date: "20\u201324 Oct", name: "Mid-Term Break", type: "holiday" },
          { date: "1\u201312 Nov", name: "National Examinations (UNEB)", type: "exam" },
          { date: "5 Dec", name: "Prize-Giving & Graduation", type: "event" },
          { date: "14 Dec", name: "Term Closes", type: "closing" }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-d197a444><section class="page-hero" data-v-d197a444><div class="container" data-v-d197a444><p class="page-hero__eyebrow" data-v-d197a444>GES Academic Calendar</p><h1 class="page-hero__title" data-v-d197a444>Academic Calendar ${ssrInterpolate(unref(currentYear))}/${ssrInterpolate(unref(currentYear) + 1)}</h1><p class="page-hero__subtitle" data-v-d197a444>Key dates, terms, and events across all GES institutions.</p></div></section><section class="section" data-v-d197a444><div class="container" data-v-d197a444><div class="terms-grid" data-v-d197a444><!--[-->`);
      ssrRenderList(terms, (term) => {
        _push(`<div class="term-card" data-v-d197a444><div class="term-card__header" data-v-d197a444><h3 class="term-card__name" data-v-d197a444>${ssrInterpolate(term.name)}</h3><span class="term-card__dates" data-v-d197a444>${ssrInterpolate(term.dates)}</span></div><ul class="term-card__events" data-v-d197a444><!--[-->`);
        ssrRenderList(term.events, (event) => {
          _push(`<li class="term-event" data-v-d197a444><span class="term-event__date" data-v-d197a444>${ssrInterpolate(event.date)}</span><span class="term-event__name" data-v-d197a444>${ssrInterpolate(event.name)}</span><span class="${ssrRenderClass(["term-event__tag", `term-event__tag--${event.type}`])}" data-v-d197a444>${ssrInterpolate(event.type)}</span></li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/academic-calendar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const academicCalendar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d197a444"]]);

export { academicCalendar as default };
//# sourceMappingURL=academic-calendar-D_NTXqRd.mjs.map
