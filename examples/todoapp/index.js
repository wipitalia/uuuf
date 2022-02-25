const store = TodoStore.instance;

uuf.query(document.body, '[data-component="TodoApp"]').forEach(e => {
    new TodoApp(e);
})