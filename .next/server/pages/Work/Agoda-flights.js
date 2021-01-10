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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Public\\Carousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
  icon: {
    fontSize: '1.5rem',
    color: '#8F8F8F',
    "&:hover": {
      color: '#1F1F1F'
    }
  }
});
const Carousel = props => {
  const classes = useStyles();
  const [carousel, setCarousel] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);

  const handleCarouselNext = () => {
    if (carousel < imgsrc.length - 1) {
      setCarousel(carousel + 1);
    } else {
      setCarousel(0);
    }
  };

  const handleCarouselLast = () => {
    if (carousel > 0) {
      setCarousel(carousel - 1);
    } else {
      setCarousel(imgsrc.length - 1);
    }
  };

  const {
    imgsrc,
    caption
  } = props;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.carouselOuter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
      lineNumber: 50,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }, __jsx("div", {
    style: {
      backgroundColor: '#F5F5F5'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: imgsrc[carousel],
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.carouselImg,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 33
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.captionContainer,
    style: {
      marginTop: '1rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClick: handleCarouselLast,
    style: {
      backgroundColor: 'transparent'
    },
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 33
    }
  }, __jsx(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.icon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 37
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgDescription,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 33
    }
  }, caption[carousel])), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 3,
    style: {
      textAlign: 'right'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClick: handleCarouselNext,
    style: {
      backgroundColor: 'transparent'
    },
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 33
    }
  }, __jsx(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.icon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 37
    }
  }))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
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
  main: {
    height: '100vh',
    marginLeft: '6%',
    marginRight: '6%',
    paddingTop: "1rem"
  },
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
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.main,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.drawerTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, "saliejung")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    sm: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    sm: 1,
    style: {
      textAlign: 'center',
      marginTop: '-0.5rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: handleDrawerClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      color: '#B8B8B8'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/Work",
    underline: "none",
    className: classes.drawerLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, "WORK")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    className: classes.drawerHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/Writings",
    underline: "none",
    className: classes.drawerLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }, "WRITINGS")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    className: classes.drawerHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/About",
    underline: "none",
    className: classes.drawerLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 25
    }
  }, "ABOUT")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    className: classes.drawerHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
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
      lineNumber: 100,
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
    lineHeight: '0.75rem',
    fontSize: '0.75rem',
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
  }, "Open to new opportunities"), __jsx("span", {
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
      lineNumber: 50,
      columnNumber: 21
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "https://www.linkedin.com/in/salie-chien/",
    underline: "none",
    className: classes.link,
    target: "_blank",
    rel: "noopener",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, "Linkedin"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "https://saliejung.medium.com/",
    underline: "none",
    className: classes.link,
    target: "_blank",
    rel: "noopener",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, "Medium"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 1,
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footerBlock2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.copyright,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, "Designed by Chien ShengJung \xA9 2020 all rights reserve")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.copyright,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, "Developed by ", __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    underline: "none",
    className: classes.copyright,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
      lineNumber: 88,
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Public\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])({
  link: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    letterSpacing: '1px',
    marginLeft: '32px',
    color: '#8F8F8F',
    fontSize: '1rem',
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
  },
  linkAnchor: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    letterSpacing: '1px',
    marginLeft: '32px',
    color: 'black',
    fontSize: '1rem'
  },
  icon: {
    fontSize: '1.5rem',
    color: '#8F8F8F',
    "&:hover": {
      color: '#1F1F1F'
    }
  },
  menuButton: {
    paddingTop: '2.5rem',
    textAlign: 'center'
  }
});
const Header = props => {
  const classes = useStyles();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  const {
    handleDrawerOpen
  } = props;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    style: {
      paddingTop: '1.5rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
      lineNumber: 76,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }
  }, "saliejung"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default.a, {
    mdDown: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.menuBar,
    style: {
      paddingTop: '1.5rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/Work",
    underline: "none",
    className: router.pathname == '/Work' ? classes.linkAnchor : classes.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 33
    }
  }, "WORK")), __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/Writings",
    underline: "none",
    className: router.pathname == '/Writings' ? classes.linkAnchor : classes.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 33
    }
  }, "WRITINGS")), __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/About",
    underline: "none",
    className: router.pathname == '/About' ? classes.linkAnchor : classes.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  }, "ABOUT")), __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
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
      lineNumber: 102,
      columnNumber: 33
    }
  }, "RESUME")))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default.a, {
    lgUp: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    sm: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    sm: 1,
    className: classes.menuButton,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: handleDrawerOpen,
    style: {
      backgroundColor: 'transparent'
    },
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.icon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
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
    disableRipple: true,
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
      lineNumber: 50,
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
/* harmony import */ var _public_flights01_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/flights01.png */ "./public/flights01.png");
/* harmony import */ var _public_flights01_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_flights01_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_agoda_flights_flights02_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/agoda-flights/flights02.png */ "./public/agoda-flights/flights02.png");
/* harmony import */ var _public_agoda_flights_flights02_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_agoda_flights_flights02_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_agoda_flights_flights03_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/agoda-flights/flights03.png */ "./public/agoda-flights/flights03.png");
/* harmony import */ var _public_agoda_flights_flights03_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_agoda_flights_flights03_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_agoda_flights_flights04_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/agoda-flights/flights04.png */ "./public/agoda-flights/flights04.png");
/* harmony import */ var _public_agoda_flights_flights04_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_agoda_flights_flights04_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_dot_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/dot.png */ "./public/dot.png");
/* harmony import */ var _public_dot_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_dot_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Process01_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Process01.js */ "./component/Work/Process01.js");
/* harmony import */ var _Process02_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Process02.js */ "./component/Work/Process02.js");
/* harmony import */ var _Process03_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Process03.js */ "./component/Work/Process03.js");
/* harmony import */ var _Public_BottomNavbar_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Public/BottomNavbar.js */ "./component/Public/BottomNavbar.js");
/* harmony import */ var _public_gif_flight_gif__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../public/gif/flight.gif */ "./public/gif/flight.gif");
/* harmony import */ var _public_gif_flight_gif__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_gif_flight_gif__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Work\\AgodaFlights.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const AgodaFlights = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.img01,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
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
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: _public_flights01_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    style: {
      width: '65%'
    },
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.flights01,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
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
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 3,
    md: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 6,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, "Agoda Flights")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 3,
    md: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, "Complete your journey with seat selection"), __jsx("h2", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, "\xA7")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
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
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.article,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: {
      fontWeight: 700,
      letterSpacing: '0.03rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, "CONTEXT & CHALLENGE\xA0\xA0"), "In early 2020, Agoda Flights has launched for six months achieving 1K daily booking. We started transferring our focus from little enhancement to large-scale features, aiming to become a more mature product to fulfill all the customers' needs. Compared to the competitors, there is still a long way to chase.", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 30
    }
  }), "Seat selection is one of the core features. Not to mention that it is a sophisticated project, we also have a high dependency on the supplier to define the scope and confirm the data they could provide. Therefore, we launched the feature with the free selection that it certainly reduces the risk of implementation. From a scalable perspective, we still consider the paid seats to accommodate the scenario afterward.")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
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
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 5,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contentTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 29
    }
  }, "Timeline"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contentDetail,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  }, "March to April 2020 (3 weeks)")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contentTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  }, "Team"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contentDetail,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 29
    }
  }, "Designers (2), Product Manager (2), Engineers (12+), QA (2)")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contentTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 29
    }
  }, "My role"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contentDetail,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 29
    }
  }, "Competitive Analysis, User interview, Research, UI/UX Design (App)")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
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
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
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
      lineNumber: 101,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotLine,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, "\xB7\xA0\xB7\xA0\xB7")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
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
      lineNumber: 109,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 29
    }
  }, "DESIGN HIGHLIGHT")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlightTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 29
    }
  }, "Clarity of the information with sophisticated details")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 29
    }
  }, "The experience of selecting seats involving a bunch of information, from the flight segment, passenger types, seating restrictions & fare, and the facilities on the plane. It is critical to display all the information clearly to help the customer making the decision based on the complexity of their personal preference. Therefore, we aimed to surface the bare minimum of the information to be straightforward and direct to simplify the decision-making process.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
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
      lineNumber: 139,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.gallery1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: _public_agoda_flights_flights02_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 37
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.gallery1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: _public_agoda_flights_flights04_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 37
    }
  }))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
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
      lineNumber: 162,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _public_agoda_flights_flights03_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
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
      lineNumber: 172,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 29
    }
  }, "DESIGN HIGHLIGHT")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlightTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 29
    }
  }, "Directly interacting to make decisions with ease")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 29
    }
  }, "While the customer is considering the seating between price, position, and preference, it guides them better with fluent interaction and real-time feedback. When it comes to group traveler and multiple slices, we designed many details such as updating the subtotal, the attribute of seats and zooming to help them complete the tasks faster.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
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
      lineNumber: 200,
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
      lineNumber: 201,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.gallery1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _public_gif_flight_gif__WEBPACK_IMPORTED_MODULE_12___default.a,
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 29
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgDescription,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 25
    }
  }, "Simple and slick to keep the users focus on decision making.")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
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
      lineNumber: 219,
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
      lineNumber: 221,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.reflection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
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
      lineNumber: 233,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotLine,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 29
    }
  }, "\xB7\xA0\xB7\xA0\xB7")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 37
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 37
    }
  }, "Benchmarking helps (a lot) for introducing a new feature - Especially for the later progress, there are many little fine-tune needing a quick decision . When engineers were building it, I already shifted my focus to other projects. It helps to recall the memory from a couple of screenshots and the research summary.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 37
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 37
    }
  }, "Benchmarking helps (a lot) for introducing a new feature - Especially for the later progress, there are many little fine-tune needing a quick decision . When engineers were building it, I already shifted my focus to other projects. It helps to recall the memory from a couple of screenshots and the research summary.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 37
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
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
      lineNumber: 294,
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
      lineNumber: 298,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
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
      lineNumber: 300,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.scrollDown,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 21
    }
  }, "scroll down to learn more")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 13
    }
  }, __jsx(_Process01_js__WEBPACK_IMPORTED_MODULE_8__["Process01"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 13
    }
  }, __jsx(_Process02_js__WEBPACK_IMPORTED_MODULE_9__["Process02"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 13
    }
  }, __jsx(_Process03_js__WEBPACK_IMPORTED_MODULE_10__["Process03"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 17
    }
  })), __jsx("div", {
    style: {
      marginTop: '6%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 13
    }
  }, __jsx(_Public_BottomNavbar_js__WEBPACK_IMPORTED_MODULE_11__["BottomNavbar"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
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
    imgsrc: [_public_process_process01_png__WEBPACK_IMPORTED_MODULE_3___default.a, _public_process_process02_png__WEBPACK_IMPORTED_MODULE_4___default.a],
    caption: ['Noted the features across the process. Purple stands for fundamental function, yellow stands for the uncommon trait comparing to other products.', 'From simple selection to specific assigning seats, there are many approaches to achieve the needs.'],
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
      lineNumber: 87,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
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
      lineNumber: 92,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 33
    }
  }, "IN-DEPTH INTERVIEW")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisTitle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 33
    }
  }, "Collect insights from users")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 33
    }
  }, "Since it's an entirely new feature, and we still have enough lead time. We decided to do the user interview to collect more insights from the users. The research plan, discussion guides, and all five sessions were all conducted by the designers.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
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
      lineNumber: 117,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.researchTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 33
    }
  }, "RESEARCH GOAL")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
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
      lineNumber: 144,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.researchTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 33
    }
  }, "KEY QUESTIONS")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 41
    }
  }, "What's travelers' intention to select a seat?")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 41
    }
  }, "What kind of information do travelers need to know when choosing the seats?")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 41
    }
  }, "What can they do without when looking at all the content that is on the page?")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 41
    }
  }, "What kind of considerations goes into selecting the seats?")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 41
    }
  }, "For those who didn't select seats during booking, would they choose in post-booking or online check-in?")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 41
    }
  }, "At which point during the booking process would the customer prefer to select the seats?")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
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
      lineNumber: 245,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.researchTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 33
    }
  }, "PARTICIPANTS OVERVIEW")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 41
    }
  }, "Four participants preferred booking with airlines depends on the destination and the Frequent-flyer program they have.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 41
    }
  }, "Three participants mentioned that they usually book through the desktop.")))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
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
      lineNumber: 287,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 29
    }
  }, __jsx("div", {
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
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
      lineNumber: 296,
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
      lineNumber: 302,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgDescription2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 33
    }
  }, "We interviewed by video call due to work-from-home policy when the COVID-19 hit. It is tricky to observe behavior outside of the screen since participants only shared the screen on the phone")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
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
      lineNumber: 317,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.researchTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 33
    }
  }, "FIND-OUTS")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 41
    }
  }, "If the seat map itself is clear enough on the information and UI, the participants won\u2019t pay attention to the seat legend. However, it\u2019s critical to explain different options if they want to check more details.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 41
    }
  }, "They all have precise preferences on seat selection: (1) Front (The very front of the available options) (2) Window/Aisle/ No middle (3) Legroom (4) Distance to the toilet/exit (especially for kids and elder)")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 41
    }
  }, "The intention to choose seats during booking is the same for everyone: (1) If free (2) If travel with family (kids, parents) or friends (sit together) (3) Long-haul flights (3.5 hrs+) (4) Crowded flights")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
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
      lineNumber: 393,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.researchTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 33
    }
  }, "NEXT STEP")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 41
    }
  }, "Make sure the UI of the seat map is clear enough to recognize")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 41
    }
  }, "When offering various options of seats, do clarify the difference or benefits of the seats")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 41
    }
  }, "Make sure we display the first available seat visible without scroll when landing on the page")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 41
    }
  }, "Display clearly which seats belong to which passenger")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 41
    }
  }, "Consider the special request for some specific types of traveler, such as kids, elderly, business and disabled")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 41
    }
  }, "Reminder for selecting seats when it's free")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 41
    }
  }, "Reminder for group traveler")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 41
    }
  }, "Allow users to choose seats after booked Make sure we display clear feedback for loading")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513,
      columnNumber: 41
    }
  }, "Make sure we display clear feedback for loading")))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
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
      lineNumber: 528,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      backgroundColor: 'white'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
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
      lineNumber: 532,
      columnNumber: 29
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
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
      lineNumber: 541,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgDescription2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
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
      lineNumber: 556,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 33
    }
  }, "RESEARCH SYNTHESIZE")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisTitle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563,
      columnNumber: 33
    }
  }, "Define the bare minimum of product")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569,
      columnNumber: 33
    }
  }, "Considering the dependency on the supplier and the development effort, we're looking for the MVP version of the solution to reduce the risk for implementation. Hence, after the research phase, we broke down all the features and requirements into phased tasks.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578,
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
      lineNumber: 581,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      backgroundColor: 'white'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584,
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
      lineNumber: 585,
      columnNumber: 29
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591,
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
      lineNumber: 594,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgDescription2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600,
      columnNumber: 33
    }
  }, "We listed out the potential design criteria and discussed with the product manager the scope of the project.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607,
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
/* harmony import */ var _public_process_process12_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/process/process12.png */ "./public/process/process12.png");
/* harmony import */ var _public_process_process12_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_process_process12_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Public_Carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Public/Carousel */ "./component/Public/Carousel.js");
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Work\\Process02.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











;
const Process02 = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
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
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
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
  }, "THE PROCESS / 02")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
  }, "Design & Iterate")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
      marginTop: '1%'
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
    style: {
      marginTop: '10%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 33
    }
  }, "PRELIMINARY EXPLORATIONS")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisTitle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 33
    }
  }, "Early concepts to gather feedback and direction")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 33
    }
  }, "The interface might be the most challenging part of this project. For mobile, it is even harder to display so much information on the little tiny screen. In the beginning, I focused on the info structure and the overall flow.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
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
      lineNumber: 73,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      backgroundColor: 'white'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
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
      lineNumber: 77,
      columnNumber: 29
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
  }, "DESIGN ITERATION")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
  }, "Deep dive into the details")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
  }, "After confirming the flow, I put more effort into the exploration of the selection process. There are flight segments, passenger selection, seat legend, seat map, and the price update. We were looking for an approach to make the displaying more efficient, and explain clear on what's the current state of the process.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
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
      lineNumber: 117,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
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
      lineNumber: 119,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.gallery1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _public_process_process07_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 33
    }
  })), __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgDescription3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
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
      lineNumber: 127,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.gallery1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _public_process_process08_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 33
    }
  })), __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgDescription3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
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
      lineNumber: 137,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.gallery1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _public_process_process09_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 33
    }
  })), __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgDescription3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
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
      lineNumber: 148,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.gallery1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _public_process_process10_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 33
    }
  })), __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgDescription3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
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
      lineNumber: 162,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
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
      lineNumber: 167,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 33
    }
  }, "FINAL DESIGN")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisTitle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 33
    }
  }, "Free seats for launch and the next phase")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 33
    }
  }, "Based on the timeline and the development effort, we did compromise to simplify the process as much as possible. The most challenging part must be the worst case for multiple segments and multiple stops flight, the design also should be scalable to the paid options.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 17
    }
  }, __jsx(_Public_Carousel__WEBPACK_IMPORTED_MODULE_10__["Carousel"], {
    imgsrc: [_public_process_process11_png__WEBPACK_IMPORTED_MODULE_8___default.a, _public_process_process12_png__WEBPACK_IMPORTED_MODULE_9___default.a],
    caption: ['We implemented the free selection when launched. Considering the paid option is coming later, it was critical to design the process with it in mind.', 'Compared to the initial flow, it came out to a sophisticated flow with variations for different cases after involved in the engineers.'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
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
/* harmony import */ var _public_process_process13_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/process/process13.png */ "./public/process/process13.png");
/* harmony import */ var _public_process_process13_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_process_process13_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Work\\Process03.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Process03 = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
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
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 8,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
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
      lineNumber: 15,
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
      lineNumber: 16,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.progressTitle1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
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
      lineNumber: 21,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.progressTitle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
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
      lineNumber: 26,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotLine,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 33
    }
  }, "\xB7\xA0\xB7\xA0\xB7")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
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
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
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
      lineNumber: 41,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 33
    }
  }, "TECHNICAL REVIEW")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisTitle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 33
    }
  }, "Refine the details to close the gap")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 33
    }
  }, "When we implemented the project, there were more issues to recognize from the supplier. It is hard to understand all the technical constraints and define the solution accordingly. Therefore, we worked closely with the QA engineers at the last mile to prepare all the worse scenarios. I appreciated their effort to be the bridge between the designer, developer, business insight, and provide suggestions at balance.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      backgroundColor: 'white'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _public_process_process13_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 29
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
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
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgDescription2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 33
    }
  }, "A completed excel to list down all the CMS across the platforms waiting for translation.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
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
      lineNumber: 96,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
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
      lineNumber: 101,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 33
    }
  }, "OUTCOME")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisTitle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 33
    }
  }, "More to be updated...")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 33
    }
  }, "The project is still implementing, performance result will be updated afterward.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
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
        lineNumber: 81,
        columnNumber: 13
      }
    }, this.state.isPass == false ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 25
      }
    }, __jsx(_component_Public_Header_js__WEBPACK_IMPORTED_MODULE_8__["Header"], {
      handleDrawerOpen: handleDrawerOpen,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 29
      }
    })), __jsx("div", {
      className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 29
      }
    }, "Secure area"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 29
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 29
      }
    }), __jsx("span", {
      className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 29
      }
    }, "Please ask the password for permission."), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      container: true,
      className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.password,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
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
        lineNumber: 104,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "password",
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
      placeholder: "Enter password",
      style: {
        width: "100%"
      },
      InputProps: {
        endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4___default.a, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 45
          }
        }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
          onClick: this.handleSubmit,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 49
          }
        }, __jsx(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_6___default.a, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 53
          }
        })))
      },
      InputLabelProps: {
        shrink: false
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
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
    })), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 25
      }
    }, __jsx(_AgodaFlights_js__WEBPACK_IMPORTED_MODULE_7__["AgodaFlights"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
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
/* harmony import */ var _component_Public_Scrollup_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../component/Public/Scrollup.js */ "./component/Public/Scrollup.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__);
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
      lineNumber: 22,
      columnNumber: 9
    }
  }, drawer == false ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, __jsx(_component_Work_Secure_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handleDrawerOpen: handleDrawerOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
    container: true,
    style: {
      top: '90%',
      position: 'fixed'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
    item: true,
    xs: 8,
    sm: 9,
    md: 9,
    lg: 10,
    xl: 10,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
    item: true,
    xs: 2,
    sm: 2,
    md: 2,
    lg: 1,
    xl: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, __jsx(_component_Public_Scrollup_js__WEBPACK_IMPORTED_MODULE_5__["Scrollup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx(_component_Public_Footer_js__WEBPACK_IMPORTED_MODULE_1__["Footer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }))) : '', drawer == true ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      backgroundColor: '#1f1f1f'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, __jsx(_component_Public_Drawer_js__WEBPACK_IMPORTED_MODULE_4__["Drawer"], {
    handleDrawerClose: handleDrawerClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }))) : '');
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

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

/***/ "./public/gif/flight.gif":
/*!*******************************!*\
  !*** ./public/gif/flight.gif ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/flight-1b7024d717ffa852819eda559420b8ac.gif";

/***/ }),

/***/ "./public/process/process01.png":
/*!**************************************!*\
  !*** ./public/process/process01.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/process01-d57c0e467d96aac90cb381103ee79133.png";

/***/ }),

/***/ "./public/process/process02.png":
/*!**************************************!*\
  !*** ./public/process/process02.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/process02-ebfa16188475f878dfb80234eb2a4432.png";

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

module.exports = "/_next/static/images/process11-3b7667c46f7f38f8b6278dd74f1f65ae.png";

/***/ }),

/***/ "./public/process/process12.png":
/*!**************************************!*\
  !*** ./public/process/process12.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/process12-1cd3a7355ccf967e9677835a84884225.png";

/***/ }),

/***/ "./public/process/process13.png":
/*!**************************************!*\
  !*** ./public/process/process13.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/process13-7ad37c673b40992d7f1ee67d2828da67.png";

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9Cb3R0b21OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9DYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0RyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL1Njcm9sbHVwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9Xb3JrL0Fnb2RhRmxpZ2h0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvV29yay9Qcm9jZXNzMDEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1dvcmsvUHJvY2VzczAyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9Xb3JrL1Byb2Nlc3MwMy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvV29yay9TZWN1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vY3NzL1B1YmxpYy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2Nzcy9Xb3JrLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvV29yay9BZ29kYS1mbGlnaHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9hZ29kYS1mbGlnaHRzL2ZsaWdodHMwMi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fnb2RhLWZsaWdodHMvZmxpZ2h0czAzLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYWdvZGEtZmxpZ2h0cy9mbGlnaHRzMDQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9kb3QucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9mbGlnaHRzMDEucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9naWYvZmxpZ2h0LmdpZiIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvcHJvY2Vzcy9wcm9jZXNzMDEucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9wcm9jZXNzL3Byb2Nlc3MwMi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczAzLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvcHJvY2Vzcy9wcm9jZXNzMDQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9wcm9jZXNzL3Byb2Nlc3MwNS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczA2LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvcHJvY2Vzcy9wcm9jZXNzMDcucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9wcm9jZXNzL3Byb2Nlc3MwOC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczA5LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvcHJvY2Vzcy9wcm9jZXNzMTAucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9wcm9jZXNzL3Byb2Nlc3MxMS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczEyLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvcHJvY2Vzcy9wcm9jZXNzMTMucG5nIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93QmFja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0ZvcndhcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTGVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJsaW5rIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiY29sb3IiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJsaW5rMiIsIkJvdHRvbU5hdmJhciIsImNsYXNzZXMiLCJzdHlsZXMiLCJtYWluMSIsInRleHRBbGlnbiIsImljb24iLCJDYXJvdXNlbCIsInByb3BzIiwiY2Fyb3VzZWwiLCJzZXRDYXJvdXNlbCIsIlJlYWN0IiwidXNlU3RhdGUiLCJoYW5kbGVDYXJvdXNlbE5leHQiLCJpbWdzcmMiLCJsZW5ndGgiLCJoYW5kbGVDYXJvdXNlbExhc3QiLCJjYXB0aW9uIiwiY2Fyb3VzZWxPdXRlciIsIm1hcmdpblRvcCIsImJhY2tncm91bmRDb2xvciIsImNhcm91c2VsSW1nIiwiY2FwdGlvbkNvbnRhaW5lciIsImltZ0Rlc2NyaXB0aW9uIiwibWFpbiIsImhlaWdodCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInBhZGRpbmdUb3AiLCJkcmF3ZXJMaW5rIiwiZHJhd2VySGVhZGVyIiwiRHJhd2VyIiwiaGFuZGxlRHJhd2VyQ2xvc2UiLCJkcmF3ZXJUaXRsZSIsImNvcHlyaWdodCIsIkZvb3RlciIsImZvb3RlckJsb2NrIiwiZm9vdGVyVGl0bGUiLCJmb290ZXJMZWZ0VGl0bGUiLCJmb290ZXJMZWZ0Q29udGVudCIsImZvb3RlckJsb2NrMiIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwibGlua0FuY2hvciIsIm1lbnVCdXR0b24iLCJIZWFkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVEcmF3ZXJPcGVuIiwidGl0bGUiLCJtZW51QmFyIiwicGF0aG5hbWUiLCJTY3JvbGx1cCIsInNjcm9sbEMiLCJzZXRTY3JvbGxDIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uU2Nyb2xsIiwic2Nyb2xsWSIsImhhbmRsZVNjcm9sbHRvVG9wIiwidW5kZWZpbmVkIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImFsaWduIiwiQWdvZGFGbGlnaHRzIiwiaW1nMDEiLCJmbGlnaHRzMDEiLCJ3aWR0aCIsInRpdGxlMiIsInRpdGxlMyIsInRpdGxlNCIsImFydGljbGUiLCJjb250ZW50IiwiY29udGVudFRpdGxlIiwiY29udGVudERldGFpbCIsImRvdExpbmUiLCJkZXNpZ25IaWdobGlnaHQiLCJkZXNpZ25IaWdobGlnaHRUaXRsZSIsImRlc2lnbkhpZ2hsaWdodENvbnRlbnQiLCJnYWxsZXJ5MSIsImZsaWdodHMwMiIsImZsaWdodHMwNCIsImZsaWdodHMwMyIsImZsaWdodEdpZiIsInJlZmxlY3Rpb24iLCJkb3RBbGlnbiIsImRvdCIsInNjcm9sbERvd24iLCJQcm9jZXNzMDEiLCJwcm9ncmVzc01haW4iLCJwcm9ncmVzc1RpdGxlMSIsInByb2dyZXNzVGl0bGUyIiwiY29tcGV0aXRpdmVBbmFseXNpc1RpdGxlMiIsImNvbXBldGl0aXZlQW5hbHlzaXNDb250ZW50IiwicHJvY2VzczAxIiwicHJvY2VzczAyIiwicmVzZWFyY2hUaXRsZSIsImNvbGxlY3RJbnNpZ2h0Q29udGVudCIsInByb2Nlc3MwMyIsImltZ0Rlc2NyaXB0aW9uMiIsInByb2Nlc3MwNCIsInByb2Nlc3MwNSIsIlByb2Nlc3MwMiIsInByb2Nlc3MwNiIsInByb2Nlc3MwNyIsImltZ0Rlc2NyaXB0aW9uMyIsInByb2Nlc3MwOCIsInByb2Nlc3MwOSIsInByb2Nlc3MxMCIsInByb2Nlc3MxMSIsInByb2Nlc3MxMiIsIlByb2Nlc3MwMyIsInBhZGRpbmdCb3R0b20iLCJwcm9jZXNzMTMiLCJTZWN1cmUiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInN0YXRlIiwicGFzc3dvcmQiLCJlcnJvck1lc3NhZ2UiLCJpc1Bhc3MiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwic2V0U3RhdGVCeU5hbWUiLCJyZWN1cnNpdmVSZXBsYWNlVmFsdWVCeU5hbWUiLCJoYW5kbGVTdWJtaXQiLCJlIiwiY2FsbEJhY2siLCJudWxsVmFsdWUiLCJ2YWx1ZSIsIm5hbWUiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsIm9iamVjdCIsImtleXNBcnIiLCJyZXBsYWNlIiwic3BsaXQiLCJpIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJyZW5kZXIiLCJkZXNjcmlwdGlvbiIsImtleUNvZGUiLCJlbmRBZG9ybm1lbnQiLCJzaHJpbmsiLCJoZWFkZXIiLCJQYWdlIiwiZHJhd2VyIiwic2V0RHJhd2VyIiwicG9zaXRpb24iLCJmb290ZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFD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QSxLQUNJO0FBQUssU0FBSyxFQUFFO0FBQUNsSSxxQkFBZSxFQUFDO0FBQWpCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsa0VBQUQ7QUFDSSxxQkFBaUIsRUFBRVksaUJBRHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBREgsR0FRQSxFQS9CTCxDQURKO0FBb0NILENBaEREOztBQWtEZXFILG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDMURBLHVGOzs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7OztBQ0FBLGlDQUFpQyw0Uzs7Ozs7Ozs7Ozs7QUNBakMsdUY7Ozs7Ozs7Ozs7O0FDQUEsb0Y7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvV29yay9BZ29kYS1mbGlnaHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9Xb3JrL0Fnb2RhLWZsaWdodHMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvUHVibGljLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgbGluazoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90byBTbGFiJyxcclxuICAgICAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgICAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgICAgIGNvbG9yOidibGFjaycsXHJcbiAgICAgICAgZm9udFNpemU6JzNyZW0nLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6JzRyZW0nLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6JyM4RjhGOEYnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxpbmsyOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvIFNsYWInLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICAgICAgY29sb3I6J2JsYWNrJyxcclxuICAgICAgICBmb250U2l6ZTonMS41cmVtJyxcclxuICAgICAgICBsaW5lSGVpZ2h0OicycmVtJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOicjOEY4RjhGJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgQm90dG9tTmF2YmFyID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluMX0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxIaWRkZW4gbWREb3duPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IHNtPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0gc3R5bGU9e3t0ZXh0QWxpZ246J2xlZnQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9Xb3JrXCIgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+V09SSzwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvV3JpdGluZ1wiIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PldSSVRJTkdTPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IHN0eWxlPXt7dGV4dEFsaWduOidyaWdodCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0Fib3V0XCIgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+QUJPVVQ8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IHNtPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcblxyXG4gICAgICAgICAgICAgICAgPEhpZGRlbiBsZ1VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IHNtPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0gc3R5bGU9e3t0ZXh0QWxpZ246J2xlZnQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9Xb3JrXCIgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMubGluazJ9PldPUks8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1dyaXRpbmdcIiB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rMn0+V1JJVElOR1M8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0gc3R5bGU9e3t0ZXh0QWxpZ246J3JpZ2h0J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvQWJvdXRcIiB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rMn0+QUJPVVQ8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IHNtPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcblxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvUHVibGljLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IEFycm93QmFja0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93QmFjayc7XHJcbmltcG9ydCBBcnJvd0ZvcndhcmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0ZvcndhcmQnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgaWNvbjoge1xyXG4gICAgICAgIGZvbnRTaXplOicxLjVyZW0nLFxyXG4gICAgICAgIGNvbG9yOicjOEY4RjhGJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOicjMUYxRjFGJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWwgPSAocHJvcHMpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgXHJcbiAgICBjb25zdCBbY2Fyb3VzZWwsIHNldENhcm91c2VsXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVDYXJvdXNlbE5leHQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoY2Fyb3VzZWwgPCBpbWdzcmMubGVuZ3RoIC0gMSl7XHJcbiAgICAgICAgICAgIHNldENhcm91c2VsKGNhcm91c2VsICsgMSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNldENhcm91c2VsKDApO1xyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDYXJvdXNlbExhc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoY2Fyb3VzZWwgPiAwKXtcclxuICAgICAgICAgICAgc2V0Q2Fyb3VzZWwoY2Fyb3VzZWwgLSAxKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2V0Q2Fyb3VzZWwoaW1nc3JjLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIH0gICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGltZ3NyYyxcclxuICAgICAgICBjYXB0aW9uXHJcbiAgICB9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbE91dGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6JzMlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gbWQ9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6JyNGNUY1RjUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltZ3NyY1tjYXJvdXNlbF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsSW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gbWQ9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuY2FwdGlvbkNvbnRhaW5lcn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzFyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IG1kPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2Fyb3VzZWxMYXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dCYWNrSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaW1nRGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FwdGlvbltjYXJvdXNlbF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IHN0eWxlPXt7dGV4dEFsaWduOidyaWdodCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDYXJvdXNlbE5leHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd0ZvcndhcmRJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1B1YmxpYy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBtYWluOiB7XHJcbiAgICAgICAgaGVpZ2h0OicxMDB2aCcsIFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6JzYlJywgXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6JzYlJywgXHJcbiAgICAgICAgcGFkZGluZ1RvcDogXCIxcmVtXCJcclxuICAgIH0sXHJcbiAgICBsaW5rOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgICAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6ICczMnB4JyxcclxuICAgICAgICBjb2xvcjonIzhGOEY4RicsXHJcbiAgICAgICAgZm9udFNpemU6JzE4cHgnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6J2JsYWNrJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkcmF3ZXJMaW5rOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICB0ZXh0QWxpZ246J2xlZnQnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICAgICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgICAgIGZvbnRTaXplOicyMnB4JyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOidibGFjaydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZHJhd2VySGVhZGVyOiB7XHJcbiAgICAgICAgcGFkZGluZ1RvcDonM3JlbSdcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgRHJhd2VyID0gKHByb3BzKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgaGFuZGxlRHJhd2VyQ2xvc2VcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZHJhd2VyVGl0bGV9PnNhbGllanVuZzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PjwvR3JpZD4gICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT48L0dyaWQ+ICAgIFxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezN9PjwvR3JpZD4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17MX0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicsIG1hcmdpblRvcDonLTAuNXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRHJhd2VyQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gc3R5bGU9e3tjb2xvcjonI0I4QjhCOCd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySGVhZGVyfSBzdHlsZT17e21hcmdpblRvcDonNHJlbSd9fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1dvcmtcIiB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJMaW5rfT5XT1JLPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPiAgICBcclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1dyaXRpbmdzXCIgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyTGlua30+V1JJVElOR1M8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9BYm91dFwiIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckxpbmt9PkFCT1VUPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy4vU2FsaWVDaGllbl9SZXN1bWUucGRmJyB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lcicgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyTGlua30+UkVTVU1FPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPiAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvUHVibGljLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGxpbms6IHtcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6JzEuOHJlbScsXHJcbiAgICAgICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgICAgIGZvbnRTaXplOicxcmVtJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOidibGFjaydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29weXJpZ2h0OiB7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgICAgICBsaW5lSGVpZ2h0OicwLjc1cmVtJyxcclxuICAgICAgICBmb250U2l6ZTonMC43NXJlbScsXHJcbiAgICAgICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6J2JsYWNrJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7ICAgIFxyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckJsb2NrfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17N30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNhbGllIFNoZW5nSnVuZyBDaGllbiAtLS0gUHJvZHVjdCBEZXNpZ25lclxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs1fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckxlZnRUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9wZW4gdG8gbmV3IG9wcG9ydHVuaXRpZXNcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJMZWZ0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbGllanVuZzQ3QGdtYWlsLmNvbVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NhbGllLWNoaWVuLycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZScgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXInXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMaW5rZWRpblxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3NhbGllanVuZy5tZWRpdW0uY29tLycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZScgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXInXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNZWRpdW1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJCbG9jazJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvcHlyaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERlc2lnbmVkIGJ5IENoaWVuIFNoZW5nSnVuZyDCqSAyMDIwIGFsbCByaWdodHMgcmVzZXJ2ZSBcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29weXJpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRGV2ZWxvcGVkIGJ5IDxMaW5rIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmNvcHlyaWdodH0+V2FuZyBXZWlBbjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e2hlaWdodDonM3JlbSd9fT48L0dyaWQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2Nzcy9QdWJsaWMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGxpbms6IHtcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogJzMycHgnLFxyXG4gICAgICAgIGNvbG9yOicjOEY4RjhGJyxcclxuICAgICAgICBmb250U2l6ZTonMXJlbScsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjonYmxhY2snXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRyYXdlckxpbms6IHtcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIHRleHRBbGlnbjonbGVmdCcsXHJcbiAgICAgICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICAgICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgICAgICBjb2xvcjonIzhGOEY4RicsXHJcbiAgICAgICAgZm9udFNpemU6JzIycHgnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6J2JsYWNrJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkcmF3ZXJIZWFkZXI6IHtcclxuICAgICAgICBwYWRkaW5nTGVmdDonMnJlbScsXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0OicycmVtJyxcclxuICAgICAgICBtYXJnaW5Ub3A6JzNyZW0nXHJcbiAgICB9LFxyXG4gICAgbGlua0FuY2hvcjoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICAgICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgICAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXHJcbiAgICAgICAgY29sb3I6J2JsYWNrJyxcclxuICAgICAgICBmb250U2l6ZTonMXJlbSdcclxuICAgIH0sXHJcbiAgICBpY29uOiB7XHJcbiAgICAgICAgZm9udFNpemU6JzEuNXJlbScsXHJcbiAgICAgICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6JyMxRjFGMUYnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1lbnVCdXR0b246IHtcclxuICAgICAgICBwYWRkaW5nVG9wOicyLjVyZW0nLFxyXG4gICAgICAgIHRleHRBbGlnbjonY2VudGVyJ1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGhhbmRsZURyYXdlck9wZW5cclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluMX0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc3R5bGU9e3twYWRkaW5nVG9wOicxLjVyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIHVuZGVybGluZT0nbm9uZScgc3R5bGU9e3tjb2xvcjonIzFGMUYxRid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5zYWxpZWp1bmc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxIaWRkZW4gbWREb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBjbGFzc05hbWU9e3N0eWxlcy5tZW51QmFyfSBzdHlsZT17e3BhZGRpbmdUb3A6JzEuNXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9Xb3JrJyB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvV29yayc/Y2xhc3Nlcy5saW5rQW5jaG9yOmNsYXNzZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdPUktcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvV3JpdGluZ3MnIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy9Xcml0aW5ncyc/Y2xhc3Nlcy5saW5rQW5jaG9yOmNsYXNzZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdSSVRJTkdTXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL0Fib3V0JyB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvQWJvdXQnP2NsYXNzZXMubGlua0FuY2hvcjpjbGFzc2VzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBQk9VVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy4vU2FsaWVDaGllbl9SZXN1bWUucGRmJyB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lcicgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJFU1VNRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8SGlkZGVuIGxnVXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHNtPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHNtPXsxfSBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURyYXdlck9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IEV4cGFuZExlc3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRMZXNzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGljb246IHtcclxuICAgICAgICBmb250U2l6ZTonNHJlbScsXHJcbiAgICAgICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6JyMxRjFGMUYnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2Nyb2xsdXAgPSAocHJvcHMpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IFtzY3JvbGxDLCBzZXRTY3JvbGxDXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcclxuICAgICAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcclxuICAgICAgICAgICAgc2V0U2Nyb2xsQyh3aW5kb3cuc2Nyb2xsWSk7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbHRvVG9wID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHdpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7dG9wOiAwLCBiZWhhdmlvcjogJ3Ntb290aCd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3thbGlnbjoncmlnaHQnfX0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7c2Nyb2xsQyA+IDQwMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTY3JvbGx0b1RvcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFeHBhbmRMZXNzSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj46JydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvV29yay5tb2R1bGUuY3NzJztcclxuaW1wb3J0IGZsaWdodHMwMSBmcm9tICcuLi8uLi9wdWJsaWMvZmxpZ2h0czAxLnBuZyc7XHJcbmltcG9ydCBmbGlnaHRzMDIgZnJvbSAnLi4vLi4vcHVibGljL2Fnb2RhLWZsaWdodHMvZmxpZ2h0czAyLnBuZyc7XHJcbmltcG9ydCBmbGlnaHRzMDMgZnJvbSAnLi4vLi4vcHVibGljL2Fnb2RhLWZsaWdodHMvZmxpZ2h0czAzLnBuZyc7XHJcbmltcG9ydCBmbGlnaHRzMDQgZnJvbSAnLi4vLi4vcHVibGljL2Fnb2RhLWZsaWdodHMvZmxpZ2h0czA0LnBuZyc7XHJcbmltcG9ydCBkb3QgZnJvbSAnLi4vLi4vcHVibGljL2RvdC5wbmcnO1xyXG5pbXBvcnQgeyBQcm9jZXNzMDEgfSBmcm9tICcuL1Byb2Nlc3MwMS5qcyc7XHJcbmltcG9ydCB7IFByb2Nlc3MwMiB9IGZyb20gJy4vUHJvY2VzczAyLmpzJztcclxuaW1wb3J0IHsgUHJvY2VzczAzIH0gZnJvbSAnLi9Qcm9jZXNzMDMuanMnO1xyXG5pbXBvcnQgeyBCb3R0b21OYXZiYXJ9IGZyb20gJy4uL1B1YmxpYy9Cb3R0b21OYXZiYXIuanMnO1xyXG5pbXBvcnQgZmxpZ2h0R2lmIGZyb20gJy4uLy4uL3B1YmxpYy9naWYvZmxpZ2h0LmdpZic7XHJcblxyXG5leHBvcnQgY29uc3QgQWdvZGFGbGlnaHRzID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuaW1nMDF9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc209ezR9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBzbT17NH0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZmxpZ2h0czAxfSBzdHlsZT17e3dpZHRoOic2NSUnfX0gY2xhc3NOYW1lPXtzdHlsZXMuZmxpZ2h0czAxfS8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzbT17NH0+PC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6XCI1JVwifX0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBtZD17NX0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGUyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWdvZGEgRmxpZ2h0cyAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+ICAgICBcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IG1kPXs1fT48L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGUzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGxldGUgeW91ciBqb3VybmV5IHdpdGggc2VhdCBzZWxlY3Rpb24gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGU0fT7CpzwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+ICAgICBcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6JzUlJ319PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRXZWlnaHQ6NzAwLCBsZXR0ZXJTcGFjaW5nOicwLjAzcmVtJ319PkNPTlRFWFQgJiBDSEFMTEVOR0UmbmJzcDsmbmJzcDs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEluIGVhcmx5IDIwMjAsIEFnb2RhIEZsaWdodHMgaGFzIGxhdW5jaGVkIGZvciBzaXggbW9udGhzIGFjaGlldmluZyAxSyBkYWlseSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9va2luZy4gV2Ugc3RhcnRlZCB0cmFuc2ZlcnJpbmcgb3VyIGZvY3VzIGZyb20gbGl0dGxlIGVuaGFuY2VtZW50IHRvIGxhcmdlLXNjYWxlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlcywgYWltaW5nIHRvIGJlY29tZSBhIG1vcmUgbWF0dXJlIHByb2R1Y3QgdG8gZnVsZmlsbCBhbGwgdGhlIGN1c3RvbWVycycgbmVlZHMuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb21wYXJlZCB0byB0aGUgY29tcGV0aXRvcnMsIHRoZXJlIGlzIHN0aWxsIGEgbG9uZyB3YXkgdG8gY2hhc2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxici8+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2VhdCBzZWxlY3Rpb24gaXMgb25lIG9mIHRoZSBjb3JlIGZlYXR1cmVzLiBOb3QgdG8gbWVudGlvbiB0aGF0IGl0IGlzIGEgc29waGlzdGljYXRlZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdCwgd2UgYWxzbyBoYXZlIGEgaGlnaCBkZXBlbmRlbmN5IG9uIHRoZSBzdXBwbGllciB0byBkZWZpbmUgdGhlIHNjb3BlIGFuZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybSB0aGUgZGF0YSB0aGV5IGNvdWxkIHByb3ZpZGUuIFRoZXJlZm9yZSwgd2UgbGF1bmNoZWQgdGhlIGZlYXR1cmUgd2l0aCB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyZWUgc2VsZWN0aW9uIHRoYXQgaXQgY2VydGFpbmx5IHJlZHVjZXMgdGhlIHJpc2sgb2YgaW1wbGVtZW50YXRpb24uIEZyb20gYSBzY2FsYWJsZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyc3BlY3RpdmUsIHdlIHN0aWxsIGNvbnNpZGVyIHRoZSBwYWlkIHNlYXRzIHRvIGFjY29tbW9kYXRlIHRoZSBzY2VuYXJpbyBhZnRlcndhcmQuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPiAgICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOic1JSd9fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NX0gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudFRpdGxlfT5UaW1lbGluZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50RGV0YWlsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXJjaCB0byBBcHJpbCAyMDIwICgzIHdlZWtzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudFRpdGxlfT5UZWFtPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnREZXRhaWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2lnbmVycyAoMiksIFByb2R1Y3QgTWFuYWdlciAoMiksIEVuZ2luZWVycyAoMTIrKSwgUUEgKDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50VGl0bGV9Pk15IHJvbGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudERldGFpbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGV0aXRpdmUgQW5hbHlzaXMsIFVzZXIgaW50ZXJ2aWV3LCBSZXNlYXJjaCwgVUkvVVggRGVzaWduIChBcHApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOic4JSd9fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezV9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZG90TGluZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIMK3Jm5ic3A7wrcmbmJzcDvCt1xyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezV9PjwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOic4JSd9fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2lnbkhpZ2hsaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgREVTSUdOIEhJR0hMSUdIVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2lnbkhpZ2hsaWdodFRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbGFyaXR5IG9mIHRoZSBpbmZvcm1hdGlvbiB3aXRoIHNvcGhpc3RpY2F0ZWQgZGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2lnbkhpZ2hsaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBleHBlcmllbmNlIG9mIHNlbGVjdGluZyBzZWF0cyBpbnZvbHZpbmcgYSBidW5jaCBvZiBpbmZvcm1hdGlvbiwgZnJvbSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgZmxpZ2h0IHNlZ21lbnQsIHBhc3NlbmdlciB0eXBlcywgc2VhdGluZyByZXN0cmljdGlvbnMgJiBmYXJlLCBhbmQgdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhY2lsaXRpZXMgb24gdGhlIHBsYW5lLiBJdCBpcyBjcml0aWNhbCB0byBkaXNwbGF5IGFsbCB0aGUgaW5mb3JtYXRpb24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJseSB0byBoZWxwIHRoZSBjdXN0b21lciBtYWtpbmcgdGhlIGRlY2lzaW9uIGJhc2VkIG9uIHRoZSBjb21wbGV4aXR5IG9mIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWlyIHBlcnNvbmFsIHByZWZlcmVuY2UuIFRoZXJlZm9yZSwgd2UgYWltZWQgdG8gc3VyZmFjZSB0aGUgYmFyZSBtaW5pbXVtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mIHRoZSBpbmZvcm1hdGlvbiB0byBiZSBzdHJhaWdodGZvcndhcmQgYW5kIGRpcmVjdCB0byBzaW1wbGlmeSB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaXNpb24tbWFraW5nIHByb2Nlc3MuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDonNSUnLCBtYXJnaW5MZWZ0Oic2JScsIG1hcmdpblJpZ2h0Oic2JSd9fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYWxsZXJ5MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ZsaWdodHMwMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbGxlcnkxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZmxpZ2h0czA0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDonMTAwJSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2FsbGVyeTF9IHN0eWxlPXt7aGVpZ2h0OicxMDAuMTUlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZmxpZ2h0czAzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6JzglJ319PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzaWduSGlnaGxpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBERVNJR04gSElHSExJR0hUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzaWduSGlnaGxpZ2h0VGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpcmVjdGx5IGludGVyYWN0aW5nIHRvIG1ha2UgZGVjaXNpb25zIHdpdGggZWFzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2lnbkhpZ2hsaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoaWxlIHRoZSBjdXN0b21lciBpcyBjb25zaWRlcmluZyB0aGUgc2VhdGluZyBiZXR3ZWVuIHByaWNlLCBwb3NpdGlvbiwgYW5kIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZlcmVuY2UsIGl0IGd1aWRlcyB0aGVtIGJldHRlciB3aXRoIGZsdWVudCBpbnRlcmFjdGlvbiBhbmQgcmVhbC10aW1lIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRiYWNrLiBXaGVuIGl0IGNvbWVzIHRvIGdyb3VwIHRyYXZlbGVyIGFuZCBtdWx0aXBsZSBzbGljZXMsIHdlIGRlc2lnbmVkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbnkgZGV0YWlscyBzdWNoIGFzIHVwZGF0aW5nIHRoZSBzdWJ0b3RhbCwgdGhlIGF0dHJpYnV0ZSBvZiBzZWF0cyBhbmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgem9vbWluZyB0byBoZWxwIHRoZW0gY29tcGxldGUgdGhlIHRhc2tzIGZhc3Rlci4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOic1JScsIG1hcmdpbkxlZnQ6JzYlJywgbWFyZ2luUmlnaHQ6JzYlJ319PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOic1JSd9fSBzcGFjaW5nPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbGxlcnkxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtmbGlnaHRHaWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDonMTAwJSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmltZ0Rlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpbXBsZSBhbmQgc2xpY2sgdG8ga2VlcCB0aGUgdXNlcnMgZm9jdXMgb24gZGVjaXNpb24gbWFraW5nLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e21hcmdpblRvcDonOCUnfX0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gaXRlbSB4cz17ZmFsc2V9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnJlZmxlY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlZmxlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZG90TGluZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgwrcmbmJzcDvCtyZuYnNwO8K3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5kb3RBbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNpZ25IaWdobGlnaHRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJlbmNobWFya2luZyBoZWxwcyAoYSBsb3QpIGZvciBpbnRyb2R1Y2luZyBhIG5ldyBmZWF0dXJlIC0gRXNwZWNpYWxseSBmb3IgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgbGF0ZXIgcHJvZ3Jlc3MsIHRoZXJlIGFyZSBtYW55IGxpdHRsZSBmaW5lLXR1bmUgbmVlZGluZyBhIHF1aWNrIGRlY2lzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuIFdoZW4gZW5naW5lZXJzIHdlcmUgYnVpbGRpbmcgaXQsIEkgYWxyZWFkeSBzaGlmdGVkIG15IGZvY3VzIHRvIG90aGVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHMuIEl0IGhlbHBzIHRvIHJlY2FsbCB0aGUgbWVtb3J5IGZyb20gYSBjb3VwbGUgb2Ygc2NyZWVuc2hvdHMgYW5kIHRoZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2VhcmNoIHN1bW1hcnkuICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RvdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2lnbkhpZ2hsaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmVuY2htYXJraW5nIGhlbHBzIChhIGxvdCkgZm9yIGludHJvZHVjaW5nIGEgbmV3IGZlYXR1cmUgLSBFc3BlY2lhbGx5IGZvciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBsYXRlciBwcm9ncmVzcywgdGhlcmUgYXJlIG1hbnkgbGl0dGxlIGZpbmUtdHVuZSBuZWVkaW5nIGEgcXVpY2sgZGVjaXNpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4gV2hlbiBlbmdpbmVlcnMgd2VyZSBidWlsZGluZyBpdCwgSSBhbHJlYWR5IHNoaWZ0ZWQgbXkgZm9jdXMgdG8gb3RoZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0cy4gSXQgaGVscHMgdG8gcmVjYWxsIHRoZSBtZW1vcnkgZnJvbSBhIGNvdXBsZSBvZiBzY3JlZW5zaG90cyBhbmQgdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZWFyY2ggc3VtbWFyeS4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZG90QWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZG90fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzaWduSGlnaGxpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCZW5jaG1hcmtpbmcgaGVscHMgKGEgbG90KSBmb3IgaW50cm9kdWNpbmcgYSBuZXcgZmVhdHVyZSAtIEVzcGVjaWFsbHkgZm9yIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGxhdGVyIHByb2dyZXNzLCB0aGVyZSBhcmUgbWFueSBsaXR0bGUgZmluZS10dW5lIG5lZWRpbmcgYSBxdWljayBkZWNpc2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLiBXaGVuIGVuZ2luZWVycyB3ZXJlIGJ1aWxkaW5nIGl0LCBJIGFscmVhZHkgc2hpZnRlZCBteSBmb2N1cyB0byBvdGhlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzLiBJdCBoZWxwcyB0byByZWNhbGwgdGhlIG1lbW9yeSBmcm9tIGEgY291cGxlIG9mIHNjcmVlbnNob3RzIGFuZCB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNlYXJjaCBzdW1tYXJ5LiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGl0ZW0geHM9e2ZhbHNlfSBtZD17M30+PC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOic1JSd9fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IG1kPXs0fT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs4fSBtZD17NH0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zY3JvbGxEb3dufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsIGRvd24gdG8gbGVhcm4gbW9yZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IG1kPXs0fT48L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8UHJvY2VzczAxLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFByb2Nlc3MwMi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxQcm9jZXNzMDMvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6JzYlJ319PlxyXG4gICAgICAgICAgICAgICAgPEJvdHRvbU5hdmJhci8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1dvcmsubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBwcm9jZXNzMDEgZnJvbSAnLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczAxLnBuZyc7XHJcbmltcG9ydCBwcm9jZXNzMDIgZnJvbSAnLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczAyLnBuZyc7XHJcbmltcG9ydCBwcm9jZXNzMDMgZnJvbSAnLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczAzLnBuZyc7XHJcbmltcG9ydCBwcm9jZXNzMDQgZnJvbSAnLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczA0LnBuZyc7XHJcbmltcG9ydCBwcm9jZXNzMDUgZnJvbSAnLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczA1LnBuZyc7XHJcbmltcG9ydCBkb3QgZnJvbSAnLi4vLi4vcHVibGljL2RvdC5wbmcnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJy4uL1B1YmxpYy9DYXJvdXNlbC5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2VzczAxID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzTWFpbn0+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOic1JSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezh9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9IHN0eWxlPXt7bWFyZ2luVG9wOic4JSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzVGl0bGUxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVEhFIFBST0NFU1MgLyAwMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzVGl0bGUyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVzZWFyY2gsIFVuZGVyc3RhbmQgJiBEZWZpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kb3RMaW5lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgwrcmbmJzcDvCtyZuYnNwO8K3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOic1JSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNpZ25IaWdobGlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDT01QRVRJVElWRSBBTkFMWVNJU1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb21wZXRpdGl2ZUFuYWx5c2lzVGl0bGUyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmVhdHVyZSBjb21wYXJpc29uIHRvIHVuZGVyc3RhbmQgdGhlIGluZHVzdHJ5IHN0YW5kYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbXBldGl0aXZlQW5hbHlzaXNDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXQgdGhlIGJlZ2lubmluZyBvZiB0aGUga2ljay1vZmYsIHdlIGRpZG4ndCByZWNlaXZlIHdlbGwtZGVmaW5lZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZW1lbnRzLCBhbmQgdGhlIGJhY2stZW5kIGVuZ2luZWVycyB3ZXJlIGZpZ3VyaW5nIG91dCB0aGUgZGF0YSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSB0aGUgc3VwcGxpZXJzLiBEZXNpZ25lcnMgc3RhcnRlZCBmcm9tIGJlbmNobWFya2luZyB0byB1bmRlcnN0YW5kIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgZnVuZGFtZW50YWwgZnVuY3Rpb25zIG9mIHNlYXQgc2VsZWN0aW9uLiBCYXNlZCBvbiB0aGUgZmVhdHVyZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyaXNvbiwgSSBub3RlZCBkb3duIHRoZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250V2VpZ2h0OjcwMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7dmFyaW91cyBzY2VuYXJpb3MsIGZlYXR1cmVzLCBmbG93LCBjaGFuY2UgZm9yIG9wdGltaXphdGlvbiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgcG90ZW50aWFsIHJpc2tzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBhcyBhIHN0YXJ0aW5nIHBvaW50IHRvIGV4cGxvcmUgaG93IHdlIGNvdWxkIHNoYXBlIHRoZSBwcm9kdWN0IGFuZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5lIHRoZSBzY29wZSBvZiBNVlAuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ3NyYz17W3Byb2Nlc3MwMSxwcm9jZXNzMDJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXB0aW9uPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTm90ZWQgdGhlIGZlYXR1cmVzIGFjcm9zcyB0aGUgcHJvY2Vzcy4gUHVycGxlIHN0YW5kcyBmb3IgZnVuZGFtZW50YWwgZnVuY3Rpb24sIHllbGxvdyBzdGFuZHMgZm9yIHRoZSB1bmNvbW1vbiB0cmFpdCBjb21wYXJpbmcgdG8gb3RoZXIgcHJvZHVjdHMuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdGcm9tIHNpbXBsZSBzZWxlY3Rpb24gdG8gc3BlY2lmaWMgYXNzaWduaW5nIHNlYXRzLCB0aGVyZSBhcmUgbWFueSBhcHByb2FjaGVzIHRvIGFjaGlldmUgdGhlIG5lZWRzLidcclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOicyJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7bWFyZ2luVG9wOicxMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzaWduSGlnaGxpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSU4tREVQVEggSU5URVJWSUVXXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb21wZXRpdGl2ZUFuYWx5c2lzVGl0bGUyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sbGVjdCBpbnNpZ2h0cyBmcm9tIHVzZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb21wZXRpdGl2ZUFuYWx5c2lzQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpbmNlIGl0J3MgYW4gZW50aXJlbHkgbmV3IGZlYXR1cmUsIGFuZCB3ZSBzdGlsbCBoYXZlIGVub3VnaCBsZWFkIHRpbWUuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSBkZWNpZGVkIHRvIGRvIHRoZSB1c2VyIGludGVydmlldyB0byBjb2xsZWN0IG1vcmUgaW5zaWdodHMgZnJvbSB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzLiBUaGUgcmVzZWFyY2ggcGxhbiwgZGlzY3Vzc2lvbiBndWlkZXMsIGFuZCBhbGwgZml2ZSBzZXNzaW9ucyB3ZXJlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGwgY29uZHVjdGVkIGJ5IHRoZSBkZXNpZ25lcnMuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e21hcmdpblRvcDonOCUnfX0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5yZXNlYXJjaFRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUkVTRUFSQ0ggR09BTFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5kb3RBbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZG90fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29sbGVjdEluc2lnaHRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWZpbmUgdGhlIHNjb3BlIG9mIE1WUCBpbiB0aGUgZmlyc3QgcGhhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzUlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnJlc2VhcmNoVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBLRVkgUVVFU1RJT05TXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoYXQncyB0cmF2ZWxlcnMnIGludGVudGlvbiB0byBzZWxlY3QgYSBzZWF0P1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoYXQga2luZCBvZiBpbmZvcm1hdGlvbiBkbyB0cmF2ZWxlcnMgbmVlZCB0byBrbm93IHdoZW4gY2hvb3NpbmcgdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXRzPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5kb3RBbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZG90fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29sbGVjdEluc2lnaHRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGF0IGNhbiB0aGV5IGRvIHdpdGhvdXQgd2hlbiBsb29raW5nIGF0IGFsbCB0aGUgY29udGVudCB0aGF0IGlzIG9uIHRoZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoYXQga2luZCBvZiBjb25zaWRlcmF0aW9ucyBnb2VzIGludG8gc2VsZWN0aW5nIHRoZSBzZWF0cz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5kb3RBbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZG90fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29sbGVjdEluc2lnaHRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb3IgdGhvc2Ugd2hvIGRpZG4ndCBzZWxlY3Qgc2VhdHMgZHVyaW5nIGJvb2tpbmcsIHdvdWxkIHRoZXkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hvb3NlIGluIHBvc3QtYm9va2luZyBvciBvbmxpbmUgY2hlY2staW4/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZG90QWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RvdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbGxlY3RJbnNpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXQgd2hpY2ggcG9pbnQgZHVyaW5nIHRoZSBib29raW5nIHByb2Nlc3Mgd291bGQgdGhlIGN1c3RvbWVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZlciB0byBzZWxlY3QgdGhlIHNlYXRzP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluIHdoYXQgc2l0dWF0aW9uIHdvdWxkIHRoZSB0cmF2ZWxlcnMgcGF5IGZvciB0aGUgc2VhdHM/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7bWFyZ2luVG9wOic1JSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5yZXNlYXJjaFRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUEFSVElDSVBBTlRTIE9WRVJWSUVXXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvdXIgcGFydGljaXBhbnRzIHByZWZlcnJlZCBib29raW5nIHdpdGggYWlybGluZXMgZGVwZW5kcyBvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgZGVzdGluYXRpb24gYW5kIHRoZSBGcmVxdWVudC1mbHllciBwcm9ncmFtIHRoZXkgaGF2ZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5kb3RBbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZG90fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29sbGVjdEluc2lnaHRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaHJlZSBwYXJ0aWNpcGFudHMgbWVudGlvbmVkIHRoYXQgdGhleSB1c3VhbGx5IGJvb2sgdGhyb3VnaCB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6JzQlJ319PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzMDN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW5MZWZ0OicxJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5pbWdEZXNjcmlwdGlvbjJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSBpbnRlcnZpZXdlZCBieSB2aWRlbyBjYWxsIGR1ZSB0byB3b3JrLWZyb20taG9tZSBwb2xpY3kgd2hlbiB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENPVklELTE5IGhpdC4gSXQgaXMgdHJpY2t5IHRvIG9ic2VydmUgYmVoYXZpb3Igb3V0c2lkZSBvZiB0aGUgc2NyZWVuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW5jZSBwYXJ0aWNpcGFudHMgb25seSBzaGFyZWQgdGhlIHNjcmVlbiBvbiB0aGUgcGhvbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOic1JSd9fT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnJlc2VhcmNoVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGSU5ELU9VVFNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZG90QWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RvdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbGxlY3RJbnNpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWYgdGhlIHNlYXQgbWFwIGl0c2VsZiBpcyBjbGVhciBlbm91Z2ggb24gdGhlIGluZm9ybWF0aW9uIGFuZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVSSwgdGhlIHBhcnRpY2lwYW50cyB3b27igJl0IHBheSBhdHRlbnRpb24gdG8gdGhlIHNlYXQgbGVnZW5kLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb3dldmVyLCBpdOKAmXMgY3JpdGljYWwgdG8gZXhwbGFpbiBkaWZmZXJlbnQgb3B0aW9ucyBpZiB0aGV5IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbnQgdG8gY2hlY2sgbW9yZSBkZXRhaWxzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZXkgYWxsIGhhdmUgcHJlY2lzZSBwcmVmZXJlbmNlcyBvbiBzZWF0IHNlbGVjdGlvbjogKDEpIEZyb250IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChUaGUgdmVyeSBmcm9udCBvZiB0aGUgYXZhaWxhYmxlIG9wdGlvbnMpICgyKSBXaW5kb3cvQWlzbGUvIE5vIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pZGRsZSAoMykgTGVncm9vbSAoNCkgRGlzdGFuY2UgdG8gdGhlIHRvaWxldC9leGl0IChlc3BlY2lhbGx5IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciBraWRzIGFuZCBlbGRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5kb3RBbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZG90fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29sbGVjdEluc2lnaHRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgaW50ZW50aW9uIHRvIGNob29zZSBzZWF0cyBkdXJpbmcgYm9va2luZyBpcyB0aGUgc2FtZSBmb3IgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlcnlvbmU6ICgxKSBJZiBmcmVlICgyKSBJZiB0cmF2ZWwgd2l0aCBmYW1pbHkgKGtpZHMsIHBhcmVudHMpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yIGZyaWVuZHMgKHNpdCB0b2dldGhlcikgKDMpIExvbmctaGF1bCBmbGlnaHRzICgzLjUgaHJzKykgKDQpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyb3dkZWQgZmxpZ2h0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoZW4gbGFuZGluZyBvbiB0aGUgc2VsZWN0aW9uIHBhZ2UsIGl0IGFsd2F5cyB0YWtlcyBhIGxvbmcgdGltZSB0aGF0IHNlZW1zIHRvIGhhdmUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Jhc2hlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzUlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnJlc2VhcmNoVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBORVhUIFNURVBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZG90QWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RvdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbGxlY3RJbnNpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFrZSBzdXJlIHRoZSBVSSBvZiB0aGUgc2VhdCBtYXAgaXMgY2xlYXIgZW5vdWdoIHRvIHJlY29nbml6ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoZW4gb2ZmZXJpbmcgdmFyaW91cyBvcHRpb25zIG9mIHNlYXRzLCBkbyBjbGFyaWZ5IHRoZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWZmZXJlbmNlIG9yIGJlbmVmaXRzIG9mIHRoZSBzZWF0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1ha2Ugc3VyZSB3ZSBkaXNwbGF5IHRoZSBmaXJzdCBhdmFpbGFibGUgc2VhdCB2aXNpYmxlIHdpdGhvdXQgc2Nyb2xsIHdoZW4gbGFuZGluZyBvbiB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpc3BsYXkgY2xlYXJseSB3aGljaCBzZWF0cyBiZWxvbmcgdG8gd2hpY2ggcGFzc2VuZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZG90QWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RvdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbGxlY3RJbnNpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uc2lkZXIgdGhlIHNwZWNpYWwgcmVxdWVzdCBmb3Igc29tZSBzcGVjaWZpYyB0eXBlcyBvZiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmF2ZWxlciwgc3VjaCBhcyBraWRzLCBlbGRlcmx5LCBidXNpbmVzcyBhbmQgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5kb3RBbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZG90fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29sbGVjdEluc2lnaHRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZW1pbmRlciBmb3Igc2VsZWN0aW5nIHNlYXRzIHdoZW4gaXQncyBmcmVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZG90QWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RvdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbGxlY3RJbnNpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtaW5kZXIgZm9yIGdyb3VwIHRyYXZlbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZG90QWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RvdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbGxlY3RJbnNpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxsb3cgdXNlcnMgdG8gY2hvb3NlIHNlYXRzIGFmdGVyIGJvb2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1ha2Ugc3VyZSB3ZSBkaXNwbGF5IGNsZWFyIGZlZWRiYWNrIGZvciBsb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZG90QWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RvdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbGxlY3RJbnNpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFrZSBzdXJlIHdlIGRpc3BsYXkgY2xlYXIgZmVlZGJhY2sgZm9yIGxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6JzMlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IG1kPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjond2hpdGUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzMDR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDonMTAwJSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOicxJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmltZ0Rlc2NyaXB0aW9uMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ5IGZlYXR1cmVzIEF1ZGl0LCB3ZSBvcmdhbml6ZWQgdGhlIHBvdGVudGlhbCBmZWF0dXJlcyBpbiB0ZXJtcyBvZiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJlcXVlbmN5IGFkb3B0aW9uIChhbW91bnQgb2YgcGVvcGxlIHVzaW5nIHRoZW0pLiBQb3N0LWl0cyBpbiB0aGUgZGFyayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmx1ZSBhcmVhIHdlcmUgdGhlIGFjdGlvbnMgYmVlbiB1c2VkIGJ5IHRoZSBwYXJ0aWNpcGFudHMgdGhlIG1vc3QuIFdlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHNvIGNhdGVnb3JpemVkIGFsbCB0aGUgYWN0aW9ucyBpbnRvIGltcGxlbWVudGF0aW9uIHN0YWdlcyBhcyBhIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVsaW1pbmFyeSBhbmFseXNpcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e21hcmdpblRvcDonMTAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2lnbkhpZ2hsaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJFU0VBUkNIIFNZTlRIRVNJWkVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbXBldGl0aXZlQW5hbHlzaXNUaXRsZTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWZpbmUgdGhlIGJhcmUgbWluaW11bSBvZiBwcm9kdWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb21wZXRpdGl2ZUFuYWx5c2lzQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnNpZGVyaW5nIHRoZSBkZXBlbmRlbmN5IG9uIHRoZSBzdXBwbGllciBhbmQgdGhlIGRldmVsb3BtZW50IGVmZm9ydCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlJ3JlIGxvb2tpbmcgZm9yIHRoZSBNVlAgdmVyc2lvbiBvZiB0aGUgc29sdXRpb24gdG8gcmVkdWNlIHRoZSByaXNrIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgaW1wbGVtZW50YXRpb24uIEhlbmNlLCBhZnRlciB0aGUgcmVzZWFyY2ggcGhhc2UsIHdlIGJyb2tlIGRvd24gYWxsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgZmVhdHVyZXMgYW5kIHJlcXVpcmVtZW50cyBpbnRvIHBoYXNlZCB0YXNrcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6JzMlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IG1kPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjond2hpdGUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzMDV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDonMTAwJSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOicxJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmltZ0Rlc2NyaXB0aW9uMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIGxpc3RlZCBvdXQgdGhlIHBvdGVudGlhbCBkZXNpZ24gY3JpdGVyaWEgYW5kIGRpc2N1c3NlZCB3aXRoIHRoZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdCBtYW5hZ2VyIHRoZSBzY29wZSBvZiB0aGUgcHJvamVjdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezN9PjwvR3JpZD4gXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+ICBcclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1dvcmsubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBwcm9jZXNzMDYgZnJvbSAnLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczA2LnBuZyc7XHJcbmltcG9ydCBwcm9jZXNzMDcgZnJvbSAnLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczA3LnBuZyc7XHJcbmltcG9ydCBwcm9jZXNzMDggZnJvbSAnLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczA4LnBuZyc7XHJcbmltcG9ydCBwcm9jZXNzMDkgZnJvbSAnLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczA5LnBuZyc7XHJcbmltcG9ydCBwcm9jZXNzMTAgZnJvbSAnLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczEwLnBuZyc7XHJcbmltcG9ydCBwcm9jZXNzMTEgZnJvbSAnLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczExLnBuZyc7XHJcbmltcG9ydCBwcm9jZXNzMTIgZnJvbSAnLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczEyLnBuZyc7XHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAnLi4vUHVibGljL0Nhcm91c2VsJzs7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2VzczAyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NNYWlufSBzdHlsZT17e3BhZGRpbmdUb3A6JzMlJ319PlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezh9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9IHN0eWxlPXt7bWFyZ2luVG9wOic4JSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzVGl0bGUxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVEhFIFBST0NFU1MgLyAwMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzVGl0bGUyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVzaWduICYgSXRlcmF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRvdExpbmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDCtyZuYnNwO8K3Jm5ic3A7wrdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6JzElJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzEwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNpZ25IaWdobGlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQUkVMSU1JTkFSWSBFWFBMT1JBVElPTlNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbXBldGl0aXZlQW5hbHlzaXNUaXRsZTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFYXJseSBjb25jZXB0cyB0byBnYXRoZXIgZmVlZGJhY2sgYW5kIGRpcmVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29tcGV0aXRpdmVBbmFseXNpc0NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgaW50ZXJmYWNlIG1pZ2h0IGJlIHRoZSBtb3N0IGNoYWxsZW5naW5nIHBhcnQgb2YgdGhpcyBwcm9qZWN0LiBGb3IgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZSwgaXQgaXMgZXZlbiBoYXJkZXIgdG8gZGlzcGxheSBzbyBtdWNoIGluZm9ybWF0aW9uIG9uIHRoZSBsaXR0bGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbnkgc2NyZWVuLiBJbiB0aGUgYmVnaW5uaW5nLCBJIGZvY3VzZWQgb24gdGhlIGluZm8gc3RydWN0dXJlIGFuZCB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJhbGwgZmxvdy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6JzMlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjond2hpdGUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzMDZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDonMTAwJSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6JzMlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzEwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNpZ25IaWdobGlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBERVNJR04gSVRFUkFUSU9OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb21wZXRpdGl2ZUFuYWx5c2lzVGl0bGUyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVlcCBkaXZlIGludG8gdGhlIGRldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbXBldGl0aXZlQW5hbHlzaXNDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWZ0ZXIgY29uZmlybWluZyB0aGUgZmxvdywgSSBwdXQgbW9yZSBlZmZvcnQgaW50byB0aGUgZXhwbG9yYXRpb24gb2YgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBzZWxlY3Rpb24gcHJvY2Vzcy4gVGhlcmUgYXJlIGZsaWdodCBzZWdtZW50cywgcGFzc2VuZ2VyIHNlbGVjdGlvbiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXQgbGVnZW5kLCBzZWF0IG1hcCwgYW5kIHRoZSBwcmljZSB1cGRhdGUuIFdlIHdlcmUgbG9va2luZyBmb3IgYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcHJvYWNoIHRvIG1ha2UgdGhlIGRpc3BsYXlpbmcgbW9yZSBlZmZpY2llbnQsIGFuZCBleHBsYWluIGNsZWFyIG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGF0J3MgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHByb2Nlc3MuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDonNSUnLCBtYXJnaW5MZWZ0OicyJScsIG1hcmdpblJpZ2h0OicyJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0gbGc9ezN9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbGxlcnkxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvY2VzczA3fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmltZ0Rlc2NyaXB0aW9uM30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZGVuc2VkIGxlZ2VuZCBtYWtlcyB0aGUgd2lkZXN0IGRpc3BsYXlpbmcgb24gdGhlIG1hcC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fSBsZz17M30gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2FsbGVyeTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzMDh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaW1nRGVzY3JpcHRpb24zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUYWIgVUkgb24gdGhlIHBhc3NlbmdlciBzZWxlY3Rpb24gbWlnaHQgY2F1c2UgdGhlIHByb2JsZW0gZm9yIGdyb3VwIHRyYXZlbGVycy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9IGxnPXszfSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYWxsZXJ5MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MwOX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5pbWdEZXNjcmlwdGlvbjN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBkaWZmZXJlbnQgc3RhdGUgb2YgcGFzc2VuZ2VyIHNlbGVjdGlvbiBidXR0b24gaXMgaGFyZCB0byByZWNvZ25pemUgYXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGZpcnN0IGdsYW5jZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9IGxnPXszfSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYWxsZXJ5MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MxMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5pbWdEZXNjcmlwdGlvbjN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3dpbmcgaW5pdGlhbCBmb3IgdGhlIHNlbGVjdGVkIHNlYXRpbmcgbWlnaHQgbm90IGJlIGZhbWlsaWFyIHRvIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbi1FbmdsaXNoIHNwZWFrZXIgY291bnRyaWVzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOiczJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7bWFyZ2luVG9wOicxMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzaWduSGlnaGxpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRklOQUwgREVTSUdOXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb21wZXRpdGl2ZUFuYWx5c2lzVGl0bGUyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRnJlZSBzZWF0cyBmb3IgbGF1bmNoIGFuZCB0aGUgbmV4dCBwaGFzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29tcGV0aXRpdmVBbmFseXNpc0NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYXNlZCBvbiB0aGUgdGltZWxpbmUgYW5kIHRoZSBkZXZlbG9wbWVudCBlZmZvcnQsIHdlIGRpZCBjb21wcm9taXNlIHRvIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW1wbGlmeSB0aGUgcHJvY2VzcyBhcyBtdWNoIGFzIHBvc3NpYmxlLiBUaGUgbW9zdCBjaGFsbGVuZ2luZyBwYXJ0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXN0IGJlIHRoZSB3b3JzdCBjYXNlIGZvciBtdWx0aXBsZSBzZWdtZW50cyBhbmQgbXVsdGlwbGUgc3RvcHMgZmxpZ2h0LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGRlc2lnbiBhbHNvIHNob3VsZCBiZSBzY2FsYWJsZSB0byB0aGUgcGFpZCBvcHRpb25zLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdzcmM9e1twcm9jZXNzMTEscHJvY2VzczEyXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FwdGlvbj17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1dlIGltcGxlbWVudGVkIHRoZSBmcmVlIHNlbGVjdGlvbiB3aGVuIGxhdW5jaGVkLiBDb25zaWRlcmluZyB0aGUgcGFpZCBvcHRpb24gaXMgY29taW5nIGxhdGVyLCBpdCB3YXMgY3JpdGljYWwgdG8gZGVzaWduIHRoZSBwcm9jZXNzIHdpdGggaXQgaW4gbWluZC4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbXBhcmVkIHRvIHRoZSBpbml0aWFsIGZsb3csIGl0IGNhbWUgb3V0IHRvIGEgc29waGlzdGljYXRlZCBmbG93IHdpdGggdmFyaWF0aW9ucyBmb3IgZGlmZmVyZW50IGNhc2VzIGFmdGVyIGludm9sdmVkIGluIHRoZSBlbmdpbmVlcnMuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1dvcmsubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBwcm9jZXNzMTMgZnJvbSAnLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczEzLnBuZyc7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2VzczAzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NNYWlufSBzdHlsZT17e3BhZGRpbmdUb3A6JzMlJywgcGFkZGluZ0JvdHRvbTonOCUnfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17OH0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0gc3R5bGU9e3ttYXJnaW5Ub3A6JzglJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NUaXRsZTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUSEUgUFJPQ0VTUyAvIDAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NUaXRsZTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFdmFsdWF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRvdExpbmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDCtyZuYnNwO8K3Jm5ic3A7wrdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6JzMlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzEwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNpZ25IaWdobGlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBURUNITklDQUwgUkVWSUVXXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb21wZXRpdGl2ZUFuYWx5c2lzVGl0bGUyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVmaW5lIHRoZSBkZXRhaWxzIHRvIGNsb3NlIHRoZSBnYXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbXBldGl0aXZlQW5hbHlzaXNDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hlbiB3ZSBpbXBsZW1lbnRlZCB0aGUgcHJvamVjdCwgdGhlcmUgd2VyZSBtb3JlIGlzc3VlcyB0byByZWNvZ25pemUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gdGhlIHN1cHBsaWVyLiBJdCBpcyBoYXJkIHRvIHVuZGVyc3RhbmQgYWxsIHRoZSB0ZWNobmljYWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnRzIGFuZCBkZWZpbmUgdGhlIHNvbHV0aW9uIGFjY29yZGluZ2x5LiBUaGVyZWZvcmUsIHdlIHdvcmtlZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VseSB3aXRoIHRoZSBRQSBlbmdpbmVlcnMgYXQgdGhlIGxhc3QgbWlsZSB0byBwcmVwYXJlIGFsbCB0aGUgd29yc2UgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5hcmlvcy4gSSBhcHByZWNpYXRlZCB0aGVpciBlZmZvcnQgdG8gYmUgdGhlIGJyaWRnZSBiZXR3ZWVuIHRoZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzaWduZXIsIGRldmVsb3BlciwgYnVzaW5lc3MgaW5zaWdodCwgYW5kIHByb3ZpZGUgc3VnZ2VzdGlvbnMgYXQgYmFsYW5jZS4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e21hcmdpblRvcDonMyUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gbWQ9ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOid3aGl0ZSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MxM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOicxMDAlJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6JzElJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmltZ0Rlc2NyaXB0aW9uMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEEgY29tcGxldGVkIGV4Y2VsIHRvIGxpc3QgZG93biBhbGwgdGhlIENNUyBhY3Jvc3MgdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF0Zm9ybXMgd2FpdGluZyBmb3IgdHJhbnNsYXRpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOiczJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7bWFyZ2luVG9wOicxMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzaWduSGlnaGxpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT1VUQ09NRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29tcGV0aXRpdmVBbmFseXNpc1RpdGxlMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vcmUgdG8gYmUgdXBkYXRlZC4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29tcGV0aXRpdmVBbmFseXNpc0NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgcHJvamVjdCBpcyBzdGlsbCBpbXBsZW1lbnRpbmcsIHBlcmZvcm1hbmNlIHJlc3VsdCB3aWxsIGJlIHVwZGF0ZWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyd2FyZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1dvcmsubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IElucHV0QWRvcm5tZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50JztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBBcnJvd0ZvcndhcmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0ZvcndhcmQnO1xyXG5pbXBvcnQgeyBBZ29kYUZsaWdodHMgfSBmcm9tICcuL0Fnb2RhRmxpZ2h0cy5qcyc7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC9QdWJsaWMvSGVhZGVyLmpzJztcclxuXHJcbmNsYXNzIFNlY3VyZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgICAgIGlzUGFzczogZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlQnlOYW1lID0gdGhpcy5zZXRTdGF0ZUJ5TmFtZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVjdXJzaXZlUmVwbGFjZVZhbHVlQnlOYW1lID0gdGhpcy5yZWN1cnNpdmVSZXBsYWNlVmFsdWVCeU5hbWUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlKGUsY2FsbEJhY2ssbnVsbFZhbHVlPW51bGwpIHtcclxuICAgICAgICBjb25zdCB7dmFsdWUsIG5hbWV9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsQmFjayAhPT1cImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgICAgICBjYWxsQmFjayA9IGZ1bmN0aW9uKCkge31cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZUJ5TmFtZShuYW1lLCB2YWx1ZSE9PVwiXCI/dmFsdWU6bnVsbCwgY2FsbEJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXRlQnlOYW1lKG5hbWUsIHZhbHVlLCBjYWxsQmFjaykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24ocHJldlN0YXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlY3Vyc2l2ZVJlcGxhY2VWYWx1ZUJ5TmFtZShuYW1lLCBwcmV2U3RhdGUsIHZhbHVlKTtcclxuICAgICAgICB9LGNhbGxCYWNrKVxyXG4gICAgfVxyXG5cclxuICAgIHJlY3Vyc2l2ZVJlcGxhY2VWYWx1ZUJ5TmFtZShuYW1lLG9iamVjdCx2YWx1ZSlcclxuICAgIHtcclxuICAgICAgICB2YXIga2V5c0FyciA9IG5hbWUucmVwbGFjZSgvXFxbL2csXCIuXCIpLnJlcGxhY2UoL1xcXS9nLFwiXCIpLnNwbGl0KFwiLlwiKTtcclxuXHJcbiAgICAgICAgdmFyIHRhcmdldCA9IG9iamVjdDtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzQXJyLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IGtleSA9IGtleXNBcnJbaV07XHJcbiAgICAgICAgICAgIGlmICghdGFyZ2V0Lmhhc093blByb3BlcnR5KGtleSkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGkgPT0ga2V5c0Fyci5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXRba2V5XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0KCkge1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUucGFzc3dvcmQgPT0gJzIwMTgwODAxJyl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBpc1Bhc3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwiXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvck1lc3NhZ2U6ICdFbnRlciBDb3JyZWN0IFBhc3N3b3JkJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgaGFuZGxlRHJhd2VyT3BlblxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzUGFzcyA9PSBmYWxzZT9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEcmF3ZXJPcGVuPXtoYW5kbGVEcmF3ZXJPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VjdXJlIGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSBhc2sgdGhlIHBhc3N3b3JkIGZvciBwZXJtaXNzaW9uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5wYXNzd29yZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IHNtPXs2fSBtZD17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihlLmtleUNvZGUgPT09IDEzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd0ZvcndhcmRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tzaHJpbms6IGZhbHNlfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PjogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzUGFzcyA9PSB0cnVlP1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURyYXdlck9wZW49e2hhbmRsZURyYXdlck9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWdvZGFGbGlnaHRzLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA6XCJcIn1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN1cmU7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2Fyb3VzZWxPdXRlclwiOiBcIlB1YmxpY19jYXJvdXNlbE91dGVyX18ybVpfZFwiLFxuXHRcImltZ0Rlc2NyaXB0aW9uXCI6IFwiUHVibGljX2ltZ0Rlc2NyaXB0aW9uX19PeFliUVwiLFxuXHRcImNhcm91c2VsSW1nXCI6IFwiUHVibGljX2Nhcm91c2VsSW1nX18xd0wzVFwiLFxuXHRcImNhcHRpb25Db250YWluZXJcIjogXCJQdWJsaWNfY2FwdGlvbkNvbnRhaW5lcl9fYWkxNnFcIixcblx0XCJkcmF3ZXJUaXRsZVwiOiBcIlB1YmxpY19kcmF3ZXJUaXRsZV9fLUxFUzhcIixcblx0XCJsaW5rXCI6IFwiUHVibGljX2xpbmtfXzI4MWRHXCIsXG5cdFwiZHJhd2VyQnV0dG9uXCI6IFwiUHVibGljX2RyYXdlckJ1dHRvbl9fX1VGci1cIixcblx0XCJtYWluMVwiOiBcIlB1YmxpY19tYWluMV9fNXdDODZcIixcblx0XCJ0aXRsZVwiOiBcIlB1YmxpY190aXRsZV9fX3gxVmNcIixcblx0XCJtZW51QmFyXCI6IFwiUHVibGljX21lbnVCYXJfXzMzS1h6XCIsXG5cdFwiZm9vdGVyQmxvY2tcIjogXCJQdWJsaWNfZm9vdGVyQmxvY2tfX3pxQTVaXCIsXG5cdFwiZm9vdGVyQmxvY2syXCI6IFwiUHVibGljX2Zvb3RlckJsb2NrMl9fMkdUMXlcIixcblx0XCJmb290ZXJUaXRsZVwiOiBcIlB1YmxpY19mb290ZXJUaXRsZV9fRk9mTG1cIixcblx0XCJjb3B5cmlnaHRcIjogXCJQdWJsaWNfY29weXJpZ2h0X18zSVJmMlwiLFxuXHRcImZvb3RlckxlZnRUaXRsZVwiOiBcIlB1YmxpY19mb290ZXJMZWZ0VGl0bGVfXzFyMUEyXCIsXG5cdFwiZm9vdGVyTGVmdENvbnRlbnRcIjogXCJQdWJsaWNfZm9vdGVyTGVmdENvbnRlbnRfXzNqVVJXXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluXCI6IFwiV29ya19tYWluX19NOW1iN1wiLFxuXHRcInRpdGxlXCI6IFwiV29ya190aXRsZV9fMzNxTDhcIixcblx0XCJzaG93Y2FzZUJveFwiOiBcIldvcmtfc2hvd2Nhc2VCb3hfXzI0enZNXCIsXG5cdFwiaW1nXCI6IFwiV29ya19pbWdfXzFvNXVRXCIsXG5cdFwidGl0bGVPbkhvdmVyXCI6IFwiV29ya190aXRsZU9uSG92ZXJfXzIySzgwXCIsXG5cdFwidGl0bGUyT25Ib3ZlclwiOiBcIldvcmtfdGl0bGUyT25Ib3Zlcl9fM21XUUtcIixcblx0XCJ0aXRsZTJcIjogXCJXb3JrX3RpdGxlMl9fWE1nLWdcIixcblx0XCJ0aXRsZTNcIjogXCJXb3JrX3RpdGxlM19fMU1SZW5cIixcblx0XCJ0aXRsZTRcIjogXCJXb3JrX3RpdGxlNF9fVHViMWpcIixcblx0XCJhcnRpY2xlXCI6IFwiV29ya19hcnRpY2xlX18xSk5USFwiLFxuXHRcImNvbnRlbnRcIjogXCJXb3JrX2NvbnRlbnRfXzMwTGppXCIsXG5cdFwiY29udGVudFRpdGxlXCI6IFwiV29ya19jb250ZW50VGl0bGVfXzFYZWFzXCIsXG5cdFwiY29udGVudERldGFpbFwiOiBcIldvcmtfY29udGVudERldGFpbF9fMjRPUFZcIixcblx0XCJkb3RMaW5lXCI6IFwiV29ya19kb3RMaW5lX18ybU5uOFwiLFxuXHRcImRlc2lnbkhpZ2hsaWdodFwiOiBcIldvcmtfZGVzaWduSGlnaGxpZ2h0X18xWkwybVwiLFxuXHRcImRlc2lnbkhpZ2hsaWdodFRpdGxlXCI6IFwiV29ya19kZXNpZ25IaWdobGlnaHRUaXRsZV9fMjBhVF9cIixcblx0XCJkZXNpZ25IaWdobGlnaHRDb250ZW50XCI6IFwiV29ya19kZXNpZ25IaWdobGlnaHRDb250ZW50X19haDRMUlwiLFxuXHRcImdhbGxlcnkxXCI6IFwiV29ya19nYWxsZXJ5MV9fM0lsLTNcIixcblx0XCJpbWdEZXNjcmlwdGlvblwiOiBcIldvcmtfaW1nRGVzY3JpcHRpb25fXzE4Y1ZxXCIsXG5cdFwicmVmbGVjdGlvblwiOiBcIldvcmtfcmVmbGVjdGlvbl9fUzllWXBcIixcblx0XCJkb3RBbGlnblwiOiBcIldvcmtfZG90QWxpZ25fXzFQUm1GXCIsXG5cdFwic2Nyb2xsRG93blwiOiBcIldvcmtfc2Nyb2xsRG93bl9fM2xyREpcIixcblx0XCJwcm9ncmVzc01haW5cIjogXCJXb3JrX3Byb2dyZXNzTWFpbl9fMmZyUWlcIixcblx0XCJwcm9ncmVzc1RpdGxlMVwiOiBcIldvcmtfcHJvZ3Jlc3NUaXRsZTFfXzMxbVVIXCIsXG5cdFwicHJvZ3Jlc3NUaXRsZTJcIjogXCJXb3JrX3Byb2dyZXNzVGl0bGUyX18zVjlOc1wiLFxuXHRcImNvbXBldGl0aXZlQW5hbHlzaXNUaXRsZTFcIjogXCJXb3JrX2NvbXBldGl0aXZlQW5hbHlzaXNUaXRsZTFfXzI5c1NkXCIsXG5cdFwiY29tcGV0aXRpdmVBbmFseXNpc1RpdGxlMlwiOiBcIldvcmtfY29tcGV0aXRpdmVBbmFseXNpc1RpdGxlMl9fYW5BYWVcIixcblx0XCJjb21wZXRpdGl2ZUFuYWx5c2lzQ29udGVudFwiOiBcIldvcmtfY29tcGV0aXRpdmVBbmFseXNpc0NvbnRlbnRfXzJVVktXXCIsXG5cdFwiaW1nRGVzY3JpcHRpb24yXCI6IFwiV29ya19pbWdEZXNjcmlwdGlvbjJfXzM4T3RoXCIsXG5cdFwicmVzZWFyY2hUaXRsZVwiOiBcIldvcmtfcmVzZWFyY2hUaXRsZV9fM3hGMG5cIixcblx0XCJjb2xsZWN0SW5zaWdodENvbnRlbnRcIjogXCJXb3JrX2NvbGxlY3RJbnNpZ2h0Q29udGVudF9fMW83WWpcIixcblx0XCJwcm9jZXNzMkltZ1wiOiBcIldvcmtfcHJvY2VzczJJbWdfXzMzcjhQXCIsXG5cdFwiaW1nRGVzY3JpcHRpb24zXCI6IFwiV29ya19pbWdEZXNjcmlwdGlvbjNfX28xcHlkXCIsXG5cdFwiaW1nQmxvY2tcIjogXCJXb3JrX2ltZ0Jsb2NrX18xMXhSWlwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiV29ya19kZXNjcmlwdGlvbl9fcm9zRlZcIixcblx0XCJwYXNzd29yZFwiOiBcIldvcmtfcGFzc3dvcmRfXzN5cFVvXCIsXG5cdFwiaGVhZGVyXCI6IFwiV29ya19oZWFkZXJfXzNoMTVfXCIsXG5cdFwiaW1nMDFcIjogXCJXb3JrX2ltZzAxX19vVGpQRlwiLFxuXHRcImZsaWdodHMwMVwiOiBcIldvcmtfZmxpZ2h0czAxX18zaVhheFwiLFxuXHRcImZvb3RlclwiOiBcIldvcmtfZm9vdGVyX18xd090TlwiLFxuXHRcImRlc2lnbkNvbnRlbnRcIjogXCJXb3JrX2Rlc2lnbkNvbnRlbnRfXzJ6ekdXXCIsXG5cdFwiZGVzaWduVGl0bGVcIjogXCJXb3JrX2Rlc2lnblRpdGxlX18zTi1mRlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1B1YmxpYy9Gb290ZXIuanMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL2Nzcy9Xb3JrLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgU2VjdXJlIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9Xb3JrL1NlY3VyZS5qcyc7XHJcbmltcG9ydCB7IERyYXdlciB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9QdWJsaWMvRHJhd2VyLmpzJztcclxuaW1wb3J0IHsgU2Nyb2xsdXAgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvUHVibGljL1Njcm9sbHVwLmpzJzsgXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5cclxuY29uc3QgUGFnZSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbZHJhd2VyLCBzZXREcmF3ZXJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURyYXdlck9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RHJhd2VyKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZURyYXdlckNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldERyYXdlcihmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICB7ZHJhd2VyID09IGZhbHNlID9cclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VjdXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEcmF3ZXJPcGVuPXtoYW5kbGVEcmF3ZXJPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3t0b3A6JzkwJScscG9zaXRpb246J2ZpeGVkJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs4fSBzbT17OX0gbWQ9ezl9IGxnPXsxMH0geGw9ezEwfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHNtPXsyfSBtZD17Mn0gbGc9ezF9IHhsPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTY3JvbGx1cC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA6Jyd9XHJcblxyXG4gICAgICAgICAgICB7ZHJhd2VyID09IHRydWUgP1xyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6JyMxZjFmMWYnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURyYXdlckNsb3NlPXtoYW5kbGVEcmF3ZXJDbG9zZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA6Jyd9XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcblxyXG5cclxuICIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9mbGlnaHRzMDItMGY2Mzc1NmIzZjJiZjVkNTY1ZDU3MTg3Njk3MTQ2NWQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ZsaWdodHMwMy05NmI0MjM4ZmE5ZTUyMzVjNmU2MGM1NGFlY2RiZTE0Yi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZmxpZ2h0czA0LTI1MWEzMTVhMzI4ZDA5ZWFkODIwZGJmYjdmNGU0ODlkLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBQndTVVJCVkhnQmZZOVJEWUF3REVUWDhzUGY1bUJJQUVrNEFFVllBQWM0QUFsSXFJTnlKVnRDU01wTGJsbDZ0K1ZLQVhSQVZSZGNleWhCS3hITkY2QmlIc1Y0SXdnTlRZeXh2dnpTMnB4eXpocDhoTzM0Q1NRTG5KNkxiaHVqeU9qOElzdzg4Yk1LMnRwcTFZQjJtNWwzQTNobUpBK1YxbXAwQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ZsaWdodHMwMS1lOWZkMzc2Njg3N2YxN2Q4OWFhODU4Yjg2YTQ4ZGZiNy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZmxpZ2h0LTFiNzAyNGQ3MTdmZmE4NTI4MTllZGE1NTk0MjBiOGFjLmdpZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9wcm9jZXNzMDEtZDU3YzBlNDY3ZDk2YWFjOTBjYjM4MTEwM2VlNzkxMzMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Byb2Nlc3MwMi1lYmZhMTYxODg0NzVmODc4ZGZiODAyMzRlYjJhNDQzMi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcHJvY2VzczAzLWZjYjhiYmYzNWUyOGU4YjFmNWY4MTI2YWU1YTI1NDRjLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9wcm9jZXNzMDQtNjRjZjRlNTBlNWVmMDkxOTQ2OTQ3ZDMxMWFhOTNhYWUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Byb2Nlc3MwNS05OGE5Y2I5MzA0Yzg1MWVkMjk5NTgxM2ZhOTM4YTA5My5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcHJvY2VzczA2LWMzMTdmYzdlMWIzZjc0MmY5MzA5YjRiNzljYTYwMjAwLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9wcm9jZXNzMDctOTRhZjI2M2YxZjQ1ZTQxYTAyN2MwNWZiZTYwNWVhOTQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Byb2Nlc3MwOC00N2ZjMmM1ZWMxZmVhYTI5YTk0YjAyNDMyYmRhYWQwYS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcHJvY2VzczA5LWEzYzU5MzBiYTg0NDQ0NzI5NzBmYjE3MmFiZTM5NDU3LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9wcm9jZXNzMTAtYWEyYmY3NjMwZmY5N2I3OWY5YmE0ZmU0ZTdkYmUwMDYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Byb2Nlc3MxMS0zYjc2NjdjNDZmN2YzOGY4YjYyNzhkZDc0ZjFmNjVhZS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcHJvY2VzczEyLTFjZDNhNzM1NWNjZjk2N2U5Njc3ODM1YTg0ODg0MjI1LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9wcm9jZXNzMTMtN2FkMzdjNjczYjQwOTkyZDdmMWVlNjdkMjgyOGRhNjcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93Rm9yd2FyZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==