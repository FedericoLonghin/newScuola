import {
	U as s,
	S as e,
	i as a,
	s as t,
	j as n,
	k as o,
	e as r,
	m as c,
	n as l,
	O as i,
	d as h,
	c as m,
	a as f,
	b as u,
	o as d,
	f as p,
	H as v,
	v as $,
	r as g,
	w as j
} from '../../chunks/vendor-c12218c7.js';
import { I as k } from '../../chunks/index-94375af2.js';
import '../../chunks/stores-52090410.js';
/* empty css                                                       */ function x(e) {
	let a,
		t,
		x,
		E,
		H,
		_ = s(y) + '';
	return (
		(a = new k({})),
		{
			c() {
				n(a.$$.fragment), (t = o()), (x = o()), (E = r('section')), this.h();
			},
			l(s) {
				c(a.$$.fragment, s), (t = l(s));
				i('[data-svelte="svelte-1anpopb"]', document.head).forEach(h),
					(x = l(s)),
					(E = m(s, 'SECTION', { class: !0 })),
					f(E).forEach(h),
					this.h();
			},
			h() {
				(document.title = 'Home'), u(E, 'class', 'svelte-1jlhe5t');
			},
			m(s, e) {
				d(a, s, e), p(s, t, e), p(s, x, e), p(s, E, e), (E.innerHTML = _), (H = !0);
			},
			p: v,
			i(s) {
				H || ($(a.$$.fragment, s), (H = !0));
			},
			o(s) {
				g(a.$$.fragment, s), (H = !1);
			},
			d(s) {
				j(a, s), s && h(t), s && h(x), s && h(E);
			}
		}
	);
}
let y = '_this_ is very very is **easy** to ``use``.',
	E = s(y);
console.log(E);
const H = !0;
export default class extends e {
	constructor(s) {
		super(), a(this, s, null, x, t, {});
	}
}
export { H as prerender };
