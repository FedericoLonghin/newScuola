import {
	S as a,
	i as e,
	s as t,
	e as l,
	t as n,
	k as o,
	c as s,
	a as r,
	g as i,
	d as c,
	n as u,
	b as d,
	f as h,
	H as m,
	h as f,
	l as v,
	I as g,
	V as p
} from './vendor-7a4d6a7b.js';
function I(a, e, t) {
	const l = a.slice();
	return (l[1] = e[t]), l;
}
function D(a) {
	let e,
		t,
		o = a[1].date + '';
	return {
		c() {
			(e = l('div')), (t = n(o)), this.h();
		},
		l(a) {
			e = s(a, 'DIV', { class: !0 });
			var l = r(e);
			(t = i(l, o)), l.forEach(c), this.h();
		},
		h() {
			d(e, 'class', 'indice-elem-data');
		},
		m(a, l) {
			h(a, e, l), m(e, t);
		},
		p(a, e) {
			1 & e && o !== (o = a[1].date + '') && f(t, o);
		},
		d(a) {
			a && c(e);
		}
	};
}
function S(a) {
	let e,
		t,
		v,
		g,
		p,
		I,
		S,
		j,
		E = a[1].name + '',
		V = 'noDate' !== a[1].date && D(a);
	return {
		c() {
			(e = l('div')),
				(t = l('div')),
				(v = l('a')),
				(g = n('- ')),
				(p = n(E)),
				(S = o()),
				V && V.c(),
				(j = o()),
				this.h();
		},
		l(a) {
			e = s(a, 'DIV', { class: !0 });
			var l = r(e);
			t = s(l, 'DIV', {});
			var n = r(t);
			v = s(n, 'A', { href: !0 });
			var o = r(v);
			(g = i(o, '- ')),
				(p = i(o, E)),
				o.forEach(c),
				n.forEach(c),
				(S = u(l)),
				V && V.l(l),
				(j = u(l)),
				l.forEach(c),
				this.h();
		},
		h() {
			d(v, 'href', (I = a[1].url)), d(e, 'class', 'indice-elem inline');
		},
		m(a, l) {
			h(a, e, l), m(e, t), m(t, v), m(v, g), m(v, p), m(e, S), V && V.m(e, null), m(e, j);
		},
		p(a, t) {
			1 & t && E !== (E = a[1].name + '') && f(p, E),
				1 & t && I !== (I = a[1].url) && d(v, 'href', I),
				'noDate' !== a[1].date
					? V
						? V.p(a, t)
						: ((V = D(a)), V.c(), V.m(e, j))
					: V && (V.d(1), (V = null));
		},
		d(a) {
			a && c(e), V && V.d();
		}
	};
}
function j(a) {
	let e,
		t = a[0],
		l = [];
	for (let n = 0; n < t.length; n += 1) l[n] = S(I(a, t, n));
	return {
		c() {
			for (let a = 0; a < l.length; a += 1) l[a].c();
			e = v();
		},
		l(a) {
			for (let e = 0; e < l.length; e += 1) l[e].l(a);
			e = v();
		},
		m(a, t) {
			for (let e = 0; e < l.length; e += 1) l[e].m(a, t);
			h(a, e, t);
		},
		p(a, [n]) {
			if (1 & n) {
				let o;
				for (t = a[0], o = 0; o < t.length; o += 1) {
					const s = I(a, t, o);
					l[o] ? l[o].p(s, n) : ((l[o] = S(s)), l[o].c(), l[o].m(e.parentNode, e));
				}
				for (; o < l.length; o += 1) l[o].d(1);
				l.length = t.length;
			}
		},
		i: g,
		o: g,
		d(a) {
			p(l, a), a && c(e);
		}
	};
}
function E(a, e, t) {
	let { json: l = [{ name: '', date: '', url: '', slaves: '' }] } = e;
	return (
		console.log(l[0].url),
		(a.$$set = (a) => {
			'json' in a && t(0, (l = a.json));
		}),
		[l]
	);
}
class V extends a {
	constructor(a) {
		super(), e(this, a, E, j, t, { json: 0 });
	}
}
const b = [
	{
		name: 'Storia',
		date: 'noDate',
		url: 'scuola/Storia',
		slaves: [
			{ name: 'Il novecento', date: '07/11/2021', url: '/scuola/Storia/Il-Novecento' },
			{
				name: 'Prima guerra mondiale',
				date: '07/11/2021',
				url: '/scuola/Storia/Prima-guerra-mondiale'
			},
			{
				name: "La visione dell'uomo nel positivismo",
				date: '07/11/2021',
				url: '/scuola/Storia/La-visione-dell-uomo-nel-positivo'
			}
		]
	},
	{ name: 'Italiano', url: 'scuola/Italiano', date: 'noDate' }
];
export { V as R, b as p };
