(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08736980"],{"16c6":function(e,s,t){},"9d5f":function(e,s,t){"use strict";var o=t("16c6"),n=t.n(o);n.a},a74c:function(e,s,t){"use strict";t.r(s);var o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{ref:"scroller",staticClass:"live-two",on:{scroll:e.scroll}},[t("video",{directives:[{name:"show",rawName:"v-show",value:e.show&&!e.liveEnded,expression:"show && !liveEnded"}],ref:"player",staticClass:"video-player",style:{height:e.Quark||e.Baidu?"62vw":e.scrollTop>20?"62vw":"100vh"},attrs:{src:e.userInfo.streamUrl.replace("rtmp","http")+".m3u8"}}),t("div",{staticClass:"userpic",style:{background:"url("+e.userInfo.bgpic+") no-repeat center",backgroundSize:"150%"}},[t("RoomInfo",{attrs:{userInfo:e.userInfo,liveEnded:e.liveEnded,watcherInfo:e.yinchengnuo},on:{toUserIndex:e.toUserIndex,showPeople:e.alert}}),t("Play",{staticClass:"play",on:{clicked:e.play}}),t("LiveChat"),t("transition",{attrs:{name:"live-ended"}},[t("LiveEnded",{directives:[{name:"show",rawName:"v-show",value:e.liveEnded,expression:"liveEnded"}],attrs:{info:"直播刚刚结束了哦，去其他直播间看看吧"},on:{clicked:e.clickEnded}})],1),t("LiveBurrage",{directives:[{name:"show",rawName:"v-show",value:!e.liveEnded,expression:"!liveEnded"}]}),t("LiveUserInfo",{directives:[{name:"show",rawName:"v-show",value:e.Quark||e.Baidu?1:e.scrollTop>20&&e.show,expression:"(Quark || Baidu) ? 1 : scrollTop > 20 && show"}],attrs:{userInfo:e.userInfo},on:{toUserIndex:e.toUserIndex}})],1),t("transition",{attrs:{name:"alert-info"}},[t("LiveWatcherInfoAlert",{directives:[{name:"show",rawName:"v-show",value:e.userInfoAlert,expression:"userInfoAlert"}],attrs:{watcherInfo:e.watcherInfo,watcherInfoIndex:e.watcherInfoIndex},on:{close:e.closeAlert,toUserIndex:e.toUserIndex}})],1),t("SwiperNav",{staticClass:"swiper-nav",attrs:{navlist:e.navlist,activeClass:e.activeClass},on:{change:e.change}}),t("LiveRecommendSwiper",{attrs:{activeClass:e.activeClass,recommendUserInfo:e.recommendUserInfo},on:{slide:e.slider}}),t("Header",{staticClass:"header",attrs:{name:"返回首页",to:"LiveList"}}),t("transition",{attrs:{name:"alert-app"}},[t("OpenInApp",{directives:[{name:"show",rawName:"v-show",value:e.scrollTop>.3*e.width&&e.scrollTop<e.app,expression:"scrollTop > width * 0.3 && scrollTop < app"}]})],1)],1)},n=[],r=(t("7f7f"),t("f499")),i=t.n(r),a=(t("55dd"),t("a4bb")),c=t.n(a),l=(t("4917"),t("c87d")),d=t("7b75"),h=t("5e82"),u=t("37ed"),f=t("0872"),v=t("e476"),m=t("02c2"),w=t("3279"),p=t("14d0"),I=t("d07c"),g=t("7515"),S={name:"LiveTwo",components:{Play:u["a"],Header:l["a"],RoomInfo:d["a"],LiveChat:h["a"],OpenInApp:v["a"],SwiperNav:f["a"],LiveEnded:m["a"],LiveBurrage:w["a"],LiveUserInfo:p["a"],LiveRecommendSwiper:I["a"],LiveWatcherInfoAlert:g["a"]},data:function(){return{userInfo:this.$route.params.userInfo?this.$route.params.userInfo:JSON.parse(window.sessionStorage.getItem("fuliaoLiveSession"))["".concat(window.history.state.time)].userInfo,scrollTop:this.$route.params.userInfo?0:JSON.parse(window.sessionStorage.getItem("fuliaoLiveSession"))["".concat(window.history.state.time)].scrollTop,activeClass:this.$route.params.userInfo?0:JSON.parse(window.sessionStorage.getItem("fuliaoLiveSession"))["".concat(window.history.state.time)].activeClass,recommendUserInfo:{"热门直播":[],"才艺直播":[]},show:!1,app:0,width:0,Quark:window.navigator.userAgent.match(/Quark/),Baidu:window.navigator.userAgent.match(/Baidu/),yinchengnuo:this.$store.state.yinchengnuo,watcherInfo:{},watcherInfoIndex:0,userInfoAlert:!1,liveEnded:!1,time:0}},computed:{navlist:function(){return c()(this.recommendUserInfo)}},methods:{slider:function(e){this.activeClass=e},change:function(e){this.activeClass=e},play:function(){this.liveEnded||(this.show=!0,this.$refs.player.play())},scroll:function(){this.scrollTop=this.$refs.scroller.scrollTop},alert:function(e,s){this.watcherInfo=e,this.watcherInfoIndex=s,this.userInfoAlert=!0},closeAlert:function(){this.userInfoAlert=!1},clickEnded:function(){this.$refs.scroller.scrollTop=this.width},toUserIndex:function(e){this.$router.push({name:"UserIndex"})}},mounted:function(){var e=this;this.$refs.scroller.scrollTop=this.scrollTop,this.width=document.body.offsetWidth,this.app=3*document.body.offsetWidth-this.$refs.scroller.offsetHeight+30,this.$refs.player.addEventListener("ended",function(){e.liveEnded=!0,e.show=!1}),this.$refs.player.addEventListener("error",function(){e.liveEnded=!0,e.show=!1})},created:function(){var e=this,s=function(){e.$http.get("/moretuijian").then(function(s){e.recommendUserInfo["热门直播"]=s.data.info.sort(function(){return Math.random()-.5}).slice(0,8)}),e.$http.get("/morecaiyi").then(function(s){e.recommendUserInfo["才艺直播"]=s.data.info.channelList.sort(function(){return Math.random()-.5}).slice(0,8)})};if(this.$route.params.userInfo)s();else{var t=JSON.parse(window.sessionStorage.getItem("fuliaoLiveSession"))["".concat(window.history.state.time)].recommendUserInfo;t?(this.recommendUserInfo["热门直播"]=t["热门直播"],this.recommendUserInfo["才艺直播"]=t["才艺直播"]):s()}var o=window.sessionStorage.getItem("fuliaoLiveSession"),n=+new Date;this.time=n,history.replaceState({time:n},null);var r={userInfo:this.userInfo},a=JSON.parse(o);a["".concat(n)]=r,window.sessionStorage.setItem("fuliaoLiveSession",i()(a))},beforeRouteLeave:function(e,s,t){var o=window.sessionStorage.getItem("fuliaoLiveSession"),n=JSON.parse(o);n["".concat(this.time)].recommendUserInfo=this.recommendUserInfo,n["".concat(this.time)].activeClass=this.activeClass,n["".concat(this.time)].scrollTop=this.scrollTop,window.sessionStorage.setItem("fuliaoLiveSession",i()(n)),t()},meta:function(){return{title:"".concat(this.userInfo.name,"正在富聊直播")}}},L=S,y=(t("9d5f"),t("2877")),U=Object(y["a"])(L,o,n,!1,null,null,null);s["default"]=U.exports}}]);