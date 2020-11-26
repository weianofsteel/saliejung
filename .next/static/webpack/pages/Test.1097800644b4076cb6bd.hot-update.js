webpackHotUpdate_N_E("pages/Test",{

/***/ "./component/Public/Carousel.js":
/*!**************************************!*\
  !*** ./component/Public/Carousel.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ArrowBackIos */ \"./node_modules/@material-ui/icons/ArrowBackIos.js\");\n/* harmony import */ var _material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/wangweian/Desktop/saliejung-portfolio/component/Public/Carousel.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar Carousel = function Carousel(props) {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      count = _React$useState2[0],\n      setCount = _React$useState2[1];\n\n  var imgsrc = props.imgsrc,\n      rotateBy = props.rotateBy,\n      width = props.width,\n      height = props.height,\n      borderRadius = props.borderRadius;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var timer = setInterval(function () {\n      setCount(function (count) {\n        return count + 1;\n      });\n    }, 1000);\n    return function () {\n      return clearInterval(timer);\n    };\n  }, []);\n  var list = [];\n\n  for (var i = 0; i <= imgsrc.length - 1; i++) {\n    list.push(__jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 13\n      }\n    }, parseInt(count / rotateBy) % imgsrc.length === i ? __jsx(\"div\", {\n      style: {\n        width: width,\n        height: height,\n        borderRadius: borderRadius\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 21\n      }\n    }, __jsx(\"img\", {\n      src: imgsrc[i],\n      style: {\n        width: '100%',\n        height: '100%'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 25\n      }\n    })) : ''));\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    container: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    xs: 3,\n    style: {\n      textAlign: 'center',\n      top: '45%'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 17\n    }\n  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 21\n    }\n  }, __jsx(_material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 25\n    }\n  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    xs: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 17\n    }\n  }, list), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    xs: 3,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  })));\n};\n\n_s(Carousel, \"/xL7qdScToREtqzbt5GZ1kHtYjQ=\");\n\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1B1YmxpYy9DYXJvdXNlbC5qcz80ZDhmIl0sIm5hbWVzIjpbIkNhcm91c2VsIiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwiY291bnQiLCJzZXRDb3VudCIsImltZ3NyYyIsInJvdGF0ZUJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJ1c2VFZmZlY3QiLCJ0aW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImxpc3QiLCJpIiwibGVuZ3RoIiwicHVzaCIsInBhcnNlSW50IiwidGV4dEFsaWduIiwidG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSx3QkFFRUMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FGRjtBQUFBO0FBQUEsTUFFakJDLEtBRmlCO0FBQUEsTUFFVkMsUUFGVTs7QUFBQSxNQUtwQkMsTUFMb0IsR0FVcEJMLEtBVm9CLENBS3BCSyxNQUxvQjtBQUFBLE1BTXBCQyxRQU5vQixHQVVwQk4sS0FWb0IsQ0FNcEJNLFFBTm9CO0FBQUEsTUFPcEJDLEtBUG9CLEdBVXBCUCxLQVZvQixDQU9wQk8sS0FQb0I7QUFBQSxNQVFwQkMsTUFSb0IsR0FVcEJSLEtBVm9CLENBUXBCUSxNQVJvQjtBQUFBLE1BU3BCQyxZQVRvQixHQVVwQlQsS0FWb0IsQ0FTcEJTLFlBVG9CO0FBWXhCQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxLQUFLLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBQzVCUixjQUFRLENBQUMsVUFBQUQsS0FBSztBQUFBLGVBQUlBLEtBQUssR0FBRyxDQUFaO0FBQUEsT0FBTixDQUFSO0FBQ0gsS0FGd0IsRUFFdEIsSUFGc0IsQ0FBekI7QUFHQSxXQUFPO0FBQUEsYUFBTVUsYUFBYSxDQUFDRixLQUFELENBQW5CO0FBQUEsS0FBUDtBQUNILEdBTFEsRUFLTixFQUxNLENBQVQ7QUFPQSxNQUFNRyxJQUFJLEdBQUcsRUFBYjs7QUFFQSxPQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsSUFBSVYsTUFBTSxDQUFDVyxNQUFQLEdBQWdCLENBQXBDLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTRDO0FBQ3hDRCxRQUFJLENBQUNHLElBQUwsQ0FDSSxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tDLFFBQVEsQ0FBRWYsS0FBSyxHQUFHRyxRQUFWLENBQVIsR0FBOEJELE1BQU0sQ0FBQ1csTUFBckMsS0FBZ0RELENBQWhELEdBQ0c7QUFBSyxXQUFLLEVBQUU7QUFBQ1IsYUFBSyxFQUFDQSxLQUFQO0FBQWNDLGNBQU0sRUFBQ0EsTUFBckI7QUFBNkJDLG9CQUFZLEVBQUNBO0FBQTFDLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssU0FBRyxFQUFFSixNQUFNLENBQUNVLENBQUQsQ0FBaEI7QUFBcUIsV0FBSyxFQUFFO0FBQUNSLGFBQUssRUFBQyxNQUFQO0FBQWVDLGNBQU0sRUFBQztBQUF0QixPQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESCxHQUlBLEVBTEwsQ0FESjtBQVNIOztBQUVELFNBQ0ksTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJLE1BQUMsOERBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQ7QUFBTSxNQUFFLEVBQUUsQ0FBVjtBQUFhLFNBQUssRUFBRTtBQUFDVyxlQUFTLEVBQUMsUUFBWDtBQUFvQkMsU0FBRyxFQUFDO0FBQXhCLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBREosRUFNSSxNQUFDLDhEQUFEO0FBQU0sTUFBRSxFQUFFLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLTixJQURMLENBTkosRUFTSSxNQUFDLDhEQUFEO0FBQU0sTUFBRSxFQUFFLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLENBRkosQ0FESjtBQWlCSCxDQWxERDs7R0FBTWYsUTs7S0FBQUEsUTtBQW9EU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnQvUHVibGljL0Nhcm91c2VsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IEFycm93QmFja0lvc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93QmFja0lvcyc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcblxuY29uc3QgQ2Fyb3VzZWwgPSAocHJvcHMpID0+IHtcbiAgICBcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuXG4gICAgY29uc3Qge1xuICAgICAgICBpbWdzcmMsXG4gICAgICAgIHJvdGF0ZUJ5LFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICBib3JkZXJSYWRpdXNcbiAgICB9ID0gcHJvcHM7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHNldENvdW50KGNvdW50ID0+IGNvdW50ICsgMSk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgbGlzdCA9IFtdO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8PSBpbWdzcmMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIGxpc3QucHVzaChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICB7cGFyc2VJbnQoIGNvdW50IC8gcm90YXRlQnkpICUgaW1nc3JjLmxlbmd0aCA9PT0gaSA/XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDp3aWR0aCwgaGVpZ2h0OmhlaWdodCwgYm9yZGVyUmFkaXVzOmJvcmRlclJhZGl1c319PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ3NyY1tpXX0gc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMTAwJSd9fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDonJ31cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgICAgICAgPEdyaWQgeHM9ezN9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInLHRvcDonNDUlJ319PlxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd0JhY2tJb3NJY29uLz5cbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8R3JpZCB4cz17Nn0+XG4gICAgICAgICAgICAgICAgICAgIHtsaXN0fVxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8R3JpZCB4cz17M30+PC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/Public/Carousel.js\n");

/***/ })

})