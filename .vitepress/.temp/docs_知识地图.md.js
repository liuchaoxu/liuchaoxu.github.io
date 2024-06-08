import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"知识地图","description":"","frontmatter":{"layout":"doc","navbar":true,"sidebar":false,"prev":false,"next":false,"aside":false},"headers":[],"relativePath":"docs/知识地图.md","filePath":"docs/知识地图.md","lastUpdated":1717041105000}');
const _sfc_main = { name: "docs/知识地图.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="知识地图" tabindex="-1">知识地图 <a class="header-anchor" href="#知识地图" aria-label="Permalink to &quot;知识地图&quot;">​</a></h1><p><a href="./README.html">关于文档</a></p><h2 id="mysql" tabindex="-1">MySQL <a class="header-anchor" href="#mysql" aria-label="Permalink to &quot;MySQL&quot;">​</a></h2><ul><li><a href="/docs/MySQL/MySQL索引.html#MySQL索引">MySQL索引</a></li><li><a href="/docs/MySQL/事物_隔离级别.html#事务">事物_隔离级别</a></li></ul><h2 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;Nginx&quot;">​</a></h2><ul><li><a href="/docs/Nginx/Nginx配置文件.html#Nginx配置文件">Nginx配置文件</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("docs/知识地图.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ____ as default
};
