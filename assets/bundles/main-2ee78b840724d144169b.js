/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 181);
/******/ })
/************************************************************************/
/******/ ({

/***/ 181:
/***/ function(module, exports) {

throw new Error("Module build failed: SyntaxError: Expected corresponding JSX closing tag for <p> (30:21)\n\n\u001b[0m \u001b[90m 28 | \u001b[39m                        \u001b[33m<\u001b[39m\u001b[33mh4\u001b[39m\u001b[33m>\u001b[39m\u001b[33mAuthor\u001b[39m\u001b[33m:\u001b[39m {book\u001b[33m.\u001b[39mauthor}\n \u001b[90m 29 | \u001b[39m                        \u001b[33m<\u001b[39m\u001b[33mp\u001b[39m\u001b[33m>\u001b[39m\u001b[33mTitle\u001b[39m\u001b[33m:\u001b[39m {book\u001b[33m.\u001b[39mtitle} \u001b[33m<\u001b[39m\u001b[33mp\u001b[39m\u001b[33m>\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 30 | \u001b[39m                     \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mli\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m    | \u001b[39m                     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 31 | \u001b[39m            })\n \u001b[90m 32 | \u001b[39m        }\n \u001b[90m 33 | \u001b[39m        \u001b[36mreturn\u001b[39m (\u001b[0m\n");

/***/ }

/******/ });