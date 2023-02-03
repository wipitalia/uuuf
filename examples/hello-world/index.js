const { Component, $$, $ALL, makeLoadComponents } = uuuf;

// you should probably replace this with a dynamic import
const loadComponents = makeLoadComponents(comp => AVAILABLE_COMPONENTS[comp]);
// end of dummy code

class HelloWorld extends Component {
    get DOM() {
        return {
            output: '[data-output]',
            btn: ['[data-btn]', {
                click: () => this.dom.output.innerHTML = 'Hello, World!'
            }],
            alerts: [$$`[data-alert]`, {
                click: e => alert(`hello from ${e.target.dataset.alert}`)
            }]
        }
    }

    async ready() {
        this.bind();
        console.log('this.dom = ', this.dom)
    }
}

// dummy code
const AVAILABLE_COMPONENTS = {
    HelloWorld,
}
// end of dummy code

loadComponents(document.body);