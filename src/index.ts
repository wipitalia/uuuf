/*
                     _                    _
                  ,/                        \,
        _________{(                          })_________
       /.-------./\\                        //\.-------.\
      //@@@@@@@//@@\\  )                (  //@@\\@@@@@@@\\
     //@@@@@@@//@@@@>>/                  \<<@@@@\\@@@@@@@\\
    //O@O@O@O//@O@O//                      \\O@O@\\O@O@O@O\\
  //OOOOOOOO//OOOO||          \  /          ||OOOO\\OOOOOOOO\\
 //O%O%O%O%//O%O%O%\\         ))((         //%O%O%O\\%O%O%O%O\\
||%%%%%%%%//'  `%%%%\\       //  \\       //%%%%'   `\\%%%%%%%||
((%%%%%%%((      %%%%%\\    ((    ))    //%%%%%       ))%%%%%%))
 \:::' `::\\      `:::::\\   \)~~(/    //:::::'      //::' `:::/
  )'     `;)'      (`  ` \\ `<@  @>' / / '  ')      `(;'     `(
          (               \`\ )^^( /  /               )
        _                  ) \\oo/   (
       (@)                  \  `'   /                      _
       |-|\__________________\__^__<________oOo__________ (@)
       | |                                  VVV          \|-|
       |-|   uuuf: Undoubtedly Useful Utility Functions   |-|
       |_|\_____________________________________________  | |
       (@)                 / ,/ \_____/ \\ ~\/~         `\|-|
        ~             ___//^~      \____/\\               (@)
                     <<<  \     __  <____/||               ~
                               <   \ <___/||
                                  || <___//
                                  \ \/__//
                                   ~----~
*/

import { makeComponent } from './component';
import { query, $$, $ALL } from './dom';
import { emit } from './events';

export { emit, query, $$, $ALL };

export interface UUUF {
    loadComponents: (
      root: HTMLElement | HTMLElement[] | HTMLCollection,
      extraPredicate: ((elem: HTMLElement) => boolean)
    ) => Promise<void>,
    Component: typeof Component,
    query: typeof query,
    emit: typeof emit,
    $$: typeof $$,
    $ALL: typeof $ALL,
}

export interface UUUFInput {
    componentSelector: (string),
    getComponentName: (elem: HTMLElement) => string,
    importComponent: (compName: string) => Promise<typeof Component>,
}

const DEFAULT = {
    componentSelector: '[data-js-component]',
    getComponentName: (elem: HTMLElement): string => elem.dataset.jsComponent,
    // eslint-disable-next-line no-unused-vars
    importComponent: async (compName: string): Promise<typeof Component> => {
        throw new Error(`importComponent is not implemented`);
    },
};

export default function uuuf({
    componentSelector = DEFAULT.componentSelector,
    getComponentName = DEFAULT.getComponentName,
    importComponent = DEFAULT.importComponent,
} = {}): UUUF {
    const Component = makeComponent({
      componentSelector,
      getComponentName,
      importComponent,
    });

    function isComponent(e: HTMLElement): boolean {
        return e.matches(componentSelector) && Boolean(getComponentName(e));
    }

    function isNotLoaded(e: HTMLElement & { component?: typeof Component}): boolean {
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

        const comps: Promise<typeof Component>[] = query(r, predicate).map(async el => {
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

    return {
      loadComponents,
      Component,
      $$,
      $ALL,
      query,
      emit,
    }
}