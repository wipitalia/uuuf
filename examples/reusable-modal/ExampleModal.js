class ExampleModal extends Component {
    constructor(elem) {
        super(elem);
        this.modal = new Modal(elem);
    }
}

window.ExampleModal = ExampleModal;