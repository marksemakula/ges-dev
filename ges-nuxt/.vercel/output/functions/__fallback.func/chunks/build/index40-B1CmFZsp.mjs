import { g as defineSchemaOrgResolver, k as resolveWithBase } from './server.mjs';
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

const searchActionResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint"
    },
    "query-input": {
      "@type": "PropertyValueSpecification",
      "valueRequired": true,
      "valueName": "search_term_string"
    }
  },
  resolve(node, ctx) {
    if (typeof node.target === "string") {
      node.target = {
        "@type": "EntryPoint",
        "urlTemplate": resolveWithBase(ctx.meta.host, node.target)
      };
    }
    return node;
  }
});

export { searchActionResolver };
//# sourceMappingURL=index40-B1CmFZsp.mjs.map
