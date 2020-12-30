module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Work/Agoda-flights/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/Public/BottomNavbar.js":
/*!******************************************!*\
  !*** ./component/Public/BottomNavbar.js ***!
  \******************************************/
/*! exports provided: BottomNavbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomNavbar", function() { return BottomNavbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/Public.module.css */ "./css/Public.module.css");
/* harmony import */ var _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_Public_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Public\\BottomNavbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  link: {
    fontFamily: 'Roboto Slab',
    fontWeight: 400,
    letterSpacing: '1px',
    color: 'black',
    fontSize: '3rem',
    lineHeight: '4rem',
    "&:hover": {
      color: '#8F8F8F'
    }
  },
  link2: {
    fontFamily: 'Roboto Slab',
    fontWeight: 400,
    letterSpacing: '1px',
    color: 'black',
    fontSize: '1.5rem',
    lineHeight: '2rem',
    "&:hover": {
      color: '#8F8F8F'
    }
  }
});
const BottomNavbar = () => {
  const classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5___default.a, {
    mdDown: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    sm: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    sm: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    style: {
      textAlign: 'left'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 37
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/Work",
    underline: "none",
    className: classes.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 41
    }
  }, "WORK"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 37
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/Writing",
    underline: "none",
    className: classes.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 41
    }
  }, "WRITINGS"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    style: {
      textAlign: 'right'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 37
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/About",
    underline: "none",
    className: classes.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 41
    }
  }, "ABOUT"))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    sm: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5___default.a, {
    lgUp: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    sm: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    sm: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    style: {
      textAlign: 'left'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 37
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/Work",
    underline: "none",
    className: classes.link2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 41
    }
  }, "WORK"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 37
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/Writing",
    underline: "none",
    className: classes.link2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 41
    }
  }, "WRITINGS"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    style: {
      textAlign: 'right'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 37
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/About",
    underline: "none",
    className: classes.link2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 41
    }
  }, "ABOUT"))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    sm: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  })))));
};

/***/ }),

/***/ "./component/Public/Carousel.js":
/*!**************************************!*\
  !*** ./component/Public/Carousel.js ***!
  \**************************************/
/*! exports provided: Carousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return Carousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/Public.module.css */ "./css/Public.module.css");
/* harmony import */ var _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_Public_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "@material-ui/icons/ArrowBack");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ "@material-ui/icons/ArrowForward");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Public\\Carousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Carousel = props => {
  const [carousel, setCarousel] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(1);

  const handleCarouselNext = () => {
    setCarousel(2);
  };

  const handleCarouselLast = () => {
    setCarousel(1);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, carousel == 1 ? __jsx("div", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.carouselOuter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      marginTop: '3%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, __jsx("div", {
    style: {
      backgroundColor: 'white'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: props.img1,
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.carouselImg,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 33
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }))) : '', carousel == 2 ? __jsx("div", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.carouselOuter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      marginTop: '3%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }, __jsx("div", {
    style: {
      backgroundColor: 'white'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: props.img2,
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.carouselImg,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 33
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }))) : '', __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.captionContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClick: handleCarouselLast,
    disabled: carousel == 1 ? true : false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      fontSize: '1.5rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 33
    }
  }))), carousel == 1 ? __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 6,
    style: {
      marginTop: '1.5%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgDescription,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 33
    }
  }, props.caption1)) : '', carousel == 2 ? __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 6,
    style: {
      marginTop: '1.5%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgDescription,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 33
    }
  }, props.caption2)) : '', __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 3,
    style: {
      textAlign: 'right'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClick: handleCarouselNext,
    disabled: carousel == 2 ? true : false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      fontSize: '1.5rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 33
    }
  }))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  })));
};

/***/ }),

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
    href: "./SalieChien_Resume.pdf",
    target: "_blank",
    rel: "noopener",
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
    fontWeight: 500,
    lineHeight: '1.8rem',
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
  const classes = useStyles();
  const {
    handleDrawerOpen
  } = props;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
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
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
      lineNumber: 54,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 83
    }
  }, "saliejung"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default.a, {
    mdDown: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
      lineNumber: 61,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/Work",
    underline: "none",
    className: classes.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 33
    }
  }, "WORK")), __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/Writing",
    underline: "none",
    className: classes.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 33
    }
  }, "WRITINGS")), __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/About",
    underline: "none",
    className: classes.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 33
    }
  }, "ABOUT")), __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "./SalieChien_Resume.pdf",
    target: "_blank",
    rel: "noopener",
    underline: "none",
    className: classes.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 33
    }
  }, "RESUME")))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default.a, {
    lgUp: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    sm: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    sm: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: handleDrawerOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "large",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 33
    }
  })))))));
};

/***/ }),

/***/ "./component/Public/Scrollup.js":
/*!**************************************!*\
  !*** ./component/Public/Scrollup.js ***!
  \**************************************/
/*! exports provided: Scrollup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scrollup", function() { return Scrollup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "@material-ui/icons/ExpandLess");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Public\\Scrollup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  icon: {
    fontSize: '4rem',
    color: '#8F8F8F',
    "&:hover": {
      color: '#1F1F1F'
    }
  }
});
const Scrollup = props => {
  const classes = useStyles();
  const [scrollC, setScrollC] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener("scroll", onScroll);

    function onScroll() {
      setScrollC(window.scrollY);
    }
  });

  const handleScrolltoTop = () => {
    if (window !== undefined) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      align: 'right'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, scrollC > 400 ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: handleScrolltoTop,
    style: {
      backgroundColor: 'transparent'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.icon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  })) : '')));
};

/***/ }),

/***/ "./component/Work/AgodaFlights.js":
/*!****************************************!*\
  !*** ./component/Work/AgodaFlights.js ***!
  \****************************************/
/*! exports provided: AgodaFlights */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgodaFlights", function() { return AgodaFlights; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/Work.module.css */ "./css/Work.module.css");
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_Work_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_agoda_flights_flight_header_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/agoda-flights/flight-header.png */ "./public/agoda-flights/flight-header.png");
/* harmony import */ var _public_agoda_flights_flight_header_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_agoda_flights_flight_header_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_flights01_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/flights01.png */ "./public/flights01.png");
/* harmony import */ var _public_flights01_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_flights01_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_agoda_flights_flights02_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/agoda-flights/flights02.png */ "./public/agoda-flights/flights02.png");
/* harmony import */ var _public_agoda_flights_flights02_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_agoda_flights_flights02_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_agoda_flights_flights03_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/agoda-flights/flights03.png */ "./public/agoda-flights/flights03.png");
/* harmony import */ var _public_agoda_flights_flights03_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_agoda_flights_flights03_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_agoda_flights_flights04_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/agoda-flights/flights04.png */ "./public/agoda-flights/flights04.png");
/* harmony import */ var _public_agoda_flights_flights04_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_agoda_flights_flights04_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_agoda_flights_flights05_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/agoda-flights/flights05.png */ "./public/agoda-flights/flights05.png");
/* harmony import */ var _public_agoda_flights_flights05_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_agoda_flights_flights05_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_dot_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/dot.png */ "./public/dot.png");
/* harmony import */ var _public_dot_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_dot_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Process01_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Process01.js */ "./component/Work/Process01.js");
/* harmony import */ var _Process02_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Process02.js */ "./component/Work/Process02.js");
/* harmony import */ var _Process03_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Process03.js */ "./component/Work/Process03.js");
/* harmony import */ var _Public_BottomNavbar_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Public/BottomNavbar.js */ "./component/Public/BottomNavbar.js");
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Work\\AgodaFlights.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const AgodaFlights = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.img01,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    sm: 4,
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: _public_flights01_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    style: {
      width: '65%'
    },
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.flights01,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      marginTop: "5%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 3,
    md: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 6,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, "Agoda Flights")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 3,
    md: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, "Complete your journey with seat selection"), __jsx("h2", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, "\xA7")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      marginTop: '5%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.article,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      fontWeight: 700
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, "CONTEXT & CHALLENGE\xA0"), "In early 2020, Agoda Flights has launched for six months achieving 1K daily booking. We started transferring our focus from little enhancement to large-scale features, aiming to become a more mature product to fulfill all the customers' needs. Compared to the competitors, there is still a long way to chase.", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 30
    }
  }), "Seat selection is one of the core features. Not to mention that it is a sophisticated project, we also have a high dependency on the supplier to define the scope and confirm the data they could provide. Therefore, we launched the feature with the free selection that it certainly reduces the risk of implementation. From a scalable perspective, we still consider the paid seats to accommodate the scenario afterward.")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      marginTop: '5%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 5,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contentTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 29
    }
  }, "Timeline"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contentDetail,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }
  }, "March to April 2020 (3 weeks)")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contentTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  }, "Team"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contentDetail,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  }, "Designers (2), Product Manager (2), Engineers (12+), QA (2)")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contentTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 29
    }
  }, "My role"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contentDetail,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 29
    }
  }, "Competitive Analysis, User interview, Research, UI/UX Design (App)")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      marginTop: '8%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotLine,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, "\xB7\xA0\xB7\xA0\xB7")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      marginTop: '8%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 29
    }
  }, "DESIGN HIGHLIGHT")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlightTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 29
    }
  }, "Clarity of the information with sophisticated details")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 29
    }
  }, "The experience of selecting seats involving a bunch of information, from the flight segment, passenger types, seating restrictions & fare, and the facilities on the plane. It is critical to display all the information clearly to help the customer making the decision based on the complexity of their personal preference. Therefore, we aimed to surface the bare minimum of the information to be straightforward and direct to simplify the decision-making process.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  })), __jsx("div", {
    style: {
      marginTop: '5%',
      marginLeft: '6%',
      marginRight: '6%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.gallery1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: _public_agoda_flights_flights02_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 37
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.gallery1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: _public_agoda_flights_flights04_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 37
    }
  }))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.gallery1,
    style: {
      height: '100.15%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _public_agoda_flights_flights03_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 29
    }
  }))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      marginTop: '8%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 29
    }
  }, "DESIGN HIGHLIGHT")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlightTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 29
    }
  }, "Directly interacting to make decisions with ease")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 29
    }
  }, "While the customer is considering the seating between price, position, and preference, it guides them better with fluent interaction and real-time feedback. When it comes to group traveler and multiple slices, we designed many details such as updating the subtotal, the attribute of seats and zooming to help them complete the tasks faster.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 17
    }
  })), __jsx("div", {
    style: {
      marginTop: '5%',
      marginLeft: '6%',
      marginRight: '6%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      marginTop: '5%'
    },
    spacing: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.gallery1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _public_agoda_flights_flights05_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 29
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgDescription,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 25
    }
  }, "Simple and slick to keep the users focus on decision making.")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 21
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      marginTop: '8%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.reflection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 29
    }
  }, "Reflection")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotLine,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 29
    }
  }, "\xB7\xA0\xB7\xA0\xB7")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 37
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 37
    }
  }, "Benchmarking helps (a lot) for introducing a new feature - Especially for the later progress, there are many little fine-tune needing a quick decision . When engineers were building it, I already shifted my focus to other projects. It helps to recall the memory from a couple of screenshots and the research summary.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 37
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 37
    }
  }, "Benchmarking helps (a lot) for introducing a new feature - Especially for the later progress, there are many little fine-tune needing a quick decision . When engineers were building it, I already shifted my focus to other projects. It helps to recall the memory from a couple of screenshots and the research summary.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 37
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 37
    }
  }, "Benchmarking helps (a lot) for introducing a new feature - Especially for the later progress, there are many little fine-tune needing a quick decision . When engineers were building it, I already shifted my focus to other projects. It helps to recall the memory from a couple of screenshots and the research summary.")))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      marginTop: '5%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 8,
    md: 4,
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.scrollDown,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 21
    }
  }, "scroll down to learn more")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 13
    }
  }, __jsx(_Process01_js__WEBPACK_IMPORTED_MODULE_10__["Process01"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 13
    }
  }, __jsx(_Process02_js__WEBPACK_IMPORTED_MODULE_11__["Process02"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 13
    }
  }, __jsx(_Process03_js__WEBPACK_IMPORTED_MODULE_12__["Process03"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 17
    }
  })), __jsx("div", {
    style: {
      marginTop: '6%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 13
    }
  }, __jsx(_Public_BottomNavbar_js__WEBPACK_IMPORTED_MODULE_13__["BottomNavbar"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 17
    }
  })));
};

/***/ }),

/***/ "./component/Work/Process01.js":
/*!*************************************!*\
  !*** ./component/Work/Process01.js ***!
  \*************************************/
/*! exports provided: Process01 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Process01", function() { return Process01; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/Work.module.css */ "./css/Work.module.css");
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_Work_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_process_process01_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/process/process01.png */ "./public/process/process01.png");
/* harmony import */ var _public_process_process01_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_process_process01_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_process_process02_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/process/process02.png */ "./public/process/process02.png");
/* harmony import */ var _public_process_process02_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_process_process02_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_process_process03_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/process/process03.png */ "./public/process/process03.png");
/* harmony import */ var _public_process_process03_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_process_process03_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_process_process04_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/process/process04.png */ "./public/process/process04.png");
/* harmony import */ var _public_process_process04_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_process_process04_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_process_process05_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/process/process05.png */ "./public/process/process05.png");
/* harmony import */ var _public_process_process05_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_process_process05_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_dot_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/dot.png */ "./public/dot.png");
/* harmony import */ var _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_dot_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Public_Carousel_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Public/Carousel.js */ "./component/Public/Carousel.js");
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Work\\Process01.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const Process01 = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.progressMain,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      marginTop: '5%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 8,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    style: {
      marginTop: '8%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.progressTitle1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 33
    }
  }, "THE PROCESS / 01")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.progressTitle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 33
    }
  }, "Research, Understand & Define")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotLine,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 33
    }
  }, "\xB7\xA0\xB7\xA0\xB7")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      marginTop: '5%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 33
    }
  }, "COMPETITIVE ANALYSIS")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisTitle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 33
    }
  }, "Feature comparison to understand the industry standard")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 33
    }
  }, "At the beginning of the kick-off, we didn't receive well-defined requirements, and the back-end engineers were figuring out the data from the suppliers. Designers started from benchmarking to understand the fundamental functions of seat selection. Based on the feature comparison, I noted down the", __jsx("span", {
    style: {
      fontWeight: 700
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 37
    }
  }, "\xA0various scenarios, features, flow, chance for optimization, and potential risks"), ", as a starting point to explore how we could shape the product and define the scope of MVP.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, __jsx(_Public_Carousel_js__WEBPACK_IMPORTED_MODULE_9__["Carousel"], {
    img1: _public_process_process01_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    img2: _public_process_process02_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    caption1: 'Noted the features across the process. Purple stands for fundamental function, yellow stands for the uncommon trait comparing to other competitors',
    caption2: 'Noted the features across the process. Purple stands for fundamental function, yellow stands for the uncommon trait comparing to other competitors',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      marginTop: '2%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    style: {
      marginTop: '10%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 33
    }
  }, "IN-DEPTH INTERVIEW")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisTitle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 33
    }
  }, "Collect insights from users")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 33
    }
  }, "Since it's an entirely new feature, and we still have enough lead time. We decided to do the user interview to collect more insights from the users. The research plan, discussion guides, and all five sessions were all conducted by the designers.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      marginTop: '8%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.researchTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 33
    }
  }, "RESEARCH GOAL")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 41
    }
  }, "Define the scope of MVP in the first phase")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    style: {
      marginTop: '5%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.researchTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 33
    }
  }, "KEY QUESTIONS")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 41
    }
  }, "What's travelers' intention to select a seat?")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 41
    }
  }, "What kind of information do travelers need to know when choosing the seats?")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 41
    }
  }, "What can they do without when looking at all the content that is on the page?")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 41
    }
  }, "What kind of considerations goes into selecting the seats?")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 41
    }
  }, "For those who didn't select seats during booking, would they choose in post-booking or online check-in?")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 41
    }
  }, "At which point during the booking process would the customer prefer to select the seats?")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 41
    }
  }, "In what situation would the travelers pay for the seats?")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    style: {
      marginTop: '5%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.researchTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 33
    }
  }, "PARTICIPANTS OVERVIEW")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 41
    }
  }, "Four participants preferred booking with airlines depends on the destination and the Frequent-flyer program they have.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 41
    }
  }, "Three participants mentioned that they usually book through the desktop.")))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      marginTop: '4%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 29
    }
  }, __jsx("div", {
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _public_process_process03_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 33
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    style: {
      marginLeft: '1%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgDescription2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 33
    }
  }, "We interviewed by video call due to work-from-home policy when the COVID-19 hit. It is tricky to observe behavior outside of the screen since participants only shared the screen on the phone")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      marginTop: '5%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.researchTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 33
    }
  }, "FIND-OUTS")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 41
    }
  }, "If the seat map itself is clear enough on the information and UI, the participants won\u2019t pay attention to the seat legend. However, it\u2019s critical to explain different options if they want to check more details.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 41
    }
  }, "They all have precise preferences on seat selection: (1) Front (The very front of the available options) (2) Window/Aisle/ No middle (3) Legroom (4) Distance to the toilet/exit (especially for kids and elder)")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 41
    }
  }, "The intention to choose seats during booking is the same for everyone: (1) If free (2) If travel with family (kids, parents) or friends (sit together) (3) Long-haul flights (3.5 hrs+) (4) Crowded flights")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 41
    }
  }, "When landing on the selection page, it always takes a long time that seems to have crashed.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    style: {
      marginTop: '5%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.researchTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 33
    }
  }, "NEXT STEP")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 41
    }
  }, "Make sure the UI of the seat map is clear enough to recognize")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 41
    }
  }, "When offering various options of seats, do clarify the difference or benefits of the seats")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 41
    }
  }, "Make sure we display the first available seat visible without scroll when landing on the page")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 41
    }
  }, "Display clearly which seats belong to which passenger")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 41
    }
  }, "Consider the special request for some specific types of traveler, such as kids, elderly, business and disabled")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 41
    }
  }, "Reminder for selecting seats when it's free")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 41
    }
  }, "Reminder for group traveler")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 41
    }
  }, "Allow users to choose seats after booked Make sure we display clear feedback for loading")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 41
    }
  }, "Make sure we display clear feedback for loading")))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      marginTop: '3%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      backgroundColor: 'white'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _public_process_process04_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 29
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      marginTop: '1%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgDescription2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 33
    }
  }, "By features Audit, we organized the potential features in terms of frequency adoption (amount of people using them). Post-its in the dark blue area were the actions been used by the participants the most. We also categorized all the actions into implementation stages as a preliminary analysis.")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    style: {
      marginTop: '10%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 33
    }
  }, "RESEARCH SYNTHESIZE")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisTitle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 33
    }
  }, "Define the bare minimum of product")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568,
      columnNumber: 33
    }
  }, "Considering the dependency on the supplier and the development effort, we're looking for the MVP version of the solution to reduce the risk for implementation. Hence, after the research phase, we broke down all the features and requirements into phased tasks.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      marginTop: '3%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      backgroundColor: 'white'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _public_process_process05_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584,
      columnNumber: 29
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      marginTop: '1%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgDescription2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 33
    }
  }, "We listed out the potential design criteria and discussed with the product manager the scope of the project.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606,
      columnNumber: 21
    }
  }))));
};

/***/ }),

/***/ "./component/Work/Process02.js":
/*!*************************************!*\
  !*** ./component/Work/Process02.js ***!
  \*************************************/
/*! exports provided: Process02 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Process02", function() { return Process02; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/Work.module.css */ "./css/Work.module.css");
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_Work_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_process_process06_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/process/process06.png */ "./public/process/process06.png");
/* harmony import */ var _public_process_process06_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_process_process06_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_process_process07_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/process/process07.png */ "./public/process/process07.png");
/* harmony import */ var _public_process_process07_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_process_process07_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_process_process08_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/process/process08.png */ "./public/process/process08.png");
/* harmony import */ var _public_process_process08_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_process_process08_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_process_process09_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/process/process09.png */ "./public/process/process09.png");
/* harmony import */ var _public_process_process09_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_process_process09_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_process_process10_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/process/process10.png */ "./public/process/process10.png");
/* harmony import */ var _public_process_process10_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_process_process10_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_process_process11_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/process/process11.png */ "./public/process/process11.png");
/* harmony import */ var _public_process_process11_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_process_process11_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Public_Carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Public/Carousel */ "./component/Public/Carousel.js");
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Work\\Process02.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










;
const Process02 = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.progressMain,
    style: {
      paddingTop: '3%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 8,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    style: {
      marginTop: '8%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.progressTitle1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 33
    }
  }, "THE PROCESS / 02")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.progressTitle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 33
    }
  }, "Design & Iterate")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotLine,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 33
    }
  }, "\xB7\xA0\xB7\xA0\xB7")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      marginTop: '1%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    style: {
      marginTop: '10%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 33
    }
  }, "PRELIMINARY EXPLORATIONS")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisTitle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 33
    }
  }, "Early concepts to gather feedback and direction")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }, "The interface might be the most challenging part of this project. For mobile, it is even harder to display so much information on the little tiny screen. In the beginning, I focused on the info structure and the overall flow.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      marginTop: '3%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      backgroundColor: 'white'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _public_process_process06_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      marginTop: '3%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    style: {
      marginTop: '10%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 33
    }
  }, "DESIGN ITERATION")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisTitle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  }, "Deep dive into the details")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 33
    }
  }, "After confirming the flow, I put more effort into the exploration of the selection process. There are flight segments, passenger selection, seat legend, seat map, and the price update. We were looking for an approach to make the displaying more efficient, and explain clear on what's the current state of the process.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  })), __jsx("div", {
    style: {
      marginTop: '5%',
      marginLeft: '2%',
      marginRight: '2%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    lg: 3,
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.gallery1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _public_process_process07_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 33
    }
  })), __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgDescription3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 29
    }
  }, "Condensed legend makes the widest displaying on the map.")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    lg: 3,
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.gallery1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _public_process_process08_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 33
    }
  })), __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgDescription3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 29
    }
  }, "Tab UI on the passenger selection might cause the problem for group travelers.")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    lg: 3,
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.gallery1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _public_process_process09_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 33
    }
  })), __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgDescription3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 29
    }
  }, "The different state of passenger selection button is hard to recognize at the first glance.")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    lg: 3,
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.gallery1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _public_process_process10_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 33
    }
  })), __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgDescription3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 29
    }
  }, "Showing initial for the selected seating might not be familiar to non-English speaker countries.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      marginTop: '3%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    style: {
      marginTop: '10%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 33
    }
  }, "FINAL DESIGN")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisTitle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 33
    }
  }, "Free seats for launch and the next phase")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 33
    }
  }, "Based on the timeline and the development effort, we did compromise to simplify the process as much as possible. The most challenging part must be the worst case for multiple segments and multiple stops flight, the design also should be scalable to the paid options.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 17
    }
  }, __jsx(_Public_Carousel__WEBPACK_IMPORTED_MODULE_9__["Carousel"], {
    img1: _public_process_process11_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    img2: _public_process_process11_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    caption1: 'Compared to the initial flow, it came out to a more sophisticated flow after involved in the developer.',
    caption2: 'Noted the features across the process. Purple stands for fundamental function, yellow stands for the uncommon trait comparing to other competitors',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 21
    }
  }))));
};

/***/ }),

/***/ "./component/Work/Process03.js":
/*!*************************************!*\
  !*** ./component/Work/Process03.js ***!
  \*************************************/
/*! exports provided: Process03 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Process03", function() { return Process03; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/Work.module.css */ "./css/Work.module.css");
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_Work_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Public_Carousel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Public/Carousel.js */ "./component/Public/Carousel.js");
/* harmony import */ var _public_agoda_flights_process12_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/agoda-flights/process12.png */ "./public/agoda-flights/process12.png");
/* harmony import */ var _public_agoda_flights_process12_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_agoda_flights_process12_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Work\\Process03.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Process03 = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.progressMain,
    style: {
      paddingTop: '3%',
      paddingBottom: '8%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 8,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    style: {
      marginTop: '8%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.progressTitle1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 33
    }
  }, "THE PROCESS / 03")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.progressTitle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 33
    }
  }, "Evaluate")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotLine,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 33
    }
  }, "\xB7\xA0\xB7\xA0\xB7")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      marginTop: '3%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    style: {
      marginTop: '10%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 33
    }
  }, "TECHNICAL REVIEW")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisTitle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 33
    }
  }, "Refine the details to close the gap")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 33
    }
  }, "When we implemented the project, there were more issues to recognize from the supplier. It is hard to understand all the technical constraints and define the solution accordingly. Therefore, we worked closely with the QA engineers at the last mile to prepare all the worse scenarios. I appreciated their effort to be the bridge between the designer, developer, business insight, and provide suggestions at balance.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx(_Public_Carousel_js__WEBPACK_IMPORTED_MODULE_3__["Carousel"], {
    img1: _public_agoda_flights_process12_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    img2: _public_agoda_flights_process12_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    caption1: 'A completed excel to list down all the CMS across the platforms waiting for translation.',
    caption2: 'A completed excel to list down all the CMS across the platforms waiting for translation.',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      marginTop: '3%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    style: {
      marginTop: '10%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 33
    }
  }, "OUTCOME")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisTitle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 33
    }
  }, "More to be updated...")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 33
    }
  }, "The project is still implementing, performance result will be updated afterward.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }))));
};

/***/ }),

/***/ "./component/Work/Secure.js":
/*!**********************************!*\
  !*** ./component/Work/Secure.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/Work.module.css */ "./css/Work.module.css");
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_Work_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ "@material-ui/icons/ArrowForward");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _AgodaFlights_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AgodaFlights.js */ "./component/Work/AgodaFlights.js");
/* harmony import */ var _component_Public_Header_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../component/Public/Header.js */ "./component/Public/Header.js");
/* harmony import */ var _Public_Scrollup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Public/Scrollup */ "./component/Public/Scrollup.js");
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Work\\Secure.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











class Secure extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      errorMessage: "",
      isPass: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.setStateByName = this.setStateByName.bind(this);
    this.recursiveReplaceValueByName = this.recursiveReplaceValueByName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, callBack, nullValue = null) {
    const {
      value,
      name
    } = e.target;

    if (typeof callBack !== "function") {
      callBack = function () {};
    }

    this.setStateByName(name, value !== "" ? value : null, callBack);
  }

  setStateByName(name, value, callBack) {
    this.setState(function (prevState) {
      return this.recursiveReplaceValueByName(name, prevState, value);
    }, callBack);
  }

  recursiveReplaceValueByName(name, object, value) {
    var keysArr = name.replace(/\[/g, ".").replace(/\]/g, "").split(".");
    var target = object;

    for (var i = 0; i < keysArr.length; i++) {
      let key = keysArr[i];

      if (!target.hasOwnProperty(key)) {
        return object;
      }

      if (i == keysArr.length - 1) {
        target[key] = value;
      }

      target = target[key];
    }

    return object;
  }

  handleSubmit() {
    if (this.state.password == '20180801') {
      this.setState({
        password: "",
        isPass: true,
        errorMessage: ""
      });
    } else {
      this.setState({
        errorMessage: 'Enter Correct Password'
      });
    }
  }

  render() {
    const {
      handleDrawerOpen
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }
    }, this.state.isPass == false ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 25
      }
    }, __jsx(_component_Public_Header_js__WEBPACK_IMPORTED_MODULE_8__["Header"], {
      handleDrawerOpen: handleDrawerOpen,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 29
      }
    })), __jsx("div", {
      className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 29
      }
    }, "Secure area"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 29
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 29
      }
    }), __jsx("span", {
      className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 29
      }
    }, "Please ask the password for permission."), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      container: true,
      className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.password,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 10,
      sm: 6,
      md: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "password",
      label: "Enter password",
      variant: "outlined",
      name: "password",
      value: this.state.password,
      onChange: this.handleChange,
      onKeyDown: e => {
        if (e.keyCode === 13) {
          this.handleSubmit();
        }
      },
      helperText: this.state.errorMessage,
      style: {
        width: "100%"
      },
      InputProps: {
        endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4___default.a, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 45
          }
        }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
          onClick: this.handleSubmit,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 49
          }
        }, __jsx(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_6___default.a, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 53
          }
        })))
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 37
      }
    }))))) : "", this.state.isPass == true ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 25
      }
    }, __jsx(_component_Public_Header_js__WEBPACK_IMPORTED_MODULE_8__["Header"], {
      handleDrawerOpen: handleDrawerOpen,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 29
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      container: true,
      style: {
        top: '70%',
        position: 'fixed'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 4,
      md: 7,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 29
      }
    }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 5,
      md: 4,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 29
      }
    }, __jsx(_Public_Scrollup__WEBPACK_IMPORTED_MODULE_9__["Scrollup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 33
      }
    }))), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 25
      }
    }, __jsx(_AgodaFlights_js__WEBPACK_IMPORTED_MODULE_7__["AgodaFlights"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 29
      }
    }))) : "");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Secure);

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

/***/ "./pages/Work/Agoda-flights/index.js":
/*!*******************************************!*\
  !*** ./pages/Work/Agoda-flights/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Public_Footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/Public/Footer.js */ "./component/Public/Footer.js");
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../css/Work.module.css */ "./css/Work.module.css");
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_Work_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_Work_Secure_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../component/Work/Secure.js */ "./component/Work/Secure.js");
/* harmony import */ var _component_Public_Drawer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../component/Public/Drawer.js */ "./component/Public/Drawer.js");
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\pages\\Work\\Agoda-flights\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Page = () => {
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
      lineNumber: 20,
      columnNumber: 9
    }
  }, drawer == false ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, __jsx(_component_Work_Secure_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handleDrawerOpen: handleDrawerOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, __jsx(_component_Public_Footer_js__WEBPACK_IMPORTED_MODULE_1__["Footer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }))) : '', drawer == true ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      backgroundColor: '#1f1f1f'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx(_component_Public_Drawer_js__WEBPACK_IMPORTED_MODULE_4__["Drawer"], {
    handleDrawerClose: handleDrawerClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }))) : '');
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./public/agoda-flights/flight-header.png":
/*!************************************************!*\
  !*** ./public/agoda-flights/flight-header.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/flight-header-bf40c064a63f896429946daea87faffc.png";

/***/ }),

/***/ "./public/agoda-flights/flights02.png":
/*!********************************************!*\
  !*** ./public/agoda-flights/flights02.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/flights02-0f63756b3f2bf5d565d571876971465d.png";

/***/ }),

/***/ "./public/agoda-flights/flights03.png":
/*!********************************************!*\
  !*** ./public/agoda-flights/flights03.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/flights03-96b4238fa9e5235c6e60c54aecdbe14b.png";

/***/ }),

/***/ "./public/agoda-flights/flights04.png":
/*!********************************************!*\
  !*** ./public/agoda-flights/flights04.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/flights04-251a315a328d09ead820dbfb7f4e489d.png";

/***/ }),

/***/ "./public/agoda-flights/flights05.png":
/*!********************************************!*\
  !*** ./public/agoda-flights/flights05.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/flights05-5adbcd386511c0b73bc972ff6880a77a.png";

/***/ }),

/***/ "./public/agoda-flights/process12.png":
/*!********************************************!*\
  !*** ./public/agoda-flights/process12.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/process12-997606fdefde957f9f9c4470834c67b9.png";

/***/ }),

/***/ "./public/dot.png":
/*!************************!*\
  !*** ./public/dot.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABwSURBVHgBfY9RDYAwDETX8sPf5mBIAEk4AEVYAAc4AAlIqINyJVtCSMpLbll6t+VKAXRAVRdceyhBKxHNF6BiHsV4IwgNTYyxvvzS2pxyzhp8hO34CSQLnJ6LbhujyOj8Isw88bMK2tpq1YB2m5l3A3hmJA+V1mp0AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./public/flights01.png":
/*!******************************!*\
  !*** ./public/flights01.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/flights01-e9fd3766877f17d89aa858b86a48dfb7.png";

/***/ }),

/***/ "./public/process/process01.png":
/*!**************************************!*\
  !*** ./public/process/process01.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/process01-88c12a1d1bfa7c0c778869e0d251e4ae.png";

/***/ }),

/***/ "./public/process/process02.png":
/*!**************************************!*\
  !*** ./public/process/process02.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/process02-fe1b2f359eefdc715bd15f62fda78e2d.png";

/***/ }),

/***/ "./public/process/process03.png":
/*!**************************************!*\
  !*** ./public/process/process03.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/process03-fcb8bbf35e28e8b1f5f8126ae5a2544c.png";

/***/ }),

/***/ "./public/process/process04.png":
/*!**************************************!*\
  !*** ./public/process/process04.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/process04-64cf4e50e5ef091946947d311aa93aae.png";

/***/ }),

/***/ "./public/process/process05.png":
/*!**************************************!*\
  !*** ./public/process/process05.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/process05-98a9cb9304c851ed2995813fa938a093.png";

/***/ }),

/***/ "./public/process/process06.png":
/*!**************************************!*\
  !*** ./public/process/process06.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/process06-c317fc7e1b3f742f9309b4b79ca60200.png";

/***/ }),

/***/ "./public/process/process07.png":
/*!**************************************!*\
  !*** ./public/process/process07.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/process07-94af263f1f45e41a027c05fbe605ea94.png";

/***/ }),

/***/ "./public/process/process08.png":
/*!**************************************!*\
  !*** ./public/process/process08.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/process08-47fc2c5ec1feaa29a94b02432bdaad0a.png";

/***/ }),

/***/ "./public/process/process09.png":
/*!**************************************!*\
  !*** ./public/process/process09.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/process09-a3c5930ba8444472970fb172abe39457.png";

/***/ }),

/***/ "./public/process/process10.png":
/*!**************************************!*\
  !*** ./public/process/process10.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/process10-aa2bf7630ff97b79f9ba4fe4e7dbe006.png";

/***/ }),

/***/ "./public/process/process11.png":
/*!**************************************!*\
  !*** ./public/process/process11.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/process11-30170bd002049811891f8effe4aea2dc.png";

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

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

/***/ "@material-ui/core/InputAdornment":
/*!***************************************************!*\
  !*** external "@material-ui/core/InputAdornment" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/ArrowBack":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ArrowBack" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowBack");

/***/ }),

/***/ "@material-ui/icons/ArrowForward":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ArrowForward" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowForward");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "@material-ui/icons/ExpandLess":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandLess" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandLess");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9Cb3R0b21OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9DYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0RyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL1Njcm9sbHVwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9Xb3JrL0Fnb2RhRmxpZ2h0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvV29yay9Qcm9jZXNzMDEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1dvcmsvUHJvY2VzczAyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9Xb3JrL1Byb2Nlc3MwMy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvV29yay9TZWN1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vY3NzL1B1YmxpYy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2Nzcy9Xb3JrLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvV29yay9BZ29kYS1mbGlnaHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9hZ29kYS1mbGlnaHRzL2ZsaWdodC1oZWFkZXIucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hZ29kYS1mbGlnaHRzL2ZsaWdodHMwMi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fnb2RhLWZsaWdodHMvZmxpZ2h0czAzLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYWdvZGEtZmxpZ2h0cy9mbGlnaHRzMDQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hZ29kYS1mbGlnaHRzL2ZsaWdodHMwNS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fnb2RhLWZsaWdodHMvcHJvY2VzczEyLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZG90LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZmxpZ2h0czAxLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvcHJvY2Vzcy9wcm9jZXNzMDEucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9wcm9jZXNzL3Byb2Nlc3MwMi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczAzLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvcHJvY2Vzcy9wcm9jZXNzMDQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9wcm9jZXNzL3Byb2Nlc3MwNS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczA2LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvcHJvY2Vzcy9wcm9jZXNzMDcucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9wcm9jZXNzL3Byb2Nlc3MwOC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczA5LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvcHJvY2Vzcy9wcm9jZXNzMTAucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9wcm9jZXNzL3Byb2Nlc3MxMS5wbmciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93Rm9yd2FyZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRMZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJsaW5rIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiY29sb3IiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJsaW5rMiIsIkJvdHRvbU5hdmJhciIsImNsYXNzZXMiLCJzdHlsZXMiLCJtYWluMSIsInRleHRBbGlnbiIsIkNhcm91c2VsIiwicHJvcHMiLCJjYXJvdXNlbCIsInNldENhcm91c2VsIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImhhbmRsZUNhcm91c2VsTmV4dCIsImhhbmRsZUNhcm91c2VsTGFzdCIsImNhcm91c2VsT3V0ZXIiLCJtYXJnaW5Ub3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpbWcxIiwiY2Fyb3VzZWxJbWciLCJpbWcyIiwiY2FwdGlvbkNvbnRhaW5lciIsImltZ0Rlc2NyaXB0aW9uIiwiY2FwdGlvbjEiLCJjYXB0aW9uMiIsIm1hcmdpbkxlZnQiLCJkcmF3ZXJMaW5rIiwiZHJhd2VySGVhZGVyIiwicGFkZGluZ1RvcCIsIkRyYXdlciIsImhhbmRsZURyYXdlckNsb3NlIiwiaGVpZ2h0IiwibWFyZ2luUmlnaHQiLCJkcmF3ZXJUaXRsZSIsImNvcHlyaWdodCIsIkZvb3RlciIsImZvb3RlckJsb2NrIiwiZm9vdGVyVGl0bGUiLCJmb290ZXJMZWZ0VGl0bGUiLCJmb290ZXJMZWZ0Q29udGVudCIsImZvb3RlckJsb2NrMiIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiSGVhZGVyIiwiaGFuZGxlRHJhd2VyT3BlbiIsInRpdGxlIiwibWVudUJhciIsImljb24iLCJTY3JvbGx1cCIsInNjcm9sbEMiLCJzZXRTY3JvbGxDIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uU2Nyb2xsIiwic2Nyb2xsWSIsImhhbmRsZVNjcm9sbHRvVG9wIiwidW5kZWZpbmVkIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImFsaWduIiwiQWdvZGFGbGlnaHRzIiwiaW1nMDEiLCJmbGlnaHRzMDEiLCJ3aWR0aCIsInRpdGxlMiIsInRpdGxlMyIsInRpdGxlNCIsImFydGljbGUiLCJjb250ZW50IiwiY29udGVudFRpdGxlIiwiY29udGVudERldGFpbCIsImRvdExpbmUiLCJkZXNpZ25IaWdobGlnaHQiLCJkZXNpZ25IaWdobGlnaHRUaXRsZSIsImRlc2lnbkhpZ2hsaWdodENvbnRlbnQiLCJnYWxsZXJ5MSIsImZsaWdodHMwMiIsImZsaWdodHMwNCIsImZsaWdodHMwMyIsImZsaWdodHMwNSIsInJlZmxlY3Rpb24iLCJkb3RBbGlnbiIsImRvdCIsInNjcm9sbERvd24iLCJQcm9jZXNzMDEiLCJwcm9ncmVzc01haW4iLCJwcm9ncmVzc1RpdGxlMSIsInByb2dyZXNzVGl0bGUyIiwiY29tcGV0aXRpdmVBbmFseXNpc1RpdGxlMiIsImNvbXBldGl0aXZlQW5hbHlzaXNDb250ZW50IiwicHJvY2VzczAxIiwicHJvY2VzczAyIiwicmVzZWFyY2hUaXRsZSIsImNvbGxlY3RJbnNpZ2h0Q29udGVudCIsInByb2Nlc3MwMyIsImltZ0Rlc2NyaXB0aW9uMiIsInByb2Nlc3MwNCIsInByb2Nlc3MwNSIsIlByb2Nlc3MwMiIsInByb2Nlc3MwNiIsInByb2Nlc3MwNyIsImltZ0Rlc2NyaXB0aW9uMyIsInByb2Nlc3MwOCIsInByb2Nlc3MwOSIsInByb2Nlc3MxMCIsInByb2Nlc3MxMSIsIlByb2Nlc3MwMyIsInBhZGRpbmdCb3R0b20iLCJwcm9jZXNzMTIiLCJTZWN1cmUiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInN0YXRlIiwicGFzc3dvcmQiLCJlcnJvck1lc3NhZ2UiLCJpc1Bhc3MiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwic2V0U3RhdGVCeU5hbWUiLCJyZWN1cnNpdmVSZXBsYWNlVmFsdWVCeU5hbWUiLCJoYW5kbGVTdWJtaXQiLCJlIiwiY2FsbEJhY2siLCJudWxsVmFsdWUiLCJ2YWx1ZSIsIm5hbWUiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsIm9iamVjdCIsImtleXNBcnIiLCJyZXBsYWNlIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJyZW5kZXIiLCJtYWluIiwiZGVzY3JpcHRpb24iLCJrZXlDb2RlIiwiZW5kQWRvcm5tZW50IiwiaGVhZGVyIiwicG9zaXRpb24iLCJQYWdlIiwiZHJhd2VyIiwic2V0RHJhd2VyIiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9E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Ozs7Ozs7QUNBQSx1Rjs7Ozs7Ozs7Ozs7QUNBQSx1Rjs7Ozs7Ozs7Ozs7QUNBQSx1Rjs7Ozs7Ozs7Ozs7QUNBQSx1Rjs7Ozs7Ozs7Ozs7QUNBQSx1Rjs7Ozs7Ozs7Ozs7QUNBQSxpQ0FBaUMsNFM7Ozs7Ozs7Ozs7O0FDQWpDLHVGOzs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL1dvcmsvQWdvZGEtZmxpZ2h0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvV29yay9BZ29kYS1mbGlnaHRzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1B1YmxpYy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGxpbms6IHtcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8gU2xhYicsXHJcbiAgICAgICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICAgICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgICAgICBjb2xvcjonYmxhY2snLFxyXG4gICAgICAgIGZvbnRTaXplOiczcmVtJyxcclxuICAgICAgICBsaW5lSGVpZ2h0Oic0cmVtJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOicjOEY4RjhGJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBsaW5rMjoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90byBTbGFiJyxcclxuICAgICAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgICAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgICAgIGNvbG9yOidibGFjaycsXHJcbiAgICAgICAgZm9udFNpemU6JzEuNXJlbScsXHJcbiAgICAgICAgbGluZUhlaWdodDonMnJlbScsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjonIzhGOEY4RidcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJvdHRvbU5hdmJhciA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbjF9PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8SGlkZGVuIG1kRG93bj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBzbT17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IHN0eWxlPXt7dGV4dEFsaWduOidsZWZ0J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvV29ya1wiIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PldPUks8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1dyaXRpbmdcIiB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5XUklUSU5HUzwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBzdHlsZT17e3RleHRBbGlnbjoncmlnaHQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9BYm91dFwiIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PkFCT1VUPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBzbT17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG5cclxuICAgICAgICAgICAgICAgIDxIaWRkZW4gbGdVcD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBzbT17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IHN0eWxlPXt7dGV4dEFsaWduOidsZWZ0J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvV29ya1wiIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmsyfT5XT1JLPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9Xcml0aW5nXCIgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMubGluazJ9PldSSVRJTkdTPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IHN0eWxlPXt7dGV4dEFsaWduOidyaWdodCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0Fib3V0XCIgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMubGluazJ9PkFCT1VUPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBzbT17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1B1YmxpYy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBBcnJvd0JhY2tJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2snO1xyXG5pbXBvcnQgQXJyb3dGb3J3YXJkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dGb3J3YXJkJztcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbCA9IChwcm9wcykgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBbY2Fyb3VzZWwsIHNldENhcm91c2VsXSA9IFJlYWN0LnVzZVN0YXRlKDEpO1xyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVDYXJvdXNlbE5leHQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Q2Fyb3VzZWwoMik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2Fyb3VzZWxMYXN0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldENhcm91c2VsKDEpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgICAge2Nhcm91c2VsID09IDE/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsT3V0ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e21hcmdpblRvcDonMyUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjond2hpdGUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb3BzLmltZzF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsSW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gbWQ9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgOicnfVxyXG5cclxuICAgICAgICAgICAge2Nhcm91c2VsID09IDI/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsT3V0ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e21hcmdpblRvcDonMyUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjond2hpdGUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb3BzLmltZzJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsSW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IG1kPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDonJ31cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5jYXB0aW9uQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDYXJvdXNlbExhc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Nhcm91c2VsPT0xP3RydWU6ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93QmFja0ljb24gc3R5bGU9e3tmb250U2l6ZTonMS41cmVtJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJvdXNlbCA9PSAxP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzEuNSUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaW1nRGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2FwdGlvbjF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Jyd9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2Fyb3VzZWwgPT0gMj8gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzEuNSUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaW1nRGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2FwdGlvbjJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Jyd9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBzdHlsZT17e3RleHRBbGlnbjoncmlnaHQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNhcm91c2VsTmV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y2Fyb3VzZWw9PTI/dHJ1ZTpmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dGb3J3YXJkSWNvbiBzdHlsZT17e2ZvbnRTaXplOicxLjVyZW0nfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IG1kPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2Nzcy9QdWJsaWMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgbGluazoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICAgICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgICAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXHJcbiAgICAgICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgICAgIGZvbnRTaXplOicxOHB4JyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOidibGFjaydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZHJhd2VyTGluazoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgdGV4dEFsaWduOidsZWZ0JyxcclxuICAgICAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgICAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgICAgIGNvbG9yOicjOEY4RjhGJyxcclxuICAgICAgICBmb250U2l6ZTonMjJweCcsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjonYmxhY2snXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRyYXdlckhlYWRlcjoge1xyXG4gICAgICAgIHBhZGRpbmdUb3A6JzNyZW0nXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IERyYXdlciA9IChwcm9wcykgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGhhbmRsZURyYXdlckNsb3NlXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDonMTAwdmgnLCBtYXJnaW5MZWZ0Oic2JScsIG1hcmdpblJpZ2h0Oic2JScsIHBhZGRpbmdUb3A6IFwiMTBweFwifX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRyYXdlclRpdGxlfT5zYWxpZWp1bmc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs3fT48L0dyaWQ+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlSWNvbiBzdHlsZT17e2NvbG9yOicjQjhCOEI4J319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPiBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJIZWFkZXJ9IHN0eWxlPXt7bWFyZ2luVG9wOic0cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvV29ya1wiIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckxpbmt9PldPUks8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+ICAgIFxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvV3JpdGluZ1wiIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckxpbmt9PldSSVRJTkdTPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvQWJvdXRcIiB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJMaW5rfT5BQk9VVDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScuL1NhbGllQ2hpZW5fUmVzdW1lLnBkZicgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXInIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckxpbmt9PlJFU1VNRTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD4gICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0gIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1B1YmxpYy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBsaW5rOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250V2VpZ2h0OjUwMCxcclxuICAgICAgICBsaW5lSGVpZ2h0OicxLjhyZW0nLFxyXG4gICAgICAgIGNvbG9yOicjOEY4RjhGJyxcclxuICAgICAgICBmb250U2l6ZTonMXJlbScsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjonYmxhY2snXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvcHlyaWdodDoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICAgICAgbGluZUhlaWdodDonMXJlbScsXHJcbiAgICAgICAgZm9udFNpemU6JzAuOXJlbScsXHJcbiAgICAgICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6J2JsYWNrJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7ICAgIFxyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckJsb2NrfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17N30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNhbGllIFNoZW5nSnVuZyBDaGllbiAtLS0gUHJvZHVjdCBEZXNpZ25lclxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs1fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckxlZnRUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9wZW4gdG8gbmV3IG9wcG9ydHVuaXRpZXNcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSdpbmhlcml0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJMZWZ0Q29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbGllanVuZzQ3QGdtYWlsLmNvbVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTGlua2VkaW5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWVkaXVtXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyQmxvY2syfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb3B5cmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEZXNpZ25lZCBieSBDaGllbiBTaGVuZ0p1bmcgwqkgMjAyMCBhbGwgcmlnaHRzIHJlc2VydmUgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvcHlyaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERldmVsb3BlZCBieSA8TGluayB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb3B5cmlnaHR9PldhbmcgV2VpQW48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3toZWlnaHQ6JzNyZW0nfX0+PC9HcmlkPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvUHVibGljLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcclxuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGxpbms6IHtcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogJzMycHgnLFxyXG4gICAgICAgIGNvbG9yOicjOEY4RjhGJyxcclxuICAgICAgICBmb250U2l6ZTonMThweCcsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjonYmxhY2snXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRyYXdlckxpbms6IHtcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIHRleHRBbGlnbjonbGVmdCcsXHJcbiAgICAgICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICAgICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgICAgICBjb2xvcjonIzhGOEY4RicsXHJcbiAgICAgICAgZm9udFNpemU6JzIycHgnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6J2JsYWNrJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkcmF3ZXJIZWFkZXI6IHtcclxuICAgICAgICBwYWRkaW5nTGVmdDonMnJlbScsXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0OicycmVtJyxcclxuICAgICAgICBtYXJnaW5Ub3A6JzNyZW0nXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgaGFuZGxlRHJhd2VyT3BlblxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW4xfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIHVuZGVybGluZT0nbm9uZScgc3R5bGU9e3tjb2xvcjonIzFGMUYxRid9fT48c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+c2FsaWVqdW5nPC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEhpZGRlbiBtZERvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVCYXJ9IHN0eWxlPXt7bWFyZ2luVG9wOicwLjVyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvV29yaycgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+V09SSzwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9Xcml0aW5nJyB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5XUklUSU5HUzwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9BYm91dCcgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+QUJPVVQ8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScuL1NhbGllQ2hpZW5fUmVzdW1lLnBkZicgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXInIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlJFU1VNRTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8SGlkZGVuIGxnVXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHNtPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHNtPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRHJhd2VyT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gZm9udFNpemU9J2xhcmdlJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IEV4cGFuZExlc3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRMZXNzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGljb246IHtcclxuICAgICAgICBmb250U2l6ZTonNHJlbScsXHJcbiAgICAgICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6JyMxRjFGMUYnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2Nyb2xsdXAgPSAocHJvcHMpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IFtzY3JvbGxDLCBzZXRTY3JvbGxDXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcclxuICAgICAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcclxuICAgICAgICAgICAgc2V0U2Nyb2xsQyh3aW5kb3cuc2Nyb2xsWSk7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbHRvVG9wID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHdpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7dG9wOiAwLCBiZWhhdmlvcjogJ3Ntb290aCd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3thbGlnbjoncmlnaHQnfX0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7c2Nyb2xsQyA+IDQwMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTY3JvbGx0b1RvcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV4cGFuZExlc3NJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPjonJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2Nzcy9Xb3JrLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgZmxpZ2h0SGVhZGVyIGZyb20gJy4uLy4uL3B1YmxpYy9hZ29kYS1mbGlnaHRzL2ZsaWdodC1oZWFkZXIucG5nJztcclxuaW1wb3J0IGZsaWdodHMwMSBmcm9tICcuLi8uLi9wdWJsaWMvZmxpZ2h0czAxLnBuZyc7XHJcbmltcG9ydCBmbGlnaHRzMDIgZnJvbSAnLi4vLi4vcHVibGljL2Fnb2RhLWZsaWdodHMvZmxpZ2h0czAyLnBuZyc7XHJcbmltcG9ydCBmbGlnaHRzMDMgZnJvbSAnLi4vLi4vcHVibGljL2Fnb2RhLWZsaWdodHMvZmxpZ2h0czAzLnBuZyc7XHJcbmltcG9ydCBmbGlnaHRzMDQgZnJvbSAnLi4vLi4vcHVibGljL2Fnb2RhLWZsaWdodHMvZmxpZ2h0czA0LnBuZyc7XHJcbmltcG9ydCBmbGlnaHRzMDUgZnJvbSAnLi4vLi4vcHVibGljL2Fnb2RhLWZsaWdodHMvZmxpZ2h0czA1LnBuZyc7XHJcbmltcG9ydCBkb3QgZnJvbSAnLi4vLi4vcHVibGljL2RvdC5wbmcnO1xyXG5pbXBvcnQgeyBQcm9jZXNzMDEgfSBmcm9tICcuL1Byb2Nlc3MwMS5qcyc7XHJcbmltcG9ydCB7IFByb2Nlc3MwMiB9IGZyb20gJy4vUHJvY2VzczAyLmpzJztcclxuaW1wb3J0IHsgUHJvY2VzczAzIH0gZnJvbSAnLi9Qcm9jZXNzMDMuanMnO1xyXG5pbXBvcnQgeyBCb3R0b21OYXZiYXJ9IGZyb20gJy4uL1B1YmxpYy9Cb3R0b21OYXZiYXIuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFnb2RhRmxpZ2h0cyA9ICgpID0+IHtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmltZzAxfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHNtPXs0fT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gc209ezR9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ZsaWdodHMwMX0gc3R5bGU9e3t3aWR0aDonNjUlJ319IGNsYXNzTmFtZT17c3R5bGVzLmZsaWdodHMwMX0vPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc209ezR9PjwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOlwiNSVcIn19PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezV9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFnb2RhIEZsaWdodHMgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPiAgICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBtZD17NX0+PC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlM30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBsZXRlIHlvdXIgam91cm5leSB3aXRoIHNlYXQgc2VsZWN0aW9uICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlNH0+wqc8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPiAgICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOic1JSd9fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250V2VpZ2h0OjcwMH19PkNPTlRFWFQgJiBDSEFMTEVOR0UmbmJzcDs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEluIGVhcmx5IDIwMjAsIEFnb2RhIEZsaWdodHMgaGFzIGxhdW5jaGVkIGZvciBzaXggbW9udGhzIGFjaGlldmluZyAxSyBkYWlseSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9va2luZy4gV2Ugc3RhcnRlZCB0cmFuc2ZlcnJpbmcgb3VyIGZvY3VzIGZyb20gbGl0dGxlIGVuaGFuY2VtZW50IHRvIGxhcmdlLXNjYWxlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlcywgYWltaW5nIHRvIGJlY29tZSBhIG1vcmUgbWF0dXJlIHByb2R1Y3QgdG8gZnVsZmlsbCBhbGwgdGhlIGN1c3RvbWVycycgbmVlZHMuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb21wYXJlZCB0byB0aGUgY29tcGV0aXRvcnMsIHRoZXJlIGlzIHN0aWxsIGEgbG9uZyB3YXkgdG8gY2hhc2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxici8+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2VhdCBzZWxlY3Rpb24gaXMgb25lIG9mIHRoZSBjb3JlIGZlYXR1cmVzLiBOb3QgdG8gbWVudGlvbiB0aGF0IGl0IGlzIGEgc29waGlzdGljYXRlZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdCwgd2UgYWxzbyBoYXZlIGEgaGlnaCBkZXBlbmRlbmN5IG9uIHRoZSBzdXBwbGllciB0byBkZWZpbmUgdGhlIHNjb3BlIGFuZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybSB0aGUgZGF0YSB0aGV5IGNvdWxkIHByb3ZpZGUuIFRoZXJlZm9yZSwgd2UgbGF1bmNoZWQgdGhlIGZlYXR1cmUgd2l0aCB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyZWUgc2VsZWN0aW9uIHRoYXQgaXQgY2VydGFpbmx5IHJlZHVjZXMgdGhlIHJpc2sgb2YgaW1wbGVtZW50YXRpb24uIEZyb20gYSBzY2FsYWJsZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyc3BlY3RpdmUsIHdlIHN0aWxsIGNvbnNpZGVyIHRoZSBwYWlkIHNlYXRzIHRvIGFjY29tbW9kYXRlIHRoZSBzY2VuYXJpbyBhZnRlcndhcmQuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPiAgICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOic1JSd9fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NX0gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudFRpdGxlfT5UaW1lbGluZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50RGV0YWlsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXJjaCB0byBBcHJpbCAyMDIwICgzIHdlZWtzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudFRpdGxlfT5UZWFtPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnREZXRhaWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2lnbmVycyAoMiksIFByb2R1Y3QgTWFuYWdlciAoMiksIEVuZ2luZWVycyAoMTIrKSwgUUEgKDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50VGl0bGV9Pk15IHJvbGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudERldGFpbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGV0aXRpdmUgQW5hbHlzaXMsIFVzZXIgaW50ZXJ2aWV3LCBSZXNlYXJjaCwgVUkvVVggRGVzaWduIChBcHApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOic4JSd9fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezV9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZG90TGluZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIMK3Jm5ic3A7wrcmbmJzcDvCt1xyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezV9PjwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOic4JSd9fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2lnbkhpZ2hsaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgREVTSUdOIEhJR0hMSUdIVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2lnbkhpZ2hsaWdodFRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbGFyaXR5IG9mIHRoZSBpbmZvcm1hdGlvbiB3aXRoIHNvcGhpc3RpY2F0ZWQgZGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2lnbkhpZ2hsaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBleHBlcmllbmNlIG9mIHNlbGVjdGluZyBzZWF0cyBpbnZvbHZpbmcgYSBidW5jaCBvZiBpbmZvcm1hdGlvbiwgZnJvbSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgZmxpZ2h0IHNlZ21lbnQsIHBhc3NlbmdlciB0eXBlcywgc2VhdGluZyByZXN0cmljdGlvbnMgJiBmYXJlLCBhbmQgdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhY2lsaXRpZXMgb24gdGhlIHBsYW5lLiBJdCBpcyBjcml0aWNhbCB0byBkaXNwbGF5IGFsbCB0aGUgaW5mb3JtYXRpb24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJseSB0byBoZWxwIHRoZSBjdXN0b21lciBtYWtpbmcgdGhlIGRlY2lzaW9uIGJhc2VkIG9uIHRoZSBjb21wbGV4aXR5IG9mIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWlyIHBlcnNvbmFsIHByZWZlcmVuY2UuIFRoZXJlZm9yZSwgd2UgYWltZWQgdG8gc3VyZmFjZSB0aGUgYmFyZSBtaW5pbXVtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mIHRoZSBpbmZvcm1hdGlvbiB0byBiZSBzdHJhaWdodGZvcndhcmQgYW5kIGRpcmVjdCB0byBzaW1wbGlmeSB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaXNpb24tbWFraW5nIHByb2Nlc3MuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDonNSUnLCBtYXJnaW5MZWZ0Oic2JScsIG1hcmdpblJpZ2h0Oic2JSd9fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYWxsZXJ5MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ZsaWdodHMwMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbGxlcnkxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZmxpZ2h0czA0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDonMTAwJSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2FsbGVyeTF9IHN0eWxlPXt7aGVpZ2h0OicxMDAuMTUlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZmxpZ2h0czAzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6JzglJ319PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzaWduSGlnaGxpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBERVNJR04gSElHSExJR0hUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzaWduSGlnaGxpZ2h0VGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpcmVjdGx5IGludGVyYWN0aW5nIHRvIG1ha2UgZGVjaXNpb25zIHdpdGggZWFzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2lnbkhpZ2hsaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoaWxlIHRoZSBjdXN0b21lciBpcyBjb25zaWRlcmluZyB0aGUgc2VhdGluZyBiZXR3ZWVuIHByaWNlLCBwb3NpdGlvbiwgYW5kIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZlcmVuY2UsIGl0IGd1aWRlcyB0aGVtIGJldHRlciB3aXRoIGZsdWVudCBpbnRlcmFjdGlvbiBhbmQgcmVhbC10aW1lIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRiYWNrLiBXaGVuIGl0IGNvbWVzIHRvIGdyb3VwIHRyYXZlbGVyIGFuZCBtdWx0aXBsZSBzbGljZXMsIHdlIGRlc2lnbmVkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbnkgZGV0YWlscyBzdWNoIGFzIHVwZGF0aW5nIHRoZSBzdWJ0b3RhbCwgdGhlIGF0dHJpYnV0ZSBvZiBzZWF0cyBhbmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgem9vbWluZyB0byBoZWxwIHRoZW0gY29tcGxldGUgdGhlIHRhc2tzIGZhc3Rlci4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOic1JScsIG1hcmdpbkxlZnQ6JzYlJywgbWFyZ2luUmlnaHQ6JzYlJ319PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOic1JSd9fSBzcGFjaW5nPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbGxlcnkxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtmbGlnaHRzMDV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDonMTAwJSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmltZ0Rlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpbXBsZSBhbmQgc2xpY2sgdG8ga2VlcCB0aGUgdXNlcnMgZm9jdXMgb24gZGVjaXNpb24gbWFraW5nLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e21hcmdpblRvcDonOCUnfX0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gaXRlbSB4cz17ZmFsc2V9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnJlZmxlY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlZmxlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZG90TGluZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgwrcmbmJzcDvCtyZuYnNwO8K3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5kb3RBbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNpZ25IaWdobGlnaHRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJlbmNobWFya2luZyBoZWxwcyAoYSBsb3QpIGZvciBpbnRyb2R1Y2luZyBhIG5ldyBmZWF0dXJlIC0gRXNwZWNpYWxseSBmb3IgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgbGF0ZXIgcHJvZ3Jlc3MsIHRoZXJlIGFyZSBtYW55IGxpdHRsZSBmaW5lLXR1bmUgbmVlZGluZyBhIHF1aWNrIGRlY2lzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuIFdoZW4gZW5naW5lZXJzIHdlcmUgYnVpbGRpbmcgaXQsIEkgYWxyZWFkeSBzaGlmdGVkIG15IGZvY3VzIHRvIG90aGVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHMuIEl0IGhlbHBzIHRvIHJlY2FsbCB0aGUgbWVtb3J5IGZyb20gYSBjb3VwbGUgb2Ygc2NyZWVuc2hvdHMgYW5kIHRoZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2VhcmNoIHN1bW1hcnkuICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RvdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2lnbkhpZ2hsaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmVuY2htYXJraW5nIGhlbHBzIChhIGxvdCkgZm9yIGludHJvZHVjaW5nIGEgbmV3IGZlYXR1cmUgLSBFc3BlY2lhbGx5IGZvciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBsYXRlciBwcm9ncmVzcywgdGhlcmUgYXJlIG1hbnkgbGl0dGxlIGZpbmUtdHVuZSBuZWVkaW5nIGEgcXVpY2sgZGVjaXNpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4gV2hlbiBlbmdpbmVlcnMgd2VyZSBidWlsZGluZyBpdCwgSSBhbHJlYWR5IHNoaWZ0ZWQgbXkgZm9jdXMgdG8gb3RoZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0cy4gSXQgaGVscHMgdG8gcmVjYWxsIHRoZSBtZW1vcnkgZnJvbSBhIGNvdXBsZSBvZiBzY3JlZW5zaG90cyBhbmQgdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZWFyY2ggc3VtbWFyeS4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZG90QWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZG90fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzaWduSGlnaGxpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCZW5jaG1hcmtpbmcgaGVscHMgKGEgbG90KSBmb3IgaW50cm9kdWNpbmcgYSBuZXcgZmVhdHVyZSAtIEVzcGVjaWFsbHkgZm9yIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGxhdGVyIHByb2dyZXNzLCB0aGVyZSBhcmUgbWFueSBsaXR0bGUgZmluZS10dW5lIG5lZWRpbmcgYSBxdWljayBkZWNpc2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLiBXaGVuIGVuZ2luZWVycyB3ZXJlIGJ1aWxkaW5nIGl0LCBJIGFscmVhZHkgc2hpZnRlZCBteSBmb2N1cyB0byBvdGhlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzLiBJdCBoZWxwcyB0byByZWNhbGwgdGhlIG1lbW9yeSBmcm9tIGEgY291cGxlIG9mIHNjcmVlbnNob3RzIGFuZCB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNlYXJjaCBzdW1tYXJ5LiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGl0ZW0geHM9e2ZhbHNlfSBtZD17M30+PC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOic1JSd9fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IG1kPXs0fT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs4fSBtZD17NH0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zY3JvbGxEb3dufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsIGRvd24gdG8gbGVhcm4gbW9yZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IG1kPXs0fT48L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8UHJvY2VzczAxLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFByb2Nlc3MwMi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxQcm9jZXNzMDMvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6JzYlJ319PlxyXG4gICAgICAgICAgICAgICAgPEJvdHRvbU5hdmJhci8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1dvcmsubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBwcm9jZXNzMDEgZnJvbSAnLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczAxLnBuZyc7XHJcbmltcG9ydCBwcm9jZXNzMDIgZnJvbSAnLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczAyLnBuZyc7XHJcbmltcG9ydCBwcm9jZXNzMDMgZnJvbSAnLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczAzLnBuZyc7XHJcbmltcG9ydCBwcm9jZXNzMDQgZnJvbSAnLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczA0LnBuZyc7XHJcbmltcG9ydCBwcm9jZXNzMDUgZnJvbSAnLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczA1LnBuZyc7XHJcbmltcG9ydCBkb3QgZnJvbSAnLi4vLi4vcHVibGljL2RvdC5wbmcnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJy4uL1B1YmxpYy9DYXJvdXNlbC5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2VzczAxID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzTWFpbn0+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOic1JSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezh9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9IHN0eWxlPXt7bWFyZ2luVG9wOic4JSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzVGl0bGUxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVEhFIFBST0NFU1MgLyAwMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzVGl0bGUyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVzZWFyY2gsIFVuZGVyc3RhbmQgJiBEZWZpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kb3RMaW5lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgwrcmbmJzcDvCtyZuYnNwO8K3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOic1JSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNpZ25IaWdobGlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDT01QRVRJVElWRSBBTkFMWVNJU1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb21wZXRpdGl2ZUFuYWx5c2lzVGl0bGUyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmVhdHVyZSBjb21wYXJpc29uIHRvIHVuZGVyc3RhbmQgdGhlIGluZHVzdHJ5IHN0YW5kYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbXBldGl0aXZlQW5hbHlzaXNDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXQgdGhlIGJlZ2lubmluZyBvZiB0aGUga2ljay1vZmYsIHdlIGRpZG4ndCByZWNlaXZlIHdlbGwtZGVmaW5lZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZW1lbnRzLCBhbmQgdGhlIGJhY2stZW5kIGVuZ2luZWVycyB3ZXJlIGZpZ3VyaW5nIG91dCB0aGUgZGF0YSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSB0aGUgc3VwcGxpZXJzLiBEZXNpZ25lcnMgc3RhcnRlZCBmcm9tIGJlbmNobWFya2luZyB0byB1bmRlcnN0YW5kIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgZnVuZGFtZW50YWwgZnVuY3Rpb25zIG9mIHNlYXQgc2VsZWN0aW9uLiBCYXNlZCBvbiB0aGUgZmVhdHVyZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyaXNvbiwgSSBub3RlZCBkb3duIHRoZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250V2VpZ2h0OjcwMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7dmFyaW91cyBzY2VuYXJpb3MsIGZlYXR1cmVzLCBmbG93LCBjaGFuY2UgZm9yIG9wdGltaXphdGlvbiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgcG90ZW50aWFsIHJpc2tzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBhcyBhIHN0YXJ0aW5nIHBvaW50IHRvIGV4cGxvcmUgaG93IHdlIGNvdWxkIHNoYXBlIHRoZSBwcm9kdWN0IGFuZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5lIHRoZSBzY29wZSBvZiBNVlAuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZzE9e3Byb2Nlc3MwMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nMj17cHJvY2VzczAyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXB0aW9uMT17J05vdGVkIHRoZSBmZWF0dXJlcyBhY3Jvc3MgdGhlIHByb2Nlc3MuIFB1cnBsZSBzdGFuZHMgZm9yIGZ1bmRhbWVudGFsIGZ1bmN0aW9uLCB5ZWxsb3cgc3RhbmRzIGZvciB0aGUgdW5jb21tb24gdHJhaXQgY29tcGFyaW5nIHRvIG90aGVyIGNvbXBldGl0b3JzJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FwdGlvbjI9eydOb3RlZCB0aGUgZmVhdHVyZXMgYWNyb3NzIHRoZSBwcm9jZXNzLiBQdXJwbGUgc3RhbmRzIGZvciBmdW5kYW1lbnRhbCBmdW5jdGlvbiwgeWVsbG93IHN0YW5kcyBmb3IgdGhlIHVuY29tbW9uIHRyYWl0IGNvbXBhcmluZyB0byBvdGhlciBjb21wZXRpdG9ycyd9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e21hcmdpblRvcDonMiUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e21hcmdpblRvcDonMTAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2lnbkhpZ2hsaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElOLURFUFRIIElOVEVSVklFV1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29tcGV0aXRpdmVBbmFseXNpc1RpdGxlMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbGxlY3QgaW5zaWdodHMgZnJvbSB1c2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29tcGV0aXRpdmVBbmFseXNpc0NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaW5jZSBpdCdzIGFuIGVudGlyZWx5IG5ldyBmZWF0dXJlLCBhbmQgd2Ugc3RpbGwgaGF2ZSBlbm91Z2ggbGVhZCB0aW1lLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgZGVjaWRlZCB0byBkbyB0aGUgdXNlciBpbnRlcnZpZXcgdG8gY29sbGVjdCBtb3JlIGluc2lnaHRzIGZyb20gdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2Vycy4gVGhlIHJlc2VhcmNoIHBsYW4sIGRpc2N1c3Npb24gZ3VpZGVzLCBhbmQgYWxsIGZpdmUgc2Vzc2lvbnMgd2VyZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsIGNvbmR1Y3RlZCBieSB0aGUgZGVzaWduZXJzLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6JzglJ319PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucmVzZWFyY2hUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJFU0VBUkNIIEdPQUxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZG90QWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RvdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbGxlY3RJbnNpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVmaW5lIHRoZSBzY29wZSBvZiBNVlAgaW4gdGhlIGZpcnN0IHBoYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7bWFyZ2luVG9wOic1JSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5yZXNlYXJjaFRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgS0VZIFFVRVNUSU9OU1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5kb3RBbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZG90fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29sbGVjdEluc2lnaHRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGF0J3MgdHJhdmVsZXJzJyBpbnRlbnRpb24gdG8gc2VsZWN0IGEgc2VhdD9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5kb3RBbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZG90fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29sbGVjdEluc2lnaHRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGF0IGtpbmQgb2YgaW5mb3JtYXRpb24gZG8gdHJhdmVsZXJzIG5lZWQgdG8ga25vdyB3aGVuIGNob29zaW5nIHRoZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWF0cz8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZG90QWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RvdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbGxlY3RJbnNpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hhdCBjYW4gdGhleSBkbyB3aXRob3V0IHdoZW4gbG9va2luZyBhdCBhbGwgdGhlIGNvbnRlbnQgdGhhdCBpcyBvbiB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5kb3RBbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZG90fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29sbGVjdEluc2lnaHRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGF0IGtpbmQgb2YgY29uc2lkZXJhdGlvbnMgZ29lcyBpbnRvIHNlbGVjdGluZyB0aGUgc2VhdHM/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZG90QWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RvdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbGxlY3RJbnNpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yIHRob3NlIHdobyBkaWRuJ3Qgc2VsZWN0IHNlYXRzIGR1cmluZyBib29raW5nLCB3b3VsZCB0aGV5IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNob29zZSBpbiBwb3N0LWJvb2tpbmcgb3Igb25saW5lIGNoZWNrLWluP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF0IHdoaWNoIHBvaW50IGR1cmluZyB0aGUgYm9va2luZyBwcm9jZXNzIHdvdWxkIHRoZSBjdXN0b21lciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmZXIgdG8gc2VsZWN0IHRoZSBzZWF0cz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5kb3RBbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZG90fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29sbGVjdEluc2lnaHRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbiB3aGF0IHNpdHVhdGlvbiB3b3VsZCB0aGUgdHJhdmVsZXJzIHBheSBmb3IgdGhlIHNlYXRzP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e21hcmdpblRvcDonNSUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucmVzZWFyY2hUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBBUlRJQ0lQQU5UUyBPVkVSVklFV1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5kb3RBbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZG90fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29sbGVjdEluc2lnaHRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb3VyIHBhcnRpY2lwYW50cyBwcmVmZXJyZWQgYm9va2luZyB3aXRoIGFpcmxpbmVzIGRlcGVuZHMgb24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGRlc3RpbmF0aW9uIGFuZCB0aGUgRnJlcXVlbnQtZmx5ZXIgcHJvZ3JhbSB0aGV5IGhhdmUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZG90QWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RvdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbGxlY3RJbnNpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhyZWUgcGFydGljaXBhbnRzIG1lbnRpb25lZCB0aGF0IHRoZXkgdXN1YWxseSBib29rIHRocm91Z2ggdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3AuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezN9PjwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOic0JSd9fT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2VzczAzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOicxMDAlJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7bWFyZ2luTGVmdDonMSUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaW1nRGVzY3JpcHRpb24yfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgaW50ZXJ2aWV3ZWQgYnkgdmlkZW8gY2FsbCBkdWUgdG8gd29yay1mcm9tLWhvbWUgcG9saWN5IHdoZW4gdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDT1ZJRC0xOSBoaXQuIEl0IGlzIHRyaWNreSB0byBvYnNlcnZlIGJlaGF2aW9yIG91dHNpZGUgb2YgdGhlIHNjcmVlbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2luY2UgcGFydGljaXBhbnRzIG9ubHkgc2hhcmVkIHRoZSBzY3JlZW4gb24gdGhlIHBob25lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e21hcmdpblRvcDonNSUnfX0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5yZXNlYXJjaFRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRklORC1PVVRTXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElmIHRoZSBzZWF0IG1hcCBpdHNlbGYgaXMgY2xlYXIgZW5vdWdoIG9uIHRoZSBpbmZvcm1hdGlvbiBhbmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVUksIHRoZSBwYXJ0aWNpcGFudHMgd29u4oCZdCBwYXkgYXR0ZW50aW9uIHRvIHRoZSBzZWF0IGxlZ2VuZC4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG93ZXZlciwgaXTigJlzIGNyaXRpY2FsIHRvIGV4cGxhaW4gZGlmZmVyZW50IG9wdGlvbnMgaWYgdGhleSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YW50IHRvIGNoZWNrIG1vcmUgZGV0YWlscy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5kb3RBbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZG90fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29sbGVjdEluc2lnaHRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGV5IGFsbCBoYXZlIHByZWNpc2UgcHJlZmVyZW5jZXMgb24gc2VhdCBzZWxlY3Rpb246ICgxKSBGcm9udCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoVGhlIHZlcnkgZnJvbnQgb2YgdGhlIGF2YWlsYWJsZSBvcHRpb25zKSAoMikgV2luZG93L0Fpc2xlLyBObyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWRkbGUgKDMpIExlZ3Jvb20gKDQpIERpc3RhbmNlIHRvIHRoZSB0b2lsZXQvZXhpdCAoZXNwZWNpYWxseSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3Iga2lkcyBhbmQgZWxkZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZG90QWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RvdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbGxlY3RJbnNpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGludGVudGlvbiB0byBjaG9vc2Ugc2VhdHMgZHVyaW5nIGJvb2tpbmcgaXMgdGhlIHNhbWUgZm9yIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZXJ5b25lOiAoMSkgSWYgZnJlZSAoMikgSWYgdHJhdmVsIHdpdGggZmFtaWx5IChraWRzLCBwYXJlbnRzKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvciBmcmllbmRzIChzaXQgdG9nZXRoZXIpICgzKSBMb25nLWhhdWwgZmxpZ2h0cyAoMy41IGhycyspICg0KSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcm93ZGVkIGZsaWdodHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5kb3RBbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZG90fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29sbGVjdEluc2lnaHRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGVuIGxhbmRpbmcgb24gdGhlIHNlbGVjdGlvbiBwYWdlLCBpdCBhbHdheXMgdGFrZXMgYSBsb25nIHRpbWUgdGhhdCBzZWVtcyB0byBoYXZlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyYXNoZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7bWFyZ2luVG9wOic1JSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5yZXNlYXJjaFRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTkVYVCBTVEVQXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1ha2Ugc3VyZSB0aGUgVUkgb2YgdGhlIHNlYXQgbWFwIGlzIGNsZWFyIGVub3VnaCB0byByZWNvZ25pemVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5kb3RBbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZG90fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29sbGVjdEluc2lnaHRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGVuIG9mZmVyaW5nIHZhcmlvdXMgb3B0aW9ucyBvZiBzZWF0cywgZG8gY2xhcmlmeSB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlmZmVyZW5jZSBvciBiZW5lZml0cyBvZiB0aGUgc2VhdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5kb3RBbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZG90fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29sbGVjdEluc2lnaHRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWtlIHN1cmUgd2UgZGlzcGxheSB0aGUgZmlyc3QgYXZhaWxhYmxlIHNlYXQgdmlzaWJsZSB3aXRob3V0IHNjcm9sbCB3aGVuIGxhbmRpbmcgb24gdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5kb3RBbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZG90fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29sbGVjdEluc2lnaHRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXNwbGF5IGNsZWFybHkgd2hpY2ggc2VhdHMgYmVsb25nIHRvIHdoaWNoIHBhc3NlbmdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnNpZGVyIHRoZSBzcGVjaWFsIHJlcXVlc3QgZm9yIHNvbWUgc3BlY2lmaWMgdHlwZXMgb2YgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhdmVsZXIsIHN1Y2ggYXMga2lkcywgZWxkZXJseSwgYnVzaW5lc3MgYW5kIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZG90QWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RvdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbGxlY3RJbnNpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtaW5kZXIgZm9yIHNlbGVjdGluZyBzZWF0cyB3aGVuIGl0J3MgZnJlZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlbWluZGVyIGZvciBncm91cCB0cmF2ZWxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsbG93IHVzZXJzIHRvIGNob29zZSBzZWF0cyBhZnRlciBib29rZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWtlIHN1cmUgd2UgZGlzcGxheSBjbGVhciBmZWVkYmFjayBmb3IgbG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1ha2Ugc3VyZSB3ZSBkaXNwbGF5IGNsZWFyIGZlZWRiYWNrIGZvciBsb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezN9PjwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOiczJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2VzczA0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e21hcmdpblRvcDonMSUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5pbWdEZXNjcmlwdGlvbjJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCeSBmZWF0dXJlcyBBdWRpdCwgd2Ugb3JnYW5pemVkIHRoZSBwb3RlbnRpYWwgZmVhdHVyZXMgaW4gdGVybXMgb2YgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyZXF1ZW5jeSBhZG9wdGlvbiAoYW1vdW50IG9mIHBlb3BsZSB1c2luZyB0aGVtKS4gUG9zdC1pdHMgaW4gdGhlIGRhcmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsdWUgYXJlYSB3ZXJlIHRoZSBhY3Rpb25zIGJlZW4gdXNlZCBieSB0aGUgcGFydGljaXBhbnRzIHRoZSBtb3N0LiBXZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxzbyBjYXRlZ29yaXplZCBhbGwgdGhlIGFjdGlvbnMgaW50byBpbXBsZW1lbnRhdGlvbiBzdGFnZXMgYXMgYSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlbGltaW5hcnkgYW5hbHlzaXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzEwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNpZ25IaWdobGlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSRVNFQVJDSCBTWU5USEVTSVpFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb21wZXRpdGl2ZUFuYWx5c2lzVGl0bGUyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVmaW5lIHRoZSBiYXJlIG1pbmltdW0gb2YgcHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29tcGV0aXRpdmVBbmFseXNpc0NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25zaWRlcmluZyB0aGUgZGVwZW5kZW5jeSBvbiB0aGUgc3VwcGxpZXIgYW5kIHRoZSBkZXZlbG9wbWVudCBlZmZvcnQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZSdyZSBsb29raW5nIGZvciB0aGUgTVZQIHZlcnNpb24gb2YgdGhlIHNvbHV0aW9uIHRvIHJlZHVjZSB0aGUgcmlzayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIGltcGxlbWVudGF0aW9uLiBIZW5jZSwgYWZ0ZXIgdGhlIHJlc2VhcmNoIHBoYXNlLCB3ZSBicm9rZSBkb3duIGFsbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGZlYXR1cmVzIGFuZCByZXF1aXJlbWVudHMgaW50byBwaGFzZWQgdGFza3MuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOiczJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2VzczA1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e21hcmdpblRvcDonMSUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5pbWdEZXNjcmlwdGlvbjJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSBsaXN0ZWQgb3V0IHRoZSBwb3RlbnRpYWwgZGVzaWduIGNyaXRlcmlhIGFuZCBkaXNjdXNzZWQgd2l0aCB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QgbWFuYWdlciB0aGUgc2NvcGUgb2YgdGhlIHByb2plY3QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXszfT48L0dyaWQ+IFxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPiAgXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2Nzcy9Xb3JrLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgcHJvY2VzczA2IGZyb20gJy4uLy4uL3B1YmxpYy9wcm9jZXNzL3Byb2Nlc3MwNi5wbmcnO1xyXG5pbXBvcnQgcHJvY2VzczA3IGZyb20gJy4uLy4uL3B1YmxpYy9wcm9jZXNzL3Byb2Nlc3MwNy5wbmcnO1xyXG5pbXBvcnQgcHJvY2VzczA4IGZyb20gJy4uLy4uL3B1YmxpYy9wcm9jZXNzL3Byb2Nlc3MwOC5wbmcnO1xyXG5pbXBvcnQgcHJvY2VzczA5IGZyb20gJy4uLy4uL3B1YmxpYy9wcm9jZXNzL3Byb2Nlc3MwOS5wbmcnO1xyXG5pbXBvcnQgcHJvY2VzczEwIGZyb20gJy4uLy4uL3B1YmxpYy9wcm9jZXNzL3Byb2Nlc3MxMC5wbmcnO1xyXG5pbXBvcnQgcHJvY2VzczExIGZyb20gJy4uLy4uL3B1YmxpYy9wcm9jZXNzL3Byb2Nlc3MxMS5wbmcnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJy4uL1B1YmxpYy9DYXJvdXNlbCc7O1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2Nlc3MwMiA9ICgpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzTWFpbn0gc3R5bGU9e3twYWRkaW5nVG9wOiczJSd9fT5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs4fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fSBzdHlsZT17e21hcmdpblRvcDonOCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc1RpdGxlMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRIRSBQUk9DRVNTIC8gMDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc1RpdGxlMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2lnbiAmIEl0ZXJhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kb3RMaW5lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgwrcmbmJzcDvCtyZuYnNwO8K3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOicxJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7bWFyZ2luVG9wOicxMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzaWduSGlnaGxpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUFJFTElNSU5BUlkgRVhQTE9SQVRJT05TXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb21wZXRpdGl2ZUFuYWx5c2lzVGl0bGUyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWFybHkgY29uY2VwdHMgdG8gZ2F0aGVyIGZlZWRiYWNrIGFuZCBkaXJlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbXBldGl0aXZlQW5hbHlzaXNDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGludGVyZmFjZSBtaWdodCBiZSB0aGUgbW9zdCBjaGFsbGVuZ2luZyBwYXJ0IG9mIHRoaXMgcHJvamVjdC4gRm9yIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGUsIGl0IGlzIGV2ZW4gaGFyZGVyIHRvIGRpc3BsYXkgc28gbXVjaCBpbmZvcm1hdGlvbiBvbiB0aGUgbGl0dGxlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW55IHNjcmVlbi4gSW4gdGhlIGJlZ2lubmluZywgSSBmb2N1c2VkIG9uIHRoZSBpbmZvIHN0cnVjdHVyZSBhbmQgdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyYWxsIGZsb3cuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOiczJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2VzczA2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOiczJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7bWFyZ2luVG9wOicxMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzaWduSGlnaGxpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgREVTSUdOIElURVJBVElPTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29tcGV0aXRpdmVBbmFseXNpc1RpdGxlMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlZXAgZGl2ZSBpbnRvIHRoZSBkZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb21wZXRpdGl2ZUFuYWx5c2lzQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFmdGVyIGNvbmZpcm1pbmcgdGhlIGZsb3csIEkgcHV0IG1vcmUgZWZmb3J0IGludG8gdGhlIGV4cGxvcmF0aW9uIG9mIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgc2VsZWN0aW9uIHByb2Nlc3MuIFRoZXJlIGFyZSBmbGlnaHQgc2VnbWVudHMsIHBhc3NlbmdlciBzZWxlY3Rpb24sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWF0IGxlZ2VuZCwgc2VhdCBtYXAsIGFuZCB0aGUgcHJpY2UgdXBkYXRlLiBXZSB3ZXJlIGxvb2tpbmcgZm9yIGFuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHByb2FjaCB0byBtYWtlIHRoZSBkaXNwbGF5aW5nIG1vcmUgZWZmaWNpZW50LCBhbmQgZXhwbGFpbiBjbGVhciBvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hhdCdzIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBwcm9jZXNzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6JzUlJywgbWFyZ2luTGVmdDonMiUnLCBtYXJnaW5SaWdodDonMiUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9IGxnPXszfSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYWxsZXJ5MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2Nlc3MwN30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5pbWdEZXNjcmlwdGlvbjN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmRlbnNlZCBsZWdlbmQgbWFrZXMgdGhlIHdpZGVzdCBkaXNwbGF5aW5nIG9uIHRoZSBtYXAuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0gbGc9ezN9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbGxlcnkxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2VzczA4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmltZ0Rlc2NyaXB0aW9uM30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFiIFVJIG9uIHRoZSBwYXNzZW5nZXIgc2VsZWN0aW9uIG1pZ2h0IGNhdXNlIHRoZSBwcm9ibGVtIGZvciBncm91cCB0cmF2ZWxlcnMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fSBsZz17M30gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2FsbGVyeTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzMDl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaW1nRGVzY3JpcHRpb24zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgZGlmZmVyZW50IHN0YXRlIG9mIHBhc3NlbmdlciBzZWxlY3Rpb24gYnV0dG9uIGlzIGhhcmQgdG8gcmVjb2duaXplIGF0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBmaXJzdCBnbGFuY2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fSBsZz17M30gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2FsbGVyeTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzMTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaW1nRGVzY3JpcHRpb24zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG93aW5nIGluaXRpYWwgZm9yIHRoZSBzZWxlY3RlZCBzZWF0aW5nIG1pZ2h0IG5vdCBiZSBmYW1pbGlhciB0byBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub24tRW5nbGlzaCBzcGVha2VyIGNvdW50cmllcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e21hcmdpblRvcDonMyUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e21hcmdpblRvcDonMTAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2lnbkhpZ2hsaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZJTkFMIERFU0lHTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29tcGV0aXRpdmVBbmFseXNpc1RpdGxlMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZyZWUgc2VhdHMgZm9yIGxhdW5jaCBhbmQgdGhlIG5leHQgcGhhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbXBldGl0aXZlQW5hbHlzaXNDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFzZWQgb24gdGhlIHRpbWVsaW5lIGFuZCB0aGUgZGV2ZWxvcG1lbnQgZWZmb3J0LCB3ZSBkaWQgY29tcHJvbWlzZSB0byBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltcGxpZnkgdGhlIHByb2Nlc3MgYXMgbXVjaCBhcyBwb3NzaWJsZS4gVGhlIG1vc3QgY2hhbGxlbmdpbmcgcGFydCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVzdCBiZSB0aGUgd29yc3QgY2FzZSBmb3IgbXVsdGlwbGUgc2VnbWVudHMgYW5kIG11bHRpcGxlIHN0b3BzIGZsaWdodCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBkZXNpZ24gYWxzbyBzaG91bGQgYmUgc2NhbGFibGUgdG8gdGhlIHBhaWQgb3B0aW9ucy4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nMT17cHJvY2VzczExfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcyPXtwcm9jZXNzMTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcHRpb24xPXsnQ29tcGFyZWQgdG8gdGhlIGluaXRpYWwgZmxvdywgaXQgY2FtZSBvdXQgdG8gYSBtb3JlIHNvcGhpc3RpY2F0ZWQgZmxvdyBhZnRlciBpbnZvbHZlZCBpbiB0aGUgZGV2ZWxvcGVyLid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcHRpb24yPXsnTm90ZWQgdGhlIGZlYXR1cmVzIGFjcm9zcyB0aGUgcHJvY2Vzcy4gUHVycGxlIHN0YW5kcyBmb3IgZnVuZGFtZW50YWwgZnVuY3Rpb24sIHllbGxvdyBzdGFuZHMgZm9yIHRoZSB1bmNvbW1vbiB0cmFpdCBjb21wYXJpbmcgdG8gb3RoZXIgY29tcGV0aXRvcnMnfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1dvcmsubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAnLi4vUHVibGljL0Nhcm91c2VsLmpzJztcclxuaW1wb3J0IHByb2Nlc3MxMiBmcm9tICcuLi8uLi9wdWJsaWMvYWdvZGEtZmxpZ2h0cy9wcm9jZXNzMTIucG5nJztcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9jZXNzMDMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc01haW59IHN0eWxlPXt7cGFkZGluZ1RvcDonMyUnLCBwYWRkaW5nQm90dG9tOic4JSd9fT5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs4fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fSBzdHlsZT17e21hcmdpblRvcDonOCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc1RpdGxlMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRIRSBQUk9DRVNTIC8gMDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc1RpdGxlMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV2YWx1YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZG90TGluZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIMK3Jm5ic3A7wrcmbmJzcDvCt1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e21hcmdpblRvcDonMyUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e21hcmdpblRvcDonMTAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2lnbkhpZ2hsaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRFQ0hOSUNBTCBSRVZJRVdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbXBldGl0aXZlQW5hbHlzaXNUaXRsZTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWZpbmUgdGhlIGRldGFpbHMgdG8gY2xvc2UgdGhlIGdhcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29tcGV0aXRpdmVBbmFseXNpc0NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGVuIHdlIGltcGxlbWVudGVkIHRoZSBwcm9qZWN0LCB0aGVyZSB3ZXJlIG1vcmUgaXNzdWVzIHRvIHJlY29nbml6ZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSB0aGUgc3VwcGxpZXIuIEl0IGlzIGhhcmQgdG8gdW5kZXJzdGFuZCBhbGwgdGhlIHRlY2huaWNhbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RyYWludHMgYW5kIGRlZmluZSB0aGUgc29sdXRpb24gYWNjb3JkaW5nbHkuIFRoZXJlZm9yZSwgd2Ugd29ya2VkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZWx5IHdpdGggdGhlIFFBIGVuZ2luZWVycyBhdCB0aGUgbGFzdCBtaWxlIHRvIHByZXBhcmUgYWxsIHRoZSB3b3JzZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmFyaW9zLiBJIGFwcHJlY2lhdGVkIHRoZWlyIGVmZm9ydCB0byBiZSB0aGUgYnJpZGdlIGJldHdlZW4gdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNpZ25lciwgZGV2ZWxvcGVyLCBidXNpbmVzcyBpbnNpZ2h0LCBhbmQgcHJvdmlkZSBzdWdnZXN0aW9ucyBhdCBiYWxhbmNlLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcxPXtwcm9jZXNzMTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZzI9e3Byb2Nlc3MxMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FwdGlvbjE9eydBIGNvbXBsZXRlZCBleGNlbCB0byBsaXN0IGRvd24gYWxsIHRoZSBDTVMgYWNyb3NzIHRoZSBwbGF0Zm9ybXMgd2FpdGluZyBmb3IgdHJhbnNsYXRpb24uJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FwdGlvbjI9eydBIGNvbXBsZXRlZCBleGNlbCB0byBsaXN0IGRvd24gYWxsIHRoZSBDTVMgYWNyb3NzIHRoZSBwbGF0Zm9ybXMgd2FpdGluZyBmb3IgdHJhbnNsYXRpb24uJ31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOiczJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7bWFyZ2luVG9wOicxMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzaWduSGlnaGxpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT1VUQ09NRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29tcGV0aXRpdmVBbmFseXNpc1RpdGxlMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vcmUgdG8gYmUgdXBkYXRlZC4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29tcGV0aXRpdmVBbmFseXNpc0NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgcHJvamVjdCBpcyBzdGlsbCBpbXBsZW1lbnRpbmcsIHBlcmZvcm1hbmNlIHJlc3VsdCB3aWxsIGJlIHVwZGF0ZWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyd2FyZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1dvcmsubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IElucHV0QWRvcm5tZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50JztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBBcnJvd0ZvcndhcmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0ZvcndhcmQnO1xyXG5pbXBvcnQgeyBBZ29kYUZsaWdodHMgfSBmcm9tICcuL0Fnb2RhRmxpZ2h0cy5qcyc7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC9QdWJsaWMvSGVhZGVyLmpzJztcclxuaW1wb3J0IHsgU2Nyb2xsdXAgfSBmcm9tICcuLi9QdWJsaWMvU2Nyb2xsdXAnO1xyXG5cclxuY2xhc3MgU2VjdXJlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCJcIixcclxuICAgICAgICAgICAgaXNQYXNzOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGVCeU5hbWUgPSB0aGlzLnNldFN0YXRlQnlOYW1lLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZWN1cnNpdmVSZXBsYWNlVmFsdWVCeU5hbWUgPSB0aGlzLnJlY3Vyc2l2ZVJlcGxhY2VWYWx1ZUJ5TmFtZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UoZSxjYWxsQmFjayxudWxsVmFsdWU9bnVsbCkge1xyXG4gICAgICAgIGNvbnN0IHt2YWx1ZSwgbmFtZX0gPSBlLnRhcmdldDtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxCYWNrICE9PVwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgIGNhbGxCYWNrID0gZnVuY3Rpb24oKSB7fVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlQnlOYW1lKG5hbWUsIHZhbHVlIT09XCJcIj92YWx1ZTpudWxsLCBjYWxsQmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdGVCeU5hbWUobmFtZSwgdmFsdWUsIGNhbGxCYWNrKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbihwcmV2U3RhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVjdXJzaXZlUmVwbGFjZVZhbHVlQnlOYW1lKG5hbWUsIHByZXZTdGF0ZSwgdmFsdWUpO1xyXG4gICAgICAgIH0sY2FsbEJhY2spXHJcbiAgICB9XHJcblxyXG4gICAgcmVjdXJzaXZlUmVwbGFjZVZhbHVlQnlOYW1lKG5hbWUsb2JqZWN0LHZhbHVlKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBrZXlzQXJyID0gbmFtZS5yZXBsYWNlKC9cXFsvZyxcIi5cIikucmVwbGFjZSgvXFxdL2csXCJcIikuc3BsaXQoXCIuXCIpO1xyXG5cclxuICAgICAgICB2YXIgdGFyZ2V0ID0gb2JqZWN0O1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXNBcnIubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQga2V5ID0ga2V5c0FycltpXTtcclxuICAgICAgICAgICAgaWYgKCF0YXJnZXQuaGFzT3duUHJvcGVydHkoa2V5KSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaSA9PSBrZXlzQXJyLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldFtrZXldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdWJtaXQoKSB7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5wYXNzd29yZCA9PSAnMjAxODA4MDEnKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICAgICAgICAgIGlzUGFzczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCJcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzc2FnZTogJ0VudGVyIENvcnJlY3QgUGFzc3dvcmQnfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBoYW5kbGVEcmF3ZXJPcGVuXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNQYXNzID09IGZhbHNlP1xyXG5cclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURyYXdlck9wZW49e2hhbmRsZURyYXdlck9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWN1cmUgYXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIGFzayB0aGUgcGFzc3dvcmQgZm9yIHBlcm1pc3Npb24uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLnBhc3N3b3JkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gc209ezZ9IG1kPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW50ZXIgcGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGUua2V5Q29kZSA9PT0gMTMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd0ZvcndhcmRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD46IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc1Bhc3MgPT0gdHJ1ZT9cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEcmF3ZXJPcGVuPXtoYW5kbGVEcmF3ZXJPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3t0b3A6JzcwJScscG9zaXRpb246J2ZpeGVkJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0gbWQ9ezd9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezV9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsdXAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFnb2RhRmxpZ2h0cy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgOlwiXCJ9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdXJlOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhcm91c2VsT3V0ZXJcIjogXCJQdWJsaWNfY2Fyb3VzZWxPdXRlcl9fMm1aX2RcIixcblx0XCJpbWdEZXNjcmlwdGlvblwiOiBcIlB1YmxpY19pbWdEZXNjcmlwdGlvbl9fT3hZYlFcIixcblx0XCJjYXJvdXNlbEltZ1wiOiBcIlB1YmxpY19jYXJvdXNlbEltZ19fMXdMM1RcIixcblx0XCJjYXB0aW9uQ29udGFpbmVyXCI6IFwiUHVibGljX2NhcHRpb25Db250YWluZXJfX2FpMTZxXCIsXG5cdFwiZHJhd2VyVGl0bGVcIjogXCJQdWJsaWNfZHJhd2VyVGl0bGVfXy1MRVM4XCIsXG5cdFwibGlua1wiOiBcIlB1YmxpY19saW5rX18yODFkR1wiLFxuXHRcImRyYXdlckJ1dHRvblwiOiBcIlB1YmxpY19kcmF3ZXJCdXR0b25fX19VRnItXCIsXG5cdFwibWFpbjFcIjogXCJQdWJsaWNfbWFpbjFfXzV3Qzg2XCIsXG5cdFwidGl0bGVcIjogXCJQdWJsaWNfdGl0bGVfX194MVZjXCIsXG5cdFwibWVudUJhclwiOiBcIlB1YmxpY19tZW51QmFyX18zM0tYelwiLFxuXHRcImZvb3RlckJsb2NrXCI6IFwiUHVibGljX2Zvb3RlckJsb2NrX196cUE1WlwiLFxuXHRcImZvb3RlckJsb2NrMlwiOiBcIlB1YmxpY19mb290ZXJCbG9jazJfXzJHVDF5XCIsXG5cdFwiZm9vdGVyVGl0bGVcIjogXCJQdWJsaWNfZm9vdGVyVGl0bGVfX0ZPZkxtXCIsXG5cdFwiY29weXJpZ2h0XCI6IFwiUHVibGljX2NvcHlyaWdodF9fM0lSZjJcIixcblx0XCJmb290ZXJMZWZ0VGl0bGVcIjogXCJQdWJsaWNfZm9vdGVyTGVmdFRpdGxlX18xcjFBMlwiLFxuXHRcImZvb3RlckxlZnRDb250ZW50XCI6IFwiUHVibGljX2Zvb3RlckxlZnRDb250ZW50X18zalVSV1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcIldvcmtfbWFpbl9fTTltYjdcIixcblx0XCJ0aXRsZVwiOiBcIldvcmtfdGl0bGVfXzMzcUw4XCIsXG5cdFwic2hvd2Nhc2VCb3hcIjogXCJXb3JrX3Nob3djYXNlQm94X18yNHp2TVwiLFxuXHRcImltZ1wiOiBcIldvcmtfaW1nX18xbzV1UVwiLFxuXHRcInRpdGxlT25Ib3ZlclwiOiBcIldvcmtfdGl0bGVPbkhvdmVyX18yMks4MFwiLFxuXHRcInRpdGxlMk9uSG92ZXJcIjogXCJXb3JrX3RpdGxlMk9uSG92ZXJfXzNtV1FLXCIsXG5cdFwidGl0bGUyXCI6IFwiV29ya190aXRsZTJfX1hNZy1nXCIsXG5cdFwidGl0bGUzXCI6IFwiV29ya190aXRsZTNfXzFNUmVuXCIsXG5cdFwidGl0bGU0XCI6IFwiV29ya190aXRsZTRfX1R1YjFqXCIsXG5cdFwiYXJ0aWNsZVwiOiBcIldvcmtfYXJ0aWNsZV9fMUpOVEhcIixcblx0XCJjb250ZW50XCI6IFwiV29ya19jb250ZW50X18zMExqaVwiLFxuXHRcImNvbnRlbnRUaXRsZVwiOiBcIldvcmtfY29udGVudFRpdGxlX18xWGVhc1wiLFxuXHRcImNvbnRlbnREZXRhaWxcIjogXCJXb3JrX2NvbnRlbnREZXRhaWxfXzI0T1BWXCIsXG5cdFwiZG90TGluZVwiOiBcIldvcmtfZG90TGluZV9fMm1ObjhcIixcblx0XCJkZXNpZ25IaWdobGlnaHRcIjogXCJXb3JrX2Rlc2lnbkhpZ2hsaWdodF9fMVpMMm1cIixcblx0XCJkZXNpZ25IaWdobGlnaHRUaXRsZVwiOiBcIldvcmtfZGVzaWduSGlnaGxpZ2h0VGl0bGVfXzIwYVRfXCIsXG5cdFwiZGVzaWduSGlnaGxpZ2h0Q29udGVudFwiOiBcIldvcmtfZGVzaWduSGlnaGxpZ2h0Q29udGVudF9fYWg0TFJcIixcblx0XCJnYWxsZXJ5MVwiOiBcIldvcmtfZ2FsbGVyeTFfXzNJbC0zXCIsXG5cdFwiaW1nRGVzY3JpcHRpb25cIjogXCJXb3JrX2ltZ0Rlc2NyaXB0aW9uX18xOGNWcVwiLFxuXHRcInJlZmxlY3Rpb25cIjogXCJXb3JrX3JlZmxlY3Rpb25fX1M5ZVlwXCIsXG5cdFwiZG90QWxpZ25cIjogXCJXb3JrX2RvdEFsaWduX18xUFJtRlwiLFxuXHRcInNjcm9sbERvd25cIjogXCJXb3JrX3Njcm9sbERvd25fXzNsckRKXCIsXG5cdFwicHJvZ3Jlc3NNYWluXCI6IFwiV29ya19wcm9ncmVzc01haW5fXzJmclFpXCIsXG5cdFwicHJvZ3Jlc3NUaXRsZTFcIjogXCJXb3JrX3Byb2dyZXNzVGl0bGUxX18zMW1VSFwiLFxuXHRcInByb2dyZXNzVGl0bGUyXCI6IFwiV29ya19wcm9ncmVzc1RpdGxlMl9fM1Y5TnNcIixcblx0XCJjb21wZXRpdGl2ZUFuYWx5c2lzVGl0bGUxXCI6IFwiV29ya19jb21wZXRpdGl2ZUFuYWx5c2lzVGl0bGUxX18yOXNTZFwiLFxuXHRcImNvbXBldGl0aXZlQW5hbHlzaXNUaXRsZTJcIjogXCJXb3JrX2NvbXBldGl0aXZlQW5hbHlzaXNUaXRsZTJfX2FuQWFlXCIsXG5cdFwiY29tcGV0aXRpdmVBbmFseXNpc0NvbnRlbnRcIjogXCJXb3JrX2NvbXBldGl0aXZlQW5hbHlzaXNDb250ZW50X18yVVZLV1wiLFxuXHRcImltZ0Rlc2NyaXB0aW9uMlwiOiBcIldvcmtfaW1nRGVzY3JpcHRpb24yX18zOE90aFwiLFxuXHRcInJlc2VhcmNoVGl0bGVcIjogXCJXb3JrX3Jlc2VhcmNoVGl0bGVfXzN4RjBuXCIsXG5cdFwiY29sbGVjdEluc2lnaHRDb250ZW50XCI6IFwiV29ya19jb2xsZWN0SW5zaWdodENvbnRlbnRfXzFvN1lqXCIsXG5cdFwicHJvY2VzczJJbWdcIjogXCJXb3JrX3Byb2Nlc3MySW1nX18zM3I4UFwiLFxuXHRcImltZ0Rlc2NyaXB0aW9uM1wiOiBcIldvcmtfaW1nRGVzY3JpcHRpb24zX19vMXB5ZFwiLFxuXHRcImltZ0Jsb2NrXCI6IFwiV29ya19pbWdCbG9ja19fMTF4UlpcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIldvcmtfZGVzY3JpcHRpb25fX3Jvc0ZWXCIsXG5cdFwicGFzc3dvcmRcIjogXCJXb3JrX3Bhc3N3b3JkX18zeXBVb1wiLFxuXHRcImhlYWRlclwiOiBcIldvcmtfaGVhZGVyX18zaDE1X1wiLFxuXHRcImltZzAxXCI6IFwiV29ya19pbWcwMV9fb1RqUEZcIixcblx0XCJmbGlnaHRzMDFcIjogXCJXb3JrX2ZsaWdodHMwMV9fM2lYYXhcIixcblx0XCJmb290ZXJcIjogXCJXb3JrX2Zvb3Rlcl9fMXdPdE5cIixcblx0XCJkZXNpZ25Db250ZW50XCI6IFwiV29ya19kZXNpZ25Db250ZW50X18yenpHV1wiLFxuXHRcImRlc2lnblRpdGxlXCI6IFwiV29ya19kZXNpZ25UaXRsZV9fM04tZkZcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9QdWJsaWMvRm9vdGVyLmpzJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9jc3MvV29yay5tb2R1bGUuY3NzJztcclxuaW1wb3J0IFNlY3VyZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvV29yay9TZWN1cmUuanMnO1xyXG5pbXBvcnQgeyBEcmF3ZXIgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvUHVibGljL0RyYXdlci5qcyc7XHJcblxyXG5jb25zdCBQYWdlID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtkcmF3ZXIsIHNldERyYXdlcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRHJhd2VyT3BlbiA9ICgpID0+IHtcclxuICAgICAgICBzZXREcmF3ZXIodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRHJhd2VyQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RHJhd2VyKGZhbHNlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgIHtkcmF3ZXIgPT0gZmFsc2UgP1xyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWN1cmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURyYXdlck9wZW49e2hhbmRsZURyYXdlck9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA6Jyd9XHJcblxyXG4gICAgICAgICAgICB7ZHJhd2VyID09IHRydWUgP1xyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6JyMxZjFmMWYnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURyYXdlckNsb3NlPXtoYW5kbGVEcmF3ZXJDbG9zZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA6Jyd9XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcblxyXG5cclxuICIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9mbGlnaHQtaGVhZGVyLWJmNDBjMDY0YTYzZjg5NjQyOTk0NmRhZWE4N2ZhZmZjLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9mbGlnaHRzMDItMGY2Mzc1NmIzZjJiZjVkNTY1ZDU3MTg3Njk3MTQ2NWQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ZsaWdodHMwMy05NmI0MjM4ZmE5ZTUyMzVjNmU2MGM1NGFlY2RiZTE0Yi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZmxpZ2h0czA0LTI1MWEzMTVhMzI4ZDA5ZWFkODIwZGJmYjdmNGU0ODlkLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9mbGlnaHRzMDUtNWFkYmNkMzg2NTExYzBiNzNiYzk3MmZmNjg4MGE3N2EucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Byb2Nlc3MxMi05OTc2MDZmZGVmZGU5NTdmOWY5YzQ0NzA4MzRjNjdiOS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUJ3U1VSQlZIZ0JmWTlSRFlBd0RFVFg4c1BmNW1CSUFFazRBRVZZQUFjNEFBbElxSU55SlZ0Q1NNcExibGw2dCtWS0FYUkFWUmRjZXloQkt4SE5GNkJpSHNWNEl3Z05UWXl4dnZ6UzJweHl6aHA4aE8zNENTUUxuSjZMYmh1anlPajhJc3c4OGJNSzJ0cHExWUIybTVsM0EzaG1KQStWMW1wMEFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9mbGlnaHRzMDEtZTlmZDM3NjY4NzdmMTdkODlhYTg1OGI4NmE0OGRmYjcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Byb2Nlc3MwMS04OGMxMmExZDFiZmE3YzBjNzc4ODY5ZTBkMjUxZTRhZS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcHJvY2VzczAyLWZlMWIyZjM1OWVlZmRjNzE1YmQxNWY2MmZkYTc4ZTJkLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9wcm9jZXNzMDMtZmNiOGJiZjM1ZTI4ZThiMWY1ZjgxMjZhZTVhMjU0NGMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Byb2Nlc3MwNC02NGNmNGU1MGU1ZWYwOTE5NDY5NDdkMzExYWE5M2FhZS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcHJvY2VzczA1LTk4YTljYjkzMDRjODUxZWQyOTk1ODEzZmE5MzhhMDkzLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9wcm9jZXNzMDYtYzMxN2ZjN2UxYjNmNzQyZjkzMDliNGI3OWNhNjAyMDAucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Byb2Nlc3MwNy05NGFmMjYzZjFmNDVlNDFhMDI3YzA1ZmJlNjA1ZWE5NC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcHJvY2VzczA4LTQ3ZmMyYzVlYzFmZWFhMjlhOTRiMDI0MzJiZGFhZDBhLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9wcm9jZXNzMDktYTNjNTkzMGJhODQ0NDQ3Mjk3MGZiMTcyYWJlMzk0NTcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Byb2Nlc3MxMC1hYTJiZjc2MzBmZjk3Yjc5ZjliYTRmZTRlN2RiZTAwNi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcHJvY2VzczExLTMwMTcwYmQwMDIwNDk4MTE4OTFmOGVmZmU0YWVhMmRjLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0ZvcndhcmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRMZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=