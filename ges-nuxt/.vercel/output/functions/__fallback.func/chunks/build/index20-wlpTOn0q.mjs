import { g as defineSchemaOrgResolver, v as resolvableDateToDate, k as resolveWithBase, r as resolveRelation } from './server.mjs';
import { p as personResolver } from './index3-5ItGMP8n.mjs';
import 'vue';
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
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';
import '@vueuse/core';
import './index16-94OoINrm.mjs';
import './index28-B51rSeO6.mjs';
import './index40-B1CmFZsp.mjs';
import './index39-DNhcNsjC.mjs';

const musicGroupResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "MusicGroup"
  },
  idPrefix: "host",
  inheritMeta: [
    { meta: "host", key: "url" }
  ],
  resolve(node, ctx) {
    if (node.foundingDate)
      node.foundingDate = resolvableDateToDate(node.foundingDate);
    if (node.dissolutionDate)
      node.dissolutionDate = resolvableDateToDate(node.dissolutionDate);
    if (node.url)
      node.url = resolveWithBase(ctx.meta.host, node.url);
    node.member = resolveRelation(node.member, ctx, personResolver);
    return node;
  }
});

export { musicGroupResolver };
//# sourceMappingURL=index20-wlpTOn0q.mjs.map
