import {
	S as e,
	i as t,
	s as a,
	e as s,
	k as c,
	D as r,
	t as n,
	c as l,
	a as o,
	d as i,
	n as v,
	E as h,
	g as p,
	b as d,
	F as u,
	f,
	G as m,
	H as E,
	I as $,
	J as g,
	K as j,
	l as w,
	L as y,
	M as A,
	N as I,
	j as k,
	O as L,
	m as b,
	o as T,
	P as N,
	Q as x,
	R as C,
	v as M,
	r as R,
	w as S
} from '../chunks/vendor-c12218c7.js';
import { p as D } from '../chunks/stores-52090410.js';
/* empty css                                                    */ function O(e) {
	let t, a, $, g, j, w, y, A, I, k, L, b, T, N, x, C, M, R, S, D, O, B, F, P;
	return {
		c() {
			(t = s('header')),
				(a = s('div')),
				($ = c()),
				(g = s('nav')),
				(j = r('svg')),
				(w = r('path')),
				(y = c()),
				(A = s('ul')),
				(I = s('li')),
				(k = s('a')),
				(L = n('Home')),
				(b = c()),
				(T = s('li')),
				(N = s('a')),
				(x = n('Scuola')),
				(C = c()),
				(M = s('li')),
				(R = s('a')),
				(S = n('About')),
				(D = c()),
				(O = r('svg')),
				(B = r('path')),
				(F = c()),
				(P = s('div')),
				this.h();
		},
		l(e) {
			t = l(e, 'HEADER', { class: !0 });
			var s = o(t);
			(a = l(s, 'DIV', { class: !0 })),
				o(a).forEach(i),
				($ = v(s)),
				(g = l(s, 'NAV', { class: !0 }));
			var c = o(g);
			j = h(c, 'svg', { viewBox: !0, 'aria-hidden': !0, class: !0 });
			var r = o(j);
			(w = h(r, 'path', { d: !0, class: !0 })),
				o(w).forEach(i),
				r.forEach(i),
				(y = v(c)),
				(A = l(c, 'UL', { class: !0 }));
			var n = o(A);
			I = l(n, 'LI', { class: !0 });
			var d = o(I);
			k = l(d, 'A', { 'sveltekit:prefetch': !0, href: !0, class: !0 });
			var u = o(k);
			(L = p(u, 'Home')), u.forEach(i), d.forEach(i), (b = v(n)), (T = l(n, 'LI', { class: !0 }));
			var f = o(T);
			N = l(f, 'A', { 'sveltekit:prefetch': !0, href: !0, class: !0 });
			var m = o(N);
			(x = p(m, 'Scuola')), m.forEach(i), f.forEach(i), (C = v(n)), (M = l(n, 'LI', { class: !0 }));
			var E = o(M);
			R = l(E, 'A', { 'sveltekit:prefetch': !0, href: !0, class: !0 });
			var H = o(R);
			(S = p(H, 'About')),
				H.forEach(i),
				E.forEach(i),
				n.forEach(i),
				(D = v(c)),
				(O = h(c, 'svg', { viewBox: !0, 'aria-hidden': !0, class: !0 }));
			var K = o(O);
			(B = h(K, 'path', { d: !0, class: !0 })),
				o(B).forEach(i),
				K.forEach(i),
				c.forEach(i),
				(F = v(s)),
				(P = l(s, 'DIV', { class: !0 })),
				o(P).forEach(i),
				s.forEach(i),
				this.h();
		},
		h() {
			d(a, 'class', 'corner svelte-1vytpj'),
				d(w, 'd', 'M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z'),
				d(w, 'class', 'svelte-1vytpj'),
				d(j, 'viewBox', '0 0 2 3'),
				d(j, 'aria-hidden', 'true'),
				d(j, 'class', 'svelte-1vytpj'),
				d(k, 'sveltekit:prefetch', ''),
				d(k, 'href', '/'),
				d(k, 'class', 'svelte-1vytpj'),
				d(I, 'class', 'svelte-1vytpj'),
				u(I, 'active', '/' === e[0].path),
				d(N, 'sveltekit:prefetch', ''),
				d(N, 'href', '/scuola'),
				d(N, 'class', 'svelte-1vytpj'),
				d(T, 'class', 'svelte-1vytpj'),
				u(T, 'active', 'scuola' === e[0].path.split('/')[1]),
				d(R, 'sveltekit:prefetch', ''),
				d(R, 'href', '/About'),
				d(R, 'class', 'svelte-1vytpj'),
				d(M, 'class', 'svelte-1vytpj'),
				u(M, 'active', '/About' === e[0].path),
				d(A, 'class', 'svelte-1vytpj'),
				d(B, 'd', 'M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z'),
				d(B, 'class', 'svelte-1vytpj'),
				d(O, 'viewBox', '0 0 2 3'),
				d(O, 'aria-hidden', 'true'),
				d(O, 'class', 'svelte-1vytpj'),
				d(g, 'class', 'svelte-1vytpj'),
				d(P, 'class', 'corner svelte-1vytpj'),
				d(t, 'class', 'svelte-1vytpj');
		},
		m(e, s) {
			f(e, t, s),
				m(t, a),
				m(t, $),
				m(t, g),
				m(g, j),
				m(j, w),
				m(g, y),
				m(g, A),
				m(A, I),
				m(I, k),
				m(k, L),
				m(A, b),
				m(A, T),
				m(T, N),
				m(N, x),
				m(A, C),
				m(A, M),
				m(M, R),
				m(R, S),
				m(g, D),
				m(g, O),
				m(O, B),
				m(t, F),
				m(t, P);
		},
		p(e, [t]) {
			1 & t && u(I, 'active', '/' === e[0].path),
				1 & t && u(T, 'active', 'scuola' === e[0].path.split('/')[1]),
				1 & t && u(M, 'active', '/About' === e[0].path);
		},
		i: E,
		o: E,
		d(e) {
			e && i(t);
		}
	};
}
function B(e, t, a) {
	let s;
	return $(e, D, (e) => a(0, (s = e))), console.log(s.path.split('/')[1]), [s];
}
class F extends e {
	constructor(e) {
		super(), t(this, e, B, O, a, {});
	}
}
function P(e) {
	let t, a, r, h, u, E, $, j;
	function w(e, t) {
		return e[0] ? K : H;
	}
	let y = w(e),
		A = y(e),
		I = e[1] && U(e);
	return {
		c() {
			(t = s('div')),
				(a = s('div')),
				A.c(),
				(r = c()),
				I && I.c(),
				(h = c()),
				(u = s('button')),
				(E = n('Chiudi')),
				this.h();
		},
		l(e) {
			t = l(e, 'DIV', { class: !0, role: !0 });
			var s = o(t);
			a = l(s, 'DIV', { class: !0 });
			var c = o(a);
			A.l(c),
				c.forEach(i),
				(r = v(s)),
				I && I.l(s),
				(h = v(s)),
				(u = l(s, 'BUTTON', { class: !0 }));
			var n = o(u);
			(E = p(n, 'Chiudi')), n.forEach(i), s.forEach(i), this.h();
		},
		h() {
			d(a, 'class', 'message svelte-t803pv'),
				d(u, 'class', 'svelte-t803pv'),
				d(t, 'class', 'pwa-toast svelte-t803pv'),
				d(t, 'role', 'alert');
		},
		m(s, c) {
			f(s, t, c),
				m(t, a),
				A.m(a, null),
				m(t, r),
				I && I.m(t, null),
				m(t, h),
				m(t, u),
				m(u, E),
				$ || ((j = g(u, 'click', e[4])), ($ = !0));
		},
		p(e, s) {
			y !== (y = w(e)) && (A.d(1), (A = y(e)), A && (A.c(), A.m(a, null))),
				e[1] ? (I ? I.p(e, s) : ((I = U(e)), I.c(), I.m(t, h))) : I && (I.d(1), (I = null));
		},
		d(e) {
			e && i(t), A.d(), I && I.d(), ($ = !1), j();
		}
	};
}
function H(e) {
	let t, a;
	return {
		c() {
			(t = s('span')), (a = n('Ci sono nuovi contenuti disponibili!'));
		},
		l(e) {
			t = l(e, 'SPAN', {});
			var s = o(t);
			(a = p(s, 'Ci sono nuovi contenuti disponibili!')), s.forEach(i);
		},
		m(e, s) {
			f(e, t, s), m(t, a);
		},
		d(e) {
			e && i(t);
		}
	};
}
function K(e) {
	let t, a;
	return {
		c() {
			(t = s('span')), (a = n('App pronta per lavorare offline'));
		},
		l(e) {
			t = l(e, 'SPAN', {});
			var s = o(t);
			(a = p(s, 'App pronta per lavorare offline')), s.forEach(i);
		},
		m(e, s) {
			f(e, t, s), m(t, a);
		},
		d(e) {
			e && i(t);
		}
	};
}
function U(e) {
	let t, a, c, r;
	return {
		c() {
			(t = s('button')), (a = n('Ricarica')), this.h();
		},
		l(e) {
			t = l(e, 'BUTTON', { style: !0, class: !0 });
			var s = o(t);
			(a = p(s, 'Ricarica')), s.forEach(i), this.h();
		},
		h() {
			j(t, 'background-color', '#48E5C2'), d(t, 'class', 'svelte-t803pv');
		},
		m(s, n) {
			f(s, t, n), m(t, a), c || ((r = g(t, 'click', e[3])), (c = !0));
		},
		p: E,
		d(e) {
			e && i(t), (c = !1), r();
		}
	};
}
function V(e) {
	let t,
		a = e[2] && P(e);
	return {
		c() {
			a && a.c(), (t = w());
		},
		l(e) {
			a && a.l(e), (t = w());
		},
		m(e, s) {
			a && a.m(e, s), f(e, t, s);
		},
		p(e, [s]) {
			e[2]
				? a
					? a.p(e, s)
					: ((a = P(e)), a.c(), a.m(t.parentNode, t))
				: a && (a.d(1), (a = null));
		},
		i: E,
		o: E,
		d(e) {
			a && a.d(e), e && i(t);
		}
	};
}
function W(e, t, a) {
	let s,
		c,
		r,
		n = !1,
		l = !1;
	function o(e) {
		a(1, (l = !0));
	}
	return (
		'serviceWorker' in navigator
			? ((c = new y('/service-worker.js', { scope: '/' })),
			  c.addEventListener('activated', (e) => {
					e.isUpdate || a(0, (n = !0));
			  }),
			  c.addEventListener('waiting', o),
			  c.addEventListener('externalwaiting', o),
			  c
					.register({ immediate: !0 })
					.then((e) => (r = e))
					.catch((e) => {
						console.error('cannot register service worker', e);
					}))
			: console.warn('Service workers are not supported.'),
		(e.$$.update = () => {
			3 & e.$$.dirty && a(2, (s = n || l));
		}),
		[
			n,
			l,
			s,
			function () {
				c &&
					c.addEventListener('controlling', (e) => {
						e.isUpdate && window.location.reload();
					}),
					r &&
						r.waiting &&
						A(r.waiting, { type: 'SKIP_WAITING' })
							.then(() => {})
							.catch((e) => {
								console.error('NOTIFIED SKIP_WAITING WITH ERROR', e);
							});
			},
			function () {
				a(0, (n = !1)), a(1, (l = !1));
			}
		]
	);
}
class G extends e {
	constructor(e) {
		super(), t(this, e, W, V, a, {});
	}
}
function _(e) {
	let t, a, r, h, u, E, $, g, j, w, y, A, D, O, B, P, H;
	g = new F({});
	const K = e[1].default,
		U = I(K, e, e[0], null);
	return (
		(P = new G({})),
		{
			c() {
				(t = s('link')),
					(a = s('meta')),
					(r = s('meta')),
					(h = s('link')),
					(u = s('meta')),
					(E = s('meta')),
					($ = c()),
					k(g.$$.fragment),
					(j = c()),
					(w = s('main')),
					U && U.c(),
					(y = c()),
					(A = s('footer')),
					(D = s('p')),
					(O = n('Federico Longhin - 2021')),
					(B = c()),
					k(P.$$.fragment),
					this.h();
			},
			l(e) {
				const s = L('[data-svelte="svelte-1r84mds"]', document.head);
				(t = l(s, 'LINK', { rel: !0, href: !0 })),
					(a = l(s, 'META', { name: !0, content: !0 })),
					(r = l(s, 'META', { name: !0, content: !0 })),
					(h = l(s, 'LINK', { rel: !0, href: !0 })),
					(u = l(s, 'META', { name: !0, content: !0 })),
					(E = l(s, 'META', { name: !0, content: !0 })),
					s.forEach(i),
					($ = v(e)),
					b(g.$$.fragment, e),
					(j = v(e)),
					(w = l(e, 'MAIN', { class: !0 }));
				var c = o(w);
				U && U.l(c), c.forEach(i), (y = v(e)), (A = l(e, 'FOOTER', { class: !0 }));
				var n = o(A);
				D = l(n, 'P', {});
				var d = o(D);
				(O = p(d, 'Federico Longhin - 2021')),
					d.forEach(i),
					n.forEach(i),
					(B = v(e)),
					b(P.$$.fragment, e),
					this.h();
			},
			h() {
				d(t, 'rel', 'manifest'),
					d(t, 'href', '/manifest.webmanifest'),
					d(a, 'name', 'description'),
					d(a, 'content', 'questo è il nuovo sitoTest di Federico Longhin'),
					d(r, 'name', 'apple-mobile-web-app-capable'),
					d(r, 'content', 'yes'),
					d(h, 'rel', 'apple-touch-icon'),
					d(h, 'href', '/pencil-512x512.png'),
					d(u, 'name', 'msapplication-TileColor'),
					d(u, 'content', '#48e5c2'),
					d(E, 'name', 'theme-color'),
					d(E, 'content', '#333333'),
					d(w, 'class', 'svelte-193j25t'),
					d(A, 'class', 'svelte-193j25t');
			},
			m(e, s) {
				m(document.head, t),
					m(document.head, a),
					m(document.head, r),
					m(document.head, h),
					m(document.head, u),
					m(document.head, E),
					f(e, $, s),
					T(g, e, s),
					f(e, j, s),
					f(e, w, s),
					U && U.m(w, null),
					f(e, y, s),
					f(e, A, s),
					m(A, D),
					m(D, O),
					f(e, B, s),
					T(P, e, s),
					(H = !0);
			},
			p(e, [t]) {
				U && U.p && (!H || 1 & t) && N(U, K, e, e[0], H ? C(K, e[0], t, null) : x(e[0]), null);
			},
			i(e) {
				H || (M(g.$$.fragment, e), M(U, e), M(P.$$.fragment, e), (H = !0));
			},
			o(e) {
				R(g.$$.fragment, e), R(U, e), R(P.$$.fragment, e), (H = !1);
			},
			d(e) {
				i(t),
					i(a),
					i(r),
					i(h),
					i(u),
					i(E),
					e && i($),
					S(g, e),
					e && i(j),
					e && i(w),
					U && U.d(e),
					e && i(y),
					e && i(A),
					e && i(B),
					S(P, e);
			}
		}
	);
}
function Z(e, t, a) {
	let { $$slots: s = {}, $$scope: c } = t;
	return (
		(e.$$set = (e) => {
			'$$scope' in e && a(0, (c = e.$$scope));
		}),
		[c, s]
	);
}
export default class extends e {
	constructor(e) {
		super(), t(this, e, Z, _, a, {});
	}
}
