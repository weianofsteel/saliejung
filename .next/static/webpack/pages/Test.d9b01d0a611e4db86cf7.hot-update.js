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
      var dataText = _this.props.dataText;
      var _this$state = _this.state,
          isDeleting = _this$state.isDeleting,
          loopNum = _this$state.loopNum,
          text = _this$state.text,
          typingSpeed = _this$state.typingSpeed;
      var i = loopNum % dataText.length;
      var fullText = dataText[i];

      _this.setState({
        text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
        typingSpeed: isDeleting ? 150 : 150
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
      typingSpeed: 300
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1B1YmxpYy9UeXBld3JpdGVyLmpzIl0sIm5hbWVzIjpbIlR5cGV3cml0ZXIiLCJwcm9wcyIsImRhdGFUZXh0Iiwic3RhdGUiLCJpc0RlbGV0aW5nIiwibG9vcE51bSIsInRleHQiLCJ0eXBpbmdTcGVlZCIsImkiLCJsZW5ndGgiLCJmdWxsVGV4dCIsInNldFN0YXRlIiwic3Vic3RyaW5nIiwic2V0VGltZW91dCIsImhhbmRsZVR5cGUiLCJiaW5kIiwiaGVhZGluZyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1BLFU7Ozs7O0FBRUYsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxxTkFnQk4sWUFBTTtBQUFBLFVBQ1RDLFFBRFMsR0FDSSxNQUFLRCxLQURULENBQ1RDLFFBRFM7QUFBQSx3QkFFa0MsTUFBS0MsS0FGdkM7QUFBQSxVQUVUQyxVQUZTLGVBRVRBLFVBRlM7QUFBQSxVQUVHQyxPQUZILGVBRUdBLE9BRkg7QUFBQSxVQUVZQyxJQUZaLGVBRVlBLElBRlo7QUFBQSxVQUVrQkMsV0FGbEIsZUFFa0JBLFdBRmxCO0FBR2pCLFVBQU1DLENBQUMsR0FBR0gsT0FBTyxHQUFHSCxRQUFRLENBQUNPLE1BQTdCO0FBQ0EsVUFBTUMsUUFBUSxHQUFHUixRQUFRLENBQUNNLENBQUQsQ0FBekI7O0FBRUEsWUFBS0csUUFBTCxDQUFjO0FBQ1pMLFlBQUksRUFBRUYsVUFBVSxHQUFHTSxRQUFRLENBQUNFLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0JOLElBQUksQ0FBQ0csTUFBTCxHQUFjLENBQXBDLENBQUgsR0FBNENDLFFBQVEsQ0FBQ0UsU0FBVCxDQUFtQixDQUFuQixFQUFzQk4sSUFBSSxDQUFDRyxNQUFMLEdBQWMsQ0FBcEMsQ0FEaEQ7QUFFWkYsbUJBQVcsRUFBRUgsVUFBVSxHQUFHLEdBQUgsR0FBUztBQUZwQixPQUFkOztBQUtBLFVBQUksQ0FBQ0EsVUFBRCxJQUFlRSxJQUFJLEtBQUtJLFFBQTVCLEVBQXNDO0FBQ3BDRyxrQkFBVSxDQUFDO0FBQUEsaUJBQU0sTUFBS0YsUUFBTCxDQUFjO0FBQUVQLHNCQUFVLEVBQUU7QUFBZCxXQUFkLENBQU47QUFBQSxTQUFELEVBQTRDLEdBQTVDLENBQVY7QUFDRCxPQUZELE1BRU8sSUFBSUEsVUFBVSxJQUFJRSxJQUFJLEtBQUssRUFBM0IsRUFBK0I7QUFDcEMsY0FBS0ssUUFBTCxDQUFjO0FBQ1pQLG9CQUFVLEVBQUUsS0FEQTtBQUVaQyxpQkFBTyxFQUFFQSxPQUFPLEdBQUc7QUFGUCxTQUFkO0FBSUQ7O0FBRURRLGdCQUFVLENBQUMsTUFBS0MsVUFBTixFQUFrQlAsV0FBbEIsQ0FBVjtBQUNELEtBckNrQjs7QUFFZixVQUFLSixLQUFMLEdBQWE7QUFDVEcsVUFBSSxFQUFFLEVBREc7QUFFVEYsZ0JBQVUsRUFBRSxLQUZIO0FBR1RDLGFBQU8sRUFBRSxDQUhBO0FBSVRFLGlCQUFXLEVBQUU7QUFKSixLQUFiO0FBT0EsVUFBS08sVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQix5R0FBbEI7QUFUZTtBQVVsQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBS0QsVUFBTDtBQUNEOzs7NkJBeUJRO0FBQUEsVUFHREUsT0FIQyxHQUlELEtBQUtmLEtBSkosQ0FHRGUsT0FIQztBQU1MLGFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFNQSxPQUFOLFVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFRLEtBQUtiLEtBQUwsQ0FBV0csSUFBbkIsQ0FERixFQUVFO0FBQU0sVUFBRSxFQUFDLFFBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLENBREE7QUFNSDs7OztFQXJEb0JXLDRDQUFLLENBQUNDLFM7O0FBd0RoQmxCLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1Rlc3QuZDliMDFkMGE2MTFlNGRiODZjZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBUeXBld3JpdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgaXNEZWxldGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvb3BOdW06IDAsXHJcbiAgICAgICAgICAgIHR5cGluZ1NwZWVkOiAzMDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlVHlwZSA9IHRoaXMuaGFuZGxlVHlwZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlVHlwZSgpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaGFuZGxlVHlwZSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgeyBkYXRhVGV4dCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3QgeyBpc0RlbGV0aW5nLCBsb29wTnVtLCB0ZXh0LCB0eXBpbmdTcGVlZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgY29uc3QgaSA9IGxvb3BOdW0gJSBkYXRhVGV4dC5sZW5ndGg7XHJcbiAgICAgIGNvbnN0IGZ1bGxUZXh0ID0gZGF0YVRleHRbaV07XHJcbiAgXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHRleHQ6IGlzRGVsZXRpbmcgPyBmdWxsVGV4dC5zdWJzdHJpbmcoMCwgdGV4dC5sZW5ndGggLSAxKSA6IGZ1bGxUZXh0LnN1YnN0cmluZygwLCB0ZXh0Lmxlbmd0aCArIDEpLFxyXG4gICAgICAgIHR5cGluZ1NwZWVkOiBpc0RlbGV0aW5nID8gMTUwIDogMTUwXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBpZiAoIWlzRGVsZXRpbmcgJiYgdGV4dCA9PT0gZnVsbFRleHQpIHsgICAgIFxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzRGVsZXRpbmc6IHRydWUgfSksIDUwMCk7ICAgXHJcbiAgICAgIH0gZWxzZSBpZiAoaXNEZWxldGluZyAmJiB0ZXh0ID09PSAnJykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgaXNEZWxldGluZzogZmFsc2UsXHJcbiAgICAgICAgICBsb29wTnVtOiBsb29wTnVtICsgMVxyXG4gICAgICAgIH0pOyAgICAgIFxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHNldFRpbWVvdXQodGhpcy5oYW5kbGVUeXBlLCB0eXBpbmdTcGVlZCk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgcmVuZGVyKCkgeyAgICBcclxuICAgICAgXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBoZWFkaW5nXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGgxPnsgaGVhZGluZyB9Jm5ic3A7XHJcbiAgICAgICAgICA8c3Bhbj57IHRoaXMuc3RhdGUudGV4dCB9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gaWQ9XCJjdXJzb3JcIj48L3NwYW4+XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHlwZXdyaXRlcjsiXSwic291cmNlUm9vdCI6IiJ9