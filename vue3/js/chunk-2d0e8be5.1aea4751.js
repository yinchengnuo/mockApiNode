(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e8be5"],{"8b27":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),c={ref:"useRefEle"};function u(e,t,r,u,o,f){return Object(n["openBlock"])(),Object(n["createBlock"])("ol",null,[Object(n["createVNode"])("h3",c,"useRefEle",512),(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(u.list,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])("li",{key:e.msg,innerHTML:e.msg},null,8,["innerHTML"])})),128))])}var o={setup:function(){var e=Object(n["ref"])(null);return Object(n["onMounted"])((function(){console.log(e.value)})),{useRefEle:e,list:[{msg:"vue2.x 在摸板提供了 ref 属性用于获取 dom 或子组件实例，vue3.x 提供了 ref 函数用于定义响应式变量，在 setup 中 return 和模板中 ref 值同名的 ref，vue3.x 会对它们进行绑定"},{msg:"摸板中的 ref 绑定都是原生 html 标签或者自定义组件，因此在 setup 中通过 ref 操作模板中的 ref 需要在 onMounted 中执行"},{msg:"setup 中的 ref 即使绑定了模板中的 ref，操作也需要通过 value"},{msg:"模板中的 ref 值通常是字符串，就是 ref 名称。但是 ref 也可以h是一个函数，函数的参数是当前 ref"},{msg:"绑定后 ref 也可以 watch。需要注意的是 watch/watchEffect 是在 DOM/组件 被挂载或更新之前运行的"},{msg:'因此当侦听器运行副作用时，模板引用还没有被更新，因此，使用模板引用的侦听器应该用 flush: "post" 选项来定义'}]}}};o.render=u;t["default"]=o}}]);
//# sourceMappingURL=chunk-2d0e8be5.1aea4751.js.map