(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0691e09d"],{"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),a=r("b622"),c=a("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[c],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"6bba":function(t,e,r){"use strict";r.r(e);var n=r("7a23");function o(t,e,r,o,a,c){var s=Object(n["resolveComponent"])("FragmentChild");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[Object(n["createVNode"])("ol",null,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(o.list,(function(t){return Object(n["openBlock"])(),Object(n["createBlock"])("li",{key:t.msg},[Object(n["createVNode"])("h3",null,Object(n["toDisplayString"])(t.msg),1)])})),128))]),Object(n["createVNode"])(s,{id:"FragmentChild",class:"ragment-child",test:"testValue",testData:123,onCustom:o.customEvent},null,8,["onCustom"])],64)}function a(t,e,r,o,a,c){return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[Object(n["createVNode"])("h2",t.$attrs,"Fragment 子组件",16),Object(n["createVNode"])("h2",t.$attrs,"Fragment 子组件",16)],64)}r("99af");var c={props:["test","testData"],setup:function(){for(var t,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return(t=console).log.apply(t,["FragmentChild props:"].concat(r)),{}},created:function(){console.log("FragmentChild $attrs:",this.$attrs),console.log("FragmentChild $props:",this.$props)}};c.render=a;var s=c,i={components:{FragmentChild:s},setup:function(){return{list:[{msg:"vue3.x 现在正式支持了多根节点的组件 fragment"},{msg:'但是，这要求开发者显式通过 v-bind="$attrs" 定义 attribute 应该分布在哪里'},{msg:"非 prop 的 attribute 是指传向一个组件，但是该组件并没有相应 props 或 emits 定义的 attribute。常见的示例包括 class、style 和 id 属性"},{msg:"当组件返回单个根节点时，非 prop attribute 将自动添加到根节点的 attribute 中"},{msg:"在 vue options 生命周期里，this.$attrs 可以获取所有的 非 prop 的 attribute 和绑定事件"},{msg:"如果你不希望组件的根元素继承 attribute，你可以在组件的选项中设置 inheritAttrs: false。常见情况是需要将 attribute 应用于根节点之外的其他元素，通过 v-bind=“$attrs 实现"},{msg:"与单个根节点组件不同，具有多个根节点的组件不具有自动 attribute 回退行为。如果未显式绑定 $attrs，将发出运行时警告（？？？）"},{msg:"https://v3.cn.vuejs.org/guide/migration/fragments.html#3.x%20%E8%AF%AD%E6%B3%95"},{msg:"https://v3.cn.vuejs.org/guide/component-attrs.html#%E5%A4%9A%E4%B8%AA%E6%A0%B9%E8%8A%82%E7%82%B9%E4%B8%8A%E7%9A%84%20Attribute%20%E7%BB%A7%E6%89%BF"}],customEvent:function(){}}}};i.render=o;e["default"]=i},"99af":function(t,e,r){"use strict";var n=r("23e7"),o=r("d039"),a=r("e8b5"),c=r("861d"),s=r("7b0b"),i=r("50c4"),u=r("8418"),l=r("65f0"),p=r("1dde"),d=r("b622"),b=r("2d00"),g=d("isConcatSpreadable"),m=9007199254740991,f="Maximum allowed index exceeded",h=b>=51||!o((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),v=p("concat"),j=function(t){if(!c(t))return!1;var e=t[g];return void 0!==e?!!e:a(t)},A=!h||!v;n({target:"Array",proto:!0,forced:A},{concat:function(t){var e,r,n,o,a,c=s(this),p=l(c,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(a=-1===e?c:arguments[e],j(a)){if(o=i(a.length),d+o>m)throw TypeError(f);for(r=0;r<o;r++,d++)r in a&&u(p,d,a[r])}else{if(d>=m)throw TypeError(f);u(p,d++,a)}return p.length=d,p}})}}]);
//# sourceMappingURL=chunk-0691e09d.8f98e6b5.js.map