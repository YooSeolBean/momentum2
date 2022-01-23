const todoForm = document.querySelector("#form_todo");
const todoInput = todoForm.querySelector(".todo_input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveTodos(){
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteTodo(event){
 const li = event.target.parentElement;
 li.remove();
 toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
 saveTodos();
 
}

function paintToDo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button =document.createElement("button");
  button.innerText = "❌"
  button.addEventListener("click",deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

const TODO_LIST = "todoList"

function todoContents(event){
  event.preventDefault();
  const newInput = todoInput.value;
  todoInput.value = ""; 
  const newInputObj = {
    text:newInput,
    id: Date.now()
  };
  toDos.push(newInputObj);
  paintToDo(newInputObj); 
  localStorage.setItem(TODO_LIST,newInput);
  saveTodos();
}

const callLocalStorage = localStorage.getItem(TODO_LIST);
todoForm.addEventListener("submit",todoContents);

const savedTodos = localStorage.getItem(TODOS_KEY);

console.log(savedTodos);

if(savedTodos !== null){
  const parsedToDos = JSON.parse(savedTodos);
  console.log(parsedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}