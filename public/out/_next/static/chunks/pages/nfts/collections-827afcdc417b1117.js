(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8545,573],{30994:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nfts/collections",function(){return e(52280)}])},60760:function(n,t,e){"use strict";var r=e(92228),i=e(52322),o=e(3411),c=e(5159),s=e(98757);function a(){var n=(0,r.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return a=function(){return n},n}var u=(0,o.ZP)(s.Z).withConfig({componentId:"sc-5ad34a86-0"})(a()),l=function(){return(0,i.jsx)(u,{children:(0,i.jsx)(c.Z,{})})};t.Z=l},74470:function(n,t,e){"use strict";var r=e(92228),i=e(52322),o=e(2784),c=e(3411),s=e(93058),a=e(23766),u=e(3549),l=e(15444);function d(){var n=(0,r.Z)(["\n  margin-left: -8px;\n\n  "," {\n    margin-left: 0;\n  }\n"]);return d=function(){return n},n}var f=c.ZP.div.withConfig({componentId:"sc-ad63ee3f-0"})(d(),function(n){return n.theme.mediaQueries.sm}),C=function(n){var t=n.idPrefix,e=n.viewMode,r=n.onToggle,c=(0,o.useCallback)(function(){e!==l.wO.CARD&&r(l.wO.CARD)},[r,e]),d=(0,o.useCallback)(function(){e!==l.wO.TABLE&&r(l.wO.TABLE)},[r,e]);return(0,i.jsxs)(f,{children:[(0,i.jsx)(s.Z,{variant:"text",scale:"sm",id:"".concat(t,"CardView"),onClick:c,children:(0,i.jsx)(a.Z,{color:e===l.wO.CARD?"primary":"textDisabled"})}),(0,i.jsx)(s.Z,{variant:"text",scale:"sm",id:"".concat(t,"TableView"),onClick:d,children:(0,i.jsx)(u.Z,{color:e===l.wO.TABLE?"primary":"textDisabled"})})]})};t.Z=C},52280:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return $}});var r=e(52322),i=e(98788),o=e(70865),c=e(96670),s=e(87394),a=e(92228),u=e(5163),l=e(2784),d=e(62392),f=e(45349),C=e(48497),h=e(76903),p=e(89495),x=e(3433),m=e(8659),Z=e(26229),v=e(16978),g=e(47265),j=e(85718),b=e(57114),w=e(74009),L=e(5917),P=e(11803),k=e(65095),M=e(2303),y=e(34498),B=e.n(y),V=e(46737),S=e(15444),I=e(3411),T=e(30433),H=e(6429),A=e(93304),F=e(65957),D=e(98757),R=e(36806),O=e(60760),E=e(74470),N=e(27801),_=e(46292);function z(){var n=(0,a.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 0.2em;\n  margin-bottom: 1.2em;\n"]);return z=function(){return n},n}function W(){var n=(0,a.Z)(["\n  color: ",";\n  padding: 0 20px;\n  :hover {\n    cursor: pointer;\n  }\n"]);return W=function(){return n},n}var G={createdAt:"createdAt",volumeBNB:"totalVolumeBNB",items:"numberTokensListed",supply:"totalSupply",lowestPrice:"lowestPrice",highestPrice:"highestPrice"},X=new Map([[G.createdAt,1],[G.volumeBNB,2],[G.items,3],[G.supply,4],[G.lowestPrice,5],[G.highestPrice,6],]),Q=I.ZP.div.withConfig({componentId:"sc-d5827b65-0"})(z()),Y=I.ZP.div.withConfig({componentId:"sc-d5827b65-1"})(W(),function(n){return n.theme.colors.primary}),U=function(){var n=(0,F.$G)().t,t=(0,A.IZ)().data,e=(0,d.Z)().isMobile,a=(0,l.useState)(null),y=a[0],I=a[1],z=(0,l.useState)(1),W=z[0],U=z[1],$=(0,l.useState)(1),J=$[0],K=$[1],q=(0,l.useState)(S.wO.CARD),nn=q[0],nt=q[1],ne=(0,l.useState)(!1),nr=ne[0],ni=ne[1],no=(0,l.useMemo)(function(){return[{label:n("Collection"),value:G.createdAt},{label:n("Volume"),value:G.volumeBNB},{label:n("Items"),value:G.items},{label:n("Supply"),value:G.supply},{label:n("Lowest Price"),value:G.lowestPrice},{label:n("Highest Price"),value:G.highestPrice},]},[n]),nc=(0,M.Z)(t&&t.length?["collectionsWithPrice",nn,y]:null,(0,i.Z)(function(){return(0,u.__generator)(this,function(n){var e;return nn===S.wO.CARD&&y!==G.lowestPrice&&y!==G.highestPrice?[2,t]:[2,Promise.all(t.map((e=(0,i.Z)(function(n){var t,e,r;return(0,u.__generator)(this,function(i){switch(i.label){case 0:return[4,Promise.all([(0,V.Um)(n.address,"asc"),(0,V.Um)(n.address,"desc")])];case 1:return e=(t=s.Z.apply(void 0,[i.sent(),2]))[0],r=t[1],[2,(0,c.Z)((0,o.Z)({},n),{lowestPrice:e,highestPrice:r})]}})}),function(n){return e.apply(this,arguments)})))]})}),{use:[T.XS]}),ns=nc.data,na=void 0===ns?[]:ns,nu=nc.status,nl=(0,l.useCallback)(function(n){return y===n?nr?"↓":"↑":""},[nr,y]),nd=(0,l.useCallback)(function(n){var t,e,r;U(1),I(n),ni(y!==n?n!==G.lowestPrice:!nr)},[nr,y]);(0,l.useEffect)(function(){e&&setTimeout(function(){window.scroll({top:50,left:0,behavior:"smooth"})},50)},[e,W]),(0,l.useEffect)(function(){var n=1;na.length%9==0&&(n=0),K(Math.max(Math.floor(na.length/9)+n,1))},[na]);var nf=(0,l.useMemo)(function(){return B()(na,function(n){return y===G.createdAt?n.createdAt?Date.parse(n.createdAt):null:parseFloat(n[y])},nr?"desc":"asc").filter(function(n){return!N.Z[n.address]})},[na,y,nr]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.Z,{children:(0,r.jsx)(C.Z,{as:"h1",scale:"xxl",color:"secondary","data-test":"nft-collections-title",children:n("Collections")})}),(0,r.jsx)(D.Z,{children:nu!==H.iF.Fetched?(0,r.jsx)(O.Z,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(h.Z,{justifyContent:"space-between",alignItems:"center",pr:[null,null,"4px"],pl:["4px",null,"0"],mb:"8px",children:[(0,r.jsx)(E.Z,{idPrefix:"clickCollection",viewMode:nn,onToggle:nt}),(0,r.jsxs)(h.Z,{width:"max-content",style:{gap:"4px"},flexDirection:"column",children:[(0,r.jsx)(p.Z,{fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:600,children:n("Sort By")}),(0,r.jsx)(x.Z,{options:no,placeHolderText:n("Select"),defaultOptionIndex:X.get(y),onOptionChange:function(n){return nd(n.value)}})]})]}),nn===S.wO.TABLE?(0,r.jsx)(m.Z,{style:{overflowX:"auto"},mb:"32px",children:(0,r.jsxs)(Z.Z,{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsxs)(v.Th,{textAlign:"left",style:{cursor:"pointer"},onClick:function(){return nd(G.createdAt)},children:[n("Collection"),nl(G.createdAt)]}),(0,r.jsxs)(v.Th,{textAlign:"left",style:{cursor:"pointer"},onClick:function(){return nd(G.volumeBNB)},children:[n("Volume"),nl(G.volumeBNB)]}),(0,r.jsxs)(v.Th,{textAlign:"left",style:{cursor:"pointer"},onClick:function(){return nd(G.lowestPrice)},children:[n("Lowest"),nl(G.lowestPrice)]}),(0,r.jsxs)(v.Th,{textAlign:"left",style:{cursor:"pointer"},onClick:function(){return nd(G.highestPrice)},children:[n("Highest"),nl(G.highestPrice)]}),(0,r.jsxs)(v.Th,{textAlign:"left",style:{cursor:"pointer"},onClick:function(){return nd(G.items)},children:[n("Items"),nl(G.items)]}),(0,r.jsxs)(v.Th,{textAlign:"left",style:{cursor:"pointer"},onClick:function(){return nd(G.supply)},children:[n("Supply"),nl(G.supply)]})]})}),(0,r.jsx)("tbody",{children:nf.map(function(n){var t=n.totalVolumeBNB?parseFloat(n.totalVolumeBNB).toLocaleString(void 0,{minimumFractionDigits:3,maximumFractionDigits:3}):"0";return(0,r.jsxs)("tr",{"data-test":"nft-collection-row",children:[(0,r.jsx)(v.Td,{style:{cursor:"pointer",minWidth:"200px"},children:(0,r.jsx)(g.Z,{to:"".concat(R.V,"/collections/").concat(n.address),children:(0,r.jsxs)(h.Z,{alignItems:"center",children:[(0,r.jsx)(j.Z,{src:n.avatar,width:48,height:48,mr:"16px"}),n.name]})})}),(0,r.jsx)(v.Td,{children:(0,r.jsxs)(h.Z,{alignItems:"center",children:[t,(0,r.jsx)(b.Z,{ml:"8px"})]})}),(0,r.jsx)(v.Td,{children:n.lowestPrice?n.lowestPrice.toLocaleString(void 0,{maximumFractionDigits:5}):(0,r.jsx)(w.Z,{width:36,height:20})}),(0,r.jsx)(v.Td,{children:n.highestPrice?n.highestPrice.toLocaleString(void 0,{maximumFractionDigits:5}):(0,r.jsx)(w.Z,{width:36,height:20})}),(0,r.jsx)(v.Td,{children:n.numberTokensListed}),(0,r.jsx)(v.Td,{children:null==n?void 0:n.totalSupply})]},n.address)}).slice(9*(W-1),9*W)})]})}):(0,r.jsx)(L.Z,{gridGap:"16px",gridTemplateColumns:["1fr","1fr","repeat(2, 1fr)","repeat(3, 1fr)"],mb:"32px","data-test":"nft-collection-row",children:nf.slice(9*(W-1),9*W).map(function(n){return(0,r.jsx)(_.default,{bgSrc:n.banner.small,avatarSrc:n.avatar,collectionName:n.name,url:"".concat(R.V,"/collections/").concat(n.address),volume:n.totalVolumeBNB?parseFloat(n.totalVolumeBNB):0},n.address)})}),(0,r.jsxs)(Q,{children:[(0,r.jsx)(Y,{onClick:function(){U(1===W?W:W-1)},children:(0,r.jsx)(P.Z,{color:1===W?"textDisabled":"primary"})}),(0,r.jsx)(p.Z,{children:n("Page %page% of %maxPage%",{page:W,maxPage:J})}),(0,r.jsx)(Y,{onClick:function(){U(W===J?W:W+1)},children:(0,r.jsx)(k.Z,{color:W===J?"textDisabled":"primary"})})]})]})})]})},$=function(){return(0,r.jsx)(U,{})}},46292:function(n,t,e){"use strict";e.r(t);var r=e(52322),i=e(76903),o=e(89495),c=e(65957),s=e(85235),a=e(46854),u=function(n){var t=n.key,e=n.bgSrc,u=n.avatarSrc,l=n.collectionName,d=n.url,f=n.volume,C=(0,c.$G)().t;return(0,r.jsx)(a.zt,{bgSrc:e,avatarSrc:u,collectionName:l,url:d,children:(0,r.jsxs)(i.Z,{alignItems:"center",children:[(0,r.jsx)(o.Z,{fontSize:"12px",color:"textSubtle",children:C("Volume")}),(0,r.jsx)(s.Kd,{amount:f})]})},t)};t.default=u},36806:function(n,t,e){"use strict";e.d(t,{J:function(){return o},V:function(){return i}});var r=e(70627),i="/nfts",o=(0,r.GI)()},8659:function(n,t,e){"use strict";e.d(t,{Z:function(){return v}});var r=e(70865),i=e(96670),o=e(26297),c=e(52322);e(2784);var s=e(92228),a=e(3411),u=e(78545),l=e(13670);function d(){var n=(0,s.Z)(["\n  0% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 50% 100%;\n  }\n  100% {\n    background-position: 50% 0%;\n  }\n"]);return d=function(){return n},n}function f(){var n=(0,s.Z)(["\n      animation: "," 3s ease infinite;\n      background-size: 400% 400%;\n    "]);return f=function(){return n},n}function C(){var n=(0,s.Z)(["\n  background: ",";\n  border-radius: ",";\n  color: ",";\n  overflow: hidden;\n  position: relative;\n\n  ","\n\n  padding: 1px 1px 3px 1px;\n\n  ","\n"]);return C=function(){return n},n}function h(){var n=(0,s.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: ",";\n  background: ",";\n  border-radius: ",";\n"]);return h=function(){return n},n}var p=(0,a.F4)(d()),x=function(n){var t=n.isActive,e=n.isSuccess,r=n.isWarning,i=n.borderBackground,o=n.theme;return i||(r?o.colors.warning:e?o.colors.success:t?"linear-gradient(180deg, ".concat(o.colors.primaryBright,", ").concat(o.colors.secondary,")"):o.colors.cardBorder)},m=a.ZP.div.withConfig({componentId:"sc-eecfaa46-0"})(C(),x,function(n){return n.theme.radii.card},function(n){var t=n.theme,e=n.isDisabled;return t.colors[e?"textDisabled":"text"]},function(n){return n.isActive&&(0,a.iv)(f(),p)},u.Dh),Z=(0,a.ZP)(l.Z).withConfig({componentId:"sc-eecfaa46-1"})(h(),function(n){return n.hasCustomBorder?"initial":"inherit"},function(n){var t=n.theme,e=n.background;return null!=e?e:t.card.background},function(n){return n.theme.radii.card});m.defaultProps={isActive:!1,isSuccess:!1,isWarning:!1,isDisabled:!1};var v=function(n){var t=n.ribbon,e=n.children,s=n.background,a=(0,o.Z)(n,["ribbon","children","background"]);return(0,c.jsx)(m,(0,i.Z)((0,r.Z)({},a),{children:(0,c.jsxs)(Z,{background:s,hasCustomBorder:!!a.borderBackground,children:[t,e]})}))}},53003:function(n,t,e){"use strict";var r=e(70865),i=e(96670),o=e(26297),c=e(52322),s=e(13670),a=function(n){var t=n.children,e=(0,o.Z)(n,["children"]);return(0,c.jsx)(s.Z,(0,i.Z)((0,r.Z)({px:["16px","24px"],mx:"auto",maxWidth:"1200px"},e),{children:t}))};t.Z=a},45349:function(n,t,e){"use strict";var r=e(70865),i=e(96670),o=e(26297),c=e(92228),s=e(52322),a=e(3411),u=e(13670),l=e(53003);function d(){var n=(0,c.Z)(["\n  background: ",";\n"]);return d=function(){return n},n}function f(){var n=(0,c.Z)(["\n  padding-top: 32px;\n  padding-bottom: 32px;\n  position: relative;\n"]);return f=function(){return n},n}var C=(0,a.ZP)(u.Z).withConfig({componentId:"sc-a56468b1-0"})(d(),function(n){var t=n.theme;return n.background||t.colors.gradientBubblegum}),h=(0,a.ZP)(l.Z).withConfig({componentId:"sc-a56468b1-1"})(f()),p=function(n){var t=n.background,e=n.children,c=(0,o.Z)(n,["background","children"]);return(0,s.jsx)(C,(0,i.Z)((0,r.Z)({background:t},c),{children:(0,s.jsx)(h,{children:e})}))};t.Z=p},3433:function(n,t,e){"use strict";var r=e(70865),i=e(96670),o=e(26297),c=e(92228),s=e(52322),a=e(2784),u=e(3411),l=e(13670),d=e(20345),f=e(89495);function C(){var n=(0,c.Z)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px 16px;\n  box-shadow: ",";\n  border: 1px solid ",";\n  border-radius: 16px;\n  background: ",";\n  transition: border-radius 0.15s;\n"]);return C=function(){return n},n}function h(){var n=(0,c.Z)(["\n  min-width: 136px;\n  height: 0;\n  position: absolute;\n  overflow: hidden;\n  background: ",";\n  z-index: ",";\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scaleY(0);\n  transform-origin: top;\n  opacity: 0;\n  width: 100%;\n\n  "," {\n    min-width: 168px;\n  }\n"]);return h=function(){return n},n}function p(){var n=(0,c.Z)(["\n      "," {\n        border-bottom: 1px solid ",";\n        box-shadow: ",";\n        border-radius: 16px 16px 0 0;\n      }\n\n      "," {\n        height: auto;\n        transform: scaleY(1);\n        opacity: 1;\n        border: 1px solid ",";\n        border-top-width: 0;\n        border-radius: 0 0 16px 16px;\n        box-shadow: ",";\n      }\n    "]);return p=function(){return n},n}function x(){var n=(0,c.Z)(["\n  cursor: pointer;\n  width: 100%;\n  position: relative;\n  background: ",";\n  border-radius: 16px;\n  height: 40px;\n  min-width: 136px;\n  user-select: none;\n  z-index: 20;\n\n  "," {\n    min-width: 168px;\n  }\n\n  ","\n\n  svg {\n    position: absolute;\n    right: 16px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n"]);return x=function(){return n},n}function m(){var n=(0,c.Z)(["\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  z-index: ",";\n"]);return m=function(){return n},n}function Z(){var n=(0,c.Z)(["\n  list-style: none;\n  padding: 8px 16px;\n  &:hover {\n    background: ",";\n  }\n"]);return Z=function(){return n},n}var v=u.ZP.div.withConfig({componentId:"sc-ac4f9611-0"})(C(),function(n){return n.theme.shadows.inset},function(n){return n.theme.colors.inputSecondary},function(n){return n.theme.colors.input}),g=u.ZP.div.withConfig({componentId:"sc-ac4f9611-1"})(h(),function(n){return n.theme.colors.input},function(n){return n.theme.zIndices.dropdown},function(n){return n.theme.mediaQueries.sm}),j=(0,u.ZP)(l.Z).withConfig({componentId:"sc-ac4f9611-2"})(x(),function(n){return n.theme.colors.input},function(n){return n.theme.mediaQueries.sm},function(n){return n.isOpen&&(0,u.iv)(p(),v,function(n){return n.theme.colors.inputSecondary},function(n){return n.theme.tooltip.boxShadow},g,function(n){return n.theme.colors.inputSecondary},function(n){return n.theme.tooltip.boxShadow})}),b=u.ZP.ul.withConfig({componentId:"sc-ac4f9611-3"})(m(),function(n){return n.theme.zIndices.dropdown}),w=u.ZP.li.withConfig({componentId:"sc-ac4f9611-4"})(Z(),function(n){return n.theme.colors.inputSecondary}),L=function(n){var t=n.options,e=n.onOptionChange,c=n.defaultOptionIndex,u=void 0===c?0:c,l=n.placeHolderText,C=(0,o.Z)(n,["options","onOptionChange","defaultOptionIndex","placeHolderText"]),h=(0,a.useState)(!1),p=h[0],x=h[1],m=(0,a.useState)(!1),Z=m[0],L=m[1],P=(0,a.useState)(u),k=P[0],M=P[1],y=function(n){x(!p),n.stopPropagation()};return(0,a.useEffect)(function(){var n=function(){x(!1)};return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}},[]),(0,a.useEffect)(function(){u&&(M(u-1),L(!0))},[u]),(0,s.jsxs)(j,(0,i.Z)((0,r.Z)({isOpen:p},C),{children:[(0,s.jsx)(v,{onClick:y,children:(0,s.jsx)(f.Z,{color:!Z&&l?"text":void 0,children:!Z&&l?l:t[k].label})}),(0,s.jsx)(d.Z,{color:"text",onClick:y}),(0,s.jsx)(g,{children:(0,s.jsx)(b,{children:t.map(function(n,r){var i;return l||r!==k?(0,s.jsx)(w,{onClick:function(){M(r),x(!1),L(!0),e&&e(t[r])},children:(0,s.jsx)(f.Z,{children:n.label})},n.label):null})})})]}))};t.Z=L},5159:function(n,t,e){"use strict";e.d(t,{Z:function(){return j}});var r=e(92228),i=e(52322);e(2784);var o=e(3411),c=e(70865),s=e(96670),a=e(62923),u=function(n){return(0,i.jsxs)(a.Z,(0,s.Z)((0,c.Z)({viewBox:"0 0 256 256"},n),{children:[(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M166.898 204.279C172.402 190.795 170.197 176.127 166.942 163.633C164.747 155.208 156.522 149.043 143.339 146.339C130.289 143.662 113.23 144.62 95.212 149.658C77.1941 154.696 61.9863 162.761 52.0088 171.877C41.9295 181.085 37.8164 190.7 40.0117 199.126C43.2669 211.619 48.4857 225.444 59.7919 234.228C70.9463 242.894 88.7701 247.193 118.461 238.891C148.152 230.589 161.467 217.582 166.898 204.279ZM119.268 241.986C179.746 225.075 176.514 188.072 169.929 162.798C164.622 142.43 131.106 136.301 94.4056 146.563C57.7053 156.825 31.7183 179.593 37.0251 199.961C43.6102 225.235 58.7891 258.897 119.268 241.986Z",fill:"#464649"}),(0,i.jsx)("path",{d:"M155.801 175.68C158.653 186.628 180.351 181.576 214.977 171.894C249.604 162.212 257.158 150.578 254.305 139.63C251.453 128.682 244.685 121.053 216.678 128.884C182.051 138.566 152.948 164.732 155.801 175.68Z",fill:"#606063"}),(0,i.jsx)("path",{d:"M159.97 178.737L175.437 178.709C178.284 178.704 178.523 174.429 177.474 164.815C176.82 158.816 173.457 154.101 171.27 155.477L159.942 163.875L159.97 178.737Z",fill:"#464649"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M162.261 177.996C160.059 177.319 159.158 176.266 158.788 174.845C158.644 174.296 158.636 173.375 159.104 171.965C159.566 170.568 160.432 168.889 161.754 166.98C164.397 163.161 168.612 158.775 174.091 154.332C185.037 145.456 200.6 136.7 217.484 131.979C231.34 128.104 239.201 128.297 243.777 130.191C248.018 131.946 250.005 135.425 251.319 140.465C251.901 142.7 251.928 144.848 251.283 146.962C250.634 149.091 249.235 151.411 246.622 153.858C241.312 158.83 231.342 163.998 214.171 168.799C196.798 173.657 182.967 177.263 173.149 178.336C168.216 178.875 164.644 178.728 162.261 177.996ZM214.977 171.894C180.351 181.576 158.653 186.628 155.801 175.68C152.948 164.732 182.051 138.566 216.678 128.884C244.685 121.053 251.453 128.682 254.305 139.63C257.158 150.578 249.604 162.212 214.977 171.894Z",fill:"#464649"}),(0,i.jsx)("path",{d:"M169.925 161.024C176.511 186.298 179.743 223.301 119.264 240.212C58.7859 257.123 43.607 223.461 37.022 198.187C31.7151 177.819 57.7022 155.052 94.4024 144.789C131.103 134.527 164.619 140.656 169.925 161.024Z",fill:"#606063"}),(0,i.jsx)("path",{d:"M62.2322 217.512C45.5076 212.12 42.4613 203.795 40.3848 196.052L41.9594 211.275L50.2352 225.685L64.4374 238.481L80.947 244.327C82.4065 243.612 89.4986 243.299 83.1029 242.028C76.7073 240.758 72.7474 234.756 69.9914 231.378C68.2638 226.484 67.7365 219.287 62.2322 217.512Z",fill:"#464649"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M166.895 202.505C172.399 189.021 170.194 174.353 166.939 161.86C164.744 153.434 156.519 147.269 143.336 144.565C130.286 141.888 113.227 142.846 95.2088 147.884C77.1909 152.922 61.9831 160.987 52.0056 170.103C41.9263 179.311 37.8132 188.926 40.0086 197.352C43.2637 209.845 48.4825 223.67 59.7887 232.454C70.9431 241.12 88.7669 245.419 118.458 237.117C148.149 228.815 161.464 215.809 166.895 202.505ZM119.264 240.212C179.743 223.301 176.511 186.298 169.925 161.024C164.619 140.656 131.103 134.527 94.4024 144.789C57.7022 155.052 31.7151 177.819 37.022 198.187C43.607 223.461 58.7859 257.123 119.264 240.212Z",fill:"#464649"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M164.233 181.686C165.018 182.322 165.157 183.497 164.543 184.311C162.98 186.382 161.187 188.422 159.188 190.412C158.469 191.128 157.327 191.104 156.636 190.36C155.945 189.615 155.968 188.431 156.687 187.716C158.576 185.834 160.252 183.925 161.7 182.007C162.314 181.193 163.448 181.05 164.233 181.686ZM57.4215 216.239C57.6566 215.235 58.6323 214.619 59.6008 214.863C73.2899 218.308 91.7045 217.793 111.035 212.388C120.262 209.808 128.779 206.37 136.271 202.374C137.157 201.901 138.245 202.263 138.701 203.181C139.157 204.099 138.809 205.226 137.923 205.699C130.195 209.821 121.438 213.352 111.976 215.998C92.2044 221.527 73.1589 222.124 58.7494 218.497C57.7809 218.253 57.1863 217.242 57.4215 216.239Z",fill:"#979797"}),(0,i.jsx)("path",{d:"M159.836 163.292C164.405 180.829 141.059 195.381 109.857 204.106C78.655 212.831 51.4793 212.682 46.8428 194.887C42.2064 177.092 65.6193 162.798 96.8214 154.074C128.024 145.349 155.266 145.755 159.836 163.292Z",fill:"#464649"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M145.831 183.549C154.508 176.998 157.462 170.578 155.854 164.406C154.245 158.233 148.575 154.225 137.894 153.086C127.333 151.96 113.281 153.898 97.8965 158.2C82.4985 162.506 69.3986 168.094 60.8132 174.54C52.1526 181.043 49.1801 187.461 50.825 193.774C52.4698 200.087 58.1557 204.083 68.7987 205.189C79.3491 206.285 93.384 204.285 108.782 199.98C124.166 195.678 137.251 190.028 145.831 183.549ZM110.264 205.113C141.466 196.388 164.405 180.829 159.836 163.292C155.266 145.755 128.024 145.349 96.8214 154.074C65.6193 162.798 42.2064 177.092 46.8428 194.887C51.4793 212.682 79.0614 213.838 110.264 205.113Z",fill:"#737373"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M103.877 181.153C89.0555 185.297 76.4977 192.072 68.1169 199.619C67.3647 200.297 66.2249 200.214 65.5711 199.434C64.9173 198.655 64.997 197.474 65.7492 196.796C74.622 188.806 87.7006 181.803 102.936 177.543C106.034 176.676 109.107 175.955 112.134 175.375C113.114 175.187 114.056 175.858 114.237 176.873C114.419 177.889 113.771 178.864 112.792 179.052C109.86 179.614 106.881 180.313 103.877 181.153ZM123.847 175.658C123.792 174.627 124.554 173.745 125.549 173.688C132.378 173.297 138.774 173.682 144.424 174.797C145.403 174.991 146.046 175.97 145.86 176.984C145.673 177.999 144.728 178.664 143.749 178.471C138.431 177.421 132.333 177.045 125.749 177.422C124.753 177.479 123.902 176.69 123.847 175.658Z",fill:"#606063"})]}))},l=function(n){return(0,i.jsx)(a.Z,(0,s.Z)((0,c.Z)({viewBox:"0 0 128 128"},n),{children:(0,i.jsxs)("svg",{width:"128",height:"128",viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"M56.7204 37.5858C56.7204 45.3822 58.0271 54.1169 60.2906 60.8591C61.4246 64.2369 62.7705 67.0285 64.249 68.946C65.742 70.8826 67.1906 71.7103 68.5307 71.7103C71.1919 71.7103 74.4165 70.5307 77.8384 68.3524C81.235 66.1902 84.7001 63.1234 87.8127 59.5481C94.0844 52.3439 98.6784 43.3694 98.6784 35.942C98.6784 28.1653 97.1567 21.2636 93.9931 16.3543C90.8793 11.5222 86.1363 8.54284 79.3564 8.54284C72.6009 8.54284 66.9825 11.9157 63.0072 17.2564C59.0174 22.6164 56.7204 29.9263 56.7204 37.5858Z",fill:"#FEDC90",stroke:"#D1884F",strokeWidth:"2.89134"}),(0,i.jsx)("path",{d:"M32.7442 66.7859C39.4364 62.9222 47.2575 60.5211 53.8454 59.9252C57.1411 59.6272 60.0564 59.7876 62.336 60.3933C64.6294 61.0028 66.1079 62.0118 66.8368 63.2742C69.6116 68.0804 69.9429 76.4856 67.7501 84.8501C65.5656 93.1829 61.0085 100.957 54.6069 104.653C47.9434 108.5 40.9505 110.185 34.8292 109.454C28.7533 108.729 23.476 105.626 20.0729 99.7316C16.6658 93.8305 16.5364 87.5528 18.8757 81.7754C21.228 75.9659 26.1018 70.6209 32.7442 66.7859Z",fill:"#D1884F",stroke:"#633001",strokeWidth:"2.89134"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M73.6122 7.76013C69.4145 8.86483 64.8207 11.0867 61.24 16.1556C53.2804 27.4231 51.7006 41.9592 58.5495 60.7386C65.3984 79.518 63.3431 89.9236 56.0487 98.3189C48.7543 106.714 29.475 108.685 23.3482 101.929C21.8481 100.274 17.4954 97.4588 20.3675 102.54C23.2397 107.622 30.7527 111.748 39.59 111.748C48.4273 111.748 55.5943 108.146 61.958 101.338C68.3217 94.5306 74.292 78.3883 68.3268 61.7709C60.6331 40.3385 62.8311 27.508 68.2893 19.7815C71.0879 15.8198 75.5453 12.3629 78.6077 10.5868C81.8233 8.72183 84.8797 8.42294 86.8682 8.42294C83.3332 6.65548 77.8099 6.65542 73.6122 7.76013Z",fill:"#633001"})]})}))};function d(){var n=(0,r.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return d=function(){return n},n}function f(){var n=(0,r.Z)(["\n	0% {\n		transform: translatey(0px);\n	}\n	50% {\n		transform: translatey(10px);\n	}\n	100% {\n		transform: translatey(0px);\n	}\n"]);return f=function(){return n},n}function C(){var n=(0,r.Z)(["\n  position: relative;\n"]);return C=function(){return n},n}function h(){var n=(0,r.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: "," 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"]);return h=function(){return n},n}function p(){var n=(0,r.Z)(["\n  animation: "," 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"]);return p=function(){return n},n}var x=(0,o.F4)(d()),m=(0,o.F4)(f()),Z=o.ZP.div.withConfig({componentId:"sc-da0aae9d-0"})(C()),v=(0,o.ZP)(l).withConfig({componentId:"sc-da0aae9d-1"})(h(),x),g=(0,o.ZP)(u).withConfig({componentId:"sc-da0aae9d-2"})(p(),m),j=function(n){var t=n.size,e=void 0===t?128:t;return(0,i.jsxs)(Z,{children:[(0,i.jsx)(v,{width:"".concat(.5*e,"px")}),(0,i.jsx)(g,{width:"".concat(e,"px")})]})}},20345:function(n,t,e){"use strict";var r=e(70865),i=e(96670),o=e(52322);e(2784);var c=e(62923),s=function(n){return(0,o.jsx)(c.Z,(0,i.Z)((0,r.Z)({viewBox:"0 0 24 24"},n),{children:(0,o.jsx)("path",{d:"M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"})}))};t.Z=s},57114:function(n,t,e){"use strict";var r=e(70865),i=e(96670),o=e(52322);e(2784);var c=e(62923),s=function(n){return(0,o.jsxs)(c.Z,(0,i.Z)((0,r.Z)({viewBox:"0 0 64 64"},n),{children:[(0,o.jsx)("path",{d:"M58.6666 34.1665C58.6666 48.8523 46.7275 59.6665 31.9999 59.6665C17.2723 59.6665 5.33325 48.8523 5.33325 34.1665C5.33325 19.4808 17.2723 8.6665 31.9999 8.6665C46.7275 8.6665 58.6666 19.4808 58.6666 34.1665Z",fill:"#EB8C00"}),(0,o.jsx)("path",{d:"M58.6666 29.8335C58.6666 44.5192 46.7275 55.3335 31.9999 55.3335C17.2723 55.3335 5.33325 44.5192 5.33325 29.8335C5.33325 15.1477 17.2723 4.3335 31.9999 4.3335C46.7275 4.3335 58.6666 15.1477 58.6666 29.8335Z",fill:"#FFD800"}),(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M50.4313 11.0848C48.0923 9.01961 45.3538 7.36511 42.3351 6.21094L7.60376 40.5648C8.9535 43.3887 10.8247 45.9001 13.0998 48.0105L50.4313 11.0848ZM24.6139 54.2485C22.7419 53.762 20.9537 53.0928 19.2734 52.259L55.1875 16.7354C56.1366 18.2849 56.918 19.9495 57.5084 21.7116L24.6139 54.2485Z",fill:"#FFE971"}),(0,o.jsx)("path",{d:"M53.6667 29.5002C53.6667 41.2698 44.0409 49.6668 32.1667 49.6668C20.2926 49.6668 10.6667 41.2698 10.6667 29.5002C10.6667 17.7305 20.2926 9.3335 32.1667 9.3335C44.0409 9.3335 53.6667 17.7305 53.6667 29.5002Z",fill:"#FFC700"}),(0,o.jsx)("path",{d:"M51.6667 20.6615C45.1982 12.2514 33.2898 9.7153 23.8129 15.1469C14.5027 20.483 10.7276 31.6814 14.4875 41.3335C12.0783 38.0902 10.6667 34.0691 10.6667 29.5527C10.6667 17.7524 20.303 9.3335 32.19 9.3335C40.7965 9.33349 48.2231 13.7468 51.6667 20.6615Z",fill:"#FFAF00"}),(0,o.jsx)("path",{d:"M23.4077 30.5L19.8827 34.0117L16.3333 30.5L19.8827 26.9883L23.4077 30.5ZM31.9999 21.9992L38.0708 28.0055L41.6202 24.4938L35.5494 18.5117L31.9999 15L28.4504 18.5117L22.4041 24.4938L25.9536 28.0055L31.9999 21.9992ZM44.1171 26.9883L40.5921 30.5L44.1416 34.0117L47.6666 30.5L44.1171 26.9883ZM31.9999 39.0008L25.9291 32.9945L22.4041 36.5063L28.4749 42.5125L31.9999 46L35.5494 42.4883L41.6202 36.482L38.0708 32.9945L31.9999 39.0008ZM31.9999 34.0117L35.5494 30.5L31.9999 26.9883L28.4504 30.5L31.9999 34.0117Z",fill:"#191326"})]}))};t.Z=s},23766:function(n,t,e){"use strict";var r=e(70865),i=e(96670),o=e(52322);e(2784);var c=e(62923),s=function(n){return(0,o.jsx)(c.Z,(0,i.Z)((0,r.Z)({viewBox:"0 0 24 24"},n),{children:(0,o.jsx)("path",{d:"M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z"})}))};t.Z=s},3549:function(n,t,e){"use strict";var r=e(70865),i=e(96670),o=e(52322);e(2784);var c=e(62923),s=function(n){return(0,o.jsx)(c.Z,(0,i.Z)((0,r.Z)({viewBox:"0 0 24 24"},n),{children:(0,o.jsx)("path",{d:"M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z"})}))};t.Z=s},16978:function(n,t,e){"use strict";e.d(t,{Td:function(){return a},Th:function(){return u}});var r=e(92228),i=e(3411),o=e(78545);function c(){var n=(0,r.Z)(["\n  border-bottom: 1px solid ",";\n  color: ",";\n  padding: 16px;\n  vertical-align: middle;\n\n  ","\n"]);return c=function(){return n},n}function s(){var n=(0,r.Z)(["\n  color: ",";\n  font-size: 12px;\n  text-transform: uppercase;\n"]);return s=function(){return n},n}var a=i.ZP.td.withConfig({componentId:"sc-ea0e7240-0"})(c(),function(n){return n.theme.colors.cardBorder},function(n){return n.theme.colors.text},o.cp),u=(0,i.ZP)(a).attrs({as:"th"}).withConfig({componentId:"sc-ea0e7240-1"})(s(),function(n){return n.theme.colors.secondary})},26229:function(n,t,e){"use strict";var r=e(92228),i=e(3411),o=e(78545),c=e(16978);function s(){var n=(0,r.Z)(["\n  max-width: 100%;\n  width: 100%;\n\n  tbody tr:last-child {\n    "," {\n      border-bottom: 0;\n    }\n  }\n\n  ","\n"]);return s=function(){return n},n}var a=i.ZP.table.withConfig({componentId:"sc-4fe367f7-0"})(s(),c.Td,o.Dh);t.Z=a}},function(n){n.O(0,[5498,6737,7397,615,6854,9774,2888,179],function(){return n(n.s=30994)}),_N_E=n.O()}]);
//# sourceMappingURL=collections-827afcdc417b1117.js.map