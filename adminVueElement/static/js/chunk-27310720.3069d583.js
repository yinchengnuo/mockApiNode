(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27310720"],{2870:function(e,l,a){"use strict";var t=a("b93c"),n=a.n(t);n.a},"7c38":function(e,l,a){"use strict";a.r(l);var t=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",{staticClass:"PageQuerySearch"},[a("div",{staticClass:"query-bar"},[a("el-select",{attrs:{placeholder:"请选择下单渠道"},model:{value:e.mixin_query.channel,callback:function(l){e.$set(e.mixin_query,"channel",l)},expression:"mixin_query.channel"}},e._l(e.channel,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),a("el-select",{attrs:{placeholder:"请选择支付方式"},model:{value:e.mixin_query.pay,callback:function(l){e.$set(e.mixin_query,"pay",l)},expression:"mixin_query.pay"}},e._l(e.pay,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),a("el-select",{attrs:{placeholder:"请选择地区"},model:{value:e.mixin_query.area,callback:function(l){e.$set(e.mixin_query,"area",l)},expression:"mixin_query.area"}},e._l(e.area,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),a("el-select",{attrs:{placeholder:"请选择性别"},model:{value:e.mixin_query.sex,callback:function(l){e.$set(e.mixin_query,"sex",l)},expression:"mixin_query.sex"}},e._l(e.sex,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),a("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.search,callback:function(l){e.search=l},expression:"search"}}),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"}},[e._v("搜索")])],1),e._v(" "),a("el-tabs",{attrs:{type:"card"},model:{value:e.mixin_query.type,callback:function(l){e.$set(e.mixin_query,"type",l)},expression:"mixin_query.type"}},e._l(e.type,(function(l){return a("el-tab-pane",{key:l,attrs:{label:l}},[a("el-table",{attrs:{data:e.list,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"index",prop:"order_num",label:"序号",align:"center",width:"82px",index:function(l){return e.mixin_query.size*(e.page-1)+l+1}}}),e._v(" "),a("el-table-column",{attrs:{prop:"order_num",label:"订单号",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"time",label:"下单时间",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"下单渠道",align:"center"},scopedSlots:e._u([{key:"default",fn:function(l){return[e._v(e._s(e.channel[l.row.channel].label.split("-")[1]))]}}],null,!0)}),e._v(" "),a("el-table-column",{attrs:{label:"支付方式",align:"center"},scopedSlots:e._u([{key:"default",fn:function(l){return[e._v(e._s(e.pay[l.row.pay].label.split("-")[1]))]}}],null,!0)}),e._v(" "),a("el-table-column",{attrs:{label:"地区",align:"center"},scopedSlots:e._u([{key:"default",fn:function(l){return[e._v(e._s(e.area[l.row.area].label.split("-")[1]))]}}],null,!0)}),e._v(" "),a("el-table-column",{attrs:{label:"性别",align:"center"},scopedSlots:e._u([{key:"default",fn:function(l){return[e._v(e._s(e.sex[l.row.sex].label.split("-")[1]))]}}],null,!0)}),e._v(" "),a("el-table-column",{attrs:{prop:"nickname",label:"用户昵称",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"用户头像",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.avatar,alt:e.row.nickname}})]}}],null,!0)}),e._v(" "),a("el-table-column",{attrs:{prop:"shop",label:"商家名称",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"商品名称",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"num",label:"数量/单位",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"price",label:"订单价值/元",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"收货地址",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"订单备注",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"}},[[a("el-button",{attrs:{type:"primary",size:"small"}},[e._v("详情")])]],2)],1)],1)})),1),e._v(" "),a("el-pagination",{attrs:{background:"",total:e.total,"current-page":e.page,"page-sizes":[10,15,20],"page-size":e.mixin_query.size,layout:"total, sizes, prev, pager, next, jumper"},on:{"current-change":function(l){return e.page=l},"size-change":function(l){return e.mixin_query.size=l}}})],1)},n=[],r=a("b775"),i=function(e){return Object(r["a"])({url:"/query/list",method:"get",params:e})},u=a("db72"),s={watch:{mixin_query:{deep:!0,handler:function(){this.page=1,this.mixin_request()}},page:function(){this.mixin_request()}},mounted:function(){this.mixin_request()},methods:{mixin_request:function(){var e=this;this.$request(this.mixin_func(Object(u["a"])({},this.mixin_query,{page:this.page})),(function(l){var a=l.total,t=l.list;e.list=t,e.total=a}))}}},c={name:"PageQuerySearch",mixins:[s],props:{},data:function(){return{type:["待付款","待发货","待收货","待评价","已评价","待退货","已退货","全部订单"],channel:[{label:"下单渠道-全部",value:"0"},{label:"下单渠道-客户端",value:"1"},{label:"下单渠道-PC网站",value:"2"},{label:"下单渠道-微信小程序",value:"3"},{label:"下单渠道-微信网页",value:"4"}],pay:[{label:"支付方式-全部",value:"0"},{label:"支付方式-借记卡",value:"1"},{label:"支付方式-信用卡",value:"2"},{label:"支付方式-会员积分",value:"3"}],area:[{label:"地区-全部",value:"0"},{label:"地区-大陆",value:"1"},{label:"地区-港澳台",value:"2"},{label:"地区-海外",value:"3"}],sex:[{label:"性别-全部",value:"0"},{label:"性别-男",value:"1"},{label:"性别-女",value:"2"}],list:[],total:0,search:"",page:1,mixin_func:i,mixin_query:{size:15,type:"0",pay:"0",area:"0",sex:"0",channel:"0"}}}},o=c,p=(a("2870"),a("2877")),b=Object(p["a"])(o,t,n,!1,null,"421e16f3",null);l["default"]=b.exports},b93c:function(e,l,a){}}]);