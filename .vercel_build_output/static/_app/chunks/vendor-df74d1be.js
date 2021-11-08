var e = Object.defineProperty,
	t = Object.getOwnPropertySymbols,
	n = Object.prototype.hasOwnProperty,
	r = Object.prototype.propertyIsEnumerable,
	s = (t, n, r) =>
		n in t ? e(t, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[n] = r),
	l = (e, l) => {
		for (var i in l || (l = {})) n.call(l, i) && s(e, i, l[i]);
		if (t) for (var i of t(l)) r.call(l, i) && s(e, i, l[i]);
		return e;
	};
function i() {}
function o(e, t) {
	for (const n in t) e[n] = t[n];
	return e;
}
function a(e) {
	return e();
}
function c() {
	return Object.create(null);
}
function u(e) {
	e.forEach(a);
}
function h(e) {
	return 'function' == typeof e;
}
function f(e, t) {
	return e != e ? t == t : e !== t || (e && 'object' == typeof e) || 'function' == typeof e;
}
let p;
function d(e, t) {
	return p || (p = document.createElement('a')), (p.href = t), e === p.href;
}
function g(e, t, n) {
	e.$$.on_destroy.push(
		(function (e, ...t) {
			if (null == e) return i;
			const n = e.subscribe(...t);
			return n.unsubscribe ? () => n.unsubscribe() : n;
		})(t, n)
	);
}
function m(e, t, n, r) {
	if (e) {
		const s = $(e, t, n, r);
		return e[0](s);
	}
}
function $(e, t, n, r) {
	return e[1] && r ? o(n.ctx.slice(), e[1](r(t))) : n.ctx;
}
function k(e, t, n, r) {
	if (e[2] && r) {
		const s = e[2](r(n));
		if (void 0 === t.dirty) return s;
		if ('object' == typeof s) {
			const e = [],
				n = Math.max(t.dirty.length, s.length);
			for (let r = 0; r < n; r += 1) e[r] = t.dirty[r] | s[r];
			return e;
		}
		return t.dirty | s;
	}
	return t.dirty;
}
function x(e, t, n, r, s, l) {
	if (s) {
		const i = $(t, n, r, l);
		e.p(i, s);
	}
}
function b(e) {
	if (e.ctx.length > 32) {
		const t = [],
			n = e.ctx.length / 32;
		for (let e = 0; e < n; e++) t[e] = -1;
		return t;
	}
	return -1;
}
function w(e, t) {
	const n = {};
	t = new Set(t);
	for (const r in e) t.has(r) || '$' === r[0] || (n[r] = e[r]);
	return n;
}
let y,
	v = !1;
function S(e, t, n, r) {
	for (; e < t; ) {
		const s = e + ((t - e) >> 1);
		n(s) <= r ? (e = s + 1) : (t = s);
	}
	return e;
}
function z(e, t) {
	if (v) {
		for (
			!(function (e) {
				if (e.hydrate_init) return;
				e.hydrate_init = !0;
				let t = e.childNodes;
				if ('HEAD' === e.nodeName) {
					const e = [];
					for (let n = 0; n < t.length; n++) {
						const r = t[n];
						void 0 !== r.claim_order && e.push(r);
					}
					t = e;
				}
				const n = new Int32Array(t.length + 1),
					r = new Int32Array(t.length);
				n[0] = -1;
				let s = 0;
				for (let a = 0; a < t.length; a++) {
					const e = t[a].claim_order,
						l =
							(s > 0 && t[n[s]].claim_order <= e ? s + 1 : S(1, s, (e) => t[n[e]].claim_order, e)) -
							1;
					r[a] = n[l] + 1;
					const i = l + 1;
					(n[i] = a), (s = Math.max(i, s));
				}
				const l = [],
					i = [];
				let o = t.length - 1;
				for (let a = n[s] + 1; 0 != a; a = r[a - 1]) {
					for (l.push(t[a - 1]); o >= a; o--) i.push(t[o]);
					o--;
				}
				for (; o >= 0; o--) i.push(t[o]);
				l.reverse(), i.sort((e, t) => e.claim_order - t.claim_order);
				for (let a = 0, c = 0; a < i.length; a++) {
					for (; c < l.length && i[a].claim_order >= l[c].claim_order; ) c++;
					const t = c < l.length ? l[c] : null;
					e.insertBefore(i[a], t);
				}
			})(e),
				(void 0 === e.actual_end_child ||
					(null !== e.actual_end_child && e.actual_end_child.parentElement !== e)) &&
					(e.actual_end_child = e.firstChild);
			null !== e.actual_end_child && void 0 === e.actual_end_child.claim_order;

		)
			e.actual_end_child = e.actual_end_child.nextSibling;
		t !== e.actual_end_child
			? (void 0 === t.claim_order && t.parentNode === e) || e.insertBefore(t, e.actual_end_child)
			: (e.actual_end_child = t.nextSibling);
	} else (t.parentNode === e && null === t.nextSibling) || e.appendChild(t);
}
function E(e, t, n) {
	e.insertBefore(t, n || null);
}
function T(e, t, n) {
	v && !n ? z(e, t) : (t.parentNode === e && t.nextSibling == n) || e.insertBefore(t, n || null);
}
function A(e) {
	e.parentNode.removeChild(e);
}
function I(e, t) {
	for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
}
function R(e) {
	return document.createElement(e);
}
function N(e) {
	return document.createElementNS('http://www.w3.org/2000/svg', e);
}
function L(e) {
	return document.createTextNode(e);
}
function P() {
	return L(' ');
}
function O() {
	return L('');
}
function j(e, t, n, r) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
function C(e, t, n) {
	null == n ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function D(e) {
	return Array.from(e.childNodes);
}
function q(e) {
	void 0 === e.claim_info && (e.claim_info = { last_index: 0, total_claimed: 0 });
}
function U(e, t, n, r, s = !1) {
	q(e);
	const l = (() => {
		for (let r = e.claim_info.last_index; r < e.length; r++) {
			const l = e[r];
			if (t(l)) {
				const t = n(l);
				return void 0 === t ? e.splice(r, 1) : (e[r] = t), s || (e.claim_info.last_index = r), l;
			}
		}
		for (let r = e.claim_info.last_index - 1; r >= 0; r--) {
			const l = e[r];
			if (t(l)) {
				const t = n(l);
				return (
					void 0 === t ? e.splice(r, 1) : (e[r] = t),
					s ? void 0 === t && e.claim_info.last_index-- : (e.claim_info.last_index = r),
					l
				);
			}
		}
		return r();
	})();
	return (l.claim_order = e.claim_info.total_claimed), (e.claim_info.total_claimed += 1), l;
}
function B(e, t, n, r) {
	return U(
		e,
		(e) => e.nodeName === t,
		(e) => {
			const t = [];
			for (let r = 0; r < e.attributes.length; r++) {
				const s = e.attributes[r];
				n[s.name] || t.push(s.name);
			}
			t.forEach((t) => e.removeAttribute(t));
		},
		() => r(t)
	);
}
function Z(e, t, n) {
	return B(e, t, n, R);
}
function M(e, t, n) {
	return B(e, t, n, N);
}
function H(e, t) {
	return U(
		e,
		(e) => 3 === e.nodeType,
		(e) => {
			const n = '' + t;
			if (e.data.startsWith(n)) {
				if (e.data.length !== n.length) return e.splitText(n.length);
			} else e.data = n;
		},
		() => L(t),
		!0
	);
}
function W(e) {
	return H(e, ' ');
}
function G(e, t, n) {
	for (let r = n; r < e.length; r += 1) {
		const n = e[r];
		if (8 === n.nodeType && n.textContent.trim() === t) return r;
	}
	return e.length;
}
function F(e, t) {
	(t = '' + t), e.wholeText !== t && (e.data = t);
}
function K(e, t, n, r) {
	e.style.setProperty(t, n, r ? 'important' : '');
}
function Q(e, t, n) {
	e.classList[n ? 'add' : 'remove'](t);
}
function V(e, t = document.body) {
	return Array.from(t.querySelectorAll(e));
}
class X extends class {
	constructor() {
		this.e = this.n = null;
	}
	c(e) {
		this.h(e);
	}
	m(e, t, n = null) {
		this.e || ((this.e = R(t.nodeName)), (this.t = t), this.c(e)), this.i(n);
	}
	h(e) {
		(this.e.innerHTML = e), (this.n = Array.from(this.e.childNodes));
	}
	i(e) {
		for (let t = 0; t < this.n.length; t += 1) E(this.t, this.n[t], e);
	}
	p(e) {
		this.d(), this.h(e), this.i(this.a);
	}
	d() {
		this.n.forEach(A);
	}
} {
	constructor(e) {
		super(), (this.e = this.n = null), (this.l = e);
	}
	c(e) {
		this.l ? (this.n = this.l) : super.c(e);
	}
	i(e) {
		for (let t = 0; t < this.n.length; t += 1) T(this.t, this.n[t], e);
	}
}
function J(e) {
	y = e;
}
function Y() {
	if (!y) throw new Error('Function called outside component initialization');
	return y;
}
function ee(e) {
	Y().$$.on_mount.push(e);
}
function te(e) {
	Y().$$.after_update.push(e);
}
function ne() {
	const e = Y();
	return (t, n) => {
		const r = e.$$.callbacks[t];
		if (r) {
			const s = (function (e, t, n = !1) {
				const r = document.createEvent('CustomEvent');
				return r.initCustomEvent(e, n, !1, t), r;
			})(t, n);
			r.slice().forEach((t) => {
				t.call(e, s);
			});
		}
	};
}
function re(e, t) {
	Y().$$.context.set(e, t);
}
function se(e) {
	return Y().$$.context.get(e);
}
const le = [],
	ie = [],
	oe = [],
	ae = [],
	ce = Promise.resolve();
let ue = !1;
function he(e) {
	oe.push(e);
}
let fe = !1;
const pe = new Set();
function de() {
	if (!fe) {
		fe = !0;
		do {
			for (let e = 0; e < le.length; e += 1) {
				const t = le[e];
				J(t), ge(t.$$);
			}
			for (J(null), le.length = 0; ie.length; ) ie.pop()();
			for (let e = 0; e < oe.length; e += 1) {
				const t = oe[e];
				pe.has(t) || (pe.add(t), t());
			}
			oe.length = 0;
		} while (le.length);
		for (; ae.length; ) ae.pop()();
		(ue = !1), (fe = !1), pe.clear();
	}
}
function ge(e) {
	if (null !== e.fragment) {
		e.update(), u(e.before_update);
		const t = e.dirty;
		(e.dirty = [-1]), e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(he);
	}
}
const me = new Set();
let $e;
function ke() {
	$e = { r: 0, c: [], p: $e };
}
function xe() {
	$e.r || u($e.c), ($e = $e.p);
}
function be(e, t) {
	e && e.i && (me.delete(e), e.i(t));
}
function we(e, t, n, r) {
	if (e && e.o) {
		if (me.has(e)) return;
		me.add(e),
			$e.c.push(() => {
				me.delete(e), r && (n && e.d(1), r());
			}),
			e.o(t);
	}
}
function ye(e, t) {
	const n = {},
		r = {},
		s = { $$scope: 1 };
	let l = e.length;
	for (; l--; ) {
		const i = e[l],
			o = t[l];
		if (o) {
			for (const e in i) e in o || (r[e] = 1);
			for (const e in o) s[e] || ((n[e] = o[e]), (s[e] = 1));
			e[l] = o;
		} else for (const e in i) s[e] = 1;
	}
	for (const i in r) i in n || (n[i] = void 0);
	return n;
}
function _e(e) {
	return 'object' == typeof e && null !== e ? e : {};
}
function ve(e) {
	e && e.c();
}
function Se(e, t) {
	e && e.l(t);
}
function ze(e, t, n, r) {
	const { fragment: s, on_mount: l, on_destroy: i, after_update: o } = e.$$;
	s && s.m(t, n),
		r ||
			he(() => {
				const t = l.map(a).filter(h);
				i ? i.push(...t) : u(t), (e.$$.on_mount = []);
			}),
		o.forEach(he);
}
function Ee(e, t) {
	const n = e.$$;
	null !== n.fragment &&
		(u(n.on_destroy),
		n.fragment && n.fragment.d(t),
		(n.on_destroy = n.fragment = null),
		(n.ctx = []));
}
function Te(e, t) {
	-1 === e.$$.dirty[0] && (le.push(e), ue || ((ue = !0), ce.then(de)), e.$$.dirty.fill(0)),
		(e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function Ae(e, t, n, r, s, l, o, a = [-1]) {
	const h = y;
	J(e);
	const f = (e.$$ = {
		fragment: null,
		ctx: null,
		props: l,
		update: i,
		not_equal: s,
		bound: c(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(t.context || (h ? h.$$.context : [])),
		callbacks: c(),
		dirty: a,
		skip_bound: !1,
		root: t.target || h.$$.root
	});
	o && o(f.root);
	let p = !1;
	if (
		((f.ctx = n
			? n(e, t.props || {}, (t, n, ...r) => {
					const l = r.length ? r[0] : n;
					return (
						f.ctx &&
							s(f.ctx[t], (f.ctx[t] = l)) &&
							(!f.skip_bound && f.bound[t] && f.bound[t](l), p && Te(e, t)),
						n
					);
			  })
			: []),
		f.update(),
		(p = !0),
		u(f.before_update),
		(f.fragment = !!r && r(f.ctx)),
		t.target)
	) {
		if (t.hydrate) {
			v = !0;
			const e = D(t.target);
			f.fragment && f.fragment.l(e), e.forEach(A);
		} else f.fragment && f.fragment.c();
		t.intro && be(e.$$.fragment), ze(e, t.target, t.anchor, t.customElement), (v = !1), de();
	}
	J(h);
}
class Ie {
	$destroy() {
		Ee(this, 1), (this.$destroy = i);
	}
	$on(e, t) {
		const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
		return (
			n.push(t),
			() => {
				const e = n.indexOf(t);
				-1 !== e && n.splice(e, 1);
			}
		);
	}
	$set(e) {
		var t;
		this.$$set &&
			((t = e), 0 !== Object.keys(t).length) &&
			((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
	}
}
const Re = [];
function Ne(e, t = i) {
	let n;
	const r = new Set();
	function s(t) {
		if (f(e, t) && ((e = t), n)) {
			const t = !Re.length;
			for (const n of r) n[1](), Re.push(n, e);
			if (t) {
				for (let e = 0; e < Re.length; e += 2) Re[e][0](Re[e + 1]);
				Re.length = 0;
			}
		}
	}
	return {
		set: s,
		update: function (t) {
			s(t(e));
		},
		subscribe: function (l, o = i) {
			const a = [l, o];
			return (
				r.add(a),
				1 === r.size && (n = t(s) || i),
				l(e),
				() => {
					r.delete(a), 0 === r.size && (n(), (n = null));
				}
			);
		}
	};
}
try {
	self['workbox:window:6.1.5'] && _();
} catch (Br) {}
function Le(e, t) {
	return new Promise(function (n) {
		var r = new MessageChannel();
		(r.port1.onmessage = function (e) {
			n(e.data);
		}),
			e.postMessage(t, [r.port2]);
	});
}
function Pe(e, t) {
	(null == t || t > e.length) && (t = e.length);
	for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
	return r;
}
try {
	self['workbox:core:6.1.5'] && _();
} catch (Br) {}
var Oe = function () {
	var e = this;
	this.promise = new Promise(function (t, n) {
		(e.resolve = t), (e.reject = n);
	});
};
function je(e, t) {
	var n = location.href;
	return new URL(e, n).href === new URL(t, n).href;
}
var Ce = function (e, t) {
	(this.type = e), Object.assign(this, t);
};
function De(e, t, n) {
	return n ? (t ? t(e) : e) : ((e && e.then) || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
function qe() {}
var Ue = { type: 'SKIP_WAITING' };
function Be(e, t) {
	if (!t) return e && e.then ? e.then(qe) : Promise.resolve();
}
var Ze = (function (e) {
	var t, n;
	function r(t, n) {
		var r, s;
		return (
			void 0 === n && (n = {}),
			((r = e.call(this) || this).nn = {}),
			(r.tn = 0),
			(r.rn = new Oe()),
			(r.en = new Oe()),
			(r.on = new Oe()),
			(r.un = 0),
			(r.an = new Set()),
			(r.cn = function () {
				var e = r.fn,
					t = e.installing;
				r.tn > 0 || !je(t.scriptURL, r.sn) || performance.now() > r.un + 6e4
					? ((r.vn = t), e.removeEventListener('updatefound', r.cn))
					: ((r.hn = t), r.an.add(t), r.rn.resolve(t)),
					++r.tn,
					t.addEventListener('statechange', r.ln);
			}),
			(r.ln = function (e) {
				var t = r.fn,
					n = e.target,
					s = n.state,
					l = n === r.vn,
					i = { sw: n, isExternal: l, originalEvent: e };
				!l && r.mn && (i.isUpdate = !0),
					r.dispatchEvent(new Ce(s, i)),
					'installed' === s
						? (r.wn = self.setTimeout(function () {
								'installed' === s && t.waiting === n && r.dispatchEvent(new Ce('waiting', i));
						  }, 200))
						: 'activating' === s && (clearTimeout(r.wn), l || r.en.resolve(n));
			}),
			(r.dn = function (e) {
				var t = r.hn,
					n = t !== navigator.serviceWorker.controller;
				r.dispatchEvent(
					new Ce('controlling', { isExternal: n, originalEvent: e, sw: t, isUpdate: r.mn })
				),
					n || r.on.resolve(t);
			}),
			(r.gn =
				((s = function (e) {
					var t = e.data,
						n = e.source;
					return De(r.getSW(), function () {
						r.an.has(n) && r.dispatchEvent(new Ce('message', { data: t, sw: n, originalEvent: e }));
					});
				}),
				function () {
					for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
					try {
						return Promise.resolve(s.apply(this, e));
					} catch (n) {
						return Promise.reject(n);
					}
				})),
			(r.sn = t),
			(r.nn = n),
			navigator.serviceWorker.addEventListener('message', r.gn),
			r
		);
	}
	(n = e),
		((t = r).prototype = Object.create(n.prototype)),
		(t.prototype.constructor = t),
		(t.__proto__ = n);
	var s,
		l = r.prototype;
	return (
		(l.register = function (e) {
			var t,
				n,
				r = (void 0 === e ? {} : e).immediate,
				s = void 0 !== r && r;
			try {
				var l = this;
				return (
					(t = function () {
						return (
							(l.mn = Boolean(navigator.serviceWorker.controller)),
							(l.yn = l.pn()),
							De(l.bn(), function (e) {
								(l.fn = e),
									l.yn &&
										((l.hn = l.yn),
										l.en.resolve(l.yn),
										l.on.resolve(l.yn),
										l.yn.addEventListener('statechange', l.ln, { once: !0 }));
								var t = l.fn.waiting;
								return (
									t &&
										je(t.scriptURL, l.sn) &&
										((l.hn = t),
										Promise.resolve()
											.then(function () {
												l.dispatchEvent(new Ce('waiting', { sw: t, wasWaitingBeforeRegister: !0 }));
											})
											.then(function () {})),
									l.hn && (l.rn.resolve(l.hn), l.an.add(l.hn)),
									l.fn.addEventListener('updatefound', l.cn),
									navigator.serviceWorker.addEventListener('controllerchange', l.dn, { once: !0 }),
									l.fn
								);
							})
						);
					}),
					(n = (function () {
						if (!s && 'complete' !== document.readyState)
							return Be(
								new Promise(function (e) {
									return window.addEventListener('load', e);
								})
							);
					})()) && n.then
						? n.then(t)
						: t()
				);
			} catch (i) {
				return Promise.reject(i);
			}
		}),
		(l.update = function () {
			try {
				return this.fn ? Be(this.fn.update()) : void 0;
			} catch (Br) {
				return Promise.reject(Br);
			}
		}),
		(l.getSW = function () {
			return void 0 !== this.hn ? Promise.resolve(this.hn) : this.rn.promise;
		}),
		(l.messageSW = function (e) {
			try {
				return De(this.getSW(), function (t) {
					return Le(t, e);
				});
			} catch (Br) {
				return Promise.reject(Br);
			}
		}),
		(l.messageSkipWaiting = function () {
			this.fn && this.fn.waiting && Le(this.fn.waiting, Ue);
		}),
		(l.pn = function () {
			var e = navigator.serviceWorker.controller;
			return e && je(e.scriptURL, this.sn) ? e : void 0;
		}),
		(l.bn = function () {
			try {
				var e = this;
				return (function (t, n) {
					try {
						var r = De(navigator.serviceWorker.register(e.sn, e.nn), function (t) {
							return (e.un = performance.now()), t;
						});
					} catch (s) {
						return n(s);
					}
					return r && r.then ? r.then(void 0, n) : r;
				})(0, function (e) {
					throw e;
				});
			} catch (t) {
				return Promise.reject(t);
			}
		}),
		(s = [
			{
				key: 'active',
				get: function () {
					return this.en.promise;
				}
			},
			{
				key: 'controlling',
				get: function () {
					return this.on.promise;
				}
			}
		]) &&
			(function (e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			})(r.prototype, s),
		r
	);
})(
	(function () {
		function e() {
			this.Pn = new Map();
		}
		var t = e.prototype;
		return (
			(t.addEventListener = function (e, t) {
				this.Sn(e).add(t);
			}),
			(t.removeEventListener = function (e, t) {
				this.Sn(e).delete(t);
			}),
			(t.dispatchEvent = function (e) {
				e.target = this;
				for (
					var t,
						n = (function (e, t) {
							var n;
							if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
								if (
									Array.isArray(e) ||
									(n = (function (e, t) {
										if (e) {
											if ('string' == typeof e) return Pe(e, t);
											var n = Object.prototype.toString.call(e).slice(8, -1);
											return (
												'Object' === n && e.constructor && (n = e.constructor.name),
												'Map' === n || 'Set' === n
													? Array.from(e)
													: 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
													? Pe(e, t)
													: void 0
											);
										}
									})(e)) ||
									(t && e && 'number' == typeof e.length)
								) {
									n && (e = n);
									var r = 0;
									return function () {
										return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
									};
								}
								throw new TypeError(
									'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
								);
							}
							return (n = e[Symbol.iterator]()).next.bind(n);
						})(this.Sn(e.type));
					!(t = n()).done;

				)
					(0, t.value)(e);
			}),
			(t.Sn = function (e) {
				return this.Pn.has(e) || this.Pn.set(e, new Set()), this.Pn.get(e);
			}),
			e
		);
	})()
);
function Me(e, t, n) {
	const r = e.slice();
	return (r[15] = t[n]), r;
}
function He(e, t, n) {
	const r = e.slice();
	return (r[15] = t[n]), r;
}
function We(e, t, n) {
	const r = e.slice();
	return (r[8] = t[n]), r;
}
function Ge(e, t, n) {
	const r = e.slice();
	return (r[11] = t[n]), (r[13] = n), r;
}
function Fe(e, t, n) {
	const r = e.slice();
	return (r[11] = t[n]), (r[13] = n), r;
}
function Ke(e, t, n) {
	const r = e.slice();
	return (r[5] = t[n]), r;
}
function Qe(e) {
	let t, n, r, s;
	const l = [Ye, Je, Xe],
		i = [];
	function o(e, t) {
		return 'table' === e[0] ? 0 : 'list' === e[0] ? 1 : 2;
	}
	return (
		(t = o(e)),
		(n = i[t] = l[t](e)),
		{
			c() {
				n.c(), (r = O());
			},
			l(e) {
				n.l(e), (r = O());
			},
			m(e, n) {
				i[t].m(e, n), T(e, r, n), (s = !0);
			},
			p(e, s) {
				let a = t;
				(t = o(e)),
					t === a
						? i[t].p(e, s)
						: (ke(),
						  we(i[a], 1, 1, () => {
								i[a] = null;
						  }),
						  xe(),
						  (n = i[t]),
						  n ? n.p(e, s) : ((n = i[t] = l[t](e)), n.c()),
						  be(n, 1),
						  n.m(r.parentNode, r));
			},
			i(e) {
				s || (be(n), (s = !0));
			},
			o(e) {
				we(n), (s = !1);
			},
			d(e) {
				i[t].d(e), e && A(r);
			}
		}
	);
}
function Ve(e) {
	let t,
		n,
		r = e[1],
		s = [];
	for (let i = 0; i < r.length; i += 1) s[i] = wt(Ke(e, r, i));
	const l = (e) =>
		we(s[e], 1, 1, () => {
			s[e] = null;
		});
	return {
		c() {
			for (let e = 0; e < s.length; e += 1) s[e].c();
			t = O();
		},
		l(e) {
			for (let t = 0; t < s.length; t += 1) s[t].l(e);
			t = O();
		},
		m(e, r) {
			for (let t = 0; t < s.length; t += 1) s[t].m(e, r);
			T(e, t, r), (n = !0);
		},
		p(e, n) {
			if (10 & n) {
				let i;
				for (r = e[1], i = 0; i < r.length; i += 1) {
					const l = Ke(e, r, i);
					s[i]
						? (s[i].p(l, n), be(s[i], 1))
						: ((s[i] = wt(l)), s[i].c(), be(s[i], 1), s[i].m(t.parentNode, t));
				}
				for (ke(), i = r.length; i < s.length; i += 1) l(i);
				xe();
			}
		},
		i(e) {
			if (!n) {
				for (let e = 0; e < r.length; e += 1) be(s[e]);
				n = !0;
			}
		},
		o(e) {
			s = s.filter(Boolean);
			for (let t = 0; t < s.length; t += 1) we(s[t]);
			n = !1;
		},
		d(e) {
			I(s, e), e && A(t);
		}
	};
}
function Xe(e) {
	let t, n, r;
	const s = [e[4]];
	var l = e[3][e[0]];
	function i(e) {
		let t = { $$slots: { default: [nt] }, $$scope: { ctx: e } };
		for (let n = 0; n < s.length; n += 1) t = o(t, s[n]);
		return { props: t };
	}
	return (
		l && (t = new l(i(e))),
		{
			c() {
				t && ve(t.$$.fragment), (n = O());
			},
			l(e) {
				t && Se(t.$$.fragment, e), (n = O());
			},
			m(e, s) {
				t && ze(t, e, s), T(e, n, s), (r = !0);
			},
			p(e, r) {
				const o = 16 & r ? ye(s, [_e(e[4])]) : {};
				if ((1048602 & r && (o.$$scope = { dirty: r, ctx: e }), l !== (l = e[3][e[0]]))) {
					if (t) {
						ke();
						const e = t;
						we(e.$$.fragment, 1, 0, () => {
							Ee(e, 1);
						}),
							xe();
					}
					l
						? ((t = new l(i(e))), ve(t.$$.fragment), be(t.$$.fragment, 1), ze(t, n.parentNode, n))
						: (t = null);
				} else l && t.$set(o);
			},
			i(e) {
				r || (t && be(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				t && we(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				e && A(n), t && Ee(t, e);
			}
		}
	);
}
function Je(e) {
	let t, n, r, s;
	const l = [st, rt],
		i = [];
	function o(e, t) {
		return e[2] ? 0 : 1;
	}
	return (
		(t = o(e)),
		(n = i[t] = l[t](e)),
		{
			c() {
				n.c(), (r = O());
			},
			l(e) {
				n.l(e), (r = O());
			},
			m(e, n) {
				i[t].m(e, n), T(e, r, n), (s = !0);
			},
			p(e, s) {
				let a = t;
				(t = o(e)),
					t === a
						? i[t].p(e, s)
						: (ke(),
						  we(i[a], 1, 1, () => {
								i[a] = null;
						  }),
						  xe(),
						  (n = i[t]),
						  n ? n.p(e, s) : ((n = i[t] = l[t](e)), n.c()),
						  be(n, 1),
						  n.m(r.parentNode, r));
			},
			i(e) {
				s || (be(n), (s = !0));
			},
			o(e) {
				we(n), (s = !1);
			},
			d(e) {
				i[t].d(e), e && A(r);
			}
		}
	);
}
function Ye(e) {
	let t, n, r;
	var s = e[3].table;
	function l(e) {
		return { props: { $$slots: { default: [bt] }, $$scope: { ctx: e } } };
	}
	return (
		s && (t = new s(l(e))),
		{
			c() {
				t && ve(t.$$.fragment), (n = O());
			},
			l(e) {
				t && Se(t.$$.fragment, e), (n = O());
			},
			m(e, s) {
				t && ze(t, e, s), T(e, n, s), (r = !0);
			},
			p(e, r) {
				const i = {};
				if ((1048602 & r && (i.$$scope = { dirty: r, ctx: e }), s !== (s = e[3].table))) {
					if (t) {
						ke();
						const e = t;
						we(e.$$.fragment, 1, 0, () => {
							Ee(e, 1);
						}),
							xe();
					}
					s
						? ((t = new s(l(e))), ve(t.$$.fragment), be(t.$$.fragment, 1), ze(t, n.parentNode, n))
						: (t = null);
				} else s && t.$set(i);
			},
			i(e) {
				r || (t && be(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				t && we(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				e && A(n), t && Ee(t, e);
			}
		}
	);
}
function et(e) {
	let t,
		n = e[4].raw + '';
	return {
		c() {
			t = L(n);
		},
		l(e) {
			t = H(e, n);
		},
		m(e, n) {
			T(e, t, n);
		},
		p(e, r) {
			16 & r && n !== (n = e[4].raw + '') && F(t, n);
		},
		i: i,
		o: i,
		d(e) {
			e && A(t);
		}
	};
}
function tt(e) {
	let t, n;
	return (
		(t = new vt({ props: { tokens: e[1], renderers: e[3] } })),
		{
			c() {
				ve(t.$$.fragment);
			},
			l(e) {
				Se(t.$$.fragment, e);
			},
			m(e, r) {
				ze(t, e, r), (n = !0);
			},
			p(e, n) {
				const r = {};
				2 & n && (r.tokens = e[1]), 8 & n && (r.renderers = e[3]), t.$set(r);
			},
			i(e) {
				n || (be(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				we(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				Ee(t, e);
			}
		}
	);
}
function nt(e) {
	let t, n, r, s;
	const l = [tt, et],
		i = [];
	function o(e, t) {
		return e[1] ? 0 : 1;
	}
	return (
		(t = o(e)),
		(n = i[t] = l[t](e)),
		{
			c() {
				n.c(), (r = O());
			},
			l(e) {
				n.l(e), (r = O());
			},
			m(e, n) {
				i[t].m(e, n), T(e, r, n), (s = !0);
			},
			p(e, s) {
				let a = t;
				(t = o(e)),
					t === a
						? i[t].p(e, s)
						: (ke(),
						  we(i[a], 1, 1, () => {
								i[a] = null;
						  }),
						  xe(),
						  (n = i[t]),
						  n ? n.p(e, s) : ((n = i[t] = l[t](e)), n.c()),
						  be(n, 1),
						  n.m(r.parentNode, r));
			},
			i(e) {
				s || (be(n), (s = !0));
			},
			o(e) {
				we(n), (s = !1);
			},
			d(e) {
				i[t].d(e), e && A(r);
			}
		}
	);
}
function rt(e) {
	let t, n, r;
	const s = [{ ordered: e[2] }, e[4]];
	var l = e[3].list;
	function i(e) {
		let t = { $$slots: { default: [ot] }, $$scope: { ctx: e } };
		for (let n = 0; n < s.length; n += 1) t = o(t, s[n]);
		return { props: t };
	}
	return (
		l && (t = new l(i(e))),
		{
			c() {
				t && ve(t.$$.fragment), (n = O());
			},
			l(e) {
				t && Se(t.$$.fragment, e), (n = O());
			},
			m(e, s) {
				t && ze(t, e, s), T(e, n, s), (r = !0);
			},
			p(e, r) {
				const o = 20 & r ? ye(s, [4 & r && { ordered: e[2] }, 16 & r && _e(e[4])]) : {};
				if ((1048600 & r && (o.$$scope = { dirty: r, ctx: e }), l !== (l = e[3].list))) {
					if (t) {
						ke();
						const e = t;
						we(e.$$.fragment, 1, 0, () => {
							Ee(e, 1);
						}),
							xe();
					}
					l
						? ((t = new l(i(e))), ve(t.$$.fragment), be(t.$$.fragment, 1), ze(t, n.parentNode, n))
						: (t = null);
				} else l && t.$set(o);
			},
			i(e) {
				r || (t && be(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				t && we(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				e && A(n), t && Ee(t, e);
			}
		}
	);
}
function st(e) {
	let t, n, r;
	const s = [{ ordered: e[2] }, e[4]];
	var l = e[3].list;
	function i(e) {
		let t = { $$slots: { default: [ut] }, $$scope: { ctx: e } };
		for (let n = 0; n < s.length; n += 1) t = o(t, s[n]);
		return { props: t };
	}
	return (
		l && (t = new l(i(e))),
		{
			c() {
				t && ve(t.$$.fragment), (n = O());
			},
			l(e) {
				t && Se(t.$$.fragment, e), (n = O());
			},
			m(e, s) {
				t && ze(t, e, s), T(e, n, s), (r = !0);
			},
			p(e, r) {
				const o = 20 & r ? ye(s, [4 & r && { ordered: e[2] }, 16 & r && _e(e[4])]) : {};
				if ((1048600 & r && (o.$$scope = { dirty: r, ctx: e }), l !== (l = e[3].list))) {
					if (t) {
						ke();
						const e = t;
						we(e.$$.fragment, 1, 0, () => {
							Ee(e, 1);
						}),
							xe();
					}
					l
						? ((t = new l(i(e))), ve(t.$$.fragment), be(t.$$.fragment, 1), ze(t, n.parentNode, n))
						: (t = null);
				} else l && t.$set(o);
			},
			i(e) {
				r || (t && be(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				t && we(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				e && A(n), t && Ee(t, e);
			}
		}
	);
}
function lt(e) {
	let t, n, r;
	return (
		(t = new vt({ props: { tokens: e[15].tokens, renderers: e[3] } })),
		{
			c() {
				ve(t.$$.fragment), (n = P());
			},
			l(e) {
				Se(t.$$.fragment, e), (n = W(e));
			},
			m(e, s) {
				ze(t, e, s), T(e, n, s), (r = !0);
			},
			p(e, n) {
				const r = {};
				16 & n && (r.tokens = e[15].tokens), 8 & n && (r.renderers = e[3]), t.$set(r);
			},
			i(e) {
				r || (be(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				we(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				Ee(t, e), e && A(n);
			}
		}
	);
}
function it(e) {
	let t, n, r;
	const s = [e[15]];
	var l = e[3].unorderedlistitem || e[3].listitem;
	function i(e) {
		let t = { $$slots: { default: [lt] }, $$scope: { ctx: e } };
		for (let n = 0; n < s.length; n += 1) t = o(t, s[n]);
		return { props: t };
	}
	return (
		l && (t = new l(i(e))),
		{
			c() {
				t && ve(t.$$.fragment), (n = O());
			},
			l(e) {
				t && Se(t.$$.fragment, e), (n = O());
			},
			m(e, s) {
				t && ze(t, e, s), T(e, n, s), (r = !0);
			},
			p(e, r) {
				const o = 16 & r ? ye(s, [_e(e[15])]) : {};
				if (
					(1048600 & r && (o.$$scope = { dirty: r, ctx: e }),
					l !== (l = e[3].unorderedlistitem || e[3].listitem))
				) {
					if (t) {
						ke();
						const e = t;
						we(e.$$.fragment, 1, 0, () => {
							Ee(e, 1);
						}),
							xe();
					}
					l
						? ((t = new l(i(e))), ve(t.$$.fragment), be(t.$$.fragment, 1), ze(t, n.parentNode, n))
						: (t = null);
				} else l && t.$set(o);
			},
			i(e) {
				r || (t && be(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				t && we(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				e && A(n), t && Ee(t, e);
			}
		}
	);
}
function ot(e) {
	let t,
		n,
		r = e[4].items,
		s = [];
	for (let i = 0; i < r.length; i += 1) s[i] = it(Me(e, r, i));
	const l = (e) =>
		we(s[e], 1, 1, () => {
			s[e] = null;
		});
	return {
		c() {
			for (let e = 0; e < s.length; e += 1) s[e].c();
			t = O();
		},
		l(e) {
			for (let t = 0; t < s.length; t += 1) s[t].l(e);
			t = O();
		},
		m(e, r) {
			for (let t = 0; t < s.length; t += 1) s[t].m(e, r);
			T(e, t, r), (n = !0);
		},
		p(e, n) {
			if (24 & n) {
				let i;
				for (r = e[4].items, i = 0; i < r.length; i += 1) {
					const l = Me(e, r, i);
					s[i]
						? (s[i].p(l, n), be(s[i], 1))
						: ((s[i] = it(l)), s[i].c(), be(s[i], 1), s[i].m(t.parentNode, t));
				}
				for (ke(), i = r.length; i < s.length; i += 1) l(i);
				xe();
			}
		},
		i(e) {
			if (!n) {
				for (let e = 0; e < r.length; e += 1) be(s[e]);
				n = !0;
			}
		},
		o(e) {
			s = s.filter(Boolean);
			for (let t = 0; t < s.length; t += 1) we(s[t]);
			n = !1;
		},
		d(e) {
			I(s, e), e && A(t);
		}
	};
}
function at(e) {
	let t, n, r;
	return (
		(t = new vt({ props: { tokens: e[15].tokens, renderers: e[3] } })),
		{
			c() {
				ve(t.$$.fragment), (n = P());
			},
			l(e) {
				Se(t.$$.fragment, e), (n = W(e));
			},
			m(e, s) {
				ze(t, e, s), T(e, n, s), (r = !0);
			},
			p(e, n) {
				const r = {};
				16 & n && (r.tokens = e[15].tokens), 8 & n && (r.renderers = e[3]), t.$set(r);
			},
			i(e) {
				r || (be(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				we(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				Ee(t, e), e && A(n);
			}
		}
	);
}
function ct(e) {
	let t, n, r;
	const s = [e[15]];
	var l = e[3].orderedlistitem || e[3].listitem;
	function i(e) {
		let t = { $$slots: { default: [at] }, $$scope: { ctx: e } };
		for (let n = 0; n < s.length; n += 1) t = o(t, s[n]);
		return { props: t };
	}
	return (
		l && (t = new l(i(e))),
		{
			c() {
				t && ve(t.$$.fragment), (n = O());
			},
			l(e) {
				t && Se(t.$$.fragment, e), (n = O());
			},
			m(e, s) {
				t && ze(t, e, s), T(e, n, s), (r = !0);
			},
			p(e, r) {
				const o = 16 & r ? ye(s, [_e(e[15])]) : {};
				if (
					(1048600 & r && (o.$$scope = { dirty: r, ctx: e }),
					l !== (l = e[3].orderedlistitem || e[3].listitem))
				) {
					if (t) {
						ke();
						const e = t;
						we(e.$$.fragment, 1, 0, () => {
							Ee(e, 1);
						}),
							xe();
					}
					l
						? ((t = new l(i(e))), ve(t.$$.fragment), be(t.$$.fragment, 1), ze(t, n.parentNode, n))
						: (t = null);
				} else l && t.$set(o);
			},
			i(e) {
				r || (t && be(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				t && we(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				e && A(n), t && Ee(t, e);
			}
		}
	);
}
function ut(e) {
	let t,
		n,
		r = e[4].items,
		s = [];
	for (let i = 0; i < r.length; i += 1) s[i] = ct(He(e, r, i));
	const l = (e) =>
		we(s[e], 1, 1, () => {
			s[e] = null;
		});
	return {
		c() {
			for (let e = 0; e < s.length; e += 1) s[e].c();
			t = O();
		},
		l(e) {
			for (let t = 0; t < s.length; t += 1) s[t].l(e);
			t = O();
		},
		m(e, r) {
			for (let t = 0; t < s.length; t += 1) s[t].m(e, r);
			T(e, t, r), (n = !0);
		},
		p(e, n) {
			if (24 & n) {
				let i;
				for (r = e[4].items, i = 0; i < r.length; i += 1) {
					const l = He(e, r, i);
					s[i]
						? (s[i].p(l, n), be(s[i], 1))
						: ((s[i] = ct(l)), s[i].c(), be(s[i], 1), s[i].m(t.parentNode, t));
				}
				for (ke(), i = r.length; i < s.length; i += 1) l(i);
				xe();
			}
		},
		i(e) {
			if (!n) {
				for (let e = 0; e < r.length; e += 1) be(s[e]);
				n = !0;
			}
		},
		o(e) {
			s = s.filter(Boolean);
			for (let t = 0; t < s.length; t += 1) we(s[t]);
			n = !1;
		},
		d(e) {
			I(s, e), e && A(t);
		}
	};
}
function ht(e) {
	let t, n, r;
	return (
		(t = new vt({ props: { tokens: e[11], renderers: e[3] } })),
		{
			c() {
				ve(t.$$.fragment), (n = P());
			},
			l(e) {
				Se(t.$$.fragment, e), (n = W(e));
			},
			m(e, s) {
				ze(t, e, s), T(e, n, s), (r = !0);
			},
			p(e, n) {
				const r = {};
				2 & n && (r.tokens = e[11]), 8 & n && (r.renderers = e[3]), t.$set(r);
			},
			i(e) {
				r || (be(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				we(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				Ee(t, e), e && A(n);
			}
		}
	);
}
function ft(e) {
	let t, n, r;
	var s = e[3].tablecell;
	function l(e) {
		return {
			props: {
				header: !0,
				align: e[4].align[e[13]] || 'center',
				$$slots: { default: [ht] },
				$$scope: { ctx: e }
			}
		};
	}
	return (
		s && (t = new s(l(e))),
		{
			c() {
				t && ve(t.$$.fragment), (n = O());
			},
			l(e) {
				t && Se(t.$$.fragment, e), (n = O());
			},
			m(e, s) {
				t && ze(t, e, s), T(e, n, s), (r = !0);
			},
			p(e, r) {
				const i = {};
				if (
					(16 & r && (i.align = e[4].align[e[13]] || 'center'),
					1048586 & r && (i.$$scope = { dirty: r, ctx: e }),
					s !== (s = e[3].tablecell))
				) {
					if (t) {
						ke();
						const e = t;
						we(e.$$.fragment, 1, 0, () => {
							Ee(e, 1);
						}),
							xe();
					}
					s
						? ((t = new s(l(e))), ve(t.$$.fragment), be(t.$$.fragment, 1), ze(t, n.parentNode, n))
						: (t = null);
				} else s && t.$set(i);
			},
			i(e) {
				r || (t && be(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				t && we(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				e && A(n), t && Ee(t, e);
			}
		}
	);
}
function pt(e) {
	let t,
		n,
		r = e[1].header,
		s = [];
	for (let i = 0; i < r.length; i += 1) s[i] = ft(Fe(e, r, i));
	const l = (e) =>
		we(s[e], 1, 1, () => {
			s[e] = null;
		});
	return {
		c() {
			for (let e = 0; e < s.length; e += 1) s[e].c();
			t = O();
		},
		l(e) {
			for (let t = 0; t < s.length; t += 1) s[t].l(e);
			t = O();
		},
		m(e, r) {
			for (let t = 0; t < s.length; t += 1) s[t].m(e, r);
			T(e, t, r), (n = !0);
		},
		p(e, n) {
			if (26 & n) {
				let i;
				for (r = e[1].header, i = 0; i < r.length; i += 1) {
					const l = Fe(e, r, i);
					s[i]
						? (s[i].p(l, n), be(s[i], 1))
						: ((s[i] = ft(l)), s[i].c(), be(s[i], 1), s[i].m(t.parentNode, t));
				}
				for (ke(), i = r.length; i < s.length; i += 1) l(i);
				xe();
			}
		},
		i(e) {
			if (!n) {
				for (let e = 0; e < r.length; e += 1) be(s[e]);
				n = !0;
			}
		},
		o(e) {
			s = s.filter(Boolean);
			for (let t = 0; t < s.length; t += 1) we(s[t]);
			n = !1;
		},
		d(e) {
			I(s, e), e && A(t);
		}
	};
}
function dt(e) {
	let t, n, r;
	var s = e[3].tablerow;
	function l(e) {
		return { props: { $$slots: { default: [pt] }, $$scope: { ctx: e } } };
	}
	return (
		s && (t = new s(l(e))),
		{
			c() {
				t && ve(t.$$.fragment), (n = O());
			},
			l(e) {
				t && Se(t.$$.fragment, e), (n = O());
			},
			m(e, s) {
				t && ze(t, e, s), T(e, n, s), (r = !0);
			},
			p(e, r) {
				const i = {};
				if ((1048602 & r && (i.$$scope = { dirty: r, ctx: e }), s !== (s = e[3].tablerow))) {
					if (t) {
						ke();
						const e = t;
						we(e.$$.fragment, 1, 0, () => {
							Ee(e, 1);
						}),
							xe();
					}
					s
						? ((t = new s(l(e))), ve(t.$$.fragment), be(t.$$.fragment, 1), ze(t, n.parentNode, n))
						: (t = null);
				} else s && t.$set(i);
			},
			i(e) {
				r || (t && be(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				t && we(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				e && A(n), t && Ee(t, e);
			}
		}
	);
}
function gt(e) {
	let t, n;
	return (
		(t = new vt({ props: { tokens: e[11], renderers: e[3] } })),
		{
			c() {
				ve(t.$$.fragment);
			},
			l(e) {
				Se(t.$$.fragment, e);
			},
			m(e, r) {
				ze(t, e, r), (n = !0);
			},
			p(e, n) {
				const r = {};
				2 & n && (r.tokens = e[11]), 8 & n && (r.renderers = e[3]), t.$set(r);
			},
			i(e) {
				n || (be(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				we(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				Ee(t, e);
			}
		}
	);
}
function mt(e) {
	let t, n, r;
	var s = e[3].tablecell;
	function l(e) {
		return {
			props: {
				header: !1,
				align: e[4].align[e[13]] || 'center',
				$$slots: { default: [gt] },
				$$scope: { ctx: e }
			}
		};
	}
	return (
		s && (t = new s(l(e))),
		{
			c() {
				t && ve(t.$$.fragment), (n = O());
			},
			l(e) {
				t && Se(t.$$.fragment, e), (n = O());
			},
			m(e, s) {
				t && ze(t, e, s), T(e, n, s), (r = !0);
			},
			p(e, r) {
				const i = {};
				if (
					(16 & r && (i.align = e[4].align[e[13]] || 'center'),
					1048586 & r && (i.$$scope = { dirty: r, ctx: e }),
					s !== (s = e[3].tablecell))
				) {
					if (t) {
						ke();
						const e = t;
						we(e.$$.fragment, 1, 0, () => {
							Ee(e, 1);
						}),
							xe();
					}
					s
						? ((t = new s(l(e))), ve(t.$$.fragment), be(t.$$.fragment, 1), ze(t, n.parentNode, n))
						: (t = null);
				} else s && t.$set(i);
			},
			i(e) {
				r || (t && be(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				t && we(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				e && A(n), t && Ee(t, e);
			}
		}
	);
}
function $t(e) {
	let t,
		n,
		r = e[8],
		s = [];
	for (let i = 0; i < r.length; i += 1) s[i] = mt(Ge(e, r, i));
	const l = (e) =>
		we(s[e], 1, 1, () => {
			s[e] = null;
		});
	return {
		c() {
			for (let e = 0; e < s.length; e += 1) s[e].c();
			t = P();
		},
		l(e) {
			for (let t = 0; t < s.length; t += 1) s[t].l(e);
			t = W(e);
		},
		m(e, r) {
			for (let t = 0; t < s.length; t += 1) s[t].m(e, r);
			T(e, t, r), (n = !0);
		},
		p(e, n) {
			if (26 & n) {
				let i;
				for (r = e[8], i = 0; i < r.length; i += 1) {
					const l = Ge(e, r, i);
					s[i]
						? (s[i].p(l, n), be(s[i], 1))
						: ((s[i] = mt(l)), s[i].c(), be(s[i], 1), s[i].m(t.parentNode, t));
				}
				for (ke(), i = r.length; i < s.length; i += 1) l(i);
				xe();
			}
		},
		i(e) {
			if (!n) {
				for (let e = 0; e < r.length; e += 1) be(s[e]);
				n = !0;
			}
		},
		o(e) {
			s = s.filter(Boolean);
			for (let t = 0; t < s.length; t += 1) we(s[t]);
			n = !1;
		},
		d(e) {
			I(s, e), e && A(t);
		}
	};
}
function kt(e) {
	let t, n, r;
	var s = e[3].tablerow;
	function l(e) {
		return { props: { $$slots: { default: [$t] }, $$scope: { ctx: e } } };
	}
	return (
		s && (t = new s(l(e))),
		{
			c() {
				t && ve(t.$$.fragment), (n = O());
			},
			l(e) {
				t && Se(t.$$.fragment, e), (n = O());
			},
			m(e, s) {
				t && ze(t, e, s), T(e, n, s), (r = !0);
			},
			p(e, r) {
				const i = {};
				if ((1048602 & r && (i.$$scope = { dirty: r, ctx: e }), s !== (s = e[3].tablerow))) {
					if (t) {
						ke();
						const e = t;
						we(e.$$.fragment, 1, 0, () => {
							Ee(e, 1);
						}),
							xe();
					}
					s
						? ((t = new s(l(e))), ve(t.$$.fragment), be(t.$$.fragment, 1), ze(t, n.parentNode, n))
						: (t = null);
				} else s && t.$set(i);
			},
			i(e) {
				r || (t && be(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				t && we(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				e && A(n), t && Ee(t, e);
			}
		}
	);
}
function xt(e) {
	let t,
		n,
		r = e[1].cells,
		s = [];
	for (let i = 0; i < r.length; i += 1) s[i] = kt(We(e, r, i));
	const l = (e) =>
		we(s[e], 1, 1, () => {
			s[e] = null;
		});
	return {
		c() {
			for (let e = 0; e < s.length; e += 1) s[e].c();
			t = O();
		},
		l(e) {
			for (let t = 0; t < s.length; t += 1) s[t].l(e);
			t = O();
		},
		m(e, r) {
			for (let t = 0; t < s.length; t += 1) s[t].m(e, r);
			T(e, t, r), (n = !0);
		},
		p(e, n) {
			if (26 & n) {
				let i;
				for (r = e[1].cells, i = 0; i < r.length; i += 1) {
					const l = We(e, r, i);
					s[i]
						? (s[i].p(l, n), be(s[i], 1))
						: ((s[i] = kt(l)), s[i].c(), be(s[i], 1), s[i].m(t.parentNode, t));
				}
				for (ke(), i = r.length; i < s.length; i += 1) l(i);
				xe();
			}
		},
		i(e) {
			if (!n) {
				for (let e = 0; e < r.length; e += 1) be(s[e]);
				n = !0;
			}
		},
		o(e) {
			s = s.filter(Boolean);
			for (let t = 0; t < s.length; t += 1) we(s[t]);
			n = !1;
		},
		d(e) {
			I(s, e), e && A(t);
		}
	};
}
function bt(e) {
	let t, n, r, s, l;
	var i = e[3].tablehead;
	function o(e) {
		return { props: { $$slots: { default: [dt] }, $$scope: { ctx: e } } };
	}
	i && (t = new i(o(e)));
	var a = e[3].tablebody;
	function c(e) {
		return { props: { $$slots: { default: [xt] }, $$scope: { ctx: e } } };
	}
	return (
		a && (r = new a(c(e))),
		{
			c() {
				t && ve(t.$$.fragment), (n = P()), r && ve(r.$$.fragment), (s = O());
			},
			l(e) {
				t && Se(t.$$.fragment, e), (n = W(e)), r && Se(r.$$.fragment, e), (s = O());
			},
			m(e, i) {
				t && ze(t, e, i), T(e, n, i), r && ze(r, e, i), T(e, s, i), (l = !0);
			},
			p(e, l) {
				const u = {};
				if ((1048602 & l && (u.$$scope = { dirty: l, ctx: e }), i !== (i = e[3].tablehead))) {
					if (t) {
						ke();
						const e = t;
						we(e.$$.fragment, 1, 0, () => {
							Ee(e, 1);
						}),
							xe();
					}
					i
						? ((t = new i(o(e))), ve(t.$$.fragment), be(t.$$.fragment, 1), ze(t, n.parentNode, n))
						: (t = null);
				} else i && t.$set(u);
				const h = {};
				if ((1048602 & l && (h.$$scope = { dirty: l, ctx: e }), a !== (a = e[3].tablebody))) {
					if (r) {
						ke();
						const e = r;
						we(e.$$.fragment, 1, 0, () => {
							Ee(e, 1);
						}),
							xe();
					}
					a
						? ((r = new a(c(e))), ve(r.$$.fragment), be(r.$$.fragment, 1), ze(r, s.parentNode, s))
						: (r = null);
				} else a && r.$set(h);
			},
			i(e) {
				l || (t && be(t.$$.fragment, e), r && be(r.$$.fragment, e), (l = !0));
			},
			o(e) {
				t && we(t.$$.fragment, e), r && we(r.$$.fragment, e), (l = !1);
			},
			d(e) {
				t && Ee(t, e), e && A(n), e && A(s), r && Ee(r, e);
			}
		}
	);
}
function wt(e) {
	let t, n;
	const r = [e[5], { renderers: e[3] }];
	let s = {};
	for (let l = 0; l < r.length; l += 1) s = o(s, r[l]);
	return (
		(t = new vt({ props: s })),
		{
			c() {
				ve(t.$$.fragment);
			},
			l(e) {
				Se(t.$$.fragment, e);
			},
			m(e, r) {
				ze(t, e, r), (n = !0);
			},
			p(e, n) {
				const s = 10 & n ? ye(r, [2 & n && _e(e[5]), 8 & n && { renderers: e[3] }]) : {};
				t.$set(s);
			},
			i(e) {
				n || (be(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				we(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				Ee(t, e);
			}
		}
	);
}
function yt(e) {
	let t, n, r, s;
	const l = [Ve, Qe],
		i = [];
	function o(e, t) {
		return e[0] ? (e[3][e[0]] ? 1 : -1) : 0;
	}
	return (
		~(t = o(e)) && (n = i[t] = l[t](e)),
		{
			c() {
				n && n.c(), (r = O());
			},
			l(e) {
				n && n.l(e), (r = O());
			},
			m(e, n) {
				~t && i[t].m(e, n), T(e, r, n), (s = !0);
			},
			p(e, [s]) {
				let a = t;
				(t = o(e)),
					t === a
						? ~t && i[t].p(e, s)
						: (n &&
								(ke(),
								we(i[a], 1, 1, () => {
									i[a] = null;
								}),
								xe()),
						  ~t
								? ((n = i[t]),
								  n ? n.p(e, s) : ((n = i[t] = l[t](e)), n.c()),
								  be(n, 1),
								  n.m(r.parentNode, r))
								: (n = null));
			},
			i(e) {
				s || (be(n), (s = !0));
			},
			o(e) {
				we(n), (s = !1);
			},
			d(e) {
				~t && i[t].d(e), e && A(r);
			}
		}
	);
}
function _t(e, t, n) {
	const r = ['type', 'tokens', 'ordered', 'renderers'];
	let s = w(t, r),
		{ type: l } = t,
		{ tokens: i } = t,
		{ ordered: a = !1 } = t,
		{ renderers: c } = t;
	return (
		(e.$$set = (e) => {
			(t = o(
				o({}, t),
				(function (e) {
					const t = {};
					for (const n in e) '$' !== n[0] && (t[n] = e[n]);
					return t;
				})(e)
			)),
				n(4, (s = w(t, r))),
				'type' in e && n(0, (l = e.type)),
				'tokens' in e && n(1, (i = e.tokens)),
				'ordered' in e && n(2, (a = e.ordered)),
				'renderers' in e && n(3, (c = e.renderers));
		}),
		[l, i, a, c, s]
	);
}
class vt extends Ie {
	constructor(e) {
		super(), Ae(this, e, _t, yt, f, { type: 0, tokens: 1, ordered: 2, renderers: 3 });
	}
}
var St = { exports: {} };
function zt() {
	return {
		baseUrl: null,
		breaks: !1,
		extensions: null,
		gfm: !0,
		headerIds: !0,
		headerPrefix: '',
		highlight: null,
		langPrefix: 'language-',
		mangle: !0,
		pedantic: !1,
		renderer: null,
		sanitize: !1,
		sanitizer: null,
		silent: !1,
		smartLists: !1,
		smartypants: !1,
		tokenizer: null,
		walkTokens: null,
		xhtml: !1
	};
}
St.exports = {
	defaults: {
		baseUrl: null,
		breaks: !1,
		extensions: null,
		gfm: !0,
		headerIds: !0,
		headerPrefix: '',
		highlight: null,
		langPrefix: 'language-',
		mangle: !0,
		pedantic: !1,
		renderer: null,
		sanitize: !1,
		sanitizer: null,
		silent: !1,
		smartLists: !1,
		smartypants: !1,
		tokenizer: null,
		walkTokens: null,
		xhtml: !1
	},
	getDefaults: zt,
	changeDefaults: function (e) {
		St.exports.defaults = e;
	}
};
const Et = /[&<>"']/,
	Tt = /[&<>"']/g,
	At = /[<>"']|&(?!#?\w+;)/,
	It = /[<>"']|&(?!#?\w+;)/g,
	Rt = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
	Nt = (e) => Rt[e];
const Lt = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function Pt(e) {
	return e.replace(Lt, (e, t) =>
		'colon' === (t = t.toLowerCase())
			? ':'
			: '#' === t.charAt(0)
			? 'x' === t.charAt(1)
				? String.fromCharCode(parseInt(t.substring(2), 16))
				: String.fromCharCode(+t.substring(1))
			: ''
	);
}
const Ot = /(^|[^\[])\^/g;
const jt = /[^\w:]/g,
	Ct = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
const Dt = {},
	qt = /^[^:]+:\/*[^/]*$/,
	Ut = /^([^:]+:)[\s\S]*$/,
	Bt = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function Zt(e, t) {
	Dt[' ' + e] || (qt.test(e) ? (Dt[' ' + e] = e + '/') : (Dt[' ' + e] = Mt(e, '/', !0)));
	const n = -1 === (e = Dt[' ' + e]).indexOf(':');
	return '//' === t.substring(0, 2)
		? n
			? t
			: e.replace(Ut, '$1') + t
		: '/' === t.charAt(0)
		? n
			? t
			: e.replace(Bt, '$1') + t
		: e + t;
}
function Mt(e, t, n) {
	const r = e.length;
	if (0 === r) return '';
	let s = 0;
	for (; s < r; ) {
		const l = e.charAt(r - s - 1);
		if (l !== t || n) {
			if (l === t || !n) break;
			s++;
		} else s++;
	}
	return e.substr(0, r - s);
}
var Ht = {
	escape: function (e, t) {
		if (t) {
			if (Et.test(e)) return e.replace(Tt, Nt);
		} else if (At.test(e)) return e.replace(It, Nt);
		return e;
	},
	unescape: Pt,
	edit: function (e, t) {
		(e = e.source || e), (t = t || '');
		const n = {
			replace: (t, r) => ((r = (r = r.source || r).replace(Ot, '$1')), (e = e.replace(t, r)), n),
			getRegex: () => new RegExp(e, t)
		};
		return n;
	},
	cleanUrl: function (e, t, n) {
		if (e) {
			let e;
			try {
				e = decodeURIComponent(Pt(n)).replace(jt, '').toLowerCase();
			} catch (r) {
				return null;
			}
			if (
				0 === e.indexOf('javascript:') ||
				0 === e.indexOf('vbscript:') ||
				0 === e.indexOf('data:')
			)
				return null;
		}
		t && !Ct.test(n) && (n = Zt(t, n));
		try {
			n = encodeURI(n).replace(/%25/g, '%');
		} catch (r) {
			return null;
		}
		return n;
	},
	resolveUrl: Zt,
	noopTest: { exec: function () {} },
	merge: function (e) {
		let t,
			n,
			r = 1;
		for (; r < arguments.length; r++)
			for (n in ((t = arguments[r]), t))
				Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
		return e;
	},
	splitCells: function (e, t) {
		const n = e
			.replace(/\|/g, (e, t, n) => {
				let r = !1,
					s = t;
				for (; --s >= 0 && '\\' === n[s]; ) r = !r;
				return r ? '|' : ' |';
			})
			.split(/ \|/);
		let r = 0;
		if (n.length > t) n.splice(t);
		else for (; n.length < t; ) n.push('');
		for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, '|');
		return n;
	},
	rtrim: Mt,
	findClosingBracket: function (e, t) {
		if (-1 === e.indexOf(t[1])) return -1;
		const n = e.length;
		let r = 0,
			s = 0;
		for (; s < n; s++)
			if ('\\' === e[s]) s++;
			else if (e[s] === t[0]) r++;
			else if (e[s] === t[1] && (r--, r < 0)) return s;
		return -1;
	},
	checkSanitizeDeprecation: function (e) {
		e &&
			e.sanitize &&
			!e.silent &&
			console.warn(
				'marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options'
			);
	},
	repeatString: function (e, t) {
		if (t < 1) return '';
		let n = '';
		for (; t > 1; ) 1 & t && (n += e), (t >>= 1), (e += e);
		return n + e;
	}
};
const { defaults: Wt } = St.exports,
	{ rtrim: Gt, splitCells: Ft, escape: Kt, findClosingBracket: Qt } = Ht;
function Vt(e, t, n) {
	const r = t.href,
		s = t.title ? Kt(t.title) : null,
		l = e[1].replace(/\\([\[\]])/g, '$1');
	return '!' !== e[0].charAt(0)
		? { type: 'link', raw: n, href: r, title: s, text: l }
		: { type: 'image', raw: n, href: r, title: s, text: Kt(l) };
}
var Xt = class {
	constructor(e) {
		this.options = e || Wt;
	}
	space(e) {
		const t = this.rules.block.newline.exec(e);
		if (t) return t[0].length > 1 ? { type: 'space', raw: t[0] } : { raw: '\n' };
	}
	code(e) {
		const t = this.rules.block.code.exec(e);
		if (t) {
			const e = t[0].replace(/^ {1,4}/gm, '');
			return {
				type: 'code',
				raw: t[0],
				codeBlockStyle: 'indented',
				text: this.options.pedantic ? e : Gt(e, '\n')
			};
		}
	}
	fences(e) {
		const t = this.rules.block.fences.exec(e);
		if (t) {
			const e = t[0],
				n = (function (e, t) {
					const n = e.match(/^(\s+)(?:```)/);
					if (null === n) return t;
					const r = n[1];
					return t
						.split('\n')
						.map((e) => {
							const t = e.match(/^\s+/);
							if (null === t) return e;
							const [n] = t;
							return n.length >= r.length ? e.slice(r.length) : e;
						})
						.join('\n');
				})(e, t[3] || '');
			return { type: 'code', raw: e, lang: t[2] ? t[2].trim() : t[2], text: n };
		}
	}
	heading(e) {
		const t = this.rules.block.heading.exec(e);
		if (t) {
			let e = t[2].trim();
			if (/#$/.test(e)) {
				const t = Gt(e, '#');
				this.options.pedantic ? (e = t.trim()) : (t && !/ $/.test(t)) || (e = t.trim());
			}
			return { type: 'heading', raw: t[0], depth: t[1].length, text: e };
		}
	}
	nptable(e) {
		const t = this.rules.block.nptable.exec(e);
		if (t) {
			const e = {
				type: 'table',
				header: Ft(t[1].replace(/^ *| *\| *$/g, '')),
				align: t[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
				cells: t[3] ? t[3].replace(/\n$/, '').split('\n') : [],
				raw: t[0]
			};
			if (e.header.length === e.align.length) {
				let t,
					n = e.align.length;
				for (t = 0; t < n; t++)
					/^ *-+: *$/.test(e.align[t])
						? (e.align[t] = 'right')
						: /^ *:-+: *$/.test(e.align[t])
						? (e.align[t] = 'center')
						: /^ *:-+ *$/.test(e.align[t])
						? (e.align[t] = 'left')
						: (e.align[t] = null);
				for (n = e.cells.length, t = 0; t < n; t++) e.cells[t] = Ft(e.cells[t], e.header.length);
				return e;
			}
		}
	}
	hr(e) {
		const t = this.rules.block.hr.exec(e);
		if (t) return { type: 'hr', raw: t[0] };
	}
	blockquote(e) {
		const t = this.rules.block.blockquote.exec(e);
		if (t) {
			const e = t[0].replace(/^ *> ?/gm, '');
			return { type: 'blockquote', raw: t[0], text: e };
		}
	}
	list(e) {
		const t = this.rules.block.list.exec(e);
		if (t) {
			let e = t[0];
			const n = t[2],
				r = n.length > 1,
				s = {
					type: 'list',
					raw: e,
					ordered: r,
					start: r ? +n.slice(0, -1) : '',
					loose: !1,
					items: []
				},
				l = t[0].match(this.rules.block.item);
			let i,
				o,
				a,
				c,
				u,
				h,
				f,
				p,
				d,
				g = !1,
				m = l.length;
			a = this.rules.block.listItemStart.exec(l[0]);
			for (let t = 0; t < m; t++) {
				if (
					((i = l[t]),
					(e = i),
					this.options.pedantic ||
						((d = i.match(new RegExp('\\n\\s*\\n {0,' + (a[0].length - 1) + '}\\S'))),
						d &&
							((u = i.length - d.index + l.slice(t + 1).join('\n').length),
							(s.raw = s.raw.substring(0, s.raw.length - u)),
							(i = i.substring(0, d.index)),
							(e = i),
							(m = t + 1))),
					t !== m - 1)
				) {
					if (
						((c = this.rules.block.listItemStart.exec(l[t + 1])),
						this.options.pedantic
							? c[1].length > a[1].length
							: c[1].length >= a[0].length || c[1].length > 3)
					) {
						l.splice(
							t,
							2,
							l[t] +
								(!this.options.pedantic && c[1].length < a[0].length && !l[t].match(/\n$/)
									? ''
									: '\n') +
								l[t + 1]
						),
							t--,
							m--;
						continue;
					}
					(!this.options.pedantic || this.options.smartLists
						? c[2][c[2].length - 1] !== n[n.length - 1]
						: r === (1 === c[2].length)) &&
						((u = l.slice(t + 1).join('\n').length),
						(s.raw = s.raw.substring(0, s.raw.length - u)),
						(t = m - 1)),
						(a = c);
				}
				(o = i.length),
					(i = i.replace(/^ *([*+-]|\d+[.)]) ?/, '')),
					~i.indexOf('\n ') &&
						((o -= i.length),
						(i = this.options.pedantic
							? i.replace(/^ {1,4}/gm, '')
							: i.replace(new RegExp('^ {1,' + o + '}', 'gm'), ''))),
					(i = Gt(i, '\n')),
					t !== m - 1 && (e += '\n'),
					(h = g || /\n\n(?!\s*$)/.test(e)),
					t !== m - 1 && ((g = '\n\n' === e.slice(-2)), h || (h = g)),
					h && (s.loose = !0),
					this.options.gfm &&
						((f = /^\[[ xX]\] /.test(i)),
						(p = void 0),
						f && ((p = ' ' !== i[1]), (i = i.replace(/^\[[ xX]\] +/, '')))),
					s.items.push({ type: 'list_item', raw: e, task: f, checked: p, loose: h, text: i });
			}
			return s;
		}
	}
	html(e) {
		const t = this.rules.block.html.exec(e);
		if (t)
			return {
				type: this.options.sanitize ? 'paragraph' : 'html',
				raw: t[0],
				pre: !this.options.sanitizer && ('pre' === t[1] || 'script' === t[1] || 'style' === t[1]),
				text: this.options.sanitize
					? this.options.sanitizer
						? this.options.sanitizer(t[0])
						: Kt(t[0])
					: t[0]
			};
	}
	def(e) {
		const t = this.rules.block.def.exec(e);
		if (t) {
			t[3] && (t[3] = t[3].substring(1, t[3].length - 1));
			return {
				type: 'def',
				tag: t[1].toLowerCase().replace(/\s+/g, ' '),
				raw: t[0],
				href: t[2],
				title: t[3]
			};
		}
	}
	table(e) {
		const t = this.rules.block.table.exec(e);
		if (t) {
			const e = {
				type: 'table',
				header: Ft(t[1].replace(/^ *| *\| *$/g, '')),
				align: t[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
				cells: t[3] ? t[3].replace(/\n$/, '').split('\n') : []
			};
			if (e.header.length === e.align.length) {
				e.raw = t[0];
				let n,
					r = e.align.length;
				for (n = 0; n < r; n++)
					/^ *-+: *$/.test(e.align[n])
						? (e.align[n] = 'right')
						: /^ *:-+: *$/.test(e.align[n])
						? (e.align[n] = 'center')
						: /^ *:-+ *$/.test(e.align[n])
						? (e.align[n] = 'left')
						: (e.align[n] = null);
				for (r = e.cells.length, n = 0; n < r; n++)
					e.cells[n] = Ft(e.cells[n].replace(/^ *\| *| *\| *$/g, ''), e.header.length);
				return e;
			}
		}
	}
	lheading(e) {
		const t = this.rules.block.lheading.exec(e);
		if (t) return { type: 'heading', raw: t[0], depth: '=' === t[2].charAt(0) ? 1 : 2, text: t[1] };
	}
	paragraph(e) {
		const t = this.rules.block.paragraph.exec(e);
		if (t)
			return {
				type: 'paragraph',
				raw: t[0],
				text: '\n' === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1]
			};
	}
	text(e) {
		const t = this.rules.block.text.exec(e);
		if (t) return { type: 'text', raw: t[0], text: t[0] };
	}
	escape(e) {
		const t = this.rules.inline.escape.exec(e);
		if (t) return { type: 'escape', raw: t[0], text: Kt(t[1]) };
	}
	tag(e, t, n) {
		const r = this.rules.inline.tag.exec(e);
		if (r)
			return (
				!t && /^<a /i.test(r[0]) ? (t = !0) : t && /^<\/a>/i.test(r[0]) && (t = !1),
				!n && /^<(pre|code|kbd|script)(\s|>)/i.test(r[0])
					? (n = !0)
					: n && /^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0]) && (n = !1),
				{
					type: this.options.sanitize ? 'text' : 'html',
					raw: r[0],
					inLink: t,
					inRawBlock: n,
					text: this.options.sanitize
						? this.options.sanitizer
							? this.options.sanitizer(r[0])
							: Kt(r[0])
						: r[0]
				}
			);
	}
	link(e) {
		const t = this.rules.inline.link.exec(e);
		if (t) {
			const e = t[2].trim();
			if (!this.options.pedantic && /^</.test(e)) {
				if (!/>$/.test(e)) return;
				const t = Gt(e.slice(0, -1), '\\');
				if ((e.length - t.length) % 2 == 0) return;
			} else {
				const e = Qt(t[2], '()');
				if (e > -1) {
					const n = (0 === t[0].indexOf('!') ? 5 : 4) + t[1].length + e;
					(t[2] = t[2].substring(0, e)), (t[0] = t[0].substring(0, n).trim()), (t[3] = '');
				}
			}
			let n = t[2],
				r = '';
			if (this.options.pedantic) {
				const e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);
				e && ((n = e[1]), (r = e[3]));
			} else r = t[3] ? t[3].slice(1, -1) : '';
			return (
				(n = n.trim()),
				/^</.test(n) && (n = this.options.pedantic && !/>$/.test(e) ? n.slice(1) : n.slice(1, -1)),
				Vt(
					t,
					{
						href: n ? n.replace(this.rules.inline._escapes, '$1') : n,
						title: r ? r.replace(this.rules.inline._escapes, '$1') : r
					},
					t[0]
				)
			);
		}
	}
	reflink(e, t) {
		let n;
		if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
			let e = (n[2] || n[1]).replace(/\s+/g, ' ');
			if (((e = t[e.toLowerCase()]), !e || !e.href)) {
				const e = n[0].charAt(0);
				return { type: 'text', raw: e, text: e };
			}
			return Vt(n, e, n[0]);
		}
	}
	emStrong(e, t, n = '') {
		let r = this.rules.inline.emStrong.lDelim.exec(e);
		if (!r) return;
		if (r[3] && n.match(/[\p{L}\p{N}]/u)) return;
		const s = r[1] || r[2] || '';
		if (!s || (s && ('' === n || this.rules.inline.punctuation.exec(n)))) {
			const n = r[0].length - 1;
			let s,
				l,
				i = n,
				o = 0;
			const a =
				'*' === r[0][0]
					? this.rules.inline.emStrong.rDelimAst
					: this.rules.inline.emStrong.rDelimUnd;
			for (a.lastIndex = 0, t = t.slice(-1 * e.length + n); null != (r = a.exec(t)); )
				if (((s = r[1] || r[2] || r[3] || r[4] || r[5] || r[6]), s))
					if (((l = s.length), r[3] || r[4])) i += l;
					else if (!((r[5] || r[6]) && n % 3) || (n + l) % 3) {
						if (((i -= l), !(i > 0)))
							return (
								(l = Math.min(l, l + i + o)),
								Math.min(n, l) % 2
									? {
											type: 'em',
											raw: e.slice(0, n + r.index + l + 1),
											text: e.slice(1, n + r.index + l)
									  }
									: {
											type: 'strong',
											raw: e.slice(0, n + r.index + l + 1),
											text: e.slice(2, n + r.index + l - 1)
									  }
							);
					} else o += l;
		}
	}
	codespan(e) {
		const t = this.rules.inline.code.exec(e);
		if (t) {
			let e = t[2].replace(/\n/g, ' ');
			const n = /[^ ]/.test(e),
				r = /^ /.test(e) && / $/.test(e);
			return (
				n && r && (e = e.substring(1, e.length - 1)),
				(e = Kt(e, !0)),
				{ type: 'codespan', raw: t[0], text: e }
			);
		}
	}
	br(e) {
		const t = this.rules.inline.br.exec(e);
		if (t) return { type: 'br', raw: t[0] };
	}
	del(e) {
		const t = this.rules.inline.del.exec(e);
		if (t) return { type: 'del', raw: t[0], text: t[2] };
	}
	autolink(e, t) {
		const n = this.rules.inline.autolink.exec(e);
		if (n) {
			let e, r;
			return (
				'@' === n[2]
					? ((e = Kt(this.options.mangle ? t(n[1]) : n[1])), (r = 'mailto:' + e))
					: ((e = Kt(n[1])), (r = e)),
				{ type: 'link', raw: n[0], text: e, href: r, tokens: [{ type: 'text', raw: e, text: e }] }
			);
		}
	}
	url(e, t) {
		let n;
		if ((n = this.rules.inline.url.exec(e))) {
			let e, r;
			if ('@' === n[2]) (e = Kt(this.options.mangle ? t(n[0]) : n[0])), (r = 'mailto:' + e);
			else {
				let t;
				do {
					(t = n[0]), (n[0] = this.rules.inline._backpedal.exec(n[0])[0]);
				} while (t !== n[0]);
				(e = Kt(n[0])), (r = 'www.' === n[1] ? 'http://' + e : e);
			}
			return {
				type: 'link',
				raw: n[0],
				text: e,
				href: r,
				tokens: [{ type: 'text', raw: e, text: e }]
			};
		}
	}
	inlineText(e, t, n) {
		const r = this.rules.inline.text.exec(e);
		if (r) {
			let e;
			return (
				(e = t
					? this.options.sanitize
						? this.options.sanitizer
							? this.options.sanitizer(r[0])
							: Kt(r[0])
						: r[0]
					: Kt(this.options.smartypants ? n(r[0]) : r[0])),
				{ type: 'text', raw: r[0], text: e }
			);
		}
	}
};
const { noopTest: Jt, edit: Yt, merge: en } = Ht,
	tn = {
		newline: /^(?: *(?:\n|$))+/,
		code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
		fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
		hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
		heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
		blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
		list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,
		html:
			'^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))',
		def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
		nptable: Jt,
		table: Jt,
		lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
		_paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
		text: /^[^\n]+/,
		_label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
		_title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
	};
(tn.def = Yt(tn.def).replace('label', tn._label).replace('title', tn._title).getRegex()),
	(tn.bullet = /(?:[*+-]|\d{1,9}[.)])/),
	(tn.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/),
	(tn.item = Yt(tn.item, 'gm').replace(/bull/g, tn.bullet).getRegex()),
	(tn.listItemStart = Yt(/^( *)(bull) */)
		.replace('bull', tn.bullet)
		.getRegex()),
	(tn.list = Yt(tn.list)
		.replace(/bull/g, tn.bullet)
		.replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
		.replace('def', '\\n+(?=' + tn.def.source + ')')
		.getRegex()),
	(tn._tag =
		'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul'),
	(tn._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
	(tn.html = Yt(tn.html, 'i')
		.replace('comment', tn._comment)
		.replace('tag', tn._tag)
		.replace(
			'attribute',
			/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
		)
		.getRegex()),
	(tn.paragraph = Yt(tn._paragraph)
		.replace('hr', tn.hr)
		.replace('heading', ' {0,3}#{1,6} ')
		.replace('|lheading', '')
		.replace('blockquote', ' {0,3}>')
		.replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
		.replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
		.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
		.replace('tag', tn._tag)
		.getRegex()),
	(tn.blockquote = Yt(tn.blockquote).replace('paragraph', tn.paragraph).getRegex()),
	(tn.normal = en({}, tn)),
	(tn.gfm = en({}, tn.normal, {
		nptable:
			'^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
		table:
			'^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)'
	})),
	(tn.gfm.nptable = Yt(tn.gfm.nptable)
		.replace('hr', tn.hr)
		.replace('heading', ' {0,3}#{1,6} ')
		.replace('blockquote', ' {0,3}>')
		.replace('code', ' {4}[^\\n]')
		.replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
		.replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
		.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
		.replace('tag', tn._tag)
		.getRegex()),
	(tn.gfm.table = Yt(tn.gfm.table)
		.replace('hr', tn.hr)
		.replace('heading', ' {0,3}#{1,6} ')
		.replace('blockquote', ' {0,3}>')
		.replace('code', ' {4}[^\\n]')
		.replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
		.replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
		.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
		.replace('tag', tn._tag)
		.getRegex()),
	(tn.pedantic = en({}, tn.normal, {
		html: Yt(
			'^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))'
		)
			.replace('comment', tn._comment)
			.replace(
				/tag/g,
				'(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b'
			)
			.getRegex(),
		def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
		heading: /^(#{1,6})(.*)(?:\n+|$)/,
		fences: Jt,
		paragraph: Yt(tn.normal._paragraph)
			.replace('hr', tn.hr)
			.replace('heading', ' *#{1,6} *[^\n]')
			.replace('lheading', tn.lheading)
			.replace('blockquote', ' {0,3}>')
			.replace('|fences', '')
			.replace('|list', '')
			.replace('|html', '')
			.getRegex()
	}));
const nn = {
	escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
	autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
	url: Jt,
	tag:
		'^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
	link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
	reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
	nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
	reflinkSearch: 'reflink|nolink(?!\\()',
	emStrong: {
		lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
		rDelimAst: /\_\_[^_*]*?\*[^_*]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
		rDelimUnd: /\*\*[^_*]*?\_[^_*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
	},
	code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
	br: /^( {2,}|\\)\n(?!\s*$)/,
	del: Jt,
	text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
	punctuation: /^([\spunctuation])/,
	_punctuation: '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~'
};
(nn.punctuation = Yt(nn.punctuation)
	.replace(/punctuation/g, nn._punctuation)
	.getRegex()),
	(nn.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g),
	(nn.escapedEmSt = /\\\*|\\_/g),
	(nn._comment = Yt(tn._comment).replace('(?:--\x3e|$)', '--\x3e').getRegex()),
	(nn.emStrong.lDelim = Yt(nn.emStrong.lDelim).replace(/punct/g, nn._punctuation).getRegex()),
	(nn.emStrong.rDelimAst = Yt(nn.emStrong.rDelimAst, 'g')
		.replace(/punct/g, nn._punctuation)
		.getRegex()),
	(nn.emStrong.rDelimUnd = Yt(nn.emStrong.rDelimUnd, 'g')
		.replace(/punct/g, nn._punctuation)
		.getRegex()),
	(nn._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
	(nn._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
	(nn._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
	(nn.autolink = Yt(nn.autolink)
		.replace('scheme', nn._scheme)
		.replace('email', nn._email)
		.getRegex()),
	(nn._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
	(nn.tag = Yt(nn.tag)
		.replace('comment', nn._comment)
		.replace('attribute', nn._attribute)
		.getRegex()),
	(nn._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
	(nn._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
	(nn._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
	(nn.link = Yt(nn.link)
		.replace('label', nn._label)
		.replace('href', nn._href)
		.replace('title', nn._title)
		.getRegex()),
	(nn.reflink = Yt(nn.reflink).replace('label', nn._label).getRegex()),
	(nn.reflinkSearch = Yt(nn.reflinkSearch, 'g')
		.replace('reflink', nn.reflink)
		.replace('nolink', nn.nolink)
		.getRegex()),
	(nn.normal = en({}, nn)),
	(nn.pedantic = en({}, nn.normal, {
		strong: {
			start: /^__|\*\*/,
			middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
			endAst: /\*\*(?!\*)/g,
			endUnd: /__(?!_)/g
		},
		em: {
			start: /^_|\*/,
			middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
			endAst: /\*(?!\*)/g,
			endUnd: /_(?!_)/g
		},
		link: Yt(/^!?\[(label)\]\((.*?)\)/)
			.replace('label', nn._label)
			.getRegex(),
		reflink: Yt(/^!?\[(label)\]\s*\[([^\]]*)\]/)
			.replace('label', nn._label)
			.getRegex()
	})),
	(nn.gfm = en({}, nn.normal, {
		escape: Yt(nn.escape).replace('])', '~|])').getRegex(),
		_extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
		url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
		_backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
		del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
		text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
	})),
	(nn.gfm.url = Yt(nn.gfm.url, 'i').replace('email', nn.gfm._extended_email).getRegex()),
	(nn.breaks = en({}, nn.gfm, {
		br: Yt(nn.br).replace('{2,}', '*').getRegex(),
		text: Yt(nn.gfm.text)
			.replace('\\b_', '\\b_| {2,}\\n')
			.replace(/\{2,\}/g, '*')
			.getRegex()
	}));
var rn = { block: tn, inline: nn };
const sn = Xt,
	{ defaults: ln } = St.exports,
	{ block: on, inline: an } = rn,
	{ repeatString: cn } = Ht;
function un(e) {
	return e
		.replace(/---/g, '—')
		.replace(/--/g, '–')
		.replace(/(^|[-\u2014/(\[{"\s])'/g, '$1‘')
		.replace(/'/g, '’')
		.replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1“')
		.replace(/"/g, '”')
		.replace(/\.{3}/g, '…');
}
function hn(e) {
	let t,
		n,
		r = '';
	const s = e.length;
	for (t = 0; t < s; t++)
		(n = e.charCodeAt(t)), Math.random() > 0.5 && (n = 'x' + n.toString(16)), (r += '&#' + n + ';');
	return r;
}
const { defaults: fn } = St.exports,
	{ cleanUrl: pn, escape: dn } = Ht;
var gn = class {
		constructor(e) {
			this.options = e || fn;
		}
		code(e, t, n) {
			const r = (t || '').match(/\S*/)[0];
			if (this.options.highlight) {
				const t = this.options.highlight(e, r);
				null != t && t !== e && ((n = !0), (e = t));
			}
			return (
				(e = e.replace(/\n$/, '') + '\n'),
				r
					? '<pre><code class="' +
					  this.options.langPrefix +
					  dn(r, !0) +
					  '">' +
					  (n ? e : dn(e, !0)) +
					  '</code></pre>\n'
					: '<pre><code>' + (n ? e : dn(e, !0)) + '</code></pre>\n'
			);
		}
		blockquote(e) {
			return '<blockquote>\n' + e + '</blockquote>\n';
		}
		html(e) {
			return e;
		}
		heading(e, t, n, r) {
			return this.options.headerIds
				? '<h' + t + ' id="' + this.options.headerPrefix + r.slug(n) + '">' + e + '</h' + t + '>\n'
				: '<h' + t + '>' + e + '</h' + t + '>\n';
		}
		hr() {
			return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
		}
		list(e, t, n) {
			const r = t ? 'ol' : 'ul';
			return '<' + r + (t && 1 !== n ? ' start="' + n + '"' : '') + '>\n' + e + '</' + r + '>\n';
		}
		listitem(e) {
			return '<li>' + e + '</li>\n';
		}
		checkbox(e) {
			return (
				'<input ' +
				(e ? 'checked="" ' : '') +
				'disabled="" type="checkbox"' +
				(this.options.xhtml ? ' /' : '') +
				'> '
			);
		}
		paragraph(e) {
			return '<p>' + e + '</p>\n';
		}
		table(e, t) {
			return (
				t && (t = '<tbody>' + t + '</tbody>'),
				'<table>\n<thead>\n' + e + '</thead>\n' + t + '</table>\n'
			);
		}
		tablerow(e) {
			return '<tr>\n' + e + '</tr>\n';
		}
		tablecell(e, t) {
			const n = t.header ? 'th' : 'td';
			return (
				(t.align ? '<' + n + ' align="' + t.align + '">' : '<' + n + '>') + e + '</' + n + '>\n'
			);
		}
		strong(e) {
			return '<strong>' + e + '</strong>';
		}
		em(e) {
			return '<em>' + e + '</em>';
		}
		codespan(e) {
			return '<code>' + e + '</code>';
		}
		br() {
			return this.options.xhtml ? '<br/>' : '<br>';
		}
		del(e) {
			return '<del>' + e + '</del>';
		}
		link(e, t, n) {
			if (null === (e = pn(this.options.sanitize, this.options.baseUrl, e))) return n;
			let r = '<a href="' + dn(e) + '"';
			return t && (r += ' title="' + t + '"'), (r += '>' + n + '</a>'), r;
		}
		image(e, t, n) {
			if (null === (e = pn(this.options.sanitize, this.options.baseUrl, e))) return n;
			let r = '<img src="' + e + '" alt="' + n + '"';
			return t && (r += ' title="' + t + '"'), (r += this.options.xhtml ? '/>' : '>'), r;
		}
		text(e) {
			return e;
		}
	},
	mn = class {
		strong(e) {
			return e;
		}
		em(e) {
			return e;
		}
		codespan(e) {
			return e;
		}
		del(e) {
			return e;
		}
		html(e) {
			return e;
		}
		text(e) {
			return e;
		}
		link(e, t, n) {
			return '' + n;
		}
		image(e, t, n) {
			return '' + n;
		}
		br() {
			return '';
		}
	},
	$n = class {
		constructor() {
			this.seen = {};
		}
		serialize(e) {
			return e
				.toLowerCase()
				.trim()
				.replace(/<[!\/a-z].*?>/gi, '')
				.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
				.replace(/\s/g, '-');
		}
		getNextSafeSlug(e, t) {
			let n = e,
				r = 0;
			if (this.seen.hasOwnProperty(n)) {
				r = this.seen[e];
				do {
					r++, (n = e + '-' + r);
				} while (this.seen.hasOwnProperty(n));
			}
			return t || ((this.seen[e] = r), (this.seen[n] = 0)), n;
		}
		slug(e, t = {}) {
			const n = this.serialize(e);
			return this.getNextSafeSlug(n, t.dryrun);
		}
	};
const kn = gn,
	xn = mn,
	bn = $n,
	{ defaults: wn } = St.exports,
	{ unescape: yn } = Ht;
const _n = class e {
		constructor(e) {
			(this.tokens = []),
				(this.tokens.links = Object.create(null)),
				(this.options = e || ln),
				(this.options.tokenizer = this.options.tokenizer || new sn()),
				(this.tokenizer = this.options.tokenizer),
				(this.tokenizer.options = this.options);
			const t = { block: on.normal, inline: an.normal };
			this.options.pedantic
				? ((t.block = on.pedantic), (t.inline = an.pedantic))
				: this.options.gfm &&
				  ((t.block = on.gfm), this.options.breaks ? (t.inline = an.breaks) : (t.inline = an.gfm)),
				(this.tokenizer.rules = t);
		}
		static get rules() {
			return { block: on, inline: an };
		}
		static lex(t, n) {
			return new e(n).lex(t);
		}
		static lexInline(t, n) {
			return new e(n).inlineTokens(t);
		}
		lex(e) {
			return (
				(e = e.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ')),
				this.blockTokens(e, this.tokens, !0),
				this.inline(this.tokens),
				this.tokens
			);
		}
		blockTokens(e, t = [], n = !0) {
			let r, s, l, i, o, a;
			for (this.options.pedantic && (e = e.replace(/^ +$/gm, '')); e; )
				if (
					!(
						this.options.extensions &&
						this.options.extensions.block &&
						this.options.extensions.block.some(
							(n) => !!(r = n.call(this, e, t)) && ((e = e.substring(r.raw.length)), t.push(r), !0)
						)
					)
				)
					if ((r = this.tokenizer.space(e))) (e = e.substring(r.raw.length)), r.type && t.push(r);
					else if ((r = this.tokenizer.code(e)))
						(e = e.substring(r.raw.length)),
							(i = t[t.length - 1]),
							i && 'paragraph' === i.type
								? ((i.raw += '\n' + r.raw), (i.text += '\n' + r.text))
								: t.push(r);
					else if ((r = this.tokenizer.fences(e))) (e = e.substring(r.raw.length)), t.push(r);
					else if ((r = this.tokenizer.heading(e))) (e = e.substring(r.raw.length)), t.push(r);
					else if ((r = this.tokenizer.nptable(e))) (e = e.substring(r.raw.length)), t.push(r);
					else if ((r = this.tokenizer.hr(e))) (e = e.substring(r.raw.length)), t.push(r);
					else if ((r = this.tokenizer.blockquote(e)))
						(e = e.substring(r.raw.length)),
							(r.tokens = this.blockTokens(r.text, [], n)),
							t.push(r);
					else if ((r = this.tokenizer.list(e))) {
						for (e = e.substring(r.raw.length), l = r.items.length, s = 0; s < l; s++)
							r.items[s].tokens = this.blockTokens(r.items[s].text, [], !1);
						t.push(r);
					} else if ((r = this.tokenizer.html(e))) (e = e.substring(r.raw.length)), t.push(r);
					else if (n && (r = this.tokenizer.def(e)))
						(e = e.substring(r.raw.length)),
							this.tokens.links[r.tag] ||
								(this.tokens.links[r.tag] = { href: r.href, title: r.title });
					else if ((r = this.tokenizer.table(e))) (e = e.substring(r.raw.length)), t.push(r);
					else if ((r = this.tokenizer.lheading(e))) (e = e.substring(r.raw.length)), t.push(r);
					else {
						if (((o = e), this.options.extensions && this.options.extensions.startBlock)) {
							let t = 1 / 0;
							const n = e.slice(1);
							let r;
							this.options.extensions.startBlock.forEach(function (e) {
								(r = e.call(this, n)), 'number' == typeof r && r >= 0 && (t = Math.min(t, r));
							}),
								t < 1 / 0 && t >= 0 && (o = e.substring(0, t + 1));
						}
						if (n && (r = this.tokenizer.paragraph(o)))
							(i = t[t.length - 1]),
								a && 'paragraph' === i.type
									? ((i.raw += '\n' + r.raw), (i.text += '\n' + r.text))
									: t.push(r),
								(a = o.length !== e.length),
								(e = e.substring(r.raw.length));
						else if ((r = this.tokenizer.text(e)))
							(e = e.substring(r.raw.length)),
								(i = t[t.length - 1]),
								i && 'text' === i.type
									? ((i.raw += '\n' + r.raw), (i.text += '\n' + r.text))
									: t.push(r);
						else if (e) {
							const t = 'Infinite loop on byte: ' + e.charCodeAt(0);
							if (this.options.silent) {
								console.error(t);
								break;
							}
							throw new Error(t);
						}
					}
			return t;
		}
		inline(e) {
			let t, n, r, s, l, i;
			const o = e.length;
			for (t = 0; t < o; t++)
				switch (((i = e[t]), i.type)) {
					case 'paragraph':
					case 'text':
					case 'heading':
						(i.tokens = []), this.inlineTokens(i.text, i.tokens);
						break;
					case 'table':
						for (i.tokens = { header: [], cells: [] }, s = i.header.length, n = 0; n < s; n++)
							(i.tokens.header[n] = []), this.inlineTokens(i.header[n], i.tokens.header[n]);
						for (s = i.cells.length, n = 0; n < s; n++)
							for (l = i.cells[n], i.tokens.cells[n] = [], r = 0; r < l.length; r++)
								(i.tokens.cells[n][r] = []), this.inlineTokens(l[r], i.tokens.cells[n][r]);
						break;
					case 'blockquote':
						this.inline(i.tokens);
						break;
					case 'list':
						for (s = i.items.length, n = 0; n < s; n++) this.inline(i.items[n].tokens);
				}
			return e;
		}
		inlineTokens(e, t = [], n = !1, r = !1) {
			let s,
				l,
				i,
				o,
				a,
				c,
				u = e;
			if (this.tokens.links) {
				const e = Object.keys(this.tokens.links);
				if (e.length > 0)
					for (; null != (o = this.tokenizer.rules.inline.reflinkSearch.exec(u)); )
						e.includes(o[0].slice(o[0].lastIndexOf('[') + 1, -1)) &&
							(u =
								u.slice(0, o.index) +
								'[' +
								cn('a', o[0].length - 2) +
								']' +
								u.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
			}
			for (; null != (o = this.tokenizer.rules.inline.blockSkip.exec(u)); )
				u =
					u.slice(0, o.index) +
					'[' +
					cn('a', o[0].length - 2) +
					']' +
					u.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
			for (; null != (o = this.tokenizer.rules.inline.escapedEmSt.exec(u)); )
				u = u.slice(0, o.index) + '++' + u.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
			for (; e; )
				if (
					(a || (c = ''),
					(a = !1),
					!(
						this.options.extensions &&
						this.options.extensions.inline &&
						this.options.extensions.inline.some(
							(n) => !!(s = n.call(this, e, t)) && ((e = e.substring(s.raw.length)), t.push(s), !0)
						)
					))
				)
					if ((s = this.tokenizer.escape(e))) (e = e.substring(s.raw.length)), t.push(s);
					else if ((s = this.tokenizer.tag(e, n, r)))
						(e = e.substring(s.raw.length)),
							(n = s.inLink),
							(r = s.inRawBlock),
							(l = t[t.length - 1]),
							l && 'text' === s.type && 'text' === l.type
								? ((l.raw += s.raw), (l.text += s.text))
								: t.push(s);
					else if ((s = this.tokenizer.link(e)))
						(e = e.substring(s.raw.length)),
							'link' === s.type && (s.tokens = this.inlineTokens(s.text, [], !0, r)),
							t.push(s);
					else if ((s = this.tokenizer.reflink(e, this.tokens.links)))
						(e = e.substring(s.raw.length)),
							(l = t[t.length - 1]),
							'link' === s.type
								? ((s.tokens = this.inlineTokens(s.text, [], !0, r)), t.push(s))
								: l && 'text' === s.type && 'text' === l.type
								? ((l.raw += s.raw), (l.text += s.text))
								: t.push(s);
					else if ((s = this.tokenizer.emStrong(e, u, c)))
						(e = e.substring(s.raw.length)),
							(s.tokens = this.inlineTokens(s.text, [], n, r)),
							t.push(s);
					else if ((s = this.tokenizer.codespan(e))) (e = e.substring(s.raw.length)), t.push(s);
					else if ((s = this.tokenizer.br(e))) (e = e.substring(s.raw.length)), t.push(s);
					else if ((s = this.tokenizer.del(e)))
						(e = e.substring(s.raw.length)),
							(s.tokens = this.inlineTokens(s.text, [], n, r)),
							t.push(s);
					else if ((s = this.tokenizer.autolink(e, hn))) (e = e.substring(s.raw.length)), t.push(s);
					else if (n || !(s = this.tokenizer.url(e, hn))) {
						if (((i = e), this.options.extensions && this.options.extensions.startInline)) {
							let t = 1 / 0;
							const n = e.slice(1);
							let r;
							this.options.extensions.startInline.forEach(function (e) {
								(r = e.call(this, n)), 'number' == typeof r && r >= 0 && (t = Math.min(t, r));
							}),
								t < 1 / 0 && t >= 0 && (i = e.substring(0, t + 1));
						}
						if ((s = this.tokenizer.inlineText(i, r, un)))
							(e = e.substring(s.raw.length)),
								'_' !== s.raw.slice(-1) && (c = s.raw.slice(-1)),
								(a = !0),
								(l = t[t.length - 1]),
								l && 'text' === l.type ? ((l.raw += s.raw), (l.text += s.text)) : t.push(s);
						else if (e) {
							const t = 'Infinite loop on byte: ' + e.charCodeAt(0);
							if (this.options.silent) {
								console.error(t);
								break;
							}
							throw new Error(t);
						}
					} else (e = e.substring(s.raw.length)), t.push(s);
			return t;
		}
	},
	vn = class e {
		constructor(e) {
			(this.options = e || wn),
				(this.options.renderer = this.options.renderer || new kn()),
				(this.renderer = this.options.renderer),
				(this.renderer.options = this.options),
				(this.textRenderer = new xn()),
				(this.slugger = new bn());
		}
		static parse(t, n) {
			return new e(n).parse(t);
		}
		static parseInline(t, n) {
			return new e(n).parseInline(t);
		}
		parse(e, t = !0) {
			let n,
				r,
				s,
				l,
				i,
				o,
				a,
				c,
				u,
				h,
				f,
				p,
				d,
				g,
				m,
				$,
				k,
				x,
				b,
				w = '';
			const y = e.length;
			for (n = 0; n < y; n++)
				if (
					((h = e[n]),
					this.options.extensions &&
						this.options.extensions.renderers &&
						this.options.extensions.renderers[h.type] &&
						((b = this.options.extensions.renderers[h.type].call(this, h)),
						!1 !== b ||
							![
								'space',
								'hr',
								'heading',
								'code',
								'table',
								'blockquote',
								'list',
								'html',
								'paragraph',
								'text'
							].includes(h.type)))
				)
					w += b || '';
				else
					switch (h.type) {
						case 'space':
							continue;
						case 'hr':
							w += this.renderer.hr();
							continue;
						case 'heading':
							w += this.renderer.heading(
								this.parseInline(h.tokens),
								h.depth,
								yn(this.parseInline(h.tokens, this.textRenderer)),
								this.slugger
							);
							continue;
						case 'code':
							w += this.renderer.code(h.text, h.lang, h.escaped);
							continue;
						case 'table':
							for (c = '', a = '', l = h.header.length, r = 0; r < l; r++)
								a += this.renderer.tablecell(this.parseInline(h.tokens.header[r]), {
									header: !0,
									align: h.align[r]
								});
							for (c += this.renderer.tablerow(a), u = '', l = h.cells.length, r = 0; r < l; r++) {
								for (o = h.tokens.cells[r], a = '', i = o.length, s = 0; s < i; s++)
									a += this.renderer.tablecell(this.parseInline(o[s]), {
										header: !1,
										align: h.align[s]
									});
								u += this.renderer.tablerow(a);
							}
							w += this.renderer.table(c, u);
							continue;
						case 'blockquote':
							(u = this.parse(h.tokens)), (w += this.renderer.blockquote(u));
							continue;
						case 'list':
							for (
								f = h.ordered, p = h.start, d = h.loose, l = h.items.length, u = '', r = 0;
								r < l;
								r++
							)
								(m = h.items[r]),
									($ = m.checked),
									(k = m.task),
									(g = ''),
									m.task &&
										((x = this.renderer.checkbox($)),
										d
											? m.tokens.length > 0 && 'text' === m.tokens[0].type
												? ((m.tokens[0].text = x + ' ' + m.tokens[0].text),
												  m.tokens[0].tokens &&
														m.tokens[0].tokens.length > 0 &&
														'text' === m.tokens[0].tokens[0].type &&
														(m.tokens[0].tokens[0].text = x + ' ' + m.tokens[0].tokens[0].text))
												: m.tokens.unshift({ type: 'text', text: x })
											: (g += x)),
									(g += this.parse(m.tokens, d)),
									(u += this.renderer.listitem(g, k, $));
							w += this.renderer.list(u, f, p);
							continue;
						case 'html':
							w += this.renderer.html(h.text);
							continue;
						case 'paragraph':
							w += this.renderer.paragraph(this.parseInline(h.tokens));
							continue;
						case 'text':
							for (
								u = h.tokens ? this.parseInline(h.tokens) : h.text;
								n + 1 < y && 'text' === e[n + 1].type;

							)
								(h = e[++n]), (u += '\n' + (h.tokens ? this.parseInline(h.tokens) : h.text));
							w += t ? this.renderer.paragraph(u) : u;
							continue;
						default: {
							const e = 'Token with "' + h.type + '" type was not found.';
							if (this.options.silent) return void console.error(e);
							throw new Error(e);
						}
					}
			return w;
		}
		parseInline(e, t) {
			t = t || this.renderer;
			let n,
				r,
				s,
				l = '';
			const i = e.length;
			for (n = 0; n < i; n++)
				if (
					((r = e[n]),
					this.options.extensions &&
						this.options.extensions.renderers &&
						this.options.extensions.renderers[r.type] &&
						((s = this.options.extensions.renderers[r.type].call(this, r)),
						!1 !== s ||
							![
								'escape',
								'html',
								'link',
								'image',
								'strong',
								'em',
								'codespan',
								'br',
								'del',
								'text'
							].includes(r.type)))
				)
					l += s || '';
				else
					switch (r.type) {
						case 'escape':
							l += t.text(r.text);
							break;
						case 'html':
							l += t.html(r.text);
							break;
						case 'link':
							l += t.link(r.href, r.title, this.parseInline(r.tokens, t));
							break;
						case 'image':
							l += t.image(r.href, r.title, r.text);
							break;
						case 'strong':
							l += t.strong(this.parseInline(r.tokens, t));
							break;
						case 'em':
							l += t.em(this.parseInline(r.tokens, t));
							break;
						case 'codespan':
							l += t.codespan(r.text);
							break;
						case 'br':
							l += t.br();
							break;
						case 'del':
							l += t.del(this.parseInline(r.tokens, t));
							break;
						case 'text':
							l += t.text(r.text);
							break;
						default: {
							const e = 'Token with "' + r.type + '" type was not found.';
							if (this.options.silent) return void console.error(e);
							throw new Error(e);
						}
					}
			return l;
		}
	},
	Sn = Xt,
	zn = gn,
	En = mn,
	Tn = $n,
	{ merge: An, checkSanitizeDeprecation: In, escape: Rn } = Ht,
	{ getDefaults: Nn, changeDefaults: Ln, defaults: Pn } = St.exports;
function On(e, t, n) {
	if (null == e) throw new Error('marked(): input parameter is undefined or null');
	if ('string' != typeof e)
		throw new Error(
			'marked(): input parameter is of type ' +
				Object.prototype.toString.call(e) +
				', string expected'
		);
	if (
		('function' == typeof t && ((n = t), (t = null)), (t = An({}, On.defaults, t || {})), In(t), n)
	) {
		const s = t.highlight;
		let l;
		try {
			l = _n.lex(e, t);
		} catch (r) {
			return n(r);
		}
		const i = function (e) {
			let i;
			if (!e)
				try {
					t.walkTokens && On.walkTokens(l, t.walkTokens), (i = vn.parse(l, t));
				} catch (r) {
					e = r;
				}
			return (t.highlight = s), e ? n(e) : n(null, i);
		};
		if (!s || s.length < 3) return i();
		if ((delete t.highlight, !l.length)) return i();
		let o = 0;
		return (
			On.walkTokens(l, function (e) {
				'code' === e.type &&
					(o++,
					setTimeout(() => {
						s(e.text, e.lang, function (t, n) {
							if (t) return i(t);
							null != n && n !== e.text && ((e.text = n), (e.escaped = !0)), o--, 0 === o && i();
						});
					}, 0));
			}),
			void (0 === o && i())
		);
	}
	try {
		const n = _n.lex(e, t);
		return t.walkTokens && On.walkTokens(n, t.walkTokens), vn.parse(n, t);
	} catch (r) {
		if (((r.message += '\nPlease report this to https://github.com/markedjs/marked.'), t.silent))
			return '<p>An error occurred:</p><pre>' + Rn(r.message + '', !0) + '</pre>';
		throw r;
	}
}
(On.options = On.setOptions = function (e) {
	return An(On.defaults, e), Ln(On.defaults), On;
}),
	(On.getDefaults = Nn),
	(On.defaults = Pn),
	(On.use = function (...e) {
		const t = An({}, ...e),
			n = On.defaults.extensions || { renderers: {}, childTokens: {} };
		let r;
		e.forEach((e) => {
			if (
				(e.extensions &&
					((r = !0),
					e.extensions.forEach((e) => {
						if (!e.name) throw new Error('extension name required');
						if (e.renderer) {
							const t = n.renderers ? n.renderers[e.name] : null;
							n.renderers[e.name] = t
								? function (...n) {
										let r = e.renderer.apply(this, n);
										return !1 === r && (r = t.apply(this, n)), r;
								  }
								: e.renderer;
						}
						if (e.tokenizer) {
							if (!e.level || ('block' !== e.level && 'inline' !== e.level))
								throw new Error("extension level must be 'block' or 'inline'");
							n[e.level] ? n[e.level].unshift(e.tokenizer) : (n[e.level] = [e.tokenizer]),
								e.start &&
									('block' === e.level
										? n.startBlock
											? n.startBlock.push(e.start)
											: (n.startBlock = [e.start])
										: 'inline' === e.level &&
										  (n.startInline ? n.startInline.push(e.start) : (n.startInline = [e.start])));
						}
						e.childTokens && (n.childTokens[e.name] = e.childTokens);
					})),
				e.renderer)
			) {
				const n = On.defaults.renderer || new zn();
				for (const t in e.renderer) {
					const r = n[t];
					n[t] = (...s) => {
						let l = e.renderer[t].apply(n, s);
						return !1 === l && (l = r.apply(n, s)), l;
					};
				}
				t.renderer = n;
			}
			if (e.tokenizer) {
				const n = On.defaults.tokenizer || new Sn();
				for (const t in e.tokenizer) {
					const r = n[t];
					n[t] = (...s) => {
						let l = e.tokenizer[t].apply(n, s);
						return !1 === l && (l = r.apply(n, s)), l;
					};
				}
				t.tokenizer = n;
			}
			if (e.walkTokens) {
				const n = On.defaults.walkTokens;
				t.walkTokens = (t) => {
					e.walkTokens.call(this, t), n && n(t);
				};
			}
			r && (t.extensions = n), On.setOptions(t);
		});
	}),
	(On.walkTokens = function (e, t) {
		for (const n of e)
			switch ((t(n), n.type)) {
				case 'table':
					for (const e of n.tokens.header) On.walkTokens(e, t);
					for (const e of n.tokens.cells) for (const n of e) On.walkTokens(n, t);
					break;
				case 'list':
					On.walkTokens(n.items, t);
					break;
				default:
					On.defaults.extensions &&
					On.defaults.extensions.childTokens &&
					On.defaults.extensions.childTokens[n.type]
						? On.defaults.extensions.childTokens[n.type].forEach(function (e) {
								On.walkTokens(n[e], t);
						  })
						: n.tokens && On.walkTokens(n.tokens, t);
			}
	}),
	(On.parseInline = function (e, t) {
		if (null == e) throw new Error('marked.parseInline(): input parameter is undefined or null');
		if ('string' != typeof e)
			throw new Error(
				'marked.parseInline(): input parameter is of type ' +
					Object.prototype.toString.call(e) +
					', string expected'
			);
		(t = An({}, On.defaults, t || {})), In(t);
		try {
			const n = _n.lexInline(e, t);
			return t.walkTokens && On.walkTokens(n, t.walkTokens), vn.parseInline(n, t);
		} catch (n) {
			if (((n.message += '\nPlease report this to https://github.com/markedjs/marked.'), t.silent))
				return '<p>An error occurred:</p><pre>' + Rn(n.message + '', !0) + '</pre>';
			throw n;
		}
	}),
	(On.Parser = vn),
	(On.parser = vn.parse),
	(On.Renderer = zn),
	(On.TextRenderer = En),
	(On.Lexer = _n),
	(On.lexer = _n.lex),
	(On.Tokenizer = Sn),
	(On.Slugger = Tn),
	(On.parse = On);
var jn = On;
function Cn(e) {
	let t;
	return {
		c() {
			t = L(e[1]);
		},
		l(n) {
			t = H(n, e[1]);
		},
		m(e, n) {
			T(e, t, n);
		},
		p(e, n) {
			2 & n && F(t, e[1]);
		},
		i: i,
		o: i,
		d(e) {
			e && A(t);
		}
	};
}
function Dn(e) {
	let t, n;
	const r = e[3].default,
		s = m(r, e, e[2], null);
	return {
		c() {
			(t = R('h6')), s && s.c();
		},
		l(e) {
			t = Z(e, 'H6', {});
			var n = D(t);
			s && s.l(n), n.forEach(A);
		},
		m(e, r) {
			T(e, t, r), s && s.m(t, null), (n = !0);
		},
		p(e, t) {
			s && s.p && (!n || 4 & t) && x(s, r, e, e[2], n ? k(r, e[2], t, null) : b(e[2]), null);
		},
		i(e) {
			n || (be(s, e), (n = !0));
		},
		o(e) {
			we(s, e), (n = !1);
		},
		d(e) {
			e && A(t), s && s.d(e);
		}
	};
}
function qn(e) {
	let t, n;
	const r = e[3].default,
		s = m(r, e, e[2], null);
	return {
		c() {
			(t = R('h5')), s && s.c();
		},
		l(e) {
			t = Z(e, 'H5', {});
			var n = D(t);
			s && s.l(n), n.forEach(A);
		},
		m(e, r) {
			T(e, t, r), s && s.m(t, null), (n = !0);
		},
		p(e, t) {
			s && s.p && (!n || 4 & t) && x(s, r, e, e[2], n ? k(r, e[2], t, null) : b(e[2]), null);
		},
		i(e) {
			n || (be(s, e), (n = !0));
		},
		o(e) {
			we(s, e), (n = !1);
		},
		d(e) {
			e && A(t), s && s.d(e);
		}
	};
}
function Un(e) {
	let t, n;
	const r = e[3].default,
		s = m(r, e, e[2], null);
	return {
		c() {
			(t = R('h4')), s && s.c();
		},
		l(e) {
			t = Z(e, 'H4', {});
			var n = D(t);
			s && s.l(n), n.forEach(A);
		},
		m(e, r) {
			T(e, t, r), s && s.m(t, null), (n = !0);
		},
		p(e, t) {
			s && s.p && (!n || 4 & t) && x(s, r, e, e[2], n ? k(r, e[2], t, null) : b(e[2]), null);
		},
		i(e) {
			n || (be(s, e), (n = !0));
		},
		o(e) {
			we(s, e), (n = !1);
		},
		d(e) {
			e && A(t), s && s.d(e);
		}
	};
}
function Bn(e) {
	let t, n;
	const r = e[3].default,
		s = m(r, e, e[2], null);
	return {
		c() {
			(t = R('h3')), s && s.c();
		},
		l(e) {
			t = Z(e, 'H3', {});
			var n = D(t);
			s && s.l(n), n.forEach(A);
		},
		m(e, r) {
			T(e, t, r), s && s.m(t, null), (n = !0);
		},
		p(e, t) {
			s && s.p && (!n || 4 & t) && x(s, r, e, e[2], n ? k(r, e[2], t, null) : b(e[2]), null);
		},
		i(e) {
			n || (be(s, e), (n = !0));
		},
		o(e) {
			we(s, e), (n = !1);
		},
		d(e) {
			e && A(t), s && s.d(e);
		}
	};
}
function Zn(e) {
	let t, n;
	const r = e[3].default,
		s = m(r, e, e[2], null);
	return {
		c() {
			(t = R('h2')), s && s.c();
		},
		l(e) {
			t = Z(e, 'H2', {});
			var n = D(t);
			s && s.l(n), n.forEach(A);
		},
		m(e, r) {
			T(e, t, r), s && s.m(t, null), (n = !0);
		},
		p(e, t) {
			s && s.p && (!n || 4 & t) && x(s, r, e, e[2], n ? k(r, e[2], t, null) : b(e[2]), null);
		},
		i(e) {
			n || (be(s, e), (n = !0));
		},
		o(e) {
			we(s, e), (n = !1);
		},
		d(e) {
			e && A(t), s && s.d(e);
		}
	};
}
function Mn(e) {
	let t, n;
	const r = e[3].default,
		s = m(r, e, e[2], null);
	return {
		c() {
			(t = R('h1')), s && s.c();
		},
		l(e) {
			t = Z(e, 'H1', {});
			var n = D(t);
			s && s.l(n), n.forEach(A);
		},
		m(e, r) {
			T(e, t, r), s && s.m(t, null), (n = !0);
		},
		p(e, t) {
			s && s.p && (!n || 4 & t) && x(s, r, e, e[2], n ? k(r, e[2], t, null) : b(e[2]), null);
		},
		i(e) {
			n || (be(s, e), (n = !0));
		},
		o(e) {
			we(s, e), (n = !1);
		},
		d(e) {
			e && A(t), s && s.d(e);
		}
	};
}
function Hn(e) {
	let t, n, r, s;
	const l = [Mn, Zn, Bn, Un, qn, Dn, Cn],
		i = [];
	function o(e, t) {
		return 1 === e[0]
			? 0
			: 2 === e[0]
			? 1
			: 3 === e[0]
			? 2
			: 4 === e[0]
			? 3
			: 5 === e[0]
			? 4
			: 6 === e[0]
			? 5
			: 6;
	}
	return (
		(t = o(e)),
		(n = i[t] = l[t](e)),
		{
			c() {
				n.c(), (r = O());
			},
			l(e) {
				n.l(e), (r = O());
			},
			m(e, n) {
				i[t].m(e, n), T(e, r, n), (s = !0);
			},
			p(e, [s]) {
				let a = t;
				(t = o(e)),
					t === a
						? i[t].p(e, s)
						: (ke(),
						  we(i[a], 1, 1, () => {
								i[a] = null;
						  }),
						  xe(),
						  (n = i[t]),
						  n ? n.p(e, s) : ((n = i[t] = l[t](e)), n.c()),
						  be(n, 1),
						  n.m(r.parentNode, r));
			},
			i(e) {
				s || (be(n), (s = !0));
			},
			o(e) {
				we(n), (s = !1);
			},
			d(e) {
				i[t].d(e), e && A(r);
			}
		}
	);
}
function Wn(e, t, n) {
	let { $$slots: r = {}, $$scope: s } = t,
		{ depth: l } = t,
		{ raw: i } = t;
	return (
		(e.$$set = (e) => {
			'depth' in e && n(0, (l = e.depth)),
				'raw' in e && n(1, (i = e.raw)),
				'$$scope' in e && n(2, (s = e.$$scope));
		}),
		[l, i, s, r]
	);
}
function Gn(e) {
	let t, n;
	const r = e[1].default,
		s = m(r, e, e[0], null);
	return {
		c() {
			(t = R('p')), s && s.c();
		},
		l(e) {
			t = Z(e, 'P', {});
			var n = D(t);
			s && s.l(n), n.forEach(A);
		},
		m(e, r) {
			T(e, t, r), s && s.m(t, null), (n = !0);
		},
		p(e, [t]) {
			s && s.p && (!n || 1 & t) && x(s, r, e, e[0], n ? k(r, e[0], t, null) : b(e[0]), null);
		},
		i(e) {
			n || (be(s, e), (n = !0));
		},
		o(e) {
			we(s, e), (n = !1);
		},
		d(e) {
			e && A(t), s && s.d(e);
		}
	};
}
function Fn(e, t, n) {
	let { $$slots: r = {}, $$scope: s } = t;
	return (
		(e.$$set = (e) => {
			'$$scope' in e && n(0, (s = e.$$scope));
		}),
		[s, r]
	);
}
function Kn(e) {
	let t;
	const n = e[3].default,
		r = m(n, e, e[2], null);
	return {
		c() {
			r && r.c();
		},
		l(e) {
			r && r.l(e);
		},
		m(e, n) {
			r && r.m(e, n), (t = !0);
		},
		p(e, [s]) {
			r && r.p && (!t || 4 & s) && x(r, n, e, e[2], t ? k(n, e[2], s, null) : b(e[2]), null);
		},
		i(e) {
			t || (be(r, e), (t = !0));
		},
		o(e) {
			we(r, e), (t = !1);
		},
		d(e) {
			r && r.d(e);
		}
	};
}
function Qn(e, t, n) {
	let { $$slots: r = {}, $$scope: s } = t,
		{ text: l } = t,
		{ raw: i } = t;
	return (
		(e.$$set = (e) => {
			'text' in e && n(0, (l = e.text)),
				'raw' in e && n(1, (i = e.raw)),
				'$$scope' in e && n(2, (s = e.$$scope));
		}),
		[l, i, s, r]
	);
}
function Vn(e) {
	let t, n;
	return {
		c() {
			(t = R('img')), this.h();
		},
		l(e) {
			(t = Z(e, 'IMG', { src: !0, title: !0, alt: !0 })), this.h();
		},
		h() {
			d(t.src, (n = e[0])) || C(t, 'src', n), C(t, 'title', e[1]), C(t, 'alt', e[2]);
		},
		m(e, n) {
			T(e, t, n);
		},
		p(e, [r]) {
			1 & r && !d(t.src, (n = e[0])) && C(t, 'src', n),
				2 & r && C(t, 'title', e[1]),
				4 & r && C(t, 'alt', e[2]);
		},
		i: i,
		o: i,
		d(e) {
			e && A(t);
		}
	};
}
function Xn(e, t, n) {
	let { href: r = '' } = t,
		{ title: s } = t,
		{ text: l = '' } = t;
	return (
		(e.$$set = (e) => {
			'href' in e && n(0, (r = e.href)),
				'title' in e && n(1, (s = e.title)),
				'text' in e && n(2, (l = e.text));
		}),
		[r, s, l]
	);
}
function Jn(e) {
	let t, n;
	const r = e[3].default,
		s = m(r, e, e[2], null);
	return {
		c() {
			(t = R('a')), s && s.c(), this.h();
		},
		l(e) {
			t = Z(e, 'A', { href: !0, title: !0 });
			var n = D(t);
			s && s.l(n), n.forEach(A), this.h();
		},
		h() {
			C(t, 'href', e[0]), C(t, 'title', e[1]);
		},
		m(e, r) {
			T(e, t, r), s && s.m(t, null), (n = !0);
		},
		p(e, [l]) {
			s && s.p && (!n || 4 & l) && x(s, r, e, e[2], n ? k(r, e[2], l, null) : b(e[2]), null),
				(!n || 1 & l) && C(t, 'href', e[0]),
				(!n || 2 & l) && C(t, 'title', e[1]);
		},
		i(e) {
			n || (be(s, e), (n = !0));
		},
		o(e) {
			we(s, e), (n = !1);
		},
		d(e) {
			e && A(t), s && s.d(e);
		}
	};
}
function Yn(e, t, n) {
	let { $$slots: r = {}, $$scope: s } = t,
		{ href: l = '' } = t,
		{ title: i } = t;
	return (
		(e.$$set = (e) => {
			'href' in e && n(0, (l = e.href)),
				'title' in e && n(1, (i = e.title)),
				'$$scope' in e && n(2, (s = e.$$scope));
		}),
		[l, i, s, r]
	);
}
function er(e) {
	let t, n;
	const r = e[1].default,
		s = m(r, e, e[0], null);
	return {
		c() {
			(t = R('em')), s && s.c();
		},
		l(e) {
			t = Z(e, 'EM', {});
			var n = D(t);
			s && s.l(n), n.forEach(A);
		},
		m(e, r) {
			T(e, t, r), s && s.m(t, null), (n = !0);
		},
		p(e, [t]) {
			s && s.p && (!n || 1 & t) && x(s, r, e, e[0], n ? k(r, e[0], t, null) : b(e[0]), null);
		},
		i(e) {
			n || (be(s, e), (n = !0));
		},
		o(e) {
			we(s, e), (n = !1);
		},
		d(e) {
			e && A(t), s && s.d(e);
		}
	};
}
function tr(e, t, n) {
	let { $$slots: r = {}, $$scope: s } = t;
	return (
		(e.$$set = (e) => {
			'$$scope' in e && n(0, (s = e.$$scope));
		}),
		[s, r]
	);
}
function nr(e) {
	let t, n;
	const r = e[1].default,
		s = m(r, e, e[0], null);
	return {
		c() {
			(t = R('del')), s && s.c();
		},
		l(e) {
			t = Z(e, 'DEL', {});
			var n = D(t);
			s && s.l(n), n.forEach(A);
		},
		m(e, r) {
			T(e, t, r), s && s.m(t, null), (n = !0);
		},
		p(e, [t]) {
			s && s.p && (!n || 1 & t) && x(s, r, e, e[0], n ? k(r, e[0], t, null) : b(e[0]), null);
		},
		i(e) {
			n || (be(s, e), (n = !0));
		},
		o(e) {
			we(s, e), (n = !1);
		},
		d(e) {
			e && A(t), s && s.d(e);
		}
	};
}
function rr(e, t, n) {
	let { $$slots: r = {}, $$scope: s } = t;
	return (
		(e.$$set = (e) => {
			'$$scope' in e && n(0, (s = e.$$scope));
		}),
		[s, r]
	);
}
function sr(e) {
	let t,
		n,
		r = e[0].replace(/`/g, '') + '';
	return {
		c() {
			(t = R('code')), (n = L(r));
		},
		l(e) {
			t = Z(e, 'CODE', {});
			var s = D(t);
			(n = H(s, r)), s.forEach(A);
		},
		m(e, r) {
			T(e, t, r), z(t, n);
		},
		p(e, [t]) {
			1 & t && r !== (r = e[0].replace(/`/g, '') + '') && F(n, r);
		},
		i: i,
		o: i,
		d(e) {
			e && A(t);
		}
	};
}
function lr(e, t, n) {
	let { raw: r } = t;
	return (
		(e.$$set = (e) => {
			'raw' in e && n(0, (r = e.raw));
		}),
		[r]
	);
}
function ir(e) {
	let t, n;
	const r = e[1].default,
		s = m(r, e, e[0], null);
	return {
		c() {
			(t = R('strong')), s && s.c();
		},
		l(e) {
			t = Z(e, 'STRONG', {});
			var n = D(t);
			s && s.l(n), n.forEach(A);
		},
		m(e, r) {
			T(e, t, r), s && s.m(t, null), (n = !0);
		},
		p(e, [t]) {
			s && s.p && (!n || 1 & t) && x(s, r, e, e[0], n ? k(r, e[0], t, null) : b(e[0]), null);
		},
		i(e) {
			n || (be(s, e), (n = !0));
		},
		o(e) {
			we(s, e), (n = !1);
		},
		d(e) {
			e && A(t), s && s.d(e);
		}
	};
}
function or(e, t, n) {
	let { $$slots: r = {}, $$scope: s } = t;
	return (
		(e.$$set = (e) => {
			'$$scope' in e && n(0, (s = e.$$scope));
		}),
		[s, r]
	);
}
function ar(e) {
	let t, n;
	const r = e[1].default,
		s = m(r, e, e[0], null);
	return {
		c() {
			(t = R('table')), s && s.c();
		},
		l(e) {
			t = Z(e, 'TABLE', {});
			var n = D(t);
			s && s.l(n), n.forEach(A);
		},
		m(e, r) {
			T(e, t, r), s && s.m(t, null), (n = !0);
		},
		p(e, [t]) {
			s && s.p && (!n || 1 & t) && x(s, r, e, e[0], n ? k(r, e[0], t, null) : b(e[0]), null);
		},
		i(e) {
			n || (be(s, e), (n = !0));
		},
		o(e) {
			we(s, e), (n = !1);
		},
		d(e) {
			e && A(t), s && s.d(e);
		}
	};
}
function cr(e, t, n) {
	let { $$slots: r = {}, $$scope: s } = t;
	return (
		(e.$$set = (e) => {
			'$$scope' in e && n(0, (s = e.$$scope));
		}),
		[s, r]
	);
}
function ur(e) {
	let t, n;
	const r = e[1].default,
		s = m(r, e, e[0], null);
	return {
		c() {
			(t = R('thead')), s && s.c();
		},
		l(e) {
			t = Z(e, 'THEAD', {});
			var n = D(t);
			s && s.l(n), n.forEach(A);
		},
		m(e, r) {
			T(e, t, r), s && s.m(t, null), (n = !0);
		},
		p(e, [t]) {
			s && s.p && (!n || 1 & t) && x(s, r, e, e[0], n ? k(r, e[0], t, null) : b(e[0]), null);
		},
		i(e) {
			n || (be(s, e), (n = !0));
		},
		o(e) {
			we(s, e), (n = !1);
		},
		d(e) {
			e && A(t), s && s.d(e);
		}
	};
}
function hr(e, t, n) {
	let { $$slots: r = {}, $$scope: s } = t;
	return (
		(e.$$set = (e) => {
			'$$scope' in e && n(0, (s = e.$$scope));
		}),
		[s, r]
	);
}
function fr(e) {
	let t, n;
	const r = e[1].default,
		s = m(r, e, e[0], null);
	return {
		c() {
			(t = R('tbody')), s && s.c();
		},
		l(e) {
			t = Z(e, 'TBODY', {});
			var n = D(t);
			s && s.l(n), n.forEach(A);
		},
		m(e, r) {
			T(e, t, r), s && s.m(t, null), (n = !0);
		},
		p(e, [t]) {
			s && s.p && (!n || 1 & t) && x(s, r, e, e[0], n ? k(r, e[0], t, null) : b(e[0]), null);
		},
		i(e) {
			n || (be(s, e), (n = !0));
		},
		o(e) {
			we(s, e), (n = !1);
		},
		d(e) {
			e && A(t), s && s.d(e);
		}
	};
}
function pr(e, t, n) {
	let { $$slots: r = {}, $$scope: s } = t;
	return (
		(e.$$set = (e) => {
			'$$scope' in e && n(0, (s = e.$$scope));
		}),
		[s, r]
	);
}
function dr(e) {
	let t, n;
	const r = e[1].default,
		s = m(r, e, e[0], null);
	return {
		c() {
			(t = R('tr')), s && s.c();
		},
		l(e) {
			t = Z(e, 'TR', {});
			var n = D(t);
			s && s.l(n), n.forEach(A);
		},
		m(e, r) {
			T(e, t, r), s && s.m(t, null), (n = !0);
		},
		p(e, [t]) {
			s && s.p && (!n || 1 & t) && x(s, r, e, e[0], n ? k(r, e[0], t, null) : b(e[0]), null);
		},
		i(e) {
			n || (be(s, e), (n = !0));
		},
		o(e) {
			we(s, e), (n = !1);
		},
		d(e) {
			e && A(t), s && s.d(e);
		}
	};
}
function gr(e, t, n) {
	let { $$slots: r = {}, $$scope: s } = t;
	return (
		(e.$$set = (e) => {
			'$$scope' in e && n(0, (s = e.$$scope));
		}),
		[s, r]
	);
}
function mr(e) {
	let t, n;
	const r = e[3].default,
		s = m(r, e, e[2], null);
	return {
		c() {
			(t = R('td')), s && s.c(), this.h();
		},
		l(e) {
			t = Z(e, 'TD', { align: !0 });
			var n = D(t);
			s && s.l(n), n.forEach(A), this.h();
		},
		h() {
			C(t, 'align', e[1]);
		},
		m(e, r) {
			T(e, t, r), s && s.m(t, null), (n = !0);
		},
		p(e, l) {
			s && s.p && (!n || 4 & l) && x(s, r, e, e[2], n ? k(r, e[2], l, null) : b(e[2]), null),
				(!n || 2 & l) && C(t, 'align', e[1]);
		},
		i(e) {
			n || (be(s, e), (n = !0));
		},
		o(e) {
			we(s, e), (n = !1);
		},
		d(e) {
			e && A(t), s && s.d(e);
		}
	};
}
function $r(e) {
	let t, n;
	const r = e[3].default,
		s = m(r, e, e[2], null);
	return {
		c() {
			(t = R('th')), s && s.c(), this.h();
		},
		l(e) {
			t = Z(e, 'TH', { align: !0 });
			var n = D(t);
			s && s.l(n), n.forEach(A), this.h();
		},
		h() {
			C(t, 'align', e[1]);
		},
		m(e, r) {
			T(e, t, r), s && s.m(t, null), (n = !0);
		},
		p(e, l) {
			s && s.p && (!n || 4 & l) && x(s, r, e, e[2], n ? k(r, e[2], l, null) : b(e[2]), null),
				(!n || 2 & l) && C(t, 'align', e[1]);
		},
		i(e) {
			n || (be(s, e), (n = !0));
		},
		o(e) {
			we(s, e), (n = !1);
		},
		d(e) {
			e && A(t), s && s.d(e);
		}
	};
}
function kr(e) {
	let t, n, r, s;
	const l = [$r, mr],
		i = [];
	function o(e, t) {
		return e[0] ? 0 : 1;
	}
	return (
		(t = o(e)),
		(n = i[t] = l[t](e)),
		{
			c() {
				n.c(), (r = O());
			},
			l(e) {
				n.l(e), (r = O());
			},
			m(e, n) {
				i[t].m(e, n), T(e, r, n), (s = !0);
			},
			p(e, [s]) {
				let a = t;
				(t = o(e)),
					t === a
						? i[t].p(e, s)
						: (ke(),
						  we(i[a], 1, 1, () => {
								i[a] = null;
						  }),
						  xe(),
						  (n = i[t]),
						  n ? n.p(e, s) : ((n = i[t] = l[t](e)), n.c()),
						  be(n, 1),
						  n.m(r.parentNode, r));
			},
			i(e) {
				s || (be(n), (s = !0));
			},
			o(e) {
				we(n), (s = !1);
			},
			d(e) {
				i[t].d(e), e && A(r);
			}
		}
	);
}
function xr(e, t, n) {
	let { $$slots: r = {}, $$scope: s } = t,
		{ header: l } = t,
		{ align: i } = t;
	return (
		(e.$$set = (e) => {
			'header' in e && n(0, (l = e.header)),
				'align' in e && n(1, (i = e.align)),
				'$$scope' in e && n(2, (s = e.$$scope));
		}),
		[l, i, s, r]
	);
}
function br(e) {
	let t, n;
	const r = e[3].default,
		s = m(r, e, e[2], null);
	return {
		c() {
			(t = R('ul')), s && s.c();
		},
		l(e) {
			t = Z(e, 'UL', {});
			var n = D(t);
			s && s.l(n), n.forEach(A);
		},
		m(e, r) {
			T(e, t, r), s && s.m(t, null), (n = !0);
		},
		p(e, t) {
			s && s.p && (!n || 4 & t) && x(s, r, e, e[2], n ? k(r, e[2], t, null) : b(e[2]), null);
		},
		i(e) {
			n || (be(s, e), (n = !0));
		},
		o(e) {
			we(s, e), (n = !1);
		},
		d(e) {
			e && A(t), s && s.d(e);
		}
	};
}
function wr(e) {
	let t, n;
	const r = e[3].default,
		s = m(r, e, e[2], null);
	return {
		c() {
			(t = R('ol')), s && s.c(), this.h();
		},
		l(e) {
			t = Z(e, 'OL', { start: !0 });
			var n = D(t);
			s && s.l(n), n.forEach(A), this.h();
		},
		h() {
			C(t, 'start', e[1]);
		},
		m(e, r) {
			T(e, t, r), s && s.m(t, null), (n = !0);
		},
		p(e, l) {
			s && s.p && (!n || 4 & l) && x(s, r, e, e[2], n ? k(r, e[2], l, null) : b(e[2]), null),
				(!n || 2 & l) && C(t, 'start', e[1]);
		},
		i(e) {
			n || (be(s, e), (n = !0));
		},
		o(e) {
			we(s, e), (n = !1);
		},
		d(e) {
			e && A(t), s && s.d(e);
		}
	};
}
function yr(e) {
	let t, n, r, s;
	const l = [wr, br],
		i = [];
	function o(e, t) {
		return e[0] ? 0 : 1;
	}
	return (
		(t = o(e)),
		(n = i[t] = l[t](e)),
		{
			c() {
				n.c(), (r = O());
			},
			l(e) {
				n.l(e), (r = O());
			},
			m(e, n) {
				i[t].m(e, n), T(e, r, n), (s = !0);
			},
			p(e, [s]) {
				let a = t;
				(t = o(e)),
					t === a
						? i[t].p(e, s)
						: (ke(),
						  we(i[a], 1, 1, () => {
								i[a] = null;
						  }),
						  xe(),
						  (n = i[t]),
						  n ? n.p(e, s) : ((n = i[t] = l[t](e)), n.c()),
						  be(n, 1),
						  n.m(r.parentNode, r));
			},
			i(e) {
				s || (be(n), (s = !0));
			},
			o(e) {
				we(n), (s = !1);
			},
			d(e) {
				i[t].d(e), e && A(r);
			}
		}
	);
}
function _r(e, t, n) {
	let { $$slots: r = {}, $$scope: s } = t,
		{ ordered: l } = t,
		{ start: i } = t;
	return (
		(e.$$set = (e) => {
			'ordered' in e && n(0, (l = e.ordered)),
				'start' in e && n(1, (i = e.start)),
				'$$scope' in e && n(2, (s = e.$$scope));
		}),
		[l, i, s, r]
	);
}
function vr(e) {
	let t, n;
	const r = e[1].default,
		s = m(r, e, e[0], null);
	return {
		c() {
			(t = R('li')), s && s.c();
		},
		l(e) {
			t = Z(e, 'LI', {});
			var n = D(t);
			s && s.l(n), n.forEach(A);
		},
		m(e, r) {
			T(e, t, r), s && s.m(t, null), (n = !0);
		},
		p(e, [t]) {
			s && s.p && (!n || 1 & t) && x(s, r, e, e[0], n ? k(r, e[0], t, null) : b(e[0]), null);
		},
		i(e) {
			n || (be(s, e), (n = !0));
		},
		o(e) {
			we(s, e), (n = !1);
		},
		d(e) {
			e && A(t), s && s.d(e);
		}
	};
}
function Sr(e, t, n) {
	let { $$slots: r = {}, $$scope: s } = t;
	return (
		(e.$$set = (e) => {
			'$$scope' in e && n(0, (s = e.$$scope));
		}),
		[s, r]
	);
}
function zr(e) {
	let t;
	return {
		c() {
			t = R('hr');
		},
		l(e) {
			t = Z(e, 'HR', {});
		},
		m(e, n) {
			T(e, t, n);
		},
		p: i,
		i: i,
		o: i,
		d(e) {
			e && A(t);
		}
	};
}
function Er(e) {
	let t, n;
	return {
		c() {
			(t = new X()), (n = O()), this.h();
		},
		l(e) {
			(t = (function (e) {
				const t = G(e, 'HTML_TAG_START', 0),
					n = G(e, 'HTML_TAG_END', t);
				if (t === n) return new X();
				q(e);
				const r = e.splice(t, n + 1);
				A(r[0]), A(r[r.length - 1]);
				const s = r.slice(1, r.length - 1);
				for (const l of s)
					(l.claim_order = e.claim_info.total_claimed), (e.claim_info.total_claimed += 1);
				return new X(s);
			})(e)),
				(n = O()),
				this.h();
		},
		h() {
			t.a = n;
		},
		m(r, s) {
			t.m(e[0], r, s), T(r, n, s);
		},
		p(e, [n]) {
			1 & n && t.p(e[0]);
		},
		i: i,
		o: i,
		d(e) {
			e && A(n), e && t.d();
		}
	};
}
function Tr(e, t, n) {
	let { text: r } = t;
	return (
		(e.$$set = (e) => {
			'text' in e && n(0, (r = e.text));
		}),
		[r]
	);
}
function Ar(e) {
	let t, n;
	const r = e[1].default,
		s = m(r, e, e[0], null);
	return {
		c() {
			(t = R('blockquote')), s && s.c();
		},
		l(e) {
			t = Z(e, 'BLOCKQUOTE', {});
			var n = D(t);
			s && s.l(n), n.forEach(A);
		},
		m(e, r) {
			T(e, t, r), s && s.m(t, null), (n = !0);
		},
		p(e, [t]) {
			s && s.p && (!n || 1 & t) && x(s, r, e, e[0], n ? k(r, e[0], t, null) : b(e[0]), null);
		},
		i(e) {
			n || (be(s, e), (n = !0));
		},
		o(e) {
			we(s, e), (n = !1);
		},
		d(e) {
			e && A(t), s && s.d(e);
		}
	};
}
function Ir(e, t, n) {
	let { $$slots: r = {}, $$scope: s } = t;
	return (
		(e.$$set = (e) => {
			'$$scope' in e && n(0, (s = e.$$scope));
		}),
		[s, r]
	);
}
function Rr(e) {
	let t, n, r;
	return {
		c() {
			(t = R('pre')), (n = R('code')), (r = L(e[1])), this.h();
		},
		l(s) {
			t = Z(s, 'PRE', { class: !0 });
			var l = D(t);
			n = Z(l, 'CODE', {});
			var i = D(n);
			(r = H(i, e[1])), i.forEach(A), l.forEach(A), this.h();
		},
		h() {
			C(t, 'class', e[0]);
		},
		m(e, s) {
			T(e, t, s), z(t, n), z(n, r);
		},
		p(e, [n]) {
			2 & n && F(r, e[1]), 1 & n && C(t, 'class', e[0]);
		},
		i: i,
		o: i,
		d(e) {
			e && A(t);
		}
	};
}
function Nr(e, t, n) {
	let { lang: r } = t,
		{ text: s } = t;
	return (
		(e.$$set = (e) => {
			'lang' in e && n(0, (r = e.lang)), 'text' in e && n(1, (s = e.text));
		}),
		[r, s]
	);
}
function Lr(e) {
	let t, n;
	const r = e[1].default,
		s = m(r, e, e[0], null);
	return {
		c() {
			(t = R('br')), s && s.c();
		},
		l(e) {
			(t = Z(e, 'BR', {})), s && s.l(e);
		},
		m(e, r) {
			T(e, t, r), s && s.m(e, r), (n = !0);
		},
		p(e, [t]) {
			s && s.p && (!n || 1 & t) && x(s, r, e, e[0], n ? k(r, e[0], t, null) : b(e[0]), null);
		},
		i(e) {
			n || (be(s, e), (n = !0));
		},
		o(e) {
			we(s, e), (n = !1);
		},
		d(e) {
			e && A(t), s && s.d(e);
		}
	};
}
function Pr(e, t, n) {
	let { $$slots: r = {}, $$scope: s } = t;
	return (
		(e.$$set = (e) => {
			'$$scope' in e && n(0, (s = e.$$scope));
		}),
		[s, r]
	);
}
const Or = {
		heading: class extends Ie {
			constructor(e) {
				super(), Ae(this, e, Wn, Hn, f, { depth: 0, raw: 1 });
			}
		},
		paragraph: class extends Ie {
			constructor(e) {
				super(), Ae(this, e, Fn, Gn, f, {});
			}
		},
		text: class extends Ie {
			constructor(e) {
				super(), Ae(this, e, Qn, Kn, f, { text: 0, raw: 1 });
			}
		},
		image: class extends Ie {
			constructor(e) {
				super(), Ae(this, e, Xn, Vn, f, { href: 0, title: 1, text: 2 });
			}
		},
		link: class extends Ie {
			constructor(e) {
				super(), Ae(this, e, Yn, Jn, f, { href: 0, title: 1 });
			}
		},
		em: class extends Ie {
			constructor(e) {
				super(), Ae(this, e, tr, er, f, {});
			}
		},
		strong: class extends Ie {
			constructor(e) {
				super(), Ae(this, e, or, ir, f, {});
			}
		},
		codespan: class extends Ie {
			constructor(e) {
				super(), Ae(this, e, lr, sr, f, { raw: 0 });
			}
		},
		del: class extends Ie {
			constructor(e) {
				super(), Ae(this, e, rr, nr, f, {});
			}
		},
		table: class extends Ie {
			constructor(e) {
				super(), Ae(this, e, cr, ar, f, {});
			}
		},
		tablehead: class extends Ie {
			constructor(e) {
				super(), Ae(this, e, hr, ur, f, {});
			}
		},
		tablebody: class extends Ie {
			constructor(e) {
				super(), Ae(this, e, pr, fr, f, {});
			}
		},
		tablerow: class extends Ie {
			constructor(e) {
				super(), Ae(this, e, gr, dr, f, {});
			}
		},
		tablecell: class extends Ie {
			constructor(e) {
				super(), Ae(this, e, xr, kr, f, { header: 0, align: 1 });
			}
		},
		list: class extends Ie {
			constructor(e) {
				super(), Ae(this, e, _r, yr, f, { ordered: 0, start: 1 });
			}
		},
		orderedlistitem: null,
		unorderedlistitem: null,
		listitem: class extends Ie {
			constructor(e) {
				super(), Ae(this, e, Sr, vr, f, {});
			}
		},
		hr: class extends Ie {
			constructor(e) {
				super(), Ae(this, e, null, zr, f, {});
			}
		},
		html: class extends Ie {
			constructor(e) {
				super(), Ae(this, e, Tr, Er, f, { text: 0 });
			}
		},
		blockquote: class extends Ie {
			constructor(e) {
				super(), Ae(this, e, Ir, Ar, f, {});
			}
		},
		code: class extends Ie {
			constructor(e) {
				super(), Ae(this, e, Nr, Rr, f, { lang: 0, text: 1 });
			}
		},
		br: class extends Ie {
			constructor(e) {
				super(), Ae(this, e, Pr, Lr, f, {});
			}
		}
	},
	jr = {
		baseUrl: null,
		breaks: !1,
		gfm: !0,
		headerIds: !0,
		headerPrefix: '',
		highlight: null,
		langPrefix: 'language-',
		mangle: !0,
		pedantic: !1,
		renderer: null,
		sanitize: !1,
		sanitizer: null,
		silent: !1,
		smartLists: !1,
		smartypants: !1,
		tokenizer: null,
		xhtml: !1
	},
	Cr = jn.Lexer;
function Dr(e) {
	let t, n;
	return (
		(t = new vt({ props: { tokens: e[0], renderers: e[1] } })),
		{
			c() {
				ve(t.$$.fragment);
			},
			l(e) {
				Se(t.$$.fragment, e);
			},
			m(e, r) {
				ze(t, e, r), (n = !0);
			},
			p(e, [n]) {
				const r = {};
				1 & n && (r.tokens = e[0]), 2 & n && (r.renderers = e[1]), t.$set(r);
			},
			i(e) {
				n || (be(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				we(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				Ee(t, e);
			}
		}
	);
}
function qr(e, t, n) {
	let r,
		{ source: s = '' } = t,
		{ renderers: i = {} } = t,
		{ options: o = {} } = t,
		{ isInline: a = !1 } = t;
	const c = ne();
	let u, h, f;
	return (
		ee(() => {
			n(7, (f = !0));
		}),
		(e.$$set = (e) => {
			'source' in e && n(2, (s = e.source)),
				'renderers' in e && n(3, (i = e.renderers)),
				'options' in e && n(4, (o = e.options)),
				'isInline' in e && n(5, (a = e.isInline));
		}),
		(e.$$.update = () => {
			116 & e.$$.dirty &&
				(n(6, (h = new Cr(l(l({}, jr), o)))), n(0, (u = a ? h.inlineTokens(s) : h.lex(s)))),
				8 & e.$$.dirty && n(1, (r = l(l({}, Or), i))),
				129 & e.$$.dirty && f && c('parsed', { tokens: u });
		}),
		[u, r, s, i, o, a, h, f]
	);
}
class Ur extends Ie {
	constructor(e) {
		super(), Ae(this, e, qr, Dr, f, { source: 2, renderers: 3, options: 4, isInline: 5 });
	}
}
export {
	o as A,
	ke as B,
	Ne as C,
	N as D,
	M as E,
	Q as F,
	K as G,
	z as H,
	i as I,
	g as J,
	j as K,
	Ze as L,
	Le as M,
	m as N,
	V as O,
	x as P,
	b as Q,
	k as R,
	Ie as S,
	se as T,
	Ur as U,
	I as V,
	D as a,
	C as b,
	Z as c,
	A as d,
	R as e,
	T as f,
	H as g,
	F as h,
	Ae as i,
	ve as j,
	P as k,
	O as l,
	Se as m,
	W as n,
	ze as o,
	ye as p,
	_e as q,
	we as r,
	f as s,
	L as t,
	xe as u,
	be as v,
	Ee as w,
	re as x,
	te as y,
	ee as z
};
