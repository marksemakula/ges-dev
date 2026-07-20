import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineComponent, shallowRef, getCurrentInstance, provide, cloneVNode, h, createElementBlock, hasInjectionContext, inject, isRef, toValue, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, unref, computed, defineAsyncComponent, shallowReactive, ref, Suspense, Fragment, useSSRContext, createApp, onErrorCaptured, onServerPrefetch, resolveDynamicComponent, reactive, effectScope, nextTick, getCurrentScope, toRef, isReadonly, isShallow, isReactive, toRaw } from 'vue';
import { c as createError$1, i as hasProtocol, w as withBase, p as parseQuery, k as defu, l as joinURL, m as parseURL, e as encodePath, n as decodePath, o as isScriptProtocol, q as withQuery, r as getContext, s as withTrailingSlash, t as withoutTrailingSlash, v as sanitizeStatusCode, $ as $fetch, x as createHooks, y as executeAsync, z as hasTrailingSlash, A as withLeadingSlash } from '../nitro/nitro.mjs';
import { p as publicAssetsURL, u as useHead$1, h as headSymbol, b as baseURL, a as useSeoMeta$1 } from '../routes/renderer.mjs';
import { useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import { defineHeadPlugin, TemplateParamsPlugin } from 'unhead/plugins';
import { processTemplateParams } from 'unhead/utils';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderSuspense, ssrRenderVNode } from 'vue/server-renderer';
import { useWindowScroll } from '@vueuse/core';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import 'nuxtseo-shared/utils';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
if (!("global" in globalThis)) {
  globalThis.global = globalThis;
}
const appLayoutTransition = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.21.8";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...options.ssrContext?.payload || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  const resolvedPlugins = /* @__PURE__ */ new Set();
  const unresolvedPlugins = [];
  const parallels = [];
  let error = void 0;
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    const unresolvedPluginsForThisPlugin = plugin2.dependsOn?.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.has(name)) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.add(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      }).catch((e) => {
        if (!plugin2.parallel && !nuxtApp.payload.error) {
          throw e;
        }
        error ||= e;
      });
      if (plugin2.parallel) {
        parallels.push(promise);
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin2.env?.islands === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin2.env?.islands === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (error) {
    throw nuxtApp.payload.error || error;
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = getCurrentInstance()?.appContext.app.$nuxt;
  }
  nuxtAppInstance ||= getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = /* @__PURE__ */ Symbol("layout-meta");
const PageRouteSymbol = /* @__PURE__ */ Symbol("route");
globalThis._importMeta_.url.replace(/\/app\/.*$/, "/");
const useRouter = () => {
  return useNuxtApp()?.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const HTML_ATTR_UNSAFE_RE = /[&"'<>]/g;
const HTML_ATTR_ENCODE_MAP = {
  "&": "%26",
  '"': "%22",
  "'": "%27",
  "<": "%3C",
  ">": "%3E"
};
function encodeForHtmlAttr(value) {
  return value.replace(HTML_ATTR_UNSAFE_RE, (c) => HTML_ATTR_ENCODE_MAP[c]);
}
const navigateTo = (to, options) => {
  to ||= "/";
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = options?.external || isExternalHost;
  if (isExternal) {
    if (!options?.external) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedHeader = encodeURL(location2, isExternalHost);
        const encodedLoc = encodeForHtmlAttr(encodedHeader);
        nuxtApp.ssrContext["~renderResponse"] = {
          statusCode: sanitizeStatusCode(options?.redirectCode || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options?.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  const encodedTo = typeof to === "string" ? encodeRoutePath(to) : to;
  return options?.replace ? router.replace(encodedTo) : router.push(encodedTo);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    const pathname = url.pathname.replace(/^\/{2,}/, "/");
    return pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
function encodeRoutePath(url) {
  const parsed = parseURL(url);
  return encodePath(decodePath(parsed.pathname)) + parsed.search + parsed.hash;
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = /* @__NO_SIDE_EFFECTS__ */ () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const error2 = /* @__PURE__ */ useError();
    if (false) ;
    error2.value ||= nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  if (typeof error !== "string" && error.statusText) {
    error.message ??= error.statusText;
  }
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  Object.defineProperty(nuxtError, "status", {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    get: () => nuxtError.statusCode,
    configurable: true
  });
  Object.defineProperty(nuxtError, "statusText", {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    get: () => nuxtError.statusMessage,
    configurable: true
  });
  return nuxtError;
};
function freezeHead(head) {
  const realPush = head.push;
  head.push = () => ({ dispose: () => {
  }, patch: () => {
  }, _poll: () => {
  } });
  return () => {
    head.push = realPush;
  };
}
const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    if (nuxtApp.ssrContext.islandContext) {
      const unfreeze = freezeHead(head);
      nuxtApp.hooks.hookOnce("app:created", unfreeze);
    }
    nuxtApp.vueApp.use(head);
  }
});
function toArray$1(value) {
  return Array.isArray(value) ? value : [value];
}
const matcher = /* @__PURE__ */ (() => {
  const $0 = { redirect: "/institutions/gjs-kampala" }, $1 = { redirect: "/institutions/gjs-gulu" }, $2 = { redirect: "/institutions/sisu-kampala" }, $3 = { redirect: "/institutions/sisu-gulu" }, $4 = { redirect: "/international-pathway" }, $5 = { prerender: true }, $6 = {}, $7 = { ssr: false };
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    if (p === "/institutions/gjs-kikajjo") {
      r.unshift({ data: $0 });
    } else if (p === "/institutions/gjs-boarding") {
      r.unshift({ data: $0 });
    } else if (p === "/institutions/gjs-about") {
      r.unshift({ data: $1 });
    } else if (p === "/institutions/scooby-katale") {
      r.unshift({ data: $2 });
    } else if (p === "/institutions/scooby-gulu") {
      r.unshift({ data: $3 });
    } else if (p === "/institutions/iepp") {
      r.unshift({ data: $4 });
    } else if (p === "/institutions/sakghs-bujuuko") {
      r.unshift({ data: $5 });
    } else if (p === "/institutions/sakghs-kawaala") {
      r.unshift({ data: $5 });
    } else if (p === "/institutions/gjs-kampala") {
      r.unshift({ data: $5 });
    } else if (p === "/institutions/gjs-gulu") {
      r.unshift({ data: $5 });
    } else if (p === "/institutions/sisu-kampala") {
      r.unshift({ data: $5 });
    } else if (p === "/institutions/sisu-gulu") {
      r.unshift({ data: $5 });
    } else if (p === "/_nuxt") {
      r.unshift({ data: $6 });
    }
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "admin") {
        r.unshift({ data: $7, params: { "_": s.slice(2).join("/") } });
      }
    }
    return r;
  };
})();
const _routeRulesMatcher = (path) => defu({}, ...matcher("", typeof path === "string" ? path.toLowerCase() : path).map((r) => r.data).reverse());
const routeRulesMatcher$2 = _routeRulesMatcher;
function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  try {
    return routeRulesMatcher$2(path.toLowerCase());
  } catch (e) {
    console.error("[nuxt] Error matching route rules.", e);
    return {};
  }
}
const __nuxt_page_meta$2 = { layout: "branded" };
const __nuxt_page_meta$1 = { layout: "branded" };
const __nuxt_page_meta = null;
const component_45stubye17cUzZKkOwhp1YXaQmHiHoo0uyqR3xTLi2x7Ej5pI = {};
const _routes = [
  {
    name: "blog",
    path: "/blog",
    component: () => import('./blog-DmDvgORw.mjs')
  },
  {
    name: "about",
    path: "/about",
    component: () => import('./about-gXQ5cfxW.mjs')
  },
  {
    name: "index",
    path: "/",
    component: () => import('./index-DxSyXj3M.mjs')
  },
  {
    name: "ges-life",
    path: "/ges-life",
    component: () => import('./ges-life-BAKkoQz4.mjs')
  },
  {
    name: "leadership",
    path: "/leadership",
    component: () => import('./leadership-DXheSmqb.mjs')
  },
  {
    name: "mentorship",
    path: "/mentorship",
    component: () => import('./mentorship-ydailm9z.mjs')
  },
  {
    name: "admin",
    path: "/admin",
    component: () => import('./index-BGfgyeAa.mjs')
  },
  {
    name: "partnerships",
    path: "/partnerships",
    component: () => import('./partnerships-C8M4tNFj.mjs')
  },
  {
    name: "academic-calendar",
    path: "/academic-calendar",
    component: () => import('./academic-calendar-D_NTXqRd.mjs')
  },
  {
    name: "institutions-jsbi",
    path: "/institutions/jsbi",
    meta: __nuxt_page_meta$2 || {},
    component: () => import('./jsbi-BADlV0N9.mjs')
  },
  {
    name: "institutions-slug",
    path: "/institutions/:slug()",
    component: () => import('./_slug_-BK1nDA8Y.mjs')
  },
  {
    name: "international-pathway",
    path: "/international-pathway",
    meta: __nuxt_page_meta$1 || {},
    component: () => import('./international-pathway-Ehe3ehNH.mjs')
  },
  {
    name: __nuxt_page_meta?.name,
    path: "/institutions/gjs-kikajjo",
    component: component_45stubye17cUzZKkOwhp1YXaQmHiHoo0uyqR3xTLi2x7Ej5pI
  },
  {
    name: __nuxt_page_meta?.name,
    path: "/institutions/gjs-boarding",
    component: component_45stubye17cUzZKkOwhp1YXaQmHiHoo0uyqR3xTLi2x7Ej5pI
  },
  {
    name: __nuxt_page_meta?.name,
    path: "/institutions/gjs-about",
    component: component_45stubye17cUzZKkOwhp1YXaQmHiHoo0uyqR3xTLi2x7Ej5pI
  },
  {
    name: __nuxt_page_meta?.name,
    path: "/institutions/scooby-katale",
    component: component_45stubye17cUzZKkOwhp1YXaQmHiHoo0uyqR3xTLi2x7Ej5pI
  },
  {
    name: __nuxt_page_meta?.name,
    path: "/institutions/scooby-gulu",
    component: component_45stubye17cUzZKkOwhp1YXaQmHiHoo0uyqR3xTLi2x7Ej5pI
  },
  {
    name: __nuxt_page_meta?.name,
    path: "/institutions/iepp",
    component: component_45stubye17cUzZKkOwhp1YXaQmHiHoo0uyqR3xTLi2x7Ej5pI
  }
];
const _wrapInTransition = (props, children) => {
  return { default: () => children.default?.() };
};
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = route?.meta.key ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => route.params[r.slice(1)]?.toString() || "");
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index2) => comp.components && comp.components.default === from.matched[index2]?.components?.default
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function _mergeTransitionProps(routeProps) {
  const _props = [];
  for (const prop of routeProps) {
    if (!prop) {
      continue;
    }
    _props.push({
      ...prop,
      onAfterLeave: prop.onAfterLeave ? toArray(prop.onAfterLeave) : void 0,
      onBeforeLeave: prop.onBeforeLeave ? toArray(prop.onBeforeLeave) : void 0
    });
  }
  return defu(..._props);
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    const hashScrollBehaviour = useRouter().options?.scrollBehaviorType ?? "auto";
    if (to.path.replace(/\/$/, "") === from.path.replace(/\/$/, "")) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior: hashScrollBehaviour };
      }
      return false;
    }
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (routeAllowsScrollToTop === false) {
      return false;
    }
    if (from === START_LOCATION) {
      return _calculatePosition(to, from, savedPosition, hashScrollBehaviour);
    }
    return new Promise((resolve) => {
      const doScroll = () => {
        requestAnimationFrame(() => resolve(_calculatePosition(to, from, savedPosition, hashScrollBehaviour)));
      };
      nuxtApp.hooks.hookOnce("page:loading:end", () => {
        const transitionPromise = nuxtApp["~transitionPromise"];
        if (transitionPromise) {
          transitionPromise.then(doScroll);
        } else {
          doScroll();
        }
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
function _calculatePosition(to, from, savedPosition, defaultHashScrollBehaviour) {
  if (savedPosition) {
    return savedPosition;
  }
  if (to.hash) {
    return {
      el: to.hash,
      top: _getHashElementScrollMarginTop(to.hash),
      behavior: isChangingPage(to, from) ? defaultHashScrollBehaviour : "instant"
    };
  }
  return {
    left: 0,
    top: 0
  };
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  if (!to.meta?.validate) {
    return;
  }
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    fatal: false,
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    status: result && (result.status || result.statusCode) || 404,
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    statusText: result && (result.statusText || result.statusMessage) || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  return error;
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware((to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
Object.assign(/* @__PURE__ */ Object.create(null), {});
const pageIslandRoutes = Object.assign(/* @__PURE__ */ Object.create(null), {});
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const history = routerOptions.history?.(routerBase) ?? createMemoryHistory(routerBase);
    const routes2 = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes: routes2
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    router.afterEach((to, from) => {
      const lastTo = to.matched.at(-1)?.components?.default;
      const lastFrom = from.matched.at(-1)?.components?.default;
      if (lastTo === lastFrom) {
        syncCurrentRoute();
        return;
      }
      if (to.matched.length < from.matched.length && to.matched.every((m, i) => m.components?.default === from.matched[i]?.components?.default)) {
        syncCurrentRoute();
      }
    });
    const route = { sync: syncCurrentRoute };
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware ||= {
      global: [],
      named: {}
    };
    const error = /* @__PURE__ */ useError();
    const isServerPage = nuxtApp.ssrContext?.islandContext?.name?.startsWith("page_");
    if (!nuxtApp.ssrContext?.islandContext || isServerPage) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if (failure?.type === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    const hasDeferredRoute = false;
    syncCurrentRoute();
    if (nuxtApp.ssrContext?.islandContext && !isServerPage) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!nuxtApp.ssrContext?.islandContext || isServerPage) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray$1(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        const routeRules = getRouteRules({ path: to.path });
        if (routeRules.appMiddleware) {
          for (const key in routeRules.appMiddleware) {
            if (routeRules.appMiddleware[key]) {
              middlewareEntries.add(key);
            } else {
              middlewareEntries.delete(key);
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await namedMiddleware[entry2]?.().then((r) => r.default || r) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          try {
            if (false) ;
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            if (true) {
              if (result === false || result instanceof Error) {
                const error2 = result || createError({
                  status: 404,
                  statusText: `Page Not Found: ${initialURL}`
                });
                await nuxtApp.runWithContext(() => showError(error2));
                return false;
              }
            }
            if (result === true) {
              continue;
            }
            if (result === false) {
              return result;
            }
            if (result) {
              if (isNuxtError(result) && result.fatal) {
                await nuxtApp.runWithContext(() => showError(result));
              }
              return result;
            }
          } catch (err) {
            const error2 = createError(err);
            if (error2.fatal) {
              await nuxtApp.runWithContext(() => showError(error2));
            }
            return error2;
          }
        }
      }
    });
    if (isServerPage) {
      router.beforeResolve((to) => {
        const expected = pageIslandRoutes[nuxtApp.ssrContext.islandContext.name];
        const actual = to.matched.find((m) => m.components?.default?.__nuxt_island)?.components?.default;
        if (!expected || expected !== actual?.__nuxt_island) {
          nuxtApp.ssrContext["~renderResponse"] = {
            statusCode: 400,
            statusMessage: "Invalid island request path"
          };
          return false;
        }
      });
    }
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach((to) => {
      if (to.matched.length === 0 && !error.value) {
        return nuxtApp.runWithContext(() => showError(createError({
          status: 404,
          fatal: false,
          statusText: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        if (hasDeferredRoute) ;
        else {
          await router.replace({
            ...resolvedInitialRoute,
            force: true
          });
        }
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function injectHead(nuxtApp) {
  const nuxt = nuxtApp || tryUseNuxtApp();
  return nuxt?.ssrContext?.head || nuxt?.runWithContext(() => {
    if (hasInjectionContext()) {
      return inject(headSymbol);
    }
  });
}
function useHead(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useHead$1(input, { head, ...options });
  }
}
function useSeoMeta(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useSeoMeta$1(input, { head, ...options });
  }
}
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = /* @__PURE__ */ Symbol.for("nuxt:client-only");
const __nuxt_component_1$1 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  ...false,
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      if (mounted.value) {
        const vnodes = slots.default?.();
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function useRequestEvent(nuxtApp) {
  nuxtApp ||= useNuxtApp();
  return nuxtApp.ssrContext?.event;
}
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext["~payloadReducers"][name] = reduce;
  }
}
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
function sanitizeExternalHref(value) {
  let candidate = value.replace(/[\u0000-\u001f\s]+/g, "");
  while (candidate.toLowerCase().startsWith("view-source:")) {
    candidate = candidate.slice("view-source:".length);
  }
  const colon = candidate.indexOf(":");
  if (colon > 0 && isScriptProtocol(candidate.slice(0, colon + 1))) {
    return null;
  }
  return value;
}
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(link) {
    return typeof link === "string" && link.startsWith("#");
  }
  function resolveTrailingSlashBehavior(to, resolve, trailingSlash) {
    const effectiveTrailingSlash = trailingSlash ?? options.trailingSlash;
    if (!to || effectiveTrailingSlash !== "append" && effectiveTrailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, effectiveTrailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, effectiveTrailingSlash)
    };
    return resolvedPath;
  }
  function useNuxtLink(props) {
    const router = useRouter();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const hasTarget = computed(() => !!unref(props.target) && unref(props.target) !== "_self");
    const isAbsoluteUrl = computed(() => {
      const path = unref(props.to) || unref(props.href) || "";
      return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
    });
    const builtinRouterLink = resolveComponent("RouterLink");
    const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
    const isExternal = computed(() => {
      if (unref(props.external)) {
        return true;
      }
      const path = unref(props.to) || unref(props.href) || "";
      if (typeof path === "object") {
        return false;
      }
      return path === "" || isAbsoluteUrl.value;
    });
    const to = computed(() => {
      const path = unref(props.to) || unref(props.href) || "";
      if (isExternal.value) {
        return path;
      }
      return resolveTrailingSlashBehavior(path, router.resolve, unref(props.trailingSlash));
    });
    const link = isExternal.value ? void 0 : useBuiltinLink?.({ ...props, to, viewTransition: unref(props.viewTransition) });
    const href = computed(() => {
      const effectiveTrailingSlash = unref(props.trailingSlash) ?? options.trailingSlash;
      if (!to.value || isAbsoluteUrl.value || isHashLinkWithoutHashMode(to.value)) {
        const raw = to.value;
        return typeof raw === "string" ? sanitizeExternalHref(raw) : raw;
      }
      if (isExternal.value) {
        const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
        const href2 = typeof path === "object" ? router.resolve(path).href : path;
        const safe = typeof href2 === "string" ? sanitizeExternalHref(href2) : href2;
        return safe === null ? null : applyTrailingSlashBehavior(safe, effectiveTrailingSlash);
      }
      if (typeof to.value === "object") {
        return router.resolve(to.value)?.href ?? null;
      }
      return applyTrailingSlashBehavior(joinURL(config.app.baseURL, to.value), effectiveTrailingSlash);
    });
    return {
      to,
      hasTarget,
      isAbsoluteUrl,
      isExternal,
      //
      href,
      isActive: link?.isActive ?? computed(() => to.value === router.currentRoute.value.path),
      isExactActive: link?.isExactActive ?? computed(() => to.value === router.currentRoute.value.path),
      route: link?.route ?? computed(() => router.resolve(to.value)),
      async navigate(_e) {
        if (href.value === null) {
          return;
        }
        await navigateTo(href.value, { replace: unref(props.replace), external: isExternal.value || hasTarget.value });
      }
    };
  }
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetchOn: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Behavior
      trailingSlash: {
        type: String,
        default: void 0,
        required: false
      }
    },
    useLink: useNuxtLink,
    setup(props, { slots }) {
      const router = useRouter();
      const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
      shallowRef(false);
      const el = void 0;
      const elRef = void 0;
      async function prefetch(nuxtApp = useNuxtApp()) {
        {
          return;
        }
      }
      return () => {
        if (!isExternal.value && !hasTarget.value && !isHashLinkWithoutHashMode(to.value)) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            routerLinkProps.rel = props.rel || void 0;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href: href.value,
            navigate,
            prefetch,
            get route() {
              if (!href.value) {
                return void 0;
              }
              const url = new URL(href.value, "http://localhost");
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: href.value
              };
            },
            rel,
            target,
            isExternal: isExternal.value || hasTarget.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", {
          ref: el,
          href: href.value || null,
          // converts `""` to `null` to prevent the attribute from being added as empty (`href=""`)
          rel,
          target,
          onClick: async (event) => {
            if (isExternal.value || hasTarget.value) {
              return;
            }
            event.preventDefault();
            try {
              const encodedHref = encodeRoutePath(href.value ?? "");
              return await (props.replace ? router.replace(encodedHref) : router.push(encodedHref));
            } finally {
            }
          }
        }, slots.default?.());
      };
    }
  });
}
const __nuxt_component_0$1 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
const _0_siteConfig_tU0SxKrPeVRXWcGu2sOnIfhNDbYiKNfDCvYZhRueG0Q = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt-site-config:init",
  enforce: "pre",
  async setup(nuxtApp) {
    const stack = useRequestEvent()?.context?.siteConfig;
    const state = useState("site-config");
    {
      nuxtApp.hooks.hook("app:rendered", () => {
        state.value = stack?.get({
          debug: (/* @__PURE__ */ useRuntimeConfig())["nuxt-site-config"].debug,
          resolveRefs: true
        });
      });
    }
    return {
      provide: {
        nuxtSiteConfig: stack
      }
    };
  }
});
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
function defineSchemaOrgResolver(schema) {
  return schema;
}
function idReference(node) {
  return {
    "@id": typeof node !== "string" ? node["@id"] : node
  };
}
function resolvableDateToDate(val) {
  try {
    const date = val instanceof Date ? val : new Date(Date.parse(val));
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${date.getFullYear()}-${month}-${day}`;
  } catch {
  }
  return typeof val === "string" ? val : val.toString();
}
const IS_VALID_W3C_DATE = [
  /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
  /^\d{4}-[01]\d-[0-3]\d$/,
  /^\d{4}-[01]\d$/,
  /^\d{4}$/
];
function isValidW3CDate(d) {
  return IS_VALID_W3C_DATE.some((r) => r.test(d));
}
function resolvableDateToIso(val) {
  if (!val)
    return val;
  try {
    if (val instanceof Date)
      return val.toISOString();
    else if (isValidW3CDate(val))
      return val;
    else
      return new Date(Date.parse(val)).toISOString();
  } catch {
  }
  return typeof val === "string" ? val : val.toString();
}
const IdentityId = "#identity";
function setIfEmpty(node, field, value) {
  if (!node?.[field] && value)
    node[field] = value;
}
function asArray(input) {
  return Array.isArray(input) ? input : [input];
}
function dedupeMerge(node, field, value) {
  const data = new Set(asArray(node[field]));
  data.add(value);
  node[field] = [...data].filter(Boolean);
}
function prefixId(url, id) {
  if (hasProtocol(id))
    return id;
  if (!id.includes("#"))
    id = `#${id}`;
  return `${url || ""}${id}`;
}
function trimLength(val, length) {
  if (!val)
    return val;
  if (val.length > length) {
    const trimmedString = val.substring(0, length);
    return trimmedString.substring(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
  }
  return val;
}
function resolveDefaultType(node, defaultType) {
  const val = node["@type"];
  if (val === defaultType)
    return;
  if (typeof val === "string" && typeof defaultType === "string") {
    if (val !== defaultType)
      node["@type"] = [defaultType, val];
    return;
  }
  const types = new Set(asArray(defaultType));
  for (const t of asArray(val))
    types.add(t);
  node["@type"] = types.size === 1 ? val : [...types];
}
function resolveWithBase(base, urlOrPath) {
  if (!urlOrPath || hasProtocol(urlOrPath) || urlOrPath[0] !== "/" && urlOrPath[0] !== "#")
    return urlOrPath;
  return withBase(urlOrPath, base);
}
function resolveAsGraphKey(key) {
  if (!key)
    return key;
  return key.substring(key.lastIndexOf("#"));
}
function stripEmptyProperties(obj) {
  for (const k in obj) {
    if (!Object.hasOwn(obj, k))
      continue;
    const v = obj[k];
    if (v === "" || v === null || v === void 0) {
      delete obj[k];
    } else if (typeof v === "object" && v !== null) {
      if (v.__v_isReadonly || v.__v_isRef)
        continue;
      stripEmptyProperties(v);
    }
  }
  return obj;
}
const imageResolver = defineSchemaOrgResolver({
  alias: "image",
  cast(input) {
    if (typeof input === "string") {
      input = {
        url: input
      };
    }
    return input;
  },
  defaults: {
    "@type": "ImageObject"
  },
  inheritMeta: [
    // @todo possibly only do if there's a caption
    "inLanguage"
  ],
  idPrefix: "host",
  resolve(image, { meta }) {
    image.url = resolveWithBase(meta.host, image.url);
    setIfEmpty(image, "contentUrl", image.url);
    if (image.height && !image.width)
      delete image.height;
    if (image.width && !image.height)
      delete image.width;
    return image;
  }
});
const index = {
  __proto__: null,
  imageResolver
};
function nextNodeId(ctx, alias) {
  ctx.nodeIdCounters[alias] = (ctx.nodeIdCounters[alias] || 0) + 1;
  return ctx.nodeIdCounters[alias].toString();
}
function resolveMeta(meta) {
  if (!meta.host && meta.canonicalHost)
    meta.host = meta.canonicalHost;
  if (!meta.tagPosition && meta.position)
    meta.tagPosition = meta.position;
  if (!meta.currency && meta.defaultCurrency)
    meta.currency = meta.defaultCurrency;
  if (!meta.inLanguage && meta.defaultLanguage)
    meta.inLanguage = meta.defaultLanguage;
  if (!meta.path)
    meta.path = "/";
  if (!meta.host && false)
    meta.host = (void 0).location.host;
  if (!meta.url && meta.canonicalUrl)
    meta.url = meta.canonicalUrl;
  if (meta.path !== "/") {
    if (meta.trailingSlash && !hasTrailingSlash(meta.path))
      meta.path = withTrailingSlash(meta.path);
    else if (!meta.trailingSlash && hasTrailingSlash(meta.path))
      meta.path = withoutTrailingSlash(meta.path);
  }
  meta.url = joinURL(meta.host || "", meta.path);
  return {
    ...meta,
    host: meta.host,
    url: meta.url,
    currency: meta.currency,
    image: meta.image,
    inLanguage: meta.inLanguage,
    title: meta.title,
    description: meta.description,
    datePublished: meta.datePublished,
    dateModified: meta.dateModified
  };
}
function resolveNode(node, ctx, resolver) {
  if (resolver?.cast)
    node = resolver.cast(node, ctx);
  if (resolver?.defaults) {
    let defaults = resolver.defaults;
    if (typeof defaults === "function")
      defaults = defaults(ctx);
    node = { ...defaults, ...node };
  }
  const inheritMeta = resolver?.inheritMeta;
  if (inheritMeta) {
    for (let i = 0; i < inheritMeta.length; i++) {
      const entry2 = inheritMeta[i];
      if (typeof entry2 === "string")
        setIfEmpty(node, entry2, ctx.meta[entry2]);
      else
        setIfEmpty(node, entry2.key, ctx.meta[entry2.meta]);
    }
  }
  if (resolver?.resolve)
    node = resolver.resolve(node, ctx);
  for (const k in node) {
    const v = node[k];
    if (Array.isArray(v)) {
      for (let i = 0; i < v.length; i++) {
        const item = v[i];
        if (typeof item === "object" && item?._resolver)
          node[k][i] = resolveRelation(item, ctx, item._resolver);
      }
    } else if (typeof v === "object" && v?._resolver) {
      node[k] = resolveRelation(v, ctx, v._resolver);
    }
  }
  stripEmptyProperties(node);
  return node;
}
function resolveNodeId(node, ctx, resolver, resolveAsRoot = false) {
  if (node["@id"] && node["@id"].startsWith("http"))
    return node;
  const prefix = resolver ? (Array.isArray(resolver.idPrefix) ? resolver.idPrefix[0] : resolver.idPrefix) || "url" : "url";
  const rootId = node["@id"] || (resolver ? Array.isArray(resolver.idPrefix) ? resolver.idPrefix?.[1] : void 0 : "");
  if (!node["@id"] && resolveAsRoot && rootId) {
    node["@id"] = prefixId(ctx.meta[prefix], rootId);
    return node;
  }
  if (node["@id"]?.startsWith("#/schema/") || node["@id"]?.startsWith("/")) {
    node["@id"] = prefixId(ctx.meta[prefix], node["@id"]);
    return node;
  }
  let alias = resolver?.alias;
  if (!alias) {
    const type = asArray(node["@type"])?.[0] || "";
    alias = type.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  node["@id"] = prefixId(ctx.meta[prefix], `#/schema/${alias}/${node["@id"] || nextNodeId(ctx, alias)}`);
  return node;
}
function resolveRelation(input, ctx, fallbackResolver, options = {}) {
  if (!input)
    return input;
  const items = asArray(input);
  const ids = [];
  for (let i = 0; i < items.length; i++) {
    const a = items[i];
    let keyCount = 0;
    for (const _ in a) keyCount++;
    if (keyCount === 1 && a["@id"] || keyCount === 2 && a["@id"] && a["@type"]) {
      ids.push(resolveNodeId({
        "@id": ctx.find(a["@id"])?.["@id"] || a["@id"]
      }, ctx));
      continue;
    }
    let resolver = fallbackResolver;
    if (a._resolver && typeof a._resolver !== "string") {
      resolver = a._resolver;
      delete a._resolver;
    }
    if (!resolver) {
      ids.push(a);
      continue;
    }
    let node = resolveNode(a, ctx, resolver);
    if (options.afterResolve)
      options.afterResolve(node);
    if (options.generateId || options.root)
      node = resolveNodeId(node, ctx, resolver, false);
    if (options.root) {
      if (resolver.resolveRootNode)
        resolver.resolveRootNode(node, ctx);
      ctx.push(node);
      ids.push(idReference(node["@id"]));
      continue;
    }
    ids.push(node);
  }
  return !options.array && ids.length === 1 ? ids[0] : ids;
}
const UNSAFE_KEYS$1 = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function merge(target, source) {
  if (!source)
    return target;
  for (const key in source) {
    if (!Object.hasOwn(source, key) || UNSAFE_KEYS$1.has(key))
      continue;
    const value = source[key];
    if (value === void 0)
      continue;
    if (Array.isArray(target[key])) {
      if (Array.isArray(value)) {
        const merged = [...target[key], ...value];
        if (key === "@type") {
          target[key] = [...new Set(merged)];
        } else if (key === "itemListElement") {
          merged.sort((a, b) => (a.position || 0) - (b.position || 0));
          for (let i = 0; i < merged.length; i++)
            merged[i].position = i + 1;
          target[key] = merged;
        } else if (key === "potentialAction") {
          const byType = /* @__PURE__ */ Object.create(null);
          for (const action of merged) {
            const type = action["@type"];
            if (byType[type]) {
              if (action.target && byType[type].target) {
                const a = Array.isArray(byType[type].target) ? byType[type].target : [byType[type].target];
                const b = Array.isArray(action.target) ? action.target : [action.target];
                byType[type].target = [.../* @__PURE__ */ new Set([...a, ...b])];
              }
            } else {
              byType[type] = { ...action };
            }
          }
          target[key] = Object.values(byType);
        } else {
          target[key] = merged;
        }
      } else {
        target[key] = merge(target[key], [value]);
      }
    } else if (target[key] && typeof target[key] === "object" && typeof value === "object" && !Array.isArray(value)) {
      target[key] = merge({ ...target[key] }, value);
    } else {
      target[key] = value;
    }
  }
  return target;
}
function indexNode(index2, node) {
  if (!node["@id"])
    return;
  const nodeId = node["@id"];
  const fragmentKey = resolveAsGraphKey(nodeId);
  index2.set(fragmentKey, node);
  index2.set(nodeId, node);
  const domainKey = nodeId.replace(/(https?:)?\/\//, "").split("/")[0];
  index2.set(domainKey, node);
}
function createSchemaOrgGraph() {
  const ctx = {
    find(id) {
      let resolver = (s) => s;
      if (id[0] === "#") {
        resolver = resolveAsGraphKey;
      } else if (id[0] === "/") {
        resolver = (s) => s.replace(/(https?:)?\/\//, "").split("/")[0];
      }
      const key = resolver(id);
      if (ctx.nodeIndex.size > 0) {
        return ctx.nodeIndex.get(key) || null;
      }
      return ctx.nodes.filter((n) => !!n["@id"]).find((n) => resolver(n["@id"]) === key);
    },
    push(input) {
      asArray(input).forEach((node) => {
        const registeredNode = node;
        ctx.nodes.push(registeredNode);
        if (ctx.nodeIndex.size > 0)
          indexNode(ctx.nodeIndex, registeredNode);
      });
    },
    resolveGraph(meta) {
      for (const k in ctx.nodeIdCounters) delete ctx.nodeIdCounters[k];
      ctx.meta = resolveMeta({ ...meta });
      const len = ctx.nodes.length;
      for (let i = 0; i < len; i++) {
        let node = ctx.nodes[i];
        const resolver = node._resolver;
        node = resolveNode(node, ctx, resolver);
        node = resolveNodeId(node, ctx, resolver, true);
        ctx.nodes[i] = node;
      }
      const dedupedNodes = /* @__PURE__ */ Object.create(null);
      ctx.nodeIndex = /* @__PURE__ */ new Map();
      for (let i = 0; i < ctx.nodes.length; i++) {
        const n = ctx.nodes[i];
        const nodeKey = resolveAsGraphKey(n["@id"]);
        if (dedupedNodes[nodeKey]) {
          if (n._dedupeStrategy !== "replace")
            dedupedNodes[nodeKey] = merge(dedupedNodes[nodeKey], n);
          else
            dedupedNodes[nodeKey] = n;
        } else {
          dedupedNodes[nodeKey] = n;
        }
      }
      ctx.nodes = Object.values(dedupedNodes);
      for (let i = 0; i < ctx.nodes.length; i++)
        indexNode(ctx.nodeIndex, ctx.nodes[i]);
      const countBeforeRelations = ctx.nodes.length;
      for (let i = 0; i < ctx.nodes.length; i++) {
        const node = ctx.nodes[i];
        if (node.image && typeof node.image === "string") {
          node.image = resolveRelation(node.image, ctx, imageResolver, {
            root: true
          });
        }
        node.translationOfWork = resolveRelation(node.translationOfWork, ctx);
        node.workTranslation = resolveRelation(node.workTranslation, ctx);
        if (node._resolver?.resolveRootNode)
          node._resolver.resolveRootNode(node, ctx);
        delete node._resolver;
      }
      const needsDedupe = ctx.nodes.length > countBeforeRelations;
      const normalizedNodes = needsDedupe ? /* @__PURE__ */ Object.create(null) : null;
      const result = needsDedupe ? null : [];
      for (let i = 0; i < ctx.nodes.length; i++) {
        const n = ctx.nodes[i];
        const nodeKey = resolveAsGraphKey(n["@id"]);
        const keys = Object.keys(n);
        const primitives = [];
        const relations = [];
        for (let j = 0; j < keys.length; j++) {
          const k = keys[j];
          if (k[0] === "_")
            continue;
          const v = n[k];
          if (v !== null && (Array.isArray(v) || typeof v === "object"))
            relations.push(k);
          else
            primitives.push(k);
        }
        primitives.sort();
        relations.sort();
        const newNode = {};
        for (let j = 0; j < primitives.length; j++)
          newNode[primitives[j]] = n[primitives[j]];
        for (let j = 0; j < relations.length; j++)
          newNode[relations[j]] = n[relations[j]];
        if (needsDedupe) {
          normalizedNodes[nodeKey] = normalizedNodes[nodeKey] ? merge(normalizedNodes[nodeKey], newNode) : newNode;
        } else {
          result.push(newNode);
        }
      }
      return needsDedupe ? Object.values(normalizedNodes) : result;
    },
    nodes: [],
    nodeIndex: /* @__PURE__ */ new Map(),
    nodeIdCounters: /* @__PURE__ */ Object.create(null),
    meta: {}
  };
  return ctx;
}
const resolverCache = {};
const resolverImports = {
  address: () => import('./index28-B51rSeO6.mjs'),
  aggregateOffer: () => import('./index-D0U3Sd8p.mjs'),
  aggregateRating: () => import('./index2-D85MX1VV.mjs'),
  article: () => import('./index3-5ItGMP8n.mjs').then(function(n) {
    return n.l;
  }),
  breadcrumb: () => import('./index3-5ItGMP8n.mjs').then(function(n) {
    return n.i;
  }),
  comment: () => import('./index5-D5ySGFIf.mjs'),
  course: () => import('./index6-CycFj-D7.mjs'),
  dataset: () => import('./index7-BFnxqh6e.mjs'),
  event: () => import('./index10-BC2rUckV.mjs'),
  foodEstablishment: () => import('./index11-2k2j0qTY.mjs'),
  virtualLocation: () => import('./index9-BG3NRjDj.mjs'),
  place: () => import('./index8-CdYCHWqs.mjs'),
  howTo: () => import('./index13-CQmuuvu-.mjs'),
  howToStep: () => import('./index12-Kq8BSKmN.mjs').then(function(n) {
    return n.i;
  }),
  image: () => Promise.resolve().then(function() {
    return index;
  }),
  localBusiness: () => import('./index17-C6NXlGKh.mjs'),
  offer: () => import('./index23-wJaCntOu.mjs'),
  openingHours: () => import('./index24-CIlY1Tg2.mjs'),
  organization: () => import('./index3-5ItGMP8n.mjs').then(function(n) {
    return n.h;
  }),
  person: () => import('./index3-5ItGMP8n.mjs').then(function(n) {
    return n.k;
  }),
  product: () => import('./index29-DXjs-hK_.mjs'),
  question: () => import('./index30-1LEgoSIB.mjs'),
  recipe: () => import('./index31-DLxlQC_C.mjs'),
  review: () => import('./index32-CN1CKbrA.mjs'),
  video: () => import('./index38-p9YPTd1e.mjs'),
  webPage: () => import('./index3-5ItGMP8n.mjs').then(function(n) {
    return n.j;
  }),
  webSite: () => import('./index3-5ItGMP8n.mjs').then(function(n) {
    return n.g;
  }),
  book: () => import('./index4-DFRimFSn.mjs'),
  itemList: () => import('./index14-DFfkH6Gu.mjs'),
  jobPosting: () => import('./index15-Cbni1Cyh.mjs'),
  listItem: () => import('./index16-94OoINrm.mjs'),
  movie: () => import('./index18-D9SJrmME.mjs'),
  musicAlbum: () => import('./index19-5xmw9IpR.mjs'),
  musicGroup: () => import('./index20-wlpTOn0q.mjs'),
  musicPlaylist: () => import('./index21-BS_D11Tj.mjs'),
  musicRecording: () => import('./index22-CyKs4vCx.mjs'),
  podcastEpisode: () => import('./index25-C9yisHRo.mjs'),
  podcastSeason: () => import('./index26-DOTysYdJ.mjs'),
  podcastSeries: () => import('./index27-Dl8OqS11.mjs'),
  searchAction: () => import('./index40-B1CmFZsp.mjs'),
  readAction: () => import('./index39-DNhcNsjC.mjs'),
  service: () => import('./index33-WVIXdGxr.mjs'),
  softwareApp: () => import('./index34-BQw0VSTT.mjs'),
  tvEpisode: () => import('./index35-zBvSv065.mjs'),
  tvSeason: () => import('./index36-_CgFEc4R.mjs'),
  tvSeries: () => import('./index37-DF3O-hjU.mjs'),
  bookEdition: () => import('./index4-DFRimFSn.mjs')
};
const resolverExportNames = {
  address: "addressResolver",
  aggregateOffer: "aggregateOfferResolver",
  aggregateRating: "aggregateRatingResolver",
  article: "articleResolver",
  breadcrumb: "breadcrumbResolver",
  comment: "commentResolver",
  course: "courseResolver",
  dataset: "datasetResolver",
  event: "eventResolver",
  foodEstablishment: "foodEstablishmentResolver",
  virtualLocation: "virtualLocationResolver",
  place: "placeResolver",
  howTo: "howToResolver",
  howToStep: "howToStepResolver",
  image: "imageResolver",
  localBusiness: "localBusinessResolver",
  offer: "offerResolver",
  openingHours: "openingHoursResolver",
  organization: "organizationResolver",
  person: "personResolver",
  product: "productResolver",
  question: "questionResolver",
  recipe: "recipeResolver",
  review: "reviewResolver",
  video: "videoResolver",
  webPage: "webPageResolver",
  webSite: "webSiteResolver",
  book: "bookResolver",
  itemList: "itemListResolver",
  jobPosting: "jobPostingResolver",
  listItem: "listItemResolver",
  movie: "movieResolver",
  musicAlbum: "musicAlbumResolver",
  musicGroup: "musicGroupResolver",
  musicPlaylist: "musicPlaylistResolver",
  musicRecording: "musicRecordingResolver",
  podcastEpisode: "podcastEpisodeResolver",
  podcastSeason: "podcastSeasonResolver",
  podcastSeries: "podcastSeriesResolver",
  searchAction: "searchActionResolver",
  readAction: "readActionResolver",
  service: "serviceResolver",
  softwareApp: "softwareAppResolver",
  tvEpisode: "tvEpisodeResolver",
  tvSeason: "tvSeasonResolver",
  tvSeries: "tvSeriesResolver",
  bookEdition: "bookEditionResolver"
};
async function loadResolver(resolver) {
  if (resolverCache[resolver])
    return resolverCache[resolver];
  const importFn = resolverImports[resolver];
  if (!importFn)
    return null;
  const mod = await importFn();
  const exportName = resolverExportNames[resolver];
  const loaded = mod[exportName] || mod.default;
  if (loaded)
    resolverCache[resolver] = loaded;
  return loaded || null;
}
const UNSAFE_KEYS = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
async function preloadNestedResolvers(obj) {
  if (!obj || typeof obj !== "object")
    return;
  const promises = [];
  if (typeof obj._resolver === "string") {
    const resolverName = obj._resolver;
    promises.push(loadResolver(resolverName).then((loaded) => {
      if (loaded)
        obj._resolver = loaded;
    }));
  }
  for (const key in obj) {
    if (!Object.hasOwn(obj, key) || UNSAFE_KEYS.has(key))
      continue;
    const val = obj[key];
    if (val && typeof val === "object") {
      if (Array.isArray(val)) {
        for (const item of val) {
          promises.push(preloadNestedResolvers(item));
        }
      } else {
        promises.push(preloadNestedResolvers(val));
      }
    }
  }
  await Promise.all(promises);
}
function mergeObjects(target, source) {
  const result = { ...target };
  for (const key in source) {
    if (!Object.hasOwn(source, key) || source[key] === void 0 || UNSAFE_KEYS.has(key))
      continue;
    const isNestedObject = result[key] && typeof result[key] === "object" && typeof source[key] === "object" && !Array.isArray(result[key]) && !Array.isArray(source[key]);
    if (isNestedObject)
      result[key] = mergeObjects(result[key], source[key]);
    else if (!result[key])
      result[key] = source[key];
  }
  return result;
}
function UnheadSchemaOrg(options) {
  return SchemaOrgUnheadPlugin({}, () => ({}), options);
}
function SchemaOrgUnheadPlugin(config, meta, options) {
  config = resolveMeta({ ...config });
  let graph;
  let resolvedMeta = {};
  return defineHeadPlugin((head) => {
    head.use(TemplateParamsPlugin);
    return {
      key: "schema-org",
      hooks: {
        "entries:normalize": async ({ tags }) => {
          graph = graph || createSchemaOrgGraph();
          for (const tag of tags) {
            if (tag.tag === "script" && tag.props.type === "application/ld+json" && tag.props.nodes) {
              const nodes = await tag.props.nodes;
              for (const node of Array.isArray(nodes) ? nodes : [nodes]) {
                if (typeof node !== "object" || Object.keys(node).length === 0) {
                  continue;
                }
                await preloadNestedResolvers(node);
                const newNode = {
                  ...node,
                  _dedupeStrategy: tag.tagDuplicateStrategy
                };
                graph.push(newNode);
              }
              tag.tagPosition = tag.tagPosition || config.tagPosition === "head" ? "head" : "bodyClose";
            }
            if (tag.tag === "htmlAttrs" && tag.props.lang) {
              resolvedMeta.inLanguage = tag.props.lang;
            } else if (tag.tag === "title") {
              resolvedMeta.title = tag.textContent;
            } else if (tag.tag === "meta" && tag.props.name === "description") {
              resolvedMeta.description = tag.props.content;
            } else if (tag.tag === "link" && tag.props.rel === "canonical") {
              resolvedMeta.url = tag.props.href;
              if (resolvedMeta.url && !resolvedMeta.host) {
                try {
                  resolvedMeta.host = new URL(resolvedMeta.url).origin;
                } catch {
                }
              }
            } else if (tag.tag === "meta" && tag.props.property === "og:image") {
              resolvedMeta.image = tag.props.content;
            } else if (tag.tag === "templateParams" && tag.props.schemaOrg) {
              resolvedMeta = {
                ...resolvedMeta,
                // @ts-expect-error untyped
                ...tag.props.schemaOrg
              };
              delete tag.props.schemaOrg;
            }
          }
        },
        "tags:resolve": async (ctx) => {
          for (const k in ctx.tags) {
            const tag = ctx.tags[k];
            if (tag.tag === "script" && tag.props.type === "application/ld+json" && tag.props.nodes) {
              delete tag.props.nodes;
              const resolvedGraph = graph.resolveGraph({ ...await meta?.() || {}, ...config, ...resolvedMeta });
              if (!resolvedGraph.length) {
                tag.props = {};
                return;
              }
              options?.minify || "production" === "production";
              tag.innerHTML = JSON.stringify({
                "@context": "https://schema.org",
                "@graph": resolvedGraph
              }, (_, value) => {
                if (typeof value !== "object")
                  return processTemplateParams(value, head._templateParams, head._separator);
                return value;
              }, 0 );
              return;
            }
          }
        },
        "tags:afterResolve": (ctx) => {
          let firstNodeKey;
          for (const k in ctx.tags) {
            const tag = ctx.tags[k];
            if (!tag?.props)
              continue;
            if (tag.props.type === "application/ld+json" && tag.props.nodes || tag.key === "schema-org-graph") {
              delete tag.props.nodes;
              if (typeof firstNodeKey === "undefined") {
                firstNodeKey = k;
                continue;
              }
              ctx.tags[firstNodeKey].props = mergeObjects(ctx.tags[firstNodeKey].props, tag.props);
              delete ctx.tags[firstNodeKey].props.nodes;
              ctx.tags[k] = false;
            }
          }
          ctx.tags = ctx.tags.filter(Boolean);
        }
      }
    };
  });
}
function provideResolver(input, resolver) {
  if (!input)
    input = {};
  const target = isRef(input) ? input.value : input;
  target._resolver = resolver;
  return input;
}
function defineBreadcrumb(input) {
  return provideResolver(input, "breadcrumb");
}
function defineLocalBusiness(input) {
  return provideResolver(input, "localBusiness");
}
function defineOrganization(input) {
  return provideResolver(input, "organization");
}
function definePerson(input) {
  return provideResolver(input, "person");
}
function defineWebPage(input) {
  return provideResolver(input, "webPage");
}
function defineWebSite(input) {
  return provideResolver(input, "webSite");
}
function useSiteConfig(options) {
  const stack = useRequestEvent()?.context.siteConfig.get(defu({ resolveRefs: true }, options));
  delete stack._priority;
  return stack;
}
function useSchemaOrgConfig() {
  const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
  return defu(runtimeConfig["nuxt-schema-org"], {
    scriptAttributes: {}
  });
}
function useSchemaOrg(input) {
  const config = useSchemaOrgConfig();
  useNuxtApp();
  let nodes = input;
  if (isRef(input)) {
    nodes = toValue(input);
  }
  const script = {
    type: "application/ld+json",
    key: "schema-org-graph",
    // @ts-expect-error untyped
    nodes,
    tagPriority: "high",
    ...config.scriptAttributes
  };
  {
    return useHead({
      script: [script]
    });
  }
}
const FILE_EXT_RE = /\.[0-9a-z]+$/i;
function resolveSitePath(pathOrUrl, options) {
  let path = pathOrUrl;
  if (hasProtocol(pathOrUrl, { strict: false, acceptRelative: true })) {
    const parsed = parseURL(pathOrUrl);
    path = parsed.pathname;
  }
  const base = withLeadingSlash(options.base || "/");
  if (base !== "/" && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  let origin = withoutTrailingSlash(options.siteUrl);
  if (base !== "/" && origin.endsWith(base)) {
    origin = origin.slice(0, origin.indexOf(base));
  }
  const baseWithOrigin = withBase(base, origin || "/");
  const resolvedUrl = withBase(path, baseWithOrigin);
  return path === "/" && false ? withTrailingSlash(resolvedUrl) : fixSlashes(options.trailingSlash, resolvedUrl);
}
const fileExtensions = [
  // Images
  "jpg",
  "jpeg",
  "png",
  "gif",
  "bmp",
  "webp",
  "svg",
  "ico",
  // Documents
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx",
  "txt",
  "md",
  "markdown",
  // Archives
  "zip",
  "rar",
  "7z",
  "tar",
  "gz",
  // Audio
  "mp3",
  "wav",
  "flac",
  "ogg",
  "opus",
  "m4a",
  "aac",
  "midi",
  "mid",
  // Video
  "mp4",
  "avi",
  "mkv",
  "mov",
  "wmv",
  "flv",
  "webm",
  // Web
  "html",
  "css",
  "js",
  "json",
  "xml",
  "tsx",
  "jsx",
  "ts",
  "vue",
  "svelte",
  "xsl",
  "rss",
  "atom",
  // Programming
  "php",
  "py",
  "rb",
  "java",
  "c",
  "cpp",
  "h",
  "go",
  // Data formats
  "csv",
  "tsv",
  "sql",
  "yaml",
  "yml",
  // Fonts
  "woff",
  "woff2",
  "ttf",
  "otf",
  "eot",
  // Executables/Binaries
  "exe",
  "msi",
  "apk",
  "ipa",
  "dmg",
  "iso",
  "bin",
  // Scripts/Config
  "bat",
  "cmd",
  "sh",
  "env",
  "htaccess",
  "conf",
  "toml",
  "ini",
  // Package formats
  "deb",
  "rpm",
  "jar",
  "war",
  // E-books
  "epub",
  "mobi",
  // Common temporary/backup files
  "log",
  "tmp",
  "bak",
  "old",
  "sav"
];
function isPathFile(path) {
  const lastSegment = path.split("/").pop();
  const ext = (lastSegment || path).match(FILE_EXT_RE)?.[0];
  return !!(ext && fileExtensions.includes(ext.replace(".", "")));
}
function fixSlashes(trailingSlash, pathOrUrl) {
  const $url = parseURL(pathOrUrl);
  if (isPathFile($url.pathname))
    return pathOrUrl;
  const fixedPath = trailingSlash ? withTrailingSlash($url.pathname) : withoutTrailingSlash($url.pathname);
  return `${$url.protocol ? `${$url.protocol}//` : ""}${$url.host || ""}${fixedPath}${$url.search || ""}${$url.hash || ""}`;
}
function resolvePathDirect(siteConfig2, path, options) {
  const nuxtBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL || "/";
  return resolveSitePath(path, {
    siteUrl: toValue(siteConfig2.url),
    trailingSlash: toValue(siteConfig2.trailingSlash),
    base: nuxtBase
  });
}
function initPlugin(nuxtApp) {
  const head = injectHead();
  const config = useSchemaOrgConfig();
  const route = useRoute();
  const siteConfig2 = useSiteConfig();
  const resolveUrl = (path) => resolvePathDirect(siteConfig2, path);
  function resolveSchemaOrg() {
    const siteConfigResolved = {};
    for (const key in siteConfig2) {
      if (key.startsWith("_")) {
        continue;
      }
      siteConfigResolved[key] = toValue(siteConfig2[key]);
      if (typeof siteConfigResolved[key] === "object") {
        for (const k in siteConfigResolved[key]) {
          siteConfigResolved[key][k] = toValue(siteConfigResolved[key][k]);
        }
      }
    }
    return {
      ...route.meta?.schemaOrg || {},
      ...siteConfigResolved,
      url: toValue(resolveUrl(route.path)),
      host: withTrailingSlash(toValue(resolveUrl("/"))),
      inLanguage: toValue(siteConfigResolved.currentLocale) || toValue(siteConfigResolved.defaultLocale),
      path: route.path
    };
  }
  useHead({
    templateParams: { schemaOrg: resolveSchemaOrg() }
  });
  const SchemaOrgPlugin = UnheadSchemaOrg ?? SchemaOrgUnheadPlugin;
  head.use(
    SchemaOrgPlugin({}, async () => {
      const meta = {};
      await nuxtApp.hooks.callHook("schema-org:meta", meta);
      return meta;
    }, {
      minify: config.minify,
      trailingSlash: siteConfig2.trailingSlash
    })
  );
}
function maybeAddIdentitySchemaOrg() {
  const config = useSchemaOrgConfig();
  const siteConfig2 = useSiteConfig({
    resolveRefs: true
  });
  if (config.identity || siteConfig2.identity) {
    const identity = config.identity || siteConfig2.identity;
    let identityPayload = {
      name: () => toValue(siteConfig2.name),
      url: () => toValue(siteConfig2.url)
    };
    let identityType;
    if (typeof identity !== "string") {
      identityPayload = {
        ...identityPayload,
        ...identity
      };
      identityType = identity.type;
      delete identityPayload.type;
    } else {
      identityType = identity;
    }
    if (siteConfig2.twitter) {
      const id = siteConfig2.twitter.startsWith("@") ? siteConfig2.twitter.slice(1) : siteConfig2.twitter;
      identityPayload.sameAs = [
        `https://twitter.com/${id}`
      ];
    }
    const identityDefines = {
      organization: defineOrganization,
      person: definePerson,
      localbusiness: defineLocalBusiness
    };
    const defineIdentity = identityDefines[identityType?.toLowerCase()] || defineOrganization;
    useSchemaOrg([defineIdentity(identityPayload)]);
  }
}
const defaults_ZjgoYqsIrjWNaJMfDhci2B0eoNnvY4CDsoscm0L1fE0 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt-schema-org:defaults",
  dependsOn: [
    "nuxt-schema-org:init"
  ],
  setup() {
    const error = /* @__PURE__ */ useError();
    if (error.value?.error) {
      return;
    }
    const siteConfig2 = useSiteConfig();
    useSchemaOrg([
      defineWebSite({
        name: () => toValue(siteConfig2.name) || "",
        inLanguage: () => toValue(siteConfig2.currentLocale) || "",
        description: () => toValue(siteConfig2.description) || ""
      }),
      defineWebPage()
    ]);
    maybeAddIdentitySchemaOrg();
  }
});
const init_Ks1wcI1vuv3K3FXG7iAYRqIWlPli19G_eByed0tsXe0 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt-schema-org:init",
  setup(nuxtApp) {
    initPlugin(nuxtApp);
  }
});
const robot_meta_server_bRHpso_4KN_Ec3RJzqCvbuvfZsNOeE_4TgpL8dCNuwk = /* @__PURE__ */ defineNuxtPlugin({
  setup() {
    const event = useRequestEvent();
    const ctx = event?.context?.robots;
    event?.context?.robotsProduction;
    if (!ctx)
      return;
    useHead({
      meta: [
        {
          "name": "robots",
          "content": () => ctx.rule || "",
          "data-hint": () => void 0,
          "data-production-content": () => void 0
        }
      ]
    });
  }
});
const prerender_server_sqIxOBipVr4FbVMA9kqWL0wT8FPop6sKAXLVfifsJzk = /* @__PURE__ */ defineNuxtPlugin(async () => {
  {
    return;
  }
});
const plugins = [
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  plugin,
  _0_siteConfig_tU0SxKrPeVRXWcGu2sOnIfhNDbYiKNfDCvYZhRueG0Q,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4,
  defaults_ZjgoYqsIrjWNaJMfDhci2B0eoNnvY4CDsoscm0L1fE0,
  init_Ks1wcI1vuv3K3FXG7iAYRqIWlPli19G_eByed0tsXe0,
  robot_meta_server_bRHpso_4KN_Ec3RJzqCvbuvfZsNOeE_4TgpL8dCNuwk,
  prerender_server_sqIxOBipVr4FbVMA9kqWL0wT8FPop6sKAXLVfifsJzk
];
const layouts = {
  branded: defineAsyncComponent(() => import('./branded-DH7yCy79.mjs').then((m) => m.default || m)),
  default: defineAsyncComponent(() => import('./default-CfJDl6ge.mjs').then((m) => m.default || m))
};
const routeRulesMatcher = _routeRulesMatcher;
const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  setup(props, context) {
    return () => h(layouts[props.name], props.layoutProps, context.slots);
  }
});
const nuxtLayoutProps = {
  name: {
    type: [String, Boolean, Object],
    default: null
  },
  fallback: {
    type: [String, Object],
    default: null
  }
};
const __nuxt_component_0 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: nuxtLayoutProps,
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const shouldUseEagerRoute = !injectedRoute || injectedRoute === useRoute();
    const route = shouldUseEagerRoute ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      let layout2 = unref(props.name) ?? route?.meta.layout ?? routeRulesMatcher(route?.path).appLayout ?? "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = shallowRef();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    let lastLayout;
    return () => {
      const hasLayout = !!layout.value && layout.value in layouts;
      const hasTransition = hasLayout && !!(route?.meta.layoutTransition ?? appLayoutTransition);
      const transitionProps = hasTransition && _mergeTransitionProps([
        route?.meta.layoutTransition,
        appLayoutTransition,
        {
          onBeforeLeave() {
            nuxtApp["~transitionPromise"] = new Promise((resolve) => {
              nuxtApp["~transitionFinish"] = resolve;
            });
          },
          onAfterLeave() {
            nuxtApp["~transitionFinish"]?.();
            delete nuxtApp["~transitionFinish"];
            delete nuxtApp["~transitionPromise"];
          }
        }
      ]);
      const previouslyRenderedLayout = lastLayout;
      lastLayout = layout.value;
      return _wrapInTransition(transitionProps, {
        default: () => h(
          Suspense,
          {
            suspensible: true,
            onResolve: async () => {
              await nextTick(done);
            }
          },
          {
            default: () => h(
              LayoutProvider,
              {
                layoutProps: mergeProps(context.attrs, route.meta.layoutProps ?? {}, { ref: layoutRef }),
                key: layout.value || void 0,
                name: layout.value,
                shouldProvide: !props.name,
                isRenderingNewLayout: (name) => {
                  return name !== previouslyRenderedLayout && name === layout.value;
                },
                hasTransition
              },
              context.slots
            )
          }
        )
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    },
    isRenderingNewLayout: {
      type: Function,
      required: true
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        // When name=false, always return true so NuxtPage doesn't skip rendering
        isCurrent: (route) => name === false || name === (route.meta.layout ?? routeRulesMatcher(route.path).appLayout ?? "default")
      });
    }
    const injectedRoute = inject(PageRouteSymbol);
    const isNotWithinNuxtPage = injectedRoute && injectedRoute === useRoute();
    if (isNotWithinNuxtPage) {
      const vueRouterRoute = useRoute$1();
      const reactiveChildRoute = {};
      for (const _key in vueRouterRoute) {
        const key = _key;
        Object.defineProperty(reactiveChildRoute, key, {
          enumerable: true,
          get: () => {
            return props.isRenderingNewLayout(props.name) ? vueRouterRoute[key] : injectedRoute[key];
          }
        });
      }
      provide(PageRouteSymbol, shallowReactive(reactiveChildRoute));
    }
    return () => {
      if (!name || typeof name === "string" && !(name in layouts)) {
        return context.slots.default?.();
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const defineRouteProvider = (name = "RouteProvider") => defineComponent({
  name,
  props: {
    route: {
      type: Object,
      required: true
    },
    vnode: Object,
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      if (!props.vnode) {
        return props.vnode;
      }
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const RouteProvider = defineRouteProvider();
const __nuxt_component_1 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          return h(Suspense, { suspensible: true }, {
            default() {
              return h(RouteProvider, {
                vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
                route: routeProps.route,
                vnodeRef: pageRef
              });
            }
          });
        }
      });
    };
  }
});
function normalizeSlot(slot, data) {
  const slotContent = slot(data);
  return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ScrollToTop",
  __ssrInlineRender: true,
  setup(__props) {
    const { y } = useWindowScroll();
    const visible = computed(() => y.value > 300);
    return (_ctx, _push, _parent, _attrs) => {
      if (visible.value) {
        _push(`<button${ssrRenderAttrs(mergeProps({
          class: "scroll-top-btn",
          "aria-label": "Back to top"
        }, _attrs))} data-v-cb41a9c5><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-v-cb41a9c5><polyline points="18 15 12 9 6 15" data-v-cb41a9c5></polyline></svg></button>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScrollToTop.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-cb41a9c5"]]);
const siteConfig = {
  url: "https://ges.ac.ug",
  name: "Gombe Education Service",
  description: "Gombe Education Service (GES) has delivered quality education in Uganda since 1995 through Gombe High School, Gombe Junior School, ScoobyDoo International and JSBI.",
  email: "info@ges.ac.ug",
  telephone: "+256708700006"
};
const defaultSeo = {
  title: "Gombe Education Service (GES) – Quality Education in Uganda",
  description: siteConfig.description
};
const routeSeo = {
  "/": {
    title: "Gombe Education Service (GES) – Schools in Uganda",
    description: "Gombe Education Service (GES) has delivered quality education in Uganda since 1995 through Gombe High School, Gombe Junior School, ScoobyDoo International and JSBI.",
    breadcrumb: "Home"
  },
  "/about": {
    title: "About Us – Gombe Education Service (GES)",
    description: "Discover Gombe Education Service (GES): our vision, mission and legacy of academic excellence across primary, secondary and vocational schools in Uganda.",
    breadcrumb: "About Us"
  },
  "/leadership": {
    title: "Leadership – Gombe Education Service",
    description: "Meet the leadership and management committee guiding Gombe Education Service (GES) and its network of schools across Uganda, driving excellence since 1995.",
    breadcrumb: "Leadership"
  },
  "/blog": {
    title: "News & Blog – Gombe Education Service",
    description: "Read the latest news, events and stories from Gombe Education Service (GES) and its schools: Gombe High School, Gombe Junior School, ScoobyDoo and JSBI.",
    breadcrumb: "News & Blog"
  },
  "/partnerships": {
    title: "Partnerships – Gombe Education Service",
    description: "Explore Gombe Education Service (GES) partnerships with local and global organisations advancing quality education and opportunity for students in Uganda.",
    breadcrumb: "Partnerships"
  },
  "/ges-life": {
    title: "GES Life – Student Life at Gombe Education Service",
    description: "Experience student life at Gombe Education Service (GES): campus activities, sports, clubs and culture across our schools in Uganda. See GES Life in pictures.",
    breadcrumb: "GES Life"
  },
  "/mentorship": {
    title: "Mentorship Programme – Gombe Education Service",
    description: "The Gombe Education Service (GES) mentorship programme connects students with mentors to build skills, character and career pathways across Uganda.",
    breadcrumb: "Mentorship"
  },
  "/academic-calendar": {
    title: "Academic Calendar – Gombe Education Service",
    description: "View the Gombe Education Service (GES) academic calendar: term dates, holidays and key events for Gombe High School, Gombe Junior School and partner schools.",
    breadcrumb: "Academic Calendar"
  },
  "/international-pathway": {
    title: "International Pathway – Gombe Education Service",
    description: "The Gombe Education Service (GES) International Pathway opens global study and university opportunities for students in Uganda. Explore programmes and admissions.",
    breadcrumb: "International Pathway"
  },
  "/institutions/jsbi": {
    title: "Gombe Institute of Business Science & Technology (GIBST) – GES",
    description: "Gombe Institute of Business Science & Technology (GIBST), part of Gombe Education Service, offers business and vocational training in Uganda. Explore courses, admissions and campus.",
    breadcrumb: "Gombe Institute of Business Science & Technology (GIBST)"
  }
};
const institutions = [
  {
    slug: "jsbi",
    name: "Gombe Institute of Business Science & Technology (GIBST)",
    alt: ["GIBST", "Gombe Institute of Business Science & Technology Uganda"],
    path: "/institutions/jsbi",
    externalUrl: "https://www.gibst.ac.ug/",
    type: "Vocational Institute",
    description: "Gombe Institute of Business Science & Technology (GIBST) equips students with practical business, vocational and hands-on skills for the modern workplace, as part of the Gombe Education Service network.",
    logo: "/images/Jimmy Ssekasi Business Institute Logo.png",
    image: "/images/JIMMY SEKASI.JPG"
  },
  {
    slug: "sakghs-bujuuko",
    name: "St. Andrew Kaggwa Gombe High School – Bujuuko",
    alt: ["SAKGHS Bujuuko", "St. Andrew Kaggwa Gombe High School", "Gombe High School"],
    path: "/institutions/sakghs-bujuuko",
    externalUrl: "https://bujuuko.gombehighschool.ac.ug/",
    type: "Secondary School",
    description: "St. Andrew Kaggwa Gombe High School – Bujuuko is a secondary school in the Gombe Education Service network, nurturing tomorrow's leaders through quality education, character formation and academic excellence.",
    logo: "/images/Gombe High logo.png",
    image: "/images/Gombe High School - Bujuuko.png"
  },
  {
    slug: "sakghs-kawaala",
    name: "St. Andrew Kaggwa Gombe High School – Kawaala",
    alt: ["SAKGHS Kawaala", "St. Andrew Kaggwa Gombe High School", "Gombe High School"],
    path: "/institutions/sakghs-kawaala",
    externalUrl: "https://kawaala.gombehighschool.ac.ug/",
    type: "Secondary School",
    description: "St. Andrew Kaggwa Gombe High School – Kawaala offers advanced secondary education in Kampala with a focus on academic excellence, as part of the Gombe Education Service network.",
    logo: "/images/Gombe High logo.png",
    image: "/images/IMG_9718.JPG"
  },
  {
    slug: "gjs-kampala",
    name: "Gombe Junior School – Kampala",
    alt: ["GJS Kampala", "Gombe Junior School"],
    path: "/institutions/gjs-kampala",
    externalUrl: "https://kikajjo.gombejuniorschool.ac.ug/",
    type: "UNEB Licensed Primary School",
    description: "Gombe Junior School – Kampala is a UNEB licensed primary school in the Gombe Education Service network, building strong foundations for lifelong learning.",
    logo: "/images/Gombe Junior School logo.png",
    image: "/images/GJS - Kampala.JPG"
  },
  {
    slug: "gjs-gulu",
    name: "Gombe Junior School – Gulu",
    alt: ["GJS Gulu", "Gombe Junior School"],
    path: "/institutions/gjs-gulu",
    externalUrl: "https://gulu.gombejuniorschool.ac.ug/",
    type: "UNEB Licensed Primary School",
    description: "Gombe Junior School – Gulu extends the Gombe Education Service tradition of foundational education excellence to Northern Uganda as a UNEB licensed primary school.",
    logo: "/images/Gombe Junior School logo.png",
    image: "/images/GJS Gulu class.jpeg"
  },
  {
    slug: "sisu-kampala",
    name: "ScoobyDoo International School Uganda – Kampala",
    alt: ["SISU Kampala", "ScoobyDoo International School Uganda", "Scoobydoo International School"],
    path: "/institutions/sisu-kampala",
    externalUrl: "https://katale.scoobydoointernational.ac.ug/",
    type: "International School",
    description: "ScoobyDoo International School Uganda – Kampala delivers an international curriculum preparing students for global success, as part of the Gombe Education Service network.",
    logo: "/images/scooby-logo.png",
    image: "/images/26-08-2015-12-55-02_1.jpg"
  },
  {
    slug: "sisu-gulu",
    name: "ScoobyDoo International School Uganda – Gulu",
    alt: ["SISU Gulu", "ScoobyDoo International School Uganda", "Scoobydoo International School"],
    path: "/institutions/sisu-gulu",
    externalUrl: "https://gulu.scoobydoointernational.ac.ug/",
    type: "International School",
    description: "ScoobyDoo International School Uganda – Gulu brings international education to Northern Uganda, as part of the Gombe Education Service network.",
    logo: "/images/scooby-logo.png",
    image: "/images/26-08-2015-01-12-29_IMG_3773.jpg"
  },
  {
    slug: "iepp",
    name: "International Education Pathways Program",
    alt: ["IEPP", "International Education Pathways"],
    path: "/international-pathway",
    externalUrl: "https://ipp.ges.ac.ug/",
    type: "International Programme",
    description: "The International Education Pathways Program (IEPP) opens global study and university opportunities for students across the Gombe Education Service network.",
    logo: "/logo.png",
    image: "/images/ieppheader.png"
  }
];
for (const inst of institutions) {
  if (!routeSeo[inst.path]) {
    routeSeo[inst.path] = {
      title: `${inst.name} – GES`,
      description: inst.description,
      breadcrumb: inst.name,
      ogImage: inst.image
    };
  }
}
const socials = [
  "https://www.linkedin.com/company/ges",
  "https://www.facebook.com/share/18cQvvPYgX/",
  "https://x.com/ges",
  "https://www.instagram.com/ges",
  "https://www.youtube.com/@ges",
  "https://www.tiktok.com/@ges"
];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const seo = computed(() => routeSeo[route.path] ?? defaultSeo);
    const absImage = computed(() => siteConfig.url + (seo.value.ogImage ?? "/logo.png"));
    const absUrl = computed(() => siteConfig.url + route.path);
    useSeoMeta({
      title: () => seo.value.title,
      description: () => seo.value.description,
      ogType: "website",
      ogSiteName: siteConfig.name,
      ogTitle: () => seo.value.title,
      ogDescription: () => seo.value.description,
      ogUrl: () => absUrl.value,
      ogImage: () => absImage.value,
      twitterCard: "summary_large_image",
      twitterTitle: () => seo.value.title,
      twitterDescription: () => seo.value.description,
      twitterImage: () => absImage.value
    });
    useHead({
      link: [{ rel: "canonical", href: () => absUrl.value }]
    });
    useSchemaOrg([
      defineOrganization({
        "@type": "EducationalOrganization",
        name: siteConfig.name,
        alternateName: ["GES", "Gombe", "Gombe Education Services"],
        url: siteConfig.url,
        logo: siteConfig.url + "/logo.png",
        foundingDate: "1995",
        description: siteConfig.description,
        email: siteConfig.email,
        telephone: siteConfig.telephone,
        address: {
          "@type": "PostalAddress",
          addressCountry: "UG",
          addressRegion: "Central Region",
          addressLocality: "Gombe"
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "admissions",
          email: siteConfig.email,
          telephone: siteConfig.telephone,
          areaServed: "UG",
          availableLanguage: ["en"]
        },
        sameAs: socials,
        // Ties brand-adjacent name searches (leadership names) back to GES as an entity.
        founder: [
          {
            "@type": "Person",
            name: "Rosalind Tanayita Kyewalabye",
            alternateName: ["Mrs. Rosalind Tanayita Kyewalabye"],
            jobTitle: "Co-Founder"
          }
        ],
        employee: [
          {
            "@type": "Person",
            name: "Owek. Kyewalabye Male David",
            alternateName: ["Owekitiibwa Kyewalabye Male", "Kyewalabye Male", "Owekitiibwa Kyewalabye Male David"],
            jobTitle: "Managing Director"
          }
        ],
        subOrganization: institutions.map((i) => ({
          "@type": "EducationalOrganization",
          name: i.name,
          alternateName: i.alt,
          url: siteConfig.url + i.path,
          sameAs: [i.externalUrl],
          parentOrganization: { "@id": siteConfig.url + "/#identity" }
        }))
      }),
      defineWebSite({ name: siteConfig.name })
    ]);
    const crumbItems = computed(() => {
      const items = [{ name: "Home", item: siteConfig.url + "/" }];
      if (route.path !== "/") {
        items.push({ name: seo.value.breadcrumb ?? seo.value.title, item: absUrl.value });
      }
      return items;
    });
    useSchemaOrg([defineBreadcrumb({ itemListElement: crumbItems.value })]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1;
      const _component_ScrollToTop = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white font-sans" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ScrollToTop, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/logo.png");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute$1();
    const { y } = useWindowScroll();
    const scrolled = computed(() => y.value > 40);
    const isInstitutionRoute = computed(() => route.path.startsWith("/institutions/"));
    const isAboutRoute = computed(() => ["/about", "/leadership", "/partnerships"].includes(route.path));
    const dropOpen = ref(false);
    const aboutOpen = ref(false);
    const mobileOpen = ref(false);
    const navLinks = [
      { name: "HOME", path: "/" },
      { name: "CALENDAR", path: "/academic-calendar" },
      { name: "BLOG", path: "/blog" }
    ];
    const institutions2 = [
      { name: "Gombe Institute of Business Science & Technology (GIBST)", shortName: "GIBST", path: "/institutions/jsbi", description: "Business & Vocational Training" },
      { name: "St. Andrew Kaggwa Gombe High School - Bujuuko", shortName: "SAKGHS Bujuuko", path: "/institutions/sakghs-bujuuko", description: "Advanced Secondary Education" },
      { name: "St. Andrew Kaggwa Gombe High School - Kawaala", shortName: "SAKGHS Kawaala", path: "/institutions/sakghs-kawaala", description: "Advanced Secondary Education" },
      { name: "Gombe Junior School - Kampala", shortName: "GJS Kampala", path: "/institutions/gjs-kampala", description: "Primary Education" },
      { name: "Gombe Junior School - Gulu", shortName: "GJS Gulu", path: "/institutions/gjs-gulu", description: "Primary Education" },
      { name: "ScoobyDoo International School Uganda - Kampala", shortName: "SISU Kampala", path: "/institutions/sisu-kampala", description: "International Curriculum" },
      { name: "ScoobyDoo International School Uganda - Gulu", shortName: "SISU Gulu", path: "/institutions/sisu-gulu", description: "International Curriculum" },
      { name: "International Education Pathways Program", shortName: "IEPP", path: "/international-pathway", description: "Global Study Pathways" }
    ];
    const topSocials = [
      { label: "Facebook", href: "https://www.facebook.com/share/18cQvvPYgX/", svg: '<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.052 15.04V8.626h2.17l.34-2.51H9.086V4.522c0-.712.204-1.22 1.255-1.22h1.324V1.06c-.239-.032-1.019-.1-1.935-.1-1.9 0-3.223 1.153-3.223 3.325v1.832h-2.17v2.51h2.17v6.412H9.05z"/></svg>' },
      { label: "Instagram", href: "#", svg: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>' },
      { label: "YouTube", href: "#", svg: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="#7A0001" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>' },
      { label: "TikTok", href: "#", svg: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>' },
      { label: "LinkedIn", href: "#", svg: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>' },
      { label: "X (Twitter)", href: "#", svg: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.258 5.636 5.906-5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>' }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["ges-header", { "ges-header--scrolled": scrolled.value }]
      }, _attrs))} data-v-2b1aab7f><div class="ges-island" data-v-2b1aab7f>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/",
        class: "ges-brand"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="GES" class="ges-brand__logo" data-v-2b1aab7f${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "GES",
                class: "ges-brand__logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="ges-island__body" data-v-2b1aab7f><div class="ges-topbar" data-v-2b1aab7f><span class="ges-topbar__tagline" data-v-2b1aab7f>Excellence in Education Since 1995</span><div class="ges-topbar__socials" data-v-2b1aab7f><!--[-->`);
      ssrRenderList(topSocials, (s) => {
        _push(`<a${ssrRenderAttr("href", s.href)}${ssrRenderAttr("aria-label", s.label)} target="_blank" rel="noopener noreferrer" class="ges-topbar__social-link" data-v-2b1aab7f><span data-v-2b1aab7f>${s.svg ?? ""}</span></a>`);
      });
      _push(`<!--]--></div></div><nav class="ges-nav" data-v-2b1aab7f><div class="ges-nav__links" data-v-2b1aab7f><!--[-->`);
      ssrRenderList(navLinks, (link) => {
        _push(ssrRenderComponent(_component_RouterLink, {
          key: link.path,
          to: link.path,
          class: ["ges-nav__link", { "ges-nav__link--active": unref(route).path === link.path }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><div class="ges-dropdown" data-v-2b1aab7f><button class="${ssrRenderClass([{ "ges-nav__link--active": isInstitutionRoute.value }, "ges-nav__link ges-dropdown__trigger"])}" data-v-2b1aab7f> INSTITUTIONS <svg class="${ssrRenderClass([{ "ges-dropdown__arrow--open": dropOpen.value }, "ges-dropdown__arrow"])}" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-v-2b1aab7f><polyline points="6 9 12 15 18 9" data-v-2b1aab7f></polyline></svg></button>`);
      if (dropOpen.value) {
        _push(`<div class="ges-dropdown__menu" data-v-2b1aab7f><!--[-->`);
        ssrRenderList(institutions2, (inst) => {
          _push(ssrRenderComponent(_component_RouterLink, {
            key: inst.path,
            to: inst.path,
            class: "ges-dropdown__item",
            onClick: ($event) => dropOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="ges-dropdown__item-name" data-v-2b1aab7f${_scopeId}>${ssrInterpolate(inst.name)}</span><span class="ges-dropdown__item-desc" data-v-2b1aab7f${_scopeId}>${ssrInterpolate(inst.description)}</span>`);
              } else {
                return [
                  createVNode("span", { class: "ges-dropdown__item-name" }, toDisplayString(inst.name), 1),
                  createVNode("span", { class: "ges-dropdown__item-desc" }, toDisplayString(inst.description), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="ges-dropdown" data-v-2b1aab7f><button class="${ssrRenderClass([{ "ges-nav__link--active": isAboutRoute.value }, "ges-nav__link ges-dropdown__trigger"])}" data-v-2b1aab7f> ABOUT <svg class="${ssrRenderClass([{ "ges-dropdown__arrow--open": aboutOpen.value }, "ges-dropdown__arrow"])}" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-v-2b1aab7f><polyline points="6 9 12 15 18 9" data-v-2b1aab7f></polyline></svg></button>`);
      if (aboutOpen.value) {
        _push(`<div class="ges-dropdown__menu ges-dropdown__menu--sm" data-v-2b1aab7f>`);
        _push(ssrRenderComponent(_component_RouterLink, {
          to: "/about",
          class: "ges-dropdown__item",
          onClick: ($event) => aboutOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="ges-dropdown__item-name" data-v-2b1aab7f${_scopeId}>About Us</span><span class="ges-dropdown__item-desc" data-v-2b1aab7f${_scopeId}>Vision, mission &amp; values</span>`);
            } else {
              return [
                createVNode("span", { class: "ges-dropdown__item-name" }, "About Us"),
                createVNode("span", { class: "ges-dropdown__item-desc" }, "Vision, mission & values")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_RouterLink, {
          to: "/leadership",
          class: "ges-dropdown__item",
          onClick: ($event) => aboutOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="ges-dropdown__item-name" data-v-2b1aab7f${_scopeId}>Leadership</span><span class="ges-dropdown__item-desc" data-v-2b1aab7f${_scopeId}>Management committee</span>`);
            } else {
              return [
                createVNode("span", { class: "ges-dropdown__item-name" }, "Leadership"),
                createVNode("span", { class: "ges-dropdown__item-desc" }, "Management committee")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_RouterLink, {
          to: "/partnerships",
          class: "ges-dropdown__item",
          onClick: ($event) => aboutOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="ges-dropdown__item-name" data-v-2b1aab7f${_scopeId}>Partnerships</span><span class="ges-dropdown__item-desc" data-v-2b1aab7f${_scopeId}>Our global partners</span>`);
            } else {
              return [
                createVNode("span", { class: "ges-dropdown__item-name" }, "Partnerships"),
                createVNode("span", { class: "ges-dropdown__item-desc" }, "Our global partners")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="ges-nav__cta" data-v-2b1aab7f><button class="ges-nav__search" aria-label="Search" data-v-2b1aab7f><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-v-2b1aab7f><circle cx="11" cy="11" r="8" data-v-2b1aab7f></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-2b1aab7f></line></svg></button>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/about",
        class: "ges-nav__donate",
        "aria-label": "Reachout"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Reachout`);
          } else {
            return [
              createTextVNode("Reachout")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/about",
        class: "ges-nav__reachout"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Reachout`);
          } else {
            return [
              createTextVNode("Reachout")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="ges-hamburger" aria-label="Toggle menu" data-v-2b1aab7f><span class="${ssrRenderClass(["ges-hamburger__bar", { "ges-hamburger__bar--open-1": mobileOpen.value }])}" data-v-2b1aab7f></span><span class="${ssrRenderClass(["ges-hamburger__bar", { "ges-hamburger__bar--open-2": mobileOpen.value }])}" data-v-2b1aab7f></span><span class="${ssrRenderClass(["ges-hamburger__bar", { "ges-hamburger__bar--open-3": mobileOpen.value }])}" data-v-2b1aab7f></span></button></nav></div></div>`);
      if (mobileOpen.value) {
        _push(`<div class="ges-mobile-menu" data-v-2b1aab7f><!--[-->`);
        ssrRenderList(navLinks, (link) => {
          _push(ssrRenderComponent(_component_RouterLink, {
            key: link.path,
            to: link.path,
            class: "ges-mobile-menu__link",
            onClick: ($event) => mobileOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(link.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(_component_RouterLink, {
          to: "/about",
          class: "ges-mobile-menu__link",
          onClick: ($event) => mobileOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`About Us`);
            } else {
              return [
                createTextVNode("About Us")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_RouterLink, {
          to: "/leadership",
          class: "ges-mobile-menu__link",
          onClick: ($event) => mobileOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Leadership`);
            } else {
              return [
                createTextVNode("Leadership")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_RouterLink, {
          to: "/partnerships",
          class: "ges-mobile-menu__link",
          onClick: ($event) => mobileOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Partnerships`);
            } else {
              return [
                createTextVNode("Partnerships")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="ges-mobile-menu__divider" data-v-2b1aab7f></div><p class="ges-mobile-menu__section" data-v-2b1aab7f>Institutions</p><!--[-->`);
        ssrRenderList(institutions2, (inst) => {
          _push(ssrRenderComponent(_component_RouterLink, {
            key: inst.path,
            to: inst.path,
            class: "ges-mobile-menu__link ges-mobile-menu__link--sub",
            onClick: ($event) => mobileOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(inst.shortName)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(inst.shortName), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(_component_RouterLink, {
          to: "/about",
          class: "ges-mobile-menu__cta",
          onClick: ($event) => mobileOpen.value = false
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
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const AppHeader = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2b1aab7f"]]);
const _imports_1 = publicAssetsURL("/images/Inzozi-grayscale1.png");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    const quickLinks = [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Leadership", path: "/leadership" },
      { name: "GES Life", path: "/ges-life" },
      { name: "Blog", path: "/blog" },
      { name: "Partnerships", path: "/partnerships" },
      { name: "Academic Calendar", path: "/academic-calendar" }
    ];
    const institutions2 = [
      { name: "Gombe Institute of Business Science & Technology (GIBST)", path: "/institutions/jsbi" },
      { name: "St. Andrew Kaggwa Gombe High School - Bujuuko", path: "/institutions/sakghs-bujuuko" },
      { name: "St. Andrew Kaggwa Gombe High School - Kawaala", path: "/institutions/sakghs-kawaala" },
      { name: "Gombe Junior School - Kampala", path: "/institutions/gjs-kampala" },
      { name: "Gombe Junior School - Gulu", path: "/institutions/gjs-gulu" },
      { name: "ScoobyDoo International School Uganda - Kampala", path: "/institutions/sisu-kampala" },
      { name: "ScoobyDoo International School Uganda - Gulu", path: "/institutions/sisu-gulu" },
      { name: "International Education Pathways Program", path: "/international-pathway" }
    ];
    const socials2 = [
      { label: "LinkedIn", href: "https://linkedin.com/company/ges", svg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>' },
      { label: "Facebook", href: "https://www.facebook.com/share/18cQvvPYgX/", svg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>' },
      { label: "X (Twitter)", href: "https://x.com/ges", svg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.258 5.636 5.906-5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>' },
      { label: "Instagram", href: "https://instagram.com/ges", svg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>' },
      { label: "YouTube", href: "https://youtube.com/@ges", svg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>' },
      { label: "WhatsApp", href: "https://wa.me/256760064471", svg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.106 1.51 5.833L.006 24l6.335-1.652A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.015-1.378l-.36-.214-3.722.97.99-3.617-.235-.373A9.818 9.818 0 1 1 12 21.818z"/></svg>' },
      { label: "Discord", href: "https://discord.gg/ges", svg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>' },
      { label: "TikTok", href: "https://tiktok.com/@ges", svg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>' }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "ges-footer" }, _attrs))} data-v-2f63ecbf><div class="ges-footer__layout1" data-v-2f63ecbf><div class="ges-footer__container" data-v-2f63ecbf><div class="ges-footer__grid" data-v-2f63ecbf><div class="ges-footer__brand" data-v-2f63ecbf>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/",
        class: "ges-footer__logo-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="GES" class="ges-footer__logo" data-v-2f63ecbf${_scopeId}><div data-v-2f63ecbf${_scopeId}><p class="ges-footer__org" data-v-2f63ecbf${_scopeId}>Gombe Education Service</p><p class="ges-footer__since" data-v-2f63ecbf${_scopeId}>Excellence Since 1995</p></div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "GES",
                class: "ges-footer__logo"
              }),
              createVNode("div", null, [
                createVNode("p", { class: "ges-footer__org" }, "Gombe Education Service"),
                createVNode("p", { class: "ges-footer__since" }, "Excellence Since 1995")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="ges-footer__desc" data-v-2f63ecbf> Committed to providing world-class education and nurturing future leaders through innovative learning and holistic development. </p><div class="ges-footer__contact" data-v-2f63ecbf><a href="mailto:info@ges.ac.ug" class="ges-footer__contact-item" data-v-2f63ecbf><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-2f63ecbf><rect x="2" y="4" width="20" height="16" rx="2" data-v-2f63ecbf></rect><path d="M22 7l-10 7L2 7" data-v-2f63ecbf></path></svg> info@ges.ac.ug </a><span class="ges-footer__contact-item" data-v-2f63ecbf><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-2f63ecbf><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.9a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.93 5.93l.82-.84a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" data-v-2f63ecbf></path></svg> 0708 700 006 </span></div><div class="ges-footer__social-row" data-v-2f63ecbf><div class="ges-footer__social" data-v-2f63ecbf><!--[-->`);
      ssrRenderList(socials2, (s) => {
        _push(`<a${ssrRenderAttr("href", s.href)}${ssrRenderAttr("aria-label", s.label)} target="_blank" rel="noopener noreferrer" class="ges-footer__social-link" data-v-2f63ecbf><span data-v-2f63ecbf>${s.svg ?? ""}</span></a>`);
      });
      _push(`<!--]--></div></div></div><div data-v-2f63ecbf><h4 class="ges-footer__heading" data-v-2f63ecbf>Quick Links</h4><ul class="ges-footer__list ges-footer__list--2col" data-v-2f63ecbf><!--[-->`);
      ssrRenderList(quickLinks, (link) => {
        _push(`<li data-v-2f63ecbf>`);
        _push(ssrRenderComponent(_component_RouterLink, {
          to: link.path,
          class: "ges-footer__link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div class="ges-footer__institutions" data-v-2f63ecbf><h4 class="ges-footer__heading" data-v-2f63ecbf>Our Institutions</h4><ul class="ges-footer__list ges-footer__list--2col" data-v-2f63ecbf><!--[-->`);
      ssrRenderList(institutions2, (inst) => {
        _push(`<li data-v-2f63ecbf>`);
        _push(ssrRenderComponent(_component_RouterLink, {
          to: inst.path,
          class: "ges-footer__link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(inst.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(inst.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div></div></div><div class="ges-footer__layout2" data-v-2f63ecbf><div class="ges-footer__container" data-v-2f63ecbf><div class="ges-footer__utility-row" data-v-2f63ecbf><p class="ges-footer__copy" data-v-2f63ecbf>© ${ssrInterpolate(unref(year))} Gombe Education Service. All rights reserved.</p><div class="ges-footer__powered" data-v-2f63ecbf><span class="ges-footer__powered-label" data-v-2f63ecbf>Powered by</span><img${ssrRenderAttr("src", _imports_1)} alt="Inzozi Logo" class="ges-footer__powered-logo" data-v-2f63ecbf></div></div></div></div></footer>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppFooter = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2f63ecbf"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "error",
  __ssrInlineRender: true,
  props: {
    error: {}
  },
  setup(__props) {
    useSeoMeta({
      title: "Page Not Found – Gombe Education Service",
      robots: "noindex, follow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white font-sans" }, _attrs))} data-v-f5514d63>`);
      _push(ssrRenderComponent(AppHeader, null, null, _parent));
      _push(`<main class="ges-error" data-v-f5514d63><div class="ges-error__inner" data-v-f5514d63><p class="ges-error__code" data-v-f5514d63>Error ${ssrInterpolate(__props.error.statusCode)}</p><h1 class="ges-error__title" data-v-f5514d63>${ssrInterpolate(__props.error.statusCode === 404 ? "Page not found" : "Something went wrong")}</h1><p class="ges-error__text" data-v-f5514d63>${ssrInterpolate(__props.error.statusCode === 404 ? "The page you are looking for may have moved or no longer exists. Try one of these instead:" : "An unexpected error occurred. Please try again, or head back to a useful page below:")}</p><nav class="ges-error__links" aria-label="Helpful links" data-v-f5514d63>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "ges-error__link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "ges-error__link"
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "ges-error__link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`News &amp; Blog`);
          } else {
            return [
              createTextVNode("News & Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/academic-calendar",
        class: "ges-error__link"
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/international-pathway",
        class: "ges-error__link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`International Pathway`);
          } else {
            return [
              createTextVNode("International Pathway")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><button class="ges-error__cta" data-v-f5514d63>Back to homepage</button></div></main>`);
      _push(ssrRenderComponent(AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ErrorComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f5514d63"]]);
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup", []);
    const error = /* @__PURE__ */ useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    function invokeAppErrorHandler(err, target, info) {
      const errorHandler = nuxtApp.vueApp.config.errorHandler;
      if (errorHandler && !errorHandler.__nuxt_default) {
        try {
          errorHandler(err, target, info);
        } catch (handlerError) {
          console.error("[nuxt] Error in `app.config.errorHandler`", handlerError);
        }
      }
    }
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        invokeAppErrorHandler(err, target, info);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error ||= createError(error);
    }
    if (ssrContext && (ssrContext["~renderResponse"] || ssrContext._renderResponse)) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry_default = ((ssrContext) => entry(ssrContext));

export { AppHeader as A, IdentityId as I, _export_sfc as _, _imports_0 as a, __nuxt_component_0$1 as b, __nuxt_component_1$1 as c, definePerson as d, entry_default as default, useRoute as e, createError as f, defineSchemaOrgResolver as g, setIfEmpty as h, institutions as i, asArray as j, resolveWithBase as k, resolvableDateToIso as l, idReference as m, resolveAsGraphKey as n, imageResolver as o, prefixId as p, resolveDefaultType as q, resolveRelation as r, siteConfig as s, trimLength as t, useSchemaOrg as u, resolvableDateToDate as v, resolveNode as w, dedupeMerge as x, AppFooter as y };
//# sourceMappingURL=server.mjs.map
