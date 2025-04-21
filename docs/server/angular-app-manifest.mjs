
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/portfoliov5/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/portfoliov5"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5396, hash: '5b1fdac925af6efda1516bc3546beecf881e316a1e4b7574e0b7a01b4db49198', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1058, hash: 'c0ed09491667738260b0ff6d1b120aca2141077c5d8f2122282fdfc1c8f2f326', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-S6LDLXUO.css': {size: 5096, hash: '0sodU0IDc2w', text: () => import('./assets-chunks/styles-S6LDLXUO_css.mjs').then(m => m.default)}
  },
};
