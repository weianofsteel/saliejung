webpackHotUpdate_N_E("pages/Test",{

/***/ "./component/Public/Typewriter.js":
false,

/***/ "./css/Public.module.css":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./css/Public.module.css":
false,

/***/ "./node_modules/css-loader/dist/runtime/api.js":
false,

/***/ "./node_modules/react-typewriting-animation/lib/Typewriter.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-typewriting-animation/lib/Typewriter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports=(()=>{"use strict";var e={490:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=(r=n(798))&&r.__esModule?r:{default:r},s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={text:"",isDeleting:!1,loopNum:0,typingSpeed:150,isCursor:!0},n.handleType=n.handleType.bind(n),n.handleCursor=n.handleCursor.bind(n),n.timer=n.timer.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.handleType(),this.handleCursor()}},{key:"componentWillUnmount",value:function(){clearInterval(this.handleCursor)}},{key:"handleCursor",value:function(){var e=this;setInterval((function(){e.timer()}),500)}},{key:"timer",value:function(){!0===this.state.isCursor?this.setState({isCursor:!1}):this.setState({isCursor:!0})}},{key:"handleType",value:function(){var e=this,t=this.props,n=t.dataText,r=t.rotateSpeed,o=t.typeSpeed,i=this.state,s=i.isDeleting,u=i.loopNum,a=i.text,l=i.typingSpeed,p=n[u%n.length];this.setState({text:s?p.substring(0,a.length-1):p.substring(0,a.length+1),typingSpeed:s&&o||150}),s||a!==p?s&&""===a&&this.setState({isDeleting:!1,loopNum:u+1}):setTimeout((function(){return e.setState({isDeleting:!0})}),r||500),setTimeout(this.handleType,l)}},{key:"render",value:function(){var e=this.props,t=e.fontSize,n=e.color;return i.default.createElement("div",{style:{fontSize:t||"20px",color:n||"black"}},i.default.createElement("span",null,this.state.text),!0===this.state.isCursor?i.default.createElement("span",{style:{borderLeft:".1em solid black"}}):"")}}]),t}(i.default.Component);t.default=s},798:e=>{e.exports=__webpack_require__(/*! react */ "./node_modules/react/index.js")}},t={};return function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}(490)})();

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
false,

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
  }, "Carousel"), __jsx(react_typewriting_animation__WEBPACK_IMPORTED_MODULE_6___default.a, {
    rotateSpeed: 1500,
    typeSpeed: 150,
    heading: 'Typewriter',
    dataText: ['ONE', 'TWOOOOOOOOOO', 'THREE', 'FOUR'],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvbi9saWIvVHlwZXdyaXRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVGVzdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJUZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUIsYUFBYSxPQUFPLGNBQWMsc0NBQXNDLFNBQVMsRUFBRSxtQkFBbUIsZ0JBQWdCLFlBQVksV0FBVyxLQUFLLFdBQVcsK0dBQStHLHVCQUF1Qix3Q0FBd0MsaUNBQWlDLFVBQVUsZUFBZSxjQUFjLGVBQWUsOEVBQThFLFNBQVMsb0JBQW9CLDRGQUE0Rix1REFBdUQsNERBQTRELGdCQUFnQiw0REFBNEQsbUdBQW1HLHFCQUFxQiwySEFBMkgsMENBQTBDLGFBQWEsbURBQW1ELHNFQUFzRSxZQUFZLHlDQUF5Qyx1Q0FBdUMsRUFBRSw0Q0FBNEMsa0NBQWtDLEVBQUUsb0NBQW9DLFdBQVcsd0JBQXdCLFVBQVUsUUFBUSxFQUFFLDZCQUE2Qix3Q0FBd0MsWUFBWSxpQkFBaUIsWUFBWSxHQUFHLEVBQUUsa0NBQWtDLG9KQUFvSixlQUFlLGlGQUFpRixxQ0FBcUMsMEJBQTBCLHlCQUF5QixtQkFBbUIsY0FBYyxFQUFFLHlDQUF5QyxFQUFFLDhCQUE4Qix3Q0FBd0Msc0NBQXNDLE9BQU8scUNBQXFDLCtHQUErRyxPQUFPLCtCQUErQixPQUFPLEtBQUssc0JBQXNCLFlBQVksU0FBUyxVQUFVLG1CQUFPLENBQUMsNENBQU8sR0FBRyxNQUFNLHFCQUFxQiw0QkFBNEIsWUFBWSxZQUFZLHFDQUFxQyxNQUFNLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWxoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNmLFNBQ0ksTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFFSSxNQUFDLGtFQUFEO0FBQ0ksZUFBVyxFQUFFLElBRGpCO0FBRUksYUFBUyxFQUFFLEdBRmY7QUFHSSxXQUFPLEVBQUUsWUFIYjtBQUlJLFlBQVEsRUFBRSxDQUFDLEtBQUQsRUFBUSxjQUFSLEVBQXdCLE9BQXhCLEVBQWlDLE1BQWpDLENBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREo7QUFZSCxDQWJEOztLQUFNQSxJO0FBZVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1Rlc3QuN2VjYmJmZWI1MWE5YTNmOTBkYWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzPSgoKT0+e1widXNlIHN0cmljdFwiO3ZhciBlPXs0OTA6KGUsdCxuKT0+e09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByLG89ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciByPXRbbl07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX1yZXR1cm4gZnVuY3Rpb24odCxuLHIpe3JldHVybiBuJiZlKHQucHJvdG90eXBlLG4pLHImJmUodCxyKSx0fX0oKSxpPShyPW4oNzk4KSkmJnIuX19lc01vZHVsZT9yOntkZWZhdWx0OnJ9LHM9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChlKXshZnVuY3Rpb24oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLHQpO3ZhciBuPWZ1bmN0aW9uKGUsdCl7aWYoIWUpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiF0fHxcIm9iamVjdFwiIT10eXBlb2YgdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdD9lOnR9KHRoaXMsKHQuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YodCkpLmNhbGwodGhpcyxlKSk7cmV0dXJuIG4uc3RhdGU9e3RleHQ6XCJcIixpc0RlbGV0aW5nOiExLGxvb3BOdW06MCx0eXBpbmdTcGVlZDoxNTAsaXNDdXJzb3I6ITB9LG4uaGFuZGxlVHlwZT1uLmhhbmRsZVR5cGUuYmluZChuKSxuLmhhbmRsZUN1cnNvcj1uLmhhbmRsZUN1cnNvci5iaW5kKG4pLG4udGltZXI9bi50aW1lci5iaW5kKG4pLG59cmV0dXJuIGZ1bmN0aW9uKGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmbnVsbCE9PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIHQpO2UucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodCYmdC5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTplLGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLHQmJihPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKGUsdCk6ZS5fX3Byb3RvX189dCl9KHQsZSksbyh0LFt7a2V5OlwiY29tcG9uZW50RGlkTW91bnRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuaGFuZGxlVHlwZSgpLHRoaXMuaGFuZGxlQ3Vyc29yKCl9fSx7a2V5OlwiY29tcG9uZW50V2lsbFVubW91bnRcIix2YWx1ZTpmdW5jdGlvbigpe2NsZWFySW50ZXJ2YWwodGhpcy5oYW5kbGVDdXJzb3IpfX0se2tleTpcImhhbmRsZUN1cnNvclwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztzZXRJbnRlcnZhbCgoZnVuY3Rpb24oKXtlLnRpbWVyKCl9KSw1MDApfX0se2tleTpcInRpbWVyXCIsdmFsdWU6ZnVuY3Rpb24oKXshMD09PXRoaXMuc3RhdGUuaXNDdXJzb3I/dGhpcy5zZXRTdGF0ZSh7aXNDdXJzb3I6ITF9KTp0aGlzLnNldFN0YXRlKHtpc0N1cnNvcjohMH0pfX0se2tleTpcImhhbmRsZVR5cGVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD10aGlzLnByb3BzLG49dC5kYXRhVGV4dCxyPXQucm90YXRlU3BlZWQsbz10LnR5cGVTcGVlZCxpPXRoaXMuc3RhdGUscz1pLmlzRGVsZXRpbmcsdT1pLmxvb3BOdW0sYT1pLnRleHQsbD1pLnR5cGluZ1NwZWVkLHA9blt1JW4ubGVuZ3RoXTt0aGlzLnNldFN0YXRlKHt0ZXh0OnM/cC5zdWJzdHJpbmcoMCxhLmxlbmd0aC0xKTpwLnN1YnN0cmluZygwLGEubGVuZ3RoKzEpLHR5cGluZ1NwZWVkOnMmJm98fDE1MH0pLHN8fGEhPT1wP3MmJlwiXCI9PT1hJiZ0aGlzLnNldFN0YXRlKHtpc0RlbGV0aW5nOiExLGxvb3BOdW06dSsxfSk6c2V0VGltZW91dCgoZnVuY3Rpb24oKXtyZXR1cm4gZS5zZXRTdGF0ZSh7aXNEZWxldGluZzohMH0pfSkscnx8NTAwKSxzZXRUaW1lb3V0KHRoaXMuaGFuZGxlVHlwZSxsKX19LHtrZXk6XCJyZW5kZXJcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMucHJvcHMsdD1lLmZvbnRTaXplLG49ZS5jb2xvcjtyZXR1cm4gaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6e2ZvbnRTaXplOnR8fFwiMjBweFwiLGNvbG9yOm58fFwiYmxhY2tcIn19LGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLG51bGwsdGhpcy5zdGF0ZS50ZXh0KSwhMD09PXRoaXMuc3RhdGUuaXNDdXJzb3I/aS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIse3N0eWxlOntib3JkZXJMZWZ0OlwiLjFlbSBzb2xpZCBibGFja1wifX0pOlwiXCIpfX1dKSx0fShpLmRlZmF1bHQuQ29tcG9uZW50KTt0LmRlZmF1bHQ9c30sNzk4OmU9PntlLmV4cG9ydHM9cmVxdWlyZShcInJlYWN0XCIpfX0sdD17fTtyZXR1cm4gZnVuY3Rpb24gbihyKXtpZih0W3JdKXJldHVybiB0W3JdLmV4cG9ydHM7dmFyIG89dFtyXT17ZXhwb3J0czp7fX07cmV0dXJuIGVbcl0obyxvLmV4cG9ydHMsbiksby5leHBvcnRzfSg0OTApfSkoKTsiLCIvLyBpbXBvcnQgQ2Fyb3VzZWwyIGZyb20gJy4uLy4uL2NvbXBvbmVudC9QdWJsaWMvQ2Fyb3VzZWwyLmpzJztcclxuaW1wb3J0IHByb2Nlc3MwMSBmcm9tICcuLi8uLi9wdWJsaWMvcHJvY2VzczAxLnBuZyc7XHJcbmltcG9ydCBwcm9jZXNzMDIgZnJvbSAnLi4vLi4vcHVibGljL3Byb2Nlc3MwMi5wbmcnO1xyXG5pbXBvcnQgcHJvY2VzczAzIGZyb20gJy4uLy4uL3B1YmxpYy9wcm9jZXNzMDMucG5nJztcclxuaW1wb3J0IHBob3RvMyBmcm9tICcuLi8uLi9wdWJsaWMvMy5qcGVnJztcclxuaW1wb3J0IHBob3RvNCBmcm9tICcuLi8uLi9wdWJsaWMvNC5qcGVnJztcclxuLy8gaW1wb3J0IFR5cGV3cml0ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50L1B1YmxpYy9UeXBld3JpdGVyJztcclxuaW1wb3J0IFR5cGV3cml0ZXIgZnJvbSAncmVhY3QtdHlwZXdyaXRpbmctYW5pbWF0aW9uJ1xyXG5cclxuY29uc3QgVGVzdCA9ICgpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxkaXY+Q2Fyb3VzZWw8L2Rpdj5cclxuICAgICAgICAgICAgPFR5cGV3cml0ZXJcclxuICAgICAgICAgICAgICAgIHJvdGF0ZVNwZWVkPXsxNTAwfVxyXG4gICAgICAgICAgICAgICAgdHlwZVNwZWVkPXsxNTB9XHJcbiAgICAgICAgICAgICAgICBoZWFkaW5nPXsnVHlwZXdyaXRlcid9XHJcbiAgICAgICAgICAgICAgICBkYXRhVGV4dD17WydPTkUnLCAnVFdPT09PT09PT09PJywgJ1RIUkVFJywgJ0ZPVVInXX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVzdDsiXSwic291cmNlUm9vdCI6IiJ9