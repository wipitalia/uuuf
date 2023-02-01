// Checks if the value is not undefined and not null
// Ergonomic shortcut for Object.entries(...).reduce(...)
export function reduceObject<A, B>(
    obj: { [key: string]: A },
    init: any,
    f: (acc: B, v: A, k: string) => B
): B {
    return Object.entries(obj).reduce((acc, [k, v]) => {
        return f(acc, v, k);
    }, init);
}
