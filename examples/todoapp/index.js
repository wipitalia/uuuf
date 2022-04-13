const store = TodoStore.instance;

uuuf.query(document.body, '[data-component="TodoApp"]').forEach(e => {
    new TodoApp(e);
})