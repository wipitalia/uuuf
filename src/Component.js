import { query, querySelect, attach } from './dom';
import { cssClassNames } from './css';
import { treeMap } from './objtree';
import { bind, unbind, emit } from './events';
import liwra from 'liwra';

import autoBind from 'auto-bind';


// async function importComponent(componentPath) {
//     // return import(`@Components/${componentPath}`).then(mod => mod.default);
//     return import(`${componentPath}`).then(mod => mod.default);
// };

const DEFAULT = {
    componentSelector: '[data-js-component]',
    getComponentName: elem => elem.dataset.jsComponent,
    // eslint-disable-next-line no-unused-vars
    importComponent: async () => {
        throw new Error(`importComponent is not implemented`);
    },
};

export default function makeComponent({
    componentSelector = DEFAULT.componentSelector,
    getComponentName = DEFAULT.getComponentName,
    importComponent = DEFAULT.importComponent,
} = {}) {
    const isComponent = e => e.matches(componentSelector) && getComponentName(e);
    const isNotLoaded = e => !e.component;

    const module = {};

    module.loadComponents = async (root, extraPredicate = () => true) => {
        if (root instanceof HTMLCollection) root = [...root];

        const predicate = e => {
            return isComponent(e) && isNotLoaded(e) && extraPredicate(e);
        };

        const comps = query(root, predicate).map(async el => {
            const compName = getComponentName(el);
            const comp = await importComponent(compName);
            return new comp(el);
        });

        return Promise.all(comps).then(async cs => {
            for (const c of cs) {
                attach(c.elem, c);
                await c.ready();
            }
        });
    };

    module.Component = class Component {
        static import = importComponent;

        static load = module.loadComponents;

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
                }],
                myGroup: {
                    elem1: '[data-elem-1]',
                    elem2: ['[data-elem-2]', {
                        click: () => console.log("hello, world!"),
                    }]
                },
                */
            };
        }

        // Component lifecycle
        constructor(elem) {
            this.elem = elem;
            this.args = JSON.parse(elem.dataset.args || '{}');

            Object.defineProperties(this, {
                _handlers: { enumerable: false, writable: true, value: {} },
            });

            this.css = cssClassNames(this.CSS);

            autoBind(this); // automatic this.method = this.method.bind(this);
        }

        // called after all components are loaded
        // should be overloaded rather than extended
        async ready() {
            this.bind();
        }


        // Methods
        select() {
            const domMapping = treeMap(this.DOM, v => {
                return Array.isArray(v) ? v[0] : v;
            });
            this.dom = querySelect(this.elem, domMapping, liwra);
        }

        bind() {
            this.select();
            this.unbind();
            const handlersMapping = treeMap(this.DOM, v => {
                return Array.isArray(v) ? v[1] : undefined;
            });
            this._handlers = bind(this.dom, handlersMapping);
        }

        unbind() {
            unbind(this._handlers);
        }

        emit(name, detail, bubbles = true) {
            emit(this.elem, name, detail, bubbles);
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
    };

    return module;
}
