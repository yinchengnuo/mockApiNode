(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65092ebb"],{"1df0":function(e,t,s){},"22d9":function(e,t,s){},"37ed":function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"iconfont",on:{click:e.clicked}},[e._v("")])},n=[],a={name:"Play",methods:{clicked:function(){this.$emit("clicked")}}},o=a,c=s("2877"),r=Object(c["a"])(o,i,n,!1,null,null,null);t["a"]=r.exports},5994:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"iconfont"},[e._v("")])},n=[],a={name:"Femail"},o=a,c=s("2877"),r=Object(c["a"])(o,i,n,!1,null,null,null);t["a"]=r.exports},7998:function(e,t,s){"use strict";var i=s("1df0"),n=s.n(i);n.a},8189:function(e,t,s){"use strict";var i=s("992c"),n=s.n(i);n.a},"868e":function(e,t,s){"use strict";var i=s("22d9"),n=s.n(i);n.a},"8b52":function(e,t,s){},"992c":function(e,t,s){},"9df5":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-index",on:{scroll:e.scroll}},[s("Back",{staticClass:"back",style:{opacity:e.top/e.headheight-.1},on:{clicked:e.back}}),s("Header",{directives:[{name:"show",rawName:"v-show",value:e.top<.6*e.headheight,expression:"top < (headheight * 0.6)"}],staticClass:"header",style:{opacity:1.1-e.top/e.headheight},attrs:{name:e.userInfo.name}}),s("div",{staticClass:"headpic",style:{transform:"translateY("+e.computedTop+"px)"}},[s("HeadPicSwiper",{attrs:{userInfo:e.userInfo}}),s("NameSexLevel",{attrs:{userInfo:e.userInfo}}),e.userInfo.introduction?s("div",{staticClass:"sign"},[e._v(e._s(e.userInfo.introduction))]):e._e()],1),s("UserIndexContent",{attrs:{userInfo:e.userInfo}}),s("VideoChatButton")],1)},n=[],a=(s("7f7f"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"iconfont",on:{click:e.clicked}},[e._v("")])}),o=[],c={name:"Back",methods:{clicked:function(){this.$emit("clicked")}}},r=c,l=s("2877"),u=Object(l["a"])(r,a,o,!1,null,null,null),f=u.exports,p=s("c87d"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"video-chat-button",on:{click:e.toAbout}},[e._v("下载富聊APP，邀请TA视频聊")])},h=[],v={name:"VideoChatButton",methods:{toAbout:function(){this.$router.push({name:"About"})}}},_=v,m=(s("7998"),Object(l["a"])(_,d,h,!1,null,null,null)),b=m.exports,C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("swiper",{ref:"mySwiper",staticClass:"head-pic-swiper",attrs:{options:e.swiperOption}},[e._l(e.info.headpic,function(t,i){return s("swiper-slide",{key:i,style:{background:"url("+t+") no-repeat center",backgroundSize:"100% 100%"}},[0===i&&e.info.videointropath?s("Play",{staticClass:"play",on:{clicked:e.toVideoIntro}}):e._e()],1)}),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)},g=[],I=s("37ed"),w={name:"HeadPicSwiper",props:["userInfo"],components:{Play:I["a"]},data:function(){return{info:this.userInfo,swiperOption:{loop:!0,watchOverflow:!0,pagination:{el:".swiper-pagination",type:"fraction",renderFraction:function(e,t){return"<span class=".concat(e,"></span>/<span class=").concat(t,"></span>")}}}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},methods:{toVideoIntro:function(){this.userInfo.videoRoomId=2630778,this.userInfo.charmlevel=9,this.userInfo.userpic="http://img2.ipaychat.com/d3/photos/2019/03/25/19/pic_1553512580885_3d84976b-062f-44e8-b324-cefc88dedf41_org.jpg@!fc_640_640",this.userInfo.city="杭州市",this.$router.push({name:"VideoIntroduction",params:{userInfo:this.userInfo}})}},activated:function(){this.$route.params.userInfo&&(this.info=this.$route.params.userInfo,this.swiper.updateSlides())}},x=w,k=(s("a4ff"),Object(l["a"])(x,C,g,!1,null,null,null)),$=k.exports,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"name-sex-level"},[s("div",{staticClass:"name-sex"},[s("span",{staticClass:"name item"},[e._v(e._s(e.userInfo.name))]),e.userInfo.sex?s("Mail",{staticClass:"mail item"}):s("Femail",{staticClass:"femail item"})],1),s("div",{staticClass:"level"},[s("span",{staticClass:"nowlevel item"},[e._v("M"+e._s(e.userInfo.Mlevel))]),e.userInfo.Mlevel>5?s("span",{staticClass:"hasfather item"},[e._v("出师")]):e._e(),s("span",{staticClass:"maxlevel item"},[e._v("最高"+e._s(e.userInfo.Mlevel>=e.userInfo.Vlevel?"M":"V")+e._s(e.userInfo.Mlevel>=e.userInfo.Vlevel?e.userInfo.Mlevel:e.userInfo.Vlevel))])])])},j=[],S=s("e628"),O=s("5994"),M={name:"NameSexLevel",props:["userInfo"],components:{Femail:O["a"],Mail:S["a"]}},E=M,P=(s("868e"),Object(l["a"])(E,y,j,!1,null,null,null)),T=P.exports,U=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-index-content"},[s("ul",{staticClass:"userinfo-nav"},e._l(e.navlist,function(t,i){return s("li",{key:i,class:[e.activeClass==i?"act":""],on:{click:function(t){return e.change(i)}}},[e._v(e._s(t))])}),0),s("UserinfoSwiper",{attrs:{userInfo:e.userInfo,activeClass:e.activeClass,name:e.navlist},on:{slide:e.slider}})],1)},V=[],A=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("swiper",{ref:"mySwiper",staticClass:"userinfo-swiper",attrs:{options:e.swiperOption},on:{slideChange:e.callback}},[s("swiper-slide",[s("div",{staticClass:"baseinfo infolist"},[s("div",{staticClass:"title"},[e._v(e._s(e.userInfo.sex?"他":"她")+"的资料")]),s("div",{staticClass:"baseinfo-item"},[e._v("年龄    "+e._s(e.userInfo.age)+"岁")]),s("div",{staticClass:"baseinfo-item"},[e._v("星座    "+e._s(e.userInfo.type))]),s("div",{staticClass:"baseinfo-item"},[e._v("城市    "+e._s(e.userInfo.localtion))])]),e.userInfo.lables.length?s("div",{staticClass:"tags infolist"},[s("div",{staticClass:"title"},[e._v(e._s(e.userInfo.sex?"他":"她")+"的标签")]),s("div",{staticClass:"taglist baseinfo-item"},e._l(e.userInfo.lables,function(t,i){return s("span",{key:i,staticClass:"tag-item"},[e._v(e._s(t))])}),0)]):e._e(),s("div",{staticClass:"sz infolist"},[s("div",{staticClass:"title"},[e._v(e._s(e.userInfo.sex?"他":"她")+"的私照")])]),s("div",{staticClass:"group infolist"},[s("div",{staticClass:"title"},[e._v(e._s(e.userInfo.sex?"他":"她")+"的群")])]),s("div",{staticClass:"sign infolist"},[s("div",{staticClass:"title"},[e._v("个人介绍")]),s("div",{staticClass:"title"},[e._v("        吃饭睡觉打豆豆， 淘气撒娇长高高")])])]),s("swiper-slide",[s("img",{staticClass:"bg",attrs:{src:e.userInfo.headpic[1]}}),s("div",{staticClass:"app"},[e._v("打开APP才能查看TA的所有小视频哦")])]),s("swiper-slide",[s("img",{staticClass:"bg",attrs:{src:e.userInfo.headpic[2]}}),s("div",{staticClass:"app"},[e._v("打开APP才能查看TA的动态哦")])]),s("div",{staticClass:"swiper-scrollbar",attrs:{slot:"scrollbar"},slot:"scrollbar"})],1)},N=[],B={name:"UserinfoSwiper",props:["userInfo","activeClass"],data:function(){return{swiperOption:{scrollbar:{el:".swiper-scrollbar"}}}},methods:{callback:function(){this.$emit("slide",this.swiper.activeIndex)}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},watch:{activeClass:function(e,t){this.swiper.slideTo(e)}}},H=B,z=(s("8189"),Object(l["a"])(H,A,N,!1,null,null,null)),F=z.exports,L={name:"UserIndexContent",props:["userInfo"],components:{UserinfoSwiper:F},data:function(){return{navlist:["资料","小视频","动态"],activeClass:0}},methods:{change:function(e){this.activeClass=e},slider:function(e){this.activeClass=e}}},R=L,q=(s("c8f3"),Object(l["a"])(R,U,V,!1,null,null,null)),D=q.exports,J={name:"UserIndex",components:{HeadPicSwiper:$,Back:f,Header:p["a"],VideoChatButton:b,NameSexLevel:T,UserIndexContent:D},data:function(){return{swiperOption:{direction:"vertical"},headheight:0,top:document.body.offsetWidth,userInfo:{name:"甜心柠",sex:0,headpic:["http://img2.96friend.cn/d3/photos/2019/03/25/19/pic_1553512580885_3d84976b-062f-44e8-b324-cefc88dedf41_org.jpg@!fc_640_640","http://img2.96friend.cn/d3/photos/2019/03/25/19/pic_1553512594493_54dd47e5-7874-485b-b050-c88f9eaf0049_org.jpg@!fc_640_640","http://img2.96friend.cn/d3/photos/2019/03/25/19/pic_1553512614512_d08117b8-83c3-4dd9-8456-6fdb4e5ea6e1_org.jpg@!fc_640_640","http://img2.96friend.cn/d3/photos/2019/03/25/19/pic_1553512624923_29e97e33-0b10-44cc-95be-e6ed807650e0_org.jpg@!fc_640_640","http://img2.96friend.cn/d3/photos/2019/03/25/19/pic_1553512637003_a8ddb0ad-7a05-4a2d-90e2-422ed9d58a05_org.jpg@!fc_640_640","http://img2.96friend.cn/d3/photos/2019/03/25/19/pic_1553512649766_3cdfe078-d73c-4e86-bf4e-abef49e4950e_org.jpg@!fc_640_640","http://img2.96friend.cn/d3/photos/2019/03/25/19/pic_1553512658632_d2abd280-b0e8-43b0-b6b0-a7ba73092faa_org.jpg@!fc_640_640","http://img2.96friend.cn/d3/photos/2019/03/25/19/pic_1553512669241_56476096-7f19-491b-8858-ebeb4c2e6247_org.jpg@!fc_640_640"],videointropath:"http://qqfeed.inke.cn/mp4/MTUzNDY2NTI3ODQ3NiM3NzcjbXA0-1.mp4?iksource=1",Mlevel:9,Vlevel:6,introduction:"小哥哥，来找我玩呗🤐",age:18,type:"双子座",localtion:"杭州市",lables:["美容师","00后","萝莉"]}}},methods:{back:function(){this.$router.go(-1)},scroll:function(e){var t=this.$el.getElementsByClassName("user-index-content")[0].getBoundingClientRect().top;this.top=t}},computed:{swiper:function(){return this.$refs.mySwiper.swiper},computedTop:function(){return Math.floor((this.headheight-this.top)/2.3)}},mounted:function(){this.top=this.headheight=this.$el.getElementsByClassName("headpic")[0].offsetHeight},beforeRouteLeave:function(e,t,s){this.$store.state.UserIndexScrollTop=this.$el.scrollTop,this.$store.state.UserIndexUserinfo=this.userinfo,s()},beforeRouteEnter:function(e,t,s){"VideoIntroduction"===t.name?s(function(e){e.$el.scrollTop=e.$store.state.UserIndexScrollTop}):s()}},Y=J,Q=(s("fc0a"),Object(l["a"])(Y,i,n,!1,null,null,null));t["default"]=Q.exports},a4ff:function(e,t,s){"use strict";var i=s("ed5b"),n=s.n(i);n.a},a8dc:function(e,t,s){},c8f3:function(e,t,s){"use strict";var i=s("a8dc"),n=s.n(i);n.a},e628:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"iconfont"},[e._v("")])},n=[],a={name:"Mail"},o=a,c=s("2877"),r=Object(c["a"])(o,i,n,!1,null,null,null);t["a"]=r.exports},ed5b:function(e,t,s){},fc0a:function(e,t,s){"use strict";var i=s("8b52"),n=s.n(i);n.a}}]);