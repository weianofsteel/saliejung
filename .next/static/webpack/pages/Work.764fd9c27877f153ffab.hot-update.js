webpackHotUpdate_N_E("pages/Work",{

/***/ "./component/Work/Showcase.js":
/*!************************************!*\
  !*** ./component/Work/Showcase.js ***!
  \************************************/
/*! exports provided: Showcase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Showcase\", function() { return Showcase; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/Work.module.css */ \"./css/Work.module.css\");\n/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_Work_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_agoda_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/agoda-logo.png */ \"./public/agoda-logo.png\");\n/* harmony import */ var _public_agoda_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_agoda_logo_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Link */ \"./node_modules/@material-ui/core/esm/Link/index.js\");\n/* harmony import */ var _public_work_work07_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/work/work07.png */ \"./public/work/work07.png\");\n/* harmony import */ var _public_work_work07_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_work_work07_png__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_showcase_showcase01_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/showcase/showcase01.png */ \"./public/showcase/showcase01.png\");\n/* harmony import */ var _public_showcase_showcase01_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_showcase_showcase01_png__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/wangweian/Desktop/saliejung-portfolio/component/Work/Showcase.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__[\"makeStyles\"])({\n  imgBox: {\n    backgroundColor: '#F5F5F5',\n    height: '30rem',\n    width: '100%',\n    overflow: 'hidden'\n  },\n  imgBoxOnHover: {\n    backgroundColor: '#1F1F1F',\n    opacity: '90%',\n    height: '30rem',\n    width: '100%',\n    overflow: 'hidden'\n  },\n  img1: {\n    opacity: '10%'\n  }\n});\nvar Showcase = function Showcase() {\n  _s();\n\n  var classes = useStyles();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      box1 = _React$useState2[0],\n      setBox1 = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      box2 = _React$useState4[0],\n      setBox2 = _React$useState4[1];\n\n  var handleBox1On = function handleBox1On() {\n    setBox1(false);\n  };\n\n  var handleBox2On = function handleBox2On() {\n    setBox2(false);\n  };\n\n  var handleMouseLeave = function handleMouseLeave() {\n    setBox1(true);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    container: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    item: true,\n    xs: 5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 17\n    }\n  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    href: \"/\",\n    underline: \"none\",\n    style: {\n      textAlign: 'center'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: box1 === true ? classes.imgBox : classes.imgBoxOnHover,\n    onMouseEnter: handleBox1On,\n    onMouseLeave: handleMouseLeave,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 25\n    }\n  }, __jsx(\"img\", {\n    src: _public_agoda_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,\n    className: box1 === true ? '' : classes.img1,\n    style: {\n      marginTop: '10rem'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 29\n    }\n  }), box1 === true ? '' : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 33\n    }\n  }, __jsx(\"p\", {\n    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.titleOnHover,\n    style: {\n      marginTop: '-16rem'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 37\n    }\n  }, \"2019/20 \\u2022 Agoda Design\"), __jsx(\"p\", {\n    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title2OnHover,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 37\n    }\n  }, \"An exciting adventure in Bangkok and travel industry\"))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    item: true,\n    xs: 7,\n    style: {\n      paddingLeft: \"8px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 17\n    }\n  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    href: \"/\",\n    underline: \"none\",\n    style: {\n      textAlign: 'center'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: box2 === true ? classes.imgBox : classes.imgBoxOnHover,\n    onMouseEnter: handleBox2On,\n    onMouseLeave: handleMouseLeave,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 25\n    }\n  }, __jsx(\"img\", {\n    src: _public_showcase_showcase01_png__WEBPACK_IMPORTED_MODULE_7___default.a,\n    className: box2 === true ? '' : classes.img1,\n    style: {\n      marginTop: '10rem'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 29\n    }\n  }), box2 === true ? '' : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 33\n    }\n  }, __jsx(\"p\", {\n    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.titleOnHover,\n    style: {\n      marginTop: '-28rem'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 37\n    }\n  }, \"2020 \\u2022 Agoda Flights \\u2022 App Design\"), __jsx(\"p\", {\n    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title2OnHover,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 37\n    }\n  }, \"Complete your journey with seat selection\")))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    container: true,\n    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.showcaseBlock,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    item: true,\n    xs: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.showcaseBox,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 21\n    }\n  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    item: true,\n    xs: 6,\n    style: {\n      paddingLeft: \"8px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.showcaseBox,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 21\n    }\n  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    container: true,\n    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.showcaseBlock,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    item: true,\n    xs: 7,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.showcaseBox,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 21\n    }\n  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    item: true,\n    xs: 5,\n    style: {\n      paddingLeft: \"8px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.showcaseBox,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 21\n    }\n  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    container: true,\n    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.showcaseBlock,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    item: true,\n    xs: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.showcaseBox,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: _public_work_work07_png__WEBPACK_IMPORTED_MODULE_6___default.a,\n    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.img,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 25\n    }\n  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    item: true,\n    xs: 6,\n    style: {\n      paddingLeft: \"8px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.showcaseBox,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 21\n    }\n  }))));\n};\n\n_s(Showcase, \"V6pPLAaM9MJUrfqUJ6psw4kyjlc=\", false, function () {\n  return [useStyles];\n});\n\n_c = Showcase;\n\nvar _c;\n\n$RefreshReg$(_c, \"Showcase\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1dvcmsvU2hvd2Nhc2UuanM/ZmI3NCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiaW1nQm94IiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0Iiwid2lkdGgiLCJvdmVyZmxvdyIsImltZ0JveE9uSG92ZXIiLCJvcGFjaXR5IiwiaW1nMSIsIlNob3djYXNlIiwiY2xhc3NlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJib3gxIiwic2V0Qm94MSIsImJveDIiLCJzZXRCb3gyIiwiaGFuZGxlQm94MU9uIiwiaGFuZGxlQm94Mk9uIiwiaGFuZGxlTW91c2VMZWF2ZSIsInRleHRBbGlnbiIsImFnb2RhIiwibWFyZ2luVG9wIiwic3R5bGVzIiwidGl0bGVPbkhvdmVyIiwidGl0bGUyT25Ib3ZlciIsInBhZGRpbmdMZWZ0Iiwic2hvd2Nhc2UwMSIsInNob3djYXNlQmxvY2siLCJzaG93Y2FzZUJveCIsIndvcmswNyIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQ3pCQyxRQUFNLEVBQUU7QUFDSkMsbUJBQWUsRUFBRSxTQURiO0FBRUpDLFVBQU0sRUFBRSxPQUZKO0FBR0pDLFNBQUssRUFBQyxNQUhGO0FBSUpDLFlBQVEsRUFBQztBQUpMLEdBRGlCO0FBT3pCQyxlQUFhLEVBQUU7QUFDWEosbUJBQWUsRUFBQyxTQURMO0FBRVhLLFdBQU8sRUFBQyxLQUZHO0FBR1hKLFVBQU0sRUFBRSxPQUhHO0FBSVhDLFNBQUssRUFBQyxNQUpLO0FBS1hDLFlBQVEsRUFBQztBQUxFLEdBUFU7QUFjekJHLE1BQUksRUFBRTtBQUNGRCxXQUFPLEVBQUM7QUFETjtBQWRtQixDQUFELENBQTVCO0FBbUJPLElBQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUVDLDhEQUFWO0FBQWtCLGFBQVMsRUFBRVAsMkRBQU0sQ0FBQ1EsR0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosQ0FESixFQU1JLE1BQUMsOERBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsQ0FBZjtBQUFrQixTQUFLLEVBQUU7QUFBQ0wsaUJBQVcsRUFBQztBQUFiLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUgsMkRBQU0sQ0FBQ00sV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBTkosQ0F6REosQ0FESjtBQXVFSCxDQTVGTTs7R0FBTXBCLFE7VUFFT1YsUzs7O0tBRlBVLFEiLCJmaWxlIjoiLi9jb21wb25lbnQvV29yay9TaG93Y2FzZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1dvcmsubW9kdWxlLmNzcyc7XG5pbXBvcnQgYWdvZGEgZnJvbSAnLi4vLi4vcHVibGljL2Fnb2RhLWxvZ28ucG5nJztcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuaW1wb3J0IHdvcmswNyBmcm9tICcuLi8uLi9wdWJsaWMvd29yay93b3JrMDcucG5nJztcbmltcG9ydCBzaG93Y2FzZTAxIGZyb20gJy4uLy4uL3B1YmxpYy9zaG93Y2FzZS9zaG93Y2FzZTAxLnBuZyc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gICAgaW1nQm94OiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGNUY1RjUnLFxuICAgICAgICBoZWlnaHQ6ICczMHJlbScsXG4gICAgICAgIHdpZHRoOicxMDAlJyxcbiAgICAgICAgb3ZlcmZsb3c6J2hpZGRlbidcbiAgICB9LFxuICAgIGltZ0JveE9uSG92ZXI6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOicjMUYxRjFGJyxcbiAgICAgICAgb3BhY2l0eTonOTAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMzByZW0nLFxuICAgICAgICB3aWR0aDonMTAwJScsXG4gICAgICAgIG92ZXJmbG93OidoaWRkZW4nXG4gICAgfSxcbiAgICBpbWcxOiB7XG4gICAgICAgIG9wYWNpdHk6JzEwJSdcbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3QgU2hvd2Nhc2UgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgICBjb25zdCBbIGJveDEsIHNldEJveDFdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG5cbiAgICBjb25zdCBbIGJveDIsIHNldEJveDJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG5cblxuICAgIGNvbnN0IGhhbmRsZUJveDFPbiA9ICgpID0+IHtcbiAgICAgICAgc2V0Qm94MShmYWxzZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQm94Mk9uID0gKCkgPT4ge1xuICAgICAgICBzZXRCb3gyKGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgICAgICBzZXRCb3gxKHRydWUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4oXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezV9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIHVuZGVybGluZT0nbm9uZScgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtib3gxPT09dHJ1ZT9jbGFzc2VzLmltZ0JveDpjbGFzc2VzLmltZ0JveE9uSG92ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVCb3gxT259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthZ29kYX0gY2xhc3NOYW1lPXtib3gxPT09dHJ1ZT8nJzpjbGFzc2VzLmltZzF9IHN0eWxlPXt7bWFyZ2luVG9wOicxMHJlbSd9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2JveDE9PT10cnVlPycnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZU9uSG92ZXJ9IHN0eWxlPXt7bWFyZ2luVG9wOictMTZyZW0nfX0+MjAxOS8yMCDigKIgQWdvZGEgRGVzaWduPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGUyT25Ib3Zlcn0+QW4gZXhjaXRpbmcgYWR2ZW50dXJlIGluIEJhbmdrb2sgYW5kIHRyYXZlbCBpbmR1c3RyeTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs3fSBzdHlsZT17e3BhZGRpbmdMZWZ0OlwiOHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgdW5kZXJsaW5lPSdub25lJyBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2JveDI9PT10cnVlP2NsYXNzZXMuaW1nQm94OmNsYXNzZXMuaW1nQm94T25Ib3Zlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZUJveDJPbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Nob3djYXNlMDF9IGNsYXNzTmFtZT17Ym94Mj09PXRydWU/Jyc6Y2xhc3Nlcy5pbWcxfSBzdHlsZT17e21hcmdpblRvcDonMTByZW0nfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib3gyPT09dHJ1ZT8nJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVPbkhvdmVyfSBzdHlsZT17e21hcmdpblRvcDonLTI4cmVtJ319PjIwMjAg4oCiIEFnb2RhIEZsaWdodHMg4oCiIEFwcCBEZXNpZ248L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZTJPbkhvdmVyfT5Db21wbGV0ZSB5b3VyIGpvdXJuZXkgd2l0aCBzZWF0IHNlbGVjdGlvbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgIFxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuc2hvd2Nhc2VCbG9ja30+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hvd2Nhc2VCb3h9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzdHlsZT17e3BhZGRpbmdMZWZ0OlwiOHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaG93Y2FzZUJveH0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9HcmlkPiAgICAgXG4gICAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5zaG93Y2FzZUJsb2NrfT5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs3fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaG93Y2FzZUJveH0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezV9IHN0eWxlPXt7cGFkZGluZ0xlZnQ6XCI4cHhcIn19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNob3djYXNlQm94fT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+ICAgICBcbiAgICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLnNob3djYXNlQmxvY2t9PlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNob3djYXNlQm94fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt3b3JrMDd9IGNsYXNzTmFtZT17c3R5bGVzLmltZ30vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc3R5bGU9e3twYWRkaW5nTGVmdDpcIjhweFwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hvd2Nhc2VCb3h9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgIFxuICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/Work/Showcase.js\n");

/***/ })

})