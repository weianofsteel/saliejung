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
      dataText,
      rotateSpeed,
      typeSpeed
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
      typingSpeed: isDeleting ? typeSpeed ? typeSpeed : 150 : 150
    });

    if (!isDeleting && text === fullText) {
      setTimeout(() => this.setState({
        isDeleting: true
      }), rotateSpeed ? rotateSpeed : 500);
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
    rotateSpeed: 1500,
    typeSpeed: 150,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9UeXBld3JpdGVyLmpzIiwid2VicGFjazovLy8uL2Nzcy9QdWJsaWMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9UZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy8zLmpwZWciLCJ3ZWJwYWNrOi8vLy4vcHVibGljLzQuanBlZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvcHJvY2VzczAxLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvcHJvY2VzczAyLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvcHJvY2VzczAzLnBuZyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIlR5cGV3cml0ZXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInRleHQiLCJpc0RlbGV0aW5nIiwibG9vcE51bSIsInR5cGluZ1NwZWVkIiwiaXNDdXJzb3IiLCJoYW5kbGVUeXBlIiwiYmluZCIsImhhbmRsZUN1cnNvciIsInRpbWVyIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInNldFN0YXRlIiwiZGF0YVRleHQiLCJyb3RhdGVTcGVlZCIsInR5cGVTcGVlZCIsImkiLCJsZW5ndGgiLCJmdWxsVGV4dCIsInN1YnN0cmluZyIsInNldFRpbWVvdXQiLCJyZW5kZXIiLCJoZWFkaW5nIiwic3R5bGVzIiwiY3Vyc29yIiwiVGVzdCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7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QUQ7QUFDSSxlQUFXLEVBQUUsSUFEakI7QUFFSSxhQUFTLEVBQUUsR0FGZjtBQUdJLFdBQU8sRUFBRSxZQUhiO0FBSUksWUFBUSxFQUFFLENBQUMsS0FBRCxFQUFRLGNBQVIsRUFBd0IsT0FBeEIsRUFBaUMsTUFBakMsQ0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FESjtBQVlILENBYkQ7O0FBZWVBLG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDdkJBLGdGOzs7Ozs7Ozs7OztBQ0FBLGdGOzs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL1Rlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL1Rlc3QvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2Nzcy9QdWJsaWMubW9kdWxlLmNzcyc7XHJcblxyXG5jbGFzcyBUeXBld3JpdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgaXNEZWxldGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvb3BOdW06IDAsXHJcbiAgICAgICAgICAgIHR5cGluZ1NwZWVkOiAxNTAsXHJcbiAgICAgICAgICAgIGlzQ3Vyc29yOiB0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVR5cGUgPSB0aGlzLmhhbmRsZVR5cGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUN1cnNvciA9IHRoaXMuaGFuZGxlQ3Vyc29yLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IHRoaXMudGltZXIuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICB0aGlzLmhhbmRsZVR5cGUoKTtcclxuICAgICAgdGhpcy5oYW5kbGVDdXJzb3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaGFuZGxlQ3Vyc29yKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDdXJzb3IoKSB7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCk9Pnt0aGlzLnRpbWVyKCk7fSw1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIHRpbWVyKCkge1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuaXNDdXJzb3IgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNDdXJzb3I6IGZhbHNlfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNDdXJzb3I6IHRydWV9KTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgXHJcbiAgICBoYW5kbGVUeXBlKCkge1xyXG4gICAgICBjb25zdCB7IGRhdGFUZXh0LCByb3RhdGVTcGVlZCwgdHlwZVNwZWVkIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCB7IGlzRGVsZXRpbmcsIGxvb3BOdW0sIHRleHQsIHR5cGluZ1NwZWVkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICBjb25zdCBpID0gbG9vcE51bSAlIGRhdGFUZXh0Lmxlbmd0aDtcclxuICAgICAgY29uc3QgZnVsbFRleHQgPSBkYXRhVGV4dFtpXTtcclxuICBcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgdGV4dDogaXNEZWxldGluZyA/IGZ1bGxUZXh0LnN1YnN0cmluZygwLCB0ZXh0Lmxlbmd0aCAtIDEpIDogZnVsbFRleHQuc3Vic3RyaW5nKDAsIHRleHQubGVuZ3RoICsgMSksXHJcbiAgICAgICAgdHlwaW5nU3BlZWQ6IGlzRGVsZXRpbmcgPyAodHlwZVNwZWVkP3R5cGVTcGVlZDoxNTApIDogMTUwXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBpZiAoIWlzRGVsZXRpbmcgJiYgdGV4dCA9PT0gZnVsbFRleHQpIHsgICAgIFxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzRGVsZXRpbmc6IHRydWUgfSksIChyb3RhdGVTcGVlZD9yb3RhdGVTcGVlZDo1MDApKTsgICBcclxuICAgICAgfSBlbHNlIGlmIChpc0RlbGV0aW5nICYmIHRleHQgPT09ICcnKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBpc0RlbGV0aW5nOiBmYWxzZSxcclxuICAgICAgICAgIGxvb3BOdW06IGxvb3BOdW0gKyAxXHJcbiAgICAgICAgfSk7ICAgICAgXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgc2V0VGltZW91dCh0aGlzLmhhbmRsZVR5cGUsIHR5cGluZ1NwZWVkKTtcclxuICAgIH07XHJcblxyXG5cclxuICBcclxuICAgIHJlbmRlcigpIHsgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgaGVhZGluZ1xyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoMT57IGhlYWRpbmcgfSZuYnNwO1xyXG4gICAgICAgICAgPHNwYW4+eyB0aGlzLnN0YXRlLnRleHQgfTwvc3Bhbj5cclxuICAgICAgICAgIHsgdGhpcy5zdGF0ZS5pc0N1cnNvciA9PT0gdHJ1ZSA/XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmN1cnNvcn0+PC9zcGFuPlxyXG4gICAgICAgICAgOicnfSAgXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHlwZXdyaXRlcjsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjdXJzb3JcIjogXCJQdWJsaWNfY3Vyc29yX19SMzZiQlwiXG59O1xuIiwiLy8gaW1wb3J0IENhcm91c2VsMiBmcm9tICcuLi8uLi9jb21wb25lbnQvUHVibGljL0Nhcm91c2VsMi5qcyc7XHJcbmltcG9ydCBwcm9jZXNzMDEgZnJvbSAnLi4vLi4vcHVibGljL3Byb2Nlc3MwMS5wbmcnO1xyXG5pbXBvcnQgcHJvY2VzczAyIGZyb20gJy4uLy4uL3B1YmxpYy9wcm9jZXNzMDIucG5nJztcclxuaW1wb3J0IHByb2Nlc3MwMyBmcm9tICcuLi8uLi9wdWJsaWMvcHJvY2VzczAzLnBuZyc7XHJcbmltcG9ydCBwaG90bzMgZnJvbSAnLi4vLi4vcHVibGljLzMuanBlZyc7XHJcbmltcG9ydCBwaG90bzQgZnJvbSAnLi4vLi4vcHVibGljLzQuanBlZyc7XHJcbmltcG9ydCBUeXBld3JpdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudC9QdWJsaWMvVHlwZXdyaXRlcic7XHJcblxyXG5jb25zdCBUZXN0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGRpdj5DYXJvdXNlbDwvZGl2PlxyXG4gICAgICAgICAgICA8VHlwZXdyaXRlclxyXG4gICAgICAgICAgICAgICAgcm90YXRlU3BlZWQ9ezE1MDB9XHJcbiAgICAgICAgICAgICAgICB0eXBlU3BlZWQ9ezE1MH1cclxuICAgICAgICAgICAgICAgIGhlYWRpbmc9eydUeXBld3JpdGVyJ31cclxuICAgICAgICAgICAgICAgIGRhdGFUZXh0PXtbJ09ORScsICdUV09PT09PT09PT08nLCAnVEhSRUUnLCAnRk9VUiddfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXN0OyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy8zLWY4Mzc2NzYyYWQxMDYyYmRjNWNkMWQwODcyMDE2MmI4LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvNC1jMWMwNGQ5OWI0ZTlhZDdkNDBiYmNkNjgwMWMzN2Q1YS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Byb2Nlc3MwMS04OGMxMmExZDFiZmE3YzBjNzc4ODY5ZTBkMjUxZTRhZS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcHJvY2VzczAyLWZlMWIyZjM1OWVlZmRjNzE1YmQxNWY2MmZkYTc4ZTJkLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9wcm9jZXNzMDMtZmNiOGJiZjM1ZTI4ZThiMWY1ZjgxMjZhZTVhMjU0NGMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==