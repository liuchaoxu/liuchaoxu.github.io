import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"工作生活","description":"","frontmatter":{"layout":"doc","navbar":true,"sidebar":false,"prev":false,"next":false},"headers":[],"relativePath":"docs/工作生活.md","filePath":"docs/工作生活.md","lastUpdated":1716908686000}');
const _sfc_main = { name: "docs/工作生活.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="工作生活" tabindex="-1">工作生活 <a class="header-anchor" href="#工作生活" aria-label="Permalink to &quot;工作生活&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("docs/工作生活.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ____ as default
};
