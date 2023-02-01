import { reduceObject } from "./utils";

export interface ObjectTree<A> {
    [key: string]: ObjectTree<A> | A
}

function defined(v: any): boolean {
    return typeof v !== 'undefined' && v !== null;
}

// Walk to a specific node in the tree
export function treeGet<A>(
    tree: ObjectTree<A>,
    path: string | string[],
): ObjectTree<A> | A | undefined {
    let ks: Array<string>;
    if (typeof path === 'string') ks = path.split('.');
    else ks = [...path];

    const res = ks.reduce((r, k) => !defined(r) ? r : r[k], tree);
    return res === null ? undefined : res;
};

type TreeMapFn<A, B> = (v: A, ks: string[], k: string) => B;

function innerTreeMap<A, B>(
    tree: ObjectTree<A>,
    f: TreeMapFn<A, B>,
    ks: string[] = []
): ObjectTree<B> {
    return reduceObject(tree as { [key: string]: A}, {}, (acc, v, k) => {
        if (defined(v) && v.constructor === Object) {
            return { ...acc, [k]: innerTreeMap(v as ObjectTree<A>, f, [...ks, k]) };
        }
        const nextv = f(v, [...ks, k], k);
        if (typeof nextv === 'undefined') return { ...acc };
        return { ...acc, [k]: nextv };
    });
}

// Maps function to tree leaves
export function treeMap<A, B>(
    tree: ObjectTree<A>,
    f: TreeMapFn<A, B>
): ObjectTree<B> {
    return innerTreeMap(tree, f);
}
