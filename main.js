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
            wa = "gameState",
            xa = { boardState: null, evaluations: null, rowIndex: null, solution: null, gameStatus: null, lastPlayedTs: null, lastCompletedTs: null, restoringFromLocalStorage: null, hardMode: !1 },
            gameModeKey = "gameMode",
            unlimitedGameStateKey = "unlimitedGameState";
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
            '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Хард Мод</div>\n          <div class="description">Откривена слова морају бити коришћена у наредним покушајима</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Тамна Тема</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Режим Боја за Далтонисте</div>\n          <div class="description">Боје високог контраста</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Контакт</div>\n        </div>\n        <div class="control">\n          <a href="mailto:srpskiwordle@gmail.com" title="srpskiwordle@gmail.com">srpskiwordle@gmail.com</a>\n          \n        </div>\n      </div>\n    </section>\n  </div>\n  <div id="footnote">\n    <div id="copyright">&copy;' + swCurrentYear + '. Сва Права Задржана.</div>\n    <div>\n      <div id="puzzle-number"></div>\n      <div id="hash"></div>\n    </div>\n  </div>\n';
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
            "добро","нисам","зашто","нешто","хвала","можда","треба","ништа","молим","хајде","један","много","време","значи","посао","никад","јесте","немој","добар","живот","своје","ствар","данас","одмах","твоја","видео","веома","твоје","јесам","нисмо","немам","човек","новац","сутра","други","доста","према","место","овамо","једна","драго","начин","будем","после","добра","врата","овако","право","након","тешко","сваки","супер","једно","прави","момци","мајка","помоћ","пусти","преко","дакле","какав","будеш","његов","тачно","мисли","имати","мртав","прича","неког","бисмо","врати","друго","посла","стани","твоју","скоро","назад","дошли","важно","питам","јутро","брига","отићи","дошла","каква","љубав","ваљда","попут","идеја","знати","чудно","друге","убити","права","поред","драга","јасно","свету","икада","мојој","стари","особа","негде","двоје","близу","свега","смрти","шансе","синоћ","свима","момак","дечко","драги","испод","места","пошто","дивно","обоје","такав","десет","свако","друга","добре","узети","света","једва","позив","земље","барем","мртва","добри","среће","вести","током","некад","касно","често","иначе","убица","нашла","врста","битно","седам","слике","штета","твоји","стара","напад","приче","писмо","лично","умрла","месец","какво","земља","свуда","изнад","слика","свака","доказ","књигу","школе","звала","мозак","минут","овуда","около","избор","глави","затим","таква","глупо","задњи","браво","улази","авион","њихов","закон","ручак","лакше","мајке","књиге","откуд","изаћи","мртви","глава","хране","агент","праве","карте","рачун","сунце","своја","књига","онако","корак","скроз","ћерка","млада","готов","откад","тајна","жртва","дечак","многи","нигде","језик","стићи","знаци","диван","глупа","страх","хотел","храна","проћи","звати","мирно","давно","девет","влада","чисто","жртве","млади","народ","изван","тежак","срећа","одмор","десно","секси","очито","дивна","снаге","тајне","старе","вреди","злато","успут","шанса","пакао","глупи","збиља","група","школа","крива","метак","улице","стање","савет","памет","задње","троје","карту","јести","отказ","мајци","такси","лажеш","увече","мотор","сумње","важан","особе","хитно","ноћас","траје","говор","многе","дроге","пијан","камен","мирис","њеном","бивши","херој","излаз","ближе","чудан","врсте","трећи","усред","такво","мадам","петак","ваших","благо","тетка","налог","какви","комад","бриге","борба","извор","снага","груди","писма","однос","идеје","макар","једни","рођен","борбе","кости","убице","ђубре","вруће","банке","удари","ортак","песма","птица","тешка","газда","убрзо","потез","групе","цвеће","ватра","криви","бомба","одело","задња","широм","читав","ветар","птице","миран","смеће","чиста","улица","браћа","обзир","ватре","шешир","тужно","важна","пажња","гадно","докле","папир","возач","стати","екипа","тврди","свети","узрок","принц","ризик","модел","крила","виски","песме","велик","израз","комби","младе","јадни","шериф","чудна","мртве","старо","лопов","мачка","кћери","облик","богат","висок","невин","бомбе","олуја","стога","млеко","сврхе","јадна","такви","капут","отров","казна","скупа","журка","пакет","вирус","дрога","топло","глади","подне","уживо","цркве","будан","умало","досад","владе","пожар","рођак","чувар","удати","пасти","писац","млађи","криво","знање","датум","колеџ","неред","пилот","равно","осмех","анђео","мушко","умрли","карта","свиња","терет","аларм","чамац","марта","знања","црква","мачке","спрат","успех","снови","злата","обале","мотив","играч","чисти","тужна","плућа","лудак","лекар","плате","ћерке","дугме","тајно","плава","базен","тачка","пажње","вожња","дупло","терен","долар","тужан","банка","замка","бивша","чудне","змија","ретко","тачке","одећа","алиби","јадно","добит","ловац","мртво","јавно","части","тешке","одбор","казне","колач","плави","центи","здрав","глупе","јасан","парче","гости","касни","канал","лажов","лопта","треће","војни","дивне","потом","свиње","таман","понос","немци","хумор","трећа","демон","часни","сврха","прећи","ноћна","торбе","мајор","чизме","оброк","јадан","стене","мамац","радње","поноћ","класе","разум","накит","дубље","фирма","мирна","спорт","сцена","власт","бесан","слова","рањен","свеже","судар","улога","десна","запад","појас","ручка","попис","наука","слабо","санта","слуга","самом","мушки","будна","тунел","проба","лични","фирме","вожње","листа","довде","звуци","банде","север","испит","роман","лажни","чисте","гужва","разне","слава","лажна","дивље","засад","крава","екипе","шифра","имање","трупе","личне","траве","хитан","сумња","стопа","мисао","хитне","кофер","шећер","албум","стриц","океан","слаба","звоно","хтети","звери","сцене","мреже","болно","вечно","певам","траке","везан","јунак","лажне","торба","лажно","борац","улоге","ноћне","плаво","музеј","родни","ланац","штете","споља","пасош","ближи","лутка","ритам","ратни","споро","битке","стена","банда","мрежа","исток","чешће","дивљи","дивни","ружна","април","мудро","марка","обући","учити","порез","талас","трава","журке","пауза","змије","листе","пепео","замак","вежба","јасна","благи","лутке","ноћни","крађа","битан","тумор","прање","плоче","краве","тврде","славе","ружан","радно","ловци","кувар","погон","додир","науке","одела","дилер","песак","прљав","тепих","свето","савез","пусте","плоча","трака","метал","нежно","маска","унука","битна","чврст","маске","јужно","чудни","водич","војна","сенке","божји","излет","покер","божја","звона","робот","дивља","кавез","радња","одаје","моћни","дебео","класа","моћан","длаке","браон","божје","учење","углед","грубо","плата","пуцањ","торањ","часна","вољан","пушка","мржње","отпор","торта","бинго","важни","свађа","јавни","сукоб","бесна","шатор","прсти","блага","матер","виђен","строј","пошта","топла","логор","дупли","преци","патње","одред","рубље","вољно","фарме","слуге","стрес","лична","чудак","кућни","отвор","тањир","облак","слаби","оцене","тигар","црева","чекић","пацов","млађа","жедан","тешки","слово","ручно","зомби","пораз","крађе","назив","бивше","витез","пасуљ","дотле","лакши","стаза","оклоп","лопте","свете","гадан","шворц","оглас","теста","мотел","криза","свађе","ормар","скупи","имања","салон","балон","паљбу","вежбе","низак","моћна","смела","драма","стања","сенка","округ","бонус","расти","јакна","мржња","врућа","жртви","слепи","торте","блато","нађен","тачан","племе","кусур","морал","сапун","маште","минус","свест","нећак","круна","метар","мудар","кафић","слепа","патка","тетке","волан","тенис","јесен","крвни","мамин","свеће","пешке","ивице","делта","палац","ружне","упола","нагло","отпад","износ","печат","клима","прићи","образ","радни","ткиво","татин","врећа","кловн","драге","фарма","опште","ткива","лишће","ребра","нужно","смене","канту","тамна","машта","оштро","напет","зглоб","пчеле","одсек","топле","прасе","улози","десни","ситне","екран","точак","брада","појам","слабе","скупе","ратне","поште","глума","цимер","журба","смели","бесни","мушке","биљка","цртеж","нежан","криве","магла","хокеј","флота","буџет","вреће","хитац","позор","пробе","горњи","исход","флаше","гадна","шифре","очеви","хорор","лепша","локал","оштар","мушка","фронт","нафте","путер","бране","рагби","отета","делић","обала","радар","замке","флаша","зајам","плажа","крзно","јадне","масон","кризе","будни","ранац","слепо","драме","браве","оскар","мокар","женка","купац","одраз","шетња","бајке","тамне","даске","кугле","радна","опере","аутор","нарав","товар","моћно","рунда","пруге","окрет","поврх","патке","црево","тачна","посед","копно","карма","мокра","нинџа","зубар","коцка","барон","јужни","норма","кугла","јетра","шести","дућан","кашаљ","бунар","јужна","свежа","збрка","вишак","запис","пчела","псето","метро","пумпа","балет","лажан","слати","врело","груба","лимун","лампе","борци","налаз","вечни","тамно","браде","масти","певач","седми","мачак","строг","првак","морон","опако","сенат","лампа","патња","напор","завет","пумпе","домар","ретка","штене","услов","утеха","драже","откуп","коцке","лепши","женке","силно","паљба","моћне","омлет","чопор","олако","гране","танго","перје","челик","часно","јагње","коњак","вагон","обред","сајам","оквир","журбе","повез","пехар","стока","среда","исказ","серум","љупка","фазон","крема","прост","гепек","колац","дубок","старт","завој","лукав","поток","носач","барут","баште","канџе","обрве","битне","мршав","врела","ситна","веран","марке","турбо","канте","густо","лонац","редак","фокус","спреј","омега","орман","самац","упале","тачне","фраза","ручни","давеж","једра","диско","авети","дрзак","ласер","сељак","лепак","танка","јакне","круне","јелен","петље","слање","мрави","сируп","тужба","мањак","стадо","љутње","конац","бајка","кањон","кадар","букет","раван","мишић","лаган","весео","ускрс","верна","свећа","декан","гадне","мекан","широк","верни","грана","цигле","покољ","цифре","шетње","копна","нацрт","жарко","залив","канта","купус","цитат","табле","фотке","јахач","обука","наићи","петља","опера","мокро","клише","поход","свежи","опрез","врући","гарда","гарде","газде","госпа","копља","нафта","мењач","течај","писци","шесто","шунка","бисер","табла","режим","рањив","башта","месар","макац","угриз","украс","монах","бачен","кечап","стопе","цивил","темпо","вотка","сплав","канап","њушка","крзна","памук","замах","уцена","орден","задах","пруга","језив","тамни","бетон","сукње","једро","таван","вране","магле","лакат","камин","најам","ташна","малер","шамар","коров","успон","восак","матор","ковач","труба","врана","фетус","оцена","родео","фитиљ","бучно","талац","бибер","квака","црвен","болан","зрело","клупе","гулаш","жваке","тркач","ведра","климе","вашар","бренд","дизел","шофер","зрела","вечна","бубањ","гозба","паста","форма","амбар","оруђе","панда","свила","зраци","бледа","ведро","гљиве","циста","хакер","жвака","шипке","закуп","занат","патак","сукња","ексер","верен","свеци","ефект","кобра","кожне","нужде","љутња","нинџе","цркла","јарак","залог","гадни","рубин","искра","гошћа","купка","масло","дебљи","кокош","лабуд","венац","ларве","атоми","кокос","дрвце","унуче","ланци","пудер","мазга","цигла","вафле","фетиш","мачји","корпа","бесно","шљива","бојно","фарба","гамад","сањар","вашке","масни","гљива","котао","фиоке","масне","пауци","орион","клупа","пасји","давна","бедра","фарса","верне","лакша","нотес","перон","зубић","бурме","цифра","зарез","кожна","белег","даљње","цимет","зрнца","завод","бизон","берза","верно","пуњач","бурма","дерби","шипка","шиљак","зубни","бучан","кожни","мазге","дража","фосил","џокер","бесне","факат","пасте","бурад","џокеј","читач","масна","фиока","двоја","дабар","бутик","мерач","вајде","цисте","зреле","берба","патос","фарбе","глина","бурно","дашак","пасус","рампа","копча","дебља","зрели","галеб","алиас","вепар","певац","масер","бучни","паљбе","забит","буцко","бучна","копче","шишке","копач","бенџо","сауна","канда","дедин","усеви","њушке","медиј","лаком","кваке","канџа","рерне","мачор","алати","порта","штаке","перач","будно","нулти","одане","самци","бодље","парни","гњида","акорд","амбис","посне","посно","посна","пењач","питон","питак","сеоца","пиони","пилав","сеоце","позне","позно","пипци","свота","редар","регал","росна","рески","репић","рафал","ратар","ризла","рикша","рогач","рогоз","речца","проје","пршут","прсат","самба","салва","салве","пречи","прече","радан","псићи","птићи","рђаве","пунђе","пунђа","рујно","рђава","пулен","фртаљ","флуид","фосне","фоаје","харач","фушер","фреје","фјорд","уштва","уштап","уштрб","уједи","хтење","хтења","хумке","хумка","царић","умњак","умети","утаје","утаја","учена","ушата","ушато","утући","шахта","шаљив","шкрге","шерпе","шерпа","џибра","џепна","џепић","џезве","џезва","шанац","џукци","џунке","џунка","шупља","штуле","штула","чађав","чапље","чапља","чајна","чврга","цуцла","чуван","чувен","чулни","чулне","чулна","чочек","чишћи","чишће","чобан","чујан","чешћа","чељад","чесме","чесма","черге","черга","читка","читан","читак","чирак","чишћа","чичак","чипка","чипке","чиоде","чиода","стеге","стега","степе","степа","стран","стоти","танан","сулуд","сужен","судбе","сувљи","сувље","судба","сузни","сузне","сужњи","сушти","суште","сушан","скеле","скела","сејач","сифон","синов","снахе","сокић","слоге","слога","смеса","смеле","ћуран","ћумур","ћумез","туљан","ћилим","ћивот","ћорав","ћевап","узвик","узмак","узице","узане","ужаси","ужади","удица","удице","течне","тикве","ткано","ткаље","тегић","тврђи","тврђе","тврђа","тесни","тенор","туфне","тумач","тупав","трасе","трафо","троле","бољке","брање","бркат","бреза","брезе","брзак","блеђа","блеђе","блеђи","болид","болни","видни","вишња","висак","буџак","варош","вечан","вазал","њисак","гушћа","кникс","бурне","вртни","бивол","габор","парно","фазни","шишан","нулта","агенс","фазно","нулте","мајур","конак","шишач","бујно","нужан","веган","парип","феште","вашка","шивен","одеон","шиљат","фазан","вучно","вршни","вајар","забат","фауне","кован","алаве","вучић","бунда","мачић","мацан","алаво","бушен","бећар","вучје","кодно","колан","вајка","басна","барке","батак","барже","баржа","бајан","бајат","афект","аутић","ароме","архив","астма","аршин","базна","базне","бабин","бабун","ашови","бадем","багер","длето","гулаг","густи","дувач","дуели","егзил","евнух","ђакон","ђерам","ђачка","ђачић","ђачке","ђачко","ђачки","дрвен","драти","дрвље","дрвно","дрвни","дрчан","друид","врсна","врсни","врсне","врење","врења","врлет","гибак","возни","возић","вињак","вољне","глуве","глоба","горке","горки","гонич","замор","мазни","буран","давни","жњети","циљна","сањач","вршке","љутит","сапет","лавор","факир","бушно","карме","буљав","декор","нужни","обади","гњили","сатир","вучна","лагум","делте","цепке","ведри","лавов","сатрт","будне","вучен","кајак","бутна","певци","мазно","мазне","пајац","лаута","бујне","конто","бирач","парна","сајла","векне","буђав","везни","црнке","њиска","булка","везно","колос","нулто","копан","ларма","факта","гуљен","каљав","каљен","зазор","кобно","вршна","даљни","буков","бурна","пауни","даван","аноде","фазна","ваљан","бунде","вучни","бувља","сатне","алави","вајда","кобна","ларва","касач","заова","марже","задрт","касте","дебло","медна","мажен","алава","бедро","кожар","шкамп","анода","кануи","махер","пасје","пачје","бујна","аорте","амеба","фелна","ласта","анфас","вунен","папин","паран","гуњче","девер","задан","зубне","ланче","алоје","финте","вајни","сафир","вучја","нуђен","антре","зулум","шинто","буцка","колор","вајна","кодна","цркле","бешња","сајле","вађен","бушач","колар","мазна","мазут","мазан","сарме","сањан","ампер","колут","цркло","давне","анали","буђен","гњило","феуди","пашче","меден","фишек","деобе","каучи","лауте","фенол","цирус","задат","гажен","лавља","нужне","квази","капка","букве","адути","касир","везне","бурек","пацке","бешњи","шиљци","копци","масив","бујан","кожух","бирои","ширен","анекс","зрења","букач","шетач","ваљак","лављи","лавић","машна","сађен","безуб","даљна","маљав","санте","дагње","дедер","козји","ваљци","зурла","засек","параф","љутић","гушћи","кобни","шићар","амебе","црнка","пацер","будак","пасаж","циљне","венци","сатић","даљне","вртне","певан","шејка","занет","циљно","везир","алеје","вучји","бучне","медно","дезен","сачма","цирка","пасат","машне","сачме","бидон","дерле","бушни","шибер","зурле","сарма","шињел","бураг","азоти","сатни","бешње","кобан","коноп","лавље","даљњи","бутни","аласи","фешта","акреп","медни","фикус","бурни","сахат","фауна","актер","качен","буква","вршак","карго","везна","конци","нужда","аорта","актив","бујни","цркли","лавеж","кафеи","пањић","бенав","фелне","кобац","индус","капак","коала","ганут","бусен","векна","козје","катун","сасут","шефов","бушан","врцав","заове","кожно","ведре","финиш","шипак","гарав","зрење","гњиде","сатен","ласте","вртно","цеђен","даире","лабав","шибље","капци","сарач","пасја","циник","белај","колаж","кодни","фарсе","бутан","анкер","медне","залет","сањив","нужна","магма","гушће","ведар","дебље","дебла","федер","булке","занос","агрум","велур","деоба","конус","везен","мекет","биран","зубат","пачја","даљња","алкос","зрнце","залуд","касна","бербе","двори","магме","филет","галон","аграр","лаици","масан","вучне","пачји","запет","бутке","акрил","цијук","мачја","шкарт","фалте","каста","козак","берач","двери","галоп","депои","деран","шибан","циљан","црвић","канон","финта","кобне","бехар","мачје","амови","декин","парне","козја","папци","сауне","биста","њиске","зупци","бушне","фијук","зубац","алоја","пацка","паљен","ларме","бутне","кобре","алеја","вајне","фалта","циљни","гареж","мурал","мутав","мрене","мољен","мотке","мотка","мрсне","мрсно","мрсни","мрмот","непун","непце","непца","нехат","нејак","неука","неуко","неуки","невен","ножић","ножна","ногар","нанос","лонци","љубак","љигав","љиљан","љуспа","лучни","лујке","ливци","лимбо","лимфа","лимар","локне","лишај","мишар","мидер","минер","могул","модле","млако","мелез","мемла","маржа","мекша","мекши","мекше","менте","мента","мерак","менза","мензе","мамбе","мерен","мерна","мерка","месна","месно","месни","осице","осица","осврт","оруђа","опоре","опора","опити","орлић","орити","орање","паган","пажен","палеж","палма","пазух","порте","паори","панои","панџе","отпис","оџаци","овчар","овчје","овчја","овлаш","одано","ношња","ношње","обест","носат","носна","нотна","носне","носно","нотар","обран","обрти","ободи","омања","омањи","олаки","олоши","олуци","опало","опеке","опела","омоти","ониже","онижа","онижи","одран","одрон","оксид","окуке","окука","идила","идиле","знано","зетов","зенит","зебње","зицер","злоће","злоба","зигот","зечић","зечји","зидни","зидар","зидне","зидна","инати","једар","јарци","јасен","јемац","јецај","једре","јелек","искап","јарма","јарки","јарке","јарка","јавор","јагме","јагма","жвала","жбица","жарен","жарач","жарки","жешћи","жижак","живља","живљи","жедно","жедне","ждрал","жезло","желеи","епске","етаже","етажа","етапа","есеји","еснаф","емајл","екцем","едикт","епови","епоха","епика","жабљи","жабља","жаока","жаоке","етапе","еским","зачет","згоде","згода","жрвањ","житка","житко","житна","житне","житно","жучни","жучне","жучно","засут","журни","журан","жупан","журне","журна","крцат","крхак","крхке","крчаг","круто","кулук","кукољ","кршни","крвно","краул","креда","коњић","кошња","крамп","крпељ","крпар","креја","креје","крмак","крмељ","леден","лемур","ленте","лента","лекић","легат","левци","леђно","лечен","ливац","лењир","леске","летач","летве","летва","куцач","куцан","куфер","купан","купач","кумић","кунић","кураж","кљове","лађар","кујна","кујне","кљова","кочић","калај","калем","кварц","калфа","калфе","кавге","кавга","каиши","кепер","кендо","кефир","јурте","јунад","келти","клике","клице","клинч","клема","клека","клеке","клеме","коска","котва","котве","котур","корзо","килав","кипер","кинин","кинта","кибуц","кивна","киван","кибле","кибла","кивно","кивни","кивот","кињен","кићен","клапа","клане","клати","кисео","кицош","кишно","кифле"
            ],
            Ta = [
            "рекао","можеш","желим","морам","идемо","хоћеш","рекла","имамо","могао","видим","желиш","кажем","радиш","мораш","волим","знате","тобом","своју","радим","видиш","кажеш","чекај","праву","дошао","имате","срање","могла","нећеш","једну","могли","надам","нисте","знамо","имала","свиђа","имају","имали","радио","рекли","добио","знала","волео","овога","брини","нашао","хтела","немаш","желео","морао","главу","звучи","бисте","волиш","чујем","крају","уради","знају","појма","новца","нашли","мојим","сећаш","могло","зовем","граду","дајте","мрзим","неким","месту","овоме","сећам","бојим","земљи","питао","тражи","брате","какве","чујеш","земљу","смири","исусе","другу","послу","нашег","краја","знали","школу","брата","којој","почео","причу","идите","града","друже","вашег","мисле","мајку","нађем","живим","собом","којег","мојих","јесмо","школи","стави","кунем","убије","зовеш","храну","одемо","чекам","којим","неком","идеју","слику","смета","веруј","главе","уреду","онога","имена","једне","купио","такве","успео","пажњу","идете","сваке","учини","стало","нашим","убили","убила","стању","хтели","вашем","нашем","свему","шансу","курац","питаш","наших","улици","стоји","крени","прати","остао","живиш","срања","сваку","нашој","дошло","чарли","гледа","бићеш","спава","донео","питај","дођем","украо","момка","шалиш","неких","путем","узмем","женом","дођеш","мајко","новог","брине","траже","какву","срећу","добру","очима","носим","вашим","довео","рекох","којем","узела","водим","чувај","уђите","мојом","играш","идиот","стиже","дајем","лагао","броду","носиш","држим","првог","њеног","звали","вашој","дечки","враћа","јебем","никог","узели","играм","тајну","нађеш","живео","краља","којом","хенри","дечка","стану","самог","јутра","умрем","песму","умире","малог","убија","мрдај","имену","одећу","такву","брода","особу","возим","фунти","ватру","снагу","држиш","чекао","сазна","узмеш","скини","плаши","прође","првом","врсту","убићу","среди","ћерку","тајни","ономе","момче","одете","целог","сунца","једем","почне","осећа","шалим","борбу","ценим","изађе","једеш","бацио","јебеш","мозга","говно","играо","плати","браку","убију","пуцај","истом","којих","носио","изађи","креће","новом","улогу","кошта","узећу","дрогу","пијем","купим","давид","целом","торбу","срели","дирај","лопту","столу","кучко","надао","врага","курва","возио","журку","држао","жалим","клубу","момке","кучка","синко","филму","бојиш","возиш","падне","упали","водио","расте","спаси","зваћу","казну","плаћа","пуцао","умреш","филма","напао","чекаш","смемо","зезаш","пишем","улицу","париз","убицу","борби","некој","крене","новим","одвео","парку","смрди","врате","стоје","цркву","пијеш","удала","истог","њеним","крије","водиш","малом","устај","читам","лажем","хитну","почни","очију","додај","служи","слуша","руком","мамом","седим","удара","децом","плана","узима","малим","читао","цркви","плажи","имало","стана","водом","онима","листу","појео","бомбу","обуци","посто","трага","мрзиш","јавио","борио","секса","писао","књизи","могле","истој","групу","ником","сањао","јавља","ураде","нечег","богом","снова","њеној","одбио","ућути","свога","научи","читаш","стару","умиру","снове","попио","банку","убиће","клуба","плану","издао","пушку","нових","прсте","прате","нечим","брату","стола","сетим","ничег","макни","мраку","типом","попиј","борим","жртву","брака","вожњу","губим","удата","сетио","свира","играј","сцену","листи","дајеш","јавим","крећи","плаче","штити","стане","банци","паклу","малих","угаси","лицем","уђемо","сузан","паузу","слаже","госте","смрћу","храни","радњу","живог","чувам","гласа","стали","татом","купиш","пакла","краљу","обали","сином","пишеш","испао","групи","смеју","чиниш","губиш","бориш","виђам","траву","седиш","пошао","замку","адаме","срела","нивоу","првих","истим","следи","торту","првој","бригу","шетњу","мужем","стижу","њених","крвљу","мачку","седео","јакну","целој","штету","пошту","решио","мозгу","моста","мрежу","пођеш","екипу","шаљем","њезин","вашом","педер","бавиш","пенис","бавим","курве","младу","чујте","утиче","налик","траку","исуса","смете","крило","малој","скупо","хитна","маску","труди","глуми","радњи","почну","ножем","сањам","чиним","срцем","крову","слици","молио","понео","фирму","служе","бојао","госпо","новој","причи","новцу","преда","особи","плаве","важне","броју","прими","броја","твога","метра","смрад","убило","тачку","пуном","имале","решим","битку","родио","торби","снаћи","пушке","битка","идући","метка","руски","крећу","биљке","текст","ружно","брину","извео","лошег","мирни","ујаче","курво","плаше","марко","фарми","гурај","ујака","пазим","убаци","пићем","ходаш","ходам","форми","аутом","осети","бирам","фарму","звони","црнац","бољег","обалу","ивици","устао","флашу","брани","владу","љутиш","аферу","сврху","олује","сунцу","нашом","пушиш","бацим","ниско","парка","бежиш","плажу","расту","сереш","чуваш","пођем","радом","плату","говна","фирми","снима","обави","значе","врагу","млека","ужива","каучу","краде","одеће","скочи","кампу","лоших","мајки","делом","нудим","летим","отели","дивим","прода","поена","дошле","пушим","зрака","косом","имаћу","смеје","мешај","криву","дивну","стазе","пуним","своме","журби","карла","виђаш","пуцам","слажу","плачи","стилу","мрзео","виђао","упала","члана","славу","шалио","крену","црног","врату","пошла","ожени","марио","сексу","дишем","пазиш","лепше","црном","шупак","чувао","клони","филип","кругу","браће","уреда","компа","лорде","бриши","мрака","десне","повео","шифру","давао","ногом","икога","пружа","живце","војне","улазе","пружи","госта","прима","прста","смеру","пуцаш","укуса","првим","редом","онамо","бејби","крова","змаја","момку","браду","скоте","прети","белог","нивоа","прија","журим","скали","спасе","винце","дроља","тужбу","тукао","глупу","певаш","сиром","петка","лудим","уђете","опери","банди","изађу","обуку","плаву","бациш","одбиј","дужан","плеса","варао","браћу","возом","даном","терај","сцени","зезам","мосту","плочу","нокте","птицу","плаже","ромео","пробу","казни","трена","ручку","однео","браћо","личиш","чинио","бежим","плеше","крију","лутку","лошем","жалиш","журци","стази","сести","ветра","врећу","порно","читај","таоца","троши","вараш","десну","хлеба","лампу","ичега","јавиш","свињо","личну","летиш","труда","детаљ","пушта","приђи","посве","стала","лежао","оделу","белац","хомер","блока","ходај","успем","овиме","санти","викао","влади","дужно","мртву","среде","шефом","крилу","хвата","ланце","пређе","скине","јапан","трчао","ставе","телом","мењам","љубим","силом","дигни","имаће","стоку","одржи","удаје","белом","адама","лутко","слави","хајмо","решиш","точка","хаосу","лошим","умрло","сишао","суочи","вожњи","курву","јебао","ходао","кувам","смену","псима","пукла","трчим","учили","прођу","мешам","метке","улазу","крађу","грехе","целим","иване","бољим","учила","певај","побио","бираш","личим","рекло","попео","круга","задњу","кампа","фенси","свиме","врсти","џорџа","лепих","стазу","сломи","пошли","писму","тешку","бебом","свађу","гробу","мраза","вичеш","јужне","делим","јуриш","башти","цезар","трупа","идуће","машту","сагни","трчиш","рекле","бомби","дигао","варам","зезај","сетиш","кучке","јелда","ноћну","трпим","смећа","твоме","свиди","црнци","петљу","ћерки","јурио","сумњу","екипи","лорда","трагу","кућом","звука","успеш","круну","смањи","чисту","стила","длака","прагу","улаза","одсад","војну","бавио","збива","дечку","цвећа","ушима","лепом","допао","знака","таоце","нечем","десио","краду","ташну","молиш","игара","ватри","сними","ћутиш","ираку","бацам","тесту","сањаш","одећи","пукао","важну","кризу","пичка","топлу","курца","самим","гужву","флоте","одати","спали","смена","жалбу","гроба","мешаш","мојем","плива","журиш","црним","бенда","среду","патњу","паузе","браву","снази","отети","бенду","греши","мучио","мачем","лепим","гради","попни","дирао","знаке","дигне","многа","песка","олују","кучку","имању","трећу","зраку","додао","учимо","своди","пазио","певао","голим","пређи","додам","вишка","бацаш","лажну","скида","жалио","шанси","штите","лифту","мењаш","оперу","живих","онуда","стоне","белим","мрежи","гњави","краву","дебра","мучиш","стаје","дишеш","ловца","петар","свеца","пуној","вреде","млађе","слона","гужви","патио","будим","пушио","кућне","сипај","ледом","духом","шаљеш","седни","очева","напио","увери","спада","длаку","храма","стиди","клана","јавна","тимом","убеди","упуте","траци","обома","лепог","змију","љутим","пичку","холмс","пошло","пишам","грама","опису","смеха","уведи","гласу","белци","везао","факсу","сруши","снега","науку","бившу","горим","надаш","данте","плесу","башту","свињу","таблу","учине","гласи","науци","мржњу","руске","летео","гурни","тукли","елвис","левом","селим","цвета","дираш","греха","тераш","карти","споји","патиш","ушију","глуме","додаш","услед","сањај","броји","скаче","белој","пуног","падам","петра","рунду","усана","тужни","цуром","бежао","навео","ситно","куваш","чамцу","банду","тулум","истих","већег","љубиш","тетку","науче","доњем","срећо","корпу","чијој","ћошак","класи","перем","омета","јетре","храму","јурим","приђе","мојег","даћеш","упада","касне","учења","клупи","већим","буљиш","сенци","кључа","гураш","сењор","стоке","блату","решен","црних","мењао","дружи","метод","јавне","двору","гужве","божју","очеве","клопу","црној","дугог","забио","скачи","куглу","утеху","новце","плачу","марса","марку","чудну","самој","окупу","трају","вољом","почет","тресе","марсу","патим","сукњу","цента","стрип","граде","пичко","женим","карло","стела","купца","радну","чудим","срању","циљаш","руска","конгу","шетао","обори","броди","крему","пукне","лежим","топао","тужбе","лудог","наиђе","табли","ликом","бодеж","домет","блата","знаће","брава","икако","луком","тушем","крвна","песку","скота","мичел","поаро","жедна","шетам","ружни","носом","тигра","опрао","црнца","копну","флоту","убицо","монте","зарад","кризи","курир","умеју","падну","коцку","одани","коцки","курви","топли","усрао","трбух","гризе","месом","христ","левој","лифта","ћошку","седне","круже","плеши","паузи","дајмо","плешу","трену","кружи","избио","самих","радне","отела","квари","јетру","сенки","дамом","игром","сврби","ланца","циљем","копље","терао","учите","атома","палим","харли","нежна","дугом","молбу","нудиш","отоку","тигре","отиђи","убици","памти","сенку","јадну","паром","дрољо","климу","трему","рибом","бирај","даску","запео","јарди","пизда","вичем","драму","вотку","баком","бојте","грофе","паука","трави","брацо","дижем","дотад","скупу","опада","торња","јакни","бољих","ровер","точку","шкоди","слугу","звуке","делиш","мрзио","приме","душом","живом","икоме","вређа","плима","ужину","грчки","писца","вољни","штали","удаљи","психо","немац","следе","грофа","блоку","пичке","рунди","крити","фунте","пивом","јаким","бољем","форму","ловио","отока","сишла","хтеле","раним","окупи","никуд","звуче","обуке","пошти","бацај","спасу","смера","срећи","надај","кичму","исусу","лежиш","лудом","бадње","курса","олуји","обуче","маглу","снегу","пумпи","знале","ценио","кинез","макро","сиђем","малко","петом","упалу","јужну","порше","већих","оцима","жениш","пуних","тржни","јахао","корен","склон","нафту","крвне","збрку","стену","дуван","хлади","осуде","ловом","тужне","маркс","класу","курсу","мрава","хулио","губио","конце","пређу","бедни","белих","овима","раста","црнце","ловим","марту","прођи","петре","шупку","тамну","ниска","даска","дугим","ранчу","створ","јашем","греше","штаба","заспи","изнео","равна","сидро","младо","мален","пиздо","звани","фунта","нагон","ветру","јасни","спора","ивана","вољна","песми","уједа","осете","марим","афера","утичу","плови","јенки","ничим","дупла","умете","војно","повод","орган","слала","исећи","жалбе","ловце","измет","репом","конга","обићи","замци","свећу","таоци","вукао","ћутим","устав","лудих","мрдни","вајат","токио","бацач","нашле","мудра","укусу","скину","дугих","бојом","кафом","јавну","оцену","зачас","врећи","слали","опаки","патку","џоинт","унуке","срама","пијте","жваку","тачки","шарма","кућна","краће","седло","крста","рингу","слама","смеђе","мучим","факса","ситни","бијеш","какао","плута","науди","фиоци","грчке","попне","хаоса","хвали","тајмс","дирам","пумпу","легао","штита","чудом","благе","купци","морем","тврдо","шталу","чамца","опака","дужни","слети","варка","остин","темељ","шунку","штеди","упуца","ирске","амиго","цениш","копаш","јасне","врпцу","ударе","газду","вином","пипни","фонда","голуб","труде","љубио","флора","переш","бризи","арија","пишки","клади","троше","лишћа","ратна","глува","ратом","гасом","смрде","биљку","штима","одсео","вреба","јашеш","торњу","ујаку","вучеш","висио","палиш","нокти","ремек","ћошка","серем","умови","сиђеш","унуку","блузу","легла","браћи","копао","спаса","драгу","тесно","летњи","одана","шеташ","гурам","стећи","вотке","ружну","казао","врућу","бацао","удају","петог","ужаса","оштре","судом","јелку","доњег","дуплу","брусе","немце","мудри","аполо","голог","оштра","небом","стрпи","клизи","укаже","голфа","клупу","ниске","кајем","споју","нарко","финог","узеће","већем","флоти","бедно","купку","падао","љупко","битни","куцаш","грипа","канти","умове","вољен","болна","летом","труло","свађи","вежбу","одају","зезао","плашт","слабу","ирски","робом","рабин","борца","кукаш","јашта","сајту","ланцу","сипам","дочек","марша","падаш","вадим","дивио","гадну","брише","увући","знало","аудио","уљеза","гозбу","тоник","вежем","унеси","тресу","зраке","издам","кожом","раном","уђимо","азији","убиле","кућну","штети","видех","већој","спаја","жељом","грчка","отуда","чамце","гледе","кауча","смећу","проби","ивицу","везом","јарац","мањих","гениј","раних","опали","сложи","дужна","оваца","спори","афере","знаћу","писту","брзом","делио","бироа","болом","дебил","дигла","ташни","прете","злату","штале","дигли","кафеу","звоне","јахту","модни","коњем","штабу","транс","квару","лидер","упути","ловиш","ноћно","краво","груби","идеји","арени","јаког","магли","гуске","праху","могућ","стејт","копам","франц","мањим","цртам","селиш","ораха","домом","смени","патњи","псеће","женио","ћурку","улево","судим","лепој","прсту","тупим","зваше","смеши","танак","пасту","санке","динар","убола","стопу","мируј","ћелав","мокри","лутер","богме","жељан","алата","мокре","убода","чијем","нанео","уније","куцка","расла","терам","зваће","берзи","дојке","молба","мирне","крвав","пипај","шетњи","седма","рибар","дражи","нокат","крвну","лопти","брана","машти","сишли","скачу","очеву","дереш","вишег","белца","трули","лебди","коску","зелен","богаљ","грчку","бијем","тоном","некуд","улови","литре","швабе","ретке","жудим","глуму","гурао","копај","ултра","олтар","кварт","кинту","пукло","ступа","гадиш","брале","крађи","пулса","висиш","очаја","надом","ирска","сајму","знању","вежеш","осуши","имејл","синак","рубља","азије","плина","бирао","нерве","блуза","бледи","краћи","висим","терор","личио","оживи","торти","вучем","летње","курцу","тужим","клопа","бреме","адолф","турци","крили","плена","форме","трубу","мењај","ирску","умрле","мушку","сипао","лутао","отада","ситан","звало","дрска","разна","лосос","плочи","мноме","метлу","збило","јахти","клињо","удави","пират","лимит","судњи","увуче","ритму","шалом","делхи","сонда","јебач","поене","дечје","модул","ћерци","увуци","пакуј","далек","туђим","теглу","видеа","легло","диску","олово","мутно","дижеш","сумњи","ретки","ујела","хамер","шанка","визит","пуцња","унуци","писти","дечја","душек","хитни","црташ","часне","живље","пругу","фирер","шутни","вртић","рунде","греје","удате","штанд","живци","ислам","опиши","углом","срати","мираз","штапа","бесом","одвод","чипса","дивљу","нежни","шупци","угљен","уложи","имуни","хвале","ниски","обаве","томом","става","тетки","грађе","рибље","ремен","редов","ирака","допис","журио","цркни","обесе","оштри","смело","купце","палца","обема","сврши","тучеш","руску","трубе","звана","гуска","креме","дроље","брзим","јелом","крхка","носем","дедом","дрско","уцене","куцао","олошу","јежим","слепе","бакље","орахе","кичме","сврси","гајим","пењем","тесто","зноја","бруса","крала","концу","карлу","нужду","њушку","шипку","шанел","танке","умири","тужби","урина","смеђа","родим","млађу","одоше","споре","кугли","браца","суров","ивица","капом","свежу","писте","баром","рекет","метом","родиш","танки","пишаш","поста","сване","тврда","уједе","горње","жетве","сусед","свиле","весла","одору","благу","ручао","усели","стају","бурму","рерну","твари","будиш","форда","мањка","нагни","стени","напуљ","тежим","памте","усран","титан","сатом","купам","отера","уочио","фразу","тачни","крали","легне","ребро","елите","речју","јаком","јарку","тужну","дроги","бусом","куцам","ганди","тугом","горих","члану","бакљу","ринга","мотри","лујка","кутак","ћуфте","рвање","бедна","двора","уплео","плаца","сосом","труне","кунеш","стуба","летке","тачну","раног","фиоку","стида","гајбу","ранио","скице","прања","густа","прага","хаубу","фином","данак","ранча","кексе","жедни","осуда","учењу","одрже","адаму","љутњу","дувај","нежне","бедак","елита","ћутао","белце","упери","милан","ратну","журки","воћни","чауре","бироу","аванс","трпиш","диска","гусар","сингл","умова","кекса","греси","равни","равне","ступи","смеђи","одаја","пашће","шеста","пишао","миром","иглом","давим","јасну","списе","смире","туцао","скока","судиш","споје","занео","врпце","голих","финим","охајо","циљај","купон","кинти","кичма","течно","шунке","креше","двома","корпи","знаку","којот","писта","лечим","видеу","фунту","завео","сонде","брзог","помно","издаш","кинте","ћурка","воћем","фројд","удаћу","рулет","сонар","часну","стада","селам","слуха","исеци","живац","ували","сонду","плиме","псећи","голфу","дупле","профи","ликер","помак","набио","флеке","вежби","волво","тесла","драми","снаја","обије","палме","џорџу","полом","дрхти","газди","качиш","грубе","вреле","задао","глуви","удару","волти","рампу","јелке","сломе","гађао","осуду","гризу","микро","циглу","длану","зноји","зајеб","већом","манго","немир","гађај","начуо","разни","женку","стеже","чешаљ","горко","рерни","лупаш","лупај","јаких","жалби","рукав","крсту","уноси","излог","сјебе","убрза","силне","даљег","вером","нудио","трона","лечио","гушим","честа","прдеж","жбуње","шумом","кујин","доспе","горња","вешто","сутон","дрски","крабе","фотку","петој","кучки","масно","рујна","гајба","химну","умеша","корал","јачим","трком","сечем","брану","ручам","уљези","грома","кладе","павле","одсто","олова","пијмо","туцаш","птицо","давио","грану","борце","апачи","ракун","сруше","муваш","ромеа","кршиш","лилит","буљио","обеси","астму","глине","медом","фреја","хипер","унети","циљао","мачки","псећа","гурне","крчми","кирка","агата","среле","хомић","елисе","ухода","тренд","увели","храст","шаком","болне","ругаш","ласка","плача","мучно","дувао","кишне","угасе","гориш","чајем","шатла","прала","ручну","шесте","жицом","питом","труду","допре","биљни","давиш","дигну","обућу","вршим","вршио","снађе","џелат","жешће","осмог","довод","удела","бићем","змају","печен","обруч","убоде","шетај","ранга","плази","бујну","пушач","упиши","јован","пизду","тужио","бедан","бобом","корпе","јарца","мучен","сисај","лошом","сипаш","фразе","рибљи","танге","коске","ташне","тикет","ранцу","петао","седла","одала","окове","спале","усуди","клање","цртао","китом","очево","сећао","осмом","лењин","ћебад","жабац","кењаш","збрке","грипу","сјаја","жетву","слома","боксу","дисао","кршим","кнеже","бокса","вечну","гарду","звано","левог","лутам","отима","рупом","орсон","хинду","ратно","двема","танко","узето","тигањ","калуп","вишем","умела","данце","пусто","кешом","четку","шевио","јелка","елиса","убоди","гађаш","своји","раком","шприц","жутим","лотус","подло","налет","шупка","гнева","течни","убаце","цифру","рајха","жутом","улаже","арену","јахта","сувом","трупу","почев","алаха","идућа","нашло","сјаји","ужета","споја","жетва","удицу","лорду","мраве","мирну","улове","кишни","жбуњу","пупак","звање","целих","слине","бољом","шашав","вишим","норме","удеса","насео","тучем","мрдаш","бради","бојни","напон","тегли","трзај","слузи","покој","бакар","капље","драјв","слоја","бајно","ритма","прузи","трула","жалба","длана","набој","описа","мацка","мувао","дечји","циљам","мекој","влаге","лошој","јуриј","соком","држач","удове","узици","опрах","пљуни","отпао","сниме","бдење","вођен","горег","жељни","збуни","бакља","уходи","уведе","хидра","мрдам","такта","пипне","мариш","кабла","пепси","голем","нишан","обара","понор","бичем","опири","осама","општи","мразу","пуцњи","подли","бакра","кувао","госту","општа","сладе","обиље","приђу","ближа","чином","звану","рампе","начас","бандо","икона","перја","врелу","праха","мелем","слана","нерви","сорта","плове","замки","сфера","своту","фонду","срами","бакин","такао","зебра","флека","боцом","сочно","зачин","култа","грлим","пуцње","курта","пулта","грдно","дубљи","уздах","ручна","окупе","уздуж","куцај","пењеш","свраб","очуха","седлу","краба","чорбу","тукла","ташта","ручне","узеле","луташ","врпца","седме","сјају","рубљу","лежај","круни","одамо","глађу","учећи","сибир","одоли","јешћу","улива","брука","гуску","ћурке","одоре","врећо","звале","увета","дасци","грмљу","узело","кадет","пуста","бледо","горди","узета","љуске","хтело","шаман","фидел","шљиве","умеће","скаут","упало","полен","штала","метле","ставу","пекар","тутањ","идола","вукли","секте","троја","падни","јајца","лигње","осуди","влага","жилав","сајта","смара","литра","увела","лутки","издат","идеал","опише","бољој","испиј","чаура","сешћу","маски","левак","трпео","модна","молбе","модне","штиво","горак","бајку","греху","буљим","ширио","треси","пуниш","дозна","финих","свуци","гњаве","папак","кајеш","шушка","уреди","палио","купао","сечеш","каиро","слеће","геста","арене","сукњи","врели","берзе","вођом","тупан","власи","ужина","улети","воска","квара","мешао","зидом","дрољу","змијо","унија","обиђе","забиј","гузом","обуће","купаш","горка","одора","секао","моћну","ретро","јозеф","голом","учтив","сауну","угуши","опала","димом","ценом","гајиш","ирану","изићи","гасим","цигли","машеш","умемо","пљује","набиј","дивиш","канџи","ониме","утехе","јахте","женин","џепни","етика","скица","карму","мачко","летња","мањег","горњу","ојача","виола","труле","креле","траћи","доток","дуваш","жељно","чизму","сенфа","туђем","зуриш","летак","радуј","тутор","чијим","нивои","мрско","дечју","газиш","ножни","берзу","опаке","наиме","легни","упија","кепец","унели","етике","даром","испад","ладно","женки","свију","шутне","брбља","бунду","дуриш","усеве","опире","поука","окани","сквер","приде","струк","илија","пешко","порок","отело","фацом","бокал","скицу","садам","псећу","фарбу","звуку","греде","модну","реком","хапсе","главо","барка","вртиш","алате","жудња","хрчак","изума","метан","куран","хорде","скије","чијег","спала","бедне","упише","броје","сивом","таксе","слано","вечне","пизде","пољем","лупио","махао","одори","квоту","пењао","грани","тенка","шуњаш","флерт","трема","ретку","гребе","стоко","метла","суоче","вртим","макне","фалио","зване","кафеа","сиров","снађи","етику","виших","жељна","вукла","слане","чућеш","унесе","канио","перуу","алаху","скалп","трује","текла","нагиб","цркао","лечиш","мотре","чашћу","немца","нижим","шваба","тргни","велиш","јосиф","хаубе","жутог","птици","грмље","панел","пољак","вилом","тегле","упита","ширим","петла","блогу","хрпом","кожну","жилет","псује","смање","љутио","савиј","кваку","велим","узгој","хонда","клану","уклет","пажњи","санкт","туцам","желеа","врача","будио","седну","зрачи","чамци","брега","вадиш","дугој","каниш","рибља","олоша","извоз","стони","торзо","крими","јарда","дозом","унела","списи","гађам","дркаш","цвећу","сложе","сауни","самит","слања","запао","млати","крчму","трика","метеж","атлас","шизим","жудње","лепка","пецам","бајки","лампи","окачи","свилу","краћа","шириш","руско","обрва","хрчка","мехур","цењен","базом","умака","венча","вадио","мензи","шатлу","шупље","игала","горем","брави","каиру","госпе","искру","отмен","љуљај","тезгу","сламе","јарко","тихог","зноје","жудиш","сјаши","крека","милим","азију","скала","исели","побиј","клања","лудиш","гушиш","оборе","ораси","доњим","шевиш","тоста","уцену","немар","полио","нивое","смети","волта","жутих","ниску","отопи","пивце","брије","кишом","исече","форум","темом","репер","мотку","мувам","машну","псића","цркне","мрдне","химна","алжир","ривал","шапат","врхом","бегај","љутог","излив","дизао","падре","свеце","четка","бебин","кваре","тихом","сфере","фотка","вишње","лаког","мољац","клона","доњој","фриза","лупус","куком","ромел","хашиш","стење","обити","лижем","општу","изуми","утеши","чашом","арена","одјек","секач","туђој","вишој","тужиш","слете","туђих","граби","зурио","тибет","пегла","отмем","лазар","скува","уходе","раној","тврду","атоме","кроше","пљугу","чизма","падом","летњу","одаћу","лешом","брзих","штапу","умора","сакоу","месне","жутој","зезне","дужим","бајци","мишљу","павла","трону","кадру","удова","слути","строп","ругај","издај","сферу","мичем","сисао","дршку","скора","нагли","свари","труст","писце","летос","тацни","посту","перле","обећа","сирће","пенал","лупао","прању","бачве","бунио","удови","бабом","трљај","сакри","кадра","куцни","уболи","уводи","трске","апача","секта","купуј","шанку","робље","лонцу","грубу","масом","слађи","пруже","гордо","клада","сињор","собна","лизао","скоту","лижеш","лудој","кашља","утуви","танку","порив","гајио","салса","искре","донор","склоп","цвету","кашље","слина","креде","весло","отрчи","пунча","шегрт","леком","основ","нисан","флеку","вешти","педаљ","сувог","епски","рудар","кабал","мркве","даљих","родно","мржњи","идућу","њушим","уздам","обиђи","дрона","смеђу","жетон","лисац","стиче","хитро","скрио","гошћу","мудре","бледе","труби","слани","ушета","зурим","удали","укрца","чеком","капке","квоте","клопе","слађе","блажи","лепшу","спржи","пункт","дрхте","попну","помен","дувам","исака","убите","видре","нажао","дахом","лишен","тифус","расли","харем","злобе","рангу","одали","содом","џемом","пецаш","робне","додат","дркао","ткиву","упрте","буком","вокал","папке","мокру","часак","грлиш","мрена","бочно","скале","стале","мејна","џихад","перуа","испис","џедај","атеље","мазим","ломим","влагу","сочне","збрци","нагле","грижу","ручаш","меког","тегла","мером","заспе","аљкав","шакал","локви","наиђу","греда","конго","ломиш","лајеш","велом","лебде","цвили","крхко","петру","клими","сахиб","дршка","крике","каира","видом","пегаз","купцу","киоск","очита","увуку","крика","печем","ирана","топом","нижег","пукну","мазгу","астме","путуј","бордо","вепра","извод","науде","псићу","сочна","згази","јетри","нитро","шифри","бочни","бруји","вешта","тонем","мотао","вјешт","поуку","марки","шурак","битки","гарди","рампи","укине","чујмо","удаја","моташ","жудњу","шлага","мејну","уљезе","клиња","арома","учени","имуна","пукли","отмеш","пунио","мутна","флаши","многу","жваће","новци","пашћу","суфле","хаити","умара","окуси","жбуња","лаким","талог","полет","пулту","гризи","крчме","дођох","оживе","свиће","стаји","афери","окова","литар","госпу","гушио","љупке","пером","издан","кумче","чорба","танга","пецао","чакре","очају","грађу","гозбе","расло","чезне","норму","сабат","живни","окупа","кућно","машем","кушај","ловцу","умори","брлог","туђег","ситну","квизу","сајма","клоњу","уносе","акбар","сјаје","љуска","сивог","увале","крочи","крици","викар","кнеза","подла","трола","расне","уским","сорте","горео","ваљао","арапа","свињи","стаћу","отете","ћерко","потоп","чудиш","гњидо","земљо","скоку","сувим","писцу","дркам","полог","усева","кишна","чвора","полни","џукац","вешом","журно","сноси","хапси","панде","ободу","бачви","тамом","честе","убише","ваљаш","обриј","четке","увере","тарот","шијем","зноју","злоћа","пишај","имама","проси","сијаш","седај","унију","здање","опија","путне","целер","савио","ножне","браце","плацу","хлебу","дубља","купке","макао","масну","густе","дужег","зашло","свици","самар","гелер","друму","сакоа","кољач","џамбо","зебре","нерон","аташе","видик","чауру","дизни","сленг","мазиш","пљују","позли","хрчеш","спору","скоче","лајао","ичије","плиму","трљаш","дилдо","отето","одмет","укруг","такне","самце","сламу","базни","блузе","иконе","змији","хинди","лупам","смола","мерим","сквош","јанга","казан","кукај","омете","резач","хунта","љутих","данци","лавом","убеде","муком","рукуј","бојне","скрби","банки","нежну","одува","сидра","видно","римом","нагао","фењер","барку","вапај","гозби","сврбе","силан","манга","геном","плазе","чехов","крчма","чакра","фајлу","тезге","седмо","харфу","верио","ензим","љупки","гајби","кином","психу","плика","појму","порти","прале","пешом","посни","перли","помпу","плику","плебс","плећа","прали","посну","перца","појце","плаха","перут","посеј","пењах","сеизе","појци","плахе","посео","сетан","поруб","порту","плахо","плева","посан","пећке","пончо","прано","штипу","понех","понча","сеизи","перад","седих","пикет","пончу","робљу","помру","сержа","помре","пиреу","праши","седог","свићу","праља","понет","попех","порву","прало","порве","попуј","прана","пором","пећки","пећку","пивар","пород","плато","перла","прани","попих","пикап","попом","пране","пизди","плаху","попов","сетни","плахи","појим","поуке","сетне","сетно","појеш","поуче","плели","поуци","сетна","сетву","сетер","плене","потку","појио","седму","плеве","сетих","петљи","плело","плеву","петне","пођох","појао","плела","свита","плеви","пошле","свити","свите","свиту","поучи","појац","појем","свише","плеле","почуј","свица","свице","почек","почех","плени","посте","пости","посра","појиш","сетве","свија","пешак","пешка","перју","свије","поспу","плеху","сетва","сеиза","перце","појми","поспи","седој","седом","поспе","појме","плену","пецне","петих","посух","петим","петлу","пецај","пецка","петли","потес","пецну","седох","плете","плету","песмо","плеха","сетви","посут","печеш","свили","посуо","свода","пицин","пиљим","подно","плоди","подну","питку","питке","питка","подој","секом","подом","питко","севну","подви","пицом","сврше","пичим","подбо","пиљар","подна","севши","подни","подле","подлу","сеник","поени","плода","писне","плоде","писни","поему","пиљио","писар","писан","плићу","писку","писка","поену","секло","седаш","питах","седао","питан","секли","поеме","поеми","писну","поема","секле","секла","подај","секту","плуту","погло","пишти","севао","поган","пиште","пишом","пишну","севам","селен","погне","погни","повик","повио","пових","побој","секти","севај","севаш","повој","пијац","севне","пишче","севап","повиј","подам","свуку","селфи","свуче","пички","погну","плота","подао","подаш","пичио","пичић","пичиш","плоду","селио","плусу","плуса","свући","пишке","плуте","пишић","пијук","плоту","пишах","плугу","селом","плуга","писак","своде","сеизу","сеоби","сеобе","пиону","полну","сеобу","помео","помна","помне","пламу","пипао","пипам","пипак","пипах","сеоба","полки","пипав","полне","полно","седеф","полку","плама","полна","сепси","сепсу","помпи","плими","помпе","пинте","серва","пиком","пласт","пинта","пилад","серво","сеоцу","пиона","помни","плане","пионе","помну","помпа","пинти","сепсе","пинту","сепса","помор","сенчи","плиће","пирка","пирит","позни","плића","пиљиш","поима","покај","плишу","позну","позом","поете","поети","поето","пирог","плићи","поета","поету","позер","позна","пирне","пожње","позва","пирну","сеико","полип","полис","покри","сенфу","пипку","полих","пипаш","полка","своду","пипке","пипка","полиј","пирио","плиша","пићеш","сеном","своти","своте","плину","покла","покоп","пипну","пиреа","резао","резан","резне","ругло","резак","режиш","руглу","режњу","режња","резну","ругам","ругао","ренде","релеј","рекну","резон","резом","рекне","резус","режеш","ревно","ревни","рудно","рудну","ревер","ребру","ружем","ребус","рудом","рудни","режао","редут","режем","режањ","редни","рудна","рудне","росне","росни","репно","росно","росом","ротор","росну","репни","репну","реска","ресет","реске","ропће","ропћу","росио","ропћи","рерна","репне","ренте","рубом","ренту","ренти","рента","рубљи","реноа","реноу","реном","репат","ројем","ројио","рошав","репна","ртове","рубац","рубне","ртови","ребну","рацио","рафом","рачве","рачва","ратуј","рулни","рауба","рачви","рулне","рашку","рулна","рашта","рашки","рачић","рачву","рашио","рачје","рулно","румбе","расле","расна","румба","расед","румен","румом","румбу","расан","расни","распу","рулну","расут","расуо","распе","расну","расно","расом","расол","рвати","рвало","ружиш","рвача","рвали","рањав","рајху","рвале","рвала","ружио","рваћу","рвању","рвући","рвемо","ружим","рвачу","рвачи","ружин","рвања","рајом","рађам","рашће","рађао","рађан","рашљи","рашчу","рулао","рулам","рашље","руину","ружом","руина","рајем","рађен","рађај","рађаш","руино","руине","руини","реско","ритао","рисји","риташ","рокни","рисје","ринта","рикшу","рокну","роком","ритај","ричем","ритну","ричеш","родне","ритне","рокер","рокне","родну","родом","рикши","ризле","ролат","ризлу","ризли","ридао","ридам","ролка","ридаш","рикао","рокћу","рокће","рикше","риком","рикне","рикна","рикну","рикни","рогом","родан","родеа","родин","робна","робни","родеу","рогат","ровом","ровци","роваш","ровит","робља","робну","робно","робуј","робов","родих","риђог","риђих","риђој","риђом","риђим","риђег","риђан","родна","риђем","ријем","рмбах","рмбао","рмбај","рмбаш","риљај","риљам","ријеш","риљаш","риљао","ригао","речцу","решив","рониш","речну","речне","речна","речно","речни","ронио","решоу","решои","ређам","ромор","роним","ронин","реших","решое","решоа","речит","ропца","ропце","реуме","реума","ропци","ропцу","реску","ресто","ресор","ропац","рецку","рецки","речем","рецну","рецке","реуму","реуми","рецка","рецељ","рзања","рзати","рзање","ролна","рзало","ролни","ролну","ролне","рзали","рзању","ролку","рибљу","ролке","ролки","рибај","рибао","рибам","рибаш","рибах","ролое","ромбу","ређег","ромба","ређем","ређај","ређао","ређан","ређаш","ређах","ређим","рзала","ржући","ролци","рзале","рељеф","ређом","ређих","рејон","ређој","садњи","профо","прочу","профу","садњу","профа","проту","сажео","профе","садње","проји","садим","сагох","проју","проја","садња","садио","садиш","сажет","сазва","проли","пропи","пропе","прозу","сазда","сазив","прози","прозе","проса","сажму","проти","прото","сажме","проте","просо","просе","прота","просу","прућу","прући","прхну","прхне","пруће","савих","пртио","прућа","прута","прцам","пршти","сабра","сабља","сабље","прчка","сабљу","сабљи","прште","пртим","прска","прсиш","прсле","прсла","прсио","сагну","прсао","сагне","прсли","прсни","сагао","прсну","прсно","сагла","прсне","прсло","сагле","сагли","проза","преке","прека","преку","преки","преза","преже","преду","прежу","прежи","прела","салце","прене","салто","салца","самби","самбу","прели","самбе","преде","самцу","санка","самца","праћу","свећи","свиде","праље","праљу","праљи","пргав","прдну","прдни","преви","преби","прдне","самур","прдео","прдиш","прдим","сакое","сакои","сакат","сакеа","припи","салаш","приор","сазру","пркос","сазре","проже","пробо","сазри","прији","причо","прију","пријо","прида","преча","пресу","преси","прену","прени","пресе","преса","пречу","приби","пржиш","приви","салви","пржио","салву","салом","пржим","пржен","прљам","пућим","пуњен","пућиш","пућио","пушци","рушио","пучем","рушен","рушим","пућка","ручке","ручки","пљуну","пљуне","пљуге","пчели","пућну","пљуга","пчелу","пуцњу","путна","путић","путно","путни","путир","пусту","рујне","путен","путар","путну","пуцка","пуфну","пуцну","пуцне","пуфно","рушиш","пуфна","пуфни","пуфне","разно","разли","рупче","разну","разви","рутом","разан","разби","рутав","ракље","ранце","ранца","расад","ранци","ранка","рамом","ракљу","раниш","руном","рухом","родос","рипња","ромул","ромеу","рашка","ражањ","рашке","ручај","ражњу","ражња","рагом","румун","ртњем","равну","русом","пурња","псују","рђају","птиче","рђали","псиће","рђању","рђања","рђање","птића","пудлу","пудла","пужеш","пужем","пувао","птиће","пубом","птићу","психи","псета","псалм","сабор","псету","прљио","прљао","прљан","прљај","прљаш","псина","сабиј","психе","сабио","сабих","психа","псини","псине","псину","псино","пунчу","пумом","пулсу","пулпу","пумин","рђави","пунђи","рујни","пупку","пупка","рујну","пунђу","руљом","ршуму","пулпи","рђаву","рђала","пузиш","рђаво","пузио","пузао","пужом","пузим","рђале","пузла","пукој","пулпе","пулпа","пуком","пуких","пуким","пуког","пукле","сетну","фреон","фраку","фризу","фрејм","фрака","фотон","фотки","фрази","фотос","фрика","фрула","фрули","фруле","фркћу","фркну","фркне","фркће","фрком","фосну","флору","флори","флото","флоре","улцињ","узбек","флопи","урала","флуор","форду","фонта","фосни","фолна","фокер","фоком","фокин","фрулу","халву","хаику","хамам","халом","хабом","фрома","фреју","хабов","фрому","ханом","харфи","харфе","хауба","хаски","харфа","харао","хапсу","хараш","фрејо","футон","фурај","фуфом","фураш","фукса","фрфља","фурао","фуксо","фућка","фобос","финци","фреји","финце","фауст","финца","финац","уштви","уштве","ушоњу","ушоње","ушоња","ушоњо","ушоњи","уштво","ујаке","уђоше","ујаци","ујаха","ушћем","уштву","ушљив","ушуња","ушној","ушити","ушину","ушице","ушица","ушине","ушива","ушепа","ушили","ушила","ушици","ушних","ушним","ушном","ушног","ушићу","ушије","ушицу","ушиће","ушиљи","ујаше","уњкао","уњкав","ућари","ућаре","уњиха","уљног","уљних","уљној","уљном","ућеба","ужица","удбом","ужицу","ужице","удбин","ућуте","ућута","угаре","угара","уљним","ујеше","ујело","ујнин","ујкин","ујели","ујашу","ујеле","уједу","ујном","уљаст","уљану","уљима","уљезу","уљано","уљана","ујури","уљани","уљане","хучан","хусар","хучна","хучао","хунту","хумци","хумус","хунти","хунте","хучне","хагом","хуљом","хаила","хазар","хујао","хучно","хучни","хушка","хучну","хумом","хукне","хукао","хуком","хукну","хтењу","хтеше","хтеде","хукће","хумку","хумки","хуман","хулим","хукћу","хумак","хулиш","хаиле","цвату","цвало","цвике","цвете","цвали","царем","цвале","царом","цвиле","цевну","цевку","цегер","цевчи","цевки","цврчи","цврче","цевке","цевка","царев","хајне","хајду","хегел","хвару","хајда","хамас","халеј","хатор","хасом","хесеа","цакле","цакан","цакум","цакли","хрват","хобит","хеџри","хорус","хоншу","хидру","хидри","химне","химен","хидре","хељде","хељда","хељду","хељди","химни","хитре","хитра","хитру","хитри","хиташ","хиром","хипик","хитар","хитао","херца","хајао","хашку","хајка","хајем","хашко","хашка","хауби","хашки","хашке","хајке","хвати","хвалу","хекла","хвату","хаљом","хајку","хајки","хајци","хајте","хитња","хрлио","хрлим","хрома","хрлиш","хркну","хоџин","хором","хркао","хриди","хроме","хрчке","хрчем","хрчци","хрчку","хртом","хромо","хроми","хртов","хрому","хорду","хмеља","хлора","ходач","хладу","хицем","хитњу","хладе","хлада","ходим","хонду","хонди","хорди","хорда","хонде","ходиш","ходио","холом","ходом","ушату","упаса","упари","упаши","упаше","упаре","упаде","упаво","упаду","упади","упашу","упили","упиле","упире","упило","упила","упере","упело","упече","упеца","уочиш","унету","унето","унеће","унеше","унете","унело","унеле","унета","унесу","унећу","уочен","унуки","уочих","уочим","уносу","унизи","унизе","уноса","унији","упиру","упузи","упуза","упуту","упута","упрља","упрта","упрпи","упрто","упрти","урбан","урања","уреже","уреде","урана","уралу","урали","урами","ураме","упрло","упиље","упију","упиње","упиљи","упије","упити","уписа","упишу","упиша","упињу","упрла","упрже","упрли","упрле","упреш","уплив","упиће","упрех","упрем","умаже","улудо","умаку","умаза","улуби","улова","улићу","уложе","улову","умаче","умеле","умеде","умело","умели","умаћи","умачу","умачи","умањи","умање","улиће","улете","улепи","улеће","улењи","улежу","уларе","улара","улеже","улари","улећи","улише","улити","улију","улије","улило","улила","улећу","улили","улиле","умесе","умота","умору","умочи","умоче","уморе","умном","умног","умоли","умној","умрех","умује","умуче","умују","умути","умрси","умрлу","умуте","умрља","умних","умила","умива","умили","умиле","умећу","умеси","умећа","умеци","умило","умиће","умију","умним","умићу","умије","умину","умине","умише","умити","утоку","утоке","утоли","утоле","утока","уткао","уткан","утови","утове","утоне","утрем","утоци","утрле","утрла","утори","утону","утони","утопи","утопе","утиша","утање","утају","утеге","утањи","утаји","утапа","утажи","утежу","утећи","утеше","утиру","утире","утече","утеси","утера","утехо","утехи","утрли","учило","училе","учино","учина","учену","уцрта","учено","учене","учину","ушате","ушати","учмао","учиће","учита","учкур","учићу","уцени","утрти","утрте","утрча","утрто","утрта","утрне","утрло","утрпа","утрну","утрче","утуче","уходу","уходо","утуца","утрља","утрчи","утуре","утуве","уручи","уруче","уруши","уруше","уроци","урони","уроне","уроту","уроте","усаде","уселе","усела","усеру","усере","усеку","усами","усади","усеке","усека","урола","урећи","урече","урлам","урину","урези","урежу","урежи","урезе","уреза","урлао","урока","уроди","уроку","уроке","уроде","урлај","урлаш","урода","урлик","усеца","устах","усрче","усуде","усуда","успну","усоли","усоле","успне","усоси","усуду","усхте","усуту","утаже","утаба","усуто","усула","усука","усути","усули","уснуо","уских","усија","уском","уског","усиса","усече","усеци","усири","усећи","уској","усниш","усних","усној","усном","уснио","уснем","усмен","усним","усник","цедим","шацну","шацне","шајка","шашом","шахту","шахом","шахти","шахте","шајке","шваља","швабу","шваљи","шваље","швабо","шајку","шајки","шваби","шатру","шарке","шарка","шарку","шарки","шаржу","шараш","шарац","шарен","шарај","шарму","шатре","шатра","шатро","шатри","шарцу","шаром","шаров","шарци","шарца","шваљу","шерпу","шерпи","шкрга","шепаш","шепао","шерет","шкргу","шкуне","шкуна","шкуну","шкуни","шкрту","шкрте","шкрта","шкрто","шкрти","шепам","шевим","шевар","шевом","шевин","шврћо","швеца","шверц","шврћи","шврља","шегом","шеним","шемом","шепав","шенуо","шеиче","шеике","шеика","шеици","шеику","џепну","џепно","џепом","џепне","џезом","џезву","џибре","џинса","џином","џипов","џинсу","џинов","џибру","џибри","џилит","џигља","џезви","џадом","џекил","џакче","џаком","чилеу","чешку","чечен","чилеа","чејен","џанки","џарну","џарне","џарка","џарам","џапао","џараш","џарао","џипом","шапка","шанцу","шапки","шапке","шанци","шануо","шанер","шанце","шанца","шапку","шарам","шапћу","шарао","шаран","шапће","шапни","шапне","шапом","шапну","џудоа","џоњај","џукца","џудоу","џомбу","џомба","џогер","џомби","џомбе","џукце","шавом","џунку","шалта","шалон","џунки","џукцу","шупом","шупаљ","шупљи","шунки","шумор","шумну","шунду","шунда","шупљу","шушну","шушне","шушти","шуште","шушки","шутну","шурио","шушањ","шутом","шумно","штуре","штура","штуро","штури","штули","штуку","штуки","штуру","шумна","шумио","шумни","шумне","шумео","шугав","штуца","шумар","шуман","шушња","шапца","шабац","шапцу","шћапи","шљуки","шљуке","шћапе","шљуку","шивин","шопен","шкоту","шпера","шошон","шкоти","шилер","шивом","шкоте","шкота","шљука","шљаге","шљага","шљагу","шљаги","шчепа","шуњам","шушњу","шуњај","шуњао","шљака","шљема","шљаци","шљиву","шљиви","шљапи","шљаку","шљаке","шљаму","шљама","шоком","шодер","шопиш","шопав","шогун","шналу","шнали","шнура","шнира","шорам","шорца","шортс","шојки","шорцу","шором","шораш","шорао","шорка","шорај","шнале","шлепу","шлепа","шлица","шлифа","шлему","шлауф","шлагу","шлема","шлајм","шлицу","шмрче","шмрца","шнала","шмрчу","шмрку","шлогу","шлога","шмрка","шмеку","шољом","штиву","штива","штиту","штипа","штеку","штаку","штаки","штеде","штаци","штиха","штрчи","штрче","штуке","штука","штрца","штоса","штоку","штофу","штофа","штака","шпилу","шпила","шпице","шпица","шпајз","шпага","шоњом","шпагу","шпаге","шпици","шрафу","шрафа","штави","штаве","шпиљу","шпиља","шпицу","шпиљи","шпиље","чегру","часом","часке","чаури","часте","часка","чарку","чарки","часио","чарци","чауша","чачну","чачни","чајић","чачне","чауши","чауше","чачка","чаушу","чарке","чанак","чамов","чанке","чанка","чамиш","чамим","чалму","чамих","чамио","чанку","чапљо","чапљи","чарка","чапљу","чанче","чанци","чапну","челни","челне","челну","челно","челна","чезну","чежњу","чекрк","чеках","челом","чепио","чеону","чепом","чепић","чеоно","чеона","чемер","чеони","чеоне","чежњи","чвору","чвргу","чврге","чвари","чајни","чајне","чајну","чајно","чврље","чедом","чедну","чежње","чежња","чедно","чедна","чедан","чедни","чедне","црпну","црпно","цртач","цртан","црпни","црпло","црпли","црпне","црпна","цртај","црњих","црњим","црњој","црњом","црњем","цртом","цртаћ","црњег","црњак","црпле","цепач","цепао","цепај","цепаш","цепам","цедиш","цедио","центе","ценка","цепин","црпио","црпим","црпла","црпиш","црпео","црнче","црнцу","црпем","црнчи","цугам","чавка","чабру","чавки","чавке","чабра","циган","цером","чабар","цирих","чавку","чалма","чакљу","чалми","чалме","чакљи","чакру","чакри","чакље","чакља","церес","цупне","цупка","цурео","цупну","цугом","цугне","цугао","цугну","цугни","цурио","цуцлу","цуцли","цуњаш","цуњао","цуцле","цурне","цурка","цурну","чукам","чудио","чуках","чукао","чувши","чојом","чувах","чукаш","чулну","чулно","чукаљ","чукај","чукну","чукне","чињен","чињах","чкиљи","чкиље","чијом","чијих","чишћу","чмара","чопер","чокот","чорби","чорбе","чокањ","чмару","човом","човин","чулом","чучњу","чујне","чујна","чучња","чучне","чучиш","чучну","чучни","чујни","чачак","чуњић","чегра","чачку","чуљиш","чујну","чујно","чуљио","чуљим","чучим","чупам","чупав","чупао","чупан","чунци","чунић","чунак","чуном","чунка","чупаш","чутих","чусте","чучањ","чучао","чусмо","чупка","чупај","чупну","чупне","чешљу","чешља","чешњу","чешња","чешке","чешка","чешко","чешки","чигри","чигре","чизми","чигру","чигра","чешћу","чешћи","чибук","чешеш","чесму","чесми","черек","чергу","черги","чести","чешао","четом","чешем","чешањ","четни","четки","честу","четне","четна","чикам","читки","читке","чипсу","чипом","чиром","читко","чичом","чичку","чичци","чичке","читку","чичка","чичин","чипку","чилим","чилео","чилиш","чилих","чилаш","чикаш","чикао","чиком","чикин","чилог","чиоду","чипки","чиоди","чилој","чилом","улажу","стегу","стеги","стежу","стежи","стањи","стаја","стаће","стеле","стече","степу","стењи","стења","степи","стелу","стели","сташе","срљаш","срљао","срџба","срљај","срљам","срчка","срчеш","срчом","срчку","срџбе","стапа","стажу","стасу","стаса","стажа","срџбу","срџби","стаду","стаде","стењу","стрпа","стрму","струг","стрпе","стрмо","стрма","стрка","стрми","стрме","стрци","сувих","стуче","сувља","сувој","стуца","стубу","стрча","ступе","студи","стрже","стиша","стичу","стоик","стогу","стичи","стиду","стиде","стиху","стиха","стона","стоту","стото","стоци","стопи","стону","стоте","стота","сплео","спису","сплит","сплет","списа","спида","сперу","спира","спиду","спона","спрао","спран","спрег","спрда","спрам","спони","споне","споту","спону","спере","сојке","сојка","сољен","сојом","сојин","сошки","сошке","сојем","сошку","спаде","спати","спари","спеву","спева","спаре","спази","спазе","спалу","спало","спрже","срком","сркну","срнин","срмом","сркни","сричу","сриче","сркне","сркао","срном","сручи","сруче","срчем","срчан","српом","сроди","сроде","срочи","сроза","срете","сраме","срало","сраће","сраму","срали","спуст","спруд","срале","срала","сраћу","среза","срежу","срело","срезу","среже","срдио","срдим","срдиш","срдит","степо","суеца","судан","срему","србин","срема","србљи","суецу","табуе","табуа","табуу","табуи","табор","табак","сухој","табао","табан","сојуз","садом","саган","сезан","саљут","савом","сјебу","сјашу","сјури","сјуре","сеула","смерш","скити","сопот","солун","ските","сизиф","сеулу","сиска","синај","табљи","тапшу","тапше","таста","тасом","тапну","тапир","тапет","тапне","тапка","тасту","таште","тачци","ташто","ташти","тацну","татре","татко","тацне","тацна","таоче","такох","такну","таксу","такса","такни","такле","такла","такло","такли","такту","танин","тангу","таоцу","танто","танги","талон","талка","танад","сукну","сукно","сукља","сукне","сузом","сузну","сукна","сукао","сумом","супом","сунча","сурим","сурва","сунух","сунеш","сунем","сунуо","сунит","сузно","судио","судбу","сужањ","сувљу","сужња","сузиш","сузио","сузим","сужње","сузби","сужњу","сурих","суљне","суљам","сфери","суџук","суђен","сушту","сушто","схема","сјати","сјате","сјаше","сјаха","сјало","схеми","схеме","сјале","схему","сушта","сурој","суром","сусам","сурог","сурле","сурла","сурлу","сурли","сушач","сушно","сушни","сушом","сушну","сушне","сушим","сушен","сушна","сушио","сошка","скију","скији","скоре","склад","скија","скици","скиту","скичи","скиче","скори","скрши","скрше","скута","скрља","скрпи","скоча","скору","скрпе","скроб","скита","скалу","сићом","скаја","скапа","сињих","сијај","сијао","сињим","сињег","скају","скечу","скеча","скиде","скења","скена","скелу","скели","скуте","слајд","слађу","слаће","слању","слађа","слате","слата","слаше","слато","слаћу","слеме","слезу","слету","слепу","слеза","следу","слева","слежу","слеже","сласт","скује","скушу","скуће","скују","скуши","скуца","скути","скуше","скуша","скући","слану","слами","слапу","слапа","слало","слади","слага","слале","слажи","сигма","сивљи","сидру","сидом","сивље","сивца","сивој","сивља","сивцу","сижеа","сикћи","сикће","силав","сикћу","сикну","сижеи","сижее","сикне","сижеу","сивих","сечом","сечен","сејан","сешће","сецну","сефом","сетом","сецне","сецка","сејао","сећај","сећах","сивим","сивац","сењак","сејем","сејте","сејеш","силим","сисом","сисаш","ситих","ситим","сисар","сирот","сирац","сисам","сисак","ситог","сишлу","сишло","сијам","сиђох","сишле","ситој","ситом","сицом","сипњу","симса","силуј","симсу","силос","силна","силио","силну","силни","синод","сипња","сипом","сипњи","сипње","сипио","синус","синуо","сипан","синци","снена","снело","снени","снене","снели","снежи","снева","снеле","снела","снено","снизи","снизе","снило","снила","снива","снесе","снену","снесу","снеси","снају","снаха","снахо","снахи","снаси","смуши","смучи","снаго","смуђа","снаху","снаје","снађу","снајо","снаји","снашу","снаше","снаша","снашо","снаши","сноба","сонет","сонди","сопћу","сопће","сомот","солом","солиш","сомом","сомић","сорти","сочан","софру","сочну","сочни","софре","сорту","сорто","софра","софом","солио","снују","снује","собне","собар","сносе","снобу","снобе","снопу","снопа","собни","сокне","солим","солар","сокак","собну","собно","совом","совин","слуго","слуги","слуди","слуде","слоју","слому","слози","слоши","слону","слупа","смака","смаза","смаче","смаку","смажу","слуху","слуте","смажи","смаже","слогу","слила","слико","слили","слиле","слиже","слећу","слећи","сливу","слива","слило","слову","слију","слије","слину","слини","слише","слити","смаћи","смрви","смрве","смрзо","смрда","смоћи","смоли","смоле","смота","смолу","смрсе","смуте","смука","смуца","смути","смува","смрча","смрси","смрша","смрче","сможе","смеси","смесе","смету","смесу","смелу","смерч","смеон","смеху","смичу","смичи","смогу","смога","смиче","смеше","смеша","смион","смешу","ташту","убада","убаво","убери","убере","убава","ћушку","ћушки","ћушну","ћушне","уберу","убого","убоги","убоду","убогу","убоге","убире","убира","убога","убиру","ћушке","ћурак","ћупом","ћурки","ћупић","ћувик","ћубом","ћурко","ћуфти","ћуфта","ћушка","ћуфту","ћутњу","ћутња","ћутке","ћутњи","ћутње","уболе","увену","увене","увећа","увету","увелу","увезу","увезе","увело","увеле","увида","увило","увили","увиру","увире","увиле","увиди","увиде","увила","увиду","увеза","убрах","убрао","убрља","убрус","убран","убоја","уболо","убоји","убоје","убуђа","увеже","уведу","увежу","увежи","уваља","уважи","уваже","увалу","увала","тирол","тимок","титом","титов","тивту","тесле","темзу","теслу","тесли","тодор","трсту","трста","тузле","тузла","троју","тоске","торов","троји","тотом","темзи","тушта","тучом","туђио","туђин","тучка","тучак","туцај","тучен","тучан","туђом","тезеј","твена","темзе","темза","тацит","туњав","тасос","тарас","тузли","ћопам","ћопав","ћопаш","ћопао","ћифта","ћефом","ћефну","ћором","ћорну","ћосав","ћорци","ћорку","ћорка","ћорак","ћорки","ћорке","ћефне","ћалов","ћалац","ћапио","ћапим","ћосић","тулуз","тузлу","турке","тунис","ћапне","ћелом","ћесар","ћемер","ћаћин","ћасом","ћаска","ћатом","ћатин","уздаш","уздао","уздом","уздај","узгон","узано","узани","узану","узете","узлет","узицу","узнео","узеше","узету","узица","узида","ужасе","ужари","ужасу","ужаре","удуби","удубе","ужара","уждио","ужици","ужини","узана","узама","ужине","ужету","ужеле","уживи","уживе","узора","укоре","укора","укору","укори","укопа","укипи","укину","укока","уклео","укосе","укусе","укува","укуца","укуси","украј","укосо","укоси","укочи","укоче","укиде","указа","укажу","укази","указе","укажи","узори","узоре","уинат","узору","указу","укења","укеба","укида","укива","укање","укаче","укаса","укаља","укачи","угега","угађа","угине","угиба","угану","уврћу","уврће","угази","угазе","угину","угони","угоди","угоји","угоје","угоде","угнеш","углас","угнут","угнуо","уврти","увиће","увију","увода","увићу","увије","увише","увити","увија","увиђа","уводе","уврни","уврне","уврте","уврну","увозу","увоза","уводу","увози","увозе","угреј","удени","удене","удесе","удену","уделу","удбаш","удаће","удели","уделе","удеси","удишу","удиши","удоми","удову","удише","удесу","удици","удаље","удаве","удава","удаду","удаде","угљом","угуше","угура","угљем","угљар","удале","удаху","удахе","удаји","удаше","удаха","удане","удамо","удату","удато","туцач","тихим","титра","тихој","тихих","титлу","тираж","типла","титла","тисов","тицао","тиште","тишој","тињао","тишти","тишом","тишем","тишег","тиших","тишим","тиком","тешим","тешеш","тешиш","тешио","тешен","течну","тешем","течом","тешња","тикви","тикву","тикво","тиква","тешњи","тешње","тигру","тешњу","ткала","тобож","тмину","тогом","товио","тмини","тлачи","тлаче","тмине","тмина","тонац","топиш","топио","топуз","топот","топим","тонуо","тонеш","топаз","тонус","ткању","ткани","ткане","ткану","ткана","ткали","ткале","ткамо","ткало","ткати","ткаља","ткање","ткања","ткају","ткаче","ткача","ткачу","ткачи","тегет","тврђу","тегом","твору","твори","тежег","тежња","тежој","тежњи","тежње","тежом","тежио","тежем","тежиш","тежих","творе","тајим","тајгу","тајца","тајио","тајги","тајац","тајан","тајге","тајга","тајцу","тањој","тањом","твора","твида","тањих","тањем","тањег","тањио","тањим","тежњу","термо","терах","тесао","тесан","теран","тепах","тепао","тепај","тепаш","тесар","течан","тетом","течна","течин","тесну","тесна","тесач","тесне","тепам","текло","текли","телал","телад","текле","тезги","тезга","текао","тезом","темпа","теном","тенку","тепав","тенду","тенда","темпу","тенди","тенде","тршав","трчка","трљао","трљам","трућа","трују","труту","труње","труња","трњак","тукле","тужен","тукох","тукло","тугуј","трћен","трњем","тубус","тубом","трупи","трска","трсио","трску","трски","трпњу","трпаш","трпах","трпње","трпај","трсци","труна","трулу","труну","труни","тртља","тртио","тртим","тртка","тртиш","тулиш","тутни","тутне","тутун","тутну","тутка","турих","турио","туром","туриш","тутња","туфну","туфни","туцах","туцан","тутњи","тутње","туфна","тутњу","турим","тупиш","тупих","тупко","тупка","тупио","тумба","тумбе","тупну","тупљу","тупљи","турај","тураш","тупље","тупом","тупог","тупља","тупој","тргне","тргло","тргом","тргну","тргли","тргао","траће","тргле","тргла","тргох","трења","трефа","трењу","трење","треми","требе","тргуј","треме","треби","трача","тосту","торус","точен","тотем","торзу","топће","топче","торза","топћу","точим","траси","трасу","траса","тракт","точио","трапу","трапа","тржне","трнци","трнце","тролу","трнуо","тркну","тркни","трном","трнов","трома","трпам","тропа","трпао","трпан","трому","троме","тромб","тромо","троми","тркне","трико","трзну","трима","трику","трзне","трзам","трзав","трзаш","трзао","трипа","тркао","тркам","тркај","тркаш","трију","трица","трипу","тришу","трице","пеном","бољци","бољку","брала","брало","брали","бољар","бојну","бољка","бољки","брано","брвна","брбот","брвно","брдом","брвну","брацу","брати","брања","брању","босом","босог","бости","боцне","боцка","борцу","бором","боршч","босих","босим","боцни","бојем","бојах","бојен","бојна","бојио","бочна","боцну","бочне","бојар","бочну","брису","бриса","брица","брицу","брице","брзој","брзај","бриде","бриду","бриди","бришу","бркаш","бркај","броде","брком","бриџа","брију","бриџу","бркао","бркам","бреца","брест","бреша","бреши","бреше","брегу","брезу","брези","брешу","бржој","брзам","брзаш","брзао","бржем","бржег","бржим","бржом","бржих","блеса","блену","блесе","блесу","блеси","блате","блажу","блати","блене","бледу","блефа","блеји","блеје","ближу","блица","близа","блефу","блеђу","бифеи","бифеа","бифеу","бијен","бичуј","бедем","бегом","бисти","битну","бисту","бијте","биљур","биљну","биљци","блаже","блажа","биљки","биљем","биљна","биљно","биљне","боком","боинг","бокор","болео","боеме","боема","боеми","божур","боему","борне","борна","борни","боров","борну","боном","болну","борик","борић","борих","блузи","блуду","блузо","бодар","бовом","блога","блицу","блуда","блуди","блуде","бодем","бодру","бодро","бодља","бодљу","бодљи","бодом","бодеш","бодра","бодри","бодре","брома","вижља","видру","визир","визне","визна","видне","видну","видри","видра","визни","виком","викну","вилин","винга","винар","визну","визно","визом","викни","викне","вешца","вешту","вешце","вешцу","вешци","вешан","вешам","вешао","веште","вешаш","вешче","видан","већма","видар","видна","видаш","вејао","вешћу","већам","већаш","већао","витло","витла","витлу","вицем","вихор","витке","витка","витки","витку","витко","вичан","вишом","вишку","вишњу","вишњи","вичне","вична","вични","вичну","вично","виоле","винца","виоли","вираж","виолу","винеш","винем","винил","винуо","винов","вирим","виром","виска","витак","виске","вириш","вирио","вирка","вирну","вирне","бубре","бубом","бубри","бубњи","бубња","бубин","бубаш","бубна","бубну","бубне","буљом","бућну","буџиш","бјуик","буџом","буљук","буљон","бућка","бућне","бућку","бруку","бруке","бруси","бруто","брусу","броша","брому","брошу","брсти","брсте","бруха","брљив","брљаш","брљом","бубао","бубам","брује","бруци","брчић","брљао","брчка","варки","варке","варку","варци","варај","варах","варим","вариш","варио","ватам","ветре","веспу","ветри","вечит","веслу","ватом","веспа","веспи","веспе","ваган","вагам","вагао","важим","вагом","бљуну","бљуне","бљује","вабиш","бљују","важио","вапим","валов","вапио","варан","вапиш","важиш","вазда","вакуф","вазом","бегов","морзе","дањем","сачом","колао","бушиш","везле","аваре","авара","авари","авељу","авеља","авала","абвер","авале","авалу","авали","каром","латиш","шишаш","шизео","лепин","буним","бечку","сахну","кашом","лављу","пасли","мањој","фарби","цесар","лавру","агава","авану","агаве","агаву","агави","аберу","абери","авакс","авани","авана","агама","апели","апеле","апелу","аргон","апоен","агапе","агина","агини","агине","алфом","алфин","амону","амору","амора","авиву","авива","аврам","азија","агате","амуру","арада","апола","арапе","абере","абера","апаче","анино","апачу","апису","аписа","капне","амова","бељим","обаде","сведу","бунди","овчег","маршу","свале","мажем","саћем","зевса","парну","амиџу","букву","жуане","охрид","шибне","биков","даљем","грков","црнку","гргур","деком","зјапи","одеса","вршну","бубњу","бушна","шизио","задре","лакшу","цесни","латио","мајем","ваљај","црнио","ленон","гујом","дидро","зарже","делам","бутом","љутом","зрило","кмече","кмета","вучом","бујао","њиово","драча","ариша","басма","басен","басме","басми","барио","барки","барци","барок","басне","бауке","баука","бауку","бауља","бауци","басну","басни","басом","батом","бапне","банчи","бапну","бапце","бапца","банов","банеш","бануо","банче","банух","бапци","баржи","барим","баржу","барда","бараж","барду","барен","барел","бдети","бдело","бдења","бдила","бдењу","бањом","бањам","бдела","бдели","бделе","бдили","бебац","бдију","бегам","бегаш","бегао","бдимо","бдило","бдите","бдије","бдити","башка","бачву","бајао","бацан","бахат","бацил","бачва","бацих","бајем","бајса","бајом","бајсу","бајте","бајта","бајна","бајеш","бајне","бајну","бајни","атаци","атару","атест","атове","атова","атаку","асуру","атара","атари","атаре","атови","ахата","ашове","ашова","атоли","атола","атолу","ауром","атому","ароми","арому","арсен","арије","ариши","арији","арком","арију","арчио","астми","асура","асури","асуре","асова","асове","астал","асови","базди","базну","базно","базам","бадњу","базао","базде","базар","бакру","балиш","балио","балом","банер","банем","бакће","бакљи","бакћу","балим","балав","бабац","бабље","бабља","ашову","ајвар","ајнцу","ајнца","бабљи","багру","багро","бадњи","бадња","бабљу","багра","багри","багре","дичан","дирну","дичим","дичиш","дичио","дирки","дирке","дирку","дирни","дирне","дична","длета","длаци","добих","длету","дични","дичне","дично","дињом","дичну","дилду","дизну","димим","димна","димио","дизан","дигох","дизач","дизне","дизна","димне","диоду","диоди","диран","дирка","дирек","димну","димни","дином","диоде","диода","доуче","досут","доучи","дођош","дочуо","допру","допро","дорат","досуо","доспу","дојен","доњом","доњих","дражу","драле","драла","дојка","дојим","дојки","дојци","дојку","догму","догми","догод","дозва","додах","добош","добом","довоз","догме","догма","доком","домен","домак","донде","донех","донет","долет","докон","долио","долиј","долих","гумна","гулиш","гумно","гумом","гумну","гукну","гукни","гулио","гулим","гунђа","гуруе","гуруа","гуруи","гусан","гуруу","гуран","гурав","гурка","гурну","гурке","грђој","грђом","губав","губом","губер","грђег","грчом","грђем","грђих","грђим","гудим","гузно","гузни","гузну","гукне","гукао","гузио","гузим","гузиш","гузне","гузна","датим","дасом","дељао","дељен","дељем","дануо","данку","даруј","даско","даски","дељеш","дивов","диваљ","дивом","дигло","дигле","дењак","дељив","дењка","дењци","дењку","гутао","гутам","гутач","гутај","гуташ","гуско","гуски","гусле","густу","гутну","далај","гушен","дамар","данка","дамин","гуцни","гуцне","гуцну","гушао","гучем","драли","дукат","дужој","дукса","думао","дуксу","дужих","дужем","дужне","дужом","дужну","дунем","дупљи","дупље","дупљу","дурио","дурим","дунуо","дунеш","дунух","дупља","дупке","дугин","дудла","дудом","дудов","дубим","дрљај","дубио","дувар","дубљу","дудук","дуети","дуете","дуету","дужду","дужда","дуеле","дуела","дуета","дуелу","ђипих","ђипио","ђипиш","ђоном","ђоком","ђипао","ђипам","ђипаш","ђипим","ђипај","ђубри","еболи","еболе","еболу","ђулад","ђувеч","ђуска","ебола","ђуску","ђурђа","ђурађ","ђаком","ђауре","ђилас","дуњом","ђорђа","ђорђу","ђорђе","ђаури","ђемом","ђачку","ђерму","ђерма","дречи","дреци","дреше","држак","дреши","дрема","дреку","дрена","дресу","дреса","држан","дрмам","дркош","дрмао","дрмаш","дрмах","дрзне","држах","дрзну","дркај","дркан","драћу","драће","дрвар","дрвна","драло","драња","дрању","драње","дрвне","дрвља","дрвљу","дреке","дрека","дрвну","дрвца","дрвом","дрхћу","дрчна","дрчни","дрчне","дрску","друма","дрхћи","дрхће","дрчно","дршћу","дршћи","дрљав","дрљао","дрљам","дршке","дрчну","дршки","дршће","дршци","дроби","дробе","дрозд","дроце","дроца","дрмне","дрмај","дрмну","дроба","дрнда","дроцо","дрпио","дрпим","дрпне","дрске","дрпну","дрпам","дрољи","дрпао","дрпеж","дрпај","грчко","врсну","врсно","вртео","гасна","вртна","врпци","врлој","гасне","гатај","гаташ","гацам","гацаш","гацао","гасно","гасни","гасну","гатао","гатам","врењу","врзле","врзла","врежа","вреву","вреже","вресу","вреса","врзло","врлим","врлих","врлом","врлог","врила","врзма","вриле","врити","врило","гесла","гелом","гесло","гетоа","гесту","гегаш","гегах","гегај","гекну","гекне","гетом","гинем","гибао","гинеш","гинко","гинка","гејше","гејша","гејши","гејшу","гајен","гајем","гајка","гајки","гајке","гађан","гашен","гајбе","гајди","гајде","гајку","гдеко","гвири","гегав","гегао","гегам","гањао","гањам","гањаш","гвинт","гаџет","вожда","водну","вожду","возам","вожен","водна","водих","водне","водно","водни","возао","возно","возну","волом","волех","возаш","возар","возне","возна","вијка","вијаш","вијке","вијци","виђај","виђан","вијак","вијао","вијам","влаги","водао","водам","водах","водај","водаш","влажи","влаже","влази","влаше","влати","врбов","врбин","врбом","врвео","врбуј","врачи","врану","врачу","врбак","врање","врвио","врдну","врдне","врева","вреви","вреве","врдам","вргањ","врдао","врдај","врдаш","воњао","вољну","воњаш","воњом","воњем","вотки","воску","вошти","вођин","воћар","воћно","воћне","воћну","врани","враже","воћке","воћка","воћки","воћна","воћку","гинуо","грдње","грдња","грдњи","греби","грдњу","грдна","грдиш","грдне","грдну","грдни","гребу","гриву","гриви","грижа","грижи","гриже","греду","греди","греју","гриве","грива","граје","граја","граји","грања","грају","грами","гралу","граму","грађи","грађа","грање","грдан","гргља","грдим","грдих","грдио","грбав","грању","грбио","гргеч","грбом","груду","груде","груне","групо","груну","грофу","грому","гроша","груда","грува","груша","грчем","грцај","грчим","грчиш","грчио","грцам","грцав","грцао","грцаш","грцах","грлић","грлио","грлом","грмео","грмаљ","гриња","гриза","гриње","грлен","грлат","грмне","грозд","гроза","грозе","грозу","грози","грмом","грмну","грмља","гроги","грога","гложи","гложе","глође","глођу","глоби","глобе","глобу","глогу","глога","глуво","гневи","гневе","гневу","гноми","гноме","гмаза","глуву","гмазу","гмижу","гмиже","гипсу","гипса","гихта","гланц","гладе","гипке","гипка","гипки","гипку","гипко","гласе","глибу","глиба","глини","глину","глађа","глача","глађе","глеђи","глађи","горја","горчу","горје","готик","госпи","горој","гором","горча","горчи","горче","гошће","гољом","гољин","гоњен","грала","грабе","гошћо","гошћи","гојим","гојиш","гојио","годио","гнуша","голаћ","голој","голет","гноја","гному","гноје","гноју","гноји","гонга","горду","горде","горку","гонио","гоним","горда","гониш","мисир","бучао","филом","азилу","зорту","машћу","амаму","забих","бујаш","кануо","запој","газом","фаула","жњели","бурми","истра","парча","церић","певцу","карми","истре","колцу","свене","адута","векни","делао","мажеш","латим","кмеза","циљну","сатка","ираца","шибљу","замре","бушим","пачић","лапће","цесну","зубну","зјала","козју","кмера","датог","лаких","заори","колом","кокао","лаври","дахћу","лувра","верим","веком","копцу","бушну","залих","дучеу","касти","феном","везах","деблу","машин","њачеш","вашку","зрном","љућим","љуште","дабра","гњила","љућој","зубна","мауче","фелну","ламом","аката","мазги","деобу","забох","аласе","шетка","копца","бедом","гљиву","лакту","делти","сатри","молох","шииту","данац","бушио","сатру","анала","гуаму","везуј","мањку","сведе","жуану","запио","пасле","нулту","њишеш","цокће","шибну","мацом","фауну","парам","црниш","ланом","везну","адски","нутка","зујав","шијеш","парим","завих","махне","капљи","шкиље","свеза","вршиш","дахну","драву","сарми","обаду","катар","пацку","вртну","менсу","широј","врцао","лалом","алама","шизме","зјапе","засео","даљом","вуном","венуо","цичао","двама","цикне","бидеа","феуду","агину","мазну","шибаш","бекне","свану","факте","биваш","денуо","вучју","датом","кобну","каљао","оберу","алоју","фазне","вукло","лакта","вртом","касаш","вуков","дадну","шкоде","шиљку","цифри","лувру","дрине","фесом","саспу","мачва","цимни","шкиљи","цепки","дагњи","колца","кануе","шибом","фиолу","пашом","вепру","шишај","магом","амебу","лавин","коком","бечиш","шизиш","цимне","црепу","ланча","машим","заову","букну","дучеа","зричу","заржу","зраче","алали","датих","бидеу","љуљаш","олгом","депоу","ануса","ларму","шишти","залиј","олимп","биому","бечио","белић","комшо","берем","даћом","дебру","алеву","денга","зуцка","фазом","алков","ласту","латих","ганџа","залио","монцу","ланке","зором","жуков","врчом","дахћи","дворе","дрини","букте","обаре","флака","бенџа","пајки","дашку","запех","кафее","задра","вериш","верну","актен","церек","вулви","вршцу","ланчи","мавар","задај","задро","ламин","качио","ваљку","мазао","шизну","уроша","бивам","њушци","биома","свело","ириду","кашљи","лујем","гогољ","вулву","бесмо","зорта","гетеа","одесу","бином","митар","копне","лаоса","изиду","меким","њивом","шипци","ковао","њиску","лорки","гетеу","урану","фијат","отелу","цесне","шизми","дрину","ласом","заоре","обада","беџом","љутњи","ферма","иригу","делаш","касом","белцу","машни","масла","љутој","пацки","дерња","жрнов","копчи","ларви","њакао","цепку","задам","истри","фелни","цирку","цимам","бељом","цмачи","шишам","канџу","осаке","мазда","зупцу","париш","мауса","истру","свели","цесна","козом","маљом","бусао","аласу","карао","меиђи","закле","шиита","жућој","колта","делту","мађар","гњечи","гушче","кобру","гњиле","гадом","флаку","мазго","кокну","бутер","адска","зрелу","дениц","мазио","адско","жуана","везеш","даљну","газио","шишах","давну","даљој","ириде","алову","вршка","цирке","везла","вашки","кмету","шиљио","дашћу","лиону","сапне","грацу","ширит","булку","гоген","изидо","гњиду","цисту","зовну","колту","дадох","кокса","заора","шиити","малте","вукле","верем","машао","цокну","пауке","бекну","маора","бејах","адуте","колце","лакеј","кануу","сасух","бутку","санту","задар","бутну","обари","будну","њушне","белео","сасуо","изиди","фарси","комом","шишку","вашко","пауна","вулва","љутну","пасју","цокиш","алеве","грком","гушћу","фалту","илији","пауне","њушни","фаром","сафту","векну","адађо","лавра","сајли","англо","фајла","гадио","бељег","гизом","алоји","деоби","бунту","шикља","ваљка","добој","њушио","алева","филцу","дашка","мацин","сарај","закуј","мачви","коалу","овчем","бувин","шипом","вршем","малта","дахне","бивао","аорти","лаике","лакну","машио","кнезу","вудуа","депоа","девом","сачми","ланеш","дебљу","карај","даљим","шикне","њишти","коксу","шибља","цитри","маори","фиоле","булки","махом","кокер","жњеле","вучну","алком","његош","вуком","ковит","гушом","шибај","љућем","зољом","каном","буцом","медну","бинга","каури","цркну","вукох","камом","бедру","фирца","ибром","гуглу","гасио","бусаш","заиру","цериш","дерем","лаосу","зуцни","ирода","њушки","кашљу","греја","бечка","сачму","зујим","милош","илире","зоном","гаром","кануа","мосад","омеге","двају","меких","кодом","береш","пасло","параш","њутну","њушну","маших","сатре","ганем","орвел","санки","биком","анусу","лануо","бељем","шином","масци","њушко","илиџу","дебар","амиџа","бекап","двеју","њиште","гљиви","давши","делај","свата","мачве","газдо","алату","кмете","дахће","задаш","бежах","махну","обеда","илије","љуљне","шишао","свали","зуцну","оазом","лажју","гардо","зјале","цреву","одине","мачју","ширих","љућих","цикну","зовом","газим","церио","копни","нужну","ганеш","запни","зурли","гануо","занех","запах","алачу","зупце","певце","финој","капаш","дабру","машам","даира","цимну","осаки","лакне","азота","одеси","зујао","пањем","мосул","зарон","вајду","цимаш","лаику","вебом","црнео","магми","кмечи","марсе","газих","шкоду","даљно","фалус","азоту","илијо","буром","адуту","пасом","зевсу","махни","кокне","ганџу","масат","вајао","илиџи","фазну","сваре","цичиш","аорту","азура","бечке","орфеј","ивану","вепре","шилом","капче","парио","дадни","бидне","нужди","дучић","ширег","илира","црвом","дрина","аласа","цицом","гњура","ваљке","маурт","адску","шибам","венце","алеју","пасао","мајао","млеци","ларву","шиљке","заира","капао","качим","монца","шиите","њушиш","запне","фемка","дадне","каљаш","илиџе","минос","зарих","зовин","љутне","алаву","сахне","лакој","млави","кајте","замру","заром","датој","венеш","ганџи","малти","дивац","гасиш","венца","њисну","зрењу","мањем","касту","илију","кајао","бунца","буниш","маржи","одина","мањом","вајаш","бурну","бупну","бељих","шишки","алкар","конца","ланки","феуде","агино","касао","млава","жућом","мурат","њишем","љућег","букћу","олдос","црвља","анусе","вршци","делуј","везло","вршку","бунта","жућим","нулом","драчу","љућом","љушти","кајас","лапис","венцу","букне","магму","ваљам","веном","ширем","саспе","бечки","врчем","лавре","цичим","капља","заови","шихта","цимао","саспи","зарио","либан","дадем","шијом","бирое","азиле","цинка","бивак","сафта","аноди","зовни","њихао","везем","малту","ирцем","пашин","шикну","гњиди","цокћу","анале","вршца","венем","певах","саших","дедал","вршне","данца","церим","букће","љуљам","црепа","касну","фиксу","цигар","вршац","алеји","драви","љуљну","ларми","бербу","шесту","берби","запну","бувље","шипки","кокам","верао","канов","феуда","илиџа","лиона","амана","копце","азила","гуњом","патки","душан","конта","парај","каљам","циком","фалти","азили","ибија","цркох","гњилу","зажди","вршља","аноду","факту","замео","цмаче","обасу","амбру","љуљао","апела","гадим","гугла","осака","дерао","кајах","мачву","црнки","омегу","папан","фарсу","алтом","шиљка","папка","алтер","цмачу","изиде","одесе","шиште","адске","врцка","фецес","кауче","бувљу","закла","бупне","шизма","вергл","лаика","бучну","осаку","исаку","денди","букви","њухом","кауре","филца","лапћу","завио","вафла","свеле","амове","шибао","жућих","ириди","њутна","сатро","алвом","монеа","актом","цинку","ланчу","фићом","дахау","вулве","капљу","капну","амура","амбре","сапео","бесну","маљен","шипче","копка","сајлу","зубом","пауку","илири","сашио","зарза","каска","минск","денем","зуцне","цепка","гуњем","ганџе","капку","дањег","врљав","кобри","шкода","зупца","ироду","магов","аниса","зариј","караш","финту","фауни","ирско","ласти","земун","карам","парем","ирида","обере","маљем","зовне","маржу","цепти","вршен","амама","бедну","дунав","шихту","одину","зарђа","вереш","буном","замро","папом","цимај","драве","букти","бепче","машиш","ведру","парох","кашће","факти","фешту","бингу","дедов","шипчи","пасла","задру","макиш","изида","урошу","гњече","пасеш","свела","бенџу","вјеки","парао","паљби","сарму","бељој","певца","цокне","дашће","ганга","обеде","пауну","обеду","едема","мунух","мурта","мусти","мусав","мумла","мулци","мунем","мунуо","мунеш","мутну","мутни","муфом","муцам","муцав","мутим","мутан","мутио","мутне","мутиш","мужић","мужик","музао","музеш","музем","мувљи","мувље","мувљу","мужев","мудру","музла","мукло","мукли","муклу","мулат","мукну","музом","музли","мукао","мукле","мукла","мњење","мњења","мњењу","нанту","нанта","мућку","мућки","мућне","мућну","мућни","насер","ничеа","нилом","ничеу","нишом","нишки","немцу","недић","немче","нехру","непал","мучко","мучки","мучку","мучне","мучна","муцаш","муцао","мучан","мучке","мучка","мучни","муњом","муљем","мућак","мућке","мућка","муљав","мучну","муљам","муљаш","муљао","мрвио","мрвим","мрвиш","мргуд","мрвом","мољцу","мољци","мраву","мрачи","мраче","мрдао","мрзла","мрзак","мрзле","мрзло","мрзли","мрдну","мрени","мрети","мрену","мориш","морио","мором","мотан","мотам","мопед","молих","морах","моржа","морен","мотај","мољах","мошус","мољце","мољца","мотки","мошти","мочом","мрсна","мрску","мрсиш","мрсио","мрска","мрски","мрске","мрсну","мрљом","мрљао","муван","мувља","мувај","мрште","мрсом","мршти","мрљам","мрљав","мрких","мрким","мркла","мркли","мркле","мрзну","мрзне","мрква","мркву","мркви","мркло","мрмор","мрмља","мрсим","мрсан","мрков","мрклу","мрког","мркој","мрком","нушић","нерад","непцу","нерва","нерца","нерву","непар","неона","неста","нефер","неуку","нехај","нетом","неуке","негом","негуј","нежив","недра","најма","најео","најми","наџак","најму","неман","немих","немио","немог","немоћ","немом","немах","немао","немај","немим","немео","ничем","ницао","нишка","нишке","нитна","нинџи","нитне","нитну","нитни","нишко","ножар","нокиа","ножну","нишку","нишче","ногат","нижој","нижом","низао","никао","низом","нећка","нејач","нижем","нижих","нижеш","никла","нимфа","никну","нимфе","нимфу","нимфи","никли","никле","никло","никне","никлу","надух","надут","назва","назре","назеб","нагој","нагох","надви","надуо","надре","назро","налио","накот","налих","намаз","налиј","назуо","назру","назух","наиђи","наива","навод","навиј","навој","навро","навре","набор","набих","набра","навио","навек","навру","нагне","наглу","нагну","нагом","нагог","наган","наврх","нагим","нагла","нагих","наума","науко","науме","науму","науми","наста","наспу","насуо","насух","насут","науље","начну","начне","начух","нађох","нашки","нафти","науљи","начео","начех","начет","нанче","наоко","напео","напев","намет","намах","нанет","наном","нанин","напис","напој","напну","насип","наспи","наспе","напих","напит","напиј","напни","напне","молер","лупиш","лупих","лупка","лупни","лупне","лупан","лулом","лупах","лупим","лупеж","лупну","лучим","лучем","лучио","лучке","лучка","лутак","лупом","лутан","луфта","лутај","лонце","лонца","лотос","лонче","ломни","ломна","ломно","ломом","ломну","лотоу","лудео","лугер","лудин","лукац","лудуј","лочеш","лочем","лођом","лојне","лојем","љосну","љубих","љуски","љупку","љагом","љотић","љосне","љуску","макле","макла","макли","макну","макло","љусну","љуспе","љусци","љуспи","лучно","лучну","луђем","луђег","лучко","лучки","лучку","лучне","лучна","луђим","луњам","лујку","луњао","љевин","луњаш","луђом","луђих","луђој","лујки","линчу","линча","липов","липте","липом","лимфи","лимфе","лимфу","линку","линка","липти","лисци","лисца","лисцу","литру","литри","липши","липше","липшу","лисну","лисне","лигња","лигом","лигњи","лизан","лигњу","ливца","ливен","ливце","ливцу","лизне","лимба","лимбу","лимом","лизом","лизну","ликре","ликуј","ложим","ложен","ложио","ложом","ложиш","логом","логоа","логос","ложач","логоу","лозом","локни","локну","ломио","ломан","локва","локао","локве","локна","локву","личко","лички","личку","лишим","лицка","лицеј","личан","личке","личка","лишио","ловна","лињао","ловне","ловче","ловор","лишћу","лишиш","лијем","лијом","лијеш","маком","митра","митом","митре","мицао","митру","мирта","мириш","мирте","мисом","мирту","мицве","мишки","мишке","мишку","мишја","мишом","мичеш","мицву","мишем","мишев","милио","милео","милих","милом","милог","мигне","мигао","мигну","мигом","милој","минџи","минџе","минџу","мирио","мирим","милуј","мином","минџа","минуо","могох","модар","модла","модем","млину","млина","множе","могах","множи","модри","модре","модро","молби","модру","модлу","модли","модно","модра","модом","миљом","миљеу","млаза","млака","млазу","мишји","мишје","мишју","миљеи","миљеа","млаке","млеле","млела","млели","млети","млело","млаки","млаку","млеку","млате","мекшу","мелос","мемле","меком","мемли","менти","менту","мемлу","меном","мензу","мамца","мамут","мамце","мамцу","мамци","малић","мамим","мамиш","мамио","манем","марве","марва","марви","марву","марво","манир","манеш","маном","мапом","мануо","мехом","метру","мечка","мечки","мечке","метну","метни","метох","метри","метре","мечку","мељем","мејлу","мељеш","мећем","мењан","мешан","мечом","међаш","мејла","међом","мерни","мерне","месим","месиш","месио","мерио","мериш","метиљ","метил","метку","метне","метли","месну","метао","месје","осици","осиње","осицу","осину","осино","осион","осипу","осипа","осињи","оспем","особо","остав","остај","остах","осмој","осмим","осним","оснуј","осног","осаму","осами","освит","оседе","ороси","оруђу","осаме","орући","оседи","осили","осиле","осина","осини","осине","осеке","осека","осеки","осеци","осеку","отеће","отеше","отећи","отиде","отећу","отежу","отежи","отеле","отече","отету","отиди","откри","откос","отоке","отоци","отопе","отире","отиду","отиче","откоп","отичу","осута","осуло","осуте","осуто","осути","остви","остве","осула","осули","осуле","осуту","отаља","отачу","отање","отеже","отежа","осуће","осуше","отапа","отаче","отаца","опран","опоје","опрем","опрже","опреш","опори","опору","опоро","опржи","опуте","опусу","опуту","орала","опшив","опрљи","опрље","опсео","опуса","опсуј","опипа","опило","опипу","описе","опиру","опећи","опече","опила","опили","опиле","описи","опићу","опиће","опкоп","опном","оплео","опите","опишу","опију","опије","орком","оркан","орлом","орлов","ориле","орила","орили","орило","орним","орозе","ороза","орозу","оросе","орону","оробе","орних","ороби","ороди","ороде","орано","оранж","орати","орача","ораху","орали","орале","орало","оране","орана","орачи","оремо","ореза","ореол","ориба","орете","орања","орању","ораћу","ораће","оточи","падај","падеж","падох","пупин","пруст","путин","павши","пчињи","пазар","пакум","пакту","палих","пакле","пакли","пакта","пакло","пешти","пеште","пешту","перун","пашић","петке","петку","петки","пикчу","попај","пруса","пруси","прусе","пиреј","пилат","пирот","планк","плани","педља","пегом","педљу","пежоу","пежоа","пегав","паоци","пегле","пеглу","пегли","пезос","пелин","пелен","пелир","пениш","пенио","пекла","пекао","пекле","пекло","пекли","палци","палце","палцу","панду","панди","палму","палми","палог","палој","палом","паноа","паора","паоке","паоре","паору","паное","паноу","паока","охоло","охоли","охолу","оцеди","оцеде","офрље","отуђи","офуца","охоле","охола","оцени","очаје","очара","очепи","очеше","очеша","оцило","оцила","оцрне","оцрта","оцрни","отржу","отрже","отрла","отрли","отрле","отпио","отпих","отрем","отпиј","отрло","отрља","отрче","отупе","отуђе","отупи","отрпи","отрпе","отрта","отрча","отруј","ојеле","ојела","ојужи","оњуше","ољути","ошуре","оштру","ошури","ојади","ојаде","оњуши","павлу","пансе","патек","папуе","оћути","оћута","оџака","оџаку","оџаке","очињи","очице","очним","очног","очних","очите","очешу","очити","очица","очиту","очном","ошине","очњак","ошини","ошиша","ошину","очува","очној","очуси","очуху","очухе","опеци","овцом","овсом","овнов","овном","овсем","овоја","овчји","оголи","оголе","огрев","огрне","огреј","огаде","овчју","огади","оглед","оглав","обује","обуше","обују","овала","обућа","обуле","обула","обули","обучи","обути","овале","овећа","оверу","овеће","овећу","овећи","овалу","овали","ована","овери","овере","одвих","одвио","одвој","одева","одгој","одаће","одаљи","одбих","одвећ","одвар","одене","одзив","одеље","одиже","одише","одижу","одера","одену","одере","одеру","одери","огули","огуле","огњем","одаду","одаде","огрну","огрни","огрте","огрћу","огрће","одале","одато","одате","одату","одаље","одаји","одало","одану","одата","одапе","нојев","ношњу","ноћим","ноћиш","ноћио","ношом","ношен","ношњи","обиму","обима","обише","обија","обиђу","обила","обеју","обиле","обило","обили","носао","носаш","носић","носих","нокту","нокта","номад","носам","норми","нотне","нотни","нотом","нотну","носни","носну","обрео","обрем","обрех","обрне","обрис","обоји","обрао","обрву","обрви","обрни","обрће","обруб","обрћу","обузе","обува","обрта","обрну","обрте","обрту","облио","облим","облих","облом","облог","обиља","обију","обиљу","обићу","обиће","облој","оболи","оболе","обора","обоја","обору","ободе","обода","обола","обоже","одишу","оману","омане","омаче","омаши","омаше","омама","омаза","омаме","омаму","омами","омела","омеле","омело","омели","омање","омању","омеги","омаћи","олижу","олижи","олиза","олову","олиња","олаке","олаку","олиже","олеши","омажа","олујо","омаже","омажу","омажи","олуке","олука","олуку","олупа","опаса","опари","опата","опати","опате","опале","опалу","опаре","опара","опату","опеку","опелу","опело","опаши","опаше","опашу","опека","опева","омоте","омоту","омрси","омрсе","омеђе","омету","омеђи","омота","омичу","омчом","опажа","опаде","опазе","опаку","опази","оникс","онижу","озаре","ожене","озари","озебу","озебе","ожали","ожале","ожари","ожежи","ожеже","озида","окана","окали","окане","оката","окану","озона","озиме","озону","окале","окади","одока","однех","одоле","одрао","одлив","одићи","одлио","однет","одлиј","одрах","одузе","одужи","одуче","одшио","одучи","одром","одржа","одуже","одсев","окоту","окоти","окрпе","окрњи","окрпи","окоме","окову","окоми","окоте","окота","окује","окуша","окују","олака","окцем","окуку","окуци","окусе","окаје","окаче","окају","окера","окаља","окати","окате","окато","окаца","окату","окива","окица","окити","окице","окови","окном","окиде","окида","окине","оките","окину","идиом","идилу","идоле","идолу","идоли","игран","иглоу","идили","иживе","изгна","извиј","изгон","издра","издах","избих","иживи","избиј","извих","извио","зобао","знану","зобљу","итаке","итака","знана","знаду","знане","знани","итаки","ивера","ибрик","ивере","иглоа","ивери","ифска","итаку","ифске","ибиса","ифску","икону","икони","икром","имаде","икуда","изују","изује","изуће","изјео","изућу","имами","имуне","имиџу","имуно","ината","имуну","имаше","имаху","имбус","имиџа","имеле","изнет","излиј","изнех","изрез","изоси","изиђи","изиђе","изиђу","излих","излио","изрод","изути","изуму","изуче","изуше","изучи","изула","изува","изуле","изуме","изули","зекан","зезну","зеком","земне","земна","зевај","зеваш","зевне","зевом","зевну","земни","зероу","зерои","зецом","зетом","земну","земно","зерое","зероа","здрао","здипи","зебао","зебеш","зебем","здели","зделе","зделу","здере","здера","зебла","зебњи","зебњу","зевао","зевам","зебли","зебле","зебри","зебња","зебру","зијам","зијао","зијај","зијаш","зинем","зимус","зинеш","зинух","зинуо","злате","злоћи","злоћо","знаде","злоћу","злима","злоби","злога","злобу","зивка","зељем","зидан","зидам","зечја","зечје","зечју","зидао","зидно","зидну","зимом","зилот","зидаш","зидић","јашио","јашим","јајна","јајну","јајне","јачем","јачег","јачих","јачој","јачом","јајце","једак","јебан","једио","једим","јањац","јајцу","јањца","јањци","јањце","јатак","јасли","јатом","јауке","јаука","јарцу","јарче","јасле","јауку","јачан","јачам","јачао","јачај","јачаш","јауче","јауци","јаучи","јахан","јаучу","јетка","јереј","јетке","јетко","јетки","јелци","јемца","јерес","јемчи","јетку","јечим","јечао","јечиш","јечму","јечма","јецао","јецам","јецаш","јечам","јежев","једру","јежио","јежић","јежиш","једић","једиш","једом","једри","језде","јелак","јелеј","јелки","јелик","језом","језди","јекне","јеком","јекну","исуше","исучу","исуши","ичија","ичему","исука","иступ","исуци","исучи","исуче","ичији","иштеш","иштем","ишуња","иђаше","иђаху","ишара","ичију","ишета","ишопа","ишиба","исеру","исере","исеца","исиса","ирвас","инату","иселе","исеку","ископ","исрао","испра","исрах","истка","истек","испео","искри","испио","испне","испих","јамом","јалов","јамче","јарад","јамчи","јадај","јадаш","јадом","јакој","јазом","јарам","јарму","јарце","јаром","јарду","јаран","јарић","јемен","јосип","јунга","јудин","јалти","јалте","јалту","јахве","јанус","јаван","јагму","јагми","јадам","јадац","јадао","јавом","јавих","здела","жбуна","жбицу","жбуну","жваки","жбири","жбира","жбиру","жбице","жвале","жгољи","жгоље","жгољо","ждера","жгољу","жваћу","жваћи","жврља","жгоља","жгебе","жарио","жарка","жариш","жапце","жапца","жапци","жапче","жапцу","жарке","жацну","жацне","жаљен","жањеш","жањем","жарку","жарна","жаром","жарни","живаљ","жењен","живин","живну","живне","жешћу","жељен","жељну","жељне","живој","жигне","жигао","жигну","жигом","живцу","живца","живљу","жегло","жегла","жегом","ждери","ждере","ждеру","ждрао","жедну","жесте","женко","жести","жешћа","жетви","жезла","жезлу","желеу","ерлов","епску","ерлом","есере","есера","епоху","епохи","епска","епско","есери","етажи","етажу","есеје","есеја","есеју","елити","елису","елиту","емира","елана","елиси","елану","еоцен","епове","епоси","епохе","епарх","епике","епова","епици","жабљу","жагор","жакет","жадом","жабин","жабар","жабом","жабље","жалац","жанру","жаоци","жаоку","жалом","жална","жалца","жанра","жамор","етром","етнос","евина","егеја","евину","етапи","етапу","етици","етера","едипа","ероса","ервин","еросу","етном","елбом","едипу","еноха","епиру","епира","жижна","збега","збаци","збегу","збиле","збила","зајме","зајма","зајми","збаце","зајму","збили","збију","збије","збиље","збиљу","збиљи","збиру","збира","збити","збија","збише","зачео","зачне","зачуо","зачну","затро","затри","затрт","заузе","затру","зачух","зашлу","зашли","зађем","зађох","зађеш","зашио","зашао","зашиј","зашле","зашла","згоди","згоду","згрне","згрби","згаде","зврји","згади","згазе","згрну","згуле","згуза","згули","здању","здања","згрче","згрте","згрчи","згрћу","згрће","збрза","збрда","збуне","звања","зваху","збора","збиће","зборе","збору","збори","звању","звечи","звече","звону","зврје","звоца","звеке","звека","звеку","зверу","звера","жлеба","жишци","жлебу","жмуре","жмири","жишка","жичне","жишке","жишку","жишки","жмури","жреца","жреба","жреце","жрецу","жреци","жрвња","жрвње","жрвњу","жрвњи","житељ","жиром","житки","житке","жижни","жижне","жижно","жилом","жижну","житом","житну","жичке","жичку","жички","житку","житни","жуљић","жуљио","жућег","засеј","жућем","жуљао","жучну","заспа","засух","засја","затре","затон","засро","заспу","заста","засуо","засун","жудне","жудна","жудни","жудну","жудно","жубор","жртво","жудан","жудио","жудео","жудњи","журну","жутео","жучна","жучан","журбу","крхку","крцка","крцну","крцне","крућу","крући","крхки","кршем","кршан","кршен","кршна","кршио","крчим","крчао","крчио","крчка","крчиш","крсну","крсно","крсте","кртим","крсти","крпље","крпом","крсна","крсни","крсне","кртих","крути","круту","круће","крућа","кртом","кртог","кртој","круте","крута","кужне","кужна","кужни","кужну","кужно","кудио","кудим","кудиш","кужан","кудње","кукам","кулом","кулов","култу","кумим","куках","кукао","кулен","кулак","крњег","крњав","крњем","крњио","крњим","кршне","кршно","кршом","кршну","крњих","кубни","кубне","куван","кугом","кувај","крњој","крњом","крџом","кубна","кубик","краци","краху","краћу","крвца","краси","красе","крати","краха","крвцу","креми","креку","крепа","крепи","крепе","крдом","креди","креду","кредо","коњиц","кољеш","краби","коњче","кошен","кошем","кошка","кољем","крабу","крало","крале","крану","крана","кради","крави","крака","краку","краке","кроса","кроза","кросу","кроти","кроте","крмку","крмке","крмно","крмче","крмом","кроче","крпеж","крпим","крпиш","крпио","кроје","кроја","кроји","кроју","крешу","креју","креји","креча","крете","крече","кречу","кречи","крзав","кркља","кркај","крмка","крику","крзну","криле","криће","крина","кумин","ледни","ледне","ледно","лежах","ледну","легох","ледим","ледна","ледио","лежем","лемио","лемао","лезбо","лежеш","лемам","лелек","лаћам","лајку","лаћао","левим","лаћај","лајав","лађом","лајем","лајке","лајка","левис","легле","легли","легну","леглу","левка","левих","левке","левку","леђне","леђна","леђни","леђну","лецне","летњо","лецну","лечив","лејом","либим","лењој","либио","либиш","лењим","лењих","лењом","лењог","лепра","лепку","лепре","лепру","лепри","ленту","ленти","лепет","лепиш","лепио","летву","летви","летка","летну","летку","леску","лески","кусих","кусим","кусог","кусој","кусом","курчи","курче","кусам","кусаш","кусао","кутер","куцах","куцањ","куцну","куцне","кутке","кутка","кутку","куном","купеа","купај","кумио","кумов","кумом","купее","купче","курат","курци","курце","купеу","купеи","купих","купом","купки","кљусе","кљуну","кљуца","кљује","кључу","кљови","кљову","кљуна","кљука","кљују","лауту","лаути","лафет","лахор","књаза","књава","књиго","књижи","књиже","кушњу","кушњи","кујем","кујеш","кушан","кушам","кушао","кушње","кушња","куњам","куљну","куњао","куњаш","кујну","кујни","кујом","куљне","куљао","калеж","калио","калим","какаа","каишу","каким","какиш","какио","калиф","камиш","камаз","кваки","кваса","калиш","калфу","калфи","кавги","кавгу","каган","кавзи","кјоту","кјото","кјушу","каблу","кадим","казуј","казах","каиша","каише","кадом","кадио","кадре","кадро","кадри","кезом","кезиш","кексу","кедри","кедра","кедру","кезио","кезим","кером","кејом","кецом","кељем","кењам","кељом","кесом","кецам","кецаш","кецао","квиза","квачу","квота","квоца","квоти","кваси","квасе","квасу","кваче","кваци","кврга","кегле","кегла","кегли","кедар","кеглу","квргу","кврге","кевом","кевћу","кевће","јурти","јурту","јутру","јурца","јунцу","јунци","јурне","јурта","јурну","кабул","каину","каина","кафке","кафка","каида","каиде","каиду","каиди","јешће","јешну","јидиш","јогом","јогин","јешна","јешан","јешне","јешно","јешни","јодна","југом","јоште","јунце","јунца","јодни","јодне","јодно","јодом","јодну","кремљ","крања","крима","крита","криму","котор","котеж","кохов","кочом","кочиз","криту","курде","курда","курди","кјота","курск","крусо","крона","крфом","кубом","крцун","кеопс","кемал","кипра","кирке","кипру","кафку","кафки","келта","келте","кихот","копта","книну","копте","копту","копти","кмере","кијев","кмери","книна","кмеру","кењао","клижу","клиже","клиза","клика","клизе","клече","клеца","клечи","клешу","клеше","клипу","клипа","клица","клици","клику","клики","клина","клину","клеле","клела","клели","клело","клаћу","клаће","клеко","клете","клета","клети","клету","клето","клему","клеми","клена","клера","клепи","косог","косој","косце","косим","косач","косио","косиш","косих","коцем","кофом","кочим","кочиш","кочио","котву","котви","котла","котлу","клићу","клињу","клоне","клопи","клону","кличе","клицу","кличу","клињи","клија","клоња","корим","корио","кором","кориш","клоњи","клоње","клубе","копљу","копчу","килер","килта","кимом","килту","кидне","кидај","кидну","кикот","киком","киндл","кипео","кипић","кипте","кипом","кинем","кипар","кинуо","киблу","кибли","кењка","кењај","кибер","кивне","кидан","кидам","кидао","кидаш","кидач","кивну","кивње","кијем","кињим","кињиш","кињио","кијао","кијам","кијах","кијај","кијаш","клате","клању","клала","кладу","клале","клало","клали","кисне","кисло","кисну","китио","китим","кипти","кисла","кисли","кисле","китиш","кичми","кишан","кишну","кифла","китов","кифлу","кифли"
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
        var Ba = "абвгдђежзијклљмнњопрстћуфхцчџш",
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
        var Ya = "statistics",
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
                ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: var(--sv-game-height);\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n    flex-wrap: var(--sv-flex-wrap);\n    padding: var(--sv-header-padding);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 36px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n    position: var(--sv-title-position);\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n\n  @media (max-width: 480px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #mode-toggle {\n    display: inline-flex;\n    border: 2px solid var(--color-correct);\n    border-radius: 4px;\n    overflow: hidden;\n    order: var(--sv-mode-toggle-order);\n    margin: var(--sv-mode-toggle-margin);\n    width: var(--sv-mode-toggle-width);\n  }\n  .mode-pill {\n    background: none;\n    border: none;\n    color: var(--color-correct);\n    cursor: pointer;\n    padding: 6px 12px;\n    font-family: inherit;\n    font-weight: bold;\n    font-size: 12px;\n    text-transform: uppercase;\n    transition: background-color 0.2s ease, color 0.2s ease, opacity 0.2s ease;\n    flex: 1;\n  }\n  .mode-pill.active {\n    background-color: var(--color-correct);\n    color: var(--tile-text-color);\n    cursor: default;\n  }\n  .mode-pill:not(.active):hover {\n    background-color: var(--color-correct);\n    color: var(--tile-text-color);\n    opacity: 0.7;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  .menu {\n    width: var(--sv-menu-width);\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help-button" class="icon" aria-label="help">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div class="title">\n         СРПСКИ ВОРДЛ\n        </div>\n        <div class="menu">\n          <button id="statistics-button" class="icon" aria-label="statistics">\n            <game-icon icon="statistics"></game-icon>\n          </button>\n          <button id="settings-button" class="icon" aria-label="settings">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n        <div id="mode-toggle">\n          <button class="mode-pill" data-mode="daily" aria-label="daily-mode">Дневни</button>\n          <button class="mode-pill" data-mode="unlimited" aria-label="unlimited-mode">Неограничени</button>\n        </div>\n      </header>\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n'
            );
        var Qa = document.createElement("template");
        Qa.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
        var Za = "IN_PROGRESS",
            es = "WIN",
            as = "FAIL",
            ss = ["Генијално", "Фантастично", "Импресивно", "Сјајно", "Одлично", "За длаку"],
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
                                    if (((e = s), !Ta.includes(e) && !La.includes(e))) return a.setAttribute("invalid", ""), void this.addToast("Реч није на списку");
                                    if (this.hardMode) {
                                        var t = (function (e, a, s) {
                                                if (!e || !a || !s) return { validGuess: !0 };
                                                for (var t = 0; t < s.length; t++) if (s[t] === Ma && e[t] !== a[t]) return { validGuess: !1, errorMessage: "".concat(Pa(t + 1), " letter must be ").concat(a[t].toUpperCase()) };
                                                for (var o = {}, n = 0; n < s.length; n++) [Ma, Ia].includes(s[n]) && (o[a[n]] ? (o[a[n]] += 1) : (o[a[n]] = 1));
                                                var r = e.split("").reduce(function (e, a) {
                                                    return e[a] ? (e[a] += 1) : (e[a] = 1), e;
                                                }, {});
                                                for (var i in o) if ((r[i] || 0) < o[i]) return { validGuess: !1, errorMessage: "Покушај мора да садржи ".concat(i.toUpperCase()) };
                                                return { validGuess: !0 };
                                            })(s, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1]),
                                            o = t.validGuess,
                                            n = t.errorMessage;
                                        if (!o) return a.setAttribute("invalid", ""), void this.addToast(n || "Покушај није валидан у хард моду");
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
                                this.gameStatus === Za &&
                                    this.canInput &&
                                    (this.tileIndex >= 5 || ((this.boardState[this.rowIndex] += e), this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]), (this.tileIndex += 1)));
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
                                    if (5 !== this.tileIndex) return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""), void this.addToast("Недовољно слова");
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
                                var skipIntroModals = window.sessionStorage.getItem("sw-mode-switch") === "1" || this.restoringFromLocalStorage;
                                window.sessionStorage.removeItem("sw-mode-switch");
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
                                                return void (n ? e.addToast("Хард мод може бити укључен само на почетку рунде", 1500, !0) : ((e.hardMode = o), saveGameState({ hardMode: o }, e.gameMode === "unlimited")));
                                        }
                                    }),
                                    this.shadowRoot.getElementById("settings-button").addEventListener("click", function (a) {
                                        var s = e.$game.querySelector("game-page"),
                                            t = document.createTextNode("Подешавања");
                                        s.appendChild(t);
                                        var o = document.createElement("game-settings");
                                        o.setAttribute("slot", "content"), (o.gameApp = e), s.appendChild(o), s.setAttribute("open", "");
                                    }),
                                    this.shadowRoot.getElementById("help-button").addEventListener("click", function (a) {
                                        var s = e.$game.querySelector("game-page"),
                                            t = document.createTextNode("Правила");
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
                                            e.addToast("Прелазак на " + (newMode === "unlimited" ? "Неограничени" : "Дневни") + " режим...", 1000, !0);
                                            setTimeout(function() {
                                                window.sessionStorage.setItem("sw-mode-switch", "1");
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
                                            content.innerHTML = '<div style="font-size:24px;">🎉🎉🎉</div><h2 style="margin: 0 0 15px 0; font-size: 24px;">Неограничени Режим!</h2><p style="margin: 10px 0; font-size: 14px;">Сада можете играти <strong>неограничен број пута</strong> без чекања на дневну реч. Просто кликните на дугме <strong style="color: var(--color-correct);">НЕОГРАНИЧЕНИ</strong> испод наслова.</p><p style="margin: 20px 0 0 0; font-size: 13px; opacity: 0.8;">Наставите са дневним режимом или пробајте нешто ново!</p>';
                                            modal.insertBefore(content, modal.firstChild);
                                            var closeBtn = document.createElement("button");
                                            closeBtn.textContent = "Почни";
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
            "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-size: 16px;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  @media (max-width: 480px) {\n    button {\n      margin: 0 4px 0 0;\n    }\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
        var is = document.createElement("template");
        is.innerHTML = "\n  <button>key</button>\n";
        var ls = document.createElement("template");
        ls.innerHTML = '\n  <div class="spacer"></div>\n';
        var ds = [
                ["љ", "њ", "е", "р", "т", "з", "у", "и", "о", "п", "ш", "ђ"],
                ["а", "с", "д", "ф", "г", "х", "ј", "к", "л", "ч", "ћ", "ж"],
                ["â†µ", "џ", "ц", "в", "б", "н", "м", "â†"],
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
                                                if ((e >= "а" && e <= "ш") || "љ" === e ||  "њ" === e || "ђ" === e ||  "ј" === e || "ћ" === e || "џ" === e ||  "â†" === e || "â†µ" === e) {
                                                    if ((((a = is.content.cloneNode(!0).firstElementChild).dataset.key = e), (a.textContent = e), "â†" === e)) {
                                                        var t = document.createElement("game-icon");
                                                        t.setAttribute("icon", "backspace"), (a.textContent = ""), a.appendChild(t), a.classList.add("one-and-a-half");
                                                    }
                                                    "â†µ" == e && ((a.textContent = "ентер"), a.classList.add("one-and-a-half"));
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
            '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Статистика</h1>\n    <div id="statistics"></div>\n    <h1>Број покушаја</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';
        var Ls = document.createElement("template");
        Ls.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
        var Ts = document.createElement("template");
        Ts.innerHTML =
            '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
        var Is = document.createElement("template");
        Is.innerHTML =
            '\n  <div class="countdown">\n    <h1>Следећа реч</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      Подели <game-icon icon="share"></game-icon>\n    </button>\n  </div>\n';
        // var Ms = { currentStreak: "Current Streak", maxStreak: "Max Streak", winPercentage: "Win %", gamesPlayed: "Played", gamesWon: "Won", averageGuesses: "Av. Guesses" },
        var Ms = { currentStreak: "Тренутни Низ", maxStreak: "Најдужи Низ", winPercentage: "% Победа", gamesPlayed: "Одиграно", gamesWon: "Победа", averageGuesses: "Просек Покушаја" },
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
                                var modeLabel = getGameMode() === "unlimited" ? " (Неограничени)" : " (Дневни)";
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
                                    o.classList.add("no-data"), (o.innerText = "Нема података"), s.appendChild(o);
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
                                        playAgainBtn.textContent = "ИГРАЈ ПОНОВО";
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
                                                        l = "Српски ВОРДЛ ".concat(s);
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
                                                    e.gameApp.addToast("Резултати копирани", 2e3, !0);
                                                },
                                                function () {
                                                    e.gameApp.addToast("Дељење није успело", 2e3, !0);
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
            '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Откриј реч у 6 покушаја.</p>\n      <p>Сваки покушај мора бити валидна реч од 5 слова. Притисни ЕНТЕР за проверу.</p>\n      <p>Након сваког покушаја, боја се мења да би показала колико сте близу тражене речи.</p>\n      <div class="examples">\n        <p><strong>Примери</strong></p>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="ш" evaluation="correct" reveal></game-tile>\n            <game-tile letter="љ"></game-tile>\n            <game-tile letter="и"></game-tile>\n            <game-tile letter="в"></game-tile>\n            <game-tile letter="а"></game-tile>\n          </div>\n          <p>Слово <strong>Ш</strong> је у речи на правом месту.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="т"></game-tile>\n            <game-tile letter="е" evaluation="present" reveal></game-tile>\n            <game-tile letter="с"></game-tile>\n            <game-tile letter="л"></game-tile>\n            <game-tile letter="а"></game-tile>\n          </div>\n          <p>Слово <strong>Е</strong> постоји у речи али је на погрешном месту.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="с"></game-tile>\n            <game-tile letter="л"></game-tile>\n            <game-tile letter="а"></game-tile>\n            <game-tile letter="в" evaluation="absent" reveal></game-tile>\n            <game-tile letter="а"></game-tile>\n          </div>\n          <p>Слово <strong>В</strong> не постоји у речи.</p>\n        </div>\n      </div>\n      <p><strong>Нова реч сваког дана!<strong></p>\n    </div>\n  </section>\n';
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
