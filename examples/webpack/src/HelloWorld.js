import { Component, $$ } from 'uuuf';

export default class HelloWorld extends Component {
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
