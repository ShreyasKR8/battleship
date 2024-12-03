/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/AndroidAssassin-WXXY.ttf */ "./fonts/AndroidAssassin-WXXY.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap'); */

@font-face {
    font-family: 'Android-Assassin';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('opentype');
    font-weight: normal;
    font-style: normal;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    font-family: Verdana;
}

header {
    font-size: 22px;
    width: fit-content;
    margin: 30px auto 30px;
}

header h1 {
    font-family: 'Android-Assassin', sans-serif;
    letter-spacing: 1px;
}

.main-section {
    display: flex;
    /* flex-direction: ; */
    height: 450px;
}

.game-ctrl-section {
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: 300px;
    margin: auto 100px;
}

.game-ctrl-btn {
    width: 150px;
    margin: 10px auto;
    height: 30px;
    background-color: rgb(234, 234, 234);
    border-radius: 2px;
    border: 1px solid rgb(0, 0, 0);
    font-size: 16px;
}

.game-ctrl-btn:not(:disabled):hover {
    background-color: rgb(60, 60, 60);
    color: white;
    cursor: pointer;
}

.gameboards {
    display: flex;
    flex-direction: row;
    gap: 50px;
    width: fit-content;
    margin: 50px 50px 30px;
    /* border: 1px solid red; */
}

.player-one-instruction, 
.player-two-instruction,
.player-two-instruction-not-needed {
    width: fit-content;
    margin: 10px auto;
}


.player-grid {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
}

.cell {
    border: 1px solid #ccc;
    border: 1px solid #7b7b7b;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: monospace;
    font-size: 1.2rem;
    width: 36px;
    height: 36px;
}

.cell:hover {
    background-color: #ccc;
}

.placement-instructions-section {
    margin: 50px 30px 50px 10px;
}

.placement-instructions-list {
    /* margin: 50px 20px; */
    list-style: decimal;
}

.placement-instructions-list > li {
    margin: 30px 0;
    text-align: justify;
}

.placement-ctrl-section {
    width: 350px;
    margin: 0 0 0 410px;
    display: flex;
    justify-content: space-between;
}

.results {
    width: fit-content;
    margin: 0 auto;
}

dialog {
    border: none;
    border-radius: 8px;
    margin: auto auto;
    width: 600px;
    height: 700px;
}

dialog header {
    text-align: center;
    width: 500px;
}

.game-instructions-dialog > ul {
    margin: 50px 60px;
    list-style: decimal;
}

.instructions-list > li {
    margin: 30px 0;
    text-align: justify;
}

.gameplay-rules li {
    margin: 20px 0 0 20px;
    text-align: justify;
}

.dialog-footer {
    width: fit-content;
    margin: 10px auto;
}

.close-dialog-btn {
    width: 100px;
}

/* for grids */
.grid-blocker {
    pointer-events: none;
    opacity: 0.3;
}

/* for cells */
.blocker {
    pointer-events: none;
}

/* for player turn instructions */
.hidden {
    visibility: hidden;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,qFAAqF;;AAErF;IACI,+BAA+B;IAC/B,+DAAgE;IAChE,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,2CAA2C;IAC3C,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,YAAY;IACZ,oCAAoC;IACpC,kBAAkB;IAClB,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,kBAAkB;IAClB,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;;;IAGI,kBAAkB;IAClB,iBAAiB;AACrB;;;AAGA;IACI,aAAa;IACb,sCAAsC;IACtC,mCAAmC;AACvC;;AAEA;IACI,sBAAsB;IACtB,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,iBAAiB;IACjB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA,cAAc;AACd;IACI,oBAAoB;IACpB,YAAY;AAChB;;AAEA,cAAc;AACd;IACI,oBAAoB;AACxB;;AAEA,iCAAiC;AACjC;IACI,kBAAkB;AACtB","sourcesContent":["/* @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap'); */\r\n\r\n@font-face {\r\n    font-family: 'Android-Assassin';\r\n    src: url('../fonts/AndroidAssassin-WXXY.ttf') format('opentype');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: Verdana;\r\n}\r\n\r\nheader {\r\n    font-size: 22px;\r\n    width: fit-content;\r\n    margin: 30px auto 30px;\r\n}\r\n\r\nheader h1 {\r\n    font-family: 'Android-Assassin', sans-serif;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.main-section {\r\n    display: flex;\r\n    /* flex-direction: ; */\r\n    height: 450px;\r\n}\r\n\r\n.game-ctrl-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: fit-content;\r\n    height: 300px;\r\n    margin: auto 100px;\r\n}\r\n\r\n.game-ctrl-btn {\r\n    width: 150px;\r\n    margin: 10px auto;\r\n    height: 30px;\r\n    background-color: rgb(234, 234, 234);\r\n    border-radius: 2px;\r\n    border: 1px solid rgb(0, 0, 0);\r\n    font-size: 16px;\r\n}\r\n\r\n.game-ctrl-btn:not(:disabled):hover {\r\n    background-color: rgb(60, 60, 60);\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n.gameboards {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 50px;\r\n    width: fit-content;\r\n    margin: 50px 50px 30px;\r\n    /* border: 1px solid red; */\r\n}\r\n\r\n.player-one-instruction, \r\n.player-two-instruction,\r\n.player-two-instruction-not-needed {\r\n    width: fit-content;\r\n    margin: 10px auto;\r\n}\r\n\r\n\r\n.player-grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n}\r\n\r\n.cell {\r\n    border: 1px solid #ccc;\r\n    border: 1px solid #7b7b7b;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-family: monospace;\r\n    font-size: 1.2rem;\r\n    width: 36px;\r\n    height: 36px;\r\n}\r\n\r\n.cell:hover {\r\n    background-color: #ccc;\r\n}\r\n\r\n.placement-instructions-section {\r\n    margin: 50px 30px 50px 10px;\r\n}\r\n\r\n.placement-instructions-list {\r\n    /* margin: 50px 20px; */\r\n    list-style: decimal;\r\n}\r\n\r\n.placement-instructions-list > li {\r\n    margin: 30px 0;\r\n    text-align: justify;\r\n}\r\n\r\n.placement-ctrl-section {\r\n    width: 350px;\r\n    margin: 0 0 0 410px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.results {\r\n    width: fit-content;\r\n    margin: 0 auto;\r\n}\r\n\r\ndialog {\r\n    border: none;\r\n    border-radius: 8px;\r\n    margin: auto auto;\r\n    width: 600px;\r\n    height: 700px;\r\n}\r\n\r\ndialog header {\r\n    text-align: center;\r\n    width: 500px;\r\n}\r\n\r\n.game-instructions-dialog > ul {\r\n    margin: 50px 60px;\r\n    list-style: decimal;\r\n}\r\n\r\n.instructions-list > li {\r\n    margin: 30px 0;\r\n    text-align: justify;\r\n}\r\n\r\n.gameplay-rules li {\r\n    margin: 20px 0 0 20px;\r\n    text-align: justify;\r\n}\r\n\r\n.dialog-footer {\r\n    width: fit-content;\r\n    margin: 10px auto;\r\n}\r\n\r\n.close-dialog-btn {\r\n    width: 100px;\r\n}\r\n\r\n/* for grids */\r\n.grid-blocker {\r\n    pointer-events: none;\r\n    opacity: 0.3;\r\n}\r\n\r\n/* for cells */\r\n.blocker {\r\n    pointer-events: none;\r\n}\r\n\r\n/* for player turn instructions */\r\n.hidden {\r\n    visibility: hidden;\r\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./fonts/AndroidAssassin-WXXY.ttf":
/*!****************************************!*\
  !*** ./fonts/AndroidAssassin-WXXY.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b2edc14eb389c939183c.ttf";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeCtrlBtnsState: () => (/* binding */ changeCtrlBtnsState),
/* harmony export */   playerOneGameboard: () => (/* binding */ playerOneGameboard),
/* harmony export */   reInitialiseGame: () => (/* binding */ reInitialiseGame)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/player.js */ "./src/modules/player.js");
/* harmony import */ var _modules_ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ship.js */ "./src/modules/ship.js");
/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/display.js */ "./src/modules/display.js");
/* harmony import */ var _modules_gameState_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/gameState.js */ "./src/modules/gameState.js");



// import { Orientation } from './modules/gameboard.js';



const startGameBtn = document.querySelector('.start-game-btn');
const leaveGameBtn = document.querySelector('.leave-game-btn');
leaveGameBtn.disabled = true;
let playerLeft = false;
const randomPlacementButton = document.querySelector('.randomise-btn');
const arrangeShipsBtn = document.querySelector('.arrange-ships-btn');

//initialise the game
const initialisedObjects = initialiseGame();
let playerOneGameboard = initialisedObjects.playerOneGameboard;
let playerTwoGameboard = initialisedObjects.playerTwoGameboard;

(0,_modules_gameState_js__WEBPACK_IMPORTED_MODULE_4__.setCurrentPlayer)('player-one');

function initialisePlayers() {
    const playerOne = new _modules_player_js__WEBPACK_IMPORTED_MODULE_1__["default"]('player-one');

    const playerTwo = new _modules_player_js__WEBPACK_IMPORTED_MODULE_1__["default"]('player-two');

    (0,_modules_gameState_js__WEBPACK_IMPORTED_MODULE_4__.setCurrentPlayer)('player-one');


    return { playerOne, playerTwo };
}

function initialiseGameboards(playerOne, playerTwo) {
    
    /* setup player one gameboard */
    const playerOneGameboard = playerOne.gameboard;
    
    placeShipAtRandomCoordinate(new _modules_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"](2), playerOneGameboard);
    placeShipAtRandomCoordinate(new _modules_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"](3), playerOneGameboard);
    placeShipAtRandomCoordinate(new _modules_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"](3), playerOneGameboard);
    placeShipAtRandomCoordinate(new _modules_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"](4), playerOneGameboard);
    placeShipAtRandomCoordinate(new _modules_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"](5), playerOneGameboard);

    /* setup player two gameboard */
    const playerTwoGameboard = playerTwo.gameboard;

    placeShipAtRandomCoordinate(new _modules_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"](2), playerTwoGameboard);
    placeShipAtRandomCoordinate(new _modules_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"](3), playerTwoGameboard);
    placeShipAtRandomCoordinate(new _modules_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"](3), playerTwoGameboard);
    placeShipAtRandomCoordinate(new _modules_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"](4), playerTwoGameboard);
    placeShipAtRandomCoordinate(new _modules_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"](5), playerTwoGameboard);

    return { playerOneGameboard, playerTwoGameboard };
}

function initialiseGame() {
    const { playerOne, playerTwo } = initialisePlayers();
    const { playerOneGameboard, playerTwoGameboard } = initialiseGameboards(playerOne, playerTwo);

    /* display player one gameboard */
    const playerOneShipPositions = playerOneGameboard.getShipPositions();
    
    _modules_display_js__WEBPACK_IMPORTED_MODULE_3__["default"].displayGameboard(undefined, 'player-one');
    _modules_display_js__WEBPACK_IMPORTED_MODULE_3__["default"].displayShipsOnGameboard(playerOneShipPositions, 'player-one');
    
    /* display player two gameboard */
    const playerTwoShipPositions = playerTwoGameboard.getShipPositions();
    
    _modules_display_js__WEBPACK_IMPORTED_MODULE_3__["default"].displayGameboard(undefined, 'player-two');
    _modules_display_js__WEBPACK_IMPORTED_MODULE_3__["default"].displayShipsOnGameboard(playerTwoShipPositions, 'player-two');

    _modules_display_js__WEBPACK_IMPORTED_MODULE_3__["default"].toggleCellBlockers();
    
    return { playerOne, playerTwo, playerOneGameboard, playerTwoGameboard };
}

function reInitialiseGame() {
    //initialise buttons
    startGameBtn.disabled = false;
    leaveGameBtn.disabled = true;
    randomPlacementButton.disabled = false;
    arrangeShipsBtn.disabled = false;

    playerLeft = true;

    _modules_display_js__WEBPACK_IMPORTED_MODULE_3__["default"].disableGridBlocker('player-one-gameboard');
    _modules_display_js__WEBPACK_IMPORTED_MODULE_3__["default"].disableGridBlocker('player-two-gameboard');
    _modules_display_js__WEBPACK_IMPORTED_MODULE_3__["default"].hidePlayerInstructions();
    _modules_display_js__WEBPACK_IMPORTED_MODULE_3__["default"].clearAllGameboards();
    _modules_display_js__WEBPACK_IMPORTED_MODULE_3__["default"].clearResults();

    playerOneGameboard.clearGameboard();

    playerTwoGameboard.clearGameboard();

    const reInitialisedObjects = initialiseGame();

    playerOneGameboard = reInitialisedObjects.playerOneGameboard;
    playerTwoGameboard = reInitialisedObjects.playerTwoGameboard;

}

document.addEventListener('OnCellClicked', handleCellClicked); //received from UI on click

function handleCellClicked(e) {
    const gridOwner = e.detail.gridOwner;
    const hitCoordinates = e.detail.coordinates;
    const playerGameboard = gridOwner === 'player-one' ? playerOneGameboard : playerTwoGameboard;
    const isShipHit = attack(playerGameboard, gridOwner, hitCoordinates);

    if(playerGameboard.areAllShipsSunk()) {
        const Winner = gridOwner === 'player-one' ? 'Player Two' : 'Player One';
        _modules_display_js__WEBPACK_IMPORTED_MODULE_3__["default"].handleGameOver(Winner);
        return;
    }

    if(!isShipHit) {
        _modules_display_js__WEBPACK_IMPORTED_MODULE_3__["default"].toggleGridBlockers();
        (0,_modules_gameState_js__WEBPACK_IMPORTED_MODULE_4__.switchTurn)();
        _modules_display_js__WEBPACK_IMPORTED_MODULE_3__["default"].showPlayerTurn();
    }

    isComputersTurn(isShipHit, hitCoordinates);
}

function attack(playerGameboard, gridOwner, coordinates) {
    const [rowNumber, colNumber] = coordinates;
    const { adjacentCells, isShipHit } = playerGameboard.receiveAttack(coordinates);
    markCellsInUI(rowNumber, colNumber, gridOwner, playerGameboard, adjacentCells);
    return isShipHit;
}

function markCellsInUI(rowNumber, colNumber, gridOwner, playerGameboard, adjacentCells) {
    _modules_display_js__WEBPACK_IMPORTED_MODULE_3__["default"].markCell(
        [rowNumber, colNumber],
        gridOwner,
        playerGameboard.gameboard[rowNumber][colNumber]
    );
    if (adjacentCells) {
        adjacentCells.forEach((cell) => {
            const [rowNumber, colNumber] = cell.split(',');
            _modules_display_js__WEBPACK_IMPORTED_MODULE_3__["default"].markCell([rowNumber, colNumber], gridOwner, playerGameboard.gameboard[rowNumber][colNumber]);
        });
    }
}

function isComputersTurn(isShipHit, hitCoordinates) {
    if (_modules_gameState_js__WEBPACK_IMPORTED_MODULE_4__.currentPlayer == 'player-two') {
        playComputersTurn(isShipHit, hitCoordinates);
    }
}

function playComputersTurn(isShipHit, hitCoordinates) {
    let randomCoordinate = [];
    if (isShipHit) {
        randomCoordinate =
            playerOneGameboard.getRandomAdjacentCoordinate(hitCoordinates);
    } else {
        randomCoordinate = playerOneGameboard.getRandomCoordinate();
    }

    const mockEvent = {
        detail: {
            coordinates: randomCoordinate,
            gridOwner: 'player-one',
        },
    };
    setTimeout(() => {
        if(playerLeft) {
            return;
        }
        handleCellClicked(mockEvent);
        _modules_display_js__WEBPACK_IMPORTED_MODULE_3__["default"].highlightAttackedCell(randomCoordinate, 'player-one');
    }, 2000); //delay to simulate "thinking".
}

function placeShipAtRandomCoordinate(ship, playerGameboard) {
    let { randomCoordinate, randomOrientation } = playerGameboard.getRandomCoordinateForShip(ship.size);
    playerGameboard.placeShip(ship, randomCoordinate, randomOrientation);
}

function beginPlay() {
    _modules_display_js__WEBPACK_IMPORTED_MODULE_3__["default"].toggleCellBlockers();
    _modules_display_js__WEBPACK_IMPORTED_MODULE_3__["default"].enableGridBlocker('player-one-gameboard');
    _modules_display_js__WEBPACK_IMPORTED_MODULE_3__["default"].disableGridBlocker('player-two-gameboard');
    _modules_display_js__WEBPACK_IMPORTED_MODULE_3__["default"].showPlayerTurn('player-one');
    
    startGameBtn.disabled = true;
    randomPlacementButton.disabled = true;
    leaveGameBtn.disabled = false;
    arrangeShipsBtn.disabled = true;

    playerLeft = false;
}

startGameBtn.addEventListener('click', beginPlay);

leaveGameBtn.addEventListener('click', reInitialiseGame);

randomPlacementButton.addEventListener('click', arrangeShipsAtRandom);

arrangeShipsBtn.addEventListener('click', () => {
    _modules_display_js__WEBPACK_IMPORTED_MODULE_3__["default"].initialisePlacingShips(playerOneGameboard, 'player-one');

    startGameBtn.disabled = true;
    randomPlacementButton.disabled = true;
    leaveGameBtn.disabled = true;
    arrangeShipsBtn.disabled = true;

});

function arrangeShipsAtRandom() {
    playerOneGameboard.clearGameboard();

    placeShipAtRandomCoordinate(new _modules_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"](2), playerOneGameboard);
    placeShipAtRandomCoordinate(new _modules_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"](3), playerOneGameboard);
    placeShipAtRandomCoordinate(new _modules_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"](3), playerOneGameboard);
    placeShipAtRandomCoordinate(new _modules_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"](4), playerOneGameboard);
    placeShipAtRandomCoordinate(new _modules_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"](5), playerOneGameboard);

    const shipPositions = playerOneGameboard.getShipPositions();

    _modules_display_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateShipsOnGameboard(shipPositions, 'player-one');
}

function changeCtrlBtnsState() {
    startGameBtn.disabled = false;
    randomPlacementButton.disabled = false;
    leaveGameBtn.disabled = true;
    arrangeShipsBtn.disabled = false;
}

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ "./src/modules/ship.js");



const playerTwoInstructions = document.querySelectorAll(`.player-two-instruction`);
const playerOneInstructions = document.querySelectorAll(`.player-one-instruction`);

const playerOneGrid = document.querySelector(`.player-one-gameboard`);
const playerTwoGrid = document.querySelector(`.player-two-gameboard`);

// const gameCtrlButtonSection = document.querySelector('.game-ctrl-section');
const showInstructionsBtn = document.querySelector('.instructions-btn');
const instructionsDialog = document.querySelector('.game-instructions-dialog');
const hideInstructionsBtn = document.querySelector('.close-dialog-btn');
const placeInstructionSection = document.querySelector('.placement-instructions-section');

const playerOneGridCells = Array.from({ length: 10 }, () => Array(10).fill(null));
let lastChosenCells = [];

const Orientation = Object.freeze({
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical',
});

let selectedOrientation = 'horizontal';

let shipSizes = [5, 4, 3, 3, 2];


showInstructionsBtn.addEventListener('click', () => {
    instructionsDialog.showModal();
})

hideInstructionsBtn.addEventListener('click', () => {
    instructionsDialog.close();
})

function displayGameboard(size = 10, gridOwner) {
    createGrid(size, gridOwner);
}

function clearAllGameboards() {
    while (playerOneGrid.firstChild) {
        playerOneGrid.removeChild(playerOneGrid.lastChild);
    }

    while (playerTwoGrid.firstChild) {
        playerTwoGrid.removeChild(playerTwoGrid.lastChild);
    }
}

function clearGameboardContent(gridOwner) {
    const cells = document.querySelectorAll(`[data-owner="${gridOwner}"] .cell`);
    cells.forEach(cell => {
        cell.textContent = '';
    });
}

function createGrid(size, gridOwner) {
    let grid = null;
    if (gridOwner == 'player-one') {
        grid = document.querySelector('.player-one-gameboard');
    } else {
        grid = document.querySelector('.player-two-gameboard');
    }

    if (!grid) {
        return;
    }

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            const gridCell = document.createElement('div');
            gridCell.classList.add(`cell`);
            gridCell.setAttribute('data-row', row);
            gridCell.setAttribute('data-col', col);
            grid.appendChild(gridCell);
            grid.setAttribute('data-owner', gridOwner);
            if (gridOwner == 'player-two') {
                gridCell.style.contentVisibility = 'hidden';
                setUpEventListener(gridCell);
            }
        }
    }
}

function updateShipsOnGameboard(shipPositions, gridOwner) {
    const cells = document.querySelectorAll(`[data-owner="${gridOwner}"] .cell`);
    cells.forEach(cell => {
        cell.textContent = '';
    });
    displayShipsOnGameboard(shipPositions, gridOwner);
}

function displayShipsOnGameboard(shipPositions, gridOwner) {
    shipPositions.forEach((position) => {
        const [row, col] = position.split(',');
        document.querySelector(
            `[data-owner="${gridOwner}"] .cell[data-row="${row}"][data-col="${col}"]`
        ).textContent = 's';
    });
}

function toggleGridBlockers() {
    playerOneGrid.classList.toggle('grid-blocker');
    playerTwoGrid.classList.toggle('grid-blocker');
}

function enableGridBlocker(grid) {
    const playerGrid = grid === 'player-one-gameboard' ? playerOneGrid : playerTwoGrid;
    playerGrid.classList.add('grid-blocker');
}

function disableGridBlocker(grid) {
    const playerGrid = grid === 'player-one-gameboard' ? playerOneGrid : playerTwoGrid;
    playerGrid.classList.remove('grid-blocker');
}

function toggleCellBlockers() {
    const cells = playerTwoGrid.childNodes;
    cells.forEach(cell => {
        cell.classList.toggle('blocker');
    });
}

function showPlayerTurn(player = '') {
    if(player !== '') {
        playerOneInstructions.forEach(playerOneInstruction => {
            playerOneInstruction.classList.remove('hidden');
        });
        return;
    }

    playerOneInstructions.forEach(playerOneInstruction => {
        playerOneInstruction.classList.toggle('hidden');
    });
    
    playerTwoInstructions.forEach(playerTwoInstruction => {
        playerTwoInstruction.classList.toggle('hidden');
    });
}

function hidePlayerInstructions() {
    playerOneInstructions.forEach(playerOneInstruction => {
        playerOneInstruction.classList.add('hidden');
    });

    playerTwoInstructions.forEach(playerTwoInstruction => {
        playerTwoInstruction.classList.add('hidden');
    });
}

function markCell(coordinates, gridOwner, markContent) {
    const [row, col] = coordinates;
    const cell = document.querySelector(
        `[data-owner="${gridOwner}"] .cell[data-row="${row}"][data-col="${col}"]`
    );

    cell.textContent = markContent;

    if (markContent == 'X') {
        cell.style.color = 'red';
        cell.style.fontSize = '32px';
    } else {
        cell.style.fontSize = '12px';
    }

    cell.style.contentVisibility = 'visible';

    cell.removeEventListener('click', handleCellClick);
}

function setUpEventListener(cell) {
    cell.addEventListener('click', handleCellClick);
}

function handleCellClick(e) {
    const cell = e.currentTarget;
    const coordinates = [
        Number(cell.getAttribute('data-row')),
        Number(cell.getAttribute('data-col')),
    ];
    const gridOwner = cell.parentElement.getAttribute('data-owner');
    highlightAttackedCell(coordinates, gridOwner);
    sendEventOnCellClicked(coordinates, gridOwner);
}

function sendEventOnCellClicked(coordinates, gridOwner) {
    const eventOnCellClicked = new CustomEvent('OnCellClicked', {
        detail: { coordinates, gridOwner },
    });
    document.dispatchEvent(eventOnCellClicked);
}

function handleGameOver(winner) {
    const remainingCells = document.querySelectorAll('.cell');
    remainingCells.forEach(cell => {
        cell.removeEventListener('click', handleCellClick);
    })

    const winnerResults = document.querySelector('.winner-results');
    winnerResults.textContent = `${winner} Won!`;
}

function highlightAttackedCell(hitCoordinate, gridOwner) {
    const [row, col] = hitCoordinate;
    document.querySelector(
        `[data-owner="${gridOwner}"] .cell[data-row="${row}"][data-col="${col}"]`
    ).style.border = '3px solid blue';
    setTimeout(() => {
        document.querySelector(
            `[data-owner="${gridOwner}"] .cell[data-row="${row}"][data-col="${col}"]`
        ).style.border = '1px solid #7b7b7b';
    }, 1500);
}

function clearResults() {
    const winnerResults = document.querySelector('.winner-results');
    winnerResults.textContent = '';
}

function initialisePlacingShips(playerGameboard, gridOwner) {
    lastChosenCells = [];
    shipSizes = [5, 4, 3, 3, 2];
    const gridCells = document.querySelectorAll(`[data-owner="${gridOwner}"] .cell`);
    gridCells.forEach(cell => {
        const row = parseInt(cell.getAttribute('data-row'), 10);
        const col = parseInt(cell.getAttribute('data-col'), 10);
        playerOneGridCells[row][col] = cell;
        cell.removeEventListener('click', handleCellClick);
        cell.addEventListener('click', handlePlaceShip);
        cell.addEventListener('mouseover', showShipPlacement);
    });
    playerGameboard.clearGameboard();
    clearGameboardContent('player-one');

    //add confirm and cancel buttons
    const confirmBtn = document.createElement('button');
    confirmBtn.innerHTML = 'Confirm';
    confirmBtn.classList.add('game-ctrl-btn');
    confirmBtn.classList.add('confirm-placement-btn');
    confirmBtn.setAttribute('title', 'Confirm ship positions');
    confirmBtn.addEventListener('click', confirmShipsPlacement);
    confirmBtn.disabled = true;
    
    const cancelBtn = document.createElement('button');
    cancelBtn.innerHTML = 'Cancel';
    cancelBtn.classList.add('game-ctrl-btn');
    cancelBtn.classList.add('cancel-placement-btn');
    cancelBtn.setAttribute('title', 'Cancel placing ships');
    cancelBtn.addEventListener('click', cancelShipsPlacement);

    const placementBtnsDiv = document.createElement('div');
    placementBtnsDiv.classList.add('placement-ctrl-section');

    placementBtnsDiv.appendChild(confirmBtn);
    placementBtnsDiv.appendChild(cancelBtn);

    document.body.appendChild(placementBtnsDiv);

    document.addEventListener('keydown', handleKeyPress);
    
    placeInstructionSection.hidden = false;
}

function handleKeyPress(e) {
    if (e.key === 'q') {
        switchShipOrientation();
    }
}

function switchShipOrientation() {
    selectedOrientation =
        selectedOrientation === Orientation.HORIZONTAL
            ? Orientation.VERTICAL
            : Orientation.HORIZONTAL;
}

function confirmShipsPlacement(e) {
    const confirmBtn = e.currentTarget;
    document.body.removeChild(confirmBtn.parentElement);
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.changeCtrlBtnsState)();
    document.removeEventListener('keydown', handleKeyPress);

    const gridCells = document.querySelectorAll(`[data-owner="player-one"] .cell`);
    gridCells.forEach(cell => {
        // cell.addEventListener('click', handleCellClick);
        cell.removeEventListener('click', handlePlaceShip);
        cell.removeEventListener('mouseover', showShipPlacement);
    });

    placeInstructionSection.hidden = true;
}

function cancelShipsPlacement(e) {
    const cancelBtn = e.currentTarget;
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.reInitialiseGame)();
    document.body.removeChild(cancelBtn.parentElement); //remove placementBtnsDiv
    placeInstructionSection.hidden = true;
}

function handlePlaceShip(e) {
    const chosenCell = e.currentTarget;
    let [coordinateX, coordinateY] = [
        Number(chosenCell.getAttribute('data-row')),
        Number(chosenCell.getAttribute('data-col')),
    ];

    const currentShipSize = shipSizes[0];
    if(!_index_js__WEBPACK_IMPORTED_MODULE_0__.playerOneGameboard.isValidPosition(currentShipSize, [coordinateX, coordinateY], selectedOrientation)) {
        return;
    
    }
    shipSizes.shift();

    if(shipSizes.length === 0) {
        const confirmBtn = document.querySelector('.confirm-placement-btn');
        confirmBtn.disabled = false;
    }

    console.log('placeShip');

    const shipCells = _index_js__WEBPACK_IMPORTED_MODULE_0__.playerOneGameboard.placeShip(new _ship_js__WEBPACK_IMPORTED_MODULE_1__["default"](currentShipSize), [coordinateX, coordinateY], selectedOrientation);
    displayShipsOnGameboard(shipCells, 'player-one');
}

function showShipPlacement(e) {
    const cell = e.currentTarget;
    let [coordinateX, coordinateY] = [
        Number(cell.getAttribute('data-row')),
        Number(cell.getAttribute('data-col')),
    ];

    lastChosenCells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });

    const currentShipSize = shipSizes[0];
    if(!_index_js__WEBPACK_IMPORTED_MODULE_0__.playerOneGameboard.isValidPosition(currentShipSize, [coordinateX, coordinateY], selectedOrientation)) {
        cell.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
        lastChosenCells.push(cell);
        return;
    }

    for(let i = 0; i < currentShipSize; i++) {
        if(selectedOrientation == Orientation.HORIZONTAL) {
            let dY = coordinateY + i;
            let chosenCell = playerOneGridCells[coordinateX][dY];
            chosenCell.style.backgroundColor = 'rgba(0, 255, 0, 0.5)';
            lastChosenCells.push(chosenCell);
        } else {
            let dX = coordinateX + i;
            let chosenCell = playerOneGridCells[dX][coordinateY];
            chosenCell.style.backgroundColor = 'rgba(0, 255, 0, 0.5)';
            lastChosenCells.push(chosenCell);
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    displayGameboard,
    markCell,
    toggleGridBlockers,
    disableGridBlocker,
    enableGridBlocker,
    toggleCellBlockers,
    showPlayerTurn,
    hidePlayerInstructions,
    handleGameOver,
    displayShipsOnGameboard,
    updateShipsOnGameboard,
    clearAllGameboards,
    highlightAttackedCell,
    clearResults,
    initialisePlacingShips,
});


/***/ }),

/***/ "./src/modules/gameState.js":
/*!**********************************!*\
  !*** ./src/modules/gameState.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentPlayer: () => (/* binding */ currentPlayer),
/* harmony export */   setCurrentPlayer: () => (/* binding */ setCurrentPlayer),
/* harmony export */   switchTurn: () => (/* binding */ switchTurn)
/* harmony export */ });
let currentPlayer = '';

function setCurrentPlayer(player) {
    currentPlayer = player;
}

function switchTurn() {
    if (currentPlayer === 'player-one') {
        currentPlayer = 'player-two';
    } else {
        currentPlayer = 'player-one';
    }
}



/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard),
/* harmony export */   Orientation: () => (/* binding */ Orientation)
/* harmony export */ });
const Orientation = Object.freeze({
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical',
});

class Gameboard {
    #ROW_SIZE = 10;
    #COL_SIZE = 10;
    #adjacentCellDeltas = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
    ];
    #relevantAdjacentCellDeltas = [
        [-1, 0],
        [0, -1],
        [0, 1],
        [1, 0],
    ];
    #reservedPositions = new Set();
    #shipPositions = new Set();
    #shipToAdjacentCellsMap = new Map(); //map of ship object to adjacentCellsOfShip set()
    constructor() {
        this.gameboard = new Array(this.#ROW_SIZE)
            .fill(null)
            .map(() => new Array(this.#COL_SIZE).fill(null));
        this.availableCells = this.initializeAvailableCoordinates();
        this.ships = [];
    }

    initializeAvailableCoordinates() {
        const cells = [];
        for (let rowNum = 0; rowNum < this.#ROW_SIZE; rowNum++) {
            for (let colNum = 0; colNum < this.#COL_SIZE; colNum++) {
                cells.push([rowNum, colNum]);
            }
        }
        return cells;
    }

    clearGameboard() {
        this.gameboard = this.gameboard.map((row) => row.fill(null));
        this.#reservedPositions.clear();
        this.#shipPositions.clear();
        this.#shipToAdjacentCellsMap.clear();
        // this.ships.clear();
    }

    getAdjacentCells(position, adjacentDeltas) {
        let [currentX, currentY] = position;
        const adjacentCells = [];
        adjacentDeltas.forEach((cellCoordinates) => {
            let [adjacentDeltaX, adjacentDeltaY] = cellCoordinates;
            let adjacentX = currentX + adjacentDeltaX;
            let adjacentY = currentY + adjacentDeltaY;
            if (
                adjacentX >= 0 &&
                adjacentX <= 9 &&
                adjacentY >= 0 &&
                adjacentY <= 9
            ) {
                let adjacentCellsCoordinate = [adjacentX, adjacentY];
                adjacentCells.push(adjacentCellsCoordinate);
            }
        });

        return adjacentCells;
    }

    isValidPosition(shipLength, position, orientation) {
        let [rowNumber, colNumber] = position;

        //check if position is already filled or is adjacent position of filled cell.
        for (let i = 0; i < shipLength; i++) {
            if (orientation == Orientation.HORIZONTAL) {
                let dPosition = [rowNumber, colNumber + i];
                if (
                    this.#reservedPositions.has(dPosition.toString()) ||
                    this.#shipPositions.has(dPosition.toString())
                ) {
                    return false;
                }
            } else {
                let dPosition = [rowNumber + i, colNumber];
                if (
                    this.#reservedPositions.has(dPosition.toString()) ||
                    this.#shipPositions.has(dPosition.toString())
                ) {
                    return false;
                }
            }
        }

        //check if its length can go out of bounds;
        if (
            orientation == Orientation.HORIZONTAL &&
            colNumber + shipLength > this.#ROW_SIZE
        ) {
            return false;
        } else if (
            orientation == Orientation.VERTICAL &&
            rowNumber + shipLength > this.#COL_SIZE
        ) {
            return false;
        }

        return true;
    }

    placeShip(ship, position, orientation) {
        if (!this.isValidPosition(ship.size, position, orientation)) {
            return null;
        }

        let [rowNumber, colNumber] = position;
        let shipLength = ship.size;
        let allAdjacentCellsOfShip = new Set();
        const currentShipCells = new Set();

        if (orientation == Orientation.HORIZONTAL) {
            for (let i = 0; i < shipLength; i++) {
                this.gameboard[rowNumber][colNumber] = ship;
                this.#shipPositions.add([rowNumber, colNumber].toString());
                currentShipCells.add([rowNumber, colNumber].toString());
                let adjacentCells = this.getAdjacentCells(
                    [rowNumber, colNumber],
                    this.#adjacentCellDeltas
                );
                adjacentCells.forEach((cell) => {
                    this.#reservedPositions.add(cell.toString());
                    allAdjacentCellsOfShip.add(cell.toString());
                });
                colNumber++;
            }
            this.ships.push(ship);
        } else if (orientation == Orientation.VERTICAL) {
            for (let i = 0; i < shipLength; i++) {
                this.gameboard[rowNumber][colNumber] = ship;
                this.#shipPositions.add([rowNumber, colNumber].toString());
                currentShipCells.add([rowNumber, colNumber].toString());
                let adjacentCells = this.getAdjacentCells(
                    [rowNumber, colNumber],
                    this.#adjacentCellDeltas
                );
                adjacentCells.forEach((cell) => {
                    this.#reservedPositions.add(cell.toString());
                    allAdjacentCellsOfShip.add(cell.toString());
                });
                rowNumber++;
            }
            this.ships.push(ship);
        } else {
            return null; //invalid orientation
        }

        //remove all cells that have ships
        allAdjacentCellsOfShip.forEach((cell) => {
            const [row, col] = cell.split(',');
            if (this.gameboard[row][col] !== null) {
                allAdjacentCellsOfShip.delete(cell);
            }
        });

        this.#shipToAdjacentCellsMap.set(ship, allAdjacentCellsOfShip);
        return currentShipCells;
    }

    receiveAttack(hitCoordinate) {
        // console.log(hitCoordinate);
        let [hitCoordinateX, hitCoordinateY] = hitCoordinate;
        let target = this.gameboard[hitCoordinateX][hitCoordinateY];
        if (target == null) {
            this.gameboard[hitCoordinateX][hitCoordinateY] = 'O';
            return { adjacentCells: null, isShipHit: false };
        }

        target.hit();
        this.gameboard[hitCoordinateX][hitCoordinateY] = 'X';

        if (this.areAllShipsSunk()) {
            //gameover, announce winner
            console.log('Gameover');
        }
        if (target.isSunk()) {
            const adjacentCellsSet = this.#shipToAdjacentCellsMap.get(target);
            adjacentCellsSet.forEach((cell) => {
                const [row, col] = cell.split(',');
                this.gameboard[row][col] = 'O';
                this.removeCellFromAvailableCells([row, col]);
            });
            return { adjacentCells: adjacentCellsSet, isShipHit: true };
        }
        return { adjacentCells: null, isShipHit: true };
    }

    areAllShipsSunk() {
        return this.ships.every((ship) => ship.isSunkStatus);
    }

    getShipPositions(logShipPositions = false) {
        if(logShipPositions) console.log(this.#shipPositions);
        return this.#shipPositions;
    }

    getRandomCoordinateForShip(shipLength) {
        if (this.availableCells.length === 0) {
            throw new Error('No available cells to place ship');
        }

        const MAX_RETRIES = 100;
        let attempts = 0;

        while (attempts < MAX_RETRIES) {
            const randomOrientation = this.getRandomOrientation();

            const rangeX =
                randomOrientation === Orientation.HORIZONTAL
                    ? this.#ROW_SIZE
                    : this.#ROW_SIZE - (shipLength - 1);
            const rangeY =
                randomOrientation === Orientation.HORIZONTAL
                    ? this.#COL_SIZE - (shipLength - 1)
                    : this.#COL_SIZE;
            const randomCoordinate = this.getRandomCoordinateInRange(
                rangeX,
                rangeY
            );

            if (
                this.isValidPosition(
                    shipLength,
                    randomCoordinate,
                    randomOrientation
                )
            ) {
                return { randomCoordinate, randomOrientation };
            }

            attempts++;
        }

        throw new Error('Failed to find valid coordinate for ship placement');
    }

    getRandomOrientation() {
        return Math.random() < 0.5
            ? Orientation.HORIZONTAL
            : Orientation.VERTICAL;
    }

    getRandomCoordinateInRange(rangeX, rangeY) {
        let x = Math.floor(Math.random() * rangeX);
        let y = Math.floor(Math.random() * rangeY);
        return [x, y];
    }

    getRandomCoordinate() {
        if (this.availableCells.length === 0) {
            throw new Error('No more available cells');
        }

        let randomIndex = Math.floor(
            Math.random() * this.availableCells.length
        );

        let randomCoordinate = this.availableCells[randomIndex];
        this.availableCells.splice(randomIndex, 1);

        return randomCoordinate;
    }

    getRandomAdjacentCoordinate(hitCoordinate) {
        const allAdjacentCoordinates =
            this.getRelevantAdjacentCoordinates(hitCoordinate);
        if (!allAdjacentCoordinates || allAdjacentCoordinates.length === 0) {
            return this.getRandomCoordinate();
        }

        const randomIndex = Math.floor(
            Math.random() * allAdjacentCoordinates.length
        );

        const randomAdjacentCoordinate = allAdjacentCoordinates[randomIndex];

        this.removeCellFromAvailableCells(randomAdjacentCoordinate);

        return randomAdjacentCoordinate;
    }

    getRelevantAdjacentCoordinates(hitCoordinate) {
        const allAdjacentCoordinates = this.getAdjacentCells(
            hitCoordinate,
            this.#relevantAdjacentCellDeltas
        );
        const relevantAdjacentCoordinates = allAdjacentCoordinates.filter(
            (coordinate) =>
                this.gameboard[coordinate[0]][coordinate[1]] !== 'X' &&
                this.gameboard[coordinate[0]][coordinate[1]] !== 'O'
        );
        return relevantAdjacentCoordinates;
    }

    removeCellFromAvailableCells(cellToRemove) {
        this.availableCells = this.availableCells.filter(
            (availableCell) =>
                !(
                    availableCell[0] == cellToRemove[0] &&
                    availableCell[1] == cellToRemove[1]
                )
        );
    }
}




/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/modules/gameboard.js");


class Player {
    constructor(type) {
        this.type = type;
        this.gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Ship {
    constructor(size, hitCount = 0, isSunkStatus = false) {
        this.size = size;
        this.hitCount = hitCount;
        this.isSunkStatus = isSunkStatus;
    }

    hit() {
        this.hitCount++;
        this.isSunkStatus = this.isSunk();
        return;
    }

    isSunk() {
        return this.hitCount == this.size;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsMElBQW9EO0FBQ2hHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLDhIQUE4SDtBQUM5SDtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sd0ZBQXdGLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLE9BQU8sVUFBVSxLQUFL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OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZVN0YXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvQW5kcm9pZEFzc2Fzc2luLVdYWFkudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CZWJhcytOZXVlJmRpc3BsYXk9c3dhcCcpOyAqL1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0FuZHJvaWQtQXNzYXNzaW4nO1xyXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCdvcGVudHlwZScpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuKiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYTtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbjogMzBweCBhdXRvIDMwcHg7XHJcbn1cclxuXHJcbmhlYWRlciBoMSB7XHJcbiAgICBmb250LWZhbWlseTogJ0FuZHJvaWQtQXNzYXNzaW4nLCBzYW5zLXNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuLm1haW4tc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogZmxleC1kaXJlY3Rpb246IDsgKi9cclxuICAgIGhlaWdodDogNDUwcHg7XHJcbn1cclxuXHJcbi5nYW1lLWN0cmwtc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG8gMTAwcHg7XHJcbn1cclxuXHJcbi5nYW1lLWN0cmwtYnRuIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNCwgMjM0LCAyMzQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDAsIDApO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uZ2FtZS1jdHJsLWJ0bjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjAsIDYwLCA2MCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5nYW1lYm9hcmRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZ2FwOiA1MHB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiA1MHB4IDUwcHggMzBweDtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cclxufVxyXG5cclxuLnBsYXllci1vbmUtaW5zdHJ1Y3Rpb24sIFxyXG4ucGxheWVyLXR3by1pbnN0cnVjdGlvbixcclxuLnBsYXllci10d28taW5zdHJ1Y3Rpb24tbm90LW5lZWRlZCB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxufVxyXG5cclxuXHJcbi5wbGF5ZXItZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcclxufVxyXG5cclxuLmNlbGwge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3YjdiN2I7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbn1cclxuXHJcbi5jZWxsOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcbi5wbGFjZW1lbnQtaW5zdHJ1Y3Rpb25zLXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luOiA1MHB4IDMwcHggNTBweCAxMHB4O1xyXG59XHJcblxyXG4ucGxhY2VtZW50LWluc3RydWN0aW9ucy1saXN0IHtcclxuICAgIC8qIG1hcmdpbjogNTBweCAyMHB4OyAqL1xyXG4gICAgbGlzdC1zdHlsZTogZGVjaW1hbDtcclxufVxyXG5cclxuLnBsYWNlbWVudC1pbnN0cnVjdGlvbnMtbGlzdCA+IGxpIHtcclxuICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLnBsYWNlbWVudC1jdHJsLXNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMCA0MTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5yZXN1bHRzIHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5kaWFsb2cge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG59XHJcblxyXG5kaWFsb2cgaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLmdhbWUtaW5zdHJ1Y3Rpb25zLWRpYWxvZyA+IHVsIHtcclxuICAgIG1hcmdpbjogNTBweCA2MHB4O1xyXG4gICAgbGlzdC1zdHlsZTogZGVjaW1hbDtcclxufVxyXG5cclxuLmluc3RydWN0aW9ucy1saXN0ID4gbGkge1xyXG4gICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4uZ2FtZXBsYXktcnVsZXMgbGkge1xyXG4gICAgbWFyZ2luOiAyMHB4IDAgMCAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLmRpYWxvZy1mb290ZXIge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbn1cclxuXHJcbi5jbG9zZS1kaWFsb2ctYnRuIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLyogZm9yIGdyaWRzICovXHJcbi5ncmlkLWJsb2NrZXIge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi8qIGZvciBjZWxscyAqL1xyXG4uYmxvY2tlciB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLyogZm9yIHBsYXllciB0dXJuIGluc3RydWN0aW9ucyAqL1xyXG4uaGlkZGVuIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxRkFBcUY7O0FBRXJGO0lBQ0ksK0JBQStCO0lBQy9CLCtEQUFnRTtJQUNoRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVBOzs7SUFHSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQSxjQUFjO0FBQ2Q7SUFDSSxvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQjs7QUFFQSxjQUFjO0FBQ2Q7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUEsaUNBQWlDO0FBQ2pDO0lBQ0ksa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlYmFzK05ldWUmZGlzcGxheT1zd2FwJyk7ICovXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQW5kcm9pZC1Bc3Nhc3Npbic7XFxyXFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9BbmRyb2lkQXNzYXNzaW4tV1hYWS50dGYnKSBmb3JtYXQoJ29wZW50eXBlJyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGgxIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdBbmRyb2lkLUFzc2Fzc2luJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC8qIGZsZXgtZGlyZWN0aW9uOiA7ICovXFxyXFxuICAgIGhlaWdodDogNDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWN0cmwtc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvIDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1jdHJsLWJ0biB7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNCwgMjM0LCAyMzQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1jdHJsLWJ0bjpub3QoOmRpc2FibGVkKTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MCwgNjAsIDYwKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmRzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIG1hcmdpbjogNTBweCA1MHB4IDMwcHg7XFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci1vbmUtaW5zdHJ1Y3Rpb24sIFxcclxcbi5wbGF5ZXItdHdvLWluc3RydWN0aW9uLFxcclxcbi5wbGF5ZXItdHdvLWluc3RydWN0aW9uLW5vdC1uZWVkZWQge1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucGxheWVyLWdyaWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzdiN2I3YjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICB3aWR0aDogMzZweDtcXHJcXG4gICAgaGVpZ2h0OiAzNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxyXFxufVxcclxcblxcclxcbi5wbGFjZW1lbnQtaW5zdHJ1Y3Rpb25zLXNlY3Rpb24ge1xcclxcbiAgICBtYXJnaW46IDUwcHggMzBweCA1MHB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wbGFjZW1lbnQtaW5zdHJ1Y3Rpb25zLWxpc3Qge1xcclxcbiAgICAvKiBtYXJnaW46IDUwcHggMjBweDsgKi9cXHJcXG4gICAgbGlzdC1zdHlsZTogZGVjaW1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYWNlbWVudC1pbnN0cnVjdGlvbnMtbGlzdCA+IGxpIHtcXHJcXG4gICAgbWFyZ2luOiAzMHB4IDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxufVxcclxcblxcclxcbi5wbGFjZW1lbnQtY3RybC1zZWN0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDM1MHB4O1xcclxcbiAgICBtYXJnaW46IDAgMCAwIDQxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5yZXN1bHRzIHtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIG1hcmdpbjogYXV0byBhdXRvO1xcclxcbiAgICB3aWR0aDogNjAwcHg7XFxyXFxuICAgIGhlaWdodDogNzAwcHg7XFxyXFxufVxcclxcblxcclxcbmRpYWxvZyBoZWFkZXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtaW5zdHJ1Y3Rpb25zLWRpYWxvZyA+IHVsIHtcXHJcXG4gICAgbWFyZ2luOiA1MHB4IDYwcHg7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IGRlY2ltYWw7XFxyXFxufVxcclxcblxcclxcbi5pbnN0cnVjdGlvbnMtbGlzdCA+IGxpIHtcXHJcXG4gICAgbWFyZ2luOiAzMHB4IDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxufVxcclxcblxcclxcbi5nYW1lcGxheS1ydWxlcyBsaSB7XFxyXFxuICAgIG1hcmdpbjogMjBweCAwIDAgMjBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZy1mb290ZXIge1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtZGlhbG9nLWJ0biB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9yIGdyaWRzICovXFxyXFxuLmdyaWQtYmxvY2tlciB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICBvcGFjaXR5OiAwLjM7XFxyXFxufVxcclxcblxcclxcbi8qIGZvciBjZWxscyAqL1xcclxcbi5ibG9ja2VyIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIGZvciBwbGF5ZXIgdHVybiBpbnN0cnVjdGlvbnMgKi9cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL21vZHVsZXMvcGxheWVyLmpzJztcclxuaW1wb3J0IFNoaXAgZnJvbSAnLi9tb2R1bGVzL3NoaXAuanMnO1xyXG4vLyBpbXBvcnQgeyBPcmllbnRhdGlvbiB9IGZyb20gJy4vbW9kdWxlcy9nYW1lYm9hcmQuanMnO1xyXG5pbXBvcnQgZGlzcGxheSBmcm9tICcuL21vZHVsZXMvZGlzcGxheS5qcyc7XHJcbmltcG9ydCB7XHJcbiAgICBjdXJyZW50UGxheWVyLFxyXG4gICAgc2V0Q3VycmVudFBsYXllcixcclxuICAgIHN3aXRjaFR1cm4sXHJcbn0gZnJvbSAnLi9tb2R1bGVzL2dhbWVTdGF0ZS5qcyc7XHJcblxyXG5jb25zdCBzdGFydEdhbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtZ2FtZS1idG4nKTtcclxuY29uc3QgbGVhdmVHYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlYXZlLWdhbWUtYnRuJyk7XHJcbmxlYXZlR2FtZUJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbmxldCBwbGF5ZXJMZWZ0ID0gZmFsc2U7XHJcbmNvbnN0IHJhbmRvbVBsYWNlbWVudEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5kb21pc2UtYnRuJyk7XHJcbmNvbnN0IGFycmFuZ2VTaGlwc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJhbmdlLXNoaXBzLWJ0bicpO1xyXG5cclxuLy9pbml0aWFsaXNlIHRoZSBnYW1lXHJcbmNvbnN0IGluaXRpYWxpc2VkT2JqZWN0cyA9IGluaXRpYWxpc2VHYW1lKCk7XHJcbmV4cG9ydCBsZXQgcGxheWVyT25lR2FtZWJvYXJkID0gaW5pdGlhbGlzZWRPYmplY3RzLnBsYXllck9uZUdhbWVib2FyZDtcclxubGV0IHBsYXllclR3b0dhbWVib2FyZCA9IGluaXRpYWxpc2VkT2JqZWN0cy5wbGF5ZXJUd29HYW1lYm9hcmQ7XHJcblxyXG5zZXRDdXJyZW50UGxheWVyKCdwbGF5ZXItb25lJyk7XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXNlUGxheWVycygpIHtcclxuICAgIGNvbnN0IHBsYXllck9uZSA9IG5ldyBQbGF5ZXIoJ3BsYXllci1vbmUnKTtcclxuXHJcbiAgICBjb25zdCBwbGF5ZXJUd28gPSBuZXcgUGxheWVyKCdwbGF5ZXItdHdvJyk7XHJcblxyXG4gICAgc2V0Q3VycmVudFBsYXllcigncGxheWVyLW9uZScpO1xyXG5cclxuXHJcbiAgICByZXR1cm4geyBwbGF5ZXJPbmUsIHBsYXllclR3byB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXNlR2FtZWJvYXJkcyhwbGF5ZXJPbmUsIHBsYXllclR3bykge1xyXG4gICAgXHJcbiAgICAvKiBzZXR1cCBwbGF5ZXIgb25lIGdhbWVib2FyZCAqL1xyXG4gICAgY29uc3QgcGxheWVyT25lR2FtZWJvYXJkID0gcGxheWVyT25lLmdhbWVib2FyZDtcclxuICAgIFxyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDIpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDMpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDMpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDQpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDUpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG5cclxuICAgIC8qIHNldHVwIHBsYXllciB0d28gZ2FtZWJvYXJkICovXHJcbiAgICBjb25zdCBwbGF5ZXJUd29HYW1lYm9hcmQgPSBwbGF5ZXJUd28uZ2FtZWJvYXJkO1xyXG5cclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCgyKSwgcGxheWVyVHdvR2FtZWJvYXJkKTtcclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCgzKSwgcGxheWVyVHdvR2FtZWJvYXJkKTtcclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCgzKSwgcGxheWVyVHdvR2FtZWJvYXJkKTtcclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCg0KSwgcGxheWVyVHdvR2FtZWJvYXJkKTtcclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCg1KSwgcGxheWVyVHdvR2FtZWJvYXJkKTtcclxuXHJcbiAgICByZXR1cm4geyBwbGF5ZXJPbmVHYW1lYm9hcmQsIHBsYXllclR3b0dhbWVib2FyZCB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXNlR2FtZSgpIHtcclxuICAgIGNvbnN0IHsgcGxheWVyT25lLCBwbGF5ZXJUd28gfSA9IGluaXRpYWxpc2VQbGF5ZXJzKCk7XHJcbiAgICBjb25zdCB7IHBsYXllck9uZUdhbWVib2FyZCwgcGxheWVyVHdvR2FtZWJvYXJkIH0gPSBpbml0aWFsaXNlR2FtZWJvYXJkcyhwbGF5ZXJPbmUsIHBsYXllclR3byk7XHJcblxyXG4gICAgLyogZGlzcGxheSBwbGF5ZXIgb25lIGdhbWVib2FyZCAqL1xyXG4gICAgY29uc3QgcGxheWVyT25lU2hpcFBvc2l0aW9ucyA9IHBsYXllck9uZUdhbWVib2FyZC5nZXRTaGlwUG9zaXRpb25zKCk7XHJcbiAgICBcclxuICAgIGRpc3BsYXkuZGlzcGxheUdhbWVib2FyZCh1bmRlZmluZWQsICdwbGF5ZXItb25lJyk7XHJcbiAgICBkaXNwbGF5LmRpc3BsYXlTaGlwc09uR2FtZWJvYXJkKHBsYXllck9uZVNoaXBQb3NpdGlvbnMsICdwbGF5ZXItb25lJyk7XHJcbiAgICBcclxuICAgIC8qIGRpc3BsYXkgcGxheWVyIHR3byBnYW1lYm9hcmQgKi9cclxuICAgIGNvbnN0IHBsYXllclR3b1NoaXBQb3NpdGlvbnMgPSBwbGF5ZXJUd29HYW1lYm9hcmQuZ2V0U2hpcFBvc2l0aW9ucygpO1xyXG4gICAgXHJcbiAgICBkaXNwbGF5LmRpc3BsYXlHYW1lYm9hcmQodW5kZWZpbmVkLCAncGxheWVyLXR3bycpO1xyXG4gICAgZGlzcGxheS5kaXNwbGF5U2hpcHNPbkdhbWVib2FyZChwbGF5ZXJUd29TaGlwUG9zaXRpb25zLCAncGxheWVyLXR3bycpO1xyXG5cclxuICAgIGRpc3BsYXkudG9nZ2xlQ2VsbEJsb2NrZXJzKCk7XHJcbiAgICBcclxuICAgIHJldHVybiB7IHBsYXllck9uZSwgcGxheWVyVHdvLCBwbGF5ZXJPbmVHYW1lYm9hcmQsIHBsYXllclR3b0dhbWVib2FyZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVJbml0aWFsaXNlR2FtZSgpIHtcclxuICAgIC8vaW5pdGlhbGlzZSBidXR0b25zXHJcbiAgICBzdGFydEdhbWVCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIGxlYXZlR2FtZUJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICByYW5kb21QbGFjZW1lbnRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIGFycmFuZ2VTaGlwc0J0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgIHBsYXllckxlZnQgPSB0cnVlO1xyXG5cclxuICAgIGRpc3BsYXkuZGlzYWJsZUdyaWRCbG9ja2VyKCdwbGF5ZXItb25lLWdhbWVib2FyZCcpO1xyXG4gICAgZGlzcGxheS5kaXNhYmxlR3JpZEJsb2NrZXIoJ3BsYXllci10d28tZ2FtZWJvYXJkJyk7XHJcbiAgICBkaXNwbGF5LmhpZGVQbGF5ZXJJbnN0cnVjdGlvbnMoKTtcclxuICAgIGRpc3BsYXkuY2xlYXJBbGxHYW1lYm9hcmRzKCk7XHJcbiAgICBkaXNwbGF5LmNsZWFyUmVzdWx0cygpO1xyXG5cclxuICAgIHBsYXllck9uZUdhbWVib2FyZC5jbGVhckdhbWVib2FyZCgpO1xyXG5cclxuICAgIHBsYXllclR3b0dhbWVib2FyZC5jbGVhckdhbWVib2FyZCgpO1xyXG5cclxuICAgIGNvbnN0IHJlSW5pdGlhbGlzZWRPYmplY3RzID0gaW5pdGlhbGlzZUdhbWUoKTtcclxuXHJcbiAgICBwbGF5ZXJPbmVHYW1lYm9hcmQgPSByZUluaXRpYWxpc2VkT2JqZWN0cy5wbGF5ZXJPbmVHYW1lYm9hcmQ7XHJcbiAgICBwbGF5ZXJUd29HYW1lYm9hcmQgPSByZUluaXRpYWxpc2VkT2JqZWN0cy5wbGF5ZXJUd29HYW1lYm9hcmQ7XHJcblxyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdPbkNlbGxDbGlja2VkJywgaGFuZGxlQ2VsbENsaWNrZWQpOyAvL3JlY2VpdmVkIGZyb20gVUkgb24gY2xpY2tcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNlbGxDbGlja2VkKGUpIHtcclxuICAgIGNvbnN0IGdyaWRPd25lciA9IGUuZGV0YWlsLmdyaWRPd25lcjtcclxuICAgIGNvbnN0IGhpdENvb3JkaW5hdGVzID0gZS5kZXRhaWwuY29vcmRpbmF0ZXM7XHJcbiAgICBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBncmlkT3duZXIgPT09ICdwbGF5ZXItb25lJyA/IHBsYXllck9uZUdhbWVib2FyZCA6IHBsYXllclR3b0dhbWVib2FyZDtcclxuICAgIGNvbnN0IGlzU2hpcEhpdCA9IGF0dGFjayhwbGF5ZXJHYW1lYm9hcmQsIGdyaWRPd25lciwgaGl0Q29vcmRpbmF0ZXMpO1xyXG5cclxuICAgIGlmKHBsYXllckdhbWVib2FyZC5hcmVBbGxTaGlwc1N1bmsoKSkge1xyXG4gICAgICAgIGNvbnN0IFdpbm5lciA9IGdyaWRPd25lciA9PT0gJ3BsYXllci1vbmUnID8gJ1BsYXllciBUd28nIDogJ1BsYXllciBPbmUnO1xyXG4gICAgICAgIGRpc3BsYXkuaGFuZGxlR2FtZU92ZXIoV2lubmVyKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYoIWlzU2hpcEhpdCkge1xyXG4gICAgICAgIGRpc3BsYXkudG9nZ2xlR3JpZEJsb2NrZXJzKCk7XHJcbiAgICAgICAgc3dpdGNoVHVybigpO1xyXG4gICAgICAgIGRpc3BsYXkuc2hvd1BsYXllclR1cm4oKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0NvbXB1dGVyc1R1cm4oaXNTaGlwSGl0LCBoaXRDb29yZGluYXRlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0dGFjayhwbGF5ZXJHYW1lYm9hcmQsIGdyaWRPd25lciwgY29vcmRpbmF0ZXMpIHtcclxuICAgIGNvbnN0IFtyb3dOdW1iZXIsIGNvbE51bWJlcl0gPSBjb29yZGluYXRlcztcclxuICAgIGNvbnN0IHsgYWRqYWNlbnRDZWxscywgaXNTaGlwSGl0IH0gPSBwbGF5ZXJHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcyk7XHJcbiAgICBtYXJrQ2VsbHNJblVJKHJvd051bWJlciwgY29sTnVtYmVyLCBncmlkT3duZXIsIHBsYXllckdhbWVib2FyZCwgYWRqYWNlbnRDZWxscyk7XHJcbiAgICByZXR1cm4gaXNTaGlwSGl0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXJrQ2VsbHNJblVJKHJvd051bWJlciwgY29sTnVtYmVyLCBncmlkT3duZXIsIHBsYXllckdhbWVib2FyZCwgYWRqYWNlbnRDZWxscykge1xyXG4gICAgZGlzcGxheS5tYXJrQ2VsbChcclxuICAgICAgICBbcm93TnVtYmVyLCBjb2xOdW1iZXJdLFxyXG4gICAgICAgIGdyaWRPd25lcixcclxuICAgICAgICBwbGF5ZXJHYW1lYm9hcmQuZ2FtZWJvYXJkW3Jvd051bWJlcl1bY29sTnVtYmVyXVxyXG4gICAgKTtcclxuICAgIGlmIChhZGphY2VudENlbGxzKSB7XHJcbiAgICAgICAgYWRqYWNlbnRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtyb3dOdW1iZXIsIGNvbE51bWJlcl0gPSBjZWxsLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgIGRpc3BsYXkubWFya0NlbGwoW3Jvd051bWJlciwgY29sTnVtYmVyXSwgZ3JpZE93bmVyLCBwbGF5ZXJHYW1lYm9hcmQuZ2FtZWJvYXJkW3Jvd051bWJlcl1bY29sTnVtYmVyXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQ29tcHV0ZXJzVHVybihpc1NoaXBIaXQsIGhpdENvb3JkaW5hdGVzKSB7XHJcbiAgICBpZiAoY3VycmVudFBsYXllciA9PSAncGxheWVyLXR3bycpIHtcclxuICAgICAgICBwbGF5Q29tcHV0ZXJzVHVybihpc1NoaXBIaXQsIGhpdENvb3JkaW5hdGVzKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGxheUNvbXB1dGVyc1R1cm4oaXNTaGlwSGl0LCBoaXRDb29yZGluYXRlcykge1xyXG4gICAgbGV0IHJhbmRvbUNvb3JkaW5hdGUgPSBbXTtcclxuICAgIGlmIChpc1NoaXBIaXQpIHtcclxuICAgICAgICByYW5kb21Db29yZGluYXRlID1cclxuICAgICAgICAgICAgcGxheWVyT25lR2FtZWJvYXJkLmdldFJhbmRvbUFkamFjZW50Q29vcmRpbmF0ZShoaXRDb29yZGluYXRlcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJhbmRvbUNvb3JkaW5hdGUgPSBwbGF5ZXJPbmVHYW1lYm9hcmQuZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vY2tFdmVudCA9IHtcclxuICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IHJhbmRvbUNvb3JkaW5hdGUsXHJcbiAgICAgICAgICAgIGdyaWRPd25lcjogJ3BsYXllci1vbmUnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYocGxheWVyTGVmdCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhhbmRsZUNlbGxDbGlja2VkKG1vY2tFdmVudCk7XHJcbiAgICAgICAgZGlzcGxheS5oaWdobGlnaHRBdHRhY2tlZENlbGwocmFuZG9tQ29vcmRpbmF0ZSwgJ3BsYXllci1vbmUnKTtcclxuICAgIH0sIDIwMDApOyAvL2RlbGF5IHRvIHNpbXVsYXRlIFwidGhpbmtpbmdcIi5cclxufVxyXG5cclxuZnVuY3Rpb24gcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKHNoaXAsIHBsYXllckdhbWVib2FyZCkge1xyXG4gICAgbGV0IHsgcmFuZG9tQ29vcmRpbmF0ZSwgcmFuZG9tT3JpZW50YXRpb24gfSA9IHBsYXllckdhbWVib2FyZC5nZXRSYW5kb21Db29yZGluYXRlRm9yU2hpcChzaGlwLnNpemUpO1xyXG4gICAgcGxheWVyR2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwLCByYW5kb21Db29yZGluYXRlLCByYW5kb21PcmllbnRhdGlvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJlZ2luUGxheSgpIHtcclxuICAgIGRpc3BsYXkudG9nZ2xlQ2VsbEJsb2NrZXJzKCk7XHJcbiAgICBkaXNwbGF5LmVuYWJsZUdyaWRCbG9ja2VyKCdwbGF5ZXItb25lLWdhbWVib2FyZCcpO1xyXG4gICAgZGlzcGxheS5kaXNhYmxlR3JpZEJsb2NrZXIoJ3BsYXllci10d28tZ2FtZWJvYXJkJyk7XHJcbiAgICBkaXNwbGF5LnNob3dQbGF5ZXJUdXJuKCdwbGF5ZXItb25lJyk7XHJcbiAgICBcclxuICAgIHN0YXJ0R2FtZUJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICByYW5kb21QbGFjZW1lbnRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgbGVhdmVHYW1lQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBhcnJhbmdlU2hpcHNCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIHBsYXllckxlZnQgPSBmYWxzZTtcclxufVxyXG5cclxuc3RhcnRHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYmVnaW5QbGF5KTtcclxuXHJcbmxlYXZlR2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlSW5pdGlhbGlzZUdhbWUpO1xyXG5cclxucmFuZG9tUGxhY2VtZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXJyYW5nZVNoaXBzQXRSYW5kb20pO1xyXG5cclxuYXJyYW5nZVNoaXBzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZGlzcGxheS5pbml0aWFsaXNlUGxhY2luZ1NoaXBzKHBsYXllck9uZUdhbWVib2FyZCwgJ3BsYXllci1vbmUnKTtcclxuXHJcbiAgICBzdGFydEdhbWVCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgcmFuZG9tUGxhY2VtZW50QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGxlYXZlR2FtZUJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBhcnJhbmdlU2hpcHNCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxufSk7XHJcblxyXG5mdW5jdGlvbiBhcnJhbmdlU2hpcHNBdFJhbmRvbSgpIHtcclxuICAgIHBsYXllck9uZUdhbWVib2FyZC5jbGVhckdhbWVib2FyZCgpO1xyXG5cclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCgyKSwgcGxheWVyT25lR2FtZWJvYXJkKTtcclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCgzKSwgcGxheWVyT25lR2FtZWJvYXJkKTtcclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCgzKSwgcGxheWVyT25lR2FtZWJvYXJkKTtcclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCg0KSwgcGxheWVyT25lR2FtZWJvYXJkKTtcclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCg1KSwgcGxheWVyT25lR2FtZWJvYXJkKTtcclxuXHJcbiAgICBjb25zdCBzaGlwUG9zaXRpb25zID0gcGxheWVyT25lR2FtZWJvYXJkLmdldFNoaXBQb3NpdGlvbnMoKTtcclxuXHJcbiAgICBkaXNwbGF5LnVwZGF0ZVNoaXBzT25HYW1lYm9hcmQoc2hpcFBvc2l0aW9ucywgJ3BsYXllci1vbmUnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUN0cmxCdG5zU3RhdGUoKSB7XHJcbiAgICBzdGFydEdhbWVCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIHJhbmRvbVBsYWNlbWVudEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgbGVhdmVHYW1lQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGFycmFuZ2VTaGlwc0J0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG59IiwiaW1wb3J0IHsgcmVJbml0aWFsaXNlR2FtZSwgY2hhbmdlQ3RybEJ0bnNTdGF0ZSwgcGxheWVyT25lR2FtZWJvYXJkIH0gZnJvbSAnLi4vaW5kZXguanMnXHJcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XHJcblxyXG5jb25zdCBwbGF5ZXJUd29JbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucGxheWVyLXR3by1pbnN0cnVjdGlvbmApO1xyXG5jb25zdCBwbGF5ZXJPbmVJbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucGxheWVyLW9uZS1pbnN0cnVjdGlvbmApO1xyXG5cclxuY29uc3QgcGxheWVyT25lR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXItb25lLWdhbWVib2FyZGApO1xyXG5jb25zdCBwbGF5ZXJUd29HcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllci10d28tZ2FtZWJvYXJkYCk7XHJcblxyXG4vLyBjb25zdCBnYW1lQ3RybEJ1dHRvblNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1jdHJsLXNlY3Rpb24nKTtcclxuY29uc3Qgc2hvd0luc3RydWN0aW9uc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnN0cnVjdGlvbnMtYnRuJyk7XHJcbmNvbnN0IGluc3RydWN0aW9uc0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWluc3RydWN0aW9ucy1kaWFsb2cnKTtcclxuY29uc3QgaGlkZUluc3RydWN0aW9uc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1kaWFsb2ctYnRuJyk7XHJcbmNvbnN0IHBsYWNlSW5zdHJ1Y3Rpb25TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlbWVudC1pbnN0cnVjdGlvbnMtc2VjdGlvbicpO1xyXG5cclxuY29uc3QgcGxheWVyT25lR3JpZENlbGxzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTAgfSwgKCkgPT4gQXJyYXkoMTApLmZpbGwobnVsbCkpO1xyXG5sZXQgbGFzdENob3NlbkNlbGxzID0gW107XHJcblxyXG5jb25zdCBPcmllbnRhdGlvbiA9IE9iamVjdC5mcmVlemUoe1xyXG4gICAgSE9SSVpPTlRBTDogJ2hvcml6b250YWwnLFxyXG4gICAgVkVSVElDQUw6ICd2ZXJ0aWNhbCcsXHJcbn0pO1xyXG5cclxubGV0IHNlbGVjdGVkT3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XHJcblxyXG5sZXQgc2hpcFNpemVzID0gWzUsIDQsIDMsIDMsIDJdO1xyXG5cclxuXHJcbnNob3dJbnN0cnVjdGlvbnNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpbnN0cnVjdGlvbnNEaWFsb2cuc2hvd01vZGFsKCk7XHJcbn0pXHJcblxyXG5oaWRlSW5zdHJ1Y3Rpb25zQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaW5zdHJ1Y3Rpb25zRGlhbG9nLmNsb3NlKCk7XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5R2FtZWJvYXJkKHNpemUgPSAxMCwgZ3JpZE93bmVyKSB7XHJcbiAgICBjcmVhdGVHcmlkKHNpemUsIGdyaWRPd25lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyQWxsR2FtZWJvYXJkcygpIHtcclxuICAgIHdoaWxlIChwbGF5ZXJPbmVHcmlkLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBwbGF5ZXJPbmVHcmlkLnJlbW92ZUNoaWxkKHBsYXllck9uZUdyaWQubGFzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICB3aGlsZSAocGxheWVyVHdvR3JpZC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgcGxheWVyVHdvR3JpZC5yZW1vdmVDaGlsZChwbGF5ZXJUd29HcmlkLmxhc3RDaGlsZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyR2FtZWJvYXJkQ29udGVudChncmlkT3duZXIpIHtcclxuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtb3duZXI9XCIke2dyaWRPd25lcn1cIl0gLmNlbGxgKTtcclxuICAgIGNlbGxzLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUdyaWQoc2l6ZSwgZ3JpZE93bmVyKSB7XHJcbiAgICBsZXQgZ3JpZCA9IG51bGw7XHJcbiAgICBpZiAoZ3JpZE93bmVyID09ICdwbGF5ZXItb25lJykge1xyXG4gICAgICAgIGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW9uZS1nYW1lYm9hcmQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItdHdvLWdhbWVib2FyZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZ3JpZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBzaXplOyByb3crKykge1xyXG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHNpemU7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyaWRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGdyaWRDZWxsLmNsYXNzTGlzdC5hZGQoYGNlbGxgKTtcclxuICAgICAgICAgICAgZ3JpZENlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXJvdycsIHJvdyk7XHJcbiAgICAgICAgICAgIGdyaWRDZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2wnLCBjb2wpO1xyXG4gICAgICAgICAgICBncmlkLmFwcGVuZENoaWxkKGdyaWRDZWxsKTtcclxuICAgICAgICAgICAgZ3JpZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3duZXInLCBncmlkT3duZXIpO1xyXG4gICAgICAgICAgICBpZiAoZ3JpZE93bmVyID09ICdwbGF5ZXItdHdvJykge1xyXG4gICAgICAgICAgICAgICAgZ3JpZENlbGwuc3R5bGUuY29udGVudFZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgICAgIHNldFVwRXZlbnRMaXN0ZW5lcihncmlkQ2VsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVNoaXBzT25HYW1lYm9hcmQoc2hpcFBvc2l0aW9ucywgZ3JpZE93bmVyKSB7XHJcbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLW93bmVyPVwiJHtncmlkT3duZXJ9XCJdIC5jZWxsYCk7XHJcbiAgICBjZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSAnJztcclxuICAgIH0pO1xyXG4gICAgZGlzcGxheVNoaXBzT25HYW1lYm9hcmQoc2hpcFBvc2l0aW9ucywgZ3JpZE93bmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVNoaXBzT25HYW1lYm9hcmQoc2hpcFBvc2l0aW9ucywgZ3JpZE93bmVyKSB7XHJcbiAgICBzaGlwUG9zaXRpb25zLmZvckVhY2goKHBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IHBvc2l0aW9uLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgYFtkYXRhLW93bmVyPVwiJHtncmlkT3duZXJ9XCJdIC5jZWxsW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sPVwiJHtjb2x9XCJdYFxyXG4gICAgICAgICkudGV4dENvbnRlbnQgPSAncyc7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlR3JpZEJsb2NrZXJzKCkge1xyXG4gICAgcGxheWVyT25lR3JpZC5jbGFzc0xpc3QudG9nZ2xlKCdncmlkLWJsb2NrZXInKTtcclxuICAgIHBsYXllclR3b0dyaWQuY2xhc3NMaXN0LnRvZ2dsZSgnZ3JpZC1ibG9ja2VyJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuYWJsZUdyaWRCbG9ja2VyKGdyaWQpIHtcclxuICAgIGNvbnN0IHBsYXllckdyaWQgPSBncmlkID09PSAncGxheWVyLW9uZS1nYW1lYm9hcmQnID8gcGxheWVyT25lR3JpZCA6IHBsYXllclR3b0dyaWQ7XHJcbiAgICBwbGF5ZXJHcmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQtYmxvY2tlcicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNhYmxlR3JpZEJsb2NrZXIoZ3JpZCkge1xyXG4gICAgY29uc3QgcGxheWVyR3JpZCA9IGdyaWQgPT09ICdwbGF5ZXItb25lLWdhbWVib2FyZCcgPyBwbGF5ZXJPbmVHcmlkIDogcGxheWVyVHdvR3JpZDtcclxuICAgIHBsYXllckdyaWQuY2xhc3NMaXN0LnJlbW92ZSgnZ3JpZC1ibG9ja2VyJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUNlbGxCbG9ja2VycygpIHtcclxuICAgIGNvbnN0IGNlbGxzID0gcGxheWVyVHdvR3JpZC5jaGlsZE5vZGVzO1xyXG4gICAgY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcclxuICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUoJ2Jsb2NrZXInKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93UGxheWVyVHVybihwbGF5ZXIgPSAnJykge1xyXG4gICAgaWYocGxheWVyICE9PSAnJykge1xyXG4gICAgICAgIHBsYXllck9uZUluc3RydWN0aW9ucy5mb3JFYWNoKHBsYXllck9uZUluc3RydWN0aW9uID0+IHtcclxuICAgICAgICAgICAgcGxheWVyT25lSW5zdHJ1Y3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXllck9uZUluc3RydWN0aW9ucy5mb3JFYWNoKHBsYXllck9uZUluc3RydWN0aW9uID0+IHtcclxuICAgICAgICBwbGF5ZXJPbmVJbnN0cnVjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBwbGF5ZXJUd29JbnN0cnVjdGlvbnMuZm9yRWFjaChwbGF5ZXJUd29JbnN0cnVjdGlvbiA9PiB7XHJcbiAgICAgICAgcGxheWVyVHdvSW5zdHJ1Y3Rpb24uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZVBsYXllckluc3RydWN0aW9ucygpIHtcclxuICAgIHBsYXllck9uZUluc3RydWN0aW9ucy5mb3JFYWNoKHBsYXllck9uZUluc3RydWN0aW9uID0+IHtcclxuICAgICAgICBwbGF5ZXJPbmVJbnN0cnVjdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHBsYXllclR3b0luc3RydWN0aW9ucy5mb3JFYWNoKHBsYXllclR3b0luc3RydWN0aW9uID0+IHtcclxuICAgICAgICBwbGF5ZXJUd29JbnN0cnVjdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXJrQ2VsbChjb29yZGluYXRlcywgZ3JpZE93bmVyLCBtYXJrQ29udGVudCkge1xyXG4gICAgY29uc3QgW3JvdywgY29sXSA9IGNvb3JkaW5hdGVzO1xyXG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgYFtkYXRhLW93bmVyPVwiJHtncmlkT3duZXJ9XCJdIC5jZWxsW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sPVwiJHtjb2x9XCJdYFxyXG4gICAgKTtcclxuXHJcbiAgICBjZWxsLnRleHRDb250ZW50ID0gbWFya0NvbnRlbnQ7XHJcblxyXG4gICAgaWYgKG1hcmtDb250ZW50ID09ICdYJykge1xyXG4gICAgICAgIGNlbGwuc3R5bGUuY29sb3IgPSAncmVkJztcclxuICAgICAgICBjZWxsLnN0eWxlLmZvbnRTaXplID0gJzMycHgnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjZWxsLnN0eWxlLmZvbnRTaXplID0gJzEycHgnO1xyXG4gICAgfVxyXG5cclxuICAgIGNlbGwuc3R5bGUuY29udGVudFZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcblxyXG4gICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNlbGxDbGljayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFVwRXZlbnRMaXN0ZW5lcihjZWxsKSB7XHJcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2VsbENsaWNrKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2VsbENsaWNrKGUpIHtcclxuICAgIGNvbnN0IGNlbGwgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IFtcclxuICAgICAgICBOdW1iZXIoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm93JykpLFxyXG4gICAgICAgIE51bWJlcihjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2wnKSksXHJcbiAgICBdO1xyXG4gICAgY29uc3QgZ3JpZE93bmVyID0gY2VsbC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vd25lcicpO1xyXG4gICAgaGlnaGxpZ2h0QXR0YWNrZWRDZWxsKGNvb3JkaW5hdGVzLCBncmlkT3duZXIpO1xyXG4gICAgc2VuZEV2ZW50T25DZWxsQ2xpY2tlZChjb29yZGluYXRlcywgZ3JpZE93bmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VuZEV2ZW50T25DZWxsQ2xpY2tlZChjb29yZGluYXRlcywgZ3JpZE93bmVyKSB7XHJcbiAgICBjb25zdCBldmVudE9uQ2VsbENsaWNrZWQgPSBuZXcgQ3VzdG9tRXZlbnQoJ09uQ2VsbENsaWNrZWQnLCB7XHJcbiAgICAgICAgZGV0YWlsOiB7IGNvb3JkaW5hdGVzLCBncmlkT3duZXIgfSxcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudE9uQ2VsbENsaWNrZWQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVHYW1lT3Zlcih3aW5uZXIpIHtcclxuICAgIGNvbnN0IHJlbWFpbmluZ0NlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcclxuICAgIHJlbWFpbmluZ0NlbGxzLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNlbGxDbGljayk7XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHdpbm5lclJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyLXJlc3VsdHMnKTtcclxuICAgIHdpbm5lclJlc3VsdHMudGV4dENvbnRlbnQgPSBgJHt3aW5uZXJ9IFdvbiFgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWdobGlnaHRBdHRhY2tlZENlbGwoaGl0Q29vcmRpbmF0ZSwgZ3JpZE93bmVyKSB7XHJcbiAgICBjb25zdCBbcm93LCBjb2xdID0gaGl0Q29vcmRpbmF0ZTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgYFtkYXRhLW93bmVyPVwiJHtncmlkT3duZXJ9XCJdIC5jZWxsW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sPVwiJHtjb2x9XCJdYFxyXG4gICAgKS5zdHlsZS5ib3JkZXIgPSAnM3B4IHNvbGlkIGJsdWUnO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgYFtkYXRhLW93bmVyPVwiJHtncmlkT3duZXJ9XCJdIC5jZWxsW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sPVwiJHtjb2x9XCJdYFxyXG4gICAgICAgICkuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCAjN2I3YjdiJztcclxuICAgIH0sIDE1MDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhclJlc3VsdHMoKSB7XHJcbiAgICBjb25zdCB3aW5uZXJSZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lci1yZXN1bHRzJyk7XHJcbiAgICB3aW5uZXJSZXN1bHRzLnRleHRDb250ZW50ID0gJyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpc2VQbGFjaW5nU2hpcHMocGxheWVyR2FtZWJvYXJkLCBncmlkT3duZXIpIHtcclxuICAgIGxhc3RDaG9zZW5DZWxscyA9IFtdO1xyXG4gICAgc2hpcFNpemVzID0gWzUsIDQsIDMsIDMsIDJdO1xyXG4gICAgY29uc3QgZ3JpZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtb3duZXI9XCIke2dyaWRPd25lcn1cIl0gLmNlbGxgKTtcclxuICAgIGdyaWRDZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXJvdycpLCAxMCk7XHJcbiAgICAgICAgY29uc3QgY29sID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sJyksIDEwKTtcclxuICAgICAgICBwbGF5ZXJPbmVHcmlkQ2VsbHNbcm93XVtjb2xdID0gY2VsbDtcclxuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2VsbENsaWNrKTtcclxuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUGxhY2VTaGlwKTtcclxuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHNob3dTaGlwUGxhY2VtZW50KTtcclxuICAgIH0pO1xyXG4gICAgcGxheWVyR2FtZWJvYXJkLmNsZWFyR2FtZWJvYXJkKCk7XHJcbiAgICBjbGVhckdhbWVib2FyZENvbnRlbnQoJ3BsYXllci1vbmUnKTtcclxuXHJcbiAgICAvL2FkZCBjb25maXJtIGFuZCBjYW5jZWwgYnV0dG9uc1xyXG4gICAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uZmlybUJ0bi5pbm5lckhUTUwgPSAnQ29uZmlybSc7XHJcbiAgICBjb25maXJtQnRuLmNsYXNzTGlzdC5hZGQoJ2dhbWUtY3RybC1idG4nKTtcclxuICAgIGNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZCgnY29uZmlybS1wbGFjZW1lbnQtYnRuJyk7XHJcbiAgICBjb25maXJtQnRuLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnQ29uZmlybSBzaGlwIHBvc2l0aW9ucycpO1xyXG4gICAgY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbmZpcm1TaGlwc1BsYWNlbWVudCk7XHJcbiAgICBjb25maXJtQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjYW5jZWxCdG4uaW5uZXJIVE1MID0gJ0NhbmNlbCc7XHJcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnZ2FtZS1jdHJsLWJ0bicpO1xyXG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbC1wbGFjZW1lbnQtYnRuJyk7XHJcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0aXRsZScsICdDYW5jZWwgcGxhY2luZyBzaGlwcycpO1xyXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsU2hpcHNQbGFjZW1lbnQpO1xyXG5cclxuICAgIGNvbnN0IHBsYWNlbWVudEJ0bnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBsYWNlbWVudEJ0bnNEaXYuY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50LWN0cmwtc2VjdGlvbicpO1xyXG5cclxuICAgIHBsYWNlbWVudEJ0bnNEaXYuYXBwZW5kQ2hpbGQoY29uZmlybUJ0bik7XHJcbiAgICBwbGFjZW1lbnRCdG5zRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwbGFjZW1lbnRCdG5zRGl2KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5UHJlc3MpO1xyXG4gICAgXHJcbiAgICBwbGFjZUluc3RydWN0aW9uU2VjdGlvbi5oaWRkZW4gPSBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZSkge1xyXG4gICAgaWYgKGUua2V5ID09PSAncScpIHtcclxuICAgICAgICBzd2l0Y2hTaGlwT3JpZW50YXRpb24oKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3dpdGNoU2hpcE9yaWVudGF0aW9uKCkge1xyXG4gICAgc2VsZWN0ZWRPcmllbnRhdGlvbiA9XHJcbiAgICAgICAgc2VsZWN0ZWRPcmllbnRhdGlvbiA9PT0gT3JpZW50YXRpb24uSE9SSVpPTlRBTFxyXG4gICAgICAgICAgICA/IE9yaWVudGF0aW9uLlZFUlRJQ0FMXHJcbiAgICAgICAgICAgIDogT3JpZW50YXRpb24uSE9SSVpPTlRBTDtcclxufVxyXG5cclxuZnVuY3Rpb24gY29uZmlybVNoaXBzUGxhY2VtZW50KGUpIHtcclxuICAgIGNvbnN0IGNvbmZpcm1CdG4gPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbmZpcm1CdG4ucGFyZW50RWxlbWVudCk7XHJcbiAgICBjaGFuZ2VDdHJsQnRuc1N0YXRlKCk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5UHJlc3MpO1xyXG5cclxuICAgIGNvbnN0IGdyaWRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLW93bmVyPVwicGxheWVyLW9uZVwiXSAuY2VsbGApO1xyXG4gICAgZ3JpZENlbGxzLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgICAgLy8gY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNlbGxDbGljayk7XHJcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBsYWNlU2hpcCk7XHJcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBzaG93U2hpcFBsYWNlbWVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwbGFjZUluc3RydWN0aW9uU2VjdGlvbi5oaWRkZW4gPSB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYW5jZWxTaGlwc1BsYWNlbWVudChlKSB7XHJcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICByZUluaXRpYWxpc2VHYW1lKCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNhbmNlbEJ0bi5wYXJlbnRFbGVtZW50KTsgLy9yZW1vdmUgcGxhY2VtZW50QnRuc0RpdlxyXG4gICAgcGxhY2VJbnN0cnVjdGlvblNlY3Rpb24uaGlkZGVuID0gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlUGxhY2VTaGlwKGUpIHtcclxuICAgIGNvbnN0IGNob3NlbkNlbGwgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBsZXQgW2Nvb3JkaW5hdGVYLCBjb29yZGluYXRlWV0gPSBbXHJcbiAgICAgICAgTnVtYmVyKGNob3NlbkNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXJvdycpKSxcclxuICAgICAgICBOdW1iZXIoY2hvc2VuQ2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sJykpLFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50U2hpcFNpemUgPSBzaGlwU2l6ZXNbMF07XHJcbiAgICBpZighcGxheWVyT25lR2FtZWJvYXJkLmlzVmFsaWRQb3NpdGlvbihjdXJyZW50U2hpcFNpemUsIFtjb29yZGluYXRlWCwgY29vcmRpbmF0ZVldLCBzZWxlY3RlZE9yaWVudGF0aW9uKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgc2hpcFNpemVzLnNoaWZ0KCk7XHJcblxyXG4gICAgaWYoc2hpcFNpemVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZmlybS1wbGFjZW1lbnQtYnRuJyk7XHJcbiAgICAgICAgY29uZmlybUJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdwbGFjZVNoaXAnKTtcclxuXHJcbiAgICBjb25zdCBzaGlwQ2VsbHMgPSBwbGF5ZXJPbmVHYW1lYm9hcmQucGxhY2VTaGlwKG5ldyBTaGlwKGN1cnJlbnRTaGlwU2l6ZSksIFtjb29yZGluYXRlWCwgY29vcmRpbmF0ZVldLCBzZWxlY3RlZE9yaWVudGF0aW9uKTtcclxuICAgIGRpc3BsYXlTaGlwc09uR2FtZWJvYXJkKHNoaXBDZWxscywgJ3BsYXllci1vbmUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1NoaXBQbGFjZW1lbnQoZSkge1xyXG4gICAgY29uc3QgY2VsbCA9IGUuY3VycmVudFRhcmdldDtcclxuICAgIGxldCBbY29vcmRpbmF0ZVgsIGNvb3JkaW5hdGVZXSA9IFtcclxuICAgICAgICBOdW1iZXIoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm93JykpLFxyXG4gICAgICAgIE51bWJlcihjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2wnKSksXHJcbiAgICBdO1xyXG5cclxuICAgIGxhc3RDaG9zZW5DZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRTaGlwU2l6ZSA9IHNoaXBTaXplc1swXTtcclxuICAgIGlmKCFwbGF5ZXJPbmVHYW1lYm9hcmQuaXNWYWxpZFBvc2l0aW9uKGN1cnJlbnRTaGlwU2l6ZSwgW2Nvb3JkaW5hdGVYLCBjb29yZGluYXRlWV0sIHNlbGVjdGVkT3JpZW50YXRpb24pKSB7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgyNTUsIDAsIDAsIDAuNSknO1xyXG4gICAgICAgIGxhc3RDaG9zZW5DZWxscy5wdXNoKGNlbGwpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY3VycmVudFNoaXBTaXplOyBpKyspIHtcclxuICAgICAgICBpZihzZWxlY3RlZE9yaWVudGF0aW9uID09IE9yaWVudGF0aW9uLkhPUklaT05UQUwpIHtcclxuICAgICAgICAgICAgbGV0IGRZID0gY29vcmRpbmF0ZVkgKyBpO1xyXG4gICAgICAgICAgICBsZXQgY2hvc2VuQ2VsbCA9IHBsYXllck9uZUdyaWRDZWxsc1tjb29yZGluYXRlWF1bZFldO1xyXG4gICAgICAgICAgICBjaG9zZW5DZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsIDI1NSwgMCwgMC41KSc7XHJcbiAgICAgICAgICAgIGxhc3RDaG9zZW5DZWxscy5wdXNoKGNob3NlbkNlbGwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBkWCA9IGNvb3JkaW5hdGVYICsgaTtcclxuICAgICAgICAgICAgbGV0IGNob3NlbkNlbGwgPSBwbGF5ZXJPbmVHcmlkQ2VsbHNbZFhdW2Nvb3JkaW5hdGVZXTtcclxuICAgICAgICAgICAgY2hvc2VuQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLCAyNTUsIDAsIDAuNSknO1xyXG4gICAgICAgICAgICBsYXN0Q2hvc2VuQ2VsbHMucHVzaChjaG9zZW5DZWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0e1xyXG4gICAgZGlzcGxheUdhbWVib2FyZCxcclxuICAgIG1hcmtDZWxsLFxyXG4gICAgdG9nZ2xlR3JpZEJsb2NrZXJzLFxyXG4gICAgZGlzYWJsZUdyaWRCbG9ja2VyLFxyXG4gICAgZW5hYmxlR3JpZEJsb2NrZXIsXHJcbiAgICB0b2dnbGVDZWxsQmxvY2tlcnMsXHJcbiAgICBzaG93UGxheWVyVHVybixcclxuICAgIGhpZGVQbGF5ZXJJbnN0cnVjdGlvbnMsXHJcbiAgICBoYW5kbGVHYW1lT3ZlcixcclxuICAgIGRpc3BsYXlTaGlwc09uR2FtZWJvYXJkLFxyXG4gICAgdXBkYXRlU2hpcHNPbkdhbWVib2FyZCxcclxuICAgIGNsZWFyQWxsR2FtZWJvYXJkcyxcclxuICAgIGhpZ2hsaWdodEF0dGFja2VkQ2VsbCxcclxuICAgIGNsZWFyUmVzdWx0cyxcclxuICAgIGluaXRpYWxpc2VQbGFjaW5nU2hpcHMsXHJcbn07XHJcbiIsImxldCBjdXJyZW50UGxheWVyID0gJyc7XHJcblxyXG5mdW5jdGlvbiBzZXRDdXJyZW50UGxheWVyKHBsYXllcikge1xyXG4gICAgY3VycmVudFBsYXllciA9IHBsYXllcjtcclxufVxyXG5cclxuZnVuY3Rpb24gc3dpdGNoVHVybigpIHtcclxuICAgIGlmIChjdXJyZW50UGxheWVyID09PSAncGxheWVyLW9uZScpIHtcclxuICAgICAgICBjdXJyZW50UGxheWVyID0gJ3BsYXllci10d28nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJyZW50UGxheWVyID0gJ3BsYXllci1vbmUnO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBjdXJyZW50UGxheWVyLCBzZXRDdXJyZW50UGxheWVyLCBzd2l0Y2hUdXJuIH07IiwiY29uc3QgT3JpZW50YXRpb24gPSBPYmplY3QuZnJlZXplKHtcclxuICAgIEhPUklaT05UQUw6ICdob3Jpem9udGFsJyxcclxuICAgIFZFUlRJQ0FMOiAndmVydGljYWwnLFxyXG59KTtcclxuXHJcbmNsYXNzIEdhbWVib2FyZCB7XHJcbiAgICAjUk9XX1NJWkUgPSAxMDtcclxuICAgICNDT0xfU0laRSA9IDEwO1xyXG4gICAgI2FkamFjZW50Q2VsbERlbHRhcyA9IFtcclxuICAgICAgICBbLTEsIC0xXSxcclxuICAgICAgICBbLTEsIDBdLFxyXG4gICAgICAgIFstMSwgMV0sXHJcbiAgICAgICAgWzAsIC0xXSxcclxuICAgICAgICBbMCwgMV0sXHJcbiAgICAgICAgWzEsIC0xXSxcclxuICAgICAgICBbMSwgMF0sXHJcbiAgICAgICAgWzEsIDFdLFxyXG4gICAgXTtcclxuICAgICNyZWxldmFudEFkamFjZW50Q2VsbERlbHRhcyA9IFtcclxuICAgICAgICBbLTEsIDBdLFxyXG4gICAgICAgIFswLCAtMV0sXHJcbiAgICAgICAgWzAsIDFdLFxyXG4gICAgICAgIFsxLCAwXSxcclxuICAgIF07XHJcbiAgICAjcmVzZXJ2ZWRQb3NpdGlvbnMgPSBuZXcgU2V0KCk7XHJcbiAgICAjc2hpcFBvc2l0aW9ucyA9IG5ldyBTZXQoKTtcclxuICAgICNzaGlwVG9BZGphY2VudENlbGxzTWFwID0gbmV3IE1hcCgpOyAvL21hcCBvZiBzaGlwIG9iamVjdCB0byBhZGphY2VudENlbGxzT2ZTaGlwIHNldCgpXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBBcnJheSh0aGlzLiNST1dfU0laRSlcclxuICAgICAgICAgICAgLmZpbGwobnVsbClcclxuICAgICAgICAgICAgLm1hcCgoKSA9PiBuZXcgQXJyYXkodGhpcy4jQ09MX1NJWkUpLmZpbGwobnVsbCkpO1xyXG4gICAgICAgIHRoaXMuYXZhaWxhYmxlQ2VsbHMgPSB0aGlzLmluaXRpYWxpemVBdmFpbGFibGVDb29yZGluYXRlcygpO1xyXG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplQXZhaWxhYmxlQ29vcmRpbmF0ZXMoKSB7XHJcbiAgICAgICAgY29uc3QgY2VsbHMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCByb3dOdW0gPSAwOyByb3dOdW0gPCB0aGlzLiNST1dfU0laRTsgcm93TnVtKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sTnVtID0gMDsgY29sTnVtIDwgdGhpcy4jQ09MX1NJWkU7IGNvbE51bSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjZWxscy5wdXNoKFtyb3dOdW0sIGNvbE51bV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjZWxscztcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckdhbWVib2FyZCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVib2FyZCA9IHRoaXMuZ2FtZWJvYXJkLm1hcCgocm93KSA9PiByb3cuZmlsbChudWxsKSk7XHJcbiAgICAgICAgdGhpcy4jcmVzZXJ2ZWRQb3NpdGlvbnMuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLiNzaGlwUG9zaXRpb25zLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy4jc2hpcFRvQWRqYWNlbnRDZWxsc01hcC5jbGVhcigpO1xyXG4gICAgICAgIC8vIHRoaXMuc2hpcHMuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBZGphY2VudENlbGxzKHBvc2l0aW9uLCBhZGphY2VudERlbHRhcykge1xyXG4gICAgICAgIGxldCBbY3VycmVudFgsIGN1cnJlbnRZXSA9IHBvc2l0aW9uO1xyXG4gICAgICAgIGNvbnN0IGFkamFjZW50Q2VsbHMgPSBbXTtcclxuICAgICAgICBhZGphY2VudERlbHRhcy5mb3JFYWNoKChjZWxsQ29vcmRpbmF0ZXMpID0+IHtcclxuICAgICAgICAgICAgbGV0IFthZGphY2VudERlbHRhWCwgYWRqYWNlbnREZWx0YVldID0gY2VsbENvb3JkaW5hdGVzO1xyXG4gICAgICAgICAgICBsZXQgYWRqYWNlbnRYID0gY3VycmVudFggKyBhZGphY2VudERlbHRhWDtcclxuICAgICAgICAgICAgbGV0IGFkamFjZW50WSA9IGN1cnJlbnRZICsgYWRqYWNlbnREZWx0YVk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGFkamFjZW50WCA+PSAwICYmXHJcbiAgICAgICAgICAgICAgICBhZGphY2VudFggPD0gOSAmJlxyXG4gICAgICAgICAgICAgICAgYWRqYWNlbnRZID49IDAgJiZcclxuICAgICAgICAgICAgICAgIGFkamFjZW50WSA8PSA5XHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFkamFjZW50Q2VsbHNDb29yZGluYXRlID0gW2FkamFjZW50WCwgYWRqYWNlbnRZXTtcclxuICAgICAgICAgICAgICAgIGFkamFjZW50Q2VsbHMucHVzaChhZGphY2VudENlbGxzQ29vcmRpbmF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFkamFjZW50Q2VsbHM7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWYWxpZFBvc2l0aW9uKHNoaXBMZW5ndGgsIHBvc2l0aW9uLCBvcmllbnRhdGlvbikge1xyXG4gICAgICAgIGxldCBbcm93TnVtYmVyLCBjb2xOdW1iZXJdID0gcG9zaXRpb247XHJcblxyXG4gICAgICAgIC8vY2hlY2sgaWYgcG9zaXRpb24gaXMgYWxyZWFkeSBmaWxsZWQgb3IgaXMgYWRqYWNlbnQgcG9zaXRpb24gb2YgZmlsbGVkIGNlbGwuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09IE9yaWVudGF0aW9uLkhPUklaT05UQUwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBkUG9zaXRpb24gPSBbcm93TnVtYmVyLCBjb2xOdW1iZXIgKyBpXTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNyZXNlcnZlZFBvc2l0aW9ucy5oYXMoZFBvc2l0aW9uLnRvU3RyaW5nKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jc2hpcFBvc2l0aW9ucy5oYXMoZFBvc2l0aW9uLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZFBvc2l0aW9uID0gW3Jvd051bWJlciArIGksIGNvbE51bWJlcl07XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jcmVzZXJ2ZWRQb3NpdGlvbnMuaGFzKGRQb3NpdGlvbi50b1N0cmluZygpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3NoaXBQb3NpdGlvbnMuaGFzKGRQb3NpdGlvbi50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2NoZWNrIGlmIGl0cyBsZW5ndGggY2FuIGdvIG91dCBvZiBib3VuZHM7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9PSBPcmllbnRhdGlvbi5IT1JJWk9OVEFMICYmXHJcbiAgICAgICAgICAgIGNvbE51bWJlciArIHNoaXBMZW5ndGggPiB0aGlzLiNST1dfU0laRVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgb3JpZW50YXRpb24gPT0gT3JpZW50YXRpb24uVkVSVElDQUwgJiZcclxuICAgICAgICAgICAgcm93TnVtYmVyICsgc2hpcExlbmd0aCA+IHRoaXMuI0NPTF9TSVpFXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYWNlU2hpcChzaGlwLCBwb3NpdGlvbiwgb3JpZW50YXRpb24pIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZFBvc2l0aW9uKHNoaXAuc2l6ZSwgcG9zaXRpb24sIG9yaWVudGF0aW9uKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBbcm93TnVtYmVyLCBjb2xOdW1iZXJdID0gcG9zaXRpb247XHJcbiAgICAgICAgbGV0IHNoaXBMZW5ndGggPSBzaGlwLnNpemU7XHJcbiAgICAgICAgbGV0IGFsbEFkamFjZW50Q2VsbHNPZlNoaXAgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFNoaXBDZWxscyA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09IE9yaWVudGF0aW9uLkhPUklaT05UQUwpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZWJvYXJkW3Jvd051bWJlcl1bY29sTnVtYmVyXSA9IHNoaXA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiNzaGlwUG9zaXRpb25zLmFkZChbcm93TnVtYmVyLCBjb2xOdW1iZXJdLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFNoaXBDZWxscy5hZGQoW3Jvd051bWJlciwgY29sTnVtYmVyXS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGxldCBhZGphY2VudENlbGxzID0gdGhpcy5nZXRBZGphY2VudENlbGxzKFxyXG4gICAgICAgICAgICAgICAgICAgIFtyb3dOdW1iZXIsIGNvbE51bWJlcl0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jYWRqYWNlbnRDZWxsRGVsdGFzXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYWRqYWNlbnRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jcmVzZXJ2ZWRQb3NpdGlvbnMuYWRkKGNlbGwudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsQWRqYWNlbnRDZWxsc09mU2hpcC5hZGQoY2VsbC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29sTnVtYmVyKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT0gT3JpZW50YXRpb24uVkVSVElDQUwpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZWJvYXJkW3Jvd051bWJlcl1bY29sTnVtYmVyXSA9IHNoaXA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiNzaGlwUG9zaXRpb25zLmFkZChbcm93TnVtYmVyLCBjb2xOdW1iZXJdLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFNoaXBDZWxscy5hZGQoW3Jvd051bWJlciwgY29sTnVtYmVyXS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGxldCBhZGphY2VudENlbGxzID0gdGhpcy5nZXRBZGphY2VudENlbGxzKFxyXG4gICAgICAgICAgICAgICAgICAgIFtyb3dOdW1iZXIsIGNvbE51bWJlcl0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jYWRqYWNlbnRDZWxsRGVsdGFzXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYWRqYWNlbnRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jcmVzZXJ2ZWRQb3NpdGlvbnMuYWRkKGNlbGwudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsQWRqYWNlbnRDZWxsc09mU2hpcC5hZGQoY2VsbC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcm93TnVtYmVyKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsOyAvL2ludmFsaWQgb3JpZW50YXRpb25cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vcmVtb3ZlIGFsbCBjZWxscyB0aGF0IGhhdmUgc2hpcHNcclxuICAgICAgICBhbGxBZGphY2VudENlbGxzT2ZTaGlwLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IGNlbGwuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZWJvYXJkW3Jvd11bY29sXSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgYWxsQWRqYWNlbnRDZWxsc09mU2hpcC5kZWxldGUoY2VsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy4jc2hpcFRvQWRqYWNlbnRDZWxsc01hcC5zZXQoc2hpcCwgYWxsQWRqYWNlbnRDZWxsc09mU2hpcCk7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRTaGlwQ2VsbHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjZWl2ZUF0dGFjayhoaXRDb29yZGluYXRlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaGl0Q29vcmRpbmF0ZSk7XHJcbiAgICAgICAgbGV0IFtoaXRDb29yZGluYXRlWCwgaGl0Q29vcmRpbmF0ZVldID0gaGl0Q29vcmRpbmF0ZTtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5nYW1lYm9hcmRbaGl0Q29vcmRpbmF0ZVhdW2hpdENvb3JkaW5hdGVZXTtcclxuICAgICAgICBpZiAodGFyZ2V0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lYm9hcmRbaGl0Q29vcmRpbmF0ZVhdW2hpdENvb3JkaW5hdGVZXSA9ICdPJztcclxuICAgICAgICAgICAgcmV0dXJuIHsgYWRqYWNlbnRDZWxsczogbnVsbCwgaXNTaGlwSGl0OiBmYWxzZSB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGFyZ2V0LmhpdCgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkW2hpdENvb3JkaW5hdGVYXVtoaXRDb29yZGluYXRlWV0gPSAnWCc7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFyZUFsbFNoaXBzU3VuaygpKSB7XHJcbiAgICAgICAgICAgIC8vZ2FtZW92ZXIsIGFubm91bmNlIHdpbm5lclxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnR2FtZW92ZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRhcmdldC5pc1N1bmsoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBhZGphY2VudENlbGxzU2V0ID0gdGhpcy4jc2hpcFRvQWRqYWNlbnRDZWxsc01hcC5nZXQodGFyZ2V0KTtcclxuICAgICAgICAgICAgYWRqYWNlbnRDZWxsc1NldC5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gY2VsbC5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lYm9hcmRbcm93XVtjb2xdID0gJ08nO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDZWxsRnJvbUF2YWlsYWJsZUNlbGxzKFtyb3csIGNvbF0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgYWRqYWNlbnRDZWxsczogYWRqYWNlbnRDZWxsc1NldCwgaXNTaGlwSGl0OiB0cnVlIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IGFkamFjZW50Q2VsbHM6IG51bGwsIGlzU2hpcEhpdDogdHJ1ZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGFyZUFsbFNoaXBzU3VuaygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmtTdGF0dXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNoaXBQb3NpdGlvbnMobG9nU2hpcFBvc2l0aW9ucyA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYobG9nU2hpcFBvc2l0aW9ucykgY29uc29sZS5sb2codGhpcy4jc2hpcFBvc2l0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI3NoaXBQb3NpdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmFuZG9tQ29vcmRpbmF0ZUZvclNoaXAoc2hpcExlbmd0aCkge1xyXG4gICAgICAgIGlmICh0aGlzLmF2YWlsYWJsZUNlbGxzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGF2YWlsYWJsZSBjZWxscyB0byBwbGFjZSBzaGlwJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBNQVhfUkVUUklFUyA9IDEwMDtcclxuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xyXG5cclxuICAgICAgICB3aGlsZSAoYXR0ZW1wdHMgPCBNQVhfUkVUUklFUykge1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21PcmllbnRhdGlvbiA9IHRoaXMuZ2V0UmFuZG9tT3JpZW50YXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlWCA9XHJcbiAgICAgICAgICAgICAgICByYW5kb21PcmllbnRhdGlvbiA9PT0gT3JpZW50YXRpb24uSE9SSVpPTlRBTFxyXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy4jUk9XX1NJWkVcclxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuI1JPV19TSVpFIC0gKHNoaXBMZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgY29uc3QgcmFuZ2VZID1cclxuICAgICAgICAgICAgICAgIHJhbmRvbU9yaWVudGF0aW9uID09PSBPcmllbnRhdGlvbi5IT1JJWk9OVEFMXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLiNDT0xfU0laRSAtIChzaGlwTGVuZ3RoIC0gMSlcclxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuI0NPTF9TSVpFO1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21Db29yZGluYXRlID0gdGhpcy5nZXRSYW5kb21Db29yZGluYXRlSW5SYW5nZShcclxuICAgICAgICAgICAgICAgIHJhbmdlWCxcclxuICAgICAgICAgICAgICAgIHJhbmdlWVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1ZhbGlkUG9zaXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcExlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICByYW5kb21Db29yZGluYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbU9yaWVudGF0aW9uXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcmFuZG9tQ29vcmRpbmF0ZSwgcmFuZG9tT3JpZW50YXRpb24gfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXR0ZW1wdHMrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZpbmQgdmFsaWQgY29vcmRpbmF0ZSBmb3Igc2hpcCBwbGFjZW1lbnQnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSYW5kb21PcmllbnRhdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSA8IDAuNVxyXG4gICAgICAgICAgICA/IE9yaWVudGF0aW9uLkhPUklaT05UQUxcclxuICAgICAgICAgICAgOiBPcmllbnRhdGlvbi5WRVJUSUNBTDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSYW5kb21Db29yZGluYXRlSW5SYW5nZShyYW5nZVgsIHJhbmdlWSkge1xyXG4gICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZ2VYKTtcclxuICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmdlWSk7XHJcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSYW5kb21Db29yZGluYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmF2YWlsYWJsZUNlbGxzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG1vcmUgYXZhaWxhYmxlIGNlbGxzJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKFxyXG4gICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogdGhpcy5hdmFpbGFibGVDZWxscy5sZW5ndGhcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBsZXQgcmFuZG9tQ29vcmRpbmF0ZSA9IHRoaXMuYXZhaWxhYmxlQ2VsbHNbcmFuZG9tSW5kZXhdO1xyXG4gICAgICAgIHRoaXMuYXZhaWxhYmxlQ2VsbHMuc3BsaWNlKHJhbmRvbUluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJhbmRvbUNvb3JkaW5hdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmFuZG9tQWRqYWNlbnRDb29yZGluYXRlKGhpdENvb3JkaW5hdGUpIHtcclxuICAgICAgICBjb25zdCBhbGxBZGphY2VudENvb3JkaW5hdGVzID1cclxuICAgICAgICAgICAgdGhpcy5nZXRSZWxldmFudEFkamFjZW50Q29vcmRpbmF0ZXMoaGl0Q29vcmRpbmF0ZSk7XHJcbiAgICAgICAgaWYgKCFhbGxBZGphY2VudENvb3JkaW5hdGVzIHx8IGFsbEFkamFjZW50Q29vcmRpbmF0ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbmRvbUNvb3JkaW5hdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihcclxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIGFsbEFkamFjZW50Q29vcmRpbmF0ZXMubGVuZ3RoXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmFuZG9tQWRqYWNlbnRDb29yZGluYXRlID0gYWxsQWRqYWNlbnRDb29yZGluYXRlc1tyYW5kb21JbmRleF07XHJcblxyXG4gICAgICAgIHRoaXMucmVtb3ZlQ2VsbEZyb21BdmFpbGFibGVDZWxscyhyYW5kb21BZGphY2VudENvb3JkaW5hdGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmFuZG9tQWRqYWNlbnRDb29yZGluYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJlbGV2YW50QWRqYWNlbnRDb29yZGluYXRlcyhoaXRDb29yZGluYXRlKSB7XHJcbiAgICAgICAgY29uc3QgYWxsQWRqYWNlbnRDb29yZGluYXRlcyA9IHRoaXMuZ2V0QWRqYWNlbnRDZWxscyhcclxuICAgICAgICAgICAgaGl0Q29vcmRpbmF0ZSxcclxuICAgICAgICAgICAgdGhpcy4jcmVsZXZhbnRBZGphY2VudENlbGxEZWx0YXNcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHJlbGV2YW50QWRqYWNlbnRDb29yZGluYXRlcyA9IGFsbEFkamFjZW50Q29vcmRpbmF0ZXMuZmlsdGVyKFxyXG4gICAgICAgICAgICAoY29vcmRpbmF0ZSkgPT5cclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZWJvYXJkW2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV1dICE9PSAnWCcgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZWJvYXJkW2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV1dICE9PSAnTydcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiByZWxldmFudEFkamFjZW50Q29vcmRpbmF0ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ2VsbEZyb21BdmFpbGFibGVDZWxscyhjZWxsVG9SZW1vdmUpIHtcclxuICAgICAgICB0aGlzLmF2YWlsYWJsZUNlbGxzID0gdGhpcy5hdmFpbGFibGVDZWxscy5maWx0ZXIoXHJcbiAgICAgICAgICAgIChhdmFpbGFibGVDZWxsKSA9PlxyXG4gICAgICAgICAgICAgICAgIShcclxuICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVDZWxsWzBdID09IGNlbGxUb1JlbW92ZVswXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZUNlbGxbMV0gPT0gY2VsbFRvUmVtb3ZlWzFdXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgR2FtZWJvYXJkLCBPcmllbnRhdGlvbiB9O1xyXG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZC5qcydcclxuXHJcbmNsYXNzIFBsYXllciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsImNsYXNzIFNoaXAge1xyXG4gICAgY29uc3RydWN0b3Ioc2l6ZSwgaGl0Q291bnQgPSAwLCBpc1N1bmtTdGF0dXMgPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgdGhpcy5oaXRDb3VudCA9IGhpdENvdW50O1xyXG4gICAgICAgIHRoaXMuaXNTdW5rU3RhdHVzID0gaXNTdW5rU3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIGhpdCgpIHtcclxuICAgICAgICB0aGlzLmhpdENvdW50Kys7XHJcbiAgICAgICAgdGhpcy5pc1N1bmtTdGF0dXMgPSB0aGlzLmlzU3VuaygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpc1N1bmsoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGl0Q291bnQgPT0gdGhpcy5zaXplO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9