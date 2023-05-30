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
const Breakpoint = (_a, children) => {
  var { xs, sm, md, lg, xl, display = 'block' } = _a, props = __rest(_a, ["xs", "sm", "md", "lg", "xl", "display"]);
  const Tag = display === 'inline' ? 'span' : 'div';
  //cascade values up breakpoints
  xs = xs !== undefined ? xs : false;
  sm = sm !== undefined ? sm : xs;
  md = md !== undefined ? md : sm;
  lg = lg !== undefined ? lg : md;
  xl = xl !== undefined ? xl : lg;
  const breakpoints = [['xs', xs], ['sm', sm], ['md', md], ['lg', lg], ['xl', xl]];
  //Combine classes into string based on breakpoint values
  const className = breakpoints.reduce((acc, cur) => `${acc} ${cur[1] ? `ui-breakpoint-${cur[0]}` : ``}`, 'ui-breakpoint');
  return (h(Tag, Object.assign({}, applyProps(props, { class: className }), { style: { '--display': display } }), children));
};

export { Breakpoint as B };

//# sourceMappingURL=Breakpoint-eaff237a.js.map