(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-914786b8"],{"1bd7":function(e,t,n){"use strict";var a=n("8e48"),l=n.n(a);l.a},"59f4":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"PageDownloadExcel"},[n("el-table",{attrs:{data:e.list,border:"",stripe:""}},e._l(Object.keys(e.list[0]?e.list[0]:{}),(function(e,t){return n("el-table-column",{key:t,attrs:{prop:e,label:e,align:"center"}})})),1),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.download}},[e._v("下载Excel")])],1)},l=[],c=(n("ac6a"),n("456d"),{name:"PageDownloadExcel",data:function(){return{list:[{"姓名":"张三","年龄":18,"爱好":"旅游"},{"姓名":"李四","年龄":19,"爱好":"游泳"},{"姓名":"王五","年龄":20,"爱好":"吃鸡"}]}},methods:{download:function(){var e=this;Promise.all([n.e("chunk-23b9c8dc"),n.e("chunk-2d0de310")]).then(n.bind(null,"8530")).then((function(t){t.export_json_to_excel({header:Object.keys(e.list[0]),data:e.list.map((function(t){return Object.keys(e.list[0]).map((function(e){return t[e]}))})),filename:"下载Excel",bookType:"xlsx"})}))}}}),o=c,i=(n("1bd7"),n("2877")),r=Object(i["a"])(o,a,l,!1,null,"515c40a2",null);t["default"]=r.exports},"8e48":function(e,t,n){}}]);