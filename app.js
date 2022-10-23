// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// event listeners
todoButton.addEventListener('click', addTodo);

// functions
function addTodo(event) {
    // prevent form from submitting
    event.preventDefault();

    // create div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // create li
    const newTodo = document.createElement('li');
    newTodo.innerText = 'Hey?';
    newTodo.classList.add('todo-item');

    // append li to div
    todoDiv.appendChild(newTodo);

    // create button to delete
    // create button to mark done
}