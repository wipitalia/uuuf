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

((global, factory) => {
    if (typeof exports === 'object' && typeof module !== 'undefined') module.exports = factory();
    else global.uuuf = factory();
})(this, () => { 'use strict';
/**
 * reduceObject callback
 * @callback reduceObjectCallback
 * @param {*} acc intermediate object
 * @param {*} v iteration value 
 * @param {string} k iteration key
 * @returns {*} object for next iteration
 */

/**
 * Ergonomic shortcut for Object.entries(...).reduce(...)
 * @param {*} init `initialValue` argument of Array.prototype.reduce
 * @param {*} obj Object to reduce
 * @param {reduceObjectCallback} f reducer function
 * @returns reduced object
 */
const reduceObject = (obj, init, f) => {
    return Object.entries(obj).reduce((acc, [k, v]) => {
        return f(acc, v, k)
    }, init);
}

/**
 * Set/get json payload to/from element's `data-args`
 * @param {Element} elem DOM element
 * @param {*} args arguments to set, JSON serializable. if undefined, read arguments
 * @returns {(undefined|*)} parsed arguments if `args` is undefined. undefined otherwise.
 */
const args = (elem, args) => {
    if (args !== undefined) {
        elem.dataset.args = JSON.stringify(args);
    } else {
        return JSON.parse(elem.dataset.args || "{}");
    }
}

/**
 * Object representing a `querySelectorAll` query for `select`
 * @typedef {Object} AllQuery
 * @property {string} query css selector
 * @property {boolean} all sentinel value
 */

/**
 * Constructor for `querySelectorAll` selectors. see `select`
 * @param {string} query string representing a valid css selector
 * @returns {AllQuery} object representing a `querySelectorAll` query
 */
const all = query => ({query, all: true})

/**
 * Transform function applied to every value of the mapping
 * @typedef selectTransformFn
 * @param {Element} elem root element
 * @param {string|AllQuery} selector iterated selector
 * @returns {*}
 */

/**
 * Query DOM from `elem`, returning map of results
 * @param {Element} elem DOM element to query on
 * @param {Object.<string, string>} selectorMap Object whose values are css selector strings or `all` returned object
 * @param {selectTransformFn} transform Transform function applied to every value of the mapping. Can be optional
 * @returns {{Object.<string, (Element|Element[]|*)>}} Object whose values are DOM elements or array of DOM elements
 */
const select = (elem, selectorMap, transform) => {
    if (typeof transform === "undefined") {
        transform = (elem, selector) => {
            if (selector.all) return [...elem.querySelectorAll(selector.query)];
            return elem.querySelector(selector);
        }
    }

    return reduceObject(selectorMap, {}, (ret, selector, fieldName) => ({
        ...ret, [fieldName]: transform(elem, selector)
    }));
}

/**
 * Function to test for css class on DOM element
 * @typedef {function} cssClassIsFn
 * @param {string} className css class name
 * @returns {boolean} `true` if css matches, `false` otherwise
 */

/**
 * Function to toggle css class on DOM element 
 * @typedef cssClassFn
 * @param {Element} elem DOM element to toggle css class to
 * @param {boolean} toggle `true` to add clas, `false` to remove class (default: `true`)
 * @property {cssClassIsFn} match function to test for css class on element
 */

/**
 * Builds a convenient function to apply css classes to elements
 * @param {string} className css class to apply
 * @returns {cssClassFn} function to apply `className` to DOM element. It has a `match` property to check for `className` on element
 */
const cssClass = className => {
    const toggleFn = (elem, toggle = true) => elem.classList.toggle(className, toggle);
    toggleFn.match = elem => elem.classList.contains(className);
    toggleFn.toString = () => className;
    return toggleFn;
}

/**
 * Builds a map of `cssClass`
 * @param {Object.<string, string>} classNameMap Object whose values are css selector strings
 * @returns {Object.<string, cssClassFn>} Object whose values are `cssClass` returned function
 */
const cssClassNames = (classNameMap) => {
    const reducer = (ret, className, fieldName) => {
        return {...ret, [fieldName]: cssClass(className)};
    }
    return reduceObject(classNameMap, {}, reducer);
}

/**
 * Event handler
 * @typedef EventCallback
 * @param {Event} evt fired event
 */

/**
 * Event remover
 * @typedef EventRemover
 */

/**
 * Event handler with remover
 * @typedef EventCallbackRemovable
 * @param {Event} evt fired event
 * @property {EventRemover} remove event remover
 */

/**
 * Adds event listeners to elements
 * NOTE: Due to lack of ability to clone functions, `handlerMap` callbacks
 * will be mutated.
 * @param {Object.<string, Element>} elemMap map of elements to apply handlers
 * @param {Object.<string, Object.<string, EventCallback>>} handlerMap
 * @returns {Object.<string, Object.<string, EventCallbackRemovable>>}
 */
const bind = (elemMap, handlerMap) => {
    return reduceObject(elemMap, {}, (r, elem, fieldName) => {
        const evtDef = handlerMap[fieldName];
        if (!evtDef) return r;
        const rHandlerMap = reduceObject(evtDef, {}, (h, handler, evtName) => {
            let unsubFn = () => {};
            if (Array.isArray(elem)) {
                unsubFn = () => elem.forEach(e => e.removeEventListener(evtName, handler));
                elem.forEach(e => e.addEventListener(evtName, handler));
            } else {
                unsubFn = () => elem.removeEventListener(evtName, handler);
                elem.addEventListener(evtName, handler);
            }
            handler.remove = unsubFn;
            return {...h, [evtName]: handler};
        });
        return {...r, [fieldName]: rHandlerMap};
    })
}

/**
 * Removes event listeners to elements
 * @param {Object.<string, Object.<string, EventCallbackRemover>} handlerMap
 */
const unbind = handlerMap => {
    Object.values(handlerMap).forEach(evtDef => {
        Object.values(evtDef).forEach(handler => {
            handler.remove();
        });
    });
}


/**
 * Emit custom events
 * @param {Element} elem DOM element
 * @param {string} name event type
 * @param {*} detail event payload
 * @param {boolean} bubbles `true` if event should bubble (default: `true`)
 */
const emit = (elem, name, detail, bubbles = true) => {
    const evt = new CustomEvent(name, {bubbles, detail});
    elem.dispatchEvent(evt);
}

/**
 * Attach object to DOM element as hidden `component` property
 * @param {Element} elem DOM element to attach to
 * @param {*} componentInstance Object to attach to element
 */
const attach = (elem, componentInstance, fieldName = 'component') => {
    Object.defineProperty(elem, fieldName, {
        configurable: true,
        writable: false,
        enumerable: false,
        value: componentInstance,
    });
}

/**
 * Predicate function for element match
 * @typedef {function} PredicateFn
 * @param {Element} elem element to test 
 * @returns {boolean} whenever the element matched
 */

/**
 * traverses dom tree returning a list of matched elements by `predicate`,
 * without descending further into matches.
 * @param {Element} root element to start traversal
 * @param {(PredicateFn|string)} predicate predicate function or css selector string
 * @returns {Element[]} Array of matched elements
 */
const query = (root, predicate) => {
    let p;
    if (typeof predicate === 'string') p = elem => elem.matches(predicate);
    else if (typeof predicate === 'function') p = predicate;
    else throw new TypeError('predicate is not a string or function');

    const findMatches = elem => {
        if (p(elem)) return [elem];
        return [...elem.children].map(findMatches).flat();
    }
    if (!Array.isArray(root)) root = [root];
    return [...root].map(findMatches).flat();
}


/**
 * Transform function applied to `query` result.
 * @typedef queryResultTransformFn
 * @param {Element[]} elems matched elements
 * @returns {*}
 */

/**
 * similar to select, but uses `uuuf.query` for DOM traversal
 * @param {Element} elem DOM element to query on
 * @param {Object.<string, (string, PredicateFn)>} selectorMap Object whose values are css selector strings or `all` returned object
 * @param {queryResultTransformFn} resultTransform Transform function applied to `query` result. Defaults to the identity function (no transformation)
 * @returns {{Object.<string, (Element[]|*)>}} Object whose values are DOM elements or array of DOM elements
 */
const querySelect = (elem, selectorMap, resultTransform = elems => elems) => {
    return select(elem, selectorMap, (elem, selector) => {
        return resultTransform(query(elem, selector));
    });
}

return {
    reduceObject,
    args,
    all,
    select,
    cssClass,
    cssClassNames,
    bind,
    unbind,
    emit,
    attach,
    query,
    querySelect,
};

});
