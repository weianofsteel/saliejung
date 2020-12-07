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

/***/ "./pages/Test/index.js":
/*!*****************************!*\
  !*** ./pages/Test/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_process01_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/process01.png */ \"./public/process01.png\");\n/* harmony import */ var _public_process01_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_process01_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_process02_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/process02.png */ \"./public/process02.png\");\n/* harmony import */ var _public_process02_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_process02_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_process03_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/process03.png */ \"./public/process03.png\");\n/* harmony import */ var _public_process03_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_process03_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_3_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/3.jpeg */ \"./public/3.jpeg\");\n/* harmony import */ var _public_3_jpeg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_3_jpeg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_4_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/4.jpeg */ \"./public/4.jpeg\");\n/* harmony import */ var _public_4_jpeg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_4_jpeg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_customize_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-customize-carousel */ \"react-customize-carousel\");\n/* harmony import */ var react_customize_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_customize_carousel__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/wangweian/Desktop/saliejung-portfolio/pages/Test/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n// import Carousel2 from '../../component/Public/Carousel2.js';\n\n\n\n\n // import { Carousel } from 'react-customize-carousel';\n\n\n\nconst Test = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }, \"Carousel\"), __jsx(react_customize_carousel__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    imgsrc: [_public_process01_png__WEBPACK_IMPORTED_MODULE_1___default.a, _public_process02_png__WEBPACK_IMPORTED_MODULE_2___default.a, _public_process03_png__WEBPACK_IMPORTED_MODULE_3___default.a, _public_3_jpeg__WEBPACK_IMPORTED_MODULE_4___default.a],\n    rotateBy: 2,\n    width: '600px',\n    height: '500px',\n    navigateButton: true,\n    controlButton: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Test);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9UZXN0L2luZGV4LmpzPzBjNGEiXSwibmFtZXMiOlsiVGVzdCIsInByb2Nlc3MwMSIsInByb2Nlc3MwMiIsInByb2Nlc3MwMyIsInBob3RvMyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBOztBQUdBLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBQ2YsU0FDSSxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUVJLE1BQUMsK0RBQUQ7QUFDSSxVQUFNLEVBQUUsQ0FBQ0MsNERBQUQsRUFBWUMsNERBQVosRUFBdUJDLDREQUF2QixFQUFrQ0MscURBQWxDLENBRFo7QUFFSSxZQUFRLEVBQUUsQ0FGZDtBQUdJLFNBQUssRUFBRSxPQUhYO0FBSUksVUFBTSxFQUFFLE9BSlo7QUFLSSxrQkFBYyxFQUFFLElBTHBCO0FBTUksaUJBQWEsRUFBRSxJQU5uQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FESjtBQWFILENBZEQ7O0FBZ0JlSixtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL1Rlc3QvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgQ2Fyb3VzZWwyIGZyb20gJy4uLy4uL2NvbXBvbmVudC9QdWJsaWMvQ2Fyb3VzZWwyLmpzJztcbmltcG9ydCBwcm9jZXNzMDEgZnJvbSAnLi4vLi4vcHVibGljL3Byb2Nlc3MwMS5wbmcnO1xuaW1wb3J0IHByb2Nlc3MwMiBmcm9tICcuLi8uLi9wdWJsaWMvcHJvY2VzczAyLnBuZyc7XG5pbXBvcnQgcHJvY2VzczAzIGZyb20gJy4uLy4uL3B1YmxpYy9wcm9jZXNzMDMucG5nJztcbmltcG9ydCBwaG90bzMgZnJvbSAnLi4vLi4vcHVibGljLzMuanBlZyc7XG5pbXBvcnQgcGhvdG80IGZyb20gJy4uLy4uL3B1YmxpYy80LmpwZWcnO1xuLy8gaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1jdXN0b21pemUtY2Fyb3VzZWwnO1xuaW1wb3J0IEN1dG9taXplQ2Fyb3VzZWwgZnJvbSAncmVhY3QtY3VzdG9taXplLWNhcm91c2VsJztcblxuXG5jb25zdCBUZXN0ID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPGRpdj5DYXJvdXNlbDwvZGl2PlxuICAgICAgICAgICAgPEN1dG9taXplQ2Fyb3VzZWxcbiAgICAgICAgICAgICAgICBpbWdzcmM9e1twcm9jZXNzMDEsIHByb2Nlc3MwMiwgcHJvY2VzczAzLCBwaG90bzNdfVxuICAgICAgICAgICAgICAgIHJvdGF0ZUJ5PXsyfVxuICAgICAgICAgICAgICAgIHdpZHRoPXsnNjAwcHgnfVxuICAgICAgICAgICAgICAgIGhlaWdodD17JzUwMHB4J31cbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZUJ1dHRvbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICBjb250cm9sQnV0dG9uPXt0cnVlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Test/index.js\n");

/***/ }),

/***/ "./public/3.jpeg":
/*!***********************!*\
  !*** ./public/3.jpeg ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/3-f8376762ad1062bdc5cd1d08720162b8.jpeg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvMy5qcGVnPzc4NTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9wdWJsaWMvMy5qcGVnLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzLzMtZjgzNzY3NjJhZDEwNjJiZGM1Y2QxZDA4NzIwMTYyYjguanBlZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/3.jpeg\n");

/***/ }),

/***/ "./public/4.jpeg":
/*!***********************!*\
  !*** ./public/4.jpeg ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/4-c1c04d99b4e9ad7d40bbcd6801c37d5a.jpeg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvNC5qcGVnPzg2NWMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9wdWJsaWMvNC5qcGVnLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzLzQtYzFjMDRkOTliNGU5YWQ3ZDQwYmJjZDY4MDFjMzdkNWEuanBlZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/4.jpeg\n");

/***/ }),

/***/ "./public/process01.png":
/*!******************************!*\
  !*** ./public/process01.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/process01-88c12a1d1bfa7c0c778869e0d251e4ae.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvcHJvY2VzczAxLnBuZz85MDBhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vcHVibGljL3Byb2Nlc3MwMS5wbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcHJvY2VzczAxLTg4YzEyYTFkMWJmYTdjMGM3Nzg4NjllMGQyNTFlNGFlLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/process01.png\n");

/***/ }),

/***/ "./public/process02.png":
/*!******************************!*\
  !*** ./public/process02.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/process02-fe1b2f359eefdc715bd15f62fda78e2d.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvcHJvY2VzczAyLnBuZz80MjAzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vcHVibGljL3Byb2Nlc3MwMi5wbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcHJvY2VzczAyLWZlMWIyZjM1OWVlZmRjNzE1YmQxNWY2MmZkYTc4ZTJkLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/process02.png\n");

/***/ }),

/***/ "./public/process03.png":
/*!******************************!*\
  !*** ./public/process03.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/process03-fcb8bbf35e28e8b1f5f8126ae5a2544c.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvcHJvY2VzczAzLnBuZz83ZjZmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vcHVibGljL3Byb2Nlc3MwMy5wbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcHJvY2VzczAzLWZjYjhiYmYzNWUyOGU4YjFmNWY4MTI2YWU1YTI1NDRjLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/process03.png\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-customize-carousel":
/*!*******************************************!*\
  !*** external "react-customize-carousel" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-customize-carousel\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jdXN0b21pemUtY2Fyb3VzZWxcIj83MDI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWN1c3RvbWl6ZS1jYXJvdXNlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWN1c3RvbWl6ZS1jYXJvdXNlbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-customize-carousel\n");

/***/ })

/******/ });