"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2975],{29491:function(n,r,t){var e,o,i=t(98788),u=t(70865),c=t(96670),s=t(26297),a=t(92228),d=t(5163),l=t(52322),f=t(2784),C=t(89495),h=t(13670),p=t(13023),v=t(3411),Z=t(5305),x=t(65957),g=t(88549);function m(){var n=(0,a.Z)(["\n  align-items: center;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 0 0 "," ",";\n  left: 0;\n  padding-bottom: 8px;\n  padding-top: 16px;\n  position: absolute;\n  top: calc(100% - 12px);\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scaleY(0);\n  transform-origin: top;\n  width: 100%;\n  z-index: 15;\n\n  ","\n"]);return m=function(){return n},n}function b(){var n=(0,a.Z)(["\n  cursor: pointer;\n  overflow-wrap: break-word;\n  font-weight: bold;\n  padding-left: 16px;\n  padding-right: 16px;\n"]);return b=function(){return n},n}(e=o||(o={}))[e.NOT_VALID=0]="NOT_VALID",e[e.FOUND=1]="FOUND",e[e.NOT_FOUND=2]="NOT_FOUND";var w=v.ZP.div.withConfig({componentId:"sc-64ff24db-0"})(m(),function(n){return n.theme.colors.input},function(n){return n.theme.colors.inputSecondary},function(n){return n.theme.radii.default},function(n){return n.theme.radii.default},function(n){return n.isOpen&&"\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  "}),k=(0,v.ZP)(C.Z).withConfig({componentId:"sc-64ff24db-1"})(b()),j={isFetching:!1,resultFound:o.NOT_VALID,value:""},M=function(){return Promise.resolve(!0)},D=function(n){var r=n.onValidAddress,t=void 0===r?M:r,e=n.onAddressClick,a=(0,s.Z)(n,["onValidAddress","onAddressClick"]),v=(0,f.useState)(j),m=v[0],b=v[1],D=(0,x.$G)().t,F=m.isFetching,I=m.resultFound,N=m.value,y=function(n){var r=n.target.value;b(function(n){return(0,c.Z)((0,u.Z)({},n),{value:r})})},L=function(){b(j),e(m.value)};return(0,f.useEffect)(function(){var n,r=!1!==(0,Z.UJ)(N),e=(n=(0,i.Z)(function(){var n;return(0,d.__generator)(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),b(function(n){return(0,c.Z)((0,u.Z)({},n),{isFetching:!0})}),[4,t(N)];case 1:return n=r.sent(),b(function(r){return(0,c.Z)((0,u.Z)({},r),{isFetching:!1,resultFound:n?o.FOUND:o.NOT_FOUND})}),[3,3];case 2:return r.sent(),b(function(n){return(0,c.Z)((0,u.Z)({},n),{isFetching:!1})}),[3,3];case 3:return[2]}})}),function(){return n.apply(this,arguments)});r?e():b(function(n){return(0,c.Z)((0,u.Z)({},n),{resultFound:o.NOT_VALID})})},[N,t,b]),(0,l.jsxs)(h.Z,(0,c.Z)((0,u.Z)({position:"relative"},a),{children:[(0,l.jsx)(p.Z,{placeholder:D("Search %subject%",{subject:D("Address").toLowerCase()}),value:m.value,onChange:y,style:{position:"relative",zIndex:16,paddingRight:"40px"}}),F&&(0,l.jsx)(h.Z,{position:"absolute",top:"12px",right:"16px",style:{zIndex:17},children:(0,l.jsx)(g.Z,{})}),(0,l.jsx)(w,{isOpen:I!==o.NOT_VALID,children:I===o.FOUND?(0,l.jsx)(k,{onClick:L,children:m.value}):(0,l.jsx)(C.Z,{px:"16px",fontWeight:"bold",children:D("No results found.")})})]}))};r.Z=D},88549:function(n,r,t){t.d(r,{Z:function(){return C}});var e=t(70865),o=t(96670),i=t(26297),u=t(92228),c=t(52322),s=t(3411);function a(){var n=(0,u.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return a=function(){return n},n}function d(){var n=(0,u.Z)(["\n  animation: 2s "," linear infinite;\n  height: ",";\n  width: ",";\n  path {\n    stroke: ",";\n  }\n"]);return d=function(){return n},n}var l=(0,s.F4)(a()),f=s.ZP.svg.withConfig({componentId:"sc-fa227f0-0"})(d(),l,function(n){return n.size},function(n){return n.size},function(n){var r=n.stroke,t=n.theme;return null!=r?r:t.colors.primary});function C(n){var r=n.size,t=n.stroke,u=(0,i.Z)(n,["size","stroke"]);return(0,c.jsx)(f,(0,o.Z)((0,e.Z)({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",size:void 0===r?"16px":r,stroke:t},u),{children:(0,c.jsx)("path",{d:"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})}))}},60760:function(n,r,t){var e=t(92228),o=t(52322),i=t(3411),u=t(5159),c=t(98757);function s(){var n=(0,e.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return s=function(){return n},n}var a=(0,i.ZP)(c.Z).withConfig({componentId:"sc-5ad34a86-0"})(s()),d=function(){return(0,o.jsx)(a,{children:(0,o.jsx)(u.Z,{})})};r.Z=d},36806:function(n,r,t){t.d(r,{J:function(){return i},V:function(){return o}});var e=t(70627),o="/nfts",i=(0,e.GI)()},8659:function(n,r,t){t.d(r,{Z:function(){return g}});var e=t(70865),o=t(96670),i=t(26297),u=t(52322);t(2784);var c=t(92228),s=t(3411),a=t(78545),d=t(13670);function l(){var n=(0,c.Z)(["\n  0% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 50% 100%;\n  }\n  100% {\n    background-position: 50% 0%;\n  }\n"]);return l=function(){return n},n}function f(){var n=(0,c.Z)(["\n      animation: "," 3s ease infinite;\n      background-size: 400% 400%;\n    "]);return f=function(){return n},n}function C(){var n=(0,c.Z)(["\n  background: ",";\n  border-radius: ",";\n  color: ",";\n  overflow: hidden;\n  position: relative;\n\n  ","\n\n  padding: 1px 1px 3px 1px;\n\n  ","\n"]);return C=function(){return n},n}function h(){var n=(0,c.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: ",";\n  background: ",";\n  border-radius: ",";\n"]);return h=function(){return n},n}var p=(0,s.F4)(l()),v=function(n){var r=n.isActive,t=n.isSuccess,e=n.isWarning,o=n.borderBackground,i=n.theme;return o||(e?i.colors.warning:t?i.colors.success:r?"linear-gradient(180deg, ".concat(i.colors.primaryBright,", ").concat(i.colors.secondary,")"):i.colors.cardBorder)},Z=s.ZP.div.withConfig({componentId:"sc-eecfaa46-0"})(C(),v,function(n){return n.theme.radii.card},function(n){var r=n.theme,t=n.isDisabled;return r.colors[t?"textDisabled":"text"]},function(n){return n.isActive&&(0,s.iv)(f(),p)},a.Dh),x=(0,s.ZP)(d.Z).withConfig({componentId:"sc-eecfaa46-1"})(h(),function(n){return n.hasCustomBorder?"initial":"inherit"},function(n){var r=n.theme,t=n.background;return null!=t?t:r.card.background},function(n){return n.theme.radii.card});Z.defaultProps={isActive:!1,isSuccess:!1,isWarning:!1,isDisabled:!1};var g=function(n){var r=n.ribbon,t=n.children,c=n.background,s=(0,i.Z)(n,["ribbon","children","background"]);return(0,u.jsx)(Z,(0,o.Z)((0,e.Z)({},s),{children:(0,u.jsxs)(x,{background:c,hasCustomBorder:!!s.borderBackground,children:[r,t]})}))}},13023:function(n,r,t){var e=t(92228),o=t(3411),i=t(66803);function u(){var n=(0,e.Z)(["\n  background-color: ",";\n  border-radius: 16px;\n  box-shadow: ",";\n  color: ",";\n  display: block;\n  font-size: 16px;\n  height: ",";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n  border: 1px solid ",";\n\n  &::placeholder {\n    color: ",";\n  }\n\n  &:disabled {\n    background-color: ",";\n    box-shadow: none;\n    color: ",";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ",";\n  }\n"]);return u=function(){return n},n}var c=function(n){var r=n.isSuccess,t=n.isWarning,e=n.theme;return void 0!==t&&t?e.shadows.warning:void 0!==r&&r?e.shadows.success:e.shadows.inset},s=function(n){var r=n.scale,t=void 0===r?i.Q.MD:r;switch(t){case i.Q.SM:return"32px";case i.Q.LG:return"48px";case i.Q.MD:default:return"40px"}},a=o.ZP.input.withConfig({componentId:"sc-c22a9310-0"})(u(),function(n){return n.theme.colors.input},c,function(n){return n.theme.colors.text},s,function(n){return n.theme.colors.inputSecondary},function(n){return n.theme.colors.textSubtle},function(n){return n.theme.colors.backgroundDisabled},function(n){return n.theme.colors.textDisabled},function(n){var r=n.theme,t=n.isWarning,e=n.isSuccess;return t?r.shadows.warning:e?r.shadows.success:r.shadows.focus});a.defaultProps={scale:i.Q.MD,isSuccess:!1,isWarning:!1},r.Z=a},66803:function(n,r,t){t.d(r,{Q:function(){return e}});var e={SM:"sm",MD:"md",LG:"lg"}},53003:function(n,r,t){var e=t(70865),o=t(96670),i=t(26297),u=t(52322),c=t(13670),s=function(n){var r=n.children,t=(0,i.Z)(n,["children"]);return(0,u.jsx)(c.Z,(0,o.Z)((0,e.Z)({px:["16px","24px"],mx:"auto",maxWidth:"1200px"},t),{children:r}))};r.Z=s},45349:function(n,r,t){var e=t(70865),o=t(96670),i=t(26297),u=t(92228),c=t(52322),s=t(3411),a=t(13670),d=t(53003);function l(){var n=(0,u.Z)(["\n  background: ",";\n"]);return l=function(){return n},n}function f(){var n=(0,u.Z)(["\n  padding-top: 32px;\n  padding-bottom: 32px;\n  position: relative;\n"]);return f=function(){return n},n}var C=(0,s.ZP)(a.Z).withConfig({componentId:"sc-a56468b1-0"})(l(),function(n){var r=n.theme;return n.background||r.colors.gradientBubblegum}),h=(0,s.ZP)(d.Z).withConfig({componentId:"sc-a56468b1-1"})(f()),p=function(n){var r=n.background,t=n.children,u=(0,i.Z)(n,["background","children"]);return(0,c.jsx)(C,(0,o.Z)((0,e.Z)({background:r},u),{children:(0,c.jsx)(h,{children:t})}))};r.Z=p},5159:function(n,r,t){t.d(r,{Z:function(){return b}});var e=t(92228),o=t(52322);t(2784);var i=t(3411),u=t(70865),c=t(96670),s=t(62923),a=function(n){return(0,o.jsxs)(s.Z,(0,c.Z)((0,u.Z)({viewBox:"0 0 256 256"},n),{children:[(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M166.898 204.279C172.402 190.795 170.197 176.127 166.942 163.633C164.747 155.208 156.522 149.043 143.339 146.339C130.289 143.662 113.23 144.62 95.212 149.658C77.1941 154.696 61.9863 162.761 52.0088 171.877C41.9295 181.085 37.8164 190.7 40.0117 199.126C43.2669 211.619 48.4857 225.444 59.7919 234.228C70.9463 242.894 88.7701 247.193 118.461 238.891C148.152 230.589 161.467 217.582 166.898 204.279ZM119.268 241.986C179.746 225.075 176.514 188.072 169.929 162.798C164.622 142.43 131.106 136.301 94.4056 146.563C57.7053 156.825 31.7183 179.593 37.0251 199.961C43.6102 225.235 58.7891 258.897 119.268 241.986Z",fill:"#464649"}),(0,o.jsx)("path",{d:"M155.801 175.68C158.653 186.628 180.351 181.576 214.977 171.894C249.604 162.212 257.158 150.578 254.305 139.63C251.453 128.682 244.685 121.053 216.678 128.884C182.051 138.566 152.948 164.732 155.801 175.68Z",fill:"#606063"}),(0,o.jsx)("path",{d:"M159.97 178.737L175.437 178.709C178.284 178.704 178.523 174.429 177.474 164.815C176.82 158.816 173.457 154.101 171.27 155.477L159.942 163.875L159.97 178.737Z",fill:"#464649"}),(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M162.261 177.996C160.059 177.319 159.158 176.266 158.788 174.845C158.644 174.296 158.636 173.375 159.104 171.965C159.566 170.568 160.432 168.889 161.754 166.98C164.397 163.161 168.612 158.775 174.091 154.332C185.037 145.456 200.6 136.7 217.484 131.979C231.34 128.104 239.201 128.297 243.777 130.191C248.018 131.946 250.005 135.425 251.319 140.465C251.901 142.7 251.928 144.848 251.283 146.962C250.634 149.091 249.235 151.411 246.622 153.858C241.312 158.83 231.342 163.998 214.171 168.799C196.798 173.657 182.967 177.263 173.149 178.336C168.216 178.875 164.644 178.728 162.261 177.996ZM214.977 171.894C180.351 181.576 158.653 186.628 155.801 175.68C152.948 164.732 182.051 138.566 216.678 128.884C244.685 121.053 251.453 128.682 254.305 139.63C257.158 150.578 249.604 162.212 214.977 171.894Z",fill:"#464649"}),(0,o.jsx)("path",{d:"M169.925 161.024C176.511 186.298 179.743 223.301 119.264 240.212C58.7859 257.123 43.607 223.461 37.022 198.187C31.7151 177.819 57.7022 155.052 94.4024 144.789C131.103 134.527 164.619 140.656 169.925 161.024Z",fill:"#606063"}),(0,o.jsx)("path",{d:"M62.2322 217.512C45.5076 212.12 42.4613 203.795 40.3848 196.052L41.9594 211.275L50.2352 225.685L64.4374 238.481L80.947 244.327C82.4065 243.612 89.4986 243.299 83.1029 242.028C76.7073 240.758 72.7474 234.756 69.9914 231.378C68.2638 226.484 67.7365 219.287 62.2322 217.512Z",fill:"#464649"}),(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M166.895 202.505C172.399 189.021 170.194 174.353 166.939 161.86C164.744 153.434 156.519 147.269 143.336 144.565C130.286 141.888 113.227 142.846 95.2088 147.884C77.1909 152.922 61.9831 160.987 52.0056 170.103C41.9263 179.311 37.8132 188.926 40.0086 197.352C43.2637 209.845 48.4825 223.67 59.7887 232.454C70.9431 241.12 88.7669 245.419 118.458 237.117C148.149 228.815 161.464 215.809 166.895 202.505ZM119.264 240.212C179.743 223.301 176.511 186.298 169.925 161.024C164.619 140.656 131.103 134.527 94.4024 144.789C57.7022 155.052 31.7151 177.819 37.022 198.187C43.607 223.461 58.7859 257.123 119.264 240.212Z",fill:"#464649"}),(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M164.233 181.686C165.018 182.322 165.157 183.497 164.543 184.311C162.98 186.382 161.187 188.422 159.188 190.412C158.469 191.128 157.327 191.104 156.636 190.36C155.945 189.615 155.968 188.431 156.687 187.716C158.576 185.834 160.252 183.925 161.7 182.007C162.314 181.193 163.448 181.05 164.233 181.686ZM57.4215 216.239C57.6566 215.235 58.6323 214.619 59.6008 214.863C73.2899 218.308 91.7045 217.793 111.035 212.388C120.262 209.808 128.779 206.37 136.271 202.374C137.157 201.901 138.245 202.263 138.701 203.181C139.157 204.099 138.809 205.226 137.923 205.699C130.195 209.821 121.438 213.352 111.976 215.998C92.2044 221.527 73.1589 222.124 58.7494 218.497C57.7809 218.253 57.1863 217.242 57.4215 216.239Z",fill:"#979797"}),(0,o.jsx)("path",{d:"M159.836 163.292C164.405 180.829 141.059 195.381 109.857 204.106C78.655 212.831 51.4793 212.682 46.8428 194.887C42.2064 177.092 65.6193 162.798 96.8214 154.074C128.024 145.349 155.266 145.755 159.836 163.292Z",fill:"#464649"}),(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M145.831 183.549C154.508 176.998 157.462 170.578 155.854 164.406C154.245 158.233 148.575 154.225 137.894 153.086C127.333 151.96 113.281 153.898 97.8965 158.2C82.4985 162.506 69.3986 168.094 60.8132 174.54C52.1526 181.043 49.1801 187.461 50.825 193.774C52.4698 200.087 58.1557 204.083 68.7987 205.189C79.3491 206.285 93.384 204.285 108.782 199.98C124.166 195.678 137.251 190.028 145.831 183.549ZM110.264 205.113C141.466 196.388 164.405 180.829 159.836 163.292C155.266 145.755 128.024 145.349 96.8214 154.074C65.6193 162.798 42.2064 177.092 46.8428 194.887C51.4793 212.682 79.0614 213.838 110.264 205.113Z",fill:"#737373"}),(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M103.877 181.153C89.0555 185.297 76.4977 192.072 68.1169 199.619C67.3647 200.297 66.2249 200.214 65.5711 199.434C64.9173 198.655 64.997 197.474 65.7492 196.796C74.622 188.806 87.7006 181.803 102.936 177.543C106.034 176.676 109.107 175.955 112.134 175.375C113.114 175.187 114.056 175.858 114.237 176.873C114.419 177.889 113.771 178.864 112.792 179.052C109.86 179.614 106.881 180.313 103.877 181.153ZM123.847 175.658C123.792 174.627 124.554 173.745 125.549 173.688C132.378 173.297 138.774 173.682 144.424 174.797C145.403 174.991 146.046 175.97 145.86 176.984C145.673 177.999 144.728 178.664 143.749 178.471C138.431 177.421 132.333 177.045 125.749 177.422C124.753 177.479 123.902 176.69 123.847 175.658Z",fill:"#606063"})]}))},d=function(n){return(0,o.jsx)(s.Z,(0,c.Z)((0,u.Z)({viewBox:"0 0 128 128"},n),{children:(0,o.jsxs)("svg",{width:"128",height:"128",viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("path",{d:"M56.7204 37.5858C56.7204 45.3822 58.0271 54.1169 60.2906 60.8591C61.4246 64.2369 62.7705 67.0285 64.249 68.946C65.742 70.8826 67.1906 71.7103 68.5307 71.7103C71.1919 71.7103 74.4165 70.5307 77.8384 68.3524C81.235 66.1902 84.7001 63.1234 87.8127 59.5481C94.0844 52.3439 98.6784 43.3694 98.6784 35.942C98.6784 28.1653 97.1567 21.2636 93.9931 16.3543C90.8793 11.5222 86.1363 8.54284 79.3564 8.54284C72.6009 8.54284 66.9825 11.9157 63.0072 17.2564C59.0174 22.6164 56.7204 29.9263 56.7204 37.5858Z",fill:"#FEDC90",stroke:"#D1884F",strokeWidth:"2.89134"}),(0,o.jsx)("path",{d:"M32.7442 66.7859C39.4364 62.9222 47.2575 60.5211 53.8454 59.9252C57.1411 59.6272 60.0564 59.7876 62.336 60.3933C64.6294 61.0028 66.1079 62.0118 66.8368 63.2742C69.6116 68.0804 69.9429 76.4856 67.7501 84.8501C65.5656 93.1829 61.0085 100.957 54.6069 104.653C47.9434 108.5 40.9505 110.185 34.8292 109.454C28.7533 108.729 23.476 105.626 20.0729 99.7316C16.6658 93.8305 16.5364 87.5528 18.8757 81.7754C21.228 75.9659 26.1018 70.6209 32.7442 66.7859Z",fill:"#D1884F",stroke:"#633001",strokeWidth:"2.89134"}),(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M73.6122 7.76013C69.4145 8.86483 64.8207 11.0867 61.24 16.1556C53.2804 27.4231 51.7006 41.9592 58.5495 60.7386C65.3984 79.518 63.3431 89.9236 56.0487 98.3189C48.7543 106.714 29.475 108.685 23.3482 101.929C21.8481 100.274 17.4954 97.4588 20.3675 102.54C23.2397 107.622 30.7527 111.748 39.59 111.748C48.4273 111.748 55.5943 108.146 61.958 101.338C68.3217 94.5306 74.292 78.3883 68.3268 61.7709C60.6331 40.3385 62.8311 27.508 68.2893 19.7815C71.0879 15.8198 75.5453 12.3629 78.6077 10.5868C81.8233 8.72183 84.8797 8.42294 86.8682 8.42294C83.3332 6.65548 77.8099 6.65542 73.6122 7.76013Z",fill:"#633001"})]})}))};function l(){var n=(0,e.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return l=function(){return n},n}function f(){var n=(0,e.Z)(["\n	0% {\n		transform: translatey(0px);\n	}\n	50% {\n		transform: translatey(10px);\n	}\n	100% {\n		transform: translatey(0px);\n	}\n"]);return f=function(){return n},n}function C(){var n=(0,e.Z)(["\n  position: relative;\n"]);return C=function(){return n},n}function h(){var n=(0,e.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: "," 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"]);return h=function(){return n},n}function p(){var n=(0,e.Z)(["\n  animation: "," 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"]);return p=function(){return n},n}var v=(0,i.F4)(l()),Z=(0,i.F4)(f()),x=i.ZP.div.withConfig({componentId:"sc-da0aae9d-0"})(C()),g=(0,i.ZP)(d).withConfig({componentId:"sc-da0aae9d-1"})(h(),v),m=(0,i.ZP)(a).withConfig({componentId:"sc-da0aae9d-2"})(p(),Z),b=function(n){var r=n.size,t=void 0===r?128:r;return(0,o.jsxs)(x,{children:[(0,o.jsx)(g,{width:"".concat(.5*t,"px")}),(0,o.jsx)(m,{width:"".concat(t,"px")})]})}}}]);
//# sourceMappingURL=2975-dcb28575e461dfb2.js.map