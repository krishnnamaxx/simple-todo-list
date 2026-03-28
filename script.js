const toDolist= JSON.parse(localStorage.getItem('toDolist'))|| [{
    name:'wash clothes',
    dueDate:'2026-03-27'},
    {
        name:'watch youtube',
dueDate:'2026-03-28'}];
renderToDoList();

function renderToDoList(){
let  toDolistHTML='';
for(let i=0;i<toDolist.length;i++){
    const todoObject=toDolist[i];
   // const name=todoObject.name;
   // const dueDate=todoObject.dueDate;
    const {name,dueDate}=todoObject;
    const html =`
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
        toDolist.splice(${i},1);
        renderToDoList();
        <!-- whenever we update the todo list, save in localStorage . -->
        saveStorage();
    "class="delete-button">Delete</button>
    `;
    toDolistHTML+=html;
}
 document.querySelector('.js-display-task').innerHTML=toDolistHTML;
}

function addTask(){
    const inputElement= document.querySelector('.js-input');
     const name=inputElement.value;

     const dateInputElement=document.querySelector('.js-date-input');
     const dueDate=dateInputElement.value;
     toDolist.push({name:name,
        dueDate:dueDate}
     ); 
     
     inputElement.value='';
     renderToDoList();
     // Whenever we update the todo list, save in localStorage.
     saveStorage();
}

function saveStorage(){
    localStorage.setItem('toDolist',JSON.stringify(toDolist));
}

