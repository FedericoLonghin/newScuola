import {
	S as t,
	i as s,
	s as e,
	U as n,
	k as a,
	j as r,
	O as i,
	d as o,
	n as h,
	m as d,
	f as m,
	o as c,
	I as f,
	v as l,
	r as u,
	w as $
} from '../../chunks/vendor-df74d1be.js';
import { I as p } from '../../chunks/index-a03e767c.js';
import '../../chunks/index.svelte_svelte&type=style&lang-e0661adb.js';
function g(t) {
	let s, e, g, b, v;
	return (
		(e = new p({})),
		(b = new n({ props: { source: t[0] } })),
		{
			c() {
				(s = a()), r(e.$$.fragment), (g = a()), r(b.$$.fragment), this.h();
			},
			l(t) {
				i('[data-svelte="svelte-1anpopb"]', document.head).forEach(o),
					(s = h(t)),
					d(e.$$.fragment, t),
					(g = h(t)),
					d(b.$$.fragment, t),
					this.h();
			},
			h() {
				document.title = 'Home';
			},
			m(t, n) {
				m(t, s, n), c(e, t, n), m(t, g, n), c(b, t, n), (v = !0);
			},
			p: f,
			i(t) {
				v || (l(e.$$.fragment, t), l(b.$$.fragment, t), (v = !0));
			},
			o(t) {
				u(e.$$.fragment, t), u(b.$$.fragment, t), (v = !1);
			},
			d(t) {
				t && o(s), $(e, t), t && o(g), $(b, t);
			}
		}
	);
}
const b = !0;
function v(t) {
	return [
		'\n\t# This is a header\n\t\n\tThis is a paragraph.\n\t\n\t* This is a list\n\t* With two items\n\t1. And a sublist\n\t2. That is ordered\n\t* With another\n\t* Sublist inside\n\t\n\t| And this is | A table |\n\t|-------------|---------|\n\t| With two    | columns |'
	];
}
export default class extends t {
	constructor(t) {
		super(), s(this, t, v, g, e, {});
	}
}
export { b as prerender };
