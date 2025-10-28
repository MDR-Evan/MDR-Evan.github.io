const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const finishedList = document.getElementById("finished-list");

const TODOS_KEY = "todos";
const savedToDos = localStorage.getItem(TODOS_KEY);

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function toggleToDo(event) {
    const li = event.target.parentElement;
  
    if (li.parentElement.id === "todo-list") {
      finishedList.appendChild(li);
    } else {
      toDoList.appendChild(li);
    }
  
    const targetId = parseInt(li.id);
    toDos = toDos.map(toDo => {
      if (toDo.id === targetId) {
        return { ...toDo, done: !toDo.done };
      }
      return toDo;
    });
  
    saveToDos();
  }

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
}

function paintToDo(newToDoObj) {
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
    
    const finishedButton = document.createElement("button");
    finishedButton.innerText = "O";
    finishedButton.addEventListener("click", toggleToDo);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.addEventListener("click", deleteToDo);
    
    li.appendChild(span);
    li.appendChild(finishedButton);
    li.appendChild(deleteButton);
    
    if (newToDoObj.done) {
        finishedList.appendChild(li);
    } else {
        toDoList.appendChild(li);
    }
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
        done: false,
    }
    
    toDoInput.value = "";
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}