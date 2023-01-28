"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6150],{40346:function(n,e,t){t.d(e,{L:function(){return r},Z:function(){return k}});var r,o,i=t(70865),s=t(96670),l=t(26297),a=t(52322),d=t(65957),c=t(18397),u=t(30306),f=t(57499),v=t(39010),p=t(94153),h=t(40230),m=t(48608),C=t(33108),x=t(51523),Z=t(98788),g=t(5163);(0,Z.Z)(function(n,e,t,r){var o,i;return(0,g.__generator)(this,function(i){switch(i.label){case 0:return o=r?C.X[r]?void 0:r:void 0,[4,window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:n,symbol:e,decimals:t,image:o}}})];case 1:return[2,i.sent()]}})});var w,j=function(){var n,e,t,r,o;return!(null==window?void 0:null===(n=window.ethereum)||void 0===n?void 0:n.isSafePal)&&((null==window?void 0:null===(e=window.ethereum)||void 0===e?void 0:e.isMetaMask)||(null==window?void 0:null===(t=window.ethereum)||void 0===t?void 0:t.isTrust)||(null==window?void 0:null===(r=window.ethereum)||void 0===r?void 0:r.isCoinbaseWallet)||(null==window?void 0:null===(o=window.ethereum)||void 0===o?void 0:o.isTokenPocket))};(w=r||(r={}))[w.NO_TEXT=0]="NO_TEXT",w[w.TEXT=1]="TEXT",w[w.TEXT_WITH_ASSET=2]="TEXT_WITH_ASSET";var y={Binance:c.Z,"Coinbase Wallet":u.Z,Opera:f.Z,TokenPocket:v.Z,"Trust Wallet":p.Z,MetaMask:h.Z},b=function(n,e){var t,r,o,s,l=(0,i.Z)({width:"16px"},n&&{ml:n});if(e&&y[e]){var d=y[e];return(0,a.jsx)(d,(0,i.Z)({},l))}return(null==window?void 0:null===(t=window.ethereum)||void 0===t?void 0:t.isTrust)?(0,a.jsx)(p.Z,(0,i.Z)({},l)):(null==window?void 0:null===(r=window.ethereum)||void 0===r?void 0:r.isCoinbaseWallet)?(0,a.jsx)(u.Z,(0,i.Z)({},l)):(null==window?void 0:null===(o=window.ethereum)||void 0===o?void 0:o.isTokenPocket)?(0,a.jsx)(v.Z,(0,i.Z)({},l)):(null==window||null===(s=window.ethereum)||void 0===s||s.isMetaMask,(0,a.jsx)(h.Z,(0,i.Z)({},l)))},k=function(n){var e,t,o,c=n.tokenAddress,u=n.tokenSymbol,f=n.tokenDecimals,v=n.tokenLogo,p=n.textOptions,h=void 0===p?r.NO_TEXT:p,Z=n.marginTextBetweenLogo,g=(0,l.Z)(n,["tokenAddress","tokenSymbol","tokenDecimals","tokenLogo","textOptions","marginTextBetweenLogo"]),w=(0,d.$G)().t,y=(0,x.mA)(),k=y.connector,T=y.isConnected,I=j();return(!k||"Binance"!==k.name)&&k&&k.watchAsset&&T&&I?(0,a.jsxs)(m.Z,(0,s.Z)((0,i.Z)({},g),{onClick:function(){var n,e=v?C.X[v]?void 0:v:void 0;null===(n=k.watchAsset)||void 0===n||n.call(k,{address:c,symbol:u,image:e,decimals:f})},children:[h!==r.NO_TEXT&&(h===r.TEXT?w("Add to Wallet"):w("Add %asset% to Wallet",{asset:u})),b(void 0===Z?"0px":Z,null==k?void 0:k.name)]})):null}},46317:function(n,e,t){t.d(e,{Z:function(){return O}});var r=t(42838),o=t(92228),i=t(52322),s=t(48608),l=t(13670),a=t(76903),d=t(89495),c=t(17129),u=t(38934),f=t(3411),v=t(5305),p=t(65957),h=t(65664),m=t(36695),C=t(18426),x=t(51523),Z=t(33472),g=t(91790),w=t(40346);function j(){var n=(0,o.Z)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: flex-end;\n  padding: ",";\n"]);return j=function(){return n},n}function y(){var n=(0,o.Z)(["\n      padding: 8px;\n      background: ",";\n      border: 1px solid ",";\n      border-radius: "," 8px 0px 0px;\n      height: auto;\n    "]);return y=function(){return n},n}function b(){var n=(0,o.Z)(["\n  padding: 0 0.5rem;\n  ",";\n"]);return b=function(){return n},n}function k(){var n=(0,o.Z)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem 0 1rem;\n"]);return k=function(){return n},n}function T(){var n=(0,o.Z)(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  background-color: ",";\n  z-index: 1;\n"]);return T=function(){return n},n}function I(){var n=(0,o.Z)(["\n      border-radius: 0px 16px 16px 16px;\n    "]);return I=function(){return n},n}function P(){var n=(0,o.Z)(["\n  border-radius: 16px;\n  background-color: ",";\n  box-shadow: ",";\n  ",";\n"]);return P=function(){return n},n}function A(){var n=(0,o.Z)(["\n  position: absolute;\n  inset: 0;\n  opacity: 0.6;\n  background-color: ",";\n"]);return A=function(){return n},n}var M=f.ZP.div.withConfig({componentId:"sc-1ada0e41-0"})(j(),function(n){return n.selected?"0.75rem 0.5rem 0.75rem 1rem":"0.75rem 0.75rem 0.75rem 1rem"}),S=(0,f.ZP)(s.Z).attrs({variant:"text",scale:"sm"}).withConfig({componentId:"sc-1ada0e41-1"})(b(),function(n){var e=n.zapStyle,t=n.theme;return e&&(0,f.iv)(y(),t.colors.background,t.colors.cardBorder,"zap"===e?"0px":"8px")}),D=f.ZP.div.withConfig({componentId:"sc-1ada0e41-2"})(k(),function(n){return n.theme.colors.text}),N=f.ZP.div.withConfig({componentId:"sc-1ada0e41-3"})(T(),function(n){return n.theme.colors.backgroundAlt}),E=f.ZP.div.withConfig({componentId:"sc-1ada0e41-4"})(P(),function(n){return n.theme.colors.input},function(n){var e=n.theme,t=n.error;return e.shadows[t?"warning":"inset"]},function(n){return!!n.zapStyle&&(0,f.iv)(I())}),R=f.ZP.div.withConfig({componentId:"sc-1ada0e41-5"})(A(),function(n){return n.theme.colors.backgroundAlt});function O(n){var e,t=n.value,o=n.onUserInput,f=n.onInputBlur,j=n.onPercentInput,y=n.onMax,b=n.showQuickInputButton,k=n.showMaxButton,T=n.label,I=n.currency,P=n.disableCurrencySelect,A=n.hideBalance,O=n.zapStyle,_=n.beforeButton,L=n.pair,z=void 0===L?null:L,B=n.id,W=n.disabled,G=n.error,U=n.showBUSD,X=(0,x.mA)().address,F=(0,Z._h)(null!=X?X:void 0,null!=I?I:void 0),V=(0,p.$G)().t,q=z?z.liquidityToken:(null==I?void 0:I.isToken)?I:null,$=q?(0,v.UJ)(q.address):null,H=(0,m.vB)(U?I:void 0,Number.isFinite(+t)?+t:void 0);return(0,i.jsxs)(l.Z,{position:"relative",id:B,children:[(0,i.jsxs)(a.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,i.jsxs)(a.Z,{children:[_,(0,i.jsx)(S,{zapStyle:O,className:"open-currency-select-button",selected:!!I,children:(0,i.jsxs)(a.Z,{alignItems:"center",justifyContent:"space-between",children:[z?(0,i.jsx)(g.ge,{currency0:z.token0,currency1:z.token1,size:16,margin:!0}):I?(0,i.jsx)(g.Xw,{currency:I,size:"24px",style:{marginRight:"8px"}}):null,z?(0,i.jsxs)(d.Z,{id:"pair",bold:!0,children:[null==z?void 0:z.token0.symbol,":",null==z?void 0:z.token1.symbol]}):(0,i.jsx)(d.Z,{id:"pair",bold:!0,children:(I&&I.symbol&&I.symbol.length>20?"".concat(I.symbol.slice(0,4),"...").concat(I.symbol.slice(I.symbol.length-5,I.symbol.length)):null==I?void 0:I.symbol)||V("Select a currency")})]})}),q&&$?(0,i.jsxs)(a.Z,{style:{gap:"4px"},ml:"4px",alignItems:"center",children:[(0,i.jsx)(c.q,{width:"16px",buttonColor:"textSubtle",text:$,tooltipMessage:V("Token address copied")}),(0,i.jsx)(w.Z,{variant:"text",p:"0",height:"auto",width:"fit-content",tokenAddress:$,tokenSymbol:q.symbol,tokenDecimals:q.decimals,tokenLogo:(0,r.Z)(q,h.DT)?q.logoURI:void 0})]}):null]}),X&&(0,i.jsx)(d.Z,{onClick:!W&&y,color:"textSubtle",fontSize:"14px",style:{display:"inline",cursor:"pointer"},children:!(void 0!==A&&A)&&I?V("Balance: %balance%",{balance:null!==(e=null==F?void 0:F.toSignificant(6))&&void 0!==e?e:V("Loading")}):" -"})]}),(0,i.jsxs)(N,{children:[(0,i.jsxs)(E,{as:"label",zapStyle:O,error:G,children:[(0,i.jsx)(D,{children:(0,i.jsx)(u.$,{error:G,disabled:W,className:"token-amount-input",value:t,onBlur:f,onUserInput:function(n){o(n)}})}),!!I&&U&&Number.isFinite(H)&&(0,i.jsx)(a.Z,{justifyContent:"flex-end",mr:"1rem",children:(0,i.jsx)(a.Z,{maxWidth:"200px",children:(0,i.jsxs)(d.Z,{fontSize:"12px",color:"textSubtle",children:["~",(0,C.uf)(H)," USD"]})})}),(0,i.jsx)(M,{selected:void 0!==P&&P,children:X&&I&&(null==F?void 0:F.greaterThan(0))&&!W&&"To"!==T&&(0,i.jsxs)(a.Z,{alignItems:"right",justifyContent:"right",children:[void 0!==b&&b&&j&&[25,50,75].map(function(n){return(0,i.jsxs)(s.Z,{onClick:function(){j(n)},scale:"xs",mr:"5px",variant:"secondary",style:{textTransform:"uppercase"},children:[n,"%"]},"btn_quickCurrency".concat(n))}),k&&(0,i.jsx)(s.Z,{onClick:function(n){n.stopPropagation(),n.preventDefault(),null==y||y()},scale:"xs",variant:"secondary",style:{textTransform:"uppercase"},children:V("Max")})]})})]}),W&&(0,i.jsx)(R,{})]})]})}},34188:function(n,e,t){var r,o,i,s;t.d(e,{Hv:function(){return i},L0:function(){return s}}),(r=i||(i={}))[r.search=0]="search",r[r.manage=1]="manage",r[r.importToken=2]="importToken",r[r.importList=3]="importList",(o=s||(s={})).LIQUIDITY="LIQUIDITY",o.SWAP_LIMITORDER="SWAP_LIMITORDER"},23475:function(n,e,t){t.d(e,{ht:function(){return O},pM:function(){return R},rD:function(){return E}});var r=t(42838),o=t(70865),i=t(96670),s=t(26297),l=t(92228),a=t(52322),d=t(2784),c=t(3411),u=t(5159),f=t(89495),v=t(18493),p=t(73697),h=t(48608),m=t(13670),C=t(33441),x=t(76903),Z=t(62208),g=t(65957),w=t(94250),j=t(65664),y=t(76166),b=t(77253),k=t(5305),T=t(40346);function I(){var n=(0,l.Z)(["\n  width: 100%;\n"]);return I=function(){return n},n}function P(){var n=(0,l.Z)(["\n  padding: 24px;\n"]);return P=function(){return n},n}function A(){var n=(0,l.Z)(["\n  padding: 24px 0;\n"]);return A=function(){return n},n}var M=c.ZP.div.withConfig({componentId:"sc-298512e5-0"})(I()),S=(0,c.ZP)(b.Tz).withConfig({componentId:"sc-298512e5-1"})(P()),D=(0,c.ZP)(b.lg).withConfig({componentId:"sc-298512e5-2"})(A());function N(n){var e=n.pendingText,t=(0,g.$G)().t;return(0,a.jsxs)(M,{children:[(0,a.jsx)(D,{children:(0,a.jsx)(u.Z,{})}),(0,a.jsxs)(b.Tz,{gap:"12px",justify:"center",children:[(0,a.jsx)(f.Z,{fontSize:"20px",children:t("Waiting For Confirmation")}),(0,a.jsx)(b.Tz,{gap:"12px",justify:"center",children:(0,a.jsx)(f.Z,{bold:!0,small:!0,textAlign:"center",children:e})}),(0,a.jsx)(f.Z,{small:!0,color:"textSubtle",textAlign:"center",children:t("Confirm this transaction in your wallet")})]})]})}function E(n){var e=n.onDismiss,t=n.chainId,o=n.hash,i=n.currencyToAdd,s=(0,g.$G)().t,l=(0,w.pu)(i,t);return(0,a.jsx)(M,{children:(0,a.jsxs)(S,{children:[(0,a.jsx)(D,{children:(0,a.jsx)(v.Z,{strokeWidth:.5,width:"90px",color:"primary"})}),(0,a.jsxs)(b.Tz,{gap:"12px",justify:"center",children:[(0,a.jsx)(f.Z,{fontSize:"20px",children:s("Transaction Submitted")}),t&&o&&(0,a.jsx)(p.Z,{external:!0,small:!0,href:(0,k.C)(o,"transaction",t),children:s("View on %site%",{site:(0,k.X0)(t)})}),i&&(0,a.jsx)(T.Z,{variant:"tertiary",mt:"12px",width:"fit-content",marginTextBetweenLogo:"6px",textOptions:T.L.TEXT_WITH_ASSET,tokenAddress:l.address,tokenSymbol:i.symbol,tokenDecimals:l.decimals,tokenLogo:(0,r.Z)(l,j.DT)?l.logoURI:void 0}),(0,a.jsx)(h.Z,{onClick:e,mt:"20px",children:s("Close")})]})]})})}function R(n){var e=n.bottomContent,t=n.topContent;return(0,a.jsxs)(M,{children:[(0,a.jsx)(m.Z,{children:t()}),(0,a.jsx)(m.Z,{children:e()})]})}function O(n){var e=n.message,t=n.onDismiss,r=(0,g.$G)().t;return(0,a.jsxs)(M,{children:[(0,a.jsxs)(b.Tz,{justify:"center",children:[(0,a.jsx)(C.Z,{color:"failure",width:"64px"}),(0,a.jsx)(f.Z,{color:"failure",style:{textAlign:"center",width:"85%",wordBreak:"break-word"},children:e})]}),t?(0,a.jsx)(x.Z,{justifyContent:"center",pt:"24px",children:(0,a.jsx)(h.Z,{onClick:t,children:r("Dismiss")})}):null]})}var _=function(n){var e=n.title,t=n.onDismiss,r=n.customOnDismiss,l=n.attemptingTxn,c=n.hash,u=n.pendingText,f=n.content,v=n.currencyToAdd,p=(0,s.Z)(n,["title","onDismiss","customOnDismiss","attemptingTxn","hash","pendingText","content","currencyToAdd"]),h=(0,y.g)().chainId,m=(0,d.useCallback)(function(){r&&r(),null==t||t()},[r,t]);return h?(0,a.jsx)(Z.ZP,(0,i.Z)((0,o.Z)({title:e,headerBackground:"gradientCardHeader"},p),{onDismiss:m,children:l?(0,a.jsx)(N,{pendingText:u}):c?(0,a.jsx)(E,{chainId:h,hash:c,onDismiss:m,currencyToAdd:v}):f()})):null};e.ZP=_},39780:function(n,e,t){var r=t(2784),o=t(90902),i=t(24273),s=t(92794),l=t(40395),a=t(76166),d=function(){var n=(0,a.g)().chainId,e=(0,l.J)();return(0,r.useMemo)(function(){if(!n||!e){console.error("Could not instantiate GelatoLimitOrders: missing chainId or library");return}if(n===o.a_.BSC)try{return new i.GelatoLimitOrders(n,e,s.uX,!1)}catch(t){console.error("Could not instantiate GelatoLimitOrders: ".concat(t.message));return}},[n,e])};e.Z=d},55706:function(n,e,t){t.d(e,{UK:function(){return r},qL:function(){return b},tz:function(){return T},re:function(){return k}});var r,o,i=t(98788),s=t(5163),l=t(90711),a=t(65957),d=t(22723),c=t(51523),u=t(92794),f=t(2784),v=t(20233),p=t(57246),h=t(52284),m=t(5305),C=t(95707),x=t(39780),Z=t(23111),g=t(76269),w=t(90902),j=t(87070),y=function(n,e,t){var r=(0,g.Ib)(null==n?void 0:n.address,!1),o=(0,f.useMemo)(function(){return[e,t]},[e,t]),i=(0,j.Wk)(r,"allowance",o).result;return(0,f.useMemo)(function(){return n&&i?w.ih.fromRawAmount(n,i.toString()):void 0},[n,i])};function b(n,e){var t,o=(0,c.mA)().address,u=(0,Z.d)().callWithGasPrice,p=(0,a.$G)().t,C=(0,d.p)().toastError,x=(null==n?void 0:null===(t=n.currency)||void 0===t?void 0:t.isToken)?n.currency:void 0,w=y(x,null!=o?o:void 0,e),j=(0,h.wB)(null==x?void 0:x.address,e),b=(0,f.useMemo)(function(){var t;return n&&e?(null===(t=n.currency)||void 0===t?void 0:t.isNative)?r.APPROVED:w?w.lessThan(n)?j?r.PENDING:r.NOT_APPROVED:r.APPROVED:r.UNKNOWN:r.UNKNOWN},[n,w,j,e]),k=(0,g.Ib)(null==x?void 0:x.address),T=(0,h.h7)(),I=(0,f.useCallback)((0,i.Z)(function(){var t,o;return(0,s.__generator)(this,function(i){switch(i.label){case 0:if(b!==r.NOT_APPROVED)return C(p("Error"),p("Approve was called unnecessarily")),console.error("approve was called unnecessarily"),[2,void 0];if(!x)return C(p("Error"),p("No token")),console.error("no token"),[2,void 0];if(!k)return C(p("Error"),p("Cannot find contract of the token %tokenAddress%",{tokenAddress:null==x?void 0:x.address})),console.error("tokenContract is null"),[2,void 0];if(!n)return C(p("Error"),p("Missing amount to approve")),console.error("missing amount to approve"),[2,void 0];if(!e)return C(p("Error"),p("No spender")),console.error("no spender"),[2,void 0];return t=!1,[4,k.estimateGas.approve(e,l.Bz).catch(function(){return t=!0,k.estimateGas.approve(e,n.quotient.toString())})];case 1:return o=i.sent(),[2,u(k,"approve",[e,t?n.quotient.toString():l.Bz],{gasLimit:(0,m.yC)(o)}).then(function(t){T(t,{summary:"Approve ".concat(n.currency.symbol),translatableSummary:{text:"Approve %symbol%",data:{symbol:n.currency.symbol}},approval:{tokenAddress:x.address,spender:e},type:"approve"})}).catch(function(n){throw(0,v.H)(n),console.error("Failed to approve token",n),(null==n?void 0:n.code)!==4001&&C(p("Error"),n.message),n})]}})}),[b,x,k,n,e,T,u,p,C]);return[b,I]}function k(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2?arguments[2]:void 0;return b((0,f.useMemo)(function(){return n?(0,C.b5)(n,e)[p.gN.INPUT]:void 0},[n,e]),u.bR[t])}function T(n){var e,t=(0,x.Z)();return b(n,null!==(e=null==t?void 0:t.erc20OrderRouter.address)&&void 0!==e?e:void 0)}(o=r||(r={}))[o.UNKNOWN=0]="UNKNOWN",o[o.NOT_APPROVED=1]="NOT_APPROVED",o[o.PENDING=2]="PENDING",o[o.APPROVED=3]="APPROVED"},23111:function(n,e,t){t.d(e,{d:function(){return h}});var r=t(98788),o=t(70865),i=t(96670),s=t(50930),l=t(5163),a=t(43997),d=t(2784),c=t(72135),u=t(72579),f=t.n(u),v=t(12483),p=t(93638);function h(){var n,e=(0,c.Fh)(),t=(0,a.v9)(function(n){return n.user.gasPrice});return{callWithGasPrice:(0,d.useCallback)((n=(0,r.Z)(function(n,r){var a,d,c,u,h,m,C=arguments;return(0,l.__generator)(this,function(l){switch(l.label){case 0:return a=C.length>2&&void 0!==C[2]?C[2]:[],d=C.length>3&&void 0!==C[3]?C[3]:null,(0,v.n_)({type:"Transaction",message:t===p.j4.rpcDefault?"Call with market gas price":"Call with gas price: ".concat(e),data:{contractAddress:n.address,methodName:r,methodArgs:a,overrides:d}}),c=f()(n,r),u=null==d?void 0:d.gasPrice,[4,c.apply(void 0,(0,s.Z)(a).concat([u?(0,o.Z)({},d):(0,i.Z)((0,o.Z)({},d),{gasPrice:e})]))];case 1:return(h=l.sent())&&(0,v.n_)({type:"Transaction",message:"Transaction sent: ".concat(h.hash),data:{hash:h.hash,from:h.from,gasLimit:null===(m=h.gasLimit)||void 0===m?void 0:m.toString(),nonce:h.nonce}}),[2,h]}})}),function(e,t){return n.apply(this,arguments)}),[e,t])}}},17129:function(n,e,t){t.d(e,{q:function(){return u}});var r=t(70865),o=t(26297),i=t(52322),s=t(51766),l=t(69689),a=t(93058),d=t(2784),c=t(79545),u=function(n){var e=n.text,t=n.tooltipMessage,u=n.width,f=n.buttonColor,v=n.icon,p=void 0===v?s.Z:v,h=(0,o.Z)(n,["text","tooltipMessage","width","buttonColor","icon"]),m=(0,d.useState)(!1),C=m[0],x=m[1],Z=(0,l.Z)(t,{placement:"auto",manualVisible:!0,trigger:"hover"}),g=Z.targetRef,w=Z.tooltip,j=function(){x(!0),setTimeout(function(){x(!1)},1e3)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{ref:g,children:(0,i.jsx)(a.Z,{onClick:function(){return(0,c.z)(e,j)},scale:"sm",variant:"text",style:{width:"auto",position:"relative"},children:(0,i.jsx)(p,(0,r.Z)({color:void 0===f?"primary":f,width:u},h))})}),C&&w]})}},5159:function(n,e,t){t.d(e,{Z:function(){return w}});var r=t(92228),o=t(52322);t(2784);var i=t(3411),s=t(70865),l=t(96670),a=t(62923),d=function(n){return(0,o.jsxs)(a.Z,(0,l.Z)((0,s.Z)({viewBox:"0 0 256 256"},n),{children:[(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M166.898 204.279C172.402 190.795 170.197 176.127 166.942 163.633C164.747 155.208 156.522 149.043 143.339 146.339C130.289 143.662 113.23 144.62 95.212 149.658C77.1941 154.696 61.9863 162.761 52.0088 171.877C41.9295 181.085 37.8164 190.7 40.0117 199.126C43.2669 211.619 48.4857 225.444 59.7919 234.228C70.9463 242.894 88.7701 247.193 118.461 238.891C148.152 230.589 161.467 217.582 166.898 204.279ZM119.268 241.986C179.746 225.075 176.514 188.072 169.929 162.798C164.622 142.43 131.106 136.301 94.4056 146.563C57.7053 156.825 31.7183 179.593 37.0251 199.961C43.6102 225.235 58.7891 258.897 119.268 241.986Z",fill:"#464649"}),(0,o.jsx)("path",{d:"M155.801 175.68C158.653 186.628 180.351 181.576 214.977 171.894C249.604 162.212 257.158 150.578 254.305 139.63C251.453 128.682 244.685 121.053 216.678 128.884C182.051 138.566 152.948 164.732 155.801 175.68Z",fill:"#606063"}),(0,o.jsx)("path",{d:"M159.97 178.737L175.437 178.709C178.284 178.704 178.523 174.429 177.474 164.815C176.82 158.816 173.457 154.101 171.27 155.477L159.942 163.875L159.97 178.737Z",fill:"#464649"}),(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M162.261 177.996C160.059 177.319 159.158 176.266 158.788 174.845C158.644 174.296 158.636 173.375 159.104 171.965C159.566 170.568 160.432 168.889 161.754 166.98C164.397 163.161 168.612 158.775 174.091 154.332C185.037 145.456 200.6 136.7 217.484 131.979C231.34 128.104 239.201 128.297 243.777 130.191C248.018 131.946 250.005 135.425 251.319 140.465C251.901 142.7 251.928 144.848 251.283 146.962C250.634 149.091 249.235 151.411 246.622 153.858C241.312 158.83 231.342 163.998 214.171 168.799C196.798 173.657 182.967 177.263 173.149 178.336C168.216 178.875 164.644 178.728 162.261 177.996ZM214.977 171.894C180.351 181.576 158.653 186.628 155.801 175.68C152.948 164.732 182.051 138.566 216.678 128.884C244.685 121.053 251.453 128.682 254.305 139.63C257.158 150.578 249.604 162.212 214.977 171.894Z",fill:"#464649"}),(0,o.jsx)("path",{d:"M169.925 161.024C176.511 186.298 179.743 223.301 119.264 240.212C58.7859 257.123 43.607 223.461 37.022 198.187C31.7151 177.819 57.7022 155.052 94.4024 144.789C131.103 134.527 164.619 140.656 169.925 161.024Z",fill:"#606063"}),(0,o.jsx)("path",{d:"M62.2322 217.512C45.5076 212.12 42.4613 203.795 40.3848 196.052L41.9594 211.275L50.2352 225.685L64.4374 238.481L80.947 244.327C82.4065 243.612 89.4986 243.299 83.1029 242.028C76.7073 240.758 72.7474 234.756 69.9914 231.378C68.2638 226.484 67.7365 219.287 62.2322 217.512Z",fill:"#464649"}),(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M166.895 202.505C172.399 189.021 170.194 174.353 166.939 161.86C164.744 153.434 156.519 147.269 143.336 144.565C130.286 141.888 113.227 142.846 95.2088 147.884C77.1909 152.922 61.9831 160.987 52.0056 170.103C41.9263 179.311 37.8132 188.926 40.0086 197.352C43.2637 209.845 48.4825 223.67 59.7887 232.454C70.9431 241.12 88.7669 245.419 118.458 237.117C148.149 228.815 161.464 215.809 166.895 202.505ZM119.264 240.212C179.743 223.301 176.511 186.298 169.925 161.024C164.619 140.656 131.103 134.527 94.4024 144.789C57.7022 155.052 31.7151 177.819 37.022 198.187C43.607 223.461 58.7859 257.123 119.264 240.212Z",fill:"#464649"}),(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M164.233 181.686C165.018 182.322 165.157 183.497 164.543 184.311C162.98 186.382 161.187 188.422 159.188 190.412C158.469 191.128 157.327 191.104 156.636 190.36C155.945 189.615 155.968 188.431 156.687 187.716C158.576 185.834 160.252 183.925 161.7 182.007C162.314 181.193 163.448 181.05 164.233 181.686ZM57.4215 216.239C57.6566 215.235 58.6323 214.619 59.6008 214.863C73.2899 218.308 91.7045 217.793 111.035 212.388C120.262 209.808 128.779 206.37 136.271 202.374C137.157 201.901 138.245 202.263 138.701 203.181C139.157 204.099 138.809 205.226 137.923 205.699C130.195 209.821 121.438 213.352 111.976 215.998C92.2044 221.527 73.1589 222.124 58.7494 218.497C57.7809 218.253 57.1863 217.242 57.4215 216.239Z",fill:"#979797"}),(0,o.jsx)("path",{d:"M159.836 163.292C164.405 180.829 141.059 195.381 109.857 204.106C78.655 212.831 51.4793 212.682 46.8428 194.887C42.2064 177.092 65.6193 162.798 96.8214 154.074C128.024 145.349 155.266 145.755 159.836 163.292Z",fill:"#464649"}),(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M145.831 183.549C154.508 176.998 157.462 170.578 155.854 164.406C154.245 158.233 148.575 154.225 137.894 153.086C127.333 151.96 113.281 153.898 97.8965 158.2C82.4985 162.506 69.3986 168.094 60.8132 174.54C52.1526 181.043 49.1801 187.461 50.825 193.774C52.4698 200.087 58.1557 204.083 68.7987 205.189C79.3491 206.285 93.384 204.285 108.782 199.98C124.166 195.678 137.251 190.028 145.831 183.549ZM110.264 205.113C141.466 196.388 164.405 180.829 159.836 163.292C155.266 145.755 128.024 145.349 96.8214 154.074C65.6193 162.798 42.2064 177.092 46.8428 194.887C51.4793 212.682 79.0614 213.838 110.264 205.113Z",fill:"#737373"}),(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M103.877 181.153C89.0555 185.297 76.4977 192.072 68.1169 199.619C67.3647 200.297 66.2249 200.214 65.5711 199.434C64.9173 198.655 64.997 197.474 65.7492 196.796C74.622 188.806 87.7006 181.803 102.936 177.543C106.034 176.676 109.107 175.955 112.134 175.375C113.114 175.187 114.056 175.858 114.237 176.873C114.419 177.889 113.771 178.864 112.792 179.052C109.86 179.614 106.881 180.313 103.877 181.153ZM123.847 175.658C123.792 174.627 124.554 173.745 125.549 173.688C132.378 173.297 138.774 173.682 144.424 174.797C145.403 174.991 146.046 175.97 145.86 176.984C145.673 177.999 144.728 178.664 143.749 178.471C138.431 177.421 132.333 177.045 125.749 177.422C124.753 177.479 123.902 176.69 123.847 175.658Z",fill:"#606063"})]}))},c=function(n){return(0,o.jsx)(a.Z,(0,l.Z)((0,s.Z)({viewBox:"0 0 128 128"},n),{children:(0,o.jsxs)("svg",{width:"128",height:"128",viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("path",{d:"M56.7204 37.5858C56.7204 45.3822 58.0271 54.1169 60.2906 60.8591C61.4246 64.2369 62.7705 67.0285 64.249 68.946C65.742 70.8826 67.1906 71.7103 68.5307 71.7103C71.1919 71.7103 74.4165 70.5307 77.8384 68.3524C81.235 66.1902 84.7001 63.1234 87.8127 59.5481C94.0844 52.3439 98.6784 43.3694 98.6784 35.942C98.6784 28.1653 97.1567 21.2636 93.9931 16.3543C90.8793 11.5222 86.1363 8.54284 79.3564 8.54284C72.6009 8.54284 66.9825 11.9157 63.0072 17.2564C59.0174 22.6164 56.7204 29.9263 56.7204 37.5858Z",fill:"#FEDC90",stroke:"#D1884F",strokeWidth:"2.89134"}),(0,o.jsx)("path",{d:"M32.7442 66.7859C39.4364 62.9222 47.2575 60.5211 53.8454 59.9252C57.1411 59.6272 60.0564 59.7876 62.336 60.3933C64.6294 61.0028 66.1079 62.0118 66.8368 63.2742C69.6116 68.0804 69.9429 76.4856 67.7501 84.8501C65.5656 93.1829 61.0085 100.957 54.6069 104.653C47.9434 108.5 40.9505 110.185 34.8292 109.454C28.7533 108.729 23.476 105.626 20.0729 99.7316C16.6658 93.8305 16.5364 87.5528 18.8757 81.7754C21.228 75.9659 26.1018 70.6209 32.7442 66.7859Z",fill:"#D1884F",stroke:"#633001",strokeWidth:"2.89134"}),(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M73.6122 7.76013C69.4145 8.86483 64.8207 11.0867 61.24 16.1556C53.2804 27.4231 51.7006 41.9592 58.5495 60.7386C65.3984 79.518 63.3431 89.9236 56.0487 98.3189C48.7543 106.714 29.475 108.685 23.3482 101.929C21.8481 100.274 17.4954 97.4588 20.3675 102.54C23.2397 107.622 30.7527 111.748 39.59 111.748C48.4273 111.748 55.5943 108.146 61.958 101.338C68.3217 94.5306 74.292 78.3883 68.3268 61.7709C60.6331 40.3385 62.8311 27.508 68.2893 19.7815C71.0879 15.8198 75.5453 12.3629 78.6077 10.5868C81.8233 8.72183 84.8797 8.42294 86.8682 8.42294C83.3332 6.65548 77.8099 6.65542 73.6122 7.76013Z",fill:"#633001"})]})}))};function u(){var n=(0,r.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return u=function(){return n},n}function f(){var n=(0,r.Z)(["\n	0% {\n		transform: translatey(0px);\n	}\n	50% {\n		transform: translatey(10px);\n	}\n	100% {\n		transform: translatey(0px);\n	}\n"]);return f=function(){return n},n}function v(){var n=(0,r.Z)(["\n  position: relative;\n"]);return v=function(){return n},n}function p(){var n=(0,r.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: "," 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"]);return p=function(){return n},n}function h(){var n=(0,r.Z)(["\n  animation: "," 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"]);return h=function(){return n},n}var m=(0,i.F4)(u()),C=(0,i.F4)(f()),x=i.ZP.div.withConfig({componentId:"sc-da0aae9d-0"})(v()),Z=(0,i.ZP)(c).withConfig({componentId:"sc-da0aae9d-1"})(p(),m),g=(0,i.ZP)(d).withConfig({componentId:"sc-da0aae9d-2"})(h(),C),w=function(n){var e=n.size,t=void 0===e?128:e;return(0,o.jsxs)(x,{children:[(0,o.jsx)(Z,{width:"".concat(.5*t,"px")}),(0,o.jsx)(g,{width:"".concat(t,"px")})]})}}}]);
//# sourceMappingURL=6150-0c39ee8097e18eca.js.map