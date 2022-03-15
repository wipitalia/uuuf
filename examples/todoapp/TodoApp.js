class TodoComponent {
    constructor(elem) {
        this.elem = elem;
        this.store = TodoStore.instance;

        uuf.attach(this.elem, this);

        this.args = uuf.args(this.elem);

        this.css = uuf.cssClassNames({
            completed: 'c-todo--completed',
        })
        
        this.dom = uuf.select(this.elem, {
            title: '[data-title]',
            text: '[data-text]',
            deleteCta: '[data-delete-cta]',
            completedCta: '[data-completed-cta]',
        });

        uuf.bind(this.dom, {
            deleteCta: { click: () => this.delete() },
            completedCta: { click: () => {
                this.complete(this.dom.completedCta.checked);
            }},
        })

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

class TodoApp {
    constructor(elem) {
        this.elem = elem;
        this.store = TodoStore.instance;

        this.store.subscribe(s => this.render(s));

        uuf.attach(this.elem, this);

        this.dom = uuf.select(this.elem, {
            todoTemplate: 'template[name="TodoComponent"]',
            todoForm: 'form[data-todo-form]',
            todoContainer: '[data-todos]',
            deleteAllCta: '[data-delete-all-cta]',
            completeAllCta: '[data-complete-all-cta]',
        });

        this.dom.todos = [];

        uuf.bind(this.dom, {
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
            }}
        })
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