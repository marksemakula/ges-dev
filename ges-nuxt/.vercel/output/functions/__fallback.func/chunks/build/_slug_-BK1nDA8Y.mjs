import { _ as _export_sfc, e as useRoute, i as institutions, f as createError, u as useSchemaOrg, s as siteConfig, b as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, unref, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const slug = route.params.slug;
    const inst = institutions.find(
      (i) => i.slug === slug && i.path === `/institutions/${i.slug}`
    );
    if (!inst) {
      throw createError({ statusCode: 404, statusMessage: "Institution not found", fatal: true });
    }
    const otherInstitutions = institutions.filter((i) => i.slug !== slug);
    useSchemaOrg([
      {
        "@type": "EducationalOrganization",
        "@id": `${siteConfig.url}${inst.path}#organization`,
        name: inst.name,
        alternateName: inst.alt,
        description: inst.description,
        url: siteConfig.url + inst.path,
        sameAs: [inst.externalUrl],
        image: siteConfig.url + encodeURI(inst.image),
        parentOrganization: { "@id": `${siteConfig.url}/#identity` }
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      if (unref(inst)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-57f93d68><section class="inst-hero" data-v-57f93d68><img${ssrRenderAttr("src", unref(inst).image)}${ssrRenderAttr("alt", `${unref(inst).name} students`)} class="inst-hero__img" data-v-57f93d68><div class="inst-hero__overlay" data-v-57f93d68></div><div class="container inst-hero__content" data-v-57f93d68><img${ssrRenderAttr("src", unref(inst).logo)}${ssrRenderAttr("alt", `${unref(inst).name} logo`)} class="inst-hero__logo" data-v-57f93d68><p class="inst-hero__eyebrow" data-v-57f93d68>${ssrInterpolate(unref(inst).type)}</p><h1 class="inst-hero__title" data-v-57f93d68>${ssrInterpolate(unref(inst).name)}</h1></div></section><section class="section" data-v-57f93d68><div class="container container--narrow" data-v-57f93d68><p class="inst-body__lede" data-v-57f93d68>${ssrInterpolate(unref(inst).description)}</p><p class="inst-body__text" data-v-57f93d68> As a member of the `);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Gombe Education Service`);
            } else {
              return [
                createTextVNode("Gombe Education Service")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` network, ${ssrInterpolate(unref(inst).name)} shares the GES vision of academic excellence, character formation and global readiness. Admissions, term dates and school news are published on the school&#39;s own website. </p><div class="inst-body__actions" data-v-57f93d68><a${ssrRenderAttr("href", unref(inst).externalUrl)} target="_blank" rel="noopener" class="btn btn--primary" data-v-57f93d68> Visit Official Website <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-57f93d68><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" data-v-57f93d68></path><polyline points="15 3 21 3 21 9" data-v-57f93d68></polyline><line x1="10" y1="14" x2="21" y2="3" data-v-57f93d68></line></svg></a>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/academic-calendar",
          class: "btn btn--outline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Academic Calendar`);
            } else {
              return [
                createTextVNode("Academic Calendar")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="inst-body__network" data-v-57f93d68><h2 class="inst-body__network-title" data-v-57f93d68>More GES Institutions</h2><ul class="inst-body__network-list" data-v-57f93d68><!--[-->`);
        ssrRenderList(unref(otherInstitutions), (other) => {
          _push(`<li data-v-57f93d68>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: other.path
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(other.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(other.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div></div></section></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/institutions/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-57f93d68"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-BK1nDA8Y.mjs.map
