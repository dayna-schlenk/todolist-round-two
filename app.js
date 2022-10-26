// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteAndCheck);

// functions
function addTodo(evt) {
    // prevent form from submitting
    evt.preventDefault();

    // create div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // create li & append to div
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // create completed button & append to div
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completedButton.classList.add('completed-btn');
    todoDiv.appendChild(completedButton);

    // create delete button & append to div
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);

    // append all this to the ul
    todoList.appendChild(todoDiv);

    // clear todo input value
    todoInput.value = "";
}

function deleteAndCheck(evt) {
    const item = evt.target;

    // delete todo
    if (item.classList[0] === 'delete-btn') {
        // remove todo div
        const todo = item.parentElement;
        todo.remove();
    }
}