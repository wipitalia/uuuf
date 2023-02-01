function defined(v) {
    return typeof v !== 'undefined' && v !== null;
}

// Walk to a specific node in the tree
export function treeGet(tree, ks) {
    if (typeof ks === 'string') ks = ks.split('.');

    const res = ks.reduce((r, k) => !defined(r) ? r : r[k], tree);
    return res === null ? undefined : res;
};

// Maps function to tree leaves
export function treeMap(tree, f) {
    const inner = (tree, f, ks = []) => {
        return Object.entries(tree).reduce((acc, [k, v]) => {
            if (defined(v) && v.constructor === Object) {
                return { ...acc, [k]: inner(v, f, [...ks, k]) };
            }
            const nextv = f(v, [...ks, k], k);
            if (typeof nextv === 'undefined') return { ...acc };
            return { ...acc, [k]: nextv };
        }, {});
    };
    return inner(tree, f);
}
