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
/* harmony import */ var react_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-animations */ "./node_modules/react-animations/lib/index.js");
/* harmony import */ var react_animations__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_animations__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var radium__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! radium */ "./node_modules/radium/es/index.js");
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
  },
  bounce: {
    animation: 'x 1s',
    animationName: radium__WEBPACK_IMPORTED_MODULE_6__["default"].keyframes(react_animations__WEBPACK_IMPORTED_MODULE_5__["bounce"], 'bounce')
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
  return __jsx(radium__WEBPACK_IMPORTED_MODULE_6__["StyleRoot"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    className: classes.bounce,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1B1YmxpYy9MZWFybk1vcmUuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImJ1dHRvbiIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwidGV4dEFsaWduIiwiYm91bmNlIiwiYW5pbWF0aW9uIiwiYW5pbWF0aW9uTmFtZSIsIlJhZGl1bSIsImtleWZyYW1lcyIsIkxlYXJuTW9yZSIsInByb3BzIiwiY2xhc3NlcyIsImhhbmRsZUFuY2hvciIsIndpbmRvdyIsInVuZGVmaW5lZCIsInNjcm9sbFRvIiwidG9wIiwic2Nyb2xsWSIsImJlaGF2aW9yIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUMxQkMsUUFBTSxFQUFFO0FBQ1BDLGNBQVUsRUFBRSxRQURMO0FBRVBDLFlBQVEsRUFBRSxRQUZIO0FBR1BDLGNBQVUsRUFBRSxHQUhMO0FBSVBDLGNBQVUsRUFBRSxRQUpMO0FBS1BDLGlCQUFhLEVBQUUsU0FMUjtBQU1QQyxTQUFLLEVBQUUsU0FOQTtBQU9QQyxtQkFBZSxFQUFFLGFBUFY7QUFRUEMsYUFBUyxFQUFFLFFBUko7QUFTUCxlQUFVO0FBQ05GLFdBQUssRUFBQztBQURBO0FBVEgsR0FEa0I7QUFjMUJHLFFBQU0sRUFBRTtBQUNQQyxhQUFTLEVBQUUsTUFESjtBQUVQQyxpQkFBYSxFQUFFQyw4Q0FBTSxDQUFDQyxTQUFQLENBQWlCSix1REFBakIsRUFBeUIsUUFBekI7QUFGUjtBQWRrQixDQUFELENBQTVCO0FBb0JPLElBQU1LLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUVoQyxNQUFNQyxPQUFPLEdBQUdsQixTQUFTLEVBQXpCOztBQUVBLE1BQU1tQixZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3ZCLFFBQUdDLE1BQU0sS0FBS0MsU0FBZCxFQUF5QjtBQUNyQkQsWUFBTSxDQUFDRSxRQUFQLENBQWdCO0FBQUNDLFdBQUcsRUFBRUMsT0FBTjtBQUFlQyxnQkFBUSxFQUFFO0FBQXpCLE9BQWhCO0FBQ0g7QUFDSixHQUpEOztBQUpnQyxNQVV4QkQsT0FWd0IsR0FVWlAsS0FWWSxDQVV4Qk8sT0FWd0I7QUFZaEMsU0FDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSSxNQUFDLGdFQUFEO0FBQ0ksYUFBUyxFQUFFTixPQUFPLENBQUNoQixNQUR2QjtBQUVJLFdBQU8sRUFBRWlCLFlBRmI7QUFHSSxpQkFBYSxFQUFFLElBSG5CO0FBSUksU0FBSyxFQUFFO0FBQUNWLHFCQUFlLEVBQUU7QUFBbEIsS0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUksTUFBQyw4REFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixhQUFTLEVBQUVTLE9BQU8sQ0FBQ1AsTUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixDQURKLEVBSUksTUFBQyw4REFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLFNBQUssRUFBRTtBQUFDZSxlQUFTLEVBQUM7QUFBWCxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FKSixDQU5KLENBRkosQ0FESjtBQXFCSCxDQWpDTTs7R0FBTVYsUztVQUVPaEIsUzs7O0tBRlBnQixTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1dvcmsvQWdvZGEtZGVzaWduLjhhOTBkOWFiMjQyMzA5YjE4ZTc4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgQXJyb3dEb3dud2FyZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93RG93bndhcmQnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHsgYm91bmNlIH0gZnJvbSAncmVhY3QtYW5pbWF0aW9ucyc7XHJcbmltcG9ydCBSYWRpdW0sIHtTdHlsZVJvb3R9IGZyb20gJ3JhZGl1bSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgYnV0dG9uOiB7XHJcbiAgICBmb250RmFtaWx5OiAnUm9ib3RvJyxcclxuICAgIGZvbnRTaXplOiAnMS4xcmVtJyxcclxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgIGxpbmVIZWlnaHQ6ICcxLjFyZW0nLFxyXG4gICAgbGV0dGVyU3BhY2luZzogJzAuMDVyZW0nLFxyXG4gICAgY29sb3I6ICcjOEY4RjhGJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgY29sb3I6JyMxRjFGMUYnICAgICAgICBcclxuICAgIH1cclxuICAgfSxcclxuICAgYm91bmNlOiB7XHJcbiAgICBhbmltYXRpb246ICd4IDFzJyxcclxuICAgIGFuaW1hdGlvbk5hbWU6IFJhZGl1bS5rZXlmcmFtZXMoYm91bmNlLCAnYm91bmNlJylcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IExlYXJuTW9yZSA9IChwcm9wcykgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQW5jaG9yID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHdpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7dG9wOiBzY3JvbGxZLCBiZWhhdmlvcjogJ3Ntb290aCd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IHNjcm9sbFkgfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFN0eWxlUm9vdD5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBbmNob3J9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCd9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmJvdW5jZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5MZWFybiBNb3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzAuNXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93RG93bndhcmRJY29uLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+IFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgPC9TdHlsZVJvb3Q+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==