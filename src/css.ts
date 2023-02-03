import * as objtree from './objtree';
import { ObjectTree } from './objtree';

export interface CSSClass {
    (elem: HTMLElement, toggle?: boolean): boolean,
    match(elem: HTMLElement): boolean,
    toString(): string,
}

// Builds a convenient function to apply and test css classes to elements
export function cssClass(className: string): CSSClass {
    const toggleFn = (elem: HTMLElement, toggle = true) => elem.classList.toggle(className, toggle);
    toggleFn.match = (elem: HTMLElement) => elem.classList.contains(className);
    toggleFn.toString = () => className;
    return toggleFn;
}

// Builds a convenient function to apply css classes to elements
export function cssClassNames(
    classNameMap: ObjectTree<string>
): ObjectTree<CSSClass> {
    return objtree.map(classNameMap, cssClass);
}
