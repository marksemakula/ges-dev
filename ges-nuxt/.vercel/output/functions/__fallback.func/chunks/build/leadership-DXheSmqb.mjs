import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, u as useSchemaOrg, d as definePerson, s as siteConfig } from './server.mjs';
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
  __name: "leadership",
  __ssrInlineRender: true,
  setup(__props) {
    const managementTeam = [
      {
        name: "Owek. Kyewalabye Male David",
        alternateName: ["Owekitiibwa Kyewalabye Male", "Kyewalabye Male", "Owekitiibwa Kyewalabye Male David"],
        position: "GES Managing Director",
        bio: "Owek. Kyewalabye Male David serves as the Managing Director of Gombe Education Services. An experienced institutional administrator and strategist, he coordinates operations, developmental planning, and strategic partnerships across all institutions within the GES portfolio, ensuring absolute operational efficiency and sustainable growth.",
        image: "/images/Owek. Kyewalabye David Male.png",
        email: "david.male@ges.ac.ug",
        linkedin: "https://linkedin.com/in/david-kiwalabye-male"
      },
      {
        name: "Mrs. Harriet Mulyanti",
        position: "GES Executive Chairperson",
        bio: "Mrs. Harriet Mulyanti is the founding pillar and Executive Chairperson of Gombe Education Services. With over three decades of visionary educational leadership, she has guided the establishment and growth of the GES network, dedicating her career to raising the benchmarks of school governance, student character development, and academic excellence in the region.",
        image: "/images/GES Executive Chairperson Mrs Harriet Mulyanti.JPG",
        email: "harriet.mulyanti@ges.ac.ug",
        linkedin: "https://linkedin.com/in/harriet-mulyanti"
      },
      {
        name: "Daniella Nakayenga",
        position: "GES Rector",
        bio: "Daniella Nakayenga is the Rector of Gombe Education Services. Combining extensive pedagogical expertise with modern administrative strategies, she oversees curriculum implementation, standardisation of teaching practices, and the integration of international education models across all GES schools.",
        image: "/images/GES Rector - Daniella Nakayenga.jpeg",
        email: "daniella.nakayenga@ges.ac.ug",
        linkedin: "https://linkedin.com/in/daniellanakayenga"
      }
    ];
    const slugify = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    useSchemaOrg(
      managementTeam.map((leader) => definePerson({
        "@id": `${siteConfig.url}/leadership#${slugify(leader.name)}`,
        name: leader.name,
        ...leader.alternateName ? { alternateName: leader.alternateName } : {},
        jobTitle: leader.position,
        description: leader.bio,
        image: siteConfig.url + encodeURI(leader.image),
        email: leader.email,
        sameAs: [leader.linkedin],
        worksFor: { "@id": `${siteConfig.url}/#identity` }
      }))
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-9d139788><section class="page-hero" data-v-9d139788><div class="container animate-fade-in" data-v-9d139788><p class="page-hero__eyebrow" data-v-9d139788>Governance</p><h1 class="page-hero__title" data-v-9d139788>Our Leadership</h1><p class="page-hero__subtitle" data-v-9d139788>Meet the visionary leaders who drive excellence, governance, and academic innovation across all Gombe Education Services institutions.</p></div></section><section class="section" data-v-9d139788><div class="container" data-v-9d139788><div class="section-header animate-fade-in" data-v-9d139788><p class="section-eyebrow" data-v-9d139788>Governance &amp; Executive Direction</p><h2 class="section-title" data-v-9d139788>Management Team</h2></div><div class="leaders-grid" data-v-9d139788><!--[-->`);
      ssrRenderList(managementTeam, (leader) => {
        _push(`<div class="leader-card ges-card-hover animate-slide-up" data-v-9d139788><div class="leader-card__photo" data-v-9d139788><img${ssrRenderAttr("src", leader.image)}${ssrRenderAttr("alt", leader.name)} data-v-9d139788></div><div class="leader-card__body" data-v-9d139788><h3 class="leader-card__name" data-v-9d139788>${ssrInterpolate(leader.name)}</h3><p class="leader-card__position" data-v-9d139788>${ssrInterpolate(leader.position)}</p><p class="leader-card__bio" data-v-9d139788>${ssrInterpolate(leader.bio)}</p><div class="leader-card__links" data-v-9d139788><a${ssrRenderAttr("href", `mailto:${leader.email}`)} class="leader-link" aria-label="Email" data-v-9d139788><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-9d139788><rect x="2" y="4" width="20" height="16" rx="2" data-v-9d139788></rect><path d="M22 7l-10 7L2 7" data-v-9d139788></path></svg></a><a${ssrRenderAttr("href", leader.linkedin)} target="_blank" rel="noopener noreferrer" class="leader-link" aria-label="LinkedIn" data-v-9d139788><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" data-v-9d139788><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" data-v-9d139788></path><circle cx="4" cy="4" r="2" data-v-9d139788></circle></svg></a></div></div></div>`);
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/leadership.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const leadership = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9d139788"]]);

export { leadership as default };
//# sourceMappingURL=leadership-DXheSmqb.mjs.map
