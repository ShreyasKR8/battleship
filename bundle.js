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
    height: 200px;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,qFAAqF;;AAErF;IACI,+BAA+B;IAC/B,+DAAgE;IAChE,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,2CAA2C;IAC3C,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,YAAY;IACZ,oCAAoC;IACpC,kBAAkB;IAClB,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,iCAAiC;IACjC,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,kBAAkB;IAClB,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;;;IAGI,kBAAkB;IAClB,iBAAiB;AACrB;;;AAGA;IACI,aAAa;IACb,sCAAsC;IACtC,mCAAmC;AACvC;;AAEA;IACI,sBAAsB;IACtB,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,iBAAiB;IACjB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,cAAc;AAClB;;AAEA,cAAc;AACd;IACI,oBAAoB;IACpB,YAAY;AAChB;;AAEA,cAAc;AACd;IACI,oBAAoB;AACxB;;AAEA,iCAAiC;AACjC;IACI,kBAAkB;AACtB","sourcesContent":["/* @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap'); */\r\n\r\n@font-face {\r\n    font-family: 'Android-Assassin';\r\n    src: url('../fonts/AndroidAssassin-WXXY.ttf') format('opentype');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: Verdana;\r\n}\r\n\r\nheader {\r\n    font-size: 22px;\r\n    width: fit-content;\r\n    margin: 30px auto 0;\r\n}\r\n\r\nheader h1 {\r\n    font-family: 'Android-Assassin', sans-serif;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.main-section {\r\n    display: flex;\r\n    /* flex-direction: ; */\r\n}\r\n\r\n.game-ctrl-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: fit-content;\r\n    height: 200px;\r\n    margin: auto 100px;\r\n}\r\n\r\n.game-ctrl-btn {\r\n    width: 150px;\r\n    margin: 10px auto;\r\n    height: 30px;\r\n    background-color: rgb(234, 234, 234);\r\n    border-radius: 2px;\r\n    border: 1px solid rgb(0, 0, 0);\r\n    font-size: 16px;\r\n}\r\n\r\n.game-ctrl-btn:not(:disabled):hover {\r\n    background-color: rgb(60, 60, 60);\r\n    color: white;\r\n}\r\n\r\n.gameboards {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 50px;\r\n    width: fit-content;\r\n    margin: 50px 50px 30px;\r\n    /* border: 1px solid red; */\r\n}\r\n\r\n.player-one-instruction, \r\n.player-two-instruction,\r\n.player-two-instruction-not-needed {\r\n    width: fit-content;\r\n    margin: 10px auto;\r\n}\r\n\r\n\r\n.player-grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n}\r\n\r\n.cell {\r\n    border: 1px solid #ccc;\r\n    border: 1px solid #7b7b7b;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-family: monospace;\r\n    font-size: 1.2rem;\r\n    width: 36px;\r\n    height: 36px;\r\n}\r\n\r\n.cell:hover {\r\n    background-color: #ccc;\r\n}\r\n\r\n.results {\r\n    width: fit-content;\r\n    margin: 0 auto;\r\n}\r\n\r\n/* for grids */\r\n.grid-blocker {\r\n    pointer-events: none;\r\n    opacity: 0.3;\r\n}\r\n\r\n/* for cells */\r\n.blocker {\r\n    pointer-events: none;\r\n}\r\n\r\n/* for player turn instructions */\r\n.hidden {\r\n    visibility: hidden;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const playerTwoInstructions = document.querySelectorAll(`.player-two-instruction`);
const playerOneInstructions = document.querySelectorAll(`.player-one-instruction`);

const playerOneGrid = document.querySelector(`.player-one-gameboard`);
const playerTwoGrid = document.querySelector(`.player-two-gameboard`);
const playerOneGridCells = Array.from({ length: 10 }, () => Array(10).fill(null));

const Orientation = Object.freeze({
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical',
});

let orientation = 'horizontal';

const shipSizes = [5, 4, 3, 3, 2];

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
    // updateShipsOnGameboard()
}

function handlePlaceShip() {

}

function showShipPlacement(e) {
    const cell = e.currentTarget;
    let [coordinateX, coordinateY] = [
        Number(cell.getAttribute('data-row')),
        Number(cell.getAttribute('data-col')),
    ];
    // const gridOwner = cell.parentElement.getAttribute('data-owner');
    const currentShipSize = shipSizes[0];
    for(let i = 0; i < currentShipSize; i++) {
        if(orientation == Orientation.HORIZONTAL) {
            let dY = coordinateY + i;
            let chosenCell = playerOneGridCells[coordinateX][dY];
            console.log(chosenCell, coordinateX, dY)
            chosenCell.style.backgroundColor = 'black';
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

        if (orientation == Orientation.HORIZONTAL) {
            for (let i = 0; i < shipLength; i++) {
                this.gameboard[rowNumber][colNumber] = ship;
                this.#shipPositions.add([rowNumber, colNumber].toString());
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
        return this.gameboard;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tDOzs7Ozs7Ozs7Ozs7Ozs7O0FDM1RRO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG9EQUFTO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7O0FDVHJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQ2xCcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNB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QUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBTztBQUNmLEtBQUssU0FBUztBQUNkO0FBQ0E7QUFDQTtBQUNBLFVBQVUsc0NBQXNDO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyREFBTztBQUNYLElBQUksMkRBQU87QUFDWCxJQUFJLDJEQUFPO0FBQ1gsSUFBSSwyREFBTztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyREFBTztBQUNYLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx3REFBSTtBQUN4QyxvQ0FBb0Msd0RBQUk7QUFDeEMsb0NBQW9DLHdEQUFJO0FBQ3hDLG9DQUFvQyx3REFBSTtBQUN4QyxvQ0FBb0Msd0RBQUk7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyREFBTztBQUNYO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kaXNwbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lU3RhdGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvQW5kcm9pZEFzc2Fzc2luLVdYWFkudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CZWJhcytOZXVlJmRpc3BsYXk9c3dhcCcpOyAqL1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0FuZHJvaWQtQXNzYXNzaW4nO1xyXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCdvcGVudHlwZScpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuKiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYTtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbjogMzBweCBhdXRvIDA7XHJcbn1cclxuXHJcbmhlYWRlciBoMSB7XHJcbiAgICBmb250LWZhbWlseTogJ0FuZHJvaWQtQXNzYXNzaW4nLCBzYW5zLXNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuLm1haW4tc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogZmxleC1kaXJlY3Rpb246IDsgKi9cclxufVxyXG5cclxuLmdhbWUtY3RybC1zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbjogYXV0byAxMDBweDtcclxufVxyXG5cclxuLmdhbWUtY3RybC1idG4ge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5nYW1lLWN0cmwtYnRuOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MCwgNjAsIDYwKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmdhbWVib2FyZHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBnYXA6IDUwcHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IDUwcHggNTBweCAzMHB4O1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xyXG59XHJcblxyXG4ucGxheWVyLW9uZS1pbnN0cnVjdGlvbiwgXHJcbi5wbGF5ZXItdHdvLWluc3RydWN0aW9uLFxyXG4ucGxheWVyLXR3by1pbnN0cnVjdGlvbi1ub3QtbmVlZGVkIHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG59XHJcblxyXG5cclxuLnBsYXllci1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xyXG59XHJcblxyXG4uY2VsbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzdiN2I3YjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIGhlaWdodDogMzZweDtcclxufVxyXG5cclxuLmNlbGw6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxufVxyXG5cclxuLnJlc3VsdHMge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi8qIGZvciBncmlkcyAqL1xyXG4uZ3JpZC1ibG9ja2VyIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4vKiBmb3IgY2VsbHMgKi9cclxuLmJsb2NrZXIge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi8qIGZvciBwbGF5ZXIgdHVybiBpbnN0cnVjdGlvbnMgKi9cclxuLmhpZGRlbiB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUZBQXFGOztBQUVyRjtJQUNJLCtCQUErQjtJQUMvQiwrREFBZ0U7SUFDaEUsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwyQ0FBMkM7SUFDM0MsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFQTs7O0lBR0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBLGNBQWM7QUFDZDtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOztBQUVBLGNBQWM7QUFDZDtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQSxpQ0FBaUM7QUFDakM7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmViYXMrTmV1ZSZkaXNwbGF5PXN3YXAnKTsgKi9cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdBbmRyb2lkLUFzc2Fzc2luJztcXHJcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL0FuZHJvaWRBc3Nhc3Npbi1XWFhZLnR0ZicpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBtYXJnaW46IDMwcHggYXV0byAwO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDEge1xcclxcbiAgICBmb250LWZhbWlseTogJ0FuZHJvaWQtQXNzYXNzaW4nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLyogZmxleC1kaXJlY3Rpb246IDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtY3RybC1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG8gMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWN0cmwtYnRuIHtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM0LCAyMzQsIDIzNCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDAsIDApO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWN0cmwtYnRuOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYwLCA2MCwgNjApO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmRzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIG1hcmdpbjogNTBweCA1MHB4IDMwcHg7XFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci1vbmUtaW5zdHJ1Y3Rpb24sIFxcclxcbi5wbGF5ZXItdHdvLWluc3RydWN0aW9uLFxcclxcbi5wbGF5ZXItdHdvLWluc3RydWN0aW9uLW5vdC1uZWVkZWQge1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucGxheWVyLWdyaWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzdiN2I3YjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICB3aWR0aDogMzZweDtcXHJcXG4gICAgaGVpZ2h0OiAzNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxyXFxufVxcclxcblxcclxcbi5yZXN1bHRzIHtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9yIGdyaWRzICovXFxyXFxuLmdyaWQtYmxvY2tlciB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICBvcGFjaXR5OiAwLjM7XFxyXFxufVxcclxcblxcclxcbi8qIGZvciBjZWxscyAqL1xcclxcbi5ibG9ja2VyIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIGZvciBwbGF5ZXIgdHVybiBpbnN0cnVjdGlvbnMgKi9cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBwbGF5ZXJUd29JbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucGxheWVyLXR3by1pbnN0cnVjdGlvbmApO1xyXG5jb25zdCBwbGF5ZXJPbmVJbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucGxheWVyLW9uZS1pbnN0cnVjdGlvbmApO1xyXG5cclxuY29uc3QgcGxheWVyT25lR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXItb25lLWdhbWVib2FyZGApO1xyXG5jb25zdCBwbGF5ZXJUd29HcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllci10d28tZ2FtZWJvYXJkYCk7XHJcbmNvbnN0IHBsYXllck9uZUdyaWRDZWxscyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDEwIH0sICgpID0+IEFycmF5KDEwKS5maWxsKG51bGwpKTtcclxuXHJcbmNvbnN0IE9yaWVudGF0aW9uID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICBIT1JJWk9OVEFMOiAnaG9yaXpvbnRhbCcsXHJcbiAgICBWRVJUSUNBTDogJ3ZlcnRpY2FsJyxcclxufSk7XHJcblxyXG5sZXQgb3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XHJcblxyXG5jb25zdCBzaGlwU2l6ZXMgPSBbNSwgNCwgMywgMywgMl07XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5R2FtZWJvYXJkKHNpemUgPSAxMCwgZ3JpZE93bmVyKSB7XHJcbiAgICBjcmVhdGVHcmlkKHNpemUsIGdyaWRPd25lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyQWxsR2FtZWJvYXJkcygpIHtcclxuICAgIHdoaWxlIChwbGF5ZXJPbmVHcmlkLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBwbGF5ZXJPbmVHcmlkLnJlbW92ZUNoaWxkKHBsYXllck9uZUdyaWQubGFzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICB3aGlsZSAocGxheWVyVHdvR3JpZC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgcGxheWVyVHdvR3JpZC5yZW1vdmVDaGlsZChwbGF5ZXJUd29HcmlkLmxhc3RDaGlsZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyR2FtZWJvYXJkQ29udGVudChncmlkT3duZXIpIHtcclxuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtb3duZXI9XCIke2dyaWRPd25lcn1cIl0gLmNlbGxgKTtcclxuICAgIGNlbGxzLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUdyaWQoc2l6ZSwgZ3JpZE93bmVyKSB7XHJcbiAgICBsZXQgZ3JpZCA9IG51bGw7XHJcbiAgICBpZiAoZ3JpZE93bmVyID09ICdwbGF5ZXItb25lJykge1xyXG4gICAgICAgIGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW9uZS1nYW1lYm9hcmQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItdHdvLWdhbWVib2FyZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZ3JpZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBzaXplOyByb3crKykge1xyXG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHNpemU7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyaWRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGdyaWRDZWxsLmNsYXNzTGlzdC5hZGQoYGNlbGxgKTtcclxuICAgICAgICAgICAgZ3JpZENlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXJvdycsIHJvdyk7XHJcbiAgICAgICAgICAgIGdyaWRDZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2wnLCBjb2wpO1xyXG4gICAgICAgICAgICBncmlkLmFwcGVuZENoaWxkKGdyaWRDZWxsKTtcclxuICAgICAgICAgICAgZ3JpZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3duZXInLCBncmlkT3duZXIpO1xyXG4gICAgICAgICAgICBpZiAoZ3JpZE93bmVyID09ICdwbGF5ZXItdHdvJykge1xyXG4gICAgICAgICAgICAgICAgZ3JpZENlbGwuc3R5bGUuY29udGVudFZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgICAgIHNldFVwRXZlbnRMaXN0ZW5lcihncmlkQ2VsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVNoaXBzT25HYW1lYm9hcmQoc2hpcFBvc2l0aW9ucywgZ3JpZE93bmVyKSB7XHJcbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLW93bmVyPVwiJHtncmlkT3duZXJ9XCJdIC5jZWxsYCk7XHJcbiAgICBjZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSAnJztcclxuICAgIH0pO1xyXG4gICAgZGlzcGxheVNoaXBzT25HYW1lYm9hcmQoc2hpcFBvc2l0aW9ucywgZ3JpZE93bmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVNoaXBzT25HYW1lYm9hcmQoc2hpcFBvc2l0aW9ucywgZ3JpZE93bmVyKSB7XHJcbiAgICBzaGlwUG9zaXRpb25zLmZvckVhY2goKHBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IHBvc2l0aW9uLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgYFtkYXRhLW93bmVyPVwiJHtncmlkT3duZXJ9XCJdIC5jZWxsW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sPVwiJHtjb2x9XCJdYFxyXG4gICAgICAgICkudGV4dENvbnRlbnQgPSAncyc7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlR3JpZEJsb2NrZXJzKCkge1xyXG4gICAgcGxheWVyT25lR3JpZC5jbGFzc0xpc3QudG9nZ2xlKCdncmlkLWJsb2NrZXInKTtcclxuICAgIHBsYXllclR3b0dyaWQuY2xhc3NMaXN0LnRvZ2dsZSgnZ3JpZC1ibG9ja2VyJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuYWJsZUdyaWRCbG9ja2VyKGdyaWQpIHtcclxuICAgIGNvbnN0IHBsYXllckdyaWQgPSBncmlkID09PSAncGxheWVyLW9uZS1nYW1lYm9hcmQnID8gcGxheWVyT25lR3JpZCA6IHBsYXllclR3b0dyaWQ7XHJcbiAgICBwbGF5ZXJHcmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQtYmxvY2tlcicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNhYmxlR3JpZEJsb2NrZXIoZ3JpZCkge1xyXG4gICAgY29uc3QgcGxheWVyR3JpZCA9IGdyaWQgPT09ICdwbGF5ZXItb25lLWdhbWVib2FyZCcgPyBwbGF5ZXJPbmVHcmlkIDogcGxheWVyVHdvR3JpZDtcclxuICAgIHBsYXllckdyaWQuY2xhc3NMaXN0LnJlbW92ZSgnZ3JpZC1ibG9ja2VyJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUNlbGxCbG9ja2VycygpIHtcclxuICAgIGNvbnN0IGNlbGxzID0gcGxheWVyVHdvR3JpZC5jaGlsZE5vZGVzO1xyXG4gICAgY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcclxuICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUoJ2Jsb2NrZXInKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93UGxheWVyVHVybihwbGF5ZXIgPSAnJykge1xyXG4gICAgaWYocGxheWVyICE9PSAnJykge1xyXG4gICAgICAgIHBsYXllck9uZUluc3RydWN0aW9ucy5mb3JFYWNoKHBsYXllck9uZUluc3RydWN0aW9uID0+IHtcclxuICAgICAgICAgICAgcGxheWVyT25lSW5zdHJ1Y3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXllck9uZUluc3RydWN0aW9ucy5mb3JFYWNoKHBsYXllck9uZUluc3RydWN0aW9uID0+IHtcclxuICAgICAgICBwbGF5ZXJPbmVJbnN0cnVjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBwbGF5ZXJUd29JbnN0cnVjdGlvbnMuZm9yRWFjaChwbGF5ZXJUd29JbnN0cnVjdGlvbiA9PiB7XHJcbiAgICAgICAgcGxheWVyVHdvSW5zdHJ1Y3Rpb24uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZVBsYXllckluc3RydWN0aW9ucygpIHtcclxuICAgIHBsYXllck9uZUluc3RydWN0aW9ucy5mb3JFYWNoKHBsYXllck9uZUluc3RydWN0aW9uID0+IHtcclxuICAgICAgICBwbGF5ZXJPbmVJbnN0cnVjdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHBsYXllclR3b0luc3RydWN0aW9ucy5mb3JFYWNoKHBsYXllclR3b0luc3RydWN0aW9uID0+IHtcclxuICAgICAgICBwbGF5ZXJUd29JbnN0cnVjdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXJrQ2VsbChjb29yZGluYXRlcywgZ3JpZE93bmVyLCBtYXJrQ29udGVudCkge1xyXG4gICAgY29uc3QgW3JvdywgY29sXSA9IGNvb3JkaW5hdGVzO1xyXG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgYFtkYXRhLW93bmVyPVwiJHtncmlkT3duZXJ9XCJdIC5jZWxsW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sPVwiJHtjb2x9XCJdYFxyXG4gICAgKTtcclxuXHJcbiAgICBjZWxsLnRleHRDb250ZW50ID0gbWFya0NvbnRlbnQ7XHJcblxyXG4gICAgaWYgKG1hcmtDb250ZW50ID09ICdYJykge1xyXG4gICAgICAgIGNlbGwuc3R5bGUuY29sb3IgPSAncmVkJztcclxuICAgICAgICBjZWxsLnN0eWxlLmZvbnRTaXplID0gJzMycHgnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjZWxsLnN0eWxlLmZvbnRTaXplID0gJzEycHgnO1xyXG4gICAgfVxyXG5cclxuICAgIGNlbGwuc3R5bGUuY29udGVudFZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcblxyXG4gICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNlbGxDbGljayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFVwRXZlbnRMaXN0ZW5lcihjZWxsKSB7XHJcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2VsbENsaWNrKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2VsbENsaWNrKGUpIHtcclxuICAgIGNvbnN0IGNlbGwgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IFtcclxuICAgICAgICBOdW1iZXIoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm93JykpLFxyXG4gICAgICAgIE51bWJlcihjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2wnKSksXHJcbiAgICBdO1xyXG4gICAgY29uc3QgZ3JpZE93bmVyID0gY2VsbC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vd25lcicpO1xyXG4gICAgaGlnaGxpZ2h0QXR0YWNrZWRDZWxsKGNvb3JkaW5hdGVzLCBncmlkT3duZXIpO1xyXG4gICAgc2VuZEV2ZW50T25DZWxsQ2xpY2tlZChjb29yZGluYXRlcywgZ3JpZE93bmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VuZEV2ZW50T25DZWxsQ2xpY2tlZChjb29yZGluYXRlcywgZ3JpZE93bmVyKSB7XHJcbiAgICBjb25zdCBldmVudE9uQ2VsbENsaWNrZWQgPSBuZXcgQ3VzdG9tRXZlbnQoJ09uQ2VsbENsaWNrZWQnLCB7XHJcbiAgICAgICAgZGV0YWlsOiB7IGNvb3JkaW5hdGVzLCBncmlkT3duZXIgfSxcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudE9uQ2VsbENsaWNrZWQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVHYW1lT3Zlcih3aW5uZXIpIHtcclxuICAgIGNvbnN0IHJlbWFpbmluZ0NlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcclxuICAgIHJlbWFpbmluZ0NlbGxzLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNlbGxDbGljayk7XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHdpbm5lclJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyLXJlc3VsdHMnKTtcclxuICAgIHdpbm5lclJlc3VsdHMudGV4dENvbnRlbnQgPSBgJHt3aW5uZXJ9IFdvbiFgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWdobGlnaHRBdHRhY2tlZENlbGwoaGl0Q29vcmRpbmF0ZSwgZ3JpZE93bmVyKSB7XHJcbiAgICBjb25zdCBbcm93LCBjb2xdID0gaGl0Q29vcmRpbmF0ZTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgYFtkYXRhLW93bmVyPVwiJHtncmlkT3duZXJ9XCJdIC5jZWxsW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sPVwiJHtjb2x9XCJdYFxyXG4gICAgKS5zdHlsZS5ib3JkZXIgPSAnM3B4IHNvbGlkIGJsdWUnO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgYFtkYXRhLW93bmVyPVwiJHtncmlkT3duZXJ9XCJdIC5jZWxsW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sPVwiJHtjb2x9XCJdYFxyXG4gICAgICAgICkuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCAjN2I3YjdiJztcclxuICAgIH0sIDE1MDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhclJlc3VsdHMoKSB7XHJcbiAgICBjb25zdCB3aW5uZXJSZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lci1yZXN1bHRzJyk7XHJcbiAgICB3aW5uZXJSZXN1bHRzLnRleHRDb250ZW50ID0gJyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpc2VQbGFjaW5nU2hpcHMocGxheWVyR2FtZWJvYXJkLCBncmlkT3duZXIpIHtcclxuICAgIGNvbnN0IGdyaWRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLW93bmVyPVwiJHtncmlkT3duZXJ9XCJdIC5jZWxsYCk7XHJcbiAgICBncmlkQ2VsbHMuZm9yRWFjaChjZWxsID0+IHtcclxuICAgICAgICBjb25zdCByb3cgPSBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1yb3cnKSwgMTApO1xyXG4gICAgICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbCcpLCAxMCk7XHJcbiAgICAgICAgcGxheWVyT25lR3JpZENlbGxzW3Jvd11bY29sXSA9IGNlbGw7XHJcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNlbGxDbGljayk7XHJcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBsYWNlU2hpcCk7XHJcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBzaG93U2hpcFBsYWNlbWVudCk7XHJcbiAgICB9KTtcclxuICAgIHBsYXllckdhbWVib2FyZC5jbGVhckdhbWVib2FyZCgpO1xyXG4gICAgY2xlYXJHYW1lYm9hcmRDb250ZW50KCdwbGF5ZXItb25lJyk7XHJcbiAgICAvLyB1cGRhdGVTaGlwc09uR2FtZWJvYXJkKClcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlUGxhY2VTaGlwKCkge1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1NoaXBQbGFjZW1lbnQoZSkge1xyXG4gICAgY29uc3QgY2VsbCA9IGUuY3VycmVudFRhcmdldDtcclxuICAgIGxldCBbY29vcmRpbmF0ZVgsIGNvb3JkaW5hdGVZXSA9IFtcclxuICAgICAgICBOdW1iZXIoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm93JykpLFxyXG4gICAgICAgIE51bWJlcihjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2wnKSksXHJcbiAgICBdO1xyXG4gICAgLy8gY29uc3QgZ3JpZE93bmVyID0gY2VsbC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vd25lcicpO1xyXG4gICAgY29uc3QgY3VycmVudFNoaXBTaXplID0gc2hpcFNpemVzWzBdO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTaGlwU2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgaWYob3JpZW50YXRpb24gPT0gT3JpZW50YXRpb24uSE9SSVpPTlRBTCkge1xyXG4gICAgICAgICAgICBsZXQgZFkgPSBjb29yZGluYXRlWSArIGk7XHJcbiAgICAgICAgICAgIGxldCBjaG9zZW5DZWxsID0gcGxheWVyT25lR3JpZENlbGxzW2Nvb3JkaW5hdGVYXVtkWV07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNob3NlbkNlbGwsIGNvb3JkaW5hdGVYLCBkWSlcclxuICAgICAgICAgICAgY2hvc2VuQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmxhY2snO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHR7XHJcbiAgICBkaXNwbGF5R2FtZWJvYXJkLFxyXG4gICAgbWFya0NlbGwsXHJcbiAgICB0b2dnbGVHcmlkQmxvY2tlcnMsXHJcbiAgICBkaXNhYmxlR3JpZEJsb2NrZXIsXHJcbiAgICBlbmFibGVHcmlkQmxvY2tlcixcclxuICAgIHRvZ2dsZUNlbGxCbG9ja2VycyxcclxuICAgIHNob3dQbGF5ZXJUdXJuLFxyXG4gICAgaGlkZVBsYXllckluc3RydWN0aW9ucyxcclxuICAgIGhhbmRsZUdhbWVPdmVyLFxyXG4gICAgZGlzcGxheVNoaXBzT25HYW1lYm9hcmQsXHJcbiAgICB1cGRhdGVTaGlwc09uR2FtZWJvYXJkLFxyXG4gICAgY2xlYXJBbGxHYW1lYm9hcmRzLFxyXG4gICAgaGlnaGxpZ2h0QXR0YWNrZWRDZWxsLFxyXG4gICAgY2xlYXJSZXN1bHRzLFxyXG4gICAgaW5pdGlhbGlzZVBsYWNpbmdTaGlwcyxcclxufTtcclxuIiwibGV0IGN1cnJlbnRQbGF5ZXIgPSAnJztcclxuXHJcbmZ1bmN0aW9uIHNldEN1cnJlbnRQbGF5ZXIocGxheWVyKSB7XHJcbiAgICBjdXJyZW50UGxheWVyID0gcGxheWVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzd2l0Y2hUdXJuKCkge1xyXG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09ICdwbGF5ZXItb25lJykge1xyXG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSAncGxheWVyLXR3byc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSAncGxheWVyLW9uZSc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGN1cnJlbnRQbGF5ZXIsIHNldEN1cnJlbnRQbGF5ZXIsIHN3aXRjaFR1cm4gfTsiLCJjb25zdCBPcmllbnRhdGlvbiA9IE9iamVjdC5mcmVlemUoe1xyXG4gICAgSE9SSVpPTlRBTDogJ2hvcml6b250YWwnLFxyXG4gICAgVkVSVElDQUw6ICd2ZXJ0aWNhbCcsXHJcbn0pO1xyXG5cclxuY2xhc3MgR2FtZWJvYXJkIHtcclxuICAgICNST1dfU0laRSA9IDEwO1xyXG4gICAgI0NPTF9TSVpFID0gMTA7XHJcbiAgICAjYWRqYWNlbnRDZWxsRGVsdGFzID0gW1xyXG4gICAgICAgIFstMSwgLTFdLFxyXG4gICAgICAgIFstMSwgMF0sXHJcbiAgICAgICAgWy0xLCAxXSxcclxuICAgICAgICBbMCwgLTFdLFxyXG4gICAgICAgIFswLCAxXSxcclxuICAgICAgICBbMSwgLTFdLFxyXG4gICAgICAgIFsxLCAwXSxcclxuICAgICAgICBbMSwgMV0sXHJcbiAgICBdO1xyXG4gICAgI3JlbGV2YW50QWRqYWNlbnRDZWxsRGVsdGFzID0gW1xyXG4gICAgICAgIFstMSwgMF0sXHJcbiAgICAgICAgWzAsIC0xXSxcclxuICAgICAgICBbMCwgMV0sXHJcbiAgICAgICAgWzEsIDBdLFxyXG4gICAgXTtcclxuICAgICNyZXNlcnZlZFBvc2l0aW9ucyA9IG5ldyBTZXQoKTtcclxuICAgICNzaGlwUG9zaXRpb25zID0gbmV3IFNldCgpO1xyXG4gICAgI3NoaXBUb0FkamFjZW50Q2VsbHNNYXAgPSBuZXcgTWFwKCk7IC8vbWFwIG9mIHNoaXAgb2JqZWN0IHRvIGFkamFjZW50Q2VsbHNPZlNoaXAgc2V0KClcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEFycmF5KHRoaXMuI1JPV19TSVpFKVxyXG4gICAgICAgICAgICAuZmlsbChudWxsKVxyXG4gICAgICAgICAgICAubWFwKCgpID0+IG5ldyBBcnJheSh0aGlzLiNDT0xfU0laRSkuZmlsbChudWxsKSk7XHJcbiAgICAgICAgdGhpcy5hdmFpbGFibGVDZWxscyA9IHRoaXMuaW5pdGlhbGl6ZUF2YWlsYWJsZUNvb3JkaW5hdGVzKCk7XHJcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemVBdmFpbGFibGVDb29yZGluYXRlcygpIHtcclxuICAgICAgICBjb25zdCBjZWxscyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHJvd051bSA9IDA7IHJvd051bSA8IHRoaXMuI1JPV19TSVpFOyByb3dOdW0rKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2xOdW0gPSAwOyBjb2xOdW0gPCB0aGlzLiNDT0xfU0laRTsgY29sTnVtKyspIHtcclxuICAgICAgICAgICAgICAgIGNlbGxzLnB1c2goW3Jvd051bSwgY29sTnVtXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNlbGxzO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyR2FtZWJvYXJkKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkID0gdGhpcy5nYW1lYm9hcmQubWFwKChyb3cpID0+IHJvdy5maWxsKG51bGwpKTtcclxuICAgICAgICB0aGlzLiNyZXNlcnZlZFBvc2l0aW9ucy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuI3NoaXBQb3NpdGlvbnMuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLiNzaGlwVG9BZGphY2VudENlbGxzTWFwLmNsZWFyKCk7XHJcbiAgICAgICAgLy8gdGhpcy5zaGlwcy5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFkamFjZW50Q2VsbHMocG9zaXRpb24sIGFkamFjZW50RGVsdGFzKSB7XHJcbiAgICAgICAgbGV0IFtjdXJyZW50WCwgY3VycmVudFldID0gcG9zaXRpb247XHJcbiAgICAgICAgY29uc3QgYWRqYWNlbnRDZWxscyA9IFtdO1xyXG4gICAgICAgIGFkamFjZW50RGVsdGFzLmZvckVhY2goKGNlbGxDb29yZGluYXRlcykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgW2FkamFjZW50RGVsdGFYLCBhZGphY2VudERlbHRhWV0gPSBjZWxsQ29vcmRpbmF0ZXM7XHJcbiAgICAgICAgICAgIGxldCBhZGphY2VudFggPSBjdXJyZW50WCArIGFkamFjZW50RGVsdGFYO1xyXG4gICAgICAgICAgICBsZXQgYWRqYWNlbnRZID0gY3VycmVudFkgKyBhZGphY2VudERlbHRhWTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgYWRqYWNlbnRYID49IDAgJiZcclxuICAgICAgICAgICAgICAgIGFkamFjZW50WCA8PSA5ICYmXHJcbiAgICAgICAgICAgICAgICBhZGphY2VudFkgPj0gMCAmJlxyXG4gICAgICAgICAgICAgICAgYWRqYWNlbnRZIDw9IDlcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWRqYWNlbnRDZWxsc0Nvb3JkaW5hdGUgPSBbYWRqYWNlbnRYLCBhZGphY2VudFldO1xyXG4gICAgICAgICAgICAgICAgYWRqYWNlbnRDZWxscy5wdXNoKGFkamFjZW50Q2VsbHNDb29yZGluYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gYWRqYWNlbnRDZWxscztcclxuICAgIH1cclxuXHJcbiAgICBpc1ZhbGlkUG9zaXRpb24oc2hpcExlbmd0aCwgcG9zaXRpb24sIG9yaWVudGF0aW9uKSB7XHJcbiAgICAgICAgbGV0IFtyb3dOdW1iZXIsIGNvbE51bWJlcl0gPSBwb3NpdGlvbjtcclxuXHJcbiAgICAgICAgLy9jaGVjayBpZiBwb3NpdGlvbiBpcyBhbHJlYWR5IGZpbGxlZCBvciBpcyBhZGphY2VudCBwb3NpdGlvbiBvZiBmaWxsZWQgY2VsbC5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gT3JpZW50YXRpb24uSE9SSVpPTlRBTCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRQb3NpdGlvbiA9IFtyb3dOdW1iZXIsIGNvbE51bWJlciArIGldO1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3Jlc2VydmVkUG9zaXRpb25zLmhhcyhkUG9zaXRpb24udG9TdHJpbmcoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNzaGlwUG9zaXRpb25zLmhhcyhkUG9zaXRpb24udG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBkUG9zaXRpb24gPSBbcm93TnVtYmVyICsgaSwgY29sTnVtYmVyXTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNyZXNlcnZlZFBvc2l0aW9ucy5oYXMoZFBvc2l0aW9uLnRvU3RyaW5nKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jc2hpcFBvc2l0aW9ucy5oYXMoZFBvc2l0aW9uLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vY2hlY2sgaWYgaXRzIGxlbmd0aCBjYW4gZ28gb3V0IG9mIGJvdW5kcztcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIG9yaWVudGF0aW9uID09IE9yaWVudGF0aW9uLkhPUklaT05UQUwgJiZcclxuICAgICAgICAgICAgY29sTnVtYmVyICsgc2hpcExlbmd0aCA+IHRoaXMuI1JPV19TSVpFXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9PSBPcmllbnRhdGlvbi5WRVJUSUNBTCAmJlxyXG4gICAgICAgICAgICByb3dOdW1iZXIgKyBzaGlwTGVuZ3RoID4gdGhpcy4jQ09MX1NJWkVcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcGxhY2VTaGlwKHNoaXAsIHBvc2l0aW9uLCBvcmllbnRhdGlvbikge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkUG9zaXRpb24oc2hpcC5zaXplLCBwb3NpdGlvbiwgb3JpZW50YXRpb24pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IFtyb3dOdW1iZXIsIGNvbE51bWJlcl0gPSBwb3NpdGlvbjtcclxuICAgICAgICBsZXQgc2hpcExlbmd0aCA9IHNoaXAuc2l6ZTtcclxuICAgICAgICBsZXQgYWxsQWRqYWNlbnRDZWxsc09mU2hpcCA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09IE9yaWVudGF0aW9uLkhPUklaT05UQUwpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZWJvYXJkW3Jvd051bWJlcl1bY29sTnVtYmVyXSA9IHNoaXA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiNzaGlwUG9zaXRpb25zLmFkZChbcm93TnVtYmVyLCBjb2xOdW1iZXJdLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFkamFjZW50Q2VsbHMgPSB0aGlzLmdldEFkamFjZW50Q2VsbHMoXHJcbiAgICAgICAgICAgICAgICAgICAgW3Jvd051bWJlciwgY29sTnVtYmVyXSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNhZGphY2VudENlbGxEZWx0YXNcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBhZGphY2VudENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNyZXNlcnZlZFBvc2l0aW9ucy5hZGQoY2VsbC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBhbGxBZGphY2VudENlbGxzT2ZTaGlwLmFkZChjZWxsLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb2xOdW1iZXIrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSBPcmllbnRhdGlvbi5WRVJUSUNBTCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lYm9hcmRbcm93TnVtYmVyXVtjb2xOdW1iZXJdID0gc2hpcDtcclxuICAgICAgICAgICAgICAgIHRoaXMuI3NoaXBQb3NpdGlvbnMuYWRkKFtyb3dOdW1iZXIsIGNvbE51bWJlcl0udG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWRqYWNlbnRDZWxscyA9IHRoaXMuZ2V0QWRqYWNlbnRDZWxscyhcclxuICAgICAgICAgICAgICAgICAgICBbcm93TnVtYmVyLCBjb2xOdW1iZXJdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2FkamFjZW50Q2VsbERlbHRhc1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGFkamFjZW50Q2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3Jlc2VydmVkUG9zaXRpb25zLmFkZChjZWxsLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbEFkamFjZW50Q2VsbHNPZlNoaXAuYWRkKGNlbGwudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJvd051bWJlcisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDsgLy9pbnZhbGlkIG9yaWVudGF0aW9uXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3JlbW92ZSBhbGwgY2VsbHMgdGhhdCBoYXZlIHNoaXBzXHJcbiAgICAgICAgYWxsQWRqYWNlbnRDZWxsc09mU2hpcC5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjZWxsLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWVib2FyZFtyb3ddW2NvbF0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGFsbEFkamFjZW50Q2VsbHNPZlNoaXAuZGVsZXRlKGNlbGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuI3NoaXBUb0FkamFjZW50Q2VsbHNNYXAuc2V0KHNoaXAsIGFsbEFkamFjZW50Q2VsbHNPZlNoaXApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICByZWNlaXZlQXR0YWNrKGhpdENvb3JkaW5hdGUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhoaXRDb29yZGluYXRlKTtcclxuICAgICAgICBsZXQgW2hpdENvb3JkaW5hdGVYLCBoaXRDb29yZGluYXRlWV0gPSBoaXRDb29yZGluYXRlO1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLmdhbWVib2FyZFtoaXRDb29yZGluYXRlWF1baGl0Q29vcmRpbmF0ZVldO1xyXG4gICAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVib2FyZFtoaXRDb29yZGluYXRlWF1baGl0Q29vcmRpbmF0ZVldID0gJ08nO1xyXG4gICAgICAgICAgICByZXR1cm4geyBhZGphY2VudENlbGxzOiBudWxsLCBpc1NoaXBIaXQ6IGZhbHNlIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0YXJnZXQuaGl0KCk7XHJcbiAgICAgICAgdGhpcy5nYW1lYm9hcmRbaGl0Q29vcmRpbmF0ZVhdW2hpdENvb3JkaW5hdGVZXSA9ICdYJztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYXJlQWxsU2hpcHNTdW5rKCkpIHtcclxuICAgICAgICAgICAgLy9nYW1lb3ZlciwgYW5ub3VuY2Ugd2lubmVyXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHYW1lb3ZlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGFyZ2V0LmlzU3VuaygpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFkamFjZW50Q2VsbHNTZXQgPSB0aGlzLiNzaGlwVG9BZGphY2VudENlbGxzTWFwLmdldCh0YXJnZXQpO1xyXG4gICAgICAgICAgICBhZGphY2VudENlbGxzU2V0LmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjZWxsLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVib2FyZFtyb3ddW2NvbF0gPSAnTyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNlbGxGcm9tQXZhaWxhYmxlQ2VsbHMoW3JvdywgY29sXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4geyBhZGphY2VudENlbGxzOiBhZGphY2VudENlbGxzU2V0LCBpc1NoaXBIaXQ6IHRydWUgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgYWRqYWNlbnRDZWxsczogbnVsbCwgaXNTaGlwSGl0OiB0cnVlIH07XHJcbiAgICB9XHJcblxyXG4gICAgYXJlQWxsU2hpcHNTdW5rKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3Vua1N0YXR1cyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2hpcFBvc2l0aW9ucyhsb2dTaGlwUG9zaXRpb25zID0gZmFsc2UpIHtcclxuICAgICAgICBpZihsb2dTaGlwUG9zaXRpb25zKSBjb25zb2xlLmxvZyh0aGlzLiNzaGlwUG9zaXRpb25zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4jc2hpcFBvc2l0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBnZXRSYW5kb21Db29yZGluYXRlRm9yU2hpcChzaGlwTGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXZhaWxhYmxlQ2VsbHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gYXZhaWxhYmxlIGNlbGxzIHRvIHBsYWNlIHNoaXAnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IE1BWF9SRVRSSUVTID0gMTAwO1xyXG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XHJcblxyXG4gICAgICAgIHdoaWxlIChhdHRlbXB0cyA8IE1BWF9SRVRSSUVTKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbU9yaWVudGF0aW9uID0gdGhpcy5nZXRSYW5kb21PcmllbnRhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmFuZ2VYID1cclxuICAgICAgICAgICAgICAgIHJhbmRvbU9yaWVudGF0aW9uID09PSBPcmllbnRhdGlvbi5IT1JJWk9OVEFMXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLiNST1dfU0laRVxyXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy4jUk9XX1NJWkUgLSAoc2hpcExlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICBjb25zdCByYW5nZVkgPVxyXG4gICAgICAgICAgICAgICAgcmFuZG9tT3JpZW50YXRpb24gPT09IE9yaWVudGF0aW9uLkhPUklaT05UQUxcclxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuI0NPTF9TSVpFIC0gKHNoaXBMZW5ndGggLSAxKVxyXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy4jQ09MX1NJWkU7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUNvb3JkaW5hdGUgPSB0aGlzLmdldFJhbmRvbUNvb3JkaW5hdGVJblJhbmdlKFxyXG4gICAgICAgICAgICAgICAgcmFuZ2VYLFxyXG4gICAgICAgICAgICAgICAgcmFuZ2VZXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmFsaWRQb3NpdGlvbihcclxuICAgICAgICAgICAgICAgICAgICBzaGlwTGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbUNvb3JkaW5hdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tT3JpZW50YXRpb25cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyByYW5kb21Db29yZGluYXRlLCByYW5kb21PcmllbnRhdGlvbiB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhdHRlbXB0cysrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmluZCB2YWxpZCBjb29yZGluYXRlIGZvciBzaGlwIHBsYWNlbWVudCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJhbmRvbU9yaWVudGF0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpIDwgMC41XHJcbiAgICAgICAgICAgID8gT3JpZW50YXRpb24uSE9SSVpPTlRBTFxyXG4gICAgICAgICAgICA6IE9yaWVudGF0aW9uLlZFUlRJQ0FMO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJhbmRvbUNvb3JkaW5hdGVJblJhbmdlKHJhbmdlWCwgcmFuZ2VZKSB7XHJcbiAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYW5nZVgpO1xyXG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZ2VZKTtcclxuICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJhbmRvbUNvb3JkaW5hdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXZhaWxhYmxlQ2VsbHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gbW9yZSBhdmFpbGFibGUgY2VsbHMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoXHJcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiB0aGlzLmF2YWlsYWJsZUNlbGxzLmxlbmd0aFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCByYW5kb21Db29yZGluYXRlID0gdGhpcy5hdmFpbGFibGVDZWxsc1tyYW5kb21JbmRleF07XHJcbiAgICAgICAgdGhpcy5hdmFpbGFibGVDZWxscy5zcGxpY2UocmFuZG9tSW5kZXgsIDEpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmFuZG9tQ29vcmRpbmF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSYW5kb21BZGphY2VudENvb3JkaW5hdGUoaGl0Q29vcmRpbmF0ZSkge1xyXG4gICAgICAgIGNvbnN0IGFsbEFkamFjZW50Q29vcmRpbmF0ZXMgPVxyXG4gICAgICAgICAgICB0aGlzLmdldFJlbGV2YW50QWRqYWNlbnRDb29yZGluYXRlcyhoaXRDb29yZGluYXRlKTtcclxuICAgICAgICBpZiAoIWFsbEFkamFjZW50Q29vcmRpbmF0ZXMgfHwgYWxsQWRqYWNlbnRDb29yZGluYXRlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKFxyXG4gICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogYWxsQWRqYWNlbnRDb29yZGluYXRlcy5sZW5ndGhcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCByYW5kb21BZGphY2VudENvb3JkaW5hdGUgPSBhbGxBZGphY2VudENvb3JkaW5hdGVzW3JhbmRvbUluZGV4XTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW1vdmVDZWxsRnJvbUF2YWlsYWJsZUNlbGxzKHJhbmRvbUFkamFjZW50Q29vcmRpbmF0ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiByYW5kb21BZGphY2VudENvb3JkaW5hdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmVsZXZhbnRBZGphY2VudENvb3JkaW5hdGVzKGhpdENvb3JkaW5hdGUpIHtcclxuICAgICAgICBjb25zdCBhbGxBZGphY2VudENvb3JkaW5hdGVzID0gdGhpcy5nZXRBZGphY2VudENlbGxzKFxyXG4gICAgICAgICAgICBoaXRDb29yZGluYXRlLFxyXG4gICAgICAgICAgICB0aGlzLiNyZWxldmFudEFkamFjZW50Q2VsbERlbHRhc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgcmVsZXZhbnRBZGphY2VudENvb3JkaW5hdGVzID0gYWxsQWRqYWNlbnRDb29yZGluYXRlcy5maWx0ZXIoXHJcbiAgICAgICAgICAgIChjb29yZGluYXRlKSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lYm9hcmRbY29vcmRpbmF0ZVswXV1bY29vcmRpbmF0ZVsxXV0gIT09ICdYJyAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lYm9hcmRbY29vcmRpbmF0ZVswXV1bY29vcmRpbmF0ZVsxXV0gIT09ICdPJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHJlbGV2YW50QWRqYWNlbnRDb29yZGluYXRlcztcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDZWxsRnJvbUF2YWlsYWJsZUNlbGxzKGNlbGxUb1JlbW92ZSkge1xyXG4gICAgICAgIHRoaXMuYXZhaWxhYmxlQ2VsbHMgPSB0aGlzLmF2YWlsYWJsZUNlbGxzLmZpbHRlcihcclxuICAgICAgICAgICAgKGF2YWlsYWJsZUNlbGwpID0+XHJcbiAgICAgICAgICAgICAgICAhKFxyXG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZUNlbGxbMF0gPT0gY2VsbFRvUmVtb3ZlWzBdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlQ2VsbFsxXSA9PSBjZWxsVG9SZW1vdmVbMV1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBHYW1lYm9hcmQsIE9yaWVudGF0aW9uIH07XHJcbiIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkLmpzJ1xyXG5cclxuY2xhc3MgUGxheWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiY2xhc3MgU2hpcCB7XHJcbiAgICBjb25zdHJ1Y3RvcihzaXplLCBoaXRDb3VudCA9IDAsIGlzU3Vua1N0YXR1cyA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgICB0aGlzLmhpdENvdW50ID0gaGl0Q291bnQ7XHJcbiAgICAgICAgdGhpcy5pc1N1bmtTdGF0dXMgPSBpc1N1bmtTdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgaGl0KCkge1xyXG4gICAgICAgIHRoaXMuaGl0Q291bnQrKztcclxuICAgICAgICB0aGlzLmlzU3Vua1N0YXR1cyA9IHRoaXMuaXNTdW5rKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU3VuaygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oaXRDb3VudCA9PSB0aGlzLnNpemU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoaXA7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9tb2R1bGVzL3BsYXllci5qcyc7XHJcbmltcG9ydCBTaGlwIGZyb20gJy4vbW9kdWxlcy9zaGlwLmpzJztcclxuLy8gaW1wb3J0IHsgT3JpZW50YXRpb24gfSBmcm9tICcuL21vZHVsZXMvZ2FtZWJvYXJkLmpzJztcclxuaW1wb3J0IGRpc3BsYXkgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXkuanMnO1xyXG5pbXBvcnQge1xyXG4gICAgY3VycmVudFBsYXllcixcclxuICAgIHNldEN1cnJlbnRQbGF5ZXIsXHJcbiAgICBzd2l0Y2hUdXJuLFxyXG59IGZyb20gJy4vbW9kdWxlcy9nYW1lU3RhdGUuanMnO1xyXG5cclxuY29uc3Qgc3RhcnRHYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWdhbWUtYnRuJyk7XHJcbmNvbnN0IGxlYXZlR2FtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWF2ZS1nYW1lLWJ0bicpO1xyXG5sZWF2ZUdhbWVCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5sZXQgcGxheWVyTGVmdCA9IGZhbHNlO1xyXG5jb25zdCByYW5kb21QbGFjZW1lbnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZG9taXNlLWJ0bicpO1xyXG5jb25zdCBhcnJhbmdlU2hpcHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyYW5nZS1zaGlwcy1idG4nKTtcclxuXHJcbi8vaW5pdGlhbGlzZSB0aGUgZ2FtZVxyXG5jb25zdCBpbml0aWFsaXNlZE9iamVjdHMgPSBpbml0aWFsaXNlR2FtZSgpO1xyXG5sZXQgcGxheWVyT25lR2FtZWJvYXJkID0gaW5pdGlhbGlzZWRPYmplY3RzLnBsYXllck9uZUdhbWVib2FyZDtcclxubGV0IHBsYXllclR3b0dhbWVib2FyZCA9IGluaXRpYWxpc2VkT2JqZWN0cy5wbGF5ZXJUd29HYW1lYm9hcmQ7XHJcblxyXG5zZXRDdXJyZW50UGxheWVyKCdwbGF5ZXItb25lJyk7XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXNlUGxheWVycygpIHtcclxuICAgIGNvbnN0IHBsYXllck9uZSA9IG5ldyBQbGF5ZXIoJ3BsYXllci1vbmUnKTtcclxuXHJcbiAgICBjb25zdCBwbGF5ZXJUd28gPSBuZXcgUGxheWVyKCdwbGF5ZXItdHdvJyk7XHJcblxyXG4gICAgc2V0Q3VycmVudFBsYXllcigncGxheWVyLW9uZScpO1xyXG5cclxuXHJcbiAgICByZXR1cm4geyBwbGF5ZXJPbmUsIHBsYXllclR3byB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXNlR2FtZWJvYXJkcyhwbGF5ZXJPbmUsIHBsYXllclR3bykge1xyXG4gICAgXHJcbiAgICAvKiBzZXR1cCBwbGF5ZXIgb25lIGdhbWVib2FyZCAqL1xyXG4gICAgY29uc3QgcGxheWVyT25lR2FtZWJvYXJkID0gcGxheWVyT25lLmdhbWVib2FyZDtcclxuICAgIFxyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDIpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDMpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDMpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDQpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDUpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG5cclxuICAgIC8qIHNldHVwIHBsYXllciB0d28gZ2FtZWJvYXJkICovXHJcbiAgICBjb25zdCBwbGF5ZXJUd29HYW1lYm9hcmQgPSBwbGF5ZXJUd28uZ2FtZWJvYXJkO1xyXG5cclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCgyKSwgcGxheWVyVHdvR2FtZWJvYXJkKTtcclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCgzKSwgcGxheWVyVHdvR2FtZWJvYXJkKTtcclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCgzKSwgcGxheWVyVHdvR2FtZWJvYXJkKTtcclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCg0KSwgcGxheWVyVHdvR2FtZWJvYXJkKTtcclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCg1KSwgcGxheWVyVHdvR2FtZWJvYXJkKTtcclxuXHJcbiAgICByZXR1cm4geyBwbGF5ZXJPbmVHYW1lYm9hcmQsIHBsYXllclR3b0dhbWVib2FyZCB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXNlR2FtZSgpIHtcclxuICAgIGNvbnN0IHsgcGxheWVyT25lLCBwbGF5ZXJUd28gfSA9IGluaXRpYWxpc2VQbGF5ZXJzKCk7XHJcbiAgICBjb25zdCB7IHBsYXllck9uZUdhbWVib2FyZCwgcGxheWVyVHdvR2FtZWJvYXJkIH0gPSBpbml0aWFsaXNlR2FtZWJvYXJkcyhwbGF5ZXJPbmUsIHBsYXllclR3byk7XHJcblxyXG4gICAgLyogZGlzcGxheSBwbGF5ZXIgb25lIGdhbWVib2FyZCAqL1xyXG4gICAgY29uc3QgcGxheWVyT25lU2hpcFBvc2l0aW9ucyA9IHBsYXllck9uZUdhbWVib2FyZC5nZXRTaGlwUG9zaXRpb25zKCk7XHJcbiAgICBcclxuICAgIGRpc3BsYXkuZGlzcGxheUdhbWVib2FyZCh1bmRlZmluZWQsICdwbGF5ZXItb25lJyk7XHJcbiAgICBkaXNwbGF5LmRpc3BsYXlTaGlwc09uR2FtZWJvYXJkKHBsYXllck9uZVNoaXBQb3NpdGlvbnMsICdwbGF5ZXItb25lJyk7XHJcbiAgICBcclxuICAgIC8qIGRpc3BsYXkgcGxheWVyIHR3byBnYW1lYm9hcmQgKi9cclxuICAgIGNvbnN0IHBsYXllclR3b1NoaXBQb3NpdGlvbnMgPSBwbGF5ZXJUd29HYW1lYm9hcmQuZ2V0U2hpcFBvc2l0aW9ucygpO1xyXG4gICAgXHJcbiAgICBkaXNwbGF5LmRpc3BsYXlHYW1lYm9hcmQodW5kZWZpbmVkLCAncGxheWVyLXR3bycpO1xyXG4gICAgZGlzcGxheS5kaXNwbGF5U2hpcHNPbkdhbWVib2FyZChwbGF5ZXJUd29TaGlwUG9zaXRpb25zLCAncGxheWVyLXR3bycpO1xyXG5cclxuICAgIGRpc3BsYXkudG9nZ2xlQ2VsbEJsb2NrZXJzKCk7XHJcbiAgICBcclxuICAgIHJldHVybiB7IHBsYXllck9uZSwgcGxheWVyVHdvLCBwbGF5ZXJPbmVHYW1lYm9hcmQsIHBsYXllclR3b0dhbWVib2FyZCB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZUluaXRpYWxpc2VHYW1lKCkge1xyXG4gICAgLy9pbml0aWFsaXNlIGJ1dHRvbnNcclxuICAgIHN0YXJ0R2FtZUJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgbGVhdmVHYW1lQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIHJhbmRvbVBsYWNlbWVudEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgYXJyYW5nZVNoaXBzQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gICAgcGxheWVyTGVmdCA9IHRydWU7XHJcblxyXG4gICAgZGlzcGxheS5kaXNhYmxlR3JpZEJsb2NrZXIoJ3BsYXllci1vbmUtZ2FtZWJvYXJkJyk7XHJcbiAgICBkaXNwbGF5LmRpc2FibGVHcmlkQmxvY2tlcigncGxheWVyLXR3by1nYW1lYm9hcmQnKTtcclxuICAgIGRpc3BsYXkuaGlkZVBsYXllckluc3RydWN0aW9ucygpO1xyXG4gICAgZGlzcGxheS5jbGVhckFsbEdhbWVib2FyZHMoKTtcclxuICAgIGRpc3BsYXkuY2xlYXJSZXN1bHRzKCk7XHJcblxyXG4gICAgcGxheWVyT25lR2FtZWJvYXJkLmNsZWFyR2FtZWJvYXJkKCk7XHJcblxyXG4gICAgcGxheWVyVHdvR2FtZWJvYXJkLmNsZWFyR2FtZWJvYXJkKCk7XHJcblxyXG4gICAgY29uc3QgcmVJbml0aWFsaXNlZE9iamVjdHMgPSBpbml0aWFsaXNlR2FtZSgpO1xyXG5cclxuICAgIHBsYXllck9uZUdhbWVib2FyZCA9IHJlSW5pdGlhbGlzZWRPYmplY3RzLnBsYXllck9uZUdhbWVib2FyZDtcclxuICAgIHBsYXllclR3b0dhbWVib2FyZCA9IHJlSW5pdGlhbGlzZWRPYmplY3RzLnBsYXllclR3b0dhbWVib2FyZDtcclxuXHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ09uQ2VsbENsaWNrZWQnLCBoYW5kbGVDZWxsQ2xpY2tlZCk7IC8vcmVjZWl2ZWQgZnJvbSBVSSBvbiBjbGlja1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2VsbENsaWNrZWQoZSkge1xyXG4gICAgY29uc3QgZ3JpZE93bmVyID0gZS5kZXRhaWwuZ3JpZE93bmVyO1xyXG4gICAgY29uc3QgaGl0Q29vcmRpbmF0ZXMgPSBlLmRldGFpbC5jb29yZGluYXRlcztcclxuICAgIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IGdyaWRPd25lciA9PT0gJ3BsYXllci1vbmUnID8gcGxheWVyT25lR2FtZWJvYXJkIDogcGxheWVyVHdvR2FtZWJvYXJkO1xyXG4gICAgY29uc3QgaXNTaGlwSGl0ID0gYXR0YWNrKHBsYXllckdhbWVib2FyZCwgZ3JpZE93bmVyLCBoaXRDb29yZGluYXRlcyk7XHJcblxyXG4gICAgaWYocGxheWVyR2FtZWJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKSB7XHJcbiAgICAgICAgY29uc3QgV2lubmVyID0gZ3JpZE93bmVyID09PSAncGxheWVyLW9uZScgPyAnUGxheWVyIFR3bycgOiAnUGxheWVyIE9uZSc7XHJcbiAgICAgICAgZGlzcGxheS5oYW5kbGVHYW1lT3ZlcihXaW5uZXIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZighaXNTaGlwSGl0KSB7XHJcbiAgICAgICAgZGlzcGxheS50b2dnbGVHcmlkQmxvY2tlcnMoKTtcclxuICAgICAgICBzd2l0Y2hUdXJuKCk7XHJcbiAgICAgICAgZGlzcGxheS5zaG93UGxheWVyVHVybigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQ29tcHV0ZXJzVHVybihpc1NoaXBIaXQsIGhpdENvb3JkaW5hdGVzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXR0YWNrKHBsYXllckdhbWVib2FyZCwgZ3JpZE93bmVyLCBjb29yZGluYXRlcykge1xyXG4gICAgY29uc3QgW3Jvd051bWJlciwgY29sTnVtYmVyXSA9IGNvb3JkaW5hdGVzO1xyXG4gICAgY29uc3QgeyBhZGphY2VudENlbGxzLCBpc1NoaXBIaXQgfSA9IHBsYXllckdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcclxuICAgIG1hcmtDZWxsc0luVUkocm93TnVtYmVyLCBjb2xOdW1iZXIsIGdyaWRPd25lciwgcGxheWVyR2FtZWJvYXJkLCBhZGphY2VudENlbGxzKTtcclxuICAgIHJldHVybiBpc1NoaXBIaXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcmtDZWxsc0luVUkocm93TnVtYmVyLCBjb2xOdW1iZXIsIGdyaWRPd25lciwgcGxheWVyR2FtZWJvYXJkLCBhZGphY2VudENlbGxzKSB7XHJcbiAgICBkaXNwbGF5Lm1hcmtDZWxsKFxyXG4gICAgICAgIFtyb3dOdW1iZXIsIGNvbE51bWJlcl0sXHJcbiAgICAgICAgZ3JpZE93bmVyLFxyXG4gICAgICAgIHBsYXllckdhbWVib2FyZC5nYW1lYm9hcmRbcm93TnVtYmVyXVtjb2xOdW1iZXJdXHJcbiAgICApO1xyXG4gICAgaWYgKGFkamFjZW50Q2VsbHMpIHtcclxuICAgICAgICBhZGphY2VudENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgW3Jvd051bWJlciwgY29sTnVtYmVyXSA9IGNlbGwuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgZGlzcGxheS5tYXJrQ2VsbChbcm93TnVtYmVyLCBjb2xOdW1iZXJdLCBncmlkT3duZXIsIHBsYXllckdhbWVib2FyZC5nYW1lYm9hcmRbcm93TnVtYmVyXVtjb2xOdW1iZXJdKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNDb21wdXRlcnNUdXJuKGlzU2hpcEhpdCwgaGl0Q29vcmRpbmF0ZXMpIHtcclxuICAgIGlmIChjdXJyZW50UGxheWVyID09ICdwbGF5ZXItdHdvJykge1xyXG4gICAgICAgIHBsYXlDb21wdXRlcnNUdXJuKGlzU2hpcEhpdCwgaGl0Q29vcmRpbmF0ZXMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwbGF5Q29tcHV0ZXJzVHVybihpc1NoaXBIaXQsIGhpdENvb3JkaW5hdGVzKSB7XHJcbiAgICBsZXQgcmFuZG9tQ29vcmRpbmF0ZSA9IFtdO1xyXG4gICAgaWYgKGlzU2hpcEhpdCkge1xyXG4gICAgICAgIHJhbmRvbUNvb3JkaW5hdGUgPVxyXG4gICAgICAgICAgICBwbGF5ZXJPbmVHYW1lYm9hcmQuZ2V0UmFuZG9tQWRqYWNlbnRDb29yZGluYXRlKGhpdENvb3JkaW5hdGVzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmFuZG9tQ29vcmRpbmF0ZSA9IHBsYXllck9uZUdhbWVib2FyZC5nZXRSYW5kb21Db29yZGluYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW9ja0V2ZW50ID0ge1xyXG4gICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICBjb29yZGluYXRlczogcmFuZG9tQ29vcmRpbmF0ZSxcclxuICAgICAgICAgICAgZ3JpZE93bmVyOiAncGxheWVyLW9uZScsXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZihwbGF5ZXJMZWZ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGFuZGxlQ2VsbENsaWNrZWQobW9ja0V2ZW50KTtcclxuICAgICAgICBkaXNwbGF5LmhpZ2hsaWdodEF0dGFja2VkQ2VsbChyYW5kb21Db29yZGluYXRlLCAncGxheWVyLW9uZScpO1xyXG4gICAgfSwgMjAwMCk7IC8vZGVsYXkgdG8gc2ltdWxhdGUgXCJ0aGlua2luZ1wiLlxyXG59XHJcblxyXG5mdW5jdGlvbiBwbGFjZVNoaXBBdFJhbmRvbUNvb3JkaW5hdGUoc2hpcCwgcGxheWVyR2FtZWJvYXJkKSB7XHJcbiAgICBsZXQgeyByYW5kb21Db29yZGluYXRlLCByYW5kb21PcmllbnRhdGlvbiB9ID0gcGxheWVyR2FtZWJvYXJkLmdldFJhbmRvbUNvb3JkaW5hdGVGb3JTaGlwKHNoaXAuc2l6ZSk7XHJcbiAgICBwbGF5ZXJHYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAsIHJhbmRvbUNvb3JkaW5hdGUsIHJhbmRvbU9yaWVudGF0aW9uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmVnaW5QbGF5KCkge1xyXG4gICAgZGlzcGxheS50b2dnbGVDZWxsQmxvY2tlcnMoKTtcclxuICAgIGRpc3BsYXkuZW5hYmxlR3JpZEJsb2NrZXIoJ3BsYXllci1vbmUtZ2FtZWJvYXJkJyk7XHJcbiAgICBkaXNwbGF5LmRpc2FibGVHcmlkQmxvY2tlcigncGxheWVyLXR3by1nYW1lYm9hcmQnKTtcclxuICAgIGRpc3BsYXkuc2hvd1BsYXllclR1cm4oJ3BsYXllci1vbmUnKTtcclxuICAgIFxyXG4gICAgc3RhcnRHYW1lQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIHJhbmRvbVBsYWNlbWVudEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBsZWF2ZUdhbWVCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIGFycmFuZ2VTaGlwc0J0bi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgcGxheWVyTGVmdCA9IGZhbHNlO1xyXG59XHJcblxyXG5zdGFydEdhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBiZWdpblBsYXkpO1xyXG5cclxubGVhdmVHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVJbml0aWFsaXNlR2FtZSk7XHJcblxyXG5yYW5kb21QbGFjZW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcnJhbmdlU2hpcHNBdFJhbmRvbSk7XHJcblxyXG5hcnJhbmdlU2hpcHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkaXNwbGF5LmluaXRpYWxpc2VQbGFjaW5nU2hpcHMocGxheWVyT25lR2FtZWJvYXJkLCAncGxheWVyLW9uZScpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGFycmFuZ2VTaGlwc0F0UmFuZG9tKCkge1xyXG4gICAgcGxheWVyT25lR2FtZWJvYXJkLmNsZWFyR2FtZWJvYXJkKCk7XHJcblxyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDIpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDMpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDMpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDQpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDUpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG5cclxuICAgIGNvbnN0IHNoaXBQb3NpdGlvbnMgPSBwbGF5ZXJPbmVHYW1lYm9hcmQuZ2V0U2hpcFBvc2l0aW9ucygpO1xyXG5cclxuICAgIGRpc3BsYXkudXBkYXRlU2hpcHNPbkdhbWVib2FyZChzaGlwUG9zaXRpb25zLCAncGxheWVyLW9uZScpO1xyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=