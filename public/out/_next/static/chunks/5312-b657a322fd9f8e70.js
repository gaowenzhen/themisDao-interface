"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5312],{5312:function(e,n,t){t.d(n,{_:function(){return eB},Z:function(){return eP}});var o=t(70865),i=t(96670),r=t(26297),a=t(92228),l=t(52322),s=t(95134),c=t(59482),d=t(13670),u=t(76903),x=t(89495),p=t(89718),h=t(76554),m=t(94854),f=t(74009),k=t(51523),j=t(39480),Z=t(73486),g=t(65957),b=t(99225),v=t(93638),S=t(3411),w=t(45249),y=t(63992),T=t(26786),C=t(8919),A=t(9681),D=t(69689),E=t(83931),F=t(64343),I=t(55440),L=function(e){var n=e.cakeToDisplay,t=e.pool,o=e.account,i=(0,D.Z)((0,l.jsx)(I.Z,{pool:t,account:o}),{placement:"bottom-end"}),r=i.targetRef,a=i.tooltip,s=i.tooltipVisible;return(0,l.jsxs)(l.Fragment,{children:[s&&a,(0,l.jsx)(E.Z,{ref:r,small:!0,children:(0,l.jsx)(F.Z,{fontSize:"14px",value:n})})]})},B=function(e){var n=e.pool,t=(0,g.$G)().t,o=(0,k.mA)().address,i=(0,b.eB)(n.vaultKey),r=i.pricePerFullShare,a=i.userData,s=(0,C.Iu)(),c=(0,A.UN)(o,a.cakeAtLastUserAction,a.userShares,r,s.toNumber(),n.vaultKey===v.om.CakeVault?a.currentPerformanceFee.plus(a.currentOverdueFee):null),d=c.hasAutoEarnings,p=c.autoCakeToDisplay;return a.userShares.gt(0)&&o?(0,l.jsxs)(u.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,l.jsx)(x.Z,{fontSize:"14px",children:"".concat(t("Recent CAKE profit"),":")}),d&&(0,l.jsx)(L,{cakeToDisplay:p,pool:n,account:o})]}):null},P=t(87394),z=t(11298),K=t(48608),V=t(3188),U=t(27156),H=t(53887),W=t(2784),G=t(18666);function M(){var e=(0,a.Z)(["\n  &:hover {\n    opacity: 0.5;\n  }\n"]);return M=function(){return e},e}var N=(0,S.ZP)(u.Z).withConfig({componentId:"sc-7c0f09ab-0"})(M()),R=(0,W.memo)(function(e){var n=e.pool,t=(0,g.$G)().t,o=(0,H.o)(),i=o.flexibleApy,r=o.lockedApy,a=(0,P.Z)((0,z.Z)((0,l.jsx)(G.E,{pool:n})),1)[0],s=(0,P.Z)((0,z.Z)((0,l.jsx)(G.E,{pool:n,initialView:1})),1)[0];return(0,l.jsxs)(U.m5,{children:[(0,l.jsxs)(u.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,l.jsxs)(x.Z,{color:"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:[t("Flexible")," APY:"]}),i?(0,l.jsxs)(N,{alignItems:"center",justifyContent:"flex-start",children:[(0,l.jsx)(F.Z,{fontSize:"16px",value:parseFloat(i),decimals:2,unit:"%",bold:!0}),(0,l.jsx)(K.Z,{onClick:function(e){e.stopPropagation(),a()},variant:"text",width:"20px",height:"20px",padding:"0px",marginLeft:"4px",children:(0,l.jsx)(V.Z,{color:"textSubtle",width:"20px"})})]}):(0,l.jsx)(f.Z,{width:"80px",height:"16px"})]}),n.vaultKey===v.om.CakeVault&&(0,l.jsxs)(u.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,l.jsxs)(x.Z,{color:"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:[t("Locked")," APY:"]}),r?(0,l.jsxs)(c.Z,{gap:"4px",flexWrap:"wrap",justifyContent:"flex-end",children:[(0,l.jsx)(x.Z,{style:{whiteSpace:"nowrap"},bold:!0,children:t("Up to")}),(0,l.jsxs)(N,{alignItems:"center",children:[(0,l.jsx)(F.Z,{fontSize:"16px",value:parseFloat(r),decimals:2,unit:"%",bold:!0}),(0,l.jsx)(K.Z,{onClick:function(e){e.stopPropagation(),s()},variant:"text",width:"20px",height:"20px",padding:"0px",marginLeft:"4px",children:(0,l.jsx)(V.Z,{color:"textSubtle",width:"20px"})})]})]}):(0,l.jsx)(f.Z,{width:"80px",height:"16px"})]})]})}),$=t(6391),Y=t.n($),O=t(81834),_=t(73685),J=t(33431),q=function(e){var n=e.vaultKey,t=e.isLoading,o=e.setLastUpdated,i=(0,g.$G)().t,r=(0,J.Le)(n,o),a=r.handleApprove,s=r.pendingTx;return(0,l.jsx)(l.Fragment,{children:void 0!==t&&t?(0,l.jsx)(f.Z,{width:"100%",height:"52px"}):(0,l.jsx)(K.Z,{isLoading:s,endIcon:s?(0,l.jsx)(_.Z,{spin:!0,color:"currentColor"}):null,disabled:s,onClick:a,width:"100%",children:i("Enable")})})},X=t(69688),Q=t(68528),ee=t(18353),en=t(26595),et=t(93058),eo=t(99269),ei=t(29420),er=t(18426),ea=t(85074),el=function(e){var n=e.pool,t=e.stakingTokenBalance,o=e.performanceFee,i=(0,b.eB)(n.vaultKey).userData.balance,r=i.cakeAsBigNumber,a=i.cakeAsNumberBalance,s=n.stakingToken,c=(0,C.Iu)(),p=c.gt(0)?(0,er.mW)(r.multipliedBy(c),s.decimals):0,h=(0,P.Z)((0,z.Z)((0,l.jsx)(X.Z,{tokenSymbol:s.symbol})),1)[0],m=(0,P.Z)((0,z.Z)((0,l.jsx)(ee.Z,{stakingMax:t,performanceFee:o,pool:n})),1)[0],k=(0,P.Z)((0,z.Z)((0,l.jsx)(ee.Z,{stakingMax:r,pool:n,isRemovingStake:!0}),!0,!0,"withdraw-vault-".concat(n.sousId,"-").concat(n.vaultKey)),1)[0];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(u.Z,{mb:"16px",justifyContent:"space-between",alignItems:"center",children:[(0,l.jsxs)(u.Z,{flexDirection:"column",children:[(0,l.jsx)(F.Z,{fontSize:"20px",bold:!0,value:a,decimals:5}),(0,l.jsx)(x.Z,{as:u.Z,fontSize:"12px",color:"textSubtle",flexWrap:"wrap",children:c.gt(0)?(0,l.jsx)(F.Z,{value:p,fontSize:"12px",color:"textSubtle",decimals:2,prefix:"~",unit:" USD"}):(0,l.jsx)(f.Z,{mt:"1px",height:16,width:64})})]}),(0,l.jsxs)(u.Z,{children:[(0,l.jsx)(et.Z,{variant:"secondary",onClick:function(){k()},mr:"6px",children:(0,l.jsx)(eo.Z,{color:"primary",width:"24px"})}),(0,l.jsx)(et.Z,{variant:"secondary",onClick:t.gt(0)?m:h,children:(0,l.jsx)(ei.Z,{color:"primary",width:"24px",height:"24px"})})]})]}),n.vaultKey===v.om.CakeVault&&(0,l.jsx)(d.Z,{mb:"16px",children:(0,l.jsx)(ea.Z,{stakingToken:s,currentStakedAmount:a})})]})},es=function(e){var n=e.pool,t=e.stakingTokenBalance,o=e.accountHasSharesStaked,i=e.performanceFee,r=n.stakingToken,a=n.userDataLoaded,s=(0,P.Z)((0,z.Z)((0,l.jsx)(X.Z,{tokenSymbol:r.symbol})),1)[0],c=(0,P.Z)((0,z.Z)((0,l.jsx)(ee.Z,{stakingMax:t,pool:n,performanceFee:i})),1)[0],d=(0,P.Z)((0,z.Z)((0,l.jsx)(en.Z,{currentBalance:t,stakingToken:r,stakingTokenBalance:t})),1)[0];return(0,l.jsx)(u.Z,{flexDirection:"column",children:a?o?(0,l.jsx)(el,{pool:n,stakingTokenBalance:t,performanceFee:i}):(0,l.jsx)(Q.w,{onFlexibleClick:t.gt(0)?c:s,onLockedClick:n.vaultKey===v.om.CakeVault?d:null}):(0,l.jsx)(f.Z,{width:"100%",height:"52px"})})};function ec(){var e=(0,a.Z)(["\n  display: inline;\n"]);return ec=function(){return e},e}var ed=(0,S.ZP)(x.Z).withConfig({componentId:"sc-4a96a4b0-0"})(ec()),eu=function(e){var n=e.pool,t=e.accountHasSharesStaked,o=e.isLoading,i=e.performanceFee,r=n.stakingToken,a=n.userData,s=(0,g.$G)().t,c=(null==a?void 0:a.stakingTokenBalance)?new(Y())(a.stakingTokenBalance):O.HW,x=(0,J.dI)(n.vaultKey),p=x.isVaultApproved,h=x.setLastUpdated;return(0,l.jsx)(u.Z,{flexDirection:"column",children:(0,l.jsxs)(u.Z,{flexDirection:"column",children:[(0,l.jsxs)(d.Z,{display:"inline",children:[(0,l.jsxs)(ed,{color:t?"secondary":"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:[t?r.symbol:s("Stake")," "]}),(0,l.jsx)(ed,{color:t?"textSubtle":"secondary",textTransform:"uppercase",bold:!0,fontSize:"12px",children:t?s("Staked"):"".concat(r.symbol)})]}),p?(0,l.jsx)(es,{pool:n,stakingTokenBalance:c,accountHasSharesStaked:t,performanceFee:i}):(0,l.jsx)(q,{vaultKey:n.vaultKey,isLoading:o,setLastUpdated:h})]})})},ex=t(27240),ep=t(84102),eh=t(78933),em=t(22868),ef=t(36695),ek=t(16844),ej=t(30344),eZ=t(99420),eg=t(62164),eb=t(56897),ev=function(e){var n=e.userShares,t=e.locked,o=e.lockEndTime,i=e.lockStartTime,r=e.stakingToken,a=e.stakingTokenBalance,s=e.lockedAmount,c=(0,W.useMemo)(function(){return(0,ex.cP)({userShares:n,locked:t,lockEndTime:o})},[n,t,o]),x=(0,g.$G)().t,p=(0,er.mW)(s),h=(0,W.useMemo)(function(){return a?new(Y())(a):O.HW},[a]);return c===ex.PS.Locked?(0,l.jsxs)(u.Z,{children:[(0,l.jsx)(d.Z,{width:"100%",mr:"4px",children:(0,l.jsx)(eZ.Z,{lockEndTime:o,lockStartTime:i,currentLockedAmount:s,stakingToken:r,currentBalance:h,stakingTokenBalance:a})}),(0,l.jsx)(d.Z,{width:"100%",ml:"4px",children:(0,l.jsx)(eg.Z,{lockEndTime:o,lockStartTime:i,stakingToken:r,currentBalance:h,currentLockedAmount:p,children:x("Extend")})})]}):(0,l.jsx)(eb.Z,{lockEndTime:o,lockStartTime:i,position:c,currentLockedAmount:p,stakingToken:r})},eS=t(53331),ew=t(28274),ey=t(73697);function eT(){var e=(0,a.Z)(["\n  display: inline;\n"]);return eT=function(){return e},e}var eC=(0,S.ZP)(ey.Z).withConfig({componentId:"sc-dfdf4783-0"})(eT()),eA=function(){var e=(0,g.$G)().t,n=(0,b.cq)(),t=(0,b.dd)(),o=(0,A.XW)(t),i=(0,D.Z)((0,l.jsxs)(d.Z,{children:[(0,l.jsx)(x.Z,{children:e("The number of iCAKE equals the locked staking amount if the staking duration is longer than %weeks% weeks. If the staking duration is less than %weeks% weeks, it will linearly decrease based on the staking duration.",{weeks:o})}),(0,l.jsx)(eC,{external:!0,href:"https://docs.pancakeswap.finance/products/ifo-initial-farm-offering/icake",children:e("Learn more about iCAKE")})]}),{placement:"bottom-start"}),r=i.targetRef,a=i.tooltip,s=i.tooltipVisible;return(0,l.jsxs)(u.Z,{alignItems:"center",justifyContent:"space-between",children:[s&&a,(0,l.jsx)(E.Z,{children:(0,l.jsx)(x.Z,{ref:r,color:"textSubtle",bold:!0,fontSize:"12px",children:e("iCAKE")})}),(0,l.jsx)(ep.Z,{color:"text",bold:!0,fontSize:"16px",decimals:3,value:(0,er.mW)(n)})]})},eD=t(8810),eE=function(e){var n,t=e.stakingToken,o=e.stakingTokenBalance,i=e.userData,r=e.showICake,a=(0,g.$G)().t,s=(0,W.useMemo)(function(){return(0,ex.cP)({userShares:null==i?void 0:i.userShares,locked:null==i?void 0:i.locked,lockEndTime:null==i?void 0:i.lockEndTime})},[i]),c=(0,W.useMemo)(function(){var e;return null==i?void 0:null===(e=i.balance)||void 0===e?void 0:e.cakeAsBigNumber},[null==i?void 0:null===(n=i.balance)||void 0===n?void 0:n.cakeAsBigNumber]),p=(0,er.mW)(c),h=(0,ef.Tx)(p),m=(0,eD.Z)({lockStartTime:null==i?void 0:i.lockStartTime,lockEndTime:null==i?void 0:i.lockEndTime,burnStartTime:null==i?void 0:i.burnStartTime}),f=m.weekDuration,k=m.lockEndDate,j=m.secondDuration,Z=m.remainingTime,b=m.burnStartTime,v=(0,H.o)({duration:j}).lockedApy,S=(0,W.useMemo)(function(){return(0,er.mW)(c.minus(null==i?void 0:i.cakeAtLastUserAction))},[c,null==i?void 0:i.cakeAtLastUserAction]),w=a("Calculated based on current rates and subject to change based on pool conditions. It is an estimate provided for your convenience only, and by no means represents guaranteed returns."),y=(0,D.Z)(w,{placement:"bottom-start"}),T=y.targetRef,C=y.tooltip,A=y.tooltipVisible,F=a("After Burning starts at %burnStartTime%. You need to renew your fix-term position, to initiate a new lock or convert your staking position to flexible before it starts. Otherwise all the rewards will be burned within the next 90 days.",{burnStartTime:b}),I=(0,D.Z)(F,{placement:"bottom"}),L=I.targetRef,B=I.tooltip,P=I.tooltipVisible;return(0,l.jsxs)(U.m5,{children:[(0,l.jsxs)(u.Z,{justifyContent:"space-between",mb:"16px",children:[(0,l.jsxs)(d.Z,{children:[(0,l.jsx)(x.Z,{color:"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:a("CAKE locked")}),(0,l.jsx)(ep.Z,{color:"text",bold:!0,fontSize:"16px",value:p,decimals:5}),(0,l.jsx)(ep.Z,{value:h,fontSize:"12px",color:"textSubtle",decimals:2,prefix:"~",unit:" USD"})]}),(0,l.jsxs)(d.Z,{children:[(0,l.jsx)(x.Z,{color:"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:a("Unlocks In")}),(0,l.jsxs)(x.Z,{color:s>=ex.PS.LockedEnd?"#D67E0A":"text",bold:!0,fontSize:"16px",children:[s>=ex.PS.LockedEnd?a("Unlocked"):Z,P&&B,(0,l.jsx)("span",{ref:L,children:(0,l.jsx)(eh.Z,{ml:"4px",width:"20px",height:"20px",color:"textSubtle"})})]}),(0,l.jsx)(x.Z,{color:s>=ex.PS.LockedEnd?"#D67E0A":"text",fontSize:"12px",children:a("On %date%",{date:k})})]})]}),(0,l.jsx)(d.Z,{mb:"16px",children:(0,l.jsx)(ev,{userShares:null==i?void 0:i.userShares,locked:null==i?void 0:i.locked,lockEndTime:null==i?void 0:i.lockEndTime,lockStartTime:null==i?void 0:i.lockStartTime,stakingToken:t,stakingTokenBalance:o,lockedAmount:c})}),(0,l.jsx)(em.Z,{}),![ex.PS.LockedEnd,ex.PS.AfterBurning].includes(s)&&(0,l.jsxs)(u.Z,{alignItems:"center",justifyContent:"space-between",children:[A&&C,(0,l.jsx)(E.Z,{children:(0,l.jsx)(x.Z,{ref:T,color:"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:a("APY")})}),(0,l.jsx)(ep.Z,{color:"text",bold:!0,fontSize:"16px",value:parseFloat(v),decimals:2,unit:"%"})]}),(0,l.jsx)(ew.Z,{weekDuration:f}),![ex.PS.LockedEnd,ex.PS.AfterBurning].includes(s)&&(0,l.jsx)(eS.Z,{secondDuration:j}),(0,l.jsxs)(u.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,l.jsx)(x.Z,{color:"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:a("Recent CAKE profit")}),(0,l.jsx)(ep.Z,{color:"text",bold:!0,fontSize:"16px",value:S,decimals:5})]}),s===ex.PS.LockedEnd&&(0,l.jsxs)(u.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,l.jsx)(x.Z,{color:"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:a("After Burning In")}),(0,l.jsx)(x.Z,{color:"failure",bold:!0,children:(0,l.jsx)(ej.Z,{lockEndTime:null==i?void 0:i.lockEndTime})})]}),s===ex.PS.AfterBurning&&(0,l.jsxs)(u.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,l.jsx)(x.Z,{color:"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:a("After burning")}),(0,l.jsx)(x.Z,{color:"failure",bold:!0,children:(0,ek.Z)(null==i?void 0:i.currentOverdueFee)?"-":a("%amount% Burned",{amount:(0,er.NJ)(null==i?void 0:i.currentOverdueFee,18,5)})})]}),r&&(0,l.jsx)(eA,{})]})},eF=(0,W.memo)(eE);function eI(){var e=(0,a.Z)(["\n  min-height: ",";\n"]);return eI=function(){return e},e}var eL=(0,S.ZP)(s.Z).withConfig({componentId:"sc-cf8ac297-0"})(eI(),function(e){return e.isLoading?"0":"254px"}),eB=function(e){var n,t=e.isLoading,o=void 0!==t&&t,i=e.account,r=e.pool,a=e.vaultPool,s=e.accountHasSharesStaked,p=e.showICake,h=e.performanceFeeAsDecimal,m=e.defaultFooterExpanded,f=(0,g.$G)().t;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(eL,{isLoading:o,children:[i&&r.vaultKey===v.om.CakeVault&&(0,l.jsx)(y.X,{userData:a.userData}),i&&r.vaultKey===v.om.CakeVault&&a.userData.locked?(0,l.jsx)(eF,{userData:a.userData,stakingToken:null==r?void 0:r.stakingToken,stakingTokenBalance:null==r?void 0:null===(n=r.userData)||void 0===n?void 0:n.stakingTokenBalance,showICake:p}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(R,{pool:r}),(0,l.jsxs)(c.Z,{mt:"16px",gap:"24px",flexDirection:s?"column-reverse":"column",children:[(0,l.jsxs)(d.Z,{children:[i&&(0,l.jsx)(d.Z,{mb:"8px",children:(0,l.jsx)(T.Z,{vaultKey:r.vaultKey})}),(0,l.jsx)(B,{pool:r})]}),(0,l.jsx)(u.Z,{flexDirection:"column",children:i?(0,l.jsx)(eu,{pool:r,accountHasSharesStaked:s,isLoading:o,performanceFee:h}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(x.Z,{mb:"10px",textTransform:"uppercase",fontSize:"12px",color:"textSubtle",bold:!0,children:f("Start earning")}),(0,l.jsx)(j.Z,{})]})})]})]})]}),(0,l.jsx)(w.Z,{defaultExpanded:m,pool:r,account:i})]})},eP=function(e){var n=e.pool,t=e.showStakedOnly,a=e.defaultFooterExpanded,s=e.showICake,c=e.showSkeleton,d=(0,r.Z)(e,["pool","showStakedOnly","defaultFooterExpanded","showICake","showSkeleton"]),x=(0,k.mA)().address,j=(0,b.eB)(n.vaultKey),g=n.totalStaked,v=j.userData,S=v.userShares,w=v.isLoading,y=j.fees.performanceFeeAsDecimal,T=S&&S.gt(0),C=!n.userData||w;return t&&!T?null:(0,l.jsxs)(p.r,(0,i.Z)((0,o.Z)({isActive:!0},d),{children:[(0,l.jsx)(h.J,{isStaking:T,children:!(void 0===c||c)||g&&g.gte(0)?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h.e,{title:Z.Y4[n.vaultKey].name,subTitle:Z.Y4[n.vaultKey].description}),(0,l.jsx)(m.Z,(0,i.Z)((0,o.Z)({},Z.Y4[n.vaultKey].tokenImage),{width:64,height:64}))]}):(0,l.jsxs)(u.Z,{width:"100%",justifyContent:"space-between",children:[(0,l.jsxs)(u.Z,{flexDirection:"column",children:[(0,l.jsx)(f.Z,{width:100,height:26,mb:"4px"}),(0,l.jsx)(f.Z,{width:65,height:20})]}),(0,l.jsx)(f.Z,{width:58,height:58,variant:"circle"})]})}),(0,l.jsx)(eB,{isLoading:C,account:x,pool:n,vaultPool:j,accountHasSharesStaked:T,showICake:void 0!==s&&s,performanceFeeAsDecimal:y,defaultFooterExpanded:a})]}))}},45249:function(e,n,t){var o=t(92228),i=t(52322),r=t(2784),a=t(3411),l=t(65957),s=t(8046),c=t(76903),d=t(69689),u=t(67252),x=t(78933),p=t(6099),h=t(82112);function m(){var e=(0,o.Z)(["\n  align-items: center;\n  justify-content: space-between;\n  button {\n    padding: 0;\n  }\n"]);return m=function(){return e},e}function f(){var e=(0,o.Z)(["\n  svg {\n    height: 14px;\n    width: 14px;\n  }\n"]);return f=function(){return e},e}var k=s.l.Tags,j=k.CompoundingPoolTag,Z=k.ManualPoolTag,g=(0,a.ZP)(c.Z).withConfig({componentId:"sc-f78aeef5-0"})(m()),b=(0,a.ZP)(c.Z).withConfig({componentId:"sc-f78aeef5-1"})(f()),v=function(e){var n=e.pool,t=e.account,o=e.defaultExpanded,a=e.children,s=n.vaultKey,m=(0,l.$G)().t,f=(0,r.useState)(o||!1),k=f[0],v=f[1],S=m("You must harvest and compound your earnings from this pool manually."),w=m("Rewards are distributed and included into your staking balance automatically. There’s no need to manually compound your rewards."),y=(0,d.Z)(s?w:S,{placement:"bottom"}),T=y.targetRef,C=y.tooltip,A=y.tooltipVisible;return(0,i.jsxs)(u.Z,{children:[(0,i.jsxs)(g,{children:[(0,i.jsxs)(c.Z,{alignItems:"center",children:[s?(0,i.jsx)(j,{}):(0,i.jsx)(Z,{}),A&&C,(0,i.jsx)(c.Z,{ref:T,children:(0,i.jsx)(x.Z,{ml:"4px",width:"20px",height:"20px",color:"textSubtle"})})]}),(0,i.jsx)(p.L,{expanded:k,onClick:function(){return v(!k)},children:m(k?"Hide":"Details")})]}),k&&(0,i.jsx)(b,{flexDirection:"column",children:a||(0,i.jsx)(h.Z,{pool:n,account:t})})]})};n.Z=v},76554:function(e,n,t){t.d(n,{J:function(){return p},e:function(){return h}});var o=t(92228),i=t(52322),r=t(3411),a=t(12780),l=t(3397),s=t(76903),c=t(48497),d=t(89495);function u(){var e=(0,o.Z)(["\n  background: ",";\n  border-radius: ",";\n"]);return u=function(){return e},e}var x=(0,r.ZP)(l.Z).withConfig({componentId:"sc-2895631f-0"})(u(),function(e){var n=e.isFinished,t=e.background,o=e.theme;return n?o.colors.backgroundDisabled:(0,a.Z)(o,"colors.".concat(t))},function(e){var n=e.theme;return"".concat(n.radii.card," ").concat(n.radii.card," 0 0")}),p=function(e){var n=e.isFinished,t=e.isStaking,o=e.children;return(0,i.jsx)(x,{isFinished:void 0!==n&&n,background:void 0!==t&&t?"gradientBubblegum":"gradientCardHeader",children:(0,i.jsx)(s.Z,{alignItems:"center",justifyContent:"space-between",children:o})})},h=function(e){var n=e.isFinished,t=e.title,o=e.subTitle;return(0,i.jsxs)(s.Z,{flexDirection:"column",children:[(0,i.jsx)(c.Z,{color:n?"textDisabled":"body",scale:"lg",children:t}),(0,i.jsx)(d.Z,{fontSize:"14px",color:n?"textDisabled":"textSubtle",children:o})]})}},89718:function(e,n,t){t.d(n,{r:function(){return l}});var o=t(92228),i=t(3411),r=t(8659);function a(){var e=(0,o.Z)(["\n  min-width: 280px;\n  max-width: 100%;\n  margin: 0 0 24px 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-self: baseline;\n  position: relative;\n  color: ",";\n\n  "," {\n    max-width: 350px;\n    margin: 0 12px 46px;\n  }\n"]);return a=function(){return e},e}var l=(0,i.ZP)(r.Z).withConfig({componentId:"sc-784bdb5d-0"})(a(),function(e){var n=e.isFinished;return e.theme.colors[n?"textDisabled":"secondary"]},function(e){return e.theme.mediaQueries.sm})}}]);
//# sourceMappingURL=5312-b657a322fd9f8e70.js.map