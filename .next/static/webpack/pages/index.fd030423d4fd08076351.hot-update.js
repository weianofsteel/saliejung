webpackHotUpdate_N_E("pages/index",{

/***/ "./component/Public/Scrollup.js":
/*!**************************************!*\
  !*** ./component/Public/Scrollup.js ***!
  \**************************************/
/*! exports provided: Scrollup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Scrollup\", function() { return Scrollup; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ \"./node_modules/@material-ui/icons/ExpandLess.js\");\n/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/wangweian/Desktop/saliejung-portfolio/component/Public/Scrollup.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar Scrollup = function Scrollup(props) {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      scrollC = _React$useState2[0],\n      setScrollC = _React$useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.addEventListener(\"scroll\", onScroll);\n\n    function onScroll() {\n      setScrollC(window.scrollY);\n    }\n  });\n  var handleScrolltoTop = props.handleScrolltoTop;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    container: true,\n    style: {\n      align: 'right'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    item: true,\n    xs: 11,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }\n  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    item: true,\n    xs: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }, scrollC > 400 ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    onClick: handleScrolltoTop,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 25\n    }\n  }, __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    style: {\n      fontSize: '4rem'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 29\n    }\n  })) : '')));\n};\n\n_s(Scrollup, \"wIEpvNVGdM1FXBaRnJgnaeb7IH4=\");\n\n_c = Scrollup;\n\nvar _c;\n\n$RefreshReg$(_c, \"Scrollup\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1B1YmxpYy9TY3JvbGx1cC5qcz9hMjlmIl0sIm5hbWVzIjpbIlNjcm9sbHVwIiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwic2Nyb2xsQyIsInNldFNjcm9sbEMiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwib25TY3JvbGwiLCJzY3JvbGxZIiwiaGFuZGxlU2Nyb2xsdG9Ub3AiLCJhbGlnbiIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSx3QkFFREMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FGQztBQUFBO0FBQUEsTUFFeEJDLE9BRndCO0FBQUEsTUFFZkMsVUFGZTs7QUFJL0JDLHlEQUFTLENBQUMsWUFBSTtBQUNWQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDQyxRQUFsQzs7QUFDQSxhQUFTQSxRQUFULEdBQW9CO0FBQ2hCSixnQkFBVSxDQUFDRSxNQUFNLENBQUNHLE9BQVIsQ0FBVjtBQUNIO0FBQ0osR0FMUSxDQUFUO0FBSitCLE1BV3ZCQyxpQkFYdUIsR0FXRFYsS0FYQyxDQVd2QlUsaUJBWHVCO0FBYS9CLFNBQ0ksTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsU0FBSyxFQUFFO0FBQUNDLFdBQUssRUFBQztBQUFQLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBR0ksTUFBQyw4REFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFS1IsT0FBTyxHQUFHLEdBQVYsR0FDRyxNQUFDLGdFQUFEO0FBQ0ksV0FBTyxFQUFFTyxpQkFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0ksTUFBQyxvRUFBRDtBQUFnQixTQUFLLEVBQUU7QUFBQ0UsY0FBUSxFQUFDO0FBQVYsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLENBREgsR0FLYSxFQVBsQixDQUhKLENBREosQ0FESjtBQW9CSCxDQWpDTTs7R0FBTWIsUTs7S0FBQUEsUSIsImZpbGUiOiIuL2NvbXBvbmVudC9QdWJsaWMvU2Nyb2xsdXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgRXhwYW5kTGVzc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3MnO1xuXG5leHBvcnQgY29uc3QgU2Nyb2xsdXAgPSAocHJvcHMpID0+IHtcbiAgICBcbiAgICBjb25zdCBbc2Nyb2xsQywgc2V0U2Nyb2xsQ10gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgICBcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xuICAgICAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcbiAgICAgICAgICAgIHNldFNjcm9sbEMod2luZG93LnNjcm9sbFkpO1xuICAgICAgICB9ICBcbiAgICB9KVxuXG4gICAgY29uc3QgeyBoYW5kbGVTY3JvbGx0b1RvcCB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e2FsaWduOidyaWdodCd9fT5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+PC9HcmlkPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAge3Njcm9sbEMgPiA0MDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTY3JvbGx0b1RvcH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXhwYW5kTGVzc0ljb24gc3R5bGU9e3tmb250U2l6ZTonNHJlbSd9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj46JydcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/Public/Scrollup.js\n");

/***/ })

})