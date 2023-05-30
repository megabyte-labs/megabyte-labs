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
const DateTime = (_a) => {
  var { date, format = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } } = _a, props = __rest(_a, ["date", "format"]);
  const formatter = new Intl.DateTimeFormat('en-US', Object.assign({}, format));
  return h("time", Object.assign({}, applyProps(props, { class: 'ui-date' })), formatter.format(date));
};

export { DateTime as D };

//# sourceMappingURL=DateTime-8119d1b0.js.map