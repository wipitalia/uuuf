import { mapTree } from './objtree';

// Builds a convenient function to apply and test css classes to elements
function cssClass(className) {
    const toggleFn = (elem, toggle = true) => elem.classList.toggle(className, toggle);
    toggleFn.match = elem => elem.classList.contains(className);
    toggleFn.toString = () => className;
    return toggleFn;
}

// Builds a convenient function to apply css classes to elements
export function cssClassNames(classNameMap) {
    return mapTree(classNameMap, cssClass);
}