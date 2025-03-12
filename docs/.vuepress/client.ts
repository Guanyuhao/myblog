import { defineClientConfig } from '@vuepress/client'
import PostItem from './components/PostItem.vue'
import ProjectCard from './components/ProjectCard.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('PostItem', PostItem)
    app.component('ProjectCard', ProjectCard)
  },
  setup() {
    // 等同于 Vue 3 Composition API 中的 setup()
  },
  rootComponents: [],
})
