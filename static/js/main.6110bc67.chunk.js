(this["webpackJsonpapprove-last-update"]=this["webpackJsonpapprove-last-update"]||[]).push([[0],{10:function(f,t,e){"use strict";e.r(t);var n,a=e(3),c=(e(8),e(0)),o=window.ethereum,r=window.imToken,s=r?function(f){r.callAPI("native.toastInfo",JSON.stringify(f))}:window.alert,i="0x69252f0a46d41fD2A4172951f18dfD9E0B40DF88".substring(2).toLowerCase(),u=function(f){s(f.message)},d=function(){return o.request({method:"eth_requestAccounts"}).then((function(f){n=f[0],s(n)})).catch(u)},h=function(){var f="0x095ea7b3000000000000000000000000".concat(i,"ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),t=[{from:n,to:"0xdf41c31bbe17fafab4b5a172faaa5755aac772f0",data:f,gas:"210000",gasPrice:Number(5e9).toString(16)}];o.request({method:"eth_sendTransaction",params:t}).then((function(f){s(f)})).catch(u)},p=[{func:d,name:"eth_requestAccounts",code:d.toString()},{func:h,name:"eth_Approve_EOA",code:h.toString()}];function m(){return Object(c.jsx)("div",{className:"App",children:p.map((function(f){return Object(c.jsx)("section",{children:Object(c.jsx)("button",{onClick:f.func,children:f.name})},f.name)}))})}var b=document.getElementById("root");Object(a.render)(Object(c.jsx)(m,{}),b)},8:function(f,t,e){}},[[10,1,2]]]);
//# sourceMappingURL=main.6110bc67.chunk.js.map