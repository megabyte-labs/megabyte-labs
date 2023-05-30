const getProps = (propList, ctx) => {
  // set context
  if (!ctx)
    ctx = undefined;
  const propObj = {};
  propList.forEach(prop => {
    if (ctx[prop] !== undefined) {
      propObj[prop] = ctx[prop];
    }
  });
  return propObj;
};
// export function applyDefaults<T extends Object>(className: T): T | void {
//   function hasOwnProperty<X extends {}, Y extends PropertyKey>
//     (obj: X, prop: Y): obj is X & Record<Y, unknown> {
//     return obj.hasOwnProperty(prop)
//   }
//   if (!hasOwnProperty(className, 'defaults')) return;
//   for (const key in (className.defaults as object)) {
//     if (!hasOwnProperty(className, key)) return;
//     Object.defineProperty(className, key, Object.assign(key, className[key]));
//   }
// }
function isString(val) {
  return (typeof val === 'string' || val instanceof String);
}

export { getProps as g };

//# sourceMappingURL=tools-3c05f2a6.js.map