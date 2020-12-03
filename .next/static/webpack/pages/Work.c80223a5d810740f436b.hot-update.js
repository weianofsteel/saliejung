webpackHotUpdate_N_E("pages/Work",{

/***/ "./component/Work/Showcase.js":
/*!************************************!*\
  !*** ./component/Work/Showcase.js ***!
  \************************************/
/*! exports provided: Showcase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Showcase\", function() { return Showcase; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/Work.module.css */ \"./css/Work.module.css\");\n/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_Work_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_agoda_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/agoda-logo.png */ \"./public/agoda-logo.png\");\n/* harmony import */ var _public_agoda_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_agoda_logo_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Link */ \"./node_modules/@material-ui/core/esm/Link/index.js\");\n/* harmony import */ var _public_work_work07_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/work/work07.png */ \"./public/work/work07.png\");\n/* harmony import */ var _public_work_work07_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_work_work07_png__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_showcase_showcase01_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/showcase/showcase01.png */ \"./public/showcase/showcase01.png\");\n/* harmony import */ var _public_showcase_showcase01_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_showcase_showcase01_png__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/wangweian/Desktop/saliejung-portfolio/component/Work/Showcase.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__[\"makeStyles\"])({\n  imgBox: {\n    backgroundColor: '#F5F5F5',\n    height: '30rem',\n    width: '100%',\n    overflow: 'hidden'\n  },\n  imgBoxOnHover: {\n    backgroundColor: '#1F1F1F',\n    opacity: '90%',\n    height: '30rem',\n    width: '100%',\n    overflow: 'hidden'\n  },\n  img1: {\n    opacity: '10%'\n  }\n});\nvar Showcase = function Showcase() {\n  _s();\n\n  var classes = useStyles();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      box1 = _React$useState2[0],\n      setBox1 = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      box2 = _React$useState4[0],\n      setBox2 = _React$useState4[1];\n\n  var handleBox1On = function handleBox1On() {\n    setBox1(false);\n  };\n\n  var handleBox2On = function handleBox2On() {\n    setBox2(false);\n  };\n\n  var handleMouseLeave = function handleMouseLeave() {\n    setBox1(true);\n    setBox2(true);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    container: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    item: true,\n    xs: 5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 17\n    }\n  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    href: \"/\",\n    underline: \"none\",\n    style: {\n      textAlign: 'center'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: box1 === true ? classes.imgBox : classes.imgBoxOnHover,\n    onMouseEnter: handleBox1On,\n    onMouseLeave: handleMouseLeave,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 25\n    }\n  }, __jsx(\"img\", {\n    src: _public_agoda_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,\n    className: box1 === true ? '' : classes.img1,\n    style: {\n      marginTop: '10rem'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 29\n    }\n  }), box1 === true ? '' : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 33\n    }\n  }, __jsx(\"p\", {\n    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.titleOnHover,\n    style: {\n      marginTop: '-16rem'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 37\n    }\n  }, \"2019/20 \\u2022 Agoda Design\"), __jsx(\"p\", {\n    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title2OnHover,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 37\n    }\n  }, \"An exciting adventure in Bangkok and travel industry\"))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    item: true,\n    xs: 7,\n    style: {\n      paddingLeft: \"8px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 17\n    }\n  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    href: \"/\",\n    underline: \"none\",\n    style: {\n      textAlign: 'center'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: box2 === true ? classes.imgBox : classes.imgBoxOnHover,\n    onMouseEnter: handleBox2On,\n    onMouseLeave: handleMouseLeave,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 25\n    }\n  }, __jsx(\"img\", {\n    src: _public_showcase_showcase01_png__WEBPACK_IMPORTED_MODULE_7___default.a,\n    className: box2 === true ? '' : classes.img1,\n    style: {\n      marginTop: '10rem'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 29\n    }\n  }), box2 === true ? '' : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 33\n    }\n  }, __jsx(\"p\", {\n    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.titleOnHover,\n    style: {\n      marginTop: '-28rem'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 37\n    }\n  }, \"2020 \\u2022 Agoda Flights \\u2022 App Design\"), __jsx(\"p\", {\n    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title2OnHover,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 37\n    }\n  }, \"Complete your journey with seat selection\")))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    container: true,\n    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.showcaseBlock,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    item: true,\n    xs: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.showcaseBox,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 21\n    }\n  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    item: true,\n    xs: 6,\n    style: {\n      paddingLeft: \"8px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.showcaseBox,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 21\n    }\n  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    container: true,\n    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.showcaseBlock,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    item: true,\n    xs: 7,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.showcaseBox,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 21\n    }\n  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    item: true,\n    xs: 5,\n    style: {\n      paddingLeft: \"8px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.showcaseBox,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 21\n    }\n  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    container: true,\n    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.showcaseBlock,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    item: true,\n    xs: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.showcaseBox,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: _public_work_work07_png__WEBPACK_IMPORTED_MODULE_6___default.a,\n    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.img,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 25\n    }\n  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    item: true,\n    xs: 6,\n    style: {\n      paddingLeft: \"8px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.showcaseBox,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 21\n    }\n  }))));\n};\n\n_s(Showcase, \"V6pPLAaM9MJUrfqUJ6psw4kyjlc=\", false, function () {\n  return [useStyles];\n});\n\n_c = Showcase;\n\nvar _c;\n\n$RefreshReg$(_c, \"Showcase\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1dvcmsvU2hvd2Nhc2UuanM/ZmI3NCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiaW1nQm94IiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0Iiwid2lkdGgiLCJvdmVyZmxvdyIsImltZ0JveE9uSG92ZXIiLCJvcGFjaXR5IiwiaW1nMSIsIlNob3djYXNlIiwiY2xhc3NlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJib3gxIiwic2V0Qm94MSIsImJveDIiLCJzZXRCb3gyIiwiaGFuZGxlQm94MU9uIiwiaGFuZGxlQm94Mk9uIiwiaGFuZGxlTW91c2VMZWF2ZSIsInRleHRBbGlnbiIsImFnb2RhIiwibWFyZ2luVG9wIiwic3R5bGVzIiwidGl0bGVPbkhvdmVyIiwidGl0bGUyT25Ib3ZlciIsInBhZGRpbmdMZWZ0Iiwic2hvd2Nhc2UwMSIsInNob3djYXNlQmxvY2siLCJzaG93Y2FzZUJveCIsIndvcmswNyIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQ3pCQyxRQUFNLEVBQUU7QUFDSkMsbUJBQWUsRUFBRSxTQURiO0FBRUpDLFVBQU0sRUFBRSxPQUZKO0FBR0pDLFNBQUssRUFBQyxNQUhGO0FBSUpDLFlBQVEsRUFBQztBQUpMLEdBRGlCO0FBT3pCQyxlQUFhLEVBQUU7QUFDWEosbUJBQWUsRUFBQyxTQURMO0FBRVhLLFdBQU8sRUFBQyxLQUZHO0FBR1hKLFVBQU0sRUFBRSxPQUhHO0FBSVhDLFNBQUssRUFBQyxNQUpLO0FBS1hDLFlBQVEsRUFBQztBQUxFLEdBUFU7QUFjekJHLE1BQUksRUFBRTtBQUNGRCxXQUFPLEVBQUM7QUFETjtBQWRtQixDQUFELENBQTVCO0FBbUJPLElBQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFFMUIsTUFBTUMsT0FBTyxHQUFHWCxTQUFTLEVBQXpCOztBQUYwQix3QkFJRFksNENBQUssQ0FBQ0MsUUFBTixDQUFlLElBQWYsQ0FKQztBQUFBO0FBQUEsTUFJbEJDLElBSmtCO0FBQUEsTUFJWkMsT0FKWTs7QUFBQSx5QkFNREgsNENBQUssQ0FBQ0MsUUFBTixDQUFlLElBQWYsQ0FOQztBQUFBO0FBQUEsTUFNbEJHLElBTmtCO0FBQUEsTUFNWkMsT0FOWTs7QUFTMUIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QkgsV0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNILEdBRkQ7O0FBSUEsTUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QkYsV0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNILEdBRkQ7O0FBSUEsTUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzNCTCxXQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0FFLFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDSCxHQUhEOztBQUtBLFNBQ0ksTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJLE1BQUMsOERBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyw4REFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQWUsYUFBUyxFQUFDLE1BQXpCO0FBQWdDLFNBQUssRUFBRTtBQUFDSSxlQUFTLEVBQUM7QUFBWCxLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1E7QUFDSSxhQUFTLEVBQUVQLElBQUksS0FBRyxJQUFQLEdBQVlILE9BQU8sQ0FBQ1QsTUFBcEIsR0FBMkJTLE9BQU8sQ0FBQ0osYUFEbEQ7QUFFSSxnQkFBWSxFQUFFVyxZQUZsQjtBQUdJLGdCQUFZLEVBQUVFLGdCQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0k7QUFBSyxPQUFHLEVBQUVFLDZEQUFWO0FBQWlCLGFBQVMsRUFBRVIsSUFBSSxLQUFHLElBQVAsR0FBWSxFQUFaLEdBQWVILE9BQU8sQ0FBQ0YsSUFBbkQ7QUFBeUQsU0FBSyxFQUFFO0FBQUNjLGVBQVMsRUFBQztBQUFYLEtBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixFQU1LVCxJQUFJLEtBQUcsSUFBUCxHQUFZLEVBQVosR0FDRyxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUVVLDJEQUFNLENBQUNDLFlBQXJCO0FBQW1DLFNBQUssRUFBRTtBQUFDRixlQUFTLEVBQUM7QUFBWCxLQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURKLEVBRUk7QUFBRyxhQUFTLEVBQUVDLDJEQUFNLENBQUNFLGFBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNERBRkosQ0FQUixDQURSLENBREEsQ0FESixFQWtCSSxNQUFDLDhEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLENBQWY7QUFBa0IsU0FBSyxFQUFFO0FBQUNDLGlCQUFXLEVBQUM7QUFBYixLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQWUsYUFBUyxFQUFDLE1BQXpCO0FBQWdDLFNBQUssRUFBRTtBQUFDTixlQUFTLEVBQUM7QUFBWCxLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxhQUFTLEVBQUVMLElBQUksS0FBRyxJQUFQLEdBQVlMLE9BQU8sQ0FBQ1QsTUFBcEIsR0FBMkJTLE9BQU8sQ0FBQ0osYUFEbEQ7QUFFSSxnQkFBWSxFQUFFWSxZQUZsQjtBQUdJLGdCQUFZLEVBQUVDLGdCQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0k7QUFBSyxPQUFHLEVBQUVRLHNFQUFWO0FBQXNCLGFBQVMsRUFBRVosSUFBSSxLQUFHLElBQVAsR0FBWSxFQUFaLEdBQWVMLE9BQU8sQ0FBQ0YsSUFBeEQ7QUFBOEQsU0FBSyxFQUFFO0FBQUNjLGVBQVMsRUFBQztBQUFYLEtBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixFQU1LUCxJQUFJLEtBQUcsSUFBUCxHQUFZLEVBQVosR0FDRyxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUVRLDJEQUFNLENBQUNDLFlBQXJCO0FBQW1DLFNBQUssRUFBRTtBQUFDRixlQUFTLEVBQUM7QUFBWCxLQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1EQURKLEVBRUk7QUFBRyxhQUFTLEVBQUVDLDJEQUFNLENBQUNFLGFBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaURBRkosQ0FQUixDQURKLENBREosQ0FsQkosQ0FGSixFQXVDSSxNQUFDLDhEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLGFBQVMsRUFBRUYsMkRBQU0sQ0FBQ0ssYUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVMLDJEQUFNLENBQUNNLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUksTUFBQyw4REFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxDQUFmO0FBQWtCLFNBQUssRUFBRTtBQUFDSCxpQkFBVyxFQUFDO0FBQWIsS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFSCwyREFBTSxDQUFDTSxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FKSixDQXZDSixFQWdESSxNQUFDLDhEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLGFBQVMsRUFBRU4sMkRBQU0sQ0FBQ0ssYUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVMLDJEQUFNLENBQUNNLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUksTUFBQyw4REFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxDQUFmO0FBQWtCLFNBQUssRUFBRTtBQUFDSCxpQkFBVyxFQUFDO0FBQWIsS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFSCwyREFBTSxDQUFDTSxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FKSixDQWhESixFQXlESSxNQUFDLDhEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLGFBQVMsRUFBRU4sMkRBQU0sQ0FBQ0ssYUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVMLDJEQUFNLENBQUNNLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBRUMsOERBQVY7QUFBa0IsYUFBUyxFQUFFUCwyREFBTSxDQUFDUSxHQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQURKLEVBTUksTUFBQyw4REFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxDQUFmO0FBQWtCLFNBQUssRUFBRTtBQUFDTCxpQkFBVyxFQUFDO0FBQWIsS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFSCwyREFBTSxDQUFDTSxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FOSixDQXpESixDQURKO0FBdUVILENBN0ZNOztHQUFNcEIsUTtVQUVPVixTOzs7S0FGUFUsUSIsImZpbGUiOiIuL2NvbXBvbmVudC9Xb3JrL1Nob3djYXNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvV29yay5tb2R1bGUuY3NzJztcbmltcG9ydCBhZ29kYSBmcm9tICcuLi8uLi9wdWJsaWMvYWdvZGEtbG9nby5wbmcnO1xuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XG5pbXBvcnQgd29yazA3IGZyb20gJy4uLy4uL3B1YmxpYy93b3JrL3dvcmswNy5wbmcnO1xuaW1wb3J0IHNob3djYXNlMDEgZnJvbSAnLi4vLi4vcHVibGljL3Nob3djYXNlL3Nob3djYXNlMDEucG5nJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgICBpbWdCb3g6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y1RjVGNScsXG4gICAgICAgIGhlaWdodDogJzMwcmVtJyxcbiAgICAgICAgd2lkdGg6JzEwMCUnLFxuICAgICAgICBvdmVyZmxvdzonaGlkZGVuJ1xuICAgIH0sXG4gICAgaW1nQm94T25Ib3Zlcjoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6JyMxRjFGMUYnLFxuICAgICAgICBvcGFjaXR5Oic5MCUnLFxuICAgICAgICBoZWlnaHQ6ICczMHJlbScsXG4gICAgICAgIHdpZHRoOicxMDAlJyxcbiAgICAgICAgb3ZlcmZsb3c6J2hpZGRlbidcbiAgICB9LFxuICAgIGltZzE6IHtcbiAgICAgICAgb3BhY2l0eTonMTAlJ1xuICAgIH1cbn0pXG5cbmV4cG9ydCBjb25zdCBTaG93Y2FzZSA9ICgpID0+IHtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICAgIGNvbnN0IFsgYm94MSwgc2V0Qm94MV0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcblxuICAgIGNvbnN0IFsgYm94Miwgc2V0Qm94Ml0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcblxuXG4gICAgY29uc3QgaGFuZGxlQm94MU9uID0gKCkgPT4ge1xuICAgICAgICBzZXRCb3gxKGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVCb3gyT24gPSAoKSA9PiB7XG4gICAgICAgIHNldEJveDIoZmFsc2UpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgICAgIHNldEJveDEodHJ1ZSk7XG4gICAgICAgIHNldEJveDIodHJ1ZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybihcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgdW5kZXJsaW5lPSdub25lJyBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2JveDE9PT10cnVlP2NsYXNzZXMuaW1nQm94OmNsYXNzZXMuaW1nQm94T25Ib3Zlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZUJveDFPbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Fnb2RhfSBjbGFzc05hbWU9e2JveDE9PT10cnVlPycnOmNsYXNzZXMuaW1nMX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzEwcmVtJ319Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym94MT09PXRydWU/Jyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlT25Ib3Zlcn0gc3R5bGU9e3ttYXJnaW5Ub3A6Jy0xNnJlbSd9fT4yMDE5LzIwIOKAoiBBZ29kYSBEZXNpZ248L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZTJPbkhvdmVyfT5BbiBleGNpdGluZyBhZHZlbnR1cmUgaW4gQmFuZ2tvayBhbmQgdHJhdmVsIGluZHVzdHJ5PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezd9IHN0eWxlPXt7cGFkZGluZ0xlZnQ6XCI4cHhcIn19PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJyB1bmRlcmxpbmU9J25vbmUnIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Ym94Mj09PXRydWU/Y2xhc3Nlcy5pbWdCb3g6Y2xhc3Nlcy5pbWdCb3hPbkhvdmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlQm94Mk9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2hvd2Nhc2UwMX0gY2xhc3NOYW1lPXtib3gyPT09dHJ1ZT8nJzpjbGFzc2VzLmltZzF9IHN0eWxlPXt7bWFyZ2luVG9wOicxMHJlbSd9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2JveDI9PT10cnVlPycnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZU9uSG92ZXJ9IHN0eWxlPXt7bWFyZ2luVG9wOictMjhyZW0nfX0+MjAyMCDigKIgQWdvZGEgRmxpZ2h0cyDigKIgQXBwIERlc2lnbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlMk9uSG92ZXJ9PkNvbXBsZXRlIHlvdXIgam91cm5leSB3aXRoIHNlYXQgc2VsZWN0aW9uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9HcmlkPiAgICAgXG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5zaG93Y2FzZUJsb2NrfT5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaG93Y2FzZUJveH0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IHN0eWxlPXt7cGFkZGluZ0xlZnQ6XCI4cHhcIn19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNob3djYXNlQm94fT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+ICAgICBcbiAgICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLnNob3djYXNlQmxvY2t9PlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezd9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNob3djYXNlQm94fT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NX0gc3R5bGU9e3twYWRkaW5nTGVmdDpcIjhweFwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hvd2Nhc2VCb3h9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgIFxuICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuc2hvd2Nhc2VCbG9ja30+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hvd2Nhc2VCb3h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3dvcmswN30gY2xhc3NOYW1lPXtzdHlsZXMuaW1nfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzdHlsZT17e3BhZGRpbmdMZWZ0OlwiOHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaG93Y2FzZUJveH0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9HcmlkPiAgICAgXG4gICAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/Work/Showcase.js\n");

/***/ })

})