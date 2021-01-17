webpackHotUpdate_N_E("pages/Work/Agoda-design",{

/***/ "./component/Public/LearnMore.js":
/*!***************************************!*\
  !*** ./component/Public/LearnMore.js ***!
  \***************************************/
/*! exports provided: LearnMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnMore", function() { return LearnMore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ArrowDownward */ "./node_modules/@material-ui/icons/ArrowDownward.js");
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var react_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-animations */ "./node_modules/react-animations/lib/index.js");
/* harmony import */ var react_animations__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_animations__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var radium__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! radium */ "./node_modules/radium/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\USER\\Desktop\\saliejung\\component\\Public\\LearnMore.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
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
  },
  bounce: {
    animation: 'x 1s',
    animationName: radium__WEBPACK_IMPORTED_MODULE_6__["default"].keyframes(react_animations__WEBPACK_IMPORTED_MODULE_5__["bounce"], 'bounce')
  }
});
var LearnMore = function LearnMore(props) {
  _s();

  var classes = useStyles();

  var handleAnchor = function handleAnchor() {
    if (window !== undefined) {
      window.scrollTo({
        top: scrollY,
        behavior: 'smooth'
      });
    }
  };

  var scrollY = props.scrollY;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.button,
    onClick: handleAnchor,
    disableRipple: true,
    style: {
      backgroundColor: 'transparent'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    className: classes.bounce,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }, "Learn More")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12,
    style: {
      marginTop: '0.5rem'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  })))));
};

_s(LearnMore, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = LearnMore;

var _c;

$RefreshReg$(_c, "LearnMore");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/bowser/src/bowser.js":
/*!*******************************************!*\
  !*** ./node_modules/bowser/src/bowser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 */

!function (root, name, definition) {
  if ( true && module.exports) module.exports = definition()
  else if (true) __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js")(name, definition)
  else {}
}(this, 'bowser', function () {
  /**
    * See useragents.js for examples of navigator.userAgent
    */

  var t = true

  function detect(ua) {

    function getFirstMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[1]) || '';
    }

    function getSecondMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[2]) || '';
    }

    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
      , likeAndroid = /like android/i.test(ua)
      , android = !likeAndroid && /android/i.test(ua)
      , nexusMobile = /nexus\s*[0-6]\s*/i.test(ua)
      , nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua)
      , chromeos = /CrOS/.test(ua)
      , silk = /silk/i.test(ua)
      , sailfish = /sailfish/i.test(ua)
      , tizen = /tizen/i.test(ua)
      , webos = /(web|hpw)(o|0)s/i.test(ua)
      , windowsphone = /windows phone/i.test(ua)
      , samsungBrowser = /SamsungBrowser/i.test(ua)
      , windows = !windowsphone && /windows/i.test(ua)
      , mac = !iosdevice && !silk && /macintosh/i.test(ua)
      , linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua)
      , edgeVersion = getSecondMatch(/edg([ea]|ios)\/(\d+(\.\d+)?)/i)
      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
      , tablet = /tablet/i.test(ua) && !/tablet pc/i.test(ua)
      , mobile = !tablet && /[^-]mobi/i.test(ua)
      , xbox = /xbox/i.test(ua)
      , result

    if (/opera/i.test(ua)) {
      //  an old Opera
      result = {
        name: 'Opera'
      , opera: t
      , version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
      }
    } else if (/opr\/|opios/i.test(ua)) {
      // a new Opera
      result = {
        name: 'Opera'
        , opera: t
        , version: getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (/SamsungBrowser/i.test(ua)) {
      result = {
        name: 'Samsung Internet for Android'
        , samsungBrowser: t
        , version: versionIdentifier || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/Whale/i.test(ua)) {
      result = {
        name: 'NAVER Whale browser'
        , whale: t
        , version: getFirstMatch(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/MZBrowser/i.test(ua)) {
      result = {
        name: 'MZ Browser'
        , mzbrowser: t
        , version: getFirstMatch(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/coast/i.test(ua)) {
      result = {
        name: 'Opera Coast'
        , coast: t
        , version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/focus/i.test(ua)) {
      result = {
        name: 'Focus'
        , focus: t
        , version: getFirstMatch(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/yabrowser/i.test(ua)) {
      result = {
        name: 'Yandex Browser'
      , yandexbrowser: t
      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/ucbrowser/i.test(ua)) {
      result = {
          name: 'UC Browser'
        , ucbrowser: t
        , version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/mxios/i.test(ua)) {
      result = {
        name: 'Maxthon'
        , maxthon: t
        , version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/epiphany/i.test(ua)) {
      result = {
        name: 'Epiphany'
        , epiphany: t
        , version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/puffin/i.test(ua)) {
      result = {
        name: 'Puffin'
        , puffin: t
        , version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
      }
    }
    else if (/sleipnir/i.test(ua)) {
      result = {
        name: 'Sleipnir'
        , sleipnir: t
        , version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/k-meleon/i.test(ua)) {
      result = {
        name: 'K-Meleon'
        , kMeleon: t
        , version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (windowsphone) {
      result = {
        name: 'Windows Phone'
      , osname: 'Windows Phone'
      , windowsphone: t
      }
      if (edgeVersion) {
        result.msedge = t
        result.version = edgeVersion
      }
      else {
        result.msie = t
        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/msie|trident/i.test(ua)) {
      result = {
        name: 'Internet Explorer'
      , msie: t
      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
      }
    } else if (chromeos) {
      result = {
        name: 'Chrome'
      , osname: 'Chrome OS'
      , chromeos: t
      , chromeBook: t
      , chrome: t
      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    } else if (/edg([ea]|ios)/i.test(ua)) {
      result = {
        name: 'Microsoft Edge'
      , msedge: t
      , version: edgeVersion
      }
    }
    else if (/vivaldi/i.test(ua)) {
      result = {
        name: 'Vivaldi'
        , vivaldi: t
        , version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (sailfish) {
      result = {
        name: 'Sailfish'
      , osname: 'Sailfish OS'
      , sailfish: t
      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/seamonkey\//i.test(ua)) {
      result = {
        name: 'SeaMonkey'
      , seamonkey: t
      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/firefox|iceweasel|fxios/i.test(ua)) {
      result = {
        name: 'Firefox'
      , firefox: t
      , version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
      }
      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
        result.firefoxos = t
        result.osname = 'Firefox OS'
      }
    }
    else if (silk) {
      result =  {
        name: 'Amazon Silk'
      , silk: t
      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/phantom/i.test(ua)) {
      result = {
        name: 'PhantomJS'
      , phantom: t
      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/slimerjs/i.test(ua)) {
      result = {
        name: 'SlimerJS'
        , slimer: t
        , version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
      result = {
        name: 'BlackBerry'
      , osname: 'BlackBerry OS'
      , blackberry: t
      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
      }
    }
    else if (webos) {
      result = {
        name: 'WebOS'
      , osname: 'WebOS'
      , webos: t
      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
      };
      /touchpad\//i.test(ua) && (result.touchpad = t)
    }
    else if (/bada/i.test(ua)) {
      result = {
        name: 'Bada'
      , osname: 'Bada'
      , bada: t
      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
      };
    }
    else if (tizen) {
      result = {
        name: 'Tizen'
      , osname: 'Tizen'
      , tizen: t
      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
      };
    }
    else if (/qupzilla/i.test(ua)) {
      result = {
        name: 'QupZilla'
        , qupzilla: t
        , version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
      }
    }
    else if (/chromium/i.test(ua)) {
      result = {
        name: 'Chromium'
        , chromium: t
        , version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (/chrome|crios|crmo/i.test(ua)) {
      result = {
        name: 'Chrome'
        , chrome: t
        , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    }
    else if (android) {
      result = {
        name: 'Android'
        , version: versionIdentifier
      }
    }
    else if (/safari|applewebkit/i.test(ua)) {
      result = {
        name: 'Safari'
      , safari: t
      }
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if (iosdevice) {
      result = {
        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
      }
      // WTF: version is not part of user agent in web apps
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if(/googlebot/i.test(ua)) {
      result = {
        name: 'Googlebot'
      , googlebot: t
      , version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
      }
    }
    else {
      result = {
        name: getFirstMatch(/^(.*)\/(.*) /),
        version: getSecondMatch(/^(.*)\/(.*) /)
     };
   }

    // set webkit or gecko flag for browsers based on these engines
    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
      if (/(apple)?webkit\/537\.36/i.test(ua)) {
        result.name = result.name || "Blink"
        result.blink = t
      } else {
        result.name = result.name || "Webkit"
        result.webkit = t
      }
      if (!result.version && versionIdentifier) {
        result.version = versionIdentifier
      }
    } else if (!result.opera && /gecko\//i.test(ua)) {
      result.name = result.name || "Gecko"
      result.gecko = t
      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
    }

    // set OS flags for platforms that have multiple browsers
    if (!result.windowsphone && (android || result.silk)) {
      result.android = t
      result.osname = 'Android'
    } else if (!result.windowsphone && iosdevice) {
      result[iosdevice] = t
      result.ios = t
      result.osname = 'iOS'
    } else if (mac) {
      result.mac = t
      result.osname = 'macOS'
    } else if (xbox) {
      result.xbox = t
      result.osname = 'Xbox'
    } else if (windows) {
      result.windows = t
      result.osname = 'Windows'
    } else if (linux) {
      result.linux = t
      result.osname = 'Linux'
    }

    function getWindowsVersion (s) {
      switch (s) {
        case 'NT': return 'NT'
        case 'XP': return 'XP'
        case 'NT 5.0': return '2000'
        case 'NT 5.1': return 'XP'
        case 'NT 5.2': return '2003'
        case 'NT 6.0': return 'Vista'
        case 'NT 6.1': return '7'
        case 'NT 6.2': return '8'
        case 'NT 6.3': return '8.1'
        case 'NT 10.0': return '10'
        default: return undefined
      }
    }

    // OS version extraction
    var osVersion = '';
    if (result.windows) {
      osVersion = getWindowsVersion(getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i))
    } else if (result.windowsphone) {
      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
    } else if (result.mac) {
      osVersion = getFirstMatch(/Mac OS X (\d+([_\.\s]\d+)*)/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (iosdevice) {
      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (android) {
      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
    } else if (result.webos) {
      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
    } else if (result.blackberry) {
      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
    } else if (result.bada) {
      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
    } else if (result.tizen) {
      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
    }
    if (osVersion) {
      result.osversion = osVersion;
    }

    // device type extraction
    var osMajorVersion = !result.windows && osVersion.split('.')[0];
    if (
         tablet
      || nexusTablet
      || iosdevice == 'ipad'
      || (android && (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile)))
      || result.silk
    ) {
      result.tablet = t
    } else if (
         mobile
      || iosdevice == 'iphone'
      || iosdevice == 'ipod'
      || android
      || nexusMobile
      || result.blackberry
      || result.webos
      || result.bada
    ) {
      result.mobile = t
    }

    // Graded Browser Support
    // http://developer.yahoo.com/yui/articles/gbs
    if (result.msedge ||
        (result.msie && result.version >= 10) ||
        (result.yandexbrowser && result.version >= 15) ||
		    (result.vivaldi && result.version >= 1.0) ||
        (result.chrome && result.version >= 20) ||
        (result.samsungBrowser && result.version >= 4) ||
        (result.whale && compareVersions([result.version, '1.0']) === 1) ||
        (result.mzbrowser && compareVersions([result.version, '6.0']) === 1) ||
        (result.focus && compareVersions([result.version, '1.0']) === 1) ||
        (result.firefox && result.version >= 20.0) ||
        (result.safari && result.version >= 6) ||
        (result.opera && result.version >= 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
        (result.blackberry && result.version >= 10.1)
        || (result.chromium && result.version >= 20)
        ) {
      result.a = t;
    }
    else if ((result.msie && result.version < 10) ||
        (result.chrome && result.version < 20) ||
        (result.firefox && result.version < 20.0) ||
        (result.safari && result.version < 6) ||
        (result.opera && result.version < 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
        || (result.chromium && result.version < 20)
        ) {
      result.c = t
    } else result.x = t

    return result
  }

  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent || '' : '')

  bowser.test = function (browserList) {
    for (var i = 0; i < browserList.length; ++i) {
      var browserItem = browserList[i];
      if (typeof browserItem=== 'string') {
        if (browserItem in bowser) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */
  function getVersionPrecision(version) {
    return version.split(".").length;
  }

  /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */
  function map(arr, iterator) {
    var result = [], i;
    if (Array.prototype.map) {
      return Array.prototype.map.call(arr, iterator);
    }
    for (i = 0; i < arr.length; i++) {
      result.push(iterator(arr[i]));
    }
    return result;
  }

  /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
   *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
   *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
   *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
   *
   * @param  {Array<String>} versions versions to compare
   * @return {Number} comparison result
   */
  function compareVersions(versions) {
    // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
    var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
    var chunks = map(versions, function (version) {
      var delta = precision - getVersionPrecision(version);

      // 2) "9" -> "9.0" (for precision = 2)
      version = version + new Array(delta + 1).join(".0");

      // 3) "9.0" -> ["000000000"", "000000009"]
      return map(version.split("."), function (chunk) {
        return new Array(20 - chunk.length).join("0") + chunk;
      }).reverse();
    });

    // iterate in reverse order by reversed chunks array
    while (--precision >= 0) {
      // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
      if (chunks[0][precision] > chunks[1][precision]) {
        return 1;
      }
      else if (chunks[0][precision] === chunks[1][precision]) {
        if (precision === 0) {
          // all version chunks are same
          return 0;
        }
      }
      else {
        return -1;
      }
    }
  }

  /**
   * Check if browser is unsupported
   *
   * @example
   *   bowser.isUnsupportedBrowser({
   *     msie: "10",
   *     firefox: "23",
   *     chrome: "29",
   *     safari: "5.1",
   *     opera: "16",
   *     phantom: "534"
   *   });
   *
   * @param  {Object}  minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function isUnsupportedBrowser(minVersions, strictMode, ua) {
    var _bowser = bowser;

    // make strictMode param optional with ua param usage
    if (typeof strictMode === 'string') {
      ua = strictMode;
      strictMode = void(0);
    }

    if (strictMode === void(0)) {
      strictMode = false;
    }
    if (ua) {
      _bowser = detect(ua);
    }

    var version = "" + _bowser.version;
    for (var browser in minVersions) {
      if (minVersions.hasOwnProperty(browser)) {
        if (_bowser[browser]) {
          if (typeof minVersions[browser] !== 'string') {
            throw new Error('Browser version in the minVersion map should be a string: ' + browser + ': ' + String(minVersions));
          }

          // browser version and min supported version.
          return compareVersions([version, minVersions[browser]]) < 0;
        }
      }
    }

    return strictMode; // not found
  }

  /**
   * Check if browser is supported
   *
   * @param  {Object} minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function check(minVersions, strictMode, ua) {
    return !isUnsupportedBrowser(minVersions, strictMode, ua);
  }

  bowser.isUnsupportedBrowser = isUnsupportedBrowser;
  bowser.compareVersions = compareVersions;
  bowser.check = check;

  /*
   * Set our detect method to the main bowser object so we can
   * reuse it to test other user agents.
   * This is needed to implement future tests.
   */
  bowser._detect = detect;

  /*
   * Set our detect public method to the main bowser object
   * This is needed to implement bowser in server side
   */
  bowser.detect = detect;
  return bowser
});


/***/ }),

/***/ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/css-in-js-utils/lib/hyphenateProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateProperty;

var _hyphenateStyleName = __webpack_require__(/*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js");

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js":
/*!*************************************************************!*\
  !*** ./node_modules/css-in-js-utils/lib/isPrefixedValue.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrefixedValue;
var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/createPrefixer.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/createPrefixer.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createPrefixer;

var _getBrowserInformation = __webpack_require__(/*! ../utils/getBrowserInformation */ "./node_modules/inline-style-prefixer/utils/getBrowserInformation.js");

var _getBrowserInformation2 = _interopRequireDefault(_getBrowserInformation);

var _getPrefixedKeyframes = __webpack_require__(/*! ../utils/getPrefixedKeyframes */ "./node_modules/inline-style-prefixer/utils/getPrefixedKeyframes.js");

var _getPrefixedKeyframes2 = _interopRequireDefault(_getPrefixedKeyframes);

var _capitalizeString = __webpack_require__(/*! ../utils/capitalizeString */ "./node_modules/inline-style-prefixer/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

var _addNewValuesOnly = __webpack_require__(/*! ../utils/addNewValuesOnly */ "./node_modules/inline-style-prefixer/utils/addNewValuesOnly.js");

var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);

var _isObject = __webpack_require__(/*! ../utils/isObject */ "./node_modules/inline-style-prefixer/utils/isObject.js");

var _isObject2 = _interopRequireDefault(_isObject);

var _prefixValue = __webpack_require__(/*! ../utils/prefixValue */ "./node_modules/inline-style-prefixer/utils/prefixValue.js");

var _prefixValue2 = _interopRequireDefault(_prefixValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (style) {
    return style;
  };

  return function () {
    /**
     * Instantiante a new prefixer
     * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
     * @param {string} keepUnprefixed - keeps unprefixed properties and values
     */
    function Prefixer() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Prefixer);

      var defaultUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;

      this._userAgent = options.userAgent || defaultUserAgent;
      this._keepUnprefixed = options.keepUnprefixed || false;

      if (this._userAgent) {
        this._browserInfo = (0, _getBrowserInformation2.default)(this._userAgent);
      }

      // Checks if the userAgent was resolved correctly
      if (this._browserInfo && this._browserInfo.cssPrefix) {
        this.prefixedKeyframes = (0, _getPrefixedKeyframes2.default)(this._browserInfo.browserName, this._browserInfo.browserVersion, this._browserInfo.cssPrefix);
      } else {
        this._useFallback = true;
        return false;
      }

      var prefixData = this._browserInfo.browserName && prefixMap[this._browserInfo.browserName];
      if (prefixData) {
        this._requiresPrefix = {};

        for (var property in prefixData) {
          if (prefixData[property] >= this._browserInfo.browserVersion) {
            this._requiresPrefix[property] = true;
          }
        }

        this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0;
      } else {
        this._useFallback = true;
      }

      this._metaData = {
        browserVersion: this._browserInfo.browserVersion,
        browserName: this._browserInfo.browserName,
        cssPrefix: this._browserInfo.cssPrefix,
        jsPrefix: this._browserInfo.jsPrefix,
        keepUnprefixed: this._keepUnprefixed,
        requiresPrefix: this._requiresPrefix
      };
    }

    _createClass(Prefixer, [{
      key: 'prefix',
      value: function prefix(style) {
        // use static prefixer as fallback if userAgent can not be resolved
        if (this._useFallback) {
          return fallback(style);
        }

        // only add prefixes if needed
        if (!this._hasPropsRequiringPrefix) {
          return style;
        }

        return this._prefixStyle(style);
      }
    }, {
      key: '_prefixStyle',
      value: function _prefixStyle(style) {
        for (var property in style) {
          var value = style[property];

          // handle nested objects
          if ((0, _isObject2.default)(value)) {
            style[property] = this.prefix(value);
            // handle array values
          } else if (Array.isArray(value)) {
            var combinedValue = [];

            for (var i = 0, len = value.length; i < len; ++i) {
              var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, this._metaData);
              (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
            }

            // only modify the value if it was touched
            // by any plugin to prevent unnecessary mutations
            if (combinedValue.length > 0) {
              style[property] = combinedValue;
            }
          } else {
            var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, this._metaData);

            // only modify the value if it was touched
            // by any plugin to prevent unnecessary mutations
            if (_processedValue) {
              style[property] = _processedValue;
            }

            // add prefixes to properties
            if (this._requiresPrefix.hasOwnProperty(property)) {
              style[this._browserInfo.jsPrefix + (0, _capitalizeString2.default)(property)] = value;
              if (!this._keepUnprefixed) {
                delete style[property];
              }
            }
          }
        }

        return style;
      }

      /**
       * Returns a prefixed version of the style object using all vendor prefixes
       * @param {Object} styles - Style object that gets prefixed properties added
       * @returns {Object} - Style object with prefixed properties and values
       */

    }], [{
      key: 'prefixAll',
      value: function prefixAll(styles) {
        return fallback(styles);
      }
    }]);

    return Prefixer;
  }();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/calc.js":
/*!********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/calc.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calc;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function calc(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.indexOf('calc(') > -1 && (browserName === 'firefox' && browserVersion < 15 || browserName === 'chrome' && browserVersion < 25 || browserName === 'safari' && browserVersion < 6.1 || browserName === 'ios_saf' && browserVersion < 7)) {
    return (0, _getPrefixedValue2.default)(value.replace(/calc\(/g, cssPrefix + 'calc('), value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/crossFade.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/crossFade.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function crossFade(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.indexOf('cross-fade(') > -1 && (browserName === 'chrome' || browserName === 'opera' || browserName === 'and_chr' || (browserName === 'ios_saf' || browserName === 'safari') && browserVersion < 10)) {
    return (0, _getPrefixedValue2.default)(value.replace(/cross-fade\(/g, cssPrefix + 'cross-fade('), value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/cursor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/cursor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var grabValues = {
  grab: true,
  grabbing: true
};


var zoomValues = {
  'zoom-in': true,
  'zoom-out': true
};

function cursor(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  // adds prefixes for firefox, chrome, safari, and opera regardless of
  // version until a reliable browser support info can be found
  // see: https://github.com/rofrischmann/inline-style-prefixer/issues/79
  if (property === 'cursor' && grabValues[value] && (browserName === 'firefox' || browserName === 'chrome' || browserName === 'safari' || browserName === 'opera')) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }

  if (property === 'cursor' && zoomValues[value] && (browserName === 'firefox' && browserVersion < 24 || browserName === 'chrome' && browserVersion < 37 || browserName === 'safari' && browserVersion < 9 || browserName === 'opera' && browserVersion < 24)) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/filter.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/filter.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function filter(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.indexOf('filter(') > -1 && (browserName === 'ios_saf' || browserName === 'safari' && browserVersion < 9.1)) {
    return (0, _getPrefixedValue2.default)(value.replace(/filter\(/g, cssPrefix + 'filter('), value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/flex.js":
/*!********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/flex.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = {
  flex: true,
  'inline-flex': true
};
function flex(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (property === 'display' && values[value] && (browserName === 'chrome' && browserVersion < 29 && browserVersion > 20 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion < 9 && browserVersion > 6 || browserName === 'opera' && (browserVersion === 15 || browserVersion === 16))) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/flexboxIE.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/flexboxIE.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxIE;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  flex: 'flexbox',
  'inline-flex': 'inline-flexbox'
};

var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msFlexPreferredSize'
};

function flexboxIE(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed,
      requiresPrefix = _ref.requiresPrefix;

  if ((alternativeProps.hasOwnProperty(property) || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browserName === 'ie_mob' || browserName === 'ie') && browserVersion === 10) {
    delete requiresPrefix[property];

    if (!keepUnprefixed && !Array.isArray(style[property])) {
      delete style[property];
    }
    if (property === 'display' && alternativeValues.hasOwnProperty(value)) {
      return (0, _getPrefixedValue2.default)(cssPrefix + alternativeValues[value], value, keepUnprefixed);
    }
    if (alternativeProps.hasOwnProperty(property)) {
      style[alternativeProps[property]] = alternativeValues[value] || value;
    }
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/flexboxOld.js":
/*!**************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/flexboxOld.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple',
  flex: 'box',
  'inline-flex': 'inline-box'
};


var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines',
  flexGrow: 'WebkitBoxFlex'
};

var otherProps = ['alignContent', 'alignSelf', 'order', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection'];
var properties = Object.keys(alternativeProps).concat(otherProps);

function flexboxOld(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed,
      requiresPrefix = _ref.requiresPrefix;

  if ((properties.indexOf(property) > -1 || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browserName === 'firefox' && browserVersion < 22 || browserName === 'chrome' && browserVersion < 21 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion <= 6.1 || browserName === 'android' && browserVersion < 4.4 || browserName === 'and_uc')) {
    delete requiresPrefix[property];

    if (!keepUnprefixed && !Array.isArray(style[property])) {
      delete style[property];
    }
    if (property === 'flexDirection' && typeof value === 'string') {
      if (value.indexOf('column') > -1) {
        style.WebkitBoxOrient = 'vertical';
      } else {
        style.WebkitBoxOrient = 'horizontal';
      }
      if (value.indexOf('reverse') > -1) {
        style.WebkitBoxDirection = 'reverse';
      } else {
        style.WebkitBoxDirection = 'normal';
      }
    }
    if (property === 'display' && alternativeValues.hasOwnProperty(value)) {
      return (0, _getPrefixedValue2.default)(cssPrefix + alternativeValues[value], value, keepUnprefixed);
    }
    if (alternativeProps.hasOwnProperty(property)) {
      style[alternativeProps[property]] = alternativeValues[value] || value;
    }
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/gradient.js":
/*!************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/gradient.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;
function gradient(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && values.test(value) && (browserName === 'firefox' && browserVersion < 16 || browserName === 'chrome' && browserVersion < 26 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion < 7 || (browserName === 'opera' || browserName === 'op_mini') && browserVersion < 12.1 || browserName === 'android' && browserVersion < 4.4 || browserName === 'and_uc')) {
    return (0, _getPrefixedValue2.default)(value.replace(values, function (grad) {
      return cssPrefix + grad;
    }), value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/imageSet.js":
/*!************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/imageSet.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function imageSet(property, value, style, _ref) {
  var browserName = _ref.browserName,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.indexOf('image-set(') > -1 && (browserName === 'chrome' || browserName === 'opera' || browserName === 'and_chr' || browserName === 'and_uc' || browserName === 'ios_saf' || browserName === 'safari')) {
    return (0, _getPrefixedValue2.default)(value.replace(/image-set\(/g, cssPrefix + 'image-set('), value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/position.js":
/*!************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/position.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function position(property, value, style, _ref) {
  var browserName = _ref.browserName,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (property === 'position' && value === 'sticky' && (browserName === 'safari' || browserName === 'ios_saf')) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/sizing.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/sizing.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};

var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true

  // TODO: chrome & opera support it
};function sizing(property, value, style, _ref) {
  var cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  // This might change in the future
  // Keep an eye on it
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/transition.js":
/*!**************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/transition.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateProperty = __webpack_require__(/*! css-in-js-utils/lib/hyphenateProperty */ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js");

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var requiresPrefixDashCased = void 0;

function transition(property, value, style, _ref) {
  var cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed,
      requiresPrefix = _ref.requiresPrefix;

  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    // memoize the prefix array for later use
    if (!requiresPrefixDashCased) {
      requiresPrefixDashCased = Object.keys(requiresPrefix).map(function (prop) {
        return (0, _hyphenateProperty2.default)(prop);
      });
    }

    // only split multi values, not cubic beziers
    var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

    requiresPrefixDashCased.forEach(function (prop) {
      multipleValues.forEach(function (val, index) {
        if (val.indexOf(prop) > -1 && prop !== 'order') {
          multipleValues[index] = val.replace(prop, cssPrefix + prop) + (keepUnprefixed ? ',' + val : '');
        }
      });
    });

    return multipleValues.join(',');
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/createPrefixer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/createPrefixer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPrefixer;

var _prefixProperty = __webpack_require__(/*! ../utils/prefixProperty */ "./node_modules/inline-style-prefixer/utils/prefixProperty.js");

var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

var _prefixValue = __webpack_require__(/*! ../utils/prefixValue */ "./node_modules/inline-style-prefixer/utils/prefixValue.js");

var _prefixValue2 = _interopRequireDefault(_prefixValue);

var _addNewValuesOnly = __webpack_require__(/*! ../utils/addNewValuesOnly */ "./node_modules/inline-style-prefixer/utils/addNewValuesOnly.js");

var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);

var _isObject = __webpack_require__(/*! ../utils/isObject */ "./node_modules/inline-style-prefixer/utils/isObject.js");

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;

  function prefixAll(style) {
    for (var property in style) {
      var value = style[property];

      // handle nested objects
      if ((0, _isObject2.default)(value)) {
        style[property] = prefixAll(value);
        // handle array values
      } else if (Array.isArray(value)) {
        var combinedValue = [];

        for (var i = 0, len = value.length; i < len; ++i) {
          var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
          (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
        }

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (combinedValue.length > 0) {
          style[property] = combinedValue;
        }
      } else {
        var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (_processedValue) {
          style[property] = _processedValue;
        }

        style = (0, _prefixProperty2.default)(prefixMap, property, style);
      }
    }

    return style;
  }

  return prefixAll;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/calc.js":
/*!*******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/calc.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calc;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];
function calc(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('calc(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/calc\(/g, prefix + 'calc(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/crossFade.js":
/*!************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/crossFade.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#search=cross-fade
var prefixes = ['-webkit-', ''];
function crossFade(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/cursor.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/cursor.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;
var prefixes = ['-webkit-', '-moz-', ''];

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/filter.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/filter.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-filter-function
var prefixes = ['-webkit-', ''];
function filter(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/flex.js":
/*!*******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/flex.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = {
  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
};

function flex(property, value) {
  if (property === 'display' && values.hasOwnProperty(value)) {
    return values[value];
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/flexboxIE.js":
/*!************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/flexboxIE.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxIE;
var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end'
};
var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msFlexPreferredSize'
};

function flexboxIE(property, value, style) {
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;
var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple',
  flex: 'box',
  'inline-flex': 'inline-box'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines',
  flexGrow: 'WebkitBoxFlex'
};

function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }
    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/gradient.js":
/*!***********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/gradient.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
    return prefixes.map(function (prefix) {
      return value.replace(values, function (grad) {
        return prefix + grad;
      });
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/imageSet.js":
/*!***********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/imageSet.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-image-set
var prefixes = ['-webkit-', ''];
function imageSet(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/position.js":
/*!***********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/position.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/sizing.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/sizing.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;
var prefixes = ['-webkit-', '-moz-', ''];

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/transition.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/transition.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateProperty = __webpack_require__(/*! css-in-js-utils/lib/hyphenateProperty */ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js");

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _capitalizeString = __webpack_require__(/*! ../../utils/capitalizeString */ "./node_modules/inline-style-prefixer/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue(value, propertyPrefixMap) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];
    for (var property in propertyPrefixMap) {
      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];
        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var outputValue = prefixValue(value, propertyPrefixMap);
    // if the property is already prefixed
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
    return outputValue;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/addNewValuesOnly.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/addNewValuesOnly.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addNewValuesOnly;
function addIfNew(list, value) {
  if (list.indexOf(value) === -1) {
    list.push(value);
  }
}

function addNewValuesOnly(list, values) {
  if (Array.isArray(values)) {
    for (var i = 0, len = values.length; i < len; ++i) {
      addIfNew(list, values[i]);
    }
  } else {
    addIfNew(list, values);
  }
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/capitalizeString.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/capitalizeString.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalizeString;
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/getBrowserInformation.js":
/*!***************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/getBrowserInformation.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBrowserInformation;

var _bowser = __webpack_require__(/*! bowser */ "./node_modules/bowser/src/bowser.js");

var _bowser2 = _interopRequireDefault(_bowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixByBrowser = {
  chrome: 'Webkit',
  safari: 'Webkit',
  ios: 'Webkit',
  android: 'Webkit',
  phantom: 'Webkit',
  opera: 'Webkit',
  webos: 'Webkit',
  blackberry: 'Webkit',
  bada: 'Webkit',
  tizen: 'Webkit',
  chromium: 'Webkit',
  vivaldi: 'Webkit',
  firefox: 'Moz',
  seamoney: 'Moz',
  sailfish: 'Moz',
  msie: 'ms',
  msedge: 'ms'
};


var browserByCanIuseAlias = {
  chrome: 'chrome',
  chromium: 'chrome',
  safari: 'safari',
  firfox: 'firefox',
  msedge: 'edge',
  opera: 'opera',
  vivaldi: 'opera',
  msie: 'ie'
};

function getBrowserName(browserInfo) {
  if (browserInfo.firefox) {
    return 'firefox';
  }

  if (browserInfo.mobile || browserInfo.tablet) {
    if (browserInfo.ios) {
      return 'ios_saf';
    } else if (browserInfo.android) {
      return 'android';
    } else if (browserInfo.opera) {
      return 'op_mini';
    }
  }

  for (var browser in browserByCanIuseAlias) {
    if (browserInfo.hasOwnProperty(browser)) {
      return browserByCanIuseAlias[browser];
    }
  }
}

/**
 * Uses bowser to get default browser browserInformation such as version and name
 * Evaluates bowser browserInfo and adds vendorPrefix browserInformation
 * @param {string} userAgent - userAgent that gets evaluated
 */
function getBrowserInformation(userAgent) {
  var browserInfo = _bowser2.default._detect(userAgent);

  if (browserInfo.yandexbrowser) {
    browserInfo = _bowser2.default._detect(userAgent.replace(/YaBrowser\/[0-9.]*/, ''));
  }

  for (var browser in prefixByBrowser) {
    if (browserInfo.hasOwnProperty(browser)) {
      var prefix = prefixByBrowser[browser];

      browserInfo.jsPrefix = prefix;
      browserInfo.cssPrefix = '-' + prefix.toLowerCase() + '-';
      break;
    }
  }

  browserInfo.browserName = getBrowserName(browserInfo);

  // For cordova IOS 8 the version is missing, set truncated osversion to prevent NaN
  if (browserInfo.version) {
    browserInfo.browserVersion = parseFloat(browserInfo.version);
  } else {
    browserInfo.browserVersion = parseInt(parseFloat(browserInfo.osversion), 10);
  }

  browserInfo.osVersion = parseFloat(browserInfo.osversion);

  // iOS forces all browsers to use Safari under the hood
  // as the Safari version seems to match the iOS version
  // we just explicitely use the osversion instead
  // https://github.com/rofrischmann/inline-style-prefixer/issues/72
  if (browserInfo.browserName === 'ios_saf' && browserInfo.browserVersion > browserInfo.osVersion) {
    browserInfo.browserVersion = browserInfo.osVersion;
  }

  // seperate native android chrome
  // https://github.com/rofrischmann/inline-style-prefixer/issues/45
  if (browserInfo.browserName === 'android' && browserInfo.chrome && browserInfo.browserVersion > 37) {
    browserInfo.browserName = 'and_chr';
  }

  // For android < 4.4 we want to check the osversion
  // not the chrome version, see issue #26
  // https://github.com/rofrischmann/inline-style-prefixer/issues/26
  if (browserInfo.browserName === 'android' && browserInfo.osVersion < 5) {
    browserInfo.browserVersion = browserInfo.osVersion;
  }

  // Samsung browser are basically build on Chrome > 44
  // https://github.com/rofrischmann/inline-style-prefixer/issues/102
  if (browserInfo.browserName === 'android' && browserInfo.samsungBrowser) {
    browserInfo.browserName = 'and_chr';
    browserInfo.browserVersion = 44;
  }

  return browserInfo;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/getPrefixedKeyframes.js":
/*!**************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/getPrefixedKeyframes.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPrefixedKeyframes;
function getPrefixedKeyframes(browserName, browserVersion, cssPrefix) {
  var prefixedKeyframes = 'keyframes';

  if (browserName === 'chrome' && browserVersion < 43 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion < 9 || browserName === 'opera' && browserVersion < 30 || browserName === 'android' && browserVersion <= 4.4 || browserName === 'and_uc') {
    return cssPrefix + prefixedKeyframes;
  }
  return prefixedKeyframes;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/getPrefixedValue.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPrefixedValue;
function getPrefixedValue(prefixedValue, value, keepUnprefixed) {
  if (keepUnprefixed) {
    return [prefixedValue, value];
  }
  return prefixedValue;
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/isObject.js":
/*!**************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/isObject.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObject;
function isObject(value) {
  return value instanceof Object && !Array.isArray(value);
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/prefixProperty.js":
/*!********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/prefixProperty.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixProperty;

var _capitalizeString = __webpack_require__(/*! ./capitalizeString */ "./node_modules/inline-style-prefixer/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var newStyle = {};
    var requiredPrefixes = prefixProperties[property];
    var capitalizedProperty = (0, _capitalizeString2.default)(property);
    var keys = Object.keys(style);
    for (var i = 0; i < keys.length; i++) {
      var styleProperty = keys[i];
      if (styleProperty === property) {
        for (var j = 0; j < requiredPrefixes.length; j++) {
          newStyle[requiredPrefixes[j] + capitalizedProperty] = style[property];
        }
      }
      newStyle[styleProperty] = style[styleProperty];
    }
    return newStyle;
  }
  return style;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/prefixValue.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/prefixValue.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixValue;
function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData);

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    if (processedValue) {
      return processedValue;
    }
  }
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/radium/es/append-important-to-each-value.js":
/*!******************************************************************!*\
  !*** ./node_modules/radium/es/append-important-to-each-value.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return appendImportantToEachValue; });
/* harmony import */ var _append_px_if_needed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./append-px-if-needed */ "./node_modules/radium/es/append-px-if-needed.js");
/* harmony import */ var _map_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-object */ "./node_modules/radium/es/map-object.js");


function appendImportantToEachValue(style) {
  return Object(_map_object__WEBPACK_IMPORTED_MODULE_1__["default"])(style, function (result, key) {
    return Object(_append_px_if_needed__WEBPACK_IMPORTED_MODULE_0__["default"])(key, style[key]) + ' !important';
  });
}

/***/ }),

/***/ "./node_modules/radium/es/append-px-if-needed.js":
/*!*******************************************************!*\
  !*** ./node_modules/radium/es/append-px-if-needed.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return appendPxIfNeeded; });
// Copied from https://github.com/facebook/react/blob/
// b87aabdfe1b7461e7331abb3601d9e6bb27544bc/
// packages/react-dom/src/shared/CSSProperty.js
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
function appendPxIfNeeded(propertyName, value) {
  var needsPxSuffix = !isUnitlessNumber[propertyName] && typeof value === 'number' && value !== 0;
  return needsPxSuffix ? value + 'px' : value;
}

/***/ }),

/***/ "./node_modules/radium/es/camel-case-props-to-dash-case.js":
/*!*****************************************************************!*\
  !*** ./node_modules/radium/es/camel-case-props-to-dash-case.js ***!
  \*****************************************************************/
/*! exports provided: camelCaseToDashCase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelCaseToDashCase", function() { return camelCaseToDashCase; });
var _camelCaseRegex = /([a-z])?([A-Z])/g;

var _camelCaseReplacer = function _camelCaseReplacer(match, p1, p2) {
  return (p1 || '') + '-' + p2.toLowerCase();
};

var camelCaseToDashCase = function camelCaseToDashCase(s) {
  return s.replace(_camelCaseRegex, _camelCaseReplacer);
};

var camelCasePropsToDashCase = function camelCasePropsToDashCase(prefixedStyle) {
  // Since prefix is expected to work on inline style objects, we must
  // translate the keys to dash case for rendering to CSS.
  return Object.keys(prefixedStyle).reduce(function (result, key) {
    var dashCaseKey = camelCaseToDashCase(key); // Fix IE vendor prefix

    if (/^ms-/.test(dashCaseKey)) {
      dashCaseKey = "-".concat(dashCaseKey);
    }

    result[dashCaseKey] = prefixedStyle[key];
    return result;
  }, {});
};

/* harmony default export */ __webpack_exports__["default"] = (camelCasePropsToDashCase);

/***/ }),

/***/ "./node_modules/radium/es/clean-state-key.js":
/*!***************************************************!*\
  !*** ./node_modules/radium/es/clean-state-key.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* flow */
var cleanStateKey = function cleanStateKey(key) {
  return key === null || typeof key === 'undefined' ? 'main' : key.toString();
};

/* harmony default export */ __webpack_exports__["default"] = (cleanStateKey);

/***/ }),

/***/ "./node_modules/radium/es/components/style-root.js":
/*!*********************************************************!*\
  !*** ./node_modules/radium/es/components/style-root.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _enhancer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enhancer */ "./node_modules/radium/es/enhancer.js");
/* harmony import */ var _style_keeper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style-keeper */ "./node_modules/radium/es/style-keeper.js");
/* harmony import */ var _style_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style-sheet */ "./node_modules/radium/es/components/style-sheet.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ "./node_modules/radium/es/context.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function getStyleKeeper(configProp, configContext) {
  var userAgent = configProp && configProp.userAgent || configContext && configContext.userAgent;
  return new _style_keeper__WEBPACK_IMPORTED_MODULE_2__["default"](userAgent);
}

var StyleRootInner = Object(_enhancer__WEBPACK_IMPORTED_MODULE_1__["default"])(function (_ref) {
  var children = _ref.children,
      otherProps = _objectWithoutProperties(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", otherProps, children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_sheet__WEBPACK_IMPORTED_MODULE_3__["default"], null));
});

var StyleRoot = function StyleRoot(props) {
  /* eslint-disable no-unused-vars */
  // Pass down all props except config to the rendered div.

  /* eslint-enable no-unused-vars */
  var radiumConfig = props.radiumConfig;
  var configContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_4__["RadiumConfigContext"]);
  var styleKeeper = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(getStyleKeeper(radiumConfig, configContext));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_4__["StyleKeeperContext"].Provider, {
    value: styleKeeper.current
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyleRootInner, props));
};

/* harmony default export */ __webpack_exports__["default"] = (StyleRoot);

/***/ }),

/***/ "./node_modules/radium/es/components/style-sheet.js":
/*!**********************************************************!*\
  !*** ./node_modules/radium/es/components/style-sheet.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_keeper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style-keeper */ "./node_modules/radium/es/style-keeper.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ "./node_modules/radium/es/context.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var StyleSheet =
/*#__PURE__*/
function (_Component) {
  _inherits(StyleSheet, _Component);

  // eslint-disable-next-line react/sort-comp
  function StyleSheet() {
    var _this;

    _classCallCheck(this, StyleSheet);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StyleSheet).apply(this, arguments));
    _this.styleKeeper = void 0;
    _this._subscription = void 0;
    _this._root = void 0;
    _this._css = void 0;

    _this._onChange = function () {
      var nextCSS = _this.styleKeeper.getCSS();

      if (nextCSS !== _this._css) {
        if (_this._root) {
          _this._root.innerHTML = nextCSS;
        } else {
          throw new Error('No root style object found, even after StyleSheet mount.');
        }

        _this._css = nextCSS;
      }
    };

    if (!_this.props.styleKeeperContext) {
      throw new Error('StyleRoot is required to use StyleSheet');
    }

    _this.styleKeeper = _this.props.styleKeeperContext;
    _this._css = _this.styleKeeper.getCSS();
    return _this;
  }

  _createClass(StyleSheet, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._subscription = this.styleKeeper.subscribe(this._onChange);

      this._onChange();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._subscription) {
        this._subscription.remove();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: this._css
        },
        ref: function ref(c) {
          _this2._root = c;
        }
      });
    }
  }]);

  return StyleSheet;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_2__["withRadiumContexts"])(StyleSheet));

/***/ }),

/***/ "./node_modules/radium/es/components/style.js":
/*!****************************************************!*\
  !*** ./node_modules/radium/es/components/style.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_rule_set_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-rule-set-to-string */ "./node_modules/radium/es/css-rule-set-to-string.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ "./node_modules/radium/es/context.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Style =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Style, _PureComponent);

  function Style() {
    _classCallCheck(this, Style);

    return _possibleConstructorReturn(this, _getPrototypeOf(Style).apply(this, arguments));
  }

  _createClass(Style, [{
    key: "_buildStyles",
    value: function _buildStyles(styles) {
      var _this = this;

      var userAgent = this.props.radiumConfig && this.props.radiumConfig.userAgent || this.props.radiumConfigContext && this.props.radiumConfigContext.userAgent;
      var scopeSelector = this.props.scopeSelector;
      var rootRules = Object.keys(styles).reduce(function (accumulator, selector) {
        if (_typeof(styles[selector]) !== 'object') {
          accumulator[selector] = styles[selector];
        }

        return accumulator;
      }, {});
      var rootStyles = Object.keys(rootRules).length ? Object(_css_rule_set_to_string__WEBPACK_IMPORTED_MODULE_0__["default"])(scopeSelector || '', rootRules, userAgent) : '';
      return rootStyles + Object.keys(styles).reduce(function (accumulator, selector) {
        var rules = styles[selector];

        if (selector === 'mediaQueries') {
          accumulator += _this._buildMediaQueryString(rules);
        } else if (_typeof(styles[selector]) === 'object') {
          var completeSelector = scopeSelector ? selector.split(',').map(function (part) {
            return scopeSelector + ' ' + part.trim();
          }).join(',') : selector;
          accumulator += Object(_css_rule_set_to_string__WEBPACK_IMPORTED_MODULE_0__["default"])(completeSelector, rules, userAgent);
        }

        return accumulator;
      }, '');
    }
  }, {
    key: "_buildMediaQueryString",
    value: function _buildMediaQueryString(stylesByMediaQuery) {
      var _this2 = this;

      var mediaQueryString = '';
      Object.keys(stylesByMediaQuery).forEach(function (query) {
        mediaQueryString += '@media ' + query + '{' + _this2._buildStyles(stylesByMediaQuery[query]) + '}';
      });
      return mediaQueryString;
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.rules) {
        return null;
      }

      var styles = this._buildStyles(this.props.rules);

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: styles
        }
      });
    }
  }]);

  return Style;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

Style.propTypes = {
  radiumConfig: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  rules: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  scopeSelector: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
Style.defaultProps = {
  scopeSelector: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_3__["withRadiumContexts"])(Style));

/***/ }),

/***/ "./node_modules/radium/es/context.js":
/*!*******************************************!*\
  !*** ./node_modules/radium/es/context.js ***!
  \*******************************************/
/*! exports provided: StyleKeeperContext, RadiumConfigContext, withRadiumContexts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleKeeperContext", function() { return StyleKeeperContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadiumConfigContext", function() { return RadiumConfigContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRadiumContexts", function() { return withRadiumContexts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/radium/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_keeper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style-keeper */ "./node_modules/radium/es/style-keeper.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var StyleKeeperContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(undefined);
var RadiumConfigContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(undefined);
function withRadiumContexts(WrappedComponent) {
  var WithRadiumContexts = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
    var radiumConfigContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(RadiumConfigContext);
    var styleKeeperContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(StyleKeeperContext);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, _extends({
      ref: ref
    }, props, {
      radiumConfigContext: radiumConfigContext,
      styleKeeperContext: styleKeeperContext
    }));
  });
  WithRadiumContexts.displayName = "withRadiumContexts(".concat(WrappedComponent.displayName || WrappedComponent.name || 'Component', ")");
  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default()(WithRadiumContexts, WrappedComponent);
}

/***/ }),

/***/ "./node_modules/radium/es/css-rule-set-to-string.js":
/*!**********************************************************!*\
  !*** ./node_modules/radium/es/css-rule-set-to-string.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cssRuleSetToString; });
/* harmony import */ var _append_px_if_needed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./append-px-if-needed */ "./node_modules/radium/es/append-px-if-needed.js");
/* harmony import */ var _camel_case_props_to_dash_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camel-case-props-to-dash-case */ "./node_modules/radium/es/camel-case-props-to-dash-case.js");
/* harmony import */ var _map_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-object */ "./node_modules/radium/es/map-object.js");
/* harmony import */ var _prefixer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prefixer */ "./node_modules/radium/es/prefixer.js");





function createMarkupForStyles(style) {
  return Object.keys(style).map(function (property) {
    return property + ': ' + style[property] + ';';
  }).join('\n');
}

function cssRuleSetToString(selector, rules, userAgent) {
  if (!rules) {
    return '';
  }

  var rulesWithPx = Object(_map_object__WEBPACK_IMPORTED_MODULE_2__["default"])(rules, function (value, key) {
    return Object(_append_px_if_needed__WEBPACK_IMPORTED_MODULE_0__["default"])(key, value);
  });
  var prefixedRules = Object(_prefixer__WEBPACK_IMPORTED_MODULE_3__["getPrefixedStyle"])(rulesWithPx, userAgent);
  var cssPrefixedRules = Object(_camel_case_props_to_dash_case__WEBPACK_IMPORTED_MODULE_1__["default"])(prefixedRules);
  var serializedRules = createMarkupForStyles(cssPrefixedRules);
  return selector + '{' + serializedRules + '}';
}

/***/ }),

/***/ "./node_modules/radium/es/enhancer.js":
/*!********************************************!*\
  !*** ./node_modules/radium/es/enhancer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return enhanceWithRadium; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/radium/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _resolve_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolve-styles */ "./node_modules/radium/es/resolve-styles.js");
/* harmony import */ var _get_radium_style_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-radium-style-state */ "./node_modules/radium/es/get-radium-style-state.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "./node_modules/radium/es/context.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }








var KEYS_TO_IGNORE_WHEN_COPYING_PROPERTIES = ['arguments', 'callee', 'caller', 'length', 'name', 'prototype', 'type'];
var RADIUM_PROTO;
var RADIUM_METHODS;

function copyProperties(source, target) {
  Object.getOwnPropertyNames(source).forEach(function (key) {
    if (KEYS_TO_IGNORE_WHEN_COPYING_PROPERTIES.indexOf(key) < 0 && !target.hasOwnProperty(key)) {
      var descriptor = Object.getOwnPropertyDescriptor(source, key);
      descriptor && Object.defineProperty(target, key, descriptor);
    }
  });
} // Handle scenarios of:
// - Inherit from `React.Component` in any fashion
//   See: https://github.com/FormidableLabs/radium/issues/738
// - There's an explicit `render` field defined


function isStateless(component) {
  var proto = component.prototype || {};
  return !component.isReactComponent && !proto.isReactComponent && !component.render && !proto.render;
} // Check if value is a real ES class in Native / Node code.
// See: https://stackoverflow.com/a/30760236


function isNativeClass(component) {
  return typeof component === 'function' && /^\s*class\s+/.test(component.toString());
} // Handle es7 arrow functions on React class method names by detecting
// and transfering the instance method to original class prototype.
// (Using a copy of the class).
// See: https://github.com/FormidableLabs/radium/issues/738


function copyArrowFuncs(enhancedSelf, ComposedComponent) {
  RADIUM_METHODS.forEach(function (name) {
    var thisDesc = Object.getOwnPropertyDescriptor(enhancedSelf, name);
    var thisMethod = (thisDesc || {}).value; // Only care if have instance method.

    if (!thisMethod) {
      return;
    }

    var radiumDesc = Object.getOwnPropertyDescriptor(RADIUM_PROTO, name);
    var radiumProtoMethod = (radiumDesc || {}).value;
    var superProtoMethod = ComposedComponent.prototype[name]; // Allow transfer when:
    // 1. have an instance method
    // 2. the super class prototype doesn't have any method
    // 3. it is not already the radium prototype's

    if (!superProtoMethod && thisMethod !== radiumProtoMethod) {
      // Transfer dynamic render component to Component prototype (copy).
      thisDesc && Object.defineProperty(ComposedComponent.prototype, name, thisDesc); // Remove instance property, leaving us to have a contrived
      // inheritance chain of (1) radium, (2) superclass.

      delete enhancedSelf[name];
    }
  });
}

function trimRadiumState(enhancer) {
  if (enhancer._extraRadiumStateKeys && enhancer._extraRadiumStateKeys.length > 0) {
    var trimmedRadiumState = enhancer._extraRadiumStateKeys.reduce(function (state, key) {
      // eslint-disable-next-line no-unused-vars
      var extraStateKey = state[key],
          remainingState = _objectWithoutProperties(state, [key].map(_toPropertyKey));

      return remainingState;
    }, Object(_get_radium_style_state__WEBPACK_IMPORTED_MODULE_4__["default"])(enhancer));

    enhancer._lastRadiumState = trimmedRadiumState;
    enhancer.setState({
      _radiumStyleState: trimmedRadiumState
    });
  }
}

function cleanUpEnhancer(enhancer) {
  var _radiumMouseUpListener = enhancer._radiumMouseUpListener,
      _radiumMediaQueryListenersByQuery = enhancer._radiumMediaQueryListenersByQuery;
  enhancer._radiumIsMounted = false;

  if (_radiumMouseUpListener) {
    _radiumMouseUpListener.remove();
  }

  if (_radiumMediaQueryListenersByQuery) {
    Object.keys(_radiumMediaQueryListenersByQuery).forEach(function (query) {
      _radiumMediaQueryListenersByQuery[query].remove();
    }, enhancer);
  }
}

function resolveConfig(propConfig, contextConfig, hocConfig) {
  var config = propConfig || contextConfig || hocConfig;

  if (hocConfig && config !== hocConfig) {
    config = _objectSpread({}, hocConfig, config);
  }

  return config;
}

function renderRadiumComponent(enhancer, renderedElement, resolvedConfig, propConfig) {
  var _resolveStyles = Object(_resolve_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(enhancer, renderedElement, resolvedConfig),
      extraStateKeyMap = _resolveStyles.extraStateKeyMap,
      element = _resolveStyles.element;

  enhancer._extraRadiumStateKeys = Object.keys(extraStateKeyMap);

  if (propConfig) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_5__["RadiumConfigContext"].Provider, {
      value: propConfig
    }, element);
  }

  return element;
}

function createEnhancedFunctionComponent(origComponent, config) {
  var RadiumEnhancer = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
    var radiumConfig = props.radiumConfig,
        otherProps = _objectWithoutProperties(props, ["radiumConfig"]);

    var radiumConfigContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_5__["RadiumConfigContext"]);
    var styleKeeperContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_5__["StyleKeeperContext"]);

    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
      _radiumStyleState: {}
    }),
        _useState2 = _slicedToArray(_useState, 2),
        state = _useState2[0],
        setState = _useState2[1];

    var enhancerApi = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
      state: state,
      setState: setState,
      _radiumMediaQueryListenersByQuery: undefined,
      _radiumMouseUpListener: undefined,
      _radiumIsMounted: true,
      _lastRadiumState: undefined,
      _extraRadiumStateKeys: undefined,
      _radiumStyleKeeper: styleKeeperContext
    }).current; // result of useRef is never recreated and is designed to be mutable
    // we need to make sure the latest state is attached to it

    enhancerApi.state = state;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
      return function () {
        cleanUpEnhancer(enhancerApi);
      };
    }, [enhancerApi]);
    var hasExtraStateKeys = enhancerApi._extraRadiumStateKeys && enhancerApi._extraRadiumStateKeys.length > 0;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
      trimRadiumState(enhancerApi);
    }, [hasExtraStateKeys, enhancerApi]);
    var renderedElement = origComponent(otherProps, ref);
    var currentConfig = resolveConfig(radiumConfig, radiumConfigContext, config);
    return renderRadiumComponent(enhancerApi, renderedElement, currentConfig, radiumConfig);
  });
  RadiumEnhancer._isRadiumEnhanced = true;
  RadiumEnhancer.defaultProps = origComponent.defaultProps;
  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(RadiumEnhancer, origComponent);
}

function createEnhancedClassComponent(origComponent, ComposedComponent, config) {
  var RadiumEnhancer =
  /*#__PURE__*/
  function (_ComposedComponent) {
    _inherits(RadiumEnhancer, _ComposedComponent);

    // need to attempt to assign to this.state in case
    // super component is setting state on construction,
    // otherwise class properties reinitialize to undefined
    // need to assign the following methods to this.xxx as
    // tests attempt to set this on the original component
    function RadiumEnhancer() {
      var _this;

      _classCallCheck(this, RadiumEnhancer);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(RadiumEnhancer).apply(this, arguments));
      _this.state = _this.state || {};
      _this._radiumStyleKeeper = _this.props.styleKeeperContext;
      _this._radiumMediaQueryListenersByQuery = _this._radiumMediaQueryListenersByQuery;
      _this._radiumMouseUpListener = _this._radiumMouseUpListener;
      _this._radiumIsMounted = true;
      _this._lastRadiumState = void 0;
      _this._extraRadiumStateKeys = void 0;
      _this.state._radiumStyleState = {};

      var self = _assertThisInitialized(_this); // Handle es7 arrow functions on React class method


      copyArrowFuncs(self, ComposedComponent);
      return _this;
    }

    _createClass(RadiumEnhancer, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState, snapshot) {
        if (_get(_getPrototypeOf(RadiumEnhancer.prototype), "componentDidUpdate", this)) {
          _get(_getPrototypeOf(RadiumEnhancer.prototype), "componentDidUpdate", this).call(this, prevProps, prevState, snapshot);
        }

        trimRadiumState(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (_get(_getPrototypeOf(RadiumEnhancer.prototype), "componentWillUnmount", this)) {
          _get(_getPrototypeOf(RadiumEnhancer.prototype), "componentWillUnmount", this).call(this);
        }

        cleanUpEnhancer(this);
      }
    }, {
      key: "render",
      value: function render() {
        var renderedElement = _get(_getPrototypeOf(RadiumEnhancer.prototype), "render", this).call(this);

        var currentConfig = resolveConfig(this.props.radiumConfig, this.props.radiumConfigContext, config);
        return renderRadiumComponent(this, renderedElement, currentConfig, this.props.radiumConfig);
      }
    }]);

    return RadiumEnhancer;
  }(ComposedComponent); // Lazy infer the method names of the Enhancer.


  RadiumEnhancer._isRadiumEnhanced = true;
  RADIUM_PROTO = RadiumEnhancer.prototype;
  RADIUM_METHODS = Object.getOwnPropertyNames(RADIUM_PROTO).filter(function (n) {
    return n !== 'constructor' && typeof RADIUM_PROTO[n] === 'function';
  }); // Class inheritance uses Object.create and because of __proto__ issues
  // with IE <10 any static properties of the superclass aren't inherited and
  // so need to be manually populated.
  // See http://babeljs.io/docs/advanced/caveats/#classes-10-and-below-

  copyProperties(origComponent, RadiumEnhancer);

  if (true) {
    // This also fixes React Hot Loader by exposing the original components top
    // level prototype methods on the Radium enhanced prototype as discussed in
    // https://github.com/FormidableLabs/radium/issues/219.
    copyProperties(ComposedComponent.prototype, RadiumEnhancer.prototype);
  } // add Radium propTypes to enhanced component's propTypes


  if (RadiumEnhancer.propTypes && RadiumEnhancer.propTypes.style) {
    RadiumEnhancer.propTypes = _objectSpread({}, RadiumEnhancer.propTypes, {
      style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object])
    });
  } // copy display name to enhanced component


  RadiumEnhancer.displayName = origComponent.displayName || origComponent.name || 'Component';
  return Object(_context__WEBPACK_IMPORTED_MODULE_5__["withRadiumContexts"])(RadiumEnhancer);
}

function createComposedFromNativeClass(ComposedComponent) {
  ComposedComponent = function (OrigComponent) {
    function NewComponent() {
      // Use Reflect.construct to simulate 'new'
      var obj = Reflect.construct(OrigComponent, arguments, this.constructor);
      return obj;
    } // $FlowFixMe


    Reflect.setPrototypeOf(NewComponent.prototype, OrigComponent.prototype); // $FlowFixMe

    Reflect.setPrototypeOf(NewComponent, OrigComponent);
    return NewComponent;
  }(ComposedComponent);

  return ComposedComponent;
}

var ReactForwardRefSymbol = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
  return null;
}).$$typeof;
function enhanceWithRadium(configOrComposedComponent) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (ReactForwardRefSymbol && configOrComposedComponent.$$typeof === ReactForwardRefSymbol) {
    return createEnhancedFunctionComponent(configOrComposedComponent.render, config);
  }

  if (typeof configOrComposedComponent !== 'function') {
    return createFactoryFromConfig(config, configOrComposedComponent);
  }

  var origComponent = configOrComposedComponent; // Handle stateless components

  if (isStateless(origComponent)) {
    return createEnhancedFunctionComponent(origComponent, config);
  }

  var _ComposedComponent2 = origComponent; // Radium is transpiled in npm, so it isn't really using es6 classes at
  // runtime.  However, the user of Radium might be.  In this case we have
  // to maintain forward compatibility with native es classes.

  if (isNativeClass(_ComposedComponent2)) {
    _ComposedComponent2 = createComposedFromNativeClass(_ComposedComponent2);
  } // Shallow copy composed if still original (we may mutate later).


  if (_ComposedComponent2 === origComponent) {
    _ComposedComponent2 =
    /*#__PURE__*/
    function (_ComposedComponent3) {
      _inherits(ComposedComponent, _ComposedComponent3);

      function ComposedComponent() {
        _classCallCheck(this, ComposedComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(ComposedComponent).apply(this, arguments));
      }

      return ComposedComponent;
    }(_ComposedComponent2);
  }

  return createEnhancedClassComponent(origComponent, _ComposedComponent2, config);
}

function createFactoryFromConfig(config, configOrComposedComponent) {
  var newConfig = _objectSpread({}, config, configOrComposedComponent);

  return function (configOrComponent) {
    return enhanceWithRadium(configOrComponent, newConfig);
  };
}

/***/ }),

/***/ "./node_modules/radium/es/get-radium-style-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/radium/es/get-radium-style-state.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getRadiumStyleState = function getRadiumStyleState(component) {
  return component._lastRadiumState || component.state && component.state._radiumStyleState || {};
};

/* harmony default export */ __webpack_exports__["default"] = (getRadiumStyleState);

/***/ }),

/***/ "./node_modules/radium/es/get-state-key.js":
/*!*************************************************!*\
  !*** ./node_modules/radium/es/get-state-key.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getStateKey = function getStateKey(renderedElement) {
  return typeof renderedElement.ref === 'string' ? renderedElement.ref : renderedElement.key;
};

/* harmony default export */ __webpack_exports__["default"] = (getStateKey);

/***/ }),

/***/ "./node_modules/radium/es/get-state.js":
/*!*********************************************!*\
  !*** ./node_modules/radium/es/get-state.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clean_state_key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clean-state-key */ "./node_modules/radium/es/clean-state-key.js");


var getState = function getState(state, elementKey, value) {
  var key = Object(_clean_state_key__WEBPACK_IMPORTED_MODULE_0__["default"])(elementKey);
  return !!state && !!state._radiumStyleState && !!state._radiumStyleState[key] && state._radiumStyleState[key][value];
};

/* harmony default export */ __webpack_exports__["default"] = (getState);

/***/ }),

/***/ "./node_modules/radium/es/hash.js":
/*!****************************************!*\
  !*** ./node_modules/radium/es/hash.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hash; });
// a simple djb2 hash based on hash-string:
// https://github.com/MatthewBarker/hash-string/blob/master/source/hash-string.js
// returns a hex-encoded hash
function hash(text) {
  if (!text) {
    return '';
  }

  var hashValue = 5381;
  var index = text.length - 1;

  while (index) {
    hashValue = hashValue * 33 ^ text.charCodeAt(index);
    index -= 1;
  }

  return (hashValue >>> 0).toString(16);
}

/***/ }),

/***/ "./node_modules/radium/es/index.js":
/*!*****************************************!*\
  !*** ./node_modules/radium/es/index.js ***!
  \*****************************************/
/*! exports provided: default, Plugins, Style, StyleRoot, getState, keyframes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enhancer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enhancer */ "./node_modules/radium/es/enhancer.js");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins */ "./node_modules/radium/es/plugins/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Plugins", function() { return _plugins__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/style */ "./node_modules/radium/es/components/style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return _components_style__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _components_style_root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/style-root */ "./node_modules/radium/es/components/style-root.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleRoot", function() { return _components_style_root__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _get_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-state */ "./node_modules/radium/es/get-state.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return _get_state__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _keyframes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./keyframes */ "./node_modules/radium/es/keyframes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return _keyframes__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _resolve_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resolve-styles */ "./node_modules/radium/es/resolve-styles.js");








function Radium(ComposedComponent) {
  return Object(_enhancer__WEBPACK_IMPORTED_MODULE_0__["default"])(ComposedComponent);
} // Legacy object support.
//
// Normally it would be disfavored to attach these to the `Radium` object
// because it defeats tree-shaking, using instead the ESM exports. But,
// the `Radium` `Enhancer` uses **all** of these, so there's no extra "cost"
// to them being explicitly on the `Radium` object.


Radium.Plugins = _plugins__WEBPACK_IMPORTED_MODULE_1__["default"];
Radium.Style = _components_style__WEBPACK_IMPORTED_MODULE_2__["default"];
Radium.StyleRoot = _components_style_root__WEBPACK_IMPORTED_MODULE_3__["default"];
Radium.getState = _get_state__WEBPACK_IMPORTED_MODULE_4__["default"];
Radium.keyframes = _keyframes__WEBPACK_IMPORTED_MODULE_5__["default"];

if (true) {
  Radium.TestMode = {
    clearState: _resolve_styles__WEBPACK_IMPORTED_MODULE_6__["default"].__clearStateForTests,
    disable: _resolve_styles__WEBPACK_IMPORTED_MODULE_6__["default"].__setTestMode.bind(null, false),
    enable: _resolve_styles__WEBPACK_IMPORTED_MODULE_6__["default"].__setTestMode.bind(null, true)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Radium); // ESM re-exports



/***/ }),

/***/ "./node_modules/radium/es/keyframes.js":
/*!*********************************************!*\
  !*** ./node_modules/radium/es/keyframes.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keyframes; });
/* harmony import */ var _css_rule_set_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-rule-set-to-string */ "./node_modules/radium/es/css-rule-set-to-string.js");
/* harmony import */ var _hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hash */ "./node_modules/radium/es/hash.js");
/* harmony import */ var _prefixer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prefixer */ "./node_modules/radium/es/prefixer.js");



function keyframes(keyframeRules, name) {
  return {
    __radiumKeyframes: true,
    __process: function __process(userAgent) {
      var keyframesPrefixed = Object(_prefixer__WEBPACK_IMPORTED_MODULE_2__["getPrefixedKeyframes"])(userAgent);
      var rules = Object.keys(keyframeRules).map(function (percentage) {
        return Object(_css_rule_set_to_string__WEBPACK_IMPORTED_MODULE_0__["default"])(percentage, keyframeRules[percentage], userAgent);
      }).join('\n');
      var animationName = (name ? name + '-' : '') + 'radium-animation-' + Object(_hash__WEBPACK_IMPORTED_MODULE_1__["default"])(rules);
      var css = '@' + keyframesPrefixed + ' ' + animationName + ' {\n' + rules + '\n}\n';
      return {
        css: css,
        animationName: animationName
      };
    }
  };
}

/***/ }),

/***/ "./node_modules/radium/es/map-object.js":
/*!**********************************************!*\
  !*** ./node_modules/radium/es/map-object.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mapObject; });
function mapObject(object, mapper) {
  return Object.keys(object).reduce(function (result, key) {
    result[key] = mapper(object[key], key);
    return result;
  }, {});
}

/***/ }),

/***/ "./node_modules/radium/es/merge-styles.js":
/*!************************************************!*\
  !*** ./node_modules/radium/es/merge-styles.js ***!
  \************************************************/
/*! exports provided: isNestedStyle, mergeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNestedStyle", function() { return isNestedStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return mergeStyles; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isNestedStyle(value) {
  // Don't merge objects overriding toString, since they should be converted
  // to string values.
  return value && value.constructor === Object && value.toString === Object.prototype.toString;
} // Merge style objects. Deep merge plain object values.

function mergeStyles(styles) {
  var result = {};
  styles.forEach(function (style) {
    if (!style || _typeof(style) !== 'object') {
      return;
    }

    if (Array.isArray(style)) {
      style = mergeStyles(style);
    }

    Object.keys(style).forEach(function (key) {
      // Simple case, nothing nested
      if (!isNestedStyle(style[key]) || !isNestedStyle(result[key])) {
        result[key] = style[key];
        return;
      } // If nested media, don't merge the nested styles, append a space to the
      // end (benign when converted to CSS). This way we don't end up merging
      // media queries that appear later in the chain with those that appear
      // earlier.


      if (key.indexOf('@media') === 0) {
        var newKey = key; // eslint-disable-next-line no-constant-condition

        while (true) {
          newKey += ' ';

          if (!result[newKey]) {
            result[newKey] = style[key];
            return;
          }
        }
      } // Merge all other nested styles recursively


      result[key] = mergeStyles([result[key], style[key]]);
    });
  });
  return result;
}

/***/ }),

/***/ "./node_modules/radium/es/plugins/check-props-plugin.js":
/*!**************************************************************!*\
  !*** ./node_modules/radium/es/plugins/check-props-plugin.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _checkProps = function checkProps() {};

if (true) {
  // Warn if you use longhand and shorthand properties in the same style
  // object.
  // https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties
  var shorthandPropertyExpansions = {
    background: ['backgroundAttachment', 'backgroundBlendMode', 'backgroundClip', 'backgroundColor', 'backgroundImage', 'backgroundOrigin', 'backgroundPosition', 'backgroundPositionX', 'backgroundPositionY', 'backgroundRepeat', 'backgroundRepeatX', 'backgroundRepeatY', 'backgroundSize'],
    border: ['borderBottom', 'borderBottomColor', 'borderBottomStyle', 'borderBottomWidth', 'borderColor', 'borderLeft', 'borderLeftColor', 'borderLeftStyle', 'borderLeftWidth', 'borderRight', 'borderRightColor', 'borderRightStyle', 'borderRightWidth', 'borderStyle', 'borderTop', 'borderTopColor', 'borderTopStyle', 'borderTopWidth', 'borderWidth'],
    borderImage: ['borderImageOutset', 'borderImageRepeat', 'borderImageSlice', 'borderImageSource', 'borderImageWidth'],
    borderRadius: ['borderBottomLeftRadius', 'borderBottomRightRadius', 'borderTopLeftRadius', 'borderTopRightRadius'],
    font: ['fontFamily', 'fontKerning', 'fontSize', 'fontStretch', 'fontStyle', 'fontVariant', 'fontVariantLigatures', 'fontWeight', 'lineHeight'],
    listStyle: ['listStyleImage', 'listStylePosition', 'listStyleType'],
    margin: ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
    padding: ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
    transition: ['transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction']
  };

  _checkProps = function checkProps(config) {
    var componentName = config.componentName,
        style = config.style;

    if (_typeof(style) !== 'object' || !style) {
      return;
    }

    var styleKeys = Object.keys(style);
    styleKeys.forEach(function (styleKey) {
      if (Array.isArray(shorthandPropertyExpansions[styleKey]) && shorthandPropertyExpansions[styleKey].some(function (sp) {
        return styleKeys.indexOf(sp) !== -1;
      })) {
        if (true) {
          /* eslint-disable no-console */
          console.warn('Radium: property "' + styleKey + '" in style object', style, ': do not mix longhand and ' + 'shorthand properties in the same style object. Check the render ' + 'method of ' + componentName + '.', 'See https://github.com/FormidableLabs/radium/issues/95 for more ' + 'information.');
          /* eslint-enable no-console */
        }
      }
    });
    styleKeys.forEach(function (k) {
      return _checkProps(_objectSpread({}, config, {
        style: style[k]
      }));
    });
    return;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (_checkProps);

/***/ }),

/***/ "./node_modules/radium/es/plugins/index.js":
/*!*************************************************!*\
  !*** ./node_modules/radium/es/plugins/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _check_props_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-props-plugin */ "./node_modules/radium/es/plugins/check-props-plugin.js");
/* harmony import */ var _keyframes_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyframes-plugin */ "./node_modules/radium/es/plugins/keyframes-plugin.js");
/* harmony import */ var _merge_style_array_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./merge-style-array-plugin */ "./node_modules/radium/es/plugins/merge-style-array-plugin.js");
/* harmony import */ var _prefix_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prefix-plugin */ "./node_modules/radium/es/plugins/prefix-plugin.js");
/* harmony import */ var _remove_nested_styles_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./remove-nested-styles-plugin */ "./node_modules/radium/es/plugins/remove-nested-styles-plugin.js");
/* harmony import */ var _resolve_interaction_styles_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolve-interaction-styles-plugin */ "./node_modules/radium/es/plugins/resolve-interaction-styles-plugin.js");
/* harmony import */ var _resolve_media_queries_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resolve-media-queries-plugin */ "./node_modules/radium/es/plugins/resolve-media-queries-plugin.js");
/* harmony import */ var _visited_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visited-plugin */ "./node_modules/radium/es/plugins/visited-plugin.js");
/* eslint-disable block-scoped-const */








/* harmony default export */ __webpack_exports__["default"] = ({
  checkProps: _check_props_plugin__WEBPACK_IMPORTED_MODULE_0__["default"],
  keyframes: _keyframes_plugin__WEBPACK_IMPORTED_MODULE_1__["default"],
  mergeStyleArray: _merge_style_array_plugin__WEBPACK_IMPORTED_MODULE_2__["default"],
  prefix: _prefix_plugin__WEBPACK_IMPORTED_MODULE_3__["default"],
  removeNestedStyles: _remove_nested_styles_plugin__WEBPACK_IMPORTED_MODULE_4__["default"],
  resolveInteractionStyles: _resolve_interaction_styles_plugin__WEBPACK_IMPORTED_MODULE_5__["default"],
  resolveMediaQueries: _resolve_media_queries_plugin__WEBPACK_IMPORTED_MODULE_6__["default"],
  visited: _visited_plugin__WEBPACK_IMPORTED_MODULE_7__["default"]
});

/***/ }),

/***/ "./node_modules/radium/es/plugins/keyframes-plugin.js":
/*!************************************************************!*\
  !*** ./node_modules/radium/es/plugins/keyframes-plugin.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keyframesPlugin; });
function keyframesPlugin(_ref) {
  var addCSS = _ref.addCSS,
      config = _ref.config,
      style = _ref.style;

  var processKeyframeStyle = function processKeyframeStyle(value) {
    var keyframesValue = value;

    var _keyframesValue$__pro = keyframesValue.__process(config.userAgent),
        animationName = _keyframesValue$__pro.animationName,
        css = _keyframesValue$__pro.css;

    addCSS(css);
    return animationName;
  };

  var newStyle = Object.keys(style).reduce(function (newStyleInProgress, key) {
    var value = style[key];
    var isKeyframeArray = Array.isArray(value);

    if (key === 'animationName' && value && (value.__radiumKeyframes || isKeyframeArray)) {
      if (isKeyframeArray) {
        value = value.map(processKeyframeStyle).join(', ');
      } else {
        value = processKeyframeStyle(value);
      }
    }

    newStyleInProgress[key] = value;
    return newStyleInProgress;
  }, {});
  return {
    style: newStyle
  };
}

/***/ }),

/***/ "./node_modules/radium/es/plugins/merge-style-array-plugin.js":
/*!********************************************************************!*\
  !*** ./node_modules/radium/es/plugins/merge-style-array-plugin.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Convenient syntax for multiple styles: `style={[style1, style2, etc]}`
// Ignores non-objects, so you can do `this.state.isCool && styles.cool`.
var mergeStyleArrayPlugin = function mergeStyleArrayPlugin(_ref) {
  var style = _ref.style,
      mergeStyles = _ref.mergeStyles;
  // eslint-disable-line no-shadow
  var newStyle = Array.isArray(style) ? mergeStyles(style) : style;
  return {
    style: newStyle
  };
};

/* harmony default export */ __webpack_exports__["default"] = (mergeStyleArrayPlugin);

/***/ }),

/***/ "./node_modules/radium/es/plugins/mouse-up-listener.js":
/*!*************************************************************!*\
  !*** ./node_modules/radium/es/plugins/mouse-up-listener.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _callbacks = [];
var _mouseUpListenerIsActive = false;

function _handleMouseUp() {
  _callbacks.forEach(function (callback) {
    callback();
  });
}

var subscribe = function subscribe(callback) {
  if (_callbacks.indexOf(callback) === -1) {
    _callbacks.push(callback);
  }

  if (!_mouseUpListenerIsActive) {
    window.addEventListener('mouseup', _handleMouseUp);
    _mouseUpListenerIsActive = true;
  }

  return {
    remove: function remove() {
      var index = _callbacks.indexOf(callback);

      _callbacks.splice(index, 1);

      if (_callbacks.length === 0 && _mouseUpListenerIsActive) {
        window.removeEventListener('mouseup', _handleMouseUp);
        _mouseUpListenerIsActive = false;
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  subscribe: subscribe,
  __triggerForTests: _handleMouseUp
});

/***/ }),

/***/ "./node_modules/radium/es/plugins/prefix-plugin.js":
/*!*********************************************************!*\
  !*** ./node_modules/radium/es/plugins/prefix-plugin.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return prefixPlugin; });
/* harmony import */ var _prefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prefixer */ "./node_modules/radium/es/prefixer.js");

function prefixPlugin(_ref) {
  var config = _ref.config,
      style = _ref.style;
  var newStyle = Object(_prefixer__WEBPACK_IMPORTED_MODULE_0__["getPrefixedStyle"])(style, config.userAgent);
  return {
    style: newStyle
  };
}

/***/ }),

/***/ "./node_modules/radium/es/plugins/remove-nested-styles-plugin.js":
/*!***********************************************************************!*\
  !*** ./node_modules/radium/es/plugins/remove-nested-styles-plugin.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeNestedStyles; });
function removeNestedStyles(_ref) {
  var isNestedStyle = _ref.isNestedStyle,
      style = _ref.style;
  // eslint-disable-line no-shadow
  var newStyle = Object.keys(style).reduce(function (newStyleInProgress, key) {
    var value = style[key];

    if (!isNestedStyle(value)) {
      newStyleInProgress[key] = value;
    }

    return newStyleInProgress;
  }, {});
  return {
    style: newStyle
  };
}

/***/ }),

/***/ "./node_modules/radium/es/plugins/resolve-interaction-styles-plugin.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/radium/es/plugins/resolve-interaction-styles-plugin.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mouse_up_listener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mouse-up-listener */ "./node_modules/radium/es/plugins/mouse-up-listener.js");


var _isInteractiveStyleField = function _isInteractiveStyleField(styleFieldName) {
  return styleFieldName === ':hover' || styleFieldName === ':active' || styleFieldName === ':focus';
};

var resolveInteractionStyles = function resolveInteractionStyles(config) {
  var ExecutionEnvironment = config.ExecutionEnvironment,
      getComponentField = config.getComponentField,
      getState = config.getState,
      mergeStyles = config.mergeStyles,
      props = config.props,
      setState = config.setState,
      style = config.style;
  var newComponentFields = {};
  var newProps = {}; // Only add handlers if necessary

  if (style[':hover']) {
    // Always call the existing handler if one is already defined.
    // This code, and the very similar ones below, could be abstracted a bit
    // more, but it hurts readability IMO.
    var existingOnMouseEnter = props.onMouseEnter;

    newProps.onMouseEnter = function (e) {
      existingOnMouseEnter && existingOnMouseEnter(e);
      setState(':hover', true);
    };

    var existingOnMouseLeave = props.onMouseLeave;

    newProps.onMouseLeave = function (e) {
      existingOnMouseLeave && existingOnMouseLeave(e);
      setState(':hover', false);
    };
  }

  if (style[':active']) {
    var existingOnMouseDown = props.onMouseDown;

    newProps.onMouseDown = function (e) {
      existingOnMouseDown && existingOnMouseDown(e);
      newComponentFields._lastMouseDown = Date.now();
      setState(':active', 'viamousedown');
    };

    var existingOnKeyDown = props.onKeyDown;

    newProps.onKeyDown = function (e) {
      existingOnKeyDown && existingOnKeyDown(e);

      if (e.key === ' ' || e.key === 'Enter') {
        setState(':active', 'viakeydown');
      }
    };

    var existingOnKeyUp = props.onKeyUp;

    newProps.onKeyUp = function (e) {
      existingOnKeyUp && existingOnKeyUp(e);

      if (e.key === ' ' || e.key === 'Enter') {
        setState(':active', false);
      }
    };
  }

  if (style[':focus']) {
    var existingOnFocus = props.onFocus;

    newProps.onFocus = function (e) {
      existingOnFocus && existingOnFocus(e);
      setState(':focus', true);
    };

    var existingOnBlur = props.onBlur;

    newProps.onBlur = function (e) {
      existingOnBlur && existingOnBlur(e);
      setState(':focus', false);
    };
  }

  if (style[':active'] && !getComponentField('_radiumMouseUpListener') && ExecutionEnvironment.canUseEventListeners) {
    newComponentFields._radiumMouseUpListener = _mouse_up_listener__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(function () {
      Object.keys(getComponentField('state')._radiumStyleState).forEach(function (key) {
        if (getState(':active', key) === 'viamousedown') {
          setState(':active', false, key);
        }
      });
    });
  } // Merge the styles in the order they were defined


  var interactionStyles = props.disabled ? [style[':disabled']] : Object.keys(style).filter(function (name) {
    return _isInteractiveStyleField(name) && getState(name);
  }).map(function (name) {
    return style[name];
  });
  var newStyle = mergeStyles([style].concat(interactionStyles)); // Remove interactive styles

  newStyle = Object.keys(newStyle).reduce(function (styleWithoutInteractions, name) {
    if (!_isInteractiveStyleField(name) && name !== ':disabled') {
      styleWithoutInteractions[name] = newStyle[name];
    }

    return styleWithoutInteractions;
  }, {});
  return {
    componentFields: newComponentFields,
    props: newProps,
    style: newStyle
  };
};

/* harmony default export */ __webpack_exports__["default"] = (resolveInteractionStyles);

/***/ }),

/***/ "./node_modules/radium/es/plugins/resolve-media-queries-plugin.js":
/*!************************************************************************!*\
  !*** ./node_modules/radium/es/plugins/resolve-media-queries-plugin.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return resolveMediaQueries; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _windowMatchMedia;

function _getWindowMatchMedia(ExecutionEnvironment) {
  if (_windowMatchMedia === undefined) {
    _windowMatchMedia = !!ExecutionEnvironment.canUseDOM && !!window && !!window.matchMedia && function (mediaQueryString) {
      return window.matchMedia(mediaQueryString);
    } || null;
  }

  return _windowMatchMedia;
}

function _filterObject(obj, predicate) {
  return Object.keys(obj).filter(function (key) {
    return predicate(obj[key], key);
  }).reduce(function (result, key) {
    result[key] = obj[key];
    return result;
  }, {});
}

function _removeMediaQueries(style) {
  return Object.keys(style).reduce(function (styleWithoutMedia, key) {
    if (key.indexOf('@media') !== 0) {
      styleWithoutMedia[key] = style[key];
    }

    return styleWithoutMedia;
  }, {});
}

function _topLevelRulesToCSS(_ref) {
  var addCSS = _ref.addCSS,
      appendImportantToEachValue = _ref.appendImportantToEachValue,
      cssRuleSetToString = _ref.cssRuleSetToString,
      hash = _ref.hash,
      isNestedStyle = _ref.isNestedStyle,
      style = _ref.style,
      userAgent = _ref.userAgent;
  var className = '';
  Object.keys(style).filter(function (name) {
    return name.indexOf('@media') === 0;
  }).map(function (query) {
    var topLevelRules = appendImportantToEachValue(_filterObject(style[query], function (value) {
      return !isNestedStyle(value);
    }));

    if (!Object.keys(topLevelRules).length) {
      return;
    }

    var ruleCSS = cssRuleSetToString('', topLevelRules, userAgent); // CSS classes cannot start with a number

    var mediaQueryClassName = 'rmq-' + hash(query + ruleCSS);
    var css = query + '{ .' + mediaQueryClassName + ruleCSS + '}';
    addCSS(css);
    className += (className ? ' ' : '') + mediaQueryClassName;
  });
  return className;
}

function _subscribeToMediaQuery(_ref2) {
  var listener = _ref2.listener,
      listenersByQuery = _ref2.listenersByQuery,
      matchMedia = _ref2.matchMedia,
      mediaQueryListsByQuery = _ref2.mediaQueryListsByQuery,
      query = _ref2.query;
  query = query.replace('@media ', '');
  var mql = mediaQueryListsByQuery[query];

  if (!mql && matchMedia) {
    mediaQueryListsByQuery[query] = mql = matchMedia(query);
  }

  if (!listenersByQuery || !listenersByQuery[query]) {
    mql.addListener(listener);
    listenersByQuery[query] = {
      remove: function remove() {
        mql.removeListener(listener);
      }
    };
  }

  return mql;
}

function resolveMediaQueries(_ref3) {
  var ExecutionEnvironment = _ref3.ExecutionEnvironment,
      addCSS = _ref3.addCSS,
      appendImportantToEachValue = _ref3.appendImportantToEachValue,
      config = _ref3.config,
      cssRuleSetToString = _ref3.cssRuleSetToString,
      getComponentField = _ref3.getComponentField,
      getGlobalState = _ref3.getGlobalState,
      hash = _ref3.hash,
      isNestedStyle = _ref3.isNestedStyle,
      mergeStyles = _ref3.mergeStyles,
      props = _ref3.props,
      setState = _ref3.setState,
      style = _ref3.style;

  // eslint-disable-line no-shadow
  var newStyle = _removeMediaQueries(style);

  var mediaQueryClassNames = _topLevelRulesToCSS({
    addCSS: addCSS,
    appendImportantToEachValue: appendImportantToEachValue,
    cssRuleSetToString: cssRuleSetToString,
    hash: hash,
    isNestedStyle: isNestedStyle,
    style: style,
    userAgent: config.userAgent
  });

  var newProps = mediaQueryClassNames ? {
    className: mediaQueryClassNames + (props.className ? ' ' + props.className : '')
  } : null;

  var matchMedia = config.matchMedia || _getWindowMatchMedia(ExecutionEnvironment);

  if (!matchMedia) {
    return {
      props: newProps,
      style: newStyle
    };
  }

  var listenersByQuery = _objectSpread({}, getComponentField('_radiumMediaQueryListenersByQuery'));

  var mediaQueryListsByQuery = getGlobalState('mediaQueryListsByQuery') || {};
  Object.keys(style).filter(function (name) {
    return name.indexOf('@media') === 0;
  }).map(function (query) {
    var nestedRules = _filterObject(style[query], isNestedStyle);

    if (!Object.keys(nestedRules).length) {
      return;
    }

    var mql = _subscribeToMediaQuery({
      listener: function listener() {
        return setState(query, mql.matches, '_all');
      },
      listenersByQuery: listenersByQuery,
      matchMedia: matchMedia,
      mediaQueryListsByQuery: mediaQueryListsByQuery,
      query: query
    }); // Apply media query states


    if (mql.matches) {
      newStyle = mergeStyles([newStyle, nestedRules]);
    }
  });
  return {
    componentFields: {
      _radiumMediaQueryListenersByQuery: listenersByQuery
    },
    globalState: {
      mediaQueryListsByQuery: mediaQueryListsByQuery
    },
    props: newProps,
    style: newStyle
  };
}

/***/ }),

/***/ "./node_modules/radium/es/plugins/visited-plugin.js":
/*!**********************************************************!*\
  !*** ./node_modules/radium/es/plugins/visited-plugin.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return visited; });
function visited(_ref) {
  var addCSS = _ref.addCSS,
      appendImportantToEachValue = _ref.appendImportantToEachValue,
      config = _ref.config,
      cssRuleSetToString = _ref.cssRuleSetToString,
      hash = _ref.hash,
      props = _ref.props,
      style = _ref.style;
  // eslint-disable-line no-shadow
  var className = props.className;
  var newStyle = Object.keys(style).reduce(function (newStyleInProgress, key) {
    var value = style[key];

    if (key === ':visited') {
      value = appendImportantToEachValue(value);
      var ruleCSS = cssRuleSetToString('', value, config.userAgent);
      var visitedClassName = 'rad-' + hash(ruleCSS);
      var css = '.' + visitedClassName + ':visited' + ruleCSS;
      addCSS(css);
      className = (className ? className + ' ' : '') + visitedClassName;
    } else {
      newStyleInProgress[key] = value;
    }

    return newStyleInProgress;
  }, {});
  return {
    props: className === props.className ? null : {
      className: className
    },
    style: newStyle
  };
}

/***/ }),

/***/ "./node_modules/radium/es/prefix-data/dynamic.js":
/*!*******************************************************!*\
  !*** ./node_modules/radium/es/prefix-data/dynamic.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/calc */ "./node_modules/inline-style-prefixer/dynamic/plugins/calc.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_calc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_calc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/crossFade */ "./node_modules/inline-style-prefixer/dynamic/plugins/crossFade.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/cursor */ "./node_modules/inline-style-prefixer/dynamic/plugins/cursor.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_cursor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_cursor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/filter */ "./node_modules/inline-style-prefixer/dynamic/plugins/filter.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/flex */ "./node_modules/inline-style-prefixer/dynamic/plugins/flex.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_flex__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_flex__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/flexboxIE */ "./node_modules/inline-style-prefixer/dynamic/plugins/flexboxIE.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/flexboxOld */ "./node_modules/inline-style-prefixer/dynamic/plugins/flexboxOld.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_gradient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/gradient */ "./node_modules/inline-style-prefixer/dynamic/plugins/gradient.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_gradient__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_gradient__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/imageSet */ "./node_modules/inline-style-prefixer/dynamic/plugins/imageSet.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_position__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/position */ "./node_modules/inline-style-prefixer/dynamic/plugins/position.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_position__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_position__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_sizing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/sizing */ "./node_modules/inline-style-prefixer/dynamic/plugins/sizing.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_sizing__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_sizing__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_transition__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/transition */ "./node_modules/inline-style-prefixer/dynamic/plugins/transition.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_transition__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_transition__WEBPACK_IMPORTED_MODULE_11__);












/* harmony default export */ __webpack_exports__["default"] = ({
  plugins: [inline_style_prefixer_dynamic_plugins_calc__WEBPACK_IMPORTED_MODULE_0___default.a, inline_style_prefixer_dynamic_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1___default.a, inline_style_prefixer_dynamic_plugins_cursor__WEBPACK_IMPORTED_MODULE_2___default.a, inline_style_prefixer_dynamic_plugins_filter__WEBPACK_IMPORTED_MODULE_3___default.a, inline_style_prefixer_dynamic_plugins_flex__WEBPACK_IMPORTED_MODULE_4___default.a, inline_style_prefixer_dynamic_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5___default.a, inline_style_prefixer_dynamic_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6___default.a, inline_style_prefixer_dynamic_plugins_gradient__WEBPACK_IMPORTED_MODULE_7___default.a, inline_style_prefixer_dynamic_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8___default.a, inline_style_prefixer_dynamic_plugins_position__WEBPACK_IMPORTED_MODULE_9___default.a, inline_style_prefixer_dynamic_plugins_sizing__WEBPACK_IMPORTED_MODULE_10___default.a, inline_style_prefixer_dynamic_plugins_transition__WEBPACK_IMPORTED_MODULE_11___default.a],
  prefixMap: {
    chrome: {
      transform: 35,
      transformOrigin: 35,
      transformOriginX: 35,
      transformOriginY: 35,
      backfaceVisibility: 35,
      perspective: 35,
      perspectiveOrigin: 35,
      transformStyle: 35,
      transformOriginZ: 35,
      animation: 42,
      animationDelay: 42,
      animationDirection: 42,
      animationFillMode: 42,
      animationDuration: 42,
      animationIterationCount: 42,
      animationName: 42,
      animationPlayState: 42,
      animationTimingFunction: 42,
      appearance: 66,
      userSelect: 53,
      fontKerning: 32,
      textEmphasisPosition: 66,
      textEmphasis: 66,
      textEmphasisStyle: 66,
      textEmphasisColor: 66,
      boxDecorationBreak: 66,
      clipPath: 54,
      maskImage: 66,
      maskMode: 66,
      maskRepeat: 66,
      maskPosition: 66,
      maskClip: 66,
      maskOrigin: 66,
      maskSize: 66,
      maskComposite: 66,
      mask: 66,
      maskBorderSource: 66,
      maskBorderMode: 66,
      maskBorderSlice: 66,
      maskBorderWidth: 66,
      maskBorderOutset: 66,
      maskBorderRepeat: 66,
      maskBorder: 66,
      maskType: 66,
      textDecorationStyle: 56,
      textDecorationSkip: 56,
      textDecorationLine: 56,
      textDecorationColor: 56,
      filter: 52,
      fontFeatureSettings: 47,
      breakAfter: 49,
      breakBefore: 49,
      breakInside: 49,
      columnCount: 49,
      columnFill: 49,
      columnGap: 49,
      columnRule: 49,
      columnRuleColor: 49,
      columnRuleStyle: 49,
      columnRuleWidth: 49,
      columns: 49,
      columnSpan: 49,
      columnWidth: 49,
      writingMode: 47
    },
    safari: {
      flex: 8,
      flexBasis: 8,
      flexDirection: 8,
      flexGrow: 8,
      flexFlow: 8,
      flexShrink: 8,
      flexWrap: 8,
      alignContent: 8,
      alignItems: 8,
      alignSelf: 8,
      justifyContent: 8,
      order: 8,
      transition: 6,
      transitionDelay: 6,
      transitionDuration: 6,
      transitionProperty: 6,
      transitionTimingFunction: 6,
      transform: 8,
      transformOrigin: 8,
      transformOriginX: 8,
      transformOriginY: 8,
      backfaceVisibility: 8,
      perspective: 8,
      perspectiveOrigin: 8,
      transformStyle: 8,
      transformOriginZ: 8,
      animation: 8,
      animationDelay: 8,
      animationDirection: 8,
      animationFillMode: 8,
      animationDuration: 8,
      animationIterationCount: 8,
      animationName: 8,
      animationPlayState: 8,
      animationTimingFunction: 8,
      appearance: 11,
      userSelect: 11,
      backdropFilter: 11,
      fontKerning: 9,
      scrollSnapType: 10.1,
      scrollSnapPointsX: 10.1,
      scrollSnapPointsY: 10.1,
      scrollSnapDestination: 10.1,
      scrollSnapCoordinate: 10.1,
      textEmphasisPosition: 7,
      textEmphasis: 7,
      textEmphasisStyle: 7,
      textEmphasisColor: 7,
      boxDecorationBreak: 11,
      clipPath: 11,
      maskImage: 11,
      maskMode: 11,
      maskRepeat: 11,
      maskPosition: 11,
      maskClip: 11,
      maskOrigin: 11,
      maskSize: 11,
      maskComposite: 11,
      mask: 11,
      maskBorderSource: 11,
      maskBorderMode: 11,
      maskBorderSlice: 11,
      maskBorderWidth: 11,
      maskBorderOutset: 11,
      maskBorderRepeat: 11,
      maskBorder: 11,
      maskType: 11,
      textDecorationStyle: 11,
      textDecorationSkip: 11,
      textDecorationLine: 11,
      textDecorationColor: 11,
      shapeImageThreshold: 10,
      shapeImageMargin: 10,
      shapeImageOutside: 10,
      filter: 9,
      hyphens: 11,
      flowInto: 11,
      flowFrom: 11,
      breakBefore: 8,
      breakAfter: 8,
      breakInside: 8,
      regionFragment: 11,
      columnCount: 8,
      columnFill: 8,
      columnGap: 8,
      columnRule: 8,
      columnRuleColor: 8,
      columnRuleStyle: 8,
      columnRuleWidth: 8,
      columns: 8,
      columnSpan: 8,
      columnWidth: 8,
      writingMode: 10.1
    },
    firefox: {
      appearance: 60,
      userSelect: 60,
      boxSizing: 28,
      textAlignLast: 48,
      textDecorationStyle: 35,
      textDecorationSkip: 35,
      textDecorationLine: 35,
      textDecorationColor: 35,
      tabSize: 60,
      hyphens: 42,
      fontFeatureSettings: 33,
      breakAfter: 51,
      breakBefore: 51,
      breakInside: 51,
      columnCount: 51,
      columnFill: 51,
      columnGap: 51,
      columnRule: 51,
      columnRuleColor: 51,
      columnRuleStyle: 51,
      columnRuleWidth: 51,
      columns: 51,
      columnSpan: 51,
      columnWidth: 51
    },
    opera: {
      flex: 16,
      flexBasis: 16,
      flexDirection: 16,
      flexGrow: 16,
      flexFlow: 16,
      flexShrink: 16,
      flexWrap: 16,
      alignContent: 16,
      alignItems: 16,
      alignSelf: 16,
      justifyContent: 16,
      order: 16,
      transform: 22,
      transformOrigin: 22,
      transformOriginX: 22,
      transformOriginY: 22,
      backfaceVisibility: 22,
      perspective: 22,
      perspectiveOrigin: 22,
      transformStyle: 22,
      transformOriginZ: 22,
      animation: 29,
      animationDelay: 29,
      animationDirection: 29,
      animationFillMode: 29,
      animationDuration: 29,
      animationIterationCount: 29,
      animationName: 29,
      animationPlayState: 29,
      animationTimingFunction: 29,
      appearance: 50,
      userSelect: 40,
      fontKerning: 19,
      textEmphasisPosition: 50,
      textEmphasis: 50,
      textEmphasisStyle: 50,
      textEmphasisColor: 50,
      boxDecorationBreak: 50,
      clipPath: 41,
      maskImage: 50,
      maskMode: 50,
      maskRepeat: 50,
      maskPosition: 50,
      maskClip: 50,
      maskOrigin: 50,
      maskSize: 50,
      maskComposite: 50,
      mask: 50,
      maskBorderSource: 50,
      maskBorderMode: 50,
      maskBorderSlice: 50,
      maskBorderWidth: 50,
      maskBorderOutset: 50,
      maskBorderRepeat: 50,
      maskBorder: 50,
      maskType: 50,
      textDecorationStyle: 43,
      textDecorationSkip: 43,
      textDecorationLine: 43,
      textDecorationColor: 43,
      filter: 39,
      fontFeatureSettings: 34,
      breakAfter: 36,
      breakBefore: 36,
      breakInside: 36,
      columnCount: 36,
      columnFill: 36,
      columnGap: 36,
      columnRule: 36,
      columnRuleColor: 36,
      columnRuleStyle: 36,
      columnRuleWidth: 36,
      columns: 36,
      columnSpan: 36,
      columnWidth: 36,
      writingMode: 34
    },
    ie: {
      flex: 10,
      flexDirection: 10,
      flexFlow: 10,
      flexWrap: 10,
      transform: 9,
      transformOrigin: 9,
      transformOriginX: 9,
      transformOriginY: 9,
      userSelect: 11,
      wrapFlow: 11,
      wrapThrough: 11,
      wrapMargin: 11,
      scrollSnapType: 11,
      scrollSnapPointsX: 11,
      scrollSnapPointsY: 11,
      scrollSnapDestination: 11,
      scrollSnapCoordinate: 11,
      touchAction: 10,
      hyphens: 11,
      flowInto: 11,
      flowFrom: 11,
      breakBefore: 11,
      breakAfter: 11,
      breakInside: 11,
      regionFragment: 11,
      gridTemplateColumns: 11,
      gridTemplateRows: 11,
      gridTemplateAreas: 11,
      gridTemplate: 11,
      gridAutoColumns: 11,
      gridAutoRows: 11,
      gridAutoFlow: 11,
      grid: 11,
      gridRowStart: 11,
      gridColumnStart: 11,
      gridRowEnd: 11,
      gridRow: 11,
      gridColumn: 11,
      gridColumnEnd: 11,
      gridColumnGap: 11,
      gridRowGap: 11,
      gridArea: 11,
      gridGap: 11,
      textSizeAdjust: 11,
      writingMode: 11
    },
    edge: {
      userSelect: 17,
      wrapFlow: 17,
      wrapThrough: 17,
      wrapMargin: 17,
      scrollSnapType: 17,
      scrollSnapPointsX: 17,
      scrollSnapPointsY: 17,
      scrollSnapDestination: 17,
      scrollSnapCoordinate: 17,
      hyphens: 17,
      flowInto: 17,
      flowFrom: 17,
      breakBefore: 17,
      breakAfter: 17,
      breakInside: 17,
      regionFragment: 17,
      gridTemplateColumns: 15,
      gridTemplateRows: 15,
      gridTemplateAreas: 15,
      gridTemplate: 15,
      gridAutoColumns: 15,
      gridAutoRows: 15,
      gridAutoFlow: 15,
      grid: 15,
      gridRowStart: 15,
      gridColumnStart: 15,
      gridRowEnd: 15,
      gridRow: 15,
      gridColumn: 15,
      gridColumnEnd: 15,
      gridColumnGap: 15,
      gridRowGap: 15,
      gridArea: 15,
      gridGap: 15
    },
    ios_saf: {
      flex: 8.1,
      flexBasis: 8.1,
      flexDirection: 8.1,
      flexGrow: 8.1,
      flexFlow: 8.1,
      flexShrink: 8.1,
      flexWrap: 8.1,
      alignContent: 8.1,
      alignItems: 8.1,
      alignSelf: 8.1,
      justifyContent: 8.1,
      order: 8.1,
      transition: 6,
      transitionDelay: 6,
      transitionDuration: 6,
      transitionProperty: 6,
      transitionTimingFunction: 6,
      transform: 8.1,
      transformOrigin: 8.1,
      transformOriginX: 8.1,
      transformOriginY: 8.1,
      backfaceVisibility: 8.1,
      perspective: 8.1,
      perspectiveOrigin: 8.1,
      transformStyle: 8.1,
      transformOriginZ: 8.1,
      animation: 8.1,
      animationDelay: 8.1,
      animationDirection: 8.1,
      animationFillMode: 8.1,
      animationDuration: 8.1,
      animationIterationCount: 8.1,
      animationName: 8.1,
      animationPlayState: 8.1,
      animationTimingFunction: 8.1,
      appearance: 11,
      userSelect: 11,
      backdropFilter: 11,
      fontKerning: 11,
      scrollSnapType: 10.3,
      scrollSnapPointsX: 10.3,
      scrollSnapPointsY: 10.3,
      scrollSnapDestination: 10.3,
      scrollSnapCoordinate: 10.3,
      boxDecorationBreak: 11,
      clipPath: 11,
      maskImage: 11,
      maskMode: 11,
      maskRepeat: 11,
      maskPosition: 11,
      maskClip: 11,
      maskOrigin: 11,
      maskSize: 11,
      maskComposite: 11,
      mask: 11,
      maskBorderSource: 11,
      maskBorderMode: 11,
      maskBorderSlice: 11,
      maskBorderWidth: 11,
      maskBorderOutset: 11,
      maskBorderRepeat: 11,
      maskBorder: 11,
      maskType: 11,
      textSizeAdjust: 11,
      textDecorationStyle: 11,
      textDecorationSkip: 11,
      textDecorationLine: 11,
      textDecorationColor: 11,
      shapeImageThreshold: 10,
      shapeImageMargin: 10,
      shapeImageOutside: 10,
      filter: 9,
      hyphens: 11,
      flowInto: 11,
      flowFrom: 11,
      breakBefore: 8.1,
      breakAfter: 8.1,
      breakInside: 8.1,
      regionFragment: 11,
      columnCount: 8.1,
      columnFill: 8.1,
      columnGap: 8.1,
      columnRule: 8.1,
      columnRuleColor: 8.1,
      columnRuleStyle: 8.1,
      columnRuleWidth: 8.1,
      columns: 8.1,
      columnSpan: 8.1,
      columnWidth: 8.1,
      writingMode: 10.3
    },
    android: {
      borderImage: 4.2,
      borderImageOutset: 4.2,
      borderImageRepeat: 4.2,
      borderImageSlice: 4.2,
      borderImageSource: 4.2,
      borderImageWidth: 4.2,
      flex: 4.2,
      flexBasis: 4.2,
      flexDirection: 4.2,
      flexGrow: 4.2,
      flexFlow: 4.2,
      flexShrink: 4.2,
      flexWrap: 4.2,
      alignContent: 4.2,
      alignItems: 4.2,
      alignSelf: 4.2,
      justifyContent: 4.2,
      order: 4.2,
      transition: 4.2,
      transitionDelay: 4.2,
      transitionDuration: 4.2,
      transitionProperty: 4.2,
      transitionTimingFunction: 4.2,
      transform: 4.4,
      transformOrigin: 4.4,
      transformOriginX: 4.4,
      transformOriginY: 4.4,
      backfaceVisibility: 4.4,
      perspective: 4.4,
      perspectiveOrigin: 4.4,
      transformStyle: 4.4,
      transformOriginZ: 4.4,
      animation: 4.4,
      animationDelay: 4.4,
      animationDirection: 4.4,
      animationFillMode: 4.4,
      animationDuration: 4.4,
      animationIterationCount: 4.4,
      animationName: 4.4,
      animationPlayState: 4.4,
      animationTimingFunction: 4.4,
      appearance: 62,
      userSelect: 4.4,
      fontKerning: 4.4,
      textEmphasisPosition: 62,
      textEmphasis: 62,
      textEmphasisStyle: 62,
      textEmphasisColor: 62,
      boxDecorationBreak: 62,
      clipPath: 4.4,
      maskImage: 62,
      maskMode: 62,
      maskRepeat: 62,
      maskPosition: 62,
      maskClip: 62,
      maskOrigin: 62,
      maskSize: 62,
      maskComposite: 62,
      mask: 62,
      maskBorderSource: 62,
      maskBorderMode: 62,
      maskBorderSlice: 62,
      maskBorderWidth: 62,
      maskBorderOutset: 62,
      maskBorderRepeat: 62,
      maskBorder: 62,
      maskType: 62,
      filter: 4.4,
      fontFeatureSettings: 4.4,
      breakAfter: 4.4,
      breakBefore: 4.4,
      breakInside: 4.4,
      columnCount: 4.4,
      columnFill: 4.4,
      columnGap: 4.4,
      columnRule: 4.4,
      columnRuleColor: 4.4,
      columnRuleStyle: 4.4,
      columnRuleWidth: 4.4,
      columns: 4.4,
      columnSpan: 4.4,
      columnWidth: 4.4,
      writingMode: 4.4
    },
    and_chr: {
      appearance: 62,
      textEmphasisPosition: 62,
      textEmphasis: 62,
      textEmphasisStyle: 62,
      textEmphasisColor: 62,
      boxDecorationBreak: 62,
      maskImage: 62,
      maskMode: 62,
      maskRepeat: 62,
      maskPosition: 62,
      maskClip: 62,
      maskOrigin: 62,
      maskSize: 62,
      maskComposite: 62,
      mask: 62,
      maskBorderSource: 62,
      maskBorderMode: 62,
      maskBorderSlice: 62,
      maskBorderWidth: 62,
      maskBorderOutset: 62,
      maskBorderRepeat: 62,
      maskBorder: 62,
      maskType: 62
    },
    and_uc: {
      flex: 11.4,
      flexBasis: 11.4,
      flexDirection: 11.4,
      flexGrow: 11.4,
      flexFlow: 11.4,
      flexShrink: 11.4,
      flexWrap: 11.4,
      alignContent: 11.4,
      alignItems: 11.4,
      alignSelf: 11.4,
      justifyContent: 11.4,
      order: 11.4,
      transform: 11.4,
      transformOrigin: 11.4,
      transformOriginX: 11.4,
      transformOriginY: 11.4,
      backfaceVisibility: 11.4,
      perspective: 11.4,
      perspectiveOrigin: 11.4,
      transformStyle: 11.4,
      transformOriginZ: 11.4,
      animation: 11.4,
      animationDelay: 11.4,
      animationDirection: 11.4,
      animationFillMode: 11.4,
      animationDuration: 11.4,
      animationIterationCount: 11.4,
      animationName: 11.4,
      animationPlayState: 11.4,
      animationTimingFunction: 11.4,
      appearance: 11.4,
      userSelect: 11.4,
      textEmphasisPosition: 11.4,
      textEmphasis: 11.4,
      textEmphasisStyle: 11.4,
      textEmphasisColor: 11.4,
      clipPath: 11.4,
      maskImage: 11.4,
      maskMode: 11.4,
      maskRepeat: 11.4,
      maskPosition: 11.4,
      maskClip: 11.4,
      maskOrigin: 11.4,
      maskSize: 11.4,
      maskComposite: 11.4,
      mask: 11.4,
      maskBorderSource: 11.4,
      maskBorderMode: 11.4,
      maskBorderSlice: 11.4,
      maskBorderWidth: 11.4,
      maskBorderOutset: 11.4,
      maskBorderRepeat: 11.4,
      maskBorder: 11.4,
      maskType: 11.4,
      textSizeAdjust: 11.4,
      filter: 11.4,
      hyphens: 11.4,
      fontFeatureSettings: 11.4,
      breakAfter: 11.4,
      breakBefore: 11.4,
      breakInside: 11.4,
      columnCount: 11.4,
      columnFill: 11.4,
      columnGap: 11.4,
      columnRule: 11.4,
      columnRuleColor: 11.4,
      columnRuleStyle: 11.4,
      columnRuleWidth: 11.4,
      columns: 11.4,
      columnSpan: 11.4,
      columnWidth: 11.4,
      writingMode: 11.4
    },
    op_mini: {}
  }
});

/***/ }),

/***/ "./node_modules/radium/es/prefix-data/static.js":
/*!******************************************************!*\
  !*** ./node_modules/radium/es/prefix-data/static.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inline_style_prefixer_static_plugins_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/calc */ "./node_modules/inline-style-prefixer/static/plugins/calc.js");
/* harmony import */ var inline_style_prefixer_static_plugins_calc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_calc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inline_style_prefixer_static_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/crossFade */ "./node_modules/inline-style-prefixer/static/plugins/crossFade.js");
/* harmony import */ var inline_style_prefixer_static_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var inline_style_prefixer_static_plugins_cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/cursor */ "./node_modules/inline-style-prefixer/static/plugins/cursor.js");
/* harmony import */ var inline_style_prefixer_static_plugins_cursor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_cursor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var inline_style_prefixer_static_plugins_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/filter */ "./node_modules/inline-style-prefixer/static/plugins/filter.js");
/* harmony import */ var inline_style_prefixer_static_plugins_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var inline_style_prefixer_static_plugins_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/flex */ "./node_modules/inline-style-prefixer/static/plugins/flex.js");
/* harmony import */ var inline_style_prefixer_static_plugins_flex__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_flex__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var inline_style_prefixer_static_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/flexboxIE */ "./node_modules/inline-style-prefixer/static/plugins/flexboxIE.js");
/* harmony import */ var inline_style_prefixer_static_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var inline_style_prefixer_static_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/flexboxOld */ "./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js");
/* harmony import */ var inline_style_prefixer_static_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var inline_style_prefixer_static_plugins_gradient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/gradient */ "./node_modules/inline-style-prefixer/static/plugins/gradient.js");
/* harmony import */ var inline_style_prefixer_static_plugins_gradient__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_gradient__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var inline_style_prefixer_static_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/imageSet */ "./node_modules/inline-style-prefixer/static/plugins/imageSet.js");
/* harmony import */ var inline_style_prefixer_static_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var inline_style_prefixer_static_plugins_position__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/position */ "./node_modules/inline-style-prefixer/static/plugins/position.js");
/* harmony import */ var inline_style_prefixer_static_plugins_position__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_position__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var inline_style_prefixer_static_plugins_sizing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/sizing */ "./node_modules/inline-style-prefixer/static/plugins/sizing.js");
/* harmony import */ var inline_style_prefixer_static_plugins_sizing__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_sizing__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var inline_style_prefixer_static_plugins_transition__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/transition */ "./node_modules/inline-style-prefixer/static/plugins/transition.js");
/* harmony import */ var inline_style_prefixer_static_plugins_transition__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_transition__WEBPACK_IMPORTED_MODULE_11__);












var w = ['Webkit'];
var m = ['Moz'];
var ms = ['ms'];
var wm = ['Webkit', 'Moz'];
var wms = ['Webkit', 'ms'];
var wmms = ['Webkit', 'Moz', 'ms'];
/* harmony default export */ __webpack_exports__["default"] = ({
  plugins: [inline_style_prefixer_static_plugins_calc__WEBPACK_IMPORTED_MODULE_0___default.a, inline_style_prefixer_static_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1___default.a, inline_style_prefixer_static_plugins_cursor__WEBPACK_IMPORTED_MODULE_2___default.a, inline_style_prefixer_static_plugins_filter__WEBPACK_IMPORTED_MODULE_3___default.a, inline_style_prefixer_static_plugins_flex__WEBPACK_IMPORTED_MODULE_4___default.a, inline_style_prefixer_static_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5___default.a, inline_style_prefixer_static_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6___default.a, inline_style_prefixer_static_plugins_gradient__WEBPACK_IMPORTED_MODULE_7___default.a, inline_style_prefixer_static_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8___default.a, inline_style_prefixer_static_plugins_position__WEBPACK_IMPORTED_MODULE_9___default.a, inline_style_prefixer_static_plugins_sizing__WEBPACK_IMPORTED_MODULE_10___default.a, inline_style_prefixer_static_plugins_transition__WEBPACK_IMPORTED_MODULE_11___default.a],
  prefixMap: {
    transform: wms,
    transformOrigin: wms,
    transformOriginX: wms,
    transformOriginY: wms,
    backfaceVisibility: w,
    perspective: w,
    perspectiveOrigin: w,
    transformStyle: w,
    transformOriginZ: w,
    animation: w,
    animationDelay: w,
    animationDirection: w,
    animationFillMode: w,
    animationDuration: w,
    animationIterationCount: w,
    animationName: w,
    animationPlayState: w,
    animationTimingFunction: w,
    appearance: wm,
    userSelect: wmms,
    fontKerning: w,
    textEmphasisPosition: w,
    textEmphasis: w,
    textEmphasisStyle: w,
    textEmphasisColor: w,
    boxDecorationBreak: w,
    clipPath: w,
    maskImage: w,
    maskMode: w,
    maskRepeat: w,
    maskPosition: w,
    maskClip: w,
    maskOrigin: w,
    maskSize: w,
    maskComposite: w,
    mask: w,
    maskBorderSource: w,
    maskBorderMode: w,
    maskBorderSlice: w,
    maskBorderWidth: w,
    maskBorderOutset: w,
    maskBorderRepeat: w,
    maskBorder: w,
    maskType: w,
    textDecorationStyle: wm,
    textDecorationSkip: wm,
    textDecorationLine: wm,
    textDecorationColor: wm,
    filter: w,
    fontFeatureSettings: wm,
    breakAfter: wmms,
    breakBefore: wmms,
    breakInside: wmms,
    columnCount: wm,
    columnFill: wm,
    columnGap: wm,
    columnRule: wm,
    columnRuleColor: wm,
    columnRuleStyle: wm,
    columnRuleWidth: wm,
    columns: wm,
    columnSpan: wm,
    columnWidth: wm,
    writingMode: wms,
    flex: wms,
    flexBasis: w,
    flexDirection: wms,
    flexGrow: w,
    flexFlow: wms,
    flexShrink: w,
    flexWrap: wms,
    alignContent: w,
    alignItems: w,
    alignSelf: w,
    justifyContent: w,
    order: w,
    transitionDelay: w,
    transitionDuration: w,
    transitionProperty: w,
    transitionTimingFunction: w,
    backdropFilter: w,
    scrollSnapType: wms,
    scrollSnapPointsX: wms,
    scrollSnapPointsY: wms,
    scrollSnapDestination: wms,
    scrollSnapCoordinate: wms,
    shapeImageThreshold: w,
    shapeImageMargin: w,
    shapeImageOutside: w,
    hyphens: wmms,
    flowInto: wms,
    flowFrom: wms,
    regionFragment: wms,
    boxSizing: m,
    textAlignLast: m,
    tabSize: m,
    wrapFlow: ms,
    wrapThrough: ms,
    wrapMargin: ms,
    touchAction: ms,
    gridTemplateColumns: ms,
    gridTemplateRows: ms,
    gridTemplateAreas: ms,
    gridTemplate: ms,
    gridAutoColumns: ms,
    gridAutoRows: ms,
    gridAutoFlow: ms,
    grid: ms,
    gridRowStart: ms,
    gridColumnStart: ms,
    gridRowEnd: ms,
    gridRow: ms,
    gridColumn: ms,
    gridColumnEnd: ms,
    gridColumnGap: ms,
    gridRowGap: ms,
    gridArea: ms,
    gridGap: ms,
    textSizeAdjust: wms,
    borderImage: w,
    borderImageOutset: w,
    borderImageRepeat: w,
    borderImageSlice: w,
    borderImageSource: w,
    borderImageWidth: w
  }
});

/***/ }),

/***/ "./node_modules/radium/es/prefixer.js":
/*!********************************************!*\
  !*** ./node_modules/radium/es/prefixer.js ***!
  \********************************************/
/*! exports provided: getPrefixedKeyframes, getPrefixedStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrefixedKeyframes", function() { return getPrefixedKeyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrefixedStyle", function() { return getPrefixedStyle; });
/* harmony import */ var inline_style_prefixer_static_createPrefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inline-style-prefixer/static/createPrefixer */ "./node_modules/inline-style-prefixer/static/createPrefixer.js");
/* harmony import */ var inline_style_prefixer_static_createPrefixer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_createPrefixer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inline_style_prefixer_dynamic_createPrefixer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inline-style-prefixer/dynamic/createPrefixer */ "./node_modules/inline-style-prefixer/dynamic/createPrefixer.js");
/* harmony import */ var inline_style_prefixer_dynamic_createPrefixer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_createPrefixer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(exenv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _prefix_data_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prefix-data/static */ "./node_modules/radium/es/prefix-data/static.js");
/* harmony import */ var _prefix_data_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prefix-data/dynamic */ "./node_modules/radium/es/prefix-data/dynamic.js");
/* harmony import */ var _camel_case_props_to_dash_case__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./camel-case-props-to-dash-case */ "./node_modules/radium/es/camel-case-props-to-dash-case.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Based on https://github.com/jsstyles/css-vendor, but without having to
 * convert between different cases all the time.
 *
 * 
 */






var prefixAll = inline_style_prefixer_static_createPrefixer__WEBPACK_IMPORTED_MODULE_0___default()(_prefix_data_static__WEBPACK_IMPORTED_MODULE_3__["default"]);
var InlineStylePrefixer = inline_style_prefixer_dynamic_createPrefixer__WEBPACK_IMPORTED_MODULE_1___default()(_prefix_data_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"], prefixAll);

function transformValues(style) {
  return Object.keys(style).reduce(function (newStyle, key) {
    var value = style[key];

    if (Array.isArray(value)) {
      value = value.join(';' + key + ':');
    } else if (value && _typeof(value) === 'object' && typeof value.toString === 'function') {
      value = value.toString();
    }

    newStyle[key] = value;
    return newStyle;
  }, {});
} // Flatten prefixed values that are arrays to strings.
//
// We get prefixed styles back in the form of:
// - `display: "flex"` OR
// - `display: "-webkit-flex"` OR
// - `display: [/* ... */, "-webkit-flex", "flex"]
//
// The last form is problematic for eventual use in the browser and server
// render. More confusingly, we have to do **different** things on the
// browser and server (noted inline below).
//
// https://github.com/FormidableLabs/radium/issues/958


function flattenStyleValues(style) {
  return Object.keys(style).reduce(function (newStyle, key) {
    var val = style[key];

    if (Array.isArray(val)) {
      if (exenv__WEBPACK_IMPORTED_MODULE_2___default.a.canUseDOM) {
        // For the **browser**, when faced with multiple values, we just take
        // the **last** one, which is the original passed in value before
        // prefixing. This _should_ work, because `inline-style-prefixer`
        // we're just passing through what would happen without ISP.
        val = val[val.length - 1].toString();
      } else {
        // For the **server**, we just concatenate things together and convert
        // the style object values into a hacked-up string of like `display:
        // "-webkit-flex;display:flex"` that will SSR render correctly to like
        // `"display:-webkit-flex;display:flex"` but would otherwise be
        // totally invalid values.
        // We convert keys to dash-case only for the serialize values and
        // leave the real key camel-cased so it's as expected to React and
        // other parts of the processing chain.
        val = val.join(";".concat(Object(_camel_case_props_to_dash_case__WEBPACK_IMPORTED_MODULE_5__["camelCaseToDashCase"])(key), ":"));
      }
    }

    newStyle[key] = val;
    return newStyle;
  }, {});
}

var _hasWarnedAboutUserAgent = false;

var _lastUserAgent;

var _cachedPrefixer;

function getPrefixer(userAgent) {
  var actualUserAgent = userAgent || global && global.navigator && global.navigator.userAgent;

  if (true) {
    if (!actualUserAgent && !_hasWarnedAboutUserAgent) {
      /* eslint-disable no-console */
      console.warn('Radium: userAgent should be supplied for server-side rendering. See ' + 'https://github.com/FormidableLabs/radium/tree/master/docs/api#radium ' + 'for more information.');
      /* eslint-enable no-console */

      _hasWarnedAboutUserAgent = true;
    }
  }

  if ( false || !_cachedPrefixer || actualUserAgent !== _lastUserAgent) {
    if (actualUserAgent === 'all') {
      _cachedPrefixer = {
        prefix: prefixAll,
        prefixedKeyframes: 'keyframes'
      };
    } else {
      _cachedPrefixer = new InlineStylePrefixer({
        userAgent: actualUserAgent
      });
    }

    _lastUserAgent = actualUserAgent;
  }

  return _cachedPrefixer;
}

function getPrefixedKeyframes(userAgent) {
  return getPrefixer(userAgent).prefixedKeyframes || 'keyframes';
} // Returns a new style object with vendor prefixes added to property names and
// values.

function getPrefixedStyle(style, userAgent) {
  var styleWithFallbacks = transformValues(style);
  var prefixer = getPrefixer(userAgent);
  var prefixedStyle = prefixer.prefix(styleWithFallbacks);
  var flattenedStyle = flattenStyleValues(prefixedStyle);
  return flattenedStyle;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/radium/es/resolve-styles.js":
/*!**************************************************!*\
  !*** ./node_modules/radium/es/resolve-styles.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _append_important_to_each_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./append-important-to-each-value */ "./node_modules/radium/es/append-important-to-each-value.js");
/* harmony import */ var _css_rule_set_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-rule-set-to-string */ "./node_modules/radium/es/css-rule-set-to-string.js");
/* harmony import */ var _get_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-state */ "./node_modules/radium/es/get-state.js");
/* harmony import */ var _get_state_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-state-key */ "./node_modules/radium/es/get-state-key.js");
/* harmony import */ var _clean_state_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clean-state-key */ "./node_modules/radium/es/clean-state-key.js");
/* harmony import */ var _get_radium_style_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-radium-style-state */ "./node_modules/radium/es/get-radium-style-state.js");
/* harmony import */ var _hash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hash */ "./node_modules/radium/es/hash.js");
/* harmony import */ var _merge_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./merge-styles */ "./node_modules/radium/es/merge-styles.js");
/* harmony import */ var _plugins___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugins/ */ "./node_modules/radium/es/plugins/index.js");
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(exenv__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _style_keeper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style-keeper */ "./node_modules/radium/es/style-keeper.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }













var DEFAULT_CONFIG = {
  plugins: [_plugins___WEBPACK_IMPORTED_MODULE_8__["default"].mergeStyleArray, _plugins___WEBPACK_IMPORTED_MODULE_8__["default"].checkProps, _plugins___WEBPACK_IMPORTED_MODULE_8__["default"].resolveMediaQueries, _plugins___WEBPACK_IMPORTED_MODULE_8__["default"].resolveInteractionStyles, _plugins___WEBPACK_IMPORTED_MODULE_8__["default"].keyframes, _plugins___WEBPACK_IMPORTED_MODULE_8__["default"].visited, _plugins___WEBPACK_IMPORTED_MODULE_8__["default"].removeNestedStyles, _plugins___WEBPACK_IMPORTED_MODULE_8__["default"].prefix, _plugins___WEBPACK_IMPORTED_MODULE_8__["default"].checkProps]
}; // Gross

var globalState = {}; // Only for use by tests

var __isTestModeEnabled = false;
// Declare early for recursive helpers.
var _resolveStyles5 = null;

var _shouldResolveStyles = function _shouldResolveStyles(component) {
  return component.type && !component.type._isRadiumEnhanced;
};

var _resolveChildren = function _resolveChildren(_ref) {
  var children = _ref.children,
      component = _ref.component,
      config = _ref.config,
      existingKeyMap = _ref.existingKeyMap,
      extraStateKeyMap = _ref.extraStateKeyMap;

  if (!children) {
    return children;
  }

  var childrenType = _typeof(children);

  if (childrenType === 'string' || childrenType === 'number') {
    // Don't do anything with a single primitive child
    return children;
  }

  if (childrenType === 'function') {
    // Wrap the function, resolving styles on the result
    return function () {
      var result = children.apply(this, arguments);

      if (react__WEBPACK_IMPORTED_MODULE_10___default.a.isValidElement(result)) {
        var _key = Object(_get_state_key__WEBPACK_IMPORTED_MODULE_3__["default"])(result);

        delete extraStateKeyMap[_key];

        var _resolveStyles = _resolveStyles5(component, result, config, existingKeyMap, true, extraStateKeyMap),
            element = _resolveStyles.element;

        return element;
      }

      return result;
    };
  }

  if (react__WEBPACK_IMPORTED_MODULE_10___default.a.Children.count(children) === 1 && children.type) {
    // If a React Element is an only child, don't wrap it in an array for
    // React.Children.map() for React.Children.only() compatibility.
    var onlyChild = react__WEBPACK_IMPORTED_MODULE_10___default.a.Children.only(children);

    var _key2 = Object(_get_state_key__WEBPACK_IMPORTED_MODULE_3__["default"])(onlyChild);

    delete extraStateKeyMap[_key2];

    var _resolveStyles2 = _resolveStyles5(component, onlyChild, config, existingKeyMap, true, extraStateKeyMap),
        element = _resolveStyles2.element;

    return element;
  }

  return react__WEBPACK_IMPORTED_MODULE_10___default.a.Children.map(children, function (child) {
    if (react__WEBPACK_IMPORTED_MODULE_10___default.a.isValidElement(child)) {
      var _key3 = Object(_get_state_key__WEBPACK_IMPORTED_MODULE_3__["default"])(child);

      delete extraStateKeyMap[_key3];

      var _resolveStyles3 = _resolveStyles5(component, child, config, existingKeyMap, true, extraStateKeyMap),
          _element = _resolveStyles3.element;

      return _element;
    }

    return child;
  });
}; // Recurse over props, just like children


var _resolveProps = function _resolveProps(_ref2) {
  var component = _ref2.component,
      config = _ref2.config,
      existingKeyMap = _ref2.existingKeyMap,
      props = _ref2.props,
      extraStateKeyMap = _ref2.extraStateKeyMap;
  var newProps = props;
  Object.keys(props).forEach(function (prop) {
    // We already recurse over children above
    if (prop === 'children') {
      return;
    }

    var propValue = props[prop];

    if (react__WEBPACK_IMPORTED_MODULE_10___default.a.isValidElement(propValue)) {
      var _key4 = Object(_get_state_key__WEBPACK_IMPORTED_MODULE_3__["default"])(propValue);

      delete extraStateKeyMap[_key4];
      newProps = _objectSpread({}, newProps);

      var _resolveStyles4 = _resolveStyles5(component, propValue, config, existingKeyMap, true, extraStateKeyMap),
          element = _resolveStyles4.element;

      newProps[prop] = element;
    }
  });
  return newProps;
};

var _buildGetKey = function _buildGetKey(_ref3) {
  var componentName = _ref3.componentName,
      existingKeyMap = _ref3.existingKeyMap,
      renderedElement = _ref3.renderedElement;
  // We need a unique key to correlate state changes due to user interaction
  // with the rendered element, so we know to apply the proper interactive
  // styles.
  var originalKey = Object(_get_state_key__WEBPACK_IMPORTED_MODULE_3__["default"])(renderedElement);
  var key = Object(_clean_state_key__WEBPACK_IMPORTED_MODULE_4__["default"])(originalKey);
  var alreadyGotKey = false;

  var getKey = function getKey() {
    if (alreadyGotKey) {
      return key;
    }

    alreadyGotKey = true;

    if (existingKeyMap[key]) {
      var elementName;

      if (typeof renderedElement.type === 'string') {
        elementName = renderedElement.type;
      } else if (renderedElement.type.constructor) {
        elementName = renderedElement.type.constructor.displayName || renderedElement.type.constructor.name;
      }

      throw new Error('Radium requires each element with interactive styles to have a unique ' + 'key, set using either the ref or key prop. ' + (originalKey ? 'Key "' + originalKey + '" is a duplicate.' : 'Multiple elements have no key specified.') + ' ' + 'Component: "' + componentName + '". ' + (elementName ? 'Element: "' + elementName + '".' : ''));
    }

    existingKeyMap[key] = true;
    return key;
  };

  return getKey;
};

var _setStyleState = function _setStyleState(component, key, stateKey, value) {
  if (!component._radiumIsMounted) {
    return;
  }

  var existing = Object(_get_radium_style_state__WEBPACK_IMPORTED_MODULE_5__["default"])(component);
  var state = {
    _radiumStyleState: _objectSpread({}, existing)
  };
  state._radiumStyleState[key] = _objectSpread({}, state._radiumStyleState[key]);
  state._radiumStyleState[key][stateKey] = value;
  component._lastRadiumState = state._radiumStyleState;
  component.setState(state);
};

var _runPlugins = function _runPlugins(_ref4) {
  var component = _ref4.component,
      config = _ref4.config,
      existingKeyMap = _ref4.existingKeyMap,
      props = _ref4.props,
      renderedElement = _ref4.renderedElement;

  // Don't run plugins if renderedElement is not a simple ReactDOMElement or has
  // no style.
  if (!react__WEBPACK_IMPORTED_MODULE_10___default.a.isValidElement(renderedElement) || typeof renderedElement.type !== 'string' || !props.style) {
    return props;
  }

  var newProps = props;
  var plugins = config.plugins || DEFAULT_CONFIG.plugins;
  var componentName = component.constructor.displayName || component.constructor.name;

  var getKey = _buildGetKey({
    renderedElement: renderedElement,
    existingKeyMap: existingKeyMap,
    componentName: componentName
  });

  var getComponentField = function getComponentField(key) {
    return component[key];
  };

  var getGlobalState = function getGlobalState(key) {
    return globalState[key];
  };

  var componentGetState = function componentGetState(stateKey, elementKey) {
    return Object(_get_state__WEBPACK_IMPORTED_MODULE_2__["default"])(component.state, elementKey || getKey(), stateKey);
  };

  var setState = function setState(stateKey, value, elementKey) {
    return _setStyleState(component, elementKey || getKey(), stateKey, value);
  };

  var addCSS = function addCSS(css) {
    var styleKeeper = component._radiumStyleKeeper;

    if (!styleKeeper) {
      if (__isTestModeEnabled) {
        return {
          remove: function remove() {}
        };
      }

      throw new Error('To use plugins requiring `addCSS` (e.g. keyframes, media queries), ' + 'please wrap your application in the StyleRoot component. Component ' + 'name: `' + componentName + '`.');
    }

    return styleKeeper.addCSS(css);
  };

  var newStyle = props.style;
  plugins.forEach(function (plugin) {
    var result = plugin({
      ExecutionEnvironment: exenv__WEBPACK_IMPORTED_MODULE_9___default.a,
      addCSS: addCSS,
      appendImportantToEachValue: _append_important_to_each_value__WEBPACK_IMPORTED_MODULE_0__["default"],
      componentName: componentName,
      config: config,
      cssRuleSetToString: _css_rule_set_to_string__WEBPACK_IMPORTED_MODULE_1__["default"],
      getComponentField: getComponentField,
      getGlobalState: getGlobalState,
      getState: componentGetState,
      hash: _hash__WEBPACK_IMPORTED_MODULE_6__["default"],
      mergeStyles: _merge_styles__WEBPACK_IMPORTED_MODULE_7__["mergeStyles"],
      props: newProps,
      setState: setState,
      isNestedStyle: _merge_styles__WEBPACK_IMPORTED_MODULE_7__["isNestedStyle"],
      style: newStyle
    }) || {};
    newStyle = result.style || newStyle;
    newProps = result.props && Object.keys(result.props).length ? _objectSpread({}, newProps, result.props) : newProps;
    var newComponentFields = result.componentFields || {};
    Object.keys(newComponentFields).forEach(function (fieldName) {
      component[fieldName] = newComponentFields[fieldName];
    });
    var newGlobalState = result.globalState || {};
    Object.keys(newGlobalState).forEach(function (key) {
      globalState[key] = newGlobalState[key];
    });
  });

  if (newStyle !== props.style) {
    newProps = _objectSpread({}, newProps, {
      style: newStyle
    });
  }

  return newProps;
}; // Wrapper around React.cloneElement. To avoid processing the same element
// twice, whenever we clone an element add a special prop to make sure we don't
// process this element again.


var _cloneElement = function _cloneElement(renderedElement, newProps, newChildren) {
  // Only add flag if this is a normal DOM element
  if (typeof renderedElement.type === 'string') {
    newProps = _objectSpread({}, newProps, {
      'data-radium': true
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_10___default.a.cloneElement(renderedElement, newProps, newChildren);
}; //
// The nucleus of Radium. resolveStyles is called on the rendered elements
// before they are returned in render. It iterates over the elements and
// children, rewriting props to add event handlers required to capture user
// interactions (e.g. mouse over). It also replaces the style prop because it
// adds in the various interaction styles (e.g. :hover).
//

/* eslint-disable max-params */


_resolveStyles5 = function resolveStyles(component, renderedElement) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_CONFIG;
  var existingKeyMap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var shouldCheckBeforeResolve = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var extraStateKeyMap = arguments.length > 5 ? arguments[5] : undefined;

  // The extraStateKeyMap is for determining which keys should be erased from
  // the state (i.e. which child components are unmounted and should no longer
  // have a style state).
  if (!extraStateKeyMap) {
    var state = Object(_get_radium_style_state__WEBPACK_IMPORTED_MODULE_5__["default"])(component);
    extraStateKeyMap = Object.keys(state).reduce(function (acc, key) {
      // 'main' is the auto-generated key when there is only one element with
      // interactive styles and if a custom key is not assigned. Because of
      // this, it is impossible to know which child is 'main', so we won't
      // count this key when generating our extraStateKeyMap.
      if (key !== 'main') {
        acc[key] = true;
      }

      return acc;
    }, {});
  }

  if (Array.isArray(renderedElement) && !renderedElement.props) {
    var elements = renderedElement.map(function (element) {
      // element is in-use, so remove from the extraStateKeyMap
      if (extraStateKeyMap) {
        var _key5 = Object(_get_state_key__WEBPACK_IMPORTED_MODULE_3__["default"])(element);

        delete extraStateKeyMap[_key5];
      } // this element is an array of elements,
      // so return an array of elements with resolved styles


      return _resolveStyles5(component, element, config, existingKeyMap, shouldCheckBeforeResolve, extraStateKeyMap).element;
    });
    return {
      extraStateKeyMap: extraStateKeyMap,
      element: elements
    };
  } // ReactElement


  if (!renderedElement || // Bail if we've already processed this element. This ensures that only the
  // owner of an element processes that element, since the owner's render
  // function will be called first (which will always be the case, since you
  // can't know what else to render until you render the parent component).
  renderedElement.props && renderedElement.props['data-radium'] || // Bail if this element is a radium enhanced element, because if it is,
  // then it will take care of resolving its own styles.
  shouldCheckBeforeResolve && !_shouldResolveStyles(renderedElement)) {
    return {
      extraStateKeyMap: extraStateKeyMap,
      element: renderedElement
    };
  }

  var children = renderedElement.props.children;

  var newChildren = _resolveChildren({
    children: children,
    component: component,
    config: config,
    existingKeyMap: existingKeyMap,
    extraStateKeyMap: extraStateKeyMap
  });

  var newProps = _resolveProps({
    component: component,
    config: config,
    existingKeyMap: existingKeyMap,
    extraStateKeyMap: extraStateKeyMap,
    props: renderedElement.props
  });

  newProps = _runPlugins({
    component: component,
    config: config,
    existingKeyMap: existingKeyMap,
    props: newProps,
    renderedElement: renderedElement
  }); // If nothing changed, don't bother cloning the element. Might be a bit
  // wasteful, as we add the sentinel to stop double-processing when we clone.
  // Assume benign double-processing is better than unneeded cloning.

  if (newChildren === children && newProps === renderedElement.props) {
    return {
      extraStateKeyMap: extraStateKeyMap,
      element: renderedElement
    };
  }

  var element = _cloneElement(renderedElement, newProps !== renderedElement.props ? newProps : {}, newChildren);

  return {
    extraStateKeyMap: extraStateKeyMap,
    element: element
  };
};
/* eslint-enable max-params */
// Only for use by tests


if (true) {
  _resolveStyles5.__clearStateForTests = function () {
    globalState = {};
  };

  _resolveStyles5.__setTestMode = function (isEnabled) {
    __isTestModeEnabled = isEnabled;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (_resolveStyles5);

/***/ }),

/***/ "./node_modules/radium/es/style-keeper.js":
/*!************************************************!*\
  !*** ./node_modules/radium/es/style-keeper.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StyleKeeper; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StyleKeeper =
/*#__PURE__*/
function () {
  function StyleKeeper(userAgent) {
    _classCallCheck(this, StyleKeeper);

    this._userAgent = void 0;
    this._listeners = void 0;
    this._cssSet = void 0;
    this._userAgent = userAgent;
    this._listeners = [];
    this._cssSet = {};
  }

  _createClass(StyleKeeper, [{
    key: "subscribe",
    value: function subscribe(listener) {
      var _this = this;

      if (this._listeners.indexOf(listener) === -1) {
        this._listeners.push(listener);
      }

      return {
        // Must be fat arrow to capture `this`
        remove: function remove() {
          var listenerIndex = _this._listeners.indexOf(listener);

          if (listenerIndex > -1) {
            _this._listeners.splice(listenerIndex, 1);
          }
        }
      };
    }
  }, {
    key: "addCSS",
    value: function addCSS(css) {
      var _this2 = this;

      if (!this._cssSet[css]) {
        this._cssSet[css] = true;

        this._emitChange();
      }

      return {
        // Must be fat arrow to capture `this`
        remove: function remove() {
          delete _this2._cssSet[css];

          _this2._emitChange();
        }
      };
    }
  }, {
    key: "getCSS",
    value: function getCSS() {
      return Object.keys(this._cssSet).join('\n');
    }
  }, {
    key: "_emitChange",
    value: function _emitChange() {
      this._listeners.forEach(function (listener) {
        return listener();
      });
    }
  }]);

  return StyleKeeper;
}();



/***/ }),

/***/ "./node_modules/radium/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/radium/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};

var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

function getStatics(component) {
    if (ReactIs.isMemo(component)) {
        return MEMO_STATICS;
    }
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1B1YmxpYy9MZWFybk1vcmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ib3dzZXIvc3JjL2Jvd3Nlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Nzcy1pbi1qcy11dGlscy9saWIvaHlwaGVuYXRlUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jc3MtaW4tanMtdXRpbHMvbGliL2lzUHJlZml4ZWRWYWx1ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2V4ZW52L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2R5bmFtaWMvY3JlYXRlUHJlZml4ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvZHluYW1pYy9wbHVnaW5zL2NhbGMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvZHluYW1pYy9wbHVnaW5zL2Nyb3NzRmFkZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9keW5hbWljL3BsdWdpbnMvY3Vyc29yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2R5bmFtaWMvcGx1Z2lucy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvZHluYW1pYy9wbHVnaW5zL2ZsZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvZHluYW1pYy9wbHVnaW5zL2ZsZXhib3hJRS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9keW5hbWljL3BsdWdpbnMvZmxleGJveE9sZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9keW5hbWljL3BsdWdpbnMvZ3JhZGllbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvZHluYW1pYy9wbHVnaW5zL2ltYWdlU2V0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2R5bmFtaWMvcGx1Z2lucy9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9keW5hbWljL3BsdWdpbnMvc2l6aW5nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2R5bmFtaWMvcGx1Z2lucy90cmFuc2l0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9jcmVhdGVQcmVmaXhlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9jYWxjLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL2Nyb3NzRmFkZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9jdXJzb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvZmlsdGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL2ZsZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvZmxleGJveElFLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL2ZsZXhib3hPbGQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvZ3JhZGllbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvaW1hZ2VTZXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvc2l6aW5nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL3RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvdXRpbHMvYWRkTmV3VmFsdWVzT25seS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci91dGlscy9jYXBpdGFsaXplU3RyaW5nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3V0aWxzL2dldEJyb3dzZXJJbmZvcm1hdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci91dGlscy9nZXRQcmVmaXhlZEtleWZyYW1lcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci91dGlscy9nZXRQcmVmaXhlZFZhbHVlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3V0aWxzL2lzT2JqZWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3V0aWxzL3ByZWZpeFByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3V0aWxzL3ByZWZpeFZhbHVlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL2FwcGVuZC1pbXBvcnRhbnQtdG8tZWFjaC12YWx1ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JhZGl1bS9lcy9hcHBlbmQtcHgtaWYtbmVlZGVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL2NhbWVsLWNhc2UtcHJvcHMtdG8tZGFzaC1jYXNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL2NsZWFuLXN0YXRlLWtleS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JhZGl1bS9lcy9jb21wb25lbnRzL3N0eWxlLXJvb3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYWRpdW0vZXMvY29tcG9uZW50cy9zdHlsZS1zaGVldC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JhZGl1bS9lcy9jb21wb25lbnRzL3N0eWxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYWRpdW0vZXMvY3NzLXJ1bGUtc2V0LXRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JhZGl1bS9lcy9lbmhhbmNlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JhZGl1bS9lcy9nZXQtcmFkaXVtLXN0eWxlLXN0YXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL2dldC1zdGF0ZS1rZXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYWRpdW0vZXMvZ2V0LXN0YXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL2hhc2guanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYWRpdW0vZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYWRpdW0vZXMva2V5ZnJhbWVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL21hcC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYWRpdW0vZXMvbWVyZ2Utc3R5bGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL3BsdWdpbnMvY2hlY2stcHJvcHMtcGx1Z2luLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL3BsdWdpbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYWRpdW0vZXMvcGx1Z2lucy9rZXlmcmFtZXMtcGx1Z2luLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL3BsdWdpbnMvbWVyZ2Utc3R5bGUtYXJyYXktcGx1Z2luLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL3BsdWdpbnMvbW91c2UtdXAtbGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYWRpdW0vZXMvcGx1Z2lucy9wcmVmaXgtcGx1Z2luLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL3BsdWdpbnMvcmVtb3ZlLW5lc3RlZC1zdHlsZXMtcGx1Z2luLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL3BsdWdpbnMvcmVzb2x2ZS1pbnRlcmFjdGlvbi1zdHlsZXMtcGx1Z2luLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL3BsdWdpbnMvcmVzb2x2ZS1tZWRpYS1xdWVyaWVzLXBsdWdpbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JhZGl1bS9lcy9wbHVnaW5zL3Zpc2l0ZWQtcGx1Z2luLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL3ByZWZpeC1kYXRhL2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYWRpdW0vZXMvcHJlZml4LWRhdGEvc3RhdGljLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL3ByZWZpeGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL3Jlc29sdmUtc3R5bGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL3N0eWxlLWtlZXBlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JhZGl1bS9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvYnVpbGRpbi9hbWQtZGVmaW5lLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJidXR0b24iLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsImxldHRlclNwYWNpbmciLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsInRleHRBbGlnbiIsImJvdW5jZSIsImFuaW1hdGlvbiIsImFuaW1hdGlvbk5hbWUiLCJSYWRpdW0iLCJrZXlmcmFtZXMiLCJMZWFybk1vcmUiLCJwcm9wcyIsImNsYXNzZXMiLCJoYW5kbGVBbmNob3IiLCJ3aW5kb3ciLCJ1bmRlZmluZWQiLCJzY3JvbGxUbyIsInRvcCIsInNjcm9sbFkiLCJiZWhhdmlvciIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDMUJDLFFBQU0sRUFBRTtBQUNQQyxjQUFVLEVBQUUsUUFETDtBQUVQQyxZQUFRLEVBQUUsUUFGSDtBQUdQQyxjQUFVLEVBQUUsR0FITDtBQUlQQyxjQUFVLEVBQUUsUUFKTDtBQUtQQyxpQkFBYSxFQUFFLFNBTFI7QUFNUEMsU0FBSyxFQUFFLFNBTkE7QUFPUEMsbUJBQWUsRUFBRSxhQVBWO0FBUVBDLGFBQVMsRUFBRSxRQVJKO0FBU1AsZUFBVTtBQUNORixXQUFLLEVBQUM7QUFEQTtBQVRILEdBRGtCO0FBYzFCRyxRQUFNLEVBQUU7QUFDUEMsYUFBUyxFQUFFLE1BREo7QUFFUEMsaUJBQWEsRUFBRUMsOENBQU0sQ0FBQ0MsU0FBUCxDQUFpQkosdURBQWpCLEVBQXlCLFFBQXpCO0FBRlI7QUFka0IsQ0FBRCxDQUE1QjtBQW9CTyxJQUFNSyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFFaEMsTUFBTUMsT0FBTyxHQUFHbEIsU0FBUyxFQUF6Qjs7QUFFQSxNQUFNbUIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QixRQUFHQyxNQUFNLEtBQUtDLFNBQWQsRUFBeUI7QUFDckJELFlBQU0sQ0FBQ0UsUUFBUCxDQUFnQjtBQUFDQyxXQUFHLEVBQUVDLE9BQU47QUFBZUMsZ0JBQVEsRUFBRTtBQUF6QixPQUFoQjtBQUNIO0FBQ0osR0FKRDs7QUFKZ0MsTUFVeEJELE9BVndCLEdBVVpQLEtBVlksQ0FVeEJPLE9BVndCO0FBWWhDLFNBQ0ksTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJLE1BQUMsZ0VBQUQ7QUFDSSxhQUFTLEVBQUVOLE9BQU8sQ0FBQ2hCLE1BRHZCO0FBRUksV0FBTyxFQUFFaUIsWUFGYjtBQUdJLGlCQUFhLEVBQUUsSUFIbkI7QUFJSSxTQUFLLEVBQUU7QUFBQ1YscUJBQWUsRUFBRTtBQUFsQixLQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNSSxNQUFDLDhEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLGFBQVMsRUFBRVMsT0FBTyxDQUFDUCxNQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLENBREosRUFJSSxNQUFDLDhEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsU0FBSyxFQUFFO0FBQUNlLGVBQVMsRUFBQztBQUFYLEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUpKLENBTkosQ0FGSixDQURKO0FBcUJILENBakNNOztHQUFNVixTO1VBRU9oQixTOzs7S0FGUGdCLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxLQUE0QjtBQUNsQyxXQUFXLElBQXlDLEVBQUUsOEZBQU07QUFDNUQsT0FBTyxFQUF5QjtBQUNoQyxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE1BQU07QUFDcEIsY0FBYyxTQUFTO0FBQ3ZCLGNBQWM7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Q0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxHQUFHLElBQUk7QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE4RDtBQUNVO0FBQ047QUFDQTtBQUNKO0FBQ1U7QUFDRTtBQUNKO0FBQ0E7QUFDQTtBQUNKO0FBQ1E7QUFDM0Q7QUFDZixZQUFZLGlGQUFJLEVBQUUsc0ZBQVMsRUFBRSxtRkFBTSxFQUFFLG1GQUFNLEVBQUUsaUZBQUksRUFBRSxzRkFBUyxFQUFFLHVGQUFVLEVBQUUscUZBQVEsRUFBRSxxRkFBUSxFQUFFLHFGQUFRLEVBQUUsb0ZBQU0sRUFBRSx3RkFBVTtBQUMxSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHVCQUF1QixpQkFBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUN0R0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1dvcmsvQWdvZGEtZGVzaWduLmI4MDM0NzcxZDNjYTA2YjliZWQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgQXJyb3dEb3dud2FyZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93RG93bndhcmQnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHsgYm91bmNlIH0gZnJvbSAncmVhY3QtYW5pbWF0aW9ucyc7XHJcbmltcG9ydCBSYWRpdW0sIHtTdHlsZVJvb3R9IGZyb20gJ3JhZGl1bSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgYnV0dG9uOiB7XHJcbiAgICBmb250RmFtaWx5OiAnUm9ib3RvJyxcclxuICAgIGZvbnRTaXplOiAnMS4xcmVtJyxcclxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgIGxpbmVIZWlnaHQ6ICcxLjFyZW0nLFxyXG4gICAgbGV0dGVyU3BhY2luZzogJzAuMDVyZW0nLFxyXG4gICAgY29sb3I6ICcjOEY4RjhGJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgY29sb3I6JyMxRjFGMUYnICAgICAgICBcclxuICAgIH1cclxuICAgfSxcclxuICAgYm91bmNlOiB7XHJcbiAgICBhbmltYXRpb246ICd4IDFzJyxcclxuICAgIGFuaW1hdGlvbk5hbWU6IFJhZGl1bS5rZXlmcmFtZXMoYm91bmNlLCAnYm91bmNlJylcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IExlYXJuTW9yZSA9IChwcm9wcykgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQW5jaG9yID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHdpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7dG9wOiBzY3JvbGxZLCBiZWhhdmlvcjogJ3Ntb290aCd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IHNjcm9sbFkgfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFuY2hvcn1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuYm91bmNlfT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkxlYXJuIE1vcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e21hcmdpblRvcDonMC41cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dEb3dud2FyZEljb24vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD4gXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcbiIsIi8qIVxuICogQm93c2VyIC0gYSBicm93c2VyIGRldGVjdG9yXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZGVkL2Jvd3NlclxuICogTUlUIExpY2Vuc2UgfCAoYykgRHVzdGluIERpYXogMjAxNVxuICovXG5cbiFmdW5jdGlvbiAocm9vdCwgbmFtZSwgZGVmaW5pdGlvbikge1xuICBpZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKClcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIGRlZmluZShuYW1lLCBkZWZpbml0aW9uKVxuICBlbHNlIHJvb3RbbmFtZV0gPSBkZWZpbml0aW9uKClcbn0odGhpcywgJ2Jvd3NlcicsIGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAgKiBTZWUgdXNlcmFnZW50cy5qcyBmb3IgZXhhbXBsZXMgb2YgbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgICovXG5cbiAgdmFyIHQgPSB0cnVlXG5cbiAgZnVuY3Rpb24gZGV0ZWN0KHVhKSB7XG5cbiAgICBmdW5jdGlvbiBnZXRGaXJzdE1hdGNoKHJlZ2V4KSB7XG4gICAgICB2YXIgbWF0Y2ggPSB1YS5tYXRjaChyZWdleCk7XG4gICAgICByZXR1cm4gKG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+IDEgJiYgbWF0Y2hbMV0pIHx8ICcnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNlY29uZE1hdGNoKHJlZ2V4KSB7XG4gICAgICB2YXIgbWF0Y2ggPSB1YS5tYXRjaChyZWdleCk7XG4gICAgICByZXR1cm4gKG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+IDEgJiYgbWF0Y2hbMl0pIHx8ICcnO1xuICAgIH1cblxuICAgIHZhciBpb3NkZXZpY2UgPSBnZXRGaXJzdE1hdGNoKC8oaXBvZHxpcGhvbmV8aXBhZCkvaSkudG9Mb3dlckNhc2UoKVxuICAgICAgLCBsaWtlQW5kcm9pZCA9IC9saWtlIGFuZHJvaWQvaS50ZXN0KHVhKVxuICAgICAgLCBhbmRyb2lkID0gIWxpa2VBbmRyb2lkICYmIC9hbmRyb2lkL2kudGVzdCh1YSlcbiAgICAgICwgbmV4dXNNb2JpbGUgPSAvbmV4dXNcXHMqWzAtNl1cXHMqL2kudGVzdCh1YSlcbiAgICAgICwgbmV4dXNUYWJsZXQgPSAhbmV4dXNNb2JpbGUgJiYgL25leHVzXFxzKlswLTldKy9pLnRlc3QodWEpXG4gICAgICAsIGNocm9tZW9zID0gL0NyT1MvLnRlc3QodWEpXG4gICAgICAsIHNpbGsgPSAvc2lsay9pLnRlc3QodWEpXG4gICAgICAsIHNhaWxmaXNoID0gL3NhaWxmaXNoL2kudGVzdCh1YSlcbiAgICAgICwgdGl6ZW4gPSAvdGl6ZW4vaS50ZXN0KHVhKVxuICAgICAgLCB3ZWJvcyA9IC8od2VifGhwdykob3wwKXMvaS50ZXN0KHVhKVxuICAgICAgLCB3aW5kb3dzcGhvbmUgPSAvd2luZG93cyBwaG9uZS9pLnRlc3QodWEpXG4gICAgICAsIHNhbXN1bmdCcm93c2VyID0gL1NhbXN1bmdCcm93c2VyL2kudGVzdCh1YSlcbiAgICAgICwgd2luZG93cyA9ICF3aW5kb3dzcGhvbmUgJiYgL3dpbmRvd3MvaS50ZXN0KHVhKVxuICAgICAgLCBtYWMgPSAhaW9zZGV2aWNlICYmICFzaWxrICYmIC9tYWNpbnRvc2gvaS50ZXN0KHVhKVxuICAgICAgLCBsaW51eCA9ICFhbmRyb2lkICYmICFzYWlsZmlzaCAmJiAhdGl6ZW4gJiYgIXdlYm9zICYmIC9saW51eC9pLnRlc3QodWEpXG4gICAgICAsIGVkZ2VWZXJzaW9uID0gZ2V0U2Vjb25kTWF0Y2goL2VkZyhbZWFdfGlvcylcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICAsIHZlcnNpb25JZGVudGlmaWVyID0gZ2V0Rmlyc3RNYXRjaCgvdmVyc2lvblxcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgICwgdGFibGV0ID0gL3RhYmxldC9pLnRlc3QodWEpICYmICEvdGFibGV0IHBjL2kudGVzdCh1YSlcbiAgICAgICwgbW9iaWxlID0gIXRhYmxldCAmJiAvW14tXW1vYmkvaS50ZXN0KHVhKVxuICAgICAgLCB4Ym94ID0gL3hib3gvaS50ZXN0KHVhKVxuICAgICAgLCByZXN1bHRcblxuICAgIGlmICgvb3BlcmEvaS50ZXN0KHVhKSkge1xuICAgICAgLy8gIGFuIG9sZCBPcGVyYVxuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnT3BlcmEnXG4gICAgICAsIG9wZXJhOiB0XG4gICAgICAsIHZlcnNpb246IHZlcnNpb25JZGVudGlmaWVyIHx8IGdldEZpcnN0TWF0Y2goLyg/Om9wZXJhfG9wcnxvcGlvcylbXFxzXFwvXShcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKC9vcHJcXC98b3Bpb3MvaS50ZXN0KHVhKSkge1xuICAgICAgLy8gYSBuZXcgT3BlcmFcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ09wZXJhJ1xuICAgICAgICAsIG9wZXJhOiB0XG4gICAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvKD86b3ByfG9waW9zKVtcXHNcXC9dKFxcZCsoXFwuXFxkKyk/KS9pKSB8fCB2ZXJzaW9uSWRlbnRpZmllclxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvU2Ftc3VuZ0Jyb3dzZXIvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnU2Ftc3VuZyBJbnRlcm5ldCBmb3IgQW5kcm9pZCdcbiAgICAgICAgLCBzYW1zdW5nQnJvd3NlcjogdFxuICAgICAgICAsIHZlcnNpb246IHZlcnNpb25JZGVudGlmaWVyIHx8IGdldEZpcnN0TWF0Y2goLyg/OlNhbXN1bmdCcm93c2VyKVtcXHNcXC9dKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvV2hhbGUvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnTkFWRVIgV2hhbGUgYnJvd3NlcidcbiAgICAgICAgLCB3aGFsZTogdFxuICAgICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/OndoYWxlKVtcXHNcXC9dKFxcZCsoPzpcXC5cXGQrKSspL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC9NWkJyb3dzZXIvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnTVogQnJvd3NlcidcbiAgICAgICAgLCBtemJyb3dzZXI6IHRcbiAgICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC8oPzpNWkJyb3dzZXIpW1xcc1xcL10oXFxkKyg/OlxcLlxcZCspKykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL2NvYXN0L2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ09wZXJhIENvYXN0J1xuICAgICAgICAsIGNvYXN0OiB0XG4gICAgICAgICwgdmVyc2lvbjogdmVyc2lvbklkZW50aWZpZXIgfHwgZ2V0Rmlyc3RNYXRjaCgvKD86Y29hc3QpW1xcc1xcL10oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC9mb2N1cy9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdGb2N1cydcbiAgICAgICAgLCBmb2N1czogdFxuICAgICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/OmZvY3VzKVtcXHNcXC9dKFxcZCsoPzpcXC5cXGQrKSspL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC95YWJyb3dzZXIvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnWWFuZGV4IEJyb3dzZXInXG4gICAgICAsIHlhbmRleGJyb3dzZXI6IHRcbiAgICAgICwgdmVyc2lvbjogdmVyc2lvbklkZW50aWZpZXIgfHwgZ2V0Rmlyc3RNYXRjaCgvKD86eWFicm93c2VyKVtcXHNcXC9dKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvdWNicm93c2VyL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBuYW1lOiAnVUMgQnJvd3NlcidcbiAgICAgICAgLCB1Y2Jyb3dzZXI6IHRcbiAgICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC8oPzp1Y2Jyb3dzZXIpW1xcc1xcL10oXFxkKyg/OlxcLlxcZCspKykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL214aW9zL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ01heHRob24nXG4gICAgICAgICwgbWF4dGhvbjogdFxuICAgICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/Om14aW9zKVtcXHNcXC9dKFxcZCsoPzpcXC5cXGQrKSspL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC9lcGlwaGFueS9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdFcGlwaGFueSdcbiAgICAgICAgLCBlcGlwaGFueTogdFxuICAgICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/OmVwaXBoYW55KVtcXHNcXC9dKFxcZCsoPzpcXC5cXGQrKSspL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC9wdWZmaW4vaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnUHVmZmluJ1xuICAgICAgICAsIHB1ZmZpbjogdFxuICAgICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/OnB1ZmZpbilbXFxzXFwvXShcXGQrKD86XFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvc2xlaXBuaXIvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnU2xlaXBuaXInXG4gICAgICAgICwgc2xlaXBuaXI6IHRcbiAgICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC8oPzpzbGVpcG5pcilbXFxzXFwvXShcXGQrKD86XFwuXFxkKykrKS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvay1tZWxlb24vaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnSy1NZWxlb24nXG4gICAgICAgICwga01lbGVvbjogdFxuICAgICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/OmstbWVsZW9uKVtcXHNcXC9dKFxcZCsoPzpcXC5cXGQrKSspL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHdpbmRvd3NwaG9uZSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnV2luZG93cyBQaG9uZSdcbiAgICAgICwgb3NuYW1lOiAnV2luZG93cyBQaG9uZSdcbiAgICAgICwgd2luZG93c3Bob25lOiB0XG4gICAgICB9XG4gICAgICBpZiAoZWRnZVZlcnNpb24pIHtcbiAgICAgICAgcmVzdWx0Lm1zZWRnZSA9IHRcbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSBlZGdlVmVyc2lvblxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJlc3VsdC5tc2llID0gdFxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGdldEZpcnN0TWF0Y2goL2llbW9iaWxlXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvbXNpZXx0cmlkZW50L2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ0ludGVybmV0IEV4cGxvcmVyJ1xuICAgICAgLCBtc2llOiB0XG4gICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/Om1zaWUgfHJ2OikoXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjaHJvbWVvcykge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnQ2hyb21lJ1xuICAgICAgLCBvc25hbWU6ICdDaHJvbWUgT1MnXG4gICAgICAsIGNocm9tZW9zOiB0XG4gICAgICAsIGNocm9tZUJvb2s6IHRcbiAgICAgICwgY2hyb21lOiB0XG4gICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/OmNocm9tZXxjcmlvc3xjcm1vKVxcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKC9lZGcoW2VhXXxpb3MpL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ01pY3Jvc29mdCBFZGdlJ1xuICAgICAgLCBtc2VkZ2U6IHRcbiAgICAgICwgdmVyc2lvbjogZWRnZVZlcnNpb25cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL3ZpdmFsZGkvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnVml2YWxkaSdcbiAgICAgICAgLCB2aXZhbGRpOiB0XG4gICAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvdml2YWxkaVxcLyhcXGQrKFxcLlxcZCspPykvaSkgfHwgdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoc2FpbGZpc2gpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ1NhaWxmaXNoJ1xuICAgICAgLCBvc25hbWU6ICdTYWlsZmlzaCBPUydcbiAgICAgICwgc2FpbGZpc2g6IHRcbiAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvc2FpbGZpc2hcXHM/YnJvd3NlclxcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL3NlYW1vbmtleVxcLy9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdTZWFNb25rZXknXG4gICAgICAsIHNlYW1vbmtleTogdFxuICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC9zZWFtb25rZXlcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC9maXJlZm94fGljZXdlYXNlbHxmeGlvcy9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdGaXJlZm94J1xuICAgICAgLCBmaXJlZm94OiB0XG4gICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/OmZpcmVmb3h8aWNld2Vhc2VsfGZ4aW9zKVsgXFwvXShcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICAgIGlmICgvXFwoKG1vYmlsZXx0YWJsZXQpO1teXFwpXSpydjpbXFxkXFwuXStcXCkvaS50ZXN0KHVhKSkge1xuICAgICAgICByZXN1bHQuZmlyZWZveG9zID0gdFxuICAgICAgICByZXN1bHQub3NuYW1lID0gJ0ZpcmVmb3ggT1MnXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHNpbGspIHtcbiAgICAgIHJlc3VsdCA9ICB7XG4gICAgICAgIG5hbWU6ICdBbWF6b24gU2lsaydcbiAgICAgICwgc2lsazogdFxuICAgICAgLCB2ZXJzaW9uIDogZ2V0Rmlyc3RNYXRjaCgvc2lsa1xcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL3BoYW50b20vaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnUGhhbnRvbUpTJ1xuICAgICAgLCBwaGFudG9tOiB0XG4gICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goL3BoYW50b21qc1xcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL3NsaW1lcmpzL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ1NsaW1lckpTJ1xuICAgICAgICAsIHNsaW1lcjogdFxuICAgICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goL3NsaW1lcmpzXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvYmxhY2tiZXJyeXxcXGJiYlxcZCsvaS50ZXN0KHVhKSB8fCAvcmltXFxzdGFibGV0L2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ0JsYWNrQmVycnknXG4gICAgICAsIG9zbmFtZTogJ0JsYWNrQmVycnkgT1MnXG4gICAgICAsIGJsYWNrYmVycnk6IHRcbiAgICAgICwgdmVyc2lvbjogdmVyc2lvbklkZW50aWZpZXIgfHwgZ2V0Rmlyc3RNYXRjaCgvYmxhY2tiZXJyeVtcXGRdK1xcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAod2Vib3MpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ1dlYk9TJ1xuICAgICAgLCBvc25hbWU6ICdXZWJPUydcbiAgICAgICwgd2Vib3M6IHRcbiAgICAgICwgdmVyc2lvbjogdmVyc2lvbklkZW50aWZpZXIgfHwgZ2V0Rmlyc3RNYXRjaCgvdyg/OmViKT9vc2Jyb3dzZXJcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9O1xuICAgICAgL3RvdWNocGFkXFwvL2kudGVzdCh1YSkgJiYgKHJlc3VsdC50b3VjaHBhZCA9IHQpXG4gICAgfVxuICAgIGVsc2UgaWYgKC9iYWRhL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ0JhZGEnXG4gICAgICAsIG9zbmFtZTogJ0JhZGEnXG4gICAgICAsIGJhZGE6IHRcbiAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvZG9sZmluXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGl6ZW4pIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ1RpemVuJ1xuICAgICAgLCBvc25hbWU6ICdUaXplbidcbiAgICAgICwgdGl6ZW46IHRcbiAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvKD86dGl6ZW5cXHM/KT9icm93c2VyXFwvKFxcZCsoXFwuXFxkKyk/KS9pKSB8fCB2ZXJzaW9uSWRlbnRpZmllclxuICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoL3F1cHppbGxhL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ1F1cFppbGxhJ1xuICAgICAgICAsIHF1cHppbGxhOiB0XG4gICAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvKD86cXVwemlsbGEpW1xcc1xcL10oXFxkKyg/OlxcLlxcZCspKykvaSkgfHwgdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL2Nocm9taXVtL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ0Nocm9taXVtJ1xuICAgICAgICAsIGNocm9taXVtOiB0XG4gICAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvKD86Y2hyb21pdW0pW1xcc1xcL10oXFxkKyg/OlxcLlxcZCspPykvaSkgfHwgdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL2Nocm9tZXxjcmlvc3xjcm1vL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ0Nocm9tZSdcbiAgICAgICAgLCBjaHJvbWU6IHRcbiAgICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC8oPzpjaHJvbWV8Y3Jpb3N8Y3JtbylcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGFuZHJvaWQpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ0FuZHJvaWQnXG4gICAgICAgICwgdmVyc2lvbjogdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL3NhZmFyaXxhcHBsZXdlYmtpdC9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdTYWZhcmknXG4gICAgICAsIHNhZmFyaTogdFxuICAgICAgfVxuICAgICAgaWYgKHZlcnNpb25JZGVudGlmaWVyKSB7XG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0gdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaW9zZGV2aWNlKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWUgOiBpb3NkZXZpY2UgPT0gJ2lwaG9uZScgPyAnaVBob25lJyA6IGlvc2RldmljZSA9PSAnaXBhZCcgPyAnaVBhZCcgOiAnaVBvZCdcbiAgICAgIH1cbiAgICAgIC8vIFdURjogdmVyc2lvbiBpcyBub3QgcGFydCBvZiB1c2VyIGFnZW50IGluIHdlYiBhcHBzXG4gICAgICBpZiAodmVyc2lvbklkZW50aWZpZXIpIHtcbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSB2ZXJzaW9uSWRlbnRpZmllclxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmKC9nb29nbGVib3QvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnR29vZ2xlYm90J1xuICAgICAgLCBnb29nbGVib3Q6IHRcbiAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvZ29vZ2xlYm90XFwvKFxcZCsoXFwuXFxkKykpL2kpIHx8IHZlcnNpb25JZGVudGlmaWVyXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiBnZXRGaXJzdE1hdGNoKC9eKC4qKVxcLyguKikgLyksXG4gICAgICAgIHZlcnNpb246IGdldFNlY29uZE1hdGNoKC9eKC4qKVxcLyguKikgLylcbiAgICAgfTtcbiAgIH1cblxuICAgIC8vIHNldCB3ZWJraXQgb3IgZ2Vja28gZmxhZyBmb3IgYnJvd3NlcnMgYmFzZWQgb24gdGhlc2UgZW5naW5lc1xuICAgIGlmICghcmVzdWx0Lm1zZWRnZSAmJiAvKGFwcGxlKT93ZWJraXQvaS50ZXN0KHVhKSkge1xuICAgICAgaWYgKC8oYXBwbGUpP3dlYmtpdFxcLzUzN1xcLjM2L2kudGVzdCh1YSkpIHtcbiAgICAgICAgcmVzdWx0Lm5hbWUgPSByZXN1bHQubmFtZSB8fCBcIkJsaW5rXCJcbiAgICAgICAgcmVzdWx0LmJsaW5rID0gdFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0Lm5hbWUgPSByZXN1bHQubmFtZSB8fCBcIldlYmtpdFwiXG4gICAgICAgIHJlc3VsdC53ZWJraXQgPSB0XG4gICAgICB9XG4gICAgICBpZiAoIXJlc3VsdC52ZXJzaW9uICYmIHZlcnNpb25JZGVudGlmaWVyKSB7XG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0gdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFyZXN1bHQub3BlcmEgJiYgL2dlY2tvXFwvL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdC5uYW1lID0gcmVzdWx0Lm5hbWUgfHwgXCJHZWNrb1wiXG4gICAgICByZXN1bHQuZ2Vja28gPSB0XG4gICAgICByZXN1bHQudmVyc2lvbiA9IHJlc3VsdC52ZXJzaW9uIHx8IGdldEZpcnN0TWF0Y2goL2dlY2tvXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgIH1cblxuICAgIC8vIHNldCBPUyBmbGFncyBmb3IgcGxhdGZvcm1zIHRoYXQgaGF2ZSBtdWx0aXBsZSBicm93c2Vyc1xuICAgIGlmICghcmVzdWx0LndpbmRvd3NwaG9uZSAmJiAoYW5kcm9pZCB8fCByZXN1bHQuc2lsaykpIHtcbiAgICAgIHJlc3VsdC5hbmRyb2lkID0gdFxuICAgICAgcmVzdWx0Lm9zbmFtZSA9ICdBbmRyb2lkJ1xuICAgIH0gZWxzZSBpZiAoIXJlc3VsdC53aW5kb3dzcGhvbmUgJiYgaW9zZGV2aWNlKSB7XG4gICAgICByZXN1bHRbaW9zZGV2aWNlXSA9IHRcbiAgICAgIHJlc3VsdC5pb3MgPSB0XG4gICAgICByZXN1bHQub3NuYW1lID0gJ2lPUydcbiAgICB9IGVsc2UgaWYgKG1hYykge1xuICAgICAgcmVzdWx0Lm1hYyA9IHRcbiAgICAgIHJlc3VsdC5vc25hbWUgPSAnbWFjT1MnXG4gICAgfSBlbHNlIGlmICh4Ym94KSB7XG4gICAgICByZXN1bHQueGJveCA9IHRcbiAgICAgIHJlc3VsdC5vc25hbWUgPSAnWGJveCdcbiAgICB9IGVsc2UgaWYgKHdpbmRvd3MpIHtcbiAgICAgIHJlc3VsdC53aW5kb3dzID0gdFxuICAgICAgcmVzdWx0Lm9zbmFtZSA9ICdXaW5kb3dzJ1xuICAgIH0gZWxzZSBpZiAobGludXgpIHtcbiAgICAgIHJlc3VsdC5saW51eCA9IHRcbiAgICAgIHJlc3VsdC5vc25hbWUgPSAnTGludXgnXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0V2luZG93c1ZlcnNpb24gKHMpIHtcbiAgICAgIHN3aXRjaCAocykge1xuICAgICAgICBjYXNlICdOVCc6IHJldHVybiAnTlQnXG4gICAgICAgIGNhc2UgJ1hQJzogcmV0dXJuICdYUCdcbiAgICAgICAgY2FzZSAnTlQgNS4wJzogcmV0dXJuICcyMDAwJ1xuICAgICAgICBjYXNlICdOVCA1LjEnOiByZXR1cm4gJ1hQJ1xuICAgICAgICBjYXNlICdOVCA1LjInOiByZXR1cm4gJzIwMDMnXG4gICAgICAgIGNhc2UgJ05UIDYuMCc6IHJldHVybiAnVmlzdGEnXG4gICAgICAgIGNhc2UgJ05UIDYuMSc6IHJldHVybiAnNydcbiAgICAgICAgY2FzZSAnTlQgNi4yJzogcmV0dXJuICc4J1xuICAgICAgICBjYXNlICdOVCA2LjMnOiByZXR1cm4gJzguMSdcbiAgICAgICAgY2FzZSAnTlQgMTAuMCc6IHJldHVybiAnMTAnXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBPUyB2ZXJzaW9uIGV4dHJhY3Rpb25cbiAgICB2YXIgb3NWZXJzaW9uID0gJyc7XG4gICAgaWYgKHJlc3VsdC53aW5kb3dzKSB7XG4gICAgICBvc1ZlcnNpb24gPSBnZXRXaW5kb3dzVmVyc2lvbihnZXRGaXJzdE1hdGNoKC9XaW5kb3dzICgoTlR8WFApKCBcXGRcXGQ/LlxcZCk/KS9pKSlcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC53aW5kb3dzcGhvbmUpIHtcbiAgICAgIG9zVmVyc2lvbiA9IGdldEZpcnN0TWF0Y2goL3dpbmRvd3MgcGhvbmUgKD86b3MpP1xccz8oXFxkKyhcXC5cXGQrKSopL2kpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0Lm1hYykge1xuICAgICAgb3NWZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvTWFjIE9TIFggKFxcZCsoW19cXC5cXHNdXFxkKykqKS9pKTtcbiAgICAgIG9zVmVyc2lvbiA9IG9zVmVyc2lvbi5yZXBsYWNlKC9bX1xcc10vZywgJy4nKTtcbiAgICB9IGVsc2UgaWYgKGlvc2RldmljZSkge1xuICAgICAgb3NWZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvb3MgKFxcZCsoW19cXHNdXFxkKykqKSBsaWtlIG1hYyBvcyB4L2kpO1xuICAgICAgb3NWZXJzaW9uID0gb3NWZXJzaW9uLnJlcGxhY2UoL1tfXFxzXS9nLCAnLicpO1xuICAgIH0gZWxzZSBpZiAoYW5kcm9pZCkge1xuICAgICAgb3NWZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvYW5kcm9pZFsgXFwvLV0oXFxkKyhcXC5cXGQrKSopL2kpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LndlYm9zKSB7XG4gICAgICBvc1ZlcnNpb24gPSBnZXRGaXJzdE1hdGNoKC8oPzp3ZWJ8aHB3KW9zXFwvKFxcZCsoXFwuXFxkKykqKS9pKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5ibGFja2JlcnJ5KSB7XG4gICAgICBvc1ZlcnNpb24gPSBnZXRGaXJzdE1hdGNoKC9yaW1cXHN0YWJsZXRcXHNvc1xccyhcXGQrKFxcLlxcZCspKikvaSk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuYmFkYSkge1xuICAgICAgb3NWZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvYmFkYVxcLyhcXGQrKFxcLlxcZCspKikvaSk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQudGl6ZW4pIHtcbiAgICAgIG9zVmVyc2lvbiA9IGdldEZpcnN0TWF0Y2goL3RpemVuW1xcL1xcc10oXFxkKyhcXC5cXGQrKSopL2kpO1xuICAgIH1cbiAgICBpZiAob3NWZXJzaW9uKSB7XG4gICAgICByZXN1bHQub3N2ZXJzaW9uID0gb3NWZXJzaW9uO1xuICAgIH1cblxuICAgIC8vIGRldmljZSB0eXBlIGV4dHJhY3Rpb25cbiAgICB2YXIgb3NNYWpvclZlcnNpb24gPSAhcmVzdWx0LndpbmRvd3MgJiYgb3NWZXJzaW9uLnNwbGl0KCcuJylbMF07XG4gICAgaWYgKFxuICAgICAgICAgdGFibGV0XG4gICAgICB8fCBuZXh1c1RhYmxldFxuICAgICAgfHwgaW9zZGV2aWNlID09ICdpcGFkJ1xuICAgICAgfHwgKGFuZHJvaWQgJiYgKG9zTWFqb3JWZXJzaW9uID09IDMgfHwgKG9zTWFqb3JWZXJzaW9uID49IDQgJiYgIW1vYmlsZSkpKVxuICAgICAgfHwgcmVzdWx0LnNpbGtcbiAgICApIHtcbiAgICAgIHJlc3VsdC50YWJsZXQgPSB0XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICAgIG1vYmlsZVxuICAgICAgfHwgaW9zZGV2aWNlID09ICdpcGhvbmUnXG4gICAgICB8fCBpb3NkZXZpY2UgPT0gJ2lwb2QnXG4gICAgICB8fCBhbmRyb2lkXG4gICAgICB8fCBuZXh1c01vYmlsZVxuICAgICAgfHwgcmVzdWx0LmJsYWNrYmVycnlcbiAgICAgIHx8IHJlc3VsdC53ZWJvc1xuICAgICAgfHwgcmVzdWx0LmJhZGFcbiAgICApIHtcbiAgICAgIHJlc3VsdC5tb2JpbGUgPSB0XG4gICAgfVxuXG4gICAgLy8gR3JhZGVkIEJyb3dzZXIgU3VwcG9ydFxuICAgIC8vIGh0dHA6Ly9kZXZlbG9wZXIueWFob28uY29tL3l1aS9hcnRpY2xlcy9nYnNcbiAgICBpZiAocmVzdWx0Lm1zZWRnZSB8fFxuICAgICAgICAocmVzdWx0Lm1zaWUgJiYgcmVzdWx0LnZlcnNpb24gPj0gMTApIHx8XG4gICAgICAgIChyZXN1bHQueWFuZGV4YnJvd3NlciAmJiByZXN1bHQudmVyc2lvbiA+PSAxNSkgfHxcblx0XHQgICAgKHJlc3VsdC52aXZhbGRpICYmIHJlc3VsdC52ZXJzaW9uID49IDEuMCkgfHxcbiAgICAgICAgKHJlc3VsdC5jaHJvbWUgJiYgcmVzdWx0LnZlcnNpb24gPj0gMjApIHx8XG4gICAgICAgIChyZXN1bHQuc2Ftc3VuZ0Jyb3dzZXIgJiYgcmVzdWx0LnZlcnNpb24gPj0gNCkgfHxcbiAgICAgICAgKHJlc3VsdC53aGFsZSAmJiBjb21wYXJlVmVyc2lvbnMoW3Jlc3VsdC52ZXJzaW9uLCAnMS4wJ10pID09PSAxKSB8fFxuICAgICAgICAocmVzdWx0Lm16YnJvd3NlciAmJiBjb21wYXJlVmVyc2lvbnMoW3Jlc3VsdC52ZXJzaW9uLCAnNi4wJ10pID09PSAxKSB8fFxuICAgICAgICAocmVzdWx0LmZvY3VzICYmIGNvbXBhcmVWZXJzaW9ucyhbcmVzdWx0LnZlcnNpb24sICcxLjAnXSkgPT09IDEpIHx8XG4gICAgICAgIChyZXN1bHQuZmlyZWZveCAmJiByZXN1bHQudmVyc2lvbiA+PSAyMC4wKSB8fFxuICAgICAgICAocmVzdWx0LnNhZmFyaSAmJiByZXN1bHQudmVyc2lvbiA+PSA2KSB8fFxuICAgICAgICAocmVzdWx0Lm9wZXJhICYmIHJlc3VsdC52ZXJzaW9uID49IDEwLjApIHx8XG4gICAgICAgIChyZXN1bHQuaW9zICYmIHJlc3VsdC5vc3ZlcnNpb24gJiYgcmVzdWx0Lm9zdmVyc2lvbi5zcGxpdChcIi5cIilbMF0gPj0gNikgfHxcbiAgICAgICAgKHJlc3VsdC5ibGFja2JlcnJ5ICYmIHJlc3VsdC52ZXJzaW9uID49IDEwLjEpXG4gICAgICAgIHx8IChyZXN1bHQuY2hyb21pdW0gJiYgcmVzdWx0LnZlcnNpb24gPj0gMjApXG4gICAgICAgICkge1xuICAgICAgcmVzdWx0LmEgPSB0O1xuICAgIH1cbiAgICBlbHNlIGlmICgocmVzdWx0Lm1zaWUgJiYgcmVzdWx0LnZlcnNpb24gPCAxMCkgfHxcbiAgICAgICAgKHJlc3VsdC5jaHJvbWUgJiYgcmVzdWx0LnZlcnNpb24gPCAyMCkgfHxcbiAgICAgICAgKHJlc3VsdC5maXJlZm94ICYmIHJlc3VsdC52ZXJzaW9uIDwgMjAuMCkgfHxcbiAgICAgICAgKHJlc3VsdC5zYWZhcmkgJiYgcmVzdWx0LnZlcnNpb24gPCA2KSB8fFxuICAgICAgICAocmVzdWx0Lm9wZXJhICYmIHJlc3VsdC52ZXJzaW9uIDwgMTAuMCkgfHxcbiAgICAgICAgKHJlc3VsdC5pb3MgJiYgcmVzdWx0Lm9zdmVyc2lvbiAmJiByZXN1bHQub3N2ZXJzaW9uLnNwbGl0KFwiLlwiKVswXSA8IDYpXG4gICAgICAgIHx8IChyZXN1bHQuY2hyb21pdW0gJiYgcmVzdWx0LnZlcnNpb24gPCAyMClcbiAgICAgICAgKSB7XG4gICAgICByZXN1bHQuYyA9IHRcbiAgICB9IGVsc2UgcmVzdWx0LnggPSB0XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICB2YXIgYm93c2VyID0gZGV0ZWN0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnID8gbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnJyA6ICcnKVxuXG4gIGJvd3Nlci50ZXN0ID0gZnVuY3Rpb24gKGJyb3dzZXJMaXN0KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBicm93c2VyTGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGJyb3dzZXJJdGVtID0gYnJvd3Nlckxpc3RbaV07XG4gICAgICBpZiAodHlwZW9mIGJyb3dzZXJJdGVtPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmIChicm93c2VySXRlbSBpbiBib3dzZXIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHZlcnNpb24gcHJlY2lzaW9ucyBjb3VudFxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAgIGdldFZlcnNpb25QcmVjaXNpb24oXCIxLjEwLjNcIikgLy8gM1xuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHZlcnNpb25cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0VmVyc2lvblByZWNpc2lvbih2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIHZlcnNpb24uc3BsaXQoXCIuXCIpLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcnJheTo6bWFwIHBvbHlmaWxsXG4gICAqXG4gICAqIEBwYXJhbSAge0FycmF5fSBhcnJcbiAgICogQHBhcmFtICB7RnVuY3Rpb259IGl0ZXJhdG9yXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgZnVuY3Rpb24gbWFwKGFyciwgaXRlcmF0b3IpIHtcbiAgICB2YXIgcmVzdWx0ID0gW10sIGk7XG4gICAgaWYgKEFycmF5LnByb3RvdHlwZS5tYXApIHtcbiAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoYXJyLCBpdGVyYXRvcik7XG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZXJhdG9yKGFycltpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBicm93c2VyIHZlcnNpb24gd2VpZ2h0XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqICAgY29tcGFyZVZlcnNpb25zKFsnMS4xMC4yLjEnLCAgJzEuOC4yLjEuOTAnXSkgICAgLy8gMVxuICAgKiAgIGNvbXBhcmVWZXJzaW9ucyhbJzEuMDEwLjIuMScsICcxLjA5LjIuMS45MCddKTsgIC8vIDFcbiAgICogICBjb21wYXJlVmVyc2lvbnMoWycxLjEwLjIuMScsICAnMS4xMC4yLjEnXSk7ICAgICAvLyAwXG4gICAqICAgY29tcGFyZVZlcnNpb25zKFsnMS4xMC4yLjEnLCAgJzEuMDgwMC4yJ10pOyAgICAgLy8gLTFcbiAgICpcbiAgICogQHBhcmFtICB7QXJyYXk8U3RyaW5nPn0gdmVyc2lvbnMgdmVyc2lvbnMgdG8gY29tcGFyZVxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IGNvbXBhcmlzb24gcmVzdWx0XG4gICAqL1xuICBmdW5jdGlvbiBjb21wYXJlVmVyc2lvbnModmVyc2lvbnMpIHtcbiAgICAvLyAxKSBnZXQgY29tbW9uIHByZWNpc2lvbiBmb3IgYm90aCB2ZXJzaW9ucywgZm9yIGV4YW1wbGUgZm9yIFwiMTAuMFwiIGFuZCBcIjlcIiBpdCBzaG91bGQgYmUgMlxuICAgIHZhciBwcmVjaXNpb24gPSBNYXRoLm1heChnZXRWZXJzaW9uUHJlY2lzaW9uKHZlcnNpb25zWzBdKSwgZ2V0VmVyc2lvblByZWNpc2lvbih2ZXJzaW9uc1sxXSkpO1xuICAgIHZhciBjaHVua3MgPSBtYXAodmVyc2lvbnMsIGZ1bmN0aW9uICh2ZXJzaW9uKSB7XG4gICAgICB2YXIgZGVsdGEgPSBwcmVjaXNpb24gLSBnZXRWZXJzaW9uUHJlY2lzaW9uKHZlcnNpb24pO1xuXG4gICAgICAvLyAyKSBcIjlcIiAtPiBcIjkuMFwiIChmb3IgcHJlY2lzaW9uID0gMilcbiAgICAgIHZlcnNpb24gPSB2ZXJzaW9uICsgbmV3IEFycmF5KGRlbHRhICsgMSkuam9pbihcIi4wXCIpO1xuXG4gICAgICAvLyAzKSBcIjkuMFwiIC0+IFtcIjAwMDAwMDAwMFwiXCIsIFwiMDAwMDAwMDA5XCJdXG4gICAgICByZXR1cm4gbWFwKHZlcnNpb24uc3BsaXQoXCIuXCIpLCBmdW5jdGlvbiAoY2h1bmspIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheSgyMCAtIGNodW5rLmxlbmd0aCkuam9pbihcIjBcIikgKyBjaHVuaztcbiAgICAgIH0pLnJldmVyc2UoKTtcbiAgICB9KTtcblxuICAgIC8vIGl0ZXJhdGUgaW4gcmV2ZXJzZSBvcmRlciBieSByZXZlcnNlZCBjaHVua3MgYXJyYXlcbiAgICB3aGlsZSAoLS1wcmVjaXNpb24gPj0gMCkge1xuICAgICAgLy8gNCkgY29tcGFyZTogXCIwMDAwMDAwMDlcIiA+IFwiMDAwMDAwMDEwXCIgPSBmYWxzZSAoYnV0IFwiOVwiID4gXCIxMFwiID0gdHJ1ZSlcbiAgICAgIGlmIChjaHVua3NbMF1bcHJlY2lzaW9uXSA+IGNodW5rc1sxXVtwcmVjaXNpb25dKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoY2h1bmtzWzBdW3ByZWNpc2lvbl0gPT09IGNodW5rc1sxXVtwcmVjaXNpb25dKSB7XG4gICAgICAgIGlmIChwcmVjaXNpb24gPT09IDApIHtcbiAgICAgICAgICAvLyBhbGwgdmVyc2lvbiBjaHVua3MgYXJlIHNhbWVcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYnJvd3NlciBpcyB1bnN1cHBvcnRlZFxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAgIGJvd3Nlci5pc1Vuc3VwcG9ydGVkQnJvd3Nlcih7XG4gICAqICAgICBtc2llOiBcIjEwXCIsXG4gICAqICAgICBmaXJlZm94OiBcIjIzXCIsXG4gICAqICAgICBjaHJvbWU6IFwiMjlcIixcbiAgICogICAgIHNhZmFyaTogXCI1LjFcIixcbiAgICogICAgIG9wZXJhOiBcIjE2XCIsXG4gICAqICAgICBwaGFudG9tOiBcIjUzNFwiXG4gICAqICAgfSk7XG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gIG1pblZlcnNpb25zIG1hcCBvZiBtaW5pbWFsIHZlcnNpb24gdG8gYnJvd3NlclxuICAgKiBAcGFyYW0gIHtCb29sZWFufSBbc3RyaWN0TW9kZSA9IGZhbHNlXSBmbGFnIHRvIHJldHVybiBmYWxzZSBpZiBicm93c2VyIHdhc24ndCBmb3VuZCBpbiBtYXBcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgW3VhXSB1c2VyIGFnZW50IHN0cmluZ1xuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNVbnN1cHBvcnRlZEJyb3dzZXIobWluVmVyc2lvbnMsIHN0cmljdE1vZGUsIHVhKSB7XG4gICAgdmFyIF9ib3dzZXIgPSBib3dzZXI7XG5cbiAgICAvLyBtYWtlIHN0cmljdE1vZGUgcGFyYW0gb3B0aW9uYWwgd2l0aCB1YSBwYXJhbSB1c2FnZVxuICAgIGlmICh0eXBlb2Ygc3RyaWN0TW9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHVhID0gc3RyaWN0TW9kZTtcbiAgICAgIHN0cmljdE1vZGUgPSB2b2lkKDApO1xuICAgIH1cblxuICAgIGlmIChzdHJpY3RNb2RlID09PSB2b2lkKDApKSB7XG4gICAgICBzdHJpY3RNb2RlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh1YSkge1xuICAgICAgX2Jvd3NlciA9IGRldGVjdCh1YSk7XG4gICAgfVxuXG4gICAgdmFyIHZlcnNpb24gPSBcIlwiICsgX2Jvd3Nlci52ZXJzaW9uO1xuICAgIGZvciAodmFyIGJyb3dzZXIgaW4gbWluVmVyc2lvbnMpIHtcbiAgICAgIGlmIChtaW5WZXJzaW9ucy5oYXNPd25Qcm9wZXJ0eShicm93c2VyKSkge1xuICAgICAgICBpZiAoX2Jvd3Nlclticm93c2VyXSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgbWluVmVyc2lvbnNbYnJvd3Nlcl0gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Jyb3dzZXIgdmVyc2lvbiBpbiB0aGUgbWluVmVyc2lvbiBtYXAgc2hvdWxkIGJlIGEgc3RyaW5nOiAnICsgYnJvd3NlciArICc6ICcgKyBTdHJpbmcobWluVmVyc2lvbnMpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBicm93c2VyIHZlcnNpb24gYW5kIG1pbiBzdXBwb3J0ZWQgdmVyc2lvbi5cbiAgICAgICAgICByZXR1cm4gY29tcGFyZVZlcnNpb25zKFt2ZXJzaW9uLCBtaW5WZXJzaW9uc1ticm93c2VyXV0pIDwgMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdHJpY3RNb2RlOyAvLyBub3QgZm91bmRcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBicm93c2VyIGlzIHN1cHBvcnRlZFxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IG1pblZlcnNpb25zIG1hcCBvZiBtaW5pbWFsIHZlcnNpb24gdG8gYnJvd3NlclxuICAgKiBAcGFyYW0gIHtCb29sZWFufSBbc3RyaWN0TW9kZSA9IGZhbHNlXSBmbGFnIHRvIHJldHVybiBmYWxzZSBpZiBicm93c2VyIHdhc24ndCBmb3VuZCBpbiBtYXBcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgW3VhXSB1c2VyIGFnZW50IHN0cmluZ1xuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gY2hlY2sobWluVmVyc2lvbnMsIHN0cmljdE1vZGUsIHVhKSB7XG4gICAgcmV0dXJuICFpc1Vuc3VwcG9ydGVkQnJvd3NlcihtaW5WZXJzaW9ucywgc3RyaWN0TW9kZSwgdWEpO1xuICB9XG5cbiAgYm93c2VyLmlzVW5zdXBwb3J0ZWRCcm93c2VyID0gaXNVbnN1cHBvcnRlZEJyb3dzZXI7XG4gIGJvd3Nlci5jb21wYXJlVmVyc2lvbnMgPSBjb21wYXJlVmVyc2lvbnM7XG4gIGJvd3Nlci5jaGVjayA9IGNoZWNrO1xuXG4gIC8qXG4gICAqIFNldCBvdXIgZGV0ZWN0IG1ldGhvZCB0byB0aGUgbWFpbiBib3dzZXIgb2JqZWN0IHNvIHdlIGNhblxuICAgKiByZXVzZSBpdCB0byB0ZXN0IG90aGVyIHVzZXIgYWdlbnRzLlxuICAgKiBUaGlzIGlzIG5lZWRlZCB0byBpbXBsZW1lbnQgZnV0dXJlIHRlc3RzLlxuICAgKi9cbiAgYm93c2VyLl9kZXRlY3QgPSBkZXRlY3Q7XG5cbiAgLypcbiAgICogU2V0IG91ciBkZXRlY3QgcHVibGljIG1ldGhvZCB0byB0aGUgbWFpbiBib3dzZXIgb2JqZWN0XG4gICAqIFRoaXMgaXMgbmVlZGVkIHRvIGltcGxlbWVudCBib3dzZXIgaW4gc2VydmVyIHNpZGVcbiAgICovXG4gIGJvd3Nlci5kZXRlY3QgPSBkZXRlY3Q7XG4gIHJldHVybiBib3dzZXJcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaHlwaGVuYXRlUHJvcGVydHk7XG5cbnZhciBfaHlwaGVuYXRlU3R5bGVOYW1lID0gcmVxdWlyZSgnaHlwaGVuYXRlLXN0eWxlLW5hbWUnKTtcblxudmFyIF9oeXBoZW5hdGVTdHlsZU5hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHlwaGVuYXRlU3R5bGVOYW1lKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaHlwaGVuYXRlUHJvcGVydHkocHJvcGVydHkpIHtcbiAgcmV0dXJuICgwLCBfaHlwaGVuYXRlU3R5bGVOYW1lMi5kZWZhdWx0KShwcm9wZXJ0eSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1ByZWZpeGVkVmFsdWU7XG52YXIgcmVnZXggPSAvLXdlYmtpdC18LW1vei18LW1zLS87XG5cbmZ1bmN0aW9uIGlzUHJlZml4ZWRWYWx1ZSh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiByZWdleC50ZXN0KHZhbHVlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTUgSmVkIFdhdHNvbi5cbiAgQmFzZWQgb24gY29kZSB0aGF0IGlzIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGNhblVzZURPTSA9ICEhKFxuXHRcdHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG5cdFx0d2luZG93LmRvY3VtZW50ICYmXG5cdFx0d2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnRcblx0KTtcblxuXHR2YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSB7XG5cblx0XHRjYW5Vc2VET006IGNhblVzZURPTSxcblxuXHRcdGNhblVzZVdvcmtlcnM6IHR5cGVvZiBXb3JrZXIgIT09ICd1bmRlZmluZWQnLFxuXG5cdFx0Y2FuVXNlRXZlbnRMaXN0ZW5lcnM6XG5cdFx0XHRjYW5Vc2VET00gJiYgISEod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgfHwgd2luZG93LmF0dGFjaEV2ZW50KSxcblxuXHRcdGNhblVzZVZpZXdwb3J0OiBjYW5Vc2VET00gJiYgISF3aW5kb3cuc2NyZWVuXG5cblx0fTtcblxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5FeGVjdXRpb25FbnZpcm9ubWVudCA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHR9XG5cbn0oKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVByZWZpeGVyO1xuXG52YXIgX2dldEJyb3dzZXJJbmZvcm1hdGlvbiA9IHJlcXVpcmUoJy4uL3V0aWxzL2dldEJyb3dzZXJJbmZvcm1hdGlvbicpO1xuXG52YXIgX2dldEJyb3dzZXJJbmZvcm1hdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRCcm93c2VySW5mb3JtYXRpb24pO1xuXG52YXIgX2dldFByZWZpeGVkS2V5ZnJhbWVzID0gcmVxdWlyZSgnLi4vdXRpbHMvZ2V0UHJlZml4ZWRLZXlmcmFtZXMnKTtcblxudmFyIF9nZXRQcmVmaXhlZEtleWZyYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcmVmaXhlZEtleWZyYW1lcyk7XG5cbnZhciBfY2FwaXRhbGl6ZVN0cmluZyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NhcGl0YWxpemVTdHJpbmcnKTtcblxudmFyIF9jYXBpdGFsaXplU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhcGl0YWxpemVTdHJpbmcpO1xuXG52YXIgX2FkZE5ld1ZhbHVlc09ubHkgPSByZXF1aXJlKCcuLi91dGlscy9hZGROZXdWYWx1ZXNPbmx5Jyk7XG5cbnZhciBfYWRkTmV3VmFsdWVzT25seTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGROZXdWYWx1ZXNPbmx5KTtcblxudmFyIF9pc09iamVjdCA9IHJlcXVpcmUoJy4uL3V0aWxzL2lzT2JqZWN0Jyk7XG5cbnZhciBfaXNPYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNPYmplY3QpO1xuXG52YXIgX3ByZWZpeFZhbHVlID0gcmVxdWlyZSgnLi4vdXRpbHMvcHJlZml4VmFsdWUnKTtcblxudmFyIF9wcmVmaXhWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIGNyZWF0ZVByZWZpeGVyKF9yZWYpIHtcbiAgdmFyIHByZWZpeE1hcCA9IF9yZWYucHJlZml4TWFwLFxuICAgICAgcGx1Z2lucyA9IF9yZWYucGx1Z2lucztcbiAgdmFyIGZhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICByZXR1cm4gc3R5bGU7XG4gIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBJbnN0YW50aWFudGUgYSBuZXcgcHJlZml4ZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlckFnZW50IC0gdXNlckFnZW50IHRvIGdhdGhlciBwcmVmaXggaW5mb3JtYXRpb24gYWNjb3JkaW5nIHRvIGNhbml1c2UuY29tXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtlZXBVbnByZWZpeGVkIC0ga2VlcHMgdW5wcmVmaXhlZCBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBQcmVmaXhlcigpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByZWZpeGVyKTtcblxuICAgICAgdmFyIGRlZmF1bHRVc2VyQWdlbnQgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyA/IG5hdmlnYXRvci51c2VyQWdlbnQgOiB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMuX3VzZXJBZ2VudCA9IG9wdGlvbnMudXNlckFnZW50IHx8IGRlZmF1bHRVc2VyQWdlbnQ7XG4gICAgICB0aGlzLl9rZWVwVW5wcmVmaXhlZCA9IG9wdGlvbnMua2VlcFVucHJlZml4ZWQgfHwgZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLl91c2VyQWdlbnQpIHtcbiAgICAgICAgdGhpcy5fYnJvd3NlckluZm8gPSAoMCwgX2dldEJyb3dzZXJJbmZvcm1hdGlvbjIuZGVmYXVsdCkodGhpcy5fdXNlckFnZW50KTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2tzIGlmIHRoZSB1c2VyQWdlbnQgd2FzIHJlc29sdmVkIGNvcnJlY3RseVxuICAgICAgaWYgKHRoaXMuX2Jyb3dzZXJJbmZvICYmIHRoaXMuX2Jyb3dzZXJJbmZvLmNzc1ByZWZpeCkge1xuICAgICAgICB0aGlzLnByZWZpeGVkS2V5ZnJhbWVzID0gKDAsIF9nZXRQcmVmaXhlZEtleWZyYW1lczIuZGVmYXVsdCkodGhpcy5fYnJvd3NlckluZm8uYnJvd3Nlck5hbWUsIHRoaXMuX2Jyb3dzZXJJbmZvLmJyb3dzZXJWZXJzaW9uLCB0aGlzLl9icm93c2VySW5mby5jc3NQcmVmaXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdXNlRmFsbGJhY2sgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcmVmaXhEYXRhID0gdGhpcy5fYnJvd3NlckluZm8uYnJvd3Nlck5hbWUgJiYgcHJlZml4TWFwW3RoaXMuX2Jyb3dzZXJJbmZvLmJyb3dzZXJOYW1lXTtcbiAgICAgIGlmIChwcmVmaXhEYXRhKSB7XG4gICAgICAgIHRoaXMuX3JlcXVpcmVzUHJlZml4ID0ge307XG5cbiAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gcHJlZml4RGF0YSkge1xuICAgICAgICAgIGlmIChwcmVmaXhEYXRhW3Byb3BlcnR5XSA+PSB0aGlzLl9icm93c2VySW5mby5icm93c2VyVmVyc2lvbikge1xuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZXNQcmVmaXhbcHJvcGVydHldID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9oYXNQcm9wc1JlcXVpcmluZ1ByZWZpeCA9IE9iamVjdC5rZXlzKHRoaXMuX3JlcXVpcmVzUHJlZml4KS5sZW5ndGggPiAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdXNlRmFsbGJhY2sgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9tZXRhRGF0YSA9IHtcbiAgICAgICAgYnJvd3NlclZlcnNpb246IHRoaXMuX2Jyb3dzZXJJbmZvLmJyb3dzZXJWZXJzaW9uLFxuICAgICAgICBicm93c2VyTmFtZTogdGhpcy5fYnJvd3NlckluZm8uYnJvd3Nlck5hbWUsXG4gICAgICAgIGNzc1ByZWZpeDogdGhpcy5fYnJvd3NlckluZm8uY3NzUHJlZml4LFxuICAgICAgICBqc1ByZWZpeDogdGhpcy5fYnJvd3NlckluZm8uanNQcmVmaXgsXG4gICAgICAgIGtlZXBVbnByZWZpeGVkOiB0aGlzLl9rZWVwVW5wcmVmaXhlZCxcbiAgICAgICAgcmVxdWlyZXNQcmVmaXg6IHRoaXMuX3JlcXVpcmVzUHJlZml4XG4gICAgICB9O1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhQcmVmaXhlciwgW3tcbiAgICAgIGtleTogJ3ByZWZpeCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHJlZml4KHN0eWxlKSB7XG4gICAgICAgIC8vIHVzZSBzdGF0aWMgcHJlZml4ZXIgYXMgZmFsbGJhY2sgaWYgdXNlckFnZW50IGNhbiBub3QgYmUgcmVzb2x2ZWRcbiAgICAgICAgaWYgKHRoaXMuX3VzZUZhbGxiYWNrKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbGxiYWNrKHN0eWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG9ubHkgYWRkIHByZWZpeGVzIGlmIG5lZWRlZFxuICAgICAgICBpZiAoIXRoaXMuX2hhc1Byb3BzUmVxdWlyaW5nUHJlZml4KSB7XG4gICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByZWZpeFN0eWxlKHN0eWxlKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfcHJlZml4U3R5bGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9wcmVmaXhTdHlsZShzdHlsZSkge1xuICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBzdHlsZSkge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlW3Byb3BlcnR5XTtcblxuICAgICAgICAgIC8vIGhhbmRsZSBuZXN0ZWQgb2JqZWN0c1xuICAgICAgICAgIGlmICgoMCwgX2lzT2JqZWN0Mi5kZWZhdWx0KSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9IHRoaXMucHJlZml4KHZhbHVlKTtcbiAgICAgICAgICAgIC8vIGhhbmRsZSBhcnJheSB2YWx1ZXNcbiAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YXIgY29tYmluZWRWYWx1ZSA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgICAgdmFyIHByb2Nlc3NlZFZhbHVlID0gKDAsIF9wcmVmaXhWYWx1ZTIuZGVmYXVsdCkocGx1Z2lucywgcHJvcGVydHksIHZhbHVlW2ldLCBzdHlsZSwgdGhpcy5fbWV0YURhdGEpO1xuICAgICAgICAgICAgICAoMCwgX2FkZE5ld1ZhbHVlc09ubHkyLmRlZmF1bHQpKGNvbWJpbmVkVmFsdWUsIHByb2Nlc3NlZFZhbHVlIHx8IHZhbHVlW2ldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gb25seSBtb2RpZnkgdGhlIHZhbHVlIGlmIGl0IHdhcyB0b3VjaGVkXG4gICAgICAgICAgICAvLyBieSBhbnkgcGx1Z2luIHRvIHByZXZlbnQgdW5uZWNlc3NhcnkgbXV0YXRpb25zXG4gICAgICAgICAgICBpZiAoY29tYmluZWRWYWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9IGNvbWJpbmVkVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBfcHJvY2Vzc2VkVmFsdWUgPSAoMCwgX3ByZWZpeFZhbHVlMi5kZWZhdWx0KShwbHVnaW5zLCBwcm9wZXJ0eSwgdmFsdWUsIHN0eWxlLCB0aGlzLl9tZXRhRGF0YSk7XG5cbiAgICAgICAgICAgIC8vIG9ubHkgbW9kaWZ5IHRoZSB2YWx1ZSBpZiBpdCB3YXMgdG91Y2hlZFxuICAgICAgICAgICAgLy8gYnkgYW55IHBsdWdpbiB0byBwcmV2ZW50IHVubmVjZXNzYXJ5IG11dGF0aW9uc1xuICAgICAgICAgICAgaWYgKF9wcm9jZXNzZWRWYWx1ZSkge1xuICAgICAgICAgICAgICBzdHlsZVtwcm9wZXJ0eV0gPSBfcHJvY2Vzc2VkVmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFkZCBwcmVmaXhlcyB0byBwcm9wZXJ0aWVzXG4gICAgICAgICAgICBpZiAodGhpcy5fcmVxdWlyZXNQcmVmaXguaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgIHN0eWxlW3RoaXMuX2Jyb3dzZXJJbmZvLmpzUHJlZml4ICsgKDAsIF9jYXBpdGFsaXplU3RyaW5nMi5kZWZhdWx0KShwcm9wZXJ0eSldID0gdmFsdWU7XG4gICAgICAgICAgICAgIGlmICghdGhpcy5fa2VlcFVucHJlZml4ZWQpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgc3R5bGVbcHJvcGVydHldO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgYSBwcmVmaXhlZCB2ZXJzaW9uIG9mIHRoZSBzdHlsZSBvYmplY3QgdXNpbmcgYWxsIHZlbmRvciBwcmVmaXhlc1xuICAgICAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlcyAtIFN0eWxlIG9iamVjdCB0aGF0IGdldHMgcHJlZml4ZWQgcHJvcGVydGllcyBhZGRlZFxuICAgICAgICogQHJldHVybnMge09iamVjdH0gLSBTdHlsZSBvYmplY3Qgd2l0aCBwcmVmaXhlZCBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXNcbiAgICAgICAqL1xuXG4gICAgfV0sIFt7XG4gICAgICBrZXk6ICdwcmVmaXhBbGwnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByZWZpeEFsbChzdHlsZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbGxiYWNrKHN0eWxlcyk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFByZWZpeGVyO1xuICB9KCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjYWxjO1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9nZXRQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gY2FsYyhwcm9wZXJ0eSwgdmFsdWUsIHN0eWxlLCBfcmVmKSB7XG4gIHZhciBicm93c2VyTmFtZSA9IF9yZWYuYnJvd3Nlck5hbWUsXG4gICAgICBicm93c2VyVmVyc2lvbiA9IF9yZWYuYnJvd3NlclZlcnNpb24sXG4gICAgICBjc3NQcmVmaXggPSBfcmVmLmNzc1ByZWZpeCxcbiAgICAgIGtlZXBVbnByZWZpeGVkID0gX3JlZi5rZWVwVW5wcmVmaXhlZDtcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5pbmRleE9mKCdjYWxjKCcpID4gLTEgJiYgKGJyb3dzZXJOYW1lID09PSAnZmlyZWZveCcgJiYgYnJvd3NlclZlcnNpb24gPCAxNSB8fCBicm93c2VyTmFtZSA9PT0gJ2Nocm9tZScgJiYgYnJvd3NlclZlcnNpb24gPCAyNSB8fCBicm93c2VyTmFtZSA9PT0gJ3NhZmFyaScgJiYgYnJvd3NlclZlcnNpb24gPCA2LjEgfHwgYnJvd3Nlck5hbWUgPT09ICdpb3Nfc2FmJyAmJiBicm93c2VyVmVyc2lvbiA8IDcpKSB7XG4gICAgcmV0dXJuICgwLCBfZ2V0UHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkodmFsdWUucmVwbGFjZSgvY2FsY1xcKC9nLCBjc3NQcmVmaXggKyAnY2FsYygnKSwgdmFsdWUsIGtlZXBVbnByZWZpeGVkKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3Jvc3NGYWRlO1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9nZXRQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gY3Jvc3NGYWRlKHByb3BlcnR5LCB2YWx1ZSwgc3R5bGUsIF9yZWYpIHtcbiAgdmFyIGJyb3dzZXJOYW1lID0gX3JlZi5icm93c2VyTmFtZSxcbiAgICAgIGJyb3dzZXJWZXJzaW9uID0gX3JlZi5icm93c2VyVmVyc2lvbixcbiAgICAgIGNzc1ByZWZpeCA9IF9yZWYuY3NzUHJlZml4LFxuICAgICAga2VlcFVucHJlZml4ZWQgPSBfcmVmLmtlZXBVbnByZWZpeGVkO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluZGV4T2YoJ2Nyb3NzLWZhZGUoJykgPiAtMSAmJiAoYnJvd3Nlck5hbWUgPT09ICdjaHJvbWUnIHx8IGJyb3dzZXJOYW1lID09PSAnb3BlcmEnIHx8IGJyb3dzZXJOYW1lID09PSAnYW5kX2NocicgfHwgKGJyb3dzZXJOYW1lID09PSAnaW9zX3NhZicgfHwgYnJvd3Nlck5hbWUgPT09ICdzYWZhcmknKSAmJiBicm93c2VyVmVyc2lvbiA8IDEwKSkge1xuICAgIHJldHVybiAoMCwgX2dldFByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHZhbHVlLnJlcGxhY2UoL2Nyb3NzLWZhZGVcXCgvZywgY3NzUHJlZml4ICsgJ2Nyb3NzLWZhZGUoJyksIHZhbHVlLCBrZWVwVW5wcmVmaXhlZCk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGN1cnNvcjtcblxudmFyIF9nZXRQcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZ2V0UHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJlZml4ZWRWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBncmFiVmFsdWVzID0ge1xuICBncmFiOiB0cnVlLFxuICBncmFiYmluZzogdHJ1ZVxufTtcblxuXG52YXIgem9vbVZhbHVlcyA9IHtcbiAgJ3pvb20taW4nOiB0cnVlLFxuICAnem9vbS1vdXQnOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBjdXJzb3IocHJvcGVydHksIHZhbHVlLCBzdHlsZSwgX3JlZikge1xuICB2YXIgYnJvd3Nlck5hbWUgPSBfcmVmLmJyb3dzZXJOYW1lLFxuICAgICAgYnJvd3NlclZlcnNpb24gPSBfcmVmLmJyb3dzZXJWZXJzaW9uLFxuICAgICAgY3NzUHJlZml4ID0gX3JlZi5jc3NQcmVmaXgsXG4gICAgICBrZWVwVW5wcmVmaXhlZCA9IF9yZWYua2VlcFVucHJlZml4ZWQ7XG5cbiAgLy8gYWRkcyBwcmVmaXhlcyBmb3IgZmlyZWZveCwgY2hyb21lLCBzYWZhcmksIGFuZCBvcGVyYSByZWdhcmRsZXNzIG9mXG4gIC8vIHZlcnNpb24gdW50aWwgYSByZWxpYWJsZSBicm93c2VyIHN1cHBvcnQgaW5mbyBjYW4gYmUgZm91bmRcbiAgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vcm9mcmlzY2htYW5uL2lubGluZS1zdHlsZS1wcmVmaXhlci9pc3N1ZXMvNzlcbiAgaWYgKHByb3BlcnR5ID09PSAnY3Vyc29yJyAmJiBncmFiVmFsdWVzW3ZhbHVlXSAmJiAoYnJvd3Nlck5hbWUgPT09ICdmaXJlZm94JyB8fCBicm93c2VyTmFtZSA9PT0gJ2Nocm9tZScgfHwgYnJvd3Nlck5hbWUgPT09ICdzYWZhcmknIHx8IGJyb3dzZXJOYW1lID09PSAnb3BlcmEnKSkge1xuICAgIHJldHVybiAoMCwgX2dldFByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKGNzc1ByZWZpeCArIHZhbHVlLCB2YWx1ZSwga2VlcFVucHJlZml4ZWQpO1xuICB9XG5cbiAgaWYgKHByb3BlcnR5ID09PSAnY3Vyc29yJyAmJiB6b29tVmFsdWVzW3ZhbHVlXSAmJiAoYnJvd3Nlck5hbWUgPT09ICdmaXJlZm94JyAmJiBicm93c2VyVmVyc2lvbiA8IDI0IHx8IGJyb3dzZXJOYW1lID09PSAnY2hyb21lJyAmJiBicm93c2VyVmVyc2lvbiA8IDM3IHx8IGJyb3dzZXJOYW1lID09PSAnc2FmYXJpJyAmJiBicm93c2VyVmVyc2lvbiA8IDkgfHwgYnJvd3Nlck5hbWUgPT09ICdvcGVyYScgJiYgYnJvd3NlclZlcnNpb24gPCAyNCkpIHtcbiAgICByZXR1cm4gKDAsIF9nZXRQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KShjc3NQcmVmaXggKyB2YWx1ZSwgdmFsdWUsIGtlZXBVbnByZWZpeGVkKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZmlsdGVyO1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9nZXRQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZmlsdGVyKHByb3BlcnR5LCB2YWx1ZSwgc3R5bGUsIF9yZWYpIHtcbiAgdmFyIGJyb3dzZXJOYW1lID0gX3JlZi5icm93c2VyTmFtZSxcbiAgICAgIGJyb3dzZXJWZXJzaW9uID0gX3JlZi5icm93c2VyVmVyc2lvbixcbiAgICAgIGNzc1ByZWZpeCA9IF9yZWYuY3NzUHJlZml4LFxuICAgICAga2VlcFVucHJlZml4ZWQgPSBfcmVmLmtlZXBVbnByZWZpeGVkO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluZGV4T2YoJ2ZpbHRlcignKSA+IC0xICYmIChicm93c2VyTmFtZSA9PT0gJ2lvc19zYWYnIHx8IGJyb3dzZXJOYW1lID09PSAnc2FmYXJpJyAmJiBicm93c2VyVmVyc2lvbiA8IDkuMSkpIHtcbiAgICByZXR1cm4gKDAsIF9nZXRQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KSh2YWx1ZS5yZXBsYWNlKC9maWx0ZXJcXCgvZywgY3NzUHJlZml4ICsgJ2ZpbHRlcignKSwgdmFsdWUsIGtlZXBVbnByZWZpeGVkKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZmxleDtcblxudmFyIF9nZXRQcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZ2V0UHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJlZml4ZWRWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB2YWx1ZXMgPSB7XG4gIGZsZXg6IHRydWUsXG4gICdpbmxpbmUtZmxleCc6IHRydWVcbn07XG5mdW5jdGlvbiBmbGV4KHByb3BlcnR5LCB2YWx1ZSwgc3R5bGUsIF9yZWYpIHtcbiAgdmFyIGJyb3dzZXJOYW1lID0gX3JlZi5icm93c2VyTmFtZSxcbiAgICAgIGJyb3dzZXJWZXJzaW9uID0gX3JlZi5icm93c2VyVmVyc2lvbixcbiAgICAgIGNzc1ByZWZpeCA9IF9yZWYuY3NzUHJlZml4LFxuICAgICAga2VlcFVucHJlZml4ZWQgPSBfcmVmLmtlZXBVbnByZWZpeGVkO1xuXG4gIGlmIChwcm9wZXJ0eSA9PT0gJ2Rpc3BsYXknICYmIHZhbHVlc1t2YWx1ZV0gJiYgKGJyb3dzZXJOYW1lID09PSAnY2hyb21lJyAmJiBicm93c2VyVmVyc2lvbiA8IDI5ICYmIGJyb3dzZXJWZXJzaW9uID4gMjAgfHwgKGJyb3dzZXJOYW1lID09PSAnc2FmYXJpJyB8fCBicm93c2VyTmFtZSA9PT0gJ2lvc19zYWYnKSAmJiBicm93c2VyVmVyc2lvbiA8IDkgJiYgYnJvd3NlclZlcnNpb24gPiA2IHx8IGJyb3dzZXJOYW1lID09PSAnb3BlcmEnICYmIChicm93c2VyVmVyc2lvbiA9PT0gMTUgfHwgYnJvd3NlclZlcnNpb24gPT09IDE2KSkpIHtcbiAgICByZXR1cm4gKDAsIF9nZXRQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KShjc3NQcmVmaXggKyB2YWx1ZSwgdmFsdWUsIGtlZXBVbnByZWZpeGVkKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZmxleGJveElFO1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9nZXRQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGFsdGVybmF0aXZlVmFsdWVzID0ge1xuICAnc3BhY2UtYXJvdW5kJzogJ2Rpc3RyaWJ1dGUnLFxuICAnc3BhY2UtYmV0d2Vlbic6ICdqdXN0aWZ5JyxcbiAgJ2ZsZXgtc3RhcnQnOiAnc3RhcnQnLFxuICAnZmxleC1lbmQnOiAnZW5kJyxcbiAgZmxleDogJ2ZsZXhib3gnLFxuICAnaW5saW5lLWZsZXgnOiAnaW5saW5lLWZsZXhib3gnXG59O1xuXG52YXIgYWx0ZXJuYXRpdmVQcm9wcyA9IHtcbiAgYWxpZ25Db250ZW50OiAnbXNGbGV4TGluZVBhY2snLFxuICBhbGlnblNlbGY6ICdtc0ZsZXhJdGVtQWxpZ24nLFxuICBhbGlnbkl0ZW1zOiAnbXNGbGV4QWxpZ24nLFxuICBqdXN0aWZ5Q29udGVudDogJ21zRmxleFBhY2snLFxuICBvcmRlcjogJ21zRmxleE9yZGVyJyxcbiAgZmxleEdyb3c6ICdtc0ZsZXhQb3NpdGl2ZScsXG4gIGZsZXhTaHJpbms6ICdtc0ZsZXhOZWdhdGl2ZScsXG4gIGZsZXhCYXNpczogJ21zRmxleFByZWZlcnJlZFNpemUnXG59O1xuXG5mdW5jdGlvbiBmbGV4Ym94SUUocHJvcGVydHksIHZhbHVlLCBzdHlsZSwgX3JlZikge1xuICB2YXIgYnJvd3Nlck5hbWUgPSBfcmVmLmJyb3dzZXJOYW1lLFxuICAgICAgYnJvd3NlclZlcnNpb24gPSBfcmVmLmJyb3dzZXJWZXJzaW9uLFxuICAgICAgY3NzUHJlZml4ID0gX3JlZi5jc3NQcmVmaXgsXG4gICAgICBrZWVwVW5wcmVmaXhlZCA9IF9yZWYua2VlcFVucHJlZml4ZWQsXG4gICAgICByZXF1aXJlc1ByZWZpeCA9IF9yZWYucmVxdWlyZXNQcmVmaXg7XG5cbiAgaWYgKChhbHRlcm5hdGl2ZVByb3BzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSB8fCBwcm9wZXJ0eSA9PT0gJ2Rpc3BsYXknICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5kZXhPZignZmxleCcpID4gLTEpICYmIChicm93c2VyTmFtZSA9PT0gJ2llX21vYicgfHwgYnJvd3Nlck5hbWUgPT09ICdpZScpICYmIGJyb3dzZXJWZXJzaW9uID09PSAxMCkge1xuICAgIGRlbGV0ZSByZXF1aXJlc1ByZWZpeFtwcm9wZXJ0eV07XG5cbiAgICBpZiAoIWtlZXBVbnByZWZpeGVkICYmICFBcnJheS5pc0FycmF5KHN0eWxlW3Byb3BlcnR5XSkpIHtcbiAgICAgIGRlbGV0ZSBzdHlsZVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2Rpc3BsYXknICYmIGFsdGVybmF0aXZlVmFsdWVzLmhhc093blByb3BlcnR5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICgwLCBfZ2V0UHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkoY3NzUHJlZml4ICsgYWx0ZXJuYXRpdmVWYWx1ZXNbdmFsdWVdLCB2YWx1ZSwga2VlcFVucHJlZml4ZWQpO1xuICAgIH1cbiAgICBpZiAoYWx0ZXJuYXRpdmVQcm9wcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgIHN0eWxlW2FsdGVybmF0aXZlUHJvcHNbcHJvcGVydHldXSA9IGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSB8fCB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGZsZXhib3hPbGQ7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2dldFByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9nZXRQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgYWx0ZXJuYXRpdmVWYWx1ZXMgPSB7XG4gICdzcGFjZS1hcm91bmQnOiAnanVzdGlmeScsXG4gICdzcGFjZS1iZXR3ZWVuJzogJ2p1c3RpZnknLFxuICAnZmxleC1zdGFydCc6ICdzdGFydCcsXG4gICdmbGV4LWVuZCc6ICdlbmQnLFxuICAnd3JhcC1yZXZlcnNlJzogJ211bHRpcGxlJyxcbiAgd3JhcDogJ211bHRpcGxlJyxcbiAgZmxleDogJ2JveCcsXG4gICdpbmxpbmUtZmxleCc6ICdpbmxpbmUtYm94J1xufTtcblxuXG52YXIgYWx0ZXJuYXRpdmVQcm9wcyA9IHtcbiAgYWxpZ25JdGVtczogJ1dlYmtpdEJveEFsaWduJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdXZWJraXRCb3hQYWNrJyxcbiAgZmxleFdyYXA6ICdXZWJraXRCb3hMaW5lcycsXG4gIGZsZXhHcm93OiAnV2Via2l0Qm94RmxleCdcbn07XG5cbnZhciBvdGhlclByb3BzID0gWydhbGlnbkNvbnRlbnQnLCAnYWxpZ25TZWxmJywgJ29yZGVyJywgJ2ZsZXhHcm93JywgJ2ZsZXhTaHJpbmsnLCAnZmxleEJhc2lzJywgJ2ZsZXhEaXJlY3Rpb24nXTtcbnZhciBwcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMoYWx0ZXJuYXRpdmVQcm9wcykuY29uY2F0KG90aGVyUHJvcHMpO1xuXG5mdW5jdGlvbiBmbGV4Ym94T2xkKHByb3BlcnR5LCB2YWx1ZSwgc3R5bGUsIF9yZWYpIHtcbiAgdmFyIGJyb3dzZXJOYW1lID0gX3JlZi5icm93c2VyTmFtZSxcbiAgICAgIGJyb3dzZXJWZXJzaW9uID0gX3JlZi5icm93c2VyVmVyc2lvbixcbiAgICAgIGNzc1ByZWZpeCA9IF9yZWYuY3NzUHJlZml4LFxuICAgICAga2VlcFVucHJlZml4ZWQgPSBfcmVmLmtlZXBVbnByZWZpeGVkLFxuICAgICAgcmVxdWlyZXNQcmVmaXggPSBfcmVmLnJlcXVpcmVzUHJlZml4O1xuXG4gIGlmICgocHJvcGVydGllcy5pbmRleE9mKHByb3BlcnR5KSA+IC0xIHx8IHByb3BlcnR5ID09PSAnZGlzcGxheScgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5pbmRleE9mKCdmbGV4JykgPiAtMSkgJiYgKGJyb3dzZXJOYW1lID09PSAnZmlyZWZveCcgJiYgYnJvd3NlclZlcnNpb24gPCAyMiB8fCBicm93c2VyTmFtZSA9PT0gJ2Nocm9tZScgJiYgYnJvd3NlclZlcnNpb24gPCAyMSB8fCAoYnJvd3Nlck5hbWUgPT09ICdzYWZhcmknIHx8IGJyb3dzZXJOYW1lID09PSAnaW9zX3NhZicpICYmIGJyb3dzZXJWZXJzaW9uIDw9IDYuMSB8fCBicm93c2VyTmFtZSA9PT0gJ2FuZHJvaWQnICYmIGJyb3dzZXJWZXJzaW9uIDwgNC40IHx8IGJyb3dzZXJOYW1lID09PSAnYW5kX3VjJykpIHtcbiAgICBkZWxldGUgcmVxdWlyZXNQcmVmaXhbcHJvcGVydHldO1xuXG4gICAgaWYgKCFrZWVwVW5wcmVmaXhlZCAmJiAhQXJyYXkuaXNBcnJheShzdHlsZVtwcm9wZXJ0eV0pKSB7XG4gICAgICBkZWxldGUgc3R5bGVbcHJvcGVydHldO1xuICAgIH1cbiAgICBpZiAocHJvcGVydHkgPT09ICdmbGV4RGlyZWN0aW9uJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodmFsdWUuaW5kZXhPZignY29sdW1uJykgPiAtMSkge1xuICAgICAgICBzdHlsZS5XZWJraXRCb3hPcmllbnQgPSAndmVydGljYWwnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGUuV2Via2l0Qm94T3JpZW50ID0gJ2hvcml6b250YWwnO1xuICAgICAgfVxuICAgICAgaWYgKHZhbHVlLmluZGV4T2YoJ3JldmVyc2UnKSA+IC0xKSB7XG4gICAgICAgIHN0eWxlLldlYmtpdEJveERpcmVjdGlvbiA9ICdyZXZlcnNlJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlLldlYmtpdEJveERpcmVjdGlvbiA9ICdub3JtYWwnO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJvcGVydHkgPT09ICdkaXNwbGF5JyAmJiBhbHRlcm5hdGl2ZVZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAoMCwgX2dldFByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKGNzc1ByZWZpeCArIGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSwgdmFsdWUsIGtlZXBVbnByZWZpeGVkKTtcbiAgICB9XG4gICAgaWYgKGFsdGVybmF0aXZlUHJvcHMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICBzdHlsZVthbHRlcm5hdGl2ZVByb3BzW3Byb3BlcnR5XV0gPSBhbHRlcm5hdGl2ZVZhbHVlc1t2YWx1ZV0gfHwgdmFsdWU7XG4gICAgfVxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBncmFkaWVudDtcblxudmFyIF9nZXRQcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZ2V0UHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJlZml4ZWRWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB2YWx1ZXMgPSAvbGluZWFyLWdyYWRpZW50fHJhZGlhbC1ncmFkaWVudHxyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50fHJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQvZ2k7XG5mdW5jdGlvbiBncmFkaWVudChwcm9wZXJ0eSwgdmFsdWUsIHN0eWxlLCBfcmVmKSB7XG4gIHZhciBicm93c2VyTmFtZSA9IF9yZWYuYnJvd3Nlck5hbWUsXG4gICAgICBicm93c2VyVmVyc2lvbiA9IF9yZWYuYnJvd3NlclZlcnNpb24sXG4gICAgICBjc3NQcmVmaXggPSBfcmVmLmNzc1ByZWZpeCxcbiAgICAgIGtlZXBVbnByZWZpeGVkID0gX3JlZi5rZWVwVW5wcmVmaXhlZDtcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZXMudGVzdCh2YWx1ZSkgJiYgKGJyb3dzZXJOYW1lID09PSAnZmlyZWZveCcgJiYgYnJvd3NlclZlcnNpb24gPCAxNiB8fCBicm93c2VyTmFtZSA9PT0gJ2Nocm9tZScgJiYgYnJvd3NlclZlcnNpb24gPCAyNiB8fCAoYnJvd3Nlck5hbWUgPT09ICdzYWZhcmknIHx8IGJyb3dzZXJOYW1lID09PSAnaW9zX3NhZicpICYmIGJyb3dzZXJWZXJzaW9uIDwgNyB8fCAoYnJvd3Nlck5hbWUgPT09ICdvcGVyYScgfHwgYnJvd3Nlck5hbWUgPT09ICdvcF9taW5pJykgJiYgYnJvd3NlclZlcnNpb24gPCAxMi4xIHx8IGJyb3dzZXJOYW1lID09PSAnYW5kcm9pZCcgJiYgYnJvd3NlclZlcnNpb24gPCA0LjQgfHwgYnJvd3Nlck5hbWUgPT09ICdhbmRfdWMnKSkge1xuICAgIHJldHVybiAoMCwgX2dldFByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHZhbHVlLnJlcGxhY2UodmFsdWVzLCBmdW5jdGlvbiAoZ3JhZCkge1xuICAgICAgcmV0dXJuIGNzc1ByZWZpeCArIGdyYWQ7XG4gICAgfSksIHZhbHVlLCBrZWVwVW5wcmVmaXhlZCk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGltYWdlU2V0O1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9nZXRQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaW1hZ2VTZXQocHJvcGVydHksIHZhbHVlLCBzdHlsZSwgX3JlZikge1xuICB2YXIgYnJvd3Nlck5hbWUgPSBfcmVmLmJyb3dzZXJOYW1lLFxuICAgICAgY3NzUHJlZml4ID0gX3JlZi5jc3NQcmVmaXgsXG4gICAgICBrZWVwVW5wcmVmaXhlZCA9IF9yZWYua2VlcFVucHJlZml4ZWQ7XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5kZXhPZignaW1hZ2Utc2V0KCcpID4gLTEgJiYgKGJyb3dzZXJOYW1lID09PSAnY2hyb21lJyB8fCBicm93c2VyTmFtZSA9PT0gJ29wZXJhJyB8fCBicm93c2VyTmFtZSA9PT0gJ2FuZF9jaHInIHx8IGJyb3dzZXJOYW1lID09PSAnYW5kX3VjJyB8fCBicm93c2VyTmFtZSA9PT0gJ2lvc19zYWYnIHx8IGJyb3dzZXJOYW1lID09PSAnc2FmYXJpJykpIHtcbiAgICByZXR1cm4gKDAsIF9nZXRQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KSh2YWx1ZS5yZXBsYWNlKC9pbWFnZS1zZXRcXCgvZywgY3NzUHJlZml4ICsgJ2ltYWdlLXNldCgnKSwgdmFsdWUsIGtlZXBVbnByZWZpeGVkKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcG9zaXRpb247XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2dldFByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9nZXRQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBwb3NpdGlvbihwcm9wZXJ0eSwgdmFsdWUsIHN0eWxlLCBfcmVmKSB7XG4gIHZhciBicm93c2VyTmFtZSA9IF9yZWYuYnJvd3Nlck5hbWUsXG4gICAgICBjc3NQcmVmaXggPSBfcmVmLmNzc1ByZWZpeCxcbiAgICAgIGtlZXBVbnByZWZpeGVkID0gX3JlZi5rZWVwVW5wcmVmaXhlZDtcblxuICBpZiAocHJvcGVydHkgPT09ICdwb3NpdGlvbicgJiYgdmFsdWUgPT09ICdzdGlja3knICYmIChicm93c2VyTmFtZSA9PT0gJ3NhZmFyaScgfHwgYnJvd3Nlck5hbWUgPT09ICdpb3Nfc2FmJykpIHtcbiAgICByZXR1cm4gKDAsIF9nZXRQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KShjc3NQcmVmaXggKyB2YWx1ZSwgdmFsdWUsIGtlZXBVbnByZWZpeGVkKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gc2l6aW5nO1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9nZXRQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHByb3BlcnRpZXMgPSB7XG4gIG1heEhlaWdodDogdHJ1ZSxcbiAgbWF4V2lkdGg6IHRydWUsXG4gIHdpZHRoOiB0cnVlLFxuICBoZWlnaHQ6IHRydWUsXG4gIGNvbHVtbldpZHRoOiB0cnVlLFxuICBtaW5XaWR0aDogdHJ1ZSxcbiAgbWluSGVpZ2h0OiB0cnVlXG59O1xuXG52YXIgdmFsdWVzID0ge1xuICAnbWluLWNvbnRlbnQnOiB0cnVlLFxuICAnbWF4LWNvbnRlbnQnOiB0cnVlLFxuICAnZmlsbC1hdmFpbGFibGUnOiB0cnVlLFxuICAnZml0LWNvbnRlbnQnOiB0cnVlLFxuICAnY29udGFpbi1mbG9hdHMnOiB0cnVlXG5cbiAgLy8gVE9ETzogY2hyb21lICYgb3BlcmEgc3VwcG9ydCBpdFxufTtmdW5jdGlvbiBzaXppbmcocHJvcGVydHksIHZhbHVlLCBzdHlsZSwgX3JlZikge1xuICB2YXIgY3NzUHJlZml4ID0gX3JlZi5jc3NQcmVmaXgsXG4gICAgICBrZWVwVW5wcmVmaXhlZCA9IF9yZWYua2VlcFVucHJlZml4ZWQ7XG5cbiAgLy8gVGhpcyBtaWdodCBjaGFuZ2UgaW4gdGhlIGZ1dHVyZVxuICAvLyBLZWVwIGFuIGV5ZSBvbiBpdFxuICBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkgJiYgdmFsdWVzLmhhc093blByb3BlcnR5KHZhbHVlKSkge1xuICAgIHJldHVybiAoMCwgX2dldFByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKGNzc1ByZWZpeCArIHZhbHVlLCB2YWx1ZSwga2VlcFVucHJlZml4ZWQpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB0cmFuc2l0aW9uO1xuXG52YXIgX2h5cGhlbmF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnY3NzLWluLWpzLXV0aWxzL2xpYi9oeXBoZW5hdGVQcm9wZXJ0eScpO1xuXG52YXIgX2h5cGhlbmF0ZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2h5cGhlbmF0ZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHByb3BlcnRpZXMgPSB7XG4gIHRyYW5zaXRpb246IHRydWUsXG4gIHRyYW5zaXRpb25Qcm9wZXJ0eTogdHJ1ZSxcbiAgV2Via2l0VHJhbnNpdGlvbjogdHJ1ZSxcbiAgV2Via2l0VHJhbnNpdGlvblByb3BlcnR5OiB0cnVlLFxuICBNb3pUcmFuc2l0aW9uOiB0cnVlLFxuICBNb3pUcmFuc2l0aW9uUHJvcGVydHk6IHRydWVcbn07XG5cblxudmFyIHJlcXVpcmVzUHJlZml4RGFzaENhc2VkID0gdm9pZCAwO1xuXG5mdW5jdGlvbiB0cmFuc2l0aW9uKHByb3BlcnR5LCB2YWx1ZSwgc3R5bGUsIF9yZWYpIHtcbiAgdmFyIGNzc1ByZWZpeCA9IF9yZWYuY3NzUHJlZml4LFxuICAgICAga2VlcFVucHJlZml4ZWQgPSBfcmVmLmtlZXBVbnByZWZpeGVkLFxuICAgICAgcmVxdWlyZXNQcmVmaXggPSBfcmVmLnJlcXVpcmVzUHJlZml4O1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgLy8gbWVtb2l6ZSB0aGUgcHJlZml4IGFycmF5IGZvciBsYXRlciB1c2VcbiAgICBpZiAoIXJlcXVpcmVzUHJlZml4RGFzaENhc2VkKSB7XG4gICAgICByZXF1aXJlc1ByZWZpeERhc2hDYXNlZCA9IE9iamVjdC5rZXlzKHJlcXVpcmVzUHJlZml4KS5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgcmV0dXJuICgwLCBfaHlwaGVuYXRlUHJvcGVydHkyLmRlZmF1bHQpKHByb3ApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gb25seSBzcGxpdCBtdWx0aSB2YWx1ZXMsIG5vdCBjdWJpYyBiZXppZXJzXG4gICAgdmFyIG11bHRpcGxlVmFsdWVzID0gdmFsdWUuc3BsaXQoLywoPyFbXigpXSooPzpcXChbXigpXSpcXCkpP1xcKSkvZyk7XG5cbiAgICByZXF1aXJlc1ByZWZpeERhc2hDYXNlZC5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICBtdWx0aXBsZVZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGluZGV4KSB7XG4gICAgICAgIGlmICh2YWwuaW5kZXhPZihwcm9wKSA+IC0xICYmIHByb3AgIT09ICdvcmRlcicpIHtcbiAgICAgICAgICBtdWx0aXBsZVZhbHVlc1tpbmRleF0gPSB2YWwucmVwbGFjZShwcm9wLCBjc3NQcmVmaXggKyBwcm9wKSArIChrZWVwVW5wcmVmaXhlZCA/ICcsJyArIHZhbCA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbXVsdGlwbGVWYWx1ZXMuam9pbignLCcpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVQcmVmaXhlcjtcblxudmFyIF9wcmVmaXhQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL3V0aWxzL3ByZWZpeFByb3BlcnR5Jyk7XG5cbnZhciBfcHJlZml4UHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4UHJvcGVydHkpO1xuXG52YXIgX3ByZWZpeFZhbHVlID0gcmVxdWlyZSgnLi4vdXRpbHMvcHJlZml4VmFsdWUnKTtcblxudmFyIF9wcmVmaXhWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhWYWx1ZSk7XG5cbnZhciBfYWRkTmV3VmFsdWVzT25seSA9IHJlcXVpcmUoJy4uL3V0aWxzL2FkZE5ld1ZhbHVlc09ubHknKTtcblxudmFyIF9hZGROZXdWYWx1ZXNPbmx5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZE5ld1ZhbHVlc09ubHkpO1xuXG52YXIgX2lzT2JqZWN0ID0gcmVxdWlyZSgnLi4vdXRpbHMvaXNPYmplY3QnKTtcblxudmFyIF9pc09iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc09iamVjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGNyZWF0ZVByZWZpeGVyKF9yZWYpIHtcbiAgdmFyIHByZWZpeE1hcCA9IF9yZWYucHJlZml4TWFwLFxuICAgICAgcGx1Z2lucyA9IF9yZWYucGx1Z2lucztcblxuICBmdW5jdGlvbiBwcmVmaXhBbGwoc3R5bGUpIHtcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBzdHlsZSkge1xuICAgICAgdmFyIHZhbHVlID0gc3R5bGVbcHJvcGVydHldO1xuXG4gICAgICAvLyBoYW5kbGUgbmVzdGVkIG9iamVjdHNcbiAgICAgIGlmICgoMCwgX2lzT2JqZWN0Mi5kZWZhdWx0KSh2YWx1ZSkpIHtcbiAgICAgICAgc3R5bGVbcHJvcGVydHldID0gcHJlZml4QWxsKHZhbHVlKTtcbiAgICAgICAgLy8gaGFuZGxlIGFycmF5IHZhbHVlc1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YXIgY29tYmluZWRWYWx1ZSA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgIHZhciBwcm9jZXNzZWRWYWx1ZSA9ICgwLCBfcHJlZml4VmFsdWUyLmRlZmF1bHQpKHBsdWdpbnMsIHByb3BlcnR5LCB2YWx1ZVtpXSwgc3R5bGUsIHByZWZpeE1hcCk7XG4gICAgICAgICAgKDAsIF9hZGROZXdWYWx1ZXNPbmx5Mi5kZWZhdWx0KShjb21iaW5lZFZhbHVlLCBwcm9jZXNzZWRWYWx1ZSB8fCB2YWx1ZVtpXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvbmx5IG1vZGlmeSB0aGUgdmFsdWUgaWYgaXQgd2FzIHRvdWNoZWRcbiAgICAgICAgLy8gYnkgYW55IHBsdWdpbiB0byBwcmV2ZW50IHVubmVjZXNzYXJ5IG11dGF0aW9uc1xuICAgICAgICBpZiAoY29tYmluZWRWYWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3R5bGVbcHJvcGVydHldID0gY29tYmluZWRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIF9wcm9jZXNzZWRWYWx1ZSA9ICgwLCBfcHJlZml4VmFsdWUyLmRlZmF1bHQpKHBsdWdpbnMsIHByb3BlcnR5LCB2YWx1ZSwgc3R5bGUsIHByZWZpeE1hcCk7XG5cbiAgICAgICAgLy8gb25seSBtb2RpZnkgdGhlIHZhbHVlIGlmIGl0IHdhcyB0b3VjaGVkXG4gICAgICAgIC8vIGJ5IGFueSBwbHVnaW4gdG8gcHJldmVudCB1bm5lY2Vzc2FyeSBtdXRhdGlvbnNcbiAgICAgICAgaWYgKF9wcm9jZXNzZWRWYWx1ZSkge1xuICAgICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9IF9wcm9jZXNzZWRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0eWxlID0gKDAsIF9wcmVmaXhQcm9wZXJ0eTIuZGVmYXVsdCkocHJlZml4TWFwLCBwcm9wZXJ0eSwgc3R5bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIHJldHVybiBwcmVmaXhBbGw7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjYWxjO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJ2Nzcy1pbi1qcy11dGlscy9saWIvaXNQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUHJlZml4ZWRWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBwcmVmaXhlcyA9IFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnJ107XG5mdW5jdGlvbiBjYWxjKHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhKDAsIF9pc1ByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHZhbHVlKSAmJiB2YWx1ZS5pbmRleE9mKCdjYWxjKCcpID4gLTEpIHtcbiAgICByZXR1cm4gcHJlZml4ZXMubWFwKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9jYWxjXFwoL2csIHByZWZpeCArICdjYWxjKCcpO1xuICAgIH0pO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjcm9zc0ZhZGU7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnY3NzLWluLWpzLXV0aWxzL2xpYi9pc1ByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gaHR0cDovL2Nhbml1c2UuY29tLyNzZWFyY2g9Y3Jvc3MtZmFkZVxudmFyIHByZWZpeGVzID0gWyctd2Via2l0LScsICcnXTtcbmZ1bmN0aW9uIGNyb3NzRmFkZShwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgISgwLCBfaXNQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KSh2YWx1ZSkgJiYgdmFsdWUuaW5kZXhPZignY3Jvc3MtZmFkZSgnKSA+IC0xKSB7XG4gICAgcmV0dXJuIHByZWZpeGVzLm1hcChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvY3Jvc3MtZmFkZVxcKC9nLCBwcmVmaXggKyAnY3Jvc3MtZmFkZSgnKTtcbiAgICB9KTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3Vyc29yO1xudmFyIHByZWZpeGVzID0gWyctd2Via2l0LScsICctbW96LScsICcnXTtcblxudmFyIHZhbHVlcyA9IHtcbiAgJ3pvb20taW4nOiB0cnVlLFxuICAnem9vbS1vdXQnOiB0cnVlLFxuICBncmFiOiB0cnVlLFxuICBncmFiYmluZzogdHJ1ZVxufTtcblxuZnVuY3Rpb24gY3Vyc29yKHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAocHJvcGVydHkgPT09ICdjdXJzb3InICYmIHZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gcHJlZml4ZXMubWFwKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgIHJldHVybiBwcmVmaXggKyB2YWx1ZTtcbiAgICB9KTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZmlsdGVyO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJ2Nzcy1pbi1qcy11dGlscy9saWIvaXNQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUHJlZml4ZWRWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIGh0dHA6Ly9jYW5pdXNlLmNvbS8jZmVhdD1jc3MtZmlsdGVyLWZ1bmN0aW9uXG52YXIgcHJlZml4ZXMgPSBbJy13ZWJraXQtJywgJyddO1xuZnVuY3Rpb24gZmlsdGVyKHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhKDAsIF9pc1ByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHZhbHVlKSAmJiB2YWx1ZS5pbmRleE9mKCdmaWx0ZXIoJykgPiAtMSkge1xuICAgIHJldHVybiBwcmVmaXhlcy5tYXAoZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL2ZpbHRlclxcKC9nLCBwcmVmaXggKyAnZmlsdGVyKCcpO1xuICAgIH0pO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmbGV4O1xudmFyIHZhbHVlcyA9IHtcbiAgZmxleDogWyctd2Via2l0LWJveCcsICctbW96LWJveCcsICctbXMtZmxleGJveCcsICctd2Via2l0LWZsZXgnLCAnZmxleCddLFxuICAnaW5saW5lLWZsZXgnOiBbJy13ZWJraXQtaW5saW5lLWJveCcsICctbW96LWlubGluZS1ib3gnLCAnLW1zLWlubGluZS1mbGV4Ym94JywgJy13ZWJraXQtaW5saW5lLWZsZXgnLCAnaW5saW5lLWZsZXgnXVxufTtcblxuZnVuY3Rpb24gZmxleChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHByb3BlcnR5ID09PSAnZGlzcGxheScgJiYgdmFsdWVzLmhhc093blByb3BlcnR5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZXNbdmFsdWVdO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmbGV4Ym94SUU7XG52YXIgYWx0ZXJuYXRpdmVWYWx1ZXMgPSB7XG4gICdzcGFjZS1hcm91bmQnOiAnZGlzdHJpYnV0ZScsXG4gICdzcGFjZS1iZXR3ZWVuJzogJ2p1c3RpZnknLFxuICAnZmxleC1zdGFydCc6ICdzdGFydCcsXG4gICdmbGV4LWVuZCc6ICdlbmQnXG59O1xudmFyIGFsdGVybmF0aXZlUHJvcHMgPSB7XG4gIGFsaWduQ29udGVudDogJ21zRmxleExpbmVQYWNrJyxcbiAgYWxpZ25TZWxmOiAnbXNGbGV4SXRlbUFsaWduJyxcbiAgYWxpZ25JdGVtczogJ21zRmxleEFsaWduJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdtc0ZsZXhQYWNrJyxcbiAgb3JkZXI6ICdtc0ZsZXhPcmRlcicsXG4gIGZsZXhHcm93OiAnbXNGbGV4UG9zaXRpdmUnLFxuICBmbGV4U2hyaW5rOiAnbXNGbGV4TmVnYXRpdmUnLFxuICBmbGV4QmFzaXM6ICdtc0ZsZXhQcmVmZXJyZWRTaXplJ1xufTtcblxuZnVuY3Rpb24gZmxleGJveElFKHByb3BlcnR5LCB2YWx1ZSwgc3R5bGUpIHtcbiAgaWYgKGFsdGVybmF0aXZlUHJvcHMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgc3R5bGVbYWx0ZXJuYXRpdmVQcm9wc1twcm9wZXJ0eV1dID0gYWx0ZXJuYXRpdmVWYWx1ZXNbdmFsdWVdIHx8IHZhbHVlO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmbGV4Ym94T2xkO1xudmFyIGFsdGVybmF0aXZlVmFsdWVzID0ge1xuICAnc3BhY2UtYXJvdW5kJzogJ2p1c3RpZnknLFxuICAnc3BhY2UtYmV0d2Vlbic6ICdqdXN0aWZ5JyxcbiAgJ2ZsZXgtc3RhcnQnOiAnc3RhcnQnLFxuICAnZmxleC1lbmQnOiAnZW5kJyxcbiAgJ3dyYXAtcmV2ZXJzZSc6ICdtdWx0aXBsZScsXG4gIHdyYXA6ICdtdWx0aXBsZScsXG4gIGZsZXg6ICdib3gnLFxuICAnaW5saW5lLWZsZXgnOiAnaW5saW5lLWJveCdcbn07XG5cbnZhciBhbHRlcm5hdGl2ZVByb3BzID0ge1xuICBhbGlnbkl0ZW1zOiAnV2Via2l0Qm94QWxpZ24nLFxuICBqdXN0aWZ5Q29udGVudDogJ1dlYmtpdEJveFBhY2snLFxuICBmbGV4V3JhcDogJ1dlYmtpdEJveExpbmVzJyxcbiAgZmxleEdyb3c6ICdXZWJraXRCb3hGbGV4J1xufTtcblxuZnVuY3Rpb24gZmxleGJveE9sZChwcm9wZXJ0eSwgdmFsdWUsIHN0eWxlKSB7XG4gIGlmIChwcm9wZXJ0eSA9PT0gJ2ZsZXhEaXJlY3Rpb24nICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodmFsdWUuaW5kZXhPZignY29sdW1uJykgPiAtMSkge1xuICAgICAgc3R5bGUuV2Via2l0Qm94T3JpZW50ID0gJ3ZlcnRpY2FsJztcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuV2Via2l0Qm94T3JpZW50ID0gJ2hvcml6b250YWwnO1xuICAgIH1cbiAgICBpZiAodmFsdWUuaW5kZXhPZigncmV2ZXJzZScpID4gLTEpIHtcbiAgICAgIHN0eWxlLldlYmtpdEJveERpcmVjdGlvbiA9ICdyZXZlcnNlJztcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuV2Via2l0Qm94RGlyZWN0aW9uID0gJ25vcm1hbCc7XG4gICAgfVxuICB9XG4gIGlmIChhbHRlcm5hdGl2ZVByb3BzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgIHN0eWxlW2FsdGVybmF0aXZlUHJvcHNbcHJvcGVydHldXSA9IGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSB8fCB2YWx1ZTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ3JhZGllbnQ7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnY3NzLWluLWpzLXV0aWxzL2xpYi9pc1ByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHByZWZpeGVzID0gWyctd2Via2l0LScsICctbW96LScsICcnXTtcblxudmFyIHZhbHVlcyA9IC9saW5lYXItZ3JhZGllbnR8cmFkaWFsLWdyYWRpZW50fHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnR8cmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudC9naTtcblxuZnVuY3Rpb24gZ3JhZGllbnQocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICEoMCwgX2lzUHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkodmFsdWUpICYmIHZhbHVlcy50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiBwcmVmaXhlcy5tYXAoZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UodmFsdWVzLCBmdW5jdGlvbiAoZ3JhZCkge1xuICAgICAgICByZXR1cm4gcHJlZml4ICsgZ3JhZDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpbWFnZVNldDtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCdjc3MtaW4tanMtdXRpbHMvbGliL2lzUHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1ByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBodHRwOi8vY2FuaXVzZS5jb20vI2ZlYXQ9Y3NzLWltYWdlLXNldFxudmFyIHByZWZpeGVzID0gWyctd2Via2l0LScsICcnXTtcbmZ1bmN0aW9uIGltYWdlU2V0KHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhKDAsIF9pc1ByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHZhbHVlKSAmJiB2YWx1ZS5pbmRleE9mKCdpbWFnZS1zZXQoJykgPiAtMSkge1xuICAgIHJldHVybiBwcmVmaXhlcy5tYXAoZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL2ltYWdlLXNldFxcKC9nLCBwcmVmaXggKyAnaW1hZ2Utc2V0KCcpO1xuICAgIH0pO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBwb3NpdGlvbjtcbmZ1bmN0aW9uIHBvc2l0aW9uKHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAocHJvcGVydHkgPT09ICdwb3NpdGlvbicgJiYgdmFsdWUgPT09ICdzdGlja3knKSB7XG4gICAgcmV0dXJuIFsnLXdlYmtpdC1zdGlja3knLCAnc3RpY2t5J107XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNpemluZztcbnZhciBwcmVmaXhlcyA9IFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnJ107XG5cbnZhciBwcm9wZXJ0aWVzID0ge1xuICBtYXhIZWlnaHQ6IHRydWUsXG4gIG1heFdpZHRoOiB0cnVlLFxuICB3aWR0aDogdHJ1ZSxcbiAgaGVpZ2h0OiB0cnVlLFxuICBjb2x1bW5XaWR0aDogdHJ1ZSxcbiAgbWluV2lkdGg6IHRydWUsXG4gIG1pbkhlaWdodDogdHJ1ZVxufTtcbnZhciB2YWx1ZXMgPSB7XG4gICdtaW4tY29udGVudCc6IHRydWUsXG4gICdtYXgtY29udGVudCc6IHRydWUsXG4gICdmaWxsLWF2YWlsYWJsZSc6IHRydWUsXG4gICdmaXQtY29udGVudCc6IHRydWUsXG4gICdjb250YWluLWZsb2F0cyc6IHRydWVcbn07XG5cbmZ1bmN0aW9uIHNpemluZyhwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpICYmIHZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gcHJlZml4ZXMubWFwKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgIHJldHVybiBwcmVmaXggKyB2YWx1ZTtcbiAgICB9KTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdHJhbnNpdGlvbjtcblxudmFyIF9oeXBoZW5hdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJ2Nzcy1pbi1qcy11dGlscy9saWIvaHlwaGVuYXRlUHJvcGVydHknKTtcblxudmFyIF9oeXBoZW5hdGVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oeXBoZW5hdGVQcm9wZXJ0eSk7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnY3NzLWluLWpzLXV0aWxzL2xpYi9pc1ByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQcmVmaXhlZFZhbHVlKTtcblxudmFyIF9jYXBpdGFsaXplU3RyaW5nID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvY2FwaXRhbGl6ZVN0cmluZycpO1xuXG52YXIgX2NhcGl0YWxpemVTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FwaXRhbGl6ZVN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBwcm9wZXJ0aWVzID0ge1xuICB0cmFuc2l0aW9uOiB0cnVlLFxuICB0cmFuc2l0aW9uUHJvcGVydHk6IHRydWUsXG4gIFdlYmtpdFRyYW5zaXRpb246IHRydWUsXG4gIFdlYmtpdFRyYW5zaXRpb25Qcm9wZXJ0eTogdHJ1ZSxcbiAgTW96VHJhbnNpdGlvbjogdHJ1ZSxcbiAgTW96VHJhbnNpdGlvblByb3BlcnR5OiB0cnVlXG59O1xuXG5cbnZhciBwcmVmaXhNYXBwaW5nID0ge1xuICBXZWJraXQ6ICctd2Via2l0LScsXG4gIE1vejogJy1tb3otJyxcbiAgbXM6ICctbXMtJ1xufTtcblxuZnVuY3Rpb24gcHJlZml4VmFsdWUodmFsdWUsIHByb3BlcnR5UHJlZml4TWFwKSB7XG4gIGlmICgoMCwgX2lzUHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLy8gb25seSBzcGxpdCBtdWx0aSB2YWx1ZXMsIG5vdCBjdWJpYyBiZXppZXJzXG4gIHZhciBtdWx0aXBsZVZhbHVlcyA9IHZhbHVlLnNwbGl0KC8sKD8hW14oKV0qKD86XFwoW14oKV0qXFwpKT9cXCkpL2cpO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBtdWx0aXBsZVZhbHVlcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciBzaW5nbGVWYWx1ZSA9IG11bHRpcGxlVmFsdWVzW2ldO1xuICAgIHZhciB2YWx1ZXMgPSBbc2luZ2xlVmFsdWVdO1xuICAgIGZvciAodmFyIHByb3BlcnR5IGluIHByb3BlcnR5UHJlZml4TWFwKSB7XG4gICAgICB2YXIgZGFzaENhc2VQcm9wZXJ0eSA9ICgwLCBfaHlwaGVuYXRlUHJvcGVydHkyLmRlZmF1bHQpKHByb3BlcnR5KTtcblxuICAgICAgaWYgKHNpbmdsZVZhbHVlLmluZGV4T2YoZGFzaENhc2VQcm9wZXJ0eSkgPiAtMSAmJiBkYXNoQ2FzZVByb3BlcnR5ICE9PSAnb3JkZXInKSB7XG4gICAgICAgIHZhciBwcmVmaXhlcyA9IHByb3BlcnR5UHJlZml4TWFwW3Byb3BlcnR5XTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIHBMZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGogPCBwTGVuOyArK2opIHtcbiAgICAgICAgICAvLyBqb2luIGFsbCBwcmVmaXhlcyBhbmQgY3JlYXRlIGEgbmV3IHZhbHVlXG4gICAgICAgICAgdmFsdWVzLnVuc2hpZnQoc2luZ2xlVmFsdWUucmVwbGFjZShkYXNoQ2FzZVByb3BlcnR5LCBwcmVmaXhNYXBwaW5nW3ByZWZpeGVzW2pdXSArIGRhc2hDYXNlUHJvcGVydHkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG11bHRpcGxlVmFsdWVzW2ldID0gdmFsdWVzLmpvaW4oJywnKTtcbiAgfVxuXG4gIHJldHVybiBtdWx0aXBsZVZhbHVlcy5qb2luKCcsJyk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb24ocHJvcGVydHksIHZhbHVlLCBzdHlsZSwgcHJvcGVydHlQcmVmaXhNYXApIHtcbiAgLy8gYWxzbyBjaGVjayBmb3IgYWxyZWFkeSBwcmVmaXhlZCB0cmFuc2l0aW9uc1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgIHZhciBvdXRwdXRWYWx1ZSA9IHByZWZpeFZhbHVlKHZhbHVlLCBwcm9wZXJ0eVByZWZpeE1hcCk7XG4gICAgLy8gaWYgdGhlIHByb3BlcnR5IGlzIGFscmVhZHkgcHJlZml4ZWRcbiAgICB2YXIgd2Via2l0T3V0cHV0ID0gb3V0cHV0VmFsdWUuc3BsaXQoLywoPyFbXigpXSooPzpcXChbXigpXSpcXCkpP1xcKSkvZykuZmlsdGVyKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHJldHVybiAhLy1tb3otfC1tcy0vLnRlc3QodmFsKTtcbiAgICB9KS5qb2luKCcsJyk7XG5cbiAgICBpZiAocHJvcGVydHkuaW5kZXhPZignV2Via2l0JykgPiAtMSkge1xuICAgICAgcmV0dXJuIHdlYmtpdE91dHB1dDtcbiAgICB9XG5cbiAgICB2YXIgbW96T3V0cHV0ID0gb3V0cHV0VmFsdWUuc3BsaXQoLywoPyFbXigpXSooPzpcXChbXigpXSpcXCkpP1xcKSkvZykuZmlsdGVyKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHJldHVybiAhLy13ZWJraXQtfC1tcy0vLnRlc3QodmFsKTtcbiAgICB9KS5qb2luKCcsJyk7XG5cbiAgICBpZiAocHJvcGVydHkuaW5kZXhPZignTW96JykgPiAtMSkge1xuICAgICAgcmV0dXJuIG1vek91dHB1dDtcbiAgICB9XG5cbiAgICBzdHlsZVsnV2Via2l0JyArICgwLCBfY2FwaXRhbGl6ZVN0cmluZzIuZGVmYXVsdCkocHJvcGVydHkpXSA9IHdlYmtpdE91dHB1dDtcbiAgICBzdHlsZVsnTW96JyArICgwLCBfY2FwaXRhbGl6ZVN0cmluZzIuZGVmYXVsdCkocHJvcGVydHkpXSA9IG1vek91dHB1dDtcbiAgICByZXR1cm4gb3V0cHV0VmFsdWU7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWRkTmV3VmFsdWVzT25seTtcbmZ1bmN0aW9uIGFkZElmTmV3KGxpc3QsIHZhbHVlKSB7XG4gIGlmIChsaXN0LmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuICAgIGxpc3QucHVzaCh2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkTmV3VmFsdWVzT25seShsaXN0LCB2YWx1ZXMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB2YWx1ZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGFkZElmTmV3KGxpc3QsIHZhbHVlc1tpXSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGFkZElmTmV3KGxpc3QsIHZhbHVlcyk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjYXBpdGFsaXplU3RyaW5nO1xuZnVuY3Rpb24gY2FwaXRhbGl6ZVN0cmluZyhzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0QnJvd3NlckluZm9ybWF0aW9uO1xuXG52YXIgX2Jvd3NlciA9IHJlcXVpcmUoJ2Jvd3NlcicpO1xuXG52YXIgX2Jvd3NlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ib3dzZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHJlZml4QnlCcm93c2VyID0ge1xuICBjaHJvbWU6ICdXZWJraXQnLFxuICBzYWZhcmk6ICdXZWJraXQnLFxuICBpb3M6ICdXZWJraXQnLFxuICBhbmRyb2lkOiAnV2Via2l0JyxcbiAgcGhhbnRvbTogJ1dlYmtpdCcsXG4gIG9wZXJhOiAnV2Via2l0JyxcbiAgd2Vib3M6ICdXZWJraXQnLFxuICBibGFja2JlcnJ5OiAnV2Via2l0JyxcbiAgYmFkYTogJ1dlYmtpdCcsXG4gIHRpemVuOiAnV2Via2l0JyxcbiAgY2hyb21pdW06ICdXZWJraXQnLFxuICB2aXZhbGRpOiAnV2Via2l0JyxcbiAgZmlyZWZveDogJ01veicsXG4gIHNlYW1vbmV5OiAnTW96JyxcbiAgc2FpbGZpc2g6ICdNb3onLFxuICBtc2llOiAnbXMnLFxuICBtc2VkZ2U6ICdtcydcbn07XG5cblxudmFyIGJyb3dzZXJCeUNhbkl1c2VBbGlhcyA9IHtcbiAgY2hyb21lOiAnY2hyb21lJyxcbiAgY2hyb21pdW06ICdjaHJvbWUnLFxuICBzYWZhcmk6ICdzYWZhcmknLFxuICBmaXJmb3g6ICdmaXJlZm94JyxcbiAgbXNlZGdlOiAnZWRnZScsXG4gIG9wZXJhOiAnb3BlcmEnLFxuICB2aXZhbGRpOiAnb3BlcmEnLFxuICBtc2llOiAnaWUnXG59O1xuXG5mdW5jdGlvbiBnZXRCcm93c2VyTmFtZShicm93c2VySW5mbykge1xuICBpZiAoYnJvd3NlckluZm8uZmlyZWZveCkge1xuICAgIHJldHVybiAnZmlyZWZveCc7XG4gIH1cblxuICBpZiAoYnJvd3NlckluZm8ubW9iaWxlIHx8IGJyb3dzZXJJbmZvLnRhYmxldCkge1xuICAgIGlmIChicm93c2VySW5mby5pb3MpIHtcbiAgICAgIHJldHVybiAnaW9zX3NhZic7XG4gICAgfSBlbHNlIGlmIChicm93c2VySW5mby5hbmRyb2lkKSB7XG4gICAgICByZXR1cm4gJ2FuZHJvaWQnO1xuICAgIH0gZWxzZSBpZiAoYnJvd3NlckluZm8ub3BlcmEpIHtcbiAgICAgIHJldHVybiAnb3BfbWluaSc7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgYnJvd3NlciBpbiBicm93c2VyQnlDYW5JdXNlQWxpYXMpIHtcbiAgICBpZiAoYnJvd3NlckluZm8uaGFzT3duUHJvcGVydHkoYnJvd3NlcikpIHtcbiAgICAgIHJldHVybiBicm93c2VyQnlDYW5JdXNlQWxpYXNbYnJvd3Nlcl07XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVXNlcyBib3dzZXIgdG8gZ2V0IGRlZmF1bHQgYnJvd3NlciBicm93c2VySW5mb3JtYXRpb24gc3VjaCBhcyB2ZXJzaW9uIGFuZCBuYW1lXG4gKiBFdmFsdWF0ZXMgYm93c2VyIGJyb3dzZXJJbmZvIGFuZCBhZGRzIHZlbmRvclByZWZpeCBicm93c2VySW5mb3JtYXRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSB1c2VyQWdlbnQgLSB1c2VyQWdlbnQgdGhhdCBnZXRzIGV2YWx1YXRlZFxuICovXG5mdW5jdGlvbiBnZXRCcm93c2VySW5mb3JtYXRpb24odXNlckFnZW50KSB7XG4gIHZhciBicm93c2VySW5mbyA9IF9ib3dzZXIyLmRlZmF1bHQuX2RldGVjdCh1c2VyQWdlbnQpO1xuXG4gIGlmIChicm93c2VySW5mby55YW5kZXhicm93c2VyKSB7XG4gICAgYnJvd3NlckluZm8gPSBfYm93c2VyMi5kZWZhdWx0Ll9kZXRlY3QodXNlckFnZW50LnJlcGxhY2UoL1lhQnJvd3NlclxcL1swLTkuXSovLCAnJykpO1xuICB9XG5cbiAgZm9yICh2YXIgYnJvd3NlciBpbiBwcmVmaXhCeUJyb3dzZXIpIHtcbiAgICBpZiAoYnJvd3NlckluZm8uaGFzT3duUHJvcGVydHkoYnJvd3NlcikpIHtcbiAgICAgIHZhciBwcmVmaXggPSBwcmVmaXhCeUJyb3dzZXJbYnJvd3Nlcl07XG5cbiAgICAgIGJyb3dzZXJJbmZvLmpzUHJlZml4ID0gcHJlZml4O1xuICAgICAgYnJvd3NlckluZm8uY3NzUHJlZml4ID0gJy0nICsgcHJlZml4LnRvTG93ZXJDYXNlKCkgKyAnLSc7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBicm93c2VySW5mby5icm93c2VyTmFtZSA9IGdldEJyb3dzZXJOYW1lKGJyb3dzZXJJbmZvKTtcblxuICAvLyBGb3IgY29yZG92YSBJT1MgOCB0aGUgdmVyc2lvbiBpcyBtaXNzaW5nLCBzZXQgdHJ1bmNhdGVkIG9zdmVyc2lvbiB0byBwcmV2ZW50IE5hTlxuICBpZiAoYnJvd3NlckluZm8udmVyc2lvbikge1xuICAgIGJyb3dzZXJJbmZvLmJyb3dzZXJWZXJzaW9uID0gcGFyc2VGbG9hdChicm93c2VySW5mby52ZXJzaW9uKTtcbiAgfSBlbHNlIHtcbiAgICBicm93c2VySW5mby5icm93c2VyVmVyc2lvbiA9IHBhcnNlSW50KHBhcnNlRmxvYXQoYnJvd3NlckluZm8ub3N2ZXJzaW9uKSwgMTApO1xuICB9XG5cbiAgYnJvd3NlckluZm8ub3NWZXJzaW9uID0gcGFyc2VGbG9hdChicm93c2VySW5mby5vc3ZlcnNpb24pO1xuXG4gIC8vIGlPUyBmb3JjZXMgYWxsIGJyb3dzZXJzIHRvIHVzZSBTYWZhcmkgdW5kZXIgdGhlIGhvb2RcbiAgLy8gYXMgdGhlIFNhZmFyaSB2ZXJzaW9uIHNlZW1zIHRvIG1hdGNoIHRoZSBpT1MgdmVyc2lvblxuICAvLyB3ZSBqdXN0IGV4cGxpY2l0ZWx5IHVzZSB0aGUgb3N2ZXJzaW9uIGluc3RlYWRcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JvZnJpc2NobWFubi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvaXNzdWVzLzcyXG4gIGlmIChicm93c2VySW5mby5icm93c2VyTmFtZSA9PT0gJ2lvc19zYWYnICYmIGJyb3dzZXJJbmZvLmJyb3dzZXJWZXJzaW9uID4gYnJvd3NlckluZm8ub3NWZXJzaW9uKSB7XG4gICAgYnJvd3NlckluZm8uYnJvd3NlclZlcnNpb24gPSBicm93c2VySW5mby5vc1ZlcnNpb247XG4gIH1cblxuICAvLyBzZXBlcmF0ZSBuYXRpdmUgYW5kcm9pZCBjaHJvbWVcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JvZnJpc2NobWFubi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvaXNzdWVzLzQ1XG4gIGlmIChicm93c2VySW5mby5icm93c2VyTmFtZSA9PT0gJ2FuZHJvaWQnICYmIGJyb3dzZXJJbmZvLmNocm9tZSAmJiBicm93c2VySW5mby5icm93c2VyVmVyc2lvbiA+IDM3KSB7XG4gICAgYnJvd3NlckluZm8uYnJvd3Nlck5hbWUgPSAnYW5kX2Nocic7XG4gIH1cblxuICAvLyBGb3IgYW5kcm9pZCA8IDQuNCB3ZSB3YW50IHRvIGNoZWNrIHRoZSBvc3ZlcnNpb25cbiAgLy8gbm90IHRoZSBjaHJvbWUgdmVyc2lvbiwgc2VlIGlzc3VlICMyNlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vcm9mcmlzY2htYW5uL2lubGluZS1zdHlsZS1wcmVmaXhlci9pc3N1ZXMvMjZcbiAgaWYgKGJyb3dzZXJJbmZvLmJyb3dzZXJOYW1lID09PSAnYW5kcm9pZCcgJiYgYnJvd3NlckluZm8ub3NWZXJzaW9uIDwgNSkge1xuICAgIGJyb3dzZXJJbmZvLmJyb3dzZXJWZXJzaW9uID0gYnJvd3NlckluZm8ub3NWZXJzaW9uO1xuICB9XG5cbiAgLy8gU2Ftc3VuZyBicm93c2VyIGFyZSBiYXNpY2FsbHkgYnVpbGQgb24gQ2hyb21lID4gNDRcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JvZnJpc2NobWFubi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvaXNzdWVzLzEwMlxuICBpZiAoYnJvd3NlckluZm8uYnJvd3Nlck5hbWUgPT09ICdhbmRyb2lkJyAmJiBicm93c2VySW5mby5zYW1zdW5nQnJvd3Nlcikge1xuICAgIGJyb3dzZXJJbmZvLmJyb3dzZXJOYW1lID0gJ2FuZF9jaHInO1xuICAgIGJyb3dzZXJJbmZvLmJyb3dzZXJWZXJzaW9uID0gNDQ7XG4gIH1cblxuICByZXR1cm4gYnJvd3NlckluZm87XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBnZXRQcmVmaXhlZEtleWZyYW1lcztcbmZ1bmN0aW9uIGdldFByZWZpeGVkS2V5ZnJhbWVzKGJyb3dzZXJOYW1lLCBicm93c2VyVmVyc2lvbiwgY3NzUHJlZml4KSB7XG4gIHZhciBwcmVmaXhlZEtleWZyYW1lcyA9ICdrZXlmcmFtZXMnO1xuXG4gIGlmIChicm93c2VyTmFtZSA9PT0gJ2Nocm9tZScgJiYgYnJvd3NlclZlcnNpb24gPCA0MyB8fCAoYnJvd3Nlck5hbWUgPT09ICdzYWZhcmknIHx8IGJyb3dzZXJOYW1lID09PSAnaW9zX3NhZicpICYmIGJyb3dzZXJWZXJzaW9uIDwgOSB8fCBicm93c2VyTmFtZSA9PT0gJ29wZXJhJyAmJiBicm93c2VyVmVyc2lvbiA8IDMwIHx8IGJyb3dzZXJOYW1lID09PSAnYW5kcm9pZCcgJiYgYnJvd3NlclZlcnNpb24gPD0gNC40IHx8IGJyb3dzZXJOYW1lID09PSAnYW5kX3VjJykge1xuICAgIHJldHVybiBjc3NQcmVmaXggKyBwcmVmaXhlZEtleWZyYW1lcztcbiAgfVxuICByZXR1cm4gcHJlZml4ZWRLZXlmcmFtZXM7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdldFByZWZpeGVkVmFsdWU7XG5mdW5jdGlvbiBnZXRQcmVmaXhlZFZhbHVlKHByZWZpeGVkVmFsdWUsIHZhbHVlLCBrZWVwVW5wcmVmaXhlZCkge1xuICBpZiAoa2VlcFVucHJlZml4ZWQpIHtcbiAgICByZXR1cm4gW3ByZWZpeGVkVmFsdWUsIHZhbHVlXTtcbiAgfVxuICByZXR1cm4gcHJlZml4ZWRWYWx1ZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc09iamVjdDtcbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHByZWZpeFByb3BlcnR5O1xuXG52YXIgX2NhcGl0YWxpemVTdHJpbmcgPSByZXF1aXJlKCcuL2NhcGl0YWxpemVTdHJpbmcnKTtcblxudmFyIF9jYXBpdGFsaXplU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhcGl0YWxpemVTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBwcmVmaXhQcm9wZXJ0eShwcmVmaXhQcm9wZXJ0aWVzLCBwcm9wZXJ0eSwgc3R5bGUpIHtcbiAgaWYgKHByZWZpeFByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgdmFyIG5ld1N0eWxlID0ge307XG4gICAgdmFyIHJlcXVpcmVkUHJlZml4ZXMgPSBwcmVmaXhQcm9wZXJ0aWVzW3Byb3BlcnR5XTtcbiAgICB2YXIgY2FwaXRhbGl6ZWRQcm9wZXJ0eSA9ICgwLCBfY2FwaXRhbGl6ZVN0cmluZzIuZGVmYXVsdCkocHJvcGVydHkpO1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoc3R5bGUpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHN0eWxlUHJvcGVydHkgPSBrZXlzW2ldO1xuICAgICAgaWYgKHN0eWxlUHJvcGVydHkgPT09IHByb3BlcnR5KSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVxdWlyZWRQcmVmaXhlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIG5ld1N0eWxlW3JlcXVpcmVkUHJlZml4ZXNbal0gKyBjYXBpdGFsaXplZFByb3BlcnR5XSA9IHN0eWxlW3Byb3BlcnR5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbmV3U3R5bGVbc3R5bGVQcm9wZXJ0eV0gPSBzdHlsZVtzdHlsZVByb3BlcnR5XTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1N0eWxlO1xuICB9XG4gIHJldHVybiBzdHlsZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcHJlZml4VmFsdWU7XG5mdW5jdGlvbiBwcmVmaXhWYWx1ZShwbHVnaW5zLCBwcm9wZXJ0eSwgdmFsdWUsIHN0eWxlLCBtZXRhRGF0YSkge1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGx1Z2lucy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciBwcm9jZXNzZWRWYWx1ZSA9IHBsdWdpbnNbaV0ocHJvcGVydHksIHZhbHVlLCBzdHlsZSwgbWV0YURhdGEpO1xuXG4gICAgLy8gd2UgY2FuIHN0b3AgcHJvY2Vzc2luZyBpZiBhIHZhbHVlIGlzIHJldHVybmVkXG4gICAgLy8gYXMgYWxsIHBsdWdpbiBjcml0ZXJpYSBhcmUgdW5pcXVlXG4gICAgaWYgKHByb2Nlc3NlZFZhbHVlKSB7XG4gICAgICByZXR1cm4gcHJvY2Vzc2VkVmFsdWU7XG4gICAgfVxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsImltcG9ydCBhcHBlbmRQeElmTmVlZGVkIGZyb20gJy4vYXBwZW5kLXB4LWlmLW5lZWRlZCc7XG5pbXBvcnQgbWFwT2JqZWN0IGZyb20gJy4vbWFwLW9iamVjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBlbmRJbXBvcnRhbnRUb0VhY2hWYWx1ZShzdHlsZSkge1xuICByZXR1cm4gbWFwT2JqZWN0KHN0eWxlLCBmdW5jdGlvbiAocmVzdWx0LCBrZXkpIHtcbiAgICByZXR1cm4gYXBwZW5kUHhJZk5lZWRlZChrZXksIHN0eWxlW2tleV0pICsgJyAhaW1wb3J0YW50JztcbiAgfSk7XG59IiwiLy8gQ29waWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvXG4vLyBiODdhYWJkZmUxYjc0NjFlNzMzMWFiYjM2MDFkOWU2YmIyNzU0NGJjL1xuLy8gcGFja2FnZXMvcmVhY3QtZG9tL3NyYy9zaGFyZWQvQ1NTUHJvcGVydHkuanNcbnZhciBpc1VuaXRsZXNzTnVtYmVyID0ge1xuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogdHJ1ZSxcbiAgYm9yZGVySW1hZ2VPdXRzZXQ6IHRydWUsXG4gIGJvcmRlckltYWdlU2xpY2U6IHRydWUsXG4gIGJvcmRlckltYWdlV2lkdGg6IHRydWUsXG4gIGJveEZsZXg6IHRydWUsXG4gIGJveEZsZXhHcm91cDogdHJ1ZSxcbiAgYm94T3JkaW5hbEdyb3VwOiB0cnVlLFxuICBjb2x1bW5Db3VudDogdHJ1ZSxcbiAgY29sdW1uczogdHJ1ZSxcbiAgZmxleDogdHJ1ZSxcbiAgZmxleEdyb3c6IHRydWUsXG4gIGZsZXhQb3NpdGl2ZTogdHJ1ZSxcbiAgZmxleFNocmluazogdHJ1ZSxcbiAgZmxleE5lZ2F0aXZlOiB0cnVlLFxuICBmbGV4T3JkZXI6IHRydWUsXG4gIGdyaWRBcmVhOiB0cnVlLFxuICBncmlkUm93OiB0cnVlLFxuICBncmlkUm93RW5kOiB0cnVlLFxuICBncmlkUm93U3BhbjogdHJ1ZSxcbiAgZ3JpZFJvd1N0YXJ0OiB0cnVlLFxuICBncmlkQ29sdW1uOiB0cnVlLFxuICBncmlkQ29sdW1uRW5kOiB0cnVlLFxuICBncmlkQ29sdW1uU3BhbjogdHJ1ZSxcbiAgZ3JpZENvbHVtblN0YXJ0OiB0cnVlLFxuICBmb250V2VpZ2h0OiB0cnVlLFxuICBsaW5lQ2xhbXA6IHRydWUsXG4gIGxpbmVIZWlnaHQ6IHRydWUsXG4gIG9wYWNpdHk6IHRydWUsXG4gIG9yZGVyOiB0cnVlLFxuICBvcnBoYW5zOiB0cnVlLFxuICB0YWJTaXplOiB0cnVlLFxuICB3aWRvd3M6IHRydWUsXG4gIHpJbmRleDogdHJ1ZSxcbiAgem9vbTogdHJ1ZSxcbiAgLy8gU1ZHLXJlbGF0ZWQgcHJvcGVydGllc1xuICBmaWxsT3BhY2l0eTogdHJ1ZSxcbiAgZmxvb2RPcGFjaXR5OiB0cnVlLFxuICBzdG9wT3BhY2l0eTogdHJ1ZSxcbiAgc3Ryb2tlRGFzaGFycmF5OiB0cnVlLFxuICBzdHJva2VEYXNob2Zmc2V0OiB0cnVlLFxuICBzdHJva2VNaXRlcmxpbWl0OiB0cnVlLFxuICBzdHJva2VPcGFjaXR5OiB0cnVlLFxuICBzdHJva2VXaWR0aDogdHJ1ZVxufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGVuZFB4SWZOZWVkZWQocHJvcGVydHlOYW1lLCB2YWx1ZSkge1xuICB2YXIgbmVlZHNQeFN1ZmZpeCA9ICFpc1VuaXRsZXNzTnVtYmVyW3Byb3BlcnR5TmFtZV0gJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSAhPT0gMDtcbiAgcmV0dXJuIG5lZWRzUHhTdWZmaXggPyB2YWx1ZSArICdweCcgOiB2YWx1ZTtcbn0iLCJ2YXIgX2NhbWVsQ2FzZVJlZ2V4ID0gLyhbYS16XSk/KFtBLVpdKS9nO1xuXG52YXIgX2NhbWVsQ2FzZVJlcGxhY2VyID0gZnVuY3Rpb24gX2NhbWVsQ2FzZVJlcGxhY2VyKG1hdGNoLCBwMSwgcDIpIHtcbiAgcmV0dXJuIChwMSB8fCAnJykgKyAnLScgKyBwMi50b0xvd2VyQ2FzZSgpO1xufTtcblxuZXhwb3J0IHZhciBjYW1lbENhc2VUb0Rhc2hDYXNlID0gZnVuY3Rpb24gY2FtZWxDYXNlVG9EYXNoQ2FzZShzKSB7XG4gIHJldHVybiBzLnJlcGxhY2UoX2NhbWVsQ2FzZVJlZ2V4LCBfY2FtZWxDYXNlUmVwbGFjZXIpO1xufTtcblxudmFyIGNhbWVsQ2FzZVByb3BzVG9EYXNoQ2FzZSA9IGZ1bmN0aW9uIGNhbWVsQ2FzZVByb3BzVG9EYXNoQ2FzZShwcmVmaXhlZFN0eWxlKSB7XG4gIC8vIFNpbmNlIHByZWZpeCBpcyBleHBlY3RlZCB0byB3b3JrIG9uIGlubGluZSBzdHlsZSBvYmplY3RzLCB3ZSBtdXN0XG4gIC8vIHRyYW5zbGF0ZSB0aGUga2V5cyB0byBkYXNoIGNhc2UgZm9yIHJlbmRlcmluZyB0byBDU1MuXG4gIHJldHVybiBPYmplY3Qua2V5cyhwcmVmaXhlZFN0eWxlKS5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwga2V5KSB7XG4gICAgdmFyIGRhc2hDYXNlS2V5ID0gY2FtZWxDYXNlVG9EYXNoQ2FzZShrZXkpOyAvLyBGaXggSUUgdmVuZG9yIHByZWZpeFxuXG4gICAgaWYgKC9ebXMtLy50ZXN0KGRhc2hDYXNlS2V5KSkge1xuICAgICAgZGFzaENhc2VLZXkgPSBcIi1cIi5jb25jYXQoZGFzaENhc2VLZXkpO1xuICAgIH1cblxuICAgIHJlc3VsdFtkYXNoQ2FzZUtleV0gPSBwcmVmaXhlZFN0eWxlW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwge30pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FtZWxDYXNlUHJvcHNUb0Rhc2hDYXNlOyIsIi8qIGZsb3cgKi9cbnZhciBjbGVhblN0YXRlS2V5ID0gZnVuY3Rpb24gY2xlYW5TdGF0ZUtleShrZXkpIHtcbiAgcmV0dXJuIGtleSA9PT0gbnVsbCB8fCB0eXBlb2Yga2V5ID09PSAndW5kZWZpbmVkJyA/ICdtYWluJyA6IGtleS50b1N0cmluZygpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xlYW5TdGF0ZUtleTsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpOyB2YXIga2V5LCBpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEVuaGFuY2VyIGZyb20gJy4uL2VuaGFuY2VyJztcbmltcG9ydCBTdHlsZUtlZXBlciBmcm9tICcuLi9zdHlsZS1rZWVwZXInO1xuaW1wb3J0IFN0eWxlU2hlZXQgZnJvbSAnLi9zdHlsZS1zaGVldCc7XG5pbXBvcnQgeyBTdHlsZUtlZXBlckNvbnRleHQsIFJhZGl1bUNvbmZpZ0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0JztcblxuZnVuY3Rpb24gZ2V0U3R5bGVLZWVwZXIoY29uZmlnUHJvcCwgY29uZmlnQ29udGV4dCkge1xuICB2YXIgdXNlckFnZW50ID0gY29uZmlnUHJvcCAmJiBjb25maWdQcm9wLnVzZXJBZ2VudCB8fCBjb25maWdDb250ZXh0ICYmIGNvbmZpZ0NvbnRleHQudXNlckFnZW50O1xuICByZXR1cm4gbmV3IFN0eWxlS2VlcGVyKHVzZXJBZ2VudCk7XG59XG5cbnZhciBTdHlsZVJvb3RJbm5lciA9IEVuaGFuY2VyKGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBvdGhlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImNoaWxkcmVuXCJdKTtcblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBvdGhlclByb3BzLCBjaGlsZHJlbiwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZVNoZWV0LCBudWxsKSk7XG59KTtcblxudmFyIFN0eWxlUm9vdCA9IGZ1bmN0aW9uIFN0eWxlUm9vdChwcm9wcykge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAvLyBQYXNzIGRvd24gYWxsIHByb3BzIGV4Y2VwdCBjb25maWcgdG8gdGhlIHJlbmRlcmVkIGRpdi5cblxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG4gIHZhciByYWRpdW1Db25maWcgPSBwcm9wcy5yYWRpdW1Db25maWc7XG4gIHZhciBjb25maWdDb250ZXh0ID0gdXNlQ29udGV4dChSYWRpdW1Db25maWdDb250ZXh0KTtcbiAgdmFyIHN0eWxlS2VlcGVyID0gdXNlUmVmKGdldFN0eWxlS2VlcGVyKHJhZGl1bUNvbmZpZywgY29uZmlnQ29udGV4dCkpO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZUtlZXBlckNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogc3R5bGVLZWVwZXIuY3VycmVudFxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlUm9vdElubmVyLCBwcm9wcykpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVSb290OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0eWxlS2VlcGVyIGZyb20gJy4uL3N0eWxlLWtlZXBlcic7XG5pbXBvcnQgeyB3aXRoUmFkaXVtQ29udGV4dHMgfSBmcm9tICcuLi9jb250ZXh0JztcblxudmFyIFN0eWxlU2hlZXQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFN0eWxlU2hlZXQsIF9Db21wb25lbnQpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9zb3J0LWNvbXBcbiAgZnVuY3Rpb24gU3R5bGVTaGVldCgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3R5bGVTaGVldCk7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihTdHlsZVNoZWV0KS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICBfdGhpcy5zdHlsZUtlZXBlciA9IHZvaWQgMDtcbiAgICBfdGhpcy5fc3Vic2NyaXB0aW9uID0gdm9pZCAwO1xuICAgIF90aGlzLl9yb290ID0gdm9pZCAwO1xuICAgIF90aGlzLl9jc3MgPSB2b2lkIDA7XG5cbiAgICBfdGhpcy5fb25DaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbmV4dENTUyA9IF90aGlzLnN0eWxlS2VlcGVyLmdldENTUygpO1xuXG4gICAgICBpZiAobmV4dENTUyAhPT0gX3RoaXMuX2Nzcykge1xuICAgICAgICBpZiAoX3RoaXMuX3Jvb3QpIHtcbiAgICAgICAgICBfdGhpcy5fcm9vdC5pbm5lckhUTUwgPSBuZXh0Q1NTO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gcm9vdCBzdHlsZSBvYmplY3QgZm91bmQsIGV2ZW4gYWZ0ZXIgU3R5bGVTaGVldCBtb3VudC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLl9jc3MgPSBuZXh0Q1NTO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoIV90aGlzLnByb3BzLnN0eWxlS2VlcGVyQ29udGV4dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdHlsZVJvb3QgaXMgcmVxdWlyZWQgdG8gdXNlIFN0eWxlU2hlZXQnKTtcbiAgICB9XG5cbiAgICBfdGhpcy5zdHlsZUtlZXBlciA9IF90aGlzLnByb3BzLnN0eWxlS2VlcGVyQ29udGV4dDtcbiAgICBfdGhpcy5fY3NzID0gX3RoaXMuc3R5bGVLZWVwZXIuZ2V0Q1NTKCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFN0eWxlU2hlZXQsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy5zdHlsZUtlZXBlci5zdWJzY3JpYmUodGhpcy5fb25DaGFuZ2UpO1xuXG4gICAgICB0aGlzLl9vbkNoYW5nZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzaG91bGRDb21wb25lbnRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLl9zdWJzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwge1xuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgIF9faHRtbDogdGhpcy5fY3NzXG4gICAgICAgIH0sXG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGMpIHtcbiAgICAgICAgICBfdGhpczIuX3Jvb3QgPSBjO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3R5bGVTaGVldDtcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJhZGl1bUNvbnRleHRzKFN0eWxlU2hlZXQpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5pbXBvcnQgY3NzUnVsZVNldFRvU3RyaW5nIGZyb20gJy4uL2Nzcy1ydWxlLXNldC10by1zdHJpbmcnO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgd2l0aFJhZGl1bUNvbnRleHRzIH0gZnJvbSAnLi4vY29udGV4dCc7XG5cbnZhciBTdHlsZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1B1cmVDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFN0eWxlLCBfUHVyZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU3R5bGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0eWxlKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoU3R5bGUpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFN0eWxlLCBbe1xuICAgIGtleTogXCJfYnVpbGRTdHlsZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2J1aWxkU3R5bGVzKHN0eWxlcykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIHVzZXJBZ2VudCA9IHRoaXMucHJvcHMucmFkaXVtQ29uZmlnICYmIHRoaXMucHJvcHMucmFkaXVtQ29uZmlnLnVzZXJBZ2VudCB8fCB0aGlzLnByb3BzLnJhZGl1bUNvbmZpZ0NvbnRleHQgJiYgdGhpcy5wcm9wcy5yYWRpdW1Db25maWdDb250ZXh0LnVzZXJBZ2VudDtcbiAgICAgIHZhciBzY29wZVNlbGVjdG9yID0gdGhpcy5wcm9wcy5zY29wZVNlbGVjdG9yO1xuICAgICAgdmFyIHJvb3RSdWxlcyA9IE9iamVjdC5rZXlzKHN0eWxlcykucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgc2VsZWN0b3IpIHtcbiAgICAgICAgaWYgKF90eXBlb2Yoc3R5bGVzW3NlbGVjdG9yXSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgYWNjdW11bGF0b3Jbc2VsZWN0b3JdID0gc3R5bGVzW3NlbGVjdG9yXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgIH0sIHt9KTtcbiAgICAgIHZhciByb290U3R5bGVzID0gT2JqZWN0LmtleXMocm9vdFJ1bGVzKS5sZW5ndGggPyBjc3NSdWxlU2V0VG9TdHJpbmcoc2NvcGVTZWxlY3RvciB8fCAnJywgcm9vdFJ1bGVzLCB1c2VyQWdlbnQpIDogJyc7XG4gICAgICByZXR1cm4gcm9vdFN0eWxlcyArIE9iamVjdC5rZXlzKHN0eWxlcykucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgc2VsZWN0b3IpIHtcbiAgICAgICAgdmFyIHJ1bGVzID0gc3R5bGVzW3NlbGVjdG9yXTtcblxuICAgICAgICBpZiAoc2VsZWN0b3IgPT09ICdtZWRpYVF1ZXJpZXMnKSB7XG4gICAgICAgICAgYWNjdW11bGF0b3IgKz0gX3RoaXMuX2J1aWxkTWVkaWFRdWVyeVN0cmluZyhydWxlcyk7XG4gICAgICAgIH0gZWxzZSBpZiAoX3R5cGVvZihzdHlsZXNbc2VsZWN0b3JdKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB2YXIgY29tcGxldGVTZWxlY3RvciA9IHNjb3BlU2VsZWN0b3IgPyBzZWxlY3Rvci5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAocGFydCkge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlU2VsZWN0b3IgKyAnICcgKyBwYXJ0LnRyaW0oKTtcbiAgICAgICAgICB9KS5qb2luKCcsJykgOiBzZWxlY3RvcjtcbiAgICAgICAgICBhY2N1bXVsYXRvciArPSBjc3NSdWxlU2V0VG9TdHJpbmcoY29tcGxldGVTZWxlY3RvciwgcnVsZXMsIHVzZXJBZ2VudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICB9LCAnJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9idWlsZE1lZGlhUXVlcnlTdHJpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2J1aWxkTWVkaWFRdWVyeVN0cmluZyhzdHlsZXNCeU1lZGlhUXVlcnkpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgbWVkaWFRdWVyeVN0cmluZyA9ICcnO1xuICAgICAgT2JqZWN0LmtleXMoc3R5bGVzQnlNZWRpYVF1ZXJ5KS5mb3JFYWNoKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICBtZWRpYVF1ZXJ5U3RyaW5nICs9ICdAbWVkaWEgJyArIHF1ZXJ5ICsgJ3snICsgX3RoaXMyLl9idWlsZFN0eWxlcyhzdHlsZXNCeU1lZGlhUXVlcnlbcXVlcnldKSArICd9JztcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG1lZGlhUXVlcnlTdHJpbmc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMucnVsZXMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdHlsZXMgPSB0aGlzLl9idWlsZFN0eWxlcyh0aGlzLnByb3BzLnJ1bGVzKTtcblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgX19odG1sOiBzdHlsZXNcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFN0eWxlO1xufShQdXJlQ29tcG9uZW50KTtcblxuU3R5bGUucHJvcFR5cGVzID0ge1xuICByYWRpdW1Db25maWc6IFByb3BUeXBlcy5vYmplY3QsXG4gIHJ1bGVzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBzY29wZVNlbGVjdG9yOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuU3R5bGUuZGVmYXVsdFByb3BzID0ge1xuICBzY29wZVNlbGVjdG9yOiAnJ1xufTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhSYWRpdW1Db250ZXh0cyhTdHlsZSk7IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaG9pc3RTdGF0aWNzIGZyb20gJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcbmltcG9ydCBTdHlsZUtlZXBlciBmcm9tICcuL3N0eWxlLWtlZXBlcic7XG5leHBvcnQgdmFyIFN0eWxlS2VlcGVyQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcbmV4cG9ydCB2YXIgUmFkaXVtQ29uZmlnQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcbmV4cG9ydCBmdW5jdGlvbiB3aXRoUmFkaXVtQ29udGV4dHMoV3JhcHBlZENvbXBvbmVudCkge1xuICB2YXIgV2l0aFJhZGl1bUNvbnRleHRzID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICAgIHZhciByYWRpdW1Db25maWdDb250ZXh0ID0gdXNlQ29udGV4dChSYWRpdW1Db25maWdDb250ZXh0KTtcbiAgICB2YXIgc3R5bGVLZWVwZXJDb250ZXh0ID0gdXNlQ29udGV4dChTdHlsZUtlZXBlckNvbnRleHQpO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICAgIHJlZjogcmVmXG4gICAgfSwgcHJvcHMsIHtcbiAgICAgIHJhZGl1bUNvbmZpZ0NvbnRleHQ6IHJhZGl1bUNvbmZpZ0NvbnRleHQsXG4gICAgICBzdHlsZUtlZXBlckNvbnRleHQ6IHN0eWxlS2VlcGVyQ29udGV4dFxuICAgIH0pKTtcbiAgfSk7XG4gIFdpdGhSYWRpdW1Db250ZXh0cy5kaXNwbGF5TmFtZSA9IFwid2l0aFJhZGl1bUNvbnRleHRzKFwiLmNvbmNhdChXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JywgXCIpXCIpO1xuICByZXR1cm4gaG9pc3RTdGF0aWNzKFdpdGhSYWRpdW1Db250ZXh0cywgV3JhcHBlZENvbXBvbmVudCk7XG59IiwiaW1wb3J0IGFwcGVuZFB4SWZOZWVkZWQgZnJvbSAnLi9hcHBlbmQtcHgtaWYtbmVlZGVkJztcbmltcG9ydCBjYW1lbENhc2VQcm9wc1RvRGFzaENhc2UgZnJvbSAnLi9jYW1lbC1jYXNlLXByb3BzLXRvLWRhc2gtY2FzZSc7XG5pbXBvcnQgbWFwT2JqZWN0IGZyb20gJy4vbWFwLW9iamVjdCc7XG5pbXBvcnQgeyBnZXRQcmVmaXhlZFN0eWxlIH0gZnJvbSAnLi9wcmVmaXhlcic7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1hcmt1cEZvclN0eWxlcyhzdHlsZSkge1xuICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGUpLm1hcChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICByZXR1cm4gcHJvcGVydHkgKyAnOiAnICsgc3R5bGVbcHJvcGVydHldICsgJzsnO1xuICB9KS5qb2luKCdcXG4nKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3NzUnVsZVNldFRvU3RyaW5nKHNlbGVjdG9yLCBydWxlcywgdXNlckFnZW50KSB7XG4gIGlmICghcnVsZXMpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB2YXIgcnVsZXNXaXRoUHggPSBtYXBPYmplY3QocnVsZXMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgcmV0dXJuIGFwcGVuZFB4SWZOZWVkZWQoa2V5LCB2YWx1ZSk7XG4gIH0pO1xuICB2YXIgcHJlZml4ZWRSdWxlcyA9IGdldFByZWZpeGVkU3R5bGUocnVsZXNXaXRoUHgsIHVzZXJBZ2VudCk7XG4gIHZhciBjc3NQcmVmaXhlZFJ1bGVzID0gY2FtZWxDYXNlUHJvcHNUb0Rhc2hDYXNlKHByZWZpeGVkUnVsZXMpO1xuICB2YXIgc2VyaWFsaXplZFJ1bGVzID0gY3JlYXRlTWFya3VwRm9yU3R5bGVzKGNzc1ByZWZpeGVkUnVsZXMpO1xuICByZXR1cm4gc2VsZWN0b3IgKyAneycgKyBzZXJpYWxpemVkUnVsZXMgKyAnfSc7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7IGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkgeyBfZ2V0ID0gUmVmbGVjdC5nZXQ7IH0gZWxzZSB7IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7IHZhciBiYXNlID0gX3N1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7IGlmICghYmFzZSkgcmV0dXJuOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpOyBpZiAoZGVzYy5nZXQpIHsgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpOyB9IHJldHVybiBkZXNjLnZhbHVlOyB9OyB9IHJldHVybiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyIHx8IHRhcmdldCk7IH1cblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkgeyB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkgeyBvYmplY3QgPSBfZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7IH0gcmV0dXJuIG9iamVjdDsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHsgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTsgfSkpOyB9IG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7IHZhciBrZXksIGk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuXG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlUmVmLCB1c2VFZmZlY3QsIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGhvaXN0U3RhdGljcyBmcm9tICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcyc7XG5pbXBvcnQgcmVzb2x2ZVN0eWxlcyBmcm9tICcuL3Jlc29sdmUtc3R5bGVzJztcbmltcG9ydCBnZXRSYWRpdW1TdHlsZVN0YXRlIGZyb20gJy4vZ2V0LXJhZGl1bS1zdHlsZS1zdGF0ZSc7XG5pbXBvcnQgeyBSYWRpdW1Db25maWdDb250ZXh0LCB3aXRoUmFkaXVtQ29udGV4dHMgfSBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IHsgU3R5bGVLZWVwZXJDb250ZXh0IH0gZnJvbSAnLi9jb250ZXh0JztcbnZhciBLRVlTX1RPX0lHTk9SRV9XSEVOX0NPUFlJTkdfUFJPUEVSVElFUyA9IFsnYXJndW1lbnRzJywgJ2NhbGxlZScsICdjYWxsZXInLCAnbGVuZ3RoJywgJ25hbWUnLCAncHJvdG90eXBlJywgJ3R5cGUnXTtcbnZhciBSQURJVU1fUFJPVE87XG52YXIgUkFESVVNX01FVEhPRFM7XG5cbmZ1bmN0aW9uIGNvcHlQcm9wZXJ0aWVzKHNvdXJjZSwgdGFyZ2V0KSB7XG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKEtFWVNfVE9fSUdOT1JFX1dIRU5fQ09QWUlOR19QUk9QRVJUSUVTLmluZGV4T2Yoa2V5KSA8IDAgJiYgIXRhcmdldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpO1xuICAgICAgZGVzY3JpcHRvciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfSk7XG59IC8vIEhhbmRsZSBzY2VuYXJpb3Mgb2Y6XG4vLyAtIEluaGVyaXQgZnJvbSBgUmVhY3QuQ29tcG9uZW50YCBpbiBhbnkgZmFzaGlvblxuLy8gICBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3JtaWRhYmxlTGFicy9yYWRpdW0vaXNzdWVzLzczOFxuLy8gLSBUaGVyZSdzIGFuIGV4cGxpY2l0IGByZW5kZXJgIGZpZWxkIGRlZmluZWRcblxuXG5mdW5jdGlvbiBpc1N0YXRlbGVzcyhjb21wb25lbnQpIHtcbiAgdmFyIHByb3RvID0gY29tcG9uZW50LnByb3RvdHlwZSB8fCB7fTtcbiAgcmV0dXJuICFjb21wb25lbnQuaXNSZWFjdENvbXBvbmVudCAmJiAhcHJvdG8uaXNSZWFjdENvbXBvbmVudCAmJiAhY29tcG9uZW50LnJlbmRlciAmJiAhcHJvdG8ucmVuZGVyO1xufSAvLyBDaGVjayBpZiB2YWx1ZSBpcyBhIHJlYWwgRVMgY2xhc3MgaW4gTmF0aXZlIC8gTm9kZSBjb2RlLlxuLy8gU2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzA3NjAyMzZcblxuXG5mdW5jdGlvbiBpc05hdGl2ZUNsYXNzKGNvbXBvbmVudCkge1xuICByZXR1cm4gdHlwZW9mIGNvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJyAmJiAvXlxccypjbGFzc1xccysvLnRlc3QoY29tcG9uZW50LnRvU3RyaW5nKCkpO1xufSAvLyBIYW5kbGUgZXM3IGFycm93IGZ1bmN0aW9ucyBvbiBSZWFjdCBjbGFzcyBtZXRob2QgbmFtZXMgYnkgZGV0ZWN0aW5nXG4vLyBhbmQgdHJhbnNmZXJpbmcgdGhlIGluc3RhbmNlIG1ldGhvZCB0byBvcmlnaW5hbCBjbGFzcyBwcm90b3R5cGUuXG4vLyAoVXNpbmcgYSBjb3B5IG9mIHRoZSBjbGFzcykuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3JtaWRhYmxlTGFicy9yYWRpdW0vaXNzdWVzLzczOFxuXG5cbmZ1bmN0aW9uIGNvcHlBcnJvd0Z1bmNzKGVuaGFuY2VkU2VsZiwgQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgUkFESVVNX01FVEhPRFMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciB0aGlzRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZW5oYW5jZWRTZWxmLCBuYW1lKTtcbiAgICB2YXIgdGhpc01ldGhvZCA9ICh0aGlzRGVzYyB8fCB7fSkudmFsdWU7IC8vIE9ubHkgY2FyZSBpZiBoYXZlIGluc3RhbmNlIG1ldGhvZC5cblxuICAgIGlmICghdGhpc01ldGhvZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciByYWRpdW1EZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihSQURJVU1fUFJPVE8sIG5hbWUpO1xuICAgIHZhciByYWRpdW1Qcm90b01ldGhvZCA9IChyYWRpdW1EZXNjIHx8IHt9KS52YWx1ZTtcbiAgICB2YXIgc3VwZXJQcm90b01ldGhvZCA9IENvbXBvc2VkQ29tcG9uZW50LnByb3RvdHlwZVtuYW1lXTsgLy8gQWxsb3cgdHJhbnNmZXIgd2hlbjpcbiAgICAvLyAxLiBoYXZlIGFuIGluc3RhbmNlIG1ldGhvZFxuICAgIC8vIDIuIHRoZSBzdXBlciBjbGFzcyBwcm90b3R5cGUgZG9lc24ndCBoYXZlIGFueSBtZXRob2RcbiAgICAvLyAzLiBpdCBpcyBub3QgYWxyZWFkeSB0aGUgcmFkaXVtIHByb3RvdHlwZSdzXG5cbiAgICBpZiAoIXN1cGVyUHJvdG9NZXRob2QgJiYgdGhpc01ldGhvZCAhPT0gcmFkaXVtUHJvdG9NZXRob2QpIHtcbiAgICAgIC8vIFRyYW5zZmVyIGR5bmFtaWMgcmVuZGVyIGNvbXBvbmVudCB0byBDb21wb25lbnQgcHJvdG90eXBlIChjb3B5KS5cbiAgICAgIHRoaXNEZXNjICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb3NlZENvbXBvbmVudC5wcm90b3R5cGUsIG5hbWUsIHRoaXNEZXNjKTsgLy8gUmVtb3ZlIGluc3RhbmNlIHByb3BlcnR5LCBsZWF2aW5nIHVzIHRvIGhhdmUgYSBjb250cml2ZWRcbiAgICAgIC8vIGluaGVyaXRhbmNlIGNoYWluIG9mICgxKSByYWRpdW0sICgyKSBzdXBlcmNsYXNzLlxuXG4gICAgICBkZWxldGUgZW5oYW5jZWRTZWxmW25hbWVdO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRyaW1SYWRpdW1TdGF0ZShlbmhhbmNlcikge1xuICBpZiAoZW5oYW5jZXIuX2V4dHJhUmFkaXVtU3RhdGVLZXlzICYmIGVuaGFuY2VyLl9leHRyYVJhZGl1bVN0YXRlS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgdmFyIHRyaW1tZWRSYWRpdW1TdGF0ZSA9IGVuaGFuY2VyLl9leHRyYVJhZGl1bVN0YXRlS2V5cy5yZWR1Y2UoZnVuY3Rpb24gKHN0YXRlLCBrZXkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgdmFyIGV4dHJhU3RhdGVLZXkgPSBzdGF0ZVtrZXldLFxuICAgICAgICAgIHJlbWFpbmluZ1N0YXRlID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHN0YXRlLCBba2V5XS5tYXAoX3RvUHJvcGVydHlLZXkpKTtcblxuICAgICAgcmV0dXJuIHJlbWFpbmluZ1N0YXRlO1xuICAgIH0sIGdldFJhZGl1bVN0eWxlU3RhdGUoZW5oYW5jZXIpKTtcblxuICAgIGVuaGFuY2VyLl9sYXN0UmFkaXVtU3RhdGUgPSB0cmltbWVkUmFkaXVtU3RhdGU7XG4gICAgZW5oYW5jZXIuc2V0U3RhdGUoe1xuICAgICAgX3JhZGl1bVN0eWxlU3RhdGU6IHRyaW1tZWRSYWRpdW1TdGF0ZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFuVXBFbmhhbmNlcihlbmhhbmNlcikge1xuICB2YXIgX3JhZGl1bU1vdXNlVXBMaXN0ZW5lciA9IGVuaGFuY2VyLl9yYWRpdW1Nb3VzZVVwTGlzdGVuZXIsXG4gICAgICBfcmFkaXVtTWVkaWFRdWVyeUxpc3RlbmVyc0J5UXVlcnkgPSBlbmhhbmNlci5fcmFkaXVtTWVkaWFRdWVyeUxpc3RlbmVyc0J5UXVlcnk7XG4gIGVuaGFuY2VyLl9yYWRpdW1Jc01vdW50ZWQgPSBmYWxzZTtcblxuICBpZiAoX3JhZGl1bU1vdXNlVXBMaXN0ZW5lcikge1xuICAgIF9yYWRpdW1Nb3VzZVVwTGlzdGVuZXIucmVtb3ZlKCk7XG4gIH1cblxuICBpZiAoX3JhZGl1bU1lZGlhUXVlcnlMaXN0ZW5lcnNCeVF1ZXJ5KSB7XG4gICAgT2JqZWN0LmtleXMoX3JhZGl1bU1lZGlhUXVlcnlMaXN0ZW5lcnNCeVF1ZXJ5KS5mb3JFYWNoKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgX3JhZGl1bU1lZGlhUXVlcnlMaXN0ZW5lcnNCeVF1ZXJ5W3F1ZXJ5XS5yZW1vdmUoKTtcbiAgICB9LCBlbmhhbmNlcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUNvbmZpZyhwcm9wQ29uZmlnLCBjb250ZXh0Q29uZmlnLCBob2NDb25maWcpIHtcbiAgdmFyIGNvbmZpZyA9IHByb3BDb25maWcgfHwgY29udGV4dENvbmZpZyB8fCBob2NDb25maWc7XG5cbiAgaWYgKGhvY0NvbmZpZyAmJiBjb25maWcgIT09IGhvY0NvbmZpZykge1xuICAgIGNvbmZpZyA9IF9vYmplY3RTcHJlYWQoe30sIGhvY0NvbmZpZywgY29uZmlnKTtcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclJhZGl1bUNvbXBvbmVudChlbmhhbmNlciwgcmVuZGVyZWRFbGVtZW50LCByZXNvbHZlZENvbmZpZywgcHJvcENvbmZpZykge1xuICB2YXIgX3Jlc29sdmVTdHlsZXMgPSByZXNvbHZlU3R5bGVzKGVuaGFuY2VyLCByZW5kZXJlZEVsZW1lbnQsIHJlc29sdmVkQ29uZmlnKSxcbiAgICAgIGV4dHJhU3RhdGVLZXlNYXAgPSBfcmVzb2x2ZVN0eWxlcy5leHRyYVN0YXRlS2V5TWFwLFxuICAgICAgZWxlbWVudCA9IF9yZXNvbHZlU3R5bGVzLmVsZW1lbnQ7XG5cbiAgZW5oYW5jZXIuX2V4dHJhUmFkaXVtU3RhdGVLZXlzID0gT2JqZWN0LmtleXMoZXh0cmFTdGF0ZUtleU1hcCk7XG5cbiAgaWYgKHByb3BDb25maWcpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSYWRpdW1Db25maWdDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogcHJvcENvbmZpZ1xuICAgIH0sIGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVuaGFuY2VkRnVuY3Rpb25Db21wb25lbnQob3JpZ0NvbXBvbmVudCwgY29uZmlnKSB7XG4gIHZhciBSYWRpdW1FbmhhbmNlciA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgICB2YXIgcmFkaXVtQ29uZmlnID0gcHJvcHMucmFkaXVtQ29uZmlnLFxuICAgICAgICBvdGhlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJyYWRpdW1Db25maWdcIl0pO1xuXG4gICAgdmFyIHJhZGl1bUNvbmZpZ0NvbnRleHQgPSB1c2VDb250ZXh0KFJhZGl1bUNvbmZpZ0NvbnRleHQpO1xuICAgIHZhciBzdHlsZUtlZXBlckNvbnRleHQgPSB1c2VDb250ZXh0KFN0eWxlS2VlcGVyQ29udGV4dCk7XG5cbiAgICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoe1xuICAgICAgX3JhZGl1bVN0eWxlU3RhdGU6IHt9XG4gICAgfSksXG4gICAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgICBzdGF0ZSA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICAgIHNldFN0YXRlID0gX3VzZVN0YXRlMlsxXTtcblxuICAgIHZhciBlbmhhbmNlckFwaSA9IHVzZVJlZih7XG4gICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICBzZXRTdGF0ZTogc2V0U3RhdGUsXG4gICAgICBfcmFkaXVtTWVkaWFRdWVyeUxpc3RlbmVyc0J5UXVlcnk6IHVuZGVmaW5lZCxcbiAgICAgIF9yYWRpdW1Nb3VzZVVwTGlzdGVuZXI6IHVuZGVmaW5lZCxcbiAgICAgIF9yYWRpdW1Jc01vdW50ZWQ6IHRydWUsXG4gICAgICBfbGFzdFJhZGl1bVN0YXRlOiB1bmRlZmluZWQsXG4gICAgICBfZXh0cmFSYWRpdW1TdGF0ZUtleXM6IHVuZGVmaW5lZCxcbiAgICAgIF9yYWRpdW1TdHlsZUtlZXBlcjogc3R5bGVLZWVwZXJDb250ZXh0XG4gICAgfSkuY3VycmVudDsgLy8gcmVzdWx0IG9mIHVzZVJlZiBpcyBuZXZlciByZWNyZWF0ZWQgYW5kIGlzIGRlc2lnbmVkIHRvIGJlIG11dGFibGVcbiAgICAvLyB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB0aGUgbGF0ZXN0IHN0YXRlIGlzIGF0dGFjaGVkIHRvIGl0XG5cbiAgICBlbmhhbmNlckFwaS5zdGF0ZSA9IHN0YXRlO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhblVwRW5oYW5jZXIoZW5oYW5jZXJBcGkpO1xuICAgICAgfTtcbiAgICB9LCBbZW5oYW5jZXJBcGldKTtcbiAgICB2YXIgaGFzRXh0cmFTdGF0ZUtleXMgPSBlbmhhbmNlckFwaS5fZXh0cmFSYWRpdW1TdGF0ZUtleXMgJiYgZW5oYW5jZXJBcGkuX2V4dHJhUmFkaXVtU3RhdGVLZXlzLmxlbmd0aCA+IDA7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyaW1SYWRpdW1TdGF0ZShlbmhhbmNlckFwaSk7XG4gICAgfSwgW2hhc0V4dHJhU3RhdGVLZXlzLCBlbmhhbmNlckFwaV0pO1xuICAgIHZhciByZW5kZXJlZEVsZW1lbnQgPSBvcmlnQ29tcG9uZW50KG90aGVyUHJvcHMsIHJlZik7XG4gICAgdmFyIGN1cnJlbnRDb25maWcgPSByZXNvbHZlQ29uZmlnKHJhZGl1bUNvbmZpZywgcmFkaXVtQ29uZmlnQ29udGV4dCwgY29uZmlnKTtcbiAgICByZXR1cm4gcmVuZGVyUmFkaXVtQ29tcG9uZW50KGVuaGFuY2VyQXBpLCByZW5kZXJlZEVsZW1lbnQsIGN1cnJlbnRDb25maWcsIHJhZGl1bUNvbmZpZyk7XG4gIH0pO1xuICBSYWRpdW1FbmhhbmNlci5faXNSYWRpdW1FbmhhbmNlZCA9IHRydWU7XG4gIFJhZGl1bUVuaGFuY2VyLmRlZmF1bHRQcm9wcyA9IG9yaWdDb21wb25lbnQuZGVmYXVsdFByb3BzO1xuICByZXR1cm4gaG9pc3RTdGF0aWNzKFJhZGl1bUVuaGFuY2VyLCBvcmlnQ29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRW5oYW5jZWRDbGFzc0NvbXBvbmVudChvcmlnQ29tcG9uZW50LCBDb21wb3NlZENvbXBvbmVudCwgY29uZmlnKSB7XG4gIHZhciBSYWRpdW1FbmhhbmNlciA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9Db21wb3NlZENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhSYWRpdW1FbmhhbmNlciwgX0NvbXBvc2VkQ29tcG9uZW50KTtcblxuICAgIC8vIG5lZWQgdG8gYXR0ZW1wdCB0byBhc3NpZ24gdG8gdGhpcy5zdGF0ZSBpbiBjYXNlXG4gICAgLy8gc3VwZXIgY29tcG9uZW50IGlzIHNldHRpbmcgc3RhdGUgb24gY29uc3RydWN0aW9uLFxuICAgIC8vIG90aGVyd2lzZSBjbGFzcyBwcm9wZXJ0aWVzIHJlaW5pdGlhbGl6ZSB0byB1bmRlZmluZWRcbiAgICAvLyBuZWVkIHRvIGFzc2lnbiB0aGUgZm9sbG93aW5nIG1ldGhvZHMgdG8gdGhpcy54eHggYXNcbiAgICAvLyB0ZXN0cyBhdHRlbXB0IHRvIHNldCB0aGlzIG9uIHRoZSBvcmlnaW5hbCBjb21wb25lbnRcbiAgICBmdW5jdGlvbiBSYWRpdW1FbmhhbmNlcigpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJhZGl1bUVuaGFuY2VyKTtcblxuICAgICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoUmFkaXVtRW5oYW5jZXIpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgX3RoaXMuc3RhdGUgPSBfdGhpcy5zdGF0ZSB8fCB7fTtcbiAgICAgIF90aGlzLl9yYWRpdW1TdHlsZUtlZXBlciA9IF90aGlzLnByb3BzLnN0eWxlS2VlcGVyQ29udGV4dDtcbiAgICAgIF90aGlzLl9yYWRpdW1NZWRpYVF1ZXJ5TGlzdGVuZXJzQnlRdWVyeSA9IF90aGlzLl9yYWRpdW1NZWRpYVF1ZXJ5TGlzdGVuZXJzQnlRdWVyeTtcbiAgICAgIF90aGlzLl9yYWRpdW1Nb3VzZVVwTGlzdGVuZXIgPSBfdGhpcy5fcmFkaXVtTW91c2VVcExpc3RlbmVyO1xuICAgICAgX3RoaXMuX3JhZGl1bUlzTW91bnRlZCA9IHRydWU7XG4gICAgICBfdGhpcy5fbGFzdFJhZGl1bVN0YXRlID0gdm9pZCAwO1xuICAgICAgX3RoaXMuX2V4dHJhUmFkaXVtU3RhdGVLZXlzID0gdm9pZCAwO1xuICAgICAgX3RoaXMuc3RhdGUuX3JhZGl1bVN0eWxlU3RhdGUgPSB7fTtcblxuICAgICAgdmFyIHNlbGYgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKTsgLy8gSGFuZGxlIGVzNyBhcnJvdyBmdW5jdGlvbnMgb24gUmVhY3QgY2xhc3MgbWV0aG9kXG5cblxuICAgICAgY29weUFycm93RnVuY3Moc2VsZiwgQ29tcG9zZWRDb21wb25lbnQpO1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhSYWRpdW1FbmhhbmNlciwgW3tcbiAgICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgICAgIGlmIChfZ2V0KF9nZXRQcm90b3R5cGVPZihSYWRpdW1FbmhhbmNlci5wcm90b3R5cGUpLCBcImNvbXBvbmVudERpZFVwZGF0ZVwiLCB0aGlzKSkge1xuICAgICAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKFJhZGl1bUVuaGFuY2VyLnByb3RvdHlwZSksIFwiY29tcG9uZW50RGlkVXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgcHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyaW1SYWRpdW1TdGF0ZSh0aGlzKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKF9nZXQoX2dldFByb3RvdHlwZU9mKFJhZGl1bUVuaGFuY2VyLnByb3RvdHlwZSksIFwiY29tcG9uZW50V2lsbFVubW91bnRcIiwgdGhpcykpIHtcbiAgICAgICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihSYWRpdW1FbmhhbmNlci5wcm90b3R5cGUpLCBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBjbGVhblVwRW5oYW5jZXIodGhpcyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHJlbmRlcmVkRWxlbWVudCA9IF9nZXQoX2dldFByb3RvdHlwZU9mKFJhZGl1bUVuaGFuY2VyLnByb3RvdHlwZSksIFwicmVuZGVyXCIsIHRoaXMpLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdmFyIGN1cnJlbnRDb25maWcgPSByZXNvbHZlQ29uZmlnKHRoaXMucHJvcHMucmFkaXVtQ29uZmlnLCB0aGlzLnByb3BzLnJhZGl1bUNvbmZpZ0NvbnRleHQsIGNvbmZpZyk7XG4gICAgICAgIHJldHVybiByZW5kZXJSYWRpdW1Db21wb25lbnQodGhpcywgcmVuZGVyZWRFbGVtZW50LCBjdXJyZW50Q29uZmlnLCB0aGlzLnByb3BzLnJhZGl1bUNvbmZpZyk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFJhZGl1bUVuaGFuY2VyO1xuICB9KENvbXBvc2VkQ29tcG9uZW50KTsgLy8gTGF6eSBpbmZlciB0aGUgbWV0aG9kIG5hbWVzIG9mIHRoZSBFbmhhbmNlci5cblxuXG4gIFJhZGl1bUVuaGFuY2VyLl9pc1JhZGl1bUVuaGFuY2VkID0gdHJ1ZTtcbiAgUkFESVVNX1BST1RPID0gUmFkaXVtRW5oYW5jZXIucHJvdG90eXBlO1xuICBSQURJVU1fTUVUSE9EUyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKFJBRElVTV9QUk9UTykuZmlsdGVyKGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIG4gIT09ICdjb25zdHJ1Y3RvcicgJiYgdHlwZW9mIFJBRElVTV9QUk9UT1tuXSA9PT0gJ2Z1bmN0aW9uJztcbiAgfSk7IC8vIENsYXNzIGluaGVyaXRhbmNlIHVzZXMgT2JqZWN0LmNyZWF0ZSBhbmQgYmVjYXVzZSBvZiBfX3Byb3RvX18gaXNzdWVzXG4gIC8vIHdpdGggSUUgPDEwIGFueSBzdGF0aWMgcHJvcGVydGllcyBvZiB0aGUgc3VwZXJjbGFzcyBhcmVuJ3QgaW5oZXJpdGVkIGFuZFxuICAvLyBzbyBuZWVkIHRvIGJlIG1hbnVhbGx5IHBvcHVsYXRlZC5cbiAgLy8gU2VlIGh0dHA6Ly9iYWJlbGpzLmlvL2RvY3MvYWR2YW5jZWQvY2F2ZWF0cy8jY2xhc3Nlcy0xMC1hbmQtYmVsb3ctXG5cbiAgY29weVByb3BlcnRpZXMob3JpZ0NvbXBvbmVudCwgUmFkaXVtRW5oYW5jZXIpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gVGhpcyBhbHNvIGZpeGVzIFJlYWN0IEhvdCBMb2FkZXIgYnkgZXhwb3NpbmcgdGhlIG9yaWdpbmFsIGNvbXBvbmVudHMgdG9wXG4gICAgLy8gbGV2ZWwgcHJvdG90eXBlIG1ldGhvZHMgb24gdGhlIFJhZGl1bSBlbmhhbmNlZCBwcm90b3R5cGUgYXMgZGlzY3Vzc2VkIGluXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0Zvcm1pZGFibGVMYWJzL3JhZGl1bS9pc3N1ZXMvMjE5LlxuICAgIGNvcHlQcm9wZXJ0aWVzKENvbXBvc2VkQ29tcG9uZW50LnByb3RvdHlwZSwgUmFkaXVtRW5oYW5jZXIucHJvdG90eXBlKTtcbiAgfSAvLyBhZGQgUmFkaXVtIHByb3BUeXBlcyB0byBlbmhhbmNlZCBjb21wb25lbnQncyBwcm9wVHlwZXNcblxuXG4gIGlmIChSYWRpdW1FbmhhbmNlci5wcm9wVHlwZXMgJiYgUmFkaXVtRW5oYW5jZXIucHJvcFR5cGVzLnN0eWxlKSB7XG4gICAgUmFkaXVtRW5oYW5jZXIucHJvcFR5cGVzID0gX29iamVjdFNwcmVhZCh7fSwgUmFkaXVtRW5oYW5jZXIucHJvcFR5cGVzLCB7XG4gICAgICBzdHlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5LCBQcm9wVHlwZXMub2JqZWN0XSlcbiAgICB9KTtcbiAgfSAvLyBjb3B5IGRpc3BsYXkgbmFtZSB0byBlbmhhbmNlZCBjb21wb25lbnRcblxuXG4gIFJhZGl1bUVuaGFuY2VyLmRpc3BsYXlOYW1lID0gb3JpZ0NvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBvcmlnQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG4gIHJldHVybiB3aXRoUmFkaXVtQ29udGV4dHMoUmFkaXVtRW5oYW5jZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21wb3NlZEZyb21OYXRpdmVDbGFzcyhDb21wb3NlZENvbXBvbmVudCkge1xuICBDb21wb3NlZENvbXBvbmVudCA9IGZ1bmN0aW9uIChPcmlnQ29tcG9uZW50KSB7XG4gICAgZnVuY3Rpb24gTmV3Q29tcG9uZW50KCkge1xuICAgICAgLy8gVXNlIFJlZmxlY3QuY29uc3RydWN0IHRvIHNpbXVsYXRlICduZXcnXG4gICAgICB2YXIgb2JqID0gUmVmbGVjdC5jb25zdHJ1Y3QoT3JpZ0NvbXBvbmVudCwgYXJndW1lbnRzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSAvLyAkRmxvd0ZpeE1lXG5cblxuICAgIFJlZmxlY3Quc2V0UHJvdG90eXBlT2YoTmV3Q29tcG9uZW50LnByb3RvdHlwZSwgT3JpZ0NvbXBvbmVudC5wcm90b3R5cGUpOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICBSZWZsZWN0LnNldFByb3RvdHlwZU9mKE5ld0NvbXBvbmVudCwgT3JpZ0NvbXBvbmVudCk7XG4gICAgcmV0dXJuIE5ld0NvbXBvbmVudDtcbiAgfShDb21wb3NlZENvbXBvbmVudCk7XG5cbiAgcmV0dXJuIENvbXBvc2VkQ29tcG9uZW50O1xufVxuXG52YXIgUmVhY3RGb3J3YXJkUmVmU3ltYm9sID0gZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBudWxsO1xufSkuJCR0eXBlb2Y7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmhhbmNlV2l0aFJhZGl1bShjb25maWdPckNvbXBvc2VkQ29tcG9uZW50KSB7XG4gIHZhciBjb25maWcgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gIGlmIChSZWFjdEZvcndhcmRSZWZTeW1ib2wgJiYgY29uZmlnT3JDb21wb3NlZENvbXBvbmVudC4kJHR5cGVvZiA9PT0gUmVhY3RGb3J3YXJkUmVmU3ltYm9sKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVuaGFuY2VkRnVuY3Rpb25Db21wb25lbnQoY29uZmlnT3JDb21wb3NlZENvbXBvbmVudC5yZW5kZXIsIGNvbmZpZyk7XG4gIH1cblxuICBpZiAodHlwZW9mIGNvbmZpZ09yQ29tcG9zZWRDb21wb25lbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gY3JlYXRlRmFjdG9yeUZyb21Db25maWcoY29uZmlnLCBjb25maWdPckNvbXBvc2VkQ29tcG9uZW50KTtcbiAgfVxuXG4gIHZhciBvcmlnQ29tcG9uZW50ID0gY29uZmlnT3JDb21wb3NlZENvbXBvbmVudDsgLy8gSGFuZGxlIHN0YXRlbGVzcyBjb21wb25lbnRzXG5cbiAgaWYgKGlzU3RhdGVsZXNzKG9yaWdDb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVuaGFuY2VkRnVuY3Rpb25Db21wb25lbnQob3JpZ0NvbXBvbmVudCwgY29uZmlnKTtcbiAgfVxuXG4gIHZhciBfQ29tcG9zZWRDb21wb25lbnQyID0gb3JpZ0NvbXBvbmVudDsgLy8gUmFkaXVtIGlzIHRyYW5zcGlsZWQgaW4gbnBtLCBzbyBpdCBpc24ndCByZWFsbHkgdXNpbmcgZXM2IGNsYXNzZXMgYXRcbiAgLy8gcnVudGltZS4gIEhvd2V2ZXIsIHRoZSB1c2VyIG9mIFJhZGl1bSBtaWdodCBiZS4gIEluIHRoaXMgY2FzZSB3ZSBoYXZlXG4gIC8vIHRvIG1haW50YWluIGZvcndhcmQgY29tcGF0aWJpbGl0eSB3aXRoIG5hdGl2ZSBlcyBjbGFzc2VzLlxuXG4gIGlmIChpc05hdGl2ZUNsYXNzKF9Db21wb3NlZENvbXBvbmVudDIpKSB7XG4gICAgX0NvbXBvc2VkQ29tcG9uZW50MiA9IGNyZWF0ZUNvbXBvc2VkRnJvbU5hdGl2ZUNsYXNzKF9Db21wb3NlZENvbXBvbmVudDIpO1xuICB9IC8vIFNoYWxsb3cgY29weSBjb21wb3NlZCBpZiBzdGlsbCBvcmlnaW5hbCAod2UgbWF5IG11dGF0ZSBsYXRlcikuXG5cblxuICBpZiAoX0NvbXBvc2VkQ29tcG9uZW50MiA9PT0gb3JpZ0NvbXBvbmVudCkge1xuICAgIF9Db21wb3NlZENvbXBvbmVudDIgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBmdW5jdGlvbiAoX0NvbXBvc2VkQ29tcG9uZW50Mykge1xuICAgICAgX2luaGVyaXRzKENvbXBvc2VkQ29tcG9uZW50LCBfQ29tcG9zZWRDb21wb25lbnQzKTtcblxuICAgICAgZnVuY3Rpb24gQ29tcG9zZWRDb21wb25lbnQoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21wb3NlZENvbXBvbmVudCk7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihDb21wb3NlZENvbXBvbmVudCkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb21wb3NlZENvbXBvbmVudDtcbiAgICB9KF9Db21wb3NlZENvbXBvbmVudDIpO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUVuaGFuY2VkQ2xhc3NDb21wb25lbnQob3JpZ0NvbXBvbmVudCwgX0NvbXBvc2VkQ29tcG9uZW50MiwgY29uZmlnKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeUZyb21Db25maWcoY29uZmlnLCBjb25maWdPckNvbXBvc2VkQ29tcG9uZW50KSB7XG4gIHZhciBuZXdDb25maWcgPSBfb2JqZWN0U3ByZWFkKHt9LCBjb25maWcsIGNvbmZpZ09yQ29tcG9zZWRDb21wb25lbnQpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoY29uZmlnT3JDb21wb25lbnQpIHtcbiAgICByZXR1cm4gZW5oYW5jZVdpdGhSYWRpdW0oY29uZmlnT3JDb21wb25lbnQsIG5ld0NvbmZpZyk7XG4gIH07XG59IiwidmFyIGdldFJhZGl1bVN0eWxlU3RhdGUgPSBmdW5jdGlvbiBnZXRSYWRpdW1TdHlsZVN0YXRlKGNvbXBvbmVudCkge1xuICByZXR1cm4gY29tcG9uZW50Ll9sYXN0UmFkaXVtU3RhdGUgfHwgY29tcG9uZW50LnN0YXRlICYmIGNvbXBvbmVudC5zdGF0ZS5fcmFkaXVtU3R5bGVTdGF0ZSB8fCB7fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJhZGl1bVN0eWxlU3RhdGU7IiwidmFyIGdldFN0YXRlS2V5ID0gZnVuY3Rpb24gZ2V0U3RhdGVLZXkocmVuZGVyZWRFbGVtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgcmVuZGVyZWRFbGVtZW50LnJlZiA9PT0gJ3N0cmluZycgPyByZW5kZXJlZEVsZW1lbnQucmVmIDogcmVuZGVyZWRFbGVtZW50LmtleTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFN0YXRlS2V5OyIsImltcG9ydCBjbGVhblN0YXRlS2V5IGZyb20gJy4vY2xlYW4tc3RhdGUta2V5JztcblxudmFyIGdldFN0YXRlID0gZnVuY3Rpb24gZ2V0U3RhdGUoc3RhdGUsIGVsZW1lbnRLZXksIHZhbHVlKSB7XG4gIHZhciBrZXkgPSBjbGVhblN0YXRlS2V5KGVsZW1lbnRLZXkpO1xuICByZXR1cm4gISFzdGF0ZSAmJiAhIXN0YXRlLl9yYWRpdW1TdHlsZVN0YXRlICYmICEhc3RhdGUuX3JhZGl1bVN0eWxlU3RhdGVba2V5XSAmJiBzdGF0ZS5fcmFkaXVtU3R5bGVTdGF0ZVtrZXldW3ZhbHVlXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFN0YXRlOyIsIi8vIGEgc2ltcGxlIGRqYjIgaGFzaCBiYXNlZCBvbiBoYXNoLXN0cmluZzpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NYXR0aGV3QmFya2VyL2hhc2gtc3RyaW5nL2Jsb2IvbWFzdGVyL3NvdXJjZS9oYXNoLXN0cmluZy5qc1xuLy8gcmV0dXJucyBhIGhleC1lbmNvZGVkIGhhc2hcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhc2godGV4dCkge1xuICBpZiAoIXRleHQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB2YXIgaGFzaFZhbHVlID0gNTM4MTtcbiAgdmFyIGluZGV4ID0gdGV4dC5sZW5ndGggLSAxO1xuXG4gIHdoaWxlIChpbmRleCkge1xuICAgIGhhc2hWYWx1ZSA9IGhhc2hWYWx1ZSAqIDMzIF4gdGV4dC5jaGFyQ29kZUF0KGluZGV4KTtcbiAgICBpbmRleCAtPSAxO1xuICB9XG5cbiAgcmV0dXJuIChoYXNoVmFsdWUgPj4+IDApLnRvU3RyaW5nKDE2KTtcbn0iLCJpbXBvcnQgRW5oYW5jZXIgZnJvbSAnLi9lbmhhbmNlcic7XG5pbXBvcnQgUGx1Z2lucyBmcm9tICcuL3BsdWdpbnMnO1xuaW1wb3J0IFN0eWxlIGZyb20gJy4vY29tcG9uZW50cy9zdHlsZSc7XG5pbXBvcnQgU3R5bGVSb290IGZyb20gJy4vY29tcG9uZW50cy9zdHlsZS1yb290JztcbmltcG9ydCBnZXRTdGF0ZSBmcm9tICcuL2dldC1zdGF0ZSc7XG5pbXBvcnQga2V5ZnJhbWVzIGZyb20gJy4va2V5ZnJhbWVzJztcbmltcG9ydCByZXNvbHZlU3R5bGVzIGZyb20gJy4vcmVzb2x2ZS1zdHlsZXMnO1xuXG5mdW5jdGlvbiBSYWRpdW0oQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgcmV0dXJuIEVuaGFuY2VyKENvbXBvc2VkQ29tcG9uZW50KTtcbn0gLy8gTGVnYWN5IG9iamVjdCBzdXBwb3J0LlxuLy9cbi8vIE5vcm1hbGx5IGl0IHdvdWxkIGJlIGRpc2Zhdm9yZWQgdG8gYXR0YWNoIHRoZXNlIHRvIHRoZSBgUmFkaXVtYCBvYmplY3Rcbi8vIGJlY2F1c2UgaXQgZGVmZWF0cyB0cmVlLXNoYWtpbmcsIHVzaW5nIGluc3RlYWQgdGhlIEVTTSBleHBvcnRzLiBCdXQsXG4vLyB0aGUgYFJhZGl1bWAgYEVuaGFuY2VyYCB1c2VzICoqYWxsKiogb2YgdGhlc2UsIHNvIHRoZXJlJ3Mgbm8gZXh0cmEgXCJjb3N0XCJcbi8vIHRvIHRoZW0gYmVpbmcgZXhwbGljaXRseSBvbiB0aGUgYFJhZGl1bWAgb2JqZWN0LlxuXG5cblJhZGl1bS5QbHVnaW5zID0gUGx1Z2lucztcblJhZGl1bS5TdHlsZSA9IFN0eWxlO1xuUmFkaXVtLlN0eWxlUm9vdCA9IFN0eWxlUm9vdDtcblJhZGl1bS5nZXRTdGF0ZSA9IGdldFN0YXRlO1xuUmFkaXVtLmtleWZyYW1lcyA9IGtleWZyYW1lcztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgUmFkaXVtLlRlc3RNb2RlID0ge1xuICAgIGNsZWFyU3RhdGU6IHJlc29sdmVTdHlsZXMuX19jbGVhclN0YXRlRm9yVGVzdHMsXG4gICAgZGlzYWJsZTogcmVzb2x2ZVN0eWxlcy5fX3NldFRlc3RNb2RlLmJpbmQobnVsbCwgZmFsc2UpLFxuICAgIGVuYWJsZTogcmVzb2x2ZVN0eWxlcy5fX3NldFRlc3RNb2RlLmJpbmQobnVsbCwgdHJ1ZSlcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtOyAvLyBFU00gcmUtZXhwb3J0c1xuXG5leHBvcnQgeyBQbHVnaW5zLCBTdHlsZSwgU3R5bGVSb290LCBnZXRTdGF0ZSwga2V5ZnJhbWVzIH07IiwiaW1wb3J0IGNzc1J1bGVTZXRUb1N0cmluZyBmcm9tICcuL2Nzcy1ydWxlLXNldC10by1zdHJpbmcnO1xuaW1wb3J0IGhhc2ggZnJvbSAnLi9oYXNoJztcbmltcG9ydCB7IGdldFByZWZpeGVkS2V5ZnJhbWVzIH0gZnJvbSAnLi9wcmVmaXhlcic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBrZXlmcmFtZXMoa2V5ZnJhbWVSdWxlcywgbmFtZSkge1xuICByZXR1cm4ge1xuICAgIF9fcmFkaXVtS2V5ZnJhbWVzOiB0cnVlLFxuICAgIF9fcHJvY2VzczogZnVuY3Rpb24gX19wcm9jZXNzKHVzZXJBZ2VudCkge1xuICAgICAgdmFyIGtleWZyYW1lc1ByZWZpeGVkID0gZ2V0UHJlZml4ZWRLZXlmcmFtZXModXNlckFnZW50KTtcbiAgICAgIHZhciBydWxlcyA9IE9iamVjdC5rZXlzKGtleWZyYW1lUnVsZXMpLm1hcChmdW5jdGlvbiAocGVyY2VudGFnZSkge1xuICAgICAgICByZXR1cm4gY3NzUnVsZVNldFRvU3RyaW5nKHBlcmNlbnRhZ2UsIGtleWZyYW1lUnVsZXNbcGVyY2VudGFnZV0sIHVzZXJBZ2VudCk7XG4gICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgIHZhciBhbmltYXRpb25OYW1lID0gKG5hbWUgPyBuYW1lICsgJy0nIDogJycpICsgJ3JhZGl1bS1hbmltYXRpb24tJyArIGhhc2gocnVsZXMpO1xuICAgICAgdmFyIGNzcyA9ICdAJyArIGtleWZyYW1lc1ByZWZpeGVkICsgJyAnICsgYW5pbWF0aW9uTmFtZSArICcge1xcbicgKyBydWxlcyArICdcXG59XFxuJztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNzczogY3NzLFxuICAgICAgICBhbmltYXRpb25OYW1lOiBhbmltYXRpb25OYW1lXG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXBPYmplY3Qob2JqZWN0LCBtYXBwZXIpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGtleSkge1xuICAgIHJlc3VsdFtrZXldID0gbWFwcGVyKG9iamVjdFtrZXldLCBrZXkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIHt9KTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOZXN0ZWRTdHlsZSh2YWx1ZSkge1xuICAvLyBEb24ndCBtZXJnZSBvYmplY3RzIG92ZXJyaWRpbmcgdG9TdHJpbmcsIHNpbmNlIHRoZXkgc2hvdWxkIGJlIGNvbnZlcnRlZFxuICAvLyB0byBzdHJpbmcgdmFsdWVzLlxuICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IE9iamVjdCAmJiB2YWx1ZS50b1N0cmluZyA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbn0gLy8gTWVyZ2Ugc3R5bGUgb2JqZWN0cy4gRGVlcCBtZXJnZSBwbGFpbiBvYmplY3QgdmFsdWVzLlxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTdHlsZXMoc3R5bGVzKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgc3R5bGVzLmZvckVhY2goZnVuY3Rpb24gKHN0eWxlKSB7XG4gICAgaWYgKCFzdHlsZSB8fCBfdHlwZW9mKHN0eWxlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdHlsZSkpIHtcbiAgICAgIHN0eWxlID0gbWVyZ2VTdHlsZXMoc3R5bGUpO1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHN0eWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIC8vIFNpbXBsZSBjYXNlLCBub3RoaW5nIG5lc3RlZFxuICAgICAgaWYgKCFpc05lc3RlZFN0eWxlKHN0eWxlW2tleV0pIHx8ICFpc05lc3RlZFN0eWxlKHJlc3VsdFtrZXldKSkge1xuICAgICAgICByZXN1bHRba2V5XSA9IHN0eWxlW2tleV07XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gSWYgbmVzdGVkIG1lZGlhLCBkb24ndCBtZXJnZSB0aGUgbmVzdGVkIHN0eWxlcywgYXBwZW5kIGEgc3BhY2UgdG8gdGhlXG4gICAgICAvLyBlbmQgKGJlbmlnbiB3aGVuIGNvbnZlcnRlZCB0byBDU1MpLiBUaGlzIHdheSB3ZSBkb24ndCBlbmQgdXAgbWVyZ2luZ1xuICAgICAgLy8gbWVkaWEgcXVlcmllcyB0aGF0IGFwcGVhciBsYXRlciBpbiB0aGUgY2hhaW4gd2l0aCB0aG9zZSB0aGF0IGFwcGVhclxuICAgICAgLy8gZWFybGllci5cblxuXG4gICAgICBpZiAoa2V5LmluZGV4T2YoJ0BtZWRpYScpID09PSAwKSB7XG4gICAgICAgIHZhciBuZXdLZXkgPSBrZXk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zdGFudC1jb25kaXRpb25cblxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgIG5ld0tleSArPSAnICc7XG5cbiAgICAgICAgICBpZiAoIXJlc3VsdFtuZXdLZXldKSB7XG4gICAgICAgICAgICByZXN1bHRbbmV3S2V5XSA9IHN0eWxlW2tleV07XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IC8vIE1lcmdlIGFsbCBvdGhlciBuZXN0ZWQgc3R5bGVzIHJlY3Vyc2l2ZWx5XG5cblxuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZVN0eWxlcyhbcmVzdWx0W2tleV0sIHN0eWxlW2tleV1dKTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59IiwiZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7IG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7IH0pKTsgfSBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG52YXIgX2NoZWNrUHJvcHMgPSBmdW5jdGlvbiBjaGVja1Byb3BzKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIC8vIFdhcm4gaWYgeW91IHVzZSBsb25naGFuZCBhbmQgc2hvcnRoYW5kIHByb3BlcnRpZXMgaW4gdGhlIHNhbWUgc3R5bGVcbiAgLy8gb2JqZWN0LlxuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvU2hvcnRoYW5kX3Byb3BlcnRpZXNcbiAgdmFyIHNob3J0aGFuZFByb3BlcnR5RXhwYW5zaW9ucyA9IHtcbiAgICBiYWNrZ3JvdW5kOiBbJ2JhY2tncm91bmRBdHRhY2htZW50JywgJ2JhY2tncm91bmRCbGVuZE1vZGUnLCAnYmFja2dyb3VuZENsaXAnLCAnYmFja2dyb3VuZENvbG9yJywgJ2JhY2tncm91bmRJbWFnZScsICdiYWNrZ3JvdW5kT3JpZ2luJywgJ2JhY2tncm91bmRQb3NpdGlvbicsICdiYWNrZ3JvdW5kUG9zaXRpb25YJywgJ2JhY2tncm91bmRQb3NpdGlvblknLCAnYmFja2dyb3VuZFJlcGVhdCcsICdiYWNrZ3JvdW5kUmVwZWF0WCcsICdiYWNrZ3JvdW5kUmVwZWF0WScsICdiYWNrZ3JvdW5kU2l6ZSddLFxuICAgIGJvcmRlcjogWydib3JkZXJCb3R0b20nLCAnYm9yZGVyQm90dG9tQ29sb3InLCAnYm9yZGVyQm90dG9tU3R5bGUnLCAnYm9yZGVyQm90dG9tV2lkdGgnLCAnYm9yZGVyQ29sb3InLCAnYm9yZGVyTGVmdCcsICdib3JkZXJMZWZ0Q29sb3InLCAnYm9yZGVyTGVmdFN0eWxlJywgJ2JvcmRlckxlZnRXaWR0aCcsICdib3JkZXJSaWdodCcsICdib3JkZXJSaWdodENvbG9yJywgJ2JvcmRlclJpZ2h0U3R5bGUnLCAnYm9yZGVyUmlnaHRXaWR0aCcsICdib3JkZXJTdHlsZScsICdib3JkZXJUb3AnLCAnYm9yZGVyVG9wQ29sb3InLCAnYm9yZGVyVG9wU3R5bGUnLCAnYm9yZGVyVG9wV2lkdGgnLCAnYm9yZGVyV2lkdGgnXSxcbiAgICBib3JkZXJJbWFnZTogWydib3JkZXJJbWFnZU91dHNldCcsICdib3JkZXJJbWFnZVJlcGVhdCcsICdib3JkZXJJbWFnZVNsaWNlJywgJ2JvcmRlckltYWdlU291cmNlJywgJ2JvcmRlckltYWdlV2lkdGgnXSxcbiAgICBib3JkZXJSYWRpdXM6IFsnYm9yZGVyQm90dG9tTGVmdFJhZGl1cycsICdib3JkZXJCb3R0b21SaWdodFJhZGl1cycsICdib3JkZXJUb3BMZWZ0UmFkaXVzJywgJ2JvcmRlclRvcFJpZ2h0UmFkaXVzJ10sXG4gICAgZm9udDogWydmb250RmFtaWx5JywgJ2ZvbnRLZXJuaW5nJywgJ2ZvbnRTaXplJywgJ2ZvbnRTdHJldGNoJywgJ2ZvbnRTdHlsZScsICdmb250VmFyaWFudCcsICdmb250VmFyaWFudExpZ2F0dXJlcycsICdmb250V2VpZ2h0JywgJ2xpbmVIZWlnaHQnXSxcbiAgICBsaXN0U3R5bGU6IFsnbGlzdFN0eWxlSW1hZ2UnLCAnbGlzdFN0eWxlUG9zaXRpb24nLCAnbGlzdFN0eWxlVHlwZSddLFxuICAgIG1hcmdpbjogWydtYXJnaW5Cb3R0b20nLCAnbWFyZ2luTGVmdCcsICdtYXJnaW5SaWdodCcsICdtYXJnaW5Ub3AnXSxcbiAgICBwYWRkaW5nOiBbJ3BhZGRpbmdCb3R0b20nLCAncGFkZGluZ0xlZnQnLCAncGFkZGluZ1JpZ2h0JywgJ3BhZGRpbmdUb3AnXSxcbiAgICB0cmFuc2l0aW9uOiBbJ3RyYW5zaXRpb25EZWxheScsICd0cmFuc2l0aW9uRHVyYXRpb24nLCAndHJhbnNpdGlvblByb3BlcnR5JywgJ3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiddXG4gIH07XG5cbiAgX2NoZWNrUHJvcHMgPSBmdW5jdGlvbiBjaGVja1Byb3BzKGNvbmZpZykge1xuICAgIHZhciBjb21wb25lbnROYW1lID0gY29uZmlnLmNvbXBvbmVudE5hbWUsXG4gICAgICAgIHN0eWxlID0gY29uZmlnLnN0eWxlO1xuXG4gICAgaWYgKF90eXBlb2Yoc3R5bGUpICE9PSAnb2JqZWN0JyB8fCAhc3R5bGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc3R5bGVLZXlzID0gT2JqZWN0LmtleXMoc3R5bGUpO1xuICAgIHN0eWxlS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChzdHlsZUtleSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2hvcnRoYW5kUHJvcGVydHlFeHBhbnNpb25zW3N0eWxlS2V5XSkgJiYgc2hvcnRoYW5kUHJvcGVydHlFeHBhbnNpb25zW3N0eWxlS2V5XS5zb21lKGZ1bmN0aW9uIChzcCkge1xuICAgICAgICByZXR1cm4gc3R5bGVLZXlzLmluZGV4T2Yoc3ApICE9PSAtMTtcbiAgICAgIH0pKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICAgIGNvbnNvbGUud2FybignUmFkaXVtOiBwcm9wZXJ0eSBcIicgKyBzdHlsZUtleSArICdcIiBpbiBzdHlsZSBvYmplY3QnLCBzdHlsZSwgJzogZG8gbm90IG1peCBsb25naGFuZCBhbmQgJyArICdzaG9ydGhhbmQgcHJvcGVydGllcyBpbiB0aGUgc2FtZSBzdHlsZSBvYmplY3QuIENoZWNrIHRoZSByZW5kZXIgJyArICdtZXRob2Qgb2YgJyArIGNvbXBvbmVudE5hbWUgKyAnLicsICdTZWUgaHR0cHM6Ly9naXRodWIuY29tL0Zvcm1pZGFibGVMYWJzL3JhZGl1bS9pc3N1ZXMvOTUgZm9yIG1vcmUgJyArICdpbmZvcm1hdGlvbi4nKTtcbiAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHN0eWxlS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICByZXR1cm4gX2NoZWNrUHJvcHMoX29iamVjdFNwcmVhZCh7fSwgY29uZmlnLCB7XG4gICAgICAgIHN0eWxlOiBzdHlsZVtrXVxuICAgICAgfSkpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgX2NoZWNrUHJvcHM7IiwiLyogZXNsaW50LWRpc2FibGUgYmxvY2stc2NvcGVkLWNvbnN0ICovXG5pbXBvcnQgY2hlY2tQcm9wc1BsdWdpbiBmcm9tICcuL2NoZWNrLXByb3BzLXBsdWdpbic7XG5pbXBvcnQga2V5ZnJhbWVzUGx1Z2luIGZyb20gJy4va2V5ZnJhbWVzLXBsdWdpbic7XG5pbXBvcnQgbWVyZ2VTdHlsZUFycmF5UGx1Z2luIGZyb20gJy4vbWVyZ2Utc3R5bGUtYXJyYXktcGx1Z2luJztcbmltcG9ydCBwcmVmaXhQbHVnaW4gZnJvbSAnLi9wcmVmaXgtcGx1Z2luJztcbmltcG9ydCByZW1vdmVOZXN0ZWRTdHlsZXNQbHVnaW4gZnJvbSAnLi9yZW1vdmUtbmVzdGVkLXN0eWxlcy1wbHVnaW4nO1xuaW1wb3J0IHJlc29sdmVJbnRlcmFjdGlvblN0eWxlc1BsdWdpbiBmcm9tICcuL3Jlc29sdmUtaW50ZXJhY3Rpb24tc3R5bGVzLXBsdWdpbic7XG5pbXBvcnQgcmVzb2x2ZU1lZGlhUXVlcmllc1BsdWdpbiBmcm9tICcuL3Jlc29sdmUtbWVkaWEtcXVlcmllcy1wbHVnaW4nO1xuaW1wb3J0IHZpc2l0ZWRQbHVnaW4gZnJvbSAnLi92aXNpdGVkLXBsdWdpbic7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGNoZWNrUHJvcHM6IGNoZWNrUHJvcHNQbHVnaW4sXG4gIGtleWZyYW1lczoga2V5ZnJhbWVzUGx1Z2luLFxuICBtZXJnZVN0eWxlQXJyYXk6IG1lcmdlU3R5bGVBcnJheVBsdWdpbixcbiAgcHJlZml4OiBwcmVmaXhQbHVnaW4sXG4gIHJlbW92ZU5lc3RlZFN0eWxlczogcmVtb3ZlTmVzdGVkU3R5bGVzUGx1Z2luLFxuICByZXNvbHZlSW50ZXJhY3Rpb25TdHlsZXM6IHJlc29sdmVJbnRlcmFjdGlvblN0eWxlc1BsdWdpbixcbiAgcmVzb2x2ZU1lZGlhUXVlcmllczogcmVzb2x2ZU1lZGlhUXVlcmllc1BsdWdpbixcbiAgdmlzaXRlZDogdmlzaXRlZFBsdWdpblxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBrZXlmcmFtZXNQbHVnaW4oX3JlZikge1xuICB2YXIgYWRkQ1NTID0gX3JlZi5hZGRDU1MsXG4gICAgICBjb25maWcgPSBfcmVmLmNvbmZpZyxcbiAgICAgIHN0eWxlID0gX3JlZi5zdHlsZTtcblxuICB2YXIgcHJvY2Vzc0tleWZyYW1lU3R5bGUgPSBmdW5jdGlvbiBwcm9jZXNzS2V5ZnJhbWVTdHlsZSh2YWx1ZSkge1xuICAgIHZhciBrZXlmcmFtZXNWYWx1ZSA9IHZhbHVlO1xuXG4gICAgdmFyIF9rZXlmcmFtZXNWYWx1ZSRfX3BybyA9IGtleWZyYW1lc1ZhbHVlLl9fcHJvY2Vzcyhjb25maWcudXNlckFnZW50KSxcbiAgICAgICAgYW5pbWF0aW9uTmFtZSA9IF9rZXlmcmFtZXNWYWx1ZSRfX3Byby5hbmltYXRpb25OYW1lLFxuICAgICAgICBjc3MgPSBfa2V5ZnJhbWVzVmFsdWUkX19wcm8uY3NzO1xuXG4gICAgYWRkQ1NTKGNzcyk7XG4gICAgcmV0dXJuIGFuaW1hdGlvbk5hbWU7XG4gIH07XG5cbiAgdmFyIG5ld1N0eWxlID0gT2JqZWN0LmtleXMoc3R5bGUpLnJlZHVjZShmdW5jdGlvbiAobmV3U3R5bGVJblByb2dyZXNzLCBrZXkpIHtcbiAgICB2YXIgdmFsdWUgPSBzdHlsZVtrZXldO1xuICAgIHZhciBpc0tleWZyYW1lQXJyYXkgPSBBcnJheS5pc0FycmF5KHZhbHVlKTtcblxuICAgIGlmIChrZXkgPT09ICdhbmltYXRpb25OYW1lJyAmJiB2YWx1ZSAmJiAodmFsdWUuX19yYWRpdW1LZXlmcmFtZXMgfHwgaXNLZXlmcmFtZUFycmF5KSkge1xuICAgICAgaWYgKGlzS2V5ZnJhbWVBcnJheSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLm1hcChwcm9jZXNzS2V5ZnJhbWVTdHlsZSkuam9pbignLCAnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gcHJvY2Vzc0tleWZyYW1lU3R5bGUodmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5ld1N0eWxlSW5Qcm9ncmVzc1trZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIG5ld1N0eWxlSW5Qcm9ncmVzcztcbiAgfSwge30pO1xuICByZXR1cm4ge1xuICAgIHN0eWxlOiBuZXdTdHlsZVxuICB9O1xufSIsIi8vIENvbnZlbmllbnQgc3ludGF4IGZvciBtdWx0aXBsZSBzdHlsZXM6IGBzdHlsZT17W3N0eWxlMSwgc3R5bGUyLCBldGNdfWBcbi8vIElnbm9yZXMgbm9uLW9iamVjdHMsIHNvIHlvdSBjYW4gZG8gYHRoaXMuc3RhdGUuaXNDb29sICYmIHN0eWxlcy5jb29sYC5cbnZhciBtZXJnZVN0eWxlQXJyYXlQbHVnaW4gPSBmdW5jdGlvbiBtZXJnZVN0eWxlQXJyYXlQbHVnaW4oX3JlZikge1xuICB2YXIgc3R5bGUgPSBfcmVmLnN0eWxlLFxuICAgICAgbWVyZ2VTdHlsZXMgPSBfcmVmLm1lcmdlU3R5bGVzO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNoYWRvd1xuICB2YXIgbmV3U3R5bGUgPSBBcnJheS5pc0FycmF5KHN0eWxlKSA/IG1lcmdlU3R5bGVzKHN0eWxlKSA6IHN0eWxlO1xuICByZXR1cm4ge1xuICAgIHN0eWxlOiBuZXdTdHlsZVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2VTdHlsZUFycmF5UGx1Z2luOyIsInZhciBfY2FsbGJhY2tzID0gW107XG52YXIgX21vdXNlVXBMaXN0ZW5lcklzQWN0aXZlID0gZmFsc2U7XG5cbmZ1bmN0aW9uIF9oYW5kbGVNb3VzZVVwKCkge1xuICBfY2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2soKTtcbiAgfSk7XG59XG5cbnZhciBzdWJzY3JpYmUgPSBmdW5jdGlvbiBzdWJzY3JpYmUoY2FsbGJhY2spIHtcbiAgaWYgKF9jYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjaykgPT09IC0xKSB7XG4gICAgX2NhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGlmICghX21vdXNlVXBMaXN0ZW5lcklzQWN0aXZlKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBfaGFuZGxlTW91c2VVcCk7XG4gICAgX21vdXNlVXBMaXN0ZW5lcklzQWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgaW5kZXggPSBfY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spO1xuXG4gICAgICBfY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgIGlmIChfY2FsbGJhY2tzLmxlbmd0aCA9PT0gMCAmJiBfbW91c2VVcExpc3RlbmVySXNBY3RpdmUpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBfaGFuZGxlTW91c2VVcCk7XG4gICAgICAgIF9tb3VzZVVwTGlzdGVuZXJJc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gIF9fdHJpZ2dlckZvclRlc3RzOiBfaGFuZGxlTW91c2VVcFxufTsiLCJpbXBvcnQgeyBnZXRQcmVmaXhlZFN0eWxlIH0gZnJvbSAnLi4vcHJlZml4ZXInO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlZml4UGx1Z2luKF9yZWYpIHtcbiAgdmFyIGNvbmZpZyA9IF9yZWYuY29uZmlnLFxuICAgICAgc3R5bGUgPSBfcmVmLnN0eWxlO1xuICB2YXIgbmV3U3R5bGUgPSBnZXRQcmVmaXhlZFN0eWxlKHN0eWxlLCBjb25maWcudXNlckFnZW50KTtcbiAgcmV0dXJuIHtcbiAgICBzdHlsZTogbmV3U3R5bGVcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVOZXN0ZWRTdHlsZXMoX3JlZikge1xuICB2YXIgaXNOZXN0ZWRTdHlsZSA9IF9yZWYuaXNOZXN0ZWRTdHlsZSxcbiAgICAgIHN0eWxlID0gX3JlZi5zdHlsZTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zaGFkb3dcbiAgdmFyIG5ld1N0eWxlID0gT2JqZWN0LmtleXMoc3R5bGUpLnJlZHVjZShmdW5jdGlvbiAobmV3U3R5bGVJblByb2dyZXNzLCBrZXkpIHtcbiAgICB2YXIgdmFsdWUgPSBzdHlsZVtrZXldO1xuXG4gICAgaWYgKCFpc05lc3RlZFN0eWxlKHZhbHVlKSkge1xuICAgICAgbmV3U3R5bGVJblByb2dyZXNzW2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3U3R5bGVJblByb2dyZXNzO1xuICB9LCB7fSk7XG4gIHJldHVybiB7XG4gICAgc3R5bGU6IG5ld1N0eWxlXG4gIH07XG59IiwiaW1wb3J0IE1vdXNlVXBMaXN0ZW5lciBmcm9tICcuL21vdXNlLXVwLWxpc3RlbmVyJztcblxudmFyIF9pc0ludGVyYWN0aXZlU3R5bGVGaWVsZCA9IGZ1bmN0aW9uIF9pc0ludGVyYWN0aXZlU3R5bGVGaWVsZChzdHlsZUZpZWxkTmFtZSkge1xuICByZXR1cm4gc3R5bGVGaWVsZE5hbWUgPT09ICc6aG92ZXInIHx8IHN0eWxlRmllbGROYW1lID09PSAnOmFjdGl2ZScgfHwgc3R5bGVGaWVsZE5hbWUgPT09ICc6Zm9jdXMnO1xufTtcblxudmFyIHJlc29sdmVJbnRlcmFjdGlvblN0eWxlcyA9IGZ1bmN0aW9uIHJlc29sdmVJbnRlcmFjdGlvblN0eWxlcyhjb25maWcpIHtcbiAgdmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0gY29uZmlnLkV4ZWN1dGlvbkVudmlyb25tZW50LFxuICAgICAgZ2V0Q29tcG9uZW50RmllbGQgPSBjb25maWcuZ2V0Q29tcG9uZW50RmllbGQsXG4gICAgICBnZXRTdGF0ZSA9IGNvbmZpZy5nZXRTdGF0ZSxcbiAgICAgIG1lcmdlU3R5bGVzID0gY29uZmlnLm1lcmdlU3R5bGVzLFxuICAgICAgcHJvcHMgPSBjb25maWcucHJvcHMsXG4gICAgICBzZXRTdGF0ZSA9IGNvbmZpZy5zZXRTdGF0ZSxcbiAgICAgIHN0eWxlID0gY29uZmlnLnN0eWxlO1xuICB2YXIgbmV3Q29tcG9uZW50RmllbGRzID0ge307XG4gIHZhciBuZXdQcm9wcyA9IHt9OyAvLyBPbmx5IGFkZCBoYW5kbGVycyBpZiBuZWNlc3NhcnlcblxuICBpZiAoc3R5bGVbJzpob3ZlciddKSB7XG4gICAgLy8gQWx3YXlzIGNhbGwgdGhlIGV4aXN0aW5nIGhhbmRsZXIgaWYgb25lIGlzIGFscmVhZHkgZGVmaW5lZC5cbiAgICAvLyBUaGlzIGNvZGUsIGFuZCB0aGUgdmVyeSBzaW1pbGFyIG9uZXMgYmVsb3csIGNvdWxkIGJlIGFic3RyYWN0ZWQgYSBiaXRcbiAgICAvLyBtb3JlLCBidXQgaXQgaHVydHMgcmVhZGFiaWxpdHkgSU1PLlxuICAgIHZhciBleGlzdGluZ09uTW91c2VFbnRlciA9IHByb3BzLm9uTW91c2VFbnRlcjtcblxuICAgIG5ld1Byb3BzLm9uTW91c2VFbnRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBleGlzdGluZ09uTW91c2VFbnRlciAmJiBleGlzdGluZ09uTW91c2VFbnRlcihlKTtcbiAgICAgIHNldFN0YXRlKCc6aG92ZXInLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgdmFyIGV4aXN0aW5nT25Nb3VzZUxlYXZlID0gcHJvcHMub25Nb3VzZUxlYXZlO1xuXG4gICAgbmV3UHJvcHMub25Nb3VzZUxlYXZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGV4aXN0aW5nT25Nb3VzZUxlYXZlICYmIGV4aXN0aW5nT25Nb3VzZUxlYXZlKGUpO1xuICAgICAgc2V0U3RhdGUoJzpob3ZlcicsIGZhbHNlKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKHN0eWxlWyc6YWN0aXZlJ10pIHtcbiAgICB2YXIgZXhpc3RpbmdPbk1vdXNlRG93biA9IHByb3BzLm9uTW91c2VEb3duO1xuXG4gICAgbmV3UHJvcHMub25Nb3VzZURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZXhpc3RpbmdPbk1vdXNlRG93biAmJiBleGlzdGluZ09uTW91c2VEb3duKGUpO1xuICAgICAgbmV3Q29tcG9uZW50RmllbGRzLl9sYXN0TW91c2VEb3duID0gRGF0ZS5ub3coKTtcbiAgICAgIHNldFN0YXRlKCc6YWN0aXZlJywgJ3ZpYW1vdXNlZG93bicpO1xuICAgIH07XG5cbiAgICB2YXIgZXhpc3RpbmdPbktleURvd24gPSBwcm9wcy5vbktleURvd247XG5cbiAgICBuZXdQcm9wcy5vbktleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZXhpc3RpbmdPbktleURvd24gJiYgZXhpc3RpbmdPbktleURvd24oZSk7XG5cbiAgICAgIGlmIChlLmtleSA9PT0gJyAnIHx8IGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIHNldFN0YXRlKCc6YWN0aXZlJywgJ3ZpYWtleWRvd24nKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGV4aXN0aW5nT25LZXlVcCA9IHByb3BzLm9uS2V5VXA7XG5cbiAgICBuZXdQcm9wcy5vbktleVVwID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGV4aXN0aW5nT25LZXlVcCAmJiBleGlzdGluZ09uS2V5VXAoZSk7XG5cbiAgICAgIGlmIChlLmtleSA9PT0gJyAnIHx8IGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIHNldFN0YXRlKCc6YWN0aXZlJywgZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBpZiAoc3R5bGVbJzpmb2N1cyddKSB7XG4gICAgdmFyIGV4aXN0aW5nT25Gb2N1cyA9IHByb3BzLm9uRm9jdXM7XG5cbiAgICBuZXdQcm9wcy5vbkZvY3VzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGV4aXN0aW5nT25Gb2N1cyAmJiBleGlzdGluZ09uRm9jdXMoZSk7XG4gICAgICBzZXRTdGF0ZSgnOmZvY3VzJywgdHJ1ZSk7XG4gICAgfTtcblxuICAgIHZhciBleGlzdGluZ09uQmx1ciA9IHByb3BzLm9uQmx1cjtcblxuICAgIG5ld1Byb3BzLm9uQmx1ciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBleGlzdGluZ09uQmx1ciAmJiBleGlzdGluZ09uQmx1cihlKTtcbiAgICAgIHNldFN0YXRlKCc6Zm9jdXMnLCBmYWxzZSk7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChzdHlsZVsnOmFjdGl2ZSddICYmICFnZXRDb21wb25lbnRGaWVsZCgnX3JhZGl1bU1vdXNlVXBMaXN0ZW5lcicpICYmIEV4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZUV2ZW50TGlzdGVuZXJzKSB7XG4gICAgbmV3Q29tcG9uZW50RmllbGRzLl9yYWRpdW1Nb3VzZVVwTGlzdGVuZXIgPSBNb3VzZVVwTGlzdGVuZXIuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgIE9iamVjdC5rZXlzKGdldENvbXBvbmVudEZpZWxkKCdzdGF0ZScpLl9yYWRpdW1TdHlsZVN0YXRlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKGdldFN0YXRlKCc6YWN0aXZlJywga2V5KSA9PT0gJ3ZpYW1vdXNlZG93bicpIHtcbiAgICAgICAgICBzZXRTdGF0ZSgnOmFjdGl2ZScsIGZhbHNlLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSAvLyBNZXJnZSB0aGUgc3R5bGVzIGluIHRoZSBvcmRlciB0aGV5IHdlcmUgZGVmaW5lZFxuXG5cbiAgdmFyIGludGVyYWN0aW9uU3R5bGVzID0gcHJvcHMuZGlzYWJsZWQgPyBbc3R5bGVbJzpkaXNhYmxlZCddXSA6IE9iamVjdC5rZXlzKHN0eWxlKS5maWx0ZXIoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gX2lzSW50ZXJhY3RpdmVTdHlsZUZpZWxkKG5hbWUpICYmIGdldFN0YXRlKG5hbWUpO1xuICB9KS5tYXAoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gc3R5bGVbbmFtZV07XG4gIH0pO1xuICB2YXIgbmV3U3R5bGUgPSBtZXJnZVN0eWxlcyhbc3R5bGVdLmNvbmNhdChpbnRlcmFjdGlvblN0eWxlcykpOyAvLyBSZW1vdmUgaW50ZXJhY3RpdmUgc3R5bGVzXG5cbiAgbmV3U3R5bGUgPSBPYmplY3Qua2V5cyhuZXdTdHlsZSkucmVkdWNlKGZ1bmN0aW9uIChzdHlsZVdpdGhvdXRJbnRlcmFjdGlvbnMsIG5hbWUpIHtcbiAgICBpZiAoIV9pc0ludGVyYWN0aXZlU3R5bGVGaWVsZChuYW1lKSAmJiBuYW1lICE9PSAnOmRpc2FibGVkJykge1xuICAgICAgc3R5bGVXaXRob3V0SW50ZXJhY3Rpb25zW25hbWVdID0gbmV3U3R5bGVbbmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlV2l0aG91dEludGVyYWN0aW9ucztcbiAgfSwge30pO1xuICByZXR1cm4ge1xuICAgIGNvbXBvbmVudEZpZWxkczogbmV3Q29tcG9uZW50RmllbGRzLFxuICAgIHByb3BzOiBuZXdQcm9wcyxcbiAgICBzdHlsZTogbmV3U3R5bGVcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc29sdmVJbnRlcmFjdGlvblN0eWxlczsiLCJmdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHsgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTsgfSkpOyB9IG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBfd2luZG93TWF0Y2hNZWRpYTtcblxuZnVuY3Rpb24gX2dldFdpbmRvd01hdGNoTWVkaWEoRXhlY3V0aW9uRW52aXJvbm1lbnQpIHtcbiAgaWYgKF93aW5kb3dNYXRjaE1lZGlhID09PSB1bmRlZmluZWQpIHtcbiAgICBfd2luZG93TWF0Y2hNZWRpYSA9ICEhRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NICYmICEhd2luZG93ICYmICEhd2luZG93Lm1hdGNoTWVkaWEgJiYgZnVuY3Rpb24gKG1lZGlhUXVlcnlTdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShtZWRpYVF1ZXJ5U3RyaW5nKTtcbiAgICB9IHx8IG51bGw7XG4gIH1cblxuICByZXR1cm4gX3dpbmRvd01hdGNoTWVkaWE7XG59XG5cbmZ1bmN0aW9uIF9maWx0ZXJPYmplY3Qob2JqLCBwcmVkaWNhdGUpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gcHJlZGljYXRlKG9ialtrZXldLCBrZXkpO1xuICB9KS5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwga2V5KSB7XG4gICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIF9yZW1vdmVNZWRpYVF1ZXJpZXMoc3R5bGUpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlKS5yZWR1Y2UoZnVuY3Rpb24gKHN0eWxlV2l0aG91dE1lZGlhLCBrZXkpIHtcbiAgICBpZiAoa2V5LmluZGV4T2YoJ0BtZWRpYScpICE9PSAwKSB7XG4gICAgICBzdHlsZVdpdGhvdXRNZWRpYVtrZXldID0gc3R5bGVba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVXaXRob3V0TWVkaWE7XG4gIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gX3RvcExldmVsUnVsZXNUb0NTUyhfcmVmKSB7XG4gIHZhciBhZGRDU1MgPSBfcmVmLmFkZENTUyxcbiAgICAgIGFwcGVuZEltcG9ydGFudFRvRWFjaFZhbHVlID0gX3JlZi5hcHBlbmRJbXBvcnRhbnRUb0VhY2hWYWx1ZSxcbiAgICAgIGNzc1J1bGVTZXRUb1N0cmluZyA9IF9yZWYuY3NzUnVsZVNldFRvU3RyaW5nLFxuICAgICAgaGFzaCA9IF9yZWYuaGFzaCxcbiAgICAgIGlzTmVzdGVkU3R5bGUgPSBfcmVmLmlzTmVzdGVkU3R5bGUsXG4gICAgICBzdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICB1c2VyQWdlbnQgPSBfcmVmLnVzZXJBZ2VudDtcbiAgdmFyIGNsYXNzTmFtZSA9ICcnO1xuICBPYmplY3Qua2V5cyhzdHlsZSkuZmlsdGVyKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWUuaW5kZXhPZignQG1lZGlhJykgPT09IDA7XG4gIH0pLm1hcChmdW5jdGlvbiAocXVlcnkpIHtcbiAgICB2YXIgdG9wTGV2ZWxSdWxlcyA9IGFwcGVuZEltcG9ydGFudFRvRWFjaFZhbHVlKF9maWx0ZXJPYmplY3Qoc3R5bGVbcXVlcnldLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiAhaXNOZXN0ZWRTdHlsZSh2YWx1ZSk7XG4gICAgfSkpO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyh0b3BMZXZlbFJ1bGVzKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcnVsZUNTUyA9IGNzc1J1bGVTZXRUb1N0cmluZygnJywgdG9wTGV2ZWxSdWxlcywgdXNlckFnZW50KTsgLy8gQ1NTIGNsYXNzZXMgY2Fubm90IHN0YXJ0IHdpdGggYSBudW1iZXJcblxuICAgIHZhciBtZWRpYVF1ZXJ5Q2xhc3NOYW1lID0gJ3JtcS0nICsgaGFzaChxdWVyeSArIHJ1bGVDU1MpO1xuICAgIHZhciBjc3MgPSBxdWVyeSArICd7IC4nICsgbWVkaWFRdWVyeUNsYXNzTmFtZSArIHJ1bGVDU1MgKyAnfSc7XG4gICAgYWRkQ1NTKGNzcyk7XG4gICAgY2xhc3NOYW1lICs9IChjbGFzc05hbWUgPyAnICcgOiAnJykgKyBtZWRpYVF1ZXJ5Q2xhc3NOYW1lO1xuICB9KTtcbiAgcmV0dXJuIGNsYXNzTmFtZTtcbn1cblxuZnVuY3Rpb24gX3N1YnNjcmliZVRvTWVkaWFRdWVyeShfcmVmMikge1xuICB2YXIgbGlzdGVuZXIgPSBfcmVmMi5saXN0ZW5lcixcbiAgICAgIGxpc3RlbmVyc0J5UXVlcnkgPSBfcmVmMi5saXN0ZW5lcnNCeVF1ZXJ5LFxuICAgICAgbWF0Y2hNZWRpYSA9IF9yZWYyLm1hdGNoTWVkaWEsXG4gICAgICBtZWRpYVF1ZXJ5TGlzdHNCeVF1ZXJ5ID0gX3JlZjIubWVkaWFRdWVyeUxpc3RzQnlRdWVyeSxcbiAgICAgIHF1ZXJ5ID0gX3JlZjIucXVlcnk7XG4gIHF1ZXJ5ID0gcXVlcnkucmVwbGFjZSgnQG1lZGlhICcsICcnKTtcbiAgdmFyIG1xbCA9IG1lZGlhUXVlcnlMaXN0c0J5UXVlcnlbcXVlcnldO1xuXG4gIGlmICghbXFsICYmIG1hdGNoTWVkaWEpIHtcbiAgICBtZWRpYVF1ZXJ5TGlzdHNCeVF1ZXJ5W3F1ZXJ5XSA9IG1xbCA9IG1hdGNoTWVkaWEocXVlcnkpO1xuICB9XG5cbiAgaWYgKCFsaXN0ZW5lcnNCeVF1ZXJ5IHx8ICFsaXN0ZW5lcnNCeVF1ZXJ5W3F1ZXJ5XSkge1xuICAgIG1xbC5hZGRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgbGlzdGVuZXJzQnlRdWVyeVtxdWVyeV0gPSB7XG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgbXFsLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIG1xbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZU1lZGlhUXVlcmllcyhfcmVmMykge1xuICB2YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSBfcmVmMy5FeGVjdXRpb25FbnZpcm9ubWVudCxcbiAgICAgIGFkZENTUyA9IF9yZWYzLmFkZENTUyxcbiAgICAgIGFwcGVuZEltcG9ydGFudFRvRWFjaFZhbHVlID0gX3JlZjMuYXBwZW5kSW1wb3J0YW50VG9FYWNoVmFsdWUsXG4gICAgICBjb25maWcgPSBfcmVmMy5jb25maWcsXG4gICAgICBjc3NSdWxlU2V0VG9TdHJpbmcgPSBfcmVmMy5jc3NSdWxlU2V0VG9TdHJpbmcsXG4gICAgICBnZXRDb21wb25lbnRGaWVsZCA9IF9yZWYzLmdldENvbXBvbmVudEZpZWxkLFxuICAgICAgZ2V0R2xvYmFsU3RhdGUgPSBfcmVmMy5nZXRHbG9iYWxTdGF0ZSxcbiAgICAgIGhhc2ggPSBfcmVmMy5oYXNoLFxuICAgICAgaXNOZXN0ZWRTdHlsZSA9IF9yZWYzLmlzTmVzdGVkU3R5bGUsXG4gICAgICBtZXJnZVN0eWxlcyA9IF9yZWYzLm1lcmdlU3R5bGVzLFxuICAgICAgcHJvcHMgPSBfcmVmMy5wcm9wcyxcbiAgICAgIHNldFN0YXRlID0gX3JlZjMuc2V0U3RhdGUsXG4gICAgICBzdHlsZSA9IF9yZWYzLnN0eWxlO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2hhZG93XG4gIHZhciBuZXdTdHlsZSA9IF9yZW1vdmVNZWRpYVF1ZXJpZXMoc3R5bGUpO1xuXG4gIHZhciBtZWRpYVF1ZXJ5Q2xhc3NOYW1lcyA9IF90b3BMZXZlbFJ1bGVzVG9DU1Moe1xuICAgIGFkZENTUzogYWRkQ1NTLFxuICAgIGFwcGVuZEltcG9ydGFudFRvRWFjaFZhbHVlOiBhcHBlbmRJbXBvcnRhbnRUb0VhY2hWYWx1ZSxcbiAgICBjc3NSdWxlU2V0VG9TdHJpbmc6IGNzc1J1bGVTZXRUb1N0cmluZyxcbiAgICBoYXNoOiBoYXNoLFxuICAgIGlzTmVzdGVkU3R5bGU6IGlzTmVzdGVkU3R5bGUsXG4gICAgc3R5bGU6IHN0eWxlLFxuICAgIHVzZXJBZ2VudDogY29uZmlnLnVzZXJBZ2VudFxuICB9KTtcblxuICB2YXIgbmV3UHJvcHMgPSBtZWRpYVF1ZXJ5Q2xhc3NOYW1lcyA/IHtcbiAgICBjbGFzc05hbWU6IG1lZGlhUXVlcnlDbGFzc05hbWVzICsgKHByb3BzLmNsYXNzTmFtZSA/ICcgJyArIHByb3BzLmNsYXNzTmFtZSA6ICcnKVxuICB9IDogbnVsbDtcblxuICB2YXIgbWF0Y2hNZWRpYSA9IGNvbmZpZy5tYXRjaE1lZGlhIHx8IF9nZXRXaW5kb3dNYXRjaE1lZGlhKEV4ZWN1dGlvbkVudmlyb25tZW50KTtcblxuICBpZiAoIW1hdGNoTWVkaWEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IG5ld1Byb3BzLFxuICAgICAgc3R5bGU6IG5ld1N0eWxlXG4gICAgfTtcbiAgfVxuXG4gIHZhciBsaXN0ZW5lcnNCeVF1ZXJ5ID0gX29iamVjdFNwcmVhZCh7fSwgZ2V0Q29tcG9uZW50RmllbGQoJ19yYWRpdW1NZWRpYVF1ZXJ5TGlzdGVuZXJzQnlRdWVyeScpKTtcblxuICB2YXIgbWVkaWFRdWVyeUxpc3RzQnlRdWVyeSA9IGdldEdsb2JhbFN0YXRlKCdtZWRpYVF1ZXJ5TGlzdHNCeVF1ZXJ5JykgfHwge307XG4gIE9iamVjdC5rZXlzKHN0eWxlKS5maWx0ZXIoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZS5pbmRleE9mKCdAbWVkaWEnKSA9PT0gMDtcbiAgfSkubWFwKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgIHZhciBuZXN0ZWRSdWxlcyA9IF9maWx0ZXJPYmplY3Qoc3R5bGVbcXVlcnldLCBpc05lc3RlZFN0eWxlKTtcblxuICAgIGlmICghT2JqZWN0LmtleXMobmVzdGVkUnVsZXMpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBtcWwgPSBfc3Vic2NyaWJlVG9NZWRpYVF1ZXJ5KHtcbiAgICAgIGxpc3RlbmVyOiBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICAgICAgcmV0dXJuIHNldFN0YXRlKHF1ZXJ5LCBtcWwubWF0Y2hlcywgJ19hbGwnKTtcbiAgICAgIH0sXG4gICAgICBsaXN0ZW5lcnNCeVF1ZXJ5OiBsaXN0ZW5lcnNCeVF1ZXJ5LFxuICAgICAgbWF0Y2hNZWRpYTogbWF0Y2hNZWRpYSxcbiAgICAgIG1lZGlhUXVlcnlMaXN0c0J5UXVlcnk6IG1lZGlhUXVlcnlMaXN0c0J5UXVlcnksXG4gICAgICBxdWVyeTogcXVlcnlcbiAgICB9KTsgLy8gQXBwbHkgbWVkaWEgcXVlcnkgc3RhdGVzXG5cblxuICAgIGlmIChtcWwubWF0Y2hlcykge1xuICAgICAgbmV3U3R5bGUgPSBtZXJnZVN0eWxlcyhbbmV3U3R5bGUsIG5lc3RlZFJ1bGVzXSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBjb21wb25lbnRGaWVsZHM6IHtcbiAgICAgIF9yYWRpdW1NZWRpYVF1ZXJ5TGlzdGVuZXJzQnlRdWVyeTogbGlzdGVuZXJzQnlRdWVyeVxuICAgIH0sXG4gICAgZ2xvYmFsU3RhdGU6IHtcbiAgICAgIG1lZGlhUXVlcnlMaXN0c0J5UXVlcnk6IG1lZGlhUXVlcnlMaXN0c0J5UXVlcnlcbiAgICB9LFxuICAgIHByb3BzOiBuZXdQcm9wcyxcbiAgICBzdHlsZTogbmV3U3R5bGVcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2aXNpdGVkKF9yZWYpIHtcbiAgdmFyIGFkZENTUyA9IF9yZWYuYWRkQ1NTLFxuICAgICAgYXBwZW5kSW1wb3J0YW50VG9FYWNoVmFsdWUgPSBfcmVmLmFwcGVuZEltcG9ydGFudFRvRWFjaFZhbHVlLFxuICAgICAgY29uZmlnID0gX3JlZi5jb25maWcsXG4gICAgICBjc3NSdWxlU2V0VG9TdHJpbmcgPSBfcmVmLmNzc1J1bGVTZXRUb1N0cmluZyxcbiAgICAgIGhhc2ggPSBfcmVmLmhhc2gsXG4gICAgICBwcm9wcyA9IF9yZWYucHJvcHMsXG4gICAgICBzdHlsZSA9IF9yZWYuc3R5bGU7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2hhZG93XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XG4gIHZhciBuZXdTdHlsZSA9IE9iamVjdC5rZXlzKHN0eWxlKS5yZWR1Y2UoZnVuY3Rpb24gKG5ld1N0eWxlSW5Qcm9ncmVzcywga2V5KSB7XG4gICAgdmFyIHZhbHVlID0gc3R5bGVba2V5XTtcblxuICAgIGlmIChrZXkgPT09ICc6dmlzaXRlZCcpIHtcbiAgICAgIHZhbHVlID0gYXBwZW5kSW1wb3J0YW50VG9FYWNoVmFsdWUodmFsdWUpO1xuICAgICAgdmFyIHJ1bGVDU1MgPSBjc3NSdWxlU2V0VG9TdHJpbmcoJycsIHZhbHVlLCBjb25maWcudXNlckFnZW50KTtcbiAgICAgIHZhciB2aXNpdGVkQ2xhc3NOYW1lID0gJ3JhZC0nICsgaGFzaChydWxlQ1NTKTtcbiAgICAgIHZhciBjc3MgPSAnLicgKyB2aXNpdGVkQ2xhc3NOYW1lICsgJzp2aXNpdGVkJyArIHJ1bGVDU1M7XG4gICAgICBhZGRDU1MoY3NzKTtcbiAgICAgIGNsYXNzTmFtZSA9IChjbGFzc05hbWUgPyBjbGFzc05hbWUgKyAnICcgOiAnJykgKyB2aXNpdGVkQ2xhc3NOYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZUluUHJvZ3Jlc3Nba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdTdHlsZUluUHJvZ3Jlc3M7XG4gIH0sIHt9KTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogY2xhc3NOYW1lID09PSBwcm9wcy5jbGFzc05hbWUgPyBudWxsIDoge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICB9LFxuICAgIHN0eWxlOiBuZXdTdHlsZVxuICB9O1xufSIsImltcG9ydCBjYWxjIGZyb20gJ2lubGluZS1zdHlsZS1wcmVmaXhlci9keW5hbWljL3BsdWdpbnMvY2FsYyc7XG5pbXBvcnQgY3Jvc3NGYWRlIGZyb20gJ2lubGluZS1zdHlsZS1wcmVmaXhlci9keW5hbWljL3BsdWdpbnMvY3Jvc3NGYWRlJztcbmltcG9ydCBjdXJzb3IgZnJvbSAnaW5saW5lLXN0eWxlLXByZWZpeGVyL2R5bmFtaWMvcGx1Z2lucy9jdXJzb3InO1xuaW1wb3J0IGZpbHRlciBmcm9tICdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvZHluYW1pYy9wbHVnaW5zL2ZpbHRlcic7XG5pbXBvcnQgZmxleCBmcm9tICdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvZHluYW1pYy9wbHVnaW5zL2ZsZXgnO1xuaW1wb3J0IGZsZXhib3hJRSBmcm9tICdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvZHluYW1pYy9wbHVnaW5zL2ZsZXhib3hJRSc7XG5pbXBvcnQgZmxleGJveE9sZCBmcm9tICdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvZHluYW1pYy9wbHVnaW5zL2ZsZXhib3hPbGQnO1xuaW1wb3J0IGdyYWRpZW50IGZyb20gJ2lubGluZS1zdHlsZS1wcmVmaXhlci9keW5hbWljL3BsdWdpbnMvZ3JhZGllbnQnO1xuaW1wb3J0IGltYWdlU2V0IGZyb20gJ2lubGluZS1zdHlsZS1wcmVmaXhlci9keW5hbWljL3BsdWdpbnMvaW1hZ2VTZXQnO1xuaW1wb3J0IHBvc2l0aW9uIGZyb20gJ2lubGluZS1zdHlsZS1wcmVmaXhlci9keW5hbWljL3BsdWdpbnMvcG9zaXRpb24nO1xuaW1wb3J0IHNpemluZyBmcm9tICdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvZHluYW1pYy9wbHVnaW5zL3NpemluZyc7XG5pbXBvcnQgdHJhbnNpdGlvbiBmcm9tICdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvZHluYW1pYy9wbHVnaW5zL3RyYW5zaXRpb24nO1xuZXhwb3J0IGRlZmF1bHQge1xuICBwbHVnaW5zOiBbY2FsYywgY3Jvc3NGYWRlLCBjdXJzb3IsIGZpbHRlciwgZmxleCwgZmxleGJveElFLCBmbGV4Ym94T2xkLCBncmFkaWVudCwgaW1hZ2VTZXQsIHBvc2l0aW9uLCBzaXppbmcsIHRyYW5zaXRpb25dLFxuICBwcmVmaXhNYXA6IHtcbiAgICBjaHJvbWU6IHtcbiAgICAgIHRyYW5zZm9ybTogMzUsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46IDM1LFxuICAgICAgdHJhbnNmb3JtT3JpZ2luWDogMzUsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW5ZOiAzNSxcbiAgICAgIGJhY2tmYWNlVmlzaWJpbGl0eTogMzUsXG4gICAgICBwZXJzcGVjdGl2ZTogMzUsXG4gICAgICBwZXJzcGVjdGl2ZU9yaWdpbjogMzUsXG4gICAgICB0cmFuc2Zvcm1TdHlsZTogMzUsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW5aOiAzNSxcbiAgICAgIGFuaW1hdGlvbjogNDIsXG4gICAgICBhbmltYXRpb25EZWxheTogNDIsXG4gICAgICBhbmltYXRpb25EaXJlY3Rpb246IDQyLFxuICAgICAgYW5pbWF0aW9uRmlsbE1vZGU6IDQyLFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IDQyLFxuICAgICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDQyLFxuICAgICAgYW5pbWF0aW9uTmFtZTogNDIsXG4gICAgICBhbmltYXRpb25QbGF5U3RhdGU6IDQyLFxuICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246IDQyLFxuICAgICAgYXBwZWFyYW5jZTogNjYsXG4gICAgICB1c2VyU2VsZWN0OiA1MyxcbiAgICAgIGZvbnRLZXJuaW5nOiAzMixcbiAgICAgIHRleHRFbXBoYXNpc1Bvc2l0aW9uOiA2NixcbiAgICAgIHRleHRFbXBoYXNpczogNjYsXG4gICAgICB0ZXh0RW1waGFzaXNTdHlsZTogNjYsXG4gICAgICB0ZXh0RW1waGFzaXNDb2xvcjogNjYsXG4gICAgICBib3hEZWNvcmF0aW9uQnJlYWs6IDY2LFxuICAgICAgY2xpcFBhdGg6IDU0LFxuICAgICAgbWFza0ltYWdlOiA2NixcbiAgICAgIG1hc2tNb2RlOiA2NixcbiAgICAgIG1hc2tSZXBlYXQ6IDY2LFxuICAgICAgbWFza1Bvc2l0aW9uOiA2NixcbiAgICAgIG1hc2tDbGlwOiA2NixcbiAgICAgIG1hc2tPcmlnaW46IDY2LFxuICAgICAgbWFza1NpemU6IDY2LFxuICAgICAgbWFza0NvbXBvc2l0ZTogNjYsXG4gICAgICBtYXNrOiA2NixcbiAgICAgIG1hc2tCb3JkZXJTb3VyY2U6IDY2LFxuICAgICAgbWFza0JvcmRlck1vZGU6IDY2LFxuICAgICAgbWFza0JvcmRlclNsaWNlOiA2NixcbiAgICAgIG1hc2tCb3JkZXJXaWR0aDogNjYsXG4gICAgICBtYXNrQm9yZGVyT3V0c2V0OiA2NixcbiAgICAgIG1hc2tCb3JkZXJSZXBlYXQ6IDY2LFxuICAgICAgbWFza0JvcmRlcjogNjYsXG4gICAgICBtYXNrVHlwZTogNjYsXG4gICAgICB0ZXh0RGVjb3JhdGlvblN0eWxlOiA1NixcbiAgICAgIHRleHREZWNvcmF0aW9uU2tpcDogNTYsXG4gICAgICB0ZXh0RGVjb3JhdGlvbkxpbmU6IDU2LFxuICAgICAgdGV4dERlY29yYXRpb25Db2xvcjogNTYsXG4gICAgICBmaWx0ZXI6IDUyLFxuICAgICAgZm9udEZlYXR1cmVTZXR0aW5nczogNDcsXG4gICAgICBicmVha0FmdGVyOiA0OSxcbiAgICAgIGJyZWFrQmVmb3JlOiA0OSxcbiAgICAgIGJyZWFrSW5zaWRlOiA0OSxcbiAgICAgIGNvbHVtbkNvdW50OiA0OSxcbiAgICAgIGNvbHVtbkZpbGw6IDQ5LFxuICAgICAgY29sdW1uR2FwOiA0OSxcbiAgICAgIGNvbHVtblJ1bGU6IDQ5LFxuICAgICAgY29sdW1uUnVsZUNvbG9yOiA0OSxcbiAgICAgIGNvbHVtblJ1bGVTdHlsZTogNDksXG4gICAgICBjb2x1bW5SdWxlV2lkdGg6IDQ5LFxuICAgICAgY29sdW1uczogNDksXG4gICAgICBjb2x1bW5TcGFuOiA0OSxcbiAgICAgIGNvbHVtbldpZHRoOiA0OSxcbiAgICAgIHdyaXRpbmdNb2RlOiA0N1xuICAgIH0sXG4gICAgc2FmYXJpOiB7XG4gICAgICBmbGV4OiA4LFxuICAgICAgZmxleEJhc2lzOiA4LFxuICAgICAgZmxleERpcmVjdGlvbjogOCxcbiAgICAgIGZsZXhHcm93OiA4LFxuICAgICAgZmxleEZsb3c6IDgsXG4gICAgICBmbGV4U2hyaW5rOiA4LFxuICAgICAgZmxleFdyYXA6IDgsXG4gICAgICBhbGlnbkNvbnRlbnQ6IDgsXG4gICAgICBhbGlnbkl0ZW1zOiA4LFxuICAgICAgYWxpZ25TZWxmOiA4LFxuICAgICAganVzdGlmeUNvbnRlbnQ6IDgsXG4gICAgICBvcmRlcjogOCxcbiAgICAgIHRyYW5zaXRpb246IDYsXG4gICAgICB0cmFuc2l0aW9uRGVsYXk6IDYsXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IDYsXG4gICAgICB0cmFuc2l0aW9uUHJvcGVydHk6IDYsXG4gICAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IDYsXG4gICAgICB0cmFuc2Zvcm06IDgsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46IDgsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW5YOiA4LFxuICAgICAgdHJhbnNmb3JtT3JpZ2luWTogOCxcbiAgICAgIGJhY2tmYWNlVmlzaWJpbGl0eTogOCxcbiAgICAgIHBlcnNwZWN0aXZlOiA4LFxuICAgICAgcGVyc3BlY3RpdmVPcmlnaW46IDgsXG4gICAgICB0cmFuc2Zvcm1TdHlsZTogOCxcbiAgICAgIHRyYW5zZm9ybU9yaWdpblo6IDgsXG4gICAgICBhbmltYXRpb246IDgsXG4gICAgICBhbmltYXRpb25EZWxheTogOCxcbiAgICAgIGFuaW1hdGlvbkRpcmVjdGlvbjogOCxcbiAgICAgIGFuaW1hdGlvbkZpbGxNb2RlOiA4LFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IDgsXG4gICAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogOCxcbiAgICAgIGFuaW1hdGlvbk5hbWU6IDgsXG4gICAgICBhbmltYXRpb25QbGF5U3RhdGU6IDgsXG4gICAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogOCxcbiAgICAgIGFwcGVhcmFuY2U6IDExLFxuICAgICAgdXNlclNlbGVjdDogMTEsXG4gICAgICBiYWNrZHJvcEZpbHRlcjogMTEsXG4gICAgICBmb250S2VybmluZzogOSxcbiAgICAgIHNjcm9sbFNuYXBUeXBlOiAxMC4xLFxuICAgICAgc2Nyb2xsU25hcFBvaW50c1g6IDEwLjEsXG4gICAgICBzY3JvbGxTbmFwUG9pbnRzWTogMTAuMSxcbiAgICAgIHNjcm9sbFNuYXBEZXN0aW5hdGlvbjogMTAuMSxcbiAgICAgIHNjcm9sbFNuYXBDb29yZGluYXRlOiAxMC4xLFxuICAgICAgdGV4dEVtcGhhc2lzUG9zaXRpb246IDcsXG4gICAgICB0ZXh0RW1waGFzaXM6IDcsXG4gICAgICB0ZXh0RW1waGFzaXNTdHlsZTogNyxcbiAgICAgIHRleHRFbXBoYXNpc0NvbG9yOiA3LFxuICAgICAgYm94RGVjb3JhdGlvbkJyZWFrOiAxMSxcbiAgICAgIGNsaXBQYXRoOiAxMSxcbiAgICAgIG1hc2tJbWFnZTogMTEsXG4gICAgICBtYXNrTW9kZTogMTEsXG4gICAgICBtYXNrUmVwZWF0OiAxMSxcbiAgICAgIG1hc2tQb3NpdGlvbjogMTEsXG4gICAgICBtYXNrQ2xpcDogMTEsXG4gICAgICBtYXNrT3JpZ2luOiAxMSxcbiAgICAgIG1hc2tTaXplOiAxMSxcbiAgICAgIG1hc2tDb21wb3NpdGU6IDExLFxuICAgICAgbWFzazogMTEsXG4gICAgICBtYXNrQm9yZGVyU291cmNlOiAxMSxcbiAgICAgIG1hc2tCb3JkZXJNb2RlOiAxMSxcbiAgICAgIG1hc2tCb3JkZXJTbGljZTogMTEsXG4gICAgICBtYXNrQm9yZGVyV2lkdGg6IDExLFxuICAgICAgbWFza0JvcmRlck91dHNldDogMTEsXG4gICAgICBtYXNrQm9yZGVyUmVwZWF0OiAxMSxcbiAgICAgIG1hc2tCb3JkZXI6IDExLFxuICAgICAgbWFza1R5cGU6IDExLFxuICAgICAgdGV4dERlY29yYXRpb25TdHlsZTogMTEsXG4gICAgICB0ZXh0RGVjb3JhdGlvblNraXA6IDExLFxuICAgICAgdGV4dERlY29yYXRpb25MaW5lOiAxMSxcbiAgICAgIHRleHREZWNvcmF0aW9uQ29sb3I6IDExLFxuICAgICAgc2hhcGVJbWFnZVRocmVzaG9sZDogMTAsXG4gICAgICBzaGFwZUltYWdlTWFyZ2luOiAxMCxcbiAgICAgIHNoYXBlSW1hZ2VPdXRzaWRlOiAxMCxcbiAgICAgIGZpbHRlcjogOSxcbiAgICAgIGh5cGhlbnM6IDExLFxuICAgICAgZmxvd0ludG86IDExLFxuICAgICAgZmxvd0Zyb206IDExLFxuICAgICAgYnJlYWtCZWZvcmU6IDgsXG4gICAgICBicmVha0FmdGVyOiA4LFxuICAgICAgYnJlYWtJbnNpZGU6IDgsXG4gICAgICByZWdpb25GcmFnbWVudDogMTEsXG4gICAgICBjb2x1bW5Db3VudDogOCxcbiAgICAgIGNvbHVtbkZpbGw6IDgsXG4gICAgICBjb2x1bW5HYXA6IDgsXG4gICAgICBjb2x1bW5SdWxlOiA4LFxuICAgICAgY29sdW1uUnVsZUNvbG9yOiA4LFxuICAgICAgY29sdW1uUnVsZVN0eWxlOiA4LFxuICAgICAgY29sdW1uUnVsZVdpZHRoOiA4LFxuICAgICAgY29sdW1uczogOCxcbiAgICAgIGNvbHVtblNwYW46IDgsXG4gICAgICBjb2x1bW5XaWR0aDogOCxcbiAgICAgIHdyaXRpbmdNb2RlOiAxMC4xXG4gICAgfSxcbiAgICBmaXJlZm94OiB7XG4gICAgICBhcHBlYXJhbmNlOiA2MCxcbiAgICAgIHVzZXJTZWxlY3Q6IDYwLFxuICAgICAgYm94U2l6aW5nOiAyOCxcbiAgICAgIHRleHRBbGlnbkxhc3Q6IDQ4LFxuICAgICAgdGV4dERlY29yYXRpb25TdHlsZTogMzUsXG4gICAgICB0ZXh0RGVjb3JhdGlvblNraXA6IDM1LFxuICAgICAgdGV4dERlY29yYXRpb25MaW5lOiAzNSxcbiAgICAgIHRleHREZWNvcmF0aW9uQ29sb3I6IDM1LFxuICAgICAgdGFiU2l6ZTogNjAsXG4gICAgICBoeXBoZW5zOiA0MixcbiAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6IDMzLFxuICAgICAgYnJlYWtBZnRlcjogNTEsXG4gICAgICBicmVha0JlZm9yZTogNTEsXG4gICAgICBicmVha0luc2lkZTogNTEsXG4gICAgICBjb2x1bW5Db3VudDogNTEsXG4gICAgICBjb2x1bW5GaWxsOiA1MSxcbiAgICAgIGNvbHVtbkdhcDogNTEsXG4gICAgICBjb2x1bW5SdWxlOiA1MSxcbiAgICAgIGNvbHVtblJ1bGVDb2xvcjogNTEsXG4gICAgICBjb2x1bW5SdWxlU3R5bGU6IDUxLFxuICAgICAgY29sdW1uUnVsZVdpZHRoOiA1MSxcbiAgICAgIGNvbHVtbnM6IDUxLFxuICAgICAgY29sdW1uU3BhbjogNTEsXG4gICAgICBjb2x1bW5XaWR0aDogNTFcbiAgICB9LFxuICAgIG9wZXJhOiB7XG4gICAgICBmbGV4OiAxNixcbiAgICAgIGZsZXhCYXNpczogMTYsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAxNixcbiAgICAgIGZsZXhHcm93OiAxNixcbiAgICAgIGZsZXhGbG93OiAxNixcbiAgICAgIGZsZXhTaHJpbms6IDE2LFxuICAgICAgZmxleFdyYXA6IDE2LFxuICAgICAgYWxpZ25Db250ZW50OiAxNixcbiAgICAgIGFsaWduSXRlbXM6IDE2LFxuICAgICAgYWxpZ25TZWxmOiAxNixcbiAgICAgIGp1c3RpZnlDb250ZW50OiAxNixcbiAgICAgIG9yZGVyOiAxNixcbiAgICAgIHRyYW5zZm9ybTogMjIsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46IDIyLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luWDogMjIsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW5ZOiAyMixcbiAgICAgIGJhY2tmYWNlVmlzaWJpbGl0eTogMjIsXG4gICAgICBwZXJzcGVjdGl2ZTogMjIsXG4gICAgICBwZXJzcGVjdGl2ZU9yaWdpbjogMjIsXG4gICAgICB0cmFuc2Zvcm1TdHlsZTogMjIsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW5aOiAyMixcbiAgICAgIGFuaW1hdGlvbjogMjksXG4gICAgICBhbmltYXRpb25EZWxheTogMjksXG4gICAgICBhbmltYXRpb25EaXJlY3Rpb246IDI5LFxuICAgICAgYW5pbWF0aW9uRmlsbE1vZGU6IDI5LFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IDI5LFxuICAgICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDI5LFxuICAgICAgYW5pbWF0aW9uTmFtZTogMjksXG4gICAgICBhbmltYXRpb25QbGF5U3RhdGU6IDI5LFxuICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246IDI5LFxuICAgICAgYXBwZWFyYW5jZTogNTAsXG4gICAgICB1c2VyU2VsZWN0OiA0MCxcbiAgICAgIGZvbnRLZXJuaW5nOiAxOSxcbiAgICAgIHRleHRFbXBoYXNpc1Bvc2l0aW9uOiA1MCxcbiAgICAgIHRleHRFbXBoYXNpczogNTAsXG4gICAgICB0ZXh0RW1waGFzaXNTdHlsZTogNTAsXG4gICAgICB0ZXh0RW1waGFzaXNDb2xvcjogNTAsXG4gICAgICBib3hEZWNvcmF0aW9uQnJlYWs6IDUwLFxuICAgICAgY2xpcFBhdGg6IDQxLFxuICAgICAgbWFza0ltYWdlOiA1MCxcbiAgICAgIG1hc2tNb2RlOiA1MCxcbiAgICAgIG1hc2tSZXBlYXQ6IDUwLFxuICAgICAgbWFza1Bvc2l0aW9uOiA1MCxcbiAgICAgIG1hc2tDbGlwOiA1MCxcbiAgICAgIG1hc2tPcmlnaW46IDUwLFxuICAgICAgbWFza1NpemU6IDUwLFxuICAgICAgbWFza0NvbXBvc2l0ZTogNTAsXG4gICAgICBtYXNrOiA1MCxcbiAgICAgIG1hc2tCb3JkZXJTb3VyY2U6IDUwLFxuICAgICAgbWFza0JvcmRlck1vZGU6IDUwLFxuICAgICAgbWFza0JvcmRlclNsaWNlOiA1MCxcbiAgICAgIG1hc2tCb3JkZXJXaWR0aDogNTAsXG4gICAgICBtYXNrQm9yZGVyT3V0c2V0OiA1MCxcbiAgICAgIG1hc2tCb3JkZXJSZXBlYXQ6IDUwLFxuICAgICAgbWFza0JvcmRlcjogNTAsXG4gICAgICBtYXNrVHlwZTogNTAsXG4gICAgICB0ZXh0RGVjb3JhdGlvblN0eWxlOiA0MyxcbiAgICAgIHRleHREZWNvcmF0aW9uU2tpcDogNDMsXG4gICAgICB0ZXh0RGVjb3JhdGlvbkxpbmU6IDQzLFxuICAgICAgdGV4dERlY29yYXRpb25Db2xvcjogNDMsXG4gICAgICBmaWx0ZXI6IDM5LFxuICAgICAgZm9udEZlYXR1cmVTZXR0aW5nczogMzQsXG4gICAgICBicmVha0FmdGVyOiAzNixcbiAgICAgIGJyZWFrQmVmb3JlOiAzNixcbiAgICAgIGJyZWFrSW5zaWRlOiAzNixcbiAgICAgIGNvbHVtbkNvdW50OiAzNixcbiAgICAgIGNvbHVtbkZpbGw6IDM2LFxuICAgICAgY29sdW1uR2FwOiAzNixcbiAgICAgIGNvbHVtblJ1bGU6IDM2LFxuICAgICAgY29sdW1uUnVsZUNvbG9yOiAzNixcbiAgICAgIGNvbHVtblJ1bGVTdHlsZTogMzYsXG4gICAgICBjb2x1bW5SdWxlV2lkdGg6IDM2LFxuICAgICAgY29sdW1uczogMzYsXG4gICAgICBjb2x1bW5TcGFuOiAzNixcbiAgICAgIGNvbHVtbldpZHRoOiAzNixcbiAgICAgIHdyaXRpbmdNb2RlOiAzNFxuICAgIH0sXG4gICAgaWU6IHtcbiAgICAgIGZsZXg6IDEwLFxuICAgICAgZmxleERpcmVjdGlvbjogMTAsXG4gICAgICBmbGV4RmxvdzogMTAsXG4gICAgICBmbGV4V3JhcDogMTAsXG4gICAgICB0cmFuc2Zvcm06IDksXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46IDksXG4gICAgICB0cmFuc2Zvcm1PcmlnaW5YOiA5LFxuICAgICAgdHJhbnNmb3JtT3JpZ2luWTogOSxcbiAgICAgIHVzZXJTZWxlY3Q6IDExLFxuICAgICAgd3JhcEZsb3c6IDExLFxuICAgICAgd3JhcFRocm91Z2g6IDExLFxuICAgICAgd3JhcE1hcmdpbjogMTEsXG4gICAgICBzY3JvbGxTbmFwVHlwZTogMTEsXG4gICAgICBzY3JvbGxTbmFwUG9pbnRzWDogMTEsXG4gICAgICBzY3JvbGxTbmFwUG9pbnRzWTogMTEsXG4gICAgICBzY3JvbGxTbmFwRGVzdGluYXRpb246IDExLFxuICAgICAgc2Nyb2xsU25hcENvb3JkaW5hdGU6IDExLFxuICAgICAgdG91Y2hBY3Rpb246IDEwLFxuICAgICAgaHlwaGVuczogMTEsXG4gICAgICBmbG93SW50bzogMTEsXG4gICAgICBmbG93RnJvbTogMTEsXG4gICAgICBicmVha0JlZm9yZTogMTEsXG4gICAgICBicmVha0FmdGVyOiAxMSxcbiAgICAgIGJyZWFrSW5zaWRlOiAxMSxcbiAgICAgIHJlZ2lvbkZyYWdtZW50OiAxMSxcbiAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IDExLFxuICAgICAgZ3JpZFRlbXBsYXRlUm93czogMTEsXG4gICAgICBncmlkVGVtcGxhdGVBcmVhczogMTEsXG4gICAgICBncmlkVGVtcGxhdGU6IDExLFxuICAgICAgZ3JpZEF1dG9Db2x1bW5zOiAxMSxcbiAgICAgIGdyaWRBdXRvUm93czogMTEsXG4gICAgICBncmlkQXV0b0Zsb3c6IDExLFxuICAgICAgZ3JpZDogMTEsXG4gICAgICBncmlkUm93U3RhcnQ6IDExLFxuICAgICAgZ3JpZENvbHVtblN0YXJ0OiAxMSxcbiAgICAgIGdyaWRSb3dFbmQ6IDExLFxuICAgICAgZ3JpZFJvdzogMTEsXG4gICAgICBncmlkQ29sdW1uOiAxMSxcbiAgICAgIGdyaWRDb2x1bW5FbmQ6IDExLFxuICAgICAgZ3JpZENvbHVtbkdhcDogMTEsXG4gICAgICBncmlkUm93R2FwOiAxMSxcbiAgICAgIGdyaWRBcmVhOiAxMSxcbiAgICAgIGdyaWRHYXA6IDExLFxuICAgICAgdGV4dFNpemVBZGp1c3Q6IDExLFxuICAgICAgd3JpdGluZ01vZGU6IDExXG4gICAgfSxcbiAgICBlZGdlOiB7XG4gICAgICB1c2VyU2VsZWN0OiAxNyxcbiAgICAgIHdyYXBGbG93OiAxNyxcbiAgICAgIHdyYXBUaHJvdWdoOiAxNyxcbiAgICAgIHdyYXBNYXJnaW46IDE3LFxuICAgICAgc2Nyb2xsU25hcFR5cGU6IDE3LFxuICAgICAgc2Nyb2xsU25hcFBvaW50c1g6IDE3LFxuICAgICAgc2Nyb2xsU25hcFBvaW50c1k6IDE3LFxuICAgICAgc2Nyb2xsU25hcERlc3RpbmF0aW9uOiAxNyxcbiAgICAgIHNjcm9sbFNuYXBDb29yZGluYXRlOiAxNyxcbiAgICAgIGh5cGhlbnM6IDE3LFxuICAgICAgZmxvd0ludG86IDE3LFxuICAgICAgZmxvd0Zyb206IDE3LFxuICAgICAgYnJlYWtCZWZvcmU6IDE3LFxuICAgICAgYnJlYWtBZnRlcjogMTcsXG4gICAgICBicmVha0luc2lkZTogMTcsXG4gICAgICByZWdpb25GcmFnbWVudDogMTcsXG4gICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAxNSxcbiAgICAgIGdyaWRUZW1wbGF0ZVJvd3M6IDE1LFxuICAgICAgZ3JpZFRlbXBsYXRlQXJlYXM6IDE1LFxuICAgICAgZ3JpZFRlbXBsYXRlOiAxNSxcbiAgICAgIGdyaWRBdXRvQ29sdW1uczogMTUsXG4gICAgICBncmlkQXV0b1Jvd3M6IDE1LFxuICAgICAgZ3JpZEF1dG9GbG93OiAxNSxcbiAgICAgIGdyaWQ6IDE1LFxuICAgICAgZ3JpZFJvd1N0YXJ0OiAxNSxcbiAgICAgIGdyaWRDb2x1bW5TdGFydDogMTUsXG4gICAgICBncmlkUm93RW5kOiAxNSxcbiAgICAgIGdyaWRSb3c6IDE1LFxuICAgICAgZ3JpZENvbHVtbjogMTUsXG4gICAgICBncmlkQ29sdW1uRW5kOiAxNSxcbiAgICAgIGdyaWRDb2x1bW5HYXA6IDE1LFxuICAgICAgZ3JpZFJvd0dhcDogMTUsXG4gICAgICBncmlkQXJlYTogMTUsXG4gICAgICBncmlkR2FwOiAxNVxuICAgIH0sXG4gICAgaW9zX3NhZjoge1xuICAgICAgZmxleDogOC4xLFxuICAgICAgZmxleEJhc2lzOiA4LjEsXG4gICAgICBmbGV4RGlyZWN0aW9uOiA4LjEsXG4gICAgICBmbGV4R3JvdzogOC4xLFxuICAgICAgZmxleEZsb3c6IDguMSxcbiAgICAgIGZsZXhTaHJpbms6IDguMSxcbiAgICAgIGZsZXhXcmFwOiA4LjEsXG4gICAgICBhbGlnbkNvbnRlbnQ6IDguMSxcbiAgICAgIGFsaWduSXRlbXM6IDguMSxcbiAgICAgIGFsaWduU2VsZjogOC4xLFxuICAgICAganVzdGlmeUNvbnRlbnQ6IDguMSxcbiAgICAgIG9yZGVyOiA4LjEsXG4gICAgICB0cmFuc2l0aW9uOiA2LFxuICAgICAgdHJhbnNpdGlvbkRlbGF5OiA2LFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiA2LFxuICAgICAgdHJhbnNpdGlvblByb3BlcnR5OiA2LFxuICAgICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiA2LFxuICAgICAgdHJhbnNmb3JtOiA4LjEsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46IDguMSxcbiAgICAgIHRyYW5zZm9ybU9yaWdpblg6IDguMSxcbiAgICAgIHRyYW5zZm9ybU9yaWdpblk6IDguMSxcbiAgICAgIGJhY2tmYWNlVmlzaWJpbGl0eTogOC4xLFxuICAgICAgcGVyc3BlY3RpdmU6IDguMSxcbiAgICAgIHBlcnNwZWN0aXZlT3JpZ2luOiA4LjEsXG4gICAgICB0cmFuc2Zvcm1TdHlsZTogOC4xLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luWjogOC4xLFxuICAgICAgYW5pbWF0aW9uOiA4LjEsXG4gICAgICBhbmltYXRpb25EZWxheTogOC4xLFxuICAgICAgYW5pbWF0aW9uRGlyZWN0aW9uOiA4LjEsXG4gICAgICBhbmltYXRpb25GaWxsTW9kZTogOC4xLFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IDguMSxcbiAgICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiA4LjEsXG4gICAgICBhbmltYXRpb25OYW1lOiA4LjEsXG4gICAgICBhbmltYXRpb25QbGF5U3RhdGU6IDguMSxcbiAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiA4LjEsXG4gICAgICBhcHBlYXJhbmNlOiAxMSxcbiAgICAgIHVzZXJTZWxlY3Q6IDExLFxuICAgICAgYmFja2Ryb3BGaWx0ZXI6IDExLFxuICAgICAgZm9udEtlcm5pbmc6IDExLFxuICAgICAgc2Nyb2xsU25hcFR5cGU6IDEwLjMsXG4gICAgICBzY3JvbGxTbmFwUG9pbnRzWDogMTAuMyxcbiAgICAgIHNjcm9sbFNuYXBQb2ludHNZOiAxMC4zLFxuICAgICAgc2Nyb2xsU25hcERlc3RpbmF0aW9uOiAxMC4zLFxuICAgICAgc2Nyb2xsU25hcENvb3JkaW5hdGU6IDEwLjMsXG4gICAgICBib3hEZWNvcmF0aW9uQnJlYWs6IDExLFxuICAgICAgY2xpcFBhdGg6IDExLFxuICAgICAgbWFza0ltYWdlOiAxMSxcbiAgICAgIG1hc2tNb2RlOiAxMSxcbiAgICAgIG1hc2tSZXBlYXQ6IDExLFxuICAgICAgbWFza1Bvc2l0aW9uOiAxMSxcbiAgICAgIG1hc2tDbGlwOiAxMSxcbiAgICAgIG1hc2tPcmlnaW46IDExLFxuICAgICAgbWFza1NpemU6IDExLFxuICAgICAgbWFza0NvbXBvc2l0ZTogMTEsXG4gICAgICBtYXNrOiAxMSxcbiAgICAgIG1hc2tCb3JkZXJTb3VyY2U6IDExLFxuICAgICAgbWFza0JvcmRlck1vZGU6IDExLFxuICAgICAgbWFza0JvcmRlclNsaWNlOiAxMSxcbiAgICAgIG1hc2tCb3JkZXJXaWR0aDogMTEsXG4gICAgICBtYXNrQm9yZGVyT3V0c2V0OiAxMSxcbiAgICAgIG1hc2tCb3JkZXJSZXBlYXQ6IDExLFxuICAgICAgbWFza0JvcmRlcjogMTEsXG4gICAgICBtYXNrVHlwZTogMTEsXG4gICAgICB0ZXh0U2l6ZUFkanVzdDogMTEsXG4gICAgICB0ZXh0RGVjb3JhdGlvblN0eWxlOiAxMSxcbiAgICAgIHRleHREZWNvcmF0aW9uU2tpcDogMTEsXG4gICAgICB0ZXh0RGVjb3JhdGlvbkxpbmU6IDExLFxuICAgICAgdGV4dERlY29yYXRpb25Db2xvcjogMTEsXG4gICAgICBzaGFwZUltYWdlVGhyZXNob2xkOiAxMCxcbiAgICAgIHNoYXBlSW1hZ2VNYXJnaW46IDEwLFxuICAgICAgc2hhcGVJbWFnZU91dHNpZGU6IDEwLFxuICAgICAgZmlsdGVyOiA5LFxuICAgICAgaHlwaGVuczogMTEsXG4gICAgICBmbG93SW50bzogMTEsXG4gICAgICBmbG93RnJvbTogMTEsXG4gICAgICBicmVha0JlZm9yZTogOC4xLFxuICAgICAgYnJlYWtBZnRlcjogOC4xLFxuICAgICAgYnJlYWtJbnNpZGU6IDguMSxcbiAgICAgIHJlZ2lvbkZyYWdtZW50OiAxMSxcbiAgICAgIGNvbHVtbkNvdW50OiA4LjEsXG4gICAgICBjb2x1bW5GaWxsOiA4LjEsXG4gICAgICBjb2x1bW5HYXA6IDguMSxcbiAgICAgIGNvbHVtblJ1bGU6IDguMSxcbiAgICAgIGNvbHVtblJ1bGVDb2xvcjogOC4xLFxuICAgICAgY29sdW1uUnVsZVN0eWxlOiA4LjEsXG4gICAgICBjb2x1bW5SdWxlV2lkdGg6IDguMSxcbiAgICAgIGNvbHVtbnM6IDguMSxcbiAgICAgIGNvbHVtblNwYW46IDguMSxcbiAgICAgIGNvbHVtbldpZHRoOiA4LjEsXG4gICAgICB3cml0aW5nTW9kZTogMTAuM1xuICAgIH0sXG4gICAgYW5kcm9pZDoge1xuICAgICAgYm9yZGVySW1hZ2U6IDQuMixcbiAgICAgIGJvcmRlckltYWdlT3V0c2V0OiA0LjIsXG4gICAgICBib3JkZXJJbWFnZVJlcGVhdDogNC4yLFxuICAgICAgYm9yZGVySW1hZ2VTbGljZTogNC4yLFxuICAgICAgYm9yZGVySW1hZ2VTb3VyY2U6IDQuMixcbiAgICAgIGJvcmRlckltYWdlV2lkdGg6IDQuMixcbiAgICAgIGZsZXg6IDQuMixcbiAgICAgIGZsZXhCYXNpczogNC4yLFxuICAgICAgZmxleERpcmVjdGlvbjogNC4yLFxuICAgICAgZmxleEdyb3c6IDQuMixcbiAgICAgIGZsZXhGbG93OiA0LjIsXG4gICAgICBmbGV4U2hyaW5rOiA0LjIsXG4gICAgICBmbGV4V3JhcDogNC4yLFxuICAgICAgYWxpZ25Db250ZW50OiA0LjIsXG4gICAgICBhbGlnbkl0ZW1zOiA0LjIsXG4gICAgICBhbGlnblNlbGY6IDQuMixcbiAgICAgIGp1c3RpZnlDb250ZW50OiA0LjIsXG4gICAgICBvcmRlcjogNC4yLFxuICAgICAgdHJhbnNpdGlvbjogNC4yLFxuICAgICAgdHJhbnNpdGlvbkRlbGF5OiA0LjIsXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IDQuMixcbiAgICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTogNC4yLFxuICAgICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiA0LjIsXG4gICAgICB0cmFuc2Zvcm06IDQuNCxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogNC40LFxuICAgICAgdHJhbnNmb3JtT3JpZ2luWDogNC40LFxuICAgICAgdHJhbnNmb3JtT3JpZ2luWTogNC40LFxuICAgICAgYmFja2ZhY2VWaXNpYmlsaXR5OiA0LjQsXG4gICAgICBwZXJzcGVjdGl2ZTogNC40LFxuICAgICAgcGVyc3BlY3RpdmVPcmlnaW46IDQuNCxcbiAgICAgIHRyYW5zZm9ybVN0eWxlOiA0LjQsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW5aOiA0LjQsXG4gICAgICBhbmltYXRpb246IDQuNCxcbiAgICAgIGFuaW1hdGlvbkRlbGF5OiA0LjQsXG4gICAgICBhbmltYXRpb25EaXJlY3Rpb246IDQuNCxcbiAgICAgIGFuaW1hdGlvbkZpbGxNb2RlOiA0LjQsXG4gICAgICBhbmltYXRpb25EdXJhdGlvbjogNC40LFxuICAgICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDQuNCxcbiAgICAgIGFuaW1hdGlvbk5hbWU6IDQuNCxcbiAgICAgIGFuaW1hdGlvblBsYXlTdGF0ZTogNC40LFxuICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246IDQuNCxcbiAgICAgIGFwcGVhcmFuY2U6IDYyLFxuICAgICAgdXNlclNlbGVjdDogNC40LFxuICAgICAgZm9udEtlcm5pbmc6IDQuNCxcbiAgICAgIHRleHRFbXBoYXNpc1Bvc2l0aW9uOiA2MixcbiAgICAgIHRleHRFbXBoYXNpczogNjIsXG4gICAgICB0ZXh0RW1waGFzaXNTdHlsZTogNjIsXG4gICAgICB0ZXh0RW1waGFzaXNDb2xvcjogNjIsXG4gICAgICBib3hEZWNvcmF0aW9uQnJlYWs6IDYyLFxuICAgICAgY2xpcFBhdGg6IDQuNCxcbiAgICAgIG1hc2tJbWFnZTogNjIsXG4gICAgICBtYXNrTW9kZTogNjIsXG4gICAgICBtYXNrUmVwZWF0OiA2MixcbiAgICAgIG1hc2tQb3NpdGlvbjogNjIsXG4gICAgICBtYXNrQ2xpcDogNjIsXG4gICAgICBtYXNrT3JpZ2luOiA2MixcbiAgICAgIG1hc2tTaXplOiA2MixcbiAgICAgIG1hc2tDb21wb3NpdGU6IDYyLFxuICAgICAgbWFzazogNjIsXG4gICAgICBtYXNrQm9yZGVyU291cmNlOiA2MixcbiAgICAgIG1hc2tCb3JkZXJNb2RlOiA2MixcbiAgICAgIG1hc2tCb3JkZXJTbGljZTogNjIsXG4gICAgICBtYXNrQm9yZGVyV2lkdGg6IDYyLFxuICAgICAgbWFza0JvcmRlck91dHNldDogNjIsXG4gICAgICBtYXNrQm9yZGVyUmVwZWF0OiA2MixcbiAgICAgIG1hc2tCb3JkZXI6IDYyLFxuICAgICAgbWFza1R5cGU6IDYyLFxuICAgICAgZmlsdGVyOiA0LjQsXG4gICAgICBmb250RmVhdHVyZVNldHRpbmdzOiA0LjQsXG4gICAgICBicmVha0FmdGVyOiA0LjQsXG4gICAgICBicmVha0JlZm9yZTogNC40LFxuICAgICAgYnJlYWtJbnNpZGU6IDQuNCxcbiAgICAgIGNvbHVtbkNvdW50OiA0LjQsXG4gICAgICBjb2x1bW5GaWxsOiA0LjQsXG4gICAgICBjb2x1bW5HYXA6IDQuNCxcbiAgICAgIGNvbHVtblJ1bGU6IDQuNCxcbiAgICAgIGNvbHVtblJ1bGVDb2xvcjogNC40LFxuICAgICAgY29sdW1uUnVsZVN0eWxlOiA0LjQsXG4gICAgICBjb2x1bW5SdWxlV2lkdGg6IDQuNCxcbiAgICAgIGNvbHVtbnM6IDQuNCxcbiAgICAgIGNvbHVtblNwYW46IDQuNCxcbiAgICAgIGNvbHVtbldpZHRoOiA0LjQsXG4gICAgICB3cml0aW5nTW9kZTogNC40XG4gICAgfSxcbiAgICBhbmRfY2hyOiB7XG4gICAgICBhcHBlYXJhbmNlOiA2MixcbiAgICAgIHRleHRFbXBoYXNpc1Bvc2l0aW9uOiA2MixcbiAgICAgIHRleHRFbXBoYXNpczogNjIsXG4gICAgICB0ZXh0RW1waGFzaXNTdHlsZTogNjIsXG4gICAgICB0ZXh0RW1waGFzaXNDb2xvcjogNjIsXG4gICAgICBib3hEZWNvcmF0aW9uQnJlYWs6IDYyLFxuICAgICAgbWFza0ltYWdlOiA2MixcbiAgICAgIG1hc2tNb2RlOiA2MixcbiAgICAgIG1hc2tSZXBlYXQ6IDYyLFxuICAgICAgbWFza1Bvc2l0aW9uOiA2MixcbiAgICAgIG1hc2tDbGlwOiA2MixcbiAgICAgIG1hc2tPcmlnaW46IDYyLFxuICAgICAgbWFza1NpemU6IDYyLFxuICAgICAgbWFza0NvbXBvc2l0ZTogNjIsXG4gICAgICBtYXNrOiA2MixcbiAgICAgIG1hc2tCb3JkZXJTb3VyY2U6IDYyLFxuICAgICAgbWFza0JvcmRlck1vZGU6IDYyLFxuICAgICAgbWFza0JvcmRlclNsaWNlOiA2MixcbiAgICAgIG1hc2tCb3JkZXJXaWR0aDogNjIsXG4gICAgICBtYXNrQm9yZGVyT3V0c2V0OiA2MixcbiAgICAgIG1hc2tCb3JkZXJSZXBlYXQ6IDYyLFxuICAgICAgbWFza0JvcmRlcjogNjIsXG4gICAgICBtYXNrVHlwZTogNjJcbiAgICB9LFxuICAgIGFuZF91Yzoge1xuICAgICAgZmxleDogMTEuNCxcbiAgICAgIGZsZXhCYXNpczogMTEuNCxcbiAgICAgIGZsZXhEaXJlY3Rpb246IDExLjQsXG4gICAgICBmbGV4R3JvdzogMTEuNCxcbiAgICAgIGZsZXhGbG93OiAxMS40LFxuICAgICAgZmxleFNocmluazogMTEuNCxcbiAgICAgIGZsZXhXcmFwOiAxMS40LFxuICAgICAgYWxpZ25Db250ZW50OiAxMS40LFxuICAgICAgYWxpZ25JdGVtczogMTEuNCxcbiAgICAgIGFsaWduU2VsZjogMTEuNCxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAxMS40LFxuICAgICAgb3JkZXI6IDExLjQsXG4gICAgICB0cmFuc2Zvcm06IDExLjQsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46IDExLjQsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW5YOiAxMS40LFxuICAgICAgdHJhbnNmb3JtT3JpZ2luWTogMTEuNCxcbiAgICAgIGJhY2tmYWNlVmlzaWJpbGl0eTogMTEuNCxcbiAgICAgIHBlcnNwZWN0aXZlOiAxMS40LFxuICAgICAgcGVyc3BlY3RpdmVPcmlnaW46IDExLjQsXG4gICAgICB0cmFuc2Zvcm1TdHlsZTogMTEuNCxcbiAgICAgIHRyYW5zZm9ybU9yaWdpblo6IDExLjQsXG4gICAgICBhbmltYXRpb246IDExLjQsXG4gICAgICBhbmltYXRpb25EZWxheTogMTEuNCxcbiAgICAgIGFuaW1hdGlvbkRpcmVjdGlvbjogMTEuNCxcbiAgICAgIGFuaW1hdGlvbkZpbGxNb2RlOiAxMS40LFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IDExLjQsXG4gICAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogMTEuNCxcbiAgICAgIGFuaW1hdGlvbk5hbWU6IDExLjQsXG4gICAgICBhbmltYXRpb25QbGF5U3RhdGU6IDExLjQsXG4gICAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogMTEuNCxcbiAgICAgIGFwcGVhcmFuY2U6IDExLjQsXG4gICAgICB1c2VyU2VsZWN0OiAxMS40LFxuICAgICAgdGV4dEVtcGhhc2lzUG9zaXRpb246IDExLjQsXG4gICAgICB0ZXh0RW1waGFzaXM6IDExLjQsXG4gICAgICB0ZXh0RW1waGFzaXNTdHlsZTogMTEuNCxcbiAgICAgIHRleHRFbXBoYXNpc0NvbG9yOiAxMS40LFxuICAgICAgY2xpcFBhdGg6IDExLjQsXG4gICAgICBtYXNrSW1hZ2U6IDExLjQsXG4gICAgICBtYXNrTW9kZTogMTEuNCxcbiAgICAgIG1hc2tSZXBlYXQ6IDExLjQsXG4gICAgICBtYXNrUG9zaXRpb246IDExLjQsXG4gICAgICBtYXNrQ2xpcDogMTEuNCxcbiAgICAgIG1hc2tPcmlnaW46IDExLjQsXG4gICAgICBtYXNrU2l6ZTogMTEuNCxcbiAgICAgIG1hc2tDb21wb3NpdGU6IDExLjQsXG4gICAgICBtYXNrOiAxMS40LFxuICAgICAgbWFza0JvcmRlclNvdXJjZTogMTEuNCxcbiAgICAgIG1hc2tCb3JkZXJNb2RlOiAxMS40LFxuICAgICAgbWFza0JvcmRlclNsaWNlOiAxMS40LFxuICAgICAgbWFza0JvcmRlcldpZHRoOiAxMS40LFxuICAgICAgbWFza0JvcmRlck91dHNldDogMTEuNCxcbiAgICAgIG1hc2tCb3JkZXJSZXBlYXQ6IDExLjQsXG4gICAgICBtYXNrQm9yZGVyOiAxMS40LFxuICAgICAgbWFza1R5cGU6IDExLjQsXG4gICAgICB0ZXh0U2l6ZUFkanVzdDogMTEuNCxcbiAgICAgIGZpbHRlcjogMTEuNCxcbiAgICAgIGh5cGhlbnM6IDExLjQsXG4gICAgICBmb250RmVhdHVyZVNldHRpbmdzOiAxMS40LFxuICAgICAgYnJlYWtBZnRlcjogMTEuNCxcbiAgICAgIGJyZWFrQmVmb3JlOiAxMS40LFxuICAgICAgYnJlYWtJbnNpZGU6IDExLjQsXG4gICAgICBjb2x1bW5Db3VudDogMTEuNCxcbiAgICAgIGNvbHVtbkZpbGw6IDExLjQsXG4gICAgICBjb2x1bW5HYXA6IDExLjQsXG4gICAgICBjb2x1bW5SdWxlOiAxMS40LFxuICAgICAgY29sdW1uUnVsZUNvbG9yOiAxMS40LFxuICAgICAgY29sdW1uUnVsZVN0eWxlOiAxMS40LFxuICAgICAgY29sdW1uUnVsZVdpZHRoOiAxMS40LFxuICAgICAgY29sdW1uczogMTEuNCxcbiAgICAgIGNvbHVtblNwYW46IDExLjQsXG4gICAgICBjb2x1bW5XaWR0aDogMTEuNCxcbiAgICAgIHdyaXRpbmdNb2RlOiAxMS40XG4gICAgfSxcbiAgICBvcF9taW5pOiB7fVxuICB9XG59OyIsImltcG9ydCBjYWxjIGZyb20gJ2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9jYWxjJztcbmltcG9ydCBjcm9zc0ZhZGUgZnJvbSAnaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL2Nyb3NzRmFkZSc7XG5pbXBvcnQgY3Vyc29yIGZyb20gJ2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9jdXJzb3InO1xuaW1wb3J0IGZpbHRlciBmcm9tICdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvZmlsdGVyJztcbmltcG9ydCBmbGV4IGZyb20gJ2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9mbGV4JztcbmltcG9ydCBmbGV4Ym94SUUgZnJvbSAnaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL2ZsZXhib3hJRSc7XG5pbXBvcnQgZmxleGJveE9sZCBmcm9tICdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvZmxleGJveE9sZCc7XG5pbXBvcnQgZ3JhZGllbnQgZnJvbSAnaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL2dyYWRpZW50JztcbmltcG9ydCBpbWFnZVNldCBmcm9tICdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvaW1hZ2VTZXQnO1xuaW1wb3J0IHBvc2l0aW9uIGZyb20gJ2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9wb3NpdGlvbic7XG5pbXBvcnQgc2l6aW5nIGZyb20gJ2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9zaXppbmcnO1xuaW1wb3J0IHRyYW5zaXRpb24gZnJvbSAnaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL3RyYW5zaXRpb24nO1xudmFyIHcgPSBbJ1dlYmtpdCddO1xudmFyIG0gPSBbJ01veiddO1xudmFyIG1zID0gWydtcyddO1xudmFyIHdtID0gWydXZWJraXQnLCAnTW96J107XG52YXIgd21zID0gWydXZWJraXQnLCAnbXMnXTtcbnZhciB3bW1zID0gWydXZWJraXQnLCAnTW96JywgJ21zJ107XG5leHBvcnQgZGVmYXVsdCB7XG4gIHBsdWdpbnM6IFtjYWxjLCBjcm9zc0ZhZGUsIGN1cnNvciwgZmlsdGVyLCBmbGV4LCBmbGV4Ym94SUUsIGZsZXhib3hPbGQsIGdyYWRpZW50LCBpbWFnZVNldCwgcG9zaXRpb24sIHNpemluZywgdHJhbnNpdGlvbl0sXG4gIHByZWZpeE1hcDoge1xuICAgIHRyYW5zZm9ybTogd21zLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogd21zLFxuICAgIHRyYW5zZm9ybU9yaWdpblg6IHdtcyxcbiAgICB0cmFuc2Zvcm1PcmlnaW5ZOiB3bXMsXG4gICAgYmFja2ZhY2VWaXNpYmlsaXR5OiB3LFxuICAgIHBlcnNwZWN0aXZlOiB3LFxuICAgIHBlcnNwZWN0aXZlT3JpZ2luOiB3LFxuICAgIHRyYW5zZm9ybVN0eWxlOiB3LFxuICAgIHRyYW5zZm9ybU9yaWdpblo6IHcsXG4gICAgYW5pbWF0aW9uOiB3LFxuICAgIGFuaW1hdGlvbkRlbGF5OiB3LFxuICAgIGFuaW1hdGlvbkRpcmVjdGlvbjogdyxcbiAgICBhbmltYXRpb25GaWxsTW9kZTogdyxcbiAgICBhbmltYXRpb25EdXJhdGlvbjogdyxcbiAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogdyxcbiAgICBhbmltYXRpb25OYW1lOiB3LFxuICAgIGFuaW1hdGlvblBsYXlTdGF0ZTogdyxcbiAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogdyxcbiAgICBhcHBlYXJhbmNlOiB3bSxcbiAgICB1c2VyU2VsZWN0OiB3bW1zLFxuICAgIGZvbnRLZXJuaW5nOiB3LFxuICAgIHRleHRFbXBoYXNpc1Bvc2l0aW9uOiB3LFxuICAgIHRleHRFbXBoYXNpczogdyxcbiAgICB0ZXh0RW1waGFzaXNTdHlsZTogdyxcbiAgICB0ZXh0RW1waGFzaXNDb2xvcjogdyxcbiAgICBib3hEZWNvcmF0aW9uQnJlYWs6IHcsXG4gICAgY2xpcFBhdGg6IHcsXG4gICAgbWFza0ltYWdlOiB3LFxuICAgIG1hc2tNb2RlOiB3LFxuICAgIG1hc2tSZXBlYXQ6IHcsXG4gICAgbWFza1Bvc2l0aW9uOiB3LFxuICAgIG1hc2tDbGlwOiB3LFxuICAgIG1hc2tPcmlnaW46IHcsXG4gICAgbWFza1NpemU6IHcsXG4gICAgbWFza0NvbXBvc2l0ZTogdyxcbiAgICBtYXNrOiB3LFxuICAgIG1hc2tCb3JkZXJTb3VyY2U6IHcsXG4gICAgbWFza0JvcmRlck1vZGU6IHcsXG4gICAgbWFza0JvcmRlclNsaWNlOiB3LFxuICAgIG1hc2tCb3JkZXJXaWR0aDogdyxcbiAgICBtYXNrQm9yZGVyT3V0c2V0OiB3LFxuICAgIG1hc2tCb3JkZXJSZXBlYXQ6IHcsXG4gICAgbWFza0JvcmRlcjogdyxcbiAgICBtYXNrVHlwZTogdyxcbiAgICB0ZXh0RGVjb3JhdGlvblN0eWxlOiB3bSxcbiAgICB0ZXh0RGVjb3JhdGlvblNraXA6IHdtLFxuICAgIHRleHREZWNvcmF0aW9uTGluZTogd20sXG4gICAgdGV4dERlY29yYXRpb25Db2xvcjogd20sXG4gICAgZmlsdGVyOiB3LFxuICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6IHdtLFxuICAgIGJyZWFrQWZ0ZXI6IHdtbXMsXG4gICAgYnJlYWtCZWZvcmU6IHdtbXMsXG4gICAgYnJlYWtJbnNpZGU6IHdtbXMsXG4gICAgY29sdW1uQ291bnQ6IHdtLFxuICAgIGNvbHVtbkZpbGw6IHdtLFxuICAgIGNvbHVtbkdhcDogd20sXG4gICAgY29sdW1uUnVsZTogd20sXG4gICAgY29sdW1uUnVsZUNvbG9yOiB3bSxcbiAgICBjb2x1bW5SdWxlU3R5bGU6IHdtLFxuICAgIGNvbHVtblJ1bGVXaWR0aDogd20sXG4gICAgY29sdW1uczogd20sXG4gICAgY29sdW1uU3Bhbjogd20sXG4gICAgY29sdW1uV2lkdGg6IHdtLFxuICAgIHdyaXRpbmdNb2RlOiB3bXMsXG4gICAgZmxleDogd21zLFxuICAgIGZsZXhCYXNpczogdyxcbiAgICBmbGV4RGlyZWN0aW9uOiB3bXMsXG4gICAgZmxleEdyb3c6IHcsXG4gICAgZmxleEZsb3c6IHdtcyxcbiAgICBmbGV4U2hyaW5rOiB3LFxuICAgIGZsZXhXcmFwOiB3bXMsXG4gICAgYWxpZ25Db250ZW50OiB3LFxuICAgIGFsaWduSXRlbXM6IHcsXG4gICAgYWxpZ25TZWxmOiB3LFxuICAgIGp1c3RpZnlDb250ZW50OiB3LFxuICAgIG9yZGVyOiB3LFxuICAgIHRyYW5zaXRpb25EZWxheTogdyxcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246IHcsXG4gICAgdHJhbnNpdGlvblByb3BlcnR5OiB3LFxuICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogdyxcbiAgICBiYWNrZHJvcEZpbHRlcjogdyxcbiAgICBzY3JvbGxTbmFwVHlwZTogd21zLFxuICAgIHNjcm9sbFNuYXBQb2ludHNYOiB3bXMsXG4gICAgc2Nyb2xsU25hcFBvaW50c1k6IHdtcyxcbiAgICBzY3JvbGxTbmFwRGVzdGluYXRpb246IHdtcyxcbiAgICBzY3JvbGxTbmFwQ29vcmRpbmF0ZTogd21zLFxuICAgIHNoYXBlSW1hZ2VUaHJlc2hvbGQ6IHcsXG4gICAgc2hhcGVJbWFnZU1hcmdpbjogdyxcbiAgICBzaGFwZUltYWdlT3V0c2lkZTogdyxcbiAgICBoeXBoZW5zOiB3bW1zLFxuICAgIGZsb3dJbnRvOiB3bXMsXG4gICAgZmxvd0Zyb206IHdtcyxcbiAgICByZWdpb25GcmFnbWVudDogd21zLFxuICAgIGJveFNpemluZzogbSxcbiAgICB0ZXh0QWxpZ25MYXN0OiBtLFxuICAgIHRhYlNpemU6IG0sXG4gICAgd3JhcEZsb3c6IG1zLFxuICAgIHdyYXBUaHJvdWdoOiBtcyxcbiAgICB3cmFwTWFyZ2luOiBtcyxcbiAgICB0b3VjaEFjdGlvbjogbXMsXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogbXMsXG4gICAgZ3JpZFRlbXBsYXRlUm93czogbXMsXG4gICAgZ3JpZFRlbXBsYXRlQXJlYXM6IG1zLFxuICAgIGdyaWRUZW1wbGF0ZTogbXMsXG4gICAgZ3JpZEF1dG9Db2x1bW5zOiBtcyxcbiAgICBncmlkQXV0b1Jvd3M6IG1zLFxuICAgIGdyaWRBdXRvRmxvdzogbXMsXG4gICAgZ3JpZDogbXMsXG4gICAgZ3JpZFJvd1N0YXJ0OiBtcyxcbiAgICBncmlkQ29sdW1uU3RhcnQ6IG1zLFxuICAgIGdyaWRSb3dFbmQ6IG1zLFxuICAgIGdyaWRSb3c6IG1zLFxuICAgIGdyaWRDb2x1bW46IG1zLFxuICAgIGdyaWRDb2x1bW5FbmQ6IG1zLFxuICAgIGdyaWRDb2x1bW5HYXA6IG1zLFxuICAgIGdyaWRSb3dHYXA6IG1zLFxuICAgIGdyaWRBcmVhOiBtcyxcbiAgICBncmlkR2FwOiBtcyxcbiAgICB0ZXh0U2l6ZUFkanVzdDogd21zLFxuICAgIGJvcmRlckltYWdlOiB3LFxuICAgIGJvcmRlckltYWdlT3V0c2V0OiB3LFxuICAgIGJvcmRlckltYWdlUmVwZWF0OiB3LFxuICAgIGJvcmRlckltYWdlU2xpY2U6IHcsXG4gICAgYm9yZGVySW1hZ2VTb3VyY2U6IHcsXG4gICAgYm9yZGVySW1hZ2VXaWR0aDogd1xuICB9XG59OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbi8qKlxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2pzc3R5bGVzL2Nzcy12ZW5kb3IsIGJ1dCB3aXRob3V0IGhhdmluZyB0b1xuICogY29udmVydCBiZXR3ZWVuIGRpZmZlcmVudCBjYXNlcyBhbGwgdGhlIHRpbWUuXG4gKlxuICogXG4gKi9cbmltcG9ydCBjcmVhdGVTdGF0aWNQcmVmaXhlciBmcm9tICdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL2NyZWF0ZVByZWZpeGVyJztcbmltcG9ydCBjcmVhdGVEeW5hbWljUHJlZml4ZXIgZnJvbSAnaW5saW5lLXN0eWxlLXByZWZpeGVyL2R5bmFtaWMvY3JlYXRlUHJlZml4ZXInO1xuaW1wb3J0IEV4ZWN1dGlvbkVudmlyb25tZW50IGZyb20gJ2V4ZW52JztcbmltcG9ydCBzdGF0aWNEYXRhIGZyb20gJy4vcHJlZml4LWRhdGEvc3RhdGljJztcbmltcG9ydCBkeW5hbWljRGF0YSBmcm9tICcuL3ByZWZpeC1kYXRhL2R5bmFtaWMnO1xuaW1wb3J0IHsgY2FtZWxDYXNlVG9EYXNoQ2FzZSB9IGZyb20gJy4vY2FtZWwtY2FzZS1wcm9wcy10by1kYXNoLWNhc2UnO1xudmFyIHByZWZpeEFsbCA9IGNyZWF0ZVN0YXRpY1ByZWZpeGVyKHN0YXRpY0RhdGEpO1xudmFyIElubGluZVN0eWxlUHJlZml4ZXIgPSBjcmVhdGVEeW5hbWljUHJlZml4ZXIoZHluYW1pY0RhdGEsIHByZWZpeEFsbCk7XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVZhbHVlcyhzdHlsZSkge1xuICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGUpLnJlZHVjZShmdW5jdGlvbiAobmV3U3R5bGUsIGtleSkge1xuICAgIHZhciB2YWx1ZSA9IHN0eWxlW2tleV07XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUuam9pbignOycgKyBrZXkgKyAnOicpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIG5ld1N0eWxlW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gbmV3U3R5bGU7XG4gIH0sIHt9KTtcbn0gLy8gRmxhdHRlbiBwcmVmaXhlZCB2YWx1ZXMgdGhhdCBhcmUgYXJyYXlzIHRvIHN0cmluZ3MuXG4vL1xuLy8gV2UgZ2V0IHByZWZpeGVkIHN0eWxlcyBiYWNrIGluIHRoZSBmb3JtIG9mOlxuLy8gLSBgZGlzcGxheTogXCJmbGV4XCJgIE9SXG4vLyAtIGBkaXNwbGF5OiBcIi13ZWJraXQtZmxleFwiYCBPUlxuLy8gLSBgZGlzcGxheTogWy8qIC4uLiAqLywgXCItd2Via2l0LWZsZXhcIiwgXCJmbGV4XCJdXG4vL1xuLy8gVGhlIGxhc3QgZm9ybSBpcyBwcm9ibGVtYXRpYyBmb3IgZXZlbnR1YWwgdXNlIGluIHRoZSBicm93c2VyIGFuZCBzZXJ2ZXJcbi8vIHJlbmRlci4gTW9yZSBjb25mdXNpbmdseSwgd2UgaGF2ZSB0byBkbyAqKmRpZmZlcmVudCoqIHRoaW5ncyBvbiB0aGVcbi8vIGJyb3dzZXIgYW5kIHNlcnZlciAobm90ZWQgaW5saW5lIGJlbG93KS5cbi8vXG4vLyBodHRwczovL2dpdGh1Yi5jb20vRm9ybWlkYWJsZUxhYnMvcmFkaXVtL2lzc3Vlcy85NThcblxuXG5mdW5jdGlvbiBmbGF0dGVuU3R5bGVWYWx1ZXMoc3R5bGUpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlKS5yZWR1Y2UoZnVuY3Rpb24gKG5ld1N0eWxlLCBrZXkpIHtcbiAgICB2YXIgdmFsID0gc3R5bGVba2V5XTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIGlmIChFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00pIHtcbiAgICAgICAgLy8gRm9yIHRoZSAqKmJyb3dzZXIqKiwgd2hlbiBmYWNlZCB3aXRoIG11bHRpcGxlIHZhbHVlcywgd2UganVzdCB0YWtlXG4gICAgICAgIC8vIHRoZSAqKmxhc3QqKiBvbmUsIHdoaWNoIGlzIHRoZSBvcmlnaW5hbCBwYXNzZWQgaW4gdmFsdWUgYmVmb3JlXG4gICAgICAgIC8vIHByZWZpeGluZy4gVGhpcyBfc2hvdWxkXyB3b3JrLCBiZWNhdXNlIGBpbmxpbmUtc3R5bGUtcHJlZml4ZXJgXG4gICAgICAgIC8vIHdlJ3JlIGp1c3QgcGFzc2luZyB0aHJvdWdoIHdoYXQgd291bGQgaGFwcGVuIHdpdGhvdXQgSVNQLlxuICAgICAgICB2YWwgPSB2YWxbdmFsLmxlbmd0aCAtIDFdLnRvU3RyaW5nKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3IgdGhlICoqc2VydmVyKiosIHdlIGp1c3QgY29uY2F0ZW5hdGUgdGhpbmdzIHRvZ2V0aGVyIGFuZCBjb252ZXJ0XG4gICAgICAgIC8vIHRoZSBzdHlsZSBvYmplY3QgdmFsdWVzIGludG8gYSBoYWNrZWQtdXAgc3RyaW5nIG9mIGxpa2UgYGRpc3BsYXk6XG4gICAgICAgIC8vIFwiLXdlYmtpdC1mbGV4O2Rpc3BsYXk6ZmxleFwiYCB0aGF0IHdpbGwgU1NSIHJlbmRlciBjb3JyZWN0bHkgdG8gbGlrZVxuICAgICAgICAvLyBgXCJkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5OmZsZXhcImAgYnV0IHdvdWxkIG90aGVyd2lzZSBiZVxuICAgICAgICAvLyB0b3RhbGx5IGludmFsaWQgdmFsdWVzLlxuICAgICAgICAvLyBXZSBjb252ZXJ0IGtleXMgdG8gZGFzaC1jYXNlIG9ubHkgZm9yIHRoZSBzZXJpYWxpemUgdmFsdWVzIGFuZFxuICAgICAgICAvLyBsZWF2ZSB0aGUgcmVhbCBrZXkgY2FtZWwtY2FzZWQgc28gaXQncyBhcyBleHBlY3RlZCB0byBSZWFjdCBhbmRcbiAgICAgICAgLy8gb3RoZXIgcGFydHMgb2YgdGhlIHByb2Nlc3NpbmcgY2hhaW4uXG4gICAgICAgIHZhbCA9IHZhbC5qb2luKFwiO1wiLmNvbmNhdChjYW1lbENhc2VUb0Rhc2hDYXNlKGtleSksIFwiOlwiKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmV3U3R5bGVba2V5XSA9IHZhbDtcbiAgICByZXR1cm4gbmV3U3R5bGU7XG4gIH0sIHt9KTtcbn1cblxudmFyIF9oYXNXYXJuZWRBYm91dFVzZXJBZ2VudCA9IGZhbHNlO1xuXG52YXIgX2xhc3RVc2VyQWdlbnQ7XG5cbnZhciBfY2FjaGVkUHJlZml4ZXI7XG5cbmZ1bmN0aW9uIGdldFByZWZpeGVyKHVzZXJBZ2VudCkge1xuICB2YXIgYWN0dWFsVXNlckFnZW50ID0gdXNlckFnZW50IHx8IGdsb2JhbCAmJiBnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3IudXNlckFnZW50O1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFhY3R1YWxVc2VyQWdlbnQgJiYgIV9oYXNXYXJuZWRBYm91dFVzZXJBZ2VudCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgY29uc29sZS53YXJuKCdSYWRpdW06IHVzZXJBZ2VudCBzaG91bGQgYmUgc3VwcGxpZWQgZm9yIHNlcnZlci1zaWRlIHJlbmRlcmluZy4gU2VlICcgKyAnaHR0cHM6Ly9naXRodWIuY29tL0Zvcm1pZGFibGVMYWJzL3JhZGl1bS90cmVlL21hc3Rlci9kb2NzL2FwaSNyYWRpdW0gJyArICdmb3IgbW9yZSBpbmZvcm1hdGlvbi4nKTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXG4gICAgICBfaGFzV2FybmVkQWJvdXRVc2VyQWdlbnQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnIHx8ICFfY2FjaGVkUHJlZml4ZXIgfHwgYWN0dWFsVXNlckFnZW50ICE9PSBfbGFzdFVzZXJBZ2VudCkge1xuICAgIGlmIChhY3R1YWxVc2VyQWdlbnQgPT09ICdhbGwnKSB7XG4gICAgICBfY2FjaGVkUHJlZml4ZXIgPSB7XG4gICAgICAgIHByZWZpeDogcHJlZml4QWxsLFxuICAgICAgICBwcmVmaXhlZEtleWZyYW1lczogJ2tleWZyYW1lcydcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIF9jYWNoZWRQcmVmaXhlciA9IG5ldyBJbmxpbmVTdHlsZVByZWZpeGVyKHtcbiAgICAgICAgdXNlckFnZW50OiBhY3R1YWxVc2VyQWdlbnRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIF9sYXN0VXNlckFnZW50ID0gYWN0dWFsVXNlckFnZW50O1xuICB9XG5cbiAgcmV0dXJuIF9jYWNoZWRQcmVmaXhlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZWZpeGVkS2V5ZnJhbWVzKHVzZXJBZ2VudCkge1xuICByZXR1cm4gZ2V0UHJlZml4ZXIodXNlckFnZW50KS5wcmVmaXhlZEtleWZyYW1lcyB8fCAna2V5ZnJhbWVzJztcbn0gLy8gUmV0dXJucyBhIG5ldyBzdHlsZSBvYmplY3Qgd2l0aCB2ZW5kb3IgcHJlZml4ZXMgYWRkZWQgdG8gcHJvcGVydHkgbmFtZXMgYW5kXG4vLyB2YWx1ZXMuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcmVmaXhlZFN0eWxlKHN0eWxlLCB1c2VyQWdlbnQpIHtcbiAgdmFyIHN0eWxlV2l0aEZhbGxiYWNrcyA9IHRyYW5zZm9ybVZhbHVlcyhzdHlsZSk7XG4gIHZhciBwcmVmaXhlciA9IGdldFByZWZpeGVyKHVzZXJBZ2VudCk7XG4gIHZhciBwcmVmaXhlZFN0eWxlID0gcHJlZml4ZXIucHJlZml4KHN0eWxlV2l0aEZhbGxiYWNrcyk7XG4gIHZhciBmbGF0dGVuZWRTdHlsZSA9IGZsYXR0ZW5TdHlsZVZhbHVlcyhwcmVmaXhlZFN0eWxlKTtcbiAgcmV0dXJuIGZsYXR0ZW5lZFN0eWxlO1xufSIsImZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykgeyBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlOyB9KSk7IH0gb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IGFwcGVuZEltcG9ydGFudFRvRWFjaFZhbHVlIGZyb20gJy4vYXBwZW5kLWltcG9ydGFudC10by1lYWNoLXZhbHVlJztcbmltcG9ydCBjc3NSdWxlU2V0VG9TdHJpbmcgZnJvbSAnLi9jc3MtcnVsZS1zZXQtdG8tc3RyaW5nJztcbmltcG9ydCBnZXRTdGF0ZSBmcm9tICcuL2dldC1zdGF0ZSc7XG5pbXBvcnQgZ2V0U3RhdGVLZXkgZnJvbSAnLi9nZXQtc3RhdGUta2V5JztcbmltcG9ydCBjbGVhblN0YXRlS2V5IGZyb20gJy4vY2xlYW4tc3RhdGUta2V5JztcbmltcG9ydCBnZXRSYWRpdW1TdHlsZVN0YXRlIGZyb20gJy4vZ2V0LXJhZGl1bS1zdHlsZS1zdGF0ZSc7XG5pbXBvcnQgaGFzaCBmcm9tICcuL2hhc2gnO1xuaW1wb3J0IHsgaXNOZXN0ZWRTdHlsZSwgbWVyZ2VTdHlsZXMgfSBmcm9tICcuL21lcmdlLXN0eWxlcyc7XG5pbXBvcnQgUGx1Z2lucyBmcm9tICcuL3BsdWdpbnMvJztcbmltcG9ydCBFeGVjdXRpb25FbnZpcm9ubWVudCBmcm9tICdleGVudic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0eWxlS2VlcGVyIGZyb20gJy4vc3R5bGUta2VlcGVyJztcbnZhciBERUZBVUxUX0NPTkZJRyA9IHtcbiAgcGx1Z2luczogW1BsdWdpbnMubWVyZ2VTdHlsZUFycmF5LCBQbHVnaW5zLmNoZWNrUHJvcHMsIFBsdWdpbnMucmVzb2x2ZU1lZGlhUXVlcmllcywgUGx1Z2lucy5yZXNvbHZlSW50ZXJhY3Rpb25TdHlsZXMsIFBsdWdpbnMua2V5ZnJhbWVzLCBQbHVnaW5zLnZpc2l0ZWQsIFBsdWdpbnMucmVtb3ZlTmVzdGVkU3R5bGVzLCBQbHVnaW5zLnByZWZpeCwgUGx1Z2lucy5jaGVja1Byb3BzXVxufTsgLy8gR3Jvc3NcblxudmFyIGdsb2JhbFN0YXRlID0ge307IC8vIE9ubHkgZm9yIHVzZSBieSB0ZXN0c1xuXG52YXIgX19pc1Rlc3RNb2RlRW5hYmxlZCA9IGZhbHNlO1xuLy8gRGVjbGFyZSBlYXJseSBmb3IgcmVjdXJzaXZlIGhlbHBlcnMuXG52YXIgX3Jlc29sdmVTdHlsZXM1ID0gbnVsbDtcblxudmFyIF9zaG91bGRSZXNvbHZlU3R5bGVzID0gZnVuY3Rpb24gX3Nob3VsZFJlc29sdmVTdHlsZXMoY29tcG9uZW50KSB7XG4gIHJldHVybiBjb21wb25lbnQudHlwZSAmJiAhY29tcG9uZW50LnR5cGUuX2lzUmFkaXVtRW5oYW5jZWQ7XG59O1xuXG52YXIgX3Jlc29sdmVDaGlsZHJlbiA9IGZ1bmN0aW9uIF9yZXNvbHZlQ2hpbGRyZW4oX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgY29tcG9uZW50ID0gX3JlZi5jb21wb25lbnQsXG4gICAgICBjb25maWcgPSBfcmVmLmNvbmZpZyxcbiAgICAgIGV4aXN0aW5nS2V5TWFwID0gX3JlZi5leGlzdGluZ0tleU1hcCxcbiAgICAgIGV4dHJhU3RhdGVLZXlNYXAgPSBfcmVmLmV4dHJhU3RhdGVLZXlNYXA7XG5cbiAgaWYgKCFjaGlsZHJlbikge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHZhciBjaGlsZHJlblR5cGUgPSBfdHlwZW9mKGNoaWxkcmVuKTtcblxuICBpZiAoY2hpbGRyZW5UeXBlID09PSAnc3RyaW5nJyB8fCBjaGlsZHJlblR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgd2l0aCBhIHNpbmdsZSBwcmltaXRpdmUgY2hpbGRcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICBpZiAoY2hpbGRyZW5UeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gV3JhcCB0aGUgZnVuY3Rpb24sIHJlc29sdmluZyBzdHlsZXMgb24gdGhlIHJlc3VsdFxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gY2hpbGRyZW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KHJlc3VsdCkpIHtcbiAgICAgICAgdmFyIF9rZXkgPSBnZXRTdGF0ZUtleShyZXN1bHQpO1xuXG4gICAgICAgIGRlbGV0ZSBleHRyYVN0YXRlS2V5TWFwW19rZXldO1xuXG4gICAgICAgIHZhciBfcmVzb2x2ZVN0eWxlcyA9IF9yZXNvbHZlU3R5bGVzNShjb21wb25lbnQsIHJlc3VsdCwgY29uZmlnLCBleGlzdGluZ0tleU1hcCwgdHJ1ZSwgZXh0cmFTdGF0ZUtleU1hcCksXG4gICAgICAgICAgICBlbGVtZW50ID0gX3Jlc29sdmVTdHlsZXMuZWxlbWVudDtcblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9XG5cbiAgaWYgKFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSA9PT0gMSAmJiBjaGlsZHJlbi50eXBlKSB7XG4gICAgLy8gSWYgYSBSZWFjdCBFbGVtZW50IGlzIGFuIG9ubHkgY2hpbGQsIGRvbid0IHdyYXAgaXQgaW4gYW4gYXJyYXkgZm9yXG4gICAgLy8gUmVhY3QuQ2hpbGRyZW4ubWFwKCkgZm9yIFJlYWN0LkNoaWxkcmVuLm9ubHkoKSBjb21wYXRpYmlsaXR5LlxuICAgIHZhciBvbmx5Q2hpbGQgPSBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcblxuICAgIHZhciBfa2V5MiA9IGdldFN0YXRlS2V5KG9ubHlDaGlsZCk7XG5cbiAgICBkZWxldGUgZXh0cmFTdGF0ZUtleU1hcFtfa2V5Ml07XG5cbiAgICB2YXIgX3Jlc29sdmVTdHlsZXMyID0gX3Jlc29sdmVTdHlsZXM1KGNvbXBvbmVudCwgb25seUNoaWxkLCBjb25maWcsIGV4aXN0aW5nS2V5TWFwLCB0cnVlLCBleHRyYVN0YXRlS2V5TWFwKSxcbiAgICAgICAgZWxlbWVudCA9IF9yZXNvbHZlU3R5bGVzMi5lbGVtZW50O1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICB2YXIgX2tleTMgPSBnZXRTdGF0ZUtleShjaGlsZCk7XG5cbiAgICAgIGRlbGV0ZSBleHRyYVN0YXRlS2V5TWFwW19rZXkzXTtcblxuICAgICAgdmFyIF9yZXNvbHZlU3R5bGVzMyA9IF9yZXNvbHZlU3R5bGVzNShjb21wb25lbnQsIGNoaWxkLCBjb25maWcsIGV4aXN0aW5nS2V5TWFwLCB0cnVlLCBleHRyYVN0YXRlS2V5TWFwKSxcbiAgICAgICAgICBfZWxlbWVudCA9IF9yZXNvbHZlU3R5bGVzMy5lbGVtZW50O1xuXG4gICAgICByZXR1cm4gX2VsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KTtcbn07IC8vIFJlY3Vyc2Ugb3ZlciBwcm9wcywganVzdCBsaWtlIGNoaWxkcmVuXG5cblxudmFyIF9yZXNvbHZlUHJvcHMgPSBmdW5jdGlvbiBfcmVzb2x2ZVByb3BzKF9yZWYyKSB7XG4gIHZhciBjb21wb25lbnQgPSBfcmVmMi5jb21wb25lbnQsXG4gICAgICBjb25maWcgPSBfcmVmMi5jb25maWcsXG4gICAgICBleGlzdGluZ0tleU1hcCA9IF9yZWYyLmV4aXN0aW5nS2V5TWFwLFxuICAgICAgcHJvcHMgPSBfcmVmMi5wcm9wcyxcbiAgICAgIGV4dHJhU3RhdGVLZXlNYXAgPSBfcmVmMi5leHRyYVN0YXRlS2V5TWFwO1xuICB2YXIgbmV3UHJvcHMgPSBwcm9wcztcbiAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAvLyBXZSBhbHJlYWR5IHJlY3Vyc2Ugb3ZlciBjaGlsZHJlbiBhYm92ZVxuICAgIGlmIChwcm9wID09PSAnY2hpbGRyZW4nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BdO1xuXG4gICAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgIHZhciBfa2V5NCA9IGdldFN0YXRlS2V5KHByb3BWYWx1ZSk7XG5cbiAgICAgIGRlbGV0ZSBleHRyYVN0YXRlS2V5TWFwW19rZXk0XTtcbiAgICAgIG5ld1Byb3BzID0gX29iamVjdFNwcmVhZCh7fSwgbmV3UHJvcHMpO1xuXG4gICAgICB2YXIgX3Jlc29sdmVTdHlsZXM0ID0gX3Jlc29sdmVTdHlsZXM1KGNvbXBvbmVudCwgcHJvcFZhbHVlLCBjb25maWcsIGV4aXN0aW5nS2V5TWFwLCB0cnVlLCBleHRyYVN0YXRlS2V5TWFwKSxcbiAgICAgICAgICBlbGVtZW50ID0gX3Jlc29sdmVTdHlsZXM0LmVsZW1lbnQ7XG5cbiAgICAgIG5ld1Byb3BzW3Byb3BdID0gZWxlbWVudDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbmV3UHJvcHM7XG59O1xuXG52YXIgX2J1aWxkR2V0S2V5ID0gZnVuY3Rpb24gX2J1aWxkR2V0S2V5KF9yZWYzKSB7XG4gIHZhciBjb21wb25lbnROYW1lID0gX3JlZjMuY29tcG9uZW50TmFtZSxcbiAgICAgIGV4aXN0aW5nS2V5TWFwID0gX3JlZjMuZXhpc3RpbmdLZXlNYXAsXG4gICAgICByZW5kZXJlZEVsZW1lbnQgPSBfcmVmMy5yZW5kZXJlZEVsZW1lbnQ7XG4gIC8vIFdlIG5lZWQgYSB1bmlxdWUga2V5IHRvIGNvcnJlbGF0ZSBzdGF0ZSBjaGFuZ2VzIGR1ZSB0byB1c2VyIGludGVyYWN0aW9uXG4gIC8vIHdpdGggdGhlIHJlbmRlcmVkIGVsZW1lbnQsIHNvIHdlIGtub3cgdG8gYXBwbHkgdGhlIHByb3BlciBpbnRlcmFjdGl2ZVxuICAvLyBzdHlsZXMuXG4gIHZhciBvcmlnaW5hbEtleSA9IGdldFN0YXRlS2V5KHJlbmRlcmVkRWxlbWVudCk7XG4gIHZhciBrZXkgPSBjbGVhblN0YXRlS2V5KG9yaWdpbmFsS2V5KTtcbiAgdmFyIGFscmVhZHlHb3RLZXkgPSBmYWxzZTtcblxuICB2YXIgZ2V0S2V5ID0gZnVuY3Rpb24gZ2V0S2V5KCkge1xuICAgIGlmIChhbHJlYWR5R290S2V5KSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cblxuICAgIGFscmVhZHlHb3RLZXkgPSB0cnVlO1xuXG4gICAgaWYgKGV4aXN0aW5nS2V5TWFwW2tleV0pIHtcbiAgICAgIHZhciBlbGVtZW50TmFtZTtcblxuICAgICAgaWYgKHR5cGVvZiByZW5kZXJlZEVsZW1lbnQudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZWxlbWVudE5hbWUgPSByZW5kZXJlZEVsZW1lbnQudHlwZTtcbiAgICAgIH0gZWxzZSBpZiAocmVuZGVyZWRFbGVtZW50LnR5cGUuY29uc3RydWN0b3IpIHtcbiAgICAgICAgZWxlbWVudE5hbWUgPSByZW5kZXJlZEVsZW1lbnQudHlwZS5jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCByZW5kZXJlZEVsZW1lbnQudHlwZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JhZGl1bSByZXF1aXJlcyBlYWNoIGVsZW1lbnQgd2l0aCBpbnRlcmFjdGl2ZSBzdHlsZXMgdG8gaGF2ZSBhIHVuaXF1ZSAnICsgJ2tleSwgc2V0IHVzaW5nIGVpdGhlciB0aGUgcmVmIG9yIGtleSBwcm9wLiAnICsgKG9yaWdpbmFsS2V5ID8gJ0tleSBcIicgKyBvcmlnaW5hbEtleSArICdcIiBpcyBhIGR1cGxpY2F0ZS4nIDogJ011bHRpcGxlIGVsZW1lbnRzIGhhdmUgbm8ga2V5IHNwZWNpZmllZC4nKSArICcgJyArICdDb21wb25lbnQ6IFwiJyArIGNvbXBvbmVudE5hbWUgKyAnXCIuICcgKyAoZWxlbWVudE5hbWUgPyAnRWxlbWVudDogXCInICsgZWxlbWVudE5hbWUgKyAnXCIuJyA6ICcnKSk7XG4gICAgfVxuXG4gICAgZXhpc3RpbmdLZXlNYXBba2V5XSA9IHRydWU7XG4gICAgcmV0dXJuIGtleTtcbiAgfTtcblxuICByZXR1cm4gZ2V0S2V5O1xufTtcblxudmFyIF9zZXRTdHlsZVN0YXRlID0gZnVuY3Rpb24gX3NldFN0eWxlU3RhdGUoY29tcG9uZW50LCBrZXksIHN0YXRlS2V5LCB2YWx1ZSkge1xuICBpZiAoIWNvbXBvbmVudC5fcmFkaXVtSXNNb3VudGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGV4aXN0aW5nID0gZ2V0UmFkaXVtU3R5bGVTdGF0ZShjb21wb25lbnQpO1xuICB2YXIgc3RhdGUgPSB7XG4gICAgX3JhZGl1bVN0eWxlU3RhdGU6IF9vYmplY3RTcHJlYWQoe30sIGV4aXN0aW5nKVxuICB9O1xuICBzdGF0ZS5fcmFkaXVtU3R5bGVTdGF0ZVtrZXldID0gX29iamVjdFNwcmVhZCh7fSwgc3RhdGUuX3JhZGl1bVN0eWxlU3RhdGVba2V5XSk7XG4gIHN0YXRlLl9yYWRpdW1TdHlsZVN0YXRlW2tleV1bc3RhdGVLZXldID0gdmFsdWU7XG4gIGNvbXBvbmVudC5fbGFzdFJhZGl1bVN0YXRlID0gc3RhdGUuX3JhZGl1bVN0eWxlU3RhdGU7XG4gIGNvbXBvbmVudC5zZXRTdGF0ZShzdGF0ZSk7XG59O1xuXG52YXIgX3J1blBsdWdpbnMgPSBmdW5jdGlvbiBfcnVuUGx1Z2lucyhfcmVmNCkge1xuICB2YXIgY29tcG9uZW50ID0gX3JlZjQuY29tcG9uZW50LFxuICAgICAgY29uZmlnID0gX3JlZjQuY29uZmlnLFxuICAgICAgZXhpc3RpbmdLZXlNYXAgPSBfcmVmNC5leGlzdGluZ0tleU1hcCxcbiAgICAgIHByb3BzID0gX3JlZjQucHJvcHMsXG4gICAgICByZW5kZXJlZEVsZW1lbnQgPSBfcmVmNC5yZW5kZXJlZEVsZW1lbnQ7XG5cbiAgLy8gRG9uJ3QgcnVuIHBsdWdpbnMgaWYgcmVuZGVyZWRFbGVtZW50IGlzIG5vdCBhIHNpbXBsZSBSZWFjdERPTUVsZW1lbnQgb3IgaGFzXG4gIC8vIG5vIHN0eWxlLlxuICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KHJlbmRlcmVkRWxlbWVudCkgfHwgdHlwZW9mIHJlbmRlcmVkRWxlbWVudC50eXBlICE9PSAnc3RyaW5nJyB8fCAhcHJvcHMuc3R5bGUpIHtcbiAgICByZXR1cm4gcHJvcHM7XG4gIH1cblxuICB2YXIgbmV3UHJvcHMgPSBwcm9wcztcbiAgdmFyIHBsdWdpbnMgPSBjb25maWcucGx1Z2lucyB8fCBERUZBVUxUX0NPTkZJRy5wbHVnaW5zO1xuICB2YXIgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcblxuICB2YXIgZ2V0S2V5ID0gX2J1aWxkR2V0S2V5KHtcbiAgICByZW5kZXJlZEVsZW1lbnQ6IHJlbmRlcmVkRWxlbWVudCxcbiAgICBleGlzdGluZ0tleU1hcDogZXhpc3RpbmdLZXlNYXAsXG4gICAgY29tcG9uZW50TmFtZTogY29tcG9uZW50TmFtZVxuICB9KTtcblxuICB2YXIgZ2V0Q29tcG9uZW50RmllbGQgPSBmdW5jdGlvbiBnZXRDb21wb25lbnRGaWVsZChrZXkpIHtcbiAgICByZXR1cm4gY29tcG9uZW50W2tleV07XG4gIH07XG5cbiAgdmFyIGdldEdsb2JhbFN0YXRlID0gZnVuY3Rpb24gZ2V0R2xvYmFsU3RhdGUoa2V5KSB7XG4gICAgcmV0dXJuIGdsb2JhbFN0YXRlW2tleV07XG4gIH07XG5cbiAgdmFyIGNvbXBvbmVudEdldFN0YXRlID0gZnVuY3Rpb24gY29tcG9uZW50R2V0U3RhdGUoc3RhdGVLZXksIGVsZW1lbnRLZXkpIHtcbiAgICByZXR1cm4gZ2V0U3RhdGUoY29tcG9uZW50LnN0YXRlLCBlbGVtZW50S2V5IHx8IGdldEtleSgpLCBzdGF0ZUtleSk7XG4gIH07XG5cbiAgdmFyIHNldFN0YXRlID0gZnVuY3Rpb24gc2V0U3RhdGUoc3RhdGVLZXksIHZhbHVlLCBlbGVtZW50S2V5KSB7XG4gICAgcmV0dXJuIF9zZXRTdHlsZVN0YXRlKGNvbXBvbmVudCwgZWxlbWVudEtleSB8fCBnZXRLZXkoKSwgc3RhdGVLZXksIHZhbHVlKTtcbiAgfTtcblxuICB2YXIgYWRkQ1NTID0gZnVuY3Rpb24gYWRkQ1NTKGNzcykge1xuICAgIHZhciBzdHlsZUtlZXBlciA9IGNvbXBvbmVudC5fcmFkaXVtU3R5bGVLZWVwZXI7XG5cbiAgICBpZiAoIXN0eWxlS2VlcGVyKSB7XG4gICAgICBpZiAoX19pc1Rlc3RNb2RlRW5hYmxlZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUbyB1c2UgcGx1Z2lucyByZXF1aXJpbmcgYGFkZENTU2AgKGUuZy4ga2V5ZnJhbWVzLCBtZWRpYSBxdWVyaWVzKSwgJyArICdwbGVhc2Ugd3JhcCB5b3VyIGFwcGxpY2F0aW9uIGluIHRoZSBTdHlsZVJvb3QgY29tcG9uZW50LiBDb21wb25lbnQgJyArICduYW1lOiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVLZWVwZXIuYWRkQ1NTKGNzcyk7XG4gIH07XG5cbiAgdmFyIG5ld1N0eWxlID0gcHJvcHMuc3R5bGU7XG4gIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgdmFyIHJlc3VsdCA9IHBsdWdpbih7XG4gICAgICBFeGVjdXRpb25FbnZpcm9ubWVudDogRXhlY3V0aW9uRW52aXJvbm1lbnQsXG4gICAgICBhZGRDU1M6IGFkZENTUyxcbiAgICAgIGFwcGVuZEltcG9ydGFudFRvRWFjaFZhbHVlOiBhcHBlbmRJbXBvcnRhbnRUb0VhY2hWYWx1ZSxcbiAgICAgIGNvbXBvbmVudE5hbWU6IGNvbXBvbmVudE5hbWUsXG4gICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgIGNzc1J1bGVTZXRUb1N0cmluZzogY3NzUnVsZVNldFRvU3RyaW5nLFxuICAgICAgZ2V0Q29tcG9uZW50RmllbGQ6IGdldENvbXBvbmVudEZpZWxkLFxuICAgICAgZ2V0R2xvYmFsU3RhdGU6IGdldEdsb2JhbFN0YXRlLFxuICAgICAgZ2V0U3RhdGU6IGNvbXBvbmVudEdldFN0YXRlLFxuICAgICAgaGFzaDogaGFzaCxcbiAgICAgIG1lcmdlU3R5bGVzOiBtZXJnZVN0eWxlcyxcbiAgICAgIHByb3BzOiBuZXdQcm9wcyxcbiAgICAgIHNldFN0YXRlOiBzZXRTdGF0ZSxcbiAgICAgIGlzTmVzdGVkU3R5bGU6IGlzTmVzdGVkU3R5bGUsXG4gICAgICBzdHlsZTogbmV3U3R5bGVcbiAgICB9KSB8fCB7fTtcbiAgICBuZXdTdHlsZSA9IHJlc3VsdC5zdHlsZSB8fCBuZXdTdHlsZTtcbiAgICBuZXdQcm9wcyA9IHJlc3VsdC5wcm9wcyAmJiBPYmplY3Qua2V5cyhyZXN1bHQucHJvcHMpLmxlbmd0aCA/IF9vYmplY3RTcHJlYWQoe30sIG5ld1Byb3BzLCByZXN1bHQucHJvcHMpIDogbmV3UHJvcHM7XG4gICAgdmFyIG5ld0NvbXBvbmVudEZpZWxkcyA9IHJlc3VsdC5jb21wb25lbnRGaWVsZHMgfHwge307XG4gICAgT2JqZWN0LmtleXMobmV3Q29tcG9uZW50RmllbGRzKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZE5hbWUpIHtcbiAgICAgIGNvbXBvbmVudFtmaWVsZE5hbWVdID0gbmV3Q29tcG9uZW50RmllbGRzW2ZpZWxkTmFtZV07XG4gICAgfSk7XG4gICAgdmFyIG5ld0dsb2JhbFN0YXRlID0gcmVzdWx0Lmdsb2JhbFN0YXRlIHx8IHt9O1xuICAgIE9iamVjdC5rZXlzKG5ld0dsb2JhbFN0YXRlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGdsb2JhbFN0YXRlW2tleV0gPSBuZXdHbG9iYWxTdGF0ZVtrZXldO1xuICAgIH0pO1xuICB9KTtcblxuICBpZiAobmV3U3R5bGUgIT09IHByb3BzLnN0eWxlKSB7XG4gICAgbmV3UHJvcHMgPSBfb2JqZWN0U3ByZWFkKHt9LCBuZXdQcm9wcywge1xuICAgICAgc3R5bGU6IG5ld1N0eWxlXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbmV3UHJvcHM7XG59OyAvLyBXcmFwcGVyIGFyb3VuZCBSZWFjdC5jbG9uZUVsZW1lbnQuIFRvIGF2b2lkIHByb2Nlc3NpbmcgdGhlIHNhbWUgZWxlbWVudFxuLy8gdHdpY2UsIHdoZW5ldmVyIHdlIGNsb25lIGFuIGVsZW1lbnQgYWRkIGEgc3BlY2lhbCBwcm9wIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndFxuLy8gcHJvY2VzcyB0aGlzIGVsZW1lbnQgYWdhaW4uXG5cblxudmFyIF9jbG9uZUVsZW1lbnQgPSBmdW5jdGlvbiBfY2xvbmVFbGVtZW50KHJlbmRlcmVkRWxlbWVudCwgbmV3UHJvcHMsIG5ld0NoaWxkcmVuKSB7XG4gIC8vIE9ubHkgYWRkIGZsYWcgaWYgdGhpcyBpcyBhIG5vcm1hbCBET00gZWxlbWVudFxuICBpZiAodHlwZW9mIHJlbmRlcmVkRWxlbWVudC50eXBlID09PSAnc3RyaW5nJykge1xuICAgIG5ld1Byb3BzID0gX29iamVjdFNwcmVhZCh7fSwgbmV3UHJvcHMsIHtcbiAgICAgICdkYXRhLXJhZGl1bSc6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQocmVuZGVyZWRFbGVtZW50LCBuZXdQcm9wcywgbmV3Q2hpbGRyZW4pO1xufTsgLy9cbi8vIFRoZSBudWNsZXVzIG9mIFJhZGl1bS4gcmVzb2x2ZVN0eWxlcyBpcyBjYWxsZWQgb24gdGhlIHJlbmRlcmVkIGVsZW1lbnRzXG4vLyBiZWZvcmUgdGhleSBhcmUgcmV0dXJuZWQgaW4gcmVuZGVyLiBJdCBpdGVyYXRlcyBvdmVyIHRoZSBlbGVtZW50cyBhbmRcbi8vIGNoaWxkcmVuLCByZXdyaXRpbmcgcHJvcHMgdG8gYWRkIGV2ZW50IGhhbmRsZXJzIHJlcXVpcmVkIHRvIGNhcHR1cmUgdXNlclxuLy8gaW50ZXJhY3Rpb25zIChlLmcuIG1vdXNlIG92ZXIpLiBJdCBhbHNvIHJlcGxhY2VzIHRoZSBzdHlsZSBwcm9wIGJlY2F1c2UgaXRcbi8vIGFkZHMgaW4gdGhlIHZhcmlvdXMgaW50ZXJhY3Rpb24gc3R5bGVzIChlLmcuIDpob3ZlcikuXG4vL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtcGFyYW1zICovXG5cblxuX3Jlc29sdmVTdHlsZXM1ID0gZnVuY3Rpb24gcmVzb2x2ZVN0eWxlcyhjb21wb25lbnQsIHJlbmRlcmVkRWxlbWVudCkge1xuICB2YXIgY29uZmlnID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBERUZBVUxUX0NPTkZJRztcbiAgdmFyIGV4aXN0aW5nS2V5TWFwID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcbiAgdmFyIHNob3VsZENoZWNrQmVmb3JlUmVzb2x2ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDogZmFsc2U7XG4gIHZhciBleHRyYVN0YXRlS2V5TWFwID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgPyBhcmd1bWVudHNbNV0gOiB1bmRlZmluZWQ7XG5cbiAgLy8gVGhlIGV4dHJhU3RhdGVLZXlNYXAgaXMgZm9yIGRldGVybWluaW5nIHdoaWNoIGtleXMgc2hvdWxkIGJlIGVyYXNlZCBmcm9tXG4gIC8vIHRoZSBzdGF0ZSAoaS5lLiB3aGljaCBjaGlsZCBjb21wb25lbnRzIGFyZSB1bm1vdW50ZWQgYW5kIHNob3VsZCBubyBsb25nZXJcbiAgLy8gaGF2ZSBhIHN0eWxlIHN0YXRlKS5cbiAgaWYgKCFleHRyYVN0YXRlS2V5TWFwKSB7XG4gICAgdmFyIHN0YXRlID0gZ2V0UmFkaXVtU3R5bGVTdGF0ZShjb21wb25lbnQpO1xuICAgIGV4dHJhU3RhdGVLZXlNYXAgPSBPYmplY3Qua2V5cyhzdGF0ZSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgICAgLy8gJ21haW4nIGlzIHRoZSBhdXRvLWdlbmVyYXRlZCBrZXkgd2hlbiB0aGVyZSBpcyBvbmx5IG9uZSBlbGVtZW50IHdpdGhcbiAgICAgIC8vIGludGVyYWN0aXZlIHN0eWxlcyBhbmQgaWYgYSBjdXN0b20ga2V5IGlzIG5vdCBhc3NpZ25lZC4gQmVjYXVzZSBvZlxuICAgICAgLy8gdGhpcywgaXQgaXMgaW1wb3NzaWJsZSB0byBrbm93IHdoaWNoIGNoaWxkIGlzICdtYWluJywgc28gd2Ugd29uJ3RcbiAgICAgIC8vIGNvdW50IHRoaXMga2V5IHdoZW4gZ2VuZXJhdGluZyBvdXIgZXh0cmFTdGF0ZUtleU1hcC5cbiAgICAgIGlmIChrZXkgIT09ICdtYWluJykge1xuICAgICAgICBhY2Nba2V5XSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocmVuZGVyZWRFbGVtZW50KSAmJiAhcmVuZGVyZWRFbGVtZW50LnByb3BzKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gcmVuZGVyZWRFbGVtZW50Lm1hcChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgLy8gZWxlbWVudCBpcyBpbi11c2UsIHNvIHJlbW92ZSBmcm9tIHRoZSBleHRyYVN0YXRlS2V5TWFwXG4gICAgICBpZiAoZXh0cmFTdGF0ZUtleU1hcCkge1xuICAgICAgICB2YXIgX2tleTUgPSBnZXRTdGF0ZUtleShlbGVtZW50KTtcblxuICAgICAgICBkZWxldGUgZXh0cmFTdGF0ZUtleU1hcFtfa2V5NV07XG4gICAgICB9IC8vIHRoaXMgZWxlbWVudCBpcyBhbiBhcnJheSBvZiBlbGVtZW50cyxcbiAgICAgIC8vIHNvIHJldHVybiBhbiBhcnJheSBvZiBlbGVtZW50cyB3aXRoIHJlc29sdmVkIHN0eWxlc1xuXG5cbiAgICAgIHJldHVybiBfcmVzb2x2ZVN0eWxlczUoY29tcG9uZW50LCBlbGVtZW50LCBjb25maWcsIGV4aXN0aW5nS2V5TWFwLCBzaG91bGRDaGVja0JlZm9yZVJlc29sdmUsIGV4dHJhU3RhdGVLZXlNYXApLmVsZW1lbnQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV4dHJhU3RhdGVLZXlNYXA6IGV4dHJhU3RhdGVLZXlNYXAsXG4gICAgICBlbGVtZW50OiBlbGVtZW50c1xuICAgIH07XG4gIH0gLy8gUmVhY3RFbGVtZW50XG5cblxuICBpZiAoIXJlbmRlcmVkRWxlbWVudCB8fCAvLyBCYWlsIGlmIHdlJ3ZlIGFscmVhZHkgcHJvY2Vzc2VkIHRoaXMgZWxlbWVudC4gVGhpcyBlbnN1cmVzIHRoYXQgb25seSB0aGVcbiAgLy8gb3duZXIgb2YgYW4gZWxlbWVudCBwcm9jZXNzZXMgdGhhdCBlbGVtZW50LCBzaW5jZSB0aGUgb3duZXIncyByZW5kZXJcbiAgLy8gZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgZmlyc3QgKHdoaWNoIHdpbGwgYWx3YXlzIGJlIHRoZSBjYXNlLCBzaW5jZSB5b3VcbiAgLy8gY2FuJ3Qga25vdyB3aGF0IGVsc2UgdG8gcmVuZGVyIHVudGlsIHlvdSByZW5kZXIgdGhlIHBhcmVudCBjb21wb25lbnQpLlxuICByZW5kZXJlZEVsZW1lbnQucHJvcHMgJiYgcmVuZGVyZWRFbGVtZW50LnByb3BzWydkYXRhLXJhZGl1bSddIHx8IC8vIEJhaWwgaWYgdGhpcyBlbGVtZW50IGlzIGEgcmFkaXVtIGVuaGFuY2VkIGVsZW1lbnQsIGJlY2F1c2UgaWYgaXQgaXMsXG4gIC8vIHRoZW4gaXQgd2lsbCB0YWtlIGNhcmUgb2YgcmVzb2x2aW5nIGl0cyBvd24gc3R5bGVzLlxuICBzaG91bGRDaGVja0JlZm9yZVJlc29sdmUgJiYgIV9zaG91bGRSZXNvbHZlU3R5bGVzKHJlbmRlcmVkRWxlbWVudCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXh0cmFTdGF0ZUtleU1hcDogZXh0cmFTdGF0ZUtleU1hcCxcbiAgICAgIGVsZW1lbnQ6IHJlbmRlcmVkRWxlbWVudFxuICAgIH07XG4gIH1cblxuICB2YXIgY2hpbGRyZW4gPSByZW5kZXJlZEVsZW1lbnQucHJvcHMuY2hpbGRyZW47XG5cbiAgdmFyIG5ld0NoaWxkcmVuID0gX3Jlc29sdmVDaGlsZHJlbih7XG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxuICAgIGNvbmZpZzogY29uZmlnLFxuICAgIGV4aXN0aW5nS2V5TWFwOiBleGlzdGluZ0tleU1hcCxcbiAgICBleHRyYVN0YXRlS2V5TWFwOiBleHRyYVN0YXRlS2V5TWFwXG4gIH0pO1xuXG4gIHZhciBuZXdQcm9wcyA9IF9yZXNvbHZlUHJvcHMoe1xuICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxuICAgIGNvbmZpZzogY29uZmlnLFxuICAgIGV4aXN0aW5nS2V5TWFwOiBleGlzdGluZ0tleU1hcCxcbiAgICBleHRyYVN0YXRlS2V5TWFwOiBleHRyYVN0YXRlS2V5TWFwLFxuICAgIHByb3BzOiByZW5kZXJlZEVsZW1lbnQucHJvcHNcbiAgfSk7XG5cbiAgbmV3UHJvcHMgPSBfcnVuUGx1Z2lucyh7XG4gICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgY29uZmlnOiBjb25maWcsXG4gICAgZXhpc3RpbmdLZXlNYXA6IGV4aXN0aW5nS2V5TWFwLFxuICAgIHByb3BzOiBuZXdQcm9wcyxcbiAgICByZW5kZXJlZEVsZW1lbnQ6IHJlbmRlcmVkRWxlbWVudFxuICB9KTsgLy8gSWYgbm90aGluZyBjaGFuZ2VkLCBkb24ndCBib3RoZXIgY2xvbmluZyB0aGUgZWxlbWVudC4gTWlnaHQgYmUgYSBiaXRcbiAgLy8gd2FzdGVmdWwsIGFzIHdlIGFkZCB0aGUgc2VudGluZWwgdG8gc3RvcCBkb3VibGUtcHJvY2Vzc2luZyB3aGVuIHdlIGNsb25lLlxuICAvLyBBc3N1bWUgYmVuaWduIGRvdWJsZS1wcm9jZXNzaW5nIGlzIGJldHRlciB0aGFuIHVubmVlZGVkIGNsb25pbmcuXG5cbiAgaWYgKG5ld0NoaWxkcmVuID09PSBjaGlsZHJlbiAmJiBuZXdQcm9wcyA9PT0gcmVuZGVyZWRFbGVtZW50LnByb3BzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV4dHJhU3RhdGVLZXlNYXA6IGV4dHJhU3RhdGVLZXlNYXAsXG4gICAgICBlbGVtZW50OiByZW5kZXJlZEVsZW1lbnRcbiAgICB9O1xuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBfY2xvbmVFbGVtZW50KHJlbmRlcmVkRWxlbWVudCwgbmV3UHJvcHMgIT09IHJlbmRlcmVkRWxlbWVudC5wcm9wcyA/IG5ld1Byb3BzIDoge30sIG5ld0NoaWxkcmVuKTtcblxuICByZXR1cm4ge1xuICAgIGV4dHJhU3RhdGVLZXlNYXA6IGV4dHJhU3RhdGVLZXlNYXAsXG4gICAgZWxlbWVudDogZWxlbWVudFxuICB9O1xufTtcbi8qIGVzbGludC1lbmFibGUgbWF4LXBhcmFtcyAqL1xuLy8gT25seSBmb3IgdXNlIGJ5IHRlc3RzXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgX3Jlc29sdmVTdHlsZXM1Ll9fY2xlYXJTdGF0ZUZvclRlc3RzID0gZnVuY3Rpb24gKCkge1xuICAgIGdsb2JhbFN0YXRlID0ge307XG4gIH07XG5cbiAgX3Jlc29sdmVTdHlsZXM1Ll9fc2V0VGVzdE1vZGUgPSBmdW5jdGlvbiAoaXNFbmFibGVkKSB7XG4gICAgX19pc1Rlc3RNb2RlRW5hYmxlZCA9IGlzRW5hYmxlZDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgX3Jlc29sdmVTdHlsZXM1OyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxudmFyIFN0eWxlS2VlcGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3R5bGVLZWVwZXIodXNlckFnZW50KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0eWxlS2VlcGVyKTtcblxuICAgIHRoaXMuX3VzZXJBZ2VudCA9IHZvaWQgMDtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB2b2lkIDA7XG4gICAgdGhpcy5fY3NzU2V0ID0gdm9pZCAwO1xuICAgIHRoaXMuX3VzZXJBZ2VudCA9IHVzZXJBZ2VudDtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSBbXTtcbiAgICB0aGlzLl9jc3NTZXQgPSB7fTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTdHlsZUtlZXBlciwgW3tcbiAgICBrZXk6IFwic3Vic2NyaWJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuX2xpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAvLyBNdXN0IGJlIGZhdCBhcnJvdyB0byBjYXB0dXJlIGB0aGlzYFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgICB2YXIgbGlzdGVuZXJJbmRleCA9IF90aGlzLl9saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG5cbiAgICAgICAgICBpZiAobGlzdGVuZXJJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBfdGhpcy5fbGlzdGVuZXJzLnNwbGljZShsaXN0ZW5lckluZGV4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFkZENTU1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRDU1MoY3NzKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKCF0aGlzLl9jc3NTZXRbY3NzXSkge1xuICAgICAgICB0aGlzLl9jc3NTZXRbY3NzXSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5fZW1pdENoYW5nZSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAvLyBNdXN0IGJlIGZhdCBhcnJvdyB0byBjYXB0dXJlIGB0aGlzYFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgICBkZWxldGUgX3RoaXMyLl9jc3NTZXRbY3NzXTtcblxuICAgICAgICAgIF90aGlzMi5fZW1pdENoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRDU1NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q1NTKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX2Nzc1NldCkuam9pbignXFxuJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9lbWl0Q2hhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9lbWl0Q2hhbmdlKCkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFN0eWxlS2VlcGVyO1xufSgpO1xuXG5leHBvcnQgeyBTdHlsZUtlZXBlciBhcyBkZWZhdWx0IH07IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG52YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgICBjb250ZXh0VHlwZTogdHJ1ZSxcbiAgICBjb250ZXh0VHlwZXM6IHRydWUsXG4gICAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICAgIGRpc3BsYXlOYW1lOiB0cnVlLFxuICAgIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgICBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I6IHRydWUsXG4gICAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICAgIG1peGluczogdHJ1ZSxcbiAgICBwcm9wVHlwZXM6IHRydWUsXG4gICAgdHlwZTogdHJ1ZVxufTtcblxudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gICAgbmFtZTogdHJ1ZSxcbiAgICBsZW5ndGg6IHRydWUsXG4gICAgcHJvdG90eXBlOiB0cnVlLFxuICAgIGNhbGxlcjogdHJ1ZSxcbiAgICBjYWxsZWU6IHRydWUsXG4gICAgYXJndW1lbnRzOiB0cnVlLFxuICAgIGFyaXR5OiB0cnVlXG59O1xuXG52YXIgRk9SV0FSRF9SRUZfU1RBVElDUyA9IHtcbiAgICAnJCR0eXBlb2YnOiB0cnVlLFxuICAgIHJlbmRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgZGlzcGxheU5hbWU6IHRydWUsXG4gICAgcHJvcFR5cGVzOiB0cnVlXG59O1xuXG52YXIgTUVNT19TVEFUSUNTID0ge1xuICAgICckJHR5cGVvZic6IHRydWUsXG4gICAgY29tcGFyZTogdHJ1ZSxcbiAgICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgZGlzcGxheU5hbWU6IHRydWUsXG4gICAgcHJvcFR5cGVzOiB0cnVlLFxuICAgIHR5cGU6IHRydWVcbn07XG5cbnZhciBUWVBFX1NUQVRJQ1MgPSB7fTtcblRZUEVfU1RBVElDU1tSZWFjdElzLkZvcndhcmRSZWZdID0gRk9SV0FSRF9SRUZfU1RBVElDUztcblxuZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpIHtcbiAgICBpZiAoUmVhY3RJcy5pc01lbW8oY29tcG9uZW50KSkge1xuICAgICAgICByZXR1cm4gTUVNT19TVEFUSUNTO1xuICAgIH1cbiAgICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFsnJCR0eXBlb2YnXV0gfHwgUkVBQ1RfU1RBVElDUztcbn1cblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcblxuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQsIGJsYWNrbGlzdCkge1xuICAgIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBkb24ndCBob2lzdCBvdmVyIHN0cmluZyAoaHRtbCkgY29tcG9uZW50c1xuXG4gICAgICAgIGlmIChvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgICAgIHZhciBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuICAgICAgICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICAgICAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50LCBibGFja2xpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICAgICAga2V5cyA9IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YXJnZXRTdGF0aWNzID0gZ2V0U3RhdGljcyh0YXJnZXRDb21wb25lbnQpO1xuICAgICAgICB2YXIgc291cmNlU3RhdGljcyA9IGdldFN0YXRpY3Moc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgaWYgKCFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShibGFja2xpc3QgJiYgYmxhY2tsaXN0W2tleV0pICYmICEoc291cmNlU3RhdGljcyAmJiBzb3VyY2VTdGF0aWNzW2tleV0pICYmICEodGFyZ2V0U3RhdGljcyAmJiB0YXJnZXRTdGF0aWNzW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaG9pc3ROb25SZWFjdFN0YXRpY3M7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXHR0aHJvdyBuZXcgRXJyb3IoXCJkZWZpbmUgY2Fubm90IGJlIHVzZWQgaW5kaXJlY3RcIik7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==