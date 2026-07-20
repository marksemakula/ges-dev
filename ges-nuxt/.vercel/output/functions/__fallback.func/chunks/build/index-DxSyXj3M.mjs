import { _ as _export_sfc, a as _imports_0, b as __nuxt_component_0$1, c as __nuxt_component_1$1 } from './server.mjs';
import { defineComponent, ref, resolveComponent, mergeProps, withCtx, createTextVNode, openBlock, createBlock, createVNode, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
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
import 'vue-router';
import 'unhead/plugins';
import 'unhead/utils';
import '@vueuse/core';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';

const _imports_1 = publicAssetsURL("/images/Owek. Kyewalabye David Male.png");
const _imports_2 = publicAssetsURL("/images/Mrs. Rosalind Tanayita Kyewalabye.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const slideshowImages = [
      "/images/slideshow/slideshow_1.jpg",
      "/images/slideshow/slideshow_2.jpg",
      "/images/slideshow/slideshow_3.jpg",
      "/images/slideshow/slideshow_4.jpg",
      "/images/slideshow/slideshow_5.jpg"
    ];
    ref(0);
    const sliceIndices = ref([0, 1, 2]);
    function randomPos() {
      const r = () => `${Math.round(15 + Math.random() * 70)}%`;
      return {
        "--drift-from": `${r()} ${r()}`,
        "--drift-to": `${r()} ${r()}`
      };
    }
    const sliceStyles = ref([randomPos(), randomPos(), randomPos()]);
    function sliceImage(s) {
      return slideshowImages[sliceIndices.value[s]];
    }
    const recognisedBy = [
      { name: "Ministry of Education", src: "/images/MoES1.png" },
      { name: "British Council", src: "/images/British Council.png" },
      { name: "Kingdom of Buganda", src: "/images/Flag_of_Buganda.svg" },
      { name: "Braemar College", src: "/images/braemar.webp" },
      { name: "KISU", src: "/images/KISU.png" },
      { name: "IEAC", src: "/images/IEAC.png" },
      { name: "UNESCO", src: "/images/UNESCO.png" },
      { name: "Microsoft Education", src: "/images/MicroSoft Education.png" },
      { name: "World Bank", src: "/images/World Bank.png" },
      { name: "University of Cambridge", src: "/images/University_of_Cambridge-Logo.png" },
      { name: "Aga Khan Foundation", src: "/images/Aga Khan Foundation.png" },
      { name: "NCHE", src: "/images/NCHE.png" }
    ];
    const logoScales = {
      "British Council": 2,
      "University of Cambridge": 2,
      "Microsoft Education": 2,
      "NCHE": 2,
      "Aga Khan Foundation": 2,
      "World Bank": 2.2,
      "UNESCO": 2.8,
      "IEAC": 1.4,
      "SAI": 1.1
    };
    const gapBefore = {
      "Braemar College": 2,
      "SAI": 4,
      "KISU": 4,
      "IEAC": 4,
      "UNESCO": 2,
      "Microsoft Education": 2,
      "World Bank": 2
    };
    const partnerLogos = [
      { name: "Kingdom of Buganda", src: "/images/Flag_of_Buganda.svg" },
      { name: "Braemar College", src: "/images/braemar.webp" },
      { name: "St. Andrew Kaggwa GHS", src: "/images/Gombe High logo.png" },
      { name: "Gombe Junior School", src: "/images/Gombe Junior School logo.png" },
      { name: "SISU", src: "/images/scooby-logo.png" },
      { name: "Gombe Institute of Business Science & Technology (GIBST)", src: "/images/Jimmy Ssekasi Business Institute Logo.png" },
      { name: "KISU", src: "/images/KISU.png" },
      { name: "Ministry of Education", src: "/images/MoES1.png" },
      { name: "UTB", src: "/images/UTB.png" }
    ];
    const institutions = [
      { name: "Gombe Institute of Business Science & Technology (GIBST)", type: "Vocational Institute", logo: "/images/Jimmy Ssekasi Business Institute Logo.png", image: "/images/JIMMY SEKASI.JPG", path: "/institutions/jsbi", url: "https://www.gibst.ac.ug/", description: "Equipping students with practical business, vocational, and hands-on skills." },
      { name: "St. Andrew Kaggwa Gombe High School - Bujuuko", type: "Secondary School", logo: "/images/Gombe High logo.png", image: "/images/Gombe High School - Bujuuko.png", path: "/institutions/sakghs-bujuuko", url: "https://bujuuko.gombehighschool.ac.ug/", description: "Nurturing tomorrow's leaders through quality education." },
      { name: "St. Andrew Kaggwa Gombe High School - Kawaala", type: "Secondary School", logo: "/images/Gombe High logo.png", image: "/images/IMG_9718.JPG", path: "/institutions/sakghs-kawaala", url: "https://kawaala.gombehighschool.ac.ug/", description: "Advanced secondary education with a focus on academic excellence." },
      { name: "ScoobyDoo International School Uganda - Gulu", type: "International School", logo: "/images/scooby-logo.png", image: "/images/26-08-2015-01-12-29_IMG_3773.jpg", path: "/institutions/sisu-gulu", url: "https://gulu.scoobydoointernational.ac.ug/", description: "Bringing international education to Northern Uganda." },
      { name: "Gombe Junior School - Kampala", type: "UNEB Licensed Primary School", logo: "/images/Gombe Junior School logo.png", image: "/images/GJS - Kampala.JPG", path: "/institutions/gjs-kampala", url: "https://kikajjo.gombejuniorschool.ac.ug/", description: "Building strong foundations for lifelong learning." },
      { name: "Gombe Junior School - Gulu", type: "UNEB Licensed Primary School", logo: "/images/Gombe Junior School logo.png", image: "/images/GJS Gulu class.jpeg", path: "/institutions/gjs-gulu", url: "https://gulu.gombejuniorschool.ac.ug/", description: "Extending foundational education excellence to Northern Uganda." },
      { name: "ScoobyDoo International School Uganda - Kampala", type: "International School", logo: "/images/scooby-logo.png", image: "/images/26-08-2015-12-55-02_1.jpg", path: "/institutions/sisu-kampala", url: "https://katale.scoobydoointernational.ac.ug/", description: "International curriculum preparing students for global success." }
    ];
    const featuredPosts = [
      { id: "1", title: "The Future of Education: Embracing Digital Learning", excerpt: "Exploring how digital transformation is reshaping the educational landscape and preparing students for tomorrow's challenges.", category: "Innovation", image: "/images/Future of Education, Embracing Digital Learning.png" },
      { id: "2", title: "Building Character Through Education", excerpt: "How GES integrates character development into our curriculum to nurture well-rounded individuals.", category: "Character", image: "/images/15-09-2015-12-03-57_DSCN1414.jpg" },
      { id: "3", title: "STEM Education Excellence at GES", excerpt: "Discover how our STEM programmes are preparing students for careers in science, technology, engineering, and mathematics.", category: "STEM", image: "/images/IMG_9718.JPG" }
    ];
    const involved = [
      { title: "Calendar", path: "/academic-calendar", image: "/images/26-08-2015-12-49-54__MG_8635.jpg", desc: "View term dates, holidays, and key events across all GES institutions." },
      { title: "Mentorship Portal", path: "#", image: "/images/IMG_9873.JPG", desc: "Connect with mentors and grow through guidance from the GES community." },
      { title: "International Pathway", path: "/international-pathway", image: "/images/ieppheader.png", desc: "Discover the International Pathway Programme and global study opportunities." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ClientOnly = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))} data-v-27b6896d><section class="hero-split" data-v-27b6896d><div class="hero-split__left" data-v-27b6896d><div class="hero-split__content" data-v-27b6896d><img${ssrRenderAttr("src", _imports_0)} alt="Gombe Education Service" class="hero-split__logo" data-v-27b6896d><h1 class="hero-split__title" data-v-27b6896d>Shaping Leaders,<br data-v-27b6896d>Building Futures</h1><p class="hero-split__text" data-v-27b6896d> Gombe Education Service has provided world-class education since 1995 - fostering academic excellence, character, and global readiness across our network of institutions. </p><div class="hero-split__actions" data-v-27b6896d>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/about",
        class: "btn-rescue btn-rescue--primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Get in Touch <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-v-27b6896d${_scopeId}><line x1="5" y1="12" x2="19" y2="12" data-v-27b6896d${_scopeId}></line><polyline points="12 5 19 12 12 19" data-v-27b6896d${_scopeId}></polyline></svg>`);
          } else {
            return [
              createTextVNode(" Get in Touch "),
              (openBlock(), createBlock("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2.5"
              }, [
                createVNode("line", {
                  x1: "5",
                  y1: "12",
                  x2: "19",
                  y2: "12"
                }),
                createVNode("polyline", { points: "12 5 19 12 12 19" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/about",
        class: "btn-rescue btn-rescue--outline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Learn More`);
          } else {
            return [
              createTextVNode("Learn More")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="hero-split__media" data-v-27b6896d><!--[-->`);
      ssrRenderList(3, (s) => {
        _push(`<div class="hero-split__slice" data-v-27b6896d><div class="hero-split__img" style="${ssrRenderStyle([{ backgroundImage: `url('${sliceImage(s - 1)}')` }, sliceStyles.value[s - 1]])}" role="img" aria-label="Students of Gombe Education Service" data-v-27b6896d></div></div>`);
      });
      _push(`<!--]--></div><div class="hero-split__recognised" data-v-27b6896d><div class="hero-split__recognised-block" data-v-27b6896d><span class="hero-split__recognised-label" data-v-27b6896d>Recognised by</span><div class="hero-split__recognised-logos" data-v-27b6896d><!--[-->`);
      ssrRenderList(recognisedBy, (logo) => {
        _push(`<img${ssrRenderAttr("src", logo.src)}${ssrRenderAttr("alt", logo.name)}${ssrRenderAttr("title", logo.name)} style="${ssrRenderStyle({ "--logo-scale": logoScales[logo.name] || 1, "--gap-mult": gapBefore[logo.name] || 1 })}" data-v-27b6896d>`);
      });
      _push(`<!--]--></div></div></div></section><section class="rpl-section" data-v-27b6896d><div class="container-rpl" data-v-27b6896d><div class="rpl-section-heading rpl-section-heading--center" data-v-27b6896d><h2 class="rpl-section-heading__title" data-v-27b6896d>We nurture academic excellence, character and global readiness</h2><p class="rpl-section-heading__intro" data-v-27b6896d> A consortium of institutions providing quality holistic education from Kindergarten to Tertiary level across Uganda - all embracing the same vision and mission. </p></div></div></section><section class="rpl-section" data-v-27b6896d><div class="container-rpl" data-v-27b6896d><div class="quote-cta" data-v-27b6896d><div class="quote-cta__media quote-cta__media--left" data-v-27b6896d><img${ssrRenderAttr("src", _imports_1)} alt="Owek. Kyewalabye Male David" data-v-27b6896d><div class="quote-cta__author" data-v-27b6896d><strong data-v-27b6896d>Owek. Kyewalabye Male David</strong><span data-v-27b6896d>Managing Director, Gombe Education Service</span></div></div><div class="quote-cta__content" data-v-27b6896d><blockquote class="quote-cta__text" data-v-27b6896d> &quot;Our institutions are built on the conviction that every child deserves an education that nurtures their full potential - academically, morally, and as a citizen of the world.&quot; </blockquote>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/leadership",
        class: "btn-rescue btn-rescue--primary quote-cta__btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Meet Our Leadership`);
          } else {
            return [
              createTextVNode("Meet Our Leadership")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="quote-cta__media quote-cta__media--right" data-v-27b6896d><img${ssrRenderAttr("src", _imports_2)} alt="Mrs. Rosalind Tanayita Kyewalabye" data-v-27b6896d><div class="quote-cta__author" data-v-27b6896d><strong data-v-27b6896d>Late Mrs. Rosalind Tanayita Kyewalabye</strong><span data-v-27b6896d>Co-Founder - Gombe Education Service</span></div></div></div></div></section><section class="rpl-section rpl-section--grey" data-v-27b6896d><div class="container-rpl" data-v-27b6896d><div class="rpl-section-heading" data-v-27b6896d><h2 class="rpl-section-heading__title" data-v-27b6896d>Institutions Under GES</h2></div><ul class="inst-list" data-v-27b6896d><li class="inst-list__item" data-v-27b6896d><div class="teaser-hl" data-v-27b6896d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: institutions[0].path,
        "aria-label": institutions[0].name,
        class: "teaser-hl__link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="teaser-hl__media" data-v-27b6896d${_scopeId}><img${ssrRenderAttr("src", institutions[0].image)}${ssrRenderAttr("alt", `${institutions[0].name} students`)} loading="lazy" data-v-27b6896d${_scopeId}><img${ssrRenderAttr("src", institutions[0].logo)}${ssrRenderAttr("alt", `${institutions[0].name} logo`)} class="teaser-badge" loading="lazy" data-v-27b6896d${_scopeId}></div><div class="teaser-hl__text" data-v-27b6896d${_scopeId}><div class="teaser-slug" data-v-27b6896d${_scopeId}>${ssrInterpolate(institutions[0].type)}</div><h3 class="teaser-hl__title" data-v-27b6896d${_scopeId}>${ssrInterpolate(institutions[0].name)}</h3><div class="teaser-hl__summary" data-v-27b6896d${_scopeId}>${ssrInterpolate(institutions[0].description)}</div><div class="teaser-link teaser-link--inverse" role="link" data-v-27b6896d${_scopeId}>Visit school</div></div>`);
          } else {
            return [
              createVNode("div", { class: "teaser-hl__media" }, [
                createVNode("img", {
                  src: institutions[0].image,
                  alt: `${institutions[0].name} students`,
                  loading: "lazy"
                }, null, 8, ["src", "alt"]),
                createVNode("img", {
                  src: institutions[0].logo,
                  alt: `${institutions[0].name} logo`,
                  class: "teaser-badge",
                  loading: "lazy"
                }, null, 8, ["src", "alt"])
              ]),
              createVNode("div", { class: "teaser-hl__text" }, [
                createVNode("div", { class: "teaser-slug" }, toDisplayString(institutions[0].type), 1),
                createVNode("h3", { class: "teaser-hl__title" }, toDisplayString(institutions[0].name), 1),
                createVNode("div", { class: "teaser-hl__summary" }, toDisplayString(institutions[0].description), 1),
                createVNode("div", {
                  class: "teaser-link teaser-link--inverse",
                  role: "link"
                }, "Visit school")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li><!--[-->`);
      ssrRenderList(institutions.slice(1), (inst) => {
        _push(`<li class="inst-list__item" data-v-27b6896d><div class="teaser-std" data-v-27b6896d>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: inst.path,
          "aria-label": inst.name,
          class: "teaser-std__link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="teaser-std__media" data-v-27b6896d${_scopeId}><img${ssrRenderAttr("src", inst.image)}${ssrRenderAttr("alt", `${inst.name} students`)} loading="lazy" data-v-27b6896d${_scopeId}><img${ssrRenderAttr("src", inst.logo)}${ssrRenderAttr("alt", `${inst.name} logo`)} class="teaser-badge" loading="lazy" data-v-27b6896d${_scopeId}></div><div class="teaser-std__text" data-v-27b6896d${_scopeId}><div class="teaser-slug" data-v-27b6896d${_scopeId}>${ssrInterpolate(inst.type)}</div><div class="teaser-std__title" data-v-27b6896d${_scopeId}><h3 data-v-27b6896d${_scopeId}>${ssrInterpolate(inst.name)}</h3></div><div class="teaser-std__cta" data-v-27b6896d${_scopeId}><div class="teaser-link" role="link" data-v-27b6896d${_scopeId}>Learn more</div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "teaser-std__media" }, [
                  createVNode("img", {
                    src: inst.image,
                    alt: `${inst.name} students`,
                    loading: "lazy"
                  }, null, 8, ["src", "alt"]),
                  createVNode("img", {
                    src: inst.logo,
                    alt: `${inst.name} logo`,
                    class: "teaser-badge",
                    loading: "lazy"
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("div", { class: "teaser-std__text" }, [
                  createVNode("div", { class: "teaser-slug" }, toDisplayString(inst.type), 1),
                  createVNode("div", { class: "teaser-std__title" }, [
                    createVNode("h3", null, toDisplayString(inst.name), 1)
                  ]),
                  createVNode("div", { class: "teaser-std__cta" }, [
                    createVNode("div", {
                      class: "teaser-link",
                      role: "link"
                    }, "Learn more")
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></li>`);
      });
      _push(`<!--]--></ul><div class="partners-marquee" data-v-27b6896d>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="partners-marquee__static" style="${ssrRenderStyle({ "display": "flex", "flex-wrap": "wrap", "gap": "2rem", "align-items": "center", "justify-content": "center" })}" data-v-27b6896d${_scopeId}><!--[-->`);
            ssrRenderList(partnerLogos, (logo) => {
              _push2(`<div class="partners-marquee__item"${ssrRenderAttr("title", logo.name)} data-v-27b6896d${_scopeId}><img${ssrRenderAttr("src", logo.src)}${ssrRenderAttr("alt", logo.name)} class="partners-marquee__logo" data-v-27b6896d${_scopeId}></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", {
                class: "partners-marquee__static",
                style: { "display": "flex", "flex-wrap": "wrap", "gap": "2rem", "align-items": "center", "justify-content": "center" }
              }, [
                (openBlock(), createBlock(Fragment, null, renderList(partnerLogos, (logo) => {
                  return createVNode("div", {
                    key: logo.name,
                    class: "partners-marquee__item",
                    title: logo.name
                  }, [
                    createVNode("img", {
                      src: logo.src,
                      alt: logo.name,
                      class: "partners-marquee__logo"
                    }, null, 8, ["src", "alt"])
                  ], 8, ["title"]);
                }), 64))
              ])
            ];
          }
        })
      }, _parent));
      _push(`</div></div></section><section class="rpl-section rpl-section--grey" data-v-27b6896d><div class="container-rpl" data-v-27b6896d><div class="rpl-section-heading" data-v-27b6896d><h2 class="rpl-section-heading__title" data-v-27b6896d>News and featured Articles</h2></div><div class="news-grid" data-v-27b6896d>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/blog",
        class: "news-highlight"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="news-highlight__media" data-v-27b6896d${_scopeId}><img${ssrRenderAttr("src", featuredPosts[0].image)}${ssrRenderAttr("alt", featuredPosts[0].title)} loading="lazy" data-v-27b6896d${_scopeId}></div><div class="news-highlight__body" data-v-27b6896d${_scopeId}><span class="rpl-slug" data-v-27b6896d${_scopeId}>${ssrInterpolate(featuredPosts[0].category)}</span><h3 class="news-highlight__title" data-v-27b6896d${_scopeId}>${ssrInterpolate(featuredPosts[0].title)}</h3><p class="news-highlight__excerpt" data-v-27b6896d${_scopeId}>${ssrInterpolate(featuredPosts[0].excerpt)}</p><span class="rpl-link" data-v-27b6896d${_scopeId}>Read more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-v-27b6896d${_scopeId}><line x1="5" y1="12" x2="19" y2="12" data-v-27b6896d${_scopeId}></line><polyline points="12 5 19 12 12 19" data-v-27b6896d${_scopeId}></polyline></svg></span></div>`);
          } else {
            return [
              createVNode("div", { class: "news-highlight__media" }, [
                createVNode("img", {
                  src: featuredPosts[0].image,
                  alt: featuredPosts[0].title,
                  loading: "lazy"
                }, null, 8, ["src", "alt"])
              ]),
              createVNode("div", { class: "news-highlight__body" }, [
                createVNode("span", { class: "rpl-slug" }, toDisplayString(featuredPosts[0].category), 1),
                createVNode("h3", { class: "news-highlight__title" }, toDisplayString(featuredPosts[0].title), 1),
                createVNode("p", { class: "news-highlight__excerpt" }, toDisplayString(featuredPosts[0].excerpt), 1),
                createVNode("span", { class: "rpl-link" }, [
                  createTextVNode("Read more "),
                  (openBlock(), createBlock("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2.5"
                  }, [
                    createVNode("line", {
                      x1: "5",
                      y1: "12",
                      x2: "19",
                      y2: "12"
                    }),
                    createVNode("polyline", { points: "12 5 19 12 12 19" })
                  ]))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="news-side" data-v-27b6896d><!--[-->`);
      ssrRenderList(featuredPosts.slice(1), (post) => {
        _push(ssrRenderComponent(_component_RouterLink, {
          key: post.id,
          to: "/blog",
          class: "news-teaser"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="news-teaser__media" data-v-27b6896d${_scopeId}><img${ssrRenderAttr("src", post.image)}${ssrRenderAttr("alt", post.title)} loading="lazy" data-v-27b6896d${_scopeId}></div><div class="news-teaser__body" data-v-27b6896d${_scopeId}><span class="rpl-slug" data-v-27b6896d${_scopeId}>${ssrInterpolate(post.category)}</span><h3 class="news-teaser__title" data-v-27b6896d${_scopeId}>${ssrInterpolate(post.title)}</h3><span class="rpl-link" data-v-27b6896d${_scopeId}>Read more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-v-27b6896d${_scopeId}><line x1="5" y1="12" x2="19" y2="12" data-v-27b6896d${_scopeId}></line><polyline points="12 5 19 12 12 19" data-v-27b6896d${_scopeId}></polyline></svg></span></div>`);
            } else {
              return [
                createVNode("div", { class: "news-teaser__media" }, [
                  createVNode("img", {
                    src: post.image,
                    alt: post.title,
                    loading: "lazy"
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("div", { class: "news-teaser__body" }, [
                  createVNode("span", { class: "rpl-slug" }, toDisplayString(post.category), 1),
                  createVNode("h3", { class: "news-teaser__title" }, toDisplayString(post.title), 1),
                  createVNode("span", { class: "rpl-link" }, [
                    createTextVNode("Read more "),
                    (openBlock(), createBlock("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2.5"
                    }, [
                      createVNode("line", {
                        x1: "5",
                        y1: "12",
                        x2: "19",
                        y2: "12"
                      }),
                      createVNode("polyline", { points: "12 5 19 12 12 19" })
                    ]))
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="news-more" data-v-27b6896d>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/blog",
        class: "rpl-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`See more news and stories <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-v-27b6896d${_scopeId}><line x1="5" y1="12" x2="19" y2="12" data-v-27b6896d${_scopeId}></line><polyline points="12 5 19 12 12 19" data-v-27b6896d${_scopeId}></polyline></svg>`);
          } else {
            return [
              createTextVNode("See more news and stories "),
              (openBlock(), createBlock("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2.5"
              }, [
                createVNode("line", {
                  x1: "5",
                  y1: "12",
                  x2: "19",
                  y2: "12"
                }),
                createVNode("polyline", { points: "12 5 19 12 12 19" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="rpl-section" data-v-27b6896d><div class="container-rpl" data-v-27b6896d><div class="rpl-section-heading" data-v-27b6896d><h2 class="rpl-section-heading__title" data-v-27b6896d>Get involved</h2></div><div class="rpl-grid-3" data-v-27b6896d><!--[-->`);
      ssrRenderList(involved, (item) => {
        _push(ssrRenderComponent(_component_RouterLink, {
          key: item.path,
          to: item.path,
          class: "rpl-card"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="rpl-card__media" data-v-27b6896d${_scopeId}><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} loading="lazy" data-v-27b6896d${_scopeId}></div><div class="rpl-card__body" data-v-27b6896d${_scopeId}><h3 class="rpl-card__title" data-v-27b6896d${_scopeId}>${ssrInterpolate(item.title)} <svg class="rpl-card__arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-v-27b6896d${_scopeId}><line x1="5" y1="12" x2="19" y2="12" data-v-27b6896d${_scopeId}></line><polyline points="12 5 19 12 12 19" data-v-27b6896d${_scopeId}></polyline></svg></h3><p class="rpl-card__desc" data-v-27b6896d${_scopeId}>${ssrInterpolate(item.desc)}</p></div>`);
            } else {
              return [
                createVNode("div", { class: "rpl-card__media" }, [
                  createVNode("img", {
                    src: item.image,
                    alt: item.title,
                    loading: "lazy"
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("div", { class: "rpl-card__body" }, [
                  createVNode("h3", { class: "rpl-card__title" }, [
                    createTextVNode(toDisplayString(item.title) + " ", 1),
                    (openBlock(), createBlock("svg", {
                      class: "rpl-card__arrow",
                      width: "18",
                      height: "18",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2.5"
                    }, [
                      createVNode("line", {
                        x1: "5",
                        y1: "12",
                        x2: "19",
                        y2: "12"
                      }),
                      createVNode("polyline", { points: "12 5 19 12 12 19" })
                    ]))
                  ]),
                  createVNode("p", { class: "rpl-card__desc" }, toDisplayString(item.desc), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section><section class="cta-band" data-v-27b6896d><div class="container-rpl cta-band__inner" data-v-27b6896d><div data-v-27b6896d><h2 class="cta-band__title" data-v-27b6896d>Ready to Join the GES Family?</h2><p class="cta-band__sub" data-v-27b6896d>Contact any of our institutions to begin the admissions process.</p></div><div class="cta-band__actions" data-v-27b6896d>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/about",
        class: "btn-rescue btn-rescue--dark"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Get in Touch`);
          } else {
            return [
              createTextVNode("Get in Touch")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/academic-calendar",
        class: "btn-rescue btn-rescue--outline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View Calendar`);
          } else {
            return [
              createTextVNode("View Calendar")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-27b6896d"]]);

export { index as default };
//# sourceMappingURL=index-DxSyXj3M.mjs.map
