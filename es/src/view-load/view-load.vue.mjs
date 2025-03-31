import { defineComponent as m, ref as u, computed as w, onBeforeUnmount as _, watch as k, createElementBlock as B, openBlock as E, renderSlot as O } from "vue";
import "./style/index.css";
import { isElement as f } from "../../utils/dom.mjs";
import { viewLoadEmits as y } from "./view-load.mjs";
const L = m({
  name: "dh-view-load"
}), x = /* @__PURE__ */ m({
  ...L,
  props: {
    isOnce: {
      type: Boolean,
      default: !0
      //"true" 只需要一次有效监听   false需要多次有效监听
    },
    options: {
      type: [Object],
      default: () => ({ threshold: 0.5 })
    }
  },
  emits: y,
  setup(d, { emit: p }) {
    const n = u(!1), s = u(null), i = d, v = p, o = w(() => s.value), t = new IntersectionObserver((e) => {
      e.forEach((a) => {
        const { isIntersecting: c, intersectionRatio: l } = a;
        c && l > 0 && (n.value = !0, i.isOnce && r(o.value)), v("callback", { isIntersecting: c, intersectionRatio: l });
      });
    }, i.options), h = (e) => {
      f(e) && (t == null || t.observe(e));
    }, r = (e) => {
      f(e) && (t == null || t.unobserve(e));
    };
    return _(() => {
      r(o.value);
    }), k(
      () => o.value,
      (e) => {
        e && h(o.value);
      }
    ), (e, a) => (E(), B("div", {
      ref_key: "viewLoad",
      ref: s,
      class: "dh-view-load"
    }, [
      O(e.$slots, "default", { show: n.value })
    ], 512));
  }
});
export {
  x as default
};
