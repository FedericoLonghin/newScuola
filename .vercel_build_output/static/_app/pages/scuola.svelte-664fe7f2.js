import {
	S as a,
	i as e,
	s as t,
	k as s,
	e as r,
	t as n,
	j as o,
	O as i,
	d as c,
	n as p,
	c as u,
	a as l,
	g as m,
	m as f,
	b as h,
	f as d,
	G as v,
	o as $,
	v as g,
	r as j,
	w as k,
	I as E
} from '../chunks/vendor-c12218c7.js';
import { d as x, b as I } from '../chunks/env-a13806e5.js';
import { I as L } from '../chunks/index-4cc4db53.js';
import { p as R } from '../chunks/stores-52090410.js';
function U(a) {
	let e, t, E, x, I, R, U, b, w, D, S, z, B, M, N;
	return (
		(z = new L({ props: { pageURL: a[0].path, pageName: 'Storia', date: 'noDate' } })),
		(M = new L({ props: { pageURL: a[0].path, pageName: 'Italiano', date: 'noDate' } })),
		{
			c() {
				(e = s()),
					(t = r('div')),
					(E = r('h1')),
					(x = n('Benvenuto nella sezione scuola')),
					(I = s()),
					(R = r('p')),
					(U = n('Qui troverai tutti gli appunti divisi per materie etc...')),
					(b = s()),
					(w = r('p')),
					(D = n('Materie:')),
					(S = s()),
					o(z.$$.fragment),
					(B = s()),
					o(M.$$.fragment),
					this.h();
			},
			l(a) {
				i('[data-svelte="svelte-ddcvn1"]', document.head).forEach(c),
					(e = p(a)),
					(t = u(a, 'DIV', { class: !0 }));
				var s = l(t);
				E = u(s, 'H1', {});
				var r = l(E);
				(x = m(r, 'Benvenuto nella sezione scuola')), r.forEach(c), (I = p(s)), (R = u(s, 'P', {}));
				var n = l(R);
				(U = m(n, 'Qui troverai tutti gli appunti divisi per materie etc...')),
					n.forEach(c),
					(b = p(s)),
					(w = u(s, 'P', {}));
				var o = l(w);
				(D = m(o, 'Materie:')),
					o.forEach(c),
					(S = p(s)),
					f(z.$$.fragment, s),
					(B = p(s)),
					f(M.$$.fragment, s),
					s.forEach(c),
					this.h();
			},
			h() {
				(document.title = 'Scuola'), h(t, 'class', 'content svelte-cf77e8');
			},
			m(a, s) {
				d(a, e, s),
					d(a, t, s),
					v(t, E),
					v(E, x),
					v(t, I),
					v(t, R),
					v(R, U),
					v(t, b),
					v(t, w),
					v(w, D),
					v(t, S),
					$(z, t, null),
					v(t, B),
					$(M, t, null),
					(N = !0);
			},
			p(a, [e]) {
				const t = {};
				1 & e && (t.pageURL = a[0].path), z.$set(t);
				const s = {};
				1 & e && (s.pageURL = a[0].path), M.$set(s);
			},
			i(a) {
				N || (g(z.$$.fragment, a), g(M.$$.fragment, a), (N = !0));
			},
			o(a) {
				j(z.$$.fragment, a), j(M.$$.fragment, a), (N = !1);
			},
			d(a) {
				a && c(e), a && c(t), k(z), k(M);
			}
		}
	);
}
const b = x,
	w = I,
	D = !0;
function S(a, e, t) {
	let s;
	return E(a, R, (a) => t(0, (s = a))), [s];
}
export default class extends a {
	constructor(a) {
		super(), e(this, a, S, U, t, {});
	}
}
export { b as hydrate, D as prerender, w as router };