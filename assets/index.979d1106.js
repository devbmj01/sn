var f = () => typeof document < "u",
    s = !1,
    u = null,
    n = !1,
    i = !1,
    d = new Set;

function a(e, t) {
    d.forEach(o => o(e, t))
}
var p = typeof window < "u" && window.navigator != null ? /^Mac/.test(window.navigator.platform) : !1;

function m(e) {
    return !(e.metaKey || !p && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta")
}

function c(e) {
    n = !0, m(e) && (u = "keyboard", a("keyboard", e))
}

function r(e) {
    if (u = "pointer", e.type === "mousedown" || e.type === "pointerdown") {
        n = !0;
        const t = e.composedPath ? e.composedPath()[0] : e.target;
        let o = !1;
        try {
            o = t.matches(":focus-visible")
        } catch {}
        if (o) return;
        a("pointer", e)
    }
}

function y(e) {
    return e.mozInputSource === 0 && e.isTrusted ? !0 : e.detail === 0 && !e.pointerType
}

function v(e) {
    y(e) && (n = !0, u = "virtual")
}

function w(e) {
    e.target === window || e.target === document || (!n && !i && (u = "virtual", a("virtual", e)), n = !1, i = !1)
}

function E() {
    n = !1, i = !0
}

function l() {
    return u !== "pointer"
}

function h() {
    if (!f() || s) return;
    const {
        focus: e
    } = HTMLElement.prototype;
    HTMLElement.prototype.focus = function(...o) {
        n = !0, e.apply(this, o)
    }, document.addEventListener("keydown", c, !0), document.addEventListener("keyup", c, !0), document.addEventListener("click", v, !0), window.addEventListener("focus", w, !0), window.addEventListener("blur", E, !1), typeof PointerEvent < "u" ? (document.addEventListener("pointerdown", r, !0), document.addEventListener("pointermove", r, !0), document.addEventListener("pointerup", r, !0)) : (document.addEventListener("mousedown", r, !0), document.addEventListener("mousemove", r, !0), document.addEventListener("mouseup", r, !0)), s = !0
}

function L(e) {
    h(), e(l());
    const t = () => e(l());
    return d.add(t), () => {
        d.delete(t)
    }
}
export {
    L as t
};