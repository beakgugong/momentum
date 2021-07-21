const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function cancle () {
   const li= event.target.parentElement;
   li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X"
    button.addEventListener("click",cancle);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;
    console.log(li);
    toDoList.appendChild(li);
}

function handleToDo(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}
toDoForm.addEventListener("submit",handleToDo);


const savedtoDos = localStorage.getItem(TODOS_KEY);

if(savedtoDos !== null){
    const parsed = JSON.parse(savedtoDos);
    parsed.forEach((item) => console.log("this is the turn of", item));
}
