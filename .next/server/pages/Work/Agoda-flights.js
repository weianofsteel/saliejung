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
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/",
    underline: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.drawerTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, "saliejung"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    sm: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
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
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: handleDrawerClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      color: '#B8B8B8'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
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
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/Work",
    underline: "none",
    className: classes.drawerLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  }, "WORK")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    className: classes.drawerHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/Writings",
    underline: "none",
    className: classes.drawerLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  }, "WRITINGS")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    className: classes.drawerHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/About",
    underline: "none",
    className: classes.drawerLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }, "ABOUT")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    className: classes.drawerHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
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
      lineNumber: 102,
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
    paddingTop: '2rem',
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
      backgroundColor: 'transparent',
      paddingTop: '1.2rem'
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

/***/ "./component/Public/LearnMore.js":
/*!***************************************!*\
  !*** ./component/Public/LearnMore.js ***!
  \***************************************/
/*! exports provided: LearnMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnMore", function() { return LearnMore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ArrowDownward */ "@material-ui/icons/ArrowDownward");
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_Public_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../css/Public.module.css */ "./css/Public.module.css");
/* harmony import */ var _css_Public_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_Public_module_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Public\\LearnMore.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  button: {
    fontFamily: 'Roboto',
    fontSize: '1.1rem',
    fontWeight: 400,
    lineHeight: '1.1rem',
    letterSpacing: '0.05rem',
    color: '#8F8F8F',
    backgroundColor: 'transparent',
    textAlign: 'center',
    "&:hover": {
      color: '#1F1F1F'
    }
  }
});
const LearnMore = props => {
  const classes = useStyles();
  const [coordinate, setCoordinate] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (window !== undefined) {
      window.addEventListener("scroll", onScroll);

      function onScroll() {
        setCoordinate(window.scrollY);
      }
    }
  }, []);

  const handleAnchor = () => {
    if (window !== undefined) {
      window.scrollTo({
        top: coordinate + 600,
        behavior: 'smooth'
      });
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.button,
    onClick: handleAnchor,
    disableRipple: true,
    style: {
      backgroundColor: 'transparent'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    className: _css_Public_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.ball,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, "Learn More")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 12,
    style: {
      marginTop: '0.5rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, __jsx(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  })))));
};

/***/ }),

/***/ "./component/Public/PageLoader.js":
/*!****************************************!*\
  !*** ./component/Public/PageLoader.js ***!
  \****************************************/
/*! exports provided: PageLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLoader", function() { return PageLoader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-top-loading-bar */ "react-top-loading-bar");
/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Public\\PageLoader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const PageLoader = () => {
  const [progress, setProgress] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setProgress(100);
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    color: "#1F1F1F",
    height: 3,
    waitingTime: 500,
    progress: progress,
    onLoaderFinished: () => setProgress(0),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }));
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
  }, []);

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
  }, scrollC > 400 && __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
  })))));
};

/***/ }),

/***/ "./component/Work/Agoda-flights/AgodaFlights.js":
/*!******************************************************!*\
  !*** ./component/Work/Agoda-flights/AgodaFlights.js ***!
  \******************************************************/
/*! exports provided: AgodaFlights */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgodaFlights", function() { return AgodaFlights; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../css/Work.module.css */ "./css/Work.module.css");
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_Work_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_agoda_flights_flights02_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/agoda-flights/flights02.png */ "./public/agoda-flights/flights02.png");
/* harmony import */ var _public_agoda_flights_flights02_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_agoda_flights_flights02_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_agoda_flights_flights03_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/agoda-flights/flights03.png */ "./public/agoda-flights/flights03.png");
/* harmony import */ var _public_agoda_flights_flights03_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_agoda_flights_flights03_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_agoda_flights_flights04_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/agoda-flights/flights04.png */ "./public/agoda-flights/flights04.png");
/* harmony import */ var _public_agoda_flights_flights04_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_agoda_flights_flights04_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_dot_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/dot.png */ "./public/dot.png");
/* harmony import */ var _public_dot_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_dot_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Process01_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Process01.js */ "./component/Work/Agoda-flights/Process01.js");
/* harmony import */ var _Process02_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Process02.js */ "./component/Work/Agoda-flights/Process02.js");
/* harmony import */ var _Process03_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Process03.js */ "./component/Work/Agoda-flights/Process03.js");
/* harmony import */ var _Public_BottomNavbar_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Public/BottomNavbar.js */ "./component/Public/BottomNavbar.js");
/* harmony import */ var _public_gif_flight_gif__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../public/gif/flight.gif */ "./public/gif/flight.gif");
/* harmony import */ var _public_gif_flight_gif__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_gif_flight_gif__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_agoda_flights_flight_header_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../public/agoda-flights/flight-header.png */ "./public/agoda-flights/flight-header.png");
/* harmony import */ var _public_agoda_flights_flight_header_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_agoda_flights_flight_header_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Public_PageLoader_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Public/PageLoader.js */ "./component/Public/PageLoader.js");
/* harmony import */ var _Public_LearnMore_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Public/LearnMore.js */ "./component/Public/LearnMore.js");
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Work\\Agoda-flights\\AgodaFlights.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















const AgodaFlights = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(_Public_PageLoader_js__WEBPACK_IMPORTED_MODULE_13__["PageLoader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.img01,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
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
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: _public_agoda_flights_flight_header_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.bannerImg,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {
      marginTop: "5%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 3,
    md: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 6,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, "Agoda Flights")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 3,
    md: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, "Complete Your Journey with Seat Selection"), __jsx("h2", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, "\xA7")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
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
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.article,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
      lineNumber: 57,
      columnNumber: 25
    }
  }, "CONTEXT & CHALLENGE\xA0\xA0"), "In early 2020, Agoda Flights has launched for six months achieving 1K daily booking. We started transferring our focus from little enhancement to large-scale features, aiming to become a more mature product to fulfill all the customers' needs. Compared to the competitors, there is still a long way to chase.", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 30
    }
  }), "Seat selection is one of the core features. Not to mention that it is a sophisticated project, we also have a high dependency on the supplier to define the scope and confirm the data they could provide. Therefore, we launched the feature with the free selection that it certainly reduces the risk of implementation. From a scalable perspective, we still consider the paid seats to accommodate the scenario afterward.")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
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
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 5,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contentTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 29
    }
  }, "Timeline"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contentDetail,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 29
    }
  }, "March to April 2020 (3 weeks)")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contentTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 29
    }
  }, "Team"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contentDetail,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 29
    }
  }, "Designers (2), Product Manager (2), Engineers (12+), QA (2)")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contentTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 29
    }
  }, "My role"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contentDetail,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 29
    }
  }, "Competitive Analysis, User interview, Research, UI/UX Design (App)")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
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
      lineNumber: 103,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
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
      lineNumber: 105,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotLine,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, "\xB7\xA0\xB7\xA0\xB7")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
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
      lineNumber: 113,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 29
    }
  }, "DESIGN HIGHLIGHT")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlightTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 29
    }
  }, "Clarity of the Information with Sophisticated Details")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 29
    }
  }, "The experience of selecting seats involving a bunch of information, from the flight segment, passenger types, seating restrictions & fare, and facilities on the plane. It is critical to display all the information clearly to help the customer making the decision based on the complexity of their personal preference. Therefore, we aimed to surface the bare minimum of the information to be straightforward and direct to simplify the decision-making process.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
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
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.gallery1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: _public_agoda_flights_flights02_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 37
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.gallery1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: _public_agoda_flights_flights04_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 37
    }
  }))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
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
      lineNumber: 166,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _public_agoda_flights_flights03_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
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
      lineNumber: 176,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 29
    }
  }, "DESIGN HIGHLIGHT")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlightTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 29
    }
  }, "Directly Interaction to Help Make Decisions")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 29
    }
  }, "While the customer considering the seating between price, position, and preference, it guides them better with fluent interaction and real-time feedback. When it comes to group travelers and multiple slices, we designed many details such as updating the subtotal, the attribute of seats, and zooming to help them complete the tasks faster.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
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
      lineNumber: 205,
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
      lineNumber: 206,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.gallery1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _public_gif_flight_gif__WEBPACK_IMPORTED_MODULE_11___default.a,
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 29
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 21
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    style: {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
      lineNumber: 224,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgDescription,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 29
    }
  }, "Simple and slick to keep the users focus on decision making.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
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
      lineNumber: 235,
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
      lineNumber: 237,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.reflection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
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
      lineNumber: 249,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotLine,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 29
    }
  }, "\xB7\xA0\xB7\xA0\xB7")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 37
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.boldContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 41
    }
  }, "Benchmarking helps (a lot) for introducing a new feature\xA0-\xA0"), "Especially for the later progress, there are many little fine-tune needing a quick decision . When engineers were building it, I already shifted my focus to other projects. It helps to recall the memory from a couple of screenshots and the research summary.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 37
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.boldContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 41
    }
  }, "User interview to collect insights\xA0-\xA0"), "We rarely have the chance to conduct formal user interviews every time. For such a complex new feature like seat selection, it is undoubtedly helpful to collect insights across the users as much as possible. There are also convincing proofs to back up design decisions based on real user behavior.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 37
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.boldContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 41
    }
  }, "QA engineers, the hidden figure\xA0-\xA0"), "The most satisfying experience I have for this project is building a strong relationship with QA engineers. Seat selection is a large-scale project with many industry knowledge, business goal, and development restriction to consider. I was grateful for the QA engineers being a trusting member of the team. The most satisfying experience I have for this project is building a strong relationship with QA engineers. Seat selection is a large-scale project with many industry knowledge, business goal, and development restriction to consider. I was grateful for the QA engineers being a trusting member of the team.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 37
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.boldContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 41
    }
  }, "Ask for feedback from the engineers\xA0-\xA0"), "For a more complex new feature, we need to design more feedback to smooth the experience. We think about micro animations to enhance this part to the users. Sometimes, ideas might fly too far away from the goal. I appreciated that our engineers are collaborated to join the design discussion and share feedback from the technical side. We save lots of time on delivering a too fancy solution then start over again. With team collaboration, we find a better balance between realistic, useful, and lovely solution.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 37
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.boldContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 41
    }
  }, "User testing for enhancement\xA0-\xA0"), "When it was close to the later stage of the project, we started WFH due to COVID-19. Unfortunately, we were not getting the chance to conduct the user testing session, which I believe that it will be super helpful for iteration and future phase.")))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    item: true,
    xs: false,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
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
      lineNumber: 367,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
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
      lineNumber: 369,
      columnNumber: 17
    }
  }, __jsx(_Public_LearnMore_js__WEBPACK_IMPORTED_MODULE_14__["LearnMore"], {
    scrollY: 5800,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 13
    }
  }, __jsx(_Process01_js__WEBPACK_IMPORTED_MODULE_7__["Process01"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 13
    }
  }, __jsx(_Process02_js__WEBPACK_IMPORTED_MODULE_8__["Process02"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 13
    }
  }, __jsx(_Process03_js__WEBPACK_IMPORTED_MODULE_9__["Process03"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 17
    }
  })), __jsx("div", {
    style: {
      marginTop: '6%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 13
    }
  }, __jsx(_Public_BottomNavbar_js__WEBPACK_IMPORTED_MODULE_10__["BottomNavbar"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 17
    }
  })));
};

/***/ }),

/***/ "./component/Work/Agoda-flights/Process01.js":
/*!***************************************************!*\
  !*** ./component/Work/Agoda-flights/Process01.js ***!
  \***************************************************/
/*! exports provided: Process01 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Process01", function() { return Process01; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../css/Work.module.css */ "./css/Work.module.css");
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_Work_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_process_process01_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/process/process01.png */ "./public/process/process01.png");
/* harmony import */ var _public_process_process01_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_process_process01_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_process_process02_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/process/process02.png */ "./public/process/process02.png");
/* harmony import */ var _public_process_process02_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_process_process02_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_process_process03_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/process/process03.png */ "./public/process/process03.png");
/* harmony import */ var _public_process_process03_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_process_process03_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_process_process04_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/process/process04.png */ "./public/process/process04.png");
/* harmony import */ var _public_process_process04_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_process_process04_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_process_process05_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../public/process/process05.png */ "./public/process/process05.png");
/* harmony import */ var _public_process_process05_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_process_process05_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_dot_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../public/dot.png */ "./public/dot.png");
/* harmony import */ var _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_dot_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Public_Carousel_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Public/Carousel.js */ "./component/Public/Carousel.js");
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Work\\Agoda-flights\\Process01.js";
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
  }, "Feature Comparison to Understand the Industry Standard")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.boldContent,
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
  }, "Since it was an entirely new feature, and we still have enough lead time. We decided to do the user interview to collect more insights from the real users. The research plan, discussion guides, and all five sessions were all conducted by the designers.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
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
      lineNumber: 118,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.researchTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 33
    }
  }, "RESEARCH GOAL")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
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
      lineNumber: 145,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.researchTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 33
    }
  }, "KEY QUESTIONS")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 41
    }
  }, "What is the intention to select a seat?")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 41
    }
  }, "What kind of information is not necessary to help travelers make decisions?")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
  }, "For those not selecting seats during booking, would they choose it during post-booking or online check-in?")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
  }, "At which point during the booking would the customer prefer to choose the seats?")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
  }, "We interviewed by video call due to work-from-home policy when the COVID-19 hit. It is tricky to observe behavior outside of the screen since participants only shared their mobile screen")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
  }, "When the seat map is clear enough in terms of information and UI, the participants didn't pay attention to the seat legend. However, it is still critical to explain different options if they want to check more details.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
  }, "Allow users to choose seats after booked")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dotAlign,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 11,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.collectInsightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 41
    }
  }, "Make sure we display clear feedback for loading")))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
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
      lineNumber: 526,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      backgroundColor: 'white'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
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
      lineNumber: 530,
      columnNumber: 29
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536,
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
      lineNumber: 539,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgDescription2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 33
    }
  }, "By features audit, we organized the potential features in terms of frequency adoption (amount of people using them). Post-its in the dark blue area were the actions been used by the participants the most. We also categorized all the behaviors and insights into implementation stages as a preliminary analysis.")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
  }, "Define the Bare Minimum of the Project")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
  }, "Considering the dependency on the supplier and the development effort, we're looking for the MVP version of the solution to reduce the risk during implementation. Hence, after the research phase, we broke down all the features and requirements into phased tasks.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580,
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
      lineNumber: 583,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      backgroundColor: 'white'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586,
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
      lineNumber: 587,
      columnNumber: 29
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593,
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
      lineNumber: 596,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgDescription2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602,
      columnNumber: 33
    }
  }, "We listed out the potential design criteria and discussed the project scope with the product manager.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610,
      columnNumber: 21
    }
  }))));
};

/***/ }),

/***/ "./component/Work/Agoda-flights/Process02.js":
/*!***************************************************!*\
  !*** ./component/Work/Agoda-flights/Process02.js ***!
  \***************************************************/
/*! exports provided: Process02 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Process02", function() { return Process02; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../css/Work.module.css */ "./css/Work.module.css");
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_Work_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_process_process06_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/process/process06.png */ "./public/process/process06.png");
/* harmony import */ var _public_process_process06_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_process_process06_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_process_process07_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/process/process07.png */ "./public/process/process07.png");
/* harmony import */ var _public_process_process07_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_process_process07_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_process_process08_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/process/process08.png */ "./public/process/process08.png");
/* harmony import */ var _public_process_process08_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_process_process08_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_process_process09_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/process/process09.png */ "./public/process/process09.png");
/* harmony import */ var _public_process_process09_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_process_process09_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_process_process10_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../public/process/process10.png */ "./public/process/process10.png");
/* harmony import */ var _public_process_process10_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_process_process10_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_process_process11_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../public/process/process11.png */ "./public/process/process11.png");
/* harmony import */ var _public_process_process11_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_process_process11_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_process_process12_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../public/process/process12.png */ "./public/process/process12.png");
/* harmony import */ var _public_process_process12_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_process_process12_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Public_Carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Public/Carousel */ "./component/Public/Carousel.js");
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Work\\Agoda-flights\\Process02.js";
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
  }, "Early Concepts to Gather Feedback and Direction")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
      lineNumber: 71,
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
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      backgroundColor: 'white'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
      lineNumber: 78,
      columnNumber: 29
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
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
  }, "DESIGN ITERATION")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
  }, "Deep Dive into the Details")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
  }, "After confirming the flow, I put more effort into the exploration of the selection process. There are\xA0", __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.boldContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 37
    }
  }, "flight segments, passenger selection, seat legend, seat map, and the price update."), "\xA0 We were looking for an approach to make the display more delightful and explain clear on what's the current state of the process.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  })), __jsx("div", {
    style: {
      marginTop: '5%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 4,
    style: {
      paddingLeft: '7%',
      paddingRight: '7%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.gallery1,
    style: {
      textAlign: 'center',
      marginBottom: '1rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _public_process_process07_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 33
    }
  })), __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgDescription3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 29
    }
  }, "Condensed legend makes the widest displaying on the map.")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.gallery1,
    style: {
      textAlign: 'center',
      marginBottom: '1rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _public_process_process08_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 33
    }
  })), __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgDescription3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 29
    }
  }, "Tab UI on the passenger selection might cause the problem for group travelers")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.gallery1,
    style: {
      textAlign: 'center',
      marginBottom: '1rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _public_process_process09_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 33
    }
  })), __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgDescription3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 29
    }
  }, "The different state of passenger selection button is hard to recognize at first glance.")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.gallery1,
    style: {
      textAlign: 'center',
      marginBottom: '1rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _public_process_process10_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
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
      lineNumber: 160,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
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
      lineNumber: 165,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.designHighlight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 33
    }
  }, "FINAL DESIGN")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisTitle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 33
    }
  }, "Free Seats for Launch and the Next Phase")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.competitiveAnalysisContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 33
    }
  }, "Based on the timeline and the development effort, we did compromise to simplify the process as much as possible. The most challenging part must be the worst case for multiple segments and multiple stops flight. The design also should be scalable to the paid options.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
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

/***/ "./component/Work/Agoda-flights/Process03.js":
/*!***************************************************!*\
  !*** ./component/Work/Agoda-flights/Process03.js ***!
  \***************************************************/
/*! exports provided: Process03 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Process03", function() { return Process03; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../css/Work.module.css */ "./css/Work.module.css");
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_Work_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_process_process13_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/process/process13.png */ "./public/process/process13.png");
/* harmony import */ var _public_process_process13_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_process_process13_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Work\\Agoda-flights\\Process03.js";
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

/***/ "./component/Work/Agoda-flights/Secure.js":
/*!************************************************!*\
  !*** ./component/Work/Agoda-flights/Secure.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../css/Work.module.css */ "./css/Work.module.css");
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_Work_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ "@material-ui/icons/ArrowForward");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _AgodaFlights_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AgodaFlights.js */ "./component/Work/Agoda-flights/AgodaFlights.js");
/* harmony import */ var _component_Public_Header_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../component/Public/Header.js */ "./component/Public/Header.js");
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Work\\Agoda-flights\\Secure.js";
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
	"footerLeftContent": "Public_footerLeftContent__3jURW",
	"ball": "Public_ball__3SvxF",
	"bounce": "Public_bounce__2gt-J"
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
	"capImage": "Work_capImage__3JOiv",
	"fadeIn": "Work_fadeIn__GwvDm",
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
	"boldContent": "Work_boldContent__15w62",
	"gallery1": "Work_gallery1__3Il-3",
	"imgDescription": "Work_imgDescription__18cVq",
	"imgDescriptionLink": "Work_imgDescriptionLink__37e9M",
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
	"bannerImg": "Work_bannerImg__1Cg8H",
	"footer": "Work_footer__1wOtN",
	"designContent": "Work_designContent__2zzGW",
	"designTitle": "Work_designTitle__3N-fF",
	"caption": "Work_caption__3iljy",
	"gigbirdCaption": "Work_gigbirdCaption__2Geqy"
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
/* harmony import */ var _component_Work_Agoda_flights_Secure_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../component/Work/Agoda-flights/Secure.js */ "./component/Work/Agoda-flights/Secure.js");
/* harmony import */ var _component_Public_Drawer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../component/Public/Drawer.js */ "./component/Public/Drawer.js");
/* harmony import */ var _component_Public_Scrollup_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../component/Public/Scrollup.js */ "./component/Public/Scrollup.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _component_Public_PageLoader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../component/Public/PageLoader.js */ "./component/Public/PageLoader.js");
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
      lineNumber: 23,
      columnNumber: 9
    }
  }, drawer == false ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx(_component_Public_PageLoader_js__WEBPACK_IMPORTED_MODULE_7__["PageLoader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, __jsx(_component_Work_Agoda_flights_Secure_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handleDrawerOpen: handleDrawerOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
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
      lineNumber: 36,
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
      lineNumber: 37,
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
      lineNumber: 38,
      columnNumber: 25
    }
  }, __jsx(_component_Public_Scrollup_js__WEBPACK_IMPORTED_MODULE_5__["Scrollup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, __jsx(_component_Public_Footer_js__WEBPACK_IMPORTED_MODULE_1__["Footer"], {
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
  }, __jsx(_component_Public_Drawer_js__WEBPACK_IMPORTED_MODULE_4__["Drawer"], {
    handleDrawerClose: handleDrawerClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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

module.exports = "/_next/static/images/flight-header-5b2d3e1f83e9778627912755e829272a.png";

/***/ }),

/***/ "./public/agoda-flights/flights02.png":
/*!********************************************!*\
  !*** ./public/agoda-flights/flights02.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/flights02-e6abf7b4f7d3a43ce43564c890f1281e.png";

/***/ }),

/***/ "./public/agoda-flights/flights03.png":
/*!********************************************!*\
  !*** ./public/agoda-flights/flights03.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/flights03-43368836115efc7c2cdba36bceaa22e9.png";

/***/ }),

/***/ "./public/agoda-flights/flights04.png":
/*!********************************************!*\
  !*** ./public/agoda-flights/flights04.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/flights04-4bf71a2362f8562e4196523955be6583.png";

/***/ }),

/***/ "./public/dot.png":
/*!************************!*\
  !*** ./public/dot.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABwSURBVHgBfY9RDYAwDETX8sPf5mBIAEk4AEVYAAc4AAlIqINyJVtCSMpLbll6t+VKAXRAVRdceyhBKxHNF6BiHsV4IwgNTYyxvvzS2pxyzhp8hO34CSQLnJ6LbhujyOj8Isw88bMK2tpq1YB2m5l3A3hmJA+V1mp0AAAAAElFTkSuQmCC"

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

module.exports = "/_next/static/images/process06-7d34cddb6df724fa9057d055c3552d9c.png";

/***/ }),

/***/ "./public/process/process07.png":
/*!**************************************!*\
  !*** ./public/process/process07.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/process07-20977b3bf1957ed9ee93270ca7fc0649.png";

/***/ }),

/***/ "./public/process/process08.png":
/*!**************************************!*\
  !*** ./public/process/process08.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/process08-b2fbb2798ca935f8bb6e6e355295de39.png";

/***/ }),

/***/ "./public/process/process09.png":
/*!**************************************!*\
  !*** ./public/process/process09.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/process09-05fb286ced52e2b2fd2e44721783035b.png";

/***/ }),

/***/ "./public/process/process10.png":
/*!**************************************!*\
  !*** ./public/process/process10.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/process10-928588fe07964cb50f3fcec62415531b.png";

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

/***/ "@material-ui/icons/ArrowDownward":
/*!***************************************************!*\
  !*** external "@material-ui/icons/ArrowDownward" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowDownward");

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

/***/ }),

/***/ "react-top-loading-bar":
/*!****************************************!*\
  !*** external "react-top-loading-bar" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-top-loading-bar");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9Cb3R0b21OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9DYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0RyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0xlYXJuTW9yZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL1BhZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9TY3JvbGx1cC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvV29yay9BZ29kYS1mbGlnaHRzL0Fnb2RhRmxpZ2h0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvV29yay9BZ29kYS1mbGlnaHRzL1Byb2Nlc3MwMS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvV29yay9BZ29kYS1mbGlnaHRzL1Byb2Nlc3MwMi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvV29yay9BZ29kYS1mbGlnaHRzL1Byb2Nlc3MwMy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvV29yay9BZ29kYS1mbGlnaHRzL1NlY3VyZS5qcyIsIndlYnBhY2s6Ly8vLi9jc3MvUHVibGljLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY3NzL1dvcmsubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9Xb3JrL0Fnb2RhLWZsaWdodHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fnb2RhLWZsaWdodHMvZmxpZ2h0LWhlYWRlci5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fnb2RhLWZsaWdodHMvZmxpZ2h0czAyLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYWdvZGEtZmxpZ2h0cy9mbGlnaHRzMDMucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hZ29kYS1mbGlnaHRzL2ZsaWdodHMwNC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RvdC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2dpZi9mbGlnaHQuZ2lmIiwid2VicGFjazovLy8uL3B1YmxpYy9wcm9jZXNzL3Byb2Nlc3MwMS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczAyLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvcHJvY2Vzcy9wcm9jZXNzMDMucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9wcm9jZXNzL3Byb2Nlc3MwNC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczA1LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvcHJvY2Vzcy9wcm9jZXNzMDYucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9wcm9jZXNzL3Byb2Nlc3MwNy5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczA4LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvcHJvY2Vzcy9wcm9jZXNzMDkucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9wcm9jZXNzL3Byb2Nlc3MxMC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczExLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvcHJvY2Vzcy9wcm9jZXNzMTIucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9wcm9jZXNzL3Byb2Nlc3MxMy5wbmciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93RG93bndhcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dGb3J3YXJkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b3AtbG9hZGluZy1iYXJcIiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwibGluayIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwibGV0dGVyU3BhY2luZyIsImNvbG9yIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwibGluazIiLCJCb3R0b21OYXZiYXIiLCJjbGFzc2VzIiwic3R5bGVzIiwibWFpbjEiLCJ0ZXh0QWxpZ24iLCJpY29uIiwiQ2Fyb3VzZWwiLCJwcm9wcyIsImNhcm91c2VsIiwic2V0Q2Fyb3VzZWwiLCJSZWFjdCIsInVzZVN0YXRlIiwiaGFuZGxlQ2Fyb3VzZWxOZXh0IiwiaW1nc3JjIiwibGVuZ3RoIiwiaGFuZGxlQ2Fyb3VzZWxMYXN0IiwiY2FwdGlvbiIsImNhcm91c2VsT3V0ZXIiLCJtYXJnaW5Ub3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjYXJvdXNlbEltZyIsImNhcHRpb25Db250YWluZXIiLCJpbWdEZXNjcmlwdGlvbiIsIm1haW4iLCJoZWlnaHQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nVG9wIiwiZHJhd2VyTGluayIsImRyYXdlckhlYWRlciIsIkRyYXdlciIsImhhbmRsZURyYXdlckNsb3NlIiwiZHJhd2VyVGl0bGUiLCJjb3B5cmlnaHQiLCJGb290ZXIiLCJmb290ZXJCbG9jayIsImZvb3RlclRpdGxlIiwiZm9vdGVyTGVmdFRpdGxlIiwiZm9vdGVyTGVmdENvbnRlbnQiLCJmb290ZXJCbG9jazIiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImxpbmtBbmNob3IiLCJtZW51QnV0dG9uIiwiSGVhZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlRHJhd2VyT3BlbiIsInRpdGxlIiwibWVudUJhciIsInBhdGhuYW1lIiwiYnV0dG9uIiwiTGVhcm5Nb3JlIiwiY29vcmRpbmF0ZSIsInNldENvb3JkaW5hdGUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJ1bmRlZmluZWQiLCJhZGRFdmVudExpc3RlbmVyIiwib25TY3JvbGwiLCJzY3JvbGxZIiwiaGFuZGxlQW5jaG9yIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImJhbGwiLCJQYWdlTG9hZGVyIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsIlNjcm9sbHVwIiwic2Nyb2xsQyIsInNldFNjcm9sbEMiLCJoYW5kbGVTY3JvbGx0b1RvcCIsImFsaWduIiwiQWdvZGFGbGlnaHRzIiwiaW1nMDEiLCJmbGlnaHRIZWFkZXIiLCJiYW5uZXJJbWciLCJ0aXRsZTIiLCJ0aXRsZTMiLCJ0aXRsZTQiLCJhcnRpY2xlIiwiY29udGVudCIsImNvbnRlbnRUaXRsZSIsImNvbnRlbnREZXRhaWwiLCJkb3RMaW5lIiwiZGVzaWduSGlnaGxpZ2h0IiwiZGVzaWduSGlnaGxpZ2h0VGl0bGUiLCJkZXNpZ25IaWdobGlnaHRDb250ZW50IiwiZ2FsbGVyeTEiLCJmbGlnaHRzMDIiLCJ3aWR0aCIsImZsaWdodHMwNCIsImZsaWdodHMwMyIsImZsaWdodEdpZiIsInJlZmxlY3Rpb24iLCJkb3RBbGlnbiIsImRvdCIsImJvbGRDb250ZW50IiwiUHJvY2VzczAxIiwicHJvZ3Jlc3NNYWluIiwicHJvZ3Jlc3NUaXRsZTEiLCJwcm9ncmVzc1RpdGxlMiIsImNvbXBldGl0aXZlQW5hbHlzaXNUaXRsZTIiLCJjb21wZXRpdGl2ZUFuYWx5c2lzQ29udGVudCIsInByb2Nlc3MwMSIsInByb2Nlc3MwMiIsInJlc2VhcmNoVGl0bGUiLCJjb2xsZWN0SW5zaWdodENvbnRlbnQiLCJwcm9jZXNzMDMiLCJpbWdEZXNjcmlwdGlvbjIiLCJwcm9jZXNzMDQiLCJwcm9jZXNzMDUiLCJQcm9jZXNzMDIiLCJwcm9jZXNzMDYiLCJtYXJnaW5Cb3R0b20iLCJwcm9jZXNzMDciLCJpbWdEZXNjcmlwdGlvbjMiLCJwcm9jZXNzMDgiLCJwcm9jZXNzMDkiLCJwcm9jZXNzMTAiLCJwcm9jZXNzMTEiLCJwcm9jZXNzMTIiLCJQcm9jZXNzMDMiLCJwYWRkaW5nQm90dG9tIiwicHJvY2VzczEzIiwiU2VjdXJlIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsInBhc3N3b3JkIiwiZXJyb3JNZXNzYWdlIiwiaXNQYXNzIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsInNldFN0YXRlQnlOYW1lIiwicmVjdXJzaXZlUmVwbGFjZVZhbHVlQnlOYW1lIiwiaGFuZGxlU3VibWl0IiwiZSIsImNhbGxCYWNrIiwibnVsbFZhbHVlIiwidmFsdWUiLCJuYW1lIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJvYmplY3QiLCJrZXlzQXJyIiwicmVwbGFjZSIsInNwbGl0IiwiaSIsImtleSIsImhhc093blByb3BlcnR5IiwicmVuZGVyIiwiZGVzY3JpcHRpb24iLCJrZXlDb2RlIiwiZW5kQWRvcm5tZW50Iiwic2hyaW5rIiwiaGVhZGVyIiwiUGFnZSIsImRyYXdlciIsInNldERyYXdlciIsInBvc2l0aW9uIiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDekJDLE1BQUksRUFBRTtBQUNGQyxjQUFVLEVBQUMsYUFEVDtBQUVGQyxjQUFVLEVBQUMsR0FGVDtBQUdGQyxpQkFBYSxFQUFD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Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvV29yay9BZ29kYS1mbGlnaHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9Xb3JrL0Fnb2RhLWZsaWdodHMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvUHVibGljLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgbGluazoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90byBTbGFiJyxcclxuICAgICAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgICAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgICAgIGNvbG9yOidibGFjaycsXHJcbiAgICAgICAgZm9udFNpemU6JzNyZW0nLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6JzRyZW0nLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6JyM4RjhGOEYnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxpbmsyOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvIFNsYWInLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICAgICAgY29sb3I6J2JsYWNrJyxcclxuICAgICAgICBmb250U2l6ZTonMS41cmVtJyxcclxuICAgICAgICBsaW5lSGVpZ2h0OicycmVtJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOicjOEY4RjhGJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgQm90dG9tTmF2YmFyID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluMX0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxIaWRkZW4gbWREb3duPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IHNtPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0gc3R5bGU9e3t0ZXh0QWxpZ246J2xlZnQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9Xb3JrXCIgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+V09SSzwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvV3JpdGluZ1wiIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PldSSVRJTkdTPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IHN0eWxlPXt7dGV4dEFsaWduOidyaWdodCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0Fib3V0XCIgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+QUJPVVQ8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IHNtPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcblxyXG4gICAgICAgICAgICAgICAgPEhpZGRlbiBsZ1VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IHNtPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0gc3R5bGU9e3t0ZXh0QWxpZ246J2xlZnQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9Xb3JrXCIgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMubGluazJ9PldPUks8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1dyaXRpbmdcIiB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rMn0+V1JJVElOR1M8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0gc3R5bGU9e3t0ZXh0QWxpZ246J3JpZ2h0J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvQWJvdXRcIiB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rMn0+QUJPVVQ8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IHNtPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcblxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvUHVibGljLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IEFycm93QmFja0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93QmFjayc7XHJcbmltcG9ydCBBcnJvd0ZvcndhcmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0ZvcndhcmQnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgaWNvbjoge1xyXG4gICAgICAgIGZvbnRTaXplOicxLjVyZW0nLFxyXG4gICAgICAgIGNvbG9yOicjOEY4RjhGJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOicjMUYxRjFGJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWwgPSAocHJvcHMpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgXHJcbiAgICBjb25zdCBbY2Fyb3VzZWwsIHNldENhcm91c2VsXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVDYXJvdXNlbE5leHQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoY2Fyb3VzZWwgPCBpbWdzcmMubGVuZ3RoIC0gMSl7XHJcbiAgICAgICAgICAgIHNldENhcm91c2VsKGNhcm91c2VsICsgMSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNldENhcm91c2VsKDApO1xyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDYXJvdXNlbExhc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoY2Fyb3VzZWwgPiAwKXtcclxuICAgICAgICAgICAgc2V0Q2Fyb3VzZWwoY2Fyb3VzZWwgLSAxKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2V0Q2Fyb3VzZWwoaW1nc3JjLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIH0gICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGltZ3NyYyxcclxuICAgICAgICBjYXB0aW9uXHJcbiAgICB9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbE91dGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6JzMlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gbWQ9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6JyNGNUY1RjUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltZ3NyY1tjYXJvdXNlbF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsSW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gbWQ9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuY2FwdGlvbkNvbnRhaW5lcn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzFyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IG1kPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2Fyb3VzZWxMYXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dCYWNrSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaW1nRGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FwdGlvbltjYXJvdXNlbF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IHN0eWxlPXt7dGV4dEFsaWduOidyaWdodCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDYXJvdXNlbE5leHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd0ZvcndhcmRJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1B1YmxpYy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBtYWluOiB7XHJcbiAgICAgICAgaGVpZ2h0OicxMDB2aCcsIFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6JzYlJywgXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6JzYlJywgXHJcbiAgICAgICAgcGFkZGluZ1RvcDogXCIxcmVtXCJcclxuICAgIH0sXHJcbiAgICBsaW5rOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgICAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6ICczMnB4JyxcclxuICAgICAgICBjb2xvcjonIzhGOEY4RicsXHJcbiAgICAgICAgZm9udFNpemU6JzE4cHgnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6J2JsYWNrJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkcmF3ZXJMaW5rOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICB0ZXh0QWxpZ246J2xlZnQnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICAgICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgICAgIGZvbnRTaXplOicyMnB4JyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOidibGFjaydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZHJhd2VySGVhZGVyOiB7XHJcbiAgICAgICAgcGFkZGluZ1RvcDonM3JlbSdcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgRHJhd2VyID0gKHByb3BzKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgaGFuZGxlRHJhd2VyQ2xvc2VcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgdW5kZXJsaW5lPSdub25lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZHJhd2VyVGl0bGV9PnNhbGllanVuZzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT48L0dyaWQ+ICAgIFxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+PC9HcmlkPiAgICBcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHNtPXszfT48L0dyaWQ+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezF9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInLCBtYXJnaW5Ub3A6Jy0wLjVyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURyYXdlckNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIHN0eWxlPXt7Y29sb3I6JyNCOEI4QjgnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckhlYWRlcn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzRyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9Xb3JrXCIgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyTGlua30+V09SSzwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD4gICAgXHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9Xcml0aW5nc1wiIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckxpbmt9PldSSVRJTkdTPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvQWJvdXRcIiB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJMaW5rfT5BQk9VVDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScuL1NhbGllQ2hpZW5fUmVzdW1lLnBkZicgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXInIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckxpbmt9PlJFU1VNRTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD4gICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0gIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1B1YmxpYy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBsaW5rOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgICAgICBsaW5lSGVpZ2h0OicxLjhyZW0nLFxyXG4gICAgICAgIGNvbG9yOicjOEY4RjhGJyxcclxuICAgICAgICBmb250U2l6ZTonMXJlbScsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjonYmxhY2snXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvcHlyaWdodDoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICAgICAgbGluZUhlaWdodDonMC43NXJlbScsXHJcbiAgICAgICAgZm9udFNpemU6JzAuNzVyZW0nLFxyXG4gICAgICAgIGNvbG9yOicjOEY4RjhGJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOidibGFjaydcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pOyAgICBcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJCbG9ja30+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTYWxpZSBTaGVuZ0p1bmcgQ2hpZW4gLS0tIFByb2R1Y3QgRGVzaWduZXJcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJMZWZ0VGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPcGVuIHRvIG5ldyBvcHBvcnR1bml0aWVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyTGVmdENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYWxpZWp1bmc0N0BnbWFpbC5jb21cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zYWxpZS1jaGllbi8nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9J25vb3BlbmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTGlua2VkaW5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9zYWxpZWp1bmcubWVkaXVtLmNvbS8nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9J25vb3BlbmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWVkaXVtXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyQmxvY2syfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb3B5cmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEZXNpZ25lZCBieSBDaGllbiBTaGVuZ0p1bmcgwqkgMjAyMCBhbGwgcmlnaHRzIHJlc2VydmUgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvcHlyaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERldmVsb3BlZCBieSA8TGluayB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb3B5cmlnaHR9PldhbmcgV2VpQW48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3toZWlnaHQ6JzNyZW0nfX0+PC9HcmlkPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvUHVibGljLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcclxuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBsaW5rOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgICAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6ICczMnB4JyxcclxuICAgICAgICBjb2xvcjonIzhGOEY4RicsXHJcbiAgICAgICAgZm9udFNpemU6JzFyZW0nLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6J2JsYWNrJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkcmF3ZXJMaW5rOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICB0ZXh0QWxpZ246J2xlZnQnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICAgICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgICAgIGZvbnRTaXplOicyMnB4JyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOidibGFjaydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZHJhd2VySGVhZGVyOiB7XHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6JzJyZW0nLFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDonMnJlbScsXHJcbiAgICAgICAgbWFyZ2luVG9wOiczcmVtJ1xyXG4gICAgfSxcclxuICAgIGxpbmtBbmNob3I6IHtcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogJzMycHgnLFxyXG4gICAgICAgIGNvbG9yOidibGFjaycsXHJcbiAgICAgICAgZm9udFNpemU6JzFyZW0nXHJcbiAgICB9LFxyXG4gICAgaWNvbjoge1xyXG4gICAgICAgIGZvbnRTaXplOicxLjVyZW0nLFxyXG4gICAgICAgIGNvbG9yOicjOEY4RjhGJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOicjMUYxRjFGJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZW51QnV0dG9uOiB7XHJcbiAgICAgICAgcGFkZGluZ1RvcDonMnJlbScsXHJcbiAgICAgICAgdGV4dEFsaWduOidjZW50ZXInXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgaGFuZGxlRHJhd2VyT3BlblxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW4xfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzdHlsZT17e3BhZGRpbmdUb3A6JzEuNXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgdW5kZXJsaW5lPSdub25lJyBzdHlsZT17e2NvbG9yOicjMUYxRjFGJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PnNhbGllanVuZzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEhpZGRlbiBtZERvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVCYXJ9IHN0eWxlPXt7cGFkZGluZ1RvcDonMS41cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL1dvcmsnIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy9Xb3JrJz9jbGFzc2VzLmxpbmtBbmNob3I6Y2xhc3Nlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV09SS1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9Xcml0aW5ncycgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1dyaXRpbmdzJz9jbGFzc2VzLmxpbmtBbmNob3I6Y2xhc3Nlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV1JJVElOR1NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvQWJvdXQnIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy9BYm91dCc/Y2xhc3Nlcy5saW5rQW5jaG9yOmNsYXNzZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFCT1VUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLi9TYWxpZUNoaWVuX1Jlc3VtZS5wZGYnIHRhcmdldD0nX2JsYW5rJyByZWw9J25vb3BlbmVyJyB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUkVTVU1FXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxIaWRkZW4gbGdVcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezF9IGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRHJhd2VyT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JywgcGFkZGluZ1RvcDonMS4ycmVtJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgQXJyb3dEb3dud2FyZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93RG93bndhcmQnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvUHVibGljLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgIGJ1dHRvbjoge1xyXG4gICAgZm9udEZhbWlseTogJ1JvYm90bycsXHJcbiAgICBmb250U2l6ZTogJzEuMXJlbScsXHJcbiAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICBsaW5lSGVpZ2h0OiAnMS4xcmVtJyxcclxuICAgIGxldHRlclNwYWNpbmc6ICcwLjA1cmVtJyxcclxuICAgIGNvbG9yOiAnIzhGOEY4RicsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgIGNvbG9yOicjMUYxRjFGJyAgICAgICAgXHJcbiAgICB9XHJcbiAgIH1cclxufSk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMZWFybk1vcmUgPSAocHJvcHMpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IFtjb29yZGluYXRlLCBzZXRDb29yZGluYXRlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKHdpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XHJcbiAgICAgICAgICAgIHNldENvb3JkaW5hdGUod2luZG93LnNjcm9sbFkpO1xyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICB9XHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUFuY2hvciA9ICgpID0+IHtcclxuICAgICAgICBpZih3aW5kb3cgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe3RvcDogY29vcmRpbmF0ZSArIDYwMCwgYmVoYXZpb3I6ICdzbW9vdGgnfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgIFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBbmNob3J9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCd9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5MZWFybiBNb3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzAuNXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93RG93bndhcmRJY29uLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+IFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTG9hZGluZ0JhciBmcm9tICdyZWFjdC10b3AtbG9hZGluZy1iYXInXHJcbiBcclxuZXhwb3J0IGNvbnN0IFBhZ2VMb2FkZXIgPSAoKSA9PiB7XHJcbiAgXHJcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBzZXRQcm9ncmVzcygxMDApO1xyXG4gIH0sW10pXHJcbiBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPExvYWRpbmdCYXJcclxuICAgICAgICBjb2xvcj0nIzFGMUYxRidcclxuICAgICAgICBoZWlnaHQ9ezN9XHJcbiAgICAgICAgd2FpdGluZ1RpbWU9ezUwMH1cclxuICAgICAgICBwcm9ncmVzcz17cHJvZ3Jlc3N9XHJcbiAgICAgICAgb25Mb2FkZXJGaW5pc2hlZD17KCkgPT4gc2V0UHJvZ3Jlc3MoMCl9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgRXhwYW5kTGVzc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3MnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgaWNvbjoge1xyXG4gICAgICAgIGZvbnRTaXplOic0cmVtJyxcclxuICAgICAgICBjb2xvcjonIzhGOEY4RicsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjonIzFGMUYxRidcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTY3JvbGx1cCA9IChwcm9wcykgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3QgW3Njcm9sbEMsIHNldFNjcm9sbENdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xyXG4gICAgICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xyXG4gICAgICAgICAgICBzZXRTY3JvbGxDKHdpbmRvdy5zY3JvbGxZKTtcclxuICAgICAgICB9ICBcclxuICAgIH0sW10pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsdG9Ub3AgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYod2luZG93ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHt0b3A6IDAsIGJlaGF2aW9yOiAnc21vb3RoJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e2FsaWduOidyaWdodCd9fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtzY3JvbGxDID4gNDAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTY3JvbGx0b1RvcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFeHBhbmRMZXNzSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9jc3MvV29yay5tb2R1bGUuY3NzJztcclxuaW1wb3J0IGZsaWdodHMwMiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvYWdvZGEtZmxpZ2h0cy9mbGlnaHRzMDIucG5nJztcclxuaW1wb3J0IGZsaWdodHMwMyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvYWdvZGEtZmxpZ2h0cy9mbGlnaHRzMDMucG5nJztcclxuaW1wb3J0IGZsaWdodHMwNCBmcm9tICcuLi8uLi8uLi9wdWJsaWMvYWdvZGEtZmxpZ2h0cy9mbGlnaHRzMDQucG5nJztcclxuaW1wb3J0IGRvdCBmcm9tICcuLi8uLi8uLi9wdWJsaWMvZG90LnBuZyc7XHJcbmltcG9ydCB7IFByb2Nlc3MwMSB9IGZyb20gJy4vUHJvY2VzczAxLmpzJztcclxuaW1wb3J0IHsgUHJvY2VzczAyIH0gZnJvbSAnLi9Qcm9jZXNzMDIuanMnO1xyXG5pbXBvcnQgeyBQcm9jZXNzMDMgfSBmcm9tICcuL1Byb2Nlc3MwMy5qcyc7XHJcbmltcG9ydCB7IEJvdHRvbU5hdmJhcn0gZnJvbSAnLi4vLi4vUHVibGljL0JvdHRvbU5hdmJhci5qcyc7XHJcbmltcG9ydCBmbGlnaHRHaWYgZnJvbSAnLi4vLi4vLi4vcHVibGljL2dpZi9mbGlnaHQuZ2lmJztcclxuaW1wb3J0IGZsaWdodEhlYWRlciBmcm9tICcuLi8uLi8uLi9wdWJsaWMvYWdvZGEtZmxpZ2h0cy9mbGlnaHQtaGVhZGVyLnBuZyc7XHJcbmltcG9ydCB7IFBhZ2VMb2FkZXIgfSBmcm9tICcuLi8uLi9QdWJsaWMvUGFnZUxvYWRlci5qcyc7XHJcbmltcG9ydCB7IExlYXJuTW9yZSB9IGZyb20gJy4uLy4uL1B1YmxpYy9MZWFybk1vcmUuanMnOyBcclxuXHJcbmV4cG9ydCBjb25zdCBBZ29kYUZsaWdodHMgPSAoKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxQYWdlTG9hZGVyLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5pbWcwMX0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmbGlnaHRIZWFkZXJ9IGNsYXNzTmFtZT17c3R5bGVzLmJhbm5lckltZ30vPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e21hcmdpblRvcDpcIjUlXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IG1kPXs1fT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZ29kYSBGbGlnaHRzICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgIFxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezV9PjwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZTN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb21wbGV0ZSBZb3VyIEpvdXJuZXkgd2l0aCBTZWF0IFNlbGVjdGlvbiAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZTR9PsKnPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgIFxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e21hcmdpblRvcDonNSUnfX0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFdlaWdodDo3MDAsIGxldHRlclNwYWNpbmc6JzAuMDNyZW0nfX0+Q09OVEVYVCAmIENIQUxMRU5HRSZuYnNwOyZuYnNwOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSW4gZWFybHkgMjAyMCwgQWdvZGEgRmxpZ2h0cyBoYXMgbGF1bmNoZWQgZm9yIHNpeCBtb250aHMgYWNoaWV2aW5nIDFLIGRhaWx5IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib29raW5nLiBXZSBzdGFydGVkIHRyYW5zZmVycmluZyBvdXIgZm9jdXMgZnJvbSBsaXR0bGUgZW5oYW5jZW1lbnQgdG8gbGFyZ2Utc2NhbGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVzLCBhaW1pbmcgdG8gYmVjb21lIGEgbW9yZSBtYXR1cmUgcHJvZHVjdCB0byBmdWxmaWxsIGFsbCB0aGUgY3VzdG9tZXJzJyBuZWVkcy4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBhcmVkIHRvIHRoZSBjb21wZXRpdG9ycywgdGhlcmUgaXMgc3RpbGwgYSBsb25nIHdheSB0byBjaGFzZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZWF0IHNlbGVjdGlvbiBpcyBvbmUgb2YgdGhlIGNvcmUgZmVhdHVyZXMuIE5vdCB0byBtZW50aW9uIHRoYXQgaXQgaXMgYSBzb3BoaXN0aWNhdGVkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LCB3ZSBhbHNvIGhhdmUgYSBoaWdoIGRlcGVuZGVuY3kgb24gdGhlIHN1cHBsaWVyIHRvIGRlZmluZSB0aGUgc2NvcGUgYW5kIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtIHRoZSBkYXRhIHRoZXkgY291bGQgcHJvdmlkZS4gVGhlcmVmb3JlLCB3ZSBsYXVuY2hlZCB0aGUgZmVhdHVyZSB3aXRoIHRoZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJlZSBzZWxlY3Rpb24gdGhhdCBpdCBjZXJ0YWlubHkgcmVkdWNlcyB0aGUgcmlzayBvZiBpbXBsZW1lbnRhdGlvbi4gRnJvbSBhIHNjYWxhYmxlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZSwgd2Ugc3RpbGwgY29uc2lkZXIgdGhlIHBhaWQgc2VhdHMgdG8gYWNjb21tb2RhdGUgdGhlIHNjZW5hcmlvIGFmdGVyd2FyZC5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+ICAgICBcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6JzUlJ319PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs1fSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50VGl0bGV9PlRpbWVsaW5lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnREZXRhaWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hcmNoIHRvIEFwcmlsIDIwMjAgKDMgd2Vla3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50VGl0bGV9PlRlYW08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudERldGFpbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVzaWduZXJzICgyKSwgUHJvZHVjdCBNYW5hZ2VyICgyKSwgRW5naW5lZXJzICgxMispLCBRQSAoMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRUaXRsZX0+TXkgcm9sZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50RGV0YWlsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wZXRpdGl2ZSBBbmFseXNpcywgVXNlciBpbnRlcnZpZXcsIFJlc2VhcmNoLCBVSS9VWCBEZXNpZ24gKEFwcClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6JzglJ319PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NX0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kb3RMaW5lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgwrcmbmJzcDvCtyZuYnNwO8K3XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NX0+PC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6JzglJ319PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzaWduSGlnaGxpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBERVNJR04gSElHSExJR0hUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzaWduSGlnaGxpZ2h0VGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsYXJpdHkgb2YgdGhlIEluZm9ybWF0aW9uIHdpdGggU29waGlzdGljYXRlZCBEZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzaWduSGlnaGxpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGV4cGVyaWVuY2Ugb2Ygc2VsZWN0aW5nIHNlYXRzIGludm9sdmluZyBhIGJ1bmNoIG9mIGluZm9ybWF0aW9uLCBmcm9tIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBmbGlnaHQgc2VnbWVudCwgcGFzc2VuZ2VyIHR5cGVzLCBzZWF0aW5nIHJlc3RyaWN0aW9ucyAmIGZhcmUsIGFuZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWNpbGl0aWVzIG9uIHRoZSBwbGFuZS4gSXQgaXMgY3JpdGljYWwgdG8gZGlzcGxheSBhbGwgdGhlIGluZm9ybWF0aW9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFybHkgdG8gaGVscCB0aGUgY3VzdG9tZXIgbWFraW5nIHRoZSBkZWNpc2lvbiBiYXNlZCBvbiB0aGUgY29tcGxleGl0eSBvZiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVpciBwZXJzb25hbCBwcmVmZXJlbmNlLiBUaGVyZWZvcmUsIHdlIGFpbWVkIHRvIHN1cmZhY2UgdGhlIGJhcmUgbWluaW11bSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZiB0aGUgaW5mb3JtYXRpb24gdG8gYmUgc3RyYWlnaHRmb3J3YXJkIGFuZCBkaXJlY3QgdG8gc2ltcGxpZnkgdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2lzaW9uLW1ha2luZyBwcm9jZXNzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6JzUlJywgbWFyZ2luTGVmdDonNiUnLCBtYXJnaW5SaWdodDonNiUnfX0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2FsbGVyeTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtmbGlnaHRzMDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOicxMDAlJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYWxsZXJ5MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ZsaWdodHMwNH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbGxlcnkxfSBzdHlsZT17e2hlaWdodDonMTAwLjE1JSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ZsaWdodHMwM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOicxMDAlJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOic4JSd9fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2lnbkhpZ2hsaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgREVTSUdOIEhJR0hMSUdIVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2lnbkhpZ2hsaWdodFRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXJlY3RseSBJbnRlcmFjdGlvbiB0byBIZWxwIE1ha2UgRGVjaXNpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzaWduSGlnaGxpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hpbGUgdGhlIGN1c3RvbWVyIGNvbnNpZGVyaW5nIHRoZSBzZWF0aW5nIGJldHdlZW4gcHJpY2UsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLCBhbmQgcHJlZmVyZW5jZSwgaXQgZ3VpZGVzIHRoZW0gYmV0dGVyIHdpdGggZmx1ZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVyYWN0aW9uIGFuZCByZWFsLXRpbWUgZmVlZGJhY2suIFdoZW4gaXQgY29tZXMgdG8gZ3JvdXAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhdmVsZXJzIGFuZCBtdWx0aXBsZSBzbGljZXMsIHdlIGRlc2lnbmVkIG1hbnkgZGV0YWlscyBzdWNoIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzIHVwZGF0aW5nIHRoZSBzdWJ0b3RhbCwgdGhlIGF0dHJpYnV0ZSBvZiBzZWF0cywgYW5kIHpvb21pbmcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gaGVscCB0aGVtIGNvbXBsZXRlIHRoZSB0YXNrcyBmYXN0ZXIuICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOic1JScsIG1hcmdpbkxlZnQ6JzYlJywgbWFyZ2luUmlnaHQ6JzYlJ319PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOic1JSd9fSBzcGFjaW5nPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gbWQ9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbGxlcnkxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtmbGlnaHRHaWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDonMTAwJSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e319PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaW1nRGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpbXBsZSBhbmQgc2xpY2sgdG8ga2VlcCB0aGUgdXNlcnMgZm9jdXMgb24gZGVjaXNpb24gbWFraW5nLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e21hcmdpblRvcDonOCUnfX0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gaXRlbSB4cz17ZmFsc2V9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnJlZmxlY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlZmxlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZG90TGluZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgwrcmbmJzcDvCtyZuYnNwO8K3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5kb3RBbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzaWduSGlnaGxpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5ib2xkQ29udGVudH0+QmVuY2htYXJraW5nIGhlbHBzIChhIGxvdCkgZm9yIGludHJvZHVjaW5nIGEgbmV3IGZlYXR1cmUmbmJzcDstJm5ic3A7PC9zcGFuPkVzcGVjaWFsbHkgZm9yIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGxhdGVyIHByb2dyZXNzLCB0aGVyZSBhcmUgbWFueSBsaXR0bGUgZmluZS10dW5lIG5lZWRpbmcgYSBxdWljayBkZWNpc2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLiBXaGVuIGVuZ2luZWVycyB3ZXJlIGJ1aWxkaW5nIGl0LCBJIGFscmVhZHkgc2hpZnRlZCBteSBmb2N1cyB0byBvdGhlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzLiBJdCBoZWxwcyB0byByZWNhbGwgdGhlIG1lbW9yeSBmcm9tIGEgY291cGxlIG9mIHNjcmVlbnNob3RzIGFuZCB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNlYXJjaCBzdW1tYXJ5LiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5kb3RBbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNpZ25IaWdobGlnaHRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJvbGRDb250ZW50fT5Vc2VyIGludGVydmlldyB0byBjb2xsZWN0IGluc2lnaHRzJm5ic3A7LSZuYnNwOzwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSByYXJlbHkgaGF2ZSB0aGUgY2hhbmNlIHRvIGNvbmR1Y3QgZm9ybWFsIHVzZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnZpZXdzIGV2ZXJ5IHRpbWUuIEZvciBzdWNoIGEgY29tcGxleCBuZXcgZmVhdHVyZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2Ugc2VhdCBzZWxlY3Rpb24sIGl0IGlzIHVuZG91YnRlZGx5IGhlbHBmdWwgdG8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0IGluc2lnaHRzIGFjcm9zcyB0aGUgdXNlcnMgYXMgbXVjaCBhcyBwb3NzaWJsZS4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGVyZSBhcmUgYWxzbyBjb252aW5jaW5nIHByb29mcyB0byBiYWNrIHVwIGRlc2lnbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2lzaW9ucyBiYXNlZCBvbiByZWFsIHVzZXIgYmVoYXZpb3IuICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RvdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2lnbkhpZ2hsaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYm9sZENvbnRlbnR9PlFBIGVuZ2luZWVycywgdGhlIGhpZGRlbiBmaWd1cmUmbmJzcDstJm5ic3A7PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBtb3N0IHNhdGlzZnlpbmcgZXhwZXJpZW5jZSBJIGhhdmUgZm9yIHRoaXMgcHJvamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzIGJ1aWxkaW5nIGEgc3Ryb25nIHJlbGF0aW9uc2hpcCB3aXRoIFFBIGVuZ2luZWVycy4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VhdCBzZWxlY3Rpb24gaXMgYSBsYXJnZS1zY2FsZSBwcm9qZWN0IHdpdGggbWFueSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmR1c3RyeSBrbm93bGVkZ2UsIGJ1c2luZXNzIGdvYWwsIGFuZCBkZXZlbG9wbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN0cmljdGlvbiB0byBjb25zaWRlci4gSSB3YXMgZ3JhdGVmdWwgZm9yIHRoZSBRQSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmdpbmVlcnMgYmVpbmcgYSB0cnVzdGluZyBtZW1iZXIgb2YgdGhlIHRlYW0uIFRoZSBtb3N0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdGlzZnlpbmcgZXhwZXJpZW5jZSBJIGhhdmUgZm9yIHRoaXMgcHJvamVjdCBpcyBidWlsZGluZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhIHN0cm9uZyByZWxhdGlvbnNoaXAgd2l0aCBRQSBlbmdpbmVlcnMuIFNlYXQgc2VsZWN0aW9uIGlzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgbGFyZ2Utc2NhbGUgcHJvamVjdCB3aXRoIG1hbnkgaW5kdXN0cnkga25vd2xlZGdlLCBidXNpbmVzcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb2FsLCBhbmQgZGV2ZWxvcG1lbnQgcmVzdHJpY3Rpb24gdG8gY29uc2lkZXIuIEkgd2FzIGdyYXRlZnVsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgUUEgZW5naW5lZXJzIGJlaW5nIGEgdHJ1c3RpbmcgbWVtYmVyIG9mIHRoZSB0ZWFtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZG90QWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZG90fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzaWduSGlnaGxpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5ib2xkQ29udGVudH0+QXNrIGZvciBmZWVkYmFjayBmcm9tIHRoZSBlbmdpbmVlcnMmbmJzcDstJm5ic3A7PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvciBhIG1vcmUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV4IG5ldyBmZWF0dXJlLCB3ZSBuZWVkIHRvIGRlc2lnbiBtb3JlIGZlZWRiYWNrIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gc21vb3RoIHRoZSBleHBlcmllbmNlLiBXZSB0aGluayBhYm91dCBtaWNybyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbnMgdG8gZW5oYW5jZSB0aGlzIHBhcnQgdG8gdGhlIHVzZXJzLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbWV0aW1lcywgaWRlYXMgbWlnaHQgZmx5IHRvbyBmYXIgYXdheSBmcm9tIHRoZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvYWwuIEkgYXBwcmVjaWF0ZWQgdGhhdCBvdXIgZW5naW5lZXJzIGFyZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhYm9yYXRlZCB0byBqb2luIHRoZSBkZXNpZ24gZGlzY3Vzc2lvbiBhbmQgc2hhcmUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVkYmFjayBmcm9tIHRoZSB0ZWNobmljYWwgc2lkZS4gV2Ugc2F2ZSBsb3RzIG9mIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZSBvbiBkZWxpdmVyaW5nIGEgdG9vIGZhbmN5IHNvbHV0aW9uIHRoZW4gc3RhcnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyIGFnYWluLiBXaXRoIHRlYW0gY29sbGFib3JhdGlvbiwgd2UgZmluZCBhIGJldHRlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2UgYmV0d2VlbiByZWFsaXN0aWMsIHVzZWZ1bCwgYW5kIGxvdmVseSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbHV0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZG90QWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZG90fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzaWduSGlnaGxpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5ib2xkQ29udGVudH0+VXNlciB0ZXN0aW5nIGZvciBlbmhhbmNlbWVudCZuYnNwOy0mbmJzcDs8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hlbiBpdCB3YXMgY2xvc2UgdG8gdGhlIGxhdGVyIHN0YWdlIG9mIHRoZSBwcm9qZWN0LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlIHN0YXJ0ZWQgV0ZIIGR1ZSB0byBDT1ZJRC0xOS4gVW5mb3J0dW5hdGVseSwgd2UgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZXJlIG5vdCBnZXR0aW5nIHRoZSBjaGFuY2UgdG8gY29uZHVjdCB0aGUgdXNlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3Rpbmcgc2Vzc2lvbiwgd2hpY2ggSSBiZWxpZXZlIHRoYXQgaXQgd2lsbCBiZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cGVyIGhlbHBmdWwgZm9yIGl0ZXJhdGlvbiBhbmQgZnV0dXJlIHBoYXNlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gaXRlbSB4cz17ZmFsc2V9IG1kPXszfT48L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6JzUlJ319PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gbWQ9ezR9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezh9IG1kPXs0fSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMZWFybk1vcmUgc2Nyb2xsWT17NTgwMH0gLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IG1kPXs0fT48L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8UHJvY2VzczAxLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFByb2Nlc3MwMi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxQcm9jZXNzMDMvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6JzYlJ319PlxyXG4gICAgICAgICAgICAgICAgPEJvdHRvbU5hdmJhci8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vY3NzL1dvcmsubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBwcm9jZXNzMDEgZnJvbSAnLi4vLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczAxLnBuZyc7XHJcbmltcG9ydCBwcm9jZXNzMDIgZnJvbSAnLi4vLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczAyLnBuZyc7XHJcbmltcG9ydCBwcm9jZXNzMDMgZnJvbSAnLi4vLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczAzLnBuZyc7XHJcbmltcG9ydCBwcm9jZXNzMDQgZnJvbSAnLi4vLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczA0LnBuZyc7XHJcbmltcG9ydCBwcm9jZXNzMDUgZnJvbSAnLi4vLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczA1LnBuZyc7XHJcbmltcG9ydCBkb3QgZnJvbSAnLi4vLi4vLi4vcHVibGljL2RvdC5wbmcnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJy4uLy4uL1B1YmxpYy9DYXJvdXNlbC5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2VzczAxID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzTWFpbn0+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOic1JSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezh9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9IHN0eWxlPXt7bWFyZ2luVG9wOic4JSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzVGl0bGUxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVEhFIFBST0NFU1MgLyAwMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzVGl0bGUyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVzZWFyY2gsIFVuZGVyc3RhbmQgJiBEZWZpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kb3RMaW5lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgwrcmbmJzcDvCtyZuYnNwO8K3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOic1JSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNpZ25IaWdobGlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDT01QRVRJVElWRSBBTkFMWVNJU1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb21wZXRpdGl2ZUFuYWx5c2lzVGl0bGUyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmVhdHVyZSBDb21wYXJpc29uIHRvIFVuZGVyc3RhbmQgdGhlIEluZHVzdHJ5IFN0YW5kYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbXBldGl0aXZlQW5hbHlzaXNDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXQgdGhlIGJlZ2lubmluZyBvZiB0aGUga2ljay1vZmYsIHdlIGRpZG4ndCByZWNlaXZlIHdlbGwtZGVmaW5lZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZW1lbnRzLCBhbmQgdGhlIGJhY2stZW5kIGVuZ2luZWVycyB3ZXJlIGZpZ3VyaW5nIG91dCB0aGUgZGF0YSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSB0aGUgc3VwcGxpZXJzLiBEZXNpZ25lcnMgc3RhcnRlZCBmcm9tIGJlbmNobWFya2luZyB0byB1bmRlcnN0YW5kIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgZnVuZGFtZW50YWwgZnVuY3Rpb25zIG9mIHNlYXQgc2VsZWN0aW9uLiBCYXNlZCBvbiB0aGUgZmVhdHVyZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyaXNvbiwgSSBub3RlZCBkb3duIHRoZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYm9sZENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7dmFyaW91cyBzY2VuYXJpb3MsIGZlYXR1cmVzLCBmbG93LCBjaGFuY2UgZm9yIG9wdGltaXphdGlvbiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgcG90ZW50aWFsIHJpc2tzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBhcyBhIHN0YXJ0aW5nIHBvaW50IHRvIGV4cGxvcmUgaG93IHdlIGNvdWxkIHNoYXBlIHRoZSBwcm9kdWN0IGFuZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5lIHRoZSBzY29wZSBvZiBNVlAuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ3NyYz17W3Byb2Nlc3MwMSxwcm9jZXNzMDJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXB0aW9uPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTm90ZWQgdGhlIGZlYXR1cmVzIGFjcm9zcyB0aGUgcHJvY2Vzcy4gUHVycGxlIHN0YW5kcyBmb3IgZnVuZGFtZW50YWwgZnVuY3Rpb24sIHllbGxvdyBzdGFuZHMgZm9yIHRoZSB1bmNvbW1vbiB0cmFpdCBjb21wYXJpbmcgdG8gb3RoZXIgcHJvZHVjdHMuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdGcm9tIHNpbXBsZSBzZWxlY3Rpb24gdG8gc3BlY2lmaWMgYXNzaWduaW5nIHNlYXRzLCB0aGVyZSBhcmUgbWFueSBhcHByb2FjaGVzIHRvIGFjaGlldmUgdGhlIG5lZWRzLidcclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOicyJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7bWFyZ2luVG9wOicxMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzaWduSGlnaGxpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSU4tREVQVEggSU5URVJWSUVXXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb21wZXRpdGl2ZUFuYWx5c2lzVGl0bGUyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sbGVjdCBpbnNpZ2h0cyBmcm9tIHVzZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb21wZXRpdGl2ZUFuYWx5c2lzQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpbmNlIGl0IHdhcyBhbiBlbnRpcmVseSBuZXcgZmVhdHVyZSwgYW5kIHdlIHN0aWxsIGhhdmUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVub3VnaCBsZWFkIHRpbWUuIFdlIGRlY2lkZWQgdG8gZG8gdGhlIHVzZXIgaW50ZXJ2aWV3IHRvIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0IG1vcmUgaW5zaWdodHMgZnJvbSB0aGUgcmVhbCB1c2Vycy4gVGhlIHJlc2VhcmNoIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFuLCBkaXNjdXNzaW9uIGd1aWRlcywgYW5kIGFsbCBmaXZlIHNlc3Npb25zIHdlcmUgYWxsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kdWN0ZWQgYnkgdGhlIGRlc2lnbmVycy4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOic0JSd9fT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnJlc2VhcmNoVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSRVNFQVJDSCBHT0FMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlZmluZSB0aGUgc2NvcGUgb2YgTVZQIGluIHRoZSBmaXJzdCBwaGFzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e21hcmdpblRvcDonNSUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucmVzZWFyY2hUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEtFWSBRVUVTVElPTlNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZG90QWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RvdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbGxlY3RJbnNpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hhdCBpcyB0aGUgaW50ZW50aW9uIHRvIHNlbGVjdCBhIHNlYXQ/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZG90QWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RvdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbGxlY3RJbnNpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hhdCBraW5kIG9mIGluZm9ybWF0aW9uIGlzIG5vdCBuZWNlc3NhcnkgdG8gaGVscCB0cmF2ZWxlcnMgbWFrZSBkZWNpc2lvbnM/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoYXQgY2FuIHRoZXkgZG8gd2l0aG91dCB3aGVuIGxvb2tpbmcgYXQgYWxsIHRoZSBjb250ZW50IHRoYXQgaXMgb24gdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZG90QWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RvdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbGxlY3RJbnNpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hhdCBraW5kIG9mIGNvbnNpZGVyYXRpb25zIGdvZXMgaW50byBzZWxlY3RpbmcgdGhlIHNlYXRzP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvciB0aG9zZSBub3Qgc2VsZWN0aW5nIHNlYXRzIGR1cmluZyBib29raW5nLCB3b3VsZCB0aGV5IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNob29zZSBpdCBkdXJpbmcgcG9zdC1ib29raW5nIG9yIG9ubGluZSBjaGVjay1pbj9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5kb3RBbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZG90fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29sbGVjdEluc2lnaHRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdCB3aGljaCBwb2ludCBkdXJpbmcgdGhlIGJvb2tpbmcgd291bGQgdGhlIGN1c3RvbWVyIHByZWZlciB0byBjaG9vc2UgdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXRzP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluIHdoYXQgc2l0dWF0aW9uIHdvdWxkIHRoZSB0cmF2ZWxlcnMgcGF5IGZvciB0aGUgc2VhdHM/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7bWFyZ2luVG9wOic1JSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5yZXNlYXJjaFRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUEFSVElDSVBBTlRTIE9WRVJWSUVXXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvdXIgcGFydGljaXBhbnRzIHByZWZlcnJlZCBib29raW5nIHdpdGggYWlybGluZXMgZGVwZW5kcyBvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgZGVzdGluYXRpb24gYW5kIHRoZSBGcmVxdWVudC1mbHllciBwcm9ncmFtIHRoZXkgaGF2ZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5kb3RBbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZG90fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29sbGVjdEluc2lnaHRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaHJlZSBwYXJ0aWNpcGFudHMgbWVudGlvbmVkIHRoYXQgdGhleSB1c3VhbGx5IGJvb2sgdGhyb3VnaCB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6JzQlJ319PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzMDN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW5MZWZ0OicxJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5pbWdEZXNjcmlwdGlvbjJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSBpbnRlcnZpZXdlZCBieSB2aWRlbyBjYWxsIGR1ZSB0byB3b3JrLWZyb20taG9tZSBwb2xpY3kgd2hlbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIENPVklELTE5IGhpdC4gSXQgaXMgdHJpY2t5IHRvIG9ic2VydmUgYmVoYXZpb3Igb3V0c2lkZSBvZiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIHNjcmVlbiBzaW5jZSBwYXJ0aWNpcGFudHMgb25seSBzaGFyZWQgdGhlaXIgbW9iaWxlIHNjcmVlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6JzUlJ319PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucmVzZWFyY2hUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZJTkQtT1VUU1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5kb3RBbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZG90fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29sbGVjdEluc2lnaHRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGVuIHRoZSBzZWF0IG1hcCBpcyBjbGVhciBlbm91Z2ggaW4gdGVybXMgb2YgaW5mb3JtYXRpb24gYW5kIFVJLCB0aGUgcGFydGljaXBhbnRzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpZG4ndCBwYXkgYXR0ZW50aW9uIHRvIHRoZSBzZWF0IGxlZ2VuZC4gSG93ZXZlciwgaXQgaXMgc3RpbGwgY3JpdGljYWwgdG8gZXhwbGFpbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWZmZXJlbnQgb3B0aW9ucyBpZiB0aGV5IHdhbnQgdG8gY2hlY2sgbW9yZSBkZXRhaWxzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZXkgYWxsIGhhdmUgcHJlY2lzZSBwcmVmZXJlbmNlcyBvbiBzZWF0IHNlbGVjdGlvbjogKDEpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZyb250IChUaGUgdmVyeSBmcm9udCBvZiB0aGUgYXZhaWxhYmxlIG9wdGlvbnMpICgyKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaW5kb3cvQWlzbGUvIE5vIG1pZGRsZSAoMykgTGVncm9vbSAoNCkgRGlzdGFuY2UgdG8gdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvaWxldC9leGl0IChlc3BlY2lhbGx5IGZvciBraWRzIGFuZCBlbGRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5kb3RBbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZG90fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29sbGVjdEluc2lnaHRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgaW50ZW50aW9uIHRvIGNob29zZSBzZWF0cyBkdXJpbmcgYm9va2luZyBpcyB0aGUgc2FtZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgZXZlcnlvbmU6ICgxKSBJZiBmcmVlICgyKSBJZiB0cmF2ZWwgd2l0aCBmYW1pbHkgKGtpZHMsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudHMpIG9yIGZyaWVuZHMgKHNpdCB0b2dldGhlcikgKDMpIExvbmctaGF1bCBmbGlnaHRzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgzLjUgaHJzKykgKDQpIENyb3dkZWQgZmxpZ2h0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoZW4gbGFuZGluZyBvbiB0aGUgc2VsZWN0aW9uIHBhZ2UsIGl0IGFsd2F5cyB0YWtlcyBhIGxvbmcgdGltZSB0aGF0IHNlZW1zIHRvIGhhdmUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Jhc2hlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzUlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnJlc2VhcmNoVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBORVhUIFNURVBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZG90QWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RvdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbGxlY3RJbnNpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFrZSBzdXJlIHRoZSBVSSBvZiB0aGUgc2VhdCBtYXAgaXMgY2xlYXIgZW5vdWdoIHRvIHJlY29nbml6ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoZW4gb2ZmZXJpbmcgdmFyaW91cyBvcHRpb25zIG9mIHNlYXRzLCBkbyBjbGFyaWZ5IHRoZSBkaWZmZXJlbmNlIG9yIGJlbmVmaXRzIG9mIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBzZWF0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1ha2Ugc3VyZSB3ZSBkaXNwbGF5IHRoZSBmaXJzdCBhdmFpbGFibGUgc2VhdCB2aXNpYmxlIHdpdGhvdXQgc2Nyb2xsIHdoZW4gbGFuZGluZyBvbiB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpc3BsYXkgY2xlYXJseSB3aGljaCBzZWF0cyBiZWxvbmcgdG8gd2hpY2ggcGFzc2VuZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZG90QWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RvdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbGxlY3RJbnNpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uc2lkZXIgdGhlIHNwZWNpYWwgcmVxdWVzdCBmb3Igc29tZSBzcGVjaWZpYyB0eXBlcyBvZiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmF2ZWxlciwgc3VjaCBhcyBraWRzLCBlbGRlcmx5LCBidXNpbmVzcyBhbmQgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5kb3RBbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZG90fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29sbGVjdEluc2lnaHRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZW1pbmRlciBmb3Igc2VsZWN0aW5nIHNlYXRzIHdoZW4gaXQncyBmcmVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZG90QWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RvdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbGxlY3RJbnNpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtaW5kZXIgZm9yIGdyb3VwIHRyYXZlbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZG90QWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RvdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbGxlY3RJbnNpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxsb3cgdXNlcnMgdG8gY2hvb3NlIHNlYXRzIGFmdGVyIGJvb2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1ha2Ugc3VyZSB3ZSBkaXNwbGF5IGNsZWFyIGZlZWRiYWNrIGZvciBsb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezN9PjwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOiczJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2VzczA0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e21hcmdpblRvcDonMSUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5pbWdEZXNjcmlwdGlvbjJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCeSBmZWF0dXJlcyBhdWRpdCwgd2Ugb3JnYW5pemVkIHRoZSBwb3RlbnRpYWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVzIGluIHRlcm1zIG9mIGZyZXF1ZW5jeSBhZG9wdGlvbiAoYW1vdW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZiBwZW9wbGUgdXNpbmcgdGhlbSkuIFBvc3QtaXRzIGluIHRoZSBkYXJrIGJsdWUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZWEgd2VyZSB0aGUgYWN0aW9ucyBiZWVuIHVzZWQgYnkgdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudHMgdGhlIG1vc3QuIFdlIGFsc28gY2F0ZWdvcml6ZWQgYWxsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgYmVoYXZpb3JzIGFuZCBpbnNpZ2h0cyBpbnRvIGltcGxlbWVudGF0aW9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFnZXMgYXMgYSBwcmVsaW1pbmFyeSBhbmFseXNpcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e21hcmdpblRvcDonMTAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2lnbkhpZ2hsaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJFU0VBUkNIIFNZTlRIRVNJWkVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbXBldGl0aXZlQW5hbHlzaXNUaXRsZTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWZpbmUgdGhlIEJhcmUgTWluaW11bSBvZiB0aGUgUHJvamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29tcGV0aXRpdmVBbmFseXNpc0NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25zaWRlcmluZyB0aGUgZGVwZW5kZW5jeSBvbiB0aGUgc3VwcGxpZXIgYW5kIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgZGV2ZWxvcG1lbnQgZWZmb3J0LCB3ZSdyZSBsb29raW5nIGZvciB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1WUCB2ZXJzaW9uIG9mIHRoZSBzb2x1dGlvbiB0byByZWR1Y2UgdGhlIHJpc2sgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmluZyBpbXBsZW1lbnRhdGlvbi4gSGVuY2UsIGFmdGVyIHRoZSByZXNlYXJjaCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhhc2UsIHdlIGJyb2tlIGRvd24gYWxsIHRoZSBmZWF0dXJlcyBhbmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVtZW50cyBpbnRvIHBoYXNlZCB0YXNrcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6JzMlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IG1kPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjond2hpdGUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzMDV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDonMTAwJSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOicxJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmltZ0Rlc2NyaXB0aW9uMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIGxpc3RlZCBvdXQgdGhlIHBvdGVudGlhbCBkZXNpZ24gY3JpdGVyaWEgYW5kIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNjdXNzZWQgdGhlIHByb2plY3Qgc2NvcGUgd2l0aCB0aGUgcHJvZHVjdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlci5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezN9PjwvR3JpZD4gXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+ICBcclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vY3NzL1dvcmsubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBwcm9jZXNzMDYgZnJvbSAnLi4vLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczA2LnBuZyc7XHJcbmltcG9ydCBwcm9jZXNzMDcgZnJvbSAnLi4vLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczA3LnBuZyc7XHJcbmltcG9ydCBwcm9jZXNzMDggZnJvbSAnLi4vLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczA4LnBuZyc7XHJcbmltcG9ydCBwcm9jZXNzMDkgZnJvbSAnLi4vLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczA5LnBuZyc7XHJcbmltcG9ydCBwcm9jZXNzMTAgZnJvbSAnLi4vLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczEwLnBuZyc7XHJcbmltcG9ydCBwcm9jZXNzMTEgZnJvbSAnLi4vLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczExLnBuZyc7XHJcbmltcG9ydCBwcm9jZXNzMTIgZnJvbSAnLi4vLi4vLi4vcHVibGljL3Byb2Nlc3MvcHJvY2VzczEyLnBuZyc7XHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAnLi4vLi4vUHVibGljL0Nhcm91c2VsJzs7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2VzczAyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NNYWlufSBzdHlsZT17e3BhZGRpbmdUb3A6JzMlJ319PlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezh9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9IHN0eWxlPXt7bWFyZ2luVG9wOic4JSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzVGl0bGUxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVEhFIFBST0NFU1MgLyAwMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzVGl0bGUyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVzaWduICYgSXRlcmF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRvdExpbmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDCtyZuYnNwO8K3Jm5ic3A7wrdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6JzElJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzEwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNpZ25IaWdobGlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQUkVMSU1JTkFSWSBFWFBMT1JBVElPTlNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbXBldGl0aXZlQW5hbHlzaXNUaXRsZTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFYXJseSBDb25jZXB0cyB0byBHYXRoZXIgRmVlZGJhY2sgYW5kIERpcmVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29tcGV0aXRpdmVBbmFseXNpc0NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgaW50ZXJmYWNlIG1pZ2h0IGJlIHRoZSBtb3N0IGNoYWxsZW5naW5nIHBhcnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mIHRoaXMgcHJvamVjdC4gRm9yIG1vYmlsZSwgaXQgaXMgZXZlbiBoYXJkZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGRpc3BsYXkgc28gbXVjaCBpbmZvcm1hdGlvbiBvbiB0aGUgbGl0dGxlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW55IHNjcmVlbi4gSW4gdGhlIGJlZ2lubmluZywgSSBmb2N1c2VkIG9uIHRoZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mbyBzdHJ1Y3R1cmUgYW5kIHRoZSBvdmVyYWxsIGZsb3cuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOiczJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2VzczA2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOiczJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7bWFyZ2luVG9wOicxMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzaWduSGlnaGxpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgREVTSUdOIElURVJBVElPTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29tcGV0aXRpdmVBbmFseXNpc1RpdGxlMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlZXAgRGl2ZSBpbnRvIHRoZSBEZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb21wZXRpdGl2ZUFuYWx5c2lzQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFmdGVyIGNvbmZpcm1pbmcgdGhlIGZsb3csIEkgcHV0IG1vcmUgZWZmb3J0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRvIHRoZSBleHBsb3JhdGlvbiBvZiB0aGUgc2VsZWN0aW9uIHByb2Nlc3MuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGVyZSBhcmUmbmJzcDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJvbGRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsaWdodCBzZWdtZW50cywgcGFzc2VuZ2VyIHNlbGVjdGlvbiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXQgbGVnZW5kLCBzZWF0IG1hcCwgYW5kIHRoZSBwcmljZSB1cGRhdGUuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIHdlcmUgbG9va2luZyBmb3IgYW4gYXBwcm9hY2ggdG8gbWFrZSB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXkgbW9yZSBkZWxpZ2h0ZnVsIGFuZCBleHBsYWluIGNsZWFyIG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGF0J3MgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHByb2Nlc3MuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDonNSUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9IHN0eWxlPXt7cGFkZGluZ0xlZnQ6JzclJywgcGFkZGluZ1JpZ2h0Oic3JSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbGc9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYWxsZXJ5MX0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicsIG1hcmdpbkJvdHRvbTonMXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvY2VzczA3fSBzdHlsZT17e3dpZHRoOicxMDAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaW1nRGVzY3JpcHRpb24zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25kZW5zZWQgbGVnZW5kIG1ha2VzIHRoZSB3aWRlc3QgZGlzcGxheWluZyBvbiB0aGUgbWFwLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBsZz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbGxlcnkxfSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJywgbWFyZ2luQm90dG9tOicxcmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9jZXNzMDh9IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5pbWdEZXNjcmlwdGlvbjN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhYiBVSSBvbiB0aGUgcGFzc2VuZ2VyIHNlbGVjdGlvbiBtaWdodCBjYXVzZSB0aGUgcHJvYmxlbSBmb3IgZ3JvdXAgdHJhdmVsZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbGc9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYWxsZXJ5MX0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicsIG1hcmdpbkJvdHRvbTonMXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvY2VzczA5fSBzdHlsZT17e3dpZHRoOicxMDAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaW1nRGVzY3JpcHRpb24zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgZGlmZmVyZW50IHN0YXRlIG9mIHBhc3NlbmdlciBzZWxlY3Rpb24gYnV0dG9uIGlzIGhhcmQgdG8gcmVjb2duaXplIGF0IGZpcnN0IGdsYW5jZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBsZz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbGxlcnkxfSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJywgbWFyZ2luQm90dG9tOicxcmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9jZXNzMTB9IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5pbWdEZXNjcmlwdGlvbjN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3dpbmcgaW5pdGlhbCBmb3IgdGhlIHNlbGVjdGVkIHNlYXRpbmcgbWlnaHQgbm90IGJlIGZhbWlsaWFyIHRvIG5vbi1FbmdsaXNoIHNwZWFrZXIgY291bnRyaWVzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOiczJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7bWFyZ2luVG9wOicxMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzaWduSGlnaGxpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRklOQUwgREVTSUdOXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb21wZXRpdGl2ZUFuYWx5c2lzVGl0bGUyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRnJlZSBTZWF0cyBmb3IgTGF1bmNoIGFuZCB0aGUgTmV4dCBQaGFzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29tcGV0aXRpdmVBbmFseXNpc0NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYXNlZCBvbiB0aGUgdGltZWxpbmUgYW5kIHRoZSBkZXZlbG9wbWVudCBlZmZvcnQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZSBkaWQgY29tcHJvbWlzZSB0byBzaW1wbGlmeSB0aGUgcHJvY2VzcyBhcyBtdWNoIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcyBwb3NzaWJsZS4gVGhlIG1vc3QgY2hhbGxlbmdpbmcgcGFydCBtdXN0IGJlIHRoZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29yc3QgY2FzZSBmb3IgbXVsdGlwbGUgc2VnbWVudHMgYW5kIG11bHRpcGxlIHN0b3BzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGlnaHQuIFRoZSBkZXNpZ24gYWxzbyBzaG91bGQgYmUgc2NhbGFibGUgdG8gdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWlkIG9wdGlvbnMuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ3NyYz17W3Byb2Nlc3MxMSxwcm9jZXNzMTJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXB0aW9uPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnV2UgaW1wbGVtZW50ZWQgdGhlIGZyZWUgc2VsZWN0aW9uIHdoZW4gbGF1bmNoZWQuIENvbnNpZGVyaW5nIHRoZSBwYWlkIG9wdGlvbiBpcyBjb21pbmcgbGF0ZXIsIGl0IHdhcyBjcml0aWNhbCB0byBkZXNpZ24gdGhlIHByb2Nlc3Mgd2l0aCBpdCBpbiBtaW5kLicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29tcGFyZWQgdG8gdGhlIGluaXRpYWwgZmxvdywgaXQgY2FtZSBvdXQgdG8gYSBzb3BoaXN0aWNhdGVkIGZsb3cgd2l0aCB2YXJpYXRpb25zIGZvciBkaWZmZXJlbnQgY2FzZXMgYWZ0ZXIgaW52b2x2ZWQgaW4gdGhlIGVuZ2luZWVycy4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9jc3MvV29yay5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHByb2Nlc3MxMyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvcHJvY2Vzcy9wcm9jZXNzMTMucG5nJztcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9jZXNzMDMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc01haW59IHN0eWxlPXt7cGFkZGluZ1RvcDonMyUnLCBwYWRkaW5nQm90dG9tOic4JSd9fT5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs4fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fSBzdHlsZT17e21hcmdpblRvcDonOCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc1RpdGxlMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRIRSBQUk9DRVNTIC8gMDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc1RpdGxlMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV2YWx1YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZG90TGluZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIMK3Jm5ic3A7wrcmbmJzcDvCt1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e21hcmdpblRvcDonMyUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e21hcmdpblRvcDonMTAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2lnbkhpZ2hsaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRFQ0hOSUNBTCBSRVZJRVdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbXBldGl0aXZlQW5hbHlzaXNUaXRsZTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWZpbmUgdGhlIGRldGFpbHMgdG8gY2xvc2UgdGhlIGdhcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29tcGV0aXRpdmVBbmFseXNpc0NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGVuIHdlIGltcGxlbWVudGVkIHRoZSBwcm9qZWN0LCB0aGVyZSB3ZXJlIG1vcmUgaXNzdWVzIHRvIHJlY29nbml6ZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSB0aGUgc3VwcGxpZXIuIEl0IGlzIGhhcmQgdG8gdW5kZXJzdGFuZCBhbGwgdGhlIHRlY2huaWNhbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RyYWludHMgYW5kIGRlZmluZSB0aGUgc29sdXRpb24gYWNjb3JkaW5nbHkuIFRoZXJlZm9yZSwgd2Ugd29ya2VkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZWx5IHdpdGggdGhlIFFBIGVuZ2luZWVycyBhdCB0aGUgbGFzdCBtaWxlIHRvIHByZXBhcmUgYWxsIHRoZSB3b3JzZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmFyaW9zLiBJIGFwcHJlY2lhdGVkIHRoZWlyIGVmZm9ydCB0byBiZSB0aGUgYnJpZGdlIGJldHdlZW4gdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNpZ25lciwgZGV2ZWxvcGVyLCBidXNpbmVzcyBpbnNpZ2h0LCBhbmQgcHJvdmlkZSBzdWdnZXN0aW9ucyBhdCBiYWxhbmNlLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOiczJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2VzczEzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e21hcmdpblRvcDonMSUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaW1nRGVzY3JpcHRpb24yfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQSBjb21wbGV0ZWQgZXhjZWwgdG8gbGlzdCBkb3duIGFsbCB0aGUgQ01TIGFjcm9zcyB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtcyB3YWl0aW5nIGZvciB0cmFuc2xhdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6JzMlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzEwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNpZ25IaWdobGlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPVVRDT01FXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb21wZXRpdGl2ZUFuYWx5c2lzVGl0bGUyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9yZSB0byBiZSB1cGRhdGVkLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb21wZXRpdGl2ZUFuYWx5c2lzQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBwcm9qZWN0IGlzIHN0aWxsIGltcGxlbWVudGluZywgcGVyZm9ybWFuY2UgcmVzdWx0IHdpbGwgYmUgdXBkYXRlZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJ3YXJkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9jc3MvV29yay5tb2R1bGUuY3NzJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgSW5wdXRBZG9ybm1lbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnQnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IEFycm93Rm9yd2FyZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93Rm9yd2FyZCc7XHJcbmltcG9ydCB7IEFnb2RhRmxpZ2h0cyB9IGZyb20gJy4vQWdvZGFGbGlnaHRzLmpzJztcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1B1YmxpYy9IZWFkZXIuanMnO1xyXG5cclxuY2xhc3MgU2VjdXJlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCJcIixcclxuICAgICAgICAgICAgaXNQYXNzOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGVCeU5hbWUgPSB0aGlzLnNldFN0YXRlQnlOYW1lLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZWN1cnNpdmVSZXBsYWNlVmFsdWVCeU5hbWUgPSB0aGlzLnJlY3Vyc2l2ZVJlcGxhY2VWYWx1ZUJ5TmFtZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UoZSxjYWxsQmFjayxudWxsVmFsdWU9bnVsbCkge1xyXG4gICAgICAgIGNvbnN0IHt2YWx1ZSwgbmFtZX0gPSBlLnRhcmdldDtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxCYWNrICE9PVwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgIGNhbGxCYWNrID0gZnVuY3Rpb24oKSB7fVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlQnlOYW1lKG5hbWUsIHZhbHVlIT09XCJcIj92YWx1ZTpudWxsLCBjYWxsQmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdGVCeU5hbWUobmFtZSwgdmFsdWUsIGNhbGxCYWNrKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbihwcmV2U3RhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVjdXJzaXZlUmVwbGFjZVZhbHVlQnlOYW1lKG5hbWUsIHByZXZTdGF0ZSwgdmFsdWUpO1xyXG4gICAgICAgIH0sY2FsbEJhY2spXHJcbiAgICB9XHJcblxyXG4gICAgcmVjdXJzaXZlUmVwbGFjZVZhbHVlQnlOYW1lKG5hbWUsb2JqZWN0LHZhbHVlKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBrZXlzQXJyID0gbmFtZS5yZXBsYWNlKC9cXFsvZyxcIi5cIikucmVwbGFjZSgvXFxdL2csXCJcIikuc3BsaXQoXCIuXCIpO1xyXG5cclxuICAgICAgICB2YXIgdGFyZ2V0ID0gb2JqZWN0O1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXNBcnIubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQga2V5ID0ga2V5c0FycltpXTtcclxuICAgICAgICAgICAgaWYgKCF0YXJnZXQuaGFzT3duUHJvcGVydHkoa2V5KSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaSA9PSBrZXlzQXJyLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldFtrZXldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdWJtaXQoKSB7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5wYXNzd29yZCA9PSAnMjAxODA4MDEnKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICAgICAgICAgIGlzUGFzczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCJcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzc2FnZTogJ0VudGVyIENvcnJlY3QgUGFzc3dvcmQnfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBoYW5kbGVEcmF3ZXJPcGVuXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNQYXNzID09IGZhbHNlP1xyXG5cclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURyYXdlck9wZW49e2hhbmRsZURyYXdlck9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWN1cmUgYXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIGFzayB0aGUgcGFzc3dvcmQgZm9yIHBlcm1pc3Npb24uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLnBhc3N3b3JkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gc209ezZ9IG1kPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGUua2V5Q29kZSA9PT0gMTMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93Rm9yd2FyZEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e3NocmluazogZmFsc2V9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+OiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNQYXNzID09IHRydWU/XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRHJhd2VyT3Blbj17aGFuZGxlRHJhd2VyT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZ29kYUZsaWdodHMvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDpcIlwifVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3VyZTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXJvdXNlbE91dGVyXCI6IFwiUHVibGljX2Nhcm91c2VsT3V0ZXJfXzJtWl9kXCIsXG5cdFwiaW1nRGVzY3JpcHRpb25cIjogXCJQdWJsaWNfaW1nRGVzY3JpcHRpb25fX094WWJRXCIsXG5cdFwiY2Fyb3VzZWxJbWdcIjogXCJQdWJsaWNfY2Fyb3VzZWxJbWdfXzF3TDNUXCIsXG5cdFwiY2FwdGlvbkNvbnRhaW5lclwiOiBcIlB1YmxpY19jYXB0aW9uQ29udGFpbmVyX19haTE2cVwiLFxuXHRcImRyYXdlclRpdGxlXCI6IFwiUHVibGljX2RyYXdlclRpdGxlX18tTEVTOFwiLFxuXHRcImxpbmtcIjogXCJQdWJsaWNfbGlua19fMjgxZEdcIixcblx0XCJkcmF3ZXJCdXR0b25cIjogXCJQdWJsaWNfZHJhd2VyQnV0dG9uX19fVUZyLVwiLFxuXHRcIm1haW4xXCI6IFwiUHVibGljX21haW4xX181d0M4NlwiLFxuXHRcInRpdGxlXCI6IFwiUHVibGljX3RpdGxlX19feDFWY1wiLFxuXHRcIm1lbnVCYXJcIjogXCJQdWJsaWNfbWVudUJhcl9fMzNLWHpcIixcblx0XCJmb290ZXJCbG9ja1wiOiBcIlB1YmxpY19mb290ZXJCbG9ja19fenFBNVpcIixcblx0XCJmb290ZXJCbG9jazJcIjogXCJQdWJsaWNfZm9vdGVyQmxvY2syX18yR1QxeVwiLFxuXHRcImZvb3RlclRpdGxlXCI6IFwiUHVibGljX2Zvb3RlclRpdGxlX19GT2ZMbVwiLFxuXHRcImNvcHlyaWdodFwiOiBcIlB1YmxpY19jb3B5cmlnaHRfXzNJUmYyXCIsXG5cdFwiZm9vdGVyTGVmdFRpdGxlXCI6IFwiUHVibGljX2Zvb3RlckxlZnRUaXRsZV9fMXIxQTJcIixcblx0XCJmb290ZXJMZWZ0Q29udGVudFwiOiBcIlB1YmxpY19mb290ZXJMZWZ0Q29udGVudF9fM2pVUldcIixcblx0XCJiYWxsXCI6IFwiUHVibGljX2JhbGxfXzNTdnhGXCIsXG5cdFwiYm91bmNlXCI6IFwiUHVibGljX2JvdW5jZV9fMmd0LUpcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJXb3JrX21haW5fX005bWI3XCIsXG5cdFwidGl0bGVcIjogXCJXb3JrX3RpdGxlX18zM3FMOFwiLFxuXHRcInNob3djYXNlQm94XCI6IFwiV29ya19zaG93Y2FzZUJveF9fMjR6dk1cIixcblx0XCJpbWdcIjogXCJXb3JrX2ltZ19fMW81dVFcIixcblx0XCJ0aXRsZU9uSG92ZXJcIjogXCJXb3JrX3RpdGxlT25Ib3Zlcl9fMjJLODBcIixcblx0XCJ0aXRsZTJPbkhvdmVyXCI6IFwiV29ya190aXRsZTJPbkhvdmVyX18zbVdRS1wiLFxuXHRcImNhcEltYWdlXCI6IFwiV29ya19jYXBJbWFnZV9fM0pPaXZcIixcblx0XCJmYWRlSW5cIjogXCJXb3JrX2ZhZGVJbl9fR3d2RG1cIixcblx0XCJ0aXRsZTJcIjogXCJXb3JrX3RpdGxlMl9fWE1nLWdcIixcblx0XCJ0aXRsZTNcIjogXCJXb3JrX3RpdGxlM19fMU1SZW5cIixcblx0XCJ0aXRsZTRcIjogXCJXb3JrX3RpdGxlNF9fVHViMWpcIixcblx0XCJhcnRpY2xlXCI6IFwiV29ya19hcnRpY2xlX18xSk5USFwiLFxuXHRcImNvbnRlbnRcIjogXCJXb3JrX2NvbnRlbnRfXzMwTGppXCIsXG5cdFwiY29udGVudFRpdGxlXCI6IFwiV29ya19jb250ZW50VGl0bGVfXzFYZWFzXCIsXG5cdFwiY29udGVudERldGFpbFwiOiBcIldvcmtfY29udGVudERldGFpbF9fMjRPUFZcIixcblx0XCJkb3RMaW5lXCI6IFwiV29ya19kb3RMaW5lX18ybU5uOFwiLFxuXHRcImRlc2lnbkhpZ2hsaWdodFwiOiBcIldvcmtfZGVzaWduSGlnaGxpZ2h0X18xWkwybVwiLFxuXHRcImRlc2lnbkhpZ2hsaWdodFRpdGxlXCI6IFwiV29ya19kZXNpZ25IaWdobGlnaHRUaXRsZV9fMjBhVF9cIixcblx0XCJkZXNpZ25IaWdobGlnaHRDb250ZW50XCI6IFwiV29ya19kZXNpZ25IaWdobGlnaHRDb250ZW50X19haDRMUlwiLFxuXHRcImJvbGRDb250ZW50XCI6IFwiV29ya19ib2xkQ29udGVudF9fMTV3NjJcIixcblx0XCJnYWxsZXJ5MVwiOiBcIldvcmtfZ2FsbGVyeTFfXzNJbC0zXCIsXG5cdFwiaW1nRGVzY3JpcHRpb25cIjogXCJXb3JrX2ltZ0Rlc2NyaXB0aW9uX18xOGNWcVwiLFxuXHRcImltZ0Rlc2NyaXB0aW9uTGlua1wiOiBcIldvcmtfaW1nRGVzY3JpcHRpb25MaW5rX18zN2U5TVwiLFxuXHRcInJlZmxlY3Rpb25cIjogXCJXb3JrX3JlZmxlY3Rpb25fX1M5ZVlwXCIsXG5cdFwiZG90QWxpZ25cIjogXCJXb3JrX2RvdEFsaWduX18xUFJtRlwiLFxuXHRcInNjcm9sbERvd25cIjogXCJXb3JrX3Njcm9sbERvd25fXzNsckRKXCIsXG5cdFwicHJvZ3Jlc3NNYWluXCI6IFwiV29ya19wcm9ncmVzc01haW5fXzJmclFpXCIsXG5cdFwicHJvZ3Jlc3NUaXRsZTFcIjogXCJXb3JrX3Byb2dyZXNzVGl0bGUxX18zMW1VSFwiLFxuXHRcInByb2dyZXNzVGl0bGUyXCI6IFwiV29ya19wcm9ncmVzc1RpdGxlMl9fM1Y5TnNcIixcblx0XCJjb21wZXRpdGl2ZUFuYWx5c2lzVGl0bGUxXCI6IFwiV29ya19jb21wZXRpdGl2ZUFuYWx5c2lzVGl0bGUxX18yOXNTZFwiLFxuXHRcImNvbXBldGl0aXZlQW5hbHlzaXNUaXRsZTJcIjogXCJXb3JrX2NvbXBldGl0aXZlQW5hbHlzaXNUaXRsZTJfX2FuQWFlXCIsXG5cdFwiY29tcGV0aXRpdmVBbmFseXNpc0NvbnRlbnRcIjogXCJXb3JrX2NvbXBldGl0aXZlQW5hbHlzaXNDb250ZW50X18yVVZLV1wiLFxuXHRcImltZ0Rlc2NyaXB0aW9uMlwiOiBcIldvcmtfaW1nRGVzY3JpcHRpb24yX18zOE90aFwiLFxuXHRcInJlc2VhcmNoVGl0bGVcIjogXCJXb3JrX3Jlc2VhcmNoVGl0bGVfXzN4RjBuXCIsXG5cdFwiY29sbGVjdEluc2lnaHRDb250ZW50XCI6IFwiV29ya19jb2xsZWN0SW5zaWdodENvbnRlbnRfXzFvN1lqXCIsXG5cdFwicHJvY2VzczJJbWdcIjogXCJXb3JrX3Byb2Nlc3MySW1nX18zM3I4UFwiLFxuXHRcImltZ0Rlc2NyaXB0aW9uM1wiOiBcIldvcmtfaW1nRGVzY3JpcHRpb24zX19vMXB5ZFwiLFxuXHRcImltZ0Jsb2NrXCI6IFwiV29ya19pbWdCbG9ja19fMTF4UlpcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIldvcmtfZGVzY3JpcHRpb25fX3Jvc0ZWXCIsXG5cdFwicGFzc3dvcmRcIjogXCJXb3JrX3Bhc3N3b3JkX18zeXBVb1wiLFxuXHRcImhlYWRlclwiOiBcIldvcmtfaGVhZGVyX18zaDE1X1wiLFxuXHRcImltZzAxXCI6IFwiV29ya19pbWcwMV9fb1RqUEZcIixcblx0XCJiYW5uZXJJbWdcIjogXCJXb3JrX2Jhbm5lckltZ19fMUNnOEhcIixcblx0XCJmb290ZXJcIjogXCJXb3JrX2Zvb3Rlcl9fMXdPdE5cIixcblx0XCJkZXNpZ25Db250ZW50XCI6IFwiV29ya19kZXNpZ25Db250ZW50X18yenpHV1wiLFxuXHRcImRlc2lnblRpdGxlXCI6IFwiV29ya19kZXNpZ25UaXRsZV9fM04tZkZcIixcblx0XCJjYXB0aW9uXCI6IFwiV29ya19jYXB0aW9uX18zaWxqeVwiLFxuXHRcImdpZ2JpcmRDYXB0aW9uXCI6IFwiV29ya19naWdiaXJkQ2FwdGlvbl9fMkdlcXlcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9QdWJsaWMvRm9vdGVyLmpzJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9jc3MvV29yay5tb2R1bGUuY3NzJztcclxuaW1wb3J0IFNlY3VyZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvV29yay9BZ29kYS1mbGlnaHRzL1NlY3VyZS5qcyc7XHJcbmltcG9ydCB7IERyYXdlciB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9QdWJsaWMvRHJhd2VyLmpzJztcclxuaW1wb3J0IHsgU2Nyb2xsdXAgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvUHVibGljL1Njcm9sbHVwLmpzJzsgXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgeyBQYWdlTG9hZGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1B1YmxpYy9QYWdlTG9hZGVyLmpzJztcclxuXHJcbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2RyYXdlciwgc2V0RHJhd2VyXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEcmF3ZXJPcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIHNldERyYXdlcih0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVEcmF3ZXJDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXREcmF3ZXIoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgICAge2RyYXdlciA9PSBmYWxzZSA/XHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPFBhZ2VMb2FkZXIvPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWN1cmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURyYXdlck9wZW49e2hhbmRsZURyYXdlck9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e3RvcDonOTAlJyxwb3NpdGlvbjonZml4ZWQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezh9IHNtPXs5fSBtZD17OX0gbGc9ezEwfSB4bD17MTB9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezJ9IG1kPXsyfSBsZz17MX0geGw9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNjcm9sbHVwLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDonJ31cclxuXHJcbiAgICAgICAgICAgIHtkcmF3ZXIgPT0gdHJ1ZSA/XHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjonIzFmMWYxZid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRHJhd2VyQ2xvc2U9e2hhbmRsZURyYXdlckNsb3NlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDonJ31cclxuXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuXHJcblxyXG4gIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ZsaWdodC1oZWFkZXItNWIyZDNlMWY4M2U5Nzc4NjI3OTEyNzU1ZTgyOTI3MmEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ZsaWdodHMwMi1lNmFiZjdiNGY3ZDNhNDNjZTQzNTY0Yzg5MGYxMjgxZS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZmxpZ2h0czAzLTQzMzY4ODM2MTE1ZWZjN2MyY2RiYTM2YmNlYWEyMmU5LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9mbGlnaHRzMDQtNGJmNzFhMjM2MmY4NTYyZTQxOTY1MjM5NTViZTY1ODMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFCd1NVUkJWSGdCZlk5UkRZQXdERVRYOHNQZjVtQklBRWs0QUVWWUFBYzRBQWxJcUlOeUpWdENTTXBMYmxsNnQrVktBWFJBVlJkY2V5aEJLeEhORjZCaUhzVjRJd2dOVFl5eHZ2elMycHh5emhwOGhPMzRDU1FMbko2TGJodWp5T2o4SXN3ODhiTUsydHBxMVlCMm01bDNBM2htSkErVjFtcDBBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZmxpZ2h0LTFiNzAyNGQ3MTdmZmE4NTI4MTllZGE1NTk0MjBiOGFjLmdpZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9wcm9jZXNzMDEtZDU3YzBlNDY3ZDk2YWFjOTBjYjM4MTEwM2VlNzkxMzMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Byb2Nlc3MwMi1lYmZhMTYxODg0NzVmODc4ZGZiODAyMzRlYjJhNDQzMi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcHJvY2VzczAzLWZjYjhiYmYzNWUyOGU4YjFmNWY4MTI2YWU1YTI1NDRjLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9wcm9jZXNzMDQtNjRjZjRlNTBlNWVmMDkxOTQ2OTQ3ZDMxMWFhOTNhYWUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Byb2Nlc3MwNS05OGE5Y2I5MzA0Yzg1MWVkMjk5NTgxM2ZhOTM4YTA5My5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcHJvY2VzczA2LTdkMzRjZGRiNmRmNzI0ZmE5MDU3ZDA1NWMzNTUyZDljLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9wcm9jZXNzMDctMjA5NzdiM2JmMTk1N2VkOWVlOTMyNzBjYTdmYzA2NDkucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Byb2Nlc3MwOC1iMmZiYjI3OThjYTkzNWY4YmI2ZTZlMzU1Mjk1ZGUzOS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcHJvY2VzczA5LTA1ZmIyODZjZWQ1MmUyYjJmZDJlNDQ3MjE3ODMwMzViLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9wcm9jZXNzMTAtOTI4NTg4ZmUwNzk2NGNiNTBmM2ZjZWM2MjQxNTUzMWIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Byb2Nlc3MxMS0zYjc2NjdjNDZmN2YzOGY4YjYyNzhkZDc0ZjFmNjVhZS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcHJvY2VzczEyLTFjZDNhNzM1NWNjZjk2N2U5Njc3ODM1YTg0ODg0MjI1LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9wcm9jZXNzMTMtN2FkMzdjNjczYjQwOTkyZDdmMWVlNjdkMjgyOGRhNjcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93RG93bndhcmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93Rm9yd2FyZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9wLWxvYWRpbmctYmFyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=