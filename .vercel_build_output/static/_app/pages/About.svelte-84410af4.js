import {
	S as t,
	i as s,
	s as e,
	k as a,
	e as o,
	t as i,
	O as n,
	d as r,
	n as c,
	c as l,
	a as u,
	g as h,
	b as p,
	f as d,
	G as f,
	H as m
} from '../chunks/vendor-c12218c7.js';
import { d as v, b } from '../chunks/env-a13806e5.js';
function g(t) {
	let s, e, v, b, g, k, E, S, z;
	return {
		c() {
			(s = a()),
				(e = o('div')),
				(v = o('h1')),
				(b = i('About')),
				(g = a()),
				(k = o('p')),
				(E = i(
					"Questo sito è stato sviluppato tramite l'utilizzo di Sveltkit. È completamente Open Source,\n\t\ttutti i sorgenti disponibili sulla "
				)),
				(S = o('a')),
				(z = i('Repo GitHub')),
				this.h();
		},
		l(t) {
			n('[data-svelte="svelte-1ine71f"]', document.head).forEach(r),
				(s = c(t)),
				(e = l(t, 'DIV', { class: !0 }));
			var a = u(e);
			v = l(a, 'H1', {});
			var o = u(v);
			(b = h(o, 'About')), o.forEach(r), (g = c(a)), (k = l(a, 'P', {}));
			var i = u(k);
			(E = h(
				i,
				"Questo sito è stato sviluppato tramite l'utilizzo di Sveltkit. È completamente Open Source,\n\t\ttutti i sorgenti disponibili sulla "
			)),
				(S = l(i, 'A', { href: !0 }));
			var p = u(S);
			(z = h(p, 'Repo GitHub')), p.forEach(r), i.forEach(r), a.forEach(r), this.h();
		},
		h() {
			(document.title = 'About'),
				p(S, 'href', 'https://github.com/FedericoLonghin/newWebsite'),
				p(e, 'class', 'content svelte-cf77e8');
		},
		m(t, a) {
			d(t, s, a), d(t, e, a), f(e, v), f(v, b), f(e, g), f(e, k), f(k, E), f(k, S), f(S, z);
		},
		p: m,
		i: m,
		o: m,
		d(t) {
			t && r(s), t && r(e);
		}
	};
}
const k = v,
	E = b,
	S = !0;
export default class extends t {
	constructor(t) {
		super(), s(this, t, null, g, e, {});
	}
}
export { k as hydrate, S as prerender, E as router };
