import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7a0be3cb = () => interopDefault(import('..\\pages\\editor\\index.vue' /* webpackChunkName: "pages/editor/index" */))
const _09bd9056 = () => interopDefault(import('..\\pages\\settings\\index.vue' /* webpackChunkName: "pages/settings/index" */))
const _ccf9cc32 = () => interopDefault(import('..\\pages\\sign-in\\index.vue' /* webpackChunkName: "pages/sign-in/index" */))
const _51ea9a9e = () => interopDefault(import('..\\pages\\sign-up\\index.vue' /* webpackChunkName: "pages/sign-up/index" */))
const _79b55c3e = () => interopDefault(import('..\\pages\\article\\_slug.vue' /* webpackChunkName: "pages/article/_slug" */))
const _6748a4d8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _6df69667 = () => interopDefault(import('..\\pages\\_username\\index.vue' /* webpackChunkName: "pages/_username/index" */))
const _de4f7228 = () => interopDefault(import('..\\pages\\_username\\favorites.vue' /* webpackChunkName: "pages/_username/favorites" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/editor",
    component: _7a0be3cb,
    name: "editor"
  }, {
    path: "/settings",
    component: _09bd9056,
    name: "settings"
  }, {
    path: "/sign-in",
    component: _ccf9cc32,
    name: "sign-in"
  }, {
    path: "/sign-up",
    component: _51ea9a9e,
    name: "sign-up"
  }, {
    path: "/article/:slug?",
    component: _79b55c3e,
    name: "article-slug"
  }, {
    path: "/",
    component: _6748a4d8,
    name: "index"
  }, {
    path: "/:username",
    component: _6df69667,
    name: "username"
  }, {
    path: "/:username/favorites",
    component: _de4f7228,
    name: "username-favorites"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
