class BaseComponent {
    get DOM() {
        return {};
    }

    get CSS() {
        return {};
    }

    get HANDLERS() {
        return {};
    }

    constructor(elem) {
        this.elem = elem;
        uuuf.attach(this.elem, this);
        this.args = uuuf.args(this.elem);
        this.css = uuuf.cssClassNames(this.CSS);
        this.dom = uuuf.select(this.elem, this.DOM);
        uuuf.bind(this.dom, this.HANDLERS);
    }
}

window.BaseComponent = BaseComponent;