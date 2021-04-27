import { wrapFunctional } from './utils'

export { default as ArticlePreview } from '../..\\components\\article-preview.vue'
export { default as AuthorBanner } from '../..\\components\\author-banner.vue'

export const LazyArticlePreview = import('../..\\components\\article-preview.vue' /* webpackChunkName: "components/article-preview" */).then(c => wrapFunctional(c.default || c))
export const LazyAuthorBanner = import('../..\\components\\author-banner.vue' /* webpackChunkName: "components/author-banner" */).then(c => wrapFunctional(c.default || c))
