webpackHotUpdate_N_E("pages/Test",{

/***/ "./component/Public/Carousel.js":
/*!**************************************!*\
  !*** ./component/Public/Carousel.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ArrowBackIos */ \"./node_modules/@material-ui/icons/ArrowBackIos.js\");\n/* harmony import */ var _material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ArrowForwardIos */ \"./node_modules/@material-ui/icons/ArrowForwardIos.js\");\n/* harmony import */ var _material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/wangweian/Desktop/saliejung-portfolio/component/Public/Carousel.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nvar Carousel = function Carousel(props) {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      count = _React$useState2[0],\n      setCount = _React$useState2[1];\n\n  var imgsrc = props.imgsrc,\n      rotateBy = props.rotateBy,\n      width = props.width,\n      height = props.height,\n      borderRadius = props.borderRadius;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var timer = setInterval(function () {\n      setCount(function (count) {\n        return count + 1;\n      });\n    }, 1000);\n    return function () {\n      return clearInterval(timer);\n    };\n  }, []);\n\n  var handleBack = function handleBack() {\n    setCount(function (count) {\n      return count - rotateBy;\n    });\n  };\n\n  var handleNext = function handleNext() {\n    setCount(function (count) {\n      return count + rotateBy;\n    });\n  };\n\n  var list = [];\n\n  for (var i = 0; i <= imgsrc.length - 1; i++) {\n    list.push(__jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 13\n      }\n    }, parseInt(count / rotateBy) % imgsrc.length === i ? __jsx(\"div\", {\n      style: {\n        width: width,\n        height: height,\n        borderRadius: borderRadius\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 29\n      }\n    }, __jsx(\"img\", {\n      src: imgsrc[i],\n      style: {\n        margin: '0 auto',\n        width: '100%',\n        height: '100%'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 33\n      }\n    })) : ''));\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    container: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    variant: \"outlined\",\n    onClick: handleBack,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 21\n    }\n  }, __jsx(_material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 25\n    }\n  })), list, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    disableFocusRipple: \"true\",\n    onClick: handleNext,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 21\n    }\n  }, __jsx(_material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 25\n    }\n  }))));\n};\n\n_s(Carousel, \"/xL7qdScToREtqzbt5GZ1kHtYjQ=\");\n\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1B1YmxpYy9DYXJvdXNlbC5qcz80ZDhmIl0sIm5hbWVzIjpbIkNhcm91c2VsIiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwiY291bnQiLCJzZXRDb3VudCIsImltZ3NyYyIsInJvdGF0ZUJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJ1c2VFZmZlY3QiLCJ0aW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImhhbmRsZUJhY2siLCJoYW5kbGVOZXh0IiwibGlzdCIsImkiLCJsZW5ndGgiLCJwdXNoIiwicGFyc2VJbnQiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSx3QkFFRUMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FGRjtBQUFBO0FBQUEsTUFFakJDLEtBRmlCO0FBQUEsTUFFVkMsUUFGVTs7QUFBQSxNQUtwQkMsTUFMb0IsR0FVcEJMLEtBVm9CLENBS3BCSyxNQUxvQjtBQUFBLE1BTXBCQyxRQU5vQixHQVVwQk4sS0FWb0IsQ0FNcEJNLFFBTm9CO0FBQUEsTUFPcEJDLEtBUG9CLEdBVXBCUCxLQVZvQixDQU9wQk8sS0FQb0I7QUFBQSxNQVFwQkMsTUFSb0IsR0FVcEJSLEtBVm9CLENBUXBCUSxNQVJvQjtBQUFBLE1BU3BCQyxZQVRvQixHQVVwQlQsS0FWb0IsQ0FTcEJTLFlBVG9CO0FBWXhCQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxLQUFLLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBQzVCUixjQUFRLENBQUMsVUFBQUQsS0FBSztBQUFBLGVBQUlBLEtBQUssR0FBRyxDQUFaO0FBQUEsT0FBTixDQUFSO0FBQ0gsS0FGd0IsRUFFdEIsSUFGc0IsQ0FBekI7QUFHQSxXQUFPO0FBQUEsYUFBTVUsYUFBYSxDQUFDRixLQUFELENBQW5CO0FBQUEsS0FBUDtBQUNILEdBTFEsRUFLTixFQUxNLENBQVQ7O0FBT0EsTUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQlYsWUFBUSxDQUFDLFVBQUFELEtBQUs7QUFBQSxhQUFJQSxLQUFLLEdBQUdHLFFBQVo7QUFBQSxLQUFOLENBQVI7QUFDSCxHQUZEOztBQUlBLE1BQU1TLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckJYLFlBQVEsQ0FBQyxVQUFBRCxLQUFLO0FBQUEsYUFBSUEsS0FBSyxHQUFHRyxRQUFaO0FBQUEsS0FBTixDQUFSO0FBQ0gsR0FGRDs7QUFJQSxNQUFNVSxJQUFJLEdBQUcsRUFBYjs7QUFFQSxPQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsSUFBSVosTUFBTSxDQUFDYSxNQUFQLEdBQWdCLENBQXBDLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTRDO0FBQ3hDRCxRQUFJLENBQUNHLElBQUwsQ0FDSSxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRWFDLFFBQVEsQ0FBRWpCLEtBQUssR0FBR0csUUFBVixDQUFSLEdBQThCRCxNQUFNLENBQUNhLE1BQXJDLEtBQWdERCxDQUFoRCxHQUNHO0FBQUssV0FBSyxFQUFFO0FBQUNWLGFBQUssRUFBQ0EsS0FBUDtBQUFjQyxjQUFNLEVBQUNBLE1BQXJCO0FBQTZCQyxvQkFBWSxFQUFDQTtBQUExQyxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLFNBQUcsRUFBRUosTUFBTSxDQUFDWSxDQUFELENBQWhCO0FBQXFCLFdBQUssRUFBRTtBQUFDSSxjQUFNLEVBQUUsUUFBVDtBQUFtQmQsYUFBSyxFQUFDLE1BQXpCO0FBQWlDQyxjQUFNLEVBQUM7QUFBeEMsT0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBREgsR0FJQSxFQU5iLENBREo7QUFXSDs7QUFFRCxTQUNJLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSSxNQUFDLDhEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUSxNQUFDLGdFQUFEO0FBQVEsV0FBTyxFQUFDLFVBQWhCO0FBQTJCLFdBQU8sRUFBRU0sVUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBRlIsRUFPU0UsSUFQVCxFQVVRLE1BQUMsZ0VBQUQ7QUFBUSxzQkFBa0IsRUFBQyxNQUEzQjtBQUFrQyxXQUFPLEVBQUVELFVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQVZSLENBRkosQ0FESjtBQXFCSCxDQWhFRDs7R0FBTWhCLFE7O0tBQUFBLFE7QUFrRVNBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50L1B1YmxpYy9DYXJvdXNlbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBBcnJvd0JhY2tJb3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2tJb3MnO1xuaW1wb3J0IEFycm93Rm9yd2FyZElvc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93Rm9yd2FyZElvcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5cbmNvbnN0IENhcm91c2VsID0gKHByb3BzKSA9PiB7XG4gICAgXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcblxuICAgIGNvbnN0IHtcbiAgICAgICAgaW1nc3JjLFxuICAgICAgICByb3RhdGVCeSxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgYm9yZGVyUmFkaXVzXG4gICAgfSA9IHByb3BzO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRDb3VudChjb3VudCA9PiBjb3VudCArIDEpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZUJhY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldENvdW50KGNvdW50ID0+IGNvdW50IC0gcm90YXRlQnkpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgICAgIHNldENvdW50KGNvdW50ID0+IGNvdW50ICsgcm90YXRlQnkpO1xuICAgIH1cblxuICAgIGNvbnN0IGxpc3QgPSBbXTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gaW1nc3JjLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICBsaXN0LnB1c2goXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUludCggY291bnQgLyByb3RhdGVCeSkgJSBpbWdzcmMubGVuZ3RoID09PSBpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6d2lkdGgsIGhlaWdodDpoZWlnaHQsIGJvcmRlclJhZGl1czpib3JkZXJSYWRpdXN9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ3NyY1tpXX0gc3R5bGU9e3ttYXJnaW46ICcwIGF1dG8nLCB3aWR0aDonMTAwJScsIGhlaWdodDonMTAwJSd9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA6Jyd9XG4gICAgICAgIFxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICBcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICB7LyogPEdyaWQgeHM9ezEyfSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PiAqL31cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdvdXRsaW5lZCcgb25DbGljaz17aGFuZGxlQmFja30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dCYWNrSW9zSWNvbi8+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIHsvKiA8L0dyaWQ+ICovfVxuICAgICAgICAgICAgICAgIHsvKiA8R3JpZCB4cz17Nn0+ICovfVxuICAgICAgICAgICAgICAgICAgICB7bGlzdH1cbiAgICAgICAgICAgICAgICB7LyogPC9HcmlkPiAqL31cbiAgICAgICAgICAgICAgICB7LyogPEdyaWQgeHM9ezN9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+ICovfVxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVGb2N1c1JpcHBsZT0ndHJ1ZScgb25DbGljaz17aGFuZGxlTmV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dGb3J3YXJkSW9zSWNvbi8+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIHsvKiA8L0dyaWQ+ICovfVxuICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/Public/Carousel.js\n");

/***/ })

})