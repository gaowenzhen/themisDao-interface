(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5755],{33880:function(t){var n=RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");t.exports=function(t){return n.test(t)}},85505:function(t,n,e){var r=e(53366),o=e(86152),a=e(15125);t.exports=function(t){return"string"==typeof t||!o(t)&&a(t)&&"[object String]"==r(t)}},6605:function(t,n,e){"use strict";var r=e(70865),o=e(96670),a=e(26297),i=e(92228),u=e(52322),s=e(89495),c=e(59482),d=e(76903),l=e(74009),f=e(3411),p=e(84785);function h(){var t=(0,i.Z)(["\n  font-size: 32px;\n  line-height: 1.1;\n\n  "," {\n    font-size: 40px;\n  }\n"]);return h=function(){return t},t}var x={notation:"standard",displayThreshold:.001,tokenPrecision:!0},m=(0,f.ZP)(s.Z).withConfig({componentId:"sc-17fac512-0"})(h(),function(t){return t.theme.mediaQueries.lg}),g=function(t){var n=t.value,e=t.inputSymbol,i=t.outputSymbol,f=t.children,h=t.format,g=(0,a.Z)(t,["value","inputSymbol","outputSymbol","children","format"]);return n?(0,u.jsxs)(c.Z,(0,o.Z)((0,r.Z)({alignItems:"baseline"},g),{children:[(0,u.jsxs)(d.Z,{alignItems:"inherit",children:[(0,u.jsx)(m,{mr:"8px",bold:!0,children:void 0===h||h?(0,p.d)("string"==typeof n?parseFloat(n):n,x):n}),e&&i&&(0,u.jsx)(s.Z,{color:"textSubtle",fontSize:"20px",bold:!0,lineHeight:1.1,children:"".concat(e,"/").concat(i)})]}),f]})):(0,u.jsx)(l.Z,(0,r.Z)({height:"36px",width:"128px"},g))};n.Z=g},84785:function(t,n,e){"use strict";e.d(n,{d:function(){return a}});var r=e(1246),o=e.n(r),a=function(t,n){var e,r=n||{notation:t>=1e4?"compact":"standard"},a=r.notation,i=r.displayThreshold,u=r.tokenPrecision,s=r.isInteger;if(0===t)return s?"0":"0.00";if(!t)return"-";if(i&&t<i)return"<".concat(i);if(t<1&&!u)return(e=t).toFixed(9).match(/^-?\d*\.?0*\d{0,2}/)[0];var c=2;u&&(c=t<1?3:2);var d="0.".concat("0".repeat(c),"a");"standard"===(void 0===a?t>=1e4?"compact":"standard":a)&&(d="0,0.".concat("0".repeat(c))),s&&t<1e3&&(d="0");var l=parseFloat(t.toFixed(c));return o()(l).format(d).toUpperCase()}},81583:function(t,n,e){"use strict";e.r(n);var r=e(70865),o=e(96670),a=e(92228),i=e(52322),u=e(2784),s=e(61660),c=e(50603),d=e(25556),l=e(3131),f=e(47857),p=e(81073),h=e(47055),x=e(19081),m=e(19914),g=e(65957),v=e(30433),Z=e(2303),y=e(49857),k=e(76269),b=e(27507),j=e(18426),S=e(97913),w=e(3411),I=e(76903),C=e(59482),A=e(89495),D=e(6605),R=e(8003),z=e(11900),E=e(70207),G=e(17823);function H(){var t=(0,a.Z)(["\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  background: ",";\n"]);return H=function(){return t},t}var K={gradient1:"#00E7B0",gradient2:"#0C8B6C",stroke:"#31D0AA"},O=(0,w.ZP)(I.Z).withConfig({componentId:"sc-bac33bc6-0"})(H(),function(t){var n=t.theme;return t.isMobile?n.card.background:n.colors.gradientBubblegum}),P=function(t){var n=t.rounds,e=(0,Z.Z)("chainlinkChartHover").data,r=(0,z.Z)().price,o=(0,g.$G)(),a=o.t,u=o.currentLanguage.locale,s=(0,G.ZR)().token;return(0,i.jsx)(D.Z,{width:"100%",value:e?e.answer:(0,j.U1)(r,4,8),inputSymbol:s.symbol,outputSymbol:"USD",format:!1,flexWrap:"wrap",alignItems:"center",columnGap:"12px",children:e&&(0,i.jsxs)(C.Z,{minWidth:"51%",alignItems:"flex-end",gap:"12px",height:"22px",children:[(0,i.jsx)(A.Z,{color:"textSubtle",lineHeight:1.1,children:new Date(1e3*e.startedAt).toLocaleString(u,{year:"numeric",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}),n[e.roundId]&&(0,i.jsxs)(A.Z,{fontSize:"20px",color:"secondary",bold:!0,lineHeight:1.1,children:[a("Round"),": #",n[e.roundId].epoch]})]})})},W=function(t){var n,e,a,s,c,d,l,f,p=(n=(0,G.ZR)().chainlinkOracleAddress,e=(0,k.Hn)(n,!1),a=(0,v.Av)([e,"latestRound"],{dedupingInterval:1e4,refreshInterval:1e4,compare:function(t,n){return!!t&&!!n&&t.eq(n)}}),s=(0,G.ZR)().chainlinkOracleAddress,c=(0,u.useMemo)(function(){return a.data?Array.from({length:50}).map(function(t,n){return{address:s,name:"getRoundData",params:[a.data.sub(n)]}}):null},[a.data,s]),l=(d=(0,v.d5)(b,c,{use:[v.XS]})).data,f=d.error,{data:(0,u.useMemo)(function(){var t;return null!==(t=null==l?void 0:l.filter(function(t){return!!t&&t.answer.gt(0)}).map(function(t){var n=t.answer,e=t.roundId,r=t.startedAt;return{answer:(0,j.U1)(n,4,8),roundId:e.toString(),startedAt:r.toNumber()}}))&&void 0!==t?t:[]},[l]),error:f}).data,h=(0,S.Z_)();return p.length?(0,i.jsxs)(O,(0,o.Z)((0,r.Z)({},t),{children:[(0,i.jsx)(C.Z,{flexDirection:"row",pt:"12px",px:"20px",alignItems:"center",flexWrap:"wrap",columnGap:"12px",height:["56px",,,,"44px"],children:(0,i.jsx)(P,{rounds:h})}),(0,i.jsx)(I.Z,{height:["calc(100% - 56px)"],children:(0,i.jsx)(F,{rounds:h,data:p})})]})):(0,i.jsx)(m.fn,{})},F=function(t){var n,e=t.rounds,a=t.data,m=(0,g.$G)().currentLanguage.locale,v=(0,x.ZP)(),Z=v.isDark,k=v.theme,b=(n=(0,y.kY)().mutate,(0,u.useCallback)(function(t){n("chainlinkChartHover",t)},[n]));return(0,i.jsx)(s.h,{children:(0,i.jsxs)(c.T,{data:a,margin:{top:20,right:0,left:0,bottom:5},onMouseLeave:function(){b(void 0)},children:[(0,i.jsx)("defs",{children:(0,i.jsxs)("linearGradient",{id:"gradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,i.jsx)("stop",{offset:"5%",stopColor:K.gradient1,stopOpacity:.34}),(0,i.jsx)("stop",{offset:"100%",stopColor:K.gradient2,stopOpacity:0})]})}),(0,i.jsx)(d.K,{dataKey:"startedAt",tickFormatter:function(t){return new Date(1e3*t).toLocaleString(m,{hour:"numeric",minute:"2-digit",hourCycle:"h24"})},color:k.colors.text,fontSize:"12px",minTickGap:8,reversed:!0,tick:{fill:k.colors.text}}),(0,i.jsx)(d.K,{dataKey:"roundId",hide:!0}),(0,i.jsx)(l.B,{dataKey:"answer",tickCount:6,scale:"linear",color:k.colors.textSubtle,fontSize:"12px",domain:["auto","auto"],orientation:"right",tick:{dx:10,fill:k.colors.textSubtle}}),(0,i.jsx)(f.u,{cursor:{stroke:k.colors.textSubtle,strokeDasharray:"3 3"},contentStyle:{display:"none"},formatter:function(t,n,e){return b(e.payload),null}}),(0,i.jsx)(p.u,{dataKey:"answer",type:"linear",stroke:K.stroke,fill:"url(#gradient)",strokeWidth:2,activeDot:function(t){return e[t.payload.roundId]?(0,i.jsx)(L,(0,r.Z)({},t)):null},dot:function(t){return e[t.payload.roundId]?(0,i.jsx)(h.o,(0,o.Z)((0,r.Z)({},t),{r:4,fill:Z?k.colors.gold:k.colors.secondary,fillOpacity:1,strokeWidth:0})):null}})]})})},L=function(t){var n=(0,R.Z)().swiper,e=(0,S.dm)(),a=(0,x.ZP)().theme;return(0,i.jsx)(h.o,(0,o.Z)((0,r.Z)({},t),{r:12,stroke:a.colors.primary,strokeWidth:10,fill:a.colors.background,style:{cursor:"pointer"},onClick:function(){var r=e.findIndex(function(n){return n.closeOracleId===t.payload.roundId});r>=0&&n&&(n.slideTo(r),n.el.dispatchEvent(new Event(E.o4)))}}))};n.default=W}}]);
//# sourceMappingURL=5755.30cfa5011f3145a2.js.map