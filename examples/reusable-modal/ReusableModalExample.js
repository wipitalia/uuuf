class ReusableModalExample extends Component {
    get DOM() {
        return {
            cta: '[data-cta]',
            indicator: '[data-indicator]',
            modal: '[data-component="ExampleModal"]',
        }
    }

    get HANDLERS() {
        return {
            cta: { click: () => this.openModal() },
            modal: { 
                show: () => this.renderIndicator(),
                hide: () => this.renderIndicator(),
            }
        }
    }

    constructor(elem) {
        super(elem);

        new ExampleModal(this.dom.modal);
        this.renderIndicator();
    }

    openModal() {
        this.dom.modal.component.modal.show();
    }

    renderIndicator() {
        const text = this.dom.modal.component.modal.isShown ? 'shown' : 'hidden';
        this.dom.indicator.innerHTML = text;
    }
}

window.ReusableModalExample = ReusableModalExample;