(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c6f84d3"],{"8d55":function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"h",(function(){return s})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"g",(function(){return d}));var r=n("b775"),o=function(e){return r["b"].get("/role/all",{params:e})},i=function(e){return r["b"].get("/role/del",{params:e})},l=function(e){return r["b"].post("/role/add",e)},s=function(e){return r["b"].post("/role/update",e)},a=function(e){return r["b"].get("/account/all",{params:e})},c=function(e){return r["b"].get("/account/del",{params:e})},u=function(e){return r["b"].post("/account/add",e)},d=function(e){return r["b"].post("/account/update",e)}},"937a":function(e,t,n){},a5f6:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"PageRoleManage"},[n("el-button",{staticStyle:{"margin-bottom":"8px"},attrs:{type:"primary"},on:{click:e.handleAddRole}},[e._v("添加角色")]),n("el-table",{attrs:{data:e.list,border:""}},[n("el-table-column",{attrs:{align:"center",width:"234",prop:"rolename",label:"角色名"}}),n("el-table-column",{attrs:{align:"center",label:"权限"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row,o=r.rolename,i=r.title,l=r.routes;return[n("el-popover",{attrs:{trigger:"click",title:o,placement:"right","popper-class":"el-popover-tree"}},[n("div",{staticClass:"tree-wrapper"},[n("el-tree",{attrs:{data:l,props:{children:"children",label:function(e){return e.meta?e.meta.title:""}},"default-expand-all":!0}})],1),n("div",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis",cursor:"pointer"},attrs:{slot:"reference"},slot:"reference"},e._l(i,(function(t,r){return n("el-tag",{key:r,staticStyle:{margin:"2px"}},[e._v(e._s(t))])})),1)])]}}])}),n("el-table-column",{attrs:{align:"center",prop:"description",label:"描述"}}),n("el-table-column",{attrs:{align:"center",label:"人员"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row,o=r.rolename,i=r.users;return[i.length?n("el-popover",{attrs:{trigger:"click","popper-class":"el-popover-tree",title:o+"：共"+i.length+"人"}},[n("div",{staticClass:"tree-wrapper"},e._l(i,(function(t,r){return n("div",{key:r,staticStyle:{display:"flex",margin:"8px",cursor:"pointer"}},[n("img",{staticStyle:{width:"40px",height:"40px","border-radius":"10px"},attrs:{src:t.avatar}}),n("span",{staticStyle:{"line-height":"40px",margin:"0 8px"}},[e._v(e._s(t.username))])])})),0),n("div",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis",cursor:"pointer"},attrs:{slot:"reference"},slot:"reference"},e._l(i,(function(t,r){return n("el-tag",{key:r,staticStyle:{margin:"2px"}},[e._v(e._s(t.username))])})),1)]):[e._v("暂无人员")]]}}])}),n("el-table-column",{attrs:{align:"center",width:"234",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.handleEditRole(r)}}},[e._v("编辑角色权限")]),n("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){return e.handleDeleteRole(r)}}},[e._v("删除角色")])]}}])})],1),n("el-dialog",{attrs:{visible:e.dialogVisible,"close-on-click-modal":!1,"destroy-on-close":!0,title:"add"===e.dialogType?"添加角色":"编辑角色"},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("el-form",{attrs:{model:e.role,"label-width":"80px","label-position":"left"}},[n("el-form-item",{attrs:{label:"角色名"}},[n("el-input",{attrs:{maxlength:"12",placeholder:"角色名"},model:{value:e.role.rolename,callback:function(t){e.$set(e.role,"rolename",t)},expression:"role.rolename"}})],1),n("div",{staticClass:"el-form-item-wrapper"},[n("el-form-item",{attrs:{label:"页面权限"}},[n("el-tree",{ref:"tree",staticClass:"permission-tree",attrs:{data:e.routes,props:{children:"children",label:"title"},"show-checkbox":"",accordion:"",indent:48,"highlight-current":"","node-key":"path","icon-class":"el-icon-caret-right","render-content":e.renderContent},on:{"node-click":function(t){var n=t.buttons;return e.buttonPermission=n}}})],1),e.buttonPermission.length?n("el-form-item",{attrs:{label:"按钮权限"}},[n("el-table",{attrs:{data:e.buttonPermission,size:"mini",stripe:"",border:""}},[n("el-table-column",{attrs:{align:"center",label:"开启权限"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-switch",{model:{value:t.row.permission,callback:function(n){e.$set(t.row,"permission",n)},expression:"scope.row.permission"}})]}}],null,!1,2494243494)}),n("el-table-column",{attrs:{align:"center",label:"按钮名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.label))]}}],null,!1,3199909723)})],1)],1):e._e()],1),n("el-form-item",{attrs:{label:"角色描述"}},[n("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入角色描述"},model:{value:e.role.description,callback:function(t){e.$set(e.role,"description",t)},expression:"role.description"}})],1)],1),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"danger"},on:{click:e.handleCloseDialog}},[e._v("取消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.confirmRole}},[e._v(e._s("add"===e.dialogType?"确认添加":"确认编辑"))])],1)],1)],1)},o=[],i=(n("99af"),n("4de4"),n("c740"),n("4160"),n("caad"),n("c975"),n("d81d"),n("a434"),n("b0c0"),n("b64b"),n("ac16"),n("ac1f"),n("2532"),n("466d"),n("159b"),n("2909")),l=n("5530"),s=n("b85c"),a=n("df7c"),c=n.n(a),u=n("ed08"),d=n("8d55"),f={name:"AdminRole",data:function(){return{role:{id:"",rolename:"",routes:[],description:""},list:[],dialogType:"",dialogVisible:!1,buttonPermission:[],routes:this.generateRoutes(Object(u["c"])(this.$store.state.permission.permissionRoutes))}},mounted:function(){var e=this;this.getRole((function(){if(e.$route.params.rolename){var t=e.list.findIndex((function(t){return t.rolename===e.$route.params.rolename}));t>=0&&e.$nextTick((function(){document.querySelectorAll("td:nth-child(2)")[t].getElementsByClassName("el-popover__reference")[0].click()}))}}))},methods:{renderContent:function(e,t){var n=t.node,r=t.data,o=r.meta,i=r.hidden,l=r.buttons,s="color: red;margin-left: 8px;font-style: oblique;font-size: 8px;font-weight: bold;";return e("span",[o.icon?o.icon.includes("el-icon")?e("i",{class:o.icon,style:"margin-right: 8px;"}):e("svg-icon",{attrs:{"icon-class":o.icon},style:"margin-right: 8px;"}):null,e("span",[n.label]),i&&e("span",{style:s},["* 不在侧边栏显示"]),l.length>0?e("span",{style:s},["** 有权控按钮"]):null])},getRole:function(e){var t=this;this.$request(Object(d["f"])(),(function(n){var r=n.list;r.forEach((function(e){t.reductionRoutes(e.routes,Object(u["c"])(t.$store.state.permission.permissionRoutes)),e.title=JSON.stringify(e.routes).match(/(?<=title":").+?(?=")/g)})),t.list=r,e&&e()}))},handleAddRole:function(){var e=this;this.role=Object.assign({},{id:"",rolename:"",routes:[],description:""}),this.dialogType="add",this.$nextTick((function(){e.$refs.tree.setCheckedNodes([])})),this.dialogVisible=!0},handleEditRole:function(e){var t=this;this.dialogType="edit",this.role=Object(u["c"])(e);var n=function e(t,n){n.forEach((function(n){t.forEach((function(t){t.path===n.path&&(t.buttons=n.buttons,t.children&&n.children&&e(t.children,n.children))}))}))};n(this.routes,this.generateRoutes(Object(u["c"])(this.role.routes))),this.dialogVisible=!0,this.$nextTick((function(){for(var e=t.generateArr(t.generateRoutes(t.role.routes)),n=e.length-1;n>=0;n--)e[n].children&&e.splice(n,1);t.$refs.tree.setCheckedNodes(e)}))},handleCloseDialog:function(){var e=this;this.dialogVisible=!1,this.buttonPermission=[];var t=function e(t){t.forEach((function(t){t.buttons=[],t.children&&e(t.children)}))};t(this.routes),setTimeout((function(){e.routes=e.generateRoutes(Object(u["c"])(e.$store.state.permission.permissionRoutes))}),321)},confirmRole:function(){var e=this;if(this.role.rolename){var t=this.$refs.tree.getCheckedKeys(),n=this.$refs.tree.getCheckedNodes();this.role.routes=this.generateTree(Object(u["c"])(this.$store.state.permission.permissionRoutes),"/",t,n),"edit"===this.dialogType?this.$request(Object(d["h"])(this.role),(function(t){e.$notify.success({title:"修改成功",message:"角色名: "+e.role.rolename}),e.getRole(),e.handleCloseDialog()}),{endStillLoading:!0}):"add"===this.dialogType&&this.$request(Object(d["b"])(this.role),(function(t){e.$notify.success({title:"添加成功",message:"角色名: "+e.role.rolename}),e.getRole(),e.handleCloseDialog()}),{endStillLoading:!0})}else this.$message.info({message:"请设置角色名"})},handleDeleteRole:function(e){var t=this,n=e.roleID,r=e.users;r.length?this.$message.warning("当前角色账号数量不为 0 无法删除"):this.$confirm("确定要删除当前角色？","确定操作",{type:"warning"}).then((function(){t.$request(Object(d["d"])({roleID:n}),(function(e){t.$message.success("删除成功"),t.getRole()}),{endStillLoading:!0})}))},generateRoutes:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",r=[],o=Object(s["a"])(e);try{for(o.s();!(t=o.n()).done;){var i=t.value,a={name:i.name,meta:i.meta||{},hidden:Boolean(i.hidden),title:i.meta&&i.meta.title,path:c.a.resolve(n,i.path),buttons:(i.buttons||[]).map((function(e){return Object(l["a"])(Object(l["a"])({},e),{},{permission:Boolean(e.permission)})}))};i.children&&(a.children=this.generateRoutes(i.children,a.path)),r.push(a)}}catch(u){o.e(u)}finally{o.f()}return r},generateArr:function(e){var t=this,n=[];return e.forEach((function(e){if(n.push(e),e.children){var r=t.generateArr(e.children);r.length>0&&(n=[].concat(Object(i["a"])(n),Object(i["a"])(r)))}})),n},generateTree:function(e){var t,n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",o=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,l=[],a=Object(s["a"])(e);try{var u=function(){var e=t.value,s=c.a.resolve(r,e.path);e.children&&(e.children=n.generateTree(e.children,s,o,i)),(o.includes(s)||e.children&&e.children.length)&&(o.includes(s)&&(e.buttons=i[o.indexOf(s)].buttons.filter((function(e){return e.permission})).map((function(e){return e.name}))),Object.keys(e).forEach((function(t){"path"!==t&&"children"!==t&&"buttons"!==t&&Reflect.deleteProperty(e,t)})),e.buttons&&!e.buttons.length&&Reflect.deleteProperty(e,"buttons"),l.push(e))};for(a.s();!(t=a.n()).done;)u()}catch(d){a.e(d)}finally{a.f()}return l},reductionRoutes:function(e,t){var n=this;t.forEach((function(t){e.forEach((function(e){t.path===e.path&&(Object.keys(t).forEach((function(n){"children"!==n&&("buttons"===n?e.buttons=t.buttons.map((function(t){return Object(l["a"])(Object(l["a"])({},t),{},{permission:(e.buttons||[]).includes(t.name)})})):e[n]=t[n])})),e.children&&t.children&&n.reductionRoutes(e.children,t.children))}))}))}}},h=f,p=(n("aa94"),n("2877")),m=Object(p["a"])(h,r,o,!1,null,"1d8b41cb",null);t["default"]=m.exports},aa94:function(e,t,n){"use strict";var r=n("937a"),o=n.n(r);o.a},ac16:function(e,t,n){var r=n("23e7"),o=n("825a"),i=n("06cf").f;r({target:"Reflect",stat:!0},{deleteProperty:function(e,t){var n=i(o(e),t);return!(n&&!n.configurable)&&delete e[t]}})}}]);