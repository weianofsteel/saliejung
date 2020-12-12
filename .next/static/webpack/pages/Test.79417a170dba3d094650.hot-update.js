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
    value: function componentWillUnmount() {
      clearInterval(this.handleCursor);
    }
  }, {
    key: "handleCursor",
    value: function handleCursor() {
      var _this2 = this;

      setInterval(function () {
        _this2.timer();
      }, 500);
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
        }, 3000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1B1YmxpYy9UeXBld3JpdGVyLmpzIl0sIm5hbWVzIjpbIlR5cGV3cml0ZXIiLCJwcm9wcyIsInN0YXRlIiwidGV4dCIsImlzRGVsZXRpbmciLCJsb29wTnVtIiwidHlwaW5nU3BlZWQiLCJpc0N1cnNvciIsImhhbmRsZVR5cGUiLCJiaW5kIiwiaGFuZGxlQ3Vyc29yIiwidGltZXIiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJzZXRTdGF0ZSIsImRhdGFUZXh0IiwiaSIsImxlbmd0aCIsImZ1bGxUZXh0Iiwic3Vic3RyaW5nIiwic2V0VGltZW91dCIsImhlYWRpbmciLCJzdHlsZXMiLCJjdXJzb3IiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLFU7Ozs7O0FBRUYsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxVQUFJLEVBQUUsRUFERztBQUVUQyxnQkFBVSxFQUFFLEtBRkg7QUFHVEMsYUFBTyxFQUFFLENBSEE7QUFJVEMsaUJBQVcsRUFBRSxHQUpKO0FBS1RDLGNBQVEsRUFBRTtBQUxELEtBQWI7QUFRQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLHlHQUFsQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIseUdBQXBCO0FBQ0EsVUFBS0UsS0FBTCxHQUFhLE1BQUtBLEtBQUwsQ0FBV0YsSUFBWCx5R0FBYjtBQVplO0FBYWxCOzs7O3dDQUVtQjtBQUNsQixXQUFLRCxVQUFMO0FBQ0EsV0FBS0UsWUFBTDtBQUNEOzs7MkNBRXNCO0FBQ25CRSxtQkFBYSxDQUFDLEtBQUtGLFlBQU4sQ0FBYjtBQUNIOzs7bUNBRWM7QUFBQTs7QUFDWEcsaUJBQVcsQ0FBQyxZQUFJO0FBQUMsY0FBSSxDQUFDRixLQUFMO0FBQWMsT0FBcEIsRUFBcUIsR0FBckIsQ0FBWDtBQUNIOzs7NEJBRU87QUFDSixVQUFHLEtBQUtULEtBQUwsQ0FBV0ssUUFBWCxLQUF3QixJQUEzQixFQUFpQztBQUM3QixhQUFLTyxRQUFMLENBQWM7QUFBQ1Asa0JBQVEsRUFBRTtBQUFYLFNBQWQ7QUFDSCxPQUZELE1BRU87QUFDSCxhQUFLTyxRQUFMLENBQWM7QUFBQ1Asa0JBQVEsRUFBRTtBQUFYLFNBQWQ7QUFDSDtBQUNKOzs7aUNBR1k7QUFBQTs7QUFBQSxVQUNIUSxRQURHLEdBQ1UsS0FBS2QsS0FEZixDQUNIYyxRQURHO0FBQUEsd0JBRXdDLEtBQUtiLEtBRjdDO0FBQUEsVUFFSEUsVUFGRyxlQUVIQSxVQUZHO0FBQUEsVUFFU0MsT0FGVCxlQUVTQSxPQUZUO0FBQUEsVUFFa0JGLElBRmxCLGVBRWtCQSxJQUZsQjtBQUFBLFVBRXdCRyxXQUZ4QixlQUV3QkEsV0FGeEI7QUFHWCxVQUFNVSxDQUFDLEdBQUdYLE9BQU8sR0FBR1UsUUFBUSxDQUFDRSxNQUE3QjtBQUNBLFVBQU1DLFFBQVEsR0FBR0gsUUFBUSxDQUFDQyxDQUFELENBQXpCO0FBRUEsV0FBS0YsUUFBTCxDQUFjO0FBQ1pYLFlBQUksRUFBRUMsVUFBVSxHQUFHYyxRQUFRLENBQUNDLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0JoQixJQUFJLENBQUNjLE1BQUwsR0FBYyxDQUFwQyxDQUFILEdBQTRDQyxRQUFRLENBQUNDLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0JoQixJQUFJLENBQUNjLE1BQUwsR0FBYyxDQUFwQyxDQURoRDtBQUVaWCxtQkFBVyxFQUFFRixVQUFVLEdBQUcsR0FBSCxHQUFTO0FBRnBCLE9BQWQ7O0FBS0EsVUFBSSxDQUFDQSxVQUFELElBQWVELElBQUksS0FBS2UsUUFBNUIsRUFBc0M7QUFDcENFLGtCQUFVLENBQUM7QUFBQSxpQkFBTSxNQUFJLENBQUNOLFFBQUwsQ0FBYztBQUFFVixzQkFBVSxFQUFFO0FBQWQsV0FBZCxDQUFOO0FBQUEsU0FBRCxFQUE0QyxJQUE1QyxDQUFWO0FBQ0QsT0FGRCxNQUVPLElBQUlBLFVBQVUsSUFBSUQsSUFBSSxLQUFLLEVBQTNCLEVBQStCO0FBQ3BDLGFBQUtXLFFBQUwsQ0FBYztBQUNaVixvQkFBVSxFQUFFLEtBREE7QUFFWkMsaUJBQU8sRUFBRUEsT0FBTyxHQUFHO0FBRlAsU0FBZDtBQUlEOztBQUVEZSxnQkFBVSxDQUFDLEtBQUtaLFVBQU4sRUFBa0JGLFdBQWxCLENBQVY7QUFDRDs7OzZCQUlRO0FBQUEsVUFHRGUsT0FIQyxHQUlELEtBQUtwQixLQUpKLENBR0RvQixPQUhDO0FBTUwsYUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQU1BLE9BQU4sVUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVEsS0FBS25CLEtBQUwsQ0FBV0MsSUFBbkIsQ0FERixFQUVJLEtBQUtELEtBQUwsQ0FBV0ssUUFBWCxLQUF3QixJQUF4QixHQUNBO0FBQU0saUJBQVMsRUFBRWUsNkRBQU0sQ0FBQ0MsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURBLEdBRUQsRUFKSCxDQURBO0FBUUg7Ozs7RUE5RW9CQyw0Q0FBSyxDQUFDQyxTOztBQWlGaEJ6Qix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9UZXN0Ljc5NDE3YTE3MGRiYTNkMDk0NjUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2Nzcy9QdWJsaWMubW9kdWxlLmNzcyc7XHJcblxyXG5jbGFzcyBUeXBld3JpdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgaXNEZWxldGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvb3BOdW06IDAsXHJcbiAgICAgICAgICAgIHR5cGluZ1NwZWVkOiAxNTAsXHJcbiAgICAgICAgICAgIGlzQ3Vyc29yOiB0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVR5cGUgPSB0aGlzLmhhbmRsZVR5cGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUN1cnNvciA9IHRoaXMuaGFuZGxlQ3Vyc29yLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IHRoaXMudGltZXIuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICB0aGlzLmhhbmRsZVR5cGUoKTtcclxuICAgICAgdGhpcy5oYW5kbGVDdXJzb3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaGFuZGxlQ3Vyc29yKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDdXJzb3IoKSB7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCk9Pnt0aGlzLnRpbWVyKCk7fSw1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIHRpbWVyKCkge1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuaXNDdXJzb3IgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNDdXJzb3I6IGZhbHNlfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNDdXJzb3I6IHRydWV9KTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgXHJcbiAgICBoYW5kbGVUeXBlKCkge1xyXG4gICAgICBjb25zdCB7IGRhdGFUZXh0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCB7IGlzRGVsZXRpbmcsIGxvb3BOdW0sIHRleHQsIHR5cGluZ1NwZWVkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICBjb25zdCBpID0gbG9vcE51bSAlIGRhdGFUZXh0Lmxlbmd0aDtcclxuICAgICAgY29uc3QgZnVsbFRleHQgPSBkYXRhVGV4dFtpXTtcclxuICBcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgdGV4dDogaXNEZWxldGluZyA/IGZ1bGxUZXh0LnN1YnN0cmluZygwLCB0ZXh0Lmxlbmd0aCAtIDEpIDogZnVsbFRleHQuc3Vic3RyaW5nKDAsIHRleHQubGVuZ3RoICsgMSksXHJcbiAgICAgICAgdHlwaW5nU3BlZWQ6IGlzRGVsZXRpbmcgPyAxNTAgOiAxNTBcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIGlmICghaXNEZWxldGluZyAmJiB0ZXh0ID09PSBmdWxsVGV4dCkgeyAgICAgXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNEZWxldGluZzogdHJ1ZSB9KSwgMzAwMCk7ICAgXHJcbiAgICAgIH0gZWxzZSBpZiAoaXNEZWxldGluZyAmJiB0ZXh0ID09PSAnJykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgaXNEZWxldGluZzogZmFsc2UsXHJcbiAgICAgICAgICBsb29wTnVtOiBsb29wTnVtICsgMVxyXG4gICAgICAgIH0pOyAgICAgIFxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHNldFRpbWVvdXQodGhpcy5oYW5kbGVUeXBlLCB0eXBpbmdTcGVlZCk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgXHJcbiAgICByZW5kZXIoKSB7ICAgIFxyXG4gICAgICBcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGhlYWRpbmdcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8aDE+eyBoZWFkaW5nIH0mbmJzcDtcclxuICAgICAgICAgIDxzcGFuPnsgdGhpcy5zdGF0ZS50ZXh0IH08L3NwYW4+XHJcbiAgICAgICAgICB7IHRoaXMuc3RhdGUuaXNDdXJzb3IgPT09IHRydWUgP1xyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jdXJzb3J9Pjwvc3Bhbj5cclxuICAgICAgICAgIDonJ30gIFxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFR5cGV3cml0ZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==