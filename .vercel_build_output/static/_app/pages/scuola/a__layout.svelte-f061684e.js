import {
	S as s,
	i as e,
	s as t,
	j as a,
	m as n,
	o as r,
	H as o,
	v as c,
	r as m,
	w as f
} from '../../chunks/vendor-c12218c7.js';
import { I as i } from '../../chunks/index-94375af2.js';
import '../../chunks/stores-52090410.js';
/* empty css                                                       */ function l(s) {
	let e, t;
	return (
		(e = new i({})),
		{
			c() {
				a(e.$$.fragment);
			},
			l(s) {
				n(e.$$.fragment, s);
			},
			m(s, a) {
				r(e, s, a), (t = !0);
			},
			p: o,
			i(s) {
				t || (c(e.$$.fragment, s), (t = !0));
			},
			o(s) {
				m(e.$$.fragment, s), (t = !1);
			},
			d(s) {
				f(e, s);
			}
		}
	);
}
export default class extends s {
	constructor(s) {
		super(), e(this, s, null, l, t, {});
	}
}
