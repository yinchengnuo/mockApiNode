(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7269b072"],{"141f":function(e,t,n){"use strict";var i=n("26e6"),r=n.n(i);r.a},"26e6":function(e,t,n){},6901:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"PageRoleManage"},[n("el-button",{staticStyle:{"margin-bottom":"8px"},attrs:{type:"primary"},on:{click:e.handleAddRole}},[e._v("添加角色")]),e._v(" "),n("el-table",{attrs:{data:e.list,border:""}},[n("el-table-column",{attrs:{align:"center",width:"234",prop:"name",label:"角色名"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"权限"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.title,(function(t,i){return n("el-tag",{key:i,staticStyle:{margin:"2px"}},[e._v(e._s(t))])}))}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"234",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return e.handleEditRole(t.row)}}},[e._v("编辑角色权限")]),e._v(" "),n("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(n){return e.handleDeleteRole(t.row)}}},[e._v("删除角色")])]}}])})],1),e._v(" "),n("el-dialog",{attrs:{visible:e.dialogVisible,"close-on-click-modal":!1,"destroy-on-close":!0,title:"add"===e.dialogType?"添加角色":"编辑角色"},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("el-form",{attrs:{model:e.role,"label-width":"80px","label-position":"left"}},[n("el-form-item",{attrs:{label:"角色名"}},[n("el-input",{attrs:{maxlength:"12",placeholder:"角色名"},model:{value:e.role.name,callback:function(t){e.$set(e.role,"name",t)},expression:"role.name"}})],1),e._v(" "),n("div",{staticClass:"el-form-item-wrapper"},[n("el-form-item",{attrs:{label:"页面权限"}},[n("el-tree",{ref:"tree",staticClass:"permission-tree",attrs:{data:e.routes,props:{children:"children",label:"title"},"show-checkbox":"",accordion:"",indent:48,"icon-class":"el-icon-arrow-right","highlight-current":"","node-key":"path"},on:{"node-click":e.clickTree},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.node,r=t.data.meta;return n("span",{staticClass:"custom-tree-node"},[n("span",[e._v(e._s(i.label))]),e._v(" "),r.buttonPermission&&r.buttonPermission.length?n("span",{staticStyle:{color:"red"}},[e._v("*")]):e._e()])}}])})],1),e._v(" "),e.buttonPermission?n("el-form-item",{attrs:{label:"按钮权限"}},[n("el-table",{attrs:{data:e.buttonPermission,size:"mini","show-header":!1,stripe:"",border:""}},[n("el-table-column",{attrs:{align:"center",label:"按钮权限"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-switch",{model:{value:t.row.permission,callback:function(n){e.$set(t.row,"permission",n)},expression:"scope.row.permission"}})]}}],null,!1,2494243494)}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"按钮名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}],null,!1,1895023226)})],1)],1):e._e()],1)],1),e._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("div",[n("span",{staticStyle:{color:"red"}},[e._v("* ")]),e._v("表示当前页面有权控按钮\n      ")]),e._v(" "),n("div",[n("el-button",{attrs:{type:"danger"},on:{click:e.handleCloseDialog}},[e._v("取消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.confirmRole}},[e._v("确定")])],1)])],1)],1)},r=[],o=(n("7514"),n("6762"),n("2fdb"),n("2909")),l=n("5530"),a=n("b85c"),s=(n("7f7f"),n("4917"),n("ac6a"),n("df7c")),c=n.n(s),u=n("ed08"),d=n("cc5e"),h={name:"PageRoleManage",data:function(){return{role:{id:"",name:"",routes:[]},list:[],dialogType:"",dialogVisible:!1,buttonPermission:null,routes:this.generateRoutes(Object(u["c"])(this.$store.state.permission.routes))}},mounted:function(){this.getRole()},methods:{getRole:function(){var e=this;this.$request(Object(d["f"])(),(function(t){var n=t.list;n.forEach((function(e){e.title=JSON.stringify(e.routes).match(/(?<=title":").+?(?=")/g)})),"root"===e.$store.state.user.role?e.list=n.filter((function(e){return"root"!==e.name})):JSON.stringify(e.$store.state.user.routes).match("后台管理")?e.list=n.filter((function(e){return null===JSON.stringify(e.routes).match("后台管理")&&"root"!==e.name})):e.list=n}))},handleAddRole:function(){var e=this;this.role=Object.assign({},{id:"",name:"",routes:[]}),this.dialogType="add",this.$nextTick((function(){e.$refs.tree.setCheckedNodes([])})),this.dialogVisible=!0},handleEditRole:function(e){var t=this;this.dialogType="edit",this.role=Object(u["c"])(e);var n=function e(t,n){t.forEach((function(t){n.forEach((function(n){t.meta&&n.meta&&t.name===n.name&&(t.meta=n.meta),t.children&&n.children&&e(t.children,n.children)}))}))};n(this.routes,this.role.routes),this.dialogVisible=!0,this.$nextTick((function(){for(var e=t.generateArr(t.generateRoutes(t.role.routes)),n=e.length-1;n>=0;n--)e[n].children&&e.splice(n,1);t.$refs.tree.setCheckedNodes(e)}))},handleCloseDialog:function(){this.dialogVisible=!1,this.buttonPermission=null,this.routes=this.generateRoutes(Object(u["c"])(this.$store.state.permission.routes))},confirmRole:function(){var e=this;if(this.role.name){var t=this.$refs.tree.getCheckedKeys();this.role.routes=this.generateTree(Object(u["c"])(this.$store.state.permission.routes),"/",t),this.role.routes.forEach((function(e){e.component&&(e.component="")})),"edit"===this.dialogType?this.$request(Object(d["h"])(this.role),(function(t){e.$notify.success({title:"修改成功",message:"角色名: "+e.role.name}),e.getRole(),e.dialogVisible=!1}),{endStillLoading:!0}):"add"===this.dialogType&&this.$request(Object(d["b"])(this.role),(function(t){e.$notify.success({title:"添加成功",message:"角色名: "+e.role.name}),e.getRole(),e.dialogVisible=!1}),{endStillLoading:!0})}else this.$message.info({message:"请设置角色名"})},handleDeleteRole:function(e){var t=this,n=e.id;this.$confirm("确定要删除当前角色？","确定操作",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$request(Object(d["d"])({id:n}),(function(e){t.$message.success("删除成功"),t.getRole()}),{endStillLoading:!0})})).catch((function(e){return e}))},clickTree:function(e,t){var n=e.meta.buttonPermission;t.checked;this.buttonPermission=n||null},generateRoutes:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",i=[],r=Object(a["a"])(e);try{for(r.s();!(t=r.n()).done;){var o=t.value;if(!o.hidden){var l=this.onlyOneShowingChild(o.children,o);o.children&&l&&!o.alwaysShow&&(o=l);var s={name:o.name,meta:o.meta||{},title:o.meta&&o.meta.title,path:c.a.resolve(n,o.path)};o.children&&(s.children=this.generateRoutes(o.children,s.path)),i.push(s)}}}catch(u){r.e(u)}finally{r.f()}return i},onlyOneShowingChild:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=null,i=e.filter((function(e){return!e.hidden}));return 1===i.length?(n=i[0],n.path=c.a.resolve(t.path,n.path),n):0===i.length&&(n=Object(l["a"])(Object(l["a"])({},t),{},{path:"",noShowingChildren:!0}),n)},generateArr:function(e){var t=this,n=[];return e.forEach((function(e){if(n.push(e),e.children){var i=t.generateArr(e.children);i.length>0&&(n=[].concat(Object(o["a"])(n),Object(o["a"])(i)))}})),n},generateTree:function(e){var t,n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",r=arguments.length>2?arguments[2]:void 0,o=[],l=Object(a["a"])(e);try{var s=function(){var e=t.value,l=c.a.resolve(i,e.path);e.children&&(e.children=n.generateTree(e.children,l,r)),(r.includes(l)||e.children&&e.children.length>=1)&&(e.meta=n.$refs.tree.getCheckedNodes().find((function(t){return t.name===e.name})).meta,o.push(e))};for(l.s();!(t=l.n()).done;)s()}catch(u){l.e(u)}finally{l.f()}return o}}},f=h,m=(n("141f"),n("2877")),g=Object(m["a"])(f,i,r,!1,null,"74fe1c22",null);t["default"]=g.exports},cc5e:function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"h",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"g",(function(){return d}));var i=n("b775"),r=function(e){return Object(i["a"])({url:"/role/all",method:"get",params:e})},o=function(e){return Object(i["a"])({url:"/role/del",method:"get",params:e})},l=function(e){return Object(i["a"])({url:"/role/add",method:"post",data:e})},a=function(e){return Object(i["a"])({url:"/role/update",method:"post",data:e})},s=function(e){return Object(i["a"])({url:"/account/all",method:"get",params:e})},c=function(e){return Object(i["a"])({url:"/account/del",method:"get",params:e})},u=function(e){return Object(i["a"])({url:"/account/add",method:"post",data:e})},d=function(e){return Object(i["a"])({url:"/account/update",method:"post",data:e})}}}]);