import { addressResolver } from './index28-B51rSeO6.mjs';
import { g as defineSchemaOrgResolver, r as resolveRelation } from './server.mjs';
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

const placeResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Place"
  },
  resolve(node, ctx) {
    if (typeof node.address !== "string")
      node.address = resolveRelation(node.address, ctx, addressResolver);
    return node;
  }
});

export { placeResolver };
//# sourceMappingURL=index8-CdYCHWqs.mjs.map
