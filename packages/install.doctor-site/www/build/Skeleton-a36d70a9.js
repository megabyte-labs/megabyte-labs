import { h } from './index-9fe124a3.js';
import { a as applyProps } from './common-ec05915d.js';

var __rest = (undefined && undefined.__rest) || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const Skeleton = (_a, children) => {
  var { animated = true } = _a, props = __rest(_a, ["animated"]);
  return (h("div", Object.assign({}, applyProps(props, { class: `ui-skeleton${animated ? ` ui-skeleton--animated` : ``}` })), children));
};

export { Skeleton as S };

//# sourceMappingURL=Skeleton-a36d70a9.js.map