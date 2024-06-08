import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"折腾笔记","description":"","frontmatter":{"layout":"doc","sidebar":false,"prev":false,"next":false},"headers":[],"relativePath":"markdown/Fiddle-note.md","filePath":"markdown/Fiddle-note.md","lastUpdated":1716908686000}');
const _sfc_main = { name: "markdown/Fiddle-note.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="折腾笔记" tabindex="-1">折腾笔记 <a class="header-anchor" href="#折腾笔记" aria-label="Permalink to &quot;折腾笔记&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/Fiddle-note.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FiddleNote = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  FiddleNote as default
};
