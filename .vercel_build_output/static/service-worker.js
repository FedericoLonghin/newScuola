var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,c=(e,t)=>{for(var s in t||(t={}))r.call(t,s)&&i(e,s,t[s]);if(a)for(var s of a(t))n.call(t,s)&&i(e,s,t[s]);return e},o=(e,a)=>t(e,s(a));try{self["workbox:core:6.1.5"]&&_()}catch(F){}const h=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class l extends Error{constructor(e,t){super(h(e,t)),this.name=e,this.details=t}}const u={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},p=e=>[u.prefix,e,u.suffix].filter((e=>e&&e.length>0)).join("-"),d=e=>e||p(u.precache),f=e=>e||p(u.runtime);function y(e,t){const s=t();return e.waitUntil(s),s}try{self["workbox:precaching:6.1.5"]&&_()}catch(F){}function g(e){if(!e)throw new l("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new l("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(s,location.href),r=new URL(s,location.href);return a.searchParams.set("__WB_REVISION__",t),{cacheKey:a.href,url:r.href}}class w{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class m{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=t&&t.cacheKey||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s):e},this._precacheController=e}}let v;async function b(e,t){let s=null;if(e.url){s=new URL(e.url).origin}if(s!==self.location.origin)throw new l("cross-origin-copy-response",{origin:s});const a=e.clone(),r={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},n=t?t(r):r,i=function(){if(void 0===v){const t=new Response("");if("body"in t)try{new Response(t.body),v=!0}catch(e){v=!1}v=!1}return v}()?a.body:await a.blob();return new Response(i,n)}function R(e,t){const s=new URL(e);for(const a of t)s.searchParams.delete(a);return s.href}class C{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const U=new Set;try{self["workbox:strategies:6.1.5"]&&_()}catch(F){}function L(e){return"string"==typeof e?new Request(e):e}class q{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new C,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const s of this._plugins)this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=L(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(n){throw new l("plugin-error-request-will-fetch",{thrownError:n})}const r=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:r,response:e});return e}catch(i){throw a&&await this.runCallbacks("fetchDidFail",{error:i,event:t,originalRequest:a.clone(),request:r.clone()}),i}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=L(e);let s;const{cacheName:a,matchOptions:r}=this._strategy,n=await this.getCacheKey(t,"read"),i=c(c({},r),{cacheName:a});s=await caches.match(n,i);for(const c of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await c({cacheName:a,matchOptions:r,cachedResponse:s,request:n,event:this.event})||void 0;return s}async cachePut(e,t){const s=L(e);var a;await(a=0,new Promise((e=>setTimeout(e,a))));const r=await this.getCacheKey(s,"write");if(!t)throw new l("cache-put-with-no-response",{url:(n=r.url,new URL(String(n),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var n;const i=await this._ensureResponseSafeToCache(t);if(!i)return!1;const{cacheName:h,matchOptions:u}=this._strategy,p=await self.caches.open(h),d=this.hasCallback("cacheDidUpdate"),f=d?await async function(e,t,s,a){const r=R(t.url,s);if(t.url===r)return e.match(t,a);const n=o(c({},a),{ignoreSearch:!0}),i=await e.keys(t,n);for(const c of i)if(r===R(c.url,s))return e.match(c,a)}(p,r.clone(),["__WB_REVISION__"],u):null;try{await p.put(r,d?i.clone():i)}catch(y){throw"QuotaExceededError"===y.name&&await async function(){for(const e of U)await e()}(),y}for(const c of this.iterateCallbacks("cacheDidUpdate"))await c({cacheName:h,oldResponse:f,newResponse:i.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=L(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const r=o(c({},a),{state:s});return t[e](r)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve()}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const a of this.iterateCallbacks("cacheWillUpdate"))if(t=await a({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class k{constructor(e={}){this.cacheName=f(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,r=new q(this,{event:t,request:s,params:a}),n=this._getResponse(r,s,t);return[n,this._awaitComplete(n,r,s,t)]}async _getResponse(e,t,s){let a;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(a=await this._handle(t,e),!a||"error"===a.type)throw new l("no-response",{url:t.url})}catch(r){for(const n of e.iterateCallbacks("handlerDidError"))if(a=await n({error:r,event:s,request:t}),a)break;if(!a)throw r}for(const n of e.iterateCallbacks("handlerWillRespond"))a=await n({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,a){let r,n;try{r=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:r}),await t.doneWaiting()}catch(c){n=c}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:r,error:n}),t.destroy(),n)throw n}}class K extends k{constructor(e={}){e.cacheName=d(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(K.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;if(!this._fallbackToNetwork)throw new l("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s=await t.fetch(e),s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!(await t.cachePut(e,s.clone())))throw new l("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==K.copyRedirectedCacheableResponsesPlugin&&(a===K.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(K.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}K.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},K.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await b(e):e};class T{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new K({cacheName:d(e),plugins:[...t,new m({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:a}=g(s),r="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new l("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new l("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return y(e,(async()=>{const t=new w;this.strategy.plugins.push(t);for(const[r,n]of this._urlsToCacheKeys){const t=this._cacheKeysToIntegrities.get(n),s=this._urlsToCacheModes.get(r),a=new Request(r,{integrity:t,cache:s,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:n},request:a,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return y(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const r of t)s.has(r.url)||(await e.delete(r),a.push(r.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new l("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=c({cacheKey:t},s.params),this.strategy.handle(s))}}let P;const x=()=>(P||(P=new T),P);try{self["workbox:routing:6.1.5"]&&_()}catch(F){}const N=e=>e&&"object"==typeof e?e:{handle:e};class O{constructor(e,t,s="GET"){this.handler=N(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=N(e)}}class j extends O{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class S{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const a=s.origin===location.origin,{params:r,route:n}=this.findMatchingRoute({event:t,request:e,sameOrigin:a,url:s});let i=n&&n.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return;let o;try{o=i.handle({url:s,request:e,event:t,params:r})}catch(l){o=Promise.reject(l)}const h=n&&n.catchHandler;return o instanceof Promise&&(this._catchHandler||h)&&(o=o.catch((async a=>{if(h)try{return await h.handle({url:s,request:e,event:t,params:r})}catch(n){a=n}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw a}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:a}){const r=this._routes.get(s.method)||[];for(const n of r){let r;const i=n.match({url:e,sameOrigin:t,request:s,event:a});if(i)return r=i,(Array.isArray(i)&&0===i.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(r=void 0),{route:n,params:r}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,N(e))}setCatchHandler(e){this._catchHandler=N(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new l("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new l("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let M;function W(e,t,s){let a;if("string"==typeof e){const r=new URL(e,location.href);a=new O((({url:e})=>e.href===r.href),t,s)}else if(e instanceof RegExp)a=new j(e,t,s);else if("function"==typeof e)a=new O(e,t,s);else{if(!(e instanceof O))throw new l("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=e}return(M||(M=new S,M.addFetchListener(),M.addCacheListener()),M).registerRoute(a),a}class E extends O{constructor(e,t){super((({request:s})=>{const a=e.getURLsToCacheKeys();for(const e of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:a=!0,urlManipulation:r}={}){const n=new URL(e,location.href);n.hash="",yield n.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(n,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(a){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(r){const e=r({url:n});for(const t of e)yield t.href}}(s.url,t)){const t=a.get(e);if(t)return{cacheKey:t}}}),e.strategy)}}function I(e){x().precache(e)}const A={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};var H;self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),I([...["/_app/start-a34e4df3.js","/_app/assets/start-a8cd1609.css","/_app/pages/__layout.svelte-5ca79141.js","/_app/assets/pages/__layout.svelte-859a6369.css","/_app/error.svelte-e326bc04.js","/_app/pages/index.svelte-45f6e7e4.js","/_app/assets/pages/index.svelte-bb0596c8.css","/_app/pages/Scuola/Italiano.svelte-db76be0f.js","/_app/pages/Scuola/Storia/Il-Novecento.svelte-38d8415d.js","/_app/pages/Scuola/Storia.svelte-cc0f4dc0.js","/_app/assets/pages/Scuola/Storia.svelte-2068c681.css","/_app/pages/scuola.svelte-933b6927.js","/_app/assets/pages/scuola.svelte-b0805508.css","/_app/pages/About.svelte-be7fe9d9.js","/_app/assets/pages/About.svelte-9b1330ce.css","/_app/chunks/vendor-db0bfca2.js","/_app/chunks/env-a13806e5.js"].map((e=>({url:e,revision:null}))),...["/favicon.png","/manifest.webmanifest","/pencil-512x512.png","/robots.txt"].map((e=>({url:e,revision:"1635967246708"})))]),function(e){const t=x();W(new E(t,e))}(H);const D=["/","/scuola"];I(D.map((e=>({url:e,revision:"1635967246708"}))));W((({url:e,request:t,event:s})=>D.some((t=>e.pathname===t))),new class extends k{constructor(e){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(A)}async _handle(e,t){const s=t.fetchAndCachePut(e).catch((()=>{}));let a,r=await t.cacheMatch(e);if(r);else try{r=await s}catch(n){a=n}if(!r)throw new l("no-response",{url:e.url,error:a});return r}}({}));
