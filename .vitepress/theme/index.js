// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './style/index.css'

import 'video.js/dist/video-js.css'
// import videojs from "video.js";

import { defineAsyncComponent } from 'vue'
// 全局引入自定义组件
// import AboutMeTop from "../component/AboutMeTop.vue";
// 直接引入会在打包时调用到浏览器使用函数，在node中找不到全局对象  采用defineAsyncComponent异步  加载组件时再调用解决无法build问题
// import VideoPlayer from "../component/VideoPlayer.vue";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {

    // app.component("VideoPlayer", VideoPlayer);
    // 异步加载组件
    app.component('VideoPlayer', defineAsyncComponent(() =>
        import('../component/VideoPlayer.vue')
    ));
    app.component('VueUtterances', defineAsyncComponent(() =>
        import('../component/VueUtterances.vue')
    ));
    app.component('AboutMeTop', defineAsyncComponent(() =>
        import('../component/AboutMeTop.vue')
    ));
    // ...

  }
}
