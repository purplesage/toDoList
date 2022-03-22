
const homeContentDefault = () => {

    let anchorDiv = document.createElement('div');
        anchorDiv.classList = "anchor-div";
        anchorDiv.setAttribute('id', 'anchor-div-id');

    let todoUl = document.createElement('ul');
        todoUl.setAttribute('id', 'todo-ul');
        todoUl.classList = "todo-ul-class";
    
    let ulHeader = document.createElement('li');
        ulHeader.innerHTML = "<h3>home</h3><h3>Due Date</h3>";
        ulHeader.classList = "ul-header";

    //*addTask button and todo-settings ghost div content here-----------------

    let ghostDiv = document.createElement('div');
    ghostDiv.classList = "ghost-div";


    let addTaskButton = document.createElement('div');
        addTaskButton.textContent = "Add Task";
        addTaskButton.classList = "normal-button";

    let todoSettingsTitle = document.createElement('input');
        todoSettingsTitle.setAttribute('type', 'text');
        todoSettingsTitle.setAttribute('placeholder', 'eg: title example');
        ghostDiv.appendChild(todoSettingsTitle);

    let todoSettingsDescription = document.createElement('input');
        todoSettingsDescription.setAttribute('type', 'text');
        todoSettingsDescription.setAttribute('placeholder', 'eg: description example');
        ghostDiv.appendChild(todoSettingsDescription);
    
    let inputList = ghostDiv.getElementsByTagName('input'); //used for makeTodo() function.

    let dueDateButton = document.createElement('input');
    dueDateButton.setAttribute('type', 'date');
   /*  dueDateButton.setAttribute('placeholder', 'eg: description example'); */
   dueDateButton.textContent = "Due date";
        ghostDiv.appendChild(dueDateButton);
    
    let projectNameButton = document.createElement('input');
    projectNameButton.setAttribute('type', 'text');
    projectNameButton.setAttribute('placeholder', 'project name');
        ghostDiv.appendChild(projectNameButton);
    
    let svgButtonsDiv = document.createElement('div');
        svgButtonsDiv.classList = "svg-buttons-div";

    let svgAddButton = document.createElement('button');
        svgAddButton.textContent = "ADD";
        svgAddButton.classList = "svg-button";
        /* svgAddButton.setAttribute('onclick', 'todoDivMaker()'); */
        svgButtonsDiv.appendChild(svgAddButton);

    let svgExitButton = document.createElement('button');
        svgExitButton.textContent = "EXIT";
        svgExitButton.classList = "svg-button";
        svgButtonsDiv.appendChild(svgExitButton);

    


//*ghostDiv reveal event listener.
    addTaskButton.addEventListener('click', () => {
        ghostDiv.style.display = "flex";
        svgButtonsDiv.style.display = "flex";
    });

//*ghostdiv hide event listener

svgExitButton.addEventListener('click', () => {
    ghostDiv.style.display = "none";
    svgButtonsDiv.style.display = "none";
})

//appending content to their respective divs.
    todoUl.appendChild(ulHeader);
    addTaskButton.appendChild(ghostDiv);
    todoUl.appendChild(addTaskButton);
    todoUl.appendChild(svgButtonsDiv);
    anchorDiv.appendChild(todoUl);

    const addContent = (elementToAdd) => {
        todoUl.appendChild(elementToAdd);
    }

    return {anchorDiv, addContent, inputList, svgAddButton, todoUl, ghostDiv, svgButtonsDiv};

};

const homeContent = homeContentDefault();

export {homeContent};



//! the object/div maker is currently under construction.
//it is here for testing purposes, might add them into the homeContentDefault() function.


const makeTodo = () => {   //todo pending: need to algeabrize this.
    let todo = {
        title: homeContent.inputList[0].value,
        description: homeContent.inputList[1].value,
        dueDate: homeContent.inputList[2].value,
        project: homeContent.inputList[3].value,
    }

    return todo;
}


const todoDivMaker = () => {
    let newTodo = makeTodo();

    let todoDiv = document.createElement('li');

    let titleP = document.createElement('p');
    titleP.textContent = `${newTodo.title}`;
    todoDiv.appendChild(titleP);

    let dateP = document.createElement('p');
    dateP.textContent = `${newTodo.dueDate}`;
    todoDiv.appendChild(dateP);

    homeContent.todoUl.appendChild(todoDiv);
}

homeContent.svgAddButton.addEventListener('click', () =>{
    todoDivMaker();
    homeContent.ghostDiv.style.display = "none";
    homeContent.svgButtonsDiv.style.display = "none";
})


























