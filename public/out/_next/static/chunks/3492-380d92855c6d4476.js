"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3492],{31196:function(n,r,e){e.d(r,{EH:function(){return w},U8:function(){return Z},ZN:function(){return T},dQ:function(){return P},e_:function(){return h},l6:function(){return p},uq:function(){return m},zd:function(){return C}});var u=e(75398),t=e(7987),i=e(90902),o=e(74086),c=e(72978),a=e(2784),s=e(87510),f=e(87070),l=e(18534),d=e(5305),v=e(76269),k=e(5369),b=e(76166),g=function(n,r){return Object.keys(n[r]||{}).reduce(function(e,u){return e[u]=n[r][u].token,e},{})};function h(){var n=(0,b.g)().chainId,r=(0,c.Dv)(s.i),e=(0,l.Z)();return(0,a.useMemo)(function(){return e.reduce(function(n,r){return n[r.address]=r,n},g(r,n))},[e,r,n])}function m(){var n=(0,b.g)().chainId,r=(0,c.Dv)(s.HW),e=(0,l.Z)();return(0,a.useMemo)(function(){return e.reduce(function(n,r){return n[r.address]=r,n},g(r,n))},[e,r,n])}function p(){var n=(0,b.g)().chainId,r=(0,s.Rx)();return(0,a.useMemo)(function(){return g(r,n)},[r,n])}function C(){var n=(0,s.c6)(),r=(0,b.g)().chainId;return(0,a.useMemo)(function(){return g(n,r)},[n,r])}function T(n){var r=h();return!!r&&!!n&&!!r[n.address]}function w(n){var r=(0,l.Z)();return!!n&&!!r.find(function(r){return null==n?void 0:n.equals(r)})}var L=/^0x[a-fA-F0-9]{64}$/;function S(n,r,e){return n&&n.length>0?n:r&&L.test(r)&&0===(0,u.arrayify)(r)[31]?(0,t.F)(r):e}function P(n){var r=(0,b.g)().chainId,e=h(),u=(0,d.UJ)(n),t=(0,v.Ib)(u||void 0,!1),o=(0,v.gs)(u||void 0,!1),c=u?e[u]:void 0,s=(0,f.Wk)(c?void 0:t,"name",void 0,f.DB),l=(0,f.Wk)(c?void 0:o,"name",void 0,f.DB),k=(0,f.Wk)(c?void 0:t,"symbol",void 0,f.DB),g=(0,f.Wk)(c?void 0:o,"symbol",void 0,f.DB),m=(0,f.Wk)(c?void 0:t,"decimals",void 0,f.DB);return(0,a.useMemo)(function(){if(c)return c;if(r&&u){if(m.loading||k.loading||s.loading)return null;if(m.result){var n,e,t,o;return new i.Z$(r,u,m.result[0],S(null===(n=k.result)||void 0===n?void 0:n[0],null===(e=g.result)||void 0===e?void 0:e[0],"UNKNOWN"),S(null===(t=s.result)||void 0===t?void 0:t[0],null===(o=l.result)||void 0===o?void 0:o[0],"Unknown Token"))}}},[u,r,m.loading,m.result,k.loading,k.result,g.result,c,s.loading,s.result,l.result,])}function Z(n){var r,e=(0,k.Z)(),u=(null==n?void 0:n.toUpperCase())===(null===(r=e.symbol)||void 0===r?void 0:r.toUpperCase())||(null==n?void 0:n.toLowerCase())===o.ag,t=P(u?void 0:n);return u?e:t}},5369:function(n,r,e){e.d(r,{Z:function(){return o}});var u=e(90902),t=e(2784),i=e(76166);function o(){var n=(0,i.g)().chainId;return(0,t.useMemo)(function(){try{return u._r.onChain(n)}catch(r){return u._r.onChain(u.a_.BSC)}},[n])}},72135:function(n,r,e){e.d(r,{$2:function(){return M},$c:function(){return A},$f:function(){return D},A6:function(){return U},B3:function(){return X},Ce:function(){return q},DG:function(){return _},Fh:function(){return V},Hx:function(){return K},LO:function(){return O},OE:function(){return Z},Pn:function(){return N},QG:function(){return H},RO:function(){return B},TL:function(){return R},TO:function(){return S},XD:function(){return I},YF:function(){return y},Yi:function(){return E},_E:function(){return W},nF:function(){return $},oI:function(){return F},sg:function(){return z},tw:function(){return x},uB:function(){return Q},vD:function(){return P},wX:function(){return j},y9:function(){return G},z6:function(){return Y}});var u=e(98788),t=e(87394),i=e(5163),o=e(90902),c=e(65664),a=e(35838),s=e.n(a),f=e(24734),l=e(2784),d=e(43997),v=e(92794),k=e(65342),b=e(2303),g=e(51523),h=e(31196),m=e(9270),p=e(49857),C=e(76166),T=e(44291),w=e(15444),L=e(93638);function S(){var n=(0,T.TL)(),r=(0,d.v9)(function(n){return n.user.audioPlay}),e=(0,l.useCallback)(function(){r?n((0,w.B8)()):n((0,w.u7)())},[r,n]);return[r,e]}function P(n){var r=(0,T.TL)(),e=(0,d.v9)(function(n){return n.user.isExchangeChartDisplayed});return[!n&&e,(0,l.useCallback)(function(n){r((0,w.hN)(n))},[r])]}function Z(){var n,r=(0,T.TL)();return[(0,d.v9)(function(n){return n.user.userChartViewMode}),(0,l.useCallback)(function(n){r((0,w.p9)(n))},[r])]}function D(){var n,r=(0,T.TL)();return[(0,d.v9)(function(n){return!n.user.userZapDisabled}),(0,l.useCallback)(function(n){r((0,w.G8)(!n))},[r])]}function y(){var n,r=(0,T.TL)();return[(0,d.v9)(function(n){return n.user.isSubgraphHealthIndicatorDisplayed}),(0,l.useCallback)(function(n){r((0,w.Hr)(n))},[r])]}function O(){return(0,d.v9)(function(n){return n.user.userExpertMode})}function _(){var n=(0,T.TL)(),r=O(),e=(0,l.useCallback)(function(){n((0,w.zv)({userExpertMode:!r}))},[r,n]);return[r,e]}function B(){var n,r=(0,T.TL)();return[(0,d.v9)(function(n){return n.user.userSingleHopOnly}),(0,l.useCallback)(function(n){r((0,w.fO)({userSingleHopOnly:n}))},[r])]}function M(){var n,r=(0,T.TL)();return[(0,d.v9)(function(n){return n.user.userSlippageTolerance}),(0,l.useCallback)(function(n){r((0,w.rQ)({userSlippageTolerance:n}))},[r])]}function I(n){var r=(0,T.TL)(),e=(0,d.v9)(function(n){return n.user.userFarmStakedOnly}),u=(0,l.useCallback)(function(n){var e=n?w.GR.TRUE:w.GR.FALSE;r((0,w.Gs)({userFarmStakedOnly:e}))},[r]);return[e===w.GR.ON_FINISHED?!n:e===w.GR.TRUE,u,]}function x(){var n,r=(0,T.TL)();return[(0,d.v9)(function(n){return n.user.userPoolStakedOnly}),(0,l.useCallback)(function(n){r((0,w.mm)({userPoolStakedOnly:n}))},[r])]}function E(){var n,r=(0,T.TL)();return[(0,d.v9)(function(n){return n.user.userPoolsViewMode}),(0,l.useCallback)(function(n){r((0,w.d4)({userPoolsViewMode:n}))},[r])]}function G(){var n,r=(0,T.TL)();return[(0,d.v9)(function(n){return n.user.userFarmsViewMode}),(0,l.useCallback)(function(n){r((0,w.gk)({userFarmsViewMode:n}))},[r])]}function F(){var n,r=(0,T.TL)();return[(0,d.v9)(function(n){return n.user.userPredictionAcceptedRisk}),(0,l.useCallback)(function(n){r((0,w.RC)({userAcceptedRisk:n}))},[r])]}function A(){var n,r=(0,T.TL)();return[(0,d.v9)(function(n){return n.user.userLimitOrderAcceptedWarning}),(0,l.useCallback)(function(n){r((0,w.X)({userAcceptedRisk:n}))},[r])]}function R(){var n,r=(0,T.TL)();return[(0,d.v9)(function(n){return n.user.userPredictionChartDisclaimerShow}),(0,l.useCallback)(function(n){r((0,w.c4)({userShowDisclaimer:n}))},[r])]}function z(){var n,r=(0,T.TL)();return[(0,d.v9)(function(n){return n.user.userPredictionChainlinkChartDisclaimerShow}),(0,l.useCallback)(function(n){r((0,w.YA)({userShowDisclaimer:n}))},[r])]}function j(){var n,r=(0,T.TL)();return[(0,d.v9)(function(n){return n.user.userExpertModeAcknowledgementShow}),(0,l.useCallback)(function(n){r((0,w._C)({userExpertModeAcknowledgementShow:n}))},[r])]}function N(){var n,r=(0,T.TL)();return[(0,d.v9)(function(n){return n.user.userUsernameVisibility}),(0,l.useCallback)(function(n){r((0,w.zk)({userUsernameVisibility:n}))},[r])]}function U(){var n,r=(0,T.TL)();return[(0,d.v9)(function(n){return n.user.userDeadline}),(0,l.useCallback)(function(n){r((0,w.gw)({userDeadline:n}))},[r])]}function W(){var n=(0,T.TL)();return(0,l.useCallback)(function(r){n((0,w.eg)({serializedToken:r.serialize}))},[n])}function H(){var n=(0,T.TL)();return(0,l.useCallback)(function(r,e){n((0,w.zQ)({chainId:r,address:e}))},[n])}function V(n){var r,e,t=(0,k.Z)(),c=t.chainId,a=t.chain,s=(0,m.Hp)(),f=null!=n?n:c,l=(0,d.v9)(function(n){return n.user.gasPrice}),v=(0,p.ZP)(s&&s.provider&&f===o.a_.BSC&&l===L.j4.rpcDefault&&["bscProviderGasPrice",s.provider],(0,u.Z)(function(){var n;return(0,i.__generator)(this,function(n){switch(n.label){case 0:return[4,s.getGasPrice()];case 1:return[2,n.sent().toString()]}})}),{revalidateOnFocus:!1,revalidateOnReconnect:!1}).data,b=void 0===v?L.j4.default:v,h=(0,g.LK)({chainId:f,enabled:f!==o.a_.BSC&&f!==o.a_.BSC_TESTNET,watch:!0}).data;return f===o.a_.BSC?l===L.j4.rpcDefault?b:l:f===o.a_.BSC_TESTNET?L.j4.testnet:(null==a?void 0:a.testnet)?null==h?void 0:null===(e=h.formatted)||void 0===e?void 0:e.maxPriorityFeePerGas:null==h?void 0:null===(r=h.formatted)||void 0===r?void 0:r.gasPrice}function $(){var n,r=(0,T.TL)();return[(0,d.v9)(function(n){return n.user.gasPrice}),(0,l.useCallback)(function(n){r((0,w.dy)({gasPrice:n}))},[r])]}function Q(){var n=(0,T.TL)();return(0,l.useCallback)(function(r){var e;n((0,w.f9)({serializedPair:{token0:r.token0.serialize,token1:r.token1.serialize}}))},[n])}function q(n){var r=(0,t.Z)(n,2),e=r[0],u=r[1];return new o.Z$(e.chainId,o.sO.getAddress(e,u),18,"Cake-LP","Pancake LPs")}function X(){var n,r=(0,C.g)().chainId,e=(0,h.uq)(),o=(0,l.useMemo)(function(){return r&&null!==(n=v.Q8[r])&&void 0!==n?n:[]},[r]),a=(0,b.Z)(r&&["track-farms-pairs",r],(0,u.Z)(function(){var n,e;return(0,i.__generator)(this,function(n){switch(n.label){case 0:return[4,(0,f.getFarmConfig)(r)];case 1:return[2,n.sent().filter(function(n){return 0!==n.pid}).map(function(n){return[(0,c.iG)(n.token),(0,c.iG)(n.quoteToken)]})]}})})).data,k=void 0===a?[]:a,g=(0,l.useMemo)(function(){return r?s()(Object.keys(e),function(n){var u,t=e[n];return(null!==(u=v.xu[r])&&void 0!==u?u:[]).map(function(n){return n.address===t.address?null:[n,t]}).filter(function(n){return null!==n})}):[]},[e,r]),m=(0,d.v9)(function(n){return n.user.pairs}),p=(0,l.useMemo)(function(){if(!r||!m)return[];var n=m[r];return n?Object.keys(n).map(function(r){return[(0,c.iG)(n[r].token0),(0,c.iG)(n[r].token1)]}):[]},[m,r]),T=(0,l.useMemo)(function(){return p.concat(g).concat(o).concat(k)},[g,o,p,k]);return(0,l.useMemo)(function(){var n=T.reduce(function(n,r){var e=(0,t.Z)(r,2),u=e[0],i=e[1],o=u.sortsBefore(i),c=o?"".concat(u.address,":").concat(i.address):"".concat(i.address,":").concat(u.address);return n[c]||(n[c]=o?[u,i]:[i,u]),n},{});return Object.keys(n).map(function(r){return n[r]})},[T])}var Y=function(){var n,r,e=(0,T.TL)();return[null!==(n=(0,d.v9)(function(n){return n.user.watchlistTokens}))&&void 0!==n?n:[],(0,l.useCallback)(function(n){e((0,w.zS)({address:n}))},[e])]},K=function(){var n,r,e=(0,T.TL)();return[null!==(n=(0,d.v9)(function(n){return n.user.watchlistPools}))&&void 0!==n?n:[],(0,l.useCallback)(function(n){e((0,w.Dn)({address:n}))},[e])]}},18534:function(n,r,e){e.d(r,{Z:function(){return f}});var u,t=e(2784),i=e(5994),o=e(65664),c=e(43997),a=e(76166),s=function(n){return n.user.tokens};function f(){var n=(0,a.g)().chainId;return(0,c.v9)((0,t.useMemo)(function(){var r;return(0,i.P1)(s,function(r){return Object.values(null!==(u=null==r?void 0:r[n])&&void 0!==u?u:{}).map(o.iG)})},[n]))}},8659:function(n,r,e){e.d(r,{Z:function(){return p}});var u=e(70865),t=e(96670),i=e(26297),o=e(52322);e(2784);var c=e(92228),a=e(3411),s=e(78545),f=e(13670);function l(){var n=(0,c.Z)(["\n  0% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 50% 100%;\n  }\n  100% {\n    background-position: 50% 0%;\n  }\n"]);return l=function(){return n},n}function d(){var n=(0,c.Z)(["\n      animation: "," 3s ease infinite;\n      background-size: 400% 400%;\n    "]);return d=function(){return n},n}function v(){var n=(0,c.Z)(["\n  background: ",";\n  border-radius: ",";\n  color: ",";\n  overflow: hidden;\n  position: relative;\n\n  ","\n\n  padding: 1px 1px 3px 1px;\n\n  ","\n"]);return v=function(){return n},n}function k(){var n=(0,c.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: ",";\n  background: ",";\n  border-radius: ",";\n"]);return k=function(){return n},n}var b=(0,a.F4)(l()),g=function(n){var r=n.isActive,e=n.isSuccess,u=n.isWarning,t=n.borderBackground,i=n.theme;return t||(u?i.colors.warning:e?i.colors.success:r?"linear-gradient(180deg, ".concat(i.colors.primaryBright,", ").concat(i.colors.secondary,")"):i.colors.cardBorder)},h=a.ZP.div.withConfig({componentId:"sc-eecfaa46-0"})(v(),g,function(n){return n.theme.radii.card},function(n){var r=n.theme,e=n.isDisabled;return r.colors[e?"textDisabled":"text"]},function(n){return n.isActive&&(0,a.iv)(d(),b)},s.Dh),m=(0,a.ZP)(f.Z).withConfig({componentId:"sc-eecfaa46-1"})(k(),function(n){return n.hasCustomBorder?"initial":"inherit"},function(n){var r=n.theme,e=n.background;return null!=e?e:r.card.background},function(n){return n.theme.radii.card});h.defaultProps={isActive:!1,isSuccess:!1,isWarning:!1,isDisabled:!1};var p=function(n){var r=n.ribbon,e=n.children,c=n.background,a=(0,i.Z)(n,["ribbon","children","background"]);return(0,o.jsx)(h,(0,t.Z)((0,u.Z)({},a),{children:(0,o.jsxs)(m,{background:c,hasCustomBorder:!!a.borderBackground,children:[r,e]})}))}}}]);
//# sourceMappingURL=3492-380d92855c6d4476.js.map