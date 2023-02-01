function defined(v) {
    return typeof v !== 'undefined' && v !== null;
}

// Walk to a specific node in the tree
export function getTree(tree, ks) {
    if (typeof ks === 'string') ks = ks.split('.');

    const res = ks.reduce((r, k) => !defined(r) ? r : r[k], tree);
    return res === null ? undefined : res;
};

// Maps function to tree leaves
export function mapTree(tree, f) {
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

// Applies function to tree leaves
export function walkTree(tree, f) {
    const inner = (tree, f, ks = []) => {
        Object.entries(tree).forEach(([k, v]) => {
            if (defined(v) && v.constructor === Object) {
                return inner(v, f, [...ks, k]);
            }
            f(v, [...ks, k], k);
        });
    };
    inner(tree, f);
}
