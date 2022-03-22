
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

    let dueDateButton = document.createElement('button');
        dueDateButton.textContent = "Due Date";
        ghostDiv.appendChild(dueDateButton);
    
    let projectNameButton = document.createElement('button');
        projectNameButton.textContent = "Project name";
        ghostDiv.appendChild(projectNameButton);
    
    let svgButtonsDiv = document.createElement('div');
        svgButtonsDiv.classList = "svg-buttons-div";

    let svgAddButton = document.createElement('button');
        svgAddButton.textContent = "ADD";
        svgAddButton.classList = "svg-button";
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

    return {anchorDiv, addContent};

};

const homeContent = homeContentDefault();


export {homeContent};

let mock = document.createElement('p');
mock.textContent = "some added content";

homeContent.addContent(mock)


























