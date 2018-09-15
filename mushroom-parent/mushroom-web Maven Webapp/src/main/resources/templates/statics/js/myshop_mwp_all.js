var M = function() {
	"use strict";

	function e() {}

	function t(e) {
		W = e
	}

	function n() {
		for(var e = [], t = arguments.length; t--;) e[t] = arguments[t];
		if(W) return V ? console.log.apply(console, e) : console.log(e)
	}

	function o() {
		for(var e = [], t = arguments.length; t--;) e[t] = arguments[t];
		if(W) return V ? console.warn.apply(console, e) : console.warn(e)
	}

	function r() {
		for(var e = [], t = arguments.length; t--;) e[t] = arguments[t];
		if(W) return V ? console.error.apply(console, e) : console.error(e)
	}

	function i() {
		var e = window.M_ENV;
		e && "online" !== e && (t(!0), K = "local" === e || "develop" === e, Z = "pre" === e, ee = "daily" === e || "test" === e, e === !0 ? (Z = !0, ee = !1) : "edit" != e && "preview" != e || (K = !0))
	}

	function a(e) {
		return "undefined" == typeof e ? K || Z || ee : "local" === e ? K : "pre" === e ? Z : "test" === e && ee
	}

	function c(e, t) {
		void 0 === t && (t = !0);
		var n = e.split(ne),
			o = t ? decodeURIComponent : ie;
		return n.reduce(function(e, t) {
			t = t.replace(oe, "%20");
			var n, r, i = t.indexOf("=");
			return i < 0 ? (n = t, r = "") : (n = t.slice(0, i), r = t.slice(i + 1)), n = o(n), r = o(r), re.call(e, n) ? Array.isArray(e[n]) ? e[n].push(r) : e[n] = [e[n], r] : e[n] = r, e
		}, {})
	}

	function u(e, t) {
		if(void 0 === t && (t = !0), !e) return "";
		var n = t ? encodeURIComponent : ie;
		return Object.keys(e).map(function(t) {
			var o = e[t];
			return t = n(t), Array.isArray(o) ? o.map(function(e, o) {
				return t + "[" + o + "]=" + n(e)
			}).join("&") : t + "=" + n(o)
		}).join("&")
	}

	function s(e) {
		return e && "object" == typeof e
	}

	function d(e) {
		return "undefined" != typeof FormData && e instanceof FormData
	}

	function f(e) {
		var t = document.head || document.getElementsByTagName("head")[0];
		t.appendChild(e)
	}

	function l() {}

	function p(e, t, n) {
		function o() {
			r.parentNode && r.parentNode.removeChild(r);
			try {
				delete window[i]
			} catch(e) {
				window[i] = void 0
			}
		}
		var r, i = t.jsonpCallback || "httpCb" + v();
		window[i] = function(e) {
			o(), n(null, e), n = null
		};
		var a = {
			callback: i
		};
		t.cache || (a._ = Date.now()), e = g(e, Object.assign({}, t.data, a)), r = document.createElement("script"), r.src = e, r.type = "text/javascript", r.async = !0;
		var c = function(e) {
			(e && "error" === e.type || null !== n) && (o(), n(new Error(fe)))
		};
		de && "onreadystatechange" in r ? r.onreadystatechange = function() {
			"complete" === r.readyState && (r.onreadystatechange = null, f(r), c({
				type: "load"
			}));
			var e = r.readyState;
			try {
				r.children
			} catch(t) {}
			"loaded" === e && "loading" === r.readyState && (r.onreadystatechange = null, c({
				type: "error"
			}))
		} : (r.onload = r.onerror = c, f(r))
	}

	function h(e, t, n) {
		var o = t.data,
			r = new XMLHttpRequest;
		"GET" === t.method && (e = g(e, o), o = null), r.open(t.method, e), r.withCredentials = "omit" !== t.credentials, r.onreadystatechange = function() {
			if(r.readyState === XMLHttpRequest.DONE)
				if(r.onreadystatechange = l, 200 === r.status) try {
					var e;
					e = "json" === t.dataType ? "" === r.responseText ? null : JSON.parse(r.responseText) : r.responseText, n(null, e)
				} catch(o) {
					n(o)
				} else n(new Error(fe))
		};
		try {
			var i = t.headers;
			d(o) && delete i["content-type"], Object.keys(i).forEach(function(e) {
				r.setRequestHeader(e, i[e])
			}), o ? d(o) ? r.send(o) : i["content-type"].indexOf(se.json) >= 0 ? r.send(JSON.stringify(o)) : r.send(u(o)) : r.send(null)
		} catch(a) {
			n(a)
		}
	}

	function m(e, t, n) {
		var o = t.data,
			r = {
				method: t.method,
				headers: t.headers,
				credentials: t.credentials
			};
		"GET" === t.method ? e = g(e, o) : o && (d(o) ? (r.body = o, delete r.headers["content-type"]) : t.headers["content-type"].indexOf(se.json) >= 0 ? r.body = JSON.stringify(o) : r.body = u(o)), y(e) || (r.mode = "cors"), ae(e, r).then(function(e) {
			switch(t.dataType) {
				case "json":
					return e.json();
				case "text":
				default:
					return e.text()
			}
		}).then(function(e) {
			n(null, e)
		})["catch"](function() {
			n(new Error(fe))
		})
	}

	function y(e) {
		try {
			var t = document.createElement("a");
			return t.href = e, t.href = t.href, t.protocol === ce.protocol && t.hostname === ce.hostname && t.port === ce.port
		} catch(n) {
			return !0
		}
	}

	function g(e, t) {
		if(t) {
			var n = e.split("?"),
				o = n[0],
				r = n[1];
			r && (t = Object.assign(c(r), t));
			var i = u(t);
			i && (e = o + "?" + i)
		}
		return e
	}

	function v() {
		return String(Date.now()) + String((90 * Math.random() | 0) + 10)
	}

	function w(e, t) {
		s(e) ? (t = e, e = t.url) : "undefined" == typeof t && (t = {}), e = e.replace(/^https?:/, ""), "string" == typeof t.data && (t.data = c(t.data)), t.type && (t.method = t.type, delete t.type), t.method && (t.method = t.method.toUpperCase()), t = Object.assign({}, le, t);
		var n = Object.assign({}, le.headers, t.headers);
		return t.contentType && (n["content-type"] = t.contentType, delete t.contentType), t.headers = Object.keys(n).reduce(function(e, t) {
			return e[t.toLowerCase()] = n[t], e
		}, {}), new Promise(function(n, o) {
			var r = function(e, t) {
				return r = l, e ? o(e) : void n(t)
			};
			"jsonp" === t.dataType ? p(e, t, r) : t.forceXHR || "function" != typeof ae ? window.XMLHttpRequest ? h(e, t, r) : o(new Error("No supported way to send request.")) : m(e, t, r)
		})
	}

	function j(e, t) {
		return Object.assign(s(e) ? e : t = t || {}, {
			method: "GET"
		}), w(e, t)
	}

	function b(e, t) {
		return Object.assign(s(e) ? e : t = t || {}, {
			method: "POST"
		}), w(e, t)
	}

	function T(e, t) {
		return Object.assign(s(e) ? e : t = t || {}, {
			dataType: "jsonp"
		}), w(e, t)
	}

	function M(e) {
		var t = document.createElement("b");
		return t.innerHTML = "<!--[if IE " + e + "]><i></i><![endif]-->", 1 === t.getElementsByTagName("i").length
	}

	function O(e) {
		return void 0 === e && (e = window.M.MGJ), !!(e && e.name && e.ua) && e.ua.test(he)
	}

	function A(e) {
		e = e || location.href, Ce ? location.href = "mgj://login" : location.href = location.protocol + "//portal.mogujie.com/login?redirect_url=" + encodeURIComponent(e)
	}

	function _(e) {
		Te = e
	}

	function x() {
		return be = new Promise(function(e, t) {
			ke.h5.hdp ? ke.h5.hdp.exec("mgj.user.getUserInfo").then(function(t) {
				Fe = !1, je = {
					name: t.uname,
					uid: t.uid,
					avatar: t.avatar,
					_sync: !0
				}, e(je)
			})["catch"](function(e) {
				Fe = !1, t(e)
			}) : (Fe = !1, t("### M.js: \u8bf7\u5728\u6a21\u677f\u5f15\u5165hdp.js\u4f9d\u8d56"))
		})
	}

	function S(e) {
		return be = new Promise(function(t, n) {
			ke.http.jsonp(e).then(function(e) {
				Fe = !1, e && e.result && e.result.uid ? (e.result._sync = !0, je = e.result, t(e.result)) : n("Error")
			})["catch"](function(e) {
				Fe = !1, n(e)
			})
		})
	}

	function D(e, t) {
		return "undefined" == typeof t && (t = Te), Fe ? be : !je || e ? (Fe = !0, ke.ua["native"] ? x() : S(t)) : (je._sync = !1, Promise.resolve(je))
	}

	function E(e, t, n) {
		var o = Date.now();
		if(Me) {
			var r = {
				time: new Date(Me + o - Oe),
				_sync: !1
			};
			e(r)
		} else t(n)
	}

	function q(e) {
		_e = e
	}

	function H(e, t) {
		return "undefined" == typeof t && (t = _e), Pe ? Ae : !Me || e ? (Pe = !0, Ae = new Promise(function(e, n) {
			ke.http.jsonp(t, {
				jsonpCallback: "jquery_get_time_ver1"
			}).then(function(t) {
				Pe = !1, t && t.result && t.result.time ? (Me = 1e3 * t.result.time, Oe = Date.now(), e({
					time: new Date(Me),
					_sync: !0
				})) : E(e, n)
			})["catch"](function(t) {
				Pe = !1, E(e, n, t)
			})
		})) : new Promise(function(e) {
			var t = Date.now();
			e({
				time: new Date(Me + t - Oe),
				_sync: !1
			})
		})
	}

	function I(e, t) {
		xe = e, Se = t
	}

	function C() {
		return De = ke.fn.getCookie(Se), ze ? Ee : De ? Promise.resolve(De) : (ze = !0, Ee = new Promise(function(e, t) {
			Re(xe).then(function() {
				ze = !1, De = ke.fn.getCookie(Se), e(De)
			})["catch"](function(e) {
				ze = !1, t(e)
			})
		}))
	}

	function k() {
		return ke.isApp(ke.XCore) ? new Promise(function(e, t) {
			ke.h5.hdp ? ke.h5.hdp.exec("mgj.user.getUserInfo").then(function(n) {
				var o = n.sign.split("/");
				o[0] ? e(o[0]) : t(new Error("uuid not found"))
			})["catch"](function(e) {
				t(e)
			}) : t("### M.js: \u8bf7\u5728\u6a21\u677f\u5f15\u5165hdp.js\u4f9d\u8d56")
		}) : C()
	}

	function F(e) {
		var t = ke.fn.getCookie("nekot");
		return t ? ke.fn.setQueryString(e, "token", encodeURIComponent(t)) : Je ? ke.fn.setQueryString(e, "token", encodeURIComponent(Je)) : e
	}

	function P(e) {
		Le = e
	}

	function R(e) {
		return e && "object" == typeof e
	}

	function z(e, t, n, o) {
		e = F(e), w(e, t).then(function(e) {
			n(e)
		})["catch"](function(e) {
			o(e)
		})
	}

	function U(e, t) {
		var n = window.logger,
			o = ke.fn.getCookie("nekot");
		n && n.log("016001003", {
			token: o,
			success: t,
			__uuid: ke.fn.getCookie("__mgjuuid"),
			useragent: navigator.userAgent,
			domain: e
		})
	}

	function N(e) {
		return w("//" + e + Ne, {
			dataType: "jsonp"
		}).then(function(t) {
			return t && "0" === t.returnCode && t.success === !0 ? (Je = t.data || "", U(e, !0), !0) : (U(e), e !== Xe && N(Xe))
		})["catch"](function() {
			return U(e), e !== Xe && N(Xe)
		})
	}

	function L(e, t, n, o) {
		var r = t.tokenDomain || Le;
		w(e, t).then(function(i) {
			i && "-1" === i.returnCode && i.success === !1 ? N(r).then(function(r) {
				r ? z(e, t, n, o) : n(i)
			}) : n(i)
		})["catch"](function(e) {
			o(e)
		})
	}

	function J(e, t) {
		return R(e) ? (t = e, e = t.url) : "undefined" == typeof t && (t = {}), "POST" === t.method && ke.ua.qqbrowser && ke.ua.iphone && (t.forceXHR = !0), "jsonp" !== t.dataType ? w(e, t) : new Promise(function(n, o) {
			e = F(e), Ue().then(function() {
				L(e, t, n, o)
			}, function() {
				L(e, t, n, o)
			})
		})
	}

	function G(e, t) {
		return Object.assign(R(e) ? e : t = t || {}, {
			dataType: "jsonp"
		}), J(e, t)
	}

	function X(e, t) {
		return Object.assign(R(e) ? e : t = t || {}, {
			method: "POST"
		}), J(e, t)
	}
	Array.isArray || (Array.isArray = function(e) {
			return "[object Array]" === Object.prototype.toString.call(e)
		}), Array.prototype.map || (Array.prototype.map = function(e, t) {
			var n, o, r;
			if(null == this) throw new TypeError(" this is null or not defined");
			var i = Object(this),
				a = i.length >>> 0;
			if("function" != typeof e) throw new TypeError(e + " is not a function");
			for(arguments.length > 1 && (n = t), o = new Array(a), r = 0; r < a;) {
				var c, u;
				r in i && (c = i[r], u = e.call(n, c, r, i), o[r] = u), r++
			}
			return o
		}), Array.prototype.reduce || (Array.prototype.reduce = function(e) {
			if(null === this) throw new TypeError("Array.prototype.reduce called on null or undefined");
			if("function" != typeof e) throw new TypeError(e + " is not a function");
			var t, n = Object(this),
				o = n.length >>> 0,
				r = 0;
			if(2 == arguments.length) t = arguments[1];
			else {
				for(; r < o && !(r in n);) r++;
				if(r >= o) throw new TypeError("Reduce of empty array with no initial value");
				t = n[r++]
			}
			for(; r < o; r++) r in n && (t = e(t, n[r], r, n));
			return t
		}), Date.now || (Date.now = function() {
			return(new Date).getTime()
		}), Function.prototype.bind || (Function.prototype.bind = function(e) {
			if("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
			var t = Array.prototype.slice.call(arguments, 1),
				n = this,
				o = function() {},
				r = function() {
					return n.apply(this instanceof o ? this : e, t.concat(Array.prototype.slice.call(arguments)))
				};
			return this.prototype && (o.prototype = this.prototype), r.prototype = new o, r
		}), "function" != typeof Object.assign && ! function() {
			Object.assign = function(e) {
				var t = arguments;
				if("undefined" == typeof e || null === e) throw new TypeError("Cannot convert undefined or null to object");
				for(var n = Object(e), o = 1; o < arguments.length; o++) {
					var r = t[o];
					if("undefined" != typeof r && null !== r)
						for(var i in r) r.hasOwnProperty(i) && (n[i] = r[i])
				}
				return n
			}
		}(), Object.keys || (Object.keys = function() {
			var e = Object.prototype.hasOwnProperty,
				t = !{
					toString: null
				}.propertyIsEnumerable("toString"),
				n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
				o = n.length;
			return function(r) {
				if("object" != typeof r && ("function" != typeof r || null === r)) throw new TypeError("Object.keys called on non-object");
				var i, a, c = [];
				for(i in r) e.call(r, i) && c.push(i);
				if(t)
					for(a = 0; a < o; a++) e.call(r, n[a]) && c.push(n[a]);
				return c
			}
		}()),
		function(e) {
			function t() {}

			function n(e, t) {
				return function() {
					e.apply(t, arguments)
				}
			}

			function o(e) {
				if("object" != typeof this) throw new TypeError("Promises must be constructed via new");
				if("function" != typeof e) throw new TypeError("not a function");
				this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], s(e, this)
			}

			function r(e, t) {
				return 3 === e._state && (e = e._value), 0 === e._state ? void e._deferreds.push(t) : (e._handled = !0, void o._immediateFn(function() {
					var n = 1 === e._state ? t.onFulfilled : t.onRejected;
					if(null === n) return void(1 === e._state ? i : a)(t.promise, e._value);
					var o;
					try {
						o = n(e._value)
					} catch(r) {
						return void a(t.promise, r)
					}
					i(t.promise, o)
				}))
			}

			function i(e, t) {
				try {
					if(t === e) throw new TypeError("A promise cannot be resolved with itself.");
					if(t && ("object" == typeof t || "function" == typeof t)) {
						var r = t.then;
						if(t instanceof o) return e._state = 3, e._value = t, void c(e);
						if("function" == typeof r) return void s(n(r, t), e)
					}
					e._state = 1, e._value = t, c(e)
				} catch(i) {
					a(e, i)
				}
			}

			function a(e, t) {
				e._state = 2, e._value = t, c(e)
			}

			function c(e) {
				2 === e._state && 0 === e._deferreds.length && o._immediateFn(function() {
					e._handled || o._unhandledRejectionFn(e._value)
				});
				for(var t = 0, n = e._deferreds.length; t < n; t++) r(e, e._deferreds[t]);
				e._deferreds = null
			}

			function u(e, t, n) {
				this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
			}

			function s(e, t) {
				var n = !1;
				try {
					e(function(e) {
						n || (n = !0, i(t, e))
					}, function(e) {
						n || (n = !0, a(t, e))
					})
				} catch(o) {
					if(n) return;
					n = !0, a(t, o)
				}
			}
			var d = setTimeout;
			o.prototype["catch"] = function(e) {
				return this.then(null, e)
			}, o.prototype.then = function(e, n) {
				var o = new this.constructor(t);
				return r(this, new u(e, n, o)), o
			}, o.all = function(e) {
				var t = Array.prototype.slice.call(e);
				return new o(function(e, n) {
					function o(i, a) {
						try {
							if(a && ("object" == typeof a || "function" == typeof a)) {
								var c = a.then;
								if("function" == typeof c) return void c.call(a, function(e) {
									o(i, e)
								}, n)
							}
							t[i] = a, 0 === --r && e(t)
						} catch(u) {
							n(u)
						}
					}
					if(0 === t.length) return e([]);
					for(var r = t.length, i = 0; i < t.length; i++) o(i, t[i])
				})
			}, o.resolve = function(e) {
				return e && "object" == typeof e && e.constructor === o ? e : new o(function(t) {
					t(e)
				})
			}, o.reject = function(e) {
				return new o(function(t, n) {
					n(e)
				})
			}, o.race = function(e) {
				return new o(function(t, n) {
					for(var o = 0, r = e.length; o < r; o++) e[o].then(t, n)
				})
			}, o._immediateFn = "function" == typeof setImmediate && function(e) {
				setImmediate(e)
			} || function(e) {
				d(e, 0)
			}, o._unhandledRejectionFn = function(e) {
				"undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
			}, o._setImmediateFn = function(e) {
				o._immediateFn = e
			}, o._setUnhandledRejectionFn = function(e) {
				o._unhandledRejectionFn = e
			}, "undefined" != typeof module && module.exports ? module.exports = o : e.Promise || (e.Promise = o);
			var f = navigator.userAgent.toLowerCase();
			/iphone|ipad|ipod/.test(f) && /xcore/.test(f) && (e.Promise = o)
		}(window),
		function() {
			for(var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
			window.requestAnimationFrame || (window.requestAnimationFrame = function(t) {
				var n = +new Date,
					o = Math.max(0, 16 - (n - e)),
					r = window.setTimeout(function() {
						t(n + o)
					}, o);
				return e = n + o, r
			}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
				clearTimeout(e)
			})
		}(),
		function() {
			Date.format = function(e, t) {
				var n = Date.formatLogic,
					o = t.indexOf("a") !== -1 || t.indexOf("A") !== -1,
					r = [];
				r.d = e.getDate(), r.dd = n.pad(r.d, 2), r.ddd = n.i18n.shortDayNames[e.getDay()], r.dddd = n.i18n.dayNames[e.getDay()], r.M = e.getMonth() + 1, r.MM = n.pad(r.M, 2), r.MMM = n.i18n.shortMonthNames[r.M - 1], r.MMMM = n.i18n.monthNames[r.M - 1], r.yyyy = e.getFullYear(), r.yyy = n.pad(r.yyyy, 2) + "y", r.yy = n.pad(r.yyyy, 2), r.y = "y", r.H = e.getHours(), r.hh = n.pad(o ? n.convertTo12Hour(r.H) : r.H, 2), r.h = o ? n.convertTo12Hour(r.H) : r.H, r.HH = n.pad(r.H, 2), r.m = e.getMinutes(), r.mm = n.pad(r.m, 2), r.s = e.getSeconds(), r.ss = n.pad(r.s, 2), r.z = e.getMilliseconds(), r.zz = r.z + "z", r.zzz = n.pad(r.z, 3), r.ap = r.H < 12 ? "am" : "pm", r.a = r.H < 12 ? "am" : "pm", r.AP = r.H < 12 ? "AM" : "PM", r.A = r.H < 12 ? "AM" : "PM";
				for(var i = 0, a = "", c = ""; i < t.length;) {
					for(c = t.charAt(i); i + 1 < t.length && void 0 !== r[c + t.charAt(i + 1)];) c += t.charAt(++i);
					a += void 0 !== r[c] ? r[c] : c, i++
				}
				return a
			}, Date.formatLogic = {
				pad: function(e, t) {
					var n = 1,
						o = "";
					if(t < 1) return "";
					for(var r = 0; r < t; r++) n *= 10, o += "0";
					var i = e;
					return i = o + e, i = i.substring(i.length - t)
				},
				convertTo12Hour: function(e) {
					return e % 12 === 0 ? 12 : e % 12
				},
				i18n: {
					dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
					shortDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
					monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
					shortMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
				}
			}, Date.prototype.toFormattedString = function(e) {
				return Date.format(this, e)
			}, Date.parseFormatted = function(e, t) {
				var n = new Date(2e3, 0, 1),
					o = [];
				o.d = "([0-9][0-9]?)", o.dd = "([0-9][0-9])", o.M = "([0-9][0-9]?)", o.MM = "([0-9][0-9])", o.yyyy = "([0-9][0-9][0-9][0-9])", o.yyy = "([0-9][0-9])[y]", o.yy = "([0-9][0-9])", o.H = "([0-9][0-9]?)", o.hh = "([0-9][0-9])", o.h = "([0-9][0-9]?)", o.HH = "([0-9][0-9])", o.m = "([0-9][0-9]?)", o.mm = "([0-9][0-9])", o.s = "([0-9][0-9]?)", o.ss = "([0-9][0-9])", o.z = "([0-9][0-9]?[0-9]?)", o.zz = "([0-9][0-9]?[0-9]?)[z]", o.zzz = "([0-9][0-9][0-9])", o.ap = "([ap][m])", o.a = "([ap][m])", o.AP = "([AP][M])", o.A = "([AP][M])";
				for(var r = Date.parseLogic, i = 0, a = "", c = new Array(""), u = ""; i < t.length;) {
					for(u = t.charAt(i); i + 1 < t.length && void 0 !== o[u + t.charAt(i + 1)];) u += t.charAt(++i);
					void 0 !== o[u] ? (a += o[u], c[c.length] = u) : a += u, i++
				}
				var s = new RegExp(a),
					d = e.match(s);
				if(void 0 !== d && d.length === c.length) {
					for(i = 0; i < c.length; i++)
						if("" !== c[i]) switch(c[i]) {
							case "yyyy":
							case "yyy":
								n.setYear(r.parseInt(d[i]));
								break;
							case "yy":
								n.setYear(2e3 + r.parseInt(d[i]));
								break;
							case "MM":
							case "M":
								n.setMonth(r.parseInt(d[i]) - 1);
								break;
							case "dd":
							case "d":
								n.setDate(r.parseInt(d[i]));
								break;
							case "hh":
							case "h":
							case "HH":
							case "H":
								n.setHours(r.parseInt(d[i]));
								break;
							case "mm":
							case "m":
								n.setMinutes(r.parseInt(d[i]));
								break;
							case "ss":
							case "s":
								n.setSeconds(r.parseInt(d[i]));
								break;
							case "zzz":
							case "zz":
							case "z":
								n.setMilliseconds(r.parseInt(d[i]));
								break;
							case "AP":
							case "A":
							case "ap":
							case "a":
								("PM" === d[i] || "pm" === d[i]) && n.getHours() < 12 && n.setHours(n.getHours() + 12), "AM" !== d[i] && "am" !== d[i] || 12 !== n.getHours() || n.setHours(0)
						}
					return n
				}
			}, Date.parseLogic = {
				unpad: function(e) {
					for(var t = e; t.length > 1 && "0" === t[0];) t = t.substring(1, t.length);
					return t
				},
				parseInt: function(e) {
					return parseInt(this.unpad(e), 10)
				}
			}, Date.prototype.fromFormattedString = function(e, t) {
				return this.setTime(Date.parseFormatted(e, t).getTime()), this
			}
		}();
	var $, Q = window.localStorage,
		W = !1;
	window.console || (window.console = {}), console.log || (console.log = e), console.warn || (console.warn = e), console.error || (console.error = e), Q && Q.getItem && ($ = Q.getItem("_m_debug"), W = $ === !0 || "true" === $, W && console.log("### M.js:\u5df2\u5f00\u542f\u63a7\u5236\u53f0\u8c03\u8bd5\u6a21\u5f0f!"));
	var V = !0;
	try {
		"undefined" == typeof console.log.apply && (V = !1)
	} catch(Y) {
		V = !1
	}
	var B = function() {
			function e() {
				if(!r) {
					r = !0;
					for(var e = 0; e < o.length; e++) o[e].fn.call(window, o[e].ctx);
					o = []
				}
			}

			function t() {
				"complete" === document.readyState && e()
			}

			function n(n, a) {
				return r ? void setTimeout(function() {
					n(a)
				}, 1) : (o.push({
					fn: n,
					ctx: a
				}), void("complete" === document.readyState || !document.attachEvent && "interactive" === document.readyState ? setTimeout(e, 1) : i || (document.addEventListener ? (document.addEventListener("DOMContentLoaded", e, !1), window.addEventListener("load", e, !1)) : (document.attachEvent("onreadystatechange", t), window.attachEvent("onload", e)), i = !0)))
			}
			var o = [],
				r = !1,
				i = !1;
			return n
		}(),
		K = !1,
		Z = !1,
		ee = !1;
	i(), B(i);
	var te = function() {
			var e = {
					"&": "&amp;",
					"<": "&lt;",
					">": "&gt;",
					'"': "&quot;",
					"'": "&#x27;",
					"`": "&#x60;"
				},
				t = /(&|<|>|"|`|')/g,
				n = {
					escapeHtml: function(n) {
						return n = null == n ? "" : n, n.replace(t, function(t) {
							return e[t]
						})
					},
					getQueryString: function(e, t) {
						if(void 0 === t && (t = location.search), !e) return "";
						t = t.split("#")[0];
						var n = new RegExp("(^|\\?|&)" + e + "=([^&]*)(&|$)", "i"),
							o = t.match(n);
						return o ? decodeURIComponent(o[2]) : ""
					},
					setQueryString: function(e, t, n) {
						var o = new RegExp("([?&])" + t + "=.*?(&|$)", "i"),
							r = e.indexOf("?") !== -1 ? "&" : "?";
						return e.match(o) ? e.replace(o, "$1" + t + "=" + n + "$2") : e + r + t + "=" + n
					},
					setCookie: function(e, t, n) {
						void 0 === n && (n = {}), null !== t && "undefined" != typeof t || (t = "", n.expires = -1);
						var o = "";
						if(n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) {
							var r = new Date,
								i = r.getTime() + 864e5;
							n.expires.getTime && n.expires.getTime() < i ? i = n.expires.getTime() : n.expires === -1 && (i = r.getTime() + 864e5 * n.expires), r.setTime(i), o = "; expires=" + (r.toGMTString ? r.toGMTString() : r)
						}
						var a = n.path ? "; path=" + n.path : "; path=/",
							c = n.secure ? "; secure" : "",
							u = "";
						u = n.domain && n.domain.toString().split(".").length >= 3 ? "; domain=" + n.domain : "; domain=" + document.domain.toString(), document.cookie = [e, "=", encodeURIComponent(t), o, a, u, c].join("")
					},
					getCookie: function(e) {
						var t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
						return null !== t ? decodeURIComponent(t[2]) : ""
					},
					removeCookie: function(e, t) {
						t = t || {}, t.expires = -1, this.setCookie(e, null, t)
					},
					throttle: function(e, t, n) {
						var o, r, i, a = null,
							c = 0;
						n || (n = {});
						var u = function() {
							c = n.leading === !1 ? 0 : Date.now(), a = null, i = e.apply(o, r), a || (o = r = null)
						};
						return function() {
							var s = Date.now();
							c || n.leading !== !1 || (c = s);
							var d = t - (s - c);
							return o = this, r = arguments, d <= 0 || d > t ? (clearTimeout(a), a = null, c = s, i = e.apply(o, r), a || (o = r = null)) : a || n.trailing === !1 || (a = setTimeout(u, d)), i
						}
					},
					debounce: function(e, t, n) {
						var o, r, i, a, c, u = function() {
							var s = Date.now() - a;
							s < t && s > 0 ? o = setTimeout(u, t - s) : (o = null, n || (c = e.apply(i, r), o || (i = r = null)))
						};
						return function() {
							i = this, r = arguments, a = Date.now();
							var s = n && !o;
							return o || (o = setTimeout(u, t)), s && (c = e.apply(i, r), i = r = null), c
						}
					},
					getStrim: function(e, t) {
						void 0 === t && (t = 20);
						for(var n = 0, o = e.split(""), r = o.length, i = 0, a = []; n < r; n++) {
							if(i += /[\u4e00-\u9fa5]/.test(o[n]) ? 2 : 1, i > t) return a.join("") + "...";
							a.push(o[n])
						}
						return a.join("")
					}
				};
			return n
		}(),
		ne = /&/,
		oe = /\+/g,
		re = Object.prototype.hasOwnProperty,
		ie = function(e) {
			return e
		},
		ae = window.fetch,
		ce = window.location,
		ue = "1.1.1",
		se = {
			text: "text/plain",
			form: "application/x-www-form-urlencoded",
			json: "application/json"
		},
		de = window.navigator.userAgent.indexOf("MSIE 8.0") >= 0,
		fe = "\u7f51\u7edc\u9519\u8bef\uff0c\u8bf7\u7a0d\u5019\u518d\u8bd5",
		le = {
			method: "GET",
			dataType: "json",
			headers: {
				"content-type": se.form
			},
			forceXHR: !1,
			credentials: "include",
			cache: !1,
			useHTTPS: !1
		},
		pe = {
			requestWithJSONP: p,
			requestWithXMLRequest: h,
			requestWithFetch: m,
			request: w,
			get: j,
			post: b,
			jsonp: T,
			v: ue,
			ContentType: se
		},
		he = navigator.userAgent.toLowerCase(),
		me = {
			android: he.indexOf("android") > -1,
			iphone: he.indexOf("iphone") > -1,
			wechat: he.indexOf("micromessenger") > -1,
			firefox: he.indexOf("firefox") > -1,
			mobile: /iphone|android|ipod/.test(he),
			ipad: /ipad/.test(he),
			pc: !/iphone|android|ipod/.test(he),
			qq: /qq\/([\d\.]+)/.test(he),
			ie67: M(6) || M(7),
			ie8: M(8),
			mls: /(meilishuo4|mls4)/.test(he),
			mgj: he.indexOf("mogujie4") > -1,
			mgjtg: he.indexOf("mgjtuangou") > -1,
			native: he.indexOf("mogujie4") > -1,
			alipay: /alipayclient\/([\d\.]+)/.test(he),
			qqbrowser: /qqbrowser\/([\d\.]+)/.test(he),
			qzone: /qzone\//.test(he),
			qqdownloader: he.indexOf("qqdownloader") > -1,
			hap: /\shap\/[\w\._\-]+\//.test(he) || he.indexOf("hapmgapp") > -1
		},
		ye = 0,
		ge = /android( |\/)([\.\_\d]+)/.exec(he);
	if(ge && ge.length > 0) {
		var ve = (ge[2] || "").split(".").slice(0, 2);
		ye = ve.join(".")
	}
	ge = /os (\d+)_(\d+)_?(\d+)?/.exec(he), ge && ge.length && (ye = ge[1] + "." + ge[2]);
	var we = 0;
	(me["native"] || me.mls) && (ge = /\/(\d{3,4})[\/ ]/.exec(he), ge && ge.length && (we = ge[1])), me.osVersion = parseFloat(ye), me.appVersion = parseInt(we, 10);
	var je, be, Te, Me, Oe, Ae, _e, xe, Se, De, Ee, qe = te.getQueryString("mlf"),
		He = {
			qmall: "qmall" === qe,
			qzone: "qzone" === qe
		},
		Ie = navigator.userAgent.toLowerCase(),
		Ce = Ie.indexOf("mogujie4") > -1,
		ke = {
			version: "1.4.4",
			MGJ: {
				name: "MOGUJIE",
				ua: /mogujie4/i
			},
			MLS: {
				name: "MEILISHUO",
				ua: /(meilishuo4|mls4)/i
			},
			GO: {
				name: "GO",
				ua: /(go4android|go4iphone)/i
			},
			UNI: {
				name: "UNI",
				ua: /(uni4android|uni4iphone)/i
			},
			isApp: O,
			ua: me,
			mlf: He,
			getServerTime: null,
			getUserInfo: null,
			getUUID: null,
			scope: {},
			h5: {},
			pc: {},
			web: {},
			lib: {},
			fn: te,
			ready: B,
			http: pe,
			log: n,
			warn: o,
			error: r,
			isDev: a,
			login: A
		},
		Fe = !1,
		Pe = !1,
		Re = ke.http.jsonp,
		ze = !1,
		Ue = ke.isApp("XCore") ? k : C,
		Ne = "/csrf/token/jsonp",
		Le = location.hostname || location.host,
		Je = "",
		Ge = Le.match(/([^\.]+\.[^\.]+)$/),
		Xe = "begis." + (Ge ? Ge[0] : "mogujie.com");
	return /^(h5|act)\./.test(Le) && (Le = Xe), q("//time.mogujie.com/time.php"), _("//portal.mogujie.com/api/profile/baseinfo"), I("//portal.mogujie.com/api/util/getUuid", "__mgjuuid"), ke.getUserInfo = D, ke.getServerTime = H, ke.getUUID = C, ke.http.request = J, ke.http.jsonp = G, ke.http.post = X, ke.setTokenDomain = P, ke
}();
var requirejs, require, define;
! function(global) {
	function isFunction(e) {
		return "[object Function]" === ostring.call(e)
	}

	function isArray(e) {
		return "[object Array]" === ostring.call(e)
	}

	function each(e, t) {
		if(e) {
			var i;
			for(i = 0; i < e.length && (!e[i] || !t(e[i], i, e)); i += 1);
		}
	}

	function eachReverse(e, t) {
		if(e) {
			var i;
			for(i = e.length - 1; i > -1 && (!e[i] || !t(e[i], i, e)); i -= 1);
		}
	}

	function hasProp(e, t) {
		return hasOwn.call(e, t)
	}

	function getOwn(e, t) {
		return hasProp(e, t) && e[t]
	}

	function eachProp(e, t) {
		var i;
		for(i in e)
			if(hasProp(e, i) && t(e[i], i)) break
	}

	function mixin(e, t, i, r) {
		return t && eachProp(t, function(t, n) {
			!i && hasProp(e, n) || (!r || "object" != typeof t || !t || isArray(t) || isFunction(t) || t instanceof RegExp ? e[n] = t : (e[n] || (e[n] = {}), mixin(e[n], t, i, r)))
		}), e
	}

	function bind(e, t) {
		return function() {
			return t.apply(e, arguments)
		}
	}

	function scripts() {
		return document.getElementsByTagName("script")
	}

	function defaultOnError(e) {
		throw e
	}

	function getGlobal(e) {
		if(!e) return e;
		var t = global;
		return each(e.split("."), function(e) {
			t = t[e]
		}), t
	}

	function makeError(e, t, i, r) {
		var n = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
		return n.requireType = e, n.requireModules = r, i && (n.originalError = i), n
	}

	function inArray(e, t) {
		if(t)
			for(var i = 0, r = t.length; r > i; i++)
				if(t[i] === e) return i;
		return -1
	}

	function newContext(e) {
		function t(e) {
			var t, i;
			for(t = 0; t < e.length; t++)
				if(i = e[t], "." === i) e.splice(t, 1), t -= 1;
				else if(".." === i) {
				if(0 === t || 1 == t && ".." === e[2] || ".." === e[t - 1]) continue;
				t > 0 && (e.splice(t - 1, 2), t -= 2)
			}
		}

		function i(e, i, r) {
			var n, a, o, s, c, u, d, p, f, l, h, m, g = i && i.split("/"),
				v = y.map,
				x = v && v["*"];
			if(e && (e = e.split("/"), d = e.length - 1, y.nodeIdCompat && jsSuffixRegExp.test(e[d]) && (e[d] = e[d].replace(jsSuffixRegExp, "")), "." === e[0].charAt(0) && g && (m = g.slice(0, g.length - 1), e = m.concat(e)), t(e), e = e.join("/")), r && v && (g || x)) {
				o = e.split("/");
				e: for(s = o.length; s > 0; s -= 1) {
					if(u = o.slice(0, s).join("/"), g)
						for(c = g.length; c > 0; c -= 1)
							if(a = getOwn(v, g.slice(0, c).join("/")), a && (a = getOwn(a, u))) {
								p = a, f = s;
								break e
							}!l && x && getOwn(x, u) && (l = getOwn(x, u), h = s)
				}!p && l && (p = l, f = h), p && (o.splice(0, f, p), e = o.join("/"))
			}
			return n = getOwn(y.pkgs, e), n ? n : e
		}

		function r(e) {
			isBrowser && each(scripts(), function(t) {
				return t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === q.contextName ? (t.parentNode.removeChild(t), !0) : void 0
			})
		}

		function n(e) {
			var t = getOwn(y.paths, e);
			return t && isArray(t) && t.length > 1 ? (t.shift(), q.require.undef(e), q.makeRequire(null, {
				skipMap: !0
			})([e]), !0) : void 0
		}

		function a(e) {
			var t, i = e ? e.indexOf("!") : -1;
			return i > -1 && (t = e.substring(0, i), e = e.substring(i + 1, e.length)), [t, e]
		}

		function o(e, t, r, n) {
			var o, s, c, u, d = null,
				p = t ? t.name : null,
				f = e,
				l = !0,
				h = "";
			return e || (l = !1, e = "_@r" + (R += 1)), u = a(e), d = u[0], e = u[1], d && (d = i(d, p, n), s = getOwn(j, d)), e && (d ? h = s && s.normalize ? s.normalize(e, function(e) {
				return i(e, p, n)
			}) : -1 === e.indexOf("!") ? i(e, p, n) : e : (h = i(e, p, n), u = a(h), d = u[0], h = u[1], r = !0, o = q.nameToUrl(h))), c = !d || s || r ? "" : "_unnormalized" + (T += 1), {
				prefix: d,
				name: h,
				parentMap: t,
				unnormalized: !!c,
				url: o,
				originalName: f,
				isDefine: l,
				id: (d ? d + "!" + h : h) + c
			}
		}

		function s(e) {
			var t = e.id,
				i = getOwn(k, t);
			return i || (i = k[t] = new q.Module(e)), i
		}

		function c(e, t, i) {
			var r = e.id,
				n = getOwn(k, r);
			!hasProp(j, r) || n && !n.defineEmitComplete ? (n = s(e), n.error && "error" === t ? i(n.error) : n.on(t, i)) : "defined" === t && i(j[r])
		}

		function u(e, t) {
			var i = e.requireModules,
				r = !1;
			t ? t(e) : (each(i, function(t) {
				var i = getOwn(k, t);
				i && (i.error = e, i.events.error && (r = !0, i.emit("error", e)))
			}), r || req.onError(e))
		}

		function d() {
			globalDefQueue.length && (apsp.apply(M, [M.length, 0].concat(globalDefQueue)), globalDefQueue = [])
		}

		function p(e) {
			delete k[e], delete S[e]
		}

		function f(e, t, i) {
			var r = e.map.id;
			e.error ? e.emit("error", e.error) : (t[r] = !0, each(e.depMaps, function(r, n) {
				var a = r.id,
					o = getOwn(k, a);
				!o || e.depMatched[n] || i[a] || (getOwn(t, a) ? (e.defineDep(n, j[a]), e.check()) : f(o, t, i))
			}), i[r] = !0)
		}

		function l() {
			var e, t, i = 1e3 * y.waitSeconds,
				a = i && q.startTime + i < (new Date).getTime(),
				o = [],
				s = [],
				c = !1,
				d = !0;
			if(!x) {
				if(x = !0, eachProp(S, function(e) {
						var i = e.map,
							u = i.id;
						if(e.enabled && (i.isDefine || s.push(e), !e.error))
							if(!e.inited && a) n(u) ? (t = !0, c = !0) : (o.push(u), r(u));
							else if(!e.inited && e.fetched && i.isDefine && (c = !0, !i.prefix)) return d = !1
					}), a && o.length) return e = makeError("timeout", "Load timeout for modules: " + o, null, o), e.contextName = q.contextName, u(e);
				d && each(s, function(e) {
					f(e, {}, {})
				}), a && !t || !c || !isBrowser && !isWebWorker || w || (w = setTimeout(function() {
					w = 0, l()
				}, 50)), x = !1
			}
		}

		function h(e) {
			hasProp(j, e[0]) || s(o(e[0], null, !0)).init(e[1], e[2])
		}

		function m(e, t, i, r) {
			e.detachEvent && !isOpera ? r && e.detachEvent(r, t) : e.removeEventListener(i, t, !1)
		}

		function g(e) {
			var t = e.currentTarget || e.srcElement;
			return m(t, q.onScriptLoad, "load", "onreadystatechange"), m(t, q.onScriptError, "error"), {
				node: t,
				id: t && t.getAttribute("data-requiremodule")
			}
		}

		function v() {
			var e;
			for(d(); M.length;) {
				if(e = M.shift(), null === e[0]) return u(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
				h(e)
			}
		}
		var x, b, q, E, w, y = {
				waitSeconds: 7,
				baseUrl: "./",
				paths: {},
				bundles: {},
				pkgs: {},
				shim: {},
				config: {}
			},
			k = {},
			S = {},
			O = {},
			M = [],
			j = {},
			A = {},
			P = {},
			R = 1,
			T = 1;
		return E = {
			require: function(e) {
				return e.require ? e.require : e.require = q.makeRequire(e.map)
			},
			exports: function(e) {
				return e.usingExports = !0, e.map.isDefine ? e.exports ? j[e.map.id] = e.exports : e.exports = j[e.map.id] = {} : void 0
			},
			module: function(e) {
				return e.module ? e.module : e.module = {
					id: e.map.id,
					uri: e.map.url,
					config: function() {
						return getOwn(y.config, e.map.id) || {}
					},
					exports: e.exports || (e.exports = {})
				}
			}
		}, b = function(e) {
			this.events = getOwn(O, e.id) || {}, this.map = e, this.shim = getOwn(y.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
		}, b.prototype = {
			init: function(e, t, i, r) {
				r = r || {}, this.inited || (this.factory = t, i ? this.on("error", i) : this.events.error && (i = bind(this, function(e) {
					this.emit("error", e)
				})), this.depMaps = e && e.slice(0), this.errback = i, this.inited = !0, this.ignore = r.ignore, r.enabled || this.enabled ? this.enable() : this.check())
			},
			defineDep: function(e, t) {
				this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
			},
			fetch: function() {
				if(!this.fetched) {
					this.fetched = !0, q.startTime = (new Date).getTime();
					var e = this.map;
					return this.shim ? void q.makeRequire(this.map, {
						enableBuildCallback: !0
					})(this.shim.deps || [], bind(this, function() {
						return e.prefix ? this.callPlugin() : this.load()
					})) : e.prefix ? this.callPlugin() : this.load()
				}
			},
			load: function() {
				var e = this.map.url;
				A[e] || (A[e] = !0, q.load(this.map.id, e))
			},
			check: function() {
				if(this.enabled && !this.enabling) {
					var e, t, i = this.map.id,
						r = this.depExports,
						n = this.exports,
						a = this.factory;
					if(this.inited) {
						if(this.error) this.emit("error", this.error);
						else if(!this.defining) {
							if(this.defining = !0, this.depCount < 1 && !this.defined) {
								if(isFunction(a)) {
									if(this.events.error && this.map.isDefine || req.onError !== defaultOnError) try {
										n = q.execCb(i, a, r, n)
									} catch(o) {
										e = o
									} else n = q.execCb(i, a, r, n);
									if(this.map.isDefine && void 0 === n && (t = this.module, t ? n = t.exports : this.usingExports && (n = this.exports)), e) return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", u(this.error = e)
								} else n = a;
								this.exports = n, this.map.isDefine && !this.ignore && (j[i] = n, req.onResourceLoad && req.onResourceLoad(q, this.map, this.depMaps)), p(i), this.defined = !0
							}
							this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
						}
					} else this.fetch()
				}
			},
			callPlugin: function() {
				var e = this.map,
					t = e.id,
					r = o(e.prefix);
				this.depMaps.push(r), c(r, "defined", bind(this, function(r) {
					var n, a, d, f = getOwn(P, this.map.id),
						l = this.map.name,
						h = this.map.parentMap ? this.map.parentMap.name : null,
						m = q.makeRequire(e.parentMap, {
							enableBuildCallback: !0
						});
					return this.map.unnormalized ? (r.normalize && (l = r.normalize(l, function(e) {
						return i(e, h, !0)
					}) || ""), a = o(e.prefix + "!" + l, this.map.parentMap), c(a, "defined", bind(this, function(e) {
						this.init([], function() {
							return e
						}, null, {
							enabled: !0,
							ignore: !0
						})
					})), d = getOwn(k, a.id), void(d && (this.depMaps.push(a), this.events.error && d.on("error", bind(this, function(e) {
						this.emit("error", e)
					})), d.enable()))) : f ? (this.map.url = q.nameToUrl(f), void this.load()) : (n = bind(this, function(e) {
						this.init([], function() {
							return e
						}, null, {
							enabled: !0
						})
					}), n.error = bind(this, function(e) {
						this.inited = !0, this.error = e, e.requireModules = [t], eachProp(k, function(e) {
							0 === e.map.id.indexOf(t + "_unnormalized") && p(e.map.id)
						}), u(e)
					}), n.fromText = bind(this, function(i, r) {
						var a = e.name,
							c = o(a),
							d = useInteractive;
						r && (i = r), d && (useInteractive = !1), s(c), hasProp(y.config, t) && (y.config[a] = y.config[t]);
						try {
							req.exec(i)
						} catch(p) {
							return u(makeError("fromtexteval", "fromText eval for " + t + " failed: " + p, p, [t]))
						}
						d && (useInteractive = !0), this.depMaps.push(c), q.completeLoad(a), m([a], n)
					}), void r.load(e.name, m, n, y))
				})), q.enable(r, this), this.pluginMaps[r.id] = r
			},
			enable: function() {
				S[this.map.id] = this, this.enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function(e, t) {
					var i, r, n;
					if("string" == typeof e) {
						if(e = o(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, n = getOwn(E, e.id)) return void(this.depExports[t] = n(this));
						this.depCount += 1, c(e, "defined", bind(this, function(e) {
							this.defineDep(t, e), this.check()
						})), this.errback && c(e, "error", bind(this, this.errback))
					}
					i = e.id, r = k[i], hasProp(E, i) || !r || r.enabled || q.enable(e, this)
				})), eachProp(this.pluginMaps, bind(this, function(e) {
					var t = getOwn(k, e.id);
					t && !t.enabled && q.enable(e, this)
				})), this.enabling = !1, this.check()
			},
			on: function(e, t) {
				var i = this.events[e];
				i || (i = this.events[e] = []), i.push(t)
			},
			emit: function(e, t) {
				each(this.events[e], function(e) {
					e(t)
				}), "error" === e && delete this.events[e]
			}
		}, q = {
			config: y,
			contextName: e,
			registry: k,
			defined: j,
			urlFetched: A,
			defQueue: M,
			Module: b,
			makeModuleMap: o,
			nextTick: req.nextTick,
			onError: u,
			configure: function(e) {
				e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/");
				var t = y.shim,
					i = {
						paths: !0,
						bundles: !0,
						config: !0,
						map: !0
					};
				eachProp(e, function(e, t) {
					i[t] ? (y[t] || (y[t] = {}), mixin(y[t], e, !0, !0)) : y[t] = e
				}), e.bundles && eachProp(e.bundles, function(e, t) {
					each(e, function(e) {
						e !== t && (P[e] = t)
					})
				}), e.shim && (eachProp(e.shim, function(e, i) {
					isArray(e) && (e = {
						deps: e
					}), !e.exports && !e.init || e.exportsFn || (e.exportsFn = q.makeShimExports(e)), t[i] = e
				}), y.shim = t), e.packages && each(e.packages, function(e) {
					var t, i;
					e = "string" == typeof e ? {
						name: e
					} : e, i = e.name, t = e.location, t && (y.paths[i] = e.location), y.pkgs[i] = e.name + "/" + (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
				}), eachProp(k, function(e, t) {
					e.inited || e.map.unnormalized || (e.map = o(t))
				}), (e.deps || e.callback) && q.require(e.deps || [], e.callback)
			},
			makeShimExports: function(e) {
				function t() {
					var t;
					return e.init && (t = e.init.apply(global, arguments)), t || e.exports && getGlobal(e.exports)
				}
				return t
			},
			makeRequire: function(t, n) {
				function a(i, r, c) {
					var d, p, f;
					return n.enableBuildCallback && r && isFunction(r) && (r.__requireJsBuild = !0), "string" == typeof i ? isFunction(r) ? u(makeError("requireargs", "Invalid require call"), c) : t && hasProp(E, i) ? E[i](k[t.id]) : req.get ? req.get(q, i, t, a) : (p = o(i, t, !1, !0), d = p.id, hasProp(j, d) ? j[d] : u(makeError("notloaded", 'Module name "' + d + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) : (v(), q.nextTick(function() {
						v(), f = s(o(null, t)), f.skipMap = n.skipMap, f.init(i, r, c, {
							enabled: !0
						}), l()
					}), a)
				}
				return n = n || {}, mixin(a, {
					isBrowser: isBrowser,
					toUrl: function(e) {
						var r, n = e.lastIndexOf("."),
							a = e.split("/")[0],
							o = "." === a || ".." === a;
						return -1 !== n && (!o || n > 1) && (r = e.substring(n, e.length), e = e.substring(0, n)), q.nameToUrl(i(e, t && t.id, !0), r, !0)
					},
					defined: function(e) {
						return hasProp(j, o(e, t, !1, !0).id)
					},
					specified: function(e) {
						return e = o(e, t, !1, !0).id, hasProp(j, e) || hasProp(k, e)
					}
				}), t || (a.undef = function(e) {
					d();
					var i = o(e, t, !0),
						n = getOwn(k, e);
					r(e), delete j[e], delete A[i.url], delete O[e], eachReverse(M, function(t, i) {
						t[0] === e && M.splice(i, 1)
					}), n && (n.events.defined && (O[e] = n.events), p(e))
				}), a
			},
			enable: function(e) {
				var t = getOwn(k, e.id);
				t && s(e).enable()
			},
			completeLoad: function(e) {
				var t, i, r, a = getOwn(y.shim, e) || {},
					o = a.exports;
				for(d(); M.length;) {
					if(i = M.shift(), null === i[0]) {
						if(i[0] = e, t) break;
						t = !0
					} else i[0] === e && (t = !0);
					h(i)
				}
				if(r = getOwn(k, e), !t && !hasProp(j, e) && r && !r.inited) {
					if(!(!y.enforceDefine || o && getGlobal(o))) return n(e) ? void 0 : u(makeError("nodefine", "No define call for " + e, null, [e]));
					h([e, a.deps || [], a.exportsFn])
				}
				l()
			},
			nameToUrl: function(e, t, i) {
				var r, n, a, o, s, c, u, d = getOwn(y.pkgs, e);
				if(d && (e = d), u = getOwn(P, e)) return q.nameToUrl(u, t, i);
				if(req.jsExtRegExp.test(e)) s = e + (t || "");
				else {
					for(r = y.paths, n = e.split("/"), a = n.length; a > 0; a -= 1)
						if(o = n.slice(0, a).join("/"), c = getOwn(r, o)) {
							isArray(c) && (c = c[0]), n.splice(0, a, c);
							break
						}
					s = n.join("/"), s += t || (/^data\:|\?/.test(s) || i ? "" : ".js"), s = ("/" === s.charAt(0) || s.match(/^[\w\+\.\-]+:/) ? "" : y.baseUrl) + s
				}
				if(0 == window.MOGU_DEV) {
					var p = s.replace("/src", "");
					/^(http(s)?:)?\/\//i.test(s) || (s = "https://s10.mogucdn.com" + p)
				}
				return y.urlArgs ? s + ((-1 === s.indexOf("?") ? "?" : "&") + y.urlArgs) : s
			},
			load: function(e, t) {
				req.load(q, e, t)
			},
			execCb: function(e, t, i, r) {
				return t.apply(r, i)
			},
			onScriptLoad: function(e) {
				if("load" === e.type || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
					interactiveScript = null;
					var t = g(e);
					q.completeLoad(t.id)
				}
			},
			onScriptError: function(e) {
				var t = g(e);
				return n(t.id) ? void 0 : u(makeError("scripterror", "Script error for: " + t.id, e, [t.id]))
			}
		}, q.require = q.makeRequire(), q
	}

	function getInteractiveScript() {
		return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function(e) {
			return "interactive" === e.readyState ? interactiveScript = e : void 0
		}), interactiveScript)
	}

	function _collectWigetName(e) {
		if(e)
			for(var t = 0, i = e.length; i > t; t++)
				if(/widgets\/(pc|h5)\/.+/.test(e[t])) {
					var r = "static/" + e[t] + ".js"; - 1 == inArray(r, _m_widgetsList) && _m_widgetsList.push(r)
				}
	}
	var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.1.14",
		commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
		cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
		jsSuffixRegExp = /\.js$/,
		currDirRegExp = /^\.\//,
		op = Object.prototype,
		ostring = op.toString,
		hasOwn = op.hasOwnProperty,
		ap = Array.prototype,
		apsp = ap.splice,
		isBrowser = !("undefined" == typeof window || "undefined" == typeof navigator || !window.document),
		isWebWorker = !isBrowser && "undefined" != typeof importScripts,
		readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
		defContextName = "_",
		isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
		contexts = {},
		cfg = {},
		globalDefQueue = [],
		useInteractive = !1,
		_m_widgetsList = [];
	if("undefined" == typeof define) {
		if("undefined" != typeof requirejs) {
			if(isFunction(requirejs)) return;
			cfg = requirejs, requirejs = void 0
		}
		"undefined" == typeof require || isFunction(require) || (cfg = require, require = void 0), req = requirejs = function(e, t, i, r) {
			var n, a, o = defContextName;
			if(isArray(e) || "string" == typeof e || (a = e, isArray(t) ? (e = t, t = i, i = r) : e = []), a && a.context && (o = a.context), n = getOwn(contexts, o), n || (n = contexts[o] = req.s.newContext(o)), a && n.configure(a), _collectWigetName(e), !_m_widgetsList || !_m_widgetsList.length) return n.require(e, t, i);
			var s = "/__/",
				c = ["static/widgets/widget/index.js"].concat(_m_widgetsList);
			_m_widgetsList = [], n.require([s + "static/widgets/lib/source-map.js"], function(r) {
				var a = [s, c.join(","), "$ver=", r.getNewVersion(c), ".js"].join("");
				n.require([a], function() {
					return n.require(e, t, i)
				})
			}, void 0)
		}, req.config = function(e) {
			return req(e)
		}, req.nextTick = "undefined" != typeof setTimeout ? function(e) {
			setTimeout(e, 4)
		} : function(e) {
			e()
		}, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
			contexts: contexts,
			newContext: newContext
		}, req({}), each(["toUrl", "undef", "defined", "specified"], function(e) {
			req[e] = function() {
				var t = contexts[defContextName];
				return t.require[e].apply(t, arguments)
			}
		}), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)), req.onError = defaultOnError, req.createNode = function(e, t, i) {
			var r = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
			return r.type = e.scriptType || "text/javascript", r.charset = "utf-8", r.async = !0, r
		}, req.load = function(e, t, i) {
			var r, n = e && e.config || {};
			if(i.indexOf(".css") > -1) {
				var a = i.replace(".js", ""),
					r = document.createElement("link");
				return r.rel = "stylesheet", r.type = "text/css", r.href = a, baseElement ? head.insertBefore(r, baseElement) : head.appendChild(r), e.completeLoad(t), r
			}
			if(isBrowser) return r = req.createNode(n, t, i), r.setAttribute("data-requirecontext", e.contextName), r.setAttribute("data-requiremodule", t), !r.attachEvent || r.attachEvent.toString && r.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (r.addEventListener("load", e.onScriptLoad, !1), r.addEventListener("error", e.onScriptError, !1)) : (useInteractive = !0, r.attachEvent("onreadystatechange", e.onScriptLoad)), r.src = i, currentlyAddingScript = r, baseElement ? head.insertBefore(r, baseElement) : head.appendChild(r), currentlyAddingScript = null, r;
			if(isWebWorker) try {
				importScripts(i), e.completeLoad(t)
			} catch(o) {
				e.onError(makeError("importscripts", "importScripts failed for " + t + " at " + i, o, [t]))
			}
		}, isBrowser && !cfg.skipDataMain && eachReverse(scripts(), function(e) {
			return head || (head = e.parentNode), dataMain = e.getAttribute("data-main"), dataMain ? (mainScript = dataMain, cfg.baseUrl || (src = mainScript.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0) : void 0
		}), define = function(e, t, i) {
			var r, n;
			"string" != typeof e && (i = t, t = e, e = null), isArray(t) || (i = t, t = null), !t && isFunction(i) && (t = [], i.length && (i.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function(e, i) {
				t.push(i)
			}), t = (1 === i.length ? ["require"] : ["require", "exports", "module"]).concat(t))), useInteractive && (r = currentlyAddingScript || getInteractiveScript(), r && (e || (e = r.getAttribute("data-requiremodule")), n = contexts[r.getAttribute("data-requirecontext")])), _collectWigetName(t), (n ? n.defQueue : globalDefQueue).push([e, t, i])
		}, define.amd = {
			jQuery: !0
		}, req.exec = function(text) {
			return eval(text)
		}, req(cfg)
	}
}(this);
! function(e, t) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if(!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
	function n(e) {
		var t = e.length,
			n = Z.type(e);
		return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
	}

	function r(e, t, n) {
		if(Z.isFunction(t)) return Z.grep(e, function(e, r) {
			return !!t.call(e, r, e) !== n
		});
		if(t.nodeType) return Z.grep(e, function(e) {
			return e === t !== n
		});
		if("string" == typeof t) {
			if(ae.test(t)) return Z.filter(t, e, n);
			t = Z.filter(t, e)
		}
		return Z.grep(e, function(e) {
			return U.call(t, e) >= 0 !== n
		})
	}

	function i(e, t) {
		for(;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	}

	function o(e) {
		var t = he[e] = {};
		return Z.each(e.match(de) || [], function(e, n) {
			t[n] = !0
		}), t
	}

	function s() {
		J.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), Z.ready()
	}

	function a() {
		Object.defineProperty(this.cache = {}, 0, {
			get: function() {
				return {}
			}
		}), this.expando = Z.expando + Math.random()
	}

	function u(e, t, n) {
		var r;
		if(void 0 === n && 1 === e.nodeType)
			if(r = "data-" + t.replace(be, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
				try {
					n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : xe.test(n) ? Z.parseJSON(n) : n
				} catch(i) {}
				ye.set(e, t, n)
			} else n = void 0;
		return n
	}

	function l() {
		return !0
	}

	function c() {
		return !1
	}

	function f() {
		try {
			return J.activeElement
		} catch(e) {}
	}

	function p(e, t) {
		return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function d(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function h(e) {
		var t = Pe.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function g(e, t) {
		for(var n = 0, r = e.length; r > n; n++) ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
	}

	function m(e, t) {
		var n, r, i, o, s, a, u, l;
		if(1 === t.nodeType) {
			if(ve.hasData(e) && (o = ve.access(e), s = ve.set(t, o), l = o.events)) {
				delete s.handle, s.events = {};
				for(i in l)
					for(n = 0, r = l[i].length; r > n; n++) Z.event.add(t, i, l[i][n])
			}
			ye.hasData(e) && (a = ye.access(e), u = Z.extend({}, a), ye.set(t, u))
		}
	}

	function v(e, t) {
		var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
		return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
	}

	function y(e, t) {
		var n = t.nodeName.toLowerCase();
		"input" === n && Ne.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
	}

	function x(t, n) {
		var r, i = Z(n.createElement(t)).appendTo(n.body),
			o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : Z.css(i[0], "display");
		return i.detach(), o
	}

	function b(e) {
		var t = J,
			n = $e[e];
		return n || (n = x(e, t), "none" !== n && n || (We = (We || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = We[0].contentDocument, t.write(), t.close(), n = x(e, t), We.detach()), $e[e] = n), n
	}

	function w(e, t, n) {
		var r, i, o, s, a = e.style;
		return n = n || _e(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || Z.contains(e.ownerDocument, e) || (s = Z.style(e, t)), Ie.test(s) && Be.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
	}

	function T(e, t) {
		return {
			get: function() {
				return e() ? void delete this.get : (this.get = t).apply(this, arguments)
			}
		}
	}

	function C(e, t) {
		if(t in e) return t;
		for(var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ge.length; i--;)
			if(t = Ge[i] + n, t in e) return t;
		return r
	}

	function N(e, t, n) {
		var r = Xe.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}

	function k(e, t, n, r, i) {
		for(var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += Z.css(e, n + Te[o], !0, i)), r ? ("content" === n && (s -= Z.css(e, "padding" + Te[o], !0, i)), "margin" !== n && (s -= Z.css(e, "border" + Te[o] + "Width", !0, i))) : (s += Z.css(e, "padding" + Te[o], !0, i), "padding" !== n && (s += Z.css(e, "border" + Te[o] + "Width", !0, i)));
		return s
	}

	function E(e, t, n) {
		var r = !0,
			i = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = _e(e),
			s = "border-box" === Z.css(e, "boxSizing", !1, o);
		if(0 >= i || null == i) {
			if(i = w(e, t, o), (0 > i || null == i) && (i = e.style[t]), Ie.test(i)) return i;
			r = s && (Q.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
		}
		return i + k(e, t, n || (s ? "border" : "content"), r, o) + "px"
	}

	function S(e, t) {
		for(var n, r, i, o = [], s = 0, a = e.length; a > s; s++) r = e[s], r.style && (o[s] = ve.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ce(r) && (o[s] = ve.access(r, "olddisplay", b(r.nodeName)))) : (i = Ce(r), "none" === n && i || ve.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
		for(s = 0; a > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
		return e
	}

	function j(e, t, n, r, i) {
		return new j.prototype.init(e, t, n, r, i)
	}

	function D() {
		return setTimeout(function() {
			Qe = void 0
		}), Qe = Z.now()
	}

	function A(e, t) {
		var n, r = 0,
			i = {
				height: e
			};
		for(t = t ? 1 : 0; 4 > r; r += 2 - t) n = Te[r], i["margin" + n] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}

	function L(e, t, n) {
		for(var r, i = (nt[t] || []).concat(nt["*"]), o = 0, s = i.length; s > o; o++)
			if(r = i[o].call(n, t, e)) return r
	}

	function q(e, t, n) {
		var r, i, o, s, a, u, l, c, f = this,
			p = {},
			d = e.style,
			h = e.nodeType && Ce(e),
			g = ve.get(e, "fxshow");
		n.queue || (a = Z._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
			a.unqueued || u()
		}), a.unqueued++, f.always(function() {
			f.always(function() {
				a.unqueued--, Z.queue(e, "fx").length || a.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = Z.css(e, "display"), c = "none" === l ? ve.get(e, "olddisplay") || b(e.nodeName) : l, "inline" === c && "none" === Z.css(e, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function() {
			d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
		}));
		for(r in t)
			if(i = t[r], Ke.exec(i)) {
				if(delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
					if("show" !== i || !g || void 0 === g[r]) continue;
					h = !0
				}
				p[r] = g && g[r] || Z.style(e, r)
			} else l = void 0;
		if(Z.isEmptyObject(p)) "inline" === ("none" === l ? b(e.nodeName) : l) && (d.display = l);
		else {
			g ? "hidden" in g && (h = g.hidden) : g = ve.access(e, "fxshow", {}), o && (g.hidden = !h), h ? Z(e).show() : f.done(function() {
				Z(e).hide()
			}), f.done(function() {
				var t;
				ve.remove(e, "fxshow");
				for(t in p) Z.style(e, t, p[t])
			});
			for(r in p) s = L(h ? g[r] : 0, r, f), r in g || (g[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
		}
	}

	function H(e, t) {
		var n, r, i, o, s;
		for(n in e)
			if(r = Z.camelCase(n), i = t[r], o = e[n], Z.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = Z.cssHooks[r], s && "expand" in s) {
				o = s.expand(o), delete e[r];
				for(n in o) n in e || (e[n] = o[n], t[n] = i)
			} else t[r] = i
	}

	function O(e, t, n) {
		var r, i, o = 0,
			s = tt.length,
			a = Z.Deferred().always(function() {
				delete u.elem
			}),
			u = function() {
				if(i) return !1;
				for(var t = Qe || D(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; u > s; s++) l.tweens[s].run(o);
				return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1)
			},
			l = a.promise({
				elem: e,
				props: Z.extend({}, t),
				opts: Z.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: Qe || D(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var r = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
					return l.tweens.push(r), r
				},
				stop: function(t) {
					var n = 0,
						r = t ? l.tweens.length : 0;
					if(i) return this;
					for(i = !0; r > n; n++) l.tweens[n].run(1);
					return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
				}
			}),
			c = l.props;
		for(H(c, l.opts.specialEasing); s > o; o++)
			if(r = tt[o].call(l, e, c, l.opts)) return r;
		return Z.map(c, L, l), Z.isFunction(l.opts.start) && l.opts.start.call(e, l), Z.fx.timer(Z.extend(u, {
			elem: e,
			anim: l,
			queue: l.opts.queue
		})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
	}

	function F(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r, i = 0,
				o = t.toLowerCase().match(de) || [];
			if(Z.isFunction(n))
				for(; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}

	function P(e, t, n, r) {
		function i(a) {
			var u;
			return o[a] = !0, Z.each(e[a] || [], function(e, a) {
				var l = a(t, n, r);
				return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
			}), u
		}
		var o = {},
			s = e === wt;
		return i(t.dataTypes[0]) || !o["*"] && i("*")
	}

	function M(e, t) {
		var n, r, i = Z.ajaxSettings.flatOptions || {};
		for(n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
		return r && Z.extend(!0, e, r), e
	}

	function R(e, t, n) {
		for(var r, i, o, s, a = e.contents, u = e.dataTypes;
			"*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
		if(r)
			for(i in a)
				if(a[i] && a[i].test(r)) {
					u.unshift(i);
					break
				}
		if(u[0] in n) o = u[0];
		else {
			for(i in n) {
				if(!u[0] || e.converters[i + " " + u[0]]) {
					o = i;
					break
				}
				s || (s = i)
			}
			o = o || s
		}
		return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
	}

	function W(e, t, n, r) {
		var i, o, s, a, u, l = {},
			c = e.dataTypes.slice();
		if(c[1])
			for(s in e.converters) l[s.toLowerCase()] = e.converters[s];
		for(o = c.shift(); o;)
			if(e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
				if("*" === o) o = u;
				else if("*" !== u && u !== o) {
			if(s = l[u + " " + o] || l["* " + o], !s)
				for(i in l)
					if(a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
						s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
						break
					}
			if(s !== !0)
				if(s && e["throws"]) t = s(t);
				else try {
					t = s(t)
				} catch(f) {
					return {
						state: "parsererror",
						error: s ? f : "No conversion from " + u + " to " + o
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}

	function $(e, t, n, r) {
		var i;
		if(Z.isArray(t)) Z.each(t, function(t, i) {
			n || kt.test(e) ? r(e, i) : $(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
		});
		else if(n || "object" !== Z.type(t)) r(e, t);
		else
			for(i in t) $(e + "[" + i + "]", t[i], n, r)
	}

	function B(e) {
		return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
	}
	var I = [],
		_ = I.slice,
		z = I.concat,
		X = I.push,
		U = I.indexOf,
		V = {},
		Y = V.toString,
		G = V.hasOwnProperty,
		Q = {},
		J = e.document,
		K = "2.1.1",
		Z = function(e, t) {
			return new Z.fn.init(e, t)
		},
		ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		te = /^-ms-/,
		ne = /-([\da-z])/gi,
		re = function(e, t) {
			return t.toUpperCase()
		};
	Z.fn = Z.prototype = {
		jquery: K,
		constructor: Z,
		selector: "",
		length: 0,
		toArray: function() {
			return _.call(this)
		},
		get: function(e) {
			return null != e ? 0 > e ? this[e + this.length] : this[e] : _.call(this)
		},
		pushStack: function(e) {
			var t = Z.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e, t) {
			return Z.each(this, e, t)
		},
		map: function(e) {
			return this.pushStack(Z.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		slice: function() {
			return this.pushStack(_.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: X,
		sort: I.sort,
		splice: I.splice
	}, Z.extend = Z.fn.extend = function() {
		var e, t, n, r, i, o, s = arguments[0] || {},
			a = 1,
			u = arguments.length,
			l = !1;
		for("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || Z.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++)
			if(null != (e = arguments[a]))
				for(t in e) n = s[t], r = e[t], s !== r && (l && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, s[t] = Z.extend(l, o, r)) : void 0 !== r && (s[t] = r));
		return s
	}, Z.extend({
		expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isFunction: function(e) {
			return "function" === Z.type(e)
		},
		isArray: Array.isArray,
		isWindow: function(e) {
			return null != e && e === e.window
		},
		isNumeric: function(e) {
			return !Z.isArray(e) && e - parseFloat(e) >= 0
		},
		isPlainObject: function(e) {
			return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : !e.constructor || G.call(e.constructor.prototype, "isPrototypeOf")
		},
		isEmptyObject: function(e) {
			var t;
			for(t in e) return !1;
			return !0
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Y.call(e)] || "object" : typeof e
		},
		globalEval: function(e) {
			var t, n = eval;
			e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
		},
		camelCase: function(e) {
			return e.replace(te, "ms-").replace(ne, re)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, r) {
			var i, o = 0,
				s = e.length,
				a = n(e);
			if(r) {
				if(a)
					for(; s > o && (i = t.apply(e[o], r), i !== !1); o++);
				else
					for(o in e)
						if(i = t.apply(e[o], r), i === !1) break
			} else if(a)
				for(; s > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
			else
				for(o in e)
					if(i = t.call(e[o], o, e[o]), i === !1) break;
			return e
		},
		trim: function(e) {
			return null == e ? "" : (e + "").replace(ee, "")
		},
		makeArray: function(e, t) {
			var r = t || [];
			return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : X.call(r, e)), r
		},
		inArray: function(e, t, n) {
			return null == t ? -1 : U.call(t, e, n)
		},
		merge: function(e, t) {
			for(var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			for(var r, i = [], o = 0, s = e.length, a = !n; s > o; o++) r = !t(e[o], o), r !== a && i.push(e[o]);
			return i
		},
		map: function(e, t, r) {
			var i, o = 0,
				s = e.length,
				a = n(e),
				u = [];
			if(a)
				for(; s > o; o++) i = t(e[o], o, r), null != i && u.push(i);
			else
				for(o in e) i = t(e[o], o, r), null != i && u.push(i);
			return z.apply([], u)
		},
		guid: 1,
		proxy: function(e, t) {
			var n, r, i;
			return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (r = _.call(arguments, 2), i = function() {
				return e.apply(t || this, r.concat(_.call(arguments)))
			}, i.guid = e.guid = e.guid || Z.guid++, i) : void 0
		},
		now: Date.now,
		support: Q
	}), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
		V["[object " + t + "]"] = t.toLowerCase()
	});
	var ie = function(e) {
		function t(e, t, n, r) {
			var i, o, s, a, u, l, f, d, h, g;
			if((t ? t.ownerDocument || t : $) !== q && L(t), t = t || q, n = n || [], !e || "string" != typeof e) return n;
			if(1 !== (a = t.nodeType) && 9 !== a) return [];
			if(O && !r) {
				if(i = ye.exec(e))
					if(s = i[1]) {
						if(9 === a) {
							if(o = t.getElementById(s), !o || !o.parentNode) return n;
							if(o.id === s) return n.push(o), n
						} else if(t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && R(t, o) && o.id === s) return n.push(o), n
					} else {
						if(i[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
						if((s = i[3]) && w.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(s)), n
					}
				if(w.qsa && (!F || !F.test(e))) {
					if(d = f = W, h = t, g = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
						for(l = k(e), (f = t.getAttribute("id")) ? d = f.replace(be, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;) l[u] = d + p(l[u]);
						h = xe.test(e) && c(t.parentNode) || t, g = l.join(",")
					}
					if(g) try {
						return Z.apply(n, h.querySelectorAll(g)), n
					} catch(m) {} finally {
						f || t.removeAttribute("id")
					}
				}
			}
			return S(e.replace(ue, "$1"), t, n, r)
		}

		function n() {
			function e(n, r) {
				return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
			}
			var t = [];
			return e
		}

		function r(e) {
			return e[W] = !0, e
		}

		function i(e) {
			var t = q.createElement("div");
			try {
				return !!e(t)
			} catch(n) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function o(e, t) {
			for(var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
		}

		function s(e, t) {
			var n = t && e,
				r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
			if(r) return r;
			if(n)
				for(; n = n.nextSibling;)
					if(n === t) return -1;
			return e ? 1 : -1
		}

		function a(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return "input" === n && t.type === e
			}
		}

		function u(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return("input" === n || "button" === n) && t.type === e
			}
		}

		function l(e) {
			return r(function(t) {
				return t = +t, r(function(n, r) {
					for(var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
				})
			})
		}

		function c(e) {
			return e && typeof e.getElementsByTagName !== V && e
		}

		function f() {}

		function p(e) {
			for(var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
			return r
		}

		function d(e, t, n) {
			var r = t.dir,
				i = n && "parentNode" === r,
				o = I++;
			return t.first ? function(t, n, o) {
				for(; t = t[r];)
					if(1 === t.nodeType || i) return e(t, n, o)
			} : function(t, n, s) {
				var a, u, l = [B, o];
				if(s) {
					for(; t = t[r];)
						if((1 === t.nodeType || i) && e(t, n, s)) return !0
				} else
					for(; t = t[r];)
						if(1 === t.nodeType || i) {
							if(u = t[W] || (t[W] = {}), (a = u[r]) && a[0] === B && a[1] === o) return l[2] = a[2];
							if(u[r] = l, l[2] = e(t, n, s)) return !0
						}
			}
		}

		function h(e) {
			return e.length > 1 ? function(t, n, r) {
				for(var i = e.length; i--;)
					if(!e[i](t, n, r)) return !1;
				return !0
			} : e[0]
		}

		function g(e, n, r) {
			for(var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
			return r
		}

		function m(e, t, n, r, i) {
			for(var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), l && t.push(a)));
			return s
		}

		function v(e, t, n, i, o, s) {
			return i && !i[W] && (i = v(i)), o && !o[W] && (o = v(o, s)), r(function(r, s, a, u) {
				var l, c, f, p = [],
					d = [],
					h = s.length,
					v = r || g(t || "*", a.nodeType ? [a] : a, []),
					y = !e || !r && t ? v : m(v, p, e, a, u),
					x = n ? o || (r ? e : h || i) ? [] : s : y;
				if(n && n(y, x, a, u), i)
					for(l = m(x, d), i(l, [], a, u), c = l.length; c--;)(f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
				if(r) {
					if(o || e) {
						if(o) {
							for(l = [], c = x.length; c--;)(f = x[c]) && l.push(y[c] = f);
							o(null, x = [], l, u)
						}
						for(c = x.length; c--;)(f = x[c]) && (l = o ? te.call(r, f) : p[c]) > -1 && (r[l] = !(s[l] = f))
					}
				} else x = m(x === s ? x.splice(h, x.length) : x), o ? o(null, s, x, u) : Z.apply(s, x)
			})
		}

		function y(e) {
			for(var t, n, r, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = d(function(e) {
					return e === t
				}, s, !0), l = d(function(e) {
					return te.call(t, e) > -1
				}, s, !0), c = [function(e, n, r) {
					return !o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
				}]; i > a; a++)
				if(n = T.relative[e[a].type]) c = [d(h(c), n)];
				else {
					if(n = T.filter[e[a].type].apply(null, e[a].matches), n[W]) {
						for(r = ++a; i > r && !T.relative[e[r].type]; r++);
						return v(a > 1 && h(c), a > 1 && p(e.slice(0, a - 1).concat({
							value: " " === e[a - 2].type ? "*" : ""
						})).replace(ue, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = e.slice(r)), i > r && p(e))
					}
					c.push(n)
				}
			return h(c)
		}

		function x(e, n) {
			var i = n.length > 0,
				o = e.length > 0,
				s = function(r, s, a, u, l) {
					var c, f, p, d = 0,
						h = "0",
						g = r && [],
						v = [],
						y = j,
						x = r || o && T.find.TAG("*", l),
						b = B += null == y ? 1 : Math.random() || .1,
						w = x.length;
					for(l && (j = s !== q && s); h !== w && null != (c = x[h]); h++) {
						if(o && c) {
							for(f = 0; p = e[f++];)
								if(p(c, s, a)) {
									u.push(c);
									break
								}
							l && (B = b)
						}
						i && ((c = !p && c) && d--, r && g.push(c))
					}
					if(d += h, i && h !== d) {
						for(f = 0; p = n[f++];) p(g, v, s, a);
						if(r) {
							if(d > 0)
								for(; h--;) g[h] || v[h] || (v[h] = J.call(u));
							v = m(v)
						}
						Z.apply(u, v), l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
					}
					return l && (B = b, j = y), g
				};
			return i ? r(s) : s
		}
		var b, w, T, C, N, k, E, S, j, D, A, L, q, H, O, F, P, M, R, W = "sizzle" + -new Date,
			$ = e.document,
			B = 0,
			I = 0,
			_ = n(),
			z = n(),
			X = n(),
			U = function(e, t) {
				return e === t && (A = !0), 0
			},
			V = "undefined",
			Y = 1 << 31,
			G = {}.hasOwnProperty,
			Q = [],
			J = Q.pop,
			K = Q.push,
			Z = Q.push,
			ee = Q.slice,
			te = Q.indexOf || function(e) {
				for(var t = 0, n = this.length; n > t; t++)
					if(this[t] === e) return t;
				return -1
			},
			ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			re = "[\\x20\\t\\r\\n\\f]",
			ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			oe = ie.replace("w", "w#"),
			se = "\\[" + re + "*(" + ie + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + re + "*\\]",
			ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)",
			ue = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
			le = new RegExp("^" + re + "*," + re + "*"),
			ce = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
			fe = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]", "g"),
			pe = new RegExp(ae),
			de = new RegExp("^" + oe + "$"),
			he = {
				ID: new RegExp("^#(" + ie + ")"),
				CLASS: new RegExp("^\\.(" + ie + ")"),
				TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + se),
				PSEUDO: new RegExp("^" + ae),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + ne + ")$", "i"),
				needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
			},
			ge = /^(?:input|select|textarea|button)$/i,
			me = /^h\d$/i,
			ve = /^[^{]+\{\s*\[native \w/,
			ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			xe = /[+~]/,
			be = /'|\\/g,
			we = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"),
			Te = function(e, t, n) {
				var r = "0x" + t - 65536;
				return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
			};
		try {
			Z.apply(Q = ee.call($.childNodes), $.childNodes), Q[$.childNodes.length].nodeType
		} catch(Ce) {
			Z = {
				apply: Q.length ? function(e, t) {
					K.apply(e, ee.call(t))
				} : function(e, t) {
					for(var n = e.length, r = 0; e[n++] = t[r++];);
					e.length = n - 1
				}
			}
		}
		w = t.support = {}, N = t.isXML = function(e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return t ? "HTML" !== t.nodeName : !1
		}, L = t.setDocument = function(e) {
			var t, n = e ? e.ownerDocument || e : $,
				r = n.defaultView;
			return n !== q && 9 === n.nodeType && n.documentElement ? (q = n, H = n.documentElement, O = !N(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function() {
				L()
			}, !1) : r.attachEvent && r.attachEvent("onunload", function() {
				L()
			})), w.attributes = i(function(e) {
				return e.className = "i", !e.getAttribute("className")
			}), w.getElementsByTagName = i(function(e) {
				return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
			}), w.getElementsByClassName = ve.test(n.getElementsByClassName) && i(function(e) {
				return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
			}), w.getById = i(function(e) {
				return H.appendChild(e).id = W, !n.getElementsByName || !n.getElementsByName(W).length
			}), w.getById ? (T.find.ID = function(e, t) {
				if(typeof t.getElementById !== V && O) {
					var n = t.getElementById(e);
					return n && n.parentNode ? [n] : []
				}
			}, T.filter.ID = function(e) {
				var t = e.replace(we, Te);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}) : (delete T.find.ID, T.filter.ID = function(e) {
				var t = e.replace(we, Te);
				return function(e) {
					var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
					return n && n.value === t
				}
			}), T.find.TAG = w.getElementsByTagName ? function(e, t) {
				return typeof t.getElementsByTagName !== V ? t.getElementsByTagName(e) : void 0
			} : function(e, t) {
				var n, r = [],
					i = 0,
					o = t.getElementsByTagName(e);
				if("*" === e) {
					for(; n = o[i++];) 1 === n.nodeType && r.push(n);
					return r
				}
				return o
			}, T.find.CLASS = w.getElementsByClassName && function(e, t) {
				return typeof t.getElementsByClassName !== V && O ? t.getElementsByClassName(e) : void 0
			}, P = [], F = [], (w.qsa = ve.test(n.querySelectorAll)) && (i(function(e) {
				e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && F.push("[*^$]=" + re + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + re + "*(?:value|" + ne + ")"), e.querySelectorAll(":checked").length || F.push(":checked")
			}), i(function(e) {
				var t = n.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + re + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
			})), (w.matchesSelector = ve.test(M = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function(e) {
				w.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), P.push("!=", ae)
			}), F = F.length && new RegExp(F.join("|")), P = P.length && new RegExp(P.join("|")), t = ve.test(H.compareDocumentPosition), R = t || ve.test(H.contains) ? function(e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
					r = t && t.parentNode;
				return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
			} : function(e, t) {
				if(t)
					for(; t = t.parentNode;)
						if(t === e) return !0;
				return !1
			}, U = t ? function(e, t) {
				if(e === t) return A = !0, 0;
				var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !w.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === $ && R($, e) ? -1 : t === n || t.ownerDocument === $ && R($, t) ? 1 : D ? te.call(D, e) - te.call(D, t) : 0 : 4 & r ? -1 : 1)
			} : function(e, t) {
				if(e === t) return A = !0, 0;
				var r, i = 0,
					o = e.parentNode,
					a = t.parentNode,
					u = [e],
					l = [t];
				if(!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : D ? te.call(D, e) - te.call(D, t) : 0;
				if(o === a) return s(e, t);
				for(r = e; r = r.parentNode;) u.unshift(r);
				for(r = t; r = r.parentNode;) l.unshift(r);
				for(; u[i] === l[i];) i++;
				return i ? s(u[i], l[i]) : u[i] === $ ? -1 : l[i] === $ ? 1 : 0
			}, n) : q
		}, t.matches = function(e, n) {
			return t(e, null, null, n)
		}, t.matchesSelector = function(e, n) {
			if((e.ownerDocument || e) !== q && L(e), n = n.replace(fe, "='$1']"), w.matchesSelector && O && (!P || !P.test(n)) && (!F || !F.test(n))) try {
				var r = M.call(e, n);
				if(r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
			} catch(i) {}
			return t(n, q, null, [e]).length > 0
		}, t.contains = function(e, t) {
			return(e.ownerDocument || e) !== q && L(e), R(e, t)
		}, t.attr = function(e, t) {
			(e.ownerDocument || e) !== q && L(e);
			var n = T.attrHandle[t.toLowerCase()],
				r = n && G.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
			return void 0 !== r ? r : w.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
		}, t.error = function(e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, t.uniqueSort = function(e) {
			var t, n = [],
				r = 0,
				i = 0;
			if(A = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(U), A) {
				for(; t = e[i++];) t === e[i] && (r = n.push(i));
				for(; r--;) e.splice(n[r], 1)
			}
			return D = null, e
		}, C = t.getText = function(e) {
			var t, n = "",
				r = 0,
				i = e.nodeType;
			if(i) {
				if(1 === i || 9 === i || 11 === i) {
					if("string" == typeof e.textContent) return e.textContent;
					for(e = e.firstChild; e; e = e.nextSibling) n += C(e)
				} else if(3 === i || 4 === i) return e.nodeValue
			} else
				for(; t = e[r++];) n += C(t);
			return n
		}, T = t.selectors = {
			cacheLength: 50,
			createPseudo: r,
			match: he,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(e) {
					return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function(e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
				},
				PSEUDO: function(e) {
					var t, n = !e[6] && e[2];
					return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function(e) {
					var t = e.replace(we, Te).toLowerCase();
					return "*" === e ? function() {
						return !0
					} : function(e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function(e) {
					var t = _[e + " "];
					return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && _(e, function(e) {
						return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
					})
				},
				ATTR: function(e, n, r) {
					return function(i) {
						var o = t.attr(i, e);
						return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
					}
				},
				CHILD: function(e, t, n, r, i) {
					var o = "nth" !== e.slice(0, 3),
						s = "last" !== e.slice(-4),
						a = "of-type" === t;
					return 1 === r && 0 === i ? function(e) {
						return !!e.parentNode
					} : function(t, n, u) {
						var l, c, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling",
							m = t.parentNode,
							v = a && t.nodeName.toLowerCase(),
							y = !u && !a;
						if(m) {
							if(o) {
								for(; g;) {
									for(f = t; f = f[g];)
										if(a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
									h = g = "only" === e && !h && "nextSibling"
								}
								return !0
							}
							if(h = [s ? m.firstChild : m.lastChild], s && y) {
								for(c = m[W] || (m[W] = {}), l = c[e] || [], d = l[0] === B && l[1], p = l[0] === B && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();)
									if(1 === f.nodeType && ++p && f === t) {
										c[e] = [B, d, p];
										break
									}
							} else if(y && (l = (t[W] || (t[W] = {}))[e]) && l[0] === B) p = l[1];
							else
								for(;
									(f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[W] || (f[W] = {}))[e] = [B, p]), f !== t)););
							return p -= i, p === r || p % r === 0 && p / r >= 0
						}
					}
				},
				PSEUDO: function(e, n) {
					var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
					return o[W] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
						for(var r, i = o(e, n), s = i.length; s--;) r = te.call(e, i[s]), e[r] = !(t[r] = i[s])
					}) : function(e) {
						return o(e, 0, i)
					}) : o
				}
			},
			pseudos: {
				not: r(function(e) {
					var t = [],
						n = [],
						i = E(e.replace(ue, "$1"));
					return i[W] ? r(function(e, t, n, r) {
						for(var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
					}) : function(e, r, o) {
						return t[0] = e, i(t, null, o, n), !n.pop()
					}
				}),
				has: r(function(e) {
					return function(n) {
						return t(e, n).length > 0
					}
				}),
				contains: r(function(e) {
					return function(t) {
						return(t.textContent || t.innerText || C(t)).indexOf(e) > -1
					}
				}),
				lang: r(function(e) {
					return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(),
						function(t) {
							var n;
							do
								if(n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
							return !1
						}
				}),
				target: function(t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function(e) {
					return e === H
				},
				focus: function(e) {
					return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: function(e) {
					return e.disabled === !1
				},
				disabled: function(e) {
					return e.disabled === !0
				},
				checked: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},
				selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
				},
				empty: function(e) {
					for(e = e.firstChild; e; e = e.nextSibling)
						if(e.nodeType < 6) return !1;
					return !0
				},
				parent: function(e) {
					return !T.pseudos.empty(e)
				},
				header: function(e) {
					return me.test(e.nodeName)
				},
				input: function(e) {
					return ge.test(e.nodeName)
				},
				button: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function(e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				},
				first: l(function() {
					return [0]
				}),
				last: l(function(e, t) {
					return [t - 1]
				}),
				eq: l(function(e, t, n) {
					return [0 > n ? n + t : n]
				}),
				even: l(function(e, t) {
					for(var n = 0; t > n; n += 2) e.push(n);
					return e
				}),
				odd: l(function(e, t) {
					for(var n = 1; t > n; n += 2) e.push(n);
					return e
				}),
				lt: l(function(e, t, n) {
					for(var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
					return e
				}),
				gt: l(function(e, t, n) {
					for(var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
					return e
				})
			}
		}, T.pseudos.nth = T.pseudos.eq;
		for(b in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) T.pseudos[b] = a(b);
		for(b in {
				submit: !0,
				reset: !0
			}) T.pseudos[b] = u(b);
		return f.prototype = T.filters = T.pseudos, T.setFilters = new f, k = t.tokenize = function(e, n) {
			var r, i, o, s, a, u, l, c = z[e + " "];
			if(c) return n ? 0 : c.slice(0);
			for(a = e, u = [], l = T.preFilter; a;) {
				r && !(i = le.exec(a)) || (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = ce.exec(a)) && (r = i.shift(), o.push({
					value: r,
					type: i[0].replace(ue, " ")
				}), a = a.slice(r.length));
				for(s in T.filter) !(i = he[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
					value: r,
					type: s,
					matches: i
				}), a = a.slice(r.length));
				if(!r) break
			}
			return n ? a.length : a ? t.error(e) : z(e, u).slice(0)
		}, E = t.compile = function(e, t) {
			var n, r = [],
				i = [],
				o = X[e + " "];
			if(!o) {
				for(t || (t = k(e)), n = t.length; n--;) o = y(t[n]), o[W] ? r.push(o) : i.push(o);
				o = X(e, x(i, r)), o.selector = e
			}
			return o
		}, S = t.select = function(e, t, n, r) {
			var i, o, s, a, u, l = "function" == typeof e && e,
				f = !r && k(e = l.selector || e);
			if(n = n || [], 1 === f.length) {
				if(o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && O && T.relative[o[1].type]) {
					if(t = (T.find.ID(s.matches[0].replace(we, Te), t) || [])[0], !t) return n;
					l && (t = t.parentNode), e = e.slice(o.shift().value.length)
				}
				for(i = he.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !T.relative[a = s.type]);)
					if((u = T.find[a]) && (r = u(s.matches[0].replace(we, Te), xe.test(o[0].type) && c(t.parentNode) || t))) {
						if(o.splice(i, 1), e = r.length && p(o), !e) return Z.apply(n, r), n;
						break
					}
			}
			return(l || E(e, f))(r, t, !O, n, xe.test(e) && c(t.parentNode) || t), n
		}, w.sortStable = W.split("").sort(U).join("") === W, w.detectDuplicates = !!A, L(), w.sortDetached = i(function(e) {
			return 1 & e.compareDocumentPosition(q.createElement("div"))
		}), i(function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || o("type|href|height|width", function(e, t, n) {
			return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), w.attributes && i(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || o("value", function(e, t, n) {
			return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
		}), i(function(e) {
			return null == e.getAttribute("disabled")
		}) || o(ne, function(e, t, n) {
			var r;
			return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
		}), t
	}(e);
	Z.find = ie, Z.expr = ie.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = ie.uniqueSort, Z.text = ie.getText, Z.isXMLDoc = ie.isXML, Z.contains = ie.contains;
	var oe = Z.expr.match.needsContext,
		se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		ae = /^.[^:#\[\.,]*$/;
	Z.filter = function(e, t, n) {
		var r = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, Z.fn.extend({
		find: function(e) {
			var t, n = this.length,
				r = [],
				i = this;
			if("string" != typeof e) return this.pushStack(Z(e).filter(function() {
				for(t = 0; n > t; t++)
					if(Z.contains(i[t], this)) return !0
			}));
			for(t = 0; n > t; t++) Z.find(e, i[t], r);
			return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
		},
		filter: function(e) {
			return this.pushStack(r(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(r(this, e || [], !0))
		},
		is: function(e) {
			return !!r(this, "string" == typeof e && oe.test(e) ? Z(e) : e || [], !1).length
		}
	});
	var ue, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		ce = Z.fn.init = function(e, t) {
			var n, r;
			if(!e) return this;
			if("string" == typeof e) {
				if(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : le.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
				if(n[1]) {
					if(t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), se.test(n[1]) && Z.isPlainObject(t))
						for(n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
					return this
				}
				return r = J.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = J, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ue.ready ? ue.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
		};
	ce.prototype = Z.fn, ue = Z(J);
	var fe = /^(?:parents|prev(?:Until|All))/,
		pe = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	Z.extend({
		dir: function(e, t, n) {
			for(var r = [], i = void 0 !== n;
				(e = e[t]) && 9 !== e.nodeType;)
				if(1 === e.nodeType) {
					if(i && Z(e).is(n)) break;
					r.push(e)
				}
			return r
		},
		sibling: function(e, t) {
			for(var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	}), Z.fn.extend({
		has: function(e) {
			var t = Z(e, this),
				n = t.length;
			return this.filter(function() {
				for(var e = 0; n > e; e++)
					if(Z.contains(this, t[e])) return !0
			})
		},
		closest: function(e, t) {
			for(var n, r = 0, i = this.length, o = [], s = oe.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; i > r; r++)
				for(n = this[r]; n && n !== t; n = n.parentNode)
					if(n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
						o.push(n);
						break
					}
			return this.pushStack(o.length > 1 ? Z.unique(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? U.call(Z(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), Z.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return Z.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return Z.dir(e, "parentNode", n)
		},
		next: function(e) {
			return i(e, "nextSibling")
		},
		prev: function(e) {
			return i(e, "previousSibling")
		},
		nextAll: function(e) {
			return Z.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return Z.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return Z.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return Z.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return Z.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return Z.sibling(e.firstChild)
		},
		contents: function(e) {
			return e.contentDocument || Z.merge([], e.childNodes)
		}
	}, function(e, t) {
		Z.fn[e] = function(n, r) {
			var i = Z.map(this, t, n);
			return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Z.filter(r, i)), this.length > 1 && (pe[e] || Z.unique(i), fe.test(e) && i.reverse()), this.pushStack(i)
		}
	});
	var de = /\S+/g,
		he = {};
	Z.Callbacks = function(e) {
		e = "string" == typeof e ? he[e] || o(e) : Z.extend({}, e);
		var t, n, r, i, s, a, u = [],
			l = !e.once && [],
			c = function(o) {
				for(t = e.memory && o, n = !0, a = i || 0, i = 0, s = u.length, r = !0; u && s > a; a++)
					if(u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
						t = !1;
						break
					}
				r = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
			},
			f = {
				add: function() {
					if(u) {
						var n = u.length;
						! function o(t) {
							Z.each(t, function(t, n) {
								var r = Z.type(n);
								"function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
							})
						}(arguments), r ? s = u.length : t && (i = n, c(t))
					}
					return this
				},
				remove: function() {
					return u && Z.each(arguments, function(e, t) {
						for(var n;
							(n = Z.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (s >= n && s--, a >= n && a--)
					}), this
				},
				has: function(e) {
					return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
				},
				empty: function() {
					return u = [], s = 0, this
				},
				disable: function() {
					return u = l = t = void 0, this
				},
				disabled: function() {
					return !u
				},
				lock: function() {
					return l = void 0, t || f.disable(), this
				},
				locked: function() {
					return !l
				},
				fireWith: function(e, t) {
					return !u || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : c(t)), this
				},
				fire: function() {
					return f.fireWith(this, arguments), this
				},
				fired: function() {
					return !!n
				}
			};
		return f
	}, Z.extend({
		Deferred: function(e) {
			var t = [
					["resolve", "done", Z.Callbacks("once memory"), "resolved"],
					["reject", "fail", Z.Callbacks("once memory"), "rejected"],
					["notify", "progress", Z.Callbacks("memory")]
				],
				n = "pending",
				r = {
					state: function() {
						return n
					},
					always: function() {
						return i.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return Z.Deferred(function(n) {
							Z.each(t, function(t, o) {
								var s = Z.isFunction(e[t]) && e[t];
								i[o[1]](function() {
									var e = s && s.apply(this, arguments);
									e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? Z.extend(e, r) : r
					}
				},
				i = {};
			return r.pipe = r.then, Z.each(t, function(e, o) {
				var s = o[2],
					a = o[3];
				r[o[1]] = s.add, a && s.add(function() {
					n = a
				}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
					return i[o[0] + "With"](this === i ? r : this, arguments), this
				}, i[o[0] + "With"] = s.fireWith
			}), r.promise(i), e && e.call(i, i), i
		},
		when: function(e) {
			var t, n, r, i = 0,
				o = _.call(arguments),
				s = o.length,
				a = 1 !== s || e && Z.isFunction(e.promise) ? s : 0,
				u = 1 === a ? e : Z.Deferred(),
				l = function(e, n, r) {
					return function(i) {
						n[e] = this, r[e] = arguments.length > 1 ? _.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
					}
				};
			if(s > 1)
				for(t = new Array(s), n = new Array(s), r = new Array(s); s > i; i++) o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
			return a || u.resolveWith(r, o), u.promise()
		}
	});
	var ge;
	Z.fn.ready = function(e) {
		return Z.ready.promise().done(e), this
	}, Z.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? Z.readyWait++ : Z.ready(!0)
		},
		ready: function(e) {
			(e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (ge.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))))
		}
	}), Z.ready.promise = function(t) {
		return ge || (ge = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), ge.promise(t)
	}, Z.ready.promise();
	var me = Z.access = function(e, t, n, r, i, o, s) {
		var a = 0,
			u = e.length,
			l = null == n;
		if("object" === Z.type(n)) {
			i = !0;
			for(a in n) Z.access(e, t, a, n[a], !0, o, s)
		} else if(void 0 !== r && (i = !0, Z.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
				return l.call(Z(e), n)
			})), t))
			for(; u > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
		return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
	};
	Z.acceptData = function(e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	}, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
		key: function(e) {
			if(!a.accepts(e)) return 0;
			var t = {},
				n = e[this.expando];
			if(!n) {
				n = a.uid++;
				try {
					t[this.expando] = {
						value: n
					}, Object.defineProperties(e, t)
				} catch(r) {
					t[this.expando] = n, Z.extend(e, t)
				}
			}
			return this.cache[n] || (this.cache[n] = {}), n
		},
		set: function(e, t, n) {
			var r, i = this.key(e),
				o = this.cache[i];
			if("string" == typeof t) o[t] = n;
			else if(Z.isEmptyObject(o)) Z.extend(this.cache[i], t);
			else
				for(r in t) o[r] = t[r];
			return o
		},
		get: function(e, t) {
			var n = this.cache[this.key(e)];
			return void 0 === t ? n : n[t]
		},
		access: function(e, t, n) {
			var r;
			return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function(e, t) {
			var n, r, i, o = this.key(e),
				s = this.cache[o];
			if(void 0 === t) this.cache[o] = {};
			else {
				Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(de) || [])), n = r.length;
				for(; n--;) delete s[r[n]]
			}
		},
		hasData: function(e) {
			return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
		},
		discard: function(e) {
			e[this.expando] && delete this.cache[e[this.expando]]
		}
	};
	var ve = new a,
		ye = new a,
		xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		be = /([A-Z])/g;
	Z.extend({
		hasData: function(e) {
			return ye.hasData(e) || ve.hasData(e)
		},
		data: function(e, t, n) {
			return ye.access(e, t, n)
		},
		removeData: function(e, t) {
			ye.remove(e, t)
		},
		_data: function(e, t, n) {
			return ve.access(e, t, n)
		},
		_removeData: function(e, t) {
			ve.remove(e, t)
		}
	}), Z.fn.extend({
		data: function(e, t) {
			var n, r, i, o = this[0],
				s = o && o.attributes;
			if(void 0 === e) {
				if(this.length && (i = ye.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
					for(n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(o, r, i[r])));
					ve.set(o, "hasDataAttrs", !0)
				}
				return i
			}
			return "object" == typeof e ? this.each(function() {
				ye.set(this, e)
			}) : me(this, function(t) {
				var n, r = Z.camelCase(e);
				if(o && void 0 === t) {
					if(n = ye.get(o, e), void 0 !== n) return n;
					if(n = ye.get(o, r), void 0 !== n) return n;
					if(n = u(o, r, void 0), void 0 !== n) return n
				} else this.each(function() {
					var n = ye.get(this, r);
					ye.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
				})
			}, null, t, arguments.length > 1, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				ye.remove(this, e)
			})
		}
	}), Z.extend({
		queue: function(e, t, n) {
			var r;
			return e ? (t = (t || "fx") + "queue", r = ve.get(e, t), n && (!r || Z.isArray(n) ? r = ve.access(e, t, Z.makeArray(n)) : r.push(n)), r || []) : void 0
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = Z.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = Z._queueHooks(e, t),
				s = function() {
					Z.dequeue(e, t)
				};
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return ve.get(e, n) || ve.access(e, n, {
				empty: Z.Callbacks("once memory").add(function() {
					ve.remove(e, [t + "queue", n])
				})
			})
		}
	}), Z.fn.extend({
		queue: function(e, t) {
			var n = 2;
			return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function() {
				var n = Z.queue(this, e, t);
				Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				Z.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, r = 1,
				i = Z.Deferred(),
				o = this,
				s = this.length,
				a = function() {
					--r || i.resolveWith(o, [o])
				};
			for("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = ve.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
			return a(), i.promise(t)
		}
	});
	var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Te = ["Top", "Right", "Bottom", "Left"],
		Ce = function(e, t) {
			return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
		},
		Ne = /^(?:checkbox|radio)$/i;
	! function() {
		var e = J.createDocumentFragment(),
			t = e.appendChild(J.createElement("div")),
			n = J.createElement("input");
		n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
	}();
	var ke = "undefined";
	Q.focusinBubbles = "onfocusin" in e;
	var Ee = /^key/,
		Se = /^(?:mouse|pointer|contextmenu)|click/,
		je = /^(?:focusinfocus|focusoutblur)$/,
		De = /^([^.]*)(?:\.(.+)|)$/;
	Z.event = {
		global: {},
		add: function(e, t, n, r, i) {
			var o, s, a, u, l, c, f, p, d, h, g, m = ve.get(e);
			if(m)
				for(n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Z.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
						return typeof Z !== ke && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
					}), t = (t || "").match(de) || [""], l = t.length; l--;) a = De.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d && (f = Z.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = Z.event.special[d] || {}, c = Z.extend({
					type: d,
					origType: g,
					data: r,
					handler: n,
					guid: n.guid,
					selector: i,
					needsContext: i && Z.expr.match.needsContext.test(i),
					namespace: h.join(".")
				}, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(d, s, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), Z.event.global[d] = !0)
		},
		remove: function(e, t, n, r, i) {
			var o, s, a, u, l, c, f, p, d, h, g, m = ve.hasData(e) && ve.get(e);
			if(m && (u = m.events)) {
				for(t = (t || "").match(de) || [""], l = t.length; l--;)
					if(a = De.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
						for(f = Z.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
						s && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || Z.removeEvent(e, d, m.handle), delete u[d])
					} else
						for(d in u) Z.event.remove(e, d + t[l], n, r, !0);
				Z.isEmptyObject(u) && (delete m.handle, ve.remove(e, "events"))
			}
		},
		trigger: function(t, n, r, i) {
			var o, s, a, u, l, c, f, p = [r || J],
				d = G.call(t, "type") ? t.type : t,
				h = G.call(t, "namespace") ? t.namespace.split(".") : [];
			if(s = a = r = r || J, 3 !== r.nodeType && 8 !== r.nodeType && !je.test(d + Z.event.triggered) && (d.indexOf(".") >= 0 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[Z.expando] ? t : new Z.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Z.makeArray(n, [t]), f = Z.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
				if(!i && !f.noBubble && !Z.isWindow(r)) {
					for(u = f.delegateType || d, je.test(u + d) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
					a === (r.ownerDocument || J) && p.push(a.defaultView || a.parentWindow || e)
				}
				for(o = 0;
					(s = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || d, c = (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle"), c && c.apply(s, n), c = l && s[l], c && c.apply && Z.acceptData(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
				return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Z.acceptData(r) || l && Z.isFunction(r[d]) && !Z.isWindow(r) && (a = r[l], a && (r[l] = null), Z.event.triggered = d, r[d](), Z.event.triggered = void 0, a && (r[l] = a)), t.result
			}
		},
		dispatch: function(e) {
			e = Z.event.fix(e);
			var t, n, r, i, o, s = [],
				a = _.call(arguments),
				u = (ve.get(this, "events") || {})[e.type] || [],
				l = Z.event.special[e.type] || {};
			if(a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
				for(s = Z.event.handlers.call(this, e, u), t = 0;
					(i = s[t++]) && !e.isPropagationStopped();)
					for(e.currentTarget = i.elem, n = 0;
						(o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o, e.data = o.data, r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
				return l.postDispatch && l.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, t) {
			var n, r, i, o, s = [],
				a = t.delegateCount,
				u = e.target;
			if(a && u.nodeType && (!e.button || "click" !== e.type))
				for(; u !== this; u = u.parentNode || this)
					if(u.disabled !== !0 || "click" !== e.type) {
						for(r = [], n = 0; a > n; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(u) >= 0 : Z.find(i, this, null, [u]).length), r[i] && r.push(o);
						r.length && s.push({
							elem: u,
							handlers: r
						})
					}
			return a < t.length && s.push({
				elem: this,
				handlers: t.slice(a)
			}), s
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, t) {
				var n, r, i, o = t.button;
				return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
			}
		},
		fix: function(e) {
			if(e[Z.expando]) return e;
			var t, n, r, i = e.type,
				o = e,
				s = this.fixHooks[i];
			for(s || (this.fixHooks[i] = s = Se.test(i) ? this.mouseHooks : Ee.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new Z.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
			return e.target || (e.target = J), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					return this !== f() && this.focus ? (this.focus(), !1) : void 0
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === f() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
				},
				_default: function(e) {
					return Z.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, r) {
			var i = Z.extend(new Z.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
		}
	}, Z.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	}, Z.Event = function(e, t) {
		return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l : c) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
	}, Z.Event.prototype = {
		isDefaultPrevented: c,
		isPropagationStopped: c,
		isImmediatePropagationStopped: c,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = l, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, Z.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, t) {
		Z.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, r = this,
					i = e.relatedTarget,
					o = e.handleObj;
				return i && (i === r || Z.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), Q.focusinBubbles || Z.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = function(e) {
			Z.event.simulate(t, e.target, Z.event.fix(e), !0)
		};
		Z.event.special[t] = {
			setup: function() {
				var r = this.ownerDocument || this,
					i = ve.access(r, t);
				i || r.addEventListener(e, n, !0), ve.access(r, t, (i || 0) + 1)
			},
			teardown: function() {
				var r = this.ownerDocument || this,
					i = ve.access(r, t) - 1;
				i ? ve.access(r, t, i) : (r.removeEventListener(e, n, !0), ve.remove(r, t))
			}
		}
	}), Z.fn.extend({
		on: function(e, t, n, r, i) {
			var o, s;
			if("object" == typeof e) {
				"string" != typeof t && (n = n || t, t = void 0);
				for(s in e) this.on(s, t, n, e[s], i);
				return this
			}
			if(null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = c;
			else if(!r) return this;
			return 1 === i && (o = r, r = function(e) {
				return Z().off(e), o.apply(this, arguments)
			}, r.guid = o.guid || (o.guid = Z.guid++)), this.each(function() {
				Z.event.add(this, e, r, n, t)
			})
		},
		one: function(e, t, n, r) {
			return this.on(e, t, n, r, 1)
		},
		off: function(e, t, n) {
			var r, i;
			if(e && e.preventDefault && e.handleObj) return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if("object" == typeof e) {
				for(i in e) this.off(i, t, e[i]);
				return this
			}
			return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = c), this.each(function() {
				Z.event.remove(this, e, n, t)
			})
		},
		trigger: function(e, t) {
			return this.each(function() {
				Z.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			return n ? Z.event.trigger(e, t, n, !0) : void 0
		}
	});
	var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		Le = /<([\w:]+)/,
		qe = /<|&#?\w+;/,
		He = /<(?:script|style|link)/i,
		Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Fe = /^$|\/(?:java|ecma)script/i,
		Pe = /^true\/(.*)/,
		Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Re = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	Re.optgroup = Re.option, Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead, Re.th = Re.td, Z.extend({
		clone: function(e, t, n) {
			var r, i, o, s, a = e.cloneNode(!0),
				u = Z.contains(e.ownerDocument, e);
			if(!(Q.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
				for(s = v(a), o = v(e), r = 0, i = o.length; i > r; r++) y(o[r], s[r]);
			if(t)
				if(n)
					for(o = o || v(e), s = s || v(a), r = 0, i = o.length; i > r; r++) m(o[r], s[r]);
				else m(e, a);
			return s = v(a, "script"), s.length > 0 && g(s, !u && v(e, "script")), a
		},
		buildFragment: function(e, t, n, r) {
			for(var i, o, s, a, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; d > p; p++)
				if(i = e[p], i || 0 === i)
					if("object" === Z.type(i)) Z.merge(f, i.nodeType ? [i] : i);
					else if(qe.test(i)) {
				for(o = o || c.appendChild(t.createElement("div")), s = (Le.exec(i) || ["", ""])[1].toLowerCase(), a = Re[s] || Re._default, o.innerHTML = a[1] + i.replace(Ae, "<$1></$2>") + a[2], l = a[0]; l--;) o = o.lastChild;
				Z.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
			} else f.push(t.createTextNode(i));
			for(c.textContent = "", p = 0; i = f[p++];)
				if((!r || -1 === Z.inArray(i, r)) && (u = Z.contains(i.ownerDocument, i), o = v(c.appendChild(i), "script"), u && g(o), n))
					for(l = 0; i = o[l++];) Fe.test(i.type || "") && n.push(i);
			return c
		},
		cleanData: function(e) {
			for(var t, n, r, i, o = Z.event.special, s = 0; void 0 !== (n = e[s]); s++) {
				if(Z.acceptData(n) && (i = n[ve.expando], i && (t = ve.cache[i]))) {
					if(t.events)
						for(r in t.events) o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
					ve.cache[i] && delete ve.cache[i]
				}
				delete ye.cache[n[ye.expando]]
			}
		}
	}), Z.fn.extend({
		text: function(e) {
			return me(this, function(e) {
				return void 0 === e ? Z.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(e) {
				if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = p(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(e) {
				if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = p(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			for(var n, r = e ? Z.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			for(var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
				return Z.clone(this, e, t)
			})
		},
		html: function(e) {
			return me(this, function(e) {
				var t = this[0] || {},
					n = 0,
					r = this.length;
				if(void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if("string" == typeof e && !He.test(e) && !Re[(Le.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = e.replace(Ae, "<$1></$2>");
					try {
						for(; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
						t = 0
					} catch(i) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = arguments[0];
			return this.domManip(arguments, function(t) {
				e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this)
			}), e && (e.length || e.nodeType) ? this : this.remove()
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, t) {
			e = z.apply([], e);
			var n, r, i, o, s, a, u = 0,
				l = this.length,
				c = this,
				f = l - 1,
				p = e[0],
				g = Z.isFunction(p);
			if(g || l > 1 && "string" == typeof p && !Q.checkClone && Oe.test(p)) return this.each(function(n) {
				var r = c.eq(n);
				g && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
			});
			if(l && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
				for(i = Z.map(v(n, "script"), d), o = i.length; l > u; u++) s = n, u !== f && (s = Z.clone(s, !0, !0), o && Z.merge(i, v(s, "script"))), t.call(this[u], s, u);
				if(o)
					for(a = i[i.length - 1].ownerDocument, Z.map(i, h), u = 0; o > u; u++) s = i[u], Fe.test(s.type || "") && !ve.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(Me, "")))
			}
			return this
		}
	}), Z.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		Z.fn[e] = function(e) {
			for(var n, r = [], i = Z(e), o = i.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), Z(i[s])[t](n), X.apply(r, n.get());
			return this.pushStack(r)
		}
	});
	var We, $e = {},
		Be = /^margin/,
		Ie = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"),
		_e = function(e) {
			return e.ownerDocument.defaultView.getComputedStyle(e, null)
		};
	! function() {
		function t() {
			s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", i.appendChild(o);
			var t = e.getComputedStyle(s, null);
			n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
		}
		var n, r, i = J.documentElement,
			o = J.createElement("div"),
			s = J.createElement("div");
		s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), e.getComputedStyle && Z.extend(Q, {
			pixelPosition: function() {
				return t(), n
			},
			boxSizingReliable: function() {
				return null == r && t(), r
			},
			reliableMarginRight: function() {
				var t, n = s.appendChild(J.createElement("div"));
				return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), t
			}
		}))
	}(), Z.swap = function(e, t, n, r) {
		var i, o, s = {};
		for(o in t) s[o] = e.style[o], e.style[o] = t[o];
		i = n.apply(e, r || []);
		for(o in t) e.style[o] = s[o];
		return i
	};
	var ze = /^(none|table(?!-c[ea]).+)/,
		Xe = new RegExp("^(" + we + ")(.*)$", "i"),
		Ue = new RegExp("^([+-])=(" + we + ")", "i"),
		Ve = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Ye = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Ge = ["Webkit", "O", "Moz", "ms"];
	Z.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if(t) {
						var n = w(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": "cssFloat"
		},
		style: function(e, t, n, r) {
			if(e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i, o, s, a = Z.camelCase(t),
					u = e.style;
				return t = Z.cssProps[a] || (Z.cssProps[a] = C(u, a)), s = Z.cssHooks[t] || Z.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = Ue.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || Z.cssNumber[a] || (n += "px"), Q.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n)), void 0)
			}
		},
		css: function(e, t, n, r) {
			var i, o, s, a = Z.camelCase(t);
			return t = Z.cssProps[a] || (Z.cssProps[a] = C(e.style, a)), s = Z.cssHooks[t] || Z.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = w(e, t, r)), "normal" === i && t in Ye && (i = Ye[t]), "" === n || n ? (o = parseFloat(i), n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
		}
	}), Z.each(["height", "width"], function(e, t) {
		Z.cssHooks[t] = {
			get: function(e, n, r) {
				return n ? ze.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ve, function() {
					return E(e, t, r)
				}) : E(e, t, r) : void 0
			},
			set: function(e, n, r) {
				var i = r && _e(e);
				return N(e, n, r ? k(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
			}
		}
	}), Z.cssHooks.marginRight = T(Q.reliableMarginRight, function(e, t) {
		return t ? Z.swap(e, {
			display: "inline-block"
		}, w, [e, "marginRight"]) : void 0
	}), Z.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		Z.cssHooks[e + t] = {
			expand: function(n) {
				for(var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Te[r] + t] = o[r] || o[r - 2] || o[0];
				return i
			}
		}, Be.test(e) || (Z.cssHooks[e + t].set = N)
	}), Z.fn.extend({
		css: function(e, t) {
			return me(this, function(e, t, n) {
				var r, i, o = {},
					s = 0;
				if(Z.isArray(t)) {
					for(r = _e(e), i = t.length; i > s; s++) o[t[s]] = Z.css(e, t[s], !1, r);
					return o
				}
				return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
			}, e, t, arguments.length > 1)
		},
		show: function() {
			return S(this, !0)
		},
		hide: function() {
			return S(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				Ce(this) ? Z(this).show() : Z(this).hide()
			})
		}
	}), Z.Tween = j, j.prototype = {
		constructor: j,
		init: function(e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = j.propHooks[this.prop];
			return e && e.get ? e.get(this) : j.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = j.propHooks[this.prop];
			return this.options.duration ? this.pos = t = Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
		}
	}, j.prototype.init.prototype = j.prototype, j.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function(e) {
				Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, Z.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, Z.fx = j.prototype.init, Z.fx.step = {};
	var Qe, Je, Ke = /^(?:toggle|show|hide)$/,
		Ze = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"),
		et = /queueHooks$/,
		tt = [q],
		nt = {
			"*": [function(e, t) {
				var n = this.createTween(e, t),
					r = n.cur(),
					i = Ze.exec(t),
					o = i && i[3] || (Z.cssNumber[e] ? "" : "px"),
					s = (Z.cssNumber[e] || "px" !== o && +r) && Ze.exec(Z.css(n.elem, e)),
					a = 1,
					u = 20;
				if(s && s[3] !== o) {
					o = o || s[3], i = i || [], s = +r || 1;
					do a = a || ".5", s /= a, Z.style(n.elem, e, s + o); while (a !== (a = n.cur() / r) && 1 !== a && --u)
				}
				return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
			}]
		};
	Z.Animation = Z.extend(O, {
			tweener: function(e, t) {
				Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
				for(var n, r = 0, i = e.length; i > r; r++) n = e[r], nt[n] = nt[n] || [], nt[n].unshift(t)
			},
			prefilter: function(e, t) {
				t ? tt.unshift(e) : tt.push(e)
			}
		}), Z.speed = function(e, t, n) {
			var r = e && "object" == typeof e ? Z.extend({}, e) : {
				complete: n || !n && t || Z.isFunction(e) && e,
				duration: e,
				easing: n && t || t && !Z.isFunction(t) && t
			};
			return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
				Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
			}, r
		}, Z.fn.extend({
			fadeTo: function(e, t, n, r) {
				return this.filter(Ce).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, r)
			},
			animate: function(e, t, n, r) {
				var i = Z.isEmptyObject(e),
					o = Z.speed(t, n, r),
					s = function() {
						var t = O(this, Z.extend({}, e), o);
						(i || ve.get(this, "finish")) && t.stop(!0)
					};
				return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
			},
			stop: function(e, t, n) {
				var r = function(e) {
					var t = e.stop;
					delete e.stop, t(n)
				};
				return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
					var t = !0,
						i = null != e && e + "queueHooks",
						o = Z.timers,
						s = ve.get(this);
					if(i) s[i] && s[i].stop && r(s[i]);
					else
						for(i in s) s[i] && s[i].stop && et.test(i) && r(s[i]);
					for(i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
					!t && n || Z.dequeue(this, e)
				})
			},
			finish: function(e) {
				return e !== !1 && (e = e || "fx"), this.each(function() {
					var t, n = ve.get(this),
						r = n[e + "queue"],
						i = n[e + "queueHooks"],
						o = Z.timers,
						s = r ? r.length : 0;
					for(n.finish = !0, Z.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
					for(t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
					delete n.finish
				})
			}
		}), Z.each(["toggle", "show", "hide"], function(e, t) {
			var n = Z.fn[t];
			Z.fn[t] = function(e, r, i) {
				return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(A(t, !0), e, r, i)
			}
		}), Z.each({
			slideDown: A("show"),
			slideUp: A("hide"),
			slideToggle: A("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(e, t) {
			Z.fn[e] = function(e, n, r) {
				return this.animate(t, e, n, r)
			}
		}), Z.timers = [], Z.fx.tick = function() {
			var e, t = 0,
				n = Z.timers;
			for(Qe = Z.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
			n.length || Z.fx.stop(), Qe = void 0
		}, Z.fx.timer = function(e) {
			Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
		}, Z.fx.interval = 13, Z.fx.start = function() {
			Je || (Je = setInterval(Z.fx.tick, Z.fx.interval))
		}, Z.fx.stop = function() {
			clearInterval(Je), Je = null
		}, Z.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, Z.fn.delay = function(e, t) {
			return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var r = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(r)
				}
			})
		},
		function() {
			var e = J.createElement("input"),
				t = J.createElement("select"),
				n = t.appendChild(J.createElement("option"));
			e.type = "checkbox", Q.checkOn = "" !== e.value, Q.optSelected = n.selected, t.disabled = !0, Q.optDisabled = !n.disabled, e = J.createElement("input"), e.value = "t", e.type = "radio", Q.radioValue = "t" === e.value
		}();
	var rt, it, ot = Z.expr.attrHandle;
	Z.fn.extend({
		attr: function(e, t) {
			return me(this, Z.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				Z.removeAttr(this, e)
			})
		}
	}), Z.extend({
		attr: function(e, t, n) {
			var r, i, o = e.nodeType;
			if(e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === ke ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? it : rt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = Z.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t))
		},
		removeAttr: function(e, t) {
			var n, r, i = 0,
				o = t && t.match(de);
			if(o && 1 === e.nodeType)
				for(; n = o[i++];) r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if(!Q.radioValue && "radio" === t && Z.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		}
	}), it = {
		set: function(e, t, n) {
			return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var n = ot[t] || Z.find.attr;
		ot[t] = function(e, t, r) {
			var i, o;
			return r || (o = ot[t], ot[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, ot[t] = o), i
		}
	});
	var st = /^(?:input|select|textarea|button)$/i;
	Z.fn.extend({
		prop: function(e, t) {
			return me(this, Z.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[Z.propFix[e] || e]
			})
		}
	}), Z.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(e, t, n) {
			var r, i, o, s = e.nodeType;
			if(e && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !Z.isXMLDoc(e), o && (t = Z.propFix[t] || t, i = Z.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : -1
				}
			}
		}
	}), Q.optSelected || (Z.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		}
	}), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		Z.propFix[this.toLowerCase()] = this
	});
	var at = /[\t\r\n\f]/g;
	Z.fn.extend({
		addClass: function(e) {
			var t, n, r, i, o, s, a = "string" == typeof e && e,
				u = 0,
				l = this.length;
			if(Z.isFunction(e)) return this.each(function(t) {
				Z(this).addClass(e.call(this, t, this.className))
			});
			if(a)
				for(t = (e || "").match(de) || []; l > u; u++)
					if(n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : " ")) {
						for(o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
						s = Z.trim(r), n.className !== s && (n.className = s)
					}
			return this
		},
		removeClass: function(e) {
			var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e,
				u = 0,
				l = this.length;
			if(Z.isFunction(e)) return this.each(function(t) {
				Z(this).removeClass(e.call(this, t, this.className))
			});
			if(a)
				for(t = (e || "").match(de) || []; l > u; u++)
					if(n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : "")) {
						for(o = 0; i = t[o++];)
							for(; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
						s = e ? Z.trim(r) : "", n.className !== s && (n.className = s)
					}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : Z.isFunction(e) ? this.each(function(n) {
				Z(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function() {
				if("string" === n)
					for(var t, r = 0, i = Z(this), o = e.match(de) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
				else n !== ke && "boolean" !== n || (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
			})
		},
		hasClass: function(e) {
			for(var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
				if(1 === this[n].nodeType && (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0) return !0;
			return !1
		}
	});
	var ut = /\r/g;
	Z.fn.extend({
		val: function(e) {
			var t, n, r, i = this[0]; {
				if(arguments.length) return r = Z.isFunction(e), this.each(function(n) {
					var i;
					1 === this.nodeType && (i = r ? e.call(this, n, Z(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function(e) {
						return null == e ? "" : e + ""
					})), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
				});
				if(i) return t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ut, "") : null == n ? "" : n)
			}
		}
	}), Z.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = Z.find.attr(e, "value");
					return null != t ? t : Z.trim(Z.text(e))
				}
			},
			select: {
				get: function(e) {
					for(var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++)
						if(n = r[u], (n.selected || u === i) && (Q.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !Z.nodeName(n.parentNode, "optgroup"))) {
							if(t = Z(n).val(), o) return t;
							s.push(t)
						}
					return s
				},
				set: function(e, t) {
					for(var n, r, i = e.options, o = Z.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		}
	}), Z.each(["radio", "checkbox"], function() {
		Z.valHooks[this] = {
			set: function(e, t) {
				return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
			}
		}, Q.checkOn || (Z.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	}), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		Z.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), Z.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var lt = Z.now(),
		ct = /\?/;
	Z.parseJSON = function(e) {
		return JSON.parse(e + "")
	}, Z.parseXML = function(e) {
		var t, n;
		if(!e || "string" != typeof e) return null;
		try {
			n = new DOMParser, t = n.parseFromString(e, "text/xml")
		} catch(r) {
			t = void 0
		}
		return t && !t.getElementsByTagName("parsererror").length || Z.error("Invalid XML: " + e), t
	};
	var ft, pt, dt = /#.*$/,
		ht = /([?&])_=[^&]*/,
		gt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		mt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		vt = /^(?:GET|HEAD)$/,
		yt = /^\/\//,
		xt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		bt = {},
		wt = {},
		Tt = "*/".concat("*");
	try {
		pt = location.href
	} catch(Ct) {
		pt = J.createElement("a"), pt.href = "", pt = pt.href
	}
	ft = xt.exec(pt.toLowerCase()) || [], Z.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: pt,
			type: "GET",
			isLocal: mt.test(ft[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Tt,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": Z.parseJSON,
				"text xml": Z.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? M(M(e, Z.ajaxSettings), t) : M(Z.ajaxSettings, e)
		},
		ajaxPrefilter: F(bt),
		ajaxTransport: F(wt),
		ajax: function(e, t) {
			function n(e, t, n, s) {
				var u, c, v, y, b, T = t;
				2 !== x && (x = 2, a && clearTimeout(a), r = void 0, o = s || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (y = R(f, w, n)), y = W(f, y, w, u), u ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (Z.lastModified[i] = b), b = w.getResponseHeader("etag"), b && (Z.etag[i] = b)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, u = !v)) : (v = T, !e && T || (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", u ? h.resolveWith(p, [c, T, w]) : h.rejectWith(p, [w, T, v]), w.statusCode(m), m = void 0, l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : v]), g.fireWith(p, [w, T]), l && (d.trigger("ajaxComplete", [w, f]), --Z.active || Z.event.trigger("ajaxStop")))
			}
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var r, i, o, s, a, u, l, c, f = Z.ajaxSetup({}, t),
				p = f.context || f,
				d = f.context && (p.nodeType || p.jquery) ? Z(p) : Z.event,
				h = Z.Deferred(),
				g = Z.Callbacks("once memory"),
				m = f.statusCode || {},
				v = {},
				y = {},
				x = 0,
				b = "canceled",
				w = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if(2 === x) {
							if(!s)
								for(s = {}; t = gt.exec(o);) s[t[1].toLowerCase()] = t[2];
							t = s[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === x ? o : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return x || (e = y[n] = y[n] || e, v[e] = t), this
					},
					overrideMimeType: function(e) {
						return x || (f.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if(e)
							if(2 > x)
								for(t in e) m[t] = [m[t], e[t]];
							else w.always(e[w.status]);
						return this
					},
					abort: function(e) {
						var t = e || b;
						return r && r.abort(t), n(0, t), this
					}
				};
			if(h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || pt) + "").replace(dt, "").replace(yt, ft[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(de) || [""], null == f.crossDomain && (u = xt.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === ft[1] && u[2] === ft[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (ft[3] || ("http:" === ft[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), P(bt, f, t, w), 2 === x) return w;
			l = f.global, l && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !vt.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (ct.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = ht.test(i) ? i.replace(ht, "$1_=" + lt++) : i + (ct.test(i) ? "&" : "?") + "_=" + lt++)), f.ifModified && (Z.lastModified[i] && w.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && w.setRequestHeader("If-None-Match", Z.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Tt + "; q=0.01" : "") : f.accepts["*"]);
			for(c in f.headers) w.setRequestHeader(c, f.headers[c]);
			if(f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === x)) return w.abort();
			b = "abort";
			for(c in {
					success: 1,
					error: 1,
					complete: 1
				}) w[c](f[c]);
			if(r = P(wt, f, t, w)) {
				w.readyState = 1, l && d.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (a = setTimeout(function() {
					w.abort("timeout")
				}, f.timeout));
				try {
					x = 1, r.send(v, n)
				} catch(T) {
					if(!(2 > x)) throw T;
					n(-1, T)
				}
			} else n(-1, "No Transport");
			return w
		},
		getJSON: function(e, t, n) {
			return Z.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return Z.get(e, void 0, t, "script")
		}
	}), Z.each(["get", "post"], function(e, t) {
		Z[t] = function(e, n, r, i) {
			return Z.isFunction(n) && (i = i || r, r = n, n = void 0), Z.ajax({
				url: e,
				type: t,
				dataType: i,
				data: n,
				success: r
			})
		}
	}), Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		Z.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), Z._evalUrl = function(e) {
		return Z.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, Z.fn.extend({
		wrapAll: function(e) {
			var t;
			return Z.isFunction(e) ? this.each(function(t) {
				Z(this).wrapAll(e.call(this, t))
			}) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
				for(var e = this; e.firstElementChild;) e = e.firstElementChild;
				return e
			}).append(this)), this)
		},
		wrapInner: function(e) {
			return Z.isFunction(e) ? this.each(function(t) {
				Z(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = Z(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = Z.isFunction(e);
			return this.each(function(n) {
				Z(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
			}).end()
		}
	}), Z.expr.filters.hidden = function(e) {
		return e.offsetWidth <= 0 && e.offsetHeight <= 0
	}, Z.expr.filters.visible = function(e) {
		return !Z.expr.filters.hidden(e)
	};
	var Nt = /%20/g,
		kt = /\[\]$/,
		Et = /\r?\n/g,
		St = /^(?:submit|button|image|reset|file)$/i,
		jt = /^(?:input|select|textarea|keygen)/i;
	Z.param = function(e, t) {
		var n, r = [],
			i = function(e, t) {
				t = Z.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if(void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function() {
			i(this.name, this.value)
		});
		else
			for(n in e) $(n, e[n], t, i);
		return r.join("&").replace(Nt, "+")
	}, Z.fn.extend({
		serialize: function() {
			return Z.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = Z.prop(this, "elements");
				return e ? Z.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !Z(this).is(":disabled") && jt.test(this.nodeName) && !St.test(e) && (this.checked || !Ne.test(e))
			}).map(function(e, t) {
				var n = Z(this).val();
				return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(Et, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(Et, "\r\n")
				}
			}).get()
		}
	}), Z.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest
		} catch(e) {}
	};
	var Dt = 0,
		At = {},
		Lt = {
			0: 200,
			1223: 204
		},
		qt = Z.ajaxSettings.xhr();
	e.ActiveXObject && Z(e).on("unload", function() {
		for(var e in At) At[e]()
	}), Q.cors = !!qt && "withCredentials" in qt, Q.ajax = qt = !!qt, Z.ajaxTransport(function(e) {
		var t;
		return Q.cors || qt && !e.crossDomain ? {
			send: function(n, r) {
				var i, o = e.xhr(),
					s = ++Dt;
				if(o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
					for(i in e.xhrFields) o[i] = e.xhrFields[i];
				e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
				for(i in n) o.setRequestHeader(i, n[i]);
				t = function(e) {
					return function() {
						t && (delete At[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Lt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
							text: o.responseText
						} : void 0, o.getAllResponseHeaders()))
					}
				}, o.onload = t(), o.onerror = t("error"), t = At[s] = t("abort");
				try {
					o.send(e.hasContent && e.data || null)
				} catch(a) {
					if(t) throw a
				}
			},
			abort: function() {
				t && t()
			}
		} : void 0
	}), Z.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return Z.globalEval(e), e
			}
		}
	}), Z.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), Z.ajaxTransport("script", function(e) {
		if(e.crossDomain) {
			var t, n;
			return {
				send: function(r, i) {
					t = Z("<script>").prop({
						async: !0,
						charset: e.scriptCharset,
						src: e.url
					}).on("load error", n = function(e) {
						t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
					}), J.head.appendChild(t[0])
				},
				abort: function() {
					n && n()
				}
			}
		}
	});
	var Ht = [],
		Ot = /(=)\?(?=&|$)|\?\?/;
	Z.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Ht.pop() || Z.expando + "_" + lt++;
			return this[e] = !0, e
		}
	}), Z.ajaxPrefilter("json jsonp", function(t, n, r) {
		var i, o, s, a = t.jsonp !== !1 && (Ot.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ot.test(t.data) && "data");
		return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ot, "$1" + i) : t.jsonp !== !1 && (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
			return s || Z.error(i + " was not called"), s[0]
		}, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
			s = arguments
		}, r.always(function() {
			e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Ht.push(i)), s && Z.isFunction(o) && o(s[0]), s = o = void 0
		}), "script") : void 0
	}), Z.parseHTML = function(e, t, n) {
		if(!e || "string" != typeof e) return null;
		"boolean" == typeof t && (n = t, t = !1), t = t || J;
		var r = se.exec(e),
			i = !n && [];
		return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
	};
	var Ft = Z.fn.load;
	Z.fn.load = function(e, t, n) {
		if("string" != typeof e && Ft) return Ft.apply(this, arguments);
		var r, i, o, s = this,
			a = e.indexOf(" ");
		return a >= 0 && (r = Z.trim(e.slice(a)), e = e.slice(0, a)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && Z.ajax({
			url: e,
			type: i,
			dataType: "html",
			data: t
		}).done(function(e) {
			o = arguments, s.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
		}).complete(n && function(e, t) {
			s.each(n, o || [e.responseText, t, e])
		}), this
	}, Z.expr.filters.animated = function(e) {
		return Z.grep(Z.timers, function(t) {
			return e === t.elem
		}).length
	};
	var Pt = e.document.documentElement;
	Z.offset = {
		setOffset: function(e, t, n) {
			var r, i, o, s, a, u, l, c = Z.css(e, "position"),
				f = Z(e),
				p = {};
			"static" === c && (e.style.position = "relative"), a = f.offset(), o = Z.css(e, "top"), u = Z.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), Z.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
		}
	}, Z.fn.extend({
		offset: function(e) {
			if(arguments.length) return void 0 === e ? this : this.each(function(t) {
				Z.offset.setOffset(this, e, t)
			});
			var t, n, r = this[0],
				i = {
					top: 0,
					left: 0
				},
				o = r && r.ownerDocument;
			if(o) return t = o.documentElement, Z.contains(t, r) ? (typeof r.getBoundingClientRect !== ke && (i = r.getBoundingClientRect()), n = B(o), {
				top: i.top + n.pageYOffset - t.clientTop,
				left: i.left + n.pageXOffset - t.clientLeft
			}) : i
		},
		position: function() {
			if(this[0]) {
				var e, t, n = this[0],
					r = {
						top: 0,
						left: 0
					};
				return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - r.top - Z.css(n, "marginTop", !0),
					left: t.left - r.left - Z.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for(var e = this.offsetParent || Pt; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
				return e || Pt
			})
		}
	}), Z.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(t, n) {
		var r = "pageYOffset" === n;
		Z.fn[t] = function(i) {
			return me(this, function(t, i, o) {
				var s = B(t);
				return void 0 === o ? s ? s[n] : t[i] : void(s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
			}, t, i, arguments.length, null)
		}
	}), Z.each(["top", "left"], function(e, t) {
		Z.cssHooks[t] = T(Q.pixelPosition, function(e, n) {
			return n ? (n = w(e, t), Ie.test(n) ? Z(e).position()[t] + "px" : n) : void 0
		})
	}), Z.each({
		Height: "height",
		Width: "width"
	}, function(e, t) {
		Z.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function(n, r) {
			Z.fn[r] = function(r, i) {
				var o = arguments.length && (n || "boolean" != typeof r),
					s = n || (r === !0 || i === !0 ? "margin" : "border");
				return me(this, function(t, n, r) {
					var i;
					return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Z.css(t, n, s) : Z.style(t, n, r, s)
				}, t, o ? r : void 0, o, null)
			}
		})
	}), Z.fn.size = function() {
		return this.length
	}, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && (define("jquery", [], function() {
		return Z
	}), define("$", [], function() {
		return Z
	}), define("jQuery", [], function() {
		return Z
	}));
	var Mt = e.jQuery,
		Rt = e.$;
	return Z.noConflict = function(t) {
		return e.$ === Z && (e.$ = Rt), t && e.jQuery === Z && (e.jQuery = Mt), Z
	}, typeof t === ke && (e.jQuery = e.$ = Z), Z
});
! function(e, t, n) {
	function r(n) {
		var r = t.console;
		i[n] || (i[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()))
	}

	function a(t, n, a, i) {
		if(Object.defineProperty) try {
			return void Object.defineProperty(t, n, {
				configurable: !0,
				enumerable: !0,
				get: function() {
					return r(i), a
				},
				set: function(e) {
					r(i), a = e
				}
			})
		} catch(o) {}
		e._definePropertyBroken = !0, t[n] = a
	}
	var i = {};
	e.migrateWarnings = [], e.migrateMute = !0, !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"), e.migrateTrace === n && (e.migrateTrace = !0), e.migrateReset = function() {
		i = {}, e.migrateWarnings.length = 0
	}, "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
	var o = e("<input/>", {
			size: 1
		}).attr("size") && e.attrFn,
		s = e.attr,
		u = e.attrHooks.value && e.attrHooks.value.get || function() {
			return null
		},
		c = e.attrHooks.value && e.attrHooks.value.set || function() {
			return n
		},
		d = /^(?:input|button)$/i,
		l = /^[238]$/,
		p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
		f = /^(?:checked|selected)$/i;
	a(e, "attrFn", o || {}, "jQuery.attrFn is deprecated"), e.attr = function(t, a, i, u) {
		var c = a.toLowerCase(),
			h = t && t.nodeType;
		return u && (s.length < 4 && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !l.test(h) && (o ? a in o : e.isFunction(e.fn[a]))) ? e(t)[a](i) : ("type" === a && i !== n && d.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[c] && p.test(c) && (e.attrHooks[c] = {
			get: function(t, r) {
				var a, i = e.prop(t, r);
				return i === !0 || "boolean" != typeof i && (a = t.getAttributeNode(r)) && a.nodeValue !== !1 ? r.toLowerCase() : n
			},
			set: function(t, n, r) {
				var a;
				return n === !1 ? e.removeAttr(t, r) : (a = e.propFix[r] || r, a in t && (t[a] = !0), t.setAttribute(r, r.toLowerCase())), r
			}
		}, f.test(c) && r("jQuery.fn.attr('" + c + "') may use property instead of attribute")), s.call(e, t, a, i))
	}, e.attrHooks.value = {
		get: function(e, t) {
			var n = (e.nodeName || "").toLowerCase();
			return "button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
		},
		set: function(e, t) {
			var n = (e.nodeName || "").toLowerCase();
			return "button" === n ? c.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value', val) no longer sets properties"), void(e.value = t))
		}
	};
	var h, v, g = e.fn.init,
		m = e.parseJSON,
		y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
	e.fn.init = function(t, n, a) {
		var i;
		return t && "string" == typeof t && !e.isPlainObject(n) && (i = y.exec(e.trim(t))) && i[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), i[3] && r("$(html) HTML text after last tag is ignored"), "#" === i[0].charAt(0) && (r("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML) ? g.call(this, e.parseHTML(i[2], n, !0), n, a) : g.apply(this, arguments)
	}, e.fn.init.prototype = e.fn, e.parseJSON = function(e) {
		return e || null === e ? m.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null)
	}, e.uaMatch = function(e) {
		e = e.toLowerCase();
		var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
		return {
			browser: t[1] || "",
			version: t[2] || "0"
		}
	}, e.browser || (h = e.uaMatch(navigator.userAgent), v = {}, h.browser && (v[h.browser] = !0, v.version = h.version), v.chrome ? v.webkit = !0 : v.webkit && (v.safari = !0), e.browser = v), a(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function() {
		function t(e, n) {
			return new t.fn.init(e, n)
		}
		e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function(r, a) {
			return a && a instanceof e && !(a instanceof t) && (a = t(a)), e.fn.init.call(this, r, a, n)
		}, t.fn.init.prototype = t.fn;
		var n = t(document);
		return r("jQuery.sub() is deprecated"), t
	}, e.ajaxSetup({
		converters: {
			"text json": e.parseJSON
		}
	});
	var b = e.fn.data;
	e.fn.data = function(t) {
		var a, i, o = this[0];
		return !o || "events" !== t || 1 !== arguments.length || (a = e.data(o, t), i = e._data(o, t), a !== n && a !== i || i === n) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), i)
	};
	var w = /\/(java|ecma)script/i,
		j = e.fn.andSelf || e.fn.addBack;
	e.fn.andSelf = function() {
		return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), j.apply(this, arguments)
	}, e.clean || (e.clean = function(t, n, a, i) {
		n = n || document, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, r("jQuery.clean() is deprecated");
		var o, s, u, c, d = [];
		if(e.merge(d, e.buildFragment(t, n).childNodes), a)
			for(u = function(e) {
					return !e.type || w.test(e.type) ? i ? i.push(e.parentNode ? e.parentNode.removeChild(e) : e) : a.appendChild(e) : void 0
				}, o = 0; null != (s = d[o]); o++) e.nodeName(s, "script") && u(s) || (a.appendChild(s), "undefined" != typeof s.getElementsByTagName && (c = e.grep(e.merge([], s.getElementsByTagName("script")), u), d.splice.apply(d, [o + 1, 0].concat(c)), o += c.length));
		return d
	});
	var x = e.event.add,
		Q = e.event.remove,
		k = e.event.trigger,
		N = e.fn.toggle,
		T = e.fn.live,
		S = e.fn.die,
		M = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
		C = new RegExp("\\b(?:" + M + ")\\b"),
		H = /(?:^|\s)hover(\.\S+|)\b/,
		A = function(t) {
			return "string" != typeof t || e.event.special.hover ? t : (H.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(H, "mouseenter$1 mouseleave$1"))
		};
	e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && a(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function(e, t, n, a, i) {
		e !== document && C.test(t) && r("AJAX events should be attached to document: " + t), x.call(this, e, A(t || ""), n, a, i)
	}, e.event.remove = function(e, t, n, r, a) {
		Q.call(this, e, A(t) || "", n, r, a)
	}, e.fn.error = function() {
		var e = Array.prototype.slice.call(arguments, 0);
		return r("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
	}, e.fn.toggle = function(t, n) {
		if(!e.isFunction(t) || !e.isFunction(n)) return N.apply(this, arguments);
		r("jQuery.fn.toggle(handler, handler...) is deprecated");
		var a = arguments,
			i = t.guid || e.guid++,
			o = 0,
			s = function(n) {
				var r = (e._data(this, "lastToggle" + t.guid) || 0) % o;
				return e._data(this, "lastToggle" + t.guid, r + 1), n.preventDefault(), a[r].apply(this, arguments) || !1
			};
		for(s.guid = i; o < a.length;) a[o++].guid = i;
		return this.click(s)
	}, e.fn.live = function(t, n, a) {
		return r("jQuery.fn.live() is deprecated"), T ? T.apply(this, arguments) : (e(this.context).on(t, this.selector, n, a), this)
	}, e.fn.die = function(t, n) {
		return r("jQuery.fn.die() is deprecated"), S ? S.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
	}, e.event.trigger = function(e, t, n, a) {
		return n || C.test(e) || r("Global events are undocumented and deprecated"), k.call(this, e, t, n || document, a)
	}, e.each(M.split("|"), function(t, n) {
		e.event.special[n] = {
			setup: function() {
				var t = this;
				return t !== document && (e.event.add(document, n + "." + e.guid, function() {
					e.event.trigger(n, null, t, !0)
				}), e._data(this, n, e.guid++)), !1
			},
			teardown: function() {
				return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1
			}
		}
	})
}(jQuery, window);
define("core/core", [], function() {
	var t = {
		Config: {
			debug: "@DEBUG@"
		},
		version: "undefined@",
		appEnv: "Env",
		data: {},
		APP: {}
	};
	window.MoGu = window.MoGu || {}, $.extend(window.MoGu, t)
}), define("core/error", ["$", "./core"], function(t) {
	return t.extend(MoGu, {
		error: function(t) {
			console && console.log(t)
		}
	}), MoGu
}), define("fnExtend", ["$"], function() {
	return {
		alert: function() {
			console.log(123)
		}
	}
}), define("fn/fn", ["$", "fnExtend"], function(t, e) {
	return MoGu.fn = {
		set: function(t, e) {
			MoGu.App[t] && MoGu.error(t + "\u5305\u5c06\u88ab\u66ff\u6362"), MoGu.App[t] = e
		},
		get: function(t) {
			return MoGu.App[t] || !1
		},
		parseUrl: function(t, e) {
			return e = e || ["?", "&", "="], {
				key: value
			}
		}
	}, t.extend(MoGu.fn, e), MoGu
}), define("uiExtend", [], function() {
	return {
		alertUi: function() {
			alert(123)
		}
	}
}), define("lib/doT", [], function() {
	function t() {
		var t = {
				"&": "&#38;",
				"<": "&#60;",
				">": "&#62;",
				'"': "&#34;",
				"'": "&#39;",
				"/": "&#47;"
			},
			e = /&(?!#?\w+;)|<|>|"|'|\//g;
		return function() {
			return this ? this.replace(e, function(e) {
				return t[e] || e
			}) : this
		}
	}

	function e(t, n, r) {
		return("string" == typeof n ? n : n.toString()).replace(t.define || o, function(e, n, i, o) {
			return 0 === n.indexOf("def.") && (n = n.substring(4)), n in r || (":" === i ? (t.defineParams && o.replace(t.defineParams, function(t, e, i) {
				r[n] = {
					arg: e,
					text: i
				}
			}), n in r || (r[n] = o)) : new Function("def", "def['" + n + "']=" + o)(r)), ""
		}).replace(t.use || o, function(n, i) {
			t.useParams && (i = i.replace(t.useParams, function(t, e, n, i) {
				if(r[n] && r[n].arg && i) {
					var o = (n + ":" + i).replace(/'|\\/g, "_");
					return r.__exp = r.__exp || {}, r.__exp[o] = r[n].text.replace(new RegExp("(^|[^\\w$])" + r[n].arg + "([^\\w$])", "g"), "$1" + i + "$2"), e + "def.__exp['" + o + "']"
				}
			}));
			var o = new Function("def", "return " + i)(r);
			return o ? e(t, o, r) : o
		})
	}

	function n(t) {
		return t.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ")
	}
	var r = {
		version: "1.0.1",
		templateSettings: {
			evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g,
			interpolate: /\{\{=([\s\S]+?)\}\}/g,
			encode: /\{\{!([\s\S]+?)\}\}/g,
			use: /\{\{#([\s\S]+?)\}\}/g,
			useParams: /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
			define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
			defineParams: /^\s*([\w$]+):([\s\S]+)/,
			conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
			iterate: /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
			varname: "it",
			strip: !0,
			append: !0,
			selfcontained: !1
		},
		template: void 0,
		compile: void 0
	};
	String.prototype.encodeHTML = t();
	var i = {
			append: {
				start: "'+(",
				end: ")+'",
				endencode: "||'').toString().encodeHTML()+'"
			},
			split: {
				start: "';out+=(",
				end: ");out+='",
				endencode: "||'').toString().encodeHTML();out+='"
			}
		},
		o = /$^/;
	return r.template = function(s, a, u) {
		a = a || r.templateSettings;
		var c, l, f = a.append ? i.append : i.split,
			h = 0,
			d = a.use || a.define ? e(a, s, u || {}) : s;
		d = ("var out='" + (a.strip ? d.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "") : d).replace(/'|\\/g, "\\$&").replace(a.interpolate || o, function(t, e) {
			return f.start + n(e) + f.end
		}).replace(a.encode || o, function(t, e) {
			return c = !0, f.start + n(e) + f.endencode
		}).replace(a.conditional || o, function(t, e, r) {
			return e ? r ? "';}else if(" + n(r) + "){out+='" : "';}else{out+='" : r ? "';if(" + n(r) + "){out+='" : "';}out+='"
		}).replace(a.iterate || o, function(t, e, r, i) {
			return e ? (h += 1, l = i || "i" + h, e = n(e), "';var arr" + h + "=" + e + ";if(arr" + h + "){var " + r + "," + l + "=-1,l" + h + "=arr" + h + ".length-1;while(" + l + "<l" + h + "){" + r + "=arr" + h + "[" + l + "+=1];out+='") : "';} } out+='"
		}).replace(a.evaluate || o, function(t, e) {
			return "';" + n(e) + "out+='"
		}) + "';return out;").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/(\s|;|\}|^|\{)out\+='';/g, "$1").replace(/\+''/g, "").replace(/(\s|;|\}|^|\{)out\+=''\+/g, "$1out+="), c && a.selfcontained && (d = "String.prototype.encodeHTML=(" + t.toString() + "());" + d);
		try {
			return new Function(a.varname, d)
		} catch(p) {
			throw "undefined" != typeof console && console.log("Could not create a template function: " + d), p
		}
	}, r.compile = function(t, e) {
		return r.template(t, null, e)
	}, r
}), define("ui/ui", ["$", "uiExtend", "../lib/doT"], function(t, e, n) {
	return MoGu.ui = {
		showMask: function() {
			t("#M_Mask").show()
		},
		hideMask: function() {
			t("#M_Mask").hide()
		},
		showLoading: function() {
			t("#M_Loading").show()
		},
		hideMask: function() {
			t("#M_Loading").hide()
		},
		goTop: function() {},
		getTemplate: function(t, e) {
			try {
				return n.template(t)(e)
			} catch(r) {
				return r
			}
		},
		getdoT: function() {
			return n
		}
	}, t.extend(MoGu.ui, e), MoGu
}), define("lib/store.js", [], function() {
	function t() {
		try {
			return a in i && i[a]
		} catch(t) {
			return !1
		}
	}

	function e(t) {
		return function() {
			var e = Array.prototype.slice.call(arguments, 0);
			e.unshift(r), c.appendChild(r), r.addBehavior("#default#userData"), r.load(a);
			var n = t.apply(o, e);
			return c.removeChild(r), n
		}
	}

	function n(t) {
		return t.replace(h, "___")
	}
	var r, i = window,
		o = {},
		s = i.document,
		a = "localStorage",
		u = "__storejs__";
	if(o.disabled = !1, o.set = function() {}, o.get = function() {}, o.remove = function() {}, o.clear = function() {}, o.transact = function(t, e, n) {
			var r = o.get(t);
			null == n && (n = e, e = null), "undefined" == typeof r && (r = e || {}), n(r), o.set(t, r)
		}, o.getAll = function() {}, o.serialize = function(t) {
			return JSON.stringify(t)
		}, o.deserialize = function(t) {
			if("string" == typeof t) try {
				return JSON.parse(t)
			} catch(e) {
				return t || void 0
			}
		}, t()) r = i[a], o.set = function(t, e) {
		return void 0 === e ? o.remove(t) : (r.setItem(t, o.serialize(e)), e)
	}, o.get = function(t) {
		return o.deserialize(r.getItem(t))
	}, o.remove = function(t) {
		r.removeItem(t)
	}, o.clear = function() {
		r.clear()
	}, o.getAll = function() {
		for(var t = {}, e = 0; e < r.length; ++e) {
			var n = r.key(e);
			t[n] = o.get(n)
		}
		return t
	};
	else if(s.documentElement.addBehavior) {
		var c, l;
		try {
			l = new ActiveXObject("htmlfile"), l.open(), l.write('<script>document.w=window</script><iframe src="/favicon.ico"></iframe>'), l.close(), c = l.w.frames[0].document, r = c.createElement("div")
		} catch(f) {
			r = s.createElement("div"), c = s.body
		}
		var h = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");
		o.set = e(function(t, e, r) {
			return e = n(e), void 0 === r ? o.remove(e) : (t.setAttribute(e, o.serialize(r)), t.save(a), r)
		}), o.get = e(function(t, e) {
			return e = n(e), o.deserialize(t.getAttribute(e))
		}), o.remove = e(function(t, e) {
			e = n(e), t.removeAttribute(e), t.save(a)
		}), o.clear = e(function(t) {
			var e = t.XMLDocument.documentElement.attributes;
			t.load(a);
			for(var n, r = 0; n = e[r]; r++) t.removeAttribute(n.name);
			t.save(a)
		}), o.getAll = e(function(t) {
			for(var e, r = t.XMLDocument.documentElement.attributes, i = {}, s = 0; e = r[s]; ++s) {
				var a = n(e.name);
				i[e.name] = o.deserialize(t.getAttribute(a))
			}
			return i
		})
	}
	try {
		o.set(u, u), o.get(u) != u && (o.disabled = !0), o.remove(u)
	} catch(f) {
		o.disabled = !0
	}
	return o.enabled = !o.disabled, o
}), define("utilExtend", ["./lib/store.js"], function(t) {
	return {
		inputTextHide: function(t, e) {
			t.focus(function() {
				var t = $(this);
				$.trim(t.val()) == $.trim(t.attr("def-v")) && t.val(""), e && t.addClass(e)
			}), t.blur(function() {
				var t = $(this);
				"" == $.trim(t.val()) && (t.val(t.attr("def-v")), e && t.removeClass(e))
			})
		},
		getStore: function() {
			return t
		}
	}
}), define("util/util", ["$", "utilExtend"], function(t, e) {
	return MoGu.util = {
		setCookie: function(t, e, n) {
			n = n || {}, null === e && (e = "", n.expires = -1);
			var r = "";
			if(n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) {
				var i;
				"number" == typeof n.expires ? (i = new Date, i.setTime(i.getTime() + 864e5 * n.expires)) : i = n.expires, r = "; expires=" + i.toUTCString()
			}
			var o = n.path ? "; path=" + n.path : "",
				s = n.secure ? "; secure" : "",
				a = "";
			n.domain ? a = "; domain=" + n.domain : (a = document.domain.toString().split("."), a = "; domain=." + a[1] + "." + a[2]), document.cookie = [t, "=", encodeURIComponent(e), r, o, a, s].join("")
		},
		getCookie: function(t) {
			var e = document.cookie.match(new RegExp("(^| )" + t + "=([^;]*)(;|$)"));
			return null !== e ? decodeURIComponent(e[2]) : ""
		},
		removeCookie: function(t) {
			MGTOOL.setCookie(t, null, {
				expires: -1
			})
		}
	}, t.extend(MoGu.util, e), MoGu
}), define("mvc/modules/newModule", ["$"], function(t) {
	return function(e) {
		var n = {
				isAutoInit: !0,
				isAutoRender: !0,
				initialize: function() {
					this.isAutoInit && (this.$el ? "string" == typeof this.$el ? this.$el = t(this.$el).length ? t(this.$el) : this._greatElem(this.$el) : this.$el instanceof t && !this.$el.length && (this.$el = this._greatElem(this.$el)) : MoGu.error("\u6ca1\u6709\u4f20\u5165 DOM \u8282\u70b9"), this.addEvent(), this.isAutoRender && this.model.data && (this.data = this.model.data))
				},
				_greatElem: function(e) {
					var n = e,
						r = 'id="';
					return e instanceof t && (n = e.selector), 0 === n.indexOf(".") && (r = 'class="'), t("#view").append("<div " + r + n + '" ></div>'), t(n)
				},
				_getParam: function(e, n) {
					var r = [];
					return clickArr = e.split(" "), (executeFn = this[n]) ? (t.each(clickArr, function(t, e) {
						r.push(e)
					}), r.push(executeFn), r) : (MoGu.error(e + "\u6ca1\u6709\u6307\u5b9a \u76d1\u542c\u7684\u56de\u8c03\u51fd\u6570"), r)
				},
				addEvent: function() {
					for(var t in this.event) {
						var e = this._getParam(t, this.event[t]);
						this.$el.on.apply(this.$el, e)
					}
				},
				trigger: function(e, n) {
					var r = this.triggerCache[e];
					if(r) {
						var i = r[0],
							o = r.length > 1 ? t(r[0]) : this.el;
						o.trigger(i, n)
					} else MoGu.error(e + "\u89e6\u53d1\u4e86\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u4e8b\u4ef6")
				},
				getData: function() {
					return t.ajax({
						url: this.model.url,
						type: this.model.type || "POST",
						dataType: this.model.dataType || "json",
						data: this.model.data || {}
					})
				},
				_updateElDom: function(t) {
					var e = t || this.data,
						n = MoGu.ui.getTemplate(this.template, e);
					this.$el.html(n)
				},
				render: function() {
					var t = this;
					return t.template ? t.data ? void t._updateElDom() : t.getData().done(function(e) {
						t._updateElDom(e)
					}) : void MoGu.error("\u6ca1\u6709\u6307\u5b9a\u6a21\u677f")
				}
			},
			r = function() {};
		return r.prototype = t.extend({}, n, e), r
	}
}), define("mvc/modules/module", ["./newModule"], function(t) {
	return {
		extend: function(e) {
			var n = t(e),
				r = new n;
			return r
		}
	}
}), define("mvc/router/events", ["$"], function(t) {
	var e = 0,
		n = function(t) {
			var n = ++e + "";
			return t ? t + n : n
		},
		r = function(t) {
			var e, n = !1;
			return function() {
				return n ? e : (n = !0, e = t.apply(this, arguments), t = null, e)
			}
		},
		i = {
			on: function(t, e, n) {
				if(!eventsApi(this, "on", t, [e, n]) || !e) return this;
				this._events || (this._events = {});
				var r = this._events[t] || (this._events[t] = []);
				return r.push({
					callback: e,
					context: n,
					ctx: n || this
				}), this
			},
			once: function(t, e, n) {
				if(!eventsApi(this, "once", t, [e, n]) || !e) return this;
				var i = this,
					o = r(function() {
						i.off(t, o), e.apply(this, arguments)
					});
				return o._callback = e, this.on(t, o, n)
			},
			off: function(t, e, n) {
				if(!this._events || !eventsApi(this, "off", t, [e, n])) return this;
				if(!t && !e && !n) return this._events = void 0, this;
				for(var r = t ? [t] : Object.keys(this._events), i = 0, o = r.length; o > i; i++) {
					t = r[i];
					var s = this._events[t];
					if(s)
						if(e || n) {
							for(var a = [], u = 0, c = s.length; c > u; u++) {
								var l = s[u];
								(e && e !== l.callback && e !== l.callback._callback || n && n !== l.context) && a.push(l)
							}
							a.length ? this._events[t] = a : delete this._events[t]
						} else delete this._events[t]
				}
				return this
			},
			trigger: function(t) {
				if(!this._events) return this;
				var e = slice.call(arguments, 1);
				if(!eventsApi(this, "trigger", t, e)) return this;
				var n = this._events[t],
					r = this._events.all;
				return n && o(n, e), r && o(r, arguments), this
			},
			stopListening: function(e, n, r) {
				var i = this._listeningTo;
				if(!i) return this;
				var o = !n && !r;
				r || "object" != typeof n || (r = this), e && ((i = {})[e._listenId] = e);
				for(var s in i) e = i[s], e.off(n, r, this), (o || t.isEmptyObject(e._events)) && delete this._listeningTo[s];
				return this
			}
		},
		o = function(t, e) {
			var n, r = -1,
				i = t.length,
				o = e[0],
				s = e[1],
				a = e[2];
			switch(e.length) {
				case 0:
					for(; ++r < i;)(n = t[r]).callback.call(n.ctx);
					return;
				case 1:
					for(; ++r < i;)(n = t[r]).callback.call(n.ctx, o);
					return;
				case 2:
					for(; ++r < i;)(n = t[r]).callback.call(n.ctx, o, s);
					return;
				case 3:
					for(; ++r < i;)(n = t[r]).callback.call(n.ctx, o, s, a);
					return;
				default:
					for(; ++r < i;)(n = t[r]).callback.apply(n.ctx, e);
					return
			}
		},
		s = {
			listenTo: "on",
			listenToOnce: "once"
		};
	return t.each(s, function(t, e) {
		i[t] = function(t, r, i) {
			var o = this._listeningTo || (this._listeningTo = {}),
				s = t._listenId || (t._listenId = n("l"));
			return o[s] = t, i || "object" != typeof r || (i = this), t[e](r, i, this), this
		}
	}), i.bind = i.on, i.unbind = i.off, i
}), define("mvc/router/history", ["./events"], function(t) {
	var e = /^[#\/]|\s+$/g,
		n = /^\/+|\/+$/g,
		r = /#.*$/,
		i = function() {
			this.handlers = [], "undefined" != typeof window && (this.location = window.location, this.history = window.history)
		};
	return i.started = !1, $.extend(i.prototype, t, {
		atRoot: function() {
			return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
		},
		getPath: function() {
			var t = decodeURI(this.location.pathname + this.location.search),
				e = this.root.slice(0, -1);
			return t.indexOf(e) || (t = t.slice(e.length)), t.slice(1)
		},
		getFragment: function(t) {
			return null == t && (this._hasPushState || !this._hasPushState) && (t = this.getPath()), t.replace(e, "")
		},
		start: function(t) {
			if(i.started) throw new Error("MOGU.history has already been started");
			i.started = !0, this.options = $.extend({
				root: "/"
			}, this.options, t), this.root = this.options.root, this._wantsPushState = !!this.options.pushState, this._hasPushState = this._testPushState();
			var e = this.getFragment();
			return document.documentMode, this.root = ("/" + this.root + "/").replace(n, "/"), this._hasPushState && $(window).on("popstate", this.checkUrl.bind(this)), this.fragment = e, this.location, this.options.silent ? void 0 : this.loadUrl()
		},
		stop: function() {
			$(window).off("popstate", this.checkUrl.bind(this)), i.started = !1
		},
		route: function(t, e) {
			this.handlers.unshift({
				route: t,
				callback: e
			})
		},
		checkUrl: function() {
			var t = this.getFragment();
			return t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))), t === this.fragment ? !1 : (this.iframe && this.navigate(t), void this.loadUrl())
		},
		loadUrl: function(t) {
			return t = this.fragment = this.getFragment(t), this.handlers.some(function(e) {
				return e.route.test(t) ? (e.callback(t), !0) : void 0
			})
		},
		navigate: function(t, e) {
			if(!i.started) return !1;
			void 0 === e && (e = !0), e && e !== !0 || (e = {
				trigger: !!e
			});
			var n = this.root + (t = this.getFragment(t || ""));
			return t = t.replace(r, ""), this.fragment !== t ? (this.fragment = t, "" === t && "/" !== n && (n = n.slice(0, -1)), this._hasPushState ? (this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, n), e.trigger ? this.loadUrl(t) : void 0) : this.location.assign(n)) : void 0
		},
		_testPushState: function() {
			var t = !!(this.options.pushState && this.history && this.history.pushState);
			if(t) {
				var e = document.URL;
				return this.history.replaceState({}, document.title, "pushState"), e !== document.location.href ? (this.history.replaceState({}, document.title, e), !0) : !1
			}
			return !1
		}
	}), i
}), define("mvc/router/router", ["./history", "./events", "$"], function(t, e, n) {
	var r = {};
	r.history = new t, n.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t, e) {
		r["is" + e] = function(t) {
			return toString.call(t) == "[object " + e + "]"
		}
	});
	var i = function(t) {
			t || (t = {}), n.extend(this, t), this._bindRoutes(), this.initialize.apply(this, arguments), r.history.start(t.start)
		},
		o = /\((.*?)\)/g,
		s = /(\(\?)?:\w+/g,
		a = /\*\w+/g,
		u = /[\-{}\[\]+?.,\\\^$|#\s]/g;
	return n.extend(i.prototype, e, {
		initialize: function() {},
		route: function(t, e, n) {
			r.isRegExp(t) || (t = this._routeToRegExp(t)), r.isFunction(e) && (n = e, e = ""), n || (n = this.routeFn[e]);
			var i = this;
			return r.history.route(t, function(o) {
				var s = i._extractParameters(t, o);
				i.execute(n, s), i.trigger.apply(i, ["route:" + e].concat(s)), i.trigger("route", e, s), r.history.trigger("route", i, e, s)
			}), this
		},
		execute: function(t, e) {
			t && t.apply(this, e)
		},
		navigate: function(t, e) {
			return r.history.navigate(t, e), this
		},
		_bindRoutes: function() {
			if(this.routes)
				for(var t, e = Object.keys(this.routes); null != (t = e.pop());) this.route(t, this.routes[t])
		},
		_routeToRegExp: function(t) {
			return t = t.replace(u, "\\$&").replace(o, "(?:$1)?").replace(s, function(t, e) {
				return e ? t : "([^/?]+)"
			}).replace(a, "([^?]*?)"), new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
		},
		_extractParameters: function(t, e) {
			var n = t.exec(e).slice(1);
			return n.map(function(t, e) {
				return e === n.length - 1 ? t || null : t ? decodeURIComponent(t) : null
			})
		}
	}), i
}), define("mvc/base", ["../core/core", "./modules/module", "./router/router"], function(t, e, n) {
	$.extend(MoGu, {
		module: e,
		router: n
	})
}), require(["./core/core", "./core/error", "./fn/fn", "./ui/ui", "./util/util", "./mvc/base"]), define("base/MoGu", ["core/core", "core/error", "fn/fn", "ui/ui", "util/util"], function() {
	return window.MoGu
});
! function(t) {
	t.MWP = function() {
		"use strict";

		function t(t, e) {
			function n() {
				this.constructor = t
			}
			S(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
		}

		function e(t, e) {
			void 0 === e && (e = !0);
			var n = t.split(O),
				r = e ? decodeURIComponent : E;
			return n.reduce(function(t, e) {
				e = e.replace(T, "%20");
				var n, o, i = e.indexOf("=");
				return 0 > i ? (n = e, o = "") : (n = e.slice(0, i), o = e.slice(i + 1)), n = r(n), o = r(o), j.call(t, n) ? Array.isArray(t[n]) ? t[n].push(o) : t[n] = [t[n], o] : t[n] = o, t
			}, {})
		}

		function n(t, e) {
			if(void 0 === e && (e = !0), !t) return "";
			var n = e ? encodeURIComponent : E;
			return Object.keys(t).map(function(e) {
				var r = t[e];
				return e = n(e), Array.isArray(r) ? r.map(function(t, r) {
					return e + "[" + r + "]=" + n(t)
				}).join("&") : e + "=" + n(r)
			}).join("&")
		}

		function r(t) {
			return "undefined" != typeof FormData && t instanceof FormData
		}

		function o(t) {
			var e = document.head || document.getElementsByTagName("head")[0];
			e.appendChild(t)
		}

		function i(t, e, n) {
			function r() {
				i.parentNode && i.parentNode.removeChild(i);
				try {
					delete window[s]
				} catch(t) {
					window[s] = void 0
				}
			}
			var i, s = e.jsonpCallback || "httpCb" + h();
			window[s] = function(t) {
				r(), n(null, t), n = null
			}, t = c(t, Object.assign({}, e.data, {
				callback: s,
				_: Date.now()
			})), i = document.createElement("script"), i.src = t, i.type = "text/javascript", i.async = !0;
			var a = function(t) {
				(t && "error" === t.type || null !== n) && (r(), n(new Error(M)))
			};
			D && "onreadystatechange" in i ? i.onreadystatechange = function() {
				"complete" === i.readyState && (i.onreadystatechange = null, o(i), a({
					type: "load "
				}));
				var t = i.readyState;
				try {
					i.children
				} catch(e) {}
				"loaded" === t && "loading" === i.readyState && (i.onreadystatechange = null, a({
					type: "error"
				}))
			} : (i.onload = i.onerror = a, o(i))
		}

		function s(t, e, o) {
			var i = e.data,
				s = new XMLHttpRequest;
			"GET" === e.method && (t = c(t, i), i = null), s.open(e.method, t), s.withCredentials = "omit" !== e.credentials, s.onreadystatechange = function() {
				if(s.readyState === XMLHttpRequest.DONE)
					if(s.onreadystatechange = function() {}, 200 === s.status) try {
						var t;
						t = "json" === e.dataType ? "" === s.responseText ? null : JSON.parse(s.responseText) : s.responseText, o(null, t)
					} catch(n) {
						o(n)
					} else o(new Error(M))
			};
			try {
				var a = e.headers;
				r(i) && delete a["content-type"], Object.keys(a).forEach(function(t) {
					s.setRequestHeader(t, a[t])
				}), i ? r(i) ? s.send(i) : a["content-type"].indexOf(R.json) >= 0 ? s.send(JSON.stringify(i)) : s.send(n(i)) : s.send(null)
			} catch(u) {
				o(u)
			}
		}

		function a(t, e, o) {
			var i = e.data,
				s = {
					method: e.method,
					headers: e.headers,
					credentials: e.credentials
				};
			"GET" === e.method ? t = c(t, i) : i && (r(i) ? (s.body = i, delete s.headers["content-type"]) : e.headers["content-type"].indexOf(R.json) >= 0 ? s.body = JSON.stringify(i) : s.body = n(i)), u(t) || (s.mode = "cors"), k(t, s).then(function(t) {
				switch(e.dataType) {
					case "json":
						return t.json();
					case "text":
					default:
						return t.text()
				}
			}).then(function(t) {
				o(null, t)
			})["catch"](function() {
				o(new Error(M))
			})
		}

		function u(t) {
			try {
				var e = document.createElement("a");
				return e.href = t, e.href = e.href, e.protocol === x.protocol && e.hostname === x.hostname && e.port === x.port
			} catch(n) {
				return !0
			}
		}

		function c(t, r) {
			if(r) {
				var o = t.split("?"),
					i = o[0],
					s = o[1];
				s && (r = Object.assign(e(s), r));
				var a = n(r);
				a && (t = i + "?" + a)
			}
			return t
		}

		function h() {
			return String(Date.now()) + String((90 * Math.random() | 0) + 10)
		}

		function p(t, e, n) {
			n = n || {}, null === e && (e = "", n.expires = -1);
			var r = "";
			if(n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) {
				var o;
				"number" == typeof n.expires ? (o = new Date, o.setTime(o.getTime() + 864e5 * n.expires)) : o = n.expires, r = "; expires=" + o.toUTCString()
			}
			var i = n.path ? "; path=" + n.path : "",
				s = n.secure ? "; secure" : "",
				a = "";
			n.domain ? a = "; domain=" + n.domain : (a = document.domain.toString().split("."), a = "; domain=." + a[1] + "." + a[2]), document.cookie = [t, "=", encodeURIComponent(e), r, i, a, s].join("")
		}

		function f(t) {
			var e = document.cookie.match(new RegExp("(^| )" + t + "=([^;]*)(;|$)"));
			return null !== e ? decodeURIComponent(e[2]) : ""
		}

		function d() {
			return ++window._mwpJsonpID || (window._mwpJsonpID = 1)
		}

		function l(t) {
			if(t.ret === H.Success) return t.data;
			throw Object.assign(Object.create(new Error(t.msg || C)), {
				code: t.ret,
				payload: t
			})
		}

		function m() {
			var t = window.M;
			if(t) {
				if(t.isDev("test")) return I.Develop;
				if(t.isDev("local") || t.isDev("pre")) return I.PreRelease
			}
		}

		function y(t) {
			if(!t) return Promise.resolve(!1);
			var e = window.hdp;
			try {
				if(e && e.isApp()) return e.getObj("mgj").then(function(t) {
					return t.mwpEnable
				}, function() {
					return Promise.resolve(!1)
				});
				var n = navigator.userAgent.toLowerCase();
				return t.test(n) ? window.mgj ? Promise.resolve(window.mgj.mwpEnable === !0) : new Promise(function(t) {
					document.addEventListener("deviceready", function() {
						try {
							t(window.mgj.mwpEnable === !0)
						} catch(e) {
							t(!1)
						}
					}, !1)
				}) : Promise.resolve(!1)
			} catch(r) {
				return Promise.resolve(!1)
			}
		}

		function g(t) {
			return t && "function" == typeof t.then
		}

		function v(t, e) {
			return e = {
				exports: {}
			}, t(e, e.exports), e.exports
		}

		function w(t) {
			return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
		}

		function b(t) {
			return "function" == typeof t.readFloatLE && "function" == typeof t.slice && w(t.slice(0, 0))
		}

		function _(t) {
			return t ? "string" == typeof t ? t : JSON.stringify(t) : ""
		}
		var P, S = Object.setPrototypeOf || {
			__proto__: []
		}
		instanceof Array && function(t, e) {
			t.__proto__ = e
		} || function(t, e) {
			for(var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
		}, O = /&/, T = /\+/g, j = Object.prototype.hasOwnProperty, E = function(t) {
			return t
		}, k = window.fetch, x = window.location, R = {
			text: "text/plain",
			form: "application/x-www-form-urlencoded",
			json: "application/json"
		}, D = window.navigator.userAgent.indexOf("MSIE 8.0") >= 0, M = "\u7f51\u7edc\u9519\u8bef\uff0c\u8bf7\u7a0d\u5019\u518d\u8bd5", C = "\u670d\u52a1\u5668\u5f00\u5c0f\u5dee\u4e86\uff0c\u8bf7\u7a0d\u5019\u518d\u8bd5";
		! function(t) {
			t.MGJ = "mgj", t.MLS = "mls", t.XD = "xd"
		}(P || (P = {}));
		var A, I = {
				Develop: "DEVELOP",
				PreRelease: "PRE_RELEASE",
				Release: "RELEASE"
			},
			H = {
				Success: "SUCCESS",
				NeedHttps: "FAIL_SYS_NEED_HTTPS",
				TokenNeedRenew: "FAIL_SYS_TOKEN_NEED_RENEW",
				SessionInvalid: "FAIL_BIZ_SESSION_INVALID"
			},
			N = function() {
				try {
					var t = location.hostname;
					if(/(mogujie\.org|meili-inc\.com)$/.test(t)) return "nsh5"
				} catch(e) {}
				return "h5"
			}(),
			L = (A = {}, A[P.MGJ] = {
				Develop: "devapi.mogujie.com",
				PreRelease: "newpreapi.mogujie.com",
				Release: "api.mogujie.com"
			}, A[P.MLS] = {
				Develop: "devapi.meilishuo.com",
				PreRelease: "preapi.meilishuo.com",
				Release: "api.meilishuo.com"
			}, A[P.XD] = {
				Develop: "devapi.xiaodian.com",
				PreRelease: "preapi.xiaodian.com",
				Release: "api.xiaodian.com"
			}, A),
			W = "_mwp_h5_token",
			B = "__mgjuuid",
			J = function() {
				function t() {
					this.data = {}
				}
				return t.prototype.add = function(t, e, n) {
					return void 0 === n && (n = null), this.data[t + "." + e] = n, this
				}, t.prototype.toObject = function() {
					return this.data
				}, t
			}(),
			U = function() {
				function t(t) {
					this.callbacks = {}, this.Request = t
				}
				return t.prototype.addParameter = function(t, e, n) {
					return this.parameter || (this.parameter = new J), this.parameter.add(t, e, n), this
				}, t.prototype.request = function(t, e, n, r) {
					var o, i = this;
					return n instanceof J ? o = n.toObject() : (o = this.parameter ? this.parameter.toObject() : null, r || (r = n || {})), this.promise = this.Request.request(t, e, o, r).then(function(t) {
						return i.result = t, i.Request.filterResult(t)
					}).then(function(t) {
						var e = Object.keys(t).filter(function(t) {
							return t in i.callbacks
						}).map(function(e) {
							return i.callbacks[e](t[e])
						}).filter(g);
						return e.length > 0 ? i.Request.Promise.all(e).then(function() {
							return i.result
						}) : i.result
					}), this
				}, t.prototype.on = function(t, e) {
					return this.callbacks[t] || (this.callbacks[t] = e), this
				}, t.prototype.then = function(t, e) {
					return this.promise = this.promise.then(t, e), this
				}, t.prototype["catch"] = function(t) {
					return this.promise = this.promise["catch"](t), this
				}, t.Parameter = J, t
			}(),
			q = v(function(t) {
				! function() {
					var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
						n = {
							rotl: function(t, e) {
								return t << e | t >>> 32 - e
							},
							rotr: function(t, e) {
								return t << 32 - e | t >>> e
							},
							endian: function(t) {
								if(t.constructor == Number) return 16711935 & n.rotl(t, 8) | 4278255360 & n.rotl(t, 24);
								for(var e = 0; e < t.length; e++) t[e] = n.endian(t[e]);
								return t
							},
							randomBytes: function(t) {
								for(var e = []; t > 0; t--) e.push(Math.floor(256 * Math.random()));
								return e
							},
							bytesToWords: function(t) {
								for(var e = [], n = 0, r = 0; n < t.length; n++, r += 8) e[r >>> 5] |= t[n] << 24 - r % 32;
								return e
							},
							wordsToBytes: function(t) {
								for(var e = [], n = 0; n < 32 * t.length; n += 8) e.push(t[n >>> 5] >>> 24 - n % 32 & 255);
								return e
							},
							bytesToHex: function(t) {
								for(var e = [], n = 0; n < t.length; n++) e.push((t[n] >>> 4).toString(16)), e.push((15 & t[n]).toString(16));
								return e.join("")
							},
							hexToBytes: function(t) {
								for(var e = [], n = 0; n < t.length; n += 2) e.push(parseInt(t.substr(n, 2), 16));
								return e
							},
							bytesToBase64: function(t) {
								for(var n = [], r = 0; r < t.length; r += 3)
									for(var o = t[r] << 16 | t[r + 1] << 8 | t[r + 2], i = 0; 4 > i; i++) 8 * r + 6 * i <= 8 * t.length ? n.push(e.charAt(o >>> 6 * (3 - i) & 63)) : n.push("=");
								return n.join("")
							},
							base64ToBytes: function(t) {
								t = t.replace(/[^A-Z0-9+\/]/gi, "");
								for(var n = [], r = 0, o = 0; r < t.length; o = ++r % 4) 0 != o && n.push((e.indexOf(t.charAt(r - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | e.indexOf(t.charAt(r)) >>> 6 - 2 * o);
								return n
							}
						};
					t.exports = n
				}()
			}),
			G = {
				utf8: {
					stringToBytes: function(t) {
						return G.bin.stringToBytes(unescape(encodeURIComponent(t)))
					},
					bytesToString: function(t) {
						return decodeURIComponent(escape(G.bin.bytesToString(t)))
					}
				},
				bin: {
					stringToBytes: function(t) {
						for(var e = [], n = 0; n < t.length; n++) e.push(255 & t.charCodeAt(n));
						return e
					},
					bytesToString: function(t) {
						for(var e = [], n = 0; n < t.length; n++) e.push(String.fromCharCode(t[n]));
						return e.join("")
					}
				}
			},
			X = G,
			K = function(t) {
				return null != t && (w(t) || b(t) || !!t._isBuffer)
			},
			F = v(function(t) {
				! function() {
					var e = q,
						n = X.utf8,
						r = K,
						o = X.bin,
						i = function(t, s) {
							t.constructor == String ? t = s && "binary" === s.encoding ? o.stringToBytes(t) : n.stringToBytes(t) : r(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || (t = t.toString());
							for(var a = e.bytesToWords(t), u = 8 * t.length, c = 1732584193, h = -271733879, p = -1732584194, f = 271733878, d = 0; d < a.length; d++) a[d] = 16711935 & (a[d] << 8 | a[d] >>> 24) | 4278255360 & (a[d] << 24 | a[d] >>> 8);
							a[u >>> 5] |= 128 << u % 32, a[(u + 64 >>> 9 << 4) + 14] = u;
							for(var l = i._ff, m = i._gg, y = i._hh, g = i._ii, d = 0; d < a.length; d += 16) {
								var v = c,
									w = h,
									b = p,
									_ = f;
								c = l(c, h, p, f, a[d + 0], 7, -680876936), f = l(f, c, h, p, a[d + 1], 12, -389564586), p = l(p, f, c, h, a[d + 2], 17, 606105819), h = l(h, p, f, c, a[d + 3], 22, -1044525330), c = l(c, h, p, f, a[d + 4], 7, -176418897), f = l(f, c, h, p, a[d + 5], 12, 1200080426), p = l(p, f, c, h, a[d + 6], 17, -1473231341), h = l(h, p, f, c, a[d + 7], 22, -45705983), c = l(c, h, p, f, a[d + 8], 7, 1770035416), f = l(f, c, h, p, a[d + 9], 12, -1958414417), p = l(p, f, c, h, a[d + 10], 17, -42063), h = l(h, p, f, c, a[d + 11], 22, -1990404162), c = l(c, h, p, f, a[d + 12], 7, 1804603682), f = l(f, c, h, p, a[d + 13], 12, -40341101), p = l(p, f, c, h, a[d + 14], 17, -1502002290), h = l(h, p, f, c, a[d + 15], 22, 1236535329), c = m(c, h, p, f, a[d + 1], 5, -165796510), f = m(f, c, h, p, a[d + 6], 9, -1069501632), p = m(p, f, c, h, a[d + 11], 14, 643717713), h = m(h, p, f, c, a[d + 0], 20, -373897302), c = m(c, h, p, f, a[d + 5], 5, -701558691), f = m(f, c, h, p, a[d + 10], 9, 38016083), p = m(p, f, c, h, a[d + 15], 14, -660478335), h = m(h, p, f, c, a[d + 4], 20, -405537848), c = m(c, h, p, f, a[d + 9], 5, 568446438), f = m(f, c, h, p, a[d + 14], 9, -1019803690), p = m(p, f, c, h, a[d + 3], 14, -187363961), h = m(h, p, f, c, a[d + 8], 20, 1163531501), c = m(c, h, p, f, a[d + 13], 5, -1444681467), f = m(f, c, h, p, a[d + 2], 9, -51403784), p = m(p, f, c, h, a[d + 7], 14, 1735328473), h = m(h, p, f, c, a[d + 12], 20, -1926607734), c = y(c, h, p, f, a[d + 5], 4, -378558), f = y(f, c, h, p, a[d + 8], 11, -2022574463), p = y(p, f, c, h, a[d + 11], 16, 1839030562), h = y(h, p, f, c, a[d + 14], 23, -35309556), c = y(c, h, p, f, a[d + 1], 4, -1530992060), f = y(f, c, h, p, a[d + 4], 11, 1272893353), p = y(p, f, c, h, a[d + 7], 16, -155497632), h = y(h, p, f, c, a[d + 10], 23, -1094730640), c = y(c, h, p, f, a[d + 13], 4, 681279174), f = y(f, c, h, p, a[d + 0], 11, -358537222), p = y(p, f, c, h, a[d + 3], 16, -722521979), h = y(h, p, f, c, a[d + 6], 23, 76029189), c = y(c, h, p, f, a[d + 9], 4, -640364487), f = y(f, c, h, p, a[d + 12], 11, -421815835), p = y(p, f, c, h, a[d + 15], 16, 530742520), h = y(h, p, f, c, a[d + 2], 23, -995338651), c = g(c, h, p, f, a[d + 0], 6, -198630844), f = g(f, c, h, p, a[d + 7], 10, 1126891415), p = g(p, f, c, h, a[d + 14], 15, -1416354905), h = g(h, p, f, c, a[d + 5], 21, -57434055), c = g(c, h, p, f, a[d + 12], 6, 1700485571), f = g(f, c, h, p, a[d + 3], 10, -1894986606), p = g(p, f, c, h, a[d + 10], 15, -1051523), h = g(h, p, f, c, a[d + 1], 21, -2054922799), c = g(c, h, p, f, a[d + 8], 6, 1873313359), f = g(f, c, h, p, a[d + 15], 10, -30611744), p = g(p, f, c, h, a[d + 6], 15, -1560198380), h = g(h, p, f, c, a[d + 13], 21, 1309151649), c = g(c, h, p, f, a[d + 4], 6, -145523070), f = g(f, c, h, p, a[d + 11], 10, -1120210379), p = g(p, f, c, h, a[d + 2], 15, 718787259), h = g(h, p, f, c, a[d + 9], 21, -343485551), c = c + v >>> 0, h = h + w >>> 0, p = p + b >>> 0, f = f + _ >>> 0
							}
							return e.endian([c, h, p, f])
						};
					i._ff = function(t, e, n, r, o, i, s) {
						var a = t + (e & n | ~e & r) + (o >>> 0) + s;
						return(a << i | a >>> 32 - i) + e
					}, i._gg = function(t, e, n, r, o, i, s) {
						var a = t + (e & r | n & ~r) + (o >>> 0) + s;
						return(a << i | a >>> 32 - i) + e
					}, i._hh = function(t, e, n, r, o, i, s) {
						var a = t + (e ^ n ^ r) + (o >>> 0) + s;
						return(a << i | a >>> 32 - i) + e
					}, i._ii = function(t, e, n, r, o, i, s) {
						var a = t + (n ^ (e | ~r)) + (o >>> 0) + s;
						return(a << i | a >>> 32 - i) + e
					}, i._blocksize = 16, i._digestsize = 16, t.exports = function(t, n) {
						if(void 0 === t || null === t) throw new Error("Illegal argument " + t);
						var r = e.wordsToBytes(i(t, n));
						return n && n.asBytes ? r : n && n.asString ? o.bytesToString(r) : e.bytesToHex(r)
					}
				}()
			}),
			Y = "mw-ttid",
			Q = "mw-t",
			V = "data",
			$ = "mw-appkey",
			z = "mw-sign",
			Z = "mw-did",
			tt = "mw-uid",
			et = "mw-cmd-v",
			nt = "mw-uuid",
			rt = ["mw-pv", "mw-sid", Z];
		"function" != typeof Date.now && (Date.now = function() {
			return(new Date).getTime()
		});
		var ot = function() {
			function t() {
				this._params = {}, this._omitted = {}
			}
			return t.prototype.add = function(t, e) {
				return rt.indexOf(t) >= 0 ? (this._omitted[t] = e, this) : ((e || "data" === t) && (this._params[t] = e), this)
			}, t.prototype.sign = function(t, e, n, r) {
				var o = this._params,
					i = Object.keys(o);
				return i.sort(), F(i.map(function(t) {
					return o[t]
				}).concat([t, e, F(n), r]).join("&"))
			}, t.prototype.getSignedParams = function(t) {
				var e = this,
					n = t.constructor;
				this.add($, n.AppKey).add(Q, String(Date.now())).add(nt, t.getUUID()).add(Y, n.TTID);
				var r = t.getMWPCookieHeader();
				Object.keys(r).forEach(function(t) {
					t.startsWith("mw-cookie-") && e.add(t, r[t])
				});
				var o = _(t.data);
				return this.add(z, this.sign(t.api, t.version, o, t.getToken())).add(V, o), Object.assign({}, this._omitted, this._params)
			}, t.getSignedParams = function(e) {
				return(new t).getSignedParams(e)
			}, t
		}();
		! function(t) {
			t.Key = {
				KEY_DEVICE_ID: Z,
				KEY_UID: tt,
				KEY_CMD_V: et
			}
		}(ot || (ot = {}));
		var it, st = ot,
			at = function() {
				function t(t) {
					var e = this;
					this.callback = t, this.promise = new Promise(function(t, n) {
						e.resolve = t, e.reject = n
					})
				}
				return t.prototype.exec = function() {
					return this.callback().then(this.resolve, this.reject)
				}, t.prototype.then = function(t, e) {
					return this.promise = this.promise.then(t, e)
				}, t.prototype["catch"] = function(t) {
					return this.promise = this.promise["catch"](t)
				}, t
			}(),
			ut = function() {
				function t() {
					this.tasks = []
				}
				return t.createQueue = function() {
					var t = new this;
					return this.instances.push(t), t
				}, t.getQueue = function() {
					return this.instances[0]
				}, t.prototype.add = function(t) {
					try {
						var e = new at(t);
						return this.tasks.push(e), e
					} catch(n) {
						return null
					}
				}, t.prototype.exec = function() {
					var e = this;
					if(t.instances = t.instances.filter(function(t) {
							return e !== t
						}), null === this.tasks || 0 === this.tasks.length) return Promise.resolve();
					var n = function() {
						return e.tasks = null
					};
					return Promise.all(this.tasks.map(function(t) {
						return t.exec()
					})).then(n, n)
				}, t.instances = [], t
			}(),
			ct = function() {
				function t(t, e, n) {
					void 0 === n && (n = {}), this.retries = 1, this.api = t, this.version = e;
					var r = this.constructor.defaultOptions;
					this.options = Object.assign({}, r, n), this.options.headers = Object.assign({}, r.headers, n.headers)
				}
				return t.getContext = function(t, e, n) {
					return new this(t, e, n)
				}, t.request = function(t, e, n, r) {
					return this.getContext(t, e, r).request(n)
				}, t.setHeader = function(t, e) {
					var n = this.defaultOptions;
					n.headers || (n.headers = {}), n.headers[t] = e
				}, t.getDSL = function() {
					return new U(this)
				}, t.getDSLParameter = function() {
					return new U.Parameter
				}, t.setGlobalEnv = function(t) {
					t && (this.defaultOptions.env = t)
				}, t.getGlobalEnv = function() {
					return this.defaultOptions.env
				}, t.getMWPCookies = function(t, e) {
					return this.MWPCookieJar.getCookies(this.getContext(t, e))
				}, t.prototype.shouldRetry = function() {
					return this.retries < 5
				}, t.prototype.getToken = function() {
					throw new Error("Method not implemented.")
				}, t.prototype.getUUID = function() {
					return ""
				}, t.prototype.getParams = function() {
					return st.getSignedParams(this)
				}, t.prototype.getHostname = function() {
					var t = this.constructor.Hostname;
					switch(this.options.env) {
						case I.Develop:
							return t.Develop;
						case I.PreRelease:
							return t.PreRelease;
						default:
							return t.Release
					}
				}, t.prototype.getOrigin = function() {
					var t = this.options,
						e = t.useHTTPS ? "https:" : "http:";
					return e + "//" + this.getHostname()
				}, t.prototype.getURL = function() {
					return this.getOrigin() + "/" + N + "/" + this.api + "/" + this.version + "/"
				}, t.prototype.getHeaders = function() {
					return Object.assign({}, this.options.headers)
				}, t.prototype.getMWPCookies = function() {
					return this.constructor.MWPCookieJar.getCookies(this)
				}, t.prototype.getMWPCookieHeader = function() {
					var t = {},
						e = this.getMWPCookies();
					return Object.keys(e).length > 0 && (t["mw-cookie-" + this.api.replace(/\./g, "") + this.version] = Object.keys(e).map(function(t) {
						return t + "=" + e[t]
					}).join("; ") + ";"), t
				}, t.prototype.request = function(t) {
					return this.data = t, this.getToken() ? this._fetch() : this.enqueue()
				}, t.prototype.fetch = function(t, e) {
					e(new Error("Please implement `fetch` method in your own subclass"))
				}, t.prototype.handleResponse = function(t) {
					switch(t.ret) {
						case H.TokenNeedRenew:
							return this._fetch();
						case H.NeedHttps:
							return this.options.useHTTPS = !0, this._fetch();
						default:
							return this.constructor.Promise.resolve(t)
					}
				}, t.prototype._fetch = function() {
					var t = this;
					return new this.constructor.Promise(function(e, n) {
						return t.shouldRetry() ? (t.retries++, void t.fetch(e, n)) : (console.warn("Have retried too much times"), n(new Error(C)))
					}).then(function(e) {
						return t.handleResponse(e)
					})
				}, t.prototype.enqueue = function() {
					var t = ut.getQueue();
					if(t) {
						var e = t.add(this._fetch.bind(this));
						return null === e ? this._fetch() : e
					}
					t = ut.createQueue();
					var n = this._fetch(),
						r = t.exec.bind(t);
					return n.then(r, r), n
				}, t.Promise = Promise, t.Env = I, t.Hostname = L[P.MGJ], t.Code = H, t.defaultOptions = {
					useHTTPS: !1,
					env: I.Release
				}, t.v = "3.1.3", t.filterResult = l, t
			}(),
			ht = /iPhone|iPad|iPod|Android|BlackBerry|IEMobile|Opera Mini/i;
		! function(t) {
			t.PC = "pc", t.H5 = "h5"
		}(it || (it = {}));
		var pt, ft, dt, lt = (pt = {}, pt[P.MGJ] = /\.mogujie\.com$/, pt[P.MLS] = /\.meilishuo\.com$/, pt[P.XD] = /\.xiaodian\.com$/, pt),
			mt = (ft = {}, ft[P.MGJ] = /mogujie4/, ft[P.XD] = /xiaodian4/, ft),
			yt = (dt = {}, dt[P.MGJ] = "100028", dt[P.MLS] = "100066", dt[P.XD] = "100028", dt),
			gt = function() {
				function t(e) {
					void 0 === e && (e = location.hostname), this.userAgent = navigator.userAgent.toLowerCase(), this.version = "1.0", this.type = t.getType(e), this.platform = t.getPlatform(this.userAgent)
				}
				return t.getType = function(t) {
					var e = P.MGJ;
					return Object.keys(lt).some(function(n) {
						return lt[n].test(t) ? (e = n, !0) : !1
					}), e
				}, t.getPlatform = function(e) {
					return t.isMobile(e) ? it.H5 : it.PC
				}, t.isMobile = function(t) {
					return ht.test(t)
				}, t.prototype.getHostname = function() {
					return L[this.type]
				}, t.prototype.getUserAgentTester = function() {
					return mt[this.type]
				}, t.prototype.getTTID = function() {
					return "NMMain@" + [this.type, this.platform, this.version].join("_")
				}, t.prototype.getAppKey = function() {
					return yt[this.type]
				}, t
			}(),
			vt = function() {},
			wt = function(e) {
				function r() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.retriesOnSignError = !1, t
				}
				return t(r, e), r.config = function(t) {
					void 0 === t && (t = {});
					var e = this.adaptor;
					["type", "platform", "version"].forEach(function(n) {
						t[n] && (e[n] = t[n])
					}), this.AppKey = e.getAppKey(), this.TTID = e.getTTID(), this.Hostname = e.getHostname(), this.useNativeMWP = y(e.getUserAgentTester()), this.setGlobalEnv(t.env)
				}, r.prototype.request = function(t) {
					var n = this;
					return r.useNativeMWP.then(function(r) {
						return r ? (n.data = t, n._fetch()) : e.prototype.request.call(n, t)
					})
				}, r.prototype.getToken = function() {
					return f(W)
				}, r.prototype.getUUID = function() {
					return f(B)
				}, r.prototype.getParams = function() {
					var t = new st,
						e = this.options.headers;
					return e && Object.keys(e).forEach(function(n) {
						n.startsWith("mw-") && t.add(n, e[n])
					}), t.getSignedParams(this)
				}, r.prototype.fetch = function(t, e) {
					var n = this;
					return this.options.forceJSONP ? void this._fetchByWeb(t, e) : void r.useNativeMWP.then(function(r) {
						r ? n._fetchByNative(t, e) : n._fetchByWeb(t, e)
					})
				}, r.prototype.getMWPCookieHeader = function() {
					return {}
				}, r.prototype.getMWPCookies = function() {
					return {}
				}, r.prototype._fetchByNative = function(t, e) {
					"number" == typeof this.version && (this.version = String(this.version)), window.mgj.ajax.mwp(t, e, this.api, this.version, this.data, "get", !this.options.useHTTPS)
				}, r.prototype._fetchByWeb = function(t, e) {
					var n = function(n, r) {
						return n ? void e(n) : void t(r)
					};
					this.options.cors === !0 ? this._fetchWithCORS(n) : this._fetchWithJSONP(n)
				}, r.prototype._fetchWithJSONP = function(t) {
					var e = this.getURL(),
						r = this.getParams(),
						o = "mwpCb" + d();
					this.constructor.adaptor.userAgent.indexOf("xcore") > -1 ? (window[o] = function(e) {
						t(null, e)
					}, r.callback = o, r._ = Date.now(), loader.script(e + (~e.indexOf("?") ? "&" : "?") + n(r), vt, t)) : i(e, {
						data: r,
						jsonpCallback: o
					}, t)
				}, r.prototype._fetchWithCORS = function(t) {
					var e = this.getURL(),
						n = this.getParams(),
						r = {
							method: this.options.method,
							data: n,
							dataType: "json",
							credentials: "include",
							headers: {
								"content-type": R.form
							}
						};
					"function" == typeof fetch ? a(e, r, t) : XMLHttpRequest ? s(e, r, t) : this._fetchWithJSONP(t)
				}, r.prototype.handleResponse = function(t) {
					return "FAIL_SYS_SIGN_ERROR" !== t.ret || this.retriesOnSignError ? e.prototype.handleResponse.call(this, t) : (this.retriesOnSignError = !0, ut.getQueue() || p("_mwp_h5_token", null, {
						domain: ".meilishuo.com",
						path: "/"
					}), this.enqueue())
				}, r.adaptor = new gt, r.Platform = {
					PC: it.PC,
					H5: it.H5
				}, r.Type = {
					MGJ: P.MGJ,
					MLS: P.MLS,
					XD: P.XD
				}, r.defaultOptions = Object.assign({}, ct.defaultOptions, {
					useHTTPS: "https:" === location.protocol,
					method: "GET"
				}), r
			}(ct);
		return wt.config(), wt.setGlobalEnv(m()), wt
	}()
}(this.M || this.MoGu || this);