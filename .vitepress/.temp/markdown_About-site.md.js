import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"关于本站","description":"","frontmatter":{"sidebar":false,"prev":{"text":"关于liuchaoxu","link":"./About-me"},"next":{"text":"联系作者","link":"./Contact-me"}},"headers":[],"relativePath":"markdown/About-site.md","filePath":"markdown/About-site.md","lastUpdated":1716908686000}');
const _sfc_main = { name: "markdown/About-site.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="关于本站" tabindex="-1">关于本站 <a class="header-anchor" href="#关于本站" aria-label="Permalink to &quot;关于本站&quot;">​</a></h1><h2 id="写在前面" tabindex="-1">写在前面 <a class="header-anchor" href="#写在前面" aria-label="Permalink to &quot;写在前面&quot;">​</a></h2><p>建立这个网站的初衷，是用来记录个人点点滴滴的成长历程、学习过程中的收获，并希望在分享的过程中能够帮助到和自己有相同经历或诉求的人，不论我们年龄相差多少，不论我们是否在同一时空。在写文章的这些年里，不论是邮件、私信，亦或者群聊中，也确实结识和帮助到了不少读者，想来还是比较欣慰的。</p><p>当然，这里也是我个人的试验田，测试了不少目前已经投入生产的技术方案，解决了许多现实中的具体工程问题。如果你只是对网站本身的技术选型的故事感兴趣，可以查看<a href="./Build-with.html#建站技术选型">技术选型</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/About-site.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AboutSite = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  AboutSite as default
};
