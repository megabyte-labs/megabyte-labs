import './Blockquote-02838ab9.js';
import './Breadcrumbs-f91fb5a9.js';
import './Breakpoint-eaff237a.js';
import './Button-08ed8aa1.js';
import './Card-4d34e073.js';
import { h } from './index-9fe124a3.js';
import { a as applyProps } from './common-ec05915d.js';
import './DateTime-8119d1b0.js';
import './Grid-cc0c81db.js';
import './Heading-19e4b567.js';
import './Paragraph-0aec567b.js';
import './ResponsiveContainer-7e776113.js';
import './Skeleton-a36d70a9.js';
import './Text-5fc0ba5c.js';
import './ThemeProvider-c5f8f970.js';

const CardContent = (props, children) => (h("div", Object.assign({}, applyProps(props, { class: 'ui-card-content' })), children));

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
const applyClasses = (cols, xs, sm, md, lg) => {
  const classes = [];
  // General class, doesn't apply column behavior but
  // can be useful for selectors
  classes.push('ui-col');
  if (cols) {
    classes.push(`ui-col-${cols}`);
  }
  else {
    // If no "cols" is specified, add a default 12 to make content go full width
    // in the smallest viewport sizes
    classes.push(`ui-col-12`);
  }
  if (xs) {
    classes.push(`ui-col-xs-${xs}`);
  }
  if (sm) {
    classes.push(`ui-col-sm-${sm}`);
  }
  if (md) {
    classes.push(`ui-col-md-${md}`);
  }
  if (lg) {
    classes.push(`ui-col-lg-${lg}`);
  }
  return classes.join(' ');
};
const Col = (_a, children) => {
  var { cols, xs, sm, md, lg, as = 'div' } = _a, props = __rest(_a, ["cols", "xs", "sm", "md", "lg", "as"]);
  const Tag = as;
  return (h(Tag, Object.assign({}, applyProps(props, { class: applyClasses(cols, xs, sm, md, lg) })), children));
};

export { Col as C, CardContent as a };

//# sourceMappingURL=index-40ae1b73.js.map