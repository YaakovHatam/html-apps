function todoModule(containerElement) {
    function addTodoItem(text, priority) {
        
    }
    
    function markTodoItemAsDone() {
        
    }
    
    return {
        addTodoItem: addTodoItem,
        markTodoItemAsDone: markTodoItemAsDone
    }
    
    
}

var t = todoModule('myTodoDiv');
t.addTodoItem('shopping', 1);
t.addTodoItem('drink', 2);
