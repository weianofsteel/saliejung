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
      isCursor: true
    };
    _this.handleType = _this.handleType.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleCursor = _this.handleCursor.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.timer = _this.timer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Typewriter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleType();
      this.handleCursor();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {// clearInterval(this.handleCursor);
    }
  }, {
    key: "handleCursor",
    value: function handleCursor() {
      var _this2 = this;

      setInterval(function () {
        _this2.timer();
      }, 150);
    }
  }, {
    key: "timer",
    value: function timer() {
      if (this.state.isCursor === true) {
        this.setState({
          isCursor: false
        });
      } else {
        this.setState({
          isCursor: true
        });
      }
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
          lineNumber: 75,
          columnNumber: 9
        }
      }, heading, "\xA0", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }
      }, this.state.text), this.state.isCursor === true ? __jsx("span", {
        className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.cursor,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }
      }) : '');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1B1YmxpYy9UeXBld3JpdGVyLmpzIl0sIm5hbWVzIjpbIlR5cGV3cml0ZXIiLCJwcm9wcyIsInN0YXRlIiwidGV4dCIsImlzRGVsZXRpbmciLCJsb29wTnVtIiwidHlwaW5nU3BlZWQiLCJpc0N1cnNvciIsImhhbmRsZVR5cGUiLCJiaW5kIiwiaGFuZGxlQ3Vyc29yIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsInNldFN0YXRlIiwiZGF0YVRleHQiLCJpIiwibGVuZ3RoIiwiZnVsbFRleHQiLCJzdWJzdHJpbmciLCJzZXRUaW1lb3V0IiwiaGVhZGluZyIsInN0eWxlcyIsImN1cnNvciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsVTs7Ozs7QUFFRixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFVBQUksRUFBRSxFQURHO0FBRVRDLGdCQUFVLEVBQUUsS0FGSDtBQUdUQyxhQUFPLEVBQUUsQ0FIQTtBQUlUQyxpQkFBVyxFQUFFLEdBSko7QUFLVEMsY0FBUSxFQUFFO0FBTEQsS0FBYjtBQVFBLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIseUdBQWxCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQix5R0FBcEI7QUFDQSxVQUFLRSxLQUFMLEdBQWEsTUFBS0EsS0FBTCxDQUFXRixJQUFYLHlHQUFiO0FBWmU7QUFhbEI7Ozs7d0NBRW1CO0FBQ2xCLFdBQUtELFVBQUw7QUFDQSxXQUFLRSxZQUFMO0FBQ0Q7OzsyQ0FFc0IsQ0FDbkI7QUFDSDs7O21DQUVjO0FBQUE7O0FBQ1hFLGlCQUFXLENBQUMsWUFBSTtBQUFDLGNBQUksQ0FBQ0QsS0FBTDtBQUFjLE9BQXBCLEVBQXFCLEdBQXJCLENBQVg7QUFDSDs7OzRCQUVPO0FBQ0osVUFBRyxLQUFLVCxLQUFMLENBQVdLLFFBQVgsS0FBd0IsSUFBM0IsRUFBaUM7QUFDN0IsYUFBS00sUUFBTCxDQUFjO0FBQUNOLGtCQUFRLEVBQUU7QUFBWCxTQUFkO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsYUFBS00sUUFBTCxDQUFjO0FBQUNOLGtCQUFRLEVBQUU7QUFBWCxTQUFkO0FBQ0g7QUFDSjs7O2lDQUdZO0FBQUE7O0FBQUEsVUFDSE8sUUFERyxHQUNVLEtBQUtiLEtBRGYsQ0FDSGEsUUFERztBQUFBLHdCQUV3QyxLQUFLWixLQUY3QztBQUFBLFVBRUhFLFVBRkcsZUFFSEEsVUFGRztBQUFBLFVBRVNDLE9BRlQsZUFFU0EsT0FGVDtBQUFBLFVBRWtCRixJQUZsQixlQUVrQkEsSUFGbEI7QUFBQSxVQUV3QkcsV0FGeEIsZUFFd0JBLFdBRnhCO0FBR1gsVUFBTVMsQ0FBQyxHQUFHVixPQUFPLEdBQUdTLFFBQVEsQ0FBQ0UsTUFBN0I7QUFDQSxVQUFNQyxRQUFRLEdBQUdILFFBQVEsQ0FBQ0MsQ0FBRCxDQUF6QjtBQUVBLFdBQUtGLFFBQUwsQ0FBYztBQUNaVixZQUFJLEVBQUVDLFVBQVUsR0FBR2EsUUFBUSxDQUFDQyxTQUFULENBQW1CLENBQW5CLEVBQXNCZixJQUFJLENBQUNhLE1BQUwsR0FBYyxDQUFwQyxDQUFILEdBQTRDQyxRQUFRLENBQUNDLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0JmLElBQUksQ0FBQ2EsTUFBTCxHQUFjLENBQXBDLENBRGhEO0FBRVpWLG1CQUFXLEVBQUVGLFVBQVUsR0FBRyxHQUFILEdBQVM7QUFGcEIsT0FBZDs7QUFLQSxVQUFJLENBQUNBLFVBQUQsSUFBZUQsSUFBSSxLQUFLYyxRQUE1QixFQUFzQztBQUNwQ0Usa0JBQVUsQ0FBQztBQUFBLGlCQUFNLE1BQUksQ0FBQ04sUUFBTCxDQUFjO0FBQUVULHNCQUFVLEVBQUU7QUFBZCxXQUFkLENBQU47QUFBQSxTQUFELEVBQTRDLElBQTVDLENBQVY7QUFDRCxPQUZELE1BRU8sSUFBSUEsVUFBVSxJQUFJRCxJQUFJLEtBQUssRUFBM0IsRUFBK0I7QUFDcEMsYUFBS1UsUUFBTCxDQUFjO0FBQ1pULG9CQUFVLEVBQUUsS0FEQTtBQUVaQyxpQkFBTyxFQUFFQSxPQUFPLEdBQUc7QUFGUCxTQUFkO0FBSUQ7O0FBRURjLGdCQUFVLENBQUMsS0FBS1gsVUFBTixFQUFrQkYsV0FBbEIsQ0FBVjtBQUNEOzs7NkJBSVE7QUFBQSxVQUdEYyxPQUhDLEdBSUQsS0FBS25CLEtBSkosQ0FHRG1CLE9BSEM7QUFNTCxhQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBTUEsT0FBTixVQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBUSxLQUFLbEIsS0FBTCxDQUFXQyxJQUFuQixDQURGLEVBRUksS0FBS0QsS0FBTCxDQUFXSyxRQUFYLEtBQXdCLElBQXhCLEdBQ0E7QUFBTSxpQkFBUyxFQUFFYyw2REFBTSxDQUFDQyxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREEsR0FFRCxFQUpILENBREE7QUFRSDs7OztFQTlFb0JDLDRDQUFLLENBQUNDLFM7O0FBaUZoQnhCLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1Rlc3QuZGFlZjg3OWEzNWJlNzczN2ZmNTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1B1YmxpYy5tb2R1bGUuY3NzJztcclxuXHJcbmNsYXNzIFR5cGV3cml0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBpc0RlbGV0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9vcE51bTogMCxcclxuICAgICAgICAgICAgdHlwaW5nU3BlZWQ6IDE1MCxcclxuICAgICAgICAgICAgaXNDdXJzb3I6IHRydWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlVHlwZSA9IHRoaXMuaGFuZGxlVHlwZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ3Vyc29yID0gdGhpcy5oYW5kbGVDdXJzb3IuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gdGhpcy50aW1lci5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlVHlwZSgpO1xyXG4gICAgICB0aGlzLmhhbmRsZUN1cnNvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIC8vIGNsZWFySW50ZXJ2YWwodGhpcy5oYW5kbGVDdXJzb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUN1cnNvcigpIHtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKT0+e3RoaXMudGltZXIoKTt9LDE1MCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGltZXIoKSB7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5pc0N1cnNvciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0N1cnNvcjogZmFsc2V9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0N1cnNvcjogdHJ1ZX0pO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICBcclxuICAgIGhhbmRsZVR5cGUoKSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YVRleHQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IHsgaXNEZWxldGluZywgbG9vcE51bSwgdGV4dCwgdHlwaW5nU3BlZWQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgIGNvbnN0IGkgPSBsb29wTnVtICUgZGF0YVRleHQubGVuZ3RoO1xyXG4gICAgICBjb25zdCBmdWxsVGV4dCA9IGRhdGFUZXh0W2ldO1xyXG4gIFxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICB0ZXh0OiBpc0RlbGV0aW5nID8gZnVsbFRleHQuc3Vic3RyaW5nKDAsIHRleHQubGVuZ3RoIC0gMSkgOiBmdWxsVGV4dC5zdWJzdHJpbmcoMCwgdGV4dC5sZW5ndGggKyAxKSxcclxuICAgICAgICB0eXBpbmdTcGVlZDogaXNEZWxldGluZyA/IDE1MCA6IDE1MFxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgaWYgKCFpc0RlbGV0aW5nICYmIHRleHQgPT09IGZ1bGxUZXh0KSB7ICAgICBcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0U3RhdGUoeyBpc0RlbGV0aW5nOiB0cnVlIH0pLCAxNTAwKTsgICBcclxuICAgICAgfSBlbHNlIGlmIChpc0RlbGV0aW5nICYmIHRleHQgPT09ICcnKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBpc0RlbGV0aW5nOiBmYWxzZSxcclxuICAgICAgICAgIGxvb3BOdW06IGxvb3BOdW0gKyAxXHJcbiAgICAgICAgfSk7ICAgICAgXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgc2V0VGltZW91dCh0aGlzLmhhbmRsZVR5cGUsIHR5cGluZ1NwZWVkKTtcclxuICAgIH07XHJcblxyXG5cclxuICBcclxuICAgIHJlbmRlcigpIHsgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgaGVhZGluZ1xyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoMT57IGhlYWRpbmcgfSZuYnNwO1xyXG4gICAgICAgICAgPHNwYW4+eyB0aGlzLnN0YXRlLnRleHQgfTwvc3Bhbj5cclxuICAgICAgICAgIHsgdGhpcy5zdGF0ZS5pc0N1cnNvciA9PT0gdHJ1ZSA/XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmN1cnNvcn0+PC9zcGFuPlxyXG4gICAgICAgICAgOicnfSAgXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHlwZXdyaXRlcjsiXSwic291cmNlUm9vdCI6IiJ9