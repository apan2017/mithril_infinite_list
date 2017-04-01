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
eval("\n\nvar _placeholder = __webpack_require__(/*! ./placeholder.js */ 1);\n\nvar _placeholder2 = _interopRequireDefault(_placeholder);\n\nvar _util = __webpack_require__(/*! ./util.js */ 0);\n\nvar _event = __webpack_require__(/*! ./event.js */ 3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar DEFAULT = {\n  rootTag: 'ul',\n  list: [],\n  cursor: 1,\n  step: 1,\n  triggerDistance: 200,\n  loadingText: 'loading...',\n  item: function item() {\n    throw new Error('You must declare `item` function.');\n  },\n  fetch: function fetch() {\n    throw new Error('You must declare `fetch` function.');\n  },\n  afterFetch: function afterFetch(promose, list) {\n    promose.then(function (data) {\n      for (var i = 0; i < data.length; i++) {\n        list.push(data[i]);\n      }\n    });\n  }\n};\n\nvar fetch = function fetch(state) {\n  (0, _event.fire)('fetch:before');\n  var promise = state.fetch(state.cursor);\n  state.afterFetch(promise, state.list);\n  promise.then(function () {\n    state.cursor += state.step;\n  }).then(function () {\n    (0, _event.fire)('fetch:after');\n  });\n\n  return promise;\n};\n\nvar checkBoundAndFetch = function checkBoundAndFetch(vnode) {\n  var bound = vnode.dom.getBoundingClientRect();\n  var winHeight = window.innerHeight;\n\n  if (bound.bottom - winHeight < vnode.state.triggerDistance) {\n    vnode.state.isLoading = true;\n    fetch(vnode.state).then(function () {\n      return vnode.state.isLoading = false;\n    });\n  }\n};\n\nvar fetchEnoughData = function fetchEnoughData(vnode) {\n  fetch(vnode.state).then(function () {\n    setTimeout(function () {\n      if (vnode.dom.getBoundingClientRect().bottom - window.innerHeight < vnode.state.triggerDistance) {\n        fetchEnoughData(vnode);\n      }\n    }, 0);\n  });\n};\n\nvar oninit = function oninit(vnode) {\n  var attrs = vnode.attrs;\n  var state = vnode.state;\n\n  (0, _util.extend)(state, DEFAULT, attrs);\n  state.isLoading = false;\n};\n\nvar oncreate = function oncreate(vnode) {\n  var state = vnode.state;\n\n  state.onscroll = function () {\n    (0, _util.raf)(function () {\n      if (state.isLoading) return;\n      checkBoundAndFetch(vnode);\n    });\n  };\n  window.addEventListener('scroll', state.onscroll);\n\n  fetchEnoughData(vnode);\n};\n\nvar view = function view(vnode) {\n  var state = vnode.state;\n\n  return [m(state.rootTag, state.list.map(function (data, index) {\n    return state.item(data, index);\n  })), m(_placeholder2.default, {\n    loadingText: state.loadingText\n  })];\n};\n\nvar onremove = function onremove(vnode) {\n  window.removeEventListener('scroll', vnode.state.onscroll);\n};\n\nvar infList = {\n  oninit: oninit,\n  oncreate: oncreate,\n  view: view,\n  onremove: onremove\n};\n\nwindow.infList = infList;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGxhY2Vob2xkZXIgZnJvbSAnLi9wbGFjZWhvbGRlci5qcydcclxuaW1wb3J0IHtleHRlbmQsIHJhZn0gZnJvbSAnLi91dGlsLmpzJ1xyXG5pbXBvcnQge29uLCBmaXJlfSBmcm9tICcuL2V2ZW50LmpzJ1xyXG5cclxuY29uc3QgREVGQVVMVCA9IHtcclxuICByb290VGFnOiAndWwnLFxyXG4gIGxpc3Q6IFtdLFxyXG4gIGN1cnNvcjogMSxcclxuICBzdGVwOiAxLFxyXG4gIHRyaWdnZXJEaXN0YW5jZTogMjAwLFxyXG4gIGxvYWRpbmdUZXh0OiAnbG9hZGluZy4uLicsXHJcbiAgaXRlbTogKCkgPT4geyB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IGRlY2xhcmUgYGl0ZW1gIGZ1bmN0aW9uLicpIH0sXHJcbiAgZmV0Y2g6ICgpID0+IHsgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBkZWNsYXJlIGBmZXRjaGAgZnVuY3Rpb24uJykgfSxcclxuICBhZnRlckZldGNoOiAocHJvbW9zZSwgbGlzdCkgPT4ge1xyXG4gICAgcHJvbW9zZS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsaXN0LnB1c2goZGF0YVtpXSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGZldGNoID0gc3RhdGUgPT4ge1xyXG4gIGZpcmUoJ2ZldGNoOmJlZm9yZScpXHJcbiAgY29uc3QgcHJvbWlzZSA9IHN0YXRlLmZldGNoKHN0YXRlLmN1cnNvcilcclxuICBzdGF0ZS5hZnRlckZldGNoKHByb21pc2UsIHN0YXRlLmxpc3QpXHJcbiAgcHJvbWlzZVxyXG4gIC50aGVuKCgpID0+IHtcclxuICAgIHN0YXRlLmN1cnNvciArPSBzdGF0ZS5zdGVwXHJcbiAgfSlcclxuICAudGhlbigoKSA9PiB7XHJcbiAgICBmaXJlKCdmZXRjaDphZnRlcicpXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIHByb21pc2VcclxufVxyXG5cclxuY29uc3QgY2hlY2tCb3VuZEFuZEZldGNoID0gdm5vZGUgPT4ge1xyXG4gIGNvbnN0IGJvdW5kID0gdm5vZGUuZG9tLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgY29uc3Qgd2luSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XHJcbiAgXHJcbiAgaWYgKGJvdW5kLmJvdHRvbSAtIHdpbkhlaWdodCA8IHZub2RlLnN0YXRlLnRyaWdnZXJEaXN0YW5jZSkge1xyXG4gICAgdm5vZGUuc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZVxyXG4gICAgZmV0Y2godm5vZGUuc3RhdGUpLnRoZW4oKCkgPT4gdm5vZGUuc3RhdGUuaXNMb2FkaW5nID0gZmFsc2UpXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBmZXRjaEVub3VnaERhdGEgPSB2bm9kZSA9PiB7XHJcbiAgZmV0Y2godm5vZGUuc3RhdGUpLlxyXG4gIHRoZW4oKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh2bm9kZS5kb20uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tIC0gd2luZG93LmlubmVySGVpZ2h0IDwgdm5vZGUuc3RhdGUudHJpZ2dlckRpc3RhbmNlKSB7XHJcbiAgICAgICAgZmV0Y2hFbm91Z2hEYXRhKHZub2RlKVxyXG4gICAgICB9XHJcbiAgICB9LCAwKVxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IG9uaW5pdCA9IHZub2RlID0+IHtcclxuICBjb25zdCBhdHRycyA9IHZub2RlLmF0dHJzXHJcbiAgY29uc3Qgc3RhdGUgPSB2bm9kZS5zdGF0ZVxyXG5cclxuICBleHRlbmQoc3RhdGUsIERFRkFVTFQsIGF0dHJzKVxyXG4gIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlXHJcbn1cclxuXHJcbmNvbnN0IG9uY3JlYXRlID0gdm5vZGUgPT4ge1xyXG4gIGNvbnN0IHN0YXRlID0gdm5vZGUuc3RhdGVcclxuXHJcbiAgc3RhdGUub25zY3JvbGwgPSAoKSA9PiB7XHJcbiAgICByYWYoKCkgPT4ge1xyXG4gICAgICBpZiAoc3RhdGUuaXNMb2FkaW5nKSByZXR1cm5cclxuICAgICAgY2hlY2tCb3VuZEFuZEZldGNoKHZub2RlKVxyXG4gICAgfSlcclxuICB9XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHN0YXRlLm9uc2Nyb2xsKVxyXG5cclxuICBmZXRjaEVub3VnaERhdGEodm5vZGUpXHJcbn1cclxuXHJcbmNvbnN0IHZpZXcgPSB2bm9kZSA9PiB7XHJcbiAgY29uc3Qgc3RhdGUgPSB2bm9kZS5zdGF0ZVxyXG5cclxuICByZXR1cm4gW1xyXG4gICAgbShzdGF0ZS5yb290VGFnLFxyXG4gICAgICBzdGF0ZS5saXN0Lm1hcCgoZGF0YSwgaW5kZXgpID0+IHN0YXRlLml0ZW0oZGF0YSwgaW5kZXgpKVxyXG4gICAgKSxcclxuICAgIG0ocGxhY2Vob2xkZXIsIHtcclxuICAgICAgbG9hZGluZ1RleHQ6IHN0YXRlLmxvYWRpbmdUZXh0XHJcbiAgICB9KVxyXG4gIF1cclxufVxyXG5cclxuY29uc3Qgb25yZW1vdmUgPSB2bm9kZSA9PiB7XHJcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHZub2RlLnN0YXRlLm9uc2Nyb2xsKVxyXG59XHJcblxyXG5jb25zdCBpbmZMaXN0ID0ge1xyXG4gIG9uaW5pdCxcclxuICBvbmNyZWF0ZSxcclxuICB2aWV3LFxyXG4gIG9ucmVtb3ZlXHJcbn1cclxuXHJcbndpbmRvdy5pbmZMaXN0ID0gaW5mTGlzdFxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFDQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFHQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==");

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

/***/ })
/******/ ]);