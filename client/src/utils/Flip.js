!(function (t, e) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = e(require("react")))
        : "function" == typeof define && define.amd
        ? define(["react"], e)
        : "object" == typeof exports
        ? (exports.ReactFlipPage = e(require("react")))
        : (t.ReactFlipPage = e(t.react));
})(window, function (t) {
    return (function (t) {
        var e = {};
        function n(o) {
            if (e[o]) return e[o].exports;
            var r = (e[o] = { i: o, l: !1, exports: {} });
            return t[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
        }
        return (
            (n.m = t),
            (n.c = e),
            (n.d = function (t, e, o) {
                n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
            }),
            (n.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (n.t = function (t, e) {
                if ((1 & e && (t = n(t)), 8 & e)) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var o = Object.create(null);
                if ((n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                    for (var r in t)
                        n.d(
                            o,
                            r,
                            function (e) {
                                return t[e];
                            }.bind(null, r)
                        );
                return o;
            }),
            (n.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                              return t.default;
                          }
                        : function () {
                              return t;
                          };
                return n.d(e, "a", e), e;
            }),
            (n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.p = ""),
            n((n.s = 10))
        );
    })([
        function (e, n) {
            e.exports = t;
        },
        function (t, e, n) {
            t.exports = n(2)();
        },
        function (t, e, n) {
            "use strict";
            var o = n(3);
            function r() {}
            function i() {}
            (i.resetWarningCache = r),
                (t.exports = function () {
                    function t(t, e, n, r, i, a) {
                        if (a !== o) {
                            var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw ((s.name = "Invariant Violation"), s);
                        }
                    }
                    function e() {
                        return t;
                    }
                    t.isRequired = t;
                    var n = {
                        array: t,
                        bool: t,
                        func: t,
                        number: t,
                        object: t,
                        string: t,
                        symbol: t,
                        any: t,
                        arrayOf: e,
                        element: t,
                        elementType: t,
                        instanceOf: e,
                        node: t,
                        objectOf: e,
                        oneOf: e,
                        oneOfType: e,
                        shape: e,
                        exact: e,
                        checkPropTypes: i,
                        resetWarningCache: r,
                    };
                    return (n.PropTypes = n), n;
                });
        },
        function (t, e, n) {
            "use strict";
            t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        },
        function (t, e, n) {
            var o = n(5),
                r = n(6);
            "string" == typeof (r = r.__esModule ? r.default : r) && (r = [[t.i, r, ""]]);
            var i = { insert: "head", singleton: !1 };
            o(r, i);
            t.exports = r.locals || {};
        },
        function (t, e, n) {
            "use strict";
            var o,
                r = function () {
                    return void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o;
                },
                i = (function () {
                    var t = {};
                    return function (e) {
                        if (void 0 === t[e]) {
                            var n = document.querySelector(e);
                            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                                try {
                                    n = n.contentDocument.head;
                                } catch (t) {
                                    n = null;
                                }
                            t[e] = n;
                        }
                        return t[e];
                    };
                })(),
                a = [];
            function s(t) {
                for (var e = -1, n = 0; n < a.length; n++)
                    if (a[n].identifier === t) {
                        e = n;
                        break;
                    }
                return e;
            }
            function c(t, e) {
                for (var n = {}, o = [], r = 0; r < t.length; r++) {
                    var i = t[r],
                        c = e.base ? i[0] + e.base : i[0],
                        u = n[c] || 0,
                        l = "".concat(c, " ").concat(u);
                    n[c] = u + 1;
                    var p = s(l),
                        f = { css: i[1], media: i[2], sourceMap: i[3] };
                    -1 !== p ? (a[p].references++, a[p].updater(f)) : a.push({ identifier: l, updater: v(f, e), references: 1 }), o.push(l);
                }
                return o;
            }
            function u(t) {
                var e = document.createElement("style"),
                    o = t.attributes || {};
                if (void 0 === o.nonce) {
                    var r = n.nc;
                    r && (o.nonce = r);
                }
                if (
                    (Object.keys(o).forEach(function (t) {
                        e.setAttribute(t, o[t]);
                    }),
                    "function" == typeof t.insert)
                )
                    t.insert(e);
                else {
                    var a = i(t.insert || "head");
                    if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    a.appendChild(e);
                }
                return e;
            }
            var l,
                p =
                    ((l = []),
                    function (t, e) {
                        return (l[t] = e), l.filter(Boolean).join("\n");
                    });
            function f(t, e, n, o) {
                var r = n ? "" : o.media ? "@media ".concat(o.media, " {").concat(o.css, "}") : o.css;
                if (t.styleSheet) t.styleSheet.cssText = p(e, r);
                else {
                    var i = document.createTextNode(r),
                        a = t.childNodes;
                    a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
                }
            }
            function h(t, e, n) {
                var o = n.css,
                    r = n.media,
                    i = n.sourceMap;
                if (
                    (r ? t.setAttribute("media", r) : t.removeAttribute("media"), i && btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), t.styleSheet)
                )
                    t.styleSheet.cssText = o;
                else {
                    for (; t.firstChild; ) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(o));
                }
            }
            var d = null,
                g = 0;
            function v(t, e) {
                var n, o, r;
                if (e.singleton) {
                    var i = g++;
                    (n = d || (d = u(e))), (o = f.bind(null, n, i, !1)), (r = f.bind(null, n, i, !0));
                } else
                    (n = u(e)),
                        (o = h.bind(null, n, e)),
                        (r = function () {
                            !(function (t) {
                                if (null === t.parentNode) return !1;
                                t.parentNode.removeChild(t);
                            })(n);
                        });
                return (
                    o(t),
                    function (e) {
                        if (e) {
                            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                            o((t = e));
                        } else r();
                    }
                );
            }
            t.exports = function (t, e) {
                (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = r());
                var n = c((t = t || []), e);
                return function (t) {
                    if (((t = t || []), "[object Array]" === Object.prototype.toString.call(t))) {
                        for (var o = 0; o < n.length; o++) {
                            var r = s(n[o]);
                            a[r].references--;
                        }
                        for (var i = c(t, e), u = 0; u < n.length; u++) {
                            var l = s(n[u]);
                            0 === a[l].references && (a[l].updater(), a.splice(l, 1));
                        }
                        n = i;
                    }
                };
            };
        },
        function (t, e, n) {
            var o = n(7),
                r = n(8),
                i = n(9);
            e = o(!1);
            var a = r(i);
            e.push([
                t.i,
                ".rfp-swipeHint {\n  animation: 2s ease-in-out rfp-swipeHint-vertical 2;\n  background-color: rgba(255,255,255,0.5);\n  border-radius: 15px;\n  box-sizing: border-box;\n  height: 30px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 30px;\n}\n.rfp-swipeHint--vertical {\n  animation-name: rfp-swipeHint-vertical;\n  bottom: 20%;\n  left: 50%;\n  margin-left: -15px;\n}\n.rfp-swipeHint--horizontal {\n  animation-name: rfp-swipeHint-horizontal;\n  margin-top: -15px;\n  right: 20%;\n  top: 50%;\n}\n.rfp-swipeHint:before {\n  border-radius: 15px;\n  border: 3px double rgba(255,255,255,0.5);\n  box-sizing: border-box;\n  content: '';\n  height: 28px;\n  position: absolute;\n  width: 28px;\n}\n.rfp-swipeHint--vertical:before {\n  left: 50%;\n  margin-left: -14px;\n  top: 1px;\n}\n.rfp-swipeHint--horizontal:before {\n  left: 1px;\n  top: 1px;\n}\n.rfp-touchHint {\n  animation: 2s ease-in-out rfp-touchHint 2;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  z-index: 5;\n}\n.rfp-touchHint--vertical {\n  bottom: 5px;\n  left: 50%;\n  margin-left: -12px;\n}\n.rfp-touchHint--horizontal {\n  margin-top: -14px;\n  right: 5px;\n  top: 50%;\n}\n.rfp-touchHint:after, .rfp-swipeHint:after {\n  content: url(" +
                    a +
                    ");\n}\n.rfp-swipeHint:after {\n  position: absolute;\n  top: 11px;\n  left: 6px;\n}\n@keyframes rfp-swipeHint-vertical {\n  0% {\n    opacity: 0;\n    height: 30px;\n  }\n  20%, 40% {\n    opacity: 1;\n    height: 30px;\n  }\n  60%, 80% {\n    opacity: 1;\n    height: 60%;\n  }\n  100% {\n    opacity: 0;\n    height: 60%;\n  }\n}\n@keyframes rfp-swipeHint-horizontal {\n  0% {\n    opacity: 0;\n    width: 30px;\n  }\n  20%, 40% {\n    opacity: 1;\n    width: 30px;\n  }\n  60%, 80% {\n    opacity: 1;\n    width: 60%;\n  }\n  100% {\n    opacity: 0;\n    width: 60%;\n  }\n}\n@keyframes rfp-touchHint {\n  0% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  40%,60% {\n    transform: scale(0.75);\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n",
                "",
            ]),
                (t.exports = e);
        },
        function (t, e, n) {
            "use strict";
            t.exports = function (t) {
                var e = [];
                return (
                    (e.toString = function () {
                        return this.map(function (e) {
                            var n = (function (t, e) {
                                var n = t[1] || "",
                                    o = t[3];
                                if (!o) return n;
                                if (e && "function" == typeof btoa) {
                                    var r = ((a = o), (s = btoa(unescape(encodeURIComponent(JSON.stringify(a))))), (c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s)), "/*# ".concat(c, " */")),
                                        i = o.sources.map(function (t) {
                                            return "/*# sourceURL=".concat(o.sourceRoot || "").concat(t, " */");
                                        });
                                    return [n].concat(i).concat([r]).join("\n");
                                }
                                var a, s, c;
                                return [n].join("\n");
                            })(e, t);
                            return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n;
                        }).join("");
                    }),
                    (e.i = function (t, n, o) {
                        "string" == typeof t && (t = [[null, t, ""]]);
                        var r = {};
                        if (o)
                            for (var i = 0; i < this.length; i++) {
                                var a = this[i][0];
                                null != a && (r[a] = !0);
                            }
                        for (var s = 0; s < t.length; s++) {
                            var c = [].concat(t[s]);
                            (o && r[c[0]]) || (n && (c[2] ? (c[2] = "".concat(n, " and ").concat(c[2])) : (c[2] = n)), e.push(c));
                        }
                    }),
                    e
                );
            };
        },
        function (t, e, n) {
            "use strict";
            t.exports = function (t, e) {
                return (
                    e || (e = {}),
                    "string" != typeof (t = t && t.__esModule ? t.default : t)
                        ? t
                        : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)), e.hash && (t += e.hash), /["'() \t\n]/.test(t) || e.needQuotes ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : t)
                );
            };
        },
        function (t, e) {
            t.exports =
                "data:image/svg+xml,%3Csvg width='24px' height='29px' viewBox='0 0 24 29' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 43.2 (39069) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3Etouch%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='touch'%3E %3Cpath d='M12.1244203,7.32866727 C12.7498203,6.55580421 13.1244203,5.57164839 13.1244203,4.5 C13.1244203,2.0147185 11.1097018,0 8.6244203,0 C6.1391388,0 4.12442034,2.0147185 4.12442034,4.5 C4.12442034,5.57164839 4.49902039,6.55580421 5.1244203,7.32866727 L5.1244203,4.49129639 C5.1244203,2.56125662 6.6914237,1 8.6244203,1 C10.5534837,1 12.1244203,2.56310664 12.1244203,4.49129639 L12.1244203,7.32866727 L12.1244203,7.32866727 L12.1244203,7.32866727 Z' id='one-finger-tap-path' fill='%23000000'%3E%3C/path%3E %3Cpath d='M23.1244203,20.5 C23.1244203,25.1944206 19.3188409,29 14.6244203,29.0000003 C11.5115051,29.0000003 8.2262274,27.5474856 5.9652407,23.4282229 C2.70175208,17.4825159 -1.47172681,13.5832077 0.51553361,11.5959473 C1.9371827,10.1742982 4.16926196,11.5381668 6.1244203,13.3667868 L6.1244203,13.3667868 L6.1244203,4.50840855 C6.1244203,3.11541748 7.2437085,2 8.6244203,2 C10.0147583,2 11.1244203,3.12305276 11.1244203,4.50840855 L11.1244203,9.4983653 C11.5422506,9.1853054 12.0616174,9 12.6244203,9 C13.7069384,9 14.6193054,9.6774672 14.9702378,10.6281239 C15.4110134,10.2379894 15.9901312,10 16.6244203,10 C18.0147583,10 19.1244203,11.1182256 19.1244203,12.4976267 L19.1244203,12.5110883 C19.5422506,12.1985158 20.0616174,12.014191 20.6244203,12.014191 C22.0147583,12.014191 23.1244203,13.1335355 23.1244203,14.5143168 L23.1244203,20.5 L23.1244203,20.5 Z' id='one-finger-tap-path' fill='%23000000'%3E%3C/path%3E %3Cpath d='M14.6231595,27.9999999 C18.7659915,28 22.1244203,24.4147752 22.1244203,20.5 C22.1244203,20.5 22.1244203,22.8132437 22.1244203,20.5 L22.1244203,16.7491622 L22.1244203,14.5016756 C22.1244203,13.6723231 21.4586231,13 20.6244203,13 C19.7959932,13 19.1244203,13.6711894 19.1244203,14.5016756 L19.1244203,15 L18.1244203,15 L18.1244203,12.5064385 C18.1244203,11.6744555 17.4586231,11 16.6244203,11 C15.7959932,11 15.1244203,11.6715406 15.1244203,12.5064385 L15.1244203,14 L14.1244203,14 L14.1244203,11.5064385 C14.1244203,10.6744555 13.4586231,10 12.6244203,10 C11.7959932,10 11.1244203,10.6715406 11.1244203,11.5064385 L11.1244203,15 L10.1244203,15 L10.1244203,4.50524116 C10.1244203,3.67391942 9.4586231,3 8.6244203,3 C7.7959932,3 7.1244203,3.66712976 7.1244203,4.50524116 L7.1244203,15.7999878 C5.0660207,13.599567 2.35605012,11.1791206 1.24545305,12.2957153 C0.15828327,13.3887562 2.95978233,16.4007216 6.8717958,22.9830936 C8.6344162,25.9488875 10.8647052,27.9995418 14.6231595,27.9999999 L14.6231595,27.9999999 Z' id='one-finger-tap-path' fill='%23FFFFFF'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E";
        },
        function (t, e, n) {
            "use strict";
            n.r(e);
            var o = n(0),
                r = n.n(o),
                i = n(1),
                a = n.n(i);
            function s(t) {
                return (s =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            function c(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function u(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
                }
            }
            function l(t, e) {
                return (l =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function p(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        o = h(t);
                    if (e) {
                        var r = h(this).constructor;
                        n = Reflect.construct(o, arguments, r);
                    } else n = o.apply(this, arguments);
                    return f(this, n);
                };
            }
            function f(t, e) {
                return !e || ("object" !== s(e) && "function" != typeof e)
                    ? (function (t) {
                          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return t;
                      })(t)
                    : e;
            }
            function h(t) {
                return (h = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            var d = (function (t) {
                !(function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && l(t, e);
                })(i, t);
                var e,
                    n,
                    o,
                    r = p(i);
                function i() {
                    return c(this, i), r.apply(this, arguments);
                }
                return (
                    (e = i),
                    (n = [
                        {
                            key: "render",
                            value: function () {
                                return this.props.component;
                            },
                        },
                    ]) && u(e.prototype, n),
                    o && u(e, o),
                    i
                );
            })(r.a.PureComponent);
            d.propTypes = { component: a.a.node.isRequired };
            var g = d,
                v =
                    (n(4),
                    function (t) {
                        return "linear-gradient(to ".concat(t, ", rgba(0,0,0,0.25) 0%,rgba(0,0,0,0) 50px)");
                    });
            function m(t) {
                return (m =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            function y(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
                }
            }
            function b(t, e) {
                return (b =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function w(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        o = P(t);
                    if (e) {
                        var r = P(this).constructor;
                        n = Reflect.construct(o, arguments, r);
                    } else n = o.apply(this, arguments);
                    return S(this, n);
                };
            }
            function S(t, e) {
                return !e || ("object" !== m(e) && "function" != typeof e) ? C(t) : e;
            }
            function C(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
            }
            function P(t) {
                return (P = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            var x = function () {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return Object.assign.apply(Object, [{}].concat(e));
                },
                E = function (t) {
                    t.preventDefault();
                },
                O = function (t) {
                    return { posX: t.pageX || t.clientX || (t.touches && t.touches[0].pageX), posY: t.pageY || t.clientY || (t.touches && t.touches[0].pageY) };
                },
                H = (function (t) {
                    !(function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && b(t, e);
                    })(s, t);
                    var e,
                        n,
                        i,
                        a = w(s);
                    function s(t) {
                        var e;
                        return (
                            (function (t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                            })(this, s),
                            ((e = a.call(this, t)).state = { page: t.startAt, startY: -1, diffY: 0, timestamp: 0, angle: 0, rotate: 0, direction: "", lastDirection: "", secondHalfStyle: {}, firstHalfStyle: {}, canAnimate: !0 }),
                            (e.startMoving = e.startMoving.bind(C(e))),
                            (e.moveGesture = e.moveGesture.bind(C(e))),
                            (e.stopMoving = e.stopMoving.bind(C(e))),
                            (e.reset = e.reset.bind(C(e))),
                            (e.mouseLeave = e.mouseLeave.bind(C(e))),
                            (e.incrementPage = e.incrementPage.bind(C(e))),
                            (e.decrementPage = e.decrementPage.bind(C(e))),
                            (e.hasNextPage = e.hasNextPage.bind(C(e))),
                            (e.hasPreviousPage = e.hasPreviousPage.bind(C(e))),
                            (e.turnRightOrDown = e.turnRightOrDown.bind(C(e))),
                            (e.turnLeftOrUp = e.turnLeftOrUp.bind(C(e))),
                            (e.transition = "transform ".concat(e.props.animationDuration / 1e3, "s ease-in-out")),
                            (e.onStartSwipingCalled = !1),
                            e
                        );
                    }
                    return (
                        (e = s),
                        (n = [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    var t = this,
                                        e = this.props,
                                        n = e.showHint,
                                        o = e.showSwipeHint;
                                    n &&
                                        (this.hintTimeout = setTimeout(
                                            function () {
                                                return t.showHint();
                                            },
                                            o ? 1800 : 1e3
                                        ));
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    clearTimeout(this.hintTimeout), clearTimeout(this.hintHideTimeout);
                                },
                            },
                            {
                                key: "getHeight",
                                value: function () {
                                    return this.props.responsive ? "100%" : "".concat(this.props.height, "px");
                                },
                            },
                            {
                                key: "getWidth",
                                value: function () {
                                    return this.props.responsive ? "100%" : "".concat(this.props.width, "px");
                                },
                            },
                            {
                                key: "isLastPage",
                                value: function () {
                                    return this.state.page + 1 === o.Children.count(this.props.children);
                                },
                            },
                            {
                                key: "isFirstPage",
                                value: function () {
                                    return 0 === this.state.page;
                                },
                            },
                            {
                                key: "showHint",
                                value: function () {
                                    var t = this,
                                        e = this.props,
                                        n = e.orientation,
                                        o = e.perspective,
                                        r = this.transition;
                                    this.setState({ secondHalfStyle: { transition: r } }, function () {
                                        t.setState({ secondHalfStyle: { transition: r, transform: "perspective(".concat(o, "vertical" === n ? ") rotateX(30deg)" : ") rotateY(-30deg)") } }),
                                            (t.hintHideTimeout = setTimeout(function () {
                                                return t.setState({ secondHalfStyle: { transition: r } });
                                            }, 1e3));
                                    });
                                },
                            },
                            {
                                key: "incrementPage",
                                value: function () {
                                    var t = this,
                                        e = o.Children.count(this.props.children),
                                        n = this.state.page;
                                    this.setState({ page: (n + 1) % e }, function () {
                                        return t.props.onPageChange(t.state.page, "next");
                                    });
                                },
                            },
                            {
                                key: "decrementPage",
                                value: function () {
                                    var t,
                                        e = this,
                                        n = o.Children.count(this.props.children),
                                        r = this.state.page;
                                    (t = this.isFirstPage() ? n - 1 : r - 1),
                                        this.setState({ page: t }, function () {
                                            return e.props.onPageChange(e.state.page, "prev");
                                        });
                                },
                            },
                            {
                                key: "hasNextPage",
                                value: function () {
                                    var t = this.props.loopForever;
                                    return !this.isLastPage() || t;
                                },
                            },
                            {
                                key: "hasPreviousPage",
                                value: function () {
                                    var t = this.props.loopForever;
                                    return !this.isFirstPage() || t;
                                },
                            },
                            {
                                key: "startMoving",
                                value: function (t) {
                                    var e = t.target,
                                        n = e.tagName,
                                        o = e.className;
                                    if (
                                        "BUTTON" !== n &&
                                        "A" !== n &&
                                        (E(t),
                                        !this.props.swipeImmune.some(function (t) {
                                            return -1 !== o.indexOf(t);
                                        }))
                                    ) {
                                        var r = O(t),
                                            i = r.posX,
                                            a = r.posY;
                                        this.setState({ startX: i, startY: a, canAnimate: !1 });
                                    }
                                },
                            },
                            {
                                key: "moveGesture",
                                value: function (t) {
                                    t.preventDefault();
                                    var e = O(t),
                                        n = e.posX,
                                        o = e.posY,
                                        r = this.props,
                                        i = r.orientation,
                                        a = r.treshold,
                                        s = r.maxAngle,
                                        c = r.perspective,
                                        u = r.reverse,
                                        l = this.state,
                                        p = l.startX,
                                        f = l.startY,
                                        h = l.diffX,
                                        d = l.diffY,
                                        g = l.direction,
                                        v = l.lastDirection;
                                    if (-1 !== f) {
                                        var m = o - f,
                                            y = n - p,
                                            b = (("up" === g || "down" === g ? m : y) / 250) * 180,
                                            w = !1;
                                        "up" === g || "left" === g ? (w = u ? !this.hasPreviousPage() : !this.hasNextPage()) : ("down" !== g && "right" !== g) || (w = u ? !this.hasNextPage() : !this.hasPreviousPage());
                                        var S = Math.min(Math.abs(b), w ? s : 180),
                                            C = Math.abs(y) > a || Math.abs(m) > a,
                                            P = "";
                                        !this.onStartSwipingCalled && C && (this.props.onStartSwiping(), (this.onStartSwipingCalled = !0)),
                                            "" === g &&
                                                C &&
                                                (m < 0 && "vertical" === i ? (P = "up") : m > 0 && "vertical" === i ? (P = "down") : y < 0 && "horizontal" === i ? (P = "left") : y > 0 && "horizontal" === i && (P = "right"),
                                                this.setState({ direction: P }));
                                        var x = v;
                                        d > m ? (x = "up") : d < m ? (x = "down") : h > y ? (x = "right") : h < y && (x = "left"),
                                            this.setState({ angle: b, rotate: S, timestamp: Date.now(), diffY: m, diffX: y, lastDirection: x }),
                                            m < 0 && "up" === this.state.direction
                                                ? this.setState({ angle: b, secondHalfStyle: { transform: "perspective(".concat(c, ") rotateX(").concat(S, "deg)") } })
                                                : m > 0 && "down" === this.state.direction
                                                ? this.setState({ angle: b, firstHalfStyle: { transform: "perspective(".concat(c, ") rotateX(-").concat(S, "deg)"), zIndex: 2 } })
                                                : y < 0 && "left" === this.state.direction
                                                ? this.setState({ angle: b, secondHalfStyle: { transform: "perspective(".concat(c, ") rotateY(-").concat(S, "deg)") } })
                                                : y > 0 && "right" === this.state.direction && this.setState({ angle: b, firstHalfStyle: { transform: "perspective(".concat(c, ") rotateY(").concat(S, "deg)"), zIndex: 2 } });
                                    }
                                },
                            },
                            {
                                key: "turnRightOrDown",
                                value: function (t) {
                                    var e = this,
                                        n = this.props,
                                        o = n.perspective,
                                        r = n.orientation,
                                        i = n.animationDuration,
                                        a = this.transition,
                                        s = "perspective(".concat(o, ") ");
                                    (s += "vertical" === r ? "rotateX(180deg)" : "rotateY(-180deg)"),
                                        this.setState({ firstHalfStyle: { transition: a, transform: "", zIndex: "auto" }, secondHalfStyle: { transition: a, transform: s }, canAnimate: !1 }, function () {
                                            setTimeout(function () {
                                                t(), e.setState({ secondHalfStyle: {}, canAnimate: !0 });
                                            }, i);
                                        });
                                },
                            },
                            {
                                key: "turnLeftOrUp",
                                value: function (t) {
                                    var e = this,
                                        n = this.props,
                                        o = n.perspective,
                                        r = n.orientation,
                                        i = n.animationDuration,
                                        a = this.transition,
                                        s = "perspective(".concat(o, ") ");
                                    (s += "vertical" === r ? "rotateX(-180deg)" : "rotateY(180deg)"),
                                        this.setState({ firstHalfStyle: { transition: a, transform: s, zIndex: 2 }, secondHalfStyle: { transition: a, transform: "" }, canAnimate: !1 }, function () {
                                            setTimeout(function () {
                                                t(), e.setState({ firstHalfStyle: {}, canAnimate: !0 });
                                            }, i);
                                        });
                                },
                            },
                            {
                                key: "gotoNextPage",
                                value: function () {
                                    if (this.hasNextPage() && this.state.canAnimate) {
                                        var t = this.props,
                                            e = t.onStartPageChange,
                                            n = t.reverse;
                                        e(this.state.page, "next"), n ? this.turnLeftOrUp(this.incrementPage) : this.turnRightOrDown(this.incrementPage);
                                    }
                                },
                            },
                            {
                                key: "gotoPreviousPage",
                                value: function () {
                                    if (this.hasPreviousPage() && this.state.canAnimate) {
                                        var t = this.props,
                                            e = t.onStartPageChange,
                                            n = t.reverse;
                                        e(this.state.page, "prev"), n ? this.turnRightOrDown(this.decrementPage) : this.turnLeftOrUp(this.decrementPage);
                                    }
                                },
                            },
                            {
                                key: "gotoPage",
                                value: function (t) {
                                    var e = this.props,
                                        n = e.children,
                                        o = e.onPageChange;
                                    if (!(t >= 0 && t < n.length)) throw new RangeError("`page` argument is out of bounds.");
                                    this.setState({ page: t }, function () {
                                        o(t, "set");
                                    });
                                },
                            },
                            {
                                key: "stopMoving",
                                value: function (t) {
                                    var e = this,
                                        n = this.props,
                                        o = n.reverse,
                                        r = n.onStopSwiping,
                                        i = this.state,
                                        a = i.timestamp,
                                        s = i.angle,
                                        c = i.direction,
                                        u = i.lastDirection,
                                        l = Date.now() - a,
                                        p = s <= -90 || (l <= 20 && "up" === c && "up" === u) || (l <= 20 && "right" === c && "right" === u),
                                        f = s >= 90 || (l <= 20 && "down" === c && "down" === u) || (l <= 20 && "left" === c && "left" === u);
                                    this.reset(function () {
                                        r(), p && (o ? e.gotoPreviousPage() : e.gotoNextPage()), f && (o ? e.gotoNextPage() : e.gotoPreviousPage()), "function" == typeof t && t();
                                    });
                                },
                            },
                            {
                                key: "beforeItem",
                                value: function () {
                                    var t = o.Children.count(this.props.children),
                                        e = this.props,
                                        n = e.children,
                                        r = e.firstComponent,
                                        i = e.loopForever;
                                    return this.isFirstPage() ? (i ? n[t - 1] : r) : n[this.state.page - 1];
                                },
                            },
                            {
                                key: "afterItem",
                                value: function () {
                                    var t = this.props,
                                        e = t.children,
                                        n = t.lastComponent,
                                        o = t.loopForever;
                                    return this.isLastPage() ? (o ? e[0] : n) : e[this.state.page + 1];
                                },
                            },
                            {
                                key: "mouseLeave",
                                value: function () {
                                    this.props.flipOnLeave ? this.stopMoving() : this.reset();
                                },
                            },
                            {
                                key: "reset",
                                value: function (t) {
                                    var e = this.transition;
                                    (this.onStartSwipingCalled = !1),
                                        this.setState({ startY: -1, startX: -1, angle: 0, rotate: 0, direction: "", lastDirection: "", secondHalfStyle: { transition: e }, firstHalfStyle: { transition: e }, canAnimate: !0 }, t);
                                },
                            },
                            {
                                key: "renderPage",
                                value: function (t, e) {
                                    var n = e === this.state.page,
                                        o = this.state,
                                        i = o.page,
                                        a = o.direction,
                                        s = o.rotate,
                                        c = this.props,
                                        u = c.orientation,
                                        l = c.uncutPages,
                                        p = c.maskOpacity,
                                        f = c.pageBackground,
                                        h = c.animationDuration,
                                        d = c.flipOnTouch,
                                        m = c.disableSwipe,
                                        y = c.reverse,
                                        b = c.noShadow,
                                        w = (function (t, e, n, o, r, i, a, s, c) {
                                            return {
                                                container: { display: t === e ? "block" : "none", height: "100%", overflow: !1 === r ? "hidden" : "", position: "relative", touchAction: "none", width: "100%" },
                                                part: { position: "absolute" },
                                                visiblePart: { transformStyle: "preserve-3d" },
                                                firstHalf: { bottom: "vertical" === i ? "50%" : 0, left: 0, right: "vertical" === i ? 0 : "50%", top: 0, transformOrigin: "vertical" === i ? "bottom center" : "right center" },
                                                secondHalf: { bottom: 0, left: "vertical" === i ? 0 : "50%", right: 0, top: "vertical" === i ? "50%" : 0, transformOrigin: "vertical" === i ? "top center" : "left center" },
                                                face: { backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", bottom: 0, left: 0, overflow: "hidden", position: "absolute", right: 0, top: 0, transformStyle: "preserve-3d" },
                                                back: { transform: "vertical" === i ? "rotateX(180deg)" : "rotateY(180deg)" },
                                                before: { bottom: 0, left: 0, right: 0, top: 0 },
                                                after: { bottom: 0, left: "vertical" === i ? 0 : "50%", right: 0, top: "vertical" === i ? "50%" : 0 },
                                                cut: { background: s, bottom: 0, left: 0, overflow: "hidden", position: "absolute", right: 0, top: 0 },
                                                firstCut: { right: "vertical" === i ? 0 : "-100%" },
                                                pull: { left: "vertical" === i ? 0 : "-100%", position: "absolute", height: "100%", right: 0, top: "vertical" === i ? "-100%" : 0 },
                                                gradient: { bottom: 0, left: 0, pointerEvents: "none", position: "absolute", right: 0, top: 0, transition: "opacity ".concat(c / 1e3, "s ease-in-out"), opacity: n ? 1 : 0 },
                                                gradientBefore: { background: "right" === n ? v("left") : "down" === n ? v("top") : "", width: "horizontal" === i ? "50%" : "100%", height: "vertical" === i ? "50%" : "100%" },
                                                gradientAfter: { background: "left" === n ? v("right") : "up" === n ? v("bottom") : "" },
                                                gradientFirstHalf: { background: "left" === n ? v("left") : "up" === n ? v("top") : "" },
                                                gradientSecondHalf: { background: "right" === n ? v("right") : "down" === n ? v("bottom") : "" },
                                                mask: { backgroundColor: "#000", bottom: 0, left: 0, opacity: "" !== n ? Math.max(a - (Math.abs(o) / 90) * a, 0) : 0, pointerEvents: "none", position: "absolute", right: 0, top: 0 },
                                                maskReverse: { opacity: "" !== n ? Math.max((Math.abs(o) / 90) * a - a, 0) : 0 },
                                            };
                                        })(i, e, a, s, l, u, p, f, h),
                                        S = w.container,
                                        C = w.part,
                                        P = w.visiblePart,
                                        O = w.firstHalf,
                                        H = w.secondHalf,
                                        k = w.face,
                                        M = w.back,
                                        T = w.before,
                                        L = w.after,
                                        j = w.cut,
                                        _ = w.firstCut,
                                        R = w.pull,
                                        D = w.gradient,
                                        N = w.gradientBefore,
                                        A = w.gradientAfter,
                                        F = w.gradientSecondHalf,
                                        I = w.gradientFirstHalf,
                                        U = w.mask,
                                        Y = w.maskReverse,
                                        z = r.a.createElement(g, { shouldUpdate: n, component: t }),
                                        X = y ? this.afterItem() : this.beforeItem(),
                                        B = y ? this.beforeItem() : this.afterItem(),
                                        G = X ? r.a.createElement(g, { component: X, shouldUpdate: n }) : null,
                                        Z = B ? r.a.createElement(g, { component: B, shouldUpdate: n }) : null,
                                        W = (d && !m) || !d ? this.startMoving : E;
                                    return r.a.createElement(
                                        "div",
                                        {
                                            role: "presentation",
                                            key: e,
                                            onMouseDown: W,
                                            onTouchStart: W,
                                            onMouseMove: this.moveGesture,
                                            onTouchMove: this.moveGesture,
                                            onMouseUp: this.stopMoving,
                                            onTouchEnd: this.stopMoving,
                                            onMouseLeave: this.mouseLeave,
                                            style: S,
                                        },
                                        r.a.createElement("div", { style: x(C, T, j) }, G, r.a.createElement("div", { style: U }), r.a.createElement("div", { style: x(D, N) })),
                                        r.a.createElement("div", { style: x(C, j, L) }, r.a.createElement("div", { style: R }, Z), r.a.createElement("div", { style: U }), r.a.createElement("div", { style: x(D, A) })),
                                        r.a.createElement(
                                            "div",
                                            { style: x(C, P, O, this.state.firstHalfStyle) },
                                            r.a.createElement("div", { style: k }, r.a.createElement("div", { style: x(j, _) }, z), r.a.createElement("div", { style: x(U, Y) }), !b && r.a.createElement("div", { style: x(D, I) })),
                                            r.a.createElement("div", { style: x(k, M) }, r.a.createElement("div", { style: j }, r.a.createElement("div", { style: R }, G)))
                                        ),
                                        r.a.createElement(
                                            "div",
                                            { style: x(C, P, H, this.state.secondHalfStyle) },
                                            r.a.createElement(
                                                "div",
                                                { style: k },
                                                r.a.createElement("div", { style: j }, r.a.createElement("div", { style: R }, z)),
                                                r.a.createElement("div", { style: x(U, Y) }),
                                                !b && r.a.createElement("div", { style: x(D, F) })
                                            ),
                                            r.a.createElement("div", { style: x(k, M) }, r.a.createElement("div", { style: x(C, L, j, _) }, Z))
                                        )
                                    );
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var t = this,
                                        e = this.props,
                                        n = e.style,
                                        i = e.children,
                                        a = e.className,
                                        s = e.orientation,
                                        c = e.showSwipeHint,
                                        u = e.showTouchHint,
                                        l = e.flipOnTouch,
                                        p = e.flipOnTouchZone,
                                        f = e.disableSwipe,
                                        h = e.reverse,
                                        d = x(n, { height: this.getHeight(), position: "relative", width: this.getWidth() }),
                                        g = { height: "vertical" === s ? "".concat(p, "%") : "100%", position: "absolute", touchAction: "none", width: "vertical" === s ? "100%" : "".concat(p, "%"), zIndex: 3 },
                                        v = { left: 0, top: 0 },
                                        m = { bottom: 0, right: 0 },
                                        y = x(g, h ? m : v),
                                        b = x(g, h ? v : m),
                                        w = f ? E : this.startMoving;
                                    return r.a.createElement(
                                        "div",
                                        { style: d, className: a },
                                        o.Children.map(i, function (e, n) {
                                            return t.renderPage(e, n);
                                        }),
                                        c && r.a.createElement("div", { className: "rfp-swipeHint rfp-swipeHint--".concat(s) }),
                                        l &&
                                            r.a.createElement(
                                                "div",
                                                null,
                                                r.a.createElement("div", {
                                                    role: "presentation",
                                                    onMouseDown: w,
                                                    onTouchStart: w,
                                                    onMouseUp: function () {
                                                        t.stopMoving(function () {
                                                            return t.gotoPreviousPage();
                                                        });
                                                    },
                                                    onMouseMove: this.moveGesture,
                                                    onTouchMove: this.moveGesture,
                                                    onTouchEnd: this.stopMoving,
                                                    onMouseLeave: this.mouseLeave,
                                                    style: y,
                                                    className: "rfp-touchZone rfp-touchZone-previous",
                                                }),
                                                r.a.createElement("div", {
                                                    role: "presentation",
                                                    onMouseDown: w,
                                                    onTouchStart: w,
                                                    onMouseUp: function () {
                                                        t.stopMoving(function () {
                                                            return t.gotoNextPage();
                                                        });
                                                    },
                                                    onMouseMove: this.moveGesture,
                                                    onTouchMove: this.moveGesture,
                                                    onTouchEnd: this.stopMoving,
                                                    onMouseLeave: this.mouseLeave,
                                                    style: b,
                                                    className: "rfp-touchZone rfp-touchZone-next",
                                                }),
                                                u && r.a.createElement("div", { className: "rfp-touchHint rfp-touchHint--".concat(s) })
                                            )
                                    );
                                },
                            },
                        ]) && y(e.prototype, n),
                        i && y(e, i),
                        s
                    );
                })(o.Component);
            (H.defaultProps = {
                children: [],
                orientation: "vertical",
                animationDuration: 200,
                treshold: 10,
                maxAngle: 45,
                maskOpacity: 0.4,
                perspective: "130em",
                pageBackground: "#fff",
                firstComponent: null,
                lastComponent: null,
                showHint: !1,
                showSwipeHint: !1,
                showTouchHint: !1,
                uncutPages: !1,
                style: {},
                //default height and width
                height: 480,
                width: 320,
                onPageChange: function () {},
                onStartPageChange: function () {},
                onStartSwiping: function () {},
                onStopSwiping: function () {},
                className: "",
                flipOnLeave: !1,
                loopForever: !1,
                flipOnTouch: !1,
                flipOnTouchZone: 10,
                disableSwipe: !1,
                responsive: !1,
                startAt: 0,
                reverse: !1,
                swipeImmune: [],
                noShadow: !1,
            }),
                (H.propTypes = {
                    children: a.a.oneOfType([a.a.arrayOf(a.a.node), a.a.node]),
                    orientation: a.a.oneOf(["vertical", "horizontal"]),
                    animationDuration: a.a.number,
                    treshold: a.a.number,
                    maxAngle: a.a.number,
                    maskOpacity: a.a.number,
                    perspective: a.a.string,
                    pageBackground: a.a.string,
                    firstComponent: a.a.element,
                    flipOnLeave: a.a.bool,
                    lastComponent: a.a.element,
                    showHint: a.a.bool,
                    showSwipeHint: a.a.bool,
                    showTouchHint: a.a.bool,
                    uncutPages: a.a.bool,
                    style: a.a.object,
                    height: a.a.number,
                    width: a.a.number,
                    onPageChange: a.a.func,
                    onStartPageChange: a.a.func,
                    onStartSwiping: a.a.func,
                    onStopSwiping: a.a.func,
                    className: a.a.string,
                    loopForever: a.a.bool,
                    flipOnTouch: a.a.bool,
                    flipOnTouchZone: a.a.number,
                    disableSwipe: a.a.bool,
                    responsive: a.a.bool,
                    startAt: a.a.number,
                    reverse: a.a.bool,
                    swipeImmune: a.a.arrayOf(a.a.string),
                    noShadow: a.a.bool,
                });
            e.default = H;
        },
    ]);
});
