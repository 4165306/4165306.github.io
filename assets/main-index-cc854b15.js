import{d as g,u as b,r as m,n as $,o as x,c as p,a as v,t as _,b as h,F as B,e as C,_ as M}from"./index-7794b288.js";const z={class:"full-screen-disable-scroll"},I=["onClick"],c=200,r=150,S=g({__name:"main-index",setup(w){const y=b(),a={x:document.documentElement.clientWidth/2,y:document.documentElement.clientHeight/2},l={width:`${r}px`,height:`${r}px`,top:`${a.y-r/2}px`,left:`${a.x-r/2}px`,borderRadius:`${r/2}px`,fontSize:`${r/7}px`,color:"#FFF",transform:"translate(0,0)"},o=m({center:{title:"时秒",link:null,background:"#96F",style:{width:`${c}px`,height:`${c}px`,top:`${a.y-c/2}px`,left:`${a.x-c/2}px`,background:"#2979ff",borderRadius:`${c/2}px`,fontSize:`${c/5}px`,color:"#FFF"}},children:[{id:1,title:`connext女巫
查询工具`,link:"/connext",background:"#2979ff",color:"#FFF",style:{...l,background:"#96C291"}},{id:1,title:"空投资格查询",link:"/quiver",background:"#2979ff",color:"#FFF",style:{...l,background:"#96C291"}},{id:2,title:"个人简介",link:"/my",background:"#2979ff",color:"#FFF",style:{...l,background:"#FFDBAA"}},{id:3,title:`web3钱包
管理工具`,link:"/exchange-address",background:"#2979ff",color:"#FFF",style:{...l,background:"#FFB7B7"}},{id:3,title:"钓鱼体验",link:"/fish",background:"#2979ff",color:"#FFF",style:{...l,background:"#FFB7B7"}}]});$(()=>{k()});const k=async()=>{let e=1;const i=async()=>{const d=o.children.length;for(let n=0;n<d;n++){const s={x:e*Math.cos(n*(2*Math.PI)/d),y:e*Math.sin(n*(2*Math.PI)/d)};o.children[n].style.transform=`translate(${s.x}px, ${s.y}px)`}if(e<300){e+=10,requestAnimationFrame(i);return}u()};let t=.3;const u=()=>{e>=300&&(t=-.3),e<280&&(t=.3),e+=t,(()=>{const n=o.children.length;for(let s=0;s<n;s++){const F={x:e*Math.cos(s*(2*Math.PI)/n),y:e*Math.sin(s*(2*Math.PI)/n)};o.children[s].style.transform=`translate(${F.x}px, ${F.y}px)`}})(),requestAnimationFrame(u)};i()},f=e=>{console.log("push",e),y.push(e)};return(e,i)=>(x(),p("div",z,[v("div",{class:"pos-abs c-center disable-select",style:h([o.center.style,{"z-index":"9"}]),onClick:i[0]||(i[0]=t=>f(o.center.link??""))},_(o.center.title),5),(x(!0),p(B,null,C(o.children,t=>(x(),p("div",{key:t.id,class:"pos-abs c-center disable-select",style:h([t.style,{"z-index":"1"}]),onClick:u=>f(t.link)},_(t.title),13,I))),128))]))}});const P=M(S,[["__scopeId","data-v-3e2b0022"]]);export{P as default};
