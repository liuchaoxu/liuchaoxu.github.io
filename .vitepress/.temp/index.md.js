import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","head":[["meta",{"name":"msvalidate.01","content":"2E6A808EF7AA0EED7BBF46B648567F05"}]],"hero":{"name":"Quick Home","text":"","tagline":"","image":{"src":"/image/主页.png","alt":"VitePress"},"actions":[{"theme":"brand","text":"关于liuchaoxu","link":"/markdown/About-me"},{"theme":"alt","text":"关于本站","link":"/markdown/About-site"},{"theme":"alt","text":"联系作者","link":"/markdown/Contact-me"},{"theme":"alt","text":"Article","link":"/docs/index"},{"theme":"alt","text":"友链","link":"/docs/friend-link"}]}},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1717814129000}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
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
