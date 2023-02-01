(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["uuuf"] = factory();
	else
		root["uuuf"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/component.ts":
/*!**************************!*\
  !*** ./src/component.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uuuf": () => (/* binding */ uuuf)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.ts");
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css */ "./src/css.ts");
/* harmony import */ var _objtree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objtree */ "./src/objtree.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ "./src/events.ts");
/* harmony import */ var auto_bind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! auto-bind */ "./node_modules/auto-bind/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var DEFAULT = {
    componentSelector: '[data-js-component]',
    getComponentName: function (elem) { return elem.dataset.jsComponent; },
    // eslint-disable-next-line no-unused-vars
    importComponent: function (compName) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            throw new Error("importComponent is not implemented");
        });
    }); },
};
function uuuf(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.componentSelector, componentSelector = _c === void 0 ? DEFAULT.componentSelector : _c, _d = _b.getComponentName, getComponentName = _d === void 0 ? DEFAULT.getComponentName : _d, _e = _b.importComponent, importComponent = _e === void 0 ? DEFAULT.importComponent : _e;
    function isComponent(e) {
        return e.matches(componentSelector) && Boolean(getComponentName(e));
    }
    function isNotLoaded(e) {
        return !e.component;
    }
    function loadComponents(root, extraPredicate) {
        if (extraPredicate === void 0) { extraPredicate = function () { return true; }; }
        return __awaiter(this, void 0, void 0, function () {
            var r, predicate, comps;
            var _this = this;
            return __generator(this, function (_a) {
                if (root instanceof HTMLCollection)
                    r = Array.from(root);
                if (root instanceof HTMLElement)
                    r = [root];
                else
                    r = root;
                predicate = function (e) {
                    return isComponent(e) && isNotLoaded(e) && extraPredicate(e);
                };
                comps = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.query)(r, predicate).map(function (el) { return __awaiter(_this, void 0, void 0, function () {
                    var compName, comp;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                compName = getComponentName(el);
                                return [4 /*yield*/, importComponent(compName)];
                            case 1:
                                comp = _a.sent();
                                return [2 /*return*/, new comp(el)];
                        }
                    });
                }); });
                return [2 /*return*/, Promise.all(comps).then(function (cs) { return __awaiter(_this, void 0, void 0, function () {
                        var _i, cs_1, c;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _i = 0, cs_1 = cs;
                                    _a.label = 1;
                                case 1:
                                    if (!(_i < cs_1.length)) return [3 /*break*/, 4];
                                    c = cs_1[_i];
                                    Object.defineProperty(c.elem, 'component', {
                                        configurable: true,
                                        writable: false,
                                        enumerable: false,
                                        value: this,
                                    });
                                    return [4 /*yield*/, c.ready()];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3:
                                    _i++;
                                    return [3 /*break*/, 1];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    }
    ;
    var Component = /** @class */ (function () {
        // Component lifecycle
        function Component(elem) {
            this.elem = elem;
            this.args = JSON.parse(elem.dataset.args || '{}');
            Object.defineProperties(this, {
                _handlers: { enumerable: false, writable: true, value: {} },
            });
            this.css = (0,_css__WEBPACK_IMPORTED_MODULE_1__.cssClassNames)(this.CSS);
            (0,auto_bind__WEBPACK_IMPORTED_MODULE_4__["default"])(this); // automatic this.method = this.method.bind(this);
        }
        Object.defineProperty(Component.prototype, "CSS", {
            // Declarations
            get: function () {
                return {
                /*
                myClass: 'my-class',
                */
                };
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Component.prototype, "DOM", {
            get: function () {
                return {
                /*
                myElement: '[data-my-element]',
                myElement: ['[data-my-element]', {
                    click: () => console.log("hello, world!"),
                }],
                myGroup: {
                    mySubGroup: {
                        elem1: '[data-elem-1]',
                        elem2: ['[data-elem-2]', {
                            click: () => console.log("hello, world!"),
                        }]
                    }
                },
                */
                };
            },
            enumerable: false,
            configurable: true
        });
        // called after all components are loaded
        // should be overloaded rather than extended
        Component.prototype.ready = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.bind();
                    return [2 /*return*/];
                });
            });
        };
        // Methods
        Component.prototype.select = function () {
            var domMapping = (0,_objtree__WEBPACK_IMPORTED_MODULE_2__.treeMap)(this.DOM, function (v) {
                return Array.isArray(v) ? v[0] : v;
            });
            this.dom = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.querySelect)(this.elem, domMapping);
        };
        Component.prototype.bind = function () {
            this.select();
            this.unbind();
            var handlersMapping = (0,_objtree__WEBPACK_IMPORTED_MODULE_2__.treeMap)(this.DOM, function (v) {
                return Array.isArray(v) ? v[1] : undefined;
            });
            console.log(handlersMapping);
            this._handlers = (0,_events__WEBPACK_IMPORTED_MODULE_3__.bind)(this.dom, handlersMapping);
        };
        Component.prototype.unbind = function () {
            (0,_events__WEBPACK_IMPORTED_MODULE_3__.unbind)(this._handlers);
        };
        Component.prototype.emit = function (name, detail, bubbles) {
            if (bubbles === void 0) { bubbles = true; }
            (0,_events__WEBPACK_IMPORTED_MODULE_3__.emit)(this.elem, name, detail, bubbles);
        };
        Component.prototype.mix = function (component, elem) {
            if (elem === void 0) { elem = this.elem; }
            return __awaiter(this, void 0, void 0, function () {
                var c, instance;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(typeof component === 'string')) return [3 /*break*/, 2];
                            return [4 /*yield*/, importComponent(component)];
                        case 1:
                            c = _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            c = component;
                            _a.label = 3;
                        case 3:
                            instance = new c(elem);
                            return [4 /*yield*/, instance.ready()];
                        case 4:
                            _a.sent();
                            return [2 /*return*/, instance];
                    }
                });
            });
        };
        Component.prototype.is = function (e) {
            return e === this.elem;
        };
        Component.import = importComponent;
        Component.load = loadComponents;
        return Component;
    }());
    ;
    return {
        $$: _dom__WEBPACK_IMPORTED_MODULE_0__.$$,
        $ALL: _dom__WEBPACK_IMPORTED_MODULE_0__.$ALL,
        loadComponents: loadComponents,
        Component: Component,
    };
}


/***/ }),

/***/ "./src/css.ts":
/*!********************!*\
  !*** ./src/css.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssClassNames": () => (/* binding */ cssClassNames)
/* harmony export */ });
/* harmony import */ var _objtree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objtree */ "./src/objtree.ts");

// Builds a convenient function to apply and test css classes to elements
function cssClass(className) {
    var toggleFn = function (elem, toggle) {
        if (toggle === void 0) { toggle = true; }
        return elem.classList.toggle(className, toggle);
    };
    toggleFn.match = function (elem) { return elem.classList.contains(className); };
    toggleFn.toString = function () { return className; };
    return toggleFn;
}
// Builds a convenient function to apply css classes to elements
function cssClassNames(classNameMap) {
    return (0,_objtree__WEBPACK_IMPORTED_MODULE_0__.treeMap)(classNameMap, cssClass);
}


/***/ }),

/***/ "./src/dom.ts":
/*!********************!*\
  !*** ./src/dom.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$$": () => (/* binding */ $$),
/* harmony export */   "$ALL": () => (/* binding */ $ALL),
/* harmony export */   "query": () => (/* binding */ query),
/* harmony export */   "querySelect": () => (/* binding */ querySelect)
/* harmony export */ });
/* harmony import */ var _objtree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objtree */ "./src/objtree.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

// traverses dom tree returning a list of matched elements by `predicate`,
// without descending further into matches.
function query(root, predicate) {
    var p;
    if (typeof predicate === 'function')
        p = predicate;
    else
        p = function (elem) { return elem.matches(predicate); };
    function findMatches(elem) {
        if (p(elem))
            return [elem];
        return Array.from(elem.children).map(findMatches).flat();
    }
    ;
    if (!Array.isArray(root))
        root = [root];
    return Array.from(root).map(findMatches).flat();
}
var SelectorType;
(function (SelectorType) {
    SelectorType["All"] = "all";
    SelectorType["Query"] = "query";
})(SelectorType || (SelectorType = {}));
function selector(type, strings) {
    var values = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        values[_i - 2] = arguments[_i];
    }
    var query = strings[0] + strings.slice(1).map(function (s, i) { return values[i] + s; });
    // cirumvent treeMap object detection with hidden props
    return Object.create(null, {
        toString: { value: function () { return query; } },
        type: { value: type },
    });
}
function $$(strings) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    return selector.apply(void 0, __spreadArray([SelectorType.Query, strings], values, false));
}
function $ALL(strings) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    return selector.apply(void 0, __spreadArray([SelectorType.All, strings], values, false));
}
// Query DOM from `elem`, returning map of results
function querySelect(elem, selectorMap) {
    return (0,_objtree__WEBPACK_IMPORTED_MODULE_0__.treeMap)(selectorMap, function (selector) {
        if (typeof selector === 'string')
            return elem.querySelector(selector);
        if (selector.type === 'query')
            return query(elem, selector.toString());
        if (selector.type === 'all')
            return Array.from(elem.querySelectorAll(selector.toString()));
    });
}


/***/ }),

/***/ "./src/events.ts":
/*!***********************!*\
  !*** ./src/events.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bind": () => (/* binding */ bind),
/* harmony export */   "emit": () => (/* binding */ emit),
/* harmony export */   "unbind": () => (/* binding */ unbind)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _objtree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objtree */ "./src/objtree.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


// Emit custom events from target element
function emit(elem, name, detail, bubbles) {
    if (bubbles === void 0) { bubbles = true; }
    var evt = new CustomEvent(name, { bubbles: bubbles, detail: detail });
    elem.dispatchEvent(evt);
}
function withRemove(fn, remove) {
    if (remove === void 0) { remove = function () { }; }
    // cleanest known way to clone a function
    // it's acceptable because `get DOM()` only uses arrow function or bound methods
    var cloned = fn.bind(null);
    cloned.remove = remove;
    return cloned;
}
function makeRemovableHandler(elem, eventName, handler) {
    if (Array.isArray(elem)) {
        elem.forEach(function (e) { return e.addEventListener(eventName, handler); });
        return withRemove(handler, function () {
            elem.forEach(function (e) { return e.removeEventListener(eventName, handler); });
        });
    }
    elem.addEventListener(eventName, handler);
    return withRemove(handler, function () {
        elem.removeEventListener(eventName, handler);
    });
}
// Adds event listeners to elements
function bind(elemTree, handlerTree) {
    return (0,_objtree__WEBPACK_IMPORTED_MODULE_1__.treeMap)(elemTree, function (elem, ks) {
        var hm = (0,_objtree__WEBPACK_IMPORTED_MODULE_1__.treeGet)(handlerTree, ks);
        if (!hm)
            return;
        return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.reduceObject)(hm, {}, function (ht, handler, eventName) {
            var _a;
            var rh = makeRemovableHandler(elem, eventName, handler);
            return __assign(__assign({}, ht), (_a = {}, _a[eventName] = rh, _a));
        });
    });
}
// Removes event listeners to elements
function unbind(handlerMap) {
    (0,_objtree__WEBPACK_IMPORTED_MODULE_1__.treeMap)(handlerMap, function (handler) {
        handler.remove();
    });
}


/***/ }),

/***/ "./src/objtree.ts":
/*!************************!*\
  !*** ./src/objtree.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "treeGet": () => (/* binding */ treeGet),
/* harmony export */   "treeMap": () => (/* binding */ treeMap)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

function defined(v) {
    return typeof v !== 'undefined' && v !== null;
}
// Walk to a specific node in the tree
function treeGet(tree, path) {
    var ks;
    if (typeof path === 'string')
        ks = path.split('.');
    else
        ks = __spreadArray([], path, true);
    var res = ks.reduce(function (r, k) { return !defined(r) ? r : r[k]; }, tree);
    return res === null ? undefined : res;
}
;
function innerTreeMap(tree, f, ks) {
    if (ks === void 0) { ks = []; }
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.reduceObject)(tree, {}, function (acc, v, k) {
        var _a, _b;
        if (defined(v) && v.constructor === Object) {
            return __assign(__assign({}, acc), (_a = {}, _a[k] = innerTreeMap(v, f, __spreadArray(__spreadArray([], ks, true), [k], false)), _a));
        }
        var nextv = f(v, __spreadArray(__spreadArray([], ks, true), [k], false), k);
        if (typeof nextv === 'undefined')
            return __assign({}, acc);
        return __assign(__assign({}, acc), (_b = {}, _b[k] = nextv, _b));
    });
}
// Maps function to tree leaves
function treeMap(tree, f) {
    return innerTreeMap(tree, f);
}


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reduceObject": () => (/* binding */ reduceObject)
/* harmony export */ });
// Checks if the value is not undefined and not null
// Ergonomic shortcut for Object.entries(...).reduce(...)
function reduceObject(obj, init, f) {
    return Object.entries(obj).reduce(function (acc, _a) {
        var k = _a[0], v = _a[1];
        return f(acc, v, k);
    }, init);
}


/***/ }),

/***/ "./node_modules/auto-bind/index.js":
/*!*****************************************!*\
  !*** ./node_modules/auto-bind/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ autoBind)
/* harmony export */ });
// Gets all non-builtin properties up the prototype chain.
const getAllProperties = object => {
	const properties = new Set();

	do {
		for (const key of Reflect.ownKeys(object)) {
			properties.add([object, key]);
		}
	} while ((object = Reflect.getPrototypeOf(object)) && object !== Object.prototype);

	return properties;
};

function autoBind(self, {include, exclude} = {}) {
	const filter = key => {
		const match = pattern => typeof pattern === 'string' ? key === pattern : pattern.test(key);

		if (include) {
			return include.some(match); // eslint-disable-line unicorn/no-array-callback-reference
		}

		if (exclude) {
			return !exclude.some(match); // eslint-disable-line unicorn/no-array-callback-reference
		}

		return true;
	};

	for (const [object, key] of getAllProperties(self.constructor.prototype)) {
		if (key === 'constructor' || !filter(key)) {
			continue;
		}

		const descriptor = Reflect.getOwnPropertyDescriptor(object, key);
		if (descriptor && typeof descriptor.value === 'function') {
			self[key] = self[key].bind(self);
		}
	}

	return self;
}


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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/component.ts");
/*
                     _                    _
                  ,/                        \,
        _________{(                          })_________
       /.-------./\\                        //\.-------.\
      //@@@@@@@//@@\\  )                (  //@@\\@@@@@@@\\
     //@@@@@@@//@@@@>>/                  \<<@@@@\\@@@@@@@\\
    //O@O@O@O//@O@O//                      \\O@O@\\O@O@O@O\\
  //OOOOOOOO//OOOO||          \  /          ||OOOO\\OOOOOOOO\\
 //O%O%O%O%//O%O%O%\\         ))((         //%O%O%O\\%O%O%O%O\\
||%%%%%%%%//'  `%%%%\\       //  \\       //%%%%'   `\\%%%%%%%||
((%%%%%%%((      %%%%%\\    ((    ))    //%%%%%       ))%%%%%%))
 \:::' `::\\      `:::::\\   \)~~(/    //:::::'      //::' `:::/
  )'     `;)'      (`  ` \\ `<@  @>' / / '  ')      `(;'     `(
          (               \`\ )^^( /  /               )
        _                  ) \\oo/   (
       (@)                  \  `'   /                      _
       |-|\__________________\__^__<________oOo__________ (@)
       | |                                  VVV          \|-|
       |-|   uuuf: Undoubtedly Useful Utility Functions   |-|
       |_|\_____________________________________________  | |
       (@)                 / ,/ \_____/ \\ ~\/~         `\|-|
        ~             ___//^~      \____/\\               (@)
                     <<<  \     __  <____/||               ~
                               <   \ <___/||
                                  || <___//
                                  \ \/__//
                                   ~----~
*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_component__WEBPACK_IMPORTED_MODULE_0__);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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biIsIndlYnBhY2s6Ly91dXVmLy4vc3JjL2NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly91dXVmLy4vc3JjL2Nzcy50cyIsIndlYnBhY2s6Ly91dXVmLy4vc3JjL2RvbS50cyIsIndlYnBhY2s6Ly91dXVmLy4vc3JjL2V2ZW50cy50cyIsIndlYnBhY2s6Ly91dXVmLy4vc3JjL29ianRyZWUudHMiLCJ3ZWJwYWNrOi8vdXV1Zi8uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly91dXVmLy4vbm9kZV9tb2R1bGVzL2F1dG8tYmluZC9pbmRleC5qcyIsIndlYnBhY2s6Ly91dXVmL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3V1dWYvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3V1dWYvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly91dXVmL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdXV1Zi8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ1dXVmXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInV1dWZcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwiaW1wb3J0IHsgcXVlcnksIHF1ZXJ5U2VsZWN0LCAkJCwgJEFMTCwgUXVlcnlSZXN1bHQsIFNlbGVjdG9yTWFrZXIsIFF1ZXJ5U2VsZWN0b3IgfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyBDU1NDbGFzcywgY3NzQ2xhc3NOYW1lcyB9IGZyb20gJy4vY3NzJztcbmltcG9ydCB7IHRyZWVNYXAsIE9iamVjdFRyZWUgfSBmcm9tICcuL29ianRyZWUnO1xuaW1wb3J0IHsgYmluZCwgdW5iaW5kLCBlbWl0LCBSZW1vdmFibGVIYW5kbGVyTWFwLCBIYW5kbGVyTWFwIH0gZnJvbSAnLi9ldmVudHMnO1xuXG5pbXBvcnQgYXV0b0JpbmQgZnJvbSAnYXV0by1iaW5kJztcblxuZXhwb3J0IHR5cGUgSFRNTEVsZW1lbnRDb21wb25lbnQgPSBIVE1MRWxlbWVudCAmIHsgY29tcG9uZW50OiB0eXBlb2YgQ29tcG9uZW50IH07XG5cbmV4cG9ydCB0eXBlIERPTURlZmluaXRpb24gPSBRdWVyeVNlbGVjdG9yIHwgW1F1ZXJ5U2VsZWN0b3IsIEhhbmRsZXJNYXAgfCB1bmRlZmluZWRdO1xuXG5jb25zdCBERUZBVUxUID0ge1xuICAgIGNvbXBvbmVudFNlbGVjdG9yOiAnW2RhdGEtanMtY29tcG9uZW50XScsXG4gICAgZ2V0Q29tcG9uZW50TmFtZTogKGVsZW06IEhUTUxFbGVtZW50KTogc3RyaW5nID0+IGVsZW0uZGF0YXNldC5qc0NvbXBvbmVudCxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICBpbXBvcnRDb21wb25lbnQ6IGFzeW5jIChjb21wTmFtZTogc3RyaW5nKTogUHJvbWlzZTx0eXBlb2YgQ29tcG9uZW50PiA9PiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgaW1wb3J0Q29tcG9uZW50IGlzIG5vdCBpbXBsZW1lbnRlZGApO1xuICAgIH0sXG59O1xuXG5leHBvcnQgdHlwZSBVVVVGID0ge1xuICAgICQkOiBTZWxlY3Rvck1ha2VyLFxuICAgICRBTEw6IFNlbGVjdG9yTWFrZXIsXG4gICAgbG9hZENvbXBvbmVudHM6IGFueSxcbiAgICBDb21wb25lbnQ6IHR5cGVvZiBDb21wb25lbnQsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1dXVmKHtcbiAgICBjb21wb25lbnRTZWxlY3RvciA9IERFRkFVTFQuY29tcG9uZW50U2VsZWN0b3IsXG4gICAgZ2V0Q29tcG9uZW50TmFtZSA9IERFRkFVTFQuZ2V0Q29tcG9uZW50TmFtZSxcbiAgICBpbXBvcnRDb21wb25lbnQgPSBERUZBVUxULmltcG9ydENvbXBvbmVudCxcbn0gPSB7fSk6IFVVVUYge1xuICAgIGZ1bmN0aW9uIGlzQ29tcG9uZW50KGU6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBlLm1hdGNoZXMoY29tcG9uZW50U2VsZWN0b3IpICYmIEJvb2xlYW4oZ2V0Q29tcG9uZW50TmFtZShlKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNOb3RMb2FkZWQoZTogSFRNTEVsZW1lbnQgJiB7IGNvbXBvbmVudD86IENvbXBvbmVudH0pOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICFlLmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkQ29tcG9uZW50cyhcbiAgICAgICAgcm9vdDogSFRNTEVsZW1lbnQgfCBIVE1MRWxlbWVudFtdIHwgSFRNTENvbGxlY3Rpb24sXG4gICAgICAgIGV4dHJhUHJlZGljYXRlOiAoKGVsZW06IEhUTUxFbGVtZW50KSA9PiBib29sZWFuKSA9ICgpID0+IHRydWVcbiAgICApIHtcbiAgICAgICAgbGV0IHI7XG4gICAgICAgIGlmIChyb290IGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24pIHIgPSBBcnJheS5mcm9tKHJvb3QpIGFzIEhUTUxFbGVtZW50W107XG4gICAgICAgIGlmIChyb290IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHIgPSBbcm9vdF0gYXMgSFRNTEVsZW1lbnRbXTtcbiAgICAgICAgZWxzZSByID0gcm9vdCBhcyBIVE1MRWxlbWVudFtdO1xuXG4gICAgICAgIGNvbnN0IHByZWRpY2F0ZSA9IChlOiBIVE1MRWxlbWVudCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGlzQ29tcG9uZW50KGUpICYmIGlzTm90TG9hZGVkKGUpICYmIGV4dHJhUHJlZGljYXRlKGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNvbXBzOiBQcm9taXNlPENvbXBvbmVudD5bXSA9IHF1ZXJ5KHIsIHByZWRpY2F0ZSkubWFwKGFzeW5jIGVsID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBOYW1lID0gZ2V0Q29tcG9uZW50TmFtZShlbCk7XG4gICAgICAgICAgICBjb25zdCBjb21wID0gYXdhaXQgaW1wb3J0Q29tcG9uZW50KGNvbXBOYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgKGNvbXAgYXMgdHlwZW9mIENvbXBvbmVudCkoZWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoY29tcHMpLnRoZW4oYXN5bmMgY3MgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIGNzKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGMuZWxlbSwgJ2NvbXBvbmVudCcsIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGF3YWl0IGMucmVhZHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNsYXNzIENvbXBvbmVudCB7XG4gICAgICAgIHN0YXRpYyBpbXBvcnQgPSBpbXBvcnRDb21wb25lbnQ7XG5cbiAgICAgICAgc3RhdGljIGxvYWQgPSBsb2FkQ29tcG9uZW50cztcblxuICAgICAgICBlbGVtOiBIVE1MRWxlbWVudENvbXBvbmVudDtcbiAgICAgICAgYXJnczogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbiAgICAgICAgY3NzOiBPYmplY3RUcmVlPENTU0NsYXNzPjtcbiAgICAgICAgZG9tOiBPYmplY3RUcmVlPFF1ZXJ5UmVzdWx0PjtcbiAgICAgICAgX2hhbmRsZXJzOiBPYmplY3RUcmVlPFJlbW92YWJsZUhhbmRsZXJNYXA+O1xuXG4gICAgICAgIC8vIERlY2xhcmF0aW9uc1xuICAgICAgICBnZXQgQ1NTKCk6IE9iamVjdFRyZWU8c3RyaW5nPiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgbXlDbGFzczogJ215LWNsYXNzJyxcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldCBET00oKTogT2JqZWN0VHJlZTxET01EZWZpbml0aW9uPiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgbXlFbGVtZW50OiAnW2RhdGEtbXktZWxlbWVudF0nLFxuICAgICAgICAgICAgICAgIG15RWxlbWVudDogWydbZGF0YS1teS1lbGVtZW50XScsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IGNvbnNvbGUubG9nKFwiaGVsbG8sIHdvcmxkIVwiKSxcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBteUdyb3VwOiB7XG4gICAgICAgICAgICAgICAgICAgIG15U3ViR3JvdXA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0xOiAnW2RhdGEtZWxlbS0xXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtMjogWydbZGF0YS1lbGVtLTJdJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiBjb25zb2xlLmxvZyhcImhlbGxvLCB3b3JsZCFcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvbXBvbmVudCBsaWZlY3ljbGVcbiAgICAgICAgY29uc3RydWN0b3IoZWxlbTogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbSA9IGVsZW0gYXMgSFRNTEVsZW1lbnRDb21wb25lbnQ7XG4gICAgICAgICAgICB0aGlzLmFyZ3MgPSBKU09OLnBhcnNlKGVsZW0uZGF0YXNldC5hcmdzIHx8ICd7fScpO1xuXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICAgICAgX2hhbmRsZXJzOiB7IGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWU6IHt9IH0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5jc3MgPSBjc3NDbGFzc05hbWVzKHRoaXMuQ1NTKTtcblxuICAgICAgICAgICAgYXV0b0JpbmQodGhpcyk7IC8vIGF1dG9tYXRpYyB0aGlzLm1ldGhvZCA9IHRoaXMubWV0aG9kLmJpbmQodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjYWxsZWQgYWZ0ZXIgYWxsIGNvbXBvbmVudHMgYXJlIGxvYWRlZFxuICAgICAgICAvLyBzaG91bGQgYmUgb3ZlcmxvYWRlZCByYXRoZXIgdGhhbiBleHRlbmRlZFxuICAgICAgICBhc3luYyByZWFkeSgpIHtcbiAgICAgICAgICAgIHRoaXMuYmluZCgpO1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyBNZXRob2RzXG4gICAgICAgIHNlbGVjdCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRvbU1hcHBpbmcgPSB0cmVlTWFwKHRoaXMuRE9NLCB2ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2KSA/IHZbMF0gOiB2O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmRvbSA9IHF1ZXJ5U2VsZWN0KHRoaXMuZWxlbSwgZG9tTWFwcGluZyk7XG4gICAgICAgIH1cblxuICAgICAgICBiaW5kKCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3QoKTtcbiAgICAgICAgICAgIHRoaXMudW5iaW5kKCk7XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyc01hcHBpbmcgPSB0cmVlTWFwKHRoaXMuRE9NLCB2ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2KSA/IHZbMV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGhhbmRsZXJzTWFwcGluZylcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZXJzID0gYmluZCh0aGlzLmRvbSwgaGFuZGxlcnNNYXBwaW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVuYmluZCgpIHtcbiAgICAgICAgICAgIHVuYmluZCh0aGlzLl9oYW5kbGVycyk7XG4gICAgICAgIH1cblxuICAgICAgICBlbWl0KG5hbWU6IHN0cmluZywgZGV0YWlsOiBhbnksIGJ1YmJsZXMgPSB0cnVlKSB7XG4gICAgICAgICAgICBlbWl0KHRoaXMuZWxlbSwgbmFtZSwgZGV0YWlsLCBidWJibGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFzeW5jIG1peChjb21wb25lbnQ6IHN0cmluZyB8IENvbXBvbmVudCwgZWxlbSA9IHRoaXMuZWxlbSk6IFByb21pc2U8Q29tcG9uZW50PiB7XG4gICAgICAgICAgICBsZXQgYztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAnc3RyaW5nJykgYyA9IGF3YWl0IGltcG9ydENvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgZWxzZSBjID0gY29tcG9uZW50O1xuXG4gICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyAoYyBhcyB0eXBlb2YgQ29tcG9uZW50KShlbGVtKTtcbiAgICAgICAgICAgIGF3YWl0IGluc3RhbmNlLnJlYWR5KCk7XG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICBpcyhlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgICAgIHJldHVybiBlID09PSB0aGlzLmVsZW07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgJCQsXG4gICAgICAgICRBTEwsXG4gICAgICAgIGxvYWRDb21wb25lbnRzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgfTtcbn1cbiIsImltcG9ydCB7IE9iamVjdFRyZWUsIHRyZWVNYXAgfSBmcm9tICcuL29ianRyZWUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENTU0NsYXNzIHtcbiAgICAoZWxlbTogSFRNTEVsZW1lbnQsIHRvZ2dsZT86IGJvb2xlYW4pOiBib29sZWFuLFxuICAgIG1hdGNoKGVsZW06IEhUTUxFbGVtZW50KTogYm9vbGVhbixcbiAgICB0b1N0cmluZygpOiBzdHJpbmcsXG59XG5cbi8vIEJ1aWxkcyBhIGNvbnZlbmllbnQgZnVuY3Rpb24gdG8gYXBwbHkgYW5kIHRlc3QgY3NzIGNsYXNzZXMgdG8gZWxlbWVudHNcbmZ1bmN0aW9uIGNzc0NsYXNzKGNsYXNzTmFtZTogc3RyaW5nKTogQ1NTQ2xhc3Mge1xuICAgIGNvbnN0IHRvZ2dsZUZuID0gKGVsZW06IEhUTUxFbGVtZW50LCB0b2dnbGUgPSB0cnVlKSA9PiBlbGVtLmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lLCB0b2dnbGUpO1xuICAgIHRvZ2dsZUZuLm1hdGNoID0gKGVsZW06IEhUTUxFbGVtZW50KSA9PiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICAgIHRvZ2dsZUZuLnRvU3RyaW5nID0gKCkgPT4gY2xhc3NOYW1lO1xuICAgIHJldHVybiB0b2dnbGVGbjtcbn1cblxuLy8gQnVpbGRzIGEgY29udmVuaWVudCBmdW5jdGlvbiB0byBhcHBseSBjc3MgY2xhc3NlcyB0byBlbGVtZW50c1xuZXhwb3J0IGZ1bmN0aW9uIGNzc0NsYXNzTmFtZXMoXG4gICAgY2xhc3NOYW1lTWFwOiBPYmplY3RUcmVlPHN0cmluZz5cbik6IE9iamVjdFRyZWU8Q1NTQ2xhc3M+IHtcbiAgICByZXR1cm4gdHJlZU1hcChjbGFzc05hbWVNYXAsIGNzc0NsYXNzKTtcbn1cbiIsImltcG9ydCB7IE9iamVjdFRyZWUsIHRyZWVNYXAgfSBmcm9tICcuL29ianRyZWUnO1xuXG50eXBlIFF1ZXJ5UHJlZGljYXRlID0gc3RyaW5nIHwgKChlOiBIVE1MRWxlbWVudCkgPT4gYm9vbGVhbik7XG5cbi8vIHRyYXZlcnNlcyBkb20gdHJlZSByZXR1cm5pbmcgYSBsaXN0IG9mIG1hdGNoZWQgZWxlbWVudHMgYnkgYHByZWRpY2F0ZWAsXG4vLyB3aXRob3V0IGRlc2NlbmRpbmcgZnVydGhlciBpbnRvIG1hdGNoZXMuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnkoXG4gICAgcm9vdDogSFRNTEVsZW1lbnQgfCBIVE1MRWxlbWVudFtdLFxuICAgIHByZWRpY2F0ZTogUXVlcnlQcmVkaWNhdGVcbik6IEhUTUxFbGVtZW50W10ge1xuICAgIGxldCBwOiAoZWxlbTogSFRNTEVsZW1lbnQpID0+IGJvb2xlYW47XG4gICAgaWYgKHR5cGVvZiBwcmVkaWNhdGUgPT09ICdmdW5jdGlvbicpIHAgPSBwcmVkaWNhdGU7XG4gICAgZWxzZSBwID0gZWxlbSA9PiBlbGVtLm1hdGNoZXMocHJlZGljYXRlKTtcblxuICAgIGZ1bmN0aW9uIGZpbmRNYXRjaGVzKGVsZW06IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnRbXSB7XG4gICAgICAgIGlmIChwKGVsZW0pKSByZXR1cm4gW2VsZW1dO1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtLmNoaWxkcmVuKS5tYXAoZmluZE1hdGNoZXMpLmZsYXQoKTtcbiAgICB9O1xuICAgIGlmICghQXJyYXkuaXNBcnJheShyb290KSkgcm9vdCA9IFtyb290XTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShyb290KS5tYXAoZmluZE1hdGNoZXMpLmZsYXQoKTtcbn1cblxuZW51bSBTZWxlY3RvclR5cGUge1xuICAgIEFsbCA9ICdhbGwnLFxuICAgIFF1ZXJ5ID0gJ3F1ZXJ5Jyxcbn1cblxuZXhwb3J0IHR5cGUgUXVlcnlTZWxlY3RvciA9IHN0cmluZyB8IHsgdHlwZTogU2VsZWN0b3JUeXBlLCB0b1N0cmluZygpOiBzdHJpbmcgfTtcblxuZnVuY3Rpb24gc2VsZWN0b3IoXG4gICAgdHlwZTogU2VsZWN0b3JUeXBlLFxuICAgIHN0cmluZ3M6IHN0cmluZ1tdLFxuICAgIC4uLnZhbHVlczogYW55W11cbik6IFF1ZXJ5U2VsZWN0b3Ige1xuICAgIGNvbnN0IHF1ZXJ5ID0gc3RyaW5nc1swXSArIHN0cmluZ3Muc2xpY2UoMSkubWFwKChzLCBpKSA9PiB2YWx1ZXNbaV0gKyBzKTtcblxuICAgIC8vIGNpcnVtdmVudCB0cmVlTWFwIG9iamVjdCBkZXRlY3Rpb24gd2l0aCBoaWRkZW4gcHJvcHNcbiAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgICAgIHRvU3RyaW5nOiB7IHZhbHVlOiAoKSA9PiBxdWVyeSB9LFxuICAgICAgICB0eXBlOiB7IHZhbHVlOiB0eXBlIH0sXG4gICAgfSk7XG59XG5cbmV4cG9ydCB0eXBlIFNlbGVjdG9yTWFrZXIgPSAoc3RyaW5nOiBzdHJpbmdbXSwgLi4udmFsdWU6IGFueVtdKSA9PiBRdWVyeVNlbGVjdG9yO1xuXG5leHBvcnQgZnVuY3Rpb24gJCQoc3RyaW5nczogc3RyaW5nW10sIC4uLnZhbHVlczogYW55W10pOiBRdWVyeVNlbGVjdG9yIHtcbiAgICByZXR1cm4gc2VsZWN0b3IoU2VsZWN0b3JUeXBlLlF1ZXJ5LCBzdHJpbmdzLCAuLi52YWx1ZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gJEFMTChzdHJpbmdzOiBzdHJpbmdbXSwgLi4udmFsdWVzOiBhbnlbXSk6IFF1ZXJ5U2VsZWN0b3Ige1xuICAgIHJldHVybiBzZWxlY3RvcihTZWxlY3RvclR5cGUuQWxsLCBzdHJpbmdzLCAuLi52YWx1ZXMpO1xufVxuXG5leHBvcnQgdHlwZSBRdWVyeVJlc3VsdCA9IEVsZW1lbnQgfCBIVE1MRWxlbWVudCB8IEhUTUxFbGVtZW50W107XG5cbi8vIFF1ZXJ5IERPTSBmcm9tIGBlbGVtYCwgcmV0dXJuaW5nIG1hcCBvZiByZXN1bHRzXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlTZWxlY3QoXG4gICAgZWxlbTogSFRNTEVsZW1lbnQsXG4gICAgc2VsZWN0b3JNYXA6IE9iamVjdFRyZWU8UXVlcnlTZWxlY3Rvcj5cbik6IE9iamVjdFRyZWU8UXVlcnlSZXN1bHQ+IHtcbiAgICByZXR1cm4gdHJlZU1hcChzZWxlY3Rvck1hcCwgc2VsZWN0b3IgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgcmV0dXJuIGVsZW0ucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgIGlmIChzZWxlY3Rvci50eXBlID09PSAncXVlcnknKSByZXR1cm4gcXVlcnkoZWxlbSwgc2VsZWN0b3IudG9TdHJpbmcoKSk7XG4gICAgICAgIGlmIChzZWxlY3Rvci50eXBlID09PSAnYWxsJykgcmV0dXJuIEFycmF5LmZyb20oZWxlbS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yLnRvU3RyaW5nKCkpKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IHJlZHVjZU9iamVjdCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgT2JqZWN0VHJlZSwgdHJlZUdldCwgdHJlZU1hcCB9IGZyb20gJy4vb2JqdHJlZSc7XG5pbXBvcnQgeyBRdWVyeVJlc3VsdCB9IGZyb20gJy4vZG9tJztcblxuZXhwb3J0IHR5cGUgSGFuZGxlciA9IChldnQ6IEV2ZW50KSA9PiB2b2lkXG5leHBvcnQgdHlwZSBIYW5kbGVyTWFwID0geyBbZXZlbnQ6IHN0cmluZ106IEhhbmRsZXIgfVxuXG5leHBvcnQgdHlwZSBSZW1vdmFibGVIYW5kbGVyID0geyAoKTogSGFuZGxlciwgcmVtb3ZlKCk6IHZvaWQgfVxuZXhwb3J0IHR5cGUgUmVtb3ZhYmxlSGFuZGxlck1hcCA9IHsgW2V2ZW50OiBzdHJpbmddOiBSZW1vdmFibGVIYW5kbGVyIH1cblxuLy8gRW1pdCBjdXN0b20gZXZlbnRzIGZyb20gdGFyZ2V0IGVsZW1lbnRcbmV4cG9ydCBmdW5jdGlvbiBlbWl0KFxuICAgIGVsZW06IEhUTUxFbGVtZW50LFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBkZXRhaWw6IGFueSxcbiAgICBidWJibGVzID0gdHJ1ZVxuKTogdm9pZCB7XG4gICAgY29uc3QgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHsgYnViYmxlcywgZGV0YWlsIH0pO1xuICAgIGVsZW0uZGlzcGF0Y2hFdmVudChldnQpO1xufVxuXG5mdW5jdGlvbiB3aXRoUmVtb3ZlKGZuOiBGdW5jdGlvbiwgcmVtb3ZlID0gKCkgPT4ge30pOiBSZW1vdmFibGVIYW5kbGVyIHtcbiAgICAvLyBjbGVhbmVzdCBrbm93biB3YXkgdG8gY2xvbmUgYSBmdW5jdGlvblxuICAgIC8vIGl0J3MgYWNjZXB0YWJsZSBiZWNhdXNlIGBnZXQgRE9NKClgIG9ubHkgdXNlcyBhcnJvdyBmdW5jdGlvbiBvciBib3VuZCBtZXRob2RzXG4gICAgY29uc3QgY2xvbmVkID0gZm4uYmluZChudWxsKTtcbiAgICBjbG9uZWQucmVtb3ZlID0gcmVtb3ZlO1xuICAgIHJldHVybiBjbG9uZWQ7XG59XG5cbmZ1bmN0aW9uIG1ha2VSZW1vdmFibGVIYW5kbGVyKFxuICAgIGVsZW06IFF1ZXJ5UmVzdWx0LFxuICAgIGV2ZW50TmFtZTogc3RyaW5nLFxuICAgIGhhbmRsZXI6IEhhbmRsZXIsXG4pOiBSZW1vdmFibGVIYW5kbGVyIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlbGVtKSkge1xuICAgICAgICBlbGVtLmZvckVhY2goZSA9PiBlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyKSk7XG4gICAgICAgIHJldHVybiB3aXRoUmVtb3ZlKGhhbmRsZXIsICgpID0+IHtcbiAgICAgICAgICAgIGVsZW0uZm9yRWFjaChlID0+IGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgcmV0dXJuIHdpdGhSZW1vdmUoaGFuZGxlciwgKCkgPT4ge1xuICAgICAgICBlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICB9KTtcbn1cblxuLy8gQWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gZWxlbWVudHNcbmV4cG9ydCBmdW5jdGlvbiBiaW5kKFxuICAgIGVsZW1UcmVlOiBPYmplY3RUcmVlPFF1ZXJ5UmVzdWx0PixcbiAgICBoYW5kbGVyVHJlZTogT2JqZWN0VHJlZTxIYW5kbGVyTWFwPlxuKTogT2JqZWN0VHJlZTxSZW1vdmFibGVIYW5kbGVyTWFwPiB7XG4gICAgcmV0dXJuIHRyZWVNYXAoZWxlbVRyZWUsIChlbGVtLCBrcykgPT4ge1xuICAgICAgICBjb25zdCBobSA9IHRyZWVHZXQ8SGFuZGxlck1hcD4oaGFuZGxlclRyZWUsIGtzKTtcbiAgICAgICAgaWYgKCFobSkgcmV0dXJuO1xuICAgICAgICByZXR1cm4gcmVkdWNlT2JqZWN0KGhtIGFzIHsgW2tleTogc3RyaW5nXTogSGFuZGxlcn0sIHt9LCAoXG4gICAgICAgICAgICBodDogT2JqZWN0VHJlZTxSZW1vdmFibGVIYW5kbGVyTWFwPixcbiAgICAgICAgICAgIGhhbmRsZXI6IEhhbmRsZXIsXG4gICAgICAgICAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICAgICAgKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByaCA9IG1ha2VSZW1vdmFibGVIYW5kbGVyKGVsZW0sIGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgICAgICAgICByZXR1cm4geyAuLi5odCwgW2V2ZW50TmFtZV06IHJoIH1cbiAgICAgICAgfSkgYXMgUmVtb3ZhYmxlSGFuZGxlck1hcDtcbiAgICB9KTtcbn1cblxuLy8gUmVtb3ZlcyBldmVudCBsaXN0ZW5lcnMgdG8gZWxlbWVudHNcbmV4cG9ydCBmdW5jdGlvbiB1bmJpbmQoaGFuZGxlck1hcDogT2JqZWN0VHJlZTxSZW1vdmFibGVIYW5kbGVyTWFwPikge1xuICAgIHRyZWVNYXAoaGFuZGxlck1hcCwgaGFuZGxlciA9PiB7XG4gICAgICAgIGhhbmRsZXIucmVtb3ZlKCk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgeyByZWR1Y2VPYmplY3QgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdFRyZWU8QT4ge1xuICAgIFtrZXk6IHN0cmluZ106IE9iamVjdFRyZWU8QT4gfCBBXG59XG5cbmZ1bmN0aW9uIGRlZmluZWQodjogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ICE9PSAndW5kZWZpbmVkJyAmJiB2ICE9PSBudWxsO1xufVxuXG4vLyBXYWxrIHRvIGEgc3BlY2lmaWMgbm9kZSBpbiB0aGUgdHJlZVxuZXhwb3J0IGZ1bmN0aW9uIHRyZWVHZXQ8QT4oXG4gICAgdHJlZTogT2JqZWN0VHJlZTxBPixcbiAgICBwYXRoOiBzdHJpbmcgfCBzdHJpbmdbXSxcbik6IE9iamVjdFRyZWU8QT4gfCBBIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQga3M6IEFycmF5PHN0cmluZz47XG4gICAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykga3MgPSBwYXRoLnNwbGl0KCcuJyk7XG4gICAgZWxzZSBrcyA9IFsuLi5wYXRoXTtcblxuICAgIGNvbnN0IHJlcyA9IGtzLnJlZHVjZSgociwgaykgPT4gIWRlZmluZWQocikgPyByIDogcltrXSwgdHJlZSk7XG4gICAgcmV0dXJuIHJlcyA9PT0gbnVsbCA/IHVuZGVmaW5lZCA6IHJlcztcbn07XG5cbnR5cGUgVHJlZU1hcEZuPEEsIEI+ID0gKHY6IEEsIGtzOiBzdHJpbmdbXSwgazogc3RyaW5nKSA9PiBCO1xuXG5mdW5jdGlvbiBpbm5lclRyZWVNYXA8QSwgQj4oXG4gICAgdHJlZTogT2JqZWN0VHJlZTxBPixcbiAgICBmOiBUcmVlTWFwRm48QSwgQj4sXG4gICAga3M6IHN0cmluZ1tdID0gW11cbik6IE9iamVjdFRyZWU8Qj4ge1xuICAgIHJldHVybiByZWR1Y2VPYmplY3QodHJlZSBhcyB7IFtrZXk6IHN0cmluZ106IEF9LCB7fSwgKGFjYywgdiwgaykgPT4ge1xuICAgICAgICBpZiAoZGVmaW5lZCh2KSAmJiB2LmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB7IC4uLmFjYywgW2tdOiBpbm5lclRyZWVNYXAodiBhcyBPYmplY3RUcmVlPEE+LCBmLCBbLi4ua3MsIGtdKSB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5leHR2ID0gZih2LCBbLi4ua3MsIGtdLCBrKTtcbiAgICAgICAgaWYgKHR5cGVvZiBuZXh0diA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiB7IC4uLmFjYyB9O1xuICAgICAgICByZXR1cm4geyAuLi5hY2MsIFtrXTogbmV4dHYgfTtcbiAgICB9KTtcbn1cblxuLy8gTWFwcyBmdW5jdGlvbiB0byB0cmVlIGxlYXZlc1xuZXhwb3J0IGZ1bmN0aW9uIHRyZWVNYXA8QSwgQj4oXG4gICAgdHJlZTogT2JqZWN0VHJlZTxBPixcbiAgICBmOiBUcmVlTWFwRm48QSwgQj5cbik6IE9iamVjdFRyZWU8Qj4ge1xuICAgIHJldHVybiBpbm5lclRyZWVNYXAodHJlZSwgZik7XG59XG4iLCIvLyBDaGVja3MgaWYgdGhlIHZhbHVlIGlzIG5vdCB1bmRlZmluZWQgYW5kIG5vdCBudWxsXG4vLyBFcmdvbm9taWMgc2hvcnRjdXQgZm9yIE9iamVjdC5lbnRyaWVzKC4uLikucmVkdWNlKC4uLilcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VPYmplY3Q8QSwgQj4oXG4gICAgb2JqOiB7IFtrZXk6IHN0cmluZ106IEEgfSxcbiAgICBpbml0OiBhbnksXG4gICAgZjogKGFjYzogQiwgdjogQSwgazogc3RyaW5nKSA9PiBCXG4pOiBCIHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMob2JqKS5yZWR1Y2UoKGFjYywgW2ssIHZdKSA9PiB7XG4gICAgICAgIHJldHVybiBmKGFjYywgdiwgayk7XG4gICAgfSwgaW5pdCk7XG59XG4iLCIvLyBHZXRzIGFsbCBub24tYnVpbHRpbiBwcm9wZXJ0aWVzIHVwIHRoZSBwcm90b3R5cGUgY2hhaW4uXG5jb25zdCBnZXRBbGxQcm9wZXJ0aWVzID0gb2JqZWN0ID0+IHtcblx0Y29uc3QgcHJvcGVydGllcyA9IG5ldyBTZXQoKTtcblxuXHRkbyB7XG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgUmVmbGVjdC5vd25LZXlzKG9iamVjdCkpIHtcblx0XHRcdHByb3BlcnRpZXMuYWRkKFtvYmplY3QsIGtleV0pO1xuXHRcdH1cblx0fSB3aGlsZSAoKG9iamVjdCA9IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KSkgJiYgb2JqZWN0ICE9PSBPYmplY3QucHJvdG90eXBlKTtcblxuXHRyZXR1cm4gcHJvcGVydGllcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF1dG9CaW5kKHNlbGYsIHtpbmNsdWRlLCBleGNsdWRlfSA9IHt9KSB7XG5cdGNvbnN0IGZpbHRlciA9IGtleSA9PiB7XG5cdFx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuID0+IHR5cGVvZiBwYXR0ZXJuID09PSAnc3RyaW5nJyA/IGtleSA9PT0gcGF0dGVybiA6IHBhdHRlcm4udGVzdChrZXkpO1xuXG5cdFx0aWYgKGluY2x1ZGUpIHtcblx0XHRcdHJldHVybiBpbmNsdWRlLnNvbWUobWF0Y2gpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHVuaWNvcm4vbm8tYXJyYXktY2FsbGJhY2stcmVmZXJlbmNlXG5cdFx0fVxuXG5cdFx0aWYgKGV4Y2x1ZGUpIHtcblx0XHRcdHJldHVybiAhZXhjbHVkZS5zb21lKG1hdGNoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSB1bmljb3JuL25vLWFycmF5LWNhbGxiYWNrLXJlZmVyZW5jZVxuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cdGZvciAoY29uc3QgW29iamVjdCwga2V5XSBvZiBnZXRBbGxQcm9wZXJ0aWVzKHNlbGYuY29uc3RydWN0b3IucHJvdG90eXBlKSkge1xuXHRcdGlmIChrZXkgPT09ICdjb25zdHJ1Y3RvcicgfHwgIWZpbHRlcihrZXkpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBrZXkpO1xuXHRcdGlmIChkZXNjcmlwdG9yICYmIHR5cGVvZiBkZXNjcmlwdG9yLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRzZWxmW2tleV0gPSBzZWxmW2tleV0uYmluZChzZWxmKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc2VsZjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLypcbiAgICAgICAgICAgICAgICAgICAgIF8gICAgICAgICAgICAgICAgICAgIF9cbiAgICAgICAgICAgICAgICAgICwvICAgICAgICAgICAgICAgICAgICAgICAgXFwsXG4gICAgICAgIF9fX19fX19fX3soICAgICAgICAgICAgICAgICAgICAgICAgICB9KV9fX19fX19fX1xuICAgICAgIC8uLS0tLS0tLS4vXFxcXCAgICAgICAgICAgICAgICAgICAgICAgIC8vXFwuLS0tLS0tLS5cXFxuICAgICAgLy9AQEBAQEBALy9AQFxcXFwgICkgICAgICAgICAgICAgICAgKCAgLy9AQFxcXFxAQEBAQEBAXFxcXFxuICAgICAvL0BAQEBAQEAvL0BAQEA+Pi8gICAgICAgICAgICAgICAgICBcXDw8QEBAQFxcXFxAQEBAQEBAXFxcXFxuICAgIC8vT0BPQE9ATy8vQE9ATy8vICAgICAgICAgICAgICAgICAgICAgIFxcXFxPQE9AXFxcXE9AT0BPQE9cXFxcXG4gIC8vT09PT09PT08vL09PT098fCAgICAgICAgICBcXCAgLyAgICAgICAgICB8fE9PT09cXFxcT09PT09PT09cXFxcXG4gLy9PJU8lTyVPJS8vTyVPJU8lXFxcXCAgICAgICAgICkpKCggICAgICAgICAvLyVPJU8lT1xcXFwlTyVPJU8lT1xcXFxcbnx8JSUlJSUlJSUvLycgIGAlJSUlXFxcXCAgICAgICAvLyAgXFxcXCAgICAgICAvLyUlJSUnICAgYFxcXFwlJSUlJSUlfHxcbigoJSUlJSUlJSgoICAgICAgJSUlJSVcXFxcICAgICgoICAgICkpICAgIC8vJSUlJSUgICAgICAgKSklJSUlJSUpKVxuIFxcOjo6JyBgOjpcXFxcICAgICAgYDo6Ojo6XFxcXCAgIFxcKX5+KC8gICAgLy86Ojo6OicgICAgICAvLzo6JyBgOjo6L1xuICApJyAgICAgYDspJyAgICAgIChgICBgIFxcXFwgYDxAICBAPicgLyAvICcgICcpICAgICAgYCg7JyAgICAgYChcbiAgICAgICAgICAoICAgICAgICAgICAgICAgXFxgXFwgKV5eKCAvICAvICAgICAgICAgICAgICAgKVxuICAgICAgICBfICAgICAgICAgICAgICAgICAgKSBcXFxcb28vICAgKFxuICAgICAgIChAKSAgICAgICAgICAgICAgICAgIFxcICBgJyAgIC8gICAgICAgICAgICAgICAgICAgICAgX1xuICAgICAgIHwtfFxcX19fX19fX19fX19fX19fX19fXFxfX15fXzxfX19fX19fX29Pb19fX19fX19fX18gKEApXG4gICAgICAgfCB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZWViAgICAgICAgICBcXHwtfFxuICAgICAgIHwtfCAgIHV1dWY6IFVuZG91YnRlZGx5IFVzZWZ1bCBVdGlsaXR5IEZ1bmN0aW9ucyAgIHwtfFxuICAgICAgIHxffFxcX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICB8IHxcbiAgICAgICAoQCkgICAgICAgICAgICAgICAgIC8gLC8gXFxfX19fXy8gXFxcXCB+XFwvfiAgICAgICAgIGBcXHwtfFxuICAgICAgICB+ICAgICAgICAgICAgIF9fXy8vXn4gICAgICBcXF9fX18vXFxcXCAgICAgICAgICAgICAgIChAKVxuICAgICAgICAgICAgICAgICAgICAgPDw8ICBcXCAgICAgX18gIDxfX19fL3x8ICAgICAgICAgICAgICAgflxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwgICBcXCA8X19fL3x8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgPF9fXy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFwgXFwvX18vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB+LS0tLX5cbiovXG5cbmltcG9ydCAqIGFzIHV1dWYgZnJvbSAnLi9jb21wb25lbnQnO1xuZXhwb3J0IGRlZmF1bHQgdXV1ZjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==