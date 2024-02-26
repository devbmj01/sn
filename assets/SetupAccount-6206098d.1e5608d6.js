import {
    r,
    a as Q,
    j as R,
    b as Z,
    m as $,
    c as J,
    d as L,
    T as S,
    D as E,
    e as ee,
    f as G,
    P as te,
    u as ne,
    z as ae,
    W as se,
    g as H,
    i as A,
    x as e,
    G as Y,
    o as T,
    p as _,
    q as W,
    t as re,
    v as ie,
    M as oe,
    y as le,
    S as ce,
    B as w,
    E as de,
    H as f,
    L as I,
    Y as v,
    I as N,
    V as O,
    J as z,
    N as ue,
    O as xe,
    U as j,
    X as pe,
    Z as he
} from "./index-4a641d3d.js";
import {
    r as ge
} from "./analytics-f8e2baa9.8eea4e7e.js";
import {
    M as me,
    a as fe,
    b as Ee,
    c as Ce,
    d as B,
    C as F,
    e as be
} from "./chunk-4FCEGNGT.1010d3a1.js";
import "./Init-5d402df2.7ef7bbb7.js";
import "./index.979d1106.js";
import "./chunk-SR4VX3RF.416d3c8d.js";
var ye = t => t != null && parseInt(t.toString(), 10) > 0,
    M = {
        exit: {
            height: {
                duration: .2,
                ease: S.ease
            },
            opacity: {
                duration: .3,
                ease: S.ease
            }
        },
        enter: {
            height: {
                duration: .3,
                ease: S.ease
            },
            opacity: {
                duration: .4,
                ease: S.ease
            }
        }
    },
    je = {
        exit: ({
            animateOpacity: t,
            startingHeight: n,
            transition: i,
            transitionEnd: a,
            delay: c
        }) => {
            var o;
            return { ...t && {
                    opacity: ye(n) ? 1 : 0
                },
                height: n,
                transitionEnd: a == null ? void 0 : a.exit,
                transition: (o = i == null ? void 0 : i.exit) != null ? o : L.exit(M.exit, c)
            }
        },
        enter: ({
            animateOpacity: t,
            endingHeight: n,
            transition: i,
            transitionEnd: a,
            delay: c
        }) => {
            var o;
            return { ...t && {
                    opacity: 1
                },
                height: n,
                transitionEnd: a == null ? void 0 : a.enter,
                transition: (o = i == null ? void 0 : i.enter) != null ? o : L.enter(M.enter, c)
            }
        }
    },
    V = r.forwardRef((t, n) => {
        const { in: i, unmountOnExit: a, animateOpacity: c = !0, startingHeight: o = 0, endingHeight: p = "auto", style: l, className: h, transition: C, transitionEnd: u, ...g
        } = t, [b, y] = r.useState(!1);
        r.useEffect(() => {
            const D = setTimeout(() => {
                y(!0)
            });
            return () => clearTimeout(D)
        }, []), Q({
            condition: Number(o) > 0 && !!a,
            message: "startingHeight and unmountOnExit are mutually exclusive. You can't use them together"
        });
        const x = parseFloat(o.toString()) > 0,
            d = {
                startingHeight: o,
                endingHeight: p,
                animateOpacity: c,
                transition: b ? C : {
                    enter: {
                        duration: 0
                    }
                },
                transitionEnd: {
                    enter: u == null ? void 0 : u.enter,
                    exit: a ? u == null ? void 0 : u.exit : { ...u == null ? void 0 : u.exit,
                        display: x ? "block" : "none"
                    }
                }
            },
            s = a ? i : !0,
            m = i || a ? "enter" : "exit";
        return R.jsx(Z, {
            initial: !1,
            custom: d,
            children: s && R.jsx($.div, {
                ref: n,
                ...g,
                className: J("chakra-collapse", h),
                style: {
                    overflow: "hidden",
                    display: "block",
                    ...l
                },
                custom: d,
                variants: je,
                initial: a ? "exit" : !1,
                animate: m,
                exit: "exit"
            })
        })
    });
V.displayName = "Collapse";
const Se = () => r.useContext(xe),
    Ie = "wallet_deploymentData",
    Te = t => {
        const {
            address: n,
            name: i
        } = t ? ? {}, {
            provider: a
        } = Se(), {
            setDeploymentData: c
        } = ie(), {
            refetch: o,
            isFetching: p,
            error: l,
            data: h
        } = oe({
            queryKey: ["validate_account", n],
            queryFn: () => C(n, i),
            enabled: !!n,
            refetchIntervalInBackground: !1,
            refetchOnWindowFocus: !1,
            refetchOnMount: !1,
            retry: !1
        });
        async function C(x, d) {
            let s;
            const m = await u(d);
            if (m ? g(m) ? s = b(m) : s = new Error(j.NEEDS_WALLET_UPGRADE) : s = await y(x, a), s instanceof Error) throw s;
            return s
        }
        async function u(x) {
            try {
                return await (x === "Braavos" ? window.starknet_braavos : window.starknet_argentX).request({
                    type: Ie
                })
            } catch {
                return
            }
        }

        function g({
            version: x
        }) {
            return !!x
        }

        function b(x) {
            const {
                version: d,
                ...s
            } = x;
            return `${d}` == "1" ? (c({
                classHash: s.class_hash,
                salt: s.salt,
                constructorArgs: s.calldata,
                signatureData: s.sigdata
            }), !0) : new Error(j.NEEDS_CAIRO_UPGRADE)
        }
        async function y(x, d) {
            if (!d) return new Error(j.NO_PROVIDER);
            try {
                const {
                    cairo: s
                } = await d.getContractVersion(x);
                return s === "1" ? !0 : new Error(j.NEEDS_CAIRO_UPGRADE)
            } catch (s) {
                return s.name === "LibraryError" ? new Error(j.NOT_DEPLOYED) : new Error(j.NO_PROVIDER)
            }
        }
        return {
            refetch: o,
            isFetching: p,
            error: l,
            data: h
        }
    },
    _e = () => pe(he),
    we = t => {
        const {
            isError: n,
            onClaimClick: i,
            onEligibilityClick: a,
            onDisconnect: c,
            onRetry: o,
            ...p
        } = t;
        return n ? e.jsx(le, { in: !0,
            style: {
                width: "100%"
            },
            transition: W,
            children: e.jsxs(ce, {
                gap: {
                    base: 2,
                    lg: 4
                },
                py: {
                    base: 6,
                    lg: 0
                },
                templateColumns: {
                    base: "1fr",
                    lg: "1fr 1fr"
                },
                w: "full",
                ...p,
                children: [e.jsx(ke, {
                    onDisconnect: c
                }), e.jsx(Re, {
                    onRetry: o
                })]
            })
        }) : e.jsxs(_, {
            flexDirection: "column",
            gap: 4,
            pb: {
                base: 4,
                lg: 0
            },
            pl: {
                base: 0,
                lg: 16
            },
            pt: 4,
            w: {
                base: "full",
                lg: "auto"
            },
            ...p,
            children: [e.jsx(De, {
                onClick: i
            }), e.jsx(Oe, {
                onClick: a
            })]
        })
    },
    De = ({
        onClick: t
    }) => {
        const {
            SELECT_CLAIM: n
        } = E("SetupAccount");
        return e.jsx(w, {
            w: {
                base: "full",
                lg: "auto"
            },
            onClick: t,
            children: n
        })
    },
    Oe = ({
        onClick: t
    }) => {
        const {
            SELECT_ELIGIBILITY: n
        } = E("SetupAccount");
        return e.jsx(de, {
            text: n,
            onClick: t
        })
    },
    ke = ({
        onDisconnect: t
    }) => {
        const {
            DISCONNECT_WALLET: n
        } = E("SetupAccount");
        return e.jsx(w, {
            variant: "secondary",
            onClick: t,
            children: n
        })
    },
    Re = ({
        onRetry: t
    }) => {
        const {
            TRY_AGAIN: n
        } = E("SetupAccount");
        return e.jsx(w, {
            onClick: t,
            children: n
        })
    },
    P = {
        sx: {
            "span.chakra-checkbox__control": {
                marginTop: "2px",
                marginRight: "4px"
            }
        },
        alignItems: "flex-start"
    },
    Le = ({
        onClose: t
    }) => {
        const [n, i] = r.useState(!1), [a, c] = r.useState(!1), {
            modalBackdropBackground: o,
            modalBackdropFilter: p
        } = _e(), {
            TERMS_AND_CONDITIONS: l,
            CITIZEN_DECLARATION: h
        } = E("SetupAccount"), {
            connect: C
        } = G(), u = r.useCallback(() => {
            t(!1)
        }, []), g = r.useCallback(() => {
            C(), t(!0)
        }, []), b = r.useCallback(d => {
            i(d.target.checked)
        }, []), y = r.useCallback(d => {
            c(d.target.checked)
        }, []), x = !(a && n);
        return e.jsxs(me, {
            isCentered: !0,
            isOpen: !0,
            onClose: u,
            children: [e.jsx(fe, {
                backdropFilter: p,
                bg: o
            }), e.jsxs(Ee, {
                borderRadius: "3xl",
                maxWidth: 370,
                children: [e.jsxs(f, {
                    as: "header",
                    color: "neutral.900",
                    fontSize: "l",
                    pb: 2,
                    pt: 6,
                    px: 6,
                    textStyle: "heading/H4",
                    children: [e.jsx(Ce, {
                        marginLeft: "auto",
                        position: "unset"
                    }), l.TITLE]
                }), e.jsx(B, {
                    paddingBottom: 6,
                    paddingLeft: 6,
                    paddingRight: 6,
                    paddingTop: 2,
                    children: e.jsxs(_, {
                        direction: "column",
                        gap: 6,
                        children: [e.jsxs(f, {
                            color: "neutral.700",
                            textStyle: "body/medium",
                            children: [l.PLEASE_CONFIRM, e.jsx(I, {
                                isExternal: !0,
                                href: v,
                                textDecoration: "none",
                                children: e.jsx(f, {
                                    as: "span",
                                    color: "neutral.700",
                                    textDecoration: "underline",
                                    children: l.TERMS_OF_USE
                                })
                            }), l.PLEASE_CONFIRM_PRIVACY_POLICY, e.jsx(I, {
                                isExternal: !0,
                                href: N,
                                textDecoration: "none",
                                children: e.jsx(f, {
                                    as: "span",
                                    color: "neutral.700",
                                    textDecoration: "underline",
                                    children: l.PRIVACY_POLICY
                                })
                            }), l.CHECK_BOX_BELOW]
                        }), e.jsx(F, { ...P,
                            onChange: y,
                            children: e.jsxs(f, {
                                color: "neutral.700",
                                textStyle: "body/small",
                                children: [l.CHECKBOX, e.jsx(I, {
                                    isExternal: !0,
                                    color: "neutral.700",
                                    href: v,
                                    textDecoration: "underline",
                                    textStyle: "body/small",
                                    children: l.TERMS_OF_USE
                                }), l.CHECKBOX_PRIVACY_POLICY, e.jsx(I, {
                                    isExternal: !0,
                                    color: "neutral.700",
                                    href: N,
                                    textDecoration: "underline",
                                    textStyle: "body/small",
                                    children: l.PRIVACY_POLICY
                                }), "."]
                            })
                        })]
                    })
                }), e.jsx(T, {
                    orientation: "horizontal"
                }), e.jsx(f, {
                    color: "neutral.900",
                    fontSize: "l",
                    pb: 2,
                    pt: 6,
                    px: 6,
                    textStyle: "heading/H4",
                    children: h.TITLE
                }), e.jsx(B, {
                    paddingBottom: 6,
                    paddingLeft: 6,
                    paddingRight: 6,
                    paddingTop: 2,
                    children: e.jsxs(_, {
                        direction: "column",
                        gap: 6,
                        children: [e.jsx(f, {
                            color: "neutral.700",
                            textStyle: "body/medium",
                            children: h.BODY
                        }), e.jsx(F, { ...P,
                            alignItems: "flex-start",
                            onChange: b,
                            children: e.jsx(f, {
                                color: "neutral.700",
                                textStyle: "body/small",
                                children: h.CHECKBOX
                            })
                        })]
                    })
                }), e.jsx(T, {
                    orientation: "horizontal"
                }), e.jsx(be, {
                    padding: 6,
                    children: e.jsx(w, {
                        isDisabled: x,
                        variant: "secondary",
                        onClick: g,
                        children: h.BUTTON
                    })
                })]
            })]
        })
    },
    Ae = t => r.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 2,
        height: 295,
        viewBox: "0 0 2 295",
        fill: "none",
        ...t
    }, r.createElement("path", {
        d: "M1 -0.5V294.5",
        stroke: "#CCCCCC",
        strokeDasharray: "4 4"
    })),
    ve = ({
        isDisabled: t
    }) => {
        const n = H({
                base: 40,
                lg: 16
            }),
            {
                STAGE_TITLES: i
            } = E("SetupAccount");
        return e.jsxs(Y, {
            alignItems: "center",
            columnGap: {
                base: 6,
                lg: 8
            },
            pl: {
                base: 6,
                lg: 0
            },
            position: "relative",
            rowGap: {
                base: 6,
                lg: t ? 7 : "44px"
            },
            templateColumns: "auto 1fr",
            children: [e.jsx(Ae, {
                style: {
                    position: "absolute",
                    marginLeft: n,
                    zIndex: "0",
                    height: "90%"
                }
            }), i.map((a, c) => e.jsxs(r.Fragment, {
                children: [e.jsx(Ne, {
                    isDisabled: t,
                    number: c + 1
                }), e.jsx(Be, {
                    isDisabled: t,
                    title: a
                })]
            }, c))]
        })
    },
    Ne = ({
        number: t,
        isDisabled: n
    }) => e.jsx(O, {
        bg: n ? "neutral.300" : "primary.600",
        borderRadius: "full",
        h: 8,
        justify: "center",
        p: 2,
        spacing: 0,
        w: 8,
        zIndex: 1,
        children: e.jsx(f, {
            color: "white",
            fontFamily: "poppins",
            fontSize: "m",
            fontWeight: "semibold",
            lineHeight: "18px",
            pt: "1px",
            children: t
        })
    }),
    Be = ({
        title: t,
        isDisabled: n
    }) => e.jsx(z, {
        alignSelf: {
            base: "stretch",
            lg: "center"
        },
        as: "h3",
        color: n ? "neutral.300" : "neutral.850",
        fontSize: "l",
        pt: {
            base: 1.5,
            lg: 0
        },
        children: t
    }),
    Fe = () => {
        const {
            STRK_IS_HERE: t
        } = E("SetupAccount");
        return e.jsxs(O, {
            justifySelf: "center",
            p: {
                base: "16px 16px 0",
                lg: 14
            },
            spacing: 4,
            w: 258,
            children: [e.jsxs(O, {
                spacing: 15,
                children: [e.jsx(ue, {
                    height: 80,
                    width: 80
                }), e.jsx(z, {
                    color: "primary.600",
                    fontSize: "5xl",
                    fontWeight: "semibold",
                    lineHeight: 1,
                    p: 0,
                    children: t[0]
                })]
            }), e.jsx(T, {
                borderColor: "neutral.300"
            }), e.jsx(f, {
                color: "primary.600",
                fontSize: "3xl",
                fontWeight: "semibold",
                lineHeight: 1,
                pt: 0,
                children: t[1]
            })]
        })
    },
    ze = () => {
        const {
            ERRORS: t
        } = E("SetupAccount"), {
            goToNextStage: n
        } = ee(), {
            recipient: i,
            logout: a,
            login: c,
            wallet: o,
            connect: p
        } = G(), {
            setShowSpinner: l
        } = te(), {
            isFetching: h,
            refetch: C,
            data: u,
            error: g
        } = Te(o), {
            isOpen: b,
            onOpen: y,
            onClose: x
        } = ne(), {
            widgetType: d
        } = ae(), {
            setWidgetType: s
        } = se(), m = r.useMemo(() => u === !1 || !!g, [u, g]), D = H({
            base: "horizontal",
            lg: "vertical"
        }), {
            WAITING_FOR_WALLET: k
        } = E("Wallet");
        ge("/stages/setup", "Setup Stage"), r.useLayoutEffect(() => {
            (i || d === A.ELIGIBILITY) && n()
        }, [i, d]);
        const U = r.useCallback(q => {
                q && p(), x()
            }, [p]),
            X = r.useCallback(() => {
                s(A.ELIGIBILITY), n()
            }, [n, s]),
            K = r.useCallback(async () => {
                a()
            }, [a]);
        return r.useEffect(() => (l("validate-account", h, [k.TITLE, k.TEXT]), () => l("validate-account", !1)), [h]), r.useEffect(() => {
            u && c()
        }, [u]), e.jsxs(Y, {
            gap: {
                base: 8,
                lg: 2
            },
            h: "full",
            px: {
                base: 4,
                lg: 54
            },
            py: {
                base: 4,
                lg: 74
            },
            templateColumns: {
                base: "1fr",
                lg: "auto auto 1fr"
            },
            templateRows: {
                base: "auto 0fr 1fr",
                lg: "auto"
            },
            userSelect: "none",
            children: [e.jsx(Fe, {}), e.jsx(T, {
                borderColor: "neutral.300",
                display: {
                    base: m ? "none" : "block",
                    lg: "block"
                },
                orientation: D
            }), e.jsxs(_, {
                align: {
                    base: "center",
                    lg: "start"
                },
                direction: "column",
                gap: {
                    base: 8,
                    lg: 0
                },
                justify: "space-between",
                pl: {
                    lg: 10
                },
                children: [e.jsx(V, { in: m,
                    style: {
                        width: "100%"
                    },
                    transition: W,
                    children: g instanceof Error && e.jsx(re, {
                        px: {
                            base: 4,
                            lg: 8
                        },
                        py: 6,
                        text: t[g.message].MSG,
                        title: t[g.message].TITLE,
                        w: "full"
                    })
                }), e.jsx(ve, {
                    isDisabled: m
                }), e.jsx(we, {
                    isError: m,
                    onClaimClick: y,
                    onDisconnect: K,
                    onEligibilityClick: X,
                    onRetry: C
                }), b ? e.jsx(Le, {
                    onClose: U
                }) : null]
            })]
        })
    };
export {
    ze as
    default
};