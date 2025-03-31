import { defineComponent as e, computed as l, createElementBlock as u, openBlock as a, normalizeClass as c, createElementVNode as p, renderSlot as m } from "vue";
import "./style/index.css";
import { buttonEmits as b, buttonProps as _ } from "./button.mjs";
const h = { class: "dh-button__inner" }, f = e({
  name: "dh-button"
}), E = /* @__PURE__ */ e({
  ...f,
  props: _,
  emits: b,
  setup(n, { emit: s }) {
    const t = n, r = s, d = (o) => {
      if (t.disabled) {
        o.stopPropagation();
        return;
      }
      r("click", o);
    }, i = l(() => `dh-button ${t.type ? "dh-button__" + t.type : ""} ${t.disabled ? "is-disabled" : ""} ${t.round ? "is-round" : ""} dh-button--${t.size}`);
    return (o, k) => (a(), u("button", {
      class: c(["dh-button", i.value]),
      onClick: d
    }, [
      p("span", h, [
        m(o.$slots, "default")
      ])
    ], 2));
  }
});
export {
  E as default
};
