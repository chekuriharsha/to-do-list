const todoSearchInput = window.document.getElementById("todoSearchInput")
const todoListItemsSelectParent = window.document.getElementById("todoListItemsSelectParent")
function addTask(){
    if((todoSearchInput.value) == ''){
        alert("Please! add the task.")
    }
    else{
        let li =  document.createElement("li");
        li.innerHTML = todoSearchInput.value;
        todoListItemsSelectParent.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    todoSearchInput.value = '';
    saveData();
}
todoListItemsSelectParent.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("todo-list-items-select");
        saveData();
    }
    else if(e.target.tagName === "SPAN" ){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",todoListItemsSelectParent.innerHTML);
}

function showTask(){
    todoListItemsSelectParent.innerHTML = localStorage.getItem("data");
}
showTask();