class TodoComponent extends BaseComponent {
    get CSS() {
        return {
            completed: 'c-todo--completed',
        };
    }

    get DOM() {
        return {
            title: '[data-title]',
            text: '[data-text]',
            deleteCta: '[data-delete-cta]',
            completedCta: '[data-completed-cta]',
        };
    }

    get HANDLERS() {
        return {
            deleteCta: { click: () => this.delete() },
            completedCta: { click: () => {
                this.complete(this.dom.completedCta.checked);
            }},
        };
    }

    constructor(elem) {
        super(elem);
        this.store = TodoStore.instance;

        this.delete = this.delete.bind(this);

        this.render(this.args);
    }

    delete() {
        this.store.deleteTodo(this.args.id);
    }

    complete(completed = true) {
        this.store.completeTodo(this.args.id, completed)
    }

    render(args) {
        this.css.completed(this.elem, args.completed);
        this.dom.title.innerHTML = args.title;
        this.dom.text.innerHTML = args.text;
        this.dom.completedCta.checked = args.completed;
    }
}

class TodoApp extends BaseComponent {
    get CSS() {
        return {};
    }

    get DOM() {
        return {
            todoTemplate: 'template[name="TodoComponent"]',
            todoForm: 'form[data-todo-form]',
            todoContainer: '[data-todos]',
            deleteAllCta: '[data-delete-all-cta]',
            completeAllCta: '[data-complete-all-cta]',
        };
    }

    get HANDLERS() {
        return {
            todoForm: { submit: evt => {
                evt.preventDefault();
                const form = evt.target;
                const todo = Object.fromEntries(new FormData(form));
                form.reset();
                this.store.addTodo(todo);
            }},
            deleteAllCta: { click: () => {
                this.dom.todos.forEach(t => t.component.delete())
            }},
            completeAllCta: { click: () => {
                this.dom.todos.forEach(t => t.component.complete())
            }},
        };
    }

    constructor(elem) {
        super(elem);
        this.store = TodoStore.instance;

        this.render = this.render.bind(this);

        this.store.subscribe(this.render);

        this.dom.todos = [];
    }

    todoTemplate(todo) {
        const newTodo = this.dom.todoTemplate.content.firstElementChild.cloneNode(true);
        uuf.args(newTodo, todo);
        return newTodo;
    }

    render(state) {
        this.dom.todoContainer.innerHTML = '';
        state.todos.forEach(t => {
            const tElem = this.todoTemplate(t);
            this.dom.todoContainer.appendChild(tElem);
            new TodoComponent(tElem);
        });
        this.dom.todos = uuf.query(this.elem, '[data-component="TodoComponent"]');
    }
}

window.TodoApp = TodoApp;