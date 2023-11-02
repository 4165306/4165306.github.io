import{a as w}from"./axios-e7af96b6.js";import{B as x,A}from"./index-dc70c641.js";import{C as O,A as R}from"./index-b6738e70.js";import{d as E,g as i,o as r,c as u,a as p,f as _,j as o,w as y,m as b,k as C,F,e as $,l as V}from"./index-7794b288.js";import{A as q}from"./TextArea-84d21abc.js";import"./AntdIcon-32fd6c55.js";import"./index-474b7897.js";class K{static async delay(a){return new Promise(c=>{setTimeout(()=>{c(1)},a)})}}const P={style:{"padding-top":"20px",display:"grid","grid-template-columns":"repeat(auto-fill, 150px)"}},U={key:0,style:{"margin-top":"20px"}},L={key:0},j=["href"],D={key:1},Q={key:0},S=["href"],Y=E({__name:"wallet-balance",setup(T){const a=i([]),c=i(""),v=i([]),g=i(0),f=i(!1),h=i(!0),I=async()=>{h.value=!0,f.value=!1;let m=0;const l=c.value.split(/[(\r\n)\r\n]+/);v.value=[{title:"地址",dataIndex:"address",key:"address"},{title:"总额(U)",dataIndex:"all_balance",key:"all_balance"},{title:"详情",dataIndex:"info",key:"info"}];const t=async e=>{try{const s=await w.get(`https://api.debank.com/user/search_v3?q=${e}&is_addr=1`,{headers:{"X-Api-Ver":"v2"}});console.log("r",s),a.value.push({address:e,all_balance:s.data.data.users[0].desc.usd_value.toFixed(2),info:`https://debank.com/profile/${e}`})}catch{a.value.push({address:e,all_balance:"获取失败",info:`https://debank.com/profile/${e}`})}finally{++m}if(m===l.length){h.value=!1;let s=0;for(let n=0;n<a.value.length;n++){const d=parseFloat(a.value[n].all_balance);s+=isNaN(d)?0:d}a.value.push({address:"总计",all_balance:s,info:""})}};for(let e=0;e<l.length;e++)await t(l[e]),e%3===0&&await K.delay(2e4)},N=()=>{f.value=!0,v.value=[{title:"币种",dataIndex:"symbol",key:"symbol"},{title:"金额",dataIndex:"balance_display",key:"balance_display"},{title:"合约地址",dataIndex:"contract_address",key:"contract_address"}],(()=>{const l=c.value.split(/[(\r\n)\r\n]+/),t=async(e,s)=>{a.value[s]={address:e,table:{data:[]}};const n=a.value[s].table,d=await w.post("https://starkscan.stellate.sh",{query:`query ERC20BalancesByOwnerAddressTableQuery(
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
}`,variables:{input:{owner_address:e}}});console.log("r",d.data.data.erc20BalancesByOwnerAddress);for(let k=0;k<d.data.data.erc20BalancesByOwnerAddress.length;k++){const B=d.data.data.erc20BalancesByOwnerAddress[k];n.data.push({symbol:B.contract_erc20_contract.symbol,balance_display:B.balance_display,contract_address:B.contract_address})}console.log(a.value)};for(let e=0;e<l.length;e++)t(l[e],e)})()};return(m,l)=>(r(),u("div",null,[p("div",null,[_(o(q),{value:c.value,"onUpdate:value":l[0]||(l[0]=t=>c.value=t),placeholder:"请输入starkNet地址, 一行一个",rows:4},null,8,["value"]),p("div",P,[p("div",null,[_(o(x),{type:"primary",onClick:N},{default:y(()=>[C(" 查询starknet ")]),_:1})]),p("div",null,[_(o(x),{type:"primary",onClick:I},{default:y(()=>[C(" 查询evm ")]),_:1})])])]),f.value?(r(),u("div",U,[_(o(O),{activeKey:g.value,"onUpdate:activeKey":l[1]||(l[1]=t=>g.value=t)},{default:y(()=>[(r(!0),u(F,null,$(a.value,(t,e)=>(r(),V(o(R),{key:e,header:t.address},{default:y(()=>[_(o(A),{"data-source":t.table.data,columns:v.value,pagination:!1},{bodyCell:y(({column:s,record:n})=>[s.key==="contract_address"?(r(),u("div",L,[p("a",{href:`https://starkscan.co/contract/${n.contract_address}`,target:"_blank"},"查看合约",8,j)])):b("",!0)]),_:2},1032,["data-source","columns"])]),_:2},1032,["header"]))),128))]),_:1},8,["activeKey"])])):b("",!0),!f.value&&a.value.length>0?(r(),u("div",D,[_(o(A),{"data-source":a.value,columns:v.value,pagination:!1,loading:h.value},{bodyCell:y(({column:t,record:e})=>[t.key==="info"&&e.info!==""?(r(),u("div",Q,[p("a",{href:e.info,target:"_blank"},"查看详情",8,S)])):b("",!0)]),_:1},8,["data-source","columns","loading"])])):b("",!0)]))}});export{Y as default};
