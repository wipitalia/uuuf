import uuuf, { reduceObject } from 'libuuuf';
import liwra from 'liwra';

import autoBind from 'auto-bind';


const isComponent = e => e.matches('[data-js-component]') && e.dataset.jsComponent;

const isNotLoaded = e => !e.component;

const isComponentNotLoaded = e => isComponent(e) && isNotLoaded(e);


export const importComponent = componentPath => {
    return import(`@Components/${componentPath}`).then(mod => mod.default);
};

export const loadComponents = (root, extraPredicate = () => true) => {
    if (root instanceof HTMLCollection) root = [...root];

    const predicate = e => isComponentNotLoaded(e) && extraPredicate(e);

    const comps = uuuf.query(root, predicate).map(el => {
        const compName = el.dataset.jsComponent;
        return importComponent(compName).then(comp => new comp(el));
    });

    return Promise.all(comps).then(async cs => {
        for (const c of cs) {
            uuuf.attach(c.elem, c);
            await c.ready();
        }
    });
};

export default class Component {
    // Utils
    static import = importComponent;

    static load = loadComponents;


    // Declarations
    get CSS() {
        return {
            /*
            myClass: 'my-class',
            */
        };
    }

    get DOM() {
        return {
            /*
            myElement: '[data-my-element]',
            myElement: ['[data-my-element]', {
                click: () => console.log("hello, world!"),
            }]
            */
        };
    }

    get FX() {
        return null;
        /*
        [store, {
            example: [selector, callback]
        }],
        */
    }


    // Component lifecycle
    constructor(elem) {
        this.elem = elem;
        this.args = uuuf.args(this.elem);

        Object.defineProperties(this, {
            _handlers: { enumerable: false, writable: true, value: {} },
        });

        this.css = uuuf.cssClassNames(this.CSS);

        autoBind(this); // automatic this.method = this.method.bind(this);
    }

    // called after all components are loaded
    // should be overloaded rather than extended
    async ready() {
        this.bind();
        this.connect();
    }


    // Methods
    select() {
        const domMapping = uuuf.mapTree(this.DOM, v => {
            return Array.isArray(v) ? v[0] : v;
        });
        this.dom = uuuf.querySelect(this.elem, domMapping, liwra);
    }

    bind() {
        this.select();
        this.unbind();
        const handlersMapping = uuuf.mapTree(this.DOM, v => {
            return Array.isArray(v) ? v[1] : undefined;
        });
        this._handlers = uuuf.bind(this.dom, handlersMapping);
    }

    unbind() {
        uuuf.unbind(this._handlers);
    }

    connect() {
        const connectStore = ([store, selcbs]) => {
            const makeSlice = selector => {
                const slice = () => store.getState(selector);
                slice.selector = selector;
                return slice;
            };

            const { subs, slices } = reduceObject(
                selcbs,
                { subs: {}, slices: {} },
                (r, [sel, cb], k) => ({
                    subs: { ...r.subs, [k]: store.subscribe(sel, cb) },
                    slices: { ...r.slices, [k]: makeSlice(sel) },
                })
            );

            const unsubscribeAll = () => Object.values(subs).forEach(us => {
                us();
            });

            return {
                subscriptions: subs,
                slices,
                unsubscribeAll,
            };
        };

        if (this.FX) {
            this.fx = connectStore(this.FX);
            this.store = this.FX[0];
            this.actions = this.store.actions;
        }
    }

    emit(name, detail, bubbles = true) {
        uuuf.emit(this.elem, name, detail, bubbles);
    }

    async mix(component, elem = this.elem) {
        if (typeof component === 'string') {
            component = await importComponent(component);
        }
        const instance = new component(elem);
        await instance.ready();
        return instance;
    }

    is(e) {
        return e === this.elem;
    }
}
