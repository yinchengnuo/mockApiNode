(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d586a31"],{2588:function(e,t,a){},"72e4":function(e,t,a){"use strict";var l=a("2588"),n=a.n(l);n.a},"7c38":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"PageQuerySearch"},[a("div",{staticClass:"query-bar"},[a("el-select",{attrs:{placeholder:"请选择下单渠道"},model:{value:e.mixin_query.channel,callback:function(t){e.$set(e.mixin_query,"channel",t)},expression:"mixin_query.channel"}},[a("el-option",{attrs:{label:"下单渠道-全部",value:"0"}}),e._v(" "),a("el-option",{attrs:{label:"下单渠道-客户端",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"下单渠道-PC网站",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"下单渠道-微信小程序",value:"3"}}),e._v(" "),a("el-option",{attrs:{label:"下单渠道-微信网页",value:"4"}})],1),e._v(" "),a("el-select",{attrs:{placeholder:"请选择支付方式"},model:{value:e.mixin_query.pay,callback:function(t){e.$set(e.mixin_query,"pay",t)},expression:"mixin_query.pay"}},[a("el-option",{attrs:{label:"支付方式-全部",value:"0"}}),e._v(" "),a("el-option",{attrs:{label:"支付方式-借记卡",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"支付方式-信用卡",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"支付方式-会员积分",value:"3"}})],1),e._v(" "),a("el-select",{attrs:{placeholder:"请选择地区"},model:{value:e.mixin_query.area,callback:function(t){e.$set(e.mixin_query,"area",t)},expression:"mixin_query.area"}},[a("el-option",{attrs:{label:"地区-全部",value:"0"}}),e._v(" "),a("el-option",{attrs:{label:"地区-大陆",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"地区-港澳台",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"地区-海外",value:"3"}})],1),e._v(" "),a("el-select",{attrs:{placeholder:"请选择性别"},model:{value:e.mixin_query.sex,callback:function(t){e.$set(e.mixin_query,"sex",t)},expression:"mixin_query.sex"}},[a("el-option",{attrs:{label:"性别-全部",value:"0"}}),e._v(" "),a("el-option",{attrs:{label:"性别-男",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"性别-女",value:"2"}})],1),e._v(" "),a("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"}},[e._v("搜索")])],1),e._v(" "),a("el-tabs",{attrs:{type:"card"},model:{value:e.mixin_query.type,callback:function(t){e.$set(e.mixin_query,"type",t)},expression:"mixin_query.type"}},[a("el-tab-pane",{attrs:{label:"待付款"}},[a("el-table",{attrs:{data:e.list,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"index",prop:"order_num",label:"序号",align:"center",width:"88px",index:function(t){return e.mixin_query.size*(e.mixin_query.page-1)+t+1}}}),e._v(" "),a("el-table-column",{attrs:{prop:"order_num",label:"订单号",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"time",label:"下单时间",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"nickname",label:"用户昵称",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"shop",label:"商家名称",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"商品名称",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"num",label:"数量/单位",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"price",label:"订单价值/元",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"收货地址",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"订单备注",align:"center"}})],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"待发货"}},[e._v("\n      123\n    ")]),e._v(" "),a("el-tab-pane",{attrs:{label:"待收货"}},[e._v("\n      123\n    ")]),e._v(" "),a("el-tab-pane",{attrs:{label:"待评价"}},[e._v("\n      123\n    ")]),e._v(" "),a("el-tab-pane",{attrs:{label:"已评价"}},[e._v("\n      123\n    ")]),e._v(" "),a("el-tab-pane",{attrs:{label:"待退货"}},[e._v("\n      123\n    ")]),e._v(" "),a("el-tab-pane",{attrs:{label:"已退货"}},[e._v("\n      123\n    ")]),e._v(" "),a("el-tab-pane",{attrs:{label:"全部订单"}},[e._v("\n      123\n    ")])],1),e._v(" "),a("el-pagination",{attrs:{background:"","current-page":e.mixin_query.page,"page-sizes":[10,15,20],"page-size":e.mixin_query.size,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":function(t){return e.mixin_query.size=t},"current-change":function(t){return e.mixin_query.page=t}}})],1)},n=[],r=a("b775"),i=function(e){return Object(r["a"])({url:"/query/list",method:"get",params:e})},s={watch:{mixin_query:{deep:!0,handler:function(){this.mixin_request()}}},mounted:function(){this.mixin_request()},methods:{mixin_request:function(){var e=this;this.$request(this.mixin_func(this.mixin_query),(function(t){var a=t.total,l=t.list;e.list=l,e.total=a}))}}},o={name:"PageQuerySearch",mixins:[s],props:{},data:function(){return{list:[],total:0,search:"",mixin_func:i,mixin_query:{page:1,size:15,type:"0",pay:"0",area:"0",sex:"0",channel:"0"}}}},u=o,c=(a("72e4"),a("2877")),p=Object(c["a"])(u,l,n,!1,null,"0e1fc881",null);t["default"]=p.exports}}]);