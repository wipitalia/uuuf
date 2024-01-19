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

/***/ "./src/Component.ts":
/*!**************************!*\
  !*** ./src/Component.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component)
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
        var domMapping = _objtree__WEBPACK_IMPORTED_MODULE_2__.map(this.DOM, function (v) {
            return Array.isArray(v) ? v[0] : v;
        });
        this.dom = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.querySelect)(this.elem, domMapping);
    };
    Component.prototype.bind = function () {
        this.select();
        this.unbind();
        var handlersMapping = _objtree__WEBPACK_IMPORTED_MODULE_2__.map(this.DOM, function (v) {
            return Array.isArray(v) ? v[1] : undefined;
        });
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
            var instance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        instance = new component(elem);
                        return [4 /*yield*/, instance.ready()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, instance];
                }
            });
        });
    };
    Component.prototype.is = function (e) {
        return e === this.elem;
    };
    return Component;
}());



/***/ }),

/***/ "./src/css.ts":
/*!********************!*\
  !*** ./src/css.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssClass": () => (/* binding */ cssClass),
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
    return _objtree__WEBPACK_IMPORTED_MODULE_0__.map(classNameMap, cssClass);
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
    // cirumvent objtree.map object detection with hidden props
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
    return _objtree__WEBPACK_IMPORTED_MODULE_0__.map(selectorMap, function (selector) {
        if (typeof selector === 'string')
            return elem.querySelector(selector);
        if (selector.type === SelectorType.Query)
            return query(elem, selector.toString());
        if (selector.type === SelectorType.All)
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
    if (!elem) {
        return withRemove(handler);
    }
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
    return _objtree__WEBPACK_IMPORTED_MODULE_1__.map(elemTree, function (elem, ks) {
        var hm = _objtree__WEBPACK_IMPORTED_MODULE_1__.get(handlerTree, ks);
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
    _objtree__WEBPACK_IMPORTED_MODULE_1__.map(handlerMap, function (handler) {
        handler.remove();
    });
}


/***/ }),

/***/ "./src/loadComponents.ts":
/*!*******************************!*\
  !*** ./src/loadComponents.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeLoadComponents": () => (/* binding */ makeLoadComponents)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.ts");
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
function makeLoadComponents(importComponent, _a) {
    var _b = _a === void 0 ? {} : _a, componentSelector = _b.componentSelector, getComponentName = _b.getComponentName;
    if (typeof importComponent !== 'function')
        throw new Error("importComponent must be a function");
    if (typeof componentSelector === 'undefined')
        componentSelector = DEFAULT.componentSelector;
    if (typeof getComponentName === 'undefined')
        getComponentName = DEFAULT.getComponentName;
    function isComponent(e) {
        return e.matches(componentSelector) && Boolean(getComponentName(e));
    }
    function isNotLoaded(e) {
        return !e.component;
    }
    return function loadComponents(root, extraPredicate) {
        if (extraPredicate === void 0) { extraPredicate = function () { return true; }; }
        return __awaiter(this, void 0, void 0, function () {
            var r, predicate, comps;
            var _this = this;
            return __generator(this, function (_a) {
                if (root instanceof HTMLCollection)
                    r = Array.from(root);
                else if (root instanceof HTMLElement)
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
                                        value: c,
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
    };
}


/***/ }),

/***/ "./src/objtree.ts":
/*!************************!*\
  !*** ./src/objtree.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "map": () => (/* binding */ map)
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
function get(tree, path) {
    var ks;
    if (typeof path === 'string')
        ks = path.split('.');
    else
        ks = __spreadArray([], path, true);
    var res = ks.reduce(function (r, k) { return !defined(r) ? r : r[k]; }, tree);
    return res === null ? undefined : res;
}
;
function innerMap(tree, f, ks) {
    if (ks === void 0) { ks = []; }
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.reduceObject)(tree, {}, function (acc, v, k) {
        var _a, _b;
        if (defined(v) && v.constructor === Object) {
            return __assign(__assign({}, acc), (_a = {}, _a[k] = innerMap(v, f, __spreadArray(__spreadArray([], ks, true), [k], false)), _a));
        }
        var nextv = f(v, __spreadArray(__spreadArray([], ks, true), [k], false), k);
        if (typeof nextv === 'undefined')
            return __assign({}, acc);
        return __assign(__assign({}, acc), (_b = {}, _b[k] = nextv, _b));
    });
}
// Maps function to tree leaves
function map(tree, f) {
    return innerMap(tree, f);
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
/* harmony export */   "$$": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.$$),
/* harmony export */   "$ALL": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.$ALL),
/* harmony export */   "Component": () => (/* reexport safe */ _Component__WEBPACK_IMPORTED_MODULE_0__.Component),
/* harmony export */   "css": () => (/* reexport module object */ _css__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   "dom": () => (/* reexport module object */ _dom__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "emit": () => (/* reexport safe */ _events__WEBPACK_IMPORTED_MODULE_3__.emit),
/* harmony export */   "events": () => (/* reexport module object */ _events__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   "makeLoadComponents": () => (/* reexport safe */ _loadComponents__WEBPACK_IMPORTED_MODULE_1__.makeLoadComponents),
/* harmony export */   "query": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.query),
/* harmony export */   "tree": () => (/* reexport module object */ _objtree__WEBPACK_IMPORTED_MODULE_4__)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./src/Component.ts");
/* harmony import */ var _loadComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadComponents */ "./src/loadComponents.ts");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ "./src/events.ts");
/* harmony import */ var _objtree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./objtree */ "./src/objtree.ts");
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css */ "./src/css.ts");
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













})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=uuuf.js.map