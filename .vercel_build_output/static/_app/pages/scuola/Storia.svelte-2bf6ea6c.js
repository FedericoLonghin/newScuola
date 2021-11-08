import {
	S as a,
	i as e,
	s,
	j as t,
	k as r,
	e as n,
	t as i,
	m as o,
	n as c,
	O as l,
	d as u,
	c as f,
	a as m,
	g as p,
	o as v,
	f as h,
	H as d,
	I as $,
	v as g,
	r as j,
	w as E
} from '../../chunks/vendor-7a4d6a7b.js';
import { I as k } from '../../chunks/index-b96ef414.js';
import { R as x, p as b } from '../../chunks/jason-aafa386e.js';
import '../../chunks/index.svelte_svelte&type=style&lang-ca8b6e23.js';
function w(a) {
	let e, s, w, I, S, y, z, B, H, M, O, P, Q, C, N;
	return (
		(e = new k({})),
		(C = new x({ props: { json: b[0].slaves } })),
		{
			c() {
				t(e.$$.fragment),
					(s = r()),
					(w = r()),
					(I = n('section')),
					(S = n('h1')),
					(y = i('Benvenuto nella sezione scuola')),
					(z = r()),
					(B = n('p')),
					(H = i('Qui troverai tutti gli appunti divisi per materie etc...')),
					(M = r()),
					(O = n('p')),
					(P = i('Materie:')),
					(Q = r()),
					t(C.$$.fragment),
					this.h();
			},
			l(a) {
				o(e.$$.fragment, a), (s = c(a));
				l('[data-svelte="svelte-ddcvn1"]', document.head).forEach(u),
					(w = c(a)),
					(I = f(a, 'SECTION', {}));
				var t = m(I);
				S = f(t, 'H1', {});
				var r = m(S);
				(y = p(r, 'Benvenuto nella sezione scuola')), r.forEach(u), (z = c(t)), (B = f(t, 'P', {}));
				var n = m(B);
				(H = p(n, 'Qui troverai tutti gli appunti divisi per materie etc...')),
					n.forEach(u),
					(M = c(t)),
					(O = f(t, 'P', {}));
				var i = m(O);
				(P = p(i, 'Materie:')),
					i.forEach(u),
					(Q = c(t)),
					o(C.$$.fragment, t),
					t.forEach(u),
					this.h();
			},
			h() {
				document.title = 'Scuola';
			},
			m(a, t) {
				v(e, a, t),
					h(a, s, t),
					h(a, w, t),
					h(a, I, t),
					d(I, S),
					d(S, y),
					d(I, z),
					d(I, B),
					d(B, H),
					d(I, M),
					d(I, O),
					d(O, P),
					d(I, Q),
					v(C, I, null),
					(N = !0);
			},
			p: $,
			i(a) {
				N || (g(e.$$.fragment, a), g(C.$$.fragment, a), (N = !0));
			},
			o(a) {
				j(e.$$.fragment, a), j(C.$$.fragment, a), (N = !1);
			},
			d(a) {
				E(e, a), a && u(s), a && u(w), a && u(I), E(C);
			}
		}
	);
}
const I = !0;
export default class extends a {
	constructor(a) {
		super(), e(this, a, null, w, s, {});
	}
}
export { I as prerender };
