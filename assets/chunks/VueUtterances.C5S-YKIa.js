import{_ as s,d as r,o as n,c as a}from"./framework.CpNIRa07.js";const o=r({name:"VueUtterances",data(){return{}},props:{repo:{type:String,default:"liuchaoxu/quick-home-comment",required:!0},issueTerm:{type:String,default:"pathname"},theme:{type:String,default:"github-light"},label:{type:String,default:""}},mounted(){let e=document.createElement("script");e.async=!0,e.setAttribute("src","https://utteranc.es/client.js"),e.setAttribute("repo",this.repo),e.setAttribute("issue-term",this.issueTerm),this.label!==""&&e.setAttribute("label",this.label),e.setAttribute("theme",this.theme),e.setAttribute("crossorigin","anonymous"),this.$refs.vueUtterances.appendChild(e)},watch:{theme:function(e,t){console.log(e),console.log(t),this.$refs.vueUtterances.querySelector("iframe").contentWindow.postMessage({type:"set-theme",theme:e},"https://utteranc.es")}}}),i={class:"vue-utterances",ref:"vueUtterances"};function u(e,t,c,l,p,h){return n(),a("div",i,null,512)}const d=s(o,[["render",u]]);export{d as default};
