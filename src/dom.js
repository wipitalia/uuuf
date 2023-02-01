import { mapTree } from './objtree';

// Attach object to DOM element as hidden `component` property
export function attach(elem, componentInstance, fieldName = 'component') {
    Object.defineProperty(elem, fieldName, {
        configurable: true,
        writable: false,
        enumerable: false,
        value: componentInstance,
    });
}

// traverses dom tree returning a list of matched elements by `predicate`,
// without descending further into matches.
export function query(root, predicate) {
    let p;
    if (typeof predicate === 'string') p = elem => elem.matches(predicate);
    else if (typeof predicate === 'function') p = predicate;
    else throw new TypeError('predicate is not a string or function');

    const findMatches = elem => {
        if (p(elem)) return [elem];
        return [...elem.children].map(findMatches).flat();
    };
    if (!Array.isArray(root)) root = [root];
    return [...root].map(findMatches).flat();
}

// Constructor for `querySelectorAll` selectors. see `select`
// TODO: maybe delete since we're using liwra?
export function all(query) {
    // hacky way to circumvent {map,walk}Object
    return new (class {
        constructor(query) {
            Object.defineProperties(this, {
                query: { value: query },
                all: { value: true },
            });
        }
    })(query);
}

// Query DOM from `elem`, returning map of results
export function select(elem, selectorMap, transform) {
    if (typeof transform === 'undefined') {
        transform = (elem, selector) => {
            if (selector.all) return [...elem.querySelectorAll(selector.query)];
            return elem.querySelector(selector);
        };
    }

    return mapTree(selectorMap, selector => transform(elem, selector));
}

// similar to select, but uses `uuuf.query` for DOM traversal
export function querySelect(elem, selectorMap, resultTransform = elems => elems) {
    return select(elem, selectorMap, (elem, selector) => {
        return resultTransform(query(elem, selector));
    });
}
