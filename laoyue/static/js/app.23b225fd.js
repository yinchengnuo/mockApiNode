(function(t){function e(e){for(var i,a,c=e[0],r=e[1],l=e[2],u=0,d=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},s={app:0},o=[];function c(t){return r.p+"static/js/"+({}[t]||t)+"."+{"chunk-1a952fe6":"88a1bab2","chunk-1f0bd736":"76f933b2","chunk-9d45d0aa":"dda07e0e","chunk-f9dd18f0":"bde830a8"}[t]+".js"}function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n={"chunk-1a952fe6":1,"chunk-1f0bd736":1,"chunk-9d45d0aa":1,"chunk-f9dd18f0":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var i="static/css/"+({}[t]||t)+"."+{"chunk-1a952fe6":"6c52bced","chunk-1f0bd736":"d2846978","chunk-9d45d0aa":"e4de3d4e","chunk-f9dd18f0":"e7b4ad8a"}[t]+".css",s=r.p+i,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var l=o[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===s))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===i||u===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var i=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete a[t],f.parentNode.removeChild(f),n(o)},f.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var i=s[t];if(0!==i)if(i)e.push(i[2]);else{var o=new Promise((function(e,n){i=s[t]=[e,n]}));e.push(i[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=c(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=s[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",d.name="ChunkLoadError",d.type=i,d.request=a,n[1](d)}s[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/laoyue/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01ee":function(t,e,n){t.exports=n.p+"static/img/bg-content.151f6b92.png"},"03af":function(t,e,n){t.exports=n.p+"static/img/section3-banner1.49023700.jpg"},"06af":function(t,e,n){"use strict";(function(t){n("4160"),n("a630"),n("caad"),n("fb6a"),n("a9e3"),n("2532"),n("3ca3"),n("159b");var e=n("f2c0"),i=n("960f"),a=n("f043");t.directive("waves",e["a"]),t.directive("sticky",i["a"]),t.directive("el-drag-dialog",a["a"]),t.directive("button-auth-control",{bind:function(e,n,i){var a=n.arg,s=i.context.$route;s.meta.buttons&&s.meta.buttons.includes(a)||t.nextTick((function(){return e.remove()}))}}),t.directive("img",{inserted:function(t,e){var n=e.value,i=e.arg,a=e.modifiers,s=a.formData,o=a.base64,c=isNaN(Number(i))?1:Number(i),r=String(Date.now()+Math.floor(Math.random()*Math.pow(10,16))),l=document.createElement("input");t["excel-id"]=r,t["excel-event"]=function(){return document.getElementById(r).click()},l.id=r,l.type="file",l.style.display="none",l.multiple=c?"multiple":"",l.accept=".jpg, .jpeg, .gif, .png",t.addEventListener("click",t["excel-event"]),l.onchange=function(t){var e=t.target.files;if(e=Array.from(e).slice(0,c),e.length){if(s){for(var i=new FormData,a=0;a<e.length;a++){var r=e[a];i.append("img",r)}n(i)}else if(o){var u=0,d=[];e.forEach((function(t){var i=new FileReader;i.onloadend=function(t){d.push(t.target.result),u++,u===e.length&&n(d)},i.readAsDataURL(t)}))}else n(e);l.value=""}},document.body.appendChild(l)},unbind:function(t){t=document.getElementById(t["excel-id"]),t.removeEventListener("click",t["excel-event"]),t.remove()}})}).call(this,n("2b0e")["default"])},"0c99":function(t,e,n){t.exports=n.p+"static/img/new3.5af24783.jpg"},"13aa":function(t,e,n){"use strict";(function(t){n("e47f"),n("9069"),n("06af");var i=n("2c01");t.mixin({created:function(){i["a"].$route=this.$route},activated:function(){i["a"].$route=this.$route}}),e["a"]={install:function(){}}}).call(this,n("2b0e")["default"])},"1bc0":function(t,e,n){"use strict";var i=n("3405"),a=n.n(i);a.a},2239:function(t,e,n){t.exports=n.p+"static/img/new4.ab1aa966.jpg"},"2c01":function(t,e,n){"use strict";(function(t){n("7db0"),n("a630"),n("d81d"),n("c19f"),n("b0c0"),n("a9e3"),n("b680"),n("d3b7"),n("5d41"),n("ac1f"),n("3ca3"),n("1276"),n("498a"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("ddb0"),n("96cf");var i=n("1da1"),a=n("4360"),s=n("a18c"),o=["$alert","$confirm","$loading","$message","$msgbox","$notify","$prompt"],c={$router:s["a"]};t.nextTick((function(){c.$store=a["a"]})),e["a"]=new Proxy({window:window,console:console,document:document,$event:new t,$clone:function(t){return JSON.parse(JSON.stringify(t))},$request:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=i.noLoading,s=i.endStillLoading,o=i.sucMsg;return!a&&(this._loading=this.$loading()),new Promise((function(i,a){t.length?Promise.all(t).then((function(t){i(t.map((function(t){var e=t.data,n=void 0===e?{}:e;return n}))),n(t.map((function(t){var e=t.data,n=void 0===e?{}:e;return n}))),o&&e.$message.success(o)})).catch((function(t){a(t),e._loading.close()})).finally((function(){s||e._loading&&e._loading.close()})):t.then((function(t){var s=t.code,c=t.message,r=t.data,l=void 0===r?{}:r;200===s?(i(l),n(l),o&&e.$message.success(o)):a(c||"code 不为 200")})).catch((function(t){a(t),e._loading.close()})).finally((function(){s||e._loading&&e._loading.close()}))}))},$compression:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;return t[0]?Promise.all(Array.from(t).map((function(t){return e.$compression(t,n)}))):new Promise((function(e){var s=new FileReader;s.onload=function(s){var o=s.target.result,c=Number((t.size/1024).toFixed(2));if(c<=n)e({file:t,origin:t,beforeSrc:o,afterSrc:o,beforeKB:c+"KB",afterKB:c+"KB",detail:[],quality:null});else{var r=new Image;r.onload=Object(i["a"])(regeneratorRuntime.mark((function i(){var s,c,l,u,d,f,p,m,v,h,g;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:for(s=document.createElement("canvas"),s.width=r.width,s.height=r.height,s.getContext("2d").fillStyle="#fff",s.getContext("2d").fillRect(0,0,s.width,s.height),s.getContext("2d").drawImage(r,0,0,r.width,r.height),u=!0,d=0,f=[],p=Date.now(),m=1;m<=a;m++){c=s.toDataURL("image/jpeg",u?d+=1/Math.pow(2,m):d-=1/Math.pow(2,m)),v=atob(c.split(",")[1]),h=v.length,g=new Uint8Array(new ArrayBuffer(h));while(h--)g[h]=v.charCodeAt(h);l=new File([g],t.name,{type:"image/jpeg"}),u=!(l.size/1024>n),f.push({quality:d,size:l.size,kb:Number((l.size/1024).toFixed(2)),time:Date.now()-p}),p=Date.now()}e({detail:f,quality:d,file:l,origin:t,beforeSrc:o,afterSrc:c,beforeKB:Number((t.size/1024).toFixed(2)),afterKB:Number((l.size/1024).toFixed(2))});case 12:case"end":return i.stop()}}),i)}))),r.src=o}},s.readAsDataURL(t)}))},$download:function(t,e){if(t instanceof Array);else{var n=document.createElement("a");n.href=t,n.download=e||t,n.click()}},$copy:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"复制成功";if(t=String(t).trim(),t){var n=document.createElement("input");n.setAttribute("value",t),document.body.appendChild(n),n.select(),document.execCommand("copy"),n.remove(),n=null,e&&this.$message.success(e)}},$scrollTo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;Math.easeInOutQuad=function(t,e,n,i){return t/=i/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),a=function(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t},s=function(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop},o=s(),c=t-o,r=20,l=0;e="undefined"===typeof e?500:e;var u=function t(){l+=r;var s=Math.easeInOutQuad(l,o,c,e);a(s),l<e?i(t):n&&"function"===typeof n&&n()};u()}},{get:function(e,n){return o.find((function(t){return t===n}))?Reflect.get(t.prototype,n):Reflect.get(c,n)?Reflect.get(c,n):Reflect.get(e,n)}})}).call(this,n("2b0e")["default"])},3062:function(t,e,n){"use strict";var i=n("3132"),a=n.n(i);a.a},3132:function(t,e,n){},3405:function(t,e,n){},"36bf":function(t,e,n){t.exports=n.p+"static/img/section3-banner2.1eb30d4a.jpg"},"375c":function(t,e,n){},"3d23":function(t,e,n){"use strict";var i=n("bd0e"),a=n.n(i);a.a},4360:function(t,e,n){"use strict";var i=n("2b0e"),a=n("2f62");i["default"].use(a["a"]),e["a"]=new a["a"].Store({state:{device:""},mutations:{SWITCHDEVICE:function(t,e){t.device=e}},actions:{},modules:{}})},"494e":function(t,e,n){t.exports=n.p+"static/img/section3-class1.d4410e08.png"},"4d6f":function(t,e,n){"use strict";n.r(e),n.d(e,"toThousandFilter",(function(){return i})),n.d(e,"uppercaseFirst",(function(){return a}));n("fb6a"),n("d3b7"),n("ac1f"),n("25f0"),n("5319");function i(t){return(+t||0).toString().replace(/^-?\d+/g,(function(t){return t.replace(/(?=(?!\b)(\d{3})+$)/g,",")}))}function a(t){return t.charAt(0).toUpperCase()+t.slice(1)}},"4dc9":function(t,e,n){t.exports=n.p+"static/img/class5.3ed0f229.jpg"},5087:function(t,e,n){t.exports=n.p+"static/img/class4.543e2f49.jpg"},5125:function(t,e,n){t.exports=n.p+"static/img/class3.c3663401.jpg"},"562e":function(t,e,n){"use strict";var i=n("375c"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],o=(n("5c0b"),n("2877")),c={},r=Object(o["a"])(c,a,s,!1,null,null,null),l=r.exports,u=n("4360"),d=n("a18c"),f=n("13aa"),p=n("7212"),m=n.n(p);n("bbe3");i["default"].use(f["a"]),i["default"].use(m.a),i["default"].config.productionTip=!1;var v=function(){document.body.offsetWidth>960?u["a"].commit("SWITCHDEVICE","pc"):u["a"].commit("SWITCHDEVICE","mo")};v(),window.addEventListener("resize",v),new i["default"]({router:d["a"],store:u["a"],mounted:function(){document.dispatchEvent(new Event("vue-mounted"))},render:function(t){return t(l)}}).$mount("#app")},"57a4":function(t,e,n){t.exports=n.p+"static/img/class2.ceea1e43.jpg"},"5c0b":function(t,e,n){"use strict";var i=n("70c1"),a=n.n(i);a.a},"70b2":function(t,e,n){t.exports=n.p+"static/img/new5.a0ab142b.jpg"},"70c1":function(t,e,n){},"7b73":function(t,e,n){t.exports=n.p+"static/img/section2.f1664085.png"},"7d92":function(t,e,n){},"80a5":function(t,e,n){t.exports=n.p+"static/img/section3-class3.7b5a2fde.png"},9069:function(t,e,n){"use strict";(function(t){var e=n("2c01");Object.setPrototypeOf(t.prototype,e["a"])}).call(this,n("2b0e")["default"])},"960f":function(t,e,n){"use strict";var i;n("99af");e["a"]={inserted:function(t,e){var n=e.value||{},a=n.stickyTop||0,s=n.zIndex||1e3,o=t.style;o.position="-webkit-sticky",o.position="sticky";var c=t.getBoundingClientRect().left,r=t.getBoundingClientRect().width,l=t.getBoundingClientRect().height;o.cssText="top: ".concat(a,"px; left: ").concat(c,"px; z-index: ").concat(s);var u=t.parentNode||document.documentElement,d=document.createElement("div");d.style.display="none",d.style.width="".concat(r,"px"),d.style.height="".concat(l,"px"),u.insertBefore(d,t);var f=!1,p=function(t,e){var n=e?"pageYOffset":"pageXOffset",i=e?"scrollTop":"scrollLeft",a=t[n];return"number"!==typeof a&&(a=window.document.documentElement[i]),a},m=function(){f||(o.height||(o.height="".concat(t.offsetHeight,"px")),o.position="fixed",o.width="".concat(r,"px"),d.style.display="inline-block",f=!0)},v=function(){f&&(o.position="",d.style.display="none",f=!1)},h=function(){var e=p(window,!0),n=t.getBoundingClientRect().top;n<a?m():e<l+a&&v()};i=function(){h()},window.addEventListener("scroll",i)},unbind:function(){window.removeEventListener("scroll",i)}}},a18c:function(t,e,n){"use strict";n("d3b7");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Layout"},[n("Header"),n("keep-alive",[n("router-view")],1),n("Footer",{directives:[{name:"show",rawName:"v-show",value:"/"!==t.$route.path,expression:"$route.path !== '/'"}]})],1)},s=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Header",class:t.$store.state.device},[i("router-link",{attrs:{to:"/"}},[i("img",{staticClass:"logo",attrs:{src:n("d3ae")}})]),i("router-link",{staticClass:"route",attrs:{to:"/"}},[t._v("首页")]),i("router-link",{staticClass:"route",attrs:{to:"/about"}},[t._v("关于我们")]),i("router-link",{staticClass:"route",attrs:{to:"/intro"}},[t._v("课程介绍")]),i("router-link",{staticClass:"route",attrs:{to:"/join"}},[t._v("加盟合作")]),i("router-link",{staticClass:"route",attrs:{to:"/encyc"}},[t._v("感统百科")])],1)},c=[],r={name:"Header",data:function(){return{}}},l=r,u=(n("a70b"),n("2877")),d=Object(u["a"])(l,o,c,!1,null,"197db879",null),f=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Footer",class:t.$store.state.device},t._l(t.nav,(function(e,i){return n("div",{key:i,staticClass:"content-item"},[n("span",{staticClass:"name"},[t._v(t._s(e.name))]),n("span",{staticClass:"line"}),t._l(e.route,(function(e,i){return n("router-link",{key:i,staticClass:"link",attrs:{to:e.link}},[t._v(t._s(e.name))])}))],2)})),0)},m=[],v={name:"Footer",data:function(){return{nav:[{name:"关于我们",route:[{name:"关于动漫火车",link:"/"},{name:"师资力量",link:"/"}]},{name:"伙伴招募",route:[{name:"用人理念",link:"/"},{name:"虚位以待",link:"/"},{name:"发展晋升",link:"/"}]},{name:"加盟合作",route:[{name:"门店查询",link:"/"},{name:"开业准备",link:"/"},{name:"加盟流程",link:"/"}]},{name:"课程介绍",route:[{name:"课程介绍",link:"/"},{name:"免费测评",link:"/"}]}]}}},h=v,g=(n("3d23"),Object(u["a"])(h,p,m,!1,null,"37a9e2fc",null)),b=g.exports,w={name:"Layout",components:{Header:f,Footer:b},data:function(){return{}}},y=w,C=(n("562e"),Object(u["a"])(y,a,s,!1,null,"50f8c2d6",null)),x=C.exports,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Index",class:t.$store.state.device},[i("div",{staticClass:"swiper-container swiper-no-swiping",on:{mousewheel:t.mousewheel}},[i("swiper",{ref:"swiper",staticClass:"swiper",attrs:{options:t.pageSwiper.swiperOptions}},[i("swiper-slide",{staticClass:"section1"},[i("div",{staticClass:"form"},[i("span",{staticClass:"t1"},[t._v("限时免费")]),i("span",{staticClass:"t2"},[t._v("领取"),i("span",{staticClass:"base-color"},[t._v("598")]),t._v("元的感统测评")]),i("div",{staticClass:"input"},[i("span",{staticClass:"code"},[t._v("+86")]),i("input",{attrs:{type:"tel",placeholder:"请输入手机号码",maxlength:"11"}})]),i("div",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"btn pointer"},[t._v("立即领取")]),i("span",{staticClass:"msg"},[t._v("动漫火车会保护您的隐私")])]),i("img",{staticClass:"index-top-content",attrs:{src:n("01ee")}}),i("span",{staticClass:"shadow1"}),i("span",{staticClass:"shadow2"}),i("span",{staticClass:"shadow3"}),i("span",{staticClass:"shadow4"})]),i("swiper-slide",{staticClass:"section2"},[i("div",{staticClass:"section2-content"},[i("div",{staticClass:"left"},[i("span",{staticClass:"title"},[t._v("关于"),i("span",{staticStyle:{color:"#333333"}},[t._v("动漫火车")])]),i("span",{staticClass:"text"},[t._v(" 郑州动漫火车儿童感统训练中心，国内首家全能化感统训练机构，成立于2008年，是老岳讲感统实训基地，全国感统训练师资培训基地、北京学前教育协会会员单位。 中心目前拥有室内实训场地2000余平，户外阳光训练场300平，平均100平超大国际标准感统训练教室7个，国际一流感统训练教具300多种，以全面开发2-8岁幼儿潜能为宗旨， 引进”感统之父“爱尔斯博士感觉统合理论，并自主研发”老岳讲感统“理论体系，使得课程在与国际接轨的同时，更适合中国儿童！11年来，累计有10000多名孩子从这里健康自信地走出！ 动漫火车，以爱为本，成就孩子美好人生！ ")]),i("span",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"more pointer"},[t._v("了解详情")])]),i("img",{staticClass:"right",attrs:{src:n("7b73")}})])]),i("swiper-slide",{staticClass:"section3"},[i("div",{staticClass:"section3-content"},[i("div",{staticClass:"left"},[i("span",{staticClass:"title"},[t._v("我们所擅长的事情")]),i("div",{staticClass:"class-item",on:{mousemove:function(e){t.hover=0}}},[i("img",{attrs:{src:n("494e")}}),i("div",{staticClass:"info"},[i("span",{staticClass:"name"},[t._v("感统课")]),i("span",{staticClass:"intro"},[t._v("通过专业感统教具让孩子在运动游戏中，提升专注力、胆量、语言、人际交往、精细动作、大运动等七大能力")])])]),i("div",{staticClass:"class-item",on:{mousemove:function(e){t.hover=1}}},[i("img",{attrs:{src:n("da31")}}),i("div",{staticClass:"info"},[i("span",{staticClass:"name"},[t._v("语言课")]),i("span",{staticClass:"intro"},[t._v("老岳整合12年教学经验，结合1000多名教学案例，创造了动漫火车独特的身脑感统+口肌训练的语言课程")])])]),i("div",{staticClass:"class-item"},[i("img",{attrs:{src:n("80a5")}}),i("div",{staticClass:"info"},[i("router-link",{staticClass:"more",attrs:{to:"/"}},[t._v("更多课程介绍")])],1)])]),i("div",{staticClass:"right"},[t._l(t.hoverList,(function(e,n){return i("img",{key:n,staticClass:"bgImg",style:{zIndex:t.hovered===n?2:1},attrs:{src:e}})})),i("transition",{attrs:{name:"slide-fade"},on:{"after-leave":function(e){t.hoverBG=t.hoverList[t.hovered]}}},[0===t.hover?i("img",{key:"banner1",staticClass:"aniImg",attrs:{src:t.hoverList[t.hover]}}):t._e(),1===t.hover?i("img",{key:"banner2",staticClass:"aniImg",attrs:{src:t.hoverList[t.hover]}}):t._e()])],2)])]),i("swiper-slide",{staticClass:"section4"},[i("div",{staticClass:"section4-content"},[i("h1",[t._v("您的孩子遇到了哪些问题？")]),i("p",[t._v("我们通过系统专业的测评，为每一个孩子量身打造训练方案，循序渐进，全程动态调整，刺激脑神经及身体发育，激发大脑潜能，使孩子的问题在玩和游戏中得到改善和解决。")]),i("div",{staticClass:"ani"},[i("solar-system")],1),i("span",{staticClass:"con pointer"},[t._v("联系咨询")])])]),i("swiper-slide",{staticClass:"section5"},[i("div",{staticClass:"section5-content"},[i("div",{staticClass:"title"},[i("span",{staticClass:"base-color"},[t._v("线")]),t._v("下课堂")]),i("slider",{staticClass:"swiper",attrs:{options:t.classSwiper.swiperOptions}},t._l(t.classSwiper.data,(function(t,e){return i("slideritem",{key:e},[i("img",{staticClass:"swiper-img",attrs:{src:t}})])})),1),i("div",{staticClass:"btn"},[t._v("探索线下课堂")])],1)]),i("swiper-slide",{staticClass:"section6"},[i("div",{staticClass:"section6-content"},[i("div",{staticClass:"left"},[i("slider",{staticClass:"swiper",attrs:{options:Object.assign({},t.classSwiper.swiperOptions,{pagination:!0})}},t._l(t.newList,(function(t,e){return i("slideritem",{key:e},[i("img",{staticClass:"swiper-img pointer",attrs:{src:t}})])})),1),i("div",{staticClass:"detail pointer"},[i("span",{staticClass:"date"},[t._v(t._s(t.newItem.date))]),i("div",{staticClass:"text"},[i("div",{staticClass:"title"},[t._v(t._s(t.newItem.title))]),i("div",{staticClass:"cont"},[t._v(t._s(t.newItem.cont))])])])],1),i("div",{staticClass:"right"},[i("span",{staticClass:"right-title"},[t._v("感统百科")]),t._l(t.encycList,(function(e,n){return i("div",{key:n,staticClass:"msg-item pointer"},[i("span",{staticClass:"index"},[t._v("0"+t._s(n+1))]),i("div",{staticClass:"cont"},[i("span",{staticClass:"cont-title"},[t._v(t._s(e.title))]),i("span",{staticClass:"more"},[t._v("了解详情")])])])}))],2)]),i("Footer")],1)],1)],1)])},k=[],E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"universe"},[i("div",{staticClass:"solarsystem",on:{click:t.move}},[i("img",{staticClass:"sun",attrs:{src:n("dd27")}}),t._l(t.list,(function(e,n){return i("div",{key:n,staticClass:"orbit-wrapper"},[i("div",{staticClass:"orbit",class:"c"+(n+1)},[i("div",{staticClass:"planet"},[i("div",{staticClass:"ball"},[i("div",{style:{background:e.color}}),i("span",[t._v(t._s(e.name))])])])])])}))],2)])},S=[],$={data:function(){return{list:[{name:"认字阅读困难",color:"#F37856"},{name:"爱爬高，久转不晕",color:"#FFAC00"},{name:"注意力不集中",color:"#6FB7FF"},{name:"自言自语，爱接话茬",color:"#4280C5"},{name:"多动症反应迟钝",color:"#00D0BB"},{name:"发育迟缓，行为笨拙",color:"#FF3082"}]}},methods:{move:function(t){console.log(t.target)}}},j=$,L=(n("3062"),Object(u["a"])(j,E,S,!1,null,"7da5d733",null)),O=L.exports,T=n("b190"),F={name:"Index",components:{SolarSystem:O,slider:T["slider"],slideritem:T["slideritem"],Footer:b},data:function(){return{pageSwiper:{swipering:!1,swiperOptions:{speed:567,parallax:!0,direction:"vertical"}},hover:0,hovered:1,hoverBG:n("36bf"),hoverList:[n("03af"),n("36bf")],classSwiper:{data:[n("f8a4"),n("57a4"),n("5125"),n("5087"),n("4dc9")],swiperOptions:{loop:!0,speed:300,autoplay:3333,currentPage:0,loopedSlides:2,pagination:!1,slidesToScroll:1,thresholdTime:300,itemAnimation:!0,centeredSlides:!0,thresholdDistance:100}},newList:[n("ef90"),n("dff8"),n("0c99"),n("2239"),n("70b2")],newItem:{date:"12-20",title:"感统人物志第八期:烟台林裕涵…",cont:"中央空调能耗在整个建筑能耗中占有很大的比重，系统节能方法对节能降耗…"},encycList:[{id:1,title:"促进儿童语言发展的6项训练与4条建议"},{id:2,title:"孩子注意力不集中，不妨尝试下这些方法"},{id:3,title:"对剖腹产孩子而言,感统失调别怕,这样做!"}]}},watch:{hover:function(t,e){this.hovered=e}},methods:{mousewheel:function(t){var e=this;this.pageSwiper.swipering||(this.pageSwiper.swipering=!0,t.wheelDelta>0?this.$refs["swiper"].$swiper.slidePrev():this.$refs["swiper"].$swiper.slideNext(),setTimeout((function(){e.pageSwiper.swipering=!1}),this.pageSwiper.swiperOptions.speed))}}},I=F,N=(n("1bc0"),Object(u["a"])(I,_,k,!1,null,"183a7868",null)),B=N.exports,A=n("8c4f");i["default"].use(A["a"]);var R=[{path:"/",component:x,children:[{path:"",name:"Index",component:B,meta:{title:"首页"}}]},{path:"/about",component:x,children:[{path:"",name:"About",meta:{title:"关于我们"},component:function(){return n.e("chunk-9d45d0aa").then(n.bind(null,"613f"))}}]},{path:"/intro",component:x,children:[{path:"",name:"Intro",meta:{title:"课程介绍"},component:function(){return n.e("chunk-1a952fe6").then(n.bind(null,"6000"))}}]},{path:"/join",component:x,children:[{path:"",name:"Join",meta:{title:"加盟合作"},component:function(){return n.e("chunk-1f0bd736").then(n.bind(null,"49da"))}}]},{path:"/encyc",component:x,children:[{path:"",name:"Encyc",meta:{title:"感统百科"},component:function(){return n.e("chunk-f9dd18f0").then(n.bind(null,"b056"))}}]}],D=new A["a"]({routes:R,scrollBehavior:function(){return{y:0}},linkExactActiveClass:"active"});D.beforeEach((function(t,e,n){console.log(t),n()}));e["a"]=D},a70b:function(t,e,n){"use strict";var i=n("7d92"),a=n.n(i);a.a},bd0e:function(t,e,n){},d3ae:function(t,e,n){t.exports=n.p+"static/img/logo.b64d65a5.png"},da31:function(t,e,n){t.exports=n.p+"static/img/section3-class2.7fc1abd0.png"},dd27:function(t,e,n){t.exports=n.p+"static/img/section4-ball.dc0514a1.png"},dff8:function(t,e,n){t.exports=n.p+"static/img/new2.ac307d81.jpg"},e47f:function(t,e,n){"use strict";(function(t){n("4de4"),n("4160"),n("1bf2"),n("159b");var e=n("4d6f");Reflect.ownKeys(e).forEach((function(n){t.filter(n,e[n])}))}).call(this,n("2b0e")["default"])},ebd5:function(t,e,n){},ef90:function(t,e,n){t.exports=n.p+"static/img/new1.ab69874d.jpg"},f043:function(t,e,n){"use strict";n("99af"),n("caad"),n("ac1f"),n("2532"),n("5319");e["a"]={bind:function(t,e,n){var i=t.querySelector(".el-dialog__header"),a=t.querySelector(".el-dialog");i.style.cssText+=";cursor:move;",a.style.cssText+=";top:0px;";var s=function(){return window.document.currentStyle?function(t,e){return t.currentStyle[e]}:function(t,e){return getComputedStyle(t,!1)[e]}}();i.onmousedown=function(t){var e=t.clientX-i.offsetLeft,o=t.clientY-i.offsetTop,c=a.offsetWidth,r=a.offsetHeight,l=document.body.clientWidth,u=document.body.clientHeight,d=a.offsetLeft,f=l-a.offsetLeft-c,p=a.offsetTop,m=u-a.offsetTop-r,v=s(a,"left"),h=s(a,"top");v.includes("%")?(v=+document.body.clientWidth*(+v.replace(/\%/g,"")/100),h=+document.body.clientHeight*(+h.replace(/\%/g,"")/100)):(v=+v.replace(/\px/g,""),h=+h.replace(/\px/g,"")),document.onmousemove=function(t){var i=t.clientX-e,s=t.clientY-o;-i>d?i=-d:i>f&&(i=f),-s>p?s=-p:s>m&&(s=m),a.style.cssText+=";left:".concat(i+v,"px;top:").concat(s+h,"px;"),n.child.$emit("dragDialog")},document.onmouseup=function(t){document.onmousemove=null,document.onmouseup=null}}}}},f2c0:function(t,e,n){"use strict";n("ebd5");var i="@@wavesContext";function a(t,e){function n(n){var i=Object.assign({},e.value),a=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),s=a.ele;if(s){s.style.position="relative",s.style.overflow="hidden";var o=s.getBoundingClientRect(),c=s.querySelector(".waves-ripple");switch(c?c.className="waves-ripple":(c=document.createElement("span"),c.className="waves-ripple",c.style.height=c.style.width=Math.max(o.width,o.height)+"px",s.appendChild(c)),a.type){case"center":c.style.top=o.height/2-c.offsetHeight/2+"px",c.style.left=o.width/2-c.offsetWidth/2+"px";break;default:c.style.top=(n.pageY-o.top-c.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",c.style.left=(n.pageX-o.left-c.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return c.style.backgroundColor=a.color,c.className="waves-ripple z-active",!1}}return t[i]?t[i].removeHandle=n:t[i]={removeHandle:n},n}e["a"]={bind:function(t,e){t.addEventListener("click",a(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[i].removeHandle,!1),t.addEventListener("click",a(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[i].removeHandle,!1),t[i]=null,delete t[i]}}},f8a4:function(t,e,n){t.exports=n.p+"static/img/class1.7866ca61.jpg"}});