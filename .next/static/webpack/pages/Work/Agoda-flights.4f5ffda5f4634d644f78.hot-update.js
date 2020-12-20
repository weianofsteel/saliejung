webpackHotUpdate_N_E("pages/Work/Agoda-flights",{

/***/ "./component/Work/Secure.js":
/*!**********************************!*\
  !*** ./component/Work/Secure.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../css/Work.module.css */ "./css/Work.module.css");
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_Work_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ "./node_modules/@material-ui/icons/ArrowForward.js");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _AgodaFlights_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AgodaFlights.js */ "./component/Work/AgodaFlights.js");
/* harmony import */ var _component_Home_Header_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../component/Home/Header.js */ "./component/Home/Header.js");
/* harmony import */ var _Public_Scrollup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Public/Scrollup */ "./component/Public/Scrollup.js");






var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Work\\Secure.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












var Secure = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Secure, _React$Component);

  var _super = _createSuper(Secure);

  function Secure(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Secure);

    _this = _super.call(this, props);
    _this.state = {
      password: "",
      errorMessage: "",
      isPass: false
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.setStateByName = _this.setStateByName.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.recursiveReplaceValueByName = _this.recursiveReplaceValueByName.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Secure, [{
    key: "handleChange",
    value: function handleChange(e, callBack) {
      var nullValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var _e$target = e.target,
          value = _e$target.value,
          name = _e$target.name;

      if (typeof callBack !== "function") {
        callBack = function callBack() {};
      }

      this.setStateByName(name, value !== "" ? value : null, callBack);
    }
  }, {
    key: "setStateByName",
    value: function setStateByName(name, value, callBack) {
      this.setState(function (prevState) {
        return this.recursiveReplaceValueByName(name, prevState, value);
      }, callBack);
    }
  }, {
    key: "recursiveReplaceValueByName",
    value: function recursiveReplaceValueByName(name, object, value) {
      var keysArr = name.replace(/\[/g, ".").replace(/\]/g, "").split(".");
      var target = object;

      for (var i = 0; i < keysArr.length; i++) {
        var key = keysArr[i];

        if (!target.hasOwnProperty(key)) {
          return object;
        }

        if (i == keysArr.length - 1) {
          target[key] = value;
        }

        target = target[key];
      }

      return object;
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit() {
      if (this.state.password == '20180801') {
        this.setState({
          password: "",
          isPass: true,
          errorMessage: ""
        });
      } else {
        this.setState({
          errorMessage: 'Enter Correct Password'
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }
      }, this.state.isPass == false ? __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 25
        }
      }, __jsx(_component_Home_Header_js__WEBPACK_IMPORTED_MODULE_14__["Header"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 29
        }
      })), __jsx("div", {
        className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.main,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 25
        }
      }, __jsx("span", {
        className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 29
        }
      }, "Secure area"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 29
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 29
        }
      }), __jsx("span", {
        className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.description,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 29
        }
      }, "Please ask the password for permission."), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
        container: true,
        className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.password,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 29
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
        item: true,
        xs: 10,
        sm: 6,
        md: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 33
        }
      }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "password",
        label: "Enter password",
        variant: "outlined",
        name: "password",
        value: this.state.password,
        onChange: this.handleChange,
        onKeyDown: function onKeyDown(e) {
          if (e.keyCode === 13) {
            _this2.handleSubmit();
          }
        },
        helperText: this.state.errorMessage,
        style: {
          width: "100%"
        },
        InputProps: {
          endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_10__["default"], {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 45
            }
          }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
            onClick: this.handleSubmit,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 49
            }
          }, __jsx(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_12___default.a, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 53
            }
          })))
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 37
        }
      }))))) : "", this.state.isPass == true ? __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.header,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 25
        }
      }, __jsx(_component_Home_Header_js__WEBPACK_IMPORTED_MODULE_14__["Header"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 29
        }
      })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
        container: true,
        style: {
          top: '70%',
          position: 'fixed'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 25
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
        item: true,
        xs: 4,
        md: 7,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
        item: true,
        xs: 5,
        md: 4,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 29
        }
      }, __jsx(_Public_Scrollup__WEBPACK_IMPORTED_MODULE_15__["Scrollup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 33
        }
      }))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 25
        }
      }, __jsx(_AgodaFlights_js__WEBPACK_IMPORTED_MODULE_13__["AgodaFlights"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 29
        }
      }))) : "");
    }
  }]);

  return Secure;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Secure);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1dvcmsvU2VjdXJlLmpzIl0sIm5hbWVzIjpbIlNlY3VyZSIsInByb3BzIiwic3RhdGUiLCJwYXNzd29yZCIsImVycm9yTWVzc2FnZSIsImlzUGFzcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJzZXRTdGF0ZUJ5TmFtZSIsInJlY3Vyc2l2ZVJlcGxhY2VWYWx1ZUJ5TmFtZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJjYWxsQmFjayIsIm51bGxWYWx1ZSIsInRhcmdldCIsInZhbHVlIiwibmFtZSIsInNldFN0YXRlIiwicHJldlN0YXRlIiwib2JqZWN0Iiwia2V5c0FyciIsInJlcGxhY2UiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsInN0eWxlcyIsIm1haW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwia2V5Q29kZSIsIndpZHRoIiwiZW5kQWRvcm5tZW50IiwiaGVhZGVyIiwidG9wIiwicG9zaXRpb24iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxNOzs7OztBQUNGLGtCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2QsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsY0FBUSxFQUFFLEVBREQ7QUFFVEMsa0JBQVksRUFBRSxFQUZMO0FBR1RDLFlBQU0sRUFBRTtBQUhDLEtBQWI7QUFNQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLHlHQUFwQjtBQUNBLFVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkQsSUFBcEIseUdBQXRCO0FBQ0EsVUFBS0UsMkJBQUwsR0FBbUMsTUFBS0EsMkJBQUwsQ0FBaUNGLElBQWpD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QUFBQTtBQUFBLFFBREosQ0FaSixDQUZILEdBbUJBLEVBekVMLENBREo7QUE4RUg7Ozs7RUE5SWdCQyw0Q0FBSyxDQUFDQyxTOztBQWlKWnRDLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1dvcmsvQWdvZGEtZmxpZ2h0cy40ZjVmZmRhNWY0NjM0ZDY0NGY3OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1dvcmsubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IElucHV0QWRvcm5tZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50JztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBBcnJvd0ZvcndhcmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0ZvcndhcmQnO1xyXG5pbXBvcnQgeyBBZ29kYUZsaWdodHMgfSBmcm9tICcuL0Fnb2RhRmxpZ2h0cy5qcyc7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC9Ib21lL0hlYWRlci5qcyc7XHJcbmltcG9ydCB7IFNjcm9sbHVwIH0gZnJvbSAnLi4vUHVibGljL1Njcm9sbHVwJztcclxuXHJcbmNsYXNzIFNlY3VyZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgICAgIGlzUGFzczogZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlQnlOYW1lID0gdGhpcy5zZXRTdGF0ZUJ5TmFtZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVjdXJzaXZlUmVwbGFjZVZhbHVlQnlOYW1lID0gdGhpcy5yZWN1cnNpdmVSZXBsYWNlVmFsdWVCeU5hbWUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlKGUsY2FsbEJhY2ssbnVsbFZhbHVlPW51bGwpIHtcclxuICAgICAgICBjb25zdCB7dmFsdWUsIG5hbWV9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsQmFjayAhPT1cImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgICAgICBjYWxsQmFjayA9IGZ1bmN0aW9uKCkge31cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZUJ5TmFtZShuYW1lLCB2YWx1ZSE9PVwiXCI/dmFsdWU6bnVsbCwgY2FsbEJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXRlQnlOYW1lKG5hbWUsIHZhbHVlLCBjYWxsQmFjaykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24ocHJldlN0YXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlY3Vyc2l2ZVJlcGxhY2VWYWx1ZUJ5TmFtZShuYW1lLCBwcmV2U3RhdGUsIHZhbHVlKTtcclxuICAgICAgICB9LGNhbGxCYWNrKVxyXG4gICAgfVxyXG5cclxuICAgIHJlY3Vyc2l2ZVJlcGxhY2VWYWx1ZUJ5TmFtZShuYW1lLG9iamVjdCx2YWx1ZSlcclxuICAgIHtcclxuICAgICAgICB2YXIga2V5c0FyciA9IG5hbWUucmVwbGFjZSgvXFxbL2csXCIuXCIpLnJlcGxhY2UoL1xcXS9nLFwiXCIpLnNwbGl0KFwiLlwiKTtcclxuXHJcbiAgICAgICAgdmFyIHRhcmdldCA9IG9iamVjdDtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzQXJyLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IGtleSA9IGtleXNBcnJbaV07XHJcbiAgICAgICAgICAgIGlmICghdGFyZ2V0Lmhhc093blByb3BlcnR5KGtleSkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGkgPT0ga2V5c0Fyci5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXRba2V5XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0KCkge1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUucGFzc3dvcmQgPT0gJzIwMTgwODAxJyl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBpc1Bhc3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwiXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvck1lc3NhZ2U6ICdFbnRlciBDb3JyZWN0IFBhc3N3b3JkJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNQYXNzID09IGZhbHNlP1xyXG5cclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlY3VyZSBhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgYXNrIHRoZSBwYXNzd29yZCBmb3IgcGVybWlzc2lvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMucGFzc3dvcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBzbT17Nn0gbWQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbnRlciBwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZS5rZXlDb2RlID09PSAxMyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU3VibWl0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93Rm9yd2FyZEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PjogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzUGFzcyA9PSB0cnVlP1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7dG9wOic3MCUnLHBvc2l0aW9uOidmaXhlZCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IG1kPXs3fT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs1fSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNjcm9sbHVwLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZ29kYUZsaWdodHMvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDpcIlwifVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3VyZTsiXSwic291cmNlUm9vdCI6IiJ9