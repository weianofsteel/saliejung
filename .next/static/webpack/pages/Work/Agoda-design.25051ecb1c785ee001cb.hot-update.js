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
/* harmony import */ var _css_Public_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../css/Public.module.css */ "./css/Public.module.css");
/* harmony import */ var _css_Public_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Public_module_css__WEBPACK_IMPORTED_MODULE_6__);
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
  return (// <Animated animationIn="bounce" isVisible={true}>
    __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: classes.button,
      onClick: handleAnchor,
      disableRipple: true,
      style: {
        backgroundColor: 'transparent'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      container: true,
      className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.bounce,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: true,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 21
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
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
        lineNumber: 50,
        columnNumber: 21
      }
    }, __jsx(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 25
      }
    })))) // </Animated>

  );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1B1YmxpYy9MZWFybk1vcmUuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImJ1dHRvbiIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwidGV4dEFsaWduIiwiTGVhcm5Nb3JlIiwicHJvcHMiLCJjbGFzc2VzIiwiaGFuZGxlQW5jaG9yIiwid2luZG93IiwidW5kZWZpbmVkIiwic2Nyb2xsVG8iLCJ0b3AiLCJzY3JvbGxZIiwiYmVoYXZpb3IiLCJzdHlsZXMiLCJib3VuY2UiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUMxQkMsUUFBTSxFQUFFO0FBQ1BDLGNBQVUsRUFBRSxRQURMO0FBRVBDLFlBQVEsRUFBRSxRQUZIO0FBR1BDLGNBQVUsRUFBRSxHQUhMO0FBSVBDLGNBQVUsRUFBRSxRQUpMO0FBS1BDLGlCQUFhLEVBQUUsU0FMUjtBQU1QQyxTQUFLLEVBQUUsU0FOQTtBQU9QQyxtQkFBZSxFQUFFLGFBUFY7QUFRUEMsYUFBUyxFQUFFLFFBUko7QUFTUCxlQUFVO0FBQ05GLFdBQUssRUFBQztBQURBO0FBVEg7QUFEa0IsQ0FBRCxDQUE1QjtBQWdCTyxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFFaEMsTUFBTUMsT0FBTyxHQUFHYixTQUFTLEVBQXpCOztBQUVBLE1BQU1jLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkIsUUFBR0MsTUFBTSxLQUFLQyxTQUFkLEVBQXlCO0FBQ3JCRCxZQUFNLENBQUNFLFFBQVAsQ0FBZ0I7QUFBQ0MsV0FBRyxFQUFFQyxPQUFOO0FBQWVDLGdCQUFRLEVBQUU7QUFBekIsT0FBaEI7QUFDSDtBQUNKLEdBSkQ7O0FBSmdDLE1BVXhCRCxPQVZ3QixHQVVaUCxLQVZZLENBVXhCTyxPQVZ3QjtBQVloQyxTQUNJO0FBRUksVUFBQyxnRUFBRDtBQUNJLGVBQVMsRUFBRU4sT0FBTyxDQUFDWCxNQUR2QjtBQUVJLGFBQU8sRUFBRVksWUFGYjtBQUdJLG1CQUFhLEVBQUUsSUFIbkI7QUFJSSxXQUFLLEVBQUU7QUFBQ0wsdUJBQWUsRUFBRTtBQUFsQixPQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FNSSxNQUFDLDhEQUFEO0FBQU0sZUFBUyxNQUFmO0FBQWdCLGVBQVMsRUFBRVksNkRBQU0sQ0FBQ0MsTUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsOERBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixDQURKLEVBSUksTUFBQyw4REFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxFQUFmO0FBQW1CLFdBQUssRUFBRTtBQUFDQyxpQkFBUyxFQUFDO0FBQVgsT0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBSkosQ0FOSixDQUhSLENBbUJJOztBQW5CSjtBQXFCSCxDQWpDTTs7R0FBTVosUztVQUVPWCxTOzs7S0FGUFcsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9Xb3JrL0Fnb2RhLWRlc2lnbi4yNTA1MWVjYjFjNzg1ZWUwMDFjYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IEFycm93RG93bndhcmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0Rvd253YXJkJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCB7QW5pbWF0ZWR9IGZyb20gXCJyZWFjdC1hbmltYXRlZC1jc3NcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvUHVibGljLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgIGJ1dHRvbjoge1xyXG4gICAgZm9udEZhbWlseTogJ1JvYm90bycsXHJcbiAgICBmb250U2l6ZTogJzEuMXJlbScsXHJcbiAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICBsaW5lSGVpZ2h0OiAnMS4xcmVtJyxcclxuICAgIGxldHRlclNwYWNpbmc6ICcwLjA1cmVtJyxcclxuICAgIGNvbG9yOiAnIzhGOEY4RicsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgIGNvbG9yOicjMUYxRjFGJyAgICAgICAgXHJcbiAgICB9XHJcbiAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgTGVhcm5Nb3JlID0gKHByb3BzKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVBbmNob3IgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYod2luZG93ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHt0b3A6IHNjcm9sbFksIGJlaGF2aW9yOiAnc21vb3RoJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgc2Nyb2xsWSB9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICAvLyA8QW5pbWF0ZWQgYW5pbWF0aW9uSW49XCJib3VuY2VcIiBpc1Zpc2libGU9e3RydWV9PlxyXG5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFuY2hvcn1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5ib3VuY2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TGVhcm4gTW9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7bWFyZ2luVG9wOicwLjVyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd0Rvd253YXJkSWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPiBcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgIC8vIDwvQW5pbWF0ZWQ+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==