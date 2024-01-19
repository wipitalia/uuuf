import { reduceObject } from './utils';
import * as objtree from './objtree';
import { ObjectTree} from './objtree';
import { QueryResult } from './dom';

export type Handler = (evt: Event) => void
export type HandlerMap = { [event: string]: Handler }

export type RemovableHandler = { (): Handler, remove(): void }
export type RemovableHandlerMap = { [event: string]: RemovableHandler }

// Emit custom events from target element
export function emit(
    elem: HTMLElement,
    name: string,
    detail: any,
    bubbles = true
): void {
    const evt = new CustomEvent(name, { bubbles, detail });
    elem.dispatchEvent(evt);
}

function withRemove(fn: Function, remove = () => {}): RemovableHandler {
    // cleanest known way to clone a function
    // it's acceptable because `get DOM()` only uses arrow function or bound methods
    const cloned = fn.bind(null);
    cloned.remove = remove;
    return cloned;
}

function makeRemovableHandler(
    elem: QueryResult,
    eventName: string,
    handler: Handler,
): RemovableHandler {
    if (!elem) {
        return withRemove(handler);
    }

    if (Array.isArray(elem)) {
        elem.forEach(e => e.addEventListener(eventName, handler));
        return withRemove(handler, () => {
            elem.forEach(e => e.removeEventListener(eventName, handler));
        });
    }

    elem.addEventListener(eventName, handler);
    return withRemove(handler, () => {
        elem.removeEventListener(eventName, handler);
    });
}

// Adds event listeners to elements
export function bind(
    elemTree: ObjectTree<QueryResult>,
    handlerTree: ObjectTree<HandlerMap>
): ObjectTree<RemovableHandlerMap> {
    return objtree.map(elemTree, (elem, ks) => {
        const hm = objtree.get<HandlerMap>(handlerTree, ks);
        if (!hm) return;
        return reduceObject(hm as { [key: string]: Handler}, {}, (
            ht: ObjectTree<RemovableHandlerMap>,
            handler: Handler,
            eventName: string,
        ) => {
            const rh = makeRemovableHandler(elem, eventName, handler);
            return { ...ht, [eventName]: rh }
        }) as RemovableHandlerMap;
    });
}

// Removes event listeners to elements
export function unbind(handlerMap: ObjectTree<RemovableHandlerMap>) {
    objtree.map(handlerMap, handler => {
        handler.remove();
    });
}
