class ReusableModalExample extends Component {
    get DOM() {
        return {
            cta: '[data-cta]',
            indicator: '[data-indicator]',
            exampleModal: '[data-component="ExampleModal"]',
        }
    }

    get HANDLERS() {
        return {
            cta: { click: () => this.openModal() },
            exampleModal: { 
                show: () => this.renderIndicator(),
                hide: () => this.renderIndicator(),
            }
        }
    }

    constructor(elem) {
        super(elem);

        // new ExampleModal(this.dom.modal);
        this.initComponents();
        this.renderIndicator();
    }

    openModal() {
        this.dom.exampleModal.component.modal.show();
    }

    renderIndicator() {
        const text = this.dom.exampleModal.component.modal.isShown ? 'shown' : 'hidden';
        this.dom.indicator.innerHTML = text;
    }
}

window.ReusableModalExample = ReusableModalExample;