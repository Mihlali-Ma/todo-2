/*function saveTodoList() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
    }
    
    function addItem() {
    let inputElement = document.getElementById('input');
    let newItem = inputElement.value.trim();
    if (newItem !== '') {
        let todoItem = {
            name: newItem,
            completed: false
        };
    
            todoList.push(todoItem);
            saveTodoList();
            renderTodoList();
            inputElement.value = '';
        }
    }

function toggleCompletion(index) {
        todoList[index].completed = !todoList[index].completed;
        saveTodoList();
        renderTodoList();

        if (todoList[index].completed) {
            todoList.splice(index, 1);
            saveTodoList();
            renderTodoList();
        }
    }

function sortItems() {
    todoList.sort(function (a, b) {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();

            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });

        saveTodoList();
        renderTodoList();
    }

document.getElementById('add').addEventListener('click', addItem);
document.getElementById('sort').addEventListener('click', sortItems);


renderTodoList();*/

//adding the true stuff

const input = document.getElementById("insert")
const list = document.getElementById("list")

function add() {
    if (input.value==='') {
    alert('add content inside')        
    }    else{
        let li = document.createElement("li")
        li.innerHTML=input.value
        list.appendChild(li)
        let span= document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
}

//sorting stuff

list.addEventListener('click',function(e){
    if(e.target.tagName==="li"){
        e.target.classlist.toggle("checked");
    }else if(e.target.tagName==="span"){
        e.target.parentElement.remove()
    }
},false)
