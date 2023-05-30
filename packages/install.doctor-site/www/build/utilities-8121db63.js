function transformMethodName(str) {
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return (str
    // Look for long acronyms and filter out the last letter
    .replace(/([A-Z]+)([A-Z][a-z])/g, ' $1 $2')
    // Look for lower-case letters followed by upper-case letters
    .replace(/([a-z\d])([A-Z])/g, '$1 $2')
    // Look for lower-case letters followed by numbers
    .replace(/([a-zA-Z])(\d)/g, '$1 $2')
    .replace(/^./, function (str) {
    return str.toUpperCase();
  })
    // Remove any white space left around the word
    .trim());
}
function dashToCamel(str) {
  return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
}

export { dashToCamel as d, transformMethodName as t };

//# sourceMappingURL=utilities-8121db63.js.map