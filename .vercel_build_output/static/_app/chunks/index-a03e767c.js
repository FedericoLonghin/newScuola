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
	d,
	n,
	b as v,
	G as h,
	F as f,
	f as p,
	H as u,
	I as g,
	J as m
} from './vendor-df74d1be.js';
import { p as x } from './index.svelte_svelte&type=style&lang-e0661adb.js';
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
			var v = i(m);
			(x = o(v, s[0])),
				v.forEach(d),
				r.forEach(d),
				(I = n(l)),
				(b = c(l, 'DIV', { style: !0, class: !0 }));
			var h = i(b);
			(E = o(h, '/')), (y = o(h, s[1])), h.forEach(d), l.forEach(d), this.h();
		},
		h() {
			v(m, 'href', '/scuola/' + s[0]),
				v(e, 'class', 'svelte-lu9gcz'),
				h(b, 'margin-left', '10px'),
				h(b, 'color', 'var(--heading-color)'),
				v(b, 'class', 'svelte-lu9gcz'),
				f(b, 'hidden', void 0 === s[1]),
				v(a, 'id', 'title-box'),
				v(a, 'class', 'inline svelte-lu9gcz');
		},
		m(s, t) {
			p(s, a, t), u(a, e), u(e, m), u(m, x), u(a, I), u(a, b), u(b, E), u(b, y);
		},
		p: g,
		i: g,
		o: g,
		d(s) {
			s && d(a);
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
