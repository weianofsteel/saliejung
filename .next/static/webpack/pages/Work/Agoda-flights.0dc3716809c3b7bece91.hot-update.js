webpackHotUpdate_N_E("pages/Work/Agoda-flights",{

/***/ "./component/Work/Secure.js":
/*!**********************************!*\
  !*** ./component/Work/Secure.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../css/Work.module.css */ \"./css/Work.module.css\");\n/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_Work_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ \"./node_modules/@material-ui/core/esm/TextField/index.js\");\n/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ \"./node_modules/@material-ui/core/esm/InputAdornment/index.js\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ \"./node_modules/@material-ui/icons/ArrowForward.js\");\n/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _AgodaFlights_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AgodaFlights.js */ \"./component/Work/AgodaFlights.js\");\n/* harmony import */ var _component_Public_Header_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../component/Public/Header.js */ \"./component/Public/Header.js\");\n/* harmony import */ var _Public_Scrollup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Public/Scrollup */ \"./component/Public/Scrollup.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/wangweian/Desktop/saliejung/component/Work/Secure.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\n\n\nvar Secure = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Secure, _React$Component);\n\n  var _super = _createSuper(Secure);\n\n  function Secure(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Secure);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      password: \"\",\n      errorMessage: \"\",\n      isPass: false\n    };\n    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.setStateByName = _this.setStateByName.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.recursiveReplaceValueByName = _this.recursiveReplaceValueByName.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Secure, [{\n    key: \"handleChange\",\n    value: function handleChange(e, callBack) {\n      var nullValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n      var _e$target = e.target,\n          value = _e$target.value,\n          name = _e$target.name;\n\n      if (typeof callBack !== \"function\") {\n        callBack = function callBack() {};\n      }\n\n      this.setStateByName(name, value !== \"\" ? value : null, callBack);\n    }\n  }, {\n    key: \"setStateByName\",\n    value: function setStateByName(name, value, callBack) {\n      this.setState(function (prevState) {\n        return this.recursiveReplaceValueByName(name, prevState, value);\n      }, callBack);\n    }\n  }, {\n    key: \"recursiveReplaceValueByName\",\n    value: function recursiveReplaceValueByName(name, object, value) {\n      var keysArr = name.replace(/\\[/g, \".\").replace(/\\]/g, \"\").split(\".\");\n      var target = object;\n\n      for (var i = 0; i < keysArr.length; i++) {\n        var key = keysArr[i];\n\n        if (!target.hasOwnProperty(key)) {\n          return object;\n        }\n\n        if (i == keysArr.length - 1) {\n          target[key] = value;\n        }\n\n        target = target[key];\n      }\n\n      return object;\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit() {\n      if (this.state.password == '20180801') {\n        this.setState({\n          password: \"\",\n          isPass: true,\n          errorMessage: \"\"\n        });\n      } else {\n        this.setState({\n          errorMessage: 'Enter Correct Password'\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var handleDrawerOpen = this.props.handleDrawerOpen;\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 13\n        }\n      }, this.state.isPass == false ? __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 21\n        }\n      }, __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 25\n        }\n      }, __jsx(_component_Public_Header_js__WEBPACK_IMPORTED_MODULE_14__[\"Header\"], {\n        handleDrawerOpen: handleDrawerOpen,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 29\n        }\n      })), __jsx(\"div\", {\n        className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.main,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 25\n        }\n      }, __jsx(\"span\", {\n        className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.title,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 29\n        }\n      }, \"Secure area\"), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 29\n        }\n      }), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 29\n        }\n      }), __jsx(\"span\", {\n        className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.description,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 29\n        }\n      }, \"Please ask the password for permission.\"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        container: true,\n        className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.password,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 29\n        }\n      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        item: true,\n        xs: 10,\n        sm: 6,\n        md: 3,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 33\n        }\n      }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        id: \"password\",\n        variant: \"outlined\",\n        name: \"password\",\n        value: this.state.password,\n        onChange: this.handleChange,\n        onKeyDown: function onKeyDown(e) {\n          if (e.keyCode === 13) {\n            _this2.handleSubmit();\n          }\n        },\n        helperText: this.state.errorMessage,\n        placeholder: \"Enter password\",\n        style: {\n          width: \"100%\"\n        },\n        InputProps: {\n          endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n            __self: this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 122,\n              columnNumber: 45\n            }\n          }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n            onClick: this.handleSubmit,\n            __self: this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 123,\n              columnNumber: 49\n            }\n          }, __jsx(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_12___default.a, {\n            __self: this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 124,\n              columnNumber: 53\n            }\n          })))\n        },\n        InputLabelProps: {\n          shrink: false\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 37\n        }\n      }))))) : \"\", this.state.isPass == true ? __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 140,\n          columnNumber: 21\n        }\n      }, __jsx(\"div\", {\n        className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.header,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 141,\n          columnNumber: 25\n        }\n      }, __jsx(_component_Public_Header_js__WEBPACK_IMPORTED_MODULE_14__[\"Header\"], {\n        handleDrawerOpen: handleDrawerOpen,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 142,\n          columnNumber: 29\n        }\n      })), __jsx(\"div\", {\n        style: {\n          right: '5%',\n          top: '85%',\n          position: 'fixed'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 153,\n          columnNumber: 25\n        }\n      }, __jsx(_Public_Scrollup__WEBPACK_IMPORTED_MODULE_15__[\"Scrollup\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 154,\n          columnNumber: 29\n        }\n      })), __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 157,\n          columnNumber: 25\n        }\n      }, __jsx(_AgodaFlights_js__WEBPACK_IMPORTED_MODULE_13__[\"AgodaFlights\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 158,\n          columnNumber: 29\n        }\n      }))) : \"\");\n    }\n  }]);\n\n  return Secure;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Secure);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1dvcmsvU2VjdXJlLmpzPzI5ZjAiXSwibmFtZXMiOlsiU2VjdXJlIiwicHJvcHMiLCJzdGF0ZSIsInBhc3N3b3JkIiwiZXJyb3JNZXNzYWdlIiwiaXNQYXNzIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsInNldFN0YXRlQnlOYW1lIiwicmVjdXJzaXZlUmVwbGFjZVZhbHVlQnlOYW1lIiwiaGFuZGxlU3VibWl0IiwiZSIsImNhbGxCYWNrIiwibnVsbFZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJvYmplY3QiLCJrZXlzQXJyIiwicmVwbGFjZSIsInNwbGl0IiwiaSIsImxlbmd0aCIsImtleSIsImhhc093blByb3BlcnR5IiwiaGFuZGxlRHJhd2VyT3BlbiIsInN0eWxlcyIsIm1haW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwia2V5Q29kZSIsIndpZHRoIiwiZW5kQWRvcm5tZW50Iiwic2hyaW5rIiwiaGVhZGVyIiwicmlnaHQiLCJ0b3AiLCJwb3NpdGlvbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsTTs7Ozs7QUFDRixrQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLGNBQVEsRUFBRSxFQUREO0FBRVRDLGtCQUFZLEVBQUUsRUFGTDtBQUdUQyxZQUFNLEVBQUU7QUFIQyxLQUFiO0FBTUEsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQix5R0FBcEI7QUFDQSxVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JELElBQXBCLHlHQUF0QjtBQUNBLFVBQUtFLDJCQUFM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O0VBMUpnQkMsNENBQUssQ0FBQ0MsUzs7QUE2Slp6QyxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudC9Xb3JrL1NlY3VyZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1dvcmsubW9kdWxlLmNzcyc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgSW5wdXRBZG9ybm1lbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnQnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgQXJyb3dGb3J3YXJkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dGb3J3YXJkJztcbmltcG9ydCB7IEFnb2RhRmxpZ2h0cyB9IGZyb20gJy4vQWdvZGFGbGlnaHRzLmpzJztcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC9QdWJsaWMvSGVhZGVyLmpzJztcbmltcG9ydCB7IFNjcm9sbHVwIH0gZnJvbSAnLi4vUHVibGljL1Njcm9sbHVwJztcblxuY2xhc3MgU2VjdXJlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxuICAgICAgICAgICAgaXNQYXNzOiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNldFN0YXRlQnlOYW1lID0gdGhpcy5zZXRTdGF0ZUJ5TmFtZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlY3Vyc2l2ZVJlcGxhY2VWYWx1ZUJ5TmFtZSA9IHRoaXMucmVjdXJzaXZlUmVwbGFjZVZhbHVlQnlOYW1lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoZSxjYWxsQmFjayxudWxsVmFsdWU9bnVsbCkge1xuICAgICAgICBjb25zdCB7dmFsdWUsIG5hbWV9ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbEJhY2sgIT09XCJmdW5jdGlvblwiKXtcbiAgICAgICAgICAgIGNhbGxCYWNrID0gZnVuY3Rpb24oKSB7fVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGVCeU5hbWUobmFtZSwgdmFsdWUhPT1cIlwiP3ZhbHVlOm51bGwsIGNhbGxCYWNrKTtcbiAgICB9XG5cbiAgICBzZXRTdGF0ZUJ5TmFtZShuYW1lLCB2YWx1ZSwgY2FsbEJhY2spIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbihwcmV2U3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlY3Vyc2l2ZVJlcGxhY2VWYWx1ZUJ5TmFtZShuYW1lLCBwcmV2U3RhdGUsIHZhbHVlKTtcbiAgICAgICAgfSxjYWxsQmFjaylcbiAgICB9XG5cbiAgICByZWN1cnNpdmVSZXBsYWNlVmFsdWVCeU5hbWUobmFtZSxvYmplY3QsdmFsdWUpXG4gICAge1xuICAgICAgICB2YXIga2V5c0FyciA9IG5hbWUucmVwbGFjZSgvXFxbL2csXCIuXCIpLnJlcGxhY2UoL1xcXS9nLFwiXCIpLnNwbGl0KFwiLlwiKTtcblxuICAgICAgICB2YXIgdGFyZ2V0ID0gb2JqZWN0O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5c0Fyci5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsZXQga2V5ID0ga2V5c0FycltpXTtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0Lmhhc093blByb3BlcnR5KGtleSkpe1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpID09IGtleXNBcnIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoKSB7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUucGFzc3dvcmQgPT0gJzIwMTgwODAxJyl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgICAgICAgICAgICBpc1Bhc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlwiXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JNZXNzYWdlOiAnRW50ZXIgQ29ycmVjdCBQYXNzd29yZCd9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBoYW5kbGVEcmF3ZXJPcGVuXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNQYXNzID09IGZhbHNlP1xuXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRHJhd2VyT3Blbj17aGFuZGxlRHJhd2VyT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWN1cmUgYXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgYXNrIHRoZSBwYXNzd29yZCBmb3IgcGVybWlzc2lvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMucGFzc3dvcmR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gc209ezZ9IG1kPXszfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZS5rZXlDb2RlID09PSAxMyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd0ZvcndhcmRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e3NocmluazogZmFsc2V9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+OiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNQYXNzID09IHRydWU/XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEcmF3ZXJPcGVuPXtoYW5kbGVEcmF3ZXJPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e3RvcDonNzAlJyxwb3NpdGlvbjonZml4ZWQnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0gbWQ9ezd9PjwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs1fSBtZD17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTY3JvbGx1cC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tyaWdodDonNSUnLHRvcDonODUlJyxwb3NpdGlvbjonZml4ZWQnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNjcm9sbHVwLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZ29kYUZsaWdodHMvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA6XCJcIn1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdXJlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/Work/Secure.js\n");

/***/ })

})