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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/Home/Banner.js":
/*!**********************************!*\
  !*** ./component/Home/Banner.js ***!
  \**********************************/
/*! exports provided: Banner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return Banner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/Home.module.css */ "./css/Home.module.css");
/* harmony import */ var _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Home\\Banner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Banner = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.banner,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }, "I am Salie, a product designer who strives to make people enjoy the digital world."))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 1,
    style: {
      marginTop: "2%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.banner2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, "Currently work at Agoda based in Bangkok."))));
};

/***/ }),

/***/ "./component/Home/Funfacts.js":
/*!************************************!*\
  !*** ./component/Home/Funfacts.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/Home.module.css */ "./css/Home.module.css");
/* harmony import */ var _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_fun_fact_funFact01_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/fun-fact/funFact01.png */ "./public/fun-fact/funFact01.png");
/* harmony import */ var _public_fun_fact_funFact01_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_fun_fact_funFact01_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_fun_fact_funFact02_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/fun-fact/funFact02.png */ "./public/fun-fact/funFact02.png");
/* harmony import */ var _public_fun_fact_funFact02_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_fun_fact_funFact02_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_fun_fact_funFact03_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/fun-fact/funFact03.png */ "./public/fun-fact/funFact03.png");
/* harmony import */ var _public_fun_fact_funFact03_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_fun_fact_funFact03_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_fun_fact_funFact04_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/fun-fact/funFact04.png */ "./public/fun-fact/funFact04.png");
/* harmony import */ var _public_fun_fact_funFact04_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_fun_fact_funFact04_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_fun_fact_funFact05_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/fun-fact/funFact05.png */ "./public/fun-fact/funFact05.png");
/* harmony import */ var _public_fun_fact_funFact05_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_fun_fact_funFact05_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_fun_fact_funFact06_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/fun-fact/funFact06.png */ "./public/fun-fact/funFact06.png");
/* harmony import */ var _public_fun_fact_funFact06_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_fun_fact_funFact06_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Home\\Funfacts.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











class Funfacts extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryState: 0,
      boxHeight: '300px',
      funFactImg: 0
    };
    this.handleFunFactImgEnter1 = this.handleFunFactImgEnter1.bind(this);
    this.handleFunFactImgEnter2 = this.handleFunFactImgEnter2.bind(this);
    this.handleFunFactImgEnter3 = this.handleFunFactImgEnter3.bind(this);
    this.handleFunFactImgEnter4 = this.handleFunFactImgEnter4.bind(this);
    this.handleFunFactImgEnter5 = this.handleFunFactImgEnter5.bind(this);
    this.handleFunFactImgLeave = this.handleFunFactImgLeave.bind(this);
  }

  handleFunFactImgEnter1() {
    this.setState({
      funFactImg: 1
    });
  }

  handleFunFactImgEnter2() {
    this.setState({
      funFactImg: 2
    });
  }

  handleFunFactImgEnter3() {
    this.setState({
      funFactImg: 3
    });
  }

  handleFunFactImgEnter4() {
    this.setState({
      funFactImg: 4
    });
  }

  handleFunFactImgEnter5() {
    this.setState({
      funFactImg: 5
    });
  }

  handleFunFactImgLeave() {
    this.setState({
      funFactImg: 0
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      container: true,
      spacing: 1,
      style: {
        marginTop: "6%"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 1,
      sm: 2,
      xl: 5,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 10,
      sm: 8,
      xl: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }
    }, __jsx("h1", {
      className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.funFactsTitle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 25
      }
    }, "Fun Facts")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 10,
      sm: 2,
      xl: 5,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      container: true,
      spacing: 1,
      style: {
        marginTop: "2%"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 8,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 21
      }
    }, __jsx("p", {
      className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.funFactsContent,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 25
      }
    }, "Work abroad is not my plan initially, but travel abroad does. During the transition period in 2018, I spent a month traveling in", __jsx("span", {
      style: {
        color: '#8F8F8F'
      },
      onMouseEnter: this.handleFunFactImgEnter1,
      onMouseLeave: this.handleFunFactImgLeave,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 29
      }
    }, "\xA0#Kyoto\xA0"), ", which is my favorite city (so far) and took an 8-hour bus to", __jsx("span", {
      style: {
        color: '#8F8F8F'
      },
      onMouseEnter: this.handleFunFactImgEnter2,
      onMouseLeave: this.handleFunFactImgLeave,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 29
      }
    }, "\xA0#Tokyo\xA0"), "to stay another week. I love exploring the world and also my home country", __jsx("span", {
      style: {
        color: '#8F8F8F'
      },
      onMouseEnter: this.handleFunFactImgEnter3,
      onMouseLeave: this.handleFunFactImgLeave,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 29
      }
    }, "\xA0#Taiwan\xA0"), ", where nature is easily accessible. When I was at college, I applied for the travel & experience program to work as a", __jsx("span", {
      style: {
        color: '#8F8F8F'
      },
      onMouseEnter: this.handleFunFactImgEnter4,
      onMouseLeave: this.handleFunFactImgLeave,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 29
      }
    }, "\xA0#RideOperator\xA0"), "in an amusement park in Pennsylvania, the U.S.A. And now I just moved to", __jsx("span", {
      style: {
        color: '#8F8F8F'
      },
      onMouseEnter: this.handleFunFactImgEnter5,
      onMouseLeave: this.handleFunFactImgLeave,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 29
      }
    }, "\xA0#Bangkok\xA0"), "for 1.5 years, the adventure keeps moving on...")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 21
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      container: true,
      spacing: 1,
      style: {
        marginTop: "2%"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 2,
      md: 4,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 8,
      md: 4,
      className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.buttonKnowMoreAboutMe,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "/About",
      className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.viewLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 25
      }
    }, "KNOW MORE ABOUT ME")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 2,
      md: 4,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 21
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      container: true,
      spacing: 3,
      style: {
        marginTop: "2%"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 8,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      container: true,
      spacing: 3,
      style: {
        marginTop: "2%"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 12,
      md: 5,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      container: true,
      spacing: 4,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: this.state.funFactImg == 3 || this.state.funFactImg == 0 ? _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.funFactImgOnHover : _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.funFactImg,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 41
      }
    }, __jsx("img", {
      src: _public_fun_fact_funFact01_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      style: {
        width: '100%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 45
      }
    })), __jsx("div", {
      className: this.state.funFactImg == 1 || this.state.funFactImg == 0 ? _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.funFactImgOnHover : _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.funFactImg,
      style: {
        marginTop: '1.5rem'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 41
      }
    }, __jsx("img", {
      src: _public_fun_fact_funFact03_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      style: {
        width: '100%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 45
      }
    }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: this.state.funFactImg == 4 || this.state.funFactImg == 0 ? _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.funFactImgOnHover : _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.funFactImg,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 41
      }
    }, __jsx("img", {
      src: _public_fun_fact_funFact02_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      style: {
        width: "100%"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 45
      }
    })), __jsx("div", {
      className: this.state.funFactImg == 2 || this.state.funFactImg == 0 ? _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.funFactImgOnHover : _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.funFactImg,
      style: {
        marginTop: '1.5rem'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 41
      }
    }, __jsx("img", {
      src: _public_fun_fact_funFact04_png__WEBPACK_IMPORTED_MODULE_6___default.a,
      style: {
        width: "100%"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 45
      }
    }))))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
      smDown: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 12,
      md: 4,
      style: {
        textAlign: 'center'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: this.state.funFactImg == 1 || this.state.funFactImg == 0 ? _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.funFactImgOnHover : _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.funFactImg,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: _public_fun_fact_funFact05_png__WEBPACK_IMPORTED_MODULE_7___default.a,
      style: {
        width: '92%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 41
      }
    }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 12,
      md: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: this.state.funFactImg == 5 || this.state.funFactImg == 0 ? _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.funFacrImgOnHover : _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.funFactImg,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: _public_fun_fact_funFact06_png__WEBPACK_IMPORTED_MODULE_8___default.a,
      style: {
        width: '126%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 41
      }
    })))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
      mdUp: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 12,
      md: 4,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: this.state.funFactImg == 1 || this.state.funFactImg == 0 ? _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.funFactImgOnHover : _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.funFactImg,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: _public_fun_fact_funFact05_png__WEBPACK_IMPORTED_MODULE_7___default.a,
      style: {
        width: '100%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 41
      }
    }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 12,
      md: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: this.state.funFactImg == 5 || this.state.funFactImg == 0 ? _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.funFacrImgOnHover : _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.funFactImg,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: _public_fun_fact_funFact06_png__WEBPACK_IMPORTED_MODULE_8___default.a,
      style: {
        width: '100%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 41
      }
    })))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 21
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Funfacts);

/***/ }),

/***/ "./component/Home/Showcase.js":
/*!************************************!*\
  !*** ./component/Home/Showcase.js ***!
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
/* harmony import */ var _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/Home.module.css */ "./css/Home.module.css");
/* harmony import */ var _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_agoda_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/agoda-logo.png */ "./public/agoda-logo.png");
/* harmony import */ var _public_agoda_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_agoda_logo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_showcase_showcase01_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/showcase/showcase01.png */ "./public/showcase/showcase01.png");
/* harmony import */ var _public_showcase_showcase01_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_showcase_showcase01_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_showcase_showcase02_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/showcase/showcase02.png */ "./public/showcase/showcase02.png");
/* harmony import */ var _public_showcase_showcase02_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_showcase_showcase02_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_showcase_showcase03_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/showcase/showcase03.png */ "./public/showcase/showcase03.png");
/* harmony import */ var _public_showcase_showcase03_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_showcase_showcase03_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_showcase_showcase04_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/showcase/showcase04.png */ "./public/showcase/showcase04.png");
/* harmony import */ var _public_showcase_showcase04_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_showcase_showcase04_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_showcase_showcase05_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/showcase/showcase05.png */ "./public/showcase/showcase05.png");
/* harmony import */ var _public_showcase_showcase05_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_showcase_showcase05_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Home\\Showcase.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])({
  imgBox: {
    backgroundColor: '#F5F5F5',
    height: '30rem',
    width: '100%',
    overflow: 'hidden'
  },
  imgBoxOnHover: {
    backgroundColor: '#1F1F1F',
    opacity: '100%',
    height: '30rem',
    width: '100%',
    overflow: 'hidden',
    transition: '.4s ease-in-out'
  },
  img1: {
    opacity: '0%'
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

  const handleMouseLeave = () => {
    setBox1(true);
    setBox2(true);
    setBox3(true);
    setBox4(true);
    setBox5(true);
    setBox6(true);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/Work/Agoda-design",
    underline: "none",
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: box1 === true ? classes.imgBox : classes.imgBoxOnHover,
    onMouseEnter: handleBox1On,
    onMouseLeave: handleMouseLeave,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  }, box1 === true ? '' : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.titleOnHover,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 37
    }
  }, "2019/20 \u2022 Agoda Design"), __jsx("p", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title2OnHover,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 37
    }
  }, "An exciting adventure in Bangkok and travel industry")), box1 === true ? __jsx("img", {
    src: _public_agoda_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    className: box1 === true ? '' : classes.img1,
    style: {
      marginTop: '10rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 33
    }
  }) : ''))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/Work/Agoda-flights",
    underline: "none",
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: box2 === true ? classes.imgBox : classes.imgBoxOnHover,
    onMouseEnter: handleBox2On,
    onMouseLeave: handleMouseLeave,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }, box2 === true ? '' : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.titleOnHover,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 37
    }
  }, "2020 \u2022 Agoda Flights \u2022 App Design"), __jsx("p", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title2OnHover,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 37
    }
  }, "Complete your journey with seat selection")), box2 === true ? __jsx("img", {
    src: _public_showcase_showcase01_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    className: box2 === true ? '' : classes.img1,
    style: {
      marginTop: '10rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 33
    }
  }) : '')))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    className: classes.showcaseBlock,
    spacing: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/Work/Kinjo",
    underline: "none",
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: box3 === true ? classes.imgBox : classes.imgBoxOnHover,
    onMouseEnter: handleBox3On,
    onMouseLeave: handleMouseLeave,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 25
    }
  }, box3 === true ? '' : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.titleOnHover,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 37
    }
  }, "2018 \u2022 KINJO Jewelry \u2022 Web Design"), __jsx("p", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title2OnHover,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 37
    }
  }, "An e-commerce site brings a 12-year brand a new life")), box3 === true ? __jsx("img", {
    src: _public_showcase_showcase02_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    className: box3 === true ? '' : classes.img1,
    style: {
      marginTop: '4rem',
      height: '70%',
      width: '70%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 33
    }
  }) : ''))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/Work/Moxa",
    underline: "none",
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: box4 === true ? classes.imgBox : classes.imgBoxOnHover,
    onMouseEnter: handleBox4On,
    onMouseLeave: handleMouseLeave,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 25
    }
  }, box4 === true ? '' : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.titleOnHover,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 37
    }
  }, "2017 \u2022 MOXA \u2022 Web Design"), __jsx("p", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title2OnHover,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 37
    }
  }, "Your Trusted Partner in Automation")), box4 === true ? __jsx("img", {
    src: _public_showcase_showcase03_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: box4 === true ? '' : classes.img1,
    style: {
      marginTop: '4rem',
      height: '70%',
      width: '70%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 33
    }
  }) : '')))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    className: classes.showcaseBlock,
    spacing: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/Work/Vue",
    underline: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: box5 === true ? classes.imgBox : classes.imgBoxOnHover,
    onMouseEnter: handleBox5On,
    onMouseLeave: handleMouseLeave,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 25
    }
  }, box5 === true ? '' : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.titleOnHover,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 37
    }
  }, "2017 \u2022 VUE Movie Database \u2022 Web Design"), __jsx("p", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title2OnHover,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 37
    }
  }, "IMDb for Asia, the biggest database for movie, celebrity and Netflix finder.")), box5 === true ? __jsx("img", {
    src: _public_showcase_showcase04_png__WEBPACK_IMPORTED_MODULE_7___default.a,
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
      columnNumber: 33
    }
  }) : ''))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    md: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/Work/Gigbird",
    underline: "none",
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: box6 === true ? classes.imgBox : classes.imgBoxOnHover,
    onMouseEnter: handleBox6On,
    onMouseLeave: handleMouseLeave,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 25
    }
  }, box6 === true ? '' : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.titleOnHover,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 37
    }
  }, "2018 \u2022 Gig Bird Event \u2022 App Design"), __jsx("p", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title2OnHover,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 37
    }
  }, "Celebrate every music event you enjoy with people")), box6 === true ? __jsx("img", {
    src: _public_showcase_showcase05_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    className: box6 === true ? '' : classes.img1,
    style: {
      marginTop: '4rem',
      height: '70%',
      width: '70%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 33
    }
  }) : '')))));
};

/***/ }),

/***/ "./component/Home/Writings.js":
/*!************************************!*\
  !*** ./component/Home/Writings.js ***!
  \************************************/
/*! exports provided: Writings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Writings", function() { return Writings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/Home.module.css */ "./css/Home.module.css");
/* harmony import */ var _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_OpenInNew__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/OpenInNew */ "@material-ui/icons/OpenInNew");
/* harmony import */ var _material_ui_icons_OpenInNew__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_OpenInNew__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_writings_writing01_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/writings/writing01.png */ "./public/writings/writing01.png");
/* harmony import */ var _public_writings_writing01_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_writings_writing01_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_writings_writing02_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/writings/writing02.png */ "./public/writings/writing02.png");
/* harmony import */ var _public_writings_writing02_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_writings_writing02_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Home\\Writings.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])({
  title: {
    color: '#1F1F1F',
    fontFamily: 'Roboto Slab',
    paddingBottom: '0.02rem',
    lineHight: '0.02rem'
  },
  titleOnHover: {
    color: '#1F1F1F',
    fontFamily: 'Roboto Slab',
    paddingBottom: '0.02rem',
    lineHight: '0.02rem',
    borderBottom: '2px solid black'
  }
});
const Writings = () => {
  const classes = useStyles();
  const [hover, setHover] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);

  const handleHoverOn1 = () => {
    setHover(1);
  };

  const handleHoverOn2 = () => {
    setHover(2);
  };

  const handleHoverOff = () => {
    setHover(0);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 1,
    style: {
      paddingTop: "6%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.writingsTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, "Writings")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7___default.a, {
    smDown: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 1,
    style: {
      paddingTop: "6%",
      wrap: 'nowrap'
    },
    spacing: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    md: 4,
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.articleBlock,
    style: {
      marginTop: '1%',
      paddingTop: 20
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://careersatagoda.com/blog/new-designer-agoda-bangkok-relocation/",
    style: {
      color: '#1F1F1F',
      fontFamily: 'Roboto Slab'
    },
    underline: "none",
    target: "_blank",
    rel: "noopener",
    onMouseEnter: handleHoverOn1,
    onMouseLeave: handleHoverOff,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.articleContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: hover == 1 ? classes.titleOnHover : classes.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 33
    }
  }, "An exciting adventure for a new designer at Agoda"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 33
    }
  }, "\u2002"), __jsx(_material_ui_icons_OpenInNew__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      fontSize: 'inherit',
      marginBottom: '-5px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 33
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 29
    }
  }), __jsx("span", {
    style: {
      fontSize: "16px",
      fontWeight: 500,
      fontFamily: 'Roboto'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 29
    }
  }, "December 2019")), __jsx("div", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imageBlock,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _public_writings_writing01_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    style: {
      width: '100%',
      height: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 33
    }
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    md: 4,
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.articleBlock,
    style: {
      marginLeft: '1%',
      marginTop: '1%',
      paddingTop: 20
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://careersatagoda.com/blog/mentoring-behavioral-designers-thailand-agoda/",
    style: {
      color: '#1F1F1F',
      fontFamily: 'Roboto Slab'
    },
    underline: "none",
    target: "_blank",
    rel: "noopener",
    onMouseEnter: handleHoverOn2,
    onMouseLeave: handleHoverOff,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.articleContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: hover == 2 ? classes.titleOnHover : classes.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 29
    }
  }, "Mentoring the Next Generation of Behavioral Designers in Thailand"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 33
    }
  }, "\u2002"), __jsx(_material_ui_icons_OpenInNew__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      fontSize: 'inherit',
      marginBottom: '-5px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 29
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 29
    }
  }), __jsx("span", {
    style: {
      fontSize: "16px",
      fontWeight: 500,
      fontFamily: 'Roboto'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 29
    }
  }, "August 2020")), __jsx("div", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imageBlock,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _public_writings_writing02_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    style: {
      width: '100%',
      height: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 33
    }
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  }))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7___default.a, {
    mdUp: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 1,
    style: {
      paddingTop: "6%"
    },
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.articleBlock,
    style: {
      paddingTop: 20
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://careersatagoda.com/blog/new-designer-agoda-bangkok-relocation/",
    style: {
      color: '#1F1F1F',
      fontFamily: 'Roboto Slab'
    },
    underline: "none",
    target: "_blank",
    rel: "noopener",
    onMouseEnter: handleHoverOn1,
    onMouseLeave: handleHoverOff,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 25
    }
  }, __jsx("div", {
    style: {
      height: '17rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: hover == 1 ? classes.titleOnHover : classes.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 29
    }
  }, "An exciting adventure for a new designer at Agoda"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 33
    }
  }, "\u2002"), __jsx(_material_ui_icons_OpenInNew__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      fontSize: 'inherit',
      marginBottom: '-5px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 29
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 29
    }
  }), __jsx("span", {
    style: {
      fontSize: "16px",
      fontWeight: 500,
      fontFamily: 'Roboto'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 29
    }
  }, "December 2019")), __jsx("div", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imageBlock,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _public_writings_writing01_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    style: {
      width: '100%',
      height: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 33
    }
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.articleBlock,
    style: {
      marginTop: '1%',
      paddingTop: 20
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://careersatagoda.com/blog/mentoring-behavioral-designers-thailand-agoda/",
    style: {
      color: '#1F1F1F',
      fontFamily: 'Roboto Slab'
    },
    underline: "none",
    target: "_blank",
    rel: "noopener",
    onMouseEnter: handleHoverOn2,
    onMouseLeave: handleHoverOff,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 25
    }
  }, __jsx("div", {
    style: {
      height: '17rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: hover == 2 ? classes.titleOnHover : classes.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 37
    }
  }, "Mentoring the Next Generation of Behavioral Designers in Thailand"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 37
    }
  }, "\u2002"), __jsx(_material_ui_icons_OpenInNew__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      fontSize: 'inherit',
      marginBottom: '-5px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 33
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 29
    }
  }), __jsx("span", {
    style: {
      fontSize: "16px",
      fontWeight: 500,
      fontFamily: 'Roboto'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 29
    }
  }, "August 2020")), __jsx("div", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imageBlock,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _public_writings_writing02_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    style: {
      width: '100%',
      height: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 33
    }
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 21
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 1,
    style: {
      paddingTop: "5%",
      paddingBottom: "6%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }
  }));
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

/***/ "./css/Home.module.css":
/*!*****************************!*\
  !*** ./css/Home.module.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main1": "Home_main1__1Aj0a",
	"buttonViewAllProjects": "Home_buttonViewAllProjects__3Ozet",
	"main2": "Home_main2__IPPUQ",
	"main3": "Home_main3__1audw",
	"viewLink": "Home_viewLink__2uFie",
	"banner": "Home_banner__39sLe",
	"banner2": "Home_banner2__2nhLk",
	"showcaseBlock": "Home_showcaseBlock__NrvMg",
	"showcaseBox": "Home_showcaseBox__1idoK",
	"showcaseBox2": "Home_showcaseBox2__3nyYZ",
	"img": "Home_img__1KgiC",
	"titleOnHover": "Home_titleOnHover__1bhFh",
	"title2OnHover": "Home_title2OnHover__37GDt",
	"writingsTitle": "Home_writingsTitle__1emIZ",
	"articleBlock": "Home_articleBlock__3PjiN",
	"articleContent": "Home_articleContent__SMMAk",
	"imageBlock": "Home_imageBlock__2qDAq",
	"funFactsTitle": "Home_funFactsTitle__2Xkn0",
	"buttonKnowMoreAboutMe": "Home_buttonKnowMoreAboutMe__3hHxr",
	"funFactsContent": "Home_funFactsContent__FKXIE",
	"funFactImg": "Home_funFactImg__2lcCZ",
	"funFactImgOnHover": "Home_funFactImgOnHover__1855Q"
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
	"footerLeftContent": "Public_footerLeftContent__3jURW",
	"ball": "Public_ball__3SvxF",
	"bounce": "Public_bounce__2gt-J"
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_Home_Banner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Home/Banner.js */ "./component/Home/Banner.js");
/* harmony import */ var _component_Home_Showcase_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/Home/Showcase.js */ "./component/Home/Showcase.js");
/* harmony import */ var _component_Home_Writings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/Home/Writings.js */ "./component/Home/Writings.js");
/* harmony import */ var _component_Public_Footer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/Public/Footer.js */ "./component/Public/Footer.js");
/* harmony import */ var _component_Public_Header_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/Public/Header.js */ "./component/Public/Header.js");
/* harmony import */ var _component_Home_Funfacts_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/Home/Funfacts.js */ "./component/Home/Funfacts.js");
/* harmony import */ var _css_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/Home.module.css */ "./css/Home.module.css");
/* harmony import */ var _css_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _component_Public_Drawer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/Public/Drawer.js */ "./component/Public/Drawer.js");
/* harmony import */ var _component_Public_PageLoader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../component/Public/PageLoader.js */ "./component/Public/PageLoader.js");
var _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const Index = () => {
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
      lineNumber: 26,
      columnNumber: 9
    }
  }, drawer == false ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx(_component_Public_PageLoader_js__WEBPACK_IMPORTED_MODULE_11__["PageLoader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx(_component_Public_Header_js__WEBPACK_IMPORTED_MODULE_7__["Header"], {
    handleDrawerOpen: handleDrawerOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.main1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    spacing: 1,
    style: {
      marginTop: "12%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  }, __jsx(_component_Home_Banner_js__WEBPACK_IMPORTED_MODULE_3__["Banner"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    spacing: 1,
    style: {
      marginTop: "12%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx(_component_Home_Showcase_js__WEBPACK_IMPORTED_MODULE_4__["Showcase"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    spacing: 1,
    style: {
      marginTop: "8%",
      marginBottom: "8%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    sm: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/Work",
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.viewLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }, "VIEW ALL PROJECTS")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.main2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, __jsx(_component_Home_Writings_js__WEBPACK_IMPORTED_MODULE_5__["Writings"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, __jsx(_component_Home_Funfacts_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.main3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, __jsx(_component_Public_Footer_js__WEBPACK_IMPORTED_MODULE_6__["Footer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }))) : '', drawer == true ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      backgroundColor: '#1f1f1f'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, __jsx(_component_Public_Drawer_js__WEBPACK_IMPORTED_MODULE_10__["Drawer"], {
    handleDrawerClose: handleDrawerClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }))) : '');
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./public/agoda-logo.png":
/*!*******************************!*\
  !*** ./public/agoda-logo.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/agoda-logo-17a94789bebf7dbd67bdb2386e87546c.png";

/***/ }),

/***/ "./public/fun-fact/funFact01.png":
/*!***************************************!*\
  !*** ./public/fun-fact/funFact01.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/funFact01-9f0474d3df3ce81a64f0f6a93341d41b.png";

/***/ }),

/***/ "./public/fun-fact/funFact02.png":
/*!***************************************!*\
  !*** ./public/fun-fact/funFact02.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/funFact02-e84044c1a05f5509bd2de5f57029a78d.png";

/***/ }),

/***/ "./public/fun-fact/funFact03.png":
/*!***************************************!*\
  !*** ./public/fun-fact/funFact03.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/funFact03-996847165fcf2b7ad6e7913c75edf2db.png";

/***/ }),

/***/ "./public/fun-fact/funFact04.png":
/*!***************************************!*\
  !*** ./public/fun-fact/funFact04.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/funFact04-6eed5903f518ff0804a8d80143e2c4a8.png";

/***/ }),

/***/ "./public/fun-fact/funFact05.png":
/*!***************************************!*\
  !*** ./public/fun-fact/funFact05.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/funFact05-b35796911fbd86c1bb440d80f2f1fe27.png";

/***/ }),

/***/ "./public/fun-fact/funFact06.png":
/*!***************************************!*\
  !*** ./public/fun-fact/funFact06.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/funFact06-3fbd91e5e4690e5f2912a6ce5f246cb4.png";

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

/***/ "./public/writings/writing01.png":
/*!***************************************!*\
  !*** ./public/writings/writing01.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/writing01-215d91d0d7f74066619a4a1062a5b359.png";

/***/ }),

/***/ "./public/writings/writing02.png":
/*!***************************************!*\
  !*** ./public/writings/writing02.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/writing02-1121926d8d6dca7aba1ea5c01c265606.png";

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

/***/ "@material-ui/icons/OpenInNew":
/*!***********************************************!*\
  !*** external "@material-ui/icons/OpenInNew" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/OpenInNew");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L0hvbWUvQmFubmVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9Ib21lL0Z1bmZhY3RzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9Ib21lL1Nob3djYXNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9Ib21lL1dyaXRpbmdzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9QdWJsaWMvRHJhd2VyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9QdWJsaWMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9QdWJsaWMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9QdWJsaWMvUGFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jc3MvSG9tZS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2Nzcy9QdWJsaWMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYWdvZGEtbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Z1bi1mYWN0L2Z1bkZhY3QwMS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Z1bi1mYWN0L2Z1bkZhY3QwMi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Z1bi1mYWN0L2Z1bkZhY3QwMy5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Z1bi1mYWN0L2Z1bkZhY3QwNC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Z1bi1mYWN0L2Z1bkZhY3QwNS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Z1bi1mYWN0L2Z1bkZhY3QwNi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3Nob3djYXNlL3Nob3djYXNlMDEucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9zaG93Y2FzZS9zaG93Y2FzZTAyLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc2hvd2Nhc2Uvc2hvd2Nhc2UwMy5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3Nob3djYXNlL3Nob3djYXNlMDQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9zaG93Y2FzZS9zaG93Y2FzZTA1LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvd3JpdGluZ3Mvd3JpdGluZzAxLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvd3JpdGluZ3Mvd3JpdGluZzAyLnBuZyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9PcGVuSW5OZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9wLWxvYWRpbmctYmFyXCIiXSwibmFtZXMiOlsiQmFubmVyIiwic3R5bGVzIiwiYmFubmVyIiwibWFyZ2luVG9wIiwiYmFubmVyMiIsIkZ1bmZhY3RzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJnYWxsZXJ5U3RhdGUiLCJib3hIZWlnaHQiLCJmdW5GYWN0SW1nIiwiaGFuZGxlRnVuRmFjdEltZ0VudGVyMSIsImJpbmQiLCJoYW5kbGVGdW5GYWN0SW1nRW50ZXIyIiwiaGFuZGxlRnVuRmFjdEltZ0VudGVyMyIsImhhbmRsZUZ1bkZhY3RJbWdFbnRlcjQiLCJoYW5kbGVGdW5GYWN0SW1nRW50ZXI1IiwiaGFuZGxlRnVuRmFjdEltZ0xlYXZlIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJmdW5GYWN0c1RpdGxlIiwiZnVuRmFjdHNDb250ZW50IiwiY29sb3IiLCJidXR0b25Lbm93TW9yZUFib3V0TWUiLCJ2aWV3TGluayIsImZ1bkZhY3RJbWdPbkhvdmVyIiwiZnVuRmFjdDAxIiwid2lkdGgiLCJmdW5GYWN0MDMiLCJmdW5GYWN0MDIiLCJmdW5GYWN0MDQiLCJ0ZXh0QWxpZ24iLCJmdW5GYWN0MDUiLCJmdW5GYWNySW1nT25Ib3ZlciIsImZ1bkZhY3QwNiIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJpbWdCb3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJvdmVyZmxvdyIsImltZ0JveE9uSG92ZXIiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsImltZzEiLCJzaG93Y2FzZUJsb2NrIiwiU2hvd2Nhc2UiLCJjbGFzc2VzIiwiYm94MSIsInNldEJveDEiLCJ1c2VTdGF0ZSIsImJveDIiLCJzZXRCb3gyIiwiYm94MyIsInNldEJveDMiLCJib3g0Iiwic2V0Qm94NCIsImJveDUiLCJzZXRCb3g1IiwiYm94NiIsInNldEJveDYiLCJoYW5kbGVCb3gxT24iLCJoYW5kbGVCb3gyT24iLCJoYW5kbGVCb3gzT24iLCJoYW5kbGVCb3g0T24iLCJoYW5kbGVCb3g1T24iLCJoYW5kbGVCb3g2T24iLCJoYW5kbGVNb3VzZUxlYXZlIiwidGl0bGVPbkhvdmVyIiwidGl0bGUyT25Ib3ZlciIsImFnb2RhIiwic2hvd2Nhc2UwMSIsInNob3djYXNlMDIiLCJzaG93Y2FzZTAzIiwic2hvd2Nhc2UwNCIsInNob3djYXNlMDUiLCJ0aXRsZSIsImZvbnRGYW1pbHkiLCJwYWRkaW5nQm90dG9tIiwibGluZUhpZ2h0IiwiYm9yZGVyQm90dG9tIiwiV3JpdGluZ3MiLCJob3ZlciIsInNldEhvdmVyIiwiaGFuZGxlSG92ZXJPbjEiLCJoYW5kbGVIb3Zlck9uMiIsImhhbmRsZUhvdmVyT2ZmIiwicGFkZGluZ1RvcCIsIndyaXRpbmdzVGl0bGUiLCJ3cmFwIiwiYXJ0aWNsZUJsb2NrIiwiYXJ0aWNsZUNvbnRlbnQiLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsImZvbnRXZWlnaHQiLCJpbWFnZUJsb2NrIiwid3JpdGluZzAxIiwibWFyZ2luTGVmdCIsIndyaXRpbmcwMiIsIm1haW4iLCJtYXJnaW5SaWdodCIsImxpbmsiLCJsZXR0ZXJTcGFjaW5nIiwiZHJhd2VyTGluayIsImRyYXdlckhlYWRlciIsIkRyYXdlciIsImhhbmRsZURyYXdlckNsb3NlIiwiZHJhd2VyVGl0bGUiLCJsaW5lSGVpZ2h0IiwiY29weXJpZ2h0IiwiRm9vdGVyIiwiZm9vdGVyQmxvY2siLCJmb290ZXJUaXRsZSIsImZvb3RlckxlZnRUaXRsZSIsImZvb3RlckxlZnRDb250ZW50IiwiZm9vdGVyQmxvY2syIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJsaW5rQW5jaG9yIiwiaWNvbiIsIm1lbnVCdXR0b24iLCJIZWFkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVEcmF3ZXJPcGVuIiwibWFpbjEiLCJtZW51QmFyIiwicGF0aG5hbWUiLCJQYWdlTG9hZGVyIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInVzZUVmZmVjdCIsIkluZGV4IiwiZHJhd2VyIiwic2V0RHJhd2VyIiwibWFpbjIiLCJtYWluMyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtR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d0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL0hvbWUubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgY29uc3QgQmFubmVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IGxnPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbm5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEkgYW0gU2FsaWUsIGEgcHJvZHVjdCBkZXNpZ25lciB3aG8gc3RyaXZlcyB0byBtYWtlIHBlb3BsZSBlbmpveSB0aGUgZGlnaXRhbCB3b3JsZC5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0gc3R5bGU9e3ttYXJnaW5Ub3A6XCIyJVwifX0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gbGc9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFubmVyMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEN1cnJlbnRseSB3b3JrIGF0IEFnb2RhIGJhc2VkIGluIEJhbmdrb2suXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2Nzcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgZnVuRmFjdDAxIGZyb20gJy4uLy4uL3B1YmxpYy9mdW4tZmFjdC9mdW5GYWN0MDEucG5nJztcclxuaW1wb3J0IGZ1bkZhY3QwMiBmcm9tICcuLi8uLi9wdWJsaWMvZnVuLWZhY3QvZnVuRmFjdDAyLnBuZyc7XHJcbmltcG9ydCBmdW5GYWN0MDMgZnJvbSAnLi4vLi4vcHVibGljL2Z1bi1mYWN0L2Z1bkZhY3QwMy5wbmcnO1xyXG5pbXBvcnQgZnVuRmFjdDA0IGZyb20gJy4uLy4uL3B1YmxpYy9mdW4tZmFjdC9mdW5GYWN0MDQucG5nJztcclxuaW1wb3J0IGZ1bkZhY3QwNSBmcm9tICcuLi8uLi9wdWJsaWMvZnVuLWZhY3QvZnVuRmFjdDA1LnBuZyc7XHJcbmltcG9ydCBmdW5GYWN0MDYgZnJvbSAnLi4vLi4vcHVibGljL2Z1bi1mYWN0L2Z1bkZhY3QwNi5wbmcnO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XHJcblxyXG5jbGFzcyBGdW5mYWN0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBnYWxsZXJ5U3RhdGU6IDAsXHJcbiAgICAgICAgICAgIGJveEhlaWdodDogJzMwMHB4JyxcclxuICAgICAgICAgICAgZnVuRmFjdEltZzogMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVGdW5GYWN0SW1nRW50ZXIxID0gdGhpcy5oYW5kbGVGdW5GYWN0SW1nRW50ZXIxLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVGdW5GYWN0SW1nRW50ZXIyID0gdGhpcy5oYW5kbGVGdW5GYWN0SW1nRW50ZXIyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVGdW5GYWN0SW1nRW50ZXIzID0gdGhpcy5oYW5kbGVGdW5GYWN0SW1nRW50ZXIzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVGdW5GYWN0SW1nRW50ZXI0ID0gdGhpcy5oYW5kbGVGdW5GYWN0SW1nRW50ZXI0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVGdW5GYWN0SW1nRW50ZXI1ID0gdGhpcy5oYW5kbGVGdW5GYWN0SW1nRW50ZXI1LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVGdW5GYWN0SW1nTGVhdmUgPSB0aGlzLmhhbmRsZUZ1bkZhY3RJbWdMZWF2ZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUZ1bkZhY3RJbWdFbnRlcjEoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZnVuRmFjdEltZzogMX0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUZ1bkZhY3RJbWdFbnRlcjIoKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmdW5GYWN0SW1nOiAyfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVGdW5GYWN0SW1nRW50ZXIzKCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZnVuRmFjdEltZzogM30pXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRnVuRmFjdEltZ0VudGVyNCgpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Z1bkZhY3RJbWc6IDR9KVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUZ1bkZhY3RJbWdFbnRlcjUoKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmdW5GYWN0SW1nOiA1fSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVGdW5GYWN0SW1nTGVhdmUoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZnVuRmFjdEltZzogMH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0gc3R5bGU9e3ttYXJnaW5Ub3A6XCI2JVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc209ezJ9IHhsPXs1fT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IHNtPXs4fSB4bD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5mdW5GYWN0c1RpdGxlfT5GdW4gRmFjdHM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gc209ezJ9IHhsPXs1fT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9IHN0eWxlPXt7bWFyZ2luVG9wOlwiMiVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZnVuRmFjdHNDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdvcmsgYWJyb2FkIGlzIG5vdCBteSBwbGFuIGluaXRpYWxseSwgYnV0IHRyYXZlbCBhYnJvYWQgZG9lcy4gRHVyaW5nIHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbiBwZXJpb2QgaW4gMjAxOCwgSSBzcGVudCBhIG1vbnRoIHRyYXZlbGluZyBpbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOicjOEY4RjhGJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZUZ1bkZhY3RJbWdFbnRlcjF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZUZ1bkZhY3RJbWdMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7I0t5b3RvJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLCB3aGljaCBpcyBteSBmYXZvcml0ZSBjaXR5IChzbyBmYXIpIGFuZCB0b29rIGFuIDgtaG91ciBidXMgdG8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOicjOEY4RjhGJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZUZ1bkZhY3RJbWdFbnRlcjJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZUZ1bkZhY3RJbWdMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7I1Rva3lvJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIHN0YXkgYW5vdGhlciB3ZWVrLiBJIGxvdmUgZXhwbG9yaW5nIHRoZSB3b3JsZCBhbmQgYWxzbyBteSBob21lIGNvdW50cnkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOicjOEY4RjhGJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZUZ1bkZhY3RJbWdFbnRlcjN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZUZ1bkZhY3RJbWdMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7I1RhaXdhbiZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLCB3aGVyZSBuYXR1cmUgaXMgZWFzaWx5IGFjY2Vzc2libGUuIFdoZW4gSSB3YXMgYXQgY29sbGVnZSwgSSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpZWQgZm9yIHRoZSB0cmF2ZWwgJiBleHBlcmllbmNlIHByb2dyYW0gdG8gd29yayBhcyBhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOicjOEY4RjhGJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZUZ1bkZhY3RJbWdFbnRlcjR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZUZ1bkZhY3RJbWdMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7I1JpZGVPcGVyYXRvciZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW4gYW4gYW11c2VtZW50IHBhcmsgaW4gUGVubnN5bHZhbmlhLCB0aGUgVS5TLkEuIEFuZCBub3cgSSBqdXN0IG1vdmVkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOicjOEY4RjhGJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZUZ1bkZhY3RJbWdFbnRlcjV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZUZ1bkZhY3RJbWdMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7I0Jhbmdrb2smbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAxLjUgeWVhcnMsIHRoZSBhZHZlbnR1cmUga2VlcHMgbW92aW5nIG9uLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfSBzdHlsZT17e21hcmdpblRvcDpcIjIlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBtZD17NH0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezh9IG1kPXs0fSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Lbm93TW9yZUFib3V0TWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScvQWJvdXQnIGNsYXNzTmFtZT17c3R5bGVzLnZpZXdMaW5rfT5LTk9XIE1PUkUgQUJPVVQgTUU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IG1kPXs0fT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IHN0eWxlPXt7bWFyZ2luVG9wOlwiMiVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IHN0eWxlPXt7bWFyZ2luVG9wOlwiMiVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs1fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZnVuRmFjdEltZyA9PSAzIHx8IHRoaXMuc3RhdGUuZnVuRmFjdEltZyA9PSAwP3N0eWxlcy5mdW5GYWN0SW1nT25Ib3ZlcjpzdHlsZXMuZnVuRmFjdEltZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Z1bkZhY3QwMX0gc3R5bGU9e3t3aWR0aDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmZ1bkZhY3RJbWcgPT0gMSB8fCB0aGlzLnN0YXRlLmZ1bkZhY3RJbWcgPT0gMD9zdHlsZXMuZnVuRmFjdEltZ09uSG92ZXI6c3R5bGVzLmZ1bkZhY3RJbWd9IHN0eWxlPXt7bWFyZ2luVG9wOicxLjVyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Z1bkZhY3QwM30gc3R5bGU9e3t3aWR0aDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmZ1bkZhY3RJbWcgPT0gNCB8fCB0aGlzLnN0YXRlLmZ1bkZhY3RJbWcgPT0gMD9zdHlsZXMuZnVuRmFjdEltZ09uSG92ZXI6c3R5bGVzLmZ1bkZhY3RJbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmdW5GYWN0MDJ9IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmZ1bkZhY3RJbWcgPT0gMiB8fCB0aGlzLnN0YXRlLmZ1bkZhY3RJbWcgPT0gMD9zdHlsZXMuZnVuRmFjdEltZ09uSG92ZXI6c3R5bGVzLmZ1bkZhY3RJbWd9IHN0eWxlPXt7bWFyZ2luVG9wOicxLjVyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Z1bkZhY3QwNH0gc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGlkZGVuIHNtRG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmZ1bkZhY3RJbWcgPT0gMSB8fCB0aGlzLnN0YXRlLmZ1bkZhY3RJbWcgPT0gMD9zdHlsZXMuZnVuRmFjdEltZ09uSG92ZXI6c3R5bGVzLmZ1bkZhY3RJbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Z1bkZhY3QwNX0gc3R5bGU9e3t3aWR0aDonOTIlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmZ1bkZhY3RJbWcgPT0gNSB8fCB0aGlzLnN0YXRlLmZ1bkZhY3RJbWcgPT0gMD9zdHlsZXMuZnVuRmFjckltZ09uSG92ZXI6c3R5bGVzLmZ1bkZhY3RJbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Z1bkZhY3QwNn0gc3R5bGU9e3t3aWR0aDonMTI2JSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIaWRkZW4gbWRVcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5mdW5GYWN0SW1nID09IDEgfHwgdGhpcy5zdGF0ZS5mdW5GYWN0SW1nID09IDA/c3R5bGVzLmZ1bkZhY3RJbWdPbkhvdmVyOnN0eWxlcy5mdW5GYWN0SW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmdW5GYWN0MDV9IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZnVuRmFjdEltZyA9PSA1IHx8IHRoaXMuc3RhdGUuZnVuRmFjdEltZyA9PSAwP3N0eWxlcy5mdW5GYWNySW1nT25Ib3ZlcjpzdHlsZXMuZnVuRmFjdEltZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZnVuRmFjdDA2fSBzdHlsZT17e3dpZHRoOicxMDAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGdW5mYWN0czsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IGFnb2RhIGZyb20gJy4uLy4uL3B1YmxpYy9hZ29kYS1sb2dvLnBuZyc7XHJcbmltcG9ydCBzaG93Y2FzZTAxIGZyb20gJy4uLy4uL3B1YmxpYy9zaG93Y2FzZS9zaG93Y2FzZTAxLnBuZyc7XHJcbmltcG9ydCBzaG93Y2FzZTAyIGZyb20gJy4uLy4uL3B1YmxpYy9zaG93Y2FzZS9zaG93Y2FzZTAyLnBuZyc7XHJcbmltcG9ydCBzaG93Y2FzZTAzIGZyb20gJy4uLy4uL3B1YmxpYy9zaG93Y2FzZS9zaG93Y2FzZTAzLnBuZyc7XHJcbmltcG9ydCBzaG93Y2FzZTA0IGZyb20gJy4uLy4uL3B1YmxpYy9zaG93Y2FzZS9zaG93Y2FzZTA0LnBuZyc7XHJcbmltcG9ydCBzaG93Y2FzZTA1IGZyb20gJy4uLy4uL3B1YmxpYy9zaG93Y2FzZS9zaG93Y2FzZTA1LnBuZyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgaW1nQm94OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y1RjVGNScsXHJcbiAgICAgICAgaGVpZ2h0OiAnMzByZW0nLFxyXG4gICAgICAgIHdpZHRoOicxMDAlJyxcclxuICAgICAgICBvdmVyZmxvdzonaGlkZGVuJyxcclxuICAgIH0sXHJcbiAgICBpbWdCb3hPbkhvdmVyOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOicjMUYxRjFGJyxcclxuICAgICAgICBvcGFjaXR5OicxMDAlJyxcclxuICAgICAgICBoZWlnaHQ6ICczMHJlbScsXHJcbiAgICAgICAgd2lkdGg6JzEwMCUnLFxyXG4gICAgICAgIG92ZXJmbG93OidoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICcuNHMgZWFzZS1pbi1vdXQnXHJcbiAgICB9LFxyXG4gICAgaW1nMToge1xyXG4gICAgICAgIG9wYWNpdHk6JzAlJ1xyXG4gICAgfSxcclxuICAgIHNob3djYXNlQmxvY2s6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6ICcwLjNyZW0nXHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgU2hvd2Nhc2UgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIFxyXG4gICAgY29uc3QgWyBib3gxLCBzZXRCb3gxXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gICAgXHJcbiAgICBjb25zdCBbIGJveDIsIHNldEJveDJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgWyBib3gzLCBzZXRCb3gzXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IFsgYm94NCwgc2V0Qm94NF0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBbIGJveDUsIHNldEJveDVdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgWyBib3g2LCBzZXRCb3g2XSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUJveDFPbiA9ICgpID0+IHtcclxuICAgICAgICBzZXRCb3gxKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVCb3gyT24gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Qm94MihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQm94M09uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEJveDMoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUJveDRPbiA9ICgpID0+IHtcclxuICAgICAgICBzZXRCb3g0KGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVCb3g1T24gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Qm94NShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQm94Nk9uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEJveDYoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Qm94MSh0cnVlKTtcclxuICAgICAgICBzZXRCb3gyKHRydWUpO1xyXG4gICAgICAgIHNldEJveDModHJ1ZSk7XHJcbiAgICAgICAgc2V0Qm94NCh0cnVlKTtcclxuICAgICAgICBzZXRCb3g1KHRydWUpO1xyXG4gICAgICAgIHNldEJveDYodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9Xb3JrL0Fnb2RhLWRlc2lnbicgdW5kZXJsaW5lPSdub25lJyBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtib3gxPT09dHJ1ZT9jbGFzc2VzLmltZ0JveDpjbGFzc2VzLmltZ0JveE9uSG92ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZUJveDFPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2JveDE9PT10cnVlPycnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVPbkhvdmVyfT4yMDE5LzIwIOKAoiBBZ29kYSBEZXNpZ248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlMk9uSG92ZXJ9PkFuIGV4Y2l0aW5nIGFkdmVudHVyZSBpbiBCYW5na29rIGFuZCB0cmF2ZWwgaW5kdXN0cnk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib3gxPT09dHJ1ZT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YWdvZGF9IGNsYXNzTmFtZT17Ym94MT09PXRydWU/Jyc6Y2xhc3Nlcy5pbWcxfSBzdHlsZT17e21hcmdpblRvcDonMTByZW0nfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9Xb3JrL0Fnb2RhLWZsaWdodHMnIHVuZGVybGluZT0nbm9uZScgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Ym94Mj09PXRydWU/Y2xhc3Nlcy5pbWdCb3g6Y2xhc3Nlcy5pbWdCb3hPbkhvdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVCb3gyT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib3gyPT09dHJ1ZT8nJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlT25Ib3Zlcn0+MjAyMCDigKIgQWdvZGEgRmxpZ2h0cyDigKIgQXBwIERlc2lnbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGUyT25Ib3Zlcn0+Q29tcGxldGUgeW91ciBqb3VybmV5IHdpdGggc2VhdCBzZWxlY3Rpb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib3gyPT09dHJ1ZT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2hvd2Nhc2UwMX0gY2xhc3NOYW1lPXtib3gyPT09dHJ1ZT8nJzpjbGFzc2VzLmltZzF9IHN0eWxlPXt7bWFyZ2luVG9wOicxMHJlbSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgIFxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnNob3djYXNlQmxvY2t9IHNwYWNpbmc9ezF9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvV29yay9LaW5qbycgdW5kZXJsaW5lPSdub25lJyBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtib3gzPT09dHJ1ZT9jbGFzc2VzLmltZ0JveDpjbGFzc2VzLmltZ0JveE9uSG92ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZUJveDNPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2JveDM9PT10cnVlPycnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVPbkhvdmVyfT4yMDE4IOKAoiBLSU5KTyBKZXdlbHJ5IOKAoiBXZWIgRGVzaWduPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZTJPbkhvdmVyfT5BbiBlLWNvbW1lcmNlIHNpdGUgYnJpbmdzIGEgMTIteWVhciBicmFuZCBhIG5ldyBsaWZlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym94Mz09PXRydWU/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Nob3djYXNlMDJ9IGNsYXNzTmFtZT17Ym94Mz09PXRydWU/Jyc6Y2xhc3Nlcy5pbWcxfSBzdHlsZT17e21hcmdpblRvcDonNHJlbScsaGVpZ2h0Oic3MCUnLHdpZHRoOic3MCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9Xb3JrL01veGEnIHVuZGVybGluZT0nbm9uZScgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Ym94ND09PXRydWU/Y2xhc3Nlcy5pbWdCb3g6Y2xhc3Nlcy5pbWdCb3hPbkhvdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVCb3g0T259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib3g0PT09dHJ1ZT8nJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlT25Ib3Zlcn0+MjAxNyDigKIgTU9YQSDigKIgV2ViIERlc2lnbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGUyT25Ib3Zlcn0+WW91ciBUcnVzdGVkIFBhcnRuZXIgaW4gQXV0b21hdGlvbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2JveDQ9PT10cnVlP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzaG93Y2FzZTAzfSBjbGFzc05hbWU9e2JveDQ9PT10cnVlPycnOmNsYXNzZXMuaW1nMX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzRyZW0nLGhlaWdodDonNzAlJyx3aWR0aDonNzAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPiAgICAgXHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuc2hvd2Nhc2VCbG9ja30gc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9Xb3JrL1Z1ZScgdW5kZXJsaW5lPSdub25lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Ym94NT09PXRydWU/Y2xhc3Nlcy5pbWdCb3g6Y2xhc3Nlcy5pbWdCb3hPbkhvdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVCb3g1T259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib3g1PT09dHJ1ZT8nJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlT25Ib3Zlcn0+MjAxNyDigKIgVlVFIE1vdmllIERhdGFiYXNlIOKAoiBXZWIgRGVzaWduPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZTJPbkhvdmVyfT5JTURiIGZvciBBc2lhLCB0aGUgYmlnZ2VzdCBkYXRhYmFzZSBmb3IgbW92aWUsIGNlbGVicml0eSBhbmQgTmV0ZmxpeCBmaW5kZXIuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym94NT09PXRydWU/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Nob3djYXNlMDR9IGNsYXNzTmFtZT17Ym94NT09PXRydWU/Jyc6Y2xhc3Nlcy5pbWcxfSBzdHlsZT17e21hcmdpblRvcDonNXJlbScsaGVpZ2h0Oic3MCUnLHdpZHRoOic3MCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9Xb3JrL0dpZ2JpcmQnIHVuZGVybGluZT0nbm9uZScgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Ym94Nj09PXRydWU/Y2xhc3Nlcy5pbWdCb3g6Y2xhc3Nlcy5pbWdCb3hPbkhvdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVCb3g2T259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib3g2PT09dHJ1ZT8nJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlT25Ib3Zlcn0+MjAxOCDigKIgR2lnIEJpcmQgRXZlbnQg4oCiIEFwcCBEZXNpZ248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlMk9uSG92ZXJ9PkNlbGVicmF0ZSBldmVyeSBtdXNpYyBldmVudCB5b3UgZW5qb3kgd2l0aCBwZW9wbGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib3g2PT09dHJ1ZT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2hvd2Nhc2UwNX0gY2xhc3NOYW1lPXtib3g2PT09dHJ1ZT8nJzpjbGFzc2VzLmltZzF9IHN0eWxlPXt7bWFyZ2luVG9wOic0cmVtJyxoZWlnaHQ6JzcwJScsd2lkdGg6JzcwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgIFxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XHJcbmltcG9ydCBPcGVuSW5OZXdJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9PcGVuSW5OZXcnO1xyXG5pbXBvcnQgd3JpdGluZzAxIGZyb20gJy4uLy4uL3B1YmxpYy93cml0aW5ncy93cml0aW5nMDEucG5nJztcclxuaW1wb3J0IHdyaXRpbmcwMiBmcm9tICcuLi8uLi9wdWJsaWMvd3JpdGluZ3Mvd3JpdGluZzAyLnBuZyc7XHJcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgY29sb3I6JyMxRjFGMUYnLCBcclxuICAgICAgICBmb250RmFtaWx5OiAnUm9ib3RvIFNsYWInLCBcclxuICAgICAgICBwYWRkaW5nQm90dG9tOicwLjAycmVtJywgXHJcbiAgICAgICAgbGluZUhpZ2h0OicwLjAycmVtJ1xyXG4gICAgfSxcclxuICAgIHRpdGxlT25Ib3Zlcjoge1xyXG4gICAgICAgIGNvbG9yOicjMUYxRjFGJywgXHJcbiAgICAgICAgZm9udEZhbWlseTogJ1JvYm90byBTbGFiJywgXHJcbiAgICAgICAgcGFkZGluZ0JvdHRvbTonMC4wMnJlbScsIFxyXG4gICAgICAgIGxpbmVIaWdodDonMC4wMnJlbScsXHJcbiAgICAgICAgYm9yZGVyQm90dG9tOicycHggc29saWQgYmxhY2snXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdyaXRpbmdzID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlSG92ZXJPbjEgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SG92ZXIoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlSG92ZXJPbjIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SG92ZXIoMik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlSG92ZXJPZmYgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SG92ZXIoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsvKiB0aXRsZSAqL31cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfSBzdHlsZT17e3BhZGRpbmdUb3A6XCI2JVwifX0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy53cml0aW5nc1RpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV3JpdGluZ3NcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gbWQ9ezR9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICB7LyogdGl0bGUgKi99XHJcblxyXG4gICAgICAgICAgICB7LyogYXJ0aWNsZSAqL31cclxuXHJcbiAgICAgICAgICAgIDxIaWRkZW4gc21Eb3duPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9IHN0eWxlPXt7cGFkZGluZ1RvcDpcIjYlXCIsd3JhcDonbm93cmFwJ319IHNwYWNpbmc9ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs0fSBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlQmxvY2t9IHN0eWxlPXt7bWFyZ2luVG9wOicxJScscGFkZGluZ1RvcDoyMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9jYXJlZXJzYXRhZ29kYS5jb20vYmxvZy9uZXctZGVzaWduZXItYWdvZGEtYmFuZ2tvay1yZWxvY2F0aW9uLydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6JyMxRjFGMUYnLCBmb250RmFtaWx5OiAnUm9ib3RvIFNsYWInfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZUhvdmVyT24xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVIb3Zlck9mZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2hvdmVyPT0xP2NsYXNzZXMudGl0bGVPbkhvdmVyOmNsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbiBleGNpdGluZyBhZHZlbnR1cmUgZm9yIGEgbmV3IGRlc2lnbmVyIGF0IEFnb2RhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZlbnNwOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3BlbkluTmV3SWNvbiBzdHlsZT17e2ZvbnRTaXplOidpbmhlcml0JyxtYXJnaW5Cb3R0b206Jy01cHgnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6XCIxNnB4XCIsZm9udFdlaWdodDo1MDAsZm9udEZhbWlseTonUm9ib3RvJ319PkRlY2VtYmVyIDIwMTk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VCbG9ja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt3cml0aW5nMDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzEwMCUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs0fSBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlQmxvY2t9IHN0eWxlPXt7bWFyZ2luTGVmdDonMSUnLG1hcmdpblRvcDonMSUnLHBhZGRpbmdUb3A6MjB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vY2FyZWVyc2F0YWdvZGEuY29tL2Jsb2cvbWVudG9yaW5nLWJlaGF2aW9yYWwtZGVzaWduZXJzLXRoYWlsYW5kLWFnb2RhLydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6JyMxRjFGMUYnLCBmb250RmFtaWx5OiAnUm9ib3RvIFNsYWInfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZUhvdmVyT24yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVIb3Zlck9mZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aG92ZXI9PTI/Y2xhc3Nlcy50aXRsZU9uSG92ZXI6Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lbnRvcmluZyB0aGUgTmV4dCBHZW5lcmF0aW9uIG9mIEJlaGF2aW9yYWwgRGVzaWduZXJzIGluIFRoYWlsYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZlbnNwOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcGVuSW5OZXdJY29uIHN0eWxlPXt7Zm9udFNpemU6J2luaGVyaXQnLG1hcmdpbkJvdHRvbTonLTVweCd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTpcIjE2cHhcIixmb250V2VpZ2h0OjUwMCxmb250RmFtaWx5OidSb2JvdG8nfX0+QXVndXN0IDIwMjA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VCbG9ja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt3cml0aW5nMDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzEwMCUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0hpZGRlbj5cclxuXHJcbiAgICAgICAgICAgIDxIaWRkZW4gbWRVcD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfSBzdHlsZT17e3BhZGRpbmdUb3A6XCI2JVwifX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlQmxvY2t9IHN0eWxlPXt7cGFkZGluZ1RvcDoyMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9jYXJlZXJzYXRhZ29kYS5jb20vYmxvZy9uZXctZGVzaWduZXItYWdvZGEtYmFuZ2tvay1yZWxvY2F0aW9uLydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6JyMxRjFGMUYnLCBmb250RmFtaWx5OiAnUm9ib3RvIFNsYWInfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZUhvdmVyT24xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVIb3Zlck9mZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDonMTdyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aG92ZXI9PTE/Y2xhc3Nlcy50aXRsZU9uSG92ZXI6Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW4gZXhjaXRpbmcgYWR2ZW50dXJlIGZvciBhIG5ldyBkZXNpZ25lciBhdCBBZ29kYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mZW5zcDs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3BlbkluTmV3SWNvbiBzdHlsZT17e2ZvbnRTaXplOidpbmhlcml0JyxtYXJnaW5Cb3R0b206Jy01cHgnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6XCIxNnB4XCIsZm9udFdlaWdodDo1MDAsZm9udEZhbWlseTonUm9ib3RvJ319PkRlY2VtYmVyIDIwMTk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VCbG9ja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt3cml0aW5nMDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzEwMCUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZUJsb2NrfSBzdHlsZT17e21hcmdpblRvcDonMSUnLHBhZGRpbmdUb3A6MjB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vY2FyZWVyc2F0YWdvZGEuY29tL2Jsb2cvbWVudG9yaW5nLWJlaGF2aW9yYWwtZGVzaWduZXJzLXRoYWlsYW5kLWFnb2RhLydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6JyMxRjFGMUYnLCBmb250RmFtaWx5OiAnUm9ib3RvIFNsYWInfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZUhvdmVyT24yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVIb3Zlck9mZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDonMTdyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtob3Zlcj09Mj9jbGFzc2VzLnRpdGxlT25Ib3ZlcjpjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lbnRvcmluZyB0aGUgTmV4dCBHZW5lcmF0aW9uIG9mIEJlaGF2aW9yYWwgRGVzaWduZXJzIGluIFRoYWlsYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JmVuc3A7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcGVuSW5OZXdJY29uIHN0eWxlPXt7Zm9udFNpemU6J2luaGVyaXQnLG1hcmdpbkJvdHRvbTonLTVweCd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTpcIjE2cHhcIixmb250V2VpZ2h0OjUwMCxmb250RmFtaWx5OidSb2JvdG8nfX0+QXVndXN0IDIwMjA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VCbG9ja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt3cml0aW5nMDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzEwMCUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0hpZGRlbj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBhcnRpY2xlICovfVxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9IHN0eWxlPXt7cGFkZGluZ1RvcDpcIjUlXCIsIHBhZGRpbmdCb3R0b206XCI2JVwifX0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1B1YmxpYy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBtYWluOiB7XHJcbiAgICAgICAgaGVpZ2h0OicxMDB2aCcsIFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6JzYlJywgXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6JzYlJywgXHJcbiAgICAgICAgcGFkZGluZ1RvcDogXCIxcmVtXCJcclxuICAgIH0sXHJcbiAgICBsaW5rOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgICAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6ICczMnB4JyxcclxuICAgICAgICBjb2xvcjonIzhGOEY4RicsXHJcbiAgICAgICAgZm9udFNpemU6JzE4cHgnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6J2JsYWNrJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkcmF3ZXJMaW5rOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICB0ZXh0QWxpZ246J2xlZnQnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICAgICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgICAgIGZvbnRTaXplOicyMnB4JyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOidibGFjaydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZHJhd2VySGVhZGVyOiB7XHJcbiAgICAgICAgcGFkZGluZ1RvcDonM3JlbSdcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgRHJhd2VyID0gKHByb3BzKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgaGFuZGxlRHJhd2VyQ2xvc2VcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZHJhd2VyVGl0bGV9PnNhbGllanVuZzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PjwvR3JpZD4gICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT48L0dyaWQ+ICAgIFxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezN9PjwvR3JpZD4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17MX0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicsIG1hcmdpblRvcDonLTAuNXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRHJhd2VyQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gc3R5bGU9e3tjb2xvcjonI0I4QjhCOCd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySGVhZGVyfSBzdHlsZT17e21hcmdpblRvcDonNHJlbSd9fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1dvcmtcIiB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJMaW5rfT5XT1JLPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPiAgICBcclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1dyaXRpbmdzXCIgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyTGlua30+V1JJVElOR1M8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9BYm91dFwiIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckxpbmt9PkFCT1VUPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy4vU2FsaWVDaGllbl9SZXN1bWUucGRmJyB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lcicgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyTGlua30+UkVTVU1FPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPiAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvUHVibGljLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGxpbms6IHtcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6JzEuOHJlbScsXHJcbiAgICAgICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgICAgIGZvbnRTaXplOicxcmVtJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOidibGFjaydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29weXJpZ2h0OiB7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgICAgICBsaW5lSGVpZ2h0OicwLjc1cmVtJyxcclxuICAgICAgICBmb250U2l6ZTonMC43NXJlbScsXHJcbiAgICAgICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6J2JsYWNrJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7ICAgIFxyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckJsb2NrfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17N30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNhbGllIFNoZW5nSnVuZyBDaGllbiAtLS0gUHJvZHVjdCBEZXNpZ25lclxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs1fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckxlZnRUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9wZW4gdG8gbmV3IG9wcG9ydHVuaXRpZXNcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJMZWZ0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbGllanVuZzQ3QGdtYWlsLmNvbVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NhbGllLWNoaWVuLycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZScgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXInXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMaW5rZWRpblxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3NhbGllanVuZy5tZWRpdW0uY29tLycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZScgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXInXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNZWRpdW1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJCbG9jazJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvcHlyaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERlc2lnbmVkIGJ5IENoaWVuIFNoZW5nSnVuZyDCqSAyMDIwIGFsbCByaWdodHMgcmVzZXJ2ZSBcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29weXJpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRGV2ZWxvcGVkIGJ5IDxMaW5rIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmNvcHlyaWdodH0+V2FuZyBXZWlBbjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e2hlaWdodDonM3JlbSd9fT48L0dyaWQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2Nzcy9QdWJsaWMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGxpbms6IHtcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogJzMycHgnLFxyXG4gICAgICAgIGNvbG9yOicjOEY4RjhGJyxcclxuICAgICAgICBmb250U2l6ZTonMXJlbScsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjonYmxhY2snXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRyYXdlckxpbms6IHtcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIHRleHRBbGlnbjonbGVmdCcsXHJcbiAgICAgICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICAgICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgICAgICBjb2xvcjonIzhGOEY4RicsXHJcbiAgICAgICAgZm9udFNpemU6JzIycHgnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6J2JsYWNrJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkcmF3ZXJIZWFkZXI6IHtcclxuICAgICAgICBwYWRkaW5nTGVmdDonMnJlbScsXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0OicycmVtJyxcclxuICAgICAgICBtYXJnaW5Ub3A6JzNyZW0nXHJcbiAgICB9LFxyXG4gICAgbGlua0FuY2hvcjoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICAgICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgICAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXHJcbiAgICAgICAgY29sb3I6J2JsYWNrJyxcclxuICAgICAgICBmb250U2l6ZTonMXJlbSdcclxuICAgIH0sXHJcbiAgICBpY29uOiB7XHJcbiAgICAgICAgZm9udFNpemU6JzEuNXJlbScsXHJcbiAgICAgICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6JyMxRjFGMUYnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1lbnVCdXR0b246IHtcclxuICAgICAgICBwYWRkaW5nVG9wOicycmVtJyxcclxuICAgICAgICB0ZXh0QWxpZ246J2NlbnRlcidcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBoYW5kbGVEcmF3ZXJPcGVuXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbjF9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHN0eWxlPXt7cGFkZGluZ1RvcDonMS41cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJyB1bmRlcmxpbmU9J25vbmUnIHN0eWxlPXt7Y29sb3I6JyMxRjFGMUYnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+c2FsaWVqdW5nPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8SGlkZGVuIG1kRG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0gY2xhc3NOYW1lPXtzdHlsZXMubWVudUJhcn0gc3R5bGU9e3twYWRkaW5nVG9wOicxLjVyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvV29yaycgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1dvcmsnP2NsYXNzZXMubGlua0FuY2hvcjpjbGFzc2VzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXT1JLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL1dyaXRpbmdzJyB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvV3JpdGluZ3MnP2NsYXNzZXMubGlua0FuY2hvcjpjbGFzc2VzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXUklUSU5HU1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9BYm91dCcgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL0Fib3V0Jz9jbGFzc2VzLmxpbmtBbmNob3I6Y2xhc3Nlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQUJPVVRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScuL1NhbGllQ2hpZW5fUmVzdW1lLnBkZicgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXInIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSRVNVTUVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEhpZGRlbiBsZ1VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17MX0gY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVCdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLCBwYWRkaW5nVG9wOicxLjJyZW0nfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMb2FkaW5nQmFyIGZyb20gJ3JlYWN0LXRvcC1sb2FkaW5nLWJhcidcclxuIFxyXG5leHBvcnQgY29uc3QgUGFnZUxvYWRlciA9ICgpID0+IHtcclxuICBcclxuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIHNldFByb2dyZXNzKDEwMCk7XHJcbiAgfSxbXSlcclxuIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TG9hZGluZ0JhclxyXG4gICAgICAgIGNvbG9yPScjMUYxRjFGJ1xyXG4gICAgICAgIGhlaWdodD17M31cclxuICAgICAgICB3YWl0aW5nVGltZT17NTAwfVxyXG4gICAgICAgIHByb2dyZXNzPXtwcm9ncmVzc31cclxuICAgICAgICBvbkxvYWRlckZpbmlzaGVkPXsoKSA9PiBzZXRQcm9ncmVzcygwKX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW4xXCI6IFwiSG9tZV9tYWluMV9fMUFqMGFcIixcblx0XCJidXR0b25WaWV3QWxsUHJvamVjdHNcIjogXCJIb21lX2J1dHRvblZpZXdBbGxQcm9qZWN0c19fM096ZXRcIixcblx0XCJtYWluMlwiOiBcIkhvbWVfbWFpbjJfX0lQUFVRXCIsXG5cdFwibWFpbjNcIjogXCJIb21lX21haW4zX18xYXVkd1wiLFxuXHRcInZpZXdMaW5rXCI6IFwiSG9tZV92aWV3TGlua19fMnVGaWVcIixcblx0XCJiYW5uZXJcIjogXCJIb21lX2Jhbm5lcl9fMzlzTGVcIixcblx0XCJiYW5uZXIyXCI6IFwiSG9tZV9iYW5uZXIyX18ybmhMa1wiLFxuXHRcInNob3djYXNlQmxvY2tcIjogXCJIb21lX3Nob3djYXNlQmxvY2tfX05ydk1nXCIsXG5cdFwic2hvd2Nhc2VCb3hcIjogXCJIb21lX3Nob3djYXNlQm94X18xaWRvS1wiLFxuXHRcInNob3djYXNlQm94MlwiOiBcIkhvbWVfc2hvd2Nhc2VCb3gyX18zbnlZWlwiLFxuXHRcImltZ1wiOiBcIkhvbWVfaW1nX18xS2dpQ1wiLFxuXHRcInRpdGxlT25Ib3ZlclwiOiBcIkhvbWVfdGl0bGVPbkhvdmVyX18xYmhGaFwiLFxuXHRcInRpdGxlMk9uSG92ZXJcIjogXCJIb21lX3RpdGxlMk9uSG92ZXJfXzM3R0R0XCIsXG5cdFwid3JpdGluZ3NUaXRsZVwiOiBcIkhvbWVfd3JpdGluZ3NUaXRsZV9fMWVtSVpcIixcblx0XCJhcnRpY2xlQmxvY2tcIjogXCJIb21lX2FydGljbGVCbG9ja19fM1BqaU5cIixcblx0XCJhcnRpY2xlQ29udGVudFwiOiBcIkhvbWVfYXJ0aWNsZUNvbnRlbnRfX1NNTUFrXCIsXG5cdFwiaW1hZ2VCbG9ja1wiOiBcIkhvbWVfaW1hZ2VCbG9ja19fMnFEQXFcIixcblx0XCJmdW5GYWN0c1RpdGxlXCI6IFwiSG9tZV9mdW5GYWN0c1RpdGxlX18yWGtuMFwiLFxuXHRcImJ1dHRvbktub3dNb3JlQWJvdXRNZVwiOiBcIkhvbWVfYnV0dG9uS25vd01vcmVBYm91dE1lX18zaEh4clwiLFxuXHRcImZ1bkZhY3RzQ29udGVudFwiOiBcIkhvbWVfZnVuRmFjdHNDb250ZW50X19GS1hJRVwiLFxuXHRcImZ1bkZhY3RJbWdcIjogXCJIb21lX2Z1bkZhY3RJbWdfXzJsY0NaXCIsXG5cdFwiZnVuRmFjdEltZ09uSG92ZXJcIjogXCJIb21lX2Z1bkZhY3RJbWdPbkhvdmVyX18xODU1UVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2Fyb3VzZWxPdXRlclwiOiBcIlB1YmxpY19jYXJvdXNlbE91dGVyX18ybVpfZFwiLFxuXHRcImltZ0Rlc2NyaXB0aW9uXCI6IFwiUHVibGljX2ltZ0Rlc2NyaXB0aW9uX19PeFliUVwiLFxuXHRcImNhcm91c2VsSW1nXCI6IFwiUHVibGljX2Nhcm91c2VsSW1nX18xd0wzVFwiLFxuXHRcImNhcHRpb25Db250YWluZXJcIjogXCJQdWJsaWNfY2FwdGlvbkNvbnRhaW5lcl9fYWkxNnFcIixcblx0XCJkcmF3ZXJUaXRsZVwiOiBcIlB1YmxpY19kcmF3ZXJUaXRsZV9fLUxFUzhcIixcblx0XCJsaW5rXCI6IFwiUHVibGljX2xpbmtfXzI4MWRHXCIsXG5cdFwiZHJhd2VyQnV0dG9uXCI6IFwiUHVibGljX2RyYXdlckJ1dHRvbl9fX1VGci1cIixcblx0XCJtYWluMVwiOiBcIlB1YmxpY19tYWluMV9fNXdDODZcIixcblx0XCJ0aXRsZVwiOiBcIlB1YmxpY190aXRsZV9fX3gxVmNcIixcblx0XCJtZW51QmFyXCI6IFwiUHVibGljX21lbnVCYXJfXzMzS1h6XCIsXG5cdFwiZm9vdGVyQmxvY2tcIjogXCJQdWJsaWNfZm9vdGVyQmxvY2tfX3pxQTVaXCIsXG5cdFwiZm9vdGVyQmxvY2syXCI6IFwiUHVibGljX2Zvb3RlckJsb2NrMl9fMkdUMXlcIixcblx0XCJmb290ZXJUaXRsZVwiOiBcIlB1YmxpY19mb290ZXJUaXRsZV9fRk9mTG1cIixcblx0XCJjb3B5cmlnaHRcIjogXCJQdWJsaWNfY29weXJpZ2h0X18zSVJmMlwiLFxuXHRcImZvb3RlckxlZnRUaXRsZVwiOiBcIlB1YmxpY19mb290ZXJMZWZ0VGl0bGVfXzFyMUEyXCIsXG5cdFwiZm9vdGVyTGVmdENvbnRlbnRcIjogXCJQdWJsaWNfZm9vdGVyTGVmdENvbnRlbnRfXzNqVVJXXCIsXG5cdFwiYmFsbFwiOiBcIlB1YmxpY19iYWxsX18zU3Z4RlwiLFxuXHRcImJvdW5jZVwiOiBcIlB1YmxpY19ib3VuY2VfXzJndC1KXCJcbn07XG4iLCJpbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCB7IEJhbm5lciB9IGZyb20gJy4uL2NvbXBvbmVudC9Ib21lL0Jhbm5lci5qcyc7XHJcbmltcG9ydCB7IFNob3djYXNlIH0gZnJvbSAnLi4vY29tcG9uZW50L0hvbWUvU2hvd2Nhc2UuanMnO1xyXG5pbXBvcnQgeyBXcml0aW5ncyB9IGZyb20gJy4uL2NvbXBvbmVudC9Ib21lL1dyaXRpbmdzLmpzJztcclxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi4vY29tcG9uZW50L1B1YmxpYy9Gb290ZXIuanMnO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnQvUHVibGljL0hlYWRlci5qcyc7XHJcbmltcG9ydCBGdW5mYWN0cyBmcm9tICcuLi9jb21wb25lbnQvSG9tZS9GdW5mYWN0cy5qcyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vY3NzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IERyYXdlciB9IGZyb20gJy4uL2NvbXBvbmVudC9QdWJsaWMvRHJhd2VyLmpzJztcclxuaW1wb3J0IHsgUGFnZUxvYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudC9QdWJsaWMvUGFnZUxvYWRlci5qcyc7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbZHJhd2VyLCBzZXREcmF3ZXJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURyYXdlck9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RHJhd2VyKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZURyYXdlckNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldERyYXdlcihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICBcclxuICAgICAgICAgICAge2RyYXdlciA9PSBmYWxzZSA/XHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICB7LyogdGl0bGUgJiBtZW51ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFBhZ2VMb2FkZXIvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRHJhd2VyT3Blbj17aGFuZGxlRHJhd2VyT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgey8qIHRpdGxlICYgbWVudSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW4xfT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBiYW5uZXIgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfSBzdHlsZT17e21hcmdpblRvcDpcIjEyJVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFubmVyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+ICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBiYW5uZXIgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIHNob3djYXNlICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0gc3R5bGU9e3ttYXJnaW5Ub3A6XCIxMiVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNob3djYXNlLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIHNob3djYXNlICovfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiB2aWV3IGFsbCBwcm9qZWN0cyAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9IHN0eWxlPXt7bWFyZ2luVG9wOlwiOCVcIiwgbWFyZ2luQm90dG9tOlwiOCVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHNtPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9Jy9Xb3JrJyBjbGFzc05hbWU9e3N0eWxlcy52aWV3TGlua30+VklFVyBBTEwgUFJPSkVDVFM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogdmlldyBhbGwgcHJvamVjdHMgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIHdyaXRpbmdzICovfVxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbjJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxXcml0aW5ncy8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7Lyogd3JpdGluZ3MgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIGZ1biBmYWN0cyAqL31cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGdW5mYWN0cy8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogZnVuIGZhY3RzICovfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBmb290ZXIgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluM30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogZm9vdGVyICovfVxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgOicnfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge2RyYXdlciA9PSB0cnVlID9cclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOicjMWYxZjFmJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRHJhd2VyQ2xvc2U9e2hhbmRsZURyYXdlckNsb3NlfSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgOicnfVxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYWdvZGEtbG9nby0xN2E5NDc4OWJlYmY3ZGJkNjdiZGIyMzg2ZTg3NTQ2Yy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZnVuRmFjdDAxLTlmMDQ3NGQzZGYzY2U4MWE2NGYwZjZhOTMzNDFkNDFiLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9mdW5GYWN0MDItZTg0MDQ0YzFhMDVmNTUwOWJkMmRlNWY1NzAyOWE3OGQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Z1bkZhY3QwMy05OTY4NDcxNjVmY2YyYjdhZDZlNzkxM2M3NWVkZjJkYi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZnVuRmFjdDA0LTZlZWQ1OTAzZjUxOGZmMDgwNGE4ZDgwMTQzZTJjNGE4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9mdW5GYWN0MDUtYjM1Nzk2OTExZmJkODZjMWJiNDQwZDgwZjJmMWZlMjcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Z1bkZhY3QwNi0zZmJkOTFlNWU0NjkwZTVmMjkxMmE2Y2U1ZjI0NmNiNC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2hvd2Nhc2UwMS02YjBlN2VmMjQxYjJmZWI5ZWNjZjk0ZjJhZWY2Njg3MS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2hvd2Nhc2UwMi1jNDk4OTgzZWYyOWM1NDAwMmVlZjNlNmVmN2QzNDY5ZC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2hvd2Nhc2UwMy1kMGMyNTJmOGY3YmViZDc5OGU5MTkxNWVjZmFmNzA0Mi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2hvd2Nhc2UwNC02ZmEyMjI1ZGY2YjJjOWY5N2Y2OTM5ZDhlYmU2ZmM1NS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2hvd2Nhc2UwNS1iZWJkNmJkYjNjMDVlNGY2MjY0NmQ5Yzg0YzVlOTU2Ny5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvd3JpdGluZzAxLTIxNWQ5MWQwZDdmNzQwNjY2MTlhNGExMDYyYTViMzU5LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy93cml0aW5nMDItMTEyMTkyNmQ4ZDZkY2E3YWJhMWVhNWMwMWMyNjU2MDYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL09wZW5Jbk5ld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b3AtbG9hZGluZy1iYXJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==