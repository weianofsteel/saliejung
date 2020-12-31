webpackHotUpdate_N_E("pages/Work/Agoda-flights",{

/***/ "./component/Work/Secure.js":
/*!**********************************!*\
  !*** ./component/Work/Secure.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../css/Work.module.css */ \"./css/Work.module.css\");\n/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_Work_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ \"./node_modules/@material-ui/core/esm/TextField/index.js\");\n/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ \"./node_modules/@material-ui/core/esm/InputAdornment/index.js\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ \"./node_modules/@material-ui/icons/ArrowForward.js\");\n/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _AgodaFlights_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AgodaFlights.js */ \"./component/Work/AgodaFlights.js\");\n/* harmony import */ var _component_Public_Header_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../component/Public/Header.js */ \"./component/Public/Header.js\");\n/* harmony import */ var _Public_Scrollup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Public/Scrollup */ \"./component/Public/Scrollup.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/wangweian/Desktop/saliejung/component/Work/Secure.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\n\n\nvar Secure = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Secure, _React$Component);\n\n  var _super = _createSuper(Secure);\n\n  function Secure(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Secure);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      password: \"\",\n      errorMessage: \"\",\n      isPass: false\n    };\n    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.setStateByName = _this.setStateByName.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.recursiveReplaceValueByName = _this.recursiveReplaceValueByName.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Secure, [{\n    key: \"handleChange\",\n    value: function handleChange(e, callBack) {\n      var nullValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n      var _e$target = e.target,\n          value = _e$target.value,\n          name = _e$target.name;\n\n      if (typeof callBack !== \"function\") {\n        callBack = function callBack() {};\n      }\n\n      this.setStateByName(name, value !== \"\" ? value : null, callBack);\n    }\n  }, {\n    key: \"setStateByName\",\n    value: function setStateByName(name, value, callBack) {\n      this.setState(function (prevState) {\n        return this.recursiveReplaceValueByName(name, prevState, value);\n      }, callBack);\n    }\n  }, {\n    key: \"recursiveReplaceValueByName\",\n    value: function recursiveReplaceValueByName(name, object, value) {\n      var keysArr = name.replace(/\\[/g, \".\").replace(/\\]/g, \"\").split(\".\");\n      var target = object;\n\n      for (var i = 0; i < keysArr.length; i++) {\n        var key = keysArr[i];\n\n        if (!target.hasOwnProperty(key)) {\n          return object;\n        }\n\n        if (i == keysArr.length - 1) {\n          target[key] = value;\n        }\n\n        target = target[key];\n      }\n\n      return object;\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit() {\n      if (this.state.password == '20180801') {\n        this.setState({\n          password: \"\",\n          isPass: true,\n          errorMessage: \"\"\n        });\n      } else {\n        this.setState({\n          errorMessage: 'Enter Correct Password'\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var handleDrawerOpen = this.props.handleDrawerOpen;\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 13\n        }\n      }, this.state.isPass == false ? __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 21\n        }\n      }, __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 25\n        }\n      }, __jsx(_component_Public_Header_js__WEBPACK_IMPORTED_MODULE_14__[\"Header\"], {\n        handleDrawerOpen: handleDrawerOpen,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 29\n        }\n      })), __jsx(\"div\", {\n        className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.main,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 25\n        }\n      }, __jsx(\"span\", {\n        className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.title,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 29\n        }\n      }, \"Secure area\"), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 29\n        }\n      }), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 29\n        }\n      }), __jsx(\"span\", {\n        className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.description,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 29\n        }\n      }, \"Please ask the password for permission.\"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        container: true,\n        className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.password,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 29\n        }\n      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        item: true,\n        xs: 10,\n        sm: 6,\n        md: 3,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 33\n        }\n      }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        id: \"password\",\n        label: \"Enter password\",\n        variant: \"outlined\",\n        name: \"password\",\n        value: this.state.password,\n        onChange: this.handleChange,\n        onKeyDown: function onKeyDown(e) {\n          if (e.keyCode === 13) {\n            _this2.handleSubmit();\n          }\n        },\n        helperText: this.state.errorMessage,\n        placeholder: \"Enter password\",\n        style: {\n          width: \"100%\"\n        },\n        InputProps: {\n          endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n            __self: this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 123,\n              columnNumber: 45\n            }\n          }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n            onClick: this.handleSubmit,\n            __self: this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 124,\n              columnNumber: 49\n            }\n          }, __jsx(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_12___default.a, {\n            __self: this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 125,\n              columnNumber: 53\n            }\n          })))\n        },\n        InputLabelProps: {\n          shrink: false\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 37\n        }\n      }))))) : \"\", this.state.isPass == true ? __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 141,\n          columnNumber: 21\n        }\n      }, __jsx(\"div\", {\n        className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.header,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 142,\n          columnNumber: 25\n        }\n      }, __jsx(_component_Public_Header_js__WEBPACK_IMPORTED_MODULE_14__[\"Header\"], {\n        handleDrawerOpen: handleDrawerOpen,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 143,\n          columnNumber: 29\n        }\n      })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        container: true,\n        style: {\n          top: '70%',\n          position: 'fixed'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 148,\n          columnNumber: 25\n        }\n      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        item: true,\n        xs: 4,\n        md: 7,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 149,\n          columnNumber: 29\n        }\n      }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        item: true,\n        xs: 5,\n        md: 4,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 150,\n          columnNumber: 29\n        }\n      }, __jsx(_Public_Scrollup__WEBPACK_IMPORTED_MODULE_15__[\"Scrollup\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 151,\n          columnNumber: 33\n        }\n      }))), __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 155,\n          columnNumber: 25\n        }\n      }, __jsx(_AgodaFlights_js__WEBPACK_IMPORTED_MODULE_13__[\"AgodaFlights\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 156,\n          columnNumber: 29\n        }\n      }))) : \"\");\n    }\n  }]);\n\n  return Secure;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Secure);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1dvcmsvU2VjdXJlLmpzPzI5ZjAiXSwibmFtZXMiOlsiU2VjdXJlIiwicHJvcHMiLCJzdGF0ZSIsInBhc3N3b3JkIiwiZXJyb3JNZXNzYWdlIiwiaXNQYXNzIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsInNldFN0YXRlQnlOYW1lIiwicmVjdXJzaXZlUmVwbGFjZVZhbHVlQnlOYW1lIiwiaGFuZGxlU3VibWl0IiwiZSIsImNhbGxCYWNrIiwibnVsbFZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJvYmplY3QiLCJrZXlzQXJyIiwicmVwbGFjZSIsInNwbGl0IiwiaSIsImxlbmd0aCIsImtleSIsImhhc093blByb3BlcnR5IiwiaGFuZGxlRHJhd2VyT3BlbiIsInN0eWxlcyIsIm1haW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwia2V5Q29kZSIsIndpZHRoIiwiZW5kQWRvcm5tZW50Iiwic2hyaW5rIiwiaGVhZGVyIiwidG9wIiwicG9zaXRpb24iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLE07Ozs7O0FBQ0Ysa0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDZCw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxjQUFRLEVBQUUsRUFERDtBQUVUQyxrQkFBWSxFQUFFLEVBRkw7QUFHVEMsWUFBTSxFQUFFO0FBSEMsS0FBYjtBQU1BLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIseUdBQXBCO0FBQ0EsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CRCxJQUFwQix5R0FBdEI7QUFDQSxVQUFLRSwyQkFBTCxHQUFtQyxNQUFLQSwyQkFBTCxDQUFpQ0YsSUFBakMseUdBQW5DO0FBQ0EsVUFBS0csWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCSCxJQUFsQix5R0FBcEI7QUFYYztBQVlqQjs7OztpQ0FFWUksQyxFQUFFQyxRLEVBQXlCO0FBQUEsVUFBaEJDLFNBQWdCLHVFQUFOLElBQU07QUFBQSxzQkFDZEYsQ0FBQyxDQUFDRyxNQURZO0FBQUEsVUFDN0JDLEtBRDZCLGFBQzdCQSxLQUQ2QjtBQUFBLFVBQ3RCQyxJQURzQixhQUN0QkEsSUFEc0I7O0FBRXBDLFVBQUksT0FBT0osUUFBUCxLQUFtQixVQUF2QixFQUFrQztBQUM5QkEsZ0JBQVEsR0FBRyxvQkFBVyxDQUFFLENBQXhCO0FBQ0g7O0FBQ0QsV0FBS0osY0FBTCxDQUFvQlEsSUFBcEIsRUFBMEJELEtBQUssS0FBRyxFQUFSLEdBQVdBLEtBQVgsR0FBaUIsSUFBM0MsRUFBaURILFFBQWpEO0FBQ0g7OzttQ0FFY0ksSSxFQUFNRCxLLEVBQU9ILFEsRUFBVTtBQUNsQyxXQUFLSyxRQUFMLENBQWMsVUFBU0MsU0FBVCxFQUFvQjtBQUM5QixlQUFPLEtBQUtULDJCQUFMLENBQWlDTyxJQUFqQyxFQUF1Q0UsU0FBdkMsRUFBa0RILEtBQWxELENBQVA7QUFDSCxPQUZELEVBRUVILFFBRkY7QUFHSDs7O2dEQUUyQkksSSxFQUFLRyxNLEVBQU9KLEssRUFDeEM7QUFDSSxVQUFJSyxPQUFPLEdBQUdKLElBQUksQ0FBQ0ssT0FBTCxDQUFhLEtBQWIsRUFBbUIsR0FBbkIsRUFBd0JBLE9BQXhCLENBQWdDLEtBQWhDLEVBQXNDLEVBQXRDLEVBQTBDQyxLQUExQyxDQUFnRCxHQUFoRCxDQUFkO0FBRUEsVUFBSVIsTUFBTSxHQUFHSyxNQUFiOztBQUVBLFdBQUssSUFBSUksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsT0FBTyxDQUFDSSxNQUE1QixFQUFvQ0QsQ0FBQyxFQUFyQyxFQUF3QztBQUNwQyxZQUFJRSxHQUFHLEdBQUdMLE9BQU8sQ0FBQ0csQ0FBRCxDQUFqQjs7QUFDQSxZQUFJLENBQUNULE1BQU0sQ0FBQ1ksY0FBUCxDQUFzQkQsR0FBdEIsQ0FBTCxFQUFnQztBQUM1QixpQkFBT04sTUFBUDtBQUNIOztBQUVELFlBQUlJLENBQUMsSUFBSUgsT0FBTyxDQUFDSSxNQUFSLEdBQWlCLENBQTFCLEVBQTZCO0FBQ3pCVixnQkFBTSxDQUFDVyxHQUFELENBQU4sR0FBY1YsS0FBZDtBQUNIOztBQUVERCxjQUFNLEdBQUdBLE1BQU0sQ0FBQ1csR0FBRCxDQUFmO0FBQ0g7O0FBRUQsYUFBT04sTUFBUDtBQUNIOzs7bUNBRWM7QUFDWCxVQUFHLEtBQUtqQixLQUFMLENBQVdDLFFBQVgsSUFBdUIsVUFBMUIsRUFBcUM7QUFDakMsYUFBS2MsUUFBTCxDQUFjO0FBQ1ZkLGtCQUFRLEVBQUUsRUFEQTtBQUVWRSxnQkFBTSxFQUFFLElBRkU7QUFHVkQsc0JBQVksRUFBRTtBQUhKLFNBQWQ7QUFLSCxPQU5ELE1BTU87QUFDSCxhQUFLYSxRQUFMLENBQWM7QUFBQ2Isc0JBQVksRUFBRTtBQUFmLFNBQWQ7QUFDSDtBQUNKOzs7NkJBRU87QUFBQTs7QUFBQSxVQUdBdUIsZ0JBSEEsR0FJQSxLQUFLMUIsS0FKTCxDQUdBMEIsZ0JBSEE7QUFNSixhQUNJLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFSyxLQUFLekIsS0FBTCxDQUFXRyxNQUFYLElBQXFCLEtBQXJCLEdBRUcsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLG1FQUFEO0FBQ0ksd0JBQWdCLEVBQUVzQixnQkFEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBREosRUFPSTtBQUFLLGlCQUFTLEVBQUVDLDJEQUFNLENBQUNDLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFSTtBQUFNLGlCQUFTLEVBQUVELDJEQUFNLENBQUNFLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTEosRUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTkosRUFPSTtBQUFNLGlCQUFTLEVBQUVGLDJEQUFNLENBQUNHLFdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbURBUEosRUFXSSxNQUFDLDhEQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFnQixpQkFBUyxFQUFFSCwyREFBTSxDQUFDekIsUUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsOERBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFtQixVQUFFLEVBQUUsQ0FBdkI7QUFBMEIsVUFBRSxFQUFFLENBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLG1FQUFEO0FBQ0ksVUFBRSxFQUFDLFVBRFA7QUFFSSxhQUFLLEVBQUMsZ0JBRlY7QUFHSSxlQUFPLEVBQUMsVUFIWjtBQUlJLFlBQUksRUFBQyxVQUpUO0FBS0ksYUFBSyxFQUFFLEtBQUtELEtBQUwsQ0FBV0MsUUFMdEI7QUFNSSxnQkFBUSxFQUFFLEtBQUtHLFlBTm5CO0FBT0ksaUJBQVMsRUFBRSxtQkFBQ0ssQ0FBRCxFQUFLO0FBQ1osY0FBR0EsQ0FBQyxDQUFDcUIsT0FBRixLQUFjLEVBQWpCLEVBQW9CO0FBQ2hCLGtCQUFJLENBQUN0QixZQUFMO0FBQ0g7QUFDSixTQVhMO0FBWUksa0JBQVUsRUFBRSxLQUFLUixLQUFMLENBQVdFLFlBWjNCO0FBYUksbUJBQVcsRUFBQyxnQkFiaEI7QUFjSSxhQUFLLEVBQUU7QUFBQzZCLGVBQUssRUFBQztBQUFQLFNBZFg7QUFlSSxrQkFBVSxFQUFFO0FBQ1JDLHNCQUFZLEVBQ1osTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQ0ksTUFBQyxxRUFBRDtBQUFZLG1CQUFPLEVBQUUsS0FBS3hCLFlBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDSSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixDQURKO0FBRlEsU0FmaEI7QUF3QkksdUJBQWUsRUFBRTtBQUFDeUIsZ0JBQU0sRUFBRTtBQUFULFNBeEJyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FESixDQVhKLENBUEosQ0FGSCxHQW9Ec0IsRUF0RDNCLEVBeURLLEtBQUtqQyxLQUFMLENBQVdHLE1BQVgsSUFBcUIsSUFBckIsR0FFRyxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTSxpQkFBUyxFQUFFdUIsMkRBQU0sQ0FBQ1EsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsbUVBQUQ7QUFDSSx3QkFBZ0IsRUFBRVQsZ0JBRHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixDQURKLEVBT0ksTUFBQyw4REFBRDtBQUFNLGlCQUFTLE1BQWY7QUFBZ0IsYUFBSyxFQUFFO0FBQUNVLGFBQUcsRUFBQyxLQUFMO0FBQVdDLGtCQUFRLEVBQUM7QUFBcEIsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsOERBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsQ0FBZjtBQUFrQixVQUFFLEVBQUUsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLEVBRUksTUFBQyw4REFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRSxDQUFmO0FBQWtCLFVBQUUsRUFBRSxDQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FGSixDQVBKLEVBY0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBZEosQ0FGSCxHQXFCQSxFQTlFTCxDQURKO0FBbUZIOzs7O0VBeEpnQkMsNENBQUssQ0FBQ0MsUzs7QUEySlp4QyxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudC9Xb3JrL1NlY3VyZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1dvcmsubW9kdWxlLmNzcyc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgSW5wdXRBZG9ybm1lbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnQnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgQXJyb3dGb3J3YXJkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dGb3J3YXJkJztcbmltcG9ydCB7IEFnb2RhRmxpZ2h0cyB9IGZyb20gJy4vQWdvZGFGbGlnaHRzLmpzJztcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC9QdWJsaWMvSGVhZGVyLmpzJztcbmltcG9ydCB7IFNjcm9sbHVwIH0gZnJvbSAnLi4vUHVibGljL1Njcm9sbHVwJztcblxuY2xhc3MgU2VjdXJlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxuICAgICAgICAgICAgaXNQYXNzOiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNldFN0YXRlQnlOYW1lID0gdGhpcy5zZXRTdGF0ZUJ5TmFtZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlY3Vyc2l2ZVJlcGxhY2VWYWx1ZUJ5TmFtZSA9IHRoaXMucmVjdXJzaXZlUmVwbGFjZVZhbHVlQnlOYW1lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoZSxjYWxsQmFjayxudWxsVmFsdWU9bnVsbCkge1xuICAgICAgICBjb25zdCB7dmFsdWUsIG5hbWV9ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbEJhY2sgIT09XCJmdW5jdGlvblwiKXtcbiAgICAgICAgICAgIGNhbGxCYWNrID0gZnVuY3Rpb24oKSB7fVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGVCeU5hbWUobmFtZSwgdmFsdWUhPT1cIlwiP3ZhbHVlOm51bGwsIGNhbGxCYWNrKTtcbiAgICB9XG5cbiAgICBzZXRTdGF0ZUJ5TmFtZShuYW1lLCB2YWx1ZSwgY2FsbEJhY2spIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbihwcmV2U3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlY3Vyc2l2ZVJlcGxhY2VWYWx1ZUJ5TmFtZShuYW1lLCBwcmV2U3RhdGUsIHZhbHVlKTtcbiAgICAgICAgfSxjYWxsQmFjaylcbiAgICB9XG5cbiAgICByZWN1cnNpdmVSZXBsYWNlVmFsdWVCeU5hbWUobmFtZSxvYmplY3QsdmFsdWUpXG4gICAge1xuICAgICAgICB2YXIga2V5c0FyciA9IG5hbWUucmVwbGFjZSgvXFxbL2csXCIuXCIpLnJlcGxhY2UoL1xcXS9nLFwiXCIpLnNwbGl0KFwiLlwiKTtcblxuICAgICAgICB2YXIgdGFyZ2V0ID0gb2JqZWN0O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5c0Fyci5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsZXQga2V5ID0ga2V5c0FycltpXTtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0Lmhhc093blByb3BlcnR5KGtleSkpe1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpID09IGtleXNBcnIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoKSB7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUucGFzc3dvcmQgPT0gJzIwMTgwODAxJyl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgICAgICAgICAgICBpc1Bhc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlwiXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JNZXNzYWdlOiAnRW50ZXIgQ29ycmVjdCBQYXNzd29yZCd9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBoYW5kbGVEcmF3ZXJPcGVuXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNQYXNzID09IGZhbHNlP1xuXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRHJhd2VyT3Blbj17aGFuZGxlRHJhd2VyT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWN1cmUgYXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgYXNrIHRoZSBwYXNzd29yZCBmb3IgcGVybWlzc2lvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMucGFzc3dvcmR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gc209ezZ9IG1kPXszfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW50ZXIgcGFzc3dvcmRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KGUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGUua2V5Q29kZSA9PT0gMTMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kQWRvcm5tZW50OiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dGb3J3YXJkSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tzaHJpbms6IGZhbHNlfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PjogXCJcIlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzUGFzcyA9PSB0cnVlP1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRHJhd2VyT3Blbj17aGFuZGxlRHJhd2VyT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e3RvcDonNzAlJyxwb3NpdGlvbjonZml4ZWQnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0gbWQ9ezd9PjwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs1fSBtZD17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTY3JvbGx1cC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZ29kYUZsaWdodHMvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA6XCJcIn1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdXJlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/Work/Secure.js\n");

/***/ })

})