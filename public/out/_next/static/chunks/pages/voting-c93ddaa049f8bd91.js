(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6664],{45104:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/voting",function(){return t(31069)}])},31069:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return nE}});var r=t(92228),o=t(52322),i=t(76903),c=t(98757),s=t(3411),a=t(13670),l=t(48497),u=t(89495),d=t(48608),p=t(91073),h=t(65957),x=t(39097),f=t.n(x),Z=t(64548),m=t(96469);function g(){var n=(0,r.Z)(["\n  display: none;\n\n  "," {\n    display: block;\n  }\n"]);return g=function(){return n},n}var j=(0,s.ZP)(m.Z).withConfig({componentId:"sc-ef50ae32-0"})(g(),function(n){return n.theme.mediaQueries.lg});function v(){var n=(0,r.Z)(["\n  background: ",";\n  padding-bottom: 32px;\n  padding-top: 32px;\n"]);return v=function(){return n},n}var C=(0,s.ZP)(a.Z).withConfig({componentId:"sc-6ec77629-0"})(v(),function(n){return n.theme.colors.gradientBubblegum}),b=function(){var n=(0,h.$G)().t;return(0,o.jsx)(C,{children:(0,o.jsx)(Z.Z,{children:(0,o.jsxs)(i.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,o.jsxs)(a.Z,{pr:"32px",children:[(0,o.jsx)(l.Z,{as:"h2",scale:"lg",mb:"16px",children:n("Got a suggestion?")}),(0,o.jsx)(u.Z,{as:"p",children:n("Community proposals are a great way to see how the community feels about your ideas.")}),(0,o.jsx)(u.Z,{as:"p",mb:"16px",children:n("They won't necessarily be implemented if the community votes successful, but suggestions with a lot of community support may be made into Core proposals.")}),(0,o.jsx)(f(),{href:"/voting/proposal/create",passHref:!0,prefetch:!1,children:(0,o.jsx)(d.Z,{startIcon:(0,o.jsx)(p.Z,{color:"currentColor",width:"24px"}),children:n("Make a Proposal")})})]}),(0,o.jsx)(j,{src:"/images/voting/voting-bunny.png",width:173,height:234})]})})})};function w(){var n=(0,r.Z)(["\n  background: ",";\n  padding-bottom: 32px;\n  padding-top: 32px;\n"]);return w=function(){return n},n}var y=(0,s.ZP)(a.Z).withConfig({componentId:"sc-80f5926c-0"})(w(),function(n){return n.theme.colors.gradientBubblegum}),I=function(){var n=(0,h.$G)().t;return(0,o.jsx)(y,{children:(0,o.jsx)(Z.Z,{children:(0,o.jsxs)(i.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,o.jsxs)(a.Z,{pr:"32px",children:[(0,o.jsx)(l.Z,{as:"h1",scale:"xxl",color:"secondary",mb:"16px",children:n("Voting")}),(0,o.jsx)(l.Z,{as:"h3",scale:"lg",mb:"16px",children:n("Have your say in the future of the PancakeSwap Ecosystem")}),(0,o.jsx)(f(),{href:"/voting/proposal/create",passHref:!0,prefetch:!1,children:(0,o.jsx)(d.Z,{startIcon:(0,o.jsx)(p.Z,{color:"currentColor",width:"24px"}),children:n("Make a Proposal")})})]}),(0,o.jsx)(j,{src:"/images/voting/voting-presents.png",width:361,height:214})]})})})},P=t(98788),S=t(70865),E=t(96670),V=t(87394),L=t(5163),N=t(36820),H=t(8659),T=t(49857),k=t(93638),_=t(25215),M=t(6429),O=t(2784),D=function(n,e){var t=(0,O.useState)(function(){try{var t=window.sessionStorage.getItem(n);if(t)return JSON.parse(t);return window.sessionStorage.setItem(n,JSON.stringify(e)),e}catch(r){return e}}),r=t[0],o=t[1];return(0,O.useEffect)(function(){try{window.sessionStorage.setItem(n,JSON.stringify(r))}catch(e){}},[n,r]),[r,o]},F=t(49942),G=t(74009),B=t(61258),A=t.n(B),K=t(36957);function $(){var n=(0,r.Z)(["\n  border-bottom: 1px solid ",";\n"]);return $=function(){return n},n}function J(){var n=(0,r.Z)(["\n  ",":last-child {\n    border-bottom: 0;\n  }\n"]);return J=function(){return n},n}var Q=(0,s.ZP)(i.Z).withConfig({componentId:"sc-d03c33ee-0"})($(),function(n){return n.theme.colors.cardBorder}),R=s.ZP.div.withConfig({componentId:"sc-d03c33ee-1"})(J(),Q),U=function(){return(0,o.jsx)(R,{children:A()(K.A4).map(function(n){return(0,o.jsxs)(Q,{alignItems:"center",justifyContent:"space-between",py:"16px",px:"24px",children:[(0,o.jsxs)(a.Z,{style:{flex:1},children:[(0,o.jsx)(G.Z,{height:"21px",width:"70%",mb:"4px"}),(0,o.jsx)(G.Z,{height:"21px",width:"30%",mb:"4px"}),(0,o.jsx)(G.Z,{height:"21px",width:"40%"})]}),(0,o.jsx)(G.Z,{height:"32px",width:"32px"})]},n)})})},Y=t(58612),X=t(64500),z=t(3355),q=t(137);function W(){var n=(0,r.Z)(["\n  background-color: ",";\n  padding-top: 16px;\n"]);return W=function(){return n},n}var nn=s.ZP.div.withConfig({componentId:"sc-e9937da5-0"})(W(),function(n){return n.theme.colors.input}),ne=function(n){switch(n){case k.nK.COMMUNITY:return 1;case k.nK.ALL:return 2;case k.nK.CORE:default:return 0}},nt=function(n){switch(n){case 1:return k.nK.COMMUNITY;case 2:return k.nK.ALL;default:return k.nK.CORE}},nr=function(n){var e=n.proposalType,t=n.onTypeChange,r=(0,h.$G)().t,c=function(n){t(nt(n))};return(0,o.jsx)(nn,{children:(0,o.jsxs)(Y.Z,{activeIndex:ne(e),onItemClick:c,children:[(0,o.jsx)(X.Z,{children:(0,o.jsxs)(i.Z,{alignItems:"center",children:[(0,o.jsx)(z.Z,{color:"currentColor",mr:"4px"}),r("Core")]})}),(0,o.jsxs)(X.Z,{children:[" ",(0,o.jsxs)(i.Z,{alignItems:"center",children:[(0,o.jsx)(q.Z,{color:"currentColor",mr:"4px"}),r("Community")]})]}),(0,o.jsx)(X.Z,{children:"All"})]})})},no=t(47265),ni=t(93058),nc=t(65095),ns=t(19013),na=t(88417),nl=function(n){var e=(0,ns.Z)(1e3*n);return(0,na.Z)(e,"MMM do, yyyy HH:mm")},nu=function(n){var e=n.startDate,t=n.endDate,r=n.proposalState,i=(0,h.$G)().t,c={fontSize:"16px",color:"textSubtle",ml:"8px"};return r===k.r7.CLOSED?(0,o.jsx)(u.Z,(0,E.Z)((0,S.Z)({},c),{children:i("Ended %date%",{date:nl(t)})})):r===k.r7.PENDING?(0,o.jsx)(u.Z,(0,E.Z)((0,S.Z)({},c),{children:i("Starts %date%",{date:nl(e)})})):(0,o.jsx)(u.Z,(0,E.Z)((0,S.Z)({},c),{children:i("Ends %date%",{date:nl(t)})}))},nd=t(49918);function np(){var n=(0,r.Z)(["\n  align-items: center;\n  border-bottom: 1px solid ",";\n  display: flex;\n  padding: 16px 24px;\n\n  &:hover {\n    cursor: pointer;\n    background-color: ",";\n  }\n"]);return np=function(){return n},n}var nh=(0,s.ZP)(no.Z).withConfig({componentId:"sc-ccdcf34b-0"})(np(),function(n){return n.theme.colors.cardBorder},function(n){return n.theme.colors.dropdown}),nx=function(n){var e=n.proposal,t="/voting/proposal/".concat(e.id);return(0,o.jsxs)(nh,{to:t,children:[(0,o.jsxs)(a.Z,{as:"span",style:{flex:1},children:[(0,o.jsx)(u.Z,{bold:!0,mb:"8px",children:e.title}),(0,o.jsx)(i.Z,{alignItems:"center",mb:"8px",children:(0,o.jsx)(nu,{startDate:e.start,endDate:e.end,proposalState:e.state})}),(0,o.jsxs)(i.Z,{alignItems:"center",children:[(0,o.jsx)(nd.U,{proposalState:e.state}),(0,o.jsx)(nd.g,{isCoreProposal:(0,F.md)(e),ml:"8px"})]})]}),(0,o.jsx)(ni.Z,{variant:"text",children:(0,o.jsx)(nc.Z,{width:"24px"})})]})},nf=t(56448);function nZ(){var n=(0,r.Z)(["\n  border-bottom: 1px solid ",";\n  padding: 14px 0 14px 24px;\n"]);return nZ=function(){return n},n}function nm(){var n=(0,r.Z)(["\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  margin-right: 16px;\n"]);return nm=function(){return n},n}var ng=(0,s.ZP)(i.Z).attrs({alignItems:"center"}).withConfig({componentId:"sc-6cb82b89-0"})(nZ(),function(n){return n.theme.colors.cardBorder}),nj=s.ZP.label.withConfig({componentId:"sc-6cb82b89-1"})(nm()),nv=[{value:k.r7.ACTIVE,label:"Vote Now"},{value:k.r7.PENDING,label:"Soon"},{value:k.r7.CLOSED,label:"Closed"},],nC=function(n){var e=n.filterState,t=n.onFilterChange,r=n.isLoading,i=(0,h.$G)().t;return(0,o.jsx)(ng,{children:nv.map(function(n){var c=n.value,s=n.label,a=function(n){t(n.currentTarget.value)};return(0,o.jsxs)(nj,{children:[(0,o.jsx)(nf.Z,{scale:"sm",value:c,checked:e===c,onChange:a,disabled:r}),(0,o.jsx)(u.Z,{ml:"8px",children:i(s)})]},s)})})},nb=function(){var n=(0,h.$G)().t,e=(0,V.Z)(D("proposals-filter",{proposalType:k.nK.CORE,filterState:k.r7.ACTIVE}),2),t=e[0],r=e[1],c=t.proposalType,s=t.filterState,d=(0,T.ZP)(["proposals",s],(0,P.Z)(function(){return(0,L.__generator)(this,function(n){return[2,(0,_.Bp)(1e3,0,s)]})})),p=d.status,x=d.data,m=function(n){r(function(e){return(0,E.Z)((0,S.Z)({},e),{proposalType:n})})},g=function(n){r(function(e){return(0,E.Z)((0,S.Z)({},e),{filterState:n})})},j=(0,F.JY)((0,F.LJ)(x,c),s);return(0,o.jsxs)(Z.Z,{py:"40px",children:[(0,o.jsx)(a.Z,{mb:"48px",children:(0,o.jsxs)(N.Z,{children:[(0,o.jsx)(f(),{href:"/",children:n("Home")}),(0,o.jsx)(u.Z,{children:n("Voting")})]})}),(0,o.jsx)(l.Z,{as:"h2",scale:"xl",mb:"32px",id:"voting-proposals",children:n("Proposals")}),(0,o.jsxs)(H.Z,{children:[(0,o.jsx)(nr,{proposalType:c,onTypeChange:m}),(0,o.jsx)(nC,{filterState:s,onFilterChange:g,isLoading:p!==M.iF.Fetched}),p!==M.iF.Fetched&&(0,o.jsx)(U,{}),p===M.iF.Fetched&&j.length>0&&j.map(function(n){return(0,o.jsx)(nx,{proposal:n},n.id)}),p===M.iF.Fetched&&0===j.length&&(0,o.jsx)(i.Z,{alignItems:"center",justifyContent:"center",p:"32px",children:(0,o.jsx)(l.Z,{as:"h5",children:n("No proposals found")})})]})]})};function nw(){var n=(0,r.Z)(["\n  flex: none;\n"]);return nw=function(){return n},n}function ny(){var n=(0,r.Z)(["\n  flex: 1;\n  height: 100%;\n"]);return ny=function(){return n},n}var nI,nP=s.ZP.div.withConfig({componentId:"sc-8002118c-0"})(nw()),nS=s.ZP.div.withConfig({componentId:"sc-8002118c-1"})(ny()),nE=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.V,{}),(0,o.jsxs)(i.Z,{flexDirection:"column",minHeight:"calc(100vh - 64px)",children:[(0,o.jsx)(nP,{children:(0,o.jsx)(I,{})}),(0,o.jsx)(nS,{children:(0,o.jsx)(nb,{})}),(0,o.jsx)(nP,{children:(0,o.jsx)(b,{})})]})]})}},36820:function(n,e,t){"use strict";var r=t(92228),o=t(50930),i=t(52322),c=t(2784),s=t(3411),a=t(78545),l=t(77064);function u(){var n=(0,r.Z)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  "," {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  "," {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"]);return u=function(){return n},n}function d(){var n=(0,r.Z)(["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  a {\n    color: ",";\n\n    &:hover {\n      color: ",";\n    }\n  }\n\n  ","\n"]);return d=function(){return n},n}var p=s.ZP.div.withConfig({componentId:"sc-b9c7047c-0"})(u(),function(n){return n.theme.colors.textDisabled},function(n){return n.theme.mediaQueries.sm},function(n){return n.theme.mediaQueries.md}),h=s.ZP.ul.withConfig({componentId:"sc-b9c7047c-1"})(d(),function(n){return n.theme.colors.primary},function(n){return n.theme.colors.primaryBright},a.Dh),x=(0,i.jsx)(l.Z,{color:"currentColor",width:"24px"}),f=function(n){var e,t,r=n.separator,s=n.children,a=(e=c.Children.toArray(s).filter(function(n){return(0,c.isValidElement)(n)}),t=void 0===r?x:r,e.reduce(function(n,e,r){return 0===r?(0,o.Z)(n).concat([e]):(0,o.Z)(n).concat([(0,i.jsx)(p,{"aria-hidden":!0,children:t},"separator-".concat(r)),e,])},[]));return(0,i.jsx)(h,{children:a.map(function(n,e){return(0,i.jsx)("li",{children:n},"child-".concat(e))})})};e.Z=f},91073:function(n,e,t){"use strict";var r=t(70865),o=t(96670),i=t(52322);t(2784);var c=t(62923),s=function(n){return(0,i.jsx)(c.Z,(0,o.Z)((0,r.Z)({viewBox:"0 0 24 24"},n),{children:(0,i.jsx)("path",{d:"M8.99984 5.89661V6.27661C8.16984 5.94661 7.27984 5.77661 6.38984 5.77661C4.96985 5.77661 3.54985 6.20661 2.33985 7.06661C1.82985 7.42661 1.76985 8.15661 2.20985 8.59661L4.77985 11.1666H5.88984V12.2766C6.74984 13.1366 7.86984 13.5866 8.99984 13.6366V15.8966H6.99985C6.44984 15.8966 5.99985 16.3466 5.99985 16.8966V18.8966C5.99985 19.9966 6.89985 20.8966 7.99984 20.8966H17.9998C19.6598 20.8966 20.9998 19.5566 20.9998 17.8966V5.89661C20.9998 5.34661 20.5498 4.89661 19.9998 4.89661H9.99984C9.44984 4.89661 8.99984 5.34661 8.99984 5.89661ZM7.88984 11.3066V9.15661H5.60984L4.56985 8.11661C5.13985 7.89661 5.75985 7.77661 6.38984 7.77661C7.72984 7.77661 8.97985 8.29661 9.92984 9.23661L11.3398 10.6466L11.1398 10.8466C10.6298 11.3566 9.94984 11.6466 9.21984 11.6466C8.74985 11.6466 8.28984 11.5266 7.88984 11.3066ZM18.9998 17.8966C18.9998 18.4466 18.5498 18.8966 17.9998 18.8966C17.4498 18.8966 16.9998 18.4466 16.9998 17.8966V16.8966C16.9998 16.3466 16.5498 15.8966 15.9998 15.8966H10.9998V13.3066C11.5698 13.0766 12.0998 12.7366 12.5598 12.2766L12.7598 12.0766L15.5898 14.8966H16.9998V13.4866L10.9998 7.51661V6.89661H18.9998V17.8966Z"})}))};e.Z=s}},function(n){n.O(0,[8417,870,8046,3623,4497,9774,2888,179],function(){return n(n.s=45104)}),_N_E=n.O()}]);
//# sourceMappingURL=voting-c93ddaa049f8bd91.js.map