const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-page-tsx": hot(preferDefault(require("/Users/alexanderking/Projects/website-exoleaders/src/templates/page.tsx"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/alexanderking/Projects/website-exoleaders/src/pages/404.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/alexanderking/Projects/website-exoleaders/src/pages/index.tsx")))
}

