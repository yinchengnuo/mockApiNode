import{d as w,r as d,o as C,c as N,w as s,a as l,u as i,z as H,b as R,m as h,e as W,f as q,g as M,h as j,F as U,i as Y,Q as K,j as y,n as x,k as Q,l as _,p as G,q as X,t as Z,s as ee,v as te,x as oe,A as re}from"./vendor.951fc773.js";const ne=function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}};ne();const ue=w({setup(t){const u=H;return(r,n)=>{const e=d("router-view"),o=d("a-config-provider");return C(),N(o,{locale:i(u)},{default:s(()=>[l(e)]),_:1},8,["locale"])}}});var se=R({state:{},mutations:{},actions:{},modules:{}});const ce="modulepreload",I={},le="/yapi/",ae=function(u,r){return!r||r.length===0?u():Promise.all(r.map(n=>{if(n=`${le}${n}`,n in I)return;I[n]=!0;const e=n.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${o}`))return;const c=document.createElement("link");if(c.rel=e?"stylesheet":ce,e||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),e)return new Promise((b,k)=>{c.addEventListener("load",b),c.addEventListener("error",k)})})).then(()=>u())};var ie="/yapi/assets/my.5817e989.png";const pe=`{
  a: 1,
  b: 'b',
  c: false,
  d: ['d', 'd', 'd'],
  f: {
    fa: 1,
    fb: 'b',
    fc: true
  },
  g: [
    {
      ga: 1,
      gb: false
    }
  ],
  h: [
    [1, 1, 1],
    [
      {
        h1: false,
        h2: 'h2'
      }
    ]
  ]
}
`,de=`{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "code": { "type": "number", "description": "\u54CD\u5E94\u7801" },
    "data": {
      "type": "object",
      "properties": {
        "data": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "assignStatus": { "type": ["number", "string"], "description": "\u8F66\u8F86\u6307\u6D3E\u72B6\u6001 0\uFF1A\u672A\u6307\u6D3E \uFF0C1\uFF1A\u5DF2\u6307\u6D3E" },
              "carNumber": { "type": "string", "description": "\u8F66\u724C\u53F7" },
              "id": { "type": "string", "description": "\u8F66\u8F86ID" },
              "vehicleTypeCode": { "type": "null", "description": "\u8F66\u8F86\u7C7B\u578B\u7F16\u7801" }
            },
            "required": ["assignStatus", "carNumber", "id", "vehicleTypeCode"]
          }
        },
        "total": { "type": "number", "description": "\u603B\u8BB0\u5F55\u6570" }
      },
      "description": "\u8F66\u8F86\u5217\u8868"
    },
    "msg": { "type": "string", "description": "\u54CD\u5E94\u63CF\u8FF0" },
    "success": { "type": "boolean", "description": "\u6267\u884C\u7ED3\u679C" }
  }
}
`;var L=(t,u)=>(t=JSON.stringify(t,null,u.tabSize),t=t.replaceAll('"',""),t=t.replaceAll(",",""),t=t.replace(/\[\s+/g,""),t=t.replace(/\s+\]/g,"[]"),t=t.replace(/(?<=\n)\s+/g,r=>r.length===u.tabSize?r:Array(r.length/2+u.tabSize).fill(" ").join("")),t);const m=t=>Object.prototype.toString.call(t).toLowerCase().replace("[object ","").replace("]","");var _e=t=>{const u={};if(m(t)==="array")return h.info("\u6682\u4E0D\u652F\u6301\u6B64\u6570\u636E\u7C7B\u578B"),[];const r=(n,e)=>{for(const o in n){if(m(n[o])==="object"){e[o]={},r(n[o],e[o]);continue}if(m(n[o])==="array"){if(m(n[o][0])==="object"){e[o]=[{}],r(n[o][0],e[o][0]);continue}if(m(n[o][0])==="array"){e[o]=[[]],r(n[o][0],e[o][0]);continue}e[o]=[m(n[o][0])];continue}if(m(n)==="object")e[o]=m(n[o]);else{e[0]=m(n[0]);continue}}};return r(t,u),u};const O=(t,u,r)=>(r.replaceNull&&t==="null"&&(t="any"),r.showDescription&&u.description&&(t+=` // ${u.description}`),t),F=(t,u)=>typeof t.type=="object"?O(t.type.reduce((r,n)=>r+(r?" | ":"")+n,""),t,u):O(t.type,t,u);var fe=(t,u)=>{const r={},n=(e,o)=>{for(const c in e){if(F(e[c],u).startsWith("object")){o[c]={},n(e[c].properties,o[c]);continue}if(F(e[c],u).startsWith("array")){if(F(e[c].items,u).startsWith("object")){o[c]=[{}],n(e[c].items.properties,o[c][0]);continue}if(F(e[c].items,u).startsWith("array"))throw new Error("\u6570\u636E\u4E2D\u5B58\u5728\u591A\u7EF4\u6570\u7EC4\uFF0C\u6682\u4E0D\u652F\u6301\u8F6C\u6362");o[c]=[F(e[c].items,u)];continue}o[c]=F(e[c],u)}};return n(t.properties,r),r},he=(t,u)=>{const r=JSON.parse(t);return r.type==="object"&&r.$schema==="http://json-schema.org/draft-04/schema#"&&r.properties&&Reflect.ownKeys(r.properties).length?`interface ${u.interfaceName} ${L(fe(r,u),u)}`:`interface ${u.interfaceName} ${L(_e(r),u)}`};var me=(t,u)=>{for(const[r,n]of u)t[r]=n;return t};const P=t=>(G("data-v-487cf378"),t=t(),X(),t),ve={class:"PageIndex h100"},ye=_(" YAPI Response \u8F6C Typescript Interface "),Fe=_("Gitlab"),ge=_("\u67E5\u770B\u793A\u4F8B"),Ce=_(" JSObject "),be=_(" SchemaJson "),ke=_("\u5982\u4F55\u4F7F\u7528\uFF1F"),Ee={class:"flex1 flex flex_sb"},Ae=P(()=>y("h3",null,"\u8F93\u5165YAPI Response\uFF08SchemaJson/JSObject\uFF09\uFF1A",-1)),Se=_("\u662F\u5426\u663E\u793A description \u4E3A\u63A5\u53E3\u6CE8\u91CA"),De=_("\u662F\u5426\u66FF\u6362 type null \u4E3A any"),Be=_("\u6E05\u9664"),we=_("\u7C98\u8D34"),Ne={class:"flex1 flex flex_sb"},je=P(()=>y("h3",null,"\u8F93\u51FA Typescript Interface\uFF1A",-1)),xe=_("Interface Name"),Ie=_("TabSize"),Le=_("\u590D\u5236"),Oe=["innerHTML"],Pe=["innerHTML"],$e=w({setup(t){h.config({top:"calc(50vh - 30px)"});const u=[{value:"pnpm",color:"pink"},{value:"vite",color:"red"},{value:"vue3",color:"orange"},{value:"typescript",color:"green"},{value:"ESLint",color:"cyan"},{value:"prettier",color:"blue"},{value:"volar",color:"purple"},{value:"sass",color:"gold"},{value:"husky",color:"yellow"},{value:"lint-staged",color:"blue"}],r=W({tabSize:2,replaceNull:!0,showDescription:!0,interfaceName:"Interface"}),n=q(""),e=M(()=>{if(n.value)try{return he(n.value,r)}catch{return h.destroy(),h.info("\u65E0\u6CD5\u8F6C\u6362"),""}return""}),o=f=>{if(!!f){f=f.trim(),f=f.replaceAll("'",'"'),f=f.replace(/(?<!")\b\w+(?=\s*:)/g,'"$&"');try{n.value=JSON.stringify(JSON.parse(f),null,2)}catch{n.value=f}}},c=()=>{navigator.clipboard.readText().then(o).catch(()=>h.error("\u7C98\u8D34\u5931\u8D25\uFF0C\u8BF7\u5141\u8BB8\u5E94\u7528\u8BBF\u95EE\u526A\u5207\u677F"))},b=()=>{n.value||(h.destroy(),h.info("\u70B9\u51FB\u7C98\u8D34\u6309\u94AE\u7C98\u8D34\u6570\u636E"))},k=()=>{e.value?navigator.clipboard.writeText(e.value).then(()=>h.success("\u590D\u5236\u6210\u529F")).catch(()=>h.error("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u5141\u8BB8\u5E94\u7528\u8BBF\u95EE\u526A\u5207\u677F")):(h.destroy(),h.info("\u8F93\u51FA\u65E0\u6570\u636E"))};return(f,a)=>{const v=d("a-button"),$=d("a-tag"),A=d("a-menu-item"),T=d("a-menu"),J=d("a-dropdown"),g=d("a-tooltip"),E=d("a-switch"),S=d("a-space"),D=d("a-divider"),z=d("a-input"),B=d("a-row"),V=d("a-page-header");return C(),j("div",ve,[l(V,{avatar:{src:i(ie)}},{title:s(()=>[ye]),subTitle:s(()=>[l(v,{type:"link",target:"_blank",href:"http://10.106.11.64/yinchengnuo/yapiresponsetransformtotypescriptinterface"},{default:s(()=>[Fe]),_:1})]),tags:s(()=>[(C(),j(U,null,Y(u,p=>l($,{key:p.value,color:p.color},{default:s(()=>[_(Z(p.value),1)]),_:2},1032,["color"])),64))]),extra:s(()=>[l(J,null,{overlay:s(()=>[l(T,null,{default:s(()=>[l(A,{onClick:a[0]||(a[0]=p=>o(i(pe)))},{default:s(()=>[Ce]),_:1}),l(A,{onClick:a[1]||(a[1]=p=>o(i(de)))},{default:s(()=>[be]),_:1})]),_:1})]),default:s(()=>[l(v,{type:"link"},{default:s(()=>[ge]),_:1})]),_:1}),l(g,null,{title:s(()=>[ke]),default:s(()=>[l(v,{type:"text",target:"_blank",href:"http://10.106.16.87:50001/pages/1d9c14"},{default:s(()=>[l(i(K),{class:"how_to_use"})]),_:1})]),_:1})]),footer:s(()=>[l(B,null,{default:s(()=>[y("pre",{innerHTML:n.value,class:x(["editor input flex1",{value:n.value}]),onClick:b},null,10,Oe),l(D,{class:"h100",type:"vertical"}),y("pre",{innerHTML:i(e),class:x(["editor output flex1",{value:i(e)}])},null,10,Pe)]),_:1})]),default:s(()=>[l(B,null,{default:s(()=>[y("div",Ee,[Ae,l(S,null,{default:s(()=>[l(g,null,{title:s(()=>[Se]),default:s(()=>[l(E,{checked:i(r).showDescription,"onUpdate:checked":a[2]||(a[2]=p=>i(r).showDescription=p),checkedChildren:"\u662F",unCheckedChildren:"\u5426"},null,8,["checked"])]),_:1}),l(g,null,{title:s(()=>[De]),default:s(()=>[l(E,{checked:i(r).replaceNull,"onUpdate:checked":a[3]||(a[3]=p=>i(r).replaceNull=p),checkedChildren:"\u662F",unCheckedChildren:"\u5426"},null,8,["checked"])]),_:1}),n.value?(C(),N(v,{key:0,onClick:a[4]||(a[4]=p=>n.value="")},{default:s(()=>[Be]),_:1})):Q("",!0),l(v,{type:"primary",onClick:c},{default:s(()=>[we]),_:1})]),_:1})]),l(D,{class:"h100",type:"vertical"}),y("div",Ne,[je,l(S,null,{default:s(()=>[l(g,null,{title:s(()=>[xe]),default:s(()=>[l(z,{value:i(r).interfaceName,"onUpdate:value":a[5]||(a[5]=p=>i(r).interfaceName=p),allowClear:""},null,8,["value"])]),_:1}),l(g,null,{title:s(()=>[Ie]),default:s(()=>[l(E,{checked:i(r).tabSize,"onUpdate:checked":a[6]||(a[6]=p=>i(r).tabSize=p),checkedValue:2,unCheckedValue:4,checkedChildren:"2",unCheckedChildren:"4"},null,8,["checked"])]),_:1}),l(v,{type:"primary",onClick:k},{default:s(()=>[Le]),_:1})]),_:1})])]),_:1})]),_:1},8,["avatar"])])}}});var Te=me($e,[["__scopeId","data-v-487cf378"]]);const Je=[{path:"/",name:"PageIndex",component:Te},{path:"/:catchAll(.*)",name:"PageNotFound",component:()=>ae(()=>import("./PageNotFound.638a0701.js"),["assets/PageNotFound.638a0701.js","assets/PageNotFound.8382b811.css","assets/vendor.951fc773.js"])}],ze=ee({history:te(),routes:Je});oe(ue).use(se).use(ze).use(re).mount("#app");export{me as _};
