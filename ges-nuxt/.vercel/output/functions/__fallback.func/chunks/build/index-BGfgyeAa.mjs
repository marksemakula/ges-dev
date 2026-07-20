import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-page" }, _attrs))} data-v-0080382b><div class="admin-header" data-v-0080382b><div class="container" data-v-0080382b><h1 class="admin-header__title" data-v-0080382b>GES Admin Panel</h1><p class="admin-header__sub" data-v-0080382b>Content Management System</p></div></div><div class="container admin-body" data-v-0080382b><div class="admin-notice" data-v-0080382b><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-0080382b><circle cx="12" cy="12" r="10" data-v-0080382b></circle><line x1="12" y1="8" x2="12" y2="12" data-v-0080382b></line><line x1="12" y1="16" x2="12.01" y2="16" data-v-0080382b></line></svg><div data-v-0080382b><p class="admin-notice__title" data-v-0080382b>Admin Area</p><p class="admin-notice__text" data-v-0080382b>This area requires authentication. Please contact your GES administrator for access credentials.</p></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0080382b"]]);

export { index as default };
//# sourceMappingURL=index-BGfgyeAa.mjs.map
