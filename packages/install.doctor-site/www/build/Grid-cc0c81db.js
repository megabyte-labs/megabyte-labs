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
/*
interface GridProps {
  bordered?: boolean;

  xsCols?: number | null;
  smCols?: number | null;
  mdCols?: number | null;
  lgCols?: number | null;

  cols?: number;
  [key: string]: any;
}

const getColClasses = (
  xsCols: number | null,
  smCols: number | null,
  mdCols: number | null,
  lgCols: number | null) => (
    [ ['xs', xsCols], ['sm', smCols], ['md', mdCols], ['lg', lgCols] ].reduce((str, c) => {
      const ct = c[0];
      const cn = c[1];
      if (cn) {
        return `${str} ui-grid-cols-${ct}-${cn}`;
      }
      return str;
    }, '')
  );
*/
const Grid = (_a, children) => {
  var props = __rest(_a, []);
  return h("div", Object.assign({}, applyProps(props, { class: `ui-grid` })), children);
};

export { Grid as G };

//# sourceMappingURL=Grid-cc0c81db.js.map