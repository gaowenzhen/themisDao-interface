(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5389],{11640:function(n,e,r){"use strict";r.d(e,{Z:function(){return o}});var t=r(83946),i=r(19013),a=r(13882);function o(n,e){(0,a.Z)(2,arguments);var r=(0,i.Z)(n),o=(0,t.Z)(e);if(isNaN(o))return new Date(NaN);if(!o)return r;var u=r.getDate(),s=new Date(r.getTime());return(s.setMonth(r.getMonth()+o+1,0),u>=s.getDate())?s:(r.setFullYear(s.getFullYear(),s.getMonth(),u),r)}},42227:function(n,e,r){"use strict";r.d(e,{Z:function(){return o}});var t=r(19013),i=r(83946),a=r(13882);function o(n){(0,a.Z)(1,arguments);var e=(0,i.Z)(n);return(0,t.Z)(1e3*e)}},12383:function(n,e,r){"use strict";r.d(e,{Z:function(){return a}});var t=r(19013),i=r(13882);function a(n){(0,i.Z)(1,arguments);var e=(0,t.Z)(n);return e.setMinutes(0,0,0),e}},20005:function(n,e,r){"use strict";r.d(e,{Z:function(){return s}});var t=r(7069),i=r(83946),a=r(11640),o=r(13882);function u(n){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function s(n,e){if((0,o.Z)(2,arguments),!e||"object"!==u(e))return new Date(NaN);var r=e.years?(0,i.Z)(e.years):0,s=e.months?(0,i.Z)(e.months):0,c=e.weeks?(0,i.Z)(e.weeks):0,d=e.days?(0,i.Z)(e.days):0,l=e.hours?(0,i.Z)(e.hours):0,f=e.minutes?(0,i.Z)(e.minutes):0,v=e.seconds?(0,i.Z)(e.seconds):0,p=function(n,e){(0,o.Z)(2,arguments);var r=(0,i.Z)(e);return(0,a.Z)(n,-r)}(n,s+12*r),h=(0,t.Z)(p,d+7*c);return new Date(h.getTime()-1e3*(v+60*(f+60*l)))}},61258:function(n,e,r){var t=r(36473),i=r(89419),a=r(38101),o=Math.min;n.exports=function(n,e){if((n=a(n))<1||n>9007199254740991)return[];var r=4294967295,u=o(n,4294967295);e=i(e),n-=4294967295;for(var s=t(u,e);++r<n;)e(r);return s}},26022:function(n,e,r){"use strict";var t=r(52322),i=r(62208),a=r(13670),o=r(95940),u=r(65957),s=function(n){var e=n.tokens,r=n.onDismiss,s=n.onCancel,c=(0,u.$G)().t;return(0,t.jsx)(i.ZP,{title:c("Import Token"),onDismiss:function(){null==r||r(),s()},children:(0,t.jsx)(a.Z,{maxWidth:"380px",children:(0,t.jsx)(o.Z,{tokens:e,handleCurrencySelect:r})})})};e.Z=s},95940:function(n,e,r){"use strict";var t=r(70865),i=r(96670),a=r(52322),o=r(2784),u=r(90902),s=r(76660),c=r(89495),d=r(5917),l=r(57432),f=r(33441),v=r(76903),p=r(73697),h=r(7887),m=r(48608),b=r(77253),g=r(72135),y=r(5305),Z=r(34766),x=r(87510),I=r(91790),D=r(65957),k=r(5650),w=r(76166),E=r(65664);e.Z=function(n){var e,r,T=n.tokens,S=n.handleCurrencySelect,C=(0,w.g)().chainId,B=(0,D.$G)().t,N=(0,o.useState)(!1),U=N[0],A=N[1],j=(0,g._E)(),_=(0,x.qB)();return(0,a.jsxs)(b.Tz,{gap:"lg",children:[(0,a.jsx)(s.Z,{variant:"warning",children:(0,a.jsxs)(c.Z,{children:[B("Anyone can create a %standard% token on %network% with any name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token.",{standard:C!==u.a_.BSC&&C!==u.a_.BSC_TESTNET?"ERC20":"BEP20",network:null===(e=k.p5.find(function(n){return n.id===C}))||void 0===e?void 0:e.name}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),B("If you purchase an arbitrary token, you may be unable to sell it back.")]})}),T.map(function(n){var e,r,t=n.chainId&&(null==_?void 0:null===(e=_[n.chainId])||void 0===e?void 0:null===(r=e[n.address])||void 0===r?void 0:r.list),i=n.address?"".concat((0,Z.Z)(n.address)):null;return(0,a.jsxs)(d.Z,{gridTemplateRows:"1fr 1fr 1fr",gridGap:"4px",children:[void 0!==t?(0,a.jsxs)(l.Z,{variant:"success",outline:!0,scale:"sm",startIcon:t.logoURI&&(0,a.jsx)(I._r,{logoURI:t.logoURI,size:"12px"}),children:[B("via")," ",t.name]}):(0,a.jsx)(l.Z,{variant:"failure",outline:!0,scale:"sm",startIcon:(0,a.jsx)(f.Z,{color:"failure"}),children:B("Unknown Source")}),(0,a.jsxs)(v.Z,{alignItems:"center",children:[(0,a.jsx)(c.Z,{mr:"8px",children:n.name}),(0,a.jsxs)(c.Z,{children:["(",n.symbol,")"]})]}),n.chainId&&(0,a.jsxs)(v.Z,{justifyContent:"space-between",width:"100%",children:[(0,a.jsx)(c.Z,{mr:"4px",children:i}),(0,a.jsxs)(p.Z,{href:(0,y.C)(n.address,"address",n.chainId),external:!0,children:["(",B("View on %site%",{site:(0,y.X0)(n.chainId)}),")"]})]})]},n.address)}),(0,a.jsxs)(v.Z,{justifyContent:"space-between",alignItems:"center",children:[(0,a.jsxs)(v.Z,{alignItems:"center",onClick:function(){return A(!U)},children:[(0,a.jsx)(h.Z,{scale:"sm",name:"confirmed",type:"checkbox",checked:U,onChange:function(){return A(!U)}}),(0,a.jsx)(c.Z,{ml:"8px",style:{userSelect:"none"},children:B("I understand")})]}),(0,a.jsx)(m.Z,{variant:"danger",disabled:!U,onClick:function(){T.forEach(function(n){var e,r=C&&(null==_?void 0:null===(e=_[n.chainId])||void 0===e?void 0:e[n.address]),a=n;r&&(a=new E.DT((0,i.Z)((0,t.Z)({},n),{logoURI:r.token.logoURI,name:n.name||r.token.name}))),j(a)}),S&&S(T[0])},className:".token-dismiss-button",children:B("Import")})]})]})}},43437:function(n,e,r){"use strict";r.d(e,{BY:function(){return o},Bq:function(){return l},DY:function(){return d},MV:function(){return i},OZ:function(){return t},Rr:function(){return c},Tb:function(){return f},Vd:function(){return h},hT:function(){return u},om:function(){return a},si:function(){return v},tE:function(){return p},xy:function(){return s}});var t=2,i=52.1429,a=.0025,o=.0017,u=225e-6,s=575e-6,c=1619136e3,d=1664130827,l=86400,f=3600,v=10,p=["0x495c7f3a713870f68f8b418b355c085dfdc412c3","0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea","0xe31debd7abff90b06bca21010dd860d8701fd901","0xfc989fbb6b3024de5ca0144dc23c18a063942ac1","0xe40fc6ff5f2895b44268fd2e1a421e07f567e007","0xfd158609228b43aa380140b46fff3cdf9ad315de","0xc00af6212fcf0e6fd3143e692ccd4191dc308bea","0x205969b3ad459f7eba0dee07231a6357183d3fb6","0x0bd67d358636fd7b0597724aa4f20beedbf3073a","0xedf5d2a561e8a3cb5a846fbce24d2ccd88f50075","0x702b0789a3d4dade1688a0c8b7d944e5ba80fc30","0x041929a760d7049edaef0db246fa76ec975e90cc","0xba098df8c6409669f5e6ec971ac02cd5982ac108","0x1bbed115afe9e8d6e9255f18ef10d43ce6608d94","0xe99512305bf42745fae78003428dcaf662afb35d","0xbE609EAcbFca10F6E5504D39E3B113F808389056","0x847daf9dfdc22d5c61c4a857ec8733ef5950e82e","0xdbf8913dfe14536c0dae5dd06805afb2731f7e7b","0xF1D50dB2C40b63D2c598e2A808d1871a40b1E653","0x4269e4090ff9dfc99d8846eb0d42e67f01c3ac8b",],h=["0x72b169ad8af6c4fb53056b6a2a85602ad6863864"]},79467:function(n,e,r){"use strict";r.d(e,{Dw:function(){return p},Ho:function(){return b},J5:function(){return I},OO:function(){return l},Pi:function(){return v},WR:function(){return d},YM:function(){return f},nA:function(){return y},rf:function(){return x},yx:function(){return g},z2:function(){return Z}});var t,i=r(47842),a=r(25997),o=r(10494),u=r(90902),s=r(43437),c=r(21805),d={BSC:"BNB",ETH:"ETH"},l={BSC:o.I0,ETH:o.Hs},f={BSC:s.Rr,ETH:s.DY},v={BSC:u.a_.BSC,ETH:u.a_.ETHEREUM},p=(t={},(0,i.Z)(t,u.a_.BSC,""),(0,i.Z)(t,u.a_.ETHEREUM,"/eth"),t),h={BSC:a.dQ,ETH:a.GJ},m={BSC:a.Dn,ETH:a.GJ},b={BSC:o.JY,ETH:o.EC},g={BSC:o.VO,ETH:o.EC},y={BSC:"BscScan",ETH:"EtherScan"},Z={BSC:s.tE,ETH:s.Vd},x=function(n){var e=I(),r=c.Z.get("bucket-info-2");return e?a.MS:"sf"===r?h[n]:m[n]},I=function(){return window.location.href.includes("stableSwap")}},95565:function(n,e,r){"use strict";r.d(e,{jj:function(){return nL},SM:function(){return nH},rH:function(){return nY},dU:function(){return n_}});var t,i,a=r(98788),o=r(47842),u=r(87394),s=r(50930),c=r(5163),d=r(51523),l=r(2784),f=r(92794),v=r(25152),p=r(93725),h=r(43997),m=r(19061),b=r(5632),g=r(65957),y=r(5305),Z=r(5369),x=r(95707),I=r(6465),D=r(73396),k=r(27757),w=r(76166),E=r(21805),T=r(72978),S=(0,T.cn)(function(){return E.Z.get("bucket-info-2")}),C=r(44291),B=r(33472),N=r(57246),U=r(72135),A=r(10549),j=r(25997),_=r(92228),R=r(6647);function M(){var n=(0,_.Z)(["\n  query lastPairDayId($pairId: Bytes) {\n    pairDayDatas(first: 1, where: { pairAddress: $pairId }, orderBy: date, orderDirection: desc) {\n      id\n    }\n  }\n"]);return M=function(){return n},n}var H=(0,R.gql)(M());function P(){var n=(0,_.Z)(["\n  query pairHourDatas($pairId: String, $first: Int) {\n    pairHourDatas(first: $first, where: { pair: $pairId }, orderBy: hourStartUnix, orderDirection: desc) {\n      id\n      hourStartUnix\n      reserve0\n      reserve1\n      reserveUSD\n    }\n  }\n"]);return P=function(){return n},n}var L=(0,R.gql)(P());function Y(){var n=(0,_.Z)(["\n  query pairDayDatasByIdsQuery($pairIds: [ID!]) {\n    pairDayDatas(where: { id_in: $pairIds }, orderBy: date, orderDirection: desc) {\n      id\n      date\n      reserve0\n      reserve1\n      reserveUSD\n    }\n  }\n"]);return Y=function(){return n},n}var W=(0,R.gql)(Y()),O=r(72591),F=(t={},(0,o.Z)(t,O.l.DAY,24),(0,o.Z)(t,O.l.WEEK,28),(0,o.Z)(t,O.l.MONTH,30),(0,o.Z)(t,O.l.YEAR,24),t),q=(i={},(0,o.Z)(i,O.l.DAY,null),(0,o.Z)(i,O.l.WEEK,6),(0,o.Z)(i,O.l.MONTH,1),(0,o.Z)(i,O.l.YEAR,15),i),$=r(61258),G=r.n($),Q=function(n){var e=n.id,r=n.pairId;return e.replace("".concat(r,"-"),"")},J=function(n){var e=n.pairAddress,r=n.pairLastId,t=n.timeWindow,i=n.idsCount,a=Number(r);return t===O.l.DAY?[]:G()(i,function(n){return"".concat(e,"-").concat(a-n*q[t])})},V=function(n,e){switch(e){case O.l.DAY:case O.l.WEEK:var r,t,i,a=null!==(i=null==n?void 0:null===(r=n.pairHourDatas)||void 0===r?void 0:r.length)&&void 0!==i?i:1;return(null==n?void 0:null===(t=n.pairHourDatas)||void 0===t?void 0:t.reduce(function(n,e){return n+parseFloat(e.reserveUSD)},0))/a>1e4;case O.l.MONTH:case O.l.YEAR:var o,u,s,c=null!==(s=null==n?void 0:null===(o=n.pairDayDatas)||void 0===o?void 0:o.length)&&void 0!==s?s:1;return(null==n?void 0:null===(u=n.pairDayDatas)||void 0===u?void 0:u.reduce(function(n,e){return n+parseFloat(e.reserveUSD)},0))/c>1e4;default:return null}};function z(){var n=(0,_.Z)(["\n  query pairDayDatas($pairId: Bytes, $first: Int) {\n    pairDayDatas(first: $first, where: { pairAddress: $pairId }, orderBy: date, orderDirection: desc) {\n      id\n      date\n      reserve0\n      reserve1\n      reserveUSD\n    }\n  }\n"]);return z=function(){return n},n}var K=(0,R.gql)(z());function X(){var n=(0,_.Z)(["\n  query pairHourDatasByIds($pairIds: [ID!]) {\n    pairHourDatas(where: { id_in: $pairIds }, orderBy: hourStartUnix, orderDirection: desc) {\n      id\n      hourStartUnix\n      reserve0\n      reserve1\n      reserveUSD\n    }\n  }\n"]);return X=function(){return n},n}var nn=(0,R.gql)(X());function ne(){var n=(0,_.Z)(["\n  query lastPairHourId($pairId: String) {\n    pairHourDatas(first: 1, where: { pair: $pairId }, orderBy: hourStartUnix, orderDirection: desc) {\n      id\n    }\n  }\n"]);return ne=function(){return n},n}var nr,nt=(0,R.gql)(ne()),ni=(nr=(0,a.Z)(function(n){var e,r,t,i,a,o,u,s,d,l,f,v,p,h,m,b,g,y,Z;return(0,c.__generator)(this,function(t){switch(t.label){case 0:e=n.pairId,r=n.timeWindow,i=n.isNR?j.Dn:j.dQ,t.label=1;case 1:switch(t.trys.push([1,14,,15]),r){case O.l.DAY:return[3,2];case O.l.WEEK:return[3,4];case O.l.MONTH:return[3,7];case O.l.YEAR:return[3,9]}return[3,12];case 2:return[4,(0,A.Z)(i,L,{pairId:e,first:F[r]})];case 3:case 6:case 8:case 11:return[2,{data:t.sent(),error:!1}];case 4:return[4,(0,A.Z)(i,nt,{pairId:e})];case 5:if(!(s=(null==(u=t.sent())?void 0:u.pairHourDatas)?null===(o=u.pairHourDatas[0])||void 0===o?void 0:o.id:null))return[2,{data:{pairHourDatas:[]},error:!1}];return d=Q({id:s,pairId:e}),l=J({pairAddress:e,pairLastId:d,timeWindow:r,idsCount:F[r]}),[4,(0,A.Z)(i,nn,{pairIds:l})];case 7:return[4,(0,A.Z)(i,K,{pairId:e,first:F[r]})];case 9:return[4,(0,A.Z)(i,H,{pairId:e})];case 10:if(!(m=(null==(h=t.sent())?void 0:h.pairDayDatas)?null===(p=h.pairDayDatas[0])||void 0===p?void 0:p.id:null))return[2,{data:{pairDayDatas:[]},error:!1}];return b=Q({id:m,pairId:e}),g=J({pairAddress:e,pairLastId:b,timeWindow:r,idsCount:F[r]}),[4,(0,A.Z)(i,W,{pairIds:g})];case 12:return[2,{data:null,error:!1}];case 13:return[3,15];case 14:return Z=t.sent(),console.error("Failed to fetch price chart data",Z),[2,{error:!0}];case 15:return[2]}})}),function(n){return nr.apply(this,arguments)}),na=r(42227),no=r(10017),nu=r.n(no),ns=function(n,e,r,t){var i,a;switch(t){case O.l.DAY:case O.l.WEEK:return null==n?void 0:null===(i=n.pairHourDatas)||void 0===i?void 0:i.map(function(n){return{time:n.hourStartUnix,token0Id:e,token1Id:r,reserve0:parseFloat(n.reserve0),reserve1:parseFloat(n.reserve1)}});case O.l.MONTH:case O.l.YEAR:return null==n?void 0:null===(a=n.pairDayDatas)||void 0===a?void 0:a.map(function(n){return{time:n.date,token0Id:e,token1Id:r,reserve0:parseFloat(n.reserve0),reserve1:parseFloat(n.reserve1)}});default:return null}},nc=function(n){if(!(null==n?void 0:n.token0DerivedBnb)||(null==n?void 0:n.token0DerivedBnb.length)===0)return[];var e,r,t=nu()(null!==(r=null==n?void 0:null===(e=n.token1DerivedBnb)||void 0===e?void 0:e.map(function(n){return[n.timestamp,n]}))&&void 0!==r?r:[]);return null==n?void 0:n.token0DerivedBnb.reduce(function(n,e){var r=t[e.timestamp];return r&&n.push({time:parseInt(e.timestamp,10),token0Id:e.tokenAddress,token1Id:r.tokenAddress,token0DerivedBNB:e.derivedBNB,token1DerivedBNB:r.derivedBNB}),n},[])},nd=function(n){var e=n.pairData,r=n.activeToken;return null==e?void 0:e.map(function(n){return{time:(0,na.Z)(n.time),value:r===(null==n?void 0:n.token0Id)?n.reserve1/n.reserve0:n.reserve0/n.reserve1}}).reverse()},nl=function(n){var e=n.pairData,r=n.activeToken;return null==e?void 0:e.map(function(n){return{time:(0,na.Z)(n.time),value:r===(null==n?void 0:n.token0Id)?n.token0DerivedBNB/n.token1DerivedBNB:n.token1DerivedBNB/n.token0DerivedBNB}})},nf=r(72579),nv=r.n(nf),np=function(n){var e=n.pairId,r=n.timeWindow;return function(n){return nv()(n,["swap","pairDataById",e,r])}},nh=function(n){var e=n.pairId,r=n.timeWindow;return function(n){return nv()(n,["swap","derivedPairDataById",e,r])}},nm=r(34498),nb=r.n(nm),ng=r(10494),ny=r(43437),nZ=r(33992),nx=r(28401),nI=r(12383),nD=r(20005),nk=r(56615),nw=r(34519),nE=r.n(nw);function nT(){var n=(0,_.Z)(["\n      query derivedTokenPriceData {\n        ","\n      }\n    "]);return nT=function(){return n},n}var nS,nC,nB=function(n){return(0,R.gql)(nT(),n)},nN=(nS=(0,a.Z)(function(n,e){var r,t,i,a;return(0,c.__generator)(this,function(o){switch(o.label){case 0:var u,s;return r=E.Z.get("bucket-info-2"),[4,(0,nk.L)(nB,e.map(function(e){return"\n    t".concat(e.timestamp,':token(id:"').concat(n,'", block: { number: ').concat(e.number,"}) { \n        derivedBNB\n      }\n    ")}),"sf"===r?ng.JY:ng.VO,200)];case 1:if(!(t=o.sent()))return console.error("Price data failed to load"),[2,null];return i=nE()(t,function(n){return n.derivedBNB}),a=[],Object.keys(i).forEach(function(e){var r=e.split("t")[1];r&&a.push({tokenAddress:n,timestamp:r,derivedBNB:i[e]?parseFloat(i[e]):0})}),[2,nb()(a,function(n){return parseInt(n.timestamp,10)})]}})}),function(n,e){return nS.apply(this,arguments)}),nU=function(n){switch(n){case O.l.DAY:return ny.Tb;case O.l.WEEK:return 4*ny.Tb;case O.l.MONTH:return ny.Bq;case O.l.YEAR:return 15*ny.Bq;default:return 4*ny.Tb}},nA=function(n){switch(n){case O.l.DAY:return 1;case O.l.WEEK:return 7;case O.l.MONTH:return 30;case O.l.YEAR:return 365;default:return 7}},nj=(nC=(0,a.Z)(function(n,e,r){var t,i,a,o,s,d,l,f,v,p;return(0,c.__generator)(this,function(c){switch(c.label){case 0:for(t=nU(r),i=(0,nx.Z)(new Date),a=(0,nx.Z)((0,nI.Z)((0,nD.Z)(1e3*i,{days:nA(r)}))),o=[],s=a;s<=i;)o.push(s),s+=t;c.label=1;case 1:return c.trys.push([1,4,,5]),[4,(0,nZ.z)(o,"asc",500)];case 2:if(!(d=c.sent())||0===d.length)return console.error("Error fetching blocks for timestamps",o),[2,null];return d.pop(),[4,Promise.all([nN(n,d),nN(e,d)])];case 3:return[2,{token0DerivedBnb:f=(l=u.Z.apply(void 0,[c.sent(),2]))[0],token1DerivedBnb:l[1]}];case 4:return p=c.sent(),console.error("Failed to fetched derived price data for chart",p),[2,null];case 5:return[2]}})}),function(n,e,r){return nC.apply(this,arguments)});function n_(){return(0,h.v9)(function(n){return n.swap})}var nR=["0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f","0xf164fC0Ec4E93095b804a4795bBe1e041497b92a","0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"];function nM(n,e){return n.route.path.some(function(n){return n.address===e})||n.route.pairs.some(function(n){return n.liquidityToken.address===e})}function nH(n,e,r,t,i){var a,s,c,f,v,p=(0,d.mA)().address,h=(0,g.$G)().t,b=null!==(a=null===i?p:(0,y.UJ)(i)||null)&&void 0!==a?a:null,Z=(0,B.K5)(null!=p?p:void 0,(0,l.useMemo)(function(){return[null!=r?r:void 0,null!=t?t:void 0]},[r,t])),I=n===N.gN.INPUT,D=(0,k.Z)(e,null!==(s=I?r:t)&&void 0!==s?s:void 0),w=(0,m.AU)(I?D:void 0,null!=t?t:void 0),E=(0,m.in)(null!=r?r:void 0,I?void 0:D),T=I?w:E,S=(c={},(0,o.Z)(c,N.gN.INPUT,Z[0]),(0,o.Z)(c,N.gN.OUTPUT,Z[1]),c),C=(f={},(0,o.Z)(f,N.gN.INPUT,null!=r?r:void 0),(0,o.Z)(f,N.gN.OUTPUT,null!=t?t:void 0),f);p||(v=h("Connect Wallet")),D||(v=null!=v?v:h("Enter an amount")),C[N.gN.INPUT]&&C[N.gN.OUTPUT]||(v=null!=v?v:h("Select a token"));var A=(0,y.UJ)(b);b&&A?(-1!==nR.indexOf(A)||w&&nM(w,A)||E&&nM(E,A))&&(v=null!=v?v:h("Invalid recipient")):v=null!=v?v:h("Enter a recipient");var j=(0,u.Z)((0,U.$2)(),1)[0],_=T&&j&&(0,x.b5)(T,j),R=[S[N.gN.INPUT],_?_[N.gN.INPUT]:null,],M=R[0],H=R[1];return M&&H&&M.lessThan(H)&&(v=h("Insufficient %symbol% balance",{symbol:H.currency.symbol})),{currencies:C,currencyBalances:S,parsedAmount:D,v2Trade:null!=T?T:void 0,inputError:v}}var nP=/^0x[a-fA-F0-9]{40}$/;function nL(){var n=(0,w.g)().chainId,e=(0,C.TL)(),r=(0,Z.Z)(),t=(0,b.useRouter)().query,i=(0,l.useState)(),a=i[0],u=i[1];return(0,l.useEffect)(function(){if(n&&r){var i,a,s,c,d,l,v,p,h,m,b,g,Z=(a=r.symbol,s=null!==(g=null===(m=I.cr[n])||void 0===m?void 0:m.address)&&void 0!==g?g:null===(b=I.gn[n])||void 0===b?void 0:b.address,d=(0,y.UJ)(t.inputCurrency)||(null!=a?a:f.VN),l="string"==typeof t.outputCurrency?(0,y.UJ)(t.outputCurrency)||a:null!=s?s:f.g$,d===l&&("string"==typeof t.outputCurrency?d="":l=""),v=function(n){if("string"!=typeof n)return null;var e=(0,y.UJ)(n);return e||(nP.test(n)?n:null)}(t.recipient),c={},(0,o.Z)(c,N.gN.INPUT,{currencyId:d}),(0,o.Z)(c,N.gN.OUTPUT,{currencyId:l}),(0,o.Z)(c,"typedValue","string"!=typeof(p=t.exactAmount)||Number.isNaN(parseFloat(p))?"":p),(0,o.Z)(c,"independentField","string"==typeof(h=t.exactField)&&"output"===h.toLowerCase()?N.gN.OUTPUT:N.gN.INPUT),(0,o.Z)(c,"recipient",v),(0,o.Z)(c,"pairDataById",{}),(0,o.Z)(c,"derivedPairDataById",{}),c);e((0,N.mV)({typedValue:Z.typedValue,field:Z.independentField,inputCurrencyId:Z[N.gN.INPUT].currencyId,outputCurrencyId:Z[N.gN.OUTPUT].currencyId,recipient:null})),u({inputCurrencyId:Z[N.gN.INPUT].currencyId,outputCurrencyId:Z[N.gN.OUTPUT].currencyId})}},[e,n,t,r]),a}var nY=function(n){var e=n.token0Address,r=n.token1Address,t=n.timeWindow,i=n.currentSwapPrice,o=(0,l.useState)(null),d=o[0],f=o[1],m=(0,l.useState)(!1),b=m[0],g=m[1],y=(0,h.v9)(np({pairId:d,timeWindow:t})),Z=(0,h.v9)(nh({pairId:d,timeWindow:t})),x=(0,h.I0)(),I=(0,u.Z)((0,T.KO)(S),1)[0];(0,l.useEffect)(function(){var n,i,o=(n=(0,a.Z)(function(){var n,i,a;return(0,c.__generator)(this,function(o){switch(o.label){case 0:console.info("[Price Chart]: Not possible to retrieve price data from single pool, trying to fetch derived prices"),o.label=1;case 1:return o.trys.push([1,3,4,5]),[4,nj(e,r,t)];case 2:return(n=o.sent())?(i=nc(n),x((0,N._U)({pairData:i,pairId:d,timeWindow:t}))):x((0,N._U)({pairData:[],pairId:d,timeWindow:t})),[3,5];case 3:return a=o.sent(),console.error("Failed to fetch derived prices for chart",a),x((0,N._U)({pairData:[],pairId:d,timeWindow:t})),[3,5];case 4:return g(!1),[7];case 5:return[2]}})}),function(){return n.apply(this,arguments)}),u=(i=(0,a.Z)(function(){var n,e,r,i,a,u;return(0,c.__generator)(this,function(s){switch(s.label){case 0:return g(!0),[4,ni({pairId:d,timeWindow:t,isNR:"nr"===I})];case 1:if(!(n=s.sent().data))return[3,6];i=V(n,t),s.label=2;case 2:return s.trys.push([2,4,,5]),[4,(0,v.v)({abi:p,calls:[{address:d,name:"token0"},{address:d,name:"token1"}],options:{requireSuccess:!1}})];case 3:return a=s.sent(),[3,5];case 4:return s.sent(),console.info("Error fetching tokenIds from pair"),[3,5];case 5:return(u=a&&(null===(e=a[0])||void 0===e?void 0:e[0])&&(null===(r=a[1])||void 0===r?void 0:r[0])&&ns(n,a[0][0].toLowerCase(),a[1][0].toLowerCase(),t)||[]).length>0&&i?(x((0,N.Wk)({pairData:u,pairId:d,timeWindow:t})),g(!1)):(console.info("[Price Chart]: Liquidity too low for ".concat(d)),x((0,N.Wk)({pairData:[],pairId:d,timeWindow:t})),o()),[3,7];case 6:x((0,N.Wk)({pairData:[],pairId:d,timeWindow:t})),o(),s.label=7;case 7:return[2]}})}),function(){return i.apply(this,arguments)});y||Z||!d||b||u()},[d,t,y,i,e,r,Z,x,b,I,]),(0,l.useEffect)(function(){!function(){try{var n,t=null===(n=(0,D.Z)(e,r))||void 0===n?void 0:n.toLowerCase();t!==d&&f(t)}catch(i){f(null)}}()},[e,r,d]);var k=(0,l.useMemo)(function(){return nd({activeToken:e,pairData:y})},[e,y]),w=(0,l.useMemo)(function(){return nl({activeToken:e,pairData:Z})},[e,Z]),E=i&&i[e]>0,C=(null==k?void 0:k.length)>0&&E?(0,s.Z)(k).concat([{time:new Date,value:i[e]}]):k,B=(null==w?void 0:w.length)>0&&E?(0,s.Z)(w).concat([{time:new Date,value:i[e]}]):w,U=C&&(null==C?void 0:C.length)===0,A=B&&(null==B?void 0:B.length)===0,j=U&&A?[]:void 0;return C&&(null==C?void 0:C.length)>0?j=C:B&&(null==B?void 0:B.length)>0&&(j=B),{pairPrices:j,pairId:d}}},72591:function(n,e,r){"use strict";var t,i;r.d(e,{l:function(){return t}}),(i=t||(t={}))[i.DAY=0]="DAY",i[i.WEEK=1]="WEEK",i[i.MONTH=2]="MONTH",i[i.YEAR=3]="YEAR"},33992:function(n,e,r){"use strict";r.d(e,{z:function(){return p}});var t=r(98788),i=r(92228),a=r(5163),o=r(6647),u=r(34498),s=r.n(u),c=r(79467),d=r(56615);function l(){var n=(0,i.Z)(["query blocks {\n    ","\n  }"]);return l=function(){return n},n}var f,v=function(n){return(0,o.gql)(l(),n)},p=(f=(0,t.Z)(function(n){var e,r,t,i,o,u,l,f,p,h,m,b=arguments;return(0,a.__generator)(this,function(a){switch(a.label){case 0:var g;if(e=b.length>1&&void 0!==b[1]?b[1]:"desc",r=b.length>2&&void 0!==b[2]?b[2]:500,t=b.length>3&&void 0!==b[3]?b[3]:"BSC",(null==n?void 0:n.length)===0)return[2,[]];return[4,(0,d.L)(v,n.map(function(n){return"t".concat(n,":blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: ").concat(n,", timestamp_lt: ").concat(n+600," }) {\n      number\n    }")}),c.OO[t],r)];case 1:if(i=a.sent(),o=[],i){u=!0,l=!1,f=void 0;try{for(p=Object.keys(i)[Symbol.iterator]();!(u=(h=p.next()).done);u=!0)i[m=h.value].length>0&&o.push({timestamp:m.split("t")[1],number:parseInt(i[m][0].number,10)})}catch(y){l=!0,f=y}finally{try{u||null==p.return||p.return()}finally{if(l)throw f}}return[2,s()(o,function(n){return n.number},e)]}return[2,o]}})}),function(n){return f.apply(this,arguments)})},3063:function(n,e,r){"use strict";var t,i=r(47842),a=r(58194),o=r(30733),u=r.n(o),s=r(90902),c=(t={},(0,i.Z)(t,s.a_.BSC,"smartchain"),(0,i.Z)(t,s.a_.ETHEREUM,"ethereum"),t),d=u()(function(n){return n&&c[n.chainId]?"https://assets-cdn.trustwallet.com/blockchains/".concat(c[n.chainId],"/assets/").concat((0,a.getAddress)(n.address),"/logo.png"):null},function(n){return"".concat(n.chainId,"#").concat(n.address)});e.Z=d},25997:function(n,e,r){"use strict";r.d(e,{Dn:function(){return s},GJ:function(){return c},MS:function(){return d},dQ:function(){return u},vA:function(){return o}});var t=r(10494),i=r(6647),a=r(34406),o=function(n){if(n===t.JY)return{"X-Sf":a.env.NEXT_PUBLIC_SF_HEADER||window.sfHeader}},u=new i.GraphQLClient(t.JY,{headers:o(t.JY)}),s=new i.GraphQLClient(t.VO),c=new i.GraphQLClient(t.EC),d=new i.GraphQLClient(t.gr);new i.GraphQLClient(t.JY,{headers:{"X-Sf":a.env.SF_HEADER},timeout:5e3}),new i.GraphQLClient(t.gr,{headers:o(t.gr)}),new i.GraphQLClient(t.d$,{headers:{"X-API-KEY":a.env.BIT_QUERY_HEADER},timeout:5e3})},6973:function(n,e,r){"use strict";r.d(e,{i:function(){return a}});var t=r(90902),i=r(92794);function a(n){var e;if(n)return(null===(e=n.currency)||void 0===e?void 0:e.isNative)?t.QA.greaterThan(n.quotient,i.Uz)?t.ih.fromRawAmount(n.currency,t.QA.subtract(n.quotient,i.Uz)):t.ih.fromRawAmount(n.currency,i.iV):n}},10549:function(n,e){"use strict";var r=function(n,e,r){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3e4;return Promise.race([r?n.request(e,r):n.request(e),new Promise(function(n,e){setTimeout(function(){e(Error("Request timed out after ".concat(t," milliseconds")))},t)}),])};e.Z=r},56615:function(n,e,r){"use strict";r.d(e,{L:function(){return d}});var t,i=r(98788),a=r(70865),o=r(5163),u=r(6647),s=r(25997),c=r(10549),d=(t=(0,i.Z)(function(n,e,r){var t,i,d,l,f,v,p,h,m,b=arguments;return(0,o.__generator)(this,function(o){switch(o.label){case 0:t=b.length>3&&void 0!==b[3]?b[3]:1e3,i={},d=!1,l=0,f=new u.GraphQLClient(r,{headers:(0,s.vA)(r)}),o.label=1;case 1:if(o.trys.push([1,4,,5]),d)return[3,3];return v=e.length,l+t<e.length&&(v=l+t),p=e.slice(l,v),[4,(0,c.Z)(f,n(p))];case 2:return h=o.sent(),i=(0,a.Z)({},i,h),d=Object.keys(h).length<t||l+t>e.length,l+=t,[3,1];case 3:return[2,i];case 4:return m=o.sent(),console.error("Failed to fetch info data",m),[2,null];case 5:return[2]}})}),function(n,e,r){return t.apply(this,arguments)})},3066:function(n,e,r){"use strict";r.d(e,{Z:function(){return P}});var t,i,a=r(98788),o=r(70865),u=r(96670),s=r(5163),c=r(52322),d=r(2784),l=r(65957),f=r(22723),v=r(69689),p=r(89495),h=r(76903),m=r(73697),b=r(48608),g=r(78933),y=r(90902),Z=r(10494);(i=t||(t={})).Low="Low",i.Medium="Medium",i.High="High";var x,I,D={0:t.Low,1:t.Medium,2:t.Medium,3:t.Medium,4:t.High,5:t.High},k=(x=(0,a.Z)(function(n,e){var r,t;return(0,s.__generator)(this,function(r){switch(r.label){case 0:return[4,fetch(Z.iR,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({address:n,chain_id:e})})];case 1:return[4,r.sent().json()];case 2:return[2,r.sent()]}})}),function(n,e){return x.apply(this,arguments)}),w=(I=(0,a.Z)(function(n,e){var r,t,i,a,o,u,c;return(0,s.__generator)(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,k(n,e)];case 1:return i=(t=r.sent().data).risk_result,a=t.scanned_ts,o=t.risk_level,u=t.risk_level_description,[2,{isSuccess:!0,address:n,chainId:e,riskLevel:D[o],riskResult:i,scannedTs:a,riskLevelDescription:u}];case 2:return c=r.sent(),console.error("Fetch Risk Token error: ",c),[2,{isSuccess:!1,address:"",chainId:y.a_.BSC,riskLevel:D[0],riskResult:"",scannedTs:0,riskLevelDescription:""}];case 3:return[2]}})}),function(n,e){return I.apply(this,arguments)}),E=r(91790),T=r(76660),S=function(n){var e=n.currency,r=n.riskTokenInfo,i=(0,l.$G)().t,a=r.riskLevel,o=r.riskLevelDescription,u=(0,d.useMemo)(function(){switch(a){case t.High:return"danger";case t.Medium:return"warning";default:return"success"}},[a]);return(0,c.jsx)(T.Z,{variant:u,icon:"",mt:"10px",children:(0,c.jsxs)(T.Y,{bold:!0,ml:"-12px",children:[e.symbol," ",i("%riskLevel% Risk",{riskLevel:a}),(0,c.jsxs)(h.Z,{mt:"4px",children:[(0,c.jsx)(E.Xw,{currency:e,size:"24px",style:{marginRight:"8px"}}),(0,c.jsxs)(h.Z,{flexDirection:"column",children:[(0,c.jsx)(p.Z,{fontSize:"14px",lineHeight:"120%",children:o}),(0,c.jsx)(m.Z,{fontSize:"14px",mt:"8px",ml:"auto",external:!0,href:"https://hashdit.github.io/hashdit/docs/risk-level-description/",children:i("Learn More")})]})]})]})})},C=r(87510),B=r(98537),N=r.n(B),U=r(87622),A=r.n(U),j=r(3440),_=r.n(j),R=r(34519),M=r.n(R),H=r(72978),P=function(n){var e,r,t,i,y=n.inputCurrency,Z=n.outputCurrency,x=(0,l.$G)().t,I=(0,f.p)().toastInfo,D=(0,H.Dv)(C.eL),k=(0,d.useMemo)(function(){return null!=y?y:{}},[y]),E=k.address,T=k.chainId,B=(0,d.useMemo)(function(){return null!=Z?Z:{}},[Z]),U=B.address,j=B.chainId,R=(0,d.useState)({results:{},loading:!1}),P=R[0],L=P.results,Y=P.loading,W=R[1],O=(0,d.useMemo)(function(){var n,e,r,t=[];return!y||y.isNative||(null===(n=L[T])||void 0===n?void 0:n[E])||(null==D?void 0:null===(e=D[T])||void 0===e?void 0:e[E])||t.push(y),!Z||Z.isNative||(null===(r=L[j])||void 0===r?void 0:r[U])||t.push(Z),t},[L,E,T,U,j,y,Z,D]),F=(0,d.useCallback)(function(){var n,e=(n=(0,a.Z)(function(){var n;return(0,s.__generator)(this,function(e){switch(e.label){case 0:return[4,Promise.all(O.map(function(n){var e;return w(n.address,n.chainId)}))];case 1:return n=e.sent(),W(function(e){return(0,u.Z)((0,o.Z)({},e),{loading:!1,results:N()((0,o.Z)({},e.results),M()(_()(n,"chainId"),function(n){return A()(n,"address")}))})}),[2]}})}),function(){return n.apply(this,arguments)});I(x("Scanning Risk"),x("Please wait until we scan the risk for %symbol% token",{symbol:O.map(function(n){return n.symbol}).join(",")})),W(function(n){return(0,u.Z)((0,o.Z)({},n),{loading:!0})}),e()},[O,I,x]),q=(0,d.useMemo)(function(){return Y||0===O.length},[Y,O]),$=(0,v.Z)((0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(p.Z,{children:x("The scan result is provided by 3rd parties and may not cover every token. Therefore the result is for reference only, do NOT take it as investment or financial advice. Always DYOR!")}),(0,c.jsxs)(h.Z,{mt:"4px",children:[(0,c.jsx)(p.Z,{children:x("Powered by")}),(0,c.jsx)(m.Z,{ml:"4px",external:!0,href:"https://www.hashdit.io/en",children:x("Hashdit.")})]})]}),{placement:"bottom"}),G=$.targetRef,Q=$.tooltip,J=$.tooltipVisible;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(h.Z,{justifyContent:"flex-end",children:[(0,c.jsx)(b.Z,{scale:"xs",style:{textTransform:"uppercase"},disabled:q,onClick:F,children:Y?x("scanning..."):x("scan risk")}),J&&Q,(0,c.jsx)(h.Z,{ref:G,children:(0,c.jsx)(g.Z,{ml:"4px",width:"20px",height:"20px",color:"textSubtle"})})]}),(null===(e=L[T])||void 0===e?void 0:null===(r=e[E])||void 0===r?void 0:r.isSuccess)&&(0,c.jsx)(S,{currency:y,riskTokenInfo:L[T][E]}),(null===(t=L[j])||void 0===t?void 0:null===(i=t[U])||void 0===i?void 0:i.isSuccess)&&(0,c.jsx)(S,{currency:Z,riskTokenInfo:L[j][U]})]})}},13023:function(n,e,r){"use strict";var t=r(92228),i=r(3411),a=r(66803);function o(){var n=(0,t.Z)(["\n  background-color: ",";\n  border-radius: 16px;\n  box-shadow: ",";\n  color: ",";\n  display: block;\n  font-size: 16px;\n  height: ",";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n  border: 1px solid ",";\n\n  &::placeholder {\n    color: ",";\n  }\n\n  &:disabled {\n    background-color: ",";\n    box-shadow: none;\n    color: ",";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ",";\n  }\n"]);return o=function(){return n},n}var u=function(n){var e=n.isSuccess,r=n.isWarning,t=n.theme;return void 0!==r&&r?t.shadows.warning:void 0!==e&&e?t.shadows.success:t.shadows.inset},s=function(n){var e=n.scale,r=void 0===e?a.Q.MD:e;switch(r){case a.Q.SM:return"32px";case a.Q.LG:return"48px";case a.Q.MD:default:return"40px"}},c=i.ZP.input.withConfig({componentId:"sc-c22a9310-0"})(o(),function(n){return n.theme.colors.input},u,function(n){return n.theme.colors.text},s,function(n){return n.theme.colors.inputSecondary},function(n){return n.theme.colors.textSubtle},function(n){return n.theme.colors.backgroundDisabled},function(n){return n.theme.colors.textDisabled},function(n){var e=n.theme,r=n.isWarning,t=n.isSuccess;return r?e.shadows.warning:t?e.shadows.success:e.shadows.focus});c.defaultProps={scale:a.Q.MD,isSuccess:!1,isWarning:!1},e.Z=c},66803:function(n,e,r){"use strict";r.d(e,{Q:function(){return t}});var t={SM:"sm",MD:"md",LG:"lg"}},57432:function(n,e,r){"use strict";r.d(e,{Z:function(){return I}});var t,i,a=r(70865),o=r(96670),u=r(26297),s=r(52322),c=r(2784),d={PRIMARY:"primary",SECONDARY:"secondary",SUCCESS:"success",TEXTDISABLED:"textDisabled",TEXTSUBTLE:"textSubtle",BINANCE:"binance",FAILURE:"failure",WARNING:"warning"},l={MD:"md",SM:"sm"},f=r(92228),v=r(3411),p=r(78545),h=r(47842),m=(t={},(0,h.Z)(t,l.MD,{height:"28px",padding:"0 8px",fontSize:"14px"}),(0,h.Z)(t,l.SM,{height:"24px",padding:"0 4px",fontSize:"12px"}),t),b=(i={},(0,h.Z)(i,d.PRIMARY,{backgroundColor:"primary"}),(0,h.Z)(i,d.SECONDARY,{backgroundColor:"secondary"}),(0,h.Z)(i,d.SUCCESS,{backgroundColor:"success"}),(0,h.Z)(i,d.TEXTDISABLED,{backgroundColor:"textDisabled"}),(0,h.Z)(i,d.TEXTSUBTLE,{backgroundColor:"textSubtle"}),(0,h.Z)(i,d.BINANCE,{backgroundColor:"binance"}),(0,h.Z)(i,d.FAILURE,{backgroundColor:"failure"}),(0,h.Z)(i,d.WARNING,{backgroundColor:"warning"}),i);function g(){var n=(0,f.Z)(["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ","\n\n  ","\n  ","\n  ","\n  ","\n\n  ","\n"]);return g=function(){return n},n}var y=function(n){var e=n.outline,r=n.theme,t=n.variant,i=void 0===t?d.PRIMARY:t;if(e){var a=b[i].backgroundColor,o=r.colors[a];return"\n      color: ".concat(o,";\n      background: ").concat(r.colors.background,";\n      border: 2px solid ").concat(o,";\n    ")}return""},Z=v.ZP.div.withConfig({componentId:"sc-26d88be7-0"})(g(),function(n){var e=n.textTransform;return e&&"text-transform: ".concat(e,";")},(0,p.bU)({prop:"scale",variants:m}),(0,p.bU)({variants:b}),p.Dh,p.cp,y),x=function(n){var e=n.startIcon,r=n.endIcon,t=n.children,i=(0,u.Z)(n,["startIcon","endIcon","children"]);return(0,s.jsxs)(Z,(0,o.Z)((0,a.Z)({},i),{children:[c.isValidElement(e)&&c.cloneElement(e,{mr:"0.5em"}),t,c.isValidElement(r)&&c.cloneElement(r,{ml:"0.5em"})]}))};x.defaultProps={variant:"primary",scale:l.MD,outline:!1};var I=x}}]);
//# sourceMappingURL=5389-c6bbc511e98d3fd8.js.map