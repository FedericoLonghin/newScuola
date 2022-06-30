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
function escape2(html) {
  return String(html).replace(/["'&<>]/g, (match) => escaped2[match]);
}
function each(items, fn) {
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
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
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, {$$slots = {}, context = new Map()} = {}) => {
      on_destroy = [];
      const result = {title: "", head: "", css: new Set()};
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
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
var css$6 = {
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
  $$result.css.add(css$6);
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
<<<<<<< HEAD
      file: "/./_app/start-50cbdb67.js",
      css: ["/./_app/assets/start-a8cd1609.css"],
      js: ["/./_app/start-50cbdb67.js", "/./_app/chunks/vendor-ce374a0d.js"]
=======
      file: "/./_app/start-bbeace96.js",
      css: ["/./_app/assets/start-a8cd1609.css"],
      js: ["/./_app/start-bbeace96.js", "/./_app/chunks/vendor-ce374a0d.js"]
>>>>>>> 9162d60f6603037c33acdde074ee19d81d459ff2
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
  assets: [{"file": "favicon.png", "size": 9145, "type": "image/png"}, {"file": "manifest.webmanifest", "size": 317, "type": "application/manifest+json"}, {"file": "pencil-512x512.png", "size": 9145, "type": "image/png"}, {"file": "robots.txt", "size": 67, "type": "text/plain"}],
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
      pattern: /^\/scuola\/Italiano\/La-visione-dell-uomo-nel-positivismo\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Italiano/La-visione-dell-uomo-nel-positivismo.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Italiano\/Età-del-realismo-e-del-positivismo\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Italiano/Et\xE0-del-realismo-e-del-positivismo.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Italiano\/L-architettura-del-Novecento\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Italiano/L-architettura-del-Novecento.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Italiano\/Il-romanzo-del-Novecento\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Italiano/Il-romanzo-del-Novecento.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Italiano\/L-evoluzione-del-romanzo\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Italiano/L-evoluzione-del-romanzo.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Italiano\/Luigi-Pirandello-nuovo\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Italiano/Luigi-Pirandello-nuovo.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Italiano\/Età-del-decadentismo\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Italiano/Et\xE0-del-decadentismo.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Italiano\/Gabriele-DAnnunzio\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Italiano/Gabriele-DAnnunzio.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Italiano\/Giuseppe-Ungaretti\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Italiano/Giuseppe-Ungaretti.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Italiano\/Giovanni-Pascoli\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Italiano/Giovanni-Pascoli.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Italiano\/I-promessi-sposi\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Italiano/I-promessi-sposi.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Italiano\/Luigi-Pirandello\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Italiano/Luigi-Pirandello.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Italiano\/Giovanni-Verga\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Italiano/Giovanni-Verga.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Italiano\/Il-naturalismo\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Italiano/Il-naturalismo.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Italiano\/Il-Novecento\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Italiano/Il-Novecento.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Italiano\/Italo-Svevo\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Italiano/Italo-Svevo.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Italiano\/Il-verismo\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Italiano/Il-verismo.md"],
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
      pattern: /^\/scuola\/Storia\/Il-mondo-del-dopoguerra\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Storia/Il-mondo-del-dopoguerra.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Storia\/Seconda-guerra-mondiale\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Storia/Seconda-guerra-mondiale.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Storia\/Genocidio-degli-Armeni\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Storia/Genocidio-degli-Armeni.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Storia\/Preparativi-di-guerra\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Storia/Preparativi-di-guerra.md"],
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
      pattern: /^\/scuola\/Storia\/Italia-repubblicana\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Storia/Italia-repubblicana.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Storia\/La-decolonizzazione\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Storia/La-decolonizzazione.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Storia\/L-età-di-Giolitti\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Storia/L-et\xE0-di-Giolitti.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Storia\/Rivoluzione-Russa\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Storia/Rivoluzione-Russa.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Storia\/Sistemi-economici\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Storia/Sistemi-economici.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Storia\/Venti-di-guerra\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Storia/Venti-di-guerra.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Storia\/Crisi-del-29\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Storia/Crisi-del-29.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Storia\/Il-Novecento\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Storia/Il-Novecento.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Storia\/Il-Fascismo\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Storia/Il-Fascismo.md"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/scuola\/Storia\/Il-nazismo\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/scuola/Storia/Il-nazismo.md"],
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
    },
    {
      type: "endpoint",
      pattern: /^\/jason\/?$/,
      params: empty,
      load: () => Promise.resolve().then(function() {
        return jason$1;
      })
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
  "src/routes/scuola/Italiano/La-visione-dell-uomo-nel-positivismo.md": () => Promise.resolve().then(function() {
    return LaVisioneDellUomoNelPositivismo;
  }),
  "src/routes/scuola/Italiano/Et\xE0-del-realismo-e-del-positivismo.md": () => Promise.resolve().then(function() {
    return Et_DelRealismoEDelPositivismo;
  }),
  "src/routes/scuola/Italiano/L-architettura-del-Novecento.md": () => Promise.resolve().then(function() {
    return LArchitetturaDelNovecento;
  }),
  "src/routes/scuola/Italiano/Il-romanzo-del-Novecento.md": () => Promise.resolve().then(function() {
    return IlRomanzoDelNovecento;
  }),
  "src/routes/scuola/Italiano/L-evoluzione-del-romanzo.md": () => Promise.resolve().then(function() {
    return LEvoluzioneDelRomanzo;
  }),
  "src/routes/scuola/Italiano/Luigi-Pirandello-nuovo.md": () => Promise.resolve().then(function() {
    return LuigiPirandelloNuovo;
  }),
  "src/routes/scuola/Italiano/Et\xE0-del-decadentismo.md": () => Promise.resolve().then(function() {
    return Et_DelDecadentismo;
  }),
  "src/routes/scuola/Italiano/Gabriele-DAnnunzio.md": () => Promise.resolve().then(function() {
    return GabrieleDAnnunzio;
  }),
  "src/routes/scuola/Italiano/Giuseppe-Ungaretti.md": () => Promise.resolve().then(function() {
    return GiuseppeUngaretti;
  }),
  "src/routes/scuola/Italiano/Giovanni-Pascoli.md": () => Promise.resolve().then(function() {
    return GiovanniPascoli;
  }),
  "src/routes/scuola/Italiano/I-promessi-sposi.md": () => Promise.resolve().then(function() {
    return IPromessiSposi;
  }),
  "src/routes/scuola/Italiano/Luigi-Pirandello.md": () => Promise.resolve().then(function() {
    return LuigiPirandello;
  }),
  "src/routes/scuola/Italiano/Giovanni-Verga.md": () => Promise.resolve().then(function() {
    return GiovanniVerga;
  }),
  "src/routes/scuola/Italiano/Il-naturalismo.md": () => Promise.resolve().then(function() {
    return IlNaturalismo;
  }),
  "src/routes/scuola/Italiano/Il-Novecento.md": () => Promise.resolve().then(function() {
    return IlNovecento$1;
  }),
  "src/routes/scuola/Italiano/Italo-Svevo.md": () => Promise.resolve().then(function() {
    return ItaloSvevo;
  }),
  "src/routes/scuola/Italiano/Il-verismo.md": () => Promise.resolve().then(function() {
    return IlVerismo;
  }),
  "src/routes/scuola/Italiano.svelte": () => Promise.resolve().then(function() {
    return Italiano$1;
  }),
  "src/routes/scuola/Storia/Il-mondo-del-dopoguerra.md": () => Promise.resolve().then(function() {
    return IlMondoDelDopoguerra;
  }),
  "src/routes/scuola/Storia/Seconda-guerra-mondiale.md": () => Promise.resolve().then(function() {
    return SecondaGuerraMondiale;
  }),
  "src/routes/scuola/Storia/Genocidio-degli-Armeni.md": () => Promise.resolve().then(function() {
    return GenocidioDegliArmeni;
  }),
  "src/routes/scuola/Storia/Preparativi-di-guerra.md": () => Promise.resolve().then(function() {
    return PreparativiDiGuerra;
  }),
  "src/routes/scuola/Storia/Prima-guerra-mondiale.md": () => Promise.resolve().then(function() {
    return PrimaGuerraMondiale;
  }),
  "src/routes/scuola/Storia/Italia-repubblicana.md": () => Promise.resolve().then(function() {
    return ItaliaRepubblicana;
  }),
  "src/routes/scuola/Storia/La-decolonizzazione.md": () => Promise.resolve().then(function() {
    return LaDecolonizzazione;
  }),
  "src/routes/scuola/Storia/L-et\xE0-di-Giolitti.md": () => Promise.resolve().then(function() {
    return LEt_DiGiolitti;
  }),
  "src/routes/scuola/Storia/Rivoluzione-Russa.md": () => Promise.resolve().then(function() {
    return RivoluzioneRussa;
  }),
  "src/routes/scuola/Storia/Sistemi-economici.md": () => Promise.resolve().then(function() {
    return SistemiEconomici;
  }),
  "src/routes/scuola/Storia/Venti-di-guerra.md": () => Promise.resolve().then(function() {
    return VentiDiGuerra;
  }),
  "src/routes/scuola/Storia/Crisi-del-29.md": () => Promise.resolve().then(function() {
    return CrisiDel29;
  }),
  "src/routes/scuola/Storia/Il-Novecento.md": () => Promise.resolve().then(function() {
    return IlNovecento;
  }),
  "src/routes/scuola/Storia/Il-Fascismo.md": () => Promise.resolve().then(function() {
    return IlFascismo;
  }),
  "src/routes/scuola/Storia/Il-nazismo.md": () => Promise.resolve().then(function() {
    return IlNazismo;
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
<<<<<<< HEAD
var metadata_lookup = {"src/routes/__layout.svelte": {"entry": "/./_app/pages/__layout.svelte-b7d78403.js", "css": ["/./_app/assets/pages/__layout.svelte-ad86439f.css", "/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/__layout.svelte-b7d78403.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, ".svelte-kit/build/components/error.svelte": {"entry": "/./_app/error.svelte-e254b435.js", "css": [], "js": ["/./_app/error.svelte-e254b435.js", "/./_app/chunks/vendor-ce374a0d.js"], "styles": null}, "src/routes/index.svelte": {"entry": "/./_app/pages/index.svelte-05f1da87.js", "css": ["/./_app/assets/pages/index.svelte-b170537a.css"], "js": ["/./_app/pages/index.svelte-05f1da87.js", "/./_app/chunks/vendor-ce374a0d.js"], "styles": null}, "src/routes/scuola/Italiano/La-visione-dell-uomo-nel-positivismo.md": {"entry": "/./_app/pages/scuola/Italiano/La-visione-dell-uomo-nel-positivismo.md-d2da79a1.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/La-visione-dell-uomo-nel-positivismo.md-d2da79a1.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/Et\xE0-del-realismo-e-del-positivismo.md": {"entry": "/./_app/pages/scuola/Italiano/Et\xE0-del-realismo-e-del-positivismo.md-5617caa1.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/Et\xE0-del-realismo-e-del-positivismo.md-5617caa1.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/L-architettura-del-Novecento.md": {"entry": "/./_app/pages/scuola/Italiano/L-architettura-del-Novecento.md-9ed9b34d.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/L-architettura-del-Novecento.md-9ed9b34d.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/Il-romanzo-del-Novecento.md": {"entry": "/./_app/pages/scuola/Italiano/Il-romanzo-del-Novecento.md-25ba411e.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/Il-romanzo-del-Novecento.md-25ba411e.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/L-evoluzione-del-romanzo.md": {"entry": "/./_app/pages/scuola/Italiano/L-evoluzione-del-romanzo.md-02008b52.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/L-evoluzione-del-romanzo.md-02008b52.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/Luigi-Pirandello-nuovo.md": {"entry": "/./_app/pages/scuola/Italiano/Luigi-Pirandello-nuovo.md-e531c7f2.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/Luigi-Pirandello-nuovo.md-e531c7f2.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/Et\xE0-del-decadentismo.md": {"entry": "/./_app/pages/scuola/Italiano/Et\xE0-del-decadentismo.md-91382210.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/Et\xE0-del-decadentismo.md-91382210.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/Gabriele-DAnnunzio.md": {"entry": "/./_app/pages/scuola/Italiano/Gabriele-DAnnunzio.md-7379ed72.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/Gabriele-DAnnunzio.md-7379ed72.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/Giuseppe-Ungaretti.md": {"entry": "/./_app/pages/scuola/Italiano/Giuseppe-Ungaretti.md-4f84e8cd.js", "css": [], "js": ["/./_app/pages/scuola/Italiano/Giuseppe-Ungaretti.md-4f84e8cd.js", "/./_app/chunks/vendor-ce374a0d.js"], "styles": null}, "src/routes/scuola/Italiano/Giovanni-Pascoli.md": {"entry": "/./_app/pages/scuola/Italiano/Giovanni-Pascoli.md-717c8dff.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/Giovanni-Pascoli.md-717c8dff.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/I-promessi-sposi.md": {"entry": "/./_app/pages/scuola/Italiano/I-promessi-sposi.md-5ac4b513.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/I-promessi-sposi.md-5ac4b513.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/Luigi-Pirandello.md": {"entry": "/./_app/pages/scuola/Italiano/Luigi-Pirandello.md-5e72ae55.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/Luigi-Pirandello.md-5e72ae55.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/Giovanni-Verga.md": {"entry": "/./_app/pages/scuola/Italiano/Giovanni-Verga.md-71d868b7.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/Giovanni-Verga.md-71d868b7.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/Il-naturalismo.md": {"entry": "/./_app/pages/scuola/Italiano/Il-naturalismo.md-d9661ed9.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/Il-naturalismo.md-d9661ed9.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/Il-Novecento.md": {"entry": "/./_app/pages/scuola/Italiano/Il-Novecento.md-6b757c42.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/Il-Novecento.md-6b757c42.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/Italo-Svevo.md": {"entry": "/./_app/pages/scuola/Italiano/Italo-Svevo.md-c675f120.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/Italo-Svevo.md-c675f120.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/Il-verismo.md": {"entry": "/./_app/pages/scuola/Italiano/Il-verismo.md-f209959b.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/Il-verismo.md-f209959b.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano.svelte": {"entry": "/./_app/pages/scuola/Italiano.svelte-89be912f.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano.svelte-89be912f.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js", "/./_app/chunks/jason-5e3c6ff0.js"], "styles": null}, "src/routes/scuola/Storia/Il-mondo-del-dopoguerra.md": {"entry": "/./_app/pages/scuola/Storia/Il-mondo-del-dopoguerra.md-e74d81e3.js", "css": [], "js": ["/./_app/pages/scuola/Storia/Il-mondo-del-dopoguerra.md-e74d81e3.js", "/./_app/chunks/vendor-ce374a0d.js"], "styles": null}, "src/routes/scuola/Storia/Seconda-guerra-mondiale.md": {"entry": "/./_app/pages/scuola/Storia/Seconda-guerra-mondiale.md-3dc85cc4.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Storia/Seconda-guerra-mondiale.md-3dc85cc4.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Storia/Genocidio-degli-Armeni.md": {"entry": "/./_app/pages/scuola/Storia/Genocidio-degli-Armeni.md-df4d637b.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Storia/Genocidio-degli-Armeni.md-df4d637b.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Storia/Preparativi-di-guerra.md": {"entry": "/./_app/pages/scuola/Storia/Preparativi-di-guerra.md-15dd24c0.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Storia/Preparativi-di-guerra.md-15dd24c0.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Storia/Prima-guerra-mondiale.md": {"entry": "/./_app/pages/scuola/Storia/Prima-guerra-mondiale.md-37eb3cb4.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Storia/Prima-guerra-mondiale.md-37eb3cb4.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Storia/Italia-repubblicana.md": {"entry": "/./_app/pages/scuola/Storia/Italia-repubblicana.md-f80440d3.js", "css": [], "js": ["/./_app/pages/scuola/Storia/Italia-repubblicana.md-f80440d3.js", "/./_app/chunks/vendor-ce374a0d.js"], "styles": null}, "src/routes/scuola/Storia/La-decolonizzazione.md": {"entry": "/./_app/pages/scuola/Storia/La-decolonizzazione.md-2acfdc10.js", "css": [], "js": ["/./_app/pages/scuola/Storia/La-decolonizzazione.md-2acfdc10.js", "/./_app/chunks/vendor-ce374a0d.js"], "styles": null}, "src/routes/scuola/Storia/L-et\xE0-di-Giolitti.md": {"entry": "/./_app/pages/scuola/Storia/L-et\xE0-di-Giolitti.md-c44993da.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Storia/L-et\xE0-di-Giolitti.md-c44993da.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Storia/Rivoluzione-Russa.md": {"entry": "/./_app/pages/scuola/Storia/Rivoluzione-Russa.md-90cde78c.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Storia/Rivoluzione-Russa.md-90cde78c.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Storia/Sistemi-economici.md": {"entry": "/./_app/pages/scuola/Storia/Sistemi-economici.md-ca0ff459.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Storia/Sistemi-economici.md-ca0ff459.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Storia/Venti-di-guerra.md": {"entry": "/./_app/pages/scuola/Storia/Venti-di-guerra.md-35cd1236.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Storia/Venti-di-guerra.md-35cd1236.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Storia/Crisi-del-29.md": {"entry": "/./_app/pages/scuola/Storia/Crisi-del-29.md-9f084544.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Storia/Crisi-del-29.md-9f084544.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Storia/Il-Novecento.md": {"entry": "/./_app/pages/scuola/Storia/Il-Novecento.md-25d19c81.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Storia/Il-Novecento.md-25d19c81.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Storia/Il-Fascismo.md": {"entry": "/./_app/pages/scuola/Storia/Il-Fascismo.md-c9debda6.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Storia/Il-Fascismo.md-c9debda6.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Storia/Il-nazismo.md": {"entry": "/./_app/pages/scuola/Storia/Il-nazismo.md-624a7e3d.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Storia/Il-nazismo.md-624a7e3d.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Storia.svelte": {"entry": "/./_app/pages/scuola/Storia.svelte-9bf2f22a.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Storia.svelte-9bf2f22a.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js", "/./_app/chunks/jason-5e3c6ff0.js"], "styles": null}, "src/routes/scuola.svelte": {"entry": "/./_app/pages/scuola.svelte-f3a60038.js", "css": [], "js": ["/./_app/pages/scuola.svelte-f3a60038.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/jason-5e3c6ff0.js"], "styles": null}, "src/routes/About.svelte": {"entry": "/./_app/pages/About.svelte-a12afb4f.js", "css": ["/./_app/assets/pages/About.svelte-9b1330ce.css"], "js": ["/./_app/pages/About.svelte-a12afb4f.js", "/./_app/chunks/vendor-ce374a0d.js"], "styles": null}};
=======
var metadata_lookup = {"src/routes/__layout.svelte": {"entry": "/./_app/pages/__layout.svelte-b7d78403.js", "css": ["/./_app/assets/pages/__layout.svelte-ad86439f.css", "/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/__layout.svelte-b7d78403.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, ".svelte-kit/build/components/error.svelte": {"entry": "/./_app/error.svelte-e254b435.js", "css": [], "js": ["/./_app/error.svelte-e254b435.js", "/./_app/chunks/vendor-ce374a0d.js"], "styles": null}, "src/routes/index.svelte": {"entry": "/./_app/pages/index.svelte-05f1da87.js", "css": ["/./_app/assets/pages/index.svelte-b170537a.css"], "js": ["/./_app/pages/index.svelte-05f1da87.js", "/./_app/chunks/vendor-ce374a0d.js"], "styles": null}, "src/routes/scuola/Italiano/La-visione-dell-uomo-nel-positivismo.md": {"entry": "/./_app/pages/scuola/Italiano/La-visione-dell-uomo-nel-positivismo.md-d2da79a1.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/La-visione-dell-uomo-nel-positivismo.md-d2da79a1.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/Et\xE0-del-realismo-e-del-positivismo.md": {"entry": "/./_app/pages/scuola/Italiano/Et\xE0-del-realismo-e-del-positivismo.md-5617caa1.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/Et\xE0-del-realismo-e-del-positivismo.md-5617caa1.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/L-architettura-del-Novecento.md": {"entry": "/./_app/pages/scuola/Italiano/L-architettura-del-Novecento.md-9ed9b34d.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/L-architettura-del-Novecento.md-9ed9b34d.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/Il-romanzo-del-Novecento.md": {"entry": "/./_app/pages/scuola/Italiano/Il-romanzo-del-Novecento.md-25ba411e.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/Il-romanzo-del-Novecento.md-25ba411e.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/L-evoluzione-del-romanzo.md": {"entry": "/./_app/pages/scuola/Italiano/L-evoluzione-del-romanzo.md-94428b89.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/L-evoluzione-del-romanzo.md-94428b89.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/Et\xE0-del-decadentismo.md": {"entry": "/./_app/pages/scuola/Italiano/Et\xE0-del-decadentismo.md-91382210.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/Et\xE0-del-decadentismo.md-91382210.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/Gabriele-DAnnunzio.md": {"entry": "/./_app/pages/scuola/Italiano/Gabriele-DAnnunzio.md-7379ed72.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/Gabriele-DAnnunzio.md-7379ed72.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/Giuseppe-Ungaretti.md": {"entry": "/./_app/pages/scuola/Italiano/Giuseppe-Ungaretti.md-fba7e0c4.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/Giuseppe-Ungaretti.md-fba7e0c4.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/Giovanni-Pascoli.md": {"entry": "/./_app/pages/scuola/Italiano/Giovanni-Pascoli.md-717c8dff.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/Giovanni-Pascoli.md-717c8dff.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/I-promessi-sposi.md": {"entry": "/./_app/pages/scuola/Italiano/I-promessi-sposi.md-8f796381.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/I-promessi-sposi.md-8f796381.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/Luigi-Pirandello.md": {"entry": "/./_app/pages/scuola/Italiano/Luigi-Pirandello.md-5e72ae55.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/Luigi-Pirandello.md-5e72ae55.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/Giovanni-Verga.md": {"entry": "/./_app/pages/scuola/Italiano/Giovanni-Verga.md-71d868b7.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/Giovanni-Verga.md-71d868b7.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/Il-naturalismo.md": {"entry": "/./_app/pages/scuola/Italiano/Il-naturalismo.md-d9661ed9.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/Il-naturalismo.md-d9661ed9.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/Il-Novecento.md": {"entry": "/./_app/pages/scuola/Italiano/Il-Novecento.md-6b757c42.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/Il-Novecento.md-6b757c42.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/Italo-Svevo.md": {"entry": "/./_app/pages/scuola/Italiano/Italo-Svevo.md-c675f120.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/Italo-Svevo.md-c675f120.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano/Il-verismo.md": {"entry": "/./_app/pages/scuola/Italiano/Il-verismo.md-f209959b.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano/Il-verismo.md-f209959b.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Italiano.svelte": {"entry": "/./_app/pages/scuola/Italiano.svelte-84da65ab.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Italiano.svelte-84da65ab.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js", "/./_app/chunks/jason-7c8ff622.js"], "styles": null}, "src/routes/scuola/Storia/Il-mondo-del-dopoguerra.md": {"entry": "/./_app/pages/scuola/Storia/Il-mondo-del-dopoguerra.md-5096fd1c.js", "css": [], "js": ["/./_app/pages/scuola/Storia/Il-mondo-del-dopoguerra.md-5096fd1c.js", "/./_app/chunks/vendor-ce374a0d.js"], "styles": null}, "src/routes/scuola/Storia/Seconda-guerra-mondiale.md": {"entry": "/./_app/pages/scuola/Storia/Seconda-guerra-mondiale.md-51688882.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Storia/Seconda-guerra-mondiale.md-51688882.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Storia/Genocidio-degli-Armeni.md": {"entry": "/./_app/pages/scuola/Storia/Genocidio-degli-Armeni.md-df4d637b.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Storia/Genocidio-degli-Armeni.md-df4d637b.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Storia/Preparativi-di-guerra.md": {"entry": "/./_app/pages/scuola/Storia/Preparativi-di-guerra.md-15dd24c0.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Storia/Preparativi-di-guerra.md-15dd24c0.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Storia/Prima-guerra-mondiale.md": {"entry": "/./_app/pages/scuola/Storia/Prima-guerra-mondiale.md-37eb3cb4.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Storia/Prima-guerra-mondiale.md-37eb3cb4.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Storia/Italia-repubblicana.md": {"entry": "/./_app/pages/scuola/Storia/Italia-repubblicana.md-3e7e7ccb.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Storia/Italia-repubblicana.md-3e7e7ccb.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Storia/La-decolonizzazione.md": {"entry": "/./_app/pages/scuola/Storia/La-decolonizzazione.md-d6988784.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Storia/La-decolonizzazione.md-d6988784.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Storia/L-et\xE0-di-Giolitti.md": {"entry": "/./_app/pages/scuola/Storia/L-et\xE0-di-Giolitti.md-c44993da.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Storia/L-et\xE0-di-Giolitti.md-c44993da.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Storia/Rivoluzione-Russa.md": {"entry": "/./_app/pages/scuola/Storia/Rivoluzione-Russa.md-90cde78c.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Storia/Rivoluzione-Russa.md-90cde78c.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Storia/Sistemi-economici.md": {"entry": "/./_app/pages/scuola/Storia/Sistemi-economici.md-ca0ff459.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Storia/Sistemi-economici.md-ca0ff459.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Storia/Venti-di-guerra.md": {"entry": "/./_app/pages/scuola/Storia/Venti-di-guerra.md-35cd1236.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Storia/Venti-di-guerra.md-35cd1236.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Storia/Crisi-del-29.md": {"entry": "/./_app/pages/scuola/Storia/Crisi-del-29.md-9f084544.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Storia/Crisi-del-29.md-9f084544.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Storia/Il-Novecento.md": {"entry": "/./_app/pages/scuola/Storia/Il-Novecento.md-25d19c81.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Storia/Il-Novecento.md-25d19c81.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Storia/Il-Fascismo.md": {"entry": "/./_app/pages/scuola/Storia/Il-Fascismo.md-c9debda6.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Storia/Il-Fascismo.md-c9debda6.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Storia/Il-nazismo.md": {"entry": "/./_app/pages/scuola/Storia/Il-nazismo.md-624a7e3d.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Storia/Il-nazismo.md-624a7e3d.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js"], "styles": null}, "src/routes/scuola/Storia.svelte": {"entry": "/./_app/pages/scuola/Storia.svelte-875a53c0.js", "css": ["/./_app/assets/index.svelte_svelte&type=style&lang-618fbc1b.css"], "js": ["/./_app/pages/scuola/Storia.svelte-875a53c0.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/index-b4e920e1.js", "/./_app/chunks/index.svelte_svelte&type=style&lang-f80beb00.js", "/./_app/chunks/jason-7c8ff622.js"], "styles": null}, "src/routes/scuola.svelte": {"entry": "/./_app/pages/scuola.svelte-ffe5f3af.js", "css": [], "js": ["/./_app/pages/scuola.svelte-ffe5f3af.js", "/./_app/chunks/vendor-ce374a0d.js", "/./_app/chunks/jason-7c8ff622.js"], "styles": null}, "src/routes/About.svelte": {"entry": "/./_app/pages/About.svelte-a12afb4f.js", "css": ["/./_app/assets/pages/About.svelte-9b1330ce.css"], "js": ["/./_app/pages/About.svelte-a12afb4f.js", "/./_app/chunks/vendor-ce374a0d.js"], "styles": null}};
>>>>>>> 9162d60f6603037c33acdde074ee19d81d459ff2
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
var pagesSummary = [
  {
    name: "Storia",
    date: "noDate",
    url: "scuola/Storia",
    slaves: [
      {
        name: "Il novecento",
        date: "20/10/2021",
        url: "/scuola/Storia/Il-Novecento"
      },
      {
        name: "L'et\xE0 di Giolitti",
        date: "20/10/2021",
        url: "/scuola/Storia/L-et\xE0-di-Giolitti"
      },
      {
        name: "Venti di guerra",
        date: "27/10/2021",
        url: "/scuola/Storia/Venti-di-guerra"
      },
      {
        name: "Prima guerra mondiale",
        date: "07/12/2021",
        url: "/scuola/Storia/Prima-guerra-mondiale"
      },
      {
        name: "Genocidio degli Armeni",
        date: "15/12/2021",
        url: "/scuola/Storia/Genocidio-degli-Armeni"
      },
      {
        name: "Rivoluzione Russa",
        date: "09/02/2022",
        url: "/scuola/Storia/Rivoluzione-Russa"
      },
      {
        name: "Il Fascismo",
        date: "10/02/2022",
        url: "/scuola/Storia/Il-Fascismo"
      },
      {
        name: "Crisi del '29",
        date: "01/04/2022",
        url: "/scuola/Storia/Crisi-del-29"
      },
      {
        name: "Sistemi economici",
        date: "04/04/2022",
        url: "/scuola/Storia/Sistemi-economici"
      },
      {
        name: "Il Nazismo",
        date: "04/04/2022",
        url: "/scuola/Storia/Il-nazismo"
      },
      {
        name: "Preparativi di guerra",
        date: "05/05/2022",
        url: "/scuola/Storia/Preparativi-di-guerra"
      },
      {
        name: "Seconda guerra mondiale",
        date: "05/05/2022",
        url: "/scuola/Storia/Seconda-guerra-mondiale"
<<<<<<< HEAD
=======
      },
      {
        name: "Il mondo del dopoguerra",
        date: "10/06/2022",
        url: "/scuola/Storia/Il-mondo-del-dopoguerra"
      },
      {
        name: "La decolonizzazione",
        date: "10/06/2022",
        url: "/scuola/Storia/La-decolonizzazione"
>>>>>>> 9162d60f6603037c33acdde074ee19d81d459ff2
      }
    ]
  },
  {
    name: "Italiano",
    url: "scuola/Italiano",
    date: "noDate",
    slaves: [
      {
        name: "Et\xE0 del realismo e del positivismo",
        date: "23/10/2021",
        url: "/scuola/Italiano/Et\xE0-del-realismo-e-del-positivismo"
      },
      {
        name: "La visone dell'uomo nel positivismo",
        date: "23/10/2021",
        url: "/scuola/Italiano/La-visione-dell-uomo-nel-positivismo"
      },
      {
        name: "Il naturalismo",
        date: "23/10/2021",
        url: "/scuola/Italiano/Il-naturalismo"
      },
      {
        name: "Il verismo",
        date: "23/10/2021",
        url: "/scuola/Italiano/Il-verismo"
      },
      {
        name: "L'evoluzione del romanzo",
        date: "23/10/2021",
        url: "/scuola/Italiano/L-evoluzione-del-romanzo"
      },
      {
        name: "I promessi sposi",
        date: "24/10/2021",
        url: "/scuola/Italiano/I-promessi-sposi"
      },
      {
        name: "Giovanni Verga",
        date: "26/10/2021",
        url: "/scuola/Italiano/Giovanni-Verga"
      },
      {
        name: "Et\xE0 del decadentismo",
        date: "19/01/2022",
        url: "/scuola/Italiano/Et\xE0-del-decadentismo"
      },
      {
        name: "Giovanni Pascoli",
        date: "23/01/2022",
        url: "/scuola/Italiano/Giovanni-Pascoli"
      },
      {
        name: "Gabriele D'annunzio",
        date: "01/02/2022",
        url: "/scuola/Italiano/Gabriele-DAnnunzio"
      },
      {
        name: "Il Novecento",
        date: "12/05/2022",
        url: "/scuola/Italiano/Il-Novecento"
      },
      {
        name: "Il romanzo del Novecento",
        date: "12/05/2022",
        url: "/scuola/Italiano/Il-romanzo-del-Novecento"
      },
      {
        name: "L'architettura del Novecento",
        date: "16/05/2022",
        url: "/scuola/Italiano/L-architettura-del-Novecento"
      },
      {
        name: "Italo Svevo",
        date: "16/05/2022",
        url: "/scuola/Italiano/Italo-Svevo"
      },
      {
        name: "Luigi Pirandello",
        date: "16/05/2022",
        url: "/scuola/Italiano/Luigi-Pirandello"
<<<<<<< HEAD
=======
      },
      {
        name: "Giuseppe Ungaretti",
        date: "10/06/2022",
        url: "/scuola/Italiano/Giuseppe-Ungaretti"
>>>>>>> 9162d60f6603037c33acdde074ee19d81d459ff2
      }
    ]
  }
];
var jason = {
  pagesSummary
};
var jason$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  pagesSummary,
  "default": jason
});
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
var css$5 = {
  code: "header.svelte-1gt6y4w.svelte-1gt6y4w{display:flex;justify-content:space-between;position:fixed;width:100%;background-image:linear-gradient( rgb(51,51,51), rgba(51, 51, 51, .2));z-index:100}.corner.svelte-1gt6y4w.svelte-1gt6y4w{width:auto;height:3em}nav.svelte-1gt6y4w.svelte-1gt6y4w{display:flex;justify-content:center;--background:#5e5e5e}svg.svelte-1gt6y4w.svelte-1gt6y4w{width:2em;height:3em;display:block}path.svelte-1gt6y4w.svelte-1gt6y4w{fill:var(--background)}ul.svelte-1gt6y4w.svelte-1gt6y4w{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-1gt6y4w.svelte-1gt6y4w{position:relative;height:100%}li.active.svelte-1gt6y4w.svelte-1gt6y4w::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--accent-color)}nav.svelte-1gt6y4w a.svelte-1gt6y4w{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:10%;text-decoration:none;transition:color 0.2s linear}a.svelte-1gt6y4w.svelte-1gt6y4w:hover{color:var(--accent-color)}",
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { page } from '$app/stores';\\n</script>\\n\\n<header>\\n\\t<div class=\\"corner\\" />\\n\\t<nav>\\n\\t\\t<svg viewBox=\\"0 0 2 3\\" aria-hidden=\\"true\\">\\n\\t\\t\\t<path d=\\"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z\\" />\\n\\t\\t</svg>\\n\\t\\t<ul>\\n\\t\\t\\t<li class:active={$page.path === '/'}><a sveltekit:prefetch href=\\"/\\">Home</a></li>\\n\\t\\t\\t<li class:active={$page.path.split('/')[1] === 'scuola'}>\\n\\t\\t\\t\\t<a sveltekit:prefetch href=\\"/scuola\\">Scuola</a>\\n\\t\\t\\t</li>\\n\\t\\t\\t<li class:active={$page.path === '/About'}><a sveltekit:prefetch href=\\"/About\\">About</a></li>\\n\\t\\t</ul>\\n\\t\\t<svg viewBox=\\"0 0 2 3\\" aria-hidden=\\"true\\">\\n\\t\\t\\t<path d=\\"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z\\" />\\n\\t\\t</svg>\\n\\t</nav>\\n\\t<div class=\\"corner\\" />\\n</header>\\n<div style=\\"height: 3em; wight:auto;\\" />\\n\\n<style>\\n\\theader {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t\\tposition: fixed;\\n\\t\\twidth: 100%;\\n\\t\\tbackground-image: linear-gradient( rgb(51,51,51), rgba(51, 51, 51, .2));\\n\\t\\tz-index: 100;\\n\\t}\\n\\n\\t.corner {\\n\\t\\twidth: auto;\\n\\t\\theight: 3em;\\n\\t}\\n\\n\\tnav {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\t--background: #5e5e5e;\\n\\t}\\n\\n\\tsvg {\\n\\t\\twidth: 2em;\\n\\t\\theight: 3em;\\n\\t\\tdisplay: block;\\n\\t}\\n\\n\\tpath {\\n\\t\\tfill: var(--background);\\n\\t}\\n\\n\\tul {\\n\\t\\tposition: relative;\\n\\t\\tpadding: 0;\\n\\t\\tmargin: 0;\\n\\t\\theight: 3em;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tlist-style: none;\\n\\t\\tbackground: var(--background);\\n\\t\\tbackground-size: contain;\\n\\t}\\n\\n\\tli {\\n\\t\\tposition: relative;\\n\\t\\theight: 100%;\\n\\t}\\n\\n\\tli.active::before {\\n\\t\\t--size: 6px;\\n\\t\\tcontent: '';\\n\\t\\twidth: 0;\\n\\t\\theight: 0;\\n\\t\\tposition: absolute;\\n\\t\\ttop: 0;\\n\\t\\tleft: calc(50% - var(--size));\\n\\t\\tborder: var(--size) solid transparent;\\n\\t\\tborder-top: var(--size) solid var(--accent-color);\\n\\t}\\n\\n\\tnav a {\\n\\t\\tdisplay: flex;\\n\\t\\theight: 100%;\\n\\t\\talign-items: center;\\n\\t\\tpadding: 0 1em;\\n\\t\\tcolor: var(--heading-color);\\n\\t\\tfont-weight: 700;\\n\\t\\tfont-size: 0.8rem;\\n\\t\\ttext-transform: uppercase;\\n\\t\\tletter-spacing: 10%;\\n\\t\\ttext-decoration: none;\\n\\t\\ttransition: color 0.2s linear;\\n\\t}\\n\\n\\ta:hover {\\n\\t\\tcolor: var(--accent-color);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAyBC,MAAM,8BAAC,CAAC,AACP,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,QAAQ,CAAE,KAAK,CACf,KAAK,CAAE,IAAI,CACX,gBAAgB,CAAE,iBAAiB,IAAI,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,CACvE,OAAO,CAAE,GAAG,AACb,CAAC,AAED,OAAO,8BAAC,CAAC,AACR,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,AACZ,CAAC,AAED,GAAG,8BAAC,CAAC,AACJ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,YAAY,CAAE,OAAO,AACtB,CAAC,AAED,GAAG,8BAAC,CAAC,AACJ,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,OAAO,CAAE,KAAK,AACf,CAAC,AAED,IAAI,8BAAC,CAAC,AACL,IAAI,CAAE,IAAI,YAAY,CAAC,AACxB,CAAC,AAED,EAAE,8BAAC,CAAC,AACH,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,MAAM,CAAE,GAAG,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,IAAI,YAAY,CAAC,CAC7B,eAAe,CAAE,OAAO,AACzB,CAAC,AAED,EAAE,8BAAC,CAAC,AACH,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,AACb,CAAC,AAED,EAAE,qCAAO,QAAQ,AAAC,CAAC,AAClB,MAAM,CAAE,GAAG,CACX,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,MAAM,CAAC,CAAC,CAC7B,MAAM,CAAE,IAAI,MAAM,CAAC,CAAC,KAAK,CAAC,WAAW,CACrC,UAAU,CAAE,IAAI,MAAM,CAAC,CAAC,KAAK,CAAC,IAAI,cAAc,CAAC,AAClD,CAAC,AAED,kBAAG,CAAC,CAAC,eAAC,CAAC,AACN,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,CAAC,CAAC,GAAG,CACd,KAAK,CAAE,IAAI,eAAe,CAAC,CAC3B,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,MAAM,CACjB,cAAc,CAAE,SAAS,CACzB,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,IAAI,CACrB,UAAU,CAAE,KAAK,CAAC,IAAI,CAAC,MAAM,AAC9B,CAAC,AAED,+BAAC,MAAM,AAAC,CAAC,AACR,KAAK,CAAE,IAAI,cAAc,CAAC,AAC3B,CAAC"}`
};
var Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$5);
  $$unsubscribe_page();
  return `<header class="${"svelte-1gt6y4w"}"><div class="${"corner svelte-1gt6y4w"}"></div>
	<nav class="${"svelte-1gt6y4w"}"><svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-1gt6y4w"}"><path d="${"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"}" class="${"svelte-1gt6y4w"}"></path></svg>
		<ul class="${"svelte-1gt6y4w"}"><li class="${["svelte-1gt6y4w", $page.path === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-1gt6y4w"}">Home</a></li>
			<li class="${["svelte-1gt6y4w", $page.path.split("/")[1] === "scuola" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/scuola"}" class="${"svelte-1gt6y4w"}">Scuola</a></li>
			<li class="${["svelte-1gt6y4w", $page.path === "/About" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/About"}" class="${"svelte-1gt6y4w"}">About</a></li></ul>
		<svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-1gt6y4w"}"><path d="${"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"}" class="${"svelte-1gt6y4w"}"></path></svg></nav>
	<div class="${"corner svelte-1gt6y4w"}"></div></header>
<div style="${"height: 3em; wight:auto;"}"></div>`;
});
var browser = false;
var dev = false;
var css$4 = {
  code: ".pwa-toast.svelte-t803pv.svelte-t803pv{position:fixed;right:0;bottom:0;margin:16px;padding:12px;border:1px solid #8885;border-radius:4px;z-index:1;text-align:left;background-color:#333333;box-shadow:3px 4px 5px 0px #8885}.pwa-toast.svelte-t803pv .message.svelte-t803pv{margin-bottom:8px}.pwa-toast.svelte-t803pv button.svelte-t803pv{border:1px solid #8885;outline:none;margin-right:5px;border-radius:2px;padding:3px 10px;background-color:#b8b8b8;color:#333333}",
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { dev, browser } from '$app/env';\\nimport { Workbox, messageSW } from 'workbox-window';\\nlet wb;\\nlet registration;\\nlet offlineReady = false;\\nlet needRefresh = false;\\nfunction showSkipWaitingPrompt(event) {\\n    // \\\\\`event.wasWaitingBeforeRegister\\\\\` will be false if this is\\n    // the first time the updated service worker is waiting.\\n    // When \\\\\`event.wasWaitingBeforeRegister\\\\\` is true, a previously\\n    // updated service worker is still waiting.\\n    // You may want to customize the UI prompt accordingly.\\n    // Assumes your app has some sort of prompt UI element\\n    // that a user can either accept or reject.\\n    needRefresh = true;\\n}\\nfunction updateServiceWorker() {\\n    // Assuming the user accepted the update, set up a listener\\n    // that will reload the page as soon as the previously waiting\\n    // service worker has taken control.\\n    if (wb) {\\n        wb.addEventListener('controlling', (event) => {\\n            if (event.isUpdate)\\n                window.location.reload();\\n        });\\n    }\\n    if (registration && registration.waiting) {\\n        // Send a message to the waiting service worker,\\n        // instructing it to activate.\\n        // Note: for this to work, you have to add a message\\n        // listener in your service worker. See below.\\n        messageSW(registration.waiting, { type: 'SKIP_WAITING' })\\n            .then(() => {\\n            // console.log(\\"NOTIFIED SKIP_WAITING\\");\\n        })\\n            .catch((e) => {\\n            console.error('NOTIFIED SKIP_WAITING WITH ERROR', e);\\n        });\\n    }\\n}\\nfunction close() {\\n    offlineReady = false;\\n    needRefresh = false;\\n}\\nif (!dev && browser) {\\n    if ('serviceWorker' in navigator) {\\n        wb = new Workbox('/service-worker.js', { scope: '/' });\\n        wb.addEventListener('activated', (event) => {\\n            // this will only controls the offline request.\\n            // event.isUpdate will be true if another version of the service\\n            // worker was controlling the page when this version was registered.\\n            if (!event.isUpdate) {\\n                offlineReady = true;\\n            }\\n        });\\n        // Add an event listener to detect when the registered\\n        // service worker has installed but is waiting to activate.\\n        wb.addEventListener('waiting', showSkipWaitingPrompt);\\n        // eslint-disable-next-line\\n        // @ts-ignore\\n        wb.addEventListener('externalwaiting', showSkipWaitingPrompt);\\n        // register the service worker\\n        wb.register({ immediate: true })\\n            .then((r) => (registration = r))\\n            .catch((e) => {\\n            console.error('cannot register service worker', e);\\n        });\\n    }\\n    else {\\n        console.warn('Service workers are not supported.');\\n    }\\n}\\n$: toast = offlineReady || needRefresh;\\n</script>\\n\\n{#if toast}\\n\\t<div class=\\"pwa-toast\\" role=\\"alert\\">\\n\\t\\t<div class=\\"message\\">\\n\\t\\t\\t{#if offlineReady}\\n\\t\\t\\t\\t<span> App pronta per lavorare offline </span>\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t<span> Ci sono nuovi contenuti disponibili! </span>\\n\\t\\t\\t{/if}\\n\\t\\t</div>\\n\\t\\t{#if needRefresh}\\n\\t\\t\\t<button style=\\"background-color: #48E5C2\\" on:click={updateServiceWorker}> Ricarica </button>\\n\\t\\t{/if}\\n\\t\\t<button on:click={close}> Chiudi </button>\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t.pwa-toast {\\n\\t\\tposition: fixed;\\n\\t\\tright: 0;\\n\\t\\tbottom: 0;\\n\\t\\tmargin: 16px;\\n\\t\\tpadding: 12px;\\n\\t\\tborder: 1px solid #8885;\\n\\t\\tborder-radius: 4px;\\n\\t\\tz-index: 1;\\n\\t\\ttext-align: left;\\n\\t\\tbackground-color: #333333;\\n\\t\\tbox-shadow: 3px 4px 5px 0px #8885;\\n\\t}\\n\\t.pwa-toast .message {\\n\\t\\tmargin-bottom: 8px;\\n\\t}\\n\\t.pwa-toast button {\\n\\t\\tborder: 1px solid #8885;\\n\\t\\toutline: none;\\n\\t\\tmargin-right: 5px;\\n\\t\\tborder-radius: 2px;\\n\\t\\tpadding: 3px 10px;\\n\\t\\tbackground-color: #b8b8b8;\\n\\t\\tcolor: #333333;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA4FC,UAAU,4BAAC,CAAC,AACX,QAAQ,CAAE,KAAK,CACf,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,IAAI,CAChB,gBAAgB,CAAE,OAAO,CACzB,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,AAClC,CAAC,AACD,wBAAU,CAAC,QAAQ,cAAC,CAAC,AACpB,aAAa,CAAE,GAAG,AACnB,CAAC,AACD,wBAAU,CAAC,MAAM,cAAC,CAAC,AAClB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,OAAO,CAAE,IAAI,CACb,YAAY,CAAE,GAAG,CACjB,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OAAO,AACf,CAAC"}`
};
var ReloadPrompt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let toast;
  let needRefresh = false;
  $$result.css.add(css$4);
  toast = needRefresh;
  return `${toast ? `<div class="${"pwa-toast svelte-t803pv"}" role="${"alert"}"><div class="${"message svelte-t803pv"}">${`<span>Ci sono nuovi contenuti disponibili! </span>`}</div>
		${``}
		<button class="${"svelte-t803pv"}">Chiudi </button></div>` : ``}`;
});
var css$3 = {
  code: ".inline.svelte-lu9gcz.svelte-lu9gcz{text-align:left;display:flex}.inline.svelte-lu9gcz>div.svelte-lu9gcz{margin-block-start:0.43em;margin-block-end:0.43em}#title-box.svelte-lu9gcz.svelte-lu9gcz{font-size:1.6rem !important}",
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { page } from '$app/stores';\\nvar pathArray = $page.path.split('/');\\nvar sectionName = pathArray[2];\\nvar pageName = pathArray[3];\\n//var sectionName, pageName;\\n</script>\\n\\n<div id=\\"title-box\\" class=\\"inline\\">\\n\\t<div>\\n\\t\\t<a href=\\"/scuola/{sectionName}\\">{sectionName}</a>\\n\\t</div>\\n\\t<div\\n\\t\\tstyle=\\"margin-left:10px;     color: var(--heading-color);\\t\\"\\n\\t\\tclass:hidden={typeof pageName === 'undefined'}\\n\\t>\\n\\t\\t/{pageName}\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t.inline {\\n\\t\\ttext-align: left;\\n\\t\\tdisplay: flex;\\n\\t}\\n\\t.inline > div {\\n\\t\\tmargin-block-start: 0.43em;\\n\\t\\tmargin-block-end: 0.43em;\\n\\t}\\n\\t#title-box {\\n\\t\\tfont-size: 1.6rem !important;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAoBC,OAAO,4BAAC,CAAC,AACR,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,AACd,CAAC,AACD,qBAAO,CAAG,GAAG,cAAC,CAAC,AACd,kBAAkB,CAAE,MAAM,CAC1B,gBAAgB,CAAE,MAAM,AACzB,CAAC,AACD,UAAU,4BAAC,CAAC,AACX,SAAS,CAAE,MAAM,CAAC,UAAU,AAC7B,CAAC"}`
};
var IndicePath = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  var pathArray = $page.path.split("/");
  var sectionName = pathArray[2];
  var pageName = pathArray[3];
  $$result.css.add(css$3);
  $$unsubscribe_page();
  return `<div id="${"title-box"}" class="${"inline svelte-lu9gcz"}"><div class="${"svelte-lu9gcz"}"><a href="${"/scuola/" + escape2(sectionName)}">${escape2(sectionName)}</a></div>
	<div style="${"margin-left:10px; color: var(--heading-color); "}" class="${["svelte-lu9gcz", typeof pageName === "undefined" ? "hidden" : ""].join(" ").trim()}">/${escape2(pageName)}</div>
</div>`;
});
var css$2 = {
  code: "main.svelte-193j25t{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}footer.svelte-193j25t{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px;opacity:0.5}@media(min-width: 480px){footer.svelte-193j25t{padding:40px 0}}",
  map: `{"version":3,"file":"__layout.svelte","sources":["__layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Header from '$lib/Header/index.svelte';\\nimport ReloadPrompt from '$lib/ReloadPrompt/index.svelte';\\nimport IndicePath from '$lib/IndicePath/index.svelte';\\nimport '../app.css';\\n</script>\\n\\n<svelte:head>\\n\\t<link rel=\\"manifest\\" href=\\"/manifest.webmanifest\\" />\\n\\n\\t<meta name=\\"description\\" content=\\"questo \xE8 il nuovo sitoTest di Federico Longhin\\" />\\n\\t<meta name=\\"apple-mobile-web-app-capable\\" content=\\"yes\\" />\\n\\t<!-- <link rel=\\"icon\\" href=\\"/favicon.svg\\" type=\\"image/svg+xml\\"> -->\\n\\t<link rel=\\"apple-touch-icon\\" href=\\"/pencil-512x512.png\\" />\\n\\t<!-- <link rel=\\"mask-icon\\" href=\\"/safari-pinned-tab.svg\\" color=\\"#00aba9\\"> -->\\n\\t<meta name=\\"msapplication-TileColor\\" content=\\"#48e5c2\\" />\\n\\t<meta name=\\"theme-color\\" content=\\"#333333\\" />\\n</svelte:head>\\n\\n<Header />\\n<main>\\n\\t<slot />\\n</main>\\n\\n<footer>\\n\\t<p>Federico Longhin - 2022</p>\\n</footer>\\n\\n<ReloadPrompt />\\n\\n<style>\\n\\tmain {\\n\\t\\tflex: 1;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tpadding: 1rem;\\n\\t\\twidth: 100%;\\n\\t\\tmax-width: 1024px;\\n\\t\\tmargin: 0 auto;\\n\\t\\tbox-sizing: border-box;\\n\\t}\\n\\n\\tfooter {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tpadding: 40px;\\n\\t\\topacity: 0.5;\\n\\t}\\n\\n\\t@media (min-width: 480px) {\\n\\t\\tfooter {\\n\\t\\t\\tpadding: 40px 0;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA8BC,IAAI,eAAC,CAAC,AACL,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,UAAU,CAAE,UAAU,AACvB,CAAC,AAED,MAAM,eAAC,CAAC,AACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,GAAG,AACb,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,MAAM,eAAC,CAAC,AACP,OAAO,CAAE,IAAI,CAAC,CAAC,AAChB,CAAC,AACF,CAAC"}`
};
var _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `${$$result.head += `<link rel="${"manifest"}" href="${"/manifest.webmanifest"}" data-svelte="svelte-1r84mds"><meta name="${"description"}" content="${"questo \xE8 il nuovo sitoTest di Federico Longhin"}" data-svelte="svelte-1r84mds"><meta name="${"apple-mobile-web-app-capable"}" content="${"yes"}" data-svelte="svelte-1r84mds"><link rel="${"apple-touch-icon"}" href="${"/pencil-512x512.png"}" data-svelte="svelte-1r84mds"><meta name="${"msapplication-TileColor"}" content="${"#48e5c2"}" data-svelte="svelte-1r84mds"><meta name="${"theme-color"}" content="${"#333333"}" data-svelte="svelte-1r84mds">`, ""}

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<main class="${"svelte-193j25t"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"svelte-193j25t"}"><p>Federico Longhin - 2022</p></footer>

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
var css$1 = {
  code: "h1.svelte-1yo0drd{width:100%}",
  map: '{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script context=\\"module\\" lang=\\"ts\\">export const prerender = true;\\n</script>\\n\\n<svelte:head>\\n\\t<title>Home</title>\\n</svelte:head>\\n\\n<section>\\n\\t<h1>Benvenuto nel nuovino sitino</h1>\\n\\n\\t<p>Chiss\xE0 se funziona... bah</p>\\n\\t<p>\\n\\t\\tAh, questo sito \xE8 ancora in sviluppo, quindi ci sta che qualcosa faccia schifo/non funzioni...\\n\\t\\t(in realt\xE0 \xE8 solo una scusa per non poter giudicare le monnezze che non ho voglia di\\n\\t\\tsistemare(in realt\xE0(si, di nuovo) dico che non \xE8 che non ho voglia di farlo, ma non me ne\\n\\t\\taccorgo/non so farlo... umilt\xE0 ragazzi... sempre))\\n\\t</p>\\n</section>\\n\\n<style>\\n\\th1 {\\n\\t\\twidth: 100%;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAoBC,EAAE,eAAC,CAAC,AACH,KAAK,CAAE,IAAI,AACZ,CAAC"}'
};
var prerender$4 = true;
var Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}`, ""}

<section><h1 class="${"svelte-1yo0drd"}">Benvenuto nel nuovino sitino</h1>

	<p>Chiss\xE0 se funziona... bah</p>
	<p>Ah, questo sito \xE8 ancora in sviluppo, quindi ci sta che qualcosa faccia schifo/non funzioni...
		(in realt\xE0 \xE8 solo una scusa per non poter giudicare le monnezze che non ho voglia di
		sistemare(in realt\xE0(si, di nuovo) dico che non \xE8 che non ho voglia di farlo, ma non me ne
		accorgo/non so farlo... umilt\xE0 ragazzi... sempre))
	</p>
</section>`;
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Routes,
  prerender: prerender$4
});
var La_visione_dell_uomo_nel_positivismo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Caratteri generali del positivismo:</h2>
<p>\xC8 un <code>movimento filosofico</code> che nasce in <code>Francia</code> come diretta conseguenza della II Riv. Industriale. Crede moltissimo nel progresso, basato su fondamenti scientifici e sulla tecnica. \u201CPositivo\u201D significa fare riferimento al reale e ai fatti. <code>Auguste Comte</code> crea il termine \u201Cpositivismo\u201D, nel libro \u201Ccorso di filosofia positiva\u201D. </p>
<p>Lui dice che la storia dell\u2019uomo si pu\xF2 dividere in tre momenti:</p>
<ul><li><strong>Stadio teologico:</strong> per spiegare la realt\xE0 si utilizzano cose sovrannaturali (le divinit\xE0 per i temporali etc.)</li>
<li><strong>Stadio metafisico:</strong> per spiegare la realt\xE0 attraverso le leggi oltre la fisica (big bang, incontro - scontro di atomi etc.)</li>
<li><strong>Stadio positivo:</strong> per spiegare la realt\xE0 si utilizzano esclusivamente le leggi della fisica, scienza e matematica. Si uitlizza il metodo della dimostrazione.</li></ul>
<p>\xC8 molto importante il metodo Galileiano, per il quale tutto ci\xF2 che esiste deve essere dimostrato.
Il positivismo considera <code>il progresso come un&#39;obbiettivo centrale</code>, fine dell\u2019uomo, che <code>d\xE0 la felicit\xE0</code>.</p>
<h2>Forme per spiegare l\u2019uomo:</h2>
<p>L\u2019uomo si spiega utilizzando la biologia, il determinismo e il darwinismo, una visione medica, non del sentimento\u2026</p>
<p>Forme scientifiche:</p>
<ul><li>La <strong>Biologia:</strong> l\u2019uomo \xE8 il prodotto di meccanismi biologici (DNA, Caratteri ereditari, cellule etc.)</li>
<li>elementi alla base del <strong>Determinismo:</strong> vengono elaborati da <code>Ippolite Taine</code>. L\u2019uomo \xE8 determinato da tre fattori:<ul><li><code>Razza</code>: esiste ancora l\u2019idea di razza.</li>
<li><code>Ambiente</code>: determina l\u2019essere nel mondo. C\u2019\xE8 differenza tra nascere in campagna e in citt\xE0. </li>
<li><code>Momento storico in cui si vive</code>: \xC8 il contesto nel quale nasci.</li></ul></li>
<li>Gli elementi alla base del <strong>Darwinismo:</strong> Darwin nel 1859 pubblica \u201Cl\u2019origine della specie\u201D, dove ribalta le teorie sull\u2019evoluzione.
Il processo di evoluzione avviene sulla base di alcuni principi:<ul><li><code>Lotta per l&#39;esistenza</code>: Sopravvivono i pi\xF9 forti.</li>
<li><code>Adattamento all&#39;ambiente</code>: Sopravvive chi sa adattarsi.</li></ul></li></ul>
<blockquote><p><strong>Teorie sull\u2019evoluzione:</strong> Prima di Darwin si credeva che l\u2019uomo fosse creato da un disegno divino, per dar senso al mondo (serviva qualcuno dotato di intelligenza che apprezzasse).
Darwin dice che c\u2019\xE8 stato il big bang, seguito dall\u2019evoluzione. </p></blockquote>`;
});
var LaVisioneDellUomoNelPositivismo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": La_visione_dell_uomo_nel_positivismo
});
var EtuC3uA0_del_realismo_e_del_positivismo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Contesto storico</h2>
<h3>Unit\xE0 d\u2019Italia:</h3>
<p>Avviene nel <code>1860</code> grazie a Cavour(diplomatico, liberal moderato), che espone i problemi Italiani al processo di Parigi(Guerra di Crimea) e Garibaldi (liberal Democratico) che porta i mille in Sicilia, fino a Teano. </p>
<p>Il veneto si unisce nel <code>1866</code> (Terza guerra di indipendenza). Nel <code>1870</code> i bersaglieri entrano a Porta Pia e prendono Roma.
L\u2019Italia nasce come Monarchia cosituzionale (statuto Albertino (<code>1848</code>)).</p>
<p>Problemi tra le realt\xE0 del nord e sud(Brigantaggio meridionale):</p>
<ul><li><strong>Leva obbligatoria</strong> (che toglieva i lavoratori dai campi)</li>
<li><strong>Tassa sul sale</strong> (le principali saline sono al sud)</li>
<li><strong>Tassa sul Macinato</strong> (i campi e le coltivazioni sono al sud)</li>
<li><strong>Bollo sui trasporti</strong> (colpiva tutti i trasporti dal sud al nord)</li></ul>
<p>Nel <code>1948</code> diventa una Repubblica.</p>
<h3>Seconda rivoluzione industriale:</h3>
<p>\xC8 la rivoluzione dell\u2019elettricit\xE0 e della catena di montaggio.
\xC8 il nuovo modo di produrre, e viene applicata grazie al taylorismo (i vari processi devono avere dei tempi standardizzati). In Italia nasce il <code>triangolo industriale Milano - Torino - Genova</code>.</p>
<h2>Contesto Culturale e Letterario:</h2>
<p>Le et\xE0 del Realismo e Positivismo sono caratterizzate dalla passione per la realt\xE0, i fatti, il positivo\u2026 chiaramente tutti i fatti devono essere scientificamente dimostrati. </p>
<p>Tra il <code>1860 - 1880</code> abbiamo:</p>
<table><thead><tr><th>Nome</th>
<th>Cosa</th>
<th>Dove</th></tr></thead>
<tbody><tr><td>Positivismo</td>
<td>Corrente filosofica</td>
<td>Francia</td></tr>
<tr><td>Naturalismo</td>
<td>Movimento letterario</td>
<td>Francia</td></tr>
<tr><td>Verismo</td>
<td>Movimento letterario</td>
<td>Italia</td></tr>
<tr><td>Realismo</td>
<td>Tutti i movimenti</td>
<td>Europa</td></tr></tbody></table>
<p>Il <strong>Realismo</strong> \xE8 la realt\xE0 generale che ha come obbiettivo parlare dei <code>fatti scientificamente dimostrati</code>.  </p>
<h2>Scapigliatura:</h2>
<p>\xC8 un movimento che si diffonde a Milano negli anni del Verismo. Sono giovani ribelli spettinati, che vivono in modo alternativo e che non seguono le regole. Odiano Manzoni (intellettuale della tradizione e della religione), la Borghesia e la chiesa. usano l\u2019emblema \u201CDio \xE8 morto\u201D per essere alternativi e <code>non seguire gli schemi tradizionali</code>.</p>`;
});
var Et_DelRealismoEDelPositivismo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": EtuC3uA0_del_realismo_e_del_positivismo
});
var L_architettura_del_Novecento = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Pittura:</h2>
<p>Dal medioevo al 1870 la pittura \xE8 figurativa e rappresentava la realt\xE0. Inizialmente le rappresentazioni erano attinenti alla sfera religiosa, Giotto \xE8 stato il primo a dare umanit\xE0 alle figure religiose. con l\u2019avanzare del tempo viene affiancata la dimensione umana, con gli scenari quotidiani. Fino al Novecento quindi si rappresenta principalmente la realt\xE0, perch\xE8 \xE8 conoscibile.
Dal 1870 al 1900 la pittura \xE8 sempre meno figurativa.</p>
<p><strong>Impressionismo:</strong> Appare per la prima volta nel <code>1874</code>. Il fotografo Nadar organizza una mostra a Parigi su un gruppo di nuovi pittori e intitola cos\xEC, per affermare che la loro pittura \xE8 il frutto di una <code>impressione sulla realt\xE0</code>. Si tratta di impressione, quindi le opere non sono figurative, si usavano pennellate di olio spesse ma dettagliate. Tra i pi\xF9 celebri ci sono <code>Monet</code>, <code>Manet</code> e <code>Renoir</code>. Il pi\xF9 importante museo degli impressionisti si trova a Parigi ed \xE8 il <code>museo D&#39;Orsay</code>, costruito all\u2019interno di una stazione ferroviaria di fine ottocento. Sono strutture in ferro, come la stazione centrale di Milano, stile ripreso da Eiffel per costruire la torre (1889)</p>
<p><strong>Post-impressionismo:</strong> La realt\xE0 viene semplificata e dematerializzata, viene esasperata la tendenza di astrazione, i contorni sono meno precisi. I pi\xF9 importanti esponenti sono <code>Van Gogh</code> e <code>Gauguin</code>.</p>
<p>I due pittori avevano caratteri diversi, Van Gogh voleva disegnare con la luce del sole, quindi va a Parigi da Gauguin. Dai quadri si pu\xF2 notare l\u2019influenza della luce della Provenza. A seguito di forti tensioni si taglia il lobo dell\u2019orecchio e lo consegna ad una prostituta.</p>
<p>Gauguin dipinge quadri <code>post-impressionisti</code> quando frequentava gli ambienti dei pittori parigini, si trasferisce a Thaiti e inizia a rappresentare le <code>ragazze di Thaiti</code>. Qui utilizza colori accesi, corpi e volti sono essenziali, sono paragonabili a quadri tribali in chiave moderna. </p>
<h2>Pablo Picasso:</h2>
<p>\xC8 il pittore che rappresenta il Novecento spagnolo, nasce a Malaga ma vivr\xE0 principalmente in Francia. Ha frequentato l\u2019accademia delle belle arti. nei quadri prima del Novecento \xE8 figurativo, poi avr\xE0 i periodi rosa e blu, in base al colore di sfondo delle opere. Disegna principalmente forme stilizate, tende a rappresentare i volti sproporzionalmente pi\xF9 grandi rispetto al corpo, spesso sono tristi.
Aderisce al cubismo, una corrente sviluppatasi un Francia intorno al 1905 che, per comprendere la realt\xE0, la scomponeva e ricomponeva secondo la propria visione, dato che non \xE8 conoscibile. Il suo primo quadro cubista noto \xE8 \u201D<code>Les demoiselles d&#39;Avignon</code>\u201D del 1907, rappresentava 5 donne in un bordello. Sembrano statue tribali, c\u2019\xE8 il promo caso di rappresentazione con gli occhi non allineati. Sono disegnste con la tecnica del cubismo, sembrano statue tribali. Da questo momento la pittura \xE8 andata sempre pi\xF9 verso la stilizazione.  </p>
<p><code>Guernica</code> si trova a Madrid al museo Reina Sof\xEDa, \xE8 un quadro in bianco e nero lungo pi\xF9 di sette metri. Rappresenta i danni dei bombardamenti del 1937 sulla citt\xE0 di Guernica in un giorno di mercato. Inizialmente doveva essere un quadro per celebrare l\u2019amico torero, aveva creato le figure intere sia dell\u2019uomo che della donna, poi ha aggiunto altre immagini. Le bocche e le mani sono rappresentate aperte come richiesta di aiuto. Viene rappresentato anche il sole, ma frutto di una lampadina, ad indicare la modernit\xE0 e la tecnologia, creatrici di guerra. </p>
<h2>Il futurismo:</h2>
<p>\xC8 stato un movimento artistico e letterario nato per scopi pubblicitari. Il manifesto del futurismo (1909) esalta la modernit\xE0, la velocit\xE0, le macchine, i treni, le stazioni e tutte le innovazioni dell\u2019uomo moderno. Tra i punti del futurismo si dice che \u201D<code>la guerra \xE8 l&#39;unica igiene del mondo</code>\u201D </p>
<p><code>Daniel Libeskind</code> \xE8 un architetto ebreo polacco, ha costruito diverse opere in giro per il mondo tra cui Ground Zero, in memoriale alle vittime dell\u201911 Settembre, il museo ebraico di Berlino, il quartiere city life di Milano (assieme a Zaha Hadid).
Il museo ebraico di Berlino \xE8 importante perch\xE9 \xE8 la richiesta di perdono della Germania, non \xE8 scontato, la Turchia non ha mai ammesso il genocidio degli armeni. Libeskind, la cui famiglia \xE8 stata nei campi di concentramento \xE8 riuscito a dare una capacit\xE0 comunicativa al cemento. Il museo \xE8 un blocco di cemento armato a forma di stella di Davide tagliata a met\xE0 adiacente ad una struttura presistente. I muri sono rivestiti dalla stessa lega di zinco-rame-titano usata nelle ali degli aerei. Le finestre sono poche ed essenziali. All\u2019interno del museo sono presenti documenti ritrovati, ma la particolarit\xE0 sta nell\u2019architettura.</p>
<p>Guggenheim \xE8 una famiglia americana che ha deciso di investire nelle operre d\u2019arte. Quello di Bilbao \xE8 dell\u2019architetto <code>Frank Owen Gehry</code>, \xE8 particolare per la copertura in Rame. Oltre ad essere una struttura decostruttivista, cambia colore in relazione al sole, e riflette l\u2019acqua del corso di fianco. Per Bilbao a causa della crisi delle industrie siderurgiche, investire sull\u2019architettura \xE8 stato fondamentale.</p>
<p>Un altro esempio di architettura destrutturata \xE8 il MAXXI di Roma. Questo tipo di architettura vuol dire <code>analizzare, scomporre e ricomporre la realt\xE0</code>. Il Maxxi \xE8 di Zaha Hadid, \xE8 inserito in un contesto precedente, dove c\u2019era una caserma. Una parte della caserma \xE8 ancora presente. Le varie parti del museo sono come blocchi con varie angolazioni. \xC8 presente un forte utilizzo della linea retta e curva. La cosa interessante \xE8 che ua parte del museo, al piano superiore, \xE8 fatto come un occhio che guarda il mondo. La parte vetrata permette all\u2019ambiente circostante di riflettersi. L\u2019architetto ha trovato in questo modo la modalit\xE0 di coniugare il nuovo (museo) con il quartiere circostante( l\u2019ambiente riflesso).</p>
<p>Berlino:
ha opere sia dell\u2019architettura destrutturata, sia del razionalismo. Dopo la caduta del muro le due citt\xE0 sono diventate una, quindi \xE8 stata completamente rifatta. La piazza Potsdamer platz \xE8 diventata il simbolo delle due citt\xE0, \xE8 circondata da palazzi e ha la copertura (di Renzo Piano). Dopo l\u2019incendio del Reichstag a seguito del restauro, oltre alla creazione della cupola, guardando in basso si vede l\u2019aula del parlamento tedesco e i lavori della commissione. \xC8 simbolicamente la partecipazione della popolazione al potere legislativo. Viene usato uno stile di architettura High Tech, con vetro, tiranti etc.
vicino alla porta di Brandeburgo c\u2019\xE8 il memoriale delle vittime dell\u2019olocausto, costituito da cubi di cemento di altezze diverse, sono posati su un ripiano in dislivello, come un campo di grano.
Per passare da iuna parte all\u2019altra del muro c\u2019erano dei passaggi. Il pi\xF9 famoso \xE8 il Ceckpoint charlie. C\u2019\xE8 ancora una parte di 1 km intatta del muro, oggi \xE8 dipinta da artisti e visitabile. Lungo la citt\xE0 di Berlino ci sono mattonelle che ricordano il tragitto del muro. Il muro inteso come divisione del genere umano \xE8 molto diffuso, dall\u201989 ad oggi la volont\xE0 di costruire barriere \xE8 rimasta. Montale lo chiamava \u201Cmuro con sopra cocci di bottiglie\u201D, anche i Pink Floyd usano il concetto.
Architettura razionalista: Richard Mayer e l\u2019Ara Pacis, l\u2019altare che celebra l\u2019et\xE0 della pace di Augusto.
Calatrava non \xE8 High Tech, usa immagini antropomorfe e le ripropone nelle strutture (gabbiani etc.), ha fatto la citt\xE0 della scienza e tecnica a Valencia
Il sindaco ??Rutelli?? ha deciso di fare una teca e creare un museo. </p>`;
});
var LArchitetturaDelNovecento = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": L_architettura_del_Novecento
});
var Il_romanzo_del_Novecento = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<p>Leggere la scheda \u201Cil romanzo del Novecento\u201D</p>
<h2>Proust:</h2>
<p>\xC8 uno scrittore che appartiene all\u2019alta borghesia francese, Il padre era un medico, la madre di famiglia ebrea. Studia diversi autori, tra cui Bergson e si laurea in legge e poi in lettere. Scrive l\u2019opera pi\xF9 importante, <code>Alla ricerca del tempo perduto</code>. \xC8 la storia di un uomo dall\u2019infanzia all\u2019et\xE0 adulta dove il protagonista diventer\xE0 uno scrittore e si chiama Marcel, nome dello scrittore stesso, ma <code>non \xE8 autobiografica</code>. </p>
<p>Il romanzo ha una trama debole e il filo conduttore \xE8 spesso altrettanto debole, a Prouste non interessa la descrizione dei fatti. In uno dei racconti parla delle donne che stanno prendendo i biscotti con il t\xE8, e impiega 10 pagine per descriverlo. La critica ha parlato dell\u2019uso della tecnica delle <code>intermittenze del cuore</code>, ossia descrive nei suoi romanzi la dimensione interiore dell\u2019uomo che non tiene conto della distinzione tra passato, presente e futuro. L\u2019uomo si riconosce per come rielabora il suo passato, per le prospettive del fururo e quello che vive nel presente. C\u2019\xE8 una esasperazione dell\u2019idea del tempo perduto e del tempo ritrovato. C\u2019\xE8 la memoria volontaria e quella involontaria.  </p>
<h2>James Joice:</h2>
<p>Nasce nella prima met\xE0 del Novecento a Dublino in una famiglia povera. Studia all\u2019universit\xE0 ma in realt\xE0 non fa per lui, studier\xE0 soprattutto da autodidatta. All\u2019et\xE0 di 22 anni lascia Dublino per vivere in diverse parti dell\u2019Italia, in particolare a Trieste, Roma e Zurigo, per mantenersi fa lezioni di inglese. Muore in Svizzera. </p>
<p>Joice scrive diversi libri:</p>
<ul><li><strong>Gente di Dublino</strong>, costituito da vari racconti brevi dove parla di racconti di Dublino. Sono novelle tradizionali che non c\u2019entrano con la narrativa del novecento.</li>
<li><strong>Dedalus</strong> \xE8 il ritratto di un artista da giovane, in parte autobiografico.</li>
<li><strong>L\u2019Ulisse</strong> (1922). \xC8 costituito da mille pagine scritte in terza persona. Joice descrive i pensieri dei protagonisti senza metterli in ordine cronologico. C\u2019\xE8 la tecnica narrativa del <code>monologo interiore o del flusso di scoscienza</code>, secondo cui la narrazione non \xE8 altro che la trascrizione dell\u2019interiorit\xE0. Racconta la storia del <code>16 giugno 1904</code>, dalle 8 di mattina alle 2 di notte, \xE8 la trascrizione dei pensieri dei personaggi. La grandezza dell\u2019opera sta nella capacit\xE0 di Joice di aver descritto attraverso la tecnica del flusso di coscienza l\u2019<code>interiorit\xE0 dell&#39;essere umano</code> e <code>l&#39;avventura dell&#39;uomo che si misura nel mondo attraverso la sua identit\xE0</code>.<br>
L\u2019Odissea \xE8 la storia di Ulisse che lascia moglie e figlio per intraprendere anni di viaggi per conoscere il mondo. Dante colloca Ulisse all\u2019inferno perch\xE8 ha osato oltrepassarele colonne d\u2019Ercole che delimitano la dimensione umana da quella religiosa.  Ulisse se ne va dalla sua terra, dalla sua famiglia etc. Perch\xE8 l\u2019obiettivo dell\u2019uomo \xE8 quello di conoscere il mondo, non restare fermi. l\u2019ulisse di Joice non racconta un viaggio, ma un giorno, non racconta viaggi o avventure, ma solo una citt\xE0, Dublino.
\xC8 diviso in 18 capitoli e i personaggi vengono messi in paragone a quelli dell\u2019odissea:<ul><li><strong>Leopold Blume</strong> viene paragonato ad Ulisse, \xE8 irlandese, ebreo, vive le sue avventure immaginate, pensate e reali a Dublino. </li>
<li><strong>Steven Dedalus</strong> rappresenta Telemaco, \xE8 considerato il figlio di Blume, anche se non \xE8 suo figlio. A Blume \xE8 morto un figlio al quale pensa sempre e riversa la sua attenzione su Steven. \xC8 un artista, Blume l\u2019ha incontrato in un bordello ma Steven \xE8 una persona molto colta. </li>
<li><strong>Molly Blume</strong> come Penelope, \xE8 una donna fedele al marito nel senso spirituale, ma ha anche amanti per diversificare le giornate. </li></ul></li></ul>
<h2>Virginia Woolf (c\u2019\xE8 tutto sulla scheda)</h2>
<p>Ha cercato di scrivere attraverso il flusso di coscienza. Fu una delle scrittirici pi\xF9 innovative del suo tempo. Nasce a Londra, \xE8 creasciuta in un ambiente di intellettuali ma era una donna con seri problemi mentali. \xC8 morta suicida annegando nel fiume nella casa di campagna con delle pietre in tasca. Le muore la madre a 13 anni e comincia ad avere dei disturbi. Di questo scrisse il pi\xF9 grande disastro che sarebbe potuto accadere, altri lutti familiari e gli abusi sessuali da parte dei frstellastri la portarono a questo. Spos\xF2 Leonard Woolf, un editore con il quale fondarono il <code>circolo di Bloomsbury</code>. Diversi scrittori frequentavano il circolo tra cui la sorella di Virginia, Vanessa, molti di questi avevano frequentato universit\xE0 prestigiose (Trinity, Cambridge, etc.). Si tratta di <code>intellettuali anticonformisti e alternativi</code>, anche in termini di scelte di vita. Nesuno di loro si allarmava per la presenza di omosessuali e altro. Virginia ha scritto diverse opere, non tutte rispondono al flusso di coscienza. Tra le opere pi\xF9 importanti c\u2019\xE8 <code>La signora Dallowey</code>, uno degli esempi pi\xF9 importanti del flusso di coscienza.  </p>`;
});
var IlRomanzoDelNovecento = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Il_romanzo_del_Novecento
});
var L_evoluzione_del_romanzo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Caratteri generali del romanzo:</h2>
<p>La definizione di romanzo \xE8 \u201Cun genere letterario che ha come scopo <code>suscitare immaginazione, fatasia</code>, \u2026\u201D, \xE8 una storia inventata che si \xE8 evoluta nel tempo.</p>
<ul><li><strong>Ciclo bretone</strong> Nasce nel medioevo con il ciclo bretone (<code>1200 - 1300</code>), con re Art\xF9. Si chiama romanzo cavalleresco/cortese. C\u2019era anche il ciclo carolingio(Carlo Magno). I romanzi erano scritti in poesia.</li>
<li><strong>Don chischotte</strong> (<code>1600</code>) \xE8 il primo romanzo moderno: \xC8 scritto in prosa, racconta le avventure di questo uomo, ha come scopo suscitare la facolt\xE0 immaginativa.</li>
<li><strong>Ultime lettere di Jacopo Ortis</strong> raccontano la storia di questo amore impossibilee da realizzare, tra Ortis e Teresa, il suicidio del personaggio deluso da questo sentimento e dalla patria(Trattato di campoformio, nel <code>1797</code>). </li>
<li><strong>Promessi sposi</strong> (<code>1821 - 1842</code>) \xE8 il primo dei romanzi moderni</li></ul>
<p>Il romanzo \xE8 dalla seconda met\xE0 dell\u2019800 ad oggi il genere letterario <code>pi\xF9 letto e venduto al mondo</code>. Possono essere diversi in relazione alla tipologia, storico, fantascienza, gialli, d\u2019amore, horror etc. \xC8 il genere pi\xF9 diffuso perch\xE8 \xE8 il <code>genere preferito dalla borghesia</code>, o dal ceto medio. Dalla seconda met\xE0 dell\u2019800 ad oggi i borghesi non hanno tempo per leggere la Divina Commedia, ma necessitano di storie che gli <code>allontanino dalla vita reale</code>. </p>`;
});
var LEvoluzioneDelRomanzo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": L_evoluzione_del_romanzo
});
var Luigi_Pirandello_nuovo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Caratteri generali:</h2>
<p>\xC8 un autore siciliano che nasce in provincia di Agrigento, applica tutte le teorie del romanzo del Novecento. Mentre Verga non si pu\xF2
comprendere senza la Sicilia, l\u2019ambientazione delle opere \xE8 il mondo, non la Sicilia, parla infatti di <code>temi slegati da quel contesto</code>.
Proveniva da una ricca famiglia borghese, aveva ereditato una zolfara dai genitori. Il padre l\u2019aveva inscritto ad un istituto tecnico
commerciale, Pirandello se ne va, andr\xE0 al liceo Classico e poi studier\xE0 Lettere a Roma. Litiga con il professore e <code>si laurea in Germania</code>, a
Bonn.</p>
<p>Si trasferisce a Roma e si sposa con una siciliana, <code>Antonietta Portolano</code>, figlia di un ricco commerciante di zolfo. Avr\xE0 tre figli, nel 1903
a causa di un\u2019inondazione crolla una miniera di zolfo, che mette in crisi le finanze della famiglia. La moglie aveva paura di rimanere senza
patrimonio, da quel momento inizia per la moglie una <code>depressione e malattia mentale</code> che la porter\xE0 al ricovero in una casa di cura dalla
quale non uscir\xE0 pi\xF9. La malattia della moglie \xE8 uno dei temi fondamentali delle opere di Pirandello.</p>
<p>Pirandello vive negli anni del fascismo, si iscrive al partito poco dopo l\u2019uccisione di Matteotti. \xC8 convinto che il partito fascista sia
utile e necessario per l\u2019Italia del dopoguerra. Oltre ai romanzi e alle novelle crea una <code>compagnia teatrale</code>, sostenuta in parte dal partito
fascista, nella quale chiama <code>Marta Abba</code>, tra le pi\xF9 importanti attrici dell\u2019epoca. <code>Muore a Roma nel 1936</code>, ottiene il premio Nobel per la
letteratura.</p>
<h2>Opere:</h2>
<p>Scrive:</p>
<ul><li><strong>Umorismo</strong>, un saggio fondamentale nel quale sono contenuti tutti i temi della sua letteratura.</li>
<li><strong>Novelle per un anno</strong>, ne voleva scrivere una per ogni giorno dell\u2019anno, in realt\xE0 sono solo 243</li>
<li><strong>Romanzi</strong>, tra cui <code>Ei f\xF9 Mattia Pascal</code> e <code>Uno, nessuno, centomila</code></li>
<li><strong>Opere tetrali</strong>, sono scritte come dialoghi, possono essere sia lette che recitate. Tra queste ci sono <code>sei personaggi in cerca di autore</code> e
<code>Enrico IV</code>.</li></ul>
<p>\xC8 l\u2019autore che meglio di altri descrive nelle sue opere le <code>caratteristiche della societ\xE0 di massa</code>, al centro della sua analisi c\u2019\xE8 la
discussione sul contrasto tra <code>apparenza e sostanza</code>, tra l\u2019essere e l\u2019apparire, tra la persona e il personaggio, tra l\u2019identit\xE0 e la maschera
etc. dice quindi \u201Cnella societ\xE0 di massa conti se sei omologato\u201D. Pirandello dice che \u201Cper essere qualcuno devi indossare una <code>maschera</code>\u201D.
Cambiando in continuazione maschera perdiamo la nostra identit\xE0. Pirandello spiega quest\u2019analisi indirettamente attraverso la tecnica
narrativa dell\u2019<code>umorismo</code>.</p>
<h2>Umorismo e comicit\xE0:</h2>
<p>\xC8 una modalit\xE0 di scomposizione e ricomposizione della realt\xE0 attraverso la <code>riflessione</code>. \xC8 una tecnica sia narrativa, sia di analisi. Si
prende la realt\xE0, la si scompone, si trova un elemento non conforme e la si ricompone per far ridere. L\u2019umorismo \xE8 il <code>sentimento del contrario</code>, sento che c\u2019\xE8 un comportamento contrario da ci\xF2 che dovrebbe essere.</p>
<p>La comicit\xE0 \xE8 l\u2019<code>avvertimento del contrario</code>, si fanno delle azioni contrarie a quello che dovrebbero fare le persone normali.</p>
<p>Avvertire indica una sensazione di distacco, sentire \xE8 pi\xF9 elaborato. Il passaggio da comicit\xE0 ad umorismo avviene attraverso la
<code>riflessione</code>.</p>
<blockquote><p><strong>L\u2019esempio di Pirandello</strong>: Io vedo una donna di una certa et\xE0. \xC8 vestita in un modo contrario rispetto a come dovrebbe essere una donna
della sua et\xE0, ha le gonne corte, i capelli colorati, \xE8 truccata e vestita con abiti da giovane. Quando la vedo rido (comico, avverto il
contrario). Se rifletto, vedo con attenzione la signora, e conosco delle sue cose capisco che vuole nascondere rughe, capelli bianchi, essere
appariscente per attirare l\u2019attenzione del marito. Ora rido ma comprendo le ragioni (Umorismo).</p></blockquote>
<p>Secondo Pirandello la vita \xE8 il <code>prodotto di una continua trasformazione</code>, anche l\u2019uomo si trasforma in continuazione attraverso l\u2019utilizzo
della <code>maschera</code>. Nella societ\xE0 di Pirandello non si pu\xF2 vivere senza la maschera, chi prova a vivere senza poco dopo la riprendono, sono
considerati pazzi. La societ\xE0 di Pirandello impone l\u2019uso della maschera per avere delle relazioni sociali, una societ\xE0 basata sulla forma e
sulla maschere \xE8 apparente e falsificata. Si deve leggere la realt\xE0 quindi attraverso il <code>relativismo conoscitivo</code>, quindi si conoscono cose,
persone e realt\xE0 in modo relativo, non si possono definire le persone, ci sono tanti fattori che non si possono conoscere.</p>
<p>L\u2019etica e la morale sono degli obblighi assurdi per Pirandello, le regole non hanno ragione di essere dato che tutto \xE8 relativo. Dice, <code>la prima struttura insensata da annientare \xE8 la famiglia</code>, condiziona le idee e impone regole ed obblighi.</p>
<h2>Novelle per un anno:</h2>
<p>Sono un\u2019opera che ha coinvolto la sua intera vita, dovevano essere 24 libri, in realt\xE0 ne ha scritte 243 in 15 volumi. Le novelle sintetizzano
i temi e la visione di Pirandello.</p>
<h3>Il treno ha fischiato:</h3>
<p>Il testo racconta la storia di <code>Belluca</code>, la novella inizia quando i fatti somo gi\xE0 accaduti. Dice \u201D<em>farneticava, aveva la febbre e tutti i
suoi compagni d\u2019ufficio che erano andati a trovarlo all\u2019ospizio avevano capito che stava male. I medici dicevano che era encefalite, coloro
che erano andati a trovarlo si chiedevano \u201CMorir\xE0?\u201D a nessno veniva in mente le motivazioni che avevano portato Belluca a farneticare, ma era
successo un fatto. La sera prima Belluca si era ribellato al suo capoufficio, gli si era quasi scagnato addosso, ma lui era un uomo
tranquillo, sottomesso, nessuno avrebbe mai pensato ad un comportamento del genere. Di lavoro faceva il bilancio, scriveva le note, eseguiva
sempre gli ordini in silenzio. Quando qualcuno gli diceva parole stava zitto perch\xE8 era abbituato da anni e continue bastonate a sopportare.
Gi\xE0 quella mattina in ufficio si era presentato con un\u2019aria insolita, sembrava che guardasse le cose in un altro modo, sorridente. Il capo
ufficio lo squote, ma lui risponde \u201Cil treno ha fischiato\u201D. Il capo si arrabbia, quelli che lavorano escono ridendo e lo considerano pazzo.
Intanto era abbastanza tranquillo, imitava il fischio del treno. Immaginava le montagne, il percorso del treno, e nella sua immaginazione si
sentiva tranquillo e meno alienato del fare tutti i giorni le stesse cose. Bellucca non \xE8 impazzito, qualcosa gli \xE8 accaduto. Spiega, Lui vive
con tre donne che vogliono essere servite, ma \xE8 talmente compresso dai doveri che il fischio del treno lo risveglia, si rende conto che il
mondo esiste. Nella conclusione, dopo aver sentito il fischio, torna ad essere quello che era prima, nessuno pu\xF2 vivere fuori dalle
convinzioni sociali, famiglia e contesto. Bellucca vuole essere quello che \xE8 e gli dicono che \xE8 matto. Non esiste la possibilit\xE0 di avere una
propria identit\xE0 nella societ\xE0. Lui torna ad essere quello che era, ma vive meglio, sa che per un momento pu\xF2 recuperare la sua identit\xE0.</em>\u201D</p>
<h2>Il fu Mattia Pascal:</h2>
<p>\xC8 un romanzo, non ha una struttura lineare, soprattutto nell\u2019introduzione, premessa 1 e premessa 2. La storia segue il percorso di Mattia
Pascal, che diventer\xE0 Adriano Meis, e poi \u201Cil fu Mattia Pascal\u201D. \xC8 la storia dell\u2019 <code>identit\xE0 sospesa</code> di un uomo e della sua evoluzione,</p>
<p>\u2026 dopo aver cambiato vita va a Roma e si innamora della figlia del proprietario della locanda. La vuole sposare, ma non aveva i documenti,
nel contesto sociale non \xE8 nessuno. Gli uomini che non rispettano le convenzioni socili non hanno identit\xE0. Adriano Meis ritorna nel suo paese
e decide che vuole tornare ad essere Mattia Pascal. Questo per\xF2 non \xE8 possibile, va al cimitero e vede la sua tomba, sua moglie si \xE8
risposata, l\u2019uomo che quindi non rispetta le convenzioni sociali non \xE8 nessuno. Chi non aderisce alle regole sociali non conta, si parla
quindi di <code>identit\xE0 sospesa</code>, quando l\u2019identit\xE0 \xE8 funzionale ad essere riconosciuto come qualcuno nel mondo. A lui non rimane che scrivere le
sue memorie chiuso in una biblioteca in Liguria, fuori dalla realt\xE0.</p>
<h3>Trama:</h3>
<p>Era un bibliotecatrio, viveva con la moglie e la sposa, aveva due gemelli ma sono morti, voeva andare in america ma quando arriva a Montecarlo
vince una somma di denaro al gioco, e quando vuole tornare in Liguria legge dal giornale della sua morta.</p>
<h2>Componimento:</h2>
<p>Il romanzo ha parti descrittive e parti filosofiche, non \xE8 una semplice narrazione, ma una narrazione complessa. L\u2019idea di scrivere questo
romanzo gli \xE8 venuta in una biblioteca dove lavorava, dove c\u2019era anche l\u2019amico <code>Don Eligio</code>.</p>
<p>Dopo questa parte generale dice: \u201Cgli uomini sono delle trottole invisibili illuminate da un filo di sole, stanno in una terra che \xE8 come
(rispetto all\u2019universo) un granello di sabbia che gira senza sosta, senza sapere perch\xE8 e senza arrivare ad un destino. In questa terra a
volte fa caldo, a volte freddo, e per non farci annoiare gira continuamente. <code>Copernico</code><strong>*</strong> ha rovinato l\u2019umanit\xE0. Noi dobbiamo adattarci
all\u2019idea che siamo piccoli, che per l\u2019univer4so non valiamo niente e che le nostre invensioni e scoperte sono nulla in confronto alle forze
pi\xF9 grnadi. Dimentichiamo spesso che siamo atomi infinitesimali e per questo spesso ci facciamo la guerra anche per un piccolo pezzo di terra.
Se ci ricordassimo che siamo una piccola entit\xE0, vivremo nel mondo in modo diverso.\u201D.</p>
<blockquote><p><strong>Copernico</strong> viene citato perch\xE8 \xE8 stato il primo a mettere in discussione il sistema geocentrico. Questo prevedeva che tutto girasse
intorno alla terra, e dipendesse da essa. Quello eliocentrico, invece, prevedeva che la terra fosse solo uno dei tanti sistemi in un contesto
infinitamente grande.</p></blockquote>
<h3>Capitolo 8:</h3>
<p>\xC8 un capitolo importante, Pirandello fa una riflessione, Mattia Pascal \xE8 Adriano Meis e scrive:</p>
<p><em>Io sono ADriano Meis ma non avrei mai potuto avere un amico, Amicizia vuol dire confidenza, come avrei potuto confidare un segreto della mia
vita senza nome e senza passato? Avrei potuto avere solo conversazioni superficiali, potr\xF2 vivere solo con me e di me. Siamo giusti, io mi ero
conciato in quel modo per gli altri, non per me, ora mi chiamo Adriano Meis, Mattia Pascal era morto.</em></p>
<p><em>La vita a considerarla cos\xEC da spettatore estraneo mi pareva senza senso e senza scopo</em></p>
<p>Analisi sulla <code>societ\xE0 di massa</code>, sottolinea l\u2019<code>ambivalenza del progresso</code>:<br> <em>Perch\xE8 c\u2019\xE8 questo stordimento di macchine? e che far\xE0 l\u2019uomo
quando le macchine faranno tutto? Si accorger\xE0 allora che il progresso non ha nulla a che fare con la felicit\xE0? Di tutte le invenzioni che fa
l\u2019umanit\xE0, che gioia proviamo noi ammirandole? Un giorno ho fatto il giro di mezza Milano con il tram elettrico, l\u2019uomo diceva che era una
bella invenzione, ma non si era accorto che, a causa dei soldi spesi nel tram e nella bolletta della luce spendeva tutto lo stipendio, eppure
crediamo di essere felici, ed avere un\u2019esistenza pi\xF9 comoda.</em></p>
<h2>Il lanternino:</h2>
<p>Mattia Pascal si \xE8 operato ad un occhio e deve stare 40 giorni al buio. durante questi giorni avvia un discorso filosofico con <code>Anselmo Palearmi</code>, il padrone dell\u2019albergo in cui vive a Roma:</p>
<p><em>Il signor Anselmo mi dimostrava che non siamo come l\u2019albero che vive e non sa di vivere</em> <strong>*</strong> <em>albero a cui la terra, pioggia, sole e vento
non cambia nulla. Noi invece siamo consapevoli che stiamo vivendo, abbiamo il \`sentimento della vita.  Nel mondo ci sono tanti lanternini
accesi, alcuni attraverso la lanterna vedono pi\xF9 o meno luce, chi ha il lanternino acceso o spento. Quando la persona muore, il lanternino \xE8
spento. Ognuno ha la sua consapevolezza di vita</em></p>
<blockquote><p><strong>Non sa di vivere</strong> non ha la consapevolezza di essere vivo. La vita, o consapevolezza di vivere, \xE8 uguale ad un lanternino.<br> 1 uomo = 1
vita = 1 lanterna</p></blockquote>
<p>Quando l\u2019uomo muore il lanternino si spegne.</p>
<p><em>A me sembra che in certe et\xE0 della storia, come in certe stagioni della vita individuale, potrebbe essere che i lanternini assumano un colore
rispetto ad un\u2019altro. <code>L&#39;unione dei lanternini da origine a dei lanternoni</code>, dove prevalgono alcuni colori. Se prevale il rosso potremmo dire
che prevale l\u2019idea della virt pagana, se prevale il viola prevale la virt\xF9 cristiana, le idee prevalgono e si diffondono perch\xE8 sono prodotto
di <code>sentimenti collettivi</code>. Se il sentimento collettivo si divide, la fiamma dell\u2019idea diventa pi\xF9 debole, come avviene nei periodi di
transizione, nel quale non ci sono tendenze dominanti.</em></p>
<p><em>Ci sono perodi della storia nei quali non c\u2019\xE8 pi\xF9 luce, si crea un <code>buio improvviso</code> (non ci sono guide), le lanterne vanno avanti e indietro,
ma nessuno trova la via, si urtano, si aggregano ma non si mettono d\u2019accordo, si sparpagliano, sono formiche che non trovano il formicaio.</em></p>
<p>Se non ci sono idee dominanti, molte persone vanno in chiesa, perch\xE8 si fidano della religione.</p>
<p><em>Li trovano l\u2019alimento per la vita (l\u2019olio della lampada). Poveri vecchi a cui ment\xEC la vita e che vanno nel buio della vita\u2026 </em></p>
<p>Alla fine dice che \xE8 tornato, nessuno lo riconosceva eppure dice di esserer come una volta. Vedendo alcuni lineamenti avrebbero potuto pensare
alla somiglianza come Mattia. Nessuno lo riconosceva, perch\xE8 nessuno pensava pi\xF9 a lui.</p>
<h2>Uno, nessuno e centomila</h2>
<p>Racconta la storia di <code>Vitangelo Moscarda</code>, un borghese. Un giorno sua moglie lo guarda e dice che il suo naso pendeva a destra. Lui ci rimane
male e si interroga, l\u2019aveva destabilizzato e non si riconosceva pi\xF9. Decide di cambiare vita, rinunciare alla vita e all\u2019azione. </p>
<p>Il titolo sintetizza la filosofia di Pirandello, secondo cui <code>l&#39;uomo \xE8 uno</code>, ha un\u2019identit\xE0, ha <code>centomila immagini e maschere</code> che cambia in
relazione al contesto, ma finch\xE8 ogni volta deve indossare una maschera <code>alla fine non \xE8 nessuno</code>, non sa neppure lui qual \xE8 la sua vera
identit\xE0.</p>`;
});
var LuigiPirandelloNuovo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Luigi_Pirandello_nuovo
});
var EtuC3uA0_del_decadentismo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Questione di datazione:</h2>
<p>\xC8 un fenomeno che si sviluppa in <code>Francia</code> tra il <code>1880 - 1910</code>.
Non tutti gli studiosi per\xF2 sono d\u2019accordo sulle date, perch\xE8 vengono considerate la <em>teoria della relativit\xE0 di Einstein</em>, la <em>Psicanalisi di Freud</em> e la <em>teoria del tempo come durata di Bergson</em>. </p>
<h2>Contesto storico:</h2>
<p>L\u2019elemento centrale di questo periodo \xE8 l\u2019<code>imperialismo</code>, e la corsa alle colonie. A differenza delle colonizzazioni precedenti, con l\u2019imperialismo abbiamo stati inferiori da colonizzare. Una parte di intellettuali utilizza questo concetto per esaltare il mito della nazione e del nazionalismo, gli altri invece tengono un distacco dalla realt\xE0, vivono nel loro mondo e scrivono opere di mondi immaginari. </p>
<h2>Contesto culturale:</h2>
<p>Il termine <em>decadentismo</em> nasce in Francia nella seconda met\xE0 dell\u2019Ottocento. Gli autori consideravano <code>Baudlaire</code> come loro maestro, anche se non era decadente. Aveva scritto <code>I fiori del male</code> (1857),  un opera in poesia censurata. Aveva affermazioni molto provocanti, ed esaltava l\u2019uso di oppiacei e allucinogeni per allontanarsi dalla vita reale. In queste opere aveva mostrato il valore di una vita alternativa, fuori dalle regole, disegnando l\u2019artista come un genio. Promuove un <code>linguaggio simbolico</code>, che va a sostituire quello descrittivo. La parola \u201Cdecadentismo\u201D appare per la prima volta nel 1886 come titolo di una rivista, \u201Cle decadence\u201D, dove compaiono i principi del movimento. Stava ad indicare il vivere in una citta decadente, che rinnega i valori della tradizione, una societ\xE0 in crisi, dato che gli intellettuali non si riconoscevano pi\xF9 in quel mondo e vivevano alcune scelte politiche come infelici. I valori in cui si  credeva erano venuti meno, quindi vennero meno la fiducia nelle istituzioni, nella fede e nei rapporti umani. Tra gli intellettuali pi\xF9 importanti ci sono <code>Verlaine</code>, <code>Mallarm\xE9</code> e <code>Rimbaud</code>.</p>
<h2>Poetica e visione del mondo:</h2>
<p>Il decadentismo</p>
<ul><li><strong>Mette in crisi il valore della ragione</strong> e della scienza come strumenti di conoscenza. <ul><li>\xC8 l\u2019opposto del positivismo, la scienza \xE8 fondamentale, per\xF2 l\u2019analisi dell\u2019animo si fa con l\u2019arte, pittura, letteratura etc. </li>
<li>\xC8 simile nei termini generali al romanticismo; sostituisce al concetto di sentimento la <code>sensazione</code>, che viene esasperato. \xC8 quindi meno strutturato del romanticismo.</li></ul></li>
<li>ha un <strong>distacco dell\u2019intellettuale dalla societ\xE0</strong>.</li>
<li>ha una <strong>visione negativa della societ\xE0 borghese</strong>.</li></ul>
<h2>Principi del decadentismo:</h2>
<ul><li><strong>La realt\xE0 non \xE8 riconoscibile:</strong> ??</li>
<li><strong>L\u2019arte \xE8 l\u2019unico approccio possibile per conoscere la realt\xE0:</strong> L\u2019arte \xE8 la dimensione pi\xF9 alta dell\u2019essere umano, con la quale conosce le cose. Ci distingue dagli animali e dalle cose.</li>
<li><strong>Poeta veggente:</strong> Vede prima le cose, nella loro profondit\xE0 e interiorit\xE0.</li>
<li><strong>Linguaggio destrutturato:</strong> non usa una struttura classica, si deve usare un linguaggio che spieghi la realt\xE0 non conoscibile, quindi <code>simbolico</code>.  Spesso non usa la punteggiatura, sono testi brevi e prevalgono le sensazioni. Non ha senso scrivere tanto di una realt\xE0 che non si conosce.</li></ul>
<h2>Simbolismo</h2>
<p>All\u2019interno del decadentismo nel 1886 si separa un gruppo di intellettuali e da vita al <code>simbolismo</code>. Ha le stesse caratteristiche del decadentismo, ma l\u2019uso del linguaggio simbolico viene esasperato. Scrivono il <code>manifesto del simbolismo</code>, ovvero la presentazione del loro programma. Descrivono mondi immaginari, c\u2019\xE8 la poesia come pura musica, il linguaggio diventa raffinato, prelogico e criptico, un uso ricorrente delle figure retoriche. La poesia descrive l\u2019irrazionale.
Questi poeti vennero chiamati <code>poeti maledetti</code>, per come vivevano (concretamente e fuori dalle regole), l\u2019uso normale di droghe e molti morirono in giovane et\xE0.</p>
<h2>Estetismo e Vitalismo:</h2>
<p>All\u2019interno del decadentismo ci sono due atteggiamenti:</p>
<ul><li><strong>Estetismo</strong> lo scopo della vita \xE8 il bello. L\u2019immagine del Dandy rientra nell\u2019estetismo.<ul><li><code>Huysmans</code> scrive <em>\xC0 rebours</em>, un romanzo descrittivo con una trama elementare che parla di un Dandy, Des Esseintes, e la sua passione per il bello. Sono uomini in crisi che si chiudono nel loro mondo, e fanno di quello il mondo reale.</li>
<li><code>Oscar Wilde</code> scrive <em>Il ritratto di Dorian Gray</em>, ha dei personaggi, una trama articolata e con una descrizione molto forte di trattazioni filosofiche. A differenza della maggioranza dei romanzi del Novecento, la narrazione non segue l\u2019ordine degli eventi.</li>
<li><code>Gabriele D&#39;Annunzio</code> scrive <em>Il piacere</em>, con protagonista Andrea Sperelli. \xC8 un\u2019opera fortemente descrittiva e non segue l\u2019ordine degli eventi.</li></ul></li>
<li><strong>Vitalismo</strong> \xC8 un atteggiamento secondo il quale l\u2019uomo crede di essere un supereroe, il personaggio ha un\u2019alta coscienza di s\xE8, tipica di un mondo nazionalista. D\u2019Annunzio ha il mito del superuomo, i romanzi parlano di come si senta diverso dalla massa. Il mito del superuomo in Italia si riconosce dopo la prima guerra mondiale quando si parla di vittoria mutilata, e si incentiva la popolazione a ribellarsi nei confronti dell\u2019Austria Ungheria. D\u2019Annunzio butta dei volantini offensivi su vienna, con il \u201Cvolo su Vienna\u201D, e organizza la presa di Fiume.</li></ul>
<p>Estetismo e Vitalismo sono due atteggiamenti, l\u2019estetismo dell\u2019anti eroe, mentre il Vitalismo \xE8 tipico dell\u2019eroe. L\u2019esteta si chiude in se stesso, si allontana dal mondo, il vitalismo incita all\u2019eroismo. Entrambi sono atteggiamenti di uomini che vivono in una societ\xE0 in crisi. </p>`;
});
var Et_DelDecadentismo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": EtuC3uA0_del_decadentismo
});
var Gabriele_DAnnunzio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Caratteri generai:</h2>
<p>\xC8 un poeta che inserisce nelle sue opere sia i caratteri dell\u2019<code>estetismo</code>, sia del <code>vitalismo</code>.</p>
<h2>Vita:</h2>
<p>La sua vita pu\xF2 essere divisa in varie fasi:</p>
<h3>Pescara:</h3>
<p>Nasce a <code>Pescara</code> da una famiglia benestante, e studia in un collegio prestigioso. Fin da subito \xE8 appassionato di letteratura, e compone le sue prime poesie. Dopo aver ottenuto il diploma si inscrive all\u2019universit\xE0, ma non si laurea, la sua attivit\xE0 prevalente era quella del <code>giornalismo</code>.</p>
<p><strong>Compone le prime opere</strong></p>
<h3>Roma:</h3>
<p>Si trasferisce nel <code>1881</code>, dove frequenter\xE0 i salotti pi\xF9 esclusivi della capitale. D\u2019annunzio li frequentava sia per <code>ragioni culturali</code>, sia per <code>ragioni sociali</code> (gli piaceva essere in vista).
Si sposa a 20 anni, ma dopo 3 anni ha gi\xE0 un\u2019amante, si separa dopo 7 anni. Usava le donne per poter avere uno stile di vita pi\xF9 alto delle sue possibiit\xE0.</p>
<p><strong>Scrive il romanzo dell\u2019estetismo <code>Il piacere</code> (1889).</strong></p>
<h3>Napoli:</h3>
<p>Continua gli studi e le pubblicazioni. A Venezia conosce <code>Eleonora Duse</code>, unica donna che ha amato.</p>
<p><strong>Scrive <code>Il trionfo della morte</code> e <code>le vergini delle rocce</code>, entrambi romanzi del vitalismo.</strong></p>
<h3>Firenze:</h3>
<p>Con Eleonora scrive opere teatrali, frequenta le zone della Versilia (mare della Toscana).</p>
<p><strong>Scrive <code>le laudi</code>, una raccolta di poesie.</strong></p>
<h3>Francia:</h3>
<p>Si trasferisce a causa di debiti di gioco. Quando l\u2019Italia entra in guerra nel 1915 pronuncia un discorso favorevole. Si arruola volontario e ha la possibilit\xE0 di volare con gli aerei. Rimane ferito in un incidente, dove perde l\u2019occhio destro.</p>
<h3>Venezia:</h3>
<p>Una volta guarito torna al fronte e, a conclusione della guerra, compie due azioni particolarissime:</p>
<ul><li><code>Volo su Vienna</code>, dove con amici sorvolano Vienna con 11 aerei e lasciano manifesti tricolori che deridono l\u2019impero Austro Ungarico.</li>
<li><code>Presa di Fiume</code>, insieme a degli amici occupano Fiume (1919) ritendo che spettasse all\u2019Italia per il patto di Londra.</li></ul>
<p><strong>Compone il romanzo <code>Il notturno</code> mentre sta male. \xC8 la manifestazione del Velleitarismo, ovvero la comprensione della sproporzione tra ci\xF2 che si \xE8 e ci\xF2 che si vuole essere. Capisce che prima o poi anche lui morir\xE0.</strong></p>
<h3>Gardone Riviera:</h3>
<p>Si costruisce una villa nel lago di Garda, il Vittoriale degli Italiani, dove verr\xF2 sepolto. </p>
<p>Era filofascista, ma dopo il 1924 si distacca e fa la vita d\u2019artista.</p>
<h2>Il mito di s\xE9 stesso:</h2>
<p>La visione del mondo e lo stile di vita di D\u2019Annunzio prendono il nome di <code>Dannunzianesimo</code>, era un uomo fuori dal comune, volle creare il mito di s\u2019\xE8 stesso e ci riusci. Il vittoriale \xE8 pensato e arredato come museo autocelebrativo. Era esibizionista, amava essere al centro dell\u2019attenzione, un playboy, frequentava party e cacce alla volpe, era un dandy e andava al caff\xE8 greco (piazza di Spagna, Roma).
Fu uno dei primi intellettuali a capire l\u2019importanza della <code>pubblicit\xE0</code>. L\u2019arte, la letteratura e la fama passavano attraverso la pubblicit\xE0. Collabor\xF2 con l\u2019industria cinematigrafica, ebbe la passione delle automobili, degli areoplani e motoscafi.</p>
<h2>Il Piacere:</h2>
<p>\xC8 un romanzo dell\u2019estetismo diviso in quattro libri pubblicato nel 1889. Ha una trama sintetica, infatti nel componimento prevale la descrizione rispetto alla narrazione dei fatti.
Il protagonista \xE8 <code>Andrea Sperelli</code>, un dandy, un uomo colto e raffinato che dopo aver viaggiato a lungo va a Roma. Il romanzo non ha una trama lineare, segue infatti la <code>linea del tempo interiore</code>, che non coincide con l\u2019ordine cronologico degli avvenimenti. </p>
<p>Andrea era innamorato di Elena Muti, e il romanzo inizia con lei che va nella villa in piazza di Sapgnaa Roma dove vieve Andrea, anche se erano gi\xE0 separati. Per amor di Elena aveva compiuto un duello, era rimasto ferito e aveva passato la convalescenza a casa di una cugina, dove aveva conosciuto Maria Ferres. Vede elena nel suo palazzo, che intanto si era sposata. Elena \xE8 una donna passionale, Maria \xE8 una donna pi\xF9 spirituale. Una sera Sperelli durante una relazione invece di chiamare Maria con il suo nome la chiama Elena. Maria se ne va infastidita, e l\u2019opera si conclude con Andrea che vive solo nel palazzo.</p>
<h2>Il vitalismo:</h2>
<p>D\u2019Annunzio non aderisce sono all\u2019estetismo, ma anche al vitalismo, all\u2019idea fortemente nazionalista che in lui si determina con le azioni (volo su Vienna e la presa di Fiume) e che hanno come obiettivo dimostrare la grandezza dell\u2019uomo. Sia il vitalismo, sia l\u2019estetismo sono due atteggiamenti del decadentismo, di un uomo in crisi. D\u2019Annunzio ha assorbito la cultura del vitalismo dal suo tempo, dalla diffusione delle idee nazionaliste. L\u2019applicazione nelle opere deriva soprattutto dalla lettura nei primi anni del 900 dell\u2019opera di un intellettuale tedesco, <code>Nietzsche</code>, che mor\xEC nel 1900. Nel tempo Nietzsche \xE8 stato interpretato come il filosofo di riferimento per gruppi nazionalisti e per Hitler, perch\xE8 incentivava alcune idee vitaliste. In realt\xE0 nulla di tutto questo \xE8 vero, perch\xE8 non ebbe e scrisse mai atteggiamenti contrari agli ebrei o atteggiamenti anti democratici. Nelle sue opere parla di \u201Coltreuomo\u201D, e in questa idea ci sono diversi aspetti:
<br>
Afferma che nell\u2019uomo ci sono due anime:</p>
<ul><li><strong>Anima di Dioniso</strong> (dionisiaca)
\u25CB \xC8 il dio del vino, \xE8 la divinit\xE0 che secondo il mondo greco a capo delle felicit\xE0, all\u2019irrazionale, alla gioia e all\u2019istinto.</li>
<li><strong>Anima di Apollo</strong> (apollea)
\u25CB \xC8 il simbolo dell\u2019equilibrio, dell\u2019ordine, della bellezza.</li></ul>
<p>Per Nietzsche deve prevalere l\u2019anima dionisiaca, per differenziarsi dall\u2019uomo comune. \xC8 un uomo creativo, che si distingue dagli altri, \xE8 un uomo che ha volont\xE0 di potenza. Anche D\u2019Annunzio ha reinterpretato l\u2019immagine dell\u2019oltreuomo, dando origine al <code>superuomo</code>. Questa \xE8 un\u2019interpretazione forzata che rende Nietzsche un autore antidemocratico. Nietzsche parla nella sua opera di <code>nichilismo</code>(nihil, nulla), che poi si chiamer\xE0 \u201CDio \xE8 morto\u201D. \xC8 una visione della realt\xE0 che ha come fondamento il credere nel nulla, o non credere in nulla. Perch\xE8 credi non ci sia nulla di logico, continuo e sensato in cui credere. Dio \xE8 morto vuol dire che nulla, ne la religione, ne la filosofia, ne le istituzioni possono rappresentare una garanzia per l\u2019uomo. Nietzsche rifiuta tutte le filosofie che la storia ha creato considerandole una menzogna. La pi\xF9 grande \xE8 Dio. Dice questo nell\u2019opera \u201Ccos\xEC parl\xF2 Zarthustra\u201D, un\u2019antica divinit\xE0 persiana, probabilmente inventata, dove zarathustra parla dell\u2019oltreuomo ai persiani. </p>
<p>D\u2019Annunzio interpreta a suo modo Nietzsche e ne prende alcuni elementi, come il concetto di oltreuomo, l\u2019uomo che si distingue, che diventa superuomo in D\u2019Annunzio, ossia l\u2019uomo che si impone. Nietzsche aveva un pensiero molto pi\xF9 strutturato, il nichilismo, ossia la consapevolezza della decadenza della civilt\xE0 europea, che non viene ripresa in D\u2019Annunzio. Il concetto di nichilismo, ossia di non credere in nulla, non vuol dire \u201Cbuttare tutto in vacca\u201D, \xE8 un\u2019atteggiamento simile a quello dei greci, che per difendersi da un contesto di un certo tipo avevano un\u2019atteggiamento di distacco.
Le opere che documentano il superuomo in D\u2019Annunzio sono \u201D<code>il trionfo della morte</code>\u201D e \u201D<code>le vergini delle rocce</code>\u201D. In entrambe le opere viene esaltato sopratutto l\u2019impero romano. Nell\u2019opera \u201Cil trionfo della morte\u201D il protagonista vorrebbe diventare il nuovo imperatore romano. Il superuomo descritto in queste opere \xE8 antidemocratico, considera il popolo come una massa ignorante, che si eleva a giudice dell\u2019umanit\xE0.</p>
<h2>Le laudi:</h2>
<p>In questa fase scrive poesie, che non hanno a che fare con gli atteggiamenti decadenti (estetismo e vitalismo). L\u2019opera \xE8 divisa in diversi libri, ognuno con il nome da una costellazione. <code>Alcione</code> \xE8 il terzo libro, il pi\xF9 noto e studiato, perch\xE8 \xE8 quello meglio riuscito da un punto di vista stilistico e nel quale si vede maggiormente l\u2019originalit\xE0 dello scrittore. In questo libro \xE8 presente il panismo.</p>
<blockquote><p><strong>Panismo:</strong>
deriva dal \u201Cdio Pan\u201D, il dio dei boschi per gli antichi. L\u2019uomo si sente un tuttuno con la natura. </p></blockquote>
<p>D\u2019Annunzio crea una <code>poesia musicale</code> molto vicina al mondo delle canzoni, che attribuisce un ruolo centrale alle parole intese come descrizione di un mondo immaginario. D\u2019Annunzio usa molte parole, ma i contenuti della poesia sono quasi inesistenti. La poesia di Pascoli invece \xE8 altamente simbolica e breve dove la parola \xE8 calibrata e studiata con dei contenuti profondi. Anche D\u2019Annunzio \xE8 decadente, usa una parola con valenza musicale e simbolica. \xC8 un simbolismo che non ha un contenuto alla base.</p>
<h2>La pioggia nel pineto:</h2>
<p>\xC8 una poesia di 128 versi dove D\u2019Annunzio racconta di trovarsi un <code>Versilia</code>, tra la liguria e la Toscana, assieme a Eleonora Duse. Sono in riva al mare. Piove e le gocce di pioggia trasmettono un suono molto particolare nella pineta. D\u2019Annunzio <code>descrive questa atmosfera particolare di un momento di pioggia</code>.</p>
<h2>Il notturno:</h2>
<p>Viene collocata come ultima fase della produzione di D\u2019Annunzio. Aveva fatto la missione in aereo, colpito dall\u2019artiglieria austriaca, aveva perso un occhio e per ragioni di sicurezza rimane immobile, in una casa di Venezia accudito dalla figlia. In questa occasione si fa dare dalla figlia dei fogli di carta dove <code>annota dei pensieri</code>. Sono pezzi di carta che messi insieme fanno un\u2019<code>autobiografia</code> (in parte inventata) che \xE8 il notturno. \xC8 un <code>testo frammentario</code> con periodi molto brevi. \xC8 uno stile completamente diverso dal D\u2019Annunzio comune.</p>`;
});
var GabrieleDAnnunzio = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Gabriele_DAnnunzio
});
var Giuseppe_Ungaretti = create_ssr_component(($$result, $$props, $$bindings, slots) => {
<<<<<<< HEAD
  return `<p>Ungaretti e Montale sono i poeti del primo Novecento.</p>
<p>##Ungaretti
Ungaretti \xE8 un poeta, \xE8 nato ad Alessandria d\u2019Egitto da genitori di Lucca. Trascorre la vita in diversi posti, ad Alessandria, a Parigi, a
Roma, in Brasile (st. Paolo). Con la prima guerra mondiale si \xE8 arruolato come soldito e combatt\xE8 nella linea del Carso. Ha scritto diverse
raccolte poetiche, quelle di parigi/Brasile son diverse da quelle della guerra.</p>
<h2>Veglia</h2>
<p>\xE8 scritta nel territorio del Carso, in Friuli Venezia Giulia. i soldati italiani dovevano difendere i territori dagli austriaci. Ungaretti
scrive quello che ha visto, la particolarit\xE0 sua \xE8 che, anche in un contesto drammatico come quello della guerra, riesce a trovare degli
elementi di positivit\xE0, riesce a capire meglio il senso e valore della vita. Nella poesia dice: <code>un&#39;intera nottata buttato vicino ad un compagno massacrato che aveva la bocca digrignata. la sua bocca era rivolta ad una notte di luna piena. con la congestione delle sue mani... le sue mani penetravano il mio silenzio</code> da un intera nottata alle mani descrive la situazione e tragicit\xE0 della guerra e della morte, ??? il
dramma dell\u2019uomo era un tuttuno con il suo dramma, quello che stava vivendo l\u2019uomo, la morte a causa della guerra, era cos\xEC impattante per
ungaretti che non poteva fingere di non vedere e sentire. l\u2019altro conceto \xE8 nei versi \u201Cho scritto lettere piene d\u2019amore\u201D, per dire che
Ungaretti nel contesto di dramma della guerra riesce a scrivere delle poesie che parlano di amore, di vicinanza e comprensione. io non sono
mai stato cos\xEC tant attaccato alla vita. Massacrato, bocca digrignata, congestione descrivono il compagno, esprime il tema della vicinanza e
dell\u2019attaccamento alla vita.</p>
<p>\xE8 un Linguaggio destruttrato, se non si conisce la realt\xE0, si parla di sensazioni, non fa giri articolati etc., da le informazioni. la
destrutturazione la realt\xE0 non si conosce, e si scrivono le poesie come i futuristi, si forniscono solo le parole. la realt\xE0 non \xE8 definibile, quindi ha senso fare una poesia per immagini. Ungaretti ha detto che la sua poesia si fonda sugli \u201Cspazi bianchi\u201D. </p>
<p>la mia poesia \xE8 nata in guerra, dovevo dire le cose di fretta perch\xE8 mancava il tempo, e con poche parole. se devo usare poche parole, devono essere intense. se si scrive sintetico si deve misurare le parole. il linguaggio di poche parole piene di significato che desse l\u2019idea di un uomo solo tra uomini soli in un paese nudo\u2026 e che sentivano nascere affetto e amore unoi per l\u2019altro, perch\xE8 rispetto alla guerra si sentivano deboli.</p>
<h2>Fratelli</h2>
<p>A quale reggimento appartenete? la parola fratelli trema nella notte, non si ha il coraggio di esprimerla. \xE8 una parola cos\xEC tremante come lo
\xE8 una foglia appena nata. nell\u2019aria spasimante (il dramma dell\u2019uomo) c\u2019\xE8 una rivolta involontaria dell\u2019 uomo che comprende la sua fragilit\xE0.
se in un contesto di guerra ho ancora la voglia di paarlare di fratelli \xE8 perch\xE8 l\u2019uomo nonostante tutto ha presente le ragioni della sua
debvolezza e fragilit\xE0.</p>
<p>il suo compagno conosciuto a Parigi aveva avuto una storia particolare, muore suicida perch\xE8 se n\u2019era andato dal suo paese, non aveva pi\xF9 una
patria e si era trasferito in Francia. aveva cercato di adattarsi alla realt\xE0 francese ma non era riuscito. la ragione del suicidio \xE8 quindi
il non essere integrato. la poesia dice Si chiamava Maomed SHead? proveniva da territori dei beduini del deserto mor\xEC suicida perch\xE8 non aveva
pi\xF9 una patria. am\xF2 la francia e cambi\xF2 nome. f\xF9 Marcel (si chiamava marcel) ma non era francese e non sapeva pi\xF9 vivere nella tenda dei suoi
(nella famiglia dove era nato) dove si ascolta la cantilena del corano bevendo un caff\xE8. c\u2019\xE8 un enorme differenaz tra vivere a parigi e negli
emiri nomadi. non si \xE8 suicidato solo perch\xE8 non aveva patria e identit\xE0, ma perch\xE8 non sapeva sciogliere il canto del suo abbandono. il fatto
fondamentale \xE8 che Marcel non sapeva comunicare agli altri le ragioni del suo sentirsi fuori dal mondo. \xE8 un canto perch\xE8 pevede una
comunicazione profonda, decidere di comunicare le ragioni per cui non sei francese e nemmeno un nomade del deserto \xE8 difficile. io l\u2019ho
accompagnato a parigi al numero 5 della via del carme, che era una via particolare. era un vicolo in discesa, come la vita di Maomed, riposa
nel cimitero collocato in un sobborgo, nella periferia di Parigi. \xE8 un sobborgo che sembra il giorno di una fiera che finisce, un trasloco, e
forse solo io so ancora che lui \xE8 vissuto. nel momento in ui una persona muore, il ricordo rimane un fatto personale. una persona che non ha
patria e nome.</p>
=======
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Caratteri generali</h2>
<p>Ungaretti \xE8 un poeta, \xE8 nato ad Alessandria d\u2019Egitto da genitori di Lucca. Trascorre la vita in diversi posti, ad Alessandria, a Parigi, a
Roma, in Brasile (st. Paolo). Durante la prima guerra mondiale <code>si \xE8 arruolato</code> e combatt\xE8 nella linea del Carso. Ha scritto diverse
raccolte poetiche, classificabili per periodo e luogo.</p>
<h2>Veglia</h2>
<p>\xC8 scritta nel <code>fronte austriaco del Carso</code>, in Friuli Venezia Giulia. Ungaretti <code>scrive quello che ha visto</code>, trovando anche degli elementi di positivit\xE0, riesce a capire meglio il <code>senso e valore della vita</code>. </p>
<p>Nella poesia passa la notte a vegliare sul cadavere di un copagno il cui viso \xE8 rivolto alla luna. Ha le mani congelate per il freddo, condizione quasi di morte.
Le sue mani penetravano il mio silenzio, (quello che stava vivendo l\u2019uomo, la morte a causa della guerra, era cos\xEC impattante per
Ungaretti che non poteva fingere di non vedere e sentire). </p>
<p>\u201D<em>ho scritto lettere piene d\u2019amore</em>\u201D, Ungaretti nel contesto di dramma della guerra riesce a scrivere delle poesie che parlano di amore, di vicinanza e comprensione.  <br>
\u201D<em>io non sono mai stato cos\xEC tanto attaccato alla vita.</em>\u201D
\xC8 un <code>linguaggio destrutturato</code>, non si conosce la realt\xE0, quindi vengono solo fornite le parole. La poesia di Ungaretti si fonda sugli <code>spazi bianchi</code>.</p>
<h2>Fratelli</h2>
<p>A quale reggimento appartenete? la parola fratelli trema nella notte, (non si ha il coraggio di esprimerla) come una foglia appena nata. Nell\u2019aria spasimante (il dramma dell\u2019uomo) c\u2019\xE8 una rivolta involontaria dell\u2019 uomo che comprende la sua fragilit\xE0. </p>
<p>Se in un contesto di guerra ho ancora la voglia di paarlare di fratelli \xE8 perch\xE8 l\u2019uomo nonostante tutto ha presente le ragioni della sua debvolezza e fragilit\xE0.</p>
<h2>In memoria</h2>
<p>il suo compagno conosciuto a Parigi aveva avuto una storia particolare, muore suicida perch\xE8 se n\u2019era andato dal suo paese, non aveva pi\xF9 una patria e si era trasferito in Francia. Non era riuscito ad adattarsi alla realt\xE0 francese.</p>
<p>Si chiamava Maomed Sceab, proveniva da territori dei beduini del deserto mor\xEC suicida perch\xE8 non aveva pi\xF9 una patria. Am\xF2 la francia e cambi\xF2 nome. Fu Marcel (si chiamava marcel) ma non era francese e non sapeva pi\xF9 vivere nella tenda dei suoi (nella famiglia dove era nato) dove si ascolta la cantilena del corano bevendo un caff\xE8. </p>
<p>C\u2019\xE8 un enorme differenza tra vivere a parigi e negli emiri nomadi. Non si \xE8 suicidato solo perch\xE8 non aveva patria e identit\xE0, ma perch\xE8 <code>non sapeva sciogliere il canto del suo abbandono</code>, non sapeva comunicare agli altri le ragioni del suo sentirsi fuori dal mondo. \xC8 un canto perch\xE8 pevede una comunicazione profonda. Io l\u2019ho accompagnato a parigi al numero 5 della via del carme, che era una via particolare. Era un <code>vicolo in discesa</code>, come la vita di Maomed, riposa nel cimitero collocato in un sobborgo, nella periferia di Parigi. \xE8 un sobborgo che sembra il giorno di una fiera che finisce, un trasloco, e forse solo io so ancora che lui \xE8 vissuto. nel momento in cui una persona muore, il ricordo rimane un fatto personale. Una persona che non ha patria e nome.</p>
>>>>>>> 9162d60f6603037c33acdde074ee19d81d459ff2
<h2>I fiumi</h2>
<p>\xE8 un testo lungo, \xE8 la storia della sua vita. Ungaretti dice
se io penso alla mia vita la collego alle vicende che mi sono capitate in questi territori percorsi dai fiumi. io in questo territorio ho riflettuto alle fasi della mia vita e in questo contesto di guerra mi sono riconosciuto.
inizia dicendo che \xE8 sul fronte di guerra e sta penasndo alla sua vita.
mi tendo a quest\u2019albero spezzato, abbandonato in questa dolina che ha la malinconia di un circo prima o dopo lo spettacolo. guardo il passaggio tranwuillo delle nuvole sulla luna. questa mattina mi sono disteso in un urna d\u2019accqua e come una reliquia ho riposato. questa mattina sono andato vicino ad un fiume e si \xE8 riposato, fa una metafora che mette in campo il tema dell\u2019urna e della reliquia, \xE8 un immagine sacra perch\xE8 nella religione si immergono le persone per il battesimo, l\u2019acqua purifica. l\u2019isozo scorreva e mi levigava come se fossi un suo sasso. ho tirato su le mie 4 ossa (mi sono alzato). e me ne sono andato dal fiume come un acrobata sull\u2019acqua, in modo incerto e insicuro. mi sono accoccolato vicino ai miei panni sporchi di guerra. i vestiti sporchi di guerra sono la sua identit\xE0. come un beduini si \xE8 disteso. e qui mi sono riconosciuto come una debole fibra dell\u2019universo. ha capito nuovamente di essere una debole fibra dell\u2019universo. la mia sofferenza \xE8 quando non mi sento in armonia. le mani sconosciute che mi stringono mi regalano una rara felicit\xE0. c\u2019\xE8 l\u2019idea di appartenere al sistema dell\u2019universo. ho ripassato le epoche della mia vita, questi sono i miei fiumi.
il Serchio, attraversa Lucca, \xE8 il luogo da cui provenivano i genitori. la sua famiglia campagnola aveva da sempre attinto dal serchio.
il Nilo attraversa Alessandria e l\u2019ha visto nascere e crescere ed essere fdelice in modo inconsapevole nelle sue ddistese pianure
la senna attraversa Parigi e nella sua acqua torbida mi sono rimescolato e conosciuto, \xE8 a parigi che \xE8 diventato consapevole di ci\xF2 che era e si \xE8 cponosciuto. questi sono i miei fiumi contati nell\u2019isonzo. questa \xE8 la mia nostalgia, poich\xE8 vedo in ogni persona ora che \xE8 notte come la vita \xE8 simile ad una corolla di tenebre. non sono petali di un fiore, sono petali di tenebre, la condizione \xE8 un insieme di tenebre, conclude il ripensamento alla sua vita ribadendo il concetto dellla negativit\xE0. </p>`;
});
var GiuseppeUngaretti = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Giuseppe_Ungaretti
});
var Giovanni_Pascoli = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Caratteri generai:</h2>
<p>Nasce a San Mauro di Romagna nel <code>1855</code>. Il padre gestiva una grande tenuta agricola del principe di Torlonia. Passava la vita rinchiuso in casa lamentandosi, era un poeta estraneo dal vitalismo e dall\u2019estetismo. Il <code>10 Agosto 1877</code> viene ucciso il padre mentre sta tornando a casa, probabilmente per una questione di terre. Da quel momento la famiglia comincia ad avere problemi economici, l\u2019anno dopo muore la madre ea distanza di anni da 10 fratelli restano Lui, Ida e Maria. Pascoli viveva nei confronti delle sorelle un affetto quasi morboso, quando Ida si sposa va ancora pi\xF9 in crisi, al punto che rimarr\xE0 per tutta la vita con Maria. Faceva l\u2019insegnante di italiano e latino al liceo, poi insegner\xE0 grammatica greca e latina all\u2019universit\xE0 di Bologna e quando Carducci abbandoner\xE0 la cattedra anche letteratura italiana. Quando muore vrr\xE0 sepolto nella cappela di famiglia assieme alla sorella Maria.</p>
<h2>Opere:</h2>
<h3>In latino:</h3>
<p>Scrive alcuni testi con una struttura poetica in latino. Fa questo perch\xE8 \xE8 <code>Filologo</code>, <code>Eurdita</code> e appassionato dell\u2019uso delle parole. Oggi non \xE8 possibile scrivere un testo in latino, perch\xE8 \xE8 una lingua morta, con una struttura completamente diversa dalle lingue in uso. Il suo \xE8 quindi un latino moderno, con argomenti semplici. Sono prevalentemente <code>quadri campestri</code>, ovvero poesie ambientate nel mondo della campagna.</p>
<h3>Di poesia in Italiano:</h3>
<ul><li><code>Myricae</code>, una raccolta di poesie</li>
<li><code>I poemetti</code></li>
<li><code>I canti di Castelvecchio</code></li></ul>
<h3>In prosa:</h3>
<ul><li><code>Il fanciullino</code>: testo all\u2019interno di una raccolta, dove spiega lo scopo del poeta.</li>
<li><code>Saggi critici</code>, articoli brevi dove analizza testi di alcuni intellettuali. Sono famosi quelli su Dante e Leopardi. </li></ul>
<h2>Il fanciullino:</h2>
<p>Per pascoli il poeta deve essere come un fanciullo. In ogni uomo adulto c\u2019\xE8 un fanciullino, che gli permette di immaginare, sognare e stupirsi, non rielabora i fatti, ma li comunica in modo simbolico, come quadri. \xC8 un linguaggio ricco di figure retoriche, metafore, similitudini, analogie, chiasmi, etc. \xC8 un linguaggio destrutturato, non diretto. Mentre Dante usa un linguaggio simbolico che ha a che fare con la religione, quello di Pascoli non esiste in natura, \xE8 frutto della sua immaginazione. Utilizza un linguaggio <code>pregrammaticale</code> (semplice ed essenziale, del fanciullino),e <code>postgrammaticale</code>, (olre la grammatica). Pascoli usa molte onomatopee, che richiedono un impegno e studio oltre la normale narrazione simbolica.</p>
<h2>Visione della vita:</h2>
<p>Pascoli ha una visione della vita profondamente negativa, descrive il mondo come <code>atomo opaco del male</code>, a causa della storia della sua famiglia. Ha una visione profondamente materialista, non trova in nullla una soluzione ai problemi della sua vita. Ha solo due elementi di enorme positivit\xE0:</p>
<ul><li><code>Il nido:</code> \xC8 la famiglia d\u2019origine, come riparo dall mondo. Usa un termine del mondo animale per sottolineare idea di riparo.</li>
<li><code>La poesia:</code> La letteratura, come forma di consolazione rispetto alle cose che succedono.</li></ul>
<h2>Opere:</h2>
<h3>Il fanciullino</h3>
<p>Pubbllicata nel <code>1891</code> \xE8 la prima raccolta poetica di Pascoli. Si intitola Myricae, si tratta di Poesia. All\u2019inizio erano 22 poesie, ma poi \xE8 arrivato  156. La parola \xE8 latina che Pascoli riprende da un\u2019opera di Virgilio. Oltre all\u2019Eneide scrive le Georgiche e le Buconiche. L\u2019Eneide \xE8 il poema epico per definizione, mentre le altre due sono opere nelle quali Virgilio esalta la vita di campagna, il lavoro dei campi, la natura. Nella buconica n.4 parla di Myricae. In italiano sono le Tamerici, dei fiori di campo comuni e attraverso questo termine Pascoli ci vuole dire che questa sua poesia sar\xE0 fatta di narrazione di cose semplici, comuni, legate al mondo della campagna, al mondo personale, e che il linguaggio con cui comunicher\xE0 sar\xE0 semplice, altamente simbolico, ma non bisogna mai pensare che questa semplicit\xE0 diventi semplificazione. </p>
<p>In ogni uomo c\u2019\xE8 un fanciullino, che non ha solo paura ma anche tripudi e gioia. Le caratteristiche del fanciullo nell\u2019adulto ti portano ad avere accanto all\u2019anima razionale, ordinata e rigorosa un\u2019anima che prova il <code>fascino per le cose</code>, che ama l\u2019elemento naturale e genuino della realt\xE0. Il fanciullo ha un modo di esprimersi semplice e umile (<code>simbolico</code>). In base a quello che deve descrivere trova relazioni tra le cose.</p>
<h3>Lavandare:</h3>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">Nel campo in parte grigio, e in parte nero [1]    
Rimane un aratro senza buoi [2]      
Che sembra dimenticato tra la nebbia 

E cadenzato dalla gora [3]   
Arriva lo sciabordare delle lavandaie  [4]
Con tonfi spessi e lunghe cantilene [5]


Il vento soffia e dai rami degli alberi cadono le foglie
E tu non ritorni ancora al tuo paese
Quando sei partito come sono rimasta
Come l&#39;aratro in mezzo ad un campo coltivato 
a maggese [6]</code>`}<!-- HTML_TAG_END --></pre>
<p><em>[1]</em> La parte grigia \xE8 non arata, la parte nera \xE8 arata<br>
<em>[2]</em> Il lavoro dei campi era fatto dall\u2019aratro trascinato dai buoi<br>
<em>[3]</em> E ritmato dal suono del ruscello incanalato<br>
<em>[4]</em> Senti il suono delle lavandaie che sciabordano (lavano)<br>
<em>[5]</em> Mentre lavavano spattevano le stoffe e si facevano compagnia con  canzoni<br>
<em>[6]</em> In parte coltivato, in parte no</p>
<p>Pascoli sta facendo un quadro del paesaggio, siamo in campagna, in autunno, il vento soffia e mentre qualcuno procede all\u2019aratura dei campi le donne si adoperano per lavare i panni. Apparte questa descrizione, il contenuto che vuole esprimere si concentra sulle parole: <code>Dimenticato, Non torni , Partisti e Rimasta</code>. Il contenuto non \xE8 cos\xEC semplice perch\xE8 \xE8 la storia di chi se n\u2019\xE8 andato e di chi andandosene ha lasciato solo qualcuno. \xC8 possibile comprendere come la poesia inizia con un aratro dimeticato e con un aratro collocato in mezzo ad un campo in parte coltivato, in parte no. Questa poesia iniziando e finendo con l\u2019aratro abbia uno <code>schema circolare</code>, inizia e finisce nello stesso punto.  Per dare l\u2019idea della musicalit\xE0 del testo Pascoli evidenzia alcune parole: \u201Cmezzo grigio e mezzo nero\u201D, \u201Cin mezzo\u201D la ripetizione della parola significa che ti manca qualcosa, aprire un testo con il concetto di mezzo vuol dire che ti manca una parte. Il termine \u201Csciabordare\u201D e \u201Clavandare\u201D sono due verbi che finiscono in \u201Care\u201D e danno l\u2019idea del rumore dell\u2019acqua mentre si muovono i panni e del lavare. L\u2019apertura in \u201Care\u201D da l\u2019idea di un movimento aperto.</p>
<p>\u201Cpare dimenticato\u201D \xE8 un\u2019inarcatura, ovvero quando l\u2019ultima parola di un verso \xE8 collegata alla prima del verso seguente.
\u201Cnevica la frasca\u201D \xE8 un\u2019analogia, \xE8 una figura retorica che rappesenta in modo sintetico un paragone, una specie di raffronto.  Sarebbe \u201Ci rami fanno cadere le foglie come se nevicasse\u201D. </p>
<h3>Novembre:</h3>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">L&#39;aria \xE8 simile ad una gemma, il sole \xE8 cos\xEC luminoso
Che tu ricerchi gli albicocchi in fiore
E senti nel tuo cuore il profumo amaro del prunalbo</code>`}<!-- HTML_TAG_END --></pre>
<p>Pascoli attraverso questi 4 versi ci dice che l\u2019aria \xE8 limpida, il sole \xE8 splendente e tu credi di essere in primavera. Addirittura cerchi gli alberi di albicocchi in fiore, e senti il profumo che emana quest\u2019albero.
Per la botanica usa sempre nomi ricercati
\u201Cl\u2019odorino amaro senti nel cuore\u201D Sinestesia: \xE8 una figura retorica che prevede l\u2019aggancio tra parole che dipendono da ambiti sensoriali diversi. Si unisce l\u2019ambito dell\u2019olfatto con l\u2019ambito della pecezione. </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">Ma il pruno \xE8 secco e le piante segnano [1] 
il cielo sereno con trame nere 
Il terreno risulta vuoto al piede che lo percorre</code>`}<!-- HTML_TAG_END --></pre>
<p><em>[1]</em> Se l\u2019albero non ha foglie \xE8 come se segnasse il cielo con trame nere</p>
<p>Se prima aveva detto che sembra che siamo in primavera, al verso 5 usa \u201Cma\u201D, una congiunzione avversativa e in quanto tale distingue il prima dal dopo. Con <em>ma</em> dice che non siamo in primavera, perch\xE8 il pruno non ha le foglie, i rami segnano il cielo, e la persona che percorre il terreno srente il piede risuonare nel vuoto.</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">Silenzio intorno, solo al vento
Senti da lontano dai giardini e dagli orti un debole cadere di foglie.
\xC8 la fredda estate dei morti. </code>`}<!-- HTML_TAG_END --></pre>
<p>Si tratta dell\u2019estate di san Martino, un periodo dove c\u2019\xE8 bel tempo, ma \xE8 freddo. \xC8 l\u2019estate fredda dei morti, perch\xE8 novembre inizia con la tristezza dei morti.</p>
<p>Pascoli usa \u201Calbicocchi\u201D, \u201Cprunalbo\u201D, \u201Cpruno\u201D, sono alberi abbastanza ricercati. Estate fredda \xE8 un ossimoro. </p>
<h3>X Agosto</h3>
<p>\xC8 stata scritta per celebrare la <code>morte del padre</code>, morto il 10 Agosto 1867. La poesia celebra anche il <code>mito del nido</code>. Il giorno di San Lorenzo \xE8 il giorno in cui cadono le stelle, accompagnato dalla possibilit\xE0 dell\u2019uomo di esprimere un desiderio. La poesia si fonda su una simmetria tra il percorso di una rondine e il percorso di un uomo che \xE8 il padre. Ci sono due percorsi paralleli, quando descrive la rondine usa termini dell\u2019ambito umano, quando descrive l\u2019uomo usa i termini dell\u2019ambito degli animali. Es. \u201Cla rondine va nella casa e l\u2019uomo ritorna al suo nido\u201D. L\u2019immagine del nido \xE8 altamente poetica. In questo testo Pascoli parla della sua visione del mondo, e definisce la vita come collocata su un\u2019atomo opaco (non sono chiari i meccanismi sul quale si corregge) del Male (una personificazione del male). Vivere in questa vita non \xE8 semplice. </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">San Lorenzo io lo so perch\xE8                                               
Cos\xEC tante stelle brillano e cadono nell&#39;aria serena.
Io lo so perch\xE8 un cos\xEC grande pianto brilla nella concavit\xE0 del cielo. 

Ritornava una rondine al nido [1]
L&#39;uccisero e cadde tra le spine   
La rondine aveva nel becco un insetto 
che era: la cena per i suoi rondinini. 

Ora che \xE8 morta \xE8 la come in croce [2]
Che mostra il verme ad un cielo lontano
E il suo nido \xE8 nell&#39;ombra che aspetta 
e che pigola sempre pi\xF9 piano.</code>`}<!-- HTML_TAG_END --></pre>
<p><em>[1]</em> si intende il tetto\u2013&gt; metonimia<br>
<em>[2]</em> dorso a terra e le ali spiegate</p>
<p>Da una parte c\u2019\xE8 un\u2019idea religiosa (religione), dall\u2019altra parte la negazione (cielo lontano), nessuno si occupa dei bisogni dell\u2019uomo. Indipendentemente dal fatto che dovesse ritornare al nido, nessuno interviene a favore. Ogni uomo si deve arrangiare. </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">Anche un uomo ritornava al suo nido
Lo uccisero, disse &quot;perdono&quot;
Negli occhi spalancati rimase un grido
Portava due bambole in regalo.</code>`}<!-- HTML_TAG_END --></pre>
<p>Mentre la rondine cade tra le spine(tema della croce) a differenza della rondine l\u2019uomo chiede perdono. Gli uomini possono comprendere e se comprendono possono perdonare. Pascoli non vuole dire che l\u2019uomo perdona in senso religioso.
Anche il pradre portava le bambole ai figli, come la rondine portava le cose da mangiare. Portare due bambole o le cose da mangiare sono cose diverse, nell\u2019ambito umano ci sono una serie di cose che sono centrali per l\u2019uomo. Le bambole rappresentano per i figli una dimensione d\u2019affetto, non animale.</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">Ora la nella casa solitaria
Lo aspettano inutilmente 
Egli immobile, attonito, mostra
Le bambole al cielo lontano

E tu Cielo [1] dall&#39;alto dei mondi 
Sereni, infinito, immortale [2]  
Tu cielo diffondi in questo atomo opaco del male un pianto di stelle</code>`}<!-- HTML_TAG_END --></pre>
<p><em>[1]</em> Cielo ha la maiuscola perch\xE8 \xE8 una personificazione. \xC8 un essere superiore<br>
<em>[2]</em> Climax</p>
<p>Vuol dire, E tu cielo rimani nel tuo sistema sempre sereno e immortale.
Il cielo invia alla terra(atomo immortale del male) un pianto di stelle. Un conto \xE8 se ci da delle prospettive, un bel cielo, un conto le stelle che cadono. </p>
<p>Negli ultimi 4 versi spiega come le stelle cadono e noi viviamo in un mondo meccanico di sofferenza</p>`;
});
var GiovanniPascoli = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Giovanni_Pascoli
});
var I_promessi_sposi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Caratteri generali del romanzo:</h2>
<p>Ci furono tre versioni del romanzo:</p>
<table><thead><tr><th>Titolo</th>
<th>Anni</th></tr></thead>
<tbody><tr><td>Fermo e Lucia</td>
<td><code>1821-1823</code></td></tr>
<tr><td>Promessi sposi</td>
<td><code>1825-1827</code></td></tr>
<tr><td>Promessi sposi</td>
<td><code>1840-1842</code></td></tr></tbody></table>
<p><strong>Il vero storico:</strong> Manzoni rimuove varie parti dal romanzo, per restare aderente alla realt\xE0 e essere pi\xF9 incisivo. Dice di aver trovato un <code>manoscritto del 1600</code> che parlava di un matrimonio ostacolato. Parla del ritrovamento all\u2019inizio del romanzo, per dar maggior valenza storica alla sua opera.</p>
<p><strong>Modifiche sul piano linguistico:</strong> Tra la seconda e la terza edizione dice di essere andato a <code>Sciacquare i panni in Arno</code>. Decide che la lingua del componimento sar\xE0 il Fiorentino, in quanto \xE8 la madre dell\u2019Italiano (lingua di Dante, Petrarca e Boccaccio).</p>
<p><strong>Argomenti principali:</strong> Oltre alla storia di <code>Renzo Tramaglino</code> e <code>Lucia Mondella</code>, protagonisti del romanzo, parla della <code>dominazione spagnola</code>, indicando per\xF2 a quella degli <code>Asburgo a Milano</code>. fa questo per evitare la censura del libro. </p>
<h2>Introduzione:</h2>
<p>La prima parte del romanzo \xE8 scritta in corsivo. viene riportato il ducumento del \u2018600, che parla della storia impossibile, di Milano e del dominio spagnolo. </p>
<p>Conclude dicendo </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">Ho tolto delle parti del romanzo, perch\xE8 mi sembra strano usare un libro per raccontarne un altro [...]</code>`}<!-- HTML_TAG_END --></pre>
<h2>Capitolo 1:</h2>
<p>Manzoni introduce l\u2019ambiente, descrivendolo dettagliatamente, per assicurarsi che il <code>lettore sia &quot;dentro la vicenda&quot;</code>.</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">Quel ramo del lago di como che volge a mezzogiorno tra due catene non interrrotte di monti [...]</code>`}<!-- HTML_TAG_END --></pre>
<p>La storia inizia il <code>7 Novembre 1628</code>.</p>
<p><strong>Don Abbondio</strong> \xE8 il primo personaggio descritto, \xE8 un sacerdote che tranquillamente diceva il suo uffizio, camminando con il breviario. Utilizza <code>come era solito</code>, <code>oziosamente</code>, <code>tranquillamente</code> per descrivere la tranquillit\xE0 della persona. </p>
<p><strong>I bravi</strong> erano l\u2019esercito personale del potente, usanza molto diffusa sopratutto in Lombardia.</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">Il nostro Abbondio, non nobile, non ricco, coraggioso ancor meno, s&#39;era dunque accorto, prima quasi di toccar gli anni della discrezione, d&#39;essere, in quella societ\xE0, come un vaso di terra cotta, costretto a viaggiare in compagnia di molti vasi di ferro.
Aveva quindi, assai di buon grado, ubbidito ai parenti, che lo vollero prete. Per dir la verit\xE0, non aveva gran fatto pensato agli obblighi e ai nobili fini del ministero al quale si dedicava:
procacciarsi di che vivere con qualche agio, e mettersi in una classe riverita e forte, gli eran sembrate due ragioni pi\xF9 che sufficienti per una tale scelta.
Ma una classe qualunque non protegge un individuo, non lo assicura, che fino a un certo segno: </code>`}<!-- HTML_TAG_END --></pre>
<p>Il primo capitolo si conclude con la presentazione di <strong>Perpetua</strong>, la donna che aiutava don Abbondio. </p>
<h2>Capitolo 2:</h2>
<p><strong>Renzo</strong> \xE8 un Giovane di vent\u2019anni, <code>tessitore di seta con modeste possibilit\xE0 economiche</code>. </p>
<p>Don Abbondio rimanda il matrimonio, e Renzo resta perplesso.
Renzo parla quindi con perpetua, che  gli fa sospettare qualcosa.
Renzo torna quindi da Don Abbondio, chiude la porta a chiave e lo fa parlare. Lui confessa che don Rodrigo non vuole che si svolga il matrimonio.
Renzo va verso la casa di Lucia, immaginando qualche vendetta per don Rodrigo. Si pente dei suoi pensieri e prova a capire perch\xE8 Luica non gli avesse detto nulla. Quando arriva alla casa chiede ad una ragazzina di chiamare Lucia al piano di sotto.
Lucia congeda le amiche e dice che il matrimonio \xE8 rinviato a causa della salute di d. Abbondio. Renzo, Lucia e Agnese (Madre di Lucia) parlano.</p>
<h2>Capitolo 4:</h2>
<p><strong>Padre Cristoforo</strong> si avvia dal convento di Pescarenico verso casa di Lucia. </p>
<p>Inizia la biografia di fra Cristoforo. Il suo nome di Battesimo \xE8 Lodovico, figio di un mercante e nato in citt\xE0. \xC8 un <code>protettore degli oppressi</code>, e per questo deve ricorrere spesso all\u2019uso della violenza. Un giorno, assieme ai suoi bravi, incontra un suo rivale, con il quale nasce un duello. Il nobile pugnala il maggiordomo di Lodovico, Cristoforo, quindi lui lo pugnala.
Si rifugia quindi presso un convento di cappuccini, dove scopre la sua vocazione e a 30 anni lascia tutto quello che ha e diventa frate. </p>
<p>Prima di partire per il noviziato Cristoforo fa visita ai parenti del morto per chiedere il perdono. Grazie alla sua umilt\xE0 trasforma la festa mondana in un occasione di perdono sicero. </p>
<p>Cristoforo arriva a casa di Lucia. </p>
<h2>Capitolo 5:</h2>
<p>Descrive il pazazzo di don Rodrigo dicendo che era isolato e sulla sommit\xE0 di un monte, per indicare la sua potenza. Ai piedi del monte giaceva un mucchietto di casupole abitate dai contadini di don Rodrigo.</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">\u2013 Abbandonarvi! \u2013 rispose. \u2013 E con che faccia potrei io chieder a Dio qualcosa per me, quando v&#39;avessi abbandonata? voi in questo stato! voi, ch&#39;Egli mi confida! Non vi perdete d&#39;animo: Egli v&#39;assister\xE0: Egli vede tutto: Egli pu\xF2 servirsi anche d&#39;un uomo da nulla come son io, per confondere un... Vediamo, pensiamo quel che si possa fare </code>`}<!-- HTML_TAG_END --></pre>
<p>\xC8 la parte religiosa del componimento, presente in tutto il romanzo.</p>
<h2>Capitolo 6:</h2>
<p>Padre Cristoforo vuole aiutare Renzo e Lucia a sposarsi. Organizza un colloquio con don Rodrigo, ma non riesce a cambiare la sua decisione. Con l\u2019aiuto di alcuni paesani organizzano un <code>matrimonio a sorpresa</code>, ma non riesce. </p>
<p>Nel romanzo gli <code>opressi vengono chiamati Umili</code>, coloro che hanno una condizione economica normale o bassa. Tendenzialmente sono le persone pi\xF9 oneste, coloro che credono in Dio. <code>Agli umili e ai poveri Dio affida la trasmissione del suo messaggio</code>.</p>
<h2>Capitolo 8:</h2>
<p>Renzo e Lucia <code>lasciano il paese</code>.</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">Addio, monti sorgenti dall&#39;acque, ed elevati al cielo; cime inuguali, note a chi \xE8 cresciuto tra voi, e impresse nella sua mente, non meno che lo sia l&#39;aspetto de&#39; suoi pi\xF9 familiari; torrenti, de&#39; quali distingue lo scroscio, come il suono delle voci domestiche; ville sparse e biancheggianti sul pend\xECo, come branchi di pecore pascenti; addio! Quanto \xE8 tristo il passo di chi, cresciuto tra voi, se ne allontana! Alla fantasia di quello stesso che se ne parte volontariamente, tratto dalla speranza di fare altrove fortuna.</code>`}<!-- HTML_TAG_END --></pre>
<p>\xC8 diverso andarsene da un posto perch\xE8 obbligati che volontariamente. </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">A chi non aveva mai spinto al di l\xE0 di quelli neppure un desiderio fuggitivo, chi aveva composti in essi tutti i disegni dell&#39;avvenire, e n&#39;\xE8 sbalzato lontano, da una forza perversa! 
[...]
Chi, staccato a un tempo dalle pi\xF9 care abitudini, e disturbato nelle pi\xF9 care speranze, lascia que&#39; monti, per avviarsi in traccia di sconosciuti che non ha mai desiderato di conoscere, e non pu\xF2 con l&#39;immaginazione arrivare a un momento stabilito per il ritorno!
</code>`}<!-- HTML_TAG_END --></pre>
<p>\xC8 difficile per chi si \xE8 sempre immaginato in quel posto dover andar via per una forza esterna.</p>
<p>Renzo, Lucia e Agnese vanno in barca verso la sponda destra dell\u2019Adda.</p>
<h2>Capitolo 9:</h2>
<p>I tre arrivano a Monza. La mittina sucessiva Renzo parte e lascia le due a Monza, come indicato da Cristoforo. </p>
<p>Viene desrcitta la <strong>Monaca di Monza</strong>, personaggio storico modificato da Manzoni. viene anche definita <code>signora e infelice</code>. Ha molte contraddizioni, nell\u2019aspetto fisico e personale, evidenziate dalla narrazione di Manzoni. \xC8 stata mandata in convento dal padre, per ottenere tutta l\u2019eredit\xE0 della madre morta. </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">Il suo aspetto, che poteva dimostrar venticinque anni, faceva a prima vista un&#39;impressione di bellezza, ma d&#39;una bellezza sbattuta, sfiorita e, direi quasi, scomposta.
[...]
Un velo nero, sospeso e stirato orizzontalmente sulla testa, cadeva dalle due parti, discosto alquanto dal viso; sotto il velo, una bianchissima benda di lino cingeva, fino al mezzo, una fronte di diversa, ma non d&#39;inferiore bianchezza;  
un&#39;altra benda a pieghe circondava il viso, e terminava sotto il mento in un soggolo, che si stendeva alquanto sul petto, a coprire lo scollo d&#39;un nero saio</code>`}<!-- HTML_TAG_END --></pre>
<p>Glio occhi da una parte manifestavano affetto e piet\xE0, dall\u2019altra severit\xE0, odio. A volte prestavano attenzione alle cose, altre volte erano abbassati. </p>
<h2>Capitolo 10:</h2>
<p>\xC8 una descrizione della religione in manzoni.</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">\xC8 una delle facolt\xE0 singolari e incomunicabili della religione cristiana, il poter indirizzare e consolare chiunque, in qualsivoglia congiuntura, a qualsivoglia termine, ricorra ad essa.</code>`}<!-- HTML_TAG_END --></pre>
<p>La religione cristiana ha la caratteristica di consolare gli uomini in ogno momento, dare a loro un senso e un aiuto per consolare la tristezza del mondo.</p>
<p>Lo scopo dela religione \xE8 aiutare gli uomini, dare un senso alla vita e dare spiegazioni. Questo per\xF2 non vale per Gertrude, perch\xE8 era stata obbligata dal padre ad entrare nell\u2019ordine. </p>
<h2>Capitolo 11:</h2>
<p>Discorso sull\u2019amicizia</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">Una delle pi\xF9 gran consolazioni di questa vita \xE8 l&#39;amicizia; e una delle consolazioni dell&#39;amicizia \xE8 quell&#39;avere a cui confidare un segreto. Ora, gli amici non sono a due a due, come gli sposi; ognuno, generalmente parlando, ne ha pi\xF9 d&#39;uno: il che forma una catena, di cui nessuno potrebbe trovar la fine. Quando dunque un amico si procura quella consolazione di deporre un segreto nel seno d&#39;un altro, d\xE0 a costui la voglia di procurarsi la stessa consolazione anche lui. Lo prega, \xE8 vero, di non dir nulla a nessuno; e una tal condizione, chi la prendesse nel senso rigoroso delle parole, troncherebbe immediatamente il corso delle consolazioni. Ma la pratica generale ha voluto che obblighi soltanto a non confidare il segreto, se non a chi sia un amico ugualmente fidato, e imponendogli la stessa condizione. Cos\xEC, d&#39;amico fidato in amico fidato, il segreto gira e gira per quell&#39;immensa catena, tanto che arriva all&#39;orecchio di colui o di coloro a cui il primo che ha parlato intendeva appunto di non lasciarlo arrivar mai.</code>`}<!-- HTML_TAG_END --></pre>
<p>Manzoni dice che Renzo sta camminando da Monza a Milano, dove vede dei tumulti. Era la gente del popolo che si lamentava per il prezzo del pane troppo alto, per la carestia e la dominazione spagnola non aveva interesse ad occuparsi degli umili. Manzoni \xE8 contrario alle rivoluzioni del popolo, perch\xE8 le trova assolutamente pericolose e insensate. il singolo che si ribella \xE8 apprezzabile, la massa \xE8 irrazionale. </p>
<h2>Capitolo 28:</h2>
<p>Si inizia a parlare di alcune questioni che sono sucesse in questi anni a Milano: la <code>carestia</code>, la <code>guerra tra il ducato di Mantova e il Monferrato</code> e al fenomeno della <code>peste</code>(<code>1630</code>).</p>
<h2>Capitolo 29-31:</h2>
<p>Si parla della <code>peste a Milano</code>.</p>
<h2>Capitolo 38:</h2>
<p>Renzo e Lucia si sono sposati, hanno dei figli (la prima si chiama Maria). </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">[...]
La quale, se non v&#39;\xE8 dispiaciuta affatto, vogliatene
bene a chi l&#39;ha scritta, e anche un pochino a chi l&#39;ha raccomodata. Ma se in vece fossimo riusciti ad annoiarvi,
credete che non s&#39;\xE8 fatto apposta.</code>`}<!-- HTML_TAG_END --></pre>`;
});
var IPromessiSposi = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": I_promessi_sposi
});
var Luigi_Pirandello = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Caratteri generali:</h2>
<p>\xC8 un autore siciliano che nasce in provincia di Agrigento, applica tutte le teorie del romanzo del Novecento. Mentre Verga non si pu\xF2 comprendere senza la Sicilia, l\u2019ambientazione delle opere \xE8 il mondo, non la Sicilia, parla infatti di <code>temi slegati da quel contesto</code>. Proveniva da una ricca famiglia borghese, aveva ereditato una zolfara dai genitori. Il padre l\u2019aveva inscritto ad un istituto tecnico commerciale, Pirandello se ne va, andr\xE0 al liceo Classico e poi studier\xE0 Lettere a Roma. Litiga con il professore e <code>si laurea in Germania</code>, a Bonn.</p>
<p>Si trasferisce a Roma e si sposa con una siciliana, <code>Antonietta Portolano</code>, figlia di un ricco commerciante di zolfo. Avr\xE0 tre figli, nel 1903 a causa di un\u2019inondazione crolla una miniera di zolfo, che mette in crisi le finanze della famiglia. La moglie aveva paura di rimanere senza patrimonio, da quel momento inizia per la moglie una <code>depressione e malattia mentale</code> che la porter\xE0 al ricovero in una casa di cura dalla quale non uscir\xE0 pi\xF9. La malattia della moglie \xE8 uno dei temi fondamentali delle opere di Pirandello.</p>
<p>Pirandello vive negli anni del fascismo, si iscrive al partito poco dopo l\u2019uccisione di Matteotti. \xC8 convinto che il partito fascista sia utile e necessario per l\u2019Italia del dopoguerra. Oltre ai romanzi e alle novelle crea una <code>compagnia teatrale</code>, sostenuta in parte dal partito fascista, nella quale chiama <code>Marta Abba</code>, tra le pi\xF9 importanti attrici dell\u2019epoca. <code>Muore a Roma nel 1936</code>, ottiene il premio Nobel per la letteratura.</p>
<h2>Opere:</h2>
<p>Scrive:</p>
<ul><li><strong>Umorismo</strong>, un saggio fondamentale nel quale sono contenuti tutti i temi della sua letteratura.</li>
<li><strong>Novelle per un anno</strong>, ne voleva scrivere una per ogni giorno dell\u2019anno, in realt\xE0 sono solo 243</li>
<li><strong>Romanzi</strong>, tra cui <code>Ei f\xF9 Mattia Pascal</code> e <code>Uno, nessuno, centomila</code></li>
<li><strong>Opere tetrali</strong>, sono scritte come dialoghi, possono essere sia lette che recitate. Tra queste ci sono <code>sei personaggi in cerca di autore</code> e <code>Enrico IV</code>.</li></ul>
<p>\xC8 l\u2019autore che meglio di altri descrive nelle sue opere le <code>caratteristiche della societ\xE0 di massa</code>, al centro della sua analisi c\u2019\xE8 la discussione sul contrasto tra <code>apparenza e sostanza</code>, tra l\u2019essere e l\u2019apparire, tra la persona e il personaggio, tra l\u2019identit\xE0 e la maschera etc. dice quindi \u201Cnella societ\xE0 di massa conti se sei omologato\u201D. Pirandello dice che \u201Cper essere qualcuno devi indossare una <code>maschera</code>\u201D. Cambiando in continuazione maschera perdiamo la nostra identit\xE0. Pirandello spiega quest\u2019analisi indirettamente attraverso la tecnica narrativa dell\u2019<code>umorismo</code>.</p>
<h2>Umorismo e comicit\xE0:</h2>
<p>\xC8 una modalit\xE0 di scomposizione e ricomposizione della realt\xE0 attraverso la <code>riflessione</code>. \xC8 una tecnica sia narrativa, sia di analisi. Si prende la realt\xE0, la si scompone, si trova un elemento non conforme e la si ricompone per far ridere. L\u2019umorismo \xE8 il <code>sentimento del contrario</code>, sento che c\u2019\xE8 un comportamento contrario da ci\xF2 che dovrebbe essere.</p>
<p>La comicit\xE0 \xE8 l\u2019<code>avvertimento del contrario</code>, si fanno delle azioni contrarie a quello che dovrebbero fare le persone normali.</p>
<p>Avvertire indica una sensazione di distacco, sentire \xE8 pi\xF9 elaborato. Il passaggio da comicit\xE0 ad umorismo avviene attraverso la <code>riflessione</code>.</p>
<blockquote><p><strong>L\u2019esempio di Pirandello</strong>: Io vedo una donna di una certa et\xE0. \xC8 vestita in un modo contrario rispetto a come dovrebbe essere una donna della sua et\xE0, ha le gonne corte, i capelli colorati, \xE8 truccata e vestita con abiti da giovane. Quando la vedo rido (comico, avverto il contrario). Se rifletto, vedo con attenzione la signora, e conosco delle sue cose capisco che vuole nascondere rughe, capelli bianchi, essere appariscente per attirare l\u2019attenzione del marito. Ora rido ma comprendo le ragioni (Umorismo).</p></blockquote>
<p>Secondo Pirandello la vita \xE8 il <code>prodotto di una continua trasformazione</code>, anche l\u2019uomo si trasforma in continuazione attraverso l\u2019utilizzo della <code>maschera</code>. Nella societ\xE0 di Pirandello non si pu\xF2 vivere senza la maschera, chi prova a vivere senza poco dopo la riprendono, sono considerati pazzi. La societ\xE0 di Pirandello impone l\u2019uso della maschera per avere delle relazioni sociali, una societ\xE0 basata sulla forma e sulla maschere \xE8 apparente e falsificata. Si deve leggere la realt\xE0 quindi attraverso il <code>relativismo conoscitivo</code>, quindi si conoscono cose, persone e realt\xE0 in modo relativo, non si possono definire le persone, ci sono tanti fattori che non si possono conoscere.</p>
<p>L\u2019etica e la morale sono degli obblighi assurdi per Pirandello, le regole non hanno ragione di essere dato che tutto \xE8 relativo. Dice, <code>la prima struttura insensata da annientare \xE8 la famiglia</code>, condiziona le idee e impone regole ed obblighi.</p>
<h2>Novelle per un anno:</h2>
<p>Sono un\u2019opera che ha coinvolto la sua intera vita, dovevano essere 24 libri, in realt\xE0 ne ha scritte 243 in 15 volumi. Le novelle sintetizzano i temi e la visione di Pirandello.</p>
<h3>Il treno ha fischiato:</h3>
<p>Il testo racconta la storia di <code>Belluca</code>, la novella inizia quando i fatti somo gi\xE0 accaduti. Dice \u201D<em>farneticava, aveva la febbre e tutti i suoi compagni d\u2019ufficio che erano andati a trovarlo all\u2019ospizio avevano capito che stava male. I medici dicevano che era encefalite, coloro che erano andati a trovarlo si chiedevano \u201CMorir\xE0?\u201D a nessno veniva in mente le motivazioni che avevano portato Belluca a farneticare, ma era successo un fatto. La sera prima Belluca si era ribellato al suo capoufficio, gli si era quasi scagnato addosso, ma lui era un uomo tranquillo, sottomesso, nessuno avrebbe mai pensato ad un comportamento del genere. Di lavoro faceva il bilancio, scriveva le note, eseguiva sempre gli ordini in silenzio. Quando qualcuno gli diceva parole stava zitto perch\xE8 era abbituato da anni e continue bastonate a sopportare. Gi\xE0 quella mattina in ufficio si era presentato con un\u2019aria insolita, sembrava che guardasse le cose in un altro modo, sorridente. Il capo ufficio lo squote, ma lui risponde \u201Cil treno ha fischiato\u201D. Il capo si arrabbia, quelli che lavorano escono ridendo e lo considerano pazzo. Intanto era abbastanza tranquillo, imitava il fischio del treno. Immaginava le montagne, il percorso del treno, e nella sua immaginazione si sentiva tranquillo e meno alienato del fare tutti i giorni le stesse cose. Bellucca non \xE8 impazzito, qualcosa gli \xE8 accaduto. Spiega, Lui vive con tre donne che vogliono essere servite, ma \xE8 talmente compresso dai doveri che il fischio del treno lo risveglia, si rende conto che il mondo esiste. Nella conclusione, dopo aver sentito il fischio, torna ad essere quello che era prima, nessuno pu\xF2 vivere fuori dalle convinzioni sociali, famiglia e contesto. Bellucca vuole essere quello che \xE8 e gli dicono che \xE8 matto. Non esiste la possibilit\xE0 di avere una propria identit\xE0 nella societ\xE0. Lui torna ad essere quello che era, ma vive meglio, sa che per un momento pu\xF2 recuperare la sua identit\xE0.</em>\u201D</p>
<h2>Il fu Mattia Pascal:</h2>
<p>\xC8 un romanzo pubblicato nel 1904, non ha una struttura lineare, soprattutto nell\u2019introduzione, e premesse. La storia segue il percorso di Mattia Pascal, che diventer\xE0 Adriano Meis, e poi \u201Cil fu Mattia Pascal\u201D. \xC8 la storia dell\u2019 <code>identit\xE0 sospesa</code> di un uomo e della sua evoluzione,</p>
<p>\u2026 dopo aver cambiato vita va a Roma e si innamora della figlia del proprietario della locanda. La vuole sposare, ma nel contesto sociale non \xE8 nessuno, perch\xE8 non ha documenti. Gli uomini che non rispettano le convenzioni socili non hanno identit\xE0. Adriano Meis ritorna nel suo paese e decide che vuole tornare ad essere Mattia Pascal. Questo per\xF2 non \xE8 possibile, va al cimitero e vede la sua tomba, sua moglie si \xE8 risposata, quindi non gli rimane che scrivere le sue memorie chiuso in una biblioteca in Liguria, fuori dalla realt\xE0.</p>
<h3>Trama:</h3>
<p>Era un bibliotecatrio, viveva con la moglie e la sposa, aveva due gemelli ma sono morti, voeva andare in america ma quando arriva a Montecarlo vince una somma di denaro al gioco, e quando vuole tornare in Liguria legge dal giornale della sua morta, quindi decide di cambiare vita.</p>
<h3>Componimento:</h3>
<p>Il romanzo ha parti descrittive e parti filosofiche, \xE8 una <code>narrazione complessa</code>. L\u2019idea di scrivere questo romanzo gli \xE8 venuta in una biblioteca dove lavorava, con l\u2019amico <code>Don Eligio</code>.</p>
<p>Dopo questa parte generale dice: <br>\u201D<em>gli uomini sono delle trottole invisibili illuminate da un filo di sole, stanno in una terra che \xE8 come (rispetto all\u2019universo) un granello di sabbia che gira senza sosta, senza sapere perch\xE8 e senza arrivare ad un destino. In questa terra a volte fa caldo, a volte freddo, e per non farci annoiare gira continuamente. <code>Copernico</code></em> <strong>*</strong> <em>ha rovinato l\u2019umanit\xE0. Noi dobbiamo adattarci all\u2019idea che siamo piccoli, che per l\u2019universo non valiamo niente e che le nostre invenzioni e scoperte sono nulla in confronto alle forze pi\xF9 grandi. Dimentichiamo spesso che siamo atomi infinitesimali e per questo spesso ci facciamo la guerra anche per un piccolo pezzo di terra. Se ci ricordassimo che siamo una piccola entit\xE0, vivremo nel mondo in modo diverso.</em>\u201C.</p>
<blockquote><p><strong>Copernico</strong> viene citato perch\xE8 \xE8 stato il primo a mettere in discussione il sistema geocentrico. Questo prevedeva che tutto girasse intorno alla terra, e dipendesse da essa. Quello eliocentrico, invece, prevedeva che la terra fosse solo uno dei tanti sistemi in un contesto infinitamente grande.</p></blockquote>
<h3>Capitolo 8:</h3>
<p>\xC8 un capitolo importante, Pirandello fa una riflessione, Mattia Pascal \xE8 Adriano Meis e scrive:</p>
<p><em>Io sono Adriano Meis ma non avrei mai potuto avere un amico, Amicizia vuol dire confidenza, come avrei potuto confidare un segreto della mia vita senza nome e senza passato? Avrei potuto avere solo <code>conversazioni superficiali</code>, potr\xF2 vivere solo con me e di me. Siamo giusti, io mi ero conciato in quel modo per gli altri, non per me, ora mi chiamo Adriano Meis, Mattia Pascal era morto.</em></p>
<p><em>La vita a considerarla cos\xEC da spettatore estraneo mi pareva senza senso e senza scopo</em></p>
<p>Analisi sulla <code>societ\xE0 di massa</code>, sottolinea l\u2019<code>ambivalenza del progresso</code>:<br> <em>Perch\xE8 c\u2019\xE8 questo stordimento di macchine? e che far\xE0 l\u2019uomo quando le macchine faranno tutto? Si accorger\xE0 allora che il progresso non ha nulla a che fare con la felicit\xE0? Di tutte le invenzioni che fa l\u2019umanit\xE0, che gioia proviamo noi ammirandole? Un giorno ho fatto il giro di mezza Milano con il tram elettrico, l\u2019uomo diceva che era una bella invenzione, ma non si era accorto che, a causa dei soldi spesi nel tram e nella bolletta della luce spendeva tutto lo stipendio, eppure crediamo di essere felici, ed avere un\u2019esistenza pi\xF9 comoda.</em></p>
<h2>Il lanternino:</h2>
<p>Mattia Pascal si \xE8 operato ad un occhio e deve stare 40 giorni al buio. Durante questi giorni avvia un discorso filosofico con <code>Anselmo Palearmi</code>, il padrone dell\u2019albergo in cui vive a Roma:</p>
<p><em>Il signor Anselmo mi dimostrava che non siamo come l\u2019albero che vive e non sa di vivere</em> <strong>*</strong> <em>albero a cui la terra, pioggia, sole e vento non cambia nulla. Noi invece siamo consapevoli che stiamo vivendo, abbiamo il \`sentimento della vita.  Nel mondo ci sono tanti lanternini accesi, alcuni attraverso la lanterna vedono pi\xF9 o meno luce, chi ha il lanternino acceso o spento. Quando la persona muore, il lanternino \xE8 spento. Ognuno ha la sua consapevolezza di vita</em></p>
<blockquote><p><strong>Non sa di vivere</strong> non ha la consapevolezza di essere vivo. La vita, o consapevolezza di vivere, \xE8 uguale ad un lanternino.<br> 1 uomo = 1 vita = 1 lanterna</p></blockquote>
<p>Quando l\u2019uomo muore il lanternino si spegne.</p>
<p><em>A me sembra che in certe et\xE0 della storia, come in certe stagioni della vita individuale, potrebbe essere che i lanternini assumano un colore rispetto ad un\u2019altro. <code>L&#39;unione dei lanternini da origine a dei lanternoni</code>, dove prevalgono alcuni colori. Se prevale il rosso potremmo dire che prevale l\u2019idea della virt\xF9 pagana, se prevale il viola prevale la virt\xF9 cristiana, le idee prevalgono e si diffondono perch\xE8 sono prodotto di <code>sentimenti collettivi</code>. Se il sentimento collettivo si divide, la fiamma dell\u2019idea diventa pi\xF9 debole, come avviene nei periodi di transizione, nel quale non ci sono tendenze dominanti.</em></p>
<p><em>Ci sono perodi della storia nei quali non c\u2019\xE8 pi\xF9 luce, si crea un <code>buio improvviso</code> (non ci sono guide), le lanterne vanno avanti e indietro, ma nessuno trova la via, si urtano, si aggregano ma non si mettono d\u2019accordo, si sparpagliano, sono formiche che non trovano il formicaio.</em></p>
<p>Se non ci sono idee dominanti, molte persone vanno in chiesa, perch\xE8 si fidano della religione.</p>
<p><em>Li trovano l\u2019alimento per la vita (l\u2019olio della lampada). Poveri vecchi a cui ment\xEC la vita e che vanno nel buio della vita\u2026 </em></p>
<p>Alla fine dice che \xE8 tornato, nessuno lo riconosceva eppure dice di esserer come una volta. Vedendo alcuni lineamenti avrebbero potuto pensare alla somiglianza come Mattia. Nessuno lo riconosceva, perch\xE8 nessuno pensava pi\xF9 a lui.</p>
<h2>Uno, nessuno e centomila</h2>
<p>Racconta la storia di <code>Vitangelo Moscarda</code>, un borghese. Un giorno sua moglie lo guarda e dice che il suo naso pendeva a destra. Lui ci rimane male e si interroga, l\u2019aveva destabilizzato e non si riconosceva pi\xF9. Decide di cambiare vita, rinunciare alla vita e all\u2019azione. </p>
<p>Il titolo sintetizza la filosofia di Pirandello, secondo cui <code>l&#39;uomo \xE8 uno</code>, ha un\u2019identit\xE0, ha <code>centomila immagini e maschere</code> che cambia in relazione al contesto, ma finch\xE8 ogni volta deve indossare una maschera <code>alla fine non \xE8 nessuno</code>, non sa neppure lui qual \xE8 la sua vera identit\xE0.</p>`;
});
var LuigiPirandello = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Luigi_Pirandello
});
var Giovanni_Verga = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Caratteri generai:</h2>
<p>\xC8 l\u2019autore per definizione del verismo. Nasce a Catania nel <code>1840</code>, appartiene ad una famiglia benestante. \xC8 fortemente legato alla Sicilia, sua patria e paesaggio dei suoi componimenti. Nel <code>1872</code> va a Milano, dove aderisce al verismo. Passer\xE0 poi per Parigi e Firenze, per tornare a Catania negli ultimi trent\u2019anni di vita.</p>
<h2>Opere:</h2>
<p>Si dividono in <code>pre-veriste</code> e <code>veriste</code>, separate da \u201CNedda\u201D, del <code>1874</code>.</p>
<h3>Opere pre veriste:</h3>
<p>Sono tutti romanzi, con una <code>dimensione romantica</code>, i protagonisti sono <code>borghesi</code>, ci son <code>storie di sentimenti</code>, l\u2019ambiente di riferimento \xE8 <code>Firenze</code>, la narrazione viene <code>commentata</code> e gli aspetti negativi delle narrazioni dipendono da <code>delusioni personali</code>.</p>
<p>Le opere in questione sono:</p>
<ul><li><code>Eva</code></li>
<li><code>Eros</code></li>
<li><code>Tigre reale</code></li>
<li><code>Storia di una capinera</code></li></ul>
<h3>Opere veriste:</h3>
<p>Questi componimenti sono veristi perch\xE8 i protagonisti sono gli <code>umili</code>, a narrazione si fonda in <code>Sicilia</code>, il narratore <code>non commenta</code> la storia e gli aspetti negativi della narrazione dipendono da una <code>legge fatale</code>. </p>
<table><thead><tr><th>Nome</th>
<th>Tipologia</th>
<th>Anno</th></tr></thead>
<tbody><tr><td><code>Nedda</code></td>
<td>Novella</td>
<td>1874</td></tr>
<tr><td><code>Vita dei campi</code></td>
<td>Novella</td>
<td>1880</td></tr>
<tr><td><code>I Malavoglia</code></td>
<td>Romanzo</td>
<td>1881</td></tr>
<tr><td><code>Novelle rusticane</code></td>
<td>Novella</td>
<td>1882</td></tr>
<tr><td><code>Mastro don Gesualdo</code></td>
<td>Romanzo</td>
<td>1889</td></tr></tbody></table>
<blockquote><p><strong>Nedda</strong> \xE8 la prima novella con caratteri veristi scritta da Verga. \xC8 ambientata in Sicilia, \xE8 la storia di una donna povera che \xE8 costretta a raccogliere olive. La madre \xE8 malata, e anche il fidanzato (malaria). Ha un figlio prima del matrimonio, quindi viene derisa dall\u2019ambiente siciliano, e considerata amorale. Il fidanzato muore prima della nascita del figlio, potando un ulivo. Quando nascer\xE0 morir\xE0 anche il figlio. Verga evidenzia che <code>il destino umano \xE8 il prodotto delle forze naturali</code>, di cui non abbiamo controllo. Svevo dice \u201Cper fortuna l\u2019uomo si distrae facilmente\u201D, indicando che non ci pensa in continuazione e va avanti con la sua vita.
Il componimento \xE8 romantico perch\xE8 gli aspetti negativi hanno come motivazione le <code>delusioni personali</code>, e il racconto viene <code>commentato</code>. \xC8  verista perch\xE8 i protagonisti sono gli <code>umili</code>, e l\u2019ambiente \xE8 la <code>Sicilia</code>. </p></blockquote>
<h3>Il ciclo dei vinti:</h3>
<p>\xC8 un ciclo di 5 romanzi volto a descrivere come <code>l&#39;uomo di ogni classe sociale sia un vinto</code>. Parla di questo ciclo in una lettera ad un amico, dove spiega le sue intenzioni, inizialmente era intitolato <code>la marea</code>.
Verga si ferma durante la scriuttura del terzo libro, in quanto narrava una realt\xE0 semp0re pi\xF9 simile alla sua, ed era difficile garantire l\u2019impersonalit\xE0 dell\u2019arte.</p>
<p>I romanzi della Marea dovevano essere:</p>
<ul><li><code>Padron &#39;Ntoni</code></li>
<li><code>Mastro on Gesualdo</code></li>
<li><code>La Duchessa di Leyra</code></li>
<li><code>L&#39;onorevole Scipioni</code></li>
<li><code>l&#39;uomo di lusso</code></li></ul>
<h2>I temi e la tecnica:</h2>
<p>Verga ha una <strong>visione pessimista e di sfiducia</strong> nel progresso umano: considera il processo centrale nella sua dimensione generale, ma andalizzando le dinamiche particolari esso manifesta i suoi limiti. Ha una <code>visione pessimista</code> della vita, perch\xE8 si fonda unicamente sui fatti.</p>
<p>La vita dell\u2019uomo \xE8 una <strong>lotta per la sopravvivenza</strong>, dove l\u2019uomo deve adeguarsi e lottare altrimenti \u201D<code>il mondo come un pesce vorace lo inghiotte</code>\u201C.</p>
<p><strong>La famiglia</strong> \xE8 un aspetto fondamentale in cui crede Verga, intesa come luogo di riparo e salvezza dal mondo. Lui la consider\xE0 per\xF2 come legame economico, che ti garantisce un <code>benessere economico e sociale</code>. </p>
<p>I <strong>beni materiali</strong> sono un concetto fondamentali nelle opere di Verga, definiti come <code>roba</code>. nelle opere \u201CNovelle rusticane\u201D e \u201CMastro Don Gesualdo\u201D sono il tema domanante.</p>
<p>L\u2019<strong>idea di vinto</strong> e il concetto di <strong>sovrastruttura</strong>: usa come protagonisti delle opere i vinti, o il ceto basso, in quanto negli umili \xE8 pi\xF9 facile capire le leggi che governano la realt\xE0. Nei ricchi sono presenti le sovrastrutture (<code>soldi, cultura, immagini sociali, ...</code>) che impediscono di comprendere l\u2019uomo.
Manzoni segue l\u2019idea religiosa, secondo la quale gli umili sono perdenti, ma se si fidano di Dio a loro verr\xE0 affidato il regno dei cieli.
Verga ha come obbiettivo quello di mostrare come <code>l&#39;uomo sia un vinto</code>, dalla classe sociale pi\xF9 bassa alla pi\xF9 alta. Vuole scrivere il <code>ciclo dei vinti</code>, ma all\u2019inizio del terzo libro si blocca, in quanto lo sente troppo vicino a lui e non riesce a garantire l\u2019impersonalit\xE0 dell\u2019arte. </p>
<h2>Tecniche narrative:</h2>
<p>Sono le tecniche che usa Verga per rappresentare il mondo che vuole raccontare:</p>
<ul><li><p><strong>Eclissi dell\u2019autore:</strong> <code>L&#39;autore non esprime giudizi</code>, parla e pensa attraverso i personaggi. \xC8 caratterizzata dall\u2019uso della terza persona, il narratore \xE8 esterno quindi <code>l&#39;opera si fa da s\xE9.</code></p></li>
<li><p><strong>Regressione:</strong> l\u2019autore regredisce al livello dei personaggi. usa la <code>lingua italiana</code> con la <code>sintassi del dialetto</code>.</p></li>
<li><p><strong>Straniamento:</strong> C\u2019\xE8 una <code>divergenza tra il punto di vista dell&#39;autore e del personaggio</code>. L\u2019autore si stranea non commentando la vicienda, quindi ha un punto di vista diverso dal protagonista.</p></li>
<li><p><strong>Discorso indiretto libero:</strong> \xC8 ancora pi\xF9 libero rispetto al discorso diretto. </p></li>
<li><p><strong>Uso dei proverbi e modi di dire:</strong> <code>Pi\xF9 una societ\xE0 \xE8 arretrata, pi\xF9 \xE8 immobile</code>. Verga utilizza quindi molti proverbi e modi di dire perch\xE8 non cambiano mai, come una societ\xE0 immobile.</p></li></ul>
<h2>Vita dei campi:</h2>
<p>\xC8 una raccolta di novelle <code>ambientate in Sicilia</code> pubblicata nel <code>1860</code>. Il tema fondamentale \xE8 la <code>religione della famiglia</code>, una sorta di religione laica che fa da <code>riparo dal mondo </code>.</p>
<p><strong>Fantasticheria</strong> \xC8 una novella, ma affronta temi e personaggi che verranno ripresi in \u201Ci Malavoglia\u201D. Affronta il concetto dell\u2019<code>ideale dell&#39;ostrica</code>. </p>
<p>Parla di una signora borghese che passa in treno vicino ad Aci Trezza. Inizialmete pensa sia un bel paese, ma man mano che si addentra cambia idea, fino a voler partire dopo tre giorni. </p>
<blockquote><p><strong>Ideale dell\u2019ostrica:</strong> definisce il concetto di adattamento all\u2019ambiente, se l\u2019ostrica si stacca dallo scoglio non produce pi\xF9 il mollusco. Gli uomini devono essere attaccati al loro ambiente e adattarsi ad esso rassegnandosi. <code>Nel caso della povera gente \xE8 stato il destino a farli cadere la, mentre in altre parti seminava principi e duchesse.</code></p></blockquote>
<h2>I malavoglia:</h2>
<h3>Caratteri generali:</h3>
<p>\xC8 il primo <code>romanzo</code> di Verga, iviso in <code>15 capitoli</code> e pubblicato nel <code>1881</code>.
Parla di una famiglia di pescatori di Aci Trezza, Vivevano nella <code>casa del nespolo</code> e il vero cognome \xE8 <code>Toscano</code>. Avevano cos\xEC tanta volgia di migliorare e arricchirsi che vengono chiamati ironicamente \u201CMalavoglia\u201D. Verga sottolinea il concetto per cui avevano cos\xEC tanta voglia di migliorarsi da diventare la loro rovina, non adattadosi all\u2019ambiente.
la famiglia era composta da:</p>
<p>La famiglia era composta da: <br>
<code>Padron &#39;Ntoni</code>, il figlio <code>Bastianazzo</code> con la moglie detta <code>la Longa</code> e i nipoti: <code>&#39;Ntoni</code>, <code>Mena</code>, <code>Luca</code>, <code>Alessi</code> e <code>Lia</code>.
Il romanzo inizia nel <code>1863</code>, e dura poco pi\xF9 di 10 anni. \xC8 presente una forte componente storica:</p>
<ul><li><code>battaglia di Lissa</code> nella terza guerra di indipendenza(1866).</li>
<li>questione delle <code>tasse e impatto in sicilia</code>.</li>
<li>la <code>leva obbligatoria</code></li>
<li>il <code>sistema clientelare</code> (usura).</li>
<li>il <code>contrabbando</code>.</li>
<li>il <code>colera</code> che in quegli anni colp\xEC il sud Italia.</li></ul>
<h3>Storia:</h3>
<p>\u2018Notni deve fare la leva militare (5 anni), quindi il nonno chiede alle autorit\xE0 di escluderlo. La richiesta non viene accettata, quindi insieme a Bastianazzo decidono di comprare dei <code>lupini da zio Crocifisso</code>, dando come garanzia la casa. Andando nel paese vicino (Riposto) per vendere i lupini la barca <code>provvidenza</code> affonda, facendo morire Bastianazzo. Sono stati quindi puniti dal destino, perch\xE8 volevano migliorare la loro vita. <br>
La famiglia quindi si impoverisce, e prende diverse strade:</p>
<ul><li>Luca si arruola nella marina e muore</li>
<li>Lia va a prostituirsi</li>
<li>Mena rimane nella casa, ma nessuno la sposa</li>
<li>\u2018Ntoni se ne va in cerca di fortuna, ma finisce in galera per contrabbando</li>
<li>La Longa muore di colera</li>
<li>Alessi rimane nel posto</li>
<li>Padron \u2018Ntoni \xE8 costretto a morire in ospedale</li></ul>
<p>Alessi insieme alla moglie e Mena riescono a reimpossessarsi della casa, valorizzando il nome del malavoglia, in quanto non hanno mai lasciato  il posto e si sono adattati all\u2019ambiente.</p>
<p>I malavogliasi concludono con la figura di <code>Rocco Spatu</code>. \xC8 un finale particolare, perch\xE8 Verga mette in relazione \u2018Ntoni e Rocco. I due amici erano assolutamente contro l\u2019ideale dell\u2019ostrica. I due volevano abbandonare Aci Trezza. Mentre \u2018Ntoni se ne \xE8 andato, rocco pur ribellandosi, \xE8 sempre stato ad Acitrezza, e si \xE8 adattato (in modo diverso da AlessI). Il finale dice che <code>ci sono diverse modalit\xE0 di adattamento</code>, alcune pi\xF9 oneste (come Alessi), altre pi\xF9 disoneste (Rocco). \u2018Ntoni non ha rispettato l\u2019ideale dell\u2019ostrica, come Bastianazzo, e l\u2019ambiente lo ha distrutto.</p>
<h2>Novelle rusticane:</h2>
<p>Sono una serie di <code>novelle ambientate in Sicilia</code>, attorno al tema della <strong>roba</strong>, ovvero i <code>beni materiali</code> e la <code>volont\xE0 di arricchirsi</code>. Verga dice che dal pi\xF9 povero al pi\xF9 ricco tutti sono destinati alla morte, e spiega il rapporto tra l\u2019<code>avere le cose e il modo in cui si vive</code>.
Conclude dicendo:</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">Cos\xEC quando era vicino alla morte, quando qualcuno gli disse che doveva pensare all&#39;anima, non alla roba, usci\xEC nel cortile e con passo incerto, e con il bastone ammazzava le anatre, e urlava &quot;roba mia vieni con me&quot;</code>`}<!-- HTML_TAG_END --></pre>
<h2>Mastro Don Gesualdo:</h2>
<p>\xC8 un <code>romanzo a protagonista</code> (contrario di corale) pubblicato nel <code>1889</code>. \xC8 incentrato sulla figura di Mastro Don Gesualdo. In questo romanzo il pessismismo \xE8 ancora pi\xF9 accentuato, nessuno ha uno spiraglio di possibilit\xE0. La storia \xE8 ambientata a <code>Vizzini</code>, un paese nell\u2019entroterra siciliano nella zona di Catania. Il protagonista \xE8 Gesualdo Motta, un muratore che si \xE8 arricchito grazie al suo lavoro.
Anche se era ricco <code>non aveva alcun peso sociale</code>, quindi decisa Bianca Trao, una donna di una famiglia nobile ormai decaduta. Il suo ambiente (i muratori) non lo guardano pi\xF9, perch\xE8 ha sposato un nobile, e i nobili non lo accettano in quanto muratore.
Sua figlia, Isabella, sposer\xE0 il duca di Leyra.
La sua famiglia lo odia, perch\xE8 ha passato la vita solo in cerca di arricchirsi, quando muore la moglie, e lui \xE8 vecchio, viene accolto nel palazzo del genero, per ottenere i suoi soldi, e viene accudito dai servitori.</p>`;
});
var GiovanniVerga = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Giovanni_Verga
});
var Il_naturalismo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Caratteri generali del Naturalismo</h2>
<p>\xC8 il <code>movimento letterario</code> che applica l\u2019impostazione del positivismo alla letteratura.
\xC8 una letteratura fondata sui fatti, che ha come punto di partenza e arrivo i fatti. Parla del progresso, del mondo reale, di dinamiche reali. Viene utilizzata la terza persona, con la tecnica dell\u2019<code>impersonalit\xE0 dell&#39;arte</code>. Lo scrittore non commenta la narrazione (contrario di Manzoni).</p>
<h2>Autori del naturalismo francese</h2>
<h3>Flaubert</h3>
<p>\xC8 uno degli autori che anticipa le idee del naturalismo. Ha elementi naturalistici e romantici. Nasce in Normandia (Francia del nord), il padre era medico e studier\xE0 giurisprudenza a Parigi. Nel <code>1856</code> pubblica Madame Bovary, un romanzo scandaloso che ebbe molto successo. Dovette andare in tribunale perch\xE8 era contro la morale e la religione. </p>
<blockquote><p><strong>Madame  Bovary:</strong> \xC8 la storia di Emma Bovary, orfana di madre che va a scuola dalle suore. Sposa un medico di nome Charls Bovary, hanno una vita normale, ma non quella che sognava Emma. Una sera va ad un ballo e cambia la sua vita, comincia a frequentare altri uomini, per avere una vita pi\xF9 varia. Ha una figlia da una relazione, e si innamora di un notaio conosciuto in un salotto. Si suicida per non aver trovato pace nella vita. </p></blockquote>
<h3>Emile Zola</h3>
<p>\xC8 il vero intellettuale del naturalismo. scrive varie opere, tra cui:</p>
<ul><li><strong>Therese Raquiu:</strong> Il romanzo parla di Teresa, una donna che per vivere la relazione con l\u2019amante uccide il marito. Si suicida poi assieme all\u2019amante. Nel cambiamento c\u2019\xE8 la lotta per l\u2019esistenza, e l\u2019adattamento all\u2019ambiente. Non riuscecndosi ad adattare si suicida. </li>
<li><strong>I Reugon - Macquart:</strong> \xC8 un ciclo di 20 romanzi che parla di una famiglia, mettendo in evidenza gli aspetti ambientali, economici e sociali. </li>
<li><strong>Il romanzo sperimentale:</strong> \xC8 un opera inventata, con argomenti tratti dalla sperimentazione ovvero l\u2019osservazione della realt\xE0. Il romanziere \xE8 un osservatore che descrive la realt\xE0 come la ha osservata, individua il punto di partenza, l\u2019ambiente sul quale si muoveranno i personaggi e si produrranno i fenomeni. </li></ul>`;
});
var IlNaturalismo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Il_naturalismo
});
var Il_Novecento$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Contesto storico:</h2>
<p>Secondo la definizione di \u201Csecolo breve\u201D di Hobswam \xE8 il periodo tra dal <code>1918 al 1989</code> (Prima guerra mondiale - caduta del muro di Berlino).</p>
<p>Il novecento \xE8 il secolo che, pi\xF9 di tutti nella storia, manifesta la crisi e incertezza dell\u2019uomo contemporaneo, lontano dalle certezze che avevano caratterizzato gli anni precedenti. \xC8 un\u2019<code>incertezza</code> sull\u2019<code>interiore</code>, nei confronti delle <code>istituzioni</code>, l\u2019uomo aveva migliorato suo livello di conoscienza e competenza ma era sempre pi\xF9 solo e insicuro rispetto alla realt\xE0 in cui vive.  </p>
<p>\xC8 il secolo del <code>relativismo</code>, dopo la scoperta della <code>relativit\xE0 ristretta</code> (1905) non esistono un modello di conoscienza e unit\xE0 di misure che diano esiti assoluti. Tutto \xE8 collegato al \u201D<code>qui e ora</code>\u201D, Le dimensioni empiriche e documentabili non sono le uniche a cui dedicarsi per comprendere la realt\xE0, alcuni dati sfuggono alla logica ma determinano effetti certi. <code>Nega gli elementi del positivismo</code>, l\u2019europa non \xE8 il centro della civilt\xE0 (policentrismo) e la scienza non \xE8 l\u2019unico modo per conoscere le cose. L\u2019europa era il centro del mondo dal mondo greco e romano.
C\u2019\xE8 un legame parziale con il decadentismo, che finisce nel 1910. non pu\xF2 essere considerato 900 perch\xE8 non conteneva le teorie di Einstein, Freud etc.  </p>
<h2>Le Crisi:</h2>
<p>Vari elementi della societ\xE0 entrano in crisi:</p>
<h3>Crisi della razionalit\xE0 scientifica:</h3>
<p>Nel Novecento entra in crisi l\u2019idea che la scienza sia la spiegazione di ogni dimensione e realt\xE0, l\u2019introduzione della teoria della relativit\xE0 di Einstein va contro la visione della scienza classica e galileiana, per cui \xE8 vero ci\xF2 che \xE8 dimostrato essere vero.</p>
<p>Nel percorso evolutivo della scienza, la vera rivoluzione \xE8 stata fatta da Galileo Galilei che, oltre ad aver elaborato la teoria eliocentrica, imposta la componente di <code>sperimentazione</code> come imprescindibile e fondamentale.
Con la teoria della relativit\xE0 (1905) Einstein aggiunge il concetto di <code>dimostrazione matematica</code> oltre a quella fisica.
La scienza sperimentale e la scienza teorica non sono in contraddizione, scienza di Einstein \xE8 applicata all\u2019atomo, quella di Galileo di distanze fisiche.</p>
<p>Einstein ha partecipato insieme ad Enrico Fermi e Ettore Majorana al <code>progetto Manattahn</code> nelle ricerche sul nucleare, effettuando studi sul\u2019atomo e sull\u2019energia nucleare. Se ne va quando gli stati hanno iniziato a usare la ricerca per la bomba atomica, pronunciando la frase \u201Cla scienza \xE8 nata come servizio all\u2019uomo e non come distruzione\u201D.  </p>
<p>Si parla di crisi della razionalit\xE0 scentifica perch\xE8 <code>si scopre non esserci verit\xE0 assolute</code>, si affermano cose vere che, potrebbero venire negate con il subentro di altri fattori.</p>
<h3>Crisi della razionalit\xE0 economica:</h3>
<p>Con la nascita dell\u2019URSS viene aplicato il modello economico comunista, il contrario del sistema liberista. La <code>crisi del 1929</code> dimostra che il <code>sistema liberista di Adam Smith non \xE8 perfetto</code>. Le grandi teorie dei modelli economici sono andati in crisi, si doveva cercare il modello economico migliore. </p>
<h3>Crisi della razionalit\xE0 storico politica:</h3>
<p>Nel Novecento scoppiano due <code>guerre mondiali</code> e c\u2019\xE8 l\u2019et\xE0 dei <code>totalitarismi</code>. L\u2019uomo aveva trovato dei modelli per gestire la societ\xE0 (costituzione, ugualianzafrase) ma si verifica una ricaduta.</p>
<h3>Crisi del sistema culturale:</h3>
<p>Tutto ricade nella crisi del sistema culturale, che assorbe gli elementi scentifici, sociali economici e politici. Si sviluppano delle teorie che hanno cambiato la prospettiva e identit\xE0 del secolo:</p>
<ul><li><p>La <strong>Psicanalisi di Freud</strong>: Freud \xE8 uno psicanalista nato nell\u2019impero asburgico, si laurea in neurologia a Vienna, inventa il <code>metodo psichianalitico</code>. Pubblica l\u2019opera <code>l&#39;interpretazione dei sogni</code>, dove spiega alcuni sogni per ricondurli a processi mentali. Secondo Freud l\u2019uomo nel sogno si libera delle costrizioni che gli derivano dalla societ\xE0, cotesto e famiglia ed emergono i suoi bisogni e desideri. Analizzando il sogno quindi si conosce la parte pi\xF9 profonda dell\u2019io. Scrive anche tre saggi sulla teoria sessuale per mettere in evidenza le ragioni di alcune malattie e alcune caratteristiche. <br>
Muore in Inghilterra (\xE8 dovuto scappare dato che era ebreo) nel <code>1939</code>, i suoi libri furono bruciati nel rogo di Berlino.
Studiando le malattie mentali afferma che l\u2019<em>essere nel mondo</em> dell\u2019uomo \xE8 condizionato dalla dimensione dell\u2019 <code>inconscio</code>. L\u2019uomo spesso non \xE8 consapevole degli input che provengono dal contesto, dalla famiglia e dalla situazione, ma gli assorbe e li restituisce.<br>
Elabora inoltre il <code>complesso di Edipo</code> (o processo elettra al femminile), per il quale si tende a cercare una persona uguale o contraria alla madre. L\u2019analisi sulla sessualit\xE0 non \xE8 solo legata a questi complessi, si analizza sempre una parte interiore dell\u2019uomo che \xE8 spesso oggetto di tab\xF9, alcune devianze, i comportamenti privati sessuali.<br><br>
Freud dice che nell\u2019uomo ci sono <code>tre livelli</code>:  </p>
<ul><li><strong>ES</strong>: \xC8 l\u2019inconscio, contiene gli istinti e le paure che la nostra coscienza ha rimosso. \xC8 la parte pi\xF9 profonda della nostra identit\xE0. </li>
<li><strong>IO</strong>: \xC8 la nostra coscienza, pi\xF9 esterna all\u2019inconscio.</li>
<li><strong>Super-IO</strong>: \xC8 il rapporto tra la coscienza e il mondo.<br><br>
Un uomo \xE8 sano ed equilibrato quando i tre elementi sono in equilibrio. La nevrosi \xE8 la malattia che deriva dal mancato equilibrio dei tre fattori, sono cattivi funzionamenti dell\u2019ipofisi. La prima forma di cura \xE8 l\u2019<code>analisi</code>, si usa la tecnica dell\u2019ipnosi, per permettere al paziente di estrasniarsi dalla realt\xE0.</li></ul></li>
<li><p>La <strong>teoria del tempo interiore di Bergson</strong>: Bergson \xE8 un filosofo francese, dice che c\u2019\xE8 un <code>tempo cronologico</code> e un <code>tempo interiore</code>. Quello cronologico, che viene usato come riferimento, segue un percorso lineare, il tempo interiore invece \xE8 il tempo della coscienza. La nostra mente opera per associazione, il tempo della mente \xE8 fondamentale per avere un\u2019idea dell\u2019uomo e della realt\xE0.<br>
Questa teoria ha avuto implicazioni importanti nel sistema culturale, soprattutto nella <code>letteratura</code>. da 1900 i romanzi non seguono pi\xF9 un andamento lineare, fanno salti e associazioni nel tempo.</p></li>
<li><p>La <strong>teoria di Nietzche</strong>, la dea del nichilismo accentua la condizione di crisi dell\u2019uomo contemporaneo.   </p></li>
<li><p>La <strong>teoria della relativit\xE0 generale di Einstein</strong>: Nel 1911 pubblica la teoria della relativit\xE0 generale che, rispetto alla precedente, contiene tutti i calcoli. Ottenne il nobel per la fisica nel 1921. Se ne va dalla Germania verso gli USA poich\xE8 era ebreo. Definisce il <code>relativismo conoscitivo</code> per il quale spazio e tempo sono strettamente connessi al punto di riferimento. La conoscienza \xE8 relativa, Socrate diceva \u201Csaggio \xE8 colui che sa di non sapere\u201D.</p></li></ul>
<h2>Geometrie euclidee e non euclidee:</h2>
<p>La matematica non \xE8 sempre una scienza esatta, nel Novecento a fronte delle geometrie euclidee sono state pensate le non euclidee, secondo le quali due rette parallele si possono incontrare. A differrenza della geometria euclidea, dove si usano i piani e i numeri assoluti, le non euclidee fanno riferimento alla <code>sfera</code>, con <code>numeri relativi</code>.</p>`;
});
var IlNovecento$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Il_Novecento$1
});
var Italo_Svevo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Contesto generale:</h2>
<p>Svevo nasce a Trieste nel <code>1861</code>, all\u2019epoca era una citt\xE0 dell\u2019impero Austro-Ungarico. Diventer\xE0 citt\xE0 italiana dopo la prima guerra mondiale.  Il suo vero nome \xE8 Aron Ettore Smith, ma nelle sue opere usa \u201CItalo Svevo\u201D, Italo per la componente italiana, Svevo per la componente germana e asburgica.</p>
<p>\xC8 uno dei primi autori che non esercita la professione di scrittore perch\xE9 il suo lavoro prevalente era la <code>gestione di un\u2019industria di vernici</code>, aveva un ruolo manageriale nell\u2019industria della famiglia della moglie. Man mano che ci si avvicina alla modernit\xE0 gli scrittori possono provenire da formazioni culturali diverse. </p>
<p>Pubblica il primo romanzo, \u201C<code>una vita</code>\u201D, che verr\xE0 pubblicato ma non avr\xE0 successo. La critica la considera un\u2019opera inefficace per la diffusione. Poco dopo pubblica \u201Csenilit\xE0\u201D, anch\u2019esso un insuccesso. A Trieste Svevo conosce <code>Joyce</code>, che viveva a Trieste in quanto aveva fondato e dirigeva una scuola inglese e legge i suoi libri (Gente di Dublino e l\u2019Ulisse). \xC8 grazie a quest\u2019incontro e alla vicinanza che nel 1923 Svevo pubblica \u201C<code>la coscienza di Zeno</code>\u201D. \xC8 il suo terzo romanzo, con il quale riceve una grande apprezzamento per l\u2019innovazione e l\u2019opera (anche grazie a Montale e Joice). Muore nel <code>1928</code> in un incidente a Motta di Livenza, dopo anni di lavoro non \xE8 riuscito a godersi il successo.</p>
<h2>Visione del mondo:</h2>
<p>La visione del mondodi Svevo \xE8 influenzata da vari aspetti:</p>
<ul><li>Ha una <strong>formazione culturale Mitteleuropea</strong>, \xE8 nato a Trieste, conosceva l\u2019italiano e il tedesco, che davano all\u2019autore una capacit\xE0 di <code>conoscere generi e forme di scrittura diversi</code>, anche se ha usato esclusivamente il romanzo.</li>
<li>Ha studiato con estrema attenzione la <strong>teoria di Darwin</strong>, adattandola alle sue opere. Egli infatti ha costruito tre romanzi che pongono in evidenza l\u2019immagine di uomini che vengono definiti \u201D<code>inetti *</code>\u201C.</li>
<li>\xC8 stato influenzato da <strong>Schopenhauer</strong>, ha scritto diverse opere tra cui \u201C<code>il mondo come volont\xE0 e rappresentazione</code>\u201D. In quest\u2019opera afferma che l\u2019uomo \xE8 sempre combattuto tra la volont\xE0 e la non volont\xE0. Da una parte l\u2019uomo vuole cambiare il mondo e migliorare, dall\u2019altra ha la non volont\xE0 che gli dice di lasciare correre e non occuparsi. Se la non volont\xE0 prevale \xE8 evidente che nasce un uomo che non si adatta all\u2019ambiente, ma \xE8 fuori dal mondo. Da quest\u2019opera Svevo trae meglio l\u2019immagine dell\u2019inetto. </li>
<li>Soprattutto nell\u2019ultima opera \xE8 profonda l\u2019<strong>influenza di Freud</strong>. Aveva conosciuto dei pazienti di Freud, Svevo studiando l\u2019opera nella coscienza di Zeno applica una serie di teorie che derivano dal metodo di indagine psicanalitica. Zeno, il protagonista, \xE8 descritto come colui che andr\xE0 da uno psichiatra per curare l\u2019inettitudine. Mentre per Freud \xE8 possibile, per Svevo <code>\xE8 impossibile guarire</code>. Mentre Freud applica la teoria al mondo della medicina, Svevo la applica all\u2019uomo comune, a personaggi inventati che non sono matti, ma essendo inseriti nella societ\xE0 di massa vivono sempre il contrasto tra volont\xE0 e non volont\xE0. Alla fine dell\u2019opera dice che la soluzione \xE8 una bomba atomica collocata al centro della terra, che renda la terra una nebulosa, per ricominciare da capo. <blockquote><p><strong>Inettitto</strong>: Colui che, per varie ragioni non agisce, che preferisce o non \xE8 in grado di prendere decisioni, perch\xE9 non \xE8 capace di adattarsi al contesto. Darwin diceva che esiste una evoluzione naturale, con l\u2019adattamento dell\u2019uomo all\u2019ambiente.</p></blockquote></li></ul>
<h2>Le tecniche narrative:</h2>
<p>Svevo \xE8 un romanziere del primo Novecento, nella sua opera applica le <code>tecniche del nuovo romanzo</code>.\xC8 un innovatore perch\xE8 applica nella sua opera l\u2019idea del <code>tempo interiore di Bergson</code>, quindi la sua scrittura prevede la descrizione del pensiero dei personaggi con lo spostamento tra passato, presente e futuro. La narrazione prevede che i diversi protagonisti presentino il loro punto di vista con una narrazione non lineare. <em>Una vita</em> e <em>senilit\xE0</em> hanno elementi di modernit\xE0 ma non sul piano della narrazione, seguono schemi tradizionali, viene <code>rispettato l\u2019ordine cronologico</code>. <em>La coscienza di Zeno</em>, invece, ha una narrazione moderna, dove <code>non segue l\u2019ordine cronologico</code> degli eventi. Sono romanzi scritti per argomenti, ad esempio \u201CZeno e il vizio del fumo\u201D. </p>
<h2>La coscienza di Zeno:</h2>
<p>Dopo lo scarso successo di una vita e senilit\xE0 Zeno decide di rinunciare alla scrittura di romanzi e dedicarsi agli <code>impegni dell\u2019azienda di famiglia</code>, alla <code>musica</code> e alla <code>scrittura per passione</code>. Scoppia la prima guerra mondiale, le attivit\xE0 industriali dell\u2019azienda entrano in crisi e Svevo decide di scrivere la coscienza di Zeno, che pubblica nel <code>1923</code>. \xC8 ambientata a Trieste, il protagonista \xE8 <code>Zeno Cosini</code> che racconta la sua storia: Zeno ha perso la madre quando era giovane, vive con il padre, che per\xF2 ha poca identit\xE0. Si iscrive all\u2019universit\xE0, ma non finisce gli studi. Ha il vizio del fumo ma non riesce a smettere. Quando il padre si ammala Zeno cerca di accudirlo, ma un giorno, mentre Zeno \xE8 ai piedi del letto del padre, gli da una sberla e muore. Questo fatto diventa un incubo per Zeno, all\u2019interno di un rapporto che non \xE8 mai stato sereno, accentua ancora di pi\xF9 la sofferenza. Zeno si occupa di affari, frequenta la borsa di Trieste. Conosce per caso un uomo d\u2019affari con quattro figlie, si innamora di una, ma lei non ricambia, quindi si innamora della sorella, e poi di un\u2019altra ancora. L\u2019unica che gli dice di si, <code>Augusta</code>, diventer\xE0 sua moglie. Questo matrimonio funziona in modo <code>convenzionale</code> e il libro all\u2019interno della trama inserisce la malattia di Zeno, e la cura da uno psicologo.
Si rende conto di essere ammalato e avere un <code>disturbo psicosomatico</code>, quindi decide di andare da uno psichiatra, <code>dottore S.</code> che lo invita a <code>scrivere un diario</code>. Gli dice \u201Cse scrivi un diario descrivi le paure e ti aiuta a guarire\u201D. Ad un certo punto decide di interrompere la cura e la scrittura e lo psichiatra per difesa e rivendicazione, pubblica il diario.</p>
<h2>Struttura del romanzo:</h2>
<p>\xC8 costituito da otto capitoli:</p>
<ul><li>La prefazione: dice che ha deciso di curarsi, \xE8 andato dal dottor S. e contiene una parte dove S. dice che Zeno va a curarsi. Si vede il contrasto tra medico e paziente</li>
<li>Dal capitolo 2 inizia la narrazione</li>
<li>Dal capitolo 3 al 8 ci sono titoli particolari, il fumo, la morte di mio padre, la storia del matrimonio etc. </li></ul>
<p>In tutti i capitoli \xE8 sempre presente il concetto di <code>salute e malattia</code>. Per lo psicologo la salute \xE8 una cosa, per Zeno un\u2019altra. Svevo vuole dire che non esiste un concetto assoluto di salute e di malattia. Non c\u2019\xE8 una risposta esatta, la tendenza dal Novecento in poi \xE8 la capacit\xE0 di mettere tutto in discussione.</p>
<h3>Prefazione:</h3>
<p>Qui il dottor S. dice che lo scrivente \xE8 il dottore, colui di cui si parla in questo romanzo. Chi conosce la psicanalisi sa perch\xE9 il paziente ha un rapporto particolare con il medico, potrebbe avere anche una certa antipatia. Dice che il medico ha indotto il paziente a scrivere una autobiografia, una sorta di diario che in realt\xE0 coincide con la coscienza di Zeno. Lui fa scrivere la poesia perch\xE9 egli ripensasse al passato, un preludio alla psicanalisi. Lo psicanalista dice che l\u2019idea di far scrivere \xE8 buona, e ha dato buoni risultati. Il paziente per\xF2 ad un certo punto si \xE8 sottratto dalla cura. Il medico quindi pubblica per vendetta la sua scrittura. Il dottor S. vuole rivendicare il ruolo della psicanalisi. Freud ritiene che la psicanalisi sia una forma di guarigione e soluzione ai problemi. Per Zeno non c\u2019\xE8 una soluzione ai problemi degli uomini, <code>il mondo non offre soluzioni ai problemi mentali, se non la distruzione del genere umano</code>. </p>
<h3>Capitolo 3:</h3>
<p>Il vizio del fumo \xE8 legato al rapporto che aveva con il padre. Smettere di fumare richiede volont\xE0, ma essendo <code>inetto</code> non ha questa volont\xE0, e il padre non \xE8 stata una figura di riferimento, e non gli ha passato quindi questa volont\xE0. Secondo Freud la determinazione e la capacit\xE0 di decidere \xE8 legata al fatto di avere figure molto forti (genitori). Il romanzo \xE8 scritto quasi tutto in prima persona. Nei tratti non in prima persona c\u2019\xE8 un utilizzo del <code>tempo misto</code>, quindi della capacit\xE0 di descrivere situazioni non seguendo l\u2019ordine cronologico degli eventi ma esclusivamente quello della memoria. \xC8 un testo moderno, prima d\u2019ora non si parlava dei problemi mentali, \xE8 presente il complesso di Edipo e la ricerca di giustificazioni infondate da parte di Zeno alle incapacit\xE0.</p>
<h3>Capitolo 8: leggere la scheda</h3>
<p>\xC8 l\u2019ultimo capitolo, dice che dopo sei mesi Zeno si considera guarito, crede di non aver avuto la malattia, infatti non \xE8 guarito. <code>Considera la psicanalisi una illusione</code>, una disciplina funzionale a qualche donna isterica. Dice \u201Cla vita assomiglia ad una malattia che procede per aspetti di peggioramento e miglioramento. La vita attuale ha delle criticit\xE0 importanti. L\u2019uomo spesso si \xE8 posto al posto degli alberi e delle bestie, ha inquinato l\u2019aria, non ha avuto rispetto degli spazi liberi. Il triste e attivo animale potrebbe scoprire e mettere a proprio servizio delle altre forze, ogni metro quadrato sar\xE0 occupato da un uomo\u2026 qualunque sforzo di trovare la salute \xE8 inutile. C\u2019\xE8 per\xF2 una differenza tra gli uomini e gli animali, la rondine ad un certo punto a causa del contesto decide di emigrare e si adatt\xF2 all\u2019ambiente, modificando le ali per andare lontano, la talpa ha imparato ad andare sotto terra per adattarsi, il cavallo ha trasformato il piede. Non sappiamo come altri animali si sono adattati e quale modifica hanno subito, ma sicuramente c\u2019\xE8 stato in tutti gli animali un adattamento. L\u2019occhialuto uomo (uomo che presume di essere intelligente) inventa gli ordigni e se c\u2019\xE8 staata intelligenza in chi gli ha inventati, quasi sempre non c\u2019\xE8 in chi gli usa. Si comprano, si vendono e si rubano, un uomo diventa sempre pi\xF9 furbo e sempre pi\xF9 debole. I primi ordigni sembravano prolungamenti del braccio, gli altri ormai vanno oltre ogni aspettativa. Forse ci vorrebbe una catastrofe inaudita prodotta dagli ordigni per arrivare ad una catastrofe inaudita. Nel segreto di una stanza un uomo produrr\xE0 un esplosivo incomparabile con gli altri, e un altro uomo, normale come gli altri ma pi\xF9 ammalato prender\xE0 l\u2019ordigno, lo porr\xE0 al centro della terra, e la terra ritorner\xE0 ad essere una nebulosa senza parassiti e malattie. </p>`;
});
var ItaloSvevo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Italo_Svevo
});
var Il_verismo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Caratteri generali del verismo</h2>
<p>Il verismo ha ripreso gli <code>ideali del naturalismo</code>, e riadattati un un <code>contesto italiano</code>. <strong>Luigi Capuana</strong> viene cosiderato teorico del verismo, perch\xE8 ha diffuso gli ideali in Italia. <strong>Verga</strong> \xE8 considerato invece il romanziere del verismo. </p>
<p>Condivide con il naturalismo la <code>centralit\xE0 della realt\xE0 dei fatti</code>, e il valore della scienza e l\u2019impersonalit\xE0 dell\u2019arte, molto pi\xF9 forte in Italia. l\u2019ambiente del naturalismo \xE8 la Francia e le citt\xE0, quindi si parla di Borghesia. Nel verismo, invece c\u2019\xE8 <code>l&#39;ambientazione del sud Italia</code>, la situazione della Sicilia dopo l\u2019unit\xE0. Mentre il naturalismo crede ciecamente nel progresso il <code>verismo \xE8 un po&#39; pi\xF9 cauto</code>, analizzando cosa produce nei singoli casi. Nel naturalismo c\u2019\xE8 uno scopo educativo, il verismo ha il solo scopo di <code>descrivere e spiegare</code> le caratteristiche della realt\xE0. </p>`;
});
var IlVerismo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Il_verismo
});
var RaccoltaIndiceElement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {json = [{name: "", date: "", url: "", slaves: ""}]} = $$props;
  console.log(json[0].url);
  if ($$props.json === void 0 && $$bindings.json && json !== void 0)
    $$bindings.json(json);
  return `${each(json, (pages) => `<div class="${"indice-elem inline"}"><a${add_attribute("href", pages.url, 0)}>- ${escape2(pages.name)}</a>
		
		${pages.date !== "noDate" ? `<div class="${"indice-elem-data"}">${escape2(pages.date)}</div>` : ``}
	</div>`)}`;
});
var prerender$3 = true;
var Italiano = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Italiano</title>`, ""}`, ""}

${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<section>${validate_component(RaccoltaIndiceElement, "RaccoltaIndiceElement").$$render($$result, {json: pagesSummary[1].slaves}, {}, {})}</section>`;
});
var Italiano$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Italiano,
  prerender: prerender$3
});
var Il_mondo_del_dopoguerra = create_ssr_component(($$result, $$props, $$bindings, slots) => {
<<<<<<< HEAD
  return `<p>La seconda guerra mondiale provoc\xF2 pi\xF9 di 71 milioni di cui pi\xF9 della met\xE0 erano <code>civili</code>. Oltre a questo problema c\u2019era la questione dei
<code>profughi, disoccupati e senzatetto</code>. USA e URSS vinsero la guerra, e furono denominate <code>superpotenze</code> e, in quanto reali vincitori della
guerra, si spartirono il mondo seguendo due blocchi di influenza: - Ad est il controllo della Russia - Ad Ovest il controllo degli USA</p>
<p>Avevano entrambe idee del mondo e visioni politico-sociali opposte. La Germania viene divisa in Germania est e ovest. ancora una volta era
stata colpevole della guerra, e doveva essere punita. Viene fatto divieto di corsa agli armamenti, fu obbligata a pagare i debiti di Guerra
alla Russia. La repubblica Federale Tedesca ad ovest con capitale Bonn e repubblica federale con capitale Berlino non si capisce
nienteeeeeeeeeeeeeeeeeeeeeeeeee</p>
<p>Nella conferenza di Jalta del 1945 viene decisa la divisione del mondo, l\u2019idea che ci dovessero essere libere elezioni, doveva prevalere la
democrazia e da qui nasce l\u2019idea dell\u2019ONU, un organismo sovranazionale che doveva sostituire la societ\xE0 delle nazioni, che aveva un esercito
proprio. dopo la conferenza di Jalta, nella conferenza di Potsdam vengono stabiliti i confini del nuovo governo. da questo momento i rapporti
tra America e Russia furono di guerra fredda. Da questo momento il mondo cambia, USA e URSS non hanno relazioni pacifiche, si parla di <code>guerra fredda</code> e <code>ordine bipolare</code>. Erano costantemente sul punto di arrivare allo scontro. Gli stati che si riconoscevano nell\u2019URSS dipendevano
direttamente dalla volont\xE0 di Mosca, sulla base del <code>patto di Varsavia</code>, attraverso il quale l\u2019URSS serviva aiuti militari ed economici e di
protezione nucleare ai paesi del blocco est. Dall\u2019altra parte c\u2019\xE8 il <code>patto atlantico</code>, antecedente della carta atlantica, attraverso il quale
si regolavano i rapporti tra i paesi satelliti degli USA. Avevano entrambi <code>funzioni militari</code>. Gli USA attraverso il piano MArshall avevano
finanziato tutti i paesi dell\u2019ovest per la ricostruzione del dopoguerra. Per questo motivo abbiamo basi militari americane.</p>
<h2>Guerra Fredda:</h2>
<p>\xC8 una guerra ideologica tra due sistemi politici diversi tra loro. La definizione fu data da un giornalista per definire il periodo dal 1949
(conferenze di Jalta e Potsad) al 1989 (crollo del muro).</p>
<p>Fa guerra fu combattuta con la paura, strategie politiche. Viene definita <code>pace armata</code> o <code>equilibrio del terrore</code>. Ci furono:</p>
<ul><li>Periodi di distensione</li>
<li>Periodi di contrasto</li></ul>
<p>USA e URSS avevano politiche di corsa agli armamenti, investivano parte delle loro risorse in armi. Venivano usate le armi convenzionali
(carri armati), portaerei, sottomarini e l\u2019arsenale atomico. USA e URSS stanziarono enormi somme di denaro per i loro servizi segreti, gli
uomini che fanno capo al ministero dell\u2019interno con la funzione di garantire la sicurezza dello stato. Nel caso di Falcone e Borsellino si
sapeva dell\u2019arrivo del tritolo. I servizi segreti deviati fanno invece l\u2019interesse di qualcuno. I vari servizi segreti degli stati collaborano
tra loro. Quelli russi venivano chiamati KGB, tra CIA e KGB c\u2019era la guerra dentro i servizi segreti, che si infiltravano tra loro. Essendo la
Russia un paese comunista e dittatoriale, il KGB controllava tutte le persone. Negli archivi c\u2019erano tutte le informazioni su tutte le
persone. </p>
<p>Nel 1953 muore Stalin, dopo qualche anno il mondo scopr\xEC i crimini compiuti da Stalin, non diversi da quelli di Hitler. Con lui finisce il
totalitarismo, ma non il comunismo. in SIberia nel territorio russo si scoprirono le purghe, le deportazioni e le cifre delle condanne, e dei
gulag. Gli archivi sovietici hanno mostrato un milione di persone giustiziate per motivi politici\u2026 1 e mezzo morti di fame. Si pensa che dal
1930 al 1953 \u2026 persone siano passati per i gulag. Il successore di Stalin, ??Kruse?? mostrer\xE0 al mondo ci\xF2 che era successo, inizier\xE0 una
gestione pi\xF9 rispettosa dell\u2019identit\xE0, dino a che salir\xE0 al potere nel 1989 ??Gorbachow??, l\u2019uomo della ??<code>peristoica</code>?? Alcuni paesi si
ribellano perch\xE8 non vogliono pi\xF9 sottostare al sistema comunista, la ribellione Polacca ha portato all\u2019indipendenza della Polonia (grazie
anche a Giovanni Paolo II) che ha inviato tantissimi soldi in Polonia per dar fine al comunismo. La svolta decisiva al processo di rispetto
della dignit\xE0 umana avviene con l\u2019elezione di ??Gorbachow??, avvia la politica della perestoica, di rinnovamento, per la quale la Russia ha
introdotto la propriet\xE0 privata, ha garantito un maggior numero di diritti. sono finiti i regimi comunisti. La caduta del muro segna la fine
della guerra fredda tra USA e URSS, due anni dopo, nel 1991\u2026 non sto capendo\u2026 nulla\u2026 chiedi a qualcuno\u2026 grazie\u2026scus. la Russia non
si chiama pi\xF9 URSS e, dalla grande realt\xE0 che era, rientra nei suoi territori. Finisce l\u2019impero e si conforma geograficamente come\u2019\xE8 ora.</p>
<p>Uno dei momenti oggetto di scontro tra USA e URSS \xE8 la <code>crisi di Berlino</code>. Germania e Berlino erano divise in 4 zone, controllate da USA,
URSS, Gran Bretagna e Francia. USA, GB e Francia sono state unificate nel ???? sotto il controllo americano, la capitale da Berlino fu
spostata, nacque la repubblica federale tedesca con capitale Bonn, e la repubblica democratica tedesca con capitale Berlino. Stalin reag\xEC
bloccando le strade che dirigevano ad ovest, voleva allargare la zona di influenza. lo scontro tra USA e Russia sulla divisione della Germania
faceva temere al mondo una terza guerra mondiale. Gli USA fecero un ponte aereo per rifornire la Germania dell\u2019est in parte bloccata
dall\u2019esercito russo. grazie alla diplomazia USA e Russia trovarono un accordo. L\u2019incidente rientr\xF2.</p>
<p>Questione della Corea: Era un territorio affacciato sull\u2019oceano pacifico. Durante gli anni della conferenza di Jalta, poich\xE8 si decise di
dividere il mondo in blocco orizzontale e occidentale seguendo il 38 parallelo, la Corea fu divisa in Corea del nord (comunista, sovietica) e
corea del sud (capitalista, filo-americana). ancora oggi la corea \xE8 divisa in questo modo. Stlin con l\u2019obbiettivo di unificare il paese sotto
il controllo comunsta invase la corea del sud. rispetto a questa invasione gli USA e l\u2019allora presidente Truman nonostante la guerra di quasi
tre anni ??? </p>
<p>nel 1970 fu eletto presidente degli USA il democratico ??John Gerald Kennedy??, aveva 44 anni, di origine irlandese. Cambi\xF2 la storia degli
stati uniti. \xE8 famoso il suo discorso \u201Cnuova frontiera\u201D, ossia la necessit\xE0 che gli USA dagli anni 60 si aprano alla ricerca, scienza, alla
pace, alla cultura e alla fine dei pregiudizi sulle persone di colore. in uno dei suoi discorsi dice \u201Cnon chiedete cosa il vostro paese possa
fare per voi, ma cosa potete fare voi per il vostro paese\u201D. in \u201Cio sono berlinese\u201D auspica l\u2019unificazione di Berlino. tra i punti del suo
programma c\u2019\xE8 la scienza, la necessit\xE0 di esplorare lo spazio , i pianeti del sistema solare e la pace e dialogo con l\u2019URSS. dovette fare i
conti con problemi enormi, nel 1961 a Berlino c\u2019\xE8 la seconda crisi, dove fu innalzato il muro. in una notte i berlinesi non ebbero pi\xF9 la
possibilit\xE0 (per volont\xE0 della Russia) di andare da Est ad Ovest. In una notte \xE8 stato collocato il filo spinato, in seguito venne il muro di
cemento armato. molti morirono perch\xE8 cetrcavano di oltrepassare il muro, il contrasto tra Est e Ovest non provoc\xF2 la terza guerra mondiale.
KEnnedy dovette fare i conti anche con la crisi di Cuba, un isola a 180km dalle coste degli USA dove negli anni 60 ci fu una rivoluzione
comunista guidata da Fidel Castro, filosovietico e che riusc\xEC a diventare presidente della repubblica con un colpo di stato. LA base
ideologica di ??fidel Castro?? proviene dal Ch\xE8, ideologo del comunismo esportato dall\u2019URSS. Che Guevara era rivoluzionario, viaggiava in
moto, fu ucciso in America per esportarre il modello comunista. per una rivoluzione dei giovani \xE8 stato un modello di democrazia e rivoluzione
contro l\u2019ordine costituito. Fiedel Castro, per difendersi da\u2026 fece collocare dei missili terra-aria che nel corso dei mesi amentava in modo
esponenziale come minaccia per gli USA. i missili potevano essere molto pericolosi per le coste degli USA, in pochi minuti potevano
distruggere gli USA. gli americani inviarono le portaerei nelle loro coste , come segno di difesa e sfida. Questa situazione rappresentava la
minaccia per la terza guerra mondiale. Kennedy insieme al papa Giovanni 23 fece di tutto per arrivare alla pace, anche in questo frangente la
guerra non scoppi\xF2. Kennedy e il fratello si occuparono della segregazione razziale, ossia del fatto che negli USA e nelle colonie bianchi e
neri rispondevano a regole diverse. In autobus, negli uffici, nei negozi erano separati. nell\u2019epoca di Kennedy emerge una serie di norme
legislative che cercano di cambiare l\u2019idea della segregazione, in particolare era prevista la fine della segregazione raziale. \xE8 in dubbio che
se non ci fossero stati uomini come Martin Luter King la norma che Kennedy aveva scritto non sarebbe batasta. negli usa l\u2019ugualianza non c\u2019\xE8
ancora. nel ???3 viene asassinato a Dallas, in Texas mentre il corteo presidenziale percorreva la via principale. viene colpita con due
proiettili, il secondo dei quali bypassa il cranio al punto che la moglie avesse in parte raccolto la testa. la moglie Je???y Kennedy. Hermes
aveva creato una borsa per lei, ?Geky? che \xE8 diventata famosa perch\xE8 incarna lo stile della moglie. l\u2019esecutore fu catturato poche ore dopo,
ma molti non credono abbia agito da solo, a molti la politica di Kennedy risultava scomoda, soprattutto ai conservatori. grazie alla sua
politica nel 1969 ci fu il primo uomo sulla luna, milioni di spettatori videro HAmstrong calpestare la polvere del \u201Cmare della tranquillit\xE0\u201D.
era molto infedele</p>`;
=======
  return `<p>La seconda guerra mondiale provoc\xF2 pi\xF9 di 71 milioni di cui pi\xF9 della met\xE0 erano <code>civili</code>. Oltre a questo problema c\u2019era la questione dei <code>profughi, disoccupati e senzatetto</code>. USA e URSS vinsero la guerra, e furono denominate <code>superpotenze</code> e, in quanto reali vincitori della guerra, si spartirono il mondo seguendo due blocchi di influenza: - Ad est il controllo della Russia - Ad Ovest il controllo degli USA</p>
<p>Avevano entrambe idee del mondo e visioni politico-sociali opposte (URSS totalitarista e comunista, USA democratica e capitalista). </p>
<p>le due potenze si dividono il mondo, dividendo anche la Germania in du met\xE0. a ovest c\u2019\xE8 la reoubblica federale tedesca (USa) con capitale Bonn ed ad est la repubblica democratica tedesca con capitale Berlino(URSS)</p>
<p>Nella conferenza di Jalta del 1945 tra Roosvelt, Stalin e Churchill viene decisa la divisione del mondo. Sempre a Jalta viene istituito l\u2019ONU con un esercito proprio per la pace. Successivamente, nella conferenza di Potsdam, vengono stabiliti i nuovi confini. Da questo momento i rapporti tra America e Russia furono di guerra fredda. Da questo momento il mondo cambia, USA e URSS non hanno relazioni pacifiche, si parla di <code>guerra fredda</code> e <code>ordine bipolare</code>. Erano costantemente sul punto di arrivare allo scontro. Gli stati che si riconoscevano nell\u2019URSS dipendevano direttamente dalla volont\xE0 di Mosca, sulla base del <code>patto di Varsavia</code>, attraverso il quale l\u2019URSS serviva aiuti militari ed economici e di protezione nucleare ai paesi del blocco est. Dall\u2019altra parte c\u2019\xE8 il <code>patto atlantico</code>, antecedente della carta atlantica, attraverso il quale si regolavano i rapporti tra i paesi satelliti degli USA. Avevano entrambi <code>funzioni militari</code>. </p>
<p>Gli USA attraverso il piano Marshall hanno finanziato tutti i paesi dell\u2019ovest per la ricostruzione del dopoguerra (basi militari americane nei territori italiani).</p>
<h2>Guerra Fredda:</h2>
<p>\xC8 una guerra ideologica tra due sistemi politici diversi tra loro. La definizione fu data da un giornalista per definire il periodo dal <code>1949</code> (conferenze di Jalta e Potsad) al <code>1989</code> (crollo del muro).</p>
<p>Fa guerra fu combattuta con la paura, strategie politiche. Viene definita <code>pace armata</code> o <code>equilibrio del terrore</code>. Ci furono:</p>
<ul><li>Periodi di distensione</li>
<li>Periodi di contrasto</li></ul>
<p>USA e URSS avevano politiche di <code>corsa agli armamenti</code>, investivano parte delle loro risorse in armi. Venivano usate le armi convenzionali (carri armati), portaerei, sottomarini e l\u2019arsenale atomico. USA e URSS stanziarono enormi somme di denaro per i loro <code>servizi segreti</code>, gli uomini che fanno capo al ministero dell\u2019interno con la funzione di garantire la sicurezza dello stato. Tra CIA e KGB c\u2019era la guerra dentro i servizi segreti, che si infiltravano tra loro. Essendo la Russia un paese comunista e dittatoriale, il KGB controllava tutte le persone.</p>
<p>Nel 1953 muore Stalin, dopo qualche anno il mondo scopr\xEC i crimini compiuti da Stalin. Con lui finisce il totalitarismo, ma non il comunismo. Nel territorio russo si scoprirono le purghe, le deportazioni e le cifre delle condanne, e dei gulag. Gli archivi sovietici hanno mostrato un milione di persone giustiziate per motivi politici, 1,5 milioni nei gulag e 11,5 milioni morti di fame. Il successore di Stalin, <code>Kruscev</code> mostrer\xE0 al mondo ci\xF2 che era successo, fino alla salita al potere di <code>Gorbaciov</code>, l\u2019uomo della <code>perestrojka</code>. Alcuni paesi si ribellano perch\xE8 non vogliono pi\xF9 sottostare al sistema comunista, la svolta decisiva al processo di rispetto della dignit\xE0 umana avviene con l\u2019elezione di Gorbaciov, avvia la politica della perestrojka, di rinnovamento, per la quale la Russia introduce
la <code>propriet\xE0 privata</code>, ha garantito un maggior numero di diritti. Finiscono i regimi comunisti. La caduta del muro segna la fine della guerra fredda tra USA e URSS, nel 1991 Eltsin (collaboratore di Gorbaciov) accetta la fine dell\u2019URSS e la sua disgregazione. Nasce la <code>Repubblica Democratica Russa</code> e la Russia rientra nei suoi territori (attuali).</p>
<h2>Crisi di Berlino:</h2>
<p>Uno dei momenti oggetto di scontro tra USA e URSS \xE8 la <code>crisi di Berlino</code>. Germania e Berlino erano divise in 4 zone, controllate da USA, URSS, Gran Bretagna e Francia. USA, GB e Francia sono state unificate nel ???? sotto il controllo americano, nacque la repubblica federale tedesca con capitale Bonn, e la repubblica democratica tedesca con capitale Berlino. Stalin reag\xEC bloccando le strade che dirigevano ad ovest, voleva allargare la zona di influenza. lo scontro tra USA e Russia sulla divisione della Germania faceva temere al mondo una terza guerra mondiale. Gli USA fecero un ponte aereo per rifornire la Germania dell\u2019est in parte bloccata dall\u2019esercito russo. grazie alla diplomazia USA e Russia trovarono un accordo. L\u2019incidente rientr\xF2.</p>
<h2>Questione della Corea:</h2>
<p>Era un territorio affacciato sull\u2019oceano pacifico. Durante gli anni della conferenza di Jalta, poich\xE8 si decise di dividere il mondo in blocco orientale e occidentale seguendo il 38 parallelo, la Corea fu divisa in Corea del nord (comunista, sovietica) e corea del sud (capitalista, filo-americana). Ancora oggi la corea \xE8 divisa in questo modo. Stalin con l\u2019obbiettivo di unificare il paese sotto il controllo comunsta invase la corea del sud, gli USA reagirono e il presidente Truman e Stalin minacciarono di usare la bomba atomica. La questione poi rientr\xF2 e la Corea rest\xF2 divisa.</p>
<h2>Kennedy:</h2>
<p>Nel 1970 fu eletto presidente degli USA il democratico John Fitzgerald Kennedy, aveva 44 anni, di origine irlandese. Cambi\xF2 la storia degli stati uniti. \xE8 famoso il suo discorso \u201Cnuova frontiera\u201D, ossia la necessit\xE0 che gli USA dagli anni 60 si aprano alla <code>ricerca</code>, <code>scienza</code>, alla <code>pace</code>, alla <code>cultura</code> e alla fine dei <code>pregiudizi sulle persone di colore</code>. in uno dei suoi discorsi dice \u201Cnon chiedete cosa il vostro paese possa fare per voi, ma cosa potete fare voi per il vostro paese\u201D. In \u201Cio sono berlinese\u201D auspica l\u2019unificazione di Berlino. tra i punti del suo programma c\u2019\xE8 la scienza, la necessit\xE0 di esplorare lo spazio , i pianeti del sistema solare e la pace e dialogo con l\u2019URSS. </p>
<p>Dovette fare i conti con problemi enormi, nel 1961 a Berlino c\u2019\xE8 la seconda crisi, dove fu innalzato il muro. in una notte i berlinesi non ebbero pi\xF9 la possibilit\xE0 (per volont\xE0 della Russia) di andare da Est ad Ovest. In una notte \xE8 stato collocato il filo spinato, in seguito venne il muro di cemento armato. molti morirono perch\xE8 cetrcavano di oltrepassare il muro, il contrasto tra Est e Ovest non provoc\xF2 la terza guerra mondiale. </p>
<p>Kennedy e il fratello si occuparono della segregazione razziale, ossia del fatto che negli USA e nelle colonie bianchi e neri rispondevano a regole diverse. In autobus, negli uffici, nei negozi erano separati. Nell\u2019epoca di Kennedy emerge una serie di norme legislative che cercano di cambiare l\u2019idea della segregazione, in particolare era prevista la fine della segregazione raziale. Nel 1963 viene asassinato a Dallas, in Texas mentre il corteo presidenziale percorreva la via principale. Viene colpito con due proiettili, il secondo dei quali bypassa il cranio al punto che la moglie avesse in parte raccolto la testa.</p>
<h2>Crisi di Cuba:</h2>
<p>Kenedy dovette fare i conti anche con la crisi di Cuba, un isola a 180km dalle coste degli USA dove negli anni 60 ci fu una rivoluzione comunista guidata da Fidel Castro, filosovietico e che riusc\xEC a diventare presidente della repubblica con un colpo di stato. La base ideologica di Castro proviene da <strong>Che Guevara</strong>, ideologo del comunismo esportato dall\u2019URSS.  Fiedel Castro, per difendersi fece collocare dei missili terra-aria che nel corso dei mesi amentava in modo esponenziale come minaccia per gli USA. Gli americani inviarono le portaerei nelle loro coste, come segno di difesa e sfida. Questa situazione rappresentava la minaccia per la terza guerra mondiale. Kennedy insieme al papa Giovanni 23 fece di tutto per arrivare alla pace, anche in questo frangente la guerra non scoppi\xF2. </p>
<p>aveva creato una borsa per lei, ?Geky? che \xE8 diventata famosa perch\xE8 incarna lo stile della moglie. l\u2019esecutore fu catturato poche ore dopo, ma molti non credono abbia agito da solo, a molti la politica di Kennedy risultava scomoda, soprattutto ai conservatori. grazie alla sua politica nel 1969 ci fu il primo uomo sulla luna, milioni di spettatori videro Hamstrong calpestare la polvere del \u201Cmare della tranquillit\xE0\u201D. era molto infedele</p>
<blockquote><p><strong>Che Guevara:</strong> Era rivoluzionario, viaggiava in moto, fu ucciso in America per aver esportato il modello comunista. \xC8 stato un modello di democrazia e rivoluzione per i giovani contro l\u2019ordine costituito.</p></blockquote>`;
>>>>>>> 9162d60f6603037c33acdde074ee19d81d459ff2
});
var IlMondoDelDopoguerra = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Il_mondo_del_dopoguerra
});
var Seconda_guerra_mondiale = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Contesto generale:</h2>
<p>Le ragioni della guerra devono essere ricondotte alla politica estera degli stati negli anni precedenti. La seconda guerra mondiale <code>inizia nel 1939</code> quando Hitler invade la Polonia per <code>ricreare l&#39;impero</code> e lo spazio vitale. Hitler era alleato con l\u2019Italia, Inghilterra e Francia due giorni dopo l\u2019ivasione dichiarano guerra alla Germania. Hitler dirige i suoi eserciti verso est, arriva a Varsavia e la Polonia \xE8 occupata dalle truppe Naziste, scompare dal sistema geo-politico. Secondo il patto Molotov-Ribbentrop \xE8 divisa in due parti, met\xE0 della Russia, met\xE0 della Germania. Anche la seconda guerra mondiale segue due fronti: orientale e occidentale, usando come riferimento la Germania.
Nel <code>1940</code> Hitler decide di avanzare verso il fronte Ovest, invade Danimarca, Norvegia, Olanda, Belgio e Lussemburgo. Erano tutti paesi neutrali, non schierati. L\u2019invasione produce il controllo di Hitler, che riesce ad arrivare fino in a Parigi. \xC8 una guerra di movimento, secondo le intenzioni di Hitler doveva essere una guerra Lampo, che l\u2019avrebbe portato in qualche mese a conquistare tutto lo spazio vitale. La parte a nord della Francia era controllata direttamente dai tedeschi, quella a sud indirettamente, perch\xE9 \xE8 stato istituito un <code>governo collaborazionista</code>, il governo di Vichy. Questo governo crea l\u2019idea del collaborazionismo, ossia dichiarare di stare da una parte, ma in realt\xE0 fornire informazioni alla parte avversaria. Sono coloro che non sono fascisti, ma in realt\xE0 collaborano a favore del governo fascista/nazista. </p>
<h2>Battaglia aerea:</h2>
<p>Nel 1940 Churcill, capo del governo della Gran Bretagna, respinse la pace di Hitler. Inizia quindi l\u2019<code>operazione leone marino</code> con la quale, tramite un attacco una successiva flotta di occupazione, Hitler voleva prendere il controllo inglese. Si scaten\xF2 la <code>Battaglia d&#39;Inghilterra</code> tra la Luftwaffe e la RAF, i due eseciti aerei di Germania e Gran Bretagna. Seppur di minor numero e con mezzi meno prestanti la Gran Bretagna fece ritirare i tedeschi, anche grazie all\u2019utilizzo del radar, di cui possedevano l\u2019esclusiva.</p>
<p>Nel 1940 Hitler per creare lo spazio vitale prosegue verso l\u2019URSS con l\u2019<code>Operazione Barbarossa</code>, ignorando il patto Molotov-Ribbentrop. In Russia c\u2019era Stalin, l\u2019esercito viene bloccato prima di Mosca dal patriottismo russo.
Gli USA fino al 1941 restano fuori dal conflitto, il presidente Roosvelt era convinto fosse necessario per rafforzare l\u2019America, pronuncia la frase \u201Cl\u2019America agli americani\u201D. Nel mentre per\xF2 gli USA avevano finanziavano Francia e Inghilterra, la legge di affitti e prestiti prevedeva la vendita di Armi in nome della difesa della democrazia. Nel 1941 Roosevelt e Churchill si incontrano su una nave da guerra e firmano la <code>carta atlantica</code>, ponendo in evidenza dei principi, la condanna ai regimi fascisti, la difesa dell\u2019autodeterminazione dei popoli, il rispetto delle nazioni, la non invadenza e il contrasto ai regimi fascisti.</p>
<h2>Attacco di Pearl Arbor:</h2>
<p>All\u2019interno dei conflitti ci sono spesso guerre parallele per trarre vantaggi e rivendicare territori. Il Giappone si allea con Italia e Germania, per ottenere dalla Cina le colonne del continente asiatico. La Cina di Mao Zedong aveva interessi coloniali in contrasto con il Giappone. Nel <code>1941</code> la base americana di Peral Arbor fu attaccata dai giapponesi, vengono distrutte le portaerei ancorate e uccise 5000 persone. Questo fatto produce l\u2019entrata in guerra degli USA, che dichiara guerra al Giappone. Si parla quindi di guerra mondiale, perch\xE9 oltre all\u2019Europa si aggiungono USA e Giappone. </p>
<h2>Olocausto:</h2>
<p>Nel gennaio del 1942 si tiene la <code>riunione di Wannsee</code>, in una cittadina di Berlino. 12 gerarchi tra cui Himler, capo delle SS, decisero che dal giorno dopo doveva iniziare la \u201Csoluzione finale\u201D, il passaggio tra la fase di identificazione e concentramento a quella di annientamento. Venne quindi <code>organizzato il piano strategico</code> (come prelevare, trattare gli ebrei), inizialmente sarebbero dovuti essere 11 milioni di ebrei, ne presero 6.</p>
<p>Lo sterminio non si limit\xE0 agli ebrei tedeschi, ma da tutta l\u2019Europa Omossessuali, criminali, Zingari, assenteisti etc. furono portati nei lagher. I <code>kap\xF2</code> erano coloro che vivevano di maggiori previlegi che, pur essendo ebrei, controllavano alcuni aspetti gestionali. Vennero creati i <code>Sonder kommando</code>, dei gruppi di ebrei che controllavano il processo di gasificazione e cremazione all\u2019interno dei lagher. Godevano di diritti speciali, molti di loro sono tornati. <code>Heinrich Himmler</code>, capo delle SS, era uno spietato, massimo responsavile del terrore. La maggior parte dei campi erano in Germania e Polonia, i principali erano Auschwitz, Dachau, Buchenvald non lontano da Berlino, Matausen vicino a Praga. I campi erano idustrie, denti e capelli venivano riutilizzati. 6 milioni di ebrei vennero uccisi.</p>
<h2>La guerra per l\u2019Italia:</h2>
<p>L\u2019Italia entra in guerra il <code>10 giugno 1940</code> crontro Francia e Gran Bretagna. Voleva effettuare una <code>guerra parallela</code> sul mediterraneo, ma fin da subito gli inglesi hanno la meglio. Attacca la Grecia, ma un anno dopo Hitler \xE8 costretto a mandare le sue truppe. L\u2019Inghilterra intanto occupa quasi tutta l\u2019africa orientale italiana (interviene anche qui la Germania), e il contingente inviato in Russia non ha buoni esiti, l\u2019Italia si arrende in entrambi i casi. Nel 1943, dopo lo sbarco degli alleati, il gran consiglio del fascismo fa dimettere Mussolini, viene arrestato ed esiliato sul Gran Sasso. Al nord Italia ci sono scontri tra la repubblica di Sal\xF2 e i <code>partigiani</code>, coordinati dal CLN (consiglio di liberazione nazionale). I tedeschi reagiscono con opere di rappresentaglia iniscriminata. Nel 1944 gli alleati sfondano le linee tedesche e il <code>25 Aprile</code> l\u2019Italia viene liberata, i tedeschi si arrendono e Mussolini, dopo aver tentato la fuga, viene fucilato dai partigiani. </p>
<h2>Risoluzioni:</h2>
<p>Il 1943 \xE8 considerato l\u2019anno di svolta della guerra. Sul fronte orientale i <code>russi sconfingono i tedeschi a Stalingrado</code> nel 1943. Anche gli italiani che erano nella campagna di Russia si ritirarono, molti non tornarono pi\xF9, e molti furono dispersi. Anche sul fronte delle colonie africane Inghilterra, Francia e USA riportarono moltissime vittorie, la strategia tedesca risult\xF2 fallimentare.
Direttamente o indirettamente alle potenze di Germania, Italia e Giappone si allearono <code>Romania, Bulgheria, Ex Jugoslavia</code> contro Francia, Inghilterra, USA, Russia, parte dell\u2019ex Jugoslavia e Grecia. Nel luglio del 1943 gli alleati <code>sbarcarono in Sicilia</code>, cambiando il corso della guerra. L\u2019<code>8 settembre 1943 l\u2019Italia esce dalla guerra</code> firmando l\u2019armistizio. Gli Anglo-americani nel 1944 con l\u2019<code>operazione Overlord</code> sbarcarono anche nelle coste della Normandia che, assieme alla resistenza guidata dal generale <code>de Gaulle</code> porta alla <code>liberazione della Francia</code> dai tedeschi. Vennero liberati anche Belgio e Olanda. Contemporaneamente le truppe sovietiche entrano nel territorio tedesco ad est puntando a Berlino. Hitler intanto dal suo bunker assieme ai collaboratori continuava a fare <code>propaganda</code> per la quale stava vincendo. Nel 1945 sposa la compagna Eva Brown. All\u2019arrivo dei russi si suicidano Hitler, la moglie e la famiglia del ministro della propaganda. Nel <code>1945</code> la Germania esce dalla guerra.</p>
<h2>Innovazioni della guerra:</h2>
<p>Data la fretta degli eserciti del raggiungimento della superiorit\xE0 sul nemico le guerre accelerano il <code>progresso scientifico e tecnico</code>.
Tra le innovazioni pi\xF9 importanti troviamo le ricerche sull\u2019<code>energia nucleare</code> di Enrico Fermi che nel 2941 cre\xF2 il primo reattore nucleare e il <code>computer</code> di Alan Turing, \u201CBomba\u201D, con il quale decifrava i messaggi di \u201CEnigma\u201D, tra Germania e Giappone. </p>
<h2>Il processo di Norimberga:</h2>
<p>Si \xE8 tenuto tra il 1945 e il 1946, \xE8 fondamentale perch\xE9 viene introdotto il diritto internazionale. Furono individuate le colpe di 21 ufficiali Tedeschi, molti dei quali non erano presenti al processo, dato che erano scappati. Furono chiamati come testimoni gli scappati, furono letti i documenti, le lettere, i filmati, scoperti gli esperimenti del dottor Mengele etc. Furono imputati di crimini contro la democrazia, pace, umanit\xE0 etc. </p>
<<<<<<< HEAD
<h2>Dopoguerra Italiano e resistenza.</h2>
=======
<h2>Dopoguerra Italiano e resistenza:</h2>
>>>>>>> 9162d60f6603037c33acdde074ee19d81d459ff2
<p>Mussolini ricrea sul lago di Garda la repubblica di Sal\xF2. L\u2019Italia si trova quindi a vivere una guerra civile, a Sud ci sono gli
aglo-americani che liberano l\u2019Italia e a nord tedeschi alleati con i fascisti. Nasce anche la resistenza, specialmente in Veneto e Lombardia
dove, studenti, uomini di centro e sinistra decidono di combattere per liberare l\u2019italia dal fascismo. Si crea il CLN, Comitato di Liberazione
Nazionale con sede a Roma che coordina le azioni della resistenza. I tedeschi che appresero dell\u2019uscita dell\u2019Italia dalla guerra consideravano
gli italiani come un popolo che gli aveva voltato la faccia. In grecia ci fu la <code>strage di Cefalonia</code>. Quando l\u2019Italia esce dalla guerra nel
1943 i soldati all\u2019estero continuavano a combattere, i tedeschi li consideravano falsi e disertori, quindi li uccidevano. In Italia ci furono
le <code>fosse Ardeatine</code> e l\u2019<code>eccidio di Marzabotto</code> (tra Bologna e Ferrara). Quando nel 1944 gli Anglo-Americani conquistarono Roma e le linee
tedesche si festeggia la liberazione, i tedeschi si arrendono, Mussolin viene appeso a piazzale Loreto a Milano.</p>
<p>Il 10 Febbraio si ricordano le <code>stragi di Tito</code>, il presidente comunista della Ex-Jugoslavia nei confronti degli italiani. Lui considerava
tutti gli italiani del Friuli come Fascisti, e gli persegu\xEC in nome dell\u2019deologia comunista.</p>`;
});
var SecondaGuerraMondiale = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Seconda_guerra_mondiale
});
var Genocidio_degli_Armeni = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Cose generali:</h2>
<p>Quando parliamo di genocidio intendiamo la <code>morte di un gruppo consistente di persone</code>. Quello degli Armeni \xE8 meno conosciuto di quello degli ebrei in quanto i primi non hanno avuto la possibilit\xE0 di far sentire la loro voce, a causa dell\u2019oppressione turca. La Turchia infatti ancora oggi dichiara di non aver fatto nessun genocidio. \xC8 stato il primo genocidio del 1900. Gli armeni erano <code>cristiani</code>, profondamente <code>colti</code> e esperti nella conservazione dei manoscritti antichi.</p>
<h2>Contesto storico:</h2>
<p>Con la nascita della Repubblica turca,i <code>giovani turchi</code>, ufficiali dell\u2019esercito, decidono di sterminare la popolazione, in quanto credevano fossero alleati con i Russi. Il <code>24 aprile del 1915</code> dai turchi part\xEC l\u2019ordine di operare lo sterminio, ci furono arresti, deportazioni, crocifissioni, tra 1 e 1.5 milioni di morti. Per la prima volta si fece ampio uso di telegrafo e ferrovia, furono utilizzti i campi di concentramento.</p>`;
});
var GenocidioDegliArmeni = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Genocidio_degli_Armeni
});
var Preparativi_di_guerra = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Situazione della Spagna:</h2>
<p>La Spagna negli anni <code>1920-1930</code> \xE8 sottoposta alla dittatura del generale <code>Primo de Rivera</code>, nel <code>1931</code> viene fatto dimettere e la Spagna diventa una repubblica democratica. La coalizione di social-democratici - comunisti - repubblicani vince le elezioni del 1936, e la repubblica si struttura maggiormente, con un potere pi\xF9 stabile. Come si era verificato in Italia e Germania anche in Spagna nasce un movimento di destra, la <code>falange</code>, gestito dal generale <code>Francisco Franco</code>, il quale grazie alla forza dell\u2019esercito vuole ottenere il potere. In Spagna, dal 1936 al 1939 scoppia  quindi una <code>guerra civile</code>. Fracisco Franco ha l\u2019appoggio di Mussolini e Hitler (sono tutti movimenti di destra), mentre il governo era appoggiato dall\u2019URSS. Nel <code>1939</code> Francisco Franco vince la guerra civile e governer\xE0 la Spagna. La governer\xE0 fino al 1975, \xE8 la dittatura di destra pi\xF9 lunga della storia. Dopo questo torna la dinastia dei Borboni. </p>
<h2>Situazione tra Germania e Italia:</h2>
<p>Per realizzare il suoi obbiettivi (Spazio vitale e riunire i territori di lingua tedesca) la Germania aveva una <code>politica estera profondamente aggressiva</code>. Aumenta quindi le spese militari, favorendo il riarmo e crea la politica delle alleanze. Nel <code>1936</code> viene stipulato l\u2019<code>Asse Roma-Berlino</code>, che decreta l\u2019alleanza tra Mussolini e Hitler, successivamente diventer\xE0 Roma-Berlino-Tokyo(1939). Nel 1937 Mussolini \xE8 invitato da Hitler in Germania, che lo porta ad allearsi perch\xE9 \xE8 un vincente, Hitler faceva sentire Mussolini quasi un re di Roma. La popolazione tedesca applaud\xEC nello stadio olimpico di Berlino i due dittatori. La Germania organizza nel 1936 le olmpiadi a Berlino, per dimostrare la grandezza della razza ariana. In realt\xE0 quando Jesse Owens Vinse le 4 medaglie tra cui l\u2019oro nei 100m Hitler non gli diede la mano. Nel <code>1938</code> Hitler viene accolto da Mussolini e il re a Roma. Da questo momento Italia e Germania sono profondamente alleate, nello stesso anno in piazza unit\xE0 d\u2019Italia a Trieste Mussolini dichiara che anche l\u2019Italia avr\xE0 le leggi razziali, basate sulle leggi di Norimberga emanate da Hitler nel 1935. Quando l\u2019Italia emana le leggi razziali il consenso a Mussolini ebbe delle criticit\xE0 anche gli uomini a lui fedeli iniziarono a distaccarsi, tra cui Galeazzo Ciano, ministro degli esteri e marito della figlia Edda.</p>
<h2>Situazione generale:</h2>
<p>In Germania e Italia ci sono due <code>poteri di destra</code>, in Russia c\u2019\xE8 la Sinistra, comunque <code>totalitaria</code>.
In Inghilterra c\u2019era il deputato <code>churchill</code>, ai governanti di Francia e Inghilterra era chiaro quello che Hitler avrebbe voluto fare. La Germania voleva il territorio della Polonia, Hitler quindi doveva assicurarsi che la Russia rimanesse neutrale, non intervendo a bloccare la sua avanzata verso est. Firma nel 1939 con l\u2019URSS il <code>patto Molotov-Ribbentrop</code>, dal nome dei due firmatari Russi, per il quale l\u2019URSS non sarebbe intervenuta in guerra nel caso in cui la Germania avesse invaso la Polonia, con una durata di 10 anni.</p>
<p>Tutto l\u2019est Europa, i territori nati dopo la disgregazione dell\u2019URSS, l\u2019impero Austro Ungarico e l\u2019impero Ottomano, era sottoposto a regimi dittatoriali.</p>`;
});
var PreparativiDiGuerra = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Preparativi_di_guerra
});
var Prima_guerra_mondiale = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Cose generali:</h2>
<p>Detta anche grande guerra, inizi\xF2 nel <code>giugno 1914</code>.</p>
<p>Un\u2019auto percorre il centro di Sarajevo, capitale della Bosnia, Sarajevo apparteneva all\u2019impero austro-ungarico. In auto c\u2019era l\u2019<code>arciduca d&#39;Austria Francesco Ferdinando</code>, erede al trono degli Asburgo con la moglie. Erano in visita in Bosnia. L\u2019arciduca si era lamentato per le scarse misure di sicurezza, mentre l\u2019auto percorre la strada uno studente Serbo spara sulla macchina, e prima l\u2019arciduca e poi la moglie muoiono. </p>
<p>Francesco Giuseppe(imperatore d\u2019Austria) ritenne la <code>Serbia colpevole del crimine</code>, quindi Guglielmo II (Germania) dichiara guerra alla Serbia. Nel 1914 quindi scatta il sistema delle alleanze, la Germania affiancata dall\u2019Austria dichiara guerra alla Serbia, e successivamente a Russia e Francia. L\u2019Inghilterra, come alleata, entra in guerra a fianco della Francia.</p>
<p>Nell\u2019agosto del 1914 scoppia ufficialmente la I Guerra mondiale che opponeva la triplice alleanza e triplice Intesa. Inizialmente gli stati non erano consapevoli del disastro al quale l\u2019europa stava andando incontro, si pensava sarebbe stata una guerra lampo, e le decisioni venivano prese con superficialit\xE0. Gli stati si dimostrarono <code>incapaci di dominare gli eventi</code>, i soldati di entrambi gli schieramenti erano convinti che era il momento per dimostrare la loro forza e coraggio. In Europa si diffuse un <code>forte senso patriotico</code> per cui tutti ritenevano che la guerra avrebbe potuto essere il momento nel quale gli stati avrebbero potuto dimostrare la loro potenza.</p>
<h3>1914-1916 sul fronte Occidentale:</h3>
<p><code>Germania e Austria invadono il Belgio</code> per combattere l\u2019esercito Francese, e arrivano non lontano da Parigi, sul fiume Marna (1914).
La Francia aveva costruito ai confini con la Germania la \u201D<code>linea Maginot</code>\u201D una linea fortificata per bloccare l\u2019avanzata della Germania.
L\u2019Inghilterra adott\xE0 una strategia di <code>bloccco navale</code>, per la quale blocca i commerci di importazione della Germania.</p>
<h3>1914 sul fronte Orientale:</h3>
<p>Germania e Austria-Ungheria cercano di <code>addentrarsi in terrritorio russo</code>, e l\u2019avanzata si blocca in Polonia, ai <code>laghi Masuri</code>. L\u2019esercito Tedesco aveva come obbiettivo quello di arrivare in Russia, e conquistare i territori dell\u2019est (Pengermanesimo). </p>
<p>Alla fine del 1915 <code>la guerra si blocca con un nulla di fatto</code>, non ci sono n\xE8 vinti, n\xE8 vincitori, e da entrambe le parti la guerra \xE8 in posizione di stallo. Gli allati riescono a bloccare l\u2019avanzata del nemico. </p>
<blockquote><p><strong>Guerra di trincea:</strong> la prima guerra mondiale ha avuto una sua particolare modalit\xE0 di gestione della guerra. Dall\u2019epoca dei romani nei diversi momenti la guerra veniva fatta con le imbarcazioni, il cavallo\u2026 La prima guerra modiale \xE8 un <code>guerra di posizione combattuta nelle trincee</code>. Ad eccezione dei primi due anni, dove gli eserciti avanzarono in territorio nemico, la guerra diventa di posizione o tricea. I rispettivi eserciti facevno la guerra da fermi, scavavano fossati lunghissimi(trincee) e i soldati rimanevano li e aspettavano o organizzavano l\u2019attacco nemico.  </p></blockquote>
<p>I soldati Italiani scavavano tre linee. Nella prima linea c\u2019erano i soldati che dovevano sferrare l\u2019attacco, e difendersi con le mitragliatrici.
La prima mitragliatrice fu fatta in Fiat. Le industrie meccaniche erano industrie che lavoravano per la guerra, per la conversione delle industrie da civile a militare.
I soldati Italiani avevano una divisa, i pantaloni e le fascie sui piedi. I soldati quando dovevano dormire, mangiare o cambiarsi andavano nella seconda linea, dove era possibile fare delle brevi pause, o nella terza quando le pause erano pi\xF9 lunghe. I soldati scrivevano, ma c\u2019era la censura. Facevano anche lavori manuali, lavoravano il legno e sistemavano le armi. Nella terza linea c\u2019erano spesso i feriti leggeri, quelli gravi morivano. Oltre alle tre linee c\u2019era la base medica e le cucine. I soldati mangiavano una volta al giorno. Gli adetti alla cucina con i muli si recavano lugo le linee di trincea. Nel momento in cui la guerra si stava prolungando anche il morale e la visione dei soldati sulla guerra cambiava. Erano molto meno incentivati.</p>
<p>Nel corso della guerra gli eserciti ebbero armi sempre pi\xF9 letali, dalla baionetta alle mitragliatrici e i cannoni. Molti rimanevano invischiati nei fili spinati. In seguito si cominciano ad usare i <code>gas</code>, (nella seconda guerra mondiale il Zilcon B), usano il yprite, dal Belgio. Era un gas asfissiante, urticante, le persone manifestavano reazioni allergiche e diventavano ciechi. Furono create della maschere a gas(prima i francesi e inglesi, poi gli italiani).</p>
<p>Nel 1914 entr\xF2 in guerra anche l\u2019<code>impero Turco Ottomano</code> a fianco dell\u2019Austria e Germania, perch\xE8 aveva tutti gli interessi a scontrarsi con la Russia, e voleva mantenere alcuni territori che erano colonie contese dall\u2019inghilterra. Gli inglesi e i francesi non riuscivano ad impiegare le truppe nel fronte della Germania, dell\u2019Austria e dell\u2019impero Ottomano, quindi mandavano dei colonelli(Lawrence d\u2019Arabia), i quali facevano leva nella popolazione e i civili diventavano militari. </p>
<h3>Italia:</h3>
<p>L\u2019Italia era alleata alla Germania e Austria-Ungheria, ma non entr\xF2 in guerra subito, poich\xE8 la Germania dichiar\xF2 guerra alla Serbia senza aver consultato l\u2019Italia, e l\u2019alleanza aveva uno scopo puramente difensivo. <code>L&#39;Italia si dichiara quindi neutrale</code>. All\u2019interno dello stato Italiano nasce un\u2019enorme discussione riguardo all\u2019intervento in guerra. Era re Vittorio Emanuele III e questo dibattito all\u2019interno del parlamento, avvalorato da forte richieste dagli alleati, port\xF2 ad una decisione: Il re e il primo ministro firmano il <code>patto di Londra (1915)</code>, per il quale entrano in guerra a fianco dell\u2019inghilterra, Francia e Russia. Era un patto segreto perch\xE8 il re e il primo ministro non coinvolsero il parlamento. </p>
<p>L\u2019Italia si era sentita in primo luogo ingannata dalla Germania, e non aveva interesse ad entrare a fianco dell\u2019Austria e Germania, bens\xEC contro, per acquisire i territori irredenti(Friuli-Trentino), che erano occupati dall\u2019Austria-Ungheria.
Il parlamento come l\u2019opinione pubblica era diviso al suo interno tra neutralisti (maggioranza) e interventisti. Non avevano per\xF2 le stesse motivazioni.</p>
<p><strong>Erano neutralisti:</strong></p>
<ul><li><code>I liberali di Giolitti</code><ul><li>Ritenevano che l\u2019italia non fosse preparata ad affrontare un conflitto, pensavano che anche senza intervenirte in guerra prima o poi avrebbero ottenuto i territori irredenti.</li></ul></li>
<li><code>I cattolici</code><ul><li>Era contro la loro visione del mondo. La guerra per il mondo cattolico era un assurda strage.</li></ul></li>
<li><code>Socialisti</code><ul><li>Ritenevano che in guerra va la povera gente/ceto basso. La guerra diventa per la popolazione un ulteriore impoverimento. I contadini che vanno in guerra lasciavano le terre incolte.</li></ul></li></ul>
<p><strong>Gli interventisti:</strong></p>
<ul><li>Il <code>corriere della sera</code><ul><li>Oggi \xE8 un giornale del centro. </li></ul></li>
<li><code>Intellettuali</code> con posizioni moderate (centro).</li>
<li><code>Casa editrice Einaudi</code></li>
<li><code>I futuristi</code><ul><li>Movimento artistico, sopratutto pittori. Adoravano la modernit\xE0, dipingere le stazioni, macchine etc. Avevano scritto un manifesto nel quale elencavano i punti del loro programma.\u201Dla guerra \xE8 l\u2019unica igiene del mondo\u201D. </li></ul></li>
<li><code>I nazionalisti</code><ul><li>Per loro la guerra era un modo per dimostrare la propria potenza. </li></ul></li>
<li><code>I grandi industriali</code><ul><li>Con un economia di guerra e un sistema militare potevano produrre armi.</li></ul></li>
<li><code>Benito Mussolini</code><ul><li>Era direttore del \u201CL\u2019Avanti\u201D, un giornale socialista. Era un uomo con formazione di sinistra. Quando i socialisti hanno deciso per il non intervento fu cacciato dal giornale, e poi dal partito socialista. Da quel momento manifest\xF2 apertamente le sue posizioni nazionaliste.</li></ul></li>
<li><code>Gabriele d&#39;Annunzio</code><ul><li>\xC8 un poeta/intellettuale, nato a Pescara, si era costruito una mega villa al lago di Garda, che aveva chiamato \u201Cil vittoriale degli Italiani\u201D. La parola \u201CVittoria\u201D era un termine che andadva di moda durante la guerra. Era fortemente nazionalista, un megalomane, e guerrafondaio. Diventer\xE0 filofascista. D\u2019Annunzio ha fatto anche azioni militari per incitare gli Italiani a ribellarsi ed essere nazionalisti. </li></ul></li></ul>
<p>L\u2019Italia nel <code>Maggio 1915 entra in guerra</code>, l\u2019esercito era guidato dal generale <code>Luigi Cadorna</code>, che si occup\xF2 di costruire il fronte Italiano. Cadorna era un piemontese, apparteneva quindi ai liberali come Cavour e Giolitti che avevano fatto la storia d\u2019Italia. Era molto severo nei confronti del suo esercito, infatti era convinto che l\u2019esercito fosse carne da cannone. Non aveva nessuna attenzione nei confronti dei militari, e coloro che cercavano di fuggire venivano uccisi come disertori. L\u2019esercito era disposto nel fronte italiano, lungo 650km, un fronte che andava dal trentino al Friuli Venezia Giulia. Era una trincea che separava l\u2019Italia dall\u2019impero, era costruito in zone impervie(montagne) (Trento, rovereto, monte Grappa, Asiago, Belluno, Feltre, Vittorio veneto, etc. fino al carso(catena montuosa di roccia carsica, quindi una roccia che si erode facilmente. Ci sono tante grotte, perch\xE8 l\u2019acqua erode la roccia)). Alcune di queste zone non erano ben difese, quindi era facile sfondare la trincea. Truppe erano posizionate nei grandi fiumi(Piave, Isonzo(furono combattute 11 battaglie sull\u2019isonzo)). </p>
<h2>1916 sul fronte occidentale:</h2>
<p>L\u2019esercito tedesco si addentra nel territorio francese per arrivare a Parigi. Scoppia la <code>battaglia di Verdun</code> ne 1916 (dura 4 mesi), una carneficina, ma i francesi riescono a fermare i Tedeschi. A nord di Parigi c\u2019\xE8 la <code>battaglia delle somme</code>, nel 1916, combattuta tra inglesi e tedeschi in territorio francese.
La Germania avvia una guerra sottomarina contro l\u2019Inghilterra, si scontrano nel mare del nord (<code>Battaglia dello Jutland</code>). l\u2019Inghilterra riusc\xEC a bloccare moltissime navi di approvvigionamento (vittoria sul piano navale inglese).</p>
<h2>1917 sul fronte Orientale:</h2>
<p>La russia riesce a bloccare l\u2019avanzata tedesca, ma nel 1917 si ritira dalla guerra. Erano scoppiate le <code>rivoluzioni di Febbraio e Ottobre</code>. Si dichiara quindi sconfitta, e perder\xE0 diversi territori.</p>
<h2>1916 in Italia:</h2>
<p>L\u2019italia subisce la <code>spedizione punitiva dell&#39;Austria-Ungheria</code>, che bombarda la zona del trentino. L\u2019esercito Italiano riesce a bloccare l\u2019avanzata, e scoppiano diverse battaglie sull\u2019Isonzo, sul monte Grappa, l\u2019altopiano di Asiago e il Carso. A fianco dell\u2019esercito austriaco si unisce quello tedesco, che ritorna dal fronte orientale. Per l\u2019Italia il 1917 \xE8 un anno terribile, perch\xE8 c\u2019\xE8 <code>Caporetto</code>, una sconfitta pesantissima. \xC8 una cittadina della Slovenia, dove l\u2019esercito fu colto alla sprovvista, in quanto le trincee erano state bombardate furono sganciate le granate di gas. Il generale cadorna fu sostituito da <code>Armando Diaz</code>.</p>
<h2>Intervento degli USA:</h2>
<p>Non si erano mai occupati di quello che succedeva fuori dall\u2019America, entrano in guerra per <code>garantire la pace e l&#39;autodeterminazione dei popoli</code>. In realt\xE0 vogliono la pace come condizione per il commercio. Intervengono come <code>paese Associato</code>, non Alleato. Gli USA entrano in guerra nel 1915, in seguito all\u2019affondamento del transatlantico \u201CLusitania\u201D da parte di un U-Boat tedesco.</p>
<h2>Conclusione della guerra:</h2>
<p>Diaz diede una nuova motivazione ai soldati, che vinsero la <code>battaglia di Vittorio Veneto</code>. Il <code>4 novembre 1918 finisce la guerra per l&#39;Italia</code>, con la firma dell\u2019armistizio. I tedeschi sono costretti a ritirarsi dalla Francia, e l\u2019imperatore tedesco si nasconde, viste le sollecitazioni della flotta militare. La Germania diventa una Repubblica, la <code>repubblica di Weimar</code>.</p>
<h2>Primo dopoguerra</h2>
<p>Con la fine della prima guerra mondiale spariscono dalla scena europea i quattro imperi: Tedesco, austro-ungarico, Prusso e Ottomano.
Si tiene la <strong>conferenza di Parigi</strong>, a Versailles, per decidere le sorti dei paesi. All\u2019interno della conferenza molti stati volevano colpire serveramente la causa della guerra, invece gli USA dovevano ripristinare la pace e far rispettare i <code>14 punti di Wilson</code>. In realt\xE0 i punti non furono seguiti e la Germania fu colpita come causa della prima guerra mondiale. i 14 punti derivano da un discorso che il presidente aveva fatto alla nazione nel gennaio 1918. Tra questi ci sono:</p>
<ul><li><code>Promuovere la diplomazia</code>, abolendo la diplomazia segreta.</li>
<li><code>Libert\xE0 dei mari</code>, per la quale gli stati possono navigare rispettando un tot miglia marine.</li>
<li><code>Riduzione degli armamenti</code>, riconvertendo le industrie.</li>
<li><code>Autodeterminazione dei popoli</code>, i popoli hanno il diritto di decidere da soli i confini e la strategia militare. </li></ul>
<p>Fu creata la <code>societ\xE0 delle nazioni</code>, con sede a Ginevra. \xC8 un organizzazione il cui scopo \xE8 il rispetto dei principi. Dopo la seconda guerra mondiale si chiamer\xE0 ONU. </p>
<h3>Germania:</h3>
<p>Le viene tolto il <code>corridoio di Danzica</code>, vicino alla Polonia, per rendere pi\xF9 difficile un\u2019ipotetica espansione verso est. Fu privata di alcune <code>zone minerarie</code>, che passano sotto il controllo dalla Francia, perde le <code>colonie</code>, in particolare in Africa e deve restituire l\u2019<code>Alsazia e la Lorena</code> alla Francia. Deve inoltre <code>restituire i danni di guerra</code> in termini monetari ai paesi vincitori. L\u2019entit\xE0 dei danni portarono una enorme svalutazione del marco.</p>
<h3>Austria-Ungheria:</h3>
<p>Da parte dei suoi territori nascono la Polonia, Boemia, Cecoslovacchia etc. Viene privata del <code>Trentino, Friuli e Estria</code>, che vengono assegnati all\u2019Italia.</p>
<h3>Russia:</h3>
<p>Esce dalla guerra firando il trattato di <code>Brest-Litovsk</code> con la Germania, deve pagare le <code>indennit\xE0 di guerra</code> a Germania e Austria-Ungheria. Perde Estonia, Lituania, Ukraina etc, i giacimenti di carbone e ferro. Il controllo di alcune fabbriche pass\xF2 alla Germania.</p>
<h3>Impero ottomanio:</h3>
<p>Perse molti possedimenti in medio oriente e Irack.  Siria e Libia diventano autonomi, altri stati vengono controllati dai vincitori. Nasce la Turchia, che \xE8 quello che rimane del grande impero ottomano. </p>
<h3>Italia:</h3>
<p>Vince la guerra, ma viene considerata un vittoria mutilata, perch\xE8 non avr\xE0 tutti i territori promessi con il patto di Londra.</p>`;
});
var PrimaGuerraMondiale = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Prima_guerra_mondiale
});
var Italia_repubblicana = create_ssr_component(($$result, $$props, $$bindings, slots) => {
<<<<<<< HEAD
  return `<p>nel 1919 Don Luigi Sturzo (prete siciliano) crea il partito popolare. dopo la seconda guerra mondiale diventa democrazia cristiana(partito di
centro). L\u2019Italia dopo la seconda guerra modiale ha come obbiettivo la ricostruzione, il 2 Giugno 1946 viene emanato il referendum. i padri
costituenti nel caso in cui l\u2019italia sarebbe diventata repubblica avrebbero dovuto scrivere la nuova costituzione. Il 2 Giugno 1946 gli
Italiani votarono per la priva volta con il suffragio universale. Non tutte le donne votarono e capirono cosa votavano, l\u2019Italia vot\xF2 per la
repubblica, doevnne una repubblica. il Sud era a favore della monarchia, il nord della repubblica. il 2 Giugno 1946 gli italiani decidono per
la repubblica. Le differenze dei voti dimostrano che nord, centro e sud dall\u2019epoca dell\u2019impero erano realt\xE0 ancora divise. nel momento in cui
si sceglie la repubblica viene covocata l\u2019asseblea costituente e scritta la costituzione Italiana. coloro che scrissero la costituzione, i
padri costituenti, appanrtengono all\u2019assemblea costituente, erano 75 e venivano dalle varie realt\xE0. la costituzione italiana \xE8 uno dei
documenti migliori a livello globale, \xE8 scritta in modo sintentico, puntuale e coiciso. dalla costituzione italiana derivano tutte le norme
dello stato. </p>
=======
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Partiti:</h2>
<p>Nel 1919 Don Luigi Sturzo (prete siciliano) crea il partito popolare. Dopo la seconda guerra mondiale diventa democrazia cristiana(partito di centro). L\u2019Italia dopo la seconda guerra modiale ha come obbiettivo la ricostruzione, il 2 Giugno 1946 viene emanato il referendum. I padri costituenti nel caso in cui l\u2019italia sarebbe diventata repubblica avrebbero dovuto scrivere la nuova costituzione. Il 2 Giugno 1946 gli Italiani votarono per la priva volta con il suffragio universale. Non tutte le donne votarono e capirono cosa votavano, l\u2019Italia vot\xF2 per la repubblica, vennero convocati i 75 delll\u2019assemblea costituente che scrissero la costituzione. </p>
>>>>>>> 9162d60f6603037c33acdde074ee19d81d459ff2
<p>I partiti italiani cambiarono dopo la secoda guerra mondiale. i pi\xF9 imortanti erano </p>
<ul><li>Democrazia cristiana di centro</li>
<li>socialista e comunista di sinistra</li>
<li>liberale e d\u2019azione (fascista) destra</li></ul>
<<<<<<< HEAD
<p>nel 1938 furono indrette nuove elezioni e vince il partito del centro. la presenza della chiesa ha sicuramente contribuito a far l\u2019italia in
questo modo. l\u2019Italia era finoamericana e anticomunista. nel 1950 per sostenere il sud fu istituita la tassa del mezzogiorno. erano soldi che
lo stato teneva da parte per garantire la ricostruzione del sud. anche oggi il PNRR ha una somma di denaro prerogativa del sud. il piano
nazionale resistenza resiliensa. negli anni 50-60 ci sono gli anni del miracolo economico, l\u2019Italia dopo la SGM \xE8 stata ricostruita,
(scheda\u2026) negli anni 60 la politica della DC era entrata in crisi, i partiti del centro avevano cercato collaborazioni con la sinistra. gli
uomini di riferimento furono Aldo Moro, e ?Enrico Bellinguer? del partito comunista, sardo morto di infarto durante un comizio a padova. Aldo
Moro \xE8 stato ucciso dalle brigate rosse. volevano entrambi realizzare il compromesso storico, ossia non ci fosse sempre il centro al potere,
ma ci fosse un\u2019alternanza, per favorire la dialettica tra le parti diverse. Andreotti fece di tutto perch\xE8 il compromesso storico non si
realizzasse. in questii anni c\u2019\xE8 anche il terrorismo, gli anni di piombo. - il terrorismo nero \xE8 di estrema destra, aveva come obbiettivo
sovvertire l\u2019ordinamento dello stato - il terrorismo rosso voleva svorretire\u2026 per un governo di sinistra.</p>
<p>!ordine nuovo! (chiedere gli appunti)</p>
<p>avvenimenti: bombe alla stazoone di milano, attentato ai treni, strage a piazza fontana (MI), fu fatta esplodere una boba nell\u2019atrio della
banca. attentato a gioia tauro, strage a Piazza della loggia, strage dell\u2019italicus, strage della stazione di bologna, il terrorismo rosso ha
il rapimento e assassinio di Aldo moro. lui fu abbandonato dagli uomini della DC.</p>
<p>la prima repubblica era nata nel 1946, quando cade il muro e finisce l\u2019urss anche la repubblica centrista filoamericana finisce, e inizia la
seconda repubblica. cambia anche l\u2019organizzazione dei partiti, nascono nuovi partiti e le coalizzioni, nasce la Lega Nord nel 1991 di Lega
Bossi, nel 1994 Forza Italia e alle elezioni si presentano due coalizioni, i progressisti(centro sx) e i conservatori(centro dx). la morte di
Falcone e Borsellino e il sistema tangentopoli!</p>`;
=======
<p>nel 1938 furono indrette nuove elezioni e vince il partito del centro. la presenza della chiesa ha sicuramente contribuito a far l\u2019italia in questo modo. l\u2019Italia era finoamericana e anticomunista. nel 1950 per sostenere il sud fu istituita la tassa del mezzogiorno. erano soldi che lo stato teneva da parte per garantire la ricostruzione del sud. anche oggi il PNRR ha una somma di denaro prerogativa del sud. il piano nazionale resistenza resiliensa. negli anni 50-60 ci sono gli anni del miracolo economico, l\u2019Italia dopo la SGM \xE8 stata ricostruita, (scheda\u2026) negli anni 60 la politica della DC era entrata in crisi, i partiti del centro avevano cercato collaborazioni con la sinistra. gli uomini di riferimento furono Aldo Moro, e ?Enrico Bellinguer? del partito comunista, sardo morto di infarto durante un comizio a padova. Aldo Moro \xE8 stato ucciso dalle brigate rosse. volevano entrambi realizzare il compromesso storico, ossia non ci fosse sempre il centro al potere,
ma ci fosse un\u2019alternanza, per favorire la dialettica tra le parti diverse. Andreotti fece di tutto perch\xE8 il compromesso storico non si realizzasse. in questii anni c\u2019\xE8 anche il terrorismo, gli anni di piombo. - il terrorismo nero \xE8 di estrema destra, aveva come obbiettivo sovvertire l\u2019ordinamento dello stato - il terrorismo rosso voleva svorretire\u2026 per un governo di sinistra.</p>
<p>!ordine nuovo! (chiedere gli appunti)</p>
<p>avvenimenti: bombe alla stazoone di milano, attentato ai treni, strage a piazza fontana (MI), fu fatta esplodere una boba nell\u2019atrio della banca. attentato a gioia tauro, strage a Piazza della loggia, strage dell\u2019italicus, strage della stazione di bologna, il terrorismo rosso ha il rapimento e assassinio di Aldo moro. lui fu abbandonato dagli uomini della DC.</p>
<p>la prima repubblica era nata nel 1946, quando cade il muro e finisce l\u2019urss anche la repubblica centrista filoamericana finisce, e inizia la seconda repubblica. cambia anche l\u2019organizzazione dei partiti, nascono nuovi partiti e le coalizzioni, nasce la Lega Nord nel 1991 di Lega Bossi, nel 1994 Forza Italia e alle elezioni si presentano due coalizioni, i progressisti(centro sx) e i conservatori(centro dx). la morte di Falcone e Borsellino e il sistema tangentopoli!</p>`;
>>>>>>> 9162d60f6603037c33acdde074ee19d81d459ff2
});
var ItaliaRepubblicana = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Italia_repubblicana
});
var La_decolonizzazione = create_ssr_component(($$result, $$props, $$bindings, slots) => {
<<<<<<< HEAD
  return `<p>I paesi avanzati decisero di spartirsi il mondo. SDi \xE8 creata una configurazione geopolitica che, fino al 1950, quando le colonie sono
diventate indipendenti. Cambiano i rapporti e i flussi della popolazione. Si creano quindi pi\xF9 stati, gli scambi sono regolati dagli sati
stessi, che sono poveri e arretrati, dittatoriali e deboli. queste dittature. HA quindi un aspetto positivo e uno negativo. \xE8 iniziato un
nuovo processo di neocolonialismo, questi paesi infatti comunque hanno avuto sudditanza economica, quindi una dipendenza economico-finanziaria
in particolare dagli USA. </p>
<p>CHIEDERE TUTTI GLI APPUNTI</p>
<p>\xE8 stata creata una forte forma di neocoloziolismo, sotto il nome di multinazionali e aziende che hanno il controllo degli stati che risultano liberi.</p>`;
=======
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Decolonizzazione:</h2>
<p>Nel 1950 inizi\xF2 il processo di <code>decolonizzazione</code>, le colonie iniziarono a diventare indipendenti. C\u2019\xE8 un cambiamento della geopolitica del mondo. Nascono pi\xF9 stati, i quali sono arretrati, deboli, poveri e solitamente governati da dittatori (i pi\xF9 ricchi dello stato). Queste dittature militari creano immigrazione a causa dell\u2019instabilit\xE0, assenza di garanzie da parte dello stato e l\u2019assenza di democrazia.
La decolonizzazione ha quindi aspetti positivi e negativi</p>
<h2>Neocolonialismo:</h2>
<p>Quando questi paesi hanno ottenuto la liberazione, indirettamente, \xE8 iniziato un processo di <code>neocolonialismo</code>, in quanto i paesi nati avevano una dipendenza economico-finanziaria. Si parla delle <code>multinazionali</code> e delle esportazione di materie prime (diamanti, minerali, etc.)</p>`;
>>>>>>> 9162d60f6603037c33acdde074ee19d81d459ff2
});
var LaDecolonizzazione = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": La_decolonizzazione
});
var L_etuC3uA0_di_Giolitti = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Caratteri generali:</h2>
<p>Giolitti \xE8 il primo ministro della <code>sinistra storica</code> (<code>1903-1914</code>), Piemontese (<code>Mondou\xEC</code>). Dal 1877 l\u2019Italia \xE8 governata dalla Sinistra storica, di cui Giolitti \xE8 uno dei massimi rappresentanti.
Il 1900 inizia con l\u2019uccisione del re Umberto I, al quale succede Vittorio Emanuele III, regnante per tutto il periodo delle due guerre mondiali. </p>
<p>Nel <code>1914</code> Giolitti rassegna le dimissioni.</p>
<h2>Politica interna:</h2>
<p>Quando sale al potere ci sono diverse agitazioni. Sono gli anni successivi alla II Riv. Industriale, e i lavoratori volevano delle garanzie. Nel <code>1904</code> c\u2019\xE8 il primo sciopero nazionale. Si relaziona quindi con i sindacati, che assieme ai lavoratori promuovono gli scioperi. Giolitti applica la politica del <code>trasformismo, o doppio volto</code>, quindi lascia che i lavoratori scioperino, con la consapevolezza che si sarebbero conclusi. In politica faceva accordi con alcuni, ma anche con chi diceva il contrario, non prendeva posizione, e cercava di andare d\u2019accordo con tutti e nessuno. Faceva questo per\xF2 non per interessi personali, ma per garantire la stabilit\xE0 allo stato. </p>
<p>In questi anni nascono i sindacati (CGDL, Confindustria, Confcommercio\u2026), che da questo momento hanno un ruolo importantissimo.
Essendo favorevole all\u2019attivit\xE0 di riforma fece diverse riforme sociali:</p>
<ul><li>Riforma sulla <code>riduzione delle spese militari</code>.</li>
<li>Legge per la <code>cura e prevenzione della pellagra</code> e altre malattie.</li>
<li>Legge sul <code>lavoro</code>, che regolamentava l\u2019orario di lavoro di donne, uomini e bambini. Bisognava avere almeno 12 anni per poter lavorare. </li>
<li>Legge sulla <code>maternit\xE0</code>: si poteva non lavorare nei primi mesi di vita del bambino.</li>
<li><code>Giorno di riposo settimanale</code></li>
<li>Le <code>scuole diventantano statali</code>, per diminuire l\u2019analfabetismo le assunzioni del personale e gli edifici erano a carico dello stato.</li>
<li>Riforma sul <code>suffragio universale maschile</code>: Gli uomini maschi che sapevano leggere e scrivere potevano votare. Altrimenti dovevi aver fatto il servizio militare o avere almeno 30 anni</li>
<li><code>Indennit\xE0 parlamentare</code>: chi era eletto in parlamento perepiva uno stipendio. </li></ul>
<blockquote><p><strong>Situazione del sud:</strong> Mentre il nord e centro Italia erano sviluppati e autonomi, dalla presenza dei comini/signorie, il sud era arretrato, perch\xE8 era territorio spagnolo (Federico II, Angioini, Aragonesi). Giolitti decide quindi di non investire al Sud, perch\xE8 troppo arretrato, e si concentra solo al nord e centro. Viene chiamato quindi <code>Ministro della malavita</code></p></blockquote>
<h2>Politica economica:</h2>
<p>Giolitti adott\xE0 una politica di tipo <code>nazionalistico</code>, ovvero incentiva e controlla le aziende interne. Nascono quindi grandi aziende di stato  (ferrovie). In un primo momento adotta una politica protezionista. In quegli anni nasce il <code>triangolo industriale Milano - Torino - Genova</code>, nasce Pirelli, Fiat a Torino, Officine Breda e Ansaldo, e l\u2019industria tessile di Prato. Per poter sviluppare l\u2019industria ha dovuto creare una <code>rete ferroviaria adatta</code>.</p>
<h2>Politica religiosa:</h2>
<p>Giolitti ha <code>ristabilito i rapporti con la chiesa</code> dopo il \u201Cnon exibit\u201D(1871). Non a caso dopo la prima guerra mondiale nasce il partito popolare, successivamente democrazia cristiana.
Il papa emana nel <code>1891</code> la <code>Rerum Novarum</code>, ovvero \u201Csulle cose nuove\u201D, ovvero trasformare le decisioni pregresse in cose nuove. \xC8 l\u2019enciclica di nuova apertura della chiesa nei cofronti dello stato italiano.
Solo con i patti lateranensi(1929), firmati da Mussolini, si definir\xE0 una regola tra stato e chiesa. </p>
<h2>Politica estera</h2>
<p>All\u2019epoca della destra storica, negli anni dell\u2019imperialismo (terza colonizzaazione) Crispi conquista l\u2019Eritrea e la Somalia. Mussolini conquister\xE0 poi l\u2019Etiopia. nel <code>1912</code> Giolitti conquista la Libia, per allargare i territori e trovare nuovi spazi. La conquista della Libia non ha portato particolarei vantaggi, infatti viene detta dagli storici la \u201Cconquista di uno <code>scatolone di sabbia</code>\u201C. </p>`;
});
var LEt_DiGiolitti = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": L_etuC3uA0_di_Giolitti
});
var Rivoluzione_Russa = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Caratteri generali:</h2>
<p>La Russia nella seconda met\xE0 dell\u2019Ottocento:</p>
<ul><li>Era un <code>territorio vastissimo</code>, che andava dalla Polonia all\u2019oceano pacifico, e i vari popoli avevano fisionomie diverse.</li>
<li>La capitale era stata collocata a <code>San Pietroburgo</code>, che \xE8 la parte pi\xF9 vicina al mondo occidentale, e quindi pi\xF9 avanzata. </li>
<li>C\u2019era la <code>dinastia dei Romanov</code>, in particolare Nicola Secondo. </li>
<li>La <code>servit\xF9 della gleba</code> fu abbandonata nel 1860.</li>
<li>La forma di governo era l\u2019<code>impero</code>, con lo zar che governava secondo le regole dell\u2019assolutismo. </li>
<li>C\u2019era la <code>Duma</code> (parlamento), era presente dal 1905, ma lo zar spesso bypassava le decisioni del parlamento. </li>
<li>Fino ai primi anni del 1900 la Russia <code>non aveva vissuto le riv. Industriali</code>, aveva un economia prevalentemente agricola, e un inizio di processo industriale c\u2019era solo nelle zone pi\xF9 ad ovest.</li></ul>
<p>La Russia <code>esce sconfitta dalla prima guerra mondiale</code>, a causa sopratutto delle rivoluzioni di febbraio e ottobre 1917. Era impossibile gestire le forze militari, gli approvvigionamenti etc nel fronte interno ed esterno, quindi decide di uscire dalla guerra. Firma la <code>pace di Brest-Litowsky</code>, per la quale dovr\xE0 pagare ai tedeschi moltissimi soldi come risarcimento di guerra, rinunciare alla Finlandia, Polonia, Paesi Baltici e l\u2019Ukraina. </p>
<h2>Rivoluzione agraria</h2>
<p>Nel <code>1905</code> i contadini si ribellano alle condizioni in cui vivono e devono lavorare. \xC8 una <code>rivoluzione agraria</code>, chiedono una garanzia dei diritti e dei doveri e una pi\xF9 equa distribuzione dei terreni. Questa rivoluzione ha un esito positivo, perch\xE8 ricevono pi\xF9 terre, ma non hanno gli strumenti per lavorarle,  quindi nei fatti la rivoluzione del 1905 non porta a nulla. </p>
<h2>Rivoluzione di Febbraio:</h2>
<p>A <code>Febbraio del 1917</code> nelle fabbriche di Pietrogrado e Mosca si impone uno sciopero Generale. Gli operai si ritrovano nella <code>prospettiva Nevski</code>. L\u2019esercito, controllato dallo zar Nikola II, intervenne per bloccare lo sciopero, ma si rifiut\xF2 di sparare sui manifestanti, disubbidendo allo Zar. I manifestanti insieme ai soldati saccheggiarono l\u2019arsenale, cio\xE8 il luogo dove lo Zar a San Pietroburgo conservava le armi. Si parla di guerra civile perch\xE8 \xE8 una parte della popolazione contro lo Zar e i suoi fedeli.
Come esito questa rivoluzione ha la <code>nascita della repubblica</code>, quindi un esito positivo. Cade l\u2019impero e nasce la repubblica dove la Duma deve interfacciarsi con lo zar. Grazie a questa rivoluzione nascono i <code>Soviet</code>, ovvero organismi di autogoverno gestiti e voluti dal popolo. Nasce quindi un dualismo di potere, dove il popolo si da un suo autogoverno(soviet di Pietrogrado ) e il governo provvisorio(Zar). Nasce quindi la repubblica all\u2019interno del dualismo di potere. </p>
<p>I soviet sono un autogoverno, sono delle assemblee autonome, una sorta dei nostri sindacati, come i comuni del medioevo. Appartenevano ai Soviet non solo gli operai, ma anche i contadini. Diventano quindi la base e il fondamento della trasformazione della societ\xE0 russa da impero assolutista a repubblica democratica.
Volevano una societ\xE0 che tenesse conto i diritti del popolo. Riescono quindi a governare all\u2019interno del dualismo di potere.
Sembrava che la rivoluzione di febbraio in Russia dovesse limitarsi ad abolire l\u2019assolutismo dello zar, in nome di una maggiore garanzia dei diritti. In realt\xE0 si concretizz\xF2 come abolizione di un sistema.</p>
<p><code>Lenin</code>, che era un uomo politico favorevole alla repubblica arriv\xF2 a Pietrogrado dopo la rivoluzione del 1917. Era stato costretto a causa della rivoluzione del 1905 ad andare in Svizzera. Lenin era un esponente del <code>partito social democratico</code> Russo, un partito nato in Russia in questi anni, con una forte componente Marxista e comunista. All\u2019interno di questo partito c\u2019erano due fazioni: i <code>menscevichi</code> e <code>bolscevichi</code>. Lenin \xE8 Bolscevico. I Menscevichi volevano applicare le idee del comunismo di Marx in modo moderato, attraverso le riforme, I bonshevicchi invece volevano applicare le idee del comunismo con la Rivoluzione. Volevano eliminare l\u2019idea di stato liberale o borghese, e volevano applicare le condizioni della societ\xE0 comunista. Lenin scrisse un documento intitolato \u201D<code>le tesi di Aprile</code>\u201D dove enunci\xF2 i suoi principi:</p>
<ul><li>Costruire la <code>dittatura del proletariato</code>.<ul><li>Potere ai soviet</li>
<li>Terra a contadini</li></ul></li>
<li><code>Uscire dalla guerra</code></li></ul>
<h2>Dittatura del proletariato:</h2>
<p>Secondo la visione di Marx imprenditori e operai dovevano essere allo stesso livello, abolendo quindi la propriet\xE0 privata. In russia c\u2019erano pochissimi operai, quindi Lenin ha applicato le idee di Marx adattandole al contesto. Il proletariato \xE8 quindi composto da operai e contadini contro lo zar. \xC8 una ditttatura perch\xE8 era un <code>Governo senza dialettica</code>, senza controparte, dove il popolo avrebbe dovuto governare da solo. \xC8 un ossimoro, perch\xE8 il popolo si ribella allo zar, ma la sua modalit\xE0 di governare \xE8 la stessa dello zar. Secondo Marx al governo ci deve essere solo il proletariato.
Dittatura del proletariato non prevede il governo di uno solo, ma comunque il proletariato \xE8 formato da numerose persone. </p>
<p>La differenza tra democrazia e dittatura del proletariato \xE8 che non \xE8 prevista la controparte.
La democrazia nasce in Grecia, ad Atene, dove era il frutto di un rapporto dialettico tra coloro che potevano discutere al partenone. Se non c\u2019\xE8 rapporto dialettico non c\u2019\xE8 democrazia. </p>
<h2>Rivoluzione di Ottobre:</h2>
<p>Lenin sulla base di questo pensiero fa un colpo di stato. Organizza la rivoluzione di Ottobre.
Tra la prima e la seconda si diffondono le idee socialista e comuniste, nasce il partito social democratico, si rafforza il pensiero dei bolscevicchi(comunismo).
I Bolscevichi guidati da Lenin conquistano il <code>palazzo d&#39;inverno</code>, sede del governo provvisorio zarista. I soviet vedono in lenin una guida e nasce uno stato democratico fondato sui soviet. Nasce la <code>Repubblica Sovietica Russa</code>, una repubblica democratica gestita dai soviet, popolare e comunista. Lenin organizza la dittatura del proletariato, lui \xE8 a capo, partito e stato coincidono. C\u2019\xE8 quindi un unico stato, la repubblica sovietica in Russia, \xE8 uno stato popolare perch\xE8 gestito dai Soviet e dal proletariato, ma c\u2019\xE8 un unico partito. Lo stato \xE8 quindi il partito comunista. </p>
<p>Secondo Lenin il proletariato deve governare lo stato attraverso una rivoluzione, Lenin ammette l\u2019uso della violenza. Anche Hitler, Stalin, Mussolini ammettono l\u2019uso della violenza, perch\xE8 per avere un unico partito che coincide con lo stato, senza dialettica devi usare la violenza.
Lenin ha una visione Marxista e comunista, per\xF2 l\u2019applicazione del Marxismo in Russia avviene secondo modalit\xE0 diverse, perch\xE8 non c\u2019era il proletariato. Per Lenin la classe che doveva governare era il proletariato, c\u2019\xE8 la dittatura del proletariato, Lenin come Marx afferma il valore dell\u2019abolizione della propriet\xE0 privata, perch\xE8 \xE8 un forma di differenza sociale. Come l\u2019uomo primitivo non aveva la propriet\xE0 privata, anche Lenin e Marx valorizzano l\u2019assenza di propriet\xE0 privata come requisito fondamentale per una societ\xE0 dove tutti hanno le stesse possibilit\xE0 e condizioni.</p>
<p>Lenin individua la <code>CEKA</code>, un\u2019organizzazione che ha come obiettivo quello di realizzare il suo programma politico, una sorta di polizia di stato. \xC8 un esercito che risponde al partito, quindi allo stato. Le SS, SA e le camicie nere sono l\u2019esercito di Hitler e Mussolini, nati come mano armata del partito. La CEKA aveva gli obiettivi di far rispettare le idee della dittatura del proletariato, e scovare coloro che erano contrari al sistema di Lenin.</p>
<h2>Nascita dell\u2019URSS:</h2>
<p>Dal <code>1918 al 1922 </code>in Russia scoppia una guerra civile tra l\u2019armata bianca e l\u2019armata rossa, dove muoiono tantissime persone. \xC8 vinta dall\u2019armata rossa e, grazie alla vittoria, <code>nel 1922 nasce URSS</code>, che rimarr\xE0 fino al 1991. Durante l\u2019era comunista non c\u2019era l\u2019immigrazione, i barboni, la povert\xE0. Quando cade l\u2019URSS nascono i vari stati, e anche i balcani soffrono di questa situazione. Si crea una povert\xE0 enorme. \xC8 l\u2019Unione delle Repubbliche Socialiste(comuniste) Sovietiche(da soivet).
L\u2019 URSS avr\xE0 come presidente Lenin, che muore nel 1924. Il KGB \xC8 la derivazione moderna della CEKA, una polizia segreta che aveva come obiettivo di manere inaltetrato il sistema comunista. Putin era un esponente del KGB.
Quando Lenin sale al potere egli esercit\xE0 la \u201D<code>mossa autoritaria</code>\u201D o lotta al dissenso. Elimina quindi tutte le organizazioni rivoluzionarie(sindacati, partito menshevico) e i Soviet che avevano fatto la rivoluzione furono smantellati. La CEKA elimin\xF2 la famiglia reale che venne Giustiziata dopo essere stata imprigionata. Nikola II e la famiglia sparirono nel 1918. Si cre\xF2 cos\xEC la dittatura del partito comunista.
La Russia \xE8 il primo stato, prima di Hitler e mussolini ad usare uno strumento di repressione che erano i campi di lavoro.
Coloro che dissentivano erano fisicamente eliminati o collocati nei campi di lavoro. Questa pratica fu usata sopratutto dagli inglesi nei confronti dei sud africani, essendo loro colonia, poi dai russi, che instituirono per gli oppositori politici i campi di lavoro. </p>
<p>Il pensiero comunista sul piano politico prevede assenza di propriet\xE0 privata, ugualianza tra le persone, distribuzione dei beni, garanzie uguali per tutti etc. Per un sistema politico comunista \xE8 centrale l\u2019economia. Marx dice che lo stato comunista deve occuparsi principalmente dei beni materiali. L\u2019istruzione arriva dopo. \xC8 importante avere un lavoro, una casa. In un sistema comunista lo stato deve avere assolutamente il controllo dell\u2019economia, perch\xE8 controlla tutto, l\u2019istruzione, sanit\xE0 etc.</p>
<h2>Organizzazione dell\u2019economia in Russia:</h2>
<ul><li><p><strong>Comunismo di guerra</strong>, <code>(1917 - 1921)</code>, Lenin</p>
<p>\xC8 una organizzazione dell\u2019economia di tipo comunista. Tutto \xE8 nelle mani dello stato, sia l\u2019industria, l\u2019agricoltura, che i servizi e lo stato paga l\u2019agricoltore e l\u2019operaio. \xC8 \u201Cdi guerra\u201D perch\xE8 \xE8 un organizzazione dell\u2019economia degli anni delle rivoluzioni, della guerra, degli anni bui dove lo stato si rafforza per organizzare la sua economia. \xC8 un comunismo molto severo e stringente perch\xE8 siamo in un contesto di guerra.</p></li>
<li><p><strong>NEP</strong> (nuova politica economica), <code>(1921 - 1924)</code>, Lenin</p>
<p>\xC8 una economia dove c\u2019\xE8 una specie di economia mista. La propriet\xE0 privata viene in parte ripristinata, e c\u2019\xE8 una sorta di libera iniziativa. I contadini si erano ribellati, perch\xE8 non avevano nemmeno un pezzo di terra</p></li>
<li><p><strong>Piani quinquennali</strong>, <code>(1927 - fine II Guerra Mondiale)</code>, Stalin</p>
<p>Quando Stalin sale al potere abolisce la NEP e crea i piani quinquennali, dei piani che riguardano pi\xF9 l\u2019industria che l\u2019agricltura. Sono una sorta di strategia, e ogni 5 anni vengono verificati gli obiettivi. Attua un piano di industrializzazione attraverso la regola \u201Cil socialismo in un solo paese\u201D. \xC8 fondamentale perch\xE8 voleva far della Russia il modello ideale, per poi esportarlo negli altri paesi. Sul piano dell\u2019agricltura crea le grandi aziende agricole, le <code>Kolchoz</code>, dove tutto \xE8 propriet\xE0 dello stato, che producono un reddito che va interamente allo stato. I proprietari terrieri si ribellarono rispetto a questa scelta, spesso ammazzavano il bestiame. I culacchi (contadini) furono eliminati come classe, quasi scomparvero, deportati nei Gulag e uccisi. L\u2019organizzazione di questa modalit\xE0 di produzione non diede i risultati sperati da Stalin, perch\xE8 intervennero fattori esterni, come la carestia.</p>
<p>L\u2019industria di Stalin <code>pianific\xF2, progett\xF2 e monitor\xF2</code>, si dava degli obiettivi nell\u2019industria, e li controllava ogni 5 anni. Il primo fu del 1928, che ebbe un\u2019enorme successo, c\u2019\xE8 stato un incremento della produzione, un aumento dell\u2019occupazione, principalmente nell\u2019idustria pesante. Il secondo piano vide anch\u2019esso un significativo aumento della produzione, e anche l\u2019agricoltura sub\xEC un certo miglioramento. Anche gli altri piani quinquennali risultarono vincenti, la Russia che nel 1890 era una realt\xE0 agricola e arretrata nel giro di 60/70 anni (dopo la II guerra mondiale) \xE8 diventata la seconda superpotenza mondiale. Vuol dire che il modello comunista funziona, perch\xE8 lo stato dal 1917 al 1945 \xE8 cambiato radicalmente. La Russia \xE8 diventata la seconda superpotenza perch\xE8 ha schiavizzato gli operai, ha indotto gli operai a lavorare tantissime ore al giorno senza diritti. Fu adottata la pratica dello stacanovismo, da Stakanov, un minatore che estreeva il carbone dalle miniere, e riusciva ad avere una produttivit\xE0 importante. Lavorava senza sosta e molti lo imitavano. Divenne un eroe del lavoro e del popolo.
</p></li></ul>
<p>Lenin muore nel <code>1924</code>, e dopo enormi discussioni all\u2019interno del partito viene eletto Stalin. </p>
<h2>Stalin e il Totalitarismo:</h2>
<p>Stalin \xE8 l\u2019uomo del totalitarismo, un fenomeno storico e politico degli anni <code>1930 - 1945</code>, il periodo di Stalin, Mussolini e Hitler. Si distingue dalle dittature perch\xE8 il partito coincide con lo stato, c\u2019\xE8 il culto del capo, i gulag, i campi di sterminio, l\u2019esercito del partito coincide con l\u2019esercito di stato etc. Stalin \xE8 un personaggi carismatico, \xE8 riuscito a gestire il governo di un paese grande fino al 1953.</p>
<p>L\u2019unione sovietica vedeva condizioni della popolazione spesso disperate, gli operai faticavano, i dirigenti del partito godevano di privilegi. Il comunismo, che dovrebbe prevedere l\u2019ugualianza tra le persone, ha i suoi limiti. Ci sono persone che sono riuscite ad arricchirsi, l\u2019ugualianza era un\u2019utopia. Adott\xF2 la <code>politica delle purghe</code>, che raggiunse l\u2019apice dal 1936 al 1939, attraverso la quale eliminava o allontanava tutti coloro che gli creavano problemi, coloro che si dichiaravano oppositori politici, i cattolici. Prima di andare nei gulag facevano i processi. C\u2019era la propaganda, dove Stalin era un mito per la popolazione, che credeva negli esiti.
Stalin institu\xEC la pena di morte per i traditori, aveva gli informatori, una sorta di CEKA da cui aveva informazioni sulla societ\xE0. I gulag sono sopratutto nella zona della Siberia, sono luoghi di reclusione e morte, dove i prigionieri lavoravano e poi venivano uccisi.
Stalin annull\xF2 tutti i valori che sono necessari alla democrazia e dignit\xE0 umana, e costru\xEC il totalitarismo. In russia veniva fatto questo secondo Stalin per il bene dello stato. <code>Il totalitarismo atomizza l&#39;uomo</code>, ovvero lo costringe alla solitudine. Deve indentificarsi solo con il partito al governo. Stalin port\xF2 ad estereme conseguenze l\u2019idea di Lenin, esalt\xF2 lo stacanovismo, cre\xF2 la nomenklatura, per la quale se un atleta russo doveva gareggiare andavano con lui gli uomini del partito. Erano privilegliati, disponevano di case grandi, automobile, Dacie, generi alimentari del mercato nero. Erano i membri del KGB, polizia politica, burocrati etc. </p>
<p>Stalin, detto uomo d\u2019acciaio, nasce in Georgia da una famiglia contadina. Rimase orfano di padre. Entr\xF2 in seminario, sembra volesse diventare prete ortodosso. Divenne bolscevico, conobbe Lenin e fece una rapida carriera nel partito. Divenne segretario del partito e fece carriera. Si spos\xF2 due volte. Era alto 1.58m. Saliva su una pedana di legno, aveva avuto il vaiolo da bambino che gli rovin\xF2 la faccia. Con il passare del tempo la diffidenza aument\xF2, fece vittime anche tra i parenti.</p>`;
});
var RivoluzioneRussa = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Rivoluzione_Russa
});
var Sistemi_economici = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Economia mista:</h2>
<p>\xC8 la teoria economica che viene utilizzata dalla maggior parte degli stati anche oggi. \xC8 una economia che prevede un <code>intervento dello stato con funzione di regolamentazione</code> (opere pubbliche, difesa, giustizia). Questo tipo di economia si fonda nell\u2019idea di <code>Wellfar state</code> (stato sociale), la popolazione che appartiene a fasce economiche diverse deve essere diversamente tutelata. Il Wellfar \xE8 una garanzia dello stato del benessere. Se lo stato ha una funzione all\u2019interno dell\u2019economia ha anche una funzione di regolamentazione della domanda e dell\u2019offerta, mentre nell\u2019economia di Smith la domanda e l\u2019offerta si autoregolano. L\u2019economia mista \xE8 un sistema economico che nasce dopo la crisi del \u201829, la caduta di WallStreet. </p>
<h2>Comunista:</h2>
<p>\xC8 un sistema dove <code>lo stato nazionalizza i beni</code>, tutte le propriet\xE0 sono dello stato, che le distribuisce in egual misura presso la popolazione. Come tutti i sistemi economici per\xF2 ha delle criticit\xE0, qualcuno si arrichisce in modo spaventoso.</p>
<p>La crisi del \u201829 \xE8 la crisi del sistema economico liberista, quindi l\u2019economia liberista o capitalista e tutti i paesi collegati a quell\u2019economia sono entrati in crisi. \xC8 stata una crisi di sovraproduzione, \xE8 stato prodotto molto pi\xF9 dell\u2019effettiva richiesta del mercato. Tutti gli stati ne hanno risentito ad eccezione di Russia e Cina. La crisi del 2008, invece, nata negli USA e poi diffusa in modo globale \xE8 una crisi di natura finanziaria, nata sempre negli USA da una bolla imobiliare e da una valutazione dei titoli bancari falsata.</p>`;
});
var SistemiEconomici = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Sistemi_economici
});
var Venti_di_guerra = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Situazione pre-Guerra</h2>
<h3>Gran bretagna:</h3>
<p>Era una monarchia costituzionale, con la <code>camera dei comuni</code> (eleggibile) e la  <code>camera dei Lord</code> (non eleggibile). Ci sono i <code>conservatori</code>(pi\xF9 centro destra) e i <code>laburisti</code>(centro sinistra)</p>
<h3>Francia:</h3>
<p>Era una repubblica </p>
<blockquote><p><strong>Caso Dreyfus:</strong> \xE8 uno dei primi casi di antisemitismo. A inizio 800 gli ebrei ricominciarono a far pressione per avere uno stato (a causa della Diaspora 70 d.C. Imperatore Tito. ).Alfred Dreyfus era un capitano d\u2019artiglierai di religione ebraica, arrestato perch\xE8 si dice avesse divulgato informazioni segrete all\u2019ambasciata tedesca di Parigi. Fu condannato all\u2019ergastolo. La famiglia non si arrese, coinvolse Emile Zola (<code>Jaccuse</code>), Monet e Pruste(<code>la ricerca del tempo perduto</code>). Fu dichiarato innocente, e si suicid\xF2.</p></blockquote>
<h3>Russia:</h3>
<p>Era un <code>impero Enorme</code>, ma <code>profondamente arretrato</code>, fondato su una <code>societ\xE0 agricola</code> con i <code>servi della gleba</code> (fino al 1861). Non vissero mai le rivoluzioni industriali. Aveva una vastit\xE0 territoriale enorme, ed una grande <code>variet\xE0 di popolazione</code>. Le citt\xE0 pi\xF9 importanti erano San Pietroburgo e Mosca. </p>
<h2>Ragioni sostanziali I guerra mondiale</h2>
<p>Le ragioni sostanziali della prima guerra mondiale si comprendono guardando gli anni precedenti. Dietro alla Belle Epoque ci sono questioni irrisolte, che hanno prodotto contrasti tra i paesi:</p>
<ul><li><p><strong>Colonie e imperalismo:</strong> I paesi in conseguenza alla politica dell\u2019imperialismo (<code>1890-1920</code>) fecero la \u201D<code>corsa alle colonie</code>\u201D. Secondo la loro idea alcuni paesi dovevano essere soggetti ad altri perch\xE8 inferiori. </p></li>
<li><p><strong>Politica delle alleanze:</strong> Negli ultimi anni dell\u2019 Ottocento alcuni stati si alleano per motivi economici, militari e di affinit\xE0 politica:</p>
<ul><li><p><strong>Triplice alleanza:</strong> Tra <code>Italia - Germania - Impero Austroungarico</code>. Era un\u2019alleanza naturale (posizione geografica - Grande impero Romano-Germanico), puramente per scopi difensivi.</p></li>
<li><p><strong>Triplice intesa:</strong> Tra <code>Francia - Inghilterra e Russia</code>. Aveva una funzione \u201Cantitedesca\u201D, nata dall\u2019unione di Francia e Inghilterra a seguito della nascita della triplice alleanza.</p>
<p>In questo  periodo gli stati capiscono che nel panorama globale \xE8 necessario costruire una <code>politica estera di collaborazione</code>.</p></li></ul></li>
<li><p><strong>Nazionalismo:</strong> \xC8 un fenomeno politico che esaspera l\u2019idea di Nazione. Gli stati Nazionalisti esasperano le loro tradizioni/cultura, imponendosi sugli altri.</p></li>
<li><p>contrasti tra Francia e Germani per l\u2019<strong>Alsazia e la Lorena:</strong>  Nella prima met\xE0 dell\u2019800 la Germania conquista i territori (precedentemente francesi). Erano molto importanti, per la presenza di miniere e acciaierie. Attualmente a Strasburgo \xE8 presente la sede del parlamento europeo, come simbolo di pace.</p></li>
<li><p>la <strong>Politica agressiva della Germania:</strong> La Germania <code>nasce nel 1871</code>, e fin da subito addott\xF2 una politica che la collocasse in una posizione centrale in Europa. \xC8 riuscita nel suo tentativo egemone grazie ad un <code>gruppo di industriali</code> che manteneva alto il suo livello economico e in quanto disponeva di materiali e <code>materie prime</code>. Era fortemente militarizzata.</p>
<blockquote><p><strong>Pangermanesimo:</strong> filosofia adottata dalla Germania che prevedeva il controllo dei popoli che parlano lingua tedesca (ex impero romano germanico, Austria, Ungheria, Polonia, Balcani, Ex Jugoslavia, nord Italia)</p></blockquote></li>
<li><p>Il <strong>Razzismo:</strong> Iniziano a circolare le idee secondo cui alcuni popoli devono essere dominati e governati da altri.</p></li>
<li><p><strong>Nazionalismi interni all\u2019impero austro-ungarico:</strong> Quando nel 1870 nasce la Germania da una parte abbiamo la Germania(Prussia), dall\u2019altra l\u2019impero Austro Ungarico. Questo non era solo Austria e Ungheria, ma comprendeva Austria, Ex Jugoslavia, e tutti i terrritori che poi sono diventati Russia, e che dopo la caduta dell\u2019URSS sono tornati nuovamente autonomi. L\u2019Impero Asburgico confina a Sud est con l\u2019impero ottomano (Grecia, Macedonia, Kosovo). Essendo un impero ci sono <code>popoli con culture e visioni</code> del mondo/religione tra loro diverse. La dinastia che governava l\u2019impero era gli asburgo, la convivenza tra questi popoli non era per niente pacifica, e l\u2019imperatore della dinastia degli asburgo, in particolare Francesco Giuseppe aveva in mente di creare una <code>monarchia Trialista</code>.</p></li>
<li><p><strong>I Balcani:</strong> sono la <code>catena montuosa</code> che va dall\u2019europa centrale fino al mediterraneo.  In questi teritori c\u2019erano <code>profondi contrasti politici, economici e religiosi</code>, e in conseguenza delle guerre balcaniche del 1912-1913 erano nati nuovi stati autonomi, che si erano staccati in parte dall\u2019impero austroungarico, in parte dll\u2019ottomano. Tra tutti questi stati c\u2019era la <code>Serbia, che vuole diventare uno stato egemone all&#39;interno dei territori balcanici</code>. Dopo questo periodo la Serbia si \xE8 proposta nella guerra civile della ex jugoslavia. Nei balcani tuttavia nasce un fenomeno simile al pangermanesimo, il <code>panslavismo</code>, secondo il quale in tutta la zona dei balcani <code>ogni stato voleva avere l&#39;autonomia e una egemonia sugli altri</code>. Bisogna aggiungere il concetto di monarchia trialista, ovvero L\u2019Austria Ungheria vuole costruire un impero che veda insieme Austria + Ungheria+ Serbia. Se la serbia voleva essere egemone all\u2019interno dei balcani, e l\u2019austria ungheria voleva conglobare la serbia, scoppia un casino. </p></li>
<li><p><strong>Corsa agli armamenti</strong>, overo il fatto che molti dei paesi europei alla fine dell\u2019800 e nei primi del 900 avevano come obbiettivo quello di rafforzare il loro apparato militare. </p></li></ul>`;
});
var VentiDiGuerra = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Venti_di_guerra
});
var Crisi_del_29 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Situazione post-guerra:</h2>
<p>Dopo la prima guerra mondiale gli USA hanno avuto un ruolo fondamentale per garantire alcuni ideali, tra cui l\u2019autodeterminazione dei popoli. Gli USA avevano prestato soldi a Inghilterra, Italia e Francia, ovvero i paesi con i quali si erano associati. \xC8 una <code>repubblica federale presidenziale</code>.</p>
<p>Il presidente \xE8 <code>Wilson</code> (democratico).
Ci sono due grandi partiti:</p>
<ul><li><strong>Repubblicani</strong>
Conservativi, attenti alla questione della sicurezza (armi legittime). Sono favorevoli ad un sistema di istruzione e sanit\xE0 liberista (libera iniziativa, assenza del ruolo dello stato). </li>
<li><strong>Democratici</strong>
Hanno una visione pi\xF9 progressista e riformista, hanno una maggiore attenzione dei diritti e alla salvaguardia delle minoranze.</li></ul>
<p>Nelle elezioni del 1920 divenne presidente il repubblicano Harding che adott\xF2 una politica isolazionista e sulla base dell\u2019idea \u201D<code>l&#39;America agli americani</code>\u201D, per la quale era necessario che gli USA si occupassero delle loro questioni interne, rafforzandosi con una politica isolazionista. </p>
<p>Fino al 1927 gli USA si presentavano come lo stato pi\xF9 ricco e potente al mondo, c\u2019era un <code>benessere della popolazione</code> (si compravano automobili, si andava in vacanza), gli <code>esiti della seconda rivoluzione industriale</code>. La <code>produzione era aumentata</code> del 64% (basso costo della mano d\u2019opera), e gli USA ricevevano <code>interessi dai prestiti</code> che avevano dato ai paesi europei.
Questi anni vengono chiamati i \u201Cruggenti anni 20\u201D, gli anni di massimo sviluppo e boom sul piano economico e sociale. \xC8 una crescita senza precedenti. Si parla di \u201CAmerican way of life\u201D, lo stile di vita americano. Gi\xE0 negli anni 20 si stavano inserendo nella societ\xE0 americana alcune contraddizioni, si vedevano alcune falle e limiti del sistema, tra cui:</p>
<ul><li><strong>Poca attenzione alle classi povere</strong>, quindi la riduzione delle spese dello stato in materia sociale. Uno stato che attribuisce scarsa importanza alla questione sociale \xE8 votato ad una economia privata. </li>
<li>La concentrazione della ricchezza in <strong>grandi imperi finanziari</strong>, che diventeranno multinazionali o i grandi gruppi che controllano l\u2019economia. Il gruppo Rockfeller ha creato a NY il Rockfeller center. I ricchi quindi diventano sempre pi\xF9 ricchi e i poveri sempre pi\xF9 poveri. </li>
<li><strong>Leggi</strong> molto rigide <strong>sull\u2019immigrazione</strong>, ossia per bloccare l\u2019immigrazione negli USA. Dicevano che bisognava bloccare l\u2019immigrazione anche degli europei, perch\xE8 gli stranieri portavano degrado sociale o idee comuniste.<strong>*</strong></li>
<li>Negli USA il <strong>partito comunista</strong> fu <strong>considerato illegale</strong>. Avevano paura che le idee comuniste arrivassero negli stati uniti. Da questo momento USA e Russia si caratterizzarono per essere due modelli distinti e opposti. Ford fece di tutto per eliminare ogni forma di organizzazione comunista. </li>
<li>Nel sud degli USA riprese vigore il <strong>ku klux klan</strong>, una organizzazione costituita da bianchi che odiando i neri si organizzava e quando incontrava la popolazione di colore la pestava. Erano principalmente giovani e studenti, venivano pestati di sera, erano incappucciati e vestiti di bianco. </li>
<li><strong>Campagna proibizionista</strong>, per la quale era vietato usare alcolici in alcuni momenti della giornata. Coloro che facevano uso di alcol erano sopratuttotto gli immigrati (irlandesi). Il proibizionismo non miglior\xF2 questi problemi sociali, anche grazie alla mafia Italiana si trovarono delle forme alternative alla legalizzazione dell\u2019alcol, il contrabbando e la corruzione: Attraverso vie illegli la popolazione poteva fare uso di alcol e sigarette. Emergono alcuni degli uomini pi\xF9 prestigiosi, tra cui Al Capone.</li></ul>
<blockquote><p><strong>* Episodio di Sacco e Vanzetti</strong>, due Italiani anarchici e socialisti che furono accusati di omicidio e condannati a morte, fu fatto un processo sommario, ma erano innocenti. Furono accusati perch\xE8 immigrati. </p></blockquote>
<h2>I ruggenti anni 20:</h2>
<p>Furono per gli USA anni di massimo splendore, molti utilizzavano l\u2019automobile per spostarsi, andavano al cinema, nasce Hollywood, nasce il cinema sonoro, l\u2019idea di weekend e tempo libero, si diffonde la musica jazz, un genere degli afro americani. Si parla di <code>giovent\xF9 bruciata</code>. Questa parola \xE8 il titolo di un film, che presenta la storia di giovani che vogliono vivere senza regole, divertendosi. In questi anni iniziano a nascere i primi grattacieli, inizia la costruzione del moma di NY.
(aggiungere parte degli scrittori) </p>
<p>Negli anni \u201820 l\u2019economia si stava riprendendo e, dato che molti paesi europei avevano bisogno dei prodotti agricoli americani, i contadini furono costretti ad abbassare il prezzo del grano. Molti agricoltori avevano dei mutui e debiti con le banche, a causa dell\u2019acquisto dei materiali. Anche l\u2019industria sulla base dei ruggenti anni \u201820 produceva moltissimo. Dopo i primi segnali di crisi dell\u2019agricoltura la produzione f\xF9 superiore alla richiesta, quindi tanta merce rimase invenduta. Si parla di <code>sovraproduzione</code>. Nel 2008 molti cittadini Americani avevano comprato case a rate e si erano indebitati. </p>
<h2>La borsa e le speculazioni:</h2>
<p>La borsa: \xE8 un mercato dove si comprano e vendono azioni. Le azioni son corrispondenti alle quote delle societ\xE0 quotate in borsa.
Con la speculazione si fa credere che un azienda sta andando bene o male. Dal 900 l\u2019economia reale e l\u2019economia virtuale viaggiano in parallelo.</p>
<p>L\u2019america stava entrando nel tunnel della sovraproduzione, di un eccesso di beni rispetto alla richiesta, le aziende continuavano ad emettere azioni, gli investitori continuavano ad acquistarli. Era diffusa l\u2019idea secondo la quale tutti potevano diventare ricchi. </p>
<p>Il crollo della borsa si verific\xF2 all\u2019improvviso il <code>24 ottobre del 1929</code>, coloro che lavoravano in borsa erano consapevoli che si sarebbe verificato questo crack, molti da tempo avevano visto la sproporzione tra l\u2019economia reale e quella virtuale, tra il valore delle azioni e il reale capitale. La sera prima avvertirono i clienti con il maggior numero di azioni. Molti azionisti decisero di vendere le azioni, ma quando tutti vogliono vedere si crea il panico, si vendono le azioni ad un valore sottostimato e nessuno compra. </p>
<p>Alcuni che nei giorni precedenti avevano capito quello che poteva essere il crack avevano avuto minori perdite. Uno di loro era la famiglia kennedy, il quale riusc\xEC a vendere alcune settimane prima del crollo realizzando enormi guadagni, pronunci\xF2 la frase \u201Csentivo che dovevo vendere anche quando il lustrascarpe parlava di investire in borsa\u201D. Molti capirono che investire in borsa era redditizio</p>
<p>Il verme che aveva fatto marcire la grande mela era l\u2019<code>assenza di controllo degl operatori finanziari</code> che avevano creato una <code>speculazione</code> senza precedenti. Alla crisi del \u201829 segue una grande crisi e depressione economica. Non si deva guardare il mondo della finanza separato dal mondo dell\u2019economia reale. Il crollo provoc\xF2 un crollo dei salari, crollo della produzione, crollo dei prezzi. Nessuno comperava, la gente non aveva stipendi e la moneta era svalutata. Questa crisi si diffuse in tutto il pianeta, gli USA essendo intervenuti nella guerra erano diventati una realt\xE0 globale, importavano ed esportavano all\u2019estero globalmente. Solo l\u2019URSS rimase esterna alla crisi. </p>
<p>Jack Kerouac con \u201Con the road\u201D Srcive qualcosa sul crollo, la gente non avendo lavoro o auto si metteva in strada a camminare in cerca di lavoro, era una popolazione disperata.</p>`;
});
var CrisiDel29 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Crisi_del_29
});
var Il_Novecento = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Date Importanti</h2>
<ul><li><code>Inizia nel 1918</code> (Prima guerra mondiale), che cambier\xE0 la storia, finiscono gli imperi e nascono le forme statali</li>
<li><code>Finisce nel 1991</code> (caduta dell\u2019URSS). Finisce il periodo fascista, le ideologie e il mondo diviso in modello comunista-liberista.</li>
<li>\xC8 compresa anche la caduta del muro di Berlino(<code>1989</code>).</li>
<li>\xC8 detto <strong>secolo breve</strong>(titolo dell\u2019opera di Hobsbawm).</li></ul>
<h2>La societ\xE0 di massa</h2>
<p>Definita dal sociologo francese <code>Le Bon</code> in <code>la psicologia delle folle</code>. Dice che per la prima volta c\u2019\xE8 un <strong>iperdemocrazia</strong>, (eccesso di democrazia), positivo ma omologante. Tutti hanno a disposizione beni e strumenti. <em>La societ\xE0 di massa \xE8 la societ\xE0 del pieno</em>: ovunque tu vada c\u2019\xE8 gente. si passa dal\u2019idea di <em>sogetto / divino</em> a quella di <em>massa / pieno</em>. </p>
<p>Caratteristiche della societ\xE0 di massa:</p>
<ul><li><p><strong>Incremento demografico:</strong> c\u2019\xE8 tanta natalit\xE0, aumento della vita media e le persone si spostano nelle citt\xE0.</p></li>
<li><p><strong>Urbanesimo e nuove citt\xE0:</strong> Nelle citt\xE0 c\u2019\xE8 disponibilit\xE0 di lavoro, opportunit\xE0 culturali, di svago\u2026 Molte citt\xE0 europee diventano simbolo del 900. </p>
<blockquote><p><strong>Evoluzione delle citt\xE0:</strong> Nascono dopo il 1000, hanno le mura, con all\u2019interno il potere politico e religioso, fuori la campagna \u2013&gt; Si trasforma, e anche i territori al di fuori vengono considerati citt\xE0 \u2013&gt; incrementa la popolazione e nascono esercizi commerciali \u2013&gt; Prima/seconda rivoluzione industriale: nasce la periferia, nascono periferie di industrie, citt\xE0 dormitorio, citt\xE0 ghetto\u2026 \u2013&gt; oggi si parla di citt\xE0 diffusa (ha un inizio ma la fine \xE8 sempre pi\xF9 dilatata).</p></blockquote></li>
<li><p><strong>Pubblicit\xE0:</strong> Inizialmente era su carta(manifesti, cartelloni), oggi su Web/social. l\u2019industria ha tanti prodotti da vendere, quindi ti <code>induce a comprarli</code>, per il gusto di comprare. <strong>Consumare</strong> \xE8 il verbo del 900, frenesia dell\u2019acquisto. Nasce l\u2019esposizione universale(<code>EXPO</code>) come modo per pubblicizzare i prodotti. Viene costruita la torre Eiffel per l\u2019expo del 1900 di Parigi.</p></li>
<li><p><strong>La belle epoque:</strong> Vengono definiti cos\xEC i primi 15 anni del Novecento, ovvero quando <code>le persone iniziano a divertirsi</code>. Nasce come <code>fare qualcosa di diverso</code>, come diversivo al lavoro. Si iniuzia ad andare a ballare, feste, Cabaret, casin\xF2, Vacanze, si utilizza la macchina per gli spostamenti etc\u2026 Si vede dal\u2019architettura delle citt\xE0(Gaud\xEC a Barcellona), palazzi decorati, case liberty di Mondello.</p></li>
<li><p><strong>Progresso e esito della seconda rivoluzione industriale:</strong> \xC8 la Conseguenza dell\u2019innovazione scientifica, progresso arriva dall\u2019applicazione delle scoperte tecniche e scientifiche. </p>
<blockquote><p><strong>I Riv. Industriale in Inghilterra</strong> per le vie di comunicazione(commercio triangolare), la rete ferroviaria molto avanzata, democrazia pi\xF9 antica(1688), rivoluzione agricola\u2026 Nasce la macchina a vapore, carbon coke, telaio meccanico. </p></blockquote>
<p>Grazie alla <strong>I Riv. Industriale</strong> nasce l\u2019industria come luogo dell\u2019azione, e cambia il modo di produrre, la citt\xE0 e l\u2019educazione. nascono scuole tecniche, ingegneria(\xB11800).</p>
<p><strong>La II Riv. Industriale</strong> nasce negli USA, poi si diffonde in Europa e Giappone. \xC8 la rivoluzione dell\u2019elettricit\xE0 e del petrolio. arriva l\u2019illuminazione, si velocizzano le produzioni, mezzi di trasporto, arriva la plastica\u2026 Viene illuminata NY(1883), arriva il telefono di Marconi, motore a scoppio di Benz, areoplano e l\u2019automobile. Henry Ford fu il primo ad applicare le innovazioni della rivoluzione. Introduce la catena di montaggio, migliorata dalla teoria Taylor(Taylorismo), secondo la quale bisogna applicare il concetto di tempo alla catena. </p>
<blockquote><p><strong>Le altre rivoluzioni:</strong> La III Riv. Industriale \xE8 in America e Asia(1950), con l\u2019Elettronica, Informatica, il computer e Internet. Ora siamo nella IV Riv. Industriale, o industria 4.0, dove si utilizzano i robot e tutti i sistemi digitali.</p></blockquote></li>
<li><p><strong>La societ\xE0 e le classi sociali della societ\xE0 di massa:</strong> Inizialmente nella societ\xE0 medioevale c\u2019erano nobili, clero e popolo. nel 1000, con l\u2019arrivo della citt\xE0 viene introdotta la borghesia(Borgo \u2013&gt; Citt\xE0), ceto sociale produttivo che lavora per vivere. Clero e Nobilt\xE0 vanno sempre diminuendo, fino al 1900, perdendo la loro centralit\xE0. <code>La socit\xE0 \xE8 quindi borghese</code>, con all\u2019interno le varie distinzioni. </p></li>
<li><p><strong>I consumi:</strong> C\u2019\xE8 una grandissima <code>disponibilit\xE0 dei beni</code>, e la catena di montaggio riesce a produrre tantissimi pezzi. Nascono quindi i grandi magazzini(<em>Harrods</em> a Londra, <em>La Faiette</em> a Parigi\u2026).</p></li>
<li><p><strong>I partiti:</strong> Sono organizzazioni di persone accumunate da idee politiche simili. Nascono con la Riv. Francese come <em>Club</em>, inizialmente si chiamavano <code>Partiti di notabili</code>, perch\xE8 erano composti da poche persone di ceti sociali alti, o con una propensione alla politica. Dal 900 si parla di <code>Partiti di massa</code>, con un maggior coinvolgimentio. \xC8 dovuto dall\u2019aumento dell\u2019istruzione e la gente si lasciava coinvolgere. Il voto passa al suffragio universale, quindi molte pi\xF9 persone aderiscono ai partiti.  </p></li></ul>`;
});
var IlNovecento = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Il_Novecento
});
var Il_Fascismo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Fine Prima guerra mondiale:</h2>
<p>Il 4 novembre 1921, vengono firmati i trattati di uscita, in un treno da aquileia a Roma viene trasportata la salma del milite ignoto. Era la salma di un soldato della prima guerra mondiale, non sappiamo il suo nome, ma \xE8 devientato simbolo di tutti i morti della prima guerra mondiale. In seguito venne costruito  in piazza Venezia l\u2019altare della patria, come monumento simbolo dei caduti, intitolato a Vittorio Emanuele II. \xC8 considerato il monumento sacro per la patria. </p>
<h2>Italia nel primo dopoguerra:</h2>
<p>L\u2019Italia nel primo dopoguerra pur avendo vinto la guerra dovette fare i conti con una serie di problemi, come tutti i paesi. </p>
<ul><li><code>Altissimo livello di disoccupazione</code>: quando uno stato \xE8 votato alla guerra concentra tutte le forze su quella, ma quando finisce  i soldati devono ricollocarsi, le campagne non erano coltivate, l\u2019industria bellica doveva tornare civile.</li>
<li>La <code>crisi economica</code>: uno stato che concentra tutte le attenzioni nella guerra, quando la guerra finisce, oltre ad aver utilizzato tantissimi soldi per le armi si ritrova a non avere risorse. Uno degli effetti per l\u2019italia \xE8 la svalutazione della lira.</li>
<li>Il governo dell\u2019Italia e il primo ministro Nitti dimostravano di avere <code>difficolt\xE0 a gestire l&#39;emmergenza</code>. Lo stato liberale (aveva costituzione, monarchia e suffragio censitario) era in crisi. Nascono molti partiti di destra che convincono la popolazione rissicurandola che la soluzione ai problemi \xE8 sicuramente un potere politico di destra, quello che sar\xE0 il fascismo, perch\xE8 propone dei punti chiari. </li>
<li><code>Nascono diversi partiti</code> come conseguenza del dibattito storico politico del primo ottocento:<ul><li>partito <strong>socialista</strong></li>
<li><strong>comunista</strong> con Gramsci come esponente</li>
<li>partito <strong>liberale</strong></li>
<li>partito <strong>popolare</strong> nato nel 1919, dal 1945 diventer\xE0 democrazia cristiana. \xC8 stato ideato da don Luigi Sturzo, aveva una forte dimensione religiosa ma aconfessionale. </li>
<li><strong>fasci di combattimento</strong> nati nel 1919, ideato da Mussolini. </li>
<li>partito degli <strong>ex combattenti</strong>, i sopravissuti alla guerra, di destra, che ha sempre supportato Mussolini. </li></ul></li>
<li>Biennio rosso: sono due anni <code>(1919-1920)</code> nei quali in Italia su esempio della rivoluzione in Russia si voleva applicare il comunismo. Molti operai organizzavano scioperi per diffondere idee comuniste. I governi e imprenditori rispetto a queste richieste si impaurirono, perch\xE8 la trasposizione delle idee comuniste faceva paura. </li>
<li>La <code>questione di Fiume</code>: Secondo il patto di Londra l\u2019Italia avrebbe dovuto ottenere dei territori (Trentino, Friuli Venezia Giulia, alcuni territori della dalmazia), ma non li ottenne. Le destre con D\u2019Annunzio cercano di diffondere delle idee per le quali l\u2019Italia avrebbe avuto una <code>vittoria mutilata</code>, per dimostrare che la guerra fosse stata vinta sono in parte e per incentivare il sistema del nazionalismo. Fiume, come altre isole della Dalmazia erano precedentementa appartenute alla repubblica veneta, per poi diventare citt\xE0 dell\u2019impero austro ungarico. D\u2019Annunzio  occupa con amici e soldati Fiume, ritiene che debba essere una citt\xE0 Italiana, rimane un\u2019anno fino all\u2019intervento di Giolitti (1929), con il <code>trattato di Rapallo</code>, secondo il quale Fiume \xE8 dichiarata citt\xE0 libera e indipendente. Con l\u2019avvento del fasciamso fiume diventer\xE0 Italiana, fino alla fine della seconda guerra mondiale, perch\xE8 passer\xE0 all\u2019Ex Jugoslavia, oggi Croazia.</li></ul>
<h2>Fasci di combattimento:</h2>
<p>Nel <code>1919</code> nascono i fasci di combattimento. \xC8 un partito nuovo, l\u2019uomo di riferimento \xE8 Mussolini. Nel <code>1921</code> diventano <code>Partito Nazional Fascista</code>, e otterr\xE0 il potere nel 1922, con la <code>marcia su Roma</code> dove si determina <code>Mussolini come primo ministro</code>. Viene affidato a lui quindi l\u2019incarico di fondare il nuovo governo.
Nel 1922 inizia il <code>ventennio fascista</code>, (fino al 1943). Sono vent\u2019anni dove l\u2019italia viene governata da un unico partito. Si divide in due parti:</p>
<ul><li><strong>Fase legalitaria</strong> <code>(1922 - 1924)</code>: \xC8 la fase secondo la quale Mussolini mantiene le istituzioni del paese, e governa secondo la legge dello stato Italiano. Progressivamente le trasforma, e alla fine del 1924 con un discorso alla camera afferma \u201Cse esiste in Italia una organizzazione a delinquere, io sono il capo di quella organizzazione\u201D. Determina il passaggio da uno stato che rispettava le leggi della costituzione ad uno stato totalitario. </li>
<li><strong>Fase totalitaria</strong> <code>(1925 - 1943)</code>: L\u2019esercito di partito coincide con quello dello stato, non c\u2019\xE8 dialettica. \xC8 un totalitarismo imperfetto perch\xE8 Mussolini non governa da solo, rimane la monarchia del re Vittorio Emanuele III.</li></ul>
<h2>Mussolini e i Fasci:</h2>
<p>Mussolini era un socialista, direttore dell\u2019Avanti, il giornale del partito socialista. Con il dibattito tra inteventisti e neutralisti \xE8 stato sbattuto fuori dal partito. Assunse posizioni sempre pi\xF9 nazinaliste e interventiste. Durante il biennio rosso lui dirigeva \u201Cil popolo d\u2019Italia\u201D, un\u2019altro giornale sostenuto dagli industriali. Nel <code>1919 fonda i fasci</code>, un\u2019organizzazione che, oltre ad essere un movimento politico, aveva anche una mano armata, per diffondere anche con la forza le idee. Portavano camicie nere, erano organizzati in squadre d\u2019azione. Quando c\u2019erano gli scioperi bastonavano i sindacalisti per diffondere le loro idee di tipo nazionalista. Mussolini aveva creato questo partito per diffondere il nazionalismo e l\u2019antisocialismo. I fasci avevano un obietivo: Trasformare i fasci in un partito, per ottenere un ruolo e impadronirsi del potere con qualunque forma e mezzo. Il termine \u201Cfasci\u201D viene preso da Mussolini dall\u2019impero romano. Questi erano dei bastoni legati insieme ad un\u2019ascia, e venivano portati per le strade di Roma dai condottieri che avevano vinto in battaglia.</p>
<p>Per mesi i fascisti rimasero un gruppo ristretto che voleva compiere una rivoluzione per i suoi obiettivi, colpendo ogni persona si ribellasse. Erano profondamente appoggiati dai grandi proprietari terrieri e dagli industriali, anche quando li vedevano picchiare uomini a sangue, costretti a bere bottigli di olio di glicino (purgante). Fin dal 1919 colpivano tipografie e giornali, la crocerossa, biblioteche, sindacati, case del popolo, cooperative etc. </p>
<p>Anche se il fascismo usava la forza, i bastoni, l\u2019illegalit\xE0 etc. \xE8 stato votato dagli Italiani.
La responsabilit\xE0 stava nella crisi e nella debolezza dello stato liberale. Giolitti, il re e la chiesa erano convinti di poter usare il fascismo per modificare la realt\xE0, ma nei fatti fu il fascismo ad usare la chiesa, il re e Giolitti. Costoro quindi non si opposero mai in modo determinato. Il consenso \xE8 quindi merito del fascismo e delle sue idee, ma l\u2019errore e la diffusione del fascismo deve essere sopratutto attribuita alla strategia sbagliata degli uomini dello stato e della chiesa.
Il fascismo si present\xF2 per la prima volta alle <code>elezioni del 1921</code>, all\u2019interno di una coalizione, i <code>blocchi nazionali</code>. Decide di presentarsi alle elezioni non come PNF, ma come coalizione, formata dal PNF e ex combattenti. Ottennero 35 seggi su 504.</p>
<p>Mussolini decide che \xE8 arrivato il momento di cambiare la strategia, fare un\u2019azione significativa: la marcia su Roma (1922). I fascisti vestiti con la camicia nera provenienti da diverse citt\xE0 Italiane salgono in treno e si recano a Roma. Il re non dichiara lo stato d\u2019assedio, nella consapevolezza che avrebbe potuto tenere sotto controllo il fascismo. Entrano a Roma, devastano parti della citt\xE0, uccisero persone e Vittorio Emanuele III nomina mussolini capo del governo. Mussolini diventa capo del governo grazie alla decisione del re. </p>
<h2>Fase legalitaria:</h2>
<p>Quando Mussolini diventa capo del governo inizia la fase legalitaria:</p>
<ul><li>Diventa <code>presidente del consiglio</code>.</li>
<li>mantiene le istituzioni liberali e man mano <code>modifica le istituzioni in senso totalitario</code>. </li>
<li><code>Riduce il numero di ministri</code> per ridurre la burocrazia e risparmiare soldi. </li>
<li>Istitu\xEC il gran <code>consiglio del fascismo</code>, l\u2019organo direttivo che doveva apportare modifiche alla costituzione. </li>
<li>Mantenne lo <code>squadrismo</code>, fond\xF2 la <code>CEKA</code> Come polizia segreta. </li>
<li><code>Modifica la legge elettorale</code>, stabilendo che il partito che avrebbe raggiunto la maggioranza dei voti avrebbe avuto la maggioranza assoluta. Aggiunge un premio di maggioranza al partito che ottiene il maggior numero di voti. Il partito che vince avrebbe avuto il 65% dei seggi, quindi la maggioranza assoluta, quindi governare senza opposizioni. Fu adottata per la prima volta nelle elezioni del 1924. </li>
<li>Si fa chiamare <code>Duce</code>, che in latino \xE8 \u201Ccolui che conduce\u201D.</li>
<li>Fa la <code>riforma gentile</code> nel 1923, ovvero la riforma del ministro della pubblica istruzione, per la quale la futura classe dirigente doveva andare al liceo classico, gli altri nelle scuole tecniche e professionali. Questo ha creato la cultura classista che a distanza di anni ci portiamo dietro. Prevedeva anche le classi differenziate: chi aveva problemi stava con chi aveva problemi. </li></ul>
<h2>Elezioni del 1924:</h2>
<p>La coalizione che si present\xF2 aveva il nome di \u201D<code>listone fascista</code>\u201D, formato dal partito fascista, gli ex combattenti, uomini della camere che erano confluiti da altri partiti. Ottenne il 65% dei voti, quindi i 3/4 dei seggi, con la maggioranza assoluta.
Questo risultato \xE8 stato ottenuto compiendo <code>gravi irregolarit\xE0</code>, scoperte da Matteotti, che spar\xEC dopo poco.
Dopo questo fatto <code>le istituzioni da liberali sono diventate totalitarie</code>. </p>
<p>Sistemi totalitari:
I sistemi totalitari sono solo i sistemi relativi agli <code>anni 20-45</code>. Per et\xE0 dei totalitarismo intendiamo il fascismo in Italia dal 25, lo Stalinismo in Russia e il Nazzismo di Hitler, anche se quello in Italia era imperfetto.
Caratteristiche di questi sistemi:</p>
<ul><li><code>Ricerca del consenso</code>, ottenuto con misure canoniche o con la forza, chi non aderisce alle regole del partito ne subisce le conseguenze. </li>
<li><code>Culto del capo</code>, gli uomini rappresentano e chiedono con la forza di essere adorati come delle divnit\xE0, nei loro discorsi alla nazione, fatti nelle piazze, dove la retorica era centrale. </li>
<li>Il <code>partito coincide con lo stato</code>, con l\u2019epoca del totalitarismo si parla di partiti di massa, dove l\u2019individuo si annulla, segue le indicazioni e non ha pi\xF9 la sua identit\xE0.</li>
<li><code>Assenza di opposizione</code>, e le conseguenze per coloro che si oppongono</li>
<li><code>Rulo centrale delle forze armate</code>, rappresentano il modo con cui questi partiti impongono e diffondono la loro idea. I professori con idee diverse vengono sollevati dall\u2019incarico, non c\u2019\xE8 libert\xE0 di stampa.</li>
<li><code>Propaganda e pubblicit\xE0</code></li></ul>
<p>Fino al 1924 Mussolini ebbe enorme consenso, dava sicurezza alla popolazione. Con l\u2019eccidio Matteotti il consenso iniziava a diminuire, perch\xE8 si comprendeva la mano armata e autoritaria del regime, accentuata poi dalla corruzione e i brogli nelle elezioni. A Mussolini non conveniva tenere la fase legalitaria, perch\xE8 non l\u2019avrebbe potuta controllare. Addossa quindi al fascismo la <code>responsabilit\xE0 dell&#39;eccidio Matteotti</code>. Qui avviene il passaggio alla fase totalitaria.</p>
<h2>Leggi fascistissime:</h2>
<p>Nel 1926 Mussolini emana le Leggi fasistissime, con le quali:</p>
<ul><li>Diede <code>poteri straordinari al capo del governo</code>, si assegna oltre al potere legislativo (che gli spettava gi\xE0), il potere legislativo (del parlamento) e giudiciario (dei giudici).</li>
<li><code>abol\xEC tutti i partiti</code> ad eccezione di quello fascista.</li>
<li><code>Identific\xF2 lo stato con il partito fascista</code>, gli insegnanti, magistrati e impiegati pubblici dovevano giurare fedelt\xE0 al partito.</li>
<li><code>Sciolse i sindacati</code>, tranne quelli fascisti.</li>
<li><code>sciolse le associazioni libere e private</code>, trasformandole in appendici dello stato, guidate da esponenti del partito.</li>
<li><code>defin\xEC antifascisti</code> gli oppositori e gli obblig\xF2 al confino, reclusione o pena di morte.</li>
<li>trasform\xF2 la <code>Ceka in Ovra</code>.</li>
<li><code>abol\xEC la libert\xE0 di stampa</code> e ne fece uno strumento di propaganda.</li>
<li><code>obblig\xF2 tutti gli italiani ad iscriversi a partito fascista</code>, ed esibire la tessera per ogni impiego pubblico.</li></ul>
<h2>Politica religiosa:</h2>
<p>Tra lo stato italiano, nato nel 1860 e lo stato della chiesa non c\u2019era mai stato fino a quel momento un accordo che definisse le competenze, i catteri e autonomia dell\u2019uno e dell\u2019altro. Mussolini riusc\xEC a fare quello che nessun re e ministro era riuscito a fare, i <code>patti lateranensi (1929)</code>, dove con papa Pio 11 concordano i rapporti tra stato e chiesa. Sono all\u2019interno della costituzione Italiana all\u2019articolo 7 e 8.
Questi prevedono che:</p>
<ul><li>Lo stato italiano sia uno <code>stato laico</code>, in quanto tale tutti hanno gli stessi diritti.</li>
<li>La <code>religione di stato \xE8 cattolica</code>.</li>
<li>Il <code>matrimonio</code> celebrato secondo la legge dello stato della chiesa ha valenza anche per lo stato italiano</li>
<li>Il clero \xE8 esente dal <code>servizio militare</code> quando era in vigore</li>
<li>C\u2019\xE8 la <code>regolamentazione</code> del rapporto stato-chiesa in termini di <code>tasse</code>, lo stato del vaticano ha una legge finanziaria diversa da quella dello stato italiano. La citt\xE0 del Vaticano ha un\u2019IVA inferiore dello stato italiano. Paga le tasse allo stato italiano degli immobili.</li>
<li>I <code>sacerdoti vengono stipendiati</code> dalla citt\xE0 del vaticano secondo un concordato con lo stato italiano. </li>
<li>La <code>religione cattolica \xE8 insegnata nelle scuole</code>.</li></ul>
<blockquote><p><strong>Patti lateranensi nella costituzione:</strong> (1948)<br><br>
Art.7:</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&quot;lo stato e la chiesa sono ciascuno nel proprio ordine indipendenti e sovrani. I rapporti sono regolati dai patti laterranensi che non richiedono procedura di revisione costituzionale.&quot;</code>`}<!-- HTML_TAG_END --></pre>
<p>Art.8:</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&quot;Tutte le confessioni religiose sono libere davanti alla legge a patto che non siano in contrasto con l&#39;ordinamento giuridico dello stato.&quot;</code>`}<!-- HTML_TAG_END --></pre>
<p>Nel 1984 i patti lateranensi sono stati modificati e riformati e la modifica pi\xF9 importante trasforma la religione cattolica nelle scuole in religione. </p></blockquote>
<h2>Politica economica:</h2>
<p>Mussolini sale al potere quando l\u2019economia italiana <code>si sta risollevando</code> dal dopoguerra, e l\u2019Italia deve restituire a USA e Gran Bretagna i <code>debiti di guerra</code>.
Sceglie una politica economica:</p>
<ul><li>Che va sotto il nome di <strong>autarchia</strong>, il protezionismo ad autosuffiecienza. Fa la <code>battaglia del grano</code>, ritiene che debba essere incrementata la produzione di grano in modo tale che gli italiani siano autosufficienti dal punto di vista alimentare. Per mettere in atto questo progetto elimina moltissime altre coltivazioni e <code>bonifica</code> i territori dell\u2019Agro Pontino, in provincia di Latina. La scelta protezionista non abbe esiti positivi, perch\xE8 deve essere applicata per brevi periodi. </li>
<li>Di <strong>intevento dello stato in economia</strong>: lo stato inteviene in alcuni settori con funzione regolamentatrice. Vengono creati alcuni istituti (come l\u2019Iri) da Mussolini. Lo stato interviene in alcuni settori strategici per valorizzare quegli ambiti. C\u2019\xE8 il <code>corporativismo</code>, una sorta di organizzazione fallimentare della societ\xE0 per l\u2019organizazione del lavoro.
\xC8 una politica agressiva, di uno stato che deve migliorare l\u2019industria. Mussolini fa delle scrlte politiche che favoriscono l\u2019<code>aumento demografico</code>. </li></ul>
<h2>Politica estera:</h2>
<p>Essendo il fascismo un sistema di tipo nazionalista aveva una <code>politica estera agressiva</code>, Mussolini aveva decide di intraprendere una politica coloniale, per creare un <code>impero coloniale</code>, proseguendo l\u2019azione di Crispi (Libia) e Giolitti (Eritrea e Somalia). L\u2019Italia non ha mai avuto un importante sistema coloniale, non l\u2019ha voluto e non ne \xE8 stata capace. Mussolini voleva il controllo sul mediterraneo, nel mare nostrum (come veniva chiamato dai romani). Nel 1936 Mussolini invade l\u2019<code>Etiopia</code>, viene combattuta una guerra con gas, lanciafiamme e bombardamenti che avr\xE0 esito positivo.Nel 1936 dichiara l\u2019impero coloniale italiano, l\u2019imperatore \xE8 Vittorio Emanuele III e Mussolini ottenne un enorme consenso. La conquista dell\u2019Etiopia e la politica agressiva porter\xE0 dopo poco alla seconda guerra mondiale.</p>
<h2>Biografia</h2>
<p>Mussolini nasce a <code>Predappio</code> In provincia di Forl\xEC. Figlio di una maestra elementare, studi\xF2 dai Salesiani e si \xE8 diplomato come maestro elementare. And\xF2 in Svizzera e lavor\xF2 come manovale e commesso. Era un violinista, si inscrisse al partito socialista, divenne direttore dell\u2019Avanti ma viene cacciato, fonda il giornale \u201D<code>il popolo d&#39;Italia</code>\u201D, e i fasci di combattimento nel 1919, un movimento anticlericale e antisocialista. Nel <code>1938</code> firma le <code>leggi raziali</code> a Trieste per conformarsi a Hitler e stringere un\u2019alleanza con lui. Sposa <code>donna Rachele</code> e ha 5 figli, una nata prima del matrimonio. Aveva tante amanti, tra cui <code>Claretta Petacci</code>, e la moglie ne era a conoscenza. Mussolini aveva una capacit\xE0 di comunicare alta, parlava con le mani ai fianchi, le persone erano affascinate. Voleva essere visto come un lavoratore, a palazzo Venezia c\u2019era la sede del gran consiglio del fascismo, dove erano presenti molti percorsi sotterranei in caso di fuga. Lasciava la luce sempre accesa per far vedere che lavorava, esibiva il fisico. Lui voleva acquisire gli ideali degli imperatori romani, dicevano <em>mens sana in corpore sano</em>, avevano il mito dell\u2019<code>uomo perfetto</code>. Ha creato la sede del CONI a Roma, con l\u2019anello di statue che riprendono i modelli classici dell\u2019equilibrio. Nel palazzo ci sono frasi scritte da mussolini, che esaltavano il valore della fisicit\xE0.
La figlia Elda aveva sposato GianGaleazzo Ciano, che viene ucciso da Mussolini. Il figlio Romano \xE8 il padre di Alessandra Mussolini.</p>`;
});
var IlFascismo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Il_Fascismo
});
var Il_nazismo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}
<h2>Situazione della Germania:</h2>
<p>Dopo la prima guerra mondiale si impose la repubblica di Waimar. Fu punita perch\xE8 considerata colpevole, le furono tolte le zone militari, concesse alla Francia l\u2019Alsazia e la Lorena, ci fu la svalutazione del Marco etc. </p>
<p>Coloro che firmarono i trattati di pace, nella conferenza di Versailles, erano uomini che appartenevano al partito social democratico, avevano una visione socialista e di centro sinistra. Nel 1919 nasce il partito socialista, diviso in social democratico e comunista. Gli uomini di riferimento di questo partito erano <code>Rosa Luxemburg</code> e <code>Karl Liebknecht</code> I quali furono assassinati da gruppi nazionalisti di destra. Quando Hitler salir\xE0 al potere continuer\xE0 a considerare i social democratici che hanno firmato come degli infami diceva che non avrebbero dovuto firmare, e il fatto che fossero social democratici era un\u2019aggravante.</p>
<p>Nel 1919 nasce la repubblica (governo social democratico), c\u2019\xE8 il suffragio universale con la costituzione firmata a Weimar. \xC8 una repubblica federale di 16 stati, la sede del parlamento \xE8 il Reichstag A Berlino. La repubblica ha un presidente e un cancelliere. In Germania c\u2019\xE8 la camera elettiva e la camera federale dei lander, dove vengono eletti i rappresentati di ogni stato federale.
Dopo la prima guerra mondiale la Germania aveva una situazione drammatica, erano nati dei partiti di destra, che accusavano il partito socialista di aver svenduto la germania ai vincitori della guerra.
Intorno al 1919 vengono create le <code>SA</code>, <code>camicie brune</code> o <code>reparti d&#39;assalto</code>, molto simili alle camicie nere di mussolini. Il capo era Ernst R\xF6hm, amico di Hitler, che aveva combattuto nella prima guera mondiale. Hitler, che viveva a Monaco nel 1923 aiutato dalle SA organizz\xF2 il famoso <code>Push di Monaco</code>, un colpo di stato per riunire tutti coloro avevano una visione di destra, come fece Mussolini a Roma. Hitler, le SA e alcuni amici organizzarono il push in una birreria a Monaco di Baviera. Il push fu scoperto, e insieme a Ron e altri finirono in prigione. Tra questi c\u2019era anche Rudolf Hess. Hitler doveva rimanere in carcere 5 anni, in realt\xE0 usc\xEC dopo 9 mesi. Quando era in carcere fu trattato bene, si parla di prigione d\u2019orata, dove scrive il <code>Mein Kampf</code> (la mia battaglia), il libro nel quale elabora e descrive il suo progetto politico.</p>
<p>Alle elezioni del 1930 si present\xF2 anche il partito di Hitler, formatosi con il push, che prese il 18,3% dei voti. La popolazione credeva fortemente in una visione politica di destra, perch\xE8 dava <code>sicurezza e garanzia</code>. Nel 1932 furono nuovamente indette le elezioni ed il partito nazista pass\xF2 al 37,4% dei voti.  La popolazione venerava le SA, perch\xE8 erano gentili e davano sicurezza.  Nelle elezioni del 1933 il partito nazista divenne il primo partito tedesco, l\u2019allora presidente Hindenburg Fu costretto a nominare <code>Hitler come cancelliere, presidente del consigio e capo del governo</code>. Mantenne l\u2019articolo 48 della costituzione di Weimar che diceva \u201Cnel caso in cui l\u2019ordine pubblico sia messo in pericolo il primo ministro pu\xF2 adottare le misure necessarie, anche le forze armate, per ripreistinare l\u2019ordine\u201D. </p>
<p>Nel <code>1933</code> quindi Hitler prende il potere attraverso un percorso democratico, e finisce la repubblica di Weimar, le SS sostituiscono le SA nella <code>notte dei lunghi coltelli</code>. La repubblica di Weimar deve essere ricordata per la Bauhaus.<strong>*</strong></p>
<blockquote><p><strong>* Bauhaus</strong> \xE8 una scuola che ebbe la sua nascita a Weimar, poi Berlino. Fu ideata dall\u2019architetto Gropius e aveva lo scopo di diffondere un nuovo stile che avesse come principio la <code>linearit\xE0, la razionalit\xE0, ordine e metodo</code>. All\u2019interno di questa scuola nasce il cemento armato. Il Bauhaus riguarda anche la nascita del <code>design</code>, dei prodotti belli pensati per la massa. Il design \xE8 l\u2019idea del bello applicato alla produzione di massa.
Il Bauhaus fu chiuso quando Hitler sal\xEC al potere (1933).</p></blockquote>
<h2>Il programma politico di Hitler:</h2>
<p>Quando era in carcere scrisse il libro \u201Cla mia battaglia\u201D, dove elabora il programma di governo:</p>
<ul><li><strong>Razzismo</strong>: sostiene che la razza esiste, la razza ariana \xE8 la razza per definizione perch\xE8 nella societ\xE0 medioevale, quando \xE8 iniziata la civilt\xE0 pi\xF9 moderna c\u2019erano gli indoeuropei. Questo popolo veniva dalle steppe della russia e progressivamente si \xE8 spostato verso l\u2019europa. Spostandosi lingue e costumi sono entrate i contatto con i popoli della zona, dando origine alle lingue indoeuropee. Oltre alle neolatine, germaniche e anglosassoni ci sono la slava e l\u2019ebreo, che per\xF2 non si sono diffuse. Per questo motivo venivano definiti inferiori. Indipendentemente dalla ragione linguistica, l\u2019odio verso gli ebrei \xE8 perch\xE8 erano una societ\xE0 ben strutturata, molto ricchi e avanzati che, essendo sempre stata perseguitata, ovunque \xE8 andata ha portato con s\xE8 i suoi beni. Erano commercianti, uomini della finanza, viaggiavano con i brillanti e i diamanti in tasca. Non investivano nelle case, ma in beni facili da spostare. Hitler in realt\xE0 gli odiava perch\xE8 rappresentavano un <code>pericolo politico ed economico</code>. Gli ha odiati al punto tale da pianificarne lo sterminio. Odiava anche gli slavi che considerava un popolo destinato ad essere schiavo, un popolo inferiore. Questo perch\xE8 il suo obiettivo era quello di creare lo <code>spazio vitale</code>, espandere quindi i territori verso est, nelle zone dell\u2019ex impero germanico. C\u2019era anche il grano e il petrolio di cui la Germania era dipendente. </li>
<li><strong>Esalta la guerra</strong>, ritiene che la guerra sia un modo per risolvere i contrasti, sia una purificazione, un\u2019occasione per dimostrare la grandezza della nazione tedesca. </li>
<li><strong>Odiava la societ\xE0 di massa</strong> e appoggiava una societ\xE0 pi\xF9 legata ai valori originari. Dimostra l\u2019ambivalenza di Hitler. Condannare la societ\xE0 di massa vuol dire condannare il capitalismo. Lui per\xF2 odiava il comunismo. Il suo partito si chiamava \u201Cnazional socialista\u201D, quindi nella sua ideologia c\u2019era da una parte l\u2019idea del capitalismo, della destra e dall\u2019altra l\u2019idea di una societ\xE0 organizzata e controllata dallo stato. Era profondamente anticomunista, il comunismo pervede l\u2019assenza di propriet\xE0 privata, dove tutti gli uomini sono uguali. In realt\xE0 \xE8 un uomo di destra che non crede nell\u2019ugualianza degli uomini</li>
<li><strong>Istituisce il partito nazional socialista</strong> E affianca le SS alle SA. Il simbolo del nazismo \xE8 la <code>svastica</code>, \xE8 un simbolo di origine indiana e indica una croce con i bracci piegati. Era secondo l\u2019identit\xE0 indiana il simbolo della vita, di fortuna, i nazisti usarono questo simbolo come esempio di popolo ariano (ario, indoeuropeo), simbolo della loro idea. Il rosso \xE8 la rappresentazione del concetto di sociele, il bianco \xE8 simbolo della dimensione capitalista e privata dello stato. </li></ul>
<p>L\u2019uomo superiore soggiogher\xE0 il mondo, \xE8 un testo preso dal main kanpf, Hitler scrive:<br>
<code>&quot;Io ho una visione razista del mondo, lo stato germanico deve avere come fondamento l&#39;idea di una razza superiore, la razza superiore \xE8 l&#39;ariana e se scompare scompare la societ\xE0&quot;. Gli ebrei sono decomposizione, distruttori della societ\xE0, non si pu\xF2 giungere alla conquiesta dei territori con le preghiere o la diplomazia, ma solo con la forza armata&quot;.</code></p>
<p>Poco dopo l\u2019elezione di Hitler (1933) Il parlamento fu incendiato e la colpa fu attribuita ai comunisti (accusati per aver firmato il trattato di Wersailles). Il parlamento \xE8 un palazzo della seconda met\xE0 dell\u2019800, erano stati i nazisti ad incendiarlo, come stratagemma per attribuire a loro le questioni irrisolte della Germania. Hitler inizia il <code>processo di nazificazione della societ\xE0</code>. Mussolini modifica le istituzioni (fase legalitaria) in due anni. Hitler ci mette solo sei mesi. </p>
<ul><li>Fa un <strong>programma di odio nei confronti dei comunisti</strong>, che vengono rinchiusi nei lagher<strong>*</strong>. </li>
<li>Fine del sistema parlamentare e <strong>istituzione del totalitarismo</strong>.</li>
<li><strong>Eliminazione dei sindacati</strong> che sono sostituiti da una sorta di corporazioni.</li>
<li>Il <strong>partito coincide con lo stato</strong>, ogni forma di opposizione politica viene eliminata. C\u2019\xE8 solo il partito nazista</li>
<li>Utilizzo della <strong>censura</strong>, passavano solo le informazione che Hitler riteneva necessarie. </li>
<li>Ghebels \xE8 <strong>ministro della comunicazione e della propaganda</strong>.</li>
<li>C\u2019\xE8 un <strong>esercito del partito</strong>, Hitler aveva istituito un esercito di partito, le SA. Nella notte dei lunghi coltelli, poich\xE8 le SA non seguivano esattamente le direttive di Hitler, furono trasformate in SS. Alle SS affianc\xF2 la <code>Ghestapo</code>, una sorta di polizia segreta. Quando il sistema nazista si impose a queste forze furono dati grandi compiti. La Ghestapo fece il censimento degli ebrei. Il responsabile delle SS era Himmler. Divenne uno dei nazisti pi\xF9 potenti.</li>
<li>Hitler <strong>si fece chiamare F\xFChrer</strong>, traduzione di Duce, ossia \u201Ccolui che conduce\u201D. <blockquote><p><strong>* Lagher</strong> sono campi di concentramento, dei luoghi dove le persone vengono concentrate. Vengono concentrate le persone che rappresentavano un problema o un peso per il mantenimento del sistema nazista, sono: zingari, omosessuali, disabili, comunisti, ebrei. Gli zingari arrivano dalla zona interna della Ex Jugoslavia, si dice che rubassero a causa del contatto della loro societ\xE0 e il mondo occidentale.</p></blockquote></li></ul>
<p>Hitler fu votato dalla popolazione e quindi il suo conseso fu ampio. La popolazione credeva nella capacit\xE0 di Hitler di risollevare le sorti della Germania. Cerc\xF2 di intervenire per migliorare la societ\xE0 tedesca, rendendola pi\xF9 forte, incentivanodo il ruolo dell\u2019esercito etc. Aument\xF2 la spesa pubblica destinata al riarmo.
La chiesa tedesca, che dalla riforma luterana era protestante, inizialmente non oppose contrasti ad Hitler perch\xE8 era sempre vicina al potere politico. C\u2019era un consenso implicito.</p>
<h2>Pianificazione nazista sulla questione degli ebrei:</h2>
<p>Tutti coloro che Hitler considerava nemici del popolo non furono concentrati, individuati e uccisi a caso, ma vi fu un <code>processo di pianificazione e progettazione</code> della <code>individuazione, concentramento ed eliminazione</code>. La differenza tra Hitler e il passato sta nella pianificazione e progettazione. Gli imperatori romani hanno passato secoli a fare la guerra. Nessuno nella storia ha pianificato e progettato la distruzione di massa. I campi furono idustrie estrememente reditizie per la germania. La pianificazione si suddivide in tre parti:</p>
<ul><li><code>1933-1939</code> <strong>Definizione</strong>: vuol dire definire le ragioni della concentrazione. Furono istituite le <code>liste</code> e individuati gli ebrei. <code>Vengono creati i campi di concentramento</code>, inizialmente avevano uno scopo educativo, luoghi dove andavano oppositori politici. In questi campi andavano e venivano inviate le persone che si ribellavano al programma di Hitler e lavoravano, facevano strade, ponti etc. C\u2019\xE8 l\u2019applicazione dell\u2019arianizzazione della societ\xE0, ossia una societ\xE0 fondata sulla razza pura.</li>
<li><code>1939-1940</code> <strong>Concentrazione</strong>: gli ebrei vennero rinchiusi nei quartieri, nei <code>ghetti</code>. Nei ghetti venivano identificati, avevano una stella gialla e non potevano uscire. Non erano inventati da Hitler, c\u2019erano gi\xE0 con la peste.</li>
<li><code>1941-1945</code> <strong>Annientamento</strong>. Si parla di <code>shoah</code> o olocausto. I campi diventano lagher con lo scopo dell\u2019eliminazione dei non ariani. Avvenne prima attraverso le fosse, poi con l\u2019utilizo dello zilcon B per dare avvio alla \u201Csoluzione finale\u201D. </li></ul>
<h2>Le leggi contro gli ebrei:</h2>
<p>Gli ebrei pi\xF9 degli altri furono soggettti alle repressioni della Germania di Hitler. Nel 1933 gi\xE0 iniziarono da parte delle SA i primi atti di violenza, venivano <code>bastonati</code> per strada, <code>distrutte le case</code> o i beni e furono <code>boicottati i negozi</code> ebrei. Nel 1933 era proibito andare a fare acquisti nei negozi degli ebrei. Gli ebrei erano principalmente commercianti. Tutti gli ebrei che lavoravano nella pubblica amministrazione dovevano andare in pensione. Il luogo pi\xF9 colpito fu l\u2019universit\xE0 perch\xE8 molti docenti ebrei dovettero andarsene, lasciando cattedre libere (sopratutto di matematica, fisica e scienze). Nel 1935 eman\xF2 le <code>leggi di Norimberga</code>, le leggi che definiscono l\u2019odio nei confronti degli ebrei, per le quali i cittadini ebrei non godevano della cittadinanza, non potevano sposare cittadini tedeschi, non potevano andare a scuola, cinema, concerti, mostre etc. Chi era titolare di un industria doveva venderla a prezzi irrisori, divennero tutte aziende controllate dallo stato. Nella <code>notte dei cristalli</code> del 1938 i negozi degli ebrei furono distrutti, le vetrine furono prese a sprangate e molti ebrei furono catturati e deportati. Molti furono prelevati dalle sinagoghe, dalle abitazioni, furono incendiate delle sinagoghe. </p>
<p>La banalit\xE0 del male (Hannah Arendt)
\xC8 un libro che parla del processo ad Heicmann avvenuto a Gerusalemme ad un gerarca nazista. I gerarchi hanno compiuto lo sterminio. Nel 1945, quando i Russi entrarono ad Auswitz e la liberarono. I gerarchi nazisti all\u2019arrivo dei russi erano persenti sui campi. Furono quindi cercati, per fare i processi. I gerarchi per\xF2 si erano basati sulla legge e gli oridini di Hitler, quindi non avevano compiuto reati. Per quanto la legge di uno stato sia sovrana non pu\xF2 andare contro i diritti umani.</p>`;
});
var IlNazismo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Il_nazismo
});
var prerender$2 = true;
var Storia = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Storia</title>`, ""}`, ""}

${validate_component(IndicePath, "IndicePath").$$render($$result, {}, {}, {})}

<section>${validate_component(RaccoltaIndiceElement, "RaccoltaIndiceElement").$$render($$result, {json: pagesSummary[0].slaves}, {}, {})}</section>`;
});
var Storia$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Storia,
  prerender: prerender$2
});
var prerender$1 = true;
var Scuola = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Scuola</title>`, ""}`, ""}

<section><h1>Benvenuto nella sezione scuola</h1>

	<p>Qui troverai tutti gli appunti divisi per materie etc...</p>

	<p>Materie:</p>

	${validate_component(RaccoltaIndiceElement, "RaccoltaIndiceElement").$$render($$result, {json: pagesSummary}, {}, {})}
</section>`;
});
var scuola = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Scuola,
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
