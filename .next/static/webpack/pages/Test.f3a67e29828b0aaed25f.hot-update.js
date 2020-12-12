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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1B1YmxpYy9UeXBld3JpdGVyLmpzIl0sIm5hbWVzIjpbIlR5cGV3cml0ZXIiLCJwcm9wcyIsInN0YXRlIiwidGV4dCIsImlzRGVsZXRpbmciLCJsb29wTnVtIiwidHlwaW5nU3BlZWQiLCJjb3VudCIsImhhbmRsZVR5cGUiLCJiaW5kIiwiaGFuZGxlVGltZXIiLCJ0aW1lciIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInNldFN0YXRlIiwiZGF0YVRleHQiLCJpIiwibGVuZ3RoIiwiZnVsbFRleHQiLCJzdWJzdHJpbmciLCJzZXRUaW1lb3V0IiwiaGVhZGluZyIsInBhcnNlSW50IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSxVOzs7OztBQUVGLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsVUFBSSxFQUFFLEVBREc7QUFFVEMsZ0JBQVUsRUFBRSxLQUZIO0FBR1RDLGFBQU8sRUFBRSxDQUhBO0FBSVRDLGlCQUFXLEVBQUUsR0FKSjtBQUtUQyxXQUFLLEVBQUU7QUFMRSxLQUFiO0FBUUEsVUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQix5R0FBbEI7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJELElBQWpCLHlHQUFuQjtBQUNBLFVBQUtFLEtBQUwsR0FBYSxNQUFLQSxLQUFMLENBQVdGLElBQVgseUdBQWI7QUFaZTtBQWFsQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBS0QsVUFBTDtBQUVEOzs7MkNBRXNCO0FBQ25CSSxtQkFBYSxDQUFDLEtBQUtGLFdBQU4sQ0FBYjtBQUNIOzs7a0NBRWE7QUFBQTs7QUFDVkcsaUJBQVcsQ0FBQyxZQUFJO0FBQUMsY0FBSSxDQUFDRixLQUFMO0FBQWMsT0FBcEIsRUFBcUIsSUFBckIsQ0FBWDtBQUNIOzs7NEJBRU87QUFDSixXQUFLRyxRQUFMLENBQWM7QUFBQ1AsYUFBSyxFQUFFLEtBQUtMLEtBQUwsQ0FBV0ssS0FBWCxHQUFtQjtBQUEzQixPQUFkO0FBQ0g7OztpQ0FHWTtBQUFBOztBQUFBLFVBQ0hRLFFBREcsR0FDVSxLQUFLZCxLQURmLENBQ0hjLFFBREc7QUFBQSx3QkFFd0MsS0FBS2IsS0FGN0M7QUFBQSxVQUVIRSxVQUZHLGVBRUhBLFVBRkc7QUFBQSxVQUVTQyxPQUZULGVBRVNBLE9BRlQ7QUFBQSxVQUVrQkYsSUFGbEIsZUFFa0JBLElBRmxCO0FBQUEsVUFFd0JHLFdBRnhCLGVBRXdCQSxXQUZ4QjtBQUdYLFVBQU1VLENBQUMsR0FBR1gsT0FBTyxHQUFHVSxRQUFRLENBQUNFLE1BQTdCO0FBQ0EsVUFBTUMsUUFBUSxHQUFHSCxRQUFRLENBQUNDLENBQUQsQ0FBekI7QUFFQSxXQUFLRixRQUFMLENBQWM7QUFDWlgsWUFBSSxFQUFFQyxVQUFVLEdBQUdjLFFBQVEsQ0FBQ0MsU0FBVCxDQUFtQixDQUFuQixFQUFzQmhCLElBQUksQ0FBQ2MsTUFBTCxHQUFjLENBQXBDLENBQUgsR0FBNENDLFFBQVEsQ0FBQ0MsU0FBVCxDQUFtQixDQUFuQixFQUFzQmhCLElBQUksQ0FBQ2MsTUFBTCxHQUFjLENBQXBDLENBRGhEO0FBRVpYLG1CQUFXLEVBQUVGLFVBQVUsR0FBRyxHQUFILEdBQVM7QUFGcEIsT0FBZDs7QUFLQSxVQUFJLENBQUNBLFVBQUQsSUFBZUQsSUFBSSxLQUFLZSxRQUE1QixFQUFzQztBQUNwQ0Usa0JBQVUsQ0FBQztBQUFBLGlCQUFNLE1BQUksQ0FBQ04sUUFBTCxDQUFjO0FBQUVWLHNCQUFVLEVBQUU7QUFBZCxXQUFkLENBQU47QUFBQSxTQUFELEVBQTRDLElBQTVDLENBQVY7QUFDRCxPQUZELE1BRU8sSUFBSUEsVUFBVSxJQUFJRCxJQUFJLEtBQUssRUFBM0IsRUFBK0I7QUFDcEMsYUFBS1csUUFBTCxDQUFjO0FBQ1pWLG9CQUFVLEVBQUUsS0FEQTtBQUVaQyxpQkFBTyxFQUFFQSxPQUFPLEdBQUc7QUFGUCxTQUFkO0FBSUQ7O0FBRURlLGdCQUFVLENBQUMsS0FBS1osVUFBTixFQUFrQkYsV0FBbEIsQ0FBVjtBQUNEOzs7NkJBSVE7QUFBQSxVQUdEZSxPQUhDLEdBSUQsS0FBS3BCLEtBSkosQ0FHRG9CLE9BSEM7QUFNTCxhQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBTUEsT0FBTixVQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBUSxLQUFLbkIsS0FBTCxDQUFXQyxJQUFuQixDQURGLEVBRUltQixRQUFRLENBQUMsS0FBS3BCLEtBQUwsQ0FBV0ssS0FBWCxHQUFtQixDQUFwQixDQUFSLEdBQWlDLENBQWpDLEtBQXNDLENBQXRDLEdBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLEdBRUQsRUFKSCxDQURBO0FBUUg7Ozs7RUExRW9CZ0IsNENBQUssQ0FBQ0MsUzs7QUE2RWhCeEIseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvVGVzdC5mM2E2N2UyOTgyOGIwYWFlZDI1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvUHVibGljLm1vZHVsZS5jc3MnO1xyXG5cclxuY2xhc3MgVHlwZXdyaXRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIGlzRGVsZXRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb29wTnVtOiAwLFxyXG4gICAgICAgICAgICB0eXBpbmdTcGVlZDogMTUwLFxyXG4gICAgICAgICAgICBjb3VudDogMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVUeXBlID0gdGhpcy5oYW5kbGVUeXBlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVUaW1lciA9IHRoaXMuaGFuZGxlVGltZXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gdGhpcy50aW1lci5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlVHlwZSgpO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmhhbmRsZVRpbWVyKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUaW1lcigpIHtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKT0+e3RoaXMudGltZXIoKTt9LDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHRpbWVyKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvdW50OiB0aGlzLnN0YXRlLmNvdW50ICsgMX0pO1xyXG4gICAgfVxyXG5cclxuICBcclxuICAgIGhhbmRsZVR5cGUoKSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YVRleHQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IHsgaXNEZWxldGluZywgbG9vcE51bSwgdGV4dCwgdHlwaW5nU3BlZWQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgIGNvbnN0IGkgPSBsb29wTnVtICUgZGF0YVRleHQubGVuZ3RoO1xyXG4gICAgICBjb25zdCBmdWxsVGV4dCA9IGRhdGFUZXh0W2ldO1xyXG4gIFxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICB0ZXh0OiBpc0RlbGV0aW5nID8gZnVsbFRleHQuc3Vic3RyaW5nKDAsIHRleHQubGVuZ3RoIC0gMSkgOiBmdWxsVGV4dC5zdWJzdHJpbmcoMCwgdGV4dC5sZW5ndGggKyAxKSxcclxuICAgICAgICB0eXBpbmdTcGVlZDogaXNEZWxldGluZyA/IDE1MCA6IDE1MFxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgaWYgKCFpc0RlbGV0aW5nICYmIHRleHQgPT09IGZ1bGxUZXh0KSB7ICAgICBcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0U3RhdGUoeyBpc0RlbGV0aW5nOiB0cnVlIH0pLCAxNTAwKTsgICBcclxuICAgICAgfSBlbHNlIGlmIChpc0RlbGV0aW5nICYmIHRleHQgPT09ICcnKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBpc0RlbGV0aW5nOiBmYWxzZSxcclxuICAgICAgICAgIGxvb3BOdW06IGxvb3BOdW0gKyAxXHJcbiAgICAgICAgfSk7ICAgICAgXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgc2V0VGltZW91dCh0aGlzLmhhbmRsZVR5cGUsIHR5cGluZ1NwZWVkKTtcclxuICAgIH07XHJcblxyXG5cclxuICBcclxuICAgIHJlbmRlcigpIHsgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgaGVhZGluZ1xyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoMT57IGhlYWRpbmcgfSZuYnNwO1xyXG4gICAgICAgICAgPHNwYW4+eyB0aGlzLnN0YXRlLnRleHQgfTwvc3Bhbj5cclxuICAgICAgICAgIHsgcGFyc2VJbnQodGhpcy5zdGF0ZS5jb3VudCAvIDIpICUgMiA9PT0wID9cclxuICAgICAgICAgICAgPHNwYW4+fDwvc3Bhbj5cclxuICAgICAgICAgIDonJ31cclxuICAgICAgICA8L2gxPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUeXBld3JpdGVyOyJdLCJzb3VyY2VSb290IjoiIn0=