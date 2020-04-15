(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48050aba"],{"02f4":function(t,e,n){var a=n("4588"),i=n("be13");t.exports=function(t){return function(e,n){var r,s,o=String(i(e)),u=a(n),c=o.length;return u<0||u>=c?t?"":void 0:(r=o.charCodeAt(u),r<55296||r>56319||u+1===c||(s=o.charCodeAt(u+1))<56320||s>57343?t?o.charAt(u):r:t?o.slice(u,u+2):s-56320+(r-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var a=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},"0bfb":function(t,e,n){"use strict";var a=n("cb7c");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"1a23":function(t,e,n){"use strict";n.r(e),n.d(e,"CountUp",function(){return i});var a=function(){return(a=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=function(){function t(t,e,n){var i=this;this.target=t,this.endVal=e,this.options=n,this.version="2.0.4",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.countDown?i.frameVal=i.startVal-(i.startVal-i.endVal)*(e/i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(e/i.duration),i.countDown?i.frameVal=i.frameVal<i.endVal?i.endVal:i.frameVal:i.frameVal=i.frameVal>i.endVal?i.endVal:i.frameVal,i.frameVal=Math.round(i.frameVal*i.decimalMult)/i.decimalMult,i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(t){var e,n,a,r,s,o=t<0?"-":"";if(e=Math.abs(t).toFixed(i.options.decimalPlaces),a=(n=(e+="").split("."))[0],r=n.length>1?i.options.decimal+n[1]:"",i.options.useGrouping){s="";for(var u=0,c=a.length;u<c;++u)0!==u&&u%3==0&&(s=i.options.separator+s),s=a[c-u-1]+s;a=s}return i.options.numerals&&i.options.numerals.length&&(a=a.replace(/[0-9]/g,function(t){return i.options.numerals[+t]}),r=r.replace(/[0-9]/g,function(t){return i.options.numerals[+t]})),o+i.options.prefix+a+r+i.options.suffix},this.easeOutExpo=function(t,e,n,a){return n*(1-Math.pow(2,-10*t/a))*1024/1023+e},this.options=a({},this.defaults,n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.decimalMult=Math.pow(10,this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: "+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},"1ddb":function(t,e,n){(function(e){(function(e,a){t.exports=a(n("1a23"))})(0,function(t){"use strict";var n="object"==typeof e&&e&&e.Object===Object&&e,a="object"==typeof self&&self&&self.Object===Object&&self,i=n||a||Function("return this")(),r=i.Symbol,s=Object.prototype,o=s.hasOwnProperty,u=s.toString,c=r?r.toStringTag:void 0;function l(t){var e=o.call(t,c),n=t[c];try{t[c]=void 0}catch(i){}var a=u.call(t);return e?t[c]=n:delete t[c],a}var p=Object.prototype,h=p.toString;function f(t){return h.call(t)}var d="[object Null]",g="[object Undefined]",m=r?r.toStringTag:void 0;function v(t){return null==t?void 0===t?g:d:m&&m in Object(t)?l(t):f(t)}function V(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var b="[object AsyncFunction]",w="[object Function]",x="[object GeneratorFunction]",y="[object Proxy]";function E(t){if(!V(t))return!1;var e=v(t);return e==w||e==x||e==b||e==y}var C={__countup__:t.CountUp,name:"ICountUp",props:{endVal:{type:Number,required:!0},options:{type:Object,required:!1}},data:function(){return{instance:null}},watch:{endVal:{handler:function(t){var e=this;e.instance&&E(e.instance.update)&&e.instance.update(t)},deep:!1}},methods:{init:function(){var e=this;if(!e.instance){var n=e.$el,a=new t.CountUp(n,e.endVal,e.options);a.error||(a.start(function(){return e.$emit("ready",a,t.CountUp)}),e.instance=a)}},uninit:function(){var t=this;t.instance=null},printValue:function(t){var e=this;if(e.instance&&E(e.instance.printValue))return e.instance.printValue(t)},start:function(t){var e=this;if(e.instance&&E(e.instance.start)&&E(t))return e.instance.start(t)},pauseResume:function(){var t=this;if(t.instance&&E(t.instance.pauseResume))return t.instance.pauseResume()},reset:function(){var t=this;if(t.instance&&E(t.instance.reset))return t.instance.reset()},update:function(t){var e=this;if(e.instance&&E(e.instance.update))return e.instance.update(t)}},mounted:function(){var t=this;t.init()},beforeDestroy:function(){var t=this;t.uninit()},render:function(t){return t("span",{})}};return C})}).call(this,n("c8ba"))},"214f":function(t,e,n){"use strict";n("b0c5");var a=n("2aba"),i=n("32e9"),r=n("79e5"),s=n("be13"),o=n("2b4c"),u=n("520a"),c=o("species"),l=!r(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),p=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var h=o(t),f=!r(function(){var e={};return e[h]=function(){return 7},7!=""[t](e)}),d=f?!r(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[c]=function(){return n}),n[h](""),!e}):void 0;if(!f||!d||"replace"===t&&!l||"split"===t&&!p){var g=/./[h],m=n(s,h,""[t],function(t,e,n,a,i){return e.exec===u?f&&!i?{done:!0,value:g.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}}),v=m[0],V=m[1];a(String.prototype,t,v),i(RegExp.prototype,h,2==e?function(t,e){return V.call(t,this,e)}:function(t){return V.call(t,this)})}}},4917:function(t,e,n){"use strict";var a=n("cb7c"),i=n("9def"),r=n("0390"),s=n("5f1b");n("214f")("match",1,function(t,e,n,o){return[function(n){var a=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,a):new RegExp(n)[e](String(a))},function(t){var e=o(n,t,this);if(e.done)return e.value;var u=a(t),c=String(this);if(!u.global)return s(u,c);var l=u.unicode;u.lastIndex=0;var p,h=[],f=0;while(null!==(p=s(u,c))){var d=String(p[0]);h[f]=d,""===d&&(u.lastIndex=r(c,i(u.lastIndex),l)),f++}return 0===f?null:h}]})},"520a":function(t,e,n){"use strict";var a=n("0bfb"),i=RegExp.prototype.exec,r=String.prototype.replace,s=i,o="lastIndex",u=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[o]||0!==e[o]}(),c=void 0!==/()??/.exec("")[1],l=u||c;l&&(s=function(t){var e,n,s,l,p=this;return c&&(n=new RegExp("^"+p.source+"$(?!\\s)",a.call(p))),u&&(e=p[o]),s=i.call(p,t),u&&s&&(p[o]=p.global?s.index+s[0].length:e),c&&s&&s.length>1&&r.call(s[0],n,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(s[l]=void 0)}),s}),t.exports=s},"5a48":function(t,e,n){},"5f1b":function(t,e,n){"use strict";var a=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var r=n.call(t,e);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==a(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"5f9e":function(t,e,n){t.exports=n.p+"img/aboutbottom.dddf15cd.png"},"6f3f":function(t,e,n){t.exports=n.p+"img/erweima.98b4cc28.jpg"},"6fd6":function(t,e,n){t.exports=n.p+"img/fuliaologo.4bca8ee8.png"},"89ba":function(t,e,n){t.exports=n.p+"img/kefuimg.e90077dc.png"},"90e6":function(t,e,n){t.exports=n.p+"img/phone3.404fe839.png"},ab80:function(t,e,n){t.exports=n.p+"img/phone2.c339a7fb.png"},ad10:function(t,e,n){t.exports=n.p+"img/phone1.1f15f2de.png"},b0c5:function(t,e,n){"use strict";var a=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},bafc:function(t,e,n){t.exports=n.p+"img/phone4.6a6a8baf.png"},c8c9:function(t,e,n){"use strict";var a=n("5a48"),i=n.n(a);i.a},cfbe:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("swiper",{staticClass:"about-swiper",attrs:{options:t.swiperOption}},t._l(t.data,function(e,n){return a("swiper-slide",{key:n},[a("div",{staticClass:"page",style:{background:e.pageBgColor,color:2===n?"#e96967":4===n?"#000":"#fff"}},[0===n?a("div",{staticClass:"index"},[a("transition",{attrs:{name:"logo"}},[t.enter?a("img",{staticClass:"log",attrs:{src:e.logo}}):t._e()]),a("div",{staticClass:"page-name index-name"},[t._v(t._s(e.pageName))]),a("div",{staticClass:"page-des index-des"},[t._v(t._s(e.pageDes.split("0")[0])+" "),a("ICountUp",{staticClass:"num",attrs:{endVal:t.endVal}}),t._v(" "+t._s(e.pageDes.split("0")[1]))],1),a("transition",{attrs:{name:"download"}},[t.enter?a("a",{staticClass:"download index-download",attrs:{href:t.ios?"http://www.ipaychat.com/index_m_new.html":"http://down.ipaychat.com/echat.apk"}},[t._v("免费下载富聊")]):t._e()]),a("img",{staticClass:"page-img index-img",attrs:{src:e.pageImg}})],1):t._e(),0!=n?a("div",{staticClass:"page-name"},[t._v(t._s(e.pageName))]):t._e(),0!=n?a("div",{staticClass:"page-des"},[t._v(t._s(e.pageDes))]):t._e(),0!=n?a("img",{staticClass:"page-img",attrs:{src:e.pageImg}}):t._e(),0!=n?a("a",{staticClass:"download",attrs:{href:t.ios?"http://www.ipaychat.com/index_m_new.html":"http://down.ipaychat.com/echat.apk"}},[t._v("免费下载富聊")]):t._e(),n<4?a("div",{staticClass:"down"},[t._v("↓")]):t._e()])])}),1),a("img",{staticClass:"kefu",attrs:{src:n("89ba")},on:{click:t.showErweima}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showCover,expression:"showCover"}],staticClass:"cover",on:{click:t.hideErweima}},[a("img",{staticClass:"erweima",attrs:{src:n("6f3f"),alt:""},on:{click:function(t){t.stopPropagation()}}})])],1)},i=[],r=(n("4917"),n("1ddb")),s=n.n(r),o={name:"About",components:{ICountUp:s.a},methods:{showErweima:function(){this.showCover=!0},hideErweima:function(){this.showCover=!1}},data:function(){return{endVal:0,swiperOption:{direction:"vertical"},ios:window.navigator.userAgent.match(/iPhone/)?1:0,enter:!1,showCover:!1,data:[{logo:n("6fd6"),pageName:"遇见你， 一起聊",pageDes:"这里有0人等待与你相遇。",pageBgColor:"#f2f2f2",pageImg:n("5f9e")},{pageName:"创意小视频",pageDes:"精彩十五秒，好玩的都在这里",pageBgColor:"#e96967",pageImg:n("ad10")},{pageName:"直播间PK",pageDes:"pk互动，让你刺激与心跳",pageBgColor:"#f2f2f2",pageImg:n("ab80")},{pageName:"一对一视频畅聊",pageDes:"与心动的Ta一对一，聊你所爱，爱你所聊",pageBgColor:"#e96967",pageImg:n("90e6")},{pageName:"开心交友 暖心聊",pageDes:"来富聊遇到心动的Ta,男士首登立送50元！",pageBgColor:"#ffdc61",pageImg:n("bafc")}]}},beforeRouteEnter:function(t,e,n){n(function(t){t.enter=!0,t.endVal=31536703})},deactivated:function(){this.endVal=0,this.enter=!1},meta:function(){return{title:"关于富聊"}}},u=o,c=(n("c8c9"),n("2877")),l=Object(c["a"])(u,a,i,!1,null,"789311fe",null);e["default"]=l.exports}}]);