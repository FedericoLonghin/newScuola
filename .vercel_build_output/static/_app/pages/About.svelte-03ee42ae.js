import {
	S as t,
	i as s,
	s as e,
	k as a,
	e as i,
	t as o,
	O as l,
	d as n,
	n as r,
	c as u,
	a as c,
	g as h,
	b as p,
	f as d,
	H as f,
	I as v
} from '../chunks/vendor-7a4d6a7b.js';
function m(t) {
	let s, e, m, b, g, E, S, k, z;
	return {
		c() {
			(s = a()),
				(e = i('div')),
				(m = i('h1')),
				(b = o('About')),
				(g = a()),
				(E = i('p')),
				(S = o(
					"Questo sito è stato sviluppato tramite l'utilizzo di Sveltkit. È completamente Open Source,\n\t\ttutti i sorgenti disponibili sulla "
				)),
				(k = i('a')),
				(z = o('Repo GitHub')),
				this.h();
		},
		l(t) {
			l('[data-svelte="svelte-1ine71f"]', document.head).forEach(n),
				(s = r(t)),
				(e = u(t, 'DIV', { class: !0 }));
			var a = c(e);
			m = u(a, 'H1', {});
			var i = c(m);
			(b = h(i, 'About')), i.forEach(n), (g = r(a)), (E = u(a, 'P', {}));
			var o = c(E);
			(S = h(
				o,
				"Questo sito è stato sviluppato tramite l'utilizzo di Sveltkit. È completamente Open Source,\n\t\ttutti i sorgenti disponibili sulla "
			)),
				(k = u(o, 'A', { href: !0 }));
			var p = c(k);
			(z = h(p, 'Repo GitHub')), p.forEach(n), o.forEach(n), a.forEach(n), this.h();
		},
		h() {
			(document.title = 'About'),
				p(k, 'href', 'https://github.com/FedericoLonghin/newWebsite'),
				p(e, 'class', 'content svelte-cf77e8');
		},
		m(t, a) {
			d(t, s, a), d(t, e, a), f(e, m), f(m, b), f(e, g), f(e, E), f(E, S), f(E, k), f(k, z);
		},
		p: v,
		i: v,
		o: v,
		d(t) {
			t && n(s), t && n(e);
		}
	};
}
const b = !1,
	g = !0,
	E = !0;
export default class extends t {
	constructor(t) {
		super(), s(this, t, null, m, e, {});
	}
}
export { b as hydrate, E as prerender, g as router };
