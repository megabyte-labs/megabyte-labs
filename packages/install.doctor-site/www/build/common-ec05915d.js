// Given a set of provided props and extra props,
// merge to two except for the class prop which is concated
const applyProps = (props, extra = {}) => {
  const allKeys = new Set(Object.keys(props).concat(Object.keys(extra)));
  return Array.from(allKeys).reduce((v, k) => {
    if (k in extra) {
      if (k === 'class') {
        if (typeof extra[k] === 'string') {
          v[k] = `${extra[k]} ${props[k] ? props[k] : ''}`;
        }
        else {
          v[k] = Object.assign(Object.assign({}, props[k]), extra[k]);
        }
      }
      else {
        v[k] = extra[k];
      }
    }
    else if (k in props) {
      v[k] = props[k];
    }
    return v;
  }, {});
};

export { applyProps as a };

//# sourceMappingURL=common-ec05915d.js.map