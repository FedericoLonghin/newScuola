import {
	S as a,
	i as e,
	s,
	k as t,
	e as r,
	t as n,
	j as o,
	O as i,
	d as c,
	n as u,
	c as l,
	a as p,
	g as f,
	m as h,
	f as v,
	H as d,
	o as m,
	I as $,
	v as g,
	r as E,
	w as j
} from '../chunks/vendor-7a4d6a7b.js';
import { R as k, p as x } from '../chunks/jason-aafa386e.js';
function S(a) {
	let e, s, S, w, z, B, H, I, M, O, P, Q, b;
	return (
		(Q = new k({ props: { json: x } })),
		{
			c() {
				(e = t()),
					(s = r('section')),
					(S = r('h1')),
					(w = n('Benvenuto nella sezione scuola')),
					(z = t()),
					(B = r('p')),
					(H = n('Qui troverai tutti gli appunti divisi per materie etc...')),
					(I = t()),
					(M = r('p')),
					(O = n('Materie:')),
					(P = t()),
					o(Q.$$.fragment),
					this.h();
			},
			l(a) {
				i('[data-svelte="svelte-ddcvn1"]', document.head).forEach(c),
					(e = u(a)),
					(s = l(a, 'SECTION', {}));
				var t = p(s);
				S = l(t, 'H1', {});
				var r = p(S);
				(w = f(r, 'Benvenuto nella sezione scuola')), r.forEach(c), (z = u(t)), (B = l(t, 'P', {}));
				var n = p(B);
				(H = f(n, 'Qui troverai tutti gli appunti divisi per materie etc...')),
					n.forEach(c),
					(I = u(t)),
					(M = l(t, 'P', {}));
				var o = p(M);
				(O = f(o, 'Materie:')),
					o.forEach(c),
					(P = u(t)),
					h(Q.$$.fragment, t),
					t.forEach(c),
					this.h();
			},
			h() {
				document.title = 'Scuola';
			},
			m(a, t) {
				v(a, e, t),
					v(a, s, t),
					d(s, S),
					d(S, w),
					d(s, z),
					d(s, B),
					d(B, H),
					d(s, I),
					d(s, M),
					d(M, O),
					d(s, P),
					m(Q, s, null),
					(b = !0);
			},
			p: $,
			i(a) {
				b || (g(Q.$$.fragment, a), (b = !0));
			},
			o(a) {
				E(Q.$$.fragment, a), (b = !1);
			},
			d(a) {
				a && c(e), a && c(s), j(Q);
			}
		}
	);
}
const w = !0;
export default class extends a {
	constructor(a) {
		super(), e(this, a, null, S, s, {});
	}
}
export { w as prerender };
