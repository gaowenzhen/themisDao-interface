"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6099],{39480:function(n,e,t){var r=t(70865),o=t(96670),a=t(26297),i=t(52322),u=t(65957),c=t(92744),s=t(48608),l=t(86930),d=t(76166),f=t(16895),p=t(660),v=t(2784),h=t(51523),x=t(60471),g=function(n){var e=n.children,t=(0,a.Z)(n,["children"]),g=(0,p.v0)(),m=(0,f.Z)().login,Z=(0,u.$G)(),w=Z.t,k=Z.currentLanguage.code,b=(0,h.$4)().connectAsync,C=(0,d.g)().chainId,y=(0,v.useState)(!1),P=y[0],D=y[1],T=(0,v.useMemo)(function(){return(0,l.N2)(k)},[k]),H=function(){"undefined"!=typeof __NEZHA_BRIDGE__?g():D(!0)},I=(0,v.useMemo)(function(){return(0,l.Ut)(C,b)},[C,b]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Z,(0,o.Z)((0,r.Z)({onClick:H},t),{children:e||(0,i.jsx)(x.Z,{children:"Connect Wallet"})})),(0,i.jsx)(c.b2,{docText:w("Learn How to Connect"),docLink:T,isOpen:P,wallets:I,login:m,onDismiss:function(){return D(!1)}})]})};e.Z=g},23111:function(n,e,t){t.d(e,{d:function(){return h}});var r=t(98788),o=t(70865),a=t(96670),i=t(50930),u=t(5163),c=t(43997),s=t(2784),l=t(72135),d=t(72579),f=t.n(d),p=t(12483),v=t(93638);function h(){var n,e=(0,l.Fh)(),t=(0,c.v9)(function(n){return n.user.gasPrice});return{callWithGasPrice:(0,s.useCallback)((n=(0,r.Z)(function(n,r){var c,s,l,d,h,x,g=arguments;return(0,u.__generator)(this,function(u){switch(u.label){case 0:return c=g.length>2&&void 0!==g[2]?g[2]:[],s=g.length>3&&void 0!==g[3]?g[3]:null,(0,p.n_)({type:"Transaction",message:t===v.j4.rpcDefault?"Call with market gas price":"Call with gas price: ".concat(e),data:{contractAddress:n.address,methodName:r,methodArgs:c,overrides:s}}),l=f()(n,r),d=null==s?void 0:s.gasPrice,[4,l.apply(void 0,(0,i.Z)(c).concat([d?(0,o.Z)({},s):(0,a.Z)((0,o.Z)({},s),{gasPrice:e})]))];case 1:return(h=u.sent())&&(0,p.n_)({type:"Transaction",message:"Transaction sent: ".concat(h.hash),data:{hash:h.hash,from:h.from,gasLimit:null===(x=h.gasLimit)||void 0===x?void 0:x.toString(),nonce:h.nonce}}),[2,h]}})}),function(e,t){return n.apply(this,arguments)}),[e,t])}}},87752:function(n,e,t){t.d(e,{x:function(){return c},y:function(){return s}});var r=t(70865),o=t(96670),a=t(72978),i=t(4996),u=(0,o.Z)((0,r.Z)({},(0,i.FL)(function(){return sessionStorage})),{delayInit:!0}),c=(0,i.O4)("feature-farm-api","pkg",u);function s(n){return(0,a.Dv)(n)}c.onMount=function(n){"farmApi"===new URL(window.location.href).searchParams.get("use")&&n("api")}},68175:function(n,e,t){t.d(e,{X:function(){return l},a:function(){return s}});var r=t(50930),o=t(74086),a=t(2784),i=t(49857),u=t(76166),c=[];function s(n,e){var t=(0,u.g)().chainId,s=(0,i.ZP)(t&&[o.sR,"blockNumber",t]).data,l=void 0===s?0:s;(0,a.useEffect)(n.bind(null,l),[l].concat((0,r.Z)(e||c)))}function l(n,e){var t=(0,u.g)().chainId,s=(0,i.ZP)(t&&[o.KI,"blockNumber",t]).data,l=void 0===s?0:s;(0,a.useEffect)(n.bind(null,l),[l].concat((0,r.Z)(e||c)))}},8919:function(n,e,t){t.d(e,{f6:function(){return S},Dx:function(){return j},E2:function(){return W},w5:function(){return L},Cs:function(){return I},Iu:function(){return A}});var r=t(98788),o=t(5163),a=t(6391),i=t.n(a),u=t(65342),c=t(74086),s=t(36695),l=t(2784),d=t(43997),f=t(44291),p=t(2303),v=t(81834),h=t(62704);t(80405),t(68175);var x=t(87752),g=t(24734),m=t(76166),Z=t(3479),w=t(61973),k=t(18426),b=t(16844),C=t(65664),y=t(5994),P=function(n){var e,t,r,o,a,u,c,s;return{allowance:n.userData?new(i())(n.userData.allowance):v.HW,tokenBalance:n.userData?new(i())(n.userData.tokenBalance):v.HW,stakedBalance:n.userData?new(i())(n.userData.stakedBalance):v.HW,earnings:n.userData?new(i())(n.userData.earnings):v.HW,proxy:{allowance:(null==n?void 0:null===(e=n.userData)||void 0===e?void 0:e.proxy)?new(i())(null==n?void 0:null===(t=n.userData)||void 0===t?void 0:t.proxy.allowance):v.HW,tokenBalance:(null==n?void 0:null===(r=n.userData)||void 0===r?void 0:r.proxy)?new(i())(null==n?void 0:null===(o=n.userData)||void 0===o?void 0:o.proxy.tokenBalance):v.HW,stakedBalance:(null==n?void 0:null===(a=n.userData)||void 0===a?void 0:a.proxy)?new(i())(null==n?void 0:null===(u=n.userData)||void 0===u?void 0:u.proxy.stakedBalance):v.HW,earnings:(null==n?void 0:null===(c=n.userData)||void 0===c?void 0:c.proxy)?new(i())(null==n?void 0:null===(s=n.userData)||void 0===s?void 0:s.proxy.earnings):v.HW}}},D=function(n){var e=n.lpAddress,t=n.lpSymbol,r=n.pid,o=n.vaultPid,a=n.dual,u=n.multiplier,s=n.isCommunity,l=n.auctionHostingStartSeconds,d=n.quoteTokenPriceBusd,f=n.tokenPriceBusd,p=n.boosted,h=n.infoStableSwapAddress,x=(0,b.Z)(l)?null:new Date(1e3*l),g=x?(0,w.Z)(x,c.ki):null,m=Date.now();return{lpAddress:e,lpSymbol:t,pid:r,vaultPid:o,dual:a,multiplier:u,isCommunity:s||!!(x&&g&&x.getTime()<m&&g.getTime()>m),auctionHostingEndDate:null==g?void 0:g.toJSON(),quoteTokenPriceBusd:d,tokenPriceBusd:f,token:(0,C.iG)(n.token),quoteToken:(0,C.iG)(n.quoteToken),userData:P(n),tokenAmountTotal:n.tokenAmountTotal?new(i())(n.tokenAmountTotal):v.HW,quoteTokenAmountTotal:n.quoteTokenAmountTotal?new(i())(n.quoteTokenAmountTotal):v.HW,lpTotalInQuoteToken:n.lpTotalInQuoteToken?new(i())(n.lpTotalInQuoteToken):v.HW,lpTotalSupply:n.lpTotalSupply?new(i())(n.lpTotalSupply):v.HW,lpTokenPrice:n.lpTokenPrice?new(i())(n.lpTokenPrice):v.HW,tokenPriceVsQuote:n.tokenPriceVsQuote?new(i())(n.tokenPriceVsQuote):v.HW,poolWeight:n.poolWeight?new(i())(n.poolWeight):v.HW,boosted:p,isStable:Boolean(h)}},T=function(n){return n.farms.data.find(function(n){return 2===n.pid})},H=function(n,e){return function(t){return t.farms.data.find(function(t){return t[n]===e})}};(0,y.P1)([T],function(n){var e=null==n?void 0:n.tokenPriceBusd;return new(i())(e)});var I=function(){var n=(0,f.TL)(),e=(0,u.Z)(),t=e.account,a=e.chainId,i=(0,h.A)(t,a),s=i.proxyAddress,l=i.proxyCreated,d=i.isLoading,v=(0,x.y)(x.x);(0,p.Z)(a?["publicFarmData",a]:null,(0,r.Z)(function(){var e,t;return(0,o.__generator)(this,function(e){switch(e.label){case 0:return[4,(0,g.getFarmConfig)(a)];case 1:return t=e.sent().map(function(n){return n.pid}),n((0,Z.eG)({pids:t,chainId:a,flag:v})),[2]}})}),{refreshInterval:"api"===v?5e4:c.KI}),(0,p.Z)(t&&a&&!d?l?["farmsWithUserData",t,s,a]:["farmsWithUserData",t,a]:null,(0,r.Z)(function(){var e,r,i;return(0,o.__generator)(this,function(e){switch(e.label){case 0:return[4,(0,g.getFarmConfig)(a)];case 1:return r=e.sent().map(function(n){return n.pid}),i=l?{account:t,pids:r,proxyAddress:s,chainId:a}:{account:t,pids:r,chainId:a},n((0,Z.IV)(i)),[2]}})}),{refreshInterval:c.KI})},W=function(){var n=(0,m.g)().chainId;return(0,d.v9)((0,l.useMemo)(function(){var e;return(0,y.P1)(function(n){return n.farms},function(e){var t,r=e.data.map(D).filter(function(e){return e.token.chainId===n}),o=e.loadArchivedFarmsData,a=e.userDataLoaded;return{loadArchivedFarmsData:o,userDataLoaded:a,data:r,poolLength:e.poolLength,regularCakePerBlock:e.regularCakePerBlock}})},[n]))},S=function(n){var e=(0,l.useMemo)(function(){var e;return(0,y.P1)([H("pid",n)],function(n){return D(n)})},[n]);return(0,d.v9)(e)},j=function(n){var e=(0,l.useMemo)(function(){var e;return(0,y.P1)([H("pid",n)],function(n){var e,t=P(n),r=t.allowance,o=t.tokenBalance,a=t.stakedBalance;return{allowance:r,tokenBalance:o,stakedBalance:a,earnings:t.earnings,proxy:t.proxy}})},[n]);return(0,d.v9)(e)},L=function(n){var e=(0,l.useMemo)(function(){var e;return(0,y.P1)([H("lpSymbol",n)],function(n){var e=v.HW;if(n){var t=n.lpTotalInQuoteToken?new(i())(n.lpTotalInQuoteToken):v.HW,r=n.lpTotalSupply?new(i())(n.lpTotalSupply):v.HW;if(r.gt(0)&&t.gt(0)){var o=new(i())(n.tokenPriceBusd),a=n.tokenAmountTotal?new(i())(n.tokenAmountTotal):v.HW,u=o.times(a).times(2),c=(0,k.U4)(r);e=u.div(c)}}return e})},[n]);return(0,d.v9)(e)},A=function(){var n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{forceMainnet:!1}).forceMainnet,e=(0,s.S9)({forceMainnet:n});return(0,l.useMemo)(function(){return e?new(i())(e.toSignificant(6)):v.HW},[e])}},62704:function(n,e,t){t.d(e,{A:function(){return l}});var r=t(98788),o=t(5163),a=t(49857),i=t(74086),u=t(76269),c=t(6429),s=t(97640),l=function(n,e){var t=(0,u.gh)(),l=s.P4.includes(e),d=(0,a.ZP)(n&&l&&["proxyAddress",n],(0,r.Z)(function(){return(0,o.__generator)(this,function(e){return[2,t.proxyContract(n)]})})),f=d.data,p=d.status,v=d.mutate;return{proxyAddress:f,isLoading:!!l&&p!==c.iF.Fetched,proxyCreated:f&&f!==i.h5,refreshProxyAddress:v}}},64343:function(n,e,t){var r=t(70865),o=t(96670),a=t(26297),i=t(52322),u=t(89495),c=t(2784),s=t(76597),l=function(n){var e=n.value,t=n.color,l=void 0===t?"text":t,d=n.decimals,f=n.isDisabled,p=void 0!==f&&f,v=n.unit,h=n.prefix,x=n.onClick,g=(0,a.Z)(n,["value","color","decimals","isDisabled","unit","prefix","onClick"]),m=(0,c.useMemo)(function(){return h?{prefix:h}:{}},[h]),Z=(0,c.useMemo)(function(){return v?{suffix:v}:{}},[v]);return(0,i.jsx)(s.ZP,(0,o.Z)((0,r.Z)({start:0,preserveValue:!0,delay:0,end:e},m,Z),{decimals:void 0===d?3:d,duration:1,separator:",",children:function(n){var e=n.countUpRef;return(0,i.jsx)(u.Z,(0,o.Z)((0,r.Z)({color:p?"textDisabled":l,onClick:x},g),{children:(0,i.jsx)("span",{ref:e})}))}}))};e.Z=l},50420:function(n,e,t){var r=t(70865),o=t(96670),a=t(26297),i=t(52322);t(2784);var u=t(76903),c=t(13670),s=t(58207),l=t(89495),d=t(21844),f=function(n){var e=n.value,t=n.placeholder,f=n.onUserInput,p=n.currencyValue,v=n.inputProps,h=n.innerRef,x=n.isWarning,g=n.decimals,m=n.unit,Z=n.switchEditingUnits,w=(0,a.Z)(n,["value","placeholder","onUserInput","currencyValue","inputProps","innerRef","isWarning","decimals","unit","switchEditingUnits"]),k=function(n){n.currentTarget.validity.valid&&f(n.currentTarget.value.replace(/,/g,"."))};return(0,i.jsx)(d.FX,(0,o.Z)((0,r.Z)({isWarning:void 0!==x&&x},w),{children:(0,i.jsxs)(u.Z,{justifyContent:"flex-end",children:[(0,i.jsxs)(c.Z,{children:[(0,i.jsxs)(u.Z,{alignItems:"center",children:[(0,i.jsx)(d.Fy,(0,r.Z)({pattern:"^[0-9]*[.,]?[0-9]{0,".concat(void 0===g?18:g,"}$"),inputMode:"decimal",min:"0",value:e,onChange:k,placeholder:void 0===t?"0.0":t,ref:h},v)),m&&(0,i.jsx)(d.HH,{children:m})]}),p&&(0,i.jsx)(l.Z,{fontSize:"12px",textAlign:"right",color:"textSubtle",children:p})]}),Z&&(0,i.jsx)(u.Z,{alignItems:"center",pl:"12px",children:(0,i.jsx)(d.sN,{scale:"sm",variant:"text",onClick:Z,children:(0,i.jsx)(s.Z,{color:"textSubtle"})})})]})}))};e.Z=f},21844:function(n,e,t){t.d(e,{FX:function(){return h},Fy:function(){return x},HH:function(){return v},sN:function(){return p}});var r=t(92228),o=t(3411),a=t(13670),i=t(13023),u=t(89495),c=t(93058);function s(){var n=(0,r.Z)(["\n  width: 16px;\n"]);return s=function(){return n},n}function l(){var n=(0,r.Z)(["\n  margin-left: 4px;\n  text-align: right;\n  color: ",";\n  white-space: nowrap;\n"]);return l=function(){return n},n}function d(){var n=(0,r.Z)(["\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 16px;\n  box-shadow: ",";\n  padding: 8px 16px;\n"]);return d=function(){return n},n}function f(){var n=(0,r.Z)(["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: ",";\n  border: none;\n\n  ::placeholder {\n    color: ",";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"]);return f=function(){return n},n}var p=(0,o.ZP)(c.Z).withConfig({componentId:"sc-e3b8048d-0"})(s()),v=(0,o.ZP)(u.Z).withConfig({componentId:"sc-e3b8048d-1"})(l(),function(n){return n.theme.colors.textSubtle}),h=(0,o.ZP)(a.Z).withConfig({componentId:"sc-e3b8048d-2"})(d(),function(n){return n.theme.colors.input},function(n){return n.theme.colors.inputSecondary},function(n){var e=n.theme,t=n.isWarning;return e.shadows[t?"warning":"inset"]}),x=(0,o.ZP)(i.Z).withConfig({componentId:"sc-e3b8048d-3"})(f(),function(n){var e=n.textAlign;return void 0===e?"right":e},function(n){return n.theme.colors.textSubtle})},6099:function(n,e,t){t.d(e,{L:function(){return s},N:function(){return c}});var r=t(52322);t(2784);var o=t(81916),a=t(77651),i=t(48608),u=t(93058),c=function(n){var e=n.onClick,t=n.expanded,i=n.children;return(0,r.jsxs)(u.Z,{"aria-label":"Hide or show expandable content",onClick:e,children:[i,t?(0,r.jsx)(o.Z,{color:"invertedContrast"}):(0,r.jsx)(a.Z,{color:"invertedContrast"})]})};c.defaultProps={expanded:!1};var s=function(n){var e=n.onClick,t=n.expanded,u=n.children;return(0,r.jsx)(i.Z,{variant:"text","aria-label":"Hide or show expandable content",onClick:e,endIcon:t?(0,r.jsx)(o.Z,{color:"primary"}):(0,r.jsx)(a.Z,{color:"primary"}),children:u})};s.defaultProps={expanded:!1}},95134:function(n,e,t){var r=t(92228),o=t(3411),a=t(78545);function i(){var n=(0,r.Z)(["\n  ","\n"]);return i=function(){return n},n}var u=o.ZP.div.withConfig({componentId:"sc-df4f0a61-0"})(i(),a.Dh);u.defaultProps={p:"24px"},e.Z=u},13023:function(n,e,t){var r=t(92228),o=t(3411),a=t(66803);function i(){var n=(0,r.Z)(["\n  background-color: ",";\n  border-radius: 16px;\n  box-shadow: ",";\n  color: ",";\n  display: block;\n  font-size: 16px;\n  height: ",";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n  border: 1px solid ",";\n\n  &::placeholder {\n    color: ",";\n  }\n\n  &:disabled {\n    background-color: ",";\n    box-shadow: none;\n    color: ",";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ",";\n  }\n"]);return i=function(){return n},n}var u=function(n){var e=n.isSuccess,t=n.isWarning,r=n.theme;return void 0!==t&&t?r.shadows.warning:void 0!==e&&e?r.shadows.success:r.shadows.inset},c=function(n){var e=n.scale,t=void 0===e?a.Q.MD:e;switch(t){case a.Q.SM:return"32px";case a.Q.LG:return"48px";case a.Q.MD:default:return"40px"}},s=o.ZP.input.withConfig({componentId:"sc-c22a9310-0"})(i(),function(n){return n.theme.colors.input},u,function(n){return n.theme.colors.text},c,function(n){return n.theme.colors.inputSecondary},function(n){return n.theme.colors.textSubtle},function(n){return n.theme.colors.backgroundDisabled},function(n){return n.theme.colors.textDisabled},function(n){var e=n.theme,t=n.isWarning,r=n.isSuccess;return t?e.shadows.warning:r?e.shadows.success:e.shadows.focus});s.defaultProps={scale:a.Q.MD,isSuccess:!1,isWarning:!1},e.Z=s},66803:function(n,e,t){t.d(e,{Q:function(){return r}});var r={SM:"sm",MD:"md",LG:"lg"}},77651:function(n,e,t){var r=t(70865),o=t(96670),a=t(52322);t(2784);var i=t(62923),u=function(n){return(0,a.jsx)(i.Z,(0,o.Z)((0,r.Z)({viewBox:"0 0 24 24"},n),{children:(0,a.jsx)("path",{d:"M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"})}))};e.Z=u},81916:function(n,e,t){var r=t(70865),o=t(96670),a=t(52322);t(2784);var i=t(62923),u=function(n){return(0,a.jsx)(i.Z,(0,o.Z)((0,r.Z)({viewBox:"0 0 24 24"},n),{children:(0,a.jsx)("path",{d:"M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z"})}))};e.Z=u},58207:function(n,e,t){var r=t(70865),o=t(96670),a=t(52322);t(2784);var i=t(62923),u=function(n){return(0,a.jsx)(i.Z,(0,o.Z)((0,r.Z)({viewBox:"0 0 24 25"},n),{children:(0,a.jsx)("path",{d:"M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z"})}))};e.Z=u}}]);
//# sourceMappingURL=6099-bf92912464c54e81.js.map