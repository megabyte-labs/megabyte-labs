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
const Paragraph = (_a, children) => {
  var { level = 3, leading = 'body' } = _a, props = __rest(_a, ["level", "leading"]);
  const classes = [
    `ui-paragraph`,
    `ui-paragraph-${level}`,
    `ui-paragraph--${leading}`,
  ];
  return (h("p", Object.assign({}, applyProps(props, { class: classes.join(' ') })), children));
};

export { Paragraph as P };

//# sourceMappingURL=Paragraph-0aec567b.js.map