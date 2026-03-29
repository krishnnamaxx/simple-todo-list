const toDolist= JSON.parse(localStorage.getItem('toDolist'))|| [{
    name:'wash clothes',
    dueDate:'2026-03-27'},
    {
        name:'watch youtube',
dueDate:'2026-03-28'}];
renderToDoList();

function renderToDoList(){
let  toDolistHTML='';
toDolist.forEach((todoObject)=>{
   // const name=todoObject.name;
   // const dueDate=todoObject.dueDate; 
    const {name,dueDate}=todoObject;
    const html =`
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-button js-delete-button">Delete</button>
    `;
    toDolistHTML+=html;
})
document.querySelector('.js-display-task')
.innerHTML=toDolistHTML;

document.querySelectorAll('.js-delete-button').forEach((deleteButton,index)=>{
    deleteButton.addEventListener('click',()=>{
         toDolist.splice(index,1);
        renderToDoList();
        saveStorage();
    })
})

}
document.querySelector('.js-add-button').addEventListener('click',()=>{
    addTask();
});

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

