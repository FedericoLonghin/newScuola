import {
	S as s,
	i as a,
	s as e,
	e as t,
	t as r,
	k as o,
	c as l,
	a as i,
	g as c,
	d as n,
	n as v,
	b as h,
	K as d,
	F as f,
	f as p,
	G as m,
	H as u,
	I as x
} from './vendor-c12218c7.js';
import { p as I } from './stores-52090410.js';
/* empty css                                            */ function g(s) {
	let a, e, x, I, g, E, j, q;
	return {
		c() {
			(a = t('div')),
				(e = t('div')),
				(x = t('a')),
				(I = r(s[0])),
				(g = o()),
				(E = t('div')),
				(j = r('/')),
				(q = r(s[1])),
				this.h();
		},
		l(t) {
			a = l(t, 'DIV', { id: !0, class: !0 });
			var r = i(a);
			e = l(r, 'DIV', { class: !0 });
			var o = i(e);
			x = l(o, 'A', { href: !0 });
			var h = i(x);
			(I = c(h, s[0])),
				h.forEach(n),
				o.forEach(n),
				(g = v(r)),
				(E = l(r, 'DIV', { style: !0, class: !0 }));
			var d = i(E);
			(j = c(d, '/')), (q = c(d, s[1])), d.forEach(n), r.forEach(n), this.h();
		},
		h() {
			h(x, 'href', '/scuola/' + s[0]),
				h(e, 'class', 'svelte-2oaaq3'),
				d(E, 'margin-left', '10px'),
				d(E, 'color', 'var(--heading-color)'),
				h(E, 'class', 'svelte-2oaaq3'),
				f(E, 'hidden', void 0 === s[1]),
				h(a, 'id', 'title-box'),
				h(a, 'class', 'inline svelte-2oaaq3');
		},
		m(s, t) {
			p(s, a, t), m(a, e), m(e, x), m(x, I), m(a, g), m(a, E), m(E, j), m(E, q);
		},
		p: u,
		i: u,
		o: u,
		d(s) {
			s && n(a);
		}
	};
}
function E(s, a, e) {
	let t;
	x(s, I, (s) => e(2, (t = s)));
	var r = t.path.split('/');
	return [r[2], r[3]];
}
class j extends s {
	constructor(s) {
		super(), a(this, s, E, g, e, {});
	}
}
export { j as I };
