import { defineComponent as f, useSlots as c, ref as L, computed as N, onMounted as $, nextTick as p, onBeforeUnmount as w, watch as B, createElementBlock as s, openBlock as n, renderSlot as r, createCommentVNode as d, createElementVNode as C, normalizeClass as x } from "vue";
import "./style/index.css";
import { isElement as h } from "../../utils/dom.mjs";
import { scrollLoadEmits as D, scrollLoadProps as F } from "./scroll-load.mjs";
const I = { class: "dh-scroll-load" }, S = {
  key: 0,
  class: "dh-text-center dh-py-4"
}, V = { key: 0 }, z = {
  key: 1,
  class: "dh-text-center dh-py-4"
}, O = { key: 0 }, P = { key: 0 }, T = f({
  name: "dh-scroll-load"
}), G = /* @__PURE__ */ f({
  ...T,
  props: F,
  emits: D,
  setup(_, { emit: y }) {
    const o = _, v = y, E = !!c().empty, k = !!c().loading, M = !!c().end, i = L(null), l = N(() => i.value), g = () => {
      o.noMore || v("load");
    }, t = new IntersectionObserver((e) => {
      e.forEach((u) => {
        u.isIntersecting && g();
      });
    }), a = (e) => {
      h(e) && (t == null || t.observe(e));
    }, m = (e) => {
      h(e) && (t == null || t.unobserve(e));
    };
    return $(() => {
      p(() => {
        a(l.value);
      });
    }), w(() => {
      m(l.value);
    }), B(
      () => o.noMore,
      (e) => {
        e ? m(l.value) : p(() => {
          a(l.value);
        });
      }
    ), (e, u) => (n(), s("div", I, [
      r(e.$slots, "default"),
      o.isEmpty ? (n(), s("div", S, [
        E ? d("", !0) : (n(), s("div", V, "No Data")),
        r(e.$slots, "empty")
      ])) : d("", !0),
      o.showNoMore && o.noMore && !o.isEmpty ? (n(), s("div", z, [
        M ? d("", !0) : (n(), s("div", O, "End.")),
        r(e.$slots, "end")
      ])) : d("", !0),
      C("div", {
        ref_key: "loadFlag",
        ref: i,
        class: x(["dh-text-center dh-py-4", o.noMore || o.isEmpty ? "dh-hidden" : ""])
      }, [
        k ? d("", !0) : (n(), s("div", P, "Loading")),
        r(e.$slots, "loading")
      ], 2)
    ]));
  }
});
export {
  G as default
};
