import {
	U as s,
	S as e,
	i as a,
	s as t,
	j as n,
	k as o,
	e as r,
	m as l,
	n as c,
	O as i,
	d as h,
	c as m,
	a as d,
	b as f,
	o as u,
	f as p,
	I as v,
	v as $,
	r as g,
	w as b
} from '../../chunks/vendor-7a4d6a7b.js';
import { I as j } from '../../chunks/index-b96ef414.js';
import '../../chunks/index.svelte_svelte&type=style&lang-ca8b6e23.js';
function x(e) {
	let a,
		t,
		x,
		k,
		E,
		I = s(y) + '';
	return (
		(a = new j({})),
		{
			c() {
				n(a.$$.fragment), (t = o()), (x = o()), (k = r('section')), this.h();
			},
			l(s) {
				l(a.$$.fragment, s), (t = c(s));
				i('[data-svelte="svelte-1anpopb"]', document.head).forEach(h),
					(x = c(s)),
					(k = m(s, 'SECTION', { class: !0 })),
					d(k).forEach(h),
					this.h();
			},
			h() {
				(document.title = 'Home'), f(k, 'class', 'svelte-1jlhe5t');
			},
			m(s, e) {
				u(a, s, e), p(s, t, e), p(s, x, e), p(s, k, e), (k.innerHTML = I), (E = !0);
			},
			p: v,
			i(s) {
				E || ($(a.$$.fragment, s), (E = !0));
			},
			o(s) {
				g(a.$$.fragment, s), (E = !1);
			},
			d(s) {
				b(a, s), s && h(t), s && h(x), s && h(k);
			}
		}
	);
}
let y = '_this_ is very very is **easy** to ``use``.',
	k = s(y);
console.log(k);
const E = !0;
export default class extends e {
	constructor(s) {
		super(), a(this, s, null, x, t, {});
	}
}
export { E as prerender };
