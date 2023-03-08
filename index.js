var inbox = document.getElementById('inbox');
var add = document.querySelector('.addBtn');
var err = document.querySelector('.err')
var todos = document.querySelector('.todos');


inbox.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        if(inbox.value == ''){
            inbox.style.outline = '1px solid red';
            err.innerHTML = 'Inbox is empty!'
        }   
       else{
        addTask(inbox.value)
       }
    }
})
add.addEventListener('click', () => {
    if(inbox.value == ''){
        inbox.style.outline = '1px solid red';
        err.innerHTML = 'Inbox is empty!'
    }
    else{
        addTask(inbox.value)
        }
    } 
)





addTask = (todo) => {
    var newDiv = document.createElement('input');
    var label = document.createElement('div');
    var con = document.createElement('div');
    var del = document.createElement('i');
    var ed = document.createElement('i');
    var butCon = document.createElement('div');
    butCon.appendChild(newDiv);
    butCon.appendChild(del);    
    butCon.appendChild(ed);    
    con.setAttribute('class', 'todo-con');
    del.setAttribute('class', 'fa-sharp fa-solid fa-trash');
    ed.setAttribute('class', 'fa-solid fa-pen');
    newDiv.className = 'check'
    butCon.setAttribute('class', 'but-con');
    label.setAttribute('class', 'todo');
    label.innerHTML = todo;
    newDiv.setAttribute('type', 'checkbox');
    con.appendChild(label);
    con.appendChild(butCon);
    todos.appendChild(con) ;
    inbox.value = '';
    inbox.style.outline = 'none';
    err.innerHTML = '';
    
        del.onclick = () => {
            con.remove();
        }
        ed.onclick = () => {
            inbox.value = label.innerHTML;
            con.remove();
        }
    }
