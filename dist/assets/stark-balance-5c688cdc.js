import{a as h}from"./axios-e7af96b6.js";import{A as k}from"./TextArea-84d21abc.js";import{B as w,A}from"./index-dc70c641.js";import{d as g,g as B,o as l,c as m,a as o,f as c,j as s,w as d,k as C,F as x,e as O,l as T,m as R}from"./index-7794b288.js";import{C as E,A as N}from"./index-b6738e70.js";import"./AntdIcon-32fd6c55.js";import"./index-474b7897.js";const F={style:{"padding-top":"20px"}},I={style:{"margin-top":"20px"}},V={key:0},$=["href"],G=g({__name:"stark-balance",setup(q){const n=B([]),i=B(""),b=[{title:"币种",dataIndex:"symbol",key:"symbol"},{title:"金额",dataIndex:"balance_display",key:"balance_display"},{title:"合约地址",dataIndex:"contract_address",key:"contract_address"}],f=()=>{(()=>{const t=i.value.split(/[(\r\n)\r\n]+/),e=async(a,r)=>{n.value[r]={address:a,table:{data:[]}};const _=n.value[r].table,p=await h.post("https://starkscan.stellate.sh",{query:`query ERC20BalancesByOwnerAddressTableQuery(
  $input: ERC20BalancesByOwnerAddressInput!
) {
  erc20BalancesByOwnerAddress(input: $input) {
    id
    ...ERC20BalancesByOwnerAddressTableRowFragment_erc20Balance
  }
}

fragment ERC20BalancesByOwnerAddressTableRowFragment_erc20Balance on ERC20Balance {
  id
  contract_address
  contract_erc20_identifier
  contract_erc20_contract {
    symbol
    is_social_verified
    icon_url
    id
  }
  balance_display
}`,variables:{input:{owner_address:a}}});console.log("r",p.data.data.erc20BalancesByOwnerAddress);for(let u=0;u<p.data.data.erc20BalancesByOwnerAddress.length;u++){const y=p.data.data.erc20BalancesByOwnerAddress[u];_.data.push({symbol:y.contract_erc20_contract.symbol,balance_display:y.balance_display,contract_address:y.contract_address})}console.log(n.value)};for(let a=0;a<t.length;a++)e(t[a],a)})()};return(v,t)=>(l(),m("div",null,[o("div",null,[c(s(k),{value:i.value,"onUpdate:value":t[0]||(t[0]=e=>i.value=e),placeholder:"请输入starkNet地址, 一行一个",rows:4},null,8,["value"]),o("div",F,[c(s(w),{type:"primary",onClick:f},{default:d(()=>[C(" 查询 ")]),_:1})])]),o("div",I,[c(s(E),null,{default:d(()=>[(l(!0),m(x,null,O(n.value,(e,a)=>(l(),T(s(N),{key:a,header:e.address},{default:d(()=>[c(s(A),{"data-source":e.table.data,columns:b,pagination:!1},{bodyCell:d(({column:r,record:_})=>[r.key==="contract_address"?(l(),m("div",V,[o("a",{href:`https://starkscan.co/contract/${_.contract_address}`,target:"_blank"},"查看合约",8,$)])):R("",!0)]),_:2},1032,["data-source"])]),_:2},1032,["header"]))),128))]),_:1})])]))}});export{G as default};
