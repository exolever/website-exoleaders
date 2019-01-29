// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-page-tsx": () => import("/Users/alexanderking/Projects/website-exoleaders/src/templates/page.tsx" /* webpackChunkName: "component---src-templates-page-tsx" */),
  "component---cache-dev-404-page-js": () => import("/Users/alexanderking/Projects/website-exoleaders/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-tsx": () => import("/Users/alexanderking/Projects/website-exoleaders/src/pages/404.tsx" /* webpackChunkName: "component---src-pages-404-tsx" */),
  "component---src-pages-index-tsx": () => import("/Users/alexanderking/Projects/website-exoleaders/src/pages/index.tsx" /* webpackChunkName: "component---src-pages-index-tsx" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/alexanderking/Projects/website-exoleaders/.cache/data.json")

