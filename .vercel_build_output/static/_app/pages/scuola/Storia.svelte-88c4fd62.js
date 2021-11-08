import {
	S as s,
	i as a,
	s as e,
	k as t,
	j as n,
	e as r,
	O as o,
	d as c,
	n as m,
	m as d,
	c as f,
	a as l,
	f as $,
	o as i,
	I as u,
	v as h,
	r as p,
	w as g
} from '../../chunks/vendor-df74d1be.js';
import { I as v } from '../../chunks/index-a03e767c.js';
import { R as j, p as k } from '../../chunks/jason-f2a0d3d0.js';
import '../../chunks/index.svelte_svelte&type=style&lang-e0661adb.js';
function x(s) {
	let a, e, x, w, E, I;
	return (
		(e = new v({})),
		(E = new j({ props: { json: k[0].slaves } })),
		{
			c() {
				(a = t()), n(e.$$.fragment), (x = t()), (w = r('section')), n(E.$$.fragment), this.h();
			},
			l(s) {
				o('[data-svelte="svelte-ddcvn1"]', document.head).forEach(c),
					(a = m(s)),
					d(e.$$.fragment, s),
					(x = m(s)),
					(w = f(s, 'SECTION', {}));
				var t = l(w);
				d(E.$$.fragment, t), t.forEach(c), this.h();
			},
			h() {
				document.title = 'Scuola';
			},
			m(s, t) {
				$(s, a, t), i(e, s, t), $(s, x, t), $(s, w, t), i(E, w, null), (I = !0);
			},
			p: u,
			i(s) {
				I || (h(e.$$.fragment, s), h(E.$$.fragment, s), (I = !0));
			},
			o(s) {
				p(e.$$.fragment, s), p(E.$$.fragment, s), (I = !1);
			},
			d(s) {
				s && c(a), g(e, s), s && c(x), s && c(w), g(E);
			}
		}
	);
}
const w = !0;
export default class extends s {
	constructor(s) {
		super(), a(this, s, null, x, e, {});
	}
}
export { w as prerender };
