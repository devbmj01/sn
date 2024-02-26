import {
    r as y,
    j as l,
    b as F,
    m as N,
    c as h,
    d as o,
    af as c
} from "./index-4a641d3d.js";
var j = {
        exit: ({
            reverse: n,
            initialScale: a,
            transition: t,
            transitionEnd: e,
            delay: i
        }) => {
            var s;
            return {
                opacity: 0,
                ...n ? {
                    scale: a,
                    transitionEnd: e == null ? void 0 : e.exit
                } : {
                    transitionEnd: {
                        scale: a,
                        ...e == null ? void 0 : e.exit
                    }
                },
                transition: (s = t == null ? void 0 : t.exit) != null ? s : o.exit(c.exit, i)
            }
        },
        enter: ({
            transitionEnd: n,
            transition: a,
            delay: t
        }) => {
            var e;
            return {
                opacity: 1,
                scale: 1,
                transition: (e = a == null ? void 0 : a.enter) != null ? e : o.enter(c.enter, t),
                transitionEnd: n == null ? void 0 : n.enter
            }
        }
    },
    E = {
        initial: "exit",
        animate: "enter",
        exit: "exit",
        variants: j
    },
    w = y.forwardRef(function(a, t) {
        const {
            unmountOnExit: e,
            in: i,
            reverse: s = !0,
            initialScale: x = .95,
            className: u,
            transition: d,
            transitionEnd: m,
            delay: v,
            ...f
        } = a, p = e ? i && e : !0, S = i || e ? "enter" : "exit", r = {
            initialScale: x,
            reverse: s,
            transition: d,
            transitionEnd: m,
            delay: v
        };
        return l.jsx(F, {
            custom: r,
            children: p && l.jsx(N.div, {
                ref: t,
                className: h("chakra-offset-slide", u),
                ...E,
                animate: S,
                custom: r,
                ...f
            })
        })
    });
w.displayName = "ScaleFade";
export {
    w as S, E as s
};