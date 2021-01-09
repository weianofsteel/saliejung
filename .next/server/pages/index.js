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
    href: "/",
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
    href: "/",
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
    href: "/",
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
    href: "/",
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
    lineHight: '0.02rem',
    "&:hover": {
      borderBottom: '2px solid black'
    }
  }
});
const Writings = () => {
  const classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
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
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.writingsTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, "Writings")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: false,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7___default.a, {
    smDown: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
      lineNumber: 50,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.articleContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: classes.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }, "An exciting adventure for a new designer at Agoda"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 33
    }
  }, "\u2002")), __jsx(_material_ui_icons_OpenInNew__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      fontSize: 'inherit',
      marginBottom: '-5px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 29
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
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
      lineNumber: 68,
      columnNumber: 25
    }
  }, "December 2019")), __jsx("div", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imageBlock,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
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
      lineNumber: 71,
      columnNumber: 29
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
      lineNumber: 78,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.articleContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 25
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: classes.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 33
    }
  }, "Mentoring the Next Generation of Behavioral Designers in Thailand"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 33
    }
  }, "\u2002")), __jsx(_material_ui_icons_OpenInNew__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      fontSize: 'inherit',
      marginBottom: '-5px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 29
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 25
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
      lineNumber: 96,
      columnNumber: 25
    }
  }, "August 2020")), __jsx("div", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imageBlock,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
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
      lineNumber: 99,
      columnNumber: 29
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7___default.a, {
    mdUp: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
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
      lineNumber: 110,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
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
      lineNumber: 112,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      height: '17rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 25
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 25
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: classes.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 33
    }
  }, "An exciting adventure for a new designer at Agoda"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 33
    }
  }, "\u2002")), __jsx(_material_ui_icons_OpenInNew__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      fontSize: 'inherit',
      marginBottom: '-5px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 29
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 25
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
      lineNumber: 130,
      columnNumber: 25
    }
  }, "December 2019")), __jsx("div", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imageBlock,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 25
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
      lineNumber: 133,
      columnNumber: 29
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
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
      lineNumber: 141,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      height: '17rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 25
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 25
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: classes.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 33
    }
  }, "Mentoring the Next Generation of Behavioral Designers in Thailand"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 33
    }
  }, "\u2002")), __jsx(_material_ui_icons_OpenInNew__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      fontSize: 'inherit',
      marginBottom: '-5px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 29
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 25
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
      lineNumber: 159,
      columnNumber: 25
    }
  }, "August 2020")), __jsx("div", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imageBlock,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 25
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
      lineNumber: 162,
      columnNumber: 29
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
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
      lineNumber: 174,
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
	"footerLeftContent": "Public_footerLeftContent__3jURW"
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
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _component_Public_Drawer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../component/Public/Drawer.js */ "./component/Public/Drawer.js");
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
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx(_component_Public_Header_js__WEBPACK_IMPORTED_MODULE_7__["Header"], {
    handleDrawerOpen: handleDrawerOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.main1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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
      lineNumber: 44,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, __jsx(_component_Home_Banner_js__WEBPACK_IMPORTED_MODULE_3__["Banner"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
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
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx(_component_Home_Showcase_js__WEBPACK_IMPORTED_MODULE_4__["Showcase"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    sm: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
      lineNumber: 65,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/Work",
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.viewLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 29
    }
  }, "VIEW ALL PROJECTS")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.main2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, __jsx(_component_Home_Writings_js__WEBPACK_IMPORTED_MODULE_5__["Writings"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, __jsx(_component_Home_Funfacts_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.main3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, __jsx(_component_Public_Footer_js__WEBPACK_IMPORTED_MODULE_6__["Footer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }))) : '', drawer == true ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      backgroundColor: '#1f1f1f'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, __jsx(_component_Public_Drawer_js__WEBPACK_IMPORTED_MODULE_11__["Drawer"], {
    handleDrawerClose: handleDrawerClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L0hvbWUvQmFubmVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9Ib21lL0Z1bmZhY3RzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9Ib21lL1Nob3djYXNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9Ib21lL1dyaXRpbmdzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9QdWJsaWMvRHJhd2VyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9QdWJsaWMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9QdWJsaWMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2Nzcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY3NzL1B1YmxpYy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9hZ29kYS1sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZnVuLWZhY3QvZnVuRmFjdDAxLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZnVuLWZhY3QvZnVuRmFjdDAyLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZnVuLWZhY3QvZnVuRmFjdDAzLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZnVuLWZhY3QvZnVuRmFjdDA0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZnVuLWZhY3QvZnVuRmFjdDA1LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZnVuLWZhY3QvZnVuRmFjdDA2LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc2hvd2Nhc2Uvc2hvd2Nhc2UwMS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3Nob3djYXNlL3Nob3djYXNlMDIucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9zaG93Y2FzZS9zaG93Y2FzZTAzLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc2hvd2Nhc2Uvc2hvd2Nhc2UwNC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3Nob3djYXNlL3Nob3djYXNlMDUucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy93cml0aW5ncy93cml0aW5nMDEucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy93cml0aW5ncy93cml0aW5nMDIucG5nIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL09wZW5Jbk5ld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJCYW5uZXIiLCJzdHlsZXMiLCJiYW5uZXIiLCJtYXJnaW5Ub3AiLCJiYW5uZXIyIiwiRnVuZmFjdHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImdhbGxlcnlTdGF0ZSIsImJveEhlaWdodCIsImZ1bkZhY3RJbWciLCJoYW5kbGVGdW5GYWN0SW1nRW50ZXIxIiwiYmluZCIsImhhbmRsZUZ1bkZhY3RJbWdFbnRlcjIiLCJoYW5kbGVGdW5GYWN0SW1nRW50ZXIzIiwiaGFuZGxlRnVuRmFjdEltZ0VudGVyNCIsImhhbmRsZUZ1bkZhY3RJbWdFbnRlcjUiLCJoYW5kbGVGdW5GYWN0SW1nTGVhdmUiLCJzZXRTdGF0ZSIsInJlbmRlciIsImZ1bkZhY3RzVGl0bGUiLCJmdW5GYWN0c0NvbnRlbnQiLCJjb2xvciIsImJ1dHRvbktub3dNb3JlQWJvdXRNZSIsInZpZXdMaW5rIiwiZnVuRmFjdEltZ09uSG92ZXIiLCJmdW5GYWN0MDEiLCJ3aWR0aCIsImZ1bkZhY3QwMyIsImZ1bkZhY3QwMiIsImZ1bkZhY3QwNCIsInRleHRBbGlnbiIsImZ1bkZhY3QwNSIsImZ1bkZhY3JJbWdPbkhvdmVyIiwiZnVuRmFjdDA2IiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImltZ0JveCIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsIm92ZXJmbG93IiwiaW1nQm94T25Ib3ZlciIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiaW1nMSIsInNob3djYXNlQmxvY2siLCJTaG93Y2FzZSIsImNsYXNzZXMiLCJib3gxIiwic2V0Qm94MSIsInVzZVN0YXRlIiwiYm94MiIsInNldEJveDIiLCJib3gzIiwic2V0Qm94MyIsImJveDQiLCJzZXRCb3g0IiwiYm94NSIsInNldEJveDUiLCJib3g2Iiwic2V0Qm94NiIsImhhbmRsZUJveDFPbiIsImhhbmRsZUJveDJPbiIsImhhbmRsZUJveDNPbiIsImhhbmRsZUJveDRPbiIsImhhbmRsZUJveDVPbiIsImhhbmRsZUJveDZPbiIsImhhbmRsZU1vdXNlTGVhdmUiLCJ0aXRsZU9uSG92ZXIiLCJ0aXRsZTJPbkhvdmVyIiwiYWdvZGEiLCJzaG93Y2FzZTAxIiwic2hvd2Nhc2UwMiIsInNob3djYXNlMDMiLCJzaG93Y2FzZTA0Iiwic2hvd2Nhc2UwNSIsInRpdGxlIiwiZm9udEZhbWlseSIsInBhZGRpbmdCb3R0b20iLCJsaW5lSGlnaHQiLCJib3JkZXJCb3R0b20iLCJXcml0aW5ncyIsInBhZGRpbmdUb3AiLCJ3cml0aW5nc1RpdGxlIiwid3JhcCIsImFydGljbGVCbG9jayIsImFydGljbGVDb250ZW50IiwiZm9udFNpemUiLCJtYXJnaW5Cb3R0b20iLCJmb250V2VpZ2h0IiwiaW1hZ2VCbG9jayIsIndyaXRpbmcwMSIsIm1hcmdpbkxlZnQiLCJ3cml0aW5nMDIiLCJtYWluIiwibWFyZ2luUmlnaHQiLCJsaW5rIiwibGV0dGVyU3BhY2luZyIsImRyYXdlckxpbmsiLCJkcmF3ZXJIZWFkZXIiLCJEcmF3ZXIiLCJoYW5kbGVEcmF3ZXJDbG9zZSIsImRyYXdlclRpdGxlIiwibGluZUhlaWdodCIsImNvcHlyaWdodCIsIkZvb3RlciIsImZvb3RlckJsb2NrIiwiZm9vdGVyVGl0bGUiLCJmb290ZXJMZWZ0VGl0bGUiLCJmb290ZXJMZWZ0Q29udGVudCIsImZvb3RlckJsb2NrMiIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwibGlua0FuY2hvciIsImljb24iLCJtZW51QnV0dG9uIiwiSGVhZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlRHJhd2VyT3BlbiIsIm1haW4xIiwibWVudUJhciIsInBhdGhuYW1lIiwiSW5kZXgiLCJkcmF3ZXIiLCJzZXREcmF3ZXIiLCJtYWluMiIsIm1haW4zIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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dUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsd0Y7Ozs7Ozs7Ozs7O0FDQUEsd0Y7Ozs7Ozs7Ozs7O0FDQUEsd0Y7Ozs7Ozs7Ozs7O0FDQUEsd0Y7Ozs7Ozs7Ozs7O0FDQUEsd0Y7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL0hvbWUubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgY29uc3QgQmFubmVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IGxnPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbm5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEkgYW0gU2FsaWUsIGEgcHJvZHVjdCBkZXNpZ25lciB3aG8gc3RyaXZlcyB0byBtYWtlIHBlb3BsZSBlbmpveSB0aGUgZGlnaXRhbCB3b3JsZC5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0gc3R5bGU9e3ttYXJnaW5Ub3A6XCIyJVwifX0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gbGc9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFubmVyMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEN1cnJlbnRseSB3b3JrIGF0IEFnb2RhIGJhc2VkIGluIEJhbmdrb2suXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2Nzcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgZnVuRmFjdDAxIGZyb20gJy4uLy4uL3B1YmxpYy9mdW4tZmFjdC9mdW5GYWN0MDEucG5nJztcclxuaW1wb3J0IGZ1bkZhY3QwMiBmcm9tICcuLi8uLi9wdWJsaWMvZnVuLWZhY3QvZnVuRmFjdDAyLnBuZyc7XHJcbmltcG9ydCBmdW5GYWN0MDMgZnJvbSAnLi4vLi4vcHVibGljL2Z1bi1mYWN0L2Z1bkZhY3QwMy5wbmcnO1xyXG5pbXBvcnQgZnVuRmFjdDA0IGZyb20gJy4uLy4uL3B1YmxpYy9mdW4tZmFjdC9mdW5GYWN0MDQucG5nJztcclxuaW1wb3J0IGZ1bkZhY3QwNSBmcm9tICcuLi8uLi9wdWJsaWMvZnVuLWZhY3QvZnVuRmFjdDA1LnBuZyc7XHJcbmltcG9ydCBmdW5GYWN0MDYgZnJvbSAnLi4vLi4vcHVibGljL2Z1bi1mYWN0L2Z1bkZhY3QwNi5wbmcnO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XHJcblxyXG5jbGFzcyBGdW5mYWN0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBnYWxsZXJ5U3RhdGU6IDAsXHJcbiAgICAgICAgICAgIGJveEhlaWdodDogJzMwMHB4JyxcclxuICAgICAgICAgICAgZnVuRmFjdEltZzogMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVGdW5GYWN0SW1nRW50ZXIxID0gdGhpcy5oYW5kbGVGdW5GYWN0SW1nRW50ZXIxLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVGdW5GYWN0SW1nRW50ZXIyID0gdGhpcy5oYW5kbGVGdW5GYWN0SW1nRW50ZXIyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVGdW5GYWN0SW1nRW50ZXIzID0gdGhpcy5oYW5kbGVGdW5GYWN0SW1nRW50ZXIzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVGdW5GYWN0SW1nRW50ZXI0ID0gdGhpcy5oYW5kbGVGdW5GYWN0SW1nRW50ZXI0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVGdW5GYWN0SW1nRW50ZXI1ID0gdGhpcy5oYW5kbGVGdW5GYWN0SW1nRW50ZXI1LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVGdW5GYWN0SW1nTGVhdmUgPSB0aGlzLmhhbmRsZUZ1bkZhY3RJbWdMZWF2ZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUZ1bkZhY3RJbWdFbnRlcjEoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZnVuRmFjdEltZzogMX0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUZ1bkZhY3RJbWdFbnRlcjIoKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmdW5GYWN0SW1nOiAyfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVGdW5GYWN0SW1nRW50ZXIzKCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZnVuRmFjdEltZzogM30pXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRnVuRmFjdEltZ0VudGVyNCgpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Z1bkZhY3RJbWc6IDR9KVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUZ1bkZhY3RJbWdFbnRlcjUoKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmdW5GYWN0SW1nOiA1fSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVGdW5GYWN0SW1nTGVhdmUoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZnVuRmFjdEltZzogMH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0gc3R5bGU9e3ttYXJnaW5Ub3A6XCI2JVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc209ezJ9IHhsPXs1fT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IHNtPXs4fSB4bD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5mdW5GYWN0c1RpdGxlfT5GdW4gRmFjdHM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gc209ezJ9IHhsPXs1fT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9IHN0eWxlPXt7bWFyZ2luVG9wOlwiMiVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZnVuRmFjdHNDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdvcmsgYWJyb2FkIGlzIG5vdCBteSBwbGFuIGluaXRpYWxseSwgYnV0IHRyYXZlbCBhYnJvYWQgZG9lcy4gRHVyaW5nIHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbiBwZXJpb2QgaW4gMjAxOCwgSSBzcGVudCBhIG1vbnRoIHRyYXZlbGluZyBpbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOicjOEY4RjhGJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZUZ1bkZhY3RJbWdFbnRlcjF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZUZ1bkZhY3RJbWdMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7I0t5b3RvJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLCB3aGljaCBpcyBteSBmYXZvcml0ZSBjaXR5IChzbyBmYXIpIGFuZCB0b29rIGFuIDgtaG91ciBidXMgdG8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOicjOEY4RjhGJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZUZ1bkZhY3RJbWdFbnRlcjJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZUZ1bkZhY3RJbWdMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7I1Rva3lvJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIHN0YXkgYW5vdGhlciB3ZWVrLiBJIGxvdmUgZXhwbG9yaW5nIHRoZSB3b3JsZCBhbmQgYWxzbyBteSBob21lIGNvdW50cnkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOicjOEY4RjhGJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZUZ1bkZhY3RJbWdFbnRlcjN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZUZ1bkZhY3RJbWdMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7I1RhaXdhbiZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLCB3aGVyZSBuYXR1cmUgaXMgZWFzaWx5IGFjY2Vzc2libGUuIFdoZW4gSSB3YXMgYXQgY29sbGVnZSwgSSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpZWQgZm9yIHRoZSB0cmF2ZWwgJiBleHBlcmllbmNlIHByb2dyYW0gdG8gd29yayBhcyBhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOicjOEY4RjhGJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZUZ1bkZhY3RJbWdFbnRlcjR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZUZ1bkZhY3RJbWdMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7I1JpZGVPcGVyYXRvciZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW4gYW4gYW11c2VtZW50IHBhcmsgaW4gUGVubnN5bHZhbmlhLCB0aGUgVS5TLkEuIEFuZCBub3cgSSBqdXN0IG1vdmVkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOicjOEY4RjhGJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZUZ1bkZhY3RJbWdFbnRlcjV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZUZ1bkZhY3RJbWdMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7I0Jhbmdrb2smbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAxLjUgeWVhcnMsIHRoZSBhZHZlbnR1cmUga2VlcHMgbW92aW5nIG9uLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfSBzdHlsZT17e21hcmdpblRvcDpcIjIlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBtZD17NH0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezh9IG1kPXs0fSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Lbm93TW9yZUFib3V0TWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScvQWJvdXQnIGNsYXNzTmFtZT17c3R5bGVzLnZpZXdMaW5rfT5LTk9XIE1PUkUgQUJPVVQgTUU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IG1kPXs0fT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IHN0eWxlPXt7bWFyZ2luVG9wOlwiMiVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IHN0eWxlPXt7bWFyZ2luVG9wOlwiMiVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs1fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZnVuRmFjdEltZyA9PSAzIHx8IHRoaXMuc3RhdGUuZnVuRmFjdEltZyA9PSAwP3N0eWxlcy5mdW5GYWN0SW1nT25Ib3ZlcjpzdHlsZXMuZnVuRmFjdEltZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Z1bkZhY3QwMX0gc3R5bGU9e3t3aWR0aDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmZ1bkZhY3RJbWcgPT0gMSB8fCB0aGlzLnN0YXRlLmZ1bkZhY3RJbWcgPT0gMD9zdHlsZXMuZnVuRmFjdEltZ09uSG92ZXI6c3R5bGVzLmZ1bkZhY3RJbWd9IHN0eWxlPXt7bWFyZ2luVG9wOicxLjVyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Z1bkZhY3QwM30gc3R5bGU9e3t3aWR0aDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmZ1bkZhY3RJbWcgPT0gNCB8fCB0aGlzLnN0YXRlLmZ1bkZhY3RJbWcgPT0gMD9zdHlsZXMuZnVuRmFjdEltZ09uSG92ZXI6c3R5bGVzLmZ1bkZhY3RJbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmdW5GYWN0MDJ9IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmZ1bkZhY3RJbWcgPT0gMiB8fCB0aGlzLnN0YXRlLmZ1bkZhY3RJbWcgPT0gMD9zdHlsZXMuZnVuRmFjdEltZ09uSG92ZXI6c3R5bGVzLmZ1bkZhY3RJbWd9IHN0eWxlPXt7bWFyZ2luVG9wOicxLjVyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Z1bkZhY3QwNH0gc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGlkZGVuIHNtRG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmZ1bkZhY3RJbWcgPT0gMSB8fCB0aGlzLnN0YXRlLmZ1bkZhY3RJbWcgPT0gMD9zdHlsZXMuZnVuRmFjdEltZ09uSG92ZXI6c3R5bGVzLmZ1bkZhY3RJbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Z1bkZhY3QwNX0gc3R5bGU9e3t3aWR0aDonOTIlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmZ1bkZhY3RJbWcgPT0gNSB8fCB0aGlzLnN0YXRlLmZ1bkZhY3RJbWcgPT0gMD9zdHlsZXMuZnVuRmFjckltZ09uSG92ZXI6c3R5bGVzLmZ1bkZhY3RJbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Z1bkZhY3QwNn0gc3R5bGU9e3t3aWR0aDonMTI2JSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIaWRkZW4gbWRVcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5mdW5GYWN0SW1nID09IDEgfHwgdGhpcy5zdGF0ZS5mdW5GYWN0SW1nID09IDA/c3R5bGVzLmZ1bkZhY3RJbWdPbkhvdmVyOnN0eWxlcy5mdW5GYWN0SW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmdW5GYWN0MDV9IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZnVuRmFjdEltZyA9PSA1IHx8IHRoaXMuc3RhdGUuZnVuRmFjdEltZyA9PSAwP3N0eWxlcy5mdW5GYWNySW1nT25Ib3ZlcjpzdHlsZXMuZnVuRmFjdEltZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZnVuRmFjdDA2fSBzdHlsZT17e3dpZHRoOicxMDAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGdW5mYWN0czsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IGFnb2RhIGZyb20gJy4uLy4uL3B1YmxpYy9hZ29kYS1sb2dvLnBuZyc7XHJcbmltcG9ydCBzaG93Y2FzZTAxIGZyb20gJy4uLy4uL3B1YmxpYy9zaG93Y2FzZS9zaG93Y2FzZTAxLnBuZyc7XHJcbmltcG9ydCBzaG93Y2FzZTAyIGZyb20gJy4uLy4uL3B1YmxpYy9zaG93Y2FzZS9zaG93Y2FzZTAyLnBuZyc7XHJcbmltcG9ydCBzaG93Y2FzZTAzIGZyb20gJy4uLy4uL3B1YmxpYy9zaG93Y2FzZS9zaG93Y2FzZTAzLnBuZyc7XHJcbmltcG9ydCBzaG93Y2FzZTA0IGZyb20gJy4uLy4uL3B1YmxpYy9zaG93Y2FzZS9zaG93Y2FzZTA0LnBuZyc7XHJcbmltcG9ydCBzaG93Y2FzZTA1IGZyb20gJy4uLy4uL3B1YmxpYy9zaG93Y2FzZS9zaG93Y2FzZTA1LnBuZyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgaW1nQm94OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y1RjVGNScsXHJcbiAgICAgICAgaGVpZ2h0OiAnMzByZW0nLFxyXG4gICAgICAgIHdpZHRoOicxMDAlJyxcclxuICAgICAgICBvdmVyZmxvdzonaGlkZGVuJyxcclxuICAgIH0sXHJcbiAgICBpbWdCb3hPbkhvdmVyOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOicjMUYxRjFGJyxcclxuICAgICAgICBvcGFjaXR5OicxMDAlJyxcclxuICAgICAgICBoZWlnaHQ6ICczMHJlbScsXHJcbiAgICAgICAgd2lkdGg6JzEwMCUnLFxyXG4gICAgICAgIG92ZXJmbG93OidoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICcuNHMgZWFzZS1pbi1vdXQnXHJcbiAgICB9LFxyXG4gICAgaW1nMToge1xyXG4gICAgICAgIG9wYWNpdHk6JzAlJ1xyXG4gICAgfSxcclxuICAgIHNob3djYXNlQmxvY2s6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6ICcwLjNyZW0nXHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgU2hvd2Nhc2UgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIFxyXG4gICAgY29uc3QgWyBib3gxLCBzZXRCb3gxXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gICAgXHJcbiAgICBjb25zdCBbIGJveDIsIHNldEJveDJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgWyBib3gzLCBzZXRCb3gzXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IFsgYm94NCwgc2V0Qm94NF0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBbIGJveDUsIHNldEJveDVdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgWyBib3g2LCBzZXRCb3g2XSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUJveDFPbiA9ICgpID0+IHtcclxuICAgICAgICBzZXRCb3gxKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVCb3gyT24gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Qm94MihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQm94M09uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEJveDMoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUJveDRPbiA9ICgpID0+IHtcclxuICAgICAgICBzZXRCb3g0KGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVCb3g1T24gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Qm94NShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQm94Nk9uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEJveDYoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Qm94MSh0cnVlKTtcclxuICAgICAgICBzZXRCb3gyKHRydWUpO1xyXG4gICAgICAgIHNldEJveDModHJ1ZSk7XHJcbiAgICAgICAgc2V0Qm94NCh0cnVlKTtcclxuICAgICAgICBzZXRCb3g1KHRydWUpO1xyXG4gICAgICAgIHNldEJveDYodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9Xb3JrL0Fnb2RhLWRlc2lnbicgdW5kZXJsaW5lPSdub25lJyBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtib3gxPT09dHJ1ZT9jbGFzc2VzLmltZ0JveDpjbGFzc2VzLmltZ0JveE9uSG92ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZUJveDFPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2JveDE9PT10cnVlPycnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVPbkhvdmVyfT4yMDE5LzIwIOKAoiBBZ29kYSBEZXNpZ248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlMk9uSG92ZXJ9PkFuIGV4Y2l0aW5nIGFkdmVudHVyZSBpbiBCYW5na29rIGFuZCB0cmF2ZWwgaW5kdXN0cnk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib3gxPT09dHJ1ZT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YWdvZGF9IGNsYXNzTmFtZT17Ym94MT09PXRydWU/Jyc6Y2xhc3Nlcy5pbWcxfSBzdHlsZT17e21hcmdpblRvcDonMTByZW0nfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9Xb3JrL0Fnb2RhLWZsaWdodHMnIHVuZGVybGluZT0nbm9uZScgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Ym94Mj09PXRydWU/Y2xhc3Nlcy5pbWdCb3g6Y2xhc3Nlcy5pbWdCb3hPbkhvdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVCb3gyT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib3gyPT09dHJ1ZT8nJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlT25Ib3Zlcn0+MjAyMCDigKIgQWdvZGEgRmxpZ2h0cyDigKIgQXBwIERlc2lnbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGUyT25Ib3Zlcn0+Q29tcGxldGUgeW91ciBqb3VybmV5IHdpdGggc2VhdCBzZWxlY3Rpb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib3gyPT09dHJ1ZT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2hvd2Nhc2UwMX0gY2xhc3NOYW1lPXtib3gyPT09dHJ1ZT8nJzpjbGFzc2VzLmltZzF9IHN0eWxlPXt7bWFyZ2luVG9wOicxMHJlbSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgIFxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnNob3djYXNlQmxvY2t9IHNwYWNpbmc9ezF9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJyB1bmRlcmxpbmU9J25vbmUnIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2JveDM9PT10cnVlP2NsYXNzZXMuaW1nQm94OmNsYXNzZXMuaW1nQm94T25Ib3Zlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlQm94M09ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym94Mz09PXRydWU/Jyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZU9uSG92ZXJ9PjIwMTgg4oCiIEtJTkpPIEpld2Vscnkg4oCiIFdlYiBEZXNpZ248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlMk9uSG92ZXJ9PkFuIGUtY29tbWVyY2Ugc2l0ZSBicmluZ3MgYSAxMi15ZWFyIGJyYW5kIGEgbmV3IGxpZmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib3gzPT09dHJ1ZT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2hvd2Nhc2UwMn0gY2xhc3NOYW1lPXtib3gzPT09dHJ1ZT8nJzpjbGFzc2VzLmltZzF9IHN0eWxlPXt7bWFyZ2luVG9wOic0cmVtJyxoZWlnaHQ6JzcwJScsd2lkdGg6JzcwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgdW5kZXJsaW5lPSdub25lJyBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtib3g0PT09dHJ1ZT9jbGFzc2VzLmltZ0JveDpjbGFzc2VzLmltZ0JveE9uSG92ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZUJveDRPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2JveDQ9PT10cnVlPycnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVPbkhvdmVyfT4yMDE3IOKAoiBNT1hBIOKAoiBXZWIgRGVzaWduPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZTJPbkhvdmVyfT5Zb3VyIFRydXN0ZWQgUGFydG5lciBpbiBBdXRvbWF0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym94ND09PXRydWU/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Nob3djYXNlMDN9IGNsYXNzTmFtZT17Ym94ND09PXRydWU/Jyc6Y2xhc3Nlcy5pbWcxfSBzdHlsZT17e21hcmdpblRvcDonNHJlbScsaGVpZ2h0Oic3MCUnLHdpZHRoOic3MCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+ICAgICBcclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5zaG93Y2FzZUJsb2NrfSBzcGFjaW5nPXsxfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17N30+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgdW5kZXJsaW5lPSdub25lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Ym94NT09PXRydWU/Y2xhc3Nlcy5pbWdCb3g6Y2xhc3Nlcy5pbWdCb3hPbkhvdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVCb3g1T259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib3g1PT09dHJ1ZT8nJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlT25Ib3Zlcn0+MjAxNyDigKIgVlVFIE1vdmllIERhdGFiYXNlIOKAoiBXZWIgRGVzaWduPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZTJPbkhvdmVyfT5JTURiIGZvciBBc2lhLCB0aGUgYmlnZ2VzdCBkYXRhYmFzZSBmb3IgbW92aWUsIGNlbGVicml0eSBhbmQgTmV0ZmxpeCBmaW5kZXIuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym94NT09PXRydWU/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Nob3djYXNlMDR9IGNsYXNzTmFtZT17Ym94NT09PXRydWU/Jyc6Y2xhc3Nlcy5pbWcxfSBzdHlsZT17e21hcmdpblRvcDonNXJlbScsaGVpZ2h0Oic3MCUnLHdpZHRoOic3MCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIHVuZGVybGluZT0nbm9uZScgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Ym94Nj09PXRydWU/Y2xhc3Nlcy5pbWdCb3g6Y2xhc3Nlcy5pbWdCb3hPbkhvdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVCb3g2T259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib3g2PT09dHJ1ZT8nJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlT25Ib3Zlcn0+MjAxOCDigKIgR2lnIEJpcmQgRXZlbnQg4oCiIEFwcCBEZXNpZ248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlMk9uSG92ZXJ9PkNlbGVicmF0ZSBldmVyeSBtdXNpYyBldmVudCB5b3UgZW5qb3kgd2l0aCBwZW9wbGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib3g2PT09dHJ1ZT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2hvd2Nhc2UwNX0gY2xhc3NOYW1lPXtib3g2PT09dHJ1ZT8nJzpjbGFzc2VzLmltZzF9IHN0eWxlPXt7bWFyZ2luVG9wOic0cmVtJyxoZWlnaHQ6JzcwJScsd2lkdGg6JzcwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgIFxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XHJcbmltcG9ydCBPcGVuSW5OZXdJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9PcGVuSW5OZXcnO1xyXG5pbXBvcnQgd3JpdGluZzAxIGZyb20gJy4uLy4uL3B1YmxpYy93cml0aW5ncy93cml0aW5nMDEucG5nJztcclxuaW1wb3J0IHdyaXRpbmcwMiBmcm9tICcuLi8uLi9wdWJsaWMvd3JpdGluZ3Mvd3JpdGluZzAyLnBuZyc7XHJcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgY29sb3I6JyMxRjFGMUYnLCBcclxuICAgICAgICBmb250RmFtaWx5OiAnUm9ib3RvIFNsYWInLCBcclxuICAgICAgICBwYWRkaW5nQm90dG9tOicwLjAycmVtJywgXHJcbiAgICAgICAgbGluZUhpZ2h0OicwLjAycmVtJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbTonMnB4IHNvbGlkIGJsYWNrJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgV3JpdGluZ3MgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsvKiB0aXRsZSAqL31cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfSBzdHlsZT17e3BhZGRpbmdUb3A6XCI2JVwifX0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy53cml0aW5nc1RpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV3JpdGluZ3NcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gbWQ9ezR9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICB7LyogdGl0bGUgKi99XHJcblxyXG4gICAgICAgICAgICB7LyogYXJ0aWNsZSAqL31cclxuXHJcbiAgICAgICAgICAgIDxIaWRkZW4gc21Eb3duPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9IHN0eWxlPXt7cGFkZGluZ1RvcDpcIjYlXCIsd3JhcDonbm93cmFwJ319IHNwYWNpbmc9ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs0fSBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlQmxvY2t9IHN0eWxlPXt7bWFyZ2luVG9wOicxJScscGFkZGluZ1RvcDoyMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGVDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vY2FyZWVyc2F0YWdvZGEuY29tL2Jsb2cvbmV3LWRlc2lnbmVyLWFnb2RhLWJhbmdrb2stcmVsb2NhdGlvbi8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjonIzFGMUYxRicsIGZvbnRGYW1pbHk6ICdSb2JvdG8gU2xhYid9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPSdub29wZW5lcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbiBleGNpdGluZyBhZHZlbnR1cmUgZm9yIGEgbmV3IGRlc2lnbmVyIGF0IEFnb2RhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZlbnNwOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcGVuSW5OZXdJY29uIHN0eWxlPXt7Zm9udFNpemU6J2luaGVyaXQnLG1hcmdpbkJvdHRvbTonLTVweCd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTpcIjE2cHhcIixmb250V2VpZ2h0OjUwMCxmb250RmFtaWx5OidSb2JvdG8nfX0+RGVjZW1iZXIgMjAxOTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VCbG9ja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17d3JpdGluZzAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzEwMCUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezR9IGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGVCbG9ja30gc3R5bGU9e3ttYXJnaW5MZWZ0OicxJScsbWFyZ2luVG9wOicxJScscGFkZGluZ1RvcDoyMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGVDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vY2FyZWVyc2F0YWdvZGEuY29tL2Jsb2cvbWVudG9yaW5nLWJlaGF2aW9yYWwtZGVzaWduZXJzLXRoYWlsYW5kLWFnb2RhLydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOicjMUYxRjFGJywgZm9udEZhbWlseTogJ1JvYm90byBTbGFiJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9J25vb3BlbmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lbnRvcmluZyB0aGUgTmV4dCBHZW5lcmF0aW9uIG9mIEJlaGF2aW9yYWwgRGVzaWduZXJzIGluIFRoYWlsYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZlbnNwOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcGVuSW5OZXdJY29uIHN0eWxlPXt7Zm9udFNpemU6J2luaGVyaXQnLG1hcmdpbkJvdHRvbTonLTVweCd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTpcIjE2cHhcIixmb250V2VpZ2h0OjUwMCxmb250RmFtaWx5OidSb2JvdG8nfX0+QXVndXN0IDIwMjA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlQmxvY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3dyaXRpbmcwMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OicxMDAlJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0hpZGRlbj5cclxuXHJcbiAgICAgICAgICAgIDxIaWRkZW4gbWRVcD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfSBzdHlsZT17e3BhZGRpbmdUb3A6XCI2JVwifX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlQmxvY2t9IHN0eWxlPXt7cGFkZGluZ1RvcDoyMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OicxN3JlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vY2FyZWVyc2F0YWdvZGEuY29tL2Jsb2cvbmV3LWRlc2lnbmVyLWFnb2RhLWJhbmdrb2stcmVsb2NhdGlvbi8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjonIzFGMUYxRicsIGZvbnRGYW1pbHk6ICdSb2JvdG8gU2xhYid9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPSdub29wZW5lcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbiBleGNpdGluZyBhZHZlbnR1cmUgZm9yIGEgbmV3IGRlc2lnbmVyIGF0IEFnb2RhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZlbnNwOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcGVuSW5OZXdJY29uIHN0eWxlPXt7Zm9udFNpemU6J2luaGVyaXQnLG1hcmdpbkJvdHRvbTonLTVweCd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTpcIjE2cHhcIixmb250V2VpZ2h0OjUwMCxmb250RmFtaWx5OidSb2JvdG8nfX0+RGVjZW1iZXIgMjAxOTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VCbG9ja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17d3JpdGluZzAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzEwMCUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlQmxvY2t9IHN0eWxlPXt7bWFyZ2luVG9wOicxJScscGFkZGluZ1RvcDoyMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OicxN3JlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vY2FyZWVyc2F0YWdvZGEuY29tL2Jsb2cvbWVudG9yaW5nLWJlaGF2aW9yYWwtZGVzaWduZXJzLXRoYWlsYW5kLWFnb2RhLydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOicjMUYxRjFGJywgZm9udEZhbWlseTogJ1JvYm90byBTbGFiJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9J25vb3BlbmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lbnRvcmluZyB0aGUgTmV4dCBHZW5lcmF0aW9uIG9mIEJlaGF2aW9yYWwgRGVzaWduZXJzIGluIFRoYWlsYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZlbnNwOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcGVuSW5OZXdJY29uIHN0eWxlPXt7Zm9udFNpemU6J2luaGVyaXQnLG1hcmdpbkJvdHRvbTonLTVweCd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTpcIjE2cHhcIixmb250V2VpZ2h0OjUwMCxmb250RmFtaWx5OidSb2JvdG8nfX0+QXVndXN0IDIwMjA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlQmxvY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3dyaXRpbmcwMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OicxMDAlJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0hpZGRlbj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBhcnRpY2xlICovfVxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9IHN0eWxlPXt7cGFkZGluZ1RvcDpcIjUlXCIsIHBhZGRpbmdCb3R0b206XCI2JVwifX0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1B1YmxpYy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBtYWluOiB7XHJcbiAgICAgICAgaGVpZ2h0OicxMDB2aCcsIFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6JzYlJywgXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6JzYlJywgXHJcbiAgICAgICAgcGFkZGluZ1RvcDogXCIxcmVtXCJcclxuICAgIH0sXHJcbiAgICBsaW5rOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgICAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6ICczMnB4JyxcclxuICAgICAgICBjb2xvcjonIzhGOEY4RicsXHJcbiAgICAgICAgZm9udFNpemU6JzE4cHgnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6J2JsYWNrJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkcmF3ZXJMaW5rOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICB0ZXh0QWxpZ246J2xlZnQnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICAgICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgICAgIGZvbnRTaXplOicyMnB4JyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOidibGFjaydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZHJhd2VySGVhZGVyOiB7XHJcbiAgICAgICAgcGFkZGluZ1RvcDonM3JlbSdcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgRHJhd2VyID0gKHByb3BzKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgaGFuZGxlRHJhd2VyQ2xvc2VcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZHJhd2VyVGl0bGV9PnNhbGllanVuZzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PjwvR3JpZD4gICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT48L0dyaWQ+ICAgIFxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezN9PjwvR3JpZD4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17MX0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicsIG1hcmdpblRvcDonLTAuNXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRHJhd2VyQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gc3R5bGU9e3tjb2xvcjonI0I4QjhCOCd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySGVhZGVyfSBzdHlsZT17e21hcmdpblRvcDonNHJlbSd9fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1dvcmtcIiB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJMaW5rfT5XT1JLPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPiAgICBcclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1dyaXRpbmdzXCIgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyTGlua30+V1JJVElOR1M8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9BYm91dFwiIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckxpbmt9PkFCT1VUPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy4vU2FsaWVDaGllbl9SZXN1bWUucGRmJyB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lcicgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyTGlua30+UkVTVU1FPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPiAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvUHVibGljLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGxpbms6IHtcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6JzEuOHJlbScsXHJcbiAgICAgICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgICAgIGZvbnRTaXplOicxcmVtJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOidibGFjaydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29weXJpZ2h0OiB7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgICAgICBsaW5lSGVpZ2h0OicwLjc1cmVtJyxcclxuICAgICAgICBmb250U2l6ZTonMC43NXJlbScsXHJcbiAgICAgICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6J2JsYWNrJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7ICAgIFxyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckJsb2NrfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17N30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNhbGllIFNoZW5nSnVuZyBDaGllbiAtLS0gUHJvZHVjdCBEZXNpZ25lclxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs1fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckxlZnRUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9wZW4gdG8gbmV3IG9wcG9ydHVuaXRpZXNcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJMZWZ0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbGllanVuZzQ3QGdtYWlsLmNvbVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NhbGllLWNoaWVuLycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZScgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXInXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMaW5rZWRpblxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3NhbGllanVuZy5tZWRpdW0uY29tLycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZScgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXInXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNZWRpdW1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfSBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJCbG9jazJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvcHlyaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERlc2lnbmVkIGJ5IENoaWVuIFNoZW5nSnVuZyDCqSAyMDIwIGFsbCByaWdodHMgcmVzZXJ2ZSBcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29weXJpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRGV2ZWxvcGVkIGJ5IDxMaW5rIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmNvcHlyaWdodH0+V2FuZyBXZWlBbjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e2hlaWdodDonM3JlbSd9fT48L0dyaWQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2Nzcy9QdWJsaWMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGxpbms6IHtcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogJzMycHgnLFxyXG4gICAgICAgIGNvbG9yOicjOEY4RjhGJyxcclxuICAgICAgICBmb250U2l6ZTonMXJlbScsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjonYmxhY2snXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRyYXdlckxpbms6IHtcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIHRleHRBbGlnbjonbGVmdCcsXHJcbiAgICAgICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICAgICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgICAgICBjb2xvcjonIzhGOEY4RicsXHJcbiAgICAgICAgZm9udFNpemU6JzIycHgnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6J2JsYWNrJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkcmF3ZXJIZWFkZXI6IHtcclxuICAgICAgICBwYWRkaW5nTGVmdDonMnJlbScsXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0OicycmVtJyxcclxuICAgICAgICBtYXJnaW5Ub3A6JzNyZW0nXHJcbiAgICB9LFxyXG4gICAgbGlua0FuY2hvcjoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICAgICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgICAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXHJcbiAgICAgICAgY29sb3I6J2JsYWNrJyxcclxuICAgICAgICBmb250U2l6ZTonMXJlbSdcclxuICAgIH0sXHJcbiAgICBpY29uOiB7XHJcbiAgICAgICAgZm9udFNpemU6JzEuNXJlbScsXHJcbiAgICAgICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6JyMxRjFGMUYnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1lbnVCdXR0b246IHtcclxuICAgICAgICBwYWRkaW5nVG9wOicyLjVyZW0nLFxyXG4gICAgICAgIHRleHRBbGlnbjonY2VudGVyJ1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGhhbmRsZURyYXdlck9wZW5cclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluMX0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc3R5bGU9e3twYWRkaW5nVG9wOicxLjVyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIHVuZGVybGluZT0nbm9uZScgc3R5bGU9e3tjb2xvcjonIzFGMUYxRid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5zYWxpZWp1bmc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxIaWRkZW4gbWREb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBjbGFzc05hbWU9e3N0eWxlcy5tZW51QmFyfSBzdHlsZT17e3BhZGRpbmdUb3A6JzEuNXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9Xb3JrJyB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvV29yayc/Y2xhc3Nlcy5saW5rQW5jaG9yOmNsYXNzZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdPUktcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvV3JpdGluZ3MnIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy9Xcml0aW5ncyc/Y2xhc3Nlcy5saW5rQW5jaG9yOmNsYXNzZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdSSVRJTkdTXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL0Fib3V0JyB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvQWJvdXQnP2NsYXNzZXMubGlua0FuY2hvcjpjbGFzc2VzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBQk9VVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy4vU2FsaWVDaGllbl9SZXN1bWUucGRmJyB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lcicgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJFU1VNRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8SGlkZGVuIGxnVXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHNtPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHNtPXsxfSBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURyYXdlck9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpbjFcIjogXCJIb21lX21haW4xX18xQWowYVwiLFxuXHRcImJ1dHRvblZpZXdBbGxQcm9qZWN0c1wiOiBcIkhvbWVfYnV0dG9uVmlld0FsbFByb2plY3RzX18zT3pldFwiLFxuXHRcIm1haW4yXCI6IFwiSG9tZV9tYWluMl9fSVBQVVFcIixcblx0XCJtYWluM1wiOiBcIkhvbWVfbWFpbjNfXzFhdWR3XCIsXG5cdFwidmlld0xpbmtcIjogXCJIb21lX3ZpZXdMaW5rX18ydUZpZVwiLFxuXHRcImJhbm5lclwiOiBcIkhvbWVfYmFubmVyX18zOXNMZVwiLFxuXHRcImJhbm5lcjJcIjogXCJIb21lX2Jhbm5lcjJfXzJuaExrXCIsXG5cdFwic2hvd2Nhc2VCbG9ja1wiOiBcIkhvbWVfc2hvd2Nhc2VCbG9ja19fTnJ2TWdcIixcblx0XCJzaG93Y2FzZUJveFwiOiBcIkhvbWVfc2hvd2Nhc2VCb3hfXzFpZG9LXCIsXG5cdFwic2hvd2Nhc2VCb3gyXCI6IFwiSG9tZV9zaG93Y2FzZUJveDJfXzNueVlaXCIsXG5cdFwiaW1nXCI6IFwiSG9tZV9pbWdfXzFLZ2lDXCIsXG5cdFwidGl0bGVPbkhvdmVyXCI6IFwiSG9tZV90aXRsZU9uSG92ZXJfXzFiaEZoXCIsXG5cdFwidGl0bGUyT25Ib3ZlclwiOiBcIkhvbWVfdGl0bGUyT25Ib3Zlcl9fMzdHRHRcIixcblx0XCJ3cml0aW5nc1RpdGxlXCI6IFwiSG9tZV93cml0aW5nc1RpdGxlX18xZW1JWlwiLFxuXHRcImFydGljbGVCbG9ja1wiOiBcIkhvbWVfYXJ0aWNsZUJsb2NrX18zUGppTlwiLFxuXHRcImFydGljbGVDb250ZW50XCI6IFwiSG9tZV9hcnRpY2xlQ29udGVudF9fU01NQWtcIixcblx0XCJpbWFnZUJsb2NrXCI6IFwiSG9tZV9pbWFnZUJsb2NrX18ycURBcVwiLFxuXHRcImZ1bkZhY3RzVGl0bGVcIjogXCJIb21lX2Z1bkZhY3RzVGl0bGVfXzJYa24wXCIsXG5cdFwiYnV0dG9uS25vd01vcmVBYm91dE1lXCI6IFwiSG9tZV9idXR0b25Lbm93TW9yZUFib3V0TWVfXzNoSHhyXCIsXG5cdFwiZnVuRmFjdHNDb250ZW50XCI6IFwiSG9tZV9mdW5GYWN0c0NvbnRlbnRfX0ZLWElFXCIsXG5cdFwiZnVuRmFjdEltZ1wiOiBcIkhvbWVfZnVuRmFjdEltZ19fMmxjQ1pcIixcblx0XCJmdW5GYWN0SW1nT25Ib3ZlclwiOiBcIkhvbWVfZnVuRmFjdEltZ09uSG92ZXJfXzE4NTVRXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXJvdXNlbE91dGVyXCI6IFwiUHVibGljX2Nhcm91c2VsT3V0ZXJfXzJtWl9kXCIsXG5cdFwiaW1nRGVzY3JpcHRpb25cIjogXCJQdWJsaWNfaW1nRGVzY3JpcHRpb25fX094WWJRXCIsXG5cdFwiY2Fyb3VzZWxJbWdcIjogXCJQdWJsaWNfY2Fyb3VzZWxJbWdfXzF3TDNUXCIsXG5cdFwiY2FwdGlvbkNvbnRhaW5lclwiOiBcIlB1YmxpY19jYXB0aW9uQ29udGFpbmVyX19haTE2cVwiLFxuXHRcImRyYXdlclRpdGxlXCI6IFwiUHVibGljX2RyYXdlclRpdGxlX18tTEVTOFwiLFxuXHRcImxpbmtcIjogXCJQdWJsaWNfbGlua19fMjgxZEdcIixcblx0XCJkcmF3ZXJCdXR0b25cIjogXCJQdWJsaWNfZHJhd2VyQnV0dG9uX19fVUZyLVwiLFxuXHRcIm1haW4xXCI6IFwiUHVibGljX21haW4xX181d0M4NlwiLFxuXHRcInRpdGxlXCI6IFwiUHVibGljX3RpdGxlX19feDFWY1wiLFxuXHRcIm1lbnVCYXJcIjogXCJQdWJsaWNfbWVudUJhcl9fMzNLWHpcIixcblx0XCJmb290ZXJCbG9ja1wiOiBcIlB1YmxpY19mb290ZXJCbG9ja19fenFBNVpcIixcblx0XCJmb290ZXJCbG9jazJcIjogXCJQdWJsaWNfZm9vdGVyQmxvY2syX18yR1QxeVwiLFxuXHRcImZvb3RlclRpdGxlXCI6IFwiUHVibGljX2Zvb3RlclRpdGxlX19GT2ZMbVwiLFxuXHRcImNvcHlyaWdodFwiOiBcIlB1YmxpY19jb3B5cmlnaHRfXzNJUmYyXCIsXG5cdFwiZm9vdGVyTGVmdFRpdGxlXCI6IFwiUHVibGljX2Zvb3RlckxlZnRUaXRsZV9fMXIxQTJcIixcblx0XCJmb290ZXJMZWZ0Q29udGVudFwiOiBcIlB1YmxpY19mb290ZXJMZWZ0Q29udGVudF9fM2pVUldcIlxufTtcbiIsImltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHsgQmFubmVyIH0gZnJvbSAnLi4vY29tcG9uZW50L0hvbWUvQmFubmVyLmpzJztcclxuaW1wb3J0IHsgU2hvd2Nhc2UgfSBmcm9tICcuLi9jb21wb25lbnQvSG9tZS9TaG93Y2FzZS5qcyc7XHJcbmltcG9ydCB7IFdyaXRpbmdzIH0gZnJvbSAnLi4vY29tcG9uZW50L0hvbWUvV3JpdGluZ3MuanMnO1xyXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi9jb21wb25lbnQvUHVibGljL0Zvb3Rlci5qcyc7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudC9QdWJsaWMvSGVhZGVyLmpzJztcclxuaW1wb3J0IEZ1bmZhY3RzIGZyb20gJy4uL2NvbXBvbmVudC9Ib21lL0Z1bmZhY3RzLmpzJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9jc3MvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgeyBEcmF3ZXIgfSBmcm9tICcuLi9jb21wb25lbnQvUHVibGljL0RyYXdlci5qcyc7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbZHJhd2VyLCBzZXREcmF3ZXJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURyYXdlck9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RHJhd2VyKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZURyYXdlckNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldERyYXdlcihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICBcclxuICAgICAgICAgICAge2RyYXdlciA9PSBmYWxzZSA/XHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICB7LyogdGl0bGUgJiBtZW51ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURyYXdlck9wZW49e2hhbmRsZURyYXdlck9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiB0aXRsZSAmIG1lbnUgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogYmFubmVyICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0gc3R5bGU9e3ttYXJnaW5Ub3A6XCIxMiVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbm5lci8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPiAgICBcclxuXHJcbiAgICAgICAgICAgICAgICB7LyogYmFubmVyICovfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBzaG93Y2FzZSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9IHN0eWxlPXt7bWFyZ2luVG9wOlwiMTIlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG93Y2FzZS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBzaG93Y2FzZSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogdmlldyBhbGwgcHJvamVjdHMgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfSBzdHlsZT17e21hcmdpblRvcDpcIjglXCIsIG1hcmdpbkJvdHRvbTpcIjglXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBzbT17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScvV29yaycgY2xhc3NOYW1lPXtzdHlsZXMudmlld0xpbmt9PlZJRVcgQUxMIFBST0pFQ1RTPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIHZpZXcgYWxsIHByb2plY3RzICovfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiB3cml0aW5ncyAqL31cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW4yfT5cclxuICAgICAgICAgICAgICAgICAgICA8V3JpdGluZ3MvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIHdyaXRpbmdzICovfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBmdW4gZmFjdHMgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8RnVuZmFjdHMvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIGZ1biBmYWN0cyAqL31cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogZm9vdGVyICovfVxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbjN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIGZvb3RlciAqL31cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDonJ31cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtkcmF3ZXIgPT0gdHJ1ZSA/XHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjonIzFmMWYxZid9fT5cclxuICAgICAgICAgICAgICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURyYXdlckNsb3NlPXtoYW5kbGVEcmF3ZXJDbG9zZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDonJ31cclxuXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Fnb2RhLWxvZ28tMTdhOTQ3ODliZWJmN2RiZDY3YmRiMjM4NmU4NzU0NmMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Z1bkZhY3QwMS05ZjA0NzRkM2RmM2NlODFhNjRmMGY2YTkzMzQxZDQxYi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZnVuRmFjdDAyLWU4NDA0NGMxYTA1ZjU1MDliZDJkZTVmNTcwMjlhNzhkLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9mdW5GYWN0MDMtOTk2ODQ3MTY1ZmNmMmI3YWQ2ZTc5MTNjNzVlZGYyZGIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Z1bkZhY3QwNC02ZWVkNTkwM2Y1MThmZjA4MDRhOGQ4MDE0M2UyYzRhOC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZnVuRmFjdDA1LWIzNTc5NjkxMWZiZDg2YzFiYjQ0MGQ4MGYyZjFmZTI3LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9mdW5GYWN0MDYtM2ZiZDkxZTVlNDY5MGU1ZjI5MTJhNmNlNWYyNDZjYjQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Nob3djYXNlMDEtNmIwZTdlZjI0MWIyZmViOWVjY2Y5NGYyYWVmNjY4NzEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Nob3djYXNlMDItYzQ5ODk4M2VmMjljNTQwMDJlZWYzZTZlZjdkMzQ2OWQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Nob3djYXNlMDMtZDBjMjUyZjhmN2JlYmQ3OThlOTE5MTVlY2ZhZjcwNDIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Nob3djYXNlMDQtNmZhMjIyNWRmNmIyYzlmOTdmNjkzOWQ4ZWJlNmZjNTUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Nob3djYXNlMDUtYmViZDZiZGIzYzA1ZTRmNjI2NDZkOWM4NGM1ZTk1NjcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3dyaXRpbmcwMS0yMTVkOTFkMGQ3Zjc0MDY2NjE5YTRhMTA2MmE1YjM1OS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvd3JpdGluZzAyLTExMjE5MjZkOGQ2ZGNhN2FiYTFlYTVjMDFjMjY1NjA2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvT3BlbkluTmV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=