function n(){}function t(n,t){for(const e in t)n[e]=t[e];return n}function e(n){return n()}function r(){return Object.create(null)}function o(n){n.forEach(e)}function i(n){return"function"==typeof n}function s(n,t){return n!=n?t==t:n!==t||n&&"object"==typeof n||"function"==typeof n}function c(t,e,r){t.$$.on_destroy.push(function(t,...e){if(null==t)return n;const r=t.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}(e,r))}function a(n,t,e,r){if(n){const o=u(n,t,e,r);return n[0](o)}}function u(n,e,r,o){return n[1]&&o?t(r.ctx.slice(),n[1](o(e))):r.ctx}function f(n,t,e,r,o,i,s){const c=function(n,t,e,r){if(n[2]&&r){const o=n[2](r(e));if(void 0===t.dirty)return o;if("object"==typeof o){const n=[],e=Math.max(t.dirty.length,o.length);for(let r=0;r<e;r+=1)n[r]=t.dirty[r]|o[r];return n}return t.dirty|o}return t.dirty}(t,r,o,i);if(c){const o=u(t,e,r,s);n.p(o,c)}}function l(n,t){n.appendChild(t)}function d(n,t,e){n.insertBefore(t,e||null)}function h(n){n.parentNode.removeChild(n)}function p(n){return document.createElement(n)}function v(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function g(n){return document.createTextNode(n)}function m(){return g(" ")}function y(){return g("")}function b(n,t,e,r){return n.addEventListener(t,e,r),()=>n.removeEventListener(t,e,r)}function w(n,t,e){null==e?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function $(n){return Array.from(n.childNodes)}function E(n,t,e,r){for(let o=0;o<n.length;o+=1){const r=n[o];if(r.nodeName===t){let t=0;const i=[];for(;t<r.attributes.length;){const n=r.attributes[t++];e[n.name]||i.push(n.name)}for(let n=0;n<i.length;n++)r.removeAttribute(i[n]);return n.splice(o,1)[0]}}return r?v(t):p(t)}function x(n,t){for(let e=0;e<n.length;e+=1){const r=n[e];if(3===r.nodeType)return r.data=""+t,n.splice(e,1)[0]}return g(t)}function S(n){return x(n," ")}function k(n,t){t=""+t,n.wholeText!==t&&(n.data=t)}function P(n,t,e){n.classList[e?"add":"remove"](t)}function j(n,t=document.body){return Array.from(t.querySelectorAll(n))}let L;function A(n){L=n}function W(){if(!L)throw new Error("Function called outside component initialization");return L}function O(n){W().$$.on_mount.push(n)}function U(n){W().$$.after_update.push(n)}function I(n,t){W().$$.context.set(n,t)}function M(n){return W().$$.context.get(n)}const N=[],T=[],R=[],C=[],B=Promise.resolve();let q=!1;function z(n){R.push(n)}let F=!1;const G=new Set;function K(){if(!F){F=!0;do{for(let n=0;n<N.length;n+=1){const t=N[n];A(t),D(t.$$)}for(A(null),N.length=0;T.length;)T.pop()();for(let n=0;n<R.length;n+=1){const t=R[n];G.has(t)||(G.add(t),t())}R.length=0}while(N.length);for(;C.length;)C.pop()();q=!1,F=!1,G.clear()}}function D(n){if(null!==n.fragment){n.update(),o(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(z)}}const H=new Set;let J;function Q(){J={r:0,c:[],p:J}}function V(){J.r||o(J.c),J=J.p}function X(n,t){n&&n.i&&(H.delete(n),n.i(t))}function Y(n,t,e,r){if(n&&n.o){if(H.has(n))return;H.add(n),J.c.push((()=>{H.delete(n),r&&(e&&n.d(1),r())})),n.o(t)}}function Z(n,t){const e={},r={},o={$$scope:1};let i=n.length;for(;i--;){const s=n[i],c=t[i];if(c){for(const n in s)n in c||(r[n]=1);for(const n in c)o[n]||(e[n]=c[n],o[n]=1);n[i]=c}else for(const n in s)o[n]=1}for(const s in r)s in e||(e[s]=void 0);return e}function nn(n){return"object"==typeof n&&null!==n?n:{}}function tn(n){n&&n.c()}function en(n,t){n&&n.l(t)}function rn(n,t,r,s){const{fragment:c,on_mount:a,on_destroy:u,after_update:f}=n.$$;c&&c.m(t,r),s||z((()=>{const t=a.map(e).filter(i);u?u.push(...t):o(t),n.$$.on_mount=[]})),f.forEach(z)}function on(n,t){const e=n.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function sn(n,t){-1===n.$$.dirty[0]&&(N.push(n),q||(q=!0,B.then(K)),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function cn(t,e,i,s,c,a,u=[-1]){const f=L;A(t);const l=t.$$={fragment:null,ctx:null,props:a,update:n,not_equal:c,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:e.context||[]),callbacks:r(),dirty:u,skip_bound:!1};let d=!1;if(l.ctx=i?i(t,e.props||{},((n,e,...r)=>{const o=r.length?r[0]:e;return l.ctx&&c(l.ctx[n],l.ctx[n]=o)&&(!l.skip_bound&&l.bound[n]&&l.bound[n](o),d&&sn(t,n)),e})):[],l.update(),d=!0,o(l.before_update),l.fragment=!!s&&s(l.ctx),e.target){if(e.hydrate){const n=$(e.target);l.fragment&&l.fragment.l(n),n.forEach(h)}else l.fragment&&l.fragment.c();e.intro&&X(t.$$.fragment),rn(t,e.target,e.anchor,e.customElement),K()}A(f)}class an{$destroy(){on(this,1),this.$destroy=n}$on(n,t){const e=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return e.push(t),()=>{const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}$set(n){var t;this.$$set&&(t=n,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const un=[];function fn(t,e=n){let r;const o=[];function i(n){if(s(t,n)&&(t=n,r)){const n=!un.length;for(let e=0;e<o.length;e+=1){const n=o[e];n[1](),un.push(n,t)}if(n){for(let n=0;n<un.length;n+=2)un[n][0](un[n+1]);un.length=0}}}return{set:i,update:function(n){i(n(t))},subscribe:function(s,c=n){const a=[s,c];return o.push(a),1===o.length&&(r=e(i)||n),s(t),()=>{const n=o.indexOf(a);-1!==n&&o.splice(n,1),0===o.length&&(r(),r=null)}}}}try{self["workbox:window:6.1.5"]&&_()}catch($n){}function ln(n,t){return new Promise((function(e){var r=new MessageChannel;r.port1.onmessage=function(n){e(n.data)},n.postMessage(t,[r.port2])}))}function dn(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}try{self["workbox:core:6.1.5"]&&_()}catch($n){}var hn=function(){var n=this;this.promise=new Promise((function(t,e){n.resolve=t,n.reject=e}))};function pn(n,t){var e=location.href;return new URL(n,e).href===new URL(t,e).href}var vn=function(n,t){this.type=n,Object.assign(this,t)};function gn(n,t,e){return e?t?t(n):n:(n&&n.then||(n=Promise.resolve(n)),t?n.then(t):n)}function mn(){}var yn={type:"SKIP_WAITING"};function bn(n,t){if(!t)return n&&n.then?n.then(mn):Promise.resolve()}var wn=function(n){var t,e;function r(t,e){var r,o;return void 0===e&&(e={}),(r=n.call(this)||this).nn={},r.tn=0,r.rn=new hn,r.en=new hn,r.on=new hn,r.un=0,r.an=new Set,r.cn=function(){var n=r.fn,t=n.installing;r.tn>0||!pn(t.scriptURL,r.sn)||performance.now()>r.un+6e4?(r.vn=t,n.removeEventListener("updatefound",r.cn)):(r.hn=t,r.an.add(t),r.rn.resolve(t)),++r.tn,t.addEventListener("statechange",r.ln)},r.ln=function(n){var t=r.fn,e=n.target,o=e.state,i=e===r.vn,s={sw:e,isExternal:i,originalEvent:n};!i&&r.mn&&(s.isUpdate=!0),r.dispatchEvent(new vn(o,s)),"installed"===o?r.wn=self.setTimeout((function(){"installed"===o&&t.waiting===e&&r.dispatchEvent(new vn("waiting",s))}),200):"activating"===o&&(clearTimeout(r.wn),i||r.en.resolve(e))},r.dn=function(n){var t=r.hn,e=t!==navigator.serviceWorker.controller;r.dispatchEvent(new vn("controlling",{isExternal:e,originalEvent:n,sw:t,isUpdate:r.mn})),e||r.on.resolve(t)},r.gn=(o=function(n){var t=n.data,e=n.source;return gn(r.getSW(),(function(){r.an.has(e)&&r.dispatchEvent(new vn("message",{data:t,sw:e,originalEvent:n}))}))},function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];try{return Promise.resolve(o.apply(this,n))}catch(e){return Promise.reject(e)}}),r.sn=t,r.nn=e,navigator.serviceWorker.addEventListener("message",r.gn),r}e=n,(t=r).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;var o,i=r.prototype;return i.register=function(n){var t,e,r=(void 0===n?{}:n).immediate,o=void 0!==r&&r;try{var i=this;return t=function(){return i.mn=Boolean(navigator.serviceWorker.controller),i.yn=i.pn(),gn(i.bn(),(function(n){i.fn=n,i.yn&&(i.hn=i.yn,i.en.resolve(i.yn),i.on.resolve(i.yn),i.yn.addEventListener("statechange",i.ln,{once:!0}));var t=i.fn.waiting;return t&&pn(t.scriptURL,i.sn)&&(i.hn=t,Promise.resolve().then((function(){i.dispatchEvent(new vn("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),i.hn&&(i.rn.resolve(i.hn),i.an.add(i.hn)),i.fn.addEventListener("updatefound",i.cn),navigator.serviceWorker.addEventListener("controllerchange",i.dn,{once:!0}),i.fn}))},(e=function(){if(!o&&"complete"!==document.readyState)return bn(new Promise((function(n){return window.addEventListener("load",n)})))}())&&e.then?e.then(t):t()}catch(s){return Promise.reject(s)}},i.update=function(){try{return this.fn?bn(this.fn.update()):void 0}catch($n){return Promise.reject($n)}},i.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},i.messageSW=function(n){try{return gn(this.getSW(),(function(t){return ln(t,n)}))}catch($n){return Promise.reject($n)}},i.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&ln(this.fn.waiting,yn)},i.pn=function(){var n=navigator.serviceWorker.controller;return n&&pn(n.scriptURL,this.sn)?n:void 0},i.bn=function(){try{var n=this;return function(t,e){try{var r=gn(navigator.serviceWorker.register(n.sn,n.nn),(function(t){return n.un=performance.now(),t}))}catch(o){return e(o)}return r&&r.then?r.then(void 0,e):r}(0,(function(n){throw n}))}catch(t){return Promise.reject(t)}},(o=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}(r.prototype,o),r}(function(){function n(){this.Pn=new Map}var t=n.prototype;return t.addEventListener=function(n,t){this.Sn(n).add(t)},t.removeEventListener=function(n,t){this.Sn(n).delete(t)},t.dispatchEvent=function(n){n.target=this;for(var t,e=function(n,t){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,t){if(n){if("string"==typeof n)return dn(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?dn(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0;return function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=n[Symbol.iterator]()).next.bind(e)}(this.Sn(n.type));!(t=e()).done;)(0,t.value)(n)},t.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},n}());export{t as A,Q as B,fn as C,M as D,v as E,P as F,l as G,n as H,c as I,b as J,wn as K,ln as L,a as M,j as N,f as O,an as S,$ as a,w as b,E as c,h as d,p as e,d as f,x as g,k as h,cn as i,tn as j,m as k,y as l,en as m,S as n,rn as o,Z as p,nn as q,Y as r,s,g as t,V as u,X as v,on as w,I as x,U as y,O as z};
