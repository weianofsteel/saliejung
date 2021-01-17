webpackHotUpdate_N_E("pages/Work/Agoda-design",{

/***/ "./component/Public/LearnMore.js":
/*!***************************************!*\
  !*** ./component/Public/LearnMore.js ***!
  \***************************************/
/*! exports provided: LearnMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnMore", function() { return LearnMore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ArrowDownward */ "./node_modules/@material-ui/icons/ArrowDownward.js");
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-animated-css */ "./node_modules/react-animated-css/lib/index.js");
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_animated_css__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Public\\LearnMore.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  button: {
    fontFamily: 'Roboto',
    fontSize: '1.1rem',
    fontWeight: 400,
    lineHeight: '1.1rem',
    letterSpacing: '0.05rem',
    color: '#8F8F8F',
    backgroundColor: 'transparent',
    textAlign: 'center',
    "&:hover": {
      color: '#1F1F1F'
    }
  }
});
var LearnMore = function LearnMore(props) {
  _s();

  var classes = useStyles();

  var handleAnchor = function handleAnchor() {
    if (window !== undefined) {
      window.scrollTo({
        top: scrollY,
        behavior: 'smooth'
      });
    }
  };

  var scrollY = props.scrollY;
  return __jsx(react_animated_css__WEBPACK_IMPORTED_MODULE_5__["Animated"], {
    animationIn: "bounce",
    animateOnMount: false,
    isVisible: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.button,
    onClick: handleAnchor,
    disableRipple: true,
    style: {
      backgroundColor: 'transparent'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  }, "Learn More")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12,
    style: {
      marginTop: '0.5rem'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, __jsx(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  })))));
};

_s(LearnMore, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = LearnMore;

var _c;

$RefreshReg$(_c, "LearnMore");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1B1YmxpYy9MZWFybk1vcmUuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImJ1dHRvbiIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwidGV4dEFsaWduIiwiTGVhcm5Nb3JlIiwicHJvcHMiLCJjbGFzc2VzIiwiaGFuZGxlQW5jaG9yIiwid2luZG93IiwidW5kZWZpbmVkIiwic2Nyb2xsVG8iLCJ0b3AiLCJzY3JvbGxZIiwiYmVoYXZpb3IiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzFCQyxRQUFNLEVBQUU7QUFDUEMsY0FBVSxFQUFFLFFBREw7QUFFUEMsWUFBUSxFQUFFLFFBRkg7QUFHUEMsY0FBVSxFQUFFLEdBSEw7QUFJUEMsY0FBVSxFQUFFLFFBSkw7QUFLUEMsaUJBQWEsRUFBRSxTQUxSO0FBTVBDLFNBQUssRUFBRSxTQU5BO0FBT1BDLG1CQUFlLEVBQUUsYUFQVjtBQVFQQyxhQUFTLEVBQUUsUUFSSjtBQVNQLGVBQVU7QUFDTkYsV0FBSyxFQUFDO0FBREE7QUFUSDtBQURrQixDQUFELENBQTVCO0FBZ0JPLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUVoQyxNQUFNQyxPQUFPLEdBQUdiLFNBQVMsRUFBekI7O0FBRUEsTUFBTWMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QixRQUFHQyxNQUFNLEtBQUtDLFNBQWQsRUFBeUI7QUFDckJELFlBQU0sQ0FBQ0UsUUFBUCxDQUFnQjtBQUFDQyxXQUFHLEVBQUVDLE9BQU47QUFBZUMsZ0JBQVEsRUFBRTtBQUF6QixPQUFoQjtBQUNIO0FBQ0osR0FKRDs7QUFKZ0MsTUFVeEJELE9BVndCLEdBVVpQLEtBVlksQ0FVeEJPLE9BVndCO0FBWWhDLFNBQ0ksTUFBQywyREFBRDtBQUFVLGVBQVcsRUFBQyxRQUF0QjtBQUErQixrQkFBYyxFQUFFLEtBQS9DO0FBQXNELGFBQVMsRUFBRSxJQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUksTUFBQyxnRUFBRDtBQUNJLGFBQVMsRUFBRU4sT0FBTyxDQUFDWCxNQUR2QjtBQUVJLFdBQU8sRUFBRVksWUFGYjtBQUdJLGlCQUFhLEVBQUUsSUFIbkI7QUFJSSxTQUFLLEVBQUU7QUFBQ0wscUJBQWUsRUFBRTtBQUFsQixLQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNSSxNQUFDLDhEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosQ0FESixFQUlJLE1BQUMsOERBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixTQUFLLEVBQUU7QUFBQ1ksZUFBUyxFQUFDO0FBQVgsS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBSkosQ0FOSixDQUZKLENBREo7QUFxQkgsQ0FqQ007O0dBQU1WLFM7VUFFT1gsUzs7O0tBRlBXLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvV29yay9BZ29kYS1kZXNpZ24uNTY1NzA3ZTA2NjA1MmJkZjdhNzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBBcnJvd0Rvd253YXJkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dEb3dud2FyZCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQge0FuaW1hdGVkfSBmcm9tIFwicmVhY3QtYW5pbWF0ZWQtY3NzXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgYnV0dG9uOiB7XHJcbiAgICBmb250RmFtaWx5OiAnUm9ib3RvJyxcclxuICAgIGZvbnRTaXplOiAnMS4xcmVtJyxcclxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgIGxpbmVIZWlnaHQ6ICcxLjFyZW0nLFxyXG4gICAgbGV0dGVyU3BhY2luZzogJzAuMDVyZW0nLFxyXG4gICAgY29sb3I6ICcjOEY4RjhGJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgY29sb3I6JyMxRjFGMUYnICAgICAgICBcclxuICAgIH1cclxuICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBMZWFybk1vcmUgPSAocHJvcHMpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUFuY2hvciA9ICgpID0+IHtcclxuICAgICAgICBpZih3aW5kb3cgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe3RvcDogc2Nyb2xsWSwgYmVoYXZpb3I6ICdzbW9vdGgnfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBzY3JvbGxZIH0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxBbmltYXRlZCBhbmltYXRpb25Jbj1cImJvdW5jZVwiIGFuaW1hdGVPbk1vdW50PXtmYWxzZX0gaXNWaXNpYmxlPXt0cnVlfT5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBbmNob3J9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCd9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5MZWFybiBNb3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzAuNXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93RG93bndhcmRJY29uLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+IFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDwvQW5pbWF0ZWQ+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==