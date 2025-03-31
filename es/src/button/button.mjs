const e = ["default", "primary", "success", "warning", "danger", "info", "text", ""], n = ["button", "submit", "reset"], a = ["small", "medium", "large"], s = {
  type: {
    type: String,
    values: e,
    default: "default"
  },
  nativeType: {
    type: String,
    values: n,
    default: "button"
  },
  tag: {
    type: String,
    default: "button"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  round: {
    type: Boolean,
    default: !1
  },
  size: {
    type: String,
    values: a,
    default: "medium"
  }
}, u = {
  click: (t) => t instanceof MouseEvent
};
export {
  u as buttonEmits,
  n as buttonNativeTypes,
  s as buttonProps,
  a as buttonSizes,
  e as buttonTypes
};
