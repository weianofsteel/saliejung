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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_Public_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../css/Public.module.css */ "./css/Public.module.css");
/* harmony import */ var _css_Public_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_Public_module_css__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Public\\Typewriter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Typewriter = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Typewriter, _React$Component);

  var _super = _createSuper(Typewriter);

  function Typewriter(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Typewriter);

    _this = _super.call(this, props);
    _this.state = {
      text: '',
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 150,
      count: 0
    };
    _this.handleType = _this.handleType.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleTimer = _this.handleTimer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.timer = _this.timer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Typewriter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleType();
      this.handleTimer();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.handleTimer);
    }
  }, {
    key: "handleTimer",
    value: function handleTimer() {
      var _this2 = this;

      setInterval(function () {
        _this2.timer();
      }, 1000);
    }
  }, {
    key: "timer",
    value: function timer() {
      this.setState({
        count: this.state.count + 1
      });
    }
  }, {
    key: "handleType",
    value: function handleType() {
      var _this3 = this;

      var dataText = this.props.dataText;
      var _this$state = this.state,
          isDeleting = _this$state.isDeleting,
          loopNum = _this$state.loopNum,
          text = _this$state.text,
          typingSpeed = _this$state.typingSpeed;
      var i = loopNum % dataText.length;
      var fullText = dataText[i];
      this.setState({
        text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
        typingSpeed: isDeleting ? 150 : 150
      });

      if (!isDeleting && text === fullText) {
        setTimeout(function () {
          return _this3.setState({
            isDeleting: true
          });
        }, 1500);
      } else if (isDeleting && text === '') {
        this.setState({
          isDeleting: false,
          loopNum: loopNum + 1
        });
      }

      setTimeout(this.handleType, typingSpeed);
    }
  }, {
    key: "render",
    value: function render() {
      var heading = this.props.heading;
      return __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 9
        }
      }, heading, "\xA0", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }
      }, this.state.text), parseInt(this.state.count / 2) % 2 === 0 ? __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }
      }, "|") : '');
    }
  }]);

  return Typewriter;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1B1YmxpYy9UeXBld3JpdGVyLmpzIl0sIm5hbWVzIjpbIlR5cGV3cml0ZXIiLCJwcm9wcyIsInN0YXRlIiwidGV4dCIsImlzRGVsZXRpbmciLCJsb29wTnVtIiwidHlwaW5nU3BlZWQiLCJjb3VudCIsImhhbmRsZVR5cGUiLCJiaW5kIiwiaGFuZGxlVGltZXIiLCJ0aW1lciIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInNldFN0YXRlIiwiZGF0YVRleHQiLCJpIiwibGVuZ3RoIiwiZnVsbFRleHQiLCJzdWJzdHJpbmciLCJzZXRUaW1lb3V0IiwiaGVhZGluZyIsInBhcnNlSW50IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSxVOzs7OztBQUVGLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsVUFBSSxFQUFFLEVBREc7QUFFVEMsZ0JBQVUsRUFBRSxLQUZIO0FBR1RDLGFBQU8sRUFBRSxDQUhBO0FBSVRDLGlCQUFXLEVBQUUsR0FKSjtBQUtUQyxXQUFLLEVBQUU7QUFMRSxLQUFiO0FBUUEsVUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQix5R0FBbEI7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJELElBQWpCLHlHQUFuQjtBQUNBLFVBQUtFLEtBQUwsR0FBYSxNQUFLQSxLQUFMLENBQVdGLElBQVgseUdBQWI7QUFaZTtBQWFsQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBS0QsVUFBTDtBQUNBLFdBQUtFLFdBQUw7QUFDRDs7OzJDQUVzQjtBQUNuQkUsbUJBQWEsQ0FBQyxLQUFLRixXQUFOLENBQWI7QUFDSDs7O2tDQUVhO0FBQUE7O0FBQ1ZHLGlCQUFXLENBQUMsWUFBSTtBQUFDLGNBQUksQ0FBQ0YsS0FBTDtBQUFjLE9BQXBCLEVBQXFCLElBQXJCLENBQVg7QUFDSDs7OzRCQUVPO0FBQ0osV0FBS0csUUFBTCxDQUFjO0FBQUNQLGFBQUssRUFBRSxLQUFLTCxLQUFMLENBQVdLLEtBQVgsR0FBbUI7QUFBM0IsT0FBZDtBQUNIOzs7aUNBR1k7QUFBQTs7QUFBQSxVQUNIUSxRQURHLEdBQ1UsS0FBS2QsS0FEZixDQUNIYyxRQURHO0FBQUEsd0JBRXdDLEtBQUtiLEtBRjdDO0FBQUEsVUFFSEUsVUFGRyxlQUVIQSxVQUZHO0FBQUEsVUFFU0MsT0FGVCxlQUVTQSxPQUZUO0FBQUEsVUFFa0JGLElBRmxCLGVBRWtCQSxJQUZsQjtBQUFBLFVBRXdCRyxXQUZ4QixlQUV3QkEsV0FGeEI7QUFHWCxVQUFNVSxDQUFDLEdBQUdYLE9BQU8sR0FBR1UsUUFBUSxDQUFDRSxNQUE3QjtBQUNBLFVBQU1DLFFBQVEsR0FBR0gsUUFBUSxDQUFDQyxDQUFELENBQXpCO0FBRUEsV0FBS0YsUUFBTCxDQUFjO0FBQ1pYLFlBQUksRUFBRUMsVUFBVSxHQUFHYyxRQUFRLENBQUNDLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0JoQixJQUFJLENBQUNjLE1BQUwsR0FBYyxDQUFwQyxDQUFILEdBQTRDQyxRQUFRLENBQUNDLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0JoQixJQUFJLENBQUNjLE1BQUwsR0FBYyxDQUFwQyxDQURoRDtBQUVaWCxtQkFBVyxFQUFFRixVQUFVLEdBQUcsR0FBSCxHQUFTO0FBRnBCLE9BQWQ7O0FBS0EsVUFBSSxDQUFDQSxVQUFELElBQWVELElBQUksS0FBS2UsUUFBNUIsRUFBc0M7QUFDcENFLGtCQUFVLENBQUM7QUFBQSxpQkFBTSxNQUFJLENBQUNOLFFBQUwsQ0FBYztBQUFFVixzQkFBVSxFQUFFO0FBQWQsV0FBZCxDQUFOO0FBQUEsU0FBRCxFQUE0QyxJQUE1QyxDQUFWO0FBQ0QsT0FGRCxNQUVPLElBQUlBLFVBQVUsSUFBSUQsSUFBSSxLQUFLLEVBQTNCLEVBQStCO0FBQ3BDLGFBQUtXLFFBQUwsQ0FBYztBQUNaVixvQkFBVSxFQUFFLEtBREE7QUFFWkMsaUJBQU8sRUFBRUEsT0FBTyxHQUFHO0FBRlAsU0FBZDtBQUlEOztBQUVEZSxnQkFBVSxDQUFDLEtBQUtaLFVBQU4sRUFBa0JGLFdBQWxCLENBQVY7QUFDRDs7OzZCQUlRO0FBQUEsVUFHRGUsT0FIQyxHQUlELEtBQUtwQixLQUpKLENBR0RvQixPQUhDO0FBTUwsYUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQU1BLE9BQU4sVUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVEsS0FBS25CLEtBQUwsQ0FBV0MsSUFBbkIsQ0FERixFQUVJbUIsUUFBUSxDQUFDLEtBQUtwQixLQUFMLENBQVdLLEtBQVgsR0FBbUIsQ0FBcEIsQ0FBUixHQUFpQyxDQUFqQyxLQUFzQyxDQUF0QyxHQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxHQUVELEVBSkgsQ0FEQTtBQVFIOzs7O0VBMUVvQmdCLDRDQUFLLENBQUNDLFM7O0FBNkVoQnhCLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1Rlc3QuZGEzYjEzYzA5NTBkYTkzNWQ5ZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1B1YmxpYy5tb2R1bGUuY3NzJztcclxuXHJcbmNsYXNzIFR5cGV3cml0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBpc0RlbGV0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9vcE51bTogMCxcclxuICAgICAgICAgICAgdHlwaW5nU3BlZWQ6IDE1MCxcclxuICAgICAgICAgICAgY291bnQ6IDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlVHlwZSA9IHRoaXMuaGFuZGxlVHlwZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlVGltZXIgPSB0aGlzLmhhbmRsZVRpbWVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IHRoaXMudGltZXIuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICB0aGlzLmhhbmRsZVR5cGUoKTtcclxuICAgICAgdGhpcy5oYW5kbGVUaW1lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5oYW5kbGVUaW1lcik7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVGltZXIoKSB7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCk9Pnt0aGlzLnRpbWVyKCk7fSwxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICB0aW1lcigpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjb3VudDogdGhpcy5zdGF0ZS5jb3VudCArIDF9KTtcclxuICAgIH1cclxuXHJcbiAgXHJcbiAgICBoYW5kbGVUeXBlKCkge1xyXG4gICAgICBjb25zdCB7IGRhdGFUZXh0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCB7IGlzRGVsZXRpbmcsIGxvb3BOdW0sIHRleHQsIHR5cGluZ1NwZWVkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICBjb25zdCBpID0gbG9vcE51bSAlIGRhdGFUZXh0Lmxlbmd0aDtcclxuICAgICAgY29uc3QgZnVsbFRleHQgPSBkYXRhVGV4dFtpXTtcclxuICBcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgdGV4dDogaXNEZWxldGluZyA/IGZ1bGxUZXh0LnN1YnN0cmluZygwLCB0ZXh0Lmxlbmd0aCAtIDEpIDogZnVsbFRleHQuc3Vic3RyaW5nKDAsIHRleHQubGVuZ3RoICsgMSksXHJcbiAgICAgICAgdHlwaW5nU3BlZWQ6IGlzRGVsZXRpbmcgPyAxNTAgOiAxNTBcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIGlmICghaXNEZWxldGluZyAmJiB0ZXh0ID09PSBmdWxsVGV4dCkgeyAgICAgXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNEZWxldGluZzogdHJ1ZSB9KSwgMTUwMCk7ICAgXHJcbiAgICAgIH0gZWxzZSBpZiAoaXNEZWxldGluZyAmJiB0ZXh0ID09PSAnJykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgaXNEZWxldGluZzogZmFsc2UsXHJcbiAgICAgICAgICBsb29wTnVtOiBsb29wTnVtICsgMVxyXG4gICAgICAgIH0pOyAgICAgIFxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHNldFRpbWVvdXQodGhpcy5oYW5kbGVUeXBlLCB0eXBpbmdTcGVlZCk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgXHJcbiAgICByZW5kZXIoKSB7ICAgIFxyXG4gICAgICBcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGhlYWRpbmdcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8aDE+eyBoZWFkaW5nIH0mbmJzcDtcclxuICAgICAgICAgIDxzcGFuPnsgdGhpcy5zdGF0ZS50ZXh0IH08L3NwYW4+XHJcbiAgICAgICAgICB7IHBhcnNlSW50KHRoaXMuc3RhdGUuY291bnQgLyAyKSAlIDIgPT09MCA/XHJcbiAgICAgICAgICAgIDxzcGFuPnw8L3NwYW4+XHJcbiAgICAgICAgICA6Jyd9XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHlwZXdyaXRlcjsiXSwic291cmNlUm9vdCI6IiJ9