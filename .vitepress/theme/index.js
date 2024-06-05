// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './style/index.css'
// 导入视频播放组件
// import VueVideoPlayer from '@videojs-player/vue'
// import 'video.js/dist/video-js.css'






import { defineAsyncComponent } from 'vue'
// 全局引入自定义组件
import AboutMe from "../component/AboutMe.vue";
// import MyVideo from "../component/MyVideo.vue";
// import MdVideo from "../component/MdVideo.vue";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component("AboutMe", AboutMe);
    // app.component("MyVideo", MyVideo);
    // app.component("MdVideo", MdVideo);

    app.component('MyVideo', defineAsyncComponent(() =>
        import('../component/MyVideo.vue')
    ))
    // ...

  }
}
