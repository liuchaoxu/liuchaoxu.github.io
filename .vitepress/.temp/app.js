import { resolveComponent, withCtx, createVNode, createTextVNode, openBlock, createBlock, useSSRContext, defineComponent, h, defineAsyncComponent, ref, onMounted, watchEffect, watch, onUnmounted, createSSRApp } from "vue";
import { L as Layout, _ as _sfc_main$2, i as inBrowser, c as createTitle, m as mergeHead, u as useRoute, p as pathToFile, a as useData, R as RouterSymbol, b as initData, d as dataSymbol, C as Content, s as siteDataRef, e as createRouter } from "./VPTeamMembers.B12fLzWA.js";
import { ssrRenderComponent, ssrRenderStyle, renderToString } from "vue/server-renderer";
import DPlayer from "dplayer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
import "@vueuse/core";
const theme = {
  Layout,
  enhanceApp: ({ app }) => {
    app.component("Badge", _sfc_main$2);
  }
};
const _sfc_main$1 = {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/component/MyVideo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MyVideo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const MyVideo$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MyVideo
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AboutMe",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1>关于 liuchaoxu</h1>`);
      _push(ssrRenderComponent(MyVideo, { src: "https://media.w3.org/2010/05/sintel/trailer.mp4" }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/component/AboutMe.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RawTheme = {
  extends: theme,
  Layout: () => {
    return h(theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    app.component("AboutMe", _sfc_main);
    app.component("MyVideo", defineAsyncComponent(
      () => Promise.resolve().then(() => MyVideo$1)
    ));
    app.component("MyComment", defineAsyncComponent(
      () => import("./MyComment.B6CD1oZO.js")
    ));
  }
};
const ClientOnly = defineComponent({
  setup(_, { slots }) {
    const show = ref(false);
    onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
function useCodeGroups() {
  if (inBrowser) {
    window.addEventListener("click", (e) => {
      var _a;
      const el = e.target;
      if (el.matches(".vp-code-group input")) {
        const group = (_a = el.parentElement) == null ? void 0 : _a.parentElement;
        if (!group)
          return;
        const i = Array.from(group.querySelectorAll("input")).indexOf(el);
        if (i < 0)
          return;
        const blocks = group.querySelector(".blocks");
        if (!blocks)
          return;
        const current = Array.from(blocks.children).find((child) => child.classList.contains("active"));
        if (!current)
          return;
        const next = blocks.children[i];
        if (!next || current === next)
          return;
        current.classList.remove("active");
        next.classList.add("active");
        const label = group == null ? void 0 : group.querySelector(`label[for="${el.id}"]`);
        label == null ? void 0 : label.scrollIntoView({ block: "nearest" });
      }
    });
  }
}
function useCopyCode() {
  if (inBrowser) {
    const timeoutIdMap = /* @__PURE__ */ new WeakMap();
    window.addEventListener("click", (e) => {
      var _a;
      const el = e.target;
      if (el.matches('div[class*="language-"] > button.copy')) {
        const parent = el.parentElement;
        const sibling = (_a = el.nextElementSibling) == null ? void 0 : _a.nextElementSibling;
        if (!parent || !sibling) {
          return;
        }
        const isShell = /language-(shellscript|shell|bash|sh|zsh)/.test(parent.className);
        const ignoredNodes = [".vp-copy-ignore", ".diff.remove"];
        const clone = sibling.cloneNode(true);
        clone.querySelectorAll(ignoredNodes.join(",")).forEach((node) => node.remove());
        let text = clone.textContent || "";
        if (isShell) {
          text = text.replace(/^ *(\$|>) /gm, "").trim();
        }
        copyToClipboard(text).then(() => {
          el.classList.add("copied");
          clearTimeout(timeoutIdMap.get(el));
          const timeoutId = setTimeout(() => {
            el.classList.remove("copied");
            el.blur();
            timeoutIdMap.delete(el);
          }, 2e3);
          timeoutIdMap.set(el, timeoutId);
        });
      }
    });
  }
}
async function copyToClipboard(text) {
  try {
    return navigator.clipboard.writeText(text);
  } catch {
    const element = document.createElement("textarea");
    const previouslyFocusedElement = document.activeElement;
    element.value = text;
    element.setAttribute("readonly", "");
    element.style.contain = "strict";
    element.style.position = "absolute";
    element.style.left = "-9999px";
    element.style.fontSize = "12pt";
    const selection = document.getSelection();
    const originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;
    document.body.appendChild(element);
    element.select();
    element.selectionStart = 0;
    element.selectionEnd = text.length;
    document.execCommand("copy");
    document.body.removeChild(element);
    if (originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }
}
function useUpdateHead(route, siteDataByRouteRef) {
  let isFirstUpdate = true;
  let managedHeadElements = [];
  const updateHeadTags = (newTags) => {
    if (isFirstUpdate) {
      isFirstUpdate = false;
      newTags.forEach((tag) => {
        const headEl = createHeadElement(tag);
        for (const el of document.head.children) {
          if (el.isEqualNode(headEl)) {
            managedHeadElements.push(el);
            return;
          }
        }
      });
      return;
    }
    const newElements = newTags.map(createHeadElement);
    managedHeadElements.forEach((oldEl, oldIndex) => {
      const matchedIndex = newElements.findIndex((newEl) => newEl == null ? void 0 : newEl.isEqualNode(oldEl ?? null));
      if (matchedIndex !== -1) {
        delete newElements[matchedIndex];
      } else {
        oldEl == null ? void 0 : oldEl.remove();
        delete managedHeadElements[oldIndex];
      }
    });
    newElements.forEach((el) => el && document.head.appendChild(el));
    managedHeadElements = [...managedHeadElements, ...newElements].filter(Boolean);
  };
  watchEffect(() => {
    const pageData = route.data;
    const siteData = siteDataByRouteRef.value;
    const pageDescription = pageData && pageData.description;
    const frontmatterHead = pageData && pageData.frontmatter.head || [];
    const title = createTitle(siteData, pageData);
    if (title !== document.title) {
      document.title = title;
    }
    const description = pageDescription || siteData.description;
    let metaDescriptionElement = document.querySelector(`meta[name=description]`);
    if (metaDescriptionElement) {
      if (metaDescriptionElement.getAttribute("content") !== description) {
        metaDescriptionElement.setAttribute("content", description);
      }
    } else {
      createHeadElement(["meta", { name: "description", content: description }]);
    }
    updateHeadTags(mergeHead(siteData.head, filterOutHeadDescription(frontmatterHead)));
  });
}
function createHeadElement([tag, attrs, innerHTML]) {
  const el = document.createElement(tag);
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  if (innerHTML) {
    el.innerHTML = innerHTML;
  }
  if (tag === "script" && !attrs.async) {
    el.async = false;
  }
  return el;
}
function isMetaDescription(headConfig) {
  return headConfig[0] === "meta" && headConfig[1] && headConfig[1].name === "description";
}
function filterOutHeadDescription(head) {
  return head.filter((h2) => !isMetaDescription(h2));
}
const hasFetched = /* @__PURE__ */ new Set();
const createLink = () => document.createElement("link");
const viaDOM = (url) => {
  const link2 = createLink();
  link2.rel = `prefetch`;
  link2.href = url;
  document.head.appendChild(link2);
};
const viaXHR = (url) => {
  const req = new XMLHttpRequest();
  req.open("GET", url, req.withCredentials = true);
  req.send();
};
let link;
const doFetch = inBrowser && (link = createLink()) && link.relList && link.relList.supports && link.relList.supports("prefetch") ? viaDOM : viaXHR;
function usePrefetch() {
  if (!inBrowser) {
    return;
  }
  if (!window.IntersectionObserver) {
    return;
  }
  let conn;
  if ((conn = navigator.connection) && (conn.saveData || /2g/.test(conn.effectiveType))) {
    return;
  }
  const rIC = window.requestIdleCallback || setTimeout;
  let observer = null;
  const observeLinks = () => {
    if (observer) {
      observer.disconnect();
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link2 = entry.target;
          observer.unobserve(link2);
          const { pathname } = link2;
          if (!hasFetched.has(pathname)) {
            hasFetched.add(pathname);
            const pageChunkPath = pathToFile(pathname);
            if (pageChunkPath)
              doFetch(pageChunkPath);
          }
        }
      });
    });
    rIC(() => {
      document.querySelectorAll("#app a").forEach((link2) => {
        const { hostname, pathname } = new URL(link2.href instanceof SVGAnimatedString ? link2.href.animVal : link2.href, link2.baseURI);
        const extMatch = pathname.match(/\.\w+$/);
        if (extMatch && extMatch[0] !== ".html") {
          return;
        }
        if (
          // only prefetch same tab navigation, since a new tab will load
          // the lean js chunk instead.
          link2.target !== "_blank" && // only prefetch inbound links
          hostname === location.hostname
        ) {
          if (pathname !== location.pathname) {
            observer.observe(link2);
          } else {
            hasFetched.add(pathname);
          }
        }
      });
    });
  };
  onMounted(observeLinks);
  const route = useRoute();
  watch(() => route.path, observeLinks);
  onUnmounted(() => {
    observer && observer.disconnect();
  });
}
function resolveThemeExtends(theme2) {
  if (theme2.extends) {
    const base = resolveThemeExtends(theme2.extends);
    return {
      ...base,
      ...theme2,
      async enhanceApp(ctx) {
        if (base.enhanceApp)
          await base.enhanceApp(ctx);
        if (theme2.enhanceApp)
          await theme2.enhanceApp(ctx);
      }
    };
  }
  return theme2;
}
const Theme = resolveThemeExtends(RawTheme);
const VitePressApp = defineComponent({
  name: "VitePressApp",
  setup() {
    const { site, lang, dir } = useData();
    onMounted(() => {
      watchEffect(() => {
        document.documentElement.lang = lang.value;
        document.documentElement.dir = dir.value;
      });
    });
    if (site.value.router.prefetchLinks) {
      usePrefetch();
    }
    useCopyCode();
    useCodeGroups();
    if (Theme.setup)
      Theme.setup();
    return () => h(Theme.Layout);
  }
});
async function createApp() {
  globalThis.__VITEPRESS__ = true;
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  app.provide(dataSymbol, data);
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: {
      get() {
        return data.frontmatter.value;
      }
    },
    $params: {
      get() {
        return data.page.value.params;
      }
    }
  });
  if (Theme.enhanceApp) {
    await Theme.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return { app, router, data };
}
function newApp() {
  return createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser;
  let initialPath;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    let pageModule = null;
    if (pageFilePath) {
      if (isInitialPageLoad) {
        initialPath = pageFilePath;
      }
      if (isInitialPageLoad || initialPath === pageFilePath) {
        pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
      }
      if (false)
        ;
      else if (true) {
        pageModule = import(
          /*@vite-ignore*/
          `${pageFilePath}?t=${Date.now()}`
        );
      } else
        ;
    }
    if (inBrowser) {
      isInitialPageLoad = false;
    }
    return pageModule;
  }, Theme.NotFound);
}
if (inBrowser) {
  createApp().then(({ app, router, data }) => {
    router.go().then(() => {
      useUpdateHead(router.route, data.site);
      app.mount("#app");
    });
  });
}
async function render(path) {
  const { app, router } = await createApp();
  await router.go(path);
  const ctx = { content: "" };
  ctx.content = await renderToString(app, ctx);
  return ctx;
}
export {
  render
};
