import * as o from "./src/index.mjs";
import { DHButton as i } from "./src/button/index.mjs";
import { DHScrollLoad as n } from "./src/scroll-load/index.mjs";
import { DHViewLoad as d } from "./src/view-load/index.mjs";
const e = {
  install(r) {
    for (let t in o)
      r.use(o[t]);
  }
};
export {
  i as DHButton,
  n as DHScrollLoad,
  d as DHViewLoad,
  e as default
};
