// adds click functionality to add button
document.querySelector('.add-button').addEventListener('click', () => {addTodo();})

const todoList = JSON.parse(localStorage.getItem('todolist')) || []; // gets array from local storage or gets an empty array if there is none in storage

// renders todolist
renderTodoList();

function renderTodoList(){

    // initializes what you are about to add
    let todoListHTML = '';

    // while i < the array length it adds the name and due date with a button to delete it
    /*for(let i = 0; i < todoList.length; i++){

        // sets todoObject to the current object the array is pointing to
        const todoObject = todoList[i];
        // adds to the html string a prototype string that includes the values of the propertires withing the object that has been pushed to the array
        const html = `<div>${todoObject.name}</div> <div>${todoObject.dueDate}</div> <div><button onclick="todoList.splice(${i}, 1); renderTodoList();" class="delete">Delete</button></div>`
        todoListHTML += html;
    
    }*/
    // for each value of the array it goes through and runs the anonymous function
    // todoObject is the value and index is the index
    todoList.forEach((todoObject, index)=>{
        // adds to the html string a prototype string that includes the values of the propertires withing the object that has been pushed to the array
        const html = `<div>${todoObject.name}</div> <div>${todoObject.dueDate}</div> <div><button class="delete delete-button">Delete</button></div>`
        todoListHTML += html;
    })
    // saves the new array to local storage
    localStorage.setItem('todolist', JSON.stringify(todoList))
    // prints array to page
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    // queryselectorall acts like an array
    document.querySelectorAll('.delete-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index,1); 
            renderTodoList();
        })
    })
}

// adds to the array
function addTodo(){

    // gets the inputs
    const inputElement = document.querySelector('.js-name-input');
    const date = document.querySelector('.js-date-input').value;
    const name = inputElement.value;
    // since the property name and the attribute name share the same variable name we can set name to name just by typing name

    // pushes it to the array of objects
    todoList.push({name, dueDate: date});

    // clears the todoname input so it appears the data has been sent
    inputElement.value = ''

    // sets todolist item in storage to the new array
    localStorage.setItem('todolist', JSON.stringify(todoList))
    renderTodoList();
}