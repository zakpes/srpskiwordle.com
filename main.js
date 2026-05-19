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
        Ca("config", "G-2SSGMHY3NP", { app_version: null === (Ea = window.wordle) || void 0 === Ea ? void 0 : Ea.hash, debug_mode: !1 });
        var La = [
            "цркло","шишам","давне","осаке","канџу","мишић","сањан","сарме","лажно","ампер","цмачи","колут","мазда","свели","буђен","гњило","њених","сапун","козом","цесна","будиш","париш","зупцу","мауса","анали","махао","патке","канти","њеног","истру","пацки","љутој","њушке","дерња","копчи","бејби","жрнов","белцу","касом","мазна","зрело","масла","машни","ларви","свађи","марку","фелни","мазан","цирку","бељом","лажна","цимам","копно","цепку","сањај","њакао","задам","истри","мазут","мајор","зрелу","адска","свако","дениц","фенол","лауте","пауза","верне","ланце","обара","флаку","гадом","мазго","компа","бутер","кокну","мањег","патим","мазио","задат","газио","шишах","гажен","зрели","давну","даљег","жуана","ирску","свећа","адско","цирус","даљну","бурад","везеш","пашче","забит","феуди","санти","меден","фишек","клупу","закле","газиш","бусао","фарме","маљом","аласу","меиђи","фацом","карао","шиита","гушче","марша","гњечи","каучи","гњиле","кобру","жућој","деобе","кашље","фирму","сваке","колта","мађар","делту","шинто","паузи","задај","двема","завет","исусу","његов","задро","колор","буцка","вулви","церек","вршцу","мавар","свети","црнац","ланчи","машти","ламин","алата","њушци","бивам","вајна","вашег","свело","биома","двома","ваљку","качио","мејна","мазао","уроша","шизну","копај","финте","бенџа","вајни","датум","сафир","пајки","флака","задан","зубне","њушку","алоје","ланче","ланца","дашку","забио","вериш","антре","верна","шкоди","верну","задњи","марка","зулум","актен","дереш","цркни","кафее","папке","запех","вучја","задра","бујну","нуђен","урану","мејну","гетеу","бунио","фијат","кћери","цесне","отелу","вађен","кафеа","ковао","њиску","бушач","лорки","шизми","љутњи","беџом","ферма","цивил","делаш","иригу","ласом","дрину","колар","обада","заоре","патка","матер","кодна","бесмо","зорта","одесу","гетеа","мачор","кашљи","ириду","лујем","вулву","гогољ","бином","меким","канда","лакат","бешња","њивом","анђео","шипци","сајле","цркле","митар","копне","вашке","изиду","мајки","лаоса","даљој","сауну","цигла","вукао","њушио","маљав","алева","капље","санте","филцу","канте","бунту","деоби","белце","обема","шикља","добој","давим","ваљка","дашка","овчем","коалу","бувин","дедер","ивана","шипом","сарај","мацин","закуј","лазар","сајта","буком","албум","дагње","мачви","фаром","њушни","сафту","адађо","ковач","векну","делић","лампу","фалту","лавић","илији","фирер","машна","пауне","лавра","гарда","гизом","сађен","алоји","даљна","парку","безуб","финог","концу","бенџо","верно","англо","сајли","фајла","амбис","бељег","гадио","карај","остин","дебљу","даљим","њишти","акбар","гњави","шикне","девом","обала","даћеш","амебе","сачми","вучеш","ланеш","црнка","коксу","мачји","госпу","будак","вукли","булки","карти","махом","кокер","пасаж","цитри","шибља","велиш","маори","фиоле","пацер","лаике","аорти","канџа","ваљци","машио","лакну","малта","вршем","широм","дахне","козји","канту","бивао","зурла","зрнца","депоа","љутић","гушћи","шићар","кобни","љуљај","гулаг","кнезу","гадни","гадну","певац","засек","цигле","вудуа","марту","параф","бурек","везне","дебра","колту","кокса","дадох","бисмо","машеш","цисту","гњиду","машта","адути","карму","касир","зовну","заора","маске","вукле","малте","масив","машао","школе","верем","бесне","бешњи","пацке","свему","зарез","шиити","весео","мачки","њеном","шећер","циглу","њушим","копци","давно","шиљци","кмету","дража","вашки","вашом","шиљио","кожну","лиону","дашћу","алову","ириде","вршка","цркао","вучем","везла","цирке","сапне","капка","света","квази","гоген","букве","зуриш","ирске","качиш","изидо","грацу","лавља","давиш","ширит","бурно","булку","нужне","комом","фарси","шишку","вашко","букач","ладно","дизни","њушне","будну","белео","изиди","сасуо","пауна","лављи","амиго","цокиш","алеве","мекан","запео","задах","гушћу","грком","парка","лажну","свеца","вулва","иване","свету","шетач","љутну","ваљак","пасју","дашак","зраци","бејах","маора","бирои","колце","адуте","пауке","квака","цокну","бујан","кожух","бекну","лакеј","зрења","фарбу","анекс","задар","обари","бутну","кашља","сасух","кануу","ширен","санту","бутку","обаре","молох","сатри","шииту","санта","сатрт","данац","патњи","гљиву","фиоци","бедом","лакту","ирска","делти","сваку","фиока","лавов","бушио","циљем","кајак","везуј","шифре","бутна","мањку","певци","кокош","сатру","будне","вучен","гуаму","анала","зубна","љућој","мауче","кајеш","сатом","фелну","лагум","делта","њушка","љуште","љућим","вучна","гњила","дабра","делте","аласе","газду","забох","шетка","копца","касно","ведри","лажов","аката","лакша","ламом","ланац","гљиве","нулти","цепке","деобу","мазги","шијеш","векне","буђав","завих","парим","адски","сајам","бенду","бивше","паузу","везну","сајла","зујав","занео","нутка","везни","булка","свеза","везно","мањак","дахну","дајте","вршиш","махне","црнке","њиска","шкиље","занат","капљи","њишеш","нулту","ваљаш","црква","двора","гњидо","цокће","шибну","мазне","мазно","сведе","жуану","пасле","запио","фарба","пајац","црниш","грофе","конто","вукла","пасус","бирач","марим","белим","мајку","парна","ланом","мазгу","мацом","лаута","фауну","бујне","парам","циљна","жњети","свене","векни","адута","касни","истре","вером","карми","колцу","давни","буран","делао","шибљу","берзу","ираца","сањач","бушим","замре","латим","лаган","будан","мажеш","замки","кмеза","магла","бежим","канио","сатка","циљну","амаму","машћу","забих","веома","кануо","бујаш","бучао","мисир","филом","зорту","азилу","запој","церић","парча","фирма","вашим","копач","замор","цитат","певцу","мазни","фаула","алиби","газом","жњели","истра","парче","бурми","залих","буљав","дучеу","касти","декор","декан","делта","факир","ирану","копцу","бушну","гушио","карме","бушно","феном","зрном","вашку","делиш","бедра","сајту","обади","сатир","гњили","цркла","деблу","замах","везах","нужни","њачеш","гушиш","сауна","машин","козју","зјала","кмера","датог","љутит","лапће","кнеза","пачић","цењен","цесну","давеж","лакши","вршке","зубну","лаких","лувра","сапет","шетње","лавор","фењер","веком","верим","бесно","магле","колом","дедин","ирана","заори","будем","кокао","свежи","дахћу","лаври","колос","бетон","задње","заову","машим","букну","бироу","гадно","копча","дучеа","бироа","кануи","кајем","монте","анода","шизиш","цимне","ланча","црепу","зричу","шипку","љуљаш","паста","бидеу","олгом","депоу","пасје","зраче","заржу","алали","махер","датих","колца","дагњи","кануе","фиолу","касне","шибом","кампу","медна","шкиљи","мажен","лутер","сањам","цепки","алава","пашом","бедро","коком","свеже","кожар","бенда","бечиш","шкамп","певао","милан","шишај","вепру","магом","лавин","амебу","анфас","залио","шипка","монцу","вунен","ланке","берза","мазга","ласта","бесна","замку","алков","ласту","ганџа","латих","папин","давао","копаш","дворе","љутња","данци","дахћи","девер","букте","дрини","ласер","медиј","паран","вежби","бунду","зором","факса","гуњче","лажеш","врчом","запао","замак","жуков","залиј","лампа","шишти","олимп","амеба","биому","копао","кауча","бујна","пачје","аорте","ларму","ануса","лавом","бечио","денга","алеву","фелна","фазом","зуцка","певач","шести","комшо","белић","берем","свађа","дебру","даћом","бибер","цикне","зазор","кобно","завод","бидеа","вршна","газде","кожни","каљав","дахом","венуо","њеној","цичао","двама","каљен","десна","феуду","бурна","буков","свану","биваш","факте","мазну","демон","мацка","мајци","агину","шибаш","даљни","бекне","пацку","катар","вртну","широј","масон","менсу","залив","сарми","драву","ганди","нулто","обаду","копан","врцао","засео","зјапе","даљом","делом","свака","вуном","гуљен","ларма","лењин","лалом","љутог","алама","шизме","факта","ларва","шкоде","шиљку","лувру","цифри","кашаљ","финим","алави","сатне","лилит","вајда","венча","кобна","дадну","касач","даљње","саспу","берзи","амбар","касте","мачва","кафић","цимни","ланци","дебло","масно","нудиш","заова","пашћу","шешир","дрине","марже","флаше","фесом","задрт","фетиш","аноде","кобну","каљао","ваљан","цркви","фазна","денуо","пауни","даван","датом","вучју","патња","оберу","фиоке","вртом","лакта","буљим","масна","касаш","вуков","медом","бувља","бунде","алоју","циљаш","фазне","вукло","вучни","мачем","запет","пачји","букет","шетњу","запну","шипки","бувље","вучне","ларми","кнеже","бербу","берби","шесту","бутке","лиона","канал","илиџа","уралу","цијук","амана","делио","кокам","акрил","верао","феуда","канов","комад","сване","љуљам","двори","црепа","певаш","давна","фиксу","грчке","касну","касна","данца","церим","бербе","букће","цигар","аграр","драви","масну","лаици","оскар","љуљну","гарде","масан","вршац","магме","колац","алеји","галон","филет","патио","каста","делхи","шишке","десно","фалте","гадим","гугла","козак","шкарт","обасу","амбру","папир","апела","карма","љуљао","вежем","осака","омегу","ведра","црнки","папан","алтом","фарсу","двери","запад","берач","љутих","свеце","дерао","мачву","кајах","конта","мачја","парај","циком","каљам","азила","велом","копце","гуњом","душан","патки","вашем","каниш","фалти","аноду","вршља","факту","ваших","љутњу","завео","шетао","мачке","цмаче","бучни","маште","замео","делим","ибија","пасту","мадам","њеним","азили","ирака","цркох","зажди","гњилу","деоба","драчу","залог","нужду","љутиш","љућом","кајас","љушти","урана","бучан","жућим","ноћну","нулом","велур","агрум","лапис","ширем","кожне","шетам","црвен","патиш","веном","саспе","мекет","везен","букне","венцу","конус","ваљам","мачка","мајке","магму","црвља","олдос","магма","масер","обаве","гушће","анусе","мањих","залет","медне","паљбу","сањив","бежао","нужна","ланцу","букћу","мајко","карте","берзе","ведар","булке","кафом","везло","бирам","вршку","занос","бунта","вршци","дебље","делуј","федер","дебла","пашин","пачја","шикну","алати","цокћу","гњиди","њихао","зубат","фазон","везем","ирцем","свега","малту","бившу","даљња","завој","залуд","певах","њихов","саших","берба","охајо","кожна","галеб","газда","вршне","дедал","анале","комби","давио","алкос","вршца","мазиш","задњу","зрнце","венем","биран","заови","шихта","саспи","везан","цимао","врчем","бечки","сањао","лавре","капља","цичим","зарио","бивак","цинка","сафта","зовни","лажне","гадан","аноди","дадем","либан","шијом","азиле","фарми","бирое","шиљка","зовне","пацка","конац","паљен","нудим","цепти","маржу","обере","ирида","зубац","маљем","алоја","вршен","одину","сајма","капом","бутне","зрела","зарђа","буном","вереш","бедну","дебљи","амама","дунав","дедом","ларме","шихту","шкода","кобри","дерби","лажем","зупца","магов","ироду","капку","певам","ганџе","дањег","бушне","врљав","финих","аниса","ласти","ирско","земун","фитиљ","парем","гамад","свађе","карам","караш","зариј","велик","финту","верен","фауни","фијук","фалта","гарди","бенџу","циљни","парао","вјеки","урошу","марта","вајне","гњече","белом","запис","свела","шефом","пасеш","паљби","ганга","дебља","дашће","обеде","обеду","пауну","сарму","гареж","карту","бељој","цокне","десни","зубни","сахиб","певца","машиш","бепче","циста","кобре","парох","широк","бесни","нужде","будим","ведру","папом","кампа","капке","конце","вршим","замро","фарбе","цимај","врућу","везом","букти","драве","кашће","пасла","шипчи","задру","изида","макиш","кокос","ласка","фенси","фешту","вежбу","факти","обесе","бингу","дедов","алеја","црним","шифра","филца","макац","обали","кауре","лапћу","замке","шеташ","завио","фалио","циљан","исаку","осаку","денди","бурму","њухом","букви","вафла","жућих","шибао","ириди","сатро","факсу","белог","њутна","закон","канон","зарад","гушим","црвић","ираку","бивши","свеле","циљао","мањка","амове","мазда","шиште","одесе","депои","врцка","белци","адске","алтер","папка","цмачу","изиде","галоп","пасти","деран","вергл","шизма","лаика","шибан","бучну","кауче","фецес","бувљу","бупне","цифре","закла","сајлу","копка","зубом","канџи","бизон","илири","пауку","бесну","папци","бучна","сауне","шипче","маљен","сашио","зомби","денем","бивша","минск","пасош","зуцне","црном","гуњем","цепка","ведро","њиске","шетај","биста","зарза","зупци","каска","пауци","цинку","актом","врхом","двору","ланчу","мачје","фићом","алвом","финта","цисте","кобне","монеа","зрачи","бехар","дахау","парне","декин","шифри","обале","амбре","сапео","козја","вулве","амови","капљу","амура","орион","канџе","капну","анкер","газдо","замка","белац","цифра","давид","мачве","алату","фешта","кобра","сајму","вајат","кмете","фарму","марко","бутни","машем","давши","аласи","свата","бурме","делај","дахће","фирме","илије","будно","обеда","засад","паљба","љуљне","шишао","фикус","верио","задаш","акреп","медни","акорд","патње","махну","цимет","бежах","коноп","кобан","копче","лануо","шином","бељем","дајеш","санки","сатни","задао","масти","биком","бешње","анусу","свежа","масци","двеју","зрака","дајмо","бекап","њиште","гљиви","газди","даљњи","илиџу","њушко","дебар","лавље","амиџа","зурли","њезин","запни","гануо","запах","занех","карго","вршак","копни","ганеш","нужну","везна","актив","исака","певце","финој","аларм","вршио","дабру","капаш","конци","алачу","гасим","нужда","аорта","колач","ширим","мањим","зупце","лажју","љутио","фауна","гардо","зјале","актер","свали","бурни","зуцну","оазом","сахат","цреву","шесто","зовом","шипке","цикну","газим","буква","церио","мачју","сваки","гадиш","одине","лаком","матор","качен","љућих","ширих","фирца","бедру","циљно","гуглу","ибром","фирми","каури","занет","цркну","камом","фајлу","масне","вукох","гасио","бесом","црево","дерем","вучји","бучне","дезен","медно","маглу","марио","бунар","алеје","везир","бусаш","масом","цркве","цериш","вруће","данце","заиру","венци","марса","нудио","гадне","копна","нужно","вуком","вежбе","ковит","гушом","фарма","сатић","макао","циљне","жњеле","сањар","фарса","вучну","врућа","његош","алком","даљне","шејка","певан","буцом","илија","будио","десне","бинга","марку","медну","факат","љућем","шибај","зољом","каном","зурио","вртне","кодом","шибер","зурле","шињел","мачку","замци","сарма","марке","зурим","мосад","везао","буцко","девет","бушни","алате","омеге","меких","двају","патку","бураг","маркс","маших","њушну","сатре","орвел","ганем","флаши","пасло","береш","пасте","вежеш","параш","лакше","њутну","вајде","будеш","клупи","азоти","филма","паузе","греја","кашљу","цирка","пасат","бечка","бусом","копам","задња","ускрс","зуцни","закуп","лаосу","зубар","ирода","сачма","њушки","ваљао","сачму","бидон","сачме","гаром","дерле","кануа","мачко","машне","зујим","бирај","клупа","канап","милош","велим","зоном","илире","машам","минос","илиџе","зарих","свест","љутне","зовин","запне","дајем","кафеу","драже","цеђен","фемка","каљаш","дадне","алаву","датој","заром","венеш","ганџи","даире","лакој","сахне","млави","филму","замру","кајте","алеју","гњиде","пасао","мајао","лажан","сатен","венце","шибам","шипак","патак","зрење","гарав","двоја","млеци","качим","вртно","монца","њушиш","шиите","канта","шиљке","будни","ларву","кожом","свари","веруј","заира","ласте","цигли","мајка","бучно","капао","конца","алкар","ланки","агино","феуде","црева","пасја","забиј","бупну","бељих","шишки","свађу","масни","циник","касао","њишем","мурат","љућег","бутан","фарсе","жућом","млава","белај","кодни","колаж","мањем","пасуљ","врући","зрењу","паљбе","касту","клупе","школи","кајао","илију","дивац","малти","гасиш","исусе","љутње","њисну","венца","свеци","лабав","одина","парни","сарач","мањом","бурну","патос","вајаш","буниш","циљам","бунца","шибље","лаким","капци","маржи","бираш","капак","цифру","лагао","марсе","газих","вашој","шкоду","коала","магми","машну","шифру","фелне","кмечи","дебил","вашар","белих","индус","кобац","даљно","зевсу","пасом","белца","махни","ганџу","гњида","кокне","шијем","азоту","вепар","ларве","фалус","илијо","зраку","адуту","патњу","буром","исуса","азота","лакне","лавеж","кафеи","одеси","паука","цркли","бујни","даира","осаки","цимну","флаша","пањић","ваљда","цимаш","лабуд","цркне","обалу","вајду","лаику","црнео","вебом","обави","пањем","зујао","сањаш","бенав","шизим","зарон","мосул","шефов","сасут","бушан","дрина","даљих","бирао","црвом","маски","бурма","дучић","нужди","катун","илира","ширег","гљива","црних","аласа","масло","ведре","ваљке","финиш","адску","маурт","заове","марки","свете","цркву","врцав","цицом","мазим","гњура","шетња","кожно","кањон","фазну","илиџи","сваре","аорту","цичиш","орсон","свежу","масат","ганут","вајао","векна","бусен","азура","верни","капче","шилом","парио","циљај","бидне","карта","црног","дадни","козје","бечке","маска","орфеј","вепре","ивану","зреле","охрид","шириш","вашка","шибне","даљем","бисер","биков","букву","амиџу","жуане","феште","парип","грков","гргур","гњаве","марсу","лампе","гадна","дабар","црнку","колеџ","деком","сауни","вршни","зјапи","одеон","шивен","вежба","макар","шиљат","вучно","фазан","дебео","бунди","зубић","сведу","цимер","нулте","фетус","маску","зраке","будна","марка","мајур","овчег","капне","бутик","фазно","амова","обаде","бељим","гарду","конак","нужан","бујно","веган","парну","зевса","шишач","каучу","маршу","свале","црној","саћем","мажем","лаког","школа","љутом","белег","свето","мацан","зрило","кмета","венац","кмече","алиас","бунда","вепра","зарже","бесан","делам","бутом","мачић","вучом","вучје","драча","капут","белој","бинго","кодно","ширио","вајка","шетњи","колан","копну","бушен","алаво","веран","бујао","бећар","вјешт","њиово","шизио","бушна","фауне","лакшу","вафле","задре","кваке","машту","забат","вајар","одеса","бубњу","мачак","вршну","данте","цесни","ленон","лампи","црнио","гујом","вучић","дидро","десио","латио","кован","мајем","шиљак","пашће","ваљај","алаве","шизео","парно","лепин","бечку","буним","каром","бивол","десет","певај","пацов","латиш","шишаш","габор","сахну","цесар","фарби","шишан","паром","нулта","лавру","фазни","кашом","лављу","фиоку","мањој","мазге","пасли","мариш","фином","двоје","бежиш","бурне","сачом","пасји","лажни","колао","везле","бушиш","гушћа","њисак","кникс","дањем","морзе","магли","вртни"
            ],
            Ta = [
            "абвер","авала","авале","авали","авалу","авара","аваре","авари","авеља","авељу","авива","авиву","аврам","агата","агате","адама","адаме","адаму","адолф","азија","азије","азији","азију","алаха","алаху","алжир","алфин","алфом","амону","амора","амору","амуру","анино","апача","апаче","апачи","апачу","аписа","апису","апола","аполо","арада","арапа","арапе","абера","абере","абери","аберу","авакс","авана","авани","аванс","авану","авети","авион","агава","агаве","агави","агаву","агама","агапе","агенс","агент","агина","агине","агини","апеле","апели","апелу","апоен","април","аргон","арена","арене","арени","арену","ариша","ариши","арија","арије","арији","арију","арком","арома","ароме","ароми","арому","арсен","архив","арчио","аршин","асова","асове","асови","астал","астма","астме","астми","астму","асура","асуре","асури","асуру","атаку","атара","атаре","атари","атару","атаци","аташе","атест","атеље","атлас","атова","атове","атови","атола","атоли","атолу","атома","атоме","атоми","атому","аудио","ауром","аутић","аутом","аутор","афект","афера","афере","афери","аферу","ахата","ашова","ашове","ашови","ашову","ајвар","ајнца","ајнцу","аљкав","бабац","бабин","бабом","бабун","бабља","бабље","бабљи","бабљу","бавим","бавио","бавиш","багер","багра","багре","багри","багро","багру","бадем","бадња","бадње","бадњи","бадњу","базам","базао","базар","базде","базди","базен","базна","базне","базни","базно","базну","базом","бакар","бакин","баком","бакра","бакру","бакља","бакље","бакљи","бакљу","бакће","бакћу","балав","балет","балим","балио","балиш","балом","балон","банда","банде","банди","бандо","банду","банем","банер","банеш","банка","банке","банки","банку","банов","бануо","банух","банци","банче","банчи","бапне","бапну","бапца","бапце","бапци","бараж","барда","барду","барел","барем","барен","баржа","барже","баржи","баржу","барим","барио","барка","барке","барки","барку","барок","баром","барон","барут","барци","басен","басма","басме","басми","басна","басне","басни","басну","басом","батак","батом","баука","бауке","бауку","бауци","бауља","бахат","бацам","бацан","бацао","бацач","бацаш","бацај","бацил","бацим","бацио","бацих","бациш","бачва","бачве","бачви","бачву","бачен","башка","башта","баште","башти","башту","бајан","бајао","бајат","бајем","бајеш","бајка","бајке","бајки","бајку","бајна","бајне","бајни","бајно","бајну","бајом","бајса","бајсу","бајта","бајте","бајци","бањам","бањом","бдела","бделе","бдели","бдело","бдети","бдења","бдење","бдењу","бдила","бдили","бдило","бдимо","бдите","бдити","бдије","бдију","бебац","бебин","бебом","бегам","бегао","бегаш","бегај","бегов","бегом","бедак","бедан","бедем","бедна","бедне","бедни","бедно","бисте","бисти","бисту","битан","битка","битке","битки","битку","битна","битне","битни","битно","битну","бифеа","бифеи","бифеу","бичем","бичуј","бијем","бијен","бијеш","бијте","биљем","биљка","биљке","биљки","биљку","биљна","биљне","биљни","биљно","биљну","биљур","биљци","бићем","бићеш","блага","благе","благи","благо","благу","блажа","блаже","блажи","блажу","блата","блате","блати","блато","блату","бледа","бледе","бледи","бледо","бледу","блене","блену","блеса","блесе","блеси","блесу","блефа","блефу","блеђа","блеђе","блеђи","блеђу","блеје","блеји","ближа","ближе","ближи","ближу","близа","близу","блица","блицу","блога","блогу","блока","блоку","блуда","блуде","блуди","блуду","блуза","блузе","блузи","блузо","блузу","бобом","бовом","богат","богаљ","богме","богом","бодар","бодеж","бодем","бодеш","бодом","бодра","бодре","бодри","бодро","бодру","бодља","бодље","бодљи","бодљу","боема","боеме","боеми","боему","божур","божја","божје","божји","божју","боинг","бокал","боком","бокор","бокса","боксу","болан","болео","болид","болна","болне","болни","болно","болну","болом","бомба","бомбе","бомби","бомбу","боном","бонус","борац","борба","борбе","борби","борбу","бордо","борик","борим","борио","борих","бориш","борић","борна","борне","борни","борну","боров","бором","борца","борце","борци","борцу","боршч","босим","босих","босог","босом","бости","боцка","боцне","боцни","боцну","боцом","бочна","бочне","бочни","бочно","бочну","бојао","бојар","бојах","бојем","бојен","бојим","бојио","бојиш","бојна","бојне","бојни","бојно","бојну","бојом","бојте","бољар","бољег","бољем","бољим","бољих","бољка","бољке","бољки","бољку","бољом","бољој","бољци","брава","браве","брави","браво","браву","брада","браде","бради","браду","брака","браку","брала","брале","брали","брало","брана","бране","брани","брано","брану","браон","брата","брате","брати","брату","браца","браце","брацо","брацу","брања","брање","брању","браћа","браће","браћи","браћо","браћу","брбот","брбља","брвна","брвно","брвну","брдом","брега","брегу","бреза","брезе","брези","брезу","бреме","бренд","брест","бреца","бреша","бреше","бреши","брешу","бржег","бржем","бржим","бржих","бржом","бржој","брзак","брзам","брзао","брзаш","брзај","брзим","брзих","брзог","брзом","брзој","брига","бриге","бригу","бриде","бриди","бриду","бризи","брине","брини","брину","бриса","брису","брица","брице","брицу","брише","бриши","бришу","брије","брију","бриџа","бриџу","бркам","бркао","бркат","бркаш","бркај","брком","брлог","брода","броде","броди","броду","брома","брому","броша","брошу","броја","броје","броји","броју","брсте","брсти","брука","бруке","бруку","бруса","брусе","бруси","брусу","бруто","бруха","бруци","брује","бруји","брчић","брчка","брљао","брљаш","брљив","брљом","бубам","бубао","бубаш","бубањ","бубин","бубна","бубне","бубну","бубом","бубре","бубри","бубња","бубњи","буљио","буљиш","буљом","буљон","буљук","бућка","бућку","бућне","бућну","буџак","буџет","буџиш","буџом","бјуик","бљуне","бљуну","бљује","бљују","вабиш","вагам","ваган","вагао","вагом","вагон","вадим","вадио","вадиш","важан","важим","важио","важиш","важна","важне","важни","важно","важну","вазал","вазда","вазом","вакуф","валов","вапај","вапим","вапио","вапиш","варам","варан","варао","варах","вараш","варај","варим","варио","вариш","варка","варке","варки","варку","варош","варци","ватам","ватом","ватра","ватре","ватри","ватру","весла","весло","веслу","веспа","веспе","веспи","веспу","вести","ветар","ветра","ветре","ветри","ветру","вечан","вечит","вечна","вечне","вечни","вечно","вечну","вешам","вешан","вешао","вешаш","вешом","вешта","веште","вешти","вешто","вешту","вешца","вешце","вешци","вешцу","вешче","вешћу","вејао","већам","већао","већаш","већег","већем","већим","већих","већма","већом","већој","видан","видар","видаш","видеа","видео","видеу","видех","видик","видим","видиш","видна","видне","видни","видно","видну","видом","видра","видре","видри","видру","вижља","визир","визит","визна","визне","визни","визно","визну","визом","викао","викар","викне","викни","викну","виком","вилин","вилом","винар","винга","винем","винеш","винил","винов","вином","винуо","винца","винце","виола","виоле","виоли","виолу","вираж","вирим","вирио","вириш","вирка","вирне","вирну","виром","вирус","висак","висим","висио","висиш","виска","виске","виски","висок","витак","витез","витка","витке","витки","витко","витку","витла","витло","витлу","вихор","вицем","вичан","вичем","вичеш","вична","вичне","вични","вично","вичну","вишак","вишег","вишем","вишим","виших","вишка","вишку","вишом","вишој","вишња","вишње","вишњи","вишњу","виђам","виђан","виђао","виђаш","виђај","виђен","вијак","вијам","вијао","вијаш","вијка","вијке","вијци","вињак","влага","влаге","влаги","влагу","влада","владе","влади","владу","влаже","влажи","влази","власи","власт","влати","влаше","водам","водао","водах","водаш","водај","водим","водио","водих","водич","водиш","водна","водне","водни","водно","водну","водом","вожда","вожду","вожен","вожња","вожње","вожњи","вожњу","возам","возао","возар","возач","возаш","возим","возио","возиш","возић","возна","возне","возни","возно","возну","возом","вокал","волан","волво","волео","волех","волим","волиш","волом","волта","волти","восак","воска","воску","вотка","вотке","вотки","вотку","вошти","вођен","вођин","вођом","војна","војне","војни","војно","војну","вољан","вољен","вољна","вољне","вољни","вољно","вољну","вољом","воњао","воњаш","воњем","воњом","воћар","воћем","воћка","воћке","воћки","воћку","воћна","воћне","воћни","воћно","воћну","врага","врагу","враже","врана","вране","врани","врану","врата","врате","врати","врату","врача","врачи","врачу","врање","враћа","врбак","врбин","врбов","врбом","врбуј","врвео","врвио","вргањ","врдам","врдао","врдаш","врдај","врдне","врдну","вреба","врева","вреве","вреви","вреву","вреде","вреди","врежа","вреже","врела","вреле","врели","врело","врелу","време","вреса","вресу","вређа","врења","врење","врењу","врећа","вреће","врећи","врећо","врећу","врзла","врзле","врзло","врзма","врила","вриле","врило","врити","врлет","врлим","врлих","врлог","врлом","врлој","врпца","врпце","врпци","врпцу","врсна","врсне","врсни","врсно","врсну","врста","врсте","врсти","врсту","вртео","вртим","вртиш","вртић","вртна","гасна","гасне","гасни","гасно","гасну","гасом","гатам","гатао","гаташ","гатај","гацам","гацао","гацаш","гашен","гађам","гађан","гађао","гађаш","гађај","гајба","гајбе","гајби","гајбу","гајде","гајди","гајем","гајен","гајим","гајио","гајиш","гајка","гајке","гајки","гајку","гањам","гањао","гањаш","гаџет","гвинт","гвири","гдеко","гегав","гегам","гегао","гегах","гегаш","гегај","гекне","гекну","гелер","гелом","гениј","геном","гепек","гесла","гесло","геста","гесту","гетоа","гетом","гејша","гејше","гејши","гејшу","гибак","гибао","гинем","гинеш","гинка","гинко","гинуо","гипка","гипке","гипки","гипко","гипку","гипса","гипсу","гихта","глава","главе","глави","главо","главу","гладе","глади","гланц","гласа","гласе","гласи","гласу","глача","глађа","глађе","глађи","глађу","гледа","гледе","глеђи","глиба","глибу","глина","глине","глини","глину","глоба","глобе","глоби","глобу","глога","глогу","гложе","гложи","глође","глођу","глува","глуве","глуви","глуво","глуву","глума","глуме","глуми","глуму","глупа","глупе","глупи","глупо","глупу","гмаза","гмазу","гмиже","гмижу","гнева","гневе","гневи","гневу","гноме","гноми","гному","гноја","гноје","гноји","гноју","гнуша","говна","говно","говор","годио","гозба","гозбе","гозби","гозбу","голаћ","голем","голет","голим","голих","голог","голом","голој","голуб","голфа","голфу","гонга","гоним","гонио","гонич","гониш","горак","горда","горде","горди","гордо","горду","горег","горем","горео","горим","горих","гориш","горка","горке","горки","горко","горку","гором","горој","горча","горче","горчи","горчу","горја","горје","горња","горње","горњи","горњу","госпа","госпе","госпи","госпо","госпу","госта","госте","гости","госту","готик","готов","гошћа","гошће","гошћи","гошћо","гошћу","гојим","гојио","гојиш","гољин","гољом","гоњен","грабе","граби","града","граде","гради","граду","грала","гралу","грама","грами","граму","грана","гране","грани","грану","грађа","грађе","грађи","грађу","граја","граје","граји","грају","грања","грање","грању","грбав","грбио","грбом","гргеч","гргља","грдан","грдим","грдио","грдих","грдиш","грдна","грдне","грдни","грдно","грдну","грдња","грдње","грдњи","грдњу","гребе","греби","гребу","греда","греде","греди","греду","греси","греха","грехе","греху","греше","греши","греје","греју","грива","гриве","гриви","гриву","грижа","гриже","грижи","грижу","гриза","гризе","гризи","гризу","грипа","грипу","гриња","гриње","грлат","грлен","грлим","грлио","грлиш","грлић","грлом","грмаљ","грмео","грмне","грмну","грмом","грмља","грмље","грмљу","гроба","гробу","грога","гроги","гроза","грозд","грозе","грози","грозу","грома","грому","грофа","грофе","грофу","гроша","груба","грубе","груби","грубо","грубу","грува","груда","груде","груди","груду","груне","груну","група","групе","групи","групо","групу","груша","грцав","грцам","грцао","грцах","грцаш","грцај","грчем","грчим","грчио","грчиш","грчка","грчке","грчки","грчко","грчку","грчом","грђег","грђем","грђим","грђих","грђом","грђој","губав","губер","губим","губио","губиш","губом","гудим","гужва","гужве","гужви","гужву","гузим","гузио","гузиш","гузна","гузне","гузни","гузно","гузну","гузом","гукао","гукне","гукни","гукну","гулаг","гулаш","гулим","гулио","гулиш","гумна","гумно","гумну","гумом","гунђа","гурав","гурам","гуран","гурао","гураш","гурај","гурка","гурке","гурне","гурни","гурну","гуруа","гуруе","гуруи","гуруу","гусан","гусар","гуска","гуске","гуски","гуско","гуску","гусле","густа","густе","густи","густо","густу","гутам","гутао","гутач","гуташ","гутај","гутну","гуцне","гуцни","гуцну","гучем","гушао","гушен","дакле","далај","далек","дамар","дамин","дамом","данак","данас","данка","данку","даном","дануо","даром","даруј","даска","даске","даски","даско","даску","дасом","дасци","датим","десну","детаљ","децом","дечак","дечка","дечки","дечко","дечку","дечја","дечје","дечји","дечју","дељао","дељем","дељен","дељеш","дељив","дењак","дењка","дењку","дењци","диван","диваљ","дивим","дивио","дивиш","дивна","дивне","дивни","дивно","дивну","дивов","дивом","дивља","дивље","дивљи","дивљу","дигао","дигла","дигле","дигли","дигло","дигне","дигни","дигну","дигох","дижем","дижеш","дизан","дизао","дизач","дизел","дизна","дизне","дизни","дизну","дилдо","дилду","дилер","димим","димио","димна","димне","димни","димну","димом","динар","дином","диода","диоде","диоди","диоду","дирам","диран","дирао","дираш","дирај","дирек","дирка","дирке","дирки","дирку","дирне","дирни","дирну","дисао","диска","диско","диску","дичан","дичим","дичио","дичиш","дична","дичне","дични","дично","дичну","дишем","дишеш","дињом","длака","длаке","длаку","длана","длану","длаци","длета","длето","длету","добар","добио","добит","добих","добом","добош","добра","добре","добри","добро","добру","довде","довео","довод","довоз","догма","догме","догми","догму","догод","додам","додао","додат","додах","додаш","додај","додир","дозва","дозна","дозом","доказ","докле","доком","докон","долар","долет","долио","долих","долиј","домак","домар","домен","домет","домом","донде","донео","донет","донех","донор","допао","допис","допре","допро","допру","дорат","досад","доспе","доспу","доста","досуо","досут","дотад","дотле","доток","доуче","доучи","дочек","дочуо","дошао","дошла","дошле","дошли","дошло","дођем","дођеш","дођох","дођош","дојен","дојим","дојка","дојке","дојки","дојку","дојци","доњег","доњем","доњим","доњих","доњом","доњој","драга","драге","драги","драго","драгу","дража","драже","дражи","дражу","драла","драле","драли","драло","драма","драме","драми","драму","драти","драјв","драња","драње","дрању","драће","драћу","дрвар","дрвен","дрвна","дрвне","дрвни","дрвно","дрвну","дрвом","дрвца","дрвце","дрвља","дрвље","дрвљу","дрека","дреке","дреку","дрема","дрена","дреса","дресу","дреци","дречи","дреше","дреши","држак","држан","држао","држах","држач","држим","држиш","дрзак","дрзне","дрзну","дркам","дркан","дркао","дркаш","дркај","дркош","дрмам","дрмао","дрмах","дрмаш","дрмај","дрмне","дрмну","дрнда","дроба","дробе","дроби","дрога","дроге","дроги","дрогу","дрозд","дрона","дроца","дроце","дроцо","дроља","дроље","дрољи","дрољо","дрољу","дрпам","дрпао","дрпај","дрпеж","дрпим","дрпио","дрпне","дрпну","дрска","дрске","дрски","дрско","дрску","друга","друге","други","друго","другу","друже","дружи","друид","друма","друму","дрхте","дрхти","дрхће","дрхћи","дрхћу","дрчан","дрчна","дрчне","дрчни","дрчно","дрчну","дршка","дршке","дршки","дршку","дршци","дршће","дршћи","дршћу","дрљав","дрљам","дрљао","дрљај","дубим","дубио","дубок","дубља","дубље","дубљи","дубљу","дувам","дуван","дувао","дувар","дувач","дуваш","дувај","дугим","дугин","дугих","дугме","дугог","дугом","дугој","дудла","дудов","дудом","дудук","дуела","дуеле","дуели","дуелу","дуета","дуете","дуети","дуету","дужан","дужда","дужду","дужег","дужем","дужим","дужих","дужна","дужне","дужни","дужно","дужну","дужом","дужој","дукат","дукса","дуксу","думао","дунем","дунеш","дунуо","дунух","дупке","дупла","дупле","дупли","дупло","дуплу","дупља","дупље","дупљи","дупљу","дурим","дурио","дуриш","духом","душек","душом","дуњом","дућан","ђилас","ђорђа","ђорђе","ђорђу","ђурађ","ђурђа","ђаком","ђакон","ђауре","ђаури","ђачић","ђачка","ђачке","ђачки","ђачко","ђачку","ђемом","ђерам","ђерма","ђерму","ђипам","ђипао","ђипаш","ђипај","ђипим","ђипио","ђипих","ђипиш","ђоком","ђоном","ђубре","ђубри","ђувеч","ђулад","ђуска","ђуску","ебола","еболе","еболи","еболу","евнух","егзил","едема","едикт","екипа","екипе","екипи","екипу","екран","ексер","екцем","елана","елану","елиса","елисе","елиси","елису","елита","елите","елити","елиту","емајл","емира","ензим","еоцен","епарх","епика","епике","епици","епова","епове","епови","епоси","епоха","епохе","епохи","епоху","епска","епске","епски","епско","епску","ерлов","ерлом","есера","есере","есери","есеја","есеје","есеји","есеју","еснаф","етажа","етаже","етажи","етажу","етапа","етапе","етапи","етапу","етера","етика","етике","етику","етици","етнос","етром","ефект","евина","евину","егеја","едипа","едипу","елбом","елвис","еноха","епира","епиру","ервин","ероса","еросу","еским","етном","жабар","жабац","жабин","жабом","жабља","жабље","жабљи","жабљу","жагор","жадом","жакет","жалац","жалба","жалбе","жалби","жалбу","жалим","жалио","жалиш","жална","жалом","жалца","жамор","жанра","жанру","жаока","жаоке","жаоку","жаоци","жапца","жапце","жапци","жапцу","жапче","жарач","жарен","жарио","жариш","жарка","жарке","жарки","жарко","жарку","жарна","жарни","жаром","жацне","жацну","жаљен","жањем","жањеш","жбира","жбири","жбиру","жбица","жбице","жбицу","жбуна","жбуну","жбуња","жбуње","жбуњу","жвака","жваке","жваки","жваку","жвала","жвале","жваће","жваћи","жваћу","жврља","жгебе","жгоља","жгоље","жгољи","жгољо","жгољу","ждера","ждере","ждери","ждеру","ждрал","ждрао","жегла","жегло","жегом","жедан","жедна","жедне","жедни","жедно","жедну","жезла","жезло","жезлу","желеа","желеи","желео","желеу","желим","желиш","женим","женин","женио","жениш","женка","женке","женки","женко","женку","женом","жесте","жести","жетва","жетве","жетви","жетву","жетон","жешћа","жешће","жешћи","жешћу","жељан","жељен","жељна","жељне","жељни","жељно","жељну","жељом","жењен","живац","живаљ","живео","живим","живин","живих","живиш","живне","живни","живну","живог","живом","живот","живој","живца","живце","живци","живцу","живља","живље","живљи","живљу","жигао","жигне","жигну","жигом","жижак","жижна","жижне","жижни","жижно","жижну","жилав","жилет","жилом","жиром","житељ","житка","житке","житки","житко","житку","житна","житне","житни","житно","житну","житом","жицом","жичке","жички","жичку","жичне","жишка","жишке","жишки","жишку","жишци","жлеба","жлебу","жмири","жмуре","жмури","жрвањ","жрвња","жрвње","жрвњи","жрвњу","жреба","жреца","жреце","жреци","жрецу","жртва","жртве","жртви","жртво","жртву","жубор","жудан","жудео","жудим","жудио","жудиш","жудна","жудне","жудни","жудно","жудну","жудња","жудње","жудњи","жудњу","жупан","журан","журба","журбе","журби","журбу","журим","журио","журиш","журка","журке","журки","журку","журна","журне","журни","журно","журну","журци","жутео","жутим","жутих","жутог","жутом","жутој","жучан","жучна","жучне","жучни","жучно","жучну","жуљао","жуљио","жуљић","жућег","жућем","засеј","заспа","заспе","заспи","заспу","засро","заста","засун","засуо","засут","засух","засја","затим","затон","затре","затри","затро","затрт","затру","заузе","зачас","зачео","зачет","зачин","зачне","зачну","зачуо","зачух","зашао","зашио","зашиј","зашла","зашле","зашли","зашло","зашлу","зашто","зађем","зађеш","зађох","зајам","зајеб","зајма","зајме","зајми","зајму","збаце","збаци","збега","збегу","збива","збила","збиле","збили","збило","збира","збиру","збити","збише","збија","збије","збију","збиља","збиље","збиљи","збиљу","збиће","збора","зборе","збори","збору","збрда","збрза","збрка","збрке","збрку","збрци","збуне","збуни","звала","звале","звали","звало","звана","зване","звани","звано","звану","звати","зваху","зваше","звања","звање","звању","зваће","зваћу","звека","звеке","звеку","звера","звери","зверу","звече","звечи","звона","звоне","звони","звоно","звону","звоца","зврје","зврји","звука","звуке","звуку","звуци","звуче","звучи","згаде","згади","згазе","згази","зглоб","згода","згоде","згоди","згоду","згрби","згрне","згрну","згрте","згрче","згрчи","згрће","згрћу","згуза","згуле","згули","здања","здање","здању","здела","зделе","здели","зделу","здера","здере","здипи","здрав","здрао","зебао","зебем","зебеш","зебла","зебле","зебли","зебра","зебре","зебри","зебру","зебња","зебње","зебњи","зебњу","зевам","зевао","зеваш","зевај","зевне","зевну","зевом","зезам","зезао","зезаш","зезај","зезне","зезну","зекан","зеком","зелен","земна","земне","земни","земно","земну","земља","земље","земљи","земљо","земљу","зенит","зероа","зерое","зерои","зероу","зетов","зетом","зецом","зечић","зечја","зечје","зечји","зечју","зељем","зивка","зигот","зидам","зидан","зидао","зидар","зидаш","зидић","зидна","зидне","зидни","зидно","зидну","зидом","зилот","зимом","зимус","зинем","зинеш","зинуо","зинух","зицер","зијам","зијао","зијаш","зијај","злата","злате","злато","злату","злима","злоба","злобе","злоби","злобу","злога","злоћа","злоће","злоћи","злоћо","злоћу","змаја","змају","змија","змије","змији","змијо","змију","знаде","знаду","знака","знаке","знаку","знала","знале","знали","знало","знамо","знана","знане","знани","знано","знану","знате","знати","знаци","значе","значи","знају","знања","знање","знању","знаће","знаћу","зноја","зноје","зноји","зноју","зобао","зобљу","зовем","зовеш","итака","итаке","итаки","итаку","ифска","ифске","ифску","ибиса","ибрик","ивера","ивере","ивери","ивица","ивице","ивици","ивицу","игала","игара","иглоа","иглом","иглоу","играм","игран","играо","играч","играш","играј","игром","идеал","идемо","идете","идеја","идеје","идеји","идеју","идила","идиле","идили","идилу","идиом","идиот","идите","идола","идоле","идоли","идолу","идућа","идуће","идући","идућу","иживе","иживи","изађе","изађи","изађу","изаћи","избио","избих","избиј","избор","изван","извео","извио","извих","извиј","извод","извоз","извор","изгна","изгон","издам","издан","издао","издат","издах","издаш","издај","издра","изиђе","изиђи","изиђу","изићи","излаз","излет","излив","излио","излих","излиј","излог","измет","изнад","изнео","изнет","изнех","износ","изоси","израз","изрез","изрод","изува","изула","изуле","изули","изума","изуме","изуми","изуму","изути","изуче","изучи","изуше","изује","изују","изуће","изућу","изјео","икада","икако","икога","икоме","икона","иконе","икони","икону","икром","икуда","имаде","имала","имале","имали","имало","имама","имами","имамо","имате","имати","имаху","имаше","имају","имања","имање","имању","имаће","имаћу","имбус","имеле","имена","имену","имејл","имиџа","имиџу","имуна","имуне","имуни","имуно","имуну","ината","инати","инату","иначе","ирвас","ирска","ирске","ирски","ирско","ирску","исеку","иселе","исели","исере","исеру","исеца","исеци","исече","исећи","исиса","исказ","искап","ископ","искра","искре","искри","искру","ислам","испад","испао","испео","испио","испис","испит","испих","испиј","испне","испод","испра","исрао","исрах","истек","истим","истих","истка","истог","исток","истом","истој","иступ","исука","исуци","исуче","исучи","исучу","исуше","исуши","исход","ичега","ичему","ичија","ичије","ичији","ичију","ишара","ишета","ишиба","ишопа","иштем","иштеш","ишуња","иђаху","иђаше","јалте","јалти","јалту","јанус","јапан","јахве","јајцу","јемен","јован","јозеф","јосип","јосиф","јудин","јунга","јуриј","јаван","јавим","јавио","јавих","јавиш","јавна","јавне","јавни","јавно","јавну","јавом","јавор","јавља","јагма","јагме","јагми","јагму","јагње","јадам","јадан","јадао","јадац","јадаш","јадај","јадна","јадне","јадни","јадно","јадну","јадом","јазом","јаким","јаких","јакна","јакне","јакни","јакну","јаког","јаком","јакој","јалов","јамом","јамче","јамчи","јанга","јарад","јарак","јарам","јаран","јарац","јарда","јарди","јарду","јарић","јарка","јарке","јарки","јарко","јарку","јарма","јарму","јаром","јарца","јарце","јарци","јарцу","јарче","јасан","јасен","јасле","јасли","јасна","јасне","јасни","јасно","јасну","јатак","јатом","јаука","јауке","јауку","јауци","јауче","јаучи","јаучу","јахан","јахао","јахач","јахта","јахте","јахти","јахту","јачам","јачан","јачао","јачаш","јачај","јачег","јачем","јачим","јачих","јачом","јачој","јашем","јашеш","јашим","јашио","јашта","јајна","јајне","јајну","јајца","јајце","јајцу","јањац","јањца","јањце","јањци","јебан","јебао","јебач","јебем","јебеш","једак","један","једар","једва","једем","једеш","једим","једио","једиш","једић","једна","једне","једни","једно","једну","једом","једра","једре","једри","једро","једру","јежев","јежим","јежио","јежиш","јежић","језде","језди","језив","језик","језом","јекне","јекну","јеком","јелак","јелда","јелек","јелен","јелеј","јелик","јелка","јелке","јелки","јелку","јелом","јелци","јемац","јемца","јемчи","јенки","јерес","јереј","јесам","јесен","јесмо","јесте","јести","јетка","јетке","јетки","јетко","јетку","јетра","јетре","јетри","јетру","јецам","јецао","јецаш","јецај","јечам","јечао","јечим","јечиш","јечма","јечму","јешан","јешна","јешне","јешни","јешно","јешну","јешће","јешћу","јидиш","јогин","јогом","јодна","јодне","јодни","јодно","јодну","јодом","јоште","југом","јужна","јужне","јужни","јужно","јужну","јунад","јунак","јунца","јунце","јунци","јунцу","јурим","јурио","јуриш","јурне","јурну","јурта","јурте","јурти","јурту","јурца","јутра","јутро","јутру","кабул","казах","каида","каиде","каиди","каиду","каина","каину","каира","каиро","каиру","калиф","карла","карло","карлу","кафка","кафке","кафки","кафку","келта","келте","келти","кемал","кеопс","кинез","кином","кипра","кипру","кирка","кирке","кихот","кијев","кмере","кмери","кмеру","книна","книну","конга","конго","конгу","копта","копте","копти","копту","котеж","котор","кохов","кочиз","кочом","крања","кремљ","крима","криму","крита","криту","крона","крусо","крфом","крцун","кубом","куран","курда","курде","курди","курск","кјота","кјото","кјоту","кјушу","кабал","кабла","каблу","кавга","кавге","кавги","кавгу","кавез","кавзи","каган","кадар","кадет","кадим","кадио","кадом","кадра","кадре","кадри","кадро","кадру","кажем","кажеш","казан","казао","казах","казна","казне","казни","казну","казуј","каиша","каише","каиши","каишу","какаа","какав","какао","каква","какве","какви","какво","какву","каким","какио","какиш","калај","калеж","калем","калим","калио","калиф","калиш","калуп","калфа","калфе","калфи","калфу","камаз","камен","камин","камиш","кваки","кваку","квара","кваре","квари","кварт","квару","кварц","кваса","квасе","кваси","квасу","кваци","кваче","квачу","квиза","квизу","квота","квоте","квоти","квоту","квоца","кврга","кврге","квргу","кевом","кевће","кевћу","кегла","кегле","кегли","кеглу","кедар","кедра","кедри","кедру","кезим","кезио","кезиш","кезом","кекса","кексе","кексу","кендо","кепер","кепец","кером","кесом","кефир","кецам","кецао","кецаш","кецом","кечап","кешом","кејом","кељем","кељом","кењам","кењао","кењаш","кењај","кењка","кибер","кибла","кибле","кибли","киблу","кибуц","киван","кивна","кивне","кивни","кивно","кивну","кивот","кивње","кидам","кидан","кидао","кидач","кидаш","кидај","кидне","кидну","киком","кикот","килав","килер","килта","килту","кимом","киндл","кинез","кинем","кинин","кинта","кинте","кинти","кинту","кинуо","киоск","кипар","кипео","кипер","кипић","кипом","кипте","кипти","кисео","кисла","кисле","кисли","кисло","кисне","кисну","китим","китио","китиш","китов","китом","кифла","кифле","кифли","кифлу","кицош","кичма","кичме","кичми","кичму","кишан","кишна","кишне","кишни","кишно","кишну","кишом","кијам","кијао","кијах","кијаш","кијај","кијем","кињен","кињим","кињио","кињиш","кићен","клада","кладе","клади","кладу","клала","клале","клали","клало","клана","клане","клану","клапа","класа","класе","класи","класу","клате","клати","клања","клање","клању","клаће","клаћу","клека","клеке","клеко","клела","клеле","клели","клело","клема","клеме","клеми","клему","клена","клепи","клера","клета","клете","клети","клето","клету","клеца","клече","клечи","клеше","клешу","клиже","клижу","клиза","клизе","клизи","клика","клике","клики","клику","клима","климе","клими","климу","клина","клину","клинч","клипа","клипу","клица","клице","клици","клицу","кличе","кличу","клише","клија","клиња","клињи","клињо","клињу","клићу","кловн","клона","клоне","клони","клону","клопа","клопе","клопи","клопу","клоња","клоње","клоњи","клоњу","клуба","клубе","клубу","копчу","копља","копље","копљу","корак","корал","корен","корзо","корим","корио","кориш","коров","кором","корпа","корпе","корпи","корпу","косач","косим","косио","косих","косиш","коска","коске","коску","косог","косом","косој","кости","косце","котао","котва","котве","котви","котву","котла","котлу","котур","кофер","кофом","коцем","коцка","коцке","коцки","коцку","кочим","кочио","кочиш","кочић","кошем","кошен","кошка","кошта","кошња","којег","којем","којим","којих","којом","којот","којој","кољач","кољем","кољеш","коњак","коњем","коњиц","коњић","коњче","краба","крабе","краби","крабу","крава","краве","крави","краво","краву","краде","кради","краду","крака","краке","краку","крала","крале","крали","крало","крамп","крана","крану","красе","краси","крати","краул","краха","краху","краци","крађа","крађе","крађи","крађу","краја","крају","краља","краљу","краћа","краће","краћи","краћу","крвав","крвна","крвне","крвни","крвно","крвну","крвца","крвцу","крвљу","крдом","креда","креде","креди","кредо","креду","крека","креку","креле","крема","креме","креми","крему","крене","крени","крену","крепа","крепе","крепи","крете","креча","крече","кречи","кречу","креше","крешу","креја","креје","креји","креју","креће","крећи","крећу","крзав","крзна","крзно","крзну","крива","криве","криви","криво","криву","криза","кризе","кризи","кризу","крика","крике","крику","крила","криле","крили","крило","крилу","крими","крина","крити","крици","крије","крију","криће","кркај","кркља","крмак","крмељ","крмка","крмке","крмку","крмно","крмом","крмче","крова","крову","кроза","кроса","кросу","кроте","кроти","кроче","крочи","кроше","кроја","кроје","кроји","кроју","крпар","крпеж","крпељ","крпим","крпио","крпиш","крпом","крпље","крсна","крсне","крсни","крсно","крсну","крста","крсте","крсти","крсту","кртим","кртих","кртог","кртом","кртој","круга","кругу","круже","кружи","круна","круне","круни","круну","крута","круте","крути","круто","круту","крућа","круће","крући","крућу","крхак","крхка","крхке","крхки","крхко","крхку","крцат","крцка","крцне","крцну","крчаг","крчао","крчим","крчио","крчиш","крчка","крчма","крчме","крчми","крчму","кршан","кршем","кршен","кршим","кршио","кршиш","кршна","кршне","кршни","кршно","кршну","кршом","крњав","крњег","крњем","крњим","крњио","крњих","крњом","крњој","крџом","кубик","кубна","кубне","кубни","кувам","куван","кувао","кувар","куваш","кувај","кугла","кугле","кугли","куглу","кугом","кудим","кудио","кудиш","кудње","кужан","кужна","кужне","кужни","кужно","кужну","кукам","кукао","куках","кукаш","кукај","куком","кукољ","кулак","кулен","кулов","кулом","култа","култу","кулук","кумим","кумин","кумио","кумић","кумов","кумом","кумче","кунем","кунеш","кунић","куном","купам","купан","купао","купац","купач","купаш","купај","купеа","купее","купеи","купеу","купим","купио","купих","купиш","купка","купке","купки","купку","купом","купон","купус","купуј","купца","купце","купци","купцу","купче","кураж","курат","курац","курва","курве","курви","курво","курву","курир","курса","курсу","курта","курца","курце","курци","курцу","курче","курчи","кусам","кусао","кусаш","кусим","кусих","кусог","кусом","кусој","кусур","кутак","кутер","кутка","кутке","кутку","куфер","куцам","куцан","куцао","куцах","куцач","куцаш","куцај","куцањ","куцка","куцне","куцни","куцну","кучка","кучке","кучки","кучко","кучку","кушам","кушан","кушао","кушај","кушња","кушње","кушњи","кушњу","кујем","кујеш","кујин","кујна","кујне","кујни","кујну","кујом","куљао","куљне","куљну","куњам","куњао","куњаш","кућна","кућне","кућни","кућно","кућну","кућом","кљова","кљове","кљови","кљову","кљука","кљуна","кљуну","кљусе","кљуца","кључа","кључу","кљује","кљују","књава","књаза","књига","књиге","књиго","књигу","књиже","књижи","књизи","лаути","лауту","лафет","лахор","лађар","лађом","лајав","лајао","лајем","лајеш","лајка","лајке","лајку","лаћам","лаћао","лаћај","лебде","лебди","левак","левим","левис","левих","левка","левке","левку","левог","левом","левој","левци","легао","легат","легла","легле","легли","легло","леглу","легне","легни","легну","легох","леден","ледим","ледио","ледна","ледне","ледни","ледно","ледну","ледом","лежао","лежах","лежај","лежем","лежеш","лежим","лежиш","лезбо","лекар","лекић","леком","лелек","лемам","лемао","лемио","лемур","лента","ленте","ленти","ленту","лепак","лепет","лепим","лепио","лепих","лепиш","лепка","лепку","лепог","лепом","лепој","лепра","лепре","лепри","лепру","лепша","лепше","лепши","лепшу","леске","лески","леску","летак","летач","летва","летве","летви","летву","летео","летим","летиш","летка","летке","летку","летну","летом","летос","летња","летње","летњи","летњо","летњу","лецне","лецну","лечен","лечив","лечим","лечио","лечиш","лешом","леђна","леђне","леђни","леђно","леђну","лејом","лењим","лењир","лењих","лењог","лењом","лењој","либим","либио","либиш","ливац","ливен","ливца","ливце","ливци","ливцу","лигом","лигња","лигње","лигњи","лигњу","лидер","лижем","лижеш","лизан","лизао","лизне","лизну","лизом","ликер","ликом","ликре","ликуј","лимар","лимба","лимбо","лимбу","лимит","лимом","лимун","лимфа","лимфе","лимфи","лимфу","линка","линку","линча","линчу","липов","липом","липте","липти","липше","липши","липшу","лисац","лисне","лисну","листа","листе","листи","листу","лисца","лисци","лисцу","литар","литра","литре","литри","литру","лифта","лифту","лицем","лицеј","лицка","личан","личим","личио","личиш","личка","личке","лички","личко","личку","лична","личне","лични","лично","личну","лишај","лишен","лишим","лишио","лишиш","лишћа","лишће","лишћу","лијем","лијеш","лијом","лињао","ловац","ловим","ловио","ловиш","ловна","ловне","ловом","ловор","ловца","ловце","ловци","ловцу","ловче","логоа","логом","логор","логос","логоу","ложач","ложен","ложим","ложио","ложиш","ложом","лозом","локал","локао","локва","локве","локви","локву","локна","локне","локни","локну","ломан","ломим","ломио","ломиш","ломна","ломни","ломно","ломну","ломом","лонац","лонца","лонце","лонци","лонцу","лонче","лопов","лопта","лопте","лопти","лопту","лорда","лорде","лорду","лосос","лотос","лотоу","лотус","лочем","лочеш","лошег","лошем","лошим","лоших","лошом","лошој","лођом","лојем","лојне","лугер","лудак","лудео","лудим","лудин","лудих","лудиш","лудог","лудом","лудој","лудуј","лукав","лукац","луком","лулом","лупам","лупан","лупао","лупах","лупаш","лупај","лупеж","лупим","лупио","лупих","лупиш","лупка","лупне","лупни","лупну","лупом","лупус","лутак","лутам","лутан","лутао","луташ","лутај","лутка","лутке","лутки","лутко","лутку","луфта","лучем","лучим","лучио","лучка","лучке","лучки","лучко","лучку","лучна","лучне","лучни","лучно","лучну","луђег","луђем","луђим","луђих","луђом","луђој","лујка","лујке","лујки","лујку","луњам","луњао","луњаш","љевин","љотић","љагом","љигав","љиљан","љосне","љосну","љубав","љубак","љубим","љубио","љубих","љубиш","љупка","љупке","љупки","љупко","љупку","љуска","љуске","љуски","љуску","љусну","љуспа","љуспе","љуспи","љусци","љутим","макла","макле","макли","макло","макне","макни","макну","маком","макро","мален","малер","малим","малих","малић","малко","малог","малом","малој","мамац","мамбе","мамим","мамин","мамио","мамиш","мамом","мамут","мамца","мамце","мамци","мамцу","манга","манго","манем","манеш","манир","маном","мануо","мапом","марва","марве","марви","марво","марву","маржа","меког","меком","мекој","мекша","мекше","мекши","мекшу","мелез","мелем","мелос","мемла","мемле","мемли","мемлу","менза","мензе","мензи","мензу","меном","мента","менте","менти","менту","мерак","мерач","мерен","мерим","мерио","мериш","мерка","мерна","мерне","мерни","мером","месар","месец","месим","месио","месиш","месна","месне","месни","месно","месну","месом","места","место","месту","месје","метак","метал","метан","метао","метар","метеж","метил","метиљ","метка","метке","метку","метла","метле","метли","метлу","метне","метни","метну","метод","метом","метох","метра","метре","метри","метро","метру","мехом","мехур","мечка","мечке","мечки","мечку","мечом","мешам","мешан","мешао","мешаш","мешај","међаш","међом","мејла","мејлу","мељем","мељеш","мењам","мењан","мењао","мењач","мењаш","мењај","мећем","мигао","мигне","мигну","мигом","мидер","микро","милео","милим","милио","милих","милог","милом","милој","милуј","минер","мином","минуо","минус","минут","минџа","минџе","минџи","минџу","мираз","миран","мирим","мирио","мирис","мириш","мирна","мирне","мирни","мирно","мирну","миром","мирта","мирте","мирту","мируј","мисао","мисле","мисли","мисом","митом","митра","митре","митру","мицао","мицве","мицву","мичел","мичем","мичеш","мишар","мишев","мишем","мишић","мишке","мишки","мишку","мишом","мишја","мишје","мишји","мишју","мишљу","миљеа","миљеи","миљеу","миљом","млада","младе","млади","младо","младу","млаза","млазу","млака","млаке","млаки","млако","млаку","млате","млати","млађа","млађе","млађи","млађу","млека","млеко","млеку","млела","млеле","млели","млело","млети","млина","млину","многа","многе","многи","много","многу","множе","множи","мноме","могао","могах","могла","могле","могли","могло","могох","могул","могућ","модар","модел","модем","модла","модле","модли","модлу","модна","модне","модни","модно","модну","модом","модра","модре","модри","модро","модру","модул","можда","можеш","мозак","мозга","мозгу","мокар","мокра","мокре","мокри","мокро","мокру","молба","молбе","молби","молбу","молер","молим","молио","молих","молиш","момак","момка","момке","момку","момци","момче","монах","мопед","морал","морам","морао","морах","мораш","морем","морен","моржа","морио","мориш","мором","морон","моста","мосту","мотам","мотан","мотао","моташ","мотај","мотел","мотив","мотка","мотке","мотки","мотку","мотор","мотре","мотри","мочом","мошти","мошус","мојег","мојем","мојим","мојих","мојом","мојој","мољах","мољац","мољен","мољца","мољце","мољци","мољцу","моћан","моћна","моћне","моћни","моћно","моћну","мрава","мраве","мрави","мраву","мраза","мразу","мрака","мраку","мраче","мрачи","мрвим","мрвио","мрвиш","мрвом","мргуд","мрдам","мрдао","мрдаш","мрдај","мрдне","мрдни","мрдну","мрежа","мреже","мрежи","мрежу","мрена","мрене","мрени","мрену","мрети","мржња","мржње","мржњи","мржњу","мрзак","мрзео","мрзим","мрзио","мрзиш","мрзла","мрзле","мрзли","мрзло","мрзне","мрзну","мрква","мркве","мркви","мркву","мрким","мрких","мркла","мркле","мркли","мркло","мрклу","мрков","мрког","мрком","мркој","мрмор","мрмот","мрмља","мрсан","мрсим","мрсио","мрсиш","мрска","мрске","мрски","мрско","мрску","мрсна","мрсне","мрсни","мрсно","мрсну","мрсом","мртав","мртва","мртве","мртви","мртво","мртву","мршав","мрште","мршти","мрљав","мрљам","мрљао","мрљом","мувам","муван","мувао","муваш","мувај","мувља","мувље","мувљи","мувљу","мудар","мудра","мудре","мудри","мудро","мудру","мужев","мужем","мужик","мужић","музао","музем","музеш","музеј","музла","музли","музом","мукао","мукла","мукле","мукли","мукло","муклу","мукну","муком","мулат","мулци","мумла","мунем","мунеш","мунуо","мунух","мурал","мурта","мусав","мусти","мутав","мутан","мутим","мутио","мутиш","мутна","мутне","мутни","мутно","мутну","муфом","муцав","муцам","муцао","муцаш","мучан","мучен","мучим","мучио","мучиш","мучка","мучке","мучки","мучко","мучку","мучна","мучне","мучни","мучно","мучну","мушка","мушке","мушки","мушко","мушку","муљав","муљам","муљао","муљаш","муљем","муњом","мућак","мућка","мућке","мућки","мућку","мућне","мућни","мућну","мњења","мњење","мњењу","нанта","нанту","напуљ","насер","недић","немац","немца","немце","немци","немцу","немче","непал","нерон","нехру","нилом","ничеа","ничеу","нишки","нишом","нушић","набио","набих","набиј","набор","набој","набра","навек","навео","навио","навиј","навод","навој","навре","навро","навру","наврх","наган","нагао","нагиб","нагим","нагих","нагла","нагле","нагли","нагло","наглу","нагне","нагни","нагну","нагог","нагом","нагон","нагох","нагој","надам","надао","надаш","надај","надви","надом","надре","надуо","надут","надух","нажао","назад","назва","назеб","назив","назре","назро","назру","назуо","назух","наива","наиме","наиђе","наиђи","наиђу","наићи","накит","након","накот","налаз","налет","налик","налио","налих","налиј","налог","намаз","намах","намет","нанео","нанет","нанин","наном","нанос","нанче","наоко","напад","напао","напев","напео","напет","напио","напис","напит","напих","напиј","напне","напни","напну","напон","напор","напој","нарав","нарко","народ","насео","насип","наспе","наспи","наспу","наста","насуо","насут","насух","науде","науди","наука","науке","науко","науку","наума","науме","науми","науму","науци","науче","научи","науље","науљи","нафта","нафте","нафти","нафту","нацрт","начас","начео","начет","начех","начин","начне","начну","начуо","начух","нашао","нашег","нашем","нашим","наших","нашки","нашла","нашле","нашли","нашло","нашом","нашој","нађем","нађен","нађеш","нађох","најам","најео","најма","најми","најму","наџак","небом","невен","невин","негде","негом","негуј","недра","нежан","нежив","нежна","нежне","нежни","нежно","нежну","некад","неким","неких","неког","неком","некој","некуд","немам","неман","немао","немар","немах","немаш","немај","немео","немим","немио","немир","немих","немог","немом","немој","немоћ","неона","непар","непун","непца","непце","непцу","нерад","нерва","нерве","нерви","нерву","неред","нерца","неста","нетом","неука","неуке","неуки","неуко","неуку","нефер","нехат","нехај","нечег","нечем","нечим","нешто","нејак","нејач","нећак","нећеш","нећка","нивоа","нивое","нивои","нивоу","нигде","нижег","нижем","нижеш","нижим","нижих","нижом","нижој","низак","низао","низом","никад","никао","никла","никле","никли","никло","никлу","никне","никну","никог","ником","никуд","нимфа","нимфе","нимфи","нимфу","нинџа","нинџе","нинџи","нисам","нисан","ниска","ниске","ниски","ниско","ниску","нисмо","нисте","нитна","нитне","нитни","нитну","нитро","ницао","ничег","ничем","ничим","нишан","нишка","нишке","нишки","нишко","нишку","нишом","ништа","нишче","новац","новим","нових","новог","новом","новој","новца","новце","новци","новцу","ногар","ногат","ногом","ножар","ножем","ножић","ножна","ножне","ножни","ножну","нокат","нокиа","нокта","нокте","нокти","нокту","номад","норма","норме","норми","норму","носам","носао","носат","носач","носаш","носем","носим","носио","носих","носиш","носић","носна","носне","носни","носно","носну","носом","нотар","нотес","нотна","нотне","нотни","нотну","нотом","ношен","ношом","ношња","ношње","ношњи","ношњу","нојев","ноћас","ноћим","ноћио","ноћиш","ноћна","ноћне","ноћни","ноћно","обеси","обест","обеју","обећа","обзир","обила","обиле","обили","обило","обима","обиму","обити","обише","обиђе","обиђи","обиђу","обија","обије","обију","обиља","обиље","обиљу","обиће","обићи","обићу","облак","облик","облим","облио","облих","облог","облом","облој","обода","ободе","ободи","ободу","обоже","обола","оболе","оболи","обома","обора","оборе","обори","обору","обоја","обоје","обоји","образ","обран","обрао","обрва","обрве","обрви","обрву","обред","обрем","обрео","обрех","обрис","обриј","обрне","обрни","обрну","оброк","обрта","обрте","обрти","обрту","обруб","обруч","обрће","обрћу","обува","обузе","обука","обуке","обуку","обула","обуле","обули","обути","обуци","обуче","обучи","обуше","обује","обују","обућа","обуће","обући","обућу","овако","овала","овале","овали","овалу","овамо","ована","оваца","овере","овери","оверу","овећа","овеће","овећи","овећу","овима","овиме","овлаш","овнов","овном","овога","овоме","овоја","овсем","овсом","овуда","овцом","овчар","овчја","овчје","овчји","овчју","огаде","огади","оглав","оглас","оглед","оголе","оголи","огрев","огреј","огрне","огрни","огрну","огрте","огрће","огрћу","огуле","огули","огњем","одаде","одаду","одала","одале","одали","одало","одамо","одана","одане","одани","одано","одану","одапе","одата","одате","одати","одато","одату","одаја","одаје","одаји","одају","одаље","одаљи","одаће","одаћу","одбио","одбих","одбиј","одбор","одвар","одвео","одвећ","одвио","одвих","одвод","одвој","одгој","одева","одела","одело","оделу","одемо","одене","одену","одера","одере","одери","одеру","одете","одеље","одећа","одеће","одећи","одећу","одзив","одиже","одижу","одише","одишу","одићи","одлив","одлио","одлиј","одмах","одмет","одмор","однео","однет","однех","однос","одока","одоле","одоли","одора","одоре","одори","одору","одоше","одраз","одран","одрао","одрах","одред","одржа","одрже","одржи","одром","одрон","одсад","одсев","одсек","одсео","одсто","одува","одуже","одужи","одузе","одуче","одучи","одшио","одјек","ожале","ожали","ожари","ожеже","ожежи","ожене","ожени","оживе","оживи","озаре","озари","озебе","озебу","озида","озиме","озона","озону","окади","окале","окали","окана","окане","окани","окану","оката","окате","окати","окато","окату","окаца","окаче","окачи","окаје","окају","окаља","оквир","океан","окера","окива","окида","окиде","окине","окину","оките","окити","окица","окице","оклоп","окном","окова","окове","окови","окову","около","окоме","окоми","окота","окоте","окоти","окоту","окрет","окрпе","окрпи","округ","окрњи","оксид","окука","окуке","окуку","окупа","окупе","окупи","окупу","окусе","окуси","окуци","окуша","окује","окују","окцем","олака","олаке","олаки","олако","олаку","олеши","олиже","олижи","олижу","олиза","олиња","олова","олово","олову","олоша","олоши","олошу","олтар","олука","олуке","олуку","олупа","олуци","олуја","олује","олуји","олујо","олују","омажа","омаже","омажи","омажу","омаза","омама","омаме","омами","омаму","омане","оману","омаче","омаше","омаши","омања","омање","омањи","омању","омаћи","омега","омеги","омегу","омела","омеле","омели","омело","омета","омете","омету","омеђе","омеђи","омичу","омлет","омота","омоте","омоти","омоту","омрсе","омрси","омчом","онако","онамо","онижа","ониже","онижи","онижу","оникс","онима","ониме","онога","ономе","онуда","опада","опаде","опажа","опазе","опази","опака","опаке","опаки","опако","опаку","опала","опале","опали","опало","опалу","опара","опаре","опари","опаса","опата","опате","опати","опату","опаше","опаши","опашу","опева","опека","опеке","опеку","опела","опело","опелу","опера","опере","опери","оперу","опеци","опече","опећи","опила","опиле","опили","опило","опипа","опипу","опире","опири","опиру","описа","описе","описи","опису","опите","опити","опише","опиши","опишу","опија","опије","опију","опиће","опићу","опкоп","оплео","опном","опора","опоре","опори","опоро","опору","опоје","опран","опрао","опрах","опрез","опрем","опреш","опрже","опржи","опрље","опрљи","опсео","опсуј","опуса","опусу","опуте","опуту","опшив","општа","опште","општи","општу","орала","орале","орали","орало","орана","оране","оранж","орано","ораси","орати","ораха","орахе","ораху","орача","орачи","орања","орање","орању","ораће","ораћу","орган","орден","ореза","оремо","ореол","орете","ориба","орила","ориле","орили","орило","орити","оркан","орком","орлић","орлов","орлом","орман","ормар","орним","орних","оробе","ороби","ороде","ороди","ороза","орозе","орозу","орону","оросе","ороси","ортак","оруђа","оруђе","оруђу","орући","осама","осаме","осами","осаму","освит","осврт","оседе","оседи","осека","осеке","осеки","осеку","осете","осети","осеци","осећа","осиле","осили","осина","осине","осини","осино","осину","осион","осипа","осипу","осица","осице","осици","осицу","осиње","осињи","осмех","осмим","осмог","осмом","осмој","осним","основ","осног","оснуј","особа","особе","особи","особо","особу","оспем","остав","остао","остах","остај","остве","остви","осуда","осуде","осуди","осуду","осула","осуле","осули","осуло","осута","осуте","осути","осуто","осуту","осуше","осуши","осуће","отада","отапа","отаца","отаче","отачу","отаља","отање","отвор","отежа","отеже","отежи","отежу","отела","отеле","отели","отело","отера","отета","отете","отети","отето","отету","отече","отеше","отеће","отећи","отећу","отиде","отиди","отиду","отима","отире","отиче","отичу","отиђи","отићи","откад","отказ","откоп","откос","откри","откуд","откуп","отмем","отмен","отмеш","отока","отоке","отоку","отопе","отопи","отоци","оточи","отпад","отпао","отпио","отпис","отпих","отпиј","отпор","отрем","отрже","отржу","отрла","отрле","отрли","отрло","отров","отрпе","отрпи","отрта","отруј","отрча","отрче","отрчи","отрља","отуда","отупе","отупи","отуђе","отуђи","офрље","офуца","охола","охоле","охоли","охоло","охолу","оцеде","оцеди","оцена","оцене","оцени","оцену","оцила","оцило","оцима","оцрне","оцрни","оцрта","очара","очаја","очаје","очају","очева","очеве","очеви","очево","очеву","очепи","очеша","очеше","очешу","очима","очита","очите","очити","очито","очиту","очица","очице","очију","очињи","очним","очних","очног","очном","очној","очува","очуси","очуха","очухе","очуху","очњак","ошине","ошини","ошину","ошиша","оштар","оштра","оштре","оштри","оштро","оштру","ошуре","ошури","ојаде","ојади","ојача","ојела","ојеле","ојужи","ољути","оњуше","оњуши","оћута","оћути","оџака","оџаке","оџаку","оџаци","павла","павле","павлу","падре","пансе","папуе","париз","патак","патек","пашић","пегаз","перуа","перун","перуу","петар","петке","петки","петку","петра","петре","петру","пеште","пешти","пешту","пећки","пећку","пикчу","пилат","пиреј","пирот","плани","планк","поаро","попај","порте","пошта","пошти","пољак","пруса","прусе","пруси","пруст","пупин","путин","пчињи","павши","паган","падам","падао","падаш","падај","падеж","падне","падни","падну","падом","падох","падре","пажен","пажња","пажње","пажњи","пажњу","пазар","пазим","пазио","пазиш","пазух","пакао","пакет","пакла","пакле","пакли","пакло","паклу","пакта","пакту","пакум","пакуј","палац","палеж","палим","палио","палих","палиш","палма","палме","палми","палму","палог","палом","палој","палца","палце","палци","палцу","памет","памте","памти","памук","панда","панде","панди","панду","панел","паноа","паное","панои","паноу","панџе","паока","паоке","паора","паоре","паори","паору","паоци","папак","пегав","пегла","пегле","пегли","пеглу","пегом","педаљ","педер","педља","педљу","пежоа","пежоу","пезос","пекао","пекар","пекла","пекле","пекли","пекло","пелен","пелин","пелир","пенал","пенио","пенис","пениш","пеном","пепео","пепси","перад","перач","перем","переш","перла","перле","перли","пером","перон","перут","перца","перце","перја","перје","перју","песак","песка","песку","песма","песме","песми","песмо","песму","петак","петао","петим","петих","петка","петла","петли","петлу","петне","петог","петом","петој","петља","петље","петљи","петљу","пехар","пецам","пецао","пецаш","пецај","пецка","пецне","пецну","печат","печем","печен","печеш","пешак","пешка","пешке","пешко","пешом","пењао","пењах","пењач","пењем","пењеш","пећке","пећки","пећку","пивар","пивом","пивце","пизда","пизде","пизди","пиздо","пизду","пикап","пикет","пиком","пилав","пилад","пилот","пинта","пинте","пинти","пинту","пиона","пионе","пиони","пиону","пипав","пипак","пипам","пипао","пипах","пипаш","пипај","пипка","пипке","пипку","пипне","пипни","пипну","пипци","пират","пиреа","пиреу","пирио","пирит","пирка","пирне","пирну","пирог","писак","писан","писао","писар","писац","писка","писку","писма","писмо","писму","писне","писни","писну","писта","писте","писти","писту","писца","писце","писци","писцу","питак","питам","питан","питао","питах","питаш","питај","питка","питке","питко","питку","питом","питон","пицин","пицом","пичим","пичио","пичиш","пичић","пичка","пичке","пички","пичко","пичку","пишам","пишао","пишах","пишаш","пишај","пишем","пишеш","пишић","пишке","пишки","пишну","пишом","пиште","пишти","пишче","пијан","пијац","пијем","пијеш","пијмо","пијте","пијук","пиљар","пиљим","пиљио","пиљиш","пићем","пићеш","плава","плаве","плави","плаво","плаву","плажа","плаже","плажи","плажу","плазе","плази","плама","пламу","плана","плане","плану","пласт","плата","плате","плати","плато","плату","плаха","плахе","плахи","плахо","плаху","плаца","плацу","плача","плаче","плачи","плачу","плаше","плаши","плашт","плаћа","плебс","плева","плеве","плеви","плеву","плела","плеле","плели","плело","племе","плена","плене","плени","плену","плеса","плесу","плете","плету","плеха","плеху","плеше","плеши","плешу","плећа","плива","плика","плику","плима","плиме","плими","плиму","плина","плину","плиша","плишу","плића","плиће","плићи","плићу","плове","плови","плода","плоде","плоди","плоду","плота","плоту","плоча","плоче","плочи","плочу","плуга","плугу","плуса","плусу","плута","плуте","плуту","плућа","побио","побиј","побој","повез","повео","повик","повио","пових","повиј","повод","повој","поврх","поган","погло","погне","погни","погну","погон","подам","подао","подаш","подај","подбо","подви","подла","подле","подли","подло","подлу","подна","подне","подни","подно","подну","подом","подој","поема","поеме","поеми","поему","поена","поене","поени","поену","поета","поете","поети","поето","поету","пожар","пожње","позва","позер","позив","позли","позна","позне","позни","позно","позну","позом","позор","поима","покај","покер","покла","покоп","покој","покољ","покри","полен","полет","полио","полип","полис","полих","полиј","полка","полки","полку","полна","полне","полни","полно","полну","полог","полом","помак","помен","помео","помна","помне","помни","помно","помну","помор","помоћ","помпа","помпе","помпи","помпу","помре","помру","понео","понет","понех","понор","понос","поноћ","понча","пончо","пончу","попео","попех","попио","попис","попих","попиј","попне","попни","попну","попов","попом","попут","попуј","пораз","порве","порву","поред","порез","порив","порно","пород","порок","пором","порта","порте","порти","порту","поруб","порше","посан","посао","посве","посед","посео","посеј","посла","после","послу","посна","посне","посни","посно","посну","поспе","поспи","поспу","посра","поста","посте","пости","посто","посту","посуо","посут","посух","потез","потес","потку","поток","потом","потоп","поука","поуке","поуку","поуци","поуче","поучи","поход","почев","почек","почео","почет","почех","почне","почни","почну","почуј","пошао","пошла","пошле","пошли","пошло","пошта","поште","пошти","пошто","пошту","пођем","пођеш","пођох","појам","појао","појас","појац","појем","појео","појеш","појим","појио","појиш","појма","појме","појми","појму","појце","појци","пољем","права","праве","прави","право","праву","прага","прагу","прала","прале","прали","прало","прана","пране","прани","прано","прасе","прате","прати","праха","праху","праши","праља","праље","праљи","праљу","прања","прање","прању","праћу","првак","првим","првих","првог","првом","првој","пргав","прдеж","прдео","прдим","прдиш","прдне","прдни","прдну","преби","преви","преда","преде","преду","преже","прежи","прежу","преза","прека","преке","преки","преко","преку","прела","прели","према","прене","прени","прену","преса","пресе","преси","пресу","прете","прети","преци","преча","прече","пречи","пречу","пређе","пређи","пређу","прећи","пржен","пржим","пржио","пржиш","приби","приви","прида","приде","прима","приме","прими","принц","приор","припи","прича","приче","причи","причо","причу","приђе","приђи","приђу","прија","прији","пријо","прију","прићи","пркос","проба","пробе","проби","пробо","пробу","прода","проже","проза","прозе","прози","прозу","проли","пропе","пропи","проса","просе","проси","просо","прост","просу","прота","проте","проти","прото","проту","профа","профе","профи","профо","профу","прочу","прође","прођи","прођу","проја","проје","проји","проју","проћи","прсао","прсат","прсио","прсиш","прска","прсла","прсле","прсли","прсло","прсне","прсни","прсно","прсну","прста","прсте","прсти","прсту","пртим","пртио","пруга","пруге","пругу","пружа","пруже","пружи","прузи","прута","прућа","пруће","прући","прућу","прхне","прхну","прцам","прчка","прште","пршти","пршут","прљав","прљам","прљан","прљао","прљаш","прљај","прљио","псалм","псета","псето","псету","псећа","псеће","псећи","псећу","псима","псина","псине","псини","псино","псину","психа","психе","психи","психо","психу","псића","псиће","псићи","псићу","псује","псују","птица","птице","птици","птицо","птицу","птиче","птића","птиће","птићи","птићу","пубом","пувао","пудер","пудла","пудлу","пужем","пужеш","пужом","пузао","пузим","пузио","пузиш","пузла","пукао","пуким","пуких","пукла","пукле","пукли","пукло","пукне","пукну","пуког","пуком","пукој","пулен","пулпа","пулпе","пулпи","пулпу","пулса","пулсу","пулта","пулту","пумин","пумом","пумпа","пумпе","пумпи","пумпу","пуним","пунио","пуних","пуниш","пункт","пуног","пуном","пуној","пунча","пунчу","пунђа","пунђе","пунђи","пунђу","пупак","пупка","пупку","пурња","пуста","пусте","пусти","пусто","пусту","путар","путем","путен","путер","путир","путић","путна","путне","путни","путно","путну","путуј","пуфна","пуфне","пуфни","пуфно","пуфну","пуцам","пуцао","пуцаш","пуцај","пуцањ","пуцка","пуцне","пуцну","пуцња","пуцње","пуцњи","пуцњу","пучем","пушач","пушим","пушио","пушиш","пушка","пушке","пушку","пушта","пушци","пуњач","пуњен","пућим","пућио","пућиш","пућка","пућну","пчела","пчеле","пчели","пчелу","пљуга","пљуге","пљугу","пљуне","пљуни","пљуну","пљује","пљују","ражањ","рашка","рашке","рашку","рајху","римом","рипња","родос","ромеа","ромел","ромео","ромеу","ромул","ртњем","румун","русом","рабин","раван","равна","равне","равни","равно","равну","рагби","рагом","радан","радар","радим","радио","радиш","радна","радне","радни","радно","радну","радом","радуј","радња","радње","радњи","радњу","ражањ","ражња","ражњу","разан","разби","разви","разли","разна","разне","разни","разно","разну","разум","раком","ракун","ракље","ракљу","рамом","рампа","рампе","рампи","рампу","ранац","ранга","рангу","раним","ранио","раних","раниш","ранка","раног","раном","раној","ранца","ранце","ранци","ранцу","ранча","ранчу","расад","расан","расед","расла","расле","расли","расло","расна","расне","расни","расно","расну","расол","расом","распе","распу","раста","расте","расти","расту","расуо","расут","ратар","ратна","ратне","ратни","ратно","ратну","ратом","ратуј","рауба","рафал","рафом","рацио","рачва","рачве","рачви","рачву","рачић","рачун","рачје","рашио","рашки","рашку","рашта","рашчу","рашље","рашљи","рашће","рађам","рађан","рађао","рађаш","рађај","рађен","рајем","рајом","рајха","рајху","рањав","рањен","рањив","рвала","рвале","рвали","рвало","рвати","рвача","рвачи","рвачу","рвања","рвање","рвању","рваћу","рвемо","рвући","ребну","ребра","ребро","ребру","ребус","ревер","ревни","ревно","регал","редак","редар","редни","редов","редом","редут","режао","режањ","режем","режеш","режим","режиш","режња","режњу","резак","резан","резао","резач","резне","резну","резом","резон","резус","рекао","рекет","рекла","рекле","рекли","рекло","рекне","рекну","реком","рекох","релеј","ремек","ремен","ренде","реноа","реном","реноу","рента","ренте","ренти","ренту","репат","репер","репић","репна","репне","репни","репно","репну","репом","рерна","рерне","рерни","рерну","ресет","реска","реске","рески","реско","реску","ресор","ресто","ретка","ретке","ретки","ретко","ретку","ретро","реума","реуме","реуми","реуму","рецељ","рецка","рецке","рецки","рецку","рецну","речем","речит","речна","речне","речни","речно","речну","речца","речцу","речју","решен","решив","решим","решио","реших","решиш","решоа","решое","решои","решоу","ређам","ређан","ређао","ређах","ређаш","ређај","ређег","ређем","ређим","ређих","ређом","ређој","рејон","рељеф","ржући","рзала","рзале","рзали","рзало","рзати","рзања","рзање","рзању","рибам","рибао","рибар","рибах","рибаш","рибај","рибом","рибља","рибље","рибљи","рибљу","ривал","ригао","ридам","ридао","ридаш","ризик","ризла","ризле","ризли","ризлу","рикао","рикна","рикне","рикни","рикну","риком","рикша","рикше","рикши","рикшу","римом","ринга","рингу","ринта","рисје","рисји","ритам","ритао","риташ","ритај","ритма","ритму","ритне","ритну","ричем","ричеш","риђан","риђег","риђем","риђим","риђих","риђог","риђом","риђој","ријем","ријеш","риљам","риљао","риљаш","риљај","рмбао","рмбах","рмбаш","рмбај","робна","робне","робни","робно","робну","робов","робом","робот","робуј","робља","робље","робљу","роваш","ровер","ровит","ровом","ровци","рогат","рогач","рогоз","рогом","родан","родеа","родео","родеу","родим","родин","родио","родих","родиш","родна","родне","родни","родно","родну","родом","рокер","рокне","рокни","рокну","роком","рокће","рокћу","ролат","ролка","ролке","ролки","ролку","ролна","ролне","ролни","ролну","ролое","ролци","роман","ромба","ромбу","ромео","ромор","роним","ронин","ронио","рониш","ропац","ропца","ропце","ропци","ропцу","ропће","ропћи","ропћу","росио","росна","росне","росни","росно","росну","росом","ротор","рошав","рођак","рођен","ројем","ројио","ртове","ртови","рубац","рубин","рубне","рубом","рубља","рубље","рубљи","рубљу","ругам","ругао","ругаш","ругај","ругло","руглу","рудар","рудна","рудне","рудни","рудно","рудну","рудом","ружан","ружем","ружим","ружин","ружио","ружиш","ружна","ружне","ружни","ружно","ружну","ружом","руина","руине","руини","руино","руину","рукав","руком","рукуј","рулам","рулао","рулет","рулна","рулне","рулни","рулно","рулну","румба","румбе","румбу","румен","румом","рунда","рунде","рунди","рунду","руном","рупом","рупче","руска","руске","руски","руско","руску","рутав","рутом","рухом","ручак","ручам","ручао","ручаш","ручај","ручка","ручке","ручки","ручку","ручна","ручне","ручни","ручно","ручну","рушен","рушим","рушио","рушиш","рујна","рујне","рујни","рујно","рујну","руљом","ршуму","рђава","рђаве","рђави","рђаво","рђаву","рђала","рђале","рђали","рђају","рђања","рђање","рђању","сабат","сабио","сабих","сабиј","сабор","сабра","сабља","сабље","сабљи","сабљу","савез","савет","савио","савих","савиј","сагао","сагла","сагле","сагли","сагне","сагни","сагну","сагох","садим","садио","садиш","садња","садње","садњи","садњу","сажео","сажет","сажме","сажму","сазва","сазда","сазив","сазна","сазре","сазри","сазру","сакат","сакеа","сакоа","сакое","сакои","сакоу","сакри","салаш","салва","салве","салви","салву","салом","салон","салса","салто","салца","салце","самар","самац","самба","самбе","самби","самбу","самим","самит","самих","самог","самом","самој","самур","самца","самце","самци","самцу","санка","санке","свеће","свећи","свећу","свиде","свиди","свила","свиле","свили","свилу","свима","свиме","свира","свита","свите","свити","свиту","свица","свице","свици","свише","свиђа","свија","свије","свију","свиња","свиње","свињи","свињо","свињу","свиће","свићу","свога","свода","своде","своди","своду","своме","свота","своте","своти","своту","своја","своје","своји","своју","свраб","сврбе","сврби","сврси","сврха","сврхе","сврху","сврше","сврши","свуда","свуку","свуци","свуче","свући","севам","севао","севап","севаш","севај","север","севне","севну","севши","седам","седао","седаш","седај","седео","седеф","седим","седих","седиш","седла","седло","седлу","седма","седме","седми","седмо","седму","седне","седни","седну","седог","седом","седох","седој","сеиза","сеизе","сеизи","сеизу","сеико","секао","секач","секла","секле","секли","секло","секом","секса","секси","сексу","секта","секте","секти","секту","селам","селен","селим","селио","селиш","селом","селфи","сенат","сеник","сенка","сенке","сенки","сенку","сеном","сенфа","сенфу","сенци","сенчи","сеоба","сеобе","сеоби","сеобу","сеоца","сеоце","сеоцу","сепса","сепсе","сепси","сепсу","серва","серво","серем","сереш","сержа","серум","сести","сетан","сетва","сетве","сетви","сетву","сетер","сетим","сетио","сетих","сетиш","сетна","сетне","сетни","сетно","сетну","сетом","сефом","сецка","сецне","сецну","сечем","сечен","сечеш","сечом","сешће","сешћу","сејан","сејао","сејач","сејем","сејеш","сејте","сељак","сењак","сењор","сећам","сећао","сећах","сећаш","сећај","сивац","сивим","сивих","сивог","сивом","сивој","сивца","сивцу","сивља","сивље","сивљи","сигма","сидом","сидра","сидро","сидру","сижеа","сижее","сижеи","сижеу","сикне","сикну","сикће","сикћи","сикћу","силав","силан","силим","силио","силна","силне","силни","силно","силну","силом","силос","силуј","симса","симсу","синак","сингл","синко","синов","синод","сином","синоћ","синуо","синус","синци","сипам","сипан","сипао","сипаш","сипај","сипио","сипом","сипња","сипње","сипњи","сипњу","сирац","сиров","сиром","сирот","сируп","сирће","сисак","сисам","сисао","сисар","сисаш","сисај","сисом","ситан","ситим","ситих","ситна","ситне","ситни","ситно","ситну","ситог","ситом","ситој","сифон","сицом","сишао","сишла","сишле","сишли","сишло","сишлу","сиђем","сиђеш","сиђох","сијам","сијао","сијаш","сијај","сињег","сињим","сињих","сињор","сићом","скала","скале","скали","скалп","скалу","скапа","скаут","скаче","скачи","скачу","скаја","скају","сквер","сквош","скела","скеле","скели","скелу","скена","скеча","скечу","скења","скида","скиде","скине","скини","скину","скита","скиту","скица","скице","скици","скицу","скиче","скичи","скија","скије","скији","скију","склад","склон","склоп","скока","скоку","скора","скоре","скори","скоро","скору","скота","скоте","скоту","скоча","скоче","скочи","скрби","скрио","скроб","скроз","скрпе","скрпи","скрше","скрши","скрља","скува","скупа","скупе","скупи","скупо","скупу","скута","скуте","скути","скуца","скуша","скуше","скуши","скушу","скује","скују","скуће","скући","слаба","слабе","слаби","слабо","слабу","слава","славе","слави","славу","слага","сладе","слади","слаже","слажи","слажу","слала","слале","слали","слало","слама","сламе","слами","сламу","слана","слане","слани","слано","слану","слапа","слапу","сласт","слата","слате","слати","слато","слаше","слађа","слађе","слађи","слађу","слајд","слања","слање","слању","слаће","слаћу","слева","следе","следи","следу","слеже","слежу","слеза","слезу","слеме","сленг","слепа","слепе","слепи","слепо","слепу","слете","слети","слету","слеће","слећи","слећу","слива","сливу","слиже","слика","слике","слико","слику","слила","слиле","слили","слило","слина","слине","слини","слину","слити","слици","слише","слије","слију","слова","слово","слову","слога","слоге","слогу","сложе","сложи","слози","слома","сломе","сломи","слому","слона","слону","слоши","слоја","слоју","слуга","слуге","слуги","слуго","слугу","слуде","слуди","служе","служи","слузи","слупа","слуте","слути","слуха","слуху","слуша","смаже","смажи","смажу","смаза","смака","смаку","смара","смаче","смање","смањи","смаћи","смела","смеле","смели","смело","смелу","смемо","смена","смене","смени","смену","смеон","смера","смеру","смерч","смеса","смесе","смеси","смесу","смета","смете","смети","смету","смеха","смеху","смеша","смеше","смеши","смешу","смеђа","смеђе","смеђи","смеђу","смеје","смеју","смећа","смеће","смећу","смион","смире","смири","смиче","смичи","смичу","смога","смогу","сможе","смола","смоле","смоли","смолу","смота","смоћи","смрад","смрве","смрви","смрда","смрде","смрди","смрзо","смрсе","смрси","смрти","смрча","смрче","смрша","смрћу","смува","смука","смуте","смути","смуца","смучи","смуши","смуђа","снага","снаге","снаго","снагу","снази","снаси","снаха","снахе","снахи","снахо","снаху","снаша","снаше","снаши","снашо","снашу","снађе","снађи","снађу","снаја","снаје","снаји","снајо","снају","снаћи","снева","снега","снегу","снежи","снела","снеле","снели","снело","снена","снене","снени","снено","снену","снесе","снеси","снесу","снива","снизе","снизи","снила","снило","снима","сниме","сними","сноба","снобе","снобу","снова","снове","снови","снопа","снопу","сносе","сноси","снује","снују","собар","собна","собне","собни","собно","собну","собом","совин","совом","содом","сокак","сокић","сокне","соком","солар","солим","солио","солиш","солом","сомић","сомом","сомот","сонар","сонда","сонде","сонди","сонду","сонет","сопће","сопћу","сорта","сорте","сорти","сорто","сорту","сосом","софом","софра","софре","софру","сочан","сочна","сочне","сочни","сочно","сочну","сошка","сошке","сошки","сошку","сојем","сојин","сојка","сојке","сојом","сољен","спава","спада","спаде","спазе","спази","спала","спале","спали","спало","спалу","спаре","спари","спаса","спасе","спаси","спасу","спати","спаја","спева","спеву","спере","сперу","спида","спиду","спира","списа","списе","списи","спису","сплав","сплео","сплет","сплит","спона","споне","спони","спону","спора","споре","спори","споро","спорт","спору","споту","споја","споје","споји","споју","споља","спрам","спран","спрао","спрат","спрда","спрег","спреј","спрже","спржи","спруд","спуст","срала","срале","срали","срало","срама","сраме","срами","сраму","срати","срања","срање","срању","сраће","сраћу","срдим","срдио","срдит","срдиш","среда","среде","среди","среду","среже","срежу","среза","срезу","срела","среле","срели","срело","срете","срећа","среће","срећи","срећо","срећу","сриче","сричу","сркао","сркне","сркни","сркну","срком","срмом","срнин","срном","сроде","сроди","сроза","срочи","српом","сруче","сручи","сруше","сруши","срцем","срчан","срчем","срчеш","срчка","срчку","срчом","срљам","срљао","срљаш","срљај","срџба","срџбе","срџби","срџбу","става","ставе","стави","ставу","стада","стаде","стадо","стаду","стажа","стажу","стаза","стазе","стази","стазу","стала","стале","стали","стало","стана","стане","стани","стану","стапа","стара","старе","стари","старо","старт","стару","стаса","стасу","стати","сташе","стаја","стаје","стаји","стају","стања","стање","стањи","стању","стаће","стаћу","ствар","створ","стега","стеге","стеги","стегу","стеже","стежи","стежу","стела","стеле","стели","стелу","стена","стене","стени","стену","степа","степе","степи","степу","стече","стења","стење","стењи","стењу","стећи","стида","стиде","стиди","стиду","стиже","стижу","стила","стилу","стиха","стиху","стиче","стичи","стичу","стиша","стићи","стога","стогу","стоик","стока","стоке","стоко","стоку","стола","столу","стона","стоне","стони","стону","стопа","стопе","стопи","стопу","стота","стоте","стоти","стото","стоту","стоци","стоје","стоји","стран","страх","стрес","стрже","стрип","стриц","стрка","стрма","стрме","стрми","стрмо","стрму","строг","строп","строј","стрпа","стрпе","стрпи","струг","струк","стрци","стрча","стуба","стубу","студи","ступа","ступе","ступи","стуца","стуче","сувим","сувих","сувог","сувом","сувој","сувља","сувље","сувљи","сувљу","судар","судба","судбе","судбу","судим","судио","судиш","судом","судњи","сужањ","сужен","сужња","сужње","сужњи","сужњу","сузан","сузби","сузим","сузио","сузиш","сузне","сузни","сузно","сузну","сузом","сукао","сукна","сукне","сукно","сукну","сукоб","сукља","сукња","сукње","сукњи","сукњу","сулуд","сумом","сумња","сумње","сумњи","сумњу","сунем","сунеш","сунит","сунуо","сунух","сунца","сунце","сунцу","сунча","суоче","суочи","супер","супом","сурва","сурим","сурих","сурла","сурле","сурли","сурлу","суров","сурог","суром","сурој","сусам","сусед","сутон","сутра","суфле","сушан","сушач","сушен","сушим","сушио","сушна","сушне","сушни","сушно","сушну","сушом","сушта","суште","сушти","сушто","сушту","суђен","суљам","суљне","суџук","сфера","сфере","сфери","сферу","схема","схеме","схеми","схему","сцена","сцене","сцени","сцену","сјале","сјало","сјате","сјати","сјаха","сјаше","сјаши","сјашу","сјаја","сјаје","сјаји","сјају","сјебе","сјебу","сјуре","сјури","сабат","савез","савом","саган","садам","садом","санкт","саљут","сезан","сенат","сеула","сеулу","сибир","сизиф","синај","сиска","ските","скити","смерш","солун","сопот","сојуз","сплит","србин","србљи","срема","срему","степо","степу","стејт","судан","суеца","суецу","сунца","сухој","табак","табан","табао","табла","табле","табли","таблу","табор","табуа","табуе","табуи","табуу","табљи","таван","такав","такао","таква","такве","такви","такво","такву","такла","такле","такли","такло","такне","такни","такну","такох","такса","таксе","такси","таксу","такта","такту","талас","талац","талка","талог","талон","таман","тамна","тамне","тамни","тамно","тамну","тамом","танад","танак","танан","танга","танге","танги","танго","тангу","танин","танка","танке","танки","танко","танку","танто","таоца","таоце","таоци","таоцу","таоче","тапет","тапир","тапка","тапне","тапну","тапше","тапшу","тарот","тасом","таста","тасту","татин","татко","татом","татре","тацна","тацне","тацни","тацну","тачан","тачка","тачке","тачки","тачку","тачна","тачне","тачни","тачно","тачну","тачци","ташна","ташне","ташни","ташну","ташта","таште","ташти","ташто","ташту","тајан","тајац","тајга","тајге","тајги","тајгу","тајим","тајио","тајна","тајне","тајни","тајно","тајну","тајца","тајцу","тањег","тањем","тањим","тањио","тањир","тањих","тањом","тањој","твари","твида","твога","твоме","твора","творе","твори","твору","твоја","твоје","твоји","твоју","тврда","тврде","тврди","тврдо","тврду","тврђа","тврђе","тврђи","тврђу","тегет","тегић","тегла","тегле","тегли","теглу","тегом","тежак","тежег","тежем","тежим","тежио","тежих","тежиш","тежом","тежој","тежња","тежње","тежњи","тежњу","тезга","тезге","тезги","тезгу","тезом","текао","текла","текле","текли","текло","текст","телад","телал","телом","темељ","темом","темпа","темпо","темпу","тенда","тенде","тенди","тенду","тенис","тенка","тенку","теном","тенор","тепав","тепам","тепао","тепах","тепаш","тепај","тепих","терам","теран","терао","терах","тераш","терај","терен","терет","термо","терор","тесан","тесао","тесар","тесач","тесна","тесне","тесни","тесно","тесну","теста","тесто","тесту","тетка","тетке","тетки","тетку","тетом","течан","течај","течин","течна","течне","течни","течно","течну","течом","тешем","тешен","тешеш","тешим","тешио","тешиш","тешка","тешке","тешки","тешко","тешку","тешња","тешње","тешњи","тешњу","тигар","тигањ","тигра","тигре","тигру","тиква","тикве","тикви","тикво","тикву","тикет","тиком","тимом","типла","типом","тираж","тисов","титан","титла","титлу","титра","тифус","тихим","тихих","тихог","тихом","тихој","тицао","тишег","тишем","тишим","тиших","тишом","тишој","тиште","тишти","тињао","ткала","ткале","ткали","ткало","ткамо","ткана","ткане","ткани","ткано","ткану","ткати","ткача","ткаче","ткачи","ткачу","ткају","ткаља","ткаље","ткања","ткање","ткању","ткива","ткиво","ткиву","тлаче","тлачи","тмина","тмине","тмини","тмину","тобож","тобом","товар","товио","тогом","током","томом","тонац","тонем","тонеш","тоник","тоном","тонуо","тонус","топаз","топао","топим","топио","топиш","топла","топле","топли","топло","топлу","топом","топот","топуз","топче","топће","топћу","торањ","торба","торбе","торби","торбу","торза","торзо","торзу","торта","торте","торти","торту","торус","торња","торњу","тоста","тосту","тотем","точак","точен","точим","точио","точка","точку","трава","траве","трави","траву","трага","трагу","траже","тражи","трака","траке","тракт","траку","транс","трапа","трапу","траса","трасе","траси","трасу","трафо","траци","трача","траје","трају","траће","траћи","трбух","тргао","тргла","тргле","тргли","тргло","тргне","тргни","тргну","тргом","тргох","тргуј","треба","требе","треби","трема","треме","треми","трему","трена","тренд","трену","тресе","треси","тресу","трефа","трења","трење","трењу","трећа","треће","трећи","трећу","тржне","тржни","трзав","трзам","трзао","трзаш","трзај","трзне","трзну","трика","трико","трику","трима","трипа","трипу","трица","трице","тришу","трију","тркам","тркао","тркач","тркаш","тркај","тркне","тркни","тркну","трком","трнов","трном","трнуо","трнце","трнци","трола","троле","тролу","трома","тромб","троме","троми","тромо","трому","трона","трону","тропа","троше","троши","троја","троје","трпам","трпан","трпао","трпах","трпаш","трпај","трпео","трпим","трпиш","трпње","трпњу","трсио","трска","трске","трски","трску","трсци","тртим","тртио","тртиш","тртка","тртља","труба","трубе","труби","трубу","труда","труде","труди","труду","трула","труле","трули","труло","трулу","труна","труне","труни","труну","трупа","трупе","трупи","трупу","труст","труту","трује","трују","труња","труње","трућа","трчао","трчим","трчиш","трчка","тршав","трљам","трљао","трљаш","трљај","трњак","трњем","трћен","тубом","тубус","тугом","тугуј","тужан","тужба","тужбе","тужби","тужбу","тужен","тужим","тужио","тужиш","тужна","тужне","тужни","тужно","тужну","тукао","тукла","тукле","тукли","тукло","тукох","тулиш","тулум","тумач","тумба","тумбе","тумор","тунел","тупав","тупан","тупим","тупио","тупих","тупиш","тупка","тупко","тупну","тупог","тупом","тупој","тупља","тупље","тупљи","тупљу","тураш","турај","турбо","турим","турио","турих","туриш","туром","тутањ","тутка","тутне","тутни","тутну","тутор","тутун","тутња","тутње","тутњи","тутњу","туфна","туфне","туфни","туфну","туцам","туцан","туцао","туцах","туцач","туцаш","туцај","тучак","тучан","тучем","тучен","тучеш","тучка","тучом","тушем","тушта","туђег","туђем","туђим","туђин","туђио","туђих","туђом","туђој","туљан","туњав","тарас","тасос","тацит","тајмс","твена","тезеј","темза","темзе","темзи","темзу","тесла","тесле","тесли","теслу","тибет","тивту","тимок","тирол","титов","титом","тодор","токио","торов","тоске","тотом","троји","троју","трста","трсту","тузла","тузле","тузли","тузлу","тулуз","тунис","турке","турци","ћосић","ћалац","ћалов","ћапим","ћапио","ћапне","ћаска","ћасом","ћатин","ћатом","ћаћин","ћебад","ћевап","ћелав","ћелом","ћемер","ћерка","ћерке","ћерки","ћерко","ћерку","ћерци","ћесар","ћефне","ћефну","ћефом","ћивот","ћилим","ћифта","ћопав","ћопам","ћопао","ћопаш","ћорав","ћорак","ћорка","ћорке","ћорки","ћорку","ћорну","ћором","ћорци","ћосав","ћошак","ћошка","ћошку","ћубом","ћувик","ћумез","ћумур","ћупић","ћупом","ћурак","ћуран","ћурка","ћурке","ћурки","ћурко","ћурку","ћутао","ћутим","ћутиш","ћутке","ћутња","ћутње","ћутњи","ћутњу","ћуфта","ћуфте","ћуфти","ћуфту","ћушка","ћушке","ћушки","ћушку","ћушне","ћушну","убава","убаво","убада","убаце","убаци","убеде","убеди","убере","убери","уберу","убила","убиле","убили","убило","убира","убире","убиру","убите","убити","убица","убице","убици","убицо","убицу","убише","убија","убије","убију","убиће","убићу","убога","убоге","убоги","убого","убогу","убода","убоде","убоди","убоду","убола","уболе","уболи","уболо","убоја","убоје","убоји","убран","убрао","убрах","убрза","убрзо","убрус","убрља","убуђа","уваже","уважи","увала","увале","ували","увалу","уваља","уведе","уведи","уведу","увеже","увежи","увежу","увеза","увезе","увезу","увела","увеле","увели","увело","увелу","увене","увену","увере","увери","увета","увету","увече","увећа","увида","увиде","увиди","увиду","увила","увиле","увили","увило","увире","увиру","увити","увише","увиђа","увија","увије","увију","увиће","увићу","увода","уводе","уводи","уводу","увоза","увозе","увози","увозу","уврне","уврни","уврну","уврте","уврти","уврће","уврћу","увуку","увуци","увуче","увући","угазе","угази","угану","угасе","угаси","угађа","угега","угиба","угине","угину","углас","углед","углом","угнеш","угнуо","угнут","угоде","угоди","угони","угоје","угоји","угреј","угриз","угура","угуше","угуши","угљар","угљем","угљен","угљом","удава","удаве","удави","удаде","удаду","удала","удале","удали","удамо","удане","удара","ударе","удари","удару","удата","удате","удати","удато","удату","удаха","удахе","удаху","удаше","удаја","удаје","удаји","удају","удаље","удаљи","удаће","удаћу","удбаш","удела","уделе","удели","уделу","удене","удени","удену","удеса","удесе","удеси","удесу","удица","удице","удици","удицу","удише","удиши","удишу","удова","удове","удови","удову","удоми","удубе","удуби","ужади","ужара","ужаре","ужари","ужаса","ужасе","ужаси","ужасу","уждио","ужеле","ужета","ужету","ужива","уживе","уживи","уживо","ужина","ужине","ужини","ужину","ужици","узама","узана","узане","узани","узано","узану","узвик","узгон","узгој","уздам","уздао","уздах","уздаш","уздај","уздом","уздуж","узела","узеле","узели","узело","узета","узете","узети","узето","узету","узеше","узеће","узећу","узида","узима","узица","узице","узици","узицу","узлет","узмак","узмем","узмеш","узнео","узора","узоре","узори","узору","узрок","уинат","укаже","укажи","укажу","указа","указе","укази","указу","укаса","укаче","укачи","укаља","укање","укеба","укења","укива","укида","укиде","укине","укину","укипи","уклео","уклет","укока","укопа","укора","укоре","укори","укору","укосе","укоси","укосо","укоче","укочи","украо","украс","украј","укруг","укрца","укува","укуса","укусе","укуси","укусу","укуца","улаже","улажу","улаза","улазе","улази","улазу","улара","уларе","улари","улево","улеже","улежу","улепи","улете","улети","улењи","улеће","улећи","улећу","улива","улила","улиле","улили","улило","улити","улица","улице","улици","улицу","улише","улије","улију","улиће","улићу","улова","улове","улови","улову","улога","улоге","улогу","уложе","уложи","улози","ултра","улуби","улудо","умаже","умаза","умака","умаку","умало","умара","умаче","умачи","умачу","умање","умањи","умаћи","умеде","умела","умеле","умели","умело","умемо","умесе","умеси","умете","умети","умеци","умеша","умеју","умећа","умеће","умећу","умива","умила","умиле","умили","умило","умине","умину","умире","умири","умиру","умити","умише","умије","умију","умиће","умићу","умним","умних","умног","умном","умној","умова","умове","умови","умоли","умора","уморе","умори","умору","умота","умоче","умочи","умрем","умрех","умреш","умрла","умрле","умрли","умрло","умрлу","умрси","умрља","умуте","умути","умуче","умује","умују","умњак","унела","унеле","унели","унело","унесе","унеси","унесу","унета","унете","унети","унето","унету","унеше","унеће","унећу","унизе","унизи","унија","уније","унији","унију","уноса","уносе","уноси","уносу","унука","унуке","унуки","унуку","унуци","унуче","уочен","уочим","уочио","уочих","уочиш","упаво","упада","упаде","упади","упаду","упала","упале","упали","упало","упалу","упаре","упари","упаса","упаше","упаши","упашу","упело","упере","упери","упеца","упече","упила","упиле","упили","упило","упире","упиру","уписа","упита","упити","упиша","упише","упиши","упишу","упија","упије","упију","упиље","упиљи","упиње","упињу","упиће","уплео","уплив","упола","упрем","упрех","упреш","упрже","упрла","упрле","упрли","упрло","упрпи","упрта","упрте","упрти","упрто","упрља","упуза","упузи","упута","упуте","упути","упуту","упуца","ураде","уради","урала","урали","уралу","ураме","урами","урана","урања","урбан","уреда","уреде","уреди","уреду","уреже","урежи","урежу","уреза","урезе","урези","урече","урећи","урина","урину","урлам","урлао","урлаш","урлај","урлик","урода","уроде","уроди","урока","уроке","уроку","урола","уроне","урони","уроте","уроту","уроци","уруче","уручи","уруше","уруши","усаде","усади","усами","усана","усева","усеве","усеви","усека","усеке","усеку","усела","уселе","усели","усере","усеру","усеца","усеци","усече","усећи","усири","усиса","усија","уским","уских","уског","уском","уској","ускрс","услед","услов","усмен","уснем","усник","усним","уснио","усних","усниш","усном","усној","уснуо","усоле","усоли","усоси","успем","успео","успех","успеш","успне","успну","успон","успут","усран","усрао","усред","усрче","устав","устао","устах","устај","усуда","усуде","усуди","усуду","усука","усула","усули","усути","усуто","усуту","усхте","утаба","утаже","утажи","утапа","утаја","утаје","утаји","утају","утање","утањи","утеге","утежу","утера","утеси","утеха","утехе","утехи","утехо","утеху","утече","утеше","утеши","утећи","утире","утиру","утиче","утичу","утиша","уткан","уткао","утове","утови","утока","утоке","утоку","утоле","утоли","утоне","утони","утону","утопе","утопи","утори","утоци","утрем","утрла","утрле","утрли","утрло","утрне","утрну","утрпа","утрта","утрте","утрти","утрто","утрча","утрче","утрчи","утрља","утуве","утуви","утуре","утуца","утуче","утући","ухода","уходе","уходи","уходо","уходу","уцена","уцене","уцени","уцену","уцрта","учена","учене","учени","учено","учену","учења","учење","учењу","учећи","учила","училе","учили","учило","учимо","учина","учине","учини","учино","учину","учита","учите","учити","учиће","учићу","учкур","учмао","учтив","ушата","ушате","ушати","ушато","ушату","ушепа","ушета","ушива","ушила","ушили","ушима","ушине","ушину","ушити","ушица","ушице","ушици","ушицу","ушије","ушију","ушиљи","ушиће","ушићу","ушним","ушних","ушног","ушном","ушној","ушоња","ушоње","ушоњи","ушоњо","ушоњу","уштап","уштва","уштве","уштви","уштво","уштву","уштрб","ушуња","ушљив","ушћем","уђемо","уђете","уђимо","уђите","уђоше","ујака","ујаке","ујаку","ујаха","ујаци","ујаче","ујаше","ујашу","уједа","уједе","уједи","уједу","ујела","ујеле","ујели","ујело","ујеше","ујкин","ујнин","ујном","ујури","уљана","уљане","уљани","уљано","уљану","уљаст","уљеза","уљезе","уљези","уљезу","уљима","уљним","уљних","уљног","уљном","уљној","уњиха","уњкав","уњкао","ућаре","ућари","ућеба","ућута","ућуте","ућути","угара","угаре","удбин","удбом","ужица","ужице","ужицу","узбек","улцињ","урала","флашу","флека","флеке","флеку","флерт","флопи","флора","флоре","флори","флору","флота","флоте","флоти","флото","флоту","флуид","флуор","фоаје","фокер","фокин","фоком","фокус","фолна","фонда","фонду","фонта","форда","форду","форма","форме","форми","форму","форум","фосил","фосне","фосни","фосну","фотка","фотке","фотки","фотку","фотон","фотос","фраза","фразе","фрази","фразу","фрака","фраку","фреон","фрејм","фриза","фризу","фрика","фркне","фркну","фрком","фркће","фркћу","фронт","фртаљ","фрула","фруле","фрули","фрулу","фрфља","фукса","фуксо","фунта","фунте","фунти","фунту","фурао","фураш","фурај","футон","фуфом","фушер","фућка","фјорд","фауст","фидел","филип","финац","финца","финце","финци","фирер","фобос","франц","фреја","фреје","фреји","фрејо","фреју","фрома","фрому","фројд","хабов","хабом","хаику","хакер","халву","халом","хамам","хамер","ханом","хаоса","хаосу","хапсе","хапси","хапсу","харао","харач","хараш","харем","харли","харфа","харфе","харфи","харфу","хаски","хауба","хаубе","хауби","хаубу","хашиш","хашка","хашке","хашки","хашко","хашку","хајао","хајде","хајем","хајка","хајке","хајки","хајку","хајмо","хајте","хајци","хаљом","хвала","хвале","хвали","хвалу","хвата","хвати","хвату","хекла","херој","херца","хељда","хељде","хељди","хељду","хидра","хидре","хидри","хидру","химен","химна","химне","химни","химну","хинди","хинду","хипер","хипик","хиром","хитан","хитао","хитар","хитац","хиташ","хитна","хитне","хитни","хитно","хитну","хитра","хитре","хитри","хитро","хитру","хитња","хитњу","хицем","хлада","хладе","хлади","хладу","хлеба","хлебу","хлора","хмеља","хобит","ходам","ходао","ходач","ходаш","ходај","ходим","ходио","ходиш","ходом","хокеј","холом","хомић","хонда","хонде","хонди","хонду","хорда","хорде","хорди","хорду","хором","хорор","хотел","хоћеш","хоџин","храма","храму","храна","хране","храни","храну","храст","хриди","хркао","хркну","хрлим","хрлио","хрлиш","хрома","хроме","хроми","хромо","хрому","хрпом","хртов","хртом","хрчак","хрчем","хрчеш","хрчка","хрчке","хрчку","хрчци","хтеде","хтела","хтеле","хтели","хтело","хтети","хтеше","хтења","хтење","хтењу","хукао","хукне","хукну","хуком","хукће","хукћу","хулим","хулио","хулиш","хумак","хуман","хумка","хумке","хумки","хумку","хумом","хумор","хумус","хумци","хунта","хунте","хунти","хунту","хусар","хучан","хучао","хучна","хучне","хучни","хучно","хучну","хушка","хујао","хуљом","хагом","хазар","хаила","хаиле","хаити","халеј","хамас","хасом","хатор","хајда","хајду","хајне","хвару","хегел","хенри","хесеа","хеџри","хитну","хобит","холмс","хомер","хоншу","хорус","хрват","христ","цакан","цакле","цакли","цакум","царев","царем","царић","царом","цвале","цвали","цвало","цвату","цвета","цвете","цвету","цвећа","цвеће","цвећу","цвике","цвиле","цвили","цврче","цврчи","цевка","цевке","цевки","цевку","цевну","цевчи","цегер","цедим","цедио","цедиш","цезар","целер","целим","целих","целог","целом","целој","ценим","ценио","цениш","ценка","ценом","цента","центе","центи","цепам","цепао","цепач","цепаш","цепај","цепин","црнца","црнце","црнци","црнцу","црнче","црнчи","црпем","црпео","црпим","црпио","црпиш","црпла","црпле","црпли","црпло","црпна","црпне","црпни","црпно","црпну","цртам","цртан","цртао","цртач","црташ","цртај","цртаћ","цртеж","цртом","црњак","црњег","црњем","црњим","црњих","црњом","црњој","цугам","цугао","цугне","цугни","цугну","цугом","цупка","цупне","цупну","цурео","цурио","цурка","цурне","цурну","цуром","цуцла","цуцле","цуцли","цуцлу","цуњао","цуњаш","цезар","церес","цером","циган","цирих","чабар","чабра","чабру","чавка","чавке","чавки","чавку","чакра","чакре","чакри","чакру","чакља","чакље","чакљи","чакљу","чалма","чалме","чалми","чалму","чамац","чамим","чамио","чамих","чамиш","чамов","чамца","чамце","чамци","чамцу","чанак","чанка","чанке","чанку","чанци","чанче","чапну","чапља","чапље","чапљи","чапљо","чапљу","чарка","чарке","чарки","чарку","чарци","часак","часио","часка","часке","часна","часне","часни","часно","часну","часом","часте","части","чаура","чауре","чаури","чауру","чауша","чауше","чауши","чаушу","чачка","чачне","чачни","чачну","чашом","чашћу","чађав","чајем","чајић","чајна","чајне","чајни","чајно","чајну","чвари","чвора","чвору","чврга","чврге","чвргу","чврст","чврље","чедан","чедна","чедне","чедни","чедно","чедну","чедом","чежња","чежње","чежњи","чежњу","чезне","чезну","чекам","чекао","чеках","чекаш","чекај","чекић","чеком","чекрк","челик","челна","челне","челни","челно","челну","челом","чемер","чеона","чеоне","чеони","чеоно","чеону","чепио","чепић","чепом","черга","черге","черги","чергу","черек","чесма","чесме","чесми","чесму","честа","честе","чести","често","честу","четка","четке","четки","четку","четна","четне","четни","четом","чешао","чешаљ","чешањ","чешем","чешеш","чешка","чешке","чешки","чешко","чешку","чешља","чешљу","чешња","чешњу","чешћа","чешће","чешћи","чешћу","чељад","чибук","чигра","чигре","чигри","чигру","чизма","чизме","чизми","чизму","чикам","чикао","чикаш","чикин","чиком","чилаш","чилео","чилим","чилих","чилиш","чилог","чилом","чилој","чиним","чинио","чиниш","чином","чиода","чиоде","чиоди","чиоду","чипка","чипке","чипки","чипку","чипом","чипса","чипсу","чирак","чиром","чиста","чисте","чисти","чисто","чисту","читав","читак","читам","читан","читао","читач","читаш","читај","читка","читке","читки","читко","читку","чичак","чичин","чичка","чичке","чичку","чичом","чичци","чишћа","чишће","чишћи","чишћу","чијег","чијем","чијим","чијих","чијом","чијој","чињах","чињен","чкиље","чкиљи","члана","члану","чмара","чмару","чобан","човек","човин","човом","чокањ","чокот","чопер","чопор","чорба","чорбе","чорби","чорбу","чочек","чојом","чувам","чуван","чувао","чувар","чувах","чуваш","чувај","чувен","чувши","чудак","чудан","чудим","чудио","чудиш","чудна","чудне","чудни","чудно","чудну","чудом","чукам","чукао","чуках","чукаш","чукај","чукаљ","чукне","чукну","чулна","чулне","чулни","чулно","чулну","чулом","чунак","чунић","чунка","чуном","чунци","чупав","чупам","чупан","чупао","чупаш","чупај","чупка","чупне","чупну","чусмо","чусте","чутих","чучао","чучањ","чучим","чучиш","чучне","чучни","чучну","чучња","чучњу","чујан","чујем","чујеш","чујмо","чујна","чујне","чујни","чујно","чујну","чујте","чуљим","чуљио","чуљиш","чуњић","чућеш","чарли","чачак","чачку","чегра","чегру","чехов","чечен","чешку","чејен","чилеа","чилеу","џекил","џорџа","џорџу","џадом","џаком","џакче","џамбо","џанки","џапао","џарам","џарао","џараш","џарка","џарне","џарну","џедај","џезва","џезве","џезви","џезву","џезом","џелат","џемом","џепић","џепна","џепне","џепни","џепно","џепну","џепом","џибра","џибре","џибри","џибру","џигља","џилит","џинов","џином","џинса","џинсу","џипов","џипом","џихад","џогер","џоинт","џокер","џокеј","џомба","џомбе","џомби","џомбу","џоњај","џудоа","џудоу","џукац","џукца","џукце","џукци","џукцу","џунка","џунке","џунки","џунку","шавом","шакал","шаком","шалим","шалио","шалиш","шалом","шалон","шалта","шаман","шамар","шанац","шанер","шанка","шанку","шанса","шансе","шанси","шансу","шануо","шанца","шанце","шанци","шанцу","шапат","шапка","шапке","шапки","шапку","шапне","шапни","шапну","шапом","шапће","шапћу","шарам","шаран","шарао","шарац","шараш","шарај","шарен","шаржу","шарка","шарке","шарки","шарку","шарма","шарму","шаров","шаром","шарца","шарци","шарцу","шатла","шатлу","шатор","шатра","шатре","шатри","шатро","шатру","шахом","шахта","шахте","шахти","шахту","шацне","шацну","шашав","шашом","шајка","шајке","шајки","шајку","шаљем","шаљеш","шаљив","шваба","швабе","шваби","швабо","швабу","шваља","шваље","шваљи","шваљу","шверц","швеца","шворц","шврља","шврћи","шврћо","шевар","шевим","шевин","шевио","шевиш","шевом","шегом","шегрт","шеика","шеике","шеику","шеици","шеиче","шемом","шеним","шенуо","шепав","шепам","шепао","шепаш","шерет","шериф","шерпа","шерпе","шерпи","шерпу","шеста","шесте","школу","шкрга","шкрге","шкргу","шкрта","шкрте","шкрти","шкрто","шкрту","шкуна","шкуне","шкуни","шкуну","шлага","шлагу","шлауф","шлајм","шлема","шлему","шлепа","шлепу","шлифа","шлица","шлицу","шлога","шлогу","шмеку","шмрка","шмрку","шмрца","шмрче","шмрчу","шнала","шнале","шнали","шналу","шнира","шнура","шогун","шодер","шоком","шопав","шопиш","шорам","шорао","шораш","шорај","шорка","шором","шортс","шорца","шорцу","шофер","шојки","шољом","шоњом","шпага","шпаге","шпагу","шпајз","шпила","шпилу","шпица","шпице","шпици","шпицу","шпиља","шпиље","шпиљи","шпиљу","шприц","шрафа","шрафу","штаба","штабу","штаве","штави","штака","штаке","штаки","штаку","штала","штале","штали","шталу","штанд","штапа","штапу","штаци","штеде","штеди","штеку","штене","штета","штете","штети","штету","штива","штиво","штиву","штима","штипа","штита","штите","штити","штиту","штиха","штоку","штоса","штофа","штофу","штрца","штрче","штрчи","штука","штуке","штуки","штуку","штула","штуле","штули","штура","штуре","штури","штуро","штуру","штуца","шугав","шуман","шумар","шумео","шумио","шумна","шумне","шумни","шумно","шумну","шумом","шумор","шунда","шунду","шунка","шунке","шунки","шунку","шупак","шупаљ","шупка","шупку","шупом","шупци","шупља","шупље","шупљи","шупљу","шурак","шурио","шутне","шутни","шутну","шутом","шушањ","шушка","шушки","шушне","шушну","шуште","шушти","шушња","шушњу","шуњам","шуњао","шуњаш","шуњај","шчепа","шљага","шљаге","шљаги","шљагу","шљака","шљаке","шљаку","шљама","шљаму","шљапи","шљаци","шљема","шљива","шљиве","шљиви","шљиву","шљука","шљуке","шљуки","шљуку","шћапе","шћапи","шабац","шанел","шапца","шапцу","швабе","шваби","шивин","шивом","шилер","шкота","шкоте","шкоти","шкоту","шопен","шошон","шпера","штипу"
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
                                        Va({ isWin: l, isStreak: !!this.lastCompletedTs && 1 === Na(new Date(this.lastCompletedTs), new Date()), numGuesses: this.rowIndex }),
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
            "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
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
