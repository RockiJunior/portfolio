"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_error",{

/***/ "./components/layout/Layout.jsx":
/*!**************************************!*\
  !*** ./components/layout/Layout.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _navbar_Navbar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/Navbar.jsx */ \"./components/navbar/Navbar.jsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router.js */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Layout = function(param) {\n    var children = param.children, title = param.title, _footer = param.footer, footer = _footer === void 0 ? true : _footer, _dark = param.dark, dark = _dark === void 0 ? false : _dark;\n    _s();\n    var router = (0,next_router_js__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var handleRouteChange = function(url) {\n            console.log(url);\n            nprogress__WEBPACK_IMPORTED_MODULE_5___default().start();\n        };\n        router.events.on(\"routeChangeStart\", handleRouteChange);\n        router.events.on(\"routeChangeComplete\", function() {\n            nprogress__WEBPACK_IMPORTED_MODULE_5___default().done();\n        });\n        return function() {\n            router.events.off(\"routeChangeStart\", handleRouteChange);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()({\n            \"bg-dark\": dark,\n            \"bg-light\": !dark\n        }),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar_Navbar_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/rockijunior/Escritorio/proyectosPersonales/portfolio/components/layout/Layout.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container py-4\",\n                children: [\n                    title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(\"text-center\", {\n                            \"bg-light\": dark\n                        }),\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/home/rockijunior/Escritorio/proyectosPersonales/portfolio/components/layout/Layout.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, _this),\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rockijunior/Escritorio/proyectosPersonales/portfolio/components/layout/Layout.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            footer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"bg-dark text-light text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"\\xa9 Gabriel Villarroel Portfolio\"\n                        }, void 0, false, {\n                            fileName: \"/home/rockijunior/Escritorio/proyectosPersonales/portfolio/components/layout/Layout.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \" 1994 - \",\n                                new Date().getFullYear()\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/rockijunior/Escritorio/proyectosPersonales/portfolio/components/layout/Layout.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"All Rights Reserved.\"\n                        }, void 0, false, {\n                            fileName: \"/home/rockijunior/Escritorio/proyectosPersonales/portfolio/components/layout/Layout.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/rockijunior/Escritorio/proyectosPersonales/portfolio/components/layout/Layout.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/rockijunior/Escritorio/proyectosPersonales/portfolio/components/layout/Layout.jsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rockijunior/Escritorio/proyectosPersonales/portfolio/components/layout/Layout.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this);\n};\n_s(Layout, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router_js__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUEwQztBQUNiO0FBQ0s7QUFDUztBQUNUO0FBQ0U7QUFFcEMsSUFBTU0sTUFBTSxHQUFHLGdCQUFzRDtRQUFuREMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLEtBQUssU0FBTEEsS0FBSyxrQkFBRUMsTUFBTSxFQUFOQSxNQUFNLHdCQUFHLElBQUksMEJBQUVDLElBQUksRUFBSkEsSUFBSSxzQkFBRyxLQUFLOztJQUM1RCxJQUFNQyxNQUFNLEdBQUdSLHlEQUFTLEVBQUU7SUFDMUJELGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQU1VLGlCQUFpQixHQUFHLFNBQUNDLEdBQUcsRUFBSztZQUNqQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCVCxzREFBZSxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUNETyxNQUFNLENBQUNNLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLGtCQUFrQixFQUFFTixpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hERCxNQUFNLENBQUNNLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLHFCQUFxQixFQUFFLFdBQU07WUFDNUNkLHFEQUFjLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sV0FBTTtZQUNYTyxNQUFNLENBQUNNLE1BQU0sQ0FBQ0csR0FBRyxDQUFDLGtCQUFrQixFQUFFUixpQkFBaUIsQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQztJQUNKLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNQLHFCQUNFLDhEQUFDUyxLQUFHO1FBQUNDLFNBQVMsRUFBRWpCLGlEQUFVLENBQUM7WUFBRSxTQUFTLEVBQUVLLElBQUk7WUFBRSxVQUFVLEVBQUUsQ0FBQ0EsSUFBSTtTQUFFLENBQUM7OzBCQUNoRSw4REFBQ1YsMERBQU07Ozs7cUJBQUc7MEJBQ1YsOERBQUN1QixNQUFJO2dCQUFDRCxTQUFTLEVBQUMsZ0JBQWdCOztvQkFDN0JkLEtBQUssa0JBQ0osOERBQUNnQixJQUFFO3dCQUFDRixTQUFTLEVBQUVqQixpREFBVSxDQUFDLGFBQWEsRUFBRTs0QkFBRSxVQUFVLEVBQUVLLElBQUk7eUJBQUUsQ0FBQztrQ0FDM0RGLEtBQUs7Ozs7OzZCQUNIO29CQUVORCxRQUFROzs7Ozs7cUJBQ0o7WUFDTkUsTUFBTSxrQkFDTCw4REFBQ0EsUUFBTTtnQkFBQ2EsU0FBUyxFQUFDLGdDQUFnQzswQkFDaEQsNEVBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxlQUFlOztzQ0FDNUIsOERBQUNFLElBQUU7c0NBQUMsbUNBQW1DOzs7OztpQ0FBSztzQ0FDNUMsOERBQUNDLEdBQUM7O2dDQUFDLFVBQVE7Z0NBQUMsSUFBSUMsSUFBSSxFQUFFLENBQUNDLFdBQVcsRUFBRTs7Ozs7O2lDQUFLO3NDQUN6Qyw4REFBQ0YsR0FBQztzQ0FBQyxzQkFBb0I7Ozs7O2lDQUFJOzs7Ozs7eUJBQ3ZCOzs7OztxQkFDQzs7Ozs7O2FBRVAsQ0FDTjtBQUNKLENBQUM7R0FyQ0tuQixNQUFNOztRQUNLSCxxREFBUzs7O0FBRHBCRyxLQUFBQSxNQUFNO0FBdUNaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzeD8yZDY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL25hdmJhci9OYXZiYXIuanN4XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlci5qc1wiO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XG5pbXBvcnQgQ2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdGl0bGUsIGZvb3RlciA9IHRydWUsIGRhcmsgPSBmYWxzZSB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybCkgPT4ge1xuICAgICAgY29uc29sZS5sb2codXJsKTtcbiAgICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xuICAgIH07XG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsICgpID0+IHtcbiAgICAgIE5Qcm9ncmVzcy5kb25lKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VTdGFydFwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtDbGFzc25hbWVzKHsgXCJiZy1kYXJrXCI6IGRhcmssICdiZy1saWdodCc6ICFkYXJrIH0pfT5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBweS00XCI+XG4gICAgICAgIHt0aXRsZSAmJiAoXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17Q2xhc3NuYW1lcyhcInRleHQtY2VudGVyXCIsIHsgXCJiZy1saWdodFwiOiBkYXJrIH0pfT5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L21haW4+XG4gICAgICB7Zm9vdGVyICYmIChcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1kYXJrIHRleHQtbGlnaHQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwLTRcIj5cbiAgICAgICAgICAgIDxoMT4mY29weTsgR2FicmllbCBWaWxsYXJyb2VsIFBvcnRmb2xpbzwvaDE+XG4gICAgICAgICAgICA8cD4gMTk5NCAtIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9PC9wPlxuICAgICAgICAgICAgPHA+QWxsIFJpZ2h0cyBSZXNlcnZlZC48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJIZWFkIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiTlByb2dyZXNzIiwiQ2xhc3NuYW1lcyIsIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJmb290ZXIiLCJkYXJrIiwicm91dGVyIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwic3RhcnQiLCJldmVudHMiLCJvbiIsImRvbmUiLCJvZmYiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiaDEiLCJwIiwiRGF0ZSIsImdldEZ1bGxZZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/Layout.jsx\n"));

/***/ })

});