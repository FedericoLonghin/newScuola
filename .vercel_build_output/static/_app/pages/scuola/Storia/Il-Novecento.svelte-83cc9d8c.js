import {
	S as s,
	i as a,
	s as t,
	j as e,
	k as o,
	e as n,
	t as r,
	m as c,
	n as l,
	c as h,
	a as f,
	g as i,
	d as m,
	b as u,
	o as v,
	f as p,
	G as g,
	H as $,
	v as d,
	r as j,
	w as k
} from '../../../chunks/vendor-c12218c7.js';
import { I as x } from '../../../chunks/index-94375af2.js';
import '../../../chunks/stores-52090410.js';
/* empty css                                                          */ function w(s) {
	let a, t, w, I, b, E, N;
	return (
		(a = new x({})),
		{
			c() {
				e(a.$$.fragment),
					(t = o()),
					(w = o()),
					(I = n('section')),
					(b = n('h1')),
					(E = r('Il Novecento')),
					this.h();
			},
			l(s) {
				c(a.$$.fragment, s), (t = l(s)), (w = l(s)), (I = h(s, 'SECTION', { class: !0 }));
				var e = f(I);
				b = h(e, 'H1', { class: !0 });
				var o = f(b);
				(E = i(o, 'Il Novecento')), o.forEach(m), e.forEach(m), this.h();
			},
			h() {
				u(b, 'class', 'svelte-1bgohwt'), u(I, 'class', 'svelte-1bgohwt');
			},
			m(s, e) {
				v(a, s, e), p(s, t, e), p(s, w, e), p(s, I, e), g(I, b), g(b, E), (N = !0);
			},
			p: $,
			i(s) {
				N || (d(a.$$.fragment, s), (N = !0));
			},
			o(s) {
				j(a.$$.fragment, s), (N = !1);
			},
			d(s) {
				k(a, s), s && m(t), s && m(w), s && m(I);
			}
		}
	);
}
const I = !0;
export default class extends s {
	constructor(s) {
		super(), a(this, s, null, w, t, {});
	}
}
export { I as prerender };