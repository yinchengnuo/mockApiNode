(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bf116c0"],{"419e":function(e,t,i){"use strict";var r=i("6755"),n=i.n(r);n.a},6755:function(e,t,i){},a34c:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"chart-container"},[i("chart",{attrs:{height:"100%",width:"100%"}})],1)},n=[],o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:e.className,style:{height:e.height,width:e.width},attrs:{id:e.id}})},a=[],s=i("313e"),l=i.n(s),d=i("f863"),c={mixins:[d["a"]],props:{className:{type:String,default:"chart"},id:{type:String,default:"chart"},width:{type:String,default:"200px"},height:{type:String,default:"200px"}},data:function(){return{chart:null}},mounted:function(){this.initChart()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=l.a.init(document.getElementById(this.id)),this.chart.setOption({backgroundColor:"#394056",title:{top:20,text:"APP今日下载量",textStyle:{fontWeight:"normal",fontSize:16,color:"#F1F1F3"},left:"1%"},tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:"#57617B"}}},legend:{top:20,icon:"rect",itemWidth:14,itemHeight:5,itemGap:13,data:["应用宝","华为应用市场","OPPO应用市场"],right:"4%",textStyle:{fontSize:12,color:"#F1F1F3"}},grid:{top:100,left:"2%",right:"2%",bottom:"2%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,axisLine:{lineStyle:{color:"#57617B"}},data:["13:00","13:05","13:10","13:15","13:20","13:25","13:30","13:35","13:40","13:45","13:50","13:55"]}],yAxis:[{type:"value",name:"(%)",axisTick:{show:!1},axisLine:{lineStyle:{color:"#57617B"}},axisLabel:{margin:10,textStyle:{fontSize:14}},splitLine:{lineStyle:{color:"#57617B"}}}],series:[{name:"应用宝",type:"line",smooth:!0,symbol:"circle",symbolSize:5,showSymbol:!1,lineStyle:{normal:{width:1}},areaStyle:{normal:{color:new l.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(137, 189, 27, 0.3)"},{offset:.8,color:"rgba(137, 189, 27, 0)"}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},itemStyle:{normal:{color:"rgb(137,189,27)",borderColor:"rgba(137,189,2,0.27)",borderWidth:12}},data:[220,182,191,134,150,120,110,125,145,122,165,122]},{name:"华为应用市场",type:"line",smooth:!0,symbol:"circle",symbolSize:5,showSymbol:!1,lineStyle:{normal:{width:1}},areaStyle:{normal:{color:new l.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(0, 136, 212, 0.3)"},{offset:.8,color:"rgba(0, 136, 212, 0)"}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},itemStyle:{normal:{color:"rgb(0,136,212)",borderColor:"rgba(0,136,212,0.2)",borderWidth:12}},data:[120,110,125,145,122,165,122,220,182,191,134,150]},{name:"OPPO应用市场",type:"line",smooth:!0,symbol:"circle",symbolSize:5,showSymbol:!1,lineStyle:{normal:{width:1}},areaStyle:{normal:{color:new l.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(219, 50, 51, 0.3)"},{offset:.8,color:"rgba(219, 50, 51, 0)"}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},itemStyle:{normal:{color:"rgb(219,50,51)",borderColor:"rgba(219,50,51,0.2)",borderWidth:12}},data:[220,182,125,145,122,191,134,150,120,110,165,122]}]})}}},h=c,m=i("2877"),b=Object(m["a"])(h,o,a,!1,null,null,null),u=b.exports,f={name:"LineChart",components:{Chart:u}},y=f,g=(i("419e"),Object(m["a"])(y,r,n,!1,null,"55bc9edc",null));t["default"]=g.exports},f863:function(e,t,i){"use strict";var r=i("ed08");t["a"]={data:function(){return{$_sidebarElm:null,$_resizeHandler:null}},mounted:function(){this.initListener()},activated:function(){this.$_resizeHandler||this.initListener(),this.resize()},beforeDestroy:function(){this.destroyListener()},deactivated:function(){this.destroyListener()},methods:{$_sidebarResizeHandler:function(e){"width"===e.propertyName&&this.$_resizeHandler()},initListener:function(){var e=this;this.$_resizeHandler=Object(r["b"])((function(){e.resize()}),100),window.addEventListener("resize",this.$_resizeHandler),this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},destroyListener:function(){window.removeEventListener("resize",this.$_resizeHandler),this.$_resizeHandler=null,this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)},resize:function(){var e=this.chart;e&&e.resize()}}}}}]);