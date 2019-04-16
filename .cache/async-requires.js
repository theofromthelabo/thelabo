// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-index-contentful-js": () => import("/Users/tcourtial/thelabo/src/templates/index-contentful.js" /* webpackChunkName: "component---src-templates-index-contentful-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/tcourtial/thelabo/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/tcourtial/thelabo/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-elements-js": () => import("/Users/tcourtial/thelabo/src/pages/elements.js" /* webpackChunkName: "component---src-pages-elements-js" */),
  "component---src-pages-generic-js": () => import("/Users/tcourtial/thelabo/src/pages/generic.js" /* webpackChunkName: "component---src-pages-generic-js" */),
  "component---src-pages-index-js": () => import("/Users/tcourtial/thelabo/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-landing-js": () => import("/Users/tcourtial/thelabo/src/pages/landing.js" /* webpackChunkName: "component---src-pages-landing-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/tcourtial/thelabo/.cache/data.json")

