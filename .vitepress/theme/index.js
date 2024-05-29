// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './style/index.css'
// 全局引入自定义组件
import AboutMe from "../component/AboutMe.vue";
import KnowledgeMap from "../component/KnowledgeMap.vue";
import ProgresBar from "../component/ProgresBar.vue";
// 全局导入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(ElementPlus);
    app.component("AboutMe", AboutMe);
    app.component("KnowledgeMap", KnowledgeMap);
    app.component("ProgresBar", ProgresBar);
    // ...
  }
}
