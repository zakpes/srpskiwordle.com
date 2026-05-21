(this.wordle = this.wordle || {}),
    (this.wordle.bundle = (function (e) {
        "use strict";
        function a(e) {
            return (a =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function s(e, a) {
            if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function");
        }
        function t(e, a) {
            for (var s = 0; s < a.length; s++) {
                var t = a[s];
                (t.enumerable = t.enumerable || !1), (t.configurable = !0), "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t);
            }
        }
        function o(e, a, s) {
            return a && t(e.prototype, a), s && t(e, s), e;
        }
        function n(e, a, s) {
            return a in e ? Object.defineProperty(e, a, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : (e[a] = s), e;
        }
        function r(e, a) {
            if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(a && a.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), a && l(e, a);
        }
        function i(e) {
            return (i = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
        }
        function l(e, a) {
            return (l =
                Object.setPrototypeOf ||
                function (e, a) {
                    return (e.__proto__ = a), e;
                })(e, a);
        }
        function d() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
            } catch (e) {
                return !1;
            }
        }
        function u(e, a, s) {
            return (u = d()
                ? Reflect.construct
                : function (e, a, s) {
                      var t = [null];
                      t.push.apply(t, a);
                      var o = new (Function.bind.apply(e, t))();
                      return s && l(o, s.prototype), o;
                  }).apply(null, arguments);
        }
        function c(e) {
            var a = "function" == typeof Map ? new Map() : void 0;
            return (c = function (e) {
                if (null === e || ((s = e), -1 === Function.toString.call(s).indexOf("[native code]"))) return e;
                var s;
                if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== a) {
                    if (a.has(e)) return a.get(e);
                    a.set(e, t);
                }
                function t() {
                    return u(e, arguments, i(this).constructor);
                }
                return (t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), l(t, e);
            })(e);
        }
        function p(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function m(e, a) {
            return !a || ("object" != typeof a && "function" != typeof a) ? p(e) : a;
        }
        function h(e) {
            var a = d();
            return function () {
                var s,
                    t = i(e);
                if (a) {
                    var o = i(this).constructor;
                    s = Reflect.construct(t, arguments, o);
                } else s = t.apply(this, arguments);
                return m(this, s);
            };
        }
        function y(e, a) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, a) {
                    var s = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                    if (null == s) return;
                    var t,
                        o,
                        n = [],
                        r = !0,
                        i = !1;
                    try {
                        for (s = s.call(e); !(r = (t = s.next()).done) && (n.push(t.value), !a || n.length !== a); r = !0);
                    } catch (e) {
                        (i = !0), (o = e);
                    } finally {
                        try {
                            r || null == s.return || s.return();
                        } finally {
                            if (i) throw o;
                        }
                    }
                    return n;
                })(e, a) ||
                b(e, a) ||
                (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function g(e) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return f(e);
                })(e) ||
                (function (e) {
                    if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
                })(e) ||
                b(e) ||
                (function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function b(e, a) {
            if (e) {
                if ("string" == typeof e) return f(e, a);
                var s = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === s && e.constructor && (s = e.constructor.name), "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? f(e, a) : void 0;
            }
        }
        function f(e, a) {
            (null == a || a > e.length) && (a = e.length);
            for (var s = 0, t = new Array(a); s < a; s++) t[s] = e[s];
            return t;
        }
        var k = document.createElement("template");
        k.innerHTML =
            "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
        var v = (function (e) {
            r(t, e);
            var a = h(t);
            function t() {
                var e;
                return s(this, t), n(p((e = a.call(this))), "_letter", ""), n(p(e), "_state", "empty"), n(p(e), "_animation", "idle"), n(p(e), "_last", !1), n(p(e), "_reveal", !1), e.attachShadow({ mode: "open" }), e;
            }
            return (
                o(
                    t,
                    [
                        {
                            key: "last",
                            set: function (e) {
                                this._last = e;
                            },
                        },
                        {
                            key: "connectedCallback",
                            value: function () {
                                var e = this;
                                this.shadowRoot.appendChild(k.content.cloneNode(!0)),
                                    (this.$tile = this.shadowRoot.querySelector(".tile")),
                                    this.$tile.addEventListener("animationend", function (a) {
                                        "PopIn" === a.animationName && (e._animation = "idle"),
                                            "FlipIn" === a.animationName && ((e.$tile.dataset.state = e._state), (e._animation = "flip-out")),
                                            "FlipOut" === a.animationName && ((e._animation = "idle"), e._last && e.dispatchEvent(new CustomEvent("game-last-tile-revealed-in-row", { bubbles: !0, composed: !0 }))),
                                            e._render();
                                    }),
                                    this._render();
                            },
                        },
                        {
                            key: "attributeChangedCallback",
                            value: function (e, a, s) {
                                switch (e) {
                                    case "letter":
                                        if (s === a) break;
                                        var t = "null" === s ? "" : s;
                                        (this._letter = t), (this._state = t ? "tbd" : "empty"), (this._animation = t ? "pop" : "idle");
                                        break;
                                    case "evaluation":
                                        if (!s) break;
                                        this._state = s;
                                        break;
                                    case "reveal":
                                        (this._animation = "flip-in"), (this._reveal = !0);
                                }
                                this._render();
                            },
                        },
                        {
                            key: "_render",
                            value: function () {
                                this.$tile &&
                                    ((this.$tile.textContent = this._letter),
                                    ["empty", "tbd"].includes(this._state) && (this.$tile.dataset.state = this._state),
                                    (["empty", "tbd"].includes(this._state) || this._reveal) && this.$tile.dataset.animation != this._animation && (this.$tile.dataset.animation = this._animation));
                            },
                        },
                    ],
                    [
                        {
                            key: "observedAttributes",
                            get: function () {
                                return ["letter", "evaluation", "reveal"];
                            },
                        },
                    ]
                ),
                t
            );
        })(c(HTMLElement));
        customElements.define("game-tile", v);
        var w = document.createElement("template");
        w.innerHTML =
            '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
        var x = (function (e) {
            r(t, e);
            var a = h(t);
            function t() {
                var e;
                return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), (e._letters = ""), (e._evaluation = []), e._length, e;
            }
            return (
                o(
                    t,
                    [
                        {
                            key: "evaluation",
                            get: function () {
                                return this._evaluation;
                            },
                            set: function (e) {
                                var a = this;
                                (this._evaluation = e),
                                    this.$tiles &&
                                        this.$tiles.forEach(function (e, s) {
                                            e.setAttribute("evaluation", a._evaluation[s]),
                                                setTimeout(function () {
                                                    e.setAttribute("reveal", "");
                                                }, 300 * s);
                                        });
                            },
                        },
                        {
                            key: "connectedCallback",
                            value: function () {
                                var e = this;
                                this.shadowRoot.appendChild(w.content.cloneNode(!0)), (this.$row = this.shadowRoot.querySelector(".row"));
                                for (
                                    var a = function (a) {
                                            var s = document.createElement("game-tile"),
                                                t = e._letters[a];
                                            (t && s.setAttribute("letter", t), e._evaluation[a]) &&
                                                (s.setAttribute("evaluation", e._evaluation[a]),
                                                setTimeout(function () {
                                                    s.setAttribute("reveal", "");
                                                }, 100 * a));
                                            a === e._length - 1 && (s.last = !0), e.$row.appendChild(s);
                                        },
                                        s = 0;
                                    s < this._length;
                                    s++
                                )
                                    a(s);
                                (this.$tiles = this.shadowRoot.querySelectorAll("game-tile")),
                                    this.addEventListener("animationend", function (a) {
                                        "Shake" === a.animationName && e.removeAttribute("invalid");
                                    });
                            },
                        },
                        {
                            key: "attributeChangedCallback",
                            value: function (e, a, s) {
                                switch (e) {
                                    case "letters":
                                        this._letters = s || "";
                                        break;
                                    case "length":
                                        this._length = parseInt(s, 10);
                                        break;
                                    case "win":
                                        if (null === s) {
                                            this.$tiles.forEach(function (e) {
                                                e.classList.remove("win");
                                            });
                                            break;
                                        }
                                        this.$tiles.forEach(function (e, a) {
                                            e.classList.add("win"), (e.style.animationDelay = "".concat(100 * a, "ms"));
                                        });
                                }
                                this._render();
                            },
                        },
                        {
                            key: "_render",
                            value: function () {
                                var e = this;
                                this.$row &&
                                    this.$tiles.forEach(function (a, s) {
                                        var t = e._letters[s];
                                        t ? a.setAttribute("letter", t) : a.removeAttribute("letter");
                                    });
                            },
                        },
                    ],
                    [
                        {
                            key: "observedAttributes",
                            get: function () {
                                return ["letters", "length", "invalid", "win"];
                            },
                        },
                    ]
                ),
                t
            );
        })(c(HTMLElement));
        customElements.define("game-row", x);
        var z = document.createElement("template");
        z.innerHTML = "\n  <slot></slot>\n";
        var j = "darkTheme",
            S = "colorBlindTheme",
            _ = (function (e) {
                r(t, e);
                var a = h(t);
                function t() {
                    var e;
                    s(this, t), n(p((e = a.call(this))), "isDarkTheme", !1), n(p(e), "isColorBlindTheme", !1), e.attachShadow({ mode: "open" });
                    var o = JSON.parse(window.localStorage.getItem(j)),
                        r = window.matchMedia("(prefers-color-scheme: dark)").matches,
                        i = JSON.parse(window.localStorage.getItem(S));
                    return !0 === o || !1 === o ? e.setDarkTheme(o) : r && e.setDarkTheme(!0), (!0 !== i && !1 !== i) || e.setColorBlindTheme(i), e;
                }
                return (
                    o(t, [
                        {
                            key: "setDarkTheme",
                            value: function (e) {
                                var a = document.querySelector("body");
                                e && !a.classList.contains("nightmode") ? a.classList.add("nightmode") : a.classList.remove("nightmode"), (this.isDarkTheme = e), window.localStorage.setItem(j, JSON.stringify(e));
                            },
                        },
                        {
                            key: "setColorBlindTheme",
                            value: function (e) {
                                var a = document.querySelector("body");
                                e && !a.classList.contains("colorblind") ? a.classList.add("colorblind") : a.classList.remove("colorblind"), (this.isColorBlindTheme = e), window.localStorage.setItem(S, JSON.stringify(e));
                            },
                        },
                        {
                            key: "connectedCallback",
                            value: function () {
                                var e = this;
                                this.shadowRoot.appendChild(z.content.cloneNode(!0)),
                                    this.shadowRoot.addEventListener("game-setting-change", function (a) {
                                        var s = a.detail,
                                            t = s.name,
                                            o = s.checked;
                                        switch (t) {
                                            case "dark-theme":
                                                return void e.setDarkTheme(o);
                                            case "color-blind-theme":
                                                return void e.setColorBlindTheme(o);
                                        }
                                    });
                            },
                        },
                    ]),
                    t
                );
            })(c(HTMLElement));
        function q(e, a) {
            return e === a || (e != e && a != a);
        }
        function E(e, a) {
            for (var s = e.length; s--; ) if (q(e[s][0], a)) return s;
            return -1;
        }
        customElements.define("game-theme-manager", _);
        var A = Array.prototype.splice;
        function C(e) {
            var a = -1,
                s = null == e ? 0 : e.length;
            for (this.clear(); ++a < s; ) {
                var t = e[a];
                this.set(t[0], t[1]);
            }
        }
        (C.prototype.clear = function () {
            (this.__data__ = []), (this.size = 0);
        }),
            (C.prototype.delete = function (e) {
                var a = this.__data__,
                    s = E(a, e);
                return !(s < 0) && (s == a.length - 1 ? a.pop() : A.call(a, s, 1), --this.size, !0);
            }),
            (C.prototype.get = function (e) {
                var a = this.__data__,
                    s = E(a, e);
                return s < 0 ? void 0 : a[s][1];
            }),
            (C.prototype.has = function (e) {
                return E(this.__data__, e) > -1;
            }),
            (C.prototype.set = function (e, a) {
                var s = this.__data__,
                    t = E(s, e);
                return t < 0 ? (++this.size, s.push([e, a])) : (s[t][1] = a), this;
            });
        var L = "object" == ("undefined" == typeof global ? "undefined" : a(global)) && global && global.Object === Object && global,
            T = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self,
            I = L || T || Function("return this")(),
            M = I.Symbol,
            O = Object.prototype,
            R = O.hasOwnProperty,
            $ = O.toString,
            P = M ? M.toStringTag : void 0;
        var H = Object.prototype.toString;
        var N = M ? M.toStringTag : void 0;
        function D(e) {
            return null == e
                ? void 0 === e
                    ? "[object Undefined]"
                    : "[object Null]"
                : N && N in Object(e)
                ? (function (e) {
                      var a = R.call(e, P),
                          s = e[P];
                      try {
                          e[P] = void 0;
                          var t = !0;
                      } catch (e) {}
                      var o = $.call(e);
                      return t && (a ? (e[P] = s) : delete e[P]), o;
                  })(e)
                : (function (e) {
                      return H.call(e);
                  })(e);
        }
        function G(e) {
            var s = a(e);
            return null != e && ("object" == s || "function" == s);
        }
        function B(e) {
            if (!G(e)) return !1;
            var a = D(e);
            return "[object Function]" == a || "[object GeneratorFunction]" == a || "[object AsyncFunction]" == a || "[object Proxy]" == a;
        }
        var F,
            W = I["__core-js_shared__"],
            Y = (F = /[^.]+$/.exec((W && W.keys && W.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + F : "";
        var J = Function.prototype.toString;
        var U = /^\[object .+?Constructor\]$/,
            X = Function.prototype,
            V = Object.prototype,
            K = X.toString,
            Q = V.hasOwnProperty,
            Z = RegExp(
                "^" +
                    K.call(Q)
                        .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                    "$"
            );
        function ee(e) {
            return (
                !(!G(e) || ((a = e), Y && Y in a)) &&
                (B(e) ? Z : U).test(
                    (function (e) {
                        if (null != e) {
                            try {
                                return J.call(e);
                            } catch (e) {}
                            try {
                                return e + "";
                            } catch (e) {}
                        }
                        return "";
                    })(e)
                )
            );
            var a;
        }
        function ae(e, a) {
            var s = (function (e, a) {
                return null == e ? void 0 : e[a];
            })(e, a);
            return ee(s) ? s : void 0;
        }
        var se = ae(I, "Map"),
            te = ae(Object, "create");
        var oe = Object.prototype.hasOwnProperty;
        var ne = Object.prototype.hasOwnProperty;
        function re(e) {
            var a = -1,
                s = null == e ? 0 : e.length;
            for (this.clear(); ++a < s; ) {
                var t = e[a];
                this.set(t[0], t[1]);
            }
        }
        function ie(e, s) {
            var t,
                o,
                n = e.__data__;
            return ("string" == (o = a((t = s))) || "number" == o || "symbol" == o || "boolean" == o ? "__proto__" !== t : null === t) ? n["string" == typeof s ? "string" : "hash"] : n.map;
        }
        function le(e) {
            var a = -1,
                s = null == e ? 0 : e.length;
            for (this.clear(); ++a < s; ) {
                var t = e[a];
                this.set(t[0], t[1]);
            }
        }
        (re.prototype.clear = function () {
            (this.__data__ = te ? te(null) : {}), (this.size = 0);
        }),
            (re.prototype.delete = function (e) {
                var a = this.has(e) && delete this.__data__[e];
                return (this.size -= a ? 1 : 0), a;
            }),
            (re.prototype.get = function (e) {
                var a = this.__data__;
                if (te) {
                    var s = a[e];
                    return "__lodash_hash_undefined__" === s ? void 0 : s;
                }
                return oe.call(a, e) ? a[e] : void 0;
            }),
            (re.prototype.has = function (e) {
                var a = this.__data__;
                return te ? void 0 !== a[e] : ne.call(a, e);
            }),
            (re.prototype.set = function (e, a) {
                var s = this.__data__;
                return (this.size += this.has(e) ? 0 : 1), (s[e] = te && void 0 === a ? "__lodash_hash_undefined__" : a), this;
            }),
            (le.prototype.clear = function () {
                (this.size = 0), (this.__data__ = { hash: new re(), map: new (se || C)(), string: new re() });
            }),
            (le.prototype.delete = function (e) {
                var a = ie(this, e).delete(e);
                return (this.size -= a ? 1 : 0), a;
            }),
            (le.prototype.get = function (e) {
                return ie(this, e).get(e);
            }),
            (le.prototype.has = function (e) {
                return ie(this, e).has(e);
            }),
            (le.prototype.set = function (e, a) {
                var s = ie(this, e),
                    t = s.size;
                return s.set(e, a), (this.size += s.size == t ? 0 : 1), this;
            });
        function de(e) {
            var a = (this.__data__ = new C(e));
            this.size = a.size;
        }
        (de.prototype.clear = function () {
            (this.__data__ = new C()), (this.size = 0);
        }),
            (de.prototype.delete = function (e) {
                var a = this.__data__,
                    s = a.delete(e);
                return (this.size = a.size), s;
            }),
            (de.prototype.get = function (e) {
                return this.__data__.get(e);
            }),
            (de.prototype.has = function (e) {
                return this.__data__.has(e);
            }),
            (de.prototype.set = function (e, a) {
                var s = this.__data__;
                if (s instanceof C) {
                    var t = s.__data__;
                    if (!se || t.length < 199) return t.push([e, a]), (this.size = ++s.size), this;
                    s = this.__data__ = new le(t);
                }
                return s.set(e, a), (this.size = s.size), this;
            });
        var ue = (function () {
            try {
                var e = ae(Object, "defineProperty");
                return e({}, "", {}), e;
            } catch (e) {}
        })();
        function ce(e, a, s) {
            "__proto__" == a && ue ? ue(e, a, { configurable: !0, enumerable: !0, value: s, writable: !0 }) : (e[a] = s);
        }
        function pe(e, a, s) {
            ((void 0 !== s && !q(e[a], s)) || (void 0 === s && !(a in e))) && ce(e, a, s);
        }
        var me,
            he = function (e, a, s) {
                for (var t = -1, o = Object(e), n = s(e), r = n.length; r--; ) {
                    var i = n[me ? r : ++t];
                    if (!1 === a(o[i], i, o)) break;
                }
                return e;
            },
            ye = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
            ge = ye && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
            be = ge && ge.exports === ye ? I.Buffer : void 0,
            fe = be ? be.allocUnsafe : void 0;
        var ke = I.Uint8Array;
        function ve(e, a) {
            var s,
                t,
                o = a ? ((s = e.buffer), (t = new s.constructor(s.byteLength)), new ke(t).set(new ke(s)), t) : e.buffer;
            return new e.constructor(o, e.byteOffset, e.length);
        }
        var we = Object.create,
            xe = (function () {
                function e() {}
                return function (a) {
                    if (!G(a)) return {};
                    if (we) return we(a);
                    e.prototype = a;
                    var s = new e();
                    return (e.prototype = void 0), s;
                };
            })();
        var ze,
            je,
            Se =
                ((ze = Object.getPrototypeOf),
                (je = Object),
                function (e) {
                    return ze(je(e));
                }),
            _e = Object.prototype;
        function qe(e) {
            var a = e && e.constructor;
            return e === (("function" == typeof a && a.prototype) || _e);
        }
        function Ee(e) {
            return null != e && "object" == a(e);
        }
        function Ae(e) {
            return Ee(e) && "[object Arguments]" == D(e);
        }
        var Ce = Object.prototype,
            Le = Ce.hasOwnProperty,
            Te = Ce.propertyIsEnumerable,
            Ie = Ae(
                (function () {
                    return arguments;
                })()
            )
                ? Ae
                : function (e) {
                      return Ee(e) && Le.call(e, "callee") && !Te.call(e, "callee");
                  },
            Me = Array.isArray;
        function Oe(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
        }
        function Re(e) {
            return null != e && Oe(e.length) && !B(e);
        }
        var $e = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
            Pe = $e && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
            He = Pe && Pe.exports === $e ? I.Buffer : void 0,
            Ne =
                (He ? He.isBuffer : void 0) ||
                function () {
                    return !1;
                },
            De = Function.prototype,
            Ge = Object.prototype,
            Be = De.toString,
            Fe = Ge.hasOwnProperty,
            We = Be.call(Object);
        var Ye = {};
        (Ye["[object Float32Array]"] = Ye["[object Float64Array]"] = Ye["[object Int8Array]"] = Ye["[object Int16Array]"] = Ye["[object Int32Array]"] = Ye["[object Uint8Array]"] = Ye["[object Uint8ClampedArray]"] = Ye[
            "[object Uint16Array]"
        ] = Ye["[object Uint32Array]"] = !0),
            (Ye["[object Arguments]"] = Ye["[object Array]"] = Ye["[object ArrayBuffer]"] = Ye["[object Boolean]"] = Ye["[object DataView]"] = Ye["[object Date]"] = Ye["[object Error]"] = Ye["[object Function]"] = Ye["[object Map]"] = Ye[
                "[object Number]"
            ] = Ye["[object Object]"] = Ye["[object RegExp]"] = Ye["[object Set]"] = Ye["[object String]"] = Ye["[object WeakMap]"] = !1);
        var Je = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
            Ue = Je && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
            Xe = Ue && Ue.exports === Je && L.process,
            Ve = (function () {
                try {
                    var e = Ue && Ue.require && Ue.require("util").types;
                    return e || (Xe && Xe.binding && Xe.binding("util"));
                } catch (e) {}
            })(),
            Ke = Ve && Ve.isTypedArray,
            Qe = Ke
                ? (function (e) {
                      return function (a) {
                          return e(a);
                      };
                  })(Ke)
                : function (e) {
                      return Ee(e) && Oe(e.length) && !!Ye[D(e)];
                  };
        function Ze(e, a) {
            if (("constructor" !== a || "function" != typeof e[a]) && "__proto__" != a) return e[a];
        }
        var ea = Object.prototype.hasOwnProperty;
        function aa(e, a, s) {
            var t = e[a];
            (ea.call(e, a) && q(t, s) && (void 0 !== s || a in e)) || ce(e, a, s);
        }
        var sa = /^(?:0|[1-9]\d*)$/;
        function ta(e, s) {
            var t = a(e);
            return !!(s = null == s ? 9007199254740991 : s) && ("number" == t || ("symbol" != t && sa.test(e))) && e > -1 && e % 1 == 0 && e < s;
        }
        var oa = Object.prototype.hasOwnProperty;
        function na(e, a) {
            var s = Me(e),
                t = !s && Ie(e),
                o = !s && !t && Ne(e),
                n = !s && !t && !o && Qe(e),
                r = s || t || o || n,
                i = r
                    ? (function (e, a) {
                          for (var s = -1, t = Array(e); ++s < e; ) t[s] = a(s);
                          return t;
                      })(e.length, String)
                    : [],
                l = i.length;
            for (var d in e) (!a && !oa.call(e, d)) || (r && ("length" == d || (o && ("offset" == d || "parent" == d)) || (n && ("buffer" == d || "byteLength" == d || "byteOffset" == d)) || ta(d, l))) || i.push(d);
            return i;
        }
        var ra = Object.prototype.hasOwnProperty;
        function ia(e) {
            if (!G(e))
                return (function (e) {
                    var a = [];
                    if (null != e) for (var s in Object(e)) a.push(s);
                    return a;
                })(e);
            var a = qe(e),
                s = [];
            for (var t in e) ("constructor" != t || (!a && ra.call(e, t))) && s.push(t);
            return s;
        }
        function la(e) {
            return Re(e) ? na(e, !0) : ia(e);
        }
        function da(e) {
            return (function (e, a, s, t) {
                var o = !s;
                s || (s = {});
                for (var n = -1, r = a.length; ++n < r; ) {
                    var i = a[n],
                        l = t ? t(s[i], e[i], i, s, e) : void 0;
                    void 0 === l && (l = e[i]), o ? ce(s, i, l) : aa(s, i, l);
                }
                return s;
            })(e, la(e));
        }
        function ua(e, a, s, t, o, n, r) {
            var i = Ze(e, s),
                l = Ze(a, s),
                d = r.get(l);
            if (d) pe(e, s, d);
            else {
                var u,
                    c = n ? n(i, l, s + "", e, a, r) : void 0,
                    p = void 0 === c;
                if (p) {
                    var m = Me(l),
                        h = !m && Ne(l),
                        y = !m && !h && Qe(l);
                    (c = l),
                        m || h || y
                            ? Me(i)
                                ? (c = i)
                                : Ee((u = i)) && Re(u)
                                ? (c = (function (e, a) {
                                      var s = -1,
                                          t = e.length;
                                      for (a || (a = Array(t)); ++s < t; ) a[s] = e[s];
                                      return a;
                                  })(i))
                                : h
                                ? ((p = !1),
                                  (c = (function (e, a) {
                                      if (a) return e.slice();
                                      var s = e.length,
                                          t = fe ? fe(s) : new e.constructor(s);
                                      return e.copy(t), t;
                                  })(l, !0)))
                                : y
                                ? ((p = !1), (c = ve(l, !0)))
                                : (c = [])
                            : (function (e) {
                                  if (!Ee(e) || "[object Object]" != D(e)) return !1;
                                  var a = Se(e);
                                  if (null === a) return !0;
                                  var s = Fe.call(a, "constructor") && a.constructor;
                                  return "function" == typeof s && s instanceof s && Be.call(s) == We;
                              })(l) || Ie(l)
                            ? ((c = i),
                              Ie(i)
                                  ? (c = da(i))
                                  : (G(i) && !B(i)) ||
                                    (c = (function (e) {
                                        return "function" != typeof e.constructor || qe(e) ? {} : xe(Se(e));
                                    })(l)))
                            : (p = !1);
                }
                p && (r.set(l, c), o(c, l, t, n, r), r.delete(l)), pe(e, s, c);
            }
        }
        function ca(e, a, s, t, o) {
            e !== a &&
                he(
                    a,
                    function (n, r) {
                        if ((o || (o = new de()), G(n))) ua(e, a, r, s, ca, t, o);
                        else {
                            var i = t ? t(Ze(e, r), n, r + "", e, a, o) : void 0;
                            void 0 === i && (i = n), pe(e, r, i);
                        }
                    },
                    la
                );
        }
        function pa(e) {
            return e;
        }
        function ma(e, a, s) {
            switch (s.length) {
                case 0:
                    return e.call(a);
                case 1:
                    return e.call(a, s[0]);
                case 2:
                    return e.call(a, s[0], s[1]);
                case 3:
                    return e.call(a, s[0], s[1], s[2]);
            }
            return e.apply(a, s);
        }
        var ha = Math.max;
        var ya = ue
                ? function (e, a) {
                      return ue(e, "toString", {
                          configurable: !0,
                          enumerable: !1,
                          value:
                              ((s = a),
                              function () {
                                  return s;
                              }),
                          writable: !0,
                      });
                      var s;
                  }
                : pa,
            ga = Date.now;
        var ba = (function (e) {
            var a = 0,
                s = 0;
            return function () {
                var t = ga(),
                    o = 16 - (t - s);
                if (((s = t), o > 0)) {
                    if (++a >= 800) return arguments[0];
                } else a = 0;
                return e.apply(void 0, arguments);
            };
        })(ya);
        function fa(e, a) {
            return ba(
                (function (e, a, s) {
                    return (
                        (a = ha(void 0 === a ? e.length - 1 : a, 0)),
                        function () {
                            for (var t = arguments, o = -1, n = ha(t.length - a, 0), r = Array(n); ++o < n; ) r[o] = t[a + o];
                            o = -1;
                            for (var i = Array(a + 1); ++o < a; ) i[o] = t[o];
                            return (i[a] = s(r)), ma(e, this, i);
                        }
                    );
                })(e, a, pa),
                e + ""
            );
        }
        var ka,
            va =
                ((ka = function (e, a, s) {
                    ca(e, a, s);
                }),
                fa(function (e, s) {
                    var t = -1,
                        o = s.length,
                        n = o > 1 ? s[o - 1] : void 0,
                        r = o > 2 ? s[2] : void 0;
                    for (
                        n = ka.length > 3 && "function" == typeof n ? (o--, n) : void 0,
                            r &&
                                (function (e, s, t) {
                                    if (!G(t)) return !1;
                                    var o = a(s);
                                    return !!("number" == o ? Re(t) && ta(s, t.length) : "string" == o && (s in t)) && q(t[s], e);
                                })(s[0], s[1], r) &&
                                ((n = o < 3 ? void 0 : n), (o = 1)),
                            e = Object(e);
                        ++t < o;

                    ) {
                        var i = s[t];
                        i && ka(e, i, t, n);
                    }
                    return e;
                })),
            wa = "gameState_la",
            xa = { boardState: null, evaluations: null, rowIndex: null, solution: null, gameStatus: null, lastPlayedTs: null, lastCompletedTs: null, restoringFromLocalStorage: null, hardMode: !1 },
            gameModeKey = "gameMode_la",
            unlimitedGameStateKey = "unlimitedGameState_la";
        function za() {
            var e = window.localStorage.getItem(wa) || JSON.stringify(xa);
            return JSON.parse(e);
        }
        function getGameMode() {
            return window.localStorage.getItem(gameModeKey) || "daily";
        }
        function setGameMode(e) {
            window.localStorage.setItem(gameModeKey, e);
        }
        function getUnlimitedGameState() {
            var e = window.localStorage.getItem(unlimitedGameStateKey) || JSON.stringify(xa);
            return JSON.parse(e);
        }
        function setUnlimitedGameState(e) {
            window.localStorage.setItem(unlimitedGameStateKey, JSON.stringify(e));
        }
        function saveGameState(gameState, isUnlimited) {
            if (isUnlimited) {
                setUnlimitedGameState(gameState);
            } else {
                ja(gameState);
            }
        }
        function ja(e) {
            var a = za();
            !(function (e) {
                window.localStorage.setItem(wa, JSON.stringify(e));
            })(va(a, e));
        }
        var Sa = document.createElement("template");
        const swCurrentDate = new Date();
        let swCurrentYear = swCurrentDate.getFullYear();

        Sa.innerHTML =
            '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Hard Mod</div>\n          <div class="description">Otkrivena slova moraju biti korišćena u narednim pokušajima</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Tamna Tema</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Režim Boja za Daltoniste</div>\n          <div class="description">Boje visokog kontrasta</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Kontakt</div>\n        </div>\n        <div class="control">\n          <a href="mailto:srpskiwordle@gmail.com" title="srpskiwordle@gmail.com">srpskiwordle@gmail.com</a>\n          \n        </div>\n      </div>\n    </section>\n  </div>\n  <div id="footnote">\n    <div id="copyright">&copy;' + swCurrentYear + '. Sva Prava Zadržana.</div>\n    <div>\n      <div id="puzzle-number"></div>\n      <div id="hash"></div>\n    </div>\n  </div>\n';
        var _a = (function (e) {
            r(t, e);
            var a = h(t);
            function t() {
                var e;
                return s(this, t), n(p((e = a.call(this))), "gameApp", void 0), e.attachShadow({ mode: "open" }), e;
            }
            return (
                o(t, [
                    {
                        key: "connectedCallback",
                        value: function () {
                            var e,
                                a = this;
                            this.shadowRoot.appendChild(Sa.content.cloneNode(!0)),
                                (this.shadowRoot.querySelector("#hash").textContent = null === (e = window.wordle) || void 0 === e ? void 0 : e.hash),
                                (this.shadowRoot.querySelector("#puzzle-number").textContent = "#".concat(this.gameApp.dayOffset)),
                                this.shadowRoot.addEventListener("game-switch-change", function (e) {
                                    e.stopPropagation();
                                    var s = e.detail,
                                        t = s.name,
                                        o = s.checked,
                                        n = s.disabled;
                                    a.dispatchEvent(new CustomEvent("game-setting-change", { bubbles: !0, composed: !0, detail: { name: t, checked: o, disabled: n } })), a.render();
                                }),
                                this.render();
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var e = document.querySelector("body");
                            e.classList.contains("nightmode") && this.shadowRoot.querySelector("#dark-theme").setAttribute("checked", ""),
                                e.classList.contains("colorblind") && this.shadowRoot.querySelector("#color-blind-theme").setAttribute("checked", "");
                            var a = za();
                            a.hardMode && this.shadowRoot.querySelector("#hard-mode").setAttribute("checked", ""),
                                a.hardMode ||
                                    "IN_PROGRESS" !== a.gameStatus ||
                                    0 === a.rowIndex ||
                                    (this.shadowRoot.querySelector("#hard-mode").removeAttribute("checked"), this.shadowRoot.querySelector("#hard-mode").setAttribute("disabled", ""));
                        },
                    },
                ]),
                t
            );
        })(c(HTMLElement));
        customElements.define("game-settings", _a);
        var qa = document.createElement("template");
        qa.innerHTML =
            '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
        var Ea,
            Aa = (function (e) {
                r(t, e);
                var a = h(t);
                function t() {
                    var e;
                    return s(this, t), n(p((e = a.call(this))), "_duration", void 0), e.attachShadow({ mode: "open" }), e;
                }
                return (
                    o(t, [
                        {
                            key: "connectedCallback",
                            value: function () {
                                var e = this;
                                this.shadowRoot.appendChild(qa.content.cloneNode(!0));
                                var a = this.shadowRoot.querySelector(".toast");
                                (a.textContent = this.getAttribute("text")),
                                    (this._duration = this.getAttribute("duration") || 1e3),
                                    "Infinity" !== this._duration &&
                                        setTimeout(function () {
                                            a.classList.add("fade");
                                        }, this._duration),
                                    a.addEventListener("transitionend", function (a) {
                                        e.parentNode.removeChild(e);
                                    });
                            },
                        },
                    ]),
                    t
                );
            })(c(HTMLElement));
        function Ca() {
            dataLayer.push(arguments);
        }
        customElements.define("game-toast", Aa), (window.dataLayer = window.dataLayer || []), Ca("js", new Date());
        Ca("config", "G-TEM8DCXQDQ", { app_version: null === (Ea = window.wordle) || void 0 === Ea ? void 0 : Ea.hash, debug_mode: !1 });
        var La = [
            "dobro","nisam","zašto","nešto","hvala","možda","treba","ništa","molim","hajde","jedan","mnogo","vreme","znači","posao","nikad","jeste","nemoj","dobar","život","svoje","stvar","danas","odmah","tvoja","video","veoma","tvoje","jesam","nismo","nemam","čovek","novac","sutra","drugi","dosta","prema","mesto","ovamo","jedna","drago","način","budem","posle","dobra","vrata","ovako","pravo","nakon","teško","svaki","super","jedno","pravi","momci","majka","pomoć","pusti","preko","dakle","kakav","budeš","ǌegov","tačno","misli","imati","mrtav","priča","nekog","bismo","vrati","drugo","posla","stani","tvoju","skoro","nazad","došli","važno","pitam","jutro","briga","otići","došla","kakva","ǉubav","vaǉda","poput","ideja","znati","čudno","druge","ubiti","prava","pored","draga","jasno","svetu","ikada","mojoj","stari","osoba","negde","dvoje","blizu","svega","smrti","šanse","sinoć","svima","momak","dečko","dragi","ispod","mesta","pošto","divno","oboje","takav","deset","svako","druga","dobre","uzeti","sveta","jedva","poziv","zemǉe","barem","mrtva","dobri","sreće","vesti","tokom","nekad","kasno","često","inače","ubica","našla","vrsta","bitno","sedam","slike","šteta","tvoji","stara","napad","priče","pismo","lično","umrla","mesec","kakvo","zemǉa","svuda","iznad","slika","svaka","dokaz","kǌigu","škole","zvala","mozak","minut","ovuda","okolo","izbor","glavi","zatim","takva","glupo","zadǌi","bravo","ulazi","avion","ǌihov","zakon","ručak","lakše","majke","kǌige","otkud","izaći","mrtvi","glava","hrane","agent","prave","karte","račun","sunce","svoja","kǌiga","onako","korak","skroz","ćerka","mlada","gotov","otkad","tajna","žrtva","dečak","mnogi","nigde","jezik","stići","znaci","divan","glupa","strah","hotel","hrana","proći","zvati","mirno","davno","devet","vlada","čisto","žrtve","mladi","narod","izvan","težak","sreća","odmor","desno","seksi","očito","divna","snage","tajne","stare","vredi","zlato","usput","šansa","pakao","glupi","zbiǉa","grupa","škola","kriva","metak","ulice","staǌe","savet","pamet","zadǌe","troje","kartu","jesti","otkaz","majci","taksi","lažeš","uveče","motor","sumǌe","važan","osobe","hitno","noćas","traje","govor","mnoge","droge","pijan","kamen","miris","ǌenom","bivši","heroj","izlaz","bliže","čudan","vrste","treći","usred","takvo","madam","petak","vaših","blago","tetka","nalog","kakvi","komad","brige","borba","izvor","snaga","grudi","pisma","odnos","ideje","makar","jedni","rođen","borbe","kosti","ubice","đubre","vruće","banke","udari","ortak","pesma","ptica","teška","gazda","ubrzo","potez","grupe","cveće","vatra","krivi","bomba","odelo","zadǌa","širom","čitav","vetar","ptice","miran","smeće","čista","ulica","braća","obzir","vatre","šešir","tužno","važna","pažǌa","gadno","dokle","papir","vozač","stati","ekipa","tvrdi","sveti","uzrok","princ","rizik","model","krila","viski","pesme","velik","izraz","kombi","mlade","jadni","šerif","čudna","mrtve","staro","lopov","mačka","kćeri","oblik","bogat","visok","nevin","bombe","oluja","stoga","mleko","svrhe","jadna","takvi","kaput","otrov","kazna","skupa","žurka","paket","virus","droga","toplo","gladi","podne","uživo","crkve","budan","umalo","dosad","vlade","požar","rođak","čuvar","udati","pasti","pisac","mlađi","krivo","znaǌe","datum","koleǆ","nered","pilot","ravno","osmeh","anđeo","muško","umrli","karta","sviǌa","teret","alarm","čamac","marta","znaǌa","crkva","mačke","sprat","uspeh","snovi","zlata","obale","motiv","igrač","čisti","tužna","pluća","ludak","lekar","plate","ćerke","dugme","tajno","plava","bazen","tačka","pažǌe","vožǌa","duplo","teren","dolar","tužan","banka","zamka","bivša","čudne","zmija","retko","tačke","odeća","alibi","jadno","dobit","lovac","mrtvo","javno","časti","teške","odbor","kazne","kolač","plavi","centi","zdrav","glupe","jasan","parče","gosti","kasni","kanal","lažov","lopta","treće","vojni","divne","potom","sviǌe","taman","ponos","nemci","humor","treća","demon","časni","svrha","preći","noćna","torbe","major","čizme","obrok","jadan","stene","mamac","radǌe","ponoć","klase","razum","nakit","dubǉe","firma","mirna","sport","scena","vlast","besan","slova","raǌen","sveže","sudar","uloga","desna","zapad","pojas","ručka","popis","nauka","slabo","santa","sluga","samom","muški","budna","tunel","proba","lični","firme","vožǌe","lista","dovde","zvuci","bande","sever","ispit","roman","lažni","čiste","gužva","razne","slava","lažna","divǉe","zasad","krava","ekipe","šifra","imaǌe","trupe","lične","trave","hitan","sumǌa","stopa","misao","hitne","kofer","šećer","album","stric","okean","slaba","zvono","hteti","zveri","scene","mreže","bolno","večno","pevam","trake","vezan","junak","lažne","torba","lažno","borac","uloge","noćne","plavo","muzej","rodni","lanac","štete","spoǉa","pasoš","bliži","lutka","ritam","ratni","sporo","bitke","stena","banda","mreža","istok","češće","divǉi","divni","ružna","april","mudro","marka","obući","učiti","porez","talas","trava","žurke","pauza","zmije","liste","pepeo","zamak","vežba","jasna","blagi","lutke","noćni","krađa","bitan","tumor","praǌe","ploče","krave","tvrde","slave","ružan","radno","lovci","kuvar","pogon","dodir","nauke","odela","diler","pesak","prǉav","tepih","sveto","savez","puste","ploča","traka","metal","nežno","maska","unuka","bitna","čvrst","maske","južno","čudni","vodič","vojna","senke","božji","izlet","poker","božja","zvona","robot","divǉa","kavez","radǌa","odaje","moćni","debeo","klasa","moćan","dlake","braon","božje","učeǌe","ugled","grubo","plata","pucaǌ","toraǌ","časna","voǉan","puška","mržǌe","otpor","torta","bingo","važni","svađa","javni","sukob","besna","šator","prsti","blaga","mater","viđen","stroj","pošta","topla","logor","dupli","preci","patǌe","odred","rubǉe","voǉno","farme","sluge","stres","lična","čudak","kućni","otvor","taǌir","oblak","slabi","ocene","tigar","creva","čekić","pacov","mlađa","žedan","teški","slovo","ručno","zombi","poraz","krađe","naziv","bivše","vitez","pasuǉ","dotle","lakši","staza","oklop","lopte","svete","gadan","švorc","oglas","testa","motel","kriza","svađe","ormar","skupi","imaǌa","salon","balon","paǉbu","vežbe","nizak","moćna","smela","drama","staǌa","senka","okrug","bonus","rasti","jakna","mržǌa","vruća","žrtvi","slepi","torte","blato","nađen","tačan","pleme","kusur","moral","sapun","mašte","minus","svest","nećak","kruna","metar","mudar","kafić","slepa","patka","tetke","volan","tenis","jesen","krvni","mamin","sveće","peške","ivice","delta","palac","ružne","upola","naglo","otpad","iznos","pečat","klima","prići","obraz","radni","tkivo","tatin","vreća","klovn","drage","farma","opšte","tkiva","lišće","rebra","nužno","smene","kantu","tamna","mašta","oštro","napet","zglob","pčele","odsek","tople","prase","ulozi","desni","sitne","ekran","točak","brada","pojam","slabe","skupe","ratne","pošte","gluma","cimer","žurba","smeli","besni","muške","biǉka","crtež","nežan","krive","magla","hokej","flota","buǆet","vreće","hitac","pozor","probe","gorǌi","ishod","flaše","gadna","šifre","očevi","horor","lepša","lokal","oštar","muška","front","nafte","puter","brane","ragbi","oteta","delić","obala","radar","zamke","flaša","zajam","plaža","krzno","jadne","mason","krize","budni","ranac","slepo","drame","brave","oskar","mokar","ženka","kupac","odraz","šetǌa","bajke","tamne","daske","kugle","radna","opere","autor","narav","tovar","moćno","runda","pruge","okret","povrh","patke","crevo","tačna","posed","kopno","karma","mokra","ninǆa","zubar","kocka","baron","južni","norma","kugla","jetra","šesti","dućan","kašaǉ","bunar","južna","sveža","zbrka","višak","zapis","pčela","pseto","metro","pumpa","balet","lažan","slati","vrelo","gruba","limun","lampe","borci","nalaz","večni","tamno","brade","masti","pevač","sedmi","mačak","strog","prvak","moron","opako","senat","lampa","patǌa","napor","zavet","pumpe","domar","retka","štene","uslov","uteha","draže","otkup","kocke","lepši","ženke","silno","paǉba","moćne","omlet","čopor","olako","grane","tango","perje","čelik","časno","jagǌe","koǌak","vagon","obred","sajam","okvir","žurbe","povez","pehar","stoka","sreda","iskaz","serum","ǉupka","fazon","krema","prost","gepek","kolac","dubok","start","zavoj","lukav","potok","nosač","barut","bašte","kanǆe","obrve","bitne","mršav","vrela","sitna","veran","marke","turbo","kante","gusto","lonac","redak","fokus","sprej","omega","orman","samac","upale","tačne","fraza","ručni","davež","jedra","disko","aveti","drzak","laser","seǉak","lepak","tanka","jakne","krune","jelen","petǉe","slaǌe","mravi","sirup","tužba","maǌak","stado","ǉutǌe","konac","bajka","kaǌon","kadar","buket","ravan","mišić","lagan","veseo","uskrs","verna","sveća","dekan","gadne","mekan","širok","verni","grana","cigle","pokoǉ","cifre","šetǌe","kopna","nacrt","žarko","zaliv","kanta","kupus","citat","table","fotke","jahač","obuka","naići","petǉa","opera","mokro","kliše","pohod","sveži","oprez","vrući","garda","garde","gazde","gospa","kopǉa","nafta","meǌač","tečaj","pisci","šesto","šunka","biser","tabla","režim","raǌiv","bašta","mesar","makac","ugriz","ukras","monah","bačen","kečap","stope","civil","tempo","votka","splav","kanap","ǌuška","krzna","pamuk","zamah","ucena","orden","zadah","pruga","jeziv","tamni","beton","sukǌe","jedro","tavan","vrane","magle","lakat","kamin","najam","tašna","maler","šamar","korov","uspon","vosak","mator","kovač","truba","vrana","fetus","ocena","rodeo","fitiǉ","bučno","talac","biber","kvaka","crven","bolan","zrelo","klupe","gulaš","žvake","trkač","vedra","klime","vašar","brend","dizel","šofer","zrela","večna","bubaǌ","gozba","pasta","forma","ambar","oruđe","panda","svila","zraci","bleda","vedro","gǉive","cista","haker","žvaka","šipke","zakup","zanat","patak","sukǌa","ekser","veren","sveci","efekt","kobra","kožne","nužde","ǉutǌa","ninǆe","crkla","jarak","zalog","gadni","rubin","iskra","gošća","kupka","maslo","debǉi","kokoš","labud","venac","larve","atomi","kokos","drvce","unuče","lanci","puder","mazga","cigla","vafle","fetiš","mačji","korpa","besno","šǉiva","bojno","farba","gamad","saǌar","vaške","masni","gǉiva","kotao","fioke","masne","pauci","orion","klupa","pasji","davna","bedra","farsa","verne","lakša","notes","peron","zubić","burme","cifra","zarez","kožna","beleg","daǉǌe","cimet","zrnca","zavod","bizon","berza","verno","puǌač","burma","derbi","šipka","šiǉak","zubni","bučan","kožni","mazge","draža","fosil","ǆoker","besne","fakat","paste","burad","ǆokej","čitač","masna","fioka","dvoja","dabar","butik","merač","vajde","ciste","zrele","berba","patos","farbe","glina","burno","dašak","pasus","rampa","kopča","debǉa","zreli","galeb","alias","vepar","pevac","maser","bučni","paǉbe","zabit","bucko","bučna","kopče","šiške","kopač","benǆo","sauna","kanda","dedin","usevi","ǌuške","medij","lakom","kvake","kanǆa","rerne","mačor","alati","porta","štake","perač","budno","nulti","odane","samci","bodǉe","parni","gǌida","akord","ambis","posne","posno","posna","peǌač","piton","pitak","seoca","pioni","pilav","seoce","pozne","pozno","pipci","svota","redar","regal","rosna","reski","repić","rafal","ratar","rizla","rikša","rogač","rogoz","rečca","proje","pršut","prsat","samba","salva","salve","preči","preče","radan","psići","ptići","rđave","punđe","punđa","rujno","rđava","pulen","frtaǉ","fluid","fosne","foaje","harač","fušer","freje","fjord","uštva","uštap","uštrb","ujedi","hteǌe","hteǌa","humke","humka","carić","umǌak","umeti","utaje","utaja","učena","ušata","ušato","utući","šahta","šaǉiv","škrge","šerpe","šerpa","ǆibra","ǆepna","ǆepić","ǆezve","ǆezva","šanac","ǆukci","ǆunke","ǆunka","šupǉa","štule","štula","čađav","čapǉe","čapǉa","čajna","čvrga","cucla","čuvan","čuven","čulni","čulne","čulna","čoček","čišći","čišće","čoban","čujan","češća","čeǉad","česme","česma","čerge","čerga","čitka","čitan","čitak","čirak","čišća","čičak","čipka","čipke","čiode","čioda","stege","stega","stepe","stepa","stran","stoti","tanan","sulud","sužen","sudbe","suvǉi","suvǉe","sudba","suzni","suzne","sužǌi","sušti","sušte","sušan","skele","skela","sejač","sifon","sinov","snahe","sokić","sloge","sloga","smesa","smele","ćuran","ćumur","ćumez","tuǉan","ćilim","ćivot","ćorav","ćevap","uzvik","uzmak","uzice","uzane","užasi","užadi","udica","udice","tečne","tikve","tkano","tkaǉe","tegić","tvrđi","tvrđe","tvrđa","tesni","tenor","tufne","tumač","tupav","trase","trafo","trole","boǉke","braǌe","brkat","breza","breze","brzak","bleđa","bleđe","bleđi","bolid","bolni","vidni","višǌa","visak","buǆak","varoš","večan","vazal","ǌisak","gušća","kniks","burne","vrtni","bivol","gabor","parno","fazni","šišan","nulta","agens","fazno","nulte","majur","konak","šišač","bujno","nužan","vegan","parip","fešte","vaška","šiven","odeon","šiǉat","fazan","vučno","vršni","vajar","zabat","faune","kovan","alave","vučić","bunda","mačić","macan","alavo","bušen","bećar","vučje","kodno","kolan","vajka","basna","barke","batak","barže","barža","bajan","bajat","afekt","autić","arome","arhiv","astma","aršin","bazna","bazne","babin","babun","ašovi","badem","bager","dleto","gulag","gusti","duvač","dueli","egzil","evnuh","đakon","đeram","đačka","đačić","đačke","đačko","đački","drven","drati","drvǉe","drvno","drvni","drčan","druid","vrsna","vrsni","vrsne","vreǌe","vreǌa","vrlet","gibak","vozni","vozić","viǌak","voǉne","gluve","globa","gorke","gorki","gonič","zamor","mazni","buran","davni","žǌeti","ciǉna","saǌač","vrške","ǉutit","sapet","lavor","fakir","bušno","karme","buǉav","dekor","nužni","obadi","gǌili","satir","vučna","lagum","delte","cepke","vedri","lavov","satrt","budne","vučen","kajak","butna","pevci","mazno","mazne","pajac","lauta","bujne","konto","birač","parna","sajla","vekne","buđav","vezni","crnke","ǌiska","bulka","vezno","kolos","nulto","kopan","larma","fakta","guǉen","kaǉav","kaǉen","zazor","kobno","vršna","daǉni","bukov","burna","pauni","davan","anode","fazna","vaǉan","bunde","vučni","buvǉa","satne","alavi","vajda","kobna","larva","kasač","zaova","marže","zadrt","kaste","deblo","medna","mažen","alava","bedro","kožar","škamp","anoda","kanui","maher","pasje","pačje","bujna","aorte","ameba","felna","lasta","anfas","vunen","papin","paran","guǌče","dever","zadan","zubne","lanče","aloje","finte","vajni","safir","vučja","nuđen","antre","zulum","šinto","bucka","kolor","vajna","kodna","crkle","bešǌa","sajle","vađen","bušač","kolar","mazna","mazut","mazan","sarme","saǌan","amper","kolut","crklo","davne","anali","buđen","gǌilo","feudi","pašče","meden","fišek","deobe","kauči","laute","fenol","cirus","zadat","gažen","lavǉa","nužne","kvazi","kapka","bukve","aduti","kasir","vezne","burek","packe","bešǌi","šiǉci","kopci","masiv","bujan","kožuh","biroi","širen","aneks","zreǌa","bukač","šetač","vaǉak","lavǉi","lavić","mašna","sađen","bezub","daǉna","maǉav","sante","dagǌe","deder","kozji","vaǉci","zurla","zasek","paraf","ǉutić","gušći","kobni","šićar","amebe","crnka","pacer","budak","pasaž","ciǉne","venci","satić","daǉne","vrtne","pevan","šejka","zanet","ciǉno","vezir","aleje","vučji","bučne","medno","dezen","sačma","cirka","pasat","mašne","sačme","bidon","derle","bušni","šiber","zurle","sarma","šiǌel","burag","azoti","satni","bešǌe","koban","konop","lavǉe","daǉǌi","butni","alasi","fešta","akrep","medni","fikus","burni","sahat","fauna","akter","kačen","bukva","vršak","kargo","vezna","konci","nužda","aorta","aktiv","bujni","crkli","lavež","kafei","paǌić","benav","felne","kobac","indus","kapak","koala","ganut","busen","vekna","kozje","katun","sasut","šefov","bušan","vrcav","zaove","kožno","vedre","finiš","šipak","garav","zreǌe","gǌide","saten","laste","vrtno","ceđen","daire","labav","šibǉe","kapci","sarač","pasja","cinik","belaj","kolaž","kodni","farse","butan","anker","medne","zalet","saǌiv","nužna","magma","gušće","vedar","debǉe","debla","feder","bulke","zanos","agrum","velur","deoba","konus","vezen","meket","biran","zubat","pačja","daǉǌa","alkos","zrnce","zalud","kasna","berbe","dvori","magme","filet","galon","agrar","laici","masan","vučne","pačji","zapet","butke","akril","cijuk","mačja","škart","falte","kasta","kozak","berač","dveri","galop","depoi","deran","šiban","ciǉan","crvić","kanon","finta","kobne","behar","mačje","amovi","dekin","parne","kozja","papci","saune","bista","ǌiske","zupci","bušne","fijuk","zubac","aloja","packa","paǉen","larme","butne","kobre","aleja","vajne","falta","ciǉni","garež","mural","mutav","mrene","moǉen","motke","motka","mrsne","mrsno","mrsni","mrmot","nepun","nepce","nepca","nehat","nejak","neuka","neuko","neuki","neven","nožić","nožna","nogar","nanos","lonci","ǉubak","ǉigav","ǉiǉan","ǉuspa","lučni","lujke","livci","limbo","limfa","limar","lokne","lišaj","mišar","mider","miner","mogul","modle","mlako","melez","memla","marža","mekša","mekši","mekše","mente","menta","merak","menza","menze","mambe","meren","merna","merka","mesna","mesno","mesni","osice","osica","osvrt","oruđa","opore","opora","opiti","orlić","oriti","oraǌe","pagan","pažen","palež","palma","pazuh","porte","paori","panoi","panǆe","otpis","oǆaci","ovčar","ovčje","ovčja","ovlaš","odano","nošǌa","nošǌe","obest","nosat","nosna","notna","nosne","nosno","notar","obran","obrti","obodi","omaǌa","omaǌi","olaki","ološi","oluci","opalo","opeke","opela","omoti","oniže","oniža","oniži","odran","odron","oksid","okuke","okuka","idila","idile","znano","zetov","zenit","zebǌe","zicer","zloće","zloba","zigot","zečić","zečji","zidni","zidar","zidne","zidna","inati","jedar","jarci","jasen","jemac","jecaj","jedre","jelek","iskap","jarma","jarki","jarke","jarka","javor","jagme","jagma","žvala","žbica","žaren","žarač","žarki","žešći","žižak","živǉa","živǉi","žedno","žedne","ždral","žezlo","želei","epske","etaže","etaža","etapa","eseji","esnaf","emajl","ekcem","edikt","epovi","epoha","epika","žabǉi","žabǉa","žaoka","žaoke","etape","eskim","začet","zgode","zgoda","žrvaǌ","žitka","žitko","žitna","žitne","žitno","žučni","žučne","žučno","zasut","žurni","žuran","župan","žurne","žurna","krcat","krhak","krhke","krčag","kruto","kuluk","kukoǉ","kršni","krvno","kraul","kreda","koǌić","košǌa","kramp","krpeǉ","krpar","kreja","kreje","krmak","krmeǉ","leden","lemur","lente","lenta","lekić","legat","levci","leđno","lečen","livac","leǌir","leske","letač","letve","letva","kucač","kucan","kufer","kupan","kupač","kumić","kunić","kuraž","kǉove","lađar","kujna","kujne","kǉova","kočić","kalaj","kalem","kvarc","kalfa","kalfe","kavge","kavga","kaiši","keper","kendo","kefir","jurte","junad","kelti","klike","klice","klinč","klema","kleka","kleke","kleme","koska","kotva","kotve","kotur","korzo","kilav","kiper","kinin","kinta","kibuc","kivna","kivan","kible","kibla","kivno","kivni","kivot","kiǌen","kićen","klapa","klane","klati","kiseo","kicoš","kišno","kifle"
            ],
            Ta = [
            "rekao","možeš","želim","moram","idemo","hoćeš","rekla","imamo","mogao","vidim","želiš","kažem","radiš","moraš","volim","znate","tobom","svoju","radim","vidiš","kažeš","čekaj","pravu","došao","imate","sraǌe","mogla","nećeš","jednu","mogli","nadam","niste","znamo","imala","sviđa","imaju","imali","radio","rekli","dobio","znala","voleo","ovoga","brini","našao","htela","nemaš","želeo","morao","glavu","zvuči","biste","voliš","čujem","kraju","uradi","znaju","pojma","novca","našli","mojim","sećaš","moglo","zovem","gradu","dajte","mrzim","nekim","mestu","ovome","sećam","bojim","zemǉi","pitao","traži","brate","kakve","čuješ","zemǉu","smiri","isuse","drugu","poslu","našeg","kraja","znali","školu","brata","kojoj","počeo","priču","idite","grada","druže","vašeg","misle","majku","nađem","živim","sobom","kojeg","mojih","jesmo","školi","stavi","kunem","ubije","zoveš","hranu","odemo","čekam","kojim","nekom","ideju","sliku","smeta","veruj","glave","uredu","onoga","imena","jedne","kupio","takve","uspeo","pažǌu","idete","svake","učini","stalo","našim","ubili","ubila","staǌu","hteli","vašem","našem","svemu","šansu","kurac","pitaš","naših","ulici","stoji","kreni","prati","ostao","živiš","sraǌa","svaku","našoj","došlo","čarli","gleda","bićeš","spava","doneo","pitaj","dođem","ukrao","momka","šališ","nekih","putem","uzmem","ženom","dođeš","majko","novog","brine","traže","kakvu","sreću","dobru","očima","nosim","vašim","doveo","rekoh","kojem","uzela","vodim","čuvaj","uđite","mojom","igraš","idiot","stiže","dajem","lagao","brodu","nosiš","držim","prvog","ǌenog","zvali","vašoj","dečki","vraća","jebem","nikog","uzeli","igram","tajnu","nađeš","živeo","kraǉa","kojom","henri","dečka","stanu","samog","jutra","umrem","pesmu","umire","malog","ubija","mrdaj","imenu","odeću","takvu","broda","osobu","vozim","funti","vatru","snagu","držiš","čekao","sazna","uzmeš","skini","plaši","prođe","prvom","vrstu","ubiću","sredi","ćerku","tajni","onome","momče","odete","celog","sunca","jedem","počne","oseća","šalim","borbu","cenim","izađe","jedeš","bacio","jebeš","mozga","govno","igrao","plati","braku","ubiju","pucaj","istom","kojih","nosio","izađi","kreće","novom","ulogu","košta","uzeću","drogu","pijem","kupim","david","celom","torbu","sreli","diraj","loptu","stolu","kučko","nadao","vraga","kurva","vozio","žurku","držao","žalim","klubu","momke","kučka","sinko","filmu","bojiš","voziš","padne","upali","vodio","raste","spasi","zvaću","kaznu","plaća","pucao","umreš","filma","napao","čekaš","smemo","zezaš","pišem","ulicu","pariz","ubicu","borbi","nekoj","krene","novim","odveo","parku","smrdi","vrate","stoje","crkvu","piješ","udala","istog","ǌenim","krije","vodiš","malom","ustaj","čitam","lažem","hitnu","počni","očiju","dodaj","služi","sluša","rukom","mamom","sedim","udara","decom","plana","uzima","malim","čitao","crkvi","plaži","imalo","stana","vodom","onima","listu","pojeo","bombu","obuci","posto","traga","mrziš","javio","borio","seksa","pisao","kǌizi","mogle","istoj","grupu","nikom","saǌao","javǉa","urade","nečeg","bogom","snova","ǌenoj","odbio","ućuti","svoga","nauči","čitaš","staru","umiru","snove","popio","banku","ubiće","kluba","planu","izdao","pušku","novih","prste","prate","nečim","bratu","stola","setim","ničeg","makni","mraku","tipom","popij","borim","žrtvu","braka","vožǌu","gubim","udata","setio","svira","igraj","scenu","listi","daješ","javim","kreći","plače","štiti","stane","banci","paklu","malih","ugasi","licem","uđemo","suzan","pauzu","slaže","goste","smrću","hrani","radǌu","živog","čuvam","glasa","stali","tatom","kupiš","pakla","kraǉu","obali","sinom","pišeš","ispao","grupi","smeju","činiš","gubiš","boriš","viđam","travu","sediš","pošao","zamku","adame","srela","nivou","prvih","istim","sledi","tortu","prvoj","brigu","šetǌu","mužem","stižu","ǌenih","krvǉu","mačku","sedeo","jaknu","celoj","štetu","poštu","rešio","mozgu","mosta","mrežu","pođeš","ekipu","šaǉem","ǌezin","vašom","peder","baviš","penis","bavim","kurve","mladu","čujte","utiče","nalik","traku","isusa","smete","krilo","maloj","skupo","hitna","masku","trudi","glumi","radǌi","počnu","nožem","saǌam","činim","srcem","krovu","slici","molio","poneo","firmu","služe","bojao","gospo","novoj","priči","novcu","preda","osobi","plave","važne","broju","primi","broja","tvoga","metra","smrad","ubilo","tačku","punom","imale","rešim","bitku","rodio","torbi","snaći","puške","bitka","idući","metka","ruski","kreću","biǉke","tekst","ružno","brinu","izveo","lošeg","mirni","ujače","kurvo","plaše","marko","farmi","guraj","ujaka","pazim","ubaci","pićem","hodaš","hodam","formi","autom","oseti","biram","farmu","zvoni","crnac","boǉeg","obalu","ivici","ustao","flašu","brani","vladu","ǉutiš","aferu","svrhu","oluje","suncu","našom","pušiš","bacim","nisko","parka","bežiš","plažu","rastu","sereš","čuvaš","pođem","radom","platu","govna","firmi","snima","obavi","znače","vragu","mleka","uživa","kauču","krade","odeće","skoči","kampu","loših","majki","delom","nudim","letim","oteli","divim","proda","poena","došle","pušim","zraka","kosom","imaću","smeje","mešaj","krivu","divnu","staze","punim","svome","žurbi","karla","viđaš","pucam","slažu","plači","stilu","mrzeo","viđao","upala","člana","slavu","šalio","krenu","crnog","vratu","pošla","oženi","mario","seksu","dišem","paziš","lepše","crnom","šupak","čuvao","kloni","filip","krugu","braće","ureda","kompa","lorde","briši","mraka","desne","poveo","šifru","davao","nogom","ikoga","pruža","živce","vojne","ulaze","pruži","gosta","prima","prsta","smeru","pucaš","ukusa","prvim","redom","onamo","bejbi","krova","zmaja","momku","bradu","skote","preti","belog","nivoa","prija","žurim","skali","spase","vince","droǉa","tužbu","tukao","glupu","pevaš","sirom","petka","ludim","uđete","operi","bandi","izađu","obuku","plavu","baciš","odbij","dužan","plesa","varao","braću","vozom","danom","teraj","sceni","zezam","mostu","ploču","nokte","pticu","plaže","romeo","probu","kazni","trena","ručku","odneo","braćo","ličiš","činio","bežim","pleše","kriju","lutku","lošem","žališ","žurci","stazi","sesti","vetra","vreću","porno","čitaj","taoca","troši","varaš","desnu","hleba","lampu","ičega","javiš","sviǌo","ličnu","letiš","truda","detaǉ","pušta","priđi","posve","stala","ležao","odelu","belac","homer","bloka","hodaj","uspem","ovime","santi","vikao","vladi","dužno","mrtvu","srede","šefom","krilu","hvata","lance","pređe","skine","japan","trčao","stave","telom","meǌam","ǉubim","silom","digni","imaće","stoku","održi","udaje","belom","adama","lutko","slavi","hajmo","rešiš","točka","haosu","lošim","umrlo","sišao","suoči","vožǌi","kurvu","jebao","hodao","kuvam","smenu","psima","pukla","trčim","učili","prođu","mešam","metke","ulazu","krađu","grehe","celim","ivane","boǉim","učila","pevaj","pobio","biraš","ličim","reklo","popeo","kruga","zadǌu","kampa","fensi","svime","vrsti","ǆorǆa","lepih","stazu","slomi","pošli","pismu","tešku","bebom","svađu","grobu","mraza","vičeš","južne","delim","juriš","bašti","cezar","trupa","iduće","maštu","sagni","trčiš","rekle","bombi","digao","varam","zezaj","setiš","kučke","jelda","noćnu","trpim","smeća","tvome","svidi","crnci","petǉu","ćerki","jurio","sumǌu","ekipi","lorda","tragu","kućom","zvuka","uspeš","krunu","smaǌi","čistu","stila","dlaka","pragu","ulaza","odsad","vojnu","bavio","zbiva","dečku","cveća","ušima","lepom","dopao","znaka","taoce","nečem","desio","kradu","tašnu","moliš","igara","vatri","snimi","ćutiš","iraku","bacam","testu","saǌaš","odeći","pukao","važnu","krizu","pička","toplu","kurca","samim","gužvu","flote","odati","spali","smena","žalbu","groba","mešaš","mojem","pliva","žuriš","crnim","benda","sredu","patǌu","pauze","bravu","snazi","oteti","bendu","greši","mučio","mačem","lepim","gradi","popni","dirao","znake","digne","mnoga","peska","oluju","kučku","imaǌu","treću","zraku","dodao","učimo","svodi","pazio","pevao","golim","pređi","dodam","viška","bacaš","lažnu","skida","žalio","šansi","štite","liftu","meǌaš","operu","živih","onuda","stone","belim","mreži","gǌavi","kravu","debra","mučiš","staje","dišeš","lovca","petar","sveca","punoj","vrede","mlađe","slona","gužvi","patio","budim","pušio","kućne","sipaj","ledom","duhom","šaǉeš","sedni","očeva","napio","uveri","spada","dlaku","hrama","stidi","klana","javna","timom","ubedi","upute","traci","oboma","lepog","zmiju","ǉutim","pičku","holms","pošlo","pišam","grama","opisu","smeha","uvedi","glasu","belci","vezao","faksu","sruši","snega","nauku","bivšu","gorim","nadaš","dante","plesu","baštu","sviǌu","tablu","učine","glasi","nauci","mržǌu","ruske","leteo","gurni","tukli","elvis","levom","selim","cveta","diraš","greha","teraš","karti","spoji","patiš","ušiju","glume","dodaš","usled","saǌaj","broji","skače","beloj","punog","padam","petra","rundu","usana","tužni","curom","bežao","naveo","sitno","kuvaš","čamcu","bandu","tulum","istih","većeg","ǉubiš","tetku","nauče","doǌem","srećo","korpu","čijoj","ćošak","klasi","perem","ometa","jetre","hramu","jurim","priđe","mojeg","daćeš","upada","kasne","učeǌa","klupi","većim","buǉiš","senci","kǉuča","guraš","seǌor","stoke","blatu","rešen","crnih","meǌao","druži","metod","javne","dvoru","gužve","božju","očeve","klopu","crnoj","dugog","zabio","skači","kuglu","utehu","novce","plaču","marsa","marku","čudnu","samoj","okupu","traju","voǉom","počet","trese","marsu","patim","sukǌu","centa","strip","grade","pičko","ženim","karlo","stela","kupca","radnu","čudim","sraǌu","ciǉaš","ruska","kongu","šetao","obori","brodi","kremu","pukne","ležim","topao","tužbe","ludog","naiđe","tabli","likom","bodež","domet","blata","znaće","brava","ikako","lukom","tušem","krvna","pesku","skota","mičel","poaro","žedna","šetam","ružni","nosom","tigra","oprao","crnca","kopnu","flotu","ubico","monte","zarad","krizi","kurir","umeju","padnu","kocku","odani","kocki","kurvi","topli","usrao","trbuh","grize","mesom","hrist","levoj","lifta","ćošku","sedne","kruže","pleši","pauzi","dajmo","plešu","trenu","kruži","izbio","samih","radne","otela","kvari","jetru","senki","damom","igrom","svrbi","lanca","ciǉem","kopǉe","terao","učite","atoma","palim","harli","nežna","dugom","molbu","nudiš","otoku","tigre","otiđi","ubici","pamti","senku","jadnu","parom","droǉo","klimu","tremu","ribom","biraj","dasku","zapeo","jardi","pizda","vičem","dramu","votku","bakom","bojte","grofe","pauka","travi","braco","dižem","dotad","skupu","opada","torǌa","jakni","boǉih","rover","točku","škodi","slugu","zvuke","deliš","mrzio","prime","dušom","živom","ikome","vređa","plima","užinu","grčki","pisca","voǉni","štali","udaǉi","psiho","nemac","slede","grofa","bloku","pičke","rundi","kriti","funte","pivom","jakim","boǉem","formu","lovio","otoka","sišla","htele","ranim","okupi","nikud","zvuče","obuke","pošti","bacaj","spasu","smera","sreći","nadaj","kičmu","isusu","ležiš","ludom","badǌe","kursa","oluji","obuče","maglu","snegu","pumpi","znale","cenio","kinez","makro","siđem","malko","petom","upalu","južnu","porše","većih","ocima","ženiš","punih","tržni","jahao","koren","sklon","naftu","krvne","zbrku","stenu","duvan","hladi","osude","lovom","tužne","marks","klasu","kursu","mrava","hulio","gubio","konce","pređu","bedni","belih","ovima","rasta","crnce","lovim","martu","prođi","petre","šupku","tamnu","niska","daska","dugim","ranču","stvor","jašem","greše","štaba","zaspi","izneo","ravna","sidro","mlado","malen","pizdo","zvani","funta","nagon","vetru","jasni","spora","ivana","voǉna","pesmi","ujeda","osete","marim","afera","utiču","plovi","jenki","ničim","dupla","umete","vojno","povod","organ","slala","iseći","žalbe","lovce","izmet","repom","konga","obići","zamci","sveću","taoci","vukao","ćutim","ustav","ludih","mrdni","vajat","tokio","bacač","našle","mudra","ukusu","skinu","dugih","bojom","kafom","javnu","ocenu","začas","vreći","slali","opaki","patku","ǆoint","unuke","srama","pijte","žvaku","tački","šarma","kućna","kraće","sedlo","krsta","ringu","slama","smeđe","mučim","faksa","sitni","biješ","kakao","pluta","naudi","fioci","grčke","popne","haosa","hvali","tajms","diram","pumpu","legao","štita","čudom","blage","kupci","morem","tvrdo","štalu","čamca","opaka","dužni","sleti","varka","ostin","temeǉ","šunku","štedi","upuca","irske","amigo","ceniš","kopaš","jasne","vrpcu","udare","gazdu","vinom","pipni","fonda","golub","trude","ǉubio","flora","pereš","brizi","arija","piški","kladi","troše","lišća","ratna","gluva","ratom","gasom","smrde","biǉku","štima","odseo","vreba","jašeš","torǌu","ujaku","vučeš","visio","pališ","nokti","remek","ćoška","serem","umovi","siđeš","unuku","bluzu","legla","braći","kopao","spasa","dragu","tesno","letǌi","odana","šetaš","guram","steći","votke","ružnu","kazao","vruću","bacao","udaju","petog","užasa","oštre","sudom","jelku","doǌeg","duplu","bruse","nemce","mudri","apolo","golog","oštra","nebom","strpi","klizi","ukaže","golfa","klupu","niske","kajem","spoju","narko","finog","uzeće","većem","floti","bedno","kupku","padao","ǉupko","bitni","kucaš","gripa","kanti","umove","voǉen","bolna","letom","trulo","svađi","vežbu","odaju","zezao","plašt","slabu","irski","robom","rabin","borca","kukaš","jašta","sajtu","lancu","sipam","doček","marša","padaš","vadim","divio","gadnu","briše","uvući","znalo","audio","uǉeza","gozbu","tonik","vežem","unesi","tresu","zrake","izdam","kožom","ranom","uđimo","aziji","ubile","kućnu","šteti","videh","većoj","spaja","žeǉom","grčka","otuda","čamce","glede","kauča","smeću","probi","ivicu","vezom","jarac","maǌih","genij","ranih","opali","složi","dužna","ovaca","spori","afere","znaću","pistu","brzom","delio","biroa","bolom","debil","digla","tašni","prete","zlatu","štale","digli","kafeu","zvone","jahtu","modni","koǌem","štabu","trans","kvaru","lider","uputi","loviš","noćno","kravo","grubi","ideji","areni","jakog","magli","guske","prahu","moguć","stejt","kopam","franc","maǌim","crtam","seliš","oraha","domom","smeni","patǌi","pseće","ženio","ćurku","ulevo","sudim","lepoj","prstu","tupim","zvaše","smeši","tanak","pastu","sanke","dinar","ubola","stopu","miruj","ćelav","mokri","luter","bogme","žeǉan","alata","mokre","uboda","čijem","naneo","unije","kucka","rasla","teram","zvaće","berzi","dojke","molba","mirne","krvav","pipaj","šetǌi","sedma","ribar","draži","nokat","krvnu","lopti","brana","mašti","sišli","skaču","očevu","dereš","višeg","belca","truli","lebdi","kosku","zelen","bogaǉ","grčku","bijem","tonom","nekud","ulovi","litre","švabe","retke","žudim","glumu","gurao","kopaj","ultra","oltar","kvart","kintu","puklo","stupa","gadiš","brale","krađi","pulsa","visiš","očaja","nadom","irska","sajmu","znaǌu","vežeš","osuši","imejl","sinak","rubǉa","azije","plina","birao","nerve","bluza","bledi","kraći","visim","teror","ličio","oživi","torti","vučem","letǌe","kurcu","tužim","klopa","breme","adolf","turci","krili","plena","forme","trubu","meǌaj","irsku","umrle","mušku","sipao","lutao","otada","sitan","zvalo","drska","razna","losos","ploči","mnome","metlu","zbilo","jahti","kliǌo","udavi","pirat","limit","sudǌi","uvuče","ritmu","šalom","delhi","sonda","jebač","poene","dečje","modul","ćerci","uvuci","pakuj","dalek","tuđim","teglu","videa","leglo","disku","olovo","mutno","dižeš","sumǌi","retki","ujela","hamer","šanka","vizit","pucǌa","unuci","pisti","dečja","dušek","hitni","crtaš","časne","živǉe","prugu","firer","šutni","vrtić","runde","greje","udate","štand","živci","islam","opiši","uglom","srati","miraz","štapa","besom","odvod","čipsa","divǉu","nežni","šupci","ugǉen","uloži","imuni","hvale","niski","obave","tomom","stava","tetki","građe","ribǉe","remen","redov","iraka","dopis","žurio","crkni","obese","oštri","smelo","kupce","palca","obema","svrši","tučeš","rusku","trube","zvana","guska","kreme","droǉe","brzim","jelom","krhka","nosem","dedom","drsko","ucene","kucao","ološu","ježim","slepe","bakǉe","orahe","kičme","svrsi","gajim","peǌem","testo","znoja","brusa","krala","koncu","karlu","nuždu","ǌušku","šipku","šanel","tanke","umiri","tužbi","urina","smeđa","rodim","mlađu","odoše","spore","kugli","braca","surov","ivica","kapom","svežu","piste","barom","reket","metom","rodiš","tanki","pišaš","posta","svane","tvrda","ujede","gorǌe","žetve","sused","svile","vesla","odoru","blagu","ručao","useli","staju","burmu","rernu","tvari","budiš","forda","maǌka","nagni","steni","napuǉ","težim","pamte","usran","titan","satom","kupam","otera","uočio","frazu","tačni","krali","legne","rebro","elite","rečju","jakom","jarku","tužnu","drogi","busom","kucam","gandi","tugom","gorih","članu","bakǉu","ringa","motri","lujka","kutak","ćufte","rvaǌe","bedna","dvora","upleo","placa","sosom","trune","kuneš","stuba","letke","tačnu","ranog","fioku","stida","gajbu","ranio","skice","praǌa","gusta","praga","haubu","finom","danak","ranča","kekse","žedni","osuda","učeǌu","održe","adamu","ǉutǌu","duvaj","nežne","bedak","elita","ćutao","belce","uperi","milan","ratnu","žurki","voćni","čaure","birou","avans","trpiš","diska","gusar","singl","umova","keksa","gresi","ravni","ravne","stupi","smeđi","odaja","pašće","šesta","pišao","mirom","iglom","davim","jasnu","spise","smire","tucao","skoka","sudiš","spoje","zaneo","vrpce","golih","finim","ohajo","ciǉaj","kupon","kinti","kičma","tečno","šunke","kreše","dvoma","korpi","znaku","kojot","pista","lečim","videu","funtu","zaveo","sonde","brzog","pomno","izdaš","kinte","ćurka","voćem","frojd","udaću","rulet","sonar","časnu","stada","selam","sluha","iseci","živac","uvali","sondu","plime","pseći","golfu","duple","profi","liker","pomak","nabio","fleke","vežbi","volvo","tesla","drami","snaja","obije","palme","ǆorǆu","polom","drhti","gazdi","kačiš","grube","vrele","zadao","gluvi","udaru","volti","rampu","jelke","slome","gađao","osudu","grizu","mikro","ciglu","dlanu","znoji","zajeb","većom","mango","nemir","gađaj","načuo","razni","ženku","steže","češaǉ","gorko","rerni","lupaš","lupaj","jakih","žalbi","rukav","krstu","unosi","izlog","sjebe","ubrza","silne","daǉeg","verom","nudio","trona","lečio","gušim","česta","prdež","žbuǌe","šumom","kujin","dospe","gorǌa","vešto","suton","drski","krabe","fotku","petoj","kučki","masno","rujna","gajba","himnu","umeša","koral","jačim","trkom","sečem","branu","ručam","uǉezi","groma","klade","pavle","odsto","olova","pijmo","tucaš","ptico","davio","granu","borce","apači","rakun","sruše","muvaš","romea","kršiš","lilit","buǉio","obesi","astmu","gline","medom","freja","hiper","uneti","ciǉao","mački","pseća","gurne","krčmi","kirka","agata","srele","homić","elise","uhoda","trend","uveli","hrast","šakom","bolne","rugaš","laska","plača","mučno","duvao","kišne","ugase","goriš","čajem","šatla","prala","ručnu","šeste","žicom","pitom","trudu","dopre","biǉni","daviš","dignu","obuću","vršim","vršio","snađe","ǆelat","žešće","osmog","dovod","udela","bićem","zmaju","pečen","obruč","ubode","šetaj","ranga","plazi","bujnu","pušač","upiši","jovan","pizdu","tužio","bedan","bobom","korpe","jarca","mučen","sisaj","lošom","sipaš","fraze","ribǉi","tange","koske","tašne","tiket","rancu","petao","sedla","odala","okove","spale","usudi","klaǌe","crtao","kitom","očevo","sećao","osmom","leǌin","ćebad","žabac","keǌaš","zbrke","gripu","sjaja","žetvu","sloma","boksu","disao","kršim","kneže","boksa","večnu","gardu","zvano","levog","lutam","otima","rupom","orson","hindu","ratno","dvema","tanko","uzeto","tigaǌ","kalup","višem","umela","dance","pusto","kešom","četku","ševio","jelka","elisa","ubodi","gađaš","svoji","rakom","špric","žutim","lotus","podlo","nalet","šupka","gneva","tečni","ubace","cifru","rajha","žutom","ulaže","arenu","jahta","suvom","trupu","počev","alaha","iduća","našlo","sjaji","užeta","spoja","žetva","udicu","lordu","mrave","mirnu","ulove","kišni","žbuǌu","pupak","zvaǌe","celih","sline","boǉom","šašav","višim","norme","udesa","naseo","tučem","mrdaš","bradi","bojni","napon","tegli","trzaj","sluzi","pokoj","bakar","kapǉe","drajv","sloja","bajno","ritma","pruzi","trula","žalba","dlana","naboj","opisa","macka","muvao","dečji","ciǉam","mekoj","vlage","lošoj","jurij","sokom","držač","udove","uzici","oprah","pǉuni","otpao","snime","bdeǌe","vođen","goreg","žeǉni","zbuni","bakǉa","uhodi","uvede","hidra","mrdam","takta","pipne","mariš","kabla","pepsi","golem","nišan","obara","ponor","bičem","opiri","osama","opšti","mrazu","pucǌi","podli","bakra","kuvao","gostu","opšta","slade","obiǉe","priđu","bliža","činom","zvanu","rampe","načas","bando","ikona","perja","vrelu","praha","melem","slana","nervi","sorta","plove","zamki","sfera","svotu","fondu","srami","bakin","takao","zebra","fleka","bocom","sočno","začin","kulta","grlim","pucǌe","kurta","pulta","grdno","dubǉi","uzdah","ručna","okupe","uzduž","kucaj","peǌeš","svrab","očuha","sedlu","kraba","čorbu","tukla","tašta","ručne","uzele","lutaš","vrpca","sedme","sjaju","rubǉu","ležaj","kruni","odamo","glađu","učeći","sibir","odoli","ješću","uliva","bruka","gusku","ćurke","odore","vrećo","zvale","uveta","dasci","grmǉu","uzelo","kadet","pusta","bledo","gordi","uzeta","ǉuske","htelo","šaman","fidel","šǉive","umeće","skaut","upalo","polen","štala","metle","stavu","pekar","tutaǌ","idola","vukli","sekte","troja","padni","jajca","ligǌe","osudi","vlaga","žilav","sajta","smara","litra","uvela","lutki","izdat","ideal","opiše","boǉoj","ispij","čaura","sešću","maski","levak","trpeo","modna","molbe","modne","štivo","gorak","bajku","grehu","buǉim","širio","tresi","puniš","dozna","finih","svuci","gǌave","papak","kaješ","šuška","uredi","palio","kupao","sečeš","kairo","sleće","gesta","arene","sukǌi","vreli","berze","vođom","tupan","vlasi","užina","uleti","voska","kvara","mešao","zidom","droǉu","zmijo","unija","obiđe","zabij","guzom","obuće","kupaš","gorka","odora","sekao","moćnu","retro","jozef","golom","učtiv","saunu","uguši","opala","dimom","cenom","gajiš","iranu","izići","gasim","cigli","mašeš","umemo","pǉuje","nabij","diviš","kanǆi","onime","utehe","jahte","ženin","ǆepni","etika","skica","karmu","mačko","letǌa","maǌeg","gorǌu","ojača","viola","trule","krele","traći","dotok","duvaš","žeǉno","čizmu","senfa","tuđem","zuriš","letak","raduj","tutor","čijim","nivoi","mrsko","dečju","gaziš","nožni","berzu","opake","naime","legni","upija","kepec","uneli","etike","darom","ispad","ladno","ženki","sviju","šutne","brbǉa","bundu","duriš","useve","opire","pouka","okani","skver","pride","struk","ilija","peško","porok","otelo","facom","bokal","skicu","sadam","pseću","farbu","zvuku","grede","modnu","rekom","hapse","glavo","barka","vrtiš","alate","žudǌa","hrčak","izuma","metan","kuran","horde","skije","čijeg","spala","bedne","upiše","broje","sivom","takse","slano","večne","pizde","poǉem","lupio","mahao","odori","kvotu","peǌao","grani","tenka","šuǌaš","flert","trema","retku","grebe","stoko","metla","suoče","vrtim","makne","falio","zvane","kafea","sirov","snađi","etiku","viših","žeǉna","vukla","slane","čućeš","unese","kanio","peruu","alahu","skalp","truje","tekla","nagib","crkao","lečiš","motre","čašću","nemca","nižim","švaba","trgni","veliš","josif","haube","žutog","ptici","grmǉe","panel","poǉak","vilom","tegle","upita","širim","petla","blogu","hrpom","kožnu","žilet","psuje","smaǌe","ǉutio","savij","kvaku","velim","uzgoj","honda","klanu","uklet","pažǌi","sankt","tucam","želea","vrača","budio","sednu","zrači","čamci","brega","vadiš","dugoj","kaniš","ribǉa","ološa","izvoz","stoni","torzo","krimi","jarda","dozom","unela","spisi","gađam","drkaš","cveću","slože","sauni","samit","slaǌa","zapao","mlati","krčmu","trika","metež","atlas","šizim","žudǌe","lepka","pecam","bajki","lampi","okači","svilu","kraća","širiš","rusko","obrva","hrčka","mehur","ceǌen","bazom","umaka","venča","vadio","menzi","šatlu","šupǉe","igala","gorem","bravi","kairu","gospe","iskru","otmen","ǉuǉaj","tezgu","slame","jarko","tihog","znoje","žudiš","sjaši","kreka","milim","aziju","skala","iseli","pobij","klaǌa","ludiš","gušiš","obore","orasi","doǌim","ševiš","tosta","ucenu","nemar","polio","nivoe","smeti","volta","žutih","nisku","otopi","pivce","brije","kišom","iseče","forum","temom","reper","motku","muvam","mašnu","psića","crkne","mrdne","himna","alžir","rival","šapat","vrhom","begaj","ǉutog","izliv","dizao","padre","svece","četka","bebin","kvare","tihom","sfere","fotka","višǌe","lakog","moǉac","klona","doǌoj","friza","lupus","kukom","romel","hašiš","steǌe","obiti","ližem","opštu","izumi","uteši","čašom","arena","odjek","sekač","tuđoj","višoj","tužiš","slete","tuđih","grabi","zurio","tibet","pegla","otmem","lazar","skuva","uhode","ranoj","tvrdu","atome","kroše","pǉugu","čizma","padom","letǌu","odaću","lešom","brzih","štapu","umora","sakou","mesne","žutoj","zezne","dužim","bajci","mišǉu","pavla","tronu","kadru","udova","sluti","strop","rugaj","izdaj","sferu","mičem","sisao","dršku","skora","nagli","svari","trust","pisce","letos","tacni","postu","perle","obeća","sirće","penal","lupao","praǌu","bačve","bunio","udovi","babom","trǉaj","sakri","kadra","kucni","uboli","uvodi","trske","apača","sekta","kupuj","šanku","robǉe","loncu","grubu","masom","slađi","pruže","gordo","klada","siǌor","sobna","lizao","skotu","ližeš","ludoj","kašǉa","utuvi","tanku","poriv","gajio","salsa","iskre","donor","sklop","cvetu","kašǉe","slina","krede","veslo","otrči","punča","šegrt","lekom","osnov","nisan","fleku","vešti","pedaǉ","suvog","epski","rudar","kabal","mrkve","daǉih","rodno","mržǌi","iduću","ǌušim","uzdam","obiđi","drona","smeđu","žeton","lisac","stiče","hitro","skrio","gošću","mudre","blede","trubi","slani","ušeta","zurim","udali","ukrca","čekom","kapke","kvote","klope","slađe","blaži","lepšu","sprži","punkt","drhte","popnu","pomen","duvam","isaka","ubite","vidre","nažao","dahom","lišen","tifus","rasli","harem","zlobe","rangu","odali","sodom","ǆemom","pecaš","robne","dodat","drkao","tkivu","uprte","bukom","vokal","papke","mokru","časak","grliš","mrena","bočno","skale","stale","mejna","ǆihad","perua","ispis","ǆedaj","ateǉe","mazim","lomim","vlagu","sočne","zbrci","nagle","grižu","ručaš","mekog","tegla","merom","zaspe","aǉkav","šakal","lokvi","naiđu","greda","kongo","lomiš","laješ","velom","lebde","cvili","krhko","petru","klimi","sahib","drška","krike","kaira","vidom","pegaz","kupcu","kiosk","očita","uvuku","krika","pečem","irana","topom","nižeg","puknu","mazgu","astme","putuj","bordo","vepra","izvod","naude","psiću","sočna","zgazi","jetri","nitro","šifri","bočni","bruji","vešta","tonem","motao","vješt","pouku","marki","šurak","bitki","gardi","rampi","ukine","čujmo","udaja","motaš","žudǌu","šlaga","mejnu","uǉeze","kliǌa","aroma","učeni","imuna","pukli","otmeš","punio","mutna","flaši","mnogu","žvaće","novci","pašću","sufle","haiti","umara","okusi","žbuǌa","lakim","talog","polet","pultu","grizi","krčme","dođoh","ožive","sviće","staji","aferi","okova","litar","gospu","gušio","ǉupke","perom","izdan","kumče","čorba","tanga","pecao","čakre","očaju","građu","gozbe","raslo","čezne","normu","sabat","živni","okupa","kućno","mašem","kušaj","lovcu","umori","brlog","tuđeg","sitnu","kvizu","sajma","kloǌu","unose","akbar","sjaje","ǉuska","sivog","uvale","kroči","krici","vikar","kneza","podla","trola","rasne","uskim","sorte","goreo","vaǉao","arapa","sviǌi","staću","otete","ćerko","potop","čudiš","gǌido","zemǉo","skoku","suvim","piscu","drkam","polog","useva","kišna","čvora","polni","ǆukac","vešom","žurno","snosi","hapsi","pande","obodu","bačvi","tamom","česte","ubiše","vaǉaš","obrij","četke","uvere","tarot","šijem","znoju","zloća","pišaj","imama","prosi","sijaš","sedaj","uniju","zdaǌe","opija","putne","celer","savio","nožne","brace","placu","hlebu","dubǉa","kupke","makao","masnu","guste","dužeg","zašlo","svici","samar","geler","drumu","sakoa","koǉač","ǆambo","zebre","neron","ataše","vidik","čauru","dizni","sleng","maziš","pǉuju","pozli","hrčeš","sporu","skoče","lajao","ičije","plimu","trǉaš","dildo","oteto","odmet","ukrug","takne","samce","slamu","bazni","bluze","ikone","zmiji","hindi","lupam","smola","merim","skvoš","janga","kazan","kukaj","omete","rezač","hunta","ǉutih","danci","lavom","ubede","mukom","rukuj","bojne","skrbi","banki","nežnu","oduva","sidra","vidno","rimom","nagao","feǌer","barku","vapaj","gozbi","svrbe","silan","manga","genom","plaze","čehov","krčma","čakra","fajlu","tezge","sedmo","harfu","verio","enzim","ǉupki","gajbi","kinom","psihu","plika","pojmu","porti","prale","pešom","posni","perli","pompu","pliku","plebs","pleća","prali","posnu","perca","pojce","plaha","perut","posej","peǌah","seize","pojci","plahe","poseo","setan","porub","portu","plaho","pleva","posan","pećke","pončo","prano","štipu","poneh","ponča","seizi","perad","sedih","piket","ponču","robǉu","pomru","serža","pomre","pireu","praši","sedog","sviću","praǉa","ponet","popeh","porvu","pralo","porve","popuj","prana","porom","pećki","pećku","pivar","porod","plato","perla","prani","popih","pikap","popom","prane","pizdi","plahu","popov","setni","plahi","pojim","pouke","setne","setno","poješ","pouče","pleli","pouci","setna","setvu","seter","plene","potku","pojio","sedmu","pleve","setih","petǉi","plelo","plevu","petne","pođoh","pojao","plela","svita","plevi","pošle","sviti","svite","svitu","pouči","pojac","pojem","sviše","plele","počuj","svica","svice","poček","počeh","pleni","poste","posti","posra","pojiš","setve","svija","pešak","peška","perju","svije","pospu","plehu","setva","seiza","perce","pojmi","pospi","sedoj","sedom","pospe","pojme","plenu","pecne","petih","posuh","petim","petlu","pecaj","pecka","petli","potes","pecnu","sedoh","plete","pletu","pesmo","pleha","setvi","posut","pečeš","svili","posuo","svoda","picin","piǉim","podno","plodi","podnu","pitku","pitke","pitka","podoj","sekom","podom","pitko","sevnu","podvi","picom","svrše","pičim","podbo","piǉar","podna","sevši","podni","podle","podlu","senik","poeni","ploda","pisne","plode","pisni","poemu","piǉio","pisar","pisan","pliću","pisku","piska","poenu","seklo","sedaš","pitah","sedao","pitan","sekli","poeme","poemi","pisnu","poema","sekle","sekla","podaj","sektu","plutu","poglo","pišti","sevao","pogan","pište","pišom","pišnu","sevam","selen","pogne","pogni","povik","povio","povih","poboj","sekti","sevaj","sevaš","povoj","pijac","sevne","pišče","sevap","povij","podam","svuku","selfi","svuče","pički","pognu","plota","podao","podaš","pičio","pičić","pičiš","plodu","selio","plusu","plusa","svući","piške","plute","pišić","pijuk","plotu","pišah","plugu","selom","pluga","pisak","svode","seizu","seobi","seobe","pionu","polnu","seobu","pomeo","pomna","pomne","plamu","pipao","pipam","pipak","pipah","seoba","polki","pipav","polne","polno","sedef","polku","plama","polna","sepsi","sepsu","pompi","plimi","pompe","pinte","serva","pikom","plast","pinta","pilad","servo","seocu","piona","pomni","plane","pione","pomnu","pompa","pinti","sepse","pintu","sepsa","pomor","senči","pliće","pirka","pirit","pozni","plića","piǉiš","poima","pokaj","plišu","poznu","pozom","poete","poeti","poeto","pirog","plići","poeta","poetu","pozer","pozna","pirne","požǌe","pozva","pirnu","seiko","polip","polis","pokri","senfu","pipku","polih","pipaš","polka","svodu","pipke","pipka","polij","pirio","pliša","pićeš","senom","svoti","svote","plinu","pokla","pokop","pipnu","pirea","rezao","rezan","rezne","ruglo","rezak","režiš","ruglu","režǌu","režǌa","reznu","rugam","rugao","rende","relej","reknu","rezon","rezom","rekne","rezus","režeš","revno","revni","rudno","rudnu","rever","rebru","ružem","rebus","rudom","rudni","režao","redut","režem","režaǌ","redni","rudna","rudne","rosne","rosni","repno","rosno","rosom","rotor","rosnu","repni","repnu","reska","reset","reske","ropće","ropću","rosio","ropći","rerna","repne","rente","rubom","rentu","renti","renta","rubǉi","renoa","renou","renom","repat","rojem","rojio","rošav","repna","rtove","rubac","rubne","rtovi","rebnu","racio","rafom","račve","račva","ratuj","rulni","rauba","račvi","rulne","rašku","rulna","rašta","raški","račić","račvu","rašio","račje","rulno","rumbe","rasle","rasna","rumba","rased","rumen","rumom","rumbu","rasan","rasni","raspu","rulnu","rasut","rasuo","raspe","rasnu","rasno","rasom","rasol","rvati","rvalo","ružiš","rvača","rvali","raǌav","rajhu","rvale","rvala","ružio","rvaću","rvaǌu","rvući","rvemo","ružim","rvaču","rvači","ružin","rvaǌa","rajom","rađam","rašće","rađao","rađan","rašǉi","rašču","rulao","rulam","rašǉe","ruinu","ružom","ruina","rajem","rađen","rađaj","rađaš","ruino","ruine","ruini","resko","ritao","risji","ritaš","rokni","risje","rinta","rikšu","roknu","rokom","ritaj","ričem","ritnu","ričeš","rodne","ritne","roker","rokne","rodnu","rodom","rikši","rizle","rolat","rizlu","rizli","ridao","ridam","rolka","ridaš","rikao","rokću","rokće","rikše","rikom","rikne","rikna","riknu","rikni","rogom","rodan","rodea","rodin","robna","robni","rodeu","rogat","rovom","rovci","rovaš","rovit","robǉa","robnu","robno","robuj","robov","rodih","riđog","riđih","riđoj","riđom","riđim","riđeg","riđan","rodna","riđem","rijem","rmbah","rmbao","rmbaj","rmbaš","riǉaj","riǉam","riješ","riǉaš","riǉao","rigao","rečcu","rešiv","roniš","rečnu","rečne","rečna","rečno","rečni","ronio","rešou","rešoi","ređam","romor","ronim","ronin","reših","rešoe","rešoa","rečit","ropca","ropce","reume","reuma","ropci","ropcu","resku","resto","resor","ropac","recku","recki","rečem","recnu","recke","reumu","reumi","recka","receǉ","rzaǌa","rzati","rzaǌe","rolna","rzalo","rolni","rolnu","rolne","rzali","rzaǌu","rolku","ribǉu","rolke","rolki","ribaj","ribao","ribam","ribaš","ribah","roloe","rombu","ređeg","romba","ređem","ređaj","ređao","ređan","ređaš","ređah","ređim","rzala","ržući","rolci","rzale","reǉef","ređom","ređih","rejon","ređoj","sadǌi","profo","proču","profu","sadǌu","profa","protu","sažeo","profe","sadǌe","proji","sadim","sagoh","proju","proja","sadǌa","sadio","sadiš","sažet","sazva","proli","propi","prope","prozu","sazda","saziv","prozi","proze","prosa","sažmu","proti","proto","sažme","prote","proso","prose","prota","prosu","pruću","prući","prhnu","prhne","pruće","savih","prtio","pruća","pruta","prcam","pršti","sabra","sabǉa","sabǉe","prčka","sabǉu","sabǉi","pršte","prtim","prska","prsiš","prsle","prsla","prsio","sagnu","prsao","sagne","prsli","prsni","sagao","prsnu","prsno","sagla","prsne","prslo","sagle","sagli","proza","preke","preka","preku","preki","preza","preže","predu","prežu","preži","prela","salce","prene","salto","salca","sambi","sambu","preli","sambe","prede","samcu","sanka","samca","praću","sveći","svide","praǉe","praǉu","praǉi","prgav","prdnu","prdni","previ","prebi","prdne","samur","prdeo","prdiš","prdim","sakoe","sakoi","sakat","sakea","pripi","salaš","prior","sazru","prkos","sazre","prože","probo","sazri","priji","pričo","priju","prijo","prida","preča","presu","presi","prenu","preni","prese","presa","preču","pribi","pržiš","privi","salvi","pržio","salvu","salom","pržim","pržen","prǉam","pućim","puǌen","pućiš","pućio","pušci","rušio","pučem","rušen","rušim","pućka","ručke","ručki","pǉunu","pǉune","pǉuge","pčeli","pućnu","pǉuga","pčelu","pucǌu","putna","putić","putno","putni","putir","pustu","rujne","puten","putar","putnu","pucka","pufnu","pucnu","pucne","pufno","rušiš","pufna","pufni","pufne","razno","razli","rupče","raznu","razvi","rutom","razan","razbi","rutav","rakǉe","rance","ranca","rasad","ranci","ranka","ramom","rakǉu","raniš","runom","ruhom","rodos","ripǌa","romul","romeu","raška","ražaǌ","raške","ručaj","ražǌu","ražǌa","ragom","rumun","rtǌem","ravnu","rusom","purǌa","psuju","rđaju","ptiče","rđali","psiće","rđaǌu","rđaǌa","rđaǌe","ptića","pudlu","pudla","pužeš","pužem","puvao","ptiće","pubom","ptiću","psihi","pseta","psalm","sabor","psetu","prǉio","prǉao","prǉan","prǉaj","prǉaš","psina","sabij","psihe","sabio","sabih","psiha","psini","psine","psinu","psino","punču","pumom","pulsu","pulpu","pumin","rđavi","punđi","rujni","pupku","pupka","rujnu","punđu","ruǉom","ršumu","pulpi","rđavu","rđala","puziš","rđavo","puzio","puzao","pužom","puzim","rđale","puzla","pukoj","pulpe","pulpa","pukom","pukih","pukim","pukog","pukle","setnu","freon","fraku","frizu","frejm","fraka","foton","fotki","frazi","fotos","frika","frula","fruli","frule","frkću","frknu","frkne","frkće","frkom","fosnu","floru","flori","floto","flore","ulciǌ","uzbek","flopi","urala","fluor","fordu","fonta","fosni","folna","foker","fokom","fokin","frulu","halvu","haiku","hamam","halom","habom","froma","freju","habov","fromu","hanom","harfi","harfe","hauba","haski","harfa","harao","hapsu","haraš","frejo","futon","furaj","fufom","furaš","fuksa","frfǉa","furao","fukso","fućka","fobos","finci","freji","fince","faust","finca","finac","uštvi","uštve","ušoǌu","ušoǌe","ušoǌa","ušoǌo","ušoǌi","uštvo","ujake","uđoše","ujaci","ujaha","ušćem","uštvu","ušǉiv","ušuǌa","ušnoj","ušiti","ušinu","ušice","ušica","ušine","ušiva","ušepa","ušili","ušila","ušici","ušnih","ušnim","ušnom","ušnog","ušiću","ušije","ušicu","ušiće","ušiǉi","ujaše","uǌkao","uǌkav","ućari","ućare","uǌiha","uǉnog","uǉnih","uǉnoj","uǉnom","ućeba","užica","udbom","užicu","užice","udbin","ućute","ućuta","ugare","ugara","uǉnim","uješe","ujelo","ujnin","ujkin","ujeli","ujašu","ujele","ujedu","ujnom","uǉast","uǉanu","uǉima","uǉezu","uǉano","uǉana","ujuri","uǉani","uǉane","hučan","husar","hučna","hučao","huntu","humci","humus","hunti","hunte","hučne","hagom","huǉom","haila","hazar","hujao","hučno","hučni","huška","hučnu","humom","hukne","hukao","hukom","huknu","hteǌu","hteše","htede","hukće","humku","humki","human","hulim","hukću","humak","huliš","haile","cvatu","cvalo","cvike","cvete","cvali","carem","cvale","carom","cvile","cevnu","cevku","ceger","cevči","cevki","cvrči","cvrče","cevke","cevka","carev","hajne","hajdu","hegel","hvaru","hajda","hamas","halej","hator","hasom","hesea","cakle","cakan","cakum","cakli","hrvat","hobit","heǆri","horus","honšu","hidru","hidri","himne","himen","hidre","heǉde","heǉda","heǉdu","heǉdi","himni","hitre","hitra","hitru","hitri","hitaš","hirom","hipik","hitar","hitao","herca","hajao","hašku","hajka","hajem","haško","haška","haubi","haški","haške","hajke","hvati","hvalu","hekla","hvatu","haǉom","hajku","hajki","hajci","hajte","hitǌa","hrlio","hrlim","hroma","hrliš","hrknu","hoǆin","horom","hrkao","hridi","hrome","hrčke","hrčem","hrčci","hrčku","hrtom","hromo","hromi","hrtov","hromu","hordu","hmeǉa","hlora","hodač","hladu","hicem","hitǌu","hlade","hlada","hodim","hondu","hondi","hordi","horda","honde","hodiš","hodio","holom","hodom","ušatu","upasa","upari","upaši","upaše","upare","upade","upavo","upadu","upadi","upašu","upili","upile","upire","upilo","upila","upere","upelo","upeče","upeca","uočiš","unetu","uneto","uneće","uneše","unete","unelo","unele","uneta","unesu","uneću","uočen","unuki","uočih","uočim","unosu","unizi","unize","unosa","uniji","upiru","upuzi","upuza","uputu","uputa","uprǉa","uprta","uprpi","uprto","uprti","urban","uraǌa","ureže","urede","urana","uralu","urali","urami","urame","uprlo","upiǉe","upiju","upiǌe","upiǉi","upije","upiti","upisa","upišu","upiša","upiǌu","uprla","uprže","uprli","uprle","upreš","upliv","upiće","upreh","uprem","umaže","uludo","umaku","umaza","ulubi","ulova","uliću","ulože","ulovu","umače","umele","umede","umelo","umeli","umaći","umaču","umači","umaǌi","umaǌe","uliće","ulete","ulepi","uleće","uleǌi","uležu","ulare","ulara","uleže","ulari","uleći","uliše","uliti","uliju","ulije","ulilo","ulila","uleću","ulili","ulile","umese","umota","umoru","umoči","umoče","umore","umnom","umnog","umoli","umnoj","umreh","umuje","umuče","umuju","umuti","umrsi","umrlu","umute","umrǉa","umnih","umila","umiva","umili","umile","umeću","umesi","umeća","umeci","umilo","umiće","umiju","umnim","umiću","umije","uminu","umine","umiše","umiti","utoku","utoke","utoli","utole","utoka","utkao","utkan","utovi","utove","utone","utrem","utoci","utrle","utrla","utori","utonu","utoni","utopi","utope","utiša","utaǌe","utaju","utege","utaǌi","utaji","utapa","utaži","utežu","uteći","uteše","utiru","utire","uteče","utesi","utera","uteho","utehi","utrli","učilo","učile","učino","učina","učenu","ucrta","učeno","učene","učinu","ušate","ušati","učmao","učiće","učita","učkur","učiću","uceni","utrti","utrte","utrča","utrto","utrta","utrne","utrlo","utrpa","utrnu","utrče","utuče","uhodu","uhodo","utuca","utrǉa","utrči","uture","utuve","uruči","uruče","uruši","uruše","uroci","uroni","urone","urotu","urote","usade","usele","usela","useru","usere","useku","usami","usadi","useke","useka","urola","ureći","ureče","urlam","urinu","urezi","urežu","ureži","ureze","ureza","urlao","uroka","urodi","uroku","uroke","urode","urlaj","urlaš","uroda","urlik","useca","ustah","usrče","usude","usuda","uspnu","usoli","usole","uspne","usosi","usudu","ushte","usutu","utaže","utaba","usuto","usula","usuka","usuti","usuli","usnuo","uskih","usija","uskom","uskog","usisa","useče","useci","usiri","useći","uskoj","usniš","usnih","usnoj","usnom","usnio","usnem","usmen","usnim","usnik","cedim","šacnu","šacne","šajka","šašom","šahtu","šahom","šahti","šahte","šajke","švaǉa","švabu","švaǉi","švaǉe","švabo","šajku","šajki","švabi","šatru","šarke","šarka","šarku","šarki","šaržu","šaraš","šarac","šaren","šaraj","šarmu","šatre","šatra","šatro","šatri","šarcu","šarom","šarov","šarci","šarca","švaǉu","šerpu","šerpi","škrga","šepaš","šepao","šeret","škrgu","škune","škuna","škunu","škuni","škrtu","škrte","škrta","škrto","škrti","šepam","ševim","ševar","ševom","ševin","švrćo","šveca","šverc","švrći","švrǉa","šegom","šenim","šemom","šepav","šenuo","šeiče","šeike","šeika","šeici","šeiku","ǆepnu","ǆepno","ǆepom","ǆepne","ǆezom","ǆezvu","ǆibre","ǆinsa","ǆinom","ǆipov","ǆinsu","ǆinov","ǆibru","ǆibri","ǆilit","ǆigǉa","ǆezvi","ǆadom","ǆekil","ǆakče","ǆakom","čileu","češku","čečen","čilea","čejen","ǆanki","ǆarnu","ǆarne","ǆarka","ǆaram","ǆapao","ǆaraš","ǆarao","ǆipom","šapka","šancu","šapki","šapke","šanci","šanuo","šaner","šance","šanca","šapku","šaram","šapću","šarao","šaran","šapće","šapni","šapne","šapom","šapnu","ǆudoa","ǆoǌaj","ǆukca","ǆudou","ǆombu","ǆomba","ǆoger","ǆombi","ǆombe","ǆukce","šavom","ǆunku","šalta","šalon","ǆunki","ǆukcu","šupom","šupaǉ","šupǉi","šunki","šumor","šumnu","šundu","šunda","šupǉu","šušnu","šušne","šušti","šušte","šuški","šutnu","šurio","šušaǌ","šutom","šumno","šture","štura","šturo","šturi","štuli","štuku","štuki","šturu","šumna","šumio","šumni","šumne","šumeo","šugav","štuca","šumar","šuman","šušǌa","šapca","šabac","šapcu","šćapi","šǉuki","šǉuke","šćape","šǉuku","šivin","šopen","škotu","špera","šošon","škoti","šiler","šivom","škote","škota","šǉuka","šǉage","šǉaga","šǉagu","šǉagi","ščepa","šuǌam","šušǌu","šuǌaj","šuǌao","šǉaka","šǉema","šǉaci","šǉivu","šǉivi","šǉapi","šǉaku","šǉake","šǉamu","šǉama","šokom","šoder","šopiš","šopav","šogun","šnalu","šnali","šnura","šnira","šoram","šorca","šorts","šojki","šorcu","šorom","šoraš","šorao","šorka","šoraj","šnale","šlepu","šlepa","šlica","šlifa","šlemu","šlauf","šlagu","šlema","šlajm","šlicu","šmrče","šmrca","šnala","šmrču","šmrku","šlogu","šloga","šmrka","šmeku","šoǉom","štivu","štiva","štitu","štipa","šteku","štaku","štaki","štede","štaci","štiha","štrči","štrče","štuke","štuka","štrca","štosa","štoku","štofu","štofa","štaka","špilu","špila","špice","špica","špajz","špaga","šoǌom","špagu","špage","špici","šrafu","šrafa","štavi","štave","špiǉu","špiǉa","špicu","špiǉi","špiǉe","čegru","časom","časke","čauri","časte","časka","čarku","čarki","časio","čarci","čauša","čačnu","čačni","čajić","čačne","čauši","čauše","čačka","čaušu","čarke","čanak","čamov","čanke","čanka","čamiš","čamim","čalmu","čamih","čamio","čanku","čapǉo","čapǉi","čarka","čapǉu","čanče","čanci","čapnu","čelni","čelne","čelnu","čelno","čelna","čeznu","čežǌu","čekrk","čekah","čelom","čepio","čeonu","čepom","čepić","čeono","čeona","čemer","čeoni","čeone","čežǌi","čvoru","čvrgu","čvrge","čvari","čajni","čajne","čajnu","čajno","čvrǉe","čedom","čednu","čežǌe","čežǌa","čedno","čedna","čedan","čedni","čedne","crpnu","crpno","crtač","crtan","crpni","crplo","crpli","crpne","crpna","crtaj","crǌih","crǌim","crǌoj","crǌom","crǌem","crtom","crtać","crǌeg","crǌak","crple","cepač","cepao","cepaj","cepaš","cepam","cediš","cedio","cente","cenka","cepin","crpio","crpim","crpla","crpiš","crpeo","crnče","crncu","crpem","crnči","cugam","čavka","čabru","čavki","čavke","čabra","cigan","cerom","čabar","cirih","čavku","čalma","čakǉu","čalmi","čalme","čakǉi","čakru","čakri","čakǉe","čakǉa","ceres","cupne","cupka","cureo","cupnu","cugom","cugne","cugao","cugnu","cugni","curio","cuclu","cucli","cuǌaš","cuǌao","cucle","curne","curka","curnu","čukam","čudio","čukah","čukao","čuvši","čojom","čuvah","čukaš","čulnu","čulno","čukaǉ","čukaj","čuknu","čukne","čiǌen","čiǌah","čkiǉi","čkiǉe","čijom","čijih","čišću","čmara","čoper","čokot","čorbi","čorbe","čokaǌ","čmaru","čovom","čovin","čulom","čučǌu","čujne","čujna","čučǌa","čučne","čučiš","čučnu","čučni","čujni","čačak","čuǌić","čegra","čačku","čuǉiš","čujnu","čujno","čuǉio","čuǉim","čučim","čupam","čupav","čupao","čupan","čunci","čunić","čunak","čunom","čunka","čupaš","čutih","čuste","čučaǌ","čučao","čusmo","čupka","čupaj","čupnu","čupne","češǉu","češǉa","češǌu","češǌa","češke","češka","češko","češki","čigri","čigre","čizmi","čigru","čigra","češću","češći","čibuk","češeš","česmu","česmi","čerek","čergu","čergi","česti","češao","četom","češem","češaǌ","četni","četki","čestu","četne","četna","čikam","čitki","čitke","čipsu","čipom","čirom","čitko","čičom","čičku","čičci","čičke","čitku","čička","čičin","čipku","čilim","čileo","čiliš","čilih","čilaš","čikaš","čikao","čikom","čikin","čilog","čiodu","čipki","čiodi","čiloj","čilom","ulažu","stegu","stegi","stežu","steži","staǌi","staja","staće","stele","steče","stepu","steǌi","steǌa","stepi","stelu","steli","staše","srǉaš","srǉao","srǆba","srǉaj","srǉam","srčka","srčeš","srčom","srčku","srǆbe","stapa","stažu","stasu","stasa","staža","srǆbu","srǆbi","stadu","stade","steǌu","strpa","strmu","strug","strpe","strmo","strma","strka","strmi","strme","strci","suvih","stuče","suvǉa","suvoj","stuca","stubu","strča","stupe","studi","strže","stiša","stiču","stoik","stogu","stiči","stidu","stide","stihu","stiha","stona","stotu","stoto","stoci","stopi","stonu","stote","stota","spleo","spisu","split","splet","spisa","spida","speru","spira","spidu","spona","sprao","spran","spreg","sprda","spram","sponi","spone","spotu","sponu","spere","sojke","sojka","soǉen","sojom","sojin","soški","soške","sojem","sošku","spade","spati","spari","spevu","speva","spare","spazi","spaze","spalu","spalo","sprže","srkom","srknu","srnin","srmom","srkni","sriču","sriče","srkne","srkao","srnom","sruči","sruče","srčem","srčan","srpom","srodi","srode","sroči","sroza","srete","srame","sralo","sraće","sramu","srali","spust","sprud","srale","srala","sraću","sreza","srežu","srelo","srezu","sreže","srdio","srdim","srdiš","srdit","stepo","sueca","sudan","sremu","srbin","srema","srbǉi","suecu","tabue","tabua","tabuu","tabui","tabor","tabak","suhoj","tabao","taban","sojuz","sadom","sagan","sezan","saǉut","savom","sjebu","sjašu","sjuri","sjure","seula","smerš","skiti","sopot","solun","skite","sizif","seulu","siska","sinaj","tabǉi","tapšu","tapše","tasta","tasom","tapnu","tapir","tapet","tapne","tapka","tastu","tašte","tačci","tašto","tašti","tacnu","tatre","tatko","tacne","tacna","taoče","takoh","taknu","taksu","taksa","takni","takle","takla","taklo","takli","taktu","tanin","tangu","taocu","tanto","tangi","talon","talka","tanad","suknu","sukno","sukǉa","sukne","suzom","suznu","sukna","sukao","sumom","supom","sunča","surim","surva","sunuh","suneš","sunem","sunuo","sunit","suzno","sudio","sudbu","sužaǌ","suvǉu","sužǌa","suziš","suzio","suzim","sužǌe","suzbi","sužǌu","surih","suǉne","suǉam","sferi","suǆuk","suđen","suštu","sušto","shema","sjati","sjate","sjaše","sjaha","sjalo","shemi","sheme","sjale","shemu","sušta","suroj","surom","susam","surog","surle","surla","surlu","surli","sušač","sušno","sušni","sušom","sušnu","sušne","sušim","sušen","sušna","sušio","soška","skiju","skiji","skore","sklad","skija","skici","skitu","skiči","skiče","skori","skrši","skrše","skuta","skrǉa","skrpi","skoča","skoru","skrpe","skrob","skita","skalu","sićom","skaja","skapa","siǌih","sijaj","sijao","siǌim","siǌeg","skaju","skeču","skeča","skide","skeǌa","skena","skelu","skeli","skute","slajd","slađu","slaće","slaǌu","slađa","slate","slata","slaše","slato","slaću","sleme","slezu","sletu","slepu","sleza","sledu","sleva","sležu","sleže","slast","skuje","skušu","skuće","skuju","skuši","skuca","skuti","skuše","skuša","skući","slanu","slami","slapu","slapa","slalo","sladi","slaga","slale","slaži","sigma","sivǉi","sidru","sidom","sivǉe","sivca","sivoj","sivǉa","sivcu","sižea","sikći","sikće","silav","sikću","siknu","sižei","sižee","sikne","sižeu","sivih","sečom","sečen","sejan","sešće","secnu","sefom","setom","secne","secka","sejao","sećaj","sećah","sivim","sivac","seǌak","sejem","sejte","seješ","silim","sisom","sisaš","sitih","sitim","sisar","sirot","sirac","sisam","sisak","sitog","sišlu","sišlo","sijam","siđoh","sišle","sitoj","sitom","sicom","sipǌu","simsa","siluj","simsu","silos","silna","silio","silnu","silni","sinod","sipǌa","sipom","sipǌi","sipǌe","sipio","sinus","sinuo","sipan","sinci","snena","snelo","sneni","snene","sneli","sneži","sneva","snele","snela","sneno","snizi","snize","snilo","snila","sniva","snese","snenu","snesu","snesi","snaju","snaha","snaho","snahi","snasi","smuši","smuči","snago","smuđa","snahu","snaje","snađu","snajo","snaji","snašu","snaše","snaša","snašo","snaši","snoba","sonet","sondi","sopću","sopće","somot","solom","soliš","somom","somić","sorti","sočan","sofru","sočnu","sočni","sofre","sortu","sorto","sofra","sofom","solio","snuju","snuje","sobne","sobar","snose","snobu","snobe","snopu","snopa","sobni","sokne","solim","solar","sokak","sobnu","sobno","sovom","sovin","slugo","slugi","sludi","slude","sloju","slomu","slozi","sloši","slonu","slupa","smaka","smaza","smače","smaku","smažu","sluhu","slute","smaži","smaže","slogu","slila","sliko","slili","slile","sliže","sleću","sleći","slivu","sliva","slilo","slovu","sliju","slije","slinu","slini","sliše","sliti","smaći","smrvi","smrve","smrzo","smrda","smoći","smoli","smole","smota","smolu","smrse","smute","smuka","smuca","smuti","smuva","smrča","smrsi","smrša","smrče","smože","smesi","smese","smetu","smesu","smelu","smerč","smeon","smehu","smiču","smiči","smogu","smoga","smiče","smeše","smeša","smion","smešu","taštu","ubada","ubavo","uberi","ubere","ubava","ćušku","ćuški","ćušnu","ćušne","uberu","ubogo","ubogi","ubodu","ubogu","uboge","ubire","ubira","uboga","ubiru","ćuške","ćurak","ćupom","ćurki","ćupić","ćuvik","ćubom","ćurko","ćufti","ćufta","ćuška","ćuftu","ćutǌu","ćutǌa","ćutke","ćutǌi","ćutǌe","ubole","uvenu","uvene","uveća","uvetu","uvelu","uvezu","uveze","uvelo","uvele","uvida","uvilo","uvili","uviru","uvire","uvile","uvidi","uvide","uvila","uvidu","uveza","ubrah","ubrao","ubrǉa","ubrus","ubran","uboja","ubolo","uboji","uboje","ubuđa","uveže","uvedu","uvežu","uveži","uvaǉa","uvaži","uvaže","uvalu","uvala","tirol","timok","titom","titov","tivtu","tesle","temzu","teslu","tesli","todor","trstu","trsta","tuzle","tuzla","troju","toske","torov","troji","totom","temzi","tušta","tučom","tuđio","tuđin","tučka","tučak","tucaj","tučen","tučan","tuđom","tezej","tvena","temze","temza","tacit","tuǌav","tasos","taras","tuzli","ćopam","ćopav","ćopaš","ćopao","ćifta","ćefom","ćefnu","ćorom","ćornu","ćosav","ćorci","ćorku","ćorka","ćorak","ćorki","ćorke","ćefne","ćalov","ćalac","ćapio","ćapim","ćosić","tuluz","tuzlu","turke","tunis","ćapne","ćelom","ćesar","ćemer","ćaćin","ćasom","ćaska","ćatom","ćatin","uzdaš","uzdao","uzdom","uzdaj","uzgon","uzano","uzani","uzanu","uzete","uzlet","uzicu","uzneo","uzeše","uzetu","uzica","uzida","užase","užari","užasu","užare","udubi","udube","užara","uždio","užici","užini","uzana","uzama","užine","užetu","užele","uživi","užive","uzora","ukore","ukora","ukoru","ukori","ukopa","ukipi","ukinu","ukoka","ukleo","ukose","ukuse","ukuva","ukuca","ukusi","ukraj","ukoso","ukosi","ukoči","ukoče","ukide","ukaza","ukažu","ukazi","ukaze","ukaži","uzori","uzore","uinat","uzoru","ukazu","ukeǌa","ukeba","ukida","ukiva","ukaǌe","ukače","ukasa","ukaǉa","ukači","ugega","ugađa","ugine","ugiba","uganu","uvrću","uvrće","ugazi","ugaze","uginu","ugoni","ugodi","ugoji","ugoje","ugode","ugneš","uglas","ugnut","ugnuo","uvrti","uviće","uviju","uvoda","uviću","uvije","uviše","uviti","uvija","uviđa","uvode","uvrni","uvrne","uvrte","uvrnu","uvozu","uvoza","uvodu","uvozi","uvoze","ugrej","udeni","udene","udese","udenu","udelu","udbaš","udaće","udeli","udele","udesi","udišu","udiši","udomi","udovu","udiše","udesu","udici","udaǉe","udave","udava","udadu","udade","ugǉom","uguše","ugura","ugǉem","ugǉar","udale","udahu","udahe","udaji","udaše","udaha","udane","udamo","udatu","udato","tucač","tihim","titra","tihoj","tihih","titlu","tiraž","tipla","titla","tisov","ticao","tište","tišoj","tiǌao","tišti","tišom","tišem","tišeg","tiših","tišim","tikom","tešim","tešeš","tešiš","tešio","tešen","tečnu","tešem","tečom","tešǌa","tikvi","tikvu","tikvo","tikva","tešǌi","tešǌe","tigru","tešǌu","tkala","tobož","tminu","togom","tovio","tmini","tlači","tlače","tmine","tmina","tonac","topiš","topio","topuz","topot","topim","tonuo","toneš","topaz","tonus","tkaǌu","tkani","tkane","tkanu","tkana","tkali","tkale","tkamo","tkalo","tkati","tkaǉa","tkaǌe","tkaǌa","tkaju","tkače","tkača","tkaču","tkači","teget","tvrđu","tegom","tvoru","tvori","težeg","težǌa","težoj","težǌi","težǌe","težom","težio","težem","težiš","težih","tvore","tajim","tajgu","tajca","tajio","tajgi","tajac","tajan","tajge","tajga","tajcu","taǌoj","taǌom","tvora","tvida","taǌih","taǌem","taǌeg","taǌio","taǌim","težǌu","termo","terah","tesao","tesan","teran","tepah","tepao","tepaj","tepaš","tesar","tečan","tetom","tečna","tečin","tesnu","tesna","tesač","tesne","tepam","teklo","tekli","telal","telad","tekle","tezgi","tezga","tekao","tezom","tempa","tenom","tenku","tepav","tendu","tenda","tempu","tendi","tende","tršav","trčka","trǉao","trǉam","truća","truju","trutu","truǌe","truǌa","trǌak","tukle","tužen","tukoh","tuklo","tuguj","trćen","trǌem","tubus","tubom","trupi","trska","trsio","trsku","trski","trpǌu","trpaš","trpah","trpǌe","trpaj","trsci","truna","trulu","trunu","truni","trtǉa","trtio","trtim","trtka","trtiš","tuliš","tutni","tutne","tutun","tutnu","tutka","turih","turio","turom","turiš","tutǌa","tufnu","tufni","tucah","tucan","tutǌi","tutǌe","tufna","tutǌu","turim","tupiš","tupih","tupko","tupka","tupio","tumba","tumbe","tupnu","tupǉu","tupǉi","turaj","turaš","tupǉe","tupom","tupog","tupǉa","tupoj","trgne","trglo","trgom","trgnu","trgli","trgao","traće","trgle","trgla","trgoh","treǌa","trefa","treǌu","treǌe","tremi","trebe","trguj","treme","trebi","trača","tostu","torus","točen","totem","torzu","topće","topče","torza","topću","točim","trasi","trasu","trasa","trakt","točio","trapu","trapa","tržne","trnci","trnce","trolu","trnuo","trknu","trkni","trnom","trnov","troma","trpam","tropa","trpao","trpan","tromu","trome","tromb","tromo","tromi","trkne","triko","trznu","trima","triku","trzne","trzam","trzav","trzaš","trzao","tripa","trkao","trkam","trkaj","trkaš","triju","trica","tripu","trišu","trice","penom","boǉci","boǉku","brala","bralo","brali","boǉar","bojnu","boǉka","boǉki","brano","brvna","brbot","brvno","brdom","brvnu","bracu","brati","braǌa","braǌu","bosom","bosog","bosti","bocne","bocka","borcu","borom","boršč","bosih","bosim","bocni","bojem","bojah","bojen","bojna","bojio","bočna","bocnu","bočne","bojar","bočnu","brisu","brisa","brica","bricu","brice","brzoj","brzaj","bride","bridu","bridi","brišu","brkaš","brkaj","brode","brkom","briǆa","briju","briǆu","brkao","brkam","breca","brest","breša","breši","breše","bregu","brezu","brezi","brešu","bržoj","brzam","brzaš","brzao","bržem","bržeg","bržim","bržom","bržih","blesa","blenu","blese","blesu","blesi","blate","blažu","blati","blene","bledu","blefa","bleji","bleje","bližu","blica","bliza","blefu","bleđu","bifei","bifea","bifeu","bijen","bičuj","bedem","begom","bisti","bitnu","bistu","bijte","biǉur","biǉnu","biǉci","blaže","blaža","biǉki","biǉem","biǉna","biǉno","biǉne","bokom","boing","bokor","boleo","boeme","boema","boemi","božur","boemu","borne","borna","borni","borov","bornu","bonom","bolnu","borik","borić","borih","bluzi","bludu","bluzo","bodar","bovom","bloga","blicu","bluda","bludi","blude","bodem","bodru","bodro","bodǉa","bodǉu","bodǉi","bodom","bodeš","bodra","bodri","bodre","broma","vižǉa","vidru","vizir","vizne","vizna","vidne","vidnu","vidri","vidra","vizni","vikom","viknu","vilin","vinga","vinar","viznu","vizno","vizom","vikni","vikne","vešca","veštu","vešce","vešcu","vešci","vešan","vešam","vešao","vešte","vešaš","vešče","vidan","većma","vidar","vidna","vidaš","vejao","vešću","većam","većaš","većao","vitlo","vitla","vitlu","vicem","vihor","vitke","vitka","vitki","vitku","vitko","vičan","višom","višku","višǌu","višǌi","vične","vična","vični","vičnu","vično","viole","vinca","violi","viraž","violu","vineš","vinem","vinil","vinuo","vinov","virim","virom","viska","vitak","viske","viriš","virio","virka","virnu","virne","bubre","bubom","bubri","bubǌi","bubǌa","bubin","bubaš","bubna","bubnu","bubne","buǉom","bućnu","buǆiš","bjuik","buǆom","buǉuk","buǉon","bućka","bućne","bućku","bruku","bruke","brusi","bruto","brusu","broša","bromu","brošu","brsti","brste","bruha","brǉiv","brǉaš","brǉom","bubao","bubam","bruje","bruci","brčić","brǉao","brčka","varki","varke","varku","varci","varaj","varah","varim","variš","vario","vatam","vetre","vespu","vetri","večit","veslu","vatom","vespa","vespi","vespe","vagan","vagam","vagao","važim","vagom","bǉunu","bǉune","bǉuje","vabiš","bǉuju","važio","vapim","valov","vapio","varan","vapiš","važiš","vazda","vakuf","vazom","begov","morze","daǌem","sačom","kolao","bušiš","vezle","avare","avara","avari","aveǉu","aveǉa","avala","abver","avale","avalu","avali","karom","latiš","šišaš","šizeo","lepin","bunim","bečku","sahnu","kašom","lavǉu","pasli","maǌoj","farbi","cesar","lavru","agava","avanu","agave","agavu","agavi","aberu","aberi","avaks","avani","avana","agama","apeli","apele","apelu","argon","apoen","agape","agina","agini","agine","alfom","alfin","amonu","amoru","amora","avivu","aviva","avram","azija","agate","amuru","arada","apola","arape","abere","abera","apače","anino","apaču","apisu","apisa","kapne","amova","beǉim","obade","svedu","bundi","ovčeg","maršu","svale","mažem","saćem","zevsa","parnu","amiǆu","bukvu","žuane","ohrid","šibne","bikov","daǉem","grkov","crnku","grgur","dekom","zjapi","odesa","vršnu","bubǌu","bušna","šizio","zadre","lakšu","cesni","latio","majem","vaǉaj","crnio","lenon","gujom","didro","zarže","delam","butom","ǉutom","zrilo","kmeče","kmeta","vučom","bujao","ǌiovo","drača","ariša","basma","basen","basme","basmi","bario","barki","barci","barok","basne","bauke","bauka","bauku","bauǉa","bauci","basnu","basni","basom","batom","bapne","banči","bapnu","bapce","bapca","banov","baneš","banuo","banče","banuh","bapci","barži","barim","baržu","barda","baraž","bardu","baren","barel","bdeti","bdelo","bdeǌa","bdila","bdeǌu","baǌom","baǌam","bdela","bdeli","bdele","bdili","bebac","bdiju","begam","begaš","begao","bdimo","bdilo","bdite","bdije","bditi","baška","bačvu","bajao","bacan","bahat","bacil","bačva","bacih","bajem","bajsa","bajom","bajsu","bajte","bajta","bajna","baješ","bajne","bajnu","bajni","ataci","ataru","atest","atove","atova","ataku","asuru","atara","atari","atare","atovi","ahata","ašove","ašova","atoli","atola","atolu","aurom","atomu","aromi","aromu","arsen","arije","ariši","ariji","arkom","ariju","arčio","astmi","asura","asuri","asure","asova","asove","astal","asovi","bazdi","baznu","bazno","bazam","badǌu","bazao","bazde","bazar","bakru","bališ","balio","balom","baner","banem","bakće","bakǉi","bakću","balim","balav","babac","babǉe","babǉa","ašovu","ajvar","ajncu","ajnca","babǉi","bagru","bagro","badǌi","badǌa","babǉu","bagra","bagri","bagre","dičan","dirnu","dičim","dičiš","dičio","dirki","dirke","dirku","dirni","dirne","dična","dleta","dlaci","dobih","dletu","dični","dične","dično","diǌom","dičnu","dildu","diznu","dimim","dimna","dimio","dizan","digoh","dizač","dizne","dizna","dimne","diodu","diodi","diran","dirka","direk","dimnu","dimni","dinom","diode","dioda","douče","dosut","douči","dođoš","dočuo","dopru","dopro","dorat","dosuo","dospu","dojen","doǌom","doǌih","dražu","drale","drala","dojka","dojim","dojki","dojci","dojku","dogmu","dogmi","dogod","dozva","dodah","doboš","dobom","dovoz","dogme","dogma","dokom","domen","domak","donde","doneh","donet","dolet","dokon","dolio","dolij","dolih","gumna","guliš","gumno","gumom","gumnu","guknu","gukni","gulio","gulim","gunđa","gurue","gurua","gurui","gusan","guruu","guran","gurav","gurka","gurnu","gurke","grđoj","grđom","gubav","gubom","guber","grđeg","grčom","grđem","grđih","grđim","gudim","guzno","guzni","guznu","gukne","gukao","guzio","guzim","guziš","guzne","guzna","datim","dasom","deǉao","deǉen","deǉem","danuo","danku","daruj","dasko","daski","deǉeš","divov","divaǉ","divom","diglo","digle","deǌak","deǉiv","deǌka","deǌci","deǌku","gutao","gutam","gutač","gutaj","gutaš","gusko","guski","gusle","gustu","gutnu","dalaj","gušen","damar","danka","damin","gucni","gucne","gucnu","gušao","gučem","drali","dukat","dužoj","duksa","dumao","duksu","dužih","dužem","dužne","dužom","dužnu","dunem","dupǉi","dupǉe","dupǉu","durio","durim","dunuo","duneš","dunuh","dupǉa","dupke","dugin","dudla","dudom","dudov","dubim","drǉaj","dubio","duvar","dubǉu","duduk","dueti","duete","duetu","duždu","dužda","duele","duela","dueta","duelu","đipih","đipio","đipiš","đonom","đokom","đipao","đipam","đipaš","đipim","đipaj","đubri","eboli","ebole","ebolu","đulad","đuveč","đuska","ebola","đusku","đurđa","đurađ","đakom","đaure","đilas","duǌom","đorđa","đorđu","đorđe","đauri","đemom","đačku","đermu","đerma","dreči","dreci","dreše","držak","dreši","drema","dreku","drena","dresu","dresa","držan","drmam","drkoš","drmao","drmaš","drmah","drzne","držah","drznu","drkaj","drkan","draću","draće","drvar","drvna","dralo","draǌa","draǌu","draǌe","drvne","drvǉa","drvǉu","dreke","dreka","drvnu","drvca","drvom","drhću","drčna","drčni","drčne","drsku","druma","drhći","drhće","drčno","dršću","dršći","drǉav","drǉao","drǉam","drške","drčnu","drški","dršće","dršci","drobi","drobe","drozd","droce","droca","drmne","drmaj","drmnu","droba","drnda","droco","drpio","drpim","drpne","drske","drpnu","drpam","droǉi","drpao","drpež","drpaj","grčko","vrsnu","vrsno","vrteo","gasna","vrtna","vrpci","vrloj","gasne","gataj","gataš","gacam","gacaš","gacao","gasno","gasni","gasnu","gatao","gatam","vreǌu","vrzle","vrzla","vreža","vrevu","vreže","vresu","vresa","vrzlo","vrlim","vrlih","vrlom","vrlog","vrila","vrzma","vrile","vriti","vrilo","gesla","gelom","geslo","getoa","gestu","gegaš","gegah","gegaj","geknu","gekne","getom","ginem","gibao","gineš","ginko","ginka","gejše","gejša","gejši","gejšu","gajen","gajem","gajka","gajki","gajke","gađan","gašen","gajbe","gajdi","gajde","gajku","gdeko","gviri","gegav","gegao","gegam","gaǌao","gaǌam","gaǌaš","gvint","gaǆet","vožda","vodnu","voždu","vozam","vožen","vodna","vodih","vodne","vodno","vodni","vozao","vozno","voznu","volom","voleh","vozaš","vozar","vozne","vozna","vijka","vijaš","vijke","vijci","viđaj","viđan","vijak","vijao","vijam","vlagi","vodao","vodam","vodah","vodaj","vodaš","vlaži","vlaže","vlazi","vlaše","vlati","vrbov","vrbin","vrbom","vrveo","vrbuj","vrači","vranu","vraču","vrbak","vraǌe","vrvio","vrdnu","vrdne","vreva","vrevi","vreve","vrdam","vrgaǌ","vrdao","vrdaj","vrdaš","voǌao","voǉnu","voǌaš","voǌom","voǌem","votki","vosku","vošti","vođin","voćar","voćno","voćne","voćnu","vrani","vraže","voćke","voćka","voćki","voćna","voćku","ginuo","grdǌe","grdǌa","grdǌi","grebi","grdǌu","grdna","grdiš","grdne","grdnu","grdni","grebu","grivu","grivi","griža","griži","griže","gredu","gredi","greju","grive","griva","graje","graja","graji","graǌa","graju","grami","gralu","gramu","građi","građa","graǌe","grdan","grgǉa","grdim","grdih","grdio","grbav","graǌu","grbio","grgeč","grbom","grudu","grude","grune","grupo","grunu","grofu","gromu","groša","gruda","gruva","gruša","grčem","grcaj","grčim","grčiš","grčio","grcam","grcav","grcao","grcaš","grcah","grlić","grlio","grlom","grmeo","grmaǉ","griǌa","griza","griǌe","grlen","grlat","grmne","grozd","groza","groze","grozu","grozi","grmom","grmnu","grmǉa","grogi","groga","gloži","glože","glođe","glođu","globi","globe","globu","glogu","gloga","gluvo","gnevi","gneve","gnevu","gnomi","gnome","gmaza","gluvu","gmazu","gmižu","gmiže","gipsu","gipsa","gihta","glanc","glade","gipke","gipka","gipki","gipku","gipko","glase","glibu","gliba","glini","glinu","glađa","glača","glađe","gleđi","glađi","gorja","gorču","gorje","gotik","gospi","goroj","gorom","gorča","gorči","gorče","gošće","goǉom","goǉin","goǌen","grala","grabe","gošćo","gošći","gojim","gojiš","gojio","godio","gnuša","golać","goloj","golet","gnoja","gnomu","gnoje","gnoju","gnoji","gonga","gordu","gorde","gorku","gonio","gonim","gorda","goniš","misir","bučao","filom","azilu","zortu","mašću","amamu","zabih","bujaš","kanuo","zapoj","gazom","faula","žǌeli","burmi","istra","parča","cerić","pevcu","karmi","istre","kolcu","svene","aduta","vekni","delao","mažeš","latim","kmeza","ciǉnu","satka","iraca","šibǉu","zamre","bušim","pačić","lapće","cesnu","zubnu","zjala","kozju","kmera","datog","lakih","zaori","kolom","kokao","lavri","dahću","luvra","verim","vekom","kopcu","bušnu","zalih","dučeu","kasti","fenom","vezah","deblu","mašin","ǌačeš","vašku","zrnom","ǉućim","ǉušte","dabra","gǌila","ǉućoj","zubna","mauče","felnu","lamom","akata","mazgi","deobu","zaboh","alase","šetka","kopca","bedom","gǉivu","laktu","delti","satri","moloh","šiitu","danac","bušio","satru","anala","guamu","vezuj","maǌku","svede","žuanu","zapio","pasle","nultu","ǌišeš","cokće","šibnu","macom","faunu","param","crniš","lanom","veznu","adski","nutka","zujav","šiješ","parim","zavih","mahne","kapǉi","škiǉe","sveza","vršiš","dahnu","dravu","sarmi","obadu","katar","packu","vrtnu","mensu","široj","vrcao","lalom","alama","šizme","zjape","zaseo","daǉom","vunom","venuo","cičao","dvama","cikne","bidea","feudu","aginu","maznu","šibaš","bekne","svanu","fakte","bivaš","denuo","vučju","datom","kobnu","kaǉao","oberu","aloju","fazne","vuklo","lakta","vrtom","kasaš","vukov","dadnu","škode","šiǉku","cifri","luvru","drine","fesom","saspu","mačva","cimni","škiǉi","cepki","dagǌi","kolca","kanue","šibom","fiolu","pašom","vepru","šišaj","magom","amebu","lavin","kokom","bečiš","šiziš","cimne","crepu","lanča","mašim","zaovu","buknu","dučea","zriču","zaržu","zrače","alali","datih","bideu","ǉuǉaš","olgom","depou","anusa","larmu","šišti","zalij","olimp","biomu","bečio","belić","komšo","berem","daćom","debru","alevu","denga","zucka","fazom","alkov","lastu","latih","ganǆa","zalio","moncu","lanke","zorom","žukov","vrčom","dahći","dvore","drini","bukte","obare","flaka","benǆa","pajki","dašku","zapeh","kafee","zadra","veriš","vernu","akten","cerek","vulvi","vršcu","lanči","mavar","zadaj","zadro","lamin","kačio","vaǉku","mazao","šiznu","uroša","bivam","ǌušci","bioma","svelo","iridu","kašǉi","lujem","gogoǉ","vulvu","besmo","zorta","getea","odesu","binom","mitar","kopne","laosa","izidu","mekim","ǌivom","šipci","kovao","ǌisku","lorki","geteu","uranu","fijat","otelu","cesne","šizmi","drinu","lasom","zaore","obada","beǆom","ǉutǌi","ferma","irigu","delaš","kasom","belcu","mašni","masla","ǉutoj","packi","derǌa","žrnov","kopči","larvi","ǌakao","cepku","zadam","istri","felni","cirku","cimam","beǉom","cmači","šišam","kanǆu","osake","mazda","zupcu","pariš","mausa","istru","sveli","cesna","kozom","maǉom","busao","alasu","karao","meiđi","zakle","šiita","žućoj","kolta","deltu","mađar","gǌeči","gušče","kobru","gǌile","gadom","flaku","mazgo","koknu","buter","adska","zrelu","denic","mazio","adsko","žuana","vezeš","daǉnu","gazio","šišah","davnu","daǉoj","iride","alovu","vrška","cirke","vezla","vaški","kmetu","šiǉio","dašću","lionu","sapne","gracu","širit","bulku","gogen","izido","gǌidu","cistu","zovnu","koltu","dadoh","koksa","zaora","šiiti","malte","vukle","verem","mašao","coknu","pauke","beknu","maora","bejah","adute","kolce","lakej","kanuu","sasuh","butku","santu","zadar","butnu","obari","budnu","ǌušne","beleo","sasuo","izidi","farsi","komom","šišku","vaško","pauna","vulva","ǉutnu","pasju","cokiš","aleve","grkom","gušću","faltu","iliji","paune","ǌušni","farom","saftu","veknu","adađo","lavra","sajli","anglo","fajla","gadio","beǉeg","gizom","aloji","deobi","buntu","šikǉa","vaǉka","doboj","ǌušio","aleva","filcu","daška","macin","saraj","zakuj","mačvi","koalu","ovčem","buvin","šipom","vršem","malta","dahne","bivao","aorti","laike","laknu","mašio","knezu","vudua","depoa","devom","sačmi","laneš","debǉu","karaj","daǉim","šikne","ǌišti","koksu","šibǉa","citri","maori","fiole","bulki","mahom","koker","žǌele","vučnu","alkom","ǌegoš","vukom","kovit","gušom","šibaj","ǉućem","zoǉom","kanom","bucom","mednu","binga","kauri","crknu","vukoh","kamom","bedru","firca","ibrom","guglu","gasio","busaš","zairu","ceriš","derem","laosu","zucni","iroda","ǌuški","kašǉu","greja","bečka","sačmu","zujim","miloš","ilire","zonom","garom","kanua","mosad","omege","dvaju","mekih","kodom","bereš","paslo","paraš","ǌutnu","ǌušnu","maših","satre","ganem","orvel","sanki","bikom","anusu","lanuo","beǉem","šinom","masci","ǌuško","iliǆu","debar","amiǆa","bekap","dveju","ǌište","gǉivi","davši","delaj","svata","mačve","gazdo","alatu","kmete","dahće","zadaš","bežah","mahnu","obeda","ilije","ǉuǉne","šišao","svali","zucnu","oazom","lažju","gardo","zjale","crevu","odine","mačju","širih","ǉućih","ciknu","zovom","gazim","cerio","kopni","nužnu","ganeš","zapni","zurli","ganuo","zaneh","zapah","alaču","zupce","pevce","finoj","kapaš","dabru","mašam","daira","cimnu","osaki","lakne","azota","odesi","zujao","paǌem","mosul","zaron","vajdu","cimaš","laiku","vebom","crneo","magmi","kmeči","marse","gazih","škodu","daǉno","falus","azotu","ilijo","burom","adutu","pasom","zevsu","mahni","kokne","ganǆu","masat","vajao","iliǆi","faznu","svare","cičiš","aortu","azura","bečke","orfej","ivanu","vepre","šilom","kapče","pario","dadni","bidne","nuždi","dučić","šireg","ilira","crvom","drina","alasa","cicom","gǌura","vaǉke","maurt","adsku","šibam","vence","aleju","pasao","majao","mleci","larvu","šiǉke","zaira","kapao","kačim","monca","šiite","ǌušiš","zapne","femka","dadne","kaǉaš","iliǆe","minos","zarih","zovin","ǉutne","alavu","sahne","lakoj","mlavi","kajte","zamru","zarom","datoj","veneš","ganǆi","malti","divac","gasiš","venca","ǌisnu","zreǌu","maǌem","kastu","iliju","kajao","bunca","buniš","marži","odina","maǌom","vajaš","burnu","bupnu","beǉih","šiški","alkar","konca","lanki","feude","agino","kasao","mlava","žućom","murat","ǌišem","ǉućeg","bukću","oldos","crvǉa","anuse","vršci","deluj","vezlo","vršku","bunta","žućim","nulom","draču","ǉućom","ǉušti","kajas","lapis","vencu","bukne","magmu","vaǉam","venom","širem","saspe","bečki","vrčem","lavre","cičim","kapǉa","zaovi","šihta","cimao","saspi","zario","liban","dadem","šijom","biroe","azile","cinka","bivak","safta","anodi","zovni","ǌihao","vezem","maltu","ircem","pašin","šiknu","gǌidi","cokću","anale","vršca","venem","pevah","saših","dedal","vršne","danca","cerim","bukće","ǉuǉam","crepa","kasnu","fiksu","cigar","vršac","aleji","dravi","ǉuǉnu","larmi","berbu","šestu","berbi","zapnu","buvǉe","šipki","kokam","verao","kanov","feuda","iliǆa","liona","amana","kopce","azila","guǌom","patki","dušan","konta","paraj","kaǉam","cikom","falti","azili","ibija","crkoh","gǌilu","zaždi","vršǉa","anodu","faktu","zameo","cmače","obasu","ambru","ǉuǉao","apela","gadim","gugla","osaka","derao","kajah","mačvu","crnki","omegu","papan","farsu","altom","šiǉka","papka","alter","cmaču","izide","odese","šište","adske","vrcka","feces","kauče","buvǉu","zakla","bupne","šizma","vergl","laika","bučnu","osaku","isaku","dendi","bukvi","ǌuhom","kaure","filca","lapću","zavio","vafla","svele","amove","šibao","žućih","iridi","ǌutna","satro","alvom","monea","aktom","cinku","lanču","fićom","dahau","vulve","kapǉu","kapnu","amura","ambre","sapeo","besnu","maǉen","šipče","kopka","sajlu","zubom","pauku","iliri","sašio","zarza","kaska","minsk","denem","zucne","cepka","guǌem","ganǆe","kapku","daǌeg","vrǉav","kobri","škoda","zupca","irodu","magov","anisa","zarij","karaš","fintu","fauni","irsko","lasti","zemun","karam","parem","irida","obere","maǉem","zovne","maržu","cepti","vršen","amama","bednu","dunav","šihtu","odinu","zarđa","vereš","bunom","zamro","papom","cimaj","drave","bukti","bepče","mašiš","vedru","paroh","kašće","fakti","feštu","bingu","dedov","šipči","pasla","zadru","makiš","izida","urošu","gǌeče","paseš","svela","benǆu","vjeki","parao","paǉbi","sarmu","beǉoj","pevca","cokne","dašće","ganga","obede","paunu","obedu","edema","munuh","murta","musti","musav","mumla","mulci","munem","munuo","muneš","mutnu","mutni","mufom","mucam","mucav","mutim","mutan","mutio","mutne","mutiš","mužić","mužik","muzao","muzeš","muzem","muvǉi","muvǉe","muvǉu","mužev","mudru","muzla","muklo","mukli","muklu","mulat","muknu","muzom","muzli","mukao","mukle","mukla","mǌeǌe","mǌeǌa","mǌeǌu","nantu","nanta","mućku","mućki","mućne","mućnu","mućni","naser","ničea","nilom","ničeu","nišom","niški","nemcu","nedić","nemče","nehru","nepal","mučko","mučki","mučku","mučne","mučna","mucaš","mucao","mučan","mučke","mučka","mučni","muǌom","muǉem","mućak","mućke","mućka","muǉav","mučnu","muǉam","muǉaš","muǉao","mrvio","mrvim","mrviš","mrgud","mrvom","moǉcu","moǉci","mravu","mrači","mrače","mrdao","mrzla","mrzak","mrzle","mrzlo","mrzli","mrdnu","mreni","mreti","mrenu","moriš","morio","morom","motan","motam","moped","molih","morah","morža","moren","motaj","moǉah","mošus","moǉce","moǉca","motki","mošti","močom","mrsna","mrsku","mrsiš","mrsio","mrska","mrski","mrske","mrsnu","mrǉom","mrǉao","muvan","muvǉa","muvaj","mršte","mrsom","mršti","mrǉam","mrǉav","mrkih","mrkim","mrkla","mrkli","mrkle","mrznu","mrzne","mrkva","mrkvu","mrkvi","mrklo","mrmor","mrmǉa","mrsim","mrsan","mrkov","mrklu","mrkog","mrkoj","mrkom","nušić","nerad","nepcu","nerva","nerca","nervu","nepar","neona","nesta","nefer","neuku","nehaj","netom","neuke","negom","neguj","neživ","nedra","najma","najeo","najmi","naǆak","najmu","neman","nemih","nemio","nemog","nemoć","nemom","nemah","nemao","nemaj","nemim","nemeo","ničem","nicao","niška","niške","nitna","ninǆi","nitne","nitnu","nitni","niško","nožar","nokia","nožnu","nišku","nišče","nogat","nižoj","nižom","nizao","nikao","nizom","nećka","nejač","nižem","nižih","nižeš","nikla","nimfa","niknu","nimfe","nimfu","nimfi","nikli","nikle","niklo","nikne","niklu","naduh","nadut","nazva","nazre","nazeb","nagoj","nagoh","nadvi","naduo","nadre","nazro","nalio","nakot","nalih","namaz","nalij","nazuo","nazru","nazuh","naiđi","naiva","navod","navij","navoj","navro","navre","nabor","nabih","nabra","navio","navek","navru","nagne","naglu","nagnu","nagom","nagog","nagan","navrh","nagim","nagla","nagih","nauma","nauko","naume","naumu","naumi","nasta","naspu","nasuo","nasuh","nasut","nauǉe","načnu","načne","načuh","nađoh","naški","nafti","nauǉi","načeo","načeh","načet","nanče","naoko","napeo","napev","namet","namah","nanet","nanom","nanin","napis","napoj","napnu","nasip","naspi","naspe","napih","napit","napij","napni","napne","moler","lupiš","lupih","lupka","lupni","lupne","lupan","lulom","lupah","lupim","lupež","lupnu","lučim","lučem","lučio","lučke","lučka","lutak","lupom","lutan","lufta","lutaj","lonce","lonca","lotos","lonče","lomni","lomna","lomno","lomom","lomnu","lotou","ludeo","luger","ludin","lukac","luduj","ločeš","ločem","lođom","lojne","lojem","ǉosnu","ǉubih","ǉuski","ǉupku","ǉagom","ǉotić","ǉosne","ǉusku","makle","makla","makli","maknu","maklo","ǉusnu","ǉuspe","ǉusci","ǉuspi","lučno","lučnu","luđem","luđeg","lučko","lučki","lučku","lučne","lučna","luđim","luǌam","lujku","luǌao","ǉevin","luǌaš","luđom","luđih","luđoj","lujki","linču","linča","lipov","lipte","lipom","limfi","limfe","limfu","linku","linka","lipti","lisci","lisca","liscu","litru","litri","lipši","lipše","lipšu","lisnu","lisne","ligǌa","ligom","ligǌi","lizan","ligǌu","livca","liven","livce","livcu","lizne","limba","limbu","limom","lizom","liznu","likre","likuj","ložim","ložen","ložio","ložom","ložiš","logom","logoa","logos","ložač","logou","lozom","lokni","loknu","lomio","loman","lokva","lokao","lokve","lokna","lokvu","ličko","lički","ličku","lišim","licka","licej","ličan","ličke","lička","lišio","lovna","liǌao","lovne","lovče","lovor","lišću","lišiš","lijem","lijom","liješ","makom","mitra","mitom","mitre","micao","mitru","mirta","miriš","mirte","misom","mirtu","micve","miški","miške","mišku","mišja","mišom","mičeš","micvu","mišem","mišev","milio","mileo","milih","milom","milog","migne","migao","mignu","migom","miloj","minǆi","minǆe","minǆu","mirio","mirim","miluj","minom","minǆa","minuo","mogoh","modar","modla","modem","mlinu","mlina","množe","mogah","množi","modri","modre","modro","molbi","modru","modlu","modli","modno","modra","modom","miǉom","miǉeu","mlaza","mlaka","mlazu","mišji","mišje","mišju","miǉei","miǉea","mlake","mlele","mlela","mleli","mleti","mlelo","mlaki","mlaku","mleku","mlate","mekšu","melos","memle","mekom","memli","menti","mentu","memlu","menom","menzu","mamca","mamut","mamce","mamcu","mamci","malić","mamim","mamiš","mamio","manem","marve","marva","marvi","marvu","marvo","manir","maneš","manom","mapom","manuo","mehom","metru","mečka","mečki","mečke","metnu","metni","metoh","metri","metre","mečku","meǉem","mejlu","meǉeš","mećem","meǌan","mešan","mečom","međaš","mejla","međom","merni","merne","mesim","mesiš","mesio","merio","meriš","metiǉ","metil","metku","metne","metli","mesnu","metao","mesje","osici","osiǌe","osicu","osinu","osino","osion","osipu","osipa","osiǌi","ospem","osobo","ostav","ostaj","ostah","osmoj","osmim","osnim","osnuj","osnog","osamu","osami","osvit","osede","orosi","oruđu","osame","orući","osedi","osili","osile","osina","osini","osine","oseke","oseka","oseki","oseci","oseku","oteće","oteše","oteći","otide","oteću","otežu","oteži","otele","oteče","otetu","otidi","otkri","otkos","otoke","otoci","otope","otire","otidu","otiče","otkop","otiču","osuta","osulo","osute","osuto","osuti","ostvi","ostve","osula","osuli","osule","osutu","otaǉa","otaču","otaǌe","oteže","oteža","osuće","osuše","otapa","otače","otaca","opran","opoje","oprem","oprže","opreš","opori","oporu","oporo","oprži","opute","opusu","oputu","orala","opšiv","oprǉi","oprǉe","opseo","opusa","opsuj","opipa","opilo","opipu","opise","opiru","opeći","opeče","opila","opili","opile","opisi","opiću","opiće","opkop","opnom","opleo","opite","opišu","opiju","opije","orkom","orkan","orlom","orlov","orile","orila","orili","orilo","ornim","oroze","oroza","orozu","orose","oronu","orobe","ornih","orobi","orodi","orode","orano","oranž","orati","orača","orahu","orali","orale","oralo","orane","orana","orači","oremo","oreza","oreol","oriba","orete","oraǌa","oraǌu","oraću","oraće","otoči","padaj","padež","padoh","pupin","prust","putin","pavši","pčiǌi","pazar","pakum","paktu","palih","pakle","pakli","pakta","paklo","pešti","pešte","peštu","perun","pašić","petke","petku","petki","pikču","popaj","prusa","prusi","pruse","pirej","pilat","pirot","plank","plani","pedǉa","pegom","pedǉu","pežou","pežoa","pegav","paoci","pegle","peglu","pegli","pezos","pelin","pelen","pelir","peniš","penio","pekla","pekao","pekle","peklo","pekli","palci","palce","palcu","pandu","pandi","palmu","palmi","palog","paloj","palom","panoa","paora","paoke","paore","paoru","panoe","panou","paoka","oholo","oholi","oholu","ocedi","ocede","ofrǉe","otuđi","ofuca","ohole","ohola","oceni","očaje","očara","očepi","očeše","očeša","ocilo","ocila","ocrne","ocrta","ocrni","otržu","otrže","otrla","otrli","otrle","otpio","otpih","otrem","otpij","otrlo","otrǉa","otrče","otupe","otuđe","otupi","otrpi","otrpe","otrta","otrča","otruj","ojele","ojela","ojuži","oǌuše","oǉuti","ošure","oštru","ošuri","ojadi","ojade","oǌuši","pavlu","panse","patek","papue","oćuti","oćuta","oǆaka","oǆaku","oǆake","očiǌi","očice","očnim","očnog","očnih","očite","očešu","očiti","očica","očitu","očnom","ošine","očǌak","ošini","ošiša","ošinu","očuva","očnoj","očusi","očuhu","očuhe","opeci","ovcom","ovsom","ovnov","ovnom","ovsem","ovoja","ovčji","ogoli","ogole","ogrev","ogrne","ogrej","ogade","ovčju","ogadi","ogled","oglav","obuje","obuše","obuju","ovala","obuća","obule","obula","obuli","obuči","obuti","ovale","oveća","overu","oveće","oveću","oveći","ovalu","ovali","ovana","overi","overe","odvih","odvio","odvoj","odeva","odgoj","odaće","odaǉi","odbih","odveć","odvar","odene","odziv","odeǉe","odiže","odiše","odižu","odera","odenu","odere","oderu","oderi","oguli","ogule","ogǌem","odadu","odade","ogrnu","ogrni","ogrte","ogrću","ogrće","odale","odato","odate","odatu","odaǉe","odaji","odalo","odanu","odata","odape","nojev","nošǌu","noćim","noćiš","noćio","nošom","nošen","nošǌi","obimu","obima","obiše","obija","obiđu","obila","obeju","obile","obilo","obili","nosao","nosaš","nosić","nosih","noktu","nokta","nomad","nosam","normi","notne","notni","notom","notnu","nosni","nosnu","obreo","obrem","obreh","obrne","obris","oboji","obrao","obrvu","obrvi","obrni","obrće","obrub","obrću","obuze","obuva","obrta","obrnu","obrte","obrtu","oblio","oblim","oblih","oblom","oblog","obiǉa","obiju","obiǉu","obiću","obiće","obloj","oboli","obole","obora","oboja","oboru","obode","oboda","obola","obože","odišu","omanu","omane","omače","omaši","omaše","omama","omaza","omame","omamu","omami","omela","omele","omelo","omeli","omaǌe","omaǌu","omegi","omaći","oližu","oliži","oliza","olovu","oliǌa","olake","olaku","oliže","oleši","omaža","olujo","omaže","omažu","omaži","oluke","oluka","oluku","olupa","opasa","opari","opata","opati","opate","opale","opalu","opare","opara","opatu","opeku","opelu","opelo","opaši","opaše","opašu","opeka","opeva","omote","omotu","omrsi","omrse","omeđe","ometu","omeđi","omota","omiču","omčom","opaža","opade","opaze","opaku","opazi","oniks","onižu","ozare","ožene","ozari","ozebu","ozebe","ožali","ožale","ožari","ožeži","ožeže","ozida","okana","okali","okane","okata","okanu","ozona","ozime","ozonu","okale","okadi","odoka","odneh","odole","odrao","odliv","odići","odlio","odnet","odlij","odrah","oduze","oduži","oduče","odšio","oduči","odrom","održa","oduže","odsev","okotu","okoti","okrpe","okrǌi","okrpi","okome","okovu","okomi","okote","okota","okuje","okuša","okuju","olaka","okcem","okuku","okuci","okuse","okaje","okače","okaju","okera","okaǉa","okati","okate","okato","okaca","okatu","okiva","okica","okiti","okice","okovi","oknom","okide","okida","okine","okite","okinu","idiom","idilu","idole","idolu","idoli","igran","iglou","idili","ižive","izgna","izvij","izgon","izdra","izdah","izbih","iživi","izbij","izvih","izvio","zobao","znanu","zobǉu","itake","itaka","znana","znadu","znane","znani","itaki","ivera","ibrik","ivere","igloa","iveri","ifska","itaku","ifske","ibisa","ifsku","ikonu","ikoni","ikrom","imade","ikuda","izuju","izuje","izuće","izjeo","izuću","imami","imune","imiǆu","imuno","inata","imunu","imaše","imahu","imbus","imiǆa","imele","iznet","izlij","izneh","izrez","izosi","iziđi","iziđe","iziđu","izlih","izlio","izrod","izuti","izumu","izuče","izuše","izuči","izula","izuva","izule","izume","izuli","zekan","zeznu","zekom","zemne","zemna","zevaj","zevaš","zevne","zevom","zevnu","zemni","zerou","zeroi","zecom","zetom","zemnu","zemno","zeroe","zeroa","zdrao","zdipi","zebao","zebeš","zebem","zdeli","zdele","zdelu","zdere","zdera","zebla","zebǌi","zebǌu","zevao","zevam","zebli","zeble","zebri","zebǌa","zebru","zijam","zijao","zijaj","zijaš","zinem","zimus","zineš","zinuh","zinuo","zlate","zloći","zloćo","znade","zloću","zlima","zlobi","zloga","zlobu","zivka","zeǉem","zidan","zidam","zečja","zečje","zečju","zidao","zidno","zidnu","zimom","zilot","zidaš","zidić","jašio","jašim","jajna","jajnu","jajne","jačem","jačeg","jačih","jačoj","jačom","jajce","jedak","jeban","jedio","jedim","jaǌac","jajcu","jaǌca","jaǌci","jaǌce","jatak","jasli","jatom","jauke","jauka","jarcu","jarče","jasle","jauku","jačan","jačam","jačao","jačaj","jačaš","jauče","jauci","jauči","jahan","jauču","jetka","jerej","jetke","jetko","jetki","jelci","jemca","jeres","jemči","jetku","ječim","ječao","ječiš","ječmu","ječma","jecao","jecam","jecaš","ječam","ježev","jedru","ježio","ježić","ježiš","jedić","jediš","jedom","jedri","jezde","jelak","jelej","jelki","jelik","jezom","jezdi","jekne","jekom","jeknu","isuše","isuču","isuši","ičija","ičemu","isuka","istup","isuci","isuči","isuče","ičiji","išteš","ištem","išuǌa","iđaše","iđahu","išara","ičiju","išeta","išopa","išiba","iseru","isere","iseca","isisa","irvas","inatu","isele","iseku","iskop","israo","ispra","israh","istka","istek","ispeo","iskri","ispio","ispne","ispih","jamom","jalov","jamče","jarad","jamči","jadaj","jadaš","jadom","jakoj","jazom","jaram","jarmu","jarce","jarom","jardu","jaran","jarić","jemen","josip","junga","judin","jalti","jalte","jaltu","jahve","janus","javan","jagmu","jagmi","jadam","jadac","jadao","javom","javih","zdela","žbuna","žbicu","žbunu","žvaki","žbiri","žbira","žbiru","žbice","žvale","žgoǉi","žgoǉe","žgoǉo","ždera","žgoǉu","žvaću","žvaći","žvrǉa","žgoǉa","žgebe","žario","žarka","žariš","žapce","žapca","žapci","žapče","žapcu","žarke","žacnu","žacne","žaǉen","žaǌeš","žaǌem","žarku","žarna","žarom","žarni","živaǉ","žeǌen","živin","živnu","živne","žešću","žeǉen","žeǉnu","žeǉne","živoj","žigne","žigao","žignu","žigom","živcu","živca","živǉu","žeglo","žegla","žegom","žderi","ždere","žderu","ždrao","žednu","žeste","ženko","žesti","žešća","žetvi","žezla","žezlu","želeu","erlov","epsku","erlom","esere","esera","epohu","epohi","epska","epsko","eseri","etaži","etažu","eseje","eseja","eseju","eliti","elisu","elitu","emira","elana","elisi","elanu","eocen","epove","eposi","epohe","eparh","epike","epova","epici","žabǉu","žagor","žaket","žadom","žabin","žabar","žabom","žabǉe","žalac","žanru","žaoci","žaoku","žalom","žalna","žalca","žanra","žamor","etrom","etnos","evina","egeja","evinu","etapi","etapu","etici","etera","edipa","erosa","ervin","erosu","etnom","elbom","edipu","enoha","epiru","epira","žižna","zbega","zbaci","zbegu","zbile","zbila","zajme","zajma","zajmi","zbace","zajmu","zbili","zbiju","zbije","zbiǉe","zbiǉu","zbiǉi","zbiru","zbira","zbiti","zbija","zbiše","začeo","začne","začuo","začnu","zatro","zatri","zatrt","zauze","zatru","začuh","zašlu","zašli","zađem","zađoh","zađeš","zašio","zašao","zašij","zašle","zašla","zgodi","zgodu","zgrne","zgrbi","zgade","zvrji","zgadi","zgaze","zgrnu","zgule","zguza","zguli","zdaǌu","zdaǌa","zgrče","zgrte","zgrči","zgrću","zgrće","zbrza","zbrda","zbune","zvaǌa","zvahu","zbora","zbiće","zbore","zboru","zbori","zvaǌu","zveči","zveče","zvonu","zvrje","zvoca","zveke","zveka","zveku","zveru","zvera","žleba","žišci","žlebu","žmure","žmiri","žiška","žične","žiške","žišku","žiški","žmuri","žreca","žreba","žrece","žrecu","žreci","žrvǌa","žrvǌe","žrvǌu","žrvǌi","žiteǉ","žirom","žitki","žitke","žižni","žižne","žižno","žilom","žižnu","žitom","žitnu","žičke","žičku","žički","žitku","žitni","žuǉić","žuǉio","žućeg","zasej","žućem","žuǉao","žučnu","zaspa","zasuh","zasja","zatre","zaton","zasro","zaspu","zasta","zasuo","zasun","žudne","žudna","žudni","žudnu","žudno","žubor","žrtvo","žudan","žudio","žudeo","žudǌi","žurnu","žuteo","žučna","žučan","žurbu","krhku","krcka","krcnu","krcne","kruću","krući","krhki","kršem","kršan","kršen","kršna","kršio","krčim","krčao","krčio","krčka","krčiš","krsnu","krsno","krste","krtim","krsti","krpǉe","krpom","krsna","krsni","krsne","krtih","kruti","krutu","kruće","kruća","krtom","krtog","krtoj","krute","kruta","kužne","kužna","kužni","kužnu","kužno","kudio","kudim","kudiš","kužan","kudǌe","kukam","kulom","kulov","kultu","kumim","kukah","kukao","kulen","kulak","krǌeg","krǌav","krǌem","krǌio","krǌim","kršne","kršno","kršom","kršnu","krǌih","kubni","kubne","kuvan","kugom","kuvaj","krǌoj","krǌom","krǆom","kubna","kubik","kraci","krahu","kraću","krvca","krasi","krase","krati","kraha","krvcu","kremi","kreku","krepa","krepi","krepe","krdom","kredi","kredu","kredo","koǌic","koǉeš","krabi","koǌče","košen","košem","koška","koǉem","krabu","kralo","krale","kranu","krana","kradi","kravi","kraka","kraku","krake","krosa","kroza","krosu","kroti","krote","krmku","krmke","krmno","krmče","krmom","kroče","krpež","krpim","krpiš","krpio","kroje","kroja","kroji","kroju","krešu","kreju","kreji","kreča","krete","kreče","kreču","kreči","krzav","krkǉa","krkaj","krmka","kriku","krznu","krile","kriće","krina","kumin","ledni","ledne","ledno","ležah","lednu","legoh","ledim","ledna","ledio","ležem","lemio","lemao","lezbo","ležeš","lemam","lelek","laćam","lajku","laćao","levim","laćaj","lajav","lađom","lajem","lajke","lajka","levis","legle","legli","legnu","leglu","levka","levih","levke","levku","leđne","leđna","leđni","leđnu","lecne","letǌo","lecnu","lečiv","lejom","libim","leǌoj","libio","libiš","leǌim","leǌih","leǌom","leǌog","lepra","lepku","lepre","lepru","lepri","lentu","lenti","lepet","lepiš","lepio","letvu","letvi","letka","letnu","letku","lesku","leski","kusih","kusim","kusog","kusoj","kusom","kurči","kurče","kusam","kusaš","kusao","kuter","kucah","kucaǌ","kucnu","kucne","kutke","kutka","kutku","kunom","kupea","kupaj","kumio","kumov","kumom","kupee","kupče","kurat","kurci","kurce","kupeu","kupei","kupih","kupom","kupki","kǉuse","kǉunu","kǉuca","kǉuje","kǉuču","kǉovi","kǉovu","kǉuna","kǉuka","kǉuju","lautu","lauti","lafet","lahor","kǌaza","kǌava","kǌigo","kǌiži","kǌiže","kušǌu","kušǌi","kujem","kuješ","kušan","kušam","kušao","kušǌe","kušǌa","kuǌam","kuǉnu","kuǌao","kuǌaš","kujnu","kujni","kujom","kuǉne","kuǉao","kalež","kalio","kalim","kakaa","kaišu","kakim","kakiš","kakio","kalif","kamiš","kamaz","kvaki","kvasa","kališ","kalfu","kalfi","kavgi","kavgu","kagan","kavzi","kjotu","kjoto","kjušu","kablu","kadim","kazuj","kazah","kaiša","kaiše","kadom","kadio","kadre","kadro","kadri","kezom","keziš","keksu","kedri","kedra","kedru","kezio","kezim","kerom","kejom","kecom","keǉem","keǌam","keǉom","kesom","kecam","kecaš","kecao","kviza","kvaču","kvota","kvoca","kvoti","kvasi","kvase","kvasu","kvače","kvaci","kvrga","kegle","kegla","kegli","kedar","keglu","kvrgu","kvrge","kevom","kevću","kevće","jurti","jurtu","jutru","jurca","juncu","junci","jurne","jurta","jurnu","kabul","kainu","kaina","kafke","kafka","kaida","kaide","kaidu","kaidi","ješće","ješnu","jidiš","jogom","jogin","ješna","ješan","ješne","ješno","ješni","jodna","jugom","jošte","junce","junca","jodni","jodne","jodno","jodom","jodnu","kremǉ","kraǌa","krima","krita","krimu","kotor","kotež","kohov","kočom","kočiz","kritu","kurde","kurda","kurdi","kjota","kursk","kruso","krona","krfom","kubom","krcun","keops","kemal","kipra","kirke","kipru","kafku","kafki","kelta","kelte","kihot","kopta","kninu","kopte","koptu","kopti","kmere","kijev","kmeri","knina","kmeru","keǌao","kližu","kliže","kliza","klika","klize","kleče","kleca","kleči","klešu","kleše","klipu","klipa","klica","klici","kliku","kliki","klina","klinu","klele","klela","kleli","klelo","klaću","klaće","kleko","klete","kleta","kleti","kletu","kleto","klemu","klemi","klena","klera","klepi","kosog","kosoj","kosce","kosim","kosač","kosio","kosiš","kosih","kocem","kofom","kočim","kočiš","kočio","kotvu","kotvi","kotla","kotlu","kliću","kliǌu","klone","klopi","klonu","kliče","klicu","kliču","kliǌi","klija","kloǌa","korim","korio","korom","koriš","kloǌi","kloǌe","klube","kopǉu","kopču","kiler","kilta","kimom","kiltu","kidne","kidaj","kidnu","kikot","kikom","kindl","kipeo","kipić","kipte","kipom","kinem","kipar","kinuo","kiblu","kibli","keǌka","keǌaj","kiber","kivne","kidan","kidam","kidao","kidaš","kidač","kivnu","kivǌe","kijem","kiǌim","kiǌiš","kiǌio","kijao","kijam","kijah","kijaj","kijaš","klate","klaǌu","klala","kladu","klale","klalo","klali","kisne","kislo","kisnu","kitio","kitim","kipti","kisla","kisli","kisle","kitiš","kičmi","kišan","kišnu","kifla","kitov","kiflu","kifli"
            ],
            Ia = "present",
            Ma = "correct",
            Oa = "absent";
        var Ra = { unknown: 0, absent: 1, present: 2, correct: 3 };
        function $a(e, a) {
            var s = {};
            return (
                e.forEach(function (e, t) {
                    if (a[t])
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o],
                                r = a[t][o],
                                i = s[n] || "unknown";
                            Ra[r] > Ra[i] && (s[n] = r);
                        }
                }),
                s
            );
        }
        function Pa(e) {
            var a = ["th", "st", "nd", "rd"],
                s = e % 100;
            return e + (a[(s - 20) % 10] || a[s] || a[0]);
        }
        var Ha = new Date(2021, 5, 19, 0, 0, 0, 0);
        function Na(e, a) {
            var s = new Date(e),
                t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
            return Math.round(t / 864e5);
        }
        function Da(e) {
            var a,
                s = Ga(e);
            return (a = s % La.length), La[a];
        }
        function Ga(e) {
            return Na(Ha, e);
        }
        // var Ba = "abcdefghijklmnopqrstuvwxyz",
        var Ba = "abcčćdđǆefghijklǉmnǌoprsštuvzž", Tlc = { two: ["dž","lj","nj"], unicode: ["ǆ","ǉ","ǌ"] },
            Fa = [].concat(g(Ba.split("").slice(13)), g(Ba.split("").slice(0, 13)));
        function Wa(e) {
            for (var a = "", s = 0; s < e.length; s++) {
                var t = Ba.indexOf(e[s]);
                a += t >= 0 ? Fa[t] : "_";
            }
            return a;
        }
        function getRandomWord() {
            return La[Math.floor(Math.random() * La.length)];
        }
        var Ya = "statistics_la",
            Ja = "fail",
            Ua = { currentStreak: 0, maxStreak: 0, guesses: n({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }, Ja, 0), winPercentage: 0, gamesPlayed: 0, gamesWon: 0, averageGuesses: 0 };
        function statsKey() {
            return getGameMode() === "unlimited" ? Ya + "_unlimited" : Ya;
        }
        function Xa() {
            var e = window.localStorage.getItem(statsKey()) || JSON.stringify(Ua);
            return JSON.parse(e);
        }
        function Va(e) {
            var a = e.isWin,
                s = e.isStreak,
                t = e.numGuesses,
                o = Xa();
            a ? ((o.guesses[t] += 1), s ? (o.currentStreak += 1) : (o.currentStreak = 1)) : ((o.currentStreak = 0), (o.guesses.fail += 1)),
                (o.maxStreak = Math.max(o.currentStreak, o.maxStreak)),
                (o.gamesPlayed += 1),
                (o.gamesWon += a ? 1 : 0),
                (o.winPercentage = Math.round((o.gamesWon / o.gamesPlayed) * 100)),
                (o.averageGuesses = Math.round(
                    Object.entries(o.guesses).reduce(function (e, a) {
                        var s = y(a, 2),
                            t = s[0],
                            o = s[1];
                        return t !== Ja ? (e += t * o) : e;
                    }, 0) / o.gamesWon
                )),
                (function (e) {
                    window.localStorage.setItem(statsKey(), JSON.stringify(e));
                })(o);
        }
        var Ka = document.createElement("template");
        Ka.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n    text-align: center;\n  }\n  #game-toaster {\n    z-index: "
            .concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ")
            .concat(
                4e3,
                ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: var(--sv-game-height);\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n    flex-wrap: var(--sv-flex-wrap);\n    padding: var(--sv-header-padding);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 36px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n    position: var(--sv-title-position);\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n\n  @media (max-width: 480px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #mode-toggle {\n    display: inline-flex;\n    border: 2px solid var(--color-correct);\n    border-radius: 4px;\n    overflow: hidden;\n    order: var(--sv-mode-toggle-order);\n    margin: var(--sv-mode-toggle-margin);\n    width: var(--sv-mode-toggle-width);\n  }\n  .mode-pill {\n    background: none;\n    border: none;\n    color: var(--color-correct);\n    cursor: pointer;\n    padding: 6px 12px;\n    font-family: inherit;\n    font-weight: bold;\n    font-size: 12px;\n    text-transform: uppercase;\n    transition: background-color 0.2s ease, color 0.2s ease, opacity 0.2s ease;\n    flex: 1;\n  }\n  .mode-pill.active {\n    background-color: var(--color-correct);\n    color: var(--tile-text-color);\n    cursor: default;\n  }\n  .mode-pill:not(.active):hover {\n    background-color: var(--color-correct);\n    color: var(--tile-text-color);\n    opacity: 0.7;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  .menu {\n    width: var(--sv-menu-width);\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help-button" class="icon" aria-label="help">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div class="title">\n         SRPSKI VORDL\n        </div>\n        <div class="menu">\n          <button id="statistics-button" class="icon" aria-label="statistics">\n            <game-icon icon="statistics"></game-icon>\n          </button>\n          <button id="settings-button" class="icon" aria-label="settings">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n        <div id="mode-toggle">\n          <button class="mode-pill" data-mode="daily" aria-label="daily-mode">Dnevni</button>\n          <button class="mode-pill" data-mode="unlimited" aria-label="unlimited-mode">Neograničeni</button>\n        </div>\n      </header>\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n'
            );
        var Qa = document.createElement("template");
        Qa.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
        var Za = "IN_PROGRESS",
            es = "WIN",
            as = "FAIL",
            ss = ["Genijalno", "Fantastično", "Impresivno", "Sjajno", "Odlično", "Za dlaku"],
            ts = (function (e) {
                r(t, e);
                var a = h(t);
                function t() {
                    var e;
                    s(this, t),
                        n(p((e = a.call(this))), "tileIndex", 0),
                        n(p(e), "rowIndex", 0),
                        n(p(e), "solution", void 0),
                        n(p(e), "boardState", void 0),
                        n(p(e), "evaluations", void 0),
                        n(p(e), "canInput", !0),
                        n(p(e), "gameStatus", Za),
                        n(p(e), "letterEvaluations", {}),
                        n(p(e), "$board", void 0),
                        n(p(e), "$keyboard", void 0),
                        n(p(e), "$game", void 0),
                        n(p(e), "today", void 0),
                        n(p(e), "lastPlayedTs", void 0),
                        n(p(e), "lastCompletedTs", void 0),
                        n(p(e), "hardMode", void 0),
                        n(p(e), "dayOffset", void 0),
                        n(p(e), "gameMode", void 0),
                        e.attachShadow({ mode: "open" }),
                        (e.today = new Date());
                    var o = za(),
                        gameMode = getGameMode();
                    (e.gameMode = gameMode);
                    return (
                        gameMode === "unlimited"
                            ? (function() {
                                var u = getUnlimitedGameState();
                                if (u && u.solution && u.gameStatus === Za && u.rowIndex > 0) {
                                    e.boardState = u.boardState;
                                    e.evaluations = u.evaluations;
                                    e.rowIndex = u.rowIndex;
                                    e.solution = u.solution;
                                    e.dayOffset = 0;
                                    e.letterEvaluations = $a(e.boardState, e.evaluations);
                                    e.gameStatus = u.gameStatus;
                                    e.lastCompletedTs = null;
                                    e.hardMode = !1;
                                    e.restoringFromLocalStorage = !0;
                                } else {
                                    e.boardState = new Array(6).fill("");
                                    e.evaluations = new Array(6).fill(null);
                                    e.solution = getRandomWord();
                                    e.dayOffset = 0;
                                    e.lastCompletedTs = null;
                                    e.hardMode = !1;
                                    e.restoringFromLocalStorage = !1;
                                    setUnlimitedGameState({ rowIndex: e.rowIndex, boardState: e.boardState, evaluations: e.evaluations, solution: e.solution, gameStatus: e.gameStatus });
                                    Ca("event", "level_start", { level_name: Wa(e.solution) });
                                }
                            })()
                            : ((e.lastPlayedTs = o.lastPlayedTs),
                              !e.lastPlayedTs || Na(new Date(e.lastPlayedTs), e.today) >= 1
                                ? ((e.boardState = new Array(6).fill("")),
                                  (e.evaluations = new Array(6).fill(null)),
                                  (e.solution = Da(e.today)),
                                  (e.dayOffset = Ga(e.today)),
                                  (e.lastCompletedTs = o.lastCompletedTs),
                                  (e.hardMode = o.hardMode),
                                  (e.restoringFromLocalStorage = !1),
                                  ja({ rowIndex: e.rowIndex, boardState: e.boardState, evaluations: e.evaluations, solution: e.solution, gameStatus: e.gameStatus }),
                                  Ca("event", "level_start", { level_name: Wa(e.solution) }))
                                : ((e.boardState = o.boardState),
                                  (e.evaluations = o.evaluations),
                                  (e.rowIndex = o.rowIndex),
                                  (e.solution = o.solution),
                                  (e.dayOffset = Ga(e.today)),
                                  (e.letterEvaluations = $a(e.boardState, e.evaluations)),
                                  (e.gameStatus = o.gameStatus),
                                  (e.lastCompletedTs = o.lastCompletedTs),
                                  (e.hardMode = o.hardMode),
                                  e.gameStatus !== Za && (e.canInput = !1),
                                  (e.restoringFromLocalStorage = !0))),
                        e
                    );
                }
                return (
                    o(t, [
                        {
                            key: "startNewGame",
                            value: function () {
                                (this.rowIndex = 0),
                                (this.tileIndex = 0),
                                (this.boardState = new Array(6).fill("")),
                                (this.evaluations = new Array(6).fill(null)),
                                (this.letterEvaluations = {}),
                                (this.solution = this.gameMode === "unlimited" ? getRandomWord() : Da(this.today)),
                                (this.gameStatus = Za),
                                (this.canInput = !0);
                                var rows = this.$board.querySelectorAll("game-row");
                                for (var i = 0; i < rows.length; i++) {
                                    rows[i].removeAttribute("letters");
                                    rows[i].removeAttribute("evaluation");
                                    rows[i].removeAttribute("win");
                                    rows[i].removeAttribute("invalid");
                                }
                                if (this.gameMode === "unlimited") {
                                    setUnlimitedGameState({ rowIndex: this.rowIndex, boardState: this.boardState, evaluations: this.evaluations, solution: this.solution, gameStatus: this.gameStatus });
                                } else {
                                    ja({ rowIndex: this.rowIndex, boardState: this.boardState, evaluations: this.evaluations, solution: this.solution, gameStatus: this.gameStatus });
                                }
                                this.$keyboard.letterEvaluations = {};
                                var toaster = this.shadowRoot.querySelector("#game-toaster");
                                if (toaster) {
                                    toaster.innerHTML = "";
                                }
                                Ca("event", "level_start", { level_name: Wa(this.solution) });
                            }
                        },
                        {
                            key: "evaluateRow",
                            value: function () {
                                if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
                                    var e,
                                        a = this.$board.querySelectorAll("game-row")[this.rowIndex],
                                        s = this.boardState[this.rowIndex];
                                    if (((e = s), !Ta.includes(e) && !La.includes(e))) return a.setAttribute("invalid", ""), void this.addToast("Reč nije na spisku");
                                    if (this.hardMode) {
                                        var t = (function (e, a, s) {
                                                if (!e || !a || !s) return { validGuess: !0 };
                                                for (var t = 0; t < s.length; t++) if (s[t] === Ma && e[t] !== a[t]) return { validGuess: !1, errorMessage: "".concat(Pa(t + 1), " letter must be ").concat(a[t].toUpperCase()) };
                                                for (var o = {}, n = 0; n < s.length; n++) [Ma, Ia].includes(s[n]) && (o[a[n]] ? (o[a[n]] += 1) : (o[a[n]] = 1));
                                                var r = e.split("").reduce(function (e, a) {
                                                    return e[a] ? (e[a] += 1) : (e[a] = 1), e;
                                                }, {});
                                                for (var i in o) if ((r[i] || 0) < o[i]) return { validGuess: !1, errorMessage: "Pokušaj mora da sadrži ".concat(i.toUpperCase()) };
                                                return { validGuess: !0 };
                                            })(s, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1]),
                                            o = t.validGuess,
                                            n = t.errorMessage;
                                        if (!o) return a.setAttribute("invalid", ""), void this.addToast(n || "Pokušaj nije validan u hard modu");
                                    }
                                    var r = (function (e, a) {
                                        for (var s = Array(a.length).fill(Oa), t = Array(a.length).fill(!0), o = Array(a.length).fill(!0), n = 0; n < e.length; n++) e[n] === a[n] && o[n] && ((s[n] = Ma), (t[n] = !1), (o[n] = !1));
                                        for (var r = 0; r < e.length; r++) {
                                            var i = e[r];
                                            if (t[r])
                                                for (var l = 0; l < a.length; l++) {
                                                    var d = a[l];
                                                    if (o[l] && i === d) {
                                                        (s[r] = Ia), (o[l] = !1);
                                                        break;
                                                    }
                                                }
                                        }
                                        return s;
                                    })(s, this.solution);
                                    (this.evaluations[this.rowIndex] = r), (this.letterEvaluations = $a(this.boardState, this.evaluations)), (a.evaluation = this.evaluations[this.rowIndex]), (this.rowIndex += 1);
                                    var i = this.rowIndex >= 6,
                                        l = r.every(function (e) {
                                            return "correct" === e;
                                        });
                                    if (i || l)
                                        Va({ isWin: l, isStreak: this.gameMode === "unlimited" ? !0 : !!this.lastCompletedTs && 1 === Na(new Date(this.lastCompletedTs), new Date()), numGuesses: this.rowIndex }),
                                            saveGameState({ lastCompletedTs: Date.now() }, this.gameMode === "unlimited"),
                                            (this.gameStatus = l ? es : as),
                                            Ca("event", "level_end", { level_name: Wa(this.solution), num_guesses: this.rowIndex, success: l });
                                    (this.tileIndex = 0),
                                        (this.canInput = !1),
                                        saveGameState({ rowIndex: this.rowIndex, boardState: this.boardState, evaluations: this.evaluations, solution: this.solution, gameStatus: this.gameStatus, lastPlayedTs: Date.now() }, this.gameMode === "unlimited");
                                }
                            },
                        },
                        {
                            key: "addLetter",
                            value: function (e) {
                                if (this.gameStatus !== Za || !this.canInput || this.tileIndex >= 5) return;
                                this.boardState[this.rowIndex] += e;
                                this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]);
                                this.tileIndex += 1;
                                var lastTwo = this.boardState[this.rowIndex].slice(-2);
                                var unicodeIndex = Tlc.two.indexOf(lastTwo);
                                if (unicodeIndex !== -1) { this.removeLetter(); this.removeLetter(); this.addLetter(Tlc.unicode[unicodeIndex]); }
                            },
                        },
                        {
                            key: "removeLetter",
                            value: function () {
                                if (this.gameStatus === Za && this.canInput && !(this.tileIndex <= 0)) {
                                    this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
                                    var e = this.$board.querySelectorAll("game-row")[this.rowIndex];
                                    this.boardState[this.rowIndex] ? e.setAttribute("letters", this.boardState[this.rowIndex]) : e.removeAttribute("letters"), e.removeAttribute("invalid"), (this.tileIndex -= 1);
                                }
                            },
                        },
                        {
                            key: "submitGuess",
                            value: function () {
                                if (this.gameStatus === Za && this.canInput) {
                                    if (5 !== this.tileIndex) return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""), void this.addToast("Nedovoljno slova");
                                    this.evaluateRow();
                                }
                            },
                        },
                        {
                            key: "addToast",
                            value: function (e, a) {
                                var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                    t = document.createElement("game-toast");
                                t.setAttribute("text", e), a && t.setAttribute("duration", a), s ? this.shadowRoot.querySelector("#system-toaster").prepend(t) : this.shadowRoot.querySelector("#game-toaster").prepend(t);
                            },
                        },
                        {
                            key: "sizeBoard",
                            value: function () {
                                var e = this.shadowRoot.querySelector("#board-container"),
                                    a = Math.min(Math.floor(e.clientHeight * (5 / 6)), 350),
                                    s = 6 * Math.floor(a / 5);
                                (this.$board.style.width = "".concat(a, "px")), (this.$board.style.height = "".concat(s, "px"));
                            },
                        },
                        {
                            key: "showStatsModal",
                            value: function () {
                                var e = this.$game.querySelector("game-modal"),
                                    a = document.createElement("game-stats");
                                e.innerHTML = "";
                                this.gameStatus === es && this.rowIndex <= 6 && a.setAttribute("highlight-guess", this.rowIndex), (a.gameApp = this), e.appendChild(a), e.setAttribute("open", "");
                            },
                        },
                        {
                            key: "showHelpModal",
                            value: function () {
                                var e = this.$game.querySelector("game-modal");
                                e.innerHTML = "";
                                e.appendChild(document.createElement("game-help")), e.setAttribute("open", "");
                            },
                        },
                        {
                            key: "connectedCallback",
                            value: function () {
                                var e = this;
                                var skipIntroModals = window.sessionStorage.getItem("sw-mode-switch_la") === "1" || this.restoringFromLocalStorage;
                                window.sessionStorage.removeItem("sw-mode-switch_la");
                                this.shadowRoot.appendChild(Ka.content.cloneNode(!0)),
                                    (this.$game = this.shadowRoot.querySelector("#game")),
                                    (this.$board = this.shadowRoot.querySelector("#board")),
                                    (this.$keyboard = this.shadowRoot.querySelector("game-keyboard")),
                                    this.sizeBoard(),
                                    skipIntroModals || this.lastPlayedTs ||
                                        setTimeout(function () {
                                            return e.showHelpModal();
                                        }, 100);
                                for (var a = 0; a < 6; a++) {
                                    var s = document.createElement("game-row");
                                    s.setAttribute("letters", this.boardState[a]), s.setAttribute("length", 5), this.evaluations[a] && (s.evaluation = this.evaluations[a]), this.$board.appendChild(s);
                                }
                                this.$game.addEventListener("game-key-press", function (a) {
                                    var s = a.detail.key;
                                    "â†" === s || "Backspace" === s ? e.removeLetter() : "â†µ" === s || "Enter" === s ? e.submitGuess() : Ba.includes(s.toLowerCase()) && e.addLetter(s.toLowerCase());
                                }),
                                    this.$game.addEventListener("game-last-tile-revealed-in-row", function (a) {
                                        (e.$keyboard.letterEvaluations = e.letterEvaluations), e.rowIndex < 6 && (e.canInput = !0);
                                        var s = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                                        (a.path || (a.composedPath && a.composedPath())).includes(s) &&
                                            ([es, as].includes(e.gameStatus) &&
                                                (e.restoringFromLocalStorage
                                                    ? e.showStatsModal()
                                                    : (e.gameStatus === es && (s.setAttribute("win", ""), e.addToast(ss[e.rowIndex - 1], 2e3)),
                                                      e.gameStatus === as && e.addToast(e.solution.toUpperCase(), 1 / 0),
                                                      setTimeout(function () {
                                                          e.showStatsModal();
                                                      }, 2500))),
                                            (e.restoringFromLocalStorage = !1));
                                    }),
                                    this.shadowRoot.addEventListener("game-setting-change", function (a) {
                                        var s = a.detail,
                                            t = s.name,
                                            o = s.checked,
                                            n = s.disabled;
                                        switch (t) {
                                            case "hard-mode":
                                                return void (n ? e.addToast("Hard mod može biti uključen samo na početku runde", 1500, !0) : ((e.hardMode = o), saveGameState({ hardMode: o }, e.gameMode === "unlimited")));
                                        }
                                    }),
                                    this.shadowRoot.getElementById("settings-button").addEventListener("click", function (a) {
                                        var s = e.$game.querySelector("game-page"),
                                            t = document.createTextNode("Podešavanja");
                                        s.appendChild(t);
                                        var o = document.createElement("game-settings");
                                        o.setAttribute("slot", "content"), (o.gameApp = e), s.appendChild(o), s.setAttribute("open", "");
                                    }),
                                    this.shadowRoot.getElementById("help-button").addEventListener("click", function (a) {
                                        var s = e.$game.querySelector("game-page"),
                                            t = document.createTextNode("Pravila");
                                        s.appendChild(t);
                                        var o = document.createElement("game-help");
                                        o.setAttribute("page", ""), o.setAttribute("slot", "content"), s.appendChild(o), s.setAttribute("open", "");
                                    }),
                                    this.shadowRoot.getElementById("statistics-button").addEventListener("click", function (a) {
                                        e.showStatsModal();
                                    }),
                                    (function() {
                                        var modeToggleContainer = e.shadowRoot.getElementById("mode-toggle");
                                        var pills = modeToggleContainer.querySelectorAll(".mode-pill");
                                        function syncActivePill() {
                                            var currentMode = getGameMode();
                                            pills.forEach(function(pill) {
                                                if (pill.dataset.mode === currentMode) {
                                                    pill.classList.add("active");
                                                } else {
                                                    pill.classList.remove("active");
                                                }
                                            });
                                        }
                                        syncActivePill();
                                        modeToggleContainer.addEventListener("click", function(a) {
                                            var pill = a.target.closest(".mode-pill");
                                            if (!pill) return;
                                            var newMode = pill.dataset.mode;
                                            if (newMode === getGameMode()) return;
                                            setGameMode(newMode);
                                            syncActivePill();
                                            pills.forEach(function(p) { p.disabled = true; });
                                            e.addToast("Prelazak na " + (newMode === "unlimited" ? "Neograničeni" : "Dnevni") + " režim...", 1000, !0);
                                            setTimeout(function() {
                                                window.sessionStorage.setItem("sw-mode-switch_la", "1");
                                                window.location.reload();
                                            }, 600);
                                        });
                                    })(),
                                    (function() {
                                        if (skipIntroModals) return;
                                        setTimeout(function() {
                                            var modal = e.$game.querySelector("game-modal");
                                            var content = document.createElement("div");
                                            content.style.cssText = "padding: 20px 0 20px; text-align: center; line-height: 1.6;";
                                            content.innerHTML = '<div style="font-size:24px;">🎉🎉🎉</div><h2 style="margin: 0 0 15px 0; font-size: 24px;">Neograničeni Režim!</h2><p style="margin: 10px 0; font-size: 14px;">Sada možete igrati <strong>neograničen broj puta</strong> bez čekanja na dnevnu reč. Prosto kliknite na dugme <strong style="color: var(--color-correct);">NEOGRANIČENI</strong> ispod naslova.</p><p style="margin: 20px 0 0 0; font-size: 13px; opacity: 0.8;">Nastavite sa dnevnim režimom ili probajte nešto novo!</p>';
                                            modal.insertBefore(content, modal.firstChild);
                                            var closeBtn = document.createElement("button");
                                            closeBtn.textContent = "Počni";
                                            closeBtn.style.cssText = "background-color: var(--color-correct); color: var(--tile-text-color); border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; font-family: inherit; font-weight: bold; margin-top: 15px;";
                                            closeBtn.addEventListener("click", function(ev) {
                                                ev.stopPropagation();
                                                modal.removeAttribute("open");
                                                modal.innerHTML = "";
                                            });
                                            content.appendChild(closeBtn);
                                            modal.setAttribute("open", "");
                                        }, 800);
                                    })(),
                                    window.addEventListener("resize", this.sizeBoard.bind(this));
                            },
                        },
                        { key: "disconnectedCallback", value: function () {} },
                        {
                            key: "debugTools",
                            value: function () {
                                var e = this;
                                this.shadowRoot.getElementById("debug-tools").appendChild(Qa.content.cloneNode(!0)),
                                    this.shadowRoot.getElementById("toast").addEventListener("click", function (a) {
                                        e.addToast("hello world");
                                    }),
                                    this.shadowRoot.getElementById("modal").addEventListener("click", function (a) {
                                        var s = e.$game.querySelector("game-modal");
                                        (s.textContent = "hello plz"), s.setAttribute("open", "");
                                    }),
                                    this.shadowRoot.getElementById("reveal").addEventListener("click", function () {
                                        e.evaluateRow();
                                    }),
                                    this.shadowRoot.getElementById("shake").addEventListener("click", function () {
                                        e.$board.querySelectorAll("game-row")[e.rowIndex].setAttribute("invalid", "");
                                    }),
                                    this.shadowRoot.getElementById("bounce").addEventListener("click", function () {
                                        var a = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                                        "" === a.getAttribute("win") ? a.removeAttribute("win") : a.setAttribute("win", "");
                                    });
                            },
                        },
                    ]),
                    t
                );
            })(c(HTMLElement));
        customElements.define("game-app", ts);
        var os = document.createElement("template");
        os.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(
            3e3,
            ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n'
        );
        var ns = (function (e) {
            r(t, e);
            var a = h(t);
            function t() {
                var e;
                return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e;
            }
            return (
                o(t, [
                    {
                        key: "connectedCallback",
                        value: function () {
                            var e = this;
                            this.shadowRoot.appendChild(os.content.cloneNode(!0)),
                                this.addEventListener("click", function (a) {
                                    e.shadowRoot.querySelector(".content").classList.add("closing");
                                }),
                                this.shadowRoot.addEventListener("animationend", function (a) {
                                    "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".content").classList.remove("closing"), (e.innerHTML = ""), e.removeAttribute("open"));
                                });
                        },
                    },
                ]),
                t
            );
        })(c(HTMLElement));
        customElements.define("game-modal", ns);
        var rs = document.createElement("template");
        rs.innerHTML =
            "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
        var is = document.createElement("template");
        is.innerHTML = "\n  <button>key</button>\n";
        var ls = document.createElement("template");
        ls.innerHTML = '\n  <div class="spacer"></div>\n';
        var ds = [
                ["ǉ", "ǌ", "e", "r", "t", "z", "u", "i", "o", "p", "š", "đ"],
                ["a", "s", "d", "f", "g", "h", "j", "k", "l", "č", "ć", "ž"],
                ["â†µ", "ǆ", "c", "v", "b", "n", "m", "â†"],
            ],
            us = (function (e) {
                r(t, e);
                var a = h(t);
                function t() {
                    var e;
                    return s(this, t), n(p((e = a.call(this))), "_letterEvaluations", {}), e.attachShadow({ mode: "open" }), e;
                }
                return (
                    o(t, [
                        {
                            key: "letterEvaluations",
                            set: function (e) {
                                (this._letterEvaluations = e), this._render();
                            },
                        },
                        {
                            key: "dispatchKeyPressEvent",
                            value: function (e) {
                                this.dispatchEvent(new CustomEvent("game-key-press", { bubbles: !0, composed: !0, detail: { key: e } }));
                            },
                        },
                        {
                            key: "connectedCallback",
                            value: function () {
                                var e = this;
                                this.shadowRoot.appendChild(rs.content.cloneNode(!0)),
                                    (this.$keyboard = this.shadowRoot.getElementById("keyboard")),
                                    this.$keyboard.addEventListener("click", function (a) {
                                        var s = a.target.closest("button");
                                        s && e.$keyboard.contains(s) && e.dispatchKeyPressEvent(s.dataset.key);
                                    }),
                                    window.addEventListener("keydown", function (a) {
                                        if (!0 !== a.repeat) {
                                            var s = a.key,
                                                t = a.metaKey,
                                                o = a.ctrlKey;
                                            t || o || ((Ba.includes(s.toLowerCase()) || "Backspace" === s || "Enter" === s) && e.dispatchKeyPressEvent(s));
                                        }
                                    }),
                                    this.$keyboard.addEventListener("transitionend", function (a) {
                                        var s = a.target.closest("button");
                                        s && e.$keyboard.contains(s) && s.classList.remove("fade");
                                    }),
                                    ds.forEach(function (a) {
                                        var s = document.createElement("div");
                                        s.classList.add("row"),
                                            a.forEach(function (e) {
                                                var a;
                                                if ((Ba.includes(e)) || "â†" === e || "â†µ" === e) {
                                                    if ((((a = is.content.cloneNode(!0).firstElementChild).dataset.key = e), (a.textContent = e), "â†" === e)) {
                                                        var t = document.createElement("game-icon");
                                                        t.setAttribute("icon", "backspace"), (a.textContent = ""), a.appendChild(t), a.classList.add("one-and-a-half");
                                                    }
                                                    "â†µ" == e && ((a.textContent = "enter"), a.classList.add("one-and-a-half"));
                                                } else (a = ls.content.cloneNode(!0).firstElementChild).classList.add(1 === e.length ? "half" : "one");
                                                s.appendChild(a);
                                            }),
                                            e.$keyboard.appendChild(s);
                                    }),
                                    this._render();
                            },
                        },
                        {
                            key: "_render",
                            value: function () {
                                var allKeys = this.$keyboard.querySelectorAll("button[data-key]");
                                for (var i = 0; i < allKeys.length; i++) {
                                    var key = allKeys[i];
                                    key.removeAttribute("data-state");
                                    key.classList.remove("fade");
                                }
                                for (var e in this._letterEvaluations) {
                                    var a = this.$keyboard.querySelector('[data-key="'.concat(e, '"]'));
                                    if (a) {
                                        (a.dataset.state = this._letterEvaluations[e]), a.classList.add("fade");
                                    }
                                }
                            },
                        },
                    ]),
                    t
                );
            })(c(HTMLElement));
        /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
    
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
    
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */
        function cs(e, a, s, t) {
            return new (s || (s = Promise))(function (o, n) {
                function r(e) {
                    try {
                        l(t.next(e));
                    } catch (e) {
                        n(e);
                    }
                }
                function i(e) {
                    try {
                        l(t.throw(e));
                    } catch (e) {
                        n(e);
                    }
                }
                function l(e) {
                    var a;
                    e.done
                        ? o(e.value)
                        : ((a = e.value),
                          a instanceof s
                              ? a
                              : new s(function (e) {
                                    e(a);
                                })).then(r, i);
                }
                l((t = t.apply(e, a || [])).next());
            });
        }
        function ps(e, a) {
            var s,
                t,
                o,
                n,
                r = {
                    label: 0,
                    sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1];
                    },
                    trys: [],
                    ops: [],
                };
            return (
                (n = { next: i(0), throw: i(1), return: i(2) }),
                "function" == typeof Symbol &&
                    (n[Symbol.iterator] = function () {
                        return this;
                    }),
                n
            );
            function i(n) {
                return function (i) {
                    return (function (n) {
                        if (s) throw new TypeError("Generator is already executing.");
                        for (; r; )
                            try {
                                if (((s = 1), t && (o = 2 & n[0] ? t.return : n[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, n[1])).done)) return o;
                                switch (((t = 0), o && (n = [2 & n[0], o.value]), n[0])) {
                                    case 0:
                                    case 1:
                                        o = n;
                                        break;
                                    case 4:
                                        return r.label++, { value: n[1], done: !1 };
                                    case 5:
                                        r.label++, (t = n[1]), (n = [0]);
                                        continue;
                                    case 7:
                                        (n = r.ops.pop()), r.trys.pop();
                                        continue;
                                    default:
                                        if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || (6 !== n[0] && 2 !== n[0]))) {
                                            r = 0;
                                            continue;
                                        }
                                        if (3 === n[0] && (!o || (n[1] > o[0] && n[1] < o[3]))) {
                                            r.label = n[1];
                                            break;
                                        }
                                        if (6 === n[0] && r.label < o[1]) {
                                            (r.label = o[1]), (o = n);
                                            break;
                                        }
                                        if (o && r.label < o[2]) {
                                            (r.label = o[2]), r.ops.push(n);
                                            break;
                                        }
                                        o[2] && r.ops.pop(), r.trys.pop();
                                        continue;
                                }
                                n = a.call(e, r);
                            } catch (e) {
                                (n = [6, e]), (t = 0);
                            } finally {
                                s = o = 0;
                            }
                        if (5 & n[0]) throw n[1];
                        return { value: n[0] ? n[1] : void 0, done: !0 };
                    })([n, i]);
                };
            }
        }
        customElements.define("game-keyboard", us),
            function () {
                (console.warn || console.log).apply(console, arguments);
            }.bind("[clipboard-polyfill]");
        var ms,
            hs,
            ys,
            gs,
            bs = "undefined" == typeof navigator ? void 0 : navigator,
            fs = null == bs ? void 0 : bs.clipboard;
        null === (ms = null == fs ? void 0 : fs.read) || void 0 === ms || ms.bind(fs), null === (hs = null == fs ? void 0 : fs.readText) || void 0 === hs || hs.bind(fs);
        var ks = (null === (ys = null == fs ? void 0 : fs.write) || void 0 === ys || ys.bind(fs), null === (gs = null == fs ? void 0 : fs.writeText) || void 0 === gs ? void 0 : gs.bind(fs)),
            vs = "undefined" == typeof window ? void 0 : window,
            ws = (null == vs || vs.ClipboardItem, vs);
        var xs = function () {
            this.success = !1;
        };
        function zs(e, a, s) {
            for (var t in ((e.success = !0), a)) {
                var o = a[t],
                    n = s.clipboardData;
                n.setData(t, o), "text/plain" === t && n.getData(t) !== o && (e.success = !1);
            }
            s.preventDefault();
        }
        function js(e) {
            var a = new xs(),
                s = zs.bind(this, a, e);
            document.addEventListener("copy", s);
            try {
                document.execCommand("copy");
            } finally {
                document.removeEventListener("copy", s);
            }
            return a.success;
        }
        function Ss(e, a) {
            _s(e);
            var s = js(a);
            return qs(), s;
        }
        function _s(e) {
            var a = document.getSelection();
            if (a) {
                var s = document.createRange();
                s.selectNodeContents(e), a.removeAllRanges(), a.addRange(s);
            }
        }
        function qs() {
            var e = document.getSelection();
            e && e.removeAllRanges();
        }
        function Es(e) {
            return cs(this, void 0, void 0, function () {
                var a;
                return ps(this, function (s) {
                    if (((a = "text/plain" in e), "undefined" == typeof ClipboardEvent && void 0 !== ws.clipboardData && void 0 !== ws.clipboardData.setData)) {
                        if (!a) throw new Error("No `text/plain` value was specified.");
                        if (((t = e["text/plain"]), ws.clipboardData.setData("Text", t))) return [2, !0];
                        throw new Error("Copying failed, possibly because the user rejected it.");
                    }
                    var t;
                    return js(e) ||
                        navigator.userAgent.indexOf("Edge") > -1 ||
                        Ss(document.body, e) ||
                        (function (e) {
                            var a = document.createElement("div");
                            a.setAttribute("style", "-webkit-user-select: text !important"), (a.textContent = "temporary element"), document.body.appendChild(a);
                            var s = Ss(a, e);
                            return document.body.removeChild(a), s;
                        })(e) ||
                        (function (e) {
                            var a = document.createElement("div");
                            a.setAttribute("style", "-webkit-user-select: text !important");
                            var s = a;
                            a.attachShadow && (s = a.attachShadow({ mode: "open" }));
                            var t = document.createElement("span");
                            (t.innerText = e), s.appendChild(t), document.body.appendChild(a), _s(t);
                            var o = document.execCommand("copy");
                            return qs(), document.body.removeChild(a), o;
                        })(e["text/plain"])
                        ? [2, !0]
                        : [2, !1];
                });
            });
        }
        function As(e, a, s) {
            try {
                (t = navigator.userAgent || navigator.vendor || window.opera),
                    (!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                        t
                    ) &&
                        !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                            t.substr(0, 4)
                        )) ||
                    navigator.userAgent.toLowerCase().indexOf("firefox") > -1 ||
                    void 0 === navigator.share ||
                    !navigator.canShare ||
                    !navigator.canShare(e)
                        ? (function (e) {
                              return cs(this, void 0, void 0, function () {
                                  return ps(this, function (a) {
                                      if (ks) return [2, ks(e)];
                                      if (
                                          !Es(
                                              (function (e) {
                                                  var a = {};
                                                  return (a["text/plain"] = e), a;
                                              })(e)
                                          )
                                      )
                                          throw new Error("writeText() failed");
                                      return [2];
                                  });
                              });
                          })(e.text).then(a, s)
                        : navigator.share(e);
            } catch (e) {
                s();
            }
            var t;
        }
        var Cs = document.createElement("template");
        Cs.innerHTML =
            '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Statistika</h1>\n    <div id="statistics"></div>\n    <h1>Broj pokušaja</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';
        var Ls = document.createElement("template");
        Ls.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
        var Ts = document.createElement("template");
        Ts.innerHTML =
            '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
        var Is = document.createElement("template");
        Is.innerHTML =
            '\n  <div class="countdown">\n    <h1>Sledeća reč</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      Podeli <game-icon icon="share"></game-icon>\n    </button>\n  </div>\n';
        // var Ms = { currentStreak: "Current Streak", maxStreak: "Max Streak", winPercentage: "Win %", gamesPlayed: "Played", gamesWon: "Won", averageGuesses: "Av. Guesses" },
        var Ms = { currentStreak: "Trenutni Niz", maxStreak: "Najduži Niz", winPercentage: "% Pobeda", gamesPlayed: "Odigrano", gamesWon: "Pobeda", averageGuesses: "Prosek Pokušaja" },
            Os = (function (e) {
                r(t, e);
                var a = h(t);
                function t() {
                    var e;
                    return s(this, t), n(p((e = a.call(this))), "stats", {}), n(p(e), "gameApp", void 0), e.attachShadow({ mode: "open" }), (e.stats = Xa()), e;
                }
                return (
                    o(t, [
                        {
                            key: "connectedCallback",
                            value: function () {
                                var e = this;
                                this.shadowRoot.appendChild(Cs.content.cloneNode(!0));
                                var modeLabel = getGameMode() === "unlimited" ? " (Neograničeni)" : " (Dnevni)";
                                this.shadowRoot.querySelectorAll("h1").forEach(function (h) { h.textContent += modeLabel; });
                                var a = this.shadowRoot.getElementById("statistics"),
                                    s = this.shadowRoot.getElementById("guess-distribution"),
                                    t = Math.max.apply(Math, g(Object.values(this.stats.guesses)));
                                if (
                                    Object.values(this.stats.guesses).every(function (e) {
                                        return 0 === e;
                                    })
                                ) {
                                    var o = document.createElement("div");
                                    o.classList.add("no-data"), (o.innerText = "Nema podataka"), s.appendChild(o);
                                } else
                                    for (var n = 1; n < Object.keys(this.stats.guesses).length; n++) {
                                        var r = n,
                                            i = this.stats.guesses[n],
                                            l = Ts.content.cloneNode(!0),
                                            d = Math.max(7, Math.round((i / t) * 100));
                                        l.querySelector(".guess").textContent = r;
                                        var u = l.querySelector(".graph-bar");
                                        if (((u.style.width = "".concat(d, "%")), "number" == typeof i)) {
                                            (l.querySelector(".num-guesses").textContent = i), i > 0 && u.classList.add("align-right");
                                            var c = parseInt(this.getAttribute("highlight-guess"), 10);
                                            c && n === c && u.classList.add("highlight");
                                        }
                                        s.appendChild(l);
                                    }
                                if (
                                    (["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach(function (s) {
                                        var t = Ms[s],
                                            o = e.stats[s],
                                            n = Ls.content.cloneNode(!0);
                                        (n.querySelector(".label").textContent = t), (n.querySelector(".statistic").textContent = o), a.appendChild(n);
                                    }),
                                    this.gameApp.gameStatus !== Za)
                                ) {
                                    var p = this.shadowRoot.querySelector(".footer");
                                    var currentGameMode = getGameMode();
                                    var isUnlimited = currentGameMode === "unlimited" || e.gameApp.gameMode === "unlimited";
                                    if (isUnlimited) {
                                        var playAgainDiv = document.createElement("div");
                                        playAgainDiv.style.cssText = "display: flex; width: 100%; justify-content: center; align-items: center; padding: 16px;";
                                        var playAgainBtn = document.createElement("button");
                                        playAgainBtn.id = "play-again-button";
                                        playAgainBtn.style.cssText = "background-color: var(--color-correct); color: var(--key-evaluated-text-color); font-family: inherit; font-weight: bold; border-radius: 4px; cursor: pointer; border: none; user-select: none; display: flex; justify-content: center; align-items: center; text-transform: uppercase; width: 90%; font-size: 18px; height: 50px; -webkit-tap-highlight-color: rgba(0,0,0,0.3); padding: 12px;";
                                        playAgainBtn.textContent = "IGRAJ PONOVO";
                                        playAgainDiv.appendChild(playAgainBtn);
                                        p.innerHTML = "";
                                        p.appendChild(playAgainDiv);
                                        playAgainBtn.addEventListener("click", function () {
                                            e.gameApp.startNewGame();
                                            setTimeout(function() {
                                                var modal = p.closest("game-modal");
                                                if (modal) {
                                                    modal.removeAttribute("open");
                                                }
                                            }, 100);
                                        });
                                    } else {
                                        var m = Is.content.cloneNode(!0);
                                        p.appendChild(m);
                                        this.shadowRoot.querySelector("button#share-button").addEventListener("click", function (a) {
                                            a.preventDefault(), a.stopPropagation();
                                            As(
                                                (function (e) {
                                                    var a = e.evaluations,
                                                        s = e.dayOffset,
                                                        t = e.rowIndex,
                                                        o = e.isHardMode,
                                                        n = e.isWin,
                                                        r = JSON.parse(window.localStorage.getItem(j)),
                                                        i = JSON.parse(window.localStorage.getItem(S)),
                                                        l = "Srpski VORDL ".concat(s);
                                                    (l += " ".concat(n ? t : "X", "/").concat(6)), o && (l += "*");
                                                    var d = "";
                                                    return (
                                                        a.forEach(function (e) {
                                                            e &&
                                                                (e.forEach(function (e) {
                                                                    if (e) {
                                                                        var a = "";
                                                                        switch (e) {
                                                                            case Ma:
                                                                                a = (function (e) {
                                                                                    return e ? "🟧" : "🟦";
                                                                                })(i);
                                                                                break;
                                                                            case Ia:
                                                                                a = (function (e) {
                                                                                    return e ? "🟦" : "🟧";
                                                                                })(i);
                                                                                break;
                                                                            case Oa:
                                                                                a = (function (e) {
                                                                                    return e ? "⬛" : "⬜";
                                                                                })(r);
                                                                        }
                                                                        d += a;
                                                                    }
                                                                }),
                                                                (d += "\n"));
                                                        }),
                                                        { text: "".concat(l, "\n\n").concat(d.trimEnd()) }
                                                    );
                                                })({ evaluations: e.gameApp.evaluations, dayOffset: e.gameApp.dayOffset, rowIndex: e.gameApp.rowIndex, isHardMode: e.gameApp.hardMode, isWin: e.gameApp.gameStatus === es }),
                                                function () {
                                                    e.gameApp.addToast("Rezultati kopirani", 2e3, !0);
                                                },
                                                function () {
                                                    e.gameApp.addToast("Deljenje nije uspelo", 2e3, !0);
                                                }
                                            );
                                        });
                                    }
                                }
                            },
                        },
                    ]),
                    t
                );
            })(c(HTMLElement));
        customElements.define("game-stats", Os);
        var Rs = document.createElement("template");
        Rs.innerHTML =
            '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
        var $s = (function (e) {
            r(t, e);
            var a = h(t);
            function t() {
                var e;
                return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e;
            }
            return (
                o(
                    t,
                    [
                        {
                            key: "connectedCallback",
                            value: function () {
                                var e = this;
                                this.shadowRoot.appendChild(Rs.content.cloneNode(!0)),
                                    this.shadowRoot.querySelector(".container").addEventListener("click", function (a) {
                                        a.stopPropagation(),
                                            e.hasAttribute("checked") ? e.removeAttribute("checked") : e.setAttribute("checked", ""),
                                            e.dispatchEvent(
                                                new CustomEvent("game-switch-change", { bubbles: !0, composed: !0, detail: { name: e.getAttribute("name"), checked: e.hasAttribute("checked"), disabled: e.hasAttribute("disabled") } })
                                            );
                                    });
                            },
                        },
                    ],
                    [
                        {
                            key: "observedAttributes",
                            get: function () {
                                return ["checked"];
                            },
                        },
                    ]
                ),
                t
            );
        })(c(HTMLElement));
        customElements.define("game-switch", $s);
        var Ps = document.createElement("template");
        Ps.innerHTML =
            '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Otkrij reč u 6 pokušaja.</p>\n      <p>Svaki pokušaj mora biti validna reč od 5 slova. Pritisni ENTER za proveru.</p>\n      <p>Nakon svakog pokušaja, boja se menja da bi pokazala koliko ste blizu tražene reči.</p>\n      <div class="examples">\n        <p><strong>Primeri</strong></p>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="š" evaluation="correct" reveal></game-tile>\n            <game-tile letter="ǉ"></game-tile>\n            <game-tile letter="i"></game-tile>\n            <game-tile letter="v"></game-tile>\n            <game-tile letter="a"></game-tile>\n          </div>\n          <p>Slovo <strong>Š</strong> je u reči na pravom mestu.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="t"></game-tile>\n            <game-tile letter="e" evaluation="present" reveal></game-tile>\n            <game-tile letter="s"></game-tile>\n            <game-tile letter="l"></game-tile>\n            <game-tile letter="a"></game-tile>\n          </div>\n          <p>Slovo <strong>E</strong> postoji u reči ali je na pogrešnom mestu.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="s"></game-tile>\n            <game-tile letter="l"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="v" evaluation="absent" reveal></game-tile>\n            <game-tile letter="a"></game-tile>\n          </div>\n          <p>Slovo <strong>V</strong> ne postoji u reči.</p>\n        </div>\n      </div>\n      <p><strong>Nova reč svakog dana!<strong></p>\n    </div>\n  </section>\n';
        var Hs = (function (e) {
            r(t, e);
            var a = h(t);
            function t() {
                var e;
                return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e;
            }
            return (
                o(t, [
                    {
                        key: "connectedCallback",
                        value: function () {
                            this.shadowRoot.appendChild(Ps.content.cloneNode(!0));
                        },
                    },
                ]),
                t
            );
        })(c(HTMLElement));
        customElements.define("game-help", Hs);
        var Ns = document.createElement("template");
        Ns.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(
            2e3,
            ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n'
        );
        var Ds = (function (e) {
            r(t, e);
            var a = h(t);
            function t() {
                var e;
                return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e;
            }
            return (
                o(t, [
                    {
                        key: "connectedCallback",
                        value: function () {
                            var e = this;
                            this.shadowRoot.appendChild(Ns.content.cloneNode(!0)),
                                this.shadowRoot.querySelector("game-icon").addEventListener("click", function (a) {
                                    e.shadowRoot.querySelector(".overlay").classList.add("closing");
                                }),
                                this.shadowRoot.addEventListener("animationend", function (a) {
                                    "SlideOut" === a.animationName &&
                                        (e.shadowRoot.querySelector(".overlay").classList.remove("closing"),
                                        Array.from(e.childNodes).forEach(function (a) {
                                            e.removeChild(a);
                                        }),
                                        e.removeAttribute("open"));
                                });
                        },
                    },
                ]),
                t
            );
        })(c(HTMLElement));
        customElements.define("game-page", Ds);
        var Gs = document.createElement("template");
        Gs.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
        var Bs = {
                help:
                    "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
                settings:
                    "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
                backspace:
                    "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
                close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
                share:
                    "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
                statistics: "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z",
            },
            Fs = (function (e) {
                r(t, e);
                var a = h(t);
                function t() {
                    var e;
                    return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e;
                }
                return (
                    o(t, [
                        {
                            key: "connectedCallback",
                            value: function () {
                                this.shadowRoot.appendChild(Gs.content.cloneNode(!0));
                                var e = this.getAttribute("icon");
                                this.shadowRoot.querySelector("path").setAttribute("d", Bs[e]),
                                    "backspace" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)"),
                                    "share" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)");
                            },
                        },
                    ]),
                    t
                );
            })(c(HTMLElement));
        customElements.define("game-icon", Fs);
        var Ws = document.createElement("template");
        Ws.innerHTML = '\n  <div id="timer"></div>\n';
        var Ys = 6e4,
            Js = 36e5,
            Us = (function (e) {
                r(t, e);
                var a = h(t);
                function t() {
                    var e;
                    s(this, t), n(p((e = a.call(this))), "targetEpochMS", void 0), n(p(e), "intervalId", void 0), n(p(e), "$timer", void 0), e.attachShadow({ mode: "open" });
                    var o = new Date();
                    return o.setDate(o.getDate() + 1), o.setHours(0, 0, 0, 0), (e.targetEpochMS = o.getTime()), e;
                }
                return (
                    o(t, [
                        {
                            key: "padDigit",
                            value: function (e) {
                                return e.toString().padStart(2, "0");
                            },
                        },
                        {
                            key: "updateTimer",
                            value: function () {
                                var e,
                                    a = new Date().getTime(),
                                    s = Math.floor(this.targetEpochMS - a);
                                if (s <= 0) e = "00:00:00";
                                else {
                                    var t = Math.floor((s % 864e5) / Js),
                                        o = Math.floor((s % Js) / Ys),
                                        n = Math.floor((s % Ys) / 1e3);
                                    e = "".concat(this.padDigit(t), ":").concat(this.padDigit(o), ":").concat(this.padDigit(n));
                                }
                                this.$timer.textContent = e;
                            },
                        },
                        {
                            key: "connectedCallback",
                            value: function () {
                                var e = this;
                                this.shadowRoot.appendChild(Ws.content.cloneNode(!0)),
                                    (this.$timer = this.shadowRoot.querySelector("#timer")),
                                    (this.intervalId = setInterval(function () {
                                        e.updateTimer();
                                    }, 200));
                            },
                        },
                        {
                            key: "disconnectedCallback",
                            value: function () {
                                clearInterval(this.intervalId);
                            },
                        },
                    ]),
                    t
                );
            })(c(HTMLElement));
        return (
            customElements.define("countdown-timer", Us),
            (e.CountdownTimer = Us),
            (e.GameApp = ts),
            (e.GameHelp = Hs),
            (e.GameIcon = Fs),
            (e.GameKeyboard = us),
            (e.GameModal = ns),
            (e.GamePage = Ds),
            (e.GameRow = x),
            (e.GameSettings = _a),
            (e.GameStats = Os),
            (e.GameSwitch = $s),
            (e.GameThemeManager = _),
            (e.GameTile = v),
            (e.GameToast = Aa),
            Object.defineProperty(e, "__esModule", { value: !0 }),
            e
        );
    })({}));
