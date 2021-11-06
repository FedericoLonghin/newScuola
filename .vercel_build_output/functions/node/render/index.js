var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = {exports: {}}).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse;
    exports.serialize = serialize;
    var decode = decodeURIComponent;
    var encode = encodeURIComponent;
    var pairSplitRegExp = /; */;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse(str, options2) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options2 || {};
      var pairs = str.split(pairSplitRegExp);
      var dec = opt.decode || decode;
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        var eq_idx = pair.indexOf("=");
        if (eq_idx < 0) {
          continue;
        }
        var key = pair.substr(0, eq_idx).trim();
        var val = pair.substr(++eq_idx, pair.length).trim();
        if (val[0] == '"') {
          val = val.slice(1, -1);
        }
        if (obj[key] == void 0) {
          obj[key] = tryDecode(val, dec);
        }
      }
      return obj;
    }
    function serialize(name, val, options2) {
      var opt = options2 || {};
      var enc = opt.encode || encode;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (opt.maxAge != null) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        if (typeof opt.expires.toUTCString !== "function") {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + opt.expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// node_modules/workbox-window/build/workbox-window.prod.umd.js
var require_workbox_window_prod_umd = __commonJS({
  "node_modules/workbox-window/build/workbox-window.prod.umd.js"(exports, module2) {
    !function(n, t) {
      typeof exports == "object" && typeof module2 != "undefined" ? t(exports) : typeof define == "function" && define.amd ? define(["exports"], t) : t((n = typeof globalThis != "undefined" ? globalThis : n || self).workbox = {});
    }(exports, function(n) {
      "use strict";
      try {
        self["workbox:window:6.1.5"] && _();
      } catch (n2) {
      }
      function t(n2, t2) {
        return new Promise(function(r2) {
          var e2 = new MessageChannel();
          e2.port1.onmessage = function(n3) {
            r2(n3.data);
          }, n2.postMessage(t2, [e2.port2]);
        });
      }
      function r(n2, t2) {
        for (var r2 = 0; r2 < t2.length; r2++) {
          var e2 = t2[r2];
          e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(n2, e2.key, e2);
        }
      }
      function e(n2, t2) {
        (t2 == null || t2 > n2.length) && (t2 = n2.length);
        for (var r2 = 0, e2 = new Array(t2); r2 < t2; r2++)
          e2[r2] = n2[r2];
        return e2;
      }
      function i(n2, t2) {
        var r2;
        if (typeof Symbol == "undefined" || n2[Symbol.iterator] == null) {
          if (Array.isArray(n2) || (r2 = function(n3, t3) {
            if (n3) {
              if (typeof n3 == "string")
                return e(n3, t3);
              var r3 = Object.prototype.toString.call(n3).slice(8, -1);
              return r3 === "Object" && n3.constructor && (r3 = n3.constructor.name), r3 === "Map" || r3 === "Set" ? Array.from(n3) : r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3) ? e(n3, t3) : void 0;
            }
          }(n2)) || t2 && n2 && typeof n2.length == "number") {
            r2 && (n2 = r2);
            var i2 = 0;
            return function() {
              return i2 >= n2.length ? {done: true} : {done: false, value: n2[i2++]};
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        return (r2 = n2[Symbol.iterator]()).next.bind(r2);
      }
      try {
        self["workbox:core:6.1.5"] && _();
      } catch (n2) {
      }
      var o = function() {
        var n2 = this;
        this.promise = new Promise(function(t2, r2) {
          n2.resolve = t2, n2.reject = r2;
        });
      };
      function u(n2, t2) {
        var r2 = location.href;
        return new URL(n2, r2).href === new URL(t2, r2).href;
      }
      var a = function(n2, t2) {
        this.type = n2, Object.assign(this, t2);
      };
      function c(n2, t2, r2) {
        return r2 ? t2 ? t2(n2) : n2 : (n2 && n2.then || (n2 = Promise.resolve(n2)), t2 ? n2.then(t2) : n2);
      }
      function f() {
      }
      var s2 = {type: "SKIP_WAITING"};
      function v(n2, t2) {
        if (!t2)
          return n2 && n2.then ? n2.then(f) : Promise.resolve();
      }
      var h = function(n2) {
        var e2, i2;
        function f2(t2, r2) {
          var e3, i3;
          return r2 === void 0 && (r2 = {}), (e3 = n2.call(this) || this).nn = {}, e3.tn = 0, e3.rn = new o(), e3.en = new o(), e3.on = new o(), e3.un = 0, e3.an = new Set(), e3.cn = function() {
            var n3 = e3.fn, t3 = n3.installing;
            e3.tn > 0 || !u(t3.scriptURL, e3.sn) || performance.now() > e3.un + 6e4 ? (e3.vn = t3, n3.removeEventListener("updatefound", e3.cn)) : (e3.hn = t3, e3.an.add(t3), e3.rn.resolve(t3)), ++e3.tn, t3.addEventListener("statechange", e3.ln);
          }, e3.ln = function(n3) {
            var t3 = e3.fn, r3 = n3.target, i4 = r3.state, o2 = r3 === e3.vn, u2 = {sw: r3, isExternal: o2, originalEvent: n3};
            !o2 && e3.dn && (u2.isUpdate = true), e3.dispatchEvent(new a(i4, u2)), i4 === "installed" ? e3.mn = self.setTimeout(function() {
              i4 === "installed" && t3.waiting === r3 && e3.dispatchEvent(new a("waiting", u2));
            }, 200) : i4 === "activating" && (clearTimeout(e3.mn), o2 || e3.en.resolve(r3));
          }, e3.wn = function(n3) {
            var t3 = e3.hn, r3 = t3 !== navigator.serviceWorker.controller;
            e3.dispatchEvent(new a("controlling", {isExternal: r3, originalEvent: n3, sw: t3, isUpdate: e3.dn})), r3 || e3.on.resolve(t3);
          }, e3.gn = (i3 = function(n3) {
            var t3 = n3.data, r3 = n3.source;
            return c(e3.getSW(), function() {
              e3.an.has(r3) && e3.dispatchEvent(new a("message", {data: t3, sw: r3, originalEvent: n3}));
            });
          }, function() {
            for (var n3 = [], t3 = 0; t3 < arguments.length; t3++)
              n3[t3] = arguments[t3];
            try {
              return Promise.resolve(i3.apply(this, n3));
            } catch (n4) {
              return Promise.reject(n4);
            }
          }), e3.sn = t2, e3.nn = r2, navigator.serviceWorker.addEventListener("message", e3.gn), e3;
        }
        i2 = n2, (e2 = f2).prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, e2.__proto__ = i2;
        var h2, l, d, m = f2.prototype;
        return m.register = function(n3) {
          var t2 = (n3 === void 0 ? {} : n3).immediate, r2 = t2 !== void 0 && t2;
          try {
            var e3 = this;
            return function(n4, t3) {
              var r3 = n4();
              if (r3 && r3.then)
                return r3.then(t3);
              return t3(r3);
            }(function() {
              if (!r2 && document.readyState !== "complete")
                return v(new Promise(function(n4) {
                  return window.addEventListener("load", n4);
                }));
            }, function() {
              return e3.dn = Boolean(navigator.serviceWorker.controller), e3.yn = e3.pn(), c(e3.bn(), function(n4) {
                e3.fn = n4, e3.yn && (e3.hn = e3.yn, e3.en.resolve(e3.yn), e3.on.resolve(e3.yn), e3.yn.addEventListener("statechange", e3.ln, {once: true}));
                var t3 = e3.fn.waiting;
                return t3 && u(t3.scriptURL, e3.sn) && (e3.hn = t3, Promise.resolve().then(function() {
                  e3.dispatchEvent(new a("waiting", {sw: t3, wasWaitingBeforeRegister: true}));
                }).then(function() {
                })), e3.hn && (e3.rn.resolve(e3.hn), e3.an.add(e3.hn)), e3.fn.addEventListener("updatefound", e3.cn), navigator.serviceWorker.addEventListener("controllerchange", e3.wn, {once: true}), e3.fn;
              });
            });
          } catch (n4) {
            return Promise.reject(n4);
          }
        }, m.update = function() {
          try {
            return this.fn ? v(this.fn.update()) : void 0;
          } catch (n3) {
            return Promise.reject(n3);
          }
        }, m.getSW = function() {
          return this.hn !== void 0 ? Promise.resolve(this.hn) : this.rn.promise;
        }, m.messageSW = function(n3) {
          try {
            return c(this.getSW(), function(r2) {
              return t(r2, n3);
            });
          } catch (n4) {
            return Promise.reject(n4);
          }
        }, m.messageSkipWaiting = function() {
          this.fn && this.fn.waiting && t(this.fn.waiting, s2);
        }, m.pn = function() {
          var n3 = navigator.serviceWorker.controller;
          return n3 && u(n3.scriptURL, this.sn) ? n3 : void 0;
        }, m.bn = function() {
          try {
            var n3 = this;
            return function(n4, t2) {
              try {
                var r2 = n4();
              } catch (n5) {
                return t2(n5);
              }
              if (r2 && r2.then)
                return r2.then(void 0, t2);
              return r2;
            }(function() {
              return c(navigator.serviceWorker.register(n3.sn, n3.nn), function(t2) {
                return n3.un = performance.now(), t2;
              });
            }, function(n4) {
              throw n4;
            });
          } catch (n4) {
            return Promise.reject(n4);
          }
        }, h2 = f2, (l = [{key: "active", get: function() {
          return this.en.promise;
        }}, {key: "controlling", get: function() {
          return this.on.promise;
        }}]) && r(h2.prototype, l), d && r(h2, d), f2;
      }(function() {
        function n2() {
          this.Pn = new Map();
        }
        var t2 = n2.prototype;
        return t2.addEventListener = function(n3, t3) {
          this.jn(n3).add(t3);
        }, t2.removeEventListener = function(n3, t3) {
          this.jn(n3).delete(t3);
        }, t2.dispatchEvent = function(n3) {
          n3.target = this;
          for (var t3, r2 = i(this.jn(n3.type)); !(t3 = r2()).done; ) {
            (0, t3.value)(n3);
          }
        }, t2.jn = function(n3) {
          return this.Pn.has(n3) || this.Pn.set(n3, new Set()), this.Pn.get(n3);
        }, n2;
      }());
      n.Workbox = h, n.messageSW = t, Object.defineProperty(n, "__esModule", {value: true});
    });
  }
});

// node_modules/snarkdown/dist/snarkdown.js
var require_snarkdown = __commonJS({
  "node_modules/snarkdown/dist/snarkdown.js"(exports, module2) {
    var e = {"": ["<em>", "</em>"], _: ["<strong>", "</strong>"], "*": ["<strong>", "</strong>"], "~": ["<s>", "</s>"], "\n": ["<br />"], " ": ["<br />"], "-": ["<hr />"]};
    function n(e2) {
      return e2.replace(RegExp("^" + (e2.match(/^(\t| )+/) || "")[0], "gm"), "");
    }
    function r(e2) {
      return (e2 + "").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    module2.exports = function t(a, o) {
      var c, l, s2, g, p, u = /((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm, m = [], h = "", i = o || {}, d = 0;
      function $(n2) {
        var r2 = e[n2[1] || ""], t2 = m[m.length - 1] == n2;
        return r2 ? r2[1] ? (t2 ? m.pop() : m.push(n2), r2[0 | t2]) : r2[0] : n2;
      }
      function f() {
        for (var e2 = ""; m.length; )
          e2 += $(m[m.length - 1]);
        return e2;
      }
      for (a = a.replace(/^\[(.+?)\]:\s*(.+)$/gm, function(e2, n2, r2) {
        return i[n2.toLowerCase()] = r2, "";
      }).replace(/^\n+|\n+$/g, ""); s2 = u.exec(a); )
        l = a.substring(d, s2.index), d = u.lastIndex, c = s2[0], l.match(/[^\\](\\\\)*\\$/) || ((p = s2[3] || s2[4]) ? c = '<pre class="code ' + (s2[4] ? "poetry" : s2[2].toLowerCase()) + '"><code' + (s2[2] ? ' class="language-' + s2[2].toLowerCase() + '"' : "") + ">" + n(r(p).replace(/^\n+|\n+$/g, "")) + "</code></pre>" : (p = s2[6]) ? (p.match(/\./) && (s2[5] = s2[5].replace(/^\d+/gm, "")), g = t(n(s2[5].replace(/^\s*[>*+.-]/gm, ""))), p == ">" ? p = "blockquote" : (p = p.match(/\./) ? "ol" : "ul", g = g.replace(/^(.*)(\n|$)/gm, "<li>$1</li>")), c = "<" + p + ">" + g + "</" + p + ">") : s2[8] ? c = '<img src="' + r(s2[8]) + '" alt="' + r(s2[7]) + '">' : s2[10] ? (h = h.replace("<a>", '<a href="' + r(s2[11] || i[l.toLowerCase()]) + '">'), c = f() + "</a>") : s2[9] ? c = "<a>" : s2[12] || s2[14] ? c = "<" + (p = "h" + (s2[14] ? s2[14].length : s2[13] > "=" ? 1 : 2)) + ">" + t(s2[12] || s2[15], i) + "</" + p + ">" : s2[16] ? c = "<code>" + r(s2[16]) + "</code>" : (s2[17] || s2[1]) && (c = $(s2[17] || "--"))), h += l, h += c;
      return (h + a.substring(d) + f()).replace(/^\n+|\n+$/g, "");
    };
  }
});

// .svelte-kit/vercel/entry.js
__markAsModule(exports);
__export(exports, {
  default: () => entry_default
});

// node_modules/@sveltejs/kit/dist/node.js
function getRawBody(req) {
  return new Promise((fulfil, reject) => {
    const h = req.headers;
    if (!h["content-type"]) {
      fulfil(null);
      return;
    }
    req.on("error", reject);
    const length = Number(h["content-length"]);
    let data;
    if (!isNaN(length)) {
      data = new Uint8Array(length);
      let i = 0;
      req.on("data", (chunk) => {
        data.set(chunk, i);
        i += chunk.length;
      });
    } else {
      if (h["transfer-encoding"] === void 0) {
        fulfil(null);
        return;
      }
      data = new Uint8Array(0);
      req.on("data", (chunk) => {
        const new_data = new Uint8Array(data.length + chunk.length);
        new_data.set(data);
        new_data.set(chunk, data.length);
        data = new_data;
      });
    }
    req.on("end", () => {
      const [type] = h["content-type"].split(/;\s*/);
      if (type === "application/octet-stream") {
        fulfil(data);
      }
      const decoder = new TextDecoder(h["content-encoding"] || "utf-8");
      fulfil(decoder.decode(data));
    });
  });
}

// node_modules/@sveltejs/kit/dist/install-fetch.js
var import_http = __toModule(require("http"));
var import_https = __toModule(require("https"));
var import_zlib = __toModule(require("zlib"));
var import_stream = __toModule(require("stream"));
var import_util = __toModule(require("util"));
var import_crypto = __toModule(require("crypto"));
var import_url = __toModule(require("url"));
function dataUriToBuffer(uri) {
  if (!/^data:/i.test(uri)) {
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  }
  uri = uri.replace(/\r?\n/g, "");
  const firstComma = uri.indexOf(",");
  if (firstComma === -1 || firstComma <= 4) {
    throw new TypeError("malformed data: URI");
  }
  const meta = uri.substring(5, firstComma).split(";");
  let charset = "";
  let base64 = false;
  const type = meta[0] || "text/plain";
  let typeFull = type;
  for (let i = 1; i < meta.length; i++) {
    if (meta[i] === "base64") {
      base64 = true;
    } else {
      typeFull += `;${meta[i]}`;
      if (meta[i].indexOf("charset=") === 0) {
        charset = meta[i].substring(8);
      }
    }
  }
  if (!meta[0] && !charset.length) {
    typeFull += ";charset=US-ASCII";
    charset = "US-ASCII";
  }
  const encoding = base64 ? "base64" : "ascii";
  const data = unescape(uri.substring(firstComma + 1));
  const buffer = Buffer.from(data, encoding);
  buffer.type = type;
  buffer.typeFull = typeFull;
  buffer.charset = charset;
  return buffer;
}
var src = dataUriToBuffer;
var {Readable} = import_stream.default;
var wm = new WeakMap();
async function* read(parts) {
  for (const part of parts) {
    if ("stream" in part) {
      yield* part.stream();
    } else {
      yield part;
    }
  }
}
var Blob = class {
  constructor(blobParts = [], options2 = {}) {
    let size = 0;
    const parts = blobParts.map((element) => {
      let buffer;
      if (element instanceof Buffer) {
        buffer = element;
      } else if (ArrayBuffer.isView(element)) {
        buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
      } else if (element instanceof ArrayBuffer) {
        buffer = Buffer.from(element);
      } else if (element instanceof Blob) {
        buffer = element;
      } else {
        buffer = Buffer.from(typeof element === "string" ? element : String(element));
      }
      size += buffer.length || buffer.size || 0;
      return buffer;
    });
    const type = options2.type === void 0 ? "" : String(options2.type).toLowerCase();
    wm.set(this, {
      type: /[^\u0020-\u007E]/.test(type) ? "" : type,
      size,
      parts
    });
  }
  get size() {
    return wm.get(this).size;
  }
  get type() {
    return wm.get(this).type;
  }
  async text() {
    return Buffer.from(await this.arrayBuffer()).toString();
  }
  async arrayBuffer() {
    const data = new Uint8Array(this.size);
    let offset = 0;
    for await (const chunk of this.stream()) {
      data.set(chunk, offset);
      offset += chunk.length;
    }
    return data.buffer;
  }
  stream() {
    return Readable.from(read(wm.get(this).parts));
  }
  slice(start = 0, end = this.size, type = "") {
    const {size} = this;
    let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
    let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
    const span = Math.max(relativeEnd - relativeStart, 0);
    const parts = wm.get(this).parts.values();
    const blobParts = [];
    let added = 0;
    for (const part of parts) {
      const size2 = ArrayBuffer.isView(part) ? part.byteLength : part.size;
      if (relativeStart && size2 <= relativeStart) {
        relativeStart -= size2;
        relativeEnd -= size2;
      } else {
        const chunk = part.slice(relativeStart, Math.min(size2, relativeEnd));
        blobParts.push(chunk);
        added += ArrayBuffer.isView(chunk) ? chunk.byteLength : chunk.size;
        relativeStart = 0;
        if (added >= span) {
          break;
        }
      }
    }
    const blob = new Blob([], {type: String(type).toLowerCase()});
    Object.assign(wm.get(blob), {size: span, parts: blobParts});
    return blob;
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
  static [Symbol.hasInstance](object) {
    return object && typeof object === "object" && typeof object.stream === "function" && object.stream.length === 0 && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
  }
};
Object.defineProperties(Blob.prototype, {
  size: {enumerable: true},
  type: {enumerable: true},
  slice: {enumerable: true}
});
var fetchBlob = Blob;
var FetchBaseError = class extends Error {
  constructor(message, type) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.type = type;
  }
  get name() {
    return this.constructor.name;
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
};
var FetchError = class extends FetchBaseError {
  constructor(message, type, systemError) {
    super(message, type);
    if (systemError) {
      this.code = this.errno = systemError.code;
      this.erroredSysCall = systemError.syscall;
    }
  }
};
var NAME = Symbol.toStringTag;
var isURLSearchParameters = (object) => {
  return typeof object === "object" && typeof object.append === "function" && typeof object.delete === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.has === "function" && typeof object.set === "function" && typeof object.sort === "function" && object[NAME] === "URLSearchParams";
};
var isBlob = (object) => {
  return typeof object === "object" && typeof object.arrayBuffer === "function" && typeof object.type === "string" && typeof object.stream === "function" && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[NAME]);
};
function isFormData(object) {
  return typeof object === "object" && typeof object.append === "function" && typeof object.set === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.delete === "function" && typeof object.keys === "function" && typeof object.values === "function" && typeof object.entries === "function" && typeof object.constructor === "function" && object[NAME] === "FormData";
}
var isAbortSignal = (object) => {
  return typeof object === "object" && object[NAME] === "AbortSignal";
};
var carriage = "\r\n";
var dashes = "-".repeat(2);
var carriageLength = Buffer.byteLength(carriage);
var getFooter = (boundary) => `${dashes}${boundary}${dashes}${carriage.repeat(2)}`;
function getHeader(boundary, name, field) {
  let header = "";
  header += `${dashes}${boundary}${carriage}`;
  header += `Content-Disposition: form-data; name="${name}"`;
  if (isBlob(field)) {
    header += `; filename="${field.name}"${carriage}`;
    header += `Content-Type: ${field.type || "application/octet-stream"}`;
  }
  return `${header}${carriage.repeat(2)}`;
}
var getBoundary = () => (0, import_crypto.randomBytes)(8).toString("hex");
async function* formDataIterator(form, boundary) {
  for (const [name, value] of form) {
    yield getHeader(boundary, name, value);
    if (isBlob(value)) {
      yield* value.stream();
    } else {
      yield value;
    }
    yield carriage;
  }
  yield getFooter(boundary);
}
function getFormDataLength(form, boundary) {
  let length = 0;
  for (const [name, value] of form) {
    length += Buffer.byteLength(getHeader(boundary, name, value));
    if (isBlob(value)) {
      length += value.size;
    } else {
      length += Buffer.byteLength(String(value));
    }
    length += carriageLength;
  }
  length += Buffer.byteLength(getFooter(boundary));
  return length;
}
var INTERNALS$2 = Symbol("Body internals");
var Body = class {
  constructor(body, {
    size = 0
  } = {}) {
    let boundary = null;
    if (body === null) {
      body = null;
    } else if (isURLSearchParameters(body)) {
      body = Buffer.from(body.toString());
    } else if (isBlob(body))
      ;
    else if (Buffer.isBuffer(body))
      ;
    else if (import_util.types.isAnyArrayBuffer(body)) {
      body = Buffer.from(body);
    } else if (ArrayBuffer.isView(body)) {
      body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
    } else if (body instanceof import_stream.default)
      ;
    else if (isFormData(body)) {
      boundary = `NodeFetchFormDataBoundary${getBoundary()}`;
      body = import_stream.default.Readable.from(formDataIterator(body, boundary));
    } else {
      body = Buffer.from(String(body));
    }
    this[INTERNALS$2] = {
      body,
      boundary,
      disturbed: false,
      error: null
    };
    this.size = size;
    if (body instanceof import_stream.default) {
      body.on("error", (err) => {
        const error3 = err instanceof FetchBaseError ? err : new FetchError(`Invalid response body while trying to fetch ${this.url}: ${err.message}`, "system", err);
        this[INTERNALS$2].error = error3;
      });
    }
  }
  get body() {
    return this[INTERNALS$2].body;
  }
  get bodyUsed() {
    return this[INTERNALS$2].disturbed;
  }
  async arrayBuffer() {
    const {buffer, byteOffset, byteLength} = await consumeBody(this);
    return buffer.slice(byteOffset, byteOffset + byteLength);
  }
  async blob() {
    const ct = this.headers && this.headers.get("content-type") || this[INTERNALS$2].body && this[INTERNALS$2].body.type || "";
    const buf = await this.buffer();
    return new fetchBlob([buf], {
      type: ct
    });
  }
  async json() {
    const buffer = await consumeBody(this);
    return JSON.parse(buffer.toString());
  }
  async text() {
    const buffer = await consumeBody(this);
    return buffer.toString();
  }
  buffer() {
    return consumeBody(this);
  }
};
Object.defineProperties(Body.prototype, {
  body: {enumerable: true},
  bodyUsed: {enumerable: true},
  arrayBuffer: {enumerable: true},
  blob: {enumerable: true},
  json: {enumerable: true},
  text: {enumerable: true}
});
async function consumeBody(data) {
  if (data[INTERNALS$2].disturbed) {
    throw new TypeError(`body used already for: ${data.url}`);
  }
  data[INTERNALS$2].disturbed = true;
  if (data[INTERNALS$2].error) {
    throw data[INTERNALS$2].error;
  }
  let {body} = data;
  if (body === null) {
    return Buffer.alloc(0);
  }
  if (isBlob(body)) {
    body = body.stream();
  }
  if (Buffer.isBuffer(body)) {
    return body;
  }
  if (!(body instanceof import_stream.default)) {
    return Buffer.alloc(0);
  }
  const accum = [];
  let accumBytes = 0;
  try {
    for await (const chunk of body) {
      if (data.size > 0 && accumBytes + chunk.length > data.size) {
        const err = new FetchError(`content size at ${data.url} over limit: ${data.size}`, "max-size");
        body.destroy(err);
        throw err;
      }
      accumBytes += chunk.length;
      accum.push(chunk);
    }
  } catch (error3) {
    if (error3 instanceof FetchBaseError) {
      throw error3;
    } else {
      throw new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error3.message}`, "system", error3);
    }
  }
  if (body.readableEnded === true || body._readableState.ended === true) {
    try {
      if (accum.every((c) => typeof c === "string")) {
        return Buffer.from(accum.join(""));
      }
      return Buffer.concat(accum, accumBytes);
    } catch (error3) {
      throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error3.message}`, "system", error3);
    }
  } else {
    throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`);
  }
}
var clone = (instance, highWaterMark) => {
  let p1;
  let p2;
  let {body} = instance;
  if (instance.bodyUsed) {
    throw new Error("cannot clone body after it is used");
  }
  if (body instanceof import_stream.default && typeof body.getBoundary !== "function") {
    p1 = new import_stream.PassThrough({highWaterMark});
    p2 = new import_stream.PassThrough({highWaterMark});
    body.pipe(p1);
    body.pipe(p2);
    instance[INTERNALS$2].body = p1;
    body = p2;
  }
  return body;
};
var extractContentType = (body, request) => {
  if (body === null) {
    return null;
  }
  if (typeof body === "string") {
    return "text/plain;charset=UTF-8";
  }
  if (isURLSearchParameters(body)) {
    return "application/x-www-form-urlencoded;charset=UTF-8";
  }
  if (isBlob(body)) {
    return body.type || null;
  }
  if (Buffer.isBuffer(body) || import_util.types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
    return null;
  }
  if (body && typeof body.getBoundary === "function") {
    return `multipart/form-data;boundary=${body.getBoundary()}`;
  }
  if (isFormData(body)) {
    return `multipart/form-data; boundary=${request[INTERNALS$2].boundary}`;
  }
  if (body instanceof import_stream.default) {
    return null;
  }
  return "text/plain;charset=UTF-8";
};
var getTotalBytes = (request) => {
  const {body} = request;
  if (body === null) {
    return 0;
  }
  if (isBlob(body)) {
    return body.size;
  }
  if (Buffer.isBuffer(body)) {
    return body.length;
  }
  if (body && typeof body.getLengthSync === "function") {
    return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
  }
  if (isFormData(body)) {
    return getFormDataLength(request[INTERNALS$2].boundary);
  }
  return null;
};
var writeToStream = (dest, {body}) => {
  if (body === null) {
    dest.end();
  } else if (isBlob(body)) {
    body.stream().pipe(dest);
  } else if (Buffer.isBuffer(body)) {
    dest.write(body);
    dest.end();
  } else {
    body.pipe(dest);
  }
};
var validateHeaderName = typeof import_http.default.validateHeaderName === "function" ? import_http.default.validateHeaderName : (name) => {
  if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
    const err = new TypeError(`Header name must be a valid HTTP token [${name}]`);
    Object.defineProperty(err, "code", {value: "ERR_INVALID_HTTP_TOKEN"});
    throw err;
  }
};
var validateHeaderValue = typeof import_http.default.validateHeaderValue === "function" ? import_http.default.validateHeaderValue : (name, value) => {
  if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
    const err = new TypeError(`Invalid character in header content ["${name}"]`);
    Object.defineProperty(err, "code", {value: "ERR_INVALID_CHAR"});
    throw err;
  }
};
var Headers = class extends URLSearchParams {
  constructor(init2) {
    let result = [];
    if (init2 instanceof Headers) {
      const raw = init2.raw();
      for (const [name, values] of Object.entries(raw)) {
        result.push(...values.map((value) => [name, value]));
      }
    } else if (init2 == null)
      ;
    else if (typeof init2 === "object" && !import_util.types.isBoxedPrimitive(init2)) {
      const method = init2[Symbol.iterator];
      if (method == null) {
        result.push(...Object.entries(init2));
      } else {
        if (typeof method !== "function") {
          throw new TypeError("Header pairs must be iterable");
        }
        result = [...init2].map((pair) => {
          if (typeof pair !== "object" || import_util.types.isBoxedPrimitive(pair)) {
            throw new TypeError("Each header pair must be an iterable object");
          }
          return [...pair];
        }).map((pair) => {
          if (pair.length !== 2) {
            throw new TypeError("Each header pair must be a name/value tuple");
          }
          return [...pair];
        });
      }
    } else {
      throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
    }
    result = result.length > 0 ? result.map(([name, value]) => {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return [String(name).toLowerCase(), String(value)];
    }) : void 0;
    super(result);
    return new Proxy(this, {
      get(target, p, receiver) {
        switch (p) {
          case "append":
          case "set":
            return (name, value) => {
              validateHeaderName(name);
              validateHeaderValue(name, String(value));
              return URLSearchParams.prototype[p].call(receiver, String(name).toLowerCase(), String(value));
            };
          case "delete":
          case "has":
          case "getAll":
            return (name) => {
              validateHeaderName(name);
              return URLSearchParams.prototype[p].call(receiver, String(name).toLowerCase());
            };
          case "keys":
            return () => {
              target.sort();
              return new Set(URLSearchParams.prototype.keys.call(target)).keys();
            };
          default:
            return Reflect.get(target, p, receiver);
        }
      }
    });
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
  toString() {
    return Object.prototype.toString.call(this);
  }
  get(name) {
    const values = this.getAll(name);
    if (values.length === 0) {
      return null;
    }
    let value = values.join(", ");
    if (/^content-encoding$/i.test(name)) {
      value = value.toLowerCase();
    }
    return value;
  }
  forEach(callback) {
    for (const name of this.keys()) {
      callback(this.get(name), name);
    }
  }
  *values() {
    for (const name of this.keys()) {
      yield this.get(name);
    }
  }
  *entries() {
    for (const name of this.keys()) {
      yield [name, this.get(name)];
    }
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  raw() {
    return [...this.keys()].reduce((result, key) => {
      result[key] = this.getAll(key);
      return result;
    }, {});
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return [...this.keys()].reduce((result, key) => {
      const values = this.getAll(key);
      if (key === "host") {
        result[key] = values[0];
      } else {
        result[key] = values.length > 1 ? values : values[0];
      }
      return result;
    }, {});
  }
};
Object.defineProperties(Headers.prototype, ["get", "entries", "forEach", "values"].reduce((result, property) => {
  result[property] = {enumerable: true};
  return result;
}, {}));
function fromRawHeaders(headers = []) {
  return new Headers(headers.reduce((result, value, index2, array) => {
    if (index2 % 2 === 0) {
      result.push(array.slice(index2, index2 + 2));
    }
    return result;
  }, []).filter(([name, value]) => {
    try {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return true;
    } catch {
      return false;
    }
  }));
}
var redirectStatus = new Set([301, 302, 303, 307, 308]);
var isRedirect = (code) => {
  return redirectStatus.has(code);
};
var INTERNALS$1 = Symbol("Response internals");
var Response2 = class extends Body {
  constructor(body = null, options2 = {}) {
    super(body, options2);
    const status = options2.status || 200;
    const headers = new Headers(options2.headers);
    if (body !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(body);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    this[INTERNALS$1] = {
      url: options2.url,
      status,
      statusText: options2.statusText || "",
      headers,
      counter: options2.counter,
      highWaterMark: options2.highWaterMark
    };
  }
  get url() {
    return this[INTERNALS$1].url || "";
  }
  get status() {
    return this[INTERNALS$1].status;
  }
  get ok() {
    return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
  }
  get redirected() {
    return this[INTERNALS$1].counter > 0;
  }
  get statusText() {
    return this[INTERNALS$1].statusText;
  }
  get headers() {
    return this[INTERNALS$1].headers;
  }
  get highWaterMark() {
    return this[INTERNALS$1].highWaterMark;
  }
  clone() {
    return new Response2(clone(this, this.highWaterMark), {
      url: this.url,
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
      ok: this.ok,
      redirected: this.redirected,
      size: this.size
    });
  }
  static redirect(url, status = 302) {
    if (!isRedirect(status)) {
      throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
    }
    return new Response2(null, {
      headers: {
        location: new URL(url).toString()
      },
      status
    });
  }
  get [Symbol.toStringTag]() {
    return "Response";
  }
};
Object.defineProperties(Response2.prototype, {
  url: {enumerable: true},
  status: {enumerable: true},
  ok: {enumerable: true},
  redirected: {enumerable: true},
  statusText: {enumerable: true},
  headers: {enumerable: true},
  clone: {enumerable: true}
});
var getSearch = (parsedURL) => {
  if (parsedURL.search) {
    return parsedURL.search;
  }
  const lastOffset = parsedURL.href.length - 1;
  const hash2 = parsedURL.hash || (parsedURL.href[lastOffset] === "#" ? "#" : "");
  return parsedURL.href[lastOffset - hash2.length] === "?" ? "?" : "";
};
var INTERNALS = Symbol("Request internals");
var isRequest = (object) => {
  return typeof object === "object" && typeof object[INTERNALS] === "object";
};
var Request = class extends Body {
  constructor(input, init2 = {}) {
    let parsedURL;
    if (isRequest(input)) {
      parsedURL = new URL(input.url);
    } else {
      parsedURL = new URL(input);
      input = {};
    }
    let method = init2.method || input.method || "GET";
    method = method.toUpperCase();
    if ((init2.body != null || isRequest(input)) && input.body !== null && (method === "GET" || method === "HEAD")) {
      throw new TypeError("Request with GET/HEAD method cannot have body");
    }
    const inputBody = init2.body ? init2.body : isRequest(input) && input.body !== null ? clone(input) : null;
    super(inputBody, {
      size: init2.size || input.size || 0
    });
    const headers = new Headers(init2.headers || input.headers || {});
    if (inputBody !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(inputBody, this);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    let signal = isRequest(input) ? input.signal : null;
    if ("signal" in init2) {
      signal = init2.signal;
    }
    if (signal !== null && !isAbortSignal(signal)) {
      throw new TypeError("Expected signal to be an instanceof AbortSignal");
    }
    this[INTERNALS] = {
      method,
      redirect: init2.redirect || input.redirect || "follow",
      headers,
      parsedURL,
      signal
    };
    this.follow = init2.follow === void 0 ? input.follow === void 0 ? 20 : input.follow : init2.follow;
    this.compress = init2.compress === void 0 ? input.compress === void 0 ? true : input.compress : init2.compress;
    this.counter = init2.counter || input.counter || 0;
    this.agent = init2.agent || input.agent;
    this.highWaterMark = init2.highWaterMark || input.highWaterMark || 16384;
    this.insecureHTTPParser = init2.insecureHTTPParser || input.insecureHTTPParser || false;
  }
  get method() {
    return this[INTERNALS].method;
  }
  get url() {
    return (0, import_url.format)(this[INTERNALS].parsedURL);
  }
  get headers() {
    return this[INTERNALS].headers;
  }
  get redirect() {
    return this[INTERNALS].redirect;
  }
  get signal() {
    return this[INTERNALS].signal;
  }
  clone() {
    return new Request(this);
  }
  get [Symbol.toStringTag]() {
    return "Request";
  }
};
Object.defineProperties(Request.prototype, {
  method: {enumerable: true},
  url: {enumerable: true},
  headers: {enumerable: true},
  redirect: {enumerable: true},
  clone: {enumerable: true},
  signal: {enumerable: true}
});
var getNodeRequestOptions = (request) => {
  const {parsedURL} = request[INTERNALS];
  const headers = new Headers(request[INTERNALS].headers);
  if (!headers.has("Accept")) {
    headers.set("Accept", "*/*");
  }
  let contentLengthValue = null;
  if (request.body === null && /^(post|put)$/i.test(request.method)) {
    contentLengthValue = "0";
  }
  if (request.body !== null) {
    const totalBytes = getTotalBytes(request);
    if (typeof totalBytes === "number" && !Number.isNaN(totalBytes)) {
      contentLengthValue = String(totalBytes);
    }
  }
  if (contentLengthValue) {
    headers.set("Content-Length", contentLengthValue);
  }
  if (!headers.has("User-Agent")) {
    headers.set("User-Agent", "node-fetch");
  }
  if (request.compress && !headers.has("Accept-Encoding")) {
    headers.set("Accept-Encoding", "gzip,deflate,br");
  }
  let {agent} = request;
  if (typeof agent === "function") {
    agent = agent(parsedURL);
  }
  if (!headers.has("Connection") && !agent) {
    headers.set("Connection", "close");
  }
  const search = getSearch(parsedURL);
  const requestOptions = {
    path: parsedURL.pathname + search,
    pathname: parsedURL.pathname,
    hostname: parsedURL.hostname,
    protocol: parsedURL.protocol,
    port: parsedURL.port,
    hash: parsedURL.hash,
    search: parsedURL.search,
    query: parsedURL.query,
    href: parsedURL.href,
    method: request.method,
    headers: headers[Symbol.for("nodejs.util.inspect.custom")](),
    insecureHTTPParser: request.insecureHTTPParser,
    agent
  };
  return requestOptions;
};
var AbortError = class extends FetchBaseError {
  constructor(message, type = "aborted") {
    super(message, type);
  }
};
var supportedSchemas = new Set(["data:", "http:", "https:"]);
async function fetch2(url, options_) {
  return new Promise((resolve2, reject) => {
    const request = new Request(url, options_);
    const options2 = getNodeRequestOptions(request);
    if (!supportedSchemas.has(options2.protocol)) {
      throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${options2.protocol.replace(/:$/, "")}" is not supported.`);
    }
    if (options2.protocol === "data:") {
      const data = src(request.url);
      const response2 = new Response2(data, {headers: {"Content-Type": data.typeFull}});
      resolve2(response2);
      return;
    }
    const send = (options2.protocol === "https:" ? import_https.default : import_http.default).request;
    const {signal} = request;
    let response = null;
    const abort = () => {
      const error3 = new AbortError("The operation was aborted.");
      reject(error3);
      if (request.body && request.body instanceof import_stream.default.Readable) {
        request.body.destroy(error3);
      }
      if (!response || !response.body) {
        return;
      }
      response.body.emit("error", error3);
    };
    if (signal && signal.aborted) {
      abort();
      return;
    }
    const abortAndFinalize = () => {
      abort();
      finalize();
    };
    const request_ = send(options2);
    if (signal) {
      signal.addEventListener("abort", abortAndFinalize);
    }
    const finalize = () => {
      request_.abort();
      if (signal) {
        signal.removeEventListener("abort", abortAndFinalize);
      }
    };
    request_.on("error", (err) => {
      reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, "system", err));
      finalize();
    });
    request_.on("response", (response_) => {
      request_.setTimeout(0);
      const headers = fromRawHeaders(response_.rawHeaders);
      if (isRedirect(response_.statusCode)) {
        const location2 = headers.get("Location");
        const locationURL = location2 === null ? null : new URL(location2, request.url);
        switch (request.redirect) {
          case "error":
            reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
            finalize();
            return;
          case "manual":
            if (locationURL !== null) {
              try {
                headers.set("Location", locationURL);
              } catch (error3) {
                reject(error3);
              }
            }
            break;
          case "follow": {
            if (locationURL === null) {
              break;
            }
            if (request.counter >= request.follow) {
              reject(new FetchError(`maximum redirect reached at: ${request.url}`, "max-redirect"));
              finalize();
              return;
            }
            const requestOptions = {
              headers: new Headers(request.headers),
              follow: request.follow,
              counter: request.counter + 1,
              agent: request.agent,
              compress: request.compress,
              method: request.method,
              body: request.body,
              signal: request.signal,
              size: request.size
            };
            if (response_.statusCode !== 303 && request.body && options_.body instanceof import_stream.default.Readable) {
              reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
              finalize();
              return;
            }
            if (response_.statusCode === 303 || (response_.statusCode === 301 || response_.statusCode === 302) && request.method === "POST") {
              requestOptions.method = "GET";
              requestOptions.body = void 0;
              requestOptions.headers.delete("content-length");
            }
            resolve2(fetch2(new Request(locationURL, requestOptions)));
            finalize();
            return;
          }
        }
      }
      response_.once("end", () => {
        if (signal) {
          signal.removeEventListener("abort", abortAndFinalize);
        }
      });
      let body = (0, import_stream.pipeline)(response_, new import_stream.PassThrough(), (error3) => {
        reject(error3);
      });
      if (process.version < "v12.10") {
        response_.on("aborted", abortAndFinalize);
      }
      const responseOptions = {
        url: request.url,
        status: response_.statusCode,
        statusText: response_.statusMessage,
        headers,
        size: request.size,
        counter: request.counter,
        highWaterMark: request.highWaterMark
      };
      const codings = headers.get("Content-Encoding");
      if (!request.compress || request.method === "HEAD" || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      const zlibOptions = {
        flush: import_zlib.default.Z_SYNC_FLUSH,
        finishFlush: import_zlib.default.Z_SYNC_FLUSH
      };
      if (codings === "gzip" || codings === "x-gzip") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createGunzip(zlibOptions), (error3) => {
          reject(error3);
        });
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      if (codings === "deflate" || codings === "x-deflate") {
        const raw = (0, import_stream.pipeline)(response_, new import_stream.PassThrough(), (error3) => {
          reject(error3);
        });
        raw.once("data", (chunk) => {
          if ((chunk[0] & 15) === 8) {
            body = (0, import_stream.pipeline)(body, import_zlib.default.createInflate(), (error3) => {
              reject(error3);
            });
          } else {
            body = (0, import_stream.pipeline)(body, import_zlib.default.createInflateRaw(), (error3) => {
              reject(error3);
            });
          }
          response = new Response2(body, responseOptions);
          resolve2(response);
        });
        return;
      }
      if (codings === "br") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createBrotliDecompress(), (error3) => {
          reject(error3);
        });
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      response = new Response2(body, responseOptions);
      resolve2(response);
    });
    writeToStream(request_, request);
  });
}
globalThis.fetch = fetch2;
globalThis.Response = Response2;
globalThis.Request = Request;
globalThis.Headers = Headers;

// node_modules/@sveltejs/kit/dist/ssr.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  var counts = new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new Error("Cannot stringify a function");
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          var proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            throw new Error("Cannot stringify arbitrary non-POJOs");
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new Error("Cannot stringify POJOs with symbolic keys");
          }
          Object.keys(thing).forEach(function(key) {
            return walk(thing[key]);
          });
      }
    }
  }
  walk(value);
  var names = new Map();
  Array.from(counts).filter(function(entry) {
    return entry[1] > 1;
  }).sort(function(a, b) {
    return b[1] - a[1];
  }).forEach(function(entry, i) {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    var type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return "Object(" + stringify(thing.valueOf()) + ")";
      case "RegExp":
        return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
      case "Date":
        return "new Date(" + thing.getTime() + ")";
      case "Array":
        var members = thing.map(function(v, i) {
          return i in thing ? stringify(v) : "";
        });
        var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return "[" + members.join(",") + tail + "]";
      case "Set":
      case "Map":
        return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
      default:
        var obj = "{" + Object.keys(thing).map(function(key) {
          return safeKey(key) + ":" + stringify(thing[key]);
        }).join(",") + "}";
        var proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
        }
        return obj;
    }
  }
  var str = stringify(value);
  if (names.size) {
    var params_1 = [];
    var statements_1 = [];
    var values_1 = [];
    names.forEach(function(name, thing) {
      params_1.push(name);
      if (isPrimitive(thing)) {
        values_1.push(stringifyPrimitive(thing));
        return;
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values_1.push("Object(" + stringify(thing.valueOf()) + ")");
          break;
        case "RegExp":
          values_1.push(thing.toString());
          break;
        case "Date":
          values_1.push("new Date(" + thing.getTime() + ")");
          break;
        case "Array":
          values_1.push("Array(" + thing.length + ")");
          thing.forEach(function(v, i) {
            statements_1.push(name + "[" + i + "]=" + stringify(v));
          });
          break;
        case "Set":
          values_1.push("new Set");
          statements_1.push(name + "." + Array.from(thing).map(function(v) {
            return "add(" + stringify(v) + ")";
          }).join("."));
          break;
        case "Map":
          values_1.push("new Map");
          statements_1.push(name + "." + Array.from(thing).map(function(_a) {
            var k = _a[0], v = _a[1];
            return "set(" + stringify(k) + ", " + stringify(v) + ")";
          }).join("."));
          break;
        default:
          values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach(function(key) {
            statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
          });
      }
    });
    statements_1.push("return " + str);
    return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
  } else {
    return str;
  }
}
function getName(num) {
  var name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string")
    return stringifyString(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  var str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
  var result = '"';
  for (var i = 0; i < str.length; i += 1) {
    var char = str.charAt(i);
    var code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped$1) {
      result += escaped$1[char];
    } else if (code >= 55296 && code <= 57343) {
      var next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += "\\u" + code.toString(16).toUpperCase();
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
function noop() {
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
var subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = [];
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (let i = 0; i < subscribers.length; i += 1) {
          const s2 = subscribers[i];
          s2[1]();
          subscriber_queue.push(s2, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.push(subscriber);
    if (subscribers.length === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      const index2 = subscribers.indexOf(subscriber);
      if (index2 !== -1) {
        subscribers.splice(index2, 1);
      }
      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }
  return {set, update, subscribe: subscribe2};
}
function hash(value) {
  let hash2 = 5381;
  let i = value.length;
  if (typeof value === "string") {
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else {
    while (i)
      hash2 = hash2 * 33 ^ value[--i];
  }
  return (hash2 >>> 0).toString(36);
}
var s$1 = JSON.stringify;
async function render_response({
  options: options2,
  $session,
  page_config,
  status,
  error: error3,
  branch,
  page: page2
}) {
  const css2 = new Set(options2.entry.css);
  const js = new Set(options2.entry.js);
  const styles = new Set();
  const serialized_data = [];
  let rendered;
  let is_private = false;
  let maxage;
  if (error3) {
    error3.stack = options2.get_stack(error3);
  }
  if (branch) {
    branch.forEach(({node, loaded, fetched, uses_credentials}) => {
      if (node.css)
        node.css.forEach((url) => css2.add(url));
      if (node.js)
        node.js.forEach((url) => js.add(url));
      if (node.styles)
        node.styles.forEach((content) => styles.add(content));
      if (fetched && page_config.hydrate)
        serialized_data.push(...fetched);
      if (uses_credentials)
        is_private = true;
      maxage = loaded.maxage;
    });
    const session = writable($session);
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        session
      },
      page: page2,
      components: branch.map(({node}) => node.module.default)
    };
    for (let i = 0; i < branch.length; i += 1) {
      props[`props_${i}`] = await branch[i].loaded.props;
    }
    let session_tracking_active = false;
    const unsubscribe = session.subscribe(() => {
      if (session_tracking_active)
        is_private = true;
    });
    session_tracking_active = true;
    try {
      rendered = options2.root.render(props);
    } finally {
      unsubscribe();
    }
  } else {
    rendered = {head: "", html: "", css: {code: "", map: null}};
  }
  const include_js = page_config.router || page_config.hydrate;
  if (!include_js)
    js.clear();
  const links = options2.amp ? styles.size > 0 || rendered.css.code.length > 0 ? `<style amp-custom>${Array.from(styles).concat(rendered.css.code).join("\n")}</style>` : "" : [
    ...Array.from(js).map((dep) => `<link rel="modulepreload" href="${dep}">`),
    ...Array.from(css2).map((dep) => `<link rel="stylesheet" href="${dep}">`)
  ].join("\n		");
  let init2 = "";
  if (options2.amp) {
    init2 = `
		<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
		<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
		<script async src="https://cdn.ampproject.org/v0.js"></script>`;
  } else if (include_js) {
    init2 = `<script type="module">
			import { start } from ${s$1(options2.entry.file)};
			start({
				target: ${options2.target ? `document.querySelector(${s$1(options2.target)})` : "document.body"},
				paths: ${s$1(options2.paths)},
				session: ${try_serialize($session, (error4) => {
      throw new Error(`Failed to serialize session data: ${error4.message}`);
    })},
				host: ${page2 && page2.host ? s$1(page2.host) : "location.host"},
				route: ${!!page_config.router},
				spa: ${!page_config.ssr},
				trailing_slash: ${s$1(options2.trailing_slash)},
				hydrate: ${page_config.ssr && page_config.hydrate ? `{
					status: ${status},
					error: ${serialize_error(error3)},
					nodes: [
						${branch.map(({node}) => `import(${s$1(node.entry)})`).join(",\n						")}
					],
					page: {
						host: ${page2.host ? s$1(page2.host) : "location.host"}, // TODO this is redundant
						path: ${s$1(page2.path)},
						query: new URLSearchParams(${s$1(page2.query.toString())}),
						params: ${s$1(page2.params)}
					}
				}` : "null"}
			});
		</script>`;
  }
  const head = [
    rendered.head,
    styles.size && !options2.amp ? `<style data-svelte>${Array.from(styles).join("\n")}</style>` : "",
    links,
    init2
  ].join("\n\n		");
  const body = options2.amp ? rendered.html : `${rendered.html}

			${serialized_data.map(({url, body: body2, json}) => {
    return body2 ? `<script type="svelte-data" url="${url}" body="${hash(body2)}">${json}</script>` : `<script type="svelte-data" url="${url}">${json}</script>`;
  }).join("\n\n			")}
		`.replace(/^\t{2}/gm, "");
  const headers = {
    "content-type": "text/html"
  };
  if (maxage) {
    headers["cache-control"] = `${is_private ? "private" : "public"}, max-age=${maxage}`;
  }
  if (!options2.floc) {
    headers["permissions-policy"] = "interest-cohort=()";
  }
  return {
    status,
    headers,
    body: options2.template({head, body})
  };
}
function try_serialize(data, fail) {
  try {
    return devalue(data);
  } catch (err) {
    if (fail)
      fail(err);
    return null;
  }
}
function serialize_error(error3) {
  if (!error3)
    return null;
  let serialized = try_serialize(error3);
  if (!serialized) {
    const {name, message, stack} = error3;
    serialized = try_serialize({name, message, stack});
  }
  if (!serialized) {
    serialized = "{}";
  }
  return serialized;
}
function normalize(loaded) {
  if (loaded.error) {
    const error3 = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
    const status = loaded.status;
    if (!(error3 instanceof Error)) {
      return {
        status: 500,
        error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof error3}"`)
      };
    }
    if (!status || status < 400 || status > 599) {
      console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500');
      return {status: 500, error: error3};
    }
    return {status, error: error3};
  }
  if (loaded.redirect) {
    if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')
      };
    }
    if (typeof loaded.redirect !== "string") {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be a string')
      };
    }
  }
  return loaded;
}
function resolve(base, path) {
  const baseparts = path[0] === "/" ? [] : base.slice(1).split("/");
  const pathparts = path[0] === "/" ? path.slice(1).split("/") : path.split("/");
  baseparts.pop();
  for (let i = 0; i < pathparts.length; i += 1) {
    const part = pathparts[i];
    if (part === ".")
      continue;
    else if (part === "..")
      baseparts.pop();
    else
      baseparts.push(part);
  }
  return `/${baseparts.join("/")}`;
}
var s = JSON.stringify;
async function load_node({
  request,
  options: options2,
  state,
  route,
  page: page2,
  node,
  $session,
  context,
  is_leaf,
  is_error,
  status,
  error: error3
}) {
  const {module: module2} = node;
  let uses_credentials = false;
  const fetched = [];
  let loaded;
  if (module2.load) {
    const load_input = {
      page: page2,
      get session() {
        uses_credentials = true;
        return $session;
      },
      fetch: async (resource, opts = {}) => {
        let url;
        if (typeof resource === "string") {
          url = resource;
        } else {
          url = resource.url;
          opts = {
            method: resource.method,
            headers: resource.headers,
            body: resource.body,
            mode: resource.mode,
            credentials: resource.credentials,
            cache: resource.cache,
            redirect: resource.redirect,
            referrer: resource.referrer,
            integrity: resource.integrity,
            ...opts
          };
        }
        if (options2.read && url.startsWith(options2.paths.assets)) {
          url = url.replace(options2.paths.assets, "");
        }
        if (url.startsWith("//")) {
          throw new Error(`Cannot request protocol-relative URL (${url}) in server-side fetch`);
        }
        let response;
        if (/^[a-zA-Z]+:/.test(url)) {
          response = await fetch(url, opts);
        } else {
          const [path, search] = url.split("?");
          const resolved = resolve(request.path, path);
          const filename = resolved.slice(1);
          const filename_html = `${filename}/index.html`;
          const asset = options2.manifest.assets.find((d) => d.file === filename || d.file === filename_html);
          if (asset) {
            if (options2.read) {
              response = new Response(options2.read(asset.file), {
                headers: {
                  "content-type": asset.type
                }
              });
            } else {
              response = await fetch(`http://${page2.host}/${asset.file}`, opts);
            }
          }
          if (!response) {
            const headers = {...opts.headers};
            if (opts.credentials !== "omit") {
              uses_credentials = true;
              headers.cookie = request.headers.cookie;
              if (!headers.authorization) {
                headers.authorization = request.headers.authorization;
              }
            }
            if (opts.body && typeof opts.body !== "string") {
              throw new Error("Request body must be a string");
            }
            const rendered = await respond({
              host: request.host,
              method: opts.method || "GET",
              headers,
              path: resolved,
              rawBody: opts.body,
              query: new URLSearchParams(search)
            }, options2, {
              fetched: url,
              initiator: route
            });
            if (rendered) {
              if (state.prerender) {
                state.prerender.dependencies.set(resolved, rendered);
              }
              response = new Response(rendered.body, {
                status: rendered.status,
                headers: rendered.headers
              });
            }
          }
        }
        if (response) {
          const proxy = new Proxy(response, {
            get(response2, key, receiver) {
              async function text() {
                const body = await response2.text();
                const headers = {};
                for (const [key2, value] of response2.headers) {
                  if (key2 !== "etag" && key2 !== "set-cookie")
                    headers[key2] = value;
                }
                if (!opts.body || typeof opts.body === "string") {
                  fetched.push({
                    url,
                    body: opts.body,
                    json: `{"status":${response2.status},"statusText":${s(response2.statusText)},"headers":${s(headers)},"body":${escape(body)}}`
                  });
                }
                return body;
              }
              if (key === "text") {
                return text;
              }
              if (key === "json") {
                return async () => {
                  return JSON.parse(await text());
                };
              }
              return Reflect.get(response2, key, response2);
            }
          });
          return proxy;
        }
        return response || new Response("Not found", {
          status: 404
        });
      },
      context: {...context}
    };
    if (is_error) {
      load_input.status = status;
      load_input.error = error3;
    }
    loaded = await module2.load.call(null, load_input);
  } else {
    loaded = {};
  }
  if (!loaded && is_leaf && !is_error)
    return;
  return {
    node,
    loaded: normalize(loaded),
    context: loaded.context || context,
    fetched,
    uses_credentials
  };
}
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
function escape(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
async function respond_with_error({request, options: options2, state, $session, status, error: error3}) {
  const default_layout = await options2.load_component(options2.manifest.layout);
  const default_error = await options2.load_component(options2.manifest.error);
  const page2 = {
    host: request.host,
    path: request.path,
    query: request.query,
    params: {}
  };
  const loaded = await load_node({
    request,
    options: options2,
    state,
    route: null,
    page: page2,
    node: default_layout,
    $session,
    context: {},
    is_leaf: false,
    is_error: false
  });
  const branch = [
    loaded,
    await load_node({
      request,
      options: options2,
      state,
      route: null,
      page: page2,
      node: default_error,
      $session,
      context: loaded.context,
      is_leaf: false,
      is_error: true,
      status,
      error: error3
    })
  ];
  try {
    return await render_response({
      options: options2,
      $session,
      page_config: {
        hydrate: options2.hydrate,
        router: options2.router,
        ssr: options2.ssr
      },
      status,
      error: error3,
      branch,
      page: page2
    });
  } catch (error4) {
    options2.handle_error(error4);
    return {
      status: 500,
      headers: {},
      body: error4.stack
    };
  }
}
async function respond$1({request, options: options2, state, $session, route}) {
  const match = route.pattern.exec(request.path);
  const params = route.params(match);
  const page2 = {
    host: request.host,
    path: request.path,
    query: request.query,
    params
  };
  let nodes;
  try {
    nodes = await Promise.all(route.a.map((id) => id && options2.load_component(id)));
  } catch (error4) {
    options2.handle_error(error4);
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 500,
      error: error4
    });
  }
  const leaf = nodes[nodes.length - 1].module;
  const page_config = {
    ssr: "ssr" in leaf ? leaf.ssr : options2.ssr,
    router: "router" in leaf ? leaf.router : options2.router,
    hydrate: "hydrate" in leaf ? leaf.hydrate : options2.hydrate
  };
  if (!leaf.prerender && state.prerender && !state.prerender.all) {
    return {
      status: 204,
      headers: {},
      body: null
    };
  }
  let branch;
  let status = 200;
  let error3;
  ssr:
    if (page_config.ssr) {
      let context = {};
      branch = [];
      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        let loaded;
        if (node) {
          try {
            loaded = await load_node({
              request,
              options: options2,
              state,
              route,
              page: page2,
              node,
              $session,
              context,
              is_leaf: i === nodes.length - 1,
              is_error: false
            });
            if (!loaded)
              return;
            if (loaded.loaded.redirect) {
              return {
                status: loaded.loaded.status,
                headers: {
                  location: encodeURI(loaded.loaded.redirect)
                }
              };
            }
            if (loaded.loaded.error) {
              ({status, error: error3} = loaded.loaded);
            }
          } catch (e) {
            options2.handle_error(e);
            status = 500;
            error3 = e;
          }
          if (error3) {
            while (i--) {
              if (route.b[i]) {
                const error_node = await options2.load_component(route.b[i]);
                let error_loaded;
                let node_loaded;
                let j = i;
                while (!(node_loaded = branch[j])) {
                  j -= 1;
                }
                try {
                  error_loaded = await load_node({
                    request,
                    options: options2,
                    state,
                    route,
                    page: page2,
                    node: error_node,
                    $session,
                    context: node_loaded.context,
                    is_leaf: false,
                    is_error: true,
                    status,
                    error: error3
                  });
                  if (error_loaded.loaded.error) {
                    continue;
                  }
                  branch = branch.slice(0, j + 1).concat(error_loaded);
                  break ssr;
                } catch (e) {
                  options2.handle_error(e);
                  continue;
                }
              }
            }
            return await respond_with_error({
              request,
              options: options2,
              state,
              $session,
              status,
              error: error3
            });
          }
        }
        branch.push(loaded);
        if (loaded && loaded.loaded.context) {
          context = {
            ...context,
            ...loaded.loaded.context
          };
        }
      }
    }
  try {
    return await render_response({
      options: options2,
      $session,
      page_config,
      status,
      error: error3,
      branch: branch && branch.filter(Boolean),
      page: page2
    });
  } catch (error4) {
    options2.handle_error(error4);
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 500,
      error: error4
    });
  }
}
async function render_page(request, route, options2, state) {
  if (state.initiator === route) {
    return {
      status: 404,
      headers: {},
      body: `Not found: ${request.path}`
    };
  }
  const $session = await options2.hooks.getSession(request);
  if (route) {
    const response = await respond$1({
      request,
      options: options2,
      state,
      $session,
      route
    });
    if (response) {
      return response;
    }
    if (state.fetched) {
      return {
        status: 500,
        headers: {},
        body: `Bad request in load function: failed to fetch ${state.fetched}`
      };
    }
  } else {
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 404,
      error: new Error(`Not found: ${request.path}`)
    });
  }
}
function lowercase_keys(obj) {
  const clone2 = {};
  for (const key in obj) {
    clone2[key.toLowerCase()] = obj[key];
  }
  return clone2;
}
function error(body) {
  return {
    status: 500,
    body,
    headers: {}
  };
}
async function render_route(request, route) {
  const mod = await route.load();
  const handler = mod[request.method.toLowerCase().replace("delete", "del")];
  if (handler) {
    const match = route.pattern.exec(request.path);
    const params = route.params(match);
    const response = await handler({...request, params});
    if (response) {
      if (typeof response !== "object") {
        return error(`Invalid response from route ${request.path}: expected an object, got ${typeof response}`);
      }
      let {status = 200, body, headers = {}} = response;
      headers = lowercase_keys(headers);
      const type = headers["content-type"];
      if (type === "application/octet-stream" && !(body instanceof Uint8Array)) {
        return error(`Invalid response from route ${request.path}: body must be an instance of Uint8Array if content type is application/octet-stream`);
      }
      if (body instanceof Uint8Array && type !== "application/octet-stream") {
        return error(`Invalid response from route ${request.path}: Uint8Array body must be accompanied by content-type: application/octet-stream header`);
      }
      let normalized_body;
      if (typeof body === "object" && (!type || type === "application/json")) {
        headers = {...headers, "content-type": "application/json"};
        normalized_body = JSON.stringify(body);
      } else {
        normalized_body = body;
      }
      return {status, body: normalized_body, headers};
    }
  }
}
function read_only_form_data() {
  const map = new Map();
  return {
    append(key, value) {
      if (map.has(key)) {
        map.get(key).push(value);
      } else {
        map.set(key, [value]);
      }
    },
    data: new ReadOnlyFormData(map)
  };
}
var ReadOnlyFormData = class {
  #map;
  constructor(map) {
    this.#map = map;
  }
  get(key) {
    const value = this.#map.get(key);
    return value && value[0];
  }
  getAll(key) {
    return this.#map.get(key);
  }
  has(key) {
    return this.#map.has(key);
  }
  *[Symbol.iterator]() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *entries() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *keys() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield key;
      }
    }
  }
  *values() {
    for (const [, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield value;
      }
    }
  }
};
function parse_body(req) {
  const raw = req.rawBody;
  if (!raw)
    return raw;
  const [type, ...directives] = req.headers["content-type"].split(/;\s*/);
  if (typeof raw === "string") {
    switch (type) {
      case "text/plain":
        return raw;
      case "application/json":
        return JSON.parse(raw);
      case "application/x-www-form-urlencoded":
        return get_urlencoded(raw);
      case "multipart/form-data": {
        const boundary = directives.find((directive) => directive.startsWith("boundary="));
        if (!boundary)
          throw new Error("Missing boundary");
        return get_multipart(raw, boundary.slice("boundary=".length));
      }
      default:
        throw new Error(`Invalid Content-Type ${type}`);
    }
  }
  return raw;
}
function get_urlencoded(text) {
  const {data, append} = read_only_form_data();
  text.replace(/\+/g, " ").split("&").forEach((str) => {
    const [key, value] = str.split("=");
    append(decodeURIComponent(key), decodeURIComponent(value));
  });
  return data;
}
function get_multipart(text, boundary) {
  const parts = text.split(`--${boundary}`);
  const nope = () => {
    throw new Error("Malformed form data");
  };
  if (parts[0] !== "" || parts[parts.length - 1].trim() !== "--") {
    nope();
  }
  const {data, append} = read_only_form_data();
  parts.slice(1, -1).forEach((part) => {
    const match = /\s*([\s\S]+?)\r\n\r\n([\s\S]*)\s*/.exec(part);
    const raw_headers = match[1];
    const body = match[2].trim();
    let key;
    raw_headers.split("\r\n").forEach((str) => {
      const [raw_header, ...raw_directives] = str.split("; ");
      let [name, value] = raw_header.split(": ");
      name = name.toLowerCase();
      const directives = {};
      raw_directives.forEach((raw_directive) => {
        const [name2, value2] = raw_directive.split("=");
        directives[name2] = JSON.parse(value2);
      });
      if (name === "content-disposition") {
        if (value !== "form-data")
          nope();
        if (directives.filename) {
          throw new Error("File upload is not yet implemented");
        }
        if (directives.name) {
          key = directives.name;
        }
      }
    });
    if (!key)
      nope();
    append(key, body);
  });
  return data;
}
async function respond(incoming, options2, state = {}) {
  if (incoming.path !== "/" && options2.trailing_slash !== "ignore") {
    const has_trailing_slash = incoming.path.endsWith("/");
    if (has_trailing_slash && options2.trailing_slash === "never" || !has_trailing_slash && options2.trailing_slash === "always" && !incoming.path.split("/").pop().includes(".")) {
      const path = has_trailing_slash ? incoming.path.slice(0, -1) : incoming.path + "/";
      const q = incoming.query.toString();
      return {
        status: 301,
        headers: {
          location: encodeURI(path + (q ? `?${q}` : ""))
        }
      };
    }
  }
  try {
    return await options2.hooks.handle({
      request: {
        ...incoming,
        headers: lowercase_keys(incoming.headers),
        body: parse_body(incoming),
        params: null,
        locals: {}
      },
      render: async (request) => {
        if (state.prerender && state.prerender.fallback) {
          return await render_response({
            options: options2,
            $session: await options2.hooks.getSession(request),
            page_config: {ssr: false, router: true, hydrate: true},
            status: 200,
            error: null,
            branch: [],
            page: null
          });
        }
        for (const route of options2.manifest.routes) {
          if (!route.pattern.test(request.path))
            continue;
          const response = route.type === "endpoint" ? await render_route(request, route) : await render_page(request, route, options2, state);
          if (response) {
            if (response.status === 200) {
              if (!/(no-store|immutable)/.test(response.headers["cache-control"])) {
                const etag = `"${hash(response.body)}"`;
                if (request.headers["if-none-match"] === etag) {
                  return {
                    status: 304,
                    headers: {},
                    body: null
                  };
                }
                response.headers["etag"] = etag;
              }
            }
            return response;
          }
        }
        return await render_page(request, null, options2, state);
      }
    });
  } catch (e) {
    options2.handle_error(e);
    return {
      status: 500,
      headers: {},
      body: options2.dev ? e.stack : e.message
    };
  }
}

// node_modules/svelte/internal/index.mjs
function noop2() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop2;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
var tasks = new Set();
var active_docs = new Set();
var current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}
function getContext(key) {
  return get_current_component().$$.context.get(key);
}
var resolved_promise = Promise.resolve();
var seen_callbacks = new Set();
var outroing = new Set();
var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
var boolean_attributes = new Set([
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
]);
var escaped2 = {
  '"': "&quot;",
  "'": "&#39;",
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;"
};
function escape2(html2) {
  return String(html2).replace(/["'&<>]/g, (match) => escaped2[match]);
}
var missing_component = {
  $$render: () => ""
};
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component;
}
var on_destroy;
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({$$});
    const html2 = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html2;
  }
  return {
    render: (props = {}, {$$slots = {}, context = new Map()} = {}) => {
      on_destroy = [];
      const result = {title: "", head: "", css: new Set()};
      const html2 = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html: html2,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  return ` ${name}${value === true ? "" : `=${typeof value === "string" ? JSON.stringify(escape2(value)) : `"${value}"`}`}`;
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: "open"});
    }
    connectedCallback() {
      const {on_mount} = this.$$;
      this.$$.on_disconnect = on_mount.map(run).filter(is_function);
      for (const key in this.$$.slotted) {
        this.appendChild(this.$$.slotted[key]);
      }
    }
    attributeChangedCallback(attr, _oldValue, newValue) {
      this[attr] = newValue;
    }
    disconnectedCallback() {
      run_all(this.$$.on_disconnect);
    }
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop2;
    }
    $on(type, callback) {
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index2 = callbacks.indexOf(callback);
        if (index2 !== -1)
          callbacks.splice(index2, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };
}

// node_modules/svelte/ssr.mjs
function onMount() {
}
function afterUpdate() {
}

// .svelte-kit/output/server/app.js
var import_cookie = __toModule(require_cookie());

// node_modules/@lukeed/uuid/dist/index.mjs
var IDX = 256;
var HEX = [];
var BUFFER;
while (IDX--)
  HEX[IDX] = (IDX + 256).toString(16).substring(1);
function v4() {
  var i = 0, num, out = "";
  if (!BUFFER || IDX + 16 > 256) {
    BUFFER = Array(i = 256);
    while (i--)
      BUFFER[i] = 256 * Math.random() | 0;
    i = IDX = 0;
  }
  for (; i < 16; i++) {
    num = BUFFER[IDX + i];
    if (i == 6)
      out += HEX[num & 15 | 64];
    else if (i == 8)
      out += HEX[num & 63 | 128];
    else
      out += HEX[num];
    if (i & 1 && i > 1 && i < 11)
      out += "-";
  }
  IDX++;
  return out;
}

// .svelte-kit/output/server/app.js
var import_workbox_window = __toModule(require_workbox_window_prod_umd());
var import_snarkdown = __toModule(require_snarkdown());
var css$a = {
  code: "#svelte-announcer.svelte-1j55zn5{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}",
  map: `{"version":3,"file":"root.svelte","sources":["root.svelte"],"sourcesContent":["<!-- This file is generated by @sveltejs/kit \u2014 do not edit it! -->\\n<script>\\n\\timport { setContext, afterUpdate, onMount } from 'svelte';\\n\\n\\t// stores\\n\\texport let stores;\\n\\texport let page;\\n\\n\\texport let components;\\n\\texport let props_0 = null;\\n\\texport let props_1 = null;\\n\\texport let props_2 = null;\\n\\n\\tsetContext('__svelte__', stores);\\n\\n\\t$: stores.page.set(page);\\n\\tafterUpdate(stores.page.notify);\\n\\n\\tlet mounted = false;\\n\\tlet navigated = false;\\n\\tlet title = null;\\n\\n\\tonMount(() => {\\n\\t\\tconst unsubscribe = stores.page.subscribe(() => {\\n\\t\\t\\tif (mounted) {\\n\\t\\t\\t\\tnavigated = true;\\n\\t\\t\\t\\ttitle = document.title || 'untitled page';\\n\\t\\t\\t}\\n\\t\\t});\\n\\n\\t\\tmounted = true;\\n\\t\\treturn unsubscribe;\\n\\t});\\n</script>\\n\\n<svelte:component this={components[0]} {...(props_0 || {})}>\\n\\t{#if components[1]}\\n\\t\\t<svelte:component this={components[1]} {...(props_1 || {})}>\\n\\t\\t\\t{#if components[2]}\\n\\t\\t\\t\\t<svelte:component this={components[2]} {...(props_2 || {})}/>\\n\\t\\t\\t{/if}\\n\\t\\t</svelte:component>\\n\\t{/if}\\n</svelte:component>\\n\\n{#if mounted}\\n\\t<div id=\\"svelte-announcer\\" aria-live=\\"assertive\\" aria-atomic=\\"true\\">\\n\\t\\t{#if navigated}\\n\\t\\t\\t{title}\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t#svelte-announcer {\\n\\t\\tposition: absolute;\\n\\t\\tleft: 0;\\n\\t\\ttop: 0;\\n\\t\\tclip: rect(0 0 0 0);\\n\\t\\tclip-path: inset(50%);\\n\\t\\toverflow: hidden;\\n\\t\\twhite-space: nowrap;\\n\\t\\twidth: 1px;\\n\\t\\theight: 1px;\\n\\t}\\n</style>"],"names":[],"mappings":"AAsDC,iBAAiB,eAAC,CAAC,AAClB,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,AACZ,CAAC"}`
};
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {stores} = $$props;
  let {page: page2} = $$props;
  let {components} = $$props;
  let {props_0 = null} = $$props;
  let {props_1 = null} = $$props;
  let {props_2 = null} = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  let mounted = false;
  let navigated = false;
  let title = null;
  onMount(() => {
    const unsubscribe = stores.page.subscribe(() => {
      if (mounted) {
        navigated = true;
        title = document.title || "untitled page";
      }
    });
    mounted = true;
    return unsubscribe;
  });
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  $$result.css.add(css$a);
  {
    stores.page.set(page2);
  }
  return `


${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => `${components[1] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
      default: () => `${components[2] ? `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}` : ``}`
    })}` : ``}`
  })}

${mounted ? `<div id="${"svelte-announcer"}" aria-live="${"assertive"}" aria-atomic="${"true"}" class="${"svelte-1j55zn5"}">${navigated ? `${escape2(title)}` : ``}</div>` : ``}`;
});
function set_paths(paths) {
}
function set_prerendering(value) {
}
var handle = async ({request, render: render2}) => {
  const cookies = import_cookie.default.parse(request.headers.cookie || "");
  request.locals.userid = cookies.userid || v4();
  if (request.query.has("_method")) {
    request.method = request.query.get("_method").toUpperCase();
  }
  const response = await render2(request);
  if (!cookies.userid) {
    response.headers["set-cookie"] = `userid=${request.locals.userid}; Path=/; HttpOnly`;
  }
  return response;
};
var user_hooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  handle
});
var template = ({head, body}) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="/favicon.png" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n\n		' + head + '\n	</head>\n	<body>\n		<div id="svelte">' + body + "</div>\n	</body>\n</html>\n";
var options = null;
function init(settings) {
  set_paths(settings.paths);
  set_prerendering(settings.prerendering || false);
  options = {
    amp: false,
    dev: false,
    entry: {
      file: "/./_app/start-25fb9d51.js",
      css: ["/./_app/assets/start-a8cd1609.css"],
      js: ["/./_app/start-25fb9d51.js", "/./_app/chunks/vendor-c12218c7.js"]
    },
    fetched: void 0,
    floc: false,
    get_component_path: (id) => "/./_app/" + entry_lookup[id],
    get_stack: (error22) => String(error22),
    handle_error: (error22) => {
      console.error(error22.stack);
      error22.stack = options.get_stack(error22);
    },
    hooks: get_hooks(user_hooks),
    hydrate: true,
    initiator: void 0,
    load_component,
    manifest,
    paths: settings.paths,
    read: settings.read,
    root: Root,
    router: true,
    ssr: true,
    target: "#svelte",
    template,
    trailing_slash: "never"
  };
}
var empty = () => ({});
var manifest = {
  assets: [{"file": "favicon.png", "size": 3624, "type": "image/png"}, {"file": "manifest.webmanifest", "size": 335, "type": "application/manifest+json"}, {"file": "pencil-512x512.png", "size": 3624, "type": "image/png"}, {"file": "robots.txt", "size": 67, "type": "text/plain"}],
  layout: "src/routes/__layout.svelte",
  error: ".svelte-kit/build/components/error.svelte",
  routes: [
    {
      type: "page",
      pattern: /^\/$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/a__layout\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/a__layout.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Italiano\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Italiano.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Storia\/La-visione-dell-uomo-nel-positivo\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Storia/La-visione-dell-uomo-nel-positivo.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Storia\/Prima-guerra-mondiale\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Storia/Prima-guerra-mondiale.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Storia\/Il-Novecento\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Storia/Il-Novecento.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Storia\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Storia.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/About\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/About.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    }
  ]
};
var get_hooks = (hooks) => ({
  getSession: hooks.getSession || (() => ({})),
  handle: hooks.handle || (({request, render: render2}) => render2(request))
});
var module_lookup = {
  "src/routes/__layout.svelte": () => Promise.resolve().then(function() {
    return __layout;
  }),
  ".svelte-kit/build/components/error.svelte": () => Promise.resolve().then(function() {
    return error2;
  }),
  "src/routes/index.svelte": () => Promise.resolve().then(function() {
    return index;
  }),
  "src/routes/scuola/a__layout.svelte": () => Promise.resolve().then(function() {
    return a__layout;
  }),
  "src/routes/scuola/Italiano.svelte": () => Promise.resolve().then(function() {
    return Italiano$1;
  }),
  "src/routes/scuola/Storia/La-visione-dell-uomo-nel-positivo.md": () => Promise.resolve().then(function() {
    return LaVisioneDellUomoNelPositivo;
  }),
  "src/routes/scuola/Storia/Prima-guerra-mondiale.md": () => Promise.resolve().then(function() {
    return PrimaGuerraMondiale;
  }),
  "src/routes/scuola/Storia/Il-Novecento.svelte": () => Promise.resolve().then(function() {
    return IlNovecento;
  }),
  "src/routes/scuola/Storia.svelte": () => Promise.resolve().then(function() {
    return Storia$1;
  }),
  "src/routes/scuola.svelte": () => Promise.resolve().then(function() {
    return scuola;
  }),
  "src/routes/About.svelte": () => Promise.resolve().then(function() {
    return About$1;
  })
};
var metadata_lookup = {"src/routes/__layout.svelte": {"entry": "/./_app/pages/__layout.svelte-8bbad35c.js", "css": ["/./_app/assets/pages/__layout.svelte-75c30209.css", "/./_app/assets/index.svelte_svelte&type=style&lang-87aef973.css"], "js": ["/./_app/pages/__layout.svelte-8bbad35c.js", "/./_app/chunks/vendor-c12218c7.js", "/./_app/chunks/stores-52090410.js"], "styles": null}, ".svelte-kit/build/components/error.svelte": {"entry": "/./_app/error.svelte-48509c4a.js", "css": [], "js": ["/./_app/error.svelte-48509c4a.js", "/./_app/chunks/vendor-c12218c7.js"], "styles": null}, "src/routes/index.svelte": {"entry": "/./_app/pages/index.svelte-88faaaab.js", "css": ["/./_app/assets/pages/index.svelte-8196204d.css"], "js": ["/./_app/pages/index.svelte-88faaaab.js", "/./_app/chunks/vendor-c12218c7.js"], "styles": null}, "src/routes/scuola/a__layout.svelte": {"entry": "/./_app/pages/scuola/a__layout.svelte-f061684e.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-87aef973.css"], "js": ["/./_app/pages/scuola/a__layout.svelte-f061684e.js", "/./_app/chunks/vendor-c12218c7.js", "/./_app/chunks/index-94375af2.js", "/./_app/chunks/stores-52090410.js"], "styles": null}, "src/routes/scuola/Italiano.svelte": {"entry": "/./_app/pages/scuola/Italiano.svelte-10a865a7.js", "css": ["/./_app/assets/pages/scuola/Italiano.svelte-bcdbeabc.css", "/./_app/assets/index.svelte_svelte&type=style&lang-87aef973.css"], "js": ["/./_app/pages/scuola/Italiano.svelte-10a865a7.js", "/./_app/chunks/vendor-c12218c7.js", "/./_app/chunks/index-94375af2.js", "/./_app/chunks/stores-52090410.js"], "styles": null}, "src/routes/scuola/Storia/La-visione-dell-uomo-nel-positivo.md": {"entry": "/./_app/pages/scuola/Storia/La-visione-dell-uomo-nel-positivo.md-577ad5f9.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-87aef973.css"], "js": ["/./_app/pages/scuola/Storia/La-visione-dell-uomo-nel-positivo.md-577ad5f9.js", "/./_app/chunks/vendor-c12218c7.js", "/./_app/chunks/index-94375af2.js", "/./_app/chunks/stores-52090410.js"], "styles": null}, "src/routes/scuola/Storia/Prima-guerra-mondiale.md": {"entry": "/./_app/pages/scuola/Storia/Prima-guerra-mondiale.md-5b7fb307.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-87aef973.css"], "js": ["/./_app/pages/scuola/Storia/Prima-guerra-mondiale.md-5b7fb307.js", "/./_app/chunks/vendor-c12218c7.js", "/./_app/chunks/index-94375af2.js", "/./_app/chunks/stores-52090410.js"], "styles": null}, "src/routes/scuola/Storia/Il-Novecento.svelte": {"entry": "/./_app/pages/scuola/Storia/Il-Novecento.svelte-83cc9d8c.js", "css": ["/./_app/assets/pages/scuola/Storia/Il-Novecento.svelte-a7d5c656.css", "/./_app/assets/index.svelte_svelte&type=style&lang-87aef973.css"], "js": ["/./_app/pages/scuola/Storia/Il-Novecento.svelte-83cc9d8c.js", "/./_app/chunks/vendor-c12218c7.js", "/./_app/chunks/index-94375af2.js", "/./_app/chunks/stores-52090410.js"], "styles": null}, "src/routes/scuola/Storia.svelte": {"entry": "/./_app/pages/scuola/Storia.svelte-9999c523.js", "css": ["/./_app/assets/pages/scuola/Italiano.svelte-bcdbeabc.css", "/./_app/assets/index.svelte_svelte&type=style&lang-87aef973.css"], "js": ["/./_app/pages/scuola/Storia.svelte-9999c523.js", "/./_app/chunks/vendor-c12218c7.js", "/./_app/chunks/stores-52090410.js", "/./_app/chunks/index-4cc4db53.js", "/./_app/chunks/index-94375af2.js"], "styles": null}, "src/routes/scuola.svelte": {"entry": "/./_app/pages/scuola.svelte-664fe7f2.js", "css": ["/./_app/assets/pages/scuola.svelte-cb810066.css"], "js": ["/./_app/pages/scuola.svelte-664fe7f2.js", "/./_app/chunks/vendor-c12218c7.js", "/./_app/chunks/env-a13806e5.js", "/./_app/chunks/index-4cc4db53.js", "/./_app/chunks/stores-52090410.js"], "styles": null}, "src/routes/About.svelte": {"entry": "/./_app/pages/About.svelte-84410af4.js", "css": ["/./_app/assets/pages/scuola.svelte-cb810066.css"], "js": ["/./_app/pages/About.svelte-84410af4.js", "/./_app/chunks/vendor-c12218c7.js", "/./_app/chunks/env-a13806e5.js"], "styles": null}};
async function load_component(file) {
  return {
    module: await module_lookup[file](),
    ...metadata_lookup[file]
  };
}
init({paths: {"base": "", "assets": "/."}});
function render(request, {
  prerender: prerender2
} = {}) {
  const host = request.headers["host"];
  return respond({...request, host}, options, {prerender: prerender2});
}
var getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
var page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var css$9 = {
  code: "header.svelte-1vytpj.svelte-1vytpj{display:flex;justify-content:space-between}.corner.svelte-1vytpj.svelte-1vytpj{width:3em;height:3em}nav.svelte-1vytpj.svelte-1vytpj{display:flex;justify-content:center;--background:#5e5e5e}svg.svelte-1vytpj.svelte-1vytpj{width:2em;height:3em;display:block}path.svelte-1vytpj.svelte-1vytpj{fill:var(--background)}ul.svelte-1vytpj.svelte-1vytpj{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-1vytpj.svelte-1vytpj{position:relative;height:100%}li.active.svelte-1vytpj.svelte-1vytpj::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--accent-color)}nav.svelte-1vytpj a.svelte-1vytpj{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:10%;text-decoration:none;transition:color 0.2s linear}a.svelte-1vytpj.svelte-1vytpj:hover{color:var(--accent-color)}",
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { page } from '$app/stores';\\n//import logo from './GitHub-Mark-120px-plus.png';\\nconsole.log($page.path.split('/')[1]);\\n</script>\\n\\n<header>\\n\\t<div class=\\"corner\\">\\n\\t\\t<!--<a href=\\"https://github.com/FedericoLonghin/newWebsite\\">\\n\\t\\t\\t<img src={logo} alt=\\"Repo on GitHub\\" />\\n\\t\\t</a>\\n\\t\\t-->\\n\\t</div>\\n\\n\\t<nav>\\n\\t\\t<svg viewBox=\\"0 0 2 3\\" aria-hidden=\\"true\\">\\n\\t\\t\\t<path d=\\"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z\\" />\\n\\t\\t</svg>\\n\\t\\t<ul>\\n\\t\\t\\t<li class:active={$page.path === '/'}><a sveltekit:prefetch href=\\"/\\">Home</a></li>\\n\\t\\t\\t<li class:active={$page.path.split('/')[1] === 'scuola'}>\\n\\t\\t\\t\\t<a sveltekit:prefetch href=\\"/scuola\\">Scuola</a>\\n\\t\\t\\t</li>\\n\\t\\t\\t<li class:active={$page.path === '/About'}><a sveltekit:prefetch href=\\"/About\\">About</a></li>\\n\\t\\t</ul>\\n\\t\\t<svg viewBox=\\"0 0 2 3\\" aria-hidden=\\"true\\">\\n\\t\\t\\t<path d=\\"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z\\" />\\n\\t\\t</svg>\\n\\t</nav>\\n\\n\\t<div class=\\"corner\\">\\n\\t\\t<!-- TODO put something else here? github link? -->\\n\\t</div>\\n</header>\\n\\n<style>\\n\\theader {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t}\\n\\n\\t.corner {\\n\\t\\twidth: 3em;\\n\\t\\theight: 3em;\\n\\t}\\n\\n\\t.corner a {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t}\\n\\n\\t.corner img {\\n\\t\\twidth: 2em;\\n\\t\\theight: 2em;\\n\\t\\tobject-fit: contain;\\n\\t}\\n\\n\\tnav {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\t--background: #5e5e5e;\\n\\t}\\n\\n\\tsvg {\\n\\t\\twidth: 2em;\\n\\t\\theight: 3em;\\n\\t\\tdisplay: block;\\n\\t}\\n\\n\\tpath {\\n\\t\\tfill: var(--background);\\n\\t}\\n\\n\\tul {\\n\\t\\tposition: relative;\\n\\t\\tpadding: 0;\\n\\t\\tmargin: 0;\\n\\t\\theight: 3em;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tlist-style: none;\\n\\t\\tbackground: var(--background);\\n\\t\\tbackground-size: contain;\\n\\t}\\n\\n\\tli {\\n\\t\\tposition: relative;\\n\\t\\theight: 100%;\\n\\t}\\n\\n\\tli.active::before {\\n\\t\\t--size: 6px;\\n\\t\\tcontent: '';\\n\\t\\twidth: 0;\\n\\t\\theight: 0;\\n\\t\\tposition: absolute;\\n\\t\\ttop: 0;\\n\\t\\tleft: calc(50% - var(--size));\\n\\t\\tborder: var(--size) solid transparent;\\n\\t\\tborder-top: var(--size) solid var(--accent-color);\\n\\t}\\n\\n\\tnav a {\\n\\t\\tdisplay: flex;\\n\\t\\theight: 100%;\\n\\t\\talign-items: center;\\n\\t\\tpadding: 0 1em;\\n\\t\\tcolor: var(--heading-color);\\n\\t\\tfont-weight: 700;\\n\\t\\tfont-size: 0.8rem;\\n\\t\\ttext-transform: uppercase;\\n\\t\\tletter-spacing: 10%;\\n\\t\\ttext-decoration: none;\\n\\t\\ttransition: color 0.2s linear;\\n\\t}\\n\\n\\ta:hover {\\n\\t\\tcolor: var(--accent-color);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAmCC,MAAM,4BAAC,CAAC,AACP,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,AAC/B,CAAC,AAED,OAAO,4BAAC,CAAC,AACR,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,AACZ,CAAC,AAgBD,GAAG,4BAAC,CAAC,AACJ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,YAAY,CAAE,OAAO,AACtB,CAAC,AAED,GAAG,4BAAC,CAAC,AACJ,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,OAAO,CAAE,KAAK,AACf,CAAC,AAED,IAAI,4BAAC,CAAC,AACL,IAAI,CAAE,IAAI,YAAY,CAAC,AACxB,CAAC,AAED,EAAE,4BAAC,CAAC,AACH,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,MAAM,CAAE,GAAG,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,IAAI,YAAY,CAAC,CAC7B,eAAe,CAAE,OAAO,AACzB,CAAC,AAED,EAAE,4BAAC,CAAC,AACH,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,AACb,CAAC,AAED,EAAE,mCAAO,QAAQ,AAAC,CAAC,AAClB,MAAM,CAAE,GAAG,CACX,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,MAAM,CAAC,CAAC,CAC7B,MAAM,CAAE,IAAI,MAAM,CAAC,CAAC,KAAK,CAAC,WAAW,CACrC,UAAU,CAAE,IAAI,MAAM,CAAC,CAAC,KAAK,CAAC,IAAI,cAAc,CAAC,AAClD,CAAC,AAED,iBAAG,CAAC,CAAC,cAAC,CAAC,AACN,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,CAAC,CAAC,GAAG,CACd,KAAK,CAAE,IAAI,eAAe,CAAC,CAC3B,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,MAAM,CACjB,cAAc,CAAE,SAAS,CACzB,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,IAAI,CACrB,UAAU,CAAE,KAAK,CAAC,IAAI,CAAC,MAAM,AAC9B,CAAC,AAED,6BAAC,MAAM,AAAC,CAAC,AACR,KAAK,CAAE,IAAI,cAAc,CAAC,AAC3B,CAAC"}`
};
var Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log($page.path.split("/")[1]);
  $$result.css.add(css$9);
  $$unsubscribe_page();
  return `<header class="${"svelte-1vytpj"}"><div class="${"corner svelte-1vytpj"}"></div>

	<nav class="${"svelte-1vytpj"}"><svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-1vytpj"}"><path d="${"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"}" class="${"svelte-1vytpj"}"></path></svg>
		<ul class="${"svelte-1vytpj"}"><li class="${["svelte-1vytpj", $page.path === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-1vytpj"}">Home</a></li>
			<li class="${["svelte-1vytpj", $page.path.split("/")[1] === "scuola" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/scuola"}" class="${"svelte-1vytpj"}">Scuola</a></li>
			<li class="${["svelte-1vytpj", $page.path === "/About" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/About"}" class="${"svelte-1vytpj"}">About</a></li></ul>
		<svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-1vytpj"}"><path d="${"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"}" class="${"svelte-1vytpj"}"></path></svg></nav>

	<div class="${"corner svelte-1vytpj"}"></div>
</header>`;
});
var browser = false;
var dev = false;
var css$8 = {
  code: ".pwa-toast.svelte-t803pv.svelte-t803pv{position:fixed;right:0;bottom:0;margin:16px;padding:12px;border:1px solid #8885;border-radius:4px;z-index:1;text-align:left;background-color:#333333;box-shadow:3px 4px 5px 0px #8885}.pwa-toast.svelte-t803pv .message.svelte-t803pv{margin-bottom:8px}.pwa-toast.svelte-t803pv button.svelte-t803pv{border:1px solid #8885;outline:none;margin-right:5px;border-radius:2px;padding:3px 10px;background-color:#b8b8b8;color:#333333}",
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { dev, browser } from '$app/env';\\nimport { Workbox, messageSW } from 'workbox-window';\\nlet wb;\\nlet registration;\\nlet offlineReady = false;\\nlet needRefresh = false;\\nfunction showSkipWaitingPrompt(event) {\\n    // \\\\\`event.wasWaitingBeforeRegister\\\\\` will be false if this is\\n    // the first time the updated service worker is waiting.\\n    // When \\\\\`event.wasWaitingBeforeRegister\\\\\` is true, a previously\\n    // updated service worker is still waiting.\\n    // You may want to customize the UI prompt accordingly.\\n    // Assumes your app has some sort of prompt UI element\\n    // that a user can either accept or reject.\\n    needRefresh = true;\\n}\\nfunction updateServiceWorker() {\\n    // Assuming the user accepted the update, set up a listener\\n    // that will reload the page as soon as the previously waiting\\n    // service worker has taken control.\\n    if (wb) {\\n        wb.addEventListener('controlling', (event) => {\\n            if (event.isUpdate)\\n                window.location.reload();\\n        });\\n    }\\n    if (registration && registration.waiting) {\\n        // Send a message to the waiting service worker,\\n        // instructing it to activate.\\n        // Note: for this to work, you have to add a message\\n        // listener in your service worker. See below.\\n        messageSW(registration.waiting, { type: 'SKIP_WAITING' })\\n            .then(() => {\\n            // console.log(\\"NOTIFIED SKIP_WAITING\\");\\n        })\\n            .catch((e) => {\\n            console.error('NOTIFIED SKIP_WAITING WITH ERROR', e);\\n        });\\n    }\\n}\\nfunction close() {\\n    offlineReady = false;\\n    needRefresh = false;\\n}\\nif (!dev && browser) {\\n    if ('serviceWorker' in navigator) {\\n        wb = new Workbox('/service-worker.js', { scope: '/' });\\n        wb.addEventListener('activated', (event) => {\\n            // this will only controls the offline request.\\n            // event.isUpdate will be true if another version of the service\\n            // worker was controlling the page when this version was registered.\\n            if (!event.isUpdate) {\\n                offlineReady = true;\\n            }\\n        });\\n        // Add an event listener to detect when the registered\\n        // service worker has installed but is waiting to activate.\\n        wb.addEventListener('waiting', showSkipWaitingPrompt);\\n        // eslint-disable-next-line\\n        // @ts-ignore\\n        wb.addEventListener('externalwaiting', showSkipWaitingPrompt);\\n        // register the service worker\\n        wb.register({ immediate: true })\\n            .then((r) => (registration = r))\\n            .catch((e) => {\\n            console.error('cannot register service worker', e);\\n        });\\n    }\\n    else {\\n        console.warn('Service workers are not supported.');\\n    }\\n}\\n$: toast = offlineReady || needRefresh;\\n</script>\\n\\n{#if toast}\\n\\t<div class=\\"pwa-toast\\" role=\\"alert\\">\\n\\t\\t<div class=\\"message\\">\\n\\t\\t\\t{#if offlineReady}\\n\\t\\t\\t\\t<span> App pronta per lavorare offline </span>\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t<span> Ci sono nuovi contenuti disponibili! </span>\\n\\t\\t\\t{/if}\\n\\t\\t</div>\\n\\t\\t{#if needRefresh}\\n\\t\\t\\t<button style=\\"background-color: #48E5C2\\" on:click={updateServiceWorker}> Ricarica </button>\\n\\t\\t{/if}\\n\\t\\t<button on:click={close}> Chiudi </button>\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t.pwa-toast {\\n\\t\\tposition: fixed;\\n\\t\\tright: 0;\\n\\t\\tbottom: 0;\\n\\t\\tmargin: 16px;\\n\\t\\tpadding: 12px;\\n\\t\\tborder: 1px solid #8885;\\n\\t\\tborder-radius: 4px;\\n\\t\\tz-index: 1;\\n\\t\\ttext-align: left;\\n\\t\\tbackground-color: #333333;\\n\\t\\tbox-shadow: 3px 4px 5px 0px #8885;\\n\\t}\\n\\t.pwa-toast .message {\\n\\t\\tmargin-bottom: 8px;\\n\\t}\\n\\t.pwa-toast button {\\n\\t\\tborder: 1px solid #8885;\\n\\t\\toutline: none;\\n\\t\\tmargin-right: 5px;\\n\\t\\tborder-radius: 2px;\\n\\t\\tpadding: 3px 10px;\\n\\t\\tbackground-color: #b8b8b8;\\n\\t\\tcolor: #333333;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA4FC,UAAU,4BAAC,CAAC,AACX,QAAQ,CAAE,KAAK,CACf,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,IAAI,CAChB,gBAAgB,CAAE,OAAO,CACzB,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,AAClC,CAAC,AACD,wBAAU,CAAC,QAAQ,cAAC,CAAC,AACpB,aAAa,CAAE,GAAG,AACnB,CAAC,AACD,wBAAU,CAAC,MAAM,cAAC,CAAC,AAClB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,OAAO,CAAE,IAAI,CACb,YAAY,CAAE,GAAG,CACjB,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OAAO,AACf,CAAC"}`
};
var ReloadPrompt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let toast;
  let needRefresh = false;
  $$result.css.add(css$8);
  toast = needRefresh;
  return `${toast ? `<div class="${"pwa-toast svelte-t803pv"}" role="${"alert"}"><div class="${"message svelte-t803pv"}">${`<span>Ci sono nuovi contenuti disponibili! </span>`}</div>
		${``}
		<button class="${"svelte-t803pv"}">Chiudi </button></div>` : ``}`;
});
var css$7 = {
  code: ".inline.svelte-2oaaq3.svelte-2oaaq3{text-align:left;display:flex}.inline.svelte-2oaaq3>div.svelte-2oaaq3{margin-block-start:0.83em;margin-block-end:0.83em}#title-box.svelte-2oaaq3.svelte-2oaaq3{font-size:1.6rem !important}",
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { page } from '$app/stores';\\nvar pathArray = $page.path.split('/');\\nvar sectionName = pathArray[2];\\nvar pageName = pathArray[3];\\n//var sectionName, pageName;\\n</script>\\n\\n<div id=\\"title-box\\" class=\\"inline\\">\\n\\t<div>\\n\\t\\t<a href=\\"/scuola/{sectionName}\\">{sectionName}</a>\\n\\t</div>\\n\\t<div\\n\\t\\tstyle=\\"margin-left:10px;     color: var(--heading-color);\\t\\"\\n\\t\\tclass:hidden={typeof pageName === 'undefined'}\\n\\t>\\n\\t\\t/{pageName}\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t.inline {\\n\\t\\ttext-align: left;\\n\\t\\tdisplay: flex;\\n\\t}\\n\\t.inline > div {\\n\\t\\tmargin-block-start: 0.83em;\\n\\t\\tmargin-block-end: 0.83em;\\n\\t}\\n\\t#title-box {\\n\\t\\tfont-size: 1.6rem !important;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAoBC,OAAO,4BAAC,CAAC,AACR,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,AACd,CAAC,AACD,qBAAO,CAAG,GAAG,cAAC,CAAC,AACd,kBAAkB,CAAE,MAAM,CAC1B,gBAAgB,CAAE,MAAM,AACzB,CAAC,AACD,UAAU,4BAAC,CAAC,AACX,SAAS,CAAE,MAAM,CAAC,UAAU,AAC7B,CAAC"}`
};
var IndicePath = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  var pathArray = $page.path.split("/");
  var sectionName = pathArray[2];
  var pageName2 = pathArray[3];
  $$result.css.add(css$7);
  $$unsubscribe_page();
  return `<div id="${"title-box"}" class="${"inline svelte-2oaaq3"}"><div class="${"svelte-2oaaq3"}"><a href="${"/scuola/" + escape2(sectionName)}">${escape2(sectionName)}</a></div>
	<div style="${"margin-left:10px; color: var(--heading-color); "}" class="${["svelte-2oaaq3", typeof pageName2 === "undefined" ? "hidden" : ""].join(" ").trim()}">/${escape2(pageName2)}</div>
</div>`;
});
var css$6 = {
  code: "main.svelte-193j25t{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}footer.svelte-193j25t{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px;opacity:0.5}@media(min-width: 480px){footer.svelte-193j25t{padding:40px 0}}",
  map: `{"version":3,"file":"__layout.svelte","sources":["__layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Header from '$lib/Header/index.svelte';\\nimport ReloadPrompt from '$lib/ReloadPrompt/index.svelte';\\nimport IndicePath from '$lib/IndicePath/index.svelte';\\nimport '../app.css';\\n</script>\\n\\n<svelte:head>\\n\\t<link rel=\\"manifest\\" href=\\"/manifest.webmanifest\\" />\\n\\n\\t<meta name=\\"description\\" content=\\"questo \xE8 il nuovo sitoTest di Federico Longhin\\" />\\n\\t<meta name=\\"apple-mobile-web-app-capable\\" content=\\"yes\\" />\\n\\t<!-- <link rel=\\"icon\\" href=\\"/favicon.svg\\" type=\\"image/svg+xml\\"> -->\\n\\t<link rel=\\"apple-touch-icon\\" href=\\"/pencil-512x512.png\\" />\\n\\t<!-- <link rel=\\"mask-icon\\" href=\\"/safari-pinned-tab.svg\\" color=\\"#00aba9\\"> -->\\n\\t<meta name=\\"msapplication-TileColor\\" content=\\"#48e5c2\\" />\\n\\t<meta name=\\"theme-color\\" content=\\"#333333\\" />\\n</svelte:head>\\n\\n<Header />\\n<main>\\n\\t<slot />\\n</main>\\n\\n<footer>\\n\\t<p>Federico Longhin - 2021</p>\\n</footer>\\n\\n<ReloadPrompt />\\n\\n<style>\\n\\tmain {\\n\\t\\tflex: 1;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tpadding: 1rem;\\n\\t\\twidth: 100%;\\n\\t\\tmax-width: 1024px;\\n\\t\\tmargin: 0 auto;\\n\\t\\tbox-sizing: border-box;\\n\\t}\\n\\n\\tfooter {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tpadding: 40px;\\n\\t\\topacity: 0.5;\\n\\t}\\n\\n\\t@media (min-width: 480px) {\\n\\t\\tfooter {\\n\\t\\t\\tpadding: 40px 0;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA8BC,IAAI,eAAC,CAAC,AACL,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,UAAU,CAAE,UAAU,AACvB,CAAC,AAED,MAAM,eAAC,CAAC,AACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,GAAG,AACb,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,MAAM,eAAC,CAAC,AACP,OAAO,CAAE,IAAI,CAAC,CAAC,AAChB,CAAC,AACF,CAAC"}`
};
var _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `${$$result.head += `<link rel="${"manifest"}" href="${"/manifest.webmanifest"}" data-svelte="svelte-1r84mds"><meta name="${"description"}" content="${"questo \xE8 il nuovo sitoTest di Federico Longhin"}" data-svelte="svelte-1r84mds"><meta name="${"apple-mobile-web-app-capable"}" content="${"yes"}" data-svelte="svelte-1r84mds"><link rel="${"apple-touch-icon"}" href="${"/pencil-512x512.png"}" data-svelte="svelte-1r84mds"><meta name="${"msapplication-TileColor"}" content="${"#48e5c2"}" data-svelte="svelte-1r84mds"><meta name="${"theme-color"}" content="${"#333333"}" data-svelte="svelte-1r84mds">`, ""}

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<main class="${"svelte-193j25t"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"svelte-193j25t"}"><p>Federico Longhin - 2021</p></footer>

${validate_component(ReloadPrompt, "ReloadPrompt").$$render($$result, {}, {}, {})}`;
});
var __layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _layout
});
function load({error: error22, status}) {
  return {props: {error: error22, status}};
}
var Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {status} = $$props;
  let {error: error22} = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error22 !== void 0)
    $$bindings.error(error22);
  return `<h1>${escape2(status)}</h1>

<p>${escape2(error22.message)}</p>


${error22.stack ? `<pre>${escape2(error22.stack)}</pre>` : ``}`;
});
var error2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Error2,
  load
});
var css$5 = {
  code: ".content.svelte-13qm1wo{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}h1.svelte-13qm1wo{width:100%}",
  map: '{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script context=\\"module\\" lang=\\"ts\\">export const prerender = true;\\n</script>\\n\\n<svelte:head>\\n\\t<title>Home</title>\\n</svelte:head>\\n\\n<div class=\\"content\\">\\n\\t<h1>Benvenuto nel nuovino sitino</h1>\\n\\n\\t<h2>Chiss\xE0 se funziona... bah</h2>\\n\\t<h2>\\n\\t\\tAh, questo sito \xE8 ancora in sviluppo, quindi ci sta che qualcosa faccia schifo/non funzioni...\\n\\t\\t(in realt\xE0 \xE8 solo una scusa per giudicare le monnezze che non ho voglia di sistemare(in\\n\\t\\trealt\xE0(si, di nuovo) dico che non \xE8 che non ho voglia di farlo, ma non me ne accorgo/non so\\n\\t\\tfarlo... umilt\xE0 ragazzi... sempre))\\n\\t</h2>\\n</div>\\n\\n<style>\\n\\t.content {\\n\\t\\twidth: 100%;\\n\\t\\tmax-width: var(--column-width);\\n\\t\\tmargin: var(--column-margin-top) auto 0 auto;\\n\\t}\\n\\th1 {\\n\\t\\twidth: 100%;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAoBC,QAAQ,eAAC,CAAC,AACT,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IAAI,cAAc,CAAC,CAC9B,MAAM,CAAE,IAAI,mBAAmB,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,IAAI,AAC7C,CAAC,AACD,EAAE,eAAC,CAAC,AACH,KAAK,CAAE,IAAI,AACZ,CAAC"}'
};
var prerender$5 = true;
var Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}`, ""}

<div class="${"content svelte-13qm1wo"}"><h1 class="${"svelte-13qm1wo"}">Benvenuto nel nuovino sitino</h1>

	<h2>Chiss\xE0 se funziona... bah</h2>
	<h2>Ah, questo sito \xE8 ancora in sviluppo, quindi ci sta che qualcosa faccia schifo/non funzioni...
		(in realt\xE0 \xE8 solo una scusa per giudicare le monnezze che non ho voglia di sistemare(in
		realt\xE0(si, di nuovo) dico che non \xE8 che non ho voglia di farlo, ma non me ne accorgo/non so
		farlo... umilt\xE0 ragazzi... sempre))
	</h2>
</div>`;
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Routes,
  prerender: prerender$5
});
var A__layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}`;
});
var a__layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": A__layout
});
var css$4 = {
  code: "section.svelte-1jlhe5t{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}",
  map: '{"version":3,"file":"Italiano.svelte","sources":["Italiano.svelte"],"sourcesContent":["<script context=\\"module\\" lang=\\"ts\\">import snarkdown from \'snarkdown\';\\nconst source = `\\n\\t# This is a header`;\\nlet md = \'_this_ is very very is **easy** to ``use``.\';\\nlet html = snarkdown(md);\\nconsole.log(html);\\nexport const prerender = true;\\n</script>\\n\\n<script>\\n\\timport IndicePath from \'$lib/IndicePath/index.svelte\';\\n</script>\\n\\n<IndicePath />\\n\\n<svelte:head>\\n\\t<title>Home</title>\\n</svelte:head>\\n\\n<section>\\n\\t{@html snarkdown(md)}\\n</section>\\n\\n<style>\\n\\tsection {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tflex: 1;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAwBC,OAAO,eAAC,CAAC,AACR,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,IAAI,CAAE,CAAC,AACR,CAAC"}'
};
var md = "_this_ is very very is **easy** to ``use``.";
var html = (0, import_snarkdown.default)(md);
console.log(html);
var prerender$4 = true;
var Italiano = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}

${$$result.head += `${$$result.title = `<title>Home</title>`, ""}`, ""}

<section class="${"svelte-1jlhe5t"}"><!-- HTML_TAG_START -->${(0, import_snarkdown.default)(md)}<!-- HTML_TAG_END -->
</section>`;
});
var Italiano$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Italiano,
  prerender: prerender$4
});
var La_visione_dell_uomo_nel_positivo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Date Importanti</h2>
<ul><li><code>Inizia nel 1918</code> (Prima guerra mondiale), che cambier\xE0 la storia, finiscono gli imperi e nascono le forme statali</li>
<li><code>Finisce nel 1991</code> (caduta dell\u2019URSS). Finisce il periodo fascista, le ideologie e il mondo diviso in modello comunista-liberista.</li>
<li>\xC8 compresa anche la caduta del muro di Berlino(<code>1989</code>).</li>
<li>\xC8 detto <strong>secolo breve</strong>(titolo dell\u2019opera di Hobsbawm).</li></ul>
<h2>La societ\xE0 di massa</h2>
<p>Definita dal sociologo francese <code>Le Bon</code> in <code>la psicologia delle folle</code>. Dice che per la prima volta c\u2019\xE8 un <strong>iperdemocrazia</strong>, (eccesso di democrazia), positivo ma omologante. Tutti hanno a disposizione beni e strumenti. <em>La societ\xE0 di massa \xE8 la societ\xE0 del pieno</em>: ovunque tu vada c\u2019\xE8 gente. si passa dal\u2019idea di <em>sogetto / divino</em> a quella di <em>massa / pieno</em>.</p>
<p>Caratteristiche della societ\xE0 di massa:</p>
<ul><li><p><strong>Incremento demografico:</strong> c\u2019\xE8 tanta natalit\xE0, aumento della vita media e le persone si spostano nelle citt\xE0.</p></li>
<li><p><strong>Urbanesimo e nuove citt\xE0:</strong> Nelle citt\xE0 c\u2019\xE8 disponibilit\xE0 di lavoro, opportunit\xE0 culturali, di svago\u2026 Molte citt\xE0 europee diventano simbolo del 900.</p>
<blockquote><p><strong>Evoluzione delle citt\xE0:</strong> Nascono dopo il 1000, hanno le mura, con all\u2019interno il potere politico e religioso, fuori la campagna \u2013&gt; Si trasforma, e anche i territori al di fuori vengono considerati citt\xE0 \u2013&gt; incrementa la popolazione e nascono esercizi commerciali \u2013&gt; Prima/seconda rivoluzione industriale: nasce la periferia, nascono periferie di industrie, citt\xE0 dormitorio, citt\xE0 ghetto\u2026 \u2013&gt; oggi si parla di citt\xE0 diffusa (ha un inizio ma la fine \xE8 sempre pi\xF9 dilatata).</p></blockquote></li>
<li><p><strong>Pubblicit\xE0:</strong> Inizialmente era su carta(manifesti, cartelloni), oggi su Web/social. l\u2019industria ha tanti prodotti da vendere, quindi ti <code>induce a comprarli</code>, per il gusto di comprare. <strong>Consumare</strong> \xE8 il verbo del 900, frenesia dell\u2019acquisto. Nasce l\u2019esposizione universale(<code>EXPO</code>) come modo per pubblicizzare i prodotti. Viene costruita la torre Eiffel per l\u2019expo del 1900 di Parigi.</p></li>
<li><p><strong>La belle epoque:</strong> Vengono definiti cos\xEC i primi 15 anni del Novecento, ovvero quando <code>le persone iniziano a divertirsi</code>. Nasce come <code>fare qualcosa di diverso</code>, come diversivo al lavoro. Si iniuzia ad andare a ballare, feste, Cabaret, casin\xF2, Vacanze, si utilizza la macchina per gli spostamenti etc\u2026 Si vede dal\u2019architettura delle citt\xE0(Gaud\xEC a Barcellona), palazzi decorati, case liberty di Mondello.</p></li>
<li><p><strong>Progresso e esito della seconda rivoluzione industriale:</strong> \xC8 la Conseguenza dell\u2019innovazione scientifica, progresso arriva dall\u2019applicazione delle scoperte tecniche e scientifiche.</p>
<blockquote><p><strong>I Riv. Industriale in Inghilterra</strong> per le vie di comunicazione(commercio triangolare), la rete ferroviaria molto avanzata, democrazia pi\xF9 antica(1688), rivoluzione agricola\u2026 Nasce la macchina a vapore, carbon coke, telaio meccanico.</p></blockquote>
<p>Grazie alla <strong>I Riv. Industriale</strong> nasce l\u2019industria come luogo dell\u2019azione, e cambia il modo di produrre, la citt\xE0 e l\u2019educazione. nascono scuole tecniche, ingegneria(\xB11800).</p>
<p><strong>La II Riv. Industriale</strong> nasce negli USA, poi si diffonde in Europa e Giappone. \xC8 la rivoluzione dell\u2019elettricit\xE0 e del petrolio. arriva l\u2019illuminazione, si velocizzano le produzioni, mezzi di trasporto, arriva la plastica\u2026 Viene illuminata NY(1883), arriva il telefono di Marconi, motore a scoppio di Benz, areoplano e l\u2019automobile. Henry Ford fu il primo ad applicare le innovazioni della rivoluzione. Introduce la catena di montaggio, migliorata dalla teoria Taylor(Taylorismo), secondo la quale bisogna applicare il concetto di tempo alla catena.</p>
<blockquote><p><strong>Le altre rivoluzioni:</strong> La III Riv. Industriale \xE8 in America e Asia(1950), con l\u2019Elettronica, Informatica, il computer e Internet. Ora siamo nella IV Riv. Industriale, o industria 4.0, dove si utilizzano i robot e tutti i sistemi digitali.</p></blockquote></li>
<li><p><strong>La societ\xE0 e le classi sociali della societ\xE0 di massa:</strong> Inizialmente nella societ\xE0 medioevale c\u2019erano nobili, clero e popolo. nel 1000, con l\u2019arrivo della citt\xE0 viene introdotta la borghesia(Borgo \u2013&gt; Citt\xE0), ceto sociale produttivo che lavora per vivere. Clero e Nobilt\xE0 vanno sempre diminuendo, fino al 1900, perdendo la loro centralit\xE0. <code>La socit\xE0 \xE8 quindi borghese</code>, con all\u2019interno le varie distinzioni.</p></li>
<li><p><strong>I consumi:</strong> C\u2019\xE8 una grandissima <code>disponibilit\xE0 dei beni</code>, e la catena di montaggio riesce a produrre tantissimi pezzi. Nascono quindi i grandi magazzini(<em>Harrods</em> a Londra, <em>La Faiette</em> a Parigi\u2026).</p></li>
<li><p><strong>I partiti:</strong> Sono organizzazioni di persone accumunate da idee politiche simili. Nascono con la Riv. Francese come <em>Club</em>, inizialmente si chiamavano <code>Partiti di notabili</code>, perch\xE8 erano composti da poche persone di ceti sociali alti, o con una propensione alla politica. Dal 900 si parla di <code>Partiti di massa</code>, con un maggior coinvolgimentio. \xC8 dovuto dall\u2019aumento dell\u2019istruzione e la gente si lasciava coinvolgere. Il voto passa al suffragio universale, quindi molte pi\xF9 persone aderiscono ai partiti.</p></li></ul>`;
});
var LaVisioneDellUomoNelPositivo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": La_visione_dell_uomo_nel_positivo
});
var Prima_guerra_mondiale = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Date Importanti</h2>
<ul><li><code>Inizia nel 1918</code> (Prima guerra mondiale), che cambier\xE0 la storia, finiscono gli imperi e nascono le forme statali</li>
<li><code>Finisce nel 1991</code> (caduta dell\u2019URSS). Finisce il periodo fascista, le ideologie e il mondo diviso in modello comunista-liberista.</li>
<li>\xC8 compresa anche la caduta del muro di Berlino(<code>1989</code>).</li>
<li>\xC8 detto <strong>secolo breve</strong>(titolo dell\u2019opera di Hobsbawm).</li></ul>
<h2>La societ\xE0 di massa</h2>
<p>Definita dal sociologo francese <code>Le Bon</code> in <code>la psicologia delle folle</code>. Dice che per la prima volta c\u2019\xE8 un <strong>iperdemocrazia</strong>, (eccesso di democrazia), positivo ma omologante. Tutti hanno a disposizione beni e strumenti. <em>La societ\xE0 di massa \xE8 la societ\xE0 del pieno</em>: ovunque tu vada c\u2019\xE8 gente. si passa dal\u2019idea di <em>sogetto / divino</em> a quella di <em>massa / pieno</em>.</p>
<p>Caratteristiche della societ\xE0 di massa:</p>
<ul><li><p><strong>Incremento demografico:</strong> c\u2019\xE8 tanta natalit\xE0, aumento della vita media e le persone si spostano nelle citt\xE0.</p></li>
<li><p><strong>Urbanesimo e nuove citt\xE0:</strong> Nelle citt\xE0 c\u2019\xE8 disponibilit\xE0 di lavoro, opportunit\xE0 culturali, di svago\u2026 Molte citt\xE0 europee diventano simbolo del 900.</p>
<blockquote><p><strong>Evoluzione delle citt\xE0:</strong> Nascono dopo il 1000, hanno le mura, con all\u2019interno il potere politico e religioso, fuori la campagna \u2013&gt; Si trasforma, e anche i territori al di fuori vengono considerati citt\xE0 \u2013&gt; incrementa la popolazione e nascono esercizi commerciali \u2013&gt; Prima/seconda rivoluzione industriale: nasce la periferia, nascono periferie di industrie, citt\xE0 dormitorio, citt\xE0 ghetto\u2026 \u2013&gt; oggi si parla di citt\xE0 diffusa (ha un inizio ma la fine \xE8 sempre pi\xF9 dilatata).</p></blockquote></li>
<li><p><strong>Pubblicit\xE0:</strong> Inizialmente era su carta(manifesti, cartelloni), oggi su Web/social. l\u2019industria ha tanti prodotti da vendere, quindi ti <code>induce a comprarli</code>, per il gusto di comprare. <strong>Consumare</strong> \xE8 il verbo del 900, frenesia dell\u2019acquisto. Nasce l\u2019esposizione universale(<code>EXPO</code>) come modo per pubblicizzare i prodotti. Viene costruita la torre Eiffel per l\u2019expo del 1900 di Parigi.</p></li>
<li><p><strong>La belle epoque:</strong> Vengono definiti cos\xEC i primi 15 anni del Novecento, ovvero quando <code>le persone iniziano a divertirsi</code>. Nasce come <code>fare qualcosa di diverso</code>, come diversivo al lavoro. Si iniuzia ad andare a ballare, feste, Cabaret, casin\xF2, Vacanze, si utilizza la macchina per gli spostamenti etc\u2026 Si vede dal\u2019architettura delle citt\xE0(Gaud\xEC a Barcellona), palazzi decorati, case liberty di Mondello.</p></li>
<li><p><strong>Progresso e esito della seconda rivoluzione industriale:</strong> \xC8 la Conseguenza dell\u2019innovazione scientifica, progresso arriva dall\u2019applicazione delle scoperte tecniche e scientifiche.</p>
<blockquote><p><strong>I Riv. Industriale in Inghilterra</strong> per le vie di comunicazione(commercio triangolare), la rete ferroviaria molto avanzata, democrazia pi\xF9 antica(1688), rivoluzione agricola\u2026 Nasce la macchina a vapore, carbon coke, telaio meccanico.</p></blockquote>
<p>Grazie alla <strong>I Riv. Industriale</strong> nasce l\u2019industria come luogo dell\u2019azione, e cambia il modo di produrre, la citt\xE0 e l\u2019educazione. nascono scuole tecniche, ingegneria(\xB11800).</p>
<p><strong>La II Riv. Industriale</strong> nasce negli USA, poi si diffonde in Europa e Giappone. \xC8 la rivoluzione dell\u2019elettricit\xE0 e del petrolio. arriva l\u2019illuminazione, si velocizzano le produzioni, mezzi di trasporto, arriva la plastica\u2026 Viene illuminata NY(1883), arriva il telefono di Marconi, motore a scoppio di Benz, areoplano e l\u2019automobile. Henry Ford fu il primo ad applicare le innovazioni della rivoluzione. Introduce la catena di montaggio, migliorata dalla teoria Taylor(Taylorismo), secondo la quale bisogna applicare il concetto di tempo alla catena.</p>
<blockquote><p><strong>Le altre rivoluzioni:</strong> La III Riv. Industriale \xE8 in America e Asia(1950), con l\u2019Elettronica, Informatica, il computer e Internet. Ora siamo nella IV Riv. Industriale, o industria 4.0, dove si utilizzano i robot e tutti i sistemi digitali.</p></blockquote></li>
<li><p><strong>La societ\xE0 e le classi sociali della societ\xE0 di massa:</strong> Inizialmente nella societ\xE0 medioevale c\u2019erano nobili, clero e popolo. nel 1000, con l\u2019arrivo della citt\xE0 viene introdotta la borghesia(Borgo \u2013&gt; Citt\xE0), ceto sociale produttivo che lavora per vivere. Clero e Nobilt\xE0 vanno sempre diminuendo, fino al 1900, perdendo la loro centralit\xE0. <code>La socit\xE0 \xE8 quindi borghese</code>, con all\u2019interno le varie distinzioni.</p></li>
<li><p><strong>I consumi:</strong> C\u2019\xE8 una grandissima <code>disponibilit\xE0 dei beni</code>, e la catena di montaggio riesce a produrre tantissimi pezzi. Nascono quindi i grandi magazzini(<em>Harrods</em> a Londra, <em>La Faiette</em> a Parigi\u2026).</p></li>
<li><p><strong>I partiti:</strong> Sono organizzazioni di persone accumunate da idee politiche simili. Nascono con la Riv. Francese come <em>Club</em>, inizialmente si chiamavano <code>Partiti di notabili</code>, perch\xE8 erano composti da poche persone di ceti sociali alti, o con una propensione alla politica. Dal 900 si parla di <code>Partiti di massa</code>, con un maggior coinvolgimentio. \xC8 dovuto dall\u2019aumento dell\u2019istruzione e la gente si lasciava coinvolgere. Il voto passa al suffragio universale, quindi molte pi\xF9 persone aderiscono ai partiti.</p></li></ul>`;
});
var PrimaGuerraMondiale = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Prima_guerra_mondiale
});
var css$3 = {
  code: "section.svelte-1bgohwt{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}h1.svelte-1bgohwt{width:100%}",
  map: `{"version":3,"file":"Il-Novecento.svelte","sources":["Il-Novecento.svelte"],"sourcesContent":["<script context=\\"module\\" lang=\\"ts\\">export const prerender = true;\\n</script>\\n\\n<script>\\n\\timport IndicePath from '$lib/IndicePath/index.svelte';\\n\\n\\tvar sectionName = 'sectname';\\n</script>\\n\\n<IndicePath />\\n\\n<svelte:head />\\n\\n<section>\\n\\t<h1>Il Novecento</h1>\\n</section>\\n\\n<style>\\n\\tsection {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tflex: 1;\\n\\t}\\n\\n\\th1 {\\n\\t\\twidth: 100%;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAkBC,OAAO,eAAC,CAAC,AACR,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,IAAI,CAAE,CAAC,AACR,CAAC,AAED,EAAE,eAAC,CAAC,AACH,KAAK,CAAE,IAAI,AACZ,CAAC"}`
};
var prerender$3 = true;
var Il_Novecento = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}

${$$result.head += ``, ""}

<section class="${"svelte-1bgohwt"}"><h1 class="${"svelte-1bgohwt"}">Il Novecento</h1>
</section>`;
});
var IlNovecento = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Il_Novecento,
  prerender: prerender$3
});
var IndiceElement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {pageURL} = $$props;
  let {pageName: pageName2 = ""} = $$props;
  let {date} = $$props;
  var fullURL = pageURL + "/" + pageName2.replace(" ", "-").replace("'", "-");
  if ($$props.pageURL === void 0 && $$bindings.pageURL && pageURL !== void 0)
    $$bindings.pageURL(pageURL);
  if ($$props.pageName === void 0 && $$bindings.pageName && pageName2 !== void 0)
    $$bindings.pageName(pageName2);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  return `<div class="${"indice-elem inline"}"><div><a${add_attribute("href", fullURL, 0)}>- ${escape2(pageName2)}</a></div>
	${date !== "noDate" ? `<div class="${"indice-elem-data"}">${escape2(date)}</div>` : ``}</div>`;
});
var css$2 = {
  code: "section.svelte-1jlhe5t{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}",
  map: `{"version":3,"file":"Storia.svelte","sources":["Storia.svelte"],"sourcesContent":["<script context=\\"module\\" lang=\\"ts\\">export const prerender = true;\\nvar pageName;\\n</script>\\n\\n<script>\\n\\timport { page } from '$app/stores';\\n\\timport IndiceElement from '$lib/IndiceElement/index.svelte';\\n\\timport IndicePath from '$lib/IndicePath/index.svelte';\\n</script>\\n\\n<IndicePath />\\n\\n<svelte:head>\\n\\t<title>{pageName}</title>\\n</svelte:head>\\n\\n<section>\\n\\t<IndiceElement pageURL={$page.path} pageName={\\"Il-Novecento\\"} date={'06/11/2021'} />\\n\\t<IndiceElement pageURL={$page.path} pageName={\\"Prima-guerra-mondiale\\"} date={'06/11/2021'} />\\n\\t<IndiceElement pageURL={$page.path} pageName={\\"La-visione-dell'uomo-nel-positivo\\"} date={'06/11/2021'} />\\n\\n</section>\\n\\n<style>\\n\\tsection {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tflex: 1;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAwBC,OAAO,eAAC,CAAC,AACR,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,IAAI,CAAE,CAAC,AACR,CAAC"}`
};
var prerender$2 = true;
var pageName;
var Storia = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}

${$$result.head += `${$$result.title = `<title>${escape2(pageName)}</title>`, ""}`, ""}

<section class="${"svelte-1jlhe5t"}">${validate_component(IndiceElement, "IndiceElement").$$render($$result, {
    pageURL: $page.path,
    pageName: "Il-Novecento",
    date: "06/11/2021"
  }, {}, {})}
	${validate_component(IndiceElement, "IndiceElement").$$render($$result, {
    pageURL: $page.path,
    pageName: "Prima-guerra-mondiale",
    date: "06/11/2021"
  }, {}, {})}
	${validate_component(IndiceElement, "IndiceElement").$$render($$result, {
    pageURL: $page.path,
    pageName: "La-visione-dell'uomo-nel-positivo",
    date: "06/11/2021"
  }, {}, {})}

</section>`;
});
var Storia$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Storia,
  prerender: prerender$2
});
var css$1 = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: `{"version":3,"file":"scuola.svelte","sources":["scuola.svelte"],"sourcesContent":["<script context=\\"module\\">\\n\\timport { page } from '$app/stores';\\n\\timport IndiceElement from '$lib/IndiceElement/index.svelte';\\n\\n\\timport { browser, dev } from '$app/env';\\n\\n\\t// we don't need any JS on this page, though we'll load\\n\\t// it in dev so that we get hot module replacement...\\n\\texport const hydrate = dev;\\n\\n\\t// ...but if the client-side router is already loaded\\n\\t// (i.e. we came here from elsewhere in the app), use it\\n\\texport const router = browser;\\n\\n\\t// since there's no dynamic data here, we can prerender\\n\\t// it so that it gets served as a static asset in prod\\n\\texport const prerender = true;\\n</script>\\n\\n<svelte:head>\\n\\t<title>Scuola</title>\\n</svelte:head>\\n\\n<div class=\\"content\\">\\n\\t<h1>Benvenuto nella sezione scuola</h1>\\n\\n\\t<p>Qui troverai tutti gli appunti divisi per materie etc...</p>\\n\\n\\t<p>Materie:</p>\\n\\n\\t<IndiceElement pageURL={$page.path} pageName={'Storia'} date={'noDate'} />\\n\\t<IndiceElement pageURL={$page.path} pageName={'Italiano'} date={'noDate'} />\\n</div>\\n\\n<style>\\n\\t.content {\\n\\t\\twidth: 100%;\\n\\t\\tmax-width: var(--column-width);\\n\\t\\tmargin: var(--column-margin-top) auto 0 auto;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAmCC,QAAQ,cAAC,CAAC,AACT,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IAAI,cAAc,CAAC,CAC9B,MAAM,CAAE,IAAI,mBAAmB,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,IAAI,AAC7C,CAAC"}`
};
var hydrate$1 = dev;
var router$1 = browser;
var prerender$1 = true;
var Scuola = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>Scuola</title>`, ""}`, ""}

<div class="${"content svelte-cf77e8"}"><h1>Benvenuto nella sezione scuola</h1>

	<p>Qui troverai tutti gli appunti divisi per materie etc...</p>

	<p>Materie:</p>

	${validate_component(IndiceElement, "IndiceElement").$$render($$result, {
    pageURL: $page.path,
    pageName: "Storia",
    date: "noDate"
  }, {}, {})}
	${validate_component(IndiceElement, "IndiceElement").$$render($$result, {
    pageURL: $page.path,
    pageName: "Italiano",
    date: "noDate"
  }, {}, {})}
</div>`;
});
var scuola = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Scuola,
  hydrate: hydrate$1,
  router: router$1,
  prerender: prerender$1
});
var css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: `{"version":3,"file":"About.svelte","sources":["About.svelte"],"sourcesContent":["<script context=\\"module\\">\\n\\timport { browser, dev } from '$app/env';\\n\\n\\t// we don't need any JS on this page, though we'll load\\n\\t// it in dev so that we get hot module replacement...\\n\\texport const hydrate = dev;\\n\\n\\t// ...but if the client-side router is already loaded\\n\\t// (i.e. we came here from elsewhere in the app), use it\\n\\texport const router = browser;\\n\\n\\t// since there's no dynamic data here, we can prerender\\n\\t// it so that it gets served as a static asset in prod\\n\\texport const prerender = true;\\n</script>\\n\\n<svelte:head>\\n\\t<title>About</title>\\n</svelte:head>\\n\\n<div class=\\"content\\">\\n\\t<h1>About</h1>\\n\\n\\t<p>\\n\\t\\tQuesto sito \xE8 stato sviluppato tramite l'utilizzo di Sveltkit. \xC8 completamente Open Source,\\n\\t\\ttutti i sorgenti disponibili sulla <a href=\\"https://github.com/FedericoLonghin/newWebsite\\"\\n\\t\\t\\t>Repo GitHub</a\\n\\t\\t>\\n\\t</p>\\n</div>\\n\\n<style>\\n\\t.content {\\n\\t\\twidth: 100%;\\n\\t\\tmax-width: var(--column-width);\\n\\t\\tmargin: var(--column-margin-top) auto 0 auto;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAgCC,QAAQ,cAAC,CAAC,AACT,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IAAI,cAAc,CAAC,CAC9B,MAAM,CAAE,IAAI,mBAAmB,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,IAAI,AAC7C,CAAC"}`
};
var hydrate = dev;
var router = browser;
var prerender = true;
var About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>About</title>`, ""}`, ""}

<div class="${"content svelte-cf77e8"}"><h1>About</h1>

	<p>Questo sito \xE8 stato sviluppato tramite l&#39;utilizzo di Sveltkit. \xC8 completamente Open Source,
		tutti i sorgenti disponibili sulla <a href="${"https://github.com/FedericoLonghin/newWebsite"}">Repo GitHub</a></p>
</div>`;
});
var About$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": About,
  hydrate,
  router,
  prerender
});

// .svelte-kit/vercel/entry.js
var entry_default = async (req, res) => {
  const {pathname, searchParams} = new URL(req.url || "", "http://localhost");
  const rendered = await render({
    method: req.method,
    headers: req.headers,
    path: pathname,
    query: searchParams,
    rawBody: await getRawBody(req)
  });
  if (rendered) {
    const {status, headers, body} = rendered;
    return res.writeHead(status, headers).end(body);
  }
  return res.writeHead(404).end();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
