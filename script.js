const todoList = document.getElementById('todoList');
const todoInput = document.getElementById('todoInput');

function addTodo() {
    const task = todoInput.value;
    
    if (!task) return; // Do nothing if task is empty

    // Create the list item
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    
    // Create the text node
    const textNode = document.createTextNode(task);
    listItem.appendChild(textNode);

    // Create the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.onclick = function() {
        todoList.removeChild(listItem);
    };

    // Create the complete button
    const completeBtn = document.createElement('button');
    completeBtn.innerText = 'Complete';
    completeBtn.className = 'btn btn-success btn-sm mr-2';
    completeBtn.onclick = function() {
        listItem.style.textDecoration = "line-through";
        listItem.querySelector('.btn-success').disabled = true;
    };

    // Append buttons to the list item
    listItem.appendChild(completeBtn);
    listItem.appendChild(deleteBtn);
    
    // Append the list item to the list
    todoList.appendChild(listItem);

    // Clear the input
    todoInput.value = '';
}

// Optional: Enable "Enter" key to add a task
todoInput.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        addTodo();
    }
});
