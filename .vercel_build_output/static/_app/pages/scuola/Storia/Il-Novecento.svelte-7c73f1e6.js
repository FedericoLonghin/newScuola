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
	b as d,
	o as v,
	f as u,
	H as g,
	I as p,
	v as $,
	r as b,
	w as x
} from '../../../chunks/vendor-df74d1be.js';
import { I } from '../../../chunks/index-a03e767c.js';
import '../../../chunks/index.svelte_svelte&type=style&lang-e0661adb.js';
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
				d(w, 'class', 'svelte-1bgohwt'), d(k, 'class', 'svelte-1bgohwt');
			},
			m(s, t) {
				v(a, s, t), u(s, e, t), u(s, j, t), u(s, k, t), g(k, w), g(w, E), (N = !0);
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
