import { useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { V as VPTeamMembers } from "./VPTeamMembers.B12fLzWA.js";
import "./plugin-vue_export-helper.1tPrXgE0.js";
import "@vueuse/core";
const __pageData = JSON.parse('{"title":"友情链接","description":"","frontmatter":{"layout":"home"},"headers":[],"relativePath":"docs/friend-link.md","filePath":"docs/friend-link.md","lastUpdated":1716911198000}');
const __default__ = { name: "docs/friend-link.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const members = [
      {
        avatar: "https://www.github.com/yyx990803.png",
        name: "Evan You",
        title: "Creator",
        links: [
          { icon: "github", link: "https://github.com/yyx990803" },
          { icon: "twitter", link: "https://twitter.com/youyuxi" }
        ]
      },
      {
        avatar: "https://www.github.com/yyx990803.png",
        name: "Evan You",
        title: "Creator",
        links: [
          { icon: "github", link: "https://github.com/yyx990803" },
          { icon: "twitter", link: "https://twitter.com/youyuxi" }
        ]
      },
      {
        avatar: "https://www.github.com/yyx990803.png",
        name: "Evan You",
        title: "Creator",
        links: [
          { icon: "github", link: "https://github.com/yyx990803" },
          { icon: "twitter", link: "https://twitter.com/youyuxi" }
        ]
      },
      {
        avatar: "https://www.github.com/yyx990803.png",
        name: "Evan You",
        title: "Creator",
        links: [
          { icon: "github", link: "https://github.com/yyx990803" },
          { icon: "twitter", link: "https://twitter.com/youyuxi" }
        ]
      },
      {
        avatar: "https://www.github.com/yyx990803.png",
        name: "Evan You",
        title: "Creator",
        links: [
          { icon: "github", link: "https://github.com/yyx990803" },
          { icon: "twitter", link: "https://twitter.com/youyuxi" }
        ]
      },
      {
        avatar: "https://www.github.com/yyx990803.png",
        name: "Evan You",
        title: "Creator",
        links: [
          { icon: "github", link: "https://github.com/yyx990803" },
          { icon: "twitter", link: "https://twitter.com/youyuxi" }
        ]
      },
      {
        avatar: "https://www.github.com/yyx990803.png",
        name: "Evan You",
        title: "Creator",
        links: [
          { icon: "github", link: "https://github.com/yyx990803" },
          { icon: "twitter", link: "https://twitter.com/youyuxi" }
        ]
      },
      {
        avatar: "https://www.github.com/yyx990803.png",
        name: "Evan You",
        title: "Creator",
        links: [
          { icon: "github", link: "https://github.com/yyx990803" },
          { icon: "twitter", link: "https://twitter.com/youyuxi" }
        ]
      },
      {
        avatar: "https://www.github.com/yyx990803.png",
        name: "Evan You",
        title: "Creator",
        links: [
          { icon: "github", link: "https://github.com/yyx990803" },
          { icon: "twitter", link: "https://twitter.com/youyuxi" }
        ]
      },
      {
        avatar: "https://www.github.com/yyx990803.png",
        name: "Evan You",
        title: "Creator",
        links: [
          { icon: "github", link: "https://github.com/yyx990803" },
          { icon: "twitter", link: "https://twitter.com/youyuxi" }
        ]
      },
      {
        avatar: "https://www.github.com/yyx990803.png",
        name: "Evan You",
        title: "Creator",
        links: [
          { icon: "github", link: "https://github.com/yyx990803" },
          { icon: "twitter", link: "https://twitter.com/youyuxi" }
        ]
      },
      {
        avatar: "https://www.github.com/yyx990803.png",
        name: "Evan You",
        title: "Creator",
        links: [
          { icon: "github", link: "https://github.com/yyx990803" },
          { icon: "twitter", link: "https://twitter.com/youyuxi" }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="友情链接" tabindex="-1">友情链接 <a class="header-anchor" href="#友情链接" aria-label="Permalink to &quot;友情链接&quot;">​</a></h1><p>欢迎加入</p>`);
      _push(ssrRenderComponent(unref(VPTeamMembers), {
        size: "small",
        members
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("docs/friend-link.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
