import {
    r,
    ae as a
} from "./index-4a641d3d.js";

function p(e, t) {
    r.useEffect(() => {
        a.send({
            hitType: "pageview",
            page: e,
            title: t
        })
    }, [])
}
export {
    p as r
};