"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1157],{81157:function(e,n,o){o.d(n,{Z:function(){return eM}});var t=o(92228),i=o(52322),l=o(3411),s=o(51523),a=o(28543),r=o(76903),c=o(73697),d=o(45349),x=o(48497),u=o(89495),p=o(8549),h=o(97094),m=o(51500),f=o(66392),j=o(96469),g=o(65957),Z=o(99225),k=o(98757),v=o(39480),y=o(46684),b=o(6391),S=o.n(b),w=o(81834),B=o(13670),T=o(6429),C=o(7818),D=o(74009),I=o(48608),A=o(73685),P=o(76269),z=o(33431),K=function(e){var n=e.pool,o=e.isLoading,t=n.sousId,l=n.stakingToken,s=n.earningToken,a=(0,g.$G)().t,r=(0,P.X_)(l.address||""),c=(0,z.iB)(r,t,s.symbol),d=c.handleApprove,x=c.pendingTx;return(0,i.jsx)(i.Fragment,{children:void 0!==o&&o?(0,i.jsx)(D.Z,{width:"100%",height:"52px"}):(0,i.jsx)(I.Z,{isLoading:x,endIcon:x?(0,i.jsx)(A.Z,{spin:!0,color:"currentColor"}):null,disabled:x,onClick:d,width:"100%",children:a("Enable")})})},L=o(55995),X=o(77187),F=L.H(X.Z),N=o(32093),M=o(42279),W=N.d(M.Z),R=o(28425);function E(){var e=(0,t.Z)(["\n  display: inline;\n"]);return E=function(){return e},e}var q=(0,l.ZP)(u.Z).withConfig({componentId:"sc-cc99b1d5-0"})(E()),G=function(e){var n=e.pool,o=e.stakedBalance,t=n.sousId,l=n.stakingToken,s=n.earningToken,a=n.poolCategory,c=n.userData,d=n.earningTokenPrice,x=n.profileRequirement,u=a===T.jh.BINANCE,p=(0,g.$G)().t,h=(null==c?void 0:c.allowance)?new(S())(c.allowance):w.HW,m=(null==c?void 0:c.stakingTokenBalance)?new(S())(c.stakingTokenBalance):w.HW,f=(null==c?void 0:c.pendingReward)?new(S())(c.pendingReward):w.HW,j=!h.gt(0)&&!u,Z=o.gt(0),k=!c,v=(0,C.f)(x),y=v.notMeetRequired,b=v.notMeetThreshold;return(0,i.jsx)(r.Z,{flexDirection:"column",children:(0,i.jsxs)(r.Z,{flexDirection:"column",children:[(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(B.Z,{display:"inline",children:[(0,i.jsx)(q,{color:"secondary",textTransform:"uppercase",bold:!0,fontSize:"12px",children:"".concat(s.symbol," ")}),(0,i.jsx)(q,{color:"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:p("Earned")})]}),(0,i.jsx)(W,{earnings:f,earningTokenSymbol:s.symbol,earningTokenDecimals:s.decimals,sousId:t,earningTokenPrice:d,isBnbPool:u,isLoading:k})]}),(0,i.jsxs)(B.Z,{display:"inline",children:[(0,i.jsxs)(q,{color:Z?"secondary":"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:[Z?l.symbol:p("Stake")," "]}),(0,i.jsx)(q,{color:Z?"textSubtle":"secondary",textTransform:"uppercase",bold:!0,fontSize:"12px",children:Z?p("Staked"):"".concat(l.symbol)})]}),y||b?(0,i.jsx)(R.Q,{profileRequirement:x}):j?(0,i.jsx)(K,{pool:n,isLoading:k}):(0,i.jsx)(F,{isLoading:k,pool:n,stakingTokenBalance:m,stakedBalance:o,isBnbPool:u,isStaked:Z})]})})},H=o(9951),J=o(97421),V=function(e){var n=e.pool,o=e.stakedBalance,t=e.performanceFee,l=e.showIcon;return(0,i.jsx)(H.b,{isVaultKey:Boolean(n.vaultKey),children:(0,i.jsx)(J.Z,{pool:n,stakedBalance:o,performanceFee:void 0===t?0:t,showIcon:void 0===l||l})})},$=o(45249),U=o(5312),_=o(70865),O=o(96670),Q=o(87394),Y=o(53975),ee=o(72135),en=o(26488),eo=60/o(7599).hJ*4;function et(e){var n=(0,Q.Z)((0,ee.tw)(),2),o=n[0],t=n[1],l=(0,Q.Z)((0,ee.Yi)(),2),a=l[0],r=l[1],c=(0,s.mA)().address,d=(0,en.Xh)();return(0,i.jsx)(Y.t,(0,O.Z)((0,_.Z)({},e),{stakedOnly:o,setStakedOnly:t,viewMode:a,setViewMode:r,account:c,threshHold:d>0?d+eo:0}))}var ei=o(2784),el=o(62392),es=o(82528),ea=o(5251),er=o(61203),ec=o(11298),ed=o(64343),ex=o(18426);function eu(){var e=(0,t.Z)(["\n  flex: 4.5;\n  "," {\n    flex: 1 0 120px;\n  }\n"]);return eu=function(){return e},e}var ep=(0,l.ZP)(er.q).withConfig({componentId:"sc-efcdf2ab-0"})(eu(),function(e){return e.theme.mediaQueries.sm}),eh=function(e){var n=e.pool,o=e.account,t=(0,g.$G)().t,l=(0,el.Z)().isMobile,s=n.sousId,a=n.earningToken,c=n.poolCategory,d=n.userData,x=n.earningTokenPrice,p=(null==d?void 0:d.pendingReward)?new(S())(d.pendingReward):w.HW,h=(0,ex.mW)(p,a.decimals),m=(0,ex.mW)(p.multipliedBy(x),a.decimals),f=o&&p.gt(0),j=(0,ex.NJ)(p,a.decimals),Z=(0,ex.uf)(h,3,3),k=c===T.jh.BINANCE,v=t("%asset% Earned",{asset:a.symbol}),y=(0,Q.Z)((0,ec.Z)((0,i.jsx)(M.Z,{formattedBalance:Z,fullBalance:j,earningTokenSymbol:a.symbol,earningsDollarValue:m,sousId:s,isBnbPool:k})),1)[0],b=function(e){e.stopPropagation(),y()};return(0,i.jsx)(ep,{role:"cell",children:(0,i.jsxs)(er.J,{children:[(0,i.jsx)(u.Z,{fontSize:"12px",color:"textSubtle",textAlign:"left",children:v}),!n.userDataLoaded&&o?(0,i.jsx)(D.Z,{width:"80px",height:"16px"}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.Z,{children:(0,i.jsxs)(B.Z,{mr:"8px",height:"32px",onClick:f?b:void 0,children:[(0,i.jsx)(ed.Z,{mt:"4px",bold:!l,fontSize:l?"14px":"16px",color:f?"primary":"textDisabled",decimals:f?5:1,value:f?h:0}),f?(0,i.jsx)(i.Fragment,{children:x>0&&(0,i.jsx)(ed.Z,{display:"inline",fontSize:"12px",color:"textSubtle",decimals:2,prefix:"~",value:m,unit:" USD"})}):(0,i.jsx)(u.Z,{mt:"4px",fontSize:"12px",color:"textDisabled",children:"0 USD"})]})})})]})})},em=o(51110);function ef(){var e=(0,t.Z)(["\n  flex: 2 0 100px;\n"]);return ef=function(){return e},e}var ej=(0,l.ZP)(er.q).withConfig({componentId:"sc-3dd9e8e1-0"})(ef()),eg=function(e){var n=e.pool,o=(0,g.$G)().t,t=n.stakingToken,l=n.totalStaked,s=n.vaultKey,a=(0,Z.eB)(s).totalCakeInVault,c=(0,ei.useMemo)(function(){return s?(0,ex.mW)(a,t.decimals):(0,ex.mW)(l,t.decimals)},[s,a,l,t.decimals]);return(0,i.jsx)(ej,{role:"cell",children:(0,i.jsxs)(er.J,{children:[(0,i.jsx)(u.Z,{fontSize:"12px",color:"textSubtle",textAlign:"left",children:o("Total staked")}),l&&l.gte(0)?(0,i.jsx)(r.Z,{height:"20px",alignItems:"center",children:(0,i.jsx)(ed.Z,{fontSize:"16px",value:c,decimals:0,unit:" ".concat(t.symbol)})}):(0,i.jsx)(D.Z,{width:"80px",height:"16px"})]})})},eZ=o(70581),ek=o(5305),ev=o(9681);function ey(){var e=(0,t.Z)(["\n  flex: 2 0 100px;\n"]);return ey=function(){return e},e}var eb=(0,l.ZP)(er.q).withConfig({componentId:"sc-645c663f-0"})(ey()),eS=function(e){var n=e.pool,o=n.sousId,t=n.totalStaked,l=n.startBlock,s=n.endBlock,a=n.isFinished,d=(0,en.je)(),x=(0,g.$G)().t,p=(0,ev.zy)(n,d),h=p.shouldShowBlockCountdown,m=p.blocksUntilStart,f=p.blocksRemaining,j=p.hasPoolStarted,Z=p.blocksToDisplay,k=h?(0,i.jsxs)(r.Z,{alignItems:"center",children:[(0,i.jsxs)(r.Z,{flex:"1.3",children:[(0,i.jsx)(ed.Z,{fontSize:"16px",value:Z,decimals:0}),(0,i.jsx)(u.Z,{ml:"4px",textTransform:"lowercase",children:x("Blocks")})]}),(0,i.jsx)(r.Z,{flex:"1",children:(0,i.jsx)(c.Z,{external:!0,href:(0,ek.C)(j?s:l,"countdown"),onClick:function(e){return e.stopPropagation()},children:(0,i.jsx)(eZ.Z,{ml:"4px"})})})]}):(0,i.jsx)(u.Z,{children:"-"}),v=j&&!t.gt(0)||!d||!f&&!m;return(0,i.jsx)(eb,{role:"cell",children:(0,i.jsxs)(er.J,{children:[(0,i.jsx)(u.Z,{fontSize:"12px",color:"textSubtle",textAlign:"left",children:x(j||!h?"Ends in":"Starts in")}),v&&0!==o&&!a?(0,i.jsx)(D.Z,{width:"80px",height:"16px"}):k]})})},ew=o(1108),eB=o(42863),eT=o(14085),eC=o(93638),eD=function(e){var n=e.pool,o=e.account,t=(0,g.$G)().t,l=(0,el.Z)().isMobile,s=(0,Z.eB)(n.vaultKey),a=s.userData,c=a.userShares,d=a.balance,x=d.cakeAsBigNumber,p=d.cakeAsNumberBalance,h=a.isLoading,m=c.gt(0),f=n.vaultKey&&m,j=n.stakingTokenPrice,k=n.stakingToken,v=n.userData,y=(0,ex.mW)(x.multipliedBy(j),k.decimals),b=(null==v?void 0:v.stakedBalance)?new(S())(v.stakedBalance):w.HW,T=(0,ex.mW)(b,k.decimals),C=(0,ex.mW)(b.multipliedBy(j),k.decimals),I="".concat(n.stakingToken.symbol," ").concat(t(n.vaultKey===eC.om.CakeVault&&s.userData.locked?"Locked":"Staked")),A=o&&(b.gt(0)||f),P=n.vaultKey?h:!n.userDataLoaded;return(0,i.jsx)(er.q,{role:"cell",flex:n.vaultKey===eC.om.CakeFlexibleSideVault?"1 0 162px":n.vaultKey!==eC.om.CakeVault||A?"2 0 100px":"1 0 120px",children:(0,i.jsxs)(er.J,{children:[(0,i.jsx)(u.Z,{fontSize:"12px",color:"textSubtle",textAlign:"left",children:I}),P&&o?(0,i.jsx)(D.Z,{width:"80px",height:"16px"}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.Z,{children:(0,i.jsxs)(B.Z,{mr:"8px",height:"32px",children:[(0,i.jsx)(ed.Z,{mt:"4px",bold:!l,fontSize:l?"14px":"16px",color:A?"primary":"textDisabled",decimals:A?5:1,value:A?n.vaultKey?Number.isNaN(p)?0:p:T:0}),A?(0,i.jsx)(ed.Z,{display:"inline",fontSize:"12px",color:"textSubtle",decimals:2,prefix:"~",value:n.vaultKey?y:C,unit:" USD"}):(0,i.jsx)(u.Z,{mt:"4px",fontSize:"12px",color:"textDisabled",children:"0 USD"})]})})})]})})},eI=(0,ei.memo)(function(e){var n=e.vaultKey,o=e.account,t=e.initialActivity,l=(0,el.Z)(),s=l.isXs,a=l.isSm,r=l.isMd,c=l.isLg,d=l.isXl,x=l.isXxl,u=d||x,p=(0,Z.YX)(n);return(0,i.jsxs)(es.A,{initialActivity:t,panel:(0,i.jsx)(ew.Z,{account:o,pool:p,expanded:!0,breakpoints:{isXs:s,isSm:a,isMd:r,isLg:c,isXl:d,isXxl:x}}),children:[(0,i.jsx)(ea.Z,{pool:p}),u&&(0,i.jsx)(eB.Z,{pool:p,account:o}),u?(0,i.jsx)(eD,{pool:p,account:o}):null,(0,i.jsx)(eT.Z,{pool:p}),(c||d||x)&&(0,i.jsx)(eg,{pool:p})]})}),eA=function(e){var n=e.sousId,o=e.account,t=e.initialActivity,l=(0,el.Z)(),s=l.isXs,a=l.isSm,r=l.isMd,c=l.isLg,d=l.isXl,x=l.isXxl,u=l.isDesktop,p=(0,Z.AI)(n).pool;return(0,i.jsxs)(es.A,{initialActivity:t,panel:(0,i.jsx)(ew.Z,{account:o,pool:p,expanded:!0,breakpoints:{isXs:s,isSm:a,isMd:r,isLg:c,isXl:d,isXxl:x}}),children:[(0,i.jsx)(ea.Z,{pool:p}),(0,i.jsx)(eh,{pool:p,account:o}),(c||d||x)&&(0,i.jsx)(eg,{pool:p}),(0,i.jsx)(em.Z,{pool:p}),u&&(0,i.jsx)(eS,{pool:p})]})},eP=(0,ei.memo)(eA);function ez(){var e=(0,t.Z)(["\n  justify-content: center;\n"]);return ez=function(){return e},e}function eK(){var e=(0,t.Z)(["\n  padding-bottom: 32px;\n  flex-direction: column;\n  "," {\n    flex-direction: row;\n  }\n"]);return eK=function(){return e},e}function eL(){var e=(0,t.Z)(["\n  font-weight: 400;\n  white-space: nowrap;\n  text-decoration: underline;\n"]);return eL=function(){return e},e}var eX=(0,l.ZP)(a.Z).withConfig({componentId:"sc-1c90c2e7-0"})(ez()),eF=(0,l.ZP)(r.Z).withConfig({componentId:"sc-1c90c2e7-1"})(eK(),function(e){return e.theme.mediaQueries.md}),eN=(0,l.ZP)(c.Z).withConfig({componentId:"sc-1c90c2e7-2"})(eL()),eM=function(){var e=(0,g.$G)().t,n=(0,s.mA)().address,o=(0,Z.f6)(),t=o.pools,l=o.userDataLoaded;return(0,Z.l7)(),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.Z,{children:(0,i.jsx)(r.Z,{justifyContent:"space-between",flexDirection:["column",null,null,"row"],children:(0,i.jsxs)(r.Z,{flex:"1",flexDirection:"column",mr:["8px",0],children:[(0,i.jsx)(x.Z,{as:"h1",scale:"xxl",color:"secondary",mb:"24px",children:e("Syrup Pools")}),(0,i.jsx)(x.Z,{scale:"md",color:"text",children:e("Just stake some tokens to earn.")}),(0,i.jsx)(x.Z,{scale:"md",color:"text",children:e("High APR, low risk.")})]})})}),(0,i.jsx)(k.Z,{children:(0,i.jsx)(et,{pools:t,children:function(o){var t=o.chosenPools,s=o.viewMode,a=o.stakedOnly,c=o.normalizedUrlSearch,d=o.showFinishedPools;return(0,i.jsxs)(i.Fragment,{children:[d&&(0,i.jsxs)(eF,{children:[(0,i.jsx)(u.Z,{fontSize:["16px",null,"20px"],color:"failure",pr:"4px",children:e("Looking for v1 CAKE syrup pools?")}),(0,i.jsxs)(eN,{href:"/migration",fontSize:["16px",null,"20px"],color:"failure",children:[e("Go to migration page"),"."]})]}),n&&!l&&a&&(0,i.jsx)(r.Z,{justifyContent:"center",mb:"4px",children:(0,i.jsx)(p.Z,{})}),s===h.w.CARD?(0,i.jsx)(eX,{children:t.map(function(o){var t,l,s,r;return o.vaultKey?(0,i.jsx)(U.Z,{pool:o,showStakedOnly:a},o.vaultKey):(0,i.jsx)(m.A,{pool:o,isStaked:Boolean(null==o?void 0:null===(t=o.userData)||void 0===t?void 0:null===(l=t.stakedBalance)||void 0===l?void 0:l.gt(0)),cardContent:n?(0,i.jsx)(G,{pool:o,stakedBalance:null==o?void 0:null===(s=o.userData)||void 0===s?void 0:s.stakedBalance}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.Z,{mb:"10px",textTransform:"uppercase",fontSize:"12px",color:"textSubtle",bold:!0,children:e("Start earning")}),(0,i.jsx)(v.Z,{})]}),tokenPairImage:(0,i.jsx)(y.q,{primaryToken:o.earningToken,secondaryToken:o.stakingToken,width:64,height:64}),cardFooter:(0,i.jsx)($.Z,{pool:o,account:n}),aprRow:(0,i.jsx)(V,{pool:o,stakedBalance:null==o?void 0:null===(r=o.userData)||void 0===r?void 0:r.stakedBalance})},o.sousId)})}):(0,i.jsx)(f.N,{children:t.map(function(e){var o,t;return e.vaultKey?(0,i.jsx)(eI,{initialActivity:c.toLowerCase()===(null===(o=e.earningToken.symbol)||void 0===o?void 0:o.toLowerCase()),vaultKey:e.vaultKey,account:n},e.vaultKey):(0,i.jsx)(eP,{initialActivity:c.toLowerCase()===(null===(t=e.earningToken.symbol)||void 0===t?void 0:t.toLowerCase()),sousId:e.sousId,account:n},e.sousId)})}),(0,i.jsx)(j.Z,{mx:"auto",mt:"12px",src:"/images/decorations/3d-syrup-bunnies.png",alt:"Pancake illustration",width:192,height:184.5})]})}})})]})}}}]);
//# sourceMappingURL=1157-8b0753cf2c4776c5.js.map