import { reduceObject } from "./utils";

export interface ObjectTree<A> {
    [key: string]: ObjectTree<A> | A
}

function defined(v: any): boolean {
    return typeof v !== 'undefined' && v !== null;
}

// Walk to a specific node in the tree
export function get<A>(
    tree: ObjectTree<A>,
    path: string | string[],
): ObjectTree<A> | A | undefined {
    let ks: Array<string>;
    if (typeof path === 'string') ks = path.split('.');
    else ks = [...path];

    const res = ks.reduce((r, k) => !defined(r) ? r : r[k], tree);
    return res === null ? undefined : res;
};

type ObjtreeMapFn<A, B> = (v: A, ks: string[], k: string) => B;

function innerMap<A, B>(
    tree: ObjectTree<A>,
    f: ObjtreeMapFn<A, B>,
    ks: string[] = []
): ObjectTree<B> {
    return reduceObject(tree as { [key: string]: A}, {}, (acc, v, k) => {
        if (defined(v) && v.constructor === Object) {
            return { ...acc, [k]: innerMap(v as ObjectTree<A>, f, [...ks, k]) };
        }
        const nextv = f(v, [...ks, k], k);
        if (typeof nextv === 'undefined') return { ...acc };
        return { ...acc, [k]: nextv };
    });
}

// Maps function to tree leaves
export function map<A, B>(
    tree: ObjectTree<A>,
    f: ObjtreeMapFn<A, B>
): ObjectTree<B> {
    return innerMap(tree, f);
}
