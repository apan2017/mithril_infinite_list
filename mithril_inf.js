/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar isFn = exports.isFn = function isFn(obj) {\n  return Object.prototype.toString.call(obj) === '[object Function]';\n};\n\nvar hasOwnProperty = exports.hasOwnProperty = function hasOwnProperty(obj, key) {\n  return Object.prototype.hasOwnProperty.call(obj, key);\n};\n\nvar extend = exports.extend = function extend() {\n  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  var target = args[0];\n  var sources = args.slice(1);\n\n  for (var i = 0; i < sources.length; i++) {\n    var source = sources[i];\n\n    for (var k in source) {\n      target[k] = source[k];\n    }\n  }\n\n  return target;\n};\n\nvar raf = exports.raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdXRpbC5qcz8zNGE2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpc0ZuID0gb2JqID0+IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBGdW5jdGlvbl0nXHJcblxyXG5leHBvcnQgY29uc3QgaGFzT3duUHJvcGVydHkgPSAob2JqLCBrZXkpID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcclxuXHJcbmV4cG9ydCBjb25zdCBleHRlbmQgPSAoLi4uYXJncykgPT4ge1xyXG4gIGNvbnN0IHRhcmdldCA9IGFyZ3NbMF1cclxuICBjb25zdCBzb3VyY2VzID0gYXJncy5zbGljZSgxKVxyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzW2ldXHJcblxyXG4gICAgZm9yICh2YXIgayBpbiBzb3VyY2UpIHtcclxuICAgICAgdGFyZ2V0W2tdID0gc291cmNlW2tdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGFyZ2V0XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmFmID1cclxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3V0aWwuanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./src/placeholder.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _event = __webpack_require__(/*! ./event.js */ 3);\n\nvar oninit = function oninit(vnode) {\n  var state = vnode.state;\n  var attrs = vnode.attrs;\n\n  state.style = {\n    height: 0,\n    visibility: 'hidden',\n    textAlign: 'center'\n  };\n};\n\nvar oncreate = function oncreate(vnode) {\n  var state = vnode.state;\n  var style = state.style;\n\n  (0, _event.on)('fetch:before', function () {\n    style.visibility = 'visible';\n    style.height = 'inherit';\n    m.redraw();\n  });\n\n  (0, _event.on)('fetch:after', function () {\n    style.visibility = 'hidden';\n    style.height = 0;\n    m.redraw();\n  });\n};\n\nvar view = function view(vnode) {\n  var attrs = vnode.attrs;\n\n  return m('div', { style: vnode.state.style }, attrs.loadingText);\n};\n\nexports.default = {\n  oninit: oninit,\n  oncreate: oncreate,\n  view: view\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcGxhY2Vob2xkZXIuanM/OTAzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge29uLCBmaXJlfSBmcm9tICcuL2V2ZW50LmpzJ1xyXG5cclxuY29uc3Qgb25pbml0ID0gdm5vZGUgPT4ge1xyXG4gIGNvbnN0IHN0YXRlID0gdm5vZGUuc3RhdGVcclxuICBjb25zdCBhdHRycyA9IHZub2RlLmF0dHJzXHJcblxyXG4gIHN0YXRlLnN0eWxlID0ge1xyXG4gICAgaGVpZ2h0OiAwLFxyXG4gICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBvbmNyZWF0ZSA9IHZub2RlID0+IHtcclxuICBjb25zdCBzdGF0ZSA9IHZub2RlLnN0YXRlXHJcbiAgY29uc3Qgc3R5bGUgPSBzdGF0ZS5zdHlsZVxyXG5cclxuICBvbignZmV0Y2g6YmVmb3JlJywgKCkgPT4ge1xyXG4gICAgc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xyXG4gICAgc3R5bGUuaGVpZ2h0ID0gJ2luaGVyaXQnXHJcbiAgICBtLnJlZHJhdygpXHJcbiAgfSlcclxuXHJcbiAgb24oJ2ZldGNoOmFmdGVyJywgKCkgPT4ge1xyXG4gICAgc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXHJcbiAgICBzdHlsZS5oZWlnaHQgPSAwXHJcbiAgICBtLnJlZHJhdygpXHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgdmlldyA9IHZub2RlID0+IHtcclxuICBjb25zdCBhdHRycyA9IHZub2RlLmF0dHJzXHJcblxyXG4gIHJldHVybiBtKCdkaXYnLCB7c3R5bGU6IHZub2RlLnN0YXRlLnN0eWxlfSwgYXR0cnMubG9hZGluZ1RleHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBvbmluaXQsXHJcbiAgb25jcmVhdGUsXHJcbiAgdmlld1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9wbGFjZWhvbGRlci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _placeholder = __webpack_require__(/*! ./placeholder.js */ 1);\n\nvar _placeholder2 = _interopRequireDefault(_placeholder);\n\nvar _util = __webpack_require__(/*! ./util.js */ 0);\n\nvar _event = __webpack_require__(/*! ./event.js */ 3);\n\nvar _list = __webpack_require__(/*! ./list.js */ 4);\n\nvar _list2 = _interopRequireDefault(_list);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar DEFAULT = {\n  rootTag: 'ul',\n  list: [],\n  cursor: 1,\n  step: 1,\n  triggerDistance: 200,\n  loadingText: 'loading...',\n  item: function item() {\n    throw new Error('You must declare `item` function.');\n  },\n  fetch: function fetch() {\n    throw new Error('You must declare `fetch` function.');\n  },\n  afterFetch: function afterFetch(promose, list) {\n    promose.then(function (data) {\n      for (var i = 0; i < data.length; i++) {\n        list.push(data[i]);\n      }\n    });\n  }\n};\n\nvar oninit = function oninit(vnode) {\n  (0, _util.extend)(vnode.state, DEFAULT, vnode.attrs);\n};\n\nvar oncreate = function oncreate(vnode) {\n  var state = vnode.state;\n  state.onscroll = function () {\n    (0, _util.raf)(function () {\n      (0, _event.fire)('onscroll');\n    });\n  };\n  window.addEventListener('scroll', state.onscroll);\n};\n\nvar view = function view(vnode) {\n  var state = vnode.state;\n\n  return [m(_list2.default, { options: state }), m(_placeholder2.default, {\n    loadingText: state.loadingText\n  })];\n};\n\nvar onremove = function onremove(vnode) {\n  window.removeEventListener('scroll', vnode.state.onscroll);\n};\n\nvar infList = {\n  oninit: oninit,\n  oncreate: oncreate,\n  view: view,\n  onremove: onremove\n};\n\nwindow.infList = infList;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGxhY2Vob2xkZXIgZnJvbSAnLi9wbGFjZWhvbGRlci5qcydcclxuaW1wb3J0IHtleHRlbmQsIHJhZn0gZnJvbSAnLi91dGlsLmpzJ1xyXG5pbXBvcnQge29uLCBmaXJlfSBmcm9tICcuL2V2ZW50LmpzJ1xyXG5pbXBvcnQgbGlzdCBmcm9tICcuL2xpc3QuanMnXHJcblxyXG5jb25zdCBERUZBVUxUID0ge1xyXG4gIHJvb3RUYWc6ICd1bCcsXHJcbiAgbGlzdDogW10sXHJcbiAgY3Vyc29yOiAxLFxyXG4gIHN0ZXA6IDEsXHJcbiAgdHJpZ2dlckRpc3RhbmNlOiAyMDAsXHJcbiAgbG9hZGluZ1RleHQ6ICdsb2FkaW5nLi4uJyxcclxuICBpdGVtOiAoKSA9PiB7IHRocm93IG5ldyBFcnJvcignWW91IG11c3QgZGVjbGFyZSBgaXRlbWAgZnVuY3Rpb24uJykgfSxcclxuICBmZXRjaDogKCkgPT4geyB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IGRlY2xhcmUgYGZldGNoYCBmdW5jdGlvbi4nKSB9LFxyXG4gIGFmdGVyRmV0Y2g6IChwcm9tb3NlLCBsaXN0KSA9PiB7XHJcbiAgICBwcm9tb3NlLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxpc3QucHVzaChkYXRhW2ldKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgb25pbml0ID0gdm5vZGUgPT4ge1xyXG4gIGV4dGVuZCh2bm9kZS5zdGF0ZSwgREVGQVVMVCwgdm5vZGUuYXR0cnMpXHJcbn1cclxuXHJcbmNvbnN0IG9uY3JlYXRlID0gdm5vZGUgPT4ge1xyXG4gIGNvbnN0IHN0YXRlID0gdm5vZGUuc3RhdGVcclxuICBzdGF0ZS5vbnNjcm9sbCA9ICgpID0+IHtcclxuICAgIHJhZigoKSA9PiB7XHJcbiAgICAgIGZpcmUoJ29uc2Nyb2xsJylcclxuICAgIH0pXHJcbiAgfVxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzdGF0ZS5vbnNjcm9sbClcclxufVxyXG5cclxuY29uc3QgdmlldyA9IHZub2RlID0+IHtcclxuICBjb25zdCBzdGF0ZSA9IHZub2RlLnN0YXRlXHJcblxyXG4gIHJldHVybiBbXHJcbiAgICBtKGxpc3QsIHtvcHRpb25zOiBzdGF0ZX0pLFxyXG4gICAgbShwbGFjZWhvbGRlciwge1xyXG4gICAgICBsb2FkaW5nVGV4dDogc3RhdGUubG9hZGluZ1RleHRcclxuICAgIH0pXHJcbiAgXVxyXG59XHJcblxyXG5jb25zdCBvbnJlbW92ZSA9IHZub2RlID0+IHtcclxuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdm5vZGUuc3RhdGUub25zY3JvbGwpXHJcbn1cclxuXHJcbmNvbnN0IGluZkxpc3QgPSB7XHJcbiAgb25pbml0LFxyXG4gIG9uY3JlYXRlLFxyXG4gIHZpZXcsXHJcbiAgb25yZW1vdmVcclxufVxyXG5cclxud2luZG93LmluZkxpc3QgPSBpbmZMaXN0XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQUNBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.fire = exports.on = undefined;\n\nvar _util = __webpack_require__(/*! ./util.js */ 0);\n\nvar _queue = {};\n\nvar on = exports.on = function on(event, callback) {\n  _queue[event] = _queue[event] || [];\n  _queue[event].push(callback);\n};\n\nvar fire = exports.fire = function fire(event) {\n  (0, _util.raf)(function () {\n    var events = _queue[event] = _queue[event] || [];\n    for (var i = 0; i < events.length; i++) {\n      events[i]();\n    }\n  });\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZXZlbnQuanM/MDMxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3JhZn0gZnJvbSAnLi91dGlsLmpzJ1xyXG5cclxuY29uc3QgX3F1ZXVlID0ge31cclxuXHJcbmV4cG9ydCBjb25zdCBvbiA9IChldmVudCwgY2FsbGJhY2spID0+IHtcclxuICBfcXVldWVbZXZlbnRdID0gX3F1ZXVlW2V2ZW50XSB8fCBbXVxyXG4gIF9xdWV1ZVtldmVudF0ucHVzaChjYWxsYmFjaylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZpcmUgPSAoZXZlbnQpID0+IHtcclxuICByYWYoKCkgPT4ge1xyXG4gICAgY29uc3QgZXZlbnRzID0gX3F1ZXVlW2V2ZW50XSA9IF9xdWV1ZVtldmVudF0gfHwgW11cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGV2ZW50c1tpXSgpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2V2ZW50LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _util = __webpack_require__(/*! ./util.js */ 0);\n\nvar _event = __webpack_require__(/*! ./event.js */ 3);\n\nvar fetch = function fetch(vnode) {\n  var options = vnode.attrs.options;\n  (0, _event.fire)('fetch:before');\n  var promise = options.fetch(options.cursor);\n  options.afterFetch(promise, options.list);\n  promise.then(function () {\n    options.cursor += options.step;\n  }).then(function () {\n    (0, _event.fire)('fetch:after');\n  });\n\n  return promise;\n};\n\nvar checkBoundAndFetch = function checkBoundAndFetch(vnode) {\n  var bound = vnode.dom.getBoundingClientRect();\n  var winHeight = window.innerHeight;\n\n  if (bound.bottom - winHeight < vnode.attrs.options.triggerDistance) {\n    vnode.state.isLoading = true;\n    fetch(vnode).then(function () {\n      return vnode.state.isLoading = false;\n    });\n  }\n};\n\nvar fetchEnoughData = function fetchEnoughData(vnode) {\n  fetch(vnode).then(function () {\n    setTimeout(function () {\n      if (vnode.dom.getBoundingClientRect().bottom - window.innerHeight < vnode.attrs.options.triggerDistance) {\n        fetchEnoughData(vnode);\n      }\n    }, 0);\n  });\n};\n\nvar _onmousedown = function _onmousedown(e, vnode) {\n  vnode.state.mouseStatus = 'down';\n};\n\nvar _onmouseup = function _onmouseup(e, vnode) {\n  vnode.state.mouseStatus = 'up';\n  vnode.state.mouseY = 0;\n};\n\nvar _onmousemove = function _onmousemove(e, vnode) {\n  (0, _util.raf)(function () {\n    if (vnode.state.mouseStatus === 'up') return;\n    if (e.pageY <= vnode.state.mouseY) return;\n\n    vnode.state.mouseY = e.pageY;\n  });\n};\n\nvar initMouseMove = function initMouseMove(vnode) {\n  vnode.state.mouseStatus = 'up';\n  vnode.state.mouseY = 0;\n  vnode.state.mouseEvents = {\n    onmousedown: function onmousedown(e) {\n      return _onmousedown(e, vnode);\n    },\n    onmouseup: function onmouseup(e) {\n      return _onmouseup(e, vnode);\n    },\n    onmousemove: function onmousemove(e) {\n      return _onmousemove(e, vnode);\n    }\n  };\n};\n\nvar oninit = function oninit(vnode) {\n  vnode.state.isLoading = false;\n  initMouseMove(vnode);\n};\n\nvar oncreate = function oncreate(vnode) {\n  fetchEnoughData(vnode);\n\n  (0, _event.on)('onscroll', function () {\n    if (vnode.state.isLoading) return;\n    checkBoundAndFetch(vnode);\n  });\n};\n\nvar view = function view(vnode) {\n  var state = vnode.state;\n  var options = vnode.attrs.options;\n\n  return m(options.rootTag, state.mouseEvents, options.list.map(function (data, index) {\n    return options.item(data, index);\n  }));\n};\n\nexports.default = {\n  oninit: oninit,\n  oncreate: oncreate,\n  view: view\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbGlzdC5qcz9jNmYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZXh0ZW5kLCByYWZ9IGZyb20gJy4vdXRpbC5qcydcclxuaW1wb3J0IHtvbiwgZmlyZX0gZnJvbSAnLi9ldmVudC5qcydcclxuXHJcbmNvbnN0IGZldGNoID0gdm5vZGUgPT4ge1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB2bm9kZS5hdHRycy5vcHRpb25zXHJcbiAgZmlyZSgnZmV0Y2g6YmVmb3JlJylcclxuICBjb25zdCBwcm9taXNlID0gb3B0aW9ucy5mZXRjaChvcHRpb25zLmN1cnNvcilcclxuICBvcHRpb25zLmFmdGVyRmV0Y2gocHJvbWlzZSwgb3B0aW9ucy5saXN0KVxyXG4gIHByb21pc2VcclxuICAudGhlbigoKSA9PiB7XHJcbiAgICBvcHRpb25zLmN1cnNvciArPSBvcHRpb25zLnN0ZXBcclxuICB9KVxyXG4gIC50aGVuKCgpID0+IHtcclxuICAgIGZpcmUoJ2ZldGNoOmFmdGVyJylcclxuICB9KVxyXG5cclxuICByZXR1cm4gcHJvbWlzZVxyXG59XHJcblxyXG5jb25zdCBjaGVja0JvdW5kQW5kRmV0Y2ggPSB2bm9kZSA9PiB7XHJcbiAgY29uc3QgYm91bmQgPSB2bm9kZS5kb20uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICBjb25zdCB3aW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICBcclxuICBpZiAoYm91bmQuYm90dG9tIC0gd2luSGVpZ2h0IDwgdm5vZGUuYXR0cnMub3B0aW9ucy50cmlnZ2VyRGlzdGFuY2UpIHtcclxuICAgIHZub2RlLnN0YXRlLmlzTG9hZGluZyA9IHRydWVcclxuICAgIGZldGNoKHZub2RlKS50aGVuKCgpID0+IHZub2RlLnN0YXRlLmlzTG9hZGluZyA9IGZhbHNlKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZmV0Y2hFbm91Z2hEYXRhID0gdm5vZGUgPT4ge1xyXG4gIGZldGNoKHZub2RlKS5cclxuICB0aGVuKCgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodm5vZGUuZG9tLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSAtIHdpbmRvdy5pbm5lckhlaWdodCA8IHZub2RlLmF0dHJzLm9wdGlvbnMudHJpZ2dlckRpc3RhbmNlKSB7XHJcbiAgICAgICAgZmV0Y2hFbm91Z2hEYXRhKHZub2RlKVxyXG4gICAgICB9XHJcbiAgICB9LCAwKVxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IG9ubW91c2Vkb3duID0gKGUsIHZub2RlKSA9PiB7XHJcbiAgdm5vZGUuc3RhdGUubW91c2VTdGF0dXMgPSAnZG93bidcclxufVxyXG5cclxuY29uc3Qgb25tb3VzZXVwID0gKGUsIHZub2RlKSA9PiB7XHJcbiAgdm5vZGUuc3RhdGUubW91c2VTdGF0dXMgPSAndXAnXHJcbiAgdm5vZGUuc3RhdGUubW91c2VZID0gMFxyXG59XHJcblxyXG5jb25zdCBvbm1vdXNlbW92ZSA9IChlLCB2bm9kZSkgPT4ge1xyXG4gIHJhZigoKSA9PiB7XHJcbiAgICBpZiAodm5vZGUuc3RhdGUubW91c2VTdGF0dXMgPT09ICd1cCcpIHJldHVyblxyXG4gICAgaWYgKGUucGFnZVkgPD0gdm5vZGUuc3RhdGUubW91c2VZKSByZXR1cm5cclxuXHJcblxyXG4gICAgdm5vZGUuc3RhdGUubW91c2VZID0gZS5wYWdlWVxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IGluaXRNb3VzZU1vdmUgPSB2bm9kZSA9PiB7XHJcbiAgdm5vZGUuc3RhdGUubW91c2VTdGF0dXMgPSAndXAnXHJcbiAgdm5vZGUuc3RhdGUubW91c2VZID0gMFxyXG4gIHZub2RlLnN0YXRlLm1vdXNlRXZlbnRzID0ge1xyXG4gICAgb25tb3VzZWRvd246IGUgPT4gb25tb3VzZWRvd24oZSwgdm5vZGUpLFxyXG4gICAgb25tb3VzZXVwOiBlID0+IG9ubW91c2V1cChlLCB2bm9kZSksXHJcbiAgICBvbm1vdXNlbW92ZTogZSA9PiBvbm1vdXNlbW92ZShlLCB2bm9kZSlcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG9uaW5pdCA9IHZub2RlID0+IHtcclxuICB2bm9kZS5zdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZVxyXG4gIGluaXRNb3VzZU1vdmUodm5vZGUpXHJcbn1cclxuXHJcbmNvbnN0IG9uY3JlYXRlID0gdm5vZGUgPT4ge1xyXG4gIGZldGNoRW5vdWdoRGF0YSh2bm9kZSlcclxuXHJcbiAgb24oJ29uc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgaWYgKHZub2RlLnN0YXRlLmlzTG9hZGluZykgcmV0dXJuXHJcbiAgICBjaGVja0JvdW5kQW5kRmV0Y2godm5vZGUpXHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgdmlldyA9IHZub2RlID0+IHtcclxuICBjb25zdCBzdGF0ZSA9IHZub2RlLnN0YXRlXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHZub2RlLmF0dHJzLm9wdGlvbnNcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgbShvcHRpb25zLnJvb3RUYWcsXHJcbiAgICAgIHN0YXRlLm1vdXNlRXZlbnRzLFxyXG4gICAgICBvcHRpb25zLmxpc3QubWFwKChkYXRhLCBpbmRleCkgPT4gb3B0aW9ucy5pdGVtKGRhdGEsIGluZGV4KSlcclxuICAgIClcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBvbmluaXQsXHJcbiAgb25jcmVhdGUsXHJcbiAgdmlld1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvbGlzdC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);