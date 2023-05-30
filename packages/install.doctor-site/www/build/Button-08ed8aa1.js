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
;
;
const Button = (_a, children) => {
  var { size = 'lg', kind = 'display', color = 'blue', variation = 'fill', anchor = false } = _a, props = __rest(_a, ["size", "kind", "color", "variation", "anchor"]);
  const Tag = anchor ? 'a' : 'button';
  let classes = [
    'ui-button',
    `ui-button-${size}`,
    `ui-button-${kind}`,
    `ui-button-${color}`,
    `ui-button-${variation}`,
  ];
  return (h(Tag, Object.assign({ tabindex: anchor ? '0' : undefined }, applyProps(props, { class: classes.join(' ') })), children));
};

export { Button as B };

//# sourceMappingURL=Button-08ed8aa1.js.map