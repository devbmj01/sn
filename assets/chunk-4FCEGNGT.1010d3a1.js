import {
    r as a,
    j as p,
    b as $e,
    m as _e,
    c as Y,
    d as ke,
    af as Se,
    ag as Be,
    a1 as L,
    ah as pt,
    ai as xe,
    aj as we,
    ak as Ct,
    al as x,
    am as R,
    an as ge,
    ao as Ne,
    _ as ee,
    ap as Xe,
    aq as kt,
    ar as St,
    as as X,
    at as Ue,
    au as Ee,
    av as xt,
    aw as wt,
    ax as Ft,
    ay as Ye,
    az as ze,
    aA as Pt,
    aB as Mt,
    aC as Et,
    aD as It,
    aE as Rt,
    aF as _t,
    aG as Bt,
    aH as Nt,
    aI as Dt,
    aJ as Lt,
    aK as Tt
} from "./index-4a641d3d.js";
import {
    t as At
} from "./index.979d1106.js";
import {
    s as Ot
} from "./chunk-SR4VX3RF.416d3c8d.js";
var jt = {
        initial: ({
            offsetX: e,
            offsetY: t,
            transition: n,
            transitionEnd: r,
            delay: o
        }) => {
            var s;
            return {
                opacity: 0,
                x: e,
                y: t,
                transition: (s = n == null ? void 0 : n.exit) != null ? s : ke.exit(Se.exit, o),
                transitionEnd: r == null ? void 0 : r.exit
            }
        },
        enter: ({
            transition: e,
            transitionEnd: t,
            delay: n
        }) => {
            var r;
            return {
                opacity: 1,
                x: 0,
                y: 0,
                transition: (r = e == null ? void 0 : e.enter) != null ? r : ke.enter(Se.enter, n),
                transitionEnd: t == null ? void 0 : t.enter
            }
        },
        exit: ({
            offsetY: e,
            offsetX: t,
            transition: n,
            transitionEnd: r,
            reverse: o,
            delay: s
        }) => {
            var c;
            const i = {
                x: t,
                y: e
            };
            return {
                opacity: 0,
                transition: (c = n == null ? void 0 : n.exit) != null ? c : ke.exit(Se.exit, s),
                ...o ? { ...i,
                    transitionEnd: r == null ? void 0 : r.exit
                } : {
                    transitionEnd: { ...i,
                        ...r == null ? void 0 : r.exit
                    }
                }
            }
        }
    },
    re = {
        initial: "initial",
        animate: "enter",
        exit: "exit",
        variants: jt
    },
    Wt = a.forwardRef(function(t, n) {
        const {
            unmountOnExit: r,
            in: o,
            reverse: s = !0,
            className: c,
            offsetX: i = 0,
            offsetY: m = 8,
            transition: u,
            transitionEnd: d,
            delay: f,
            ...y
        } = t, g = r ? o && r : !0, h = o || r ? "enter" : "exit", l = {
            offsetX: i,
            offsetY: m,
            reverse: s,
            transition: u,
            transitionEnd: d,
            delay: f
        };
        return p.jsx($e, {
            custom: l,
            children: g && p.jsx(_e.div, {
                ref: n,
                className: Y("chakra-offset-slide", c),
                custom: l,
                ...re,
                animate: h,
                ...y
            })
        })
    });
Wt.displayName = "SlideFade";
var [wr, Ht] = Be({
    name: "CheckboxGroupContext",
    strict: !1
});

function Gt(e) {
    const [t, n] = a.useState(e), [r, o] = a.useState(!1);
    return e !== t && (o(!0), n(e)), r
}

function $t(e) {
    return p.jsx(L.svg, {
        width: "1.2em",
        viewBox: "0 0 12 10",
        style: {
            fill: "none",
            strokeWidth: 2,
            stroke: "currentColor",
            strokeDasharray: 16
        },
        ...e,
        children: p.jsx("polyline", {
            points: "1.5 6 4.5 9 10.5 1"
        })
    })
}

function Xt(e) {
    return p.jsx(L.svg, {
        width: "1.2em",
        viewBox: "0 0 24 24",
        style: {
            stroke: "currentColor",
            strokeWidth: 4
        },
        ...e,
        children: p.jsx("line", {
            x1: "21",
            x2: "3",
            y1: "12",
            y2: "12"
        })
    })
}

function Ut(e) {
    const {
        isIndeterminate: t,
        isChecked: n,
        ...r
    } = e, o = t ? Xt : $t;
    return n || t ? p.jsx(L.div, {
        style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%"
        },
        children: p.jsx(o, { ...r
        })
    }) : null
}
var Yt = {
    border: "0",
    clip: "rect(0, 0, 0, 0)",
    height: "1px",
    width: "1px",
    margin: "-1px",
    padding: "0",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute"
};

function zt(e, t = []) {
    const n = Object.assign({}, e);
    for (const r of t) r in n && delete n[r];
    return n
}

function Kt(e = {}) {
    const t = pt(e),
        {
            isDisabled: n,
            isReadOnly: r,
            isRequired: o,
            isInvalid: s,
            id: c,
            onBlur: i,
            onFocus: m,
            "aria-describedby": u
        } = t,
        {
            defaultChecked: d,
            isChecked: f,
            isFocusable: y,
            onChange: g,
            isIndeterminate: h,
            name: l,
            value: v,
            tabIndex: C = void 0,
            "aria-label": F,
            "aria-labelledby": P,
            "aria-invalid": S,
            ...w
        } = e,
        M = zt(w, ["isDisabled", "isReadOnly", "isRequired", "isInvalid", "id", "onBlur", "onFocus", "aria-describedby"]),
        I = xe(g),
        _ = xe(i),
        k = xe(m),
        [B, T] = a.useState(!1),
        [A, H] = a.useState(!1),
        [W, se] = a.useState(!1),
        [U, G] = a.useState(!1);
    a.useEffect(() => At(T), []);
    const N = a.useRef(null),
        [ie, pe] = a.useState(!0),
        [Ce, z] = a.useState(!!d),
        te = f !== void 0,
        E = te ? f : Ce,
        ce = a.useCallback(b => {
            if (r || n) {
                b.preventDefault();
                return
            }
            te || z(E ? b.target.checked : h ? !0 : b.target.checked), I == null || I(b)
        }, [r, n, E, te, h, I]);
    we(() => {
        N.current && (N.current.indeterminate = !!h)
    }, [h]), Ct(() => {
        n && H(!1)
    }, [n, H]), we(() => {
        const b = N.current;
        if (!(b != null && b.form)) return;
        const D = () => {
            z(!!d)
        };
        return b.form.addEventListener("reset", D), () => {
            var j;
            return (j = b.form) == null ? void 0 : j.removeEventListener("reset", D)
        }
    }, []);
    const le = n && !y,
        O = a.useCallback(b => {
            b.key === " " && G(!0)
        }, [G]),
        $ = a.useCallback(b => {
            b.key === " " && G(!1)
        }, [G]);
    we(() => {
        if (!N.current) return;
        N.current.checked !== E && z(N.current.checked)
    }, [N.current]);
    const ne = a.useCallback((b = {}, D = null) => {
            const j = de => {
                A && de.preventDefault(), G(!0)
            };
            return { ...b,
                ref: D,
                "data-active": x(U),
                "data-hover": x(W),
                "data-checked": x(E),
                "data-focus": x(A),
                "data-focus-visible": x(A && B),
                "data-indeterminate": x(h),
                "data-disabled": x(n),
                "data-invalid": x(s),
                "data-readonly": x(r),
                "aria-hidden": !0,
                onMouseDown: R(b.onMouseDown, j),
                onMouseUp: R(b.onMouseUp, () => G(!1)),
                onMouseEnter: R(b.onMouseEnter, () => se(!0)),
                onMouseLeave: R(b.onMouseLeave, () => se(!1))
            }
        }, [U, E, n, A, B, W, h, s, r]),
        ue = a.useCallback((b = {}, D = null) => ({ ...b,
            ref: D,
            "data-active": x(U),
            "data-hover": x(W),
            "data-checked": x(E),
            "data-focus": x(A),
            "data-focus-visible": x(A && B),
            "data-indeterminate": x(h),
            "data-disabled": x(n),
            "data-invalid": x(s),
            "data-readonly": x(r)
        }), [U, E, n, A, B, W, h, s, r]),
        gt = a.useCallback((b = {}, D = null) => ({ ...M,
            ...b,
            ref: ge(D, j => {
                j && pe(j.tagName === "LABEL")
            }),
            onClick: R(b.onClick, () => {
                var j;
                ie || ((j = N.current) == null || j.click(), requestAnimationFrame(() => {
                    var de;
                    (de = N.current) == null || de.focus({
                        preventScroll: !0
                    })
                }))
            }),
            "data-disabled": x(n),
            "data-checked": x(E),
            "data-invalid": x(s)
        }), [M, n, E, s, ie]),
        bt = a.useCallback((b = {}, D = null) => ({ ...b,
            ref: ge(N, D),
            type: "checkbox",
            name: l,
            value: v,
            id: c,
            tabIndex: C,
            onChange: R(b.onChange, ce),
            onBlur: R(b.onBlur, _, () => H(!1)),
            onFocus: R(b.onFocus, k, () => H(!0)),
            onKeyDown: R(b.onKeyDown, O),
            onKeyUp: R(b.onKeyUp, $),
            required: o,
            checked: E,
            disabled: le,
            readOnly: r,
            "aria-label": F,
            "aria-labelledby": P,
            "aria-invalid": S ? !!S : s,
            "aria-describedby": u,
            "aria-disabled": n,
            style: Yt
        }), [l, v, c, ce, _, k, O, $, o, E, le, r, F, P, S, s, u, n, C]),
        yt = a.useCallback((b = {}, D = null) => ({ ...b,
            ref: D,
            onMouseDown: R(b.onMouseDown, Vt),
            "data-disabled": x(n),
            "data-checked": x(E),
            "data-invalid": x(s)
        }), [E, n, s]);
    return {
        state: {
            isInvalid: s,
            isFocused: A,
            isChecked: E,
            isActive: U,
            isHovered: W,
            isIndeterminate: h,
            isDisabled: n,
            isReadOnly: r,
            isRequired: o
        },
        getRootProps: gt,
        getCheckboxProps: ne,
        getIndicatorProps: ue,
        getInputProps: bt,
        getLabelProps: yt,
        htmlProps: M
    }
}

function Vt(e) {
    e.preventDefault(), e.stopPropagation()
}
var Zt = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        verticalAlign: "top",
        userSelect: "none",
        flexShrink: 0
    },
    qt = {
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        verticalAlign: "top",
        position: "relative"
    },
    Qt = Ne({
        from: {
            opacity: 0,
            strokeDashoffset: 16,
            transform: "scale(0.95)"
        },
        to: {
            opacity: 1,
            strokeDashoffset: 0,
            transform: "scale(1)"
        }
    }),
    Jt = Ne({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    }),
    en = Ne({
        from: {
            transform: "scaleX(0.65)"
        },
        to: {
            transform: "scaleX(1)"
        }
    }),
    tn = ee(function(t, n) {
        const r = Ht(),
            o = { ...r,
                ...t
            },
            s = Xe("Checkbox", o),
            c = kt(t),
            {
                spacing: i = "0.5rem",
                className: m,
                children: u,
                iconColor: d,
                iconSize: f,
                icon: y = p.jsx(Ut, {}),
                isChecked: g,
                isDisabled: h = r == null ? void 0 : r.isDisabled,
                onChange: l,
                inputProps: v,
                ...C
            } = c;
        let F = g;
        r != null && r.value && c.value && (F = r.value.includes(c.value));
        let P = l;
        r != null && r.onChange && c.value && (P = St(r.onChange, l));
        const {
            state: S,
            getInputProps: w,
            getCheckboxProps: M,
            getLabelProps: I,
            getRootProps: _
        } = Kt({ ...C,
            isDisabled: h,
            isChecked: F,
            onChange: P
        }), k = Gt(S.isChecked), B = a.useMemo(() => ({
            animation: k ? S.isIndeterminate ? `${Jt} 20ms linear, ${en} 200ms linear` : `${Qt} 200ms linear` : void 0,
            fontSize: f,
            color: d,
            ...s.icon
        }), [d, f, k, S.isIndeterminate, s.icon]), T = a.cloneElement(y, {
            __css: B,
            isIndeterminate: S.isIndeterminate,
            isChecked: S.isChecked
        });
        return p.jsxs(L.label, {
            __css: { ...qt,
                ...s.container
            },
            className: Y("chakra-checkbox", m),
            ..._(),
            children: [p.jsx("input", {
                className: "chakra-checkbox__input",
                ...w(v, n)
            }), p.jsx(L.span, {
                __css: { ...Zt,
                    ...s.control
                },
                className: "chakra-checkbox__control",
                ...M(),
                children: T
            }), u && p.jsx(L.span, {
                className: "chakra-checkbox__label",
                ...I(),
                __css: {
                    marginStart: i,
                    ...s.label
                },
                children: u
            })]
        })
    });
tn.displayName = "Checkbox";

function nn(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t), e
}

function rn(e, t) {
    var n = a.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var o = n.value;
                    o !== r && (n.value = r, n.callback(r, o))
                }
            }
        }
    })[0];
    return n.callback = t, n.facade
}

function Ke(e, t) {
    return rn(t || null, function(n) {
        return e.forEach(function(r) {
            return nn(r, n)
        })
    })
}
var Fe = {
    width: "1px",
    height: "0px",
    padding: 0,
    overflow: "hidden",
    position: "fixed",
    top: "1px",
    left: "1px"
};

function Ve(e) {
    return e
}

function Ze(e, t) {
    t === void 0 && (t = Ve);
    var n = [],
        r = !1,
        o = {
            read: function() {
                if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return n.length ? n[n.length - 1] : e
            },
            useMedium: function(s) {
                var c = t(s, r);
                return n.push(c),
                    function() {
                        n = n.filter(function(i) {
                            return i !== c
                        })
                    }
            },
            assignSyncMedium: function(s) {
                for (r = !0; n.length;) {
                    var c = n;
                    n = [], c.forEach(s)
                }
                n = {
                    push: function(i) {
                        return s(i)
                    },
                    filter: function() {
                        return n
                    }
                }
            },
            assignMedium: function(s) {
                r = !0;
                var c = [];
                if (n.length) {
                    var i = n;
                    n = [], i.forEach(s), c = n
                }
                var m = function() {
                        var d = c;
                        c = [], d.forEach(s)
                    },
                    u = function() {
                        return Promise.resolve().then(m)
                    };
                u(), n = {
                    push: function(d) {
                        c.push(d), u()
                    },
                    filter: function(d) {
                        return c = c.filter(d), n
                    }
                }
            }
        };
    return o
}

function De(e, t) {
    return t === void 0 && (t = Ve), Ze(e, t)
}

function qe(e) {
    e === void 0 && (e = {});
    var t = Ze(null);
    return t.options = X({
        async: !0,
        ssr: !1
    }, e), t
}
var Qe = function(e) {
    var t = e.sideCar,
        n = Ue(e, ["sideCar"]);
    if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r) throw new Error("Sidecar medium not found");
    return a.createElement(r, X({}, n))
};
Qe.isSideCarExport = !0;

function an(e, t) {
    return e.useMedium(t), Qe
}
var Je = De({}, function(e) {
        var t = e.target,
            n = e.currentTarget;
        return {
            target: t,
            currentTarget: n
        }
    }),
    et = De(),
    on = De(),
    sn = qe({
        async: !0
    }),
    cn = [],
    Le = a.forwardRef(function(t, n) {
        var r, o = a.useState(),
            s = o[0],
            c = o[1],
            i = a.useRef(),
            m = a.useRef(!1),
            u = a.useRef(null),
            d = t.children,
            f = t.disabled,
            y = t.noFocusGuards,
            g = t.persistentFocus,
            h = t.crossFrame,
            l = t.autoFocus;
        t.allowTextSelection;
        var v = t.group,
            C = t.className,
            F = t.whiteList,
            P = t.hasPositiveIndices,
            S = t.shards,
            w = S === void 0 ? cn : S,
            M = t.as,
            I = M === void 0 ? "div" : M,
            _ = t.lockProps,
            k = _ === void 0 ? {} : _,
            B = t.sideCar,
            T = t.returnFocus,
            A = t.focusOptions,
            H = t.onActivation,
            W = t.onDeactivation,
            se = a.useState({}),
            U = se[0],
            G = a.useCallback(function() {
                u.current = u.current || document && document.activeElement, i.current && H && H(i.current), m.current = !0
            }, [H]),
            N = a.useCallback(function() {
                m.current = !1, W && W(i.current)
            }, [W]);
        a.useEffect(function() {
            f || (u.current = null)
        }, []);
        var ie = a.useCallback(function(O) {
                var $ = u.current;
                if ($ && $.focus) {
                    var ne = typeof T == "function" ? T($) : T;
                    if (ne) {
                        var ue = typeof ne == "object" ? ne : void 0;
                        u.current = null, O ? Promise.resolve().then(function() {
                            return $.focus(ue)
                        }) : $.focus(ue)
                    }
                }
            }, [T]),
            pe = a.useCallback(function(O) {
                m.current && Je.useMedium(O)
            }, []),
            Ce = et.useMedium,
            z = a.useCallback(function(O) {
                i.current !== O && (i.current = O, c(O))
            }, []),
            te = Ee((r = {}, r[xt] = f && "disabled", r[wt] = v, r), k),
            E = y !== !0,
            ce = E && y !== "tail",
            le = Ke([n, z]);
        return a.createElement(a.Fragment, null, E && [a.createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            tabIndex: f ? -1 : 0,
            style: Fe
        }), P ? a.createElement("div", {
            key: "guard-nearest",
            "data-focus-guard": !0,
            tabIndex: f ? -1 : 1,
            style: Fe
        }) : null], !f && a.createElement(B, {
            id: U,
            sideCar: sn,
            observed: s,
            disabled: f,
            persistentFocus: g,
            crossFrame: h,
            autoFocus: l,
            whiteList: F,
            shards: w,
            onActivation: G,
            onDeactivation: N,
            returnFocus: ie,
            focusOptions: A
        }), a.createElement(I, Ee({
            ref: le
        }, te, {
            className: C,
            onBlur: Ce,
            onFocus: pe
        }), d), ce && a.createElement("div", {
            "data-focus-guard": !0,
            tabIndex: f ? -1 : 0,
            style: Fe
        }))
    });
Le.propTypes = {};
Le.defaultProps = {
    children: void 0,
    disabled: !1,
    returnFocus: !1,
    focusOptions: void 0,
    noFocusGuards: !1,
    autoFocus: !0,
    persistentFocus: !1,
    crossFrame: !0,
    hasPositiveIndices: void 0,
    allowTextSelection: void 0,
    group: void 0,
    className: void 0,
    whiteList: void 0,
    shards: void 0,
    as: "div",
    lockProps: {},
    onActivation: void 0,
    onDeactivation: void 0
};
const tt = Le;

function nt(e) {
    var t = window,
        n = t.setImmediate;
    typeof n < "u" ? n(e) : setTimeout(e, 1)
}
var ln = function() {
        return document && document.activeElement === document.body
    },
    un = function() {
        return ln() || Mt()
    },
    q = null,
    Z = null,
    Q = null,
    ae = !1,
    dn = function() {
        return !0
    },
    fn = function(t) {
        return (q.whiteList || dn)(t)
    },
    vn = function(t, n) {
        Q = {
            observerNode: t,
            portaledElement: n
        }
    },
    mn = function(t) {
        return Q && Q.portaledElement === t
    };

function Ae(e, t, n, r) {
    var o = null,
        s = e;
    do {
        var c = r[s];
        if (c.guard) c.node.dataset.focusAutoGuard && (o = c);
        else if (c.lockItem) {
            if (s !== e) return;
            o = null
        } else break
    } while ((s += n) !== t);
    o && (o.node.tabIndex = 0)
}
var hn = function(t) {
        return t && "current" in t ? t.current : t
    },
    gn = function(t) {
        return t ? !!ae : ae === "meanwhile"
    },
    bn = function e(t, n, r) {
        return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r))
    },
    yn = function(t, n) {
        return n.some(function(r) {
            return bn(t, r, r)
        })
    },
    be = function() {
        var t = !1;
        if (q) {
            var n = q,
                r = n.observed,
                o = n.persistentFocus,
                s = n.autoFocus,
                c = n.shards,
                i = n.crossFrame,
                m = n.focusOptions,
                u = r || Q && Q.portaledElement,
                d = document && document.activeElement;
            if (u) {
                var f = [u].concat(c.map(hn).filter(Boolean));
                if ((!d || fn(d)) && (o || gn(i) || !un() || !Z && s) && (u && !(ze(f) || d && yn(d, f) || mn(d)) && (document && !Z && d && !s ? (d.blur && d.blur(), document.body.focus()) : (t = Ye(f, Z, {
                        focusOptions: m
                    }), Q = {})), ae = !1, Z = document && document.activeElement), document) {
                    var y = document && document.activeElement,
                        g = Pt(f),
                        h = g.map(function(l) {
                            var v = l.node;
                            return v
                        }).indexOf(y);
                    h > -1 && (g.filter(function(l) {
                        var v = l.guard,
                            C = l.node;
                        return v && C.dataset.focusAutoGuard
                    }).forEach(function(l) {
                        var v = l.node;
                        return v.removeAttribute("tabIndex")
                    }), Ae(h, g.length, 1, g), Ae(h, -1, -1, g))
                }
            }
        }
        return t
    },
    rt = function(t) {
        be() && t && (t.stopPropagation(), t.preventDefault())
    },
    Te = function() {
        return nt(be)
    },
    pn = function(t) {
        var n = t.target,
            r = t.currentTarget;
        r.contains(n) || vn(r, n)
    },
    Cn = function() {
        return null
    },
    at = function() {
        ae = "just", setTimeout(function() {
            ae = "meanwhile"
        }, 0)
    },
    kn = function() {
        document.addEventListener("focusin", rt), document.addEventListener("focusout", Te), window.addEventListener("blur", at)
    },
    Sn = function() {
        document.removeEventListener("focusin", rt), document.removeEventListener("focusout", Te), window.removeEventListener("blur", at)
    };

function xn(e) {
    return e.filter(function(t) {
        var n = t.disabled;
        return !n
    })
}

function wn(e) {
    var t = e.slice(-1)[0];
    t && !q && kn();
    var n = q,
        r = n && t && t.id === n.id;
    q = t, n && !r && (n.onDeactivation(), e.filter(function(o) {
        var s = o.id;
        return s === n.id
    }).length || n.returnFocus(!t)), t ? (Z = null, (!r || n.observed !== t.observed) && t.onActivation(), be(), nt(be)) : (Sn(), Z = null)
}
Je.assignSyncMedium(pn);
et.assignMedium(Te);
on.assignMedium(function(e) {
    return e({
        moveFocusInside: Ye,
        focusInside: ze
    })
});
const Fn = Ft(xn, wn)(Cn);
var ot = a.forwardRef(function(t, n) {
        return a.createElement(tt, Ee({
            sideCar: Fn,
            ref: n
        }, t))
    }),
    st = tt.propTypes || {};
st.sideCar;
Et(st, ["sideCar"]);
ot.propTypes = {};
const Oe = ot;
var je, Pn = (je = Oe.default) != null ? je : Oe,
    it = e => {
        const {
            initialFocusRef: t,
            finalFocusRef: n,
            contentRef: r,
            restoreFocus: o,
            children: s,
            isDisabled: c,
            autoFocus: i,
            persistentFocus: m,
            lockFocusAcrossFrames: u
        } = e, d = a.useCallback(() => {
            t != null && t.current ? t.current.focus() : r != null && r.current && It(r.current).length === 0 && requestAnimationFrame(() => {
                var h;
                (h = r.current) == null || h.focus()
            })
        }, [t, r]), f = a.useCallback(() => {
            var g;
            (g = n == null ? void 0 : n.current) == null || g.focus()
        }, [n]), y = o && !n;
        return p.jsx(Pn, {
            crossFrame: u,
            persistentFocus: m,
            autoFocus: i,
            disabled: c,
            onActivation: d,
            onDeactivation: f,
            returnFocus: y,
            children: s
        })
    };
it.displayName = "FocusLock";
var Mn = {
        slideInBottom: { ...re,
            custom: {
                offsetY: 16,
                reverse: !0
            }
        },
        slideInRight: { ...re,
            custom: {
                offsetX: 16,
                reverse: !0
            }
        },
        slideInTop: { ...re,
            custom: {
                offsetY: -16,
                reverse: !0
            }
        },
        slideInLeft: { ...re,
            custom: {
                offsetX: -16,
                reverse: !0
            }
        },
        scale: { ...Ot,
            custom: {
                initialScale: .95,
                reverse: !0
            }
        },
        none: {}
    },
    En = L(_e.section),
    In = e => Mn[e || "none"],
    ct = a.forwardRef((e, t) => {
        const {
            preset: n,
            motionProps: r = In(n),
            ...o
        } = e;
        return p.jsx(En, {
            ref: t,
            ...r,
            ...o
        })
    });
ct.displayName = "ModalTransition";
var Rn = Object.defineProperty,
    _n = (e, t, n) => t in e ? Rn(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    Bn = (e, t, n) => (_n(e, typeof t != "symbol" ? t + "" : t, n), n),
    Nn = class {
        constructor() {
            Bn(this, "modals"), this.modals = new Map
        }
        add(e) {
            return this.modals.set(e, this.modals.size + 1), this.modals.size
        }
        remove(e) {
            this.modals.delete(e)
        }
        isTopModal(e) {
            return e ? this.modals.get(e) === this.modals.size : !1
        }
    },
    Ie = new Nn;

function lt(e, t) {
    const [n, r] = a.useState(0);
    return a.useEffect(() => {
        const o = e.current;
        if (o) {
            if (t) {
                const s = Ie.add(o);
                r(s)
            }
            return () => {
                Ie.remove(o), r(0)
            }
        }
    }, [t, e]), n
}

function Dn(e) {
    const {
        isOpen: t,
        onClose: n,
        id: r,
        closeOnOverlayClick: o = !0,
        closeOnEsc: s = !0,
        useInert: c = !0,
        onOverlayClick: i,
        onEsc: m
    } = e, u = a.useRef(null), d = a.useRef(null), [f, y, g] = Tn(r, "chakra-modal", "chakra-modal--header", "chakra-modal--body");
    Ln(u, t && c);
    const h = lt(u, t),
        l = a.useRef(null),
        v = a.useCallback(k => {
            l.current = k.target
        }, []),
        C = a.useCallback(k => {
            k.key === "Escape" && (k.stopPropagation(), s && (n == null || n()), m == null || m())
        }, [s, n, m]),
        [F, P] = a.useState(!1),
        [S, w] = a.useState(!1),
        M = a.useCallback((k = {}, B = null) => ({
            role: "dialog",
            ...k,
            ref: ge(B, u),
            id: f,
            tabIndex: -1,
            "aria-modal": !0,
            "aria-labelledby": F ? y : void 0,
            "aria-describedby": S ? g : void 0,
            onClick: R(k.onClick, T => T.stopPropagation())
        }), [g, S, f, y, F]),
        I = a.useCallback(k => {
            k.stopPropagation(), l.current === k.target && Ie.isTopModal(u.current) && (o && (n == null || n()), i == null || i())
        }, [n, o, i]),
        _ = a.useCallback((k = {}, B = null) => ({ ...k,
            ref: ge(B, d),
            onClick: R(k.onClick, I),
            onKeyDown: R(k.onKeyDown, C),
            onMouseDown: R(k.onMouseDown, v)
        }), [C, v, I]);
    return {
        isOpen: t,
        onClose: n,
        headerId: y,
        bodyId: g,
        setBodyMounted: w,
        setHeaderMounted: P,
        dialogRef: u,
        overlayRef: d,
        getDialogProps: M,
        getDialogContainerProps: _,
        index: h
    }
}

function Ln(e, t) {
    const n = e.current;
    a.useEffect(() => {
        if (!(!e.current || !t)) return Rt(e.current)
    }, [t, e, n])
}

function Tn(e, ...t) {
    const n = a.useId(),
        r = e || n;
    return a.useMemo(() => t.map(o => `${o}-${r}`), [r, t])
}
var [An, oe] = Be({
    name: "ModalStylesContext",
    errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [On, J] = Be({
    strict: !0,
    name: "ModalContext",
    errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
}), jn = e => {
    const t = {
            scrollBehavior: "outside",
            autoFocus: !0,
            trapFocus: !0,
            returnFocusOnClose: !0,
            blockScrollOnMount: !0,
            allowPinchZoom: !1,
            motionPreset: "scale",
            lockFocusAcrossFrames: !0,
            ...e
        },
        {
            portalProps: n,
            children: r,
            autoFocus: o,
            trapFocus: s,
            initialFocusRef: c,
            finalFocusRef: i,
            returnFocusOnClose: m,
            blockScrollOnMount: u,
            allowPinchZoom: d,
            preserveScrollBarGap: f,
            motionPreset: y,
            lockFocusAcrossFrames: g,
            onCloseComplete: h
        } = t,
        l = Xe("Modal", t),
        C = { ...Dn(t),
            autoFocus: o,
            trapFocus: s,
            initialFocusRef: c,
            finalFocusRef: i,
            returnFocusOnClose: m,
            blockScrollOnMount: u,
            allowPinchZoom: d,
            preserveScrollBarGap: f,
            motionPreset: y,
            lockFocusAcrossFrames: g
        };
    return p.jsx(On, {
        value: C,
        children: p.jsx(An, {
            value: l,
            children: p.jsx($e, {
                onExitComplete: h,
                children: C.isOpen && p.jsx(_t, { ...n,
                    children: r
                })
            })
        })
    })
};
jn.displayName = "Modal";
var me = "right-scroll-bar-position",
    he = "width-before-scroll-bar",
    Wn = "with-scroll-bars-hidden",
    Hn = "--removed-body-scroll-bar-size",
    ut = qe(),
    Pe = function() {},
    ye = a.forwardRef(function(e, t) {
        var n = a.useRef(null),
            r = a.useState({
                onScrollCapture: Pe,
                onWheelCapture: Pe,
                onTouchMoveCapture: Pe
            }),
            o = r[0],
            s = r[1],
            c = e.forwardProps,
            i = e.children,
            m = e.className,
            u = e.removeScrollBar,
            d = e.enabled,
            f = e.shards,
            y = e.sideCar,
            g = e.noIsolation,
            h = e.inert,
            l = e.allowPinchZoom,
            v = e.as,
            C = v === void 0 ? "div" : v,
            F = e.gapMode,
            P = Ue(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            S = y,
            w = Ke([n, t]),
            M = X(X({}, P), o);
        return a.createElement(a.Fragment, null, d && a.createElement(S, {
            sideCar: ut,
            removeScrollBar: u,
            shards: f,
            noIsolation: g,
            inert: h,
            setCallbacks: s,
            allowPinchZoom: !!l,
            lockRef: n,
            gapMode: F
        }), c ? a.cloneElement(a.Children.only(i), X(X({}, M), {
            ref: w
        })) : a.createElement(C, X({}, M, {
            className: m,
            ref: w
        }), i))
    });
ye.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
ye.classNames = {
    fullWidth: he,
    zeroRight: me
};

function Gn() {
    if (!document) return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = Bt();
    return t && e.setAttribute("nonce", t), e
}

function $n(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}

function Xn(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var Un = function() {
        var e = 0,
            t = null;
        return {
            add: function(n) {
                e == 0 && (t = Gn()) && ($n(t, n), Xn(t)), e++
            },
            remove: function() {
                e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
        }
    },
    Yn = function() {
        var e = Un();
        return function(t, n) {
            a.useEffect(function() {
                return e.add(t),
                    function() {
                        e.remove()
                    }
            }, [t && n])
        }
    },
    dt = function() {
        var e = Yn(),
            t = function(n) {
                var r = n.styles,
                    o = n.dynamic;
                return e(r, o), null
            };
        return t
    },
    zn = {
        left: 0,
        top: 0,
        right: 0,
        gap: 0
    },
    Me = function(e) {
        return parseInt(e || "", 10) || 0
    },
    Kn = function(e) {
        var t = window.getComputedStyle(document.body),
            n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
            r = t[e === "padding" ? "paddingTop" : "marginTop"],
            o = t[e === "padding" ? "paddingRight" : "marginRight"];
        return [Me(n), Me(r), Me(o)]
    },
    Vn = function(e) {
        if (e === void 0 && (e = "margin"), typeof window > "u") return zn;
        var t = Kn(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
        return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0])
        }
    },
    Zn = dt(),
    qn = function(e, t, n, r) {
        var o = e.left,
            s = e.top,
            c = e.right,
            i = e.gap;
        return n === void 0 && (n = "margin"), `
  .`.concat(Wn, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(c, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(me, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(he, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(me, " .").concat(me, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(he, " .").concat(he, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(Hn, ": ").concat(i, `px;
  }
`)
    },
    Qn = function(e) {
        var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = r === void 0 ? "margin" : r,
            s = a.useMemo(function() {
                return Vn(o)
            }, [o]);
        return a.createElement(Zn, {
            styles: qn(s, !t, o, n ? "" : "!important")
        })
    },
    Re = !1;
if (typeof window < "u") try {
    var fe = Object.defineProperty({}, "passive", {
        get: function() {
            return Re = !0, !0
        }
    });
    window.addEventListener("test", fe, fe), window.removeEventListener("test", fe, fe)
} catch {
    Re = !1
}
var K = Re ? {
        passive: !1
    } : !1,
    Jn = function(e) {
        return e.tagName === "TEXTAREA"
    },
    ft = function(e, t) {
        var n = window.getComputedStyle(e);
        return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Jn(e) && n[t] === "visible")
    },
    er = function(e) {
        return ft(e, "overflowY")
    },
    tr = function(e) {
        return ft(e, "overflowX")
    },
    We = function(e, t) {
        var n = t.ownerDocument,
            r = t;
        do {
            typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
            var o = vt(e, r);
            if (o) {
                var s = mt(e, r),
                    c = s[1],
                    i = s[2];
                if (c > i) return !0
            }
            r = r.parentNode
        } while (r && r !== n.body);
        return !1
    },
    nr = function(e) {
        var t = e.scrollTop,
            n = e.scrollHeight,
            r = e.clientHeight;
        return [t, n, r]
    },
    rr = function(e) {
        var t = e.scrollLeft,
            n = e.scrollWidth,
            r = e.clientWidth;
        return [t, n, r]
    },
    vt = function(e, t) {
        return e === "v" ? er(t) : tr(t)
    },
    mt = function(e, t) {
        return e === "v" ? nr(t) : rr(t)
    },
    ar = function(e, t) {
        return e === "h" && t === "rtl" ? -1 : 1
    },
    or = function(e, t, n, r, o) {
        var s = ar(e, window.getComputedStyle(t).direction),
            c = s * r,
            i = n.target,
            m = t.contains(i),
            u = !1,
            d = c > 0,
            f = 0,
            y = 0;
        do {
            var g = mt(e, i),
                h = g[0],
                l = g[1],
                v = g[2],
                C = l - v - s * h;
            (h || C) && vt(e, i) && (f += C, y += h), i instanceof ShadowRoot ? i = i.host : i = i.parentNode
        } while (!m && i !== document.body || m && (t.contains(i) || t === i));
        return (d && (o && Math.abs(f) < 1 || !o && c > f) || !d && (o && Math.abs(y) < 1 || !o && -c > y)) && (u = !0), u
    },
    ve = function(e) {
        return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
    },
    He = function(e) {
        return [e.deltaX, e.deltaY]
    },
    Ge = function(e) {
        return e && "current" in e ? e.current : e
    },
    sr = function(e, t) {
        return e[0] === t[0] && e[1] === t[1]
    },
    ir = function(e) {
        return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
    },
    cr = 0,
    V = [];

function lr(e) {
    var t = a.useRef([]),
        n = a.useRef([0, 0]),
        r = a.useRef(),
        o = a.useState(cr++)[0],
        s = a.useState(dt)[0],
        c = a.useRef(e);
    a.useEffect(function() {
        c.current = e
    }, [e]), a.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var l = Nt([e.lockRef.current], (e.shards || []).map(Ge), !0).filter(Boolean);
            return l.forEach(function(v) {
                    return v.classList.add("allow-interactivity-".concat(o))
                }),
                function() {
                    document.body.classList.remove("block-interactivity-".concat(o)), l.forEach(function(v) {
                        return v.classList.remove("allow-interactivity-".concat(o))
                    })
                }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var i = a.useCallback(function(l, v) {
            if ("touches" in l && l.touches.length === 2) return !c.current.allowPinchZoom;
            var C = ve(l),
                F = n.current,
                P = "deltaX" in l ? l.deltaX : F[0] - C[0],
                S = "deltaY" in l ? l.deltaY : F[1] - C[1],
                w, M = l.target,
                I = Math.abs(P) > Math.abs(S) ? "h" : "v";
            if ("touches" in l && I === "h" && M.type === "range") return !1;
            var _ = We(I, M);
            if (!_) return !0;
            if (_ ? w = I : (w = I === "v" ? "h" : "v", _ = We(I, M)), !_) return !1;
            if (!r.current && "changedTouches" in l && (P || S) && (r.current = w), !w) return !0;
            var k = r.current || w;
            return or(k, v, l, k === "h" ? P : S, !0)
        }, []),
        m = a.useCallback(function(l) {
            var v = l;
            if (!(!V.length || V[V.length - 1] !== s)) {
                var C = "deltaY" in v ? He(v) : ve(v),
                    F = t.current.filter(function(w) {
                        return w.name === v.type && (w.target === v.target || v.target === w.shadowParent) && sr(w.delta, C)
                    })[0];
                if (F && F.should) {
                    v.cancelable && v.preventDefault();
                    return
                }
                if (!F) {
                    var P = (c.current.shards || []).map(Ge).filter(Boolean).filter(function(w) {
                            return w.contains(v.target)
                        }),
                        S = P.length > 0 ? i(v, P[0]) : !c.current.noIsolation;
                    S && v.cancelable && v.preventDefault()
                }
            }
        }, []),
        u = a.useCallback(function(l, v, C, F) {
            var P = {
                name: l,
                delta: v,
                target: C,
                should: F,
                shadowParent: ur(C)
            };
            t.current.push(P), setTimeout(function() {
                t.current = t.current.filter(function(S) {
                    return S !== P
                })
            }, 1)
        }, []),
        d = a.useCallback(function(l) {
            n.current = ve(l), r.current = void 0
        }, []),
        f = a.useCallback(function(l) {
            u(l.type, He(l), l.target, i(l, e.lockRef.current))
        }, []),
        y = a.useCallback(function(l) {
            u(l.type, ve(l), l.target, i(l, e.lockRef.current))
        }, []);
    a.useEffect(function() {
        return V.push(s), e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: y
            }), document.addEventListener("wheel", m, K), document.addEventListener("touchmove", m, K), document.addEventListener("touchstart", d, K),
            function() {
                V = V.filter(function(l) {
                    return l !== s
                }), document.removeEventListener("wheel", m, K), document.removeEventListener("touchmove", m, K), document.removeEventListener("touchstart", d, K)
            }
    }, []);
    var g = e.removeScrollBar,
        h = e.inert;
    return a.createElement(a.Fragment, null, h ? a.createElement(s, {
        styles: ir(o)
    }) : null, g ? a.createElement(Qn, {
        gapMode: e.gapMode
    }) : null)
}

function ur(e) {
    for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
    return t
}
const dr = an(ut, lr);
var ht = a.forwardRef(function(e, t) {
    return a.createElement(ye, X({}, e, {
        ref: t,
        sideCar: dr
    }))
});
ht.classNames = ye.classNames;
const fr = ht;

function vr(e) {
    const {
        autoFocus: t,
        trapFocus: n,
        dialogRef: r,
        initialFocusRef: o,
        blockScrollOnMount: s,
        allowPinchZoom: c,
        finalFocusRef: i,
        returnFocusOnClose: m,
        preserveScrollBarGap: u,
        lockFocusAcrossFrames: d,
        isOpen: f
    } = J(), [y, g] = Dt();
    a.useEffect(() => {
        !y && g && setTimeout(g)
    }, [y, g]);
    const h = lt(r, f);
    return p.jsx(it, {
        autoFocus: t,
        isDisabled: !n,
        initialFocusRef: o,
        finalFocusRef: i,
        restoreFocus: m,
        contentRef: r,
        lockFocusAcrossFrames: d,
        children: p.jsx(fr, {
            removeScrollBar: !u,
            allowPinchZoom: c,
            enabled: h === 1 && s,
            forwardProps: !0,
            children: e.children
        })
    })
}
var mr = ee((e, t) => {
    const {
        className: n,
        children: r,
        containerProps: o,
        motionProps: s,
        ...c
    } = e, {
        getDialogProps: i,
        getDialogContainerProps: m
    } = J(), u = i(c, t), d = m(o), f = Y("chakra-modal__content", n), y = oe(), g = {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: "100%",
        outline: 0,
        ...y.dialog
    }, h = {
        display: "flex",
        width: "100vw",
        height: "$100vh",
        position: "fixed",
        left: 0,
        top: 0,
        ...y.dialogContainer
    }, {
        motionPreset: l
    } = J();
    return p.jsx(vr, {
        children: p.jsx(L.div, { ...d,
            className: "chakra-modal__content-container",
            tabIndex: -1,
            __css: h,
            children: p.jsx(ct, {
                preset: l,
                motionProps: s,
                className: f,
                ...u,
                __css: g,
                children: r
            })
        })
    })
});
mr.displayName = "ModalContent";
var hr = ee((e, t) => {
    const {
        className: n,
        ...r
    } = e, o = Y("chakra-modal__footer", n), c = {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        ...oe().footer
    };
    return p.jsx(L.footer, {
        ref: t,
        ...r,
        __css: c,
        className: o
    })
});
hr.displayName = "ModalFooter";
var gr = L(_e.div),
    br = ee((e, t) => {
        const {
            className: n,
            transition: r,
            motionProps: o,
            ...s
        } = e, c = Y("chakra-modal__overlay", n), m = {
            pos: "fixed",
            left: "0",
            top: "0",
            w: "100vw",
            h: "100vh",
            ...oe().overlay
        }, {
            motionPreset: u
        } = J(), f = o || (u === "none" ? {} : Lt);
        return p.jsx(gr, { ...f,
            __css: m,
            ref: t,
            className: c,
            ...s
        })
    });
br.displayName = "ModalOverlay";
var yr = ee((e, t) => {
    const {
        className: n,
        ...r
    } = e, {
        bodyId: o,
        setBodyMounted: s
    } = J();
    a.useEffect(() => (s(!0), () => s(!1)), [s]);
    const c = Y("chakra-modal__body", n),
        i = oe();
    return p.jsx(L.div, {
        ref: t,
        className: c,
        id: o,
        ...r,
        __css: i.body
    })
});
yr.displayName = "ModalBody";
var pr = ee((e, t) => {
    const {
        onClick: n,
        className: r,
        ...o
    } = e, {
        onClose: s
    } = J(), c = Y("chakra-modal__close-btn", r), i = oe();
    return p.jsx(Tt, {
        ref: t,
        __css: i.closeButton,
        className: c,
        onClick: R(n, m => {
            m.stopPropagation(), s()
        }),
        ...o
    })
});
pr.displayName = "ModalCloseButton";
export {
    tn as C, jn as M, br as a, mr as b, pr as c, yr as d, hr as e, oe as f, J as u
};