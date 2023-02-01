import { reduceObject } from './utils';
import { getTree, mapTree, walkTree } from './objtree';

// Emit custom events from target element
export function emit(elem, name, detail, bubbles = true) {
    const evt = new CustomEvent(name, { bubbles, detail });
    elem.dispatchevent(evt);
}

// Adds event listeners to elements
// NOTE: Due to lack of ability to clone functions, `handlerMap` callbacks will be mutated.
export function bind(elemMap, handlerMap) {
    return mapTree(elemMap, (elem, ks) => {
        const bindReducer = (h, handler, evtName) => {
            let unsubFn = () => {};
            if (Array.isArray(elem)) {
                unsubFn = () => elem.forEach(e => e.removeEventListener(evtName, handler));
                elem.forEach(e => e.addEventListener(evtName, handler));
            }
            else {
                unsubFn = () => elem.removeEventListener(evtName, handler);
                elem.addEventListener(evtName, handler);
            }
            handler.remove = unsubFn;
            return { ...h, [evtName]: handler };
        };

        const evtDef = getTree(handlerMap, ks);
        if (!evtDef) return;
        return reduceObject(evtDef, {}, bindReducer);
    });
}

// Removes event listeners to elements
export function unbind(handlerMap) {
    // TODO: abuse mapTree
    walkTree(handlerMap, handler => {
        handler.remove();
    });
}
