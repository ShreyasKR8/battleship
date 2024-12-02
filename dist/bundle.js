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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,qFAAqF;;AAErF;IACI,+BAA+B;IAC/B,+DAAgE;IAChE,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,2CAA2C;IAC3C,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,YAAY;IACZ,oCAAoC;IACpC,kBAAkB;IAClB,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,kBAAkB;IAClB,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;;;IAGI,kBAAkB;IAClB,iBAAiB;AACrB;;;AAGA;IACI,aAAa;IACb,sCAAsC;IACtC,mCAAmC;AACvC;;AAEA;IACI,sBAAsB;IACtB,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,iBAAiB;IACjB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA,cAAc;AACd;IACI,oBAAoB;IACpB,YAAY;AAChB;;AAEA,cAAc;AACd;IACI,oBAAoB;AACxB;;AAEA,iCAAiC;AACjC;IACI,kBAAkB;AACtB","sourcesContent":["/* @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap'); */\r\n\r\n@font-face {\r\n    font-family: 'Android-Assassin';\r\n    src: url('../fonts/AndroidAssassin-WXXY.ttf') format('opentype');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: Verdana;\r\n}\r\n\r\nheader {\r\n    font-size: 22px;\r\n    width: fit-content;\r\n    margin: 30px auto 0;\r\n}\r\n\r\nheader h1 {\r\n    font-family: 'Android-Assassin', sans-serif;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.main-section {\r\n    display: flex;\r\n    /* flex-direction: ; */\r\n}\r\n\r\n.game-ctrl-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: fit-content;\r\n    height: 300px;\r\n    margin: auto 100px;\r\n}\r\n\r\n.game-ctrl-btn {\r\n    width: 150px;\r\n    margin: 10px auto;\r\n    height: 30px;\r\n    background-color: rgb(234, 234, 234);\r\n    border-radius: 2px;\r\n    border: 1px solid rgb(0, 0, 0);\r\n    font-size: 16px;\r\n}\r\n\r\n.game-ctrl-btn:not(:disabled):hover {\r\n    background-color: rgb(60, 60, 60);\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n.gameboards {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 50px;\r\n    width: fit-content;\r\n    margin: 50px 50px 30px;\r\n    /* border: 1px solid red; */\r\n}\r\n\r\n.player-one-instruction, \r\n.player-two-instruction,\r\n.player-two-instruction-not-needed {\r\n    width: fit-content;\r\n    margin: 10px auto;\r\n}\r\n\r\n\r\n.player-grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n}\r\n\r\n.cell {\r\n    border: 1px solid #ccc;\r\n    border: 1px solid #7b7b7b;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-family: monospace;\r\n    font-size: 1.2rem;\r\n    width: 36px;\r\n    height: 36px;\r\n}\r\n\r\n.cell:hover {\r\n    background-color: #ccc;\r\n}\r\n\r\n.results {\r\n    width: fit-content;\r\n    margin: 0 auto;\r\n}\r\n\r\ndialog {\r\n    border: none;\r\n    border-radius: 8px;\r\n    margin: auto auto;\r\n    width: 600px;\r\n    height: 700px;\r\n}\r\n\r\ndialog header {\r\n    text-align: center;\r\n    width: 500px;\r\n}\r\n\r\n.game-instructions-dialog > ul {\r\n    margin: 50px 60px;\r\n    list-style: decimal;\r\n}\r\n\r\n.instructions-list > li {\r\n    margin: 30px 0;\r\n    text-align: justify;\r\n}\r\n\r\n.gameplay-rules li {\r\n    margin: 20px 0 0 20px;\r\n    text-align: justify;\r\n}\r\n\r\n.dialog-footer {\r\n    width: fit-content;\r\n    margin: 10px auto;\r\n}\r\n\r\n.close-dialog-btn {\r\n    width: 100px;\r\n}\r\n\r\n/* for grids */\r\n.grid-blocker {\r\n    pointer-events: none;\r\n    opacity: 0.3;\r\n}\r\n\r\n/* for cells */\r\n.blocker {\r\n    pointer-events: none;\r\n}\r\n\r\n/* for player turn instructions */\r\n.hidden {\r\n    visibility: hidden;\r\n}"],"sourceRoot":""}]);
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

const gameCtrlButtonSection = document.querySelector('.game-ctrl-section');
const showInstructionsBtn = document.querySelector('.instructions-btn');
const instructionsDialog = document.querySelector('.game-instructions-dialog');
const hideInstructionsBtn = document.querySelector('.close-dialog-btn');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVTdGF0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0FuZHJvaWRBc3Nhc3Npbi1XWFhZLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmViYXMrTmV1ZSZkaXNwbGF5PXN3YXAnKTsgKi9cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbmRyb2lkLUFzc2Fzc2luJztcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgnb3BlbnR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbioge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0byAwO1xyXG59XHJcblxyXG5oZWFkZXIgaDEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbmRyb2lkLUFzc2Fzc2luJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5tYWluLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qIGZsZXgtZGlyZWN0aW9uOiA7ICovXHJcbn1cclxuXHJcbi5nYW1lLWN0cmwtc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG8gMTAwcHg7XHJcbn1cclxuXHJcbi5nYW1lLWN0cmwtYnRuIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNCwgMjM0LCAyMzQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDAsIDApO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uZ2FtZS1jdHJsLWJ0bjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjAsIDYwLCA2MCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5nYW1lYm9hcmRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZ2FwOiA1MHB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiA1MHB4IDUwcHggMzBweDtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cclxufVxyXG5cclxuLnBsYXllci1vbmUtaW5zdHJ1Y3Rpb24sIFxyXG4ucGxheWVyLXR3by1pbnN0cnVjdGlvbixcclxuLnBsYXllci10d28taW5zdHJ1Y3Rpb24tbm90LW5lZWRlZCB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxufVxyXG5cclxuXHJcbi5wbGF5ZXItZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcclxufVxyXG5cclxuLmNlbGwge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3YjdiN2I7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbn1cclxuXHJcbi5jZWxsOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcbi5yZXN1bHRzIHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5kaWFsb2cge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG59XHJcblxyXG5kaWFsb2cgaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLmdhbWUtaW5zdHJ1Y3Rpb25zLWRpYWxvZyA+IHVsIHtcclxuICAgIG1hcmdpbjogNTBweCA2MHB4O1xyXG4gICAgbGlzdC1zdHlsZTogZGVjaW1hbDtcclxufVxyXG5cclxuLmluc3RydWN0aW9ucy1saXN0ID4gbGkge1xyXG4gICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4uZ2FtZXBsYXktcnVsZXMgbGkge1xyXG4gICAgbWFyZ2luOiAyMHB4IDAgMCAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLmRpYWxvZy1mb290ZXIge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbn1cclxuXHJcbi5jbG9zZS1kaWFsb2ctYnRuIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLyogZm9yIGdyaWRzICovXHJcbi5ncmlkLWJsb2NrZXIge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi8qIGZvciBjZWxscyAqL1xyXG4uYmxvY2tlciB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLyogZm9yIHBsYXllciB0dXJuIGluc3RydWN0aW9ucyAqL1xyXG4uaGlkZGVuIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxRkFBcUY7O0FBRXJGO0lBQ0ksK0JBQStCO0lBQy9CLCtEQUFnRTtJQUNoRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFQTs7O0lBR0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBLGNBQWM7QUFDZDtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOztBQUVBLGNBQWM7QUFDZDtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQSxpQ0FBaUM7QUFDakM7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmViYXMrTmV1ZSZkaXNwbGF5PXN3YXAnKTsgKi9cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdBbmRyb2lkLUFzc2Fzc2luJztcXHJcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL0FuZHJvaWRBc3Nhc3Npbi1XWFhZLnR0ZicpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBtYXJnaW46IDMwcHggYXV0byAwO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDEge1xcclxcbiAgICBmb250LWZhbWlseTogJ0FuZHJvaWQtQXNzYXNzaW4nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLyogZmxleC1kaXJlY3Rpb246IDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtY3RybC1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG8gMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWN0cmwtYnRuIHtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM0LCAyMzQsIDIzNCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDAsIDApO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWN0cmwtYnRuOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYwLCA2MCwgNjApO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBnYXA6IDUwcHg7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgbWFyZ2luOiA1MHB4IDUwcHggMzBweDtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyLW9uZS1pbnN0cnVjdGlvbiwgXFxyXFxuLnBsYXllci10d28taW5zdHJ1Y3Rpb24sXFxyXFxuLnBsYXllci10d28taW5zdHJ1Y3Rpb24tbm90LW5lZWRlZCB7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wbGF5ZXItZ3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjN2I3YjdiO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIHdpZHRoOiAzNnB4O1xcclxcbiAgICBoZWlnaHQ6IDM2cHg7XFxyXFxufVxcclxcblxcclxcbi5jZWxsOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3VsdHMge1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvIGF1dG87XFxyXFxuICAgIHdpZHRoOiA2MDBweDtcXHJcXG4gICAgaGVpZ2h0OiA3MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nIGhlYWRlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1pbnN0cnVjdGlvbnMtZGlhbG9nID4gdWwge1xcclxcbiAgICBtYXJnaW46IDUwcHggNjBweDtcXHJcXG4gICAgbGlzdC1zdHlsZTogZGVjaW1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLmluc3RydWN0aW9ucy1saXN0ID4gbGkge1xcclxcbiAgICBtYXJnaW46IDMwcHggMDtcXHJcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVwbGF5LXJ1bGVzIGxpIHtcXHJcXG4gICAgbWFyZ2luOiAyMHB4IDAgMCAyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbn1cXHJcXG5cXHJcXG4uZGlhbG9nLWZvb3RlciB7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1kaWFsb2ctYnRuIHtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmb3IgZ3JpZHMgKi9cXHJcXG4uZ3JpZC1ibG9ja2VyIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgIG9wYWNpdHk6IDAuMztcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9yIGNlbGxzICovXFxyXFxuLmJsb2NrZXIge1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9yIHBsYXllciB0dXJuIGluc3RydWN0aW9ucyAqL1xcclxcbi5oaWRkZW4ge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vbW9kdWxlcy9wbGF5ZXIuanMnO1xyXG5pbXBvcnQgU2hpcCBmcm9tICcuL21vZHVsZXMvc2hpcC5qcyc7XHJcbi8vIGltcG9ydCB7IE9yaWVudGF0aW9uIH0gZnJvbSAnLi9tb2R1bGVzL2dhbWVib2FyZC5qcyc7XHJcbmltcG9ydCBkaXNwbGF5IGZyb20gJy4vbW9kdWxlcy9kaXNwbGF5LmpzJztcclxuaW1wb3J0IHtcclxuICAgIGN1cnJlbnRQbGF5ZXIsXHJcbiAgICBzZXRDdXJyZW50UGxheWVyLFxyXG4gICAgc3dpdGNoVHVybixcclxufSBmcm9tICcuL21vZHVsZXMvZ2FtZVN0YXRlLmpzJztcclxuXHJcbmNvbnN0IHN0YXJ0R2FtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1nYW1lLWJ0bicpO1xyXG5jb25zdCBsZWF2ZUdhbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVhdmUtZ2FtZS1idG4nKTtcclxubGVhdmVHYW1lQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxubGV0IHBsYXllckxlZnQgPSBmYWxzZTtcclxuY29uc3QgcmFuZG9tUGxhY2VtZW50QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmRvbWlzZS1idG4nKTtcclxuY29uc3QgYXJyYW5nZVNoaXBzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycmFuZ2Utc2hpcHMtYnRuJyk7XHJcblxyXG4vL2luaXRpYWxpc2UgdGhlIGdhbWVcclxuY29uc3QgaW5pdGlhbGlzZWRPYmplY3RzID0gaW5pdGlhbGlzZUdhbWUoKTtcclxuZXhwb3J0IGxldCBwbGF5ZXJPbmVHYW1lYm9hcmQgPSBpbml0aWFsaXNlZE9iamVjdHMucGxheWVyT25lR2FtZWJvYXJkO1xyXG5sZXQgcGxheWVyVHdvR2FtZWJvYXJkID0gaW5pdGlhbGlzZWRPYmplY3RzLnBsYXllclR3b0dhbWVib2FyZDtcclxuXHJcbnNldEN1cnJlbnRQbGF5ZXIoJ3BsYXllci1vbmUnKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpc2VQbGF5ZXJzKCkge1xyXG4gICAgY29uc3QgcGxheWVyT25lID0gbmV3IFBsYXllcigncGxheWVyLW9uZScpO1xyXG5cclxuICAgIGNvbnN0IHBsYXllclR3byA9IG5ldyBQbGF5ZXIoJ3BsYXllci10d28nKTtcclxuXHJcbiAgICBzZXRDdXJyZW50UGxheWVyKCdwbGF5ZXItb25lJyk7XHJcblxyXG5cclxuICAgIHJldHVybiB7IHBsYXllck9uZSwgcGxheWVyVHdvIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpc2VHYW1lYm9hcmRzKHBsYXllck9uZSwgcGxheWVyVHdvKSB7XHJcbiAgICBcclxuICAgIC8qIHNldHVwIHBsYXllciBvbmUgZ2FtZWJvYXJkICovXHJcbiAgICBjb25zdCBwbGF5ZXJPbmVHYW1lYm9hcmQgPSBwbGF5ZXJPbmUuZ2FtZWJvYXJkO1xyXG4gICAgXHJcbiAgICBwbGFjZVNoaXBBdFJhbmRvbUNvb3JkaW5hdGUobmV3IFNoaXAoMiksIHBsYXllck9uZUdhbWVib2FyZCk7XHJcbiAgICBwbGFjZVNoaXBBdFJhbmRvbUNvb3JkaW5hdGUobmV3IFNoaXAoMyksIHBsYXllck9uZUdhbWVib2FyZCk7XHJcbiAgICBwbGFjZVNoaXBBdFJhbmRvbUNvb3JkaW5hdGUobmV3IFNoaXAoMyksIHBsYXllck9uZUdhbWVib2FyZCk7XHJcbiAgICBwbGFjZVNoaXBBdFJhbmRvbUNvb3JkaW5hdGUobmV3IFNoaXAoNCksIHBsYXllck9uZUdhbWVib2FyZCk7XHJcbiAgICBwbGFjZVNoaXBBdFJhbmRvbUNvb3JkaW5hdGUobmV3IFNoaXAoNSksIHBsYXllck9uZUdhbWVib2FyZCk7XHJcblxyXG4gICAgLyogc2V0dXAgcGxheWVyIHR3byBnYW1lYm9hcmQgKi9cclxuICAgIGNvbnN0IHBsYXllclR3b0dhbWVib2FyZCA9IHBsYXllclR3by5nYW1lYm9hcmQ7XHJcblxyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDIpLCBwbGF5ZXJUd29HYW1lYm9hcmQpO1xyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDMpLCBwbGF5ZXJUd29HYW1lYm9hcmQpO1xyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDMpLCBwbGF5ZXJUd29HYW1lYm9hcmQpO1xyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDQpLCBwbGF5ZXJUd29HYW1lYm9hcmQpO1xyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDUpLCBwbGF5ZXJUd29HYW1lYm9hcmQpO1xyXG5cclxuICAgIHJldHVybiB7IHBsYXllck9uZUdhbWVib2FyZCwgcGxheWVyVHdvR2FtZWJvYXJkIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpc2VHYW1lKCkge1xyXG4gICAgY29uc3QgeyBwbGF5ZXJPbmUsIHBsYXllclR3byB9ID0gaW5pdGlhbGlzZVBsYXllcnMoKTtcclxuICAgIGNvbnN0IHsgcGxheWVyT25lR2FtZWJvYXJkLCBwbGF5ZXJUd29HYW1lYm9hcmQgfSA9IGluaXRpYWxpc2VHYW1lYm9hcmRzKHBsYXllck9uZSwgcGxheWVyVHdvKTtcclxuXHJcbiAgICAvKiBkaXNwbGF5IHBsYXllciBvbmUgZ2FtZWJvYXJkICovXHJcbiAgICBjb25zdCBwbGF5ZXJPbmVTaGlwUG9zaXRpb25zID0gcGxheWVyT25lR2FtZWJvYXJkLmdldFNoaXBQb3NpdGlvbnMoKTtcclxuICAgIFxyXG4gICAgZGlzcGxheS5kaXNwbGF5R2FtZWJvYXJkKHVuZGVmaW5lZCwgJ3BsYXllci1vbmUnKTtcclxuICAgIGRpc3BsYXkuZGlzcGxheVNoaXBzT25HYW1lYm9hcmQocGxheWVyT25lU2hpcFBvc2l0aW9ucywgJ3BsYXllci1vbmUnKTtcclxuICAgIFxyXG4gICAgLyogZGlzcGxheSBwbGF5ZXIgdHdvIGdhbWVib2FyZCAqL1xyXG4gICAgY29uc3QgcGxheWVyVHdvU2hpcFBvc2l0aW9ucyA9IHBsYXllclR3b0dhbWVib2FyZC5nZXRTaGlwUG9zaXRpb25zKCk7XHJcbiAgICBcclxuICAgIGRpc3BsYXkuZGlzcGxheUdhbWVib2FyZCh1bmRlZmluZWQsICdwbGF5ZXItdHdvJyk7XHJcbiAgICBkaXNwbGF5LmRpc3BsYXlTaGlwc09uR2FtZWJvYXJkKHBsYXllclR3b1NoaXBQb3NpdGlvbnMsICdwbGF5ZXItdHdvJyk7XHJcblxyXG4gICAgZGlzcGxheS50b2dnbGVDZWxsQmxvY2tlcnMoKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHsgcGxheWVyT25lLCBwbGF5ZXJUd28sIHBsYXllck9uZUdhbWVib2FyZCwgcGxheWVyVHdvR2FtZWJvYXJkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZUluaXRpYWxpc2VHYW1lKCkge1xyXG4gICAgLy9pbml0aWFsaXNlIGJ1dHRvbnNcclxuICAgIHN0YXJ0R2FtZUJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgbGVhdmVHYW1lQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIHJhbmRvbVBsYWNlbWVudEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgYXJyYW5nZVNoaXBzQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gICAgcGxheWVyTGVmdCA9IHRydWU7XHJcblxyXG4gICAgZGlzcGxheS5kaXNhYmxlR3JpZEJsb2NrZXIoJ3BsYXllci1vbmUtZ2FtZWJvYXJkJyk7XHJcbiAgICBkaXNwbGF5LmRpc2FibGVHcmlkQmxvY2tlcigncGxheWVyLXR3by1nYW1lYm9hcmQnKTtcclxuICAgIGRpc3BsYXkuaGlkZVBsYXllckluc3RydWN0aW9ucygpO1xyXG4gICAgZGlzcGxheS5jbGVhckFsbEdhbWVib2FyZHMoKTtcclxuICAgIGRpc3BsYXkuY2xlYXJSZXN1bHRzKCk7XHJcblxyXG4gICAgcGxheWVyT25lR2FtZWJvYXJkLmNsZWFyR2FtZWJvYXJkKCk7XHJcblxyXG4gICAgcGxheWVyVHdvR2FtZWJvYXJkLmNsZWFyR2FtZWJvYXJkKCk7XHJcblxyXG4gICAgY29uc3QgcmVJbml0aWFsaXNlZE9iamVjdHMgPSBpbml0aWFsaXNlR2FtZSgpO1xyXG5cclxuICAgIHBsYXllck9uZUdhbWVib2FyZCA9IHJlSW5pdGlhbGlzZWRPYmplY3RzLnBsYXllck9uZUdhbWVib2FyZDtcclxuICAgIHBsYXllclR3b0dhbWVib2FyZCA9IHJlSW5pdGlhbGlzZWRPYmplY3RzLnBsYXllclR3b0dhbWVib2FyZDtcclxuXHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ09uQ2VsbENsaWNrZWQnLCBoYW5kbGVDZWxsQ2xpY2tlZCk7IC8vcmVjZWl2ZWQgZnJvbSBVSSBvbiBjbGlja1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2VsbENsaWNrZWQoZSkge1xyXG4gICAgY29uc3QgZ3JpZE93bmVyID0gZS5kZXRhaWwuZ3JpZE93bmVyO1xyXG4gICAgY29uc3QgaGl0Q29vcmRpbmF0ZXMgPSBlLmRldGFpbC5jb29yZGluYXRlcztcclxuICAgIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IGdyaWRPd25lciA9PT0gJ3BsYXllci1vbmUnID8gcGxheWVyT25lR2FtZWJvYXJkIDogcGxheWVyVHdvR2FtZWJvYXJkO1xyXG4gICAgY29uc3QgaXNTaGlwSGl0ID0gYXR0YWNrKHBsYXllckdhbWVib2FyZCwgZ3JpZE93bmVyLCBoaXRDb29yZGluYXRlcyk7XHJcblxyXG4gICAgaWYocGxheWVyR2FtZWJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKSB7XHJcbiAgICAgICAgY29uc3QgV2lubmVyID0gZ3JpZE93bmVyID09PSAncGxheWVyLW9uZScgPyAnUGxheWVyIFR3bycgOiAnUGxheWVyIE9uZSc7XHJcbiAgICAgICAgZGlzcGxheS5oYW5kbGVHYW1lT3ZlcihXaW5uZXIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZighaXNTaGlwSGl0KSB7XHJcbiAgICAgICAgZGlzcGxheS50b2dnbGVHcmlkQmxvY2tlcnMoKTtcclxuICAgICAgICBzd2l0Y2hUdXJuKCk7XHJcbiAgICAgICAgZGlzcGxheS5zaG93UGxheWVyVHVybigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQ29tcHV0ZXJzVHVybihpc1NoaXBIaXQsIGhpdENvb3JkaW5hdGVzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXR0YWNrKHBsYXllckdhbWVib2FyZCwgZ3JpZE93bmVyLCBjb29yZGluYXRlcykge1xyXG4gICAgY29uc3QgW3Jvd051bWJlciwgY29sTnVtYmVyXSA9IGNvb3JkaW5hdGVzO1xyXG4gICAgY29uc3QgeyBhZGphY2VudENlbGxzLCBpc1NoaXBIaXQgfSA9IHBsYXllckdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcclxuICAgIG1hcmtDZWxsc0luVUkocm93TnVtYmVyLCBjb2xOdW1iZXIsIGdyaWRPd25lciwgcGxheWVyR2FtZWJvYXJkLCBhZGphY2VudENlbGxzKTtcclxuICAgIHJldHVybiBpc1NoaXBIaXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcmtDZWxsc0luVUkocm93TnVtYmVyLCBjb2xOdW1iZXIsIGdyaWRPd25lciwgcGxheWVyR2FtZWJvYXJkLCBhZGphY2VudENlbGxzKSB7XHJcbiAgICBkaXNwbGF5Lm1hcmtDZWxsKFxyXG4gICAgICAgIFtyb3dOdW1iZXIsIGNvbE51bWJlcl0sXHJcbiAgICAgICAgZ3JpZE93bmVyLFxyXG4gICAgICAgIHBsYXllckdhbWVib2FyZC5nYW1lYm9hcmRbcm93TnVtYmVyXVtjb2xOdW1iZXJdXHJcbiAgICApO1xyXG4gICAgaWYgKGFkamFjZW50Q2VsbHMpIHtcclxuICAgICAgICBhZGphY2VudENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgW3Jvd051bWJlciwgY29sTnVtYmVyXSA9IGNlbGwuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgZGlzcGxheS5tYXJrQ2VsbChbcm93TnVtYmVyLCBjb2xOdW1iZXJdLCBncmlkT3duZXIsIHBsYXllckdhbWVib2FyZC5nYW1lYm9hcmRbcm93TnVtYmVyXVtjb2xOdW1iZXJdKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNDb21wdXRlcnNUdXJuKGlzU2hpcEhpdCwgaGl0Q29vcmRpbmF0ZXMpIHtcclxuICAgIGlmIChjdXJyZW50UGxheWVyID09ICdwbGF5ZXItdHdvJykge1xyXG4gICAgICAgIHBsYXlDb21wdXRlcnNUdXJuKGlzU2hpcEhpdCwgaGl0Q29vcmRpbmF0ZXMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwbGF5Q29tcHV0ZXJzVHVybihpc1NoaXBIaXQsIGhpdENvb3JkaW5hdGVzKSB7XHJcbiAgICBsZXQgcmFuZG9tQ29vcmRpbmF0ZSA9IFtdO1xyXG4gICAgaWYgKGlzU2hpcEhpdCkge1xyXG4gICAgICAgIHJhbmRvbUNvb3JkaW5hdGUgPVxyXG4gICAgICAgICAgICBwbGF5ZXJPbmVHYW1lYm9hcmQuZ2V0UmFuZG9tQWRqYWNlbnRDb29yZGluYXRlKGhpdENvb3JkaW5hdGVzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmFuZG9tQ29vcmRpbmF0ZSA9IHBsYXllck9uZUdhbWVib2FyZC5nZXRSYW5kb21Db29yZGluYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW9ja0V2ZW50ID0ge1xyXG4gICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICBjb29yZGluYXRlczogcmFuZG9tQ29vcmRpbmF0ZSxcclxuICAgICAgICAgICAgZ3JpZE93bmVyOiAncGxheWVyLW9uZScsXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZihwbGF5ZXJMZWZ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGFuZGxlQ2VsbENsaWNrZWQobW9ja0V2ZW50KTtcclxuICAgICAgICBkaXNwbGF5LmhpZ2hsaWdodEF0dGFja2VkQ2VsbChyYW5kb21Db29yZGluYXRlLCAncGxheWVyLW9uZScpO1xyXG4gICAgfSwgMjAwMCk7IC8vZGVsYXkgdG8gc2ltdWxhdGUgXCJ0aGlua2luZ1wiLlxyXG59XHJcblxyXG5mdW5jdGlvbiBwbGFjZVNoaXBBdFJhbmRvbUNvb3JkaW5hdGUoc2hpcCwgcGxheWVyR2FtZWJvYXJkKSB7XHJcbiAgICBsZXQgeyByYW5kb21Db29yZGluYXRlLCByYW5kb21PcmllbnRhdGlvbiB9ID0gcGxheWVyR2FtZWJvYXJkLmdldFJhbmRvbUNvb3JkaW5hdGVGb3JTaGlwKHNoaXAuc2l6ZSk7XHJcbiAgICBwbGF5ZXJHYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAsIHJhbmRvbUNvb3JkaW5hdGUsIHJhbmRvbU9yaWVudGF0aW9uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmVnaW5QbGF5KCkge1xyXG4gICAgZGlzcGxheS50b2dnbGVDZWxsQmxvY2tlcnMoKTtcclxuICAgIGRpc3BsYXkuZW5hYmxlR3JpZEJsb2NrZXIoJ3BsYXllci1vbmUtZ2FtZWJvYXJkJyk7XHJcbiAgICBkaXNwbGF5LmRpc2FibGVHcmlkQmxvY2tlcigncGxheWVyLXR3by1nYW1lYm9hcmQnKTtcclxuICAgIGRpc3BsYXkuc2hvd1BsYXllclR1cm4oJ3BsYXllci1vbmUnKTtcclxuICAgIFxyXG4gICAgc3RhcnRHYW1lQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIHJhbmRvbVBsYWNlbWVudEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBsZWF2ZUdhbWVCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIGFycmFuZ2VTaGlwc0J0bi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgcGxheWVyTGVmdCA9IGZhbHNlO1xyXG59XHJcblxyXG5zdGFydEdhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBiZWdpblBsYXkpO1xyXG5cclxubGVhdmVHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVJbml0aWFsaXNlR2FtZSk7XHJcblxyXG5yYW5kb21QbGFjZW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcnJhbmdlU2hpcHNBdFJhbmRvbSk7XHJcblxyXG5hcnJhbmdlU2hpcHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkaXNwbGF5LmluaXRpYWxpc2VQbGFjaW5nU2hpcHMocGxheWVyT25lR2FtZWJvYXJkLCAncGxheWVyLW9uZScpO1xyXG5cclxuICAgIHN0YXJ0R2FtZUJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICByYW5kb21QbGFjZW1lbnRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgbGVhdmVHYW1lQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGFycmFuZ2VTaGlwc0J0bi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGFycmFuZ2VTaGlwc0F0UmFuZG9tKCkge1xyXG4gICAgcGxheWVyT25lR2FtZWJvYXJkLmNsZWFyR2FtZWJvYXJkKCk7XHJcblxyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDIpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDMpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDMpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDQpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG4gICAgcGxhY2VTaGlwQXRSYW5kb21Db29yZGluYXRlKG5ldyBTaGlwKDUpLCBwbGF5ZXJPbmVHYW1lYm9hcmQpO1xyXG5cclxuICAgIGNvbnN0IHNoaXBQb3NpdGlvbnMgPSBwbGF5ZXJPbmVHYW1lYm9hcmQuZ2V0U2hpcFBvc2l0aW9ucygpO1xyXG5cclxuICAgIGRpc3BsYXkudXBkYXRlU2hpcHNPbkdhbWVib2FyZChzaGlwUG9zaXRpb25zLCAncGxheWVyLW9uZScpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ3RybEJ0bnNTdGF0ZSgpIHtcclxuICAgIHN0YXJ0R2FtZUJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgcmFuZG9tUGxhY2VtZW50QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBsZWF2ZUdhbWVCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgYXJyYW5nZVNoaXBzQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbn0iLCJpbXBvcnQgeyByZUluaXRpYWxpc2VHYW1lLCBjaGFuZ2VDdHJsQnRuc1N0YXRlLCBwbGF5ZXJPbmVHYW1lYm9hcmQgfSBmcm9tICcuLi9pbmRleC5qcydcclxuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcclxuXHJcbmNvbnN0IHBsYXllclR3b0luc3RydWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wbGF5ZXItdHdvLWluc3RydWN0aW9uYCk7XHJcbmNvbnN0IHBsYXllck9uZUluc3RydWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wbGF5ZXItb25lLWluc3RydWN0aW9uYCk7XHJcblxyXG5jb25zdCBwbGF5ZXJPbmVHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllci1vbmUtZ2FtZWJvYXJkYCk7XHJcbmNvbnN0IHBsYXllclR3b0dyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyLXR3by1nYW1lYm9hcmRgKTtcclxuXHJcbmNvbnN0IGdhbWVDdHJsQnV0dG9uU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWN0cmwtc2VjdGlvbicpO1xyXG5jb25zdCBzaG93SW5zdHJ1Y3Rpb25zQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluc3RydWN0aW9ucy1idG4nKTtcclxuY29uc3QgaW5zdHJ1Y3Rpb25zRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtaW5zdHJ1Y3Rpb25zLWRpYWxvZycpO1xyXG5jb25zdCBoaWRlSW5zdHJ1Y3Rpb25zQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWRpYWxvZy1idG4nKTtcclxuXHJcbmNvbnN0IHBsYXllck9uZUdyaWRDZWxscyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDEwIH0sICgpID0+IEFycmF5KDEwKS5maWxsKG51bGwpKTtcclxubGV0IGxhc3RDaG9zZW5DZWxscyA9IFtdO1xyXG5cclxuY29uc3QgT3JpZW50YXRpb24gPSBPYmplY3QuZnJlZXplKHtcclxuICAgIEhPUklaT05UQUw6ICdob3Jpem9udGFsJyxcclxuICAgIFZFUlRJQ0FMOiAndmVydGljYWwnLFxyXG59KTtcclxuXHJcbmxldCBzZWxlY3RlZE9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xyXG5cclxubGV0IHNoaXBTaXplcyA9IFs1LCA0LCAzLCAzLCAyXTtcclxuXHJcblxyXG5zaG93SW5zdHJ1Y3Rpb25zQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaW5zdHJ1Y3Rpb25zRGlhbG9nLnNob3dNb2RhbCgpO1xyXG59KVxyXG5cclxuaGlkZUluc3RydWN0aW9uc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGluc3RydWN0aW9uc0RpYWxvZy5jbG9zZSgpO1xyXG59KVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUdhbWVib2FyZChzaXplID0gMTAsIGdyaWRPd25lcikge1xyXG4gICAgY3JlYXRlR3JpZChzaXplLCBncmlkT3duZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckFsbEdhbWVib2FyZHMoKSB7XHJcbiAgICB3aGlsZSAocGxheWVyT25lR3JpZC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgcGxheWVyT25lR3JpZC5yZW1vdmVDaGlsZChwbGF5ZXJPbmVHcmlkLmxhc3RDaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgd2hpbGUgKHBsYXllclR3b0dyaWQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIHBsYXllclR3b0dyaWQucmVtb3ZlQ2hpbGQocGxheWVyVHdvR3JpZC5sYXN0Q2hpbGQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckdhbWVib2FyZENvbnRlbnQoZ3JpZE93bmVyKSB7XHJcbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLW93bmVyPVwiJHtncmlkT3duZXJ9XCJdIC5jZWxsYCk7XHJcbiAgICBjZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSAnJztcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVHcmlkKHNpemUsIGdyaWRPd25lcikge1xyXG4gICAgbGV0IGdyaWQgPSBudWxsO1xyXG4gICAgaWYgKGdyaWRPd25lciA9PSAncGxheWVyLW9uZScpIHtcclxuICAgICAgICBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1vbmUtZ2FtZWJvYXJkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXR3by1nYW1lYm9hcmQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWdyaWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgc2l6ZTsgcm93KyspIHtcclxuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBzaXplOyBjb2wrKykge1xyXG4gICAgICAgICAgICBjb25zdCBncmlkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBncmlkQ2VsbC5jbGFzc0xpc3QuYWRkKGBjZWxsYCk7XHJcbiAgICAgICAgICAgIGdyaWRDZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS1yb3cnLCByb3cpO1xyXG4gICAgICAgICAgICBncmlkQ2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sJywgY29sKTtcclxuICAgICAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChncmlkQ2VsbCk7XHJcbiAgICAgICAgICAgIGdyaWQuc2V0QXR0cmlidXRlKCdkYXRhLW93bmVyJywgZ3JpZE93bmVyKTtcclxuICAgICAgICAgICAgaWYgKGdyaWRPd25lciA9PSAncGxheWVyLXR3bycpIHtcclxuICAgICAgICAgICAgICAgIGdyaWRDZWxsLnN0eWxlLmNvbnRlbnRWaXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgICAgICBzZXRVcEV2ZW50TGlzdGVuZXIoZ3JpZENlbGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVTaGlwc09uR2FtZWJvYXJkKHNoaXBQb3NpdGlvbnMsIGdyaWRPd25lcikge1xyXG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1vd25lcj1cIiR7Z3JpZE93bmVyfVwiXSAuY2VsbGApO1xyXG4gICAgY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcclxuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICB9KTtcclxuICAgIGRpc3BsYXlTaGlwc09uR2FtZWJvYXJkKHNoaXBQb3NpdGlvbnMsIGdyaWRPd25lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlTaGlwc09uR2FtZWJvYXJkKHNoaXBQb3NpdGlvbnMsIGdyaWRPd25lcikge1xyXG4gICAgc2hpcFBvc2l0aW9ucy5mb3JFYWNoKChwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBwb3NpdGlvbi5zcGxpdCgnLCcpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgIGBbZGF0YS1vd25lcj1cIiR7Z3JpZE93bmVyfVwiXSAuY2VsbFtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbD1cIiR7Y29sfVwiXWBcclxuICAgICAgICApLnRleHRDb250ZW50ID0gJ3MnO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUdyaWRCbG9ja2VycygpIHtcclxuICAgIHBsYXllck9uZUdyaWQuY2xhc3NMaXN0LnRvZ2dsZSgnZ3JpZC1ibG9ja2VyJyk7XHJcbiAgICBwbGF5ZXJUd29HcmlkLmNsYXNzTGlzdC50b2dnbGUoJ2dyaWQtYmxvY2tlcicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbmFibGVHcmlkQmxvY2tlcihncmlkKSB7XHJcbiAgICBjb25zdCBwbGF5ZXJHcmlkID0gZ3JpZCA9PT0gJ3BsYXllci1vbmUtZ2FtZWJvYXJkJyA/IHBsYXllck9uZUdyaWQgOiBwbGF5ZXJUd29HcmlkO1xyXG4gICAgcGxheWVyR3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkLWJsb2NrZXInKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzYWJsZUdyaWRCbG9ja2VyKGdyaWQpIHtcclxuICAgIGNvbnN0IHBsYXllckdyaWQgPSBncmlkID09PSAncGxheWVyLW9uZS1nYW1lYm9hcmQnID8gcGxheWVyT25lR3JpZCA6IHBsYXllclR3b0dyaWQ7XHJcbiAgICBwbGF5ZXJHcmlkLmNsYXNzTGlzdC5yZW1vdmUoJ2dyaWQtYmxvY2tlcicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVDZWxsQmxvY2tlcnMoKSB7XHJcbiAgICBjb25zdCBjZWxscyA9IHBsYXllclR3b0dyaWQuY2hpbGROb2RlcztcclxuICAgIGNlbGxzLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QudG9nZ2xlKCdibG9ja2VyJyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1BsYXllclR1cm4ocGxheWVyID0gJycpIHtcclxuICAgIGlmKHBsYXllciAhPT0gJycpIHtcclxuICAgICAgICBwbGF5ZXJPbmVJbnN0cnVjdGlvbnMuZm9yRWFjaChwbGF5ZXJPbmVJbnN0cnVjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIHBsYXllck9uZUluc3RydWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXJPbmVJbnN0cnVjdGlvbnMuZm9yRWFjaChwbGF5ZXJPbmVJbnN0cnVjdGlvbiA9PiB7XHJcbiAgICAgICAgcGxheWVyT25lSW5zdHJ1Y3Rpb24uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcGxheWVyVHdvSW5zdHJ1Y3Rpb25zLmZvckVhY2gocGxheWVyVHdvSW5zdHJ1Y3Rpb24gPT4ge1xyXG4gICAgICAgIHBsYXllclR3b0luc3RydWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVQbGF5ZXJJbnN0cnVjdGlvbnMoKSB7XHJcbiAgICBwbGF5ZXJPbmVJbnN0cnVjdGlvbnMuZm9yRWFjaChwbGF5ZXJPbmVJbnN0cnVjdGlvbiA9PiB7XHJcbiAgICAgICAgcGxheWVyT25lSW5zdHJ1Y3Rpb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwbGF5ZXJUd29JbnN0cnVjdGlvbnMuZm9yRWFjaChwbGF5ZXJUd29JbnN0cnVjdGlvbiA9PiB7XHJcbiAgICAgICAgcGxheWVyVHdvSW5zdHJ1Y3Rpb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFya0NlbGwoY29vcmRpbmF0ZXMsIGdyaWRPd25lciwgbWFya0NvbnRlbnQpIHtcclxuICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZGluYXRlcztcclxuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIGBbZGF0YS1vd25lcj1cIiR7Z3JpZE93bmVyfVwiXSAuY2VsbFtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbD1cIiR7Y29sfVwiXWBcclxuICAgICk7XHJcblxyXG4gICAgY2VsbC50ZXh0Q29udGVudCA9IG1hcmtDb250ZW50O1xyXG5cclxuICAgIGlmIChtYXJrQ29udGVudCA9PSAnWCcpIHtcclxuICAgICAgICBjZWxsLnN0eWxlLmNvbG9yID0gJ3JlZCc7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5mb250U2l6ZSA9ICczMnB4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5mb250U2l6ZSA9ICcxMnB4JztcclxuICAgIH1cclxuXHJcbiAgICBjZWxsLnN0eWxlLmNvbnRlbnRWaXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG5cclxuICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDZWxsQ2xpY2spO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRVcEV2ZW50TGlzdGVuZXIoY2VsbCkge1xyXG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNlbGxDbGljayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNlbGxDbGljayhlKSB7XHJcbiAgICBjb25zdCBjZWxsID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXHJcbiAgICAgICAgTnVtYmVyKGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXJvdycpKSxcclxuICAgICAgICBOdW1iZXIoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sJykpLFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGdyaWRPd25lciA9IGNlbGwucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3duZXInKTtcclxuICAgIGhpZ2hsaWdodEF0dGFja2VkQ2VsbChjb29yZGluYXRlcywgZ3JpZE93bmVyKTtcclxuICAgIHNlbmRFdmVudE9uQ2VsbENsaWNrZWQoY29vcmRpbmF0ZXMsIGdyaWRPd25lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRFdmVudE9uQ2VsbENsaWNrZWQoY29vcmRpbmF0ZXMsIGdyaWRPd25lcikge1xyXG4gICAgY29uc3QgZXZlbnRPbkNlbGxDbGlja2VkID0gbmV3IEN1c3RvbUV2ZW50KCdPbkNlbGxDbGlja2VkJywge1xyXG4gICAgICAgIGRldGFpbDogeyBjb29yZGluYXRlcywgZ3JpZE93bmVyIH0sXHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnRPbkNlbGxDbGlja2VkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlR2FtZU92ZXIod2lubmVyKSB7XHJcbiAgICBjb25zdCByZW1haW5pbmdDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XHJcbiAgICByZW1haW5pbmdDZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDZWxsQ2xpY2spO1xyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB3aW5uZXJSZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lci1yZXN1bHRzJyk7XHJcbiAgICB3aW5uZXJSZXN1bHRzLnRleHRDb250ZW50ID0gYCR7d2lubmVyfSBXb24hYDtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlnaGxpZ2h0QXR0YWNrZWRDZWxsKGhpdENvb3JkaW5hdGUsIGdyaWRPd25lcikge1xyXG4gICAgY29uc3QgW3JvdywgY29sXSA9IGhpdENvb3JkaW5hdGU7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIGBbZGF0YS1vd25lcj1cIiR7Z3JpZE93bmVyfVwiXSAuY2VsbFtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbD1cIiR7Y29sfVwiXWBcclxuICAgICkuc3R5bGUuYm9yZGVyID0gJzNweCBzb2xpZCBibHVlJztcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgIGBbZGF0YS1vd25lcj1cIiR7Z3JpZE93bmVyfVwiXSAuY2VsbFtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbD1cIiR7Y29sfVwiXWBcclxuICAgICAgICApLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgIzdiN2I3Yic7XHJcbiAgICB9LCAxNTAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJSZXN1bHRzKCkge1xyXG4gICAgY29uc3Qgd2lubmVyUmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXItcmVzdWx0cycpO1xyXG4gICAgd2lubmVyUmVzdWx0cy50ZXh0Q29udGVudCA9ICcnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXNlUGxhY2luZ1NoaXBzKHBsYXllckdhbWVib2FyZCwgZ3JpZE93bmVyKSB7XHJcbiAgICBsYXN0Q2hvc2VuQ2VsbHMgPSBbXTtcclxuICAgIHNoaXBTaXplcyA9IFs1LCA0LCAzLCAzLCAyXTtcclxuICAgIGNvbnN0IGdyaWRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLW93bmVyPVwiJHtncmlkT3duZXJ9XCJdIC5jZWxsYCk7XHJcbiAgICBncmlkQ2VsbHMuZm9yRWFjaChjZWxsID0+IHtcclxuICAgICAgICBjb25zdCByb3cgPSBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1yb3cnKSwgMTApO1xyXG4gICAgICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbCcpLCAxMCk7XHJcbiAgICAgICAgcGxheWVyT25lR3JpZENlbGxzW3Jvd11bY29sXSA9IGNlbGw7XHJcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNlbGxDbGljayk7XHJcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBsYWNlU2hpcCk7XHJcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBzaG93U2hpcFBsYWNlbWVudCk7XHJcbiAgICB9KTtcclxuICAgIHBsYXllckdhbWVib2FyZC5jbGVhckdhbWVib2FyZCgpO1xyXG4gICAgY2xlYXJHYW1lYm9hcmRDb250ZW50KCdwbGF5ZXItb25lJyk7XHJcblxyXG4gICAgLy9hZGQgY29uZmlybSBhbmQgY2FuY2VsIGJ1dHRvbnNcclxuICAgIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbmZpcm1CdG4uaW5uZXJIVE1MID0gJ0NvbmZpcm0nO1xyXG4gICAgY29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKCdnYW1lLWN0cmwtYnRuJyk7XHJcbiAgICBjb25maXJtQnRuLmNsYXNzTGlzdC5hZGQoJ2NvbmZpcm0tcGxhY2VtZW50LWJ0bicpO1xyXG4gICAgY29uZmlybUJ0bi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ0NvbmZpcm0gc2hpcCBwb3NpdGlvbnMnKTtcclxuICAgIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb25maXJtU2hpcHNQbGFjZW1lbnQpO1xyXG4gICAgY29uZmlybUJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBcclxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY2FuY2VsQnRuLmlubmVySFRNTCA9ICdDYW5jZWwnO1xyXG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2dhbWUtY3RybC1idG4nKTtcclxuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtcGxhY2VtZW50LWJ0bicpO1xyXG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnQ2FuY2VsIHBsYWNpbmcgc2hpcHMnKTtcclxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbFNoaXBzUGxhY2VtZW50KTtcclxuXHJcbiAgICBjb25zdCBwbGFjZW1lbnRCdG5zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwbGFjZW1lbnRCdG5zRGl2LmNsYXNzTGlzdC5hZGQoJ3BsYWNlbWVudC1jdHJsLWJ0bnMnKTtcclxuXHJcbiAgICBwbGFjZW1lbnRCdG5zRGl2LmFwcGVuZENoaWxkKGNvbmZpcm1CdG4pO1xyXG4gICAgcGxhY2VtZW50QnRuc0Rpdi5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xyXG5cclxuICAgIGdhbWVDdHJsQnV0dG9uU2VjdGlvbi5hcHBlbmRDaGlsZChwbGFjZW1lbnRCdG5zRGl2KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5UHJlc3MpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhlKSB7XHJcbiAgICBpZiAoZS5rZXkgPT09ICdxJykge1xyXG4gICAgICAgIHN3aXRjaFNoaXBPcmllbnRhdGlvbigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzd2l0Y2hTaGlwT3JpZW50YXRpb24oKSB7XHJcbiAgICBzZWxlY3RlZE9yaWVudGF0aW9uID1cclxuICAgICAgICBzZWxlY3RlZE9yaWVudGF0aW9uID09PSBPcmllbnRhdGlvbi5IT1JJWk9OVEFMXHJcbiAgICAgICAgICAgID8gT3JpZW50YXRpb24uVkVSVElDQUxcclxuICAgICAgICAgICAgOiBPcmllbnRhdGlvbi5IT1JJWk9OVEFMO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb25maXJtU2hpcHNQbGFjZW1lbnQoZSkge1xyXG4gICAgY29uc3QgY29uZmlybUJ0biA9IGUuY3VycmVudFRhcmdldDtcclxuICAgIGdhbWVDdHJsQnV0dG9uU2VjdGlvbi5yZW1vdmVDaGlsZChjb25maXJtQnRuLnBhcmVudEVsZW1lbnQpO1xyXG4gICAgY2hhbmdlQ3RybEJ0bnNTdGF0ZSgpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleVByZXNzKTtcclxuXHJcbiAgICBjb25zdCBncmlkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1vd25lcj1cInBsYXllci1vbmVcIl0gLmNlbGxgKTtcclxuICAgIGdyaWRDZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gICAgICAgIC8vIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDZWxsQ2xpY2spO1xyXG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQbGFjZVNoaXApO1xyXG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgc2hvd1NoaXBQbGFjZW1lbnQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbmNlbFNoaXBzUGxhY2VtZW50KGUpIHtcclxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGUuY3VycmVudFRhcmdldDtcclxuICAgIHJlSW5pdGlhbGlzZUdhbWUoKTtcclxuICAgIGdhbWVDdHJsQnV0dG9uU2VjdGlvbi5yZW1vdmVDaGlsZChjYW5jZWxCdG4ucGFyZW50RWxlbWVudCk7IC8vcmVtb3ZlIHBsYWNlbWVudEJ0bnNEaXZcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlUGxhY2VTaGlwKGUpIHtcclxuICAgIGNvbnN0IGNob3NlbkNlbGwgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBsZXQgW2Nvb3JkaW5hdGVYLCBjb29yZGluYXRlWV0gPSBbXHJcbiAgICAgICAgTnVtYmVyKGNob3NlbkNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXJvdycpKSxcclxuICAgICAgICBOdW1iZXIoY2hvc2VuQ2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sJykpLFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50U2hpcFNpemUgPSBzaGlwU2l6ZXNbMF07XHJcbiAgICBpZighcGxheWVyT25lR2FtZWJvYXJkLmlzVmFsaWRQb3NpdGlvbihjdXJyZW50U2hpcFNpemUsIFtjb29yZGluYXRlWCwgY29vcmRpbmF0ZVldLCBzZWxlY3RlZE9yaWVudGF0aW9uKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgc2hpcFNpemVzLnNoaWZ0KCk7XHJcblxyXG4gICAgaWYoc2hpcFNpemVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZmlybS1wbGFjZW1lbnQtYnRuJyk7XHJcbiAgICAgICAgY29uZmlybUJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdwbGFjZVNoaXAnKTtcclxuXHJcbiAgICBjb25zdCBzaGlwQ2VsbHMgPSBwbGF5ZXJPbmVHYW1lYm9hcmQucGxhY2VTaGlwKG5ldyBTaGlwKGN1cnJlbnRTaGlwU2l6ZSksIFtjb29yZGluYXRlWCwgY29vcmRpbmF0ZVldLCBzZWxlY3RlZE9yaWVudGF0aW9uKTtcclxuICAgIGRpc3BsYXlTaGlwc09uR2FtZWJvYXJkKHNoaXBDZWxscywgJ3BsYXllci1vbmUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1NoaXBQbGFjZW1lbnQoZSkge1xyXG4gICAgY29uc3QgY2VsbCA9IGUuY3VycmVudFRhcmdldDtcclxuICAgIGxldCBbY29vcmRpbmF0ZVgsIGNvb3JkaW5hdGVZXSA9IFtcclxuICAgICAgICBOdW1iZXIoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm93JykpLFxyXG4gICAgICAgIE51bWJlcihjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2wnKSksXHJcbiAgICBdO1xyXG5cclxuICAgIGxhc3RDaG9zZW5DZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRTaGlwU2l6ZSA9IHNoaXBTaXplc1swXTtcclxuICAgIGlmKCFwbGF5ZXJPbmVHYW1lYm9hcmQuaXNWYWxpZFBvc2l0aW9uKGN1cnJlbnRTaGlwU2l6ZSwgW2Nvb3JkaW5hdGVYLCBjb29yZGluYXRlWV0sIHNlbGVjdGVkT3JpZW50YXRpb24pKSB7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgyNTUsIDAsIDAsIDAuNSknO1xyXG4gICAgICAgIGxhc3RDaG9zZW5DZWxscy5wdXNoKGNlbGwpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY3VycmVudFNoaXBTaXplOyBpKyspIHtcclxuICAgICAgICBpZihzZWxlY3RlZE9yaWVudGF0aW9uID09IE9yaWVudGF0aW9uLkhPUklaT05UQUwpIHtcclxuICAgICAgICAgICAgbGV0IGRZID0gY29vcmRpbmF0ZVkgKyBpO1xyXG4gICAgICAgICAgICBsZXQgY2hvc2VuQ2VsbCA9IHBsYXllck9uZUdyaWRDZWxsc1tjb29yZGluYXRlWF1bZFldO1xyXG4gICAgICAgICAgICBjaG9zZW5DZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsIDI1NSwgMCwgMC41KSc7XHJcbiAgICAgICAgICAgIGxhc3RDaG9zZW5DZWxscy5wdXNoKGNob3NlbkNlbGwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBkWCA9IGNvb3JkaW5hdGVYICsgaTtcclxuICAgICAgICAgICAgbGV0IGNob3NlbkNlbGwgPSBwbGF5ZXJPbmVHcmlkQ2VsbHNbZFhdW2Nvb3JkaW5hdGVZXTtcclxuICAgICAgICAgICAgY2hvc2VuQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLCAyNTUsIDAsIDAuNSknO1xyXG4gICAgICAgICAgICBsYXN0Q2hvc2VuQ2VsbHMucHVzaChjaG9zZW5DZWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0e1xyXG4gICAgZGlzcGxheUdhbWVib2FyZCxcclxuICAgIG1hcmtDZWxsLFxyXG4gICAgdG9nZ2xlR3JpZEJsb2NrZXJzLFxyXG4gICAgZGlzYWJsZUdyaWRCbG9ja2VyLFxyXG4gICAgZW5hYmxlR3JpZEJsb2NrZXIsXHJcbiAgICB0b2dnbGVDZWxsQmxvY2tlcnMsXHJcbiAgICBzaG93UGxheWVyVHVybixcclxuICAgIGhpZGVQbGF5ZXJJbnN0cnVjdGlvbnMsXHJcbiAgICBoYW5kbGVHYW1lT3ZlcixcclxuICAgIGRpc3BsYXlTaGlwc09uR2FtZWJvYXJkLFxyXG4gICAgdXBkYXRlU2hpcHNPbkdhbWVib2FyZCxcclxuICAgIGNsZWFyQWxsR2FtZWJvYXJkcyxcclxuICAgIGhpZ2hsaWdodEF0dGFja2VkQ2VsbCxcclxuICAgIGNsZWFyUmVzdWx0cyxcclxuICAgIGluaXRpYWxpc2VQbGFjaW5nU2hpcHMsXHJcbn07XHJcbiIsImxldCBjdXJyZW50UGxheWVyID0gJyc7XHJcblxyXG5mdW5jdGlvbiBzZXRDdXJyZW50UGxheWVyKHBsYXllcikge1xyXG4gICAgY3VycmVudFBsYXllciA9IHBsYXllcjtcclxufVxyXG5cclxuZnVuY3Rpb24gc3dpdGNoVHVybigpIHtcclxuICAgIGlmIChjdXJyZW50UGxheWVyID09PSAncGxheWVyLW9uZScpIHtcclxuICAgICAgICBjdXJyZW50UGxheWVyID0gJ3BsYXllci10d28nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJyZW50UGxheWVyID0gJ3BsYXllci1vbmUnO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBjdXJyZW50UGxheWVyLCBzZXRDdXJyZW50UGxheWVyLCBzd2l0Y2hUdXJuIH07IiwiY29uc3QgT3JpZW50YXRpb24gPSBPYmplY3QuZnJlZXplKHtcclxuICAgIEhPUklaT05UQUw6ICdob3Jpem9udGFsJyxcclxuICAgIFZFUlRJQ0FMOiAndmVydGljYWwnLFxyXG59KTtcclxuXHJcbmNsYXNzIEdhbWVib2FyZCB7XHJcbiAgICAjUk9XX1NJWkUgPSAxMDtcclxuICAgICNDT0xfU0laRSA9IDEwO1xyXG4gICAgI2FkamFjZW50Q2VsbERlbHRhcyA9IFtcclxuICAgICAgICBbLTEsIC0xXSxcclxuICAgICAgICBbLTEsIDBdLFxyXG4gICAgICAgIFstMSwgMV0sXHJcbiAgICAgICAgWzAsIC0xXSxcclxuICAgICAgICBbMCwgMV0sXHJcbiAgICAgICAgWzEsIC0xXSxcclxuICAgICAgICBbMSwgMF0sXHJcbiAgICAgICAgWzEsIDFdLFxyXG4gICAgXTtcclxuICAgICNyZWxldmFudEFkamFjZW50Q2VsbERlbHRhcyA9IFtcclxuICAgICAgICBbLTEsIDBdLFxyXG4gICAgICAgIFswLCAtMV0sXHJcbiAgICAgICAgWzAsIDFdLFxyXG4gICAgICAgIFsxLCAwXSxcclxuICAgIF07XHJcbiAgICAjcmVzZXJ2ZWRQb3NpdGlvbnMgPSBuZXcgU2V0KCk7XHJcbiAgICAjc2hpcFBvc2l0aW9ucyA9IG5ldyBTZXQoKTtcclxuICAgICNzaGlwVG9BZGphY2VudENlbGxzTWFwID0gbmV3IE1hcCgpOyAvL21hcCBvZiBzaGlwIG9iamVjdCB0byBhZGphY2VudENlbGxzT2ZTaGlwIHNldCgpXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBBcnJheSh0aGlzLiNST1dfU0laRSlcclxuICAgICAgICAgICAgLmZpbGwobnVsbClcclxuICAgICAgICAgICAgLm1hcCgoKSA9PiBuZXcgQXJyYXkodGhpcy4jQ09MX1NJWkUpLmZpbGwobnVsbCkpO1xyXG4gICAgICAgIHRoaXMuYXZhaWxhYmxlQ2VsbHMgPSB0aGlzLmluaXRpYWxpemVBdmFpbGFibGVDb29yZGluYXRlcygpO1xyXG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplQXZhaWxhYmxlQ29vcmRpbmF0ZXMoKSB7XHJcbiAgICAgICAgY29uc3QgY2VsbHMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCByb3dOdW0gPSAwOyByb3dOdW0gPCB0aGlzLiNST1dfU0laRTsgcm93TnVtKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sTnVtID0gMDsgY29sTnVtIDwgdGhpcy4jQ09MX1NJWkU7IGNvbE51bSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjZWxscy5wdXNoKFtyb3dOdW0sIGNvbE51bV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjZWxscztcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckdhbWVib2FyZCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVib2FyZCA9IHRoaXMuZ2FtZWJvYXJkLm1hcCgocm93KSA9PiByb3cuZmlsbChudWxsKSk7XHJcbiAgICAgICAgdGhpcy4jcmVzZXJ2ZWRQb3NpdGlvbnMuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLiNzaGlwUG9zaXRpb25zLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy4jc2hpcFRvQWRqYWNlbnRDZWxsc01hcC5jbGVhcigpO1xyXG4gICAgICAgIC8vIHRoaXMuc2hpcHMuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBZGphY2VudENlbGxzKHBvc2l0aW9uLCBhZGphY2VudERlbHRhcykge1xyXG4gICAgICAgIGxldCBbY3VycmVudFgsIGN1cnJlbnRZXSA9IHBvc2l0aW9uO1xyXG4gICAgICAgIGNvbnN0IGFkamFjZW50Q2VsbHMgPSBbXTtcclxuICAgICAgICBhZGphY2VudERlbHRhcy5mb3JFYWNoKChjZWxsQ29vcmRpbmF0ZXMpID0+IHtcclxuICAgICAgICAgICAgbGV0IFthZGphY2VudERlbHRhWCwgYWRqYWNlbnREZWx0YVldID0gY2VsbENvb3JkaW5hdGVzO1xyXG4gICAgICAgICAgICBsZXQgYWRqYWNlbnRYID0gY3VycmVudFggKyBhZGphY2VudERlbHRhWDtcclxuICAgICAgICAgICAgbGV0IGFkamFjZW50WSA9IGN1cnJlbnRZICsgYWRqYWNlbnREZWx0YVk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGFkamFjZW50WCA+PSAwICYmXHJcbiAgICAgICAgICAgICAgICBhZGphY2VudFggPD0gOSAmJlxyXG4gICAgICAgICAgICAgICAgYWRqYWNlbnRZID49IDAgJiZcclxuICAgICAgICAgICAgICAgIGFkamFjZW50WSA8PSA5XHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFkamFjZW50Q2VsbHNDb29yZGluYXRlID0gW2FkamFjZW50WCwgYWRqYWNlbnRZXTtcclxuICAgICAgICAgICAgICAgIGFkamFjZW50Q2VsbHMucHVzaChhZGphY2VudENlbGxzQ29vcmRpbmF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFkamFjZW50Q2VsbHM7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWYWxpZFBvc2l0aW9uKHNoaXBMZW5ndGgsIHBvc2l0aW9uLCBvcmllbnRhdGlvbikge1xyXG4gICAgICAgIGxldCBbcm93TnVtYmVyLCBjb2xOdW1iZXJdID0gcG9zaXRpb247XHJcblxyXG4gICAgICAgIC8vY2hlY2sgaWYgcG9zaXRpb24gaXMgYWxyZWFkeSBmaWxsZWQgb3IgaXMgYWRqYWNlbnQgcG9zaXRpb24gb2YgZmlsbGVkIGNlbGwuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09IE9yaWVudGF0aW9uLkhPUklaT05UQUwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBkUG9zaXRpb24gPSBbcm93TnVtYmVyLCBjb2xOdW1iZXIgKyBpXTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNyZXNlcnZlZFBvc2l0aW9ucy5oYXMoZFBvc2l0aW9uLnRvU3RyaW5nKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jc2hpcFBvc2l0aW9ucy5oYXMoZFBvc2l0aW9uLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZFBvc2l0aW9uID0gW3Jvd051bWJlciArIGksIGNvbE51bWJlcl07XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jcmVzZXJ2ZWRQb3NpdGlvbnMuaGFzKGRQb3NpdGlvbi50b1N0cmluZygpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3NoaXBQb3NpdGlvbnMuaGFzKGRQb3NpdGlvbi50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2NoZWNrIGlmIGl0cyBsZW5ndGggY2FuIGdvIG91dCBvZiBib3VuZHM7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9PSBPcmllbnRhdGlvbi5IT1JJWk9OVEFMICYmXHJcbiAgICAgICAgICAgIGNvbE51bWJlciArIHNoaXBMZW5ndGggPiB0aGlzLiNST1dfU0laRVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgb3JpZW50YXRpb24gPT0gT3JpZW50YXRpb24uVkVSVElDQUwgJiZcclxuICAgICAgICAgICAgcm93TnVtYmVyICsgc2hpcExlbmd0aCA+IHRoaXMuI0NPTF9TSVpFXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYWNlU2hpcChzaGlwLCBwb3NpdGlvbiwgb3JpZW50YXRpb24pIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZFBvc2l0aW9uKHNoaXAuc2l6ZSwgcG9zaXRpb24sIG9yaWVudGF0aW9uKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBbcm93TnVtYmVyLCBjb2xOdW1iZXJdID0gcG9zaXRpb247XHJcbiAgICAgICAgbGV0IHNoaXBMZW5ndGggPSBzaGlwLnNpemU7XHJcbiAgICAgICAgbGV0IGFsbEFkamFjZW50Q2VsbHNPZlNoaXAgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFNoaXBDZWxscyA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09IE9yaWVudGF0aW9uLkhPUklaT05UQUwpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZWJvYXJkW3Jvd051bWJlcl1bY29sTnVtYmVyXSA9IHNoaXA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiNzaGlwUG9zaXRpb25zLmFkZChbcm93TnVtYmVyLCBjb2xOdW1iZXJdLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFNoaXBDZWxscy5hZGQoW3Jvd051bWJlciwgY29sTnVtYmVyXS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGxldCBhZGphY2VudENlbGxzID0gdGhpcy5nZXRBZGphY2VudENlbGxzKFxyXG4gICAgICAgICAgICAgICAgICAgIFtyb3dOdW1iZXIsIGNvbE51bWJlcl0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jYWRqYWNlbnRDZWxsRGVsdGFzXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYWRqYWNlbnRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jcmVzZXJ2ZWRQb3NpdGlvbnMuYWRkKGNlbGwudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsQWRqYWNlbnRDZWxsc09mU2hpcC5hZGQoY2VsbC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29sTnVtYmVyKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT0gT3JpZW50YXRpb24uVkVSVElDQUwpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZWJvYXJkW3Jvd051bWJlcl1bY29sTnVtYmVyXSA9IHNoaXA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiNzaGlwUG9zaXRpb25zLmFkZChbcm93TnVtYmVyLCBjb2xOdW1iZXJdLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFNoaXBDZWxscy5hZGQoW3Jvd051bWJlciwgY29sTnVtYmVyXS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGxldCBhZGphY2VudENlbGxzID0gdGhpcy5nZXRBZGphY2VudENlbGxzKFxyXG4gICAgICAgICAgICAgICAgICAgIFtyb3dOdW1iZXIsIGNvbE51bWJlcl0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jYWRqYWNlbnRDZWxsRGVsdGFzXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYWRqYWNlbnRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jcmVzZXJ2ZWRQb3NpdGlvbnMuYWRkKGNlbGwudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsQWRqYWNlbnRDZWxsc09mU2hpcC5hZGQoY2VsbC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcm93TnVtYmVyKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsOyAvL2ludmFsaWQgb3JpZW50YXRpb25cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vcmVtb3ZlIGFsbCBjZWxscyB0aGF0IGhhdmUgc2hpcHNcclxuICAgICAgICBhbGxBZGphY2VudENlbGxzT2ZTaGlwLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IGNlbGwuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZWJvYXJkW3Jvd11bY29sXSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgYWxsQWRqYWNlbnRDZWxsc09mU2hpcC5kZWxldGUoY2VsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy4jc2hpcFRvQWRqYWNlbnRDZWxsc01hcC5zZXQoc2hpcCwgYWxsQWRqYWNlbnRDZWxsc09mU2hpcCk7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRTaGlwQ2VsbHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjZWl2ZUF0dGFjayhoaXRDb29yZGluYXRlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaGl0Q29vcmRpbmF0ZSk7XHJcbiAgICAgICAgbGV0IFtoaXRDb29yZGluYXRlWCwgaGl0Q29vcmRpbmF0ZVldID0gaGl0Q29vcmRpbmF0ZTtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5nYW1lYm9hcmRbaGl0Q29vcmRpbmF0ZVhdW2hpdENvb3JkaW5hdGVZXTtcclxuICAgICAgICBpZiAodGFyZ2V0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lYm9hcmRbaGl0Q29vcmRpbmF0ZVhdW2hpdENvb3JkaW5hdGVZXSA9ICdPJztcclxuICAgICAgICAgICAgcmV0dXJuIHsgYWRqYWNlbnRDZWxsczogbnVsbCwgaXNTaGlwSGl0OiBmYWxzZSB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGFyZ2V0LmhpdCgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkW2hpdENvb3JkaW5hdGVYXVtoaXRDb29yZGluYXRlWV0gPSAnWCc7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFyZUFsbFNoaXBzU3VuaygpKSB7XHJcbiAgICAgICAgICAgIC8vZ2FtZW92ZXIsIGFubm91bmNlIHdpbm5lclxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnR2FtZW92ZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRhcmdldC5pc1N1bmsoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBhZGphY2VudENlbGxzU2V0ID0gdGhpcy4jc2hpcFRvQWRqYWNlbnRDZWxsc01hcC5nZXQodGFyZ2V0KTtcclxuICAgICAgICAgICAgYWRqYWNlbnRDZWxsc1NldC5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gY2VsbC5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lYm9hcmRbcm93XVtjb2xdID0gJ08nO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDZWxsRnJvbUF2YWlsYWJsZUNlbGxzKFtyb3csIGNvbF0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgYWRqYWNlbnRDZWxsczogYWRqYWNlbnRDZWxsc1NldCwgaXNTaGlwSGl0OiB0cnVlIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IGFkamFjZW50Q2VsbHM6IG51bGwsIGlzU2hpcEhpdDogdHJ1ZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGFyZUFsbFNoaXBzU3VuaygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmtTdGF0dXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNoaXBQb3NpdGlvbnMobG9nU2hpcFBvc2l0aW9ucyA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYobG9nU2hpcFBvc2l0aW9ucykgY29uc29sZS5sb2codGhpcy4jc2hpcFBvc2l0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI3NoaXBQb3NpdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmFuZG9tQ29vcmRpbmF0ZUZvclNoaXAoc2hpcExlbmd0aCkge1xyXG4gICAgICAgIGlmICh0aGlzLmF2YWlsYWJsZUNlbGxzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGF2YWlsYWJsZSBjZWxscyB0byBwbGFjZSBzaGlwJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBNQVhfUkVUUklFUyA9IDEwMDtcclxuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xyXG5cclxuICAgICAgICB3aGlsZSAoYXR0ZW1wdHMgPCBNQVhfUkVUUklFUykge1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21PcmllbnRhdGlvbiA9IHRoaXMuZ2V0UmFuZG9tT3JpZW50YXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlWCA9XHJcbiAgICAgICAgICAgICAgICByYW5kb21PcmllbnRhdGlvbiA9PT0gT3JpZW50YXRpb24uSE9SSVpPTlRBTFxyXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy4jUk9XX1NJWkVcclxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuI1JPV19TSVpFIC0gKHNoaXBMZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgY29uc3QgcmFuZ2VZID1cclxuICAgICAgICAgICAgICAgIHJhbmRvbU9yaWVudGF0aW9uID09PSBPcmllbnRhdGlvbi5IT1JJWk9OVEFMXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLiNDT0xfU0laRSAtIChzaGlwTGVuZ3RoIC0gMSlcclxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuI0NPTF9TSVpFO1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21Db29yZGluYXRlID0gdGhpcy5nZXRSYW5kb21Db29yZGluYXRlSW5SYW5nZShcclxuICAgICAgICAgICAgICAgIHJhbmdlWCxcclxuICAgICAgICAgICAgICAgIHJhbmdlWVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1ZhbGlkUG9zaXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcExlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICByYW5kb21Db29yZGluYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbU9yaWVudGF0aW9uXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcmFuZG9tQ29vcmRpbmF0ZSwgcmFuZG9tT3JpZW50YXRpb24gfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXR0ZW1wdHMrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZpbmQgdmFsaWQgY29vcmRpbmF0ZSBmb3Igc2hpcCBwbGFjZW1lbnQnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSYW5kb21PcmllbnRhdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSA8IDAuNVxyXG4gICAgICAgICAgICA/IE9yaWVudGF0aW9uLkhPUklaT05UQUxcclxuICAgICAgICAgICAgOiBPcmllbnRhdGlvbi5WRVJUSUNBTDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSYW5kb21Db29yZGluYXRlSW5SYW5nZShyYW5nZVgsIHJhbmdlWSkge1xyXG4gICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZ2VYKTtcclxuICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmdlWSk7XHJcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSYW5kb21Db29yZGluYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmF2YWlsYWJsZUNlbGxzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG1vcmUgYXZhaWxhYmxlIGNlbGxzJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKFxyXG4gICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogdGhpcy5hdmFpbGFibGVDZWxscy5sZW5ndGhcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBsZXQgcmFuZG9tQ29vcmRpbmF0ZSA9IHRoaXMuYXZhaWxhYmxlQ2VsbHNbcmFuZG9tSW5kZXhdO1xyXG4gICAgICAgIHRoaXMuYXZhaWxhYmxlQ2VsbHMuc3BsaWNlKHJhbmRvbUluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJhbmRvbUNvb3JkaW5hdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmFuZG9tQWRqYWNlbnRDb29yZGluYXRlKGhpdENvb3JkaW5hdGUpIHtcclxuICAgICAgICBjb25zdCBhbGxBZGphY2VudENvb3JkaW5hdGVzID1cclxuICAgICAgICAgICAgdGhpcy5nZXRSZWxldmFudEFkamFjZW50Q29vcmRpbmF0ZXMoaGl0Q29vcmRpbmF0ZSk7XHJcbiAgICAgICAgaWYgKCFhbGxBZGphY2VudENvb3JkaW5hdGVzIHx8IGFsbEFkamFjZW50Q29vcmRpbmF0ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbmRvbUNvb3JkaW5hdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihcclxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIGFsbEFkamFjZW50Q29vcmRpbmF0ZXMubGVuZ3RoXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmFuZG9tQWRqYWNlbnRDb29yZGluYXRlID0gYWxsQWRqYWNlbnRDb29yZGluYXRlc1tyYW5kb21JbmRleF07XHJcblxyXG4gICAgICAgIHRoaXMucmVtb3ZlQ2VsbEZyb21BdmFpbGFibGVDZWxscyhyYW5kb21BZGphY2VudENvb3JkaW5hdGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmFuZG9tQWRqYWNlbnRDb29yZGluYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJlbGV2YW50QWRqYWNlbnRDb29yZGluYXRlcyhoaXRDb29yZGluYXRlKSB7XHJcbiAgICAgICAgY29uc3QgYWxsQWRqYWNlbnRDb29yZGluYXRlcyA9IHRoaXMuZ2V0QWRqYWNlbnRDZWxscyhcclxuICAgICAgICAgICAgaGl0Q29vcmRpbmF0ZSxcclxuICAgICAgICAgICAgdGhpcy4jcmVsZXZhbnRBZGphY2VudENlbGxEZWx0YXNcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHJlbGV2YW50QWRqYWNlbnRDb29yZGluYXRlcyA9IGFsbEFkamFjZW50Q29vcmRpbmF0ZXMuZmlsdGVyKFxyXG4gICAgICAgICAgICAoY29vcmRpbmF0ZSkgPT5cclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZWJvYXJkW2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV1dICE9PSAnWCcgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZWJvYXJkW2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV1dICE9PSAnTydcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiByZWxldmFudEFkamFjZW50Q29vcmRpbmF0ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ2VsbEZyb21BdmFpbGFibGVDZWxscyhjZWxsVG9SZW1vdmUpIHtcclxuICAgICAgICB0aGlzLmF2YWlsYWJsZUNlbGxzID0gdGhpcy5hdmFpbGFibGVDZWxscy5maWx0ZXIoXHJcbiAgICAgICAgICAgIChhdmFpbGFibGVDZWxsKSA9PlxyXG4gICAgICAgICAgICAgICAgIShcclxuICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVDZWxsWzBdID09IGNlbGxUb1JlbW92ZVswXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZUNlbGxbMV0gPT0gY2VsbFRvUmVtb3ZlWzFdXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgR2FtZWJvYXJkLCBPcmllbnRhdGlvbiB9O1xyXG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZC5qcydcclxuXHJcbmNsYXNzIFBsYXllciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsImNsYXNzIFNoaXAge1xyXG4gICAgY29uc3RydWN0b3Ioc2l6ZSwgaGl0Q291bnQgPSAwLCBpc1N1bmtTdGF0dXMgPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgdGhpcy5oaXRDb3VudCA9IGhpdENvdW50O1xyXG4gICAgICAgIHRoaXMuaXNTdW5rU3RhdHVzID0gaXNTdW5rU3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIGhpdCgpIHtcclxuICAgICAgICB0aGlzLmhpdENvdW50Kys7XHJcbiAgICAgICAgdGhpcy5pc1N1bmtTdGF0dXMgPSB0aGlzLmlzU3VuaygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpc1N1bmsoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGl0Q291bnQgPT0gdGhpcy5zaXplO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9