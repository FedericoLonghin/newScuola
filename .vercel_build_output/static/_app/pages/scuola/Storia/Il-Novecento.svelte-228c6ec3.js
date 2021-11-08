import {
	S as s,
	i as a,
	s as e,
	j as t,
	k as n,
	e as o,
	t as r,
	m as c,
	n as l,
	c as h,
	a as f,
	g as i,
	d as m,
	b as v,
	o as u,
	f as d,
	H as g,
	I as p,
	v as $,
	r as b,
	w as x
} from '../../../chunks/vendor-7a4d6a7b.js';
import { I } from '../../../chunks/index-b96ef414.js';
import '../../../chunks/index.svelte_svelte&type=style&lang-ca8b6e23.js';
function j(s) {
	let a, e, j, k, w, E, N;
	return (
		(a = new I({})),
		{
			c() {
				t(a.$$.fragment),
					(e = n()),
					(j = n()),
					(k = o('section')),
					(w = o('h1')),
					(E = r('Il Novecento')),
					this.h();
			},
			l(s) {
				c(a.$$.fragment, s), (e = l(s)), (j = l(s)), (k = h(s, 'SECTION', { class: !0 }));
				var t = f(k);
				w = h(t, 'H1', { class: !0 });
				var n = f(w);
				(E = i(n, 'Il Novecento')), n.forEach(m), t.forEach(m), this.h();
			},
			h() {
				v(w, 'class', 'svelte-1bgohwt'), v(k, 'class', 'svelte-1bgohwt');
			},
			m(s, t) {
				u(a, s, t), d(s, e, t), d(s, j, t), d(s, k, t), g(k, w), g(w, E), (N = !0);
			},
			p: p,
			i(s) {
				N || ($(a.$$.fragment, s), (N = !0));
			},
			o(s) {
				b(a.$$.fragment, s), (N = !1);
			},
			d(s) {
				x(a, s), s && m(e), s && m(j), s && m(k);
			}
		}
	);
}
const k = !0;
export default class extends s {
	constructor(s) {
		super(), a(this, s, null, j, e, {});
	}
}
export { k as prerender };
