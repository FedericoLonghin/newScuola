import {
	S as a,
	i as e,
	s,
	e as t,
	t as r,
	c,
	a as n,
	g as i,
	d as l,
	b as h,
	f as d,
	G as o,
	h as p,
	k as m,
	n as f,
	H as u
} from './vendor-c12218c7.js';
function g(a) {
	let e, s;
	return {
		c() {
			(e = t('div')), (s = r(a[1])), this.h();
		},
		l(t) {
			e = c(t, 'DIV', { class: !0 });
			var r = n(e);
			(s = i(r, a[1])), r.forEach(l), this.h();
		},
		h() {
			h(e, 'class', 'indice-elem-data');
		},
		m(a, t) {
			d(a, e, t), o(e, s);
		},
		p(a, e) {
			2 & e && p(s, a[1]);
		},
		d(a) {
			a && l(e);
		}
	};
}
function v(a) {
	let e,
		s,
		v,
		D,
		E,
		I,
		L = 'noDate' !== a[1] && g(a);
	return {
		c() {
			(e = t('div')),
				(s = t('div')),
				(v = t('a')),
				(D = r('- ')),
				(E = r(a[0])),
				(I = m()),
				L && L.c(),
				this.h();
		},
		l(t) {
			e = c(t, 'DIV', { class: !0 });
			var r = n(e);
			s = c(r, 'DIV', {});
			var h = n(s);
			v = c(h, 'A', { href: !0 });
			var d = n(v);
			(D = i(d, '- ')),
				(E = i(d, a[0])),
				d.forEach(l),
				h.forEach(l),
				(I = f(r)),
				L && L.l(r),
				r.forEach(l),
				this.h();
		},
		h() {
			h(v, 'href', a[2]), h(e, 'class', 'indice-elem inline');
		},
		m(a, t) {
			d(a, e, t), o(e, s), o(s, v), o(v, D), o(v, E), o(e, I), L && L.m(e, null);
		},
		p(a, [s]) {
			1 & s && p(E, a[0]),
				'noDate' !== a[1]
					? L
						? L.p(a, s)
						: ((L = g(a)), L.c(), L.m(e, null))
					: L && (L.d(1), (L = null));
		},
		i: u,
		o: u,
		d(a) {
			a && l(e), L && L.d();
		}
	};
}
function D(a, e, s) {
	let { pageURL: t } = e,
		{ pageName: r = '' } = e,
		{ date: c } = e;
	var n = t + '/' + r.replace(' ', '-').replace("'", '-');
	return (
		(a.$$set = (a) => {
			'pageURL' in a && s(3, (t = a.pageURL)),
				'pageName' in a && s(0, (r = a.pageName)),
				'date' in a && s(1, (c = a.date));
		}),
		[r, c, n, t]
	);
}
class E extends a {
	constructor(a) {
		super(), e(this, a, D, v, s, { pageURL: 3, pageName: 0, date: 1 });
	}
}
export { E as I };