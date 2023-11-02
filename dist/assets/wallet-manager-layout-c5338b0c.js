import{h as u,n as Z,f,d as G,u as J,g as T,i as Q,o as X,c as K,a as A,j as ee,F as te}from"./index-7794b288.js";import{C as ne,M as re}from"./index-474b7897.js";import{g as oe}from"./AntdIcon-32fd6c55.js";var P=[],p=[],ae="insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";function ie(){var e=document.createElement("style");return e.setAttribute("type","text/css"),e}function le(e,n){if(n=n||{},e===void 0)throw new Error(ae);var t=n.prepend===!0?"prepend":"append",o=n.container!==void 0?n.container:document.querySelector("head"),r=P.indexOf(o);r===-1&&(r=P.push(o)-1,p[r]={});var a;return p[r]!==void 0&&p[r][t]!==void 0?a=p[r][t]:(a=p[r][t]=ie(),t==="prepend"?o.insertBefore(a,o.childNodes[0]):o.appendChild(a)),e.charCodeAt(0)===65279&&(e=e.substr(1,e.length)),a.styleSheet?a.styleSheet.cssText+=e:a.textContent+=e,a}function k(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?Object(arguments[n]):{},o=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),o.forEach(function(r){ce(e,r,t[r])})}return e}function ce(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function x(e){return typeof e=="object"&&typeof e.name=="string"&&typeof e.theme=="string"&&(typeof e.icon=="object"||typeof e.icon=="function")}function v(e,n,t){return t?u(e.tag,k({key:n},t,e.attrs),(e.children||[]).map(function(o,r){return v(o,"".concat(n,"-").concat(e.tag,"-").concat(r))})):u(e.tag,k({key:n},e.attrs),(e.children||[]).map(function(o,r){return v(o,"".concat(n,"-").concat(e.tag,"-").concat(r))}))}function N(e){return oe(e)[0]}function B(e){return e?Array.isArray(e)?e:[e]:[]}var ue=`
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,I=!1,se=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ue;Z(function(){I||(typeof window<"u"&&window.document&&window.document.documentElement&&le(n,{prepend:!0}),I=!0)})},fe=["icon","primaryColor","secondaryColor"];function ye(e,n){if(e==null)return{};var t=de(e,n),o,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],!(n.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}function de(e,n){if(e==null)return{};var t={},o=Object.keys(e),r,a;for(a=0;a<o.length;a++)r=o[a],!(n.indexOf(r)>=0)&&(t[r]=e[r]);return t}function b(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?Object(arguments[n]):{},o=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),o.forEach(function(r){pe(e,r,t[r])})}return e}function pe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var m={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function me(e){var n=e.primaryColor,t=e.secondaryColor;m.primaryColor=n,m.secondaryColor=t||N(n),m.calculated=!!t}function be(){return b({},m)}var y=function(n,t){var o=b({},n,t.attrs),r=o.icon,a=o.primaryColor,i=o.secondaryColor,c=ye(o,fe),l=m;if(a&&(l={primaryColor:a,secondaryColor:i||N(a)}),se(),x(r),!x(r))return null;var s=r;return s&&typeof s.icon=="function"&&(s=b({},s,{icon:s.icon(l.primaryColor,l.secondaryColor)})),v(s.icon,"svg-".concat(s.name),b({},c,{"data-icon":s.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"}))};y.props={icon:Object,primaryColor:String,secondaryColor:String,focusable:String};y.inheritAttrs=!1;y.displayName="IconBase";y.getTwoToneColors=be;y.setTwoToneColors=me;const O=y;function ge(e,n){return Ce(e)||Oe(e,n)||he(e,n)||ve()}function ve(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function he(e,n){if(e){if(typeof e=="string")return $(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return $(e,n)}}function $(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function Oe(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var o=[],r=!0,a=!1,i,c;try{for(t=t.call(e);!(r=(i=t.next()).done)&&(o.push(i.value),!(n&&o.length===n));r=!0);}catch(l){a=!0,c=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(a)throw c}}return o}}function Ce(e){if(Array.isArray(e))return e}function W(e){var n=B(e),t=ge(n,2),o=t[0],r=t[1];return O.setTwoToneColors({primaryColor:o,secondaryColor:r})}function we(){var e=O.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}var _e=["class","icon","spin","rotate","tabindex","twoToneColor","onClick"];function Se(e,n){return Pe(e)||Ae(e,n)||Te(e,n)||je()}function je(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Te(e,n){if(e){if(typeof e=="string")return E(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return E(e,n)}}function E(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function Ae(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var o=[],r=!0,a=!1,i,c;try{for(t=t.call(e);!(r=(i=t.next()).done)&&(o.push(i.value),!(n&&o.length===n));r=!0);}catch(l){a=!0,c=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(a)throw c}}return o}}function Pe(e){if(Array.isArray(e))return e}function L(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?Object(arguments[n]):{},o=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),o.forEach(function(r){h(e,r,t[r])})}return e}function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ke(e,n){if(e==null)return{};var t=xe(e,n),o,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],!(n.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}function xe(e,n){if(e==null)return{};var t={},o=Object.keys(e),r,a;for(a=0;a<o.length;a++)r=o[a],!(n.indexOf(r)>=0)&&(t[r]=e[r]);return t}W("#1890ff");var d=function(n,t){var o,r=L({},n,t.attrs),a=r.class,i=r.icon,c=r.spin,l=r.rotate,s=r.tabindex,M=r.twoToneColor,_=r.onClick,S=ke(r,_e),R=(o={anticon:!0},h(o,"anticon-".concat(i.name),!!i.name),h(o,a,a),o),H=c===""||c||i.name==="loading"?"anticon-spin":"",g=s;g===void 0&&_&&(g=-1,S.tabindex=g);var U=l?{msTransform:"rotate(".concat(l,"deg)"),transform:"rotate(".concat(l,"deg)")}:void 0,V=B(M),j=Se(V,2),q=j[0],Y=j[1];return f("span",L({role:"img","aria-label":i.name},S,{onClick:_,class:R}),[f(O,{class:H,icon:i,primaryColor:q,secondaryColor:Y,style:U},null)])};d.props={spin:Boolean,rotate:Number,icon:Object,twoToneColor:String};d.displayName="AntdIcon";d.inheritAttrs=!1;d.getTwoToneColor=we;d.setTwoToneColor=W;const F=d;var Ie={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"};const $e=Ie;function z(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?Object(arguments[n]):{},o=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),o.forEach(function(r){Ee(e,r,t[r])})}return e}function Ee(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var C=function(n,t){var o=z({},n,t.attrs);return f(F,z({},o,{icon:$e}),null)};C.displayName="ArrowLeftOutlined";C.inheritAttrs=!1;const Le=C;function D(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?Object(arguments[n]):{},o=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),o.forEach(function(r){ze(e,r,t[r])})}return e}function ze(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var w=function(n,t){var o=D({},n,t.attrs);return f(F,D({},o,{icon:ne}),null)};w.displayName="CaretDownOutlined";w.inheritAttrs=!1;const De=w,Ne={style:{width:"max-content",margin:"auto"}},Be={style:{padding:"20px"}},Re=G({__name:"wallet-manager-layout",setup(e){const t=J().currentRoute.value.path.substring(1);console.log("cur",t);const o=T(["exchange-address"]),r=T([{key:"home",icon:()=>u(Le),label:u("a",{href:"#/"},"回首页")},{key:"exchange-address",label:u("a",{href:"#/exchange-address"},"交易所地址关联记录")},{key:"wallet-balance",label:u("a",{href:"#/wallet-balance"},"钱包资产批量查询")},{key:"layer-zero",label:u("a",{href:"#/layer-zero"},"LayerZero")},{key:"stark",label:u("span",{},[u("a",{href:"#/stark-balance",style:{marginRight:"5px",color:"inherit"}},"StarkNet工具"),u(De)]),children:[{key:"stark-balance",label:u("a",{href:"#/stark-balance"},"余额查询")},{type:"group",label:"Item 1",children:[{label:"Option 1",key:"setting:1"},{label:"Option 2",key:"setting:2"}]}]},{key:"alipay",label:u("a",{href:"https://antdv.com",target:"_blank"},"Navigation Four - Link"),title:"Navigation Four - Link"}]);return(a,i)=>{const c=Q("router-view");return X(),K(te,null,[A("div",Ne,[f(ee(re),{selectedKeys:o.value,"onUpdate:selectedKeys":i[0]||(i[0]=l=>o.value=l),mode:"horizontal",items:r.value},null,8,["selectedKeys","items"])]),A("div",Be,[f(c)])],64)}}});export{Re as default};
