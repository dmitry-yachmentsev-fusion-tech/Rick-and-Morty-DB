"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/character/episode/[id]";
exports.ids = ["pages/character/episode/[id]"];
exports.modules = {

/***/ "./pages/character/episode/[id].js":
/*!*****************************************!*\
  !*** ./pages/character/episode/[id].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({ episode  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: [\n                \"Episode \",\n                episode.name\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/fusion_tech/Documents/Rick-and-Morty-DB/pages/character/episode/[id].js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/fusion_tech/Documents/Rick-and-Morty-DB/pages/character/episode/[id].js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n};\n;\nasync function getServerSideProps({ params  }) {\n    const episode = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`https://rickandmortyapi.com/api/episode/${params.id}`);\n    return {\n        props: {\n            episode: episode.data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGFyYWN0ZXIvZXBpc29kZS9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBRTFCLDZCQUFlLG9DQUFTLEVBQUVDLE9BQU8sR0FBRSxFQUFFO0lBRW5DLHFCQUNFLDhEQUFDQyxLQUFHO2tCQUNGLDRFQUFDQyxJQUFFOztnQkFBQyxVQUFRO2dCQUFDRixPQUFPLENBQUNHLElBQUk7Ozs7OztnQkFBTTs7Ozs7WUFDM0IsQ0FDUDtDQUNGOztBQUVNLGVBQWVDLGtCQUFrQixDQUFDLEVBQUVDLE1BQU0sR0FBRSxFQUFFO0lBQ25ELE1BQU1MLE9BQU8sR0FBRyxNQUFNRCxnREFBUyxDQUFDLENBQUMsd0NBQXdDLEVBQUVNLE1BQU0sQ0FBQ0UsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUV2RixPQUFPO1FBQ0xDLEtBQUssRUFBRTtZQUNMUixPQUFPLEVBQUVBLE9BQU8sQ0FBQ1MsSUFBSTtTQUN0QjtLQUNGO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SaWNrLWFuZC1Nb3J0eS1EQi8uL3BhZ2VzL2NoYXJhY3Rlci9lcGlzb2RlL1tpZF0uanM/MThhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih7IGVwaXNvZGUgfSkge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5FcGlzb2RlIHtlcGlzb2RlLm5hbWV9PC9oMT5cbiAgICA8L2Rpdj5cbiAgKVxufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IGVwaXNvZGUgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8ke3BhcmFtcy5pZH1gKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBlcGlzb2RlOiBlcGlzb2RlLmRhdGEsXG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbImF4aW9zIiwiZXBpc29kZSIsImRpdiIsImgxIiwibmFtZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInBhcmFtcyIsImdldCIsImlkIiwicHJvcHMiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/character/episode/[id].js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/character/episode/[id].js"));
module.exports = __webpack_exports__;

})();