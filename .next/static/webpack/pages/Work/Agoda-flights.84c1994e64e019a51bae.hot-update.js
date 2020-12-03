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
    _this.handleScrolltoTop = _this.handleScrolltoTop.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
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
          lineNumber: 78,
          columnNumber: 13
        }
      }, this.state.isPass == false ? __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 25
        }
      }, __jsx(_component_Home_Header_js__WEBPACK_IMPORTED_MODULE_14__["Header"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 29
        }
      })), __jsx("div", {
        className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.main,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 25
        }
      }, __jsx("span", {
        className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 29
        }
      }, "Secure area"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 29
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 29
        }
      }), __jsx("span", {
        className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.description,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 29
        }
      }, "Please ask the password for permission."), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
        container: true,
        className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.password,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 29
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
        item: true,
        xs: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
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
              lineNumber: 117,
              columnNumber: 45
            }
          }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
            onClick: this.handleSubmit,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 49
            }
          }, __jsx(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_12___default.a, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 53
            }
          })))
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 37
        }
      }))))) : "", this.state.isPass == true ? __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.header,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 25
        }
      }, __jsx(_component_Home_Header_js__WEBPACK_IMPORTED_MODULE_14__["Header"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 29
        }
      })), __jsx("div", {
        style: {
          paddingTop: '30%',
          marginLeft: '80%',
          position: 'fixed'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 25
        }
      }, __jsx(_Public_Scrollup__WEBPACK_IMPORTED_MODULE_15__["Scrollup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 29
        }
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 25
        }
      }, __jsx(_AgodaFlights_js__WEBPACK_IMPORTED_MODULE_13__["AgodaFlights"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1dvcmsvU2VjdXJlLmpzIl0sIm5hbWVzIjpbIlNlY3VyZSIsInByb3BzIiwic3RhdGUiLCJwYXNzd29yZCIsImVycm9yTWVzc2FnZSIsImlzUGFzcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJzZXRTdGF0ZUJ5TmFtZSIsInJlY3Vyc2l2ZVJlcGxhY2VWYWx1ZUJ5TmFtZSIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZVNjcm9sbHRvVG9wIiwiZSIsImNhbGxCYWNrIiwibnVsbFZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJvYmplY3QiLCJrZXlzQXJyIiwicmVwbGFjZSIsInNwbGl0IiwiaSIsImxlbmd0aCIsImtleSIsImhhc093blByb3BlcnR5Iiwic3R5bGVzIiwibWFpbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXlDb2RlIiwid2lkdGgiLCJlbmRBZG9ybm1lbnQiLCJoZWFkZXIiLCJwYWRkaW5nVG9wIiwibWFyZ2luTGVmdCIsInBvc2l0aW9uIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsTTs7Ozs7QUFDRixrQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLGNBQVEsRUFBRSxFQUREO0FBRVRDLGtCQUFZLEVBQUUsRUFGTDtBQUdUQyxZQUFNLEVBQUU7QUFIQyxLQUFiO0FBTUEsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQix5R0FBcEI7QUFDQSxVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JELElBQXBCLHlHQUF0QjtBQUNBLFVB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RDtBQUFZLG1CQUFPLEVBQUUsS0FBS3hCLFlBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDSSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixDQURKO0FBRlEsU0FkaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBREosQ0FYSixDQUxKLENBRkgsR0FnRHNCLEVBbkQzQixFQXNESyxLQUFLUixLQUFMLENBQVdHLE1BQVgsSUFBcUIsSUFBckIsR0FFRyxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTSxpQkFBUyxFQUFFdUIsMkRBQU0sQ0FBQ08sTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBREosRUFLSTtBQUFLLGFBQUssRUFBRTtBQUFDQyxvQkFBVSxFQUFDLEtBQVo7QUFBa0JDLG9CQUFVLEVBQUMsS0FBN0I7QUFBbUNDLGtCQUFRLEVBQUM7QUFBNUMsU0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FMSixFQVNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixDQVRKLENBRkgsR0FnQkEsRUF0RUwsQ0FESjtBQTJFSDs7OztFQTVJZ0JDLDRDQUFLLENBQUNDLFM7O0FBK0laeEMscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvV29yay9BZ29kYS1mbGlnaHRzLjg0YzE5OTRlNjRlMDE5YTUxYmFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvV29yay5tb2R1bGUuY3NzJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgSW5wdXRBZG9ybm1lbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnQnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IEFycm93Rm9yd2FyZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93Rm9yd2FyZCc7XHJcbmltcG9ydCB7IEFnb2RhRmxpZ2h0cyB9IGZyb20gJy4vQWdvZGFGbGlnaHRzLmpzJztcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50L0hvbWUvSGVhZGVyLmpzJztcclxuaW1wb3J0IHsgU2Nyb2xsdXAgfSBmcm9tICcuLi9QdWJsaWMvU2Nyb2xsdXAnO1xyXG5cclxuY2xhc3MgU2VjdXJlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCJcIixcclxuICAgICAgICAgICAgaXNQYXNzOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGVCeU5hbWUgPSB0aGlzLnNldFN0YXRlQnlOYW1lLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZWN1cnNpdmVSZXBsYWNlVmFsdWVCeU5hbWUgPSB0aGlzLnJlY3Vyc2l2ZVJlcGxhY2VWYWx1ZUJ5TmFtZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbHRvVG9wID0gdGhpcy5oYW5kbGVTY3JvbGx0b1RvcC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZShlLGNhbGxCYWNrLG51bGxWYWx1ZT1udWxsKSB7XHJcbiAgICAgICAgY29uc3Qge3ZhbHVlLCBuYW1lfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbEJhY2sgIT09XCJmdW5jdGlvblwiKXtcclxuICAgICAgICAgICAgY2FsbEJhY2sgPSBmdW5jdGlvbigpIHt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGVCeU5hbWUobmFtZSwgdmFsdWUhPT1cIlwiP3ZhbHVlOm51bGwsIGNhbGxCYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0ZUJ5TmFtZShuYW1lLCB2YWx1ZSwgY2FsbEJhY2spIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uKHByZXZTdGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWN1cnNpdmVSZXBsYWNlVmFsdWVCeU5hbWUobmFtZSwgcHJldlN0YXRlLCB2YWx1ZSk7XHJcbiAgICAgICAgfSxjYWxsQmFjaylcclxuICAgIH1cclxuXHJcbiAgICByZWN1cnNpdmVSZXBsYWNlVmFsdWVCeU5hbWUobmFtZSxvYmplY3QsdmFsdWUpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGtleXNBcnIgPSBuYW1lLnJlcGxhY2UoL1xcWy9nLFwiLlwiKS5yZXBsYWNlKC9cXF0vZyxcIlwiKS5zcGxpdChcIi5cIik7XHJcblxyXG4gICAgICAgIHZhciB0YXJnZXQgPSBvYmplY3Q7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5c0Fyci5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBrZXkgPSBrZXlzQXJyW2ldO1xyXG4gICAgICAgICAgICBpZiAoIXRhcmdldC5oYXNPd25Qcm9wZXJ0eShrZXkpKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpID09IGtleXNBcnIubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0W2tleV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLnBhc3N3b3JkID09ICcyMDE4MDgwMScpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgaXNQYXNzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JNZXNzYWdlOiAnRW50ZXIgQ29ycmVjdCBQYXNzd29yZCd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzUGFzcyA9PSBmYWxzZT9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWN1cmUgYXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIGFzayB0aGUgcGFzc3dvcmQgZm9yIHBlcm1pc3Npb24uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLnBhc3N3b3JkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW50ZXIgcGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGUua2V5Q29kZSA9PT0gMTMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd0ZvcndhcmRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD46IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc1Bhc3MgPT0gdHJ1ZT9cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nVG9wOiczMCUnLG1hcmdpbkxlZnQ6JzgwJScscG9zaXRpb246J2ZpeGVkJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNjcm9sbHVwLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFnb2RhRmxpZ2h0cy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgOlwiXCJ9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdXJlOyJdLCJzb3VyY2VSb290IjoiIn0=