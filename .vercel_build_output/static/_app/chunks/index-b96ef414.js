import {
	S as s,
	i as a,
	s as e,
	e as t,
	t as l,
	k as r,
	c,
	a as i,
	g as o,
	d as n,
	n as v,
	b as d,
	G as h,
	F as f,
	f as p,
	H as u,
	I as g,
	J as m
} from './vendor-7a4d6a7b.js';
import { p as x } from './index.svelte_svelte&type=style&lang-ca8b6e23.js';
function I(s) {
	let a, e, m, x, I, b, E, y;
	return {
		c() {
			(a = t('div')),
				(e = t('div')),
				(m = t('a')),
				(x = l(s[0])),
				(I = r()),
				(b = t('div')),
				(E = l('/')),
				(y = l(s[1])),
				this.h();
		},
		l(t) {
			a = c(t, 'DIV', { id: !0, class: !0 });
			var l = i(a);
			e = c(l, 'DIV', { class: !0 });
			var r = i(e);
			m = c(r, 'A', { href: !0 });
			var d = i(m);
			(x = o(d, s[0])),
				d.forEach(n),
				r.forEach(n),
				(I = v(l)),
				(b = c(l, 'DIV', { style: !0, class: !0 }));
			var h = i(b);
			(E = o(h, '/')), (y = o(h, s[1])), h.forEach(n), l.forEach(n), this.h();
		},
		h() {
			d(m, 'href', '/scuola/' + s[0]),
				d(e, 'class', 'svelte-lu9gcz'),
				h(b, 'margin-left', '10px'),
				h(b, 'color', 'var(--heading-color)'),
				d(b, 'class', 'svelte-lu9gcz'),
				f(b, 'hidden', void 0 === s[1]),
				d(a, 'id', 'title-box'),
				d(a, 'class', 'inline svelte-lu9gcz');
		},
		m(s, t) {
			p(s, a, t), u(a, e), u(e, m), u(m, x), u(a, I), u(a, b), u(b, E), u(b, y);
		},
		p: g,
		i: g,
		o: g,
		d(s) {
			s && n(a);
		}
	};
}
function b(s, a, e) {
	let t;
	m(s, x, (s) => e(2, (t = s)));
	var l = t.path.split('/');
	return [l[2], l[3]];
}
class E extends s {
	constructor(s) {
		super(), a(this, s, b, I, e, {});
	}
}
export { E as I };
