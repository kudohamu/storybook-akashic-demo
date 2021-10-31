(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./game/game.json":
/*!************************!*\
  !*** ./game/game.json ***!
  \************************/
/*! exports provided: width, height, fps, main, assets, moduleMainScripts, environment, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"width\\\":512,\\\"height\\\":384,\\\"fps\\\":60,\\\"main\\\":\\\"./script/boot.js\\\",\\\"assets\\\":{\\\"button_back\\\":{\\\"type\\\":\\\"image\\\",\\\"width\\\":128,\\\"height\\\":48,\\\"path\\\":\\\"image/button_back.png\\\"},\\\"button_start\\\":{\\\"type\\\":\\\"image\\\",\\\"width\\\":128,\\\"height\\\":48,\\\"path\\\":\\\"image/button_start.png\\\"},\\\"font16\\\":{\\\"type\\\":\\\"image\\\",\\\"width\\\":256,\\\"height\\\":96,\\\"path\\\":\\\"image/font16.png\\\"},\\\"gameover\\\":{\\\"type\\\":\\\"image\\\",\\\"width\\\":352,\\\"height\\\":64,\\\"path\\\":\\\"image/gameover.png\\\"},\\\"map\\\":{\\\"type\\\":\\\"image\\\",\\\"width\\\":512,\\\"height\\\":512,\\\"path\\\":\\\"image/map.png\\\"},\\\"player\\\":{\\\"type\\\":\\\"image\\\",\\\"width\\\":32,\\\"height\\\":32,\\\"path\\\":\\\"image/player.png\\\"},\\\"title\\\":{\\\"type\\\":\\\"image\\\",\\\"width\\\":256,\\\"height\\\":112,\\\"path\\\":\\\"image/title.png\\\"},\\\"background\\\":{\\\"type\\\":\\\"image\\\",\\\"width\\\":512,\\\"height\\\":384,\\\"path\\\":\\\"image/background.png\\\"},\\\"glyph_area\\\":{\\\"type\\\":\\\"text\\\",\\\"path\\\":\\\"text/glyph_area.json\\\"},\\\"map_data\\\":{\\\"type\\\":\\\"text\\\",\\\"path\\\":\\\"text/map_data.json\\\"},\\\"version\\\":{\\\"type\\\":\\\"text\\\",\\\"path\\\":\\\"text/version.txt\\\"},\\\"boot\\\":{\\\"type\\\":\\\"script\\\",\\\"path\\\":\\\"script/boot.js\\\",\\\"global\\\":true},\\\"main\\\":{\\\"type\\\":\\\"script\\\",\\\"path\\\":\\\"script/bundle/main.js\\\",\\\"global\\\":true}},\\\"moduleMainScripts\\\":{},\\\"environment\\\":{\\\"sandbox-runtime\\\":\\\"3\\\"}}\");\n\n//# sourceURL=webpack:///./game/game.json?");

/***/ }),

/***/ "./game/text/map_data.json":
/*!*********************************!*\
  !*** ./game/text/map_data.json ***!
  \*********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[[-1,-1,-1,-1,-1,-1,-1,-1,-1,32,33,33,34,5,6,16,17,17,17,17,17,17,17,17,17,33,33,33,33,33,34,5,6,16,17,17,17,17,17,17,17,17,17,33,33,33,33,33,34,5,6,16,17,17,17,17,17,17,17,17,17,33,33,33,33,33,34,5,6,16,17,17,17,17,17,17,17,17,17,33,33],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,21,22,32,33,33,34,5,6,16,17,17,18,5,6,-1,-1,-1,-1,21,22,32,33,33,34,5,6,16,17,17,18,5,6,-1,-1,-1,-1,21,22,32,33,33,34,5,6,16,17,17,18,5,6,-1,-1,-1,-1,21,22,32,33,33,34,5,6,16,17,17,18,5,6],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,37,38,-1,-1,-1,-1,21,22,32,33,33,34,21,22,-1,-1,-1,-1,37,38,-1,-1,-1,-1,21,22,32,33,33,34,21,22,-1,-1,-1,-1,37,38,-1,-1,-1,-1,21,22,32,33,33,34,21,22,-1,-1,-1,-1,37,38,-1,-1,-1,-1,21,22,32,33,33,34,21,22],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,53,54,-1,-1,-1,-1,37,38,-1,-1,-1,-1,37,38,-1,-1,-1,-1,53,54,-1,-1,-1,-1,37,38,-1,-1,-1,-1,37,38,-1,-1,-1,-1,53,54,-1,-1,-1,-1,37,38,-1,-1,-1,-1,37,38,-1,-1,-1,-1,53,54,-1,-1,-1,-1,37,38,-1,-1,-1,-1,37,38],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,21,22,-1,-1,-1,-1,53,54,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,21,22,-1,-1,-1,-1,53,54,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,21,22,-1,-1,-1,-1,53,54,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,21,22,-1,-1,-1,-1,53,54],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,53,54,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,53,54,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,53,54,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,53,54,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,35,36,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,-1,-1,-1,-1,35,36,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,-1,-1,-1,-1,35,36,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,-1,-1,-1,-1,35,36,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,51,52,-1,-1,-1,-1,19,20,-1,0,1,2,51,52,-1,-1,-1,-1,51,52,-1,-1,-1,-1,19,20,-1,0,1,2,51,52,-1,-1,-1,-1,51,52,-1,-1,-1,-1,19,20,-1,0,1,2,51,52,-1,-1,-1,-1,51,52,-1,-1,-1,-1,19,20,-1,0,1,2,51,52],[-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,1,2,67,68,0,1,1,2,67,68,0,17,17,18,67,68,0,1,1,2,67,68,0,1,1,2,67,68,0,17,17,18,67,68,0,1,1,2,67,68,0,1,1,2,67,68,0,17,17,18,67,68,0,1,1,2,67,68,0,1,1,2,67,68,0,17,17,18,67,68]]\");\n\n//# sourceURL=webpack:///./game/text/map_data.json?");

/***/ }),

/***/ "./node_modules/@akashic-extension/akashic-tile/lib/Tile.js":
/*!******************************************************************!*\
  !*** ./node_modules/@akashic-extension/akashic-tile/lib/Tile.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __extends = this && this.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];\n    };\n\n    return extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Tile = void 0;\n/**\n * RPGのマップなどで利用される、マップチップとタイルデータによるパターン描画を行うエンティティ。\n */\n\nvar Tile =\n/** @class */\nfunction (_super) {\n  __extends(Tile, _super);\n  /**\n   * 各種パラメータを指定して `Tile` のインスタンスを生成する。\n   *\n   * @param param このエンティティに指定するパラメータ\n   */\n\n\n  function Tile(param) {\n    var _this = _super.call(this, param) || this;\n\n    _this.tileWidth = param.tileWidth;\n    _this.tileHeight = param.tileHeight;\n    _this.tileData = param.tileData;\n    _this.tileChips = g.SurfaceUtil.asSurface(param.src);\n    _this.height = _this.tileHeight * _this.tileData.length;\n    _this.width = _this.tileWidth * _this.tileData[0].length;\n\n    _this._invalidateSelf();\n\n    _this.redrawArea = param.redrawArea;\n    _this._drawnTileData = undefined;\n    return _this;\n  }\n  /**\n   * このエンティティ自身の描画を行う。\n   * このメソッドはエンジンから暗黙に呼び出され、ゲーム開発者が呼び出す必要はない。\n   */\n\n\n  Tile.prototype.renderSelf = function (renderer, camera) {\n    if (this._renderedCamera !== camera) {\n      this.state &= ~2\n      /* Cached */\n      ;\n      this._renderedCamera = camera;\n    }\n\n    if (!(this.state & 2\n    /* Cached */\n    )) {\n      var isNew = !this._cache || this._cache.width < Math.ceil(this.width) || this._cache.height < Math.ceil(this.height);\n\n      if (isNew) {\n        if (this._cache && !this._cache.destroyed()) {\n          this._cache.destroy();\n        }\n\n        this._cache = this.scene.game.resourceFactory.createSurface(Math.ceil(this.width), Math.ceil(this.height));\n        this._renderer = this._cache.renderer();\n        this._drawnTileData = [];\n\n        for (var y = 0; y < this.tileData.length; ++y) {\n          this._drawnTileData[y] = [];\n\n          for (var x = 0; x < this.tileData[y].length; ++x) {\n            this._drawnTileData[y][x] = -1;\n          }\n        }\n      }\n\n      this._renderer.begin(); // `CacheableE#renderSelf()` ではここで `this._renderer.clear()` を呼び出すが、\n      // `Tile` は `this._cache` の描画状態を再利用するので `this._renderer.clear()` を呼び出す必要はない。\n\n\n      this.renderCache(this._renderer);\n      this.state |= 2\n      /* Cached */\n      ;\n\n      this._renderer.end();\n    }\n\n    if (this._cache && this.width > 0 && this.height > 0) {\n      renderer.drawImage(this._cache, 0, 0, this.width, this.height, 0, 0);\n    }\n\n    return this._shouldRenderChildren;\n  };\n\n  Tile.prototype.renderCache = function (renderer) {\n    if (!this.tileData) throw g.ExceptionFactory.createAssertionError(\"Tile#_renderCache: don't have a tile data\");\n\n    if (this.tileWidth <= 0 || this.tileHeight <= 0) {\n      return;\n    }\n\n    renderer.save();\n\n    for (var y = 0; y < this.tileData.length; ++y) {\n      var row = this.tileData[y];\n\n      for (var x = 0; x < row.length; ++x) {\n        var tile = row[x];\n\n        if (tile < 0) {\n          continue;\n        }\n\n        if (this._drawnTileData[y] !== undefined) {\n          if (this._drawnTileData[y][x] === tile) {\n            continue;\n          }\n        }\n\n        var tileX = this.tileWidth * (tile % this._tilesInRow);\n        var tileY = this.tileHeight * Math.floor(tile / this._tilesInRow);\n        var dx = this.tileWidth * x;\n        var dy = this.tileHeight * y;\n\n        if (this.redrawArea) {\n          if (dx + this.tileWidth < this.redrawArea.x || dx >= this.redrawArea.x + this.redrawArea.width || dy + this.tileHeight < this.redrawArea.y || dy >= this.redrawArea.y + this.redrawArea.height) {\n            continue;\n          }\n        }\n\n        renderer.setCompositeOperation(\"destination-out\");\n        renderer.fillRect(dx, dy, this.tileWidth, this.tileHeight, \"silver\"); // DestinationOutなので色はなんでも可\n\n        renderer.setCompositeOperation(\"source-over\");\n        renderer.drawImage(this.tileChips, tileX, tileY, this.tileWidth, this.tileHeight, dx, dy);\n        this._drawnTileData[y][x] = this.tileData[y][x];\n      }\n    }\n\n    renderer.restore();\n  };\n\n  Tile.prototype.invalidate = function () {\n    this._invalidateSelf();\n\n    _super.prototype.invalidate.call(this);\n  };\n  /**\n   * このエンティティを破棄する。\n   * デフォルトでは利用しているマップチップの `Surface` `Surface` の破棄は行わない点に注意。\n   * @param destroySurface trueを指定した場合、このエンティティが抱えるマップチップの `Surface` も合わせて破棄する\n   */\n\n\n  Tile.prototype.destroy = function (destroySurface) {\n    if (destroySurface && this.tileChips && !this.tileChips.destroyed()) {\n      this.tileChips.destroy();\n    }\n\n    this.tileChips = undefined;\n\n    _super.prototype.destroy.call(this);\n  };\n\n  Tile.prototype._invalidateSelf = function () {\n    this._tilesInRow = Math.floor(this.tileChips.width / this.tileWidth);\n  };\n\n  return Tile;\n}(g.CacheableE);\n\nexports.Tile = Tile;\n\n//# sourceURL=webpack:///./node_modules/@akashic-extension/akashic-tile/lib/Tile.js?");

/***/ }),

/***/ "./node_modules/@akashic-extension/akashic-tile/lib/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@akashic-extension/akashic-tile/lib/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar Tile_1 = __webpack_require__(/*! ./Tile */ \"./node_modules/@akashic-extension/akashic-tile/lib/Tile.js\");\n\nObject.defineProperty(exports, \"Tile\", {\n  enumerable: true,\n  get: function () {\n    return Tile_1.Tile;\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/@akashic-extension/akashic-tile/lib/index.js?");

/***/ }),

/***/ "./src/constants/assets.ts":
/*!*********************************!*\
  !*** ./src/constants/assets.ts ***!
  \*********************************/
/*! exports provided: assetIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assetIds\", function() { return assetIds; });\nvar gameJson = __webpack_require__(/*! ../../game/game.json */ \"./game/game.json\");\n\nvar assetIds = Object.keys(gameJson.assets);\n\n//# sourceURL=webpack:///./src/constants/assets.ts?");

/***/ }),

/***/ "./src/constants/settings.ts":
/*!***********************************!*\
  !*** ./src/constants/settings.ts ***!
  \***********************************/
/*! exports provided: TILE_WIDTH, TILE_HEIGHT, GRAVITY_ACC, HOPPING_SPD, SCROLL_SPD, FONT_SIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TILE_WIDTH\", function() { return TILE_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TILE_HEIGHT\", function() { return TILE_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GRAVITY_ACC\", function() { return GRAVITY_ACC; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HOPPING_SPD\", function() { return HOPPING_SPD; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SCROLL_SPD\", function() { return SCROLL_SPD; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FONT_SIZE\", function() { return FONT_SIZE; });\n// タイルの幅\nvar TILE_WIDTH = 32; // タイルの高さ\n\nvar TILE_HEIGHT = 32; // 重力加速度\n\nvar GRAVITY_ACC = 500; // ホップ初速度\n\nvar HOPPING_SPD = -Math.sqrt(TILE_HEIGHT * 2 * 2 * GRAVITY_ACC); // スクロール速度\n\nvar SCROLL_SPD = TILE_WIDTH * 2 / (Math.abs(HOPPING_SPD) / GRAVITY_ACC * 2); // フォントサイズ\n\nvar FONT_SIZE = 16;\n\n//# sourceURL=webpack:///./src/constants/settings.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"main\", function() { return main; });\n/* harmony import */ var _constants_assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/assets */ \"./src/constants/assets.ts\");\n/* harmony import */ var _views_HoppingWitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/HoppingWitch */ \"./src/views/HoppingWitch/index.ts\");\n\n\nfunction main() {\n  var scene = new g.Scene({\n    game: g.game,\n    assetIds: _constants_assets__WEBPACK_IMPORTED_MODULE_0__[\"assetIds\"]\n  });\n  scene.onLoad.addOnce(function () {\n    var hw = new _views_HoppingWitch__WEBPACK_IMPORTED_MODULE_1__[\"HoppingWitch\"]({\n      scene: scene\n    });\n    scene.onPointUpCapture.add(function () {\n      return hw.hopPlayer();\n    });\n    scene.append(hw);\n  });\n  g.game.pushScene(scene);\n}\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/models/GameCore.ts":
/*!********************************!*\
  !*** ./src/models/GameCore.ts ***!
  \********************************/
/*! exports provided: GameCore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameCore\", function() { return GameCore; });\n/* harmony import */ var _constants_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/settings */ \"./src/constants/settings.ts\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ \"./src/models/Player.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar GameCore = /*#__PURE__*/function () {\n  function GameCore(_ref) {\n    var fps = _ref.fps,\n        gameData = _ref.gameData,\n        mapData = _ref.mapData,\n        playerData = _ref.playerData;\n\n    _classCallCheck(this, GameCore);\n\n    this.fps = void 0;\n    this.gameData = void 0;\n    this.mapData = void 0;\n    this.playerData = void 0;\n    this.state = 'title';\n    this.scroll = 0;\n    this.scrollSpeed = _constants_settings__WEBPACK_IMPORTED_MODULE_0__[\"SCROLL_SPD\"];\n    this.touched = false;\n    this.pc = null;\n    this.score = 0;\n    this.gameData = gameData;\n    this.fps = fps;\n    this.mapData = mapData;\n    this.playerData = playerData;\n    this.reset();\n  }\n  /**\n   * 初期化\n   */\n\n\n  _createClass(GameCore, [{\n    key: \"reset\",\n    value: function reset() {\n      this.state = \"title\";\n      this.scroll = 0;\n      this.scrollSpeed = _constants_settings__WEBPACK_IMPORTED_MODULE_0__[\"SCROLL_SPD\"];\n      this.touched = false;\n      this.pc = null;\n      this.score = 0;\n    }\n    /**\n     * ゲーム開始\n     */\n\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.state = \"playing\";\n      this.scroll = 0;\n      this.scrollSpeed = _constants_settings__WEBPACK_IMPORTED_MODULE_0__[\"SCROLL_SPD\"];\n      this.touched = false;\n      this.pc = new _Player__WEBPACK_IMPORTED_MODULE_1__[\"Player\"](this.playerData);\n      this.score = 0;\n    }\n    /**\n     * ゲーム状態更新\n     */\n\n  }, {\n    key: \"update\",\n    value: function update() {\n      var dt = 1 / this.fps;\n\n      if (this.state !== \"result\") {\n        this.scroll += this.scrollSpeed * dt;\n\n        if (this.scroll <= 0 || this.scroll >= this.mapData[0].length * _constants_settings__WEBPACK_IMPORTED_MODULE_0__[\"TILE_WIDTH\"] - this.gameData.width) {\n          this.scrollSpeed *= -1;\n        }\n\n        if (this.pc) {\n          this.pc.update(this.fps, this.touched);\n\n          if (this.checkCollision()) {\n            this.state = \"result\";\n          } else {\n            ++this.score;\n          }\n        }\n      }\n\n      this.touched = false;\n    }\n    /**\n     * 当たり判定\n     */\n\n  }, {\n    key: \"checkCollision\",\n    value: function checkCollision() {\n      if (!this.pc) return false;\n      var top = Math.floor(this.pc.x.y / _constants_settings__WEBPACK_IMPORTED_MODULE_0__[\"TILE_HEIGHT\"]);\n      var bottom = Math.floor((this.pc.x.y + this.pc.width) / _constants_settings__WEBPACK_IMPORTED_MODULE_0__[\"TILE_HEIGHT\"]);\n      var left = Math.floor((this.pc.x.x + this.scroll) / _constants_settings__WEBPACK_IMPORTED_MODULE_0__[\"TILE_WIDTH\"]);\n      var right = Math.floor((this.pc.x.x + this.scroll + this.pc.width) / _constants_settings__WEBPACK_IMPORTED_MODULE_0__[\"TILE_WIDTH\"]);\n\n      for (var y = top; y <= bottom; y++) {\n        for (var x = left; x <= right; x++) {\n          if (this.mapData[y][x] !== -1) {\n            return true;\n          }\n        }\n      }\n\n      return false;\n    }\n  }]);\n\n  return GameCore;\n}();\n\n//# sourceURL=webpack:///./src/models/GameCore.ts?");

/***/ }),

/***/ "./src/models/Player.ts":
/*!******************************!*\
  !*** ./src/models/Player.ts ***!
  \******************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\n/* harmony import */ var _constants_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/settings */ \"./src/constants/settings.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n/**\n * プレイヤークラス\n */\nvar Player = /*#__PURE__*/function () {\n  function Player(_ref) {\n    var x = _ref.x,\n        y = _ref.y,\n        width = _ref.width,\n        height = _ref.height;\n\n    _classCallCheck(this, Player);\n\n    this.x = void 0;\n    this.v = void 0;\n    this.width = void 0;\n    this.height = void 0;\n    this.width = width;\n    this.height = height;\n    this.x = {\n      x: x,\n      y: y\n    };\n    this.v = {\n      x: 0,\n      y: 0\n    };\n  }\n  /**\n   * プレイヤー状態更新\n   */\n\n\n  _createClass(Player, [{\n    key: \"update\",\n    value: function update(fps, hopping) {\n      var dt = 1 / fps;\n\n      if (hopping) {\n        this.v.y = _constants_settings__WEBPACK_IMPORTED_MODULE_0__[\"HOPPING_SPD\"];\n      } else {\n        var a = {\n          x: 0,\n          y: _constants_settings__WEBPACK_IMPORTED_MODULE_0__[\"GRAVITY_ACC\"]\n        };\n        this.v.x += a.x * dt;\n        this.v.y += a.y * dt;\n      }\n\n      this.x.x += this.v.x * dt;\n      this.x.y += this.v.y * dt;\n    }\n  }]);\n\n  return Player;\n}();\n\n//# sourceURL=webpack:///./src/models/Player.ts?");

/***/ }),

/***/ "./src/utils/makeScoreText.ts":
/*!************************************!*\
  !*** ./src/utils/makeScoreText.ts ***!
  \************************************/
/*! exports provided: makeScoreText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeScoreText\", function() { return makeScoreText; });\n/**\n * スコア用のテキストを生成する\n */\nfunction makeScoreText(score, prefix) {\n  return \"\".concat(prefix !== null && prefix !== void 0 ? prefix : '', \" \").concat(('0000000' + score).substr(-8));\n}\n\n//# sourceURL=webpack:///./src/utils/makeScoreText.ts?");

/***/ }),

/***/ "./src/views/BackButton/BackButton.ts":
/*!********************************************!*\
  !*** ./src/views/BackButton/BackButton.ts ***!
  \********************************************/
/*! exports provided: BackButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BackButton\", function() { return BackButton; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar BackButton = /*#__PURE__*/function (_g$Sprite) {\n  _inherits(BackButton, _g$Sprite);\n\n  var _super = _createSuper(BackButton);\n\n  function BackButton(_ref) {\n    var _this;\n\n    var scene = _ref.scene,\n        x = _ref.x,\n        y = _ref.y;\n\n    _classCallCheck(this, BackButton);\n\n    _this = _super.call(this, {\n      scene: scene,\n      x: x,\n      y: y,\n      src: scene.asset.getImageById(\"button_back\"),\n      touchable: true\n    });\n\n    _this.onPointDown.add(function () {\n      _this.x += 4;\n      _this.y += 4;\n\n      _this.modified();\n    });\n\n    _this.onPointUp.add(function () {\n      _this.x -= 4;\n      _this.y -= 4;\n\n      _this.modified();\n    });\n\n    return _this;\n  }\n\n  return BackButton;\n}(g.Sprite);\n\n//# sourceURL=webpack:///./src/views/BackButton/BackButton.ts?");

/***/ }),

/***/ "./src/views/BackButton/index.ts":
/*!***************************************!*\
  !*** ./src/views/BackButton/index.ts ***!
  \***************************************/
/*! exports provided: BackButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BackButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackButton */ \"./src/views/BackButton/BackButton.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BackButton\", function() { return _BackButton__WEBPACK_IMPORTED_MODULE_0__[\"BackButton\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/BackButton/index.ts?");

/***/ }),

/***/ "./src/views/BackgroundSprite/BackgroundSprite.ts":
/*!********************************************************!*\
  !*** ./src/views/BackgroundSprite/BackgroundSprite.ts ***!
  \********************************************************/
/*! exports provided: BackgroundSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BackgroundSprite\", function() { return BackgroundSprite; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar BackgroundSprite = /*#__PURE__*/function (_g$Sprite) {\n  _inherits(BackgroundSprite, _g$Sprite);\n\n  var _super = _createSuper(BackgroundSprite);\n\n  function BackgroundSprite(_ref) {\n    var scene = _ref.scene,\n        x = _ref.x,\n        y = _ref.y;\n\n    _classCallCheck(this, BackgroundSprite);\n\n    return _super.call(this, {\n      scene: scene,\n      x: x,\n      y: y,\n      src: scene.asset.getImageById(\"background\")\n    });\n  }\n\n  return BackgroundSprite;\n}(g.Sprite);\n\n//# sourceURL=webpack:///./src/views/BackgroundSprite/BackgroundSprite.ts?");

/***/ }),

/***/ "./src/views/BackgroundSprite/index.ts":
/*!*********************************************!*\
  !*** ./src/views/BackgroundSprite/index.ts ***!
  \*********************************************/
/*! exports provided: BackgroundSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BackgroundSprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackgroundSprite */ \"./src/views/BackgroundSprite/BackgroundSprite.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BackgroundSprite\", function() { return _BackgroundSprite__WEBPACK_IMPORTED_MODULE_0__[\"BackgroundSprite\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/BackgroundSprite/index.ts?");

/***/ }),

/***/ "./src/views/GameFont/GameFont.ts":
/*!****************************************!*\
  !*** ./src/views/GameFont/GameFont.ts ***!
  \****************************************/
/*! exports provided: GameFont */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameFont\", function() { return GameFont; });\n/* harmony import */ var _constants_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/settings */ \"./src/constants/settings.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar GameFont = /*#__PURE__*/function (_g$BitmapFont) {\n  _inherits(GameFont, _g$BitmapFont);\n\n  var _super = _createSuper(GameFont);\n\n  function GameFont(_ref) {\n    var scene = _ref.scene;\n\n    _classCallCheck(this, GameFont);\n\n    return _super.call(this, {\n      src: scene.asset.getImageById(\"font16\"),\n      map: JSON.parse(scene.asset.getTextById(\"glyph_area\").data),\n      defaultGlyphWidth: _constants_settings__WEBPACK_IMPORTED_MODULE_0__[\"FONT_SIZE\"],\n      defaultGlyphHeight: _constants_settings__WEBPACK_IMPORTED_MODULE_0__[\"FONT_SIZE\"]\n    });\n  }\n\n  return GameFont;\n}(g.BitmapFont);\n\n//# sourceURL=webpack:///./src/views/GameFont/GameFont.ts?");

/***/ }),

/***/ "./src/views/GameFont/index.ts":
/*!*************************************!*\
  !*** ./src/views/GameFont/index.ts ***!
  \*************************************/
/*! exports provided: GameFont */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GameFont__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameFont */ \"./src/views/GameFont/GameFont.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GameFont\", function() { return _GameFont__WEBPACK_IMPORTED_MODULE_0__[\"GameFont\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/GameFont/index.ts?");

/***/ }),

/***/ "./src/views/GameOverSprite/GameOverSprite.ts":
/*!****************************************************!*\
  !*** ./src/views/GameOverSprite/GameOverSprite.ts ***!
  \****************************************************/
/*! exports provided: GameOverSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameOverSprite\", function() { return GameOverSprite; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar GameOverSprite = /*#__PURE__*/function (_g$Sprite) {\n  _inherits(GameOverSprite, _g$Sprite);\n\n  var _super = _createSuper(GameOverSprite);\n\n  function GameOverSprite(_ref) {\n    var _this;\n\n    var scene = _ref.scene,\n        x = _ref.x,\n        y = _ref.y;\n\n    _classCallCheck(this, GameOverSprite);\n\n    _this = _super.call(this, {\n      scene: scene,\n      x: x,\n      y: y,\n      src: scene.asset.getImageById(\"gameover\"),\n      scaleX: 1,\n      scaleY: 1\n    });\n    _this.onEndAnimation = new g.Trigger();\n    _this.amp = void 0;\n    _this.scaleAdd = 1;\n    _this.amp = _this.scene.game.width / 2;\n    _this.x = _this.x + _this.amp;\n    _this.scaleX += _this.scaleAdd;\n    _this.scaleY += _this.scaleAdd;\n\n    _this.onUpdate.add(function () {\n      _this.amp *= -0.9;\n      _this.scaleAdd *= 0.9;\n\n      if (Math.abs(_this.amp) < 1) {\n        _this.amp = 0;\n        _this.scaleAdd = 0;\n\n        _this.onUpdate.removeAll();\n\n        _this.onEndAnimation.fire();\n      }\n\n      _this.x = 80 + _this.amp;\n      _this.scaleX = 1 + _this.scaleAdd;\n      _this.scaleY = 1 + _this.scaleAdd;\n\n      _this.modified();\n    });\n\n    return _this;\n  }\n\n  return GameOverSprite;\n}(g.Sprite);\n\n//# sourceURL=webpack:///./src/views/GameOverSprite/GameOverSprite.ts?");

/***/ }),

/***/ "./src/views/GameOverSprite/index.ts":
/*!*******************************************!*\
  !*** ./src/views/GameOverSprite/index.ts ***!
  \*******************************************/
/*! exports provided: GameOverSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GameOverSprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameOverSprite */ \"./src/views/GameOverSprite/GameOverSprite.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GameOverSprite\", function() { return _GameOverSprite__WEBPACK_IMPORTED_MODULE_0__[\"GameOverSprite\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/GameOverSprite/index.ts?");

/***/ }),

/***/ "./src/views/HoppingWitch/HoppingWitch.ts":
/*!************************************************!*\
  !*** ./src/views/HoppingWitch/HoppingWitch.ts ***!
  \************************************************/
/*! exports provided: HoppingWitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HoppingWitch\", function() { return HoppingWitch; });\n/* harmony import */ var _constants_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/settings */ \"./src/constants/settings.ts\");\n/* harmony import */ var _models_GameCore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/GameCore */ \"./src/models/GameCore.ts\");\n/* harmony import */ var _BackgroundSprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BackgroundSprite */ \"./src/views/BackgroundSprite/index.ts\");\n/* harmony import */ var _GameFont__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GameFont */ \"./src/views/GameFont/index.ts\");\n/* harmony import */ var _MapTile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MapTile */ \"./src/views/MapTile/index.ts\");\n/* harmony import */ var _PlayerSprite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PlayerSprite */ \"./src/views/PlayerSprite/index.ts\");\n/* harmony import */ var _ResultUI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ResultUI */ \"./src/views/ResultUI/index.ts\");\n/* harmony import */ var _ScoreLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ScoreLabel */ \"./src/views/ScoreLabel/index.ts\");\n/* harmony import */ var _TitleUI__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../TitleUI */ \"./src/views/TitleUI/index.ts\");\n/* harmony import */ var _VersionLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../VersionLabel */ \"./src/views/VersionLabel/index.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\n\n\n\nvar HoppingWitch = /*#__PURE__*/function (_g$E) {\n  _inherits(HoppingWitch, _g$E);\n\n  var _super = _createSuper(HoppingWitch);\n\n  function HoppingWitch(_ref) {\n    var _this;\n\n    var scene = _ref.scene;\n\n    _classCallCheck(this, HoppingWitch);\n\n    _this = _super.call(this, {\n      scene: scene\n    });\n    _this.font = void 0;\n    _this.gameCore = void 0;\n    _this.font = new _GameFont__WEBPACK_IMPORTED_MODULE_3__[\"GameFont\"]({\n      scene: scene\n    });\n    _this.gameCore = new _models_GameCore__WEBPACK_IMPORTED_MODULE_1__[\"GameCore\"]({\n      fps: scene.game.fps,\n      gameData: {\n        width: scene.game.width,\n        height: scene.game.height\n      },\n      mapData: JSON.parse(scene.asset.getTextById('map_data').data),\n      playerData: {\n        x: scene.game.width / 2,\n        y: scene.game.height / 2,\n        width: scene.asset.getImageById('player').width,\n        height: scene.asset.getImageById('player').height\n      }\n    });\n    var background = new _BackgroundSprite__WEBPACK_IMPORTED_MODULE_2__[\"BackgroundSprite\"]({\n      scene: scene\n    });\n\n    _this.append(background);\n\n    var mapTile = new _MapTile__WEBPACK_IMPORTED_MODULE_4__[\"MapTile\"]({\n      scene: scene\n    });\n\n    _this.append(mapTile);\n\n    var player = new _PlayerSprite__WEBPACK_IMPORTED_MODULE_5__[\"PlayerSprite\"]({\n      scene: scene,\n      hidden: true\n    });\n\n    _this.append(player);\n\n    var currentScoreLabel = new _ScoreLabel__WEBPACK_IMPORTED_MODULE_7__[\"ScoreLabel\"]({\n      scene: scene,\n      x: 4,\n      y: 4,\n      font: _this.font,\n      prefix: 'SCORE'\n    });\n\n    _this.append(currentScoreLabel);\n\n    var hightScoreLabel = new _ScoreLabel__WEBPACK_IMPORTED_MODULE_7__[\"ScoreLabel\"]({\n      scene: scene,\n      y: 4,\n      prefix: 'HI'\n    });\n    hightScoreLabel.x = scene.game.width - (_constants_settings__WEBPACK_IMPORTED_MODULE_0__[\"FONT_SIZE\"] * hightScoreLabel.text.length + 4);\n\n    _this.append(hightScoreLabel);\n\n    var versionLabel = new _VersionLabel__WEBPACK_IMPORTED_MODULE_9__[\"VersionLabel\"]({\n      scene: scene,\n      font: _this.font,\n      y: scene.game.height - (_constants_settings__WEBPACK_IMPORTED_MODULE_0__[\"FONT_SIZE\"] + 4)\n    });\n    versionLabel.x = scene.game.width - (_constants_settings__WEBPACK_IMPORTED_MODULE_0__[\"FONT_SIZE\"] * versionLabel.text.length + 4);\n\n    _this.append(versionLabel);\n\n    var titleUI = new _TitleUI__WEBPACK_IMPORTED_MODULE_8__[\"TitleUI\"]({\n      scene: scene\n    });\n    titleUI.onClickStartButton.add(function () {\n      _this.gameCore.start();\n\n      titleUI.destroy();\n    });\n\n    _this.append(titleUI);\n\n    _this.onUpdate.add(function () {\n      var prevState = _this.gameCore.state; // ゲーム状態更新\n\n      _this.gameCore.update(); // プレイヤーキャラの描画位置など更新\n\n\n      if (_this.gameCore.pc) {\n        player.show();\n        player.x = _this.gameCore.pc.x.x;\n        player.y = _this.gameCore.pc.x.y;\n        player.scaleX = _this.gameCore.scrollSpeed >= 0 ? 1 : -1;\n        player.modified();\n      } else {\n        player.hide();\n      } // スコア描画更新\n\n\n      currentScoreLabel.score = _this.gameCore.score;\n      hightScoreLabel.score = Math.max(hightScoreLabel.score, _this.gameCore.score); // タイル位置更新\n\n      mapTile.x = -_this.gameCore.scroll;\n      mapTile.modified(); // バージョンラベル表示状態更新\n\n      _this.gameCore.state === 'title' ? versionLabel.show() : versionLabel.hide();\n\n      if (prevState !== 'result' && _this.gameCore.state === 'result') {\n        var resultUI = new _ResultUI__WEBPACK_IMPORTED_MODULE_6__[\"ResultUI\"]({\n          scene: scene\n        });\n        resultUI.onClickBackButton.add(function () {\n          _this.gameCore.reset();\n\n          resultUI.destroy();\n          var titleUI = new _TitleUI__WEBPACK_IMPORTED_MODULE_8__[\"TitleUI\"]({\n            scene: scene\n          });\n          titleUI.onClickStartButton.add(function () {\n            _this.gameCore.start();\n\n            titleUI.destroy();\n          });\n\n          _this.append(titleUI);\n        });\n\n        _this.append(resultUI);\n      }\n    });\n\n    return _this;\n  }\n\n  _createClass(HoppingWitch, [{\n    key: \"hopPlayer\",\n    value: function hopPlayer() {\n      if (this.gameCore.state === 'playing') {\n        this.gameCore.touched = true;\n      }\n    }\n  }]);\n\n  return HoppingWitch;\n}(g.E);\n\n//# sourceURL=webpack:///./src/views/HoppingWitch/HoppingWitch.ts?");

/***/ }),

/***/ "./src/views/HoppingWitch/index.ts":
/*!*****************************************!*\
  !*** ./src/views/HoppingWitch/index.ts ***!
  \*****************************************/
/*! exports provided: HoppingWitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HoppingWitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HoppingWitch */ \"./src/views/HoppingWitch/HoppingWitch.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"HoppingWitch\", function() { return _HoppingWitch__WEBPACK_IMPORTED_MODULE_0__[\"HoppingWitch\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/HoppingWitch/index.ts?");

/***/ }),

/***/ "./src/views/MapTile/MapTile.ts":
/*!**************************************!*\
  !*** ./src/views/MapTile/MapTile.ts ***!
  \**************************************/
/*! exports provided: MapTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MapTile\", function() { return MapTile; });\n/* harmony import */ var _akashic_extension_akashic_tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @akashic-extension/akashic-tile */ \"./node_modules/@akashic-extension/akashic-tile/lib/index.js\");\n/* harmony import */ var _akashic_extension_akashic_tile__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_akashic_extension_akashic_tile__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/settings */ \"./src/constants/settings.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar mapData = __webpack_require__(/*! ../../../game/text/map_data.json */ \"./game/text/map_data.json\");\n\nvar MapTile = /*#__PURE__*/function (_Tile) {\n  _inherits(MapTile, _Tile);\n\n  var _super = _createSuper(MapTile);\n\n  function MapTile(_ref) {\n    var scene = _ref.scene,\n        x = _ref.x,\n        y = _ref.y;\n\n    _classCallCheck(this, MapTile);\n\n    return _super.call(this, {\n      scene: scene,\n      x: x,\n      y: y,\n      src: scene.asset.getImageById(\"map\"),\n      tileWidth: _constants_settings__WEBPACK_IMPORTED_MODULE_1__[\"TILE_WIDTH\"],\n      tileHeight: _constants_settings__WEBPACK_IMPORTED_MODULE_1__[\"TILE_HEIGHT\"],\n      tileData: mapData\n    });\n  }\n\n  return MapTile;\n}(_akashic_extension_akashic_tile__WEBPACK_IMPORTED_MODULE_0__[\"Tile\"]);\n\n//# sourceURL=webpack:///./src/views/MapTile/MapTile.ts?");

/***/ }),

/***/ "./src/views/MapTile/index.ts":
/*!************************************!*\
  !*** ./src/views/MapTile/index.ts ***!
  \************************************/
/*! exports provided: MapTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MapTile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MapTile */ \"./src/views/MapTile/MapTile.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MapTile\", function() { return _MapTile__WEBPACK_IMPORTED_MODULE_0__[\"MapTile\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/MapTile/index.ts?");

/***/ }),

/***/ "./src/views/PlayerSprite/PlayerSprite.ts":
/*!************************************************!*\
  !*** ./src/views/PlayerSprite/PlayerSprite.ts ***!
  \************************************************/
/*! exports provided: PlayerSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerSprite\", function() { return PlayerSprite; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar PlayerSprite = /*#__PURE__*/function (_g$Sprite) {\n  _inherits(PlayerSprite, _g$Sprite);\n\n  var _super = _createSuper(PlayerSprite);\n\n  function PlayerSprite(_ref) {\n    var scene = _ref.scene,\n        x = _ref.x,\n        y = _ref.y,\n        hidden = _ref.hidden;\n\n    _classCallCheck(this, PlayerSprite);\n\n    return _super.call(this, {\n      scene: scene,\n      src: scene.asset.getImageById(\"player\"),\n      x: x,\n      y: y,\n      hidden: hidden\n    });\n  }\n\n  return PlayerSprite;\n}(g.Sprite);\n\n//# sourceURL=webpack:///./src/views/PlayerSprite/PlayerSprite.ts?");

/***/ }),

/***/ "./src/views/PlayerSprite/index.ts":
/*!*****************************************!*\
  !*** ./src/views/PlayerSprite/index.ts ***!
  \*****************************************/
/*! exports provided: PlayerSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PlayerSprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlayerSprite */ \"./src/views/PlayerSprite/PlayerSprite.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PlayerSprite\", function() { return _PlayerSprite__WEBPACK_IMPORTED_MODULE_0__[\"PlayerSprite\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/PlayerSprite/index.ts?");

/***/ }),

/***/ "./src/views/ResultUI/ResultUI.ts":
/*!****************************************!*\
  !*** ./src/views/ResultUI/ResultUI.ts ***!
  \****************************************/
/*! exports provided: ResultUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResultUI\", function() { return ResultUI; });\n/* harmony import */ var _BackButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BackButton */ \"./src/views/BackButton/index.ts\");\n/* harmony import */ var _GameOverSprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GameOverSprite */ \"./src/views/GameOverSprite/index.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar ResultUI = /*#__PURE__*/function (_g$E) {\n  _inherits(ResultUI, _g$E);\n\n  var _super = _createSuper(ResultUI);\n\n  function ResultUI(params) {\n    var _this;\n\n    _classCallCheck(this, ResultUI);\n\n    _this = _super.call(this, params);\n    _this.onClickBackButton = new g.Trigger();\n    var backButton = new _BackButton__WEBPACK_IMPORTED_MODULE_0__[\"BackButton\"]({\n      scene: _this.scene,\n      x: 192,\n      y: 272\n    });\n    backButton.onPointUp.add(function () {\n      backButton.touchable = false;\n      backButton.modified();\n\n      _this.scene.setTimeout(function () {\n        return _this.onClickBackButton.fire();\n      }, 100);\n    });\n    var gameOverSprite = new _GameOverSprite__WEBPACK_IMPORTED_MODULE_1__[\"GameOverSprite\"]({\n      scene: _this.scene,\n      x: 80,\n      y: 160\n    });\n    gameOverSprite.onEndAnimation.add(function () {\n      return _this.append(backButton);\n    });\n\n    _this.append(gameOverSprite);\n\n    return _this;\n  }\n\n  return ResultUI;\n}(g.E);\n\n//# sourceURL=webpack:///./src/views/ResultUI/ResultUI.ts?");

/***/ }),

/***/ "./src/views/ResultUI/index.ts":
/*!*************************************!*\
  !*** ./src/views/ResultUI/index.ts ***!
  \*************************************/
/*! exports provided: ResultUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ResultUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResultUI */ \"./src/views/ResultUI/ResultUI.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ResultUI\", function() { return _ResultUI__WEBPACK_IMPORTED_MODULE_0__[\"ResultUI\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/ResultUI/index.ts?");

/***/ }),

/***/ "./src/views/ScoreLabel/ScoreLabel.ts":
/*!********************************************!*\
  !*** ./src/views/ScoreLabel/ScoreLabel.ts ***!
  \********************************************/
/*! exports provided: ScoreLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScoreLabel\", function() { return ScoreLabel; });\n/* harmony import */ var _constants_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/settings */ \"./src/constants/settings.ts\");\n/* harmony import */ var _utils_makeScoreText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/makeScoreText */ \"./src/utils/makeScoreText.ts\");\n/* harmony import */ var _GameFont__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GameFont */ \"./src/views/GameFont/index.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar ScoreLabel = /*#__PURE__*/function (_g$Label) {\n  _inherits(ScoreLabel, _g$Label);\n\n  var _super = _createSuper(ScoreLabel);\n\n  function ScoreLabel(_ref) {\n    var _this;\n\n    var scene = _ref.scene,\n        font = _ref.font,\n        x = _ref.x,\n        y = _ref.y,\n        score = _ref.score,\n        prefix = _ref.prefix;\n\n    _classCallCheck(this, ScoreLabel);\n\n    _this = _super.call(this, {\n      scene: scene,\n      text: \"\",\n      font: font !== null && font !== void 0 ? font : new _GameFont__WEBPACK_IMPORTED_MODULE_2__[\"GameFont\"]({\n        scene: scene\n      }),\n      fontSize: _constants_settings__WEBPACK_IMPORTED_MODULE_0__[\"FONT_SIZE\"],\n      x: x,\n      y: y\n    });\n    _this.prefix = void 0;\n    _this._score = void 0;\n    _this.prefix = prefix;\n    _this._score = score !== null && score !== void 0 ? score : 0;\n    _this.score = _this._score;\n    return _this;\n  }\n\n  _createClass(ScoreLabel, [{\n    key: \"score\",\n    get: function get() {\n      return this._score;\n    },\n    set: function set(score) {\n      this._score = score;\n      this.text = Object(_utils_makeScoreText__WEBPACK_IMPORTED_MODULE_1__[\"makeScoreText\"])(score, this.prefix);\n      this.invalidate();\n    }\n  }]);\n\n  return ScoreLabel;\n}(g.Label);\n\n//# sourceURL=webpack:///./src/views/ScoreLabel/ScoreLabel.ts?");

/***/ }),

/***/ "./src/views/ScoreLabel/index.ts":
/*!***************************************!*\
  !*** ./src/views/ScoreLabel/index.ts ***!
  \***************************************/
/*! exports provided: ScoreLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ScoreLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScoreLabel */ \"./src/views/ScoreLabel/ScoreLabel.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ScoreLabel\", function() { return _ScoreLabel__WEBPACK_IMPORTED_MODULE_0__[\"ScoreLabel\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/ScoreLabel/index.ts?");

/***/ }),

/***/ "./src/views/StartButton/StartButton.ts":
/*!**********************************************!*\
  !*** ./src/views/StartButton/StartButton.ts ***!
  \**********************************************/
/*! exports provided: StartButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StartButton\", function() { return StartButton; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar StartButton = /*#__PURE__*/function (_g$Sprite) {\n  _inherits(StartButton, _g$Sprite);\n\n  var _super = _createSuper(StartButton);\n\n  function StartButton(_ref) {\n    var _this;\n\n    var scene = _ref.scene,\n        x = _ref.x,\n        y = _ref.y;\n\n    _classCallCheck(this, StartButton);\n\n    _this = _super.call(this, {\n      scene: scene,\n      src: scene.asset.getImageById(\"button_start\"),\n      x: x,\n      y: y,\n      touchable: true\n    });\n\n    _this.onPointDown.add(function () {\n      _this.x += 4;\n      _this.y += 4;\n\n      _this.modified();\n    });\n\n    _this.onPointUp.add(function () {\n      _this.x -= 4;\n      _this.y -= 4;\n\n      _this.modified();\n    });\n\n    return _this;\n  }\n\n  return StartButton;\n}(g.Sprite);\n\n//# sourceURL=webpack:///./src/views/StartButton/StartButton.ts?");

/***/ }),

/***/ "./src/views/StartButton/index.ts":
/*!****************************************!*\
  !*** ./src/views/StartButton/index.ts ***!
  \****************************************/
/*! exports provided: StartButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _StartButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StartButton */ \"./src/views/StartButton/StartButton.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"StartButton\", function() { return _StartButton__WEBPACK_IMPORTED_MODULE_0__[\"StartButton\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/StartButton/index.ts?");

/***/ }),

/***/ "./src/views/TitleSprite/TitleSprite.ts":
/*!**********************************************!*\
  !*** ./src/views/TitleSprite/TitleSprite.ts ***!
  \**********************************************/
/*! exports provided: TitleSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TitleSprite\", function() { return TitleSprite; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar TitleSprite = /*#__PURE__*/function (_g$Sprite) {\n  _inherits(TitleSprite, _g$Sprite);\n\n  var _super = _createSuper(TitleSprite);\n\n  function TitleSprite(_ref) {\n    var _this;\n\n    var scene = _ref.scene,\n        x = _ref.x,\n        y = _ref.y;\n\n    _classCallCheck(this, TitleSprite);\n\n    _this = _super.call(this, {\n      scene: scene,\n      x: x,\n      y: y,\n      src: scene.asset.getImageById(\"title\")\n    });\n    _this.counter = 0;\n    var initialY = y !== null && y !== void 0 ? y : 0;\n\n    _this.onUpdate.add(function () {\n      _this.counter = (_this.counter + 1) % 180;\n      _this.y = initialY - 24 * Math.abs(Math.sin(5 * _this.counter / 180 * Math.PI));\n\n      _this.modified();\n    });\n\n    return _this;\n  }\n\n  return TitleSprite;\n}(g.Sprite);\n\n//# sourceURL=webpack:///./src/views/TitleSprite/TitleSprite.ts?");

/***/ }),

/***/ "./src/views/TitleSprite/index.ts":
/*!****************************************!*\
  !*** ./src/views/TitleSprite/index.ts ***!
  \****************************************/
/*! exports provided: TitleSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TitleSprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TitleSprite */ \"./src/views/TitleSprite/TitleSprite.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TitleSprite\", function() { return _TitleSprite__WEBPACK_IMPORTED_MODULE_0__[\"TitleSprite\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/TitleSprite/index.ts?");

/***/ }),

/***/ "./src/views/TitleUI/TitleUI.ts":
/*!**************************************!*\
  !*** ./src/views/TitleUI/TitleUI.ts ***!
  \**************************************/
/*! exports provided: TitleUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TitleUI\", function() { return TitleUI; });\n/* harmony import */ var _StartButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../StartButton */ \"./src/views/StartButton/index.ts\");\n/* harmony import */ var _TitleSprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TitleSprite */ \"./src/views/TitleSprite/index.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar TitleUI = /*#__PURE__*/function (_g$E) {\n  _inherits(TitleUI, _g$E);\n\n  var _super = _createSuper(TitleUI);\n\n  function TitleUI(params) {\n    var _this;\n\n    _classCallCheck(this, TitleUI);\n\n    _this = _super.call(this, params);\n    _this.onClickStartButton = new g.Trigger();\n    var title = new _TitleSprite__WEBPACK_IMPORTED_MODULE_1__[\"TitleSprite\"]({\n      scene: _this.scene,\n      x: 128,\n      y: 112\n    });\n\n    _this.append(title);\n\n    var startButton = new _StartButton__WEBPACK_IMPORTED_MODULE_0__[\"StartButton\"]({\n      scene: _this.scene,\n      x: 192,\n      y: 272\n    });\n    startButton.onPointUp.add(function () {\n      startButton.touchable = false;\n      startButton.modified();\n\n      _this.scene.setTimeout(function () {\n        return _this.onClickStartButton.fire();\n      }, 100);\n    });\n\n    _this.append(startButton);\n\n    return _this;\n  }\n\n  return TitleUI;\n}(g.E);\n\n//# sourceURL=webpack:///./src/views/TitleUI/TitleUI.ts?");

/***/ }),

/***/ "./src/views/TitleUI/index.ts":
/*!************************************!*\
  !*** ./src/views/TitleUI/index.ts ***!
  \************************************/
/*! exports provided: TitleUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TitleUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TitleUI */ \"./src/views/TitleUI/TitleUI.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TitleUI\", function() { return _TitleUI__WEBPACK_IMPORTED_MODULE_0__[\"TitleUI\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/TitleUI/index.ts?");

/***/ }),

/***/ "./src/views/VersionLabel/VersionLabel.ts":
/*!************************************************!*\
  !*** ./src/views/VersionLabel/VersionLabel.ts ***!
  \************************************************/
/*! exports provided: VersionLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VersionLabel\", function() { return VersionLabel; });\n/* harmony import */ var _constants_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/settings */ \"./src/constants/settings.ts\");\n/* harmony import */ var _GameFont__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GameFont */ \"./src/views/GameFont/index.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar VersionLabel = /*#__PURE__*/function (_g$Label) {\n  _inherits(VersionLabel, _g$Label);\n\n  var _super = _createSuper(VersionLabel);\n\n  function VersionLabel(_ref) {\n    var _this;\n\n    var scene = _ref.scene,\n        font = _ref.font,\n        x = _ref.x,\n        y = _ref.y;\n\n    _classCallCheck(this, VersionLabel);\n\n    _this = _super.call(this, {\n      scene: scene,\n      text: \"\",\n      font: font !== null && font !== void 0 ? font : new _GameFont__WEBPACK_IMPORTED_MODULE_1__[\"GameFont\"]({\n        scene: scene\n      }),\n      fontSize: _constants_settings__WEBPACK_IMPORTED_MODULE_0__[\"FONT_SIZE\"],\n      x: x,\n      y: y\n    });\n    _this.text = \"ver \".concat(scene.asset.getTextById(\"version\").data.replace(/[\\r\\n]/g, \"\"));\n\n    _this.invalidate();\n\n    return _this;\n  }\n\n  return VersionLabel;\n}(g.Label);\n\n//# sourceURL=webpack:///./src/views/VersionLabel/VersionLabel.ts?");

/***/ }),

/***/ "./src/views/VersionLabel/index.ts":
/*!*****************************************!*\
  !*** ./src/views/VersionLabel/index.ts ***!
  \*****************************************/
/*! exports provided: VersionLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _VersionLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VersionLabel */ \"./src/views/VersionLabel/VersionLabel.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"VersionLabel\", function() { return _VersionLabel__WEBPACK_IMPORTED_MODULE_0__[\"VersionLabel\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/VersionLabel/index.ts?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/yugo_tanaka/workspace/storybook-akashic-demo/src/main.ts */\"./src/main.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/main.ts?");

/***/ })

/******/ });
});