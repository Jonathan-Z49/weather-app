/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/modern-normalize/modern-normalize.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/modern-normalize/modern-normalize.css ***!
  \*****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n/*\nDocument\n========\n*/\n/**\nUse a better box model (opinionated).\n*/\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\nhtml {\n  -moz-tab-size: 4;\n  tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n/**\nRemove the margin in all browsers.\n*/\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\nbody {\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\";\n}\n\n/*\nGrouping content\n================\n*/\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr[title] {\n  text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Consolas, \"Liberation Mono\", Menlo, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n  display: list-item;\n}", "",{"version":3,"sources":["webpack://./node_modules/modern-normalize/modern-normalize.css"],"names":[],"mappings":"AAAA,8FAAA;AAEA;;;CAAA;AAKA;;CAAA;AAIA;;;EAGC,sBAAA;AAFD;;AAKA;;CAAA;AAIA;EACC,gBAAA;EACA,WAAA;AAHD;;AAMA;;;CAAA;AAKA;EACC,iBAAA,EAAA,MAAA;EACA,8BAAA,EAAA,MAAA;AAJD;;AAOA;;;CAAA;AAKA;;CAAA;AAIA;EACC,SAAA;AAND;;AASA;;CAAA;AAIA;EACC,8HACC;AARF;;AAmBA;;;CAAA;AAKA;;;CAAA;AAKA;EACC,SAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;AAlBD;;AAqBA;;;CAAA;AAKA;;CAAA;AAIA;EACC,iCAAA;AApBD;;AAuBA;;CAAA;AAIA;;EAEC,mBAAA;AArBD;;AAwBA;;;CAAA;AAKA;;;;EAIC,wFACC,EAKW,MAAA;EACZ,cAAA,EAAA,MAAA;AA5BD;;AA+BA;;CAAA;AAIA;EACC,cAAA;AA7BD;;AAgCA;;CAAA;AAIA;;EAEC,cAAA;EACA,cAAA;EACA,kBAAA;EACA,wBAAA;AA9BD;;AAiCA;EACC,eAAA;AA9BD;;AAiCA;EACC,WAAA;AA9BD;;AAiCA;;;CAAA;AAKA;;;CAAA;AAKA;EACC,cAAA,EAAA,MAAA;EACA,qBAAA,EAAA,MAAA;AAhCD;;AAmCA;;;CAAA;AAKA;;;CAAA;AAKA;;;;;EAKC,oBAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;EACA,SAAA,EAAA,MAAA;AAlCD;;AAqCA;;;CAAA;AAKA;SACS,MAAA;EACR,oBAAA;AAnCD;;AAsCA;;CAAA;AAIA;;;;EAIC,0BAAA;AApCD;;AAuCA;;CAAA;AAIA;EACC,kBAAA;EACA,UAAA;AArCD;;AAwCA;;CAAA;AAIA;EACC,8BAAA;AAtCD;;AAyCA;;;CAAA;AAKA;EACC,gBAAA;AAvCD;;AA0CA;;CAAA;AAIA;EACC,UAAA;AAxCD;;AA2CA;;CAAA;AAIA;EACC,wBAAA;AAzCD;;AA4CA;;CAAA;AAIA;;EAEC,YAAA;AA1CD;;AA6CA;;;CAAA;AAKA;EACC,6BAAA,EAAA,MAAA;EACA,oBAAA,EAAA,MAAA;AA3CD;;AA8CA;;CAAA;AAIA;EACC,wBAAA;AA5CD;;AA+CA;;;CAAA;AAKA;EACC,0BAAA,EAAA,MAAA;EACA,aAAA,EAAA,MAAA;AA7CD;;AAgDA;;;CAAA;AAKA;;CAAA;AAIA;EACC,kBAAA;AA/CD","sourcesContent":["/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\ttab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "p {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  height: 100vh;\n  background-color: gainsboro;\n}\n\n#head {\n  width: 100%;\n  min-height: 75px;\n  background-color: orangered;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);\n}\n#head #searchTextField {\n  border-radius: 10px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  width: 400px;\n  height: 30px;\n  padding: 0.3rem 0 0.3rem 1rem;\n  z-index: 2;\n  border: none;\n  outline: none;\n  margin-left: 4rem;\n  -webkit-box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);\n}\n#head #searchTextField:focus {\n  border: 1px solid black;\n}\n#head #searchTextField:hover {\n  background-image: -o-linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(0, 0, 0, 0.1)));\n  background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\n}\n#head #searchTextField:focus {\n  background-image: -o-linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(0, 0, 0, 0.1)));\n  background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\n}\n#head #searchPlace {\n  cursor: pointer;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  height: 30px;\n  position: relative;\n  border: none;\n  color: white;\n  background-color: rgb(141, 0, 0);\n  -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);\n  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);\n}\n#head #searchPlace:hover {\n  background-image: -o-linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(0, 0, 0, 0.1)));\n  background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\n}\n#head #searchPlace:focus {\n  background-image: -o-linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(0, 0, 0, 0.1)));\n  background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\n}\n\n#foot {\n  background-color: #4e4d4a;\n  margin-top: auto;\n  width: 100%;\n  height: 55px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  gap: 2rem;\n}\n#foot img {\n  padding: 0;\n  margin: 0;\n}\n#foot #opw {\n  height: 48px;\n}\n\n.unit {\n  cursor: pointer;\n  background-color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  border: 1px solid black;\n  margin-left: auto;\n  margin-right: 30%;\n  min-width: 100px;\n  min-height: 30px;\n  border-radius: 100vmax;\n  border: none;\n  -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);\n  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);\n}\n.unit:hover {\n  background-image: -o-linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(0, 0, 0, 0.1)));\n  background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\n}\n.unit:focus {\n  background-image: -o-linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(0, 0, 0, 0.1)));\n  background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\n}\n.unit span.active {\n  font-weight: bold;\n}\n\n#weather-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 2rem 2rem 1rem 2rem;\n  overflow-y: scroll;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  gap: 3rem;\n  /* ===== Scrollbar CSS ===== */\n  /* Firefox */\n  /* Chrome, Edge, and Safari */\n}\n#weather-container {\n  scrollbar-width: none;\n  scrollbar-color: #000000 #ffffff;\n}\n#weather-container::-webkit-scrollbar {\n  width: 10px;\n}\n#weather-container::-webkit-scrollbar-track {\n  background: gainsboro;\n}\n#weather-container::-webkit-scrollbar-thumb {\n  background-color: #000000;\n  border-radius: 10px;\n  border: 1px solid black;\n}\n#weather-container .weather__daily {\n  margin: 0;\n  background-color: #9ca3af;\n  height: 300px;\n  width: 300px;\n  border-top-right-radius: 30px;\n  border-bottom-right-radius: 30px;\n  border: none;\n  border-left: solid 6px orange;\n  -webkit-box-shadow: 0 0px 20px rgba(0, 0, 0, 0.1);\n  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.1);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-transition: 200ms -webkit-transform;\n  transition: 200ms -webkit-transform;\n  -o-transition: 200ms transform;\n  transition: 200ms transform;\n  transition: 200ms transform, 200ms -webkit-transform;\n}\n#weather-container .weather__daily:hover {\n  -webkit-transform: scale(1.05);\n  -ms-transform: scale(1.05);\n  transform: scale(1.05);\n}\n#weather-container .weather__daily img {\n  max-width: 125px;\n  max-height: 125px;\n}\n#weather-container .weather__daily .location {\n  padding: 0;\n  margin: 0;\n  max-width: 95%;\n  max-height: 60px;\n  font-weight: bold;\n  font-size: 1.35rem;\n}\n#weather-container .weather__daily .daily {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-right: auto;\n  gap: 1rem;\n}\n#weather-container .weather__daily .description {\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n#weather-container .weather__daily .daily-temp {\n  padding: 0;\n  margin: 0;\n  width: 110px;\n  height: 110px;\n  font-size: 5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n#weather-container .weather__daily--details {\n  height: 300px;\n  width: 600px;\n  background-color: #9ca3af;\n  padding: 1rem;\n  border: none;\n  border-radius: 15px;\n  -webkit-box-shadow: 0 0px 20px rgba(0, 0, 0, 0.1);\n  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.1);\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  -webkit-transition: 200ms -webkit-transform;\n  transition: 200ms -webkit-transform;\n  -o-transition: 200ms transform;\n  transition: 200ms transform;\n  transition: 200ms transform, 200ms -webkit-transform;\n}\n#weather-container .weather__daily--details:hover {\n  -webkit-transform: scale(1.05);\n  -ms-transform: scale(1.05);\n  transform: scale(1.05);\n}\n#weather-container .weather__daily--details div {\n  font-size: 1.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  gap: 0.5rem;\n}\n#weather-container .weather__daily--details div p:nth-child(1) {\n  color: rgb(71, 71, 71);\n  font-weight: bold;\n  font-size: 1rem;\n  opacity: 0.75;\n}\n#weather-container .weather__forecast {\n  height: 170px;\n  width: 800px;\n  border: none;\n  border-radius: 15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  gap: 4px;\n}\n#weather-container .weather__forecast .forecast--details {\n  -webkit-box-shadow: 0 0px 20px rgba(0, 0, 0, 0.1);\n  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.1);\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  background-color: #9ca3af;\n  border-radius: 10px;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 0px;\n  flex: 1 1 0;\n  width: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-transition: 200ms -webkit-transform;\n  transition: 200ms -webkit-transform;\n  -o-transition: 200ms transform;\n  transition: 200ms transform;\n  transition: 200ms transform, 200ms -webkit-transform;\n}\n#weather-container .weather__forecast .forecast--details:hover {\n  -webkit-transform: scale(1.05);\n  -ms-transform: scale(1.05);\n  transform: scale(1.05);\n}\n#weather-container .weather__forecast .forecast--details img {\n  max-width: 100px;\n  max-height: 100px;\n}\n#weather-container .weather__forecast .forecast--details .day-val {\n  font-weight: bold;\n  font-size: 1.35rem;\n}\n#weather-container .weather__forecast .forecast--details .val-temp {\n  font-size: 1.5rem;\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["@mixin hoverFocus {\r\n  &:hover {\r\n    background-image: -o-linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\r\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(0, 0, 0, 0.1)));\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\r\n  }\r\n  &:focus {\r\n    background-image: -o-linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\r\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(0, 0, 0, 0.1)));\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\r\n  }\r\n}\r\np {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    height: 100vh;\r\n    background-color: gainsboro;\r\n}\r\n\r\n#head {\r\n  width: 100%;\r\n  min-height: 75px;\r\n  background-color: orangered;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);\r\n          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);\r\n  #searchTextField {\r\n    border-radius: 10px;\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n    width: 400px;\r\n    height: 30px;\r\n    padding: 0.3rem 0 0.3rem 1rem;\r\n    z-index: 2;\r\n    border: none;\r\n    outline: none;\r\n    margin-left: 4rem;\r\n    -webkit-box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);\r\n            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);\r\n    &:focus {\r\n      border: 1px solid black;\r\n    }\r\n    @include hoverFocus();\r\n  }\r\n  #searchPlace {\r\n    cursor: pointer;\r\n    border-top-right-radius: 10px;\r\n    border-bottom-right-radius: 10px;\r\n    height: 30px;\r\n    position: relative;\r\n    border: none;\r\n    color: white;\r\n    background-color: rgb(141, 0, 0);\r\n    -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);\r\n            box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);\r\n    @include hoverFocus();\r\n  }\r\n}\r\n\r\n#foot {\r\n  background-color: #4e4d4a;\r\n  margin-top: auto;\r\n  width: 100%;\r\n  height: 55px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  gap: 2rem;\r\n  img {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  #opw {\r\n    height: 48px;\r\n  }\r\n}\r\n\r\n.unit {\r\n    cursor: pointer;\r\n    background-color: white;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    border: 1px solid black;\r\n    margin-left: auto;\r\n    margin-right: 30%;\r\n    min-width: 100px;\r\n    min-height: 30px;\r\n    border-radius: 100vmax;\r\n    border: none;\r\n    -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);\r\n            box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);\r\n    @include hoverFocus();\r\n    span.active {\r\n      font-weight: bold;\r\n    }\r\n}\r\n\r\n#weather-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding: 2rem 2rem 1rem 2rem;\r\n    overflow-y: scroll;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    gap: 3rem;\r\n    /* ===== Scrollbar CSS ===== */\r\n  /* Firefox */\r\n  & {\r\n    scrollbar-width: none;\r\n    scrollbar-color: #000000 #ffffff;\r\n  }\r\n\r\n  /* Chrome, Edge, and Safari */\r\n  &::-webkit-scrollbar {\r\n    width: 10px;\r\n  }\r\n\r\n  &::-webkit-scrollbar-track {\r\n    background: gainsboro;\r\n  }\r\n\r\n  &::-webkit-scrollbar-thumb {\r\n    background-color: #000000;\r\n    border-radius: 10px;\r\n    border: 1px solid black;\r\n  }\r\n\r\n  .weather__daily {\r\n    margin: 0;\r\n    background-color: #9ca3af;\r\n    height: 300px;\r\n    width: 300px;\r\n    border-top-right-radius: 30px;\r\n    border-bottom-right-radius: 30px;\r\n    border: none;\r\n    border-left: solid 6px orange;\r\n    -webkit-box-shadow: 0 0px 20px rgba(0, 0, 0, 0.1);\r\n            box-shadow: 0 0px 20px rgba(0, 0, 0, 0.1);\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-transition: 200ms -webkit-transform;\r\n    transition: 200ms -webkit-transform;\r\n    -o-transition: 200ms transform;\r\n    transition: 200ms transform;\r\n    transition: 200ms transform, 200ms -webkit-transform;\r\n    &:hover {\r\n      -webkit-transform: scale(1.05);\r\n          -ms-transform: scale(1.05);\r\n              transform: scale(1.05);\r\n    }\r\n    img {\r\n      max-width: 125px;\r\n      max-height: 125px;\r\n    }\r\n\r\n    .location {\r\n      padding: 0;\r\n      margin: 0;\r\n      max-width: 95%;\r\n      max-height: 60px;\r\n      font-weight: bold;\r\n      font-size: 1.35rem;\r\n    }\r\n\r\n    .daily {\r\n      display: -webkit-box;\r\n      display: -ms-flexbox;\r\n      display: flex;\r\n      margin-right: auto;\r\n      gap: 1rem;\r\n    }\r\n\r\n    .description {\r\n      font-size: 1.2rem;\r\n      font-weight: 500;\r\n    }\r\n\r\n    .daily-temp {\r\n      padding: 0;\r\n      margin: 0;\r\n      width: 110px;\r\n      height: 110px;\r\n      font-size: 5rem;\r\n      display: -webkit-box;\r\n      display: -ms-flexbox;\r\n      display: flex;\r\n      -webkit-box-pack: center;\r\n          -ms-flex-pack: center;\r\n              justify-content: center;\r\n      -webkit-box-align: center;\r\n          -ms-flex-align: center;\r\n              align-items: center;\r\n    }\r\n\r\n  }\r\n\r\n  .weather__daily--details {\r\n    height: 300px;\r\n    width: 600px;\r\n    background-color: #9ca3af;\r\n    padding: 1rem;\r\n    border: none;\r\n    border-radius: 15px;\r\n    -webkit-box-shadow: 0 0px 20px rgba(0, 0, 0, 0.1);\r\n            box-shadow: 0 0px 20px rgba(0, 0, 0, 0.1);\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    grid-template-rows: repeat(2, 1fr);\r\n    -webkit-transition: 200ms -webkit-transform;\r\n    transition: 200ms -webkit-transform;\r\n    -o-transition: 200ms transform;\r\n    transition: 200ms transform;\r\n    transition: 200ms transform, 200ms -webkit-transform;\r\n    &:hover {\r\n      -webkit-transform: scale(1.05);\r\n          -ms-transform: scale(1.05);\r\n              transform: scale(1.05);\r\n    }\r\n    div {\r\n      font-size: 1.5rem;\r\n      display: -webkit-box;\r\n      display: -ms-flexbox;\r\n      display: flex;\r\n      -webkit-box-orient: vertical;\r\n      -webkit-box-direction: normal;\r\n          -ms-flex-direction: column;\r\n              flex-direction: column;\r\n      -webkit-box-pack: center;\r\n          -ms-flex-pack: center;\r\n              justify-content: center;\r\n      -webkit-box-align: center;\r\n          -ms-flex-align: center;\r\n              align-items: center;\r\n      gap: .5rem;\r\n      p:nth-child(1) {\r\n        color: rgb(71, 71, 71);\r\n        font-weight: bold;\r\n        font-size: 1rem;\r\n        opacity: .75;\r\n      }\r\n    }\r\n  }\r\n\r\n  .weather__forecast {\r\n    height: 170px;\r\n    width: 800px;\r\n    border: none;\r\n    border-radius: 15px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    gap: 4px;\r\n    .forecast--details {\r\n      -webkit-box-shadow: 0 0px 20px rgba(0, 0, 0, 0.1);\r\n              box-shadow: 0 0px 20px rgba(0, 0, 0, 0.1);\r\n      padding-top: .5rem;\r\n      padding-bottom: .5rem;\r\n      background-color: #9ca3af;\r\n      border-radius: 10px;\r\n      -webkit-box-flex: 1;\r\n          -ms-flex: 1 1 0px;\r\n              flex: 1 1 0;\r\n      width: 0;\r\n      display: -webkit-box;\r\n      display: -ms-flexbox;\r\n      display: flex;\r\n      -webkit-box-orient: vertical;\r\n      -webkit-box-direction: normal;\r\n          -ms-flex-direction: column;\r\n              flex-direction: column;\r\n      -webkit-box-pack: center;\r\n          -ms-flex-pack: center;\r\n              justify-content: center;\r\n      -webkit-box-align: center;\r\n          -ms-flex-align: center;\r\n              align-items: center;\r\n      -webkit-transition: 200ms -webkit-transform;\r\n      transition: 200ms -webkit-transform;\r\n      -o-transition: 200ms transform;\r\n      transition: 200ms transform;\r\n      transition: 200ms transform, 200ms -webkit-transform;\r\n    &:hover {\r\n      -webkit-transform: scale(1.05);\r\n          -ms-transform: scale(1.05);\r\n              transform: scale(1.05);\r\n    }\r\n      img {\r\n        max-width: 100px;\r\n        max-height: 100px;\r\n      }\r\n      .day-val {\r\n        font-weight: bold;\r\n        font-size: 1.35rem;\r\n      }\r\n      .val-temp {\r\n        font-size: 1.5rem;\r\n      }\r\n    }\r\n  }\r\n    \r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/modern-normalize/modern-normalize.css":
/*!************************************************************!*\
  !*** ./node_modules/modern-normalize/modern-normalize.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_sass_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!../sass-loader/dist/cjs.js!./modern-normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/modern-normalize/modern-normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_sass_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_sass_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_sass_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_sass_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/autocomplete.js":
/*!********************************!*\
  !*** ./src/js/autocomplete.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.js */ "./src/js/weather.js");


function initialize() {
  const searchButton = document.getElementById('searchPlace');

  const input = document.getElementById('searchTextField');
  input.addEventListener('click', () => { input.value = ''; });

  const autocomplete = new google.maps.places.Autocomplete(input);

  searchButton.addEventListener('click', () => {
    input.focus();
    let place = autocomplete.getPlace();
    if (!place || input.value === '') {
      input.value = '';
      place = undefined;
    } else {
      const latVal = place.geometry.location.lat();
      const lonVal = place.geometry.location.lng();
      (0,_weather_js__WEBPACK_IMPORTED_MODULE_0__["default"])(latVal, lonVal, place.formatted_address);
    }
  });
  (0,_weather_js__WEBPACK_IMPORTED_MODULE_0__["default"])(51.5072178, -0.1275862, 'London, UK');
}


/***/ }),

/***/ "./src/js/display.js":
/*!***************************!*\
  !*** ./src/js/display.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createWeatherWidgets)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/js/utility.js");


const tempUnitsCont = document.querySelector('.unit');
let unitTemp = 'C';
tempUnitsCont.addEventListener('click', () => {
  const celsius = document.querySelector('.celsius');
  const fahrenheit = document.querySelector('.fahrenheit');
  const allTemps = document.querySelectorAll('.val-temp');

  celsius.classList.toggle('active');
  fahrenheit.classList.toggle('active');

  if (allTemps.length > 0) {
    _utility__WEBPACK_IMPORTED_MODULE_0__.updateTempDOM(allTemps, unitTemp);
  }
  unitTemp = fahrenheit.classList.contains('active') ? 'F' : 'C';
});

function createWeatherWidgets(daily, forecast, place) {
  const location = document.querySelector('.location');
  const dailyCont = document.querySelector('.daily');
  const description = document.querySelector('.description');
  const dailyDetails = document.querySelector('.weather__daily--details');
  const forecastDOM = document.querySelector('.weather__forecast');

  location.replaceChildren();
  dailyCont.replaceChildren();

  const placeName = document.createElement('p');
  placeName.innerText = place;

  location.appendChild(placeName);

  const weatherConditionImg = document.createElement('img');
  weatherConditionImg.src = `http://openweathermap.org/img/wn/${daily.weather[0].icon}@4x.png`;

  const dailytemp = document.createElement('p');
  dailytemp.classList.add('daily-temp', 'val-temp');
  dailytemp.innerText = `${_utility__WEBPACK_IMPORTED_MODULE_0__.kelvinToTemp(daily.main.temp, unitTemp)}°`;

  dailyCont.append(weatherConditionImg, dailytemp);
  description.innerText = '';

  description.innerText = daily.weather[0].description.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

  dailyDetails.innerHTML = '';
  dailyDetails.innerHTML = `<div class="feeltemp">
                            <p>Feels like:</p>
                              <p class="val-temp">${_utility__WEBPACK_IMPORTED_MODULE_0__.kelvinToTemp(daily.main.feels_like, unitTemp)}°</p>
                            </div>
                            <div class="temp-min">
                              <p>Minimum:</p>
                              <p class="val-temp">${_utility__WEBPACK_IMPORTED_MODULE_0__.kelvinToTemp(daily.main.temp_min, unitTemp)}°</p>
                            </div>
                            <div class="temp-max">
                              <p>Maximum:</p>
                              <p class="val-temp">${_utility__WEBPACK_IMPORTED_MODULE_0__.kelvinToTemp(daily.main.temp_max, unitTemp)}°</p>
                            </div>
                            <div class="pressure">
                              <p>Pressure:</p>
                              <p>${daily.main.pressure} hPa</p>
                            </div>
                            <div class="humidity">
                              <p>Humidity:</p>
                              <p>${daily.main.humidity}%</p>
                            </div>
                            <div class="wind">
                              <p>Wind Speed:</p>
                              <p>${daily.wind.speed} m/s</p>
                            </div>`;
  const forecastData = _utility__WEBPACK_IMPORTED_MODULE_0__.formatForecastData(forecast);
  forecastDOM.replaceChildren();
  forecastData.forEach((element) => {
    const forecastHTML = `<div class="forecast--details">
    <p class="day-val">${element.date}</p>
    <img src="http://openweathermap.org/img/wn/${element.icons}@4x.png" alt="">
    <p class="val-temp">${_utility__WEBPACK_IMPORTED_MODULE_0__.kelvinToTemp(element.temp, unitTemp)}°</p>
  </div>`;
    forecastDOM.insertAdjacentHTML('beforeend', forecastHTML);
  });
}


/***/ }),

/***/ "./src/js/utility.js":
/*!***************************!*\
  !*** ./src/js/utility.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertTemp": () => (/* binding */ convertTemp),
/* harmony export */   "dateToWeekday": () => (/* binding */ dateToWeekday),
/* harmony export */   "forecastDataAverage": () => (/* binding */ forecastDataAverage),
/* harmony export */   "formatForecastData": () => (/* binding */ formatForecastData),
/* harmony export */   "kelvinToTemp": () => (/* binding */ kelvinToTemp),
/* harmony export */   "maxOccurence": () => (/* binding */ maxOccurence),
/* harmony export */   "updateTempDOM": () => (/* binding */ updateTempDOM)
/* harmony export */ });
function kelvinToTemp(temp, units) {
  // eslint-disable-next-line no-bitwise
  if (units === 'C') {
    // eslint-disable-next-line no-bitwise
    return Math.round((temp - 273.15)) | 0;
  }
  // eslint-disable-next-line no-bitwise
  return Math.round((((temp - 273.15) * 9) / 5) + 32) | 0;
}

function convertTemp(temp, units) {
  if (units === 'C') {
    return kelvinToTemp(temp + 273.15, 'F');
  }
  const tempKelvin = (((temp - 32) * 5) / 9) + 273.15;
  return kelvinToTemp(tempKelvin, 'C');
}

function updateTempDOM(arr, units) {
  arr.forEach((iterator) => {
    const s = iterator.innerText.slice(0, -1);
    iterator.innerText = `${convertTemp(parseInt(s, 10), units)}°`;
  });
}

function formatForecastData(forecast) {
  let currentDate = forecast.list[0].dt_txt.slice(0, -9);
  const day = {
    date: currentDate,
    temp: 0,
    icons: [],
    description: [],
  };
  let dayClone = structuredClone(day);
  const newData = [];
  forecast.list.forEach((data) => {
    if (data.dt_txt.slice(0, -9) === currentDate) {
      dayClone.date = data.dt_txt.slice(0, -9);
      dayClone.temp += data.main.temp;
      dayClone.icons.push(data.weather[0].icon);
      dayClone.description.push(data.weather[0].description);
    } else if (data.dt_txt.slice(0, -9) !== currentDate) {
      forecastDataAverage(dayClone);
      newData.push(dayClone);
      dayClone = structuredClone(day);
      dayClone.date = data.dt_txt.slice(0, -9);
      dayClone.temp += data.main.temp;
      dayClone.icons.push(data.weather[0].icon);
      dayClone.description.push(data.weather[0].description);
      currentDate = data.dt_txt.slice(0, -9);
    }
  });

  return newData;
}

function forecastDataAverage(obj) {
  obj.temp /= obj.icons.length;
  obj.icons = maxOccurence(obj.icons);
  obj.date = dateToWeekday(obj.date);
  obj.description = maxOccurence(obj.description);
}

function maxOccurence(arr) {
  const counts = {};
  let maxCount = 0;
  let maxKey;
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    // eslint-disable-next-line no-multi-assign
    const count = (counts[key] = (counts[key] || 0) + 1);
    if (count > maxCount) {
      maxCount = count;
      maxKey = key;
    }
  }
  return maxKey;
}

function dateToWeekday(date) {
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const today = new Date(date);
  return weekdays[today.getDay()];
}


/***/ }),

/***/ "./src/js/weather.js":
/*!***************************!*\
  !*** ./src/js/weather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeather)
/* harmony export */ });
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/js/display.js");


async function getWeather(lat, lon, place) {
  try {
    const responseDaily = await fetch(`https://api.openweathermap.org/data/2.5/weather?&lat=${lat.toString()}&lon=${lon.toString()}&appid=${'f152e0b03af8ce0e123e26e8484591e8'}`);
    const objDaily = await responseDaily.json();
    const responseForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?&lat=${lat.toString()}&lon=${lon.toString()}&appid=${'f152e0b03af8ce0e123e26e8484591e8'}`);
    const objForecast = await responseForecast.json();
    (0,_display__WEBPACK_IMPORTED_MODULE_0__["default"])(objDaily, objForecast, place);
  } catch (error) {
    console.log(error);
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var modern_normalize_modern_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modern-normalize/modern-normalize.css */ "./node_modules/modern-normalize/modern-normalize.css");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.scss */ "./src/styles.scss");
/* harmony import */ var _autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autocomplete */ "./src/js/autocomplete.js");
// eslint-disable-next-line import/no-extraneous-dependencies




window.addEventListener('load', _autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxzRUFBc0Usc0JBQXNCLEdBQUcsT0FBTyxrRkFBa0YsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyw0Q0FBNEMsZUFBZSxxRUFBcUUsNkdBQTZHLGtFQUFrRSxPQUFPLGVBQWUscUVBQXFFLDZHQUE2RyxrRUFBa0Us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WkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDK0M7QUFDdkI7QUFDZ0I7QUFDeEM7QUFDQSxnQ0FBZ0MscURBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvbW9kZXJuLW5vcm1hbGl6ZS9tb2Rlcm4tbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXdlYnBhY2svLi9zcmMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvbW9kZXJuLW5vcm1hbGl6ZS9tb2Rlcm4tbm9ybWFsaXplLmNzcz8yYzE0Iiwid2VicGFjazovL3dlYXRoZXItd2VicGFjay8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovL3dlYXRoZXItd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci13ZWJwYWNrLy4vc3JjL2pzL2F1dG9jb21wbGV0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXdlYnBhY2svLi9zcmMvanMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXdlYnBhY2svLi9zcmMvanMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXdlYnBhY2svLi9zcmMvanMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLXdlYnBhY2svLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG1vZGVybi1ub3JtYWxpemUgdjEuMS4wIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUgKi9cXG4vKlxcbkRvY3VtZW50XFxuPT09PT09PT1cXG4qL1xcbi8qKlxcblVzZSBhIGJldHRlciBib3ggbW9kZWwgKG9waW5pb25hdGVkKS5cXG4qL1xcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKipcXG5Vc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplIChvcGluaW9uYXRlZCkuXFxuKi9cXG5odG1sIHtcXG4gIC1tb3otdGFiLXNpemU6IDQ7XFxuICB0YWItc2l6ZTogNDtcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiovXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2VjdGlvbnNcXG49PT09PT09PVxcbiovXFxuLyoqXFxuUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbkltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXFxuKi9cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIjtcXG59XFxuXFxuLypcXG5Hcm91cGluZyBjb250ZW50XFxuPT09PT09PT09PT09PT09PVxcbiovXFxuLyoqXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcbiovXFxuaHIge1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblRleHQtbGV2ZWwgc2VtYW50aWNzXFxuPT09PT09PT09PT09PT09PT09PT1cXG4qL1xcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuYWJiclt0aXRsZV0ge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuMS4gSW1wcm92ZSBjb25zaXN0ZW5jeSBvZiBkZWZhdWx0IGZvbnRzIGluIGFsbCBicm93c2Vycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZS9pc3N1ZXMvMylcXG4yLiBDb3JyZWN0IHRoZSBvZGQgJ2VtJyBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBNZW5sbywgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG5QcmV2ZW50ICdzdWInIGFuZCAnc3VwJyBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qXFxuVGFidWxhciBkYXRhXFxuPT09PT09PT09PT09XFxuKi9cXG4vKipcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4qL1xcbnRhYmxlIHtcXG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Gb3Jtc1xcbj09PT09XFxuKi9cXG4vKipcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuKi9cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbjEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4qL1xcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4qL1xcbmJ1dHRvbixcXG5bdHlwZT1idXR0b25dLFxcblt0eXBlPXJlc2V0XSxcXG5bdHlwZT1zdWJtaXRdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiovXFxuOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcblJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4qL1xcbjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCAnOmludmFsaWQnIHN0eWxlcyBpbiBGaXJlZm94LlxcblNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzdcXG4qL1xcbjotbW96LXVpLWludmFsaWQge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dCAnZmllbGRzZXQnIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4qL1xcbmxlZ2VuZCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiovXFxuW3R5cGU9c2VhcmNoXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvICdpbmhlcml0JyBpbiBTYWZhcmkuXFxuKi9cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuSW50ZXJhY3RpdmVcXG49PT09PT09PT09PVxcbiovXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvbW9kZXJuLW5vcm1hbGl6ZS9tb2Rlcm4tbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw4RkFBQTtBQUVBOzs7Q0FBQTtBQUtBOztDQUFBO0FBSUE7OztFQUdDLHNCQUFBO0FBRkQ7O0FBS0E7O0NBQUE7QUFJQTtFQUNDLGdCQUFBO0VBQ0EsV0FBQTtBQUhEOztBQU1BOzs7Q0FBQTtBQUtBO0VBQ0MsaUJBQUEsRUFBQSxNQUFBO0VBQ0EsOEJBQUEsRUFBQSxNQUFBO0FBSkQ7O0FBT0E7OztDQUFBO0FBS0E7O0NBQUE7QUFJQTtFQUNDLFNBQUE7QUFORDs7QUFTQTs7Q0FBQTtBQUlBO0VBQ0MsOEhBQ0M7QUFSRjs7QUFtQkE7OztDQUFBO0FBS0E7OztDQUFBO0FBS0E7RUFDQyxTQUFBLEVBQUEsTUFBQTtFQUNBLGNBQUEsRUFBQSxNQUFBO0FBbEJEOztBQXFCQTs7O0NBQUE7QUFLQTs7Q0FBQTtBQUlBO0VBQ0MsaUNBQUE7QUFwQkQ7O0FBdUJBOztDQUFBO0FBSUE7O0VBRUMsbUJBQUE7QUFyQkQ7O0FBd0JBOzs7Q0FBQTtBQUtBOzs7O0VBSUMsd0ZBQ0MsRUFLVyxNQUFBO0VBQ1osY0FBQSxFQUFBLE1BQUE7QUE1QkQ7O0FBK0JBOztDQUFBO0FBSUE7RUFDQyxjQUFBO0FBN0JEOztBQWdDQTs7Q0FBQTtBQUlBOztFQUVDLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQTlCRDs7QUFpQ0E7RUFDQyxlQUFBO0FBOUJEOztBQWlDQTtFQUNDLFdBQUE7QUE5QkQ7O0FBaUNBOzs7Q0FBQTtBQUtBOzs7Q0FBQTtBQUtBO0VBQ0MsY0FBQSxFQUFBLE1BQUE7RUFDQSxxQkFBQSxFQUFBLE1BQUE7QUFoQ0Q7O0FBbUNBOzs7Q0FBQTtBQUtBOzs7Q0FBQTtBQUtBOzs7OztFQUtDLG9CQUFBLEVBQUEsTUFBQTtFQUNBLGVBQUEsRUFBQSxNQUFBO0VBQ0EsaUJBQUEsRUFBQSxNQUFBO0VBQ0EsU0FBQSxFQUFBLE1BQUE7QUFsQ0Q7O0FBcUNBOzs7Q0FBQTtBQUtBO1NBQ1MsTUFBQTtFQUNSLG9CQUFBO0FBbkNEOztBQXNDQTs7Q0FBQTtBQUlBOzs7O0VBSUMsMEJBQUE7QUFwQ0Q7O0FBdUNBOztDQUFBO0FBSUE7RUFDQyxrQkFBQTtFQUNBLFVBQUE7QUFyQ0Q7O0FBd0NBOztDQUFBO0FBSUE7RUFDQyw4QkFBQTtBQXRDRDs7QUF5Q0E7OztDQUFBO0FBS0E7RUFDQyxnQkFBQTtBQXZDRDs7QUEwQ0E7O0NBQUE7QUFJQTtFQUNDLFVBQUE7QUF4Q0Q7O0FBMkNBOztDQUFBO0FBSUE7RUFDQyx3QkFBQTtBQXpDRDs7QUE0Q0E7O0NBQUE7QUFJQTs7RUFFQyxZQUFBO0FBMUNEOztBQTZDQTs7O0NBQUE7QUFLQTtFQUNDLDZCQUFBLEVBQUEsTUFBQTtFQUNBLG9CQUFBLEVBQUEsTUFBQTtBQTNDRDs7QUE4Q0E7O0NBQUE7QUFJQTtFQUNDLHdCQUFBO0FBNUNEOztBQStDQTs7O0NBQUE7QUFLQTtFQUNDLDBCQUFBLEVBQUEsTUFBQTtFQUNBLGFBQUEsRUFBQSxNQUFBO0FBN0NEOztBQWdEQTs7O0NBQUE7QUFLQTs7Q0FBQTtBQUlBO0VBQ0Msa0JBQUE7QUEvQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG1vZGVybi1ub3JtYWxpemUgdjEuMS4wIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUgKi9cXG5cXG4vKlxcbkRvY3VtZW50XFxuPT09PT09PT1cXG4qL1xcblxcbi8qKlxcblVzZSBhIGJldHRlciBib3ggbW9kZWwgKG9waW5pb25hdGVkKS5cXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyoqXFxuVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZSAob3BpbmlvbmF0ZWQpLlxcbiovXFxuXFxuaHRtbCB7XFxuXFx0LW1vei10YWItc2l6ZTogNDtcXG5cXHR0YWItc2l6ZTogNDtcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiovXFxuXFxuaHRtbCB7XFxuXFx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG5cXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZWN0aW9uc1xcbj09PT09PT09XFxuKi9cXG5cXG4vKipcXG5SZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5ib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbkltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXFxuKi9cXG5cXG5ib2R5IHtcXG5cXHRmb250LWZhbWlseTpcXG5cXHRcXHRzeXN0ZW0tdWksXFxuXFx0XFx0LWFwcGxlLXN5c3RlbSwgLyogRmlyZWZveCBzdXBwb3J0cyB0aGlzIGJ1dCBub3QgeWV0IGBzeXN0ZW0tdWlgICovXFxuXFx0XFx0J1NlZ29lIFVJJyxcXG5cXHRcXHRSb2JvdG8sXFxuXFx0XFx0SGVsdmV0aWNhLFxcblxcdFxcdEFyaWFsLFxcblxcdFxcdHNhbnMtc2VyaWYsXFxuXFx0XFx0J0FwcGxlIENvbG9yIEVtb2ppJyxcXG5cXHRcXHQnU2Vnb2UgVUkgRW1vamknO1xcbn1cXG5cXG4vKlxcbkdyb3VwaW5nIGNvbnRlbnRcXG49PT09PT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuKi9cXG5cXG5ociB7XFxuXFx0aGVpZ2h0OiAwOyAvKiAxICovXFxuXFx0Y29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5UZXh0LWxldmVsIHNlbWFudGljc1xcbj09PT09PT09PT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnJbdGl0bGVdIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuMS4gSW1wcm92ZSBjb25zaXN0ZW5jeSBvZiBkZWZhdWx0IGZvbnRzIGluIGFsbCBicm93c2Vycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZS9pc3N1ZXMvMylcXG4yLiBDb3JyZWN0IHRoZSBvZGQgJ2VtJyBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuXFx0Zm9udC1mYW1pbHk6XFxuXFx0XFx0dWktbW9ub3NwYWNlLFxcblxcdFxcdFNGTW9uby1SZWd1bGFyLFxcblxcdFxcdENvbnNvbGFzLFxcblxcdFxcdCdMaWJlcmF0aW9uIE1vbm8nLFxcblxcdFxcdE1lbmxvLFxcblxcdFxcdG1vbm9zcGFjZTsgLyogMSAqL1xcblxcdGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc21hbGwge1xcblxcdGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG5QcmV2ZW50ICdzdWInIGFuZCAnc3VwJyBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc3ViLFxcbnN1cCB7XFxuXFx0Zm9udC1zaXplOiA3NSU7XFxuXFx0bGluZS1oZWlnaHQ6IDA7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG5cXHRib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuXFx0dG9wOiAtMC41ZW07XFxufVxcblxcbi8qXFxuVGFidWxhciBkYXRhXFxuPT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4qL1xcblxcbnRhYmxlIHtcXG5cXHR0ZXh0LWluZGVudDogMDsgLyogMSAqL1xcblxcdGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkZvcm1zXFxuPT09PT1cXG4qL1xcblxcbi8qKlxcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4qL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuXFx0Zm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuXFx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG5cXHRtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbjEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuXFx0dGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbkNvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuKi9cXG5cXG46Oi1tb3otZm9jdXMtaW5uZXIge1xcblxcdGJvcmRlci1zdHlsZTogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG5SZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuKi9cXG5cXG46LW1vei1mb2N1c3Jpbmcge1xcblxcdG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsICc6aW52YWxpZCcgc3R5bGVzIGluIEZpcmVmb3guXFxuU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczN1xcbiovXFxuXFxuOi1tb3otdWktaW52YWxpZCB7XFxuXFx0Ym94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dCAnZmllbGRzZXQnIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmxlZ2VuZCB7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiovXFxuXFxuW3R5cGU9J3NlYXJjaCddIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcblxcdG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4qL1xcblxcbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gJ2luaGVyaXQnIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuXFx0Zm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkludGVyYWN0aXZlXFxuPT09PT09PT09PT1cXG4qL1xcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5zdW1tYXJ5IHtcXG5cXHRkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcInAge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XFxufVxcblxcbiNoZWFkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogNzVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiAwIDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxufVxcbiNoZWFkICNzZWFyY2hUZXh0RmllbGQge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBwYWRkaW5nOiAwLjNyZW0gMCAwLjNyZW0gMXJlbTtcXG4gIHotaW5kZXg6IDI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDRyZW07XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuI2hlYWQgI3NlYXJjaFRleHRGaWVsZDpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuI2hlYWQgI3NlYXJjaFRleHRGaWVsZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjEpIDAgMCk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAsIHJnYmEoMCwgMCwgMCwgMC4xKSkpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4xKSAwIDApO1xcbn1cXG4jaGVhZCAjc2VhcmNoVGV4dEZpZWxkOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMSkgMCAwKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCwgcmdiYSgwLCAwLCAwLCAwLjEpKSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjEpIDAgMCk7XFxufVxcbiNoZWFkICNzZWFyY2hQbGFjZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MSwgMCwgMCk7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbiNoZWFkICNzZWFyY2hQbGFjZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjEpIDAgMCk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAsIHJnYmEoMCwgMCwgMCwgMC4xKSkpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4xKSAwIDApO1xcbn1cXG4jaGVhZCAjc2VhcmNoUGxhY2U6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4xKSAwIDApO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLCByZ2JhKDAsIDAsIDAsIDAuMSkpKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMSkgMCAwKTtcXG59XFxuXFxuI2Zvb3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRlNGQ0YTtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTVweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxufVxcbiNmb290IGltZyB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4jZm9vdCAjb3B3IHtcXG4gIGhlaWdodDogNDhweDtcXG59XFxuXFxuLnVuaXQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMzAlO1xcbiAgbWluLXdpZHRoOiAxMDBweDtcXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMDB2bWF4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4udW5pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjEpIDAgMCk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAsIHJnYmEoMCwgMCwgMCwgMC4xKSkpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4xKSAwIDApO1xcbn1cXG4udW5pdDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjEpIDAgMCk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAsIHJnYmEoMCwgMCwgMCwgMC4xKSkpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4xKSAwIDApO1xcbn1cXG4udW5pdCBzcGFuLmFjdGl2ZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3dlYXRoZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMnJlbSAycmVtIDFyZW0gMnJlbTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogM3JlbTtcXG4gIC8qID09PT09IFNjcm9sbGJhciBDU1MgPT09PT0gKi9cXG4gIC8qIEZpcmVmb3ggKi9cXG4gIC8qIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaSAqL1xcbn1cXG4jd2VhdGhlci1jb250YWluZXIge1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgc2Nyb2xsYmFyLWNvbG9yOiAjMDAwMDAwICNmZmZmZmY7XFxufVxcbiN3ZWF0aGVyLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDEwcHg7XFxufVxcbiN3ZWF0aGVyLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogZ2FpbnNib3JvO1xcbn1cXG4jd2VhdGhlci1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbiN3ZWF0aGVyLWNvbnRhaW5lciAud2VhdGhlcl9fZGFpbHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljYTNhZjtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDZweCBvcmFuZ2U7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm94LXNoYWRvdzogMCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAyMDBtcyAtd2Via2l0LXRyYW5zZm9ybTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIC13ZWJraXQtdHJhbnNmb3JtO1xcbiAgLW8tdHJhbnNpdGlvbjogMjAwbXMgdHJhbnNmb3JtO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgdHJhbnNmb3JtO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgdHJhbnNmb3JtLCAyMDBtcyAtd2Via2l0LXRyYW5zZm9ybTtcXG59XFxuI3dlYXRoZXItY29udGFpbmVyIC53ZWF0aGVyX19kYWlseTpob3ZlciB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcbiN3ZWF0aGVyLWNvbnRhaW5lciAud2VhdGhlcl9fZGFpbHkgaW1nIHtcXG4gIG1heC13aWR0aDogMTI1cHg7XFxuICBtYXgtaGVpZ2h0OiAxMjVweDtcXG59XFxuI3dlYXRoZXItY29udGFpbmVyIC53ZWF0aGVyX19kYWlseSAubG9jYXRpb24ge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIG1heC13aWR0aDogOTUlO1xcbiAgbWF4LWhlaWdodDogNjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xcbn1cXG4jd2VhdGhlci1jb250YWluZXIgLndlYXRoZXJfX2RhaWx5IC5kYWlseSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGdhcDogMXJlbTtcXG59XFxuI3dlYXRoZXItY29udGFpbmVyIC53ZWF0aGVyX19kYWlseSAuZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4jd2VhdGhlci1jb250YWluZXIgLndlYXRoZXJfX2RhaWx5IC5kYWlseS10ZW1wIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMTEwcHg7XFxuICBoZWlnaHQ6IDExMHB4O1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3dlYXRoZXItY29udGFpbmVyIC53ZWF0aGVyX19kYWlseS0tZGV0YWlscyB7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljYTNhZjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJveC1zaGFkb3c6IDAgMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAyMDBtcyAtd2Via2l0LXRyYW5zZm9ybTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIC13ZWJraXQtdHJhbnNmb3JtO1xcbiAgLW8tdHJhbnNpdGlvbjogMjAwbXMgdHJhbnNmb3JtO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgdHJhbnNmb3JtO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgdHJhbnNmb3JtLCAyMDBtcyAtd2Via2l0LXRyYW5zZm9ybTtcXG59XFxuI3dlYXRoZXItY29udGFpbmVyIC53ZWF0aGVyX19kYWlseS0tZGV0YWlsczpob3ZlciB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcbiN3ZWF0aGVyLWNvbnRhaW5lciAud2VhdGhlcl9fZGFpbHktLWRldGFpbHMgZGl2IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG4jd2VhdGhlci1jb250YWluZXIgLndlYXRoZXJfX2RhaWx5LS1kZXRhaWxzIGRpdiBwOm50aC1jaGlsZCgxKSB7XFxuICBjb2xvcjogcmdiKDcxLCA3MSwgNzEpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBvcGFjaXR5OiAwLjc1O1xcbn1cXG4jd2VhdGhlci1jb250YWluZXIgLndlYXRoZXJfX2ZvcmVjYXN0IHtcXG4gIGhlaWdodDogMTcwcHg7XFxuICB3aWR0aDogODAwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDRweDtcXG59XFxuI3dlYXRoZXItY29udGFpbmVyIC53ZWF0aGVyX19mb3JlY2FzdCAuZm9yZWNhc3QtLWRldGFpbHMge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJveC1zaGFkb3c6IDAgMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWNhM2FmO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAtbXMtZmxleDogMSAxIDBweDtcXG4gIGZsZXg6IDEgMSAwO1xcbiAgd2lkdGg6IDA7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAyMDBtcyAtd2Via2l0LXRyYW5zZm9ybTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIC13ZWJraXQtdHJhbnNmb3JtO1xcbiAgLW8tdHJhbnNpdGlvbjogMjAwbXMgdHJhbnNmb3JtO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgdHJhbnNmb3JtO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgdHJhbnNmb3JtLCAyMDBtcyAtd2Via2l0LXRyYW5zZm9ybTtcXG59XFxuI3dlYXRoZXItY29udGFpbmVyIC53ZWF0aGVyX19mb3JlY2FzdCAuZm9yZWNhc3QtLWRldGFpbHM6aG92ZXIge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG4jd2VhdGhlci1jb250YWluZXIgLndlYXRoZXJfX2ZvcmVjYXN0IC5mb3JlY2FzdC0tZGV0YWlscyBpbWcge1xcbiAgbWF4LXdpZHRoOiAxMDBweDtcXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xcbn1cXG4jd2VhdGhlci1jb250YWluZXIgLndlYXRoZXJfX2ZvcmVjYXN0IC5mb3JlY2FzdC0tZGV0YWlscyAuZGF5LXZhbCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG59XFxuI3dlYXRoZXItY29udGFpbmVyIC53ZWF0aGVyX19mb3JlY2FzdCAuZm9yZWNhc3QtLWRldGFpbHMgLnZhbC10ZW1wIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBWUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQVhGOztBQWNBO0VBQ0ksb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0ksMEJBQUE7RUFDSSxzQkFBQTtFQUNSLGFBQUE7RUFDQSwyQkFBQTtBQVhKOztBQWNBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0ksc0JBQUE7RUFDSSxtQkFBQTtFQUNSLGtEQUFBO0VBQ1EsMENBQUE7QUFYVjtBQVlFO0VBQ0UsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFD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QUE7RUFDSSxtQkFBQTtFQUNSLDJDQUFBO0VBQ0EsbUNBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0RBQUE7QUFPTjtBQU5JO0VBQ0UsOEJBQUE7RUFDSSwwQkFBQTtFQUNJLHNCQUFBO0FBUWQ7QUFOTTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFRUjtBQU5NO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQVFSO0FBTk07RUFDRSxpQkFBQTtBQVFSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtaXhpbiBob3ZlckZvY3VzIHtcXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjEpIDAgMCk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCwgcmdiYSgwLCAwLCAwLCAwLjEpKSk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMSkgMCAwKTtcXHJcXG4gIH1cXHJcXG4gICY6Zm9jdXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjEpIDAgMCk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCwgcmdiYSgwLCAwLCAwLCAwLjEpKSk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMSkgMCAwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxucCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcclxcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXHJcXG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiA3NXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXHJcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcclxcbiAgI3NlYXJjaFRleHRGaWVsZCB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDAuM3JlbSAwIDAuM3JlbSAxcmVtO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA0cmVtO1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxyXFxuICAgICY6Zm9jdXMge1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIGhvdmVyRm9jdXMoKTtcXHJcXG4gIH1cXHJcXG4gICNzZWFyY2hQbGFjZSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDEsIDAsIDApO1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICBAaW5jbHVkZSBob3ZlckZvY3VzKCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiNmb290IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZTRkNGE7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDU1cHg7XFxyXFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxyXFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgaW1nIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgfVxcclxcbiAgI29wdyB7XFxyXFxuICAgIGhlaWdodDogNDhweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnVuaXQge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDMwJTtcXHJcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXHJcXG4gICAgbWluLWhlaWdodDogMzBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwdm1heDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICBAaW5jbHVkZSBob3ZlckZvY3VzKCk7XFxyXFxuICAgIHNwYW4uYWN0aXZlIHtcXHJcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4jd2VhdGhlci1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW0gMnJlbSAxcmVtIDJyZW07XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcclxcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBnYXA6IDNyZW07XFxyXFxuICAgIC8qID09PT09IFNjcm9sbGJhciBDU1MgPT09PT0gKi9cXHJcXG4gIC8qIEZpcmVmb3ggKi9cXHJcXG4gICYge1xcclxcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxyXFxuICAgIHNjcm9sbGJhci1jb2xvcjogIzAwMDAwMCAjZmZmZmZmO1xcclxcbiAgfVxcclxcblxcclxcbiAgLyogQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpICovXFxyXFxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIHdpZHRoOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBnYWluc2Jvcm87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLndlYXRoZXJfX2RhaWx5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWNhM2FmO1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItbGVmdDogc29saWQgNnB4IG9yYW5nZTtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcclxcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXHJcXG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAyMDBtcyAtd2Via2l0LXRyYW5zZm9ybTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgLXdlYmtpdC10cmFuc2Zvcm07XFxyXFxuICAgIC1vLXRyYW5zaXRpb246IDIwMG1zIHRyYW5zZm9ybTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgdHJhbnNmb3JtO1xcclxcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyB0cmFuc2Zvcm0sIDIwMG1zIC13ZWJraXQtdHJhbnNmb3JtO1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gICAgfVxcclxcbiAgICBpbWcge1xcclxcbiAgICAgIG1heC13aWR0aDogMTI1cHg7XFxyXFxuICAgICAgbWF4LWhlaWdodDogMTI1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxvY2F0aW9uIHtcXHJcXG4gICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICBtYXgtd2lkdGg6IDk1JTtcXHJcXG4gICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZGFpbHkge1xcclxcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcclxcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICAgIGdhcDogMXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZGVzY3JpcHRpb24ge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRhaWx5LXRlbXAge1xcclxcbiAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgIHdpZHRoOiAxMTBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDExMHB4O1xcclxcbiAgICAgIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC53ZWF0aGVyX19kYWlseS0tZGV0YWlscyB7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIHdpZHRoOiA2MDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzljYTNhZjtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDIwMG1zIC13ZWJraXQtdHJhbnNmb3JtO1xcclxcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyAtd2Via2l0LXRyYW5zZm9ybTtcXHJcXG4gICAgLW8tdHJhbnNpdGlvbjogMjAwbXMgdHJhbnNmb3JtO1xcclxcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyB0cmFuc2Zvcm07XFxyXFxuICAgIHRyYW5zaXRpb246IDIwMG1zIHRyYW5zZm9ybSwgMjAwbXMgLXdlYmtpdC10cmFuc2Zvcm07XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdiB7XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcclxcbiAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcclxcbiAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcclxcbiAgICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBnYXA6IC41cmVtO1xcclxcbiAgICAgIHA6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgICAgIGNvbG9yOiByZ2IoNzEsIDcxLCA3MSk7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IC43NTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC53ZWF0aGVyX19mb3JlY2FzdCB7XFxyXFxuICAgIGhlaWdodDogMTcwcHg7XFxyXFxuICAgIHdpZHRoOiA4MDBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogNHB4O1xcclxcbiAgICAuZm9yZWNhc3QtLWRldGFpbHMge1xcclxcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gICAgICBwYWRkaW5nLXRvcDogLjVyZW07XFxyXFxuICAgICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5Y2EzYWY7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xcclxcbiAgICAgICAgICAtbXMtZmxleDogMSAxIDBweDtcXHJcXG4gICAgICAgICAgICAgIGZsZXg6IDEgMSAwO1xcclxcbiAgICAgIHdpZHRoOiAwO1xcclxcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcclxcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXHJcXG4gICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXHJcXG4gICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAyMDBtcyAtd2Via2l0LXRyYW5zZm9ybTtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiAyMDBtcyAtd2Via2l0LXRyYW5zZm9ybTtcXHJcXG4gICAgICAtby10cmFuc2l0aW9uOiAyMDBtcyB0cmFuc2Zvcm07XFxyXFxuICAgICAgdHJhbnNpdGlvbjogMjAwbXMgdHJhbnNmb3JtO1xcclxcbiAgICAgIHRyYW5zaXRpb246IDIwMG1zIHRyYW5zZm9ybSwgMjAwbXMgLXdlYmtpdC10cmFuc2Zvcm07XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbiAgICB9XFxyXFxuICAgICAgaW1nIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMTAwcHg7XFxyXFxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgLmRheS12YWwge1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMzVyZW07XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC52YWwtdGVtcCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2Rlcm4tbm9ybWFsaXplLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2Rlcm4tbm9ybWFsaXplLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZ2V0V2VhdGhlciBmcm9tICcuL3dlYXRoZXIuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoUGxhY2UnKTtcclxuXHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoVGV4dEZpZWxkJyk7XHJcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGlucHV0LnZhbHVlID0gJyc7IH0pO1xyXG5cclxuICBjb25zdCBhdXRvY29tcGxldGUgPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZShpbnB1dCk7XHJcblxyXG4gIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgICBsZXQgcGxhY2UgPSBhdXRvY29tcGxldGUuZ2V0UGxhY2UoKTtcclxuICAgIGlmICghcGxhY2UgfHwgaW5wdXQudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgIGlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgIHBsYWNlID0gdW5kZWZpbmVkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbGF0VmFsID0gcGxhY2UuZ2VvbWV0cnkubG9jYXRpb24ubGF0KCk7XHJcbiAgICAgIGNvbnN0IGxvblZhbCA9IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpO1xyXG4gICAgICBnZXRXZWF0aGVyKGxhdFZhbCwgbG9uVmFsLCBwbGFjZS5mb3JtYXR0ZWRfYWRkcmVzcyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgZ2V0V2VhdGhlcig1MS41MDcyMTc4LCAtMC4xMjc1ODYyLCAnTG9uZG9uLCBVSycpO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIHV0aWxpdHkgZnJvbSAnLi91dGlsaXR5JztcclxuXHJcbmNvbnN0IHRlbXBVbml0c0NvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pdCcpO1xyXG5sZXQgdW5pdFRlbXAgPSAnQyc7XHJcbnRlbXBVbml0c0NvbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY29uc3QgY2Vsc2l1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jZWxzaXVzJyk7XHJcbiAgY29uc3QgZmFocmVuaGVpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYWhyZW5oZWl0Jyk7XHJcbiAgY29uc3QgYWxsVGVtcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmFsLXRlbXAnKTtcclxuXHJcbiAgY2Vsc2l1cy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICBmYWhyZW5oZWl0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cclxuICBpZiAoYWxsVGVtcHMubGVuZ3RoID4gMCkge1xyXG4gICAgdXRpbGl0eS51cGRhdGVUZW1wRE9NKGFsbFRlbXBzLCB1bml0VGVtcCk7XHJcbiAgfVxyXG4gIHVuaXRUZW1wID0gZmFocmVuaGVpdC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpID8gJ0YnIDogJ0MnO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJXaWRnZXRzKGRhaWx5LCBmb3JlY2FzdCwgcGxhY2UpIHtcclxuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbicpO1xyXG4gIGNvbnN0IGRhaWx5Q29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYWlseScpO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XHJcbiAgY29uc3QgZGFpbHlEZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJfX2RhaWx5LS1kZXRhaWxzJyk7XHJcbiAgY29uc3QgZm9yZWNhc3RET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcl9fZm9yZWNhc3QnKTtcclxuXHJcbiAgbG9jYXRpb24ucmVwbGFjZUNoaWxkcmVuKCk7XHJcbiAgZGFpbHlDb250LnJlcGxhY2VDaGlsZHJlbigpO1xyXG5cclxuICBjb25zdCBwbGFjZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgcGxhY2VOYW1lLmlubmVyVGV4dCA9IHBsYWNlO1xyXG5cclxuICBsb2NhdGlvbi5hcHBlbmRDaGlsZChwbGFjZU5hbWUpO1xyXG5cclxuICBjb25zdCB3ZWF0aGVyQ29uZGl0aW9uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgd2VhdGhlckNvbmRpdGlvbkltZy5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYWlseS53ZWF0aGVyWzBdLmljb259QDR4LnBuZ2A7XHJcblxyXG4gIGNvbnN0IGRhaWx5dGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBkYWlseXRlbXAuY2xhc3NMaXN0LmFkZCgnZGFpbHktdGVtcCcsICd2YWwtdGVtcCcpO1xyXG4gIGRhaWx5dGVtcC5pbm5lclRleHQgPSBgJHt1dGlsaXR5LmtlbHZpblRvVGVtcChkYWlseS5tYWluLnRlbXAsIHVuaXRUZW1wKX3CsGA7XHJcblxyXG4gIGRhaWx5Q29udC5hcHBlbmQod2VhdGhlckNvbmRpdGlvbkltZywgZGFpbHl0ZW1wKTtcclxuICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSAnJztcclxuXHJcbiAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gZGFpbHkud2VhdGhlclswXS5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpXHJcbiAgICAuc3BsaXQoJyAnKVxyXG4gICAgLm1hcCgocykgPT4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc3Vic3RyaW5nKDEpKVxyXG4gICAgLmpvaW4oJyAnKTtcclxuXHJcbiAgZGFpbHlEZXRhaWxzLmlubmVySFRNTCA9ICcnO1xyXG4gIGRhaWx5RGV0YWlscy5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImZlZWx0ZW1wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GZWVscyBsaWtlOjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ2YWwtdGVtcFwiPiR7dXRpbGl0eS5rZWx2aW5Ub1RlbXAoZGFpbHkubWFpbi5mZWVsc19saWtlLCB1bml0VGVtcCl9wrA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW1wLW1pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5NaW5pbXVtOjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ2YWwtdGVtcFwiPiR7dXRpbGl0eS5rZWx2aW5Ub1RlbXAoZGFpbHkubWFpbi50ZW1wX21pbiwgdW5pdFRlbXApfcKwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVtcC1tYXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TWF4aW11bTo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidmFsLXRlbXBcIj4ke3V0aWxpdHkua2VsdmluVG9UZW1wKGRhaWx5Lm1haW4udGVtcF9tYXgsIHVuaXRUZW1wKX3CsDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByZXNzdXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlByZXNzdXJlOjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtkYWlseS5tYWluLnByZXNzdXJlfSBoUGE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJodW1pZGl0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5IdW1pZGl0eTo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7ZGFpbHkubWFpbi5odW1pZGl0eX0lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2luZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XaW5kIFNwZWVkOjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtkYWlseS53aW5kLnNwZWVkfSBtL3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gIGNvbnN0IGZvcmVjYXN0RGF0YSA9IHV0aWxpdHkuZm9ybWF0Rm9yZWNhc3REYXRhKGZvcmVjYXN0KTtcclxuICBmb3JlY2FzdERPTS5yZXBsYWNlQ2hpbGRyZW4oKTtcclxuICBmb3JlY2FzdERhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgZm9yZWNhc3RIVE1MID0gYDxkaXYgY2xhc3M9XCJmb3JlY2FzdC0tZGV0YWlsc1wiPlxyXG4gICAgPHAgY2xhc3M9XCJkYXktdmFsXCI+JHtlbGVtZW50LmRhdGV9PC9wPlxyXG4gICAgPGltZyBzcmM9XCJodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2VsZW1lbnQuaWNvbnN9QDR4LnBuZ1wiIGFsdD1cIlwiPlxyXG4gICAgPHAgY2xhc3M9XCJ2YWwtdGVtcFwiPiR7dXRpbGl0eS5rZWx2aW5Ub1RlbXAoZWxlbWVudC50ZW1wLCB1bml0VGVtcCl9wrA8L3A+XHJcbiAgPC9kaXY+YDtcclxuICAgIGZvcmVjYXN0RE9NLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgZm9yZWNhc3RIVE1MKTtcclxuICB9KTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24ga2VsdmluVG9UZW1wKHRlbXAsIHVuaXRzKSB7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcclxuICBpZiAodW5pdHMgPT09ICdDJykge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKCh0ZW1wIC0gMjczLjE1KSkgfCAwO1xyXG4gIH1cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxyXG4gIHJldHVybiBNYXRoLnJvdW5kKCgoKHRlbXAgLSAyNzMuMTUpICogOSkgLyA1KSArIDMyKSB8IDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VGVtcCh0ZW1wLCB1bml0cykge1xyXG4gIGlmICh1bml0cyA9PT0gJ0MnKSB7XHJcbiAgICByZXR1cm4ga2VsdmluVG9UZW1wKHRlbXAgKyAyNzMuMTUsICdGJyk7XHJcbiAgfVxyXG4gIGNvbnN0IHRlbXBLZWx2aW4gPSAoKCh0ZW1wIC0gMzIpICogNSkgLyA5KSArIDI3My4xNTtcclxuICByZXR1cm4ga2VsdmluVG9UZW1wKHRlbXBLZWx2aW4sICdDJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUZW1wRE9NKGFyciwgdW5pdHMpIHtcclxuICBhcnIuZm9yRWFjaCgoaXRlcmF0b3IpID0+IHtcclxuICAgIGNvbnN0IHMgPSBpdGVyYXRvci5pbm5lclRleHQuc2xpY2UoMCwgLTEpO1xyXG4gICAgaXRlcmF0b3IuaW5uZXJUZXh0ID0gYCR7Y29udmVydFRlbXAocGFyc2VJbnQocywgMTApLCB1bml0cyl9wrBgO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0Rm9yZWNhc3REYXRhKGZvcmVjYXN0KSB7XHJcbiAgbGV0IGN1cnJlbnREYXRlID0gZm9yZWNhc3QubGlzdFswXS5kdF90eHQuc2xpY2UoMCwgLTkpO1xyXG4gIGNvbnN0IGRheSA9IHtcclxuICAgIGRhdGU6IGN1cnJlbnREYXRlLFxyXG4gICAgdGVtcDogMCxcclxuICAgIGljb25zOiBbXSxcclxuICAgIGRlc2NyaXB0aW9uOiBbXSxcclxuICB9O1xyXG4gIGxldCBkYXlDbG9uZSA9IHN0cnVjdHVyZWRDbG9uZShkYXkpO1xyXG4gIGNvbnN0IG5ld0RhdGEgPSBbXTtcclxuICBmb3JlY2FzdC5saXN0LmZvckVhY2goKGRhdGEpID0+IHtcclxuICAgIGlmIChkYXRhLmR0X3R4dC5zbGljZSgwLCAtOSkgPT09IGN1cnJlbnREYXRlKSB7XHJcbiAgICAgIGRheUNsb25lLmRhdGUgPSBkYXRhLmR0X3R4dC5zbGljZSgwLCAtOSk7XHJcbiAgICAgIGRheUNsb25lLnRlbXAgKz0gZGF0YS5tYWluLnRlbXA7XHJcbiAgICAgIGRheUNsb25lLmljb25zLnB1c2goZGF0YS53ZWF0aGVyWzBdLmljb24pO1xyXG4gICAgICBkYXlDbG9uZS5kZXNjcmlwdGlvbi5wdXNoKGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbik7XHJcbiAgICB9IGVsc2UgaWYgKGRhdGEuZHRfdHh0LnNsaWNlKDAsIC05KSAhPT0gY3VycmVudERhdGUpIHtcclxuICAgICAgZm9yZWNhc3REYXRhQXZlcmFnZShkYXlDbG9uZSk7XHJcbiAgICAgIG5ld0RhdGEucHVzaChkYXlDbG9uZSk7XHJcbiAgICAgIGRheUNsb25lID0gc3RydWN0dXJlZENsb25lKGRheSk7XHJcbiAgICAgIGRheUNsb25lLmRhdGUgPSBkYXRhLmR0X3R4dC5zbGljZSgwLCAtOSk7XHJcbiAgICAgIGRheUNsb25lLnRlbXAgKz0gZGF0YS5tYWluLnRlbXA7XHJcbiAgICAgIGRheUNsb25lLmljb25zLnB1c2goZGF0YS53ZWF0aGVyWzBdLmljb24pO1xyXG4gICAgICBkYXlDbG9uZS5kZXNjcmlwdGlvbi5wdXNoKGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbik7XHJcbiAgICAgIGN1cnJlbnREYXRlID0gZGF0YS5kdF90eHQuc2xpY2UoMCwgLTkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbmV3RGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcmVjYXN0RGF0YUF2ZXJhZ2Uob2JqKSB7XHJcbiAgb2JqLnRlbXAgLz0gb2JqLmljb25zLmxlbmd0aDtcclxuICBvYmouaWNvbnMgPSBtYXhPY2N1cmVuY2Uob2JqLmljb25zKTtcclxuICBvYmouZGF0ZSA9IGRhdGVUb1dlZWtkYXkob2JqLmRhdGUpO1xyXG4gIG9iai5kZXNjcmlwdGlvbiA9IG1heE9jY3VyZW5jZShvYmouZGVzY3JpcHRpb24pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWF4T2NjdXJlbmNlKGFycikge1xyXG4gIGNvbnN0IGNvdW50cyA9IHt9O1xyXG4gIGxldCBtYXhDb3VudCA9IDA7XHJcbiAgbGV0IG1heEtleTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3Qga2V5ID0gYXJyW2ldO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW11bHRpLWFzc2lnblxyXG4gICAgY29uc3QgY291bnQgPSAoY291bnRzW2tleV0gPSAoY291bnRzW2tleV0gfHwgMCkgKyAxKTtcclxuICAgIGlmIChjb3VudCA+IG1heENvdW50KSB7XHJcbiAgICAgIG1heENvdW50ID0gY291bnQ7XHJcbiAgICAgIG1heEtleSA9IGtleTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG1heEtleTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVUb1dlZWtkYXkoZGF0ZSkge1xyXG4gIGNvbnN0IHdlZWtkYXlzID0gWydNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5JywgJ1N1bmRheSddO1xyXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgcmV0dXJuIHdlZWtkYXlzW3RvZGF5LmdldERheSgpXTtcclxufVxyXG4iLCJpbXBvcnQgY3JlYXRlV2VhdGhlcldpZGdldHMgZnJvbSAnLi9kaXNwbGF5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobGF0LCBsb24sIHBsYWNlKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlRGFpbHkgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/JmxhdD0ke2xhdC50b1N0cmluZygpfSZsb249JHtsb24udG9TdHJpbmcoKX0mYXBwaWQ9JHsnZjE1MmUwYjAzYWY4Y2UwZTEyM2UyNmU4NDg0NTkxZTgnfWApO1xyXG4gICAgY29uc3Qgb2JqRGFpbHkgPSBhd2FpdCByZXNwb25zZURhaWx5Lmpzb24oKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlRm9yZWNhc3QgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0PyZsYXQ9JHtsYXQudG9TdHJpbmcoKX0mbG9uPSR7bG9uLnRvU3RyaW5nKCl9JmFwcGlkPSR7J2YxNTJlMGIwM2FmOGNlMGUxMjNlMjZlODQ4NDU5MWU4J31gKTtcclxuICAgIGNvbnN0IG9iakZvcmVjYXN0ID0gYXdhaXQgcmVzcG9uc2VGb3JlY2FzdC5qc29uKCk7XHJcbiAgICBjcmVhdGVXZWF0aGVyV2lkZ2V0cyhvYmpEYWlseSwgb2JqRm9yZWNhc3QsIHBsYWNlKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXHJcbmltcG9ydCAnbW9kZXJuLW5vcm1hbGl6ZS9tb2Rlcm4tbm9ybWFsaXplLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzLnNjc3MnO1xyXG5pbXBvcnQgaW5pdGlhbGl6ZSBmcm9tICcuL2F1dG9jb21wbGV0ZSc7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGluaXRpYWxpemUpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=