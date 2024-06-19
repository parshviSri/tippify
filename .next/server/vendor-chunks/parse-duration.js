"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/parse-duration";
exports.ids = ["vendor-chunks/parse-duration"];
exports.modules = {

/***/ "(ssr)/./node_modules/parse-duration/index.mjs":
/*!***********************************************!*\
  !*** ./node_modules/parse-duration/index.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet durationRE = /(-?(?:\\d+\\.?\\d*|\\d*\\.?\\d+)(?:e[-+]?\\d+)?)\\s*([\\p{L}]*)/uig\n\n\n/**\n * conversion ratios\n */\n\nparse.nanosecond =\nparse.ns = 1 / 1e6\n\nparse['µs'] =\nparse['μs'] =\nparse.us =\nparse.microsecond = 1 / 1e3\n\nparse.millisecond =\nparse.ms =\nparse[''] = 1\n\nparse.second =\nparse.sec =\nparse.s = parse.ms * 1000\n\nparse.minute =\nparse.min =\nparse.m = parse.s * 60\n\nparse.hour =\nparse.hr =\nparse.h = parse.m * 60\n\nparse.day =\nparse.d = parse.h * 24\n\nparse.week =\nparse.wk =\nparse.w = parse.d * 7\n\nparse.month =\nparse.b =\nparse.d * (365.25 / 12)\n\nparse.year =\nparse.yr =\nparse.y = parse.d * 365.25\n\n/**\n * convert `str` to ms\n *\n * @param {String} str\n * @param {String} format\n * @return {Number}\n */\n\nfunction parse(str='', format='ms'){\n  var result = null\n  // ignore commas/placeholders\n  str = (str+'').replace(/(\\d)[,_](\\d)/g, '$1$2')\n  var isNegative = str[0] === '-';\n  str.replace(durationRE, function(_, n, units){\n    units = unitRatio(units)\n    if (units) result = (result || 0) + Math.abs(parseFloat(n, 10)) * units\n  })\n\n  return result && ((result / (unitRatio(format) || 1)) * (isNegative ? -1 : 1))\n}\n\nfunction unitRatio(str) {\n  return parse[str] || parse[str.toLowerCase().replace(/s$/, '')]\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parse);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGFyc2UtZHVyYXRpb24vaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxtRUFBbUUsRUFBRTs7O0FBR3JFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aXBwaWZ5Ly4vbm9kZV9tb2R1bGVzL3BhcnNlLWR1cmF0aW9uL2luZGV4Lm1qcz8xZTA0Il0sInNvdXJjZXNDb250ZW50IjpbImxldCBkdXJhdGlvblJFID0gLygtPyg/OlxcZCtcXC4/XFxkKnxcXGQqXFwuP1xcZCspKD86ZVstK10/XFxkKyk/KVxccyooW1xccHtMfV0qKS91aWdcblxuXG4vKipcbiAqIGNvbnZlcnNpb24gcmF0aW9zXG4gKi9cblxucGFyc2UubmFub3NlY29uZCA9XG5wYXJzZS5ucyA9IDEgLyAxZTZcblxucGFyc2VbJ8K1cyddID1cbnBhcnNlWyfOvHMnXSA9XG5wYXJzZS51cyA9XG5wYXJzZS5taWNyb3NlY29uZCA9IDEgLyAxZTNcblxucGFyc2UubWlsbGlzZWNvbmQgPVxucGFyc2UubXMgPVxucGFyc2VbJyddID0gMVxuXG5wYXJzZS5zZWNvbmQgPVxucGFyc2Uuc2VjID1cbnBhcnNlLnMgPSBwYXJzZS5tcyAqIDEwMDBcblxucGFyc2UubWludXRlID1cbnBhcnNlLm1pbiA9XG5wYXJzZS5tID0gcGFyc2UucyAqIDYwXG5cbnBhcnNlLmhvdXIgPVxucGFyc2UuaHIgPVxucGFyc2UuaCA9IHBhcnNlLm0gKiA2MFxuXG5wYXJzZS5kYXkgPVxucGFyc2UuZCA9IHBhcnNlLmggKiAyNFxuXG5wYXJzZS53ZWVrID1cbnBhcnNlLndrID1cbnBhcnNlLncgPSBwYXJzZS5kICogN1xuXG5wYXJzZS5tb250aCA9XG5wYXJzZS5iID1cbnBhcnNlLmQgKiAoMzY1LjI1IC8gMTIpXG5cbnBhcnNlLnllYXIgPVxucGFyc2UueXIgPVxucGFyc2UueSA9IHBhcnNlLmQgKiAzNjUuMjVcblxuLyoqXG4gKiBjb252ZXJ0IGBzdHJgIHRvIG1zXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdFxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cj0nJywgZm9ybWF0PSdtcycpe1xuICB2YXIgcmVzdWx0ID0gbnVsbFxuICAvLyBpZ25vcmUgY29tbWFzL3BsYWNlaG9sZGVyc1xuICBzdHIgPSAoc3RyKycnKS5yZXBsYWNlKC8oXFxkKVssX10oXFxkKS9nLCAnJDEkMicpXG4gIHZhciBpc05lZ2F0aXZlID0gc3RyWzBdID09PSAnLSc7XG4gIHN0ci5yZXBsYWNlKGR1cmF0aW9uUkUsIGZ1bmN0aW9uKF8sIG4sIHVuaXRzKXtcbiAgICB1bml0cyA9IHVuaXRSYXRpbyh1bml0cylcbiAgICBpZiAodW5pdHMpIHJlc3VsdCA9IChyZXN1bHQgfHwgMCkgKyBNYXRoLmFicyhwYXJzZUZsb2F0KG4sIDEwKSkgKiB1bml0c1xuICB9KVxuXG4gIHJldHVybiByZXN1bHQgJiYgKChyZXN1bHQgLyAodW5pdFJhdGlvKGZvcm1hdCkgfHwgMSkpICogKGlzTmVnYXRpdmUgPyAtMSA6IDEpKVxufVxuXG5mdW5jdGlvbiB1bml0UmF0aW8oc3RyKSB7XG4gIHJldHVybiBwYXJzZVtzdHJdIHx8IHBhcnNlW3N0ci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL3MkLywgJycpXVxufVxuXG5leHBvcnQgZGVmYXVsdCBwYXJzZVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/parse-duration/index.mjs\n");

/***/ })

};
;