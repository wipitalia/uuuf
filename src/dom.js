import { treeMap } from './objtree';

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
    if (typeof predicate === 'function') p = predicate;
    else p = elem => elem.matches(predicate);

    const findMatches = elem => {
        if (p(elem)) return [elem];
        return [...elem.children].map(findMatches).flat();
    };
    if (!Array.isArray(root)) root = [root];
    return [...root].map(findMatches).flat();
}

function selector(type, strings, ...values) {
    const query = strings[0] + strings.slice(1).map((s, i) => values[i] + s);

    // cirumvent treeMap object detection with hidden props
    return Object.create(null, {
        toString: { value: () => query },
        type: { value: type },
    });
}

export function $$(strings, ...values) {
    return selector('query', strings, ...values);
}

export function $ALL(strings, ...values) {
    return selector('all', strings, ...values);
}

// Query DOM from `elem`, returning map of results
export function querySelect(elem, selectorMap) {
    return treeMap(selectorMap, selector => {
        if (selector.type === 'query') return query(elem, selector);
        if (selector.type === 'all') return [...elem.querySelectorAll(selector)];
        return elem.querySelector(selector);
    });
}
