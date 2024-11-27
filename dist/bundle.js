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

function displayGameboard(size = 10, gridOwner) {
    createGrid(size, gridOwner);
}

function clearGameboards() {
    while (playerOneGrid.firstChild) {
        playerOneGrid.removeChild(playerOneGrid.lastChild);
    }

    while (playerTwoGrid.firstChild) {
        playerTwoGrid.removeChild(playerTwoGrid.lastChild);
    }
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
    clearGameboards,
    highlightAttackedCell,
    clearResults,
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
            // console.log(this.gameboard);
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
            console.log(ship)
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
        // return Orientation.HORIZONTAL;
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
    _modules_display_js__WEBPACK_IMPORTED_MODULE_3__["default"].clearGameboards();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUN4QyxvQ0FBb0Msd0RBQUk7QUFDeEMsb0NBQW9DLHdEQUFJO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQU87QUFDWDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZVN0YXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0FuZHJvaWRBc3Nhc3Npbi1XWFhZLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmViYXMrTmV1ZSZkaXNwbGF5PXN3YXAnKTsgKi9cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbmRyb2lkLUFzc2Fzc2luJztcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgnb3BlbnR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbioge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0byAwO1xyXG59XHJcblxyXG5oZWFkZXIgaDEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbmRyb2lkLUFzc2Fzc2luJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5tYWluLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qIGZsZXgtZGlyZWN0aW9uOiA7ICovXHJcbn1cclxuXHJcbi5nYW1lLWN0cmwtc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG8gMTAwcHg7XHJcbn1cclxuXHJcbi5nYW1lLWN0cmwtYnRuIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNCwgMjM0LCAyMzQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDAsIDApO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uZ2FtZS1jdHJsLWJ0bjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjAsIDYwLCA2MCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5nYW1lYm9hcmRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZ2FwOiA1MHB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiA1MHB4IDUwcHggMzBweDtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cclxufVxyXG5cclxuLnBsYXllci1vbmUtaW5zdHJ1Y3Rpb24sIFxyXG4ucGxheWVyLXR3by1pbnN0cnVjdGlvbixcclxuLnBsYXllci10d28taW5zdHJ1Y3Rpb24tbm90LW5lZWRlZCB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxufVxyXG5cclxuXHJcbi5wbGF5ZXItZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcclxufVxyXG5cclxuLmNlbGwge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3YjdiN2I7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbn1cclxuXHJcbi5jZWxsOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcbi5yZXN1bHRzIHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4vKiBmb3IgZ3JpZHMgKi9cclxuLmdyaWQtYmxvY2tlciB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG9wYWNpdHk6IDAuMztcclxufVxyXG5cclxuLyogZm9yIGNlbGxzICovXHJcbi5ibG9ja2VyIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4vKiBmb3IgcGxheWVyIHR1cm4gaW5zdHJ1Y3Rpb25zICovXHJcbi5oaWRkZW4ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHFGQUFxRjs7QUFFckY7SUFDSSwrQkFBK0I7SUFDL0IsK0RBQWdFO0lBQ2hFLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0I7O0FBRUE7OztJQUdJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQSxjQUFjO0FBQ2Q7SUFDSSxvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQjs7QUFFQSxjQUFjO0FBQ2Q7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUEsaUNBQWlDO0FBQ2pDO0lBQ0ksa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlYmFzK05ldWUmZGlzcGxheT1zd2FwJyk7ICovXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQW5kcm9pZC1Bc3Nhc3Npbic7XFxyXFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9BbmRyb2lkQXNzYXNzaW4tV1hYWS50dGYnKSBmb3JtYXQoJ29wZW50eXBlJyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGgxIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdBbmRyb2lkLUFzc2Fzc2luJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC8qIGZsZXgtZGlyZWN0aW9uOiA7ICovXFxyXFxufVxcclxcblxcclxcbi5nYW1lLWN0cmwtc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvIDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1jdHJsLWJ0biB7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNCwgMjM0LCAyMzQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1jdHJsLWJ0bjpub3QoOmRpc2FibGVkKTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MCwgNjAsIDYwKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGdhcDogNTBweDtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBtYXJnaW46IDUwcHggNTBweCAzMHB4O1xcclxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXItb25lLWluc3RydWN0aW9uLCBcXHJcXG4ucGxheWVyLXR3by1pbnN0cnVjdGlvbixcXHJcXG4ucGxheWVyLXR3by1pbnN0cnVjdGlvbi1ub3QtbmVlZGVkIHtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnBsYXllci1ncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3YjdiN2I7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgd2lkdGg6IDM2cHg7XFxyXFxuICAgIGhlaWdodDogMzZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGw6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdWx0cyB7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qIGZvciBncmlkcyAqL1xcclxcbi5ncmlkLWJsb2NrZXIge1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgb3BhY2l0eTogMC4zO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmb3IgY2VsbHMgKi9cXHJcXG4uYmxvY2tlciB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmb3IgcGxheWVyIHR1cm4gaW5zdHJ1Y3Rpb25zICovXFxyXFxuLmhpZGRlbiB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcGxheWVyVHdvSW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnBsYXllci10d28taW5zdHJ1Y3Rpb25gKTtcclxuY29uc3QgcGxheWVyT25lSW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnBsYXllci1vbmUtaW5zdHJ1Y3Rpb25gKTtcclxuXHJcbmNvbnN0IHBsYXllck9uZUdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyLW9uZS1nYW1lYm9hcmRgKTtcclxuY29uc3QgcGxheWVyVHdvR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXItdHdvLWdhbWVib2FyZGApO1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheUdhbWVib2FyZChzaXplID0gMTAsIGdyaWRPd25lcikge1xyXG4gICAgY3JlYXRlR3JpZChzaXplLCBncmlkT3duZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckdhbWVib2FyZHMoKSB7XHJcbiAgICB3aGlsZSAocGxheWVyT25lR3JpZC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgcGxheWVyT25lR3JpZC5yZW1vdmVDaGlsZChwbGF5ZXJPbmVHcmlkLmxhc3RDaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgd2hpbGUgKHBsYXllclR3b0dyaWQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIHBsYXllclR3b0dyaWQucmVtb3ZlQ2hpbGQocGxheWVyVHdvR3JpZC5sYXN0Q2hpbGQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVHcmlkKHNpemUsIGdyaWRPd25lcikge1xyXG4gICAgbGV0IGdyaWQgPSBudWxsO1xyXG4gICAgaWYgKGdyaWRPd25lciA9PSAncGxheWVyLW9uZScpIHtcclxuICAgICAgICBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1vbmUtZ2FtZWJvYXJkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXR3by1nYW1lYm9hcmQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWdyaWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgc2l6ZTsgcm93KyspIHtcclxuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBzaXplOyBjb2wrKykge1xyXG4gICAgICAgICAgICBjb25zdCBncmlkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBncmlkQ2VsbC5jbGFzc0xpc3QuYWRkKGBjZWxsYCk7XHJcbiAgICAgICAgICAgIGdyaWRDZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS1yb3cnLCByb3cpO1xyXG4gICAgICAgICAgICBncmlkQ2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sJywgY29sKTtcclxuICAgICAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChncmlkQ2VsbCk7XHJcbiAgICAgICAgICAgIGdyaWQuc2V0QXR0cmlidXRlKCdkYXRhLW93bmVyJywgZ3JpZE93bmVyKTtcclxuICAgICAgICAgICAgaWYgKGdyaWRPd25lciA9PSAncGxheWVyLXR3bycpIHtcclxuICAgICAgICAgICAgICAgIGdyaWRDZWxsLnN0eWxlLmNvbnRlbnRWaXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgICAgICBzZXRVcEV2ZW50TGlzdGVuZXIoZ3JpZENlbGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVTaGlwc09uR2FtZWJvYXJkKHNoaXBQb3NpdGlvbnMsIGdyaWRPd25lcikge1xyXG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1vd25lcj1cIiR7Z3JpZE93bmVyfVwiXSAuY2VsbGApO1xyXG4gICAgY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcclxuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICB9KTtcclxuICAgIGRpc3BsYXlTaGlwc09uR2FtZWJvYXJkKHNoaXBQb3NpdGlvbnMsIGdyaWRPd25lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlTaGlwc09uR2FtZWJvYXJkKHNoaXBQb3NpdGlvbnMsIGdyaWRPd25lcikge1xyXG4gICAgc2hpcFBvc2l0aW9ucy5mb3JFYWNoKChwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBwb3NpdGlvbi5zcGxpdCgnLCcpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgIGBbZGF0YS1vd25lcj1cIiR7Z3JpZE93bmVyfVwiXSAuY2VsbFtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbD1cIiR7Y29sfVwiXWBcclxuICAgICAgICApLnRleHRDb250ZW50ID0gJ3MnO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUdyaWRCbG9ja2VycygpIHtcclxuICAgIHBsYXllck9uZUdyaWQuY2xhc3NMaXN0LnRvZ2dsZSgnZ3JpZC1ibG9ja2VyJyk7XHJcbiAgICBwbGF5ZXJUd29HcmlkLmNsYXNzTGlzdC50b2dnbGUoJ2dyaWQtYmxvY2tlcicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbmFibGVHcmlkQmxvY2tlcihncmlkKSB7XHJcbiAgICBjb25zdCBwbGF5ZXJHcmlkID0gZ3JpZCA9PT0gJ3BsYXllci1vbmUtZ2FtZWJvYXJkJyA/IHBsYXllck9uZUdyaWQgOiBwbGF5ZXJUd29HcmlkO1xyXG4gICAgcGxheWVyR3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkLWJsb2NrZXInKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzYWJsZUdyaWRCbG9ja2VyKGdyaWQpIHtcclxuICAgIGNvbnN0IHBsYXllckdyaWQgPSBncmlkID09PSAncGxheWVyLW9uZS1nYW1lYm9hcmQnID8gcGxheWVyT25lR3JpZCA6IHBsYXllclR3b0dyaWQ7XHJcbiAgICBwbGF5ZXJHcmlkLmNsYXNzTGlzdC5yZW1vdmUoJ2dyaWQtYmxvY2tlcicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVDZWxsQmxvY2tlcnMoKSB7XHJcbiAgICBjb25zdCBjZWxscyA9IHBsYXllclR3b0dyaWQuY2hpbGROb2RlcztcclxuICAgIGNlbGxzLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QudG9nZ2xlKCdibG9ja2VyJyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1BsYXllclR1cm4ocGxheWVyID0gJycpIHtcclxuICAgIGlmKHBsYXllciAhPT0gJycpIHtcclxuICAgICAgICBwbGF5ZXJPbmVJbnN0cnVjdGlvbnMuZm9yRWFjaChwbGF5ZXJPbmVJbnN0cnVjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIHBsYXllck9uZUluc3RydWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXJPbmVJbnN0cnVjdGlvbnMuZm9yRWFjaChwbGF5ZXJPbmVJbnN0cnVjdGlvbiA9PiB7XHJcbiAgICAgICAgcGxheWVyT25lSW5zdHJ1Y3Rpb24uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcGxheWVyVHdvSW5zdHJ1Y3Rpb25zLmZvckVhY2gocGxheWVyVHdvSW5zdHJ1Y3Rpb24gPT4ge1xyXG4gICAgICAgIHBsYXllclR3b0luc3RydWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVQbGF5ZXJJbnN0cnVjdGlvbnMoKSB7XHJcbiAgICBwbGF5ZXJPbmVJbnN0cnVjdGlvbnMuZm9yRWFjaChwbGF5ZXJPbmVJbnN0cnVjdGlvbiA9PiB7XHJcbiAgICAgICAgcGxheWVyT25lSW5zdHJ1Y3Rpb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwbGF5ZXJUd29JbnN0cnVjdGlvbnMuZm9yRWFjaChwbGF5ZXJUd29JbnN0cnVjdGlvbiA9PiB7XHJcbiAgICAgICAgcGxheWVyVHdvSW5zdHJ1Y3Rpb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFya0NlbGwoY29vcmRpbmF0ZXMsIGdyaWRPd25lciwgbWFya0NvbnRlbnQpIHtcclxuICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZGluYXRlcztcclxuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIGBbZGF0YS1vd25lcj1cIiR7Z3JpZE93bmVyfVwiXSAuY2VsbFtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbD1cIiR7Y29sfVwiXWBcclxuICAgICk7XHJcblxyXG4gICAgY2VsbC50ZXh0Q29udGVudCA9IG1hcmtDb250ZW50O1xyXG5cclxuICAgIGlmIChtYXJrQ29udGVudCA9PSAnWCcpIHtcclxuICAgICAgICBjZWxsLnN0eWxlLmNvbG9yID0gJ3JlZCc7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5mb250U2l6ZSA9ICczMnB4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5mb250U2l6ZSA9ICcxMnB4JztcclxuICAgIH1cclxuXHJcbiAgICBjZWxsLnN0eWxlLmNvbnRlbnRWaXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG5cclxuICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDZWxsQ2xpY2spO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRVcEV2ZW50TGlzdGVuZXIoY2VsbCkge1xyXG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNlbGxDbGljayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNlbGxDbGljayhlKSB7XHJcbiAgICBjb25zdCBjZWxsID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXHJcbiAgICAgICAgTnVtYmVyKGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXJvdycpKSxcclxuICAgICAgICBOdW1iZXIoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sJykpLFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGdyaWRPd25lciA9IGNlbGwucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3duZXInKTtcclxuICAgIGhpZ2hsaWdodEF0dGFja2VkQ2VsbChjb29yZGluYXRlcywgZ3JpZE93bmVyKTtcclxuICAgIHNlbmRFdmVudE9uQ2VsbENsaWNrZWQoY29vcmRpbmF0ZXMsIGdyaWRPd25lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRFdmVudE9uQ2VsbENsaWNrZWQoY29vcmRpbmF0ZXMsIGdyaWRPd25lcikge1xyXG4gICAgY29uc3QgZXZlbnRPbkNlbGxDbGlja2VkID0gbmV3IEN1c3RvbUV2ZW50KCdPbkNlbGxDbGlja2VkJywge1xyXG4gICAgICAgIGRldGFpbDogeyBjb29yZGluYXRlcywgZ3JpZE93bmVyIH0sXHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnRPbkNlbGxDbGlja2VkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlR2FtZU92ZXIod2lubmVyKSB7XHJcbiAgICBjb25zdCByZW1haW5pbmdDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XHJcbiAgICByZW1haW5pbmdDZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDZWxsQ2xpY2spO1xyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB3aW5uZXJSZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lci1yZXN1bHRzJyk7XHJcbiAgICB3aW5uZXJSZXN1bHRzLnRleHRDb250ZW50ID0gYCR7d2lubmVyfSBXb24hYDtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlnaGxpZ2h0QXR0YWNrZWRDZWxsKGhpdENvb3JkaW5hdGUsIGdyaWRPd25lcikge1xyXG4gICAgY29uc3QgW3JvdywgY29sXSA9IGhpdENvb3JkaW5hdGU7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIGBbZGF0YS1vd25lcj1cIiR7Z3JpZE93bmVyfVwiXSAuY2VsbFtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbD1cIiR7Y29sfVwiXWBcclxuICAgICkuc3R5bGUuYm9yZGVyID0gJzNweCBzb2xpZCBibHVlJztcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgIGBbZGF0YS1vd25lcj1cIiR7Z3JpZE93bmVyfVwiXSAuY2VsbFtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbD1cIiR7Y29sfVwiXWBcclxuICAgICAgICApLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgIzdiN2I3Yic7XHJcbiAgICB9LCAxNTAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJSZXN1bHRzKCkge1xyXG4gICAgY29uc3Qgd2lubmVyUmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXItcmVzdWx0cycpO1xyXG4gICAgd2lubmVyUmVzdWx0cy50ZXh0Q29udGVudCA9ICcnO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdHtcclxuICAgIGRpc3BsYXlHYW1lYm9hcmQsXHJcbiAgICBtYXJrQ2VsbCxcclxuICAgIHRvZ2dsZUdyaWRCbG9ja2VycyxcclxuICAgIGRpc2FibGVHcmlkQmxvY2tlcixcclxuICAgIGVuYWJsZUdyaWRCbG9ja2VyLFxyXG4gICAgdG9nZ2xlQ2VsbEJsb2NrZXJzLFxyXG4gICAgc2hvd1BsYXllclR1cm4sXHJcbiAgICBoaWRlUGxheWVySW5zdHJ1Y3Rpb25zLFxyXG4gICAgaGFuZGxlR2FtZU92ZXIsXHJcbiAgICBkaXNwbGF5U2hpcHNPbkdhbWVib2FyZCxcclxuICAgIHVwZGF0ZVNoaXBzT25HYW1lYm9hcmQsXHJcbiAgICBjbGVhckdhbWVib2FyZHMsXHJcbiAgICBoaWdobGlnaHRBdHRhY2tlZENlbGwsXHJcbiAgICBjbGVhclJlc3VsdHMsXHJcbn07XHJcbiIsImxldCBjdXJyZW50UGxheWVyID0gJyc7XHJcblxyXG5mdW5jdGlvbiBzZXRDdXJyZW50UGxheWVyKHBsYXllcikge1xyXG4gICAgY3VycmVudFBsYXllciA9IHBsYXllcjtcclxufVxyXG5cclxuZnVuY3Rpb24gc3dpdGNoVHVybigpIHtcclxuICAgIGlmIChjdXJyZW50UGxheWVyID09PSAncGxheWVyLW9uZScpIHtcclxuICAgICAgICBjdXJyZW50UGxheWVyID0gJ3BsYXllci10d28nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJyZW50UGxheWVyID0gJ3BsYXllci1vbmUnO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBjdXJyZW50UGxheWVyLCBzZXRDdXJyZW50UGxheWVyLCBzd2l0Y2hUdXJuIH07IiwiY29uc3QgT3JpZW50YXRpb24gPSBPYmplY3QuZnJlZXplKHtcclxuICAgIEhPUklaT05UQUw6ICdob3Jpem9udGFsJyxcclxuICAgIFZFUlRJQ0FMOiAndmVydGljYWwnLFxyXG59KTtcclxuXHJcbmNsYXNzIEdhbWVib2FyZCB7XHJcbiAgICAjUk9XX1NJWkUgPSAxMDtcclxuICAgICNDT0xfU0laRSA9IDEwO1xyXG4gICAgI2FkamFjZW50Q2VsbERlbHRhcyA9IFtcclxuICAgICAgICBbLTEsIC0xXSxcclxuICAgICAgICBbLTEsIDBdLFxyXG4gICAgICAgIFstMSwgMV0sXHJcbiAgICAgICAgWzAsIC0xXSxcclxuICAgICAgICBbMCwgMV0sXHJcbiAgICAgICAgWzEsIC0xXSxcclxuICAgICAgICBbMSwgMF0sXHJcbiAgICAgICAgWzEsIDFdLFxyXG4gICAgXTtcclxuICAgICNyZWxldmFudEFkamFjZW50Q2VsbERlbHRhcyA9IFtcclxuICAgICAgICBbLTEsIDBdLFxyXG4gICAgICAgIFswLCAtMV0sXHJcbiAgICAgICAgWzAsIDFdLFxyXG4gICAgICAgIFsxLCAwXSxcclxuICAgIF07XHJcbiAgICAjcmVzZXJ2ZWRQb3NpdGlvbnMgPSBuZXcgU2V0KCk7XHJcbiAgICAjc2hpcFBvc2l0aW9ucyA9IG5ldyBTZXQoKTtcclxuICAgICNzaGlwVG9BZGphY2VudENlbGxzTWFwID0gbmV3IE1hcCgpOyAvL21hcCBvZiBzaGlwIG9iamVjdCB0byBhZGphY2VudENlbGxzT2ZTaGlwIHNldCgpXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBBcnJheSh0aGlzLiNST1dfU0laRSlcclxuICAgICAgICAgICAgLmZpbGwobnVsbClcclxuICAgICAgICAgICAgLm1hcCgoKSA9PiBuZXcgQXJyYXkodGhpcy4jQ09MX1NJWkUpLmZpbGwobnVsbCkpO1xyXG4gICAgICAgIHRoaXMuYXZhaWxhYmxlQ2VsbHMgPSB0aGlzLmluaXRpYWxpemVBdmFpbGFibGVDb29yZGluYXRlcygpO1xyXG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplQXZhaWxhYmxlQ29vcmRpbmF0ZXMoKSB7XHJcbiAgICAgICAgY29uc3QgY2VsbHMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCByb3dOdW0gPSAwOyByb3dOdW0gPCB0aGlzLiNST1dfU0laRTsgcm93TnVtKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sTnVtID0gMDsgY29sTnVtIDwgdGhpcy4jQ09MX1NJWkU7IGNvbE51bSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjZWxscy5wdXNoKFtyb3dOdW0sIGNvbE51bV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjZWxscztcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckdhbWVib2FyZCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVib2FyZCA9IHRoaXMuZ2FtZWJvYXJkLm1hcCgocm93KSA9PiByb3cuZmlsbChudWxsKSk7XHJcbiAgICAgICAgdGhpcy4jcmVzZXJ2ZWRQb3NpdGlvbnMuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLiNzaGlwUG9zaXRpb25zLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy4jc2hpcFRvQWRqYWNlbnRDZWxsc01hcC5jbGVhcigpO1xyXG4gICAgICAgIC8vIHRoaXMuc2hpcHMuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBZGphY2VudENlbGxzKHBvc2l0aW9uLCBhZGphY2VudERlbHRhcykge1xyXG4gICAgICAgIGxldCBbY3VycmVudFgsIGN1cnJlbnRZXSA9IHBvc2l0aW9uO1xyXG4gICAgICAgIGNvbnN0IGFkamFjZW50Q2VsbHMgPSBbXTtcclxuICAgICAgICBhZGphY2VudERlbHRhcy5mb3JFYWNoKChjZWxsQ29vcmRpbmF0ZXMpID0+IHtcclxuICAgICAgICAgICAgbGV0IFthZGphY2VudERlbHRhWCwgYWRqYWNlbnREZWx0YVldID0gY2VsbENvb3JkaW5hdGVzO1xyXG4gICAgICAgICAgICBsZXQgYWRqYWNlbnRYID0gY3VycmVudFggKyBhZGphY2VudERlbHRhWDtcclxuICAgICAgICAgICAgbGV0IGFkamFjZW50WSA9IGN1cnJlbnRZICsgYWRqYWNlbnREZWx0YVk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGFkamFjZW50WCA+PSAwICYmXHJcbiAgICAgICAgICAgICAgICBhZGphY2VudFggPD0gOSAmJlxyXG4gICAgICAgICAgICAgICAgYWRqYWNlbnRZID49IDAgJiZcclxuICAgICAgICAgICAgICAgIGFkamFjZW50WSA8PSA5XHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFkamFjZW50Q2VsbHNDb29yZGluYXRlID0gW2FkamFjZW50WCwgYWRqYWNlbnRZXTtcclxuICAgICAgICAgICAgICAgIGFkamFjZW50Q2VsbHMucHVzaChhZGphY2VudENlbGxzQ29vcmRpbmF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFkamFjZW50Q2VsbHM7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWYWxpZFBvc2l0aW9uKHNoaXBMZW5ndGgsIHBvc2l0aW9uLCBvcmllbnRhdGlvbikge1xyXG4gICAgICAgIGxldCBbcm93TnVtYmVyLCBjb2xOdW1iZXJdID0gcG9zaXRpb247XHJcblxyXG4gICAgICAgIC8vY2hlY2sgaWYgcG9zaXRpb24gaXMgYWxyZWFkeSBmaWxsZWQgb3IgaXMgYWRqYWNlbnQgcG9zaXRpb24gb2YgZmlsbGVkIGNlbGwuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09IE9yaWVudGF0aW9uLkhPUklaT05UQUwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBkUG9zaXRpb24gPSBbcm93TnVtYmVyLCBjb2xOdW1iZXIgKyBpXTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNyZXNlcnZlZFBvc2l0aW9ucy5oYXMoZFBvc2l0aW9uLnRvU3RyaW5nKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jc2hpcFBvc2l0aW9ucy5oYXMoZFBvc2l0aW9uLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZFBvc2l0aW9uID0gW3Jvd051bWJlciArIGksIGNvbE51bWJlcl07XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jcmVzZXJ2ZWRQb3NpdGlvbnMuaGFzKGRQb3NpdGlvbi50b1N0cmluZygpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3NoaXBQb3NpdGlvbnMuaGFzKGRQb3NpdGlvbi50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2NoZWNrIGlmIGl0cyBsZW5ndGggY2FuIGdvIG91dCBvZiBib3VuZHM7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9PSBPcmllbnRhdGlvbi5IT1JJWk9OVEFMICYmXHJcbiAgICAgICAgICAgIGNvbE51bWJlciArIHNoaXBMZW5ndGggPiB0aGlzLiNST1dfU0laRVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgb3JpZW50YXRpb24gPT0gT3JpZW50YXRpb24uVkVSVElDQUwgJiZcclxuICAgICAgICAgICAgcm93TnVtYmVyICsgc2hpcExlbmd0aCA+IHRoaXMuI0NPTF9TSVpFXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYWNlU2hpcChzaGlwLCBwb3NpdGlvbiwgb3JpZW50YXRpb24pIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZFBvc2l0aW9uKHNoaXAuc2l6ZSwgcG9zaXRpb24sIG9yaWVudGF0aW9uKSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmdhbWVib2FyZCk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IFtyb3dOdW1iZXIsIGNvbE51bWJlcl0gPSBwb3NpdGlvbjtcclxuICAgICAgICBsZXQgc2hpcExlbmd0aCA9IHNoaXAuc2l6ZTtcclxuICAgICAgICBsZXQgYWxsQWRqYWNlbnRDZWxsc09mU2hpcCA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09IE9yaWVudGF0aW9uLkhPUklaT05UQUwpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZWJvYXJkW3Jvd051bWJlcl1bY29sTnVtYmVyXSA9IHNoaXA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiNzaGlwUG9zaXRpb25zLmFkZChbcm93TnVtYmVyLCBjb2xOdW1iZXJdLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFkamFjZW50Q2VsbHMgPSB0aGlzLmdldEFkamFjZW50Q2VsbHMoXHJcbiAgICAgICAgICAgICAgICAgICAgW3Jvd051bWJlciwgY29sTnVtYmVyXSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNhZGphY2VudENlbGxEZWx0YXNcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBhZGphY2VudENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNyZXNlcnZlZFBvc2l0aW9ucy5hZGQoY2VsbC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICBhbGxBZGphY2VudENlbGxzT2ZTaGlwLmFkZChjZWxsLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb2xOdW1iZXIrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzaGlwKVxyXG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSBPcmllbnRhdGlvbi5WRVJUSUNBTCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lYm9hcmRbcm93TnVtYmVyXVtjb2xOdW1iZXJdID0gc2hpcDtcclxuICAgICAgICAgICAgICAgIHRoaXMuI3NoaXBQb3NpdGlvbnMuYWRkKFtyb3dOdW1iZXIsIGNvbE51bWJlcl0udG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWRqYWNlbnRDZWxscyA9IHRoaXMuZ2V0QWRqYWNlbnRDZWxscyhcclxuICAgICAgICAgICAgICAgICAgICBbcm93TnVtYmVyLCBjb2xOdW1iZXJdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2FkamFjZW50Q2VsbERlbHRhc1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGFkamFjZW50Q2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3Jlc2VydmVkUG9zaXRpb25zLmFkZChjZWxsLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbEFkamFjZW50Q2VsbHNPZlNoaXAuYWRkKGNlbGwudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJvd051bWJlcisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDsgLy9pbnZhbGlkIG9yaWVudGF0aW9uXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3JlbW92ZSBhbGwgY2VsbHMgdGhhdCBoYXZlIHNoaXBzXHJcbiAgICAgICAgYWxsQWRqYWNlbnRDZWxsc09mU2hpcC5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjZWxsLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWVib2FyZFtyb3ddW2NvbF0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGFsbEFkamFjZW50Q2VsbHNPZlNoaXAuZGVsZXRlKGNlbGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuI3NoaXBUb0FkamFjZW50Q2VsbHNNYXAuc2V0KHNoaXAsIGFsbEFkamFjZW50Q2VsbHNPZlNoaXApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICByZWNlaXZlQXR0YWNrKGhpdENvb3JkaW5hdGUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhoaXRDb29yZGluYXRlKTtcclxuICAgICAgICBsZXQgW2hpdENvb3JkaW5hdGVYLCBoaXRDb29yZGluYXRlWV0gPSBoaXRDb29yZGluYXRlO1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLmdhbWVib2FyZFtoaXRDb29yZGluYXRlWF1baGl0Q29vcmRpbmF0ZVldO1xyXG4gICAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVib2FyZFtoaXRDb29yZGluYXRlWF1baGl0Q29vcmRpbmF0ZVldID0gJ08nO1xyXG4gICAgICAgICAgICByZXR1cm4geyBhZGphY2VudENlbGxzOiBudWxsLCBpc1NoaXBIaXQ6IGZhbHNlIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0YXJnZXQuaGl0KCk7XHJcbiAgICAgICAgdGhpcy5nYW1lYm9hcmRbaGl0Q29vcmRpbmF0ZVhdW2hpdENvb3JkaW5hdGVZXSA9ICdYJztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYXJlQWxsU2hpcHNTdW5rKCkpIHtcclxuICAgICAgICAgICAgLy9nYW1lb3ZlciwgYW5ub3VuY2Ugd2lubmVyXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHYW1lb3ZlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGFyZ2V0LmlzU3VuaygpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFkamFjZW50Q2VsbHNTZXQgPSB0aGlzLiNzaGlwVG9BZGphY2VudENlbGxzTWFwLmdldCh0YXJnZXQpO1xyXG4gICAgICAgICAgICBhZGphY2VudENlbGxzU2V0LmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjZWxsLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVib2FyZFtyb3ddW2NvbF0gPSAnTyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNlbGxGcm9tQXZhaWxhYmxlQ2VsbHMoW3JvdywgY29sXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4geyBhZGphY2VudENlbGxzOiBhZGphY2VudENlbGxzU2V0LCBpc1NoaXBIaXQ6IHRydWUgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgYWRqYWNlbnRDZWxsczogbnVsbCwgaXNTaGlwSGl0OiB0cnVlIH07XHJcbiAgICB9XHJcblxyXG4gICAgYXJlQWxsU2hpcHNTdW5rKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3Vua1N0YXR1cyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2hpcFBvc2l0aW9ucyhsb2dTaGlwUG9zaXRpb25zID0gZmFsc2UpIHtcclxuICAgICAgICBpZihsb2dTaGlwUG9zaXRpb25zKSBjb25zb2xlLmxvZyh0aGlzLiNzaGlwUG9zaXRpb25zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4jc2hpcFBvc2l0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBnZXRSYW5kb21Db29yZGluYXRlRm9yU2hpcChzaGlwTGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXZhaWxhYmxlQ2VsbHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gYXZhaWxhYmxlIGNlbGxzIHRvIHBsYWNlIHNoaXAnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IE1BWF9SRVRSSUVTID0gMTAwO1xyXG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XHJcblxyXG4gICAgICAgIHdoaWxlIChhdHRlbXB0cyA8IE1BWF9SRVRSSUVTKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbU9yaWVudGF0aW9uID0gdGhpcy5nZXRSYW5kb21PcmllbnRhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmFuZ2VYID1cclxuICAgICAgICAgICAgICAgIHJhbmRvbU9yaWVudGF0aW9uID09PSBPcmllbnRhdGlvbi5IT1JJWk9OVEFMXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLiNST1dfU0laRVxyXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy4jUk9XX1NJWkUgLSAoc2hpcExlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICBjb25zdCByYW5nZVkgPVxyXG4gICAgICAgICAgICAgICAgcmFuZG9tT3JpZW50YXRpb24gPT09IE9yaWVudGF0aW9uLkhPUklaT05UQUxcclxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuI0NPTF9TSVpFIC0gKHNoaXBMZW5ndGggLSAxKVxyXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy4jQ09MX1NJWkU7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUNvb3JkaW5hdGUgPSB0aGlzLmdldFJhbmRvbUNvb3JkaW5hdGVJblJhbmdlKFxyXG4gICAgICAgICAgICAgICAgcmFuZ2VYLFxyXG4gICAgICAgICAgICAgICAgcmFuZ2VZXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmFsaWRQb3NpdGlvbihcclxuICAgICAgICAgICAgICAgICAgICBzaGlwTGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbUNvb3JkaW5hdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tT3JpZW50YXRpb25cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyByYW5kb21Db29yZGluYXRlLCByYW5kb21PcmllbnRhdGlvbiB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhdHRlbXB0cysrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmluZCB2YWxpZCBjb29yZGluYXRlIGZvciBzaGlwIHBsYWNlbWVudCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJhbmRvbU9yaWVudGF0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpIDwgMC41XHJcbiAgICAgICAgICAgID8gT3JpZW50YXRpb24uSE9SSVpPTlRBTFxyXG4gICAgICAgICAgICA6IE9yaWVudGF0aW9uLlZFUlRJQ0FMO1xyXG4gICAgICAgIC8vIHJldHVybiBPcmllbnRhdGlvbi5IT1JJWk9OVEFMO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJhbmRvbUNvb3JkaW5hdGVJblJhbmdlKHJhbmdlWCwgcmFuZ2VZKSB7XHJcbiAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYW5nZVgpO1xyXG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZ2VZKTtcclxuICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJhbmRvbUNvb3JkaW5hdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXZhaWxhYmxlQ2VsbHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gbW9yZSBhdmFpbGFibGUgY2VsbHMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoXHJcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiB0aGlzLmF2YWlsYWJsZUNlbGxzLmxlbmd0aFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCByYW5kb21Db29yZGluYXRlID0gdGhpcy5hdmFpbGFibGVDZWxsc1tyYW5kb21JbmRleF07XHJcbiAgICAgICAgdGhpcy5hdmFpbGFibGVDZWxscy5zcGxpY2UocmFuZG9tSW5kZXgsIDEpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmFuZG9tQ29vcmRpbmF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSYW5kb21BZGphY2VudENvb3JkaW5hdGUoaGl0Q29vcmRpbmF0ZSkge1xyXG4gICAgICAgIGNvbnN0IGFsbEFkamFjZW50Q29vcmRpbmF0ZXMgPVxyXG4gICAgICAgICAgICB0aGlzLmdldFJlbGV2YW50QWRqYWNlbnRDb29yZGluYXRlcyhoaXRDb29yZGluYXRlKTtcclxuICAgICAgICBpZiAoIWFsbEFkamFjZW50Q29vcmRpbmF0ZXMgfHwgYWxsQWRqYWNlbnRDb29yZGluYXRlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKFxyXG4gICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogYWxsQWRqYWNlbnRDb29yZGluYXRlcy5sZW5ndGhcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCByYW5kb21BZGphY2VudENvb3JkaW5hdGUgPSBhbGxBZGphY2VudENvb3JkaW5hdGVzW3JhbmRvbUluZGV4XTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW1vdmVDZWxsRnJvbUF2YWlsYWJsZUNlbGxzKHJhbmRvbUFkamFjZW50Q29vcmRpbmF0ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiByYW5kb21BZGphY2VudENvb3JkaW5hdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmVsZXZhbnRBZGphY2VudENvb3JkaW5hdGVzKGhpdENvb3JkaW5hdGUpIHtcclxuICAgICAgICBjb25zdCBhbGxBZGphY2VudENvb3JkaW5hdGVzID0gdGhpcy5nZXRBZGphY2VudENlbGxzKFxyXG4gICAgICAgICAgICBoaXRDb29yZGluYXRlLFxyXG4gICAgICAgICAgICB0aGlzLiNyZWxldmFudEFkamFjZW50Q2VsbERlbHRhc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgcmVsZXZhbnRBZGphY2VudENvb3JkaW5hdGVzID0gYWxsQWRqYWNlbnRDb29yZGluYXRlcy5maWx0ZXIoXHJcbiAgICAgICAgICAgIChjb29yZGluYXRlKSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lYm9hcmRbY29vcmRpbmF0ZVswXV1bY29vcmRpbmF0ZVsxXV0gIT09ICdYJyAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lYm9hcmRbY29vcmRpbmF0ZVswXV1bY29vcmRpbmF0ZVsxXV0gIT09ICdPJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHJlbGV2YW50QWRqYWNlbnRDb29yZGluYXRlcztcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDZWxsRnJvbUF2YWlsYWJsZUNlbGxzKGNlbGxUb1JlbW92ZSkge1xyXG4gICAgICAgIHRoaXMuYXZhaWxhYmxlQ2VsbHMgPSB0aGlzLmF2YWlsYWJsZUNlbGxzLmZpbHRlcihcclxuICAgICAgICAgICAgKGF2YWlsYWJsZUNlbGwpID0+XHJcbiAgICAgICAgICAgICAgICAhKFxyXG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZUNlbGxbMF0gPT0gY2VsbFRvUmVtb3ZlWzBdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlQ2VsbFsxXSA9PSBjZWxsVG9SZW1vdmVbMV1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBHYW1lYm9hcmQsIE9yaWVudGF0aW9uIH07XHJcbiIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkLmpzJ1xyXG5cclxuY2xhc3MgUGxheWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiY2xhc3MgU2hpcCB7XHJcbiAgICBjb25zdHJ1Y3RvcihzaXplLCBoaXRDb3VudCA9IDAsIGlzU3Vua1N0YXR1cyA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgICB0aGlzLmhpdENvdW50ID0gaGl0Q291bnQ7XHJcbiAgICAgICAgdGhpcy5pc1N1bmtTdGF0dXMgPSBpc1N1bmtTdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgaGl0KCkge1xyXG4gICAgICAgIHRoaXMuaGl0Q291bnQrKztcclxuICAgICAgICB0aGlzLmlzU3Vua1N0YXR1cyA9IHRoaXMuaXNTdW5rKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU3VuaygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oaXRDb3VudCA9PSB0aGlzLnNpemU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoaXA7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9tb2R1bGVzL3BsYXllci5qcyc7XHJcbmltcG9ydCBTaGlwIGZyb20gJy4vbW9kdWxlcy9zaGlwLmpzJztcclxuLy8gaW1wb3J0IHsgT3JpZW50YXRpb24gfSBmcm9tICcuL21vZHVsZXMvZ2FtZWJvYXJkLmpzJztcclxuaW1wb3J0IGRpc3BsYXkgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXkuanMnO1xyXG5pbXBvcnQge1xyXG4gICAgY3VycmVudFBsYXllcixcclxuICAgIHNldEN1cnJlbnRQbGF5ZXIsXHJcbiAgICBzd2l0Y2hUdXJuLFxyXG59IGZyb20gJy4vbW9kdWxlcy9nYW1lU3RhdGUuanMnO1xyXG5cclxuY29uc3Qgc3RhcnRHYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWdhbWUtYnRuJyk7XHJcbmNvbnN0IGxlYXZlR2FtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWF2ZS1nYW1lLWJ0bicpO1xyXG5sZWF2ZUdhbWVCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5sZXQgcGxheWVyTGVmdCA9IGZhbHNlO1xyXG5jb25zdCByYW5kb21QbGFjZW1lbnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZG9taXNlLWJ0bicpO1xyXG5jb25zdCBhcnJhbmdlU2hpcHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyYW5nZS1zaGlwcy1idG4nKTtcclxuXHJcbi8vaW5pdGlhbGlzZSB0aGUgZ2FtZVxyXG5jb25zdCBpbml0aWFsaXNlZE9iamVjdHMgPSBpbml0aWFsaXNlR2FtZSgpO1xyXG5sZXQgcGxheWVyT25lR2FtZWJvYXJkID0gaW5pdGlhbGlzZWRPYmplY3RzLnBsYXllck9uZUdhbWVib2FyZDtcclxubGV0IHBsYXllclR3b0dhbWVib2FyZCA9IGluaXRpYWxpc2VkT2JqZWN0cy5wbGF5ZXJUd29HYW1lYm9hcmQ7XHJcblxyXG5zZXRDdXJyZW50UGxheWVyKCdwbGF5ZXItb25lJyk7XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXNlUGxheWVycygpIHtcclxuICAgIGNvbnN0IHBsYXllck9uZSA9IG5ldyBQbGF5ZXIoJ3BsYXllci1vbmUnKTtcclxuXHJcbiAgICBjb25zdCBwbGF5ZXJUd28gPSBuZXcgUGxheWVyKCdwbGF5ZXItdHdvJyk7XHJcblxyXG4gICAgc2V0Q3VycmVudFBsYXllcigncGxheWVyLW9uZScpO1xyXG5cclxuXHJcbiAgICByZXR1cm4geyBwbGF5ZXJPbmUsIHBsYXllclR3byB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXNlR2FtZWJvYXJkcyhwbGF5ZXJPbmUsIHBsYXllclR3bykge1xyXG4gICAgXHJcbiAgICAvKiBzZXR1cCBwbGF5ZXIgb25lIGdhbWVib2FyZCAqL1xyXG4gICAgY29uc3QgcGxheWVyT25lR2FtZWJvYXJkID0gcGxheWVyT25lLmdhbWVib2FyZDtcclxuICAgIFxyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDIpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDMpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDMpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDQpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDUpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG5cclxuICAgIC8qIHNldHVwIHBsYXllciB0d28gZ2FtZWJvYXJkICovXHJcbiAgICBjb25zdCBwbGF5ZXJUd29HYW1lYm9hcmQgPSBwbGF5ZXJUd28uZ2FtZWJvYXJkO1xyXG5cclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCgyKSwgcGxheWVyVHdvR2FtZWJvYXJkKTtcclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCgzKSwgcGxheWVyVHdvR2FtZWJvYXJkKTtcclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCgzKSwgcGxheWVyVHdvR2FtZWJvYXJkKTtcclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCg0KSwgcGxheWVyVHdvR2FtZWJvYXJkKTtcclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCg1KSwgcGxheWVyVHdvR2FtZWJvYXJkKTtcclxuXHJcbiAgICByZXR1cm4geyBwbGF5ZXJPbmVHYW1lYm9hcmQsIHBsYXllclR3b0dhbWVib2FyZCB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXNlR2FtZSgpIHtcclxuICAgIGNvbnN0IHsgcGxheWVyT25lLCBwbGF5ZXJUd28gfSA9IGluaXRpYWxpc2VQbGF5ZXJzKCk7XHJcbiAgICBjb25zdCB7IHBsYXllck9uZUdhbWVib2FyZCwgcGxheWVyVHdvR2FtZWJvYXJkIH0gPSBpbml0aWFsaXNlR2FtZWJvYXJkcyhwbGF5ZXJPbmUsIHBsYXllclR3byk7XHJcblxyXG4gICAgLyogZGlzcGxheSBwbGF5ZXIgb25lIGdhbWVib2FyZCAqL1xyXG4gICAgY29uc3QgcGxheWVyT25lU2hpcFBvc2l0aW9ucyA9IHBsYXllck9uZUdhbWVib2FyZC5nZXRTaGlwUG9zaXRpb25zKCk7XHJcbiAgICBcclxuICAgIGRpc3BsYXkuZGlzcGxheUdhbWVib2FyZCh1bmRlZmluZWQsICdwbGF5ZXItb25lJyk7XHJcbiAgICBkaXNwbGF5LmRpc3BsYXlTaGlwc09uR2FtZWJvYXJkKHBsYXllck9uZVNoaXBQb3NpdGlvbnMsICdwbGF5ZXItb25lJyk7XHJcbiAgICBcclxuICAgIC8qIGRpc3BsYXkgcGxheWVyIHR3byBnYW1lYm9hcmQgKi9cclxuICAgIGNvbnN0IHBsYXllclR3b1NoaXBQb3NpdGlvbnMgPSBwbGF5ZXJUd29HYW1lYm9hcmQuZ2V0U2hpcFBvc2l0aW9ucygpO1xyXG4gICAgXHJcbiAgICBkaXNwbGF5LmRpc3BsYXlHYW1lYm9hcmQodW5kZWZpbmVkLCAncGxheWVyLXR3bycpO1xyXG4gICAgZGlzcGxheS5kaXNwbGF5U2hpcHNPbkdhbWVib2FyZChwbGF5ZXJUd29TaGlwUG9zaXRpb25zLCAncGxheWVyLXR3bycpO1xyXG5cclxuICAgIGRpc3BsYXkudG9nZ2xlQ2VsbEJsb2NrZXJzKCk7XHJcbiAgICBcclxuICAgIHJldHVybiB7IHBsYXllck9uZSwgcGxheWVyVHdvLCBwbGF5ZXJPbmVHYW1lYm9hcmQsIHBsYXllclR3b0dhbWVib2FyZCB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZUluaXRpYWxpc2VHYW1lKCkge1xyXG4gICAgLy9pbml0aWFsaXNlIGJ1dHRvbnNcclxuICAgIHN0YXJ0R2FtZUJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgbGVhdmVHYW1lQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIHJhbmRvbVBsYWNlbWVudEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgYXJyYW5nZVNoaXBzQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gICAgcGxheWVyTGVmdCA9IHRydWU7XHJcblxyXG4gICAgZGlzcGxheS5kaXNhYmxlR3JpZEJsb2NrZXIoJ3BsYXllci1vbmUtZ2FtZWJvYXJkJyk7XHJcbiAgICBkaXNwbGF5LmRpc2FibGVHcmlkQmxvY2tlcigncGxheWVyLXR3by1nYW1lYm9hcmQnKTtcclxuICAgIGRpc3BsYXkuaGlkZVBsYXllckluc3RydWN0aW9ucygpO1xyXG4gICAgZGlzcGxheS5jbGVhckdhbWVib2FyZHMoKTtcclxuICAgIGRpc3BsYXkuY2xlYXJSZXN1bHRzKCk7XHJcblxyXG4gICAgcGxheWVyT25lR2FtZWJvYXJkLmNsZWFyR2FtZWJvYXJkKCk7XHJcblxyXG4gICAgcGxheWVyVHdvR2FtZWJvYXJkLmNsZWFyR2FtZWJvYXJkKCk7XHJcblxyXG4gICAgY29uc3QgcmVJbml0aWFsaXNlZE9iamVjdHMgPSBpbml0aWFsaXNlR2FtZSgpO1xyXG5cclxuICAgIHBsYXllck9uZUdhbWVib2FyZCA9IHJlSW5pdGlhbGlzZWRPYmplY3RzLnBsYXllck9uZUdhbWVib2FyZDtcclxuICAgIHBsYXllclR3b0dhbWVib2FyZCA9IHJlSW5pdGlhbGlzZWRPYmplY3RzLnBsYXllclR3b0dhbWVib2FyZDtcclxuXHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ09uQ2VsbENsaWNrZWQnLCBoYW5kbGVDZWxsQ2xpY2tlZCk7IC8vcmVjZWl2ZWQgZnJvbSBVSSBvbiBjbGlja1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2VsbENsaWNrZWQoZSkge1xyXG4gICAgY29uc3QgZ3JpZE93bmVyID0gZS5kZXRhaWwuZ3JpZE93bmVyO1xyXG4gICAgY29uc3QgaGl0Q29vcmRpbmF0ZXMgPSBlLmRldGFpbC5jb29yZGluYXRlcztcclxuICAgIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IGdyaWRPd25lciA9PT0gJ3BsYXllci1vbmUnID8gcGxheWVyT25lR2FtZWJvYXJkIDogcGxheWVyVHdvR2FtZWJvYXJkO1xyXG4gICAgY29uc3QgaXNTaGlwSGl0ID0gYXR0YWNrKHBsYXllckdhbWVib2FyZCwgZ3JpZE93bmVyLCBoaXRDb29yZGluYXRlcyk7XHJcblxyXG4gICAgaWYocGxheWVyR2FtZWJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKSB7XHJcbiAgICAgICAgY29uc3QgV2lubmVyID0gZ3JpZE93bmVyID09PSAncGxheWVyLW9uZScgPyAnUGxheWVyIFR3bycgOiAnUGxheWVyIE9uZSc7XHJcbiAgICAgICAgZGlzcGxheS5oYW5kbGVHYW1lT3ZlcihXaW5uZXIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZighaXNTaGlwSGl0KSB7XHJcbiAgICAgICAgZGlzcGxheS50b2dnbGVHcmlkQmxvY2tlcnMoKTtcclxuICAgICAgICBzd2l0Y2hUdXJuKCk7XHJcbiAgICAgICAgZGlzcGxheS5zaG93UGxheWVyVHVybigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQ29tcHV0ZXJzVHVybihpc1NoaXBIaXQsIGhpdENvb3JkaW5hdGVzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXR0YWNrKHBsYXllckdhbWVib2FyZCwgZ3JpZE93bmVyLCBjb29yZGluYXRlcykge1xyXG4gICAgY29uc3QgW3Jvd051bWJlciwgY29sTnVtYmVyXSA9IGNvb3JkaW5hdGVzO1xyXG4gICAgY29uc3QgeyBhZGphY2VudENlbGxzLCBpc1NoaXBIaXQgfSA9IHBsYXllckdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcclxuICAgIG1hcmtDZWxsc0luVUkocm93TnVtYmVyLCBjb2xOdW1iZXIsIGdyaWRPd25lciwgcGxheWVyR2FtZWJvYXJkLCBhZGphY2VudENlbGxzKTtcclxuICAgIHJldHVybiBpc1NoaXBIaXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcmtDZWxsc0luVUkocm93TnVtYmVyLCBjb2xOdW1iZXIsIGdyaWRPd25lciwgcGxheWVyR2FtZWJvYXJkLCBhZGphY2VudENlbGxzKSB7XHJcbiAgICBkaXNwbGF5Lm1hcmtDZWxsKFxyXG4gICAgICAgIFtyb3dOdW1iZXIsIGNvbE51bWJlcl0sXHJcbiAgICAgICAgZ3JpZE93bmVyLFxyXG4gICAgICAgIHBsYXllckdhbWVib2FyZC5nYW1lYm9hcmRbcm93TnVtYmVyXVtjb2xOdW1iZXJdXHJcbiAgICApO1xyXG4gICAgaWYgKGFkamFjZW50Q2VsbHMpIHtcclxuICAgICAgICBhZGphY2VudENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgW3Jvd051bWJlciwgY29sTnVtYmVyXSA9IGNlbGwuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgZGlzcGxheS5tYXJrQ2VsbChbcm93TnVtYmVyLCBjb2xOdW1iZXJdLCBncmlkT3duZXIsIHBsYXllckdhbWVib2FyZC5nYW1lYm9hcmRbcm93TnVtYmVyXVtjb2xOdW1iZXJdKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNDb21wdXRlcnNUdXJuKGlzU2hpcEhpdCwgaGl0Q29vcmRpbmF0ZXMpIHtcclxuICAgIGlmIChjdXJyZW50UGxheWVyID09ICdwbGF5ZXItdHdvJykge1xyXG4gICAgICAgIHBsYXlDb21wdXRlcnNUdXJuKGlzU2hpcEhpdCwgaGl0Q29vcmRpbmF0ZXMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwbGF5Q29tcHV0ZXJzVHVybihpc1NoaXBIaXQsIGhpdENvb3JkaW5hdGVzKSB7XHJcbiAgICBsZXQgcmFuZG9tQ29vcmRpbmF0ZSA9IFtdO1xyXG4gICAgaWYgKGlzU2hpcEhpdCkge1xyXG4gICAgICAgIHJhbmRvbUNvb3JkaW5hdGUgPVxyXG4gICAgICAgICAgICBwbGF5ZXJPbmVHYW1lYm9hcmQuZ2V0UmFuZG9tQWRqYWNlbnRDb29yZGluYXRlKGhpdENvb3JkaW5hdGVzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmFuZG9tQ29vcmRpbmF0ZSA9IHBsYXllck9uZUdhbWVib2FyZC5nZXRSYW5kb21Db29yZGluYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW9ja0V2ZW50ID0ge1xyXG4gICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICBjb29yZGluYXRlczogcmFuZG9tQ29vcmRpbmF0ZSxcclxuICAgICAgICAgICAgZ3JpZE93bmVyOiAncGxheWVyLW9uZScsXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZihwbGF5ZXJMZWZ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGFuZGxlQ2VsbENsaWNrZWQobW9ja0V2ZW50KTtcclxuICAgICAgICBkaXNwbGF5LmhpZ2hsaWdodEF0dGFja2VkQ2VsbChyYW5kb21Db29yZGluYXRlLCAncGxheWVyLW9uZScpO1xyXG4gICAgfSwgMjAwMCk7IC8vZGVsYXkgdG8gc2ltdWxhdGUgXCJ0aGlua2luZ1wiLlxyXG59XHJcblxyXG5mdW5jdGlvbiBwbGFjZVNoaXBBdFJhbmRvbUNvb3JkaW5hdGUoc2hpcCwgcGxheWVyR2FtZWJvYXJkKSB7XHJcbiAgICBsZXQgeyByYW5kb21Db29yZGluYXRlLCByYW5kb21PcmllbnRhdGlvbiB9ID0gcGxheWVyR2FtZWJvYXJkLmdldFJhbmRvbUNvb3JkaW5hdGVGb3JTaGlwKHNoaXAuc2l6ZSk7XHJcbiAgICBwbGF5ZXJHYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAsIHJhbmRvbUNvb3JkaW5hdGUsIHJhbmRvbU9yaWVudGF0aW9uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmVnaW5QbGF5KCkge1xyXG4gICAgZGlzcGxheS50b2dnbGVDZWxsQmxvY2tlcnMoKTtcclxuICAgIGRpc3BsYXkuZW5hYmxlR3JpZEJsb2NrZXIoJ3BsYXllci1vbmUtZ2FtZWJvYXJkJyk7XHJcbiAgICBkaXNwbGF5LmRpc2FibGVHcmlkQmxvY2tlcigncGxheWVyLXR3by1nYW1lYm9hcmQnKTtcclxuICAgIGRpc3BsYXkuc2hvd1BsYXllclR1cm4oJ3BsYXllci1vbmUnKTtcclxuICAgIFxyXG4gICAgc3RhcnRHYW1lQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIHJhbmRvbVBsYWNlbWVudEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBsZWF2ZUdhbWVCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIGFycmFuZ2VTaGlwc0J0bi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgcGxheWVyTGVmdCA9IGZhbHNlO1xyXG59XHJcblxyXG5zdGFydEdhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBiZWdpblBsYXkpO1xyXG5cclxubGVhdmVHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVJbml0aWFsaXNlR2FtZSk7XHJcblxyXG5yYW5kb21QbGFjZW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcnJhbmdlU2hpcHNBdFJhbmRvbSk7XHJcblxyXG5mdW5jdGlvbiBhcnJhbmdlU2hpcHNBdFJhbmRvbSgpIHtcclxuICAgIHBsYXllck9uZUdhbWVib2FyZC5jbGVhckdhbWVib2FyZCgpO1xyXG5cclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCgyKSwgcGxheWVyT25lR2FtZWJvYXJkKTtcclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCgzKSwgcGxheWVyT25lR2FtZWJvYXJkKTtcclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCgzKSwgcGxheWVyT25lR2FtZWJvYXJkKTtcclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCg0KSwgcGxheWVyT25lR2FtZWJvYXJkKTtcclxuICAgIHBsYWNlU2hpcEF0UmFuZG9tQ29vcmRpbmF0ZShuZXcgU2hpcCg1KSwgcGxheWVyT25lR2FtZWJvYXJkKTtcclxuXHJcbiAgICBjb25zdCBzaGlwUG9zaXRpb25zID0gcGxheWVyT25lR2FtZWJvYXJkLmdldFNoaXBQb3NpdGlvbnMoKTtcclxuXHJcbiAgICBkaXNwbGF5LnVwZGF0ZVNoaXBzT25HYW1lYm9hcmQoc2hpcFBvc2l0aW9ucywgJ3BsYXllci1vbmUnKTtcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9