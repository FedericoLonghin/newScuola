import {
	S as o,
	i as n,
	s as a,
	k as s,
	e,
	t as i,
	O as t,
	d as c,
	n as r,
	c as h,
	a as l,
	g as u,
	b as d,
	f,
	H as v,
	I as m
} from '../chunks/vendor-7a4d6a7b.js';
function p(o) {
	let n, a, p, z, g, q, E, b, H, x;
	return {
		c() {
			(n = s()),
				(a = e('section')),
				(p = e('h1')),
				(z = i('Benvenuto nel nuovino sitino')),
				(g = s()),
				(q = e('h2')),
				(E = i('Chissà se funziona... bah')),
				(b = s()),
				(H = e('h2')),
				(x = i(
					'Ah, questo sito è ancora in sviluppo, quindi ci sta che qualcosa faccia schifo/non funzioni...\n\t\t(in realtà è solo una scusa per non poter giudicare le monnezze che non ho voglia di sistemare(in\n\t\trealtà(si, di nuovo) dico che non è che non ho voglia di farlo, ma non me ne accorgo/non so\n\t\tfarlo... umiltà ragazzi... sempre))'
				)),
				this.h();
		},
		l(o) {
			t('[data-svelte="svelte-1anpopb"]', document.head).forEach(c),
				(n = r(o)),
				(a = h(o, 'SECTION', {}));
			var s = l(a);
			p = h(s, 'H1', { class: !0 });
			var e = l(p);
			(z = u(e, 'Benvenuto nel nuovino sitino')), e.forEach(c), (g = r(s)), (q = h(s, 'H2', {}));
			var i = l(q);
			(E = u(i, 'Chissà se funziona... bah')), i.forEach(c), (b = r(s)), (H = h(s, 'H2', {}));
			var d = l(H);
			(x = u(
				d,
				'Ah, questo sito è ancora in sviluppo, quindi ci sta che qualcosa faccia schifo/non funzioni...\n\t\t(in realtà è solo una scusa per non poter giudicare le monnezze che non ho voglia di sistemare(in\n\t\trealtà(si, di nuovo) dico che non è che non ho voglia di farlo, ma non me ne accorgo/non so\n\t\tfarlo... umiltà ragazzi... sempre))'
			)),
				d.forEach(c),
				s.forEach(c),
				this.h();
		},
		h() {
			(document.title = 'Home'), d(p, 'class', 'svelte-1yo0drd');
		},
		m(o, s) {
			f(o, n, s),
				f(o, a, s),
				v(a, p),
				v(p, z),
				v(a, g),
				v(a, q),
				v(q, E),
				v(a, b),
				v(a, H),
				v(H, x);
		},
		p: m,
		i: m,
		o: m,
		d(o) {
			o && c(n), o && c(a);
		}
	};
}
const z = !0;
export default class extends o {
	constructor(o) {
		super(), n(this, o, null, p, a, {});
	}
}
export { z as prerender };
