const toDoFormElement = document.getElementById('to-do-form');
const toDoInputElement = document.querySelector('#to-do-form input');
const toDoListElement = document.getElementById('to-do-list');
 
function addToDoList(event) {
    event.preventDefault();
    let toDo = toDoInputElement.value;
    const toDoList = document.createElement('li');
    toDoList.innerText = toDo;
    toDoListElement.appendChild(toDoList);
    const removeToDoList = document.createElement('button');
    removeToDoList.
    removeToDoList.innerText = 'Delete';
    toDoListElement.appendChild(removeToDoList);
    toDoInputElement.value = "";
}

toDoFormElement.addEventListener('submit', addToDoList);
