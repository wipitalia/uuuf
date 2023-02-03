import { querySelect, QueryResult, QuerySelector } from './dom';
import { CSSClass, cssClassNames } from './css';
import { treeMap, ObjectTree } from './objtree';
import { bind, unbind, emit, RemovableHandlerMap, HandlerMap } from './events';

import autoBind from 'auto-bind';
import { UUUFInput } from '.';

export type HTMLElementComponent = HTMLElement & { component: typeof Component };

export type DOMDefinition = QuerySelector | [QuerySelector, HandlerMap | undefined];

export function makeComponent({
    importComponent,
}: UUUFInput): typeof Component {
    return class Component {
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
}
