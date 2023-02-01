// Checks if the value is not undefined and not null
// Ergonomic shortcut for Object.entries(...).reduce(...)
export function reduceObject(obj, init, f) {
    return Object.entries(obj).reduce((acc, [k, v]) => {
        return f(acc, v, k);
    }, init);
}
