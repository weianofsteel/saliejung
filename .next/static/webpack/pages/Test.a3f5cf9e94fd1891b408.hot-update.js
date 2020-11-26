webpackHotUpdate_N_E("pages/Test",{

/***/ "./component/Public/Carousel.js":
/*!**************************************!*\
  !*** ./component/Public/Carousel.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {// import React, { useEffect } from 'react';\n// import Grid from '@material-ui/core/Grid';\n// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';\n// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';\n// import Button from '@material-ui/core/Button';\n// import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';\n// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';\n// import IconButton from '@material-ui/core/IconButton';\n// const Carousel = (props) => {\n//     const [count, setCount] = React.useState(0);\n//     const {\n//         imgsrc,\n//         rotateBy,\n//         width,\n//         height,\n//         controlButton,\n//         navigateButton\n//     } = props;\n//     useEffect(() => {\n//         const timer = setInterval(() => {\n//             setCount(count => count + 1);\n//         }, 1000);\n//         return () => clearInterval(timer);\n//     }, []);\n//     const handleBack = () => {\n//         setCount(count => count - rotateBy);\n//     }\n//     const handleNext = () => {\n//         setCount(count => count + rotateBy);\n//     }\n//     const list = [];\n//     for(let i = 0; i <= imgsrc.length - 1; i++) {\n//         list.push(\n//             <React.Fragment>\n//                {parseInt( count / rotateBy) % imgsrc.length === i ?\n//                     <div style={{width:width, height:height}}>\n//                         <img src={imgsrc[i]} style={{margin: '0 auto', width:'100%', height:'100%'}}/>\n//                     </div>\n//                 :''}        \n//             </React.Fragment>\n//         )\n//     }\n//     const RadioNavigation = [];\n//     for(let i = 0; i <= imgsrc.length - 1; i++) {\n//         RadioNavigation.push(\n//             <React.Fragment>\n//                 {parseInt( count / rotateBy) % imgsrc.length === i ?\n//                     <IconButton onClick={()=>{setCount(count => rotateBy * i)}}>\n//                         <PlayCircleFilledIcon/>\n//                     </IconButton>\n//                 :\n//                     <IconButton onClick={()=>{setCount(count => rotateBy * i)}}>\n//                         <RadioButtonUncheckedIcon/>\n//                     </IconButton>\n//                 }\n//             </React.Fragment>\n//         )\n//     }\n//     return(\n//         <React.Fragment>\n//             <Grid container justify=\"center\" alignItems=\"center\">\n//                 {controlButton === true ?\n//                     <Button style={{margin:'auto 0'}} onClick={handleBack}>\n//                         <ArrowBackIosIcon/>\n//                     </Button>\n//                 :''}\n//                 {list}\n//                 {controlButton === true ?\n//                     <Button style={{margin:'auto 0'}} onClick={handleNext}>\n//                         <ArrowForwardIosIcon/>\n//                     </Button>\n//                 :''}\n//             </Grid>\n//             {navigateButton === true ?\n//                 <Grid container justify=\"center\" alignItems=\"center\">\n//                     {RadioNavigation}\n//                 </Grid>\n//             :''}\n//         </React.Fragment>\n//     )\n// }\n// export default Carousel;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1B1YmxpYy9DYXJvdXNlbC5qcz80ZDhmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBIiwiZmlsZSI6Ii4vY29tcG9uZW50L1B1YmxpYy9DYXJvdXNlbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbi8vIGltcG9ydCBBcnJvd0JhY2tJb3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2tJb3MnO1xuLy8gaW1wb3J0IEFycm93Rm9yd2FyZElvc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93Rm9yd2FyZElvcyc7XG4vLyBpbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG4vLyBpbXBvcnQgUGxheUNpcmNsZUZpbGxlZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlDaXJjbGVGaWxsZWQnO1xuLy8gaW1wb3J0IFJhZGlvQnV0dG9uVW5jaGVja2VkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmFkaW9CdXR0b25VbmNoZWNrZWQnO1xuLy8gaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5cbi8vIGNvbnN0IENhcm91c2VsID0gKHByb3BzKSA9PiB7XG4gICAgXG4vLyAgICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcblxuLy8gICAgIGNvbnN0IHtcbi8vICAgICAgICAgaW1nc3JjLFxuLy8gICAgICAgICByb3RhdGVCeSxcbi8vICAgICAgICAgd2lkdGgsXG4vLyAgICAgICAgIGhlaWdodCxcbi8vICAgICAgICAgY29udHJvbEJ1dHRvbixcbi8vICAgICAgICAgbmF2aWdhdGVCdXR0b25cbi8vICAgICB9ID0gcHJvcHM7XG5cbi8vICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgICAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbi8vICAgICAgICAgICAgIHNldENvdW50KGNvdW50ID0+IGNvdW50ICsgMSk7XG4vLyAgICAgICAgIH0sIDEwMDApO1xuLy8gICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4vLyAgICAgfSwgW10pO1xuXG4vLyAgICAgY29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcbi8vICAgICAgICAgc2V0Q291bnQoY291bnQgPT4gY291bnQgLSByb3RhdGVCeSk7XG4vLyAgICAgfVxuXG4vLyAgICAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbi8vICAgICAgICAgc2V0Q291bnQoY291bnQgPT4gY291bnQgKyByb3RhdGVCeSk7XG4vLyAgICAgfVxuXG4vLyAgICAgY29uc3QgbGlzdCA9IFtdO1xuXG4vLyAgICAgZm9yKGxldCBpID0gMDsgaSA8PSBpbWdzcmMubGVuZ3RoIC0gMTsgaSsrKSB7XG4vLyAgICAgICAgIGxpc3QucHVzaChcbi8vICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbi8vICAgICAgICAgICAgICAgIHtwYXJzZUludCggY291bnQgLyByb3RhdGVCeSkgJSBpbWdzcmMubGVuZ3RoID09PSBpID9cbi8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOndpZHRoLCBoZWlnaHQ6aGVpZ2h0fX0+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nc3JjW2ldfSBzdHlsZT17e21hcmdpbjogJzAgYXV0bycsIHdpZHRoOicxMDAlJywgaGVpZ2h0OicxMDAlJ319Lz5cbi8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgICAgOicnfSAgICAgICAgXG4vLyAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuLy8gICAgICAgICApXG4vLyAgICAgfVxuXG4vLyAgICAgY29uc3QgUmFkaW9OYXZpZ2F0aW9uID0gW107XG5cbi8vICAgICBmb3IobGV0IGkgPSAwOyBpIDw9IGltZ3NyYy5sZW5ndGggLSAxOyBpKyspIHtcbi8vICAgICAgICAgUmFkaW9OYXZpZ2F0aW9uLnB1c2goXG4vLyAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4vLyAgICAgICAgICAgICAgICAge3BhcnNlSW50KCBjb3VudCAvIHJvdGF0ZUJ5KSAlIGltZ3NyYy5sZW5ndGggPT09IGkgP1xuLy8gICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKT0+e3NldENvdW50KGNvdW50ID0+IHJvdGF0ZUJ5ICogaSl9fT5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGF5Q2lyY2xlRmlsbGVkSWNvbi8+XG4vLyAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbi8vICAgICAgICAgICAgICAgICA6XG4vLyAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpPT57c2V0Q291bnQoY291bnQgPT4gcm90YXRlQnkgKiBpKX19PlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvQnV0dG9uVW5jaGVja2VkSWNvbi8+XG4vLyAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuLy8gICAgICAgICApXG4vLyAgICAgfVxuXG5cbi8vICAgICByZXR1cm4oXG4vLyAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgXG4vLyAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICB7Y29udHJvbEJ1dHRvbiA9PT0gdHJ1ZSA/XG4vLyAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3ttYXJnaW46J2F1dG8gMCd9fSBvbkNsaWNrPXtoYW5kbGVCYWNrfT5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd0JhY2tJb3NJY29uLz5cbi8vICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4vLyAgICAgICAgICAgICAgICAgOicnfVxuXG4vLyAgICAgICAgICAgICAgICAge2xpc3R9XG5cbi8vICAgICAgICAgICAgICAgICB7Y29udHJvbEJ1dHRvbiA9PT0gdHJ1ZSA/XG4vLyAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3ttYXJnaW46J2F1dG8gMCd9fSBvbkNsaWNrPXtoYW5kbGVOZXh0fT5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd0ZvcndhcmRJb3NJY29uLz5cbi8vICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4vLyAgICAgICAgICAgICAgICAgOicnfVxuICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICA8L0dyaWQ+XG5cbi8vICAgICAgICAgICAgIHtuYXZpZ2F0ZUJ1dHRvbiA9PT0gdHJ1ZSA/XG4vLyAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgIHtSYWRpb05hdmlnYXRpb259XG4gICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgPC9HcmlkPlxuLy8gICAgICAgICAgICAgOicnfVxuICAgICAgICAgICAgXG4vLyAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4vLyAgICAgKVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBDYXJvdXNlbDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/Public/Carousel.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Button/Button.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Button/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js":
false,

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/Ripple.js":
false,

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/TouchRipple.js":
false,

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Grid/Grid.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Grid/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js":
false,

/***/ "./node_modules/@material-ui/core/esm/IconButton/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/SvgIcon/SvgIcon.js":
false,

/***/ "./node_modules/@material-ui/core/esm/SvgIcon/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/colors/blue.js":
false,

/***/ "./node_modules/@material-ui/core/esm/colors/common.js":
false,

/***/ "./node_modules/@material-ui/core/esm/colors/green.js":
false,

/***/ "./node_modules/@material-ui/core/esm/colors/grey.js":
false,

/***/ "./node_modules/@material-ui/core/esm/colors/indigo.js":
false,

/***/ "./node_modules/@material-ui/core/esm/colors/orange.js":
false,

/***/ "./node_modules/@material-ui/core/esm/colors/pink.js":
false,

/***/ "./node_modules/@material-ui/core/esm/colors/red.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/createMixins.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/createMuiTheme.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/createPalette.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/createSpacing.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/createTypography.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/shadows.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/shape.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/transitions.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/withStyles.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/zIndex.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/capitalize.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/requirePropFactory.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/setRef.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/useForkRef.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/useIsFocusVisible.js":
false,

/***/ "./node_modules/@material-ui/icons/ArrowBackIos.js":
false,

/***/ "./node_modules/@material-ui/icons/ArrowForwardIos.js":
false,

/***/ "./node_modules/@material-ui/icons/PlayCircleFilled.js":
false,

/***/ "./node_modules/@material-ui/icons/RadioButtonUnchecked.js":
false,

/***/ "./node_modules/@material-ui/icons/utils/createSvgIcon.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/ServerStyleSheets/ServerStyleSheets.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/ServerStyleSheets/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/StylesProvider/StylesProvider.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/StylesProvider/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/ThemeProvider/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/ThemeProvider/nested.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/createGenerateClassName/createGenerateClassName.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/createGenerateClassName/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/createStyles/createStyles.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/createStyles/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/getStylesCreator/getStylesCreator.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/getStylesCreator/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/getStylesCreator/noopTheme.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/getThemeProps/getThemeProps.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/getThemeProps/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/jssPreset/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/jssPreset/jssPreset.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/makeStyles/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/makeStyles/indexCounter.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/makeStyles/multiKeyStore.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/mergeClasses/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/mergeClasses/mergeClasses.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/styled/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/styled/styled.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/useTheme/ThemeContext.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/useTheme/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/useTheme/useTheme.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/withStyles/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/withStyles/withStyles.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/withTheme/index.js":
false,

/***/ "./node_modules/@material-ui/styles/esm/withTheme/withTheme.js":
false,

/***/ "./node_modules/@material-ui/system/esm/borders.js":
false,

/***/ "./node_modules/@material-ui/system/esm/breakpoints.js":
false,

/***/ "./node_modules/@material-ui/system/esm/compose.js":
false,

/***/ "./node_modules/@material-ui/system/esm/css.js":
false,

/***/ "./node_modules/@material-ui/system/esm/display.js":
false,

/***/ "./node_modules/@material-ui/system/esm/flexbox.js":
false,

/***/ "./node_modules/@material-ui/system/esm/grid.js":
false,

/***/ "./node_modules/@material-ui/system/esm/index.js":
false,

/***/ "./node_modules/@material-ui/system/esm/memoize.js":
false,

/***/ "./node_modules/@material-ui/system/esm/merge.js":
false,

/***/ "./node_modules/@material-ui/system/esm/palette.js":
false,

/***/ "./node_modules/@material-ui/system/esm/positions.js":
false,

/***/ "./node_modules/@material-ui/system/esm/responsivePropType.js":
false,

/***/ "./node_modules/@material-ui/system/esm/shadows.js":
false,

/***/ "./node_modules/@material-ui/system/esm/sizing.js":
false,

/***/ "./node_modules/@material-ui/system/esm/spacing.js":
false,

/***/ "./node_modules/@material-ui/system/esm/style.js":
false,

/***/ "./node_modules/@material-ui/system/esm/typography.js":
false,

/***/ "./node_modules/@material-ui/utils/esm/HTMLElementType.js":
false,

/***/ "./node_modules/@material-ui/utils/esm/chainPropTypes.js":
false,

/***/ "./node_modules/@material-ui/utils/esm/deepmerge.js":
false,

/***/ "./node_modules/@material-ui/utils/esm/elementAcceptingRef.js":
false,

/***/ "./node_modules/@material-ui/utils/esm/elementTypeAcceptingRef.js":
false,

/***/ "./node_modules/@material-ui/utils/esm/exactProp.js":
false,

/***/ "./node_modules/@material-ui/utils/esm/formatMuiErrorMessage.js":
false,

/***/ "./node_modules/@material-ui/utils/esm/getDisplayName.js":
false,

/***/ "./node_modules/@material-ui/utils/esm/index.js":
false,

/***/ "./node_modules/@material-ui/utils/esm/ponyfillGlobal.js":
false,

/***/ "./node_modules/@material-ui/utils/esm/refType.js":
false,

/***/ "./node_modules/clsx/dist/clsx.m.js":
false,

/***/ "./node_modules/css-vendor/dist/css-vendor.esm.js":
false,

/***/ "./node_modules/dom-helpers/esm/addClass.js":
false,

/***/ "./node_modules/dom-helpers/esm/hasClass.js":
false,

/***/ "./node_modules/dom-helpers/esm/removeClass.js":
false,

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
false,

/***/ "./node_modules/hyphenate-style-name/index.js":
false,

/***/ "./node_modules/is-in-browser/dist/module.js":
false,

/***/ "./node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js":
false,

/***/ "./node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js":
false,

/***/ "./node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js":
false,

/***/ "./node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js":
false,

/***/ "./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js":
false,

/***/ "./node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js":
false,

/***/ "./node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js":
false,

/***/ "./node_modules/jss/dist/jss.esm.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/react-dom/cjs/react-dom.development.js":
false,

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-is/index.js":
false,

/***/ "./node_modules/react-transition-group/esm/CSSTransition.js":
false,

/***/ "./node_modules/react-transition-group/esm/ReplaceTransition.js":
false,

/***/ "./node_modules/react-transition-group/esm/SwitchTransition.js":
false,

/***/ "./node_modules/react-transition-group/esm/Transition.js":
false,

/***/ "./node_modules/react-transition-group/esm/TransitionGroup.js":
false,

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
false,

/***/ "./node_modules/react-transition-group/esm/config.js":
false,

/***/ "./node_modules/react-transition-group/esm/index.js":
false,

/***/ "./node_modules/react-transition-group/esm/utils/ChildMapping.js":
false,

/***/ "./node_modules/react-transition-group/esm/utils/PropTypes.js":
false,

/***/ "./node_modules/scheduler/cjs/scheduler-tracing.development.js":
false,

/***/ "./node_modules/scheduler/cjs/scheduler.development.js":
false,

/***/ "./node_modules/scheduler/index.js":
false,

/***/ "./node_modules/scheduler/tracing.js":
false,

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
false,

/***/ "./pages/Test/index.js":
/*!*****************************!*\
  !*** ./pages/Test/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component_Public_Carousel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/Public/Carousel.js */ \"./component/Public/Carousel.js\");\n/* harmony import */ var _component_Public_Carousel_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_component_Public_Carousel_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_process01_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/process01.png */ \"./public/process01.png\");\n/* harmony import */ var _public_process01_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_process01_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_process02_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/process02.png */ \"./public/process02.png\");\n/* harmony import */ var _public_process02_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_process02_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_process03_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/process03.png */ \"./public/process03.png\");\n/* harmony import */ var _public_process03_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_process03_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_3_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/3.jpeg */ \"./public/3.jpeg\");\n/* harmony import */ var _public_3_jpeg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_3_jpeg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_4_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/4.jpeg */ \"./public/4.jpeg\");\n/* harmony import */ var _public_4_jpeg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_4_jpeg__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/wangweian/Desktop/saliejung-portfolio/pages/Test/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar Test = function Test() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }, \"Carousel\"), __jsx(_component_Public_Carousel_js__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    imgsrc: [_public_process01_png__WEBPACK_IMPORTED_MODULE_2___default.a, _public_process02_png__WEBPACK_IMPORTED_MODULE_3___default.a, _public_process03_png__WEBPACK_IMPORTED_MODULE_4___default.a, _public_3_jpeg__WEBPACK_IMPORTED_MODULE_5___default.a, _public_4_jpeg__WEBPACK_IMPORTED_MODULE_6___default.a],\n    rotateBy: 2,\n    width: '600px',\n    height: '500px',\n    navigateButton: true,\n    controlButton: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }));\n};\n\n_c = Test;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Test);\n\nvar _c;\n\n$RefreshReg$(_c, \"Test\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVGVzdC9pbmRleC5qcz8wYzRhIl0sIm5hbWVzIjpbIlRlc3QiLCJwcm9jZXNzMDEiLCJwcm9jZXNzMDIiLCJwcm9jZXNzMDMiLCJwaG90bzMiLCJwaG90bzQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDZixTQUNJLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBRUksTUFBQyxvRUFBRDtBQUNJLFVBQU0sRUFBRSxDQUFDQyw0REFBRCxFQUFZQyw0REFBWixFQUF1QkMsNERBQXZCLEVBQWtDQyxxREFBbEMsRUFBMENDLHFEQUExQyxDQURaO0FBRUksWUFBUSxFQUFFLENBRmQ7QUFHSSxTQUFLLEVBQUUsT0FIWDtBQUlJLFVBQU0sRUFBRSxPQUpaO0FBS0ksa0JBQWMsRUFBRSxJQUxwQjtBQU1JLGlCQUFhLEVBQUUsSUFObkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREo7QUFhSCxDQWREOztLQUFNTCxJO0FBZ0JTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL1Rlc3QvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi4vLi4vY29tcG9uZW50L1B1YmxpYy9DYXJvdXNlbC5qcyc7XG5pbXBvcnQgcHJvY2VzczAxIGZyb20gJy4uLy4uL3B1YmxpYy9wcm9jZXNzMDEucG5nJztcbmltcG9ydCBwcm9jZXNzMDIgZnJvbSAnLi4vLi4vcHVibGljL3Byb2Nlc3MwMi5wbmcnO1xuaW1wb3J0IHByb2Nlc3MwMyBmcm9tICcuLi8uLi9wdWJsaWMvcHJvY2VzczAzLnBuZyc7XG5pbXBvcnQgcGhvdG8zIGZyb20gJy4uLy4uL3B1YmxpYy8zLmpwZWcnO1xuaW1wb3J0IHBob3RvNCBmcm9tICcuLi8uLi9wdWJsaWMvNC5qcGVnJztcblxuY29uc3QgVGVzdCA9ICgpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxkaXY+Q2Fyb3VzZWw8L2Rpdj5cbiAgICAgICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgICAgICAgIGltZ3NyYz17W3Byb2Nlc3MwMSwgcHJvY2VzczAyLCBwcm9jZXNzMDMsIHBob3RvMywgcGhvdG80XX1cbiAgICAgICAgICAgICAgICByb3RhdGVCeT17Mn1cbiAgICAgICAgICAgICAgICB3aWR0aD17JzYwMHB4J31cbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyc1MDBweCd9XG4gICAgICAgICAgICAgICAgbmF2aWdhdGVCdXR0b249e3RydWV9XG4gICAgICAgICAgICAgICAgY29udHJvbEJ1dHRvbj17dHJ1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXN0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Test/index.js\n");

/***/ })

})