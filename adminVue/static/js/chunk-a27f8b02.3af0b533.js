(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a27f8b02"],{2423:function(t,i,e){"use strict";e.d(i,"c",(function(){return a})),e.d(i,"b",(function(){return n})),e.d(i,"d",(function(){return r})),e.d(i,"a",(function(){return l})),e.d(i,"e",(function(){return c}));var s=e("b775"),a=function(t){return Object(s["a"])({url:"/article/list",method:"get",params:t})},n=function(t){return Object(s["a"])({url:"/article/detail",method:"get",params:{id:t}})},r=function(t){return Object(s["a"])({url:"/article/pv",method:"get",params:{pv:t}})},l=function(t){return Object(s["a"])({url:"/article/create",method:"post",data:t})},c=function(t){return Object(s["a"])({url:"/article/update",method:"post",data:t})}},"2afd":function(t,i,e){},3032:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"components-container"},[t._m(0),e("div",{staticClass:"editor-container"},[e("dnd-list",{attrs:{list1:t.list1,list2:t.list2,"list1-title":"List","list2-title":"Article pool"}})],1)])},a=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("aside",[t._v("drag-list base on "),e("a",{attrs:{href:"https://github.com/SortableJS/Vue.Draggable",target:"_blank"}},[t._v("Vue.Draggable")])])}],n=(e("a434"),function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"dndList"},[e("div",{staticClass:"dndList-list",style:{width:t.width1}},[e("h3",[t._v(t._s(t.list1Title))]),e("draggable",{staticClass:"dragArea",attrs:{"set-data":t.setData,list:t.list1,group:"article"}},t._l(t.list1,(function(i){return e("div",{key:i.id,staticClass:"list-complete-item"},[e("div",{staticClass:"list-complete-item-handle"},[t._v(" "+t._s(i.id)+"["+t._s(i.author)+"] "+t._s(i.title)+" ")]),e("div",{staticStyle:{position:"absolute",right:"0px"}},[e("span",{staticStyle:{float:"right","margin-top":"-20px","margin-right":"5px"},on:{click:function(e){return t.deleteEle(i)}}},[e("i",{staticClass:"el-icon-delete",staticStyle:{color:"#ff4949"}})])])])})),0)],1),e("div",{staticClass:"dndList-list",style:{width:t.width2}},[e("h3",[t._v(t._s(t.list2Title))]),e("draggable",{staticClass:"dragArea",attrs:{list:t.list2,group:"article"}},t._l(t.list2,(function(i){return e("div",{key:i.id,staticClass:"list-complete-item"},[e("div",{staticClass:"list-complete-item-handle2",on:{click:function(e){return t.pushEle(i)}}},[t._v(" "+t._s(i.id)+" ["+t._s(i.author)+"] "+t._s(i.title)+" ")])])})),0)],1)])}),r=[],l=(e("a623"),e("c975"),e("b85c")),c=e("1980"),u=e.n(c),o={name:"DndList",components:{draggable:u.a},props:{list1:{type:Array,default:function(){return[]}},list2:{type:Array,default:function(){return[]}},list1Title:{type:String,default:"list1"},list2Title:{type:String,default:"list2"},width1:{type:String,default:"48%"},width2:{type:String,default:"48%"}},methods:{isNotInList1:function(t){return this.list1.every((function(i){return t.id!==i.id}))},isNotInList2:function(t){return this.list2.every((function(i){return t.id!==i.id}))},deleteEle:function(t){var i,e=Object(l["a"])(this.list1);try{for(e.s();!(i=e.n()).done;){var s=i.value;if(s.id===t.id){var a=this.list1.indexOf(s);this.list1.splice(a,1);break}}}catch(n){e.e(n)}finally{e.f()}this.isNotInList2(t)&&this.list2.unshift(t)},pushEle:function(t){var i,e=Object(l["a"])(this.list2);try{for(e.s();!(i=e.n()).done;){var s=i.value;if(s.id===t.id){var a=this.list2.indexOf(s);this.list2.splice(a,1);break}}}catch(n){e.e(n)}finally{e.f()}this.isNotInList1(t)&&this.list1.push(t)},setData:function(t){t.setData("Text","")}}},d=o,f=(e("55305"),e("2877")),h=Object(f["a"])(d,n,r,!1,null,"0bdb1588",null),p=h.exports,v=e("2423"),g={name:"DndListDemo",components:{DndList:p},data:function(){return{list1:[],list2:[]}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.listLoading=!0,Object(v["c"])().then((function(i){t.list1=i.data.items.splice(0,5),t.list2=i.data.items}))}}},m=g,b=Object(f["a"])(m,s,a,!1,null,null,null);i["default"]=b.exports},55305:function(t,i,e){"use strict";var s=e("2afd"),a=e.n(s);a.a},a623:function(t,i,e){"use strict";var s=e("23e7"),a=e("b727").every,n=e("a640"),r=e("ae40"),l=n("every"),c=r("every");s({target:"Array",proto:!0,forced:!l||!c},{every:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);