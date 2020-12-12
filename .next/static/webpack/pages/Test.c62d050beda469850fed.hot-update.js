webpackHotUpdate_N_E("pages/Test",{

/***/ "./component/Public/Typewriter.js":
/*!****************************************!*\
  !*** ./component/Public/Typewriter.js ***!
  \****************************************/
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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Public\\Typewriter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Typewriter = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Typewriter, _React$Component);

  var _super = _createSuper(Typewriter);

  function Typewriter(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Typewriter);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleType", function () {
      //   const { dataText } = this.props;
      var _this$state = _this.state,
          isDeleting = _this$state.isDeleting,
          loopNum = _this$state.loopNum,
          text = _this$state.text,
          typingSpeed = _this$state.typingSpeed;
      var i = loopNum % _this.props.dataText.length;
      var fullText = _this.props.dataText[i];

      _this.setState({
        text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
        typingSpeed: isDeleting ? 30 : 150
      });

      if (!isDeleting && text === fullText) {
        setTimeout(function () {
          return _this.setState({
            isDeleting: true
          });
        }, 500);
      } else if (isDeleting && text === '') {
        _this.setState({
          isDeleting: false,
          loopNum: loopNum + 1
        });
      }

      setTimeout(_this.handleType, typingSpeed);
    });

    _this.state = {
      text: '',
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 150
    };
    _this.handleType = _this.handleType.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Typewriter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleType();
    }
  }, {
    key: "render",
    value: function render() {
      var heading = this.props.heading;
      return __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }
      }, heading, "\xA0", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }
      }, this.state.text), __jsx("span", {
        id: "cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }
      }));
    }
  }]);

  return Typewriter;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Typewriter);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1B1YmxpYy9UeXBld3JpdGVyLmpzIl0sIm5hbWVzIjpbIlR5cGV3cml0ZXIiLCJwcm9wcyIsInN0YXRlIiwiaXNEZWxldGluZyIsImxvb3BOdW0iLCJ0ZXh0IiwidHlwaW5nU3BlZWQiLCJpIiwiZGF0YVRleHQiLCJsZW5ndGgiLCJmdWxsVGV4dCIsInNldFN0YXRlIiwic3Vic3RyaW5nIiwic2V0VGltZW91dCIsImhhbmRsZVR5cGUiLCJiaW5kIiwiaGVhZGluZyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1BLFU7Ozs7O0FBRUYsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxxTkFnQk4sWUFBTTtBQUNuQjtBQURtQix3QkFFa0MsTUFBS0MsS0FGdkM7QUFBQSxVQUVUQyxVQUZTLGVBRVRBLFVBRlM7QUFBQSxVQUVHQyxPQUZILGVBRUdBLE9BRkg7QUFBQSxVQUVZQyxJQUZaLGVBRVlBLElBRlo7QUFBQSxVQUVrQkMsV0FGbEIsZUFFa0JBLFdBRmxCO0FBR2pCLFVBQU1DLENBQUMsR0FBR0gsT0FBTyxHQUFHLE1BQUtILEtBQUwsQ0FBV08sUUFBWCxDQUFvQkMsTUFBeEM7QUFDQSxVQUFNQyxRQUFRLEdBQUcsTUFBS1QsS0FBTCxDQUFXTyxRQUFYLENBQW9CRCxDQUFwQixDQUFqQjs7QUFFQSxZQUFLSSxRQUFMLENBQWM7QUFDWk4sWUFBSSxFQUFFRixVQUFVLEdBQUdPLFFBQVEsQ0FBQ0UsU0FBVCxDQUFtQixDQUFuQixFQUFzQlAsSUFBSSxDQUFDSSxNQUFMLEdBQWMsQ0FBcEMsQ0FBSCxHQUE0Q0MsUUFBUSxDQUFDRSxTQUFULENBQW1CLENBQW5CLEVBQXNCUCxJQUFJLENBQUNJLE1BQUwsR0FBYyxDQUFwQyxDQURoRDtBQUVaSCxtQkFBVyxFQUFFSCxVQUFVLEdBQUcsRUFBSCxHQUFRO0FBRm5CLE9BQWQ7O0FBS0EsVUFBSSxDQUFDQSxVQUFELElBQWVFLElBQUksS0FBS0ssUUFBNUIsRUFBc0M7QUFDcENHLGtCQUFVLENBQUM7QUFBQSxpQkFBTSxNQUFLRixRQUFMLENBQWM7QUFBRVIsc0JBQVUsRUFBRTtBQUFkLFdBQWQsQ0FBTjtBQUFBLFNBQUQsRUFBNEMsR0FBNUMsQ0FBVjtBQUNELE9BRkQsTUFFTyxJQUFJQSxVQUFVLElBQUlFLElBQUksS0FBSyxFQUEzQixFQUErQjtBQUNwQyxjQUFLTSxRQUFMLENBQWM7QUFDWlIsb0JBQVUsRUFBRSxLQURBO0FBRVpDLGlCQUFPLEVBQUVBLE9BQU8sR0FBRztBQUZQLFNBQWQ7QUFJRDs7QUFFRFMsZ0JBQVUsQ0FBQyxNQUFLQyxVQUFOLEVBQWtCUixXQUFsQixDQUFWO0FBQ0QsS0FyQ2tCOztBQUVmLFVBQUtKLEtBQUwsR0FBYTtBQUNURyxVQUFJLEVBQUUsRUFERztBQUVURixnQkFBVSxFQUFFLEtBRkg7QUFHVEMsYUFBTyxFQUFFLENBSEE7QUFJVEUsaUJBQVcsRUFBRTtBQUpKLEtBQWI7QUFPQSxVQUFLUSxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLHlHQUFsQjtBQVRlO0FBVWxCOzs7O3dDQUVtQjtBQUNsQixXQUFLRCxVQUFMO0FBQ0Q7Ozs2QkF5QlE7QUFBQSxVQUdERSxPQUhDLEdBSUQsS0FBS2YsS0FKSixDQUdEZSxPQUhDO0FBTUwsYUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQU1BLE9BQU4sVUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVEsS0FBS2QsS0FBTCxDQUFXRyxJQUFuQixDQURGLEVBRUU7QUFBTSxVQUFFLEVBQUMsUUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsQ0FEQTtBQU1IOzs7O0VBckRvQlksNENBQUssQ0FBQ0MsUzs7QUF3RGhCbEIseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvVGVzdC5jNjJkMDUwYmVkYTQ2OTg1MGZlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFR5cGV3cml0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBpc0RlbGV0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9vcE51bTogMCxcclxuICAgICAgICAgICAgdHlwaW5nU3BlZWQ6IDE1MFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVUeXBlID0gdGhpcy5oYW5kbGVUeXBlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgdGhpcy5oYW5kbGVUeXBlKCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBoYW5kbGVUeXBlID0gKCkgPT4ge1xyXG4gICAgLy8gICBjb25zdCB7IGRhdGFUZXh0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCB7IGlzRGVsZXRpbmcsIGxvb3BOdW0sIHRleHQsIHR5cGluZ1NwZWVkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICBjb25zdCBpID0gbG9vcE51bSAlIHRoaXMucHJvcHMuZGF0YVRleHQubGVuZ3RoO1xyXG4gICAgICBjb25zdCBmdWxsVGV4dCA9IHRoaXMucHJvcHMuZGF0YVRleHRbaV07XHJcbiAgXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHRleHQ6IGlzRGVsZXRpbmcgPyBmdWxsVGV4dC5zdWJzdHJpbmcoMCwgdGV4dC5sZW5ndGggLSAxKSA6IGZ1bGxUZXh0LnN1YnN0cmluZygwLCB0ZXh0Lmxlbmd0aCArIDEpLFxyXG4gICAgICAgIHR5cGluZ1NwZWVkOiBpc0RlbGV0aW5nID8gMzAgOiAxNTBcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIGlmICghaXNEZWxldGluZyAmJiB0ZXh0ID09PSBmdWxsVGV4dCkgeyAgICAgXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNEZWxldGluZzogdHJ1ZSB9KSwgNTAwKTsgICBcclxuICAgICAgfSBlbHNlIGlmIChpc0RlbGV0aW5nICYmIHRleHQgPT09ICcnKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBpc0RlbGV0aW5nOiBmYWxzZSxcclxuICAgICAgICAgIGxvb3BOdW06IGxvb3BOdW0gKyAxXHJcbiAgICAgICAgfSk7ICAgICAgXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgc2V0VGltZW91dCh0aGlzLmhhbmRsZVR5cGUsIHR5cGluZ1NwZWVkKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICByZW5kZXIoKSB7ICAgIFxyXG4gICAgICBcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGhlYWRpbmdcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8aDE+eyBoZWFkaW5nIH0mbmJzcDtcclxuICAgICAgICAgIDxzcGFuPnsgdGhpcy5zdGF0ZS50ZXh0IH08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBpZD1cImN1cnNvclwiPjwvc3Bhbj5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUeXBld3JpdGVyOyJdLCJzb3VyY2VSb290IjoiIn0=