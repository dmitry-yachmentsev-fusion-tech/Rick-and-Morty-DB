"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar HomePage = function() {\n    var mokCharacters = [\n        {\n            id: 1,\n            name: \"Rick\"\n        },\n        {\n            id: 2,\n            name: \"Morty\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Rick & Morty DataBase\"\n            }, void 0, false, {\n                fileName: \"/Users/fusion_tech/Documents/Rick-and-Morty-DB/pages/index.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: mokCharacters.map(function(hero) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\".concat(hero.id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: hero.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/fusion_tech/Documents/Rick-and-Morty-DB/pages/index.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 19\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/fusion_tech/Documents/Rick-and-Morty-DB/pages/index.js\",\n                                lineNumber: 17,\n                                columnNumber: 17\n                            }, _this)\n                        }, hero.id, false, {\n                            fileName: \"/Users/fusion_tech/Documents/Rick-and-Morty-DB/pages/index.js\",\n                            lineNumber: 16,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/fusion_tech/Documents/Rick-and-Morty-DB/pages/index.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/fusion_tech/Documents/Rick-and-Morty-DB/pages/index.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fusion_tech/Documents/Rick-and-Morty-DB/pages/index.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this);\n};\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUE2QjtBQUU3QixJQUFNQyxRQUFRLEdBQUcsV0FBTTtJQUNyQixJQUFNQyxhQUFhLEdBQUc7UUFDcEI7WUFBRUMsRUFBRSxFQUFFLENBQUM7WUFBRUMsSUFBSSxFQUFFLE1BQU07U0FBRTtRQUN2QjtZQUFFRCxFQUFFLEVBQUUsQ0FBQztZQUFFQyxJQUFJLEVBQUUsT0FBTztTQUFFO0tBQ3pCO0lBRUQscUJBQ0UsOERBQUNDLEtBQUc7OzBCQUNGLDhEQUFDQyxJQUFFOzBCQUFDLHVCQUFxQjs7Ozs7cUJBQUs7MEJBQzlCLDhEQUFDRCxLQUFHOzBCQUNGLDRFQUFDRSxJQUFFOzhCQUNBTCxhQUFhLENBQUNNLEdBQUcsQ0FBQ0MsU0FBQUEsSUFBSSxFQUFJO3dCQUN6QixxQkFDRSw4REFBQ0MsSUFBRTtzQ0FDRCw0RUFBQ1Ysa0RBQUk7Z0NBQUNXLElBQUksRUFBRSxHQUFFLENBQVUsT0FBUkYsSUFBSSxDQUFDTixFQUFFLENBQUU7MENBQ3ZCLDRFQUFDUyxHQUFDOzhDQUFFSCxJQUFJLENBQUNMLElBQUk7Ozs7O3lDQUFLOzs7OztxQ0FDYjsyQkFIQUssSUFBSSxDQUFDTixFQUFFOzs7O2lDQUlYLENBQ047cUJBQ0YsQ0FBQzs7Ozs7eUJBQ0M7Ozs7O3FCQUNEOzs7Ozs7YUFDRixDQUNQO0NBQ0Y7QUF4QktGLEtBQUFBLFFBQVE7QUEwQmQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBtb2tDaGFyYWN0ZXJzID0gW1xuICAgIHsgaWQ6IDEsIG5hbWU6IFwiUmlja1wiIH0sXG4gICAgeyBpZDogMiwgbmFtZTogXCJNb3J0eVwiIH1cbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+UmljayAmIE1vcnR5IERhdGFCYXNlPC9oMT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7bW9rQ2hhcmFjdGVycy5tYXAoaGVybyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtoZXJvLmlkfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7aGVyby5pZH1gfT5cbiAgICAgICAgICAgICAgICAgIDxhPntoZXJvLm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXSwibmFtZXMiOlsiTGluayIsIkhvbWVQYWdlIiwibW9rQ2hhcmFjdGVycyIsImlkIiwibmFtZSIsImRpdiIsImgxIiwidWwiLCJtYXAiLCJoZXJvIiwibGkiLCJocmVmIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});