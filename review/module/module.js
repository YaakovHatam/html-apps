function modulePattern() {
    
    (function() {
        console.log('pattern called');
    }())
    
    
    function saveTask(task) {
        
    }
    
    function deleteTask(taskId) {
        
    }
    
    function updateTask(task) {
        
    }
    
    function getTask(taskId) {
        
    }
    
    return {
        saveTask: saveTask,
        deleteTask: deleteTask,
        updateTask: updateTask,
        getTask: getTask
    }
}

var p = modulePattern();
p.