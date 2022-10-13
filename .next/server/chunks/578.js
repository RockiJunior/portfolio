"use strict";
exports.id = 578;
exports.ids = [578];
exports.modules = {

/***/ 8578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/navbar/Navbar.jsx


const Navbar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "navbar navbar-expand-lg navbar-dark bg-dark",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container-fluid",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "navbar-brand",
                        children: "Gabriels Portfolio"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "navbar-toggler",
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#navbarNav",
                    "aria-controls": "navbarNav",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "navbar-toggler-icon"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarNav",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "navbar-nav ms-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/blog",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        children: "Blog"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/github",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        children: "Github"
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const navbar_Navbar = (Navbar);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router.js"
var router_js_ = __webpack_require__(5925);
// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__(808);
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./components/layout/Layout.jsx







const Layout = ({ children , title , footer =true , dark =false  })=>{
    const router = (0,router_js_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        const handleRouteChange = (url)=>{
            external_nprogress_default().start();
        };
        router.events.on("routeChangeStart", handleRouteChange);
        router.events.on("routeChangeComplete", ()=>{
            external_nprogress_default().done();
        });
        return ()=>{
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, [
        router.events
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()({
            "bg-dark": dark,
            "bg-light": !dark
        }),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(navbar_Navbar, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "container py-4",
                children: [
                    title && /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: external_classnames_default()("text-center", {
                            "bg-light": dark
                        }),
                        children: title
                    }),
                    children
                ]
            }),
            footer && /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "bg-dark text-light text-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container p-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "text-light",
                            children: "\xa9 Gabriel Villarroel Portfolio"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                " 1994 - ",
                                new Date().getFullYear()
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "All Rights Reserved."
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ })

};
;