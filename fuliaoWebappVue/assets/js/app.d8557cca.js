(function(e){function t(t){for(var a,i,c=t[0],r=t[1],l=t[2],u=0,h=[];u<c.length;u++)i=c[u],s[i]&&h.push(s[i][0]),s[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);f&&f(t);while(h.length)h.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},s={app:0},o=[];function c(e){return r.p+"js/"+({}[e]||e)+"."+{"chunk-1d4473ea":"fab4cc91","chunk-460152d9":"01a14f47","chunk-48050aba":"51c94c30","chunk-4f12f868":"5dab00a4","chunk-65092ebb":"52095d3c","chunk-70834dc7":"f3b1953e","chunk-79289a8b":"98daf0d3","chunk-035a4708":"aa389d80","chunk-08736980":"1d449f91","chunk-e4fc501c":"59f7fbf7","chunk-8197eaf2":"b27e2385","chunk-1461738e":"752907da","chunk-70c3ae59":"32b583c0","chunk-f6f9eb90":"83a79dcb"}[e]+".js"}function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(e){var t=[],n={"chunk-1d4473ea":1,"chunk-460152d9":1,"chunk-48050aba":1,"chunk-4f12f868":1,"chunk-65092ebb":1,"chunk-70834dc7":1,"chunk-79289a8b":1,"chunk-035a4708":1,"chunk-08736980":1,"chunk-e4fc501c":1,"chunk-8197eaf2":1,"chunk-1461738e":1,"chunk-70c3ae59":1,"chunk-f6f9eb90":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-1d4473ea":"a3957ba8","chunk-460152d9":"63bf3944","chunk-48050aba":"1609140d","chunk-4f12f868":"4a82187c","chunk-65092ebb":"31948962","chunk-70834dc7":"88f66d6a","chunk-79289a8b":"2dabd74d","chunk-035a4708":"1a0175f5","chunk-08736980":"739c2b28","chunk-e4fc501c":"5de50578","chunk-8197eaf2":"9f69d610","chunk-1461738e":"4f0d63d4","chunk-70c3ae59":"3f75ad21","chunk-f6f9eb90":"923e9500"}[e]+".css",s=r.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var l=o[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===s))return t()}var h=document.getElementsByTagName("style");for(c=0;c<h.length;c++){l=h[c],u=l.getAttribute("data-href");if(u===a||u===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.request=a,delete i[e],f.parentNode.removeChild(f),n(o)},f.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(f)}).then(function(){i[e]=0}));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise(function(t,n){a=s[e]=[t,n]});t.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=c(e),l=function(t){u.onerror=u.onload=null,clearTimeout(h);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+i+")");o.type=a,o.request=i,n[1](o)}s[e]=void 0}};var h=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/",r.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var h=0;h<l.length;h++)t(l[h]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0872":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"swiper-nav"},e._l(e.navlist,function(t,a){return n("li",{key:a,class:[e.activeClass==a?"act":""],on:{click:function(t){return e.change(a)}}},[e._v("\n      "+e._s(t)+"\n    ")])}),0)},i=[],s={name:"SwiperNav",props:["navlist","activeClass"],methods:{change:function(e){this.$emit("change",e)}}},o=s,c=(n("480d"),n("2877")),r=Object(c["a"])(o,a,i,!1,null,null,null);t["a"]=r.exports},"0881":function(e,t,n){},"0e00":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"watch-more",on:{click:e.toAbout}},[e._v("\n  下载富聊APP, 看更多"+e._s("杭州直播"===e.name?"直播":e.name)+">>>\n")])},i=[],s={name:"WatchMore",props:["name"],methods:{toAbout:function(){this.$router.push({name:"About"})}}},o=s,c=(n("4cd6"),n("2877")),r=Object(c["a"])(o,a,i,!1,null,"142c5ba1",null);t["a"]=r.exports},"14e6":function(e,t,n){"use strict";var a=n("9820"),i=n.n(a);i.a},"18a2":function(e,t,n){},"2dba":function(e,t,n){"use strict";var a=n("e635"),i=n.n(a);i.a},"3ada":function(e,t,n){},"3db4":function(e,t,n){},"3f4e":function(e,t,n){},"480d":function(e,t,n){"use strict";var a=n("18a2"),i=n.n(a);i.a},"4cd6":function(e,t,n){"use strict";var a=n("e30d"),i=n.n(a);i.a},5414:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=n("bc3a"),s=n.n(i),o=n("2f62");a["a"].use(o["a"]);var c=new o["a"].Store({state:{liveListInfo:{"推荐":[],"才艺":[],"魅力":[],"杭州":[]},tuijianPage:1,caiyiPage:1,meiliPage:1,hangzhouPage:1,tuijianLock:!0,caiyiLock:!0,meiliLock:!0,hangzhouLock:!0,yinchengnuo:{sex:1,status:0,mlevel:0,userid:26307780,totalWealthLevel:4,userpic:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560527712595&di=38bc091df85e21f6874c164b81cd208c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201509%2F16%2F20150916002434_JauZE.jpeg",vlevel:0,city:"杭州市",isCustom:0,leveltype:1,rank:0,level:0,name:"尹成诺",privilegeLevel:0,guardFlag:!1,age:23,focus:33,fans:12,send:123,featurn:521,lable:["吃饭","睡觉","打豆豆"],sign:"人生， 无非就是拉拉扯扯。"}},mutations:{get:function(e,t){"tuijian"===t?e.tuijianLock&&(e.tuijianLock=!1,e.tuijianPage&&s.a.get("/tuijian?page=".concat(e.tuijianPage)).then(function(t){e.liveListInfo["推荐"]=e.liveListInfo["推荐"].concat(t.data.info),e.tuijianPage++,t.data.info.length<14&&(e.tuijianPage=0),e.tuijianLock=!0})):"caiyi"===t?e.caiyiLock&&(e.caiyiLock=!1,e.caiyiPage&&s.a.get("/caiyi?page=".concat(e.caiyiPage)).then(function(t){e.liveListInfo["才艺"]=e.liveListInfo["才艺"].concat(t.data.info.channelList),e.caiyiPage++,t.data.info.channelList.length<14&&(e.caiyiPage=0),e.caiyiLock=!0})):"meili"===t?e.meiliLock&&(e.meiliLock=!1,e.meiliPage&&s.a.get("/meili?page=".concat(e.meiliPage)).then(function(t){e.liveListInfo["魅力"]=e.liveListInfo["魅力"].concat(t.data.info),e.meiliPage++,t.data.info.length<14&&(e.meiliPage=0),e.meiliLock=!0})):"hangzhou"===t&&e.hangzhouLock&&(e.hangzhouLock=!1,e.hangzhouPage&&s.a.get("/hangzhou?page=".concat(e.hangzhouPage)).then(function(t){e.liveListInfo["杭州"]=e.liveListInfo["杭州"].concat(t.data.info),e.hangzhouPage++,t.data.info.length<14&&(e.hangzhouPage=0),e.hangzhouLock=!0}))}},actions:{getAsync:function(e,t){e.commit("get",t)}}}),r=n("0a89"),l=n.n(r),u=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-index"},[n("div",{ref:"nav",staticClass:"index-nav"},[n("router-link",{staticClass:"nav-item live-list",attrs:{to:"/LiveList",replace:"",tag:"span"}},[e._v("直播")]),n("router-link",{staticClass:"nav-item small-video",attrs:{to:"/SmallVideoList",replace:"",tag:"span"}},[e._v("小视频")]),n("router-link",{staticClass:"nav-item robot-chat",attrs:{to:"/VideoChat",replace:"",tag:"span"}},[e._v("视频聊")]),n("router-link",{staticClass:"nav-item about-me",attrs:{to:"/About",replace:"",tag:"span"}},[e._v("关于富聊")])],1),n("keep-alive",[n("router-view")],1)],1)},f=[],m=(n("7f7f"),{name:"AppIndex",watch:{$route:function(e,t){"LiveList"===e.name?this.$el.getElementsByClassName("live-list")[0].click():"SmallVideoList"===e.name?this.$el.getElementsByClassName("small-video")[0].click():"VideoChat"===e.name?this.$el.getElementsByClassName("robot-chat")[0].click():"About"===e.name&&this.$el.getElementsByClassName("about-me")[0].click()}}}),d=m,p=(n("5a40"),n("2877")),v=Object(p["a"])(d,h,f,!1,null,null,null),g=v.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"live-list"},[n("Header",{attrs:{name:"直播"}}),n("SwiperNav",{staticClass:"live-list-nav",attrs:{navlist:e.navlist,activeClass:e.activeClass},on:{change:e.change}}),n("div",{staticClass:"hangzhou"},[e._v("附近")]),n("LiveListSwiper",{attrs:{activeClass:e.activeClass,name:e.navlist},on:{slide:e.slider}})],1)},k=[],L=n("774e"),w=n.n(L),y=n("a4bb"),_=n.n(y),C=n("c87d"),x=n("0872"),$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("swiper",{ref:"mySwiper",staticClass:"live-swiper",attrs:{options:e.swiperOption},on:{slideChange:e.callback}},[n("div",{staticClass:"swiper-scrollbar",attrs:{slot:"scrollbar"},slot:"scrollbar"}),e._l(e.name,function(e,t){return n("swiper-slide",{key:t},[n("LiveSwiperContent",{attrs:{name:e}})],1)})],2)},P=[],T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"scroller",staticClass:"live-swiper-content",on:{scroll:e.scroll}},[n("div",{ref:"scrollerContent",staticClass:"wrapper"},[e._l(e.liveListInfo,function(t,a){return n("UserItem",{key:a,attrs:{userInfo:t,name:e.name}})}),n("TextLoading",{directives:[{name:"show",rawName:"v-show",value:e.liveListInfo.length&&!e.watchMore,expression:"liveListInfo.length && !watchMore"}]}),n("WatchMore",{directives:[{name:"show",rawName:"v-show",value:e.watchMore,expression:"watchMore"}],attrs:{name:e.name+"直播"}})],2),n("ToTop",{directives:[{name:"show",rawName:"v-show",value:e.scrollTop>10,expression:"scrollTop > 10"}],staticClass:"totop",on:{clicked:e.toTop}})],1)},I=[],A=n("a776"),j=n("8a88"),O=n("0e00"),E=n("ef40"),S={name:"LiveSwiperContent",props:["name"],components:{UserItem:A["a"],ToTop:E["a"],WatchMore:O["a"],TextLoading:j["a"]},data:function(){return{height:0,scrollTop:0,animationSize:234}},methods:{scroll:function(e){this.scrollTop=this.$refs.scroller.scrollTop;var t=Math.floor(this.scrollTop/1500);this.animationSize=t?234*(t+1):234,this.$refs.scrollerContent.offsetHeight-this.height-this.$refs.scroller.scrollTop<20&&("推荐"===this.name?this.$store.dispatch("getAsync","tuijian"):"魅力"===this.name?this.$store.dispatch("getAsync","meili"):"才艺"===this.name?this.$store.dispatch("getAsync","caiyi"):"杭州"===this.name&&this.$store.dispatch("getAsync","hangzhou"))},toTop:function(){var e=this,t=0,n=function n(){e.$refs.scroller.scrollTop=e.scrollTop-=e.animationSize,e.scrollTop>e.animationSize?t=window.requestAnimationFrame(n):(e.$refs.scroller.scrollTop=e.scrollTop=0,window.cancelAnimationFrame(t))};t=window.requestAnimationFrame(n)}},computed:{liveListInfo:function(){return this.$store.state.liveListInfo[this.name]},watchMore:function(){var e="";return"推荐"===this.name?e="tuijianPage":"才艺"===this.name?e="caiyiPage":"魅力"===this.name?e="meiliPage":"杭州"===this.name&&(e="hangzhouPage"),!this.$store.state["".concat(e)]}},mounted:function(){this.height=this.$refs.scroller.offsetHeight}},N=S,z=(n("9ac5"),Object(p["a"])(N,T,I,!1,null,"6cac8886",null)),V=z.exports,M={name:"LiveSwiper",components:{LiveSwiperContent:V},props:["activeClass","name"],data:function(){return{swiperOption:{scrollbar:{el:".swiper-scrollbar"}}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},methods:{callback:function(){this.$emit("slide",this.swiper.activeIndex)}},watch:{activeClass:function(e,t){this.swiper.slideTo(e)}}},F=M,B=(n("639b"),Object(p["a"])(F,$,P,!1,null,"8f2d86ae",null)),q=B.exports,H={name:"LiveList",components:{Header:C["a"],SwiperNav:x["a"],LiveListSwiper:q},data:function(){return{activeClass:0,scrollers:[]}},beforeCreate:function(){this.$store.dispatch("getAsync","tuijian"),this.$store.dispatch("getAsync","caiyi"),this.$store.dispatch("getAsync","meili"),this.$store.dispatch("getAsync","hangzhou")},computed:{navlist:function(){return _()(this.$store.state.liveListInfo)}},methods:{slider:function(e){this.activeClass=e},change:function(e){this.activeClass=e}},beforeRouteLeave:function(e,t,n){var a=this,i=w()(this.$el.getElementsByClassName("live-swiper-content"));i.forEach(function(e){a.scrollers.push(e.scrollTop)}),n()},activated:function(){for(var e=w()(this.$el.getElementsByClassName("live-swiper-content")),t=0;t<this.scrollers.length;t++)e[t].scrollTop=+this.scrollers[t];this.scrollers=[]},meta:function(){return{title:"富聊直播-看直播-玩直播-尽在富聊APP"}}},W=H,U=(n("14e6"),Object(p["a"])(W,b,k,!1,null,"3ea6d9aa",null)),J=U.exports;a["a"].use(u["a"]);var R=new u["a"]({routes:[{path:"/",name:"AppIndex",component:g,meta:{index:0,keepAlive:!0},children:[{path:"livelist",name:"LiveList",component:J,meta:{index:.1}},{path:"smallvideolist",name:"SmallVideoList",component:function(){return n.e("chunk-70834dc7").then(n.bind(null,"1c9f"))},meta:{index:.2}},{path:"videochat",name:"VideoChat",component:function(){return n.e("chunk-4f12f868").then(n.bind(null,"8b79"))},meta:{index:.3}},{path:"about",name:"About",component:function(){return n.e("chunk-48050aba").then(n.bind(null,"cfbe"))},meta:{index:99}}],redirect:"LiveList"},{path:"/liveone",name:"LiveOne",component:function(){return Promise.all([n.e("chunk-79289a8b"),n.e("chunk-e4fc501c")]).then(n.bind(null,"53e1"))},meta:{index:1.1}},{path:"/livetwo",name:"LiveTwo",component:function(){return Promise.all([n.e("chunk-79289a8b"),n.e("chunk-08736980")]).then(n.bind(null,"a74c"))},meta:{index:1.2}},{path:"/livethr",name:"LiveThr",component:function(){return Promise.all([n.e("chunk-79289a8b"),n.e("chunk-035a4708")]).then(n.bind(null,"d37b"))},meta:{index:1.3}},{path:"/videoone",name:"VideoOne",component:function(){return Promise.all([n.e("chunk-8197eaf2"),n.e("chunk-f6f9eb90")]).then(n.bind(null,"9ec3"))},meta:{index:2.1}},{path:"/videotwo",name:"VideoTwo",component:function(){return Promise.all([n.e("chunk-8197eaf2"),n.e("chunk-70c3ae59")]).then(n.bind(null,"3ffc"))},meta:{index:2.2}},{path:"/videothr",name:"VideoThr",component:function(){return Promise.all([n.e("chunk-8197eaf2"),n.e("chunk-1461738e")]).then(n.bind(null,"391a"))},meta:{index:2.3}},{path:"/videochatlive",name:"VideoChatLive",component:function(){return n.e("chunk-460152d9").then(n.bind(null,"8303"))},meta:{index:3}},{path:"/uesrindex",name:"UserIndex",component:function(){return n.e("chunk-65092ebb").then(n.bind(null,"9df5"))},meta:{index:4}},{path:"/videointroduction",name:"VideoIntroduction",component:function(){return n.e("chunk-1d4473ea").then(n.bind(null,"a81e"))},meta:{index:5}}]}),Z=n("fe3c"),D=n.n(Z),G=n("7212"),K=n.n(G),Q=(n("dfa4"),n("3db4"),n("5414"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:e.transitionName}},[n("keep-alive",{attrs:{include:"AppIndex"}},[n("router-view")],1)],1)],1)}),X=[],Y={name:"App",data:function(){return{transitionName:""}},watch:{$route:function(e,t){"LiveThr"===t.name&&"LiveOne"===e.name?this.transitionName="slide-left":"LiveThr"===e.name&&"LiveOne"===t.name?this.transitionName="slide-right":"VideoThr"===t.name&&"VideoOne"===e.name?this.transitionName="slide-left":"VideoThr"===e.name&&"VideoOne"===t.name?this.transitionName="slide-right":null===t.name?(this.transitionName="","VideoChatLive"!==e.name&&"VideoIntroduction"!==e.name||this.$router.go(-1)):this.transitionName=e.meta.index>t.meta.index?"slide-left":"slide-right"}}},ee=Y,te=(n("abff"),Object(p["a"])(ee,Q,X,!1,null,null,null)),ne=te.exports,ae=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ie=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"error"},[e._v("\n    对不起！当前设备不支持访问本页面！请使用"),n("strong",[e._v("移动")]),e._v("设备（即设备屏幕宽度小于等于768CSS像素）上的浏览器访问本页。如有给您带来不便，敬请谅解！\n")])}],se=(n("de89"),{}),oe=Object(p["a"])(se,ae,ie,!1,null,null,null),ce=oe.exports;a["a"].use(l.a,{keyName:"meta"}),a["a"].prototype.$http=s.a,a["a"].use(K.a),D.a.attach(document.body),a["a"].config.productionTip=!1,document.body.offsetWidth>768?new a["a"]({render:function(e){return e(ce)}}).$mount("#app"):new a["a"]({router:R,store:c,render:function(e){return e(ne)}}).$mount("#app")},"5a40":function(e,t,n){"use strict";var a=n("eea3"),i=n.n(a);i.a},"639b":function(e,t,n){"use strict";var a=n("eb1a"),i=n.n(a);i.a},8093:function(e,t,n){},"8a88":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"text-loading",on:{click:e.toAbout}},[e._v("\n  加载中...\n")])},i=[],s={name:"text-loading",props:["name"],methods:{toAbout:function(){this.$router.push({name:"About"})}}},o=s,c=(n("a750"),n("2877")),r=Object(c["a"])(o,a,i,!1,null,"4cfb597d",null);t["a"]=r.exports},9820:function(e,t,n){},"9ac5":function(e,t,n){"use strict";var a=n("3ada"),i=n.n(a);i.a},"9c61":function(e,t,n){},"9d64":function(e,t,n){e.exports=n.p+"img/logo.ed4d1631.png"},a750:function(e,t,n){"use strict";var a=n("9c61"),i=n.n(a);i.a},a776:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user-item",style:{background:"url("+e.userInfo.bgpic+") no-repeat center",backgroundSize:"47vw"},on:{click:e.toLive}},[n("span",{staticClass:"info"},[n("span",{staticClass:"name"},[e._v(e._s(e.userInfo.name))]),n("span",{staticClass:"level"},[e._v(e._s(e.userInfo.vlevel>e.userInfo.mlevel?"v"+e.userInfo.vlevel:"m"+e.userInfo.mlevel))]),n("span",{staticClass:"city"},[e._v(e._s("杭州"==e.name?e.userInfo.city:""))]),n("span",{staticClass:"city"},[e._v(e._s("才艺"==e.name?e.userInfo.labelName:""))])])])},i=[],s=(n("7f7f"),{name:"UserItem",props:["userInfo","name"],methods:{toLive:function(){var e="";"LiveOne"===this.$route.name?e="LiveTwo":"LiveTwo"===this.$route.name?e="LiveThr":"LiveThr"===this.$route.name?e="LiveOne":"LiveList"===this.$route.name&&(e="LiveOne"),this.$router.push({name:e,params:{userInfo:this.userInfo}})}}}),o=s,c=(n("2dba"),n("2877")),r=Object(c["a"])(o,a,i,!1,null,"d5a71bc2",null);t["a"]=r.exports},abff:function(e,t,n){"use strict";var a=n("8093"),i=n.n(a);i.a},b73a:function(e,t,n){e.exports=n.p+"img/logotext.518f8c9e.png"},c87d:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[e._m(0),n("div",{staticClass:"center",on:{click:e.toIndex}},[e._v(e._s(e.name))]),n("a",{staticClass:"right",on:{click:e.toAbout}},[e._v("下载APP")]),"富聊小视频"===e.name?n("div",{staticClass:"left-right"},[e._v("上下滑动切换小视频，左划查看用户信息，右划查看小视频信息。现在下载富聊APP，不仅能观看更多小视频和美女直播，更会获得价值5万能量的新人大礼包。赶快点击下载和美女互动吧！！！")]):e._e()])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"left"},[a("img",{attrs:{src:n("9d64")}}),a("img",{attrs:{src:n("b73a")}})])}],s={name:"Header",props:["name","to"],methods:{toIndex:function(){this.to&&this.$router.push({name:this.to})},toAbout:function(){this.$router.push({name:"About"})}}},o=s,c=(n("d562"),n("2877")),r=Object(c["a"])(o,a,i,!1,null,"514d28a6",null);t["a"]=r.exports},d562:function(e,t,n){"use strict";var a=n("3f4e"),i=n.n(a);i.a},de89:function(e,t,n){"use strict";var a=n("0881"),i=n.n(a);i.a},e30d:function(e,t,n){},e635:function(e,t,n){},eb1a:function(e,t,n){},eea3:function(e,t,n){},ef40:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"iconfont",on:{click:e.click}},[e._v("")])},i=[],s={name:"Loading",methods:{click:function(){this.$emit("clicked")}}},o=s,c=n("2877"),r=Object(c["a"])(o,a,i,!1,null,null,null);t["a"]=r.exports}});