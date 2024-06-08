import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"文章存档","description":"","frontmatter":{"layout":"doc","navbar":true,"sidebar":false,"prev":false,"next":false},"headers":[],"relativePath":"docs/文章存档.md","filePath":"docs/文章存档.md","lastUpdated":1716908686000}');
const _sfc_main = { name: "docs/文章存档.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="文章存档" tabindex="-1">文章存档 <a class="header-anchor" href="#文章存档" aria-label="Permalink to &quot;文章存档&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("docs/文章存档.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ____ as default
};
