/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
 * Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Please note that some portions of this project are written by third parties
 * under different license terms. Your use of those portions are governed by
 * the license terms contained in the corresponding files.
 */
/**
 * Returns an object with following members:
 * {Object} updateItemAction: Creates the JSON that describes the POST action for editing the text of the item
 * {Object} destroyItemAction: Creates the JSON that describes the POST action for removing the item
 * {Object} toggleItemAction: Creates the JSON that describes the POST action for marking the item as complete or active
 */
console.log(foobar);
use(function () {
    'use strict';
    var model = {};
    /**
     * Generates JSON for the POST action to edit the text of the item.
     */
    function updateItemAction() {
        return JSON.stringify({
            path: String(resource.path),
            data: {
                '_charset_': 'utf-8'
            },
            // The key of the payload value that has to be added.
            append: 'jcr:title'
        });
    }
    /**
     * Generates the JSON for the POST action to remove the item.
     */
    function destroyItemAction() {
        return JSON.stringify({
            path: String(resource.path),
            data: {
                ':operation': 'delete'
            }
        });
    }
    /**
     * Generates the JSON for the POST action to mark the item as complete or active.
     */
    function toggleItemAction() {
        return JSON.stringify({
            path: String(resource.path),
            data: {
                'completed@TypeHint': 'Boolean'
            },
            // The key of the payload value that has to be added
            append: 'completed'
        });
    }
    // The JSON for the POST request of the various actions
    model.updateItemAction = updateItemAction();
    model.destroyItemAction = destroyItemAction();
    model.toggleItemAction = toggleItemAction();
    return model;
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// package/lib is a dependency we require
// behavior for our module
function foo() {
    console.log("hello world!");
}
// export (expose) foo to other modules as foobar
/* harmony default export */ __webpack_exports__["default"] = (foobar = foo);
// behavior for our module
function foo() {
    lib.log("hello world!");
}


/***/ })
/******/ ]);