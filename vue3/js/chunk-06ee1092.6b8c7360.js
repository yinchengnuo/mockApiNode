(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06ee1092"],{"159b":function(e,t,r){var n=r("da84"),c=r("fdbc"),a=r("17c2"),o=r("9112");for(var u in c){var f=n[u],s=f&&f.prototype;if(s&&s.forEach!==a)try{o(s,"forEach",a)}catch(i){s.forEach=a}}},"17c2":function(e,t,r){"use strict";var n=r("b727").forEach,c=r("a640"),a=c("forEach");e.exports=a?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},"28d7":function(e,t,r){"use strict";r.r(t);var n=r("7a23");function c(e,t,r,c,a,o){return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[Object(n["createVNode"])("h2",null,"useRef："+Object(n["toDisplayString"])(c.useRef),1),Object(n["createVNode"])("h2",null,"useRefArray："+Object(n["toDisplayString"])(c.useRefArray),1),Object(n["createVNode"])("h2",null,"useRefObject："+Object(n["toDisplayString"])(c.useRefObject),1),Object(n["createVNode"])("h3",null,"refData："+Object(n["toDisplayString"])(a.refData),1),Object(n["createVNode"])("ol",null,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(c.list,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])("li",{key:e.msg},[Object(n["createVNode"])("h3",null,Object(n["toDisplayString"])(e.msg),1)])})),128))])],64)}r("159b"),r("b64b");var a={data:function(){return{refData:Object(n["ref"])(0)}},setup:function(){var e=Object(n["ref"])(0),t=Object(n["ref"])([1,2,3,4]),r=Object(n["ref"])({a:1,b:2,useRef:e});return setInterval((function(){t.value.forEach((function(e,r){t.value[r]=Math.floor(10*Math.random())})),Object.keys(r.value).forEach((function(e){r.value[e]=Math.floor(10*Math.random())}))}),333),{useRef:e,useRefArray:t,useRefObject:r,list:[{msg:"ref 函数使任何响应式变量（原始值和引用值都可以）在任何地方起作用"},{msg:"ref 返回的是一个包装对象，该对象只有一个属性 value，value 值为 ref 参数"},{msg:"在 setup 中操作 ref 返回的响应式变量的值只能通过操作 ref 函数返回的对象的 value 实现"},{msg:"vue 2.x 中所有的响应式变量都是挂在 this 上，vue 对监听 this 即可监听响应式变量变化"},{msg:"vue 3.x 中通过 setup return 出去的响应式变量都是通过变量声明赋值的"},{msg:"因此对于原址类型数据，直接通过赋值改变数据值，vue 无法监听其变动，因此使用 ref 包装"},{msg:"vue 通过监听 ref 返回的对象的 value 变动来实现响应式"},{msg:"当包装对象被暴露给模版渲染上下文，或是被嵌套在另一个响应式对象中的时候，它会被自动展开 (unwrap) 为内部的值"}]}},mounted:function(){}};a.render=c;t["default"]=a},"65f0":function(e,t,r){var n=r("861d"),c=r("e8b5"),a=r("b622"),o=a("species");e.exports=function(e,t){var r;return c(e)&&(r=e.constructor,"function"!=typeof r||r!==Array&&!c(r.prototype)?n(r)&&(r=r[o],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},a640:function(e,t,r){"use strict";var n=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&n((function(){r.call(null,t||function(){throw 1},1)}))}},b64b:function(e,t,r){var n=r("23e7"),c=r("7b0b"),a=r("df75"),o=r("d039"),u=o((function(){a(1)}));n({target:"Object",stat:!0,forced:u},{keys:function(e){return a(c(e))}})},b727:function(e,t,r){var n=r("0366"),c=r("44ad"),a=r("7b0b"),o=r("50c4"),u=r("65f0"),f=[].push,s=function(e){var t=1==e,r=2==e,s=3==e,i=4==e,l=6==e,b=7==e,v=5==e||l;return function(d,h,p,O){for(var j,g,y=a(d),m=c(y),k=n(h,p,3),w=o(m.length),R=0,E=O||u,D=t?E(d,w):r||b?E(d,0):void 0;w>R;R++)if((v||R in m)&&(j=m[R],g=k(j,R,y),e))if(t)D[R]=g;else if(g)switch(e){case 3:return!0;case 5:return j;case 6:return R;case 2:f.call(D,j)}else switch(e){case 4:return!1;case 7:f.call(D,j)}return l?-1:s||i?i:D}};e.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}}}]);
//# sourceMappingURL=chunk-06ee1092.6b8c7360.js.map