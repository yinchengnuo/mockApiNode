(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aa559"],{1125:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main-article"},[e("aside",{directives:[{name:"show",rawName:"v-show",value:!t.printing,expression:"!printing"}],staticStyle:{"margin-top":"15px"}},[e("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[e("strong",[t._v("文档下载页面（选择目标打印机为 [ 另存为 PDF ] 后点击保存即可）")]),e("el-button",{attrs:{type:"primary"},on:{click:t.download}},[t._v("下载")])],1),t._l(t.h2,(function(n){return e("a",{key:n.id,staticStyle:{display:"block"},on:{click:function(e){return t.window.scrollTo(0,n.offsetTop-n.offsetHeight)}}},[t._v(t._s(n.id))])}))],2),e("div",{ref:"content",staticClass:"node-article-content",domProps:{innerHTML:t._s(t.README)}}),e("back-to-top")],1)},o=[],s=(e("a630"),e("3ca3"),e("82a9")),a=e.n(s),r=e("0625"),c={components:{BackToTop:r["a"]},data:function(){return{README:a.a,h2:[],title:"yinchengnuo-admin-ui 说明文档"}},computed:{printing:function(){return this.$store.state.app.printing}},mounted:function(){var t=this;document.title=this.title;var n=function(){t.$store.dispatch("app/togglePrinting",!1)};window.addEventListener("afterprint",n),this.$once("hook:beforeDestroy",(function(){window.removeEventListener("afterprint",n)})),this.$alert("选择目标打印机为 [ 另存为 PDF ] 后点击保存即可",{showClose:!1,closeOnClickModal:!1,closeOnPressEscape:!1}).then((function(){setTimeout((function(){return t.download()}),520)})),this.h2=Array.from(this.$refs.content.getElementsByTagName("h2"))},methods:{download:function(){this.$store.dispatch("app/togglePrinting",!0),this.$nextTick((function(){return window.print()}))}}},l=c,d=e("2877"),p=Object(d["a"])(l,i,o,!1,null,null,null);n["default"]=p.exports}}]);