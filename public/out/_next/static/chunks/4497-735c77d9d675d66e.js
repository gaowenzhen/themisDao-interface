"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4497],{25215:function(n,t,r){r.d(t,{Bp:function(){return b},pU:function(){return w},uy:function(){return j}});var e=r(98788),i=r(70865),o=r(96670),a=r(92228),c=r(50930),u=r(5163),s=r(10494),d=r(6647),l=r.n(d),f=r(93638);function p(){var n=(0,a.Z)(['\n      query getProposals($first: Int!, $skip: Int!, $state: String!, $orderDirection: OrderDirection) {\n        proposals(\n          first: $first\n          skip: $skip\n          orderBy: "end"\n          orderDirection: $orderDirection\n          where: { space_in: "cakevote.eth", state: $state }\n        ) {\n          id\n          title\n          body\n          choices\n          start\n          end\n          snapshot\n          state\n          author\n        }\n      }\n    ']);return p=function(){return n},n}function h(){var n=(0,a.Z)(["\n      query getProposal($id: String) {\n        proposal(id: $id) {\n          id\n          title\n          body\n          choices\n          start\n          end\n          snapshot\n          state\n          author\n          votes\n        }\n      }\n    "]);return h=function(){return n},n}function v(){var n=(0,a.Z)(["\n      query getVotes($first: Int, $skip: Int, $where: VoteWhere) {\n        votes(first: $first, skip: $skip, where: $where) {\n          id\n          voter\n          created\n          choice\n          proposal {\n            choices\n          }\n          vp\n        }\n      }\n    "]);return v=function(){return n},n}var Z,x,g,m,b=(Z=(0,e.Z)(function(){var n,t,r,e,i=arguments;return(0,u.__generator)(this,function(e){switch(e.label){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:5,t=i.length>1&&void 0!==i[1]?i[1]:0,r=i.length>2&&void 0!==i[2]?i[2]:f.r7.ACTIVE,[4,l()(s.TY,(0,d.gql)(p()),{first:n,skip:t,state:r,orderDirection:r===f.r7.CLOSED?"desc":"asc"})];case 1:return[2,e.sent().proposals]}})}),function(){return Z.apply(this,arguments)}),w=(x=(0,e.Z)(function(n){var t;return(0,u.__generator)(this,function(t){switch(t.label){case 0:return[4,l()(s.TY,(0,d.gql)(h()),{id:n})];case 1:return[2,t.sent().proposal]}})}),function(n){return x.apply(this,arguments)}),C=(g=(0,e.Z)(function(n,t,r){var e;return(0,u.__generator)(this,function(e){switch(e.label){case 0:return[4,l()(s.TY,(0,d.gql)(v()),{first:n,skip:t,where:r})];case 1:return[2,e.sent().votes]}})}),function(n,t,r){return g.apply(this,arguments)}),j=(m=(0,e.Z)(function(n){var t,r,a=arguments;return(0,u.__generator)(this,function(r){switch(r.label){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:3e4,[4,new Promise(function(r,i){var o,a=[],s=(o=(0,e.Z)(function(e){var o,d;return(0,u.__generator)(this,function(u){switch(u.label){case 0:return u.trys.push([0,2,,3]),[4,C(t,e,{proposal:n.id})];case 1:return 0===(o=u.sent()).length?r(a):(a=(0,c.Z)(a).concat((0,c.Z)(o)),s(e+t)),[3,3];case 2:return i(u.sent()),[3,3];case 3:return[2]}})}),function(n){return o.apply(this,arguments)});s(0)})];case 1:return[2,r.sent().map(function(n){return(0,o.Z)((0,i.Z)({},n),{metadata:{votingPower:String(n.vp)||"0"}})})]}})}),function(n){return m.apply(this,arguments)})},49918:function(n,t,r){r.d(t,{U:function(){return h},g:function(){return v}});var e=r(70865),i=r(26297),o=r(52322),a=r(8046),c=r(93638),u=a.l.Tags,s=u.ClosedTag,d=u.CommunityTag,l=u.CoreTag,f=u.SoonTag,p=u.VoteNowTag,h=function(n){var t=n.proposalState,r=(0,i.Z)(n,["proposalState"]);return t===c.r7.ACTIVE?(0,o.jsx)(p,(0,e.Z)({},r)):t===c.r7.PENDING?(0,o.jsx)(f,(0,e.Z)({},r)):(0,o.jsx)(s,(0,e.Z)({},r))},v=function(n){var t=n.isCoreProposal,r=(0,i.Z)(n,["isCoreProposal"]);return t?(0,o.jsx)(l,(0,e.Z)({},r)):(0,o.jsx)(d,(0,e.Z)({},r))}},64343:function(n,t,r){var e=r(70865),i=r(96670),o=r(26297),a=r(52322),c=r(89495),u=r(2784),s=r(76597),d=function(n){var t=n.value,r=n.color,d=void 0===r?"text":r,l=n.decimals,f=n.isDisabled,p=void 0!==f&&f,h=n.unit,v=n.prefix,Z=n.onClick,x=(0,o.Z)(n,["value","color","decimals","isDisabled","unit","prefix","onClick"]),g=(0,u.useMemo)(function(){return v?{prefix:v}:{}},[v]),m=(0,u.useMemo)(function(){return h?{suffix:h}:{}},[h]);return(0,a.jsx)(s.ZP,(0,i.Z)((0,e.Z)({start:0,preserveValue:!0,delay:0,end:t},g,m),{decimals:void 0===l?3:l,duration:1,separator:",",children:function(n){var t=n.countUpRef;return(0,a.jsx)(c.Z,(0,i.Z)((0,e.Z)({color:p?"textDisabled":d,onClick:Z},x),{children:(0,a.jsx)("span",{ref:t})}))}}))};t.Z=d},50420:function(n,t,r){var e=r(70865),i=r(96670),o=r(26297),a=r(52322);r(2784);var c=r(76903),u=r(13670),s=r(58207),d=r(89495),l=r(21844),f=function(n){var t=n.value,r=n.placeholder,f=n.onUserInput,p=n.currencyValue,h=n.inputProps,v=n.innerRef,Z=n.isWarning,x=n.decimals,g=n.unit,m=n.switchEditingUnits,b=(0,o.Z)(n,["value","placeholder","onUserInput","currencyValue","inputProps","innerRef","isWarning","decimals","unit","switchEditingUnits"]),w=function(n){n.currentTarget.validity.valid&&f(n.currentTarget.value.replace(/,/g,"."))};return(0,a.jsx)(l.FX,(0,i.Z)((0,e.Z)({isWarning:void 0!==Z&&Z},b),{children:(0,a.jsxs)(c.Z,{justifyContent:"flex-end",children:[(0,a.jsxs)(u.Z,{children:[(0,a.jsxs)(c.Z,{alignItems:"center",children:[(0,a.jsx)(l.Fy,(0,e.Z)({pattern:"^[0-9]*[.,]?[0-9]{0,".concat(void 0===x?18:x,"}$"),inputMode:"decimal",min:"0",value:t,onChange:w,placeholder:void 0===r?"0.0":r,ref:v},h)),g&&(0,a.jsx)(l.HH,{children:g})]}),p&&(0,a.jsx)(d.Z,{fontSize:"12px",textAlign:"right",color:"textSubtle",children:p})]}),m&&(0,a.jsx)(c.Z,{alignItems:"center",pl:"12px",children:(0,a.jsx)(l.sN,{scale:"sm",variant:"text",onClick:m,children:(0,a.jsx)(s.Z,{color:"textSubtle"})})})]})}))};t.Z=f},21844:function(n,t,r){r.d(t,{FX:function(){return v},Fy:function(){return Z},HH:function(){return h},sN:function(){return p}});var e=r(92228),i=r(3411),o=r(13670),a=r(13023),c=r(89495),u=r(93058);function s(){var n=(0,e.Z)(["\n  width: 16px;\n"]);return s=function(){return n},n}function d(){var n=(0,e.Z)(["\n  margin-left: 4px;\n  text-align: right;\n  color: ",";\n  white-space: nowrap;\n"]);return d=function(){return n},n}function l(){var n=(0,e.Z)(["\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 16px;\n  box-shadow: ",";\n  padding: 8px 16px;\n"]);return l=function(){return n},n}function f(){var n=(0,e.Z)(["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: ",";\n  border: none;\n\n  ::placeholder {\n    color: ",";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"]);return f=function(){return n},n}var p=(0,i.ZP)(u.Z).withConfig({componentId:"sc-e3b8048d-0"})(s()),h=(0,i.ZP)(c.Z).withConfig({componentId:"sc-e3b8048d-1"})(d(),function(n){return n.theme.colors.textSubtle}),v=(0,i.ZP)(o.Z).withConfig({componentId:"sc-e3b8048d-2"})(l(),function(n){return n.theme.colors.input},function(n){return n.theme.colors.inputSecondary},function(n){var t=n.theme,r=n.isWarning;return t.shadows[r?"warning":"inset"]}),Z=(0,i.ZP)(a.Z).withConfig({componentId:"sc-e3b8048d-3"})(f(),function(n){var t=n.textAlign;return void 0===t?"right":t},function(n){return n.theme.colors.textSubtle})},6099:function(n,t,r){r.d(t,{L:function(){return s},N:function(){return u}});var e=r(52322);r(2784);var i=r(81916),o=r(77651),a=r(48608),c=r(93058),u=function(n){var t=n.onClick,r=n.expanded,a=n.children;return(0,e.jsxs)(c.Z,{"aria-label":"Hide or show expandable content",onClick:t,children:[a,r?(0,e.jsx)(i.Z,{color:"invertedContrast"}):(0,e.jsx)(o.Z,{color:"invertedContrast"})]})};u.defaultProps={expanded:!1};var s=function(n){var t=n.onClick,r=n.expanded,c=n.children;return(0,e.jsx)(a.Z,{variant:"text","aria-label":"Hide or show expandable content",onClick:t,endIcon:r?(0,e.jsx)(i.Z,{color:"primary"}):(0,e.jsx)(o.Z,{color:"primary"}),children:c})};s.defaultProps={expanded:!1}},56448:function(n,t,r){r.d(t,{Z:function(){return l}});var e=r(92228),i=r(3411),o=r(78545),a={SM:"sm",MD:"md"};function c(){var n=(0,e.Z)(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ",";\n  width: ",";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ",";\n  box-shadow: ",';\n\n  &:after {\n    border-radius: 50%;\n    content: "";\n    height: ',";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ",";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ",";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ",";\n  }\n\n  &:checked {\n    background-color: ",";\n    &:after {\n      background-color: ",";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ","\n"]);return c=function(){return n},n}var u=function(n){var t=n.scale;switch(t){case a.SM:return"24px";case a.MD:default:return"32px"}},s=function(n){var t=n.scale;switch(t){case a.SM:return"12px";case a.MD:default:return"20px"}},d=i.ZP.input.attrs({type:"radio"}).withConfig({componentId:"sc-407ed64c-0"})(c(),u,u,function(n){return n.theme.colors.input},function(n){return n.theme.shadows.inset},s,s,function(n){return n.theme.shadows.focus},function(n){return n.theme.shadows.focus},function(n){return n.theme.colors.success},function(n){return n.theme.radio.handleBackground},o.Dh);d.defaultProps={scale:a.MD,m:0};var l=d},74009:function(n,t,r){r.d(t,{i:function(){return T},Z:function(){return $}});var e=r(70865),i=r(96670),o=r(26297),a=r(92228),c=r(52322),u=r(39538),s=r(35463),d=r(40776),l=r(94589),f=r(2784),p=r(3411),h=r(78545),v={WAVES:"waves",PULSE:"pulse"},Z={RECT:"rect",ROUND:"round",CIRCLE:"circle"},x=r(74265);function g(){var n=(0,a.Z)(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"]);return g=function(){return n},n}function m(){var n=(0,a.Z)(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"]);return m=function(){return n},n}function b(){var n=(0,a.Z)(["\n  position: relative;\n  will-change: opacity;\n  opacity: 0;\n  &.appear {\n    animation: "," 0.3s ease-in-out forwards;\n  }\n  &.disappear {\n    animation: "," 0.3s ease-in-out forwards;\n  }\n"]);return b=function(){return n},n}function w(){var n=(0,a.Z)(["\n  position: relative;\n  ","\n  ","\n  overflow: hidden;\n"]);return w=function(){return n},n}function C(){var n=(0,a.Z)(["\n  min-height: 20px;\n  display: block;\n  background-color: ",";\n  border-radius: ",";\n  ","\n  ","\n  ","\n"]);return C=function(){return n},n}function j(){var n=(0,a.Z)(["\n  animation: "," 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"]);return j=function(){return n},n}function k(){var n=(0,a.Z)(['\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: "";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: '," 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"]);return k=function(){return n},n}var y=(0,p.F4)(g()),P=(0,p.F4)(m()),I=(0,p.ZP)(u.m.div).withConfig({componentId:"sc-eba41aa1-0"})(b(),x.Oz,x.a4),S=p.ZP.div.withConfig({componentId:"sc-eba41aa1-1"})(w(),h.bK,h.Dh),D=p.ZP.div.withConfig({componentId:"sc-eba41aa1-2"})(C(),function(n){return n.theme.colors.backgroundDisabled},function(n){var t=n.variant,r=n.theme;return t===Z.CIRCLE?r.radii.circle:t===Z.ROUND?r.radii.default:r.radii.small},h.bK,h.Dh,h.E0),L=(0,p.ZP)(D).withConfig({componentId:"sc-eba41aa1-3"})(j(),P),E=(0,p.ZP)(D).withConfig({componentId:"sc-eba41aa1-4"})(k(),y),T=function(n){var t=n.variant,r=void 0===t?Z.RECT:t,a=n.animation,u=void 0===a?v.PULSE:a,p=n.isDataReady,h=void 0!==p&&p,g=n.children,m=n.wrapperProps,b=n.skeletonTop,w=n.skeletonLeft,C=n.width,j=n.height,k=n.mr,y=n.ml,P=(0,o.Z)(n,["variant","animation","isDataReady","children","wrapperProps","skeletonTop","skeletonLeft","width","height","mr","ml"]),D=(0,f.useRef)(null),T=(0,f.useRef)(null);return(0,c.jsx)(S,(0,i.Z)((0,e.Z)({width:C,height:j,mr:k,ml:y},m),{children:(0,c.jsx)(s.X,{features:d.H,children:(0,c.jsxs)(l.M,{children:[h&&(0,c.jsx)(I,(0,i.Z)((0,e.Z)({ref:D,onAnimationStart:function(){return(0,x.BI)(D.current)}},x.Gc),{variants:x.ji,transition:{duration:.3},children:g}),"content"),!h&&(0,c.jsx)(I,(0,i.Z)((0,e.Z)({style:{position:"absolute",top:void 0===b?"0":b,left:void 0===w?"0":w},ref:T,onAnimationStart:function(){return(0,x.BI)(T.current)}},x.Gc),{variants:x.ji,transition:{duration:.3},children:u===v.WAVES?(0,c.jsx)(E,(0,i.Z)((0,e.Z)({variant:r},P),{width:C,height:j})):(0,c.jsx)(L,(0,i.Z)((0,e.Z)({variant:r},P),{width:C,height:j}))}),"skeleton")]})})}))},$=function(n){var t=n.variant,r=void 0===t?Z.RECT:t,i=n.animation,a=void 0===i?v.PULSE:i,u=(0,o.Z)(n,["variant","animation"]);return a===v.WAVES?(0,c.jsx)(E,(0,e.Z)({variant:r},u)):(0,c.jsx)(L,(0,e.Z)({variant:r},u))}},77651:function(n,t,r){var e=r(70865),i=r(96670),o=r(52322);r(2784);var a=r(62923),c=function(n){return(0,o.jsx)(a.Z,(0,i.Z)((0,e.Z)({viewBox:"0 0 24 24"},n),{children:(0,o.jsx)("path",{d:"M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"})}))};t.Z=c},81916:function(n,t,r){var e=r(70865),i=r(96670),o=r(52322);r(2784);var a=r(62923),c=function(n){return(0,o.jsx)(a.Z,(0,i.Z)((0,e.Z)({viewBox:"0 0 24 24"},n),{children:(0,o.jsx)("path",{d:"M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z"})}))};t.Z=c},58207:function(n,t,r){var e=r(70865),i=r(96670),o=r(52322);r(2784);var a=r(62923),c=function(n){return(0,o.jsx)(a.Z,(0,i.Z)((0,e.Z)({viewBox:"0 0 24 25"},n),{children:(0,o.jsx)("path",{d:"M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z"})}))};t.Z=c}}]);
//# sourceMappingURL=4497-735c77d9d675d66e.js.map