import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _453d1fd4 = () => interopDefault(import('..\\pages\\billing.vue' /* webpackChunkName: "pages/billing" */))
const _5bb4bc04 = () => interopDefault(import('..\\pages\\consultation.vue' /* webpackChunkName: "pages/consultation" */))
const _7238662a = () => interopDefault(import('..\\pages\\cookies.vue' /* webpackChunkName: "pages/cookies" */))
const _f0483224 = () => interopDefault(import('..\\pages\\cybercrime.vue' /* webpackChunkName: "pages/cybercrime" */))
const _2bbcc590 = () => interopDefault(import('..\\pages\\dataprotection.vue' /* webpackChunkName: "pages/dataprotection" */))
const _c19a8534 = () => interopDefault(import('..\\pages\\efficientmethods.vue' /* webpackChunkName: "pages/efficientmethods" */))
const _73727fec = () => interopDefault(import('..\\pages\\expertise.vue' /* webpackChunkName: "pages/expertise" */))
const _dd81aab6 = () => interopDefault(import('..\\pages\\financialcrimes.vue' /* webpackChunkName: "pages/financialcrimes" */))
const _e76fbf82 = () => interopDefault(import('..\\pages\\fraud.vue' /* webpackChunkName: "pages/fraud" */))
const _2556960a = () => interopDefault(import('..\\pages\\howwework.vue' /* webpackChunkName: "pages/howwework" */))
const _aeac8586 = () => interopDefault(import('..\\pages\\iuytfghjkhgfhjkihugyftcvijohugygvhjkhguyfjihugjvchvjbgyfvcghjhgjbknbhkjvbd chbjhvcbvbjbhvcbvbvghjhrvjgvcbjcbvcgjbvbvghcbjvgcvghvgcvghvcghvgchvgchsgvhjb.vue' /* webpackChunkName: "pages/iuytfghjkhgfhjkihugyftcvijohugygvhjkhguyfjihugjvchvjbgyfvcghjhgjbknbhkjvbd chbjhvcbvbjbhvcbvbvghjhrvjgvcbjcbvcgjbvbvghcbjvgcvghvgcvghvcghvgchvgchsgvhjb" */))
const _256672aa = () => interopDefault(import('..\\pages\\missappropriation.vue' /* webpackChunkName: "pages/missappropriation" */))
const _61a8877c = () => interopDefault(import('..\\pages\\neglectofduty.vue' /* webpackChunkName: "pages/neglectofduty" */))
const _2f30ae66 = () => interopDefault(import('..\\pages\\ourcompany.vue' /* webpackChunkName: "pages/ourcompany" */))
const _c01e5816 = () => interopDefault(import('..\\pages\\ourmission.vue' /* webpackChunkName: "pages/ourmission" */))
const _a0bf1b78 = () => interopDefault(import('..\\pages\\ourteam.vue' /* webpackChunkName: "pages/ourteam" */))
const _317d22a3 = () => interopDefault(import('..\\pages\\privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _2fdc545c = () => interopDefault(import('..\\pages\\recognition.vue' /* webpackChunkName: "pages/recognition" */))
const _470d99f4 = () => interopDefault(import('..\\pages\\riskassessment.vue' /* webpackChunkName: "pages/riskassessment" */))
const _3cc823d3 = () => interopDefault(import('..\\pages\\services.vue' /* webpackChunkName: "pages/services" */))
const _4fe5143c = () => interopDefault(import('..\\pages\\terms.vue' /* webpackChunkName: "pages/terms" */))
const _44850b86 = () => interopDefault(import('..\\pages\\whoweare.vue' /* webpackChunkName: "pages/whoweare" */))
const _2e0fb7ad = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/billing",
    component: _453d1fd4,
    name: "billing"
  }, {
    path: "/consultation",
    component: _5bb4bc04,
    name: "consultation"
  }, {
    path: "/cookies",
    component: _7238662a,
    name: "cookies"
  }, {
    path: "/cybercrime",
    component: _f0483224,
    name: "cybercrime"
  }, {
    path: "/dataprotection",
    component: _2bbcc590,
    name: "dataprotection"
  }, {
    path: "/efficientmethods",
    component: _c19a8534,
    name: "efficientmethods"
  }, {
    path: "/expertise",
    component: _73727fec,
    name: "expertise"
  }, {
    path: "/financialcrimes",
    component: _dd81aab6,
    name: "financialcrimes"
  }, {
    path: "/fraud",
    component: _e76fbf82,
    name: "fraud"
  }, {
    path: "/howwework",
    component: _2556960a,
    name: "howwework"
  }, {
    path: "/iuytfghjkhgfhjkihugyftcvijohugygvhjkhguyfjihugjvchvjbgyfvcghjhgjbknbhkjvbd%20chbjhvcbvbjbhvcbvbvghjhrvjgvcbjcbvcgjbvbvghcbjvgcvghvgcvghvcghvgchvgchsgvhjb",
    component: _aeac8586,
    name: "iuytfghjkhgfhjkihugyftcvijohugygvhjkhguyfjihugjvchvjbgyfvcghjhgjbknbhkjvbd chbjhvcbvbjbhvcbvbvghjhrvjgvcbjcbvcgjbvbvghcbjvgcvghvgcvghvcghvgchvgchsgvhjb"
  }, {
    path: "/missappropriation",
    component: _256672aa,
    name: "missappropriation"
  }, {
    path: "/neglectofduty",
    component: _61a8877c,
    name: "neglectofduty"
  }, {
    path: "/ourcompany",
    component: _2f30ae66,
    name: "ourcompany"
  }, {
    path: "/ourmission",
    component: _c01e5816,
    name: "ourmission"
  }, {
    path: "/ourteam",
    component: _a0bf1b78,
    name: "ourteam"
  }, {
    path: "/privacy",
    component: _317d22a3,
    name: "privacy"
  }, {
    path: "/recognition",
    component: _2fdc545c,
    name: "recognition"
  }, {
    path: "/riskassessment",
    component: _470d99f4,
    name: "riskassessment"
  }, {
    path: "/services",
    component: _3cc823d3,
    name: "services"
  }, {
    path: "/terms",
    component: _4fe5143c,
    name: "terms"
  }, {
    path: "/whoweare",
    component: _44850b86,
    name: "whoweare"
  }, {
    path: "/",
    component: _2e0fb7ad,
    name: "index"
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
