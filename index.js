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

var Dell = (num) => {
    var toCons = document.querySelectorAll('.todo-con');

    for (let to in toCons){
        if( to == num)
        toCons[to].remove();
    }
}

var Edd = (no) => {
    var todos = document.querySelectorAll('.todo');
    var toCons = document.querySelectorAll('.todo-con');
    for(let to in todos){
        if(to == no){
            inbox.value = todos[to].innerHTML;
            toCons[to].remove();
        }
    }
} 

addTask = (todo) => {
    var newDiv = document.createElement('input');
    var label = document.createElement('div');
    var con = document.createElement('div');
    var del = document.createElement('div');
    var ed = document.createElement('div');
    var butCon = document.createElement('div');
    del.innerHTML = 'x';
    ed.innerHTML = 'Ed';
    butCon.appendChild(newDiv);
    butCon.appendChild(del);    
    butCon.appendChild(ed);    
    con.setAttribute('class', 'todo-con');
    del.setAttribute('class', 'del');
    ed.setAttribute('class', 'ed');
    butCon.setAttribute('class', 'but-con');
    label.setAttribute('class', 'todo');
    label.innerHTML = todo;
    newDiv.setAttribute('type', 'checkbox');
    con.appendChild(label);
    con.appendChild(butCon);
    todos.appendChild(con) ;
    inbox.value = '';
    inbox.style.outline = 'none';
    err.innerHTML = ''
    var dells = document.querySelectorAll('.del')
    var eds = document.querySelectorAll('.ed')
    for( let d in dells){
        dells[d].onclick = () => {
            Dell(d);
        }
    }
    for(let edds in eds){
        eds[edds].onclick = () => {
            Edd(edds);
        }
    }
}