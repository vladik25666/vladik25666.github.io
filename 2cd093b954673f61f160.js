/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./Config.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Config.js":
/*!*******************!*\
  !*** ./Config.js ***!
  \*******************/
/*! exports provided: game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"game\", function() { return game; });\n/* harmony import */ var _scenes_MainWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenes/MainWindow */ \"./scenes/MainWindow.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"../node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst config = {\n    type: phaser__WEBPACK_IMPORTED_MODULE_1___default.a.AUTO,\n    parent: 'main',\n    scale: {\n        mode: phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Scale.FIT,\n        autoCenter: phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Scale.CENTER_BOTH,\n        width: 960,\n        height: 960,\n    },\n    audio: {\n        disableWebAudio: false\n    },\n    dom: {\n        createContainer: false\n    },\n    scene: [_scenes_MainWindow__WEBPACK_IMPORTED_MODULE_0__[\"MainWindow\"]]\n};\n\nconst game = new phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Game(config);\n\n\n//# sourceURL=webpack:///./Config.js?");

/***/ }),

/***/ "./scenes/MainWindow.js":
/*!******************************!*\
  !*** ./scenes/MainWindow.js ***!
  \******************************/
/*! exports provided: MainWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MainWindow\", function() { return MainWindow; });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"../node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _webfont__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webfont */ \"./webfont.js\");\n/* harmony import */ var _webfont__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_webfont__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass MainWindow extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene {\n    constructor() {\n        super('MainWindow');\n\n        /** Ширина */\n        this._w = 540;\n        /** Высота */\n        this._h = 960;\n        /** Размер ячейки */\n        this._cellSize = 90;\n        /** Отступ снизу */\n        this._paddingBottom = 20;\n        /** Отступ слева */\n        this._paddingLeft = 30;\n\n        this.fieldMatrix = [\n            [3, 4, 5, 6, 7, 1, 9, 1, 1, 7],\n            [1, 2, 1, 3, 4, 9, 9, 5, 1, 4],\n            [6, 1, 2, 3, 7, 3, 1, 5, 2, 7],\n\n            [4, 4, 6, 5, 8, 8, 9, 5, 2, 8],\n            [1, 3, 5, 4, 1, 1, 5, 6, 1, 1],\n            [7, 1, 2, 1, 7, 7, 4, 5, 6, 7],\n\n            [7, 8, 9, 1, 1, 3, 3, 1, 3, 1],\n            [1, 4, 1, 5, 1, 6, 1, 7, 1, 1],\n            [8, 1, 9, 1, 8, 4, 5, 7, 8, 3],\n        ];\n\n        this.fieldNumbersAlpha = [\n            [false, true, false, false, false, true, false, false, false, false],\n            [false, false, true, true, false, true, true, false, false, false],\n            [false, false, true, true, false, false, false, true, false, false],\n\n            [true, true, true, false, true, true, false, true, true, true],\n            [false, true, true, false, false, false, true, true, true, true],\n            [true, true, true, true, true, true, true, true, true, true],\n\n            [false, true, true, true, false, true, true, true, true, false],\n            [false, true, false, true, false, true, true, false, true, false],\n            [true, false, false, false, false, false, false, false, true, false],\n        ];\n\n        this.couples = [\n            [{ x: 0, y: 3 }, { x: 1, y: 3 }],\n            [{ x: 3, y: 1 }, { x: 3, y: 2 }],\n            [{ x: 5, y: 1 }, { x: 6, y: 1 }],\n            [{ x: 4, y: 3 }, { x: 5, y: 3 }],\n            [{ x: 7, y: 2 }, { x: 7, y: 3 }],\n            [{ x: 8, y: 4 }, { x: 9, y: 4 }],\n            [{ x: 3, y: 5 }, { x: 3, y: 6 }],\n            [{ x: 4, y: 5 }, { x: 5, y: 5 }],\n            [{ x: 5, y: 6 }, { x: 6, y: 6 }],\n        ];\n    }\n\n    preload() {\n        this.load.atlas('atlas', 'assets/assets.png', 'assets/assets.json');\n        this.input.mouse.disableContextMenu();\n    }\n\n    loadFonts() {\n        return new Promise(resolve => {\n            _webfont__WEBPACK_IMPORTED_MODULE_1___default.a.load({\n                custom: {\n                    families: ['Regular', 'Black', 'ExtraBold']\n                },\n                active() {\n                    resolve()\n                }\n            });\n        });\n    }\n\n    async create() {\n        await this.loadFonts();\n\n        this._mainContainer = this.add.container(0, 0);\n\n        /** Фон */\n        const bg = this.add.sprite(0, 0, \"atlas\", \"bg.png\").setOrigin(0);\n        this._mainContainer.add(bg);\n\n        /** Рисуем клетки */\n        this.drawLines();\n        this.createNumbers();\n\n        /** Свечение */\n        const glow = this.add.image(-this._w * 0.5, -this._h * 0.5, \"atlas\", \"glow.png\").setOrigin(0);\n        this._mainContainer.add(glow);\n\n        /** Шапка */\n        this.createHead();\n\n        window.addEventListener('orientationchange', () => {\n            this.orientationChanged().then(() => this.checkOrientation());\n        });\n        this.checkOrientation();\n\n        this.runAnimation();\n    }\n\n    orientationChanged() {\n        const timeout = 120;\n        return new window.Promise(resolve => {\n            const go = (i, height0) => {\n                window.innerHeight !== height0 || i >= timeout ?\n                    resolve() :\n                    window.requestAnimationFrame(() => go(i + 1, height0));\n            };\n            go(0, window.innerHeight);\n        });\n    }\n\n    createHead() {\n        this._verticalHead = this.add.image(0, 0, \"atlas\", \"vertical_head.png\").setOrigin(0);\n        this._horizontalHead = this.add.image(0, -75, \"atlas\", \"horizontal_head.png\").setOrigin(0);\n\n        this._firstTitlePart = this.add.text(0, 0, \"Cross out \", { fontFamily: \"ExtraBold\", fontSize: 52 });\n        this._firstTitlePart.setPosition(-this._firstTitlePart.width * 0.5, 0);\n\n        this._secondTitlePart = this.add.text(0, 0, \"the same numbers\", { fontFamily: \"Black\", fontSize: 52 });\n        this._secondTitlePart.setPosition(-this._secondTitlePart.width * 0.5, 40);\n\n        this._titleContainer = this.add.container(0, 0, [this._firstTitlePart, this._secondTitlePart]);\n    }\n\n    createNumbers() {\n        const length = this.fieldMatrix.length - 1;\n\n        this.fieldMatrix.forEach((array, indexY) => {\n            array.forEach((number, indexX) => {\n                const img = this.add.image(\n                    (indexX + 0.5) * this._cellSize + this._paddingLeft,\n                    (this._h + this._paddingBottom) - ((length - indexY) + 0.5) * this._cellSize,\n                    \"atlas\",\n                    `${number}.png`,\n                );\n                img.setAlpha(this.fieldNumbersAlpha[indexY][indexX] ? 1 : 0.15);\n                this.fieldMatrix[indexY][indexX] = { img };\n\n                this._mainContainer.add(img);\n            });\n        });\n\n        this.couples.forEach(array => {\n            array.forEach(object => {\n                const cell = this.add.sprite(\n                    (object.x + 0.5) * this._cellSize + this._paddingLeft,\n                    (this._h + this._paddingBottom) - ((length - object.y) + 0.5) * this._cellSize,\n                    \"atlas\",\n                    \"cell_selected.png\",\n                ).setAlpha(0);\n                this._mainContainer.add(cell);\n\n                this.fieldMatrix[object.y][object.x].cell = cell;\n            });\n        });\n    }\n\n    /** Массив чисел и ячеек расположенных в пределах видимости */\n    get numbersWithinTheScreen() {\n        const isWithinTheScreen = (x, y) => {\n            return x > 0 && x < this.scale.width && y > this._horizontalHead.height + this._horizontalHead.y && y < this.scale.height;\n        };\n\n        const array = this.couples.map(array => array.map(object => this.fieldMatrix[object.y][object.x])).flat(1);\n        const filterArray = [];\n\n        for (let i = 0; i < array.length - 1; i += 2) {\n            const { x: x1, y: y1 } = array[i].img.getBounds();\n            const { x: x2, y: y2 } = array[i + 1].img.getBounds();\n\n            if (isWithinTheScreen(x1, y1) && isWithinTheScreen(x2, y2)) {\n                filterArray.push(array[i], array[i + 1])\n            }\n        }\n\n        return filterArray;\n    }\n\n    runCellsOpacity(cell, alpha) {\n        this.tweens.add({\n            targets: cell,\n            alpha,\n            ease: 'Circ.easeOut',\n            duration: 400,\n        })\n    }\n\n    runAnimation() {\n        const filterArray = this.numbersWithinTheScreen;\n        const clearPreviousCells = () => filterArray.forEach(child => this.runCellsOpacity(child.cell, 0));\n        const showNextCells = (child, index) => {\n            if (index % 2 === 0) {\n                clearPreviousCells();\n\n                this.runCellsOpacity(child.cell, 1)\n                this.runCellsOpacity(filterArray[index + 1].cell, 1)\n            }\n        };\n\n        filterArray.forEach((child, index) => {\n            this.tweens.add({\n                targets: child.img,\n                scaleX: 1.4,\n                scaleY: 1.4,\n                ease: 'Circ.easeOut',\n                duration: 400,\n                delay: index * 1000,\n                repeat: -1,\n                yoyo: true,\n                repeatDelay: filterArray.length * 1000,\n\n                onStart() {\n                    showNextCells(child, index);\n                },\n                onRepeat() {\n                    showNextCells(child, index);\n                }\n            });\n        });\n    }\n\n    drawLines() {\n        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x42156f } });\n        this._mainContainer.add(graphics);\n\n        /** Рисуем вертикальные линии */\n        for (let col = 0; col < Math.ceil(this._h / this._cellSize); col++) {\n            const x = col * this._cellSize + 30;\n            const line = new phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Geom.Line(x, 0, x, this._h);\n            graphics.strokeLineShape(line);\n        }\n\n        /** Рисуем горизонтальные линии */\n        for (let row = Math.ceil(this._h / this._cellSize); row > 0; row--) {\n            const y = (this._h + 20) - row * this._cellSize;\n            const line = new phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Geom.Line(0, y, this._h, y);\n            graphics.strokeLineShape(line);\n        }\n    }\n\n    alignHead() {\n        if (window.innerHeight > window.innerWidth) {\n            this._horizontalHead.setVisible(false);\n            this._verticalHead.setVisible(true);\n\n            this._firstTitlePart.setPosition(-Math.floor(this._firstTitlePart.width * 0.5), 0);\n            this._secondTitlePart.setPosition(-Math.floor(this._secondTitlePart.width * 0.5), 40);\n            this._titleContainer.setPosition(\n                Math.floor(this._w * 0.5),\n                Math.floor((this._verticalHead.height - this._titleContainer.getBounds().height) * 0.5),\n            );\n        } else {\n            this._horizontalHead.setVisible(true);\n            this._verticalHead.setVisible(false);\n\n            this._firstTitlePart.setPosition(0, 0);\n            this._secondTitlePart.setPosition(Math.floor(this._firstTitlePart.width), 0);\n            this._titleContainer.setPosition(\n                Math.floor((this._horizontalHead.width - this._titleContainer.getBounds().width) * 0.5),\n                Math.floor(((this._horizontalHead.height + this._horizontalHead.y) - this._titleContainer.getBounds().height) * 0.5),\n            );\n        }\n    }\n\n    checkOrientation() {\n        const offset = -(this._h - this._w) * 0.5;\n\n        if (window.innerHeight > window.innerWidth) {\n            this.scale.setGameSize(this._w, this._h);\n            this._mainContainer.setPosition(offset, 0);\n        } else {\n            this.scale.setGameSize(this._h, this._w);\n            this._mainContainer.setPosition(0, offset);\n        }\n\n        this.alignHead();\n    }\n}\n\n\n\n\n\n//# sourceURL=webpack:///./scenes/MainWindow.js?");

/***/ }),

/***/ "./webfont.js":
/*!********************!*\
  !*** ./webfont.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;/*\n * Copyright 2016 Small Batch, Inc.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\"); you may not\n * use this file except in compliance with the License. You may obtain a copy of\n * the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS, WITHOUT\n * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the\n * License for the specific language governing permissions and limitations under\n * the License.\n */\n/* Web Font Loader v1.6.26 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf(\"native code\")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.m=b||a;this.c=this.m.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&(\"style\"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}\nfunction w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(\" \").replace(/\\s+/g,\" \").replace(/^\\s+|\\s+$/,\"\")}function y(a,b){for(var c=a.className.split(/\\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}\nfunction z(a){if(\"string\"===typeof a.f)return a.f;var b=a.m.location.protocol;\"about:\"==b&&(b=a.a.location.protocol);return\"https:\"==b?\"https:\":\"http:\"}function ea(a){return a.m.location.hostname||a.a.location.hostname}\nfunction A(a,b,c){function d(){k&&e&&f&&(k(g),k=null)}b=t(a,\"link\",{rel:\"stylesheet\",href:b,media:\"all\"});var e=!1,f=!0,g=null,k=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error(\"Stylesheet failed to load\");d()}):setTimeout(function(){e=!0;d()},0);u(a,\"head\",b)}\nfunction B(a,b,c,d){var e=a.c.getElementsByTagName(\"head\")[0];if(e){var f=t(a,\"script\",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&\"loaded\"!=this.readyState&&\"complete\"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,\"HEAD\"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error(\"Script load timeout\")))},d||5E3);return f}return null};function C(){this.a=0;this.c=null}function D(a){a.a++;return function(){a.a--;E(a)}}function F(a,b){a.c=b;E(a)}function E(a){0==a.a&&a.c&&(a.c(),a.c=null)};function G(a){this.a=a||\"-\"}G.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\\W_]+/g,\"\").toLowerCase());return b.join(this.a)};function H(a,b){this.c=a;this.f=4;this.a=\"n\";var c=(b||\"n4\").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return I(a)+\" \"+(a.f+\"00\")+\" 300px \"+J(a.c)}function J(a){var b=[];a=a.split(/,\\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['\"]/g,\"\");-1!=d.indexOf(\" \")||/^\\d/.test(d)?b.push(\"'\"+d+\"'\"):b.push(d)}return b.join(\",\")}function K(a){return a.a+a.f}function I(a){var b=\"normal\";\"o\"===a.a?b=\"oblique\":\"i\"===a.a&&(b=\"italic\");return b}\nfunction ga(a){var b=4,c=\"n\",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.m.document.documentElement;this.h=b;this.a=new G(\"-\");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c(\"wf\",\"loading\")]);L(a,\"loading\")}function M(a){if(a.g){var b=y(a.f,a.a.c(\"wf\",\"active\")),c=[],d=[a.a.c(\"wf\",\"loading\")];b||c.push(a.a.c(\"wf\",\"inactive\"));w(a.f,c,d)}L(a,\"inactive\")}function L(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,K(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function N(a,b){this.c=a;this.f=b;this.a=t(this.c,\"span\",{\"aria-hidden\":\"true\"},this.f)}function O(a){u(a.c,\"body\",a.a)}function P(a){return\"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:\"+J(a.c)+\";\"+(\"font-style:\"+I(a)+\";font-weight:\"+(a.f+\"00\")+\";\")};function Q(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}Q.prototype.start=function(){var a=this.c.m.document,b=this,c=q(),d=new Promise(function(d,e){function k(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(k,25)},function(){e()})}k()}),e=new Promise(function(a,d){setTimeout(d,b.f)});Promise.race([e,d]).then(function(){b.g(b.a)},function(){b.j(b.a)})};function R(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||\"BESbswy\";this.f={};this.w=e||3E3;this.u=f||null;this.o=this.j=this.h=this.g=null;this.g=new N(this.c,this.s);this.h=new N(this.c,this.s);this.j=new N(this.c,this.s);this.o=new N(this.c,this.s);a=new H(this.a.c+\",serif\",K(this.a));a=P(a);this.g.a.style.cssText=a;a=new H(this.a.c+\",sans-serif\",K(this.a));a=P(a);this.h.a.style.cssText=a;a=new H(\"serif\",K(this.a));a=P(a);this.j.a.style.cssText=a;a=new H(\"sans-serif\",K(this.a));a=\nP(a);this.o.a.style.cssText=a;O(this.g);O(this.h);O(this.j);O(this.o)}var S={D:\"serif\",C:\"sans-serif\"},T=null;function U(){if(null===T){var a=/AppleWebKit\\/([0-9]+)(?:\\.([0-9]+))/.exec(window.navigator.userAgent);T=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return T}R.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f[\"sans-serif\"]=this.o.a.offsetWidth;this.A=q();la(this)};\nfunction ma(a,b,c){for(var d in S)if(S.hasOwnProperty(d)&&b===a.f[S[d]]&&c===a.f[S[d]])return!0;return!1}function la(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f[\"sans-serif\"])||(d=U()&&ma(a,b,c));d?q()-a.A>=a.w?U()&&ma(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):na(a):V(a,a.v)}function na(a){setTimeout(p(function(){la(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.o.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.o=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c(\"wf\",a.c,K(a).toString(),\"active\")],[b.a.c(\"wf\",a.c,K(a).toString(),\"loading\"),b.a.c(\"wf\",a.c,K(a).toString(),\"inactive\")]);L(b,\"fontactive\",a);this.o=!0;oa(this)};\nW.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c(\"wf\",a.c,K(a).toString(),\"active\")),d=[],e=[b.a.c(\"wf\",a.c,K(a).toString(),\"loading\")];c||d.push(b.a.c(\"wf\",a.c,K(a).toString(),\"inactive\"));w(b.f,d,e)}L(b,\"fontinactive\",a);oa(this)};function oa(a){0==--a.f&&a.j&&(a.o?(a=a.a,a.g&&w(a.f,[a.a.c(\"wf\",\"active\")],[a.a.c(\"wf\",\"loading\"),a.a.c(\"wf\",\"inactive\")]),L(a,\"active\")):M(a.a))};function pa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}pa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;qa(this,new ha(this.c,a),a)};\nfunction ra(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,k=d||null||{};if(0===c.length&&f)M(b.a);else{b.f+=c.length;f&&(b.j=f);var h,m=[];for(h=0;h<c.length;h++){var l=c[h],n=k[l.c],r=b.a,x=l;r.g&&w(r.f,[r.a.c(\"wf\",x.c,K(x).toString(),\"loading\")]);L(r,\"fontloading\",x);r=null;null===X&&(X=window.FontFace?(x=/Gecko.*Firefox\\/(\\d+)/.exec(window.navigator.userAgent))?42<parseInt(x[1],10):!0:!1);X?r=new Q(p(b.g,b),p(b.h,b),b.c,l,b.s,n):r=new R(p(b.g,b),p(b.h,b),b.c,l,b.s,a,\nn);m.push(r)}for(h=0;h<m.length;h++)m[h].start()}},0)}function qa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){ra(a,f,b,d,c)})};function sa(a,b){this.c=a;this.a=b}function ta(a,b,c){var d=z(a.c);a=(a.a.api||\"fast.fonts.net/jsapi\").replace(/^.*http(s?):(\\/\\/)?/,\"\");return d+\"//\"+a+\"/\"+b+\".js\"+(c?\"?v=\"+c:\"\")}\nsa.prototype.load=function(a){function b(){if(f[\"__mti_fntLst\"+d]){var c=f[\"__mti_fntLst\"+d](),e=[],h;if(c)for(var m=0;m<c.length;m++){var l=c[m].fontfamily;void 0!=c[m].fontStyle&&void 0!=c[m].fontWeight?(h=c[m].fontStyle+c[m].fontWeight,e.push(new H(l,h))):e.push(new H(l))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.m;B(this.c,ta(c,d,e),function(e){e?a([]):(f[\"__MonotypeConfiguration__\"+d]=function(){return c.a},b())}).id=\"__MonotypeAPIScript__\"+\nd}else a([])};function ua(a,b){this.c=a;this.a=b}ua.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new C;b=0;for(c=d.length;b<c;b++)A(this.c,d[b],D(g));var k=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(\":\"),d[1])for(var h=d[1].split(\",\"),m=0;m<h.length;m+=1)k.push(new H(d[0],h[m]));else k.push(new H(d[0]));F(g,function(){a(k,f)})};function va(a,b,c){a?this.c=a:this.c=b+wa;this.a=[];this.f=[];this.g=c||\"\"}var wa=\"//fonts.googleapis.com/css\";function xa(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(\":\");3==e.length&&a.f.push(e.pop());var f=\"\";2==e.length&&\"\"!=e[1]&&(f=\":\");a.a.push(e.join(f))}}\nfunction ya(a){if(0==a.a.length)throw Error(\"No fonts to load!\");if(-1!=a.c.indexOf(\"kit=\"))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,\"+\"));b=a.c+\"?family=\"+c.join(\"%7C\");0<a.f.length&&(b+=\"&subset=\"+a.f.join(\",\"));0<a.g.length&&(b+=\"&text=\"+encodeURIComponent(a.g));return b};function za(a){this.f=a;this.a=[];this.c={}}\nvar Aa={latin:\"BESbswy\",\"latin-ext\":\"\\u00e7\\u00f6\\u00fc\\u011f\\u015f\",cyrillic:\"\\u0439\\u044f\\u0416\",greek:\"\\u03b1\\u03b2\\u03a3\",khmer:\"\\u1780\\u1781\\u1782\",Hanuman:\"\\u1780\\u1781\\u1782\"},Ba={thin:\"1\",extralight:\"2\",\"extra-light\":\"2\",ultralight:\"2\",\"ultra-light\":\"2\",light:\"3\",regular:\"4\",book:\"4\",medium:\"5\",\"semi-bold\":\"6\",semibold:\"6\",\"demi-bold\":\"6\",demibold:\"6\",bold:\"7\",\"extra-bold\":\"8\",extrabold:\"8\",\"ultra-bold\":\"8\",ultrabold:\"8\",black:\"9\",heavy:\"9\",l:\"3\",r:\"4\",b:\"7\"},Ca={i:\"i\",italic:\"i\",n:\"n\",normal:\"n\"},\nDa=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;\nfunction Ea(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(\":\"),e=d[0].replace(/\\+/g,\" \"),f=[\"n4\"];if(2<=d.length){var g;var k=d[1];g=[];if(k)for(var k=k.split(\",\"),h=k.length,m=0;m<h;m++){var l;l=k[m];if(l.match(/^[\\w-]+$/)){var n=Da.exec(l.toLowerCase());if(null==n)l=\"\";else{l=n[2];l=null==l||\"\"==l?\"n\":Ca[l];n=n[1];if(null==n||\"\"==n)n=\"4\";else var r=Ba[n],n=r?r:isNaN(n)?\"4\":n.substr(0,1);l=[l,n].join(\"\")}}else l=\"\";l&&g.push(l)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(\",\"):\ng,0<d.length&&(d=Aa[d[0]])&&(a.c[e]=d))}a.c[e]||(d=Aa[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new H(e,f[d]))}};function Fa(a,b){this.c=a;this.a=b}var Ga={Arimo:!0,Cousine:!0,Tinos:!0};Fa.prototype.load=function(a){var b=new C,c=this.c,d=new va(this.a.api,z(c),this.a.text),e=this.a.families;xa(d,e);var f=new za(e);Ea(f);A(c,ya(d),D(b));F(b,function(){a(f.a,f.c,Ga)})};function Ha(a,b){this.c=a;this.a=b}Ha.prototype.load=function(a){var b=this.a.id,c=this.c.m;b?B(this.c,(this.a.api||\"https://use.typekit.net\")+\"/\"+b+\".js\",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],k=b[f+1],h=0;h<k.length;h++)e.push(new H(g,k[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(m){}a(e)}},2E3):a([])};function Ia(a,b){this.c=a;this.f=b;this.a=[]}Ia.prototype.load=function(a){var b=this.f.id,c=this.c.m,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,k=c.fonts.length;g<k;++g){var h=c.fonts[g];d.a.push(new H(h.name,ga(\"font-weight:\"+h.weight+\";font-style:\"+h.style)))}a(d.a)},B(this.c,z(this.c)+(this.f.api||\"//f.fontdeck.com/s/css/js/\")+ea(this.c)+\"/\"+b+\".js\",function(b){b&&a([])})):a([])};var Y=new pa(window);Y.a.c.custom=function(a,b){return new ua(b,a)};Y.a.c.fontdeck=function(a,b){return new Ia(b,a)};Y.a.c.monotype=function(a,b){return new sa(b,a)};Y.a.c.typekit=function(a,b){return new Ha(b,a)};Y.a.c.google=function(a,b){return new Fa(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Z}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}());\n\n\n//# sourceURL=webpack:///./webfont.js?");

/***/ })

/******/ });