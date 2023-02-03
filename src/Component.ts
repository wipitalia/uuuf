import { query, querySelect, $$, $ALL, QueryResult, SelectorMaker, QuerySelector } from './dom';
import { CSSClass, cssClassNames } from './css';
import { treeMap, ObjectTree } from './objtree';
import { bind, unbind, emit, RemovableHandlerMap, HandlerMap } from './events';

import autoBind from 'auto-bind';

export type HTMLElementComponent = HTMLElement & { component: typeof Component };

export type DOMDefinition = QuerySelector | [QuerySelector, HandlerMap | undefined];

const DEFAULT = {
    componentSelector: '[data-js-component]',
    getComponentName: (elem: HTMLElement): string => elem.dataset.jsComponent,
    // eslint-disable-next-line no-unused-vars
    importComponent: async (compName: string): Promise<typeof Component> => {
        throw new Error(`importComponent is not implemented`);
    },
};

export type UUUF = {
    loadComponents: any,
    Component: typeof Component,
}

export function uuuf({
    componentSelector = DEFAULT.componentSelector,
    getComponentName = DEFAULT.getComponentName,
    importComponent = DEFAULT.importComponent,
} = {}): UUUF {
    function isComponent(e: HTMLElement): boolean {
        return e.matches(componentSelector) && Boolean(getComponentName(e));
    }

    function isNotLoaded(e: HTMLElement & { component?: Component}): boolean {
        return !e.component;
    }

    async function loadComponents(
        root: HTMLElement | HTMLElement[] | HTMLCollection,
        extraPredicate: ((elem: HTMLElement) => boolean) = () => true
    ): Promise<void> {
        let r;
        if (root instanceof HTMLCollection) r = Array.from(root) as HTMLElement[];
        if (root instanceof HTMLElement) r = [root] as HTMLElement[];
        else r = root as HTMLElement[];

        const predicate = (e: HTMLElement): boolean => {
            return isComponent(e) && isNotLoaded(e) && extraPredicate(e);
        };

        const comps: Promise<Component>[] = query(r, predicate).map(async el => {
            const compName = getComponentName(el);
            const comp = await importComponent(compName);
            return new (comp as typeof Component)(el);
        });

        return Promise.all(comps).then(async cs => {
            for (const c of cs) {
                Object.defineProperty(c.elem, 'component', {
                    configurable: true,
                    writable: false,
                    enumerable: false,
                    value: this,
                })
                await c.ready();
            }
        });
    };

    class Component {
        static import = importComponent;

        static load = loadComponents;

        elem: HTMLElementComponent;
        args: { [key: string]: any };
        css: ObjectTree<CSSClass>;
        dom: ObjectTree<QueryResult>;
        _handlers: ObjectTree<RemovableHandlerMap>;

        // Declarations
        get CSS(): ObjectTree<string> {
            return {
                /*
                myClass: 'my-class',
                */
            };
        }

        get DOM(): ObjectTree<DOMDefinition> {
            return {
                /*
                myElement: '[data-my-element]',
                myElement: ['[data-my-element]', {
                    click: () => console.log("hello, world!"),
                }],
                myGroup: {
                    mySubGroup: {
                        elem1: '[data-elem-1]',
                        elem2: ['[data-elem-2]', {
                            click: () => console.log("hello, world!"),
                        }]
                    }
                },
                */
            };
        }

        // Component lifecycle
        constructor(elem: HTMLElement) {
            this.elem = elem as HTMLElementComponent;
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
            this.dom = querySelect(this.elem, domMapping);
        }

        bind() {
            this.select();
            this.unbind();
            const handlersMapping = treeMap(this.DOM, v => {
                return Array.isArray(v) ? v[1] : undefined;
            });
            console.log(handlersMapping)
            this._handlers = bind(this.dom, handlersMapping);
        }

        unbind() {
            unbind(this._handlers);
        }

        emit(name: string, detail: any, bubbles = true) {
            emit(this.elem, name, detail, bubbles);
        }

        async mix(component: string | Component, elem = this.elem): Promise<Component> {
            let c;
            if (typeof component === 'string') c = await importComponent(component);
            else c = component;

            const instance = new (c as typeof Component)(elem);
            await instance.ready();
            return instance;
        }

        is(e: any): boolean {
            return e === this.elem;
        }
    };

    return {
        loadComponents,
        Component,
    };
}
