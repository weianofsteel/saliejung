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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Work/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/Public/Drawer.js":
/*!************************************!*\
  !*** ./component/Public/Drawer.js ***!
  \************************************/
/*! exports provided: Drawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return Drawer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/Public.module.css */ "./css/Public.module.css");
/* harmony import */ var _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_Public_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Public\\Drawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  link: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    letterSpacing: '1px',
    marginLeft: '32px',
    color: '#8F8F8F',
    fontSize: '18px',
    "&:hover": {
      color: 'black'
    }
  },
  drawerLink: {
    fontFamily: 'Roboto',
    textAlign: 'left',
    fontWeight: 400,
    letterSpacing: '1px',
    color: '#8F8F8F',
    fontSize: '22px',
    "&:hover": {
      color: 'black'
    }
  },
  drawerHeader: {
    paddingTop: '3rem'
  }
});
const Drawer = props => {
  const classes = useStyles();
  const {
    handleDrawerClose
  } = props;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      height: '100vh',
      marginLeft: '6%',
      marginRight: '6%',
      paddingTop: "10px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.drawerTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, "saliejung")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: handleDrawerClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      color: '#B8B8B8'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    className: classes.drawerHeader,
    style: {
      marginTop: '4rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/Work",
    underline: "none",
    className: classes.drawerLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }, "WORK")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    className: classes.drawerHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/Writing",
    underline: "none",
    className: classes.drawerLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }, "WRITINGS")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    className: classes.drawerHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/About",
    underline: "none",
    className: classes.drawerLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, "ABOUT")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    className: classes.drawerHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/Resume",
    underline: "none",
    className: classes.drawerLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  }, "RESUME"))))));
};

/***/ }),

/***/ "./component/Public/Footer.js":
/*!************************************!*\
  !*** ./component/Public/Footer.js ***!
  \************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/Public.module.css */ "./css/Public.module.css");
/* harmony import */ var _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_Public_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Public\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  link: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    lineHeight: '1.5rem',
    color: '#8F8F8F',
    fontSize: '1rem',
    "&:hover": {
      color: 'black'
    }
  },
  copyright: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    lineHeight: '1rem',
    fontSize: '0.9rem',
    color: '#8F8F8F',
    "&:hover": {
      color: 'black'
    }
  }
});
const Footer = () => {
  const classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 1,
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footerBlock,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footerTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, "Salie ShengJung Chien --- Product Designer")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footerLeftTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, "Open to new opportunities"), __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    underline: "none",
    color: "inherit",
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footerLeftContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, "saliejung47@gmail.com"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    underline: "none",
    className: classes.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, "Linkedin"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    underline: "none",
    className: classes.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, "Medium"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 1,
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footerBlock2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.copyright,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, "Designed by Chien ShengJung \xA9 2020 all rights reserve")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.copyright,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, "Developed by ", __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    underline: "none",
    className: classes.copyright,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 38
    }
  }, "Wang WeiAn")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      height: '3rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }));
};

/***/ }),

/***/ "./component/Public/Header.js":
/*!************************************!*\
  !*** ./component/Public/Header.js ***!
  \************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/Public.module.css */ "./css/Public.module.css");
/* harmony import */ var _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_Public_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Public\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])({
  link: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    letterSpacing: '1px',
    marginLeft: '32px',
    color: '#8F8F8F',
    fontSize: '18px',
    "&:hover": {
      color: 'black'
    }
  },
  drawerLink: {
    fontFamily: 'Roboto',
    textAlign: 'left',
    fontWeight: 400,
    letterSpacing: '1px',
    color: '#8F8F8F',
    fontSize: '22px',
    "&:hover": {
      color: 'black'
    }
  },
  drawerHeader: {
    paddingLeft: '2rem',
    paddingRight: '2rem',
    marginTop: '3rem'
  }
});
const Header = props => {
  const classes = useStyles(); // const [ drawerOpen, setDrawerOpen ] = React.useState(false);
  // const handleDrawerOpen = () => {
  //     setDrawerOpen(true);
  // }
  // const handleDrawerClose = () => {
  //     setDrawerOpen(false);
  // }

  const {
    handleDrawerOpen
  } = props;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 2,
    style: {
      paddingTop: "10px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    underline: "none",
    style: {
      color: '#1F1F1F'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 83
    }
  }, "saliejung"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default.a, {
    mdDown: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.menuBar,
    style: {
      marginTop: '0.5rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/Work",
    underline: "none",
    className: classes.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 33
    }
  }, "WORK")), __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/Writing",
    underline: "none",
    className: classes.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 33
    }
  }, "WRITINGS")), __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/About",
    underline: "none",
    className: classes.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 33
    }
  }, "ABOUT")), __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/Resume",
    underline: "none",
    className: classes.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 33
    }
  }, "RESUME")))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default.a, {
    lgUp: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    sm: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    sm: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: handleDrawerOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "large",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 33
    }
  })))))));
};

/***/ }),

/***/ "./component/Work/Showcase.js":
/*!************************************!*\
  !*** ./component/Work/Showcase.js ***!
  \************************************/
/*! exports provided: Showcase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Showcase", function() { return Showcase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/Work.module.css */ "./css/Work.module.css");
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_Work_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_agoda_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/agoda-logo.png */ "./public/agoda-logo.png");
/* harmony import */ var _public_agoda_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_agoda_logo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_showcase_showcase01_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/showcase/showcase01.png */ "./public/showcase/showcase01.png");
/* harmony import */ var _public_showcase_showcase01_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_showcase_showcase01_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_showcase_showcase02_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/showcase/showcase02.png */ "./public/showcase/showcase02.png");
/* harmony import */ var _public_showcase_showcase02_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_showcase_showcase02_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_showcase_showcase03_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/showcase/showcase03.png */ "./public/showcase/showcase03.png");
/* harmony import */ var _public_showcase_showcase03_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_showcase_showcase03_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_showcase_showcase04_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/showcase/showcase04.png */ "./public/showcase/showcase04.png");
/* harmony import */ var _public_showcase_showcase04_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_showcase_showcase04_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_showcase_showcase05_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/showcase/showcase05.png */ "./public/showcase/showcase05.png");
/* harmony import */ var _public_showcase_showcase05_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_showcase_showcase05_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_work_work07_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/work/work07.png */ "./public/work/work07.png");
/* harmony import */ var _public_work_work07_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_work_work07_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_work_work08_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/work/work08.png */ "./public/work/work08.png");
/* harmony import */ var _public_work_work08_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_work_work08_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Work\\Showcase.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["makeStyles"])({
  imgBox: {
    backgroundColor: '#F5F5F5',
    height: '30rem',
    width: '100%',
    overflow: 'hidden'
  },
  imgBoxOnHover: {
    backgroundColor: '#1F1F1F',
    opacity: '90%',
    height: '30rem',
    width: '100%',
    overflow: 'hidden'
  },
  img1: {
    opacity: '10%'
  },
  showcaseBlock: {
    marginTop: '0.3rem'
  }
});
const Showcase = () => {
  const classes = useStyles();
  const [box1, setBox1] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  const [box2, setBox2] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  const [box3, setBox3] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  const [box4, setBox4] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  const [box5, setBox5] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  const [box6, setBox6] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  const [box7, setBox7] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  const [box8, setBox8] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);

  const handleBox1On = () => {
    setBox1(false);
  };

  const handleBox2On = () => {
    setBox2(false);
  };

  const handleBox3On = () => {
    setBox3(false);
  };

  const handleBox4On = () => {
    setBox4(false);
  };

  const handleBox5On = () => {
    setBox5(false);
  };

  const handleBox6On = () => {
    setBox6(false);
  };

  const handleBox7On = () => {
    setBox7(false);
  };

  const handleBox8On = () => {
    setBox8(false);
  };

  const handleMouseLeave = () => {
    setBox1(true);
    setBox2(true);
    setBox3(true);
    setBox4(true);
    setBox5(true);
    setBox6(true);
    setBox7(true);
    setBox8(true);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/Work/Agoda-design",
    underline: "none",
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: box1 === true ? classes.imgBox : classes.imgBoxOnHover,
    onMouseEnter: handleBox1On,
    onMouseLeave: handleMouseLeave,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _public_agoda_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    className: box1 === true ? '' : classes.img1,
    style: {
      marginTop: '10rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 29
    }
  }), box1 === true ? '' : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.titleOnHover,
    style: {
      marginTop: '-16rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 37
    }
  }, "2019/20 \u2022 Agoda Design"), __jsx("p", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title2OnHover,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 37
    }
  }, "An exciting adventure in Bangkok and travel industry"))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/Work/Agoda-flights",
    underline: "none",
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: box2 === true ? classes.imgBox : classes.imgBoxOnHover,
    onMouseEnter: handleBox2On,
    onMouseLeave: handleMouseLeave,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _public_showcase_showcase01_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    className: box2 === true ? '' : classes.img1,
    style: {
      marginTop: '10rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 29
    }
  }), box2 === true ? '' : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.titleOnHover,
    style: {
      marginTop: '-28rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 37
    }
  }, "2020 \u2022 Agoda Flights \u2022 App Design"), __jsx("p", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title2OnHover,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 37
    }
  }, "Complete your journey with seat selection")))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    className: classes.showcaseBlock,
    spacing: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    underline: "none",
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: box3 === true ? classes.imgBox : classes.imgBoxOnHover,
    onMouseEnter: handleBox3On,
    onMouseLeave: handleMouseLeave,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _public_showcase_showcase02_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: box3 === true ? '' : classes.img1,
    style: {
      marginTop: '4rem',
      height: '70%',
      width: '70%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 29
    }
  }), box3 === true ? '' : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.titleOnHover,
    style: {
      marginTop: '-24rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 37
    }
  }, "2017 \u2022 KINJO Jewelry \u2022 Web Design"), __jsx("p", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title2OnHover,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 37
    }
  }, "An e-commerce site brings a 12-year brand a new life"))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    underline: "none",
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: box4 === true ? classes.imgBox : classes.imgBoxOnHover,
    onMouseEnter: handleBox4On,
    onMouseLeave: handleMouseLeave,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _public_showcase_showcase03_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    className: box4 === true ? '' : classes.img1,
    style: {
      marginTop: '4rem',
      height: '70%',
      width: '70%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 29
    }
  }), box4 === true ? '' : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.titleOnHover,
    style: {
      marginTop: '-24rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 37
    }
  }, "2017 \u2022 KINJO Jewelry \u2022 Web Design"), __jsx("p", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title2OnHover,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 37
    }
  }, "An e-commerce site brings a 12-year brand a new life")))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    className: classes.showcaseBlock,
    spacing: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    underline: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: box5 === true ? classes.imgBox : classes.imgBoxOnHover,
    onMouseEnter: handleBox5On,
    onMouseLeave: handleMouseLeave,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _public_showcase_showcase04_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    className: box5 === true ? '' : classes.img1,
    style: {
      marginTop: '5rem',
      height: '70%',
      width: '70%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 29
    }
  }), box5 === true ? '' : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.titleOnHover,
    style: {
      marginTop: '-24rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 37
    }
  }, "2017 \u2022 KINJO Jewelry \u2022 Web Design"), __jsx("p", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title2OnHover,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 37
    }
  }, "An e-commerce site brings a 12-year brand a new life"))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    underline: "none",
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: box6 === true ? classes.imgBox : classes.imgBoxOnHover,
    onMouseEnter: handleBox6On,
    onMouseLeave: handleMouseLeave,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _public_showcase_showcase05_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    className: box6 === true ? '' : classes.img1,
    style: {
      marginTop: '4rem',
      height: '70%',
      width: '70%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 29
    }
  }), box6 === true ? '' : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.titleOnHover,
    style: {
      marginTop: '-24rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 37
    }
  }, "2017 \u2022 KINJO Jewelry \u2022 Web Design"), __jsx("p", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title2OnHover,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 37
    }
  }, "An e-commerce site brings a 12-year brand a new life")))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    className: classes.showcaseBlock,
    spacing: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    underline: "none",
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: box7 === true ? classes.imgBox : classes.imgBoxOnHover,
    onMouseEnter: handleBox7On,
    onMouseLeave: handleMouseLeave,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _public_work_work07_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    className: box7 === true ? '' : classes.img1,
    style: {
      marginTop: '4rem',
      height: '70%',
      width: '70%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 29
    }
  }), box7 === true ? '' : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.titleOnHover,
    style: {
      marginTop: '-24rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 37
    }
  }, "2017 \u2022 KINJO Jewelry \u2022 Web Design"), __jsx("p", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title2OnHover,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 37
    }
  }, "An e-commerce site brings a 12-year brand a new life"))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    underline: "none",
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: box8 === true ? classes.imgBox : classes.imgBoxOnHover,
    onMouseEnter: handleBox8On,
    onMouseLeave: handleMouseLeave,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _public_work_work08_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    className: box8 === true ? '' : classes.img1,
    style: {
      marginTop: '4rem',
      height: '70%',
      width: '70%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 29
    }
  }), box8 === true ? '' : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.titleOnHover,
    style: {
      marginTop: '-24rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 37
    }
  }, "2017 \u2022 KINJO Jewelry \u2022 Web Design"), __jsx("p", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title2OnHover,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 37
    }
  }, "An e-commerce site brings a 12-year brand a new life")))))));
};

/***/ }),

/***/ "./css/Public.module.css":
/*!*******************************!*\
  !*** ./css/Public.module.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"carouselOuter": "Public_carouselOuter__2mZ_d",
	"imgDescription": "Public_imgDescription__OxYbQ",
	"carouselImg": "Public_carouselImg__1wL3T",
	"captionContainer": "Public_captionContainer__ai16q",
	"drawerTitle": "Public_drawerTitle__-LES8",
	"link": "Public_link__281dG",
	"drawerButton": "Public_drawerButton___UFr-",
	"main1": "Public_main1__5wC86",
	"title": "Public_title___x1Vc",
	"menuBar": "Public_menuBar__33KXz",
	"footerBlock": "Public_footerBlock__zqA5Z",
	"footerBlock2": "Public_footerBlock2__2GT1y",
	"footerTitle": "Public_footerTitle__FOfLm",
	"copyright": "Public_copyright__3IRf2",
	"footerLeftTitle": "Public_footerLeftTitle__1r1A2",
	"footerLeftContent": "Public_footerLeftContent__3jURW"
};


/***/ }),

/***/ "./css/Work.module.css":
/*!*****************************!*\
  !*** ./css/Work.module.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main": "Work_main__M9mb7",
	"title": "Work_title__33qL8",
	"showcaseBox": "Work_showcaseBox__24zvM",
	"img": "Work_img__1o5uQ",
	"titleOnHover": "Work_titleOnHover__22K80",
	"title2OnHover": "Work_title2OnHover__3mWQK",
	"title2": "Work_title2__XMg-g",
	"title3": "Work_title3__1MRen",
	"title4": "Work_title4__Tub1j",
	"article": "Work_article__1JNTH",
	"content": "Work_content__30Lji",
	"contentTitle": "Work_contentTitle__1Xeas",
	"contentDetail": "Work_contentDetail__24OPV",
	"dotLine": "Work_dotLine__2mNn8",
	"designHighlight": "Work_designHighlight__1ZL2m",
	"designHighlightTitle": "Work_designHighlightTitle__20aT_",
	"designHighlightContent": "Work_designHighlightContent__ah4LR",
	"gallery1": "Work_gallery1__3Il-3",
	"imgDescription": "Work_imgDescription__18cVq",
	"reflection": "Work_reflection__S9eYp",
	"dotAlign": "Work_dotAlign__1PRmF",
	"scrollDown": "Work_scrollDown__3lrDJ",
	"progressMain": "Work_progressMain__2frQi",
	"progressTitle1": "Work_progressTitle1__31mUH",
	"progressTitle2": "Work_progressTitle2__3V9Ns",
	"competitiveAnalysisTitle1": "Work_competitiveAnalysisTitle1__29sSd",
	"competitiveAnalysisTitle2": "Work_competitiveAnalysisTitle2__anAae",
	"competitiveAnalysisContent": "Work_competitiveAnalysisContent__2UVKW",
	"imgDescription2": "Work_imgDescription2__38Oth",
	"researchTitle": "Work_researchTitle__3xF0n",
	"collectInsightContent": "Work_collectInsightContent__1o7Yj",
	"process2Img": "Work_process2Img__33r8P",
	"imgDescription3": "Work_imgDescription3__o1pyd",
	"imgBlock": "Work_imgBlock__11xRZ",
	"description": "Work_description__rosFV",
	"password": "Work_password__3ypUo",
	"header": "Work_header__3h15_",
	"img01": "Work_img01__oTjPF",
	"flights01": "Work_flights01__3iXax",
	"footer": "Work_footer__1wOtN",
	"designContent": "Work_designContent__2zzGW",
	"designTitle": "Work_designTitle__3N-fF"
};


/***/ }),

/***/ "./pages/Work/index.js":
/*!*****************************!*\
  !*** ./pages/Work/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css/Work.module.css */ "./css/Work.module.css");
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_Work_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_Public_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/Public/Header.js */ "./component/Public/Header.js");
/* harmony import */ var _component_Public_Footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/Public/Footer.js */ "./component/Public/Footer.js");
/* harmony import */ var _component_Work_Showcase_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/Work/Showcase.js */ "./component/Work/Showcase.js");
/* harmony import */ var _component_Public_Drawer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/Public/Drawer.js */ "./component/Public/Drawer.js");
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\pages\\Work\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Work = () => {
  const [drawer, setDrawer] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const handleDrawerOpen = () => {
    setDrawer(true);
  };

  const handleDrawerClose = () => {
    setDrawer(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, drawer == false ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, __jsx(_component_Public_Header_js__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    handleDrawerOpen: handleDrawerOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.main,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, "Work"), __jsx("div", {
    style: {
      marginTop: "6%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, __jsx(_component_Work_Showcase_js__WEBPACK_IMPORTED_MODULE_4__["Showcase"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, __jsx(_component_Public_Footer_js__WEBPACK_IMPORTED_MODULE_3__["Footer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }))) : '', drawer == true ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      backgroundColor: '#1f1f1f'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, __jsx(_component_Public_Drawer_js__WEBPACK_IMPORTED_MODULE_5__["Drawer"], {
    handleDrawerClose: handleDrawerClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }))) : '');
};

/* harmony default export */ __webpack_exports__["default"] = (Work);

/***/ }),

/***/ "./public/agoda-logo.png":
/*!*******************************!*\
  !*** ./public/agoda-logo.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/agoda-logo-17a94789bebf7dbd67bdb2386e87546c.png";

/***/ }),

/***/ "./public/showcase/showcase01.png":
/*!****************************************!*\
  !*** ./public/showcase/showcase01.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/showcase01-6b0e7ef241b2feb9eccf94f2aef66871.png";

/***/ }),

/***/ "./public/showcase/showcase02.png":
/*!****************************************!*\
  !*** ./public/showcase/showcase02.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/showcase02-c498983ef29c54002eef3e6ef7d3469d.png";

/***/ }),

/***/ "./public/showcase/showcase03.png":
/*!****************************************!*\
  !*** ./public/showcase/showcase03.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/showcase03-d0c252f8f7bebd798e91915ecfaf7042.png";

/***/ }),

/***/ "./public/showcase/showcase04.png":
/*!****************************************!*\
  !*** ./public/showcase/showcase04.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/showcase04-6fa2225df6b2c9f97f6939d8ebe6fc55.png";

/***/ }),

/***/ "./public/showcase/showcase05.png":
/*!****************************************!*\
  !*** ./public/showcase/showcase05.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/showcase05-bebd6bdb3c05e4f62646d9c84c5e9567.png";

/***/ }),

/***/ "./public/work/work07.png":
/*!********************************!*\
  !*** ./public/work/work07.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/work07-2618eeff0b7be710e33a6be0269d9d88.png";

/***/ }),

/***/ "./public/work/work08.png":
/*!********************************!*\
  !*** ./public/work/work08.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9EcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1dvcmsvU2hvd2Nhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vY3NzL1B1YmxpYy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2Nzcy9Xb3JrLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvV29yay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYWdvZGEtbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3Nob3djYXNlL3Nob3djYXNlMDEucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9zaG93Y2FzZS9zaG93Y2FzZTAyLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc2hvd2Nhc2Uvc2hvd2Nhc2UwMy5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3Nob3djYXNlL3Nob3djYXNlMDQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9zaG93Y2FzZS9zaG93Y2FzZTA1LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvd29yay93b3JrMDcucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy93b3JrL3dvcmswOC5wbmciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJsaW5rIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwibWFyZ2luTGVmdCIsImNvbG9yIiwiZm9udFNpemUiLCJkcmF3ZXJMaW5rIiwidGV4dEFsaWduIiwiZHJhd2VySGVhZGVyIiwicGFkZGluZ1RvcCIsIkRyYXdlciIsInByb3BzIiwiY2xhc3NlcyIsImhhbmRsZURyYXdlckNsb3NlIiwiaGVpZ2h0IiwibWFyZ2luUmlnaHQiLCJzdHlsZXMiLCJkcmF3ZXJUaXRsZSIsIm1hcmdpblRvcCIsImxpbmVIZWlnaHQiLCJjb3B5cmlnaHQiLCJGb290ZXIiLCJmb290ZXJCbG9jayIsImZvb3RlclRpdGxlIiwiZm9vdGVyTGVmdFRpdGxlIiwiZm9vdGVyTGVmdENvbnRlbnQiLCJmb290ZXJCbG9jazIiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsIkhlYWRlciIsImhhbmRsZURyYXdlck9wZW4iLCJtYWluMSIsInRpdGxlIiwibWVudUJhciIsImltZ0JveCIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwib3ZlcmZsb3ciLCJpbWdCb3hPbkhvdmVyIiwib3BhY2l0eSIsImltZzEiLCJzaG93Y2FzZUJsb2NrIiwiU2hvd2Nhc2UiLCJib3gxIiwic2V0Qm94MSIsIlJlYWN0IiwidXNlU3RhdGUiLCJib3gyIiwic2V0Qm94MiIsImJveDMiLCJzZXRCb3gzIiwiYm94NCIsInNldEJveDQiLCJib3g1Iiwic2V0Qm94NSIsImJveDYiLCJzZXRCb3g2IiwiYm94NyIsInNldEJveDciLCJib3g4Iiwic2V0Qm94OCIsImhhbmRsZUJveDFPbiIsImhhbmRsZUJveDJPbiIsImhhbmRsZUJveDNPbiIsImhhbmRsZUJveDRPbiIsImhhbmRsZUJveDVPbiIsImhhbmRsZUJveDZPbiIsImhhbmRsZUJveDdPbiIsImhhbmRsZUJveDhPbiIsImhhbmRsZU1vdXNlTGVhdmUiLCJhZ29kYSIsInRpdGxlT25Ib3ZlciIsInRpdGxlMk9uSG92ZXIiLCJzaG93Y2FzZTAxIiwic2hvd2Nhc2UwMiIsInNob3djYXNlMDMiLCJzaG93Y2FzZTA0Iiwic2hvd2Nhc2UwNSIsIndvcmswNyIsIndvcmswOCIsIldvcmsiLCJkcmF3ZXIiLCJzZXREcmF3ZXIiLCJtYWluIiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFB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bnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9Xb3JrL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1B1YmxpYy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBsaW5rOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgICAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6ICczMnB4JyxcclxuICAgICAgICBjb2xvcjonIzhGOEY4RicsXHJcbiAgICAgICAgZm9udFNpemU6JzE4cHgnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6J2JsYWNrJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkcmF3ZXJMaW5rOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICB0ZXh0QWxpZ246J2xlZnQnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICAgICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgICAgIGZvbnRTaXplOicyMnB4JyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOidibGFjaydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZHJhd2VySGVhZGVyOiB7XHJcbiAgICAgICAgcGFkZGluZ1RvcDonM3JlbSdcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgRHJhd2VyID0gKHByb3BzKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgaGFuZGxlRHJhd2VyQ2xvc2VcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OicxMDB2aCcsIG1hcmdpbkxlZnQ6JzYlJywgbWFyZ2luUmlnaHQ6JzYlJywgcGFkZGluZ1RvcDogXCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZHJhd2VyVGl0bGV9PnNhbGllanVuZzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezd9PjwvR3JpZD4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURyYXdlckNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIHN0eWxlPXt7Y29sb3I6JyNCOEI4QjgnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckhlYWRlcn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzRyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9Xb3JrXCIgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyTGlua30+V09SSzwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD4gICAgXHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9Xcml0aW5nXCIgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyTGlua30+V1JJVElOR1M8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9BYm91dFwiIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckxpbmt9PkFCT1VUPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvUmVzdW1lXCIgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyTGlua30+UkVTVU1FPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPiAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvUHVibGljLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGxpbms6IHtcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6JzEuNXJlbScsXHJcbiAgICAgICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgICAgIGZvbnRTaXplOicxcmVtJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOidibGFjaydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29weXJpZ2h0OiB7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgICAgICBsaW5lSGVpZ2h0OicxcmVtJyxcclxuICAgICAgICBmb250U2l6ZTonMC45cmVtJyxcclxuICAgICAgICBjb2xvcjonIzhGOEY4RicsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjonYmxhY2snXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTsgICAgXHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyQmxvY2t9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs3fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlclRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2FsaWUgU2hlbmdKdW5nIENoaWVuIC0tLSBQcm9kdWN0IERlc2lnbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyTGVmdFRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgT3BlbiB0byBuZXcgb3Bwb3J0dW5pdGllc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9J2luaGVyaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckxlZnRDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2FsaWVqdW5nNDdAZ21haWwuY29tXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMaW5rZWRpblxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNZWRpdW1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJCbG9jazJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvcHlyaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERlc2lnbmVkIGJ5IENoaWVuIFNoZW5nSnVuZyDCqSAyMDIwIGFsbCByaWdodHMgcmVzZXJ2ZSBcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29weXJpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRGV2ZWxvcGVkIGJ5IDxMaW5rIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmNvcHlyaWdodH0+V2FuZyBXZWlBbjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e2hlaWdodDonM3JlbSd9fT48L0dyaWQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2Nzcy9QdWJsaWMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgbGluazoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICAgICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgICAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXHJcbiAgICAgICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgICAgIGZvbnRTaXplOicxOHB4JyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOidibGFjaydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZHJhd2VyTGluazoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgdGV4dEFsaWduOidsZWZ0JyxcclxuICAgICAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgICAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgICAgIGNvbG9yOicjOEY4RjhGJyxcclxuICAgICAgICBmb250U2l6ZTonMjJweCcsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjonYmxhY2snXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRyYXdlckhlYWRlcjoge1xyXG4gICAgICAgIHBhZGRpbmdMZWZ0OicycmVtJyxcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6JzJyZW0nLFxyXG4gICAgICAgIG1hcmdpblRvcDonM3JlbSdcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIC8vIGNvbnN0IFsgZHJhd2VyT3Blbiwgc2V0RHJhd2VyT3BlbiBdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIC8vIGNvbnN0IGhhbmRsZURyYXdlck9wZW4gPSAoKSA9PiB7XHJcbiAgICAvLyAgICAgc2V0RHJhd2VyT3Blbih0cnVlKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBjb25zdCBoYW5kbGVEcmF3ZXJDbG9zZSA9ICgpID0+IHtcclxuICAgIC8vICAgICBzZXREcmF3ZXJPcGVuKGZhbHNlKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgaGFuZGxlRHJhd2VyT3BlblxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW4xfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIHVuZGVybGluZT0nbm9uZScgc3R5bGU9e3tjb2xvcjonIzFGMUYxRid9fT48c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+c2FsaWVqdW5nPC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEhpZGRlbiBtZERvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVCYXJ9IHN0eWxlPXt7bWFyZ2luVG9wOicwLjVyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1dvcmtcIiB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5XT1JLPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9Xcml0aW5nXCIgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+V1JJVElOR1M8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0Fib3V0XCIgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+QUJPVVQ8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1Jlc3VtZVwiIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlJFU1VNRTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8SGlkZGVuIGxnVXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHNtPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHNtPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRHJhd2VyT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gZm9udFNpemU9J2xhcmdlJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIGRyYXdlciAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxEcmF3ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFyaWFudD0ncGVyc2lzdGVudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yPSd0b3AnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e2RyYXdlck9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOidsZWZ0J319XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kcmF3ZXJUaXRsZX0+c2FsaWVqdW5nPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17N30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3t0ZXh0QWxpZ246J3JpZ2h0J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIHN0eWxlPXt7Y29sb3I6JyNCOEI4QjgnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckhlYWRlcn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzRyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9Xb3JrXCIgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyTGlua30+V09SSzwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1dyaXRpbmdcIiB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJMaW5rfT5XUklUSU5HUzwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0Fib3V0XCIgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyTGlua30+QUJPVVQ8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1Jlc3VtZVwiIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckxpbmt9PlJFU1VNRTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9EcmF3ZXI+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogZHJhd2VyICovfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvV29yay5tb2R1bGUuY3NzJztcclxuaW1wb3J0IGFnb2RhIGZyb20gJy4uLy4uL3B1YmxpYy9hZ29kYS1sb2dvLnBuZyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgc2hvd2Nhc2UwMSBmcm9tICcuLi8uLi9wdWJsaWMvc2hvd2Nhc2Uvc2hvd2Nhc2UwMS5wbmcnO1xyXG5pbXBvcnQgc2hvd2Nhc2UwMiBmcm9tICcuLi8uLi9wdWJsaWMvc2hvd2Nhc2Uvc2hvd2Nhc2UwMi5wbmcnO1xyXG5pbXBvcnQgc2hvd2Nhc2UwMyBmcm9tICcuLi8uLi9wdWJsaWMvc2hvd2Nhc2Uvc2hvd2Nhc2UwMy5wbmcnO1xyXG5pbXBvcnQgc2hvd2Nhc2UwNCBmcm9tICcuLi8uLi9wdWJsaWMvc2hvd2Nhc2Uvc2hvd2Nhc2UwNC5wbmcnO1xyXG5pbXBvcnQgc2hvd2Nhc2UwNSBmcm9tICcuLi8uLi9wdWJsaWMvc2hvd2Nhc2Uvc2hvd2Nhc2UwNS5wbmcnO1xyXG5pbXBvcnQgd29yazA3IGZyb20gJy4uLy4uL3B1YmxpYy93b3JrL3dvcmswNy5wbmcnO1xyXG5pbXBvcnQgd29yazA4IGZyb20gJy4uLy4uL3B1YmxpYy93b3JrL3dvcmswOC5wbmcnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgaW1nQm94OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y1RjVGNScsXHJcbiAgICAgICAgaGVpZ2h0OiAnMzByZW0nLFxyXG4gICAgICAgIHdpZHRoOicxMDAlJyxcclxuICAgICAgICBvdmVyZmxvdzonaGlkZGVuJ1xyXG4gICAgfSxcclxuICAgIGltZ0JveE9uSG92ZXI6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6JyMxRjFGMUYnLFxyXG4gICAgICAgIG9wYWNpdHk6JzkwJScsXHJcbiAgICAgICAgaGVpZ2h0OiAnMzByZW0nLFxyXG4gICAgICAgIHdpZHRoOicxMDAlJyxcclxuICAgICAgICBvdmVyZmxvdzonaGlkZGVuJ1xyXG4gICAgfSxcclxuICAgIGltZzE6IHtcclxuICAgICAgICBvcGFjaXR5OicxMCUnXHJcbiAgICB9LFxyXG4gICAgc2hvd2Nhc2VCbG9jazoge1xyXG4gICAgICAgIG1hcmdpblRvcDogJzAuM3JlbSdcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBTaG93Y2FzZSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3QgWyBib3gxLCBzZXRCb3gxXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IFsgYm94Miwgc2V0Qm94Ml0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBbIGJveDMsIHNldEJveDNdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgWyBib3g0LCBzZXRCb3g0XSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IFsgYm94NSwgc2V0Qm94NV0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBbIGJveDYsIHNldEJveDZdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgWyBib3g3LCBzZXRCb3g3XSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IFsgYm94OCwgc2V0Qm94OF0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVCb3gxT24gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Qm94MShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQm94Mk9uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEJveDIoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUJveDNPbiA9ICgpID0+IHtcclxuICAgICAgICBzZXRCb3gzKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVCb3g0T24gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Qm94NChmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQm94NU9uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEJveDUoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUJveDZPbiA9ICgpID0+IHtcclxuICAgICAgICBzZXRCb3g2KGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVCb3g3T24gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Qm94NyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQm94OE9uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEJveDgoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Qm94MSh0cnVlKTtcclxuICAgICAgICBzZXRCb3gyKHRydWUpO1xyXG4gICAgICAgIHNldEJveDModHJ1ZSk7XHJcbiAgICAgICAgc2V0Qm94NCh0cnVlKTtcclxuICAgICAgICBzZXRCb3g1KHRydWUpO1xyXG4gICAgICAgIHNldEJveDYodHJ1ZSk7XHJcbiAgICAgICAgc2V0Qm94Nyh0cnVlKTtcclxuICAgICAgICBzZXRCb3g4KHRydWUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs1fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9Xb3JrL0Fnb2RhLWRlc2lnbicgdW5kZXJsaW5lPSdub25lJyBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtib3gxPT09dHJ1ZT9jbGFzc2VzLmltZ0JveDpjbGFzc2VzLmltZ0JveE9uSG92ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZUJveDFPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Fnb2RhfSBjbGFzc05hbWU9e2JveDE9PT10cnVlPycnOmNsYXNzZXMuaW1nMX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzEwcmVtJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib3gxPT09dHJ1ZT8nJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlT25Ib3Zlcn0gc3R5bGU9e3ttYXJnaW5Ub3A6Jy0xNnJlbSd9fT4yMDE5LzIwIOKAoiBBZ29kYSBEZXNpZ248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlMk9uSG92ZXJ9PkFuIGV4Y2l0aW5nIGFkdmVudHVyZSBpbiBCYW5na29rIGFuZCB0cmF2ZWwgaW5kdXN0cnk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs3fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvV29yay9BZ29kYS1mbGlnaHRzJyB1bmRlcmxpbmU9J25vbmUnIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2JveDI9PT10cnVlP2NsYXNzZXMuaW1nQm94OmNsYXNzZXMuaW1nQm94T25Ib3Zlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlQm94Mk9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2hvd2Nhc2UwMX0gY2xhc3NOYW1lPXtib3gyPT09dHJ1ZT8nJzpjbGFzc2VzLmltZzF9IHN0eWxlPXt7bWFyZ2luVG9wOicxMHJlbSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym94Mj09PXRydWU/Jyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZU9uSG92ZXJ9IHN0eWxlPXt7bWFyZ2luVG9wOictMjhyZW0nfX0+MjAyMCDigKIgQWdvZGEgRmxpZ2h0cyDigKIgQXBwIERlc2lnbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGUyT25Ib3Zlcn0+Q29tcGxldGUgeW91ciBqb3VybmV5IHdpdGggc2VhdCBzZWxlY3Rpb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPiAgICAgXHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuc2hvd2Nhc2VCbG9ja30gc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIHVuZGVybGluZT0nbm9uZScgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Ym94Mz09PXRydWU/Y2xhc3Nlcy5pbWdCb3g6Y2xhc3Nlcy5pbWdCb3hPbkhvdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVCb3gzT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzaG93Y2FzZTAyfSBjbGFzc05hbWU9e2JveDM9PT10cnVlPycnOmNsYXNzZXMuaW1nMX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzRyZW0nLGhlaWdodDonNzAlJyx3aWR0aDonNzAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib3gzPT09dHJ1ZT8nJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlT25Ib3Zlcn0gc3R5bGU9e3ttYXJnaW5Ub3A6Jy0yNHJlbSd9fT4yMDE3IOKAoiBLSU5KTyBKZXdlbHJ5IOKAoiBXZWIgRGVzaWduPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZTJPbkhvdmVyfT5BbiBlLWNvbW1lcmNlIHNpdGUgYnJpbmdzIGEgMTIteWVhciBicmFuZCBhIG5ldyBsaWZlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgdW5kZXJsaW5lPSdub25lJyBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtib3g0PT09dHJ1ZT9jbGFzc2VzLmltZ0JveDpjbGFzc2VzLmltZ0JveE9uSG92ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZUJveDRPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Nob3djYXNlMDN9IGNsYXNzTmFtZT17Ym94ND09PXRydWU/Jyc6Y2xhc3Nlcy5pbWcxfSBzdHlsZT17e21hcmdpblRvcDonNHJlbScsaGVpZ2h0Oic3MCUnLHdpZHRoOic3MCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2JveDQ9PT10cnVlPycnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVPbkhvdmVyfSBzdHlsZT17e21hcmdpblRvcDonLTI0cmVtJ319PjIwMTcg4oCiIEtJTkpPIEpld2Vscnkg4oCiIFdlYiBEZXNpZ248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlMk9uSG92ZXJ9PkFuIGUtY29tbWVyY2Ugc2l0ZSBicmluZ3MgYSAxMi15ZWFyIGJyYW5kIGEgbmV3IGxpZmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPiAgICAgXHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuc2hvd2Nhc2VCbG9ja30gc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIHVuZGVybGluZT0nbm9uZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2JveDU9PT10cnVlP2NsYXNzZXMuaW1nQm94OmNsYXNzZXMuaW1nQm94T25Ib3Zlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlQm94NU9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2hvd2Nhc2UwNH0gY2xhc3NOYW1lPXtib3g1PT09dHJ1ZT8nJzpjbGFzc2VzLmltZzF9IHN0eWxlPXt7bWFyZ2luVG9wOic1cmVtJyxoZWlnaHQ6JzcwJScsd2lkdGg6JzcwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym94NT09PXRydWU/Jyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZU9uSG92ZXJ9IHN0eWxlPXt7bWFyZ2luVG9wOictMjRyZW0nfX0+MjAxNyDigKIgS0lOSk8gSmV3ZWxyeSDigKIgV2ViIERlc2lnbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGUyT25Ib3Zlcn0+QW4gZS1jb21tZXJjZSBzaXRlIGJyaW5ncyBhIDEyLXllYXIgYnJhbmQgYSBuZXcgbGlmZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIHVuZGVybGluZT0nbm9uZScgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Ym94Nj09PXRydWU/Y2xhc3Nlcy5pbWdCb3g6Y2xhc3Nlcy5pbWdCb3hPbkhvdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVCb3g2T259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzaG93Y2FzZTA1fSBjbGFzc05hbWU9e2JveDY9PT10cnVlPycnOmNsYXNzZXMuaW1nMX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzRyZW0nLGhlaWdodDonNzAlJyx3aWR0aDonNzAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib3g2PT09dHJ1ZT8nJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlT25Ib3Zlcn0gc3R5bGU9e3ttYXJnaW5Ub3A6Jy0yNHJlbSd9fT4yMDE3IOKAoiBLSU5KTyBKZXdlbHJ5IOKAoiBXZWIgRGVzaWduPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZTJPbkhvdmVyfT5BbiBlLWNvbW1lcmNlIHNpdGUgYnJpbmdzIGEgMTIteWVhciBicmFuZCBhIG5ldyBsaWZlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgIFxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnNob3djYXNlQmxvY2t9IHNwYWNpbmc9ezF9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJyB1bmRlcmxpbmU9J25vbmUnIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2JveDc9PT10cnVlP2NsYXNzZXMuaW1nQm94OmNsYXNzZXMuaW1nQm94T25Ib3Zlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlQm94N09ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17d29yazA3fSBjbGFzc05hbWU9e2JveDc9PT10cnVlPycnOmNsYXNzZXMuaW1nMX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzRyZW0nLGhlaWdodDonNzAlJyx3aWR0aDonNzAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib3g3PT09dHJ1ZT8nJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlT25Ib3Zlcn0gc3R5bGU9e3ttYXJnaW5Ub3A6Jy0yNHJlbSd9fT4yMDE3IOKAoiBLSU5KTyBKZXdlbHJ5IOKAoiBXZWIgRGVzaWduPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZTJPbkhvdmVyfT5BbiBlLWNvbW1lcmNlIHNpdGUgYnJpbmdzIGEgMTIteWVhciBicmFuZCBhIG5ldyBsaWZlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgdW5kZXJsaW5lPSdub25lJyBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtib3g4PT09dHJ1ZT9jbGFzc2VzLmltZ0JveDpjbGFzc2VzLmltZ0JveE9uSG92ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZUJveDhPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3dvcmswOH0gY2xhc3NOYW1lPXtib3g4PT09dHJ1ZT8nJzpjbGFzc2VzLmltZzF9IHN0eWxlPXt7bWFyZ2luVG9wOic0cmVtJyxoZWlnaHQ6JzcwJScsd2lkdGg6JzcwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym94OD09PXRydWU/Jyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZU9uSG92ZXJ9IHN0eWxlPXt7bWFyZ2luVG9wOictMjRyZW0nfX0+MjAxNyDigKIgS0lOSk8gSmV3ZWxyeSDigKIgV2ViIERlc2lnbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGUyT25Ib3Zlcn0+QW4gZS1jb21tZXJjZSBzaXRlIGJyaW5ncyBhIDEyLXllYXIgYnJhbmQgYSBuZXcgbGlmZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+ICAgICBcclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2Fyb3VzZWxPdXRlclwiOiBcIlB1YmxpY19jYXJvdXNlbE91dGVyX18ybVpfZFwiLFxuXHRcImltZ0Rlc2NyaXB0aW9uXCI6IFwiUHVibGljX2ltZ0Rlc2NyaXB0aW9uX19PeFliUVwiLFxuXHRcImNhcm91c2VsSW1nXCI6IFwiUHVibGljX2Nhcm91c2VsSW1nX18xd0wzVFwiLFxuXHRcImNhcHRpb25Db250YWluZXJcIjogXCJQdWJsaWNfY2FwdGlvbkNvbnRhaW5lcl9fYWkxNnFcIixcblx0XCJkcmF3ZXJUaXRsZVwiOiBcIlB1YmxpY19kcmF3ZXJUaXRsZV9fLUxFUzhcIixcblx0XCJsaW5rXCI6IFwiUHVibGljX2xpbmtfXzI4MWRHXCIsXG5cdFwiZHJhd2VyQnV0dG9uXCI6IFwiUHVibGljX2RyYXdlckJ1dHRvbl9fX1VGci1cIixcblx0XCJtYWluMVwiOiBcIlB1YmxpY19tYWluMV9fNXdDODZcIixcblx0XCJ0aXRsZVwiOiBcIlB1YmxpY190aXRsZV9fX3gxVmNcIixcblx0XCJtZW51QmFyXCI6IFwiUHVibGljX21lbnVCYXJfXzMzS1h6XCIsXG5cdFwiZm9vdGVyQmxvY2tcIjogXCJQdWJsaWNfZm9vdGVyQmxvY2tfX3pxQTVaXCIsXG5cdFwiZm9vdGVyQmxvY2syXCI6IFwiUHVibGljX2Zvb3RlckJsb2NrMl9fMkdUMXlcIixcblx0XCJmb290ZXJUaXRsZVwiOiBcIlB1YmxpY19mb290ZXJUaXRsZV9fRk9mTG1cIixcblx0XCJjb3B5cmlnaHRcIjogXCJQdWJsaWNfY29weXJpZ2h0X18zSVJmMlwiLFxuXHRcImZvb3RlckxlZnRUaXRsZVwiOiBcIlB1YmxpY19mb290ZXJMZWZ0VGl0bGVfXzFyMUEyXCIsXG5cdFwiZm9vdGVyTGVmdENvbnRlbnRcIjogXCJQdWJsaWNfZm9vdGVyTGVmdENvbnRlbnRfXzNqVVJXXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluXCI6IFwiV29ya19tYWluX19NOW1iN1wiLFxuXHRcInRpdGxlXCI6IFwiV29ya190aXRsZV9fMzNxTDhcIixcblx0XCJzaG93Y2FzZUJveFwiOiBcIldvcmtfc2hvd2Nhc2VCb3hfXzI0enZNXCIsXG5cdFwiaW1nXCI6IFwiV29ya19pbWdfXzFvNXVRXCIsXG5cdFwidGl0bGVPbkhvdmVyXCI6IFwiV29ya190aXRsZU9uSG92ZXJfXzIySzgwXCIsXG5cdFwidGl0bGUyT25Ib3ZlclwiOiBcIldvcmtfdGl0bGUyT25Ib3Zlcl9fM21XUUtcIixcblx0XCJ0aXRsZTJcIjogXCJXb3JrX3RpdGxlMl9fWE1nLWdcIixcblx0XCJ0aXRsZTNcIjogXCJXb3JrX3RpdGxlM19fMU1SZW5cIixcblx0XCJ0aXRsZTRcIjogXCJXb3JrX3RpdGxlNF9fVHViMWpcIixcblx0XCJhcnRpY2xlXCI6IFwiV29ya19hcnRpY2xlX18xSk5USFwiLFxuXHRcImNvbnRlbnRcIjogXCJXb3JrX2NvbnRlbnRfXzMwTGppXCIsXG5cdFwiY29udGVudFRpdGxlXCI6IFwiV29ya19jb250ZW50VGl0bGVfXzFYZWFzXCIsXG5cdFwiY29udGVudERldGFpbFwiOiBcIldvcmtfY29udGVudERldGFpbF9fMjRPUFZcIixcblx0XCJkb3RMaW5lXCI6IFwiV29ya19kb3RMaW5lX18ybU5uOFwiLFxuXHRcImRlc2lnbkhpZ2hsaWdodFwiOiBcIldvcmtfZGVzaWduSGlnaGxpZ2h0X18xWkwybVwiLFxuXHRcImRlc2lnbkhpZ2hsaWdodFRpdGxlXCI6IFwiV29ya19kZXNpZ25IaWdobGlnaHRUaXRsZV9fMjBhVF9cIixcblx0XCJkZXNpZ25IaWdobGlnaHRDb250ZW50XCI6IFwiV29ya19kZXNpZ25IaWdobGlnaHRDb250ZW50X19haDRMUlwiLFxuXHRcImdhbGxlcnkxXCI6IFwiV29ya19nYWxsZXJ5MV9fM0lsLTNcIixcblx0XCJpbWdEZXNjcmlwdGlvblwiOiBcIldvcmtfaW1nRGVzY3JpcHRpb25fXzE4Y1ZxXCIsXG5cdFwicmVmbGVjdGlvblwiOiBcIldvcmtfcmVmbGVjdGlvbl9fUzllWXBcIixcblx0XCJkb3RBbGlnblwiOiBcIldvcmtfZG90QWxpZ25fXzFQUm1GXCIsXG5cdFwic2Nyb2xsRG93blwiOiBcIldvcmtfc2Nyb2xsRG93bl9fM2xyREpcIixcblx0XCJwcm9ncmVzc01haW5cIjogXCJXb3JrX3Byb2dyZXNzTWFpbl9fMmZyUWlcIixcblx0XCJwcm9ncmVzc1RpdGxlMVwiOiBcIldvcmtfcHJvZ3Jlc3NUaXRsZTFfXzMxbVVIXCIsXG5cdFwicHJvZ3Jlc3NUaXRsZTJcIjogXCJXb3JrX3Byb2dyZXNzVGl0bGUyX18zVjlOc1wiLFxuXHRcImNvbXBldGl0aXZlQW5hbHlzaXNUaXRsZTFcIjogXCJXb3JrX2NvbXBldGl0aXZlQW5hbHlzaXNUaXRsZTFfXzI5c1NkXCIsXG5cdFwiY29tcGV0aXRpdmVBbmFseXNpc1RpdGxlMlwiOiBcIldvcmtfY29tcGV0aXRpdmVBbmFseXNpc1RpdGxlMl9fYW5BYWVcIixcblx0XCJjb21wZXRpdGl2ZUFuYWx5c2lzQ29udGVudFwiOiBcIldvcmtfY29tcGV0aXRpdmVBbmFseXNpc0NvbnRlbnRfXzJVVktXXCIsXG5cdFwiaW1nRGVzY3JpcHRpb24yXCI6IFwiV29ya19pbWdEZXNjcmlwdGlvbjJfXzM4T3RoXCIsXG5cdFwicmVzZWFyY2hUaXRsZVwiOiBcIldvcmtfcmVzZWFyY2hUaXRsZV9fM3hGMG5cIixcblx0XCJjb2xsZWN0SW5zaWdodENvbnRlbnRcIjogXCJXb3JrX2NvbGxlY3RJbnNpZ2h0Q29udGVudF9fMW83WWpcIixcblx0XCJwcm9jZXNzMkltZ1wiOiBcIldvcmtfcHJvY2VzczJJbWdfXzMzcjhQXCIsXG5cdFwiaW1nRGVzY3JpcHRpb24zXCI6IFwiV29ya19pbWdEZXNjcmlwdGlvbjNfX28xcHlkXCIsXG5cdFwiaW1nQmxvY2tcIjogXCJXb3JrX2ltZ0Jsb2NrX18xMXhSWlwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiV29ya19kZXNjcmlwdGlvbl9fcm9zRlZcIixcblx0XCJwYXNzd29yZFwiOiBcIldvcmtfcGFzc3dvcmRfXzN5cFVvXCIsXG5cdFwiaGVhZGVyXCI6IFwiV29ya19oZWFkZXJfXzNoMTVfXCIsXG5cdFwiaW1nMDFcIjogXCJXb3JrX2ltZzAxX19vVGpQRlwiLFxuXHRcImZsaWdodHMwMVwiOiBcIldvcmtfZmxpZ2h0czAxX18zaVhheFwiLFxuXHRcImZvb3RlclwiOiBcIldvcmtfZm9vdGVyX18xd090TlwiLFxuXHRcImRlc2lnbkNvbnRlbnRcIjogXCJXb3JrX2Rlc2lnbkNvbnRlbnRfXzJ6ekdXXCIsXG5cdFwiZGVzaWduVGl0bGVcIjogXCJXb3JrX2Rlc2lnblRpdGxlX18zTi1mRlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvV29yay5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50L1B1YmxpYy9IZWFkZXIuanMnO1xyXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnQvUHVibGljL0Zvb3Rlci5qcyc7XHJcbmltcG9ydCB7IFNob3djYXNlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50L1dvcmsvU2hvd2Nhc2UuanMnOyAgXHJcbmltcG9ydCB7IERyYXdlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC9QdWJsaWMvRHJhd2VyLmpzJztcclxuXHJcbmNvbnN0IFdvcmsgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2RyYXdlciwgc2V0RHJhd2VyXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEcmF3ZXJPcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIHNldERyYXdlcih0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVEcmF3ZXJDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXREcmF3ZXIoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgICAge2RyYXdlciA9PSBmYWxzZSA/XHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRHJhd2VyT3Blbj17aGFuZGxlRHJhd2VyT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXb3JrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiNiVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNob3djYXNlLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgOicnfVxyXG5cclxuICAgICAgICAgICAge2RyYXdlciA9PSB0cnVlID9cclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOicjMWYxZjFmJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRHJhd2VyQ2xvc2U9e2hhbmRsZURyYXdlckNsb3NlfSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgOicnfVxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JrOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9hZ29kYS1sb2dvLTE3YTk0Nzg5YmViZjdkYmQ2N2JkYjIzODZlODc1NDZjLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zaG93Y2FzZTAxLTZiMGU3ZWYyNDFiMmZlYjllY2NmOTRmMmFlZjY2ODcxLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zaG93Y2FzZTAyLWM0OTg5ODNlZjI5YzU0MDAyZWVmM2U2ZWY3ZDM0NjlkLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zaG93Y2FzZTAzLWQwYzI1MmY4ZjdiZWJkNzk4ZTkxOTE1ZWNmYWY3MDQyLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zaG93Y2FzZTA0LTZmYTIyMjVkZjZiMmM5Zjk3ZjY5MzlkOGViZTZmYzU1LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zaG93Y2FzZTA1LWJlYmQ2YmRiM2MwNWU0ZjYyNjQ2ZDljODRjNWU5NTY3LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy93b3JrMDctMjYxOGVlZmYwYjdiZTcxMGUzM2E2YmUwMjY5ZDlkODgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBT2tBQUFGU0NBWUFBQUFYVGZqaEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUJOOVNVUkJWSGdCN2QyL2J0eEpjc0R4N2hFcGNuYkl0WVk3d0s0Z3daSXUzTUN3b1FlNGhYTUNqcGdkRENjT3ovWUxHTU1uTU96UTBUMkMwMDNPdW1EREFTNWlldEx0bmdLQklMVVN5WmxkVXZwZFZVOVhULzlHczdkL2NLdXU0UHNCeHVTSTY4c2ExVjFkWFJYRFQ5UjEzUjM1OFUveSthVjgvbDQrRCtWekp3QlFMK1h6VkQ2L2w4L3Y1UE4vTWNhWDRTZUk0VWVTeGZsUWZ2eTdmUDQ1c0NpQkgrTTM4am1XeGZyMFIvei8vUEJGbWlQblZENy9GZ0Q4WkcvZnZ2M3Z3V0F3L2FHUjlRY3RVbzJlOG5raS82TVBBb0MvaHFlTHhlSWZoOFBoSDc3dlB4eDh6OS9qdDk5Kyt3OHNVT0N2N3VIdTd1NXZkWDJGN3dtV2YvR1A4L244RnpzN083OWxnUUkvRzR1b1QrWDNidE4vOEoyUmREcWREbGlnd00vdW9heXovLy82NjYvSDMvVWZmRmNrSFZ4ZlgvL1gxdGJXcndPQW41MGtrLzduMXExYi95Rkh5MDRDWXkraWJvcWtneSsvL1BJWExGRGcvWkZzNzY5MTNja0NmZmR2YTkvMXY0aDM3OTc5endEZ3ZmcjQ0NC8xZXZPZHdObjdCem1IeHM4Ly8vd2pDYnUvQ2dEZUs5bTkvdXFMTDc3NFNINjlGYXFqYUIxYjlmZGJyMTY5K3BmOS9mMy9EUURldTlldlgvL3JoeDkrK0J2NTlTYmtiRzhkU2RNaWxVelRMd09BSnJhM3QzWDkzZEpkcmYxYldhU2ZmZmJaUU02aXQrUUErM2NCUUJPeTVkWDFkK3ZKa3llNk50TkN0ZFdxLzdBbG4xMUpCZjlSTWt4L0V3QzhkM0lEODdVRXlyK1ZYeGNTVFcvazg3WmVwTnQzN3R3Wm5vc0FvQmtKa2g4OWZQanc2dW5UcDlmeTlZMkYxSGovL3YzQnk1Y3Z0d0tBMWdheVFPMG9HdldYbEVINjZxdXY5UGZ2SzdnSDhEUGIyOXRMZ1ROL3VrSDFSVDhzVXFDeGk0dUxXNVBKcEt4Tmk2UzJTQUcwbDliaTQ4ZVAwNWYxZTFJV0t0QmVsRnVXT0p2TjB1OHBwSDc2NmFkcGNYN3d3UWNzVXFDOWVIWjJsbjdSVnpFcGtwNmNuSFFIQndjQlFIc1NMRk15MTdhN0ZqbTM1VE9VejU0czNEOEZBTTNJSXIwL0hBNWZTelJkeU5lYkZFbnppdTBDZ09ibTgzbXc3ZTUwT2lXU0F0N0VHTy9KandzSm5uTkpIdDJVSXQ1QUpBVmNrWWlhMW1hNko5WHRyaVNPeU93Q1BzUk5YOUoyVnc2c2U1ZVhsMngzZ1laa3UzdGZmcnlXejF5T242dnQ3bVF5NmE2dXJnSUFYL1RWU3pxTGFvV0RSTklBb0xsVXQvRG8wU09OcXFVVVVCY3IyVjNBZ2RGb2RFOTJ0UmZ5YTdrbnRhd3UyVjNBZ1h6c1RPdXhsQVdHWEZ6UGRoZG9iemdjbHNjdXg4ZkhzYzd1N3Nwbm4rMHUwSlptZHlXUisrcjA5UFFiK1hyZGV3VURvRDB0c0pjRm1yb3k2UGZ5Q2lZQWNFSE9wTEY2bFJaNzdWSTRrd0x0eVpuVUN1eWpGZGpyZG5mN3hZc1hPeEppT1pNQ2pWVVZSM29GYzIxWkpFMGM3WVRsUGVuekFLQVpld1VUOGlLMWUxSTdrNUpBQXRycnJjTzZkcGN6S2VDQW5rbHo0aWdGVDF1eHQ4Tnl1OHVaRkdnc2IzZjFUTHE2SjdVL1dnTWtBTzFVRlVlOSthUTB5QWI4S1owWlN1dEEzcE1DN2Mzbjg5NmpsN1JJWjdOWnFuQWdjUVMwbDdlN3djcDE2L2VrRk5nRERxd1hNekN3Q1hCb1BCNUhPWWF1dHJ2NmhURVRnQi9uNStlZERteVNuVzNhNW9ZOHZZbnJGOENKdXNlUkxsSU5xK0haczJmaDlQUTBBR2pMWHNISVo5VWNXeU9wZGdzTUFKclRXVEJtT3AxR3VnVUN6dWhVTlZtbytncEdWK3QxNmJzTHdJY2NTWFg4UzNkNGVMaHFSRGFaVEhaNTlBMjB0K21lTkRVaTQwd0srQ0xyVW4rc0lxbWtmSWVTVGVKTUNqUldUZnJXZmU5TnVvTFJQd3dHZzQ2bmFrQjdlaWF0TTd4bFBtbnU4OG1XRjJqTWdtVmRZSzlJSEFGT2FHY0dPWDVleUhiM25XNkIrZ3FHTXluUW1HVjNKWkl1am82T2J1emQydTJUazVNZENiUDdUUG9HMnRwNEJTTUxOUDB0QVBCRUp4OHVuNnJsKzVpTzlpbUFINXJRalNwL3A2VW40RVM5M1pYMWVGMGVmUWNBbnFTV251dERoSWVTT05vamNRUzBaVU9FSHp4NHNKak5acXVLSXdCdXBDSEMrckgzcEVyUHBOeVRBZzVzbXFwbTdldzcrdTRDTHFUZ2FibWkzcGswRUVtQjVqWVZNNlIvRDBSU3dBVWJmWmdqYWFTRFBlQk1qcVN2d2pLUzN0UWQ3QUU0b0pFMFZHdVNZZ2JBR1gzd25TZEs5TjZUY2dVRE9MSHhDc1lpS1lrandJZDZObE5KSE5HSURQQmhOQnJkdTdxNjZrWFNGRVYxOWdTTnlBQjNvbFVjcFh0U1diMWtlWUhHNm5Xb3I3NUxKQTFjd3dCdVRDYVRaVWxnaktGT0hMSFZCWnpJRXlYS3BHOGRmVWdVQmZ3cDgwa0IrSlNxQWV0R1pBQWN5R1dCNzNhd2w4OHVmWGVCOXJUaVNCSkhyMDlQVDc4SjFWTzFoSmFlZ0EvYU9zVjJ1T1U5NmNIQkFja2p3SWUwRm5QVCt0VVZqSTQrREFDYTA4cS9xblkzMmhWTXVwZWh3QjVvcjZvNFN2VUxGa2xUN1M1blVzQVBYWmM2QzZhWDNRMjBUd0dhcXhxUjZianZOeFF6QUg2VmlxTlkvd09BNWxJU1Y2OWcxbC9CME5JVDhLRmN3WlJYTUNIWENKSTRBbHl3SzVneVJMaVRzRHF3OTJzQW1yTXhFK2xMaXFURDRWQ25PTkdJREhCQ3IwU1ZibmZMRll4RTBsMVpxRnpCQUkxVkxUMzFDdWFtWE1Gb0pBWGdRdDNqaUVmZmdHY1NWYU9ObVVqZkF3QjMwaUxWQXZ1TURDL1FYcGR2VzZJVk0xZ2taYm9hNEVQVVI5LzJwUmRKdVlJQmZGanZ1MXRqdXdzMHBvKysxeU5wdmNWbHV3czB0dmJvZTFrV2FPVkgxTzRDTHZSR3Y5U1B2clhaSjZNUGdjWmt1M3QvUHAvYm8rK2J3ZG9mQTRDMkpGbFVJdWwwT28xV2JiOHRHVjRpS2VEQWV2dVVNdWs3c04wRlhNZ0Y5cGZ5MFNUUm05S1pvZXJ6Q2FDaDRYQllHakdFM05JenNmZHJBTnFTcEpIOTJwdXFsczZtSkk2QTlyU1lJYXh1WHJweUp1WFJOK0JEblRpUzlYaFR6cVM1RElteVFNQ0I4WGk4TEdTb2EzZnRhVXdBMEpRT0VUNC9QN2VuYXF2YVhkcW5BSDdVdHkybGRsY2lxWDVudXdzNElMY3Q2ZmhaMnFkVW5Sblk3Z0lPU0NRdDk2VHJCZllqMlFNL0R3Q2FXU3NMVE5uZG1POUpTUndCdnBTcGF0M0p5VWs2aTFMTUFMalExVDk3VDlWNDlBMjRFS3ZzYnF3WEtWdGR3QW10cGJkajZGYjE3MTNnQ2dab1RtdDM5YVB6U2JXWVFSZHBtZlF0ZnlDYUFvMXBJekw5UEg3OGVObldNMy8wQ21ZMzhPZ2JhRzQwR3QyVFJXcFQxVmFQdmpPMnUwQmpWVXRQVlI1OWR4VFlBKzZVZTlKb2ZYY0J1SkIydEpMZFRWL3Fzc0JkU1J6dFgxNWVjaVlGR2xycnUvdUdZZ2JBR1ZtZ0pUZGtvdzlUN1c1K3FnYkFqN1RUMVh0U2FuY0JYMUpaNE5uWldXZnRVeXh4Rk5udUF1MXAreFI5OUcwSjNmVjdVZ0NONlN3WWZmU3R6UmpLTEpoQWRoZHdReXVPZG5kM0x5U2FMaVJ2ZEYyMnU1bzRZcnNMdEtjVlIzbTdtM2E1S1hHVWV4eFJiUVQ0c1N5dXQwWmtWY1VSNTFPZ3ZWNDlmZTlNS2gvR1RBQ05yYjJDNlUvNkJ1Q0g3WEI3TFQwbHU3dEhkaGRvYTMzU2R6bVQ2bE0xc3J0QWUxck1rSld5d0xxRFBRQS9VdDh4dWdVQ3p1U0tvL0xkRmltelNRRW41SVpGaXhuMDF6TDZNT1RLaHBqSGdBTm9TQ09wNW9pME04UHg4WEcwYm9GYjhvKzdwNmVuM0pNQ2pXbG5Ca2tldlpab1d1NUpVL1JraUREZ2czVm0wR1lNWmJ1cjZNd0F1SkdTdU5yQlhnMENXVjNBbGVxZXRCVFlsKzB1aVNPZ3Zhb1IyV3Iwb2RVSXJuWE9CdEJHdW9MSjY1SmlCc0NiOVIxdHVZSUpxNEZOendPQVpxb0MrNFY4YnJiVy94NEFOS1dKSXptWHBpS2p3OFBEWmJmQVBGRVlnQU82UVBQUE9KMU9seDNzdFRrMjk2U0FLMUVpYW0rSXNKMUpLUXNFR2x0NzlMMHNDOVJVNzhIQkFWdGV3S0ZTY2FUM01oUXpBTzNwT2h5UHh5Vm9zdDBGbkpIdDdqM1oyV29IKzdra2p0NnNQMVhqbmhSb1RNK2tFa2t2enMvUHIyUTl2dFBTazNNcDRJQXMwSEwwdEFKN0ZpZmd4SHB1cUxSUGthMHU3Vk1BQjZyV3VySE1ndG5mMzA4OVZRSUFEOUxPTnZjZTZ6U3JHNTg4ZVdKWE1XeDdBU2UwTEZCK1JLdmREUUI4c000TXVTeXdLNjlndEJudllyRUlBTnFxQyt4RGpxU0pYSnltVlJzQU5LZEJNemNpNjZnNEFweXA1cFBxMXZhYSthU0FNOVVWVEtwaEtLOWc5RDJwM0pNR0FHMUp3aWpkc3VUbTJMM3RycWFVOXRqdUFtMXA3YTZjU2RPWWlWN3RiajFxRFVCYk5sWE5CamFwN1VBa0JWelkxSm5CY1AwQ09LREZETlhPTnZabXdaQTRBbnpJMjEyMTdHQnZMVDJyMUMrQVJxcFpNR2xkcGtXYWF3UXByZ2NjMEN1WXZOMU42OUt1WUxibG5uUkhJdW4rNWVVbGlTT2dJWjMwTGRFMGpabVFSTzYxRmRpblI5OEJRSE81d0Q2dHh6S2YxRWFza1RnQ1hPaGt1MnNQWHBhSm8vd2toc1FSNEVPc3FnRWpaWUdBTSt1akQ2MWJZTUoyRjNDbGJIZExieU8ydTBCN215cU82TWdBT0dMdFU4SXllSGE5c2tBQTdXbi82N096czJnTkFudG5VZ0R0NWN4dXA4TzlSYWhyZDFtc2dDTzZMa1hnQ2dad1JrY2Z5Zzl0UkxhYTlKMy9SaVFGZkVnRjl2WTZyZDd1a2tBQ0hNaUpJL3RLK3hUQW03V0tvMnNiZlJpWXFnYjRvSkZVdDd0NXFscS9kbGYrdU1kN1VxQ3Rxb085Sm83ZTlGcDZVaFlJdENmck1GWmxnWjB0MHFnRG15aXdCM3l3dnJ2VDZiUTgrdFk5Y0NTU0FqN1V6ZXFacWdZNGs3TzdkaWE5THUxVE5KSUdBRjZrMnhiZDd0YjNwRVJTd0FFYjJQVEpKNThzVGs1T3J1dEgzOUZHcmdGb1J4OTlxenpwTzVURWtmNnNPbWNEYUVRZmZlZnNibHFQdmJKQWlobUE5cXBYTVAyeVFBQnV4UFV2YWN5RWZIWUNpU09ndVUwRjl1bE1PcGxNYU9rSk9HQ0pvNUE2cVhTcGlDRnFCM3Rtd1FBK2FPSm9QQjdIdTNmdnh1UGo0OVVyR0lta3U3SlEyZTRDamVYRTBhVjhybVE5bHZZcEdra0RnUFp5dmNMeUxhbkVVU3RtWUlndzRFVFZIRHZkazlaWE1CUXlBSTVZN3pGNkhBSE9iR3JwYWNraklpbmdRKzhJV3JkUGlkeVRBdTFwSTdLUUYyb1pNNkZmdEtDWHpneEFlM1dQSTAzdkRnSUFWN1RpeUhvY2hkeUlqREVUZ0NQMUZZeDFacURIRWVESXhoNUg5a2NTUjBCN3VZTjlhc1NnMzdmc0Q1cmRyWWJFQUdoRUU3ajYwV0tHbzZPanlIeFN3Qm1KcFBmbFhLcmJYYjF1WVQ0cDRJMmNTVzI3VzRvWkluMTNBVC8wbmxTUG5odW5xZ1cydTBCelZmdVVVcnZiMFlnTWNDbmEvNm52U1RXU1BnOEFtdGtZU2UyUGtsWGlYQW80VWlxT1pMdTdOWnZOT0pNQ0R1aDdVa25rWGtqeWFDSHJjVmx4SkF1VUNBbzRVYzlrNnZVNHFvZVdBbWlubmdWajcwblRtWlNTUU1DZDBpMHdtVXdtVkJ3QkR1VE9ES3AwQzB6SkkrMWd6eXNZb0wzMURpbUR2L1JIQU85ZkZTd2pqNzRCaDBhajBUMEptTDM1cExiL3BhMG40SUFXMk9kZlU0RzliWGZqMms4QTdVVzlneWt0UFFOUkZQQ21zOUdINm5aWUZkaHpKZ1VhMGdMN2c0T0QxMW9XR0hLQnZlbTRnZ0Y4cUl1TGJLcWFsZ1ZHcm1DQTlxeVlRZGVscXFlcTdjb2Y5eTh2TDludUFnMXBJN0xoY0tqYjNmU2VkS3Y2RzVFVWNFQUw3SE1YKzM0ak1zV1pGSENoZDlOQ3hSSGd6RnAyOTdvVU0wd21rd0NnUFoycVZxc1RSN1JQQVJ4WWEwVDJ4cDZxS1NxT0FIODZ1eWZWSDlUdEFqNmtnS2tEbS9Ubitpd1lvaW5RWGk5ZzloNTkwM2NYOEVNU1NLa1JHWWtqd0JudHV4dVdrNzc3VnpDQnJTN2dndlhkdGFscWFaSEtBVFdOUHF5NmxBRm9SRXNDcXo3WW5WWWFwVlY3ZG5iR0FnVWMwR0lHZmFwbXo5WFdleHlST0FJYXk4WDFpWFd3anljbkoxeS9BSTZNeCtNVU5LMkRmUm9pVE8wdTRFWjNmbjdlNWNUUk1wSktlRTNiWEJKSGdBdHBQZHEwdzE1bmhzQlROYUM1NnA1MEx1dXgxNGdNZ0EvUnJtRDBUTHBWL1dOY0xCWUJRSFAxalV1WnFwYnVTZWx4QlBpZ2Q2UmFaR1JYTUNxdFhCSkhnQXRwdTZ0WG8rdERoT3RCTVFBYVdtK09uYUtuRGhFT0FKcXJkclN4VkJ6bGYyQ3JDemlnTzlvNnU4c1ZET0JVWFhIVVMvY0M4R0UybSttUDlKNDBXc01qT3RnRFBsamlxQXdSMWxSdjljZ1VRRVBWVkxYMG5SNUhnRFBWVkxYVkVPRzhZc251QWc3b28yL2I3azZuVXlJcDRJMjlncEhnT1pmazBRMzNwSUJUOXM2N2RHYlFWekFCZ0FkeDA1ZTAzWlVENjk3bDVTWGJYYUNoZXFxYVBmcE9DM1V5bWZCVURYQklIMzJucytqYnQyOGp4UXlBQzZsdTRkR2pSNmwyMTNydDZtSWx1d3M0TUJxTjdzbXUxbWJCM0t5UFBnVFFXRDUycHZWWXlnSkQ3bDdQZGhkb0x3OXNTcm1pNCtQalNFdFB3Qm5ON2tvaTk5WHA2ZWszSVk4K0xLOWdBTFNuQmZhNVUwcDVUeHJ5TEJnQUR0U2RHWUxOSnpXY1NZSDJiUFNoaUZaZ3I5dmQ3UmN2WHV4SWlPVk1DalJXVlJ6cEZjeTFaWkUwY2JRVGx2ZWt6d09BWnFwWk1HbVIyajBwZlk0QVAzcnJzSzdkNVV3S09LQm4wcHc0U3NIVFZ1enRzTnp1Y2lZRkdzdmJYVDJUcnU1SjdZL01nZ0hhcXlxT1Z2ZWsrVXNwUlFMZ1F1bk1VRm9IOHA0VWFHOCtuL2NldmFSRk9wdk5Vb1VEaVNPZ3ZiemREVmF1Vzc4bnBjQWVjR0M5bU1IdVNUbVBBbzZNeCtOWUQyeEswNXNZTXdINGNYNSszdW5BSnAxUHF0dGNtOTdFOVF2Z1JOM2pTQmVwaHRYdzdOa3puZllkQUxSbHIyRGtzMnFPclpGVXV3VUdBTTNwTEJnem5VNGozUUlCWjNTcW1peFVmUVdqcS9XNjlOMEY0RU9PcERyK3BUczhQRncxSXB0TUpyczgrZ2JhMjNSUG1ocVJjU1lGZkpGMXFUOVdrVlJTdmtQSkpuRW1CUnFySm4zcnZ2Y21YY0hvSHdhRFFjZFROYUE5UFpQV0dkNHluelQzK1dUTEN6Um13Ykl1c0Zja2pnQW50RE9ESEQ4dlpMdjdUcmRBZlFYRG1SUm96TEs3RWtrWFIwZEhOL1p1N2ZiSnljbU9oTmw5Sm4wRGJXMjhncEVGbXY0V0FIaWlrdytYVDlYeWZVeEgreFRBRDAzb1JwVy8wOUlUY0tMZTdzcDZ2QzZQdmdNQVQxSkx6L1Vod2tOSkhPMlJPQUxhc2lIQ0R4NDhXTXhtczFYRkVRQTMwaEJoL2RoN1VxVm5VdTVKQVFjMlRWV3pkdllkZlhjQkYxTHd0RnhSNzB3YWlLUkFjNXVLR2RLL0J5SXA0SUtOUHN5Uk5OTEJIbkFtUjlKWFlSbEpiK29POWdBYzBFZ2FxalZKTVFQZ2pENzR6aE1sZXU5SnVZSUJuTmg0QldPUmxNUVI0RU05bTZra2ptaEVCdmd3R28zdVhWMWQ5U0pwaXFJNmU0SkdaSUE3MFNxTzBqMnByRjZ5dkVCajlUclVWOThsa2dhdVlRQTNKcFBKc2lRd3h2Qm5NRUNNMS9nOHdnd0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9