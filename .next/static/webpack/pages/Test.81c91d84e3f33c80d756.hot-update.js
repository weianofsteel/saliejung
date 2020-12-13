webpackHotUpdate_N_E("pages/Test",{

/***/ "./node_modules/react-typewriting-animation/lib/Typewriter.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-typewriting-animation/lib/Typewriter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports=(()=>{"use strict";var e={490:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=(r=n(798))&&r.__esModule?r:{default:r},s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={text:"",isDeleting:!1,loopNum:0,typingSpeed:150,isCursor:!0},n.handleType=n.handleType.bind(n),n.handleCursor=n.handleCursor.bind(n),n.timer=n.timer.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.handleType(),this.handleCursor()}},{key:"componentWillUnmount",value:function(){clearInterval(this.handleCursor)}},{key:"handleCursor",value:function(){var e=this;setInterval((function(){e.timer()}),500)}},{key:"timer",value:function(){!0===this.state.isCursor?this.setState({isCursor:!1}):this.setState({isCursor:!0})}},{key:"handleType",value:function(){var e=this,t=this.props,n=t.dataText,r=t.rotateSpeed,o=t.typeSpeed,i=this.state,s=i.isDeleting,u=i.loopNum,a=i.text,l=i.typingSpeed,p=n[u%n.length];this.setState({text:s?p.substring(0,a.length-1):p.substring(0,a.length+1),typingSpeed:s&&o||150}),s||a!==p?s&&""===a&&this.setState({isDeleting:!1,loopNum:u+1}):setTimeout((function(){return e.setState({isDeleting:!0})}),r||500),setTimeout(this.handleType,l)}},{key:"render",value:function(){var e=this.props,t=e.fontSize,n=e.color;return i.default.createElement("div",{style:{fontSize:t||"20px",color:n||"black"}},i.default.createElement("span",null,this.state.text),!0===this.state.isCursor?i.default.createElement("span",{style:{borderLeft:".1em solid black"}}):"")}}]),t}(i.default.Component);t.default=s},798:e=>{e.exports=__webpack_require__(/*! react */ "./node_modules/react/index.js")}},t={};return function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}(490)})();

/***/ }),

/***/ "./pages/Test/index.js":
/*!*****************************!*\
  !*** ./pages/Test/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_process01_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/process01.png */ "./public/process01.png");
/* harmony import */ var _public_process01_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_process01_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_process02_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/process02.png */ "./public/process02.png");
/* harmony import */ var _public_process02_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_process02_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_process03_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/process03.png */ "./public/process03.png");
/* harmony import */ var _public_process03_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_process03_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_3_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/3.jpeg */ "./public/3.jpeg");
/* harmony import */ var _public_3_jpeg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_3_jpeg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_4_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/4.jpeg */ "./public/4.jpeg");
/* harmony import */ var _public_4_jpeg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_4_jpeg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_typewriting_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-typewriting-animation */ "./node_modules/react-typewriting-animation/lib/Typewriter.js");
/* harmony import */ var react_typewriting_animation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_typewriting_animation__WEBPACK_IMPORTED_MODULE_6__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\pages\\Test\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import Carousel2 from '../../component/Public/Carousel2.js';




 // import Typewriter from '../../component/Public/Typewriter';



var Test = function Test() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "Carousel"));
};

_c = Test;
/* harmony default export */ __webpack_exports__["default"] = (Test);

var _c;

$RefreshReg$(_c, "Test");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvbi9saWIvVHlwZXdyaXRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVGVzdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJUZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBcUIsYUFBYSxPQUFPLGNBQWMsc0NBQXNDLFNBQVMsRUFBRSxtQkFBbUIsZ0JBQWdCLFlBQVksV0FBVyxLQUFLLFdBQVcsK0dBQStHLHVCQUF1Qix3Q0FBd0MsaUNBQWlDLFVBQVUsZUFBZSxjQUFjLGVBQWUsOEVBQThFLFNBQVMsb0JBQW9CLDRGQUE0Rix1REFBdUQsNERBQTRELGdCQUFnQiw0REFBNEQsbUdBQW1HLHFCQUFxQiwySEFBMkgsMENBQTBDLGFBQWEsbURBQW1ELHNFQUFzRSxZQUFZLHlDQUF5Qyx1Q0FBdUMsRUFBRSw0Q0FBNEMsa0NBQWtDLEVBQUUsb0NBQW9DLFdBQVcsd0JBQXdCLFVBQVUsUUFBUSxFQUFFLDZCQUE2Qix3Q0FBd0MsWUFBWSxpQkFBaUIsWUFBWSxHQUFHLEVBQUUsa0NBQWtDLG9KQUFvSixlQUFlLGlGQUFpRixxQ0FBcUMsMEJBQTBCLHlCQUF5QixtQkFBbUIsY0FBYyxFQUFFLHlDQUF5QyxFQUFFLDhCQUE4Qix3Q0FBd0Msc0NBQXNDLE9BQU8scUNBQXFDLCtHQUErRyxPQUFPLCtCQUErQixPQUFPLEtBQUssc0JBQXNCLFlBQVksU0FBUyxVQUFVLG1CQUFPLENBQUMsNENBQU8sR0FBRyxNQUFNLHFCQUFxQiw0QkFBNEIsWUFBWSxZQUFZLHFDQUFxQyxNQUFNLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWxoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNmLFNBQ0ksTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosQ0FESjtBQVlILENBYkQ7O0tBQU1BLEk7QUFlU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvVGVzdC44MWM5MWQ4NGUzZjMzYzgwZDc1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHM9KCgpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9ezQ5MDooZSx0LG4pPT57T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHIsbz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIHI9dFtuXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fXJldHVybiBmdW5jdGlvbih0LG4scil7cmV0dXJuIG4mJmUodC5wcm90b3R5cGUsbiksciYmZSh0LHIpLHR9fSgpLGk9KHI9big3OTgpKSYmci5fX2VzTW9kdWxlP3I6e2RlZmF1bHQ6cn0scz1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KGUpeyFmdW5jdGlvbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsdCk7dmFyIG49ZnVuY3Rpb24oZSx0KXtpZighZSl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0P2U6dH0odGhpcywodC5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSkuY2FsbCh0aGlzLGUpKTtyZXR1cm4gbi5zdGF0ZT17dGV4dDpcIlwiLGlzRGVsZXRpbmc6ITEsbG9vcE51bTowLHR5cGluZ1NwZWVkOjE1MCxpc0N1cnNvcjohMH0sbi5oYW5kbGVUeXBlPW4uaGFuZGxlVHlwZS5iaW5kKG4pLG4uaGFuZGxlQ3Vyc29yPW4uaGFuZGxlQ3Vyc29yLmJpbmQobiksbi50aW1lcj1uLnRpbWVyLmJpbmQobiksbn1yZXR1cm4gZnVuY3Rpb24oZSx0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiZudWxsIT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIit0eXBlb2YgdCk7ZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0JiZ0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmUsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksdCYmKE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YoZSx0KTplLl9fcHJvdG9fXz10KX0odCxlKSxvKHQsW3trZXk6XCJjb21wb25lbnREaWRNb3VudFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5oYW5kbGVUeXBlKCksdGhpcy5oYW5kbGVDdXJzb3IoKX19LHtrZXk6XCJjb21wb25lbnRXaWxsVW5tb3VudFwiLHZhbHVlOmZ1bmN0aW9uKCl7Y2xlYXJJbnRlcnZhbCh0aGlzLmhhbmRsZUN1cnNvcil9fSx7a2V5OlwiaGFuZGxlQ3Vyc29yXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3NldEludGVydmFsKChmdW5jdGlvbigpe2UudGltZXIoKX0pLDUwMCl9fSx7a2V5OlwidGltZXJcIix2YWx1ZTpmdW5jdGlvbigpeyEwPT09dGhpcy5zdGF0ZS5pc0N1cnNvcj90aGlzLnNldFN0YXRlKHtpc0N1cnNvcjohMX0pOnRoaXMuc2V0U3RhdGUoe2lzQ3Vyc29yOiEwfSl9fSx7a2V5OlwiaGFuZGxlVHlwZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PXRoaXMucHJvcHMsbj10LmRhdGFUZXh0LHI9dC5yb3RhdGVTcGVlZCxvPXQudHlwZVNwZWVkLGk9dGhpcy5zdGF0ZSxzPWkuaXNEZWxldGluZyx1PWkubG9vcE51bSxhPWkudGV4dCxsPWkudHlwaW5nU3BlZWQscD1uW3Ulbi5sZW5ndGhdO3RoaXMuc2V0U3RhdGUoe3RleHQ6cz9wLnN1YnN0cmluZygwLGEubGVuZ3RoLTEpOnAuc3Vic3RyaW5nKDAsYS5sZW5ndGgrMSksdHlwaW5nU3BlZWQ6cyYmb3x8MTUwfSksc3x8YSE9PXA/cyYmXCJcIj09PWEmJnRoaXMuc2V0U3RhdGUoe2lzRGVsZXRpbmc6ITEsbG9vcE51bTp1KzF9KTpzZXRUaW1lb3V0KChmdW5jdGlvbigpe3JldHVybiBlLnNldFN0YXRlKHtpc0RlbGV0aW5nOiEwfSl9KSxyfHw1MDApLHNldFRpbWVvdXQodGhpcy5oYW5kbGVUeXBlLGwpfX0se2tleTpcInJlbmRlclwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5wcm9wcyx0PWUuZm9udFNpemUsbj1lLmNvbG9yO3JldHVybiBpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTp7Zm9udFNpemU6dHx8XCIyMHB4XCIsY29sb3I6bnx8XCJibGFja1wifX0saS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsbnVsbCx0aGlzLnN0YXRlLnRleHQpLCEwPT09dGhpcy5zdGF0ZS5pc0N1cnNvcj9pLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIix7c3R5bGU6e2JvcmRlckxlZnQ6XCIuMWVtIHNvbGlkIGJsYWNrXCJ9fSk6XCJcIil9fV0pLHR9KGkuZGVmYXVsdC5Db21wb25lbnQpO3QuZGVmYXVsdD1zfSw3OTg6ZT0+e2UuZXhwb3J0cz1yZXF1aXJlKFwicmVhY3RcIil9fSx0PXt9O3JldHVybiBmdW5jdGlvbiBuKHIpe2lmKHRbcl0pcmV0dXJuIHRbcl0uZXhwb3J0czt2YXIgbz10W3JdPXtleHBvcnRzOnt9fTtyZXR1cm4gZVtyXShvLG8uZXhwb3J0cyxuKSxvLmV4cG9ydHN9KDQ5MCl9KSgpOyIsIi8vIGltcG9ydCBDYXJvdXNlbDIgZnJvbSAnLi4vLi4vY29tcG9uZW50L1B1YmxpYy9DYXJvdXNlbDIuanMnO1xyXG5pbXBvcnQgcHJvY2VzczAxIGZyb20gJy4uLy4uL3B1YmxpYy9wcm9jZXNzMDEucG5nJztcclxuaW1wb3J0IHByb2Nlc3MwMiBmcm9tICcuLi8uLi9wdWJsaWMvcHJvY2VzczAyLnBuZyc7XHJcbmltcG9ydCBwcm9jZXNzMDMgZnJvbSAnLi4vLi4vcHVibGljL3Byb2Nlc3MwMy5wbmcnO1xyXG5pbXBvcnQgcGhvdG8zIGZyb20gJy4uLy4uL3B1YmxpYy8zLmpwZWcnO1xyXG5pbXBvcnQgcGhvdG80IGZyb20gJy4uLy4uL3B1YmxpYy80LmpwZWcnO1xyXG4vLyBpbXBvcnQgVHlwZXdyaXRlciBmcm9tICcuLi8uLi9jb21wb25lbnQvUHVibGljL1R5cGV3cml0ZXInO1xyXG5pbXBvcnQgVHlwZXdyaXRlciBmcm9tICdyZWFjdC10eXBld3JpdGluZy1hbmltYXRpb24nXHJcblxyXG5jb25zdCBUZXN0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGRpdj5DYXJvdXNlbDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPFR5cGV3cml0ZXJcclxuICAgICAgICAgICAgICAgIHJvdGF0ZVNwZWVkPXsxNTAwfVxyXG4gICAgICAgICAgICAgICAgdHlwZVNwZWVkPXsxNTB9XHJcbiAgICAgICAgICAgICAgICBoZWFkaW5nPXsnVHlwZXdyaXRlcid9XHJcbiAgICAgICAgICAgICAgICBkYXRhVGV4dD17WydPTkUnLCAnVFdPT09PT09PT09PJywgJ1RIUkVFJywgJ0ZPVVInXX1cclxuICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==