import { Component } from './component';
import { query } from './dom';

export type LoadComponentsFn = (
    root: HTMLElement | HTMLElement[] | HTMLCollection,
    extraPredicate: ((elem: HTMLElement) => boolean)
) => Promise<void>

export interface MakeLoadComponentsOptions {
    componentSelector?: (string),
    getComponentName?: (elem: HTMLElement) => string,
}

const DEFAULT = {
    componentSelector: '[data-js-component]',
    getComponentName: (elem: HTMLElement): string => elem.dataset.jsComponent,
    // eslint-disable-next-line no-unused-vars
    importComponent: async (compName: string): Promise<typeof Component> => {
        throw new Error(`importComponent is not implemented`);
    },
};

export function makeLoadComponents(
  importComponent: (componentName: string) => Promise<typeof Component>,
  { componentSelector, getComponentName }: MakeLoadComponentsOptions = {}
): LoadComponentsFn {
    if (typeof importComponent !== 'function') throw new Error(`importComponent must be a function`);

    if (typeof componentSelector === 'undefined') componentSelector = DEFAULT.componentSelector
    if (typeof getComponentName === 'undefined') getComponentName = DEFAULT.getComponentName

    function isComponent(e: HTMLElement): boolean {
        return e.matches(componentSelector) && Boolean(getComponentName(e));
    }

    function isNotLoaded(e: HTMLElement & { component?: typeof Component}): boolean {
        return !e.component;
    }

    return async function loadComponents(
        root: HTMLElement | HTMLElement[] | HTMLCollection,
        extraPredicate: ((elem: HTMLElement) => boolean) = () => true
    ): Promise<void> {
        let r: HTMLElement[];
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
                    value: c,
                })
                await c.ready();
            }
        });
    };
}