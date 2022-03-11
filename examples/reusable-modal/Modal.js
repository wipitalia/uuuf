class Modal extends BaseComponent {
    get DOM() {
        return {
            closeBtn: '[data-close]',
        }
    }

    get CSS() {
        return {
            shown: 'modal--shown',
        }
    }

    get HANDLERS() {
        return {
            closeBtn: { click: () => this.hide() }
        }
    }

    constructor(elem) {
        super(elem);
    }

    show() {
        this.css.shown(this.elem, true);
        uuf.emit(this.elem, 'show');
    }

    hide() {
        this.css.shown(this.elem, false);
        uuf.emit(this.elem, 'hide');
    }

    get isShown() {
        return this.css.shown.is(this.elem);
    }
}

window.Modal = Modal;