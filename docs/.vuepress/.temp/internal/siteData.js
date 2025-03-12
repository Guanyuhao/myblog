export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"关哈哈\",\"description\":\"但行好事，莫问前程\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/yuhao.jpg\"}],[\"meta\",{\"name\":\"build-time\",\"content\":\"1741750186901\"}],[\"meta\",{\"http-equiv\":\"Cache-Control\",\"content\":\"no-cache, no-store, must-revalidate\"}],[\"meta\",{\"http-equiv\":\"Pragma\",\"content\":\"no-cache\"}],[\"meta\",{\"http-equiv\":\"Expires\",\"content\":\"0\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
