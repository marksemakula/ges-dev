import { g as defineSchemaOrgResolver, h as setIfEmpty, m as idReference, r as resolveRelation } from './server.mjs';
import { d as PrimaryWebPageId } from './index3-5ItGMP8n.mjs';
import { h as howToStepResolver } from './index12-Kq8BSKmN.mjs';
export { a as howToStepDirectionResolver } from './index12-Kq8BSKmN.mjs';
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

const HowToId = "#howto";
const howToResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "HowTo"
  },
  inheritMeta: [
    "description",
    "image",
    "inLanguage",
    { meta: "title", key: "name" }
  ],
  idPrefix: ["url", HowToId],
  resolve(node, ctx) {
    node.step = resolveRelation(node.step, ctx, howToStepResolver);
    return node;
  },
  resolveRootNode(node, { find }) {
    const webPage = find(PrimaryWebPageId);
    if (webPage)
      setIfEmpty(node, "mainEntityOfPage", idReference(webPage));
  }
});

export { HowToId, howToResolver, howToStepResolver };
//# sourceMappingURL=index13-CQmuuvu-.mjs.map
