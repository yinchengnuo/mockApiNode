(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22585e"],{e580:function(e,l,t){"use strict";t.r(l);var o=t("7a23"),n=Object(o["createVNode"])("br",null,null,-1);function r(e,l,t,r,c,u){var d=Object(o["resolveComponent"])("VModelChild");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])("ol",null,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(r.list,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("li",{key:e.msg,innerHTML:e.msg},null,8,["innerHTML"])})),128))]),n,Object(o["createVNode"])(d,{modelValue:r.childVal,"onUpdate:modelValue":l[1]||(l[1]=function(e){return r.childVal=e})},null,8,["modelValue"]),Object(o["withDirectives"])(Object(o["createVNode"])("input",{"onUpdate:modelValue":l[2]||(l[2]=function(e){return r.inputVal=e}),type:"text"},null,512),[[o["vModelText"],r.inputVal]]),Object(o["createVNode"])("h4",null,Object(o["toDisplayString"])(r.inputVal),1)],64)}function c(e,l,t,n,r,c){return Object(o["openBlock"])(),Object(o["createBlock"])("h3",null,"123")}var u={setup:function(){return{}}};u.render=c;var d=u,a={components:{VModelChild:d},setup:function(){var e=Object(o["ref"])(""),l=Object(o["ref"])("");return{inputVal:e,childVal:l,list:[{msg:"vue3.x v-model 指令增加了 :modelValue 用于指定子组件内部接受 props 的名字"},{msg:"modelValue 只能用于自定义组将，不能用于原生表达组件"},{msg:'使用 modelValue 的自定义组件使用 props 接受父组件传值，使用 emit("update:modelValue", $event.target.value)'},{msg:"vue3.x 支持多个 v-model 绑定，传值和更新和单个 v-model 一致"},{msg:"vue3.x 新增了 v-model 修饰符，可以通过 v-model.xxx 的方式向子组件内部传值，子组件接受到的是 this.$props.modelModifiers 为 { xxx: true }"},{msg:"默认 v-model 修饰符在子组件内部接受的参数是 this.$props.modelModifiers"},{msg:'带有 modelValue 的 v-model 修饰符在子组件内部接受的参数是 this.$props["modelValue" + "Modifiers"]'}]}}};a.render=r;l["default"]=a}}]);
//# sourceMappingURL=chunk-2d22585e.4251a184.js.map