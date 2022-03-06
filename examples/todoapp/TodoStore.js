const deepclone = obj => JSON.parse(JSON.stringify(obj));

const generateId = (() => {
    let internalCounter = 1;
    return () => {
        const id = internalCounter;
        internalCounter++;
        return id;
    }
})();

// sample store implementation
class TodoStore {
    static INITIAL_STATE = {
        todos: [],
    }

    static _instance = null;
    static get instance() {
        if (!TodoStore._instance) {
            TodoStore._instance = new TodoStore();
        } 
        return TodoStore._instance;
    }

    constructor(initialState = TodoStore.INITIAL_STATE) {
        this._state = deepclone(initialState);
        this._subscribers = [];
    }

    get state() {
        return deepclone(this._state);
    }

    subscribe(fn, selector = s => s) {
        this._subscribers.push([fn, selector]);
    }

    unsubscribe(fn) {
        this._subscribers = this._subscribers.filter(f => f !== fn);
    }

    setState(fn = () => {}) {
        this._state = fn(this.state);
        this._subscribers.forEach(([sub, sel]) => sub(sel(this.state)));
    }


    // actions
    addTodo(todos) {
        if (!Array.isArray(todos)) todos = [todos];

        todos.forEach(todo => {
            if (!todo.id) todo.id = generateId();
            if (!todo.completed) todo.completed = false;
        });

        this.setState(s => ({...s, todos: s.todos.concat(todos)}));
    }

    completeTodo(id, completed = true) {
        this.setState(s => {
            const todos = deepclone(s.todos);

            const todo = todos.find(t => t.id === id);
            if (!todo) return s;
            todo.completed = completed;

            return {...s, todos};
        })
    }

    deleteTodo(id) {
        this.setState(s => {
            const nextTodos = s.todos.filter(t => t.id !== id);
            return {...s, todos: nextTodos};
        })
    }
}

window.TodoStore = TodoStore;