"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./pages/blog.jsx":
/*!************************!*\
  !*** ./pages/blog.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Layout */ \"./components/layout/Layout.jsx\");\n/* harmony import */ var _profileSkills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profileSkills */ \"./profileSkills.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar PostCard = function(param) {\n    var post = param.post;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-md-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: post.imageURL,\n                        alt: \"\",\n                        className: \"card-img-top\"\n                    }, void 0, false, {\n                        fileName: \"/home/rockijunior/Escritorio/proyectosPersonales/portfolio/pages/blog.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/rockijunior/Escritorio/proyectosPersonales/portfolio/pages/blog.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card-body\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"/home/rockijunior/Escritorio/proyectosPersonales/portfolio/pages/blog.jsx\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: post.content\n                        }, void 0, false, {\n                            fileName: \"/home/rockijunior/Escritorio/proyectosPersonales/portfolio/pages/blog.jsx\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/post?title=\".concat(post.title),\n                            as: \"/react\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-light\",\n                                children: \"Read\"\n                            }, void 0, false, {\n                                fileName: \"/home/rockijunior/Escritorio/proyectosPersonales/portfolio/pages/blog.jsx\",\n                                lineNumber: 16,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/rockijunior/Escritorio/proyectosPersonales/portfolio/pages/blog.jsx\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/rockijunior/Escritorio/proyectosPersonales/portfolio/pages/blog.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/rockijunior/Escritorio/proyectosPersonales/portfolio/pages/blog.jsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/rockijunior/Escritorio/proyectosPersonales/portfolio/pages/blog.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this);\n};\n_c = PostCard;\nvar Blog = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        footer: false,\n        title: \"My Blog\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: _profileSkills__WEBPACK_IMPORTED_MODULE_2__.posts.map(function(post, i) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostCard, {\n                    post: post\n                }, i, false, {\n                    fileName: \"/home/rockijunior/Escritorio/proyectosPersonales/portfolio/pages/blog.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/home/rockijunior/Escritorio/proyectosPersonales/portfolio/pages/blog.jsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/rockijunior/Escritorio/proyectosPersonales/portfolio/pages/blog.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c, _c1;\n$RefreshReg$(_c, \"PostCard\");\n$RefreshReg$(_c1, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQWlEO0FBQ1I7QUFDWjtBQUU3QixJQUFNRyxRQUFRLEdBQUcsZ0JBQWM7UUFBWEMsSUFBSSxTQUFKQSxJQUFJO0lBQ3RCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxVQUFVO2tCQUN2Qiw0RUFBQ0QsS0FBRztZQUFDQyxTQUFTLEVBQUMsTUFBTTs7OEJBQ25CLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsVUFBVTs4QkFDdkIsNEVBQUNDLEtBQUc7d0JBQUNDLEdBQUcsRUFBRUosSUFBSSxDQUFDSyxRQUFRO3dCQUFFQyxHQUFHLEVBQUMsRUFBRTt3QkFBQ0osU0FBUyxFQUFDLGNBQWM7Ozs7OzZCQUFHOzs7Ozt5QkFDdkQ7OEJBQ04sOERBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxXQUFXOztzQ0FDeEIsOERBQUNLLElBQUU7c0NBQUVQLElBQUksQ0FBQ1EsS0FBSzs7Ozs7aUNBQU07c0NBQ3JCLDhEQUFDQyxHQUFDO3NDQUFFVCxJQUFJLENBQUNVLE9BQU87Ozs7O2lDQUFLO3NDQUNyQiw4REFBQ1osa0RBQUk7NEJBQUNhLElBQUksRUFBRSxjQUFhLENBQWEsT0FBWFgsSUFBSSxDQUFDUSxLQUFLLENBQUU7NEJBQUVJLEVBQUUsRUFBQyxRQUFRO3NDQUNsRCw0RUFBQ0MsUUFBTTtnQ0FBQ1gsU0FBUyxFQUFDLGVBQWU7MENBQUMsTUFBSTs7Ozs7cUNBQVM7Ozs7O2lDQUMxQzs7Ozs7O3lCQUNIOzs7Ozs7aUJBQ0Y7Ozs7O2FBQ0YsQ0FDTjtBQUNKLENBQUM7QUFqQktILEtBQUFBLFFBQVE7QUFtQmQsSUFBTWUsSUFBSSxHQUFHLFdBQU07SUFDakIscUJBQ0UsOERBQUNsQixpRUFBTTtRQUFDbUIsTUFBTSxFQUFFLEtBQUs7UUFBRVAsS0FBSyxFQUFDLFNBQVM7a0JBQ3BDLDRFQUFDUCxLQUFHO1lBQUNDLFNBQVMsRUFBQyxLQUFLO3NCQUNqQkwscURBQVMsQ0FBQyxTQUFDRyxJQUFJLEVBQUVpQixDQUFDO3FDQUNqQiw4REFBQ2xCLFFBQVE7b0JBQVNDLElBQUksRUFBRUEsSUFBSTttQkFBYmlCLENBQUM7Ozs7eUJBQWdCO2FBQ2pDLENBQUM7Ozs7O2lCQUNFOzs7OzthQUNDLENBQ1Q7QUFDSixDQUFDO0FBVktILE1BQUFBLElBQUk7QUFZViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jsb2cuanN4PzlhNDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgeyBwb3N0cyB9IGZyb20gXCIuLi9wcm9maWxlU2tpbGxzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IFBvc3RDYXJkID0gKHsgcG9zdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3dcIj5cbiAgICAgICAgICA8aW1nIHNyYz17cG9zdC5pbWFnZVVSTH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICAgICAgPHA+e3Bvc3QuY29udGVudH08L3A+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0P3RpdGxlPSR7cG9zdC50aXRsZX1gfSBhcz1cIi9yZWFjdFwiID5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodFwiPlJlYWQ8L2J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBCbG9nID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgZm9vdGVyPXtmYWxzZX0gdGl0bGU9XCJNeSBCbG9nXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICB7cG9zdHMubWFwKChwb3N0LCBpKSA9PiAoXG4gICAgICAgICAgPFBvc3RDYXJkIGtleT17aX0gcG9zdD17cG9zdH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2c7XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwicG9zdHMiLCJMaW5rIiwiUG9zdENhcmQiLCJwb3N0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2VVUkwiLCJhbHQiLCJoMSIsInRpdGxlIiwicCIsImNvbnRlbnQiLCJocmVmIiwiYXMiLCJidXR0b24iLCJCbG9nIiwiZm9vdGVyIiwibWFwIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog.jsx\n"));

/***/ })

});