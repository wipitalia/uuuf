const initComponents = root => {
    uuuf.query(root, '[data-component]').forEach(elem => {
        const comp = window[elem.dataset.component];  
        if (!comp) return;
        new comp(elem);
    });
}

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
        this.args = uuuf.args(this.elem);
        this.css = uuuf.cssClassNames(this.CSS);
        this.dom = uuuf.select(this.elem, this.DOM);
        uuuf.bind(this.dom, this.HANDLERS);
    }

    initComponents() {
        Array.from(this.elem.children).forEach(initComponents);
    }
}

class Component extends BaseComponent {
    constructor(elem) {
        super(elem);
        uuuf.attach(this.elem, this);
    }
}

window.BaseComponent = BaseComponent;
window.Component = Component;