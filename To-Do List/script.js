document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        const taskList = document.getElementById('taskList');
        
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove';
        removeButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });
        
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
        
        taskInput.value = '';
    }
});
