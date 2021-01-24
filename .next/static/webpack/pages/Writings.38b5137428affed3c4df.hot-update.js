webpackHotUpdate_N_E("pages/Writings",{

/***/ "./component/Writing/Article.js":
/*!**************************************!*\
  !*** ./component/Writing/Article.js ***!
  \**************************************/
/*! exports provided: Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _css_Writing_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../css/Writing.module.css */ "./css/Writing.module.css");
/* harmony import */ var _css_Writing_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_Writing_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_icons_OpenInNew__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/OpenInNew */ "./node_modules/@material-ui/icons/OpenInNew.js");
/* harmony import */ var _material_ui_icons_OpenInNew__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_OpenInNew__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_writings_writing01_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/writings/writing01.png */ "./public/writings/writing01.png");
/* harmony import */ var _public_writings_writing01_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_writings_writing01_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_writings_writing02_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/writings/writing02.png */ "./public/writings/writing02.png");
/* harmony import */ var _public_writings_writing02_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_writings_writing02_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Writing\\Article.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])({
  title: {
    color: '#1F1F1F',
    fontFamily: 'Roboto Slab',
    paddingBottom: '0.02rem',
    lineHight: '0.02rem'
  },
  titleOnHover: {
    color: '#1F1F1F',
    fontFamily: 'Roboto Slab',
    paddingBottom: '0.02rem',
    lineHight: '0.02rem',
    borderBottom: '2px solid black'
  },
  titleBlock: {
    height: '18rem',
    borderTop: '1px solid #B8B8B8',
    paddingTop: 20
  }
});
var Article = function Article() {
  _s();

  var _jsx;

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      hover = _React$useState2[0],
      setHover = _React$useState2[1];

  var handleHoverOn1 = function handleHoverOn1() {
    setHover(1);
  };

  var handleHoverOn2 = function handleHoverOn2() {
    setHover(2);
  };

  var handleHoverOff = function handleHoverOff() {
    setHover(0);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], (_jsx = {
    container: true,
    spacing: 1,
    style: {
      paddingTop: "6%"
    }
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "spacing", 3), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 17
  }), _jsx), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12,
    md: 5,
    className: _css_Writing_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.articleBlock,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "https://careersatagoda.com/blog/new-designer-agoda-bangkok-relocation/",
    style: {
      color: '#1F1F1F',
      fontFamily: 'Roboto Slab'
    },
    underline: "none",
    target: "_blank",
    rel: "noopener",
    onMouseEnter: handleHoverOn1,
    onMouseLeave: handleHoverOff,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: classes.titleBlock,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: hover == 1 ? classes.titleOnHover : classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 37
    }
  }, "An exciting adventure for a new designer at Agoda"), __jsx(_material_ui_icons_OpenInNew__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      fontSize: 'inherit',
      marginBottom: '-5px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 37
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 33
    }
  }), __jsx("span", {
    style: {
      fontSize: "16px",
      fontFamily: 'Roboto'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 33
    }
  }, "December 2019")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _public_writings_writing01_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    style: {
      width: '100%',
      height: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 33
    }
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12,
    md: 5,
    className: _css_Writing_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.articleBlock,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "https://careersatagoda.com/blog/mentoring-behavioral-designers-thailand-agoda/",
    style: {
      color: '#1F1F1F',
      fontFamily: 'Roboto Slab'
    },
    underline: "none",
    target: "_blank",
    rel: "noopener",
    onMouseEnter: handleHoverOn2,
    onMouseLeave: handleHoverOff,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: classes.titleBlock,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: hover == 2 ? classes.titleOnHover : classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 37
    }
  }, "Mentoring the Next Generation of Behavioral Designers in Thailand"), __jsx(_material_ui_icons_OpenInNew__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      fontSize: 'inherit',
      marginBottom: '-5px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 37
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 33
    }
  }), __jsx("span", {
    style: {
      fontSize: "16px",
      fontFamily: 'Roboto'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 33
    }
  }, "August 2020")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _public_writings_writing02_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    style: {
      width: '100%',
      height: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 33
    }
  }))))));
};

_s(Article, "621MsJmRvQUorI4ePFh7I3HV/8k=", false, function () {
  return [useStyles];
});

_c = Article;

var _c;

$RefreshReg$(_c, "Article");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1dyaXRpbmcvQXJ0aWNsZS5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGl0bGUiLCJjb2xvciIsImZvbnRGYW1pbHkiLCJwYWRkaW5nQm90dG9tIiwibGluZUhpZ2h0IiwidGl0bGVPbkhvdmVyIiwiYm9yZGVyQm90dG9tIiwidGl0bGVCbG9jayIsImhlaWdodCIsImJvcmRlclRvcCIsInBhZGRpbmdUb3AiLCJBcnRpY2xlIiwiY2xhc3NlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJob3ZlciIsInNldEhvdmVyIiwiaGFuZGxlSG92ZXJPbjEiLCJoYW5kbGVIb3Zlck9uMiIsImhhbmRsZUhvdmVyT2ZmIiwic3R5bGVzIiwiYXJ0aWNsZUJsb2NrIiwiZm9udFNpemUiLCJtYXJnaW5Cb3R0b20iLCJ3cml0aW5nMDEiLCJ3aWR0aCIsIndyaXRpbmcwMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQ3pCQyxPQUFLLEVBQUU7QUFDSEMsU0FBSyxFQUFDLFNBREg7QUFFSEMsY0FBVSxFQUFFLGFBRlQ7QUFHSEMsaUJBQWEsRUFBQyxTQUhYO0FBSUhDLGFBQVMsRUFBQztBQUpQLEdBRGtCO0FBT3pCQyxjQUFZLEVBQUU7QUFDVkosU0FBSyxFQUFDLFNBREk7QUFFVkMsY0FBVSxFQUFFLGFBRkY7QUFHVkMsaUJBQWEsRUFBQyxTQUhKO0FBSVZDLGFBQVMsRUFBQyxTQUpBO0FBS1ZFLGdCQUFZLEVBQUM7QUFMSCxHQVBXO0FBY3pCQyxZQUFVLEVBQUU7QUFDUkMsVUFBTSxFQUFDLE9BREM7QUFFUkMsYUFBUyxFQUFDLG1CQUZGO0FBR1JDLGNBQVUsRUFBQztBQUhIO0FBZGEsQ0FBRCxDQUE1QjtBQXFCTyxJQUFNQyxP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Qkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksT0FBRyxFQUFFd0IscUVBRFQ7QUFFSSxTQUFLLEVBQUU7QUFBQ0QsV0FBSyxFQUFDLE1BQVA7QUFBZWpCLFlBQU0sRUFBQztBQUF0QixLQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQW5CSixDQURKLENBOUJKLENBSlIsQ0FESjtBQXFFSCxDQXZGTTs7R0FBTUcsTztVQUVPYixTOzs7S0FGUGEsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9Xcml0aW5ncy4zOGI1MTM3NDI4YWZmZWQzYzRkZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1dyaXRpbmcubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgT3BlbkluTmV3SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvT3BlbkluTmV3JztcclxuaW1wb3J0IHdyaXRpbmcwMSBmcm9tICcuLi8uLi9wdWJsaWMvd3JpdGluZ3Mvd3JpdGluZzAxLnBuZyc7XHJcbmltcG9ydCB3cml0aW5nMDIgZnJvbSAnLi4vLi4vcHVibGljL3dyaXRpbmdzL3dyaXRpbmcwMi5wbmcnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICBjb2xvcjonIzFGMUYxRicsIFxyXG4gICAgICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8gU2xhYicsIFxyXG4gICAgICAgIHBhZGRpbmdCb3R0b206JzAuMDJyZW0nLCBcclxuICAgICAgICBsaW5lSGlnaHQ6JzAuMDJyZW0nXHJcbiAgICB9LFxyXG4gICAgdGl0bGVPbkhvdmVyOiB7XHJcbiAgICAgICAgY29sb3I6JyMxRjFGMUYnLCBcclxuICAgICAgICBmb250RmFtaWx5OiAnUm9ib3RvIFNsYWInLCBcclxuICAgICAgICBwYWRkaW5nQm90dG9tOicwLjAycmVtJywgXHJcbiAgICAgICAgbGluZUhpZ2h0OicwLjAycmVtJyxcclxuICAgICAgICBib3JkZXJCb3R0b206JzJweCBzb2xpZCBibGFjaydcclxuICAgIH0sXHJcbiAgICB0aXRsZUJsb2NrOiB7XHJcbiAgICAgICAgaGVpZ2h0OicxOHJlbScsIFxyXG4gICAgICAgIGJvcmRlclRvcDonMXB4IHNvbGlkICNCOEI4QjgnLCBcclxuICAgICAgICBwYWRkaW5nVG9wOjIwXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFydGljbGUgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCBbaG92ZXIsIHNldEhvdmVyXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVIb3Zlck9uMSA9ICgpID0+IHtcclxuICAgICAgICBzZXRIb3ZlcigxKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVIb3Zlck9uMiA9ICgpID0+IHtcclxuICAgICAgICBzZXRIb3ZlcigyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVIb3Zlck9mZiA9ICgpID0+IHtcclxuICAgICAgICBzZXRIb3ZlcigwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogYXJ0aWNsZSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0gc3R5bGU9e3twYWRkaW5nVG9wOlwiNiVcIn19IHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NX0gY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZUJsb2NrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vY2FyZWVyc2F0YWdvZGEuY29tL2Jsb2cvbmV3LWRlc2lnbmVyLWFnb2RhLWJhbmdrb2stcmVsb2NhdGlvbi8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOicjMUYxRjFGJywgZm9udEZhbWlseTogJ1JvYm90byBTbGFiJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9J25vb3BlbmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVIb3Zlck9uMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlSG92ZXJPZmZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlQmxvY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2hvdmVyPT0xP2NsYXNzZXMudGl0bGVPbkhvdmVyOmNsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW4gZXhjaXRpbmcgYWR2ZW50dXJlIGZvciBhIG5ldyBkZXNpZ25lciBhdCBBZ29kYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcGVuSW5OZXdJY29uIHN0eWxlPXt7Zm9udFNpemU6J2luaGVyaXQnLG1hcmdpbkJvdHRvbTonLTVweCd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTpcIjE2cHhcIixmb250RmFtaWx5OidSb2JvdG8nfX0+RGVjZW1iZXIgMjAxOTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3dyaXRpbmcwMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMTAwJSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NX0gY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZUJsb2NrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vY2FyZWVyc2F0YWdvZGEuY29tL2Jsb2cvbWVudG9yaW5nLWJlaGF2aW9yYWwtZGVzaWduZXJzLXRoYWlsYW5kLWFnb2RhLydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6JyMxRjFGMUYnLCBmb250RmFtaWx5OiAnUm9ib3RvIFNsYWInfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZUhvdmVyT24yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVIb3Zlck9mZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGVCbG9ja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aG92ZXI9PTI/Y2xhc3Nlcy50aXRsZU9uSG92ZXI6Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZW50b3JpbmcgdGhlIE5leHQgR2VuZXJhdGlvbiBvZiBCZWhhdmlvcmFsIERlc2lnbmVycyBpbiBUaGFpbGFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcGVuSW5OZXdJY29uIHN0eWxlPXt7Zm9udFNpemU6J2luaGVyaXQnLG1hcmdpbkJvdHRvbTonLTVweCd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTpcIjE2cHhcIixmb250RmFtaWx5OidSb2JvdG8nfX0+QXVndXN0IDIwMjA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt3cml0aW5nMDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzEwMCUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIGFydGljbGUgKi99XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9