(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e64e3762"],{"0d5e":function(e,t,i){e.exports=i.p+"static/img/4.3fa9626d.jpg"},"4e2e":function(e,t,i){e.exports=i.p+"static/img/6.09e4b3b1.jpg"},"6ef4":function(e,t,i){},8299:function(e,t,i){"use strict";var n=i("6ef4"),s=i.n(n);s.a},"87d6":function(e,t,i){e.exports=i.p+"static/img/1.ceb5695f.jpg"},"88bc":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page-index"},[i("swiper",{ref:"swiper",staticClass:"swiper",attrs:{options:e.swiperOptions}},e._l(e.imgs,(function(t){return i("swiper-slide",{key:t},[i("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{fit:"cover",src:t,alt:t},on:{load:function(t){e.loading=!1}}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{height:"100%"},attrs:{slot:"placeholder"},slot:"placeholder"})])],1)})),1)],1)},s=[],a=i("7212"),r=(i("a7a3"),{name:"PageIndex",components:{Swiper:a["Swiper"],SwiperSlide:a["SwiperSlide"]},directives:{swiper:a["directive"]},data:function(){return{height:0,loading:!0,swiperOptions:{speed:1234,effect:"fade",autoplay:{delay:5678,disableOnInteraction:!1}},imgs:[i("87d6"),i("debd"),i("fead"),i("0d5e"),i("a9fb"),i("4e2e")]}},computed:{swiper:function(){return this.$refs.swiper.$swiper}},mounted:function(){this.$event.$on("toggleSideBar",this.toggleSideBar)},beforeDestroy:function(){clearTimeout(this.timer),this.$event.$off("toggleSideBar"),cancelAnimationFrame(this.requestID)},methods:{toggleSideBar:function(){var e=this,t=function t(){e.swiper.update(),e.requestID=requestAnimationFrame(t)};this.requestID=requestAnimationFrame((function(){e.swiper.update(),e.requestID=requestAnimationFrame(t)})),this.timer=setTimeout((function(){cancelAnimationFrame(e.requestID)}),345)}}}),o=r,c=(i("8299"),i("2877")),p=Object(c["a"])(o,n,s,!1,null,"796a6de6",null);t["default"]=p.exports},a9fb:function(e,t,i){e.exports=i.p+"static/img/5.1911bdf5.jpg"},debd:function(e,t,i){e.exports=i.p+"static/img/2.958cbebf.jpg"},fead:function(e,t,i){e.exports=i.p+"static/img/3.b9257cfc.jpg"}}]);