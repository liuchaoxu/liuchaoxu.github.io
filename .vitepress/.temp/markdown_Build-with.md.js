import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"建站技术选型","description":"","frontmatter":{"sidebar":false,"prev":{"text":"回到关于本站","link":"./About-site"},"next":false},"headers":[],"relativePath":"markdown/Build-with.md","filePath":"markdown/Build-with.md","lastUpdated":1717581640000}');
const _sfc_main = { name: "markdown/Build-with.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="建站技术选型" tabindex="-1">建站技术选型 <a class="header-anchor" href="#建站技术选型" aria-label="Permalink to &quot;建站技术选型&quot;">​</a></h1><p>DPlayer + VitePress +JavaScript</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/Build-with.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BuildWith = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  BuildWith as default
};
