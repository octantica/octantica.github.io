(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5301: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(8226)
            }])
        },
        8226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n(5893),
                s = n(7533),
                o = n(6010),
                a = n(5675),
                c = n(1664),
                i = n(7294),
                l = {
                    src: "/_next/static/media/vincent.gif",
                    height: 3e3,
                    width: 3e3,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAcEAABBAMBAAAAAAAAAAAAAAADAAECEgQFEZH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABgRAAMBAQAAAAAAAAAAAAAAAAABAhEx/9oADAMBAAIRAxEAPwCeMx9noQxxsk5plvEt59gztyrN6iIoiUuDVt5p/9k="
                },
                A = n(9858),
                u = n(3997);
            var h = [{
                    href: "https://github.com/octantica/octantica.github.io",
                    text: "source code"
                }],
                f = function() {
                    var e = (0, i.useState)(!1),
                        t = e[0],
                        n = e[1],
                        u = (0, i.useState)(!1),
                        f = u[0],
                        d = u[1],
                        x = (0, i.useRef)(),
                        m = function() {
                            x.current && (clearTimeout(x.current), x.current = void 0)
                        },
                        p = function() {
                            m(), d(!0)
                        },
                        v = (0, i.useCallback)((function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            m(), 0 === e ? d(!1) : x.current = setTimeout((function() {
                                return d(!1)
                            }), e)
                        }), []),
                        k = (0, i.useRef)(null);
                    return (0, i.useEffect)((function() {
                        var e = function(e) {
                            var t, n;
                            (t = e.target, (null != (n = HTMLElement) && "undefined" !== typeof Symbol && n[Symbol.hasInstance] ? n[Symbol.hasInstance](t) : t instanceof n) && k.current && k.current.contains(e.target)) || v()
                        };
                        return addEventListener("pointerdown", e, !0),
                            function() {
                                m(), removeEventListener("pointerdown", e, !0)
                            }
                    }), [v]), (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(A.K, {
                            persist: !0,
                            stateKey: "ok3",
                            folders: [{
                                href: "https://unlicensed.astro.clinic",
                                style: A.b.Default,
                                name: "runif(1)",
                                x: .65,
                                y: .75
                            }, {
                                href: "/rewind",
                                style: A.b.Black,
                                name: "rewind",
                                x: .55,
                                y: .15
                            }, {
                                href: "/acknowledgment",
                                style: A.b.Gray,
                                name: "acknowledgment",
                                x: .18,
                                y: .48
                            }, {
                                style: A.b.Image,
                                src: "/mm.jpg",
                                x: .5,
                                y: .5,
                                onClick: function() {
                                    n(!0)
                                }
                            }]
                        }), 
                        (0, r.jsx)("div", {
                            className: "fixed bottom-8 left-0 right-0 h-0 flex justify-center items-center z-30",
                            children: (0, r.jsx)("div", {
                                className: "absolute bottom-0 text-black/50 font-mono",
                                children: h.map((function(e, t) {
                                    return (0, r.jsxs)(i.Fragment, {
                                        children: [0 !== t ? (0, r.jsx)(r.Fragment, {
                                            children: " / "
                                        }) : null, (0, r.jsx)("a", {
                                            className: "hover:text-[#cd3f25]",
                                            href: e.href,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: e.text
                                        })]
                                    }, t)
                                }))
                            })
                        }), (0, r.jsx)(s.V, {
                            open: t,
                            onClose: function() {
                                return n(!1)
                            },
                            static: !0,
                            children: (0, r.jsxs)("div", {
                                className: t ? "block" : "hidden",
                                children: [(0, r.jsx)("div", {
                                    className: "fixed inset-0 bg-black/50 z-40",
                                    "aria-hidden": "true"
                                }), (0, r.jsx)("div", {
                                    className: "fixed inset-0 flex items-center justify-center z-40",
                                    children: (0, r.jsx)(s.V.Panel, {
                                        className: "mx-auto max-h-[calc(min(100vh,100vw,800px)-32px)] max-w-[calc(min(100vh,100vw,800px)-32px)]",
                                        children: (0, r.jsx)(a.default, {
                                            src: l,
                                            priority: !0
                                        })
                                    })
                                })]
                            })
                        })]
                    })
                };
            f.getLayout = function(e) {
                var t = e.children;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(u.y, {
                        title: "oklama"
                    }), t]
                })
            };
            var d = f
        }
    },
    function(e) {
        e.O(0, [675, 113, 787, 774, 888, 179], (function() {
            return t = 5301, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);