import { g as defineSchemaOrgResolver, r as resolveRelation, l as resolvableDateToIso } from './server.mjs';
import { aggregateRatingResolver } from './index2-D85MX1VV.mjs';
import { p as personResolver } from './index3-5ItGMP8n.mjs';
import { reviewResolver } from './index32-CN1CKbrA.mjs';
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

const podcastEpisodeResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "PodcastEpisode"
  },
  inheritMeta: [
    "inLanguage"
  ],
  resolve(node, ctx) {
    node.author = resolveRelation(node.author, ctx, personResolver);
    node.aggregateRating = resolveRelation(node.aggregateRating, ctx, aggregateRatingResolver);
    node.review = resolveRelation(node.review, ctx, reviewResolver);
    if (node.datePublished)
      node.datePublished = resolvableDateToIso(node.datePublished);
    if (node.uploadDate)
      node.uploadDate = resolvableDateToIso(node.uploadDate);
    return node;
  }
});

export { podcastEpisodeResolver };
//# sourceMappingURL=index25-C9yisHRo.mjs.map
