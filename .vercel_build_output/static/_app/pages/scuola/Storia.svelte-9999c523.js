import {
	S as e,
	i as a,
	s as t,
	j as s,
	k as n,
	e as r,
	m as o,
	n as m,
	O as $,
	d as p,
	c as f,
	a as c,
	b as l,
	o as g,
	f as i,
	G as d,
	v as u,
	r as h,
	w as v,
	I as j
} from '../../chunks/vendor-c12218c7.js';
import { p as L } from '../../chunks/stores-52090410.js';
import { I as k } from '../../chunks/index-4cc4db53.js';
import { I as x } from '../../chunks/index-94375af2.js';
/* empty css                                                       */ function R(e) {
	let a, t, j, L, R, U, w, I, N, E, b;
	return (
		(a = new x({})),
		(document.title = j = undefined),
		(U = new k({ props: { pageURL: e[0].path, pageName: 'Il-Novecento', date: '06/11/2021' } })),
		(I = new k({
			props: { pageURL: e[0].path, pageName: 'Prima-guerra-mondiale', date: '06/11/2021' }
		})),
		(E = new k({
			props: {
				pageURL: e[0].path,
				pageName: "La-visione-dell'uomo-nel-positivo",
				date: '06/11/2021'
			}
		})),
		{
			c() {
				s(a.$$.fragment),
					(t = n()),
					(L = n()),
					(R = r('section')),
					s(U.$$.fragment),
					(w = n()),
					s(I.$$.fragment),
					(N = n()),
					s(E.$$.fragment),
					this.h();
			},
			l(e) {
				o(a.$$.fragment, e), (t = m(e));
				$('[data-svelte="svelte-1qqf6os"]', document.head).forEach(p),
					(L = m(e)),
					(R = f(e, 'SECTION', { class: !0 }));
				var s = c(R);
				o(U.$$.fragment, s),
					(w = m(s)),
					o(I.$$.fragment, s),
					(N = m(s)),
					o(E.$$.fragment, s),
					s.forEach(p),
					this.h();
			},
			h() {
				l(R, 'class', 'svelte-1jlhe5t');
			},
			m(e, s) {
				g(a, e, s),
					i(e, t, s),
					i(e, L, s),
					i(e, R, s),
					g(U, R, null),
					d(R, w),
					g(I, R, null),
					d(R, N),
					g(E, R, null),
					(b = !0);
			},
			p(e, [a]) {
				(!b || 0 & a) && j !== (j = undefined) && (document.title = j);
				const t = {};
				1 & a && (t.pageURL = e[0].path), U.$set(t);
				const s = {};
				1 & a && (s.pageURL = e[0].path), I.$set(s);
				const n = {};
				1 & a && (n.pageURL = e[0].path), E.$set(n);
			},
			i(e) {
				b ||
					(u(a.$$.fragment, e),
					u(U.$$.fragment, e),
					u(I.$$.fragment, e),
					u(E.$$.fragment, e),
					(b = !0));
			},
			o(e) {
				h(a.$$.fragment, e),
					h(U.$$.fragment, e),
					h(I.$$.fragment, e),
					h(E.$$.fragment, e),
					(b = !1);
			},
			d(e) {
				v(a, e), e && p(t), e && p(L), e && p(R), v(U), v(I), v(E);
			}
		}
	);
}
const U = !0;
function w(e, a, t) {
	let s;
	return j(e, L, (e) => t(0, (s = e))), [s];
}
export default class extends e {
	constructor(e) {
		super(), a(this, e, w, R, t, {});
	}
}
export { U as prerender };
