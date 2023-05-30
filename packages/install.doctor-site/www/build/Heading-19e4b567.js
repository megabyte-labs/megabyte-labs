import { h } from './index-9fe124a3.js';
import { a as applyProps } from './common-ec05915d.js';

// import { h } from '@stencil/core';
const listeners = [];
const visible = [];
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((e) => {
    if (e.intersectionRatio > 0) {
      if (visible.indexOf(e.target) < 0) {
        visible.push(e.target);
      }
    }
    else {
      visible.splice(visible.indexOf(e.target), 1);
    }
  });
  listeners.forEach((l) => l({ entries, observer, visible }));
}, { threshold: [0, 1] });
const addListener = (listener) => listeners.push(listener);
const removeListener = (listener) => listeners.splice(listeners.indexOf(listener), 1);
const observe = (el) => el && observer.observe(el);

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
const Heading = (_a, children) => {
  var { level = 3, poster = false, as } = _a, props = __rest(_a, ["level", "poster", "as"]);
  const Tag = as ? as : (poster ? 'h1' : `h${level}`);
  const classes = [
    `ui-heading`,
    `${poster ? `ui-poster-${level}` : `ui-heading-${level}`}`
  ];
  return (h(Tag, Object.assign({}, applyProps(props, { class: classes.join(' ') }), { ref: (e) => observe(e) }), children));
};

export { Heading as H, addListener as a };

//# sourceMappingURL=Heading-19e4b567.js.map