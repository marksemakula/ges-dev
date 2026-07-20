import { g as defineSchemaOrgResolver, h as setIfEmpty, m as idReference, r as resolveRelation } from './server.mjs';
import { P as PrimaryArticleId, d as PrimaryWebPageId } from './index3-5ItGMP8n.mjs';
import { h as howToStepResolver } from './index12-Kq8BSKmN.mjs';
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

const RecipeId = "#recipe";
const recipeResolver = defineSchemaOrgResolver({
  defaults: {
    "@type": "Recipe"
  },
  inheritMeta: [
    { meta: "title", key: "name" },
    "description",
    "image",
    "datePublished"
  ],
  idPrefix: ["url", RecipeId],
  resolve(node, ctx) {
    node.recipeInstructions = resolveRelation(node.recipeInstructions, ctx, howToStepResolver);
    return node;
  },
  resolveRootNode(node, { find }) {
    const article = find(PrimaryArticleId);
    const webPage = find(PrimaryWebPageId);
    if (article)
      setIfEmpty(node, "mainEntityOfPage", idReference(article));
    else if (webPage)
      setIfEmpty(node, "mainEntityOfPage", idReference(webPage));
    if (article == null ? void 0 : article.author)
      setIfEmpty(node, "author", article.author);
    return node;
  }
});

export { RecipeId, recipeResolver };
//# sourceMappingURL=index31-DLxlQC_C.mjs.map
