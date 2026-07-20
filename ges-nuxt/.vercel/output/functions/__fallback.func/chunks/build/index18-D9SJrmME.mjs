import { g as defineSchemaOrgResolver, r as resolveRelation, v as resolvableDateToDate } from './server.mjs';
import { aggregateRatingResolver } from './index2-D85MX1VV.mjs';
import { p as personResolver, o as organizationResolver } from './index3-5ItGMP8n.mjs';
import { reviewResolver } from './index32-CN1CKbrA.mjs';
import { videoResolver } from './index38-p9YPTd1e.mjs';
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
import './schema-org.Ba7D0Hp1-CDxrmxka.mjs';

const movieResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Movie"
  },
  resolve(node, ctx) {
    node.aggregateRating = resolveRelation(node.aggregateRating, ctx, aggregateRatingResolver);
    node.review = resolveRelation(node.review, ctx, reviewResolver);
    node.director = resolveRelation(node.director, ctx, personResolver);
    node.actor = resolveRelation(node.actor, ctx, personResolver);
    node.trailer = resolveRelation(node.trailer, ctx, videoResolver);
    node.productionCompany = resolveRelation(node.productionCompany, ctx, organizationResolver);
    if (node.dateCreated)
      node.dateCreated = resolvableDateToDate(node.dateCreated);
    return node;
  }
});

export { movieResolver };
//# sourceMappingURL=index18-D9SJrmME.mjs.map
