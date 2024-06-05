import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = defineComponent({
  name: "VueUtterances",
  // vue component name
  data() {
    return {};
  },
  props: {
    repo: {
      type: String,
      default: "liuchaoxu/quick-home-comment",
      required: true
    },
    issueTerm: {
      type: String,
      default: "pathname"
    },
    theme: {
      type: String,
      default: "github-light"
    },
    label: {
      type: String,
      default: ""
    }
  },
  mounted() {
    let utterances = document.createElement("script");
    utterances.async = true;
    utterances.setAttribute("src", "https://utteranc.es/client.js");
    utterances.setAttribute("repo", this.repo);
    utterances.setAttribute("issue-term", this.issueTerm);
    if (this.label !== "") {
      utterances.setAttribute("label", this.label);
    }
    utterances.setAttribute("theme", this.theme);
    utterances.setAttribute("crossorigin", "anonymous");
    this.$refs.vueUtterances.appendChild(utterances);
  },
  watch: {
    theme: function(newTheme, oldTheme) {
      console.log(newTheme);
      console.log(oldTheme);
      this.$refs.vueUtterances.querySelector("iframe").contentWindow.postMessage(
        {
          type: "set-theme",
          theme: newTheme
          // theme you want
        },
        "https://utteranc.es"
      );
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "vue-utterances",
    ref: "vueUtterances"
  }, _attrs))}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/component/MyComment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MyComment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  MyComment as default
};
