import{D as e,S as s,i as t,s as a,e as r,k as c,E as n,t as o,c as l,a as i,d as v,n as h,g as p,b as d,F as u,f,G as m,H as g,I as E,J as b,K as $,l as j,L as w,M as y,N as A,j as I,O as k,m as L,o as T,P as N,v as x,r as C,w as M}from"../chunks/vendor-db0bfca2.js";/* empty css                                                    */const S={subscribe:s=>(()=>{const s=e("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session}})().page.subscribe(s)};function D(e){let s,t,a,E,b,$,j,w,y,A,I,k,L,T,N,x,C,M,S,D,O,R,_,B;return{c(){s=r("header"),t=r("div"),a=c(),E=r("nav"),b=n("svg"),$=n("path"),j=c(),w=r("ul"),y=r("li"),A=r("a"),I=o("Home"),k=c(),L=r("li"),T=r("a"),N=o("Scuola"),x=c(),C=r("li"),M=r("a"),S=o("About"),D=c(),O=n("svg"),R=n("path"),_=c(),B=r("div"),this.h()},l(e){s=l(e,"HEADER",{class:!0});var r=i(s);t=l(r,"DIV",{class:!0}),i(t).forEach(v),a=h(r),E=l(r,"NAV",{class:!0});var c=i(E);b=l(c,"svg",{viewBox:!0,"aria-hidden":!0,class:!0},1);var n=i(b);$=l(n,"path",{d:!0,class:!0},1),i($).forEach(v),n.forEach(v),j=h(c),w=l(c,"UL",{class:!0});var o=i(w);y=l(o,"LI",{class:!0});var d=i(y);A=l(d,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var u=i(A);I=p(u,"Home"),u.forEach(v),d.forEach(v),k=h(o),L=l(o,"LI",{class:!0});var f=i(L);T=l(f,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var m=i(T);N=p(m,"Scuola"),m.forEach(v),f.forEach(v),x=h(o),C=l(o,"LI",{class:!0});var g=i(C);M=l(g,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var F=i(M);S=p(F,"About"),F.forEach(v),g.forEach(v),o.forEach(v),D=h(c),O=l(c,"svg",{viewBox:!0,"aria-hidden":!0,class:!0},1);var P=i(O);R=l(P,"path",{d:!0,class:!0},1),i(R).forEach(v),P.forEach(v),c.forEach(v),_=h(r),B=l(r,"DIV",{class:!0}),i(B).forEach(v),r.forEach(v),this.h()},h(){d(t,"class","corner svelte-1vytpj"),d($,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),d($,"class","svelte-1vytpj"),d(b,"viewBox","0 0 2 3"),d(b,"aria-hidden","true"),d(b,"class","svelte-1vytpj"),d(A,"sveltekit:prefetch",""),d(A,"href","/"),d(A,"class","svelte-1vytpj"),d(y,"class","svelte-1vytpj"),u(y,"active","/"===e[0].path),d(T,"sveltekit:prefetch",""),d(T,"href","/scuola"),d(T,"class","svelte-1vytpj"),d(L,"class","svelte-1vytpj"),u(L,"active","/scuola"===e[0].path),d(M,"sveltekit:prefetch",""),d(M,"href","/About"),d(M,"class","svelte-1vytpj"),d(C,"class","svelte-1vytpj"),u(C,"active","/About"===e[0].path),d(w,"class","svelte-1vytpj"),d(R,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),d(R,"class","svelte-1vytpj"),d(O,"viewBox","0 0 2 3"),d(O,"aria-hidden","true"),d(O,"class","svelte-1vytpj"),d(E,"class","svelte-1vytpj"),d(B,"class","corner svelte-1vytpj"),d(s,"class","svelte-1vytpj")},m(e,r){f(e,s,r),m(s,t),m(s,a),m(s,E),m(E,b),m(b,$),m(E,j),m(E,w),m(w,y),m(y,A),m(A,I),m(w,k),m(w,L),m(L,T),m(T,N),m(w,x),m(w,C),m(C,M),m(M,S),m(E,D),m(E,O),m(O,R),m(s,_),m(s,B)},p(e,[s]){1&s&&u(y,"active","/"===e[0].path),1&s&&u(L,"active","/scuola"===e[0].path),1&s&&u(C,"active","/About"===e[0].path)},i:g,o:g,d(e){e&&v(s)}}}function O(e,s,t){let a;return E(e,S,(e=>t(0,a=e))),[a]}class R extends s{constructor(e){super(),t(this,e,O,D,a,{})}}function _(e){let s,t,a,n,u,g,E,$;function j(e,s){return e[0]?F:B}let w=j(e),y=w(e),A=e[1]&&P(e);return{c(){s=r("div"),t=r("div"),y.c(),a=c(),A&&A.c(),n=c(),u=r("button"),g=o("Chiudi"),this.h()},l(e){s=l(e,"DIV",{class:!0,role:!0});var r=i(s);t=l(r,"DIV",{class:!0});var c=i(t);y.l(c),c.forEach(v),a=h(r),A&&A.l(r),n=h(r),u=l(r,"BUTTON",{class:!0});var o=i(u);g=p(o,"Chiudi"),o.forEach(v),r.forEach(v),this.h()},h(){d(t,"class","message svelte-t803pv"),d(u,"class","svelte-t803pv"),d(s,"class","pwa-toast svelte-t803pv"),d(s,"role","alert")},m(r,c){f(r,s,c),m(s,t),y.m(t,null),m(s,a),A&&A.m(s,null),m(s,n),m(s,u),m(u,g),E||($=b(u,"click",e[4]),E=!0)},p(e,a){w!==(w=j(e))&&(y.d(1),y=w(e),y&&(y.c(),y.m(t,null))),e[1]?A?A.p(e,a):(A=P(e),A.c(),A.m(s,n)):A&&(A.d(1),A=null)},d(e){e&&v(s),y.d(),A&&A.d(),E=!1,$()}}}function B(e){let s,t;return{c(){s=r("span"),t=o("Ci sono nuovi contenuti disponibili!")},l(e){s=l(e,"SPAN",{});var a=i(s);t=p(a,"Ci sono nuovi contenuti disponibili!"),a.forEach(v)},m(e,a){f(e,s,a),m(s,t)},d(e){e&&v(s)}}}function F(e){let s,t;return{c(){s=r("span"),t=o("App pronta per lavorare offline")},l(e){s=l(e,"SPAN",{});var a=i(s);t=p(a,"App pronta per lavorare offline"),a.forEach(v)},m(e,a){f(e,s,a),m(s,t)},d(e){e&&v(s)}}}function P(e){let s,t,a,c;return{c(){s=r("button"),t=o("Ricarica"),this.h()},l(e){s=l(e,"BUTTON",{style:!0,class:!0});var a=i(s);t=p(a,"Ricarica"),a.forEach(v),this.h()},h(){$(s,"background-color","#48E5C2"),d(s,"class","svelte-t803pv")},m(r,n){f(r,s,n),m(s,t),a||(c=b(s,"click",e[3]),a=!0)},p:g,d(e){e&&v(s),a=!1,c()}}}function H(e){let s,t=e[2]&&_(e);return{c(){t&&t.c(),s=j()},l(e){t&&t.l(e),s=j()},m(e,a){t&&t.m(e,a),f(e,s,a)},p(e,[a]){e[2]?t?t.p(e,a):(t=_(e),t.c(),t.m(s.parentNode,s)):t&&(t.d(1),t=null)},i:g,o:g,d(e){t&&t.d(e),e&&v(s)}}}function K(e,s,t){let a,r,c,n=!1,o=!1;function l(e){t(1,o=!0)}return"serviceWorker"in navigator?(r=new w("/service-worker.js",{scope:"/"}),r.addEventListener("activated",(e=>{e.isUpdate||t(0,n=!0)})),r.addEventListener("waiting",l),r.addEventListener("externalwaiting",l),r.register({immediate:!0}).then((e=>c=e)).catch((e=>{console.error("cannot register service worker",e)}))):console.warn("Service workers are not supported."),e.$$.update=()=>{3&e.$$.dirty&&t(2,a=n||o)},[n,o,a,function(){r&&r.addEventListener("controlling",(e=>{e.isUpdate&&window.location.reload()})),c&&c.waiting&&y(c.waiting,{type:"SKIP_WAITING"}).then((()=>{})).catch((e=>{console.error("NOTIFIED SKIP_WAITING WITH ERROR",e)}))},function(){t(0,n=!1),t(1,o=!1)}]}class U extends s{constructor(e){super(),t(this,e,K,H,a,{})}}function V(e){let s,t,a,n,u,g,E,b,$,j,w,y,S,D,O,_,B;b=new R({});const F=e[1].default,P=A(F,e,e[0],null);return _=new U({}),{c(){s=r("link"),t=r("meta"),a=r("meta"),n=r("link"),u=r("meta"),g=r("meta"),E=c(),I(b.$$.fragment),$=c(),j=r("main"),P&&P.c(),w=c(),y=r("footer"),S=r("p"),D=o("Federico Longhin - 2021"),O=c(),I(_.$$.fragment),this.h()},l(e){const r=k('[data-svelte="svelte-1r84mds"]',document.head);s=l(r,"LINK",{rel:!0,href:!0}),t=l(r,"META",{name:!0,content:!0}),a=l(r,"META",{name:!0,content:!0}),n=l(r,"LINK",{rel:!0,href:!0}),u=l(r,"META",{name:!0,content:!0}),g=l(r,"META",{name:!0,content:!0}),r.forEach(v),E=h(e),L(b.$$.fragment,e),$=h(e),j=l(e,"MAIN",{class:!0});var c=i(j);P&&P.l(c),c.forEach(v),w=h(e),y=l(e,"FOOTER",{class:!0});var o=i(y);S=l(o,"P",{});var d=i(S);D=p(d,"Federico Longhin - 2021"),d.forEach(v),o.forEach(v),O=h(e),L(_.$$.fragment,e),this.h()},h(){d(s,"rel","manifest"),d(s,"href","/manifest.webmanifest"),d(t,"name","description"),d(t,"content","questo è il nuovo sitoTest di Federico Longhin"),d(a,"name","apple-mobile-web-app-capable"),d(a,"content","yes"),d(n,"rel","apple-touch-icon"),d(n,"href","/pencil-512x512.png"),d(u,"name","msapplication-TileColor"),d(u,"content","#48e5c2"),d(g,"name","theme-color"),d(g,"content","#333333"),d(j,"class","svelte-193j25t"),d(y,"class","svelte-193j25t")},m(e,r){m(document.head,s),m(document.head,t),m(document.head,a),m(document.head,n),m(document.head,u),m(document.head,g),f(e,E,r),T(b,e,r),f(e,$,r),f(e,j,r),P&&P.m(j,null),f(e,w,r),f(e,y,r),m(y,S),m(S,D),f(e,O,r),T(_,e,r),B=!0},p(e,[s]){P&&P.p&&(!B||1&s)&&N(P,F,e,e[0],s,null,null)},i(e){B||(x(b.$$.fragment,e),x(P,e),x(_.$$.fragment,e),B=!0)},o(e){C(b.$$.fragment,e),C(P,e),C(_.$$.fragment,e),B=!1},d(e){v(s),v(t),v(a),v(n),v(u),v(g),e&&v(E),M(b,e),e&&v($),e&&v(j),P&&P.d(e),e&&v(w),e&&v(y),e&&v(O),M(_,e)}}}function W(e,s,t){let{$$slots:a={},$$scope:r}=s;return e.$$set=e=>{"$$scope"in e&&t(0,r=e.$$scope)},[r,a]}export default class extends s{constructor(e){super(),t(this,e,W,V,a,{})}}