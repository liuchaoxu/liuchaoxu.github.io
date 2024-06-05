import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"关于文档","description":"","frontmatter":{"prev":{"text":"返回地图","link":"/docs/知识地图"},"next":false},"headers":[],"relativePath":"docs/README.md","filePath":"docs/README.md","lastUpdated":1716911198000}');
const _sfc_main = { name: "docs/README.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="关于文档" tabindex="-1">关于文档 <a class="header-anchor" href="#关于文档" aria-label="Permalink to &quot;关于文档&quot;">​</a></h1><p>我在这里记录一些遇到的问题，和解决的办法，如果我的解决方法有误，欢迎和我交流，我诚恳的希望能够通过交流不断的提升自己。</p><p>当然，如果我的内容对你能够有所帮助，能帮我点个星星就更好啦</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("docs/README.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const README = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  README as default
};
