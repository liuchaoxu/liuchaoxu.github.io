import DPlayer from "dplayer";
import { resolveComponent, withCtx, createVNode, createTextVNode, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  name: "MyVideo",
  props: {
    src: String,
    pic: String
  },
  data() {
    return {
      dp: {}
      // src:"https://media.w3.org/2010/05/sintel/trailer.mp4"
    };
  },
  methods: {},
  mounted() {
    console.log(this.src + "<<<<=====视频链接");
    this.dp = new DPlayer({
      //播放器的一些参数
      container: document.getElementById("dplayer"),
      video: {
        url: this.src,
        //视频地址
        pic: this.pic
        //视频封面
      },
      autoplay: false,
      //是否自动播放
      theme: "#d83c07",
      //主题色
      loop: true,
      //视频是否循环播放
      lang: "zh-cn",
      screenshot: false,
      //是否开启截图
      hotkey: true,
      //是否开启热键
      preload: "auto",
      //视频是否预加载
      volume: 1,
      //默认音量
      mutex: true,
      //阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
      chromecast: false,
      //启用 Chromecast
      logo: "https://liuchaoxu.github.io/image/透明.png",
      // subtitle: {  //字幕
      //   url: 'dplayer.vtt',
      //   type: 'webvtt',
      //   fontSize: '25px',
      //   bottom: '10%',
      //   color: '#b7daff',
      // },
      // danmaku: {  //弹幕
      //   id: '9E2E3368B56CDBB4',
      //   api: 'https://api.prprpr.me/dplayer/',
      //   token: 'tokendemo',
      //   maximum: 1000,
      //   addition: ['https://api.prprpr.me/dplayer/v3/bilibili?aid=1543137414'],
      //   user: 'DIYgod',
      //   bottom: '15%',
      //   unlimited: true,
      //   speedRate: 0.5,
      // },
      contextmenu: [
        //自定义右键菜单
        {
          text: "查看本站作者GitHub",
          link: "https://github.com/liuchaoxu"
        }
      ],
      highlight: [
        {
          time: 20,
          text: "这是第 20 秒"
        },
        {
          time: 36,
          text: "这是第 36 秒"
        }
      ]
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_dev = resolveComponent("dev");
  _push(ssrRenderComponent(_component_dev, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span style="${ssrRenderStyle({ "color": "#3dd68c" })}"${_scopeId}>这是一个测试 <svg t="1717559293806" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4250" width="20" height="20"${_scopeId}><path d="M512 788.574815c-5.688889 0-11.093333-2.275556-15.075556-6.257778l-0.189629-0.18963L326.257778 611.555556c-8.343704-8.343704-8.343704-21.807407 0-30.151112s21.807407-8.343704 30.151111 0L512 737.09037l155.591111-155.685926c8.343704-8.343704 21.807407-8.343704 30.151111 0s8.343704 21.807407 0 30.151112l-170.666666 170.761481c-3.982222 4.077037-9.386667 6.257778-15.075556 6.257778z" p-id="4251"${_scopeId}></path><path d="M512.474074 788.195556c-11.757037 0-21.333333-9.576296-21.333333-21.333334V255.241481c0-11.757037 9.576296-21.333333 21.333333-21.333333s21.333333 9.576296 21.333333 21.333333v511.525926c0 11.851852-9.576296 21.428148-21.333333 21.428149z" p-id="4252"${_scopeId}></path></svg></span><div id="dplayer"${_scopeId}></div>`);
      } else {
        return [
          createVNode("span", { style: { "color": "#3dd68c" } }, [
            createTextVNode("这是一个测试 "),
            (openBlock(), createBlock("svg", {
              t: "1717559293806",
              class: "icon",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "4250",
              width: "20",
              height: "20"
            }, [
              createVNode("path", {
                d: "M512 788.574815c-5.688889 0-11.093333-2.275556-15.075556-6.257778l-0.189629-0.18963L326.257778 611.555556c-8.343704-8.343704-8.343704-21.807407 0-30.151112s21.807407-8.343704 30.151111 0L512 737.09037l155.591111-155.685926c8.343704-8.343704 21.807407-8.343704 30.151111 0s8.343704 21.807407 0 30.151112l-170.666666 170.761481c-3.982222 4.077037-9.386667 6.257778-15.075556 6.257778z",
                "p-id": "4251"
              }),
              createVNode("path", {
                d: "M512.474074 788.195556c-11.757037 0-21.333333-9.576296-21.333333-21.333334V255.241481c0-11.757037 9.576296-21.333333 21.333333-21.333333s21.333333 9.576296 21.333333 21.333333v511.525926c0 11.851852-9.576296 21.428148-21.333333 21.428149z",
                "p-id": "4252"
              })
            ]))
          ]),
          createVNode("div", { id: "dplayer" })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/component/MyVideo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MyVideo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  MyVideo as default
};
