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
        this.args = uuf.args(this.elem);
        this.css = uuf.cssClassNames(this.CSS);
        this.dom = uuf.select(this.elem, this.DOM);
        uuf.bind(this.dom, this.HANDLERS);
    }
}

class Component extends BaseComponent {
    constructor(elem) {
        super(elem);
        uuf.attach(this.elem, this);
    }
}

window.BaseComponent = BaseComponent;
window.Component = Component;