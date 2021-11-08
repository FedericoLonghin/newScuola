import {
	S as e,
	i as a,
	s as t,
	e as s,
	k as c,
	D as l,
	t as r,
	c as n,
	a as o,
	d as i,
	n as h,
	E as v,
	g as d,
	b as u,
	F as f,
	G as m,
	f as p,
	H as E,
	I as g,
	J as $,
	K as w,
	l as A,
	L as I,
	M as k,
	N as L,
	j as b,
	O as T,
	m as N,
	o as x,
	P as C,
	Q as D,
	R as M,
	v as R,
	r as S,
	w as y
} from '../chunks/vendor-7a4d6a7b.js';
import { p as O } from '../chunks/index.svelte_svelte&type=style&lang-ca8b6e23.js';
function j(e) {
	let a, t, $, w, A, I, k, L, b, T, N, x, C, D, M, R, S, y, O, j, B, F, P, V, H, K;
	return {
		c() {
			(a = s('header')),
				(t = s('div')),
				($ = c()),
				(w = s('nav')),
				(A = l('svg')),
				(I = l('path')),
				(k = c()),
				(L = s('ul')),
				(b = s('li')),
				(T = s('a')),
				(N = r('Home')),
				(x = c()),
				(C = s('li')),
				(D = s('a')),
				(M = r('Scuola')),
				(R = c()),
				(S = s('li')),
				(y = s('a')),
				(O = r('About')),
				(j = c()),
				(B = l('svg')),
				(F = l('path')),
				(P = c()),
				(V = s('div')),
				(H = c()),
				(K = s('div')),
				this.h();
		},
		l(e) {
			a = n(e, 'HEADER', { class: !0 });
			var s = o(a);
			(t = n(s, 'DIV', { class: !0 })),
				o(t).forEach(i),
				($ = h(s)),
				(w = n(s, 'NAV', { class: !0 }));
			var c = o(w);
			A = v(c, 'svg', { viewBox: !0, 'aria-hidden': !0, class: !0 });
			var l = o(A);
			(I = v(l, 'path', { d: !0, class: !0 })),
				o(I).forEach(i),
				l.forEach(i),
				(k = h(c)),
				(L = n(c, 'UL', { class: !0 }));
			var r = o(L);
			b = n(r, 'LI', { class: !0 });
			var u = o(b);
			T = n(u, 'A', { 'sveltekit:prefetch': !0, href: !0, class: !0 });
			var f = o(T);
			(N = d(f, 'Home')), f.forEach(i), u.forEach(i), (x = h(r)), (C = n(r, 'LI', { class: !0 }));
			var m = o(C);
			D = n(m, 'A', { 'sveltekit:prefetch': !0, href: !0, class: !0 });
			var p = o(D);
			(M = d(p, 'Scuola')), p.forEach(i), m.forEach(i), (R = h(r)), (S = n(r, 'LI', { class: !0 }));
			var E = o(S);
			y = n(E, 'A', { 'sveltekit:prefetch': !0, href: !0, class: !0 });
			var g = o(y);
			(O = d(g, 'About')),
				g.forEach(i),
				E.forEach(i),
				r.forEach(i),
				(j = h(c)),
				(B = v(c, 'svg', { viewBox: !0, 'aria-hidden': !0, class: !0 }));
			var U = o(B);
			(F = v(U, 'path', { d: !0, class: !0 })),
				o(F).forEach(i),
				U.forEach(i),
				c.forEach(i),
				(P = h(s)),
				(V = n(s, 'DIV', { class: !0 })),
				o(V).forEach(i),
				s.forEach(i),
				(H = h(e)),
				(K = n(e, 'DIV', { style: !0 })),
				o(K).forEach(i),
				this.h();
		},
		h() {
			u(t, 'class', 'corner svelte-19l1me1'),
				u(I, 'd', 'M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z'),
				u(I, 'class', 'svelte-19l1me1'),
				u(A, 'viewBox', '0 0 2 3'),
				u(A, 'aria-hidden', 'true'),
				u(A, 'class', 'svelte-19l1me1'),
				u(T, 'sveltekit:prefetch', ''),
				u(T, 'href', '/'),
				u(T, 'class', 'svelte-19l1me1'),
				u(b, 'class', 'svelte-19l1me1'),
				f(b, 'active', '/' === e[0].path),
				u(D, 'sveltekit:prefetch', ''),
				u(D, 'href', '/scuola'),
				u(D, 'class', 'svelte-19l1me1'),
				u(C, 'class', 'svelte-19l1me1'),
				f(C, 'active', 'scuola' === e[0].path.split('/')[1]),
				u(y, 'sveltekit:prefetch', ''),
				u(y, 'href', '/About'),
				u(y, 'class', 'svelte-19l1me1'),
				u(S, 'class', 'svelte-19l1me1'),
				f(S, 'active', '/About' === e[0].path),
				u(L, 'class', 'svelte-19l1me1'),
				u(F, 'd', 'M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z'),
				u(F, 'class', 'svelte-19l1me1'),
				u(B, 'viewBox', '0 0 2 3'),
				u(B, 'aria-hidden', 'true'),
				u(B, 'class', 'svelte-19l1me1'),
				u(w, 'class', 'svelte-19l1me1'),
				u(V, 'class', 'corner svelte-19l1me1'),
				u(a, 'class', 'svelte-19l1me1'),
				m(K, 'height', '3em'),
				m(K, 'wight', 'auto');
		},
		m(e, s) {
			p(e, a, s),
				E(a, t),
				E(a, $),
				E(a, w),
				E(w, A),
				E(A, I),
				E(w, k),
				E(w, L),
				E(L, b),
				E(b, T),
				E(T, N),
				E(L, x),
				E(L, C),
				E(C, D),
				E(D, M),
				E(L, R),
				E(L, S),
				E(S, y),
				E(y, O),
				E(w, j),
				E(w, B),
				E(B, F),
				E(a, P),
				E(a, V),
				p(e, H, s),
				p(e, K, s);
		},
		p(e, [a]) {
			1 & a && f(b, 'active', '/' === e[0].path),
				1 & a && f(C, 'active', 'scuola' === e[0].path.split('/')[1]),
				1 & a && f(S, 'active', '/About' === e[0].path);
		},
		i: g,
		o: g,
		d(e) {
			e && i(a), e && i(H), e && i(K);
		}
	};
}
function B(e, a, t) {
	let s;
	return $(e, O, (e) => t(0, (s = e))), [s];
}
class F extends e {
	constructor(e) {
		super(), a(this, e, B, j, t, {});
	}
}
function P(e) {
	let a, t, l, v, f, m, g, $;
	function A(e, a) {
		return e[0] ? H : V;
	}
	let I = A(e),
		k = I(e),
		L = e[1] && K(e);
	return {
		c() {
			(a = s('div')),
				(t = s('div')),
				k.c(),
				(l = c()),
				L && L.c(),
				(v = c()),
				(f = s('button')),
				(m = r('Chiudi')),
				this.h();
		},
		l(e) {
			a = n(e, 'DIV', { class: !0, role: !0 });
			var s = o(a);
			t = n(s, 'DIV', { class: !0 });
			var c = o(t);
			k.l(c),
				c.forEach(i),
				(l = h(s)),
				L && L.l(s),
				(v = h(s)),
				(f = n(s, 'BUTTON', { class: !0 }));
			var r = o(f);
			(m = d(r, 'Chiudi')), r.forEach(i), s.forEach(i), this.h();
		},
		h() {
			u(t, 'class', 'message svelte-t803pv'),
				u(f, 'class', 'svelte-t803pv'),
				u(a, 'class', 'pwa-toast svelte-t803pv'),
				u(a, 'role', 'alert');
		},
		m(s, c) {
			p(s, a, c),
				E(a, t),
				k.m(t, null),
				E(a, l),
				L && L.m(a, null),
				E(a, v),
				E(a, f),
				E(f, m),
				g || (($ = w(f, 'click', e[4])), (g = !0));
		},
		p(e, s) {
			I !== (I = A(e)) && (k.d(1), (k = I(e)), k && (k.c(), k.m(t, null))),
				e[1] ? (L ? L.p(e, s) : ((L = K(e)), L.c(), L.m(a, v))) : L && (L.d(1), (L = null));
		},
		d(e) {
			e && i(a), k.d(), L && L.d(), (g = !1), $();
		}
	};
}
function V(e) {
	let a, t;
	return {
		c() {
			(a = s('span')), (t = r('Ci sono nuovi contenuti disponibili!'));
		},
		l(e) {
			a = n(e, 'SPAN', {});
			var s = o(a);
			(t = d(s, 'Ci sono nuovi contenuti disponibili!')), s.forEach(i);
		},
		m(e, s) {
			p(e, a, s), E(a, t);
		},
		d(e) {
			e && i(a);
		}
	};
}
function H(e) {
	let a, t;
	return {
		c() {
			(a = s('span')), (t = r('App pronta per lavorare offline'));
		},
		l(e) {
			a = n(e, 'SPAN', {});
			var s = o(a);
			(t = d(s, 'App pronta per lavorare offline')), s.forEach(i);
		},
		m(e, s) {
			p(e, a, s), E(a, t);
		},
		d(e) {
			e && i(a);
		}
	};
}
function K(e) {
	let a, t, c, l;
	return {
		c() {
			(a = s('button')), (t = r('Ricarica')), this.h();
		},
		l(e) {
			a = n(e, 'BUTTON', { style: !0, class: !0 });
			var s = o(a);
			(t = d(s, 'Ricarica')), s.forEach(i), this.h();
		},
		h() {
			m(a, 'background-color', '#48E5C2'), u(a, 'class', 'svelte-t803pv');
		},
		m(s, r) {
			p(s, a, r), E(a, t), c || ((l = w(a, 'click', e[3])), (c = !0));
		},
		p: g,
		d(e) {
			e && i(a), (c = !1), l();
		}
	};
}
function U(e) {
	let a,
		t = e[2] && P(e);
	return {
		c() {
			t && t.c(), (a = A());
		},
		l(e) {
			t && t.l(e), (a = A());
		},
		m(e, s) {
			t && t.m(e, s), p(e, a, s);
		},
		p(e, [s]) {
			e[2]
				? t
					? t.p(e, s)
					: ((t = P(e)), t.c(), t.m(a.parentNode, a))
				: t && (t.d(1), (t = null));
		},
		i: g,
		o: g,
		d(e) {
			t && t.d(e), e && i(a);
		}
	};
}
function W(e, a, t) {
	let s,
		c,
		l,
		r = !1,
		n = !1;
	function o(e) {
		t(1, (n = !0));
	}
	return (
		'serviceWorker' in navigator
			? ((c = new I('/service-worker.js', { scope: '/' })),
			  c.addEventListener('activated', (e) => {
					e.isUpdate || t(0, (r = !0));
			  }),
			  c.addEventListener('waiting', o),
			  c.addEventListener('externalwaiting', o),
			  c
					.register({ immediate: !0 })
					.then((e) => (l = e))
					.catch((e) => {
						console.error('cannot register service worker', e);
					}))
			: console.warn('Service workers are not supported.'),
		(e.$$.update = () => {
			3 & e.$$.dirty && t(2, (s = r || n));
		}),
		[
			r,
			n,
			s,
			function () {
				c &&
					c.addEventListener('controlling', (e) => {
						e.isUpdate && window.location.reload();
					}),
					l &&
						l.waiting &&
						k(l.waiting, { type: 'SKIP_WAITING' })
							.then(() => {})
							.catch((e) => {
								console.error('NOTIFIED SKIP_WAITING WITH ERROR', e);
							});
			},
			function () {
				t(0, (r = !1)), t(1, (n = !1));
			}
		]
	);
}
class G extends e {
	constructor(e) {
		super(), a(this, e, W, U, t, {});
	}
}
function _(e) {
	let a, t, l, v, f, m, g, $, w, A, I, k, O, j, B, P, V;
	$ = new F({});
	const H = e[1].default,
		K = L(H, e, e[0], null);
	return (
		(P = new G({})),
		{
			c() {
				(a = s('link')),
					(t = s('meta')),
					(l = s('meta')),
					(v = s('link')),
					(f = s('meta')),
					(m = s('meta')),
					(g = c()),
					b($.$$.fragment),
					(w = c()),
					(A = s('main')),
					K && K.c(),
					(I = c()),
					(k = s('footer')),
					(O = s('p')),
					(j = r('Federico Longhin - 2021')),
					(B = c()),
					b(P.$$.fragment),
					this.h();
			},
			l(e) {
				const s = T('[data-svelte="svelte-1r84mds"]', document.head);
				(a = n(s, 'LINK', { rel: !0, href: !0 })),
					(t = n(s, 'META', { name: !0, content: !0 })),
					(l = n(s, 'META', { name: !0, content: !0 })),
					(v = n(s, 'LINK', { rel: !0, href: !0 })),
					(f = n(s, 'META', { name: !0, content: !0 })),
					(m = n(s, 'META', { name: !0, content: !0 })),
					s.forEach(i),
					(g = h(e)),
					N($.$$.fragment, e),
					(w = h(e)),
					(A = n(e, 'MAIN', { class: !0 }));
				var c = o(A);
				K && K.l(c), c.forEach(i), (I = h(e)), (k = n(e, 'FOOTER', { class: !0 }));
				var r = o(k);
				O = n(r, 'P', {});
				var u = o(O);
				(j = d(u, 'Federico Longhin - 2021')),
					u.forEach(i),
					r.forEach(i),
					(B = h(e)),
					N(P.$$.fragment, e),
					this.h();
			},
			h() {
				u(a, 'rel', 'manifest'),
					u(a, 'href', '/manifest.webmanifest'),
					u(t, 'name', 'description'),
					u(t, 'content', 'questo è il nuovo sitoTest di Federico Longhin'),
					u(l, 'name', 'apple-mobile-web-app-capable'),
					u(l, 'content', 'yes'),
					u(v, 'rel', 'apple-touch-icon'),
					u(v, 'href', '/pencil-512x512.png'),
					u(f, 'name', 'msapplication-TileColor'),
					u(f, 'content', '#48e5c2'),
					u(m, 'name', 'theme-color'),
					u(m, 'content', '#333333'),
					u(A, 'class', 'svelte-193j25t'),
					u(k, 'class', 'svelte-193j25t');
			},
			m(e, s) {
				E(document.head, a),
					E(document.head, t),
					E(document.head, l),
					E(document.head, v),
					E(document.head, f),
					E(document.head, m),
					p(e, g, s),
					x($, e, s),
					p(e, w, s),
					p(e, A, s),
					K && K.m(A, null),
					p(e, I, s),
					p(e, k, s),
					E(k, O),
					E(O, j),
					p(e, B, s),
					x(P, e, s),
					(V = !0);
			},
			p(e, [a]) {
				K && K.p && (!V || 1 & a) && C(K, H, e, e[0], V ? M(H, e[0], a, null) : D(e[0]), null);
			},
			i(e) {
				V || (R($.$$.fragment, e), R(K, e), R(P.$$.fragment, e), (V = !0));
			},
			o(e) {
				S($.$$.fragment, e), S(K, e), S(P.$$.fragment, e), (V = !1);
			},
			d(e) {
				i(a),
					i(t),
					i(l),
					i(v),
					i(f),
					i(m),
					e && i(g),
					y($, e),
					e && i(w),
					e && i(A),
					K && K.d(e),
					e && i(I),
					e && i(k),
					e && i(B),
					y(P, e);
			}
		}
	);
}
function Z(e, a, t) {
	let { $$slots: s = {}, $$scope: c } = a;
	return (
		(e.$$set = (e) => {
			'$$scope' in e && t(0, (c = e.$$scope));
		}),
		[c, s]
	);
}
export default class extends e {
	constructor(e) {
		super(), a(this, e, Z, _, t, {});
	}
}
