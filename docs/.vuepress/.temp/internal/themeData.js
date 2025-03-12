export const themeData = JSON.parse("{\"colorMode\":\"light\",\"colorModeSwitch\":false,\"logo\":\"/yuhao.jpg\",\"lastUpdated\":true,\"sidebarDepth\":2,\"navbar\":[{\"text\":\"其他\",\"children\":[{\"text\":\"计算机通识\",\"link\":\"/cs/\"},{\"text\":\"关于我\",\"link\":\"/about/resume.html\"}]},{\"text\":\"GitHub\",\"link\":\"https://github.com/guanyuhao\",\"target\":\"_blank\",\"rel\":\"noopener noreferrer\"}],\"sidebar\":\"auto\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
