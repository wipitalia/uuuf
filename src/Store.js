import { clone, omit, equals, identity } from 'ramda';
import produce from 'immer';
import create from 'zustand/vanilla';
import autoBind from 'auto-bind';

const omitActions = omit(['actions']);


export default class Store {
    static combine = storeMap => {
        const { initState, actions } = Object.entries(storeMap).reduce((r, [k, v]) => {
            const initState = { ...r.initState, [k]: v.getState() };
            const actions = { ...r.actions, [k]: v.actions };
            return { initState, actions };
        }, { initState: {}, actions: {} });

        const combined = new Store(initState, () => actions);

        Object.entries(storeMap).forEach(([k, v]) => {
            v.subscribe(ps => combined._setState({ [k]: ps }));
        });

        return combined;
    };

    constructor(initialState, actions) {
        const store = create(set => {
            const immerSet = fn => set(produce(fn));
            return {
                ...clone(initialState),
                actions: actions(immerSet),
            };
        });

        const setState = (...args) => this._store.setState(...args);

        Object.defineProperties(this, {
            _store: { enumerable: false, writable: false, value: store },
            _setState: { enumerable: false, writable: true, value: setState },
        });

        autoBind(this);
    }

    get state() {
        return omitActions(this._store.getState());
    }

    get actions() {
        return this._store.getState().actions;
    }

    getState(selector = identity) {
        return selector(omitActions(this._store.getState()));
    }

    destroy() {
        return this._store.destroy();
    }

    subscribe(selector, fn) {
        if (typeof fn === 'undefined') {
            fn = selector;
            selector = identity;
        }

        let oldState = undefined;
        return this._store.subscribe(state => {
            const section = selector(omitActions(state));
            if (typeof oldState === 'undefined' || !equals(oldState, section)) {
                fn(section, oldState);
                oldState = section;
            }
        });
    }
}
