
const buttonTodo = document.querySelector("#todo-add-button");

let index = 1;
function addTodo(){
    const inputTodo = document.querySelector("#todo-input");
    const ParentTodo = document.querySelector("#todos");
    const textNode = document.createElement("div")
    // textNode.innerHTML = "<div id='todo-" + index + "'><h4>" + inputTodo + '</h4><button onclick="deleteTodo(' + index + ') ">Delete</button>';

    textNode.innerHTML = `<div id='todo-${index}'><h4>${inputTodo.value}</h4><button onclick='deleteTodo(${index})'><ion-icon name="trash"></ion-icon></button>`
    console.log("button clicker")
    ParentTodo.appendChild(textNode)
    index = index + 1;
    // inputTodo = "";
    inputTodo.value = "";
}

function deleteTodo(num){
    const element = document.getElementById("todo-" + num);
    element.parentNode.remove(element);
}

buttonTodo.addEventListener("click", addTodo)