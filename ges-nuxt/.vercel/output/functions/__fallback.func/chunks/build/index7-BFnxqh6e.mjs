import { g as defineSchemaOrgResolver, q as resolveDefaultType, r as resolveRelation, l as resolvableDateToIso } from './server.mjs';
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

const PrimaryDatasetId = "#dataset";
const datasetResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Dataset"
  },
  inheritMeta: [
    "description",
    "url",
    "dateModified",
    "datePublished",
    { meta: "title", key: "name" }
  ],
  idPrefix: ["url", PrimaryDatasetId],
  resolve(node, ctx) {
    resolveDefaultType(node, "Dataset");
    node.creator = resolveRelation(node.creator, ctx, personResolver, {
      root: true
    });
    node.dateModified = resolvableDateToIso(node.dateModified);
    node.datePublished = resolvableDateToIso(node.datePublished);
    return node;
  }
});

export { PrimaryDatasetId, datasetResolver };
//# sourceMappingURL=index7-BFnxqh6e.mjs.map
