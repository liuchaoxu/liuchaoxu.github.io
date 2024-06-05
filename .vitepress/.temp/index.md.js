import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","head":[["meta",{"name":"msvalidate.01","content":"2E6A808EF7AA0EED7BBF46B648567F05"}]],"hero":{"name":"Quick Home","text":"Created by liuchaoxu","tagline":"欢迎！","image":{"src":"/image/主页.png","alt":"VitePress"},"actions":[{"theme":"brand","text":"关于liuchaoxu","link":"/markdown/About-me"},{"theme":"alt","text":"关于本站","link":"/markdown/About-site"},{"theme":"alt","text":"联系作者","link":"/markdown/Contact-me"},{"theme":"alt","text":"Article","link":"/docs/index"},{"theme":"alt","text":"友链","link":"/docs/friend-link"}]}},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1717574125000}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MyVideo = resolveComponent("MyVideo");
  const _component_MyComment = resolveComponent("MyComment");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_MyVideo, {
    src: "https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/14/74/1543137414/1543137414-1-192.mp4?e=ig8euxZM2rNcNbRVnwdVhwdlhWd3hwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1717581232&gen=playurlv2&os=bcache&oi=2584261250&trid=0000d810855cb8fe4bb4a03ebcd84b1cce4eO&mid=0&platform=html5&og=cos&upsig=7091fb5d6c63bc2521fb9c4c49a4f06d&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&cdnid=7269&bvc=vod&nettype=1&orderid=0,3&buvid=&build=7330300&f=O_0_0&bw=108805&logo=80000000",
    pic: "./image/moren.jpg"
  }, null, _parent));
  _push(ssrRenderComponent(_component_MyComment, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
