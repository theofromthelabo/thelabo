const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-index-contentful-js": hot(preferDefault(require("/Users/tcourtial/thelabo/src/templates/index-contentful.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/tcourtial/thelabo/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/tcourtial/thelabo/src/pages/404.js"))),
  "component---src-pages-elements-js": hot(preferDefault(require("/Users/tcourtial/thelabo/src/pages/elements.js"))),
  "component---src-pages-generic-js": hot(preferDefault(require("/Users/tcourtial/thelabo/src/pages/generic.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/tcourtial/thelabo/src/pages/index.js"))),
  "component---src-pages-landing-js": hot(preferDefault(require("/Users/tcourtial/thelabo/src/pages/landing.js")))
}

