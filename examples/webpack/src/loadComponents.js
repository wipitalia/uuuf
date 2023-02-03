import { makeLoadComponents } from 'uuuf';

export default makeLoadComponents(comp => {
    return import(`@/${comp}`).then(mod => mod.default);
});
