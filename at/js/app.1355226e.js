(function(e){function t(t){for(var c,u,a=t[0],o=t[1],l=t[2],f=0,d=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&d.push(r[u][0]),r[u]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(e[c]=o[c]);s&&s(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],c=!0,a=1;a<n.length;a++){var o=n[a];0!==r[o]&&(c=!1)}c&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var c={},r={app:0},i=[];function u(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=c,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)u.d(n,c,function(t){return e[t]}.bind(null,c));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/at/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var s=o;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0aca":function(e,t,n){"use strict";n("8ca1")},"33b9":function(e,t,n){},"65f7":function(e,t,n){"use strict";n("33b9")},"8ca1":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t,n,r,i,u){var a=Object(c["N"])("At");return Object(c["E"])(),Object(c["j"])(a)}n("b0c0");var i=Object(c["gb"])("data-v-d9e1ef12");Object(c["H"])("data-v-d9e1ef12");var u={class:"at"},a={class:"tipList"},o=Object(c["n"])("ul",null,[Object(c["n"])("li",null,"在文字任意任意地方输入@都会弹出选择人员弹窗"),Object(c["n"])("li",null,"选择人员后展示 @名称 ，并显示自定义颜色"),Object(c["n"])("li",null,"修改/删除 @名称 中的任意一个字符，删除 @名称"),Object(c["n"])("li",null,"光标不可游走 @名称 其中"),Object(c["n"])("li",null,"@名称 只能整体被选中"),Object(c["n"])("li",null,"@选择人员实时映射到数据"),Object(c["n"])("li",null," XSS注意同时仅允许用户通过输入、粘贴饿形式修改输入内容（通过console、element面板修改无效） ")],-1),l={class:"unAtList"},s={class:"atArea"},f={class:"atInputWrapper"},d={class:"flex flex_sb"},b=Object(c["n"])("span",null,"@谁",-1),O=Object(c["m"])("选择"),j={class:"atedList"},p={class:"send flex flex_sb flex_c_fs"},v=Object(c["m"])("发送");Object(c["F"])();var m=i((function(e,t,n,r,m,g){var y=Object(c["N"])("el-card"),h=Object(c["N"])("el-tag"),N=Object(c["N"])("el-button"),_=Object(c["N"])("el-popover");return Object(c["E"])(),Object(c["j"])("div",u,[Object(c["n"])("div",a,[Object(c["n"])(y,{header:"实现效果"},{default:i((function(){return[o]})),_:1})]),Object(c["n"])("div",l,[Object(c["n"])(y,{header:"可选人员"},{default:i((function(){return[(Object(c["E"])(!0),Object(c["j"])(c["b"],null,Object(c["L"])(e.unAtList,(function(e){return Object(c["E"])(),Object(c["j"])(h,{key:e.id},{default:i((function(){return[Object(c["m"])(Object(c["R"])(e.name),1)]})),_:2},1024)})),128))]})),_:1})]),Object(c["n"])("div",s,[Object(c["n"])(y,null,{default:i((function(){return[Object(c["n"])("div",f,[Object(c["n"])(_,{visible:e.state.visible,"onUpdate:visible":t[5]||(t[5]=function(t){return e.state.visible=t}),"popper-class":"atPopover",trigger:"manual"},{default:i((function(){return[Object(c["n"])(y,null,{header:i((function(){return[Object(c["n"])("div",d,[b,Object(c["n"])("i",{class:"el-icon-close",onClick:t[1]||(t[1]=function(){return e.close&&e.close.apply(e,arguments)})})])]})),default:i((function(){return[(Object(c["E"])(!0),Object(c["j"])(c["b"],null,Object(c["L"])(e.unAtList,(function(t){return Object(c["E"])(),Object(c["j"])("div",{key:t.id,class:"flex flex_sb bb p8"},[Object(c["n"])("span",null,Object(c["R"])(t.name),1),Object(c["n"])(N,{size:"mini",onClick:function(n){return e.select(t)}},{default:i((function(){return[O]})),_:2},1032,["onClick"])])})),128))]})),_:1})]})),reference:i((function(){return[Object(c["n"])("div",{id:"atInput",ref:"refAtInput",contenteditable:"plaintext-only",onInput:t[2]||(t[2]=function(){return e.input&&e.input.apply(e,arguments)}),onFocus:t[3]||(t[3]=function(t){return e.state.visible=!1}),onClick:t[4]||(t[4]=function(){return e.click&&e.click.apply(e,arguments)})},null,544)]})),_:1},8,["visible"]),e.state.inputing?Object(c["k"])("",!0):(Object(c["E"])(),Object(c["j"])("div",{key:0,class:"placeholder",onClick:t[6]||(t[6]=Object(c["fb"])((function(){return e.refAtInput.focus()}),["stop"]))}," 请输入文字信息 "))])]})),_:1})]),Object(c["n"])("div",j,[Object(c["n"])(y,{header:"已选人员",size:"mini"},{default:i((function(){return[(Object(c["E"])(!0),Object(c["j"])(c["b"],null,Object(c["L"])(e.atedList,(function(e){return Object(c["E"])(),Object(c["j"])(h,{key:e.id},{default:i((function(){return[Object(c["m"])(Object(c["R"])(e.name),1)]})),_:2},1024)})),128))]})),_:1})]),Object(c["n"])("div",p,[Object(c["n"])(y,{header:"发送内容"},{default:i((function(){return[Object(c["m"])(Object(c["R"])(e.state.send||"请点击发送"),1)]})),_:1}),Object(c["n"])(N,{onClick:e.send},{default:i((function(){return[v]})),_:1},8,["onClick"])])])})),g=(n("4de4"),n("caad"),n("2532"),n("99af"),n("0481"),n("a630"),n("3ca3"),n("d81d"),n("159b"),n("a434"),n("498a"),[{id:"1",name:"张三"},{id:"2",name:"李四"},{id:"3",name:"王五"},{id:"4",name:"赵六"}]),y="__at_span",h=Object(c["o"])({name:"At",setup:function(){var e=Object(c["J"])(),t=Object(c["I"])({send:"",inputing:"",focusNode:{},focusOffset:0,inputed:!1,visible:!1,observer:{},atIds:[]}),n=Object(c["h"])((function(){return g.filter((function(e){return t.atIds.includes(e.id)}))})),r=Object(c["h"])((function(){return g.filter((function(e){return!t.atIds.includes(e.id)}))})),i=function(){t.inputed=!0,Object(c["v"])((function(){t.inputed=!1}))},u=function(){var n=window.getSelection(),r=null===n||void 0===n?void 0:n.getRangeAt(0);t.focusNode=null===n||void 0===n?void 0:n.focusNode,t.focusOffset=null===n||void 0===n?void 0:n.focusOffset;var i=r.getBoundingClientRect();t.visible=!0,e.value.blur(),Object(c["v"])((function(){var e=i.x>75?i.x-75:0,t=i.y+(null===i||void 0===i?void 0:i.height)+8,n=document.getElementsByClassName("atPopover")[0];n.style.transform="translate3d(".concat(e,"px, ").concat(t,"px, 0px)")}))},a=function(){t.visible=!1;var n=window.getSelection(),c=null===n||void 0===n?void 0:n.getRangeAt(0);c.selectNode(t.focusNode),c.setEnd(t.focusNode,t.focusOffset),c.collapse(),e.value.focus()},o=function(n){var c=window.getSelection(),r=null===c||void 0===c?void 0:c.getRangeAt(0);r.setStart(t.focusNode,t.focusOffset-1),r.setEnd(t.focusNode,t.focusOffset),r.deleteContents();var u=document.createElement("SPAN");u.className=y,u.dataset.id=n.id,u.contentEditable="false",u.innerText="@".concat(n.name);var a=document.createTextNode(" ");r.insertNode(u),r.collapse(),r.insertNode(a),r.collapse(),e.value.focus(),t.visible=!1,i()},l=function(e){i(),t.inputing=e.target.innerHTML,"@"===e.data&&u()},s=function(e){var t=e.target;if(t.className===y){var n=window.getSelection(),c=null===n||void 0===n?void 0:n.getRangeAt(0);c.selectNode(t)}};Object(c["B"])((function(){localStorage.getItem("send")&&(e.value.innerHTML=t.inputing=localStorage.getItem("send")||""),e.value.focus(),t.observer=new MutationObserver((function(e){if(t.inputed){var n=Array.from(e.map((function(e){return Array.from(e.addedNodes)}))).flat().filter((function(e){return e.tagName})),c=n.filter((function(e){return"SPAN"===e.tagName&&e.className===y})).map((function(e){return e.dataset.id}));c.forEach((function(e){return!t.atIds.includes(e)&&t.atIds.push(e)}));var r=Array.from(e.map((function(e){return Array.from(e.removedNodes)}))).flat().filter((function(e){return e.tagName})),i=r.filter((function(e){return"SPAN"===e.tagName&&e.className===y})).map((function(e){return e.dataset.id}));i.forEach((function(e){return t.atIds.indexOf(e)>-1&&t.atIds.splice(t.atIds.indexOf(e),1)}))}})),t.observer.observe(e.value,{subtree:!0,childList:!0,attributes:!0,characterData:!0,attributeOldValue:!0,characterDataOldValue:!0})})),Object(c["y"])((function(){t.observer.disconnect()}));var f=function(){t.send=e.value.innerHTML.trim(),console.log(e.value.innerHTML),localStorage.setItem("send",t.send)};return{send:f,state:t,close:a,input:l,click:s,select:o,atedList:n,unAtList:r,refAtInput:e}}});n("65f7");h.render=m,h.__scopeId="data-v-d9e1ef12";var N=h,_=Object(c["o"])({name:"App",components:{At:N}});n("0aca");_.render=r;var x=_,A=n("3fd4");n("7dd6");Object(c["i"])(x).use(A["a"]).mount("#app")}});
//# sourceMappingURL=app.1355226e.js.map