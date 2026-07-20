import { g as defineSchemaOrgResolver, r as resolveRelation, l as resolvableDateToIso } from './server.mjs';
import { aggregateRatingResolver } from './index2-D85MX1VV.mjs';
import { p as personResolver, o as organizationResolver } from './index3-5ItGMP8n.mjs';
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

const tvSeriesResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "TVSeries"
  },
  resolve(node, ctx) {
    node.actor = resolveRelation(node.actor, ctx, personResolver);
    node.director = resolveRelation(node.director, ctx, personResolver);
    node.creator = resolveRelation(node.creator, ctx, personResolver);
    node.productionCompany = resolveRelation(node.productionCompany, ctx, organizationResolver);
    node.aggregateRating = resolveRelation(node.aggregateRating, ctx, aggregateRatingResolver);
    node.trailer = resolveRelation(node.trailer, ctx, videoResolver);
    if (node.datePublished)
      node.datePublished = resolvableDateToIso(node.datePublished);
    if (node.startDate)
      node.startDate = resolvableDateToIso(node.startDate);
    if (node.endDate)
      node.endDate = resolvableDateToIso(node.endDate);
    return node;
  }
});

export { tvSeriesResolver };
//# sourceMappingURL=index37-DF3O-hjU.mjs.map
