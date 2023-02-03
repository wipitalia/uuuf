import * as objtree from './objtree';
import { ObjectTree } from './objtree';

type QueryPredicate = string | ((e: HTMLElement) => boolean);

// traverses dom tree returning a list of matched elements by `predicate`,
// without descending further into matches.
export function query(
    root: HTMLElement | HTMLElement[],
    predicate: QueryPredicate
): HTMLElement[] {
    let p: (elem: HTMLElement) => boolean;
    if (typeof predicate === 'function') p = predicate;
    else p = elem => elem.matches(predicate);

    function findMatches(elem: HTMLElement): HTMLElement[] {
        if (p(elem)) return [elem];
        return Array.from(elem.children).map(findMatches).flat();
    };
    if (!Array.isArray(root)) root = [root];
    return Array.from(root).map(findMatches).flat();
}

enum SelectorType {
    All = 'all',
    Query = 'query',
}

export type QuerySelector = string | { type: SelectorType, toString(): string };

function selector(
    type: SelectorType,
    strings: string[],
    ...values: any[]
): QuerySelector {
    const query = strings[0] + strings.slice(1).map((s, i) => values[i] + s);

    // cirumvent objtree.map object detection with hidden props
    return Object.create(null, {
        toString: { value: () => query },
        type: { value: type },
    });
}

export type SelectorMaker = (string: string[], ...value: any[]) => QuerySelector;

export function $$(strings: string[], ...values: any[]): QuerySelector {
    return selector(SelectorType.Query, strings, ...values);
}

export function $ALL(strings: string[], ...values: any[]): QuerySelector {
    return selector(SelectorType.All, strings, ...values);
}

export type QueryResult = Element | HTMLElement | HTMLElement[];

// Query DOM from `elem`, returning map of results
export function querySelect(
    elem: HTMLElement,
    selectorMap: ObjectTree<QuerySelector>
): ObjectTree<QueryResult> {
    return objtree.map(selectorMap, selector => {
        if (typeof selector === 'string') return elem.querySelector(selector);
        if (selector.type === 'query') return query(elem, selector.toString());
        if (selector.type === 'all') return Array.from(elem.querySelectorAll(selector.toString()));
    });
}
