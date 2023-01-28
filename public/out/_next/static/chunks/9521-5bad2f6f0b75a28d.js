"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9521],{49521:function(e,t,n){t.cM=void 0,n(49328);var r=n(19913);Object.defineProperty(t,"cM",{enumerable:!0,get:function(){return r.log}}),n(82260)},19913:function(e,t,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function i(e){try{u(r.next(e))}catch(t){s(t)}}function a(e){try{u(r.throw(e))}catch(t){s(t)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(i,a)}u((r=r.apply(e,t||[])).next())})},s=this&&this.__generator||function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(a){s=[6,a],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},i=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,s=t.length;o<s;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.prettyPrint=t.log=t.Logger=void 0;var a=n(24535),u=n(24535),l=a.isBrowser?"".concat(a.proxyPath,"/logs"):(0,a.getIngestURL)(a.EndpointType.logs),c=function(){function e(e,t,n){void 0===e&&(e={}),void 0===t&&(t=null),void 0===n&&(n=!0),this.args=e,this.req=t,this.autoFlush=n,this.logEvents=[],this.throttledSendLogs=(0,u.throttle)(this.sendLogs,1e3),this.flush=this.sendLogs}return e.prototype.debug=function(e,t){void 0===t&&(t={}),this._log("debug",e,r(r({},this.args),t))},e.prototype.info=function(e,t){void 0===t&&(t={}),this._log("info",e,r(r({},this.args),t))},e.prototype.warn=function(e,t){void 0===t&&(t={}),this._log("warn",e,r(r({},this.args),t))},e.prototype.error=function(e,t){void 0===t&&(t={}),this._log("error",e,r(r({},this.args),t))},e.prototype.with=function(t){return new e(r(r({},this.args),t),this.req,this.autoFlush)},e.prototype.withRequest=function(t){return new e(r({},this.args),t,this.autoFlush)},e.prototype._log=function(e,t,n){void 0===n&&(n={});var r={level:e,message:t,_time:new Date(Date.now()).toISOString(),fields:{}};Object.keys(n).length>0&&(r.fields=n),r.vercel={environment:a.vercelEnv,region:a.vercelRegion},null!=this.req&&(r.request=this.req,r.vercel.route=this.req.path),this.logEvents.push(r),this.autoFlush&&this.throttledSendLogs()},e.prototype.attachResponseStatus=function(e){this.logEvents=this.logEvents.map(function(t){return t.request&&(t.request.statusCode=e),t})},e.prototype.sendLogs=function(){return o(this,void 0,void 0,function(){var e,t,r,o,i;return s(this,function(o){switch(o.label){case 0:if(!this.logEvents.length)return[2];if(!a.isEnvVarsSet)return this.logEvents.forEach(function(e){return f(e)}),this.logEvents=[],[2];e="POST",t=!0,r=JSON.stringify(this.logEvents),this.logEvents=[],o.label=1;case 1:if(o.trys.push([1,8,,9]),"undefined"!=typeof fetch)return[3,4];return[4,n(25635)];case 2:return[4,o.sent()(l,{body:r,method:e,keepalive:t})];case 3:return o.sent(),[3,7];case 4:if(!(a.isBrowser&&navigator.sendBeacon))return[3,5];return navigator.sendBeacon(l,r),[3,7];case 5:return[4,fetch(l,{body:r,method:e,keepalive:t})];case 6:o.sent(),o.label=7;case 7:return[3,9];case 8:return i=o.sent(),console.error("Failed to send logs to Axiom: ".concat(i)),[3,9];case 9:return[2]}})})},e}();t.Logger=c,t.log=new c;var h={info:{terminal:"32",browser:"lightgreen"},debug:{terminal:"36",browser:"lightblue"},warn:{terminal:"33",browser:"yellow"},error:{terminal:"31",browser:"red"}};function f(e){var t=Object.keys(e.fields).length>0;if(a.isNoPrettyPrint){var n="".concat(e.level," - ").concat(e.message);t&&(n+=" "+JSON.stringify(e.fields)),console.log(n);return}var r="",o=[e.level,e.message];a.isBrowser?(r="%c%s - %s",o=i(["color: ".concat(h[e.level].browser,";")],o,!0)):r="\x1b[".concat(h[e.level].terminal,"m%s\x1b[0m - %s"),t&&(r+=" %o",o.push(e.fields)),e.request&&(r+=" %o",o.push(e.request)),console.log.apply(console,i([r],o,!0))}t.prettyPrint=f},24535:function(e,t,n){var r,o=n(34406);Object.defineProperty(t,"__esModule",{value:!0}),t.throttle=t.getIngestURL=t.EndpointType=t.vercelEnv=t.vercelRegion=t.isNoPrettyPrint=t.isEnvVarsSet=t.isBrowser=t.proxyPath=void 0,t.proxyPath="/_axiom",t.isBrowser="undefined"!=typeof window,t.isEnvVarsSet=o.env.AXIOM_INGEST_ENDPOINT||o.env.NEXT_PUBLIC_AXIOM_INGEST_ENDPOINT,t.isNoPrettyPrint="true"==o.env.AXIOM_NO_PRETTY_PRINT,t.vercelRegion=o.env.VERCEL_REGION,t.vercelEnv=o.env.VERCEL_ENV,(r=t.EndpointType||(t.EndpointType={})).webVitals="web-vitals",r.logs="logs";var s=function(e){var t=o.env.AXIOM_INGEST_ENDPOINT||o.env.NEXT_PUBLIC_AXIOM_INGEST_ENDPOINT;if(!t)return"";var n=new URL(t);return n.searchParams.set("type",e.toString()),n.toString()};t.getIngestURL=s;var i=function(e,t){var n,r;return function(){var o=this,s=arguments;null==r&&(r=Date.now()),clearTimeout(n),n=setTimeout(function(){Date.now()-r>=t&&(e.apply(o,s),r=Date.now())},Math.max(t-(Date.now()-r),0))}};t.throttle=i},49328:function(e,t,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.reportWebVitals=void 0;var o=n(24535),s="".concat(o.proxyPath,"/web-vitals"),i=(0,o.throttle)(function(){var e=JSON.stringify({webVitals:a});function t(){fetch(s,{body:e,method:"POST",keepalive:!0}).catch(console.error)}if(o.isBrowser&&navigator.sendBeacon)try{navigator.sendBeacon.bind(navigator)(s,e)}catch(n){t()}else t();a=[]},1e3),a=[];t.reportWebVitals=function(e){var t;a.push(r({route:null===(t=window.__NEXT_DATA__)||void 0===t?void 0:t.page},e)),o.isEnvVarsSet&&i()}},82260:function(e,t,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function i(e){try{u(r.next(e))}catch(t){s(t)}}function a(e){try{u(r.throw(e))}catch(t){s(t)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(i,a)}u((r=r.apply(e,t||[])).next())})},s=this&&this.__generator||function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(a){s=[6,a],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.withAxiom=void 0;var i=n(19913),a=n(24535);function u(e){console.log("AXIOM_EDGE_REPORT::".concat(JSON.stringify(e)))}t.withAxiom=function(e){var t,n;return"object"==typeof e?function(e){var t=this;return r(r({},e),{rewrites:function(){return o(t,void 0,void 0,function(){var t,n,r,o,u,l;return s(this,function(s){switch(s.label){case 0:return[4,null===(l=e.rewrites)||void 0===l?void 0:l.call(e)];case 1:if(t=s.sent(),n=(0,a.getIngestURL)(a.EndpointType.webVitals),r=(0,a.getIngestURL)(a.EndpointType.logs),!n&&!r)return(o=new i.Logger).warn("axiom: Envvars not detected. If this is production please see https://github.com/axiomhq/next-axiom for help"),o.warn("axiom: Sending Web Vitals to /dev/null"),o.warn("axiom: Sending logs to console"),[2,t||[]];if(u=[{source:"".concat(a.proxyPath,"/web-vitals"),destination:n,basePath:!1},{source:"".concat(a.proxyPath,"/logs"),destination:r,basePath:!1},],!t)return[2,u];if(Array.isArray(t))return[2,t.concat(u)];return t.afterFiles=(t.afterFiles||[]).concat(u),[2,t]}})})}})}(e):"function"==typeof e&&void 0===globalThis.EdgeRuntime?function(e){var t=this;return function(n,r){return o(t,void 0,void 0,function(){var t,u,c,h,f,p,v;return s(this,function(g){switch(g.label){case 0:t={startTime:new Date().getTime(),path:n.url,method:n.method,host:l(n,"host",""),userAgent:l(n,"user-agent",""),scheme:"https",ip:l(n,"x-forwarded-for",""),region:a.vercelRegion},u=new i.Logger({},t,!1),(c=n).log=u,f=(h=function(e,t){var n=this,r=[],i=t.send;t.send=function(a){r.push(o(n,void 0,void 0,function(){return s(this,function(n){switch(n.label){case 0:return e.log.attachResponseStatus(t.statusCode),[4,e.log.flush()];case 1:return n.sent(),i(a),[2]}})}))};var a=t.json;t.json=function(i){r.push(o(n,void 0,void 0,function(){return s(this,function(n){switch(n.label){case 0:return e.log.attachResponseStatus(t.statusCode),[4,e.log.flush()];case 1:return n.sent(),a(i),[2]}})}))};var u=t.end;return t.end=function(i){return r.push(o(n,void 0,void 0,function(){return s(this,function(n){switch(n.label){case 0:return e.log.attachResponseStatus(t.statusCode),[4,e.log.flush()];case 1:return n.sent(),u(i),[2]}})})),t},[t,r]}(c,r))[0],p=h[1],g.label=1;case 1:return g.trys.push([1,5,,8]),[4,e(c,f)];case 2:return g.sent(),[4,u.flush()];case 3:case 6:return g.sent(),[4,Promise.all(p)];case 4:return g.sent(),[3,8];case 5:return v=g.sent(),u.error("Error in API handler",{error:v}),u.attachResponseStatus(500),[4,u.flush()];case 7:throw g.sent(),v;case 8:return[2]}})})}}(e):function(e){var t=this;return function(n,r){return o(t,void 0,void 0,function(){var t,o,a,l,c,h;return s(this,function(s){switch(s.label){case 0:t={startTime:new Date().getTime(),ip:n.ip,region:null===(h=n.geo)||void 0===h?void 0:h.region,host:n.nextUrl.host,method:n.method,path:n.nextUrl.pathname,scheme:n.nextUrl.protocol.replace(":",""),userAgent:n.headers.get("user-agent")},o=new i.Logger({},t,!1),(a=n).log=o,s.label=1;case 1:return s.trys.push([1,3,,4]),[4,e(a,r)];case 2:return(l=s.sent())&&o.attachResponseStatus(l.status),r.waitUntil(o.flush()),u(t),[2,l];case 3:throw c=s.sent(),o.error("Error in edge function",{error:c}),o.attachResponseStatus(500),r.waitUntil(o.flush()),u(t),c;case 4:return[2]}})})}}(e)};var l=function(e,t,n){return e.headers[t]?e.headers[t]:n}},25635:function(e,t){t.Headers=self.Headers,t.Request=self.Request,t.Response=self.Response,t.fetch=self.fetch}}]);
//# sourceMappingURL=9521-5bad2f6f0b75a28d.js.map