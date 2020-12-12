module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Test/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/Public/Typewriter.js":
/*!****************************************!*\
  !*** ./component/Public/Typewriter.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_Public_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css/Public.module.css */ "./css/Public.module.css");
/* harmony import */ var _css_Public_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_Public_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Public\\Typewriter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Typewriter extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 150,
      isCursor: true
    };
    this.handleType = this.handleType.bind(this);
    this.handleCursor = this.handleCursor.bind(this);
    this.timer = this.timer.bind(this);
  }

  componentDidMount() {
    this.handleType();
    this.handleCursor();
  }

  componentWillUnmount() {
    clearInterval(this.handleCursor);
  }

  handleCursor() {
    setInterval(() => {
      this.timer();
    }, 500);
  }

  timer() {
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

  handleType() {
    const {
      dataText
    } = this.props;
    const {
      isDeleting,
      loopNum,
      text,
      typingSpeed
    } = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];
    this.setState({
      text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? 150 : 150
    });

    if (!isDeleting && text === fullText) {
      setTimeout(() => this.setState({
        isDeleting: true
      }), 1500);
    } else if (isDeleting && text === '') {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1
      });
    }

    setTimeout(this.handleType, typingSpeed);
  }

  render() {
    const {
      heading
    } = this.props;
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
      className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cursor,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }
    }) : '');
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Typewriter);

/***/ }),

/***/ "./css/Public.module.css":
/*!*******************************!*\
  !*** ./css/Public.module.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cursor": "Public_cursor__R36bB"
};


/***/ }),

/***/ "./pages/Test/index.js":
/*!*****************************!*\
  !*** ./pages/Test/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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
/* harmony import */ var _component_Public_Typewriter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/Public/Typewriter */ "./component/Public/Typewriter.js");
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\pages\\Test\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import Carousel2 from '../../component/Public/Carousel2.js';







const Test = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "Carousel"), __jsx(_component_Public_Typewriter__WEBPACK_IMPORTED_MODULE_6__["default"], {
    heading: 'Typewriter',
    dataText: ['ONE', 'TWOOOOOOOOOO', 'THREE', 'FOUR'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Test);

/***/ }),

/***/ "./public/3.jpeg":
/*!***********************!*\
  !*** ./public/3.jpeg ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/3-f8376762ad1062bdc5cd1d08720162b8.jpeg";

/***/ }),

/***/ "./public/4.jpeg":
/*!***********************!*\
  !*** ./public/4.jpeg ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/4-c1c04d99b4e9ad7d40bbcd6801c37d5a.jpeg";

/***/ }),

/***/ "./public/process01.png":
/*!******************************!*\
  !*** ./public/process01.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/process01-88c12a1d1bfa7c0c778869e0d251e4ae.png";

/***/ }),

/***/ "./public/process02.png":
/*!******************************!*\
  !*** ./public/process02.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/process02-fe1b2f359eefdc715bd15f62fda78e2d.png";

/***/ }),

/***/ "./public/process03.png":
/*!******************************!*\
  !*** ./public/process03.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/process03-fcb8bbf35e28e8b1f5f8126ae5a2544c.png";

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9UeXBld3JpdGVyLmpzIiwid2VicGFjazovLy8uL2Nzcy9QdWJsaWMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9UZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy8zLmpwZWciLCJ3ZWJwYWNrOi8vLy4vcHVibGljLzQuanBlZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvcHJvY2VzczAxLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvcHJvY2VzczAyLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvcHJvY2VzczAzLnBuZyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIlR5cGV3cml0ZXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInRleHQiLCJpc0RlbGV0aW5nIiwibG9vcE51bSIsInR5cGluZ1NwZWVkIiwiaXNDdXJzb3IiLCJoYW5kbGVUeXBlIiwiYmluZCIsImhhbmRsZUN1cnNvciIsInRpbWVyIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInNldFN0YXRlIiwiZGF0YVRleHQiLCJpIiwibGVuZ3RoIiwiZnVsbFRleHQiLCJzdWJzdHJpbmciLCJzZXRUaW1lb3V0IiwicmVuZGVyIiwiaGVhZGluZyIsInN0eWxlcyIsImN1cnNvciIsIlRlc3QiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFD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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREo7QUFVSCxDQVhEOztBQWFlQSxtRUFBZixFOzs7Ozs7Ozs7OztBQ3JCQSxnRjs7Ozs7Ozs7Ozs7QUNBQSxnRjs7Ozs7Ozs7Ozs7QUNBQSx1Rjs7Ozs7Ozs7Ozs7QUNBQSx1Rjs7Ozs7Ozs7Ozs7QUNBQSx1Rjs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9UZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9UZXN0L2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvUHVibGljLm1vZHVsZS5jc3MnO1xyXG5cclxuY2xhc3MgVHlwZXdyaXRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIGlzRGVsZXRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb29wTnVtOiAwLFxyXG4gICAgICAgICAgICB0eXBpbmdTcGVlZDogMTUwLFxyXG4gICAgICAgICAgICBpc0N1cnNvcjogdHJ1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVUeXBlID0gdGhpcy5oYW5kbGVUeXBlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDdXJzb3IgPSB0aGlzLmhhbmRsZUN1cnNvci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSB0aGlzLnRpbWVyLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgdGhpcy5oYW5kbGVUeXBlKCk7XHJcbiAgICAgIHRoaXMuaGFuZGxlQ3Vyc29yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmhhbmRsZUN1cnNvcik7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ3Vyc29yKCkge1xyXG4gICAgICAgIHNldEludGVydmFsKCgpPT57dGhpcy50aW1lcigpO30sNTAwKTtcclxuICAgIH1cclxuXHJcbiAgICB0aW1lcigpIHtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmlzQ3Vyc29yID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzQ3Vyc29yOiBmYWxzZX0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzQ3Vyc29yOiB0cnVlfSk7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gIFxyXG4gICAgaGFuZGxlVHlwZSgpIHtcclxuICAgICAgY29uc3QgeyBkYXRhVGV4dCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3QgeyBpc0RlbGV0aW5nLCBsb29wTnVtLCB0ZXh0LCB0eXBpbmdTcGVlZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgY29uc3QgaSA9IGxvb3BOdW0gJSBkYXRhVGV4dC5sZW5ndGg7XHJcbiAgICAgIGNvbnN0IGZ1bGxUZXh0ID0gZGF0YVRleHRbaV07XHJcbiAgXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHRleHQ6IGlzRGVsZXRpbmcgPyBmdWxsVGV4dC5zdWJzdHJpbmcoMCwgdGV4dC5sZW5ndGggLSAxKSA6IGZ1bGxUZXh0LnN1YnN0cmluZygwLCB0ZXh0Lmxlbmd0aCArIDEpLFxyXG4gICAgICAgIHR5cGluZ1NwZWVkOiBpc0RlbGV0aW5nID8gMTUwIDogMTUwXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBpZiAoIWlzRGVsZXRpbmcgJiYgdGV4dCA9PT0gZnVsbFRleHQpIHsgICAgIFxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzRGVsZXRpbmc6IHRydWUgfSksIDE1MDApOyAgIFxyXG4gICAgICB9IGVsc2UgaWYgKGlzRGVsZXRpbmcgJiYgdGV4dCA9PT0gJycpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGlzRGVsZXRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgbG9vcE51bTogbG9vcE51bSArIDFcclxuICAgICAgICB9KTsgICAgICBcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBzZXRUaW1lb3V0KHRoaXMuaGFuZGxlVHlwZSwgdHlwaW5nU3BlZWQpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gIFxyXG4gICAgcmVuZGVyKCkgeyAgICBcclxuICAgICAgXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBoZWFkaW5nXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGgxPnsgaGVhZGluZyB9Jm5ic3A7XHJcbiAgICAgICAgICA8c3Bhbj57IHRoaXMuc3RhdGUudGV4dCB9PC9zcGFuPlxyXG4gICAgICAgICAgeyB0aGlzLnN0YXRlLmlzQ3Vyc29yID09PSB0cnVlID9cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY3Vyc29yfT48L3NwYW4+XHJcbiAgICAgICAgICA6Jyd9ICBcclxuICAgICAgICA8L2gxPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUeXBld3JpdGVyOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImN1cnNvclwiOiBcIlB1YmxpY19jdXJzb3JfX1IzNmJCXCJcbn07XG4iLCIvLyBpbXBvcnQgQ2Fyb3VzZWwyIGZyb20gJy4uLy4uL2NvbXBvbmVudC9QdWJsaWMvQ2Fyb3VzZWwyLmpzJztcclxuaW1wb3J0IHByb2Nlc3MwMSBmcm9tICcuLi8uLi9wdWJsaWMvcHJvY2VzczAxLnBuZyc7XHJcbmltcG9ydCBwcm9jZXNzMDIgZnJvbSAnLi4vLi4vcHVibGljL3Byb2Nlc3MwMi5wbmcnO1xyXG5pbXBvcnQgcHJvY2VzczAzIGZyb20gJy4uLy4uL3B1YmxpYy9wcm9jZXNzMDMucG5nJztcclxuaW1wb3J0IHBob3RvMyBmcm9tICcuLi8uLi9wdWJsaWMvMy5qcGVnJztcclxuaW1wb3J0IHBob3RvNCBmcm9tICcuLi8uLi9wdWJsaWMvNC5qcGVnJztcclxuaW1wb3J0IFR5cGV3cml0ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50L1B1YmxpYy9UeXBld3JpdGVyJztcclxuXHJcbmNvbnN0IFRlc3QgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2PkNhcm91c2VsPC9kaXY+XHJcbiAgICAgICAgICAgIDxUeXBld3JpdGVyXHJcbiAgICAgICAgICAgICAgICBoZWFkaW5nPXsnVHlwZXdyaXRlcid9XHJcbiAgICAgICAgICAgICAgICBkYXRhVGV4dD17WydPTkUnLCAnVFdPT09PT09PT09PJywgJ1RIUkVFJywgJ0ZPVVInXX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVzdDsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvMy1mODM3Njc2MmFkMTA2MmJkYzVjZDFkMDg3MjAxNjJiOC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzLzQtYzFjMDRkOTliNGU5YWQ3ZDQwYmJjZDY4MDFjMzdkNWEuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9wcm9jZXNzMDEtODhjMTJhMWQxYmZhN2MwYzc3ODg2OWUwZDI1MWU0YWUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Byb2Nlc3MwMi1mZTFiMmYzNTllZWZkYzcxNWJkMTVmNjJmZGE3OGUyZC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcHJvY2VzczAzLWZjYjhiYmYzNWUyOGU4YjFmNWY4MTI2YWU1YTI1NDRjLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=