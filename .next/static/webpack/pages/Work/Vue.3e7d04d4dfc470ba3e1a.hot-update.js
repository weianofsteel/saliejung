webpackHotUpdate_N_E("pages/Work/Vue",{

/***/ "./component/Work/Vue/Vue03.js":
/*!*************************************!*\
  !*** ./component/Work/Vue/Vue03.js ***!
  \*************************************/
/*! exports provided: Vue03 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vue03", function() { return Vue03; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../css/Work.module.css */ "./css/Work.module.css");
/* harmony import */ var _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_Work_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_vue_vue09_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/vue/vue09.png */ "./public/vue/vue09.png");
/* harmony import */ var _public_vue_vue09_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_vue_vue09_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_vue_vue10_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/vue/vue10.png */ "./public/vue/vue10.png");
/* harmony import */ var _public_vue_vue10_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_vue_vue10_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_vue_vue11_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/vue/vue11.png */ "./public/vue/vue11.png");
/* harmony import */ var _public_vue_vue11_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_vue_vue11_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_vue_vue12_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../public/vue/vue12.png */ "./public/vue/vue12.png");
/* harmony import */ var _public_vue_vue12_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_vue_vue12_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_vue_vue13_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../public/vue/vue13.png */ "./public/vue/vue13.png");
/* harmony import */ var _public_vue_vue13_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_vue_vue13_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_dot_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../public/dot.png */ "./public/dot.png");
/* harmony import */ var _public_dot_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_dot_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var react_in_viewport__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-in-viewport */ "./node_modules/react-in-viewport/dist/es/index.js");
/* harmony import */ var react_in_viewport__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_in_viewport__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Work\\Vue\\Vue03.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["makeStyles"])({
  link: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    color: '#8F8F8F',
    fontSize: '1rem',
    letterSpacing: '1px',
    "&:hover": {
      color: 'black'
    }
  }
});

var Block = function Block(props) {
  _s();

  var forwardedRef = props.forwardedRef,
      visible = props.visible;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (visible == true) {
      forwardedRef.current.play();
    } else {
      forwardedRef.current.pause();
    }
  }, [visible]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, visible == true ? __jsx("video", {
    ref: forwardedRef,
    width: "100%",
    controls: true,
    autoPlay: true,
    muted: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx("source", {
    type: "video/mp4",
    src: "/video/vue.mp4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  })) : __jsx("video", {
    ref: forwardedRef,
    width: "100%",
    controls: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("source", {
    type: "video/mp4",
    src: "/video/vue.mp4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  })));
};

_s(Block, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Block;
var ViewportBlock = react_in_viewport__WEBPACK_IMPORTED_MODULE_11___default()(Block);
_c2 = ViewportBlock;
var Vue03 = function Vue03() {
  _s2();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];

  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.progressMain,
    style: {
      paddingTop: '5%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 2,
    md: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 8,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.content,
    style: {
      marginTop: '8%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    style: {
      textAlign: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.progressTitle1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 33
    }
  }, "THE PROCESS / 02")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    style: {
      textAlign: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.progressTitle2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 33
    }
  }, "Design & Iterate")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    style: {
      textAlign: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.dotLine,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 33
    }
  }, "\xB7\xA0\xB7\xA0\xB7")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 2,
    md: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    style: {
      marginTop: '8%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: false,
    md: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.designHighlight,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 33
    }
  }, "FINAL DESIGN")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.designHighlightTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 33
    }
  }, "Fulfill All Your Needs about Movies")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.designHighlightContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 33
    }
  }, "Beyond the imagination, we finally launched the website with most of the fundamental features in Jan 2018. Users can add their favorite movie to a watchlist and see other users\u2019 ratings. They can discuss and share their opinions after watching a movie.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 37
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 42
    }
  }), "More than that, we cooperated with two theaters so you can directly book a movie ticket through VUE. We have curated the largest movie database that contains over 350,000 movies and 2 million cast data in Mandarin. So far, the website of page views hit 100 users in real-time and still growing.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: false,
    md: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    style: {
      marginTop: '2%',
      paddingLeft: '4%',
      paddingRight: '4%'
    },
    spacing: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    md: 6,
    style: {
      paddingRight: '0.5rem'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _public_vue_vue09_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    style: {
      width: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 33
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _public_vue_vue11_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    style: {
      width: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 33
    }
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _public_vue_vue10_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    style: {
      width: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 33
    }
  }))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    style: {
      marginTop: '8%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: false,
    md: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.designHighlight,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 33
    }
  }, "LAUNCH CAMPAIGN")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.designHighlightTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 33
    }
  }, "Big Announcement")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.designHighlightContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 33
    }
  }, "It is time to introduce the website to more people. We planned a marketing campaign on Facebook, which the goal is to let people know what VUE can do for them and getting more exposure. Considering the engagement rate and affinity categories, we created a video to reach more audiences. We spent some marketing budget for the campaign, and it attracted page likes and increased page views on the website.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: false,
    md: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    style: {
      marginTop: '4%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: false,
    md: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    md: 8,
    style: {
      paddingLeft: '5%',
      paddingRight: '5%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 21
    }
  }, __jsx(ViewportBlock, {
    onEnterViewport: function onEnterViewport() {
      setVisible(true);
    },
    onLeaveViewport: function onLeaveViewport() {
      setVisible(false);
    },
    visible: visible,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: false,
    md: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    style: {
      marginTop: '8%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 2,
    style: {
      textAlign: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.dotLine,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 25
    }
  }, "\xB7\xA0\xB7\xA0\xB7")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    style: {
      marginTop: '8%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: false,
    md: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.designHighlight,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 33
    }
  }, "MEDIA KIT")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.designHighlightTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 33
    }
  }, "One More Thing")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.designHighlightContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 33
    }
  }, "In mid-2017, we received an inquiry for cooperation from Malaysia. For the first time, I researched to know more about the digital experience in South Asia. Most of the online experience is old-style and hard to use, except for some websites such as\xA0", __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
    href: "https://pro.similarweb.com/#/companyresearch/websiteanalysis/overview/website-performance/kinjo.co/*/764/2020.01-2020.03?webSource=Total",
    underline: "none",
    className: classes.link,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 37
    }
  }, "BookMyShow"), "\xA0in India. We took the chance and cooperated with a local marketing company in Malaysia, which started by translating VUE into Malay.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 37
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 42
    }
  }), "Besides, our marketing team actively looked for cooperation opportunities with more theatres. We created a complete media kit to explain our idea, our development background, all the UI and functional design, and the potential possibility of VUE.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: false,
    md: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    style: {
      marginTop: '4%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: false,
    md: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    md: 8,
    style: {
      paddingLeft: '4%',
      paddingRight: '4%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: _public_vue_vue12_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    style: {
      width: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: false,
    md: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    style: {},
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: false,
    md: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.imgDescription,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 33
    }
  }, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 37
    }
  }), "Take a look at the\xA0", __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
    href: "/vue_media-kit_2018.pdf",
    target: "_blank",
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.imgDescriptionLink,
    style: {
      color: '#8F8F8F'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 37
    }
  }, "media kit"), "\xA0if you are interested.")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: false,
    md: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    style: {
      marginTop: '8%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 2,
    md: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 8,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    style: {
      textAlign: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.progressTitle1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 33
    }
  }, "THE PROCESS / 03")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    style: {
      textAlign: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.progressTitle2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 33
    }
  }, "Next Step")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    style: {
      textAlign: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.dotLine,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 33
    }
  }, "\xB7\xA0\xB7\xA0\xB7")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 2,
    md: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    style: {
      marginTop: '8%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 1,
    md: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 10,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 3,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.collectInsightContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 33
    }
  }, "Due to the fast development of VUE, we had started to optimize UI, UX design, and plan for new sections for a few months. Our main objects are:")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    style: {
      marginTop: '3%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.dotAlign,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 11,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.collectInsightContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 41
    }
  }, "A landing page to let people know every magic on VUE in a short time")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.dotAlign,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 11,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.collectInsightContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 41
    }
  }, "A new page for VOD services (still relating to the movie and TV shows)")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.dotAlign,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 11,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.collectInsightContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 41
    }
  }, "More engagement in the movie reviews and discussion (maybe forum)")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 1,
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.dotAlign,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _public_dot_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 41
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 11,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _css_Work_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.collectInsightContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 41
    }
  }, "More sociable between users (those movie geeks)")))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 1,
    md: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    style: {
      marginTop: '3%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 1,
    md: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 10,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: _public_vue_vue13_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    style: {
      width: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 1,
    md: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 21
    }
  })), __jsx("div", {
    style: {
      marginTop: '4%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 17
    }
  }, "\xA0")));
};

_s2(Vue03, "yJH7Z0FeEcaOS/hVRUzGfd5Q5Fk=", false, function () {
  return [useStyles];
});

_c3 = Vue03;

var _c, _c2, _c3;

$RefreshReg$(_c, "Block");
$RefreshReg$(_c2, "ViewportBlock");
$RefreshReg$(_c3, "Vue03");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1dvcmsvVnVlL1Z1ZTAzLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJsaW5rIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJjb2xvciIsImZvbnRTaXplIiwibGV0dGVyU3BhY2luZyIsIkJsb2NrIiwicHJvcHMiLCJmb3J3YXJkZWRSZWYiLCJ2aXNpYmxlIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInBsYXkiLCJwYXVzZSIsIlZpZXdwb3J0QmxvY2siLCJoYW5kbGVWaWV3cG9ydCIsIlZ1ZTAzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNldFZpc2libGUiLCJjbGFzc2VzIiwic3R5bGVzIiwicHJvZ3Jlc3NNYWluIiwicGFkZGluZ1RvcCIsImNvbnRlbnQiLCJtYXJnaW5Ub3AiLCJ0ZXh0QWxpZ24iLCJwcm9ncmVzc1RpdGxlMSIsInByb2dyZXNzVGl0bGUyIiwiZG90TGluZSIsImRlc2lnbkhpZ2hsaWdodCIsImRlc2lnbkhpZ2hsaWdodFRpdGxlIiwiZGVzaWduSGlnaGxpZ2h0Q29udGVudCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwidnVlMDkiLCJ3aWR0aCIsInZ1ZTExIiwidnVlMTAiLCJ2dWUxMiIsImltZ0Rlc2NyaXB0aW9uIiwiaW1nRGVzY3JpcHRpb25MaW5rIiwiY29sbGVjdEluc2lnaHRDb250ZW50IiwiZG90QWxpZ24iLCJkb3QiLCJ2dWUxMyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyw0RUFBVSxDQUFDO0FBQ3pCQyxNQUFJLEVBQUU7QUFDRkMsY0FBVSxFQUFDLFFBRFQ7QUFFRkMsY0FBVSxFQUFDLEdBRlQ7QUFHRkMsU0FBSyxFQUFDLFNBSEo7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Q0EzTkosRUF1U0ksTUFBQyw4REFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixTQUFLLEVBQUU7QUFBQ2pCLGVBQVMsRUFBQztBQUFYLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSSxNQUFDLDhEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLENBQWY7QUFBa0IsTUFBRSxFQUFFLENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJLE1BQUMsOERBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUUsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFFb0IsNERBQVY7QUFBaUIsU0FBSyxFQUFFO0FBQUNULFdBQUssRUFBQztBQUFQLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUhKLEVBTUksTUFBQyw4REFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxDQUFmO0FBQWtCLE1BQUUsRUFBRSxDQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosQ0F2U0osRUFpVEk7QUFBSyxTQUFLLEVBQUU7QUFBQ1gsZUFBUyxFQUFDO0FBQVgsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBalRKLENBRkosQ0FESjtBQTBUSCxDQWhVTTs7SUFBTVQsSztVQUlPbEIsUzs7O01BSlBrQixLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1dvcmsvVnVlLjNlN2QwNGQ0ZGZjNDcwYmEzZTFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9jc3MvV29yay5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHZ1ZTA5IGZyb20gJy4uLy4uLy4uL3B1YmxpYy92dWUvdnVlMDkucG5nJztcclxuaW1wb3J0IHZ1ZTEwIGZyb20gJy4uLy4uLy4uL3B1YmxpYy92dWUvdnVlMTAucG5nJztcclxuaW1wb3J0IHZ1ZTExIGZyb20gJy4uLy4uLy4uL3B1YmxpYy92dWUvdnVlMTEucG5nJztcclxuaW1wb3J0IHZ1ZTEyIGZyb20gJy4uLy4uLy4uL3B1YmxpYy92dWUvdnVlMTIucG5nJztcclxuaW1wb3J0IHZ1ZTEzIGZyb20gJy4uLy4uLy4uL3B1YmxpYy92dWUvdnVlMTMucG5nJztcclxuaW1wb3J0IGRvdCBmcm9tICcuLi8uLi8uLi9wdWJsaWMvZG90LnBuZyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgaGFuZGxlVmlld3BvcnQgZnJvbSAncmVhY3QtaW4tdmlld3BvcnQnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgbGluazoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICAgICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgICAgIGZvbnRTaXplOicxcmVtJyxcclxuICAgICAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6J2JsYWNrJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBCbG9jayA9IChwcm9wcykgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCB7IGZvcndhcmRlZFJlZiwgdmlzaWJsZSB9ID0gcHJvcHM7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYodmlzaWJsZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGZvcndhcmRlZFJlZi5jdXJyZW50LnBsYXkoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3J3YXJkZWRSZWYuY3VycmVudC5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW3Zpc2libGVdKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIHt2aXNpYmxlID09IHRydWUgP1xyXG4gICAgICAgICAgICAgICAgPHZpZGVvIHJlZj17Zm9yd2FyZGVkUmVmfSB3aWR0aD0nMTAwJScgY29udHJvbHMgYXV0b1BsYXkgbXV0ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSB0eXBlPVwidmlkZW8vbXA0XCIgc3JjPScvdmlkZW8vdnVlLm1wNCcvPlxyXG4gICAgICAgICAgICAgICAgPC92aWRlbz5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPHZpZGVvIHJlZj17Zm9yd2FyZGVkUmVmfSB3aWR0aD0nMTAwJScgY29udHJvbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSB0eXBlPVwidmlkZW8vbXA0XCIgc3JjPScvdmlkZW8vdnVlLm1wNCcvPlxyXG4gICAgICAgICAgICAgICAgPC92aWRlbz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFZpZXdwb3J0QmxvY2sgPSBoYW5kbGVWaWV3cG9ydChCbG9jayk7XHJcblxyXG5leHBvcnQgY29uc3QgVnVlMDMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgWyB2aXNpYmxlLCBzZXRWaXNpYmxlIF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc01haW59IHN0eWxlPXt7cGFkZGluZ1RvcDonNSUnfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17OH0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0gc3R5bGU9e3ttYXJnaW5Ub3A6JzglJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NUaXRsZTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUSEUgUFJPQ0VTUyAvIDAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NUaXRsZTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNpZ24gJiBJdGVyYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZG90TGluZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIMK3Jm5ic3A7wrcmbmJzcDvCt1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e21hcmdpblRvcDonOCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2lnbkhpZ2hsaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZJTkFMIERFU0lHTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNpZ25IaWdobGlnaHRUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZ1bGZpbGwgQWxsIFlvdXIgTmVlZHMgYWJvdXQgTW92aWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2lnbkhpZ2hsaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCZXlvbmQgdGhlIGltYWdpbmF0aW9uLCB3ZSBmaW5hbGx5IGxhdW5jaGVkIHRoZSB3ZWJzaXRlIHdpdGggXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vc3Qgb2YgdGhlIGZ1bmRhbWVudGFsIGZlYXR1cmVzIGluIEphbiAyMDE4LiBVc2VycyBjYW4gYWRkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVpciBmYXZvcml0ZSBtb3ZpZSB0byBhIHdhdGNobGlzdCBhbmQgc2VlIG90aGVyIHVzZXJz4oCZIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRpbmdzLiBUaGV5IGNhbiBkaXNjdXNzIGFuZCBzaGFyZSB0aGVpciBvcGluaW9ucyBhZnRlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2F0Y2hpbmcgYSBtb3ZpZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz48YnIvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9yZSB0aGFuIHRoYXQsIHdlIGNvb3BlcmF0ZWQgd2l0aCB0d28gdGhlYXRlcnMgc28geW91IGNhbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0bHkgYm9vayBhIG1vdmllIHRpY2tldCB0aHJvdWdoIFZVRS4gV2UgaGF2ZSBjdXJhdGVkIHRoZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFyZ2VzdCBtb3ZpZSBkYXRhYmFzZSB0aGF0IGNvbnRhaW5zIG92ZXIgMzUwLDAwMCBtb3ZpZXMgYW5kIDIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbGxpb24gY2FzdCBkYXRhIGluIE1hbmRhcmluLiBTbyBmYXIsIHRoZSB3ZWJzaXRlIG9mIHBhZ2UgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdzIGhpdCAxMDAgdXNlcnMgaW4gcmVhbC10aW1lIGFuZCBzdGlsbCBncm93aW5nLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6JzIlJyxwYWRkaW5nTGVmdDonNCUnLCBwYWRkaW5nUmlnaHQ6JzQlJ319IHNwYWNpbmc9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6JzAuNXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2dWUwOX0gc3R5bGU9e3t3aWR0aDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Z1ZTExfSBzdHlsZT17e3dpZHRoOicxMDAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Z1ZTEwfSBzdHlsZT17e3dpZHRoOicxMDAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6JzglJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNpZ25IaWdobGlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMQVVOQ0ggQ0FNUEFJR05cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzaWduSGlnaGxpZ2h0VGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWcgQW5ub3VuY2VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2lnbkhpZ2hsaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdCBpcyB0aW1lIHRvIGludHJvZHVjZSB0aGUgd2Vic2l0ZSB0byBtb3JlIHBlb3BsZS4gV2UgcGxhbm5lZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSBtYXJrZXRpbmcgY2FtcGFpZ24gb24gRmFjZWJvb2ssIHdoaWNoIHRoZSBnb2FsIGlzIHRvIGxldCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVvcGxlIGtub3cgd2hhdCBWVUUgY2FuIGRvIGZvciB0aGVtIGFuZCBnZXR0aW5nIG1vcmUgZXhwb3N1cmUuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25zaWRlcmluZyB0aGUgZW5nYWdlbWVudCByYXRlIGFuZCBhZmZpbml0eSBjYXRlZ29yaWVzLCB3ZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZCBhIHZpZGVvIHRvIHJlYWNoIG1vcmUgYXVkaWVuY2VzLiBXZSBzcGVudCBzb21lIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRpbmcgYnVkZ2V0IGZvciB0aGUgY2FtcGFpZ24sIGFuZCBpdCBhdHRyYWN0ZWQgcGFnZSBsaWtlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGluY3JlYXNlZCBwYWdlIHZpZXdzIG9uIHRoZSB3ZWJzaXRlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6JzQlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17OH0gc3R5bGU9e3twYWRkaW5nTGVmdDonNSUnLCBwYWRkaW5nUmlnaHQ6JzUlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Vmlld3BvcnRCbG9jayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRW50ZXJWaWV3cG9ydD17KCk9PntzZXRWaXNpYmxlKHRydWUpO319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkxlYXZlVmlld3BvcnQ9eygpPT57c2V0VmlzaWJsZShmYWxzZSk7fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3Zpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e21hcmdpblRvcDonOCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NX0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRvdExpbmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgwrcmbmJzcDvCtyZuYnNwO8K3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NX0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e21hcmdpblRvcDonOCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2lnbkhpZ2hsaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1FRElBIEtJVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNpZ25IaWdobGlnaHRUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9uZSBNb3JlIFRoaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2lnbkhpZ2hsaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbiBtaWQtMjAxNywgd2UgcmVjZWl2ZWQgYW4gaW5xdWlyeSBmb3IgY29vcGVyYXRpb24gZnJvbSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFsYXlzaWEuIEZvciB0aGUgZmlyc3QgdGltZSwgSSByZXNlYXJjaGVkIHRvIGtub3cgbW9yZSBhYm91dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGRpZ2l0YWwgZXhwZXJpZW5jZSBpbiBTb3V0aCBBc2lhLiBNb3N0IG9mIHRoZSBvbmxpbmUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVyaWVuY2UgaXMgb2xkLXN0eWxlIGFuZCBoYXJkIHRvIHVzZSwgZXhjZXB0IGZvciBzb21lIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJzaXRlcyBzdWNoIGFzJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9J2h0dHBzOi8vcHJvLnNpbWlsYXJ3ZWIuY29tLyMvY29tcGFueXJlc2VhcmNoL3dlYnNpdGVhbmFseXNpcy9vdmVydmlldy93ZWJzaXRlLXBlcmZvcm1hbmNlL2tpbmpvLmNvLyovNzY0LzIwMjAuMDEtMjAyMC4wMz93ZWJTb3VyY2U9VG90YWwnIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2tNeVNob3cgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtpbiBJbmRpYS4gV2UgdG9vayB0aGUgY2hhbmNlIGFuZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcGVyYXRlZCB3aXRoIGEgbG9jYWwgbWFya2V0aW5nIGNvbXBhbnkgaW4gTWFsYXlzaWEsIHdoaWNoIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydGVkIGJ5IHRyYW5zbGF0aW5nIFZVRSBpbnRvIE1hbGF5LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJlc2lkZXMsIG91ciBtYXJrZXRpbmcgdGVhbSBhY3RpdmVseSBsb29rZWQgZm9yIGNvb3BlcmF0aW9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHBvcnR1bml0aWVzIHdpdGggbW9yZSB0aGVhdHJlcy4gV2UgY3JlYXRlZCBhIGNvbXBsZXRlIG1lZGlhIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraXQgdG8gZXhwbGFpbiBvdXIgaWRlYSwgb3VyIGRldmVsb3BtZW50IGJhY2tncm91bmQsIGFsbCB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVJIGFuZCBmdW5jdGlvbmFsIGRlc2lnbiwgYW5kIHRoZSBwb3RlbnRpYWwgcG9zc2liaWxpdHkgb2YgVlVFLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOic0JSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gbWQ9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezh9IHN0eWxlPXt7cGFkZGluZ0xlZnQ6JzQlJywgcGFkZGluZ1JpZ2h0Oic0JSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Z1ZTEyfSBzdHlsZT17e3dpZHRoOicxMDAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IG1kPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmltZ0Rlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5UYWtlIGEgbG9vayBhdCB0aGUmbmJzcDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdnVlX21lZGlhLWtpdF8yMDE4LnBkZlwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT17c3R5bGVzLmltZ0Rlc2NyaXB0aW9uTGlua30gc3R5bGU9e3tjb2xvcjonIzhGOEY4Rid9fT5tZWRpYSBraXQ8L0xpbms+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtpZiB5b3UgYXJlIGludGVyZXN0ZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e21hcmdpblRvcDonOCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gbWQ9ezN9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs4fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzVGl0bGUxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVEhFIFBST0NFU1MgLyAwM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzVGl0bGUyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV4dCBTdGVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZG90TGluZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIMK3Jm5ic3A7wrcmbmJzcDvCt1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e21hcmdpblRvcDonOCUnfX0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbGxlY3RJbnNpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIER1ZSB0byB0aGUgZmFzdCBkZXZlbG9wbWVudCBvZiBWVUUsIHdlIGhhZCBzdGFydGVkIHRvIG9wdGltaXplIFVJLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVVggZGVzaWduLCBhbmQgcGxhbiBmb3IgbmV3IHNlY3Rpb25zIGZvciBhIGZldyBtb250aHMuIE91ciBtYWluIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RzIGFyZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7bWFyZ2luVG9wOiczJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEEgbGFuZGluZyBwYWdlIHRvIGxldCBwZW9wbGUga25vdyBldmVyeSBtYWdpYyBvbiBWVUUgaW4gYSBzaG9ydCB0aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZG90QWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RvdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbGxlY3RJbnNpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQSBuZXcgcGFnZSBmb3IgVk9EIHNlcnZpY2VzIChzdGlsbCByZWxhdGluZyB0byB0aGUgbW92aWUgYW5kIFRWIHNob3dzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17c3R5bGVzLmRvdEFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkb3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsZWN0SW5zaWdodENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vcmUgZW5nYWdlbWVudCBpbiB0aGUgbW92aWUgcmV2aWV3cyBhbmQgZGlzY3Vzc2lvbiAobWF5YmUgZm9ydW0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gY2xhc3NOYW1lPXtzdHlsZXMuZG90QWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RvdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbGxlY3RJbnNpZ2h0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9yZSBzb2NpYWJsZSBiZXR3ZWVuIHVzZXJzICh0aG9zZSBtb3ZpZSBnZWVrcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6JzMlJ319PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2dWUxM30gc3R5bGU9e3t3aWR0aDonMTAwJSd9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17M30+PC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOic0JSd9fT4mbmJzcDs8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==