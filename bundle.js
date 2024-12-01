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
    margin: 30px auto 0;
}

header h1 {
    font-family: 'Android-Assassin', sans-serif;
    letter-spacing: 1px;
}

.main-section {
    display: flex;
    /* flex-direction: ; */
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

.results {
    width: fit-content;
    margin: 0 auto;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,qFAAqF;;AAErF;IACI,+BAA+B;IAC/B,+DAAgE;IAChE,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,2CAA2C;IAC3C,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,YAAY;IACZ,oCAAoC;IACpC,kBAAkB;IAClB,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,iCAAiC;IACjC,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,kBAAkB;IAClB,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;;;IAGI,kBAAkB;IAClB,iBAAiB;AACrB;;;AAGA;IACI,aAAa;IACb,sCAAsC;IACtC,mCAAmC;AACvC;;AAEA;IACI,sBAAsB;IACtB,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,iBAAiB;IACjB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,cAAc;AAClB;;AAEA,cAAc;AACd;IACI,oBAAoB;IACpB,YAAY;AAChB;;AAEA,cAAc;AACd;IACI,oBAAoB;AACxB;;AAEA,iCAAiC;AACjC;IACI,kBAAkB;AACtB","sourcesContent":["/* @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap'); */\r\n\r\n@font-face {\r\n    font-family: 'Android-Assassin';\r\n    src: url('../fonts/AndroidAssassin-WXXY.ttf') format('opentype');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: Verdana;\r\n}\r\n\r\nheader {\r\n    font-size: 22px;\r\n    width: fit-content;\r\n    margin: 30px auto 0;\r\n}\r\n\r\nheader h1 {\r\n    font-family: 'Android-Assassin', sans-serif;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.main-section {\r\n    display: flex;\r\n    /* flex-direction: ; */\r\n}\r\n\r\n.game-ctrl-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: fit-content;\r\n    height: 300px;\r\n    margin: auto 100px;\r\n}\r\n\r\n.game-ctrl-btn {\r\n    width: 150px;\r\n    margin: 10px auto;\r\n    height: 30px;\r\n    background-color: rgb(234, 234, 234);\r\n    border-radius: 2px;\r\n    border: 1px solid rgb(0, 0, 0);\r\n    font-size: 16px;\r\n}\r\n\r\n.game-ctrl-btn:not(:disabled):hover {\r\n    background-color: rgb(60, 60, 60);\r\n    color: white;\r\n}\r\n\r\n.gameboards {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 50px;\r\n    width: fit-content;\r\n    margin: 50px 50px 30px;\r\n    /* border: 1px solid red; */\r\n}\r\n\r\n.player-one-instruction, \r\n.player-two-instruction,\r\n.player-two-instruction-not-needed {\r\n    width: fit-content;\r\n    margin: 10px auto;\r\n}\r\n\r\n\r\n.player-grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n}\r\n\r\n.cell {\r\n    border: 1px solid #ccc;\r\n    border: 1px solid #7b7b7b;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-family: monospace;\r\n    font-size: 1.2rem;\r\n    width: 36px;\r\n    height: 36px;\r\n}\r\n\r\n.cell:hover {\r\n    background-color: #ccc;\r\n}\r\n\r\n.results {\r\n    width: fit-content;\r\n    margin: 0 auto;\r\n}\r\n\r\n/* for grids */\r\n.grid-blocker {\r\n    pointer-events: none;\r\n    opacity: 0.3;\r\n}\r\n\r\n/* for cells */\r\n.blocker {\r\n    pointer-events: none;\r\n}\r\n\r\n/* for player turn instructions */\r\n.hidden {\r\n    visibility: hidden;\r\n}"],"sourceRoot":""}]);
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


// console.log(reInitialiseGame());

const playerTwoInstructions = document.querySelectorAll(`.player-two-instruction`);
const playerOneInstructions = document.querySelectorAll(`.player-one-instruction`);

const playerOneGrid = document.querySelector(`.player-one-gameboard`);
const playerTwoGrid = document.querySelector(`.player-two-gameboard`);

const gameCtrlButtonSection = document.querySelector('.game-ctrl-section');

const playerOneGridCells = Array.from({ length: 10 }, () => Array(10).fill(null));
let lastChosenCells = [];

const Orientation = Object.freeze({
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical',
});

let selectedOrientation = 'horizontal';

let shipSizes = [5, 4, 3, 3, 2];

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
    placementBtnsDiv.classList.add('placement-ctrl-btns');

    placementBtnsDiv.appendChild(confirmBtn);
    placementBtnsDiv.appendChild(cancelBtn);

    gameCtrlButtonSection.appendChild(placementBtnsDiv);

    document.addEventListener('keydown', handleKeyPress);
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
    gameCtrlButtonSection.removeChild(confirmBtn.parentElement);
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.changeCtrlBtnsState)();
    document.removeEventListener('keydown', handleKeyPress);

    const gridCells = document.querySelectorAll(`[data-owner="player-one"] .cell`);
    gridCells.forEach(cell => {
        // cell.addEventListener('click', handleCellClick);
        cell.removeEventListener('click', handlePlaceShip);
        cell.removeEventListener('mouseover', showShipPlacement);
    });
}

function cancelShipsPlacement(e) {
    const cancelBtn = e.currentTarget;
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.reInitialiseGame)();
    gameCtrlButtonSection.removeChild(cancelBtn.parentElement); //remove placementBtnsDiv
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxVQUFVO0FBQ3RFO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEMsMEJBQTBCLFlBQVk7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELFVBQVU7QUFDdEU7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVLHFCQUFxQixJQUFJLGVBQWUsSUFBSTtBQUNsRjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsVUFBVSxxQkFBcUIsSUFBSSxlQUFlLElBQUk7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZVN0YXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvQW5kcm9pZEFzc2Fzc2luLVdYWFkudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CZWJhcytOZXVlJmRpc3BsYXk9c3dhcCcpOyAqL1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0FuZHJvaWQtQXNzYXNzaW4nO1xyXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCdvcGVudHlwZScpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuKiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYTtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbjogMzBweCBhdXRvIDA7XHJcbn1cclxuXHJcbmhlYWRlciBoMSB7XHJcbiAgICBmb250LWZhbWlseTogJ0FuZHJvaWQtQXNzYXNzaW4nLCBzYW5zLXNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuLm1haW4tc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogZmxleC1kaXJlY3Rpb246IDsgKi9cclxufVxyXG5cclxuLmdhbWUtY3RybC1zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG1hcmdpbjogYXV0byAxMDBweDtcclxufVxyXG5cclxuLmdhbWUtY3RybC1idG4ge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5nYW1lLWN0cmwtYnRuOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MCwgNjAsIDYwKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmdhbWVib2FyZHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBnYXA6IDUwcHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IDUwcHggNTBweCAzMHB4O1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xyXG59XHJcblxyXG4ucGxheWVyLW9uZS1pbnN0cnVjdGlvbiwgXHJcbi5wbGF5ZXItdHdvLWluc3RydWN0aW9uLFxyXG4ucGxheWVyLXR3by1pbnN0cnVjdGlvbi1ub3QtbmVlZGVkIHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG59XHJcblxyXG5cclxuLnBsYXllci1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xyXG59XHJcblxyXG4uY2VsbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzdiN2I3YjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIGhlaWdodDogMzZweDtcclxufVxyXG5cclxuLmNlbGw6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxufVxyXG5cclxuLnJlc3VsdHMge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi8qIGZvciBncmlkcyAqL1xyXG4uZ3JpZC1ibG9ja2VyIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4vKiBmb3IgY2VsbHMgKi9cclxuLmJsb2NrZXIge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi8qIGZvciBwbGF5ZXIgdHVybiBpbnN0cnVjdGlvbnMgKi9cclxuLmhpZGRlbiB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUZBQXFGOztBQUVyRjtJQUNJLCtCQUErQjtJQUMvQiwrREFBZ0U7SUFDaEUsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwyQ0FBMkM7SUFDM0MsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFQTs7O0lBR0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBLGNBQWM7QUFDZDtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOztBQUVBLGNBQWM7QUFDZDtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQSxpQ0FBaUM7QUFDakM7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmViYXMrTmV1ZSZkaXNwbGF5PXN3YXAnKTsgKi9cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdBbmRyb2lkLUFzc2Fzc2luJztcXHJcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL0FuZHJvaWRBc3Nhc3Npbi1XWFhZLnR0ZicpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBtYXJnaW46IDMwcHggYXV0byAwO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDEge1xcclxcbiAgICBmb250LWZhbWlseTogJ0FuZHJvaWQtQXNzYXNzaW4nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLyogZmxleC1kaXJlY3Rpb246IDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtY3RybC1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG8gMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWN0cmwtYnRuIHtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM0LCAyMzQsIDIzNCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDAsIDApO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWN0cmwtYnRuOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYwLCA2MCwgNjApO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmRzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIG1hcmdpbjogNTBweCA1MHB4IDMwcHg7XFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci1vbmUtaW5zdHJ1Y3Rpb24sIFxcclxcbi5wbGF5ZXItdHdvLWluc3RydWN0aW9uLFxcclxcbi5wbGF5ZXItdHdvLWluc3RydWN0aW9uLW5vdC1uZWVkZWQge1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucGxheWVyLWdyaWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzdiN2I3YjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICB3aWR0aDogMzZweDtcXHJcXG4gICAgaGVpZ2h0OiAzNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxyXFxufVxcclxcblxcclxcbi5yZXN1bHRzIHtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9yIGdyaWRzICovXFxyXFxuLmdyaWQtYmxvY2tlciB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICBvcGFjaXR5OiAwLjM7XFxyXFxufVxcclxcblxcclxcbi8qIGZvciBjZWxscyAqL1xcclxcbi5ibG9ja2VyIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIGZvciBwbGF5ZXIgdHVybiBpbnN0cnVjdGlvbnMgKi9cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL21vZHVsZXMvcGxheWVyLmpzJztcclxuaW1wb3J0IFNoaXAgZnJvbSAnLi9tb2R1bGVzL3NoaXAuanMnO1xyXG4vLyBpbXBvcnQgeyBPcmllbnRhdGlvbiB9IGZyb20gJy4vbW9kdWxlcy9nYW1lYm9hcmQuanMnO1xyXG5pbXBvcnQgZGlzcGxheSBmcm9tICcuL21vZHVsZXMvZGlzcGxheS5qcyc7XHJcbmltcG9ydCB7XHJcbiAgICBjdXJyZW50UGxheWVyLFxyXG4gICAgc2V0Q3VycmVudFBsYXllcixcclxuICAgIHN3aXRjaFR1cm4sXHJcbn0gZnJvbSAnLi9tb2R1bGVzL2dhbWVTdGF0ZS5qcyc7XHJcblxyXG5jb25zdCBzdGFydEdhbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtZ2FtZS1idG4nKTtcclxuY29uc3QgbGVhdmVHYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlYXZlLWdhbWUtYnRuJyk7XHJcbmxlYXZlR2FtZUJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbmxldCBwbGF5ZXJMZWZ0ID0gZmFsc2U7XHJcbmNvbnN0IHJhbmRvbVBsYWNlbWVudEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5kb21pc2UtYnRuJyk7XHJcbmNvbnN0IGFycmFuZ2VTaGlwc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJhbmdlLXNoaXBzLWJ0bicpO1xyXG5cclxuLy9pbml0aWFsaXNlIHRoZSBnYW1lXHJcbmNvbnN0IGluaXRpYWxpc2VkT2JqZWN0cyA9IGluaXRpYWxpc2VHYW1lKCk7XHJcbmV4cG9ydCBsZXQgcGxheWVyT25lR2FtZWJvYXJkID0gaW5pdGlhbGlzZWRPYmplY3RzLnBsYXllck9uZUdhbWVib2FyZDtcclxubGV0IHBsYXllclR3b0dhbWVib2FyZCA9IGluaXRpYWxpc2VkT2JqZWN0cy5wbGF5ZXJUd29HYW1lYm9hcmQ7XHJcblxyXG5zZXRDdXJyZW50UGxheWVyKCdwbGF5ZXItb25lJyk7XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXNlUGxheWVycygpIHtcclxuICAgIGNvbnN0IHBsYXllck9uZSA9IG5ldyBQbGF5ZXIoJ3BsYXllci1vbmUnKTtcclxuXHJcbiAgICBjb25zdCBwbGF5ZXJUd28gPSBuZXcgUGxheWVyKCdwbGF5ZXItdHdvJyk7XHJcblxyXG4gICAgc2V0Q3VycmVudFBsYXllcigncGxheWVyLW9uZScpO1xyXG5cclxuXHJcbiAgICByZXR1cm4geyBwbGF5ZXJPbmUsIHBsYXllclR3byB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXNlR2FtZWJvYXJkcyhwbGF5ZXJPbmUsIHBsYXllclR3bykge1xyXG4gICAgXHJcbiAgICAvKiBzZXR1cCBwbGF5ZXIgb25lIGdhbWVib2FyZCAqL1xyXG4gICAgY29uc3QgcGxheWVyT25lR2FtZWJvYXJkID0gcGxheWVyT25lLmdhbWVib2FyZDtcclxuICAgIFxyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDIpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDMpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDMpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDQpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDUpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG5cclxuICAgIC8qIHNldHVwIHBsYXllciB0d28gZ2FtZWJvYXJkICovXHJcbiAgICBjb25zdCBwbGF5ZXJUd29HYW1lYm9hcmQgPSBwbGF5ZXJUd28uZ2FtZWJvYXJkO1xyXG5cclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCgyKSwgcGxheWVyVHdvR2FtZWJvYXJkKTtcclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCgzKSwgcGxheWVyVHdvR2FtZWJvYXJkKTtcclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCgzKSwgcGxheWVyVHdvR2FtZWJvYXJkKTtcclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCg0KSwgcGxheWVyVHdvR2FtZWJvYXJkKTtcclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCg1KSwgcGxheWVyVHdvR2FtZWJvYXJkKTtcclxuXHJcbiAgICByZXR1cm4geyBwbGF5ZXJPbmVHYW1lYm9hcmQsIHBsYXllclR3b0dhbWVib2FyZCB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXNlR2FtZSgpIHtcclxuICAgIGNvbnN0IHsgcGxheWVyT25lLCBwbGF5ZXJUd28gfSA9IGluaXRpYWxpc2VQbGF5ZXJzKCk7XHJcbiAgICBjb25zdCB7IHBsYXllck9uZUdhbWVib2FyZCwgcGxheWVyVHdvR2FtZWJvYXJkIH0gPSBpbml0aWFsaXNlR2FtZWJvYXJkcyhwbGF5ZXJPbmUsIHBsYXllclR3byk7XHJcblxyXG4gICAgLyogZGlzcGxheSBwbGF5ZXIgb25lIGdhbWVib2FyZCAqL1xyXG4gICAgY29uc3QgcGxheWVyT25lU2hpcFBvc2l0aW9ucyA9IHBsYXllck9uZUdhbWVib2FyZC5nZXRTaGlwUG9zaXRpb25zKCk7XHJcbiAgICBcclxuICAgIGRpc3BsYXkuZGlzcGxheUdhbWVib2FyZCh1bmRlZmluZWQsICdwbGF5ZXItb25lJyk7XHJcbiAgICBkaXNwbGF5LmRpc3BsYXlTaGlwc09uR2FtZWJvYXJkKHBsYXllck9uZVNoaXBQb3NpdGlvbnMsICdwbGF5ZXItb25lJyk7XHJcbiAgICBcclxuICAgIC8qIGRpc3BsYXkgcGxheWVyIHR3byBnYW1lYm9hcmQgKi9cclxuICAgIGNvbnN0IHBsYXllclR3b1NoaXBQb3NpdGlvbnMgPSBwbGF5ZXJUd29HYW1lYm9hcmQuZ2V0U2hpcFBvc2l0aW9ucygpO1xyXG4gICAgXHJcbiAgICBkaXNwbGF5LmRpc3BsYXlHYW1lYm9hcmQodW5kZWZpbmVkLCAncGxheWVyLXR3bycpO1xyXG4gICAgZGlzcGxheS5kaXNwbGF5U2hpcHNPbkdhbWVib2FyZChwbGF5ZXJUd29TaGlwUG9zaXRpb25zLCAncGxheWVyLXR3bycpO1xyXG5cclxuICAgIGRpc3BsYXkudG9nZ2xlQ2VsbEJsb2NrZXJzKCk7XHJcbiAgICBcclxuICAgIHJldHVybiB7IHBsYXllck9uZSwgcGxheWVyVHdvLCBwbGF5ZXJPbmVHYW1lYm9hcmQsIHBsYXllclR3b0dhbWVib2FyZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVJbml0aWFsaXNlR2FtZSgpIHtcclxuICAgIC8vaW5pdGlhbGlzZSBidXR0b25zXHJcbiAgICBzdGFydEdhbWVCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIGxlYXZlR2FtZUJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICByYW5kb21QbGFjZW1lbnRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIGFycmFuZ2VTaGlwc0J0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgIHBsYXllckxlZnQgPSB0cnVlO1xyXG5cclxuICAgIGRpc3BsYXkuZGlzYWJsZUdyaWRCbG9ja2VyKCdwbGF5ZXItb25lLWdhbWVib2FyZCcpO1xyXG4gICAgZGlzcGxheS5kaXNhYmxlR3JpZEJsb2NrZXIoJ3BsYXllci10d28tZ2FtZWJvYXJkJyk7XHJcbiAgICBkaXNwbGF5LmhpZGVQbGF5ZXJJbnN0cnVjdGlvbnMoKTtcclxuICAgIGRpc3BsYXkuY2xlYXJBbGxHYW1lYm9hcmRzKCk7XHJcbiAgICBkaXNwbGF5LmNsZWFyUmVzdWx0cygpO1xyXG5cclxuICAgIHBsYXllck9uZUdhbWVib2FyZC5jbGVhckdhbWVib2FyZCgpO1xyXG5cclxuICAgIHBsYXllclR3b0dhbWVib2FyZC5jbGVhckdhbWVib2FyZCgpO1xyXG5cclxuICAgIGNvbnN0IHJlSW5pdGlhbGlzZWRPYmplY3RzID0gaW5pdGlhbGlzZUdhbWUoKTtcclxuXHJcbiAgICBwbGF5ZXJPbmVHYW1lYm9hcmQgPSByZUluaXRpYWxpc2VkT2JqZWN0cy5wbGF5ZXJPbmVHYW1lYm9hcmQ7XHJcbiAgICBwbGF5ZXJUd29HYW1lYm9hcmQgPSByZUluaXRpYWxpc2VkT2JqZWN0cy5wbGF5ZXJUd29HYW1lYm9hcmQ7XHJcblxyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdPbkNlbGxDbGlja2VkJywgaGFuZGxlQ2VsbENsaWNrZWQpOyAvL3JlY2VpdmVkIGZyb20gVUkgb24gY2xpY2tcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNlbGxDbGlja2VkKGUpIHtcclxuICAgIGNvbnN0IGdyaWRPd25lciA9IGUuZGV0YWlsLmdyaWRPd25lcjtcclxuICAgIGNvbnN0IGhpdENvb3JkaW5hdGVzID0gZS5kZXRhaWwuY29vcmRpbmF0ZXM7XHJcbiAgICBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBncmlkT3duZXIgPT09ICdwbGF5ZXItb25lJyA/IHBsYXllck9uZUdhbWVib2FyZCA6IHBsYXllclR3b0dhbWVib2FyZDtcclxuICAgIGNvbnN0IGlzU2hpcEhpdCA9IGF0dGFjayhwbGF5ZXJHYW1lYm9hcmQsIGdyaWRPd25lciwgaGl0Q29vcmRpbmF0ZXMpO1xyXG5cclxuICAgIGlmKHBsYXllckdhbWVib2FyZC5hcmVBbGxTaGlwc1N1bmsoKSkge1xyXG4gICAgICAgIGNvbnN0IFdpbm5lciA9IGdyaWRPd25lciA9PT0gJ3BsYXllci1vbmUnID8gJ1BsYXllciBUd28nIDogJ1BsYXllciBPbmUnO1xyXG4gICAgICAgIGRpc3BsYXkuaGFuZGxlR2FtZU92ZXIoV2lubmVyKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYoIWlzU2hpcEhpdCkge1xyXG4gICAgICAgIGRpc3BsYXkudG9nZ2xlR3JpZEJsb2NrZXJzKCk7XHJcbiAgICAgICAgc3dpdGNoVHVybigpO1xyXG4gICAgICAgIGRpc3BsYXkuc2hvd1BsYXllclR1cm4oKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0NvbXB1dGVyc1R1cm4oaXNTaGlwSGl0LCBoaXRDb29yZGluYXRlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0dGFjayhwbGF5ZXJHYW1lYm9hcmQsIGdyaWRPd25lciwgY29vcmRpbmF0ZXMpIHtcclxuICAgIGNvbnN0IFtyb3dOdW1iZXIsIGNvbE51bWJlcl0gPSBjb29yZGluYXRlcztcclxuICAgIGNvbnN0IHsgYWRqYWNlbnRDZWxscywgaXNTaGlwSGl0IH0gPSBwbGF5ZXJHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcyk7XHJcbiAgICBtYXJrQ2VsbHNJblVJKHJvd051bWJlciwgY29sTnVtYmVyLCBncmlkT3duZXIsIHBsYXllckdhbWVib2FyZCwgYWRqYWNlbnRDZWxscyk7XHJcbiAgICByZXR1cm4gaXNTaGlwSGl0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXJrQ2VsbHNJblVJKHJvd051bWJlciwgY29sTnVtYmVyLCBncmlkT3duZXIsIHBsYXllckdhbWVib2FyZCwgYWRqYWNlbnRDZWxscykge1xyXG4gICAgZGlzcGxheS5tYXJrQ2VsbChcclxuICAgICAgICBbcm93TnVtYmVyLCBjb2xOdW1iZXJdLFxyXG4gICAgICAgIGdyaWRPd25lcixcclxuICAgICAgICBwbGF5ZXJHYW1lYm9hcmQuZ2FtZWJvYXJkW3Jvd051bWJlcl1bY29sTnVtYmVyXVxyXG4gICAgKTtcclxuICAgIGlmIChhZGphY2VudENlbGxzKSB7XHJcbiAgICAgICAgYWRqYWNlbnRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtyb3dOdW1iZXIsIGNvbE51bWJlcl0gPSBjZWxsLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgIGRpc3BsYXkubWFya0NlbGwoW3Jvd051bWJlciwgY29sTnVtYmVyXSwgZ3JpZE93bmVyLCBwbGF5ZXJHYW1lYm9hcmQuZ2FtZWJvYXJkW3Jvd051bWJlcl1bY29sTnVtYmVyXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQ29tcHV0ZXJzVHVybihpc1NoaXBIaXQsIGhpdENvb3JkaW5hdGVzKSB7XHJcbiAgICBpZiAoY3VycmVudFBsYXllciA9PSAncGxheWVyLXR3bycpIHtcclxuICAgICAgICBwbGF5Q29tcHV0ZXJzVHVybihpc1NoaXBIaXQsIGhpdENvb3JkaW5hdGVzKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGxheUNvbXB1dGVyc1R1cm4oaXNTaGlwSGl0LCBoaXRDb29yZGluYXRlcykge1xyXG4gICAgbGV0IHJhbmRvbUNvb3JkaW5hdGUgPSBbXTtcclxuICAgIGlmIChpc1NoaXBIaXQpIHtcclxuICAgICAgICByYW5kb21Db29yZGluYXRlID1cclxuICAgICAgICAgICAgcGxheWVyT25lR2FtZWJvYXJkLmdldFJhbmRvbUFkamFjZW50Q29vcmRpbmF0ZShoaXRDb29yZGluYXRlcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJhbmRvbUNvb3JkaW5hdGUgPSBwbGF5ZXJPbmVHYW1lYm9hcmQuZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vY2tFdmVudCA9IHtcclxuICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IHJhbmRvbUNvb3JkaW5hdGUsXHJcbiAgICAgICAgICAgIGdyaWRPd25lcjogJ3BsYXllci1vbmUnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYocGxheWVyTGVmdCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhhbmRsZUNlbGxDbGlja2VkKG1vY2tFdmVudCk7XHJcbiAgICAgICAgZGlzcGxheS5oaWdobGlnaHRBdHRhY2tlZENlbGwocmFuZG9tQ29vcmRpbmF0ZSwgJ3BsYXllci1vbmUnKTtcclxuICAgIH0sIDIwMDApOyAvL2RlbGF5IHRvIHNpbXVsYXRlIFwidGhpbmtpbmdcIi5cclxufVxyXG5cclxuZnVuY3Rpb24gcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKHNoaXAsIHBsYXllckdhbWVib2FyZCkge1xyXG4gICAgbGV0IHsgcmFuZG9tQ29vcmRpbmF0ZSwgcmFuZG9tT3JpZW50YXRpb24gfSA9IHBsYXllckdhbWVib2FyZC5nZXRSYW5kb21Db29yZGluYXRlRm9yU2hpcChzaGlwLnNpemUpO1xyXG4gICAgcGxheWVyR2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwLCByYW5kb21Db29yZGluYXRlLCByYW5kb21PcmllbnRhdGlvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJlZ2luUGxheSgpIHtcclxuICAgIGRpc3BsYXkudG9nZ2xlQ2VsbEJsb2NrZXJzKCk7XHJcbiAgICBkaXNwbGF5LmVuYWJsZUdyaWRCbG9ja2VyKCdwbGF5ZXItb25lLWdhbWVib2FyZCcpO1xyXG4gICAgZGlzcGxheS5kaXNhYmxlR3JpZEJsb2NrZXIoJ3BsYXllci10d28tZ2FtZWJvYXJkJyk7XHJcbiAgICBkaXNwbGF5LnNob3dQbGF5ZXJUdXJuKCdwbGF5ZXItb25lJyk7XHJcbiAgICBcclxuICAgIHN0YXJ0R2FtZUJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICByYW5kb21QbGFjZW1lbnRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgbGVhdmVHYW1lQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBhcnJhbmdlU2hpcHNCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIHBsYXllckxlZnQgPSBmYWxzZTtcclxufVxyXG5cclxuc3RhcnRHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYmVnaW5QbGF5KTtcclxuXHJcbmxlYXZlR2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlSW5pdGlhbGlzZUdhbWUpO1xyXG5cclxucmFuZG9tUGxhY2VtZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXJyYW5nZVNoaXBzQXRSYW5kb20pO1xyXG5cclxuYXJyYW5nZVNoaXBzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZGlzcGxheS5pbml0aWFsaXNlUGxhY2luZ1NoaXBzKHBsYXllck9uZUdhbWVib2FyZCwgJ3BsYXllci1vbmUnKTtcclxuXHJcbiAgICBzdGFydEdhbWVCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgcmFuZG9tUGxhY2VtZW50QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGxlYXZlR2FtZUJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBhcnJhbmdlU2hpcHNCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxufSk7XHJcblxyXG5mdW5jdGlvbiBhcnJhbmdlU2hpcHNBdFJhbmRvbSgpIHtcclxuICAgIHBsYXllck9uZUdhbWVib2FyZC5jbGVhckdhbWVib2FyZCgpO1xyXG5cclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCgyKSwgcGxheWVyT25lR2FtZWJvYXJkKTtcclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCgzKSwgcGxheWVyT25lR2FtZWJvYXJkKTtcclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCgzKSwgcGxheWVyT25lR2FtZWJvYXJkKTtcclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCg0KSwgcGxheWVyT25lR2FtZWJvYXJkKTtcclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCg1KSwgcGxheWVyT25lR2FtZWJvYXJkKTtcclxuXHJcbiAgICBjb25zdCBzaGlwUG9zaXRpb25zID0gcGxheWVyT25lR2FtZWJvYXJkLmdldFNoaXBQb3NpdGlvbnMoKTtcclxuXHJcbiAgICBkaXNwbGF5LnVwZGF0ZVNoaXBzT25HYW1lYm9hcmQoc2hpcFBvc2l0aW9ucywgJ3BsYXllci1vbmUnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUN0cmxCdG5zU3RhdGUoKSB7XHJcbiAgICBzdGFydEdhbWVCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIHJhbmRvbVBsYWNlbWVudEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgbGVhdmVHYW1lQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGFycmFuZ2VTaGlwc0J0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG59IiwiaW1wb3J0IHsgcmVJbml0aWFsaXNlR2FtZSwgY2hhbmdlQ3RybEJ0bnNTdGF0ZSwgcGxheWVyT25lR2FtZWJvYXJkIH0gZnJvbSAnLi4vaW5kZXguanMnXHJcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XHJcbi8vIGNvbnNvbGUubG9nKHJlSW5pdGlhbGlzZUdhbWUoKSk7XHJcblxyXG5jb25zdCBwbGF5ZXJUd29JbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucGxheWVyLXR3by1pbnN0cnVjdGlvbmApO1xyXG5jb25zdCBwbGF5ZXJPbmVJbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucGxheWVyLW9uZS1pbnN0cnVjdGlvbmApO1xyXG5cclxuY29uc3QgcGxheWVyT25lR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXItb25lLWdhbWVib2FyZGApO1xyXG5jb25zdCBwbGF5ZXJUd29HcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllci10d28tZ2FtZWJvYXJkYCk7XHJcblxyXG5jb25zdCBnYW1lQ3RybEJ1dHRvblNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1jdHJsLXNlY3Rpb24nKTtcclxuXHJcbmNvbnN0IHBsYXllck9uZUdyaWRDZWxscyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDEwIH0sICgpID0+IEFycmF5KDEwKS5maWxsKG51bGwpKTtcclxubGV0IGxhc3RDaG9zZW5DZWxscyA9IFtdO1xyXG5cclxuY29uc3QgT3JpZW50YXRpb24gPSBPYmplY3QuZnJlZXplKHtcclxuICAgIEhPUklaT05UQUw6ICdob3Jpem9udGFsJyxcclxuICAgIFZFUlRJQ0FMOiAndmVydGljYWwnLFxyXG59KTtcclxuXHJcbmxldCBzZWxlY3RlZE9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xyXG5cclxubGV0IHNoaXBTaXplcyA9IFs1LCA0LCAzLCAzLCAyXTtcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlHYW1lYm9hcmQoc2l6ZSA9IDEwLCBncmlkT3duZXIpIHtcclxuICAgIGNyZWF0ZUdyaWQoc2l6ZSwgZ3JpZE93bmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJBbGxHYW1lYm9hcmRzKCkge1xyXG4gICAgd2hpbGUgKHBsYXllck9uZUdyaWQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIHBsYXllck9uZUdyaWQucmVtb3ZlQ2hpbGQocGxheWVyT25lR3JpZC5sYXN0Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIHdoaWxlIChwbGF5ZXJUd29HcmlkLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBwbGF5ZXJUd29HcmlkLnJlbW92ZUNoaWxkKHBsYXllclR3b0dyaWQubGFzdENoaWxkKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJHYW1lYm9hcmRDb250ZW50KGdyaWRPd25lcikge1xyXG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1vd25lcj1cIiR7Z3JpZE93bmVyfVwiXSAuY2VsbGApO1xyXG4gICAgY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcclxuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlR3JpZChzaXplLCBncmlkT3duZXIpIHtcclxuICAgIGxldCBncmlkID0gbnVsbDtcclxuICAgIGlmIChncmlkT3duZXIgPT0gJ3BsYXllci1vbmUnKSB7XHJcbiAgICAgICAgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItb25lLWdhbWVib2FyZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci10d28tZ2FtZWJvYXJkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFncmlkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHNpemU7IHJvdysrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgc2l6ZTsgY29sKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZ3JpZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZ3JpZENlbGwuY2xhc3NMaXN0LmFkZChgY2VsbGApO1xyXG4gICAgICAgICAgICBncmlkQ2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcm93Jywgcm93KTtcclxuICAgICAgICAgICAgZ3JpZENlbGwuc2V0QXR0cmlidXRlKCdkYXRhLWNvbCcsIGNvbCk7XHJcbiAgICAgICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoZ3JpZENlbGwpO1xyXG4gICAgICAgICAgICBncmlkLnNldEF0dHJpYnV0ZSgnZGF0YS1vd25lcicsIGdyaWRPd25lcik7XHJcbiAgICAgICAgICAgIGlmIChncmlkT3duZXIgPT0gJ3BsYXllci10d28nKSB7XHJcbiAgICAgICAgICAgICAgICBncmlkQ2VsbC5zdHlsZS5jb250ZW50VmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAgICAgICAgICAgc2V0VXBFdmVudExpc3RlbmVyKGdyaWRDZWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlU2hpcHNPbkdhbWVib2FyZChzaGlwUG9zaXRpb25zLCBncmlkT3duZXIpIHtcclxuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtb3duZXI9XCIke2dyaWRPd25lcn1cIl0gLmNlbGxgKTtcclxuICAgIGNlbGxzLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgfSk7XHJcbiAgICBkaXNwbGF5U2hpcHNPbkdhbWVib2FyZChzaGlwUG9zaXRpb25zLCBncmlkT3duZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5U2hpcHNPbkdhbWVib2FyZChzaGlwUG9zaXRpb25zLCBncmlkT3duZXIpIHtcclxuICAgIHNoaXBQb3NpdGlvbnMuZm9yRWFjaCgocG9zaXRpb24pID0+IHtcclxuICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gcG9zaXRpb24uc3BsaXQoJywnKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICBgW2RhdGEtb3duZXI9XCIke2dyaWRPd25lcn1cIl0gLmNlbGxbZGF0YS1yb3c9XCIke3Jvd31cIl1bZGF0YS1jb2w9XCIke2NvbH1cIl1gXHJcbiAgICAgICAgKS50ZXh0Q29udGVudCA9ICdzJztcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVHcmlkQmxvY2tlcnMoKSB7XHJcbiAgICBwbGF5ZXJPbmVHcmlkLmNsYXNzTGlzdC50b2dnbGUoJ2dyaWQtYmxvY2tlcicpO1xyXG4gICAgcGxheWVyVHdvR3JpZC5jbGFzc0xpc3QudG9nZ2xlKCdncmlkLWJsb2NrZXInKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZW5hYmxlR3JpZEJsb2NrZXIoZ3JpZCkge1xyXG4gICAgY29uc3QgcGxheWVyR3JpZCA9IGdyaWQgPT09ICdwbGF5ZXItb25lLWdhbWVib2FyZCcgPyBwbGF5ZXJPbmVHcmlkIDogcGxheWVyVHdvR3JpZDtcclxuICAgIHBsYXllckdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZC1ibG9ja2VyJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc2FibGVHcmlkQmxvY2tlcihncmlkKSB7XHJcbiAgICBjb25zdCBwbGF5ZXJHcmlkID0gZ3JpZCA9PT0gJ3BsYXllci1vbmUtZ2FtZWJvYXJkJyA/IHBsYXllck9uZUdyaWQgOiBwbGF5ZXJUd29HcmlkO1xyXG4gICAgcGxheWVyR3JpZC5jbGFzc0xpc3QucmVtb3ZlKCdncmlkLWJsb2NrZXInKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlQ2VsbEJsb2NrZXJzKCkge1xyXG4gICAgY29uc3QgY2VsbHMgPSBwbGF5ZXJUd29HcmlkLmNoaWxkTm9kZXM7XHJcbiAgICBjZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnRvZ2dsZSgnYmxvY2tlcicpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dQbGF5ZXJUdXJuKHBsYXllciA9ICcnKSB7XHJcbiAgICBpZihwbGF5ZXIgIT09ICcnKSB7XHJcbiAgICAgICAgcGxheWVyT25lSW5zdHJ1Y3Rpb25zLmZvckVhY2gocGxheWVyT25lSW5zdHJ1Y3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBwbGF5ZXJPbmVJbnN0cnVjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVyT25lSW5zdHJ1Y3Rpb25zLmZvckVhY2gocGxheWVyT25lSW5zdHJ1Y3Rpb24gPT4ge1xyXG4gICAgICAgIHBsYXllck9uZUluc3RydWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHBsYXllclR3b0luc3RydWN0aW9ucy5mb3JFYWNoKHBsYXllclR3b0luc3RydWN0aW9uID0+IHtcclxuICAgICAgICBwbGF5ZXJUd29JbnN0cnVjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlUGxheWVySW5zdHJ1Y3Rpb25zKCkge1xyXG4gICAgcGxheWVyT25lSW5zdHJ1Y3Rpb25zLmZvckVhY2gocGxheWVyT25lSW5zdHJ1Y3Rpb24gPT4ge1xyXG4gICAgICAgIHBsYXllck9uZUluc3RydWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcGxheWVyVHdvSW5zdHJ1Y3Rpb25zLmZvckVhY2gocGxheWVyVHdvSW5zdHJ1Y3Rpb24gPT4ge1xyXG4gICAgICAgIHBsYXllclR3b0luc3RydWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcmtDZWxsKGNvb3JkaW5hdGVzLCBncmlkT3duZXIsIG1hcmtDb250ZW50KSB7XHJcbiAgICBjb25zdCBbcm93LCBjb2xdID0gY29vcmRpbmF0ZXM7XHJcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBgW2RhdGEtb3duZXI9XCIke2dyaWRPd25lcn1cIl0gLmNlbGxbZGF0YS1yb3c9XCIke3Jvd31cIl1bZGF0YS1jb2w9XCIke2NvbH1cIl1gXHJcbiAgICApO1xyXG5cclxuICAgIGNlbGwudGV4dENvbnRlbnQgPSBtYXJrQ29udGVudDtcclxuXHJcbiAgICBpZiAobWFya0NvbnRlbnQgPT0gJ1gnKSB7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5jb2xvciA9ICdyZWQnO1xyXG4gICAgICAgIGNlbGwuc3R5bGUuZm9udFNpemUgPSAnMzJweCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNlbGwuc3R5bGUuZm9udFNpemUgPSAnMTJweCc7XHJcbiAgICB9XHJcblxyXG4gICAgY2VsbC5zdHlsZS5jb250ZW50VmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuXHJcbiAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2VsbENsaWNrKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VXBFdmVudExpc3RlbmVyKGNlbGwpIHtcclxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDZWxsQ2xpY2spO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDZWxsQ2xpY2soZSkge1xyXG4gICAgY29uc3QgY2VsbCA9IGUuY3VycmVudFRhcmdldDtcclxuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW1xyXG4gICAgICAgIE51bWJlcihjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1yb3cnKSksXHJcbiAgICAgICAgTnVtYmVyKGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbCcpKSxcclxuICAgIF07XHJcbiAgICBjb25zdCBncmlkT3duZXIgPSBjZWxsLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW93bmVyJyk7XHJcbiAgICBoaWdobGlnaHRBdHRhY2tlZENlbGwoY29vcmRpbmF0ZXMsIGdyaWRPd25lcik7XHJcbiAgICBzZW5kRXZlbnRPbkNlbGxDbGlja2VkKGNvb3JkaW5hdGVzLCBncmlkT3duZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kRXZlbnRPbkNlbGxDbGlja2VkKGNvb3JkaW5hdGVzLCBncmlkT3duZXIpIHtcclxuICAgIGNvbnN0IGV2ZW50T25DZWxsQ2xpY2tlZCA9IG5ldyBDdXN0b21FdmVudCgnT25DZWxsQ2xpY2tlZCcsIHtcclxuICAgICAgICBkZXRhaWw6IHsgY29vcmRpbmF0ZXMsIGdyaWRPd25lciB9LFxyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50T25DZWxsQ2xpY2tlZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUdhbWVPdmVyKHdpbm5lcikge1xyXG4gICAgY29uc3QgcmVtYWluaW5nQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xyXG4gICAgcmVtYWluaW5nQ2VsbHMuZm9yRWFjaChjZWxsID0+IHtcclxuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2VsbENsaWNrKTtcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qgd2lubmVyUmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXItcmVzdWx0cycpO1xyXG4gICAgd2lubmVyUmVzdWx0cy50ZXh0Q29udGVudCA9IGAke3dpbm5lcn0gV29uIWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZ2hsaWdodEF0dGFja2VkQ2VsbChoaXRDb29yZGluYXRlLCBncmlkT3duZXIpIHtcclxuICAgIGNvbnN0IFtyb3csIGNvbF0gPSBoaXRDb29yZGluYXRlO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBgW2RhdGEtb3duZXI9XCIke2dyaWRPd25lcn1cIl0gLmNlbGxbZGF0YS1yb3c9XCIke3Jvd31cIl1bZGF0YS1jb2w9XCIke2NvbH1cIl1gXHJcbiAgICApLnN0eWxlLmJvcmRlciA9ICczcHggc29saWQgYmx1ZSc7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICBgW2RhdGEtb3duZXI9XCIke2dyaWRPd25lcn1cIl0gLmNlbGxbZGF0YS1yb3c9XCIke3Jvd31cIl1bZGF0YS1jb2w9XCIke2NvbH1cIl1gXHJcbiAgICAgICAgKS5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkICM3YjdiN2InO1xyXG4gICAgfSwgMTUwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyUmVzdWx0cygpIHtcclxuICAgIGNvbnN0IHdpbm5lclJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyLXJlc3VsdHMnKTtcclxuICAgIHdpbm5lclJlc3VsdHMudGV4dENvbnRlbnQgPSAnJztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGlzZVBsYWNpbmdTaGlwcyhwbGF5ZXJHYW1lYm9hcmQsIGdyaWRPd25lcikge1xyXG4gICAgbGFzdENob3NlbkNlbGxzID0gW107XHJcbiAgICBzaGlwU2l6ZXMgPSBbNSwgNCwgMywgMywgMl07XHJcbiAgICBjb25zdCBncmlkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1vd25lcj1cIiR7Z3JpZE93bmVyfVwiXSAuY2VsbGApO1xyXG4gICAgZ3JpZENlbGxzLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm93JyksIDEwKTtcclxuICAgICAgICBjb25zdCBjb2wgPSBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2wnKSwgMTApO1xyXG4gICAgICAgIHBsYXllck9uZUdyaWRDZWxsc1tyb3ddW2NvbF0gPSBjZWxsO1xyXG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDZWxsQ2xpY2spO1xyXG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQbGFjZVNoaXApO1xyXG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgc2hvd1NoaXBQbGFjZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgICBwbGF5ZXJHYW1lYm9hcmQuY2xlYXJHYW1lYm9hcmQoKTtcclxuICAgIGNsZWFyR2FtZWJvYXJkQ29udGVudCgncGxheWVyLW9uZScpO1xyXG5cclxuICAgIC8vYWRkIGNvbmZpcm0gYW5kIGNhbmNlbCBidXR0b25zXHJcbiAgICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25maXJtQnRuLmlubmVySFRNTCA9ICdDb25maXJtJztcclxuICAgIGNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZCgnZ2FtZS1jdHJsLWJ0bicpO1xyXG4gICAgY29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKCdjb25maXJtLXBsYWNlbWVudC1idG4nKTtcclxuICAgIGNvbmZpcm1CdG4uc2V0QXR0cmlidXRlKCd0aXRsZScsICdDb25maXJtIHNoaXAgcG9zaXRpb25zJyk7XHJcbiAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29uZmlybVNoaXBzUGxhY2VtZW50KTtcclxuICAgIGNvbmZpcm1CdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgXHJcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNhbmNlbEJ0bi5pbm5lckhUTUwgPSAnQ2FuY2VsJztcclxuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdnYW1lLWN0cmwtYnRuJyk7XHJcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnY2FuY2VsLXBsYWNlbWVudC1idG4nKTtcclxuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ0NhbmNlbCBwbGFjaW5nIHNoaXBzJyk7XHJcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW5jZWxTaGlwc1BsYWNlbWVudCk7XHJcblxyXG4gICAgY29uc3QgcGxhY2VtZW50QnRuc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGxhY2VtZW50QnRuc0Rpdi5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnQtY3RybC1idG5zJyk7XHJcblxyXG4gICAgcGxhY2VtZW50QnRuc0Rpdi5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcclxuICAgIHBsYWNlbWVudEJ0bnNEaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcclxuXHJcbiAgICBnYW1lQ3RybEJ1dHRvblNlY3Rpb24uYXBwZW5kQ2hpbGQocGxhY2VtZW50QnRuc0Rpdik7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleVByZXNzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZSkge1xyXG4gICAgaWYgKGUua2V5ID09PSAncScpIHtcclxuICAgICAgICBzd2l0Y2hTaGlwT3JpZW50YXRpb24oKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3dpdGNoU2hpcE9yaWVudGF0aW9uKCkge1xyXG4gICAgc2VsZWN0ZWRPcmllbnRhdGlvbiA9XHJcbiAgICAgICAgc2VsZWN0ZWRPcmllbnRhdGlvbiA9PT0gT3JpZW50YXRpb24uSE9SSVpPTlRBTFxyXG4gICAgICAgICAgICA/IE9yaWVudGF0aW9uLlZFUlRJQ0FMXHJcbiAgICAgICAgICAgIDogT3JpZW50YXRpb24uSE9SSVpPTlRBTDtcclxufVxyXG5cclxuZnVuY3Rpb24gY29uZmlybVNoaXBzUGxhY2VtZW50KGUpIHtcclxuICAgIGNvbnN0IGNvbmZpcm1CdG4gPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBnYW1lQ3RybEJ1dHRvblNlY3Rpb24ucmVtb3ZlQ2hpbGQoY29uZmlybUJ0bi5wYXJlbnRFbGVtZW50KTtcclxuICAgIGNoYW5nZUN0cmxCdG5zU3RhdGUoKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlQcmVzcyk7XHJcblxyXG4gICAgY29uc3QgZ3JpZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtb3duZXI9XCJwbGF5ZXItb25lXCJdIC5jZWxsYCk7XHJcbiAgICBncmlkQ2VsbHMuZm9yRWFjaChjZWxsID0+IHtcclxuICAgICAgICAvLyBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2VsbENsaWNrKTtcclxuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUGxhY2VTaGlwKTtcclxuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHNob3dTaGlwUGxhY2VtZW50KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYW5jZWxTaGlwc1BsYWNlbWVudChlKSB7XHJcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICByZUluaXRpYWxpc2VHYW1lKCk7XHJcbiAgICBnYW1lQ3RybEJ1dHRvblNlY3Rpb24ucmVtb3ZlQ2hpbGQoY2FuY2VsQnRuLnBhcmVudEVsZW1lbnQpOyAvL3JlbW92ZSBwbGFjZW1lbnRCdG5zRGl2XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVBsYWNlU2hpcChlKSB7XHJcbiAgICBjb25zdCBjaG9zZW5DZWxsID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgbGV0IFtjb29yZGluYXRlWCwgY29vcmRpbmF0ZVldID0gW1xyXG4gICAgICAgIE51bWJlcihjaG9zZW5DZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1yb3cnKSksXHJcbiAgICAgICAgTnVtYmVyKGNob3NlbkNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbCcpKSxcclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgY3VycmVudFNoaXBTaXplID0gc2hpcFNpemVzWzBdO1xyXG4gICAgaWYoIXBsYXllck9uZUdhbWVib2FyZC5pc1ZhbGlkUG9zaXRpb24oY3VycmVudFNoaXBTaXplLCBbY29vcmRpbmF0ZVgsIGNvb3JkaW5hdGVZXSwgc2VsZWN0ZWRPcmllbnRhdGlvbikpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICBcclxuICAgIH1cclxuICAgIHNoaXBTaXplcy5zaGlmdCgpO1xyXG5cclxuICAgIGlmKHNoaXBTaXplcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmZpcm0tcGxhY2VtZW50LWJ0bicpO1xyXG4gICAgICAgIGNvbmZpcm1CdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZygncGxhY2VTaGlwJyk7XHJcblxyXG4gICAgY29uc3Qgc2hpcENlbGxzID0gcGxheWVyT25lR2FtZWJvYXJkLnBsYWNlU2hpcChuZXcgU2hpcChjdXJyZW50U2hpcFNpemUpLCBbY29vcmRpbmF0ZVgsIGNvb3JkaW5hdGVZXSwgc2VsZWN0ZWRPcmllbnRhdGlvbik7XHJcbiAgICBkaXNwbGF5U2hpcHNPbkdhbWVib2FyZChzaGlwQ2VsbHMsICdwbGF5ZXItb25lJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dTaGlwUGxhY2VtZW50KGUpIHtcclxuICAgIGNvbnN0IGNlbGwgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBsZXQgW2Nvb3JkaW5hdGVYLCBjb29yZGluYXRlWV0gPSBbXHJcbiAgICAgICAgTnVtYmVyKGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXJvdycpKSxcclxuICAgICAgICBOdW1iZXIoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sJykpLFxyXG4gICAgXTtcclxuXHJcbiAgICBsYXN0Q2hvc2VuQ2VsbHMuZm9yRWFjaChjZWxsID0+IHtcclxuICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50U2hpcFNpemUgPSBzaGlwU2l6ZXNbMF07XHJcbiAgICBpZighcGxheWVyT25lR2FtZWJvYXJkLmlzVmFsaWRQb3NpdGlvbihjdXJyZW50U2hpcFNpemUsIFtjb29yZGluYXRlWCwgY29vcmRpbmF0ZVldLCBzZWxlY3RlZE9yaWVudGF0aW9uKSkge1xyXG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMjU1LCAwLCAwLCAwLjUpJztcclxuICAgICAgICBsYXN0Q2hvc2VuQ2VsbHMucHVzaChjZWxsKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTaGlwU2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgaWYoc2VsZWN0ZWRPcmllbnRhdGlvbiA9PSBPcmllbnRhdGlvbi5IT1JJWk9OVEFMKSB7XHJcbiAgICAgICAgICAgIGxldCBkWSA9IGNvb3JkaW5hdGVZICsgaTtcclxuICAgICAgICAgICAgbGV0IGNob3NlbkNlbGwgPSBwbGF5ZXJPbmVHcmlkQ2VsbHNbY29vcmRpbmF0ZVhdW2RZXTtcclxuICAgICAgICAgICAgY2hvc2VuQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLCAyNTUsIDAsIDAuNSknO1xyXG4gICAgICAgICAgICBsYXN0Q2hvc2VuQ2VsbHMucHVzaChjaG9zZW5DZWxsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZFggPSBjb29yZGluYXRlWCArIGk7XHJcbiAgICAgICAgICAgIGxldCBjaG9zZW5DZWxsID0gcGxheWVyT25lR3JpZENlbGxzW2RYXVtjb29yZGluYXRlWV07XHJcbiAgICAgICAgICAgIGNob3NlbkNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwgMjU1LCAwLCAwLjUpJztcclxuICAgICAgICAgICAgbGFzdENob3NlbkNlbGxzLnB1c2goY2hvc2VuQ2VsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdHtcclxuICAgIGRpc3BsYXlHYW1lYm9hcmQsXHJcbiAgICBtYXJrQ2VsbCxcclxuICAgIHRvZ2dsZUdyaWRCbG9ja2VycyxcclxuICAgIGRpc2FibGVHcmlkQmxvY2tlcixcclxuICAgIGVuYWJsZUdyaWRCbG9ja2VyLFxyXG4gICAgdG9nZ2xlQ2VsbEJsb2NrZXJzLFxyXG4gICAgc2hvd1BsYXllclR1cm4sXHJcbiAgICBoaWRlUGxheWVySW5zdHJ1Y3Rpb25zLFxyXG4gICAgaGFuZGxlR2FtZU92ZXIsXHJcbiAgICBkaXNwbGF5U2hpcHNPbkdhbWVib2FyZCxcclxuICAgIHVwZGF0ZVNoaXBzT25HYW1lYm9hcmQsXHJcbiAgICBjbGVhckFsbEdhbWVib2FyZHMsXHJcbiAgICBoaWdobGlnaHRBdHRhY2tlZENlbGwsXHJcbiAgICBjbGVhclJlc3VsdHMsXHJcbiAgICBpbml0aWFsaXNlUGxhY2luZ1NoaXBzLFxyXG59O1xyXG4iLCJsZXQgY3VycmVudFBsYXllciA9ICcnO1xyXG5cclxuZnVuY3Rpb24gc2V0Q3VycmVudFBsYXllcihwbGF5ZXIpIHtcclxuICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN3aXRjaFR1cm4oKSB7XHJcbiAgICBpZiAoY3VycmVudFBsYXllciA9PT0gJ3BsYXllci1vbmUnKSB7XHJcbiAgICAgICAgY3VycmVudFBsYXllciA9ICdwbGF5ZXItdHdvJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY3VycmVudFBsYXllciA9ICdwbGF5ZXItb25lJztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgY3VycmVudFBsYXllciwgc2V0Q3VycmVudFBsYXllciwgc3dpdGNoVHVybiB9OyIsImNvbnN0IE9yaWVudGF0aW9uID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICBIT1JJWk9OVEFMOiAnaG9yaXpvbnRhbCcsXHJcbiAgICBWRVJUSUNBTDogJ3ZlcnRpY2FsJyxcclxufSk7XHJcblxyXG5jbGFzcyBHYW1lYm9hcmQge1xyXG4gICAgI1JPV19TSVpFID0gMTA7XHJcbiAgICAjQ09MX1NJWkUgPSAxMDtcclxuICAgICNhZGphY2VudENlbGxEZWx0YXMgPSBbXHJcbiAgICAgICAgWy0xLCAtMV0sXHJcbiAgICAgICAgWy0xLCAwXSxcclxuICAgICAgICBbLTEsIDFdLFxyXG4gICAgICAgIFswLCAtMV0sXHJcbiAgICAgICAgWzAsIDFdLFxyXG4gICAgICAgIFsxLCAtMV0sXHJcbiAgICAgICAgWzEsIDBdLFxyXG4gICAgICAgIFsxLCAxXSxcclxuICAgIF07XHJcbiAgICAjcmVsZXZhbnRBZGphY2VudENlbGxEZWx0YXMgPSBbXHJcbiAgICAgICAgWy0xLCAwXSxcclxuICAgICAgICBbMCwgLTFdLFxyXG4gICAgICAgIFswLCAxXSxcclxuICAgICAgICBbMSwgMF0sXHJcbiAgICBdO1xyXG4gICAgI3Jlc2VydmVkUG9zaXRpb25zID0gbmV3IFNldCgpO1xyXG4gICAgI3NoaXBQb3NpdGlvbnMgPSBuZXcgU2V0KCk7XHJcbiAgICAjc2hpcFRvQWRqYWNlbnRDZWxsc01hcCA9IG5ldyBNYXAoKTsgLy9tYXAgb2Ygc2hpcCBvYmplY3QgdG8gYWRqYWNlbnRDZWxsc09mU2hpcCBzZXQoKVxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgQXJyYXkodGhpcy4jUk9XX1NJWkUpXHJcbiAgICAgICAgICAgIC5maWxsKG51bGwpXHJcbiAgICAgICAgICAgIC5tYXAoKCkgPT4gbmV3IEFycmF5KHRoaXMuI0NPTF9TSVpFKS5maWxsKG51bGwpKTtcclxuICAgICAgICB0aGlzLmF2YWlsYWJsZUNlbGxzID0gdGhpcy5pbml0aWFsaXplQXZhaWxhYmxlQ29vcmRpbmF0ZXMoKTtcclxuICAgICAgICB0aGlzLnNoaXBzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZUF2YWlsYWJsZUNvb3JkaW5hdGVzKCkge1xyXG4gICAgICAgIGNvbnN0IGNlbGxzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgcm93TnVtID0gMDsgcm93TnVtIDwgdGhpcy4jUk9XX1NJWkU7IHJvd051bSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbE51bSA9IDA7IGNvbE51bSA8IHRoaXMuI0NPTF9TSVpFOyBjb2xOdW0rKykge1xyXG4gICAgICAgICAgICAgICAgY2VsbHMucHVzaChbcm93TnVtLCBjb2xOdW1dKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2VsbHM7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJHYW1lYm9hcmQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQgPSB0aGlzLmdhbWVib2FyZC5tYXAoKHJvdykgPT4gcm93LmZpbGwobnVsbCkpO1xyXG4gICAgICAgIHRoaXMuI3Jlc2VydmVkUG9zaXRpb25zLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy4jc2hpcFBvc2l0aW9ucy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuI3NoaXBUb0FkamFjZW50Q2VsbHNNYXAuY2xlYXIoKTtcclxuICAgICAgICAvLyB0aGlzLnNoaXBzLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWRqYWNlbnRDZWxscyhwb3NpdGlvbiwgYWRqYWNlbnREZWx0YXMpIHtcclxuICAgICAgICBsZXQgW2N1cnJlbnRYLCBjdXJyZW50WV0gPSBwb3NpdGlvbjtcclxuICAgICAgICBjb25zdCBhZGphY2VudENlbGxzID0gW107XHJcbiAgICAgICAgYWRqYWNlbnREZWx0YXMuZm9yRWFjaCgoY2VsbENvb3JkaW5hdGVzKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBbYWRqYWNlbnREZWx0YVgsIGFkamFjZW50RGVsdGFZXSA9IGNlbGxDb29yZGluYXRlcztcclxuICAgICAgICAgICAgbGV0IGFkamFjZW50WCA9IGN1cnJlbnRYICsgYWRqYWNlbnREZWx0YVg7XHJcbiAgICAgICAgICAgIGxldCBhZGphY2VudFkgPSBjdXJyZW50WSArIGFkamFjZW50RGVsdGFZO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBhZGphY2VudFggPj0gMCAmJlxyXG4gICAgICAgICAgICAgICAgYWRqYWNlbnRYIDw9IDkgJiZcclxuICAgICAgICAgICAgICAgIGFkamFjZW50WSA+PSAwICYmXHJcbiAgICAgICAgICAgICAgICBhZGphY2VudFkgPD0gOVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGxldCBhZGphY2VudENlbGxzQ29vcmRpbmF0ZSA9IFthZGphY2VudFgsIGFkamFjZW50WV07XHJcbiAgICAgICAgICAgICAgICBhZGphY2VudENlbGxzLnB1c2goYWRqYWNlbnRDZWxsc0Nvb3JkaW5hdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBhZGphY2VudENlbGxzO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVmFsaWRQb3NpdGlvbihzaGlwTGVuZ3RoLCBwb3NpdGlvbiwgb3JpZW50YXRpb24pIHtcclxuICAgICAgICBsZXQgW3Jvd051bWJlciwgY29sTnVtYmVyXSA9IHBvc2l0aW9uO1xyXG5cclxuICAgICAgICAvL2NoZWNrIGlmIHBvc2l0aW9uIGlzIGFscmVhZHkgZmlsbGVkIG9yIGlzIGFkamFjZW50IHBvc2l0aW9uIG9mIGZpbGxlZCBjZWxsLlxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSBPcmllbnRhdGlvbi5IT1JJWk9OVEFMKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZFBvc2l0aW9uID0gW3Jvd051bWJlciwgY29sTnVtYmVyICsgaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jcmVzZXJ2ZWRQb3NpdGlvbnMuaGFzKGRQb3NpdGlvbi50b1N0cmluZygpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3NoaXBQb3NpdGlvbnMuaGFzKGRQb3NpdGlvbi50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRQb3NpdGlvbiA9IFtyb3dOdW1iZXIgKyBpLCBjb2xOdW1iZXJdO1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3Jlc2VydmVkUG9zaXRpb25zLmhhcyhkUG9zaXRpb24udG9TdHJpbmcoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNzaGlwUG9zaXRpb25zLmhhcyhkUG9zaXRpb24udG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9jaGVjayBpZiBpdHMgbGVuZ3RoIGNhbiBnbyBvdXQgb2YgYm91bmRzO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgb3JpZW50YXRpb24gPT0gT3JpZW50YXRpb24uSE9SSVpPTlRBTCAmJlxyXG4gICAgICAgICAgICBjb2xOdW1iZXIgKyBzaGlwTGVuZ3RoID4gdGhpcy4jUk9XX1NJWkVcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgIG9yaWVudGF0aW9uID09IE9yaWVudGF0aW9uLlZFUlRJQ0FMICYmXHJcbiAgICAgICAgICAgIHJvd051bWJlciArIHNoaXBMZW5ndGggPiB0aGlzLiNDT0xfU0laRVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwbGFjZVNoaXAoc2hpcCwgcG9zaXRpb24sIG9yaWVudGF0aW9uKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWRQb3NpdGlvbihzaGlwLnNpemUsIHBvc2l0aW9uLCBvcmllbnRhdGlvbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgW3Jvd051bWJlciwgY29sTnVtYmVyXSA9IHBvc2l0aW9uO1xyXG4gICAgICAgIGxldCBzaGlwTGVuZ3RoID0gc2hpcC5zaXplO1xyXG4gICAgICAgIGxldCBhbGxBZGphY2VudENlbGxzT2ZTaGlwID0gbmV3IFNldCgpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTaGlwQ2VsbHMgPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSBPcmllbnRhdGlvbi5IT1JJWk9OVEFMKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVib2FyZFtyb3dOdW1iZXJdW2NvbE51bWJlcl0gPSBzaGlwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4jc2hpcFBvc2l0aW9ucy5hZGQoW3Jvd051bWJlciwgY29sTnVtYmVyXS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTaGlwQ2VsbHMuYWRkKFtyb3dOdW1iZXIsIGNvbE51bWJlcl0udG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWRqYWNlbnRDZWxscyA9IHRoaXMuZ2V0QWRqYWNlbnRDZWxscyhcclxuICAgICAgICAgICAgICAgICAgICBbcm93TnVtYmVyLCBjb2xOdW1iZXJdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2FkamFjZW50Q2VsbERlbHRhc1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGFkamFjZW50Q2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3Jlc2VydmVkUG9zaXRpb25zLmFkZChjZWxsLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbEFkamFjZW50Q2VsbHNPZlNoaXAuYWRkKGNlbGwudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbE51bWJlcisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09IE9yaWVudGF0aW9uLlZFUlRJQ0FMKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVib2FyZFtyb3dOdW1iZXJdW2NvbE51bWJlcl0gPSBzaGlwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4jc2hpcFBvc2l0aW9ucy5hZGQoW3Jvd051bWJlciwgY29sTnVtYmVyXS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTaGlwQ2VsbHMuYWRkKFtyb3dOdW1iZXIsIGNvbE51bWJlcl0udG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWRqYWNlbnRDZWxscyA9IHRoaXMuZ2V0QWRqYWNlbnRDZWxscyhcclxuICAgICAgICAgICAgICAgICAgICBbcm93TnVtYmVyLCBjb2xOdW1iZXJdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2FkamFjZW50Q2VsbERlbHRhc1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGFkamFjZW50Q2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3Jlc2VydmVkUG9zaXRpb25zLmFkZChjZWxsLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbEFkamFjZW50Q2VsbHNPZlNoaXAuYWRkKGNlbGwudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJvd051bWJlcisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDsgLy9pbnZhbGlkIG9yaWVudGF0aW9uXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3JlbW92ZSBhbGwgY2VsbHMgdGhhdCBoYXZlIHNoaXBzXHJcbiAgICAgICAgYWxsQWRqYWNlbnRDZWxsc09mU2hpcC5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjZWxsLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWVib2FyZFtyb3ddW2NvbF0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGFsbEFkamFjZW50Q2VsbHNPZlNoaXAuZGVsZXRlKGNlbGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuI3NoaXBUb0FkamFjZW50Q2VsbHNNYXAuc2V0KHNoaXAsIGFsbEFkamFjZW50Q2VsbHNPZlNoaXApO1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50U2hpcENlbGxzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY2VpdmVBdHRhY2soaGl0Q29vcmRpbmF0ZSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGhpdENvb3JkaW5hdGUpO1xyXG4gICAgICAgIGxldCBbaGl0Q29vcmRpbmF0ZVgsIGhpdENvb3JkaW5hdGVZXSA9IGhpdENvb3JkaW5hdGU7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuZ2FtZWJvYXJkW2hpdENvb3JkaW5hdGVYXVtoaXRDb29yZGluYXRlWV07XHJcbiAgICAgICAgaWYgKHRhcmdldCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZWJvYXJkW2hpdENvb3JkaW5hdGVYXVtoaXRDb29yZGluYXRlWV0gPSAnTyc7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGFkamFjZW50Q2VsbHM6IG51bGwsIGlzU2hpcEhpdDogZmFsc2UgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRhcmdldC5oaXQoKTtcclxuICAgICAgICB0aGlzLmdhbWVib2FyZFtoaXRDb29yZGluYXRlWF1baGl0Q29vcmRpbmF0ZVldID0gJ1gnO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hcmVBbGxTaGlwc1N1bmsoKSkge1xyXG4gICAgICAgICAgICAvL2dhbWVvdmVyLCBhbm5vdW5jZSB3aW5uZXJcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0dhbWVvdmVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0YXJnZXQuaXNTdW5rKCkpIHtcclxuICAgICAgICAgICAgY29uc3QgYWRqYWNlbnRDZWxsc1NldCA9IHRoaXMuI3NoaXBUb0FkamFjZW50Q2VsbHNNYXAuZ2V0KHRhcmdldCk7XHJcbiAgICAgICAgICAgIGFkamFjZW50Q2VsbHNTZXQuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IGNlbGwuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZWJvYXJkW3Jvd11bY29sXSA9ICdPJztcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2VsbEZyb21BdmFpbGFibGVDZWxscyhbcm93LCBjb2xdKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGFkamFjZW50Q2VsbHM6IGFkamFjZW50Q2VsbHNTZXQsIGlzU2hpcEhpdDogdHJ1ZSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBhZGphY2VudENlbGxzOiBudWxsLCBpc1NoaXBIaXQ6IHRydWUgfTtcclxuICAgIH1cclxuXHJcbiAgICBhcmVBbGxTaGlwc1N1bmsoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rU3RhdHVzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTaGlwUG9zaXRpb25zKGxvZ1NoaXBQb3NpdGlvbnMgPSBmYWxzZSkge1xyXG4gICAgICAgIGlmKGxvZ1NoaXBQb3NpdGlvbnMpIGNvbnNvbGUubG9nKHRoaXMuI3NoaXBQb3NpdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNzaGlwUG9zaXRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJhbmRvbUNvb3JkaW5hdGVGb3JTaGlwKHNoaXBMZW5ndGgpIHtcclxuICAgICAgICBpZiAodGhpcy5hdmFpbGFibGVDZWxscy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBhdmFpbGFibGUgY2VsbHMgdG8gcGxhY2Ugc2hpcCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgTUFYX1JFVFJJRVMgPSAxMDA7XHJcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcclxuXHJcbiAgICAgICAgd2hpbGUgKGF0dGVtcHRzIDwgTUFYX1JFVFJJRVMpIHtcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tT3JpZW50YXRpb24gPSB0aGlzLmdldFJhbmRvbU9yaWVudGF0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByYW5nZVggPVxyXG4gICAgICAgICAgICAgICAgcmFuZG9tT3JpZW50YXRpb24gPT09IE9yaWVudGF0aW9uLkhPUklaT05UQUxcclxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuI1JPV19TSVpFXHJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLiNST1dfU0laRSAtIChzaGlwTGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlWSA9XHJcbiAgICAgICAgICAgICAgICByYW5kb21PcmllbnRhdGlvbiA9PT0gT3JpZW50YXRpb24uSE9SSVpPTlRBTFxyXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy4jQ09MX1NJWkUgLSAoc2hpcExlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLiNDT0xfU0laRTtcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tQ29vcmRpbmF0ZSA9IHRoaXMuZ2V0UmFuZG9tQ29vcmRpbmF0ZUluUmFuZ2UoXHJcbiAgICAgICAgICAgICAgICByYW5nZVgsXHJcbiAgICAgICAgICAgICAgICByYW5nZVlcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZFBvc2l0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgIHNoaXBMZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tQ29vcmRpbmF0ZSxcclxuICAgICAgICAgICAgICAgICAgICByYW5kb21PcmllbnRhdGlvblxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHJhbmRvbUNvb3JkaW5hdGUsIHJhbmRvbU9yaWVudGF0aW9uIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF0dGVtcHRzKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmaW5kIHZhbGlkIGNvb3JkaW5hdGUgZm9yIHNoaXAgcGxhY2VtZW50Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmFuZG9tT3JpZW50YXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPCAwLjVcclxuICAgICAgICAgICAgPyBPcmllbnRhdGlvbi5IT1JJWk9OVEFMXHJcbiAgICAgICAgICAgIDogT3JpZW50YXRpb24uVkVSVElDQUw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmFuZG9tQ29vcmRpbmF0ZUluUmFuZ2UocmFuZ2VYLCByYW5nZVkpIHtcclxuICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmdlWCk7XHJcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYW5nZVkpO1xyXG4gICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5hdmFpbGFibGVDZWxscy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBtb3JlIGF2YWlsYWJsZSBjZWxscycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihcclxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIHRoaXMuYXZhaWxhYmxlQ2VsbHMubGVuZ3RoXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbGV0IHJhbmRvbUNvb3JkaW5hdGUgPSB0aGlzLmF2YWlsYWJsZUNlbGxzW3JhbmRvbUluZGV4XTtcclxuICAgICAgICB0aGlzLmF2YWlsYWJsZUNlbGxzLnNwbGljZShyYW5kb21JbmRleCwgMSk7XHJcblxyXG4gICAgICAgIHJldHVybiByYW5kb21Db29yZGluYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJhbmRvbUFkamFjZW50Q29vcmRpbmF0ZShoaXRDb29yZGluYXRlKSB7XHJcbiAgICAgICAgY29uc3QgYWxsQWRqYWNlbnRDb29yZGluYXRlcyA9XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVsZXZhbnRBZGphY2VudENvb3JkaW5hdGVzKGhpdENvb3JkaW5hdGUpO1xyXG4gICAgICAgIGlmICghYWxsQWRqYWNlbnRDb29yZGluYXRlcyB8fCBhbGxBZGphY2VudENvb3JkaW5hdGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSYW5kb21Db29yZGluYXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoXHJcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiBhbGxBZGphY2VudENvb3JkaW5hdGVzLmxlbmd0aFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJhbmRvbUFkamFjZW50Q29vcmRpbmF0ZSA9IGFsbEFkamFjZW50Q29vcmRpbmF0ZXNbcmFuZG9tSW5kZXhdO1xyXG5cclxuICAgICAgICB0aGlzLnJlbW92ZUNlbGxGcm9tQXZhaWxhYmxlQ2VsbHMocmFuZG9tQWRqYWNlbnRDb29yZGluYXRlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJhbmRvbUFkamFjZW50Q29vcmRpbmF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZWxldmFudEFkamFjZW50Q29vcmRpbmF0ZXMoaGl0Q29vcmRpbmF0ZSkge1xyXG4gICAgICAgIGNvbnN0IGFsbEFkamFjZW50Q29vcmRpbmF0ZXMgPSB0aGlzLmdldEFkamFjZW50Q2VsbHMoXHJcbiAgICAgICAgICAgIGhpdENvb3JkaW5hdGUsXHJcbiAgICAgICAgICAgIHRoaXMuI3JlbGV2YW50QWRqYWNlbnRDZWxsRGVsdGFzXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCByZWxldmFudEFkamFjZW50Q29vcmRpbmF0ZXMgPSBhbGxBZGphY2VudENvb3JkaW5hdGVzLmZpbHRlcihcclxuICAgICAgICAgICAgKGNvb3JkaW5hdGUpID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVib2FyZFtjb29yZGluYXRlWzBdXVtjb29yZGluYXRlWzFdXSAhPT0gJ1gnICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVib2FyZFtjb29yZGluYXRlWzBdXVtjb29yZGluYXRlWzFdXSAhPT0gJ08nXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gcmVsZXZhbnRBZGphY2VudENvb3JkaW5hdGVzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNlbGxGcm9tQXZhaWxhYmxlQ2VsbHMoY2VsbFRvUmVtb3ZlKSB7XHJcbiAgICAgICAgdGhpcy5hdmFpbGFibGVDZWxscyA9IHRoaXMuYXZhaWxhYmxlQ2VsbHMuZmlsdGVyKFxyXG4gICAgICAgICAgICAoYXZhaWxhYmxlQ2VsbCkgPT5cclxuICAgICAgICAgICAgICAgICEoXHJcbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlQ2VsbFswXSA9PSBjZWxsVG9SZW1vdmVbMF0gJiZcclxuICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVDZWxsWzFdID09IGNlbGxUb1JlbW92ZVsxXVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEdhbWVib2FyZCwgT3JpZW50YXRpb24gfTtcclxuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQuanMnXHJcblxyXG5jbGFzcyBQbGF5ZXIge1xyXG4gICAgY29uc3RydWN0b3IodHlwZSkge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJjbGFzcyBTaGlwIHtcclxuICAgIGNvbnN0cnVjdG9yKHNpemUsIGhpdENvdW50ID0gMCwgaXNTdW5rU3RhdHVzID0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMuaGl0Q291bnQgPSBoaXRDb3VudDtcclxuICAgICAgICB0aGlzLmlzU3Vua1N0YXR1cyA9IGlzU3Vua1N0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICBoaXQoKSB7XHJcbiAgICAgICAgdGhpcy5oaXRDb3VudCsrO1xyXG4gICAgICAgIHRoaXMuaXNTdW5rU3RhdHVzID0gdGhpcy5pc1N1bmsoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaXNTdW5rKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhpdENvdW50ID09IHRoaXMuc2l6ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==