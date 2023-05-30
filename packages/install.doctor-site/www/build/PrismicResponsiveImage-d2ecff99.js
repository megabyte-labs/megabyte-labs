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
const PrismicResponsiveImage = (_a) => {
  var { image, params } = _a, props = __rest(_a, ["image", "params"]);
  if (!props.loading)
    props.loading = 'lazy';
  if (!params) {
    params = {
      q: '65'
    };
  }
  else if (!params.q) {
    params.q = '65';
  }
  const { width, height } = props;
  if (!image.url)
    return;
  const paramString = params ?
    Object.entries(params).reduce((acc, cur) => {
      const regex = new RegExp(`\\?.*${cur[0]}=`);
      if (!image.url.match(regex)) {
        return `${acc}${acc.match(/^\?$/) ? '' : '&'}${cur.join('=')}`;
      }
      return acc;
    }, image.url.match(/\?/) ? '' : '?') : '';
  const imageUrl = new URL(image.url + paramString);
  const dimensions = {
    'width': width ? width : imageUrl.searchParams.get('w'),
    'height': height ? height : imageUrl.searchParams.get('h'),
  };
  return (h("img", Object.assign({}, applyProps(props), { src: `${imageUrl}` }, { 'srcset': image['2x'] ? `${imageUrl} 1x, ${image['2x'].url}${paramString} 2x` : undefined }, dimensions, { alt: image.alt })));
};

export { PrismicResponsiveImage as P };

//# sourceMappingURL=PrismicResponsiveImage-d2ecff99.js.map