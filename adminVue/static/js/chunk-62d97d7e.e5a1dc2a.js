(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62d97d7e"],{"3c3b":function(t,e,i){"use strict";var n=i("6d12"),s=i.n(n);s.a},"6d12":function(t,e,i){},9437:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar"}},[i("span",{staticStyle:{float:"left","line-hright":"84px","margin-left":"24px",color:"white"}},[t._v("会吸附在距离顶部 0px 处")]),i("el-dropdown",{attrs:{trigger:"click"}},[i("el-button",{attrs:{plain:""}},[t._v(" 平台"),i("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),i("el-dropdown-menu",{staticClass:"no-border",attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-checkbox-group",{staticStyle:{padding:"5px 15px"},model:{value:t.platforms,callback:function(e){t.platforms=e},expression:"platforms"}},t._l(t.platformsOptions,(function(e){return i("el-checkbox",{key:e.key,attrs:{label:e.key}},[t._v(" "+t._s(e.name)+" ")])})),1)],1)],1),i("el-dropdown",{attrs:{trigger:"click"}},[i("el-button",{attrs:{plain:""}},[t._v(" 链接"),i("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),i("el-dropdown-menu",{staticClass:"no-padding no-border",staticStyle:{width:"300px"},attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-input",{attrs:{placeholder:"请输入Url"},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}},[i("template",{slot:"prepend"},[t._v(" Url ")])],2)],1)],1),i("div",{staticClass:"time-container"},[i("el-date-picker",{attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm:ss",placeholder:"发表时间"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1),i("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"success"}},[t._v("发布")])],1),i("div",{staticClass:"components-container"},[i("aside",[t._v("吸顶, 当页面滚动到预设的位置会吸附在顶部")]),t._l(8,(function(e){return i("div",{key:e},[t._v("占位文字")])})),i("sticky",{attrs:{"sticky-top":240}},[i("el-button",{attrs:{type:"primary"}},[t._v("插槽组件实现吸顶，会吸附在距离顶部 240px 处（使用 position: sticky 实现）")])],1),t._l(8,(function(e){return i("div",{key:e+99},[t._v("占位文字")])})),i("el-button",{directives:[{name:"sticky",rawName:"v-sticky",value:{stickyTop:320},expression:"{ stickyTop: 320 }"}],attrs:{type:"primary"}},[t._v("自定义指令实现吸顶，会吸附在距离顶部 320px 处（使用 onscroll + position: fixed 实现）")]),t._l(96,(function(e){return i("div",{key:e+999},[t._v("占位文字")])}))],2)],1)},s=[],o=i("b804"),a={name:"StickyDemo",components:{Sticky:o["a"]},data:function(){return{time:"",url:"",platforms:["a-platform"],platformsOptions:[{key:"a-platform",name:"平台A"},{key:"b-platform",name:"平台B"},{key:"c-platform",name:"平台C"}],pickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()}}}}},l=a,r=(i("3c3b"),i("2877")),c=Object(r["a"])(l,n,s,!1,null,"55deb696",null);e["default"]=c.exports},b804:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:{height:t.height+"px",zIndex:t.zIndex}},[i("div",{class:t.className,style:{top:t.isSticky?t.stickyTop+"px":"",zIndex:t.zIndex,position:t.position,width:t.width,height:t.height+"px"}},[t._t("default",[i("div",[t._v("sticky")])])],2)])},s=[],o=(i("a9e3"),{name:"Sticky",props:{stickyTop:{type:Number,default:0},zIndex:{type:Number,default:1},className:{type:String,default:""}},data:function(){return{active:!1,position:"",width:void 0,height:void 0,isSticky:!1}},mounted:function(){this.height=this.$el.getBoundingClientRect().height,window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize)},activated:function(){this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize)},methods:{sticky:function(){this.active||(this.position="fixed",this.active=!0,this.width=this.width+"px",this.isSticky=!0)},handleReset:function(){this.active&&this.reset()},reset:function(){this.position="",this.width="auto",this.active=!1,this.isSticky=!1},handleScroll:function(){var t=this.$el.getBoundingClientRect().width;this.width=t||"auto";var e=this.$el.getBoundingClientRect().top;e<this.stickyTop?this.sticky():this.handleReset()},handleResize:function(){this.isSticky&&(this.width=this.$el.getBoundingClientRect().width+"px")}}}),a=o,l=i("2877"),r=Object(l["a"])(a,n,s,!1,null,null,null);e["a"]=r.exports}}]);