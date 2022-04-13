class TodoComponent {
    constructor(elem) {
        this.elem = elem;
        this.store = TodoStore.instance;

        uuuf.attach(this.elem, this);

        this.args = uuuf.args(this.elem);

        this.css = uuuf.cssClassNames({
            completed: 'c-todo--completed',
        })
        
        this.dom = uuuf.select(this.elem, {
            title: '[data-title]',
            text: '[data-text]',
            deleteCta: '[data-delete-cta]',
            completedCta: '[data-completed-cta]',
        });

        uuuf.bind(this.dom, {
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

        uuuf.attach(this.elem, this);

        this.dom = uuuf.select(this.elem, {
            todoTemplate: 'template[name="TodoComponent"]',
            todoForm: 'form[data-todo-form]',
            todoContainer: '[data-todos]',
            deleteAllCta: '[data-delete-all-cta]',
            completeAllCta: '[data-complete-all-cta]',
        });

        this.dom.todos = [];

        uuuf.bind(this.dom, {
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
        uuuf.args(newTodo, todo);
        return newTodo;
    }

    render(state) {
        this.dom.todoContainer.innerHTML = '';
        state.todos.forEach(t => {
            const tElem = this.todoTemplate(t);
            this.dom.todoContainer.appendChild(tElem);
            new TodoComponent(tElem);
        });
        this.dom.todos = uuuf.query(this.elem, '[data-component="TodoComponent"]');
    }
}

window.TodoApp = TodoApp;