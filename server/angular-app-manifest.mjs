
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
    'index.csr.html': {size: 5396, hash: '9a59064c38c5b05c853150243011c605d29fa644abb94367031655c2ef6d7e50', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1058, hash: '064f1a8286f5e6957b3593e8083d23ed06d717c7dc8b6f52717f2ac430aa98e3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-S6LDLXUO.css': {size: 5096, hash: '0sodU0IDc2w', text: () => import('./assets-chunks/styles-S6LDLXUO_css.mjs').then(m => m.default)}
  },
};
