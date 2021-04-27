import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  ArticlePreview: () => import('../..\\components\\article-preview.vue' /* webpackChunkName: "components/article-preview" */).then(c => wrapFunctional(c.default || c)),
  AuthorBanner: () => import('../..\\components\\author-banner.vue' /* webpackChunkName: "components/author-banner" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
